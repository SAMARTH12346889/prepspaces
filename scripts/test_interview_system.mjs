/**
 * PrepSpaces AI Interview System API Test Suite
 * Tests backend endpoints:
 * 1. POST /api/interviews (Create Session)
 * 2. GET /api/interviews/:id (Fetch Session)
 * 3. POST /api/interviews/:id/start (Start Timer)
 * 4. POST /api/interviews/:id/violation (Proctoring Violation)
 * 5. POST /api/interviews/:id/answers (Answer & Rubric Evaluation)
 * 6. POST /api/interviews/:id/end (Generate Final Report)
 * 7. POST /api/voice/transcribe (Voice STT Validation)
 */

import app from "../backend/src/index.js";

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(desc, condition) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ ${desc}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${desc}`);
  }
}

async function runInterviewApiTests() {
  console.log("=== PREPSPACES AI INTERVIEW API TEST SUITE ===\n");

  const mockEnv = {
    ENVIRONMENT: "test",
    PREPSPACES_DB: null, // triggers in-memory KV fallback in storageService
  };

  const testUserId = `test_candidate_${Date.now()}`;
  let sessionId = null;
  let firstQuestionId = null;

  // 1. Create Interview Session
  console.log("1. Testing Session Creation (POST /api/interviews)...");
  {
    const res = await app.request(
      "/api/interviews",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          candidateId: testUserId,
          candidateName: "Test Candidate",
          courseId: "ai-engineering",
          topicId: "all",
          durationSeconds: 180,
        }),
      },
      mockEnv
    );

    assert("Creation returns HTTP 201", res.status === 201);
    const data = await res.json();
    assert("Session payload contains id", !!data.session?.id);
    assert("Session status is PENDING", data.session?.status === "PENDING");
    assert("Duration is 180 seconds", data.session?.durationSeconds === 180);
    assert("First question is allocated", !!data.session?.currentQuestion?.question);
    assert("Current question has expected points", Array.isArray(data.session?.currentQuestion?.expected_points));

    sessionId = data.session?.id;
    firstQuestionId = data.session?.currentQuestion?.id;
  }

  // 1b. Module-Specific Question Allocation Validation
  console.log("\n1b. Testing Module-Specific Question Allocation (M08 & M11)...");
  {
    // Test M08
    const resM08 = await app.request(
      "/api/interviews",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          candidateId: `cand_m08_${Date.now()}`,
          courseId: "ai-engineering",
          moduleId: "M08",
        }),
      },
      mockEnv
    );
    assert("M08 session creation returns HTTP 201", resM08.status === 201);
    const dataM08 = await resM08.json();
    const questionsM08 = dataM08.session?.questions || [];
    assert("M08 session allocates questions", questionsM08.length > 0);
    const allAreM08 = questionsM08.every(
      (q) => q.moduleId === "M08" || q.id.startsWith("M08")
    );
    assert("All questions in M08 session belong strictly to Module 08", allAreM08);

    // Test M11
    const resM11 = await app.request(
      "/api/interviews",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          candidateId: `cand_m11_${Date.now()}`,
          courseId: "ai-engineering",
          moduleId: "M11",
        }),
      },
      mockEnv
    );
    assert("M11 session creation returns HTTP 201", resM11.status === 201);
    const dataM11 = await resM11.json();
    const questionsM11 = dataM11.session?.questions || [];
    assert("M11 session allocates questions", questionsM11.length > 0);
    const allAreM11 = questionsM11.every(
      (q) => q.moduleId === "M11" || q.id.startsWith("M11")
    );
    assert("All questions in M11 session belong strictly to Module 11", allAreM11);
  }

  // 2. Fetch Interview Session
  console.log("\n2. Testing Fetch Session (GET /api/interviews/:id)...");
  {
    const res = await app.request(`/api/interviews/${sessionId}`, { method: "GET" }, mockEnv);
    assert("Fetch returns HTTP 200", res.status === 200);
    const data = await res.json();
    assert("Fetched session ID matches", data.session?.id === sessionId);
    assert("Fetched candidate matches", data.session?.candidateId === testUserId);
  }

  // 3. Start Interview
  console.log("\n3. Testing Start Session (POST /api/interviews/:id/start)...");
  {
    const res = await app.request(
      `/api/interviews/${sessionId}/start`,
      { method: "POST" },
      mockEnv
    );
    assert("Start returns HTTP 200", res.status === 200);
    const data = await res.json();
    assert("Session status changed to ACTIVE", data.session?.status === "ACTIVE");
    assert("startedAt timestamp is set", !!data.session?.startedAt);
    assert("expiresAt timestamp is set to startedAt + 180s", 
      data.session?.expiresAt === data.session?.startedAt + 180000
    );
  }

  // 4. Record Proctoring Violation
  console.log("\n4. Testing Proctoring Violation (POST /api/interviews/:id/violation)...");
  {
    const res = await app.request(
      `/api/interviews/${sessionId}/violation`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "FULLSCREEN_EXIT",
          details: "Candidate pressed ESC",
        }),
      },
      mockEnv
    );
    assert("Violation returns HTTP 200", res.status === 200);
    const data = await res.json();
    assert("Violation was recorded", data.violationsCount >= 1);
  }

  // 5. Submit Answer & Evaluation
  console.log("\n5. Testing Submit Answer & Rubric Evaluation (POST /api/interviews/:id/answers)...");
  {
    const res = await app.request(
      `/api/interviews/${sessionId}/answers`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId: firstQuestionId,
          transcript: "Budget alert thresholds and model tier routing differ in practical use because budget alerts trigger notifications when spending limits are reached, whereas model tier routing dynamically directs requests to lighter or larger models based on complexity and cost constraints to optimize latency and resource utilization.",
          durationSeconds: 35,
        }),
      },
      mockEnv
    );
    assert("Submit answer returns HTTP 200", res.status === 200);
    const data = await res.json();
    assert("Evaluation contains score between 1 and 10", typeof data.evaluation?.score === "number" && data.evaluation?.score >= 1 && data.evaluation?.score <= 10);
    assert("Evaluation contains feedback string", typeof data.evaluation?.feedback === "string");
    assert("Next question is returned for uncapped flow", !!data.nextQuestion?.id);
    assert("Next question is different from first question", data.nextQuestion?.id !== firstQuestionId);
  }

  // 6. Complete / End Interview and Generate Final Report
  console.log("\n6. Testing End Session & Report Generation (POST /api/interviews/:id/end)...");
  {
    const res = await app.request(
      `/api/interviews/${sessionId}/end`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason: "TIME_EXPIRED" }),
      },
      mockEnv
    );
    assert("End session returns HTTP 200", res.status === 200);
    const data = await res.json();
    assert("Session status changed to COMPLETED", data.session?.status === "COMPLETED");
    assert("Final report is generated", !!data.report);
    assert("Report contains overall score", typeof data.report?.overallScore === "number");
    assert("Report contains grade badge (A/B/C/D)", !!data.report?.grade);
    assert("Report includes answers breakdown", Array.isArray(data.report?.answers) && data.report.answers.length >= 1);
  }

  // 7. Voice Transcribe Endpoint Guard & Validation
  console.log("\n7. Testing Voice Transcribe Route Guard (POST /api/voice/transcribe & POST /api/transcribe)...");
  {
    const res = await app.request(
      "/api/voice/transcribe",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      },
      mockEnv
    );
    assert("Empty audio payload returns HTTP 400 on /api/voice/transcribe", res.status === 400);
    const data = await res.json();
    assert("Returns error message for missing audio", !!data.error);

    // Direct proxy route /api/transcribe test
    const res2 = await app.request(
      "/api/transcribe",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      },
      mockEnv
    );
    assert("Direct proxy /api/transcribe accepts requests and validates payload", res2.status === 400);
  }

  console.log("\n==============================================");
  console.log(`TOTAL: ${totalTests} | PASSED: ${passedTests} | FAILED: ${failedTests}`);
  console.log("==============================================");

  if (failedTests > 0) {
    process.exit(1);
  }
}

runInterviewApiTests().catch((err) => {
  console.error("Test failed with exception:", err);
  process.exit(1);
});
