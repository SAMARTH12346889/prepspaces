import assert from "assert";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  computeCourseAccessState,
  validateAndCompleteModule,
  GUEST_MAX_FREE_MODULES,
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
console.log(" PREPSPACES SEQUENTIAL UNLOCKING QA TEST SUITE");
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

  // 1. Initial State
  console.log("SUITE 1: Backend Authoritative Initial Access State");
  const initialGuest = await computeCourseAccessState("test-course", guestUser, mockEnv, reqUrl);
  check("Module 1 is unlocked initially", initialGuest.modules[0].isUnlocked === true);
  check("Module 2 is locked initially", initialGuest.modules[1].isUnlocked === false);
  check("Module 7 requires auth for guest", initialGuest.modules[6].requiresAuth === true);

  // 2. Tampering & Skipping Prevention
  console.log("\nSUITE 2: Anti-Tampering & Prerequisite Enforcement");
  const skipAttempt = await validateAndCompleteModule("test-course", "mod-3", {}, guestUser, mockEnv, reqUrl);
  check("Skipping to Module 3 is rejected by backend", skipAttempt.success === false && skipAttempt.error === "prerequisite_missing");

  // 3. Guest Journey: Modules 1 through 5
  console.log("\nSUITE 3: Sequential Completion of Modules 1 through 5");
  for (let i = 1; i <= 5; i++) {
    const res = await validateAndCompleteModule("test-course", `mod-${i}`, {}, guestUser, mockEnv, reqUrl);
    check(`Module ${i} successfully completed`, res.success === true);
  }

  const stateAfter5 = await computeCourseAccessState("test-course", guestUser, mockEnv, reqUrl);
  check("Module 6 is now unlocked for guest", stateAfter5.modules[5].isUnlocked === true);
  check("Module 7 remains locked for guest", stateAfter5.modules[6].isUnlocked === false);

  // 4. Guest Completes Module 6 -> Compulsory Auth Enforced
  console.log("\nSUITE 4: Module 6 Completion & Compulsory Auth Gate");
  const mod6Complete = await validateAndCompleteModule("test-course", "mod-6", {}, guestUser, mockEnv, reqUrl);
  check("Module 6 completion succeeds", mod6Complete.success === true);
  check("promptAuthNow flag is returned", mod6Complete.promptAuthNow === true);
  check("Next module is held at null until authentication", mod6Complete.nextUnlockedModule === null);

  const mod7DirectAttempt = await validateAndCompleteModule("test-course", "mod-7", {}, guestUser, mockEnv, reqUrl);
  check("Direct API attempt to complete Module 7 without login rejected (HTTP 403)", mod7DirectAttempt.success === false && mod7DirectAttempt.error === "auth_required");

  // 5. Account Sign In & Safe Migration
  console.log("\nSUITE 5: Guest to Authenticated Progress Migration");
  const migrationRes = await migrateGuestToUser(guestUser.guestId, authStudent.userId, mockEnv);
  check("Migration succeeds", migrationRes.success === true);
  check("1 course migrated into account", migrationRes.migratedCourses === 1);

  // 6. Module 7 Unlocking Post-Login
  console.log("\nSUITE 6: Immediate Post-Login Module 7 Access");
  const authState = await computeCourseAccessState("test-course", authStudent, mockEnv, reqUrl);
  check("Authenticated user retains 6 completed modules", authState.completedModuleIds.length === 6);
  check("Module 7 is now UNLOCKED for authenticated student", authState.modules[6].isUnlocked === true);
  check("Module 7 requiresAuth is now false", authState.modules[6].requiresAuth === false);

  // 7. Sequential Progress Through Module 8+
  console.log("\nSUITE 7: Subsequent Learning (Module 7 -> 8)");
  const mod7Complete = await validateAndCompleteModule("test-course", "mod-7", {}, authStudent, mockEnv, reqUrl);
  check("Authenticated student completes Module 7", mod7Complete.success === true);

  const stateAfter7 = await computeCourseAccessState("test-course", authStudent, mockEnv, reqUrl);
  check("Module 8 is now unlocked", stateAfter7.modules[7].isUnlocked === true);

  // 8. Reusable Service & UI Audit
  console.log("\nSUITE 8: Global Reusable Service & UI Integrity");
  const unlockingServicePath = path.join(baseDir, "src/services/unlockingService.js");
  const moduleNavPath = path.join(baseDir, "src/Componets/ModuleNav.jsx");
  const unlockingContent = fs.readFileSync(unlockingServicePath, "utf8");
  const moduleNavContent = fs.readFileSync(moduleNavPath, "utf8");

  check("unlockingService.js exports getCourseAccess", unlockingContent.includes("getCourseAccess"));
  check("unlockingService.js exports completeModule", unlockingContent.includes("completeModule"));
  check("unlockingService.js exports migrateGuestProgress", unlockingContent.includes("migrateGuestProgress"));
  check("ModuleNav.jsx imports unlockingService", moduleNavContent.includes("unlockingService"));
  check("ModuleNav.jsx renders sequential progression banner", moduleNavContent.includes("Sequential Progression Action Banner"));
  check("ModuleNav.jsx handles compulsory auth modal", moduleNavContent.includes("Create Account to Unlock Module 7"));

  console.log("\n====================================================");
  console.log(`TOTAL TESTS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
  console.log("====================================================\n");

  if (failed > 0) process.exit(1);
}

runSequentialTests().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
