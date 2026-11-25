/**
 * UNIT TEST SUITE: PrepSpaces Centralized Rate Limit, Cooldown, Secrets & Cleanup
 *
 * Tests:
 * 1. Pre-fallback notification ordering (MUST fire BEFORE backup Key 5 call)
 * 2. Per-key vs Project vs Organization-wide limit scoping (never blindly rotating same-org keys)
 * 3. Independent cooldown timers (minute, hour, day, tokenMinute, tokenDay, audioHour, audioDay)
 * 4. Service separation (LLM token cooldown vs Whisper audio cooldown)
 * 5. Automatic cooldown recovery on timer expiry
 * 6. Abandoned/disconnected session cleanup WITHOUT removing active candidates
 */

import {
  CentralizedRateLimitAndQueueManager,
  CANDIDATE_COOLDOWN_NOTIFICATION,
} from "../backend/src/services/rateLimitAndKeyManager.js";
import { fetchGroqWithFallback } from "../backend/src/services/groqClient.js";

function assert(cond, msg) {
  if (!cond) {
    console.error(`❌ ASSERTION FAILED: ${msg}`);
    throw new Error(msg);
  }
  console.log(`  ✓ ${msg}`);
}

async function runUnitTests() {
  console.log("\n=== UNIT TESTS: COOLDOWNS, SCOPING, PRE-FALLBACK NOTICE & CLEANUP ===\n");

  let fakeNow = 1_700_000_000_000;
  const mgr = new CentralizedRateLimitAndQueueManager({
    nowFn: () => fakeNow,
    leaseConfig: {
      activeHeartbeatTimeoutMs: 60000,
      maxActiveSlotDurationMs: 240000,
      queueHeartbeatTimeoutMs: 25000,
    },
  });

  // ------------------------------------------------------------------
  // 1. Independent Cooldown Timers (Minute, Hour, Day, Token, Audio)
  // ------------------------------------------------------------------
  console.log("1. Independent Cooldown Timers & Service Separation...");
  mgr.triggerKeyCooldown({ keyIndex: 1, limitType: "minute", durationSeconds: 30, reason: "RPM 429" });
  mgr.triggerKeyCooldown({ keyIndex: 1, limitType: "hour", durationSeconds: 1800, reason: "RPH 429" });
  mgr.triggerKeyCooldown({ keyIndex: 1, limitType: "day", durationSeconds: 43200, reason: "RPD 429" });
  mgr.triggerKeyCooldown({ keyIndex: 1, limitType: "tokenMinute", durationSeconds: 45, reason: "TPM 429" });
  mgr.triggerKeyCooldown({ keyIndex: 1, limitType: "tokenDay", durationSeconds: 30000, reason: "TPD 429" });
  mgr.triggerKeyCooldown({ keyIndex: 1, limitType: "audioHour", durationSeconds: 900, reason: "Whisper ASH 429" });
  mgr.triggerKeyCooldown({ keyIndex: 1, limitType: "audioDay", durationSeconds: 40000, reason: "Whisper ASD 429" });

  // Advance clock by 35s -> minute RPM expired, ALL others remain active!
  fakeNow += 35_000;
  assert(mgr.evaluateKeyStatus(1, "all") === "COOLDOWN", "Key 1 still in COOLDOWN after minute timer expired");
  const k1 = mgr.keyStates.get(1);
  assert(k1.cooldowns.minuteUntil === 0, "Minute timer cleared upon expiration");
  assert(k1.cooldowns.hourUntil > fakeNow, "Hourly timer stayed active after minute reset");
  assert(k1.cooldowns.dayUntil > fakeNow, "Daily timer stayed active after minute reset");
  assert(k1.cooldowns.tokenMinuteUntil > fakeNow, "Token-minute timer stayed active");
  assert(k1.cooldowns.tokenDayUntil > fakeNow, "Token-day timer stayed active");
  assert(k1.cooldowns.audioHourUntil > fakeNow, "Audio-hour timer stayed active");
  assert(k1.cooldowns.audioDayUntil > fakeNow, "Audio-day timer stayed active");

  // Service Separation on Key 2: Whisper audio cooldown should NOT block LLM chat
  mgr.triggerKeyCooldown({ keyIndex: 2, limitType: "audioHour", durationSeconds: 600, reason: "Whisper hourly audio limit" });
  assert(mgr.evaluateKeyStatus(2, "whisper") === "COOLDOWN", "Key 2 blocked for whisper audio service");
  assert(mgr.evaluateKeyStatus(2, "llm") === "AVAILABLE", "Key 2 remains AVAILABLE for LLM service despite whisper audio limit");

  // Service Separation on Key 3: LLM token cooldown should NOT block Whisper transcription
  mgr.triggerKeyCooldown({ keyIndex: 3, limitType: "tokenMinute", durationSeconds: 60, reason: "LLM TPM exceeded" });
  assert(mgr.evaluateKeyStatus(3, "llm") === "COOLDOWN", "Key 3 blocked for LLM service");
  assert(mgr.evaluateKeyStatus(3, "whisper") === "AVAILABLE", "Key 3 remains AVAILABLE for Whisper audio service despite LLM TPM limit");

  // ------------------------------------------------------------------
  // 2. Automatic Cooldown Recovery
  // ------------------------------------------------------------------
  console.log("\n2. Automatic Cooldown Recovery...");
  fakeNow += 65_000; // Advance past Key 3's 60s tokenMinute cooldown
  assert(mgr.evaluateKeyStatus(3, "llm") === "AVAILABLE", "Key 3 automatically recovered to AVAILABLE after cooldown expiry");
  assert(mgr.keyStates.get(3).cooldowns.tokenMinuteUntil === 0, "Expired tokenMinute cooldown cleared");

  // ------------------------------------------------------------------
  // 3. Per-Key vs Organization/Project-Wide Limits
  // ------------------------------------------------------------------
  console.log("\n3. Per-Key vs Organization/Project-Wide Limit Discrimination...");
  const orgMgr = new CentralizedRateLimitAndQueueManager({ nowFn: () => fakeNow });
  orgMgr.syncEnvironmentMetadata({
    GROQ_API_KEY_1: "k1",
    GROQ_API_KEY_2: "k2",
    GROQ_API_KEY_3: "k3",
    GROQ_API_KEY_4: "k4",
    GROQ_API_KEY_5: "k5",
    GROQ_ORG_ID_1: "org_shared_A",
    GROQ_ORG_ID_2: "org_shared_A",
    GROQ_ORG_ID_5: "org_shared_A", // Same org!
  });

  // Case A: Per-key limit on Key 1 -> Key 5 (backup) IS eligible
  orgMgr.recordProviderResponse({
    keyIndex: 1,
    status: 429,
    headers: { "retry-after": "30" },
    errorBodyText: "Rate limit reached for per-key requests per minute",
    serviceType: "llm",
  });
  const perKeyPlan = orgMgr.getExecutionKeyForSlot({ assignedKeyIndex: 1, serviceType: "llm" });
  assert(perKeyPlan.isFallback === true && perKeyPlan.keyIndex === 5, "Per-key limit routes fallback to Key 5");
  assert(perKeyPlan.skipGroqRotation === false, "Per-key limit allows backup Key 5");
  assert(orgMgr.evaluateKeyStatus(2, "llm") === "AVAILABLE", "Key 2 remains unaffected by Key 1 per-key cooldown");

  // Case B: Organization-wide limit on Key 2 -> Must NOT rotate to same-org Key 5!
  orgMgr.recordProviderResponse({
    keyIndex: 2,
    status: 429,
    headers: { "retry-after": "120", "x-ratelimit-scope": "organization" },
    errorBodyText: "Rate limit reached on organization org_shared_A tokens per day",
    serviceType: "llm",
  });
  const orgPlan = orgMgr.getExecutionKeyForSlot({ assignedKeyIndex: 2, serviceType: "llm" });
  assert(orgPlan.skipGroqRotation === true, "Org-wide limit skips rotating to same-org backup Key 5");
  assert(orgPlan.keyIndex === null, "No Groq key chosen when shared organization quota is blocked");
  assert(orgPlan.fallbackType === "LOCAL_RUBRIC_WORKERS_AI", "Routes to secondary non-Groq fallback");
  assert(orgPlan.notificationRequired === true, "Notification flagged on org-wide block");

  // Case C: Distinct org on Key 5 IS usable when only org_shared_A is blocked
  orgMgr.syncEnvironmentMetadata({ GROQ_ORG_ID_5: "org_backup_B" });
  const distinctOrgPlan = orgMgr.getExecutionKeyForSlot({ assignedKeyIndex: 2, serviceType: "llm" });
  assert(distinctOrgPlan.skipGroqRotation === false && distinctOrgPlan.keyIndex === 5, "Distinct-org backup Key 5 IS eligible when primary org is blocked");

  // ------------------------------------------------------------------
  // 4. Pre-Fallback Notification Ordering Guarantee
  // ------------------------------------------------------------------
  console.log("\n4. Candidate Cooldown Notification BEFORE API Fallback...");
  const eventTrace = [];
  const mockEnv = {
    GROQ_API_KEY_1: "test_secret_1",
    GROQ_API_KEY_2: "test_secret_2",
    GROQ_API_KEY_3: "test_secret_3",
    GROQ_API_KEY_4: "test_secret_4",
    GROQ_API_KEY_5: "test_secret_5",
    GROQ_ORG_ID_1: "org_1",
    GROQ_ORG_ID_5: "org_5",
  };

  // Phase 1 with twoPhaseFallback=true when Key 1 hits 429
  const mockFetch = async (_url, init) => {
    const auth = init.headers.get("Authorization");
    if (auth === "Bearer test_secret_1") {
      eventTrace.push("CALL_PRIMARY_KEY_1");
      return new Response(JSON.stringify({ error: { message: "Per-key RPM limit" } }), {
        status: 429,
        headers: { "retry-after": "30" },
      });
    }
    if (auth === "Bearer test_secret_5") {
      eventTrace.push("CALL_BACKUP_KEY_5");
      return new Response(JSON.stringify({ choices: [{ message: { content: "{}" } }] }), {
        status: 200,
      });
    }
    return new Response("Unexpected key", { status: 500 });
  };

  const phase1Res = await fetchGroqWithFallback(
    "https://api.groq.com/openai/v1/chat/completions",
    { method: "POST", body: "{}" },
    mockEnv,
    "ChatEvaluation",
    {
      assignedKeyIndex: 1,
      twoPhaseFallback: true,
      allowBackupFallback: false,
      fetchFn: mockFetch,
    }
  );
  assert(phase1Res.status === 202 && phase1Res.fallbackPending === true, "Phase 1 paused with HTTP 202 BEFORE calling backup Key 5");
  assert(phase1Res.candidateNotification === CANDIDATE_COOLDOWN_NOTIFICATION, "Phase 1 delivered exact candidate notification");
  assert(eventTrace.length === 1 && eventTrace[0] === "CALL_PRIMARY_KEY_1", "Backup Key 5 was NOT called before UI notification");

  // Phase 2 after UI renders banner
  eventTrace.push("UI_DISPLAYED_COOLDOWN_BANNER");
  const phase2Res = await fetchGroqWithFallback(
    "https://api.groq.com/openai/v1/chat/completions",
    { method: "POST", body: "{}" },
    mockEnv,
    "ChatEvaluation",
    {
      assignedKeyIndex: 1,
      twoPhaseFallback: true,
      allowBackupFallback: true,
      onBeforeFallback: () => eventTrace.push("ON_BEFORE_FALLBACK_HOOK"),
      fetchFn: mockFetch,
    }
  );
  assert(phase2Res.ok === true, "Phase 2 executed backup Key 5 cleanly");
  assert(
    eventTrace.indexOf("UI_DISPLAYED_COOLDOWN_BANNER") < eventTrace.indexOf("CALL_BACKUP_KEY_5"),
    "Strict chronological proof: Cooldown notification displayed BEFORE backup API call"
  );

  // ------------------------------------------------------------------
  // 5. Abandoned / Disconnected Session Cleanup vs Active Candidates
  // ------------------------------------------------------------------
  console.log("\n5. Abandoned Session Cleanup & Active Candidate Protection...");
  let cleanupClock = 2_000_000_000_000;
  const cleanMgr = new CentralizedRateLimitAndQueueManager({
    nowFn: () => cleanupClock,
    leaseConfig: {
      activeHeartbeatTimeoutMs: 60000,
      maxActiveSlotDurationMs: 240000,
      queueHeartbeatTimeoutMs: 25000,
    },
  });

  // Admit 4 candidates
  for (let i = 1; i <= 4; i++) {
    await cleanMgr.requestInterviewSlot({ sessionId: `sess_${i}`, candidateId: `c_${i}` });
  }
  // Queue 2 candidates
  await cleanMgr.requestInterviewSlot({ sessionId: "q_stale", candidateId: "q1" });
  await cleanMgr.requestInterviewSlot({ sessionId: "q_alive", candidateId: "q2" });

  // Advance 20s: sess_1, sess_2, sess_3 send heartbeats; sess_4 disconnects!
  // q_alive polls /queue-status; q_stale closes tab!
  cleanupClock += 20_000;
  await cleanMgr.heartbeat({ sessionId: "sess_1" });
  await cleanMgr.heartbeat({ sessionId: "sess_2" });
  await cleanMgr.heartbeat({ sessionId: "sess_3" });
  await cleanMgr.getQueueStatus("q_alive");

  // Advance another 45s (total 65s idle for sess_4, only 45s or less for sess_1..3? Wait: if sess_1..3 sent heartbeat at +20s, at +65s they are 45s since heartbeat < 60s!)
  // Wait let's keep sess_1..3 freshly heartbeating at +45s too so they stay under 60s
  cleanupClock += 25_000; // t = +45s
  await cleanMgr.heartbeat({ sessionId: "sess_1" });
  await cleanMgr.heartbeat({ sessionId: "sess_2" });
  await cleanMgr.heartbeat({ sessionId: "sess_3" });
  await cleanMgr.getQueueStatus("q_alive"); // q_stale is now 45s idle > 25s!

  cleanupClock += 20_000; // t = +65s: sess_4 has been idle 65s (> 60s timeout); sess_1..3 only 20s idle!
  const reapRes = cleanMgr.reapStaleSessions();
  assert(reapRes.reapedSlots.length === 1 && reapRes.reapedSlots[0].sessionId === "sess_4", "Only disconnected sess_4 reaped");
  assert(reapRes.reapedSlots[0].reason === "HEARTBEAT_TIMEOUT", "Reap reason recorded as HEARTBEAT_TIMEOUT");
  assert(cleanMgr.getSlotForSession("sess_1")?.slotId === "slot_1", "Active sess_1 preserved in slot_1");
  assert(cleanMgr.getSlotForSession("sess_2")?.slotId === "slot_2", "Active sess_2 preserved in slot_2");
  assert(cleanMgr.getSlotForSession("sess_3")?.slotId === "slot_3", "Active sess_3 preserved in slot_3");
  assert(
    reapRes.autoAdmitted.length === 1 && reapRes.autoAdmitted[0].sessionId === "q_alive",
    "Stale queued tab pruned first, active waiting q_alive auto-admitted into slot_4!"
  );

  console.log("\n✅ ALL UNIT TESTS PASSED (100%)\n");
}

runUnitTests().catch((err) => {
  console.error(err);
  process.exit(1);
});
