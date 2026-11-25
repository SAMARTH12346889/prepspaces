/**
 * INTEGRATION & CONCURRENCY TEST SUITE:
 * Cross-Worker-Instance Atomicity, Simultaneous Race Control, Backup Failure & Progress Preservation
 *
 * Simulates 3 isolated Cloudflare Worker instances (separate memory/routers)
 * coordinating via a shared Durable Object RPC stub + shared KV store.
 */

import { Hono } from "../backend/node_modules/hono/dist/index.js";
import { interviewRouter } from "../backend/src/routes/interviewRoutes.js";
import {
  CentralizedRateLimitAndQueueManager,
  CANDIDATE_COOLDOWN_NOTIFICATION,
} from "../backend/src/services/rateLimitAndKeyManager.js";
import { fetchGroqWithFallback } from "../backend/src/services/groqClient.js";
import { submitAnswer, endSession, createSession, startSession } from "../backend/src/services/interviewService.js";

function assert(cond, msg) {
  if (!cond) {
    console.error(`❌ ASSERTION FAILED: ${msg}`);
    throw new Error(msg);
  }
  console.log(`  ✓ ${msg}`);
}

/**
 * Simulates a Cloudflare Durable Object Namespace backed by an async serialized queue
 * (exactly how workerd executes a single Durable Object across multiple Worker isolates).
 */
