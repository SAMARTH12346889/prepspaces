import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Cpu,
  Database,
  Flame,
  Globe,
  Layers,
  Lock,
  Network,
  RefreshCw,
  RotateCcw,
  Server,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Sparkles,
  Timer,
  TrendingDown,
  TrendingUp,
  Unlock,
  Workflow,
  XCircle,
  Zap,
} from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 1: CIRCUIT BREAKER STATE MACHINE RUNNER
 * Demonstrates Closed -> Open -> Half-Open states with configurable failure
 * threshold, reset timeout, and fallback handling.
 * ---------------------------------------------------------------------------
 */
export function CircuitBreakerDiagram() {
  const [state, setState] = useState("CLOSED"); // "CLOSED" | "OPEN" | "HALF_OPEN"
  const [failureCount, setFailureCount] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const failureThreshold = 3;
  const successThreshold = 2;

  const simulateSuccess = () => {
    if (state === "CLOSED") {
      setFailureCount(0);
    } else if (state === "HALF_OPEN") {
      const nextSuccess = successCount + 1;
      setSuccessCount(nextSuccess);
      if (nextSuccess >= successThreshold) {
        setState("CLOSED");
        setFailureCount(0);
        setSuccessCount(0);
      }
    }
  };

  const simulateFailure = () => {
    if (state === "CLOSED") {
      const nextFailure = failureCount + 1;
      setFailureCount(nextFailure);
      if (nextFailure >= failureThreshold) {
        setState("OPEN");
        setFailureCount(0);
      }
    } else if (state === "HALF_OPEN") {
      setState("OPEN");
      setSuccessCount(0);
      setFailureCount(0);
    }
  };

  const advanceToHalfOpen = () => {
    setState("HALF_OPEN");
    setSuccessCount(0);
    setFailureCount(0);
  };

  const resetAll = () => {
    setState("CLOSED");
    setFailureCount(0);
    setSuccessCount(0);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Resilience Pattern Simulator
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Circuit Breaker Dynamic State Machine
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
              state === "CLOSED"
                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                : state === "OPEN"
                ? "bg-red-100 text-red-800 border border-red-300 animate-pulse"
                : "bg-amber-100 text-amber-800 border border-amber-300"
            }`}
          >
            STATE: {state}
          </span>
          <button
            type="button"
            onClick={resetAll}
            className="p-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 text-stone-600 text-xs flex items-center gap-1 cursor-pointer"
            title="Reset"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* 3 State Columns Visualizer */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        {/* Closed State */}
        <div
          className={`p-4 rounded-xl border text-center transition ${
            state === "CLOSED"
              ? "bg-emerald-50 border-emerald-400 ring-2 ring-emerald-500 shadow-xs"
              : "bg-white border-stone-200 opacity-50"
          }`}
        >
          <div className="flex items-center justify-center gap-1.5 text-emerald-700 font-bold text-xs mb-1">
            <CheckCircle2 size={15} />
            <span>1. CLOSED</span>
          </div>
          <span className="text-[11px] text-stone-600 block leading-tight">
            Traffic flows normally. Failures increment counter ({failureCount}/{failureThreshold}).
          </span>
        </div>

        {/* Open State */}
        <div
          className={`p-4 rounded-xl border text-center transition ${
            state === "OPEN"
              ? "bg-red-50 border-red-400 ring-2 ring-red-500 shadow-xs"
              : "bg-white border-stone-200 opacity-50"
          }`}
        >
          <div className="flex items-center justify-center gap-1.5 text-red-700 font-bold text-xs mb-1">
            <XCircle size={15} />
            <span>2. OPEN</span>
          </div>
          <span className="text-[11px] text-stone-600 block leading-tight">
            Fails fast immediately. Diverts requests to safe fallback / cached data.
          </span>
        </div>

        {/* Half-Open State */}
        <div
          className={`p-4 rounded-xl border text-center transition ${
            state === "HALF_OPEN"
              ? "bg-amber-50 border-amber-400 ring-2 ring-amber-500 shadow-xs"
              : "bg-white border-stone-200 opacity-50"
          }`}
        >
          <div className="flex items-center justify-center gap-1.5 text-amber-700 font-bold text-xs mb-1">
            <AlertTriangle size={15} />
            <span>3. HALF-OPEN</span>
          </div>
          <span className="text-[11px] text-stone-600 block leading-tight">
            Trial probes test recovery ({successCount}/{successThreshold} successes to heal).
          </span>
        </div>
      </div>

      {/* Simulator Action Controls */}
      <div className="p-4 rounded-xl bg-white border border-stone-200 mb-4 space-y-3">
        <span className="text-xs font-bold text-stone-900 block">
          Inject Real-Time Requests to External Dependency (e.g. AI Provider):
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={simulateSuccess}
            className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <CheckCircle2 size={14} />
            <span>Successful Request (200 OK)</span>
          </button>
          <button
            type="button"
            onClick={simulateFailure}
            className="flex-1 py-2 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <XCircle size={14} />
            <span>Failed / Timed-Out Request (504)</span>
          </button>
          {state === "OPEN" && (
            <button
              type="button"
              onClick={advanceToHalfOpen}
              className="w-full py-2 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer animate-pulse"
            >
              <Timer size={14} />
              <span>Simulate Cooldown Expiry &rarr; Switch to Half-Open</span>
            </button>
          )}
        </div>
      </div>

      {/* Live State Explanation */}
      <div className="p-3 rounded-xl bg-stone-100 text-xs text-stone-700 font-mono space-y-1">
        <div>
          Current Action:{" "}
          <strong className="text-stone-900">
            {state === "CLOSED"
              ? "Forwarding calls directly to upstream AI provider API."
              : state === "OPEN"
              ? "Tripped! Rejecting calls in 0ms & serving cached response or offline practice questions."
              : "Allowing canary probe requests to verify if upstream has stabilized."}
          </strong>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 2: DISTRIBUTED TRACE WATERFALL VISUALIZER
 * Highlights the latency breakdown across microservices, identifying the
 * critical path bottleneck (External AI Provider taking 1,800 ms).
 * ---------------------------------------------------------------------------
 */
export function DistributedTraceDiagram() {
  const [selectedSpan, setSelectedSpan] = useState("ai-provider");

  const spans = [
    {
      id: "api-gw",
      name: "API Gateway (Auth & Routing)",
      offsetMs: 0,
      durationMs: 20,
      status: "200 OK",
      type: "network",
      service: "ingress-gateway",
      details: "JWT signature validation, rate limit check (token bucket passed), header injection.",
    },
    {
      id: "interview-svc",
      name: "Interview Service (Session Orchestrator)",
      offsetMs: 20,
      durationMs: 35,
      status: "200 OK",
      type: "compute",
      service: "interview-api",
      details: "State deserialization, session context retrieval, outbound prompt templating.",
    },
    {
      id: "database",
      name: "PostgreSQL Database (Candidate History)",
      offsetMs: 55,
      durationMs: 45,
      status: "200 OK",
      type: "database",
      service: "postgres-primary",
      details: "SELECT query on candidate_responses table using index idx_candidate_session.",
    },
    {
      id: "ai-provider",
      name: "External AI Provider (LLM Evaluation)",
      offsetMs: 100,
      durationMs: 1800,
      status: "200 OK (Slow)",
      type: "external-ai",
      service: "ai-inference-cloud",
      isBottleneck: true,
      details: "Third-party LLM evaluation API over public internet. Dominated by model inference time and queuing.",
    },
    {
      id: "response-proc",
      name: "Response Processing & Formatting",
      offsetMs: 1900,
      durationMs: 50,
      status: "200 OK",
      type: "compute",
      service: "interview-api",
      details: "JSON schema verification, score normalization, persistence of evaluation checkpoint.",
    },
  ];

  const totalDuration = 1950; // Total 1,950 ms

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            OpenTelemetry Distributed Trace
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Critical Path Latency Waterfall Analysis
          </h4>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 font-bold">
            Total Trace: {totalDuration} ms
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-red-100 text-red-800 font-bold">
            Bottleneck: AI Provider (92.3%)
          </span>
        </div>
      </div>

      {/* Waterfall Visualizer */}
      <div className="space-y-3 mb-5">
        {spans.map((span) => {
          const leftPercent = (span.offsetMs / totalDuration) * 100;
          const widthPercent = Math.max(3, (span.durationMs / totalDuration) * 100);
          const isSelected = selectedSpan === span.id;

          return (
            <div
              key={span.id}
              onClick={() => setSelectedSpan(span.id)}
              className={`p-3 rounded-xl border transition cursor-pointer ${
                isSelected
                  ? "bg-white border-orange-400 ring-2 ring-orange-500 shadow-xs"
                  : "bg-white border-stone-200 hover:border-stone-300"
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-stone-900 flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      span.isBottleneck ? "bg-red-500 animate-pulse" : "bg-emerald-500"
                    }`}
                  />
                  {span.name}
                </span>
                <span className="font-mono text-stone-600 font-bold">{span.durationMs} ms</span>
              </div>

              {/* Progress Bar Track */}
              <div className="w-full h-3 rounded-full bg-stone-100 overflow-hidden relative">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    span.isBottleneck
                      ? "bg-gradient-to-r from-red-500 to-orange-500"
                      : "bg-stone-700"
                  }`}
                  style={{
                    marginLeft: `${leftPercent}%`,
                    width: `${widthPercent}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Span Detail Card */}
      {selectedSpan && (
        <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs space-y-2">
          {(() => {
            const span = spans.find((s) => s.id === selectedSpan);
            return (
              <>
                <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                  <span className="font-bold text-stone-900 text-sm">{span.name}</span>
                  <span className="font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                    Service: {span.service}
                  </span>
                </div>
                <p className="text-stone-600">{span.details}</p>
                <div className="grid grid-cols-3 gap-2 font-mono text-[11px] pt-1">
                  <div className="p-2 rounded bg-stone-50 border border-stone-100">
                    <span className="text-stone-400 block text-[10px]">Start Offset</span>
                    <span className="font-bold text-stone-800">+{span.offsetMs} ms</span>
                  </div>
                  <div className="p-2 rounded bg-stone-50 border border-stone-100">
                    <span className="text-stone-400 block text-[10px]">Duration</span>
                    <span className="font-bold text-stone-800">{span.durationMs} ms</span>
                  </div>
                  <div className="p-2 rounded bg-stone-50 border border-stone-100">
                    <span className="text-stone-400 block text-[10px]">Status</span>
                    <span className="font-bold text-stone-800">{span.status}</span>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 3: ERROR BUDGET & AVAILABILITY SLA CALCULATOR
 * Demonstrates the mathematical relationship between 9s of availability,
 * allowed monthly downtime, and release gate decision thresholds.
 * ---------------------------------------------------------------------------
 */
export function ErrorBudgetDiagram() {
  const [targetAvailability, setTargetAvailability] = useState(99.9);
  const [totalMonthlyRequests, setTotalMonthlyRequests] = useState(1000000);
  const [actualFailedRequests, setActualFailedRequests] = useState(650);

  // Downtime calculation: 30 days = 43,200 minutes
  const totalMinutesInMonth = 43200;
  const downtimeAllowedMinutes = ((1 - targetAvailability / 100) * totalMinutesInMonth).toFixed(2);
  const allowedFailedRequests = Math.round(totalMonthlyRequests * (1 - targetAvailability / 100));
  const budgetConsumedPercent = Math.min(
    200,
    Math.round((actualFailedRequests / Math.max(1, allowedFailedRequests)) * 100)
  );

  const releaseGateStatus =
    budgetConsumedPercent <= 75
      ? { label: "GREEN: Normal Releases Allowed", color: "text-emerald-700 bg-emerald-50 border-emerald-300" }
      : budgetConsumedPercent <= 100
      ? { label: "YELLOW: Release Freeze Warning", color: "text-amber-700 bg-amber-50 border-amber-300" }
      : { label: "RED: Full Release Freeze (Reliability Work Only)", color: "text-red-700 bg-red-50 border-red-300" };

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Google SRE Error Budget Engine
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Availability Target, Downtime Budget &amp; Release Policy
          </h4>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${releaseGateStatus.color}`}>
          {releaseGateStatus.label}
        </span>
      </div>

      {/* Control Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
        <div className="space-y-1">
          <label className="text-xs font-bold text-stone-700 flex justify-between">
            <span>Availability Target (SLO)</span>
            <span className="font-mono text-orange-600 font-bold">{targetAvailability}%</span>
          </label>
          <select
            value={targetAvailability}
            onChange={(e) => setTargetAvailability(Number(e.target.value))}
            className="w-full text-xs font-mono p-2 rounded-lg border border-stone-200 bg-white cursor-pointer"
          >
            <option value={99.0}>99.0% (Two 9s &bull; 7h 12m downtime/mo)</option>
            <option value={99.5}>99.5% (Two and a half 9s &bull; 3h 36m downtime/mo)</option>
            <option value={99.9}>99.9% (Three 9s &bull; 43.2m downtime/mo)</option>
            <option value={99.95}>99.95% (Three and a half 9s &bull; 21.6m downtime/mo)</option>
            <option value={99.99}>99.99% (Four 9s &bull; 4.32m downtime/mo)</option>
            <option value={99.999}>99.999% (Five 9s &bull; 25.9s downtime/mo)</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-stone-700 flex justify-between">
            <span>Monthly Request Volume</span>
            <span className="font-mono text-stone-800">{(totalMonthlyRequests / 1e6).toFixed(1)}M</span>
          </label>
          <input
            type="range"
            min="100000"
            max="10000000"
            step="100000"
            value={totalMonthlyRequests}
            onChange={(e) => setTotalMonthlyRequests(Number(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-stone-700 flex justify-between">
            <span>Simulated Failed Requests</span>
            <span className="font-mono text-red-600 font-bold">{actualFailedRequests.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="0"
            max="3000"
            step="50"
            value={actualFailedRequests}
            onChange={(e) => setActualFailedRequests(Number(e.target.value))}
            className="w-full accent-red-600 cursor-pointer"
          />
        </div>
      </div>

      {/* Metrics Card */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-white border border-stone-200 text-xs font-mono mb-4">
        <div className="p-3 rounded-lg bg-stone-50 border border-stone-100">
          <span className="text-[10px] text-stone-500 block">Downtime Budget</span>
          <span className="text-base font-bold text-stone-900">{downtimeAllowedMinutes} mins/mo</span>
        </div>
        <div className="p-3 rounded-lg bg-stone-50 border border-stone-100">
          <span className="text-[10px] text-stone-500 block">Allowed Failed Requests</span>
          <span className="text-base font-bold text-stone-900">{allowedFailedRequests.toLocaleString()}</span>
        </div>
        <div className="p-3 rounded-lg bg-stone-50 border border-stone-100">
          <span className="text-[10px] text-stone-500 block">Budget Consumed</span>
          <span
            className={`text-base font-bold ${
              budgetConsumedPercent > 100 ? "text-red-700" : "text-emerald-700"
            }`}
          >
            {budgetConsumedPercent}%
          </span>
        </div>
        <div className="p-3 rounded-lg bg-stone-50 border border-stone-100">
          <span className="text-[10px] text-stone-500 block">Budget Remaining</span>
          <span className="text-base font-bold text-stone-800">
            {Math.max(0, allowedFailedRequests - actualFailedRequests).toLocaleString()} reqs
          </span>
        </div>
      </div>

      {/* Visual Budget Meter */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-bold text-stone-700">
          <span>Error Budget Burn Progress</span>
          <span className="font-mono">{budgetConsumedPercent}% Consumed</span>
        </div>
        <div className="w-full h-3 rounded-full bg-stone-200 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              budgetConsumedPercent <= 75
                ? "bg-emerald-500"
                : budgetConsumedPercent <= 100
                ? "bg-amber-500"
                : "bg-red-600"
            }`}
            style={{ width: `${Math.min(100, budgetConsumedPercent)}%` }}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DISPATCHER COMPONENT FOR MODULE 17 DIAGRAMS
 * ---------------------------------------------------------------------------
 */
export function VisualDiagramComponentModule17({ diagramId }) {
  switch (diagramId) {
    case "circuit-breaker":
      return <CircuitBreakerDiagram />;
    case "distributed-trace":
      return <DistributedTraceDiagram />;
    case "error-budget":
      return <ErrorBudgetDiagram />;
    default:
      return <CircuitBreakerDiagram />;
  }
}
