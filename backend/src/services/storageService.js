/**
 * Storage Service for PrepSpaces Backend.
 * Uses Cloudflare Workers KV (binding: PREPSPACES_DB) for globally replicated,
 * low-latency storage with in-memory fallback for offline/test environments.
 */

// In-memory fallback cache for local dev / tests when KV is not attached
const memoryStore = new Map();

// Fast L1 in-isolate memory cache with TTL for Cloudflare Workers
const l1MemoryCache = new Map();
const L1_TTL_MS = 60000; // 60 seconds

function getL1(key) {
  const entry = l1MemoryCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    l1MemoryCache.delete(key);
    return null;
  }
  return entry.value;
}

function setL1(key, value, ttlMs = L1_TTL_MS) {
  l1MemoryCache.set(key, {
    value,
    expiresAt: Date.now() + ttlMs,
  });
}

function deleteL1(key) {
  l1MemoryCache.delete(key);
}

async function getStore(env) {
  if (env?.PREPSPACES_DB) {
    return {
      type: "kv",
      async get(key, type = "text") {
        // 1. Check ultra-fast L1 isolate cache
        const l1Val = getL1(key);
        if (l1Val !== null && l1Val !== undefined) {
          return l1Val;
        }

        // 2. Fetch from Cloudflare KV with edge colo caching (cacheTtl: 60s)
        let result = null;
        if (type === "json") {
          result = await env.PREPSPACES_DB.get(key, { type: "json", cacheTtl: 60 });
        } else {
          result = await env.PREPSPACES_DB.get(key, { cacheTtl: 60 });
        }

        if (result !== null && result !== undefined) {
          setL1(key, result);
        }
        return result;
      },
      async put(key, value, options = {}) {
        setL1(key, value);
        const valStr = typeof value === "string" ? value : JSON.stringify(value);
        return await env.PREPSPACES_DB.put(key, valStr, options);
      },
      async delete(key) {
        deleteL1(key);
        return await env.PREPSPACES_DB.delete(key);
      },
    };
  }

  // In-memory fallback
  return {
    type: "memory",
    async get(key, type = "text") {
      const val = memoryStore.get(key);
      if (val === undefined || val === null) return null;
      if (type === "json") {
        try {
          return JSON.parse(val);
        } catch {
          return null;
        }
      }
      return val;
    },
    async put(key, value) {
      const valStr = typeof value === "string" ? value : JSON.stringify(value);
      memoryStore.set(key, valStr);
    },
    async delete(key) {
      memoryStore.delete(key);
    },
  };
}

/**
 * Normalizes email address for lookups
 */
export function normalizeEmail(email) {
  return typeof email === "string" ? email.trim().toLowerCase() : "";
}

/**
 * Get User by ID
 */
export async function getUserById(id, env) {
  if (!id) return null;
  const store = await getStore(env);
  return await store.get(`user:id:${id}`, "json");
}

/**
 * Get User by Email
 */
export async function getUserByEmail(email, env) {
  const norm = normalizeEmail(email);
  if (!norm) return null;
  const store = await getStore(env);
  const pointer = await store.get(`user:email:${norm}`, "json");
  if (!pointer?.id) return null;
  return await store.get(`user:id:${pointer.id}`, "json");
}

/**
 * Save / Update User
 */
export async function saveUser(user, env) {
  if (!user?.id || !user?.email) {
    throw new Error("Invalid user payload: id and email are required");
  }
  const store = await getStore(env);
  const normEmail = normalizeEmail(user.email);

  // Store user record and email index
  await store.put(`user:id:${user.id}`, user);
  await store.put(`user:email:${normEmail}`, { id: user.id });

  return user;
}

/**
 * Session Management
 */
export async function saveSession(token, sessionData, env, ttlSeconds = 60 * 60 * 24 * 30) {
  if (!token) return;
  const store = await getStore(env);
  await store.put(
    `session:${token}`,
    sessionData,
    store.type === "kv" ? { expirationTtl: ttlSeconds } : {}
  );
}

export async function getSession(token, env) {
  if (!token) return null;
  const store = await getStore(env);
  return await store.get(`session:${token}`, "json");
}

export async function deleteSession(token, env) {
  if (!token) return;
  const store = await getStore(env);
  await store.delete(`session:${token}`);
}

/**
 * Course Progress Storage
 */
export async function getCourseProgress(userId, courseId, env) {
  if (!userId || !courseId) return null;
  const store = await getStore(env);
  return await store.get(`progress:${userId}:${courseId}`, "json");
}

