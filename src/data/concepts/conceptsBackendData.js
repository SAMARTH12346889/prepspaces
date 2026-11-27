/**
 * Concepts Batch: Backend Engineering (6) + Data Engineering (6)
 * Complete original technical lessons with code examples, common mistakes,
 * interview Q&As, and two-way links to PrepSpaces courses and modules.
 */

export const CONCEPTS_BACKEND_DATA = [
  // ================= BACKEND ENGINEERING (6) =================
  {
    slug: "rest-api-design",
    category: "backend",
    subcategory: "API Architecture",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "REST API Design: HTTP Methods (PUT vs PATCH), Idempotency & Status Codes",
    metaTitle: "REST API Design, PUT vs PATCH & Idempotency | PrepSpaces Concepts",
    description:
      "Learn production REST API design: resource naming, GET/POST/PUT/PATCH/DELETE semantics, idempotency, pagination, and standard HTTP status codes.",
    keywords: "REST API design, PUT vs PATCH, HTTP idempotency, HTTP status codes, API pagination, API versioning",
    directAnswer:
      "REST APIs model server capabilities around noun-based resource URLs and standard HTTP verbs—where GET, PUT, and DELETE are idempotent, PUT replaces a resource representation while PATCH applies partial updates, and accurate HTTP status codes communicate outcomes clearly to clients.",
    sections: [
      {
        heading: "1. Resource Modeling & HTTP Methods (PUT vs PATCH)",
        paragraphs: [
          "Design endpoints around plural resource nouns (`/api/v1/students`, `/api/v1/courses/{id}`) rather than RPC verbs (`/createStudent`).",
          "`PUT /api/v1/students/stu-1001` replaces the complete student representation and is idempotent—repeating the exact request produces the same server state. `PATCH /api/v1/students/stu-1001` updates only selected fields such as `department`.",
        ],
      },
      {
        heading: "2. Idempotency Keys, Status Codes & Pagination",
        paragraphs: [
          "Unlike `PUT` or `DELETE`, `POST` is not naturally idempotent—retrying a timed-out `POST /api/v1/payments` request can double-charge a user unless the client sends an `Idempotency-Key` header that the server deduplicates.",
          "Return `200 OK`, `201 Created` (with `Location`), `204 No Content`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `409 Conflict`, or `429 Too Many Requests` consistently.",
        ],
      },
    ],
    codeExample: {
      title: "PUT (Full Replacement) vs PATCH (Partial Update)",
      language: "http",
      code: `PUT /api/v1/students/stu-1001 HTTP/1.1
Content-Type: application/json

{
  "name": "Rahul Sharma",
  "email": "rahul.new@example.com",
  "department": "Information Technology"
}

---
PATCH /api/v1/students/stu-1001 HTTP/1.1
Content-Type: application/json

{
  "department": "Information Technology"
}`,
      explanation:
        "PUT sends the full resource representation to replace the record, whereas PATCH sends only the modified fields.",
    },
    commonMistakes: [
      {
        mistake: "Returning `200 OK` with `{ \"error\": \"Not found\" }` in the JSON body.",
        correction:
          "Use proper HTTP status codes (`404 Not Found`, `400 Bad Request`, `422 Unprocessable Entity`) so HTTP clients, caches, and monitoring handle errors accurately.",
      },
      {
        mistake: "Using `GET` endpoints for state-changing mutations.",
        correction:
          "Keep `GET` safe and read-only; browsers, crawlers, and prefetchers can trigger `GET` URLs automatically.",
      },
    ],
    interviewQuestions: [
      {
        question: "What does idempotency mean in HTTP APIs?",
        answer: "An operation is idempotent if executing the same request multiple times produces the same server state as executing it once (e.g., `GET`, `PUT`, `DELETE`).",
      },
      {
        question: "How do you make a `POST` payment endpoint safe against network retries?",
        answer: "Require an `Idempotency-Key` header stored by the server with the request hash and cached response so duplicate retries return the original result.",
      },
      {
        question: "When is cursor-based pagination preferred over offset (`page`/`limit`) pagination?",
        answer: "For large, frequently changing feeds where `OFFSET` degrades performance and causes skipped or duplicated rows when new records are inserted.",
      },
    ],
    relatedConcepts: [
      "/concepts/backend/api-rate-limiting-resilience",
      "/concepts/backend/clean-architecture-mvc",
      "/concepts/frontend/tanstack-query",
    ],
    relatedCourse: {
      title: "Backend Engineering Master Course",
      route: "/learning/backend-engineering",
      description: "Master HTTP, REST API design, Spring Boot, databases, security, caching, and observability.",
    },
    relatedModules: [
      { title: "Backend Module 2: HTTP Protocol & API Design", route: "/learning/backend-engineering/http-api-design" },
      { title: "Backend Module 6: Validation, Error Handling & Reliability", route: "/learning/backend-engineering/validation-reliability" },
    ],
    practiceAction: { label: "Practice Backend API Interview", to: "/ai-interview" },
  },
  {
    slug: "clean-architecture-mvc",
    category: "backend",
    subcategory: "Software Architecture",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Layered, MVC, Clean Architecture & Repository Pattern",
    metaTitle: "Clean Architecture, MVC & Repository Pattern | PrepSpaces Concepts",
    description:
      "Learn how backend services separate HTTP controllers, business domain logic, and database repositories using Dependency Inversion.",
    keywords: "Clean Architecture, MVC, Layered Architecture, Repository Pattern, Dependency Injection, Spring Boot",
    directAnswer:
      "Layered and Clean Architecture separate HTTP transport (Controllers), core business rules (Services/Use Cases), and persistence (Repositories) so business logic stays independent of frameworks and databases, with dependencies pointing inward toward domain abstractions.",
    sections: [
      {
        heading: "1. Controller -> Service -> Repository Separation",
        paragraphs: [
          "Controllers parse HTTP requests, validate DTOs, and serialize HTTP responses. Services enforce business invariants and transactions. Repositories abstract SQL or ORM queries behind domain interfaces.",
          "Keeping SQL queries and HTTP status codes out of business services makes unit testing fast and prevents framework lock-in.",
        ],
      },
      {
        heading: "2. Dependency Inversion & Testability",
        paragraphs: [
          "In Clean Architecture, the domain/application layer defines a repository interface (`CourseRepository`), and the infrastructure layer provides the PostgreSQL or in-memory implementation.",
          "During testing, services can be verified against lightweight fake repositories without booting a real database.",
        ],
      },
    ],
    codeExample: {
      title: "Clean Service Depending on a Repository Interface",
      language: "java",
      code: `public interface EnrollmentRepository {
    boolean existsByStudentAndCourse(Long studentId, Long courseId);
    Enrollment save(Enrollment enrollment);
}

public class EnrollmentService {
    private final EnrollmentRepository repo;

    public EnrollmentService(EnrollmentRepository repo) {
        this.repo = repo;
    }

    public Enrollment enroll(Long studentId, Long courseId) {
        if (repo.existsByStudentAndCourse(studentId, courseId)) {
            throw new IllegalStateException("Already enrolled");
        }
        return repo.save(new Enrollment(studentId, courseId));
    }
}`,
      explanation:
        "Constructor injection decouples `EnrollmentService` from SQL/JPA details, keeping business rules pure and unit-testable.",
    },
    commonMistakes: [
      {
        mistake: "Writing raw database queries and business rules directly inside HTTP controllers.",
        correction:
          "Keep controllers thin (routing + DTO validation) and delegate domain rules to service classes.",
      },
      {
        mistake: "Returning database ORM entities directly in public API responses.",
        correction:
          "Map entities to explicit Response DTOs so internal fields (`passwordHash`, audit columns) never leak.",
      },
    ],
    interviewQuestions: [
      {
        question: "What problem does the Repository Pattern solve?",
        answer: "It decouples domain/service logic from specific persistence APIs (SQL, JPA, MongoDB) behind a collection-like interface.",
      },
      {
        question: "What is the Dependency Rule in Clean Architecture?",
        answer: "Source code dependencies must only point inward toward higher-level domain policies, never outward toward frameworks or databases.",
      },
      {
        question: "Why avoid exposing JPA/ORM entities directly as API responses?",
        answer: "It tightly couples external API contracts to database schemas, risks lazy-loading exceptions, and can accidentally expose sensitive fields.",
      },
    ],
    relatedConcepts: [
      "/concepts/backend/rest-api-design",
      "/concepts/backend/database-indexing-acid",
      "/concepts/java/jvm",
    ],
    relatedCourse: {
      title: "Backend Engineering Master Course",
      route: "/learning/backend-engineering",
      description: "Design maintainable Java/Spring Boot backends with clean architecture and testing.",
    },
    relatedModules: [
      { title: "Backend Module 1: Backend Engineering Foundations", route: "/learning/backend-engineering" },
      { title: "Backend Module 3: Java Backend with Spring Boot", route: "/learning/backend-engineering/spring-boot" },
    ],
    practiceAction: { label: "Practice Backend Architecture Interview", to: "/ai-interview" },
  },
  {
    slug: "database-indexing-acid",
    category: "backend",
    subcategory: "Databases & Persistence",
    difficulty: "Intermediate",
    readTime: "9 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Database Indexing (B-Tree), Query Plans & ACID Transactions",
    metaTitle: "Database B-Tree Indexing & ACID Transactions | PrepSpaces Concepts",
    description:
      "Understand how B-Tree indexes accelerate lookups, how EXPLAIN detects full table scans, ACID isolation levels, and fixing N+1 queries.",
    keywords: "Database indexing, B-Tree index, ACID transactions, SQL EXPLAIN, N+1 query problem, isolation levels",
    directAnswer:
      "Database B-Tree indexes organize sorted key pointers to turn O(N) full table scans into O(log N) lookups at the cost of extra write overhead, while ACID transactions (Atomicity, Consistency, Isolation, Durability) guarantee reliable concurrent data mutations.",
    sections: [
      {
        heading: "1. How B-Tree Indexes & Composite Keys Work",
        paragraphs: [
          "A B-Tree index keeps keys in balanced sorted pages so equality (`=`), range (`>`, `BETWEEN`), and `ORDER BY` queries traverse only a few tree levels instead of scanning millions of rows.",
          "For composite indexes `(tenant_id, created_at)`, follow the leftmost prefix rule: queries filtering on `tenant_id` (or both columns) use the index efficiently, whereas filtering only on `created_at` usually cannot.",
        ],
      },
      {
        heading: "2. ACID Guarantees & Avoiding N+1 Queries",
        paragraphs: [
          "Atomicity rolls back partial failures; Isolation prevents dirty/phantom reads via levels like `READ COMMITTED` and `SERIALIZABLE`; Durability persists committed WAL logs to disk.",
          "An N+1 query occurs when fetching 50 courses triggers 1 query for courses plus 50 separate queries for each instructor—fix it with `JOIN`s, `IN (...)` batching, or eager fetch graphs.",
        ],
      },
    ],
    codeExample: {
      title: "Inspecting Index Usage with PostgreSQL EXPLAIN ANALYZE",
      language: "sql",
      code: `CREATE INDEX idx_enrollments_student_created
  ON enrollments (student_id, created_at DESC);

EXPLAIN ANALYZE
SELECT id, course_id, progress
FROM enrollments
WHERE student_id = 101
ORDER BY created_at DESC
LIMIT 10;`,
      explanation:
        "A composite index on `(student_id, created_at DESC)` satisfies both the `WHERE` filter and `ORDER BY` sort in a single Index Scan.",
    },
    commonMistakes: [
      {
        mistake: "Adding an index to every column in a table.",
        correction:
          "Every index slows down `INSERT`/`UPDATE`/`DELETE` writes and consumes RAM/disk; index based on actual `EXPLAIN` query patterns.",
      },
      {
        mistake: "Wrapping functions around indexed columns (`WHERE LOWER(email) = ...`).",
        correction:
          "Functions prevent normal B-Tree index usage unless you create a matching expression index.",
      },
    ],
    interviewQuestions: [
      {
        question: "What is the N+1 query problem and how do you fix it?",
        answer: "Executing 1 query for a parent list and N additional queries inside a loop for child records; fix with `JOIN` fetching, `IN` batch loading, or DataLoader.",
      },
      {
        question: "What does the 'I' in ACID stand for and what anomalies does it prevent?",
        answer: "Isolation—preventing concurrent transactions from observing dirty reads, non-repeatable reads, or phantom reads depending on the isolation level.",
      },
      {
        question: "Why does a composite index `(a, b)` help `WHERE a = 1 AND b = 2` but not `WHERE b = 2`?",
        answer: "B-Tree entries are sorted first by `a` and then by `b` within `a`, so `b` values are scattered without knowing `a`.",
      },
    ],
    relatedConcepts: [
      "/concepts/backend/redis-caching-patterns",
      "/concepts/backend/clean-architecture-mvc",
      "/concepts/data-engineering/dimensional-modeling",
    ],
    relatedCourse: {
      title: "Backend Engineering Master Course",
      route: "/learning/backend-engineering",
      description: "Master database engineering, indexing, transactions, and persistence optimization.",
    },
    relatedModules: [
      { title: "Backend Module 4: Database Engineering & Persistence", route: "/learning/backend-engineering/database-persistence" },
      { title: "Data Engineering Module 5: Database Internals & Performance", route: "/learning/data-engineering/internals" },
    ],
    practiceAction: { label: "Practice Database Engineering Interview", to: "/ai-interview" },
  },
  {
    slug: "redis-caching-patterns",
    category: "backend",
    subcategory: "Caching & Messaging",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Redis Caching Patterns: Cache-Aside, TTL, Stampede & Queues",
    metaTitle: "Redis Caching Patterns & Cache Stampede Defense | PrepSpaces Concepts",
    description:
      "Learn Cache-Aside, Write-Through, TTL jitter, cache stampede prevention, and asynchronous job queues with Redis.",
    keywords: "Redis caching, Cache-Aside, Write-Through, Cache Stampede, TTL jitter, asynchronous queues",
    directAnswer:
      "Redis stores hot data in sub-millisecond in-memory structures using patterns like Cache-Aside (read cache -> fallback to DB -> populate with TTL), while preventing cache stampedes with single-flight locks and randomized TTL jitter.",
    sections: [
      {
        heading: "1. Cache-Aside vs Write-Through",
        paragraphs: [
          "In Cache-Aside (lazy loading), the application checks Redis first; on a cache miss, it queries the database, writes the result to Redis with a TTL, and returns it. On updates, it updates the database and invalidates the cache key.",
          "In Write-Through, writes go through the cache layer synchronously to keep cache and DB aligned, trading higher write latency for consistent reads.",
        ],
      },
      {
        heading: "2. Cache Stampede (Thundering Herd) & Async Queues",
        paragraphs: [
          "If a hot key expires while thousands of requests arrive simultaneously, all requests miss and hammer the database at once. Prevent this using mutex/single-flight locks, probabilistic early expiration, and random TTL jitter.",
          "Redis also backs asynchronous message queues so slow tasks (emails, video transcoding, webhooks) run in background workers without blocking HTTP responses.",
        ],
      },
    ],
    codeExample: {
      title: "Cache-Aside Pattern with Jittered TTL in TypeScript",
      language: "typescript",
      code: `async function getCourseCached(courseId: string) {
  const key = \`course:\${courseId}\`;
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);

  const course = await db.courses.findById(courseId);
  if (!course) return null;

  const jitterSeconds = Math.floor(Math.random() * 60);
  await redis.set(key, JSON.stringify(course), { EX: 300 + jitterSeconds });
  return course;
}`,
      explanation:
        "Adding randomized TTL jitter (`300 + jitterSeconds`) prevents large batches of keys cached at the same time from expiring simultaneously.",
    },
    commonMistakes: [
      {
        mistake: "Storing cached keys without a TTL or eviction policy.",
        correction:
          "Always configure TTLs and Redis `maxmemory-policy` (e.g. `allkeys-lru`) so memory does not exhaust.",
      },
      {
        mistake: "Caching personalized user responses under a shared global key.",
        correction:
          "Scope user-specific keys by user/tenant ID or bypass shared caching for private data.",
      },
    ],
    interviewQuestions: [
      {
        question: "What is a cache stampede and how do you prevent it?",
        answer: "A spike of concurrent DB queries when a hot key expires; prevent it with per-key distributed locks (single-flight), TTL jitter, or stale-while-revalidate.",
      },
      {
        question: "What is cache penetration?",
        answer: "Repeated queries for non-existent IDs that always miss both cache and DB; mitigate by caching short-TTL null sentinels or using Bloom filters.",
      },
      {
        question: "Why invalidate cache on writes instead of updating it blindly?",
        answer: "Concurrent writes can race and leave stale values in cache; deleting the key forces the next read to fetch fresh state.",
      },
    ],
    relatedConcepts: [
      "/concepts/backend/database-indexing-acid",
      "/concepts/system-design/cache-aside-vs-write-through",
      "/concepts/frontend/tanstack-query",
    ],
    relatedCourse: {
      title: "Backend Engineering Master Course",
      route: "/learning/backend-engineering",
      description: "Implement Redis caching, background workers, and event-driven messaging.",
    },
    relatedModules: [
      { title: "Backend Module 7: Caching, Async Processing & Messaging", route: "/learning/backend-engineering/caching-async-messaging" },
      { title: "System Design Module 7: Caching Strategies", route: "/learning/system-design" },
    ],
    practiceAction: { label: "Practice Caching & Redis Interview", to: "/ai-interview" },
  },
  {
    slug: "api-rate-limiting-resilience",
    category: "backend",
    subcategory: "Reliability & Resilience",
    difficulty: "Advanced",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "API Rate Limiting, Timeouts, Retries & Circuit Breakers",
    metaTitle: "API Rate Limiting & Circuit Breakers | PrepSpaces Concepts",
    description:
      "Protect backend APIs from abuse and cascading failures using Token Bucket rate limiting, bounded timeouts, exponential backoff, and Circuit Breakers.",
    keywords: "API rate limiting, Token Bucket, Circuit Breaker, Exponential Backoff, HTTP 429, backend resilience",
    directAnswer:
      "Resilient APIs combine rate limiting (Token Bucket or Sliding Window returning HTTP 429) to prevent overload with strict timeouts, jittered exponential backoff retries, and Circuit Breakers that fail fast when a downstream dependency is unhealthy.",
    sections: [
      {
        heading: "1. Token Bucket & Sliding Window Rate Limiting",
        paragraphs: [
          "Token Bucket allows short bursts up to bucket capacity while enforcing a steady average refill rate per user, IP, or API key.",
          "When limits are exceeded, return `429 Too Many Requests` with `Retry-After` and `X-RateLimit-Remaining` headers.",
        ],
      },
      {
        heading: "2. Timeouts, Jittered Retries & Circuit Breakers",
        paragraphs: [
          "Never make outbound HTTP/DB calls without timeouts—hung connections exhaust thread pools and cause cascading outages.",
          "A Circuit Breaker monitors failure rates across Closed, Open (fast-fail without calling downstream), and Half-Open (probe recovery) states.",
        ],
      },
    ],
    codeExample: {
      title: "Exponential Backoff with Full Jitter",
      language: "typescript",
      code: `async function fetchWithRetry(url: string, maxRetries = 3) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);
    try {
      const res = await fetch(url, { signal: controller.signal });
      if (res.ok || res.status < 500) return res;
    } finally {
      clearTimeout(timer);
    }
    if (attempt === maxRetries) break;
    const baseDelay = 200 * Math.pow(2, attempt);
    const jitter = Math.random() * baseDelay;
    await new Promise((r) => setTimeout(r, jitter));
  }
  throw new Error("Upstream unavailable after retries");
}`,
      explanation:
        "Timeouts cap each attempt at 3 seconds, only 5xx/network failures are retried, and randomized jitter spreads retry traffic.",
    },
    commonMistakes: [
      {
        mistake: "Retrying `400 Bad Request` or `401 Unauthorized` errors.",
        correction:
          "Client 4xx errors (except `429` after `Retry-After`) will fail identically on retry and waste capacity.",
      },
      {
        mistake: "Retrying immediately in a tight loop without backoff or jitter.",
        correction:
          "Synchronized retries amplify outages (retry storms); always use exponential backoff with jitter.",
      },
    ],
    interviewQuestions: [
      {
        question: "What are the three states of a Circuit Breaker?",
        answer: "Closed (requests flow normally), Open (requests fail fast immediately), and Half-Open (limited probe requests test if downstream recovered).",
      },
      {
        question: "Why add jitter to exponential backoff?",
        answer: "To desynchronize retry waves from many clients so they do not hit a recovering server at the exact same millisecond.",
      },
      {
        question: "What HTTP status code and header should a rate limiter return?",
        answer: "`429 Too Many Requests` along with a `Retry-After` header.",
      },
    ],
    relatedConcepts: [
      "/concepts/backend/rest-api-design",
      "/concepts/system-design/rate-limiting",
      "/concepts/backend/observability-opentelemetry",
    ],
    relatedCourse: {
      title: "Backend Engineering Master Course",
      route: "/learning/backend-engineering",
      description: "Build fault-tolerant APIs with validation, rate limiting, and reliability patterns.",
    },
    relatedModules: [
      { title: "Backend Module 6: Validation, Error Handling & Reliability", route: "/learning/backend-engineering/validation-reliability" },
      { title: "Backend Module 9: API Security Engineering", route: "/learning/backend-engineering/api-security" },
    ],
    practiceAction: { label: "Practice System Resilience Interview", to: "/ai-interview" },
  },
  {
    slug: "observability-opentelemetry",
    category: "backend",
    subcategory: "Production & Observability",
    difficulty: "Intermediate",
    readTime: "7 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Backend Observability: Structured Logs, Metrics & OpenTelemetry Tracing",
    metaTitle: "Observability: Logs, Metrics & OpenTelemetry Tracing | PrepSpaces Concepts",
    description:
      "Learn the three pillars of observability—structured JSON logs, RED metrics, and OpenTelemetry distributed trace propagation across microservices.",
    keywords: "Observability, OpenTelemetry, Distributed Tracing, Structured Logging, RED Metrics, Health Checks",
    directAnswer:
      "Observability combines three telemetry signals—structured JSON logs (discrete events with `traceId`), metrics (aggregated counters and p95/p99 latency histograms), and distributed traces (OpenTelemetry spans propagated via `traceparent` headers)—to diagnose production failures quickly.",
    sections: [
      {
        heading: "1. The Three Pillars & Correlation IDs",
        paragraphs: [
          "Metrics alert you that p99 latency spiked or 5xx errors crossed your SLO budget. Distributed traces pinpoint which service or SQL query caused the latency, and structured JSON logs filtered by `traceId` reveal the exact error context.",
          "Follow the RED method for services: Rate (requests/sec), Errors (5xx rate), and Duration (latency histograms).",
        ],
      },
      {
        heading: "2. Liveness vs Readiness Probes",
        paragraphs: [
          "Expose `/health/live` (is the process running?) separately from `/health/ready` (can it reach its database/cache dependencies?) so orchestrators like Kubernetes stop routing traffic to unready pods without restarting healthy ones unnecessarily.",
        ],
      },
    ],
    codeExample: {
      title: "Structured JSON Log Entry with Trace Context",
      language: "json",
      code: `{
  "timestamp": "2026-11-27T10:30:12.412Z",
  "level": "ERROR",
  "service": "course-api",
  "traceId": "4bf92f3577b34da6a3ce929d0e0e4736",
  "spanId": "00f067aa0ba902b7",
  "method": "POST",
  "path": "/api/v1/enrollments",
  "status": 500,
  "durationMs": 312,
  "error": "Connection timeout acquiring DB pool"
}`,
      explanation:
        "Machine-parseable JSON logs carrying `traceId` allow instant correlation across API gateways, services, and databases.",
    },
    commonMistakes: [
      {
        mistake: "Logging sensitive passwords, JWTs, or credit card numbers.",
        correction:
          "Redact authorization headers, cookies, and PII fields before emitting logs.",
      },
      {
        mistake: "Using `avg()` instead of `p95`/`p99` percentiles for latency.",
        correction:
          "Averages hide tail latency spikes affecting your slowest 1–5% of users.",
      },
    ],
    interviewQuestions: [
      {
        question: "How do logs, metrics, and traces complement each other?",
        answer: "Metrics detect anomalies cheaply at scale, traces localize latency/errors across service hops, and logs provide detailed event context via `traceId`.",
      },
      {
        question: "Why should `/health/ready` check downstream dependencies while `/health/live` stays lightweight?",
        answer: "If a database blips, failing `/health/ready` removes the pod from load balancing without triggering a restart loop from `/health/live`.",
      },
      {
        question: "What is OpenTelemetry?",
        answer: "A vendor-neutral CNCF standard and SDK suite for instrumenting, collecting, and exporting traces, metrics, and logs.",
      },
    ],
    relatedConcepts: [
      "/concepts/backend/api-rate-limiting-resilience",
      "/concepts/devops/sli-slo-sla",
      "/concepts/devops/kubernetes-probes",
    ],
    relatedCourse: {
      title: "Backend Engineering Master Course",
      route: "/learning/backend-engineering",
      description: "Deploy, monitor, and debug production backend services.",
    },
    relatedModules: [
      { title: "Backend Module 10: Production Backend & Observability", route: "/learning/backend-engineering/production-observability" },
      { title: "DevOps Module 9: Monitoring, Logging & Observability", route: "/learning/devops" },
    ],
    practiceAction: { label: "Practice Observability Interview", to: "/ai-interview" },
  },

  // ================= DATA ENGINEERING (6) =================
  {
    slug: "etl-vs-elt",
    category: "data-engineering",
    subcategory: "Pipeline Architecture",
    difficulty: "Beginner",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "ETL vs ELT Pipelines, OLTP vs OLAP & Idempotent Backfills",
    metaTitle: "ETL vs ELT & OLTP vs OLAP Architecture | PrepSpaces Concepts",
    description:
      "Compare ETL and ELT data pipelines, OLTP transactional databases vs OLAP analytical warehouses, and how to design idempotent batch backfills.",
    keywords: "ETL vs ELT, OLTP vs OLAP, data pipelines, idempotent backfill, data warehousing",
    directAnswer:
      "ETL transforms data in an intermediate engine before loading into a warehouse, whereas ELT loads raw data into cloud warehouses/lakehouses first and runs scalable SQL/dbt transformations inside the warehouse—bridging row-oriented OLTP operational systems with columnar OLAP analytics.",
    sections: [
      {
        heading: "1. OLTP vs OLAP Workloads",
        paragraphs: [
          "OLTP databases (PostgreSQL, MySQL) optimize high-concurrency row-level reads/writes for applications. OLAP systems (Snowflake, BigQuery, ClickHouse) use columnar storage and vectorized execution to scan billions of rows for aggregations.",
          "Running heavy analytical `GROUP BY` queries directly on production OLTP databases degrades user-facing latency, motivating dedicated extraction pipelines.",
        ],
      },
      {
        heading: "2. ETL vs ELT & Idempotency",
        paragraphs: [
          "Modern cloud stacks favor ELT because cheap object storage and elastic warehouse compute let teams keep raw history and iterate on SQL transformations without re-ingesting sources.",
          "Every pipeline must be idempotent: re-running a failed partition (`DELETE WHERE date = '2026-11-27'` + `INSERT` or `MERGE`) must produce identical output without duplicate rows.",
        ],
      },
    ],
    codeExample: {
      title: "Idempotent Partitioned SQL Load (MERGE / Replace)",
      language: "sql",
      code: `BEGIN TRANSACTION;

DELETE FROM analytics.daily_orders
WHERE order_date = '2026-11-27';

INSERT INTO analytics.daily_orders (order_date, total_orders, revenue_usd)
SELECT
  DATE(created_at) AS order_date,
  COUNT(*) AS total_orders,
  SUM(amount_usd) AS revenue_usd
FROM raw.orders
WHERE DATE(created_at) = '2026-11-27'
GROUP BY DATE(created_at);

COMMIT;`,
      explanation:
        "Deleting and reinserting a deterministic date partition inside a transaction makes daily backfills safe to retry.",
    },
    commonMistakes: [
      {
        mistake: "Using `INSERT INTO` without deduplication or partition replacement on retries.",
        correction:
          "Design pipelines with `MERGE` or atomic partition overwrite so retries never duplicate records.",
      },
      {
        mistake: "Running heavy BI dashboards directly against the production OLTP primary.",
        correction:
          "Replicate via CDC or batch ELT to an analytical warehouse or read replica.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why has ELT largely replaced traditional ETL in modern cloud data stacks?",
        answer: "Cloud warehouses and lakehouses separate storage from elastic compute, making it cheaper and faster to land raw data first and transform with SQL/dbt.",
      },
      {
        question: "Why is columnar storage faster than row storage for OLAP queries?",
        answer: "OLAP queries read only a few columns across millions of rows; columnar formats skip irrelevant columns and achieve much higher compression.",
      },
      {
        question: "What makes a data pipeline idempotent?",
        answer: "Running the pipeline multiple times for the same input window produces the exact same target state with no duplicates.",
      },
    ],
    relatedConcepts: [
      "/concepts/data-engineering/dimensional-modeling",
      "/concepts/data-engineering/data-lakehouse",
      "/concepts/data-engineering/apache-airflow-dbt",
    ],
    relatedCourse: {
      title: "Data Engineering Master Course",
      route: "/learning/data-engineering",
      description: "Master data pipelines, SQL, Spark, Kafka, Airflow, dbt, and Lakehouse architectures.",
    },
    relatedModules: [
      { title: "Data Engineering Module 1: Intro to Data Engineering", route: "/learning/data-engineering" },
      { title: "Data Engineering Module 10: ETL, ELT & Batch Processing", route: "/learning/data-engineering/etl-batch" },
    ],
    practiceAction: { label: "Practice Data Engineering Interview", to: "/ai-interview" },
  },
  {
    slug: "apache-kafka",
    category: "data-engineering",
    subcategory: "Streaming & Event Systems",
    difficulty: "Intermediate",
    readTime: "9 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Apache Kafka: Topics, Partitions, Consumer Groups & Offsets",
    metaTitle: "Apache Kafka Architecture, Partitions & Offsets | PrepSpaces Concepts",
    description:
      "Understand Apache Kafka distributed event logs: topics, partition ordering guarantees, consumer groups, offset commits, and delivery semantics.",
    keywords: "Apache Kafka, Kafka partitions, consumer groups, offsets, event streaming, at-least-once delivery",
    directAnswer:
      "Apache Kafka is a distributed append-only commit log where topics are split into ordered partitions replicated across brokers, allowing independent consumer groups to scale parallel reads while tracking progress via durable offsets.",
    sections: [
      {
        heading: "1. Topics, Partitions & Ordering Guarantees",
        paragraphs: [
          "Kafka guarantees strict message ordering **within a single partition**, not across an entire multi-partition topic. Producing events with a deterministic key (e.g. `student_id`) routes all events for that entity to the same partition.",
          "Replication (`acks=all` + `min.insync.replicas`) ensures committed events survive broker failures.",
        ],
      },
      {
        heading: "2. Consumer Groups & Delivery Semantics",
        paragraphs: [
          "Within a consumer group, each partition is assigned to at most one consumer instance—so max parallelism equals the topic's partition count. Different consumer groups (e.g. Analytics vs Billing) read the same topic independently.",
          "Commit offsets *after* processing succeeds to achieve at-least-once delivery, paired with idempotent downstream sinks.",
        ],
      },
    ],
    codeExample: {
      title: "Keyed Kafka Producer & Safe Offset Commit Pattern",
      language: "python",
      code: `# Keyed produce guarantees per-student ordering within a partition
producer.send(
    topic="lesson-events",
    key=str(student_id).encode("utf-8"),
    value=json_bytes,
)

# Consumer commits offset ONLY after downstream DB write succeeds
for msg in consumer:
    process_event_idempotently(msg.value)
    consumer.commit()`,
      explanation:
        "Using `student_id` as the partition key preserves per-student event order, while committing offsets after processing avoids silent data loss.",
    },
    commonMistakes: [
      {
        mistake: "Deploying more consumers in a single group than the topic has partitions.",
        correction:
          "Extra consumers sit idle; increase partition count if you need higher consumer-group parallelism.",
      },
      {
        mistake: "Enabling auto-commit before slow downstream processing finishes.",
        correction:
          "If a consumer crashes after auto-commit but before writing to the sink, events are lost.",
      },
    ],
    interviewQuestions: [
      {
        question: "How does Kafka guarantee ordering?",
        answer: "Only within a single partition. To order events for a specific entity, pass that entity's ID as the message key.",
      },
      {
        question: "What happens if a consumer group has 6 consumers and a topic has 4 partitions?",
        answer: "4 consumers each read 1 partition, and 2 consumers remain idle.",
      },
      {
        question: "What is consumer lag?",
        answer: "The difference between the latest produced offset in a partition and the consumer group's last committed offset.",
      },
    ],
    relatedConcepts: [
      "/concepts/data-engineering/etl-vs-elt",
      "/concepts/data-engineering/apache-spark",
      "/concepts/backend/redis-caching-patterns",
    ],
    relatedCourse: {
      title: "Data Engineering Master Course",
      route: "/learning/data-engineering",
      description: "Build real-time ingestion and streaming pipelines with Kafka and CDC.",
    },
    relatedModules: [
      { title: "Data Engineering Module 9: Ingestion & CDC", route: "/learning/data-engineering/ingestion-cdc" },
      { title: "Data Engineering Module 16: Apache Kafka & Streaming", route: "/learning/data-engineering/kafka-streaming" },
    ],
    practiceAction: { label: "Practice Streaming & Kafka Interview", to: "/ai-interview" },
  },
  {
    slug: "apache-spark",
    category: "data-engineering",
    subcategory: "Distributed Compute",
    difficulty: "Advanced",
    readTime: "9 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Apache Spark: Lazy Evaluation, Catalyst Optimizer, Shuffles & Skew",
    metaTitle: "Apache Spark Architecture, Shuffles & Skew | PrepSpaces Concepts",
    description:
      "Master Apache Spark execution: Driver vs Executors, narrow vs wide transformations, Catalyst query optimization, broadcast joins, and handling data skew.",
    keywords: "Apache Spark, Spark shuffle, Catalyst optimizer, broadcast join, data skew, lazy evaluation",
    directAnswer:
      "Apache Spark executes distributed transformations lazily via a DAG optimized by Catalyst and Tungsten, distinguishing cheap narrow transformations (`map`, `filter`) from expensive wide shuffles (`groupBy`, `join`) that redistribute data across cluster nodes.",
    sections: [
      {
        heading: "1. Narrow vs Wide Transformations & Shuffles",
        paragraphs: [
          "Transformations like `filter` and `withColumn` are narrow—each output partition depends on one input partition. Operations like `groupBy` and `join` trigger wide shuffles across the network, writing intermediate files to disk.",
          "Minimizing shuffles via early `filter` pushdown, `broadcast()` joins for small dimension tables, and Adaptive Query Execution (AQE) dramatically speeds up Spark jobs.",
        ],
      },
      {
        heading: "2. Diagnosing & Fixing Data Skew",
        paragraphs: [
          "If 99% of tasks finish in 5 seconds while 1 task runs for 20 minutes, a skewed join/group key (like `null` or a mega-tenant) is overloading one executor.",
          "Enable Spark AQE skew join optimization or salt skewed keys to distribute work evenly across partitions.",
        ],
      },
    ],
    codeExample: {
      title: "Broadcast Hash Join & Early Filter Pushdown in PySpark",
      language: "python",
      code: `from pyspark.sql import functions as F

# Filter large fact table early + broadcast small dimension table
result = (
    events_df
    .filter(F.col("event_date") >= "2026-11-01")
    .join(F.broadcast(courses_df), on="course_id", how="inner")
    .groupBy("category")
    .agg(F.count("*").alias("total_views"))
)`,
      explanation:
        "Filtering before joining shrinks shuffled bytes, and `F.broadcast(courses_df)` replicates the small dimension table to every executor to avoid shuffling `events_df`.",
    },
    commonMistakes: [
      {
        mistake: "Calling `.collect()` on a multi-gigabyte DataFrame.",
        correction:
          "`.collect()` pulls all partitions into the Driver's memory and causes `OutOfMemoryError`; write to Parquet/Delta or use `.take(20)`.",
      },
      {
        mistake: "Writing Python UDFs instead of built-in Spark SQL functions.",
        correction:
          "Python UDFs serialize rows out of the JVM and bypass Catalyst optimization; prefer `pyspark.sql.functions`.",
      },
    ],
    interviewQuestions: [
      {
        question: "What is the difference between a transformation and an action in Spark?",
        answer: "Transformations (`filter`, `select`, `join`) are lazy and build a logical DAG; actions (`count`, `write`, `show`) trigger actual execution.",
      },
      {
        question: "When should you use a broadcast join?",
        answer: "When joining a large fact table with a small dimension table that fits comfortably in executor memory, eliminating a costly shuffle of the large table.",
      },
      {
        question: "How do you fix data skew in Spark?",
        answer: "Filter/handle skew keys (like `null`), use broadcast joins where applicable, enable AQE (`spark.sql.adaptive.skewJoin.enabled`), or apply key salting.",
      },
    ],
    relatedConcepts: [
      "/concepts/data-engineering/data-lakehouse",
      "/concepts/data-engineering/apache-kafka",
      "/concepts/data-engineering/etl-vs-elt",
    ],
    relatedCourse: {
      title: "Data Engineering Master Course",
      route: "/learning/data-engineering",
      description: "Process terabyte-scale datasets with PySpark, Catalyst, and Lakehouse formats.",
    },
    relatedModules: [
      { title: "Data Engineering Module 11: Distributed Data Processing with Spark", route: "/learning/data-engineering/spark-processing" },
      { title: "Data Engineering Module 15: Distributed Systems for Data Engineers", route: "/learning/data-engineering/distributed-systems" },
    ],
    practiceAction: { label: "Practice Apache Spark Interview", to: "/ai-interview" },
  },
  {
    slug: "dimensional-modeling",
    category: "data-engineering",
    subcategory: "Data Modeling",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Dimensional Modeling: Star Schema, Fact/Dimension Tables & SCD Type 2",
    metaTitle: "Dimensional Modeling: Star Schema & SCD Type 2 | PrepSpaces Concepts",
    description:
      "Master Kimball dimensional modeling: grain definition, fact vs dimension tables, Star vs Snowflake schemas, and Slowly Changing Dimensions (SCD Type 2).",
    keywords: "Dimensional Modeling, Star Schema, Fact Table, Dimension Table, SCD Type 2, Kimball",
    directAnswer:
      "Dimensional modeling structures analytical warehouses into Star Schemas—central Fact tables storing measurable events at a clear grain, surrounded by descriptive Dimension tables—using Slowly Changing Dimensions (SCD Type 2) to preserve historical attribute changes accurately.",
    sections: [
      {
        heading: "1. Defining Grain, Facts & Dimensions",
        paragraphs: [
          "Fact tables store quantitative measurements and foreign keys (e.g. `fact_lesson_completions` at one row per student-lesson completion), while Dimension tables store descriptive context (`dim_student`, `dim_course`, `dim_date`).",
          "Star Schemas keep dimensions denormalized for fast, single-hop `JOIN`s in BI tools, whereas Snowflake Schemas normalize dimensions into sub-tables.",
        ],
      },
      {
        heading: "2. Slowly Changing Dimensions (SCD Type 1 vs Type 2)",
        paragraphs: [
          "SCD Type 1 overwrites old attributes in place (good for typo fixes, loses history). SCD Type 2 inserts a new versioned row with `effective_from`, `effective_to`, and `is_current` flags so historical reports reflect the attribute state at the time of the event.",
        ],
      },
    ],
    codeExample: {
      title: "Star Schema Query Joining Fact Completions with SCD Type 2 Dimension",
      language: "sql",
      code: `SELECT
  c.category,
  COUNT(*) AS completions,
  SUM(f.duration_minutes) AS total_minutes
FROM analytics.fact_lesson_completions f
JOIN analytics.dim_course c
  ON f.course_sk = c.course_sk
JOIN analytics.dim_date d
  ON f.date_sk = d.date_sk
WHERE d.year_month = '2026-11'
GROUP BY c.category;`,
      explanation:
        "Joining through surrogate keys (`course_sk`) links each historical fact record to the exact version of the course dimension valid at that time.",
    },
    commonMistakes: [
      {
        mistake: "Mixing two different grains inside the same Fact table.",
        correction:
          "Declare one unambiguous grain per fact table before adding any columns or metrics.",
      },
      {
        mistake: "Using natural business keys instead of surrogate keys in SCD Type 2 dimensions.",
        correction:
          "An SCD Type 2 entity has multiple historical rows per natural ID; use a unique surrogate key (`course_sk`) per version.",
      },
    ],
    interviewQuestions: [
      {
        question: "What is the difference between SCD Type 1 and SCD Type 2?",
        answer: "Type 1 overwrites old values in place without history; Type 2 inserts a new row with effective timestamps to preserve full historical state.",
      },
      {
        question: "Why are Star Schemas preferred over 3NF normalized schemas in analytics?",
        answer: "Star schemas minimize join depth and simplify SQL queries for BI tools and analysts.",
      },
      {
        question: "What does 'grain' mean in a Fact table?",
        answer: "The exact level of detail represented by a single row (e.g., one row per order line item).",
      },
    ],
    relatedConcepts: [
      "/concepts/data-engineering/etl-vs-elt",
      "/concepts/data-engineering/data-lakehouse",
      "/concepts/backend/database-indexing-acid",
    ],
    relatedCourse: {
      title: "Data Engineering Master Course",
      route: "/learning/data-engineering",
      description: "Design analytical Star Schemas, warehouses, and dbt models.",
    },
    relatedModules: [
      { title: "Data Engineering Module 4: Data Modeling & Database Design", route: "/learning/data-engineering/data-modeling" },
      { title: "Data Engineering Module 7: Data Warehousing & Analytical Systems", route: "/learning/data-engineering/data-warehousing" },
    ],
    practiceAction: { label: "Practice Data Modeling Interview", to: "/ai-interview" },
  },
  {
    slug: "data-lakehouse",
    category: "data-engineering",
    subcategory: "Storage & Lakehouse",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Data Lakehouse Architecture: Parquet, Apache Iceberg & Delta Lake",
    metaTitle: "Data Lakehouse, Parquet & Apache Iceberg | PrepSpaces Concepts",
    description:
      "Understand how Data Lakehouses combine low-cost object storage and columnar Parquet files with ACID transactions, time travel, and schema evolution via Apache Iceberg and Delta Lake.",
    keywords: "Data Lakehouse, Apache Iceberg, Delta Lake, Apache Parquet, ACID transactions, time travel",
    directAnswer:
      "A Data Lakehouse brings warehouse ACID transactions, schema evolution, and time-travel versioning directly onto low-cost cloud object storage (S3/GCS/ADLS) using open table formats like Apache Iceberg or Delta Lake layered over columnar Parquet files.",
    sections: [
      {
        heading: "1. Why Data Lakes Needed Open Table Formats",
        paragraphs: [
          "Traditional data lakes dumped raw Parquet/CSV files into S3 directories, suffering from partial write failures, no ACID `UPDATE`/`DELETE` support, slow directory listings, and schema drift.",
          "Open table formats (Apache Iceberg, Delta Lake) maintain an atomic metadata transaction log over Parquet files, enabling concurrent readers/writers, snapshot time travel, and hidden partitioning.",
        ],
      },
      {
        heading: "2. Columnar Parquet & Compaction",
        paragraphs: [
          "Apache Parquet stores data column-by-column with dictionary/run-length encoding and min/max row-group statistics, letting engines skip 90%+ of irrelevant data.",
          "Run periodic compaction jobs (`OPTIMIZE`) to merge thousands of tiny streaming files into ~128–512 MB Parquet files.",
        ],
      },
    ],
    codeExample: {
      title: "Apache Iceberg Time Travel & Schema Evolution SQL",
      language: "sql",
      code: `-- Query table as it existed at a historical snapshot
SELECT count(*)
FROM lakehouse.course_events
FOR SYSTEM_TIME AS OF '2026-11-26 12:00:00';

-- Safe metadata-only schema evolution
ALTER TABLE lakehouse.course_events
ADD COLUMN device_type STRING;`,
      explanation:
        "Iceberg tracks immutable snapshots in metadata, allowing point-in-time queries and zero-rewrite column additions.",
    },
    commonMistakes: [
      {
        mistake: "Allowing streaming jobs to create millions of 10 KB Parquet files.",
        correction:
          "Schedule regular file compaction (`OPTIMIZE`) and `VACUUM` old snapshots to avoid metadata and S3 listing bottlenecks.",
      },
      {
        mistake: "Partitioning by high-cardinality columns like `user_id`.",
        correction:
          "Partition by coarse dimensions like `event_date` or Iceberg bucketing to avoid tiny-file explosion.",
      },
    ],
    interviewQuestions: [
      {
        question: "What problem do Apache Iceberg and Delta Lake solve on top of S3 + Parquet?",
        answer: "They add ACID transactions, snapshot isolation, schema enforcement/evolution, and time travel to immutable object storage.",
      },
      {
        question: "Why is the 'small files problem' harmful in data lakes?",
        answer: "Opening thousands of tiny files wastes S3 API calls, metadata memory, and Spark task scheduling overhead.",
      },
      {
        question: "How does Parquet predicate pushdown skip data?",
        answer: "Engines inspect min/max column statistics in Parquet file footers and skip entire row groups that cannot match the `WHERE` filter.",
      },
    ],
    relatedConcepts: [
      "/concepts/data-engineering/apache-spark",
      "/concepts/data-engineering/etl-vs-elt",
      "/concepts/cloud/s3-ebs-efs-storage",
    ],
    relatedCourse: {
      title: "Data Engineering Master Course",
      route: "/learning/data-engineering",
      description: "Architect modern Lakehouse tables with Parquet, Iceberg, Delta Lake, and Spark.",
    },
    relatedModules: [
      { title: "Data Engineering Module 6: Data Formats & Serialization", route: "/learning/data-engineering/data-formats" },
      { title: "Data Engineering Module 8: Data Lakes & Lakehouse Architecture", route: "/learning/data-engineering/lakehouse" },
    ],
    practiceAction: { label: "Practice Lakehouse Architecture Interview", to: "/ai-interview" },
  },
  {
    slug: "apache-airflow-dbt",
    category: "data-engineering",
    subcategory: "Orchestration & Analytics Engineering",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Apache Airflow DAGs & dbt Analytics Engineering Models",
    metaTitle: "Apache Airflow DAGs & dbt Models Guide | PrepSpaces Concepts",
    description:
      "Learn how Apache Airflow orchestrates Directed Acyclic Graphs (DAGs) with retries and backfills while dbt structures modular SQL transformations and tests.",
    keywords: "Apache Airflow, Airflow DAG, dbt models, incremental models, data quality testing, analytics engineering",
    directAnswer:
      "Apache Airflow schedules and monitors end-to-end pipeline dependencies as Directed Acyclic Graphs (DAGs) with retries and backfills, while dbt (data build tool) brings software engineering practices—modular `SELECT` models, `ref()` lineage, incremental loads, and automated data tests—to in-warehouse SQL transformations.",
    sections: [
      {
        heading: "1. Airflow DAGs, Operators & Backfills",
        paragraphs: [
          "An Airflow DAG defines tasks and upstream/downstream dependencies without cycles. Keep tasks atomic and idempotent using `logical_date` (`ds`) parameters rather than `datetime.now()` so historical backfills execute deterministically.",
        ],
      },
      {
        heading: "2. dbt Models, ref() Lineage & Automated Tests",
        paragraphs: [
          "In dbt, engineers write `SELECT` statements linked by `{{ ref('stg_orders') }}`, letting dbt infer the execution DAG and generate column/table lineage.",
          "Built-in schema tests (`not_null`, `unique`, `accepted_values`, `relationships`) catch broken upstream data before dashboards refresh.",
        ],
      },
    ],
    codeExample: {
      title: "dbt Incremental Model with Unique Key & ref()",
      language: "sql",
      code: `{{ config(
    materialized='incremental',
    unique_key='completion_id'
) }}

SELECT
  completion_id,
  student_id,
  course_id,
  completed_at
FROM {{ ref('stg_lesson_completions') }}
{% if is_incremental() %}
  WHERE completed_at > (SELECT MAX(completed_at) FROM {{ this }})
{% endif %}`,
      explanation:
        "`ref()` builds dependency lineage automatically, while `is_incremental()` processes only newly arrived rows after the initial table build.",
    },
    commonMistakes: [
      {
        mistake: "Running heavy Pandas/Spark data processing directly inside Airflow worker PythonOperators.",
        correction:
          "Use Airflow as an orchestrator that triggers external compute (Spark, Snowflake, dbt) rather than processing gigabytes inside the scheduler/worker.",
      },
      {
        mistake: "Using `datetime.now()` inside SQL/DAG logic instead of Airflow's execution `ds` date.",
        correction:
          "Using `ds` guarantees deterministic historical backfills.",
      },
    ],
    interviewQuestions: [
      {
        question: "What is a DAG in Apache Airflow?",
        answer: "A Directed Acyclic Graph representing tasks and their execution dependencies with no circular loops.",
      },
      {
        question: "How does `{{ ref() }}` work in dbt?",
        answer: "It resolves the target schema/table name per environment and automatically builds the dependency order between models.",
      },
      {
        question: "Why use incremental materialization in dbt?",
        answer: "To avoid rebuilding multi-billion-row tables from scratch on every run by merging only new or updated records.",
      },
    ],
    relatedConcepts: [
      "/concepts/data-engineering/etl-vs-elt",
      "/concepts/data-engineering/dimensional-modeling",
      "/concepts/data-engineering/data-lakehouse",
    ],
    relatedCourse: {
      title: "Data Engineering Master Course",
      route: "/learning/data-engineering",
      description: "Orchestrate production pipelines with Airflow, dbt, and automated data quality.",
    },
    relatedModules: [
      { title: "Data Engineering Module 12: Workflow Orchestration with Airflow", route: "/learning/data-engineering/airflow-orchestration" },
      { title: "Data Engineering Module 13: Analytics Engineering & dbt", route: "/learning/data-engineering/analytics-engineering-dbt" },
    ],
    practiceAction: { label: "Practice Airflow & dbt Interview", to: "/ai-interview" },
  },
];
