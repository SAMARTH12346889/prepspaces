import React, { useState, useMemo } from "react";
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
  HardDrive,
  Calculator,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  CapacityEstimationDiagram,
  QueueingHockeyStickDiagram,
  BottleneckDiagnosticDiagram,
  VisualDiagramComponentModule15,
} from "./SystemDesignScalabilityDiagrams";

export default function SystemDesignScalability() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "simulators" | "qa" | "assignments" | "assessment" | "reading"
  const [activeWeek, setActiveWeek] = useState(1); // 1 | 2
  const [activeLesson, setActiveLesson] = useState("15.1");

  // Expanded Q&A accordion states (10 Senior Interview Questions)
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR: CAPACITY ESTIMATION & LITTLE'S LAW
  // ---------------------------------------------------------------------------
  const [simDau, setSimDau] = useState(200000);
  const [simReqsPerUser, setSimReqsPerUser] = useState(80);
  const [simPeakRatio, setSimPeakRatio] = useState(4);
  const [simPayloadKb, setSimPayloadKb] = useState(15);
  const [simLatencyMs, setSimLatencyMs] = useState(250);

  const capacityOutput = useMemo(() => {
    const dailyRequests = simDau * simReqsPerUser;
    const avgRps = (dailyRequests / 86400).toFixed(1);
    const peakRps = (Number(avgRps) * simPeakRatio).toFixed(1);
    const bandwidthMbPerSec = ((Number(peakRps) * simPayloadKb) / 1024).toFixed(2);
    const bandwidthMbps = (((Number(peakRps) * simPayloadKb * 8) / 1024)).toFixed(1);
    const concurrency = Math.round(Number(peakRps) * (simLatencyMs / 1000));

    return {
      dailyRequests: (dailyRequests / 1e6).toFixed(2),
      avgRps,
      peakRps,
      bandwidthMbPerSec,
      bandwidthMbps,
      concurrency,
    };
  }, [simDau, simReqsPerUser, simPeakRatio, simPayloadKb, simLatencyMs]);

  // ---------------------------------------------------------------------------
  // ASSESSMENT QUIZ STATE (4 QUESTIONS MATCHING PROMPT VERBATIM)
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Which approach adds more machines to handle increasing traffic?",
      options: [
        "A. Vertical scaling",
        "B. Horizontal scaling",
        "C. Database indexing",
        "D. Compression",
      ],
      correct: 1, // B
      explanation:
        "Horizontal scaling (scale out) adds more machines or application instances and distributes requests between them using a load balancer. Vertical scaling (scale up) increases the CPU/RAM of a single existing server.",
    },
    {
      id: 2,
      question:
        "An API receives 400 requests per second with an average latency of 0.5 seconds. What is the average number of in-flight requests?",
      options: ["A. 80", "B. 200", "C. 400", "D. 800"],
      correct: 1, // B
      explanation:
        "By Little's Law: L = lambda * W. Here, arrival rate lambda = 400 req/s, and average latency W = 0.5 s. Therefore, in-flight concurrency L = 400 * 0.5 = 200 concurrent requests.",
    },
    {
      id: 3,
      question: "What should you do first when investigating a performance bottleneck?",
      options: [
        "A. Rewrite the whole application",
        "B. Buy more servers immediately",
        "C. Measure and profile the system",
        "D. Shard every database table",
      ],
      correct: 2, // C
      explanation:
        "Never guess or prematurely optimize. You must first measure and profile the system (CPU, memory, database query plans, network I/O) to identify the specific component that is actually limiting throughput.",
    },
    {
      id: 4,
      question: "What is a likely consequence of a queue growing without bounds?",
      options: [
        "A. Guaranteed lower latency",
        "B. Unlimited system capacity",
        "C. Increasing memory usage and latency",
        "D. Automatic database optimization",
      ],
      correct: 2, // C
      explanation:
        "An unbounded queue converts excess offered load into growing memory consumption and accumulated latency. In-flight jobs age, clients experience timeouts and retry, and the host eventually crashes with an Out-of-Memory (OOM) error.",
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
          currentModuleId="scalability"
          aiTutorLabel="Ask Nova about Scalability & Bottlenecks"
        />

        {/* Hero Section */}
        <div className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-700 mb-2">
                <TrendingUp size={13} className="text-[#f97316]" />
                <span>System Design Masterclass · Module 15</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">
                Scalability, Performance Modeling &amp; Bottleneck Analysis
              </h1>
              <p className="mt-2 max-w-3xl text-xs sm:text-sm text-stone-600 leading-relaxed">
                Design systems that scale gracefully from 100 to 1,000,000 users. Master capacity estimation (RPS, bandwidth, storage),
                Little&apos;s Law concurrency math ($L = \lambda W$), M/M/1 queueing theory, tail latency percentiles (p95/p99),
                and systematic CPU, memory, database, and I/O bottleneck diagnostics.
              </p>
            </div>

            {/* Quick Metadata Pill */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-xl bg-[#faf8f4] border border-stone-200 font-bold text-stone-700">
                Duration: 2 Weeks (30–40 hrs)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200 font-bold text-orange-700">
                Core: Little&apos;s Law · Capacity Math · Profiling
              </span>
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Capacity Sizing
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">Peak RPS &amp; Bandwidth</span>
              <span className="text-[11px] text-stone-500">Formulas &amp; Data Volume</span>
            </div>
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Little&apos;s Law
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">\(L = \lambda W\)</span>
              <span className="text-[11px] text-stone-500">In-Flight Concurrency</span>
            </div>
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Queueing Theory
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">Utilization Knee</span>
              <span className="text-[11px] text-stone-500">Exponential Latency Above 80%</span>
            </div>
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Bottleneck Profiling
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">CPU · RAM · DB · I/O</span>
              <span className="text-[11px] text-stone-500">Flamegraphs &amp; Query Plans</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="mb-8 flex items-center gap-1.5 overflow-x-auto rounded-2xl border border-[#e7e3da] bg-white/80 p-1.5 shadow-2xs backdrop-blur-md">
          {[
            { id: "curriculum", label: "Curriculum & Lessons", icon: BookOpen },
            { id: "simulators", label: "Interactive Simulators", icon: Zap },
            { id: "qa", label: "10 Senior Interview Questions", icon: HelpCircle },
            { id: "assignments", label: "Hands-On Assignments", icon: FolderTree },
            { id: "assessment", label: "Knowledge Check (Quiz)", icon: CheckCircle2 },
            { id: "reading", label: "Research & Literature", icon: ExternalLink },
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
            TAB 1: CURRICULUM & LESSONS (15.1 to 15.10)
        ====================================================================== */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            {/* Week Selector Bar */}
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200 pb-4">
              <div className="flex items-center gap-2">
                {[
                  { week: 1, title: "Week 1: Scalability, Metrics & Capacity Math" },
                  { week: 2, title: "Week 2: Queueing Theory, Bottlenecks & PrepSpaces Case Study" },
                ].map((w) => (
                  <button
                    key={w.week}
                    type="button"
                    onClick={() => {
                      setActiveWeek(w.week);
                      if (w.week === 1) setActiveLesson("15.1");
                      if (w.week === 2) setActiveLesson("15.6");
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
                10 In-Depth Lessons
              </span>
            </div>

            {/* Lesson Navigation Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
              {activeWeek === 1 &&
                [
                  { id: "15.1", label: "15.1 Overview & Scaling Types" },
                  { id: "15.2", label: "15.2 Scaling PrepSpaces (7 Steps)" },
                  { id: "15.3", label: "15.3 Performance Metrics & Percentiles" },
                  { id: "15.4", label: "15.4 Capacity Estimation Math" },
                  { id: "15.5", label: "15.5 Little's Law & Concurrency" },
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
                  { id: "15.6", label: "15.6 Bottleneck Categories" },
                  { id: "15.7", label: "15.7 Queueing Theory & High Load" },
                  { id: "15.8", label: "15.8 Load Testing Methodologies" },
                  { id: "15.9", label: "15.9 PrepSpaces Scaling Case Study" },
                  { id: "15.10", label: "15.10 Cost-Controlled Scaling" },
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
              {/* LESSON 15.1 */}
              {activeLesson === "15.1" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 15.1 · Architectural Foundations
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Scalability Fundamentals: Vertical Scaling vs. Horizontal Scaling
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Scalability is a system&apos;s ability to handle increased workload by adding resources or improving resource efficiency.
                    Building an application that works for 100 users is trivial; architecting one that sustains 1,000,000 active users
                    without degradation requires deliberate trade-offs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2">
                      <div className="flex items-center gap-2 font-bold text-xs text-stone-900">
                        <Server size={16} className="text-blue-600" />
                        <span>Vertical Scaling (Scale Up)</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Add more power to a single existing machine: upgrade CPU cores, add more RAM, or migrate to faster NVMe SSD storage.
                      </p>
                      <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside font-mono">
                        <li>Pros: Zero code changes; no distributed state complexity.</li>
                        <li>Cons: Hard physical hardware limits; exponential cost curve; single point of failure (SPOF).</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/60 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-xs text-orange-950">
                        <Layers size={16} className="text-orange-600" />
                        <span>Horizontal Scaling (Scale Out)</span>
                      </div>
                      <p className="text-xs text-orange-900 leading-relaxed">
                        Add more machines or application instances and distribute requests between them via load balancers.
                      </p>
                      <ul className="text-xs text-orange-900 space-y-1 list-disc list-inside font-mono">
                        <li>Pros: Near-infinite scale ceiling; high fault tolerance; cost-effective commodity instances.</li>
                        <li>Cons: Requires stateless servers, external session storage, distributed data consistency, and operational complexity.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 15.2 */}
              {activeLesson === "15.2" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 15.2 · Practical Evolution
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Scaling PrepSpaces: 500 to 50,000 Concurrent Users in 7 Steps
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    A system should evolve incrementally. Scale only the component that is currently the bottleneck:
                  </p>

                  <div className="space-y-2.5 font-mono text-xs">
                    {[
                      { step: 1, title: "Single Node Monolith", desc: "Start with one application server and single PostgreSQL DB on one VM." },
                      { step: 2, title: "Indexing & In-Memory Caching", desc: "Add B-tree indexes to hot query columns; introduce Redis cache for course catalogs." },
                      { step: 3, title: "Stateless App Tier & Load Balancer", desc: "Deploy NGINX/ALB in front of 3 stateless Node.js application instances." },
                      { step: 4, title: "Externalize Session State", desc: "Move user authentication sessions and ephemeral state out of local memory into Redis." },
                      { step: 5, title: "Database Read Replicas & Partitioning", desc: "Introduce PostgreSQL read replicas for query-heavy candidate search; partition large interview logs." },
                      { step: 6, title: "Asynchronous Background Workers", desc: "Decouple heavy AI evaluation and PDF report compilation into RabbitMQ/Kafka queues with worker pools." },
                      { step: 7, title: "Autoscaling, Observability & Admission Control", desc: "Implement Kubernetes HPA based on queue age, Prometheus alerting, and token-bucket rate limits." },
                    ].map((s) => (
                      <div key={s.step} className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4] flex items-start gap-3">
                        <span className="h-5 w-5 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                          {s.step}
                        </span>
                        <div>
                          <strong className="text-stone-900 block text-xs">{s.title}</strong>
                          <span className="text-stone-600 text-[11px]">{s.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* LESSON 15.3 */}
              {activeLesson === "15.3" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 15.3 · Performance Metrics
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Metrics Every System Designer Must Know: Latency, Throughput &amp; Percentiles
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    In high-scale systems, <strong>average latency is a lie</strong>. A 100ms average latency can easily conceal
                    a system where 1% of your users wait 10 seconds.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <div className="p-3.5 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <span className="text-[10px] font-mono font-bold text-stone-500 uppercase block">p50 (Median)</span>
                      <span className="text-lg font-extrabold text-stone-900 font-mono mt-1 block">100 ms</span>
                      <span className="text-xs text-stone-500">50% of requests finish in &le; 100ms</span>
                    </div>

                    <div className="p-3.5 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <span className="text-[10px] font-mono font-bold text-stone-500 uppercase block">p95 Percentile</span>
                      <span className="text-lg font-extrabold text-amber-600 font-mono mt-1 block">250 ms</span>
                      <span className="text-xs text-stone-500">95% of requests finish in &le; 250ms</span>
                    </div>

                    <div className="p-3.5 rounded-xl border border-orange-200 bg-orange-50/60">
                      <span className="text-[10px] font-mono font-bold text-orange-800 uppercase block">p99 (Tail Latency)</span>
                      <span className="text-lg font-extrabold text-orange-950 font-mono mt-1 block">900 ms</span>
                      <span className="text-xs text-orange-700">1% of requests take up to 900ms!</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-white text-xs text-stone-700 space-y-2">
                    <h4 className="font-bold text-stone-900">Why Tail Latency Matters (The Fan-Out Effect):</h4>
                    <p>
                      If a dashboard request queries 100 microservices or partition shards in parallel, the probability
                      that the overall request takes longer than p99 is:
                      1 - (0.99)^100 ≈ 63.4%!
                      Thus, nearly two-thirds of your users will experience the agonizing 900ms tail latency!
                    </p>
                  </div>
                </div>
              )}

              {/* LESSON 15.4 */}
              {activeLesson === "15.4" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 15.4 · Capacity Math
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Performance Modeling: RPS, Bandwidth &amp; Storage Estimation
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Capacity planning follows a rigorous 3-step formula applied in system design interviews:
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2">
                      <strong className="text-xs text-stone-900 block font-mono">Step 1: Estimate Requests Per Second (RPS)</strong>
                      <div className="p-3 rounded-lg bg-stone-900 text-stone-100 font-mono text-xs">
                        Daily Requests = 100,000 DAU &times; 120 reqs/day = 12,000,000 requests<br />
                        Average RPS = 12,000,000 / 86,400s &approx; <strong>139 RPS</strong><br />
                        Peak RPS (5x multiplier) = 139 &times; 5 = <strong className="text-orange-400">695 Peak RPS</strong>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2">
                      <strong className="text-xs text-stone-900 block font-mono">Step 2: Estimate Network Bandwidth</strong>
                      <div className="p-3 rounded-lg bg-stone-900 text-stone-100 font-mono text-xs">
                        Bandwidth = Peak RPS &times; Payload Size = 695 &times; 25 KB = 17,375 KB/s<br />
                        Bandwidth = <strong className="text-emerald-400">17.4 MB/s</strong> (&approx; 139 Mbps network wire rate)
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2">
                      <strong className="text-xs text-stone-900 block font-mono">Step 3: Estimate Storage Growth</strong>
                      <div className="p-3 rounded-lg bg-stone-900 text-stone-100 font-mono text-xs">
                        Daily Storage = 100,000 users &times; 20 KB = 2,000,000 KB &approx; <strong>2 GB / day</strong><br />
                        Annual Storage = 2 GB &times; 365 = <strong className="text-blue-400">730 GB / year</strong> (before indexes/replicas)
                      </div>
                    </div>
                  </div>

                  {/* Interactive Diagram Embed */}
                  <div className="mt-4">
                    <CapacityEstimationDiagram />
                  </div>
                </div>
              )}

              {/* LESSON 15.5 */}
              {activeLesson === "15.5" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 15.5 · Queueing Math
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Little&apos;s Law: Concurrency, Arrival Rate &amp; Response Time
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Little&apos;s Law is one of the most powerful theorems in operations research and system design:
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
                    <div className="text-orange-400 font-bold text-sm">// Little&apos;s Law: L = \lambda \times W</div>
                    <div className="text-stone-300">
                      Where:<br />
                      &nbsp;&nbsp;<strong>L</strong> = Average number of concurrent requests in flight.<br />
                      &nbsp;&nbsp;<strong>\lambda</strong> = Arrival rate (throughput in requests per second).<br />
                      &nbsp;&nbsp;<strong>W</strong> = Average latency (time each request spends in the system).
                    </div>
                    <div className="p-3 rounded-lg bg-stone-800 text-amber-300">
                      Scenario 1: 800 req/s with 0.2s latency &rarr; L = 800 &times; 0.2 = 160 concurrent requests<br />
                      Scenario 2: Latency increases to 1.0s &rarr; L = 800 &times; 1.0 = 800 concurrent requests!
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs text-stone-700 space-y-2">
                    <h4 className="font-bold text-stone-900">Why this matters for capacity planning:</h4>
                    <p>
                      When response latency rises, in-flight requests multiply proportionally. Each in-flight request holds
                      an active socket, a server worker thread, and a database connection. This is why a 5x latency slowdown
                      instantly consumes all database connection pool slots even when request arrival rate is unchanged!
                    </p>
                  </div>
                </div>
              )}

              {/* LESSON 15.6 */}
              {activeLesson === "15.6" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 15.6 · Diagnostics
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Identifying System Bottlenecks: CPU, Memory, DB &amp; I/O
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    A bottleneck is the single component that limits the overall throughput or responsiveness of a system.
                    Modern web architectures typically hit one of four resource walls:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2">
                      <strong className="text-xs text-stone-900 flex items-center gap-1.5 font-bold">
                        <Cpu size={15} className="text-red-600" />
                        <span>1. CPU Bottlenecks</span>
                      </strong>
                      <p className="text-xs text-stone-600">
                        Expensive computations, crypto hashing (bcrypt), JSON serialization of huge datasets, or inefficient quadratic loops.
                      </p>
                      <span className="text-[11px] font-mono text-stone-500 block">Fix: Flamegraphs, memoization, caching, horizontal compute scaling.</span>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2">
                      <strong className="text-xs text-stone-900 flex items-center gap-1.5 font-bold">
                        <Activity size={15} className="text-amber-600" />
                        <span>2. Memory Bottlenecks</span>
                      </strong>
                      <p className="text-xs text-stone-600">
                        Memory leaks, detached closures, massive arrays in memory, or Stop-the-World Garbage Collection (GC) pauses.
                      </p>
                      <span className="text-[11px] font-mono text-stone-500 block">Fix: Stream DB results via cursors, fix leaks, right-size container limits.</span>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2">
                      <strong className="text-xs text-stone-900 flex items-center gap-1.5 font-bold">
                        <Database size={15} className="text-blue-600" />
                        <span>3. Database Bottlenecks</span>
                      </strong>
                      <p className="text-xs text-stone-600">
                        Missing indexes causing table scans, row lock contention, connection pool exhaustion, slow joins.
                      </p>
                      <span className="text-[11px] font-mono text-stone-500 block">Fix: EXPLAIN ANALYZE, composite indexes, read replicas, Redis caching.</span>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2">
                      <strong className="text-xs text-stone-900 flex items-center gap-1.5 font-bold">
                        <Network size={15} className="text-purple-600" />
                        <span>4. Network &amp; I/O Bottlenecks</span>
                      </strong>
                      <p className="text-xs text-stone-600">
                        Uncompressed multi-megabyte payloads, synchronous external HTTP dependencies, cross-region roundtrips.
                      </p>
                      <span className="text-[11px] font-mono text-stone-500 block">Fix: Gzip/Brotli compression, Cloudflare CDN, HTTP/2 multiplexing.</span>
                    </div>
                  </div>

                  {/* Interactive Diagram Embed */}
                  <div className="mt-4">
                    <BottleneckDiagnosticDiagram />
                  </div>
                </div>
              )}

              {/* LESSON 15.7 */}
              {activeLesson === "15.7" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 15.7 · Queueing Theory
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Queueing Theory &amp; The Danger of High Utilization (&gt; 80%)
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    In queueing theory (M/M/1 model), response time does NOT rise linearly with traffic.
                    It rises as a <strong>hockey stick</strong>: flat and comfortable up to 70%, then exploding exponentially
                    towards infinity as utilization approaches 100%!
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2">
                    <div className="text-orange-400 font-bold text-sm">// M/M/1 Response Time Formula</div>
                    <div className="text-stone-300">
                      W = S / (1 - ρ)<br />
                      Where S is base service time and ρ = Arrival Rate / Service Capacity.
                    </div>
                  </div>

                  {/* Interactive Diagram Embed */}
                  <div className="mt-4">
                    <QueueingHockeyStickDiagram />
                  </div>
                </div>
              )}

              {/* LESSON 15.8 */}
              {activeLesson === "15.8" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 15.8 · Verification
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Load Testing &amp; Performance Validation Methodologies
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Performance assumptions must be validated using automated load testing suites:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden font-mono">
                      <thead className="bg-stone-100 text-stone-700 uppercase font-bold text-[10px]">
                        <tr>
                          <th className="p-3 border-b">Test Type</th>
                          <th className="p-3 border-b">Target Objective</th>
                          <th className="p-3 border-b">Typical Tooling</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-stone-800">
                        <tr className="bg-white">
                          <td className="p-3 font-bold text-stone-900">Load Testing</td>
                          <td className="p-3">Measures response time under expected peak traffic (e.g. 700 RPS)</td>
                          <td className="p-3 text-stone-600">k6, Locust, Artillery</td>
                        </tr>
                        <tr className="bg-stone-50/50">
                          <td className="p-3 font-bold text-stone-900">Stress Testing</td>
                          <td className="p-3">Finds the ultimate breaking point beyond theoretical capacity</td>
                          <td className="p-3 text-stone-600">k6, Apache JMeter</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 font-bold text-stone-900">Spike Testing</td>
                          <td className="p-3">Simulates instant 10x traffic bursts to test autoscaler lag &amp; rate limits</td>
                          <td className="p-3 text-stone-600">k6 scripted spikes</td>
                        </tr>
                        <tr className="bg-stone-50/50">
                          <td className="p-3 font-bold text-stone-900">Soak Testing</td>
                          <td className="p-3">Runs steady 70% load for 24 hours to uncover memory leaks and connection drift</td>
                          <td className="p-3 text-stone-600">Grafana + Prometheus</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* LESSON 15.9 */}
              {activeLesson === "15.9" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 15.9 · Real-World Architecture
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Practical Case Study: Scaling PrepSpaces to 5,000 Concurrent Peak Users
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    PrepSpaces features 100,000 registered users with 5,000 concurrent peak sessions, 500 average RPS,
                    and 1,500 peak RPS. Target p95 latency: under 300ms.
                  </p>

                  <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-3 text-xs">
                    <h4 className="font-bold text-stone-900">Architectural Tiers:</h4>
                    <div className="space-y-2 font-mono">
                      <div>1. <strong>Cloudflare CDN:</strong> Caches all static assets and course catalog JSON (eliminates 60% of reads).</div>
                      <div>2. <strong>ALB + Token Bucket:</strong> Rate limits unauthenticated users to 60 req/min; bursts up to 20 tokens.</div>
                      <div>3. <strong>Stateless API Fleet:</strong> 8 autoscaled Node.js pods running on AWS ECS/EKS behind ALB.</div>
                      <div>4. <strong>Redis Cluster:</strong> Session store and cached user progress counters.</div>
                      <div>5. <strong>PostgreSQL with PgBouncer:</strong> Primary write DB + 2 read replicas; connection pooling capped at 50 conns.</div>
                      <div>6. <strong>AI Inference Worker Pool:</strong> Asynchronous RabbitMQ queue with concurrency semaphore (max 30 parallel LLM calls).</div>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 15.10 */}
              {activeLesson === "15.10" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 15.10 · Cost Engineering
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Horizontal Scaling While Controlling Cloud Infrastructure Costs
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Uncontrolled autoscaling leads to catastrophic cloud bills. True engineering excellence means
                    scaling throughput without scaling costs linearly.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <strong className="text-stone-900 block mb-1">Spot &amp; Preemptible Instances</strong>
                      Use AWS Spot or GCP Preemptible VMs for stateless worker pools (saving 70–80% compute cost).
                    </div>
                    <div className="p-3.5 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <strong className="text-stone-900 block mb-1">Edge Offloading</strong>
                      Serving 1GB from Cloudflare CDN costs pennies compared to routing through application servers and databases.
                    </div>
                    <div className="p-3.5 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <strong className="text-stone-900 block mb-1">Batching &amp; Micro-Tuning</strong>
                      Batch asynchronous database writes and model evaluations to maximize GPU/CPU saturation.
                    </div>
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
            {/* SIMULATOR 1: CAPACITY & CONCURRENCY MODELER */}
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                    Interactive Simulator 1
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-stone-900">
                    System Capacity &amp; Little&apos;s Law Sizing Calculator
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Adjust traffic parameters to calculate Peak RPS, Network Bandwidth, and Little&apos;s Law in-flight concurrency ($L = \lambda W$).
                  </p>
                </div>
              </div>

              {/* Sliders Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-stone-700">Daily Active Users (DAU):</span>
                    <span className="font-mono text-orange-600">{simDau.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="50000"
                    value={simDau}
                    onChange={(e) => setSimDau(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-stone-700">Requests / User / Day:</span>
                    <span className="font-mono text-orange-600">{simReqsPerUser}</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="200"
                    step="10"
                    value={simReqsPerUser}
                    onChange={(e) => setSimReqsPerUser(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-stone-700">Average Latency (W):</span>
                    <span className="font-mono text-orange-600">{simLatencyMs} ms</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1500"
                    step="50"
                    value={simLatencyMs}
                    onChange={(e) => setSimLatencyMs(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>
              </div>

              {/* Live Output Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Total Volume</span>
                  <span className="text-2xl font-extrabold text-stone-900 font-mono mt-1 block">
                    {capacityOutput.dailyRequests}M
                  </span>
                  <span className="text-[11px] text-stone-500">Daily API requests</span>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Peak Traffic</span>
                  <span className="text-2xl font-extrabold text-orange-600 font-mono mt-1 block">
                    {capacityOutput.peakRps} RPS
                  </span>
                  <span className="text-[11px] text-stone-500">{capacityOutput.avgRps} Avg RPS</span>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Peak Bandwidth</span>
                  <span className="text-2xl font-extrabold text-emerald-700 font-mono mt-1 block">
                    {capacityOutput.bandwidthMbPerSec} MB/s
                  </span>
                  <span className="text-[11px] text-stone-500 font-mono">{capacityOutput.bandwidthMbps} Mbps wire rate</span>
                </div>

                <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/60">
                  <span className="text-[10px] font-mono uppercase text-orange-800 font-bold block">In-Flight Concurrency</span>
                  <span className="text-2xl font-extrabold text-orange-950 font-mono mt-1 block">
                    {capacityOutput.concurrency} reqs
                  </span>
                  <span className="text-[11px] text-orange-700">Little&apos;s Law \(L = \lambda W\)</span>
                </div>
              </div>
            </div>

            {/* SIMULATOR 2: QUEUEING HOCKEY STICK */}
            <QueueingHockeyStickDiagram />

            {/* SIMULATOR 3: BOTTLENECK DIAGNOSTICS */}
            <BottleneckDiagnosticDiagram />
          </div>
        )}

        {/* =====================================================================
            TAB 3: 10 SENIOR INTERVIEW QUESTIONS (ALL 10 FROM PROMPT)
        ====================================================================== */}
        {activeTab === "qa" && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-4 mb-4">
              <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                Principal &amp; Staff Interview Prep
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                10 Senior Systems Engineering Scalability Questions
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Detailed architectural answers to the exact questions asked at Google, Meta, Amazon, and Stripe.
              </p>
            </div>

            {[
              {
                id: "qa-1",
                q: "1. What is the difference between scalability and performance?",
                answer:
                  "Performance measures how fast or efficiently a system completes a single unit of work under a given load (measured by latency, response time, and resource usage per request).\n\nScalability measures a system's ability to maintain acceptable performance as workload increases by adding resources.\n\nA system can be highly performant (e.g. 5ms responses) but unscalable (crashes at 200 concurrent users due to in-memory state). Conversely, a system can be scalable (scales horizontally to 1,000,000 users) while having mediocre single-request performance (e.g. 400ms latency).",
              },
              {
                id: "qa-2",
                q: "2. When would you choose vertical scaling over horizontal scaling?",
                answer:
                  "Vertical scaling (scale up) is preferred when:\n1. Workloads require strict ACID serialization or complex shared in-memory state that cannot be partitioned cleanly across nodes (e.g. high-frequency financial trading matching engines, primary relational databases under 64 vCPUs).\n2. Engineering simplicity and time-to-market: Upgrading a database instance class takes minutes without rewriting application code or dealing with distributed consensus.\n\nHowever, vertical scaling has physical hardware ceilings and introduces a single point of failure (SPOF).",
              },
              {
                id: "qa-3",
                q: "3. How do you calculate RPS and peak traffic for a system design interview?",
                answer:
                  "Follow the standard 4-step interview formula:\n1. Establish Daily Active Users (DAU) and actions per user: E.g., 100M DAU &times; 20 requests/day = 2 Billion daily requests.\n2. Calculate Average RPS: Daily requests / 86,400 seconds &approx; 2,000,000,000 / 86,400 &approx; 23,150 Average RPS.\n3. Apply Peak Multiplier: Production traffic is never evenly distributed. Typically apply a 2x to 5x peak factor based on user timezones: 23,150 &times; 4 = ~92,600 Peak RPS.\n4. Add Safety Headroom: Size backend infrastructure with 30-50% spare headroom to absorb sudden traffic spikes without entering queueing saturation.",
              },
              {
                id: "qa-4",
                q: "4. Explain Little's Law with a practical example.",
                answer:
                  "Little's Law states: L = \lambda \times W\n• L = Average number of concurrent requests in flight.\n• \lambda = Average arrival rate (requests / second).\n• W = Average response time (seconds).\n\nPractical Example:\nSuppose an interview scoring endpoint receives \lambda = 500 requests per second. If the endpoint takes W = 0.2s (200ms) to evaluate, in-flight concurrency L = 500 &times; 0.2 = 100 concurrent requests.\n\nIf a database slowdown causes W to increase from 0.2s to 2.0s, in-flight concurrency jumps to 500 &times; 2.0 = 1,000 concurrent requests! The server's thread pool and database connection pool will instantly saturate, causing connection refusal errors even though incoming traffic rate didn't change.",
              },
              {
                id: "qa-5",
                q: "5. Why can a system become slow even when its average CPU utilization is low?",
                answer:
                  "Low CPU utilization with high response latency indicates that workers are spending their time waiting rather than computing:\n1. I/O Wait (Blocking I/O): Threads are blocked waiting on slow database disk reads, network roundtrips, or external third-party API calls.\n2. Lock Contention: Multiple threads are serialized waiting on a shared database row lock, Redis lock, or application mutex.\n3. Connection Pool Starvation: Application threads are blocked waiting for an available database connection from a full pool.\n4. Thread Pool Saturation: Requests wait in the web server's OS socket backlog before being assigned an execution thread.",
              },
              {
                id: "qa-6",
                q: "6. What is the difference between throughput and concurrency?",
                answer:
                  "Throughput is the rate at which completed work exits the system per unit of time (e.g. 2,000 completed requests per second).\n\nConcurrency is the number of operations currently executing or in flight simultaneously inside the system at any given instant.\n\nThey are connected by Little's Law: Concurrency = Throughput &times; Latency.",
              },
              {
                id: "qa-7",
                q: "7. How do you investigate high p99 latency?",
                answer:
                  "To debug p99 tail latency:\n1. Distributed Tracing: Use OpenTelemetry/Jaeger to inspect end-to-end request traces for requests in the 99th percentile and pinpoint the slowest span.\n2. Garbage Collection (GC) Pauses: Check JVM/V8 metrics for Stop-the-World GC events occurring during tail spikes.\n3. Database Query Outliers: Inspect PostgreSQL `pg_stat_statements` for unindexed queries, buffer cache misses, or lock contention.\n4. Micro-bursts & Queue Wait Times: Measure the time a request spends sitting in the load balancer or socket queue before execution begins.\n5. Noisy Neighbors: Verify whether shared hypervisor CPU steal time is degrading specific virtual machines.",
              },
              {
                id: "qa-8",
                q: "8. How can retries create a cascading failure?",
                answer:
                  "When a downstream service experiences a transient slowdown, requests begin timing out. If clients immediately retry uncoordinatedly, incoming request volume doubles or triples. The struggling dependency becomes completely overwhelmed, its error rate rises to 100%, and upstream callers exhaust their own thread pools waiting for timeouts, causing the entire microservice graph to collapse.\n\nMitigation: Exponential backoff with full jitter, retry budgets (e.g. max 10% retries), and circuit breakers.",
              },
              {
                id: "qa-9",
                q: "9. How would you determine whether a database or application server is the bottleneck?",
                answer:
                  "Measure the ratio of time spent in app code vs DB query execution:\n1. If application CPU is >85% while database CPU is low (<30%) and DB query latency is fast (<5ms): The application tier is the bottleneck (needs compute optimization, caching, or more app replicas).\n2. If application CPU is low (<20%) while request latency is high, and database metrics show high disk I/O, long active transactions, or connection pool wait time >0: The database is the bottleneck (needs indexing, query optimization, connection pooling, or read replicas).",
              },
              {
                id: "qa-10",
                q: "10. How would you scale an AI-powered interview platform while controlling infrastructure costs?",
                answer:
                  "1. Asynchronous Ingestion: Decouple user submission from heavy AI inference using message queues (RabbitMQ/Kafka) with HTTP 202 Accepted.\n2. Concurrency Capping: Limit concurrent LLM calls to match GPU/provider quotas, avoiding rate-limit penalties.\n3. Semantic Response Caching: Cache answers to common interview questions using vector embeddings or exact question hashes.\n4. Spot & Preemptible GPU Worker Fleets: Run background evaluation workers on AWS EC2 Spot instances (saving 70–80%).\n5. Multi-Model Tiering: Use small, lightweight models (e.g. 8B parameters) for initial screening, and invoke expensive frontier models only for final comprehensive scoring.",
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
            TAB 4: HANDS-ON ASSIGNMENTS (ASSIGNMENTS 1, 2, 3)
        ====================================================================== */}
        {activeTab === "assignments" && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-4 mb-4">
              <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                Practical Engineering Exercises
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                Hands-On Architectural Assignments
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Solve the three core capacity, bottleneck, and architecture challenges from the module curriculum.
              </p>
            </div>

            {/* Assignment 1 */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-orange-100 text-orange-800 font-mono font-bold text-xs">
                  Assignment 1
                </span>
                <h3 className="font-extrabold text-stone-900 text-base">
                  Capacity Estimation: 200,000 DAU System Sizing
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Design a system for 200,000 daily active users. Assume 80 requests per user per day, a peak-to-average ratio of 4,
                and an average response payload size of 15 KB.
              </p>

              <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2">
                <div className="text-orange-400 font-bold">// Canonical Mathematical Solution:</div>
                <div>1. Daily Requests = 200,000 DAU &times; 80 reqs = <strong>16,000,000 requests/day</strong></div>
                <div>2. Average RPS = 16,000,000 / 86,400s &approx; <strong>185.2 RPS</strong></div>
                <div>3. Peak RPS = 185.2 &times; 4 = <strong className="text-emerald-400">740.7 Peak RPS</strong></div>
                <div>4. Bandwidth = 740.7 RPS &times; 15 KB = 11,110.5 KB/s &approx; <strong className="text-blue-400">11.1 MB/s</strong> (88.9 Mbps wire throughput)</div>
              </div>
            </div>

            {/* Assignment 2 */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-orange-100 text-orange-800 font-mono font-bold text-xs">
                  Assignment 2
                </span>
                <h3 className="font-extrabold text-stone-900 text-base">
                  Bottleneck Investigation: 95% CPU with Fast Database
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                An API service displays 95% CPU utilization, p95 latency of 1.8 seconds, while database queries take only 40ms on average.
                Propose a step-by-step investigation before purchasing more servers.
              </p>

              <div className="p-4 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs text-stone-700 space-y-2">
                <strong className="text-stone-900 block font-mono">Investigation Protocol:</strong>
                <div>1. <strong>Capture CPU Flamegraph:</strong> Run `perf record -F 99 -p &lt;pid&gt; -- sleep 30` to identify which function is consuming CPU cycles (e.g. regex, JSON.stringify, crypto).</div>
                <div>2. <strong>Inspect Garbage Collection:</strong> Verify if Node.js V8 GC or JVM Stop-the-World pauses are consuming 40%+ of CPU cycles due to rapid object allocation.</div>
                <div>3. <strong>Check Serialization Overhead:</strong> Check if endpoint is returning multi-megabyte payloads that serialize synchronously on the main thread.</div>
                <div>4. <strong>Evaluate Horizontal Scaling:</strong> If code is already optimized, scale application replicas horizontally rather than upgrading to a cost-inefficient giant VM.</div>
              </div>
            </div>

            {/* Assignment 3 */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-orange-100 text-orange-800 font-mono font-bold text-xs">
                  Assignment 3
                </span>
                <h3 className="font-extrabold text-stone-900 text-base">
                  System Architecture for 10,000 Concurrent Interview Sessions
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Design an architecture for 10,000 concurrent PrepSpaces interview sessions, addressing API scaling, AI inference limits,
                database connection limits, queue management, and infrastructure costs.
              </p>

              <div className="p-4 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs text-stone-700 space-y-2">
                <strong className="text-stone-900 block font-mono">Architectural Solution Blueprint:</strong>
                <ul className="list-disc list-inside space-y-1 text-stone-600">
                  <li><strong>Stateless API Layer:</strong> 12 autoscaled container instances behind ALB; keep-alive HTTP/2 connections.</li>
                  <li><strong>Database Connection Pool:</strong> PgBouncer connection pooler in transaction mode, capping PostgreSQL primary connections at 100 to prevent connection thrashing.</li>
                  <li><strong>AI Worker Queue:</strong> RabbitMQ queue with dead-letter exchange; worker concurrency capped at 50 parallel LLM tasks.</li>
                  <li><strong>Redis Ephemeral State:</strong> Store active interview heartbeat state and real-time audio transcript chunks with 10-minute TTL.</li>
                  <li><strong>Cost Controls:</strong> Use AWS EC2 Spot instances for background worker fleet; cache static interview questions in Cloudflare CDN.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 5: ASSESSMENT QUIZ (4 QUESTIONS VERBATIM)
        ====================================================================== */}
        {activeTab === "assessment" && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-4 mb-4">
              <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                Verification &amp; Mastery
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                Module 15 Knowledge Check: Scalability &amp; Capacity Modeling
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Evaluate your architectural comprehension of scalability, Little&apos;s Law, and bottleneck diagnostics.
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
                    Answer all 4 questions before submitting for feedback.
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
                Seminal Performance &amp; Capacity Engineering References
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                The authoritative foundations of queueing theory, tail latency mitigation, and large-scale system modeling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: 1,
                  title: "A Proof for the Queuing Formula: L = \u03BBW (John D. C. Little, 1961)",
                  focus:
                    "The original MIT mathematical proof establishing the universal relationship between arrival rate, latency, and average concurrency.",
                  url: "https://pubsonline.informs.org/doi/10.1287/opre.9.3.383",
                  source: "Operations Research Journal",
                },
                {
                  id: 2,
                  title: "The Tail at Scale (Jeffrey Dean & Luiz André Barroso, Google, 2013)",
                  focus:
                    "How large-scale distributed services tame latency variability, mitigate tail latency percentiles (p99), and coordinate parallel fan-out RPCs.",
                  url: "https://cacm.acm.org/magazines/2013/2/160173-the-tail-at-scale/fulltext",
                  source: "Communications of the ACM",
                },
                {
                  id: 3,
                  title: "Systems Performance: Enterprise and the Cloud (Brendan Gregg)",
                  focus:
                    "The definitive manual on diagnosing CPU, memory, storage, and network bottlenecks using flamegraphs, perf, and eBPF instrumentation.",
                  url: "https://www.brendangregg.com/systems-performance-2nd-edition-book.html",
                  source: "Addison-Wesley Professional",
                },
                {
                  id: 4,
                  title: "The Datacenter as a Computer (Barroso, Clidaras & Hölzle)",
                  focus:
                    "Google's foundational guide on warehouse-scale computing, warehouse power utilization, and hardware/software cost trade-offs.",
                  url: "https://www.morganclaypool.com/doi/abs/10.2200/S00516ED2V01Y201306CAC024",
                  source: "Morgan & Claypool Publishers",
                },
                {
                  id: 5,
                  title: "Amazon Builders' Library: Workload Sizing and Capacity Planning",
                  focus:
                    "AWS engineering methodology for estimating peak throughput, modeling dependency limits, and sizing serverless worker fleets.",
                  url: "https://aws.amazon.com/builders-library/",
                  source: "AWS Builders' Library",
                },
                {
                  id: 6,
                  title: "Google SRE: Service Level Objectives & Latency Measurement",
                  focus:
                    "Why average latency is deceptive, how to define SLOs around p95/p99 percentiles, and how to automate capacity load tests.",
                  url: "https://sre.google/sre-book/service-level-objectives/",
                  source: "Google Site Reliability Engineering",
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
                    <span>Read Paper / Resource</span>
                    <ExternalLink size={13} />
                  </div>
                </a>
              ))}
            </div>

            {/* What Comes Next Banner */}
            <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50/70 p-5 flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
                  What You Mastered in Module 15
                </span>
                <span className="text-sm font-bold text-stone-900 block mt-0.5">
                  Scalability, Performance Modeling &amp; Bottleneck Analysis
                </span>
                <span className="text-xs text-stone-600 block mt-0.5">
                  You now know how to calculate Peak RPS, network bandwidth, storage growth, Little&apos;s Law concurrency ($L = \lambda W$), M/M/1 queueing delay, and diagnose CPU, memory, database, and I/O bottlenecks.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigate("/learning/system-design/traffic")}
                  className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Module 14 (Traffic)</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/learning/system-design/multi-region")}
                  className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                >
                  <span>Advance to Module 16 (Multi-Region &amp; DR)</span>
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
