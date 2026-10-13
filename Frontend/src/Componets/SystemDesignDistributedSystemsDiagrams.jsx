import React, { useState } from "react";
import {
  Clock,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  Zap,
  ShieldAlert,
  Activity,
  Cpu,
  Server,
  Network,
  RotateCcw,
  Sliders,
  ArrowRight,
  Lock,
  GitBranch,
  Timer,
  ShieldCheck,
} from "lucide-react";

/**
 * Diagram 1: The Anatomy of a Distributed Request & The Unknown Outcome Dilemma
 * Visualizes: Client -> API -> Database (committed) -> Response Lost in transit
 */
export function DistributedRequestDilemmaDiagram() {
  const [networkCondition, setNetworkCondition] = useState("response-lost"); // "normal" | "response-lost" | "server-crashed"

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 1
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            The Distributed Request Anatomy &amp; Unknown Outcome Dilemma
          </h4>
        </div>
        <div className="flex rounded-lg border border-stone-200 bg-stone-50 p-0.5 text-xs font-semibold">
          {[
            { id: "normal", label: "Happy Path (200 OK)" },
            { id: "response-lost", label: "Response Lost in Transit" },
            { id: "server-crashed", label: "Worker Crashed During Task" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setNetworkCondition(tab.id)}
              className={`px-2.5 py-1 rounded-md transition cursor-pointer ${
                networkCondition === tab.id
                  ? "bg-white text-orange-600 shadow-xs font-bold"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
          {/* Node 1: Client / Web App */}
          <div className="p-3.5 rounded-xl border border-stone-200 bg-white shadow-xs">
            <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block mb-1">
              Client Node
            </span>
            <div className="flex items-center gap-2 mb-2">
              <Cpu size={16} className="text-orange-600" />
              <span className="font-bold text-xs text-stone-900">Browser / Mobile</span>
            </div>
            <p className="text-[11px] text-stone-600">
              Sends <code>POST /evaluations</code> with 5s timeout deadline.
            </p>
            <div className="mt-2.5 pt-2 border-t border-stone-100 text-[10px] font-mono">
              Status:{" "}
              {networkCondition === "normal" ? (
                <span className="text-emerald-600 font-bold">Received 200 OK</span>
              ) : (
                <span className="text-red-600 font-bold">HTTP 504 Timeout!</span>
              )}
            </div>
          </div>

          {/* Node 2: PrepSpaces API Gateway */}
          <div className="p-3.5 rounded-xl border border-stone-200 bg-white shadow-xs">
            <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block mb-1">
              API Gateway
            </span>
            <div className="flex items-center gap-2 mb-2">
              <Server size={16} className="text-stone-700" />
              <span className="font-bold text-xs text-stone-900">Node.js API</span>
            </div>
            <p className="text-[11px] text-stone-600">
              Allocates 3.5s sub-deadline and queries PostgreSQL DB.
            </p>
            <div className="mt-2.5 pt-2 border-t border-stone-100 text-[10px] font-mono text-stone-500">
              LSN: 0/1F8A90 · Active
            </div>
          </div>

          {/* Node 3: PostgreSQL Database */}
          <div className="p-3.5 rounded-xl border border-emerald-300 bg-emerald-50/40 shadow-xs">
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 block mb-1">
              Primary Database
            </span>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span className="font-bold text-xs text-stone-900">PostgreSQL</span>
            </div>
            <p className="text-[11px] text-stone-600">
              {networkCondition === "server-crashed"
                ? "Transaction aborted or incomplete."
                : "Transaction committed durably to WAL in 18ms."}
            </p>
            <div className="mt-2.5 pt-2 border-t border-emerald-200/60 text-[10px] font-mono text-emerald-800 font-bold">
              {networkCondition === "server-crashed" ? "Status: Rolled Back" : "Row Saved: ID #8491"}
            </div>
          </div>

          {/* Node 4: Network Return Path */}
          <div
            className={`p-3.5 rounded-xl border transition ${
              networkCondition === "normal"
                ? "border-emerald-300 bg-white"
                : "border-red-300 bg-red-50/70"
            }`}
          >
            <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block mb-1">
              Response Channel
            </span>
            <div className="flex items-center gap-2 mb-2">
              {networkCondition === "normal" ? (
                <Zap size={16} className="text-emerald-600" />
              ) : (
                <ShieldAlert size={16} className="text-red-600" />
              )}
              <span className="font-bold text-xs text-stone-900">Return Network</span>
            </div>
            <p className="text-[11px] text-stone-600">
              {networkCondition === "normal"
                ? "TCP ACK delivered successfully in 12ms."
                : "TCP RST / Network timeout: Response lost in transit!"}
            </p>
            <div className="mt-2.5 pt-2 border-t border-stone-200 text-[10px] font-mono">
              {networkCondition === "normal" ? (
                <span className="text-emerald-600 font-bold">Delivered</span>
              ) : (
                <span className="text-red-700 font-bold">Packet Dropped</span>
              )}
            </div>
          </div>
        </div>

        {/* Fundamental Dilemma Callout */}
        <div className="mt-4 pt-3 border-t border-stone-200 text-xs text-stone-700">
          {networkCondition === "response-lost" && (
            <div className="flex items-start gap-2 text-red-900 bg-red-100/70 p-3 rounded-xl border border-red-200">
              <AlertTriangle size={15} className="text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong>The Two-Generals / Distributed Dilemma:</strong> The database has already successfully saved the submission, but the client timed out without knowing it! If the client blindly retries without an <code>Idempotency-Key</code>, a duplicate submission will be created.
              </div>
            </div>
          )}
          {networkCondition === "server-crashed" && (
            <div className="flex items-start gap-2 text-amber-900 bg-amber-100/70 p-3 rounded-xl border border-amber-200">
              <Activity size={15} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Crash-Recovery Model:</strong> The worker died midway. Upon restarting, it cannot determine whether an external email or push notification was dispatched unless transactional state is saved before side effects.
              </div>
            </div>
          )}
          {networkCondition === "normal" && (
            <div className="flex items-start gap-2 text-emerald-900 bg-emerald-100/70 p-3 rounded-xl border border-emerald-200">
              <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Synchronous Coordination Success:</strong> All steps finished well within the 5-second deadline budget.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Diagram 2: Physical Clocks vs. Monotonic Clocks
 * Visualizes clock drift, NTP adjustments, negative wall-clock jumps, and monotonic steady time
 */
export function ClockDriftMonotonicDiagram() {
  const [ntpStepAdjustment, setNtpStepAdjustment] = useState(false);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 2
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Physical Wall Clocks vs. Monotonic Elapsed Clocks
          </h4>
        </div>
        <button
          type="button"
          onClick={() => setNtpStepAdjustment(!ntpStepAdjustment)}
          className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer border ${
            ntpStepAdjustment
              ? "bg-red-50 text-red-700 border-red-300"
              : "bg-orange-600 text-white border-transparent hover:bg-orange-700"
          }`}
        >
          {ntpStepAdjustment ? "Revert NTP Step" : "Simulate NTP Backward Step (-350ms)"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Box 1: Wall Clock (System.currentTimeMillis() / Date.now()) */}
        <div
          className={`rounded-xl border p-4 transition ${
            ntpStepAdjustment ? "border-red-300 bg-red-50/40" : "border-stone-200 bg-white"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
              <Clock size={15} className="text-orange-600" />
              Wall Clock (Date.now() / UTC)
            </span>
            <span
              className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                ntpStepAdjustment ? "bg-red-100 text-red-700" : "bg-stone-100 text-stone-600"
              }`}
            >
              {ntpStepAdjustment ? "NEGATIVE JUMP DETECTED" : "Normal UTC Time"}
            </span>
          </div>
          <p className="text-[11px] text-stone-600 mb-3">
            Represents civil date/time. Can jump forward or backward due to NTP synchronization or leap seconds.
          </p>

          <div className="p-3 rounded-lg border border-stone-200 bg-[#faf8f4] font-mono text-xs space-y-1">
            <div className="flex justify-between">
              <span className="text-stone-500">t1 (Operation Start):</span>
              <span className="text-stone-800 font-bold">12:00:00.500</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">t2 (NTP Synchronization):</span>
              <span className={ntpStepAdjustment ? "text-red-600 font-bold" : "text-stone-800"}>
                {ntpStepAdjustment ? "12:00:00.150 (-350ms jump!)" : "12:00:00.550"}
              </span>
            </div>
            <div className="pt-2 border-t border-stone-200 flex justify-between font-bold">
              <span>Measured Elapsed:</span>
              <span className={ntpStepAdjustment ? "text-red-700" : "text-emerald-700"}>
                {ntpStepAdjustment ? "-350 ms (Negative duration!)" : "+50 ms"}
              </span>
            </div>
          </div>
          <span className="block mt-2 text-[10px] text-stone-500 italic">
            *DANGER: Using Date.now() for timeouts can cause timeouts to freeze indefinitely or fire prematurely!
          </span>
        </div>

        {/* Box 2: Monotonic Clock (performance.now() / System.nanoTime()) */}
        <div className="rounded-xl border border-emerald-300 bg-emerald-50/20 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
              <Timer size={15} className="text-emerald-600" />
              Monotonic Clock (performance.now())
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              STRICTLY INCREASING
            </span>
          </div>
          <p className="text-[11px] text-stone-600 mb-3">
            Measures elapsed time using CPU hardware tick counters. Immune to NTP step adjustments and leap seconds.
          </p>

          <div className="p-3 rounded-lg border border-emerald-200 bg-white font-mono text-xs space-y-1">
            <div className="flex justify-between">
              <span className="text-stone-500">t1 (Tick counter):</span>
              <span className="text-stone-800 font-bold">140,291.12 ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">t2 (After NTP adjustment):</span>
              <span className="text-emerald-700 font-bold">140,341.12 ms (Steady forward)</span>
            </div>
            <div className="pt-2 border-t border-stone-200 flex justify-between font-bold">
              <span>Measured Elapsed:</span>
              <span className="text-emerald-700">+50.00 ms (100% accurate)</span>
            </div>
          </div>
          <span className="block mt-2 text-[10px] text-stone-500 italic">
            *Always use monotonic clocks for timeouts, request deadlines, latency timers, and retries.
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Diagram 3: Lamport Logical Clocks vs. Vector Clocks
 * Shows event ordering between 3 processes (A, B, C) with message passing and causality resolution
 */
export function LogicalClocksDiagram() {
  const [selectedClockType, setSelectedClockType] = useState("vector"); // "lamport" | "vector"

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 3
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Logical Clocks &amp; Causality: Lamport vs. Vector Clocks
          </h4>
        </div>
        <div className="flex rounded-lg border border-stone-200 bg-stone-50 p-0.5 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setSelectedClockType("lamport")}
            className={`px-3 py-1 rounded-md transition cursor-pointer ${
              selectedClockType === "lamport"
                ? "bg-white text-orange-600 shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Lamport Scalar Clocks (1978)
          </button>
          <button
            type="button"
            onClick={() => setSelectedClockType("vector")}
            className={`px-3 py-1 rounded-md transition cursor-pointer ${
              selectedClockType === "vector"
                ? "bg-white text-orange-600 shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Vector Clocks (Concurrency Detection)
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs font-mono">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Process A */}
          <div className="p-3 rounded-lg border border-stone-200 bg-white">
            <span className="font-bold text-stone-900 block mb-2">Process A (API Server)</span>
            <div className="space-y-2 text-[11px]">
              <div className="p-2 rounded bg-stone-50 border border-stone-200">
                <span className="text-stone-500 block">Event a1: Create Submission</span>
                <span className="text-orange-600 font-bold">
                  {selectedClockType === "lamport" ? "L(a1) = 1" : "V(a1) = [1, 0, 0]"}
                </span>
              </div>
              <div className="p-2 rounded bg-stone-50 border border-stone-200">
                <span className="text-stone-500 block">Event a2: Send message to B</span>
                <span className="text-orange-600 font-bold">
                  {selectedClockType === "lamport" ? "L(a2) = 2" : "V(a2) = [2, 0, 0]"}
                </span>
              </div>
            </div>
          </div>

          {/* Process B */}
          <div className="p-3 rounded-lg border border-stone-200 bg-white">
            <span className="font-bold text-stone-900 block mb-2">Process B (Evaluation Worker)</span>
            <div className="space-y-2 text-[11px]">
              <div className="p-2 rounded bg-stone-50 border border-stone-200">
                <span className="text-stone-500 block">Event b1: Receive from A</span>
                <span className="text-orange-600 font-bold">
                  {selectedClockType === "lamport" ? "L(b1) = max(0, 2)+1 = 3" : "V(b1) = [2, 1, 0]"}
                </span>
              </div>
              <div className="p-2 rounded bg-stone-50 border border-stone-200">
                <span className="text-stone-500 block">Event b2: Store AI Score</span>
                <span className="text-orange-600 font-bold">
                  {selectedClockType === "lamport" ? "L(b2) = 4" : "V(b2) = [2, 2, 0]"}
                </span>
              </div>
            </div>
          </div>

          {/* Process C */}
          <div className="p-3 rounded-lg border border-stone-200 bg-white">
            <span className="font-bold text-stone-900 block mb-2">Process C (Analytics Audit)</span>
            <div className="space-y-2 text-[11px]">
              <div className="p-2 rounded bg-stone-50 border border-stone-200">
                <span className="text-stone-500 block">Event c1: Independent Log</span>
                <span className="text-orange-600 font-bold">
                  {selectedClockType === "lamport" ? "L(c1) = 1" : "V(c1) = [0, 0, 1]"}
                </span>
              </div>
              <div className="p-2 rounded bg-stone-50 border border-stone-200">
                <span className="text-stone-500 block">Event c2: Hourly Rollup</span>
                <span className="text-orange-600 font-bold">
                  {selectedClockType === "lamport" ? "L(c2) = 2" : "V(c2) = [0, 0, 2]"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison analysis */}
        <div className="mt-4 pt-3 border-t border-stone-200/80 text-stone-700 font-sans text-xs">
          {selectedClockType === "lamport" ? (
            <p>
              <strong>Lamport Limitation:</strong> If \(a \rightarrow b\), then \(L(a) &lt; L(b)\). But \(L(c2) = 2 &lt; L(b1) = 3\) does <em>not</em> prove that c2 caused b1! Lamport clocks guarantee partial order consistency, but cannot detect whether two events were completely independent and concurrent.
            </p>
          ) : (
            <p>
              <strong>Vector Clock Superiority:</strong> Comparing \(V(b2) = [2, 2, 0]\) and \(V(c2) = [0, 0, 2]\), neither vector dominates the other. Vector clocks definitively establish that event b2 and c2 are <strong>CONCURRENT</strong> (\(b2 \parallel c2\)), allowing distributed data stores to detect conflicting writes without silent overwrites.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Diagram 4: Exponential Backoff with Full Jitter vs. Thundering Herd
 * Visualizes 1,000 retrying clients with synchronized backoff vs. randomized full jitter
 */
export function ExponentialBackoffJitterDiagram() {
  const [jitterMode, setJitterMode] = useState("full-jitter"); // "no-jitter" | "full-jitter"

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 4
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Exponential Backoff &amp; Full Jitter vs. Thundering Herd
          </h4>
        </div>
        <div className="flex rounded-lg border border-stone-200 bg-stone-50 p-0.5 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setJitterMode("no-jitter")}
            className={`px-3 py-1 rounded-md transition cursor-pointer ${
              jitterMode === "no-jitter"
                ? "bg-white text-orange-600 shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            No Jitter (Synchronized Waves)
          </button>
          <button
            type="button"
            onClick={() => setJitterMode("full-jitter")}
            className={`px-3 py-1 rounded-md transition cursor-pointer ${
              jitterMode === "full-jitter"
                ? "bg-white text-orange-600 shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Full Jitter (AWS Best Practice)
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs font-mono">
        <div className="flex justify-between items-center mb-3 pb-2 border-b border-stone-200 text-stone-700">
          <span>Simulation: <strong>1,000 Concurrent Clients</strong> Retrying Transient 503</span>
          <span className={jitterMode === "full-jitter" ? "text-emerald-700 font-bold" : "text-red-600 font-bold"}>
            {jitterMode === "full-jitter" ? "Traffic Uniformly Distributed" : "Severe Periodic Spike Waves"}
          </span>
        </div>

        {/* Retry Intervals Timeline */}
        <div className="space-y-3">
          {[
            { attempt: 1, baseMs: 200, label: "Attempt 1 (Base: 200ms)" },
            { attempt: 2, baseMs: 400, label: "Attempt 2 (Base: 400ms)" },
            { attempt: 3, baseMs: 800, label: "Attempt 3 (Base: 800ms)" },
          ].map((step) => (
            <div key={step.attempt} className="p-3 rounded-lg border border-stone-200 bg-white">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-stone-900">{step.label}</span>
                <span className="text-[10px] text-stone-500">
                  {jitterMode === "no-jitter"
                    ? `All 1,000 clients fire at exact t = ${step.baseMs}ms`
                    : `Randomized uniform spread U(0, ${step.baseMs}ms)`}
                </span>
              </div>
              <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden my-2 relative">
                {jitterMode === "no-jitter" ? (
                  <div
                    className="absolute h-full w-2 bg-red-600 rounded-full right-4 animate-ping"
                    title="1,000 synchronized requests concentrated in 1ms window"
                  />
                ) : (
                  <div
                    className="h-full bg-emerald-500/60 rounded-full"
                    style={{ width: "100%" }}
                    title="Smoothly distributed retry load"
                  />
                )}
              </div>
              <div className="flex justify-between text-[10px] text-stone-500 font-sans">
                <span>Peak Load: {jitterMode === "no-jitter" ? "1,000 RPS (Instant Spike)" : "~120 RPS (Safe)"}</span>
                <span>
                  {jitterMode === "no-jitter" ? "Downstream crashes again" : "Downstream absorbs retries safely"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] font-sans text-stone-600">
          <strong>Full Jitter Formula:</strong>{" "}
          <code>sleep = rand(0, min(max_delay, base_delay * 2^attempt))</code>. This breaks the synchronization of retrying clients, transforming destructive square-wave traffic spikes into smooth, manageable request streams.
        </div>
      </div>
    </div>
  );
}

/**
 * Diagram 5: Circuit Breaker State Machine
 * Interactive state transitions: Closed -> Open -> Half-Open
 */
export function CircuitBreakerDiagram() {
  const [breakerState, setBreakerState] = useState("closed"); // "closed" | "open" | "half-open"
  const [failureCount, setFailureCount] = useState(0);

  const simulateFailure = () => {
    const next = failureCount + 1;
    setFailureCount(next);
    if (next >= 3) {
      setBreakerState("open");
    }
  };

  const simulateSuccess = () => {
    setFailureCount(0);
    setBreakerState("closed");
  };

  const simulateTimeout = () => {
    setBreakerState("half-open");
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 5
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Circuit Breaker State Machine (Closed &rarr; Open &rarr; Half-Open)
          </h4>
        </div>
        <div className="flex items-center gap-2">
          {breakerState === "closed" && (
            <button
              type="button"
              onClick={simulateFailure}
              className="px-3 py-1 bg-red-50 text-red-700 border border-red-200 rounded-lg text-xs font-bold hover:bg-red-100 transition cursor-pointer"
            >
              Inject Dependency Failure ({failureCount}/3)
            </button>
          )}
          {breakerState === "open" && (
            <button
              type="button"
              onClick={simulateTimeout}
              className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-lg text-xs font-bold hover:bg-amber-100 transition cursor-pointer"
            >
              Wait Recovery Interval (5s) &rarr; Half-Open
            </button>
          )}
          {breakerState === "half-open" && (
            <>
              <button
                type="button"
                onClick={simulateSuccess}
                className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-bold hover:bg-emerald-100 transition cursor-pointer"
              >
                Probe Succeeded &rarr; Close
              </button>
              <button
                type="button"
                onClick={() => setBreakerState("open")}
                className="px-3 py-1 bg-red-50 text-red-700 border border-red-200 rounded-lg text-xs font-bold hover:bg-red-100 transition cursor-pointer"
              >
                Probe Failed &rarr; Open
              </button>
            </>
          )}
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* State: CLOSED */}
          <div
            className={`p-4 rounded-xl border transition ${
              breakerState === "closed"
                ? "border-emerald-400 bg-white shadow-md ring-2 ring-emerald-500/20"
                : "border-stone-200 bg-stone-50/50 opacity-40"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-emerald-800">State: CLOSED</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                NORMAL
              </span>
            </div>
            <p className="text-[11px] text-stone-600 mb-2">
              All requests flow to the downstream dependency. Latency and failures are tracked in a sliding window.
            </p>
            <div className="text-[10px] font-mono text-stone-500">
              Consecutive Failures: {failureCount} / 3 threshold
            </div>
          </div>

          {/* State: OPEN */}
          <div
            className={`p-4 rounded-xl border transition ${
              breakerState === "open"
                ? "border-red-400 bg-white shadow-md ring-2 ring-red-500/20"
                : "border-stone-200 bg-stone-50/50 opacity-40"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-red-800">State: OPEN</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-100 text-red-800 font-bold">
                FAIL FAST
              </span>
            </div>
            <p className="text-[11px] text-stone-600 mb-2">
              Requests immediately fail or return a fallback without contacting the downstream service, saving network threads.
            </p>
            <div className="text-[10px] font-mono text-red-600 font-bold">
              Downstream Protected from Load
            </div>
          </div>

          {/* State: HALF-OPEN */}
          <div
            className={`p-4 rounded-xl border transition ${
              breakerState === "half-open"
                ? "border-amber-400 bg-white shadow-md ring-2 ring-amber-500/20"
                : "border-stone-200 bg-stone-50/50 opacity-40"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-800">State: HALF-OPEN</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">
                CANARY PROBE
              </span>
            </div>
            <p className="text-[11px] text-stone-600 mb-2">
              Allows a limited canary trial of 1–3 requests to test whether the downstream dependency has genuinely recovered.
            </p>
            <div className="text-[10px] font-mono text-amber-700">
              Awaiting Canary Test Result
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-stone-200 text-xs text-stone-600">
          <strong>Key Engineering Rule:</strong> Retries and Circuit Breakers are complementary. Retries help with <em>transient</em> blips (e.g. 1 dropped packet); Circuit Breakers protect the system during <em>persistent</em> outages by cutting off traffic completely before threads exhaust.
        </div>
      </div>
    </div>
  );
}

/**
 * Main Visual Dispatcher for Module 9
 */
export function VisualDiagramComponentModule9({ diagramType }) {
  switch (diagramType) {
    case "request-dilemma":
      return <DistributedRequestDilemmaDiagram />;
    case "clocks-drift":
      return <ClockDriftMonotonicDiagram />;
    case "logical-clocks":
      return <LogicalClocksDiagram />;
    case "backoff-jitter":
      return <ExponentialBackoffJitterDiagram />;
    case "circuit-breaker":
      return <CircuitBreakerDiagram />;
    default:
      return <DistributedRequestDilemmaDiagram />;
  }
}
