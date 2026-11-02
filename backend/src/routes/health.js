import { Hono } from "hono";

export const healthRouter = new Hono();

/**
 * Health check endpoint for uptime monitors, deployment validation, and load balancers.
 * GET /health or GET /api/health
 */
healthRouter.get("/", (c) => {
  return c.json({
    status: "healthy",
    service: "prepspaces-backend",
    version: "1.0.0",
    environment: c.env.ENVIRONMENT || "development",
    timestamp: new Date().toISOString(),
    uptimeMs: Math.round(performance.now()),
  });
});
