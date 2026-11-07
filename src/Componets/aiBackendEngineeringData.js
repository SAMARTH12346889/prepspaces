// Module 18: AI Backend Engineering & API Development Curriculum Data
// Generated automatically for PrepSpaces AI Engineering & Generative AI track.

export const overview = {
  "moduleNumber": "18",
  "title": "AI Backend Engineering & API Development",
  "recommendedDuration": "30–35 hours",
  "difficulty": "Advanced / Backend & Systems Engineering",
  "primaryStack": "Python 3.12+, FastAPI, Pydantic V2, Starlette, Uvicorn ASGI",
  "infrastructure": "PostgreSQL, Redis 7+, Celery, Docker, Nginx / Cloudflare",
  "securityStandards": "OWASP API Security Top 10, JWT (PyJWT), Argon2id (pwdlib), OAuth2 Password Bearer",
  "finalOutcome": "Architect, build, and deploy production-grade asynchronous backends connecting frontend interfaces, relational databases, distributed Redis caches, and AI model inference gateways. Master non-blocking coroutines, Pydantic V2 validation, Server-Sent Events (SSE) token streaming, Token Bucket rate limiting, Argon2id security, and object-level authorization (BOLA defense)."
};

export const curriculumUnits = [
  {
    "id": "unit-01",
    "number": "01",
    "title": "Understanding Backend Engineering for AI",
    "subtitle": "Architecture, Request Flow & AI-Specific Workload Demands",
    "summary": "Establish the three-tier client-server architecture, contrast traditional CRUD request profiles with Generative AI workloads (high TTFT, token streaming, long request horizons), and master RESTful HTTP methods and status codes.",
    "topics": [
      {
        "id": "sec-01-01",
        "title": "Three-Tier Client-Server Architecture & Request Flow",
        "content": "A modern web application comprises three decoupled operational tiers:\n1. Frontend Client: The user interface layer (React, Next.js, mobile apps) executing in the user's browser or device.\n2. Backend Application Server: The authoritative business logic, authentication, validation, orchestration, and security boundary (FastAPI, Uvicorn).\n3. Data & Storage Layer: Persistent state, indexes, caches, and message brokers (PostgreSQL, Redis).\n\nWhen a candidate logs into PrepSpaces or requests an AI mock interview:\n[React Frontend] --(POST /api/v1/auth/login)--> [FastAPI Backend]\n  --> Verify password hash (Argon2id) in [PostgreSQL]\n  --> Issue signed JWT access token\n  <--(HTTP 200 OK + Bearer Token)-- [FastAPI Backend]\nThe client never directly interfaces with databases or model weights. The backend acts as the single source of truth and security gatekeeper."
      },
      {
        "id": "sec-01-02",
        "title": "Why AI Applications Demand Specialized Backend Engineering",
        "content": "Traditional web applications typically execute fast, I/O-bound CRUD transactions:\n- Fetch user profile: ~15-30ms\n- Query course catalog: ~25ms\n- Update account username: ~20ms\n\nIn sharp contrast, Generative AI introduces radical workload characteristics:\n1. Extremely Long Request Durations: An LLM generating an in-depth 800-token Java interview evaluation can take 5,000ms to 12,000ms.\n2. Unpredictable Time-To-First-Token (TTFT): Varies dynamically with prompt context length and GPU prefill queues.\n3. Streamed Token Ingestion: Clients require immediate progressive text rendering via Server-Sent Events (SSE) or WebSockets rather than monolithic JSON responses.\n4. Heavy External I/O & Network Flakiness: Constant HTTP/gRPC calls to external inference engines (Gemini, Groq, local vLLM).\n5. Asymmetrical Cost & Quotas: One request can consume 10,000 input tokens costing $0.05, mandating precise token-level rate limiting and credit deduction."
      },
      {
        "id": "sec-01-03",
        "title": "HTTP Protocol, Methods & Status Code Taxonomy",
        "content": "A RESTful API utilizes standardized HTTP verbs and status codes to communicate operational semantics:\n\nHTTP Methods:\n- GET: Safe, idempotent retrieval of resource state.\n- POST: Non-idempotent submission creating new resources or invoking actions (e.g., starting an interview, submitting AI prompt).\n- PUT: Complete replacement of target resource.\n- PATCH: Partial mutation of designated fields.\n- DELETE: Removal of target resource.\n\nAuthoritative HTTP Status Codes:\n- 200 OK: Request succeeded; payload returned.\n- 201 Created: New entity successfully created.\n- 202 Accepted: Request accepted for asynchronous processing (e.g., background resume parsing job queued).\n- 204 No Content: Operation succeeded; no body returned.\n- 400 Bad Request: Malformed syntax or generic client error.\n- 401 Unauthorized: Authentication credentials absent, expired, or invalid.\n- 403 Forbidden: Identity authenticated, but insufficient authorization or permissions.\n- 404 Not Found: Target resource does not exist.\n- 409 Conflict: State collision (e.g., duplicate user email).\n- 413 Content Too Large: Request body exceeds size limit.\n- 422 Unprocessable Content: Pydantic validation failure.\n- 429 Too Many Requests: Rate limit or token quota exceeded; accompanied by Retry-After header.\n- 500 Internal Server Error: Unhandled backend exception or crash.\n- 502 Bad Gateway / 504 Gateway Timeout: Upstream LLM provider failure or response timeout."
      }
    ]
  },
  {
    "id": "unit-02",
    "number": "02",
    "title": "Introduction to FastAPI & ASGI Runtime",
    "subtitle": "High-Performance Asynchronous Python Web Framework",
    "summary": "Deep dive into FastAPI's architecture built on Starlette and Pydantic, the ASGI standard, Uvicorn execution model, automatic OpenAPI interactive documentation generation, and route declaration conventions.",
    "topics": [
      {
        "id": "sec-02-01",
        "title": "FastAPI Architecture & The ASGI Standard",
        "content": "FastAPI is a modern, high-performance web framework designed for Python 3.8+ based on standard Python type hints.\nKey architectural pillars:\n1. Starlette Core: Provides lightning-fast ASGI (Asynchronous Server Gateway Interface) toolkit, routing, middleware, WebSockets, and streaming responses.\n2. Pydantic Engine: Provides ultra-fast data validation, serialization, and schema definition using Python type annotations.\n3. ASGI Interface: Unlike legacy synchronous WSGI (Flask, Django), ASGI natively supports asynchronous Python coroutines (async def), event loops, long-lived streaming connections, and WebSockets.\n4. Uvicorn: A lightning-fast ASGI server implementation powered by uvloop (C-based libuv event loop) and httptools."
      },
      {
        "id": "sec-02-02",
        "title": "Minimal FastAPI Application & Route Definitions",
        "content": "A production-structured minimal FastAPI server exposes health probes and operational endpoints:\n\nfrom fastapi import FastAPI\nfrom contextlib import asynccontextmanager\n\n@asynccontextmanager\nasync def lifespan(app: FastAPI):\n    # Startup: Initialize DB connection pool & HTTP clients\n    print(\"AI Backend booting...\")\n    yield\n    # Shutdown: Clean up connections\n    print(\"AI Backend graceful shutdown...\")\n\napp = FastAPI(\n    title=\"PrepSpaces AI Backend API\",\n    version=\"1.0.0\",\n    docs_url=\"/docs\",\n    redoc_url=\"/redoc\",\n    lifespan=lifespan\n)\n\n@app.get(\"/health\", tags=[\"System Probes\"])\nasync def health_check():\n    return {\"status\": \"healthy\", \"service\": \"prepspaces-backend\", \"version\": \"1.0.0\"}\n\nAccessing http://127.0.0.1:8000/docs automatically renders interactive Swagger UI powered by OpenAPI 3.1."
      }
    ]
  },
  {
    "id": "unit-03",
    "number": "03",
    "title": "Request Handling & Pydantic V2 Validation",
    "subtitle": "Schema Enforcement, Custom Validators & Parameter Types",
    "summary": "Master robust input validation and response serialization using Pydantic V2. Compare path parameters, query parameters, headers, and request bodies, and implement strict constraints to prevent malformed AI payloads.",
    "topics": [
      {
        "id": "sec-03-01",
        "title": "Pydantic V2 Core Mechanics & Schema Definition",
        "content": "In production AI backends, you must never trust user inputs. Malformed prompts, negative durations, or injected prompt commands must be rejected at the API perimeter before wasting expensive GPU compute.\n\nfrom pydantic import BaseModel, Field, field_validator\nfrom typing import Literal\n\nclass InterviewCreateSchema(BaseModel):\n    topic: str = Field(min_length=2, max_length=100, description=\"Interview technology topic\")\n    difficulty: Literal[\"junior\", \"mid\", \"senior\", \"staff\"]\n    duration_minutes: int = Field(ge=10, le=120, description=\"Duration in minutes (10 to 120)\")\n    candidate_experience_years: float = Field(ge=0.0, le=50.0)\n\n    @field_validator(\"topic\")\n    @classmethod\n    def validate_topic(cls, v: str) -> str:\n        clean = v.strip()\n        if not clean:\n            raise ValueError(\"Topic cannot be blank or whitespace only\")\n        return clean\n\nIf a client passes duration_minutes: -5, FastAPI automatically intercepts the request and responds with 422 Unprocessable Content and detailed field errors."
      },
      {
        "id": "sec-03-02",
        "title": "Path Parameters, Query Parameters & Request Bodies",
        "content": "FastAPI differentiates parameter types based on their declaration:\n1. Path Parameters: Declared in the URL path pattern: @app.get(\"/interviews/{interview_id}\") -> async def get_interview(interview_id: str).\n2. Query Parameters: Standard function arguments not in the path: async def list_interviews(page: int = 1, limit: int = 20, status: str | None = None).\n3. Request Body: Declared via a Pydantic model parameter: async def create_interview(payload: InterviewCreateSchema).\n4. Header & Cookie Parameters: Extracted using Header() and Cookie().\nThis explicit taxonomy ensures self-documenting APIs and clean separation of concerns."
      }
    ]
  },
  {
    "id": "unit-04",
    "number": "04",
    "title": "Asynchronous Processing & Event Loop Mechanics",
    "subtitle": "Concurrency vs Parallelism, Coroutines & Non-Blocking I/O",
    "summary": "Understand why async/await is the lifeblood of high-performance AI backends. Compare cooperative multitasking and the asyncio event loop with multi-threading and multi-processing, and profile I/O-bound vs CPU-bound execution.",
    "topics": [
      {
        "id": "sec-04-01",
        "title": "The Asyncio Event Loop & Cooperative Concurrency",
        "content": "In Python, the asyncio event loop acts as a single-threaded orchestrator of cooperative tasks:\n1. When a coroutine executes until an await statement (e.g., waiting for an external Gemini LLM response or PostgreSQL query), it yields control back to the event loop.\n2. The event loop immediately switches context to execute another ready coroutine.\n3. When the I/O socket signals completion via OS primitives (epoll on Linux, kqueue on macOS, IOCP on Windows), the event loop resumes the original coroutine.\n\nCritical Distinctions:\n- Concurrency: Multiple tasks make progress during overlapping time windows (handled expertly by 1 thread on 1 CPU core via async I/O).\n- Parallelism: Multiple tasks execute at the exact same physical instant on separate hardware CPU cores or GPU stream multiprocessors."
      },
      {
        "id": "sec-04-02",
        "title": "The Golden Rule: Never Block the Event Loop",
        "content": "Because FastAPI's async endpoints run on the primary asyncio event loop thread:\n- If you call synchronous blocking functions like time.sleep(5) or synchronous DB drivers (psycopg2, synchronous requests.get), THE ENTIRE EVENT LOOP FREEZES. All concurrent users are blocked!\n- Correct Asynchronous I/O: Always use await asyncio.sleep(), asyncpg, and httpx.AsyncClient().\n- Handling CPU-Heavy Tasks: If you must parse a massive 50MB PDF or run local tokenization, offload to a background thread pool via asyncio.to_thread() or a Celery worker."
      }
    ]
  },
  {
    "id": "unit-05",
    "number": "05",
    "title": "Modular Architecture & Dependency Injection",
    "subtitle": "APIRouter Hierarchies & Reusable Injected Components",
    "summary": "Scale FastAPI codebases from single scripts to enterprise multi-service platforms using APIRouter namespaces, layered directory structures, and FastAPI's powerful Dependency Injection (Depends) system.",
    "topics": [
      {
        "id": "sec-05-01",
        "title": "Enterprise Project Structure & APIRouter",
        "content": "Maintain clean architecture by separating routing, business logic, schemas, and persistence:\napp/\n├── main.py                  # App entry point, middleware, lifespan\n├── core/\n│   ├── config.py            # Pydantic Settings & environment variables\n│   └── security.py          # JWT, password hashing, OAuth2\n├── api/\n│   └── v1/\n│       ├── router.py        # Master V1 router aggregator\n│       ├── auth.py          # /api/v1/auth/*\n│       ├── interviews.py    # /api/v1/interviews/*\n│       ├── ai.py            # /api/v1/ai/*\n│       └── resume.py        # /api/v1/resume/*\n├── schemas/                 # Pydantic validation schemas\n├── services/                # Pure business logic & AI orchestration\n└── database/                # SQLAlchemy models, sessions & migrations\n\nAPIRouter allows defining modular prefixes, tags, and default dependencies per domain."
      },
      {
        "id": "sec-05-02",
        "title": "Dependency Injection via Depends()",
        "content": "FastAPI's Dependency Injection system solves cross-cutting concerns cleanly without global variables:\n\nfrom fastapi import Depends, HTTPException, status\nfrom fastapi.security import OAuth2PasswordBearer\nfrom app.core.security import decode_access_token\n\noauth2_scheme = OAuth2PasswordBearer(tokenUrl=\"/api/v1/auth/token\")\n\nasync def get_current_user(token: str = Depends(oauth2_scheme)) -> dict:\n    payload = decode_access_token(token)\n    if not payload:\n        raise HTTPException(\n            status_code=status.HTTP_401_UNAUTHORIZED,\n            detail=\"Invalid or expired access token\",\n            headers={\"WWW-Authenticate\": \"Bearer\"}\n        )\n    return {\"user_id\": payload[\"sub\"], \"role\": payload.get(\"role\", \"student\")}\n\n# Injected directly into routes\n@router.get(\"/profile\")\nasync def get_profile(current_user: dict = Depends(get_current_user)):\n    return {\"user\": current_user}"
      }
    ]
  },
  {
    "id": "unit-06",
    "number": "06",
    "title": "Background Processing & Distributed Task Queues",
    "subtitle": "FastAPI BackgroundTasks, Celery, Redis Broker & 202 Accepted",
    "summary": "Differentiate between in-process fire-and-forget tasks and production distributed worker fleets using Celery and Redis. Implement asynchronous job queuing, status polling, and idempotency guarantees for heavy AI workloads.",
    "topics": [
      {
        "id": "sec-06-01",
        "title": "In-Process BackgroundTasks vs Distributed Celery Workers",
        "content": "1. FastAPI BackgroundTasks:\n- Runs inside the same ASGI server process after sending the HTTP response.\n- Excellent for trivial tasks: appending to an audit log file, sending a transactional Slack alert.\n- Fatal flaw for heavy AI: If the server process crashes or restarts, unexecuted tasks are lost forever. CPU-bound parsing degrades the web process.\n\n2. Distributed Task Queues (Celery + Redis/RabbitMQ):\n- The web server pushes a serialized task descriptor onto a durable message broker (Redis).\n- A pool of independent Celery worker processes on dedicated machines pulls tasks, executes heavy resume parsing or multi-step LLM batch evaluations, and writes results to PostgreSQL.\n- Provides durability, automatic retries with exponential backoff, dead-letter queues, and horizontal worker scaling."
      },
      {
        "id": "sec-06-02",
        "title": "The Asynchronous Job Pattern (HTTP 202 Accepted)",
        "content": "For operations exceeding 500ms (e.g., parsing a 20-page resume and extracting technical competencies):\n1. Client sends POST /api/v1/resume/analyze with PDF payload.\n2. FastAPI validates file size, saves to S3/Cloud Storage, pushes Celery task parse_resume.delay(job_id, file_url).\n3. Server immediately responds with:\nHTTP/1.1 202 Accepted\nLocation: /api/v1/jobs/job_998124\n{\n  \"job_id\": \"job_998124\",\n  \"status\": \"queued\",\n  \"poll_url\": \"/api/v1/jobs/job_998124\"\n}\n4. Client polls GET /api/v1/jobs/job_998124 or receives WebSocket notification when completed."
      }
    ]
  },
  {
    "id": "unit-07",
    "number": "07",
    "title": "Real-Time Streaming Responses for AI",
    "subtitle": "Server-Sent Events (SSE), StreamingResponse & WebSockets",
    "summary": "Implement progressive real-time token delivery to eradicate perceived latency. Master FastAPI's StreamingResponse, standard SSE protocol format, chunked transfer encoding, and frontend consumption via the Fetch Streams API.",
    "topics": [
      {
        "id": "sec-07-01",
        "title": "StreamingResponse & Server-Sent Events (SSE) Protocol",
        "content": "Server-Sent Events (SSE) is a standardized HTTP/1.1 and HTTP/2 protocol where the server keeps an HTTP connection open and streams text records adhering to the text/event-stream MIME type:\n\nSSE Protocol Framing:\nevent: token\ndata: {\"token\": \"Java\", \"index\": 0}\n\nevent: token\ndata: {\"token\": \" virtual\", \"index\": 1}\n\nevent: done\ndata: {\"finish_reason\": \"stop\"}\n\nIn FastAPI, stream generation is achieved via Python asynchronous generators (async def with yield) passed directly to Starlette's StreamingResponse. Crucial HTTP headers:\n- Cache-Control: no-cache\n- X-Accel-Buffering: no (disables Nginx reverse proxy buffering so tokens flush instantly to the browser)."
      },
      {
        "id": "sec-07-02",
        "title": "Protocol Matrix: HTTP vs SSE vs WebSockets",
        "content": "Selecting the correct communication protocol:\n1. Standard REST (HTTP/1.1 or HTTP/2):\n- Direction: Request-Response (unidirectional, initiated by client).\n- Connection: Closes after response payload.\n- Ideal for: CRUD, login, metadata, submitting jobs.\n2. Server-Sent Events (SSE):\n- Direction: Server-to-Client continuous unidirectional stream over standard HTTP.\n- Connection: Long-lived HTTP stream; automatic client reconnection built-in.\n- Ideal for: LLM progressive text generation, live score tickers.\n3. WebSockets:\n- Direction: Full-duplex, bidirectional persistent socket.\n- Connection: Upgrade from HTTP to binary/text TCP framing.\n- Ideal for: Real-time interactive voice AI, real-time multiplayer coding sessions."
      }
    ]
  },
  {
    "id": "unit-08",
    "number": "08",
    "title": "Authentication Engineering & Token Security",
    "subtitle": "JWT Anatomy, Argon2 Password Hashing, Refresh Token Rotation",
    "summary": "Architect bulletproof identity systems. Master JWT signing (HS256 vs RS256), cryptographic password hashing using modern Argon2id, OAuth2PasswordBearer flow, and refresh token rotation with reuse detection.",
    "topics": [
      {
        "id": "sec-08-01",
        "title": "Cryptographic Password Hashing: Why Argon2id Wins",
        "content": "Never use MD5, SHA-256, or plain SHA-512 for passwords—they are fast hashing algorithms designed for file integrity, making them susceptible to billions of guesses per second on consumer GPUs.\nModern Password Hashing:\n- Argon2id: Winner of the Password Hashing Competition (PHC). Memory-hard and compute-hard, rendering GPU and ASIC brute-force attacks economically impossible.\n- pwdlib with Argon2: The modern standard recommended in FastAPI security guidelines, replacing legacy passlib."
      },
      {
        "id": "sec-08-02",
        "title": "JWT Anatomy & Access vs Refresh Token Lifecycle",
        "content": "A JSON Web Token (JWT) comprises three Base64URL-encoded parts separated by periods:\nHEADER.PAYLOAD.SIGNATURE\n1. Header: {\"alg\": \"HS256\", \"typ\": \"JWT\"}\n2. Payload: Claims such as sub (subject/user ID), exp (expiration UTC timestamp), role (permissions).\n3. Signature: HMACSHA256(base64UrlEncode(header) + \".\" + base64UrlEncode(payload), secret_key)\n\nSecurity Rule: A signed JWT is NOT encrypted! Never store passwords, API keys, or credit card numbers in JWT claims.\n\nThe Refresh Token Rotation Pattern:\n- Short-lived Access Token (15-30 minutes): Used in Authorization: Bearer <token> for API requests.\n- Long-lived Refresh Token (7-30 days): Stored in a secure, HttpOnly, SameSite=Strict cookie. When exchanging for a new access token, the old refresh token is invalidated in Redis/DB. If a revoked refresh token is re-submitted, reuse detection invalidates all active sessions for that account immediately."
      }
    ]
  },
  {
    "id": "unit-09",
    "number": "09",
    "title": "Authorization, RBAC & Broken Object-Level Authorization (BOLA)",
    "subtitle": "OWASP API #1 Vulnerability Prevention & Resource Ownership",
    "summary": "Differentiate authentication (identity) from authorization (permissions). Implement Role-Based Access Control (RBAC) and eradicate Broken Object-Level Authorization (BOLA/IDOR) via strict resource ownership verification.",
    "topics": [
      {
        "id": "sec-09-01",
        "title": "Role-Based Access Control (RBAC) Implementation",
        "content": "RBAC restricts operations according to the user's organizational tier:\n- Student: Access own interview rooms, view courses, submit answers.\n- Instructor: Create courses, inspect anonymized analytics.\n- Admin: Platform settings, manage quotas, inspect system telemetry.\n\nFastAPI Role Gatekeeper:\nclass RoleChecker:\n    def __init__(self, allowed_roles: list[str]):\n        self.allowed_roles = allowed_roles\n\n    def __call__(self, user: dict = Depends(get_current_user)):\n        if user.get(\"role\") not in self.allowed_roles:\n            raise HTTPException(\n                status_code=status.HTTP_403_FORBIDDEN,\n                detail=f\"Operation requires one of: {self.allowed_roles}\"\n            )\n        return user\n\nadmin_only = RoleChecker([\"admin\"])"
      },
      {
        "id": "sec-09-02",
        "title": "Eradicating Broken Object-Level Authorization (BOLA / IDOR)",
        "content": "OWASP API Security Top 10 ranks BOLA as the #1 threat.\nThe Vulnerability:\nA malicious user logs in as Student A (ID: 101) and submits GET /api/v1/interviews/500.\nIf the backend checks only that the user is logged in, but fails to check whether interview 500 belongs to user 101, Student A can read Student B's private interview questions and score report!\n\nThe Secure Defense:\nAlways enforce ownership at the database query boundary:\nSELECT * FROM interviews WHERE id = :interview_id AND user_id = :authenticated_user_id;\nIf 0 rows return, respond with 404 Not Found (or 403 Forbidden) so attackers cannot even confirm the existence of arbitrary IDs."
      }
    ]
  },
  {
    "id": "unit-10",
    "number": "10",
    "title": "Rate Limiting & Redis-Backed API Protection",
    "subtitle": "Token Bucket Algorithm, Distributed Quotas & HTTP 429",
    "summary": "Protect your backend and LLM provider credit balance against malicious scraping, denial-of-wallet, and burst spikes. Master the Token Bucket mathematical formulation, Redis atomic Lua scripts, and dual-layer request/token rate limits.",
    "topics": [
      {
        "id": "sec-10-01",
        "title": "Rate Limiting Algorithms: Fixed Window vs Token Bucket",
        "content": "1. Fixed Window Counter:\n- Slices time into fixed intervals (e.g., 10:00 to 10:01).\n- Flaw: Boundary burst attacks (user sends 10 requests at 10:00:59 and 10 requests at 10:01:00 = 20 requests in 2 seconds).\n2. Token Bucket Algorithm (Industry Standard):\n- A bucket with max capacity C continuously accumulates tokens at refill rate r tokens/second.\n- Formula: T_new = min(C, T_old + r * Delta_t).\n- When a request arrives: if T >= 1, consume 1 token and allow; if T < 1, reject with 429 Too Many Requests and Retry-After: ceil((1 - T) / r).\n- Elegantly allows legitimate short bursts while strictly capping sustained rate."
      },
      {
        "id": "sec-10-02",
        "title": "Distributed Rate Limiting via Redis Atomic Lua Scripts",
        "content": "In a multi-worker, multi-container production cluster, local in-memory counters fail because requests hit different servers.\nSolution: A centralized Redis cluster running an atomic Lua script that increments counters and sets TTL in a single atomic roundtrip, preventing race conditions:\n\nlocal current = redis.call('INCR', KEYS[1])\nif current == 1 then\n    redis.call('EXPIRE', KEYS[1], ARGV[1])\nend\nreturn current\n\nAdditionally, for AI backends, implement dual-metering:\n- Request Rate Limit: 10 requests / minute\n- Token Rate Limit: 50,000 input/output tokens / hour."
      }
    ]
  },
  {
    "id": "unit-11",
    "number": "11",
    "title": "API Middleware, CORS & Error Handling Resilience",
    "subtitle": "Cross-Origin Policies, Process Timings & Exponential Backoff",
    "summary": "Master the FastAPI request lifecycle. Configure CORS policies safely, build telemetry timing middleware, craft centralized exception handlers, and design resilient upstream AI retries with exponential backoff and jitter.",
    "topics": [
      {
        "id": "sec-11-01",
        "title": "Cross-Origin Resource Sharing (CORS) Security",
        "content": "When your React frontend is hosted on https://prepspaces.com and the API on https://api.prepspaces.com, the browser's Same-Origin Policy blocks API calls unless CORS headers are explicitly granted:\n\nfrom fastapi.middleware.cors import CORSMiddleware\n\napp.add_middleware(\n    CORSMiddleware,\n    allow_origins=[\"https://prepspaces.com\", \"http://localhost:5173\"],\n    allow_credentials=True,\n    allow_methods=[\"GET\", \"POST\", \"PUT\", \"PATCH\", \"DELETE\"],\n    allow_headers=[\"Authorization\", \"Content-Type\", \"X-Request-ID\"],\n    max_age=86400\n)\n\nSecurity Alert: Never set allow_origins=[\"*\"] when allow_credentials=True. Browsers will reject credentialed cookies and tokens under wildcard origins."
      },
      {
        "id": "sec-11-02",
        "title": "Upstream Resilience: Exponential Backoff & Jitter",
        "content": "When calling external AI APIs (Gemini, OpenAI, Groq), transient 503 or 429 errors will occur.\nExponential Backoff with Full Jitter Formula:\nD_n = random(0, min(D_max, D_0 * 2^n))\n- D_0: Base initial backoff (e.g., 0.5s)\n- n: Retry iteration count\n- D_max: Ceiling delay cap (e.g., 10.0s)\nJitter distributes retry bursts across time, preventing 'thundering herds' that crash recovering upstream services."
      }
    ]
  },
  {
    "id": "unit-12",
    "number": "12",
    "title": "Production Architecture & ASGI Deployment",
    "subtitle": "Uvicorn Multi-Workers, Decoupled Inference & Production Readiness",
    "summary": "Explore the complete production deployment blueprint. Understand Uvicorn process clustering behind reverse proxies, why heavy LLM inference must be physically decoupled from API servers, and implement standardized /health and /ready probes.",
    "topics": [
      {
        "id": "sec-12-01",
        "title": "Uvicorn Process Clustering & The Decoupled Inference Rule",
        "content": "In production, Uvicorn runs as multiple worker processes managed by systemd, Docker, or Kubernetes:\nuvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 4 --proxy-headers\n\nCRITICAL ARCHITECTURAL RULE:\nNever load a multi-gigabyte foundation model (e.g., 14GB 7B LLM) directly inside the FastAPI application process!\nWhy? If Uvicorn spawns 4 workers, your server will attempt to load the 14GB weights 4 times, instantly triggering an OOM (Out Of Memory) crash!\n\nThe Production Pattern:\n- FastAPI API Layer: Lightweight, stateless, asynchronous HTTP/SSE orchestration server consuming ~200MB RAM.\n- Model Inference Layer: Dedicated cluster (vLLM, Ollama, TensorRT-LLM) running on GPU instances, accessed by FastAPI via asynchronous HTTP or gRPC."
      },
      {
        "id": "sec-12-02",
        "title": "Observability, Health Probes & Readiness Checks",
        "content": "Enterprise orchestrators (Kubernetes, AWS ECS) require separate probes:\n1. Liveness Probe (/health): Confirms the process event loop is alive. If this fails, the container is restarted.\n2. Readiness Probe (/ready): Verifies that dependencies (PostgreSQL connection pool, Redis cache, downstream vLLM engine) are reachable and accepting queries. If this fails, traffic is temporarily diverted until the service recovers."
      }
    ]
  }
];