function createSimulatedDONamespace(manager) {
  let serialChain = Promise.resolve();

  const stub = {
    async fetch(_url, init) {
      // Serialize every RPC call identically to Cloudflare Durable Object single-threaded semantics
      const task = serialChain.then(async () => {
        const { action, payload = {}, envMeta = null } = JSON.parse(init.body);
        if (envMeta) {
          for (let i = 1; i <= 5; i++) {
            const s = manager.keyStates.get(i);
            if (s && envMeta[`GROQ_KEY_${i}_CONFIGURED`] !== undefined) {
              s.configured = Boolean(envMeta[`GROQ_KEY_${i}_CONFIGURED`]);
            }
            if (s && envMeta[`GROQ_ORG_ID_${i}`]) s.organizationId = envMeta[`GROQ_ORG_ID_${i}`];
          }
        }
        let result;
        switch (action) {
          case "requestInterviewSlot":
            result = await manager.requestInterviewSlot(payload);
            break;
          case "releaseInterviewSlot":
            result = await manager.releaseInterviewSlot(payload);
            break;
          case "getQueueStatus":
            result = await manager.getQueueStatus(payload.sessionId);
            break;
          case "heartbeat":
            result = await manager.heartbeat(payload);
            break;
          case "getExecutionKeyForSlot":
            result = manager.getExecutionKeyForSlot(payload);
            break;
          case "recordProviderResponse":
            manager.recordProviderResponse(payload);
            result = { ok: true };
            break;
          case "triggerKeyCooldown":
            manager.triggerKeyCooldown(payload);
            result = { ok: true };
            break;
          case "markKeyError":
            manager.markKeyError(payload.keyIndex, payload.status, payload.reason);
            result = { ok: true };
            break;
          case "getSystemMetrics":
            result = manager.getSystemMetrics();
            break;
          default:
            throw new Error(`Unknown action ${action}`);
        }
        // Simulate Durable Object storage roundtrip snapshot serialization
        const persistedSnapshot = JSON.parse(JSON.stringify(manager.exportState()));
        manager.importState(persistedSnapshot);
        return new Response(JSON.stringify(result), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      });

      serialChain = task.catch(() => {});
      return task;
    },
  };

  return {
    idFromName: (name) => ({ name }),
    get: () => stub,
  };
}

function createSharedKV() {
  const map = new Map();
  return {
    async get(key, opts) {
      const val = map.get(key);
      if (val === undefined) return null;
      if (opts?.type === "json") return JSON.parse(val);
      return val;
    },
    async put(key, value) {
      map.set(key, typeof value === "string" ? value : JSON.stringify(value));
    },
    async delete(key) {
      map.delete(key);
    },
  };
}

async function runIntegrationAndConcurrencyTests() {
  console.log("\n=== INTEGRATION & CONCURRENCY TESTS: MULTI-INSTANCE + FAILURE RECOVERY ===\n");

  const doManager = new CentralizedRateLimitAndQueueManager();
  const sharedDO = createSimulatedDONamespace(doManager);
  const sharedKV = createSharedKV();

  // Build 3 independent Worker isolate environments sharing DO + KV bindings
  const makeWorkerApp = (workerLabel) => {
    const app = new Hono();
    app.use("*", async (c, next) => {
      c.env = {
        ENVIRONMENT: "test",
        WORKER_ISOLATE: workerLabel,
        PREPSPACES_DB: sharedKV,
        INTERVIEW_COORDINATOR: sharedDO,
        GROQ_API_KEY_1: "sec_1",
        GROQ_API_KEY_2: "sec_2",
        GROQ_API_KEY_3: "sec_3",
        GROQ_API_KEY_4: "sec_4",
        GROQ_API_KEY_5: "sec_5",
        GROQ_ORG_ID_1: "org_primary",
        GROQ_ORG_ID_5: "org_backup",
      };
      await next();
    });
    app.route("/api/interviews", interviewRouter);
    return app;
  };

  const worker1 = makeWorkerApp("isolate-A");
  const worker2 = makeWorkerApp("isolate-B");
  const worker3 = makeWorkerApp("isolate-C");
  const workers = [worker1, worker2, worker3];

  // ------------------------------------------------------------------
  // 1. Create 15 Sessions across Worker 1, 2, 3, then fire 15 SIMULTANEOUS /start calls!
  // ------------------------------------------------------------------
  console.log("1. Simultaneous Concurrency Race Test (15 concurrent /start across 3 Worker isolates)...");
  const sessionIds = [];
  for (let i = 0; i < 15; i++) {
    const w = workers[i % 3];
    const res = await w.request("/api/interviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ candidateId: `race_cand_${i + 1}`, moduleId: "M01" }),
    });
    const data = await res.json();
    sessionIds.push(data.session.id);
  }

  // Launch ALL 15 /start requests simultaneously!
  const startResponses = await Promise.all(
    sessionIds.map(async (sid, idx) => {
      const w = workers[(idx + 1) % 3]; // Hit a DIFFERENT Worker isolate than the one that created it!
      const res = await w.request(`/api/interviews/${sid}/start`, { method: "POST" });
      return { statusCode: res.status, body: await res.json(), sid };
    })
  );

  const admitted = startResponses.filter((r) => r.body.status === "ADMITTED");
  const queued = startResponses.filter((r) => r.body.status === "QUEUED");
  const rejected = startResponses.filter((r) => r.statusCode === 429 && r.body.status === "QUEUE_FULL");

  assert(admitted.length === 4, `Exactly 4 candidates admitted concurrently (got ${admitted.length})`);
  assert(queued.length === 5, `Exactly 5 candidates entered waiting queue (got ${queued.length})`);
  assert(rejected.length === 6, `Remaining 6 candidates rejected with 429 QUEUE_FULL (got ${rejected.length})`);

  const assignedKeys = new Set(admitted.map((a) => a.body.assignedKeyIndex));
  assert(
    assignedKeys.size === 4 && !assignedKeys.has(5) && [1, 2, 3, 4].every((k) => assignedKeys.has(k)),
    "Each active slot got a unique dedicated key (1..4); Key 5 strictly excluded"
  );

  const queuePositions = queued.map((q) => q.body.queuePosition).sort((a, b) => a - b);
  assert(
    JSON.stringify(queuePositions) === JSON.stringify([1, 2, 3, 4, 5]),
    "Queue positions strictly sequential [1, 2, 3, 4, 5] under concurrent load"
  );

  // ------------------------------------------------------------------
  // 2. Cross-Instance Queue Admission & Cooldown Visibility
  // ------------------------------------------------------------------
  console.log("\n2. Cross-Instance Admission (End on Worker 2 -> Queue #1 polled on Worker 3)...");
  const firstActive = admitted[0].sid;
  const firstQueued = queued.find((q) => q.body.queuePosition === 1).sid;

  // End firstActive via Worker 2
  const endRes = await worker2.request(`/api/interviews/${firstActive}/end`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reason: "USER_ENDED", answers: [] }),
  });
  assert(endRes.status === 200, "Active candidate 1 ended on Worker isolate B");

  // Poll queue-status for firstQueued via Worker 3
  const pollRes = await worker3.request(`/api/interviews/${firstQueued}/queue-status`);
  const pollData = await pollRes.json();
  assert(pollData.status === "ADMITTED", "FIFO #1 queued candidate automatically admitted across Worker isolate C");
  assert(pollData.slotId === admitted[0].body.slotId, "Reused freed slot accurately");

  // Check metrics from Worker 1
  const metricsRes = await worker1.request("/api/interviews/system-status");
  const metrics = await metricsRes.json();
  assert(metrics.distributedCoordinator === true, "Metrics confirm distributed Durable Object coordinator active");
  assert(metrics.systemCapacity.currentActive === 4, "Active capacity steady at 4 after auto-admission");
  assert(metrics.systemCapacity.currentQueue === 4, "Queue shrunk to 4 after FIFO #1 promoted");

  // ------------------------------------------------------------------
  // 3. Backup Failure + Provider-Wide Exhaustion + Interview Progress Preservation
  // ------------------------------------------------------------------
  console.log("\n3. Backup Key Failure, Org-Wide Exhaustion & Progress Preservation...");
  const envTest = {
    PREPSPACES_DB: sharedKV,
    INTERVIEW_COORDINATOR: sharedDO,
    GROQ_API_KEY_1: "sec_1",
    GROQ_API_KEY_2: "sec_2",
    GROQ_API_KEY_3: "sec_3",
    GROQ_API_KEY_4: "sec_4",
    GROQ_API_KEY_5: "sec_5",
    GROQ_ORG_ID_1: "org_primary",
    GROQ_ORG_ID_5: "org_backup",
  };

  const flowSession = await createSession({ userId: "recovery_user", moduleId: "M01", env: envTest });
  await startSession(flowSession.id, envTest, { slotId: "slot_1", assignedKeyIndex: 1 });

  // Q1 succeeds normally on Key 1
  const q1EvalFetch = async () =>
    new Response(
      JSON.stringify({
        choices: [{ message: { content: JSON.stringify({ scores: { relevance: 9, technical_correctness: 9, depth: 8, clarity: 9, communication: 9 }, overallScore: 8.8, feedback: "Great Q1" }) } }],
      }),
      { status: 200 }
    );
  const q1Result = await submitAnswer({
    sessionId: flowSession.id,
    questionId: flowSession.questions[0].id,
    transcript: "AI is the broad field, ML learns from data, DL uses neural layers, GenAI creates new content.",
    assignedKeyIndex: 1,
    env: envTest,
    fetchFn: q1EvalFetch,
  });
  assert(q1Result.evaluation.evaluatedBy === "groq-llama-3.3-70b-versatile", "Q1 evaluated via primary Key 1");

  // Q2: Key 1 returns 429, AND Key 5 fails with 503 (backup failure!)
  let callOrder = [];
  const q2BothFailFetch = async (_url, init) => {
    const auth = init.headers.get("Authorization");
    if (auth === "Bearer sec_1") {
      callOrder.push("PRIMARY_1_429");
      return new Response(JSON.stringify({ error: { message: "Per-key RPM reached" } }), {
        status: 429,
        headers: { "retry-after": "60" },
      });
    }
    if (auth === "Bearer sec_5") {
      callOrder.push("BACKUP_5_503");
      return new Response(JSON.stringify({ error: { message: "Backup service unavailable" } }), { status: 503 });
    }
    return new Response("Unexpected key", { status: 500 });
  };

  // Phase 1: twoPhaseFallback=true -> returns notice BEFORE attempting Key 5, AND saves draft!
  const q2Transcript = "Vectorization in NumPy operates over contiguous C arrays using SIMD instructions and avoids Python loop overhead.";
  const q2Phase1 = await submitAnswer({
    sessionId: flowSession.id,
    questionId: flowSession.questions[1].id,
    transcript: q2Transcript,
    assignedKeyIndex: 1,
    twoPhaseFallback: true,
    allowBackupFallback: false,
    env: envTest,
    fetchFn: q2BothFailFetch,
  });
  assert(q2Phase1.fallbackPending === true, "Q2 Phase 1 returned fallbackPending BEFORE calling backup Key 5");
  assert(q2Phase1.notificationMessage === CANDIDATE_COOLDOWN_NOTIFICATION, "Q2 Phase 1 returned exact candidate notification");
  assert(callOrder.length === 1 && callOrder[0] === "PRIMARY_1_429", "Key 5 was NOT attempted before notification");
  assert(q2Phase1.session.pendingDraft?.transcript === q2Transcript, "Q2 transcript saved in pendingDraft before fallback");

  // Phase 2: Candidate saw banner -> executes fallback; Key 5 ALSO fails (503) -> deterministic rubric saves Q2!
  const q2Phase2 = await submitAnswer({
    sessionId: flowSession.id,
    questionId: flowSession.questions[1].id,
    transcript: q2Transcript,
    assignedKeyIndex: 1,
    twoPhaseFallback: true,
    allowBackupFallback: true,
    env: envTest,
    fetchFn: q2BothFailFetch,
  });
  assert(q2Phase2.evaluation.evaluatedBy === "rubric-fallback", "Backup Key 5 failure cleanly recovered via deterministic rubric");
  assert(q2Phase2.session.answers.length === 2, "Both Q1 and Q2 answers preserved");

  // End session & verify zero data loss + idempotency
  const finalEnd1 = await endSession({ sessionId: flowSession.id, reason: "USER_ENDED", env: envTest });
  const finalEnd2 = await endSession({ sessionId: flowSession.id, reason: "USER_ENDED", env: envTest });
  assert(finalEnd1.report.questions.length === 2, "Final report preserved all Q&A progress despite primary & backup failures");
  assert(finalEnd2.idempotentHit === true, "Duplicate endSession call guarded idempotently");

  // Verify org-wide exhaustion skips Groq key rotation completely across coordinator RPC
  const orgErrMgr = new CentralizedRateLimitAndQueueManager();
  const orgDO = createSimulatedDONamespace(orgErrMgr);
  const orgEnv = {
    INTERVIEW_COORDINATOR: orgDO,
    GROQ_API_KEY_1: "k1",
    GROQ_API_KEY_5: "k5",
    GROQ_ORG_ID_1: "shared_org",
    GROQ_ORG_ID_5: "shared_org",
  };
  let groqCallsDuringOrgBlock = 0;
  const orgFailFetch = async () => {
    groqCallsDuringOrgBlock++;
    return new Response(JSON.stringify({ error: { message: "Organization org limit exhausted" } }), {
      status: 429,
      headers: { "x-ratelimit-scope": "organization", "retry-after": "120" },
    });
  };
  await fetchGroqWithFallback("https://api.groq.com/openai/v1/chat/completions", { method: "POST" }, orgEnv, "ChatEval", {
    assignedKeyIndex: 1,
    fetchFn: orgFailFetch,
  });
  assert(groqCallsDuringOrgBlock === 1, `Org-wide 429 stopped immediately after 1 call without rotating same-org Key 5 (calls=${groqCallsDuringOrgBlock})`);

  console.log("\n✅ ALL INTEGRATION & CONCURRENCY TESTS PASSED (100%)\n");
}

runIntegrationAndConcurrencyTests().catch((err) => {
  console.error(err);
  process.exit(1);
});
