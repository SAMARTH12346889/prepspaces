import { Hono } from "hono";
import { getSession } from "../services/storageService.js";
import {
  getCourseProgress,
  saveCourseProgress,
  getAllUserProgress,
} from "../services/storageService.js";
import { getCoursesCatalog, isValidIdentifier } from "../services/courseContentService.js";

export const progressRouter = new Hono();

/**
 * Authentication Middleware helper for Progress routes
 */
async function authenticateUser(c) {
  const authHeader = c.req.header("Authorization") || "";
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();

  if (!token) {
    return null;
  }

  const session = await getSession(token, c.env);
  if (!session?.userId) {
    return null;
  }

  return session;
}

/**
 * 1. Get Student Dashboard Progress for all Courses
 * GET /api/progress
 */
progressRouter.get("/", async (c) => {
  const session = await authenticateUser(c);
  if (!session) {
    return c.json({ error: "Unauthorized", message: "Sign in required to view progress." }, 401);
  }

  try {
    const catalog = (await getCoursesCatalog(c.env, c.req.url)) || [];
    const userProgressMap = await getAllUserProgress(session.userId, c.env);

    let totalCompletedModules = 0;
    let totalAvailableModules = 0;
    let enrolledCoursesCount = 0;
    let completedCoursesCount = 0;

    const courseCards = catalog.map((course) => {
      const up = userProgressMap[course.id] || {};
      const completedList = Array.isArray(up.completedModuleIds) ? up.completedModuleIds : [];
      const totalMods = course.totalModules || 24;

      const completedCount = completedList.length;
      const pct = Math.min(100, Math.round((completedCount / totalMods) * 100));

      totalCompletedModules += completedCount;
      totalAvailableModules += totalMods;

      let status = "not-started";
      if (pct === 100) {
        status = "completed";
        completedCoursesCount++;
        enrolledCoursesCount++;
      } else if (completedCount > 0 || up.currentModuleId || up.lastAccessedAt) {
        status = "in-progress";
        enrolledCoursesCount++;
      }

      return {
        courseId: course.id,
        title: course.title,
        tagline: course.tagline,
        description: course.description,
        icon: course.icon,
        route: course.route,
        tag: course.tag,
        color: course.color,
        badgeColor: course.badgeColor,
        totalModules: totalMods,
        completedModules: completedCount,
        completedModuleIds: completedList,
        progressPercentage: pct,
        currentModuleId: up.currentModuleId || null,
        currentModuleName: up.currentModuleName || null,
        currentModuleRoute: up.currentModuleRoute || course.route,
        lastAccessedAt: up.lastAccessedAt || null,
        status,
      };
    });

    // Sort to find most recently studied course
    const withActivity = courseCards
      .filter((c) => c.lastAccessedAt)
      .sort((a, b) => new Date(b.lastAccessedAt).getTime() - new Date(a.lastAccessedAt).getTime());

    const recentlyStudied = withActivity.length > 0 ? withActivity[0] : null;

    const overallPercentage =
      totalAvailableModules > 0
        ? Math.min(100, Math.round((totalCompletedModules / totalAvailableModules) * 100))
        : 0;

    const summary = {
      totalCourses: catalog.length,
      enrolledCourses: enrolledCoursesCount,
      completedCourses: completedCoursesCount,
      totalCompletedModules,
      totalAvailableModules,
      overallPercentage,
      recentlyStudied,
    };

    return c.json({
      success: true,
      summary,
      courses: courseCards,
    });
  } catch (error) {
    console.error("[Progress GET] Exception:", error);
    return c.json(
      { error: "Internal Server Error", message: "Failed to retrieve course progress." },
      500
    );
  }
});

/**
 * 2. Get Progress for a Specific Course
 * GET /api/progress/:courseId
 */
progressRouter.get("/:courseId", async (c) => {
  const session = await authenticateUser(c);
  if (!session) {
    return c.json({ error: "Unauthorized", message: "Sign in required to view course progress." }, 401);
  }

  const courseId = c.req.param("courseId");
  if (!isValidIdentifier(courseId)) {
    return c.json({ error: "Invalid course identifier", courseId }, 400);
  }

  try {
    const existing = (await getCourseProgress(session.userId, courseId, c.env)) || {
      courseId,
      completedModuleIds: [],
      progressPercentage: 0,
      status: "not-started",
    };

    return c.json({
      success: true,
      courseId,
      progress: existing,
    });
  } catch (error) {
    console.error(`[Progress GET ${courseId}] Exception:`, error);
    return c.json(
      { error: "Internal Server Error", message: "Failed to retrieve course progress." },
      500
    );
  }
});

/**
 * 3. Update Progress for a Course
 * POST /api/progress/:courseId
 * Body: { moduleId, moduleName, moduleRoute, completed }
 */
