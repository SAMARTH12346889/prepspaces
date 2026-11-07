import { Hono } from "hono";
import { getSession } from "../services/storageService.js";
import {
  getCourseProgress,
  saveCourseProgress,
  getAllUserProgress,
  getGuestCourseProgress,
  getAllGuestProgress,
  migrateGuestToUser,
} from "../services/storageService.js";
import { getCoursesCatalog, isValidIdentifier } from "../services/courseContentService.js";
import {
  computeCourseAccessState,
  validateAndCompleteModule,
} from "../services/unlockingService.js";

export const progressRouter = new Hono();

const GUEST_ID_PATTERN = /^[a-z0-9_-]{8,64}$/i;

/**
 * Validates or resolves either an authenticated user or an anonymous guest.
 */
async function resolveUserOrGuest(c) {
  // 1. Check for authenticated Bearer token
  const authHeader = c.req.header("Authorization") || "";
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();

  if (token) {
    const session = await getSession(token, c.env);
    if (session?.userId) {
      return {
        isGuest: false,
        userId: session.userId,
        user: session.user,
        token,
      };
    }
  }

  // 2. Fall back to guest session
  let guestId =
    c.req.header("x-guest-session-id") ||
    c.req.query("guestId") ||
    "";

  guestId = guestId.trim();

  if (!guestId || !GUEST_ID_PATTERN.test(guestId)) {
    // Generate a secure guest session identifier
    guestId = `guest_${crypto.randomUUID()}`;
  }

  return {
    isGuest: true,
    guestId,
  };
}

/**
 * Middleware requiring active authentication
 */
async function authenticateUser(c) {
  const resolved = await resolveUserOrGuest(c);
  if (resolved.isGuest) {
    return null;
  }
  return resolved;
}

/**
 * 1. Get Course Unlocking & Sequential Access State
 * GET /api/progress/:courseId/access
 * Query / Headers: accepts Bearer token or x-guest-session-id
 */
progressRouter.get("/:courseId/access", async (c) => {
  const courseId = c.req.param("courseId");
  if (!isValidIdentifier(courseId)) {
    return c.json({ error: "Invalid course identifier", courseId }, 400);
  }

  try {
    const userOrGuest = await resolveUserOrGuest(c);
    const accessState = await computeCourseAccessState(courseId, userOrGuest, c.env, c.req.url);

    if (userOrGuest.isGuest) {
      c.header("x-guest-session-id", userOrGuest.guestId);
    }

    // Micro-cache private access response to prevent rapid duplicate roundtrips
    c.header("Cache-Control", "private, max-age=15, stale-while-revalidate=30");

    return c.json({
      success: true,
      guestSessionId: userOrGuest.isGuest ? userOrGuest.guestId : null,
      ...accessState,
    });
  } catch (error) {
    console.error(`[Progress Access GET ${courseId}] Exception:`, error);
    return c.json(
      { error: "Internal Server Error", message: "Failed to compute module access state." },
      500
    );
  }
});

/**
 * 2. Authoritative Module Completion Endpoint
 * POST /api/progress/:courseId/complete
 * Body: { moduleId, activityData }
 */
progressRouter.post("/:courseId/complete", async (c) => {
  const courseId = c.req.param("courseId");
  if (!isValidIdentifier(courseId)) {
    return c.json({ error: "Invalid course identifier", courseId }, 400);
  }

  try {
    const body = await c.req.json().catch(() => ({}));
    const { moduleId, activityData } = body;

    if (!moduleId || !isValidIdentifier(moduleId)) {
      return c.json({ error: "Invalid or missing moduleId", moduleId }, 400);
    }

    const userOrGuest = await resolveUserOrGuest(c);
    const result = await validateAndCompleteModule(
      courseId,
      moduleId,
      activityData || {},
      userOrGuest,
      c.env,
      c.req.url
    );

    if (!result.success) {
      return c.json(result, result.status || 400);
    }

    if (userOrGuest.isGuest) {
      c.header("x-guest-session-id", userOrGuest.guestId);
    }

    return c.json({
      ...result,
      guestSessionId: userOrGuest.isGuest ? userOrGuest.guestId : null,
    });
  } catch (error) {
    console.error(`[Progress Complete POST ${courseId}] Exception:`, error);
    return c.json(
      { error: "Internal Server Error", message: "Failed to validate module completion." },
      500
    );
  }
});

/**
 * 3. Migrate Guest Progress to Authenticated Student Account
 * POST /api/progress/migrate-guest
 * Body: { guestSessionId }
 * Header: Authorization: Bearer <token>
 */
progressRouter.post("/migrate-guest", async (c) => {
  const user = await authenticateUser(c);
  if (!user) {
    return c.json({ error: "Unauthorized", message: "Sign in required to migrate progress." }, 401);
  }

  try {
    const body = await c.req.json().catch(() => ({}));
    const guestSessionId = (body.guestSessionId || "").trim();

    if (!guestSessionId || !GUEST_ID_PATTERN.test(guestSessionId)) {
      return c.json({
        success: false,
        error: "invalid_guest_id",
        message: "Valid guestSessionId is required for migration.",
      }, 400);
    }

    const migrationResult = await migrateGuestToUser(guestSessionId, user.userId, c.env);

    return c.json({
      success: true,
      message: "Guest progress successfully merged into authenticated student account.",
      ...migrationResult,
    });
  } catch (error) {
    console.error("[Progress Migrate-Guest] Exception:", error);
    return c.json(
      { error: "Internal Server Error", message: "Failed to migrate guest progress." },
      500
    );
  }
});

/**
 * 4. Get Student/Guest Progress for all Courses (Dashboard)
 * GET /api/progress
 */
progressRouter.get("/", async (c) => {
  try {
    const userOrGuest = await resolveUserOrGuest(c);

    // Parallel retrieval of courses catalog and user/guest progress records
    const [catalogRaw, progressMap] = await Promise.all([
      getCoursesCatalog(c.env, c.req.url),
      userOrGuest.isGuest
        ? getAllGuestProgress(userOrGuest.guestId, c.env)
        : getAllUserProgress(userOrGuest.userId, c.env),
    ]);

    const catalog = catalogRaw || [];

    if (userOrGuest.isGuest) {
      c.header("x-guest-session-id", userOrGuest.guestId);
    }

    // Micro-cache private progress response to prevent redundant rapid polling
    c.header("Cache-Control", "private, no-cache, no-store, must-revalidate");

    let totalCompletedModules = 0;
    let totalAvailableModules = 0;
    let enrolledCoursesCount = 0;
    let completedCoursesCount = 0;

    const courseCards = catalog.map((course) => {
      const p = progressMap[course.id] || {};
      const completedList = Array.isArray(p.completedModuleIds) ? p.completedModuleIds : [];
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
      } else if (completedCount > 0 || p.currentModuleId || p.lastAccessedAt) {
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
        currentModuleId: p.currentModuleId || null,
        currentModuleName: p.currentModuleName || null,
        currentModuleRoute: p.currentModuleRoute || course.route,
        lastAccessedAt: p.lastAccessedAt || null,
        status,
      };
    });

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
      isGuest: userOrGuest.isGuest,
      guestSessionId: userOrGuest.isGuest ? userOrGuest.guestId : null,
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
