import { Hono } from "hono";
import type { Env } from "./types/env";
import { prepspacesCors } from "./middlewares/cors";
import { apiRouter } from "./routes";
import { healthRouter } from "./routes/health";

/**
 * Main PrepSpaces Cloudflare Workers entry point.
 */
const app = new Hono<{ Bindings: Env }>();

// 1. Global Middleware
app.use("*", prepspacesCors);

// 2. Direct Root & Health Endpoints
app.route("/health", healthRouter);

app.get("/", (c) => {
  return c.json({
    name: "PrepSpaces Backend API",
    status: "active",
    environment: c.env.ENVIRONMENT || "development",
    version: "1.0.0",
    docs: "/api",
    health: "/health",
  });
});

// 3. API Version 1 Namespace
app.route("/api", apiRouter);

// 4. Fallback 404 Handler
app.notFound((c) => {
  return c.json(
    {
      error: "Not Found",
      message: `Endpoint '${c.req.method} ${c.req.path}' was not found.`,
      status: 404,
    },
    404
  );
});

// 5. Global Error Handler
app.onError((err, c) => {
  console.error("PrepSpaces Worker Unhandled Error:", err);
  return c.json(
    {
      error: "Internal Server Error",
      message: err.message || "An unexpected error occurred.",
      status: 500,
    },
    500
  );
});

export default app;
