import React from "react";

export default function BackendCachingAsyncSections() {
  return (
    <div className="space-y-10">
      {/* MODULE OVERVIEW */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Core Module &bull; 12 Lessons &bull; Practical Lab + Assignment
          </span>
          <span className="text-xs font-mono text-stone-500">Module 07</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 07 &mdash; Caching, Asynchronous Processing and Messaging
        </h2>
        <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>
            Performing every operation synchronously inside an HTTP request makes applications slow and hard to scale. Using <strong>Java, Spring Boot, Redis, RabbitMQ, PostgreSQL, Spring AMQP, and Apache Kafka</strong>, this module teaches how to cache hot data in Redis, offload long-running work to background workers, build event-driven systems, manage cache invalidation, and handle retries, DLQs, and duplicate events reliably.
          </p>
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs sm:text-sm text-stone-800">
            <strong>Final Objective:</strong> Design and implement a high-performance backend that combines Redis caching, asynchronous task execution, message queues, and reliable event processing to support a growing platform like PrepSpaces.
          </div>
        </div>
      </section>

      {/* LESSONS 1-3: SYNC VS ASYNC, BACKGROUND JOBS & MESSAGE BROKERS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Lessons 1&ndash;3</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">1. Sync vs Async, 2. Background Jobs &amp; 3. Message Brokers</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Keep immediate operations (auth, validation, DB writes) synchronous, and offload emails, report generation, AI evaluations, and analytics to asynchronous workers (returning <code className="font-mono bg-stone-100 px-1 rounded">202 Accepted</code> with a <code className="font-mono bg-stone-100 px-1 rounded">jobId</code>). Use bounded thread pools for <code className="font-mono bg-stone-100 px-1 rounded">@Async</code> and distributed coordination (<strong>ShedLock</strong> or <strong>Quartz</strong>) for <code className="font-mono bg-stone-100 px-1 rounded">@Scheduled</code> tasks across multiple instances.
          </p>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Feature</th>
                  <th className="p-3">RabbitMQ</th>
                  <th className="p-3">Apache Kafka</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Primary model</td><td className="p-3">Message broker (exchanges, routing keys, task queues)</td><td className="p-3">Distributed event log (topics, partitions)</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Retention &amp; Replay</td><td className="p-3">Often removed after ACK</td><td className="p-3">Retained by policy; supports replay</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Common workloads</td><td className="p-3">Notifications, background task processing</td><td className="p-3">Event streaming, analytics pipelines</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* LESSONS 4-5: EVENT-DRIVEN ARCHITECTURE & PRODUCER/CONSUMER */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Lessons 4&ndash;5</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">4. Event-Driven Architecture &amp; 5. Producer/Consumer Patterns</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            An <strong>event</strong> (<code className="font-mono bg-stone-100 px-1 rounded">StudentEnrolled</code>) announces a completed fact so Notification, Analytics, Recommendation, and Audit consumers can react independently under <strong>eventual consistency</strong>, unlike a <strong>command</strong> (<code className="font-mono bg-stone-100 px-1 rounded">SendEnrollmentConfirmation</code>). Scale with competing consumers using <code className="font-mono bg-stone-100 px-1 rounded">RabbitTemplate</code> and <code className="font-mono bg-stone-100 px-1 rounded">@RabbitListener</code> while respecting downstream rate limits.
          </p>
        </div>
      </section>

      {/* LESSONS 6-9: REDIS, CACHING STRATEGIES, INVALIDATION & CONSISTENCY */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Lessons 6&ndash;9</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">6. Redis, 7. Caching Strategies, 8. Invalidation &amp; 9. Consistency</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Redis provides in-memory <strong>Strings, Hashes, Lists, Sets, Sorted Sets, Streams, and Pub/Sub</strong> with TTL expiration (<code className="font-mono bg-stone-100 px-1 rounded">EX 300</code>) and RDB/AOF persistence. Use <strong>Cache-Aside</strong> (<code className="font-mono bg-stone-100 px-1 rounded">@Cacheable</code> + <code className="font-mono bg-stone-100 px-1 rounded">@CacheEvict</code>) for read-heavy course catalogs, avoiding Write-Behind for critical enrolments/payments.
          </p>
          <p>
            Manage stale data with TTLs, post-commit cache invalidation, and event-driven invalidation (solving the <strong>dual-write problem</strong>). Prevent <strong>cache stampedes</strong> (jittered TTL, single-flight/coalescing, distributed locks) and <strong>cache penetration</strong> (validation, negative caching), and choose eviction policies like <code className="font-mono bg-stone-100 px-1 rounded">allkeys-lru</code> or <code className="font-mono bg-stone-100 px-1 rounded">allkeys-lfu</code>.
          </p>
        </div>
      </section>

      {/* LESSONS 10-12: RETRY/DLQ, DUPLICATE EVENTS & RELIABLE WORKERS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Lessons 10&ndash;12</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">10. Retry &amp; Dead-Letter Queues, 11. Duplicate Events &amp; 12. Reliable Tasks</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Route transient delivery failures through delayed <strong>retry queues</strong> and isolate poison messages in a <strong>Dead-Letter Queue (DLQ)</strong> after max attempts. Under at-least-once broker delivery, build <strong>idempotent consumers</strong> backed by a <code className="font-mono bg-stone-100 px-1 rounded">processed_events(event_id, consumer_name)</code> unique constraint. Track long-running jobs in <code className="font-mono bg-stone-100 px-1 rounded">background_jobs</code>, enforce backpressure, and coordinate DB writes + broker events via the <strong>Transactional Outbox Pattern</strong>.
          </p>
        </div>
      </section>

      {/* PRACTICAL LAB & ASSIGNMENT */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold">Practical Lab &amp; Assignment</span>
          <span className="text-xs text-stone-500 font-mono">Redis + RabbitMQ + Outbox + DLQ</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
          Async Notification System with Cache-Backed API (Lab) &amp; Platform Caching Assignment
        </h2>
        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Build a PostgreSQL + Redis + RabbitMQ notification and course-catalog platform with <code className="font-mono bg-stone-100 px-1 rounded">Outbox Events</code>, <code className="font-mono bg-stone-100 px-1 rounded">Processed Events</code>, <code className="font-mono bg-stone-100 px-1 rounded">Notifications</code>, <code className="font-mono bg-stone-100 px-1 rounded">@Cacheable</code>/<code className="font-mono bg-stone-100 px-1 rounded">@CacheEvict</code>, retry/DLQ handling, ShedLock distributed scheduling, and benchmark comparisons (without cache vs Redis cache vs async workers).
          </p>
        </div>
      </section>
    </div>
  );
}
