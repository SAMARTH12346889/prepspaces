# PrepSpaces Backend — Cloudflare Workers & Hono (JavaScript)

Lightweight, ultra-fast, serverless backend infrastructure for PrepSpaces built on [Cloudflare Workers](https://workers.cloudflare.com/) and [Hono](https://hono.dev/) using plain JavaScript (ES modules).

---

## Architecture Overview

```
projectx/backend/
├── .dev.vars.example     # Template for local environment secrets
├── .gitignore            # Git ignore for node_modules, wrangler cache, secrets
├── package.json          # Dependencies (Hono, Wrangler)
├── wrangler.jsonc        # Cloudflare Workers configuration & environment definitions
└── src/
    ├── index.js          # Main entry point, error handling, 404, root routes
    ├── middlewares/
    │   └── cors.js       # PrepSpaces CORS configuration for frontend domains
    └── routes/
        ├── index.js      # Main /api router aggregator
        └── health.js     # Health-check endpoint (/health and /api/health)
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

# Deploy to Cloudflare Workers (default environment)
npm run deploy

# Deploy to production environment
npm run deploy:prod

# Deploy to staging environment
npm run deploy:staging
```

---

## Future Integrations

- **Database:** Cloudflare D1 or Hyperdrive connection bindings can be added directly in `wrangler.jsonc` and accessed via `c.env.DB`.
- **API Modules:** New domain routers (Auth, Interviews, Courses, AI) can be added as `.js` modules under `src/routes/` and mounted in `src/routes/index.js`.
