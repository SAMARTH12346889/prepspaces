import React, { useState, useMemo } from "react";
import {
  Brain,
  Play,
  RotateCcw,
  CheckCircle2,
  Shield,
  Layers,
  Database,
  Cpu,
  Mic,
  DollarSign
} from "lucide-react";

/**
 * 1. AI System Architecture Explorer
 * Interactive visual topology of PrepSpaces 6-layer architecture with layer inspection.
 */
export const AiSystemArchitectureExplorer = () => {
  const [selectedLayerId, setSelectedLayerId] = useState("gateway");

  const layers = [
    {
      id: "presentation",
      name: "1. Presentation Layer",
      icon: Mic,
      tech: "React 18 · Tailwind CSS · WebSockets",
      color: "border-sky-500/40 bg-sky-950/20 text-sky-300",
      details: [
        "Real-time voice stream visualizer with live waveform feedback",
        "Full-duplex WebSocket client delivering binary audio PCM chunks",
        "Server-Sent Events (SSE) listener for incremental token-by-token streaming",
        "Responsive interview dashboard with multi-metric scorecard rendering"
      ]
    },
    {
      id: "gateway",
      name: "2. API & Security Gateway",
      icon: Shield,
      tech: "Cloudflare Workers · JWT · Token Bucket Rate Limiter",
      color: "border-indigo-500/40 bg-indigo-950/20 text-indigo-300",
      details: [
        "Cryptographic JWT authentication & role-based permission verification",
        "Token bucket rate limiting preventing unbounded request flooding",
        "WAF protection mitigating direct adversarial prompt injection attempts",
        "TLS 1.3 termination with global edge caching for static assets"
      ]
    },
    {
      id: "orchestrator",
      name: "3. Application & AI Orchestrator",
      icon: Layers,
      tech: "Python FastAPI / Node.js · State Machine · Pydantic",
      color: "border-violet-500/40 bg-violet-950/20 text-violet-300",
      details: [
        "Stateful interview session state machine tracking 10 sequential turns",
        "Pre-retrieval tenant isolation filter injection before vector queries",
        "Dynamic prompt context assembly merging resume, rubric, and docs",
        "Strict Pydantic JSON output schema validation enforcing score bounds [0, 10]"
      ]
    },
    {
      id: "model_gateway",
      name: "4. AI Model Gateway & Inference",
      icon: Cpu,
      tech: "vLLM · Whisper Turbo · Llama-3.3-70B · Circuit Breaker",
      color: "border-emerald-500/40 bg-emerald-950/20 text-emerald-300",
      details: [
        "Task-based dynamic model routing (Small SLM for classification, 70B for evaluation)",
        "3-state Circuit Breaker shielding backend from upstream provider outages",
        "High-throughput continuous batching maximizing GPU tensor core utilization",
        "Low-latency streaming Text-to-Speech (TTS) synthesis engine"
      ]
    },
    {
      id: "polyglot_data",
      name: "5. Polyglot Storage Tier",
      icon: Database,
      tech: "PostgreSQL 16 · pgvector · Cloudflare R2 · Redis 7",
      color: "border-amber-500/40 bg-amber-950/20 text-amber-300",
      details: [
        "PostgreSQL: Transactional interview sessions, rubrics, scores, and users",
        "pgvector / Qdrant: Dense + Sparse hybrid retrieval index for Java 21 documentation",
        "Cloudflare R2 / S3: Encrypted private object storage for PDF resumes and audio",
        "Redis: Sub-millisecond session state cache, distributed locks, and idempotency keys"
      ]
    },
    {
      id: "queues_workers",
      name: "6. Asynchronous Queue Workers",
      icon: Brain,
      tech: "RabbitMQ / Redis Queue · Celery · Background OCR",
      color: "border-rose-500/40 bg-rose-950/20 text-rose-300",
      details: [
        "Decoupled background worker fleet for 20-page resume PDF parsing and OCR",
        "Offline document ingestion, chunking, and vector embedding pipelines",
        "Asynchronous multi-page PDF scorecard synthesis and email dispatch",
        "Automated continuous evaluation worker running LLM-as-a-Judge audits"
      ]
    }
  ];

  const activeLayer = layers.find((l) => l.id === selectedLayerId) || layers[1];

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 backdrop-blur-sm">
      <div className="flex flex-col justify-between gap-3 border-b border-stone-800 pb-4 md:flex-row md:items-center">
        <div>
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            System Topology
          </span>
          <h3 className="mt-2 text-xl font-bold text-stone-100">
            PrepSpaces Enterprise 6-Layer Architecture Explorer
          </h3>
          <p className="mt-1 text-sm text-stone-400">
            Click any architectural layer to inspect its internal micro-services, data contracts, and protocols.
          </p>
        </div>
      </div>

      {/* Layer Navigation Buttons */}
      <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {layers.map((l) => {
          const Icon = l.icon;
          const isSelected = selectedLayerId === l.id;
          return (
            <button
              key={l.id}
              onClick={() => setSelectedLayerId(l.id)}
              className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all ${
                isSelected
                  ? `${l.color} shadow-lg shadow-indigo-950/50 scale-[1.02]`
                  : "border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-700 hover:text-stone-200"
              }`}
            >
              <Icon className="h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-stone-200">{l.name}</div>
                <div className="mt-0.5 text-[10px] text-stone-500 font-mono line-clamp-1">
                  {l.tech}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Layer Detail Card */}
      <div className="mt-6 rounded-xl border border-stone-800 bg-stone-950 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-white">{activeLayer.name}</span>
            <span className="rounded-full bg-stone-800 px-2.5 py-0.5 text-xs font-mono text-stone-300">
              {activeLayer.tech}
            </span>
          </div>
          <span className="text-xs text-stone-500 font-mono">Layer ID: {activeLayer.id}</span>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {activeLayer.details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-2.5 rounded-lg border border-stone-800/60 bg-stone-900/40 p-3 text-xs text-stone-300">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * 2. RAG vs Fine-Tuning Architectural Decision Matrix
 * Interactive calculator computing fit scores for RAG, Fine-Tuning, or Hybrid.
 */
export const RagVsFineTuningDecisionMatrixTool = () => {
  const [knowledgeVolatility, setKnowledgeVolatility] = useState(8); // 1 = Static, 10 = Real-time
  const [sourceCitationsNeeded, setSourceCitationsNeeded] = useState(9); // 1 = None, 10 = Strict
  const [behavioralFormatRigidity, setBehavioralFormatRigidity] = useState(8); // 1 = Standard, 10 = Custom persona/JSON
  const [trainingDataVolume, setTrainingDataVolume] = useState(7); // 1 = Zero pairs, 10 = Tens of thousands
  const [budgetTolerance, setBudgetTolerance] = useState(6); // 1 = Minimal/Serverless, 10 = Dedicated GPU cluster

  // Compute recommendation scores
  const { ragScore, ftScore, hybridScore, recommendation } = useMemo(() => {
    // RAG favors volatility and citations
    const rag = Math.round((knowledgeVolatility * 4 + sourceCitationsNeeded * 5 + (11 - budgetTolerance)) / 10 * 10);
    // FT favors behavioral rigidity and training data availability
    const ft = Math.round((behavioralFormatRigidity * 5 + trainingDataVolume * 4 + budgetTolerance * 2) / 11 * 10);
    // Hybrid is optimal when both knowledge grounding and behavioral formatting are high
    const hybrid = Math.round((rag * 0.55 + ft * 0.55));

    let rec = "Hybrid Architecture (RAG + Fine-Tuned Model)";
    let badge = "HYBRID_OPTIMAL";
    if (rag > ft + 15) {
      rec = "Pure Retrieval-Augmented Generation (RAG)";
      badge = "RAG_OPTIMAL";
    } else if (ft > rag + 15) {
      rec = "Domain Fine-Tuning (LoRA / SFT)";
      badge = "FT_OPTIMAL";
    }

    return {
      ragScore: Math.min(100, Math.max(10, rag)),
      ftScore: Math.min(100, Math.max(10, ft)),
      hybridScore: Math.min(100, Math.max(10, hybrid)),
      recommendation: rec,
      badge
    };
  }, [knowledgeVolatility, sourceCitationsNeeded, behavioralFormatRigidity, trainingDataVolume, budgetTolerance]);

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 backdrop-blur-sm">
      <div className="flex flex-col justify-between gap-3 border-b border-stone-800 pb-4 md:flex-row md:items-center">
        <div>
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-400">
            Decision Framework
          </span>
          <h3 className="mt-2 text-xl font-bold text-stone-100">
            RAG vs. Fine-Tuning Architectural Matrix
          </h3>
          <p className="mt-1 text-sm text-stone-400">
            Input your application requirements to evaluate suitability across RAG, Fine-Tuning, and Hybrid topologies.
          </p>
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Knowledge Change Frequency:</span>
            <span className="font-mono text-violet-400 font-bold">{knowledgeVolatility}/10</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={knowledgeVolatility}
            onChange={(e) => setKnowledgeVolatility(Number(e.target.value))}
            className="mt-2 w-full accent-violet-500"
          />
          <div className="text-[10px] text-stone-500 mt-1">1 = Static docs | 10 = Daily updates</div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Source Grounding & Citations:</span>
            <span className="font-mono text-violet-400 font-bold">{sourceCitationsNeeded}/10</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={sourceCitationsNeeded}
            onChange={(e) => setSourceCitationsNeeded(Number(e.target.value))}
            className="mt-2 w-full accent-violet-500"
          />
          <div className="text-[10px] text-stone-500 mt-1">1 = General prose | 10 = Strict legal/audit citations</div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Behavioral Persona & Format Rigidity:</span>
            <span className="font-mono text-violet-400 font-bold">{behavioralFormatRigidity}/10</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={behavioralFormatRigidity}
            onChange={(e) => setBehavioralFormatRigidity(Number(e.target.value))}
            className="mt-2 w-full accent-violet-500"
          />
          <div className="text-[10px] text-stone-500 mt-1">1 = Free-form chat | 10 = Strict JSON rubric scoring</div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Curated Training Data Available:</span>
            <span className="font-mono text-violet-400 font-bold">{trainingDataVolume}/10</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={trainingDataVolume}
            onChange={(e) => setTrainingDataVolume(Number(e.target.value))}
            className="mt-2 w-full accent-violet-500"
          />
          <div className="text-[10px] text-stone-500 mt-1">1 = Zero examples | 10 = 10,000+ verified interview pairs</div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Hardware & GPU Budget:</span>
            <span className="font-mono text-violet-400 font-bold">{budgetTolerance}/10</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={budgetTolerance}
            onChange={(e) => setBudgetTolerance(Number(e.target.value))}
            className="mt-2 w-full accent-violet-500"
          />
          <div className="text-[10px] text-stone-500 mt-1">1 = Serverless API | 10 = Dedicated GPU training nodes</div>
        </div>
      </div>

      {/* Analytical Recommendation Banner */}
      <div className="mt-6 rounded-xl border border-violet-500/40 bg-violet-950/20 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-violet-400">
              Architectural Recommendation
            </div>
            <div className="mt-1 text-xl font-black text-white">
              {recommendation}
            </div>
          </div>
          <div className="rounded-lg bg-violet-500/20 px-3 py-1.5 text-xs font-mono font-bold text-violet-300">
            Fit Score: {hybridScore}%
          </div>
        </div>

        {/* Score Meters */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 border-t border-stone-800/80 pt-4 text-xs font-mono">
          <div>
            <div className="flex justify-between text-stone-400">
              <span>Pure RAG Fit:</span>
              <span className="text-stone-200">{ragScore}%</span>
            </div>
            <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-stone-800">
              <div className="h-full bg-sky-500" style={{ width: `${ragScore}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-stone-400">
              <span>Pure Fine-Tuning Fit:</span>
              <span className="text-stone-200">{ftScore}%</span>
            </div>
            <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-stone-800">
              <div className="h-full bg-amber-500" style={{ width: `${ftScore}%` }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-stone-400">
              <span>Hybrid Topology Fit:</span>
              <span className="text-stone-200">{hybridScore}%</span>
            </div>
            <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-stone-800">
              <div className="h-full bg-emerald-500" style={{ width: `${hybridScore}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 3. Circuit Breaker & Resilience Simulator
 * Interactive simulation of 3-state Circuit Breaker (CLOSED, OPEN, HALF_OPEN) with upstream failure injection.
 */
export const CircuitBreakerReliabilitySimulator = () => {
  const [circuitState, setCircuitState] = useState("CLOSED"); // CLOSED, OPEN, HALF_OPEN
  const failureThreshold = 3;
  const [consecutiveFailures, setConsecutiveFailures] = useState(0);
  const [upstreamHealthy, setUpstreamHealthy] = useState(true);
  const [requestHistory, setRequestHistory] = useState([]);

  const handleSendRequest = () => {
    const timestamp = new Date().toLocaleTimeString();
    if (circuitState === "OPEN") {
      // Fails immediately without calling upstream
      setRequestHistory((prev) => [
        { time: timestamp, result: "BLOCKED_FAIL_FAST", detail: "Short-circuited (0ms) -> Fallback Model Used" },
        ...prev.slice(0, 5)
      ]);
      return;
    }

    if (upstreamHealthy) {
      // Success
      setConsecutiveFailures(0);
      if (circuitState === "HALF_OPEN") {
        setCircuitState("CLOSED");
      }
      setRequestHistory((prev) => [
        { time: timestamp, result: "SUCCESS_200", detail: "LLM responded in 380ms" },
        ...prev.slice(0, 5)
      ]);
    } else {
      // Failure
      const nextFailures = consecutiveFailures + 1;
      setConsecutiveFailures(nextFailures);
      if (nextFailures >= failureThreshold || circuitState === "HALF_OPEN") {
        setCircuitState("OPEN");
      }
      setRequestHistory((prev) => [
        { time: timestamp, result: "UPSTREAM_ERROR_503", detail: `HTTP 503 Provider Timeout (Fail ${nextFailures}/${failureThreshold})` },
        ...prev.slice(0, 5)
      ]);
    }
  };

  const handleResetBreaker = () => {
    setCircuitState("CLOSED");
    setConsecutiveFailures(0);
    setRequestHistory([]);
  };

  const handleProbeHalfOpen = () => {
    setCircuitState("HALF_OPEN");
  };

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 backdrop-blur-sm">
      <div className="flex flex-col justify-between gap-3 border-b border-stone-800 pb-4 md:flex-row md:items-center">
        <div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Fault Tolerance
          </span>
          <h3 className="mt-2 text-xl font-bold text-stone-100">
            3-State Circuit Breaker Resilience Simulator
          </h3>
          <p className="mt-1 text-sm text-stone-400">
            Simulate third-party AI provider outages and watch the circuit breaker isolate failures and probe for recovery.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setUpstreamHealthy(!upstreamHealthy)}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
              upstreamHealthy
                ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                : "border border-rose-500/30 bg-rose-500/10 text-rose-300"
            }`}
          >
            Upstream Provider: {upstreamHealthy ? "HEALTHY (200 OK)" : "OUTAGE (503 FAILING)"}
          </button>
          <button
            onClick={handleResetBreaker}
            className="rounded-xl border border-stone-800 bg-stone-950 px-3 py-2 text-xs text-stone-400 hover:text-stone-200"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* State Machine Visualizer */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div
          className={`rounded-xl border p-4 text-center transition-all ${
            circuitState === "CLOSED"
              ? "border-emerald-500 bg-emerald-950/30 shadow-lg shadow-emerald-950/50"
              : "border-stone-800 bg-stone-950 opacity-40"
          }`}
        >
          <div className="text-xs font-mono font-bold text-emerald-400">STATE 1</div>
          <div className="mt-1 text-xl font-black text-white">CLOSED</div>
          <div className="mt-1 text-[11px] text-stone-400">Normal operations. Passes all traffic to AI provider.</div>
        </div>

        <div
          className={`rounded-xl border p-4 text-center transition-all ${
            circuitState === "OPEN"
              ? "border-rose-500 bg-rose-950/30 shadow-lg shadow-rose-950/50"
              : "border-stone-800 bg-stone-950 opacity-40"
          }`}
        >
          <div className="text-xs font-mono font-bold text-rose-400">STATE 2</div>
          <div className="mt-1 text-xl font-black text-white">OPEN</div>
          <div className="mt-1 text-[11px] text-stone-400">Short-circuits (0ms). Routes immediately to fallback model.</div>
        </div>

        <div
          className={`rounded-xl border p-4 text-center transition-all ${
            circuitState === "HALF_OPEN"
              ? "border-amber-500 bg-amber-950/30 shadow-lg shadow-amber-950/50"
              : "border-stone-800 bg-stone-950 opacity-40"
          }`}
        >
          <div className="text-xs font-mono font-bold text-amber-400">STATE 3</div>
          <div className="mt-1 text-xl font-black text-white">HALF-OPEN</div>
          <div className="mt-1 text-[11px] text-stone-400">Cooldown expired. Probing 1 canary request to test health.</div>
        </div>
      </div>

      {/* Action Controls */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-stone-800 bg-stone-950 p-4">
        <div className="flex items-center gap-4">
          <button
            onClick={handleSendRequest}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-950/50 hover:bg-indigo-500"
          >
            <Play className="h-4 w-4" /> Send Request to AI Gateway
          </button>

          {circuitState === "OPEN" && (
            <button
              onClick={handleProbeHalfOpen}
              className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-300 hover:bg-amber-500/20"
            >
              Simulate 30s Cooldown Expired (Transition to HALF-OPEN)
            </button>
          )}
        </div>

        <div className="text-xs font-mono text-stone-400">
          Failure Counter: <strong className="text-white">{consecutiveFailures} / {failureThreshold}</strong>
        </div>
      </div>

      {/* Request Execution Log */}
      <div className="mt-6">
        <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">
          Live Gateway Telemetry Stream:
        </label>
        <div className="mt-2 space-y-2 font-mono text-xs">
          {requestHistory.length === 0 ? (
            <div className="rounded-xl border border-stone-800 bg-stone-950 p-4 text-center text-stone-500">
              Click 'Send Request to AI Gateway' to simulate live traffic.
            </div>
          ) : (
            requestHistory.map((req, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between rounded-lg border p-2.5 ${
                  req.result === "SUCCESS_200"
                    ? "border-emerald-500/30 bg-emerald-950/20 text-emerald-300"
                    : req.result === "BLOCKED_FAIL_FAST"
                    ? "border-amber-500/30 bg-amber-950/20 text-amber-300"
                    : "border-rose-500/30 bg-rose-950/20 text-rose-300"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-stone-500">{req.time}</span>
                  <span className="font-bold">[{req.result}]</span>
                </div>
                <span>{req.detail}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * 4. Enterprise Token Cost & GPU Sizing Planner
 * Full financial model and capacity calculator using Little's Law (L = lambda * W).
 */
export const TokenCostAndCapacityCalculator = () => {
  const [dau, setDau] = useState(10000);
  const [peakRatio, setPeakRatio] = useState(0.05); // 5% concurrent at peak
  const interviewsPerUser = 2;
  const questionsPerInterview = 10;
  const [inputTokens, setInputTokens] = useState(2500);
  const [outputTokens, setOutputTokens] = useState(350);
  const [modelTier, setModelTier] = useState("router"); // flagship, mid, router, selfhosted

  // Model pricing profiles (per 1M tokens)
  const tierPricing = {
    flagship: { name: "Flagship Cloud (e.g. GPT-4o / Claude 3.5)", input: 2.50, output: 10.00 },
    mid: { name: "Mid-Tier Cloud (e.g. Llama-3.3-70B)", input: 0.50, output: 2.00 },
    router: { name: "Dynamic Model Router (Blended SLM + 70B)", input: 0.20, output: 0.60 },
    selfhosted: { name: "Self-Hosted GPU Cluster (vLLM on A10G)", input: 0.05, output: 0.05 }
  };

  const activePricing = tierPricing[modelTier];

  // Mathematical Calculations
  const totalDailyEvaluations = dau * interviewsPerUser * questionsPerInterview;
  const dailyInputTokens = totalDailyEvaluations * inputTokens;
  const dailyOutputTokens = totalDailyEvaluations * outputTokens;

  const dailyInputCost = (dailyInputTokens / 1_000_000) * activePricing.input;
  const dailyOutputCost = (dailyOutputTokens / 1_000_000) * activePricing.output;
  const dailyTotalCost = dailyInputCost + dailyOutputCost;
  const monthlyTotalCost = dailyTotalCost * 30;
  const costPerInterview = Number((dailyTotalCost / (dau * interviewsPerUser)).toFixed(3));

  // Little's Law Sizing
  // Peak concurrent active users
  const peakUsers = dau * peakRatio;
  // User submits 1 request every 30s
  const arrivalRateRPS = Number((peakUsers / 30).toFixed(2));
  // Average LLM evaluation duration: 3.0s
  const latencyW = 3.0;
  const inFlightConcurrentRequests = Number((arrivalRateRPS * latencyW).toFixed(1));
  // An A10G GPU sustained batch capacity ~ 16 streams
  const requiredGpuNodes = Math.ceil(inFlightConcurrentRequests / 16) + 1; // +1 HA redundancy

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 backdrop-blur-sm">
      <div className="flex flex-col justify-between gap-3 border-b border-stone-800 pb-4 md:flex-row md:items-center">
        <div>
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
            Capacity & Cost Modeling
          </span>
          <h3 className="mt-2 text-xl font-bold text-stone-100">
            Enterprise Token Cost & GPU Capacity Sizing Planner
          </h3>
          <p className="mt-1 text-sm text-stone-400">
            Apply Little's Law ($L = \lambda W$) and token pricing models to project infrastructure and API budgets.
          </p>
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {Object.keys(tierPricing).map((key) => (
            <button
              key={key}
              onClick={() => setModelTier(key)}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold whitespace-nowrap transition-all ${
                modelTier === key
                  ? "bg-amber-600 text-white font-bold"
                  : "bg-stone-950 text-stone-400 border border-stone-800"
              }`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Daily Active Users (DAU):</span>
            <span className="font-mono text-amber-400 font-bold">{dau.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={dau}
            onChange={(e) => setDau(Number(e.target.value))}
            className="mt-2 w-full accent-amber-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Peak Concurrency Ratio:</span>
            <span className="font-mono text-amber-400 font-bold">{(peakRatio * 100).toFixed(0)}% ({Math.round(peakUsers)} users)</span>
          </div>
          <input
            type="range"
            min="0.01"
            max="0.15"
            step="0.01"
            value={peakRatio}
            onChange={(e) => setPeakRatio(Number(e.target.value))}
            className="mt-2 w-full accent-amber-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Input Tokens / Eval:</span>
            <span className="font-mono text-amber-400 font-bold">{inputTokens.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="1000"
            max="5000"
            step="250"
            value={inputTokens}
            onChange={(e) => setInputTokens(Number(e.target.value))}
            className="mt-2 w-full accent-amber-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Output Tokens / Eval:</span>
            <span className="font-mono text-amber-400 font-bold">{outputTokens.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="150"
            max="800"
            step="50"
            value={outputTokens}
            onChange={(e) => setOutputTokens(Number(e.target.value))}
            className="mt-2 w-full accent-amber-500"
          />
        </div>
      </div>

      {/* Financial & Sizing Cards */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <DollarSign className="h-4 w-4" /> Daily Model Spend
          </div>
          <div className="mt-1 text-2xl font-black text-amber-200">
            ${Math.round(dailyTotalCost).toLocaleString()} / day
          </div>
          <div className="mt-1 text-[11px] text-stone-400 font-mono">
            ${Math.round(monthlyTotalCost).toLocaleString()} / month
          </div>
        </div>

        <div className="rounded-xl border border-stone-800 bg-stone-950 p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
            Cost per 15-Min Interview
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-400">
            ${costPerInterview}
          </div>
          <div className="mt-1 text-[11px] text-stone-500 font-mono">
            Target SLA: &lt; $0.15 / interview
          </div>
        </div>

        <div className="rounded-xl border border-stone-800 bg-stone-950 p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
            Little's Law Concurrent ($L$)
          </div>
          <div className="mt-1 text-2xl font-bold text-sky-400">
            {inFlightConcurrentRequests} in-flight
          </div>
          <div className="mt-1 text-[11px] text-stone-500 font-mono">
            λ = {arrivalRateRPS} req/s × 3.0s latency
          </div>
        </div>

        <div className="rounded-xl border border-stone-800 bg-stone-950 p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
            Required GPU Nodes
          </div>
          <div className="mt-1 text-2xl font-bold text-violet-400">
            {requiredGpuNodes} × A10G (24GB)
          </div>
          <div className="mt-1 text-[11px] text-stone-500 font-mono">
            vLLM continuous batching + N+1 HA
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 5. Real-Time Streaming Voice Pipeline Visualizer
 * Step-by-step stateful turn-taking simulator for conversational voice AI.
 */
export const RealtimeVoiceTurnTakingVisualizer = () => {
  const [pipelineStep, setPipelineStep] = useState(0);

  const steps = [
    {
      step: 0,
      title: "1. Candidate Audio Capture",
      actor: "Client Browser",
      latency: "t = 0ms",
      desc: "Candidate speaks their answer. Browser audio context records PCM audio chunks (16kHz, 16-bit mono) and streams them via WebSocket.",
      badge: "border-sky-500/40 bg-sky-950/20 text-sky-300"
    },
    {
      step: 1,
      title: "2. Voice Activity Detection (VAD)",
      actor: "Edge Audio Worker",
      latency: "t + 450ms",
      desc: "WebRTC VAD tracks speech energy. Candidate pauses; silence timer accumulates. At 700ms continuous silence, endpointing triggers.",
      badge: "border-indigo-500/40 bg-indigo-950/20 text-indigo-300"
    },
    {
      step: 2,
      title: "3. Streaming Speech-to-Text (STT)",
      actor: "Whisper Turbo",
      latency: "t + 780ms",
      desc: "Whisper Turbo transcribes accumulated audio buffer into text transcript: 'ConcurrentHashMap uses segment locks'.",
      badge: "border-violet-500/40 bg-violet-950/20 text-violet-300"
    },
    {
      step: 3,
      title: "4. Context Assembly & LLM TTFT",
      actor: "AI Orchestrator & vLLM",
      latency: "t + 1,150ms",
      desc: "Java 21 concurrency guidelines retrieved via pgvector. LLM generates Token 1 ('Correct,') within 370ms TTFT.",
      badge: "border-emerald-500/40 bg-emerald-950/20 text-emerald-300"
    },
    {
      step: 4,
      title: "5. Incremental TTS Audio Synthesis",
      actor: "Streaming Cloud TTS",
      latency: "t + 1,450ms",
      desc: "Tokens are streamed to TTS engine in 5-word sentence clauses. First synthesized audio buffer streams back to browser.",
      badge: "border-amber-500/40 bg-amber-950/20 text-amber-300"
    },
    {
      step: 5,
      title: "6. Conversational Playback & Interruption",
      actor: "Candidate Speakers",
      latency: "t + 1,800ms",
      desc: "Audio plays back seamlessly. If candidate begins speaking again, client immediately triggers Barge-In cancellation.",
      badge: "border-rose-500/40 bg-rose-950/20 text-rose-300"
    }
  ];

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 backdrop-blur-sm">
      <div className="flex flex-col justify-between gap-3 border-b border-stone-800 pb-4 md:flex-row md:items-center">
        <div>
          <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
            Real-Time Voice Architecture
          </span>
          <h3 className="mt-2 text-xl font-bold text-stone-100">
            Conversational Voice AI Turn-Taking Pipeline
          </h3>
          <p className="mt-1 text-sm text-stone-400">
            Step through the conversational voice pipeline from microphone capture to barge-in interruption.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setPipelineStep((prev) => (prev + 1) % steps.length)}
            className="flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-sky-950/50 hover:bg-sky-500"
          >
            <Play className="h-4 w-4" /> Next Turn Phase
          </button>
          <button
            onClick={() => setPipelineStep(0)}
            className="rounded-xl border border-stone-800 bg-stone-950 px-3 py-2 text-xs text-stone-400 hover:text-stone-200"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Step Indicator Tabs */}
      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {steps.map((s, idx) => (
          <button
            key={s.step}
            onClick={() => setPipelineStep(idx)}
            className={`rounded-xl border p-2.5 text-left text-xs transition-all ${
              pipelineStep === idx
                ? "border-sky-500 bg-sky-950/30 font-bold text-white shadow-md shadow-sky-950/40"
                : "border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-700"
            }`}
          >
            <div className="text-[10px] font-mono text-stone-500">PHASE 0{idx + 1}</div>
            <div className="mt-0.5 line-clamp-1">{s.title.split(". ")[1]}</div>
          </button>
        ))}
      </div>

      {/* Active Phase Card */}
      <div className="mt-6 rounded-xl border border-stone-800 bg-stone-950 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">{steps[pipelineStep].title}</span>
            <span className="rounded-full bg-stone-800 px-2.5 py-0.5 text-xs font-mono text-stone-300">
              Actor: {steps[pipelineStep].actor}
            </span>
          </div>
          <span className="rounded bg-sky-500/20 px-2 py-0.5 text-xs font-mono font-bold text-sky-400">
            Accumulated Latency: {steps[pipelineStep].latency}
          </span>
        </div>

        <p className="mt-4 text-sm text-stone-300 leading-relaxed">
          {steps[pipelineStep].desc}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-stone-800/80 pt-4 text-xs font-mono text-stone-500">
          <span>Target End-to-End Budget: &lt; 1,800ms</span>
          <span>Conversational State: {pipelineStep < 3 ? "CANDIDATE_TURN" : "AI_RESPONDING"}</span>
        </div>
      </div>
    </div>
  );
};
