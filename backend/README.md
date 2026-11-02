# PrepSpaces Backend — Cloudflare Workers & Hono

Lightweight, ultra-fast, serverless backend infrastructure for PrepSpaces built on [Cloudflare Workers](https://workers.cloudflare.com/) and [Hono](https://hono.dev/).

---

## Architecture Overview

```
projectx/backend/
├── .dev.vars.example     # Template for local environment secrets
├── .gitignore            # Git ignore for node_modules, wrangler cache, secrets
├── package.json          # Dependencies (Hono, Wrangler, TypeScript)
├── tsconfig.json         # Strict Cloudflare Worker TS configuration
├── wrangler.jsonc        # Cloudflare Workers configuration & environment definitions
└── src/
    ├── index.ts          # Main entry point, error handling, 404, root routes
    ├── middlewares/
    │   └── cors.ts       # PrepSpaces CORS configuration for frontend domains
    ├── routes/
    │   ├── index.ts      # Main /api router aggregator
    │   └── health.ts     # Health-check endpoint (/health and /api/health)
    └── types/
        └── env.ts        # Typed environment bindings and future Cloudflare resources
```

---

## Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Service overview, status, and environment |
| `GET` | `/health` | Health check (status, uptime, timestamp, environment) |
| `GET` | `/api` | API index and metadata |
| `GET` | `/api/health` | API namespace health check |

---

## CORS Allowed Origins

- Production: `https://prepspaces.com`, `https://www.prepspaces.com`
- Development: `http://localhost:5173`, `http://localhost:3000`, `http://127.0.0.1:5173`, `http://127.0.0.1:3000`
- Preview: `*.pages.dev` (Cloudflare Pages preview deployments)

---

## Development & Deployment Scripts

From within `projectx/backend`:

```bash
# Install dependencies
npm install

# Start local development server (with hot reload)
npm run dev

# Run TypeScript type check
npm run typecheck

# Deploy to Cloudflare Workers (default environment)
npm run deploy

# Deploy to production environment
npm run deploy:prod

# Deploy to staging environment
npm run deploy:staging
```

---

## Future Integrations

- **Database:** Cloudflare D1 or Hyperdrive connection bindings can be added directly in `wrangler.jsonc` and typed in `src/types/env.ts`.
- **API Modules:** New domain routers (Auth, Interviews, Courses, AI) can be added to `src/routes/` and mounted in `src/routes/index.ts`.
