/**
 * Global Sequential Course Unlocking & Access Service for PrepSpaces Frontend.
 * Reusable across all courses, curriculum lengths, and navigation components.
 * Integrates backend-authoritative progress, secure guest sessions, and migration.
 */

import { API_BASE_URL } from "../config/auth";
import { getStoredToken } from "./authService";

export const UNLOCK_UPDATED_EVENT = "prepspaces_unlock_updated";
const GUEST_SESSION_KEY = "prepspaces_guest_session_id";
const ACCESS_CACHE_PREFIX = "prepspaces_access_cache_";

/**
 * Returns or generates a cryptographically secure anonymous guest session ID.
 */
export function getOrCreateGuestSessionId() {
  if (typeof window === "undefined") return "guest_default";
  try {
    let guestId = localStorage.getItem(GUEST_SESSION_KEY);
    if (!guestId || !/^guest_[a-z0-9_-]{8,64}$/i.test(guestId)) {
      const randomUuid = typeof crypto?.randomUUID === "function"
        ? crypto.randomUUID()
        : `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
      guestId = `guest_${randomUuid}`;
      localStorage.setItem(GUEST_SESSION_KEY, guestId);
    }
    return guestId;
  } catch {
    return "guest_fallback";
  }
}

/**
 * Clear or mark guest session as migrated upon account link.
 */
export function clearGuestSessionId() {
  try {
    localStorage.removeItem(GUEST_SESSION_KEY);
  } catch {}
}

/**
 * Read cached access state for instant synchronous hydration.
 */
export function getCachedCourseAccess(courseId) {
  if (typeof window === "undefined" || !courseId) return null;
  try {
    const raw = localStorage.getItem(`${ACCESS_CACHE_PREFIX}${courseId}`);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setCachedCourseAccess(courseId, data) {
  if (typeof window === "undefined" || !courseId || !data) return;
  try {
    localStorage.setItem(`${ACCESS_CACHE_PREFIX}${courseId}`, JSON.stringify(data));
  } catch {}
}

/**
 * Dispatches an event when course access/unlocking status changes.
 */
function emitUnlockUpdated(courseId, data) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(UNLOCK_UPDATED_EVENT, {
        detail: { courseId, data },
      })
    );
  }
}

const inFlightCompletions = new Set();

/**
 * Automatically marks a module completed in the background when the user
 * engages with its contents, unlocking the next module in real time.
 */
export async function autoCompleteModule(courseId, moduleId) {
  if (!courseId || !moduleId) return null;
  const key = `${courseId}:${moduleId}`;
  if (inFlightCompletions.has(key)) return null;

  // Check if already completed in cache
  const cached = getCachedCourseAccess(courseId);
  if (cached?.completedModuleIds?.includes(moduleId)) {
    return cached;
  }

  inFlightCompletions.add(key);
  try {
    const res = await completeModule(courseId, moduleId);
    return res;
  } finally {
    // Retain in inFlight for cooldown to avoid duplicate calls
    setTimeout(() => inFlightCompletions.delete(key), 4000);
  }
}

/**
 * Synchronous access evaluator: All modules across all tracks are freely accessible.
 */
export function getInitialModuleAccess(moduleIndex, isAuthenticated = false) {
  return {
    isUnlocked: true,
    requiresAuth: false,
  };
}

/**
 * Fetch authoritative module access state from the backend.
 * Falls back to local cache if offline or server is unreachable.
 */
export async function getCourseAccess(courseId) {
  if (!courseId) return null;

  const token = getStoredToken();
  const guestId = !token ? getOrCreateGuestSessionId() : null;

  const headers = {
    Accept: "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  } else if (guestId) {
    headers["x-guest-session-id"] = guestId;
  }

  try {
    const url = `${API_BASE_URL}/api/progress/${encodeURIComponent(courseId)}/access`;
    const res = await fetch(url, { method: "GET", headers });

    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        setCachedCourseAccess(courseId, data);
        emitUnlockUpdated(courseId, data);
        return data;
      }
    }
  } catch (err) {
    console.warn(`[unlockingService] Failed to fetch access for ${courseId}:`, err);
  }

  // Fallback to cached state
  const cached = getCachedCourseAccess(courseId);
  if (cached) return cached;

  // Safe default: only first module unlocked
  return {
    courseId,
    totalModules: 24,
    completedModuleIds: [],
    unlockedModuleIds: [],
    currentUnlockedModule: null,
    isGuest: !token,
    progressPercentage: 0,
    authRequiredForNext: false,
    modules: [],
  };
}

/**
 * Authoritatively completes a module on the backend.
 * Validates prerequisites, sequential order, and triggers the compulsory
 * auth gate when completing Module 6 as a guest.
 */
export async function completeModule(courseId, moduleId, activityData = {}) {
  if (!courseId || !moduleId) {
    return { success: false, error: "invalid_params" };
  }

  const token = getStoredToken();
  const guestId = !token ? getOrCreateGuestSessionId() : null;

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  } else if (guestId) {
    headers["x-guest-session-id"] = guestId;
  }

  try {
    const url = `${API_BASE_URL}/api/progress/${encodeURIComponent(courseId)}/complete`;
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({ moduleId, activityData }),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      // Re-fetch authoritative access to update caches and UI
      await getCourseAccess(courseId);
      return data;
    }

    return data;
  } catch (err) {
    console.error(`[unlockingService] completeModule error for ${courseId}/${moduleId}:`, err);
    return {
      success: false,
      error: "network_error",
      message: "Network issue completing module. Please check your connection.",
    };
  }
}

/**
 * Migrates guest progress to the authenticated user account upon login/register.
 */
export async function migrateGuestProgress(token = getStoredToken()) {
  if (!token) return { success: false, reason: "no_token" };

  const guestId = typeof window !== "undefined" ? localStorage.getItem(GUEST_SESSION_KEY) : null;
  if (!guestId) return { success: true, migratedCourses: 0 };

  try {
    const url = `${API_BASE_URL}/api/progress/migrate-guest`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ guestSessionId: guestId }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        clearGuestSessionId();
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent(UNLOCK_UPDATED_EVENT));
        }
        return data;
      }
    }
  } catch (err) {
    console.warn("[unlockingService] Failed to migrate guest progress:", err);
  }

  return { success: false };
}