export const practicalLabs = [
  {
    "id": "lab-01",
    "number": "01",
    "title": "Course Management RESTful API with FastAPI",
    "duration": "45 mins",
    "difficulty": "Beginner",
    "summary": "Build a complete CRUD REST service with FastAPI handling courses, topics, and difficulty filters using standard HTTP methods and status codes.",
    "code": "from fastapi import FastAPI, HTTPException, status\nfrom pydantic import BaseModel, Field\nfrom typing import List, Optional\nimport uuid\n\napp = FastAPI(title=\"PrepSpaces Course Service\", version=\"1.0.0\")\n\nclass CourseCreate(BaseModel):\n    title: str = Field(min_length=3, max_length=120)\n    category: str = Field(min_length=2, max_length=50)\n    level: str = Field(pattern=\"^(beginner|intermediate|advanced)$\")\n    modules_count: int = Field(gt=0, le=50)\n\nclass CourseResponse(CourseCreate):\n    id: str\n\ncourses_db: dict[str, dict] = {}\n\n@app.post(\"/api/v1/courses\", response_model=CourseResponse, status_code=status.HTTP_201_CREATED)\nasync def create_course(payload: CourseCreate):\n    course_id = str(uuid.uuid4())[:8]\n    record = {\"id\": course_id, **payload.model_dump()}\n    courses_db[course_id] = record\n    return record\n\n@app.get(\"/api/v1/courses\", response_model=List[CourseResponse])\nasync def list_courses(category: Optional[str] = None):\n    if category:\n        return [c for c in courses_db.values() if c[\"category\"].lower() == category.lower()]\n    return list(courses_db.values())\n\n@app.get(\"/api/v1/courses/{course_id}\", response_model=CourseResponse)\nasync def get_course(course_id: str):\n    if course_id not in courses_db:\n        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=\"Course not found\")\n    return courses_db[course_id]\n\n@app.delete(\"/api/v1/courses/{course_id}\", status_code=status.HTTP_204_NO_CONTENT)\nasync def delete_course(course_id: str):\n    if course_id not in courses_db:\n        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=\"Course not found\")\n    del courses_db[course_id]\n    return None"
  },
  {
    "id": "lab-02",
    "number": "02",
    "title": "Pydantic V2 Request Validation & Schema Sanitization",
    "duration": "45 mins",
    "difficulty": "Intermediate",
    "summary": "Implement deep schema validation, email syntax verification, field constraints, and custom sanitizers preventing prompt injections and malformed data.",
    "code": "from fastapi import FastAPI\nfrom pydantic import BaseModel, EmailStr, Field, field_validator\nimport re\n\napp = FastAPI(title=\"Candidate Registration & Validation Service\")\n\nclass CandidateRegistration(BaseModel):\n    full_name: str = Field(min_length=2, max_length=70)\n    email: EmailStr\n    years_experience: float = Field(ge=0.0, le=45.0)\n    primary_skills: list[str] = Field(min_length=1, max_length=20)\n    raw_prompt_context: str = Field(max_length=1500)\n\n    @field_validator(\"primary_skills\")\n    @classmethod\n    def clean_skills(cls, skills: list[str]) -> list[str]:\n        cleaned = [s.strip().capitalize() for s in skills if s.strip()]\n        if not cleaned:\n            raise ValueError(\"Must provide at least one valid skill name\")\n        return list(set(cleaned))\n\n    @field_validator(\"raw_prompt_context\")\n    @classmethod\n    def strip_injection_delimiters(cls, text: str) -> str:\n        # Sanitize common prompt injection system boundary attacks\n        sanitized = re.sub(r\"(?i)(ignore previous instructions|system prompt|admin override)\", \"[BLOCKED_INSTRUCTION]\", text)\n        return sanitized.strip()\n\n@app.post(\"/api/v1/candidates/validate\")\nasync def validate_candidate(candidate: CandidateRegistration):\n    return {\n        \"status\": \"valid\",\n        \"candidate\": candidate.model_dump(exclude_unset=True)\n    }"
  },
  {
    "id": "lab-03",
    "number": "03",
    "title": "Asynchronous vs Synchronous Concurrency Benchmark",
    "duration": "50 mins",
    "difficulty": "Advanced",
    "summary": "Simulate high concurrent user traffic against blocking synchronous vs non-blocking asynchronous endpoints, recording real-world latency profiles.",
    "code": "from fastapi import FastAPI\nimport asyncio\nimport time\nimport httpx\n\napp = FastAPI(title=\"Concurrency Benchmark Service\")\n\n# BAD: Blocking synchronous I/O\n@app.get(\"/api/benchmark/sync-wait\")\ndef sync_endpoint():\n    time.sleep(1.0) # Blocks the thread!\n    return {\"mode\": \"sync\", \"elapsed\": 1.0}\n\n# GOOD: Non-blocking asynchronous I/O\n@app.get(\"/api/benchmark/async-wait\")\nasync def async_endpoint():\n    await asyncio.sleep(1.0) # Yields to event loop!\n    return {\"mode\": \"async\", \"elapsed\": 1.0}\n\n# Async AI API Client caller\n@app.get(\"/api/ai/mock-fetch\")\nasync def mock_ai_fetch():\n    start = time.perf_counter()\n    async with httpx.AsyncClient(timeout=10.0) as client:\n        # Simulate non-blocking upstream LLM call\n        await asyncio.sleep(0.4)\n    duration = time.perf_counter() - start\n    return {\"upstream_latency_sec\": round(duration, 3)}"
  },
  {
    "id": "lab-04",
    "number": "04",
    "title": "JWT Authentication & Argon2id Security Pipeline",
    "duration": "60 mins",
    "difficulty": "Advanced",
    "summary": "Build a complete authentication pipeline utilizing Argon2 password hashing, JWT token issuance with PyJWT, and an OAuth2PasswordBearer dependency.",
    "code": "from fastapi import FastAPI, Depends, HTTPException, status\nfrom fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm\nfrom datetime import datetime, timedelta, timezone\nimport jwt\nfrom pwdlib import PasswordHash\n\napp = FastAPI(title=\"JWT Auth Service\")\n\nSECRET_KEY = \"SUPER_SECRET_ENTROPY_KEY_CHANGE_IN_PRODUCTION\"\nALGORITHM = \"HS256\"\nACCESS_TOKEN_MINUTES = 30\n\npassword_hasher = PasswordHash.recommended()\noauth2_scheme = OAuth2PasswordBearer(tokenUrl=\"/api/v1/auth/token\")\n\nusers_db = {\n    \"student@prepspaces.com\": {\n        \"id\": \"usr_101\",\n        \"email\": \"student@prepspaces.com\",\n        \"hashed_password\": password_hasher.hash(\"SecurePass2026!\"),\n        \"role\": \"student\"\n    }\n}\n\ndef create_jwt_token(data: dict, expires_delta: timedelta) -> str:\n    payload = data.copy()\n    expire = datetime.now(timezone.utc) + expires_delta\n    payload.update({\"exp\": expire, \"iss\": \"prepspaces-auth\"})\n    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)\n\n@app.post(\"/api/v1/auth/token\")\nasync def login(form_data: OAuth2PasswordRequestForm = Depends()):\n    user = users_db.get(form_data.username)\n    if not user or not password_hasher.verify(form_data.password, user[\"hashed_password\"]):\n        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=\"Invalid email or password\")\n    \n    token = create_jwt_token({\"sub\": user[\"id\"], \"role\": user[\"role\"]}, timedelta(minutes=ACCESS_TOKEN_MINUTES))\n    return {\"access_token\": token, \"token_type\": \"bearer\"}\n\nasync def get_current_user(token: str = Depends(oauth2_scheme)):\n    try:\n        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM], issuer=\"prepspaces-auth\")\n        return {\"user_id\": payload[\"sub\"], \"role\": payload[\"role\"]}\n    except jwt.PyJWTError:\n        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=\"Could not validate credentials\")\n\n@app.get(\"/api/v1/users/me\")\nasync def read_current_user(user: dict = Depends(get_current_user)):\n    return {\"authenticated_user\": user}"
  },
  {
    "id": "lab-05",
    "number": "05",
    "title": "Server-Sent Events (SSE) Progressive AI Token Streaming",
    "duration": "55 mins",
    "difficulty": "Advanced",
    "summary": "Construct a real-time SSE streaming endpoint returning token chunks incrementally with cache-control headers, cancellation handles, and JSON framing.",
    "code": "from fastapi import FastAPI, Request\nfrom fastapi.responses import StreamingResponse\nimport asyncio\nimport json\n\napp = FastAPI(title=\"SSE AI Streaming Service\")\n\nasync def mock_llm_token_generator(prompt: str):\n    response_tokens = [\n        \"Java\", \" virtual\", \" threads\", \" (Project\", \" Loom)\", \" significantly\",\n        \" reduce\", \" the\", \" memory\", \" overhead\", \" of\", \" concurrent\", \" backend\",\n        \" applications\", \" by\", \" mounting\", \" thousands\", \" of\", \" lightweight\",\n        \" user-mode\", \" tasks\", \" onto\", \" a\", \" pool\", \" of\", \" carrier\", \" threads.\"\n    ]\n    for token in response_tokens:\n        event_payload = json.dumps({\"token\": token, \"timestamp\": asyncio.get_event_loop().time()})\n        yield f\"event: token\\ndata: {event_payload}\\n\\n\"\n        await asyncio.sleep(0.04) # Simulate 40ms TPOT\n    \n    yield \"event: done\\ndata: {}\\n\\n\"\n\n@app.post(\"/api/v1/ai/stream-interview-feedback\")\nasync def stream_feedback(request: Request):\n    body = await request.json()\n    prompt = body.get(\"prompt\", \"\")\n\n    return StreamingResponse(\n        mock_llm_token_generator(prompt),\n        media_type=\"text/event-stream\",\n        headers={\n            \"Cache-Control\": \"no-cache\",\n            \"Connection\": \"keep-alive\",\n            \"X-Accel-Buffering\": \"no\"\n        }\n    )"
  }
];

