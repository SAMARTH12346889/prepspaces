/**
 * Unlocking & Sequential Course Progress Service for PrepSpaces Backend.
 * Single source of truth for module access, sequential unlocking rules,
 * guest vs authenticated restrictions, and completion validation.
 */

import { getCourseModules, getCourseMetadata } from "./courseContentService.js";
import {
  getCourseProgress,
  saveCourseProgress,
  getGuestCourseProgress,
  saveGuestCourseProgress,
} from "./storageService.js";

// Guest users are allowed to complete up to 6 modules without registration
export const GUEST_MAX_FREE_MODULES = 6;

/**
 * Resolves the ordered list of modules for any course.
 */
export async function getOrderedCourseModules(courseId, env, requestUrl) {
  const modules = await getCourseModules(courseId, env, requestUrl);
  if (!Array.isArray(modules) || modules.length === 0) {
    return [];
  }
  return modules;
}

/**
 * Computes authoritative access state for a student (guest or authenticated).
 *
 * Rules:
 * - Module 1 (index 0) is ALWAYS unlocked.
 * - Module N is unlocked IF AND ONLY IF Module N-1 is in completedModuleIds.
 * - If user is a guest, Module 7+ (index >= 6) is LOCKED with requiresAuth: true.
 * - If user is authenticated, sequential unlocking continues through all modules.
 */
export async function computeCourseAccessState(courseId, userOrGuest, env, requestUrl) {
  const isGuest = Boolean(userOrGuest.isGuest);
  const identifier = isGuest ? userOrGuest.guestId : userOrGuest.userId;

  const modules = await getOrderedCourseModules(courseId, env, requestUrl);
  const courseMeta = await getCourseMetadata(courseId, env, requestUrl);

  // Retrieve completed modules from backend store
  let progressRecord = null;
  if (isGuest) {
    progressRecord = await getGuestCourseProgress(identifier, courseId, env);
  } else {
    progressRecord = await getCourseProgress(identifier, courseId, env);
  }

  const completedModuleIds = Array.isArray(progressRecord?.completedModuleIds)
    ? progressRecord.completedModuleIds
    : [];
  const completedSet = new Set(completedModuleIds);

  const moduleStates = [];
  const unlockedModuleIds = [];
  let currentUnlockedModule = null;
  let authRequiredForNext = false;

  for (let i = 0; i < modules.length; i++) {
    const mod = modules[i];
    const isFirstSix = i < GUEST_MAX_FREE_MODULES; // Modules 1–6 (indices 0–5) are unlocked by default
    const prevMod = i > 0 ? modules[i - 1] : null;
    const prevCompleted = i === 0 || (prevMod && completedSet.has(prevMod.id));

    // Module index 6 corresponds to Module 7 (1-indexed)
    const exceedsGuestLimit = isGuest && i >= GUEST_MAX_FREE_MODULES;

    let unlocked = false;
    let requiresAuth = false;

    if (isFirstSix) {
      // First 6 modules (Modules 1 to 6) are freely unlocked for everyone (guests and users)
      unlocked = true;
    } else if (exceedsGuestLimit) {
      // Module 7 onwards strictly requires an account for guests
      unlocked = false;
      requiresAuth = true;
      if (!authRequiredForNext) {
        authRequiredForNext = true;
      }
    } else {
      // Authenticated students unlock Module 7+ based on prerequisite completion
      unlocked = prevCompleted;
    }

    const isCompleted = completedSet.has(mod.id);

    if (unlocked) {
      unlockedModuleIds.push(mod.id);
      if (!isCompleted && !currentUnlockedModule) {
        currentUnlockedModule = mod.id;
      }
    }

    moduleStates.push({
      id: mod.id,
      name: mod.name,
      route: mod.route,
      order: i + 1,
      isCompleted,
      isUnlocked: unlocked,
      requiresAuth,
    });
  }

  // If all unlocked modules are completed, currentUnlockedModule points to the last unlocked module
  if (!currentUnlockedModule && unlockedModuleIds.length > 0) {
    currentUnlockedModule = unlockedModuleIds[unlockedModuleIds.length - 1];
  }

  const totalMods = modules.length || 24;
  const progressPct = Math.min(100, Math.round((completedModuleIds.length / totalMods) * 100));

  return {
    courseId,
    courseTitle: courseMeta?.title || courseId,
    totalModules: totalMods,
    completedModuleIds,
    unlockedModuleIds,
    currentUnlockedModule: currentUnlockedModule || (modules[0]?.id ?? null),
    isGuest,
    progressPercentage: progressPct,
    authRequiredForNext,
    modules: moduleStates,
  };
}

