import React, { useState } from "react";
import {
  Layers,
  Activity,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  ArrowRight,
  Server,
  Database,
  SlidersHorizontal,
  Clock,
  Shield,
  Zap,
  Cpu,
  Flame,
  Bug,
  RefreshCw,
} from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 1: PREPSPACES VERTICAL SLICE ARCHITECTURE & CRITICAL PATH
 * Visualizes the 5-step sequence: Client -> API Auth -> Durable Answer Persistence ->
 * AI Evaluation Adapter -> Report & Notification Queue with state transitions.
 * ---------------------------------------------------------------------------
 */
export function VerticalSliceLifecycleDiagram() {
  const [activeStep, setActiveStep] = useState(1);
  const [aiFailureSimulated, setAiFailureSimulated] = useState(false);

  const steps = [
    {
      step: 1,
      title: "1. Create Session",
      endpoint: "POST /api/v1/interviews",
      state: "CREATED -> IN_PROGRESS",
      detail: "Validates candidate auth token, initializes interview room, assigns category and question pool.",
    },
    {
      step: 2,
      title: "2. Submit Answer",
      endpoint: "POST /api/v1/interviews/{id}/answers",
      state: "SUBMITTED",
      detail: "Enforces idempotency key (submission_id). Verifies interview ownership before touching database.",
    },
    {
      step: 3,
      title: "3. Durable Persistence",
      endpoint: "SQL: INSERT INTO answers...",
      state: "STORED (Durable)",
      detail: "Crucial Invariant: Answer is committed to PostgreSQL BEFORE calling the AI model. Zero data loss on timeouts!",
    },
    {
      step: 4,
      title: "4. AI Evaluation",
      endpoint: "POST /v1/chat/completions (Adapter)",
      state: aiFailureSimulated ? "EVALUATION_FAILED (Retryable)" : "EVALUATING -> COMPLETED",
      detail: aiFailureSimulated
        ? "Provider timed out (504). Answer remains safe! Worker queues bounded exponential retry."
        : "AI evaluates syntax, time complexity, and communication rubrics with JSON schema validation.",
    },
    {
      step: 5,
      title: "5. Report & Notify",
      endpoint: "GET /api/v1/interviews/{id}/report",
      state: "REPORT_PUBLISHED",
      detail: "Emits notification event via Outbox. Report is queryable only by authorized candidate and tenant recruiter.",
    },
  ];

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-1">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            Vertical Slice Execution Path
          </div>
          <h4 className="text-base font-bold text-stone-900">
            PrepSpaces End-to-End Request &amp; Durable Data Flow
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAiFailureSimulated(!aiFailureSimulated)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              aiFailureSimulated
                ? "bg-rose-600 text-white shadow-sm"
                : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-50"
            }`}
          >
            {aiFailureSimulated ? "Simulating AI Timeout (504)" : "Simulate AI Timeout"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
        {steps.map((s) => (
          <button
            key={s.step}
            onClick={() => setActiveStep(s.step)}
            className={`p-3 rounded-xl border text-left transition-all ${
              activeStep === s.step
                ? "bg-white border-orange-500 shadow-xs"
                : "bg-stone-50 border-stone-200 hover:bg-white"
            }`}
          >
            <div className="text-[11px] font-bold text-stone-700">{s.title}</div>
            <div className="text-xs font-semibold text-stone-900 mt-1 truncate">{s.endpoint.split(" ")[0]}</div>
            <div className="text-[10px] font-mono text-stone-700 mt-0.5 truncate">{s.state}</div>
          </button>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-white border border-stone-200">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="text-xs font-bold text-orange-600 uppercase tracking-wider">
            Step {activeStep}: {steps[activeStep - 1].title}
          </div>
          <div className="text-xs font-mono bg-stone-100 px-2 py-0.5 rounded text-stone-700">
            {steps[activeStep - 1].endpoint}
          </div>
        </div>
        <p className="text-xs text-stone-700 leading-relaxed">
          {steps[activeStep - 1].detail}
        </p>

        <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-700">
          <span>Active State Machine Status:</span>
          <span
            className={`font-mono font-bold px-2 py-0.5 rounded ${
              steps[activeStep - 1].state.includes("FAILED")
                ? "bg-rose-100 text-rose-800"
                : "bg-emerald-100 text-emerald-800"
            }`}
          >
            {steps[activeStep - 1].state}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 2: K6 LOAD BENCHMARK & PERFORMANCE BUDGET SIMULATOR
 * Simulates staged load tests (Smoke, Baseline, Load, Stress/Breakpoint, Spike, Soak)
 * with real-time p50/p95/p99 latency calculations and pass/fail thresholds.
 * ---------------------------------------------------------------------------
 */
export function LoadBenchmarkSimulatorDiagram() {
  const [testStage, setTestStage] = useState("load"); // smoke | baseline | load | stress | spike | soak
  const [vus, setVus] = useState(50); // Virtual users

  // Derived workload metrics based on stage and VUs
  const requestsPerSec = Math.round(vus * 4.2);
  let p50LatencyMs = 45;
  let p95LatencyMs = 120;
  let p99LatencyMs = 210;
  let errorRatePct = 0.05;

  if (testStage === "smoke") {
    p50LatencyMs = 25;
    p95LatencyMs = 65;
    p99LatencyMs = 95;
    errorRatePct = 0.0;
  } else if (testStage === "baseline") {
    p50LatencyMs = 38;
    p95LatencyMs = 95;
    p99LatencyMs = 150;
    errorRatePct = 0.02;
  } else if (testStage === "load") {
    p50LatencyMs = 52 + Math.round(vus * 0.4);
    p95LatencyMs = 110 + Math.round(vus * 1.1);
    p99LatencyMs = 180 + Math.round(vus * 1.8);
    errorRatePct = vus > 120 ? 0.35 : 0.08;
  } else if (testStage === "stress") {
    p50LatencyMs = 120 + Math.round(vus * 1.5);
    p95LatencyMs = 280 + Math.round(vus * 2.8);
    p99LatencyMs = 450 + Math.round(vus * 4.2);
    errorRatePct = vus > 100 ? 1.85 : 0.45;
  } else if (testStage === "spike") {
    p50LatencyMs = 210;
    p95LatencyMs = 620;
    p99LatencyMs = 1250;
    errorRatePct = 3.4;
  } else if (testStage === "soak") {
    p50LatencyMs = 65;
    p95LatencyMs = 160;
    p99LatencyMs = 240;
    errorRatePct = 0.12;
  }

  const p95PassesSLO = p95LatencyMs < 300;
  const errorPassesSLO = errorRatePct < 0.5;

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-1">
            <Activity className="w-3.5 h-3.5 text-blue-600" />
            Grafana k6 Benchmark Simulator
          </div>
          <h4 className="text-base font-bold text-stone-900">
            Automated Load Testing &amp; SLO Threshold Verification
          </h4>
        </div>
        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-stone-200 text-xs">
          {["smoke", "baseline", "load", "stress", "spike", "soak"].map((s) => (
            <button
              key={s}
              onClick={() => {
                setTestStage(s);
                if (s === "smoke") setVus(2);
                else if (s === "baseline") setVus(10);
                else if (s === "load") setVus(50);
                else if (s === "stress") setVus(150);
                else if (s === "spike") setVus(200);
                else if (s === "soak") setVus(40);
              }}
              className={`px-2.5 py-1 rounded-lg font-semibold uppercase text-[10px] transition-all ${
                testStage === s
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="p-4 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs text-stone-700 font-medium mb-1.5">
            <span>Virtual Users (VUs):</span>
            <span className="font-mono font-bold text-blue-600">{vus} VUs</span>
          </div>
          <input
            type="range"
            min="2"
            max="250"
            step="5"
            value={vus}
            onChange={(e) => setVus(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-stone-700 font-mono mt-1">
            <span>2 VUs</span>
            <span>125 VUs</span>
            <span>250 VUs</span>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-700 space-y-1">
            <div className="flex justify-between">
              <span>Throughput:</span>
              <span className="font-bold text-stone-900 font-mono">{requestsPerSec} req/sec</span>
            </div>
            <div className="flex justify-between">
              <span>Test Stage:</span>
              <span className="font-bold uppercase text-blue-600">{testStage} test</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-stone-200 md:col-span-2">
          <div className="text-xs font-semibold text-stone-900 mb-2">Measured Latency Distribution vs SLOs</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
              <div className="text-stone-700 text-[11px]">p50 Latency</div>
              <div className="text-sm font-bold text-stone-900 mt-0.5">{p50LatencyMs} ms</div>
            </div>
            <div
              className={`p-2.5 rounded-lg border ${
                p95PassesSLO ? "bg-emerald-50 border-emerald-300" : "bg-rose-50 border-rose-300"
              }`}
            >
              <div className="text-stone-700 text-[11px]">p95 Latency (SLO &lt;300ms)</div>
              <div
                className={`text-sm font-bold mt-0.5 ${
                  p95PassesSLO ? "text-emerald-800" : "text-rose-800"
                }`}
              >
                {p95LatencyMs} ms {p95PassesSLO ? "✓" : "✗"}
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
              <div className="text-stone-700 text-[11px]">p99 Latency (Tail)</div>
              <div className="text-sm font-bold text-stone-900 mt-0.5">{p99LatencyMs} ms</div>
            </div>
            <div
              className={`p-2.5 rounded-lg border ${
                errorPassesSLO ? "bg-emerald-50 border-emerald-300" : "bg-rose-50 border-rose-300"
              }`}
            >
              <div className="text-stone-700 text-[11px]">Error Rate (SLO &lt;0.5%)</div>
              <div
                className={`text-sm font-bold mt-0.5 ${
                  errorPassesSLO ? "text-emerald-800" : "text-rose-800"
                }`}
              >
                {errorRatePct}% {errorPassesSLO ? "✓" : "✗"}
              </div>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-700">
            <strong>k6 Threshold Assertion:</strong>{" "}
            {p95PassesSLO && errorPassesSLO ? (
              <span className="text-emerald-700 font-semibold">
                ALL THRESHOLDS PASSED. System successfully meets production performance budget at {requestsPerSec} RPS.
              </span>
            ) : (
              <span className="text-rose-700 font-semibold">
                SLO BREACH DETECTED. Breakpoint reached. Primary bottleneck: Database connection contention under high concurrency.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 3: CHAOS ENGINEERING & CONTROLLED FAILURE INJECTOR
 * Simulates breaking the system (AI Outage, Database Latency, Worker Crash,
 * Tenant Isolation Attack) and demonstrates automated recovery behavior.
 * ---------------------------------------------------------------------------
 */
export function ChaosExperimentSimulatorDiagram() {
  const [selectedExperiment, setSelectedExperiment] = useState("ai_outage");
  const [drillState, setDrillState] = useState("IDLE"); // IDLE, INJECTED, RECOVERED

  const experiments = {
    ai_outage: {
      name: "Experiment 1: AI Provider Outage",
      target: "External LLM API Gateway",
      injection: "Simulate HTTP 504 Gateway Timeout on AI evaluation calls",
      expectedResult:
        "Candidate's submitted answer remains safely committed in PostgreSQL. Evaluation status transitions to EVALUATION_FAILED. Background worker applies bounded exponential backoff. Zero data corruption.",
      invariantsPreserved: "Answer Durability = 100%, Core API Availability = Unaffected.",
    },
    db_latency: {
      name: "Experiment 2: Database Connection Saturation",
      target: "PostgreSQL Primary Pool",
      injection: "Inject 2,500ms query delay and exhaust connection pool",
      expectedResult:
        "API enforces 3-second client request deadlines. Circuit breaker trips. Rejects excess requests with HTTP 503 instead of crashing process memory. Does not emit false commit ACKs.",
      invariantsPreserved: "No Uncommitted Data Acknowledged, Memory Stability Preserved.",
    },
    worker_crash: {
      name: "Experiment 3: Background Worker Crash Midway",
      target: "Notification & Report Worker",
      injection: "Kill worker process immediately after generating report before sending email",
      expectedResult:
        "SQS/RabbitMQ message visibility timeout elapses. A healthy worker re-consumes the job. Idempotency key prevents duplicate email dispatch. Completed report remains accessible.",
      invariantsPreserved: "Exactly-Once Side Effect, No Duplicate Notifications.",
    },
    tenant_attack: {
      name: "Experiment 4: Cross-Tenant Resource Access Attack",
      target: "Tenant Authorization Middleware",
      injection: "Candidate from Tenant A requests report of Tenant B via URL manipulation",
      expectedResult:
        "Backend middleware verifies session tenant_id against resource organization_id. Request is rejected with HTTP 403 Forbidden. Security audit event logged to SIEM.",
      invariantsPreserved: "Hard Multi-Tenant Isolation Enforced on Server-Side.",
    },
  };

  const currentExp = experiments[selectedExperiment];

  const handleRunDrill = () => {
    setDrillState("INJECTED");
    setTimeout(() => {
      setDrillState("RECOVERED");
    }, 1200);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 mb-1">
            <Flame className="w-3.5 h-3.5 text-rose-600" />
            Chaos &amp; Resilience Lab
          </div>
          <h4 className="text-base font-bold text-stone-900">
            Controlled Fault Injection &amp; Recovery Drill Simulator
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleRunDrill}
            disabled={drillState === "INJECTED"}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 shadow-sm disabled:opacity-50"
          >
            {drillState === "INJECTED" ? "Injecting Fault..." : "Execute Chaos Drill"}
          </button>
          <button
            onClick={() => setDrillState("IDLE")}
            className="p-1.5 rounded-lg text-stone-600 hover:text-stone-900 border border-stone-200 bg-white"
            title="Reset Drill"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {Object.entries(experiments).map(([key, exp]) => (
          <button
            key={key}
            onClick={() => {
              setSelectedExperiment(key);
              setDrillState("IDLE");
            }}
            className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
              selectedExperiment === key
                ? "bg-white border-rose-500 shadow-xs font-bold text-stone-900"
                : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-white"
            }`}
          >
            {exp.name.split(":")[0]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs">
          <div className="font-bold text-stone-900 mb-1">{currentExp.name}</div>
          <div className="text-stone-700 mb-2">Target Component: <span className="font-mono text-rose-600">{currentExp.target}</span></div>
          <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-700 mb-3">
            <strong>Fault Injection: </strong> {currentExp.injection}
          </div>
          <div className="text-stone-700 leading-relaxed">
            <strong>Expected Resilience: </strong> {currentExp.expectedResult}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs flex flex-col justify-between">
          <div>
            <div className="font-bold text-stone-900 mb-2">Live Chaos Drill State</div>
            <div
              className={`p-3 rounded-xl border text-xs font-mono ${
                drillState === "IDLE"
                  ? "bg-stone-50 border-stone-200 text-stone-700"
                  : drillState === "INJECTED"
                  ? "bg-rose-50 border-rose-300 text-rose-900 animate-pulse"
                  : "bg-emerald-50 border-emerald-300 text-emerald-900"
              }`}
            >
              {drillState === "IDLE" && "Status: READY TO INJECT FAULT. Click 'Execute Chaos Drill'."}
              {drillState === "INJECTED" && "Status: FAULT ACTIVE! Observing circuit breakers & deadlines..."}
              {drillState === "RECOVERED" && "Status: RECOVERY VERIFIED. Invariants intact without data loss."}
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-stone-100">
            <div className="text-[11px] text-stone-700 font-bold mb-1">Architectural Invariant Guarantee:</div>
            <div className="text-xs font-semibold text-emerald-700">
              {currentExp.invariantsPreserved}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * MASTER DISPATCHER COMPONENT FOR MODULE 24
 * ---------------------------------------------------------------------------
 */
export default function VisualDiagramComponentModule24({ diagramId }) {
  if (diagramId === "vertical_slice") return <VerticalSliceLifecycleDiagram />;
  if (diagramId === "load_benchmark") return <LoadBenchmarkSimulatorDiagram />;
  if (diagramId === "chaos_experiment") return <ChaosExperimentSimulatorDiagram />;

  return (
    <div className="space-y-6">
      <VerticalSliceLifecycleDiagram />
      <LoadBenchmarkSimulatorDiagram />
      <ChaosExperimentSimulatorDiagram />
    </div>
  );
}