export const capstoneProject = {
  "title": "Production-Grade AI Interview Platform Backend",
  "duration": "2 - 3 Weeks",
  "overview": "Design and implement a multi-tenant, asynchronous backend powering the PrepSpaces AI Interview System. The system orchestrates candidate auth, interview scheduling, real-time SSE token streaming from inference engines, Redis-backed rate limiting, object-level authorization, and asynchronous resume analysis via Celery.",
  "architectureMilestones": [
    {
      "phase": "Phase 1: Domain Schemas & Async Database Layer",
      "tasks": [
        "Design PostgreSQL relational tables for Users, Interviews, Questions, Evaluations, and AuditLogs.",
        "Implement asynchronous SQLAlchemy 2.0 ORM models and Alembic database migration scripts.",
        "Construct Pydantic V2 schemas with comprehensive field validation, sanitizers, and custom regex rules."
      ]
    },
    {
      "phase": "Phase 2: Authentication, RBAC & Object-Level Authorization",
      "tasks": [
        "Implement Argon2id password hashing and OAuth2 JWT token issuance.",
        "Implement refresh token rotation in Redis with token family revocation upon reuse detection.",
        "Enforce strict Object-Level Authorization preventing Broken Object-Level Authorization (BOLA/IDOR) on all interview endpoints."
      ]
    },
    {
      "phase": "Phase 3: Real-Time AI Streaming & Model Gateway",
      "tasks": [
        "Create an asynchronous AI Gateway service abstracting external LLM APIs (Gemini, Groq, local vLLM).",
        "Expose POST /api/v1/ai/interview/stream utilizing FastAPI StreamingResponse and SSE format.",
        "Implement exponential backoff with full jitter and circuit breakers for upstream provider resilience."
      ]
    },
    {
      "phase": "Phase 4: Distributed Rate Limiting & Background Task Fleet",
      "tasks": [
        "Deploy Redis-backed atomic Token Bucket rate limiter capping requests and tokens per minute.",
        "Configure Celery worker fleet to process asynchronous PDF resume uploads and competency extractions.",
        "Expose /health and /ready probes, configure Uvicorn ASGI clustering, and containerize with Docker."
      ]
    }
  ],
  "deliverables": [
    "Full FastAPI asynchronous codebase with modular APIRouter hierarchy.",
    "Comprehensive Swagger/OpenAPI documentation with zero validation gaps.",
    "Redis Lua atomic rate-limiting scripts with HTTP 429 Retry-After compliance.",
    "Celery task worker service for asynchronous resume parsing.",
    "Automated pytest test suite with 90%+ code coverage for auth and API routes."
  ]
};

