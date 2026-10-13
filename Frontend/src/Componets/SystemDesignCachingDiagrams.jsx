import React, { useState } from "react";

/* -------------------------------------------------------------------------- */
/* 1. MULTI-TIER CACHING TOPOLOGY DIAGRAM                                     */
/* -------------------------------------------------------------------------- */
export function MultiTierCachingDiagram() {
  const [activeTier, setActiveTier] = useState("redis");

  const tiers = {
    browser: {
      title: "1. Browser / Client Cache",
      latency: "< 0.1 ms (Local Disk/RAM)",
      scope: "Private to single client device",
      tech: "HTTP Cache-Control, ETag, IndexedDB, Service Worker",
      bestFor: "Static bundles (JS/CSS), images, non-sensitive public assets",
      risk: "Extremely difficult to invalidate on demand without content hashing / unique filenames",
      color: "border-blue-400 bg-blue-50/60",
      accent: "text-blue-800",
    },
    cdn: {
      title: "2. CDN / Edge Cache",
      latency: "5–20 ms (Geographic Edge POP)",
      scope: "Shared geographically distributed points of presence (Cloudflare, CloudFront)",
      tech: "Anycast routing, s-maxage, Cache-Tags, Brotli compression",
      bestFor: "Public course catalog, video chunks, downloadable lesson PDFs",
      risk: "Cache key poisoning; leaking private student data into shared edge nodes",
      color: "border-emerald-500 bg-emerald-50/60",
      accent: "text-emerald-800",
    },
    gateway: {
      title: "3. Reverse Proxy / Gateway Cache",
      latency: "1–3 ms (VPC Ingress)",
      scope: "Shared ingress layer (NGINX, Envoy, Kong, API Gateway)",
      tech: "Micro-caching (1–5s TTL), HTTP response caching",
      bestFor: "Unauthenticated public API responses, course listings under heavy traffic spikes",
      risk: "Adds operational hop; header forwarding mistakes bypass authorization",
      color: "border-amber-500 bg-amber-50/60",
      accent: "text-amber-800",
    },
    appLocal: {
      title: "4. Application-Local Memory Cache",
      latency: "< 0.5 ms (Node.js Heap)",
      scope: "Private to single container/process instance",
      tech: "In-memory LRU Map (lru-cache, Guava, Caffeine)",
      bestFor: "Static feature flags, JWT public verification keys, hot immutable constants",
      risk: "Multi-instance divergence: 5 containers hold 5 different values; JVM/V8 GC pressure",
      color: "border-stone-500 bg-stone-100",
      accent: "text-stone-800",
    },
    redis: {
      title: "5. Distributed In-Memory Cache (Redis)",
      latency: "1–3 ms (Sub-millisecond engine + VPC RTT)",
      scope: "Shared across all backend application instances",
      tech: "Redis 7.2+ Cluster / Dragonfly, Sentinel, Memcached",
      bestFor: "Course summaries, active sessions, rate-limit token buckets, interview queues",
      risk: "Cache stampede on expiry; network latency; memory limits require eviction tuning",
      color: "border-orange-500 bg-orange-50/60",
      accent: "text-orange-800",
    },
    dbBuffer: {
      title: "6. Database Buffer Pool",
      latency: "0.1–1 ms (Postgres shared_buffers RAM)",
      scope: "Internal to PostgreSQL instance",
      tech: "PostgreSQL shared_buffers, Linux OS page cache",
      bestFor: "Recently accessed table heap blocks and B-tree index pages",
      risk: "Does not eliminate query parsing, planning, locking, or serialization overhead",
      color: "border-purple-500 bg-purple-50/60",
      accent: "text-purple-800",
    },
  };

  const current = tiers[activeTier];

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
            End-to-End Latency Topology
          </span>
          <h4 className="font-bold text-stone-900 text-sm">The 6 Caching Layers in Modern Systems</h4>
        </div>
        <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl overflow-x-auto [scrollbar-width:none]">
          {Object.keys(tiers).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTier(key)}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTier === key
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {key === "browser" ? "1. Browser" : key === "cdn" ? "2. CDN" : key === "gateway" ? "3. Gateway" : key === "appLocal" ? "4. App Local" : key === "redis" ? "5. Redis" : "6. DB Buffer"}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Pipeline Flow */}
      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 mb-4">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-sm rounded-xl border border-stone-300 bg-white p-2.5 text-center shadow-xs">
            <span className="text-[10px] font-mono font-bold text-stone-400 uppercase block">Client Request</span>
            <span className="text-xs font-bold text-stone-900">Student Browser or Mobile App</span>
          </div>

          <div className="my-1.5 text-stone-400 font-mono text-[11px]">↓ Ingress &amp; Caching Pipeline</div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 w-full text-center">
            {Object.entries(tiers).map(([k, t]) => {
              const isSelected = activeTier === k;
              return (
                <button
                  key={k}
                  onClick={() => setActiveTier(k)}
                  className={`p-2.5 rounded-xl border transition cursor-pointer text-center ${
                    isSelected
                      ? "border-orange-500 bg-white ring-2 ring-orange-400/40 shadow-xs"
                      : "border-stone-200 bg-white/70 hover:bg-white"
                  }`}
                >
                  <span className="text-[10px] font-mono text-stone-400 block truncate">{t.latency}</span>
                  <span className="text-xs font-bold text-stone-900 block mt-0.5 truncate">{t.title.split(". ")[1]}</span>
                </button>
              );
            })}
          </div>

          <div className="my-1.5 text-stone-400 font-mono text-[11px]">↓ Authoritative Persistence</div>

          <div className="w-full max-w-sm rounded-xl border-2 border-stone-700 bg-white p-2.5 text-center shadow-xs">
            <span className="text-[10px] font-mono font-bold text-orange-600 uppercase block">System of Record</span>
            <span className="text-xs font-bold text-stone-900">PostgreSQL Primary Database (Disk + WAL)</span>
          </div>
        </div>
      </div>

      {/* Selected Tier Inspection Card */}
      <div className={`rounded-xl border p-4 ${current.color}`}>
        <div className="flex justify-between items-center mb-1.5">
          <h5 className={`font-bold text-sm ${current.accent}`}>{current.title}</h5>
          <span className="text-xs font-mono font-bold bg-white px-2 py-0.5 rounded border border-stone-200 text-stone-800">
            Latency: {current.latency}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mt-2">
          <div>
            <span className="font-bold text-stone-800 block text-[11px]">Scope &amp; Technology:</span>
            <span className="text-stone-600 block">{current.scope}</span>
            <span className="font-mono text-[10px] text-stone-500 bg-white/80 p-1 rounded border border-stone-200 block mt-1">
              {current.tech}
            </span>
          </div>
          <div>
            <span className="font-bold text-emerald-800 block text-[11px]">Best Suited Workload:</span>
            <span className="text-stone-700 block mb-1">{current.bestFor}</span>
            <span className="font-bold text-rose-800 block text-[11px]">Architectural Hazard:</span>
            <span className="text-stone-700 block">{current.risk}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. CACHE-ASIDE READ & WRITE LIFECYCLE DIAGRAM                              */
