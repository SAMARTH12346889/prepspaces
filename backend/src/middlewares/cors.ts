import { cors } from "hono/cors";

/**
 * Permitted origin domains for PrepSpaces frontend applications.
 */
const ALLOWED_ORIGINS: readonly string[] = [
  "https://prepspaces.com",
  "https://www.prepspaces.com",
  "http://localhost:5173",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:3000",
];

/**
 * CORS middleware configured for PrepSpaces environments.
 */
export const prepspacesCors = cors({
  origin: (origin) => {
    // Direct server-to-server or curl requests without an Origin header
    if (!origin) {
      return undefined;
    }

    // Exact matches for production and local dev origins
    if (ALLOWED_ORIGINS.includes(origin)) {
      return origin;
    }

    // Allow Cloudflare Pages preview deployments (*.pages.dev)
    if (origin.endsWith(".pages.dev")) {
      return origin;
    }

    // Disallow unapproved origins
    return null;
  },
  allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  exposeHeaders: ["Content-Length", "X-Request-Id"],
  maxAge: 86400,
  credentials: true,
});
