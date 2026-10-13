import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layers,
  Database,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Zap,
  ShieldAlert,
  Activity,
  Cpu,
  Server,
  Network,
  Lock,
  ArrowRight,
  ArrowLeft,
  GitBranch,
  Timer,
  Scale,
  RefreshCw,
  Globe,
  Sliders,
  HelpCircle,
  FolderTree,
  ShieldCheck,
  ExternalLink,
  BookOpen,
  Vote,
  Radio,
  Clock,
  Workflow,
  Inbox,
  Filter,
  Flame,
  Send,
  Key,
  FileText,
  Unlock,
  XCircle,
  TrendingUp,
  BarChart3,
  SlidersHorizontal,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  Layer4VsLayer7Diagram,
  TokenBucketLifecycleDiagram,
  CircuitBreakerStateDiagram,
  VisualDiagramComponentModule14,
} from "./SystemDesignTrafficDiagrams";

export default function SystemDesignTraffic() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "simulators" | "qa" | "project" | "assessment" | "reading"
  const [activeWeek, setActiveWeek] = useState(1); // 1 | 2 | 3
  const [activeLesson, setActiveLesson] = useState("14.1");

  // Expanded Q&A accordion states
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 1: TOKEN BUCKET RATE LIMITER WITH BURST & REFILL
  // ---------------------------------------------------------------------------
  const [bucketCapacity, setBucketCapacity] = useState(20);
  const [refillRate, setRefillRate] = useState(10); // tokens per second
  const [availableTokens, setAvailableTokens] = useState(20);
  const [admittedRequests, setAdmittedRequests] = useState(0);
  const [throttledRequests, setThrottledRequests] = useState(0);
  const [rateLimitLog, setRateLimitLog] = useState([]);

  // Auto-refill simulation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setAvailableTokens((prev) => Math.min(bucketCapacity, prev + refillRate / 2));
    }, 500);
    return () => clearInterval(interval);
  }, [bucketCapacity, refillRate]);

  const sendClientRequests = (count) => {
    const currentTokens = Math.floor(availableTokens);
    if (currentTokens >= count) {
      setAvailableTokens((prev) => prev - count);
      setAdmittedRequests((prev) => prev + count);
      setRateLimitLog((prev) => [
        `[200 OK] Admitted ${count} request(s). Remaining tokens: ${currentTokens - count}.`,
        ...prev,
      ]);
    } else {
      const allowed = currentTokens;
      const rejected = count - allowed;
      setAvailableTokens(0);
      setAdmittedRequests((prev) => prev + allowed);
      setThrottledRequests((prev) => prev + rejected);
      const retryAfterSec = Math.ceil(rejected / refillRate);
      setRateLimitLog((prev) => [
        `[429 TOO MANY REQUESTS] Admitted ${allowed}, Rejected ${rejected}. Bucket empty! Header sent: Retry-After: ${retryAfterSec}s.`,
        ...prev,
      ]);
    }
  };

  const resetRateLimiter = () => {
    setAvailableTokens(bucketCapacity);
    setAdmittedRequests(0);
    setThrottledRequests(0);
    setRateLimitLog(["Rate limiter reset to initial capacity."]);
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 2: CIRCUIT BREAKER & DEPENDENCY SLOWDOWN
  // ---------------------------------------------------------------------------
  const [circuitState, setCircuitState] = useState("CLOSED"); // "CLOSED" | "OPEN" | "HALF_OPEN"
  const [consecutiveFailures, setConsecutiveFailures] = useState(0);
  const [circuitLog, setCircuitLog] = useState([
    "Circuit is CLOSED. Traffic forwarding to AI Provider.",
  ]);

  const handleCircuitCall = (success) => {
    if (circuitState === "OPEN") {
      setCircuitLog((prev) => [
        "[FAIL FAST 503] Circuit is OPEN! Request short-circuited in 1ms without touching AI Provider. Serving cached evaluation fallback.",
        ...prev,
      ]);
      return;
    }

    if (circuitState === "CLOSED") {
      if (success) {
        setConsecutiveFailures(0);
        setCircuitLog((prev) => [
          "[200 OK] AI Provider answered in 140ms. Failure count: 0.",
          ...prev,
        ]);
      } else {
        const next = consecutiveFailures + 1;
        setConsecutiveFailures(next);
        if (next >= 3) {
          setCircuitState("OPEN");
          setCircuitLog((prev) => [
            `[CIRCUIT TRIPPED TO OPEN] ${next} consecutive timeouts reached! Circuit opened to prevent thread pool starvation.`,
            ...prev,
          ]);
        } else {
          setCircuitLog((prev) => [
            `[TIMEOUT 504] AI call exceeded 2000ms deadline (${next}/3 failures).`,
            ...prev,
          ]);
        }
      }
    } else if (circuitState === "HALF_OPEN") {
      if (success) {
        setCircuitState("CLOSED");
        setConsecutiveFailures(0);
        setCircuitLog((prev) => [
          "[CANARY PROBE SUCCEEDED] Trial request succeeded! Circuit breaker returned to CLOSED state.",
          ...prev,
        ]);
      } else {
        setCircuitState("OPEN");
        setCircuitLog((prev) => [
          "[CANARY PROBE FAILED] Trial request timed out. Circuit tripped back to OPEN state for another cooldown cycle.",
          ...prev,
        ]);
      }
    }
  };

  const triggerCooldownExpiry = () => {
    if (circuitState === "OPEN") {
      setCircuitState("HALF_OPEN");
      setCircuitLog((prev) => [
        "[COOLDOWN EXPIRED] 30s elapsed. Circuit is now HALF-OPEN. Ready for 1 trial canary request.",
        ...prev,
      ]);
    }
  };

  const resetCircuit = () => {
    setCircuitState("CLOSED");
    setConsecutiveFailures(0);
    setCircuitLog(["Circuit manually reset to CLOSED state."]);
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 3: BACKPRESSURE, QUEUE BACKLOG & RECOVERY CALCULATOR
  // Formula: B_{t+1} = B_t + max(0, P_t - C_t) | Little's Law: L = lambda * W
  // ---------------------------------------------------------------------------
  const [arrivalRate, setArrivalRate] = useState(400); // jobs/sec
  const [processingRate, setProcessingRate] = useState(250); // jobs/sec
  const [meanJobTime, setMeanJobTime] = useState(4); // seconds per job
  const [queueLimit, setQueueLimit] = useState(10000); // bounded capacity

  const backpressureMetrics = useMemo(() => {
    const netGrowthPerSec = Math.max(0, arrivalRate - processingRate);
    const utilization = ((arrivalRate / processingRate) * 100).toFixed(1);
    const inFlightConcurrency = Math.round(processingRate * meanJobTime);

    // Queue growth after 60 seconds of imbalance
    const backlog60s = netGrowthPerSec * 60;
    const timeToExhaustLimitSec =
      netGrowthPerSec > 0 ? Math.round(queueLimit / netGrowthPerSec) : Infinity;

    // Drain time when arrival drops back to 100 jobs/sec
    const recoveryArrival = 100;
    const drainRate = Math.max(1, processingRate - recoveryArrival);
    const timeToDrainCurrentBacklog = Math.round(backlog60s / drainRate);

    let status = "HEALTHY";
    if (arrivalRate > processingRate) status = "OVERLOAD_GROWING";
    if (backlog60s >= queueLimit) status = "SHEDDING_ACTIVE";

    return {
      netGrowthPerSec,
      utilization,
      inFlightConcurrency,
      backlog60s,
      timeToExhaustLimitSec,
      timeToDrainCurrentBacklog,
      status,
    };
  }, [arrivalRate, processingRate, meanJobTime, queueLimit]);

  // ---------------------------------------------------------------------------
  // PRACTICAL LAB CHECKLIST TRACKER (Phases A through E)
  // ---------------------------------------------------------------------------
  const [projectChecklist, setProjectChecklist] = useState({
    phaseA_load_balancer: true,
    phaseA_health_checks: true,
    phaseB_token_bucket: true,
    phaseB_global_quota: false,
    phaseC_bounded_queue: false,
    phaseC_admission_control: false,
    phaseD_circuit_breaker: false,
    phaseD_retry_jitter: false,
    phaseE_autoscaling_model: false,
  });

  const toggleChecklist = (key) => {
    setProjectChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // ---------------------------------------------------------------------------
  // ASSESSMENT QUIZ STATE (7 QUESTIONS MATCHING USER PROMPT VERBATIM)
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the main job of a load balancer?",
      options: [
        "A. Increase database storage automatically.",
        "B. Distribute traffic among eligible backends according to its routing policy.",
        "C. Make every API operation idempotent.",
        "D. Guarantee that no request ever fails.",
      ],
      correct: 1, // B
      explanation:
        "Routing traffic to eligible backends according to a configured routing policy (round robin, least connections, hash-based, etc.) is the core responsibility of a load balancer.",
    },
    {
      id: 2,
      question: "Why can round robin still overload one backend more than another?",
      options: [
        "A. It always sends requests to the same server.",
        "B. It cannot work with HTTP.",
        "C. Requests may have different costs, and equal request counts do not guarantee equal workloads.",
        "D. It automatically disables health checks.",
      ],
      correct: 2, // C
      explanation:
        "Round robin distributes request counts evenly. However, requests have vastly different resource costs (e.g. a 5ms cached read vs a 10s heavy AI report generation). Assigning equal request counts does not guarantee equal CPU or memory utilization.",
    },
    {
      id: 3,
      question: "What does a token bucket allow?",
      options: [
        "A. No requests during bursts.",
        "B. Controlled bursts up to the available bucket capacity, with tokens replenished over time.",
        "C. Unlimited throughput permanently.",
        "D. Only one request per minute.",
      ],
      correct: 1, // B
      explanation:
        "A token bucket permits configured bursts of traffic up to the bucket's maximum capacity, while its steady token refill rate enforces sustainable long-term throughput.",
    },
    {
      id: 4,
      question: "Why is a rate limit alone not enough for a slow, expensive API?",
      options: [
        "A. Rate limits only work for databases.",
        "B. A request may stay in flight for a long time, so concurrency can still become excessive.",
        "C. Rate limits always require Kafka.",
        "D. Rate limits prevent scaling.",
      ],
      correct: 1, // B
      explanation:
        "Rate limits control request arrival frequency. By Little's Law (L = lambda * W), if each request takes 20 seconds, even a modest arrival rate of 10 req/s results in 200 concurrent in-flight requests, exhausting database connections and worker memory. Concurrency limits are necessary alongside rate limits.",
    },
    {
      id: 5,
      question: "What is the danger of an unbounded queue?",
      options: [
        "A. It forces requests to complete immediately.",
        "B. It eliminates memory consumption.",
        "C. Backlog, resource use, and latency can grow without a defined limit.",
        "D. It prevents retries.",
      ],
      correct: 2, // C
      explanation:
        "An unbounded queue converts excess traffic into growing latency, memory consumption, and stale work. When a fast producer outpaces a slower consumer, the queue depth grows without bound until the host crashes with an Out-Of-Memory (OOM) error.",
    },
    {
      id: 6,
      question: "Why can retries worsen a cascading failure?",
      options: [
        "A. They can multiply traffic against an already overloaded dependency.",
        "B. They always reduce request volume.",
        "C. They stop timeout behavior.",
        "D. They automatically add backend capacity.",
      ],
      correct: 0, // A
      explanation:
        "When an upstream dependency slows down due to overload, clients that retry immediately multiply the request volume hitting the struggling service. This retry storm drives response times higher and triggers widespread timeouts across the entire system.",
    },
    {
      id: 7,
      question: "What is the main purpose of backpressure?",
      options: [
        "A. Guarantee every request succeeds immediately.",
        "B. Prevent a faster upstream component from overwhelming a slower downstream component.",
        "C. Eliminate the need for queues.",
        "D. Replace all load balancers.",
      ],
      correct: 1, // B
      explanation:
        "Backpressure regulates work according to downstream processing capacity and available resources, preventing fast producers from burying slower consumers.",
    },
  ];

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) score += 1;
    });
    return score;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Ambient background lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 md:px-8 pt-6">
        {/* Universal Module Navigation Bar */}
        <ModuleNav
          track="system-design"
          currentModuleId="traffic"
          aiTutorLabel="Ask Nova about Load Balancing & Traffic"
        />

        {/* Hero Section */}
        <div className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-700 mb-2">
                <Scale size={13} className="text-[#f97316]" />
                <span>System Design Masterclass · Module 14</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">
                Load Balancing, Rate Limiting, Backpressure &amp; Traffic Management
              </h1>
              <p className="mt-2 max-w-3xl text-xs sm:text-sm text-stone-600 leading-relaxed">
                Keeping a platform responsive when demand spikes from 100 to 5,000 requests per second.
                Master Layer 4 vs. Layer 7 balancing, token-bucket rate limiting, Little&apos;s Law concurrency bounds,
                producer backpressure, circuit breakers, and cascading failure defense.
              </p>
            </div>

            {/* Quick Metadata Pill */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-xl bg-[#faf8f4] border border-stone-200 font-bold text-stone-700">
                Duration: 3 Weeks (35–45 hrs)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200 font-bold text-orange-700">
                Core: L4/L7 · Token Bucket · Backpressure · SRE
              </span>
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Load Balancing
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">L4 vs. L7 Proxies</span>
              <span className="text-[11px] text-stone-500">Connection &amp; Path Routing</span>
            </div>
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Rate Limiting
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">Token &amp; Leaky Buckets</span>
              <span className="text-[11px] text-stone-500">HTTP 429 Retry-After</span>
            </div>
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Little&apos;s Law
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">\(L = \lambda W\)</span>
              <span className="text-[11px] text-stone-500">Concurrency vs. Rate Limits</span>
            </div>
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Fault Isolation
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">Circuit Breakers</span>
              <span className="text-[11px] text-stone-500">Closed &rarr; Open &rarr; Half-Open</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="mb-8 flex items-center gap-1.5 overflow-x-auto rounded-2xl border border-[#e7e3da] bg-white/80 p-1.5 shadow-2xs backdrop-blur-md">
          {[
            { id: "curriculum", label: "Curriculum & Lessons", icon: BookOpen },
            { id: "simulators", label: "Interactive Simulators", icon: Zap },
            { id: "qa", label: "Senior Interview Q&A", icon: HelpCircle },
            { id: "project", label: "Practical Lab Tracker", icon: FolderTree },
            { id: "assessment", label: "Knowledge Check (Quiz)", icon: CheckCircle2 },
            { id: "reading", label: "Research & Reading", icon: ExternalLink },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* =====================================================================
            TAB 1: CURRICULUM & LESSONS (14.1 to 14.13)
        ====================================================================== */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            {/* Week Selector Bar */}
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200 pb-4">
              <div className="flex items-center gap-2">
                {[
                  { week: 1, title: "Week 1: Load Balancing & Routing Algorithms" },
                  { week: 2, title: "Week 2: Rate Limiting & Concurrency Control" },
                  { week: 3, title: "Week 3: Backpressure & Cascading Failure Defense" },
                ].map((w) => (
                  <button
                    key={w.week}
                    type="button"
                    onClick={() => {
                      setActiveWeek(w.week);
                      if (w.week === 1) setActiveLesson("14.1");
                      if (w.week === 2) setActiveLesson("14.6");
                      if (w.week === 3) setActiveLesson("14.10");
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      activeWeek === w.week
                        ? "bg-stone-900 text-white"
                        : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    {w.title}
                  </button>
                ))}
              </div>
              <span className="text-xs font-mono text-stone-500">
                13 Core Architectural Lessons
              </span>
            </div>

            {/* Lesson Navigation Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
              {activeWeek === 1 &&
                [
                  { id: "14.1", label: "14.1 Four Traffic Disciplines" },
                  { id: "14.2", label: "14.2 Cost vs. Capacity" },
                  { id: "14.3", label: "14.3 Layer 4 vs. Layer 7" },
                  { id: "14.4", label: "14.4 Balancing Algorithms" },
                  { id: "14.5", label: "14.5 Health Checks & Draining" },
                ].map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => setActiveLesson(l.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-bold transition cursor-pointer ${
                      activeLesson === l.id
                        ? "border-[#f97316] bg-orange-50 text-orange-900"
                        : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}

              {activeWeek === 2 &&
                [
                  { id: "14.6", label: "14.6 Rate Limiting Tiers" },
                  { id: "14.7", label: "14.7 Token vs Leaky Bucket" },
                  { id: "14.8", label: "14.8 Little's Law Concurrency" },
                  { id: "14.9", label: "14.9 Local vs Global Quotas" },
                ].map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => setActiveLesson(l.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-bold transition cursor-pointer ${
                      activeLesson === l.id
                        ? "border-[#f97316] bg-orange-50 text-orange-900"
                        : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}

              {activeWeek === 3 &&
                [
                  { id: "14.10", label: "14.10 Backpressure & Queues" },
                  { id: "14.11", label: "14.11 Retries, Jitter & Circuit Breakers" },
                  { id: "14.12", label: "14.12 Bulkheads & Load Shedding" },
                  { id: "14.13", label: "14.13 PrepSpaces Architecture" },
                ].map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => setActiveLesson(l.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-bold transition cursor-pointer ${
                      activeLesson === l.id
                        ? "border-[#f97316] bg-orange-50 text-orange-900"
                        : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
            </div>

            {/* ACTIVE LESSON VIEWPORT */}
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
              {/* LESSON 14.1 */}
              {activeLesson === "14.1" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 14.1 · Fundamentals
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      The Four Connected Disciplines of Production Traffic Control
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Imagine PrepSpaces launches publicly. Hundreds of candidates practice AI interviews, recruiters search
                    for talent, and students access learning courses. When traffic spikes from 100 to 5,000 requests per second,
                    simply adding more backend servers helps only when the system can distribute work, protect constrained
                    dependencies, and shed excess load safely.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <div className="flex items-center gap-2 mb-1.5 font-bold text-xs text-stone-900">
                        <Scale size={16} className="text-orange-600" />
                        <span>1. Load Balancing</span>
                      </div>
                      <p className="text-xs text-stone-600">
                        Distributes requests across available backend instances so no single server carries an unfair share of the workload.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <div className="flex items-center gap-2 mb-1.5 font-bold text-xs text-stone-900">
                        <Filter size={16} className="text-blue-600" />
                        <span>2. Rate Limiting</span>
                      </div>
                      <p className="text-xs text-stone-600">
                        Controls how many requests or operations a client, tenant, or service can initiate within a defined policy.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <div className="flex items-center gap-2 mb-1.5 font-bold text-xs text-stone-900">
                        <Inbox size={16} className="text-purple-600" />
                        <span>3. Backpressure</span>
                      </div>
                      <p className="text-xs text-stone-600">
                        Prevents a fast producer from overwhelming a slower consumer by regulating admission, concurrency, or submission rate.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <div className="flex items-center gap-2 mb-1.5 font-bold text-xs text-stone-900">
                        <ShieldCheck size={16} className="text-emerald-600" />
                        <span>4. Traffic Management</span>
                      </div>
                      <p className="text-xs text-stone-600">
                        Decides which requests to admit, delay, prioritize, route, retry, shed, or reject when system capacity or health changes.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm">
                    <strong>Google SRE Insight:</strong> A load balancer can distribute traffic evenly across already overloaded servers.
                    A rate limiter can control request arrival while doing nothing about expensive background jobs. A queue can absorb
                    a brief burst but causes catastrophic latency if allowed to grow without bounds. True reliability requires combining
                    all four disciplines.
                  </div>
                </div>
              )}

              {/* LESSON 14.2 */}
              {activeLesson === "14.2" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 14.2 · Capacity &amp; Cost
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Requests Are Not Equal: Cost, Capacity &amp; Utilization Math
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Treating all HTTP requests identically is a fatal design mistake. Consider four typical PrepSpaces requests:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden font-mono">
                      <thead className="bg-stone-100 text-stone-700 uppercase font-bold text-[10px]">
                        <tr>
                          <th className="p-3 border-b">Request Endpoint</th>
                          <th className="p-3 border-b">Illustrative Cost</th>
                          <th className="p-3 border-b">Primary Bottleneck</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-stone-800">
                        <tr className="bg-white">
                          <td className="p-3 font-bold text-stone-900">Load Course Catalogue</td>
                          <td className="p-3 text-emerald-600 font-bold">&lt; 5ms (Cached JSON)</td>
                          <td className="p-3 text-stone-600">Network &amp; Edge CDN</td>
                        </tr>
                        <tr className="bg-stone-50/50">
                          <td className="p-3 font-bold text-stone-900">Load Interview History</td>
                          <td className="p-3 text-amber-600 font-bold">~40ms (SQL Query)</td>
                          <td className="p-3 text-stone-600">DB Connections &amp; Index Scans</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 font-bold text-stone-900">Evaluate Answer with AI</td>
                          <td className="p-3 text-purple-600 font-bold">~2,500ms (LLM Inference)</td>
                          <td className="p-3 text-stone-600">Provider Quota, GPU Latency &amp; Cost</td>
                        </tr>
                        <tr className="bg-stone-50/50">
                          <td className="p-3 font-bold text-stone-900">Generate Comprehensive Report</td>
                          <td className="p-3 text-red-600 font-bold">~15,000ms (Multi-step pipeline)</td>
                          <td className="p-3 text-stone-600">Worker Pool, Queues &amp; Storage</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2 text-xs">
                    <h4 className="font-bold text-stone-900">The Utilization Equation:</h4>
                    <div className="p-3 rounded-lg bg-stone-900 text-stone-100 font-mono text-center text-sm">
                      {"Utilization = Offered Workload / Service Capacity"}
                    </div>
                    <p className="text-stone-600">
                      When offered workload exceeds service capacity for an extended period, queues grow and latency skyrockets.
                      As latency rises, requests remain in-flight longer, consuming server threads, sockets, and memory until the node collapses.
                    </p>
                  </div>
                </div>
              )}

              {/* LESSON 14.3 */}
              {activeLesson === "14.3" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 14.3 · Architecture
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Layer 4 (Transport) vs. Layer 7 (Application) Load Balancing
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Load balancers operate at different layers of the OSI model, with critical trade-offs between
                    packet-processing speed and application-aware routing capabilities.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <h4 className="font-bold text-xs text-stone-900 mb-2">Layer 4 Load Balancing (NLB)</h4>
                      <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside font-mono">
                        <li>Operates at TCP / UDP layer.</li>
                        <li>Routes based on IP 5-tuple: (Source IP, Dest IP, Source Port, Dest Port, Protocol).</li>
                        <li>Does NOT decrypt TLS or inspect HTTP headers/cookies/paths.</li>
                        <li>Extremely high throughput, sub-millisecond latency.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/60">
                      <h4 className="font-bold text-xs text-orange-950 mb-2">Layer 7 Load Balancing (ALB / Reverse Proxy)</h4>
                      <ul className="text-xs text-orange-900 space-y-1.5 list-disc list-inside font-mono">
                        <li>Operates at HTTP / HTTPS / gRPC layer.</li>
                        <li>Terminates TLS, parses URL paths, headers, and JWT claims.</li>
                        <li>Enables path routing: <code>/api/ai/*</code> to GPU nodes, <code>/api/reports/*</code> to workers.</li>
                        <li>Enforces cookie stickiness, gzip compression, and rate limiting.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Interactive Diagram Embed */}
                  <div className="mt-4">
                    <Layer4VsLayer7Diagram />
                  </div>
                </div>
              )}

              {/* LESSON 14.4 */}
              {activeLesson === "14.4" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 14.4 · Algorithms
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Load-Balancing Algorithms: Round Robin, Least Connections &amp; Hashing
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Selecting the right routing algorithm depends on request duration variance and backend homogeneity:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden font-mono">
                      <thead className="bg-stone-100 text-stone-700 uppercase font-bold text-[10px]">
                        <tr>
                          <th className="p-3 border-b">Algorithm</th>
                          <th className="p-3 border-b">Core Mechanism</th>
                          <th className="p-3 border-b">Primary Limitation</th>
                          <th className="p-3 border-b">Best Production Use</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-stone-800">
                        <tr className="bg-white">
                          <td className="p-3 font-bold text-stone-900">Round Robin</td>
                          <td className="p-3">Cycles sequentially: A &rarr; B &rarr; C</td>
                          <td className="p-3 text-red-600">Ignores request processing cost</td>
                          <td className="p-3">Homogeneous stateless API servers</td>
                        </tr>
                        <tr className="bg-stone-50/50">
                          <td className="p-3 font-bold text-stone-900">Weighted Round Robin</td>
                          <td className="p-3">Allocates traffic by capacity ratio</td>
                          <td className="p-3 text-amber-600">Static; does not adapt dynamically</td>
                          <td className="p-3">Mixed-spec server fleets</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 font-bold text-stone-900">Least Connections</td>
                          <td className="p-3">Routes to node with fewest active conns</td>
                          <td className="p-3 text-stone-600">Connection count != CPU utilization</td>
                          <td className="p-3">Long-lived connections (WebSockets, DB pools)</td>
                        </tr>
                        <tr className="bg-stone-50/50">
                          <td className="p-3 font-bold text-stone-900">Consistent Hashing</td>
                          <td className="p-3">Hashes request key (user/tenant ID) to ring</td>
                          <td className="p-3 text-stone-600">Hotspot risk if key distribution is skewed</td>
                          <td className="p-3">Distributed caches &amp; session stickiness</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 font-bold text-stone-900">Power of Two Choices</td>
                          <td className="p-3">Picks 2 random nodes, routes to less busy</td>
                          <td className="p-3 text-emerald-600">Near-optimal with zero central coordination</td>
                          <td className="p-3">Large-scale distributed microservices</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* LESSON 14.5 */}
              {activeLesson === "14.5" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 14.5 · High Availability
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Health Checks, Failover, Flapping &amp; Connection Draining
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    A load balancer must dynamically isolate failing backends without causing cascading collapse.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2">
                      <h4 className="font-bold text-xs text-stone-900">Liveness vs. Readiness Probes</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        <strong>Liveness:</strong> Checks if the process is alive. If it fails, orchestrators reboot the container.<br />
                        <strong>Readiness:</strong> Checks if the instance is ready to receive traffic. If database pools are saturated or caches warming, it stops receiving traffic without being killed.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2">
                      <h4 className="font-bold text-xs text-stone-900">Health-Check Flapping Storms</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        If health check thresholds are too aggressive, a minor latency blip causes servers to be removed.
                        Remaining servers take the full load, fail their checks, and drop out too. Use consecutive success/failure thresholds (e.g. 3 fails to remove, 5 passes to restore) and slow-start ramp-ups.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-900 text-stone-100 font-mono text-xs space-y-2">
                    <div className="text-orange-400 font-bold">// Graceful Connection Draining Workflow</div>
                    <div>1. Mark instance in State: DRAINING (stop routing new requests).</div>
                    <div>2. Allow in-flight requests to complete within configured deadline (e.g. 30 seconds).</div>
                    <div>3. Close idle keep-alive TCP connections gracefully.</div>
                    <div>4. Terminate process cleanly with SIGTERM &rarr; SIGKILL fallback.</div>
                  </div>
                </div>
              )}

              {/* LESSON 14.6 */}
              {activeLesson === "14.6" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 14.6 · Rate Limiting
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Rate Limiting Tiers: Edge, Gateway, Service &amp; Dependency
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Rate limiting must be enforced at multiple architectural tiers to protect against distinct failure modes:
                  </p>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl border border-stone-200 bg-[#faf8f4] flex items-start gap-3">
                      <span className="px-2 py-0.5 rounded bg-stone-200 font-mono text-[10px] font-bold text-stone-700">Tier 1</span>
                      <div>
                        <strong className="text-xs text-stone-900 block">Edge / CDN Protection (Cloudflare / CloudFront)</strong>
                        <span className="text-xs text-stone-600">Coarse IP-level DDoS defense, volumetric flood mitigation, TLS termination.</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl border border-stone-200 bg-[#faf8f4] flex items-start gap-3">
                      <span className="px-2 py-0.5 rounded bg-orange-200 font-mono text-[10px] font-bold text-orange-800">Tier 2</span>
                      <div>
                        <strong className="text-xs text-stone-900 block">API Gateway (Envoy / Kong)</strong>
                        <span className="text-xs text-stone-600">Per-user and per-tenant authenticated quotas. Inexpensive rejection before invoking app code.</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl border border-stone-200 bg-[#faf8f4] flex items-start gap-3">
                      <span className="px-2 py-0.5 rounded bg-purple-200 font-mono text-[10px] font-bold text-purple-800">Tier 3</span>
                      <div>
                        <strong className="text-xs text-stone-900 block">Application Service Layer</strong>
                        <span className="text-xs text-stone-600">Business-level constraints: max 5 concurrent AI interviews per organization, database transaction budgets.</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl border border-stone-200 bg-[#faf8f4] flex items-start gap-3">
                      <span className="px-2 py-0.5 rounded bg-emerald-200 font-mono text-[10px] font-bold text-emerald-800">Tier 4</span>
                      <div>
                        <strong className="text-xs text-stone-900 block">Outbound Dependency Client</strong>
                        <span className="text-xs text-stone-600">Protects third-party API quotas (e.g. OpenAI rate limits) with client-side token buckets.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 14.7 */}
              {activeLesson === "14.7" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 14.7 · Rate Limiting Algorithms
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Token Bucket, Leaky Bucket &amp; Sliding-Window Counters
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    How you calculate rate limits dictates whether your API tolerates natural user bursts or causes premature rejections:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2">
                      <h4 className="font-bold text-xs text-stone-900">Token Bucket (Industry Standard)</h4>
                      <p className="text-xs text-stone-600">
                        Tokens replenish at rate \(R\) up to capacity \(B\). Each request consumes 1 token.
                        Permits bursts of up to \(B\) requests if tokens exist. Perfect for interactive web APIs.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2">
                      <h4 className="font-bold text-xs text-stone-900">Leaky Bucket</h4>
                      <p className="text-xs text-stone-600">
                        Requests enter a bounded queue and leak out at a strictly constant rate.
                        Smooths traffic spikes into an even flow. Excess requests over queue capacity are dropped.
                      </p>
                    </div>
                  </div>

                  {/* Interactive Diagram Embed */}
                  <div className="mt-4">
                    <TokenBucketLifecycleDiagram />
                  </div>
                </div>
              )}

              {/* LESSON 14.8 */}
              {activeLesson === "14.8" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 14.8 · Concurrency Limits
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Rate Limits vs. Concurrency Limits &amp; Little&apos;s Law
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    A rate limit restricts arrival frequency (requests per second). A concurrency limit restricts
                    simultaneous work in flight (active threads, sockets, database connections).
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
                    <div className="text-orange-400 font-bold text-sm">// Little&apos;s Law: L = \lambda \times W</div>
                    <div className="text-stone-300">
                      Where:<br />
                      &nbsp;&nbsp;<strong>L</strong> = Average in-flight requests in system.<br />
                      &nbsp;&nbsp;<strong>\lambda</strong> = Admitted arrival rate (requests / second).<br />
                      &nbsp;&nbsp;<strong>W</strong> = Average duration spent in system (seconds).
                    </div>
                    <div className="p-3 rounded-lg bg-stone-800 text-amber-300">
                      Example: If arrival rate λ = 10 req/s and AI evaluation takes W = 20 s:<br />
                      L = 10 &times; 20 = 200 concurrent requests in flight!
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs text-stone-700 space-y-2">
                    <h4 className="font-bold text-stone-900">Why rate limits alone fail:</h4>
                    <p>
                      If a downstream AI service slows down from 2s to 20s, a rate limit of 10 req/s continues admitting work.
                      In-flight operations multiply 10x, exhausting the server&apos;s thread pool and database connections.
                      Systems must enforce explicit <strong>concurrency limits</strong> (e.g. semaphore of max 50 active AI tasks).
                    </p>
                  </div>
                </div>
              )}

              {/* LESSON 14.9 */}
              {activeLesson === "14.9" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 14.9 · Distributed Architecture
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Local Rate Limiting vs. Global Distributed Quotas
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    When running 10 API Gateway replicas, how should a &quot;100 requests per minute&quot; quota be enforced?
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2">
                      <h4 className="font-bold text-xs text-stone-900">Local Rate Limits</h4>
                      <p className="text-xs text-stone-600">
                        Each gateway instance manages its own in-memory token bucket. Zero network hops. Fast (~0.1ms).
                      </p>
                      <div className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
                        <strong>Trap:</strong> If traffic spreads across 10 replicas, a user effectively gets 1,000 req/min!
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2">
                      <h4 className="font-bold text-xs text-stone-900">Global Rate Limits</h4>
                      <p className="text-xs text-stone-600">
                        Gateways synchronize counters using Redis or Envoy Rate Limit Service (RLS) via atomic Lua scripts.
                      </p>
                      <div className="text-[11px] text-emerald-800 bg-emerald-50 p-2 rounded border border-emerald-200">
                        <strong>Tradeoff:</strong> Strictly enforces tenant-wide quota, but adds 1–2ms Redis network latency per request.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 14.10 */}
              {activeLesson === "14.10" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 14.10 · Pipeline Protection
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Backpressure: Bounded Queues, Producer Throttling &amp; Little&apos;s Law
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    When interview submissions arrive at 400 events/sec but report workers process only 250 jobs/sec,
                    backlog grows by 150 jobs/sec (90,000 jobs in 10 minutes!).
                  </p>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-2">
                    <div className="font-bold flex items-center gap-1.5 text-amber-900">
                      <AlertTriangle size={16} />
                      <span>Queue Backlog is Stored Latency</span>
                    </div>
                    <p>
                      Queues do not create capacity; they only buy time for transient spikes. A growing backlog increases
                      end-to-end user latency, memory usage, and recovery time. If the arrival rate persistently exceeds
                      worker capacity, the queue must be bounded and excess work rejected early.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <span className="font-bold text-stone-900 block mb-1">1. Bounded Queues</span>
                      Cap maximum depth (e.g. 5,000 jobs). Reject or drop new work once full.
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <span className="font-bold text-stone-900 block mb-1">2. Producer Throttling</span>
                      Force producers to slow down ingestion rate (TCP flow control or HTTP 429).
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <span className="font-bold text-stone-900 block mb-1">3. HTTP 202 Accepted</span>
                      Return 202 with job ID if accepted; return 503 Service Unavailable if queue is full.
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 14.11 */}
              {activeLesson === "14.11" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 14.11 · Cascading Failures
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Deadlines, Exponential Backoff, Jitter &amp; Circuit Breakers
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Uncontrolled retries are the primary amplifier of cascading outages. When a dependency slows down,
                    retries multiply traffic at the worst possible moment.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2">
                      <h4 className="font-bold text-xs text-stone-900">Exponential Backoff with Full Jitter</h4>
                      <div className="p-2.5 rounded bg-stone-900 text-stone-100 font-mono text-[10px]">
                        sleep = rand(0, min(max_backoff, base * 2 ^ attempt))
                      </div>
                      <p className="text-xs text-stone-600">
                        Random jitter decorrelates retry bursts across clients, preventing synchronized traffic waves.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2">
                      <h4 className="font-bold text-xs text-stone-900">Circuit Breakers</h4>
                      <p className="text-xs text-stone-600">
                        Tracks failure rates. Trips to <code>OPEN</code> when errors spike, failing fast without hitting downstream.
                        Transitions to <code>HALF-OPEN</code> to probe recovery with canary requests.
                      </p>
                    </div>
                  </div>

                  {/* Interactive Diagram Embed */}
                  <div className="mt-4">
                    <CircuitBreakerStateDiagram />
                  </div>
                </div>
              )}

              {/* LESSON 14.12 */}
              {activeLesson === "14.12" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 14.12 · Fault Isolation
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Bulkheads, Load Shedding &amp; Graceful Degradation
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Under severe overload, a platform must shed non-critical work to preserve core business functionality:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden font-mono">
                      <thead className="bg-stone-100 text-stone-700 uppercase font-bold text-[10px]">
                        <tr>
                          <th className="p-3 border-b">Feature</th>
                          <th className="p-3 border-b">Degraded Behavior</th>
                          <th className="p-3 border-b">Business Rationale</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-stone-800">
                        <tr className="bg-white">
                          <td className="p-3 font-bold text-stone-900">Course Catalogue</td>
                          <td className="p-3 text-emerald-700">Serve stale cache from Edge CDN</td>
                          <td className="p-3">Zero database traffic; users browse content normally</td>
                        </tr>
                        <tr className="bg-stone-50/50">
                          <td className="p-3 font-bold text-stone-900">Analytics Dashboard</td>
                          <td className="p-3 text-amber-700">Display 1-hour cached aggregates</td>
                          <td className="p-3">Saves massive OLAP query overhead</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 font-bold text-stone-900">AI Report Generation</td>
                          <td className="p-3 text-purple-700">Queue task asynchronously with 202</td>
                          <td className="p-3">Candidate informed report will arrive in 10 minutes</td>
                        </tr>
                        <tr className="bg-emerald-50/60">
                          <td className="p-3 font-bold text-emerald-950">Interview Submission</td>
                          <td className="p-3 text-emerald-900 font-bold">Authoritative DB write preserved</td>
                          <td className="p-3">Never fabricate success; candidate score must be persisted safely</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* LESSON 14.13 */}
              {activeLesson === "14.13" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 14.13 · Production Architecture
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      The Complete PrepSpaces Traffic-Management Architecture
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    By combining edge caching, gateway rate limiting, application concurrency controls, bounded queues,
                    and circuit breakers, PrepSpaces forms 7 independent defense perimeters:
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2">
                    <div className="text-orange-400 font-bold">// 7 Defense Perimeters</div>
                    <div>1. [Cloudflare Edge]: DDoS scrubbing, CDN caching, coarse IP flood limits.</div>
                    <div>2. [ALB / Gateway]: TLS termination, path routing, tenant token-bucket rate limiting.</div>
                    <div>3. [Auth Service]: Identity validation, token claims, tier-based quotas.</div>
                    <div>4. [App Admission]: Concurrency semaphore (max 50 in-flight AI evaluations).</div>
                    <div>5. [Bounded Queue]: RabbitMQ/Kafka capped at 10,000 jobs with dead-letter queue.</div>
                    <div>6. [Worker Fleet]: Little&apos;s Law capacity scaling (N = Arrival / Throughput).</div>
                    <div>7. [Dependency Circuit Breaker]: Fail-fast protection against external AI provider timeouts.</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 2: INTERACTIVE SIMULATORS (3 SIMULATORS)
        ====================================================================== */}
        {activeTab === "simulators" && (
          <div className="space-y-8">
            {/* SIMULATOR 1: TOKEN BUCKET RATE LIMITER */}
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                    Interactive Simulator 1
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-stone-900">
                    Token Bucket Rate Limiter with Burst &amp; Refill Controls
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Configure bucket capacity and steady refill rate. Fire traffic bursts and observe token consumption and HTTP 429 rejections.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetRateLimiter}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 text-xs font-bold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                >
                  <RotateCcw size={13} />
                  <span>Reset</span>
                </button>
              </div>

              {/* Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-stone-700">Bucket Capacity (Burst Limit):</span>
                    <span className="font-mono text-orange-600">{bucketCapacity} tokens</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    value={bucketCapacity}
                    onChange={(e) => setBucketCapacity(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-stone-700">Refill Rate:</span>
                    <span className="font-mono text-orange-600">{refillRate} tokens/sec</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    value={refillRate}
                    onChange={(e) => setRefillRate(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>
              </div>

              {/* Live Status Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Available Tokens</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-extrabold text-stone-900 font-mono">
                      {Math.floor(availableTokens)}
                    </span>
                    <span className="text-xs text-stone-500 font-mono">/ {bucketCapacity}</span>
                  </div>
                  <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden mt-2">
                    <div
                      className="bg-emerald-500 h-full transition-all duration-200"
                      style={{ width: `${(availableTokens / bucketCapacity) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Admitted Requests</span>
                  <span className="text-3xl font-extrabold text-emerald-700 font-mono mt-1 block">
                    {admittedRequests}
                  </span>
                  <span className="text-[11px] text-stone-500">HTTP 200 OK passed to backend</span>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Throttled Requests</span>
                  <span className="text-3xl font-extrabold text-red-600 font-mono mt-1 block">
                    {throttledRequests}
                  </span>
                  <span className="text-[11px] text-stone-500">HTTP 429 Too Many Requests</span>
                </div>
              </div>

              {/* Burst Buttons */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  type="button"
                  onClick={() => sendClientRequests(1)}
                  className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition cursor-pointer"
                >
                  Send 1 Request
                </button>
                <button
                  type="button"
                  onClick={() => sendClientRequests(5)}
                  className="px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer"
                >
                  Burst 5 Requests
                </button>
                <button
                  type="button"
                  onClick={() => sendClientRequests(20)}
                  className="px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition cursor-pointer"
                >
                  Flood 20 Requests
                </button>
              </div>

              {/* Log Stream */}
              <div className="rounded-2xl border border-stone-200 bg-stone-900 p-4 font-mono text-xs text-stone-100 max-h-36 overflow-y-auto space-y-1">
                {rateLimitLog.map((l, i) => (
                  <div
                    key={i}
                    className={
                      l.includes("429")
                        ? "text-red-400 font-bold"
                        : l.includes("200 OK")
                        ? "text-emerald-400"
                        : "text-stone-300"
                    }
                  >
                    {l}
                  </div>
                ))}
              </div>
            </div>

            {/* SIMULATOR 2: CIRCUIT BREAKER */}
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                    Interactive Simulator 2
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-stone-900">
                    Circuit Breaker &amp; Downstream Dependency Protector
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Simulate AI Provider timeouts. Watch consecutive errors trip the circuit to OPEN (fail fast in 1ms) and test recovery via HALF-OPEN.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetCircuit}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 text-xs font-bold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                >
                  <RotateCcw size={13} />
                  <span>Reset</span>
                </button>
              </div>

              {/* State Display Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div
                  className={`p-4 rounded-xl border text-center transition ${
                    circuitState === "CLOSED"
                      ? "bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500 shadow-xs"
                      : "bg-[#faf8f4] border-stone-200 opacity-50"
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase block">State 1</span>
                  <strong className="text-base text-emerald-950 mt-1 block">CLOSED</strong>
                  <span className="text-[11px] text-stone-600">Normal forward flow</span>
                </div>

                <div
                  className={`p-4 rounded-xl border text-center transition ${
                    circuitState === "OPEN"
                      ? "bg-red-50 border-red-300 ring-2 ring-red-500 shadow-xs"
                      : "bg-[#faf8f4] border-stone-200 opacity-50"
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-red-800 uppercase block">State 2</span>
                  <strong className="text-base text-red-950 mt-1 block">OPEN</strong>
                  <span className="text-[11px] text-stone-600">Failing fast (1ms)</span>
                </div>

                <div
                  className={`p-4 rounded-xl border text-center transition ${
                    circuitState === "HALF_OPEN"
                      ? "bg-amber-50 border-amber-300 ring-2 ring-amber-500 shadow-xs"
                      : "bg-[#faf8f4] border-stone-200 opacity-50"
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-amber-800 uppercase block">State 3</span>
                  <strong className="text-base text-amber-950 mt-1 block">HALF-OPEN</strong>
                  <span className="text-[11px] text-stone-600">Testing trial probe</span>
                </div>
              </div>

              {/* Action Controls */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  type="button"
                  onClick={() => handleCircuitCall(true)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition cursor-pointer"
                >
                  Send Successful Request (200 OK)
                </button>
                <button
                  type="button"
                  onClick={() => handleCircuitCall(false)}
                  className="px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition cursor-pointer"
                >
                  Inject Timeout (504 Gateway Timeout)
                </button>
                <button
                  type="button"
                  onClick={triggerCooldownExpiry}
                  disabled={circuitState !== "OPEN"}
                  className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition cursor-pointer disabled:opacity-40"
                >
                  Fast-Forward Cooldown &rarr; HALF-OPEN
                </button>
              </div>

              {/* Console Log */}
              <div className="rounded-2xl border border-stone-200 bg-stone-900 p-4 font-mono text-xs text-stone-100 max-h-36 overflow-y-auto space-y-1">
                {circuitLog.map((log, idx) => (
                  <div
                    key={idx}
                    className={
                      log.includes("TRIPPED") || log.includes("FAILED")
                        ? "text-red-400 font-bold"
                        : log.includes("SUCCEEDED") || log.includes("200 OK")
                        ? "text-emerald-400 font-bold"
                        : log.includes("EXPIRED")
                        ? "text-amber-300"
                        : "text-stone-300"
                    }
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* SIMULATOR 3: BACKPRESSURE & LITTLE'S LAW CALCULATOR */}
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                    Interactive Simulator 3
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-stone-900">
                    Backpressure, Queue Growth &amp; Little&apos;s Law Calculator
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Model producer arrival vs. consumer processing rates. Calculate Little&apos;s Law in-flight concurrency ($L = \lambda W$) and time to drain backlogs.
                  </p>
                </div>
              </div>

              {/* Slider Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-stone-700">Arrival Rate (\(\lambda\)):</span>
                    <span className="font-mono text-orange-600">{arrivalRate} jobs/s</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="800"
                    step="50"
                    value={arrivalRate}
                    onChange={(e) => setArrivalRate(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-stone-700">Worker Capacity:</span>
                    <span className="font-mono text-orange-600">{processingRate} jobs/s</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="600"
                    step="50"
                    value={processingRate}
                    onChange={(e) => setProcessingRate(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-stone-700">Mean Job Duration (\(W\)):</span>
                    <span className="font-mono text-orange-600">{meanJobTime}s</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={meanJobTime}
                    onChange={(e) => setMeanJobTime(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>
              </div>

              {/* Computed Math Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Capacity Utilization</span>
                  <span className="text-2xl font-extrabold text-stone-900 font-mono mt-1 block">
                    {backpressureMetrics.utilization}%
                  </span>
                  <span className="text-[11px] text-stone-500">
                    {arrivalRate > processingRate ? "OVER CAPACITY!" : "Sustainable"}
                  </span>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">In-Flight Concurrency (L)</span>
                  <span className="text-2xl font-extrabold text-stone-900 font-mono mt-1 block">
                    {backpressureMetrics.inFlightConcurrency}
                  </span>
                  <span className="text-[11px] text-stone-500">Little&apos;s Law \(L = \lambda W\)</span>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Backlog Growth (60s)</span>
                  <span className="text-2xl font-extrabold text-orange-600 font-mono mt-1 block">
                    +{backpressureMetrics.backlog60s}
                  </span>
                  <span className="text-[11px] text-stone-500">+{backpressureMetrics.netGrowthPerSec} jobs/sec</span>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Time to Drain (at 100 rps)</span>
                  <span className="text-2xl font-extrabold text-emerald-700 font-mono mt-1 block">
                    {backpressureMetrics.timeToDrainCurrentBacklog}s
                  </span>
                  <span className="text-[11px] text-stone-500">Recovery duration</span>
                </div>
              </div>

              {/* Status Alert Banner */}
              <div
                className={`p-3.5 rounded-xl border text-xs font-mono ${
                  backpressureMetrics.status === "HEALTHY"
                    ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                    : "bg-red-50 border-red-300 text-red-900"
                }`}
              >
                {backpressureMetrics.status === "HEALTHY" ? (
                  <span>[HEALTHY PIPELINE] Consumer capacity exceeds arrival rate. Queue remains near zero depth.</span>
                ) : (
                  <span>
                    [BACKPRESSURE TRIGGERED] Arrival exceeds consumer throughput by {backpressureMetrics.netGrowthPerSec} jobs/sec. Bounded queue will reach limit in {backpressureMetrics.timeToExhaustLimitSec}s. Admission control must reject or shed load!
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 3: SENIOR INTERVIEW Q&A (6 SCENARIOS)
        ====================================================================== */}
        {activeTab === "qa" && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-4 mb-4">
              <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                Senior Staff &amp; Principal Questions
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                Load Balancing, Rate Limiting &amp; Backpressure Interview Scenarios
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Real-world high-throughput architectural trade-offs asked at Google, AWS, Meta, and Stripe.
              </p>
            </div>

            {[
              {
                id: "qa-1",
                q: "How do you distinguish between rate limiting and concurrency limiting, and when should both be used together?",
                answer:
                  "Rate limiting restricts the frequency of request arrival (e.g. 100 requests per minute).\n\nConcurrency limiting restricts the number of active, in-flight operations being executed simultaneously (e.g. at most 20 AI evaluations running concurrently).\n\nWhy both are needed:\nBy Little's Law (L = \lambda * W), average concurrency equals arrival rate multiplied by latency. If a downstream service slows down from 200ms to 10 seconds, a purely rate-limited API will continue admitting requests at the configured rate, causing in-flight concurrency to multiply by 50x! This exhausts thread pools, memory, and database connections. A robust system pairs rate limits (to protect against request floods) with concurrency limits (to cap simultaneous resource consumption).",
              },
              {
                id: "qa-2",
                q: "Why can a standard round-robin load balancer cause server overloads in microservice environments?",
                answer:
                  "Round robin assumes that every request has approximately equal computational cost and that all backend nodes have identical processing capacity.\n\nIn modern microservices:\n1. Heterogeneous Request Costs: One request might fetch a 2KB cached profile (taking 2ms), while the next triggers an intensive 15-second PDF report compilation or complex SQL aggregation.\n2. Server Drift: One node may be undergoing garbage collection pauses, noisy-neighbor CPU throttling, or connection pool stalls.\n\nUnder round-robin, an overloaded node continues receiving exactly the same number of requests as completely idle nodes. Workload-aware algorithms (such as Least Connections, Peak-EWMA, or Power of Two Choices) prevent this by routing traffic to nodes with the fewest active tasks.",
              },
              {
                id: "qa-3",
                q: "What is the difference between active and passive health checking, and how do you prevent health-check flapping storms?",
                answer:
                  "Active Health Checking: The load balancer periodically sends dedicated probes (e.g. GET /healthz every 5 seconds) to each backend.\nPassive Health Checking (Outlier Detection): The load balancer observes real production traffic. If a backend returns consecutive 5xx errors or connection timeouts, it is temporarily ejected.\n\nPreventing Flapping Storms:\nIf health check thresholds are too sensitive, a minor network blip removes several backends. The remaining servers receive all the traffic, become overwhelmed, fail their own checks, and the entire cluster collapses in a cascading failure.\n\nMitigation Strategy:\n• Consecutive thresholds: Require 3 consecutive failures to eject, and 5 consecutive successes to re-admit.\n• Ejection caps: Enforce that no more than 50% of the fleet can be ejected simultaneously.\n• Slow-start ramp: When an instance recovers, gradually ramp up its traffic share over 60 seconds rather than blasting it with full load immediately.",
              },
              {
                id: "qa-4",
                q: "How do you implement global rate limiting across a horizontally scaled gateway cluster without making the central store a single point of failure?",
                answer:
                  "A naive global rate limiter forces every API Gateway instance to execute a synchronous roundtrip to Redis for every single request. If Redis slows down or fails, the entire gateway fleet stalls.\n\nProduction Strategy (Envoy RLS / Batching Pattern):\n1. Local Token Buckets with Batch Sync: Gateway instances maintain in-memory token buckets for instant sub-millisecond evaluation, while asynchronously claiming token allocations in batches from Redis (e.g., reserving 50 tokens at a time).\n2. Fallback on Redis Failure: If the central Redis cluster becomes unreachable, gateways automatically degrade to local in-memory rate limiting with slightly relaxed quotas ('fail-open' for legitimate traffic rather than blocking everyone).\n3. Redis Cluster / Sharding: Keys are partitioned across Redis nodes by tenant ID (e.g. `{tenant:1042}:rate_limit`) to distribute read/write load.",
              },
              {
                id: "qa-5",
                q: "Why do uncoordinated retries cause cascading failures, and how do exponential backoff with jitter and retry budgets prevent this?",
                answer:
                  "When a downstream service slows down due to overload, clients experience timeouts. If thousands of clients immediately retry simultaneously, the incoming traffic multiplies (e.g. 2x to 5x normal volume). This retry storm crushes the struggling service, preventing it from ever recovering.\n\nThree Core Mitigations:\n1. Exponential Backoff: Delays subsequent retries exponentially (e.g. 200ms, 400ms, 800ms, 1600ms).\n2. Full Jitter: Replaces deterministic delays with uniform random intervals: `sleep = rand(0, min(max_backoff, base * 2^attempt))`. This decorrelates client attempts so requests do not hit the server in synchronized waves.\n3. Retry Budgets (e.g. gRPC standard): Clients track the ratio of retries to total requests. If retries exceed 10% of total traffic, further retries are suppressed immediately.",
              },
              {
                id: "qa-6",
                q: "How should an API Gateway handle backpressure when background workers are falling behind on processing?",
                answer:
                  "When background processing queues exceed safety thresholds, the API Gateway must stop blindly accepting requests:\n\n1. Asynchronous Ingestion with Bounded Queues: Return HTTP 202 Accepted with a Location header and polling URL (`/jobs/{id}`) instead of holding synchronous HTTP connections open.\n2. Queue Depth & Message Age Thresholds: If queue depth exceeds capacity or oldest message age exceeds SLA (e.g. 60 seconds), return HTTP 503 Service Unavailable with a `Retry-After: 30` header.\n3. Load Shedding by Priority: Shed non-critical background jobs (e.g. analytics refreshes, recommendation recalculations) while preserving interactive user progress submissions.",
              },
            ].map((qa) => {
              const isExpanded = expandedQA[qa.id];
              return (
                <div
                  key={qa.id}
                  className="rounded-2xl border border-stone-200 bg-white p-5 shadow-2xs transition"
                >
                  <button
                    type="button"
                    onClick={() => toggleQA(qa.id)}
                    className="flex w-full items-start justify-between gap-4 text-left cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-orange-100 font-mono text-xs font-bold text-orange-700">
                        ?
                      </span>
                      <h3 className="font-bold text-stone-900 text-sm sm:text-base">{qa.q}</h3>
                    </div>
                    <span className="text-stone-400 font-mono text-xs font-bold">
                      {isExpanded ? "−" : "+"}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-stone-100 text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-line pl-9">
                      {qa.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* =====================================================================
            TAB 4: PRACTICAL LAB TRACKER (5 PHASES, 9 DELIVERABLES)
        ====================================================================== */}
        {activeTab === "project" && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-4 mb-4">
              <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                Production Engineering Milestone
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                Final Project: Build a High-Throughput Traffic-Protection Simulator
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Demonstrate how to distribute traffic, enforce rate limits, handle producer backpressure, and prevent cascading failure under 5,000 req/s load.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between text-xs font-bold mb-2">
                <span className="text-stone-700">Lab Deliverables Completion:</span>
                <span className="text-orange-600 font-mono">
                  {Math.round(
                    (Object.values(projectChecklist).filter(Boolean).length /
                      Object.keys(projectChecklist).length) *
                      100
                  )}
                  %
                </span>
              </div>
              <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#f97316] h-full transition-all duration-300"
                  style={{
                    width: `${
                      (Object.values(projectChecklist).filter(Boolean).length /
                        Object.keys(projectChecklist).length) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* Checklist items across 5 phases */}
            <div className="space-y-4">
              {[
                {
                  phase: "Phase A: Load Balancing & Health Checks",
                  items: [
                    {
                      key: "phaseA_load_balancer",
                      title: "1. Workload-Aware Backend Distribution",
                      desc: "Deploy 3 backend instances with simulated heterogeneous processing durations. Compare Round Robin vs Least Connections.",
                    },
                    {
                      key: "phaseA_health_checks",
                      title: "2. Active Health Checking & Flapping Prevention",
                      desc: "Implement active /healthz probes with consecutive failure thresholds and graceful connection draining.",
                    },
                  ],
                },
                {
                  phase: "Phase B: Rate Limiting & Quota Management",
                  items: [
                    {
                      key: "phaseB_token_bucket",
                      title: "3. Token Bucket Rate Limiter Implementation",
                      desc: "Implement capacity of 20 tokens and refill rate of 10 tokens/s; return HTTP 429 with Retry-After header on exhaustion.",
                    },
                    {
                      key: "phaseB_global_quota",
                      title: "4. Multi-Replica Gateway Quota Coordination",
                      desc: "Verify that local in-memory rate limiters do not multiply shared quotas across gateway replicas.",
                    },
                  ],
                },
                {
                  phase: "Phase C: Backpressure & Bounded Queues",
                  items: [
                    {
                      key: "phaseC_bounded_queue",
                      title: "5. Bounded Queue Backlog Controller",
                      desc: "Set maximum queue depth and oldest-message age threshold; verify queue does not grow infinitely under overload.",
                    },
                    {
                      key: "phaseC_admission_control",
                      title: "6. HTTP 202 Accepted & Load Shedding",
                      desc: "Return 202 Accepted for valid asynchronous tasks, but reject with 503 when downstream workers fall behind.",
                    },
                  ],
                },
                {
                  phase: "Phase D: Dependency Protection & Cascading Defense",
                  items: [
                    {
                      key: "phaseD_circuit_breaker",
                      title: "7. Circuit Breaker Finite State Machine",
                      desc: "Implement CLOSED -> OPEN -> HALF-OPEN transitions with fail-fast response and cooldown trial canary calls.",
                    },
                    {
                      key: "phaseD_retry_jitter",
                      title: "8. Bounded Retries with Exponential Backoff & Jitter",
                      desc: "Enforce request deadlines, maximum retry budgets, and randomized jitter to stop retry amplification storms.",
                    },
                  ],
                },
                {
                  phase: "Phase E: Worker Autoscaling Model",
                  items: [
                    {
                      key: "phaseE_autoscaling_model",
                      title: "9. Bottleneck-Aware Worker Autoscaler",
                      desc: "Scale workers based on queue age, while enforcing that adding workers does not exceed external AI provider quotas.",
                    },
                  ],
                },
              ].map((sec, idx) => (
                <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-2xs">
                  <h4 className="font-extrabold text-stone-900 text-sm mb-3 text-orange-600 font-mono">
                    {sec.phase}
                  </h4>
                  <div className="space-y-3">
                    {sec.items.map((item) => (
                      <div
                        key={item.key}
                        onClick={() => toggleChecklist(item.key)}
                        className="flex items-start gap-3 p-3 rounded-xl border border-stone-100 bg-[#faf8f4] hover:bg-stone-100 transition cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={projectChecklist[item.key]}
                          onChange={() => {}}
                          className="mt-0.5 rounded text-orange-600 focus:ring-orange-500 cursor-pointer"
                        />
                        <div>
                          <span className="font-bold text-xs text-stone-900 block">{item.title}</span>
                          <span className="text-xs text-stone-600 mt-0.5 block">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 5: ASSESSMENT QUIZ (7 QUESTIONS VERBATIM)
        ====================================================================== */}
        {activeTab === "assessment" && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-4 mb-4">
              <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                Verification &amp; Mastery
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                Module 14 Knowledge Check: Traffic Control &amp; Reliability
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Evaluate your architectural comprehension of load balancing, rate limiting, and backpressure.
              </p>
            </div>

            {/* Questions List */}
            <div className="space-y-5">
              {quizQuestions.map((q) => {
                const isSelected = selectedAnswers[q.id] !== undefined;
                const selectedOption = selectedAnswers[q.id];
                const isCorrect = selectedOption === q.correct;

                return (
                  <div
                    key={q.id}
                    className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-stone-900 font-mono text-xs font-bold text-white">
                        {q.id}
                      </span>
                      <h3 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
                        {q.question}
                      </h3>
                    </div>

                    <div className="space-y-2 pl-9">
                      {q.options.map((opt, idx) => {
                        let optBg = "border-stone-200 bg-[#faf8f4] text-stone-700 hover:bg-stone-100";
                        if (quizSubmitted) {
                          if (idx === q.correct) {
                            optBg = "border-emerald-300 bg-emerald-50 text-emerald-950 font-bold";
                          } else if (selectedOption === idx) {
                            optBg = "border-red-300 bg-red-50 text-red-950 line-through";
                          }
                        } else if (selectedOption === idx) {
                          optBg = "border-orange-500 bg-orange-50 text-orange-950 font-bold";
                        }

                        return (
                          <div
                            key={idx}
                            onClick={() => handleSelectAnswer(q.id, idx)}
                            className={`p-3 rounded-xl border text-xs sm:text-sm transition cursor-pointer ${optBg}`}
                          >
                            {opt}
                          </div>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-4 pt-3 border-t border-stone-100 pl-9 text-xs text-stone-600 leading-relaxed">
                        <strong className={isCorrect ? "text-emerald-700" : "text-red-700"}>
                          {isCorrect ? "✓ Correct!" : "✗ Incorrect."}
                        </strong>{" "}
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submit / Reset Actions */}
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs flex items-center justify-between flex-wrap gap-4">
              <div>
                {quizSubmitted ? (
                  <div className="text-xs sm:text-sm font-bold text-stone-900">
                    Your Score:{" "}
                    <span className="text-orange-600 font-mono text-base">
                      {calculateScore()} / {quizQuestions.length}
                    </span>{" "}
                    ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                  </div>
                ) : (
                  <div className="text-xs text-stone-500">
                    Answer all 7 questions before submitting for feedback.
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                {quizSubmitted ? (
                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="px-4 py-2 rounded-xl border border-stone-200 bg-stone-50 text-xs font-bold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                  >
                    Retake Quiz
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                    className="px-5 py-2.5 rounded-xl bg-[#f97316] text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer disabled:opacity-50"
                  >
                    Submit Answers
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 6: RESEARCH & UNIVERSITY READING LIST (6 CITATIONS)
        ====================================================================== */}
        {activeTab === "reading" && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-4 mb-4">
              <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                Academic &amp; Industry Literature
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                Seminal Guides &amp; Production Engineering References
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                The authoritative foundations of traffic control, capacity engineering, and cascading failure defense.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: 1,
                  title: "Google SRE: Handling Overload",
                  focus:
                    "Capacity protection, queues, load shedding, and graceful degradation. Learn how to design services that reject work safely rather than collapsing under excess demand.",
                  url: "https://sre.google/sre-book/handling-overload/",
                  source: "Google Site Reliability Engineering",
                },
                {
                  id: 2,
                  title: "Google SRE: Addressing Cascading Failures",
                  focus:
                    "Study how failures spread through dependencies, why queue management matters, and how uncoordinated retries multiply outages.",
                  url: "https://sre.google/sre-book/addressing-cascading-failures/",
                  source: "Google Site Reliability Engineering",
                },
                {
                  id: 3,
                  title: "NGINX HTTP Load Balancing Administration Guide",
                  focus:
                    "Comprehensive review of round robin, least connections, IP hashing, upstream proxying, active health checks, and slow-start ramp-ups.",
                  url: "https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/",
                  source: "F5 / NGINX Documentation",
                },
                {
                  id: 4,
                  title: "Envoy: Local and Global Rate Limiting Architecture",
                  focus:
                    "Deep architectural comparison of per-instance token buckets vs central gRPC Rate Limit Service (RLS) coordination.",
                  url: "https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/other_features/global_rate_limiting.html",
                  source: "Envoy Proxy Documentation",
                },
                {
                  id: 5,
                  title: "Kubernetes: Horizontal Pod Autoscaling (HPA)",
                  focus:
                    "How autoscalers calculate desired replica counts from CPU, memory, and custom queue metrics, and why control loop delays matter.",
                  url: "https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/",
                  source: "Kubernetes Documentation",
                },
                {
                  id: 6,
                  title: "Amazon Builders' Library: Timeouts, Retries and Backoff with Jitter",
                  focus:
                    "AWS's definitive engineering guide on exponential backoff, jitter algorithms, retry budgets, and circuit breaker patterns.",
                  url: "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/",
                  source: "Amazon Builders' Library",
                },
              ].map((paper) => (
                <a
                  key={paper.id}
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 mb-2">
                      <span className="font-bold text-orange-600">Resource {paper.id}</span>
                      <span>{paper.source}</span>
                    </div>
                    <h4 className="font-bold text-sm text-stone-900 group-hover:text-orange-600 transition">
                      {paper.title}
                    </h4>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">{paper.focus}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-orange-600">
                    <span>Read Guide / Architecture Spec</span>
                    <ExternalLink size={13} />
                  </div>
                </a>
              ))}
            </div>

            {/* What Comes Next Banner */}
            <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50/70 p-5 flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
                  What You Mastered in Module 14
                </span>
                <span className="text-sm font-bold text-stone-900 block mt-0.5">
                  Load Balancing, Rate Limiting, Backpressure &amp; Traffic Management
                </span>
                <span className="text-xs text-stone-600 block mt-0.5">
                  You now know how to architect production traffic control using L4/L7 load balancers, token-bucket rate limiters, Little&apos;s Law concurrency bounds ($L = \lambda W$), bounded backpressure queues, circuit breakers, and load shedding.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigate("/learning/system-design/transactions")}
                  className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Module 13</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("assessment")}
                  className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                >
                  <span>Module 14 Quiz</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/learning/system-design/scalability")}
                  className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                >
                  <span>Start Module 15 (Scalability &amp; Performance)</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