/* -------------------------------------------------------------------------- */
export function CacheAsideLifecycleDiagram() {
  const [flowMode, setFlowMode] = useState("read-miss");

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
            Core Design Pattern
          </span>
          <h4 className="font-bold text-stone-900 text-sm">Cache-Aside (Lazy Loading) Execution Flow</h4>
        </div>
        <div className="flex gap-1.5 bg-stone-100 p-1 rounded-xl">
          <button
            onClick={() => setFlowMode("read-hit")}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              flowMode === "read-hit" ? "bg-[#f97316] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Read Hit (Fast Path)
          </button>
          <button
            onClick={() => setFlowMode("read-miss")}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              flowMode === "read-miss" ? "bg-[#f97316] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Read Miss (Fallback)
          </button>
          <button
            onClick={() => setFlowMode("write")}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              flowMode === "write" ? "bg-[#f97316] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Write / Invalidate
          </button>
        </div>
      </div>

      {flowMode === "read-hit" && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-emerald-950 text-sm">Scenario: Cache Hit (95% of Production Traffic)</span>
            <span className="text-xs font-mono bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">~2 ms</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
            <div className="p-3 bg-white rounded-lg border border-emerald-200 text-center">
              <span className="text-stone-400 block text-[10px]">Step 1</span>
              <span className="font-bold text-stone-900">App queries Redis</span>
              <span className="text-emerald-700 text-[10px] block mt-0.5">GET course:v1:101</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-emerald-200 text-center">
              <span className="text-stone-400 block text-[10px]">Step 2</span>
              <span className="font-bold text-emerald-700">Redis returns payload</span>
              <span className="text-stone-500 text-[10px] block mt-0.5">Cached JSON hit</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-emerald-200 text-center">
              <span className="text-stone-400 block text-[10px]">Step 3</span>
              <span className="font-bold text-stone-900">Return to Student</span>
              <span className="text-emerald-800 text-[10px] block mt-0.5">PostgreSQL completely bypassed!</span>
            </div>
          </div>
          <p className="text-xs text-stone-600">
            The database executes zero queries. Response time drops from 35ms to 2ms, freeing database connection pool slots.
          </p>
        </div>
      )}

      {flowMode === "read-miss" && (
        <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-amber-950 text-sm">Scenario: Cache Miss (5% of Traffic or Cold Start)</span>
            <span className="text-xs font-mono bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">~35 ms</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono">
            <div className="p-2.5 bg-white rounded-lg border border-amber-200 text-center">
              <span className="text-stone-400 block text-[10px]">Step 1</span>
              <span className="font-bold text-stone-900">GET Redis</span>
              <span className="text-rose-600 text-[10px] block mt-0.5">Returns nil (miss)</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-amber-200 text-center">
              <span className="text-stone-400 block text-[10px]">Step 2</span>
              <span className="font-bold text-stone-900">SELECT Postgres</span>
              <span className="text-stone-600 text-[10px] block mt-0.5">Query primary DB</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-amber-200 text-center">
              <span className="text-stone-400 block text-[10px]">Step 3</span>
              <span className="font-bold text-amber-800">SET Redis + TTL</span>
              <span className="text-orange-600 text-[10px] block mt-0.5">EX 300 + jitter</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-amber-200 text-center">
              <span className="text-stone-400 block text-[10px]">Step 4</span>
              <span className="font-bold text-stone-900">Return Payload</span>
              <span className="text-stone-500 text-[10px] block mt-0.5">Future calls hit</span>
            </div>
          </div>
          <p className="text-xs text-stone-600">
            A cache miss incurs a slight penalty (cache lookup + DB query + cache write), but subsequent requests are served instantly.
          </p>
        </div>
      )}

      {flowMode === "write" && (
        <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-stone-900 text-sm">Scenario: Write / Invalidation (Write-then-Delete)</span>
            <span className="text-xs font-mono bg-stone-200 text-stone-800 font-bold px-2 py-0.5 rounded">Authoritative First</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
            <div className="p-3 bg-white rounded-lg border border-stone-300 text-center">
              <span className="text-stone-400 block text-[10px]">Step 1</span>
              <span className="font-bold text-stone-900">Commit to PostgreSQL</span>
              <span className="text-stone-500 text-[10px] block mt-0.5">UPDATE courses SET ...</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-orange-300 bg-orange-50 text-center">
              <span className="text-stone-400 block text-[10px]">Step 2</span>
              <span className="font-bold text-orange-800">DEL in Redis</span>
              <span className="text-orange-700 text-[10px] block mt-0.5">DEL course:v1:101</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-stone-300 text-center">
              <span className="text-stone-400 block text-[10px]">Step 3</span>
              <span className="font-bold text-stone-900">Return HTTP 200</span>
              <span className="text-stone-500 text-[10px] block mt-0.5">Next reader lazily reloads</span>
            </div>
          </div>
          <p className="text-xs text-stone-600">
            Always <strong>delete</strong> the cache key rather than updating it in application code. Updating introduces concurrency race conditions where an older write overwrites a newer cached value.
          </p>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. CACHE INVALIDATION RACE CONDITION & VERSIONING DIAGRAM                  */
/* -------------------------------------------------------------------------- */
export function CacheInvalidationRaceDiagram() {
  const [showFix, setShowFix] = useState(false);

  return (
    <div className="rounded-2xl border border-rose-200 bg-rose-50/30 p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rose-200/60 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-rose-600 font-bold block">
            Concurrency Hazard
          </span>
          <h4 className="font-bold text-stone-900 text-sm">The Classic Write-Then-Delete Race Condition</h4>
        </div>
        <button
          onClick={() => setShowFix(!showFix)}
          className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition cursor-pointer ${
            showFix
              ? "bg-emerald-600 text-white border-emerald-700"
              : "bg-white text-rose-700 border-rose-300 hover:bg-rose-50"
          }`}
        >
          {showFix ? "Showing: Versioned Keys Fix" : "Inspect Race Condition Bug"}
        </button>
      </div>

      {!showFix ? (
        <div className="space-y-3">
          <p className="text-xs text-stone-700 leading-relaxed">
            Even when following the recommended &quot;Update DB then DEL cache&quot; pattern, a subtle concurrency race can resurrect stale data permanently:
          </p>
          <div className="rounded-xl border border-rose-200 bg-white p-3.5 space-y-2 text-xs font-mono">
            <div className="p-2 rounded bg-stone-50 border border-stone-200">
              <span className="text-rose-700 font-bold">1. Time T0 (Reader A):</span> Misses cache. Begins querying PostgreSQL for old title: <span className="text-stone-800 font-bold">&quot;System Design&quot;</span>.
            </div>
            <div className="p-2 rounded bg-stone-50 border border-stone-200">
              <span className="text-orange-700 font-bold">2. Time T1 (Writer B):</span> Commits update to PostgreSQL: <span className="text-stone-800 font-bold">&quot;Advanced System Design&quot;</span>.
            </div>
            <div className="p-2 rounded bg-stone-50 border border-stone-200">
              <span className="text-orange-700 font-bold">3. Time T2 (Writer B):</span> Executes <span className="text-stone-900 font-bold">DEL course:101</span> in Redis. Cache is now empty.
            </div>
            <div className="p-2 rounded bg-rose-100 border border-rose-300 text-rose-950 font-bold">
              <span>🚨 4. Time T3 (Reader A finishes late):</span> Writes the OLD value <span className="underline">&quot;System Design&quot;</span> into Redis with 24-hour TTL!
            </div>
          </div>
          <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-900">
            <strong>Outcome:</strong> Redis now contains stale data for the entire 24 hours, even though Writer B followed all standard guidelines.
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-xs text-stone-700 leading-relaxed">
            <strong>The Solution: Generation / Versioned Cache Keys.</strong>
            Instead of storing values under unversioned keys, include the entity&apos;s monotonic version number in the Redis key name:
          </p>
          <div className="rounded-xl border border-emerald-200 bg-white p-3.5 space-y-2 text-xs font-mono">
            <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-emerald-950">
              <span className="font-bold">Key Pattern:</span> `course:101:v{'{version}'}` (e.g. `course:101:v8`)
            </div>
            <div className="p-2 rounded bg-stone-50 border border-stone-200 text-stone-800">
              When Writer B updates the course, it increments the version column in PostgreSQL to <span className="text-emerald-700 font-bold">version 9</span>.
            </div>
            <div className="p-2 rounded bg-stone-50 border border-stone-200 text-stone-800">
              If delayed Reader A attempts to set `course:101:v8`, it never overwrites version 9. All new readers query `course:101:v9`!
            </div>
          </div>
          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
            <strong>Result:</strong> Zero stale writes. Concurrency races cannot corrupt cache state.
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. THUNDERING HERD (CACHE STAMPEDE) VS SINGLE-FLIGHT DIAGRAM               */
/* -------------------------------------------------------------------------- */
export function CacheStampedeSingleFlightDiagram() {
  const [mitigation, setMitigation] = useState("singleflight");

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
            High-Concurrency Protection
          </span>
          <h4 className="font-bold text-stone-900 text-sm">Cache Stampede (Thundering Herd) Prevention</h4>
        </div>
        <div className="flex gap-1.5 bg-stone-100 p-1 rounded-xl">
          <button
            onClick={() => setMitigation("unprotected")}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              mitigation === "unprotected" ? "bg-rose-600 text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Unprotected Stampede
          </button>
          <button
            onClick={() => setMitigation("singleflight")}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              mitigation === "singleflight" ? "bg-[#f97316] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Single-Flight Coalescing
          </button>
          <button
            onClick={() => setMitigation("stale")}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              mitigation === "stale" ? "bg-[#f97316] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Stale-While-Revalidate
          </button>
        </div>
      </div>

      {mitigation === "unprotected" && (
        <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-4 space-y-3">
          <span className="font-bold text-rose-950 text-sm block">The Hazard: 2,000 Concurrent Requests on Key Expiry</span>
          <p className="text-xs text-stone-700">
            A popular course cache key expires at 12:00:00. In the next 200ms, 2,000 requests arrive.
            Every single request misses Redis and sends an identical expensive SQL query to PostgreSQL simultaneously.
          </p>
          <div className="rounded-lg bg-stone-900 p-3 font-mono text-[11px] text-rose-300">
            💥 DB Connection Pool Exhaustion (Max 100 connections) → CPU 100% → Cascading 504 Gateway Timeouts
          </div>
        </div>
      )}

      {mitigation === "singleflight" && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4 space-y-3">
          <span className="font-bold text-emerald-950 text-sm block">Solution 1: Request Coalescing (Single-Flight)</span>
          <p className="text-xs text-stone-700">
            When 2,000 requests arrive for `course:101`, the application process detects they share the same key.
            <strong>Only 1 request</strong> queries PostgreSQL. The remaining 1,999 requests subscribe to the in-flight Promise and share the exact same result!
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 bg-white rounded-lg border border-emerald-200 text-center">
              <span className="text-stone-400 block text-[10px]">Database Load</span>
              <span className="text-lg font-bold text-emerald-800">1 SQL Query</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-emerald-200 text-center">
              <span className="text-stone-400 block text-[10px]">Downstream Offload</span>
              <span className="text-lg font-bold text-emerald-800">99.95% Suppressed</span>
            </div>
          </div>
        </div>
      )}

      {mitigation === "stale" && (
        <div className="rounded-xl border border-orange-200 bg-orange-50/40 p-4 space-y-3">
          <span className="font-bold text-orange-950 text-sm block">Solution 2: Stale-While-Revalidate (Soft TTL)</span>
          <p className="text-xs text-stone-700">
            Instead of evicting the key at Soft TTL (e.g. 300s), Redis continues serving the slightly stale cached value instantly (&lt;2ms).
            An asynchronous background worker triggers a non-blocking refresh of PostgreSQL.
          </p>
          <div className="rounded-lg bg-stone-900 p-3 font-mono text-[11px] text-amber-300">
            HTTP Header: Cache-Control: max-age=300, stale-while-revalidate=60
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 5. REDIS EVICTION POLICIES COMPARISON DIAGRAM                              */
/* -------------------------------------------------------------------------- */
export function RedisEvictionPoliciesDiagram() {
  const [selectedPolicy, setSelectedPolicy] = useState("allkeys-lru");

  const policies = {
    "allkeys-lru": {
      name: "allkeys-lru (Recommended for Pure Caches)",
      desc: "Evicts the least recently used keys among all keys using an approximate sampling algorithm.",
      whenToUse: "When every key stored in Redis can be safely reconstructed from PostgreSQL on a miss.",
      risk: "A sudden burst of random keys can evict hot keys if working set spikes.",
      color: "border-orange-500 bg-orange-50/60",
    },
    "allkeys-lfu": {
      name: "allkeys-lfu (Frequency-Based)",
      desc: "Evicts keys with the lowest estimated access frequency, using a logarithmic access counter and decay.",
      whenToUse: "When you have a consistent core set of popular courses that should never be evicted by short-term spikes.",
      risk: "Historically popular keys can stay in cache too long if decay rate is configured too slow.",
      color: "border-amber-500 bg-amber-50/60",
    },
    "volatile-lru": {
      name: "volatile-lru",
      desc: "Evicts least recently used keys, but ONLY among keys that have an explicit TTL expiration set.",
      whenToUse: "When Redis hosts both persistent data (no TTL) and cache entries (with TTL) in the same instance.",
      risk: "If persistent keys consume 100% of memory, Redis returns out-of-memory errors (OOM).",
      color: "border-stone-400 bg-stone-50",
    },
    noeviction: {
      name: "noeviction (Default Redis Setting)",
      desc: "Never evicts any key. When maxmemory is reached, all subsequent write commands (SET, INCR) return OOM errors.",
      whenToUse: "For message queues or authoritative datastores where dropping an entry means permanent data loss.",
      risk: "Disastrous for a web cache: API writes fail as soon as cache fills up.",
      color: "border-rose-400 bg-rose-50/60",
    },
  };

  const current = policies[selectedPolicy];

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
            Memory Capacity Management
          </span>
          <h4 className="font-bold text-stone-900 text-sm">Redis maxmemory-policy Comparison</h4>
        </div>
        <div className="flex gap-1 bg-stone-100 p-1 rounded-xl">
          {Object.keys(policies).map((k) => (
            <button
              key={k}
              onClick={() => setSelectedPolicy(k)}
              className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                selectedPolicy === k ? "bg-[#f97316] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      <div className={`rounded-xl border p-4 ${current.color}`}>
        <h5 className="font-bold text-sm text-stone-900 mb-1">{current.name}</h5>
        <p className="text-xs text-stone-700 leading-relaxed mb-3">{current.desc}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-2.5 rounded-lg bg-white border border-stone-200">
            <strong className="text-emerald-800 block mb-0.5">When to Choose:</strong>
            <span className="text-stone-600">{current.whenToUse}</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-stone-200">
            <strong className="text-rose-800 block mb-0.5">Operational Risk:</strong>
            <span className="text-stone-600">{current.risk}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* VISUAL DIAGRAM DISPATCHER FOR MODULE 6                                     */
/* -------------------------------------------------------------------------- */
export function VisualDiagramComponentModule6({ diagramType }) {
  switch (diagramType) {
    case "multi-tier-caching":
      return <MultiTierCachingDiagram />;
    case "cache-aside-lifecycle":
      return <CacheAsideLifecycleDiagram />;
    case "cache-invalidation-race":
      return <CacheInvalidationRaceDiagram />;
    case "cache-stampede":
      return <CacheStampedeSingleFlightDiagram />;
    case "redis-eviction":
      return <RedisEvictionPoliciesDiagram />;
    default:
      return <MultiTierCachingDiagram />;
  }
}
