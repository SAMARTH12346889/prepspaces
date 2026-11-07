import React, { useState } from "react";
import {
  Cpu,
  Activity,
  ShieldAlert,
  ShieldCheck,
  RotateCcw,
  Clock,
  Database,
  TrendingUp,
  Server,
  Play,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

// =========================================================================
// 1. GPU MEMORY & VRAM ALLOCATION CALCULATOR
// =========================================================================
export function GpuMemoryVramAllocationCalculator() {
  const [paramsBillion, setParamsBillion] = useState(7);
  const [precisionBits, setPrecisionBits] = useState(16); // 16, 8, 4
  const [contextTokens, setContextTokens] = useState(4096);
  const [batchSize, setBatchSize] = useState(8);
  const [useGqa, setUseGqa] = useState(true); // GQA (8 heads) vs MHA (32 heads)
  const [deviceVram, setDeviceVram] = useState(24); // 4, 8, 16, 24, 80

  const layers = 32;
  const headDim = 128;
  const kvHeads = useGqa ? 8 : 32;
  const precisionBytes = precisionBits / 8;

  // Formula: Weights GiB
  const weightsBytes = paramsBillion * 1e9 * precisionBytes;
  const weightsGib = weightsBytes / 1024 ** 3;

  // Formula: KV Cache GiB = 2 * L * B * S * H_KV * D_H * Bytes
  const kvCacheBytes = 2 * layers * batchSize * contextTokens * kvHeads * headDim * precisionBytes;
  const kvCacheGib = kvCacheBytes / 1024 ** 3;

  // Workspace and activations estimate (cuBLAS, runtime context ~ 1.5 - 2.5 GiB)
  const workspaceGib = 1.8 + (batchSize * 0.05);

  const totalVramGib = weightsGib + kvCacheGib + workspaceGib;
  const isOom = totalVramGib > deviceVram;
  const vramPercent = Math.min(100, (totalVramGib / deviceVram) * 100);

  const devices = [
    { label: "GTX 1650", vram: 4 },
    { label: "RTX 4060", vram: 8 },
    { label: "Tesla T4", vram: 16 },
    { label: "RTX 4090", vram: 24 },
    { label: "NVIDIA A100", vram: 80 }
  ];

  return (
    <div className="bg-stone-900 text-stone-100 p-5 rounded-2xl border border-stone-800 shadow-xl space-y-5">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-stone-800 pb-3">
        <div>
          <h3 className="font-bold text-base text-stone-100 flex items-center gap-2">
            <Cpu className="text-amber-400" size={18} />
            GPU Memory (VRAM) &amp; KV Cache Dimensioning Engine
          </h3>
          <p className="text-xs text-stone-400">
            Formulate total memory: M_total = M_weights + 2·L·B·S·H_kv·D_h·Bytes + M_workspace
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isOom ? (
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1.5 animate-pulse">
              <ShieldAlert size={14} /> CUDA OOM
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
              <ShieldCheck size={14} /> Fits in VRAM
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        {/* Model Size */}
        <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1.5">
          <label className="text-stone-400 block font-medium">Model Parameters</label>
          <div className="flex gap-1.5 flex-wrap">
            {[1.5, 3, 7, 14, 32, 70].map((p) => (
              <button
                key={p}
                onClick={() => setParamsBillion(p)}
                className={`px-2.5 py-1 rounded-lg font-mono text-xs transition-all ${
                  paramsBillion === p
                    ? "bg-amber-500 text-stone-950 font-bold"
                    : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                }`}
              >
                {p}B
              </button>
            ))}
          </div>
          <span className="text-[11px] text-stone-500 block">Current: {paramsBillion}B parameters</span>
        </div>

        {/* Quantization */}
        <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1.5">
          <label className="text-stone-400 block font-medium">Precision (Quantization)</label>
          <div className="grid grid-cols-3 gap-1">
            {[
              { bits: 16, label: "FP16 (2B)" },
              { bits: 8, label: "INT8 (1B)" },
              { bits: 4, label: "INT4 (0.5B)" }
            ].map((q) => (
              <button
                key={q.bits}
                onClick={() => setPrecisionBits(q.bits)}
                className={`p-1.5 rounded-lg text-center font-mono text-[11px] transition-all ${
                  precisionBits === q.bits
                    ? "bg-amber-500 text-stone-950 font-bold"
                    : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                }`}
              >
                {q.label}
              </button>
            ))}
          </div>
          <span className="text-[11px] text-stone-500 block">{precisionBytes} bytes / weight element</span>
        </div>

        {/* Concurrency & Sequence Length */}
        <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1.5">
          <div className="flex justify-between text-stone-400 font-medium">
            <span>Context: {contextTokens.toLocaleString()} tokens</span>
          </div>
          <input
            type="range"
            min={1024}
            max={32768}
            step={1024}
            value={contextTokens}
            onChange={(e) => setContextTokens(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
          <div className="flex justify-between items-center text-[11px] text-stone-400 pt-1">
            <span>Active Batch (B):</span>
            <select
              value={batchSize}
              onChange={(e) => setBatchSize(Number(e.target.value))}
              className="bg-stone-800 text-stone-200 px-2 py-0.5 rounded border border-stone-700 text-xs font-mono"
            >
              {[1, 2, 4, 8, 16, 32, 64].map((b) => (
                <option key={b} value={b}>
                  {b} sequences
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Attention Head Topology */}
        <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1.5">
          <label className="text-stone-400 block font-medium">Attention Architecture</label>
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => setUseGqa(true)}
              className={`p-1.5 rounded-lg text-xs font-mono transition-all ${
                useGqa
                  ? "bg-emerald-600 text-white font-bold"
                  : "bg-stone-800 text-stone-400 hover:bg-stone-700"
              }`}
            >
              GQA (8 heads)
            </button>
            <button
              onClick={() => setUseGqa(false)}
              className={`p-1.5 rounded-lg text-xs font-mono transition-all ${
                !useGqa
                  ? "bg-amber-600 text-white font-bold"
                  : "bg-stone-800 text-stone-400 hover:bg-stone-700"
              }`}
            >
              MHA (32 heads)
            </button>
          </div>
          <span className="text-[11px] text-stone-500 block">
            {useGqa ? "4x KV Cache compression" : "Standard 1:1 KV cache overhead"}
          </span>
        </div>
      </div>

      {/* Target GPU Selector */}
      <div className="flex items-center gap-2 overflow-x-auto text-xs py-1">
        <span className="text-stone-400 font-mono text-[11px] whitespace-nowrap">Target Hardware:</span>
        {devices.map((d) => (
          <button
            key={d.vram}
            onClick={() => setDeviceVram(d.vram)}
            className={`px-3 py-1 rounded-lg font-mono text-xs whitespace-nowrap border transition-all ${
              deviceVram === d.vram
                ? "bg-stone-800 text-amber-400 border-amber-500 font-bold"
                : "border-stone-800 text-stone-400 hover:bg-stone-800"
            }`}
          >
            {d.label} ({d.vram} GB)
          </button>
        ))}
      </div>

      {/* Memory Breakdown Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-stone-950 border border-stone-800">
          <span className="text-stone-500 block text-[11px]">Model Weights</span>
          <span className="text-base font-bold font-mono text-amber-400">{weightsGib.toFixed(2)} GiB</span>
          <span className="text-[10px] text-stone-500 block">{paramsBillion}B @ {precisionBits}-bit</span>
        </div>
        <div className="p-3 rounded-xl bg-stone-950 border border-stone-800">
          <span className="text-stone-500 block text-[11px]">KV Cache Buffer</span>
          <span className="text-base font-bold font-mono text-sky-400">{kvCacheGib.toFixed(2)} GiB</span>
          <span className="text-[10px] text-stone-500 block">B={batchSize}, S={contextTokens}</span>
        </div>
        <div className="p-3 rounded-xl bg-stone-950 border border-stone-800">
          <span className="text-stone-500 block text-[11px]">Workspace &amp; Context</span>
          <span className="text-base font-bold font-mono text-purple-400">{workspaceGib.toFixed(2)} GiB</span>
          <span className="text-[10px] text-stone-500 block">CUDA runtime buffers</span>
        </div>
        <div className={`p-3 rounded-xl border ${isOom ? "bg-rose-950/30 border-rose-600/50" : "bg-stone-950 border-stone-800"}`}>
          <span className="text-stone-500 block text-[11px]">Total VRAM Required</span>
          <span className={`text-base font-bold font-mono ${isOom ? "text-rose-400" : "text-emerald-400"}`}>
            {totalVramGib.toFixed(2)} GiB
          </span>
          <span className="text-[10px] text-stone-500 block">Limit: {deviceVram} GiB</span>
        </div>
      </div>

      {/* Progress Bar Gauge */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-[11px] font-mono text-stone-400">
          <span>VRAM Allocation Gauge</span>
          <span>{vramPercent.toFixed(1)}% ({totalVramGib.toFixed(2)} / {deviceVram} GiB)</span>
        </div>
        <div className="w-full h-3 bg-stone-950 rounded-full overflow-hidden border border-stone-800 flex">
          <div
            style={{ width: `${Math.min(100, (weightsGib / deviceVram) * 100)}%` }}
            className="bg-amber-500 h-full"
            title="Weights"
          />
          <div
            style={{ width: `${Math.min(100, (kvCacheGib / deviceVram) * 100)}%` }}
            className="bg-sky-500 h-full"
            title="KV Cache"
          />
          <div
            style={{ width: `${Math.min(100, (workspaceGib / deviceVram) * 100)}%` }}
            className="bg-purple-500 h-full"
            title="Workspace"
          />
        </div>
        {isOom && (
          <p className="text-[11px] text-rose-400 font-mono flex items-center gap-1.5 pt-1">
            <AlertTriangle size={13} />
            Deficit: +{(totalVramGib - deviceVram).toFixed(2)} GiB over budget. Recommended: Switch to INT4 quantization, enable GQA, or decrease active batch size.
          </p>
        )}
      </div>
    </div>
  );
}

// =========================================================================
// 2. LITTLE'S LAW & QUEUE SATURATION SIMULATOR
// =========================================================================
export function LittlesLawQueueSaturationSimulator() {
  const [arrivalRate, setArrivalRate] = useState(25); // lambda: req/sec
  const [serviceTime, setServiceTime] = useState(3.2); // W: seconds
  const [maxConcurrencyThreshold, setMaxConcurrencyThreshold] = useState(80);

  // Little's Law: L = lambda * W
  const inFlightRequests = arrivalRate * serviceTime;
  const isOverloaded = inFlightRequests > maxConcurrencyThreshold;
  const saturationRatio = inFlightRequests / maxConcurrencyThreshold;

  // Throughput and queue wait calculation
  const maxSafeArrivalRate = maxConcurrencyThreshold / serviceTime;
  const queuedRequests = isOverloaded ? inFlightRequests - maxConcurrencyThreshold : 0;
  const queueDelaySec = isOverloaded ? queuedRequests / maxSafeArrivalRate : 0;

  return (
    <div className="bg-stone-900 text-stone-100 p-5 rounded-2xl border border-stone-800 shadow-xl space-y-5">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-stone-800 pb-3">
        <div>
          <h3 className="font-bold text-base text-stone-100 flex items-center gap-2">
            <TrendingUp className="text-emerald-400" size={18} />
            Little's Law (L = &lambda;·W) &amp; GPU Saturation Knee Simulator
          </h3>
          <p className="text-xs text-stone-400">
            Dimension capacity: arrival rate (&lambda;) &times; residence time (W) determines concurrent active sequences (L)
          </p>
        </div>
        <div className="font-mono text-xs px-2.5 py-1 rounded bg-stone-950 border border-stone-800 text-stone-300">
          Capacity Limit: {maxConcurrencyThreshold} slots
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Arrival Rate */}
        <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-stone-400">Arrival Rate (&lambda;)</span>
            <span className="font-bold text-emerald-400">{arrivalRate} req/sec</span>
          </div>
          <input
            type="range"
            min={1}
            max={60}
            value={arrivalRate}
            onChange={(e) => setArrivalRate(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
          <span className="text-[11px] text-stone-500 block">API request rate entering gateway</span>
        </div>

        {/* Service Time */}
        <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-stone-400">Mean Service Time (W)</span>
            <span className="font-bold text-sky-400">{serviceTime.toFixed(1)} s</span>
          </div>
          <input
            type="range"
            min={0.5}
            max={8.0}
            step={0.1}
            value={serviceTime}
            onChange={(e) => setServiceTime(Number(e.target.value))}
            className="w-full accent-sky-500 cursor-pointer"
          />
          <span className="text-[11px] text-stone-500 block">Prefill + Decode streaming duration</span>
        </div>

        {/* GPU Engine Concurrency Slots */}
        <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-stone-400">Engine VRAM Limit</span>
            <span className="font-bold text-amber-400">{maxConcurrencyThreshold} slots</span>
          </div>
          <input
            type="range"
            min={20}
            max={150}
            step={5}
            value={maxConcurrencyThreshold}
            onChange={(e) => setMaxConcurrencyThreshold(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
          <span className="text-[11px] text-stone-500 block">Max active sequences supported in KV cache</span>
        </div>
      </div>

      {/* Result Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
          <span className="text-stone-500 block text-[11px]">Little's Law Concurrency (L)</span>
          <span className="text-xl font-bold font-mono text-stone-100">{inFlightRequests.toFixed(1)}</span>
          <span className="text-[10px] text-stone-500 block">Simultaneous active requests</span>
        </div>
        <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
          <span className="text-stone-500 block text-[11px]">System Operating Regime</span>
          <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded inline-block mt-1 ${
            isOverloaded ? "bg-rose-500/20 text-rose-300" : "bg-emerald-500/20 text-emerald-300"
          }`}>
            {isOverloaded ? "SATURATED / COLLAPSE" : "STABLE EQUILIBRIUM"}
          </span>
          <span className="text-[10px] text-stone-500 block mt-1">{(saturationRatio * 100).toFixed(0)}% capacity load</span>
        </div>
        <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
          <span className="text-stone-500 block text-[11px]">Inference Queue Stalled</span>
          <span className={`text-xl font-bold font-mono ${queuedRequests > 0 ? "text-amber-400" : "text-stone-400"}`}>
            {queuedRequests.toFixed(1)} reqs
          </span>
          <span className="text-[10px] text-stone-500 block">Awaiting free KV blocks</span>
        </div>
        <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
          <span className="text-stone-500 block text-[11px]">Added Queue Latency</span>
          <span className={`text-xl font-bold font-mono ${queueDelaySec > 0 ? "text-rose-400" : "text-emerald-400"}`}>
            +{queueDelaySec.toFixed(2)} s
          </span>
          <span className="text-[10px] text-stone-500 block">TTFT penalty from queuing</span>
        </div>
      </div>

      {/* Visual Saturation Curve */}
      <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
        <div className="flex justify-between text-xs text-stone-400 font-mono">
          <span>Throughput vs Load Saturation Curve</span>
          <span className={isOverloaded ? "text-rose-400 font-bold" : "text-emerald-400 font-bold"}>
            Operating Point: {inFlightRequests.toFixed(0)} concurrent sequences
          </span>
        </div>
        <div className="relative h-12 bg-stone-900 rounded-lg overflow-hidden flex items-center px-4">
          <div className="w-full flex items-center justify-between z-10 text-[11px] font-mono text-stone-400">
            <span>0 req/s (Idle)</span>
            <span className="text-amber-400 font-bold">Knee Point: {maxConcurrencyThreshold}</span>
            <span className="text-rose-400">Collapse Zone (&gt;{maxConcurrencyThreshold})</span>
          </div>
          {/* Active pointer marker */}
          <div
            style={{ left: `${Math.min(95, Math.max(5, (inFlightRequests / (maxConcurrencyThreshold * 1.5)) * 100))}%` }}
            className={`absolute top-0 bottom-0 w-2.5 rounded transition-all ${
              isOverloaded ? "bg-rose-500 animate-pulse" : "bg-emerald-500"
            }`}
          />
        </div>
        <p className="text-[11px] text-stone-500">
          {isOverloaded
            ? "CRITICAL: The arrival rate exceeds GPU draining capacity. Admission control must shed requests or auto-scale inference pods."
            : "HEALTHY: The arrival rate is safely below the saturation knee. Requests enter the continuous batching loop without queue delay."}
        </p>
      </div>
    </div>
  );
}

// =========================================================================
// 3. TTFT VS TPOT LATENCY DISTRIBUTION VISUALIZER
// =========================================================================
export function TtftTpotLatencyDistributionVisualizer() {
  const [promptTokens, setPromptTokens] = useState(1200);
  const [outputTokens, setOutputTokens] = useState(350);
  const [isStreaming, setIsStreaming] = useState(true);
  const [queueDelayMs, setQueueDelayMs] = useState(150);

  // TTFT = Queue + Prefill time
  // Prefill is quadratic / linear O(N) approx 0.15ms per prompt token on typical GPU
  const prefillMs = promptTokens * 0.12;
  const ttftMs = queueDelayMs + prefillMs;

  // TPOT = average generation step time (~35ms per token for 7B model)
  const tpotMs = 35.0;
  const decodeDurationMs = (outputTokens - 1) * tpotMs;
  const totalDurationMs = ttftMs + decodeDurationMs;

  // Perceived latency: with streaming, user perceives response at TTFT; without, user waits for totalDuration
  const perceivedLatencyMs = isStreaming ? ttftMs : totalDurationMs;

  return (
    <div className="bg-stone-900 text-stone-100 p-5 rounded-2xl border border-stone-800 shadow-xl space-y-5">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-stone-800 pb-3">
        <div>
          <h3 className="font-bold text-base text-stone-100 flex items-center gap-2">
            <Clock className="text-sky-400" size={18} />
            TTFT vs. TPOT Latency Decomposition &amp; Streaming Perception
          </h3>
          <p className="text-xs text-stone-400">
            Total Latency = TTFT + (N_out - 1)&times;TPOT. Streaming slashes cognitive waiting perception.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsStreaming(!isStreaming)}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border transition-all ${
              isStreaming
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                : "bg-amber-500/20 text-amber-300 border-amber-500/40"
            }`}
          >
            {isStreaming ? "Streaming Enabled (SSE)" : "Buffering (Non-Streaming)"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Prompt Tokens */}
        <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-stone-400">Prompt Context Tokens</span>
            <span className="font-bold text-sky-400">{promptTokens.toLocaleString()} tokens</span>
          </div>
          <input
            type="range"
            min={100}
            max={8000}
            step={100}
            value={promptTokens}
            onChange={(e) => setPromptTokens(Number(e.target.value))}
            className="w-full accent-sky-500 cursor-pointer"
          />
          <span className="text-[11px] text-stone-500 block">Prefill attention workload</span>
        </div>

        {/* Output Tokens */}
        <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-stone-400">Completion Output Tokens</span>
            <span className="font-bold text-amber-400">{outputTokens} tokens</span>
          </div>
          <input
            type="range"
            min={20}
            max={1000}
            step={10}
            value={outputTokens}
            onChange={(e) => setOutputTokens(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
          <span className="text-[11px] text-stone-500 block">Autoregressive decode steps</span>
        </div>

        {/* In-Flight Queue Delay */}
        <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-stone-400">Queue Contention Delay</span>
            <span className="font-bold text-purple-400">{queueDelayMs} ms</span>
          </div>
          <input
            type="range"
            min={0}
            max={2000}
            step={50}
            value={queueDelayMs}
            onChange={(e) => setQueueDelayMs(Number(e.target.value))}
            className="w-full accent-purple-500 cursor-pointer"
          />
          <span className="text-[11px] text-stone-500 block">Time spent waiting before GPU scheduling</span>
        </div>
      </div>

      {/* Latency Comparison Card */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
          <span className="text-stone-500 block text-[11px]">Time to First Token (TTFT)</span>
          <span className="text-lg font-bold text-sky-400">{ttftMs.toFixed(0)} ms</span>
          <span className="text-[10px] text-stone-500 block">Queue ({queueDelayMs}ms) + Prefill ({prefillMs.toFixed(0)}ms)</span>
        </div>
        <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
          <span className="text-stone-500 block text-[11px]">Time Per Token (TPOT)</span>
          <span className="text-lg font-bold text-amber-400">{tpotMs.toFixed(1)} ms</span>
          <span className="text-[10px] text-stone-500 block">~{(1000 / tpotMs).toFixed(1)} tokens/sec per user</span>
        </div>
        <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
          <span className="text-stone-500 block text-[11px]">Total Completion Duration</span>
          <span className="text-lg font-bold text-purple-400">{(totalDurationMs / 1000).toFixed(2)} s</span>
          <span className="text-[10px] text-stone-500 block">Wall-clock socket lifetime</span>
        </div>
        <div className="p-3 bg-stone-950 rounded-xl border border-emerald-900/40 bg-emerald-950/20">
          <span className="text-stone-400 block text-[11px]">Perceived Human Wait</span>
          <span className="text-lg font-bold text-emerald-400">
            {isStreaming ? `${perceivedLatencyMs.toFixed(0)} ms` : `${(perceivedLatencyMs / 1000).toFixed(2)} s`}
          </span>
          <span className="text-[10px] text-stone-500 block">
            {isStreaming ? "Immediate reading perception" : "User blocked at blank spinner"}
          </span>
        </div>
      </div>

      {/* Latency Timeline Bar */}
      <div className="space-y-1.5 text-xs font-mono">
        <div className="flex justify-between text-[11px] text-stone-400">
          <span>Execution Latency Timeline Breakdown</span>
          <span>Total: {(totalDurationMs / 1000).toFixed(2)}s</span>
        </div>
        <div className="w-full h-3 bg-stone-950 rounded-full overflow-hidden flex border border-stone-800">
          <div
            style={{ width: `${(queueDelayMs / totalDurationMs) * 100}%` }}
            className="bg-purple-500 h-full"
            title="Queue Delay"
          />
          <div
            style={{ width: `${(prefillMs / totalDurationMs) * 100}%` }}
            className="bg-sky-500 h-full"
            title="Prefill Phase"
          />
          <div
            style={{ width: `${(decodeDurationMs / totalDurationMs) * 100}%` }}
            className="bg-amber-500 h-full"
            title="Autoregressive Decode"
          />
        </div>
        <div className="flex gap-4 text-[11px] text-stone-400 pt-1">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span> Queue Delay ({queueDelayMs}ms)</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-sky-500 inline-block"></span> Prefill ({prefillMs.toFixed(0)}ms)</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span> Decode ({(decodeDurationMs / 1000).toFixed(2)}s)</span>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 4. REDIS EXACT, PREFIX & SEMANTIC CACHE SIMULATOR
// =========================================================================
export function RedisSemanticAndPrefixCacheSimulator() {
  const [selectedPromptIdx, setSelectedPromptIdx] = useState(0);
  const [enableRedisExact, setEnableRedisExact] = useState(true);
  const [enablePrefixCache, setEnablePrefixCache] = useState(true);
  const [enableSemanticCache, setEnableSemanticCache] = useState(true);
  const [simulationLog, setSimulationLog] = useState([]);

  const samplePrompts = [
    {
      id: 1,
      title: "Query A: 'Explain Java Polymorphism with code'",
      promptText: "Explain Java Polymorphism with an inheritance example and override rules.",
      isWarmExact: true,
      similarityScore: 1.0
    },
    {
      id: 2,
      title: "Query B: 'How does polymorphism work in Java?'",
      promptText: "How does polymorphism work in Java? Show code sample.",
      isWarmExact: false,
      similarityScore: 0.97 // Semantic match to Query A
    },
    {
      id: 3,
      title: "Query C: 'Grade this Java candidate on concurrency'",
      promptText: "Evaluate candidate answer regarding synchronized blocks and volatile keyword.",
      isWarmExact: false,
      similarityScore: 0.62 // Shares system prompt rubric prefix only
    },
    {
      id: 4,
      title: "Query D: Brand New Question 'Explain Raft consensus'",
      promptText: "Explain Raft consensus algorithm leadership election and log replication.",
      isWarmExact: false,
      similarityScore: 0.35 // Completely cold miss
    }
  ];

  const currentQuery = samplePrompts[selectedPromptIdx];

  const handleRunInference = () => {
    let resultSource = "Cold GPU Forward Pass";
    let latencyMs = 3800;
    let costUsd = 0.0035;

    if (enableRedisExact && currentQuery.isWarmExact) {
      resultSource = "Redis Response Cache Hit (Exact Key SHA-256)";
      latencyMs = 3;
      costUsd = 0.0;
    } else if (enableSemanticCache && currentQuery.similarityScore >= 0.95) {
      resultSource = `Semantic Vector Cache Hit (Similarity: ${(currentQuery.similarityScore * 100).toFixed(0)}%)`;
      latencyMs = 28;
      costUsd = 0.0001; // Tiny embedding vector cost
    } else if (enablePrefixCache) {
      resultSource = "vLLM RadixAttention Prefix Cache Hit (System Rubric Reused)";
      latencyMs = 850; // Bypasses 2,500 token prefill!
      costUsd = 0.0012;
    }

    const logEntry = {
      timestamp: new Date().toLocaleTimeString(),
      query: currentQuery.title,
      source: resultSource,
      latencyMs,
      costUsd
    };

    setSimulationLog((prev) => [logEntry, ...prev.slice(0, 4)]);
  };

  return (
    <div className="bg-stone-900 text-stone-100 p-5 rounded-2xl border border-stone-800 shadow-xl space-y-5">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-stone-800 pb-3">
        <div>
          <h3 className="font-bold text-base text-stone-100 flex items-center gap-2">
            <Database className="text-amber-400" size={18} />
            Multi-Tier AI Cache Simulator (Exact, Prefix &amp; Semantic)
          </h3>
          <p className="text-xs text-stone-400">
            Compare latency and token billing across Redis Exact Key, RadixAttention KV Prefix, and Semantic Caching.
          </p>
        </div>
        <button
          onClick={handleRunInference}
          className="px-4 py-2 rounded-xl text-xs font-bold font-mono bg-amber-500 text-stone-950 hover:bg-amber-400 transition-all flex items-center gap-1.5 shadow-md self-start sm:self-center"
        >
          <Play size={14} /> Send Test Request
        </button>
      </div>

      {/* Query Selector */}
      <div className="space-y-2">
        <label className="text-xs font-mono text-stone-400 block">Select Candidate Prompt:</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {samplePrompts.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => setSelectedPromptIdx(idx)}
              className={`p-3 rounded-xl text-left border transition-all ${
                selectedPromptIdx === idx
                  ? "bg-amber-500/20 border-amber-500 text-amber-200 font-semibold"
                  : "bg-stone-950 border-stone-800 text-stone-400 hover:bg-stone-850"
              }`}
            >
              <div className="font-bold">{q.title}</div>
              <div className="text-[11px] text-stone-500 truncate mt-0.5">{q.promptText}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Cache Tier Toggles */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 flex justify-between items-center">
          <div>
            <div className="font-bold text-stone-200">1. Redis Exact Cache</div>
            <div className="text-[11px] text-stone-500">SHA-256 prompt hash (~3ms)</div>
          </div>
          <input
            type="checkbox"
            checked={enableRedisExact}
            onChange={(e) => setEnableRedisExact(e.target.checked)}
            className="accent-amber-500 w-4 h-4 cursor-pointer"
          />
        </div>
        <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 flex justify-between items-center">
          <div>
            <div className="font-bold text-stone-200">2. Semantic Vector Cache</div>
            <div className="text-[11px] text-stone-500">Cosine &gt; 0.95 match (~28ms)</div>
          </div>
          <input
            type="checkbox"
            checked={enableSemanticCache}
            onChange={(e) => setEnableSemanticCache(e.target.checked)}
            className="accent-amber-500 w-4 h-4 cursor-pointer"
          />
        </div>
        <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 flex justify-between items-center">
          <div>
            <div className="font-bold text-stone-200">3. vLLM Prefix Cache</div>
            <div className="text-[11px] text-stone-500">Shared rubric KV reuse (~850ms)</div>
          </div>
          <input
            type="checkbox"
            checked={enablePrefixCache}
            onChange={(e) => setEnablePrefixCache(e.target.checked)}
            className="accent-amber-500 w-4 h-4 cursor-pointer"
          />
        </div>
      </div>

      {/* Live Log Stream */}
      <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
        <div className="text-xs font-mono text-stone-400 flex justify-between">
          <span>Inference Routing Log</span>
          <span>{simulationLog.length} requests logged</span>
        </div>
        {simulationLog.length === 0 ? (
          <div className="text-stone-600 text-xs font-mono py-4 text-center">
            Click 'Send Test Request' to simulate cache resolution paths.
          </div>
        ) : (
          <div className="space-y-2">
            {simulationLog.map((log, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-xs font-mono flex flex-col sm:flex-row justify-between sm:items-center gap-1.5"
              >
                <div className="space-y-0.5">
                  <div className="text-stone-300 font-bold">{log.query}</div>
                  <div className="text-amber-400 text-[11px]">{log.source}</div>
                </div>
                <div className="flex items-center gap-3 text-[11px]">
                  <span className="text-stone-400">Latency: <strong className="text-sky-400">{log.latencyMs} ms</strong></span>
                  <span className="text-stone-400">Cost: <strong className="text-emerald-400">${log.costUsd.toFixed(4)}</strong></span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// =========================================================================
// 5. CIRCUIT BREAKER STATE SIMULATOR
// =========================================================================
export function CircuitBreakerStateSimulator() {
  const [state, setState] = useState("CLOSED"); // CLOSED, OPEN, HALF_OPEN
  const [failures, setFailures] = useState(0);
  const [, setCooldownSec] = useState(0);
  const [eventLog, setEventLog] = useState([
    { time: "10:30:00", text: "Circuit breaker initialized in CLOSED state." }
  ]);

  const failureThreshold = 3;

  const handleSimulateSuccess = () => {
    if (state === "HALF_OPEN") {
      setState("CLOSED");
      setFailures(0);
      setCooldownSec(0);
      addLog("Probe request succeeded. Circuit reset to CLOSED.");
    } else {
      setFailures(0);
      addLog("Primary vLLM GPU inference succeeded.");
    }
  };

  const handleSimulateFailure = () => {
    const nextFailures = failures + 1;
    setFailures(nextFailures);

    if (state === "HALF_OPEN") {
      setState("OPEN");
      setCooldownSec(30);
      addLog("Probe request failed. Tripping back to OPEN for 30s cooldown.");
    } else if (nextFailures >= failureThreshold) {
      setState("OPEN");
      setCooldownSec(30);
      addLog(`Failure threshold (${failureThreshold}) exceeded! Circuit tripped to OPEN.`);
    } else {
      addLog(`Primary failure recorded (${nextFailures}/${failureThreshold}).`);
    }
  };

  const handleFastForwardCooldown = () => {
    if (state === "OPEN") {
      setState("HALF_OPEN");
      setCooldownSec(0);
      addLog("Cooldown expired. Entering HALF_OPEN state. Ready for single probe request.");
    }
  };

  const handleReset = () => {
    setState("CLOSED");
    setFailures(0);
    setCooldownSec(0);
    addLog("Manual reset: Circuit forced to CLOSED.");
  };

  const addLog = (text) => {
    setEventLog((prev) => [
      { time: new Date().toLocaleTimeString(), text },
      ...prev.slice(0, 4)
    ]);
  };

  return (
    <div className="bg-stone-900 text-stone-100 p-5 rounded-2xl border border-stone-800 shadow-xl space-y-5">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-stone-800 pb-3">
        <div>
          <h3 className="font-bold text-base text-stone-100 flex items-center gap-2">
            <Activity className="text-rose-400" size={18} />
            Circuit Breaker State Machine &amp; Graceful Degradation Engine
          </h3>
          <p className="text-xs text-stone-400">
            Trips when primary inference cluster fails, shedding load and diverting to fallback models.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-md text-xs font-mono font-bold border flex items-center gap-1.5 ${
              state === "CLOSED"
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                : state === "OPEN"
                ? "bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse"
                : "bg-amber-500/20 text-amber-300 border-amber-500/40"
            }`}
          >
            STATE: {state}
          </span>
        </div>
      </div>

      {/* State Machine Diagram */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
        <div
          className={`p-4 rounded-xl border text-center transition-all ${
            state === "CLOSED"
              ? "bg-emerald-950/40 border-emerald-500 text-emerald-200 shadow-md"
              : "bg-stone-950 border-stone-800 text-stone-500"
          }`}
        >
          <div className="font-bold text-sm">1. CLOSED</div>
          <div className="text-[11px] mt-1">Normal Operation</div>
          <div className="text-[10px] text-stone-400 mt-2">Traffic routes 100% to Primary GPU cluster.</div>
        </div>

        <div
          className={`p-4 rounded-xl border text-center transition-all ${
            state === "OPEN"
              ? "bg-rose-950/40 border-rose-500 text-rose-200 shadow-md"
              : "bg-stone-950 border-stone-800 text-stone-500"
          }`}
        >
          <div className="font-bold text-sm">2. OPEN (Tripped)</div>
          <div className="text-[11px] mt-1">Fault Isolation</div>
          <div className="text-[10px] text-stone-400 mt-2">Fails fast / routes 100% to Backup Lightweight API.</div>
        </div>

        <div
          className={`p-4 rounded-xl border text-center transition-all ${
            state === "HALF_OPEN"
              ? "bg-amber-950/40 border-amber-500 text-amber-200 shadow-md"
              : "bg-stone-950 border-stone-800 text-stone-500"
          }`}
        >
          <div className="font-bold text-sm">3. HALF-OPEN</div>
          <div className="text-[11px] mt-1">Probe Trial</div>
          <div className="text-[10px] text-stone-400 mt-2">Sends single test request to check GPU health.</div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <button
          onClick={handleSimulateSuccess}
          className="px-3.5 py-2 rounded-xl text-xs font-bold font-mono bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center gap-1.5"
        >
          <CheckCircle2 size={14} /> Send Successful Request
        </button>

        <button
          onClick={handleSimulateFailure}
          className="px-3.5 py-2 rounded-xl text-xs font-bold font-mono bg-rose-600 hover:bg-rose-500 text-white transition-all flex items-center gap-1.5"
        >
          <AlertTriangle size={14} /> Send Failed Request (CUDA OOM / 504)
        </button>

        {state === "OPEN" && (
          <button
            onClick={handleFastForwardCooldown}
            className="px-3.5 py-2 rounded-xl text-xs font-bold font-mono bg-amber-600 hover:bg-amber-500 text-white transition-all flex items-center gap-1.5"
          >
            <Clock size={14} /> Elapse 30s Cooldown &rarr; HALF-OPEN
          </button>
        )}

        <button
          onClick={handleReset}
          className="px-3 py-2 rounded-xl text-xs font-mono bg-stone-800 hover:bg-stone-700 text-stone-300 transition-all flex items-center gap-1.5 ml-auto"
        >
          <RotateCcw size={13} /> Reset Breaker
        </button>
      </div>

      {/* Active Routing Display */}
      <div className="p-3.5 bg-stone-950 rounded-xl border border-stone-800 text-xs font-mono flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Server size={14} className="text-stone-400" />
          <span className="text-stone-400">Current Traffic Target:</span>
          <strong className={state === "OPEN" ? "text-amber-400" : "text-emerald-400"}>
            {state === "OPEN" ? "Secondary Fallback API (Lightweight 3B)" : "Primary High-Throughput GPU Cluster (vLLM 70B)"}
          </strong>
        </div>
        <span className="text-stone-500">Failures: {failures} / {failureThreshold}</span>
      </div>

      {/* Transition History Log */}
      <div className="space-y-1.5 text-xs font-mono">
        <span className="text-stone-500 text-[11px] block">State Machine Transition Log</span>
        <div className="space-y-1">
          {eventLog.map((ev, i) => (
            <div key={i} className="p-2 rounded bg-stone-950 border border-stone-800/80 text-[11px] flex items-center gap-2">
              <span className="text-stone-500">[{ev.time}]</span>
              <span className="text-stone-300">{ev.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const AIScalabilityOptimizationDiagrams = {
  GpuMemoryVramAllocationCalculator,
  LittlesLawQueueSaturationSimulator,
  TtftTpotLatencyDistributionVisualizer,
  RedisSemanticAndPrefixCacheSimulator,
  CircuitBreakerStateSimulator
};

export default AIScalabilityOptimizationDiagrams;