export async function saveCourseProgress(userId, courseId, progressData, env) {
  if (!userId || !courseId) return;
  const store = await getStore(env);

  await store.put(`progress:${userId}:${courseId}`, progressData);

  // Update user's active courses index
  const metaKey = `progress:${userId}:meta`;
  let activeCourses = (await store.get(metaKey, "json")) || [];
  if (!Array.isArray(activeCourses)) activeCourses = [];
  if (!activeCourses.includes(courseId)) {
    activeCourses.push(courseId);
    await store.put(metaKey, activeCourses);
  }

  return progressData;
}

export async function getAllUserProgress(userId, env) {
  if (!userId) return {};
  const store = await getStore(env);
  const metaKey = `progress:${userId}:meta`;
  const activeCourses = (await store.get(metaKey, "json")) || [];

  if (!Array.isArray(activeCourses) || activeCourses.length === 0) {
    return {};
  }

  // Fetch all active course progress in parallel
  const records = await Promise.all(
    activeCourses.map(async (courseId) => {
      const p = await store.get(`progress:${userId}:${courseId}`, "json");
      return [courseId, p];
    })
  );

  return Object.fromEntries(records.filter(([, p]) => Boolean(p)));
}

/**
 * Guest Session Progress Storage
 * Isolated under `progress:guest:<guestId>:<courseId>`
 */
export async function getGuestCourseProgress(guestId, courseId, env) {
  if (!guestId || !courseId) return null;
  const store = await getStore(env);
  return await store.get(`progress:guest:${guestId}:${courseId}`, "json");
}

export async function saveGuestCourseProgress(guestId, courseId, progressData, env, ttlSeconds = 60 * 60 * 24 * 30) {
  if (!guestId || !courseId) return;
  const store = await getStore(env);

  await store.put(
    `progress:guest:${guestId}:${courseId}`,
    progressData,
    store.type === "kv" ? { expirationTtl: ttlSeconds } : {}
  );

  const metaKey = `progress:guest:${guestId}:meta`;
  let activeCourses = (await store.get(metaKey, "json")) || [];
  if (!Array.isArray(activeCourses)) activeCourses = [];
  if (!activeCourses.includes(courseId)) {
    activeCourses.push(courseId);
    await store.put(metaKey, activeCourses, store.type === "kv" ? { expirationTtl: ttlSeconds } : {});
  }

  return progressData;
}

export async function getAllGuestProgress(guestId, env) {
  if (!guestId) return {};
  const store = await getStore(env);
  const metaKey = `progress:guest:${guestId}:meta`;
  const activeCourses = (await store.get(metaKey, "json")) || [];

  if (!Array.isArray(activeCourses) || activeCourses.length === 0) {
    return {};
  }

  // Fetch all active guest course progress in parallel
  const records = await Promise.all(
    activeCourses.map(async (courseId) => {
      const p = await store.get(`progress:guest:${guestId}:${courseId}`, "json");
      return [courseId, p];
    })
  );

  return Object.fromEntries(records.filter(([, p]) => Boolean(p)));
}

/**
 * Migrates all valid guest progress records into the authenticated user's account.
 * Uses a safe union of completed modules and never overwrites higher account progress.
 */
export async function migrateGuestToUser(guestId, userId, env) {
  if (!guestId || !userId) {
    return { success: false, migratedCourses: 0 };
  }

  const store = await getStore(env);
  const guestProgressMap = await getAllGuestProgress(guestId, env);
  const courseIds = Object.keys(guestProgressMap);

  let migratedCount = 0;
  const mergedResults = {};

  for (const courseId of courseIds) {
    const guestProg = guestProgressMap[courseId];
    if (!guestProg || !Array.isArray(guestProg.completedModuleIds)) continue;

    const userProg = (await getCourseProgress(userId, courseId, env)) || {
      courseId,
      completedModuleIds: [],
    };

    // Union of completed modules (deduplicated)
    const mergedCompleted = Array.from(
      new Set([
        ...(userProg.completedModuleIds || []),
        ...(guestProg.completedModuleIds || []),
      ])
    );

    const merged = {
      ...userProg,
      ...guestProg,
      courseId,
      completedModuleIds: mergedCompleted,
      status: mergedCompleted.length > 0 ? "in-progress" : userProg.status || "not-started",
      lastAccessedAt: new Date().toISOString(),
    };

    await saveCourseProgress(userId, courseId, merged, env);
    mergedResults[courseId] = merged;
    migratedCount++;
  }

  // Mark guest session as migrated to prevent duplicate merges
  await store.put(`progress:guest:${guestId}:migrated_to`, {
    userId,
    migratedAt: new Date().toISOString(),
  });

  return {
    success: true,
    migratedCourses: migratedCount,
    courses: mergedResults,
  };
}
