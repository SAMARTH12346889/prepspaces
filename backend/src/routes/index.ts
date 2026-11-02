import { Hono } from "hono";
import type { Env } from "../types/env";
import { healthRouter } from "./health";

export const apiRouter = new Hono<{ Bindings: Env }>();

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