export const codingAssignments = [
  {
    "id": "task-01",
    "title": "1. Basic FastAPI Route & Health Check",
    "difficulty": "Easy",
    "instructions": "Write a FastAPI endpoint at GET /health returning status: ok and timestamp.",
    "starterCode": "from fastapi import FastAPI\nfrom datetime import datetime, timezone\n\napp = FastAPI()\n\n@app.get(\"/health\")\nasync def health_check():\n    # Return status and ISO UTC timestamp\n    pass"
  },
  {
    "id": "task-02",
    "title": "2. Pydantic Request Model with Numeric Boundaries",
    "difficulty": "Easy",
    "instructions": "Define an InterviewConfig Pydantic model with difficulty (str) and question_count between 1 and 10.",
    "starterCode": "from pydantic import BaseModel, Field\n\nclass InterviewConfig(BaseModel):\n    difficulty: str\n    question_count: int = Field(ge=1, le=10)"
  },
  {
    "id": "task-03",
    "title": "3. Path Parameter Validation with Regex",
    "difficulty": "Easy",
    "instructions": "Create an endpoint GET /users/{user_id} where user_id must match uuid pattern.",
    "starterCode": "from fastapi import FastAPI, Path\n\napp = FastAPI()\n\n@app.get(\"/users/{user_id}\")\nasync def get_user(user_id: str = Path(pattern=\"^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$\")):\n    return {\"user_id\": user_id}"
  },
  {
    "id": "task-04",
    "title": "4. Async HTTP Request with httpx",
    "difficulty": "Medium",
    "instructions": "Write an async function that queries an external model server with a 5-second timeout.",
    "starterCode": "import httpx\n\nasync def query_model_server(url: str, prompt: str) -> dict:\n    async with httpx.AsyncClient(timeout=5.0) as client:\n        # Send POST request and return JSON\n        pass"
  },
  {
    "id": "task-05",
    "title": "5. Custom Pydantic Field Validator",
    "difficulty": "Medium",
    "instructions": "Create a validator on a prompt field that rejects prompts containing 'DAN' or 'jailbreak'.",
    "starterCode": "from pydantic import BaseModel, field_validator\n\nclass PromptRequest(BaseModel):\n    prompt: str\n\n    @field_validator(\"prompt\")\n    @classmethod\n    def prevent_jailbreaks(cls, v: str) -> str:\n        # Validate and return or raise ValueError\n        pass"
  },
  {
    "id": "task-06",
    "title": "6. FastAPI Dependency Injection for Database Session",
    "difficulty": "Medium",
    "instructions": "Create a mock get_db dependency yielding a session string and closing it in a finally block.",
    "starterCode": "from fastapi import Depends, FastAPI\n\napp = FastAPI()\n\nasync def get_db():\n    db = \"mock_db_session\"\n    try:\n        yield db\n    finally:\n        print(\"Closing DB session\")"
  },
  {
    "id": "task-07",
    "title": "7. FastAPI BackgroundTasks File Logging",
    "difficulty": "Medium",
    "instructions": "Use BackgroundTasks to log a user interview attempt after responding with HTTP 200.",
    "starterCode": "from fastapi import FastAPI, BackgroundTasks\n\napp = FastAPI()\n\ndef log_attempt(user_id: str, topic: str):\n    # Log to file or memory\n    pass\n\n@app.post(\"/start-interview\")\nasync def start_interview(user_id: str, topic: str, bg: BackgroundTasks):\n    pass"
  },
  {
    "id": "task-08",
    "title": "8. SSE Formatted Event Generator",
    "difficulty": "Medium",
    "instructions": "Create an async generator yielding Server-Sent Events formatted as 'event: token\\ndata: {...}\\n\\n'.",
    "starterCode": "import json\nimport asyncio\n\nasync def sse_token_stream(tokens: list[str]):\n    for t in tokens:\n        # Yield formatted SSE string\n        pass"
  },
  {
    "id": "task-09",
    "title": "9. StreamingResponse Integration",
    "difficulty": "Medium",
    "instructions": "Wrap an async generator in FastAPI's StreamingResponse with media_type='text/event-stream'.",
    "starterCode": "from fastapi import FastAPI\nfrom fastapi.responses import StreamingResponse\n\napp = FastAPI()\n\n@app.get(\"/stream\")\nasync def stream_tokens():\n    pass"
  },
  {
    "id": "task-10",
    "title": "10. Argon2id Password Hashing Function",
    "difficulty": "Medium",
    "instructions": "Implement hash_password and verify_password using pwdlib with recommended Argon2.",
    "starterCode": "from pwdlib import PasswordHash\n\nhasher = PasswordHash.recommended()\n\ndef hash_pw(pw: str) -> str:\n    pass\n\ndef verify_pw(pw: str, hashed: str) -> bool:\n    pass"
  },
  {
    "id": "task-11",
    "title": "11. JWT Token Creator with Expiration",
    "difficulty": "Medium",
    "instructions": "Generate a JWT token containing sub, role, and exp in UTC using PyJWT.",
    "starterCode": "import jwt\nfrom datetime import datetime, timedelta, timezone\n\ndef generate_jwt(user_id: str, role: str, secret: str) -> str:\n    pass"
  },
  {
    "id": "task-12",
    "title": "12. JWT Token Decoding & Expiration Guard",
    "difficulty": "Medium",
    "instructions": "Decode a JWT token, verify its signature, and catch ExpiredSignatureError and InvalidTokenError.",
    "starterCode": "import jwt\nfrom fastapi import HTTPException, status\n\ndef decode_token(token: str, secret: str) -> dict:\n    pass"
  },
  {
    "id": "task-13",
    "title": "13. Role-Based Access Control (RBAC) Guard",
    "difficulty": "Hard",
    "instructions": "Build a factory function require_role(roles) that acts as a FastAPI dependency.",
    "starterCode": "from fastapi import Depends, HTTPException, status\n\ndef require_roles(allowed_roles: list[str]):\n    def checker(user = Depends(lambda: {\"role\": \"student\"})):\n        pass\n    return checker"
  },
  {
    "id": "task-14",
    "title": "14. Object-Level Ownership Validator (BOLA Defense)",
    "difficulty": "Hard",
    "instructions": "Verify that the authenticated user's ID matches the interview owner's ID or raise HTTP 403.",
    "starterCode": "from fastapi import HTTPException, status\n\ndef verify_ownership(resource_owner_id: str, current_user_id: str):\n    pass"
  },
  {
    "id": "task-15",
    "title": "15. In-Memory Sliding Window Rate Limiter",
    "difficulty": "Hard",
    "instructions": "Implement an HTTP middleware rejecting requests exceeding 5 calls per 60 seconds per IP.",
    "starterCode": "from fastapi import FastAPI, Request, HTTPException\nimport time\nfrom collections import defaultdict, deque\n\napp = FastAPI()\nreq_history = defaultdict(deque)\n\n@app.middleware(\"http\")\nasync def rate_limiter(request: Request, call_next):\n    pass"
  },
  {
    "id": "task-16",
    "title": "16. Redis Token Bucket Atomic Lua Script",
    "difficulty": "Hard",
    "instructions": "Write the Lua script string to atomically update token count and calculate if a request is allowed.",
    "starterCode": "TOKEN_BUCKET_LUA = \"\"\"\n-- KEYS[1]: bucket key\n-- ARGV[1]: max capacity\n-- ARGV[2]: refill rate per second\n-- ARGV[3]: current timestamp\n-- Return 1 if allowed, 0 if rejected\n\"\"\""
  },
  {
    "id": "task-17",
    "title": "17. Exponential Backoff with Jitter Calculator",
    "difficulty": "Hard",
    "instructions": "Calculate retry delay given attempt n, base delay D0, max delay Dmax, and random jitter.",
    "starterCode": "import random\n\ndef get_backoff_delay(attempt: int, d0: float = 0.5, d_max: float = 10.0) -> float:\n    # Full jitter formula: random(0, min(d_max, d0 * 2^attempt))\n    pass"
  },
  {
    "id": "task-18",
    "title": "18. Lifespan Resource Management with Async Context Manager",
    "difficulty": "Hard",
    "instructions": "Implement a lifespan context manager initializing an async HTTP client and closing it on exit.",
    "starterCode": "from contextlib import asynccontextmanager\nfrom fastapi import FastAPI\nimport httpx\n\n@asynccontextmanager\nasync def lifespan(app: FastAPI):\n    # Setup client\n    yield\n    # Cleanup client\n    pass\n\napp = FastAPI(lifespan=lifespan)"
  }
];

