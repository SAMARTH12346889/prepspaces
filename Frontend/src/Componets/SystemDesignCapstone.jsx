import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Award,
  Layers,
  Activity,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Shield,
  FileText,
  BookOpen,
  HelpCircle,
  RotateCcw,
  SlidersHorizontal,
  Workflow,
  TrendingUp,
  HardDrive,
  Clock,
  ChevronDown,
  ChevronUp,
  Cpu,
  Flame,
  Zap,
  Server,
  Database,
  Calendar,
  Sparkles,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  VerticalSliceLifecycleDiagram,
  LoadBenchmarkSimulatorDiagram,
  ChaosExperimentSimulatorDiagram,
  default as VisualDiagramComponentModule24,
} from "./SystemDesignCapstoneDiagrams";

export default function SystemDesignCapstone() {
  const navigate = useNavigate();

  // Navigation tab state: "curriculum" | "simulators" | "qa" | "plan" | "assessment" | "reading"
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeLesson, setActiveLesson] = useState("24.1");

  // Expanded Q&A accordion state for 8 Core Defense Questions
  const [expandedQA, setExpandedQA] = useState({
    "qa-1": true,
    "qa-2": true,
  });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // ASSESSMENT QUIZ STATE (8 QUESTIONS VERBATIM FROM USER PROMPT)
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "1. What is the primary purpose of a vertical slice?",
      options: [
        "Implement every feature before testing anything",
        "Demonstrate one complete workflow through the frontend, backend, data, and dependencies",
        "Create an architecture diagram without code",
        "Benchmark only the database",
      ],
      correctIndex: 1,
      explanation:
        "A vertical slice validates the entire end-to-end integration across frontend, API gateway, persistence, and external dependencies with real transactions before adding feature breadth.",
    },
    {
      id: "q2",
      question: "2. Why should an accepted interview answer be persisted before relying on AI evaluation completion?",
      options: [
        "AI inference is always instantaneous",
        "It avoids all database transactions",
        "It protects user work when inference fails or times out",
        "It makes authorization unnecessary",
      ],
      correctIndex: 2,
      explanation:
        "External AI models are slow and prone to network timeouts or rate limits. Persisting the answer durably first ensures candidate work is never lost, allowing asynchronous or retried evaluation.",
    },
    {
      id: "q3",
      question: "3. What does p95 latency tell you?",
      options: [
        "The average amount of stored data",
        "The time within which approximately 95% of measured requests complete or fall below, according to the metric definition",
        "The maximum possible server latency",
        "The number of failed database writes",
      ],
      correctIndex: 1,
      explanation:
        "Percentile latency (p95) measures tail performance: 95% of requests experience latency at or below this threshold, highlighting tail spikes that arithmetic averages completely conceal.",
    },
    {
      id: "q4",
      question: "4. When should a breakpoint test be run?",
      options: [
        "Against any production endpoint without permission",
        "Before the test script has been validated",
        "In a controlled environment with stop conditions to identify capacity limits",
        "Only after disabling monitoring",
      ],
      correctIndex: 2,
      explanation:
        "Breakpoint testing increases load in controlled stages within an isolated test environment with predefined stop conditions to discover the exact saturation point of the first failing component.",
    },
    {
      id: "q5",
      question: "5. A worker crashes after saving a report but before sending a notification. What is a suitable design?",
      options: [
        "Delete the report because the notification failed",
        "Use recoverable event processing and idempotent notification handling",
        "Make the report depend on an active browser connection",
        "Retry every request indefinitely",
      ],
      correctIndex: 1,
      explanation:
        "Decoupled event processing (via an Outbox pattern or message broker visibility timeout) allows another worker to retry notification dispatch idempotently without corrupting the completed report.",
    },
    {
      id: "q6",
      question: "6. What should happen when a user requests another tenant's report by changing its ID?",
      options: [
        "Return it if the ID is valid",
        "Check only whether the user is logged in",
        "Rely on the frontend to hide the report link",
        "Enforce resource and tenant authorization on the backend",
      ],
      correctIndex: 3,
      explanation:
        "Never trust client-supplied IDs. The backend must enforce server-side ownership and organization tenant boundaries, returning HTTP 403 Forbidden on cross-tenant ID tampering (BOLA/IDOR prevention).",
    },
    {
      id: "q7",
      question: "7. How do you demonstrate that an optimization improved performance?",
      options: [
        "Compare reproducible benchmark results under the same defined workload",
        "Assume it is faster because it uses a cache",
        "Count the number of services added",
        "Rely on a single successful request",
      ],
      correctIndex: 0,
      explanation:
        "Performance optimization claims must be supported by empirical evidence: running the exact same benchmark workload before and after the change and comparing p95/p99 latency, error rate, and throughput.",
    },
    {
      id: "q8",
      question: "8. What is a central goal of a technical defense?",
      options: [
        "Claim the system has no limitations",
        "Use the largest possible technology stack",
        "Explain and defend choices using requirements, trade-offs, and evidence",
        "Avoid discussing failed experiments",
      ],
      correctIndex: 2,
      explanation:
        "An architectural defense demonstrates engineering maturity: justifying decisions with explicit requirements, empirical benchmark data, reasoned trade-offs, and an honest discussion of known limitations.",
    },
  ];

  const handleSelectAnswer = (questionId, optionIndex) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleScoreQuiz = () => {
    setQuizSubmitted(true);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  const score = Object.entries(selectedAnswers).reduce((acc, [qId, ansIdx]) => {
    const q = quizQuestions.find((item) => item.id === qId);
    return q && q.correctIndex === ansIdx ? acc + 1 : acc;
  }, 0);

  // ---------------------------------------------------------------------------
  // 8 ARCHITECTURAL DEFENSE QUESTIONS & COMPREHENSIVE MODEL ANSWERS
  // ---------------------------------------------------------------------------
  const defenseQuestions = [
    {
      id: "qa-1",
      topic: "System Architecture",
      q: "Why did you start with a modular monolith? What would justify extracting the AI worker or retrieval service into independent microservices?",
      a: "Starting with a modular monolith minimizes network overhead, eliminates distributed transaction complexities (2PC), enables simple in-process function calls, and drastically simplifies local developer ergonomics and CI/CD pipelines. We established strict logical boundaries (API Gateway -> Interview Module -> AI Orchestrator -> Data Layer) with explicit interfaces. We will extract the AI worker into an independent microservice only when one of four measurable triggers is reached: (1) Independent Scaling Asymmetry: AI inference demands dedicated GPU instances (e.g. AWS g5.2xlarge) with different autoscaling policies than CPU-bound HTTP web pods; (2) Failure Isolation: AI memory exhaustion or CUDA driver crashes must not take down the candidate dashboard; (3) Deployment Cadence: AI model revisions require canary rollouts independent of core business code; (4) Runtime Specialization: The inference engine requires a Python/vLLM stack while the core API runs on Node.js/TypeScript.",
    },
    {
      id: "qa-2",
      topic: "Data Consistency & Durability",
      q: "Which data must be strongly consistent? Which derived data can tolerate lag? How do you protect accepted interview responses?",
      a: "Candidate answers, interview session state, and user authorization must be Strongly Consistent. When a candidate submits an answer, the API commits it to PostgreSQL in an ACID transaction with a unique constraint on (session_id, submission_id) before any AI call is initiated. This guarantees that even if the AI provider times out or crashes, the candidate's work is never lost. Conversely, derived data—such as candidate aggregate performance analytics, daily leaderboard scores, and asynchronous email notification receipts—are Eventual Consistent. These are emitted as outbox events and processed asynchronously by background workers, tolerating a lag of 2 to 30 seconds without impacting the interactive interview experience.",
    },
    {
      id: "qa-3",
      topic: "Scalability & Bottleneck Analysis",
      q: "What was the first measured bottleneck during load testing? What architectural change would be required if traffic increases tenfold?",
      a: "Under our k6 load benchmark, the first measured bottleneck was PostgreSQL Connection Pool Contention at 125 concurrent virtual users, where p95 API latency spiked from 95ms to 420ms due to database connection queuing. We resolved this by introducing PgBouncer for transaction-level connection pooling and offloading read-only catalog queries to Redis. If traffic increases tenfold (from 200 to 2,000 concurrent sessions, producing 80,000 input tokens/sec and 16,670 output tokens/sec), the database is no longer the bottleneck—the AI inference cluster becomes the primary bottleneck. We would need to: (1) Deploy continuous batching with vLLM PagedAttention across an auto-scaling cluster of 24x A100 GPUs; (2) Enforce tiered model routing (using 3B models for intent classification and reserving 70B models for final grading); and (3) Apply priority admission queues that defer non-critical evaluations during peak traffic.",
    },
    {
      id: "qa-4",
      topic: "Reliability & Fault Recovery",
      q: "What happens if the model provider accepts a request but the response drops? Can background work resume safely after a worker crash?",
      a: "If the AI provider accepts the request but the network response drops, the interview record remains safely in 'EVALUATING' state with an active timeout timer (30 seconds). The worker does not re-submit blindly (which could cause double billing or conflicting evaluations). Instead, the worker retries using the deterministic idempotency key. In our chaos experiment where the worker process was killed midway through report generation, SQS/RabbitMQ message visibility timeout expired after 60 seconds. A secondary worker re-consumed the job. Because the notification dispatch checks an idempotent event record in PostgreSQL, the report was re-assembled without emitting duplicate emails to the candidate.",
    },
    {
      id: "qa-5",
      topic: "Security & Multi-Tenant Boundaries",
      q: "How do you enforce ownership and tenant boundaries? What prevents a user from viewing another candidate's report by altering the URL ID?",
      a: "We enforce Server-Side Ownership and Tenant Scoping on every single data query. Never trust client-supplied IDs. When a user requests GET /api/v1/interviews/{id}/report, the authentication middleware extracts the cryptographically verified JWT payload containing user_id and tenant_id. The repository query enforces: SELECT * FROM interviews WHERE id = $id AND (user_id = $userId OR (tenant_id = $tenantId AND role IN ('RECRUITER', 'ADMIN'))). If an attacker alters the ID to point to another candidate's report, the query returns zero rows, resulting in an HTTP 403 Forbidden. We verified this via OWASP ASVS automated negative tests, proving that cross-tenant URL tampering is blocked 100% of the time.",
    },
    {
      id: "qa-6",
      topic: "AI Quality & Hallucination Defense",
      q: "How do you evaluate model output correctness? How do you detect ungrounded answers and prevent prompt injection from candidate text?",
      a: "We decouple AI generation from authoritative state using a three-layer defense: (1) Output Schema Validation: The AI model must output JSON conforming to a strict Zod schema (score, feedback_points, rubric_breakdown). If the response is malformed or hallucinates unauthorized fields, it is rejected and retried up to 2 times before falling back to a human-review queue. (2) Prompt Injection Sanitization: Candidate text is strictly delimited within XML tags (<candidate_answer>...</candidate_answer>) with explicit system instructions that candidate input must never be interpreted as system commands or access control modifications. (3) Groundedness Checking: In RAG scenarios (e.g. system design evaluation), model citations are checked against retrieved document chunk IDs before saving the report.",
    },
    {
      id: "qa-7",
      topic: "Infrastructure Cost Modeling",
      q: "What is the measured infrastructure cost per completed interview? Which optimization reduced costs without degrading quality?",
      a: "Under our baseline architecture, each completed 15-minute mock interview executes approximately 30 AI calls (1,200 input tokens, 250 output tokens each). Total tokens per interview = 36,000 input tokens + 7,500 output tokens. Using unoptimized commercial LLM APIs, cost was approximately $0.18 per interview. We achieved a 65% cost reduction (down to $0.063 per completed interview) by implementing two optimizations: (1) Two-Tier Model Routing: Prompt classification, question selection, and grammar checks are routed to a fine-tuned 3B model ($0.0001/req), reserving the expensive reasoning model strictly for the final multi-dimensional feedback report; (2) Prefix Caching: Prompt templates and static coding rubrics share identical KV cache prefixes across sessions, cutting input prompt billing by 45%.",
    },
    {
      id: "qa-8",
      topic: "Architectural Trade-offs & Limitations",
      q: "What did you deliberately leave out of this vertical slice? What requirement would force a fundamental redesign of your architecture?",
      a: "We deliberately omitted: (1) Peer-to-peer real-time video/audio streaming (WebRTC mesh), choosing text/audio-transcription interfaces to focus on distributed data integrity, AI scheduling, and tenant isolation; (2) Multi-region active-active database replication, selecting single-region multi-AZ deployment to avoid distributed multi-master conflict resolution. The single requirement that would force a fundamental redesign is Sub-200ms Interactive Voice Conversations: streaming full-duplex voice would require replacing HTTP/REST polling with bidirectional WebSocket connection pools terminated at specialized edge gateways, coupled with speculative token streaming and local audio synthesis models running on edge inferencing nodes.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900">
      <ModuleNav track="system-design" currentModuleId="capstone" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        {/* =====================================================================
            MODULE HERO / HEADER
            ===================================================================== */}
        <div className="mb-8 border-b border-stone-200 pb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-orange-600">
            <span>System Design Masterclass</span>
            <span>•</span>
            <span>Final Capstone Project</span>
            <span>•</span>
            <span>Weeks 51–56</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Module 24: Final Capstone — Design, Implement, Benchmark, Break, and Defend a Complete System Architecture
          </h1>
          <p className="mt-3 text-base text-stone-700 max-w-4xl leading-relaxed">
            The ultimate milestone of the System Design Masterclass. Bring together every architectural discipline
            from all 24 modules into a complete, production-ready engineering lifecycle for PrepSpaces: Design with
            explicit assumptions, Implement a vertical slice, Benchmark with k6, Break with chaos drills, and Defend
            every trade-off with empirical evidence.
          </p>

          {/* 6-Phase Lifecycle Bar */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs font-bold">
            <div className="p-3 rounded-xl bg-white border border-stone-200">
              <span className="text-orange-600">01. DESIGN</span>
              <div className="text-[10px] text-stone-700 font-normal mt-0.5">Requirements &amp; Math</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200">
              <span className="text-blue-600">02. IMPLEMENT</span>
              <div className="text-[10px] text-stone-700 font-normal mt-0.5">Vertical Slice</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200">
              <span className="text-emerald-600">03. BENCHMARK</span>
              <div className="text-[10px] text-stone-700 font-normal mt-0.5">k6 SLO Budgets</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200">
              <span className="text-rose-600">04. BREAK</span>
              <div className="text-[10px] text-stone-700 font-normal mt-0.5">Chaos Drills</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200">
              <span className="text-purple-600">05. IMPROVE</span>
              <div className="text-[10px] text-stone-700 font-normal mt-0.5">Tune Bottlenecks</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200">
              <span className="text-amber-600">06. DEFEND</span>
              <div className="text-[10px] text-stone-700 font-normal mt-0.5">Technical Defense</div>
            </div>
          </div>

          {/* Main Navigation Tabs */}
          <div className="mt-6 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-1">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "curriculum"
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Curriculum (The 6-Phase Lifecycle)
            </button>
            <button
              onClick={() => setActiveTab("simulators")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "simulators"
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              Interactive Simulators &amp; Chaos Lab
            </button>
            <button
              onClick={() => setActiveTab("qa")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "qa"
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Technical Defense Q&amp;A (8 Areas)
            </button>
            <button
              onClick={() => setActiveTab("plan")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "plan"
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              6-Week Plan &amp; 100-Pt Rubric
            </button>
            <button
              onClick={() => setActiveTab("assessment")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "assessment"
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Final Knowledge Check (8)
            </button>
            <button
              onClick={() => setActiveTab("reading")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "reading"
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Recommended Technical Reading
            </button>
          </div>
        </div>

        {/* =====================================================================
            TAB 1: CURRICULUM (THE 6-PHASE LIFECYCLE)
            ===================================================================== */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveLesson("24.1")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeLesson === "24.1"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                24.1 Capstone Overview &amp; Lifecycle
              </button>
              <button
                onClick={() => setActiveLesson("24.2")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeLesson === "24.2"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                24.2 Workload Assumptions &amp; Budgets
              </button>
              <button
                onClick={() => setActiveLesson("24.3")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeLesson === "24.3"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Server className="w-3.5 h-3.5" />
                24.3 Modular Monolith &amp; 5 ADRs
              </button>
              <button
                onClick={() => setActiveLesson("24.4")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeLesson === "24.4"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Workflow className="w-3.5 h-3.5" />
                24.4 The Vertical Slice Implementation
              </button>
              <button
                onClick={() => setActiveLesson("24.5")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeLesson === "24.5"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                24.5 k6 Benchmarks &amp; Chaos Drills
              </button>
              <button
                onClick={() => setActiveLesson("24.6")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeLesson === "24.6"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                24.6 Security, Invariants &amp; Defense
              </button>
            </div>

            {/* LESSON 24.1: OVERVIEW */}
            {activeLesson === "24.1" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 mb-2">
                    <Award className="w-3.5 h-3.5 text-orange-600" />
                    Masterclass Milestone
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    The Complete Engineering Lifecycle of PrepSpaces
                  </h2>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                    This capstone moves beyond whiteboard diagrams into true production engineering.
                    You will treat PrepSpaces as an enterprise SaaS platform serving candidates, recruiters, and colleges.
                    Every architectural claim must be supported by an explicit requirement, a reasoned trade-off, or an empirical benchmark.
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Target Scale</div>
                      <div className="text-xl font-bold text-stone-900 mt-1">10,000 DAU</div>
                      <div className="text-xs text-stone-700 mt-1">200 concurrent active sessions</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Inference Demand</div>
                      <div className="text-xl font-bold text-orange-600 mt-1">8,000 t/s In · 1,667 t/s Out</div>
                      <div className="text-xs text-stone-700 mt-1">Managed via model adapter &amp; queue</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">SLO Budget</div>
                      <div className="text-xl font-bold text-emerald-600 mt-1">p95 &lt; 300 ms</div>
                      <div className="text-xs text-stone-700 mt-1">99.5% availability, zero lost answers</div>
                    </div>
                  </div>
                </div>

                <VerticalSliceLifecycleDiagram />
              </div>
            )}

            {/* LESSON 24.2: WORKLOAD & BUDGETS */}
            {activeLesson === "24.2" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">Explicit Workload Modeling &amp; Sizing Math</h3>
                  <div className="mt-3 text-sm text-stone-700 leading-relaxed space-y-3">
                    <p>
                      At 200 concurrent interview sessions with an average of 2 AI interactions per minute per session:
                    </p>
                    <div className="p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs">
                      RPS_AI = (200 sessions × 2 calls) / 60 seconds ≈ 6.67 AI requests / sec<br />
                      Input Token Throughput = 6.67 RPS × 1,200 input tokens ≈ 8,000 tokens / sec<br />
                      Output Token Demand = 6.67 RPS × 250 output tokens ≈ 1,667 tokens / sec<br />
                      Concurrency in Flight (Little&apos;s Law, 4.0s generation) = 6.67 × 4.0 ≈ 27 in-flight requests
                    </div>
                    <p>
                      <strong>Performance Budgets (SLOs):</strong>
                      <br />• Core REST Endpoints: <strong>p95 response latency &lt; 300 ms</strong>
                      <br />• API Reliability: <strong>&gt;= 99.5% eligible requests successful</strong>
                      <br />• Data Integrity: <strong>Zero duplicate accepted submissions</strong> under retries
                    </p>
                  </div>
                </div>

                <LoadBenchmarkSimulatorDiagram />
              </div>
            )}

            {/* LESSON 24.3: MODULAR MONOLITH & ADRs */}
            {activeLesson === "24.3" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">5 Major Architecture Decision Records (ADRs)</h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900">ADR-001: Modular Monolith vs Microservices</div>
                      <p className="text-stone-700 mt-1 leading-relaxed">
                        <strong>Decision:</strong> Single deployable Node.js backend with strict module boundaries.
                        <br /><strong>Rationale:</strong> Avoids premature network serialization and 2PC distributed transactions while keeping code organized for future extraction.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900">ADR-002: Authoritative Relational Store</div>
                      <p className="text-stone-700 mt-1 leading-relaxed">
                        <strong>Decision:</strong> PostgreSQL as the primary authoritative store for sessions, answers, and reports.
                        <br /><strong>Rationale:</strong> Relational ACID constraints prevent duplicate submissions and guarantee atomic session state transitions.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900">ADR-003: Provider-Neutral AI Adapter</div>
                      <p className="text-stone-700 mt-1 leading-relaxed">
                        <strong>Decision:</strong> Encapsulate Groq/Gemini/local vLLM behind an abstract interface.
                        <br /><strong>Rationale:</strong> Eliminates vendor lock-in, enabling automated fallbacks and canary rollouts without altering core application logic.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900">ADR-004: Store-First Answer Persistence</div>
                      <p className="text-stone-700 mt-1 leading-relaxed">
                        <strong>Decision:</strong> Commit candidate answers to disk BEFORE calling external AI inference.
                        <br /><strong>Rationale:</strong> External API timeouts must never cause candidate work to be lost. Evaluation can be retried asynchronously.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 md:col-span-2">
                      <div className="font-bold text-stone-900">ADR-005: Server-Side Multi-Tenant Isolation</div>
                      <p className="text-stone-700 mt-1 leading-relaxed">
                        <strong>Decision:</strong> Enforce tenant_id filtering in middleware and data repositories.
                        <br /><strong>Rationale:</strong> Frontend hiding is not security. Server-side validation completely eliminates IDOR and BOLA vulnerabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LESSON 24.4: VERTICAL SLICE */}
            {activeLesson === "24.4" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">The 5-Step Critical Request Path</h3>
                  <div className="mt-3 text-xs text-stone-700 space-y-2">
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <strong>1. Session Creation:</strong> Client issues <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">POST /api/v1/interviews</code>. Backend validates auth JWT and inserts session row in state <code className="font-mono text-emerald-700">CREATED</code>.
                    </div>
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <strong>2. Answer Submission:</strong> Client sends answer with UUID <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">submission_id</code>. Middleware confirms candidate ownership.
                    </div>
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <strong>3. Durable Write:</strong> Answer is inserted into PostgreSQL. Session status updates to <code className="font-mono text-blue-700">SUBMITTED</code>.
                    </div>
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <strong>4. AI Evaluation:</strong> Adapter calls model with bounded 10s timeout. Status transitions to <code className="font-mono text-purple-700">EVALUATING</code> then <code className="font-mono text-emerald-700">COMPLETED</code> (or <code className="font-mono text-rose-700">EVALUATION_FAILED</code>).
                    </div>
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <strong>5. Report Delivery:</strong> Report is saved, and outbox event is queued. Client fetches verified report via <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">GET /api/v1/interviews/:id/report</code>.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LESSON 24.5: BENCHMARKS & CHAOS */}
            {activeLesson === "24.5" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">Breaking the System: Controlled Chaos Drills</h3>
                  <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                    Reliability is demonstrated by injecting real faults and observing whether data invariants hold true.
                  </p>
                </div>

                <ChaosExperimentSimulatorDiagram />
              </div>
            )}

            {/* LESSON 24.6: SECURITY & INVARIANTS */}
            {activeLesson === "24.6" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">Non-Negotiable Data Invariants</h3>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="font-bold text-stone-900">Invariant 1: Zero Lost Answers</div>
                      <p className="text-stone-700 mt-0.5">Every accepted answer has a committed database record before downstream processing.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="font-bold text-stone-900">Invariant 2: Exactly-Once Submission</div>
                      <p className="text-stone-700 mt-0.5">Retried submissions with identical submission_id do not create duplicate entries.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="font-bold text-stone-900">Invariant 3: Hard Tenant Isolation</div>
                      <p className="text-stone-700 mt-0.5">No user can read another organization&apos;s data by manipulating resource IDs.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="font-bold text-stone-900">Invariant 4: Decoupled Failure Scope</div>
                      <p className="text-stone-700 mt-0.5">An external AI provider outage must never prevent dashboard loading or report retrieval.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =====================================================================
            TAB 2: SIMULATORS & CHAOS LAB
            ===================================================================== */}
        {activeTab === "simulators" && (
          <div className="space-y-8">
            <VerticalSliceLifecycleDiagram />
            <LoadBenchmarkSimulatorDiagram />
            <ChaosExperimentSimulatorDiagram />
          </div>
        )}

        {/* =====================================================================
            TAB 3: TECHNICAL DEFENSE Q&A (8 CORE AREAS)
            ===================================================================== */}
        {activeTab === "qa" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-orange-600" />
                Architectural Defense Panel
              </div>
              <h3 className="text-xl font-bold text-stone-900">
                8 Core System Design Defense Prompts &amp; Model Answers
              </h3>
              <p className="mt-1 text-xs text-stone-700 leading-relaxed">
                Be prepared to defend your choices under rigorous technical questioning by Staff and Principal Engineers.
              </p>
            </div>

            <div className="space-y-3">
              {defenseQuestions.map((item, idx) => {
                const isExpanded = expandedQA[item.id];
                return (
                  <div key={item.id} className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs transition-all">
                    <button
                      onClick={() => toggleQA(item.id)}
                      className="w-full text-left flex items-start justify-between gap-4"
                    >
                      <div>
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-1.5 bg-stone-100 text-stone-700">
                          {item.topic}
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
                          {idx + 1}. {item.q}
                        </h4>
                      </div>
                      <div className="p-1 rounded-lg bg-stone-100 text-stone-600 shrink-0 mt-1">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-stone-100 text-xs sm:text-sm text-stone-700 leading-relaxed">
                        <div className="p-4 rounded-xl bg-[#faf8f4] border border-stone-200">
                          <p className="whitespace-pre-line">{item.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 4: 6-WEEK PLAN & 100-PT RUBRIC
            ===================================================================== */}
        {activeTab === "plan" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-2">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                Capstone Milestones
              </div>
              <h3 className="text-xl font-bold text-stone-900">
                6-Week Implementation &amp; Defense Schedule (Weeks 51–56)
              </h3>
              <p className="mt-1 text-xs text-stone-700 leading-relaxed">
                Structured schedule guiding the final project from architecture proposal to live defense.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <div className="text-xs font-bold text-orange-600 uppercase">Week 51: Design &amp; Planning</div>
                <div className="text-sm font-bold text-stone-900 mt-1">Requirements, Workload Math &amp; ADRs</div>
                <p className="text-xs text-stone-700 mt-1">Deliverable: Architecture proposal and acceptance criteria.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <div className="text-xs font-bold text-blue-600 uppercase">Week 52: Working Vertical Slice</div>
                <div className="text-sm font-bold text-stone-900 mt-1">Core Interview Flow &amp; Persistence</div>
                <p className="text-xs text-stone-700 mt-1">Deliverable: Reproducible app with automated core-flow tests.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <div className="text-xs font-bold text-purple-600 uppercase">Week 53: AI &amp; Async Workers</div>
                <div className="text-sm font-bold text-stone-900 mt-1">Model Adapter &amp; Outbox Pipeline</div>
                <p className="text-xs text-stone-700 mt-1">Deliverable: End-to-end AI workflow with failure handling.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <div className="text-xs font-bold text-amber-600 uppercase">Week 54: Security &amp; Observability</div>
                <div className="text-sm font-bold text-stone-900 mt-1">Tenant Isolation &amp; OpenTelemetry</div>
                <p className="text-xs text-stone-700 mt-1">Deliverable: Security test results &amp; operational dashboard.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <div className="text-xs font-bold text-rose-600 uppercase">Week 55: Benchmark &amp; Break</div>
                <div className="text-sm font-bold text-stone-900 mt-1">k6 Load Tests &amp; Chaos Drills</div>
                <p className="text-xs text-stone-700 mt-1">Deliverable: Benchmark report and before-after evidence.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <div className="text-xs font-bold text-emerald-600 uppercase">Week 56: Final Defense</div>
                <div className="text-sm font-bold text-stone-900 mt-1">Live Demonstration &amp; Rubric Review</div>
                <p className="text-xs text-stone-700 mt-1">Deliverable: Complete capstone submission &amp; defense presentation.</p>
              </div>
            </div>

            {/* 100-Point Grading Rubric */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <h4 className="text-base font-bold text-stone-900 mb-3">100-Point Technical Assessment Rubric</h4>
              <div className="overflow-x-auto text-xs">
                <table className="w-full text-left border border-stone-200 rounded-lg overflow-hidden">
                  <thead className="bg-stone-100 text-stone-900 uppercase font-bold text-[11px]">
                    <tr>
                      <th className="p-2.5 border-b">Category</th>
                      <th className="p-2.5 border-b">Weight</th>
                      <th className="p-2.5 border-b">Required Evidence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr>
                      <td className="p-2.5 font-bold">Requirements &amp; Architecture</td>
                      <td className="p-2.5 font-mono text-orange-600 font-bold">15 Pts</td>
                      <td className="p-2.5">Clear scope, workload math, component diagrams, and 5 ADRs</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Implementation Quality</td>
                      <td className="p-2.5 font-mono text-blue-600 font-bold">20 Pts</td>
                      <td className="p-2.5">Working vertical slice, validation, state machine, clean repository</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Data Integrity &amp; Reliability</td>
                      <td className="p-2.5 font-mono text-emerald-600 font-bold">15 Pts</td>
                      <td className="p-2.5">Idempotency keys, retry handling, crash recovery, and invariants</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Performance &amp; Scalability</td>
                      <td className="p-2.5 font-mono text-purple-600 font-bold">15 Pts</td>
                      <td className="p-2.5">k6 benchmarks, p95/p99 latency, bottleneck investigation &amp; retest</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Security &amp; Privacy</td>
                      <td className="p-2.5 font-mono text-rose-600 font-bold">15 Pts</td>
                      <td className="p-2.5">OWASP ASVS tests, hard tenant isolation, secrets protection</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Observability &amp; Operations</td>
                      <td className="p-2.5 font-mono text-amber-600 font-bold">10 Pts</td>
                      <td className="p-2.5">Dashboards, distributed traces, alerts, deployment runbook</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Technical Defense</td>
                      <td className="p-2.5 font-mono text-stone-900 font-bold">10 Pts</td>
                      <td className="p-2.5">Evidence-based trade-offs, limitations, and defense questioning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 5: KNOWLEDGE CHECK (8 QUESTIONS)
            ===================================================================== */}
        {activeTab === "assessment" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                Final Course Assessment
              </div>
              <h3 className="text-xl font-bold text-stone-900">
                Final Knowledge Check (8 Questions)
              </h3>
              <p className="mt-1 text-xs text-stone-700">
                Verify your mastery of production system design engineering, benchmarking, chaos drills, and defense.
              </p>

              {quizSubmitted && (
                <div
                  className={`mt-4 p-4 rounded-xl border flex items-center justify-between ${
                    score >= 6
                      ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                      : "bg-amber-50 border-amber-300 text-amber-900"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {score >= 6 ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                    )}
                    <div>
                      <div className="font-bold text-sm">
                        Score: {score} / {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
                      </div>
                      <div className="text-xs mt-0.5">
                        {score >= 6
                          ? "Congratulations! You have completed the System Design Masterclass with distinction."
                          : "Review the question explanations below to polish your architectural defense."}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleResetQuiz}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-stone-300 text-stone-700 hover:bg-stone-50"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset Quiz
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {quizQuestions.map((q) => {
                const selected = selectedAnswers[q.id];
                const isAnswered = selected !== undefined;
                const isCorrect = isAnswered && selected === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-6 rounded-2xl bg-white border shadow-xs transition-all ${
                      quizSubmitted
                        ? isCorrect
                          ? "border-emerald-300 bg-emerald-50/20"
                          : "border-rose-300 bg-rose-50/20"
                        : "border-stone-200"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
                        {q.question}
                      </h4>
                      {quizSubmitted && (
                        <div className="shrink-0">
                          {isCorrect ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              Correct
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800">
                              <XCircle className="w-3.5 h-3.5 text-rose-600" />
                              Incorrect
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 space-y-2">
                      {q.options.map((option, optIdx) => {
                        const isThisSelected = selected === optIdx;
                        let optionStyle = "border-stone-200 hover:bg-stone-50 text-stone-700";

                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            optionStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold";
                          } else if (isThisSelected && !isCorrect) {
                            optionStyle = "border-rose-500 bg-rose-50 text-rose-900";
                          } else {
                            optionStyle = "border-stone-200 text-stone-700 opacity-60";
                          }
                        } else if (isThisSelected) {
                          optionStyle = "border-orange-600 bg-orange-50 text-orange-900 font-semibold";
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectAnswer(q.id, optIdx)}
                            disabled={quizSubmitted}
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between transition-all ${optionStyle}`}
                          >
                            <span>{option}</span>
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                                isThisSelected
                                  ? "border-orange-600 bg-orange-600 text-white"
                                  : "border-stone-300"
                              }`}
                            >
                              {isThisSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                        <strong className="text-stone-900">Explanation: </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!quizSubmitted && (
              <div className="flex justify-end">
                <button
                  onClick={handleScoreQuiz}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-orange-600 text-white hover:bg-orange-700 transition-colors shadow-sm"
                >
                  Submit Assessment
                </button>
              </div>
            )}
          </div>
        )}

        {/* =====================================================================
            TAB 6: RECOMMENDED TECHNICAL READING
            ===================================================================== */}
        {activeTab === "reading" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-2">
                <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                Industry Standards &amp; Manuals
              </div>
              <h3 className="text-xl font-bold text-stone-900">
                Recommended Technical Reading &amp; Capstone Engineering Handbooks
              </h3>
              <p className="mt-1 text-xs text-stone-700 leading-relaxed">
                Foundational references covering performance testing, observability, security verification, site reliability engineering, and continuous integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 mb-2">
                    <Activity className="w-3 h-3 text-blue-600" />
                    Grafana k6
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    Load Testing &amp; Performance Thresholds
                  </h4>
                  <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                    Learn how to model API workloads, define performance budgets, test breakpoint limits, and execute automated CI/CD performance gates.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap gap-2">
                  <a
                    href="https://grafana.com/docs/k6/latest/testing-guides/api-load-testing/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    API Load Testing Guide <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://grafana.com/docs/k6/latest/using-k6/thresholds/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 text-stone-800 hover:bg-stone-200 transition-colors"
                  >
                    Thresholds Manual <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 mb-2">
                    <Workflow className="w-3 h-3 text-purple-600" />
                    OpenTelemetry
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    Distributed Observability &amp; Tracing
                  </h4>
                  <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                    Learn how to instrument services, collect traces across asynchronous message queues, and export metrics without vendor lock-in.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <a
                    href="https://opentelemetry.io/docs/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    OpenTelemetry Documentation <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 mb-2">
                    <Shield className="w-3 h-3 text-rose-600" />
                    OWASP Foundation
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    Application Security Verification Standard (ASVS)
                  </h4>
                  <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                    Use structured security levels to verify authentication, tenant access control, input validation, and API defenses against IDOR and BOLA.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <a
                    href="https://owasp.org/www-project-application-security-verification-standard/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    Explore OWASP ASVS <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Google SRE
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    Site Reliability Engineering Workbook
                  </h4>
                  <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                    Master SLO-based decision making, canary deployment safety, automated incident response, and error budget policies.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <a
                    href="https://sre.google/workbook/table-of-contents/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    Read Google SRE Workbook <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            GRAND MASTERCLASS COMPLETION BANNER
            ===================================================================== */}
        <div className="mt-12 p-8 rounded-3xl bg-linear-to-r from-orange-500/10 via-amber-500/10 to-emerald-500/10 border-2 border-orange-500/30 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-600 text-white mb-3 shadow-xs">
                <Award className="w-4 h-4" />
                SYSTEM DESIGN MASTERCLASS · ALL 24 MODULES COMPLETE
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                You Have Completed the Complete System Design Masterclass
              </h3>
              <p className="text-sm text-stone-700 mt-2 max-w-2xl leading-relaxed">
                From networking foundations and database sharding to real-time WebSockets, multi-region failover,
                AI inference serving, and the final production capstone defense—you possess the full engineering
                discipline to architect, benchmark, break, and defend high-scale distributed systems.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate("/learning/system-design/advanced-case-studies")}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors shadow-xs"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Previous: Module 23
              </button>
              <button
                onClick={() => navigate("/learning")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-md active:scale-95"
              >
                <span>Return to Learning Hub</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
