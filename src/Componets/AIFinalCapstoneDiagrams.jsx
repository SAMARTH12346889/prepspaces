import React, { useState } from "react";
import {
  Layers,
  Activity,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  Sparkles,
  Mic,
  ArrowRight,
  Calculator
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* SIMULATOR 1: High-Level Architecture Explorer                              */
/* -------------------------------------------------------------------------- */
export function CapstoneArchitectureExplorer() {
  const [selectedTier, setSelectedTier] = useState("gateway");

  const architectureTiers = {
    client: {
      title: "1. Client & Audio Presentation Layer",
      tech: "React 19, Vite, Tailwind CSS, Web Audio API, MediaRecorder",
      protocol: "HTTPS / WSS / Server-Sent Events (SSE)",
      role: "Manages authenticated user sessions, captures 16kHz microphone audio, runs client-side Silero VAD, renders streaming markdown tokens, and enforces conversational barge-in cancellation.",
      failureMode: "Network drop -> Client caches transcript locally in IndexedDB and initiates reconnection handshake with session hydration.",
      slo: "p95 interaction render latency < 16ms (60 FPS smooth UI)"
    },
    edge: {
      title: "2. Edge & Security Boundary Tier",
      tech: "Cloudflare Pages, Cloudflare Workers, SSL/TLS 1.3",
      protocol: "HTTPS (HTTP/2 & HTTP/3)",
      role: "Global Anycast edge routing, DDoS mitigation, SSL termination, static asset distribution with zero-cache bundle versioning, and initial IP-based rate limiting.",
      failureMode: "Edge POP failure -> Automatic Anycast failover to nearest available regional data center (<50ms).",
      slo: "p95 edge connection latency < 35ms"
    },
    gateway: {
      title: "3. API Gateway & Business Service Tier",
      tech: "Node.js (Express/Hono) or Python FastAPI",
      protocol: "RESTful JSON / SSE Streams",
      role: "Handles JWT authentication, resume multi-part uploads with MIME sniffing, session lifecycle orchestration, rate limiting, and 7-state finite state machine enforcement.",
      failureMode: "Instance crash -> Stateless containers autoscale horizontally on Kubernetes behind round-robin load balancer.",
      slo: "p95 non-AI transactional latency < 500ms"
    },
    orchestrator: {
      title: "4. AI Orchestration & Model Gateway",
      tech: "Python 3.11, FastAPI, Pydantic v2, PyTorch",
      protocol: "Internal gRPC / Async HTTP",
      role: "Abstract LLMProvider interface with circuit breaker cascades (vLLM -> Anthropic -> OpenAI). Injects RAG context, enforces strict Pydantic schemas, and deterministically computes rubric sums.",
      failureMode: "Upstream 503 outage -> Circuit breaker trips to OPEN; saves uncommitted answer as PENDING_EVALUATION in PostgreSQL.",
      slo: "Time-To-First-Token (TTFT) < 1.2s; total evaluation p95 < 9.5s"
    },
    rag: {
      title: "5. Hybrid RAG & Vector Knowledge Engine",
      tech: "PostgreSQL pgvector, BGE-Base-EN, BM25, Reciprocal Rank Fusion",
      protocol: "PostgreSQL Native Wire Protocol (Port 5432)",
      role: "Indexes technical concepts across 768-dim embeddings and lexical keywords. Merges dense cosine similarity and sparse term rankings using RRF (k=60) with cross-encoder re-ranking.",
      failureMode: "Vector query timeout -> Falls back to sparse BM25 keyword matching with cached concept summaries.",
      slo: "p95 hybrid retrieval latency < 85ms"
    },
    storage: {
      title: "6. Polyglot Persistence & Object Store",
      tech: "PostgreSQL 16, Redis 7 Alpine, Cloudflare R2 / AWS S3",
      protocol: "TCP 5432 (SQL), TCP 6379 (Redis), S3 API",
      role: "ACID transactions for user records and answers; Redis for sliding-window rate limits and distributed session locks; S3/R2 for encrypted candidate resume PDFs and audio WAVs.",
      failureMode: "Postgres primary failure -> Automated replica promotion with RPO < 15 minutes and RTO < 2 hours.",
      slo: "Postgres transaction p95 < 15ms; Redis lock acquire < 2ms"
    },
    observability: {
      title: "7. Production Observability & AI Telemetry",
      tech: "OpenTelemetry Collector, Prometheus, Grafana, Jaeger",
      protocol: "OTLP over gRPC (Port 4317)",
      role: "Captures distributed trace spans across API, RAG, and LLM inferences. Tracks token usage, dollar cost per interview, schema failure rate, and candidate scoring distributions.",
      failureMode: "Telemetry pipeline drop -> Buffer drops metric points to prevent backpressure on user-facing transactions.",
      slo: "Telemetry ingestion overhead < 3ms per request"
    }
  };

  const current = architectureTiers[selectedTier];

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-6 backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers className="h-5 w-5 text-indigo-400" />
            Interactive C4 High-Level Architecture Explorer
          </h3>
          <p className="text-xs text-stone-400">
            Click any architecture layer to inspect its component stack, data protocols, failure modes, and SLOs.
          </p>
        </div>
        <span className="rounded-full bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 text-xs font-semibold text-indigo-400">
          7 Decoupled Tiers
        </span>
      </div>

      {/* Tier Selector Buttons */}
      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
        {Object.entries(architectureTiers).map(([key, item]) => {
          const isActive = selectedTier === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedTier(key)}
              className={`rounded-xl border p-2.5 text-left transition-all ${
                isActive
                  ? "border-indigo-500 bg-indigo-500/20 text-white shadow-md shadow-indigo-950/40"
                  : "border-stone-800 bg-stone-950/60 text-stone-400 hover:border-stone-700 hover:text-stone-200"
              }`}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider">{key}</div>
              <div className="text-xs font-semibold truncate text-stone-200">{item.title.split(" ")[1]}</div>
            </button>
          );
        })}
      </div>

      {/* Detailed Tier Display Card */}
      <div className="mt-6 rounded-xl border border-stone-800 bg-stone-950/80 p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-base font-bold text-white">{current.title}</h4>
          <span className="rounded-md bg-stone-800 px-2 py-0.5 text-xs font-mono text-emerald-400">
            {current.protocol}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <div>
              <div className="text-xs font-medium text-stone-400">Technologies & Frameworks:</div>
              <div className="mt-1 text-xs font-mono text-indigo-300 bg-stone-900 p-2 rounded-lg border border-stone-800">
                {current.tech}
              </div>
            </div>
            <div>
              <div className="text-xs font-medium text-stone-400">Core Engineering Responsibilities:</div>
              <p className="mt-1 text-xs leading-relaxed text-stone-300">{current.role}</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <div className="text-xs font-medium text-amber-400 flex items-center gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5" />
                Failure Mode & Resilience Policy:
              </div>
              <p className="mt-1 text-xs leading-relaxed text-stone-300 bg-amber-500/5 p-2 rounded-lg border border-amber-500/20">
                {current.failureMode}
              </p>
            </div>
            <div>
              <div className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Service Level Objective (SLO):
              </div>
              <div className="mt-1 text-xs font-semibold text-emerald-300 bg-emerald-500/5 p-2 rounded-lg border border-emerald-500/20">
                {current.slo}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SIMULATOR 2: Finite State Machine & Session Orchestrator                   */
