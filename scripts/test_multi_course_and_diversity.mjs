/**
 * Comprehensive Multi-Course Availability, Module Validation,
 * Duplicate Prevention & Cross-Session Question Diversity Test Suite
 */

import app from "../backend/src/index.js";
import { PREPSPACES_COURSES } from "../src/config/courseInterviewConfig.js";
import { PREPSPACES_COURSES as BACKEND_COURSES } from "../backend/src/config/courseInterviewConfig.js";
import {
  computeQuestionSimilarity,
  isSemanticallySimilar,
} from "../backend/src/services/interviewService.js";

let passed = 0;
let failed = 0;

function assert(desc, condition) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${desc}`);
  } else {
    failed++;
    console.error(`  ✗ FAIL: ${desc}`);
  }
}

async function run() {
  console.log("=== MULTI-COURSE & QUESTION DIVERSITY TEST SUITE ===\n");
  const mockEnv = { ENVIRONMENT: "test", PREPSPACES_DB: null };

  // 1. Course catalog unlock & frontend/backend parity
  console.log("1. Course Catalog Unlock & Parity Checks...");
  assert("Exactly 10 courses exist in config", PREPSPACES_COURSES.length === 10);
  assert(
    "All 10 courses unlocked (isActive: true, comingSoon: false)",
    PREPSPACES_COURSES.every((c) => c.isActive === true && c.comingSoon === false)
  );
  assert(
    "Frontend and backend course registries match in count and modules",
    PREPSPACES_COURSES.length === BACKEND_COURSES.length &&
      PREPSPACES_COURSES.every((c, i) => c.id === BACKEND_COURSES[i].id && c.modules.length === BACKEND_COURSES[i].modules.length)
  );

  // 2. Backend validation for valid & invalid courseId/moduleId
  console.log("\n2. Backend Course & Module Validation...");
  {
    const badCourseRes = await app.request(
      "/api/interviews",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId: "non-existent-course", moduleId: "all" }),
      },
      mockEnv
    );
    assert("Invalid courseId returns HTTP 400", badCourseRes.status === 400);

    const badModRes = await app.request(
      "/api/interviews",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId: "devops", moduleId: "invalid-xyz-mod" }),
      },
      mockEnv
    );
    assert("Invalid moduleId returns HTTP 400", badModRes.status === 400);
  }

  // 3. Test ALL 10 courses (All Modules + Individual Module) + zero duplicates + semantic variety
  console.log("\n3. Full 7-Question Sessions Across All 10 Courses...");
  for (const course of PREPSPACES_COURSES) {
    const candidateId = `qa_cand_${course.id}_${Date.now()}`;
    const res1 = await app.request(
      "/api/interviews",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ candidateId, courseId: course.id, moduleId: "all" }),
      },
      mockEnv
    );
    assert(`[${course.id}] All Modules session returns HTTP 201`, res1.status === 201);
    const d1 = await res1.json();
    const qs1 = d1.session?.questions || [];
    assert(`[${course.id}] Allocates 7 questions`, qs1.length === 7);

    const uniqueTexts1 = new Set(qs1.map((q) => q.questionText.trim().toLowerCase()));
    const uniqueFps1 = new Set(qs1.map((q) => q.fingerprint));
    const uniqueMods1 = new Set(qs1.map((q) => q.moduleId));
    assert(`[${course.id}] All 7 questions have unique text & fingerprints`, uniqueTexts1.size === 7 && uniqueFps1.size === 7);
    assert(`[${course.id}] All Modules spans 7 distinct modules`, uniqueMods1.size === 7);

    // Check semantic similarity between every pair in the session
    let maxSim = 0;
    for (let i = 0; i < qs1.length; i++) {
      for (let j = i + 1; j < qs1.length; j++) {
        maxSim = Math.max(maxSim, computeQuestionSimilarity(qs1[i], qs1[j]));
      }
    }
    assert(`[${course.id}] Max pairwise similarity < 0.48 (observed=${maxSim.toFixed(2)})`, maxSim < 0.48);

    // Consecutive session for SAME candidate must yield completely different questions (cross-session history)
    const res2 = await app.request(
      "/api/interviews",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ candidateId, courseId: course.id, moduleId: "all" }),
      },
      mockEnv
    );
    const d2 = await res2.json();
    const qs2 = d2.session?.questions || [];
    const overlapCount = qs2.filter((q) => uniqueFps1.has(q.fingerprint)).length;
    assert(
      `[${course.id}] Consecutive session for same candidate avoids repeats (overlap=${overlapCount}/7)`,
      overlapCount === 0
    );

    // Single specific module check (pick middle real module)
    const specificMod = course.modules[Math.min(4, course.modules.length - 1)];
    const resMod = await app.request(
      "/api/interviews",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          candidateId: `qa_mod_${course.id}_${Date.now()}`,
          courseId: course.id,
          moduleId: specificMod.id,
        }),
      },
      mockEnv
    );
    assert(`[${course.id}/${specificMod.id}] Specific module session returns HTTP 201`, resMod.status === 201);
    const dMod = await resMod.json();
    const qMod = dMod.session?.questions || [];
    const uniqueModFps = new Set(qMod.map((q) => q.fingerprint));
    assert(`[${course.id}/${specificMod.id}] 7 unique non-duplicate questions`, qMod.length === 7 && uniqueModFps.size === 7);
    assert(
      `[${course.id}/${specificMod.id}] Questions tagged to requested module`,
      qMod.every((q) => q.moduleId === specificMod.id)
    );
  }

  // 4. Direct semantic similarity guard unit check
  console.log("\n4. Semantic Similarity Detector Guard...");
  const chosen = [{ questionText: "How do Kafka partitions enable horizontal throughput scaling and ordering?" }];
  assert(
    "Detects near-duplicate phrasing",
    isSemanticallySimilar(
      { question: "How do Kafka partitions enable horizontal throughput scaling with strict ordering?" },
      chosen
    ) === true
  );
  assert(
    "Allows genuinely distinct question",
    isSemanticallySimilar(
      { question: "Compare two-phase commit against Saga compensating transactions in microservices." },
      chosen
    ) === false
  );

  console.log(`\n==============================================`);
  console.log(`TOTAL: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
  console.log(`==============================================`);
  if (failed > 0) process.exit(1);
}

run();
