import { cors } from "hono/cors";

/**
 * Production frontend origins.
 */
const PROD_ORIGINS = [
  "https://prepspaces.com",
  "https://www.prepspaces.com",
];

/**
 * Local development origins (restricted to non-production environments).
 */
const LOCAL_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:3000",
];

/**
 * CORS middleware configured for PrepSpaces.
 */
export const prepspacesCors = cors({
  origin: (origin, c) => {
    // Direct server-to-server or curl requests without an Origin header
    if (!origin) {
      return undefined;
    }

    // 1. Authoritative production domains (always allowed)
    if (PROD_ORIGINS.includes(origin)) {
      return origin;
    }

    // 2. Approved Cloudflare Pages preview/staging deployments for PrepSpaces
    // Strictly scoped to prepspaces.pages.dev and *.prepspaces.pages.dev
    if (
      origin === "https://prepspaces.pages.dev" ||
      /^https:\/\/[a-zA-Z0-9-]+\.prepspaces\.pages\.dev$/.test(origin)
    ) {
      return origin;
    }

    // 3. Localhost development origins (strictly disallowed in production)
    const isProduction = c.env?.ENVIRONMENT === "production";
    if (!isProduction && LOCAL_ORIGINS.includes(origin)) {
      return origin;
    }

    // Disallow all other origins
    return null;
  },
  allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  exposeHeaders: ["Content-Length", "X-Request-Id"],
  maxAge: 86400,
  credentials: true,
});
