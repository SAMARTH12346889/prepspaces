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
} from "lucide-react";

const API_BASE = (import.meta.env.VITE_API_BASE_URL || "https://api.prepspaces.com").replace(/\/+$/, "");

// In-memory content cache
const contentCache = new Map();

// Icon mapping from backend string identifiers to Lucide-React icons
const ICON_MAP = {
  Shield,
  Network,
  Terminal,
  Cloud,
  Cpu,
  Globe,
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
 * Generic fetcher with in-memory caching and graceful error handling.
 */
async function fetchWithCache(endpoint) {
  const cacheKey = endpoint;
  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey);
  }

  const url = `${API_BASE}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

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
    return data;
  } catch (error) {
    console.warn(`[courseContentService] Network error fetching ${url}:`, error.message);
    return null;
  }
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
