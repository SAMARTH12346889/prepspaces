import React, { useState, useEffect } from "react";
import {
  Cpu,
  Layers,
  Play,
  RotateCcw,
  Zap,
  HardDrive,
  CheckCircle2,
  StopCircle,
  Database
} from "lucide-react";

/**
 * 1. KV Cache Memory Calculator
 * Dynamically computes: M_KV = 2 * L * B * S * H_KV * D_H * Bytes
 */
export function KvCacheMemoryCalculator() {
  const [layers, setLayers] = useState(32);
  const [batchSize, setBatchSize] = useState(4);
  const [seqLen, setSeqLen] = useState(4096);
  const [attentionType, setAttentionType] = useState("gqa"); // mha (32), gqa (8), mqa (1)
  const [precisionBytes, setPrecisionBytes] = useState(2); // 2 = FP16, 1 = INT8, 0.5 = INT4
  const headDim = 128;

  const kvHeads = attentionType === "mha" ? 32 : attentionType === "gqa" ? 8 : 1;

  // Formula: 2 * L * B * S * H_KV * D_H * Bytes
  const totalBytes = 2 * layers * batchSize * seqLen * kvHeads * headDim * precisionBytes;
  const memoryMb = totalBytes / (1024 * 1024);
  const memoryGb = memoryMb / 1024;

  const gpuOptions = [
    { name: "GTX 1650 (Local)", vramGb: 4 },
    { name: "RTX 3060", vramGb: 12 },
    { name: "RTX 4090", vramGb: 24 },
    { name: "A100 (Data Center)", vramGb: 80 }
  ];

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-amber-400" />
            Master KV Cache Memory Calculator
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Calculate exact VRAM allocation: <code className="text-amber-300 font-mono">M_KV = 2 × L × B × S × H_KV × D_H × Bytes</code>
          </p>
        </div>
      </div>

      {/* Parameter Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4 p-3 bg-stone-950 rounded-lg border border-stone-800 text-xs">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-stone-400">Layers (L)</span>
            <span className="font-mono text-amber-400 font-bold">{layers}</span>
          </div>
          <input
            type="range"
            min={16}
            max={80}
            step={2}
            value={layers}
            onChange={(e) => setLayers(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
          <div className="text-[10px] text-stone-500 font-mono">e.g. 7B=32, 14B=48, 70B=80</div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-stone-400">Concurrent Batch Size (B)</span>
            <span className="font-mono text-sky-400 font-bold">{batchSize}</span>
          </div>
          <input
            type="range"
            min={1}
            max={64}
            value={batchSize}
            onChange={(e) => setBatchSize(Number(e.target.value))}
            className="w-full accent-sky-500"
          />
          <div className="text-[10px] text-stone-500 font-mono">Simultaneous active users</div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-stone-400">Context Length (S)</span>
            <span className="font-mono text-emerald-400 font-bold">{seqLen}</span>
          </div>
          <input
            type="range"
            min={512}
            max={16384}
            step={512}
            value={seqLen}
            onChange={(e) => setSeqLen(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-[10px] text-stone-500 font-mono">Prompt + Output tokens</div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-stone-400">KV Attention Architecture</span>
            <span className="font-mono text-purple-400 font-bold uppercase">{attentionType}</span>
          </div>
          <div className="flex gap-1 mt-1">
            {[
              { id: "mha", label: "MHA (32)" },
              { id: "gqa", label: "GQA (8)" },
              { id: "mqa", label: "MQA (1)" }
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setAttentionType(type.id)}
                className={`flex-1 py-1 rounded text-[10px] font-mono font-bold transition-all ${
                  attentionType === type.id
                    ? "bg-purple-600 text-white"
                    : "bg-stone-800 text-stone-400 hover:text-white"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
          <div className="text-[10px] text-stone-500 font-mono mt-1">H_KV heads</div>
        </div>
      </div>

      {/* Precision Selection */}
      <div className="flex items-center justify-between p-3 bg-stone-950/60 rounded-lg border border-stone-800/80 mb-4 text-xs">
        <span className="text-stone-300 font-semibold">KV Cache Precision:</span>
        <div className="flex gap-2">
          {[
            { val: 2, label: "FP16 / BF16 (2 Bytes)" },
            { val: 1, label: "INT8 / FP8 (1 Byte)" },
            { val: 0.5, label: "INT4 (0.5 Bytes)" }
          ].map((item) => (
            <button
              key={item.val}
              onClick={() => setPrecisionBytes(item.val)}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                precisionBytes === item.val
                  ? "bg-amber-500 text-stone-950"
                  : "bg-stone-800 text-stone-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Calculated Results */}
      <div className="p-4 bg-stone-950 rounded-xl border border-amber-800/60 text-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-stone-800">
          <div>
            <span className="text-stone-400 font-mono uppercase text-[10px] block">
              Required Dynamic KV Cache Memory
            </span>
            <div className="text-3xl font-extrabold font-mono text-amber-400 mt-0.5">
              {memoryGb >= 1.0 ? `${memoryGb.toFixed(2)} GB` : `${memoryMb.toFixed(1)} MB`}
            </div>
            <span className="text-[10px] text-stone-500 font-mono">
              ({(memoryMb / batchSize).toFixed(1)} MB per user stream)
            </span>
          </div>

          <div className="mt-3 sm:mt-0 text-left sm:text-right">
            <span className="text-stone-400 font-mono uppercase text-[10px] block">
              GQA Memory Savings vs MHA
            </span>
            <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">
              {attentionType === "gqa" ? "4.0x Smaller" : attentionType === "mqa" ? "32.0x Smaller" : "Baseline (1.0x)"}
            </div>
          </div>
        </div>

        {/* GPU Compatibility Bars */}
        <div className="space-y-2 mt-2">
          <div className="text-[10px] font-mono text-stone-400 uppercase">
            GPU KV Cache Occupancy (Excluding Static Weights):
          </div>
          {gpuOptions.map((gpu) => {
            const pct = Math.min(100, Math.round((memoryGb / gpu.vramGb) * 100));
            const isOom = memoryGb > gpu.vramGb;
            return (
              <div key={gpu.name} className="flex items-center gap-3 text-[11px] font-mono">
                <span className="w-36 text-stone-300 truncate">{gpu.name} ({gpu.vramGb}GB):</span>
                <div className="flex-1 h-2 bg-stone-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      isOom ? "bg-red-500" : pct > 75 ? "bg-amber-500" : "bg-emerald-500"
                    }`}
                    style={{ width: `${pct}%` }}
                  ></div>
                </div>
                <span className={`w-14 text-right font-bold ${isOom ? "text-red-400" : "text-stone-400"}`}>
                  {isOom ? "OOM" : `${pct}%`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/**
 * 2. Continuous vs Static Batching Simulator
 * Visualizes bubble waste in static batching vs immediate slot reuse in continuous batching.
 */
export function ContinuousVsStaticBatchingSimulator() {
  const [schedulerMode, setSchedulerMode] = useState("continuous"); // static vs continuous
  const [step, setStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // 4 sequences with varying lengths
  const requests = [
    { id: "Req 1", promptTokens: 20, targetTokens: 40 },
    { id: "Req 2", promptTokens: 30, targetTokens: 100 },
    { id: "Req 3", promptTokens: 25, targetTokens: 60 },
    { id: "Req 4", promptTokens: 15, targetTokens: 80 }
  ];

  const maxTokens = 100;

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setStep((prev) => {
          if (prev >= maxTokens) {
            setIsRunning(false);
            return maxTokens;
          }
          return prev + 5;
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setStep(0);
  };

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            Continuous vs Static Batching Execution Simulator
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Observe bubble waste in static batching vs dynamic iteration-level scheduling in vLLM.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-stone-950 p-1 rounded-lg border border-stone-800 text-xs">
            {["continuous", "static"].map((mode) => (
              <button
                key={mode}
                onClick={() => {
                  setSchedulerMode(mode);
                  handleReset();
                }}
                className={`px-3 py-1 rounded font-bold uppercase transition-all ${
                  schedulerMode === mode
                    ? "bg-emerald-600 text-white"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="p-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white"
            title={isRunning ? "Pause" : "Play"}
          >
            {isRunning ? <StopCircle size={16} /> : <Play size={16} />}
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300"
            title="Reset"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Progress Metric Banner */}
      <div className="flex justify-between items-center my-4 p-3 bg-stone-950 rounded-lg border border-stone-800 text-xs font-mono">
        <div>
          <span className="text-stone-500 uppercase text-[10px]">Execution Iteration Step</span>
          <div className="text-lg font-bold text-white mt-0.5">{step} / {maxTokens} iterations</div>
        </div>
        <div className="text-right">
          <span className="text-stone-500 uppercase text-[10px]">Active Scheduler Policy</span>
          <div className="text-lg font-bold text-emerald-400 mt-0.5 uppercase">
            {schedulerMode === "continuous" ? "vLLM Iteration-Level" : "Naive Static Batch"}
          </div>
        </div>
      </div>

      {/* 4 Execution Slots */}
      <div className="space-y-3">
        {requests.map((req) => {
          const isFinished = step >= req.targetTokens;
          const activeTokens = Math.min(step, req.targetTokens);
          const progressPct = Math.round((activeTokens / req.targetTokens) * 100);

          // In static batching, if finished, slot remains idle bubble waste until step=100
          const isBubbleWaste = schedulerMode === "static" && isFinished && step < maxTokens;
          // In continuous batching, a new request (e.g. Req 5, 6) takes the slot immediately
          const isSlotReused = schedulerMode === "continuous" && isFinished;

          return (
            <div key={req.id} className="p-3 bg-stone-950 rounded-lg border border-stone-800 text-xs">
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-stone-800/80 font-mono">
                <span className="font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  {req.id} ({req.targetTokens} target tokens)
                </span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                    isBubbleWaste
                      ? "bg-red-950 text-red-300 border border-red-800 animate-pulse"
                      : isSlotReused
                      ? "bg-sky-950 text-sky-300 border border-sky-800"
                      : isFinished
                      ? "bg-emerald-950 text-emerald-300"
                      : "bg-amber-950 text-amber-300"
                  }`}
                >
                  {isBubbleWaste
                    ? "Idle Bubble Waste (Slot Blocked)"
                    : isSlotReused
                    ? "Slot Reused (Next Request Injected)"
                    : isFinished
                    ? "Completed"
                    : "Decoding..."}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-3 bg-stone-900 rounded-full overflow-hidden flex">
                <div
                  className={`h-full transition-all duration-100 ${
                    isBubbleWaste ? "bg-red-500/40" : "bg-emerald-500"
                  }`}
                  style={{ width: `${progressPct}%` }}
                ></div>
                {isBubbleWaste && (
                  <div
                    className="h-full bg-red-900/50 flex-1 border-l border-red-500/50"
                    title="Wasted GPU cycles"
                  ></div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-3 bg-stone-950/60 rounded border border-stone-800/80 text-xs text-stone-400 flex items-start gap-2">
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-stone-200">Engineering Takeaway:</strong> In Static Batching, Req 1 finishes at iteration 40, but its GPU execution slot and memory remain locked and idle for 60 additional iterations waiting for Req 2. Continuous Batching evicts Req 1 immediately, inserting new requests dynamically to maintain maximum GPU throughput.
        </div>
      </div>
    </div>
  );
}

/**
 * 3. Prefill vs Decode Phase Visualizer
 * Step-by-step inspector contrasting Compute-Bound Prefill vs Memory-Bandwidth-Bound Decode.
 */
export function PrefillVsDecodePhaseVisualizer() {
  const [activePhase, setActivePhase] = useState("prefill"); // prefill vs decode

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-sky-400" />
            Inference Physics: Prefill vs Decode Phase Inspector
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Analyze why prompt prefill is compute-bound while autoregressive decode is memory-bound.
          </p>
        </div>
        <div className="flex bg-stone-950 p-1 rounded-lg border border-stone-800 text-xs font-mono">
          <button
            onClick={() => setActivePhase("prefill")}
            className={`px-3 py-1 rounded font-bold uppercase transition-all ${
              activePhase === "prefill"
                ? "bg-sky-600 text-white"
                : "text-stone-400 hover:text-white"
            }`}
          >
            Phase 1: Prefill
          </button>
          <button
            onClick={() => setActivePhase("decode")}
            className={`px-3 py-1 rounded font-bold uppercase transition-all ${
              activePhase === "decode"
                ? "bg-amber-600 text-white"
                : "text-stone-400 hover:text-white"
            }`}
          >
            Phase 2: Decode
          </button>
        </div>
      </div>

      {activePhase === "prefill" ? (
        <div className="my-4 p-4 bg-stone-950 rounded-xl border border-sky-800/60 text-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-stone-800">
            <span className="font-bold text-sky-400 text-sm">Parallel Prompt Processing (Prefill)</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
              Compute-Bound (GEMM)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-[11px]">
            <div className="p-2.5 rounded bg-stone-900 border border-stone-800">
              <span className="text-stone-500 text-[10px] block uppercase">Matrix Operation</span>
              <span className="text-stone-200 font-bold">GEMM (Matrix-Matrix)</span>
            </div>
            <div className="p-2.5 rounded bg-stone-900 border border-stone-800">
              <span className="text-stone-500 text-[10px] block uppercase">Arithmetic Intensity</span>
              <span className="text-emerald-400 font-bold">High (FLOPs / Byte)</span>
            </div>
            <div className="p-2.5 rounded bg-stone-900 border border-stone-800">
              <span className="text-stone-500 text-[10px] block uppercase">Governing Metric</span>
              <span className="text-sky-300 font-bold">Time to First Token (TTFT)</span>
            </div>
          </div>

          <p className="text-stone-300 leading-relaxed text-xs">
            All prompt tokens are processed simultaneously in parallel. GPU Tensor Cores achieve near-peak utilization multiplying weight matrices by input activation tensors. Key and Value representations are written into VRAM to initialize the KV cache.
          </p>
        </div>
      ) : (
        <div className="my-4 p-4 bg-stone-950 rounded-xl border border-amber-800/60 text-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-stone-800">
            <span className="font-bold text-amber-400 text-sm">Autoregressive Generation (Decode)</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
              Memory-Bandwidth Bound (GEMV)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-[11px]">
            <div className="p-2.5 rounded bg-stone-900 border border-stone-800">
              <span className="text-stone-500 text-[10px] block uppercase">Matrix Operation</span>
              <span className="text-stone-200 font-bold">GEMV (Matrix-Vector)</span>
            </div>
            <div className="p-2.5 rounded bg-stone-900 border border-stone-800">
              <span className="text-stone-500 text-[10px] block uppercase">Arithmetic Intensity</span>
              <span className="text-red-400 font-bold">Very Low (HBM Bottleneck)</span>
            </div>
            <div className="p-2.5 rounded bg-stone-900 border border-stone-800">
              <span className="text-stone-500 text-[10px] block uppercase">Governing Metric</span>
              <span className="text-amber-300 font-bold">Time Per Output Token (TPOT)</span>
            </div>
          </div>

          <p className="text-stone-300 leading-relaxed text-xs">
            One token is generated at a time. To emit a single token, the entire model weight tensor (14 GB for 7B FP16) must be read from High Bandwidth Memory into GPU SRAM. Compute cores sit idle waiting for memory transfer, making HBM bandwidth the limiting bottleneck.
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * 4. Quantization Precision & Hardware Feasibility Sizer
 * Compares model weights across FP32, FP16, INT8, and INT4 with hardware feasibility badges.
 */
export function QuantizationPrecisionMemoryComparator() {
  const [modelParamsBillions, setModelParamsBillions] = useState(7);

  const precisions = [
    { id: "fp32", name: "FP32 (Single Precision)", bytesPerParam: 4.0, color: "text-red-400" },
    { id: "fp16", name: "FP16 / BF16 (Half Precision)", bytesPerParam: 2.0, color: "text-amber-400" },
    { id: "int8", name: "INT8 / FP8 (8-bit Quantized)", bytesPerParam: 1.0, color: "text-sky-400" },
    { id: "int4", name: "INT4 AWQ / GPTQ (4-bit Quantized)", bytesPerParam: 0.5, color: "text-emerald-400" }
  ];

  const getFeasibility = (vramGb) => {
    if (vramGb <= 3.5) return { text: "Runs on 4GB GPU (GTX 1650)", color: "bg-emerald-950 text-emerald-300 border-emerald-800" };
    if (vramGb <= 10.0) return { text: "Runs on 12GB GPU (RTX 3060)", color: "bg-sky-950 text-sky-300 border-sky-800" };
    if (vramGb <= 20.0) return { text: "Requires 24GB GPU (RTX 4090)", color: "bg-amber-950 text-amber-300 border-amber-800" };
    return { text: "Requires Data Center GPU (A100 / H100 80GB)", color: "bg-red-950 text-red-300 border-red-800" };
  };

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-purple-400" />
            Quantization Precision & Hardware Sizer
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Compare weight memory footprints across model scales and verify hardware compatibility.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-400 font-mono">Model Scale:</span>
          <select
            value={modelParamsBillions}
            onChange={(e) => setModelParamsBillions(Number(e.target.value))}
            className="bg-stone-800 text-stone-200 text-xs px-2.5 py-1.5 rounded border border-stone-700 font-mono"
          >
            <option value={0.5}>0.5B (Tiny)</option>
            <option value={1.5}>1.5B (Small)</option>
            <option value={3}>3B (Compact)</option>
            <option value={7}>7B (Standard)</option>
            <option value={14}>14B (Mid-Scale)</option>
            <option value={70}>70B (Enterprise)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4">
        {precisions.map((p) => {
          const weightGb = modelParamsBillions * p.bytesPerParam;
          const badge = getFeasibility(weightGb);

          return (
            <div key={p.id} className="p-3.5 bg-stone-950 rounded-xl border border-stone-800 text-xs flex flex-col justify-between">
              <div>
                <span className="font-mono text-stone-400 text-[10px] block uppercase mb-1">
                  {p.name}
                </span>
                <div className={`text-2xl font-extrabold font-mono ${p.color}`}>
                  {weightGb.toFixed(1)} GB
                </div>
                <span className="text-[10px] text-stone-500 font-mono block mt-0.5">
                  ({p.bytesPerParam} bytes / parameter)
                </span>
              </div>

              <div className="mt-3 pt-3 border-t border-stone-800/80">
                <span className={`text-[9px] font-mono px-2 py-0.5 rounded border block text-center font-bold uppercase ${badge.color}`}>
                  {badge.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const SAMPLE_ANSWER_TOKENS = [
  "Java", " virtual", " threads", " are", " lightweight", " user", "-mode", " threads",
  " managed", " by", " the", " JVM", " runtime", " rather", " than", " the", " underlying",
  " operating", " system", " kernel.", " They", " mount", " onto", " carrier", " platform",
  " threads", " during", " CPU", " execution", " and", " unmount", " during", " blocking",
  " I/O", " calls."
];

/**
 * 5. Token Streaming & SSE Client Simulator
 * Simulates progressive Server-Sent Events token generation with live TTFT and TPOT metrics.
 */
export function TokenStreamingSseClientSimulator() {
  const [isStreaming, setIsStreaming] = useState(false);
  const [emittedTokens, setEmittedTokens] = useState([]);
  const [tpotDelayMs, setTpotDelayMs] = useState(40);

  useEffect(() => {
    let interval;
    if (isStreaming) {
      interval = setInterval(() => {
        setEmittedTokens((prev) => {
          if (prev.length >= SAMPLE_ANSWER_TOKENS.length) {
            setIsStreaming(false);
            return prev;
          }
          return [...prev, SAMPLE_ANSWER_TOKENS[prev.length]];
        });
      }, tpotDelayMs);
    }
    return () => clearInterval(interval);
  }, [isStreaming, tpotDelayMs]);

  const handleStart = () => {
    setEmittedTokens([]);
    setIsStreaming(true);
  };

  const handleStop = () => {
    setIsStreaming(false);
  };

  const ttftMs = 320; // Simulated TTFT
  const tokensGenerated = emittedTokens.length;
  const currentTpot = tokensGenerated > 1 ? tpotDelayMs : 0;
  const tokensPerSec = tokensGenerated > 0 ? (1000 / tpotDelayMs).toFixed(1) : "0.0";

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            Server-Sent Events (SSE) Progressive Token Streaming
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Simulate live HTTP event-stream generation and measure TTFT and TPOT latencies.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isStreaming ? (
            <button
              onClick={handleStop}
              className="px-3 py-1 text-xs rounded bg-red-600 hover:bg-red-500 text-white font-bold flex items-center gap-1.5"
            >
              <StopCircle size={14} /> Stop Stream
            </button>
          ) : (
            <button
              onClick={handleStart}
              className="px-3 py-1 text-xs rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-1.5"
            >
              <Play size={14} /> Start SSE Stream
            </button>
          )}
        </div>
      </div>

      {/* Streaming Delay Control */}
      <div className="flex items-center justify-between p-3 bg-stone-950 rounded-lg border border-stone-800 my-4 text-xs">
        <span className="text-stone-400">Simulation Decode Pace (TPOT):</span>
        <div className="flex items-center gap-3">
          <input
            type="range"
            min={20}
            max={100}
            step={5}
            value={tpotDelayMs}
            onChange={(e) => setTpotDelayMs(Number(e.target.value))}
            className="w-32 accent-amber-500"
          />
          <span className="font-mono text-amber-400 font-bold">{tpotDelayMs} ms/token</span>
        </div>
      </div>

      {/* Real-time Streaming Terminal */}
      <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 min-h-[140px] font-mono text-xs text-stone-200">
        <div className="flex items-center justify-between text-stone-500 pb-2 mb-2 border-b border-stone-800/80 text-[11px]">
          <span>HTTP/1.1 200 OK | Content-Type: text/event-stream</span>
          {isStreaming && <span className="text-emerald-400 animate-pulse font-bold">STREAM ACTIVE</span>}
        </div>
        <p className="leading-relaxed">
          {emittedTokens.map((tok, idx) => (
            <span key={idx} className="bg-amber-950/30 text-amber-200 px-0.5 rounded">
              {tok}
            </span>
          ))}
          {isStreaming && <span className="inline-block w-2 h-4 bg-amber-400 ml-1 animate-pulse"></span>}
          {emittedTokens.length === 0 && !isStreaming && (
            <span className="text-stone-600 italic">Click "Start SSE Stream" to simulate real-time token delivery...</span>
          )}
        </p>
      </div>

      {/* Telemetry Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-xs font-mono">
        <div className="p-2.5 bg-stone-950 rounded border border-stone-800">
          <span className="text-stone-500 text-[10px] block uppercase">Time to First Token</span>
          <span className="text-emerald-400 font-bold text-sm">{ttftMs} ms</span>
        </div>
        <div className="p-2.5 bg-stone-950 rounded border border-stone-800">
          <span className="text-stone-500 text-[10px] block uppercase">Time Per Token (TPOT)</span>
          <span className="text-amber-400 font-bold text-sm">{currentTpot} ms</span>
        </div>
        <div className="p-2.5 bg-stone-950 rounded border border-stone-800">
          <span className="text-stone-500 text-[10px] block uppercase">Tokens Emitted</span>
          <span className="text-white font-bold text-sm">{tokensGenerated} / {SAMPLE_ANSWER_TOKENS.length}</span>
        </div>
        <div className="p-2.5 bg-stone-950 rounded border border-stone-800">
          <span className="text-stone-500 text-[10px] block uppercase">Generation Speed</span>
          <span className="text-sky-400 font-bold text-sm">{tokensPerSec} tok/s</span>
        </div>
      </div>
    </div>
  );
}
