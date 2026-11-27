import React from "react";

export default function BackendCapstoneSections() {
  return (
    <div className="space-y-8">
      {/* Section 1 & 2: Project Overview & System Architecture */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-700">
            Final Capstone Project
          </span>
          <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono text-stone-700">
            Modular Monolith &middot; Java 21 &middot; Spring Boot &middot; PostgreSQL &middot; Redis &middot; RabbitMQ
          </span>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#18181b]">
            1. Understanding the Capstone Project &amp; 2. Complete System Architecture
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600 leading-relaxed">
            Design, build, test, secure, deploy, and document a <strong>Production-Ready Learning Platform Backend API</strong>{" "}
            supporting 100 courses, 1,000 students, 20 administrators, 10,000 lessons, thousands of enrollments, and continuous progress updates.
            Start as a <strong>modular monolith</strong> (one deployable service with cleanly separated business modules) before ever splitting into microservices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
            <h3 className="font-bold text-stone-900 text-sm mb-2">Student (STUDENT) Scope</h3>
            <ul className="text-xs sm:text-sm text-stone-700 space-y-1 list-disc pl-4">
              <li>Register &amp; log in securely with JWT authentication</li>
              <li>Browse, search, and filter published courses with pagination</li>
              <li>Enroll in courses without duplicate enrollments</li>
              <li>Access lessons and track course completion progress</li>
              <li>View in-app &amp; asynchronous enrollment notifications</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
            <h3 className="font-bold text-stone-900 text-sm mb-2">Administrator (ADMIN) Scope</h3>
            <ul className="text-xs sm:text-sm text-stone-700 space-y-1 list-disc pl-4">
              <li>Create, update, publish, and archive/soft-delete courses</li>
              <li>Manage modules and lessons within courses</li>
              <li>Review platform enrollments and course progress</li>
              <li>Manage users and monitor application health &amp; metrics</li>
              <li>Invalidate Redis caches cleanly on course updates</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
          <div className="text-orange-400 font-bold mb-2">System Component Architecture</div>
          <pre className="whitespace-pre-wrap leading-relaxed">{`Frontend / Mobile Clients (Students & Admins)
  └── HTTPS / Reverse Proxy (TLS, routing, traffic controls)
        └── Spring Boot Backend API (Modular Monolith)
              ├── Auth, User, Course, Enrollment, Progress, Search, Validation
              ├── PostgreSQL (Primary Source of Truth + Flyway Migrations)
              ├── Redis (Cache-Aside Course Reads + Distributed Rate Limiting)
              ├── RabbitMQ + Outbox Publisher -> Notification Worker (Email / In-App)
              └── Observability (Structured JSON Logs · Micrometer/Prometheus · OpenTelemetry)`}</pre>
        </div>
      </section>

      {/* Section 3 - 6: Core Requirements 01-04 */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#18181b]">
          3&ndash;6. Core Functional Requirements (Auth, RBAC, Courses, Enrollment &amp; Progress)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-stone-200 p-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-600">Requirement 01 &middot; Auth</div>
            <h3 className="font-bold text-stone-900">Registration &amp; JWT Authentication</h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Validate registration payloads, enforce unique email, hash passwords with <code>BCryptPasswordEncoder</code> / Argon2id,
              and always assign <code>STUDENT</code> server-side (never trust client-supplied roles). Issue short-lived Bearer JWTs and address refresh rotation, revocation, and login abuse protection.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 p-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-600">Requirement 02 &middot; RBAC &amp; Ownership</div>
            <h3 className="font-bold text-stone-900">Role-Based &amp; Object-Level Access</h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Use <code>@EnableMethodSecurity</code> and <code>@PreAuthorize(&quot;hasRole(&apos;ADMIN&apos;)&quot;)</code> / <code>hasRole(&apos;STUDENT&apos;)</code>.
              Derive the student identity from <code>@AuthenticationPrincipal</code> and enforce object ownership checks (BOLA protection) so students cannot view or modify another student&apos;s progress.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 p-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-600">Requirement 03 &middot; Courses</div>
            <h3 className="font-bold text-stone-900">Course DTOs &amp; Lifecycle</h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Never bind JPA entities directly to request/response payloads. Use explicit <code>CreateCourseRequest</code> and <code>CourseResponse</code> records,
              enforce draft vs. published visibility rules, and prefer soft-delete/archiving to preserve historical student records.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 p-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-600">Requirement 04 &middot; Enrollment &amp; Progress</div>
            <h3 className="font-bold text-stone-900">Atomic Enrollment &amp; Completion</h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Enforce <code>UNIQUE (student_id, course_id)</code> on <code>enrollments</code> and <code>UNIQUE (enrollment_id, lesson_id)</code> on <code>lesson_progress</code>.
              Execute enrollment + outbox event inside <code>@Transactional</code>, translate unique constraint conflicts into <code>409 Conflict</code>, and compute progress consistently as <code>(Completed Lessons / Total Lessons) &times; 100</code>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 - 10: DB, Pagination, Redis, Async Outbox */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#18181b]">
          7&ndash;10. Data Integrity, Pagination, Redis Caching &amp; Transactional Outbox
        </h2>

        <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
          <div className="text-orange-400 font-bold mb-2">Relational Schema &amp; Cardinality</div>
          <pre className="whitespace-pre-wrap leading-relaxed">{`User 1 ──────── N Enrollment       Course 1 ────── N Module 1 ────── N Lesson
Course 1 ────── N Enrollment       Enrollment 1 ── N LessonProgress ── 1 Lesson
User 1 ──────── N Notification     OutboxEvents (Transactional event staging for RabbitMQ)`}</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 space-y-1.5">
            <h3 className="font-bold text-stone-900 text-sm">Req 06: Pagination &amp; Search</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Validate <code>page &ge; 0</code> and <code>1 &le; size &le; 100</code>, allowlist sort fields, filter in PostgreSQL (Specifications/indexed queries), and consider cursor pagination for large feeds.
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 space-y-1.5">
            <h3 className="font-bold text-stone-900 text-sm">Req 07: Redis Cache-Aside</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Cache published course details &amp; public listings with TTLs using <code>@Cacheable</code>; evict affected course and list entries on admin updates via <code>@CacheEvict</code>. Never cache secrets or raw auth tokens as course cache.
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 space-y-1.5">
            <h3 className="font-bold text-stone-900 text-sm">Req 08: Outbox + RabbitMQ</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Avoid the dual-write problem: persist <code>enrollments</code> and <code>outbox_events</code> in the same PostgreSQL transaction. Publish with broker confirms and build idempotent consumers with retries + DLQ.
            </p>
          </div>
        </div>
      </section>

      {/* Section 11 - 16: Validation, Security, Testing, OpenAPI, Docker, Observability */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#18181b]">
          11&ndash;16. Validation, Security, Testing, OpenAPI, Docker &amp; Observability
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-stone-500 uppercase text-[11px]">
                <th className="py-2.5 pr-4">Requirement</th>
                <th className="py-2.5 pr-4">Implementation Standard</th>
                <th className="py-2.5">Completion Criteria</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700">
              <tr>
                <td className="py-2.5 pr-4 font-semibold">09. Validation &amp; Errors</td>
                <td className="py-2.5 pr-4">Jakarta Bean Validation + <code>@RestControllerAdvice</code> + <code>ProblemDetail</code></td>
                <td className="py-2.5">Consistent 400/401/403/404/409/429/500 format with zero leaked stack traces</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-semibold">10. Security &amp; Rate Limiting</td>
                <td className="py-2.5 pr-4">BOLA/BFLA checks, parameterized SQL, CORS allowlist, Redis rate limiter</td>
                <td className="py-2.5">Distributed <code>429 Too Many Requests</code> across instances &amp; OWASP API Top 10 coverage</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-semibold">11. Automated Testing</td>
                <td className="py-2.5 pr-4">JUnit 5, Mockito, MockMvc/REST Assured, Testcontainers (PG, Redis, RabbitMQ)</td>
                <td className="py-2.5">Unit, integration, security, cache, async DLQ, and concurrent enrollment tests</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-semibold">12. OpenAPI Docs</td>
                <td className="py-2.5 pr-4"><code>springdoc-openapi</code> (<code>/swagger-ui.html</code>, <code>/v3/api-docs</code>)</td>
                <td className="py-2.5">Bearer auth scheme, roles, pagination, and ProblemDetail schemas documented</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-semibold">13. Docker Deployment</td>
                <td className="py-2.5 pr-4">Versioned multi-stage images + <code>compose.yaml</code> + CI smoke tests</td>
                <td className="py-2.5">Reproducible containers, Flyway migrations, rolling/blue-green &amp; rollback plan</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-semibold">14. Observability</td>
                <td className="py-2.5 pr-4">Actuator liveness/readiness, Micrometer/Prometheus, JSON logs, OpenTelemetry</td>
                <td className="py-2.5">Dashboards for RPS, 4xx/5xx, p95/p99 latency, DB pool, cache hits, queue depth</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 17 - 25: API Inventory, Deliverables & Evaluation */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#18181b]">
          17&ndash;25. API Inventory, Final Deliverables &amp; Evaluation Criteria
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">7 Required Engineering Deliverables</h3>
            <ol className="text-xs sm:text-sm text-stone-700 space-y-1 list-decimal pl-4">
              <li>Working Java 21 + Spring Boot modular monolith source code</li>
              <li>Database design (ER diagram, constraints, indexes, Flyway scripts)</li>
              <li>OpenAPI / Swagger UI documentation &amp; error contracts</li>
              <li>Automated test suite (unit, integration, security, concurrency)</li>
              <li>Deployment instructions (Dockerfile, Compose, env vars, rollback)</li>
              <li>Observability documentation (logs, metrics, traces, alerts)</li>
              <li>Technical architecture report explaining key trade-offs</li>
            </ol>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-5 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">Capstone Evaluation Breakdown (100%)</h3>
            <ul className="text-xs sm:text-sm text-stone-700 space-y-1">
              <li><strong>10% each:</strong> Architecture &amp; structure, DB &amp; transactions, AuthN &amp; AuthZ, Course &amp; enrollment, API security &amp; rate limiting, Automated testing</li>
              <li><strong>5% each:</strong> Progress tracking, Pagination/filtering/search, Redis caching, Async notifications, Validation &amp; errors, OpenAPI docs, Docker &amp; observability, Technical docs</li>
            </ul>
            <p className="text-xs text-stone-600 pt-1">
              <strong>Core principle:</strong> A production-ready learning platform is a complete system where security, consistency, performance, testing, deployment, and observability work together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