export const theoryQuestions = [
  {
    "id": "theory-01",
    "question": "What is the architectural difference between synchronous WSGI and asynchronous ASGI?",
    "answer": "WSGI (Web Server Gateway Interface) is fundamentally synchronous: one worker thread handles one request at a time and blocks during I/O operations (database queries, network calls). ASGI (Asynchronous Server Gateway Interface) is asynchronous: it runs on an event loop allowing a single worker thread to handle thousands of concurrent requests by suspending coroutines during non-blocking I/O operations and resuming them when data arrives. ASGI natively supports WebSockets and HTTP streaming."
  },
  {
    "id": "theory-02",
    "question": "Why should synchronous blocking operations never be executed inside an async def FastAPI route?",
    "answer": "In FastAPI, async def routes execute directly on the primary event loop thread. If a route calls a blocking operation (such as time.sleep(), synchronous database calls, or CPU-heavy parsing), the entire thread freezes. The event loop cannot switch to any other concurrent request, severely degrading application throughput and freezing all users. If synchronous calls are required, use standard def routes (which FastAPI offloads to an external thread pool) or use asyncio.to_thread()."
  },
  {
    "id": "theory-03",
    "question": "What is the mathematical formulation of the Token Bucket rate-limiting algorithm?",
    "answer": "The Token Bucket algorithm models a bucket of maximum capacity C refilled at rate r tokens/sec. When a request arrives at time t after elapsed time Delta_t = t - t_last, the available tokens are: T_new = min(C, T_old + r * Delta_t). If T_new >= 1, the request is permitted and T is decremented by 1. If T_new < 1, the request is rejected with HTTP 429 and Retry-After calculated as ceil((1 - T_new) / r)."
  },
  {
    "id": "theory-04",
    "question": "How does Server-Sent Events (SSE) differ from WebSockets in communication architecture?",
    "answer": "SSE operates over standard HTTP/1.1 or HTTP/2, providing a persistent, unidirectional server-to-client stream using the text/event-stream MIME type. It features automatic browser reconnection, works seamlessly through firewalls and HTTP reverse proxies, and is ideal for LLM token streaming. WebSockets require an initial HTTP handshake to upgrade to a persistent, full-duplex TCP socket, supporting bidirectional communication at the cost of higher protocol complexity and manual connection state management."
  },
  {
    "id": "theory-05",
    "question": "Why is Argon2id preferred over bcrypt, PBKDF2, or SHA-256 for password hashing?",
    "answer": "Argon2id (winner of the Password Hashing Competition) is designed to be both time-hard and memory-hard. Fast algorithms like SHA-256 can be computed billions of times per second on GPUs. While bcrypt and PBKDF2 are compute-hard, they consume minimal memory. Argon2id requires configurable amounts of RAM (e.g., 64MB per hash), rendering mass parallel attacks on GPUs and dedicated ASIC rigs economically unfeasible."
  },
  {
    "id": "theory-06",
    "question": "Explain the three cryptographic segments of a JSON Web Token (JWT).",
    "answer": "A JWT consists of Header, Payload, and Signature separated by dots. 1) Header: JSON specifying algorithm (alg, e.g., HS256) and token type (typ: JWT). 2) Payload: JSON containing standardized claims (sub for subject/user ID, exp for UTC expiration, iat for issued-at) and custom authorization claims. 3) Signature: Cryptographic hash produced by hashing Base64URL(Header) + '.' + Base64URL(Payload) with a server secret or private key. Crucially, payload data is Base64-encoded, not encrypted."
  },
  {
    "id": "theory-07",
    "question": "What is Broken Object-Level Authorization (BOLA / IDOR) and how must it be prevented in API code?",
    "answer": "BOLA occurs when an API endpoint takes an object identifier (e.g., GET /api/v1/interviews/{id}) and retrieves the resource without verifying that the authenticated caller owns or has explicit permission to access that specific object. It is prevented by enforcing ownership at the database query boundary: SELECT * FROM interviews WHERE id = :id AND user_id = :current_user_id; or verifying resource ownership in a dependency before returning data."
  },
  {
    "id": "theory-08",
    "question": "Why must large model weights never be loaded directly inside multiple Uvicorn worker processes?",
    "answer": "Uvicorn multi-worker mode spawns multiple independent OS processes. If each process executes code that loads a 14GB LLM into memory, 4 workers will attempt to allocate 4 * 14GB = 56GB of VRAM or RAM, instantly causing an Out Of Memory (OOM) crash. In production, model inference must be decoupled into a dedicated inference cluster (vLLM, Ollama), while FastAPI workers remain lightweight stateless HTTP orchestrators."
  },
  {
    "id": "theory-09",
    "question": "What is the difference between an in-process FastAPI BackgroundTask and a Celery worker queue?",
    "answer": "BackgroundTasks runs in the same Python process on the same machine after returning an HTTP response. If the web server process restarts, crashes, or scales down, in-flight tasks are permanently lost. Celery distributes tasks via a durable message broker (Redis/RabbitMQ) to independent worker fleets across multiple machines, supporting task retries with backoff, failure dead-letter queues, task prioritization, and true distributed horizontal scaling."
  },
  {
    "id": "theory-10",
    "question": "Why is exponential backoff with full jitter critical when invoking upstream LLM APIs?",
    "answer": "When an upstream LLM API experiences transient overload or returns 429/503 errors, standard exponential backoff causes clients that sent requests at the same time to retry at the exact same synchronized intervals (2s, 4s, 8s). This creates recurring thundering herds that repeatedly knock down the recovering service. Adding full jitter (D = random(0, min(D_max, D_0 * 2^n))) decorrelates retry timings, smoothing traffic load."
  },
  {
    "id": "theory-11",
    "question": "Explain the purpose of FastAPI's lifespan context manager compared to legacy startup/shutdown events.",
    "answer": "Legacy @app.on_event('startup') and @app.on_event('shutdown') handlers were disjointed and deprecated. The modern lifespan context manager (@asynccontextmanager async def lifespan(app)) combines setup and teardown into a single structured generator. Code before yield initializes database connection pools and HTTP clients; code after yield gracefully drains connections and flushes buffers during application shutdown."
  },
  {
    "id": "theory-12",
    "question": "What is the role of an Idempotency-Key header in mutating POST requests?",
    "answer": "Network timeouts can cause clients to retry a POST request (e.g., initiating an interview or processing a payment) even if the server successfully processed the initial attempt. By including a unique Idempotency-Key: <uuid>, the backend records the request key in Redis. If a duplicate key arrives within a window (e.g., 24 hours), the server returns the cached original response without re-executing the mutating transaction."
  },
  {
    "id": "theory-13",
    "question": "How do Pydantic V2 core validators differ from standard Python type checks?",
    "answer": "Python type hints are purely static annotations for IDEs and linters; Python's runtime does not enforce them. Pydantic V2 (implemented in Rust via pydantic-core) performs runtime parsing, type coercion, field-level constraint enforcement (gt, le, pattern), custom validation logic, and sanitization, automatically generating OpenAPI schemas and structured JSON error responses."
  },
  {
    "id": "theory-14",
    "question": "Why is Redis used for rate limiting across multi-instance API deployments?",
    "answer": "In modern cloud architectures, requests are load-balanced across multiple independent FastAPI containers. In-memory counters are local to each container; a user could bypass a 10 req/min limit by sending requests across 5 containers (effectively getting 50 req/min). Redis provides an in-memory, centralized data store where atomic operations (via Lua scripts or INCR/EXPIRE) enforce a single global quota across all servers."
  },
  {
    "id": "theory-15",
    "question": "What is the security implication of setting allow_origins=['*'] with allow_credentials=True in CORS?",
    "answer": "W3C CORS specifications explicitly prohibit Access-Control-Allow-Origin: * combined with Access-Control-Allow-Credentials: true. Browsers will reject credentialed responses. More importantly, allowing any origin to submit credentialed requests would allow malicious websites to make authenticated requests using the victim's cookies and sessions, completely violating cross-origin boundaries."
  },
  {
    "id": "theory-16",
    "question": "How does the HTTP 202 Accepted status code enable asynchronous API design?",
    "answer": "HTTP 202 Accepted communicates that the request has been validated and queued for background processing, but execution has not finished. The response includes a location or polling URL (Location: /api/v1/jobs/{id}). This allows the client to free its connection immediately rather than keeping an HTTP socket open for minutes during heavy batch processing."
  },
  {
    "id": "theory-17",
    "question": "What is the difference between path parameters, query parameters, and request body?",
    "answer": "Path parameters identify a specific resource in the URL hierarchy (/courses/{id}). Query parameters filter, sort, or paginate that resource collection (?category=AI&page=2). The request body carries the complex, structured data payload sent via POST, PUT, or PATCH (e.g., JSON representation of an interview configuration)."
  },
  {
    "id": "theory-18",
    "question": "Why should refresh tokens be rotated upon each use, and what is reuse detection?",
    "answer": "When a client exchanges a refresh token for a new access token, the server should invalidate the used refresh token and issue a new one. If an attacker and a legitimate client both attempt to use the same old refresh token, the server detects token reuse, recognizes that a token compromise has occurred, and immediately revokes the entire token family, forcing a re-login."
  },
  {
    "id": "theory-19",
    "question": "What is the purpose of HTTP headers 'X-Accel-Buffering: no' and 'Cache-Control: no-cache' in SSE?",
    "answer": "Cache-Control: no-cache ensures intermediate proxies and browser caches never store transient event streams. X-Accel-Buffering: no specifically instructs reverse proxies (like Nginx) to disable proxy buffering, which would otherwise hold chunks until a buffer fills (e.g. 4KB), ruining the progressive real-time delivery of single tokens."
  },
  {
    "id": "theory-20",
    "question": "How does FastAPI's Dependency Injection system improve automated testing?",
    "answer": "FastAPI maintains an app.dependency_overrides dictionary. During unit or integration testing, tests can replace expensive or external dependencies (like live database connections, Redis clients, or paid LLM API callers) with lightweight in-memory mocks without altering the production application code."
  },
  {
    "id": "theory-21",
    "question": "What is the difference between concurrency and parallelism?",
    "answer": "Concurrency is about dealing with lots of things at once: structuring a program to make progress on multiple tasks by interleaving execution (e.g., one thread waiting on network I/O while another handles a request). Parallelism is about doing lots of things at once: running multiple computations simultaneously on separate physical CPU cores or GPUs."
  },
  {
    "id": "theory-22",
    "question": "Why should database queries enforce parameterized SQL instead of string interpolation?",
    "answer": "String interpolation allows attackers to inject malicious SQL syntax that alters the query logic (SQL Injection). Parameterized queries separate the SQL code template from user data; the database driver treats parameter inputs strictly as literal values, rendering SQL injection impossible."
  },
  {
    "id": "theory-23",
    "question": "What is the purpose of the HTTP 422 Unprocessable Content status code in FastAPI?",
    "answer": "FastAPI returns HTTP 422 whenever an incoming request's body, query, or path parameters violate Pydantic validation rules. The response body contains structured details pinpointing the exact field, invalid value, and human-readable error reason."
  },
  {
    "id": "theory-24",
    "question": "How do connection pools optimize database performance in asynchronous web servers?",
    "answer": "Establishing a TCP connection and performing SSL handshakes and authentication with PostgreSQL is expensive (10-50ms). A connection pool maintains an active pool of pre-established database connections. Asynchronous coroutines check out a connection, execute their query, and return it to the pool, eliminating connection setup overhead."
  },
  {
    "id": "theory-25",
    "question": "What is the difference between /health (liveness) and /ready (readiness) probes?",
    "answer": "Liveness probes (/health) check whether the application process is running and its event loop responsive; if it fails, the container orchestrator restarts the pod. Readiness probes (/ready) verify that downstream dependencies (PostgreSQL, Redis, AI model gateways) are reachable; if it fails, orchestrators stop routing user traffic to the instance without restarting it."
  },
  {
    "id": "theory-26",
    "question": "Explain the difference between authentication and authorization.",
    "answer": "Authentication answers 'Who are you?' (verifying identity via password, JWT, or OAuth2). Authorization answers 'What are you allowed to do?' (evaluating whether the authenticated user has permission to read, create, or delete a specific resource)."
  },
  {
    "id": "theory-27",
    "question": "Why are dual request and token rate limits necessary for GenAI APIs?",
    "answer": "A client could send only 5 requests per minute (passing a standard request rate limit), but each prompt could contain 100,000 tokens of context, consuming massive GPU compute and racking up hundreds of dollars in API bills. Dual limits cap both requests per minute and total token throughput per hour."
  },
  {
    "id": "theory-28",
    "question": "What is mass assignment vulnerability and how does Pydantic protect against it?",
    "answer": "Mass assignment occurs when client-submitted JSON is mapped directly to a database entity, allowing an attacker to submit role: admin or credits: 9999. Pydantic prevents this by using dedicated input schemas that only include user-editable fields, ignoring or rejecting unauthorized administrative attributes."
  },
  {
    "id": "theory-29",
    "question": "How does the Starlette Request timing middleware measure execution duration?",
    "answer": "Middleware intercepts incoming requests before route execution, records a high-resolution timestamp (start = time.perf_counter()), calls response = await call_next(request), and calculates duration upon route return, appending an X-Process-Time header to the HTTP response."
  },
  {
    "id": "theory-30",
    "question": "How do you design a high-throughput backend supporting 1,000 concurrent AI users?",
    "answer": "1) Deploy multiple stateless FastAPI containers behind a reverse proxy (Nginx or Cloudflare). 2) Use non-blocking async I/O throughout (asyncpg, httpx). 3) Centralize rate limiting and session tokens in Redis. 4) Use Server-Sent Events (SSE) for progressive token streaming. 5) Decouple heavy model inference to a dedicated vLLM cluster. 6) Offload PDF and report parsing to Celery workers. 7) Monitor TTFT, TPOT, and error rates with Prometheus."
  }
];

