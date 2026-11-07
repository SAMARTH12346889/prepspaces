import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Shield,
  Layers,
  Play,
  RotateCcw,
  Zap,
  Server,
  Lock,
  AlertTriangle,
  CheckCircle2,
  XCircle
} from "lucide-react";

/**
 * 1. Token Bucket Rate Limiter Simulator
 * Interactive mathematical simulator of T_new = min(C, T_old + r * Delta_t)
 */
export function TokenBucketRateLimiterSimulator() {
  const [capacity, setCapacity] = useState(10);
  const [refillRate, setRefillRate] = useState(2); // tokens per second
  const [tokens, setTokens] = useState(10);
  const [requestLog, setRequestLog] = useState([]);
  const [autoBurst, setAutoBurst] = useState(false);
  const lastRefillRef = useRef(0);

  // Initialize timestamp once on mount
  useEffect(() => {
    lastRefillRef.current = Date.now();
  }, []);

  // Refill loop
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const deltaSec = lastRefillRef.current > 0 ? (now - lastRefillRef.current) / 1000 : 0;
      setTokens((prev) => {
        const added = deltaSec * refillRate;
        return Math.min(capacity, prev + added);
      });
      lastRefillRef.current = now;
    }, 200);

    return () => clearInterval(interval);
  }, [capacity, refillRate]);

  const handleConsume = useCallback((cost = 1) => {
    const now = Date.now();
    const timestampStr = new Date(now).toLocaleTimeString();

    setTokens((currTokens) => {
      if (currTokens >= cost) {
        const newTokens = currTokens - cost;
        setRequestLog((prev) => [
          {
            id: Math.random(),
            time: timestampStr,
            status: 200,
            detail: `HTTP 200 OK — Consumed ${cost} token. Remaining: ${newTokens.toFixed(1)}`,
            allowed: true
          },
          ...prev.slice(0, 7)
        ]);
        return newTokens;
      } else {
        const retryAfterSec = Math.ceil((cost - currTokens) / refillRate);
        setRequestLog((prev) => [
          {
            id: Math.random(),
            time: timestampStr,
            status: 429,
            detail: `HTTP 429 Too Many Requests — Exhausted! Retry-After: ${retryAfterSec}s`,
            allowed: false
          },
          ...prev.slice(0, 7)
        ]);
        return currTokens;
      }
    });
  }, [refillRate]);

  // Auto burst simulation
  useEffect(() => {
    let burstInterval;
    if (autoBurst) {
      burstInterval = setInterval(() => {
        handleConsume(1);
      }, 350);
    }
    return () => clearInterval(burstInterval);
  }, [autoBurst, handleConsume]);

  const handleReset = () => {
    setTokens(capacity);
    lastRefillRef.current = Date.now();
    setRequestLog([]);
    setAutoBurst(false);
  };

  const fillPercentage = Math.min(100, Math.max(0, (tokens / capacity) * 100));

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-400" />
            Token Bucket Rate Limiter (T_new = min(C, T_old + r·Δt))
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Simulate Redis-backed atomic rate limiting with burst absorption and HTTP 429 Retry-After calculation.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoBurst(!autoBurst)}
            className={`px-3 py-1.5 text-xs rounded font-bold flex items-center gap-1.5 transition-all ${
              autoBurst
                ? "bg-red-600 hover:bg-red-500 text-white animate-pulse"
                : "bg-amber-600 hover:bg-amber-500 text-white"
            }`}
          >
            <Zap size={14} /> {autoBurst ? "Stop Auto-Traffic" : "Auto Traffic Stream"}
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 text-xs rounded bg-stone-800 hover:bg-stone-700 text-stone-300 font-medium flex items-center gap-1"
          >
            <RotateCcw size={14} /> Reset
          </button>
        </div>
      </div>

      {/* Sliders and Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 text-xs">
        <div className="p-3 bg-stone-950 rounded-lg border border-stone-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-stone-400">Max Bucket Capacity ($C$):</span>
            <span className="font-mono text-amber-400 font-bold">{capacity} tokens</span>
          </div>
          <input
            type="range"
            min={5}
            max={30}
            step={1}
            value={capacity}
            onChange={(e) => {
              const val = Number(e.target.value);
              setCapacity(val);
              if (tokens > val) setTokens(val);
            }}
            className="w-full accent-amber-500"
          />
        </div>

        <div className="p-3 bg-stone-950 rounded-lg border border-stone-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-stone-400">Refill Rate ($r$):</span>
            <span className="font-mono text-emerald-400 font-bold">{refillRate} tokens / sec</span>
          </div>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            value={refillRate}
            onChange={(e) => setRefillRate(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
        </div>
      </div>

      {/* Bucket Gauge and Dispatcher */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Bucket Visualization */}
        <div className="md:col-span-5 p-4 bg-stone-950 rounded-xl border border-stone-800 flex flex-col items-center">
          <span className="text-xs text-stone-400 font-mono mb-2 uppercase tracking-wider">
            Token Reservoir
          </span>
          <div className="w-32 h-44 border-2 border-stone-700 rounded-b-2xl relative overflow-hidden bg-stone-900/60 shadow-inner flex flex-col justify-end">
            <div
              className={`w-full transition-all duration-200 ${
                tokens < 1
                  ? "bg-red-500/80"
                  : tokens < 3
                  ? "bg-amber-500/80"
                  : "bg-emerald-500/80"
              }`}
              style={{ height: `${fillPercentage}%` }}
            >
              <div className="w-full h-2 bg-white/30 animate-pulse"></div>
            </div>
          </div>
          <div className="mt-3 font-mono text-sm font-bold text-white">
            {tokens.toFixed(1)} / {capacity} <span className="text-xs text-stone-400 font-normal">tokens</span>
          </div>
        </div>

        {/* Action Controls & Dispatch Buttons */}
        <div className="md:col-span-7 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleConsume(1)}
              className="p-3 bg-stone-800 hover:bg-stone-700 active:scale-95 text-stone-100 rounded-lg text-xs font-bold border border-stone-700 flex flex-col items-center gap-1"
            >
              <Play size={14} className="text-emerald-400" />
              <span>Send 1 Req</span>
              <span className="text-[10px] text-stone-400 font-mono">1 Token</span>
            </button>
            <button
              onClick={() => handleConsume(3)}
              className="p-3 bg-stone-800 hover:bg-stone-700 active:scale-95 text-stone-100 rounded-lg text-xs font-bold border border-stone-700 flex flex-col items-center gap-1"
            >
              <Zap size={14} className="text-amber-400" />
              <span>AI Prompt</span>
              <span className="text-[10px] text-stone-400 font-mono">3 Tokens</span>
            </button>
            <button
              onClick={() => handleConsume(6)}
              className="p-3 bg-stone-800 hover:bg-stone-700 active:scale-95 text-stone-100 rounded-lg text-xs font-bold border border-stone-700 flex flex-col items-center gap-1"
            >
              <AlertTriangle size={14} className="text-rose-400" />
              <span>Burst (6 Req)</span>
              <span className="text-[10px] text-stone-400 font-mono">6 Tokens</span>
            </button>
          </div>

          {/* Telemetry Stream Output */}
          <div className="p-3 bg-stone-950 rounded-lg border border-stone-800 font-mono text-xs min-h-[140px] max-h-[160px] overflow-y-auto space-y-1">
            <div className="text-[10px] text-stone-500 uppercase tracking-wider pb-1 border-b border-stone-800">
              API Request Telemetry (Redis Lua Counter)
            </div>
            {requestLog.length === 0 ? (
              <div className="text-stone-600 italic pt-6 text-center">
                Click a button above to dispatch requests through the rate limiter...
              </div>
            ) : (
              requestLog.map((log) => (
                <div
                  key={log.id}
                  className={`flex items-center justify-between text-[11px] p-1 rounded ${
                    log.allowed ? "text-emerald-300 bg-emerald-950/20" : "text-rose-300 bg-rose-950/30"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {log.allowed ? (
                      <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                    ) : (
                      <XCircle size={12} className="text-rose-400 shrink-0" />
                    )}
                    <span>{log.detail}</span>
                  </span>
                  <span className="text-[10px] text-stone-500">{log.time}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. Async Event Loop Concurrency Simulator
 * Visualizes non-blocking asyncio cooperative scheduling vs synchronous blocking
 */
export function AsyncEventLoopConcurrencySimulator() {
  const [mode, setMode] = useState("async"); // "sync" or "async"
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState({
    auth: 0,
    db: 0,
    llm: 0,
    file: 0
  });
  const [totalTimeMs, setTotalTimeMs] = useState(0);

  const timerRef = useRef(null);

  const tasks = [
    { id: "auth", name: "1. Token JWT Verification", duration: 150, color: "bg-sky-500" },
    { id: "db", name: "2. PostgreSQL Query (User Profile)", duration: 350, color: "bg-emerald-500" },
    { id: "llm", name: "3. Upstream LLM Stream Call (Gemini/Groq)", duration: 900, color: "bg-amber-500" },
    { id: "file", name: "4. Resume PDF Parse (S3/Disk)", duration: 450, color: "bg-purple-500" }
  ];

  const handleStartSimulation = () => {
    setIsRunning(true);
    setProgress({ auth: 0, db: 0, llm: 0, file: 0 });
    setTotalTimeMs(0);

    const startTime = Date.now();

    if (mode === "sync") {
      // Synchronous execution: sequential blocking
      let elapsed = 0;
      let currentIdx = 0;

      const runSyncStep = () => {
        if (currentIdx >= tasks.length) {
          setIsRunning(false);
          setTotalTimeMs(elapsed);
          return;
        }

        const task = tasks[currentIdx];
        setProgress((prev) => ({ ...prev, [task.id]: 100 }));
        elapsed += task.duration;
        currentIdx += 1;
        timerRef.current = setTimeout(runSyncStep, task.duration / 3);
      };

      runSyncStep();
    } else {
      // Asynchronous execution: concurrent cooperative waiting
      const maxDuration = Math.max(...tasks.map((t) => t.duration));
      const stepInterval = 30;
      let elapsedSimTime = 0;

      timerRef.current = setInterval(() => {
        elapsedSimTime += stepInterval * 3;

        setProgress({
          auth: Math.min(100, Math.round((elapsedSimTime / 150) * 100)),
          db: Math.min(100, Math.round((elapsedSimTime / 350) * 100)),
          llm: Math.min(100, Math.round((elapsedSimTime / 900) * 100)),
          file: Math.min(100, Math.round((elapsedSimTime / 450) * 100))
        });

        if (elapsedSimTime >= maxDuration) {
          clearInterval(timerRef.current);
          setIsRunning(false);
          setTotalTimeMs(Date.now() - startTime + maxDuration);
        }
      }, stepInterval);
    }
  };

  const handleReset = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      clearInterval(timerRef.current);
    }
    setIsRunning(false);
    setProgress({ auth: 0, db: 0, llm: 0, file: 0 });
    setTotalTimeMs(0);
  };

  const syncEstimatedTotal = tasks.reduce((sum, t) => sum + t.duration, 0); // 1850ms
  const asyncEstimatedTotal = Math.max(...tasks.map((t) => t.duration)); // 900ms

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-emerald-400" />
            Async Event Loop vs Synchronous Blocking Execution
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Compare sequential thread blocking with non-blocking cooperative coroutine scheduling across 4 typical AI I/O tasks.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-stone-950 p-1 rounded-lg border border-stone-800 text-xs">
            <button
              onClick={() => {
                setMode("sync");
                handleReset();
              }}
              className={`px-3 py-1 rounded font-bold transition-all ${
                mode === "sync" ? "bg-rose-700 text-white" : "text-stone-400 hover:text-white"
              }`}
            >
              Sync (def)
            </button>
            <button
              onClick={() => {
                setMode("async");
                handleReset();
              }}
              className={`px-3 py-1 rounded font-bold transition-all ${
                mode === "async" ? "bg-emerald-600 text-white" : "text-stone-400 hover:text-white"
              }`}
            >
              Async (async def)
            </button>
          </div>
          <button
            disabled={isRunning}
            onClick={handleStartSimulation}
            className="px-3 py-1.5 text-xs rounded bg-stone-100 hover:bg-white text-stone-900 font-bold flex items-center gap-1 disabled:opacity-40"
          >
            <Play size={14} /> Run
          </button>
        </div>
      </div>

      {/* Mode Comparison Banner */}
      <div className="grid grid-cols-2 gap-3 my-4 text-xs font-mono">
        <div
          className={`p-3 rounded-lg border ${
            mode === "sync"
              ? "bg-rose-950/40 border-rose-800 text-rose-200"
              : "bg-stone-950 border-stone-800 text-stone-500"
          }`}
        >
          <div className="font-bold uppercase text-[10px] mb-1">Synchronous (Blocking WSGI)</div>
          <div>Total Latency: ~{syncEstimatedTotal} ms (Sum of all tasks)</div>
          <div className="text-[11px] text-stone-400 mt-0.5">Single thread blocks on each I/O wait sequentially.</div>
        </div>
        <div
          className={`p-3 rounded-lg border ${
            mode === "async"
              ? "bg-emerald-950/40 border-emerald-800 text-emerald-200"
              : "bg-stone-950 border-stone-800 text-stone-500"
          }`}
        >
          <div className="font-bold uppercase text-[10px] mb-1">Asynchronous (FastAPI + ASGI)</div>
          <div>Total Latency: ~{asyncEstimatedTotal} ms (Max of longest task)</div>
          <div className="text-[11px] text-stone-400 mt-0.5">Event loop yields context during I/O wait, overlapping tasks.</div>
        </div>
      </div>

      {/* Concurrent Task Progress Bars */}
      <div className="space-y-3 p-4 bg-stone-950 rounded-xl border border-stone-800">
        {tasks.map((task) => {
          const pct = progress[task.id] || 0;
          return (
            <div key={task.id} className="text-xs">
              <div className="flex justify-between items-center mb-1 font-mono">
                <span className="text-stone-300 font-medium">{task.name}</span>
                <span className="text-stone-500">{task.duration} ms ({pct}%)</span>
              </div>
              <div className="w-full h-3 bg-stone-800 rounded-full overflow-hidden">
                <div
                  className={`h-full ${task.color} transition-all duration-100`}
                  style={{ width: `${pct}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Benchmark Summary Footer */}
      <div className="mt-4 p-3 bg-stone-950 rounded-lg border border-stone-800 flex items-center justify-between text-xs font-mono">
        <span className="text-stone-400">Execution Status:</span>
        <span className="font-bold text-white">
          {isRunning ? (
            <span className="text-amber-400 animate-pulse">Running Tasks in {mode.toUpperCase()} Mode...</span>
          ) : totalTimeMs > 0 ? (
            <span className="text-emerald-400">Completed in ~{mode === "sync" ? syncEstimatedTotal : asyncEstimatedTotal} ms</span>
          ) : (
            <span className="text-stone-500">Ready to execute</span>
          )}
        </span>
      </div>
    </div>
  );
}

/**
 * 3. JWT Token Inspector & Tamper Simulator
 * Live debugger showing Header, Payload, Signature and cryptographic verification
 */
export function JwtTokenInspectorDebugger() {
  const [userId, setUserId] = useState("usr_student_101");
  const [role, setRole] = useState("student");
  const [tokenQuota, setTokenQuota] = useState(50000);
  const [isTampered, setIsTampered] = useState(false);

  // Construct mock JWT segments
  const headerObj = { alg: "HS256", typ: "JWT" };
  const payloadObj = {
    sub: userId,
    role: isTampered ? "admin" : role, // If tampered, attacker tries to escalate to admin!
    quotas: { daily_tokens: tokenQuota },
    iss: "prepspaces-auth",
    exp: 1794050000
  };

  const headerB64 = btoa(JSON.stringify(headerObj)).replace(/=/g, "");
  const payloadB64 = btoa(JSON.stringify(payloadObj)).replace(/=/g, "");
  const validSignatureB64 = "7A8kP9mQzWxL1nVoRtYu_E3dF6gH2jK4sA5";
  const signatureDisplay = isTampered ? "INVALID_UNMATCHED_SIGNATURE_HASH" : validSignatureB64;

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-rose-400" />
            JSON Web Token (JWT) Anatomy & Cryptographic Verification
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Inspect the 3 token segments (Header, Payload, Signature) and simulate what happens when an attacker tampers with claims.
          </p>
        </div>
        <div>
          <button
            onClick={() => setIsTampered(!isTampered)}
            className={`px-3 py-1.5 text-xs rounded font-bold flex items-center gap-1.5 transition-all ${
              isTampered
                ? "bg-red-600 text-white"
                : "bg-stone-800 hover:bg-stone-700 text-stone-300"
            }`}
          >
            <AlertTriangle size={14} className={isTampered ? "text-white" : "text-amber-400"} />
            {isTampered ? "Restore Original Payload" : "Simulate Payload Tampering (BOLA Attack)"}
          </button>
        </div>
      </div>

      {/* Claims Editor */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 text-xs">
        <div className="p-2.5 bg-stone-950 rounded-lg border border-stone-800">
          <label className="text-stone-400 block mb-1">Subject (User ID):</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full bg-stone-900 border border-stone-700 rounded px-2 py-1 text-white font-mono"
          />
        </div>
        <div className="p-2.5 bg-stone-950 rounded-lg border border-stone-800">
          <label className="text-stone-400 block mb-1">Assigned Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-stone-900 border border-stone-700 rounded px-2 py-1 text-white font-mono"
          >
            <option value="student">student</option>
            <option value="instructor">instructor</option>
            <option value="admin">admin</option>
          </select>
        </div>
        <div className="p-2.5 bg-stone-950 rounded-lg border border-stone-800">
          <label className="text-stone-400 block mb-1">Daily Token Budget:</label>
          <input
            type="number"
            value={tokenQuota}
            onChange={(e) => setTokenQuota(Number(e.target.value))}
            className="w-full bg-stone-900 border border-stone-700 rounded px-2 py-1 text-white font-mono"
          />
        </div>
      </div>

      {/* Raw JWT Token Display */}
      <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 my-4 font-mono text-xs break-all leading-relaxed">
        <div className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">
          Raw Encoded Token (HTTP Header: Authorization: Bearer &lt;token&gt;)
        </div>
        <span className="text-rose-400">{headerB64}</span>
        <span className="text-stone-600 font-bold">.</span>
        <span className="text-purple-400">{payloadB64}</span>
        <span className="text-stone-600 font-bold">.</span>
        <span className={isTampered ? "text-red-500 bg-red-950/60 px-1 rounded animate-pulse" : "text-sky-400"}>
          {signatureDisplay}
        </span>
      </div>

      {/* Decoded Segments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        {/* Header */}
        <div className="p-3 rounded-lg border border-rose-900/60 bg-rose-950/20">
          <span className="text-rose-400 font-bold block mb-1.5 uppercase text-[10px]">1. Header (Algorithm)</span>
          <pre className="text-stone-300 text-[11px] overflow-x-auto">
            {JSON.stringify(headerObj, null, 2)}
          </pre>
        </div>

        {/* Payload */}
        <div className="p-3 rounded-lg border border-purple-900/60 bg-purple-950/20">
          <span className="text-purple-400 font-bold block mb-1.5 uppercase text-[10px]">
            2. Payload (Claims) {isTampered && <span className="text-red-400 font-bold">(TAMPERED)</span>}
          </span>
          <pre className="text-stone-300 text-[11px] overflow-x-auto">
            {JSON.stringify(payloadObj, null, 2)}
          </pre>
        </div>

        {/* Signature Verification Status */}
        <div className="p-3 rounded-lg border border-sky-900/60 bg-sky-950/20 flex flex-col justify-between">
          <div>
            <span className="text-sky-400 font-bold block mb-1.5 uppercase text-[10px]">3. Verification Status</span>
            <p className="text-[11px] text-stone-400 leading-normal">
              HMACSHA256(Base64(Header) + "." + Base64(Payload), SECRET_KEY)
            </p>
          </div>
          <div className="mt-3">
            {isTampered ? (
              <div className="p-2 rounded bg-red-950 border border-red-700 text-red-200 text-xs font-bold flex items-center gap-1.5">
                <XCircle size={16} className="text-red-400 shrink-0" />
                <span>HTTP 401: Signature Mismatch!</span>
              </div>
            ) : (
              <div className="p-2 rounded bg-emerald-950 border border-emerald-700 text-emerald-200 text-xs font-bold flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Signature Valid &amp; Verified</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. SSE vs WebSocket Protocol Comparator
 * Interactive comparison between HTTP Request-Response, SSE, and WebSockets
 */
export function SseVsWebSocketProtocolComparator() {
  const [selectedProtocol, setSelectedProtocol] = useState("sse");

  const protocols = [
    {
      id: "http",
      name: "REST (HTTP Request-Response)",
      direction: "Unidirectional (Client -> Server -> Client)",
      connection: "Short-lived (Closes after payload)",
      overhead: "High header overhead per roundtrip (~800 bytes)",
      bestFor: "CRUD APIs, authentication, metadata lookups",
      drawback: "Cannot stream tokens progressively without polling",
      sample: "POST /api/v1/auth/login -> 200 OK {token}"
    },
    {
      id: "sse",
      name: "Server-Sent Events (SSE)",
      direction: "Unidirectional (Server -> Client continuous stream)",
      connection: "Persistent HTTP stream (text/event-stream)",
      overhead: "Minimal framing overhead (event: token\\ndata: {...}\\n\\n)",
      bestFor: "LLM token streaming, AI chat, live interview score updates",
      drawback: "Client cannot send upstream messages over same connection",
      sample: "GET/POST /ai/stream -> event: token data: {'tok':'Java'}"
    },
    {
      id: "ws",
      name: "WebSockets (WS/WSS)",
      direction: "Full-Duplex Bidirectional (Client <-> Server simultaneous)",
      connection: "Persistent TCP socket (HTTP upgrade to 101 Switching Protocols)",
      overhead: "Ultra-low framing (2 to 10 bytes per frame)",
      bestFor: "Real-time AI voice agents, live multiplayer code pairing",
      drawback: "Complex connection state, load balancer sticky session required",
      sample: "ws://api.prepspaces.com/ws/live-interview"
    }
  ];

  const current = protocols.find((p) => p.id === selectedProtocol);

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Server className="w-5 h-5 text-sky-400" />
            Communication Protocol Matrix: REST vs SSE vs WebSockets
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Compare connection lifecycle, header overhead, and ideal AI workload fit across network protocols.
          </p>
        </div>
        <div className="flex bg-stone-950 p-1 rounded-lg border border-stone-800 text-xs">
          {protocols.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedProtocol(p.id)}
              className={`px-3 py-1 rounded font-bold transition-all ${
                selectedProtocol === p.id ? "bg-sky-600 text-white" : "text-stone-400 hover:text-white"
              }`}
            >
              {p.id.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Protocol Architecture Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 text-xs font-mono">
        <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 space-y-3">
          <div>
            <span className="text-stone-500 uppercase text-[10px] block mb-0.5">Protocol Name</span>
            <span className="text-white font-bold text-sm">{current.name}</span>
          </div>
          <div>
            <span className="text-stone-500 uppercase text-[10px] block mb-0.5">Data Flow Direction</span>
            <span className="text-amber-400">{current.direction}</span>
          </div>
          <div>
            <span className="text-stone-500 uppercase text-[10px] block mb-0.5">Connection State</span>
            <span className="text-emerald-400">{current.connection}</span>
          </div>
          <div>
            <span className="text-stone-500 uppercase text-[10px] block mb-0.5">Frame / Header Overhead</span>
            <span className="text-stone-300">{current.overhead}</span>
          </div>
        </div>

        <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 flex flex-col justify-between">
          <div>
            <span className="text-stone-500 uppercase text-[10px] block mb-1">Production AI Fit</span>
            <div className="p-2.5 rounded bg-emerald-950/40 border border-emerald-800/80 text-emerald-200 mb-3">
              <strong>Ideal Use Case:</strong> {current.bestFor}
            </div>

            <span className="text-stone-500 uppercase text-[10px] block mb-1">Tradeoff / Limitation</span>
            <div className="p-2.5 rounded bg-rose-950/40 border border-rose-800/80 text-rose-200">
              <strong>Consideration:</strong> {current.drawback}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400">
            <strong>Sample Pattern:</strong> <code className="text-sky-300">{current.sample}</code>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 5. RBAC vs Broken Object-Level Authorization (BOLA) Auditor
 * Security test workbench testing IDOR / BOLA vulnerability prevention
 */
export function RbacVsBolaObjectAuthorizationAuditor() {
  const [currentUser, setCurrentUser] = useState("student_a"); // student_a, student_b, admin
  const [targetInterviewId, setTargetInterviewId] = useState(500); // belongs to student_b
  const [isDefenseEnabled, setIsDefenseEnabled] = useState(true);

  // Mock Database
  const interviewsDb = {
    500: {
      id: 500,
      owner_id: "student_b",
      owner_name: "Student B (Bob)",
      topic: "Senior Java Concurrency",
      score: 94.5,
      private_notes: "Strong knowledge of Virtual Threads and ReentrantLock."
    },
    501: {
      id: 501,
      owner_id: "student_a",
      owner_name: "Student A (Alice)",
      topic: "Python FastAPI Internals",
      score: 88.0,
      private_notes: "Good grasp of asyncio event loops."
    }
  };

  const userIdentities = {
    student_a: { id: "student_a", name: "Alice (Student A)", role: "student" },
    student_b: { id: "student_b", name: "Bob (Student B)", role: "student" },
    admin: { id: "admin", name: "System Administrator", role: "admin" }
  };

  const activeIdentity = userIdentities[currentUser];
  const targetRecord = interviewsDb[targetInterviewId];

  // Evaluate Authorization Logic
  let status = 200;
  let responseData = null;
  let vulnerabilityExploited = false;

  if (!targetRecord) {
    status = 404;
    responseData = { error: "not_found", detail: "Interview record does not exist." };
  } else if (!isDefenseEnabled) {
    // VULNERABLE: Only checks if authenticated, ignores resource ownership!
    status = 200;
    responseData = targetRecord;
    if (activeIdentity.role !== "admin" && targetRecord.owner_id !== activeIdentity.id) {
      vulnerabilityExploited = true;
    }
  } else {
    // SECURE: Enforces ownership check (or admin override)
    if (activeIdentity.role === "admin" || targetRecord.owner_id === activeIdentity.id) {
      status = 200;
      responseData = targetRecord;
    } else {
      status = 403;
      responseData = {
        error: "forbidden",
        detail: "Access Denied: You do not have ownership permissions for this interview."
      };
    }
  }

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-rose-400" />
            OWASP #1: Broken Object-Level Authorization (BOLA / IDOR) Auditor
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Test how attackers exploit missing ownership verification to view other users' private interview scores.
          </p>
        </div>
        <div>
          <button
            onClick={() => setIsDefenseEnabled(!isDefenseEnabled)}
            className={`px-3 py-1.5 text-xs rounded font-bold flex items-center gap-1.5 transition-all ${
              isDefenseEnabled
                ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                : "bg-red-600 hover:bg-red-500 text-white animate-pulse"
            }`}
          >
            <Shield size={14} />
            {isDefenseEnabled ? "Defense Mode: SECURE (Enforcing Ownership)" : "Defense Mode: VULNERABLE (BOLA Active!)"}
          </button>
        </div>
      </div>

      {/* Control Bar: Caller Identity & Target Resource */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 text-xs font-mono">
        <div className="p-3 bg-stone-950 rounded-lg border border-stone-800">
          <label className="text-stone-400 block mb-1">Authenticated Requesting User:</label>
          <select
            value={currentUser}
            onChange={(e) => setCurrentUser(e.target.value)}
            className="w-full bg-stone-900 border border-stone-700 rounded px-2.5 py-1.5 text-white font-mono"
          >
            <option value="student_a">Student A (Alice) — ID: student_a</option>
            <option value="student_b">Student B (Bob) — ID: student_b</option>
            <option value="admin">Admin (Staff) — ID: admin</option>
          </select>
        </div>

        <div className="p-3 bg-stone-950 rounded-lg border border-stone-800">
          <label className="text-stone-400 block mb-1">Target Endpoint URL:</label>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">GET</span>
            <select
              value={targetInterviewId}
              onChange={(e) => setTargetInterviewId(Number(e.target.value))}
              className="flex-1 bg-stone-900 border border-stone-700 rounded px-2.5 py-1.5 text-white font-mono"
            >
              <option value={500}>/api/v1/interviews/500 (Owner: Bob / Student B)</option>
              <option value={501}>/api/v1/interviews/501 (Owner: Alice / Student A)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security Analysis Banner */}
      <div className="my-4">
        {vulnerabilityExploited ? (
          <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-600 text-red-200 text-xs flex items-start gap-2.5">
            <AlertTriangle size={18} className="text-red-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-white text-sm">SECURITY BREACH: Broken Object-Level Authorization!</strong>
              <span>
                User <code>{activeIdentity.name}</code> successfully read private interview <code>#{targetInterviewId}</code> belonging to <code>{targetRecord?.owner_name}</code> because the backend verified authentication but neglected resource ownership!
              </span>
            </div>
          </div>
        ) : status === 403 ? (
          <div className="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-700 text-emerald-200 text-xs flex items-start gap-2.5">
            <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-white text-sm">ATTACK BLOCKED: HTTP 403 Forbidden</strong>
              <span>
                Ownership check prevented <code>{activeIdentity.name}</code> from accessing <code>{targetRecord?.owner_name}</code>'s private evaluation.
              </span>
            </div>
          </div>
        ) : (
          <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 text-xs flex items-start gap-2.5">
            <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-white text-sm">AUTHORIZED ACCESS: HTTP 200 OK</strong>
              <span>
                Requesting caller owns the target resource or possesses administrative authorization privileges.
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Response Payload Inspector */}
      <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800 text-stone-500 text-[11px]">
          <span>HTTP/1.1 {status} {status === 200 ? "OK" : status === 403 ? "Forbidden" : "Not Found"}</span>
          <span>Content-Type: application/json</span>
        </div>
        <pre className="text-stone-300 overflow-x-auto leading-relaxed">
          {JSON.stringify(responseData, null, 2)}
        </pre>
      </div>

      {/* Defensive Code Snippet */}
      <div className="mt-4 p-3 bg-stone-950 rounded-lg border border-stone-800 text-xs">
        <span className="text-stone-400 font-mono text-[10px] uppercase block mb-1">
          Remediation Pattern (Enforcing SQL Ownership)
        </span>
        <code className="text-amber-300 font-mono text-[11px] block">
          SELECT * FROM interviews WHERE id = :id AND (user_id = :current_user_id OR :is_admin = TRUE);
        </code>
      </div>
    </div>
  );
}
