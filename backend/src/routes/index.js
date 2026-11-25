import { Hono } from "hono";
import { healthRouter } from "./health.js";
import { courseRouter } from "./courseRoutes.js";
import { authRouter } from "./authRoutes.js";
import { progressRouter } from "./progressRoutes.js";
import { interviewRouter } from "./interviewRoutes.js";
import { voiceRouter } from "./voiceRoutes.js";

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
      interviews: "/api/interviews",
      voice: "/api/voice",
      transcribe: "/api/transcribe",
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
apiRouter.route("/interviews", interviewRouter);
apiRouter.route("/voice", voiceRouter);
apiRouter.route("/transcribe", voiceRouter);