export const quizQuestions = [
  {
    "id": "quiz-01",
    "question": "What is the core difference between synchronous WSGI and asynchronous ASGI frameworks?",
    "options": [
      "WSGI supports WebSockets while ASGI only supports static HTML",
      "ASGI uses an event loop allowing a single worker thread to handle concurrent I/O operations non-blockingly",
      "WSGI runs on GPUs while ASGI runs on CPUs",
      "ASGI compiles Python code directly to C++ binaries"
    ],
    "correctIndex": 1,
    "explanation": "ASGI is an asynchronous server gateway interface built for non-blocking event loops, enabling cooperative concurrency, streaming, and WebSockets."
  },
  {
    "id": "quiz-02",
    "question": "What occurs if you call 'time.sleep(5)' inside an async def FastAPI endpoint?",
    "options": [
      "FastAPI automatically offloads the sleep to an external thread",
      "The entire single-threaded event loop freezes, blocking all concurrent requests for 5 seconds",
      "The sleep is ignored by the Python runtime",
      "Only the current HTTP connection is paused without affecting others"
    ],
    "correctIndex": 1,
    "explanation": "In an async def route, synchronous blocking functions block the event loop thread, stopping all other concurrent coroutines from progressing."
  },
  {
    "id": "quiz-03",
    "question": "Which HTTP status code is standard for asynchronous background jobs accepted for later processing?",
    "options": [
      "200 OK",
      "201 Created",
      "202 Accepted",
      "204 No Content"
    ],
    "correctIndex": 2,
    "explanation": "HTTP 202 Accepted indicates that the request has been accepted for processing, but execution is incomplete (typical for background task queues)."
  },
  {
    "id": "quiz-04",
    "question": "In the Token Bucket rate-limiting algorithm, what is the formula for new available tokens?",
    "options": [
      "T_new = C * r * Delta_t",
      "T_new = min(C, T_old + r * Delta_t)",
      "T_new = max(0, T_old - r)",
      "T_new = C / Delta_t"
    ],
    "correctIndex": 1,
    "explanation": "Tokens accumulate at rate r over time Delta_t up to maximum bucket capacity C: T_new = min(C, T_old + r * Delta_t)."
  },
  {
    "id": "quiz-05",
    "question": "What MIME type must be set in HTTP headers for Server-Sent Events (SSE)?",
    "options": [
      "application/json",
      "text/event-stream",
      "application/octet-stream",
      "multipart/form-data"
    ],
    "correctIndex": 1,
    "explanation": "Server-Sent Events require Content-Type: text/event-stream to instruct the client to parse continuous event records."
  },
  {
    "id": "quiz-06",
    "question": "Is a standard signed JSON Web Token (JWT) encrypted?",
    "options": [
      "Yes, all fields are AES-256 encrypted by default",
      "No, header and payload are Base64URL encoded and readable by anyone who holds the token",
      "Only the header is encrypted",
      "It is encrypted only when transferred over HTTPS"
    ],
    "correctIndex": 1,
    "explanation": "A standard signed JWT is signed for integrity verification, but its payload is not encrypted. Never store private passwords or API keys in claims."
  },
  {
    "id": "quiz-07",
    "question": "What is Broken Object-Level Authorization (BOLA / IDOR)?",
    "options": [
      "A bug where the database fails to execute foreign key cascades",
      "An attacker accessing or modifying another user's private resource by changing the ID in the request URL",
      "A crash caused by invalid JSON payloads",
      "A failure in generating OAuth2 authorization codes"
    ],
    "correctIndex": 1,
    "explanation": "BOLA occurs when an API fails to verify that the authenticated caller owns or has explicit permission to access the specific object ID requested."
  },
  {
    "id": "quiz-08",
    "question": "Why is Argon2id considered the gold standard for password hashing in modern backends?",
    "options": [
      "It hashes passwords in under 1 nanosecond",
      "It is memory-hard and compute-hard, preventing massive parallel GPU/ASIC brute-force cracking",
      "It allows decrypting passwords back into plaintext",
      "It is built directly into hardware motherboards"
    ],
    "correctIndex": 1,
    "explanation": "Argon2id consumes configurable amounts of memory and CPU cycles, defeating mass GPU/ASIC cracking attempts that easily break fast hashes."
  },
  {
    "id": "quiz-09",
    "question": "Why should foundation model weights never be loaded directly inside Uvicorn worker processes?",
    "options": [
      "Uvicorn does not support Python machine learning libraries",
      "Each Uvicorn worker is an independent process, so loading weights in N workers consumes N times the GPU/RAM memory, causing OOM crashes",
      "Models run slower when loaded in FastAPI than in Flask",
      "Uvicorn only supports CPU execution"
    ],
    "correctIndex": 1,
    "explanation": "Uvicorn workers are separate processes. 4 workers loading a 14GB model would attempt to consume 56GB VRAM, quickly causing an Out Of Memory crash."
  },
  {
    "id": "quiz-10",
    "question": "What is the purpose of adding full jitter to exponential backoff during upstream API retries?",
    "options": [
      "To increase the total number of retries to 100",
      "To randomize retry delays and prevent synchronized bursts (thundering herds) from overwhelming the recovering service",
      "To encrypt network packets during transit",
      "To bypass upstream rate limits completely"
    ],
    "correctIndex": 1,
    "explanation": "Full jitter randomizes delays across clients, de-correlating retry spikes and avoiding 'thundering herd' overload on recovering upstream servers."
  },
  {
    "id": "quiz-11",
    "question": "What is the difference between /health (liveness) and /ready (readiness) probes?",
    "options": [
      "They are identical and can be used interchangeably",
      "Liveness verifies process survival (restarting if dead); readiness verifies dependencies are available to serve traffic",
      "Liveness checks database health; readiness checks memory usage",
      "Readiness is only used during local development"
    ],
    "correctIndex": 1,
    "explanation": "Liveness checks if the process is alive; failure triggers a container restart. Readiness checks if external dependencies (DB, Redis) are healthy."
  },
  {
    "id": "quiz-12",
    "question": "What is the primary role of the FastAPI 'lifespan' context manager?",
    "options": [
      "To monitor CPU temperatures during execution",
      "To manage application startup (initializing connection pools) and shutdown (gracefully cleaning up resources) in one place",
      "To automatically restart the server on code changes",
      "To generate automated Swagger UI documentation"
    ],
    "correctIndex": 1,
    "explanation": "The lifespan async context manager initializes shared connection pools before yield and gracefully cleans them up after yield."
  }
];

