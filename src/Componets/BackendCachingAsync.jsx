import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Server,
  ArrowLeft,
  BookOpen,
  Copy,
  Check,
  Activity,
  ShieldCheck,
  Zap,
  Layers,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import BackendCachingAsyncSections from "./BackendCachingAsyncSections";

export default function BackendCachingAsync() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("cache");
  const [cacheMode, setCacheMode] = useState("hit");
  const [brokerTab, setBrokerTab] = useState("rabbitmq");
  const [copiedCode, setCopiedCode] = useState(false);

  const springAsyncCacheCode = `// 1. Redis Cache-Aside + Eviction
@Cacheable(cacheNames = "courses", key = "#courseId")
public CourseResponse getCourse(Long courseId) {
  return repository.findById(courseId)
      .map(CourseResponse::from)
      .orElseThrow(() -> new ResourceNotFoundException("Course not found"));
}

@CacheEvict(cacheNames = "courses", key = "#courseId")
public void updateCourse(Long courseId, CourseRequest request) {
  // Update PostgreSQL; evict Redis key post-commit
}

// 2. RabbitMQ Idempotent Consumer
@RabbitListener(queues = "enrollment.notifications")
@Transactional
public void processNotification(EnrollmentEvent event) {
  // Insert into processed_events with unique constraint (event_id, consumer_name)
  // Send email & persist notification status
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(springAsyncCacheCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const quizQuestions = [
    {
      id: 1,
      question: "1. What does HTTP 202 Accepted indicate when an API starts a background job?",
      options: [
        "The job is already finished",
        "The request was accepted for asynchronous processing and has not necessarily completed yet",
        "Validation failed",
        "Server is shutting down",
      ],
      correct: 1,
      explanation: "202 Accepted tells the client the job was queued/accepted and can be polled via jobId.",
    },
    {
      id: 2,
      question: "2. How do you prevent a @Scheduled task from running 5 times across 5 backend instances?",
      options: [
        "Remove @Scheduled",
        "Use distributed lock/scheduler coordination like ShedLock or Quartz",
        "Set corePoolSize=1",
        "Use FetchType.LAZY",
      ],
      correct: 1,
      explanation: "ShedLock or Quartz ensures only one instance executes a global scheduled task.",
    },
    {
      id: 3,
      question: "3. What is the key architectural difference between RabbitMQ and Apache Kafka?",
      options: [
        "RabbitMQ is a database; Kafka is a web server",
        "RabbitMQ routes messages to task queues (typically removed on ACK); Kafka is a distributed event log supporting retention and replay",
        "Kafka deletes messages immediately",
        "RabbitMQ has no exchanges",
      ],
      correct: 1,
      explanation: "RabbitMQ excels at task queues/routing; Kafka excels at durable partitioned event logs with replay.",
    },
    {
      id: 4,
      question: "4. In Cache-Aside, what happens on a cache miss?",
      options: [
        "API returns 404",
        "Application queries PostgreSQL, populates Redis with a TTL, and returns the data",
        "Redis queries PostgreSQL automatically",
        "Backend flushes Redis",
      ],
      correct: 1,
      explanation: "In Cache-Aside, the app checks Redis first, falls back to PostgreSQL on a miss, and caches the result.",
    },
    {
      id: 5,
      question: "5. Why should Write-Behind caching NOT be used casually for critical enrolments or payments?",
      options: [
        "Redis cannot store numbers",
        "Delayed persistence risks losing pending writes if the cache fails before flushing to PostgreSQL",
        "Write-Behind is slower than SQL joins",
        "It requires HTTP/1.0",
      ],
      correct: 1,
      explanation: "Write-Behind buffers writes in cache before DB persistence, risking data loss on failure.",
    },
    {
      id: 6,
      question: "6. What is a cache stampede (thundering herd)?",
      options: [
        "Redis running out of disk",
        "A hot key expires and thousands of concurrent requests miss Redis and hit PostgreSQL simultaneously",
        "Logging out twice",
        "RabbitMQ delivering once",
      ],
      correct: 1,
      explanation: "Mitigate stampedes with jittered TTLs, single-flight/coalescing, distributed locks, or stale-while-revalidate.",
    },
    {
      id: 7,
      question: "7. What is the purpose of a Dead-Letter Queue (DLQ)?",
      options: [
        "Store passwords",
        "Isolate poison or repeatedly failing messages after max retries without blocking valid messages",
        "Cache course descriptions",
        "Replace PostgreSQL backups",
      ],
      correct: 1,
      explanation: "DLQs capture unrecoverable messages after retry exhaustion for inspection and safe replay.",
    },
    {
      id: 8,
      question: "8. Why must message consumers be idempotent?",
      options: [
        "Brokers use at-least-once delivery, so crashes or retries can redeliver the same event",
        "Idempotent consumers need no DB",
        "RabbitMQ duplicates every message 10x",
        "Redis requires it",
      ],
      correct: 0,
      explanation: "Tracking processed event IDs with a unique DB constraint prevents duplicate business side effects.",
    },
    {
      id: 9,
      question: "9. What is the dual-write problem between PostgreSQL and Redis/RabbitMQ?",
      options: [
        "Writing to two SQL tables",
        "Two separate non-atomic writes where one succeeds and the other fails, causing inconsistent state",
        "Using @Cacheable and @CacheEvict",
        "Running two apps on port 8080",
      ],
      correct: 1,
      explanation: "Use post-commit invalidation, TTLs, or the Transactional Outbox Pattern to avoid dual-write inconsistency.",
    },
    {
      id: 10,
      question: "10. Why is backpressure important when 50,000 events arrive for a rate-limited email provider?",
      options: [
        "To delete 49,900 events",
        "To bound worker concurrency, prefetch, and batching so providers and workers are not overwhelmed",
        "To disable Redis",
        "To force synchronous HTTP calls",
      ],
      correct: 1,
      explanation: "Bounded concurrency and prefetch protect downstream providers from throttling and overload.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const score = useMemo(() => {
    let s = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) s++;
    });
    return s;
  }, [selectedAnswers]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      <ModuleNav track="backend-engineering" currentModuleId="caching-async-messaging" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Server size={12} className="text-orange-600" />
              Backend Engineering Track &bull; Module 07
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              REDIS &middot; RABBITMQ &middot; KAFKA &middot; EVENT-DRIVEN
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 07 &mdash; Caching, Asynchronous Processing and Messaging
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Scale backend responsiveness and throughput using Redis caching (Cache-Aside, TTL, invalidation), Spring <code className="font-mono">@Async</code> &amp; <code className="font-mono">@Scheduled</code> workers, RabbitMQ &amp; Kafka event-driven messaging, Retry/DLQs, and idempotent consumers.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-stone-200 pt-6">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "curriculum"
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <BookOpen size={16} />
              <span>Full Curriculum Specification</span>
            </button>

            <button
              onClick={() => setActiveTab("workbench")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "workbench"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <Activity size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {activeTab === "curriculum" ? (
          <BackendCachingAsyncSections />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("cache")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "cache"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Cache-Aside Simulator
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("broker")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "broker"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. RabbitMQ vs Kafka &amp; DLQ
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("code")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "code"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Spring Cache &amp; AMQP
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                4. Knowledge Assessment (10 Qs)
              </button>
            </div>

            {activeWorkbenchTab === "cache" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap gap-2">
                  {[
                    ["hit", "Cache Hit (Redis)"],
                    ["miss", "Cache Miss -> PostgreSQL"],
                    ["evict", "Course Update -> Invalidate"],
                  ].map(([id, label]) => (
                    <button
                      key={id}
                      onClick={() => setCacheMode(id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer border ${
                        cacheMode === id
                          ? "border-[#f97316] bg-orange-50 text-orange-950"
                          : "border-stone-200 bg-stone-50 text-stone-700"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Zap size={16} className="text-orange-600" />
                    <span>
                      {cacheMode === "hit"
                        ? "GET course:101 -> Served directly from Redis (~1-2 ms)"
                        : cacheMode === "miss"
                        ? "GET course:101 -> Miss -> Query PostgreSQL -> SET course:101 EX 300"
                        : "PUT /api/courses/101 -> Commit PostgreSQL -> Evict course:101"}
                    </span>
                  </div>
                  <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto">
                    {cacheMode === "hit"
                      ? `GET course:101\n-> HIT: {"id":101,"title":"Backend Engineering"}`
                      : cacheMode === "miss"
                      ? `GET course:101 -> (nil)\nSELECT * FROM courses WHERE id = 101;\nSET course:101 "{...}" EX 300`
                      : `UPDATE courses SET title = 'Advanced Backend' WHERE id = 101;\nCOMMIT;\nDEL course:101`}
                  </pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "broker" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap gap-2">
                  {[
                    ["rabbitmq", "RabbitMQ Task Queue + DLQ"],
                    ["kafka", "Apache Kafka Event Stream"],
                  ].map(([id, label]) => (
                    <button
                      key={id}
                      onClick={() => setBrokerTab(id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer border ${
                        brokerTab === id
                          ? "border-[#f97316] bg-orange-50 text-orange-950"
                          : "border-stone-200 bg-stone-50 text-stone-700"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Layers size={16} className="text-orange-600" />
                    <span>{brokerTab === "rabbitmq" ? "RabbitMQ Exchange -> Queue -> Retry -> DLQ" : "Kafka Topic -> Partitions -> Consumer Groups"}</span>
                  </div>
                  <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto">
                    {brokerTab === "rabbitmq"
                      ? `notification.exchange (routingKey: enrollment.confirmed)
  -> enrollment.notifications (Main Queue)
  -> Retry Queue (10s / 30s / 2m backoff)
  -> enrollment.notifications.dlq (Dead-Letter Queue after max retries)`
                      : `Topic: student-events (3 Partitions)
  -> Consumer Group: notification-service
  -> Consumer Group: analytics-service (independent offset + replay)`}
                  </pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "code" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Spring Boot Implementation
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Redis Cache-Aside &amp; Spring AMQP Consumer
                    </h2>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                  >
                    {copiedCode ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedCode ? "Copied!" : "Copy Snippet"}</span>
                  </button>
                </div>

                <pre className="p-5 rounded-2xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed border border-stone-800">
                  {springAsyncCacheCode}
                </pre>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Module 07 Knowledge Assessment
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Caching, Async &amp; Messaging Examination
                    </h2>
                  </div>

                  <div className="flex items-center gap-3">
                    {showResults && (
                      <div className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold font-mono">
                        Score: {score} / {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
                      </div>
                    )}
                    <button
                      onClick={() => setShowResults(!showResults)}
                      className="px-4 py-2 rounded-xl bg-[#f97316] text-white hover:bg-orange-600 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                    >
                      {showResults ? "Hide Explanations" : "Check Answers"}
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q) => {
                    const selected = selectedAnswers[q.id];
                    const isCorrect = selected === q.correct;

                    return (
                      <div key={q.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/40 space-y-3">
                        <div className="font-bold text-stone-900 text-sm">{q.question}</div>
                        <div className="space-y-2">
                          {q.options.map((opt, oIdx) => {
                            const isChosen = selected === oIdx;
                            let btnStyle = "border-stone-200 bg-white text-stone-700 hover:bg-stone-50";

                            if (showResults) {
                              if (oIdx === q.correct) {
                                btnStyle = "border-emerald-300 bg-emerald-50 text-emerald-900 font-semibold";
                              } else if (isChosen && !isCorrect) {
                                btnStyle = "border-rose-300 bg-rose-50 text-rose-900";
                              }
                            } else if (isChosen) {
                              btnStyle = "border-[#f97316] bg-orange-50 text-orange-950 font-semibold";
                            }

                            return (
                              <button
                                key={oIdx}
                                onClick={() => setSelectedAnswers((prev) => ({ ...prev, [q.id]: oIdx }))}
                                className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${btnStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {showResults && (
                          <div className={`p-3 rounded-xl text-xs ${isCorrect ? "bg-emerald-50 text-emerald-900 border border-emerald-200" : "bg-stone-100 text-stone-800 border border-stone-200"}`}>
                            <strong>Explanation:</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Nav */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/backend-engineering/validation-reliability")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 6 &mdash; API Validation, Error Handling and Reliability</span>
          </button>

          <button
            onClick={() => navigate("/learning")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <ShieldCheck size={16} />
            <span>Curriculum Hub</span>
          </button>
        </div>
      </main>
    </div>
  );
}
