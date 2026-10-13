import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Zap,
  Layers,
  Network,
  Cpu,
  Database,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Code,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sparkles,
  GitBranch,
  Server,
  ShieldCheck,
  Activity,
  Sliders,
  HelpCircle,
  FolderTree,
  Scale,
  RefreshCw,
  Clock,
  Send,
  Boxes,
  Lock,
  Globe,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  MultiTierCachingDiagram,
  CacheAsideLifecycleDiagram,
  CacheInvalidationRaceDiagram,
  CacheStampedeSingleFlightDiagram,
  RedisEvictionPoliciesDiagram,
  VisualDiagramComponentModule6,
} from "./SystemDesignCachingDiagrams";

export default function SystemDesignCaching() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("lessons");
  const [activeLesson, setActiveLesson] = useState("6.1");
  const [expandedQa, setExpandedQa] = useState({});

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 1: CACHE HIT RATIO & LATENCY OFF-LOAD SIMULATOR
  // ---------------------------------------------------------------------------
  const [totalRequests, setTotalRequests] = useState(1000000);
  const [hitRatioPct, setHitRatioPct] = useState(95); // 95%
  const [cacheLatencyMs, setCacheLatencyMs] = useState(2); // 2 ms
  const [dbLatencyMs, setDbLatencyMs] = useState(60); // 60 ms

  const hitRatioMetrics = useMemo(() => {
    const hits = Math.round((totalRequests * hitRatioPct) / 100);
    const misses = totalRequests - hits;
    // T_avg = H * T_hit + (1 - H) * (T_hit + T_miss)
    const tAvg = ((hitRatioPct / 100) * cacheLatencyMs + ((100 - hitRatioPct) / 100) * (cacheLatencyMs + dbLatencyMs)).toFixed(2);
    const dbQueriesOffloadedPct = hitRatioPct;
    const speedupFactor = (dbLatencyMs / Math.max(0.1, Number(tAvg))).toFixed(1);

    return {
      hits,
      misses,
      tAvg,
      dbQueriesOffloadedPct,
      speedupFactor,
    };
  }, [totalRequests, hitRatioPct, cacheLatencyMs, dbLatencyMs]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 2: CACHE STAMPEDE & SINGLE-FLIGHT COALESCING SIMULATOR
  // ---------------------------------------------------------------------------
  const [concurrentRps, setConcurrentRps] = useState(2000);
  const [coalescingStrategy, setCoalescingStrategy] = useState("singleflight");

  const stampedeSimulation = useMemo(() => {
    if (coalescingStrategy === "unprotected") {
      return {
        dbQueries: concurrentRps,
        dbStatus: "CRITICAL: Connection pool exhausted (2,000 queries in 50ms) -> CPU 100%",
        p95Latency: "850 ms (Timeouts & 504 errors)",
        color: "text-rose-700 bg-rose-50 border-rose-300",
      };
    }
    if (coalescingStrategy === "singleflight") {
      return {
        dbQueries: 1,
        dbStatus: "HEALTHY: 1 query executed; 1,999 requests subscribed to in-flight Promise",
        p95Latency: "38 ms (Instant batch broadcast)",
        color: "text-emerald-800 bg-emerald-50 border-emerald-300",
      };
    }
    // stale-while-revalidate
    return {
      dbQueries: 1,
      dbStatus: "OPTIMAL: Served stale cached value instantly; background worker refreshed Postgres",
      p95Latency: "2 ms (Zero waiting in critical path)",
      color: "text-orange-800 bg-orange-50 border-orange-300",
    };
  }, [concurrentRps, coalescingStrategy]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 3: REDIS CAPACITY & EVICTION PLANNER
  // ---------------------------------------------------------------------------
  const [cachedEntriesCount, setCachedEntriesCount] = useState(50000);
  const [avgEntrySizeKb, setAvgEntrySizeKb] = useState(4); // 4 KB
  const [allocatedMaxMemoryMb, setAllocatedMaxMemoryMb] = useState(256); // 256 MB

  const redisCapacityMetrics = useMemo(() => {
    // Redis data structure overhead is roughly 1.35x raw payload
    const rawMemoryMb = (cachedEntriesCount * avgEntrySizeKb) / 1024;
    const totalEstimatedRamMb = (rawMemoryMb * 1.35).toFixed(1);
    const utilizationPct = Math.min(100, Math.round((Number(totalEstimatedRamMb) / allocatedMaxMemoryMb) * 100));
    const isExceeded = Number(totalEstimatedRamMb) > allocatedMaxMemoryMb;

    return {
      rawMemoryMb: rawMemoryMb.toFixed(1),
      totalEstimatedRamMb,
      utilizationPct,
      isExceeded,
    };
  }, [cachedEntriesCount, avgEntrySizeKb, allocatedMaxMemoryMb]);

  // ---------------------------------------------------------------------------
  // QUIZ STATE (9 QUESTIONS VERBATIM)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "1. What is a cache hit?",
      options: [
        "The data is absent from the cache",
        "The requested entry is present and may be reused under its validity rules",
        "The database has crashed",
      ],
      correct: 1,
      explanation:
        "A cache hit occurs when the requested resource exists in the cache store and satisfies all freshness and validity criteria, allowing the application to completely bypass the authoritative source.",
    },
    {
      id: 2,
      question: "2. What is the primary distinction between TTL and eviction?",
      options: [
        "TTL is time-based expiration; eviction removes entries to manage capacity or according to a cache policy",
        "They are exactly the same mechanism",
        "Eviction occurs only after a database restart",
      ],
      correct: 0,
      explanation:
        "TTL (Time-To-Live) removes entries based on time elapsed. Eviction removes entries (often under LRU or LFU policies) to free memory when the cache approaches its configured maxmemory limit.",
    },
    {
      id: 3,
      question: "3. Which pattern loads data into the cache after a cache miss?",
      options: ["Cache-aside", "Write-behind", "DNS delegation"],
      correct: 0,
      explanation:
        "Cache-aside (lazy loading) checks the cache first; on a miss, the application loads data from the database and writes it into the cache for future callers.",
    },
    {
      id: 4,
      question: "4. Why might LFU be useful for a read-heavy workload?",
      options: [
        "It always keeps every key forever",
        "It favors entries with higher estimated access frequency",
        "It prevents all stale reads",
      ],
      correct: 1,
      explanation:
        "Least Frequently Used (LFU) preserves items that receive consistent, repeated access over time, protecting popular core items from being evicted by sudden bursts of transient one-off keys.",
    },
    {
      id: 5,
      question: "5. What is a cache stampede?",
      options: [
        "A burst of concurrent requests that all refresh the same missing or expired value",
        "An HTTP redirect",
        "A permanent database backup",
      ],
      correct: 0,
      explanation:
        "A cache stampede (thundering herd) occurs when a popular key expires and hundreds or thousands of simultaneous incoming requests all query the primary database concurrently, causing database overload.",
    },
    {
      id: 6,
      question: "6. What does Cache-Control: no-cache mean?",
      options: [
        "The response can never be stored",
        "Stored responses must be revalidated before reuse",
        "All CDN caches must be deleted instantly",
      ],
      correct: 1,
      explanation:
        "In HTTP semantics, 'no-cache' does NOT mean 'do not store'. It instructs caches that they may store the response, but they MUST revalidate it with the origin server (using ETag or If-Modified-Since) before each reuse. 'no-store' is what forbids storage.",
    },
    {
      id: 7,
      question: "7. Why is shared caching of personalized user responses dangerous?",
      options: [
        "It makes JSON invalid",
        "The cache may reuse one user's response for another user if identity and cache rules are wrong",
        "It always increases database write throughput",
      ],
      correct: 1,
      explanation:
        "If a response containing sensitive student data (grades, private progress) is stored in a shared proxy or CDN cache, subsequent requests from other users can be served that cached data, causing severe privacy breaches.",
    },
    {
      id: 8,
      question: "8. A database update succeeds, but cache invalidation fails. What is the main concern?",
      options: [
        "The database update is guaranteed to roll back",
        "A stale cache entry may remain usable until recovery or expiration",
        "The HTTP protocol stops working",
      ],
      correct: 1,
      explanation:
        "If the database commits but the cache DEL command fails (due to network timeout or client error), the old cached value remains served until its TTL expires or another invalidation succeeds.",
    },
    {
      id: 9,
      question: "9. Why can a cache outage cause a database outage?",
      options: [
        "Every cache automatically deletes the database",
        "A sudden wave of cache misses can redirect too much work to the database",
        "Cache hits write all values to SQL",
      ],
      correct: 1,
      explanation:
        "If a system normally runs with a 95% cache hit ratio, a complete cache outage redirects 20x more read traffic directly to the primary database, immediately exhausting database connection pools and CPU.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let count = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) count += 1;
    });
    return count;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  // ---------------------------------------------------------------------------
  // CAPSTONE PROJECT PROGRESS TRACKING (6 PHASES)
  // ---------------------------------------------------------------------------
  const [projectChecklist, setProjectChecklist] = useState({
    phase1: false,
    phase2: false,
    phase3: false,
    phase4: false,
    phase5: false,
    phase6: false,
  });

  const completedPhasesCount = Object.values(projectChecklist).filter(Boolean).length;

  const togglePhase = (phaseKey) => {
    setProjectChecklist((prev) => ({ ...prev, [phaseKey]: !prev[phaseKey] }));
  };

  // ---------------------------------------------------------------------------
  // SENIOR SYSTEMS ENGINEERING Q&A DATA
  // ---------------------------------------------------------------------------
  const qaScenarios = [
    {
      id: "qa-1",
      title: "Why did a team 'cache everything and make the system worse'?",
      context: "A team added Redis to every API endpoint and watched their application become slower and crash during peak hours.",
      answer:
        "Caching has an overhead: JSON serialization, network round-trips to Redis, and memory management. If a database query already takes 0.8ms from the PostgreSQL buffer pool, adding a 2.5ms Redis network call actually triples latency! Furthermore, caching write-heavy endpoints creates constant cache invalidation thrashing. Only cache queries that are computationally expensive or read orders of magnitude more frequently than written.",
    },
    {
      id: "qa-2",
      title: "How do you implement Single-Flight (Request Coalescing) in Node.js?",
      context: "Preventing 1,000 concurrent cache misses from executing 1,000 identical SQL queries.",
      answer:
        "Maintain an in-memory Map of in-flight Promises: `const inFlight = new Map()`. When a request for `course:101` misses Redis, check `inFlight.has('course:101')`. If true, simply `return await inFlight.get('course:101')`. If false, create the database fetch Promise, store it in the Map, and in the `.finally()` block delete the key from the Map. This guarantees only 1 database query executes regardless of concurrency.",
    },
    {
      id: "qa-3",
      title: "What is TTL Jitter, and why is it mandatory for bulk cache population?",
      context: "10,000 courses are cached at midnight with a 1-hour TTL. At 1:00 AM, the database crashes.",
      answer:
        "When keys share the exact same TTL, they all expire simultaneously, causing a massive synchronized cache stampede. Fix this with TTL Jitter: `ttl = baseTTL + Math.floor(Math.random() * jitterWindow)`. For example, `3600 + Math.floor(Math.random() * 600)` spreads expirations evenly across a 10-minute window, smoothing out database load.",
    },
    {
      id: "qa-4",
      title: "How does Stale-While-Revalidate protect against cascading downstream outages?",
      context: "PostgreSQL is experiencing high load or a temporary brownout.",
      answer:
        "Stale-While-Revalidate (SWR) decouples the client response from the database refresh. When a key's Soft TTL expires, Redis immediately returns the cached value to the client (<2ms). It then asynchronously spawns a background worker to query PostgreSQL. If PostgreSQL is temporarily down or slow, users still get fast responses instead of 504 timeouts, preventing cascading failures.",
    },
    {
      id: "qa-5",
      title: "What are the security risks of HTTP Cache-Control and CDN Edge Caching?",
      context: "A student logs into PrepSpaces and sees another student's assignment feedback.",
      answer:
        "This occurs when private personalized endpoints emit `Cache-Control: public` or omit the `Vary: Authorization, Cookie` header. Shared CDNs (Cloudflare, Fastly) cache the response based on URL alone. Always use `Cache-Control: private, no-store` for authenticated personalized payloads, and restrict `public, s-maxage` solely to truly universal content.",
    },
    {
      id: "qa-6",
      title: "How should you design a cache fallback policy when Redis completely crashes?",
      context: "Redis instance undergoes a network split or runs out of memory.",
      answer:
        "Implement circuit breakers and bounded concurrency. Wrap Redis calls in a 50ms timeout with a circuit breaker (e.g. Opossum). When the breaker trips open, fall back to PostgreSQL with a strict concurrency semaphore or token bucket. Shed non-critical traffic (e.g. recommendations) to prevent the surge from crashing the database.",
    },
  ];

  // ---------------------------------------------------------------------------
  // 10 LESSONS COMPREHENSIVE CURRICULUM
  // ---------------------------------------------------------------------------
  const lessons = [
    {
      id: "6.1",
      week: "Week 1",
      title: "Lesson 6.1 · What is a cache?",
      duration: "3 hours",
      summary:
        "A cache is an auxiliary storage layer that holds data to make future access faster and reduce work on authoritative systems. Master hit vs miss mechanics, hit ratio calculations, and weighted latency models.",
      diagram: "cache-aside-lifecycle",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            A <strong>cache</strong> is a high-speed data storage layer that stores a subset of data—typically transient in nature—so
            that future requests for that data are served up faster than is possible by accessing the data&apos;s primary storage location.
          </p>

          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4">
            <h5 className="font-bold text-stone-900 text-sm mb-2">Core Mathematical Formulations</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-stone-200">
                <span className="font-bold text-orange-900 block mb-1">Cache Hit Ratio Formula</span>
                <div className="font-mono text-xs text-orange-700 font-bold bg-orange-50 p-2 rounded border border-orange-200">
                  Hit Ratio = [ Hits / (Hits + Misses) ] × 100%
                </div>
                <span className="text-stone-500 text-[11px] block mt-1">Target 90–98% for stable read-heavy services.</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">Weighted Average Latency</span>
                <div className="font-mono text-xs text-stone-800 font-bold bg-stone-100 p-2 rounded border border-stone-200">
                  T_avg = (H × T_hit) + (1 - H) × T_miss
                </div>
                <span className="text-stone-500 text-[11px] block mt-1">Where H is the hit ratio, T_hit is cache RTT, T_miss is fallback RTT.</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "6.2",
      week: "Week 1",
      title: "Lesson 6.2 · Where caching happens in a real system",
      duration: "3.5 hours",
      summary:
        "The 6 tiers of system caching: Browser, CDN/Edge, Reverse Proxy / API Gateway, Application-Local Memory, Distributed Redis, and Database Buffer Pools. The danger of multi-tier cache divergence.",
      diagram: "multi-tier-caching",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Caching is not a single box in your architecture—it is a continuum spanning from the user&apos;s device to the database disk controller.
          </p>
          <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-4 text-xs">
            <h5 className="font-bold text-rose-950 mb-1">The Multi-Tier Coherence Trap:</h5>
            <p className="text-stone-700 leading-relaxed">
              If a course title is cached in the browser, in Cloudflare CDN, in Node.js process memory, and in Redis,
              updating the course title in PostgreSQL requires invalidating 4 distinct layers with different key spaces,
              network topologies, and TTLs. If you invalidate Redis but forget the CDN, users still see stale data.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "6.3",
      week: "Week 1",
      title: "Lesson 6.3 · Cache-aside (lazy loading)",
      duration: "4 hours",
      summary:
        "The standard application caching pattern: lazy loading on demand, Node.js Redis implementation, versioned namespace keys, TTL jitter, and write-then-delete invalidation.",
      diagram: "cache-aside-lifecycle",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            In <strong>Cache-Aside</strong>, the application code coordinates all reads and writes between the cache and PostgreSQL:
          </p>
          <div className="rounded-xl border border-stone-200 bg-stone-900 p-4 font-mono text-[11px] text-amber-300 overflow-x-auto">
{`// Production Cache-Aside Pattern in Node.js
async function getCourseById(id, db, redis) {
  const cacheKey = \`course:v1:\${id}\`;
  
  // 1. Check Redis cache
  try {
    const cached = await redis.get(cacheKey);
    if (cached) return JSON.parse(cached);
  } catch (err) {
    console.warn("Redis read failed, falling back to DB", err);
  }

  // 2. Query authoritative PostgreSQL
  const course = await db.query('SELECT * FROM courses WHERE id = $1', [id]);
  if (!course) return null;

  // 3. Write to Redis with TTL Jitter (300s + rand(0-60s))
  try {
    const jitter = Math.floor(Math.random() * 60);
    await redis.set(cacheKey, JSON.stringify(course), { EX: 300 + jitter });
  } catch (err) {
    console.warn("Redis write failed", err);
  }

  return course;
}`}
          </div>
        </div>
      ),
    },
    {
      id: "6.4",
      week: "Week 1",
      title: "Lesson 6.4 · Read-through, write-through, write-behind, and write-around",
      duration: "4 hours",
      summary:
        "Comparing all major caching topologies: Read-Through, Write-Through, Write-Behind (Write-Back), Write-Around, and Refresh-Ahead. Who coordinates, and what are the durability trade-offs?",
      diagram: "cache-aside-lifecycle",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            While Cache-Aside places caching responsibility in application code, other architectural patterns integrate the cache directly:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-orange-700 block mb-1">Write-Through:</strong>
              <span>Application writes to cache; cache immediately writes synchronously to database before returning success. Always keeps cache warm.</span>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-rose-700 block mb-1">Write-Behind (Write-Back):</strong>
              <span>Application writes only to cache; cache batches writes to database asynchronously. High write speed, but risk of data loss on crash!</span>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block mb-1">Write-Around:</strong>
              <span>Writes bypass the cache completely and go straight to the database. Cache is only populated on subsequent read misses.</span>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-emerald-700 block mb-1">Refresh-Ahead:</strong>
              <span>Cache automatically predicts when popular keys are about to expire and refreshes them from PostgreSQL in the background.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "6.5",
      week: "Week 2",
      title: "Lesson 6.5 · TTL: time-to-live and expiration policies",
      duration: "3.5 hours",
      summary:
        "Selecting appropriate TTLs per data classification, preventing synchronized key expiration with TTL jitter, and using Soft TTL vs Hard TTL for graceful brownout degradation.",
      diagram: "cache-stampede",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            <strong>Time-To-Live (TTL)</strong> sets the maximum lifespan of a cached entry.
            TTLs must be chosen based on business freshness tolerance, not arbitrary numbers:
          </p>
          <div className="rounded-xl border border-stone-200 bg-white p-3.5 space-y-2 text-xs">
            <div className="flex justify-between items-center border-b border-stone-100 pb-1.5">
              <span className="font-bold text-stone-900">Public Course Catalog</span>
              <span className="font-mono text-orange-700 font-bold">TTL: 300s–600s (Tolerates slight staleness)</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-100 pb-1.5">
              <span className="font-bold text-stone-900">Student Lesson Progress</span>
              <span className="font-mono text-orange-700 font-bold">TTL: 30s–60s (Needs high freshness)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-stone-900">Auth Permissions &amp; Roles</span>
              <span className="font-mono text-rose-700 font-bold">TTL: 5s–15s or immediate invalidation</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "6.6",
      week: "Week 2",
      title: "Lesson 6.6 · Eviction policies",
      duration: "3.5 hours",
      summary:
        "Expiration vs Eviction: how memory limits force data removal. LRU, LFU, FIFO, Random, and Redis maxmemory-policy configuration (`allkeys-lru`, `allkeys-lfu`, `noeviction`).",
      diagram: "redis-eviction",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            When Redis reaches its configured `maxmemory` limit, it must evict existing keys to accommodate new writes.
          </p>
          <div className="rounded-xl border border-stone-200 bg-stone-900 p-3 font-mono text-[11px] text-emerald-400">
{`# In redis.conf
maxmemory 4gb
maxmemory-policy allkeys-lru
maxmemory-samples 7 # Higher samples = closer approximation of true LRU`}
          </div>
          <p className="text-xs text-stone-600">
            For dedicated web caches, <strong>allkeys-lru</strong> is the industry standard.
            If your traffic has a stable power-law distribution where 20% of courses receive 80% of views, <strong>allkeys-lfu</strong> yields higher hit ratios.
          </p>
        </div>
      ),
    },
    {
      id: "6.7",
      week: "Week 2",
      title: "Lesson 6.7 · Cache consistency and invalidation",
      duration: "4.5 hours",
      summary:
        "Phil Karlton's classic problem: why write-then-delete can still race with concurrent readers, generation-based versioned keys, and transactional outbox event invalidation.",
      diagram: "cache-invalidation-race",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            <em>&quot;There are only two hard things in Computer Science: cache invalidation and naming things.&quot;</em> — Phil Karlton.
          </p>
          <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-4 text-xs space-y-2">
            <strong className="text-orange-950 block">The Invalidation Hierarchy of Guarantees:</strong>
            <ul className="list-disc list-inside space-y-1 text-stone-700">
              <li><strong>Delete After DB Commit:</strong> Never delete the cache before the DB commits. If the DB rollback occurs, you invalidated a valid cache for nothing.</li>
              <li><strong>Versioned Key Namespaces:</strong> Include an entity version in the key (`course:101:v9`) so that concurrent delayed reads cannot overwrite newer data.</li>
              <li><strong>Transactional Outbox:</strong> For distributed microservices, write the invalidation event into an outbox table in PostgreSQL within the same SQL transaction.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "6.8",
      week: "Week 2",
      title: "Lesson 6.8 · Preventing cache stampedes and hot-key overload",
      duration: "4 hours",
      summary:
        "Mitigating thundering herds: Single-flight request coalescing, negative caching with short TTLs for non-existent items, and distributed locks.",
      diagram: "cache-stampede",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            When a popular course with 2,000 requests per second expires, every request misses Redis and attacks PostgreSQL simultaneously.
          </p>
          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs space-y-3">
            <div>
              <strong className="text-stone-900 block font-mono">1. Negative Caching:</strong>
              <span className="text-stone-600 block mt-0.5">
                If a user requests `course:999999` which does not exist, cache a `NOT_FOUND` sentinel with a short 30-second TTL to prevent malicious attackers from hammering your database with random IDs.
              </span>
            </div>
            <div>
              <strong className="text-stone-900 block font-mono">2. Request Coalescing (Single-Flight):</strong>
              <span className="text-stone-600 block mt-0.5">
                Group in-flight requests in memory. 1 request queries PostgreSQL, and the remaining 1,999 requests wait for that single Promise to resolve.
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "6.9",
      week: "Week 2",
      title: "Lesson 6.9 · HTTP caching and CDNs",
      duration: "4 hours",
      summary:
        "Mastering HTTP cache headers: Cache-Control directives (`max-age`, `s-maxage`, `no-cache`, `no-store`, `stale-while-revalidate`), conditional 304 Not Modified requests with ETags, and content-hashed assets.",
      diagram: "multi-tier-caching",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            HTTP caching operates at the boundary between your servers, CDNs, and browsers:
          </p>
          <div className="rounded-xl border border-stone-200 bg-stone-900 p-3 font-mono text-[11px] text-amber-300 overflow-x-auto space-y-2">
            <div>
              <span className="text-stone-400 block">// Public Course Catalog (Cacheable by CDN for 5m, Browser for 1m):</span>
              <span>Cache-Control: public, max-age=60, s-maxage=300, stale-while-revalidate=60</span>
              <br />
              <span>ETag: &quot;course-catalog-v42&quot;</span>
            </div>
            <div className="pt-2 border-t border-stone-800">
              <span className="text-stone-400 block">// Private Student Progress (Never cache in shared proxies):</span>
              <span>Cache-Control: private, no-store</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "6.10",
      week: "Week 2",
      title: "Lesson 6.10 · Redis implementation, monitoring, and production failure modes",
      duration: "3.5 hours",
      summary:
        "Production Redis operations: core commands, capacity sizing, key metrics (hit ratio, memory, evictions, latency), circuit breakers for Redis outages, and server-assisted client-side caching.",
      diagram: "redis-eviction",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Operating Redis in production requires proactive observability and failure planning:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <span className="text-stone-400 font-mono text-[10px] block">Metric 1</span>
              <strong className="text-stone-900 block">Hit Ratio</strong>
              <span className="text-stone-500 text-[11px]">Must remain &gt;90%</span>
            </div>
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <span className="text-stone-400 font-mono text-[10px] block">Metric 2</span>
              <strong className="text-stone-900 block">Eviction Rate</strong>
              <span className="text-stone-500 text-[11px]">Spikes indicate undersized RAM</span>
            </div>
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <span className="text-stone-400 font-mono text-[10px] block">Metric 3</span>
              <strong className="text-stone-900 block">used_memory</strong>
              <span className="text-stone-500 text-[11px]">Alert at &gt;80% maxmemory</span>
            </div>
            <div className="p-2.5 rounded-lg border border-stone-200 bg-white">
              <span className="text-stone-400 font-mono text-[10px] block">Metric 4</span>
              <strong className="text-stone-900 block">VPC Latency</strong>
              <span className="text-stone-500 text-[11px]">p99 should be &lt;5ms</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentLessonData = lessons.find((l) => l.id === activeLesson) || lessons[0];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] px-4 py-8 sm:px-8 md:px-12 antialiased selection:bg-[#f97316] selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Navigation Bar */}
        <ModuleNav
          track="system-design"
          currentModuleId="caching"
          aiTutorLabel="Ask Caching AI"
        />

        {/* Hero Section */}
        <div className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-0.5 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-700">
              <Zap size={12} className="text-[#f97316]" />
              System Design Masterclass · Module 6
            </span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-0.5 text-[11px] font-mono text-stone-600">
              Distributed Systems and Performance Engineering
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 leading-tight">
            Caching Strategies, Eviction Policies, and Cache Consistency
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            Master in-memory caching with Redis, cache-aside, write-through, TTL jitter, LRU/LFU eviction policies,
            cache stampede prevention, HTTP Cache-Control, and bulletproof cache consistency.
          </p>

          {/* Metadata Grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#e7e3da] pt-5">
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Duration</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">2–3 weeks</span>
              <span className="text-[10px] text-stone-500 block">35–45 study hours</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Prerequisites</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Modules 1–5</span>
              <span className="text-[10px] text-stone-500 block">Databases & APIs</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Core Engines</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Redis, HTTP, CDN</span>
              <span className="text-[10px] text-stone-500 block">In-Memory & Edge</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Final Project</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Caching Engineering</span>
              <span className="text-[10px] text-orange-600 font-bold block">Build, Measure & Test</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 [scrollbar-width:none]">
          {[
            { id: "lessons", label: "Curriculum Lessons (10)", icon: BookOpen },
            { id: "calculators", label: "Caching Simulators (3)", icon: Sliders },
            { id: "qa", label: "Senior Staff Q&A (6)", icon: HelpCircle },
            { id: "project", label: `Capstone Project (${completedPhasesCount}/6)`, icon: GitBranch },
            { id: "assessment", label: "Knowledge Assessment (9)", icon: CheckCircle2 },
            { id: "reading", label: "Readings & References", icon: ExternalLink },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white/80 text-stone-600 hover:text-stone-900 hover:bg-white border border-[#e7e3da]"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: LESSONS & CURRICULUM                                        */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "lessons" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Lesson Navigation Column */}
            <div className="lg:col-span-4 space-y-2">
              <div className="rounded-2xl border border-[#e7e3da] bg-white p-3 shadow-xs">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400 px-2 py-1 block">
                  Module 6 Roadmap
                </span>
                <div className="space-y-1 mt-1 max-h-[600px] overflow-y-auto pr-1">
                  {lessons.map((lesson) => {
                    const isSelected = activeLesson === lesson.id;
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => setActiveLesson(lesson.id)}
                        className={`w-full text-left p-2.5 rounded-xl transition text-xs font-medium cursor-pointer ${
                          isSelected
                            ? "bg-orange-50 text-orange-950 font-bold border border-orange-200"
                            : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 mb-0.5">
                          <span>{lesson.week}</span>
                          <span>{lesson.duration}</span>
                        </div>
                        <div className="truncate">{lesson.title}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Detailed Lesson Card */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-orange-600 font-bold block">
                      {currentLessonData.week} · {currentLessonData.duration}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-stone-900 mt-0.5">
                      {currentLessonData.title}
                    </h2>
                  </div>
                  <span className="rounded-full bg-stone-100 text-stone-600 text-xs px-2.5 py-1 font-mono">
                    Lesson {currentLessonData.id} of 10
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-500 italic mb-6">
                  {currentLessonData.summary}
                </p>

                {/* Lesson Main Content */}
                <div className="mb-6">{currentLessonData.content}</div>

                {/* Interactive Architectural Diagram for this Lesson */}
                <div className="mt-8 pt-6 border-t border-[#e7e3da]">
                  <VisualDiagramComponentModule6 diagramType={currentLessonData.diagram} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE CACHING SIMULATORS                              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "calculators" && (
          <div className="space-y-8">
            {/* Tool 1: Cache Hit Ratio & Latency Off-Load Simulator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Interactive Caching Tool 1
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Cache Hit Ratio &amp; Database Workload Offload Simulator
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Calculate weighted average latency T_avg = H × T_hit + (1 - H) × T_miss and total database queries prevented.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Cache Hit Ratio (H)</span>
                    <span className="text-orange-600 font-mono">{hitRatioPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="99"
                    value={hitRatioPct}
                    onChange={(e) => setHitRatioPct(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Proportion of requests served from cache</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Cache Hit Latency</span>
                    <span className="text-orange-600 font-mono">{cacheLatencyMs} ms</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="10"
                    step="0.5"
                    value={cacheLatencyMs}
                    onChange={(e) => setCacheLatencyMs(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Redis in-memory network RTT</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Database Query Latency</span>
                    <span className="text-orange-600 font-mono">{dbLatencyMs} ms</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="200"
                    step="5"
                    value={dbLatencyMs}
                    onChange={(e) => setDbLatencyMs(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Uncached PostgreSQL query time</span>
                </div>
              </div>

              {/* Output Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 text-center">
                  <span className="text-[10px] font-mono text-stone-400 uppercase block">Weighted Avg Latency</span>
                  <div className="text-2xl font-bold font-mono text-emerald-800 my-1">
                    {hitRatioMetrics.tAvg} ms
                  </div>
                  <span className="text-[11px] text-emerald-900 font-bold">{hitRatioMetrics.speedupFactor}x Faster Response</span>
                </div>

                <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/50 text-center">
                  <span className="text-[10px] font-mono text-stone-400 uppercase block">Database Load Reduction</span>
                  <div className="text-2xl font-bold font-mono text-[#f97316] my-1">
                    {hitRatioMetrics.dbQueriesOffloadedPct}%
                  </div>
                  <span className="text-[11px] text-stone-600">{hitRatioMetrics.hits.toLocaleString()} queries suppressed</span>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] text-center">
                  <span className="text-[10px] font-mono text-stone-400 uppercase block">Database Miss Queries</span>
                  <div className="text-2xl font-bold font-mono text-stone-700 my-1">
                    {hitRatioMetrics.misses.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-stone-500">Only 5% reach PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Tool 2: Cache Stampede (Thundering Herd) Simulator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Interactive Caching Tool 2
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Cache Stampede &amp; Single-Flight Coalescing Simulator
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Simulate a sudden traffic surge on key expiration: compare Unprotected stampedes against Single-Flight coalescing and Stale-While-Revalidate.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Concurrent Requests Upon Expiry</span>
                    <span className="text-orange-600 font-mono">{concurrentRps} RPS</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="500"
                    value={concurrentRps}
                    onChange={(e) => setConcurrentRps(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Burst arriving within 50ms</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <span className="font-bold text-stone-800 block mb-1">Protection Strategy</span>
                  <select
                    value={coalescingStrategy}
                    onChange={(e) => setCoalescingStrategy(e.target.value)}
                    className="w-full p-2 rounded-lg border border-stone-300 bg-white font-mono text-xs cursor-pointer"
                  >
                    <option value="unprotected">Unprotected (Every request queries DB)</option>
                    <option value="singleflight">Single-Flight Request Coalescing (1 in-flight Promise)</option>
                    <option value="stale">Stale-While-Revalidate (Soft TTL + Background Refresh)</option>
                  </select>
                </div>
              </div>

              {/* Simulation Result Card */}
              <div className={`p-4 rounded-xl border ${stampedeSimulation.color}`}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    Downstream Load on PostgreSQL:
                  </span>
                  <span className="text-xs font-mono font-bold">
                    p95 Latency: {stampedeSimulation.p95Latency}
                  </span>
                </div>
                <div className="text-2xl font-bold font-mono my-1">
                  {stampedeSimulation.dbQueries.toLocaleString()} Database Queries
                </div>
                <p className="text-xs font-medium leading-relaxed">{stampedeSimulation.dbStatus}</p>
              </div>
            </div>

            {/* Tool 3: Redis Capacity & Eviction Planner */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Interactive Caching Tool 3
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Redis Memory Capacity &amp; Working Set Sizing Planner
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Estimate Redis working-set footprint accounting for jemalloc allocator overhead and key metadata.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-xs">
                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Cached Entries Count</span>
                    <span className="text-orange-600 font-mono">{cachedEntriesCount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="10000"
                    value={cachedEntriesCount}
                    onChange={(e) => setCachedEntriesCount(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Total keys stored</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Avg Payload Size (KB)</span>
                    <span className="text-orange-600 font-mono">{avgEntrySizeKb} KB</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="32"
                    value={avgEntrySizeKb}
                    onChange={(e) => setAvgEntrySizeKb(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Serialized JSON size</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Allocated maxmemory</span>
                    <span className="text-orange-600 font-mono">{allocatedMaxMemoryMb} MB</span>
                  </div>
                  <input
                    type="range"
                    min="64"
                    max="2048"
                    step="64"
                    value={allocatedMaxMemoryMb}
                    onChange={(e) => setAllocatedMaxMemoryMb(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Configured Redis memory cap</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] text-stone-400 font-mono block">Estimated RAM Footprint</span>
                  <div className="text-xl font-bold font-mono text-stone-900 my-1">
                    {redisCapacityMetrics.totalEstimatedRamMb} MB
                  </div>
                  <span className="text-[11px] text-stone-500">
                    Includes {redisCapacityMetrics.rawMemoryMb} MB raw JSON + 35% dict/jemalloc overhead
                  </span>
                </div>

                <div
                  className={`p-3.5 rounded-xl border ${
                    redisCapacityMetrics.isExceeded
                      ? "border-rose-300 bg-rose-50 text-rose-950"
                      : "border-emerald-300 bg-emerald-50 text-emerald-950"
                  }`}
                >
                  <span className="text-[10px] font-mono block">
                    Capacity Utilization: {redisCapacityMetrics.utilizationPct}%
                  </span>
                  <div className="text-xl font-bold font-mono my-1">
                    {redisCapacityMetrics.isExceeded ? "⚠️ Eviction Triggered" : "✓ Within Safe Headroom"}
                  </div>
                  <span className="text-[11px]">
                    {redisCapacityMetrics.isExceeded
                      ? `Exceeds ${allocatedMaxMemoryMb} MB cap: Redis will evict keys according to maxmemory-policy.`
                      : `Sufficient headroom available before key eviction begins.`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: SENIOR SYSTEMS ENGINEERING Q&A                              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "qa" && (
          <div className="space-y-4">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs mb-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block mb-1">
                Senior &amp; Staff Level Systems Engineering
              </span>
              <h2 className="text-xl font-bold text-stone-900">
                Production Caching Architecture Scenarios &amp; Defense
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                Real-world caching war stories, race condition edge cases, and architectural trade-off defenses.
              </p>
            </div>

            {qaScenarios.map((item) => {
              const isOpen = expandedQa[item.id] || false;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs transition hover:border-orange-200"
                >
                  <button
                    onClick={() => setExpandedQa({ ...expandedQa, [item.id]: !isOpen })}
                    className="w-full flex items-start justify-between gap-4 text-left cursor-pointer"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase text-orange-600 font-bold block">
                        Scenario
                      </span>
                      <h4 className="font-bold text-stone-900 text-sm sm:text-base mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-500 mt-1">{item.context}</p>
                    </div>
                    <div className="shrink-0 p-1 rounded-lg bg-stone-100 text-stone-500">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-stone-100 text-xs sm:text-sm text-stone-700 leading-relaxed bg-[#faf8f4] p-4 rounded-xl border border-stone-200">
                      <span className="font-bold text-stone-900 block mb-1">Architectural Defense &amp; Resolution:</span>
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: CAPSTONE CACHING PROJECT                                    */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "project" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-orange-600 font-bold block">
                    Module 6 Capstone Assignment
                  </span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Build a Production Caching System for PrepSpaces
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 text-xs px-3 py-1 font-bold">
                    Project Progress: {completedPhasesCount} / 6 Phases Completed
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-6">
                <strong>Project Objective:</strong> Design and implement an end-to-end caching architecture for PrepSpaces using Node.js,
                Redis, and HTTP headers. Measure hit ratios, simulate failure modes (Redis outages, cache stampedes), and verify consistency.
              </p>

              {/* 6 Phases with Toggleable Checkboxes */}
              <div className="space-y-3">
                {[
                  {
                    key: "phase1",
                    phase: "Phase 1",
                    title: "Identify Candidate Data & Classify Sensitivity",
                    desc: "Analyze public course summaries, course catalog, student progress, auth tokens, assignment metadata, and AI interview results. Define read/write frequencies, payload sizes, and acceptable staleness windows.",
                  },
                  {
                    key: "phase2",
                    phase: "Phase 2",
                    title: "Implement Cache-Aside with Versioned Keys",
                    desc: "Implement cache-aside for course metadata using Node.js and Redis. Enforce versioned keys (`course:v1:101`) and random TTL jitter (300s + rand(0-60s)) to avoid synchronized expirations.",
                  },
                  {
                    key: "phase3",
                    phase: "Phase 3",
                    title: "Implement Safe Invalidation (Write-then-Delete)",
                    desc: "When a course is updated, commit to PostgreSQL first, then delete the Redis key. Test behavior when readers and writers access the same course concurrently to prove zero stale resurrects.",
                  },
                  {
                    key: "phase4",
                    phase: "Phase 4",
                    title: "Benchmark TTL & Eviction Policies (LRU vs LFU)",
                    desc: "Run load benchmarks using 50,000 synthetic requests with Zipfian popularity distribution. Compare allkeys-lru vs allkeys-lfu under constrained memory limits and record hit ratio vs eviction rate.",
                  },
                  {
                    key: "phase5",
                    phase: "Phase 5",
                    title: "Inject Production Failure Scenarios",
                    desc: "Simulate: 1) Redis completely offline; 2) Cold cache restart with 2,000 concurrent RPS; 3) Failed cache invalidation after DB commit; 4) Private user content leakage test through shared HTTP caches.",
                  },
                  {
                    key: "phase6",
                    phase: "Phase 6",
                    title: "Validate Architecture & Author ADR",
                    desc: "Compare the baseline uncached system against the cached architecture. Report p95 latency improvements, database QPS offload %, memory footprint, and final Architecture Decision Record.",
                  },
                ].map((item) => {
                  const isDone = projectChecklist[item.key];
                  return (
                    <button
                      key={item.key}
                      onClick={() => togglePhase(item.key)}
                      className={`w-full text-left p-4 rounded-2xl border transition cursor-pointer ${
                        isDone
                          ? "border-emerald-300 bg-emerald-50/70 text-emerald-950 font-bold"
                          : "border-stone-200 bg-[#faf8f4] text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono font-bold text-orange-600">{item.phase}</span>
                        <CheckCircle2
                          size={16}
                          className={isDone ? "text-emerald-600" : "text-stone-300"}
                        />
                      </div>
                      <h4 className="font-bold text-stone-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-stone-600 mt-1 font-normal">{item.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: ASSESSMENT QUIZ (9 QUESTIONS VERBATIM)                      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "assessment" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                    Module 6 Assessment
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">
                    Knowledge Check: Caching, Eviction &amp; Consistency
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    9 questions evaluating cache-aside, TTL vs eviction, LFU, thundering herds, HTTP Cache-Control, and failure modes.
                  </p>
                </div>
                {quizSubmitted && (
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-bold text-stone-900 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-xl">
                      Score: <span className="text-orange-600 font-mono font-bold">{calculateScore()} / 9</span>
                    </div>
                    <button
                      onClick={resetQuiz}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-bold hover:bg-stone-50 cursor-pointer"
                    >
                      <RotateCcw size={13} />
                      <span>Retake Quiz</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {quizQuestions.map((q) => {
                  const selected = selectedAnswers[q.id];
                  const isCorrect = selected === q.correct;
                  return (
                    <div
                      key={q.id}
                      className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-4 sm:p-5"
                    >
                      <h4 className="font-bold text-stone-900 text-sm mb-3">{q.question}</h4>

                      <div className="space-y-2">
                        {q.options.map((opt, idx) => {
                          const isOptionSelected = selected === idx;
                          let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-50";

                          if (quizSubmitted) {
                            if (idx === q.correct) {
                              btnStyle = "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold";
                            } else if (isOptionSelected && !isCorrect) {
                              btnStyle = "bg-rose-50 border-rose-400 text-rose-950 line-through";
                            } else {
                              btnStyle = "bg-white border-stone-200 text-stone-400 opacity-60";
                            }
                          } else if (isOptionSelected) {
                            btnStyle = "bg-orange-50 border-orange-500 text-orange-950 font-bold shadow-xs";
                          }

                          return (
                            <button
                              key={idx}
                              onClick={() => handleSelectAnswer(q.id, idx)}
                              disabled={quizSubmitted}
                              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${btnStyle}`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="h-5 w-5 rounded-full border flex items-center justify-center text-[10px] font-mono shrink-0">
                                  {String.fromCharCode(65 + idx)}
                                </span>
                                <span>{opt}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div
                          className={`mt-3 p-3 rounded-xl text-xs border leading-relaxed ${
                            isCorrect
                              ? "bg-emerald-50/70 border-emerald-200 text-emerald-900"
                              : "bg-rose-50/70 border-rose-200 text-rose-900"
                          }`}
                        >
                          <span className="font-bold block mb-0.5">
                            {isCorrect ? "✓ Correct!" : "✗ Review Explanation:"}
                          </span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!quizSubmitted ? (
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#f97316] text-white font-bold text-xs shadow-xs hover:bg-[#ea580c] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span>Submit Assessment</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <div className="mt-6 flex justify-between items-center flex-wrap gap-4 pt-4 border-t border-stone-200">
                  <div className="text-xs text-stone-600">
                    Completed 9 of 9 questions. Ready to review research literature.
                  </div>
                  <button
                    onClick={() => setActiveTab("reading")}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white font-bold text-xs hover:bg-stone-800 transition cursor-pointer"
                  >
                    <span>Explore Research &amp; Reading List</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: READINGS & REFERENCES (7 CITATIONS)                         */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "reading" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block mb-1">
                Foundational Systems Engineering
              </span>
              <h2 className="text-xl font-bold text-stone-900">
                University and Industry Reading List
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                Primary documentation and engineering whitepapers from AWS Builders&apos; Library, Microsoft Azure Architecture Center, Redis, MDN, and Google Cloud CDN.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    code: "AWS BUILDERS",
                    title: "AWS Builders' Library · Caching Challenges and Strategies",
                    focus:
                      "Deep dive into TTLs, eviction, request coalescing, hot-key mitigations, soft vs hard TTLs, and downstream failure handling.",
                    link: "https://aws.amazon.com/builders-library/caching-challenges-and-strategies/",
                    linkText: "Read AWS Builders' Library",
                  },
                  {
                    code: "AWS REDIS",
                    title: "AWS · Database Caching Strategies Using Redis",
                    focus:
                      "Architectural patterns: Cache-Aside, Write-Through, cache placement, workload selection, and trade-off analysis.",
                    link: "https://docs.aws.amazon.com/whitepapers/latest/database-caching-strategies-using-redis/caching-patterns.html",
                    linkText: "Read AWS Whitepaper",
                  },
                  {
                    code: "AZURE ARCH",
                    title: "Microsoft Azure Architecture Center · Cache-Aside Pattern",
                    focus:
                      "Pattern guide covering cache population, expiration, invalidation consistency limitations, and implementation guidance.",
                    link: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
                    linkText: "Read Azure Architecture Center",
                  },
                  {
                    code: "REDIS EVICTION",
                    title: "Redis · Key Eviction Policies (maxmemory-policy)",
                    focus:
                      "Official documentation on memory limits, approximate LRU/LFU algorithms, volatile vs allkeys policies, and OOM handling.",
                    link: "https://redis.io/docs/latest/develop/reference/eviction/",
                    linkText: "Read Redis Documentation",
                  },
                  {
                    code: "REDIS CLIENT",
                    title: "Redis · Server-Assisted Client-Side Caching",
                    focus:
                      "Tracking keys, invalidation messages, connection lifecycles, and keeping in-memory process caches coherent with Redis.",
                    link: "https://redis.io/docs/latest/develop/clients/client-side-caching/",
                    linkText: "Read Redis Client-Side Caching",
                  },
                  {
                    code: "MDN HTTP",
                    title: "MDN Web Docs · HTTP Caching & Cache-Control",
                    focus:
                      "Browser & intermediary caches, validation directives (no-cache vs no-store), ETags, conditional 304 responses, and freshness.",
                    link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching",
                    linkText: "Read MDN HTTP Guide",
                  },
                  {
                    code: "GCP CDN",
                    title: "Google Cloud CDN · Caching and Invalidation",
                    focus:
                      "Edge caching, cache key construction, revalidation, and programmatic targeted cache invalidation.",
                    link: "https://docs.cloud.google.com/cdn/docs/caching",
                    linkText: "Read Google Cloud CDN Docs",
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl border border-stone-200 bg-[#faf8f4] hover:border-orange-300 hover:bg-orange-50/20 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-orange-600 block mb-1">
                        {item.code}
                      </span>
                      <h4 className="font-bold text-stone-900 text-sm group-hover:text-orange-600 transition">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.focus}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs font-bold text-orange-600">
                      <span>{item.linkText}</span>
                      <ExternalLink size={13} />
                    </div>
                  </a>
                ))}
              </div>

              {/* What Comes Next Banner */}
              <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50/70 p-5 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
                    What You Mastered Before Module 7
                  </span>
                  <span className="text-sm font-bold text-stone-900 block mt-0.5">
                    Module 7: Database Replication, Partitioning, Sharding, and Distributed Queries
                  </span>
                  <span className="text-xs text-stone-600 block mt-0.5">
                    You can now engineer high-throughput multi-tier caches, prevent thundering herds, tune Redis eviction, and enforce HTTP/CDN cache correctness.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => navigate("/learning/system-design/databases")}
                    className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                  >
                    <span>Back to Module 5</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/learning/system-design/replication")}
                    className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                  >
                    <span>Start Module 7 (Replication &amp; Sharding)</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
