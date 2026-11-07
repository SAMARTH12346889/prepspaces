/**
 * Course Content Service for PrepSpaces Frontend.
 * Retrieves course catalogs, module structures, and quiz data from the Cloudflare Workers backend.
 * Uses in-memory caching to eliminate redundant network requests.
 */

import {
  Shield,
  Network,
  Terminal,
  Cloud,
  Cpu,
  Globe,
  Brain,
  Bot,
  Sparkles,
} from "lucide-react";

const API_BASE = (import.meta.env.VITE_API_BASE_URL || "https://api.prepspaces.com").replace(/\/+$/, "");

// In-memory content cache & in-flight promise deduplication
const contentCache = new Map();
const inFlightRequests = new Map();
const CACHE_PREFIX = "prepspaces_content_cache_";
const CACHE_TTL_MS = 3600000; // 1 hour

function getFromSessionStorage(key) {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(`${CACHE_PREFIX}${key}`);
    if (!raw) return null;
    const { timestamp, data } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_TTL_MS) {
      sessionStorage.removeItem(`${CACHE_PREFIX}${key}`);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function saveToSessionStorage(key, data) {
  if (typeof window === "undefined" || !data) return;
  try {
    sessionStorage.setItem(
      `${CACHE_PREFIX}${key}`,
      JSON.stringify({ timestamp: Date.now(), data })
    );
  } catch {}
}

// Icon mapping from backend string identifiers to Lucide-React icons
const ICON_MAP = {
  Shield,
  Network,
  Terminal,
  Cloud,
  Cpu,
  Globe,
  Brain,
  Bot,
  Sparkles,
};

/**
 * Attaches the corresponding Lucide React Icon component to course objects.
 */
function hydrateCourseIcons(course) {
  if (!course) return course;
  const iconComponent = typeof course.icon === "string" ? ICON_MAP[course.icon] || Globe : course.icon;
  return {
    ...course,
    icon: iconComponent,
  };
}

/**
 * Ultra-fast fetcher with in-memory caching, request deduplication, and sessionStorage persistence.
 */
async function fetchWithCache(endpoint) {
  const cacheKey = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;

  // 1. Instant Memory Cache Hit
  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey);
  }

  // 2. Instant Session Storage Hit (Survives refreshes & cross-tab navigation)
  const sessionCached = getFromSessionStorage(cacheKey);
  if (sessionCached) {
    contentCache.set(cacheKey, sessionCached);
    return sessionCached;
  }

  // 3. In-flight Request Deduplication (Prevents redundant concurrent requests)
  if (inFlightRequests.has(cacheKey)) {
    return await inFlightRequests.get(cacheKey);
  }

  const url = `${API_BASE}${cacheKey}`;

  const requestPromise = (async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        console.warn(`[courseContentService] HTTP ${response.status} fetching ${url}`);
        return null;
      }

      const data = await response.json();
      contentCache.set(cacheKey, data);
      saveToSessionStorage(cacheKey, data);
      return data;
    } catch (error) {
      console.warn(`[courseContentService] Network error fetching ${url}:`, error.message);
      // Fallback to existing stale memory if available
      return contentCache.get(cacheKey) || null;
    } finally {
      inFlightRequests.delete(cacheKey);
    }
  })();

  inFlightRequests.set(cacheKey, requestPromise);
  return await requestPromise;
}

/**
 * Retrieve the full catalog of 6 courses.
 * GET /api/courses
 */
export async function getCoursesCatalog() {
  const result = await fetchWithCache("/api/courses");
  if (!result || !Array.isArray(result.courses)) {
    return null;
  }

  return result.courses.map(hydrateCourseIcons);
}

/**
 * Retrieve metadata for a specific course.
 * GET /api/courses/:courseId
 */
export async function getCourseMetadata(courseId) {
  const course = await fetchWithCache(`/api/courses/${courseId}`);
  return hydrateCourseIcons(course);
}

/**
 * Retrieve modules array for a specific course.
 * GET /api/courses/:courseId/modules
 */
export async function getCourseModules(courseId) {
  const result = await fetchWithCache(`/api/courses/${courseId}/modules`);
  return result?.modules || null;
}

/**
 * Retrieve full module payload (content, quizzes, scenarios, commands).
 * GET /api/courses/:courseId/modules/:moduleId
 */
export async function getModuleContent(courseId, moduleId) {
  return await fetchWithCache(`/api/courses/${courseId}/modules/${moduleId}`);
}

/**
 * Retrieve quiz questions for a module.
 * GET /api/courses/:courseId/modules/:moduleId/quiz
 */
export async function getModuleQuiz(courseId, moduleId) {
  const result = await fetchWithCache(`/api/courses/${courseId}/modules/${moduleId}/quiz`);
  return result?.quiz || null;
}

export default {
  getCoursesCatalog,
  getCourseMetadata,
  getCourseModules,
  getModuleContent,
  getModuleQuiz,
};
