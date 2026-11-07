import React, { useState, useMemo } from "react";
import {
  Play,
  RotateCcw,
  Sliders,
  Code2,
  Cpu,
  Zap,
  HardDrive
} from "lucide-react";

// Candidate pool with simulated base logits
const CANDIDATE_POOL = [
  { token: "transforming", baseLogit: 4.2 },
  { token: "changing", baseLogit: 3.8 },
  { token: "revolutionizing", baseLogit: 3.1 },
  { token: "advancing", baseLogit: 2.4 },
  { token: "learning", baseLogit: 1.6 },
  { token: "computing", baseLogit: 0.9 },
  { token: "complex", baseLogit: 0.2 },
  { token: "banana", baseLogit: -3.5 }
];

/**
 * SIMULATOR 1: Autoregressive Next-Token Generation Simulator
 */
export function AutoregressiveGenerationSimulator() {
  const [temperature, setTemperature] = useState(0.7);
  const [topK, setTopK] = useState(3);
  const [topP, setTopP] = useState(0.9);
  const [generatedTokens, setGeneratedTokens] = useState(["Artificial", "intelligence", "is"]);

  const distribution = useMemo(() => {
    // 1. Temperature scaling
    const temp = Math.max(temperature, 0.05);
    const scaled = CANDIDATE_POOL.map((c) => ({
      ...c,
      scaledLogit: c.baseLogit / temp
    }));

    // 2. Sort descending
    scaled.sort((a, b) => b.scaledLogit - a.scaledLogit);

    // 3. Top-K filtering
    const topKCandidates = scaled.slice(0, Math.max(1, topK));

    // 4. Softmax over Top-K
    const maxLogit = Math.max(...topKCandidates.map((c) => c.scaledLogit));
    const expValues = topKCandidates.map((c) => Math.exp(c.scaledLogit - maxLogit));
    const sumExp = expValues.reduce((a, b) => a + b, 0);

    const withProbs = topKCandidates.map((c, i) => ({
      ...c,
      prob: expValues[i] / sumExp
    }));

    // 5. Top-P (Nucleus) filter
    let cumulative = 0;
    const finalCandidates = [];
    for (const item of withProbs) {
      finalCandidates.push(item);
      cumulative += item.prob;
      if (cumulative >= topP) break;
    }

    // Renormalize
    const finalSum = finalCandidates.reduce((acc, c) => acc + c.prob, 0);
    return finalCandidates.map((c) => ({
      ...c,
      normalizedProb: c.prob / finalSum
    }));
  }, [temperature, topK, topP]);

  const handleGenerateNext = () => {
    if (distribution.length === 0) return;
    // Sample according to normalized probability
    const rand = Math.random();
    let accum = 0;
    let selected = distribution[0].token;
    for (const item of distribution) {
      accum += item.normalizedProb;
      if (rand <= accum) {
        selected = item.token;
        break;
      }
    }
    setGeneratedTokens((prev) => [...prev, selected]);
  };

  const handleReset = () => {
    setGeneratedTokens(["Artificial", "intelligence", "is"]);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-orange-100 text-orange-700">
            <Zap size={18} />
          </div>
          <div>
            <h3 className="text-base font-bold text-stone-900">Autoregressive Generation & Decoding Simulator</h3>
            <p className="text-xs text-stone-500">Tune Temperature, Top-K, and Top-P to observe real-time candidate probability shifts</p>
          </div>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 transition"
        >
          <RotateCcw size={13} />
          Reset
        </button>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200 mb-5 text-xs">
        <div>
          <div className="flex justify-between font-semibold text-stone-700 mb-1">
            <span>Temperature (T):</span>
            <span className="font-mono text-orange-600 font-bold">{temperature.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="2.0"
            step="0.05"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
            <span>0.1 (Focused / Greedy)</span>
            <span>2.0 (Creative / Random)</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between font-semibold text-stone-700 mb-1">
            <span>Top-K Cutoff:</span>
            <span className="font-mono text-orange-600 font-bold">{topK}</span>
          </div>
          <input
            type="range"
            min="1"
            max="6"
            step="1"
            value={topK}
            onChange={(e) => setTopK(parseInt(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
            <span>1 (Strictly Greedy)</span>
            <span>6 (Broad Candidate Set)</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between font-semibold text-stone-700 mb-1">
            <span>Top-P (Nucleus):</span>
            <span className="font-mono text-orange-600 font-bold">{topP.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="1.0"
            step="0.05"
            value={topP}
            onChange={(e) => setTopP(parseFloat(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
            <span>0.2 (High Mass Only)</span>
            <span>1.0 (Full Distribution)</span>
          </div>
        </div>
      </div>

      {/* Generated Sequence Display */}
      <div className="mb-5 p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-sm leading-relaxed">
        <div className="text-[11px] uppercase tracking-wider text-stone-400 font-bold mb-2 flex items-center justify-between">
          <span>Active Context Sequence ({generatedTokens.length} tokens):</span>
          <span className="text-orange-400">Autoregressive State</span>
        </div>
        <div className="flex flex-wrap gap-1.5 items-center">
          {generatedTokens.map((t, idx) => (
            <span
              key={idx}
              className={`px-2 py-0.5 rounded text-xs ${
                idx < 3 ? "bg-stone-800 text-stone-300 border border-stone-700" : "bg-orange-600/30 text-orange-300 border border-orange-500/50"
              }`}
            >
              {t}
            </span>
          ))}
          <span className="inline-block w-2 h-4 bg-orange-500 animate-pulse ml-1" />
        </div>
      </div>

      {/* Candidate Probabilities Distribution Bar Chart */}
      <div className="space-y-2 mb-5">
        <div className="text-xs font-bold text-stone-700 flex justify-between">
          <span>Candidate Next Tokens (Ranked by Post-Filter Probability):</span>
          <span className="text-stone-500 font-normal">{distribution.length} eligible candidates in nucleus</span>
        </div>
        {distribution.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-xs">
            <span className="w-24 font-mono font-semibold text-stone-800 text-right">{item.token}</span>
            <div className="flex-1 bg-stone-100 rounded-full h-4 overflow-hidden relative border border-stone-200">
              <div
                className="bg-gradient-to-r from-orange-500 to-amber-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${item.normalizedProb * 100}%` }}
              />
            </div>
            <span className="w-14 font-mono font-bold text-stone-700 text-right">
              {(item.normalizedProb * 100).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>

      {/* Trigger Button */}
      <button
        onClick={handleGenerateNext}
        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-sm transition active:scale-98 cursor-pointer"
      >
        <Play size={14} />
        Generate Next Token Step
      </button>
    </div>
  );
}

/**
 * SIMULATOR 2: KV Cache Memory & GQA Savings Calculator
 */
export function KVCacheMemoryCalculator() {
  const [layers, setLayers] = useState(32);
  const [batchSize, setBatchSize] = useState(4);
  const [seqLength, setSeqLength] = useState(8192);
  const [kvHeads, setKvHeads] = useState(8);
  const headDim = 128;
  const [bytesPerElem, setBytesPerElem] = useState(2); // 2 = FP16/BF16, 1 = INT8/FP8

  const calculation = useMemo(() => {
    // Formula: 2 * L * B * T * H_KV * d_k * bytes
    const totalBytes = 2 * layers * batchSize * seqLength * kvHeads * headDim * bytesPerElem;
    const mib = totalBytes / (1024 * 1024);
    const gib = totalBytes / (1024 * 1024 * 1024);

    // MHA equivalent (assuming 32 heads)
    const mhaBytes = 2 * layers * batchSize * seqLength * 32 * headDim * bytesPerElem;
    const mhaGib = mhaBytes / (1024 * 1024 * 1024);
    const savingsPercent = Math.max(0, ((mhaBytes - totalBytes) / mhaBytes) * 100);

    return { totalBytes, mib, gib, mhaGib, savingsPercent };
  }, [layers, batchSize, seqLength, kvHeads, headDim, bytesPerElem]);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2 border-b border-stone-100 pb-3 mb-4">
        <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
          <HardDrive size={18} />
        </div>
        <div>
          <h3 className="text-base font-bold text-stone-900">KV-Cache Memory & Architecture Calculator</h3>
          <p className="text-xs text-stone-500">Calculate exact GPU VRAM consumed by Key-Value caching across sequence length & batch size</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {/* Sliders Column */}
        <div className="space-y-3.5 text-xs">
          <div>
            <div className="flex justify-between font-semibold text-stone-700 mb-1">
              <span>Transformer Layers (L):</span>
              <span className="font-mono text-orange-600 font-bold">{layers}</span>
            </div>
            <input
              type="range"
              min="12"
              max="96"
              step="4"
              value={layers}
              onChange={(e) => setLayers(parseInt(e.target.value))}
              className="w-full accent-orange-600"
            />
          </div>

          <div>
            <div className="flex justify-between font-semibold text-stone-700 mb-1">
              <span>Concurrent Batch Size (B):</span>
              <span className="font-mono text-orange-600 font-bold">{batchSize} users</span>
            </div>
            <input
              type="range"
              min="1"
              max="32"
              step="1"
              value={batchSize}
              onChange={(e) => setBatchSize(parseInt(e.target.value))}
              className="w-full accent-orange-600"
            />
          </div>

          <div>
            <div className="flex justify-between font-semibold text-stone-700 mb-1">
              <span>Sequence Length (T tokens):</span>
              <span className="font-mono text-orange-600 font-bold">{seqLength.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="1024"
              max="65536"
              step="1024"
              value={seqLength}
              onChange={(e) => setSeqLength(parseInt(e.target.value))}
              className="w-full accent-orange-600"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block font-semibold text-stone-700 mb-1">Attention Scheme:</label>
              <select
                value={kvHeads}
                onChange={(e) => setKvHeads(parseInt(e.target.value))}
                className="w-full px-2 py-1.5 border border-stone-300 rounded-lg bg-stone-50 text-xs font-mono"
              >
                <option value={32}>MHA (32 KV Heads)</option>
                <option value={8}>GQA (8 KV Heads - Llama 3)</option>
                <option value={4}>GQA (4 KV Heads)</option>
                <option value={1}>MQA (1 KV Head)</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-stone-700 mb-1">Precision (S):</label>
              <select
                value={bytesPerElem}
                onChange={(e) => setBytesPerElem(parseInt(e.target.value))}
                className="w-full px-2 py-1.5 border border-stone-300 rounded-lg bg-stone-50 text-xs font-mono"
              >
                <option value={4}>FP32 (4 bytes)</option>
                <option value={2}>FP16 / BF16 (2 bytes)</option>
                <option value={1}>FP8 / INT8 (1 byte)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="flex flex-col justify-between p-4 rounded-xl bg-stone-900 text-white font-mono">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-stone-400 font-bold mb-3">
              Calculated Memory Demand
            </div>
            <div className="text-3xl font-black text-amber-400 mb-1">
              {calculation.gib >= 1.0 ? `${calculation.gib.toFixed(2)} GiB` : `${calculation.mib.toFixed(1)} MiB`}
            </div>
            <div className="text-[11px] text-stone-400">
              Total Raw Bytes: {calculation.totalBytes.toLocaleString()} bytes
            </div>
          </div>

          <div className="border-t border-stone-800 pt-3 mt-4 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-stone-400">Equivalent Standard MHA (32 heads):</span>
              <span className="text-stone-200">{calculation.mhaGib.toFixed(2)} GiB</span>
            </div>
            <div className="flex justify-between font-bold">
              <span className="text-emerald-400">VRAM Savings via GQA:</span>
              <span className="text-emerald-400">{calculation.savingsPercent.toFixed(0)}% reduced</span>
            </div>
          </div>

          <div className="mt-4 p-2.5 rounded-lg bg-stone-800/80 border border-stone-700/80 text-[10px] text-stone-300 leading-relaxed font-mono">
            Formula: M_KV = 2 * L * B * T * H_KV * d_k * S (Bytes)
            <div className="mt-1 text-stone-400 font-sans">
              Notice: Doubling sequence length from 8K to 16K doubles KV memory linearly (O(T)), while batch size scales linearly (O(B)).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * SIMULATOR 3: Model Parameters & Memory Explorer (Dense vs MoE)
 */
export function ModelParameterAndMemoryExplorer() {
  const [selectedArch, setSelectedArch] = useState("llama3_8b");

  const archetypes = {
    llama3_8b: { name: "Llama-3-8B (Dense)", totalParams: 8.0, activeParams: 8.0, layers: 32, dModel: 4096, type: "Dense" },
    qwen3_14b: { name: "Qwen3-14B (Dense)", totalParams: 14.0, activeParams: 14.0, layers: 40, dModel: 5120, type: "Dense" },
    llama4_scout: { name: "Llama-4-Scout (MoE)", totalParams: 109.0, activeParams: 17.0, layers: 48, dModel: 6144, type: "MoE (16 Experts)" },
    llama3_70b: { name: "Llama-3-70B (Dense)", totalParams: 70.0, activeParams: 70.0, layers: 80, dModel: 8192, type: "Dense" }
  };

  const current = archetypes[selectedArch];

  const memory = useMemo(() => {
    const N = current.totalParams * 1e9;
    const fp32Gb = (N * 4) / 1e9;
    const fp16Gb = (N * 2) / 1e9;
    const int8Gb = (N * 1) / 1e9;
    const int4Gb = (N * 0.5) / 1e9;

    // AdamW training state (Weights 2B + Grads 4B + AdamW moments 8B = 14B per param in mixed precision)
    const trainVramGb = (N * 16) / 1e9;

    // 6ND compute for 15T tokens
    const trainingFlops = 6 * N * (15e12);

    return { fp32Gb, fp16Gb, int8Gb, int4Gb, trainVramGb, trainingFlops };
  }, [current]);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2 border-b border-stone-100 pb-3 mb-4">
        <div className="p-2 rounded-xl bg-orange-100 text-orange-700">
          <Cpu size={18} />
        </div>
        <div>
          <h3 className="text-base font-bold text-stone-900">Dense vs MoE Parameter & Storage Matrix</h3>
          <p className="text-xs text-stone-500">Explore parameter allocations, quantization storage, training VRAM, and 6ND compute</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(archetypes).map(([key, item]) => (
          <button
            key={key}
            onClick={() => setSelectedArch(key)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              selectedArch === key
                ? "bg-orange-600 text-white shadow-xs"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
          <div className="text-[10px] text-stone-500 uppercase font-bold">Total Parameters</div>
          <div className="text-xl font-black text-stone-900 font-mono mt-0.5">{current.totalParams}B</div>
          <div className="text-[10px] text-stone-400">{current.type}</div>
        </div>
        <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
          <div className="text-[10px] text-stone-500 uppercase font-bold">Active Tokens FLOPs</div>
          <div className="text-xl font-black text-orange-600 font-mono mt-0.5">{current.activeParams}B</div>
          <div className="text-[10px] text-stone-400">Activated Per Token</div>
        </div>
        <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
          <div className="text-[10px] text-stone-500 uppercase font-bold">FP16 Weight VRAM</div>
          <div className="text-xl font-black text-stone-900 font-mono mt-0.5">{memory.fp16Gb.toFixed(1)} GB</div>
          <div className="text-[10px] text-stone-400">Inference Baseline</div>
        </div>
        <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
          <div className="text-[10px] text-stone-500 uppercase font-bold">INT4 Quantized</div>
          <div className="text-xl font-black text-emerald-600 font-mono mt-0.5">{memory.int4Gb.toFixed(1)} GB</div>
          <div className="text-[10px] text-stone-400">Edge / Consumer Fit</div>
        </div>
      </div>

      {/* Memory Breakdown Bar */}
      <div className="p-4 rounded-xl bg-stone-900 text-white text-xs font-mono space-y-2.5">
        <div className="flex justify-between border-b border-stone-800 pb-2">
          <span className="text-stone-400">Architecture Specification:</span>
          <span className="text-amber-400 font-bold">{current.layers} Layers | {current.dModel} Hidden Dim</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-400">Training VRAM Required (Weights + Grads + AdamW):</span>
          <span className="text-red-400 font-bold">~{memory.trainVramGb.toFixed(0)} GB (Requires Cluster Distributed Sharding)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-400">Training Compute for 15T Tokens (6ND rule):</span>
          <span className="text-stone-200">{memory.trainingFlops.toExponential(2)} FLOPs</span>
        </div>
      </div>
    </div>
  );
}

/**
 * SIMULATOR 4: Byte Pair Encoding (BPE) Interactive Tokenizer Visualizer
 */
export function BpeTokenizerVisualizer() {
  const [inputText, setInputText] = useState("artificial intelligence");
  const [mergeStep, setMergeStep] = useState(0);

  // Simulated iterative merge steps
  const mergeHistory = useMemo(() => {
    return [
      { step: 0, desc: "Raw character segmentation", tokens: inputText.split("") },
      { step: 1, desc: "Merge frequent pair ('a', 'r') -> 'ar'", tokens: inputText.replace(/ar/g, "|ar|").split("|").filter(Boolean) },
      { step: 2, desc: "Merge pair ('i', 'n') -> 'in'", tokens: inputText.replace(/ar/g, "|ar|").replace(/in/g, "|in|").split("|").filter(Boolean) },
      { step: 3, desc: "Merge subword ('in', 't') -> 'int'", tokens: inputText.replace(/ar/g, "|ar|").replace(/int/g, "|int|").split("|").filter(Boolean) },
      { step: 4, desc: "Full Subword Vocabulary Segmentation", tokens: ["art", "ificial", " ", "intellig", "ence"] }
    ];
  }, [inputText]);

  const currentStep = mergeHistory[Math.min(mergeStep, mergeHistory.length - 1)];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
            <Code2 size={18} />
          </div>
          <div>
            <h3 className="text-base font-bold text-stone-900">Byte Pair Encoding (BPE) Merge Visualizer</h3>
            <p className="text-xs text-stone-500">Step through BPE pair merging from individual characters to compressed subword tokens</p>
          </div>
        </div>
        <div className="flex gap-1.5">
          <button
            disabled={mergeStep === 0}
            onClick={() => setMergeStep((s) => Math.max(0, s - 1))}
            className="px-2.5 py-1 text-xs rounded bg-stone-100 disabled:opacity-40 font-semibold"
          >
            Prev
          </button>
          <button
            disabled={mergeStep >= mergeHistory.length - 1}
            onClick={() => setMergeStep((s) => Math.min(mergeHistory.length - 1, s + 1))}
            className="px-2.5 py-1 text-xs rounded bg-orange-600 text-white disabled:opacity-40 font-semibold"
          >
            Next Merge Step
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-semibold text-stone-700 mb-1">Input Sample Text:</label>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            setMergeStep(0);
          }}
          className="w-full px-3 py-2 border border-stone-300 rounded-xl text-xs font-mono bg-stone-50"
        />
      </div>

      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 mb-4">
        <div className="text-xs font-bold text-stone-700 mb-2 flex justify-between">
          <span>Merge Step {currentStep.step} of 4:</span>
          <span className="text-orange-600">{currentStep.desc}</span>
        </div>
        <div className="flex flex-wrap gap-1.5 items-center">
          {currentStep.tokens.map((tok, i) => (
            <span
              key={i}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border transition ${
                tok.startsWith("[") || tok.length > 2
                  ? "bg-orange-100 text-orange-800 border-orange-300"
                  : "bg-white text-stone-800 border-stone-200"
              }`}
            >
              {tok === " " ? "<space>" : tok}
            </span>
          ))}
        </div>
        <div className="mt-3 text-[11px] text-stone-500 flex justify-between">
          <span>Token Count: {currentStep.tokens.length}</span>
          <span>Compression: {((1 - currentStep.tokens.length / Math.max(1, inputText.length)) * 100).toFixed(0)}% space reduction</span>
        </div>
      </div>
    </div>
  );
}

/**
 * SIMULATOR 5: Context Window Budget Explorer
 */
export function ContextBudgetExplorer() {
  const [contextLimit, setContextLimit] = useState(32768);
  const systemPrompt = 1200;
  const historyTokens = 4800;
  const [ragContext, setRagContext] = useState(18000);
  const outputTokens = 4096;

  const totalUsed = systemPrompt + historyTokens + ragContext + outputTokens;
  const headroom = contextLimit - totalUsed;
  const isOverflow = headroom < 0;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2 border-b border-stone-100 pb-3 mb-4">
        <div className="p-2 rounded-xl bg-orange-100 text-orange-700">
          <Sliders size={18} />
        </div>
        <div>
          <h3 className="text-base font-bold text-stone-900">LLM Context Window Budget Manager</h3>
          <p className="text-xs text-stone-500">Partition dynamic token budgets across system prompt, history, RAG chunks, and output headroom</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-4">
        <div>
          <label className="block font-semibold text-stone-700 mb-1">Model Context Window Ceiling:</label>
          <select
            value={contextLimit}
            onChange={(e) => setContextLimit(parseInt(e.target.value))}
            className="w-full px-3 py-1.5 border border-stone-300 rounded-lg bg-stone-50 font-mono text-xs"
          >
            <option value={8192}>8,192 Tokens (Legacy / Small)</option>
            <option value={16384}>16,384 Tokens</option>
            <option value={32768}>32,768 Tokens (Standard 32K)</option>
            <option value={131072}>131,072 Tokens (Llama 3 128K)</option>
          </select>
        </div>

        <div>
          <div className="flex justify-between font-semibold text-stone-700 mb-1">
            <span>Retrieved Documents (RAG):</span>
            <span className="font-mono text-orange-600 font-bold">{ragContext.toLocaleString()} tokens</span>
          </div>
          <input
            type="range"
            min="0"
            max={contextLimit}
            step="500"
            value={ragContext}
            onChange={(e) => setRagContext(parseInt(e.target.value))}
            className="w-full accent-orange-600"
          />
        </div>
      </div>

      {/* Stacked Progress Bar */}
      <div className="mb-4">
        <div className="w-full bg-stone-100 h-6 rounded-xl overflow-hidden flex border border-stone-200">
          <div style={{ width: `${Math.min(100, (systemPrompt / contextLimit) * 100)}%` }} className="bg-stone-500" title="System Prompt" />
          <div style={{ width: `${Math.min(100, (historyTokens / contextLimit) * 100)}%` }} className="bg-amber-500" title="Conversation History" />
          <div style={{ width: `${Math.min(100, (ragContext / contextLimit) * 100)}%` }} className="bg-orange-500" title="RAG Retrieved Documents" />
          <div style={{ width: `${Math.min(100, (outputTokens / contextLimit) * 100)}%` }} className="bg-emerald-500" title="Reserved Output" />
        </div>
        <div className="flex flex-wrap gap-4 text-[11px] font-semibold text-stone-600 mt-2">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-stone-500" /> System: {systemPrompt}</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> History: {historyTokens}</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500" /> RAG: {ragContext}</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Output: {outputTokens}</span>
        </div>
      </div>

      <div className={`p-4 rounded-xl border flex items-center justify-between text-xs font-mono ${
        isOverflow ? "bg-red-50 border-red-200 text-red-800" : "bg-stone-900 border-stone-800 text-stone-100"
      }`}>
        <div>
          <span className="font-bold">Total Tokens Allocated: </span>
          <span>{totalUsed.toLocaleString()} / {contextLimit.toLocaleString()}</span>
        </div>
        <div className="font-bold">
          {isOverflow ? (
            <span className="text-red-600">OVERFLOW: {-headroom} tokens exceeded!</span>
          ) : (
            <span className="text-emerald-400">Headroom Remaining: +{headroom.toLocaleString()} tokens</span>
          )}
        </div>
      </div>
    </div>
  );
}
