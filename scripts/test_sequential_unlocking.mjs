import assert from "assert";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  computeCourseAccessState,
  validateAndCompleteModule,
} from "../backend/src/services/unlockingService.js";
import {
  migrateGuestToUser,
  getGuestCourseProgress,
  getCourseProgress,
} from "../backend/src/services/storageService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.resolve(__dirname, "..");

console.log("\n====================================================");
console.log(" PREPSPACES UNRESTRICTED COURSE ACCESS QA TEST SUITE");
console.log("====================================================\n");

let passed = 0;
let failed = 0;

function check(desc, condition) {
  if (condition) {
    console.log(`  ✓ [PASS] ${desc}`);
    passed++;
  } else {
    console.error(`  ✗ [FAIL] ${desc}`);
    failed++;
  }
}

// Mock environment
const mockEnv = {};
const mockModules = Array.from({ length: 24 }, (_, i) => ({
  id: `mod-${i + 1}`,
  name: `Module ${i + 1}`,
  route: `/learning/test/module-${i + 1}`,
}));

mockEnv.ASSETS = {
  fetch: async (url) => {
    const pathName = new URL(url).pathname;
    if (pathName.includes("/modules.json")) {
      return { ok: true, json: async () => mockModules };
    }
    if (pathName.includes("/course.json")) {
      return { ok: true, json: async () => ({ id: "test-course", title: "Test Course", totalModules: 24 }) };
    }
    return { ok: false, status: 404 };
  },
};

const reqUrl = "https://api.prepspaces.com/test";

async function runSequentialTests() {
  const guestUser = { isGuest: true, guestId: `guest_test_${Date.now()}` };
  const authStudent = { isGuest: false, userId: `usr_student_${Date.now()}` };

  // 1. Initial State: ALL Modules Unlocked for Guests and Users
  console.log("SUITE 1: 100% Unrestricted Module Access (All 24 Modules Unlocked)");
  const initialGuest = await computeCourseAccessState("test-course", guestUser, mockEnv, reqUrl);
  check("Module 1 is unlocked initially", initialGuest.modules[0].isUnlocked === true);
  check("Module 5 is unlocked directly", initialGuest.modules[4].isUnlocked === true);
  check("Module 7 is unlocked directly without login", initialGuest.modules[6].isUnlocked === true);
  check("Module 8 is unlocked directly", initialGuest.modules[7].isUnlocked === true);
  check("Module 10 is unlocked directly", initialGuest.modules[9].isUnlocked === true);
  check("Module 24 is unlocked directly", initialGuest.modules[23].isUnlocked === true);
  check("No module requires authentication to unlock", initialGuest.modules.every((m) => m.requiresAuth === false));
  check("All 24 modules are unlocked", initialGuest.modules.every((m) => m.isUnlocked === true));

  // 2. Direct Completion Without Sequential Prerequisites
  console.log("\nSUITE 2: Direct Access & Completion in Any Order");
  const mod10Complete = await validateAndCompleteModule("test-course", "mod-10", {}, guestUser, mockEnv, reqUrl);
  check("Module 10 can be completed directly without completing modules 1-9", mod10Complete.success === true);
  check("No compulsory auth prompt returned", mod10Complete.promptAuthNow === false);

  const mod24Complete = await validateAndCompleteModule("test-course", "mod-24", {}, guestUser, mockEnv, reqUrl);
  check("Module 24 can be completed directly", mod24Complete.success === true);

  // 3. Authenticated Access & Progress
  console.log("\nSUITE 3: Authenticated Free Access & Progress Preservation");
  const authState = await computeCourseAccessState("test-course", authStudent, mockEnv, reqUrl);
  check("Authenticated user has all 24 modules unlocked", authState.modules.every((m) => m.isUnlocked === true));
  check("Authenticated user requiresAuth is false for all modules", authState.modules.every((m) => m.requiresAuth === false));

  // 4. UI Cleanliness Audit (No Lock Barriers or Lock Icons)
  console.log("\nSUITE 4: UI Integrity (Lock Barriers & Lock Icons Eliminated)");
  const moduleNavPath = path.join(baseDir, "src/Componets/ModuleNav.jsx");
  const cloudPath = path.join(baseDir, "src/Componets/CloudComputing.jsx");
  const guardPath = path.join(baseDir, "src/Componets/CourseAccessGuard.jsx");
  const cachingPath = path.join(baseDir, "src/Componets/SystemDesignCaching.jsx");

  const moduleNavContent = fs.readFileSync(moduleNavPath, "utf8");
  const cloudContent = fs.readFileSync(cloudPath, "utf8");
  const guardContent = fs.readFileSync(guardPath, "utf8");
  const cachingContent = fs.readFileSync(cachingPath, "utf8");

  check("ModuleNav.jsx removed Direct URL Barrier", !moduleNavContent.includes("DIRECT URL BARRIER"));
  check("ModuleNav.jsx removed Compulsory Auth Modal", !moduleNavContent.includes("Create Account to Unlock Module 7"));
  check("ModuleNav.jsx module tabs have no lock icons", !moduleNavContent.includes("<Lock size={11}"));
  check("CourseAccessGuard.jsx is unrestricted pass-through", guardContent.includes("return children"));
  check("CloudComputing.jsx sidebar has no locked badges", !cloudContent.includes("<span>Locked</span>"));
  check("SystemDesignCaching.jsx has no locked roadmap lessons", !cachingContent.includes("isLessonLocked"));

  console.log("\n====================================================");
  console.log(`TOTAL TESTS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
  console.log("====================================================\n");

  if (failed > 0) process.exit(1);
}

runSequentialTests().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
