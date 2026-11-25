/**
 * PRODUCTION SECURITY & LIVE DURABLE OBJECT VERIFICATION SUITE
 *
 * 1. Scans wrangler.jsonc, frontend src/, production dist/, backend/src/, and scripts/
 *    for zero hardcoded API key exposure (gsk_*)
 * 2. Tests live Wrangler runtime (http://127.0.0.1:8787) backed by real Durable Object
 *    InterviewCoordinatorDO across simultaneous starts, queue overflow, heartbeat & auto-admission.
 */

import fs from "fs";
import path from "path";

function assert(cond, msg) {
  if (!cond) {
    console.error(`❌ ASSERTION FAILED: ${msg}`);
    throw new Error(msg);
  }
  console.log(`  ✓ ${msg}`);
}

function scanDirectoryForPattern(dirPath, regex, matches = []) {
  if (!fs.existsSync(dirPath)) return matches;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === ".git" || entry.name === ".wrangler") continue;
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      scanDirectoryForPattern(full, regex, matches);
    } else if (/\.(js|jsx|ts|tsx|mjs|cjs|json|jsonc|html|css)$/i.test(entry.name)) {
      const content = fs.readFileSync(full, "utf8");
      if (regex.test(content)) {
        matches.push(full);
      }
    }
  }
  return matches;
}

async function runSecurityAndLiveTests() {
  console.log("\n=== PRODUCTION SECURITY & LIVE WORKER DURABLE OBJECT VERIFICATION ===\n");

  // ------------------------------------------------------------------
  // 1. Secret Exposure Scan
  // ------------------------------------------------------------------
  console.log("1. Scanning Repo & Production Build for Exposed Secrets (gsk_*)...");
  const secretRegex = /gsk_[A-Za-z0-9]{20,}/;

  const wranglerContent = fs.readFileSync("projectx/backend/wrangler.jsonc", "utf8");
  assert(!secretRegex.test(wranglerContent), "wrangler.jsonc contains ZERO API keys");
  assert(!wranglerContent.includes("GROQ_API_KEY"), "wrangler.jsonc contains zero GROQ_API_KEY vars");

  const srcHits = scanDirectoryForPattern("projectx/src", secretRegex);
  assert(srcHits.length === 0, `Frontend src/ contains ZERO API keys (hits=${srcHits.length})`);

  const backendSrcHits = scanDirectoryForPattern("projectx/backend/src", secretRegex);
  assert(backendSrcHits.length === 0, `Backend src/ contains ZERO hardcoded API keys (hits=${backendSrcHits.length})`);

  const scriptsHits = scanDirectoryForPattern("projectx/scripts", secretRegex);
  assert(scriptsHits.length === 0, `Scripts directory contains ZERO hardcoded API keys (hits=${scriptsHits.length})`);

  if (fs.existsSync("projectx/dist")) {
    const distHits = scanDirectoryForPattern("projectx/dist", secretRegex);
    assert(distHits.length === 0, `Compiled production bundle dist/ contains ZERO API keys (hits=${distHits.length})`);

    const viteGroqHits = scanDirectoryForPattern("projectx/dist", /VITE_GROQ_API_KEY/);
    assert(viteGroqHits.length === 0, `Compiled dist/ contains ZERO VITE_GROQ_API_KEY references`);
  }

  // ------------------------------------------------------------------
  // 2. Live Wrangler Worker + Real Durable Object Concurrency Verification
  // ------------------------------------------------------------------
  console.log("\n2. Testing Live Wrangler Worker + InterviewCoordinatorDO (http://127.0.0.1:8787)...");
  const BASE = "http://127.0.0.1:8787";

  const statusBefore = await fetch(`${BASE}/api/interviews/system-status`).then((r) => r.json());
  assert(statusBefore.success === true, "Live /api/interviews/system-status responded HTTP 200");
  assert(statusBefore.distributedCoordinator === true, "Live backend confirmed running distributed Durable Object InterviewCoordinatorDO");

  // Create 10 sessions on live Worker
  const createdIds = [];
  for (let i = 0; i < 10; i++) {
    const r = await fetch(`${BASE}/api/interviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ candidateId: `live_cand_${i + 1}`, moduleId: "M01" }),
    });
    const d = await r.json();
    createdIds.push(d.session.id);
  }

  // Start all 10 simultaneously against live Wrangler DO
  const startResults = await Promise.all(
    createdIds.map(async (sid) => {
      const r = await fetch(`${BASE}/api/interviews/${sid}/start`, { method: "POST" });
      return { httpStatus: r.status, data: await r.json(), sid };
    })
  );

  const liveAdmitted = startResults.filter((x) => x.data.status === "ADMITTED");
  const liveQueued = startResults.filter((x) => x.data.status === "QUEUED");
  const liveFull = startResults.filter((x) => x.httpStatus === 429 && x.data.status === "QUEUE_FULL");

  assert(liveAdmitted.length === 4, `Live DO admitted strictly 4 active candidates (got ${liveAdmitted.length})`);
  assert(liveQueued.length === 5, `Live DO queued strictly 5 candidates (got ${liveQueued.length})`);
  assert(liveFull.length === 1, `Live DO rejected 10th candidate with HTTP 429 QUEUE_FULL (got ${liveFull.length})`);

  // Test Heartbeat on an active candidate
  const hbRes = await fetch(`${BASE}/api/interviews/${liveAdmitted[0].sid}/heartbeat`, { method: "POST" }).then((r) => r.json());
  assert(hbRes.found === true && hbRes.location === "ACTIVE_SLOT", "Live heartbeat refreshed active slot lease");

  // End Slot 1 -> verify Queue #1 is auto-admitted on live DO!
  const q1Sid = liveQueued.find((x) => x.data.queuePosition === 1).sid;
  await fetch(`${BASE}/api/interviews/${liveAdmitted[0].sid}/end`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reason: "USER_ENDED", answers: [] }),
  });

  const q1Poll = await fetch(`${BASE}/api/interviews/${q1Sid}/queue-status`).then((r) => r.json());
  assert(q1Poll.status === "ADMITTED", "Live DO automatically promoted Queue #1 when active interview ended");

  // Clean up all test active & queued sessions so live dev server returns to 0/4 active
  for (const x of [...liveAdmitted.slice(1), ...liveQueued]) {
    await fetch(`${BASE}/api/interviews/${x.sid}/end`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reason: "TEST_CLEANUP", answers: [] }),
    });
  }
  const statusAfter = await fetch(`${BASE}/api/interviews/system-status`).then((r) => r.json());
  assert(statusAfter.systemCapacity.currentActive === 0, "Cleaned up test sessions; active capacity restored to 0/4");
  assert(statusAfter.systemCapacity.currentQueue === 0, "Queue capacity restored to 0/5");

  console.log("\n✅ ALL SECURITY & LIVE DURABLE OBJECT TESTS PASSED (100%)\n");
}

runSecurityAndLiveTests().catch((err) => {
  console.error(err);
  process.exit(1);
});