progressRouter.post("/:courseId", async (c) => {
  const session = await authenticateUser(c);
  if (!session) {
    return c.json({ error: "Unauthorized", message: "Sign in required to update progress." }, 401);
  }

  const courseId = c.req.param("courseId");
  if (!isValidIdentifier(courseId)) {
    return c.json({ error: "Invalid course identifier", courseId }, 400);
  }

  try {
    const body = await c.req.json().catch(() => ({}));
    const { moduleId, moduleName, moduleRoute, completed } = body;

    const catalog = (await getCoursesCatalog(c.env, c.req.url)) || [];
    const courseMeta = catalog.find((item) => item.id === courseId);
    const totalMods = courseMeta?.totalModules || 24;

    const existing = (await getCourseProgress(session.userId, courseId, c.env)) || {
      courseId,
      completedModuleIds: [],
    };

    const completedSet = new Set(existing.completedModuleIds || []);

    if (completed === true && moduleId) {
      completedSet.add(moduleId);
    } else if (completed === false && moduleId) {
      completedSet.delete(moduleId);
    }

    const completedArray = Array.from(completedSet);
    const pct = Math.min(100, Math.round((completedArray.length / totalMods) * 100));

    const updated = {
      courseId,
      completedModuleIds: completedArray,
      currentModuleId: moduleId || existing.currentModuleId || null,
      currentModuleName: moduleName || existing.currentModuleName || null,
      currentModuleRoute: moduleRoute || existing.currentModuleRoute || courseMeta?.route || null,
      progressPercentage: pct,
      status: pct === 100 ? "completed" : completedArray.length > 0 ? "in-progress" : "not-started",
      lastAccessedAt: new Date().toISOString(),
    };

    await saveCourseProgress(session.userId, courseId, updated, c.env);

    return c.json({
      success: true,
      progress: updated,
    });
  } catch (error) {
    console.error(`[Progress POST ${courseId}] Exception:`, error);
    return c.json(
      { error: "Internal Server Error", message: "Failed to save course progress." },
      500
    );
  }
});

/**
 * 3. Batch Sync Progress from LocalStorage (Guest to Authenticated Transition)
 * POST /api/progress/sync
 * Body: { localProgress: { [courseId]: { completedModuleIds, currentModuleId, ... } } }
 */
progressRouter.post("/sync", async (c) => {
  const session = await authenticateUser(c);
  if (!session) {
    return c.json({ error: "Unauthorized", message: "Sign in required to sync progress." }, 401);
  }

  try {
    const body = await c.req.json().catch(() => ({}));
    const localProgress = body.localProgress || {};

    const catalog = (await getCoursesCatalog(c.env, c.req.url)) || [];
    const catalogMap = new Map(catalog.map((c) => [c.id, c]));

    const syncedResults = {};

    for (const [courseId, local] of Object.entries(localProgress)) {
      if (!isValidIdentifier(courseId)) continue;

      const courseMeta = catalogMap.get(courseId);
      const totalMods = courseMeta?.totalModules || 24;

      const serverProg = (await getCourseProgress(session.userId, courseId, c.env)) || {
        courseId,
        completedModuleIds: [],
      };

      // Union of completed modules
      const mergedCompleted = new Set([
        ...(serverProg.completedModuleIds || []),
        ...(Array.isArray(local.completedModuleIds) ? local.completedModuleIds : []),
      ]);

      const completedArray = Array.from(mergedCompleted);
      const pct = Math.min(100, Math.round((completedArray.length / totalMods) * 100));

      // Choose newest current module
      const serverTime = serverProg.lastAccessedAt ? new Date(serverProg.lastAccessedAt).getTime() : 0;
      const localTime = local.lastAccessedAt ? new Date(local.lastAccessedAt).getTime() : 0;

      const useLocalLatest = localTime > serverTime;

      const merged = {
        courseId,
        completedModuleIds: completedArray,
        currentModuleId: useLocalLatest
          ? local.currentModuleId || serverProg.currentModuleId
          : serverProg.currentModuleId || local.currentModuleId,
        currentModuleName: useLocalLatest
          ? local.currentModuleName || serverProg.currentModuleName
          : serverProg.currentModuleName || local.currentModuleName,
        currentModuleRoute: useLocalLatest
          ? local.currentModuleRoute || serverProg.currentModuleRoute
          : serverProg.currentModuleRoute || local.currentModuleRoute,
        progressPercentage: pct,
        status: pct === 100 ? "completed" : completedArray.length > 0 ? "in-progress" : "not-started",
        lastAccessedAt: new Date(Math.max(serverTime, localTime, Date.now())).toISOString(),
      };

      await saveCourseProgress(session.userId, courseId, merged, c.env);
      syncedResults[courseId] = merged;
    }

    return c.json({
      success: true,
      synced: syncedResults,
    });
  } catch (error) {
    console.error("[Progress Sync] Exception:", error);
    return c.json(
      { error: "Internal Server Error", message: "Failed to synchronize progress." },
      500
    );
  }
});
