/**
 * Course Content Service for PrepSpaces Cloudflare Workers backend.
 * Delivers course and module content via Cloudflare Workers Static Assets binding (env.ASSETS).
 */

const VALID_ID_PATTERN = /^[a-z0-9-]+$/i;

/**
 * Validates course or module ID to prevent path traversal and malformed requests.
 */
export function isValidIdentifier(id) {
  return typeof id === "string" && id.length > 0 && id.length <= 64 && VALID_ID_PATTERN.test(id);
}

/**
 * Fetch a JSON asset using Cloudflare Workers Static Assets binding.
 */
async function fetchAssetJson(assetPath, env, requestUrl) {
  if (!env?.ASSETS) {
    throw new Error("ASSETS binding is not configured in environment");
  }

  // Construct absolute URL for ASSETS binding fetch
  const targetUrl = new URL(assetPath.startsWith("/") ? assetPath : `/${assetPath}`, requestUrl);
  const response = await env.ASSETS.fetch(targetUrl);

  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    throw new Error(`Failed to load asset '${assetPath}': HTTP ${response.status}`);
  }

  return await response.json();
}

/**
 * Retrieve complete course catalog.
 * GET /api/courses
 */
export async function getCoursesCatalog(env, requestUrl) {
  return await fetchAssetJson("/courses.json", env, requestUrl);
}

/**
 * Retrieve metadata for a specific course.
 * GET /api/courses/:courseId
 */
export async function getCourseMetadata(courseId, env, requestUrl) {
  if (!isValidIdentifier(courseId)) {
    return null;
  }
  return await fetchAssetJson(`/${courseId}/course.json`, env, requestUrl);
}

/**
 * Retrieve module list for a specific course.
 * GET /api/courses/:courseId/modules
 */
export async function getCourseModules(courseId, env, requestUrl) {
  if (!isValidIdentifier(courseId)) {
    return null;
  }
  return await fetchAssetJson(`/${courseId}/modules.json`, env, requestUrl);
}

/**
 * Retrieve full module content payload.
 * GET /api/courses/:courseId/modules/:moduleId
 */
export async function getModuleContent(courseId, moduleId, env, requestUrl) {
  if (!isValidIdentifier(courseId) || !isValidIdentifier(moduleId)) {
    return null;
  }
  return await fetchAssetJson(`/${courseId}/modules/${moduleId}.json`, env, requestUrl);
}

/**
 * Retrieve quiz and assessment content for a module.
 * GET /api/courses/:courseId/modules/:moduleId/quiz
 */
export async function getModuleQuiz(courseId, moduleId, env, requestUrl) {
  const modPayload = await getModuleContent(courseId, moduleId, env, requestUrl);
  if (!modPayload) {
    return null;
  }

  return {
    courseId,
    moduleId,
    quiz: modPayload.quiz || [],
    count: modPayload.quiz ? modPayload.quiz.length : 0,
  };
}
