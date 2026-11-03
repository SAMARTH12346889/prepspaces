import assert from "assert";
import {
  computeCourseAccessState,
  validateAndCompleteModule,
} from "../backend/src/services/unlockingService.js";
import {
  migrateGuestToUser,
  getGuestCourseProgress,
  getCourseProgress,
} from "../backend/src/services/storageService.js";

// Mock environment with memory store
const mockEnv = {};
const mockModules = [
  { id: "mod-1", name: "Module 1", route: "/learning/os/mod-1" },
  { id: "mod-2", name: "Module 2", route: "/learning/os/mod-2" },
  { id: "mod-3", name: "Module 3", route: "/learning/os/mod-3" },
  { id: "mod-4", name: "Module 4", route: "/learning/os/mod-4" },
  { id: "mod-5", name: "Module 5", route: "/learning/os/mod-5" },
  { id: "mod-6", name: "Module 6", route: "/learning/os/mod-6" },
  { id: "mod-7", name: "Module 7", route: "/learning/os/mod-7" },
  { id: "mod-8", name: "Module 8", route: "/learning/os/mod-8" },
];

// Mock ASSETS binding
mockEnv.ASSETS = {
  fetch: async (url) => {
    const path = new URL(url).pathname;
    if (path.includes("/modules.json")) {
      return { ok: true, json: async () => mockModules };
    }
    if (path.includes("/course.json")) {
      return { ok: true, json: async () => ({ id: "test-course", title: "Test Course" }) };
    }
    return { ok: false, status: 404 };
  },
};

const reqUrl = "https://api.prepspaces.com/test";

async function runTests() {
  console.log("Running Backend Unlocking Unit Tests...");

  const guestUser = { isGuest: true, guestId: "guest_test_12345678" };
  const authUser = { isGuest: false, userId: "usr_test_98765432" };

  // TEST 1: Initial Guest State - Module 1 unlocked, Module 2-8 locked
  let access = await computeCourseAccessState("test-course", guestUser, mockEnv, reqUrl);
  assert.strictEqual(access.modules[0].isUnlocked, true, "Mod 1 must be unlocked");
  assert.strictEqual(access.modules[1].isUnlocked, false, "Mod 2 must be locked");
  assert.strictEqual(access.modules[6].requiresAuth, true, "Mod 7 must require auth for guest");
  console.log("✓ TEST 1: Initial Guest State passed");

  // TEST 2: Attempting to complete Mod 2 without Mod 1 is rejected
  let failRes = await validateAndCompleteModule("test-course", "mod-2", {}, guestUser, mockEnv, reqUrl);
  assert.strictEqual(failRes.success, false);
  assert.strictEqual(failRes.error, "prerequisite_missing");
  console.log("✓ TEST 2: Skipping prerequisite rejected");

  // TEST 3: Sequentially completing Mod 1 to Mod 5
  for (let i = 1; i <= 5; i++) {
    const res = await validateAndCompleteModule("test-course", `mod-${i}`, {}, guestUser, mockEnv, reqUrl);
    assert.strictEqual(res.success, true, `Mod ${i} completion must succeed`);
  }
  access = await computeCourseAccessState("test-course", guestUser, mockEnv, reqUrl);
  assert.strictEqual(access.modules[5].isUnlocked, true, "Mod 6 must now be unlocked");
  assert.strictEqual(access.modules[6].isUnlocked, false, "Mod 7 must remain locked for guest");
  console.log("✓ TEST 3: Sequential completion Mod 1 -> 5 passed");

  // TEST 4: Guest completes Mod 6 -> Prompts Auth, Mod 7 requires auth
  const mod6Res = await validateAndCompleteModule("test-course", "mod-6", {}, guestUser, mockEnv, reqUrl);
  assert.strictEqual(mod6Res.success, true);
  assert.strictEqual(mod6Res.promptAuthNow, true, "Must prompt auth after completing Mod 6");
  assert.strictEqual(mod6Res.nextUnlockedModule, null, "Next unlocked module is null until auth");

  access = await computeCourseAccessState("test-course", guestUser, mockEnv, reqUrl);
  assert.strictEqual(access.completedModuleIds.length, 6);
  assert.strictEqual(access.modules[6].isUnlocked, false, "Mod 7 is locked for guest");
  assert.strictEqual(access.modules[6].requiresAuth, true, "Mod 7 requires auth");
  console.log("✓ TEST 4: Guest completing Mod 6 triggers compulsory auth passed");

  // TEST 5: Guest attempts to complete Mod 7 -> Rejected with auth_required
  const mod7Attempt = await validateAndCompleteModule("test-course", "mod-7", {}, guestUser, mockEnv, reqUrl);
  assert.strictEqual(mod7Attempt.success, false);
  assert.strictEqual(mod7Attempt.error, "auth_required");
  console.log("✓ TEST 5: Direct attempt on Mod 7 without login rejected");

  // TEST 6: Student signs in & migrates guest progress
  const migration = await migrateGuestToUser(guestUser.guestId, authUser.userId, mockEnv);
  assert.strictEqual(migration.success, true);
  assert.strictEqual(migration.migratedCourses, 1);

  // TEST 7: Authenticated user access state - Module 7 is now UNLOCKED!
  access = await computeCourseAccessState("test-course", authUser, mockEnv, reqUrl);
  assert.strictEqual(access.completedModuleIds.length, 6, "Must retain 6 completed modules");
  assert.strictEqual(access.modules[6].isUnlocked, true, "Mod 7 must now be UNLOCKED for authenticated student!");
  assert.strictEqual(access.modules[6].requiresAuth, false, "Mod 7 no longer requires auth");
  console.log("✓ TEST 6 & 7: Migration and immediate unlocking of Module 7 passed!");

  // TEST 8: Authenticated user completes Mod 7 -> Mod 8 unlocks!
  const mod7Res = await validateAndCompleteModule("test-course", "mod-7", {}, authUser, mockEnv, reqUrl);
  assert.strictEqual(mod7Res.success, true);
  access = await computeCourseAccessState("test-course", authUser, mockEnv, reqUrl);
  assert.strictEqual(access.modules[7].isUnlocked, true, "Mod 8 must be unlocked after Mod 7!");
  console.log("✓ TEST 8: Authenticated user continues through remaining modules passed!");

  console.log("\nALL BACKEND UNLOCKING TESTS PASSED PERFECTLY!\n");
}

runTests().catch((err) => {
  console.error(err);
  process.exit(1);
});
