/**
 * Storage Service for PrepSpaces Backend.
 * Uses Cloudflare Workers KV (binding: PREPSPACES_DB) for globally replicated,
 * low-latency storage with in-memory fallback for offline/test environments.
 */

// In-memory fallback cache for local dev / tests when KV is not attached
const memoryStore = new Map();

async function getStore(env) {
  if (env?.PREPSPACES_DB) {
    return {
      type: "kv",
      async get(key, type = "text") {
        if (type === "json") {
          return await env.PREPSPACES_DB.get(key, { type: "json" });
        }
        return await env.PREPSPACES_DB.get(key);
      },
      async put(key, value, options = {}) {
        const valStr = typeof value === "string" ? value : JSON.stringify(value);
        return await env.PREPSPACES_DB.put(key, valStr, options);
      },
      async delete(key) {
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

  const progressMap = {};
  for (const courseId of activeCourses) {
    const p = await store.get(`progress:${userId}:${courseId}`, "json");
    if (p) {
      progressMap[courseId] = p;
    }
  }

  return progressMap;
}