/* -------------------------------------------------------------------------- */
export function InterviewStateMachineSimulator() {
  const [currentState, setCurrentState] = useState("CREATED");
  const [questionCount, setQuestionCount] = useState(0);
  const [maxQuestions] = useState(3);
  const [logs, setLogs] = useState([
    "00:00:00 - Session initialized. State: CREATED (Idempotency Key: IDEM-4892A)"
  ]);
  const [simulatedError, setSimulatedError] = useState(null);

  const addLog = (msg) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [`${timestamp} - ${msg}`, ...prev.slice(0, 7)]);
  };

  const handleStartInterview = () => {
    if (currentState !== "CREATED") return;
    setCurrentState("ACTIVE");
    addLog("State -> ACTIVE. Candidate entered room. Starting session timer.");
  };

  const handleRequestQuestion = () => {
    if (currentState !== "ACTIVE" && currentState !== "QUESTION_PENDING") return;
    const nextQ = questionCount + 1;
    setQuestionCount(nextQ);
    setCurrentState("AWAITING_ANSWER");
    addLog(`State -> AWAITING_ANSWER. RAG retrieved Question #${nextQ}. Microphone listening.`);
  };

  const handleSubmitAnswer = (inject503 = false) => {
    if (currentState !== "AWAITING_ANSWER") return;
    setCurrentState("EVALUATING");
    addLog("State -> EVALUATING. Candidate mic muted. Answer persisted to PostgreSQL.");

    if (inject503) {
      setTimeout(() => {
        setSimulatedError("LLM Provider 503 Service Unavailable");
        addLog("CRASH ALERT: Model provider 503! Answer preserved as PENDING_EVALUATION.");
      }, 700);
      return;
    }

    setSimulatedError(null);
    setTimeout(() => {
      addLog("Pydantic Schema Passed: Rubric score deterministically computed (Score: 8.75/10).");
      if (questionCount >= maxQuestions) {
        setCurrentState("COMPLETED");
        addLog("State -> COMPLETED. Max questions reached. Triggering report generator.");
      } else {
        setCurrentState("QUESTION_PENDING");
        addLog("State -> QUESTION_PENDING. Ready for next question.");
      }
    }, 900);
  };

  const handleRetryFailedEvaluation = () => {
    setSimulatedError(null);
    addLog("Recovery Worker: Background task retried PENDING_EVALUATION via Secondary Provider.");
    setTimeout(() => {
      addLog("Secondary Provider Succeeded (Score: 8.5/10). Zero candidate answer loss.");
      if (questionCount >= maxQuestions) {
        setCurrentState("COMPLETED");
      } else {
        setCurrentState("QUESTION_PENDING");
      }
    }, 600);
  };

  const handleGenerateReport = () => {
    if (currentState !== "COMPLETED") return;
    setCurrentState("REPORT_READY");
    addLog("State -> REPORT_READY. Final performance scorecard and learning path generated.");
  };

  const handleReset = () => {
    setCurrentState("CREATED");
    setQuestionCount(0);
    setSimulatedError(null);
    setLogs(["00:00:00 - Session reset. State: CREATED"]);
  };

  const statesList = [
    "CREATED",
    "ACTIVE",
    "QUESTION_PENDING",
    "AWAITING_ANSWER",
    "EVALUATING",
    "COMPLETED",
    "REPORT_READY"
  ];

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-6 backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-emerald-400" />
            Server-Authoritative 7-State FSM & Failure Recovery Simulator
          </h3>
          <p className="text-xs text-stone-400">
            Simulate normal interview progressions, upstream LLM 503 outages, and idempotent background recoveries.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 rounded-lg border border-stone-700 bg-stone-800 px-3 py-1.5 text-xs font-semibold text-stone-300 hover:bg-stone-700"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset Simulator
        </button>
      </div>

      {/* Visual State Pipeline */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-2 overflow-x-auto rounded-xl border border-stone-800 bg-stone-950/70 p-3">
        {statesList.map((state, idx) => {
          const isCurrent = currentState === state;
          const isPast = statesList.indexOf(currentState) > idx;
          return (
            <React.Fragment key={state}>
              <div
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all ${
                  isCurrent
                    ? "bg-emerald-500 text-stone-950 ring-2 ring-emerald-400 shadow-md shadow-emerald-950/50"
                    : isPast
                    ? "bg-stone-800 text-stone-300"
                    : "bg-stone-900/60 text-stone-600"
                }`}
              >
                {isPast ? <CheckCircle2 className="h-3 w-3" /> : <div className="h-2 w-2 rounded-full bg-current" />}
                {state}
              </div>
              {idx < statesList.length - 1 && (
                <ArrowRight className="h-3 w-3 text-stone-700 hidden sm:block" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Interactive Controls Grid */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <button
          disabled={currentState !== "CREATED"}
          onClick={handleStartInterview}
          className="rounded-xl border border-stone-700 bg-stone-800/80 p-3 text-left transition-all hover:border-emerald-500 disabled:opacity-30"
        >
          <div className="text-xs font-bold text-white">1. Start Interview</div>
          <div className="text-[11px] text-stone-400">CREATED &rarr; ACTIVE</div>
        </button>

        <button
          disabled={currentState !== "ACTIVE" && currentState !== "QUESTION_PENDING"}
          onClick={handleRequestQuestion}
          className="rounded-xl border border-stone-700 bg-stone-800/80 p-3 text-left transition-all hover:border-indigo-500 disabled:opacity-30"
        >
          <div className="text-xs font-bold text-white">2. Fetch Question ({questionCount}/{maxQuestions})</div>
          <div className="text-[11px] text-stone-400">&rarr; AWAITING_ANSWER</div>
        </button>

        <button
          disabled={currentState !== "AWAITING_ANSWER"}
          onClick={() => handleSubmitAnswer(false)}
          className="rounded-xl border border-stone-700 bg-stone-800/80 p-3 text-left transition-all hover:border-emerald-500 disabled:opacity-30"
        >
          <div className="text-xs font-bold text-white">3. Submit Valid Answer</div>
          <div className="text-[11px] text-stone-400">&rarr; EVALUATING (Normal)</div>
        </button>

        <button
          disabled={currentState !== "AWAITING_ANSWER"}
          onClick={() => handleSubmitAnswer(true)}
          className="rounded-xl border border-rose-800/80 bg-rose-950/30 p-3 text-left transition-all hover:border-rose-500 disabled:opacity-30"
        >
          <div className="text-xs font-bold text-rose-300">4. Inject 503 Provider Crash</div>
          <div className="text-[11px] text-rose-400/80">Simulate LLM Timeout</div>
        </button>
      </div>

      {/* Secondary Controls: Error Recovery & Final Report */}
      <div className="mt-3 flex flex-wrap gap-3">
        {simulatedError && (
          <button
            onClick={handleRetryFailedEvaluation}
            className="flex items-center gap-1.5 rounded-lg border border-amber-500/50 bg-amber-500/20 px-4 py-2 text-xs font-bold text-amber-300 hover:bg-amber-500/30"
          >
            <Play className="h-3.5 w-3.5" />
            Execute Background Worker Retry (Secondary Provider)
          </button>
        )}

        <button
          disabled={currentState !== "COMPLETED"}
          onClick={handleGenerateReport}
          className="flex items-center gap-1.5 rounded-lg border border-indigo-500/50 bg-indigo-500/20 px-4 py-2 text-xs font-bold text-indigo-300 hover:bg-indigo-500/30 disabled:opacity-30"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Compile Final Report & Skill Gap Roadmap
        </button>
      </div>

      {/* Real-time State Log Console */}
      <div className="mt-5 rounded-xl border border-stone-800 bg-stone-950 p-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-[11px] text-stone-500">
          <span>SERVER TRANSACTION & AUDIT LOG</span>
          <span className="text-emerald-400">STATUS: {currentState}</span>
        </div>
        <div className="mt-2 space-y-1 text-stone-300 max-h-36 overflow-y-auto">
          {logs.map((log, i) => (
            <div key={i} className={log.includes("CRASH") ? "text-rose-400 font-bold" : ""}>
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SIMULATOR 3: Golden Dataset Benchmark & Release Gate                       */
/* -------------------------------------------------------------------------- */
export function GoldenDatasetEvaluatorTool() {
  const [testCasesCount, setTestCasesCount] = useState(200);
  const [selectedConfig, setSelectedConfig] = useState("improved_rag");

  const modelConfigs = {
    base_llm: {
      name: "1. Base Model (Zero-Shot)",
      model: "Meta-Llama-3-70B-Instruct",
      accuracy: 78.5,
      schemaValidity: 84.0,
      rubricAgreement: 72.0,
      p95Latency: 8.8,
      tokenCostPerInterview: 0.18,
      status: "REJECTED (Fails Gate)"
    },
    improved_rag: {
      name: "2. Hybrid RAG (BGE + BM25 + Pydantic)",
      model: "Meta-Llama-3-70B + pgvector",
      accuracy: 91.2,
      schemaValidity: 99.4,
      rubricAgreement: 87.5,
      p95Latency: 5.4,
      tokenCostPerInterview: 0.08,
      status: "APPROVED FOR PRODUCTION"
    },
    fine_tuned_rag: {
      name: "3. Domain LoRA Fine-Tuned + Hybrid RAG",
      model: "Custom QLoRA Adapter + pgvector",
      accuracy: 94.8,
      schemaValidity: 99.8,
      rubricAgreement: 91.2,
      p95Latency: 4.9,
      tokenCostPerInterview: 0.06,
      status: "APPROVED FOR PRODUCTION"
    }
  };

  const current = modelConfigs[selectedConfig];
  const passedSchemaGate = current.schemaValidity >= 98.0;
  const passedAgreementGate = current.rubricAgreement >= 85.0;
  const passedGate = passedSchemaGate && passedAgreementGate;

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-6 backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-indigo-400" />
            Golden Dataset Evaluation & CI/CD Release Gate
          </h3>
          <p className="text-xs text-stone-400">
            Compare model pipeline configurations against a curated 200-question technical benchmark.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-400">Test Cases:</span>
          <select
            value={testCasesCount}
            onChange={(e) => setTestCasesCount(Number(e.target.value))}
            className="rounded-lg border border-stone-700 bg-stone-800 px-2.5 py-1 text-xs text-white"
          >
            <option value={50}>50 Quick Benchmark</option>
            <option value={100}>100 Standard Suite</option>
            <option value={200}>200 Full Golden Dataset</option>
          </select>
        </div>
      </div>

      {/* Configuration Radio Selector */}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {Object.entries(modelConfigs).map(([key, config]) => {
          const isSelected = selectedConfig === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedConfig(key)}
              className={`rounded-xl border p-4 text-left transition-all ${
                isSelected
                  ? "border-indigo-500 bg-indigo-500/20 text-white shadow-md shadow-indigo-950/40"
                  : "border-stone-800 bg-stone-950/60 text-stone-400 hover:border-stone-700 hover:text-stone-200"
              }`}
            >
              <div className="text-xs font-bold text-white">{config.name}</div>
              <div className="mt-1 text-[11px] font-mono text-indigo-300">{config.model}</div>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span>Rubric Agree:</span>
                <span className="font-bold text-emerald-400">{config.rubricAgreement}%</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Benchmark Metric Cards */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
        <div className="rounded-xl border border-stone-800 bg-stone-950 p-3">
          <div className="text-[11px] text-stone-500">Technical Accuracy</div>
          <div className="mt-1 text-xl font-bold text-white">{current.accuracy}%</div>
          <div className="text-[10px] text-stone-400">Target: &ge; 90%</div>
        </div>

        <div className="rounded-xl border border-stone-800 bg-stone-950 p-3">
          <div className="text-[11px] text-stone-500">JSON Schema Validity</div>
          <div className={`mt-1 text-xl font-bold ${passedSchemaGate ? "text-emerald-400" : "text-rose-400"}`}>
            {current.schemaValidity}%
          </div>
          <div className="text-[10px] text-stone-400">Gate: &ge; 98.0%</div>
        </div>

        <div className="rounded-xl border border-stone-800 bg-stone-950 p-3">
          <div className="text-[11px] text-stone-500">Rubric Agreement</div>
          <div className={`mt-1 text-xl font-bold ${passedAgreementGate ? "text-emerald-400" : "text-rose-400"}`}>
            {current.rubricAgreement}%
          </div>
          <div className="text-[10px] text-stone-400">Gate: &ge; 85.0%</div>
        </div>

        <div className="rounded-xl border border-stone-800 bg-stone-950 p-3">
          <div className="text-[11px] text-stone-500">p95 Latency</div>
          <div className="mt-1 text-xl font-bold text-sky-400">{current.p95Latency}s</div>
          <div className="text-[10px] text-stone-400">Target: &lt; 10.0s</div>
        </div>

        <div className="rounded-xl border border-stone-800 bg-stone-950 p-3">
          <div className="text-[11px] text-stone-500">Cost / Interview</div>
          <div className="mt-1 text-xl font-bold text-amber-400">${current.tokenCostPerInterview}</div>
          <div className="text-[10px] text-stone-400">10k DAU: ${(current.tokenCostPerInterview * 10000).toLocaleString()}/day</div>
        </div>
      </div>

      {/* CI/CD Gate Verification Banner */}
      <div className={`mt-5 rounded-xl border p-4 flex flex-wrap items-center justify-between gap-3 ${
        passedGate
          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
          : "border-rose-500/40 bg-rose-500/10 text-rose-300"
      }`}>
        <div className="flex items-center gap-2">
          {passedGate ? <CheckCircle2 className="h-5 w-5 text-emerald-400" /> : <AlertTriangle className="h-5 w-5 text-rose-400" />}
          <div>
            <div className="text-sm font-bold">
              CI/CD Production Gate: {passedGate ? "PASSED (Promote to Production)" : "BLOCKED (Regression Detected)"}
            </div>
            <div className="text-xs opacity-80">
              Evaluated on {testCasesCount} benchmark cases. Requires &ge;98% schema validity and &ge;85% rubric correlation.
            </div>
          </div>
        </div>
        <span className="rounded-lg bg-stone-900/80 px-3 py-1 font-mono text-xs font-bold border border-stone-700">
          {current.status}
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SIMULATOR 4: 100-Mark Capstone Evaluation Rubric Calculator                */
/* -------------------------------------------------------------------------- */
export function CapstoneRubricEvaluationCalculator() {
  const [scores, setScores] = useState({
    problem_arch: 10,
    backend_frontend: 14,
    ai_rag: 19,
    data_engineering: 10,
    testing_eval: 14,
    security_reliability: 9,
    deployment_monitoring: 9,
    docs_portfolio: 10
  });

  const categories = [
    { key: "problem_arch", label: "Problem Definition & Architecture", max: 10, desc: "PRD, user personas, C4 diagrams, and formal ADRs" },
    { key: "backend_frontend", label: "Backend & Frontend Implementation", max: 15, desc: "Working React UI, Node/FastAPI APIs, and 7-state machine" },
    { key: "ai_rag", label: "AI & Hybrid RAG Implementation", max: 20, desc: "Model gateway, BGE+BM25 RRF, and Pydantic rubric validator" },
    { key: "data_engineering", label: "Data Engineering & Schema Design", max: 10, desc: "Normalized PostgreSQL, pgvector HNSW, S3/R2 keys" },
    { key: "testing_eval", label: "Testing & AI Evaluation", max: 15, desc: "Unit, Playwright E2E, and 200-question golden dataset" },
    { key: "security_reliability", label: "Security & Reliability", max: 10, desc: "OWASP GenAI Top 10, circuit breakers, and RLS policies" },
    { key: "deployment_monitoring", label: "Deployment & Monitoring", max: 10, desc: "Multi-stage Docker, CI/CD, and OpenTelemetry instrumentation" },
    { key: "docs_portfolio", label: "Documentation & Portfolio", max: 10, desc: "Comprehensive README, demo video, and technical viva defense" }
  ];

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  const getGrade = (score) => {
    if (score >= 90) return { label: "Exceptional (A+)", color: "text-emerald-400", desc: "Production-grade platform with measurable validation" };
    if (score >= 80) return { label: "Excellent (A)", color: "text-indigo-400", desc: "Complete capstone with clean architecture" };
    if (score >= 70) return { label: "Good (B)", color: "text-sky-400", desc: "Functional system with minor testing gaps" };
    if (score >= 60) return { label: "Satisfactory (C)", color: "text-amber-400", desc: "Basic requirements satisfied" };
    return { label: "Needs Improvement (F)", color: "text-rose-400", desc: "Significant architecture or testing deficiencies" };
  };

  const grade = getGrade(totalScore);

  const updateScore = (key, val) => {
    setScores((prev) => ({ ...prev, [key]: Number(val) }));
  };

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-6 backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Calculator className="h-5 w-5 text-amber-400" />
            100-Mark Capstone Evaluation Rubric & Defense Calculator
          </h3>
          <p className="text-xs text-stone-400">
            Interactive academic and industry assessment rubric matching the official university capstone syllabus.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-stone-500">Overall Score</div>
            <div className="text-2xl font-extrabold text-white">{totalScore} / 100</div>
          </div>
          <div className="rounded-xl border border-stone-700 bg-stone-800 px-3 py-1.5 text-center">
            <div className="text-[10px] text-stone-400">Grade Tier</div>
            <div className={`text-xs font-bold ${grade.color}`}>{grade.label}</div>
          </div>
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {categories.map((cat) => (
          <div key={cat.key} className="rounded-xl border border-stone-800 bg-stone-950/70 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">{cat.label}</span>
              <span className="font-mono text-xs font-bold text-amber-400">
                {scores[cat.key]} / {cat.max} pts
              </span>
            </div>
            <p className="mt-1 text-[11px] text-stone-400">{cat.desc}</p>
            <input
              type="range"
              min={0}
              max={cat.max}
              value={scores[cat.key]}
              onChange={(e) => updateScore(cat.key, e.target.value)}
              className="mt-3 w-full accent-amber-500"
            />
          </div>
        ))}
      </div>

      {/* Summary Interpretation Box */}
      <div className="mt-6 rounded-xl border border-stone-800 bg-stone-950 p-4">
        <div className="text-xs font-bold text-stone-300">Examiner Feedback & Readiness Verdict:</div>
        <p className="mt-1 text-xs text-stone-400 leading-relaxed">
          {grade.desc}. Total score of <strong className="text-white">{totalScore}/100</strong> qualifies this project for the{" "}
          <strong className={grade.color}>{grade.label}</strong> tier. Ensure all 16 mandatory submission artifacts are attached before technical viva defense.
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SIMULATOR 5: Conversational Voice Turn-Taking & Barge-In Timeline          */
/* -------------------------------------------------------------------------- */
export function LiveVoiceTurnTakingSimulator() {
  const [silenceThreshold, setSilenceThreshold] = useState(1500);
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStage, setCurrentStage] = useState("IDLE");
  const [bargeInOccurred, setBargeInOccurred] = useState(false);

  const runTurnTakingSimulation = () => {
    setIsSimulating(true);
    setBargeInOccurred(false);
    setCurrentStage("USER_SPEAKING");

    setTimeout(() => {
      setCurrentStage("SILENCE_ENDPOINTING");
      setTimeout(() => {
        setCurrentStage("WHISPER_STT");
        setTimeout(() => {
          setCurrentStage("LLM_TTFT");
          setTimeout(() => {
            setCurrentStage("TTS_AUDIO_STREAMING");
            setTimeout(() => {
              setCurrentStage("IDLE");
              setIsSimulating(false);
            }, 2500);
          }, 650);
        }, 400);
      }, silenceThreshold);
    }, 1800);
  };

  const triggerBargeIn = () => {
    if (currentStage === "TTS_AUDIO_STREAMING") {
      setBargeInOccurred(true);
      setCurrentStage("USER_BARGE_IN");
      setTimeout(() => {
        setCurrentStage("IDLE");
        setIsSimulating(false);
      }, 1000);
    }
  };

  const stages = [
    { id: "USER_SPEAKING", label: "1. Candidate Speaking", time: "1800ms", color: "bg-indigo-500" },
    { id: "SILENCE_ENDPOINTING", label: "2. VAD Silence Detection", time: `${silenceThreshold}ms`, color: "bg-amber-500" },
    { id: "WHISPER_STT", label: "3. Streaming Whisper STT", time: "380ms", color: "bg-sky-500" },
    { id: "LLM_TTFT", label: "4. LLM Generation (TTFT)", time: "650ms", color: "bg-violet-500" },
    { id: "TTS_AUDIO_STREAMING", label: "5. TTS Audio Playback", time: "2500ms", color: "bg-emerald-500" }
  ];

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-6 backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Mic className="h-5 w-5 text-sky-400" />
            Real-Time Conversational Turn-Taking & Barge-In Timeline
          </h3>
          <p className="text-xs text-stone-400">
            Simulate human-like conversational turn transitions from candidate speech to audio playback.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            disabled={isSimulating}
            onClick={runTurnTakingSimulation}
            className="flex items-center gap-1.5 rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:bg-sky-500 disabled:opacity-40"
          >
            <Play className="h-3.5 w-3.5" />
            Start Voice Turn Simulation
          </button>
        </div>
      </div>

      {/* Silence Threshold Slider */}
      <div className="mt-5 rounded-xl border border-stone-800 bg-stone-950 p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-stone-300">VAD Silence Endpointing Threshold:</span>
          <span className="font-mono text-xs font-bold text-sky-400">{silenceThreshold}ms</span>
        </div>
        <input
          type="range"
          min={800}
          max={2500}
          step={100}
          disabled={isSimulating}
          value={silenceThreshold}
          onChange={(e) => setSilenceThreshold(Number(e.target.value))}
          className="mt-2 w-full accent-sky-500"
        />
        <div className="mt-1 flex justify-between text-[10px] text-stone-500">
          <span>800ms (Aggressive / Cuts Off Thinking)</span>
          <span>1500ms (Optimal for Technical Interviews)</span>
          <span>2500ms (High Latency)</span>
        </div>
      </div>

      {/* Turn-Taking Visual Pipeline */}
      <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-5">
        {stages.map((stage) => {
          const isActive = currentStage === stage.id;
          return (
            <div
              key={stage.id}
              className={`rounded-xl border p-3.5 text-center transition-all ${
                isActive
                  ? `${stage.color} text-white shadow-lg ring-2 ring-white scale-105`
                  : "border-stone-800 bg-stone-950 text-stone-500"
              }`}
            >
              <div className="text-[11px] font-bold">{stage.label}</div>
              <div className="mt-1 font-mono text-[10px] opacity-80">{stage.time}</div>
            </div>
          );
        })}
      </div>

      {/* Barge-In Trigger Control */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-stone-800 bg-stone-950 p-4">
        <div>
          <div className="text-xs font-bold text-white">Conversational Barge-In Interruption:</div>
          <div className="text-[11px] text-stone-400">
            Interrupt the AI during audio playback (Stage 5) to test sub-15ms cancellation.
          </div>
        </div>
        <button
          disabled={currentStage !== "TTS_AUDIO_STREAMING"}
          onClick={triggerBargeIn}
          className="rounded-lg border border-rose-500/50 bg-rose-500/20 px-4 py-2 text-xs font-bold text-rose-300 hover:bg-rose-500/30 disabled:opacity-30"
        >
          Candidate Speaks (Trigger Barge-In)
        </button>
      </div>

      {bargeInOccurred && (
        <div className="mt-3 rounded-lg border border-rose-500/40 bg-rose-500/10 p-3 text-xs text-rose-300 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" />
          <span><strong>BARGE-IN DETECTED:</strong> Audio playback cancelled immediately (12ms). Microphone re-engaged.</span>
        </div>
      )}
    </div>
  );
}
