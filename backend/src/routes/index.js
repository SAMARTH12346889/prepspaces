import { Hono } from "hono";
import { healthRouter } from "./health.js";
import { courseRouter } from "./courseRoutes.js";
import { authRouter } from "./authRoutes.js";
import { progressRouter } from "./progressRoutes.js";

export const apiRouter = new Hono();

/**
 * Root API metadata endpoint
 * GET /api
 */
apiRouter.get("/", (c) => {
  return c.json({
    message: "PrepSpaces Backend API v1",
    status: "online",
    environment: c.env.ENVIRONMENT || "development",
    endpoints: {
      health: "/api/health",
      courses: "/api/courses",
      auth: "/api/auth",
      progress: "/api/progress",
    },
  });
});

/**
 * Mount sub-routers
 */
apiRouter.route("/health", healthRouter);
apiRouter.route("/courses", courseRouter);
apiRouter.route("/auth", authRouter);
apiRouter.route("/progress", progressRouter);
