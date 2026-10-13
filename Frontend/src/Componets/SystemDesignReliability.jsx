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
  TrendingDown,
  BarChart3,
  HardDrive,
  Calculator,
  Compass,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  CircuitBreakerDiagram,
  DistributedTraceDiagram,
  ErrorBudgetDiagram,
  VisualDiagramComponentModule17,
} from "./SystemDesignReliabilityDiagrams";

export default function SystemDesignReliability() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "simulators" | "qa" | "assignments" | "assessment" | "reading"
  const [activeWeek, setActiveWeek] = useState(1); // 1 | 2 (Week 33 | Week 34)
  const [activeLesson, setActiveLesson] = useState("17.1");

  // Expanded Q&A accordion states (15 Senior Interview Questions)
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 1: EXPONENTIAL BACKOFF & JITTER SIMULATOR
  // Delay_n = min(Delay_max, Delay_initial * 2^n) + jitter
  // ---------------------------------------------------------------------------
  const [simInitialDelayMs, setSimInitialDelayMs] = useState(200);
  const [simMaxDelayMs, setSimMaxDelayMs] = useState(3200);
  const [simMaxRetries, setSimMaxRetries] = useState(5);
  const [simJitterType, setSimJitterType] = useState("full"); // "none" | "full" | "decorrelated"

  const backoffSchedule = useMemo(() => {
    const attempts = [];
    let currentDelay = simInitialDelayMs;

    for (let attempt = 0; attempt <= simMaxRetries; attempt++) {
      const exponentialDelay = Math.min(simMaxDelayMs, simInitialDelayMs * Math.pow(2, attempt));
      let calculatedDelay = exponentialDelay;

      if (simJitterType === "full") {
        // Full jitter: random between 0 and exponentialDelay
        calculatedDelay = Math.round(Math.random() * exponentialDelay);
      } else if (simJitterType === "decorrelated") {
        // Decorrelated jitter: random between initialDelay and 3 * currentDelay
        calculatedDelay = Math.min(
          simMaxDelayMs,
          Math.round(simInitialDelayMs + Math.random() * (currentDelay * 3 - simInitialDelayMs))
        );
        currentDelay = calculatedDelay;
      }

      attempts.push({
        attempt,
        nominalDelayMs: exponentialDelay,
        actualDelayMs: calculatedDelay,
      });
    }

    const totalDurationMs = attempts.reduce((acc, curr) => acc + curr.actualDelayMs, 0);

    return {
      attempts,
      totalDurationMs,
    };
  }, [simInitialDelayMs, simMaxDelayMs, simMaxRetries, simJitterType]);

  // ---------------------------------------------------------------------------
  // ASSESSMENT QUIZ STATE (6 QUESTIONS MATCHING PROMPT VERBATIM)
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "1. What is the primary difference between an SLI and an SLO?",
      options: [
        "An SLI is a measured indicator; an SLO is its target",
        "An SLI is a contract; an SLO is a database",
        "An SLI is a dashboard; an SLO is a log",
        "They always mean the same thing",
      ],
      correctIndex: 0,
      explanation:
        "A Service Level Indicator (SLI) is a measurable quantity (e.g. 99.8% successful requests), whereas a Service Level Objective (SLO) is the target or threshold set for that indicator over time (e.g. 99.9% over 30 days).",
    },
    {
      id: "q2",
      question: "2. Which observability signal is most useful for following a request across multiple services?",
      options: [
        "A CPU chart alone",
        "Distributed traces",
        "A deployment label alone",
        "A static configuration file",
      ],
      correctIndex: 1,
      explanation:
        "Distributed traces record the path of a request across services and processes, showing exact timestamps, latency breakdown, and error locations for individual spans along the execution path.",
    },
    {
      id: "q3",
      question: "3. What is the main purpose of a circuit breaker?",
      options: [
        "Retry every failed request indefinitely",
        "Prevent repeated calls to a dependency that is likely to be failing",
        "Guarantee zero network latency",
        "Replace all health checks",
      ],
      correctIndex: 1,
      explanation:
        "A circuit breaker detects consecutive or high failure rates to an upstream service and 'trips' open, failing fast or falling back immediately to protect both the caller and the failing dependency from cascading overload.",
    },
    {
      id: "q4",
      question: "4. Why can retries worsen an outage?",
      options: [
        "They always remove data",
        "They can add more load to an already overloaded dependency",
        "They reduce all request traffic to zero",
        "They automatically improve replica consistency",
      ],
      correctIndex: 1,
      explanation:
        "If a backend or database is already slowing down under peak load, blind synchronized retries from thousands of clients multiply request volume (the 'retry storm' or thundering herd), completely collapsing the struggling service.",
    },
    {
      id: "q5",
      question: "5. What best describes graceful degradation?",
      options: [
        "Shutting down every feature immediately",
        "Pretending every dependency is healthy",
        "Preserving essential functions when optional or dependent features fail",
        "Removing monitoring during incidents",
      ],
      correctIndex: 2,
      explanation:
        "Graceful degradation preserves the core user journeys (e.g. loading saved interview reports, viewing dashboards) when secondary or slow dependencies (such as real-time AI evaluation) fail.",
    },
    {
      id: "q6",
      question: "6. What should a blameless postmortem prioritize?",
      options: [
        "Finding one person to punish",
        "Evidence, contributing conditions, and corrective actions",
        "Avoiding a documented incident timeline",
        "Removing all alerts",
      ],
      correctIndex: 1,
      explanation:
        "Blameless postmortems focus on systems, environment conditions, architectural gaps, and organizational safeguards rather than pointing fingers at individuals, establishing actionable preventive engineering fixes.",
    },
  ];

  const handleSelectOption = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  // ---------------------------------------------------------------------------
  // CURRICULUM LESSON CONTENT (14 DETAILED LESSONS ACROSS 2 WEEKS)
  // ---------------------------------------------------------------------------
  const lessons = {
    // WEEK 33: Foundations, Nines, SLIs/SLOs, Error Budgets & Observability
    "17.1": {
      title: "17.1 Module Overview & Why Reliability Engineering Matters",
      week: 1,
      readTime: "12 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-700 block mb-1">
              Catastrophic Dependency Failure Scenario
            </span>
            <p className="text-stone-900 font-medium">
              Imagine PrepSpaces has thousands of candidates practicing coding and behavioral interviews. During peak hiring hours, our third-party external AI provider (e.g. OpenAI/Anthropic/Gemini) experiences a severe outage, returning HTTP 504 timeouts and taking 30+ seconds to respond.
            </p>
            <p className="mt-2 text-xs text-stone-700">
              In an unresilient architecture, every incoming web request blocks waiting for the AI response, completely exhausting server worker threads and database connection pools. In minutes, <strong>candidate dashboards, login screens, previous interview reports, and recruiter evaluations are all dragged down into total blackout</strong>.
            </p>
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">Learning Objectives</h3>
          <p>By the end of this module, you will be equipped to:</p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700">
            <li>Distinguish <strong>Reliability, Availability, Resilience, and Fault Tolerance</strong> with mathematical rigor.</li>
            <li>Define actionable <strong>Service Level Indicators (SLIs)</strong>, <strong>Service Level Objectives (SLOs)</strong>, and contractual <strong>SLAs</strong>.</li>
            <li>Calculate monthly downtime allowances across the <strong>&quot;Nines of Availability&quot;</strong> and manage <strong>Error Budgets</strong>.</li>
            <li>Instrument distributed architectures using <strong>OpenTelemetry</strong> (Metrics, Structured Logs, and Traces).</li>
            <li>Design and deploy critical resilience patterns: <strong>Timeouts, Retries with Exponential Backoff &amp; Jitter, Circuit Breakers, Bulkheads, and Idempotency Keys</strong>.</li>
            <li>Implement <strong>Graceful Degradation</strong> and <strong>Load Shedding</strong> to preserve core user journeys during partial outages.</li>
            <li>Lead <strong>Incident Response</strong> and author evidence-driven <strong>Blameless Postmortems</strong>.</li>
          </ul>

          <div className="rounded-xl border border-stone-200 bg-white p-4">
            <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
              <Compass size={16} className="text-orange-600" />
              Core Principle of Site Reliability Engineering
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              A reliable system is not one that never experiences failures. It is one whose failures are <strong>observable, bounded in blast radius, automatically contained, rapidly recoverable</strong>, and transparently degraded for end users.
            </p>
          </div>
        </div>
      ),
    },

    "17.2": {
      title: "17.2 Reliability, Availability, Resilience, and Fault Tolerance",
      week: 1,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Engineers often conflate reliability, availability, and resilience. In production engineering, each concept addresses an orthogonal property:
          </p>

          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                  <th className="p-3">Concept</th>
                  <th className="p-3">Core Definition</th>
                  <th className="p-3">PrepSpaces Concrete Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-xs">
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-mono font-bold text-stone-900">Reliability</td>
                  <td className="p-3">Performs required function correctly and accurately over time</td>
                  <td className="p-3 text-stone-600">Candidate interview scores and report metrics are calculated without corrupted data.</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-mono font-bold text-stone-900">Availability</td>
                  <td className="p-3">The proportion of time the service is usable by clients</td>
                  <td className="p-3 text-stone-600">Candidates can load their dashboard and start an interview when requested.</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-mono font-bold text-orange-700">Resilience</td>
                  <td className="p-3">Recovers or maintains operating status when internal faults occur</td>
                  <td className="p-3 text-stone-600">When an AI vendor fails, the system serves cached practice tests instead of crashing.</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-mono font-bold text-blue-700">Fault Tolerance</td>
                  <td className="p-3">Continues defined function without degradation despite specific failures</td>
                  <td className="p-3 text-stone-600">A database primary fails, but synchronous replicas elect a new leader with zero lost writes.</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-mono font-bold text-purple-700">Recoverability</td>
                  <td className="p-3">Restores service state or data after an outage or catastrophic loss</td>
                  <td className="p-3 text-stone-600">Point-in-Time Recovery restores candidate interview answers from WAL snapshots.</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-mono font-bold text-emerald-700">Observability</td>
                  <td className="p-3">Ability to deduce internal system state from external telemetry</td>
                  <td className="p-3 text-stone-600">A distributed trace pinpoints that a slow API call is waiting on an unindexed DB query.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/70 text-xs text-amber-950">
            <strong>Key Insight:</strong> A system can boast 99.99% availability (returning HTTP 200 responses) while being completely <em>unreliable</em> if it persistently returns blank, incorrect, or corrupted interview evaluation data.
          </div>
        </div>
      ),
    },

    "17.3": {
      title: "17.3 Availability Engineering & The Mathematics of the Nines",
      week: 1,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Availability measures the proportion of time a service is operational and serving valid requests:
          </p>

          <div className="p-4 rounded-xl bg-stone-900 text-amber-300 font-mono text-center text-sm">
            {"Availability = Uptime / (Uptime + Downtime) = Successful Eligible Requests / Total Eligible Requests"}
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">The Exponential Cost of the Nines</h3>
          <p>
            Every additional &quot;nine&quot; of availability cuts permissible downtime by an order of magnitude, demanding exponentially greater infrastructure redundancy, automation, and operational discipline:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold text-stone-500 uppercase">Two Nines (99%)</span>
              <h4 className="text-xl font-extrabold text-stone-900 font-mono">7h 12m</h4>
              <p className="text-xs text-stone-600">Permissible downtime per 30-day month. Single-node architecture with manual recovery.</p>
            </div>

            <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/50 space-y-2">
              <span className="text-xs font-mono font-bold text-orange-700 uppercase">Three Nines (99.9%)</span>
              <h4 className="text-xl font-extrabold text-orange-800 font-mono">43.2 mins</h4>
              <p className="text-xs text-stone-600">Permissible downtime per month. Multi-AZ redundant deployment with automated health checks.</p>
            </div>

            <div className="p-4 rounded-xl border border-red-200 bg-red-50/50 space-y-2">
              <span className="text-xs font-mono font-bold text-red-700 uppercase">Four Nines (99.99%)</span>
              <h4 className="text-xl font-extrabold text-red-800 font-mono">4.32 mins</h4>
              <p className="text-xs text-stone-600">Permissible downtime per month. Fully automated cross-AZ failover, zero human intervention allowed.</p>
            </div>
          </div>

          <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 text-xs space-y-1.5">
            <strong className="text-stone-900 block">The Fallacy of 100% Availability:</strong>
            <p className="text-stone-600 leading-relaxed">
              Google SRE teaches that targeting 100% availability is almost always a flawed business decision. The extreme cost of achieving the final fractions of a percent produces diminishing returns for end users whose own ISP, browser, or cellular connection typically has an availability below 99.5%.
            </p>
          </div>
        </div>
      ),
    },

    "17.4": {
      title: "17.4 SLI, SLO, and SLA: Connecting Tech to Business",
      week: 1,
      readTime: "16 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Reliability objectives must bridge the gap between low-level telemetry counters and user satisfaction. This is achieved through three tiered concepts:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-orange-600 block">1. The Indicator</span>
              <h4 className="font-bold text-stone-900 text-sm">Service Level Indicator (SLI)</h4>
              <p className="text-xs text-stone-600">
                A quantitative, user-centric measurement of service performance over time.
              </p>
              <div className="p-2.5 rounded bg-stone-50 text-[11px] font-mono text-stone-700">
                Example: Proportion of candidate dashboard GET requests completing in &lt; 300ms with HTTP 200.
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-blue-600 block">2. The Target</span>
              <h4 className="font-bold text-stone-900 text-sm">Service Level Objective (SLO)</h4>
              <p className="text-xs text-stone-600">
                An internal engineering reliability target for an SLI over a specified rolling window.
              </p>
              <div className="p-2.5 rounded bg-stone-50 text-[11px] font-mono text-stone-700">
                Example: 99.9% of candidate dashboard requests must satisfy the SLI over a rolling 30-day window.
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-purple-600 block">3. The Contract</span>
              <h4 className="font-bold text-stone-900 text-sm">Service Level Agreement (SLA)</h4>
              <p className="text-xs text-stone-600">
                A legally binding commercial agreement with customers specifying financial penalties or credits if breached.
              </p>
              <div className="p-2.5 rounded bg-stone-50 text-[11px] font-mono text-stone-700">
                Example: 99.5% monthly availability. If breached, enterprise customers receive a 15% billing credit.
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">Why Internal SLOs Must Be Stricter Than SLAs</h3>
          <p>
            An internal SLO should always be tighter than the external SLA (e.g. 99.9% internal SLO vs. 99.5% commercial SLA). This gives the engineering team an early warning buffer to remediate degradation before contractual breach penalties occur.
          </p>
        </div>
      ),
    },

    "17.5": {
      title: "17.5 Error Budgets & Release Decision Frameworks",
      week: 1,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            An <strong>Error Budget</strong> is the permissible unreliability guaranteed by an SLO:
          </p>

          <div className="p-4 rounded-xl bg-stone-900 text-amber-300 font-mono text-center text-sm">
            {"Error Budget = 1 - SLO"}
          </div>

          <p>
            For an application with a <strong>99.9% SLO</strong> serving 1,000,000 requests per month:
          </p>
          <div className="p-3.5 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs font-mono space-y-1">
            <div>Permissible Failure Rate = 0.1%</div>
            <div>Allowed Failed Requests = 1,000,000 &times; 0.001 = <strong>1,000 failed requests</strong></div>
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">Interactive Error Budget Visualizer</h3>
          <ErrorBudgetDiagram />

          <h3 className="text-lg font-bold text-stone-900 pt-3">The Three Release Gate Policies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl border border-emerald-300 bg-emerald-50 text-xs space-y-1">
              <strong className="text-emerald-950 block">Green Zone (&lt; 75% Burned)</strong>
              <p className="text-emerald-800">Normal releases, continuous deployments, feature launches, and experiments proceed without friction.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-amber-300 bg-amber-50 text-xs space-y-1">
              <strong className="text-amber-950 block">Yellow Zone (75–100% Burned)</strong>
              <p className="text-amber-800">Heightened scrutiny. Non-critical releases require Tech Lead sign-off. High-risk database migrations postponed.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-red-300 bg-red-50 text-xs space-y-1">
              <strong className="text-red-950 block">Red Zone (&gt; 100% Exhausted)</strong>
              <p className="text-red-800">Full release freeze. The entire engineering team halts new feature work and prioritizes stability, tests, and bugs.</p>
            </div>
          </div>
        </div>
      ),
    },

    "17.6": {
      title: "17.6 Observability vs. Monitoring & The Three Telemetry Signals",
      week: 1,
      readTime: "16 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            <strong>Monitoring</strong> answers &quot;Is the system broken?&quot; based on predefined thresholds. <strong>Observability</strong> empowers you to answer &quot;Why is it broken?&quot; when diagnosing novel failure modes you never anticipated.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-orange-600 block">Signal 1: Metrics</span>
              <h4 className="font-bold text-stone-900 text-sm">Numeric Aggregations</h4>
              <p className="text-xs text-stone-600">
                Time-series numeric measurements (counters, gauges, histograms) recorded at fixed intervals.
              </p>
              <div className="p-2 rounded bg-stone-50 text-[11px] font-mono text-stone-700">
                Use: Alerting, high-level dashboards, capacity trends, anomaly detection.
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-blue-600 block">Signal 2: Structured Logs</span>
              <h4 className="font-bold text-stone-900 text-sm">Contextual Event Records</h4>
              <p className="text-xs text-stone-600">
                JSON-formatted event logs containing timestamp, severity, user ID, trace ID, and detailed error stack traces.
              </p>
              <div className="p-2 rounded bg-stone-50 text-[11px] font-mono text-stone-700">
                Use: Forensic root-cause analysis, debugging, regulatory audits.
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-purple-600 block">Signal 3: Distributed Traces</span>
              <h4 className="font-bold text-stone-900 text-sm">Request Path Journeys</h4>
              <p className="text-xs text-stone-600">
                Propagated context IDs (Trace ID &amp; Span ID) tracking a request across network boundaries and microservices.
              </p>
              <div className="p-2 rounded bg-stone-50 text-[11px] font-mono text-stone-700">
                Use: Identifying critical path bottlenecks, cross-service timeouts, serialization lag.
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">Interactive OpenTelemetry Trace Waterfall</h3>
          <DistributedTraceDiagram />
        </div>
      ),
    },

    "17.7": {
      title: "17.7 The Four Golden Signals & Dashboard Architecture",
      week: 1,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Google SRE defines the <strong>Four Golden Signals</strong> as the core foundation for monitoring any distributed service:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-1.5">
              <span className="text-xs font-mono font-bold text-orange-600 block">1. Latency</span>
              <p className="text-xs text-stone-600">
                The time it takes to service a request. Crucially, distinguish the latency of successful requests from failed requests (fast 500 errors can deceptively mask real latency spikes). Always track p50, p95, and p99 percentiles.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-1.5">
              <span className="text-xs font-mono font-bold text-blue-600 block">2. Traffic</span>
              <p className="text-xs text-stone-600">
                A measure of demand placed on the system. For HTTP services: requests per second (RPS); for streaming services: network I/O or message throughput.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-1.5">
              <span className="text-xs font-mono font-bold text-red-600 block">3. Errors</span>
              <p className="text-xs text-stone-600">
                The rate of requests that fail, either explicitly (HTTP 500 internal server errors), implicitly (HTTP 200 with an empty error body), or by policy (HTTP 429 rate limited).
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-1.5">
              <span className="text-xs font-mono font-bold text-purple-600 block">4. Saturation</span>
              <p className="text-xs text-stone-600">
                How close the service is to its resource ceiling. High saturation indicates impending degradation. Examples: CPU core utilization, memory heap percentage, DB connection pool occupancy, queue age.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">The Four Dashboard Tiers</h3>
          <p>
            Never dump hundreds of unorganized charts onto one screen. Structure dashboards into a 4-tier drill-down hierarchy:
          </p>
          <ol className="list-decimal pl-5 space-y-1 text-xs text-stone-700">
            <li><strong>Tier 1 (User Experience):</strong> High-level SLIs (login success rate, interview report save rate, p95 latency).</li>
            <li><strong>Tier 2 (Application Service):</strong> Service-specific RPS, worker thread pools, memory allocations, garbage collection pauses.</li>
            <li><strong>Tier 3 (Dependencies):</strong> Database query durations, connection pools, Redis cache hit ratio, external AI API latency.</li>
            <li><strong>Tier 4 (Infrastructure &amp; Host):</strong> Virtual machine CPU, network interfaces, disk I/O IOPS, container restart counts.</li>
          </ol>
        </div>
      ),
    },

    // WEEK 34: Resilience Patterns, Degradation, Self-Healing, Incidents & Chaos
    "17.8": {
      title: "17.8 Actionable Alerting & Defeating Alert Fatigue",
      week: 2,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            <strong>Alert fatigue</strong> is one of the greatest threats to software reliability. When engineers receive dozens of non-actionable or transient alerts per shift, they subconsciously learn to ignore notifications, inevitably missing real customer-impacting disasters.
          </p>

          <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-3">
            <h4 className="font-bold text-stone-900 text-sm">The 5 Rules of Actionable Alerting</h4>
            <ul className="list-disc pl-5 space-y-2 text-xs text-stone-600">
              <li><strong>Alert on Symptoms, Not Causes:</strong> Page on &quot;Candidate login failure rate &gt; 1%&quot; rather than &quot;Server CPU &gt; 85%&quot;. High CPU with happy users does not warrant waking someone at 3 AM.</li>
              <li><strong>Every Page Must Require Human Intervention:</strong> If an alert resolves itself within 2 minutes or can be remediated by a script, automate the script and demote the alert to a dashboard log.</li>
              <li><strong>Include Concrete Evidence:</strong> The alert notification must display the affected microservice, current metric value, threshold, and customer impact.</li>
              <li><strong>One-Click Runbook Link:</strong> Every pager notification must include a direct URL to an approved operational runbook with step-by-step diagnostic and rollback instructions.</li>
              <li><strong>Direct Trace / Dashboard URL:</strong> Link directly to a pre-filtered Grafana dashboard or OpenTelemetry trace showing the anomaly window.</li>
            </ul>
          </div>
        </div>
      ),
    },

    "17.9": {
      title: "17.9 Timeouts & Retries with Exponential Backoff and Jitter",
      week: 2,
      readTime: "16 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            When network calls hang or fail transiently, careless retry logic can trigger catastrophic <strong>retry storms</strong> that destroy struggling dependencies:
          </p>

          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2 text-xs">
            <strong className="text-stone-900 block font-mono text-sm">The Downstream Timeout Invariant:</strong>
            <p className="text-stone-600">
              A downstream call timeout must always be strictly less than the remaining deadline of the upstream parent request. If API Gateway has a 5-second timeout, calling an internal service with a 10-second timeout wastes compute threads servicing requests the user has already canceled.
            </p>
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">Exponential Backoff with Full Jitter</h3>
          <p>
            To prevent synchronized retry spikes from thousands of clients, randomize retry delays using <strong>Full Jitter</strong>:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-amber-300 font-mono text-center text-sm">
            {"Sleep = random(0, min(MaxDelay, InitialDelay * 2^attempt))"}
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
            <span className="text-xs font-bold text-stone-900 block">Interactive Backoff &amp; Jitter Simulator:</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-stone-600 block mb-1">Initial Delay: {simInitialDelayMs}ms</label>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  step="50"
                  value={simInitialDelayMs}
                  onChange={(e) => setSimInitialDelayMs(Number(e.target.value))}
                  className="w-full accent-orange-600 cursor-pointer"
                />
              </div>
              <div>
                <label className="text-xs text-stone-600 block mb-1">Max Delay: {simMaxDelayMs}ms</label>
                <input
                  type="range"
                  min="1000"
                  max="10000"
                  step="500"
                  value={simMaxDelayMs}
                  onChange={(e) => setSimMaxDelayMs(Number(e.target.value))}
                  className="w-full accent-stone-800 cursor-pointer"
                />
              </div>
              <div>
                <label className="text-xs text-stone-600 block mb-1">Jitter Strategy</label>
                <select
                  value={simJitterType}
                  onChange={(e) => setSimJitterType(e.target.value)}
                  className="w-full text-xs font-mono p-1.5 rounded border border-stone-200 bg-white"
                >
                  <option value="none">No Jitter (Synchronized Thundering Herd)</option>
                  <option value="full">Full Jitter (AWS Recommended)</option>
                  <option value="decorrelated">Decorrelated Jitter</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-stone-50 border-b border-stone-200 text-stone-600">
                  <tr>
                    <th className="p-2.5">Attempt</th>
                    <th className="p-2.5">Nominal Exponential Delay</th>
                    <th className="p-2.5">Actual Delay (With Jitter)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-[11px]">
                  {backoffSchedule.attempts.map((att) => (
                    <tr key={att.attempt}>
                      <td className="p-2.5 font-bold text-stone-800">Retry #{att.attempt}</td>
                      <td className="p-2.5 text-stone-500">{att.nominalDelayMs} ms</td>
                      <td className="p-2.5 font-bold text-orange-600">{att.actualDelayMs} ms</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },

    "17.10": {
      title: "17.10 Circuit Breakers, Bulkheads & Blast Radius Isolation",
      week: 2,
      readTime: "16 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            To prevent a slow dependency from consuming all system threads, you deploy <strong>Circuit Breakers</strong> and <strong>Bulkheads</strong>:
          </p>

          <CircuitBreakerDiagram />

          <h3 className="text-lg font-bold text-stone-900 pt-3">The Bulkhead Pattern (Ship Hull Isolation)</h3>
          <p>
            In naval architecture, bulkheads divide a ship into watertight compartments so a single hull puncture doesn&apos;t sink the vessel. In distributed systems, bulkheads partition computing pools so an overload in one workflow cannot starve others:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <h4 className="font-bold text-stone-900 text-sm">Dedicated Thread / Worker Pools</h4>
              <p className="text-xs text-stone-600">
                Candidate live interview sessions run on Worker Pool A (max 200 threads). Async PDF report generation runs on Worker Pool B (max 50 threads). A spike in report generation cannot consume threads needed for live candidate interviews.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <h4 className="font-bold text-stone-900 text-sm">Database Connection Segmenting</h4>
              <p className="text-xs text-stone-600">
                Allocate connection pools by criticality: 70 connections reserved for transaction-critical write paths, 20 connections for read queries, and 10 connections for background cron jobs.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    "17.11": {
      title: "17.11 Rate Limiting, Load Shedding & Idempotency Safeguards",
      week: 2,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            When inbound traffic surpasses physical capacity, systems must proactively shed lower-priority work to protect survival:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <h4 className="font-bold text-stone-900 text-sm">Rate Limiting vs. Load Shedding</h4>
              <p className="text-xs text-stone-600">
                <strong>Rate Limiting</strong> restricts individual users based on client IP or token bucket quotas. <strong>Load Shedding</strong> occurs globally at the server ingress when internal CPU or queue depth reaches 90% capacity, dropping non-critical requests immediately with HTTP 503.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <h4 className="font-bold text-stone-900 text-sm">Idempotency Key Architecture</h4>
              <p className="text-xs text-stone-600">
                Every state-mutating request carries an <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">X-Idempotency-Key: &lt;UUID&gt;</code>. The server caches the result of the key in Redis for 24 hours. If a network timeout prompts the client to retry, the server returns the cached response without re-executing the payment or interview submission.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    "17.12": {
      title: "17.12 Graceful Degradation: Architecture for Partial Failures",
      week: 2,
      readTime: "16 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            <strong>Graceful Degradation</strong> ensures an application remains partially functional when upstream dependencies crash, serving degraded but valuable UX:
          </p>

          <div className="rounded-xl border border-stone-200 bg-white p-4">
            <h4 className="font-bold text-stone-900 text-sm mb-3">
              PrepSpaces Degradation Matrix (AI Provider Outage)
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                    <th className="p-2.5">Feature</th>
                    <th className="p-2.5">Normal Mode</th>
                    <th className="p-2.5 text-orange-700">Degraded Fallback Mode</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-[11px]">
                  <tr>
                    <td className="p-2.5 font-bold text-stone-900">Candidate Dashboard</td>
                    <td className="p-2.5">Real-time AI readiness scores</td>
                    <td className="p-2.5">Serves cached scores from Redis with &quot;Cached 2h ago&quot; badge</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-stone-900">New AI Interviews</td>
                    <td className="p-2.5">Dynamic adaptive question generator</td>
                    <td className="p-2.5">Falls back to static curated question bank from PostgreSQL</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-stone-900">Answer Evaluation</td>
                    <td className="p-2.5">Instant 5-second LLM feedback</td>
                    <td className="p-2.5">Saves answers durably to DB; queues evaluation job in RabbitMQ/Kafka</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-stone-900">Previous Reports</td>
                    <td className="p-2.5">Full interactive report retrieval</td>
                    <td className="p-2.5 text-emerald-700 font-bold">100% operational (reads from S3/Postgres, zero AI dependency)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },

    "17.13": {
      title: "17.13 Health Checks, Self-Healing & Failure Containment",
      week: 2,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Kubernetes and load balancers rely on distinct health check probes to orchestrate container lifecycles safely:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-orange-600 block">Probe 1</span>
              <h4 className="font-bold text-stone-900 text-sm">Liveness Probe</h4>
              <p className="text-xs text-stone-600">
                &quot;Is the process deadlocked or zombie?&quot; If this fails, the container engine kills and restarts the container.
              </p>
              <div className="p-2 rounded bg-stone-50 text-[11px] font-mono text-stone-700">
                Rule: Never check external databases in liveness! If DB slows down, all containers restart simultaneously in a cascading death loop.
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-blue-600 block">Probe 2</span>
              <h4 className="font-bold text-stone-900 text-sm">Readiness Probe</h4>
              <p className="text-xs text-stone-600">
                &quot;Can this pod accept network traffic right now?&quot; If this fails, the load balancer removes the pod from active rotation without killing it.
              </p>
              <div className="p-2 rounded bg-stone-50 text-[11px] font-mono text-stone-700">
                Use: Warming up local caches, verifying critical DB connectivity.
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-purple-600 block">Probe 3</span>
              <h4 className="font-bold text-stone-900 text-sm">Startup Probe</h4>
              <p className="text-xs text-stone-600">
                Disables liveness and readiness checks until the legacy app completes its slow initial boot sequence.
              </p>
              <div className="p-2 rounded bg-stone-50 text-[11px] font-mono text-stone-700">
                Benefit: Prevents fast liveness timeouts from killing slow-starting applications.
              </div>
            </div>
          </div>
        </div>
      ),
    },

    "17.14": {
      title: "17.14 Incident Management, Blameless Postmortems & Chaos",
      week: 2,
      readTime: "18 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Reliability is maintained through operational discipline during and after production incidents:
          </p>

          <div className="p-5 rounded-2xl border border-stone-200 bg-[#faf8f4] space-y-3">
            <h4 className="font-bold text-stone-900 text-sm">The 6-Step Incident Response Lifecycle</h4>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs font-mono">
              <div className="p-2 rounded-lg bg-white border border-stone-200">
                <span className="text-[10px] text-stone-400 block">1</span>
                <span className="font-bold text-stone-800">Detect</span>
              </div>
              <div className="p-2 rounded-lg bg-white border border-stone-200">
                <span className="text-[10px] text-stone-400 block">2</span>
                <span className="font-bold text-stone-800">Triage</span>
              </div>
              <div className="p-2 rounded-lg bg-white border border-stone-200">
                <span className="text-[10px] text-stone-400 block">3</span>
                <span className="font-bold text-stone-800">Mitigate</span>
              </div>
              <div className="p-2 rounded-lg bg-white border border-stone-200">
                <span className="text-[10px] text-stone-400 block">4</span>
                <span className="font-bold text-stone-800">Investigate</span>
              </div>
              <div className="p-2 rounded-lg bg-white border border-stone-200">
                <span className="text-[10px] text-stone-400 block">5</span>
                <span className="font-bold text-stone-800">Recover</span>
              </div>
              <div className="p-2 rounded-lg bg-white border border-stone-200">
                <span className="text-[10px] text-stone-400 block">6</span>
                <span className="font-bold text-stone-800">Learn</span>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">Structure of a Blameless Postmortem</h3>
          <p>
            A high-maturity engineering culture writes postmortems that investigate systemic and procedural vulnerabilities rather than attributing human blame:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-700">
            <li><strong>Incident Timeline:</strong> Exact timestamps of detection, escalation, mitigation, and resolution.</li>
            <li><strong>Customer Impact:</strong> Number of affected candidates, error percentage, and consumed error budget.</li>
            <li><strong>Root Cause &amp; Trigger:</strong> What condition allowed the failure to cascade?</li>
            <li><strong>Why Safeguards Failed:</strong> Why didn&apos;t existing circuit breakers, tests, or alerts prevent the outage?</li>
            <li><strong>Action Items (P0/P1):</strong> Concrete engineering tasks with assigned owners and 30-day deadlines.</li>
          </ul>
        </div>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans pb-20">
      {/* Top Module Navigation Bar */}
      <ModuleNav
        track="system-design"
        currentModuleId="reliability"
        showAiTutor={false}
        onAiTutorToggle={() => {}}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        {/* Module Header & Breadcrumb */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500 mb-2">
            <span>System Design Masterclass</span>
            <span>&bull;</span>
            <span className="text-orange-600 font-bold">Module 17</span>
            <span>&bull;</span>
            <span>Advanced Reliability Engineering &bull; Weeks 33–34</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Reliability Engineering, Observability &amp; Graceful Degradation
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl leading-relaxed">
                Design fault-isolated, self-healing distributed systems. Master SLIs/SLOs, error budgets, OpenTelemetry distributed tracing, circuit breakers, bulkheads, rate limiting, and blameless postmortems.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-xs font-mono font-bold text-stone-700 shadow-2xs">
                <Clock size={13} className="text-orange-600" />
                35–45 study hrs
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-orange-200 bg-orange-50 text-xs font-mono font-bold text-orange-800 shadow-2xs">
                <ShieldCheck size={13} />
                SLO &bull; Traces &bull; Resilience
              </span>
            </div>
          </div>
        </div>

        {/* Primary Tab Navigation */}
        <div className="flex items-center gap-1 overflow-x-auto border-b border-stone-200 pb-2 mb-6 scrollbar-none text-xs font-bold">
          {[
            { id: "curriculum", label: "Curriculum & Lessons", icon: BookOpen },
            { id: "simulators", label: "Interactive Simulators", icon: Sliders },
            { id: "qa", label: "15 Senior Interview Q&A", icon: HelpCircle },
            { id: "assignments", label: "5 Hands-On Assignments", icon: Workflow },
            { id: "assessment", label: "Knowledge Check (Quiz)", icon: CheckCircle2 },
            { id: "reading", label: "Recommended Reading", icon: ExternalLink },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-stone-900 text-white shadow-xs"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                }`}
              >
                <Icon size={14} className={isActive ? "text-orange-400" : "text-stone-500"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CURRICULUM & LESSONS                                        */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar: Week & Lesson Selector */}
            <div className="lg:col-span-4 space-y-4">
              {/* Week Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl border border-stone-200 bg-white">
                <button
                  type="button"
                  onClick={() => setActiveWeek(1)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold text-center transition cursor-pointer ${
                    activeWeek === 1
                      ? "bg-stone-900 text-white shadow-xs"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  Week 33: Foundations &amp; SLOs
                </button>
                <button
                  type="button"
                  onClick={() => setActiveWeek(2)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold text-center transition cursor-pointer ${
                    activeWeek === 2
                      ? "bg-stone-900 text-white shadow-xs"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  Week 34: Resilience &amp; Incidents
                </button>
              </div>

              {/* Lesson List */}
              <div className="rounded-2xl border border-stone-200 bg-white p-3 space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 px-2 block mb-1">
                  {activeWeek === 1 ? "Week 33 Curriculum (7 Lessons)" : "Week 34 Curriculum (7 Lessons)"}
                </span>

                {Object.entries(lessons)
                  .filter(([_, data]) => data.week === activeWeek)
                  .map(([id, data]) => {
                    const isSelected = activeLesson === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setActiveLesson(id)}
                        className={`w-full text-left p-2.5 rounded-xl text-xs transition flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-orange-50 border border-orange-200 font-bold text-orange-950"
                            : "text-stone-700 hover:bg-stone-50"
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              isSelected ? "bg-orange-600" : "bg-stone-300"
                            }`}
                          />
                          <span className="truncate">{data.title}</span>
                        </div>
                        <span className="text-[10px] font-mono text-stone-400 shrink-0 ml-2">
                          {data.readTime}
                        </span>
                      </button>
                    );
                  })}
              </div>

              {/* Quick Stat Card */}
              <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-4 text-xs space-y-2">
                <span className="font-bold text-stone-900 block flex items-center gap-1.5">
                  <ShieldAlert size={14} className="text-orange-600" />
                  Key Takeaway
                </span>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  Never blindly retry failing database queries or external AI calls without backoff and jitter. Uncontrolled retries multiply load on struggling components and transform minor glitches into catastrophic outages.
                </p>
              </div>
            </div>

            {/* Right Main Panel: Lesson Content */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-orange-600 tracking-wider">
                      Module 17 &bull; Lesson {activeLesson}
                    </span>
                    <h2 className="text-xl font-bold text-stone-900 mt-1">
                      {lessons[activeLesson]?.title}
                    </h2>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-stone-100 text-stone-600 font-bold">
                    {lessons[activeLesson]?.readTime}
                  </span>
                </div>

                {/* Lesson Body */}
                {lessons[activeLesson]?.content}

                {/* Next / Previous Lesson Buttons */}
                <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
                  {(() => {
                    const keys = Object.keys(lessons);
                    const currIndex = keys.indexOf(activeLesson);
                    const prevKey = currIndex > 0 ? keys[currIndex - 1] : null;
                    const nextKey = currIndex < keys.length - 1 ? keys[currIndex + 1] : null;

                    return (
                      <>
                        {prevKey ? (
                          <button
                            type="button"
                            onClick={() => {
                              setActiveLesson(prevKey);
                              setActiveWeek(lessons[prevKey].week);
                            }}
                            className="flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-stone-950 transition cursor-pointer"
                          >
                            <ArrowLeft size={13} />
                            <span>Previous: {prevKey}</span>
                          </button>
                        ) : (
                          <div />
                        )}

                        {nextKey && (
                          <button
                            type="button"
                            onClick={() => {
                              setActiveLesson(nextKey);
                              setActiveWeek(lessons[nextKey].week);
                            }}
                            className="flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-800 transition cursor-pointer"
                          >
                            <span>Next: {nextKey}</span>
                            <ArrowRight size={13} />
                          </button>
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE SIMULATORS                                      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "simulators" && (
          <div className="space-y-8">
            {/* SIMULATOR 1: CIRCUIT BREAKER STATE MACHINE */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <div className="border-b border-stone-200 pb-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                  Interactive Simulator 1
                </span>
                <h3 className="font-extrabold text-stone-900 text-base">
                  Dynamic Circuit Breaker &amp; Blast Radius Containment
                </h3>
              </div>
              <CircuitBreakerDiagram />
            </div>

            {/* SIMULATOR 2: DISTRIBUTED TRACE WATERFALL */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <div className="border-b border-stone-200 pb-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                  Interactive Simulator 2
                </span>
                <h3 className="font-extrabold text-stone-900 text-base">
                  OpenTelemetry Distributed Trace Waterfall Analysis
                </h3>
              </div>
              <DistributedTraceDiagram />
            </div>

            {/* SIMULATOR 3: ERROR BUDGET SLA CALCULATOR */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <div className="border-b border-stone-200 pb-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                  Interactive Simulator 3
                </span>
                <h3 className="font-extrabold text-stone-900 text-base">
                  Availability Targets &amp; Monthly Error Budget Burn Engine
                </h3>
              </div>
              <ErrorBudgetDiagram />
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: 15 SENIOR INTERVIEW Q&A                                     */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "qa" && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl border border-orange-200 bg-orange-50/60 mb-2">
              <h3 className="font-bold text-stone-900 text-sm">
                15 Senior System Design Interview Questions &amp; Architectural Answers
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Essential questions asked in Staff &amp; Principal SRE / Distributed Systems loops at Google, AWS, Meta, and Netflix.
              </p>
            </div>

            {[
              {
                id: "qa-1",
                q: "1. How do reliability and availability differ?",
                a: "Availability measures the proportion of time a service is operational and capable of responding to requests (e.g. Uptime / [Uptime + Downtime]). Reliability measures whether the service performs its specified business function correctly, consistently, and without data corruption over time. A service can have 99.99% availability by quickly returning HTTP 200 responses, but be 0% reliable if every response returns corrupted candidate evaluation scores.",
              },
              {
                id: "qa-2",
                q: "2. How would you choose an SLO for an API with millions of requests each day?",
                a: "Derive the SLO backwards from user satisfaction and business impact rather than engineering optimism: (1) Identify the user-critical path (e.g. submitting an interview answer vs fetching user avatars). (2) Measure historical baseline latency and error rates across percentiles (p50, p95, p99). (3) Set an SLI strictly reflecting user success (e.g. percentage of submissions committed in < 500ms). (4) Establish an SLO target (e.g. 99.9% over 30 days) that balances feature delivery speed with user tolerance for occasional retries, ensuring the SLO is stricter than external commercial SLAs.",
              },
              {
                id: "qa-3",
                q: "3. Explain error budgets and how they influence release decisions.",
                a: "An error budget represents the allowed unreliability of a service (1 - SLO). For a 99.9% SLO with 1M requests, the error budget is 1,000 failed requests. If an incident or buggy canary consumes 90% of the budget in a week, the engineering team slows risky deployments. If the budget is exhausted (burn rate > 100%), a release freeze is triggered: non-critical feature rollouts are halted, and engineering capacity is redirected entirely to stability, test coverage, and reliability fixes.",
              },
              {
                id: "qa-4",
                q: "4. What is the difference between monitoring and observability?",
                a: "Monitoring tracks known failure modes using predefined dashboards and alert thresholds ('Is the API error rate > 1%?'). Observability is the property of a system that allows engineers to infer its internal state and explain novel, unpredicted failures purely by analyzing its external telemetry outputs (metrics, structured contextual logs, and distributed traces) without needing to deploy new diagnostic code during an outage.",
              },
              {
                id: "qa-5",
                q: "5. How do metrics, logs, and traces complement one another?",
                a: "They form the three pillars of telemetry: (1) Metrics detect anomalies and alert on high-level aggregate trends (e.g. p99 latency spiked from 120ms to 2.4s). (2) Distributed Traces identify the exact microservice span along the request critical path responsible for the delay (e.g. the external AI provider took 2,200ms). (3) Structured Logs provide deep forensic detail within that specific span (e.g. stack trace, API request payload, rate limit headers).",
              },
              {
                id: "qa-6",
                q: "6. Explain the four golden signals and when you would use them.",
                a: "Defined by Google SRE: (1) Latency: duration to service a request (differentiating successful requests from fast errors). (2) Traffic: demand on the system (RPS or active sessions). (3) Errors: rate of failed requests (HTTP 5xx, timeouts, policy drops). (4) Saturation: fraction of constrained resources consumed (CPU cores, memory heap, connection pool depth). They provide the first-line diagnostic overview across all microservices.",
              },
              {
                id: "qa-7",
                q: "7. How do timeouts, retries, and circuit breakers work together?",
                a: "They form a multi-layered defense: (1) Timeouts enforce a strict upper bound on how long a thread will wait for an unresponsive dependency before releasing resources. (2) Retries with Exponential Backoff and Jitter absorb rare, transient network blips without bubbling errors to the user. (3) Circuit Breakers detect when failures persist across multiple attempts, tripping 'Open' to fail fast and prevent endless retries from amplifying an outage.",
              },
              {
                id: "qa-8",
                q: "8. What is the difference between circuit breakers and bulkheads?",
                a: "A Circuit Breaker monitors the health of an external dependency and cuts off outbound requests when failure thresholds are breached. A Bulkhead partitions internal computing resources (such as thread pools, memory buffers, or database connection pools) so that an overload in one workflow cannot consume the capacity needed by unrelated critical workflows.",
              },
              {
                id: "qa-9",
                q: "9. How would you prevent cascading failures in a microservices architecture?",
                a: "To prevent a localized fault from triggering system-wide collapse: (1) Enforce strict downstream timeouts shorter than upstream request deadlines. (2) Apply exponential backoff with full jitter on all retries. (3) Deploy circuit breakers with sensible fallback defaults on all inter-service boundaries. (4) Implement bulkheads to isolate worker pools. (5) Deploy load shedding at ingress to reject non-essential requests when CPU exceeds 90%. (6) Use idempotency keys to safely de-duplicate retries.",
              },
              {
                id: "qa-10",
                q: "10. Design graceful degradation for an AI-powered interview platform.",
                a: "When the external AI provider is down: (1) Candidate dashboards load cached readiness metrics from Redis with an indicator badge. (2) Live interview sessions switch from dynamic AI evaluation to curated static coding and algorithmic problems stored locally in PostgreSQL. (3) Candidate submissions are durably persisted to database storage, and evaluation jobs are queued in Kafka/RabbitMQ for asynchronous processing once the AI provider recovers. (4) Previous completed reports remain 100% accessible via S3.",
              },
              {
                id: "qa-11",
                q: "11. What should an application's liveness and readiness checks measure?",
                a: "Liveness probes should only check if the internal process is responsive and not deadlocked (e.g. event loop running). NEVER check external databases or downstream dependencies in liveness, or a database hiccup will cause Kubernetes to restart all pods simultaneously in a cascading death spiral. Readiness probes check whether the pod is ready to accept user traffic (e.g. schema cache warmed up, DB pool connected). If readiness fails, traffic is temporarily diverted without terminating the pod.",
              },
              {
                id: "qa-12",
                q: "12. How would you investigate a sudden increase in p99 latency?",
                a: "Follow a structured diagnostic flow: (1) Check traffic volume to see if a traffic spike exceeded capacity. (2) Inspect distributed traces for slow requests to pinpoint which span (database, cache, external API, serialization) expanded. (3) Inspect host saturation metrics: CPU throttling, JVM garbage collection pause times, or database lock contention. (4) Correlate the timeline with recent Git deployments or configuration changes. (5) Check downstream dependency status pages and connection pool occupancy.",
              },
              {
                id: "qa-13",
                q: "13. What should happen when an error budget is exhausted?",
                a: "When an error budget is depleted: (1) Automatic release gating is enacted in CI/CD, pausing all feature deployments that carry operational risk. (2) The engineering sprint shifts focus entirely to reliability items: performance optimizations, bug fixes, automated integration tests, runbook updates, and resilience pattern hardening. (3) Releases resume only when the rolling error budget returns to healthy thresholds or an executive business waiver is granted.",
              },
              {
                id: "qa-14",
                q: "14. How would you design a controlled chaos experiment?",
                a: "Apply Chaos Engineering principles: (1) Formulate a precise hypothesis (e.g. 'If Redis cache latency increases by 500ms, candidate login success rate remains > 99.5% because the DB handles the fallback'). (2) Define measurable SLIs and blast radius boundaries (run in staging or against 2% of production canary traffic). (3) Implement an automated emergency abort switch that terminates the experiment if error thresholds breach safety limits. (4) Inject the fault (e.g. using Chaos Mesh or AWS Fault Injection Simulator). (5) Compare observed behavior against the hypothesis and document remediations.",
              },
              {
                id: "qa-15",
                q: "15. How do you conduct a blameless postmortem that produces measurable improvements?",
                a: "A blameless postmortem assumes that engineers made the best decisions possible given the information they had: (1) Establish an objective chronological incident timeline. (2) Quantify customer impact and consumed error budget. (3) Identify systemic contributing factors (missing circuit breakers, unclear alerts, ambiguous documentation) rather than human error. (4) Create prioritized Action Items (P0/P1) with designated engineering owners and strict 30-day deadlines. (5) Track post-incident SLI metrics to verify the corrective actions permanently eliminated the recurrence risk.",
              },
            ].map((qa) => {
              const isOpen = expandedQA[qa.id];
              return (
                <div key={qa.id} className="rounded-xl border border-stone-200 bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleQA(qa.id)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 hover:bg-stone-50 transition cursor-pointer"
                  >
                    <span className="font-bold text-stone-900 text-xs sm:text-sm">{qa.q}</span>
                    <span className="text-stone-400 font-mono text-xs">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 border-t border-stone-100 bg-stone-50/50 text-xs text-stone-700 leading-relaxed">
                      {qa.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: 5 HANDS-ON ASSIGNMENTS                                      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "assignments" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-orange-600">Assignment 1 &bull; SLO Design</span>
                <span className="text-xs font-mono font-bold text-stone-500">2–3 hours</span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm">Define Reliability Objectives for PrepSpaces</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Establish SLIs and SLOs for candidate login, interview response saving, and completed report rendering.
              </p>
              <div className="p-3 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs space-y-1.5">
                <strong className="text-stone-900 block text-[11px]">Required Deliverables:</strong>
                <ul className="list-disc pl-4 space-y-1 text-stone-600 text-[11px]">
                  <li>Mathematical SLI formulas based on good requests / total valid requests.</li>
                  <li>30-day rolling SLO targets and associated error budget allowances.</li>
                  <li>Error budget policy document specifying engineering response to budget burn.</li>
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-blue-600">Assignment 2 &bull; Observability</span>
                <span className="text-xs font-mono font-bold text-stone-500">3–4 hours</span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm">Investigate a Slow API with OpenTelemetry</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Trace an interview endpoint experiencing p95 latency of 2.5s where external AI calls average 1.8s.
              </p>
              <div className="p-3 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs space-y-1.5">
                <strong className="text-stone-900 block text-[11px]">Required Deliverables:</strong>
                <ul className="list-disc pl-4 space-y-1 text-stone-600 text-[11px]">
                  <li>OpenTelemetry trace waterfall schema mapping client, gateway, and backend spans.</li>
                  <li>Grafana 4-tier dashboard specification monitoring the Four Golden Signals.</li>
                  <li>Latency breakdown report showing percentage of time spent in external LLM calls.</li>
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-600">Assignment 3 &bull; Resilience</span>
                <span className="text-xs font-mono font-bold text-stone-500">3–4 hours</span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm">Circuit Breaker &amp; Backoff Implementation</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Implement a resilient HTTP client wrapper with timeouts, exponential backoff, full jitter, and a 3-state circuit breaker.
              </p>
              <div className="p-3 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs space-y-1.5">
                <strong className="text-stone-900 block text-[11px]">Required Deliverables:</strong>
                <ul className="list-disc pl-4 space-y-1 text-stone-600 text-[11px]">
                  <li>Resilient client source code in Node.js / Python / Go.</li>
                  <li>Unit test suite simulating 504 timeouts, tripping circuit to OPEN, and verifying fallback.</li>
                  <li>Canary probe test verifying transition from HALF-OPEN back to CLOSED.</li>
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-purple-600">Assignment 4 &bull; Degradation</span>
                <span className="text-xs font-mono font-bold text-stone-500">3–4 hours</span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm">Graceful Degradation Architecture</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Design the fallback user experience for PrepSpaces when the AI evaluation service is completely unreachable.
              </p>
              <div className="p-3 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs space-y-1.5">
                <strong className="text-stone-900 block text-[11px]">Required Deliverables:</strong>
                <ul className="list-disc pl-4 space-y-1 text-stone-600 text-[11px]">
                  <li>Feature matrix detailing normal vs degraded behavior for candidate &amp; recruiter workflows.</li>
                  <li>Asynchronous queueing pipeline for delayed background evaluations.</li>
                  <li>Frontend UI state mockups showing &quot;Evaluations queued / Results pending&quot; messaging.</li>
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs md:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-stone-600">Assignment 5 &bull; Incident Management</span>
                <span className="text-xs font-mono font-bold text-stone-500">4–5 hours</span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm">Production Incident Blameless Postmortem</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Write a complete production postmortem for an incident where aggressive client retries exhausted database connection pools during a flash traffic surge.
              </p>
              <div className="p-3 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs space-y-1.5">
                <strong className="text-stone-900 block text-[11px]">Required Deliverables:</strong>
                <ul className="list-disc pl-4 space-y-1 text-stone-600 text-[11px]">
                  <li>Minute-by-minute incident timeline detailing detection, triage, and mitigation.</li>
                  <li>Root cause analysis explaining why connection pools lacked bulkheads and rate limits.</li>
                  <li>Prioritized P0/P1 corrective action tracker with designated owners and 30-day deadlines.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: KNOWLEDGE CHECK (QUIZ)                                      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "assessment" && (
          <div className="max-w-3xl mx-auto rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                  Self-Assessment Assessment
                </span>
                <h3 className="font-extrabold text-stone-900 text-lg">
                  Module 17 Knowledge Check
                </h3>
              </div>
              {quizSubmitted && (
                <div className="text-right">
                  <span className="text-xs font-mono font-bold block text-stone-500">Score</span>
                  <span
                    className={`text-xl font-extrabold font-mono ${
                      calculateScore() >= 5 ? "text-emerald-600" : "text-orange-600"
                    }`}
                  >
                    {calculateScore()} / {quizQuestions.length}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q) => {
                const selectedOpt = selectedAnswers[q.id];
                const isAnswered = selectedOpt !== undefined;

                return (
                  <div key={q.id} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3">
                    <h4 className="font-bold text-stone-900 text-xs sm:text-sm">{q.question}</h4>
                    <div className="space-y-2">
                      {q.options.map((opt, idx) => {
                        let btnStyle = "border-stone-200 bg-white text-stone-800 hover:bg-stone-50";

                        if (quizSubmitted) {
                          if (idx === q.correctIndex) {
                            btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                          } else if (selectedOpt === idx) {
                            btnStyle = "border-red-400 bg-red-50 text-red-950 line-through";
                          } else {
                            btnStyle = "border-stone-200 bg-white text-stone-400 opacity-60";
                          }
                        } else if (selectedOpt === idx) {
                          btnStyle = "border-orange-500 bg-orange-50 text-orange-950 font-bold ring-1 ring-orange-500";
                        }

                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSelectOption(q.id, idx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition flex items-center justify-between cursor-pointer ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && idx === q.correctIndex && (
                              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                            )}
                            {quizSubmitted && selectedOpt === idx && idx !== q.correctIndex && (
                              <XCircle size={15} className="text-red-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="p-3 rounded-lg bg-stone-100 border border-stone-200 text-xs text-stone-700 leading-relaxed">
                        <strong className="block text-stone-900 mb-0.5">Explanation:</strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between">
              {!quizSubmitted ? (
                <button
                  type="button"
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                  className="w-full py-3 rounded-xl bg-[#f97316] text-white text-xs font-bold hover:bg-[#ea580c] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-xs"
                >
                  Submit &amp; Check Answers
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setQuizSubmitted(false);
                    setSelectedAnswers({});
                  }}
                  className="w-full py-3 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <RotateCcw size={14} />
                  <span>Retake Quiz</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: RECOMMENDED TECHNICAL READING                               */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "reading" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  id: "1",
                  title: "Google — Site Reliability Engineering",
                  source: "O'Reilly / Google SRE Book",
                  focus:
                    "Foundational textbook covering SLIs, SLOs, error budgets, monitoring distributed systems, incident management, and postmortem culture.",
                  url: "https://sre.google/sre-book/table-of-contents/",
                },
                {
                  id: "2",
                  title: "OpenTelemetry — Observability Standard",
                  source: "Cloud Native Computing Foundation (CNCF)",
                  focus:
                    "Official documentation on instrumenting applications to generate and export correlated metrics, structured logs, and distributed traces.",
                  url: "https://opentelemetry.io/docs/",
                },
                {
                  id: "3",
                  title: "Microsoft — Cloud Reliability Patterns",
                  source: "Azure Architecture Center",
                  focus:
                    "Architectural guide on implementing Circuit Breakers, Bulkheads, Retry with Backoff, Rate Limiting, and Throttling patterns.",
                  url: "https://learn.microsoft.com/en-us/azure/architecture/framework/resiliency/reliability-patterns",
                },
                {
                  id: "4",
                  title: "AWS — Well-Architected Reliability Pillar",
                  source: "AWS Whitepapers",
                  focus:
                    "Core architectural guide on failure management, automated recovery, workload monitoring, and fault-isolated boundaries.",
                  url: "https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability.html",
                },
              ].map((paper) => (
                <a
                  key={paper.id}
                  href={paper.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-2xl border border-stone-200 bg-white hover:border-orange-400 hover:shadow-xs transition group flex flex-col justify-between"
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
                    <span>Read Guide</span>
                    <ExternalLink size={13} />
                  </div>
                </a>
              ))}
            </div>

            {/* What Comes Next Banner */}
            <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50/70 p-5 flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
                  Masterclass Milestone &bull; Module 17 Complete
                </span>
                <span className="text-sm font-bold text-stone-900 block mt-0.5">
                  Reliability Engineering, Observability, Resilience &amp; Graceful Degradation
                </span>
                <span className="text-xs text-stone-600 block mt-0.5">
                  You now know how to build observable, fault-tolerant distributed systems using SLIs/SLOs, error budgets, OpenTelemetry distributed tracing, circuit breakers, bulkheads, rate limiting, and blameless postmortems.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigate("/learning/system-design/multi-region")}
                  className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Module 16 (Multi-Region &amp; DR)</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/learning/system-design/security")}
                  className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                >
                  <span>Advance to Module 18 (Security &amp; Multi-Tenancy)</span>
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
