import React, { useState, useEffect } from "react";
import {
  Server,
  Database,
  Radio,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Layers,
  Clock,
  Zap,
  Cpu,
  ShieldCheck,
  ShieldAlert,
  Send,
  Workflow,
  Sparkles,
  Inbox,
  Filter,
  Lock,
  Unlock,
  Key,
  Flame,
  FileText,
  RefreshCw,
  Sliders,
  Activity,
  Network,
  Scale,
} from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 1: LAYER 4 VS LAYER 7 LOAD BALANCING & REVERSE PROXY ROUTING
 * Demonstrates the routing difference between transport-level TCP stream proxying
 * (L4) and application-aware HTTP path/header routing (L7).
 * ---------------------------------------------------------------------------
 */
export function Layer4VsLayer7Diagram() {
  const [selectedLayer, setSelectedLayer] = useState("L7"); // "L4" | "L7"
  const [activePath, setActivePath] = useState("/api/ai/evaluate"); // "/api/ai/evaluate" | "/api/reports" | "/api/catalog"

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Load Balancer Topology
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Layer 4 (Transport) vs. Layer 7 (Application) Routing
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedLayer("L4")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              selectedLayer === "L4"
                ? "bg-stone-900 text-white"
                : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
            }`}
          >
            Layer 4 (TCP / IP)
          </button>
          <button
            type="button"
            onClick={() => setSelectedLayer("L7")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              selectedLayer === "L7"
                ? "bg-orange-600 text-white"
                : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
            }`}
          >
            Layer 7 (HTTP / API Path)
          </button>
        </div>
      </div>

      {/* Layer Description Banner */}
      <div className="mb-4 p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-700">
        {selectedLayer === "L4" ? (
          <div>
            <strong>Layer 4 Routing:</strong> Balancer inspects only IP packets and TCP/UDP ports (e.g. <code>192.168.1.50:443</code>).
            It cannot inspect HTTP paths, cookies, or headers. Distributes raw TCP connection streams uniformly across instances.
          </div>
        ) : (
          <div>
            <strong>Layer 7 Routing:</strong> Balancer terminates TLS, parses the full HTTP request, and inspects URL paths,
            headers, and authorization tokens to route requests to specialized backend microservice pools.
          </div>
        )}
      </div>

      {/* Interactive Path Selector for L7 */}
      {selectedLayer === "L7" && (
        <div className="mb-4 flex items-center gap-2 flex-wrap text-xs">
          <span className="font-bold text-stone-700">Test Request URL:</span>
          {["/api/ai/evaluate", "/api/reports/generate", "/api/catalog/courses"].map((path) => (
            <button
              key={path}
              type="button"
              onClick={() => setActivePath(path)}
              className={`px-2.5 py-1 rounded-lg font-mono text-[11px] font-bold transition cursor-pointer ${
                activePath === path
                  ? "bg-orange-100 border border-orange-300 text-orange-900"
                  : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50"
              }`}
            >
              {path}
            </button>
          ))}
        </div>
      )}

      {/* Diagram Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Step 1: Client & Ingress */}
        <div className="p-4 rounded-xl border border-stone-200 bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-xs text-stone-900">1. Client Request</span>
              <Network size={16} className="text-stone-500" />
            </div>
            <div className="p-2.5 rounded-lg bg-stone-900 text-stone-100 font-mono text-[10px] space-y-1">
              <div>HOST: api.prepspaces.io</div>
              {selectedLayer === "L4" ? (
                <div className="text-amber-300">TCP SYN [sport: 51204, dport: 443]</div>
              ) : (
                <div className="text-orange-400">POST {activePath} HTTP/1.1</div>
              )}
            </div>
          </div>
          <div className="mt-3 text-[11px] text-stone-500">
            Arrives at public edge IP (Anycast / Cloudflare CDN).
          </div>
        </div>

        {/* Step 2: Load Balancer Decision */}
        <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-xs text-orange-950">
                2. {selectedLayer === "L4" ? "Network Load Balancer (NLB)" : "Application Load Balancer (ALB)"}
              </span>
              <Scale size={16} className="text-orange-600" />
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-orange-200 font-mono text-[10px] space-y-1 text-stone-800">
              {selectedLayer === "L4" ? (
                <>
                  <div className="text-stone-500">// Hash 5-tuple: (SIP, DIP, Sport, Dport, Proto)</div>
                  <div className="font-bold text-stone-900">Target: Backend Node 2 (TCP Stream)</div>
                </>
              ) : (
                <>
                  <div className="text-stone-500">// Inspect HTTP Request Path</div>
                  {activePath.includes("ai") && (
                    <div className="font-bold text-purple-700">&rarr; Route to AI GPU Cluster</div>
                  )}
                  {activePath.includes("reports") && (
                    <div className="font-bold text-blue-700">&rarr; Route to Report Worker Fleet</div>
                  )}
                  {activePath.includes("catalog") && (
                    <div className="font-bold text-emerald-700">&rarr; Route to Redis / Read Replica</div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="mt-3 text-[11px] text-stone-600">
            {selectedLayer === "L4"
              ? "Zero HTTP parsing latency (~0.1ms). Blind to application semantics."
              : "Smart content-based routing, header rewrites, SSL termination & rate limiting."}
          </div>
        </div>

        {/* Step 3: Destination Backend Pool */}
        <div className="p-4 rounded-xl border border-stone-200 bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-xs text-stone-900">3. Target Destination</span>
              <Server size={16} className="text-stone-500" />
            </div>
            <div className="space-y-2 text-[11px]">
              {selectedLayer === "L4" ? (
                <div className="p-2 rounded bg-stone-50 border border-stone-200 text-stone-700">
                  Instance <strong>app-node-02</strong> receives raw TCP stream. Must process TLS and route internally.
                </div>
              ) : (
                <>
                  <div
                    className={`p-2 rounded border transition ${
                      activePath.includes("ai")
                        ? "bg-purple-50 border-purple-300 text-purple-900 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-400"
                    }`}
                  >
                    AI Service (GPU Node pool)
                  </div>
                  <div
                    className={`p-2 rounded border transition ${
                      activePath.includes("reports")
                        ? "bg-blue-50 border-blue-300 text-blue-900 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-400"
                    }`}
                  >
                    Report Workers (CPU-intensive cluster)
                  </div>
                  <div
                    className={`p-2 rounded border transition ${
                      activePath.includes("catalog")
                        ? "bg-emerald-50 border-emerald-300 text-emerald-900 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-400"
                    }`}
                  >
                    Course Catalog (Cached read replicas)
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="mt-3 text-[11px] text-stone-500">
            Workload matched to specialized server capacity.
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 2: TOKEN BUCKET VS. LEAKY BUCKET VISUALIZER
 * Demonstrates burst absorption and steady refill of the Token Bucket algorithm
 * alongside the smoothing behavior of the Leaky Bucket.
 * ---------------------------------------------------------------------------
 */
export function TokenBucketLifecycleDiagram() {
  const [tokens, setTokens] = useState(15);
  const maxCapacity = 20;
  const refillRate = 2; // tokens per second
  const [admitCount, setAdmitCount] = useState(0);
  const [rejectCount, setRejectCount] = useState(0);
  const [lastAction, setLastAction] = useState("System idle. Ready to process traffic.");

  // Automatic token refill simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTokens((prev) => Math.min(maxCapacity, prev + refillRate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleConsume = (count) => {
    if (tokens >= count) {
      setTokens((prev) => prev - count);
      setAdmitCount((prev) => prev + count);
      setLastAction(`Admitted burst of ${count} request(s). ${tokens - count} tokens remaining.`);
    } else {
      const allowed = tokens;
      const rejected = count - allowed;
      setTokens(0);
      setAdmitCount((prev) => prev + allowed);
      setRejectCount((prev) => prev + rejected);
      setLastAction(
        `Bucket exhausted! Admitted ${allowed}, Rejected ${rejected} requests with HTTP 429 Too Many Requests (Retry-After: 1s).`
      );
    }
  };

  const resetBucket = () => {
    setTokens(20);
    setAdmitCount(0);
    setRejectCount(0);
    setLastAction("Bucket reset to full capacity (20 tokens).");
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Rate Limiting Algorithm
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Token Bucket: Controlled Burst Capacity &amp; Refill Mechanics
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={resetBucket}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 transition cursor-pointer"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Visual Bucket Gauge */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="p-4 rounded-xl border border-stone-200 bg-white">
          <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block mb-1">
            Current Token Supply
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-stone-900 font-mono">{tokens}</span>
            <span className="text-xs text-stone-500 font-mono">/ {maxCapacity} tokens</span>
          </div>
          {/* Visual Bar */}
          <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden mt-3 border border-stone-200">
            <div
              className={`h-full transition-all duration-300 ${
                tokens > 5 ? "bg-emerald-500" : tokens > 0 ? "bg-amber-500" : "bg-red-500"
              }`}
              style={{ width: `${(tokens / maxCapacity) * 100}%` }}
            />
          </div>
          <span className="text-[10px] text-stone-400 block mt-2">
            Refill: +{refillRate} tokens/sec (Auto-ticks every 1s)
          </span>
        </div>

        <div className="p-4 rounded-xl border border-stone-200 bg-white">
          <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block mb-1">
            Traffic Statistics
          </span>
          <div className="space-y-1 mt-2 text-xs">
            <div className="flex justify-between">
              <span className="text-stone-600">Admitted (200 OK):</span>
              <strong className="text-emerald-700 font-mono">{admitCount}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600">Throttled (429):</span>
              <strong className="text-red-700 font-mono">{rejectCount}</strong>
            </div>
            <div className="flex justify-between pt-1 border-t border-stone-100">
              <span className="text-stone-600">Burst Allowance:</span>
              <span className="font-mono text-stone-800">20 reqs</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-stone-200 bg-white flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block mb-1">
              Fire Request Bursts
            </span>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <button
                type="button"
                onClick={() => handleConsume(1)}
                className="py-1.5 px-2 rounded-lg bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition cursor-pointer"
              >
                +1 Req
              </button>
              <button
                type="button"
                onClick={() => handleConsume(5)}
                className="py-1.5 px-2 rounded-lg bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer"
              >
                +5 Burst
              </button>
              <button
                type="button"
                onClick={() => handleConsume(12)}
                className="py-1.5 px-2 rounded-lg bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition cursor-pointer"
              >
                +12 Flood
              </button>
            </div>
          </div>
          <span className="text-[10px] text-stone-400 block mt-2">
            Click to simulate instant client burst traffic.
          </span>
        </div>
      </div>

      {/* Real-time Status Banner */}
      <div
        className={`p-3 rounded-xl border text-xs font-mono ${
          lastAction.includes("Rejected")
            ? "bg-red-50 border-red-200 text-red-900"
            : lastAction.includes("Admitted")
            ? "bg-emerald-50 border-emerald-200 text-emerald-900"
            : "bg-stone-100 border-stone-200 text-stone-700"
        }`}
      >
        {lastAction}
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 3: CIRCUIT BREAKER FINITE STATE MACHINE (CLOSED, OPEN, HALF-OPEN)
 * Interactive state visualizer showing failure thresholds, cooldown timeouts,
 * trial canary calls, and automatic circuit recovery.
 * ---------------------------------------------------------------------------
 */
export function CircuitBreakerStateDiagram() {
  const [state, setState] = useState("CLOSED"); // "CLOSED" | "OPEN" | "HALF_OPEN"
  const [consecutiveFailures, setConsecutiveFailures] = useState(0);
  const failureThreshold = 3;
  const [log, setLog] = useState([
    "Circuit initialized in CLOSED state. Traffic flowing normally to AI Dependency.",
  ]);

  const handleSimulateCall = (success) => {
    if (state === "OPEN") {
      setLog((prev) => [
        `[BLOCKED FAST] Circuit is OPEN! Request failed immediately without touching AI provider (Fallback served).`,
        ...prev,
      ]);
      return;
    }

    if (state === "CLOSED") {
      if (success) {
        setConsecutiveFailures(0);
        setLog((prev) => [
          `[200 OK] AI Provider answered in 180ms. Consecutive failures reset to 0.`,
          ...prev,
        ]);
      } else {
        const nextFailures = consecutiveFailures + 1;
        setConsecutiveFailures(nextFailures);
        if (nextFailures >= failureThreshold) {
          setState("OPEN");
          setLog((prev) => [
            `[TRIPPED TO OPEN] ${nextFailures} consecutive timeouts reached! Circuit breaker opened to protect AI provider and prevent connection pool exhaustion.`,
            ...prev,
          ]);
        } else {
          setLog((prev) => [
            `[TIMEOUT 504] AI Provider call timed out (failure ${nextFailures}/${failureThreshold}).`,
            ...prev,
          ]);
        }
      }
    } else if (state === "HALF_OPEN") {
      if (success) {
        setState("CLOSED");
        setConsecutiveFailures(0);
        setLog((prev) => [
          `[RECOVERED] Trial probe request succeeded! Circuit breaker returned to CLOSED state.`,
          ...prev,
        ]);
      } else {
        setState("OPEN");
        setLog((prev) => [
          `[PROBE FAILED] Trial probe request failed. Circuit immediately tripped back to OPEN state for another cooldown period.`,
          ...prev,
        ]);
      }
    }
  };

  const simulateCooldown = () => {
    if (state === "OPEN") {
      setState("HALF_OPEN");
      setLog((prev) => [
        `[COOLDOWN EXPIRED] 30s cooldown elapsed. Circuit transitioned to HALF-OPEN. Permitting 1 trial request to probe health.`,
        ...prev,
      ]);
    }
  };

  const resetBreaker = () => {
    setState("CLOSED");
    setConsecutiveFailures(0);
    setLog(["Circuit reset to CLOSED state."]);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Fault Tolerance Pattern
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Circuit Breaker: CLOSED &rarr; OPEN &rarr; HALF-OPEN State Machine
          </h4>
        </div>
        <button
          type="button"
          onClick={resetBreaker}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 transition cursor-pointer"
        >
          <RotateCcw size={13} />
          <span>Reset</span>
        </button>
      </div>

      {/* 3 State Visual Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* State 1: CLOSED */}
        <div
          className={`p-4 rounded-xl border transition ${
            state === "CLOSED"
              ? "bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500 shadow-xs"
              : "bg-white border-stone-200 opacity-60"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-emerald-950">1. CLOSED (Normal)</span>
            <ShieldCheck size={16} className="text-emerald-600" />
          </div>
          <p className="text-xs text-stone-600 leading-relaxed mb-2">
            Requests pass through directly to downstream service. Failure count is tracked against threshold.
          </p>
          <div className="text-[11px] font-mono text-stone-700">
            Failures: <strong>{consecutiveFailures} / {failureThreshold}</strong>
          </div>
        </div>

        {/* State 2: OPEN */}
        <div
          className={`p-4 rounded-xl border transition ${
            state === "OPEN"
              ? "bg-red-50 border-red-300 ring-2 ring-red-500 shadow-xs"
              : "bg-white border-stone-200 opacity-60"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-red-950">2. OPEN (Failing Fast)</span>
            <ShieldAlert size={16} className="text-red-600" />
          </div>
          <p className="text-xs text-stone-600 leading-relaxed mb-2">
            All calls fail fast immediately or return graceful fallbacks. Prevents cascading collapse.
          </p>
          <button
            type="button"
            onClick={simulateCooldown}
            disabled={state !== "OPEN"}
            className="w-full py-1 rounded bg-red-600 text-white text-[11px] font-bold hover:bg-red-700 disabled:opacity-30 cursor-pointer"
          >
            Simulate Cooldown Expiry &rarr;
          </button>
        </div>

        {/* State 3: HALF_OPEN */}
        <div
          className={`p-4 rounded-xl border transition ${
            state === "HALF_OPEN"
              ? "bg-amber-50 border-amber-300 ring-2 ring-amber-500 shadow-xs"
              : "bg-white border-stone-200 opacity-60"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-amber-950">3. HALF-OPEN (Testing)</span>
            <Activity size={16} className="text-amber-600" />
          </div>
          <p className="text-xs text-stone-600 leading-relaxed mb-2">
            Allows a limited trial request. If it succeeds, circuit resets to CLOSED. If it fails, trips back to OPEN.
          </p>
          <div className="text-[11px] text-amber-800 font-bold">
            Status: {state === "HALF_OPEN" ? "Awaiting Canary Probe" : "Idle"}
          </div>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-2 mb-4">
        <button
          type="button"
          onClick={() => handleSimulateCall(true)}
          className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition cursor-pointer"
        >
          Send Successful Request (200 OK)
        </button>
        <button
          type="button"
          onClick={() => handleSimulateCall(false)}
          className="flex-1 py-2 px-3 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition cursor-pointer"
        >
          Inject Downstream Failure / Timeout (504)
        </button>
      </div>

      {/* Circuit Logs */}
      <div className="rounded-xl bg-stone-900 p-3 text-stone-100 font-mono text-[11px] max-h-32 overflow-y-auto space-y-1">
        {log.map((entry, idx) => (
          <div
            key={idx}
            className={`${
              entry.includes("[TRIPPED")
                ? "text-red-400 font-bold"
                : entry.includes("[RECOVERED]")
                ? "text-emerald-400 font-bold"
                : entry.includes("[BLOCKED")
                ? "text-amber-300"
                : "text-stone-300"
            }`}
          >
            {entry}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DISPATCHER COMPONENT FOR MODULE 14 DIAGRAMS
 * ---------------------------------------------------------------------------
 */
export function VisualDiagramComponentModule14({ diagramId }) {
  switch (diagramId) {
    case "layer4-vs-layer7":
      return <Layer4VsLayer7Diagram />;
    case "token-bucket":
      return <TokenBucketLifecycleDiagram />;
    case "circuit-breaker":
      return <CircuitBreakerStateDiagram />;
    default:
      return <Layer4VsLayer7Diagram />;
  }
}
