import React, { useState, useEffect } from "react";
import {
  Cpu,
  Zap,
  Layers,
  Database,
  Search,
  Server,
  Activity,
  Sliders,
  Shield,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  SlidersHorizontal,
  HardDrive,
  RefreshCw,
  Terminal,
  Play,
  RotateCcw,
} from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 1: LLM INFERENCE LIFECYCLE & LATENCY DECOMPOSITION
 * Simulates Prompt Prefill phase vs Autoregressive Decode phase with live token
 * streaming, TTFT (Time to First Token), and inter-token latency.
 * ---------------------------------------------------------------------------
 */
export function InferenceLifecycleDiagram() {
  const [promptTokens, setPromptTokens] = useState(1500);
  const [outputTokensMax, setOutputTokensMax] = useState(250);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentTokensGenerated, setCurrentTokensGenerated] = useState(0);
  const [phase, setPhase] = useState("idle"); // "idle" | "prefill" | "decode" | "complete"
  const [queueDelayMs] = useState(120);

  // Computations
  const prefillTimeMs = Math.round((promptTokens / 1000) * 80); // ~80ms per 1k input tokens on A100
  const ttftMs = queueDelayMs + prefillTimeMs;
  const interTokenTimeMs = 25; // 40 tokens/sec decode speed

  useEffect(() => {
    let interval = null;
    if (isGenerating && phase === "decode") {
      interval = setInterval(() => {
        setCurrentTokensGenerated((prev) => {
          if (prev >= outputTokensMax) {
            setPhase("complete");
            setIsGenerating(false);
            return prev;
          }
          return prev + 5; // generate chunks
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isGenerating, phase, outputTokensMax]);

  const startInference = () => {
    setCurrentTokensGenerated(0);
    setPhase("prefill");
    setIsGenerating(true);

    setTimeout(() => {
      setPhase("decode");
    }, prefillTimeMs);
  };

  const resetInference = () => {
    setIsGenerating(false);
    setPhase("idle");
    setCurrentTokensGenerated(0);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 mb-1">
            <Cpu className="w-3.5 h-3.5 text-orange-600" />
            Inference Engine Runtime
          </span>
          <h4 className="text-base font-bold text-stone-900">
            LLM Inference Lifecycle: Prefill vs. Autoregressive Decode
          </h4>
        </div>
        <div className="flex items-center gap-2">
          {!isGenerating ? (
            <button
              onClick={startInference}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-orange-600 hover:bg-orange-700 text-white shadow-xs transition-all"
            >
              <Play className="w-3.5 h-3.5" />
              Run Generation Simulation
            </button>
          ) : (
            <button
              onClick={resetInference}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-white shadow-xs transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Sliders for Context & Generation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs font-semibold text-stone-800">
            <span>Input Prompt Context:</span>
            <span className="font-mono text-orange-600 font-bold">{promptTokens} tokens</span>
          </div>
          <input
            type="range"
            min="200"
            max="8000"
            step="200"
            disabled={isGenerating}
            value={promptTokens}
            onChange={(e) => setPromptTokens(parseInt(e.target.value))}
            className="w-full accent-orange-600 mt-2"
          />
          <div className="flex justify-between text-[10px] text-stone-700 mt-1">
            <span>200 (Short question)</span>
            <span>4000 (RAG context)</span>
            <span>8000 (Full resume + history)</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs font-semibold text-stone-800">
            <span>Target Output Tokens:</span>
            <span className="font-mono text-orange-600 font-bold">{outputTokensMax} tokens</span>
          </div>
          <input
            type="range"
            min="50"
            max="1000"
            step="50"
            disabled={isGenerating}
            value={outputTokensMax}
            onChange={(e) => setOutputTokensMax(parseInt(e.target.value))}
            className="w-full accent-orange-600 mt-2"
          />
          <div className="flex justify-between text-[10px] text-stone-700 mt-1">
            <span>50 (Quick status)</span>
            <span>250 (Code review)</span>
            <span>1000 (Complete mock eval)</span>
          </div>
        </div>
      </div>

      {/* Latency Pipeline Visualizer */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">Queue Wait Delay</div>
          <div className="text-lg font-bold font-mono text-stone-900 mt-0.5">{queueDelayMs} ms</div>
          <div className="text-[11px] text-stone-700">Admission scheduler latency</div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">Phase 1: Prefill Time</div>
          <div className="text-lg font-bold font-mono text-stone-900 mt-0.5">{prefillTimeMs} ms</div>
          <div className="text-[11px] text-stone-700">Compute attention over prompt</div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">TTFT (Time to First Token)</div>
          <div className="text-lg font-bold font-mono text-orange-600 mt-0.5">{ttftMs} ms</div>
          <div className="text-[11px] text-stone-700">Perceived user responsiveness</div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">Phase 2: Decode Speed</div>
          <div className="text-lg font-bold font-mono text-emerald-600 mt-0.5">~40 tokens/s</div>
          <div className="text-[11px] text-stone-700">{interTokenTimeMs}ms inter-token gap</div>
        </div>
      </div>

      {/* Live Generation Progress Bar */}
      <div className="p-4 rounded-xl bg-white border border-stone-200">
        <div className="flex items-center justify-between text-xs font-semibold text-stone-800 mb-2">
          <div className="flex items-center gap-2">
            <span>Generation State:</span>
            <span
              className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase ${
                phase === "idle"
                  ? "bg-stone-100 text-stone-700"
                  : phase === "prefill"
                  ? "bg-amber-100 text-amber-800 animate-pulse"
                  : phase === "decode"
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {phase === "idle"
                ? "Ready"
                : phase === "prefill"
                ? "Prefill (Processing Prompt)"
                : phase === "decode"
                ? "Autoregressive Decoding"
                : "Generation Complete"}
            </span>
          </div>
          <span className="font-mono text-stone-700">
            {currentTokensGenerated} / {outputTokensMax} tokens
          </span>
        </div>

        <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full transition-all duration-100 ${
              phase === "prefill"
                ? "bg-amber-500 w-1/12 animate-pulse"
                : phase === "complete"
                ? "bg-blue-600"
                : "bg-emerald-500"
            }`}
            style={{
              width:
                phase === "prefill"
                  ? "10%"
                  : `${(currentTokensGenerated / outputTokensMax) * 100}%`,
            }}
          />
        </div>

        <div className="mt-3 text-[11px] text-stone-700 flex items-center justify-between">
          <span>
            <strong>Key takeaway:</strong> Oversized prompts heavily inflate Phase 1 (prefill) and KV-cache
            allocation. Context pruning is a major latency optimization.
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 2: GPU VRAM & KV CACHE SIZING CALCULATOR
 * Models model parameter storage (FP16, INT8, INT4) alongside dynamic KV cache
 * memory requirements across context lengths and concurrency tiers.
 * ---------------------------------------------------------------------------
 */
export function GpuMemoryCalculatorDiagram() {
  const [modelParamsB, setModelParamsB] = useState(7); // 7B, 13B, 70B
  const [quantFormat, setQuantFormat] = useState("fp16"); // "fp16" (2B), "int8" (1B), "int4" (0.5B)
  const [concurrentUsers, setConcurrentUsers] = useState(32);
  const [contextTokens, setContextTokens] = useState(4096);
  const [gpuModel, setGpuModel] = useState("A10G_24GB");

  // Bytes per parameter
  const bytesPerParam = quantFormat === "fp16" ? 2 : quantFormat === "int8" ? 1 : 0.5;
  const weightMemoryGb = (modelParamsB * bytesPerParam).toFixed(1);

  // KV cache memory per token: 2 * num_layers * hidden_size * 2 bytes (FP16)
  // For 7B model: 32 layers * 4096 hidden * 2 * 2 bytes ≈ 524 KB per 1k context tokens
  const kvCachePerTokenKb = (modelParamsB / 7) * 0.524;
  const totalKvCacheGb = (
    (concurrentUsers * contextTokens * kvCachePerTokenKb) /
    (1024 * 1024)
  ).toFixed(1);

  const runtimeOverheadGb = 2.0; // CUDA context, PyTorch activation workspace
  const totalMemoryRequiredGb = (
    parseFloat(weightMemoryGb) +
    parseFloat(totalKvCacheGb) +
    runtimeOverheadGb
  ).toFixed(1);

  const gpuVramCapacity =
    gpuModel === "T4_16GB"
      ? 16
      : gpuModel === "A10G_24GB"
      ? 24
      : gpuModel === "L40S_48GB"
      ? 48
      : 80; // A100/H100 80GB

  const fitsOnSingleGpu = parseFloat(totalMemoryRequiredGb) <= gpuVramCapacity;
  const vramUtilizationPct = Math.min(
    100,
    Math.round((parseFloat(totalMemoryRequiredGb) / gpuVramCapacity) * 100)
  );

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-1">
            <HardDrive className="w-3.5 h-3.5 text-blue-600" />
            VRAM & KV Cache Sizing
          </span>
          <h4 className="text-base font-bold text-stone-900">
            GPU Memory Capacity & Dynamic KV-Cache Sizing Calculator
          </h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { label: "7B (Llama-3)", p: 7 },
            { label: "13B / 14B (Qwen)", p: 14 },
            { label: "70B (Llama-3.1)", p: 70 },
          ].map((m) => (
            <button
              key={m.p}
              onClick={() => setModelParamsB(m.p)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                modelParamsB === m.p
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <label className="text-xs font-semibold text-stone-800 block mb-1">Quantization Format</label>
          <div className="grid grid-cols-3 gap-1">
            {[
              { id: "fp16", label: "FP16 (2B)" },
              { id: "int8", label: "INT8 (1B)" },
              { id: "int4", label: "INT4 (0.5B)" },
            ].map((q) => (
              <button
                key={q.id}
                onClick={() => setQuantFormat(q.id)}
                className={`py-1 rounded text-[11px] font-medium transition-all ${
                  quantFormat === q.id
                    ? "bg-orange-600 text-white font-bold"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs font-semibold text-stone-800">
            <span>Concurrent Sequences:</span>
            <span className="font-mono text-orange-600 font-bold">{concurrentUsers}</span>
          </div>
          <input
            type="range"
            min="4"
            max="128"
            step="4"
            value={concurrentUsers}
            onChange={(e) => setConcurrentUsers(parseInt(e.target.value))}
            className="w-full accent-orange-600 mt-2"
          />
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs font-semibold text-stone-800">
            <span>Avg Context Length:</span>
            <span className="font-mono text-orange-600 font-bold">{contextTokens}</span>
          </div>
          <input
            type="range"
            min="1024"
            max="16384"
            step="1024"
            value={contextTokens}
            onChange={(e) => setContextTokens(parseInt(e.target.value))}
            className="w-full accent-orange-600 mt-2"
          />
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <label className="text-xs font-semibold text-stone-800 block mb-1">Target Accelerator</label>
          <select
            value={gpuModel}
            onChange={(e) => setGpuModel(e.target.value)}
            className="w-full text-xs p-1.5 border border-stone-300 rounded bg-stone-50 text-stone-900"
          >
            <option value="T4_16GB">NVIDIA T4 (16 GB VRAM)</option>
            <option value="A10G_24GB">NVIDIA A10G (24 GB VRAM)</option>
            <option value="L40S_48GB">NVIDIA L40S (48 GB VRAM)</option>
            <option value="A100_80GB">NVIDIA A100 / H100 (80 GB VRAM)</option>
          </select>
        </div>
      </div>

      {/* Memory Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">Model Weights</div>
          <div className="text-xl font-bold font-mono text-stone-900 mt-0.5">{weightMemoryGb} GB</div>
          <div className="text-[11px] text-stone-700">{modelParamsB}B params @ {bytesPerParam}B/param</div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">Dynamic KV Cache</div>
          <div className="text-xl font-bold font-mono text-orange-600 mt-0.5">{totalKvCacheGb} GB</div>
          <div className="text-[11px] text-stone-700">For {concurrentUsers} active streams</div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">Total VRAM Demand</div>
          <div className="text-xl font-bold font-mono text-stone-900 mt-0.5">
            {totalMemoryRequiredGb} GB
          </div>
          <div className="text-[11px] text-stone-700">Includes 2.0 GB CUDA overhead</div>
        </div>

        <div
          className={`p-3 rounded-xl border ${
            fitsOnSingleGpu ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200"
          }`}
        >
          <div className="text-xs font-semibold text-stone-700">Placement Assessment</div>
          <div
            className={`text-sm font-bold mt-0.5 flex items-center gap-1.5 ${
              fitsOnSingleGpu ? "text-emerald-800" : "text-rose-800"
            }`}
          >
            {fitsOnSingleGpu ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Fits on 1x {gpuModel.split("_")[0]} ({vramUtilizationPct}%)
              </>
            ) : (
              <>
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                OOM! Requires Multi-GPU TP
              </>
            )}
          </div>
          <div className="text-[10px] text-stone-600 mt-0.5">
            {fitsOnSingleGpu
              ? "Safe headroom for bursts."
              : `Needs Tensor Parallelism (TP=${Math.ceil(parseFloat(totalMemoryRequiredGb) / gpuVramCapacity)})`}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 3: VECTOR RETRIEVAL & HYBRID RRF RERANKER
 * Compares Lexical BM25 search vs Approximate Nearest Neighbor (ANN) vector
 * search, fusing results via Reciprocal Rank Fusion (RRF) with tenant isolation.
 * ---------------------------------------------------------------------------
 */
export function HybridRetrievalDiagram() {
  const [query, setQuery] = useState("synchronized vs ReentrantLock in Java");
  const [enableTenantFilter, setEnableTenantFilter] = useState(true);

  // Sample Documents
  const corpus = [
    {
      id: "doc_1",
      title: "Java Concurrency: ReentrantLock API & Fairness",
      tenantId: "tenant_public",
      lexicalRank: 1, // BM25 matched both keywords
      vectorRank: 2, // Semantically close
      snippet: "ReentrantLock provides explicit lock polling, fairness policies, and interruptible locks.",
    },
    {
      id: "doc_2",
      title: "JVM Synchronization Under the Hood (monitorenter)",
      tenantId: "tenant_public",
      lexicalRank: 2, // Matched synchronized
      vectorRank: 1, // Highest semantic closeness to concurrency lock comparison
      snippet: "The synchronized keyword compiles to bytecode monitorenter/monitorexit instructions.",
    },
    {
      id: "doc_3",
      title: "Confidential Competitor Rubric: Thread Safety",
      tenantId: "tenant_private_enterprise",
      lexicalRank: 3,
      vectorRank: 3,
      snippet: "Private internal rubric on evaluating multithreading interview candidates.",
    },
    {
      id: "doc_4",
      title: "AtomicInteger & CAS in java.util.concurrent",
      tenantId: "tenant_public",
      lexicalRank: 5,
      vectorRank: 4,
      snippet: "Compare-And-Swap (CAS) instructions eliminate thread blocking entirely.",
    },
  ];

  // Reciprocal Rank Fusion: RRF_Score = 1/(60 + lexicalRank) + 1/(60 + vectorRank)
  const k = 60;
  const results = corpus
    .map((doc) => {
      const rrfScore = (1 / (k + doc.lexicalRank) + 1 / (k + doc.vectorRank)).toFixed(4);
      return { ...doc, rrfScore: parseFloat(rrfScore) };
    })
    .filter((doc) => (enableTenantFilter ? doc.tenantId === "tenant_public" : true))
    .sort((a, b) => b.rrfScore - a.rrfScore);

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-1">
            <Search className="w-3.5 h-3.5 text-emerald-600" />
            Hybrid Retrieval & RRF
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Lexical (BM25) + Dense Vector (kNN) Fusion with Tenant Scoping
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setEnableTenantFilter(!enableTenantFilter)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              enableTenantFilter
                ? "bg-stone-900 text-white shadow-xs"
                : "bg-rose-600 text-white"
            }`}
          >
            {enableTenantFilter ? "Tenant Filter: ACTIVE" : "Tenant Filter: BYPASSED (Leak Risk)"}
          </button>
        </div>
      </div>

      {/* Query Bar */}
      <div className="p-3 mb-4 rounded-xl bg-white border border-stone-200 flex items-center justify-between gap-3">
        <div className="text-xs text-stone-800 flex items-center gap-2">
          <span className="font-semibold text-stone-500">Query:</span>
          <span className="font-mono text-orange-700 font-bold">"{query}"</span>
        </div>
        <div className="text-[11px] text-stone-700">
          {"Fusion Formula: RRF(d) = Σ 1 / (60 + rank(d))"}
        </div>
      </div>

      {/* Retrieved Candidates Grid */}
      <div className="space-y-2">
        {results.map((doc, idx) => (
          <div
            key={doc.id}
            className={`p-3 rounded-xl border transition-all ${
              doc.tenantId === "tenant_private_enterprise"
                ? "border-rose-300 bg-rose-50/70"
                : "border-stone-200 bg-white"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-800 flex items-center justify-center text-[10px]">
                    {idx + 1}
                  </span>
                  <span>{doc.title}</span>
                  {doc.tenantId === "tenant_private_enterprise" && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
                      Cross-Tenant Leak!
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-stone-600 mt-1">{doc.snippet}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs font-mono font-bold text-orange-600">
                  RRF: {doc.rrfScore}
                </div>
                <div className="text-[10px] text-stone-500 mt-0.5">
                  Lexical Rank: #{doc.lexicalRank} | Vector Rank: #{doc.vectorRank}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * MASTER DISPATCHER COMPONENT FOR MODULE 21
 * ---------------------------------------------------------------------------
 */
export default function VisualDiagramComponentModule21({ diagramId }) {
  if (diagramId === "inference_lifecycle") return <InferenceLifecycleDiagram />;
  if (diagramId === "gpu_memory") return <GpuMemoryCalculatorDiagram />;
  if (diagramId === "hybrid_retrieval") return <HybridRetrievalDiagram />;

  // Default view
  return (
    <div className="space-y-6">
      <InferenceLifecycleDiagram />
      <GpuMemoryCalculatorDiagram />
      <HybridRetrievalDiagram />
    </div>
  );
}