/**
 * Validates and records module completion on the backend.
 *
 * Security checks:
 * 1. The module must belong to the course.
 * 2. The module must currently be unlocked for this student.
 * 3. Prerequisites (all prior modules in sequence) must already be completed.
 * 4. Guests cannot complete modules beyond Module 6 (must sign in).
 */
export async function validateAndCompleteModule(courseId, moduleId, activityData, userOrGuest, env, requestUrl) {
  const isGuest = Boolean(userOrGuest.isGuest);
  const identifier = isGuest ? userOrGuest.guestId : userOrGuest.userId;

  const modules = await getOrderedCourseModules(courseId, env, requestUrl);
  const targetIndex = modules.findIndex((m) => m.id === moduleId);

  if (targetIndex === -1) {
    return {
      success: false,
      error: "invalid_module",
      message: `Module '${moduleId}' does not exist in course '${courseId}'.`,
      status: 404,
    };
  }

  // If guest attempts to complete module beyond limit
  if (isGuest && targetIndex >= GUEST_MAX_FREE_MODULES) {
    return {
      success: false,
      error: "auth_required",
      message: "Creating a free PrepSpaces account is required to unlock and complete Module 7 and beyond.",
      requiresAuth: true,
      status: 403,
    };
  }

  // Fetch current completed modules
  let progressRecord = null;
  if (isGuest) {
    progressRecord = await getGuestCourseProgress(identifier, courseId, env);
  } else {
    progressRecord = await getCourseProgress(identifier, courseId, env);
  }

  const completedSet = new Set(progressRecord?.completedModuleIds || []);

  // For modules beyond the free initial 6, enforce sequential completion of prior modules
  if (targetIndex >= GUEST_MAX_FREE_MODULES) {
    for (let i = 0; i < targetIndex; i++) {
      const priorMod = modules[i];
      if (!completedSet.has(priorMod.id)) {
        return {
          success: false,
          error: "prerequisite_missing",
          message: `You must complete Module ${i + 1} (${priorMod.name}) before completing this module.`,
          requiredModuleId: priorMod.id,
          status: 400,
        };
      }
    }
  }

  // Mark module as completed
  completedSet.add(moduleId);
  const completedArray = Array.from(completedSet);
  const totalMods = modules.length || 24;
  const pct = Math.min(100, Math.round((completedArray.length / totalMods) * 100));

  // Determine next accessible module
  const nextIndex = targetIndex + 1;
  const nextMod = nextIndex < modules.length ? modules[nextIndex] : null;
  let nextUnlockedModule = nextMod?.id || moduleId;
  let promptAuthNow = false;

  if (isGuest && nextIndex >= GUEST_MAX_FREE_MODULES) {
    nextUnlockedModule = null; // Locked until login
    promptAuthNow = true;
  }

  const updatedRecord = {
    courseId,
    completedModuleIds: completedArray,
    currentModuleId: nextUnlockedModule || moduleId,
    currentModuleName: nextMod?.name || modules[targetIndex].name,
    currentModuleRoute: nextMod?.route || modules[targetIndex].route,
    progressPercentage: pct,
    status: pct === 100 ? "completed" : "in-progress",
    lastAccessedAt: new Date().toISOString(),
    lastCompletedAt: new Date().toISOString(),
  };

  if (isGuest) {
    await saveGuestCourseProgress(identifier, courseId, updatedRecord, env);
  } else {
    await saveCourseProgress(identifier, courseId, updatedRecord, env);
  }

  return {
    success: true,
    completedModuleId: moduleId,
    nextUnlockedModule,
    progressPercentage: pct,
    promptAuthNow,
    requiresAuth: promptAuthNow,
    completedModuleIds: completedArray,
  };
}
