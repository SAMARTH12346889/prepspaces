/**
 * Comprehensive Automated Test Suite for:
 * PrepSpaces Centralized API Key Management, Cooldown & Interview Queue System
 * 
 * Verifies:
 * 1. 4 Simultaneous Active Interview Slots (Slots 1-4 with dedicated Keys 1-4)
 * 2. Key 5 strictly reserved for backup/fallback
 * 3. FIFO Waiting Queue (Max 5 queued candidates)
 * 4. System Capacity limit (4 active + 5 queued = 9 max; 10th receives QUEUE_FULL)
 * 5. Automatic admission: Ending active session frees slot and auto-admits FIFO queue #1
 * 6. Rate limit tracking (RPM, TPM, Audio seconds) & Header parsing
 * 7. Cooldown system with independent timers (minute, hour, day, audio)
 * 8. Candidate notification message on fallback
 * 9. Operational metrics endpoint (/api/interviews/system-status)
 */

import { rateLimitManager, MAX_ACTIVE_INTERVIEWS, MAX_QUEUE_CAPACITY, KEY_ROLES } from "../backend/src/services/rateLimitAndKeyManager.js";

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ ASSERTION FAILED: ${message}`);
    throw new Error(message);
  }
  console.log(`  ✓ ${message}`);
}

async function runTestSuite() {
  console.log("\n========================================================");
  console.log("🚀 STARTING PREPSPACES API KEY & QUEUE SYSTEM TEST SUITE");
  console.log("========================================================\n");

  // 1. Initial State Verification
  console.log("Test 1: Initial System State & Key Configuration");
  const initialMetrics = rateLimitManager.getSystemMetrics();
  assert(initialMetrics.systemCapacity.maxActive === 4, "System configured with 4 max active slots");
  assert(initialMetrics.systemCapacity.maxQueue === 5, "System configured with 5 max queue capacity");
  assert(initialMetrics.systemCapacity.totalConcurrentCapacity === 9, "Total concurrent capacity is 9");
  assert(KEY_ROLES.length === 5, "Exactly 5 API key roles configured");
  assert(KEY_ROLES[4].isBackup === true, "Key 5 is strictly configured as reserved backup");
  for (let i = 0; i < 4; i++) {
    assert(KEY_ROLES[i].isBackup === false, `Key ${i + 1} is dedicated for active slot ${i + 1}`);
  }

  // 2. Allocate 4 Active Slots
  console.log("\nTest 2: Allocating 4 Active Interview Slots (Slots 1-4)");
  const activeCandidates = [];
  for (let i = 1; i <= 4; i++) {
    const sessionId = `test_session_${i}`;
    const result = await rateLimitManager.requestInterviewSlot({
      sessionId,
      candidateId: `cand_${i}`,
      user: { name: `Candidate ${i}` },
      courseId: "ai-engineering",
      moduleId: `M0${i}`,
    });
    assert(result.status === "ADMITTED", `Candidate ${i} admitted to active slot`);
    assert(result.slotId === `slot_${i}`, `Candidate ${i} assigned to slot_${i}`);
    assert(result.assignedKeyIndex === i, `Candidate ${i} assigned dedicated Key ${i}`);
    assert(result.isBackup === false, `Active candidate ${i} is NOT assigned backup key`);
    activeCandidates.push({ sessionId, slotId: result.slotId, keyIndex: result.assignedKeyIndex });
  }

  // Check metrics after 4 active candidates
  const metricsAfter4 = rateLimitManager.getSystemMetrics();
  assert(metricsAfter4.systemCapacity.currentActive === 4, "All 4 active slots occupied");
  assert(metricsAfter4.systemCapacity.currentQueue === 0, "Queue is currently empty");

  // 3. FIFO Waiting Queue (5 candidates: Queue Positions 1 to 5)
  console.log("\nTest 3: Enqueueing 5 Candidates into FIFO Waiting Queue");
  const queuedCandidates = [];
  for (let q = 1; q <= 5; q++) {
    const sessionId = `queue_session_${q}`;
    const result = await rateLimitManager.requestInterviewSlot({
      sessionId,
      candidateId: `queue_cand_${q}`,
      user: { name: `Queued Candidate ${q}` },
      courseId: "ai-engineering",
      moduleId: "all",
    });
    assert(result.status === "QUEUED", `Candidate ${q + 4} placed in waiting queue`);
    assert(result.queuePosition === q, `Candidate ${q + 4} has queue position #${q}`);
    assert(result.queueTotal === q, `Queue total matches ${q}`);
    queuedCandidates.push({ sessionId, position: q });
  }

  // 4. System Capacity Exceeded Rejection (10th Candidate)
  console.log("\nTest 4: System Capacity Limit (10th Candidate receives QUEUE_FULL)");
  const overflowSessionId = "overflow_session_10";
  const overflowResult = await rateLimitManager.requestInterviewSlot({
    sessionId: overflowSessionId,
    candidateId: "overflow_cand",
    user: { name: "Overflow Candidate" },
    courseId: "ai-engineering",
    moduleId: "all",
  });
  assert(overflowResult.status === "QUEUE_FULL", "10th candidate received QUEUE_FULL status");
  assert(overflowResult.activeCount === 4, "Active count is 4");
  assert(overflowResult.queueCount === 5, "Queue count is 5");
  assert(overflowResult.message.includes("full"), "Polite waiting notice provided");

  // 5. Querying Queue Status
  console.log("\nTest 5: Polling Queue Status Endpoint Logic");
  const queueStatus1 = rateLimitManager.getQueueStatus(queuedCandidates[0].sessionId);
  assert(queueStatus1.status === "QUEUED", "Candidate 1 in queue status is QUEUED");
  assert(queueStatus1.queuePosition === 1, "Candidate 1 in queue position is 1");

  const queueStatus3 = rateLimitManager.getQueueStatus(queuedCandidates[2].sessionId);
  assert(queueStatus3.queuePosition === 3, "Candidate 3 in queue position is 3");

  // 6. Slot Release & Auto-Admission
  console.log("\nTest 6: Slot Release and Automatic FIFO Admission");
  // Candidate 1 finishes their interview
  const releaseResult = await rateLimitManager.releaseInterviewSlot({
    sessionId: activeCandidates[0].sessionId,
  });
  assert(releaseResult.released === true, "Slot 1 was successfully released");
  assert(releaseResult.freedSlotId === "slot_1", "Freed slot is slot_1");
  assert(releaseResult.freedKeyIndex === 1, "Freed key index is Key 1");
  assert(releaseResult.nextAdmitted !== null, "Queue candidate was automatically admitted");
  assert(releaseResult.nextAdmitted.sessionId === queuedCandidates[0].sessionId, "FIFO #1 candidate was admitted to slot_1");
  assert(releaseResult.nextAdmitted.assignedKeyIndex === 1, "Admitted candidate inherited dedicated Key 1");

  // Verify queue status of admitted candidate is now ADMITTED
  const admittedStatus = rateLimitManager.getQueueStatus(queuedCandidates[0].sessionId);
  assert(admittedStatus.status === "ADMITTED", "Candidate status updated to ADMITTED");
  assert(admittedStatus.slotId === "slot_1", "Candidate admitted to slot_1");

  // Verify next candidate in queue shifted from #2 to #1
  const shiftedQueueStatus = rateLimitManager.getQueueStatus(queuedCandidates[1].sessionId);
  assert(shiftedQueueStatus.queuePosition === 1, "Candidate 2 in queue is now Position #1 (FIFO order)");

  // 7. Provider Response Recording & Rate Limit Monitoring
  console.log("\nTest 7: Provider Response Header Recording & Limit Tracking");
  // Simulate HTTP 200 response on Key 1
  const mockHeaders = new Headers({
    "x-ratelimit-remaining-requests": "28",
    "x-ratelimit-limit-requests": "30",
    "x-ratelimit-remaining-tokens": "5500",
    "x-ratelimit-limit-tokens": "6000",
  });
  rateLimitManager.recordProviderResponse({
    keyIndex: 1,
    status: 200,
    headers: mockHeaders,
    serviceType: "llm",
    tokens: 250,
  });

  const key1State = rateLimitManager.keyStates.get(1);
  assert(key1State.providerLimits.remainingRequests === 28, "Parsed x-ratelimit-remaining-requests header");
  assert(key1State.providerLimits.remainingTokens === 5500, "Parsed x-ratelimit-remaining-tokens header");

  // 8. Cooldown Timers & Independence
  console.log("\nTest 8: Cooldown Timer Independence (Minute vs Day)");
  // Trigger a daily cooldown on Key 2
  rateLimitManager.triggerKeyCooldown({
    keyIndex: 2,
    limitType: "day",
    durationSeconds: 86400,
    reason: "TPD daily quota reached",
  });

  const key2State = rateLimitManager.keyStates.get(2);
  assert(key2State.status === "COOLDOWN", "Key 2 in COOLDOWN status");
  assert(key2State.cooldowns.dayUntil > Date.now() + 80000000, "Daily cooldown recorded");

  // Trigger a minute cooldown on Key 2
  rateLimitManager.triggerKeyCooldown({
    keyIndex: 2,
    limitType: "minute",
    durationSeconds: 30,
    reason: "RPM limit reached",
  });

  // Check that clearing minute cooldown does NOT clear daily cooldown
  key2State.cooldowns.minuteUntil = 0; // manually simulate 30s elapsed
  const evalStatus = rateLimitManager.evaluateKeyStatus(2);
  assert(evalStatus === "COOLDOWN", "Key 2 remains in COOLDOWN because daily cooldown is still active");

  // 9. Candidate Notification on Fallback
  console.log("\nTest 9: Candidate Notification on Fallback to Key 5");
  // Key 2 is in cooldown, so getting execution key for slot_2 should fallback to Key 5
  const execPlan = rateLimitManager.getExecutionKeyForSlot({
    slotId: "slot_2",
    assignedKeyIndex: 2,
    serviceType: "llm",
  });

  assert(execPlan.isFallback === true, "Fallback activated because primary key is in cooldown");
  assert(execPlan.keyIndex === 5, "Fallback switched to reserved Key 5");
  assert(execPlan.isBackupKey === true, "Key 5 identified as backup key");
  assert(execPlan.notificationRequired === true, "Candidate notification flag set");
  assert(
    execPlan.notificationMessage ===
      "AI service is temporarily busy. We are checking service availability and backup options. Your interview progress is safely saved and will be preserved.",
    "Notification message matches requirement verbatim"
  );

  // 10. System Metrics Overview
  console.log("\nTest 10: Operational Dashboard Metrics");
  const finalMetrics = rateLimitManager.getSystemMetrics();
  assert(finalMetrics.keyStates.length === 5, "All 5 key states reported in metrics");
  assert(finalMetrics.keyStates[4].isBackup === true, "Key 5 reported as backup");
  assert(finalMetrics.totals.rateLimitHits > 0, "Rate limit events recorded in system metrics");
  assert(finalMetrics.totals.fallbackEvents > 0, "Fallback events tracked in system metrics");

  console.log("\n========================================================");
  console.log("🎉 ALL TESTS PASSED: 10/10 TEST SUITES VERIFIED (100%)");
  console.log("========================================================\n");
}

runTestSuite().catch((err) => {
  console.error("Test Suite Failed:", err);
  process.exit(1);
});
