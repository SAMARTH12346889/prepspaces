import React, { useState } from "react";
import {
  Layers,
  Cpu,
  TrendingDown,
  GitMerge,
  ShieldCheck,
  ShieldAlert,
  ArrowRight,
  Sliders,
  CheckCircle2
} from "lucide-react";

// =========================================================================
// 1. LORA LOW-RANK MATRIX DECOMPOSITION VISUALIZER
// =========================================================================
export function LoraLowRankMatrixDecompositionVisualizer() {
  const [dimension, setDimension] = useState(4096);
  const [rank, setRank] = useState(16);
  const [alpha, setAlpha] = useState(32);

  const fullParameters = dimension * dimension;
  const loraParameters = (dimension * rank) + (rank * dimension);
  const parameterReduction = ((fullParameters - loraParameters) / fullParameters) * 100;
  const scalingFactor = alpha / rank;

  // Approximate memory in MB for FP16 (2 bytes per param)
  const fullMemoryMb = (fullParameters * 2) / (1024 * 1024);
  const loraMemoryMb = (loraParameters * 2) / (1024 * 1024);

  return (
    <div className="bg-stone-900 text-stone-100 p-5 rounded-2xl border border-stone-800 shadow-xl space-y-5">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-stone-800 pb-3">
        <div>
          <h3 className="font-bold text-base text-stone-100 flex items-center gap-2">
            <Layers className="text-amber-400" size={18} />
            LoRA Low-Rank Decomposition &amp; Parameter Reduction Visualizer
          </h3>
          <p className="text-xs text-stone-400">
            Decompose weight update &Delta;W &isin; &#8477;<sup>d&times;d</sup> into B &isin; &#8477;<sup>d&times;r</sup> and A &isin; &#8477;<sup>r&times;d</sup> (r &ll; d)
          </p>
        </div>
        <div className="font-mono text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
          Scaling: &alpha;/r = {scalingFactor.toFixed(2)}x
        </div>
      </div>

      {/* Interactive Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
        <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
          <div className="flex justify-between text-stone-300">
            <span>Hidden Dimension (d)</span>
            <span className="font-bold text-amber-400">{dimension}</span>
          </div>
          <div className="flex gap-1.5 flex-wrap pt-1">
            {[1024, 2048, 4096, 8192].map((d) => (
              <button
                key={d}
                onClick={() => setDimension(d)}
                className={`px-2 py-1 rounded text-[11px] transition-all ${
                  dimension === d
                    ? "bg-amber-500 text-stone-950 font-bold"
                    : "bg-stone-800 text-stone-400 hover:bg-stone-700"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
          <span className="text-[10px] text-stone-500 block">Typical for 1.5B (1536), 7B (4096), 70B (8192)</span>
        </div>

        <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
          <div className="flex justify-between text-stone-300">
            <span>LoRA Rank (r)</span>
            <span className="font-bold text-sky-400">r = {rank}</span>
          </div>
          <div className="flex gap-1.5 flex-wrap pt-1">
            {[4, 8, 16, 32, 64].map((rVal) => (
              <button
                key={rVal}
                onClick={() => setRank(rVal)}
                className={`px-2 py-1 rounded text-[11px] transition-all ${
                  rank === rVal
                    ? "bg-sky-500 text-stone-950 font-bold"
                    : "bg-stone-800 text-stone-400 hover:bg-stone-700"
                }`}
              >
                {rVal}
              </button>
            ))}
          </div>
          <span className="text-[10px] text-stone-500 block">Inner intrinsic bottleneck dimension</span>
        </div>

        <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
          <div className="flex justify-between text-stone-300">
            <span>Scaling Factor (&alpha;)</span>
            <span className="font-bold text-purple-400">&alpha; = {alpha}</span>
          </div>
          <div className="flex gap-1.5 flex-wrap pt-1">
            {[8, 16, 32, 64].map((a) => (
              <button
                key={a}
                onClick={() => setAlpha(a)}
                className={`px-2 py-1 rounded text-[11px] transition-all ${
                  alpha === a
                    ? "bg-purple-500 text-stone-950 font-bold"
                    : "bg-stone-800 text-stone-400 hover:bg-stone-700"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
          <span className="text-[10px] text-stone-500 block">Typically 2&times;r for optimal gradient scale</span>
        </div>
      </div>

      {/* Visual Mathematical Decomposition */}
      <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-4">
        <div className="text-xs font-mono text-stone-400 text-center">
          W&prime; = W<sub>0</sub> (Frozen) + (&alpha; / r) &middot; B &times; A
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-mono">
          {/* Base Matrix W0 */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg bg-stone-800 border-2 border-stone-600 flex flex-col items-center justify-center text-center p-2 relative">
              <span className="text-stone-300 font-bold">W<sub>0</sub></span>
              <span className="text-[10px] text-stone-500 mt-1">{dimension}&times;{dimension}</span>
              <span className="text-[9px] text-rose-400 font-bold absolute bottom-1.5">FROZEN</span>
            </div>
            <span className="text-[11px] text-stone-400 mt-1">Base Matrix</span>
          </div>

          <span className="text-xl font-bold text-amber-400">+</span>

          {/* Matrix B */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-28 rounded-lg bg-sky-950 border-2 border-sky-500 flex flex-col items-center justify-center text-center p-1 relative">
              <span className="text-sky-300 font-bold">B</span>
              <span className="text-[9px] text-sky-400 mt-1">{dimension}&times;{rank}</span>
              <span className="text-[8px] text-stone-400 absolute bottom-1">zeros</span>
            </div>
            <span className="text-[11px] text-stone-400 mt-1">Adapter B</span>
          </div>

          <span className="text-lg font-bold text-stone-500">&times;</span>

          {/* Matrix A */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-8 rounded-lg bg-purple-950 border-2 border-purple-500 flex flex-col items-center justify-center text-center p-1 relative">
              <span className="text-purple-300 font-bold">A</span>
              <span className="text-[9px] text-purple-400">{rank}&times;{dimension}</span>
              <span className="text-[8px] text-stone-400 absolute right-1">N(0,&sigma;)</span>
            </div>
            <span className="text-[11px] text-stone-400 mt-1">Adapter A</span>
          </div>

          <span className="text-xl font-bold text-amber-400">=</span>

          {/* Effective Adapted W' */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-lg bg-gradient-to-br from-amber-950/40 to-stone-800 border-2 border-amber-500 flex flex-col items-center justify-center text-center p-2">
              <span className="text-amber-300 font-bold">W&prime;</span>
              <span className="text-[10px] text-stone-400 mt-1">{dimension}&times;{dimension}</span>
              <span className="text-[9px] text-emerald-400 font-bold mt-1">ADAPTED</span>
            </div>
            <span className="text-[11px] text-stone-400 mt-1">Adapted Weight</span>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
          <span className="text-stone-500 block text-[11px]">Full Matrix Parameters</span>
          <span className="text-base font-bold text-stone-300">{(fullParameters / 1e6).toFixed(2)}M</span>
          <span className="text-[10px] text-stone-500 block">{fullMemoryMb.toFixed(1)} MB (FP16)</span>
        </div>
        <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
          <span className="text-stone-500 block text-[11px]">LoRA Trainable Params</span>
          <span className="text-base font-bold text-sky-400">{(loraParameters / 1e3).toFixed(1)}K</span>
          <span className="text-[10px] text-stone-500 block">{loraMemoryMb.toFixed(2)} MB (FP16)</span>
        </div>
        <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
          <span className="text-stone-500 block text-[11px]">Parameter Reduction</span>
          <span className="text-base font-bold text-emerald-400">{parameterReduction.toFixed(2)}%</span>
          <span className="text-[10px] text-stone-500 block">{(fullParameters / loraParameters).toFixed(0)}x fewer weights</span>
        </div>
        <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
          <span className="text-stone-500 block text-[11px]">Effective Scaling</span>
          <span className="text-base font-bold text-purple-400">{scalingFactor.toFixed(2)}x</span>
          <span className="text-[10px] text-stone-500 block">&Delta;W multiplier</span>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 2. FINE-TUNING VS RAG VS PROMPT ENGINEERING MATRIX COMPARATOR
// =========================================================================
export function FineTuningVsRagVsPromptMatrixComparator() {
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState(0);

  const scenarios = [
    {
      id: "rubric",
      name: "Java Technical Interview Evaluation Rubric",
      description: "Automated candidate assessment requiring strict JSON formatting, 10-point scoring rubrics, and pedagogical follow-ups.",
      recommendation: "Supervised Fine-Tuning (SFT) + Light RAG",
      reason: "Fine-tuning permanently embeds the complex JSON schema and scoring behavior into weights; RAG supplies latest Java version docs.",
      scores: { prompt: 55, rag: 70, fineTuning: 95 }
    },
    {
      id: "company-docs",
      name: "Company Internal HR & Benefits Handbook",
      description: "Employee questions regarding quarterly updated health plans, 401(k) matching, and PTO policies.",
      recommendation: "Pure Retrieval-Augmented Generation (RAG)",
      reason: "Policies change frequently; fine-tuning would require expensive retraining every quarter and hallucination risks are unacceptable.",
      scores: { prompt: 40, rag: 96, fineTuning: 45 }
    },
    {
      id: "casual",
      name: "Customer Support Greeting & Sentiment Polishing",
      description: "Rewording email drafts to sound empathetic, concise, and professional without strict domain knowledge.",
      recommendation: "Pure Prompt Engineering",
      reason: "Zero training setup needed. Few-shot system prompts easily steer the tone at minimal operational overhead.",
      scores: { prompt: 92, rag: 35, fineTuning: 50 }
    },
    {
      id: "medical",
      name: "Clinical Pathology Lab Diagnostics & ICD-10 Coding",
      description: "Extracting ICD-10 codes and summarizing complex histological lab findings with strict medical jargon.",
      recommendation: "Hybrid: Domain Fine-Tuning + Verified RAG",
      reason: "Fine-tuning aligns medical terminology and coding syntax; RAG validates against authoritative medical databases.",
      scores: { prompt: 30, rag: 82, fineTuning: 94 }
    }
  ];

  const current = scenarios[selectedScenarioIdx];

  return (
    <div className="bg-stone-900 text-stone-100 p-5 rounded-2xl border border-stone-800 shadow-xl space-y-5">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-stone-800 pb-3">
        <div>
          <h3 className="font-bold text-base text-stone-100 flex items-center gap-2">
            <Sliders className="text-sky-400" size={18} />
            Fine-Tuning vs. Prompt Engineering vs. RAG Architecture Selector
          </h3>
          <p className="text-xs text-stone-400">
            Select an enterprise scenario to evaluate trade-offs across cost, latency, knowledge recency, and behavioral adherence.
          </p>
        </div>
      </div>

      {/* Scenario Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
        {scenarios.map((sc, idx) => (
          <button
            key={sc.id}
            onClick={() => setSelectedScenarioIdx(idx)}
            className={`p-3 rounded-xl text-left border transition-all ${
              selectedScenarioIdx === idx
                ? "bg-sky-500/20 border-sky-500 text-sky-200 font-semibold shadow-xs"
                : "bg-stone-950 border-stone-800 text-stone-400 hover:bg-stone-850"
            }`}
          >
            <div className="font-bold truncate">{sc.name}</div>
            <div className="text-[11px] text-stone-500 line-clamp-2 mt-1">{sc.description}</div>
          </button>
        ))}
      </div>

      {/* Selected Scenario Analysis Card */}
      <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-850 pb-2">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block">Recommended Strategy</span>
            <span className="text-base font-bold text-amber-400">{current.recommendation}</span>
          </div>
          <span className="text-xs text-stone-400 max-w-md">{current.reason}</span>
        </div>

        {/* Fit Score Bars */}
        <div className="space-y-2.5 text-xs font-mono pt-1">
          <div>
            <div className="flex justify-between text-stone-400 text-[11px] mb-1">
              <span>Supervised Fine-Tuning (SFT / QLoRA)</span>
              <span className="font-bold text-amber-400">{current.scores.fineTuning}% Match</span>
            </div>
            <div className="w-full h-2 bg-stone-900 rounded-full overflow-hidden">
              <div
                style={{ width: `${current.scores.fineTuning}%` }}
                className="h-full bg-amber-500 transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-stone-400 text-[11px] mb-1">
              <span>Retrieval-Augmented Generation (RAG)</span>
              <span className="font-bold text-sky-400">{current.scores.rag}% Match</span>
            </div>
            <div className="w-full h-2 bg-stone-900 rounded-full overflow-hidden">
              <div
                style={{ width: `${current.scores.rag}%` }}
                className="h-full bg-sky-500 transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-stone-400 text-[11px] mb-1">
              <span>Prompt Engineering (In-Context)</span>
              <span className="font-bold text-purple-400">{current.scores.prompt}% Match</span>
            </div>
            <div className="w-full h-2 bg-stone-900 rounded-full overflow-hidden">
              <div
                style={{ width: `${current.scores.prompt}%` }}
                className="h-full bg-purple-500 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 3. QLORA MEMORY SAVINGS CALCULATOR
// =========================================================================
export function QloraMemorySavingsCalculator() {
  const [modelBillion, setModelBillion] = useState(7);
  const [batchSize, setBatchSize] = useState(2);
  const [seqLen, setSeqLen] = useState(1024);

  // Full Fine-Tuning: FP16 weights (2B) + FP16 grads (2B) + FP32 AdamW states (12B) = 16B/param
  const fullWeightAndOptGib = (modelBillion * 1e9 * 16) / (1024 ** 3);
  const fullActivationsGib = (batchSize * seqLen * 0.003) * (modelBillion / 7);
  const fullTotalGib = fullWeightAndOptGib + fullActivationsGib;

  // Standard LoRA (FP16 base): FP16 base (2B) + adapter weights/grads/opt (0.1B) ~ 2.2B/param
  const loraWeightAndOptGib = (modelBillion * 1e9 * 2.2) / (1024 ** 3);
  const loraActivationsGib = (batchSize * seqLen * 0.0015) * (modelBillion / 7);
  const loraTotalGib = loraWeightAndOptGib + loraActivationsGib;

  // QLoRA: 4-bit NF4 base (0.5B) + double quant + adapter states (0.15B) ~ 0.68B/param
  const qloraWeightAndOptGib = (modelBillion * 1e9 * 0.68) / (1024 ** 3);
  const qloraActivationsGib = (batchSize * seqLen * 0.0012) * (modelBillion / 7); // with grad checkpointing
  const qloraTotalGib = qloraWeightAndOptGib + qloraActivationsGib;

  return (
    <div className="bg-stone-900 text-stone-100 p-5 rounded-2xl border border-stone-800 shadow-xl space-y-5">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-stone-800 pb-3">
        <div>
          <h3 className="font-bold text-base text-stone-100 flex items-center gap-2">
            <Cpu className="text-emerald-400" size={18} />
            QLoRA VRAM Footprint &amp; Hardware Compatibility Calculator
          </h3>
          <p className="text-xs text-stone-400">
            Compare peak training memory across Full Fine-Tuning, Standard LoRA (FP16), and QLoRA (4-bit NF4).
          </p>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
        <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1.5">
          <span className="text-stone-400 block">Model Size:</span>
          <div className="flex gap-1.5">
            {[1.5, 7, 14, 70].map((m) => (
              <button
                key={m}
                onClick={() => setModelBillion(m)}
                className={`flex-1 py-1 rounded text-xs transition-all ${
                  modelBillion === m
                    ? "bg-emerald-500 text-stone-950 font-bold"
                    : "bg-stone-800 text-stone-400 hover:bg-stone-700"
                }`}
              >
                {m}B
              </button>
            ))}
          </div>
        </div>

        <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1.5">
          <div className="flex justify-between text-stone-400">
            <span>Per-Device Batch:</span>
            <span className="font-bold text-emerald-400">{batchSize}</span>
          </div>
          <div className="flex gap-1.5">
            {[1, 2, 4, 8].map((b) => (
              <button
                key={b}
                onClick={() => setBatchSize(b)}
                className={`flex-1 py-1 rounded text-xs transition-all ${
                  batchSize === b
                    ? "bg-emerald-500 text-stone-950 font-bold"
                    : "bg-stone-800 text-stone-400 hover:bg-stone-700"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1.5">
          <div className="flex justify-between text-stone-400">
            <span>Sequence Length:</span>
            <span className="font-bold text-emerald-400">{seqLen} tokens</span>
          </div>
          <div className="flex gap-1.5">
            {[512, 1024, 2048, 4096].map((s) => (
              <button
                key={s}
                onClick={() => setSeqLen(s)}
                className={`flex-1 py-1 rounded text-xs transition-all ${
                  seqLen === s
                    ? "bg-emerald-500 text-stone-950 font-bold"
                    : "bg-stone-800 text-stone-400 hover:bg-stone-700"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Three-Way Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        {/* Full Fine-Tuning */}
        <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-bold text-stone-300">1. Full Fine-Tuning</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40">
              FP16 / FP32
            </span>
          </div>
          <div className="text-2xl font-bold text-rose-400">{fullTotalGib.toFixed(1)} GiB</div>
          <p className="text-[11px] text-stone-500 leading-tight">
            Requires {fullTotalGib > 80 ? "Multi-GPU Cluster (FSDP)" : "Enterprise A100 (80GB)"}.
          </p>
        </div>

        {/* Standard LoRA */}
        <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-bold text-stone-300">2. Standard LoRA</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
              FP16 Base
            </span>
          </div>
          <div className="text-2xl font-bold text-amber-400">{loraTotalGib.toFixed(1)} GiB</div>
          <p className="text-[11px] text-stone-500 leading-tight">
            Fits on {loraTotalGib <= 24 ? "Consumer RTX 4090 (24GB)" : "A100 (80GB)"}.
          </p>
        </div>

        {/* QLoRA */}
        <div className="p-4 rounded-xl bg-stone-950 border border-emerald-500/40 bg-emerald-950/20 space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-bold text-emerald-300">3. QLoRA (NF4)</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
              4-bit NF4
            </span>
          </div>
          <div className="text-2xl font-bold text-emerald-400">{qloraTotalGib.toFixed(1)} GiB</div>
          <p className="text-[11px] text-stone-400 leading-tight">
            {qloraTotalGib <= 8
              ? "Fits on Laptop / RTX 4060 (8GB)!"
              : qloraTotalGib <= 16
              ? "Fits on Cloud T4 / L4 (16GB)!"
              : "Fits comfortably on RTX 4090 (24GB)!"}
          </p>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 4. TRAINING VS VALIDATION LOSS & OVERFITTING CURVE
// =========================================================================
export function TrainingValidationLossOverfittingCurve() {
  const [epochs, setEpochs] = useState(5);
  const [learningRateExp, setLearningRateExp] = useState(-4); // 2e-4
  const [dropoutRate, setDropoutRate] = useState(0.05);

  // Generate simulated loss curve points across 10 evaluation steps
  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const lrFactor = Math.pow(10, learningRateExp + 4); // baseline = 1.0 at 2e-4

  const dataPoints = steps.map((s) => {
    // Training loss continuously decays
    const tLoss = Math.max(0.15, 2.1 * Math.exp(-0.25 * s * lrFactor));
    // Validation loss drops then may rise if overfitted
    const overfitInflection = 6 / lrFactor + (dropoutRate * 20);
    let vLoss;
    if (s <= overfitInflection) {
      vLoss = Math.max(0.85, 2.2 * Math.exp(-0.22 * s * lrFactor));
    } else {
      const overfitPenalty = (s - overfitInflection) * (0.12 * lrFactor) * (1.0 - dropoutRate);
      vLoss = 0.85 + overfitPenalty;
    }
    return { step: s, trainLoss: tLoss, valLoss: vLoss };
  });

  const lastPoint = dataPoints[dataPoints.length - 1];
  const isOverfitting = lastPoint.valLoss > 1.2 && lastPoint.trainLoss < 0.5;

  return (
    <div className="bg-stone-900 text-stone-100 p-5 rounded-2xl border border-stone-800 shadow-xl space-y-5">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-stone-800 pb-3">
        <div>
          <h3 className="font-bold text-base text-stone-100 flex items-center gap-2">
            <TrendingDown className="text-purple-400" size={18} />
            Training vs. Validation Loss &amp; Generalization Gap Forensics
          </h3>
          <p className="text-xs text-stone-400">
            Simulate training trajectory. Observe the early stopping inflection point and generalization gap.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isOverfitting ? (
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse flex items-center gap-1.5">
              <ShieldAlert size={14} /> Overfitting Detected
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
              <ShieldCheck size={14} /> Healthy Generalization
            </span>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
        <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1.5">
          <div className="flex justify-between text-stone-400">
            <span>Learning Rate:</span>
            <span className="font-bold text-purple-400">{`2e${learningRateExp}`}</span>
          </div>
          <div className="flex gap-1.5">
            {[-5, -4, -3].map((exp) => (
              <button
                key={exp}
                onClick={() => setLearningRateExp(exp)}
                className={`flex-1 py-1 rounded text-xs transition-all ${
                  learningRateExp === exp
                    ? "bg-purple-500 text-stone-950 font-bold"
                    : "bg-stone-800 text-stone-400 hover:bg-stone-700"
                }`}
              >
                {`2e${exp}`}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1.5">
          <div className="flex justify-between text-stone-400">
            <span>Training Epochs:</span>
            <span className="font-bold text-purple-400">{epochs}</span>
          </div>
          <div className="flex gap-1.5">
            {[2, 3, 5, 8].map((ep) => (
              <button
                key={ep}
                onClick={() => setEpochs(ep)}
                className={`flex-1 py-1 rounded text-xs transition-all ${
                  epochs === ep
                    ? "bg-purple-500 text-stone-950 font-bold"
                    : "bg-stone-800 text-stone-400 hover:bg-stone-700"
                }`}
              >
                {ep}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1.5">
          <div className="flex justify-between text-stone-400">
            <span>LoRA Dropout:</span>
            <span className="font-bold text-purple-400">{dropoutRate}</span>
          </div>
          <div className="flex gap-1.5">
            {[0.0, 0.05, 0.1, 0.2].map((dp) => (
              <button
                key={dp}
                onClick={() => setDropoutRate(dp)}
                className={`flex-1 py-1 rounded text-xs transition-all ${
                  dropoutRate === dp
                    ? "bg-purple-500 text-stone-950 font-bold"
                    : "bg-stone-800 text-stone-400 hover:bg-stone-700"
                }`}
              >
                {dp}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Simulated Loss Curve Table / Bars */}
      <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
        <div className="flex justify-between text-xs font-mono text-stone-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block"></span> Training Loss
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span> Validation Loss
          </span>
        </div>

        <div className="grid grid-cols-10 gap-1.5 pt-2 items-end h-32">
          {dataPoints.map((dp) => {
            const trainHeight = Math.min(100, (dp.trainLoss / 2.5) * 100);
            const valHeight = Math.min(100, (dp.valLoss / 2.5) * 100);
            return (
              <div key={dp.step} className="flex flex-col items-center h-full justify-end group">
                <div className="w-full flex gap-0.5 items-end justify-center h-full">
                  <div
                    style={{ height: `${trainHeight}%` }}
                    className="w-1.5 bg-sky-400 rounded-t-sm"
                    title={`Step ${dp.step} Train: ${dp.trainLoss.toFixed(2)}`}
                  />
                  <div
                    style={{ height: `${valHeight}%` }}
                    className="w-1.5 bg-amber-400 rounded-t-sm"
                    title={`Step ${dp.step} Val: ${dp.valLoss.toFixed(2)}`}
                  />
                </div>
                <span className="text-[9px] font-mono text-stone-500 mt-1">s{dp.step}</span>
              </div>
            );
          })}
        </div>

        <div className="text-[11px] font-mono text-stone-400 pt-2 border-t border-stone-850 flex justify-between">
          <span>Final Train Loss: <strong className="text-sky-400">{lastPoint.trainLoss.toFixed(2)}</strong></span>
          <span>Final Val Loss: <strong className="text-amber-400">{lastPoint.valLoss.toFixed(2)}</strong></span>
          <span>Gap: <strong className={isOverfitting ? "text-rose-400" : "text-emerald-400"}>+{(lastPoint.valLoss - lastPoint.trainLoss).toFixed(2)}</strong></span>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 5. LORA MODEL MERGE AND UNLOAD SIMULATOR
// =========================================================================
export function LoRaModelMergeAndUnloadSimulator() {
  const [currentStage, setCurrentStage] = useState(1);

  const stages = [
    {
      id: 1,
      name: "1. Separate Base & Adapter Weights",
      desc: "Base weights W_0 reside frozen in memory. Every inference forward pass computes W_0*x and (alpha/r)*B*A*x separately, adding ~12ms latency overhead."
    },
    {
      id: 2,
      name: "2. Compute Low-Rank Product Delta W",
      desc: "PEFT calculates the dense delta matrix: Delta W = (alpha/r) * (B @ A). For a 4096x4096 layer, Delta W produces a 16.8M parameter floating-point update."
    },
    {
      id: 3,
      name: "3. Floating-Point Weight Addition W_merged",
      desc: "The update is added directly in-place: W_merged = W_0 + Delta W in FP16/BF16. The adapter matrices B and A are unhooked and discarded from memory."
    },
    {
      id: 4,
      name: "4. Standalone Safetensors Export",
      desc: "Model is saved to disk as standard Hugging Face safetensors. Deploys natively to vLLM, Ollama, or TGI with 0ms adapter latency overhead and zero PEFT dependencies."
    }
  ];

  return (
    <div className="bg-stone-900 text-stone-100 p-5 rounded-2xl border border-stone-800 shadow-xl space-y-5">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-stone-800 pb-3">
        <div>
          <h3 className="font-bold text-base text-stone-100 flex items-center gap-2">
            <GitMerge className="text-emerald-400" size={18} />
            LoRA merge_and_unload() Weight Consolidation Stepper
          </h3>
          <p className="text-xs text-stone-400">
            Fusing trained low-rank adapters into base model weights for zero-overhead production inference.
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4].map((s) => (
            <button
              key={s}
              onClick={() => setCurrentStage(s)}
              className={`w-7 h-7 rounded-lg font-mono text-xs font-bold transition-all ${
                currentStage === s
                  ? "bg-emerald-500 text-stone-950 shadow-md"
                  : "bg-stone-800 text-stone-400 hover:bg-stone-700"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Stage Visual Card */}
      <div className="p-5 bg-stone-950 rounded-xl border border-stone-800 space-y-4">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-sm">
          <CheckCircle2 size={16} />
          {stages[currentStage - 1].name}
        </div>
        <p className="text-xs text-stone-300 leading-relaxed font-sans">
          {stages[currentStage - 1].desc}
        </p>

        {/* Visual State Representation */}
        <div className="p-4 bg-stone-900 rounded-lg border border-stone-850 flex items-center justify-center gap-4 text-xs font-mono">
          {currentStage === 1 && (
            <div className="flex items-center gap-3">
              <span className="px-3 py-2 rounded bg-stone-800 border border-stone-700 text-stone-300">W<sub>0</sub> (Base FP16)</span>
              <span className="text-stone-500">+</span>
              <span className="px-3 py-2 rounded bg-sky-950 border border-sky-500 text-sky-300">LoRA Adapter (B &times; A)</span>
              <ArrowRight size={14} className="text-stone-500" />
              <span className="text-amber-400">Dual Forward Pass (+12ms latency)</span>
            </div>
          )}

          {currentStage === 2 && (
            <div className="flex items-center gap-3">
              <span className="px-3 py-2 rounded bg-sky-950 border border-sky-500 text-sky-300">&Delta;W = (&alpha;/r) &middot; (B @ A)</span>
              <ArrowRight size={14} className="text-stone-500" />
              <span className="text-purple-400">Synthesizing Dense Tensor Matrix</span>
            </div>
          )}

          {currentStage === 3 && (
            <div className="flex items-center gap-3">
              <span className="px-3 py-2 rounded bg-emerald-950 border border-emerald-500 text-emerald-300">
                W<sub>merged</sub> = W<sub>0</sub> + &Delta;W
              </span>
              <ArrowRight size={14} className="text-stone-500" />
              <span className="text-rose-400 font-bold">Unloading Adapters B &amp; A</span>
            </div>
          )}

          {currentStage === 4 && (
            <div className="flex items-center gap-3">
              <span className="px-3 py-2 rounded bg-emerald-600 text-stone-950 font-bold">
                model.safetensors (Single File)
              </span>
              <ArrowRight size={14} className="text-stone-500" />
              <span className="text-emerald-400 font-bold">0ms Overhead &middot; Native vLLM / Ollama</span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center text-xs font-mono">
        <button
          disabled={currentStage === 1}
          onClick={() => setCurrentStage((prev) => Math.max(1, prev - 1))}
          className="px-3 py-1.5 rounded-lg bg-stone-800 text-stone-300 hover:bg-stone-700 disabled:opacity-40 transition-all"
        >
          &larr; Previous Stage
        </button>
        <span className="text-stone-500">Stage {currentStage} of 4</span>
        <button
          disabled={currentStage === 4}
          onClick={() => setCurrentStage((prev) => Math.min(4, prev + 1))}
          className="px-3 py-1.5 rounded-lg bg-emerald-600 text-stone-950 font-bold hover:bg-emerald-500 disabled:opacity-40 transition-all"
        >
          Next Stage &rarr;
        </button>
      </div>
    </div>
  );
}

const AIFineTuningDomainDiagrams = {
  LoraLowRankMatrixDecompositionVisualizer,
  FineTuningVsRagVsPromptMatrixComparator,
  QloraMemorySavingsCalculator,
  TrainingValidationLossOverfittingCurve,
  LoRaModelMergeAndUnloadSimulator
};

export default AIFineTuningDomainDiagrams;