export const competenciesChecklist = [
  {
    "id": "comp-01",
    "label": "Understand 3-tier architecture & HTTP request-response flow"
  },
  {
    "id": "comp-02",
    "label": "Design RESTful APIs with correct HTTP methods and status codes"
  },
  {
    "id": "comp-03",
    "label": "Build and run FastAPI ASGI applications using Uvicorn"
  },
  {
    "id": "comp-04",
    "label": "Define Pydantic V2 schemas with field constraints & custom validators"
  },
  {
    "id": "comp-05",
    "label": "Differentiate path, query, header, and request body parameters"
  },
  {
    "id": "comp-06",
    "label": "Master async/await, coroutines, and the single-threaded event loop"
  },
  {
    "id": "comp-07",
    "label": "Avoid blocking the event loop with synchronous operations"
  },
  {
    "id": "comp-08",
    "label": "Structure scalable codebases using APIRouter namespaces"
  },
  {
    "id": "comp-09",
    "label": "Implement Dependency Injection with FastAPI Depends()"
  },
  {
    "id": "comp-10",
    "label": "Compare FastAPI BackgroundTasks vs distributed Celery worker fleets"
  },
  {
    "id": "comp-11",
    "label": "Implement Server-Sent Events (SSE) progressive token streaming"
  },
  {
    "id": "comp-12",
    "label": "Understand architectural differences between HTTP, SSE, and WebSockets"
  },
  {
    "id": "comp-13",
    "label": "Hash credentials using modern memory-hard Argon2id via pwdlib"
  },
  {
    "id": "comp-14",
    "label": "Generate and cryptographically verify signed JWT tokens"
  },
  {
    "id": "comp-15",
    "label": "Implement Role-Based Access Control (RBAC) guards"
  },
  {
    "id": "comp-16",
    "label": "Eradicate Broken Object-Level Authorization (BOLA/IDOR) vulnerabilities"
  },
  {
    "id": "comp-17",
    "label": "Implement Token Bucket rate limiting with Redis atomic Lua scripts"
  },
  {
    "id": "comp-18",
    "label": "Configure CORS middleware safely without wildcard credentials"
  },
  {
    "id": "comp-19",
    "label": "Implement upstream retries using exponential backoff with full jitter"
  },
  {
    "id": "comp-20",
    "label": "Deploy Uvicorn multi-worker clusters with decoupled GPU inference"
  }
];

export const learningResources = [
  {
    "title": "FastAPI Official Documentation",
    "url": "https://fastapi.tiangolo.com/",
    "description": "The authoritative manual for routing, dependencies, validation, security, and streaming responses."
  },
  {
    "title": "Python asyncio Official Reference",
    "url": "https://docs.python.org/3/library/asyncio.html",
    "description": "Core documentation covering coroutines, event loops, tasks, and non-blocking asynchronous programming."
  },
  {
    "title": "Pydantic V2 Documentation",
    "url": "https://docs.pydantic.dev/",
    "description": "Comprehensive guide for fast data validation, schema enforcement, serialization, and custom validators."
  },
  {
    "title": "Redis Documentation & Rate Limiting Patterns",
    "url": "https://redis.io/docs/latest/",
    "description": "Centralized in-memory caching, distributed rate limiting with atomic Lua scripts, and shared state."
  },
  {
    "title": "OWASP API Security Top 10",
    "url": "https://owasp.org/www-project-api-security/",
    "description": "Authoritative security standard for identifying and mitigating Broken Object-Level Authorization, Broken Authentication, and API risks."
  }
];
