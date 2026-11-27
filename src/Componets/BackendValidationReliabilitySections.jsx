import React from "react";

export default function BackendValidationReliabilitySections() {
  return (
    <div className="space-y-10">
      {/* MODULE OVERVIEW */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Core Module &bull; 12 Lessons &bull; Practical Lab + Assignment
          </span>
          <span className="text-xs font-mono text-stone-500">Module 06</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 06 &mdash; API Validation, Error Handling and Reliability
        </h2>
        <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>
            A professional backend must behave predictably when users submit invalid data, click Enrol five times, flood endpoints with traffic, or when databases and external AI/payment providers fail. Using <strong>Java, Spring Boot, Spring Validation, PostgreSQL, Redis, and Resilience4j</strong>, this module teaches layered validation, RFC 9457 error responses, idempotency, rate limiting, timeouts, retries, circuit breakers, partial-failure recovery, and API compatibility.
          </p>
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs sm:text-sm text-stone-800">
            <strong>Final Objective:</strong> Transform a basic REST API into a predictable, maintainable, and resilient backend service that handles both normal operations and unexpected failures reliably.
          </div>
        </div>
      </section>

      {/* LESSONS 1-3: VALIDATION, SANITIZATION & DTO VALIDATION */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Lessons 1&ndash;3</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">1. Request Validation, 2. Input Sanitization &amp; 3. DTO Validation</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Validate across every layer: <strong>API</strong> (request structure), <strong>DTO</strong> (<code className="font-mono bg-stone-100 px-1 rounded">@Valid</code> with Jakarta Bean Validation: <code className="font-mono bg-stone-100 px-1 rounded">@NotNull</code>, <code className="font-mono bg-stone-100 px-1 rounded">@NotBlank</code>, <code className="font-mono bg-stone-100 px-1 rounded">@Size</code>, <code className="font-mono bg-stone-100 px-1 rounded">@Email</code>, <code className="font-mono bg-stone-100 px-1 rounded">@Positive</code>, <code className="font-mono bg-stone-100 px-1 rounded">@Pattern</code>), <strong>Service</strong> (business rules), and <strong>Database</strong> (integrity constraints).
          </p>
          <p>
            <strong>Validation</strong> rejects unacceptable inputs; <strong>sanitization</strong> transforms permitted input safely (such as stripping unsafe HTML from rich descriptions). Defend against SQL injection with parameterized queries and against XSS with contextual output encoding and CSP. Validate file uploads by size, magic bytes/content, and storage path&mdash;not just filename extensions.
          </p>
        </div>
      </section>

      {/* LESSONS 4-6: GLOBAL EXCEPTION HANDLING, RFC 9457 & BUSINESS VALIDATION */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Lessons 4&ndash;6</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">4. Global Exception Handling, 5. RFC 9457 Errors &amp; 6. Business Validation</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Centralize error handling with <code className="font-mono bg-stone-100 px-1 rounded">@RestControllerAdvice</code> and <code className="font-mono bg-stone-100 px-1 rounded">@ExceptionHandler</code>, returning standardized <strong>RFC 9457 Problem Details</strong> (<code className="font-mono bg-stone-100 px-1 rounded">ProblemDetail</code> with <code className="font-mono bg-stone-100 px-1 rounded">type</code>, <code className="font-mono bg-stone-100 px-1 rounded">title</code>, <code className="font-mono bg-stone-100 px-1 rounded">status</code>, <code className="font-mono bg-stone-100 px-1 rounded">detail</code>, <code className="font-mono bg-stone-100 px-1 rounded">instance</code>, <code className="font-mono bg-stone-100 px-1 rounded">errorCode</code>, <code className="font-mono bg-stone-100 px-1 rounded">traceId</code>, and <code className="font-mono bg-stone-100 px-1 rounded">fieldErrors</code>). Never expose stack traces or raw SQL errors.
          </p>
          <p>
            Separate <strong>DTO validation</strong> (is <code className="font-mono bg-stone-100 px-1 rounded">courseId</code> a positive number?) from <strong>business validation</strong> (does the course exist, is it active, are seats available, is the student already enrolled?) backed by domain exceptions and database unique constraints.
          </p>
        </div>
      </section>

      {/* LESSONS 7-8: IDEMPOTENCY & RATE LIMITING */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Lessons 7&ndash;8</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">7. Idempotency &amp; 8. Distributed Rate Limiting</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Use an <code className="font-mono bg-stone-100 px-1 rounded">Idempotency-Key</code> header paired with an <code className="font-mono bg-stone-100 px-1 rounded">idempotency_records</code> table (<code className="font-mono bg-stone-100 px-1 rounded">idempotency_key</code>, <code className="font-mono bg-stone-100 px-1 rounded">request_hash</code>, <code className="font-mono bg-stone-100 px-1 rounded">status</code>, <code className="font-mono bg-stone-100 px-1 rounded">response_status</code>, <code className="font-mono bg-stone-100 px-1 rounded">response_body</code>) so network retries return the original response instead of creating duplicate enrolments or charges. Reject key reuse if <code className="font-mono bg-stone-100 px-1 rounded">request_hash</code> differs.
          </p>
          <p>
            Protect APIs with <strong>Rate Limiting</strong> (Fixed Window, Sliding Window Log/Counter, <strong>Token Bucket</strong>, Leaky Bucket) backed by <strong>Redis</strong> across multiple backend instances, returning <code className="font-mono bg-stone-100 px-1 rounded">429 Too Many Requests</code> with <code className="font-mono bg-stone-100 px-1 rounded">Retry-After</code>. Configure trusted proxies so attackers cannot spoof IP headers.
          </p>
        </div>
      </section>

      {/* LESSONS 9-12: TIMEOUTS, RETRIES, CIRCUIT BREAKER, PARTIAL FAILURES & COMPATIBILITY */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Lessons 9&ndash;12</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">9. Timeouts &amp; Retries, 10. Circuit Breakers, 11. Partial Failures &amp; 12. Compatibility</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Configure connection/read/write timeouts and end-to-end deadlines. Retry only transient failures using <strong>exponential backoff with jitter</strong> (Resilience4j <code className="font-mono bg-stone-100 px-1 rounded">Retry</code>) to prevent retry storms, and never retry 400/401/403 or non-idempotent requests without idempotency keys.
          </p>
          <p>
            Use a <strong>Circuit Breaker</strong> (<strong>Closed</strong> &rarr; <strong>Open</strong> &rarr; <strong>Half-Open</strong>) via Resilience4j to fail fast when downstream providers are down. Handle partial failures across services with the <strong>Saga Pattern</strong> (compensating actions) and the <strong>Transactional Outbox Pattern</strong> (saving business data + outbox event in one DB transaction, with idempotent consumers and Dead-Letter Queues). Maintain backward compatibility with URI versioning (<code className="font-mono bg-stone-100 px-1 rounded">/api/v1</code>), <code className="font-mono bg-stone-100 px-1 rounded">Deprecation</code>/<code className="font-mono bg-stone-100 px-1 rounded">Sunset</code> headers, and contract tests.
          </p>
        </div>
      </section>

      {/* PRACTICAL LAB & ASSIGNMENT */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold">Practical Lab &amp; Assignment</span>
          <span className="text-xs text-stone-500 font-mono">Resilience4j + Redis + RFC 9457 + Outbox</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
          Make an Existing API Reliable (Lab) &amp; Fault-Tolerant Backend (Assignment)
        </h2>
        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Harden the course-enrolment API across all 9 reliability steps: DTO &amp; business validation, RFC 9457 global exception handling, <code className="font-mono bg-stone-100 px-1 rounded">Idempotency-Key</code> deduplication, Redis distributed rate limiting, timeouts + exponential backoff with jitter, Resilience4j circuit breakers, transactional outbox for notification events, API versioning, and failure-path integration tests with JUnit, Mockito, and Testcontainers.
          </p>
        </div>
      </section>
    </div>
  );
}
