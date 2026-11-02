import { Hono } from "hono";
import { healthRouter } from "./health.js";

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
    },
  });
});

/**
 * Mount sub-routers
 * Future route modules (e.g. auth, users, interviews) will be registered here.
 */
apiRouter.route("/health", healthRouter);
