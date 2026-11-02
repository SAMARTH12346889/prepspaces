import { Hono } from "hono";

export const healthRouter = new Hono();

// Track isolate initialization timestamp upon first request execution
let isolateStartTime = null;

/**
 * Health check endpoint for uptime monitors, deployment validation, and load balancers.
 * GET /health or GET /api/health
 */
healthRouter.get("/", (c) => {
  if (isolateStartTime === null) {
    isolateStartTime = Date.now();
  }

  const uptime = Math.max(0, Date.now() - isolateStartTime);

  return c.json({
    status: "healthy",
    service: "prepspaces-backend",
    version: "1.0.0",
    environment: c.env.ENVIRONMENT || "development",
    timestamp: new Date().toISOString(),
    uptimeMs: uptime,
  });
});
