import React, { useState, useMemo } from "react";
import {
  Play,
  RotateCcw,
  Sliders,
  Layers,
  Code2,
  Waves,
  Eye
} from "lucide-react";

// Synthetic Q, K, V values for attention visualizer
const sampleTokens = ["The", "neural", "network"];

const qVectors = [
  [1.2, 0.4, -0.8, 1.0],
  [-0.5, 1.5, 0.2, -0.7],
  [0.8, -0.6, 1.4, 0.3]
];

const kVectors = [
  [1.0, 0.2, -0.5, 0.9],
  [-0.3, 1.2, 0.4, -0.6],
  [0.7, -0.5, 1.1, 0.4]
];

const vVectors = [
  [10.0, 2.0],
  [5.0, 15.0],
  [8.0, 12.0]
];

/**
 * SIMULATOR 1: Scaled Dot-Product Attention Step-by-Step Visualizer
 */
export function ScaledDotProductAttentionVisualizer() {
  const [dK, setDK] = useState(4);
  const [selectedTokenIdx, setSelectedTokenIdx] = useState(0);

  const calculation = useMemo(() => {
    const q = qVectors[selectedTokenIdx].slice(0, dK);
    const sqrtDk = Math.sqrt(dK);

    // Compute raw dot products for selected Q against all K
    const rawScores = kVectors.map((k) => {
      const kSliced = k.slice(0, dK);
      return q.reduce((sum, val, idx) => sum + val * kSliced[idx], 0);
    });

    // Scaled scores
    const scaledScores = rawScores.map((s) => s / sqrtDk);

    // Softmax probabilities
    const maxScore = Math.max(...scaledScores);
    const expScores = scaledScores.map((s) => Math.exp(s - maxScore));
    const sumExp = expScores.reduce((a, b) => a + b, 0);
    const attnWeights = expScores.map((e) => e / sumExp);

    // Weighted Value combination
    const outputDim = vVectors[0].length;
    const outputVector = new Array(outputDim).fill(0);
    for (let i = 0; i < vVectors.length; i++) {
      for (let j = 0; j < outputDim; j++) {
        outputVector[j] += attnWeights[i] * vVectors[i][j];
      }
    }

    return {
      rawScores,
      scaledScores,
      attnWeights,
      outputVector,
      sqrtDk
    };
  }, [selectedTokenIdx, dK]);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-orange-100 text-orange-600">
            <Sliders size={18} />
          </span>
          <div>
            <h3 className="text-base font-bold text-stone-900">
              Scaled Dot-Product Attention Step-by-Step Visualizer
            </h3>
            <p className="text-xs text-stone-500">
              Trace compatibility scoring, scaling factor division, Softmax normalization, and Value aggregation.
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
        <div>
          <label className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
            Select Query Token (Current Position)
          </label>
          <div className="flex gap-2">
            {sampleTokens.map((tok, idx) => (
              <button
                key={tok}
                onClick={() => setSelectedTokenIdx(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  selectedTokenIdx === idx
                    ? "bg-orange-600 text-white shadow-2xs"
                    : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-100"
                }`}
              >
                q_{idx}: "{tok}"
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
            Key Dimension d_k: {dK} (sqrt(d_k) = {calculation.sqrtDk.toFixed(2)})
          </label>
          <input
            type="range"
            min="2"
            max="4"
            step="1"
            value={dK}
            onChange={(e) => setDK(parseInt(e.target.value, 10))}
            className="w-full accent-orange-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-stone-500 mt-1">
            <span>d_k = 2</span>
            <span>d_k = 3</span>
            <span>d_k = 4</span>
          </div>
        </div>
      </div>

      {/* Step Calculation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-4 text-xs font-mono">
        {/* Step 1 */}
        <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
          <div className="font-bold text-stone-800 text-[11px] uppercase tracking-wider mb-2 text-orange-700">
            1. Raw Dot Products (QK^T)
          </div>
          <div className="space-y-1">
            {calculation.rawScores.map((score, i) => (
              <div key={i} className="flex justify-between p-1 rounded bg-stone-50">
                <span className="text-stone-600">k_{i} ("{sampleTokens[i]}"):</span>
                <span className="font-bold text-stone-900">{score.toFixed(3)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2 */}
        <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
          <div className="font-bold text-stone-800 text-[11px] uppercase tracking-wider mb-2 text-orange-700">
            2. Scaled Scores (/ sqrt(d_k))
          </div>
          <div className="space-y-1">
            {calculation.scaledScores.map((scaled, i) => (
              <div key={i} className="flex justify-between p-1 rounded bg-stone-50">
                <span className="text-stone-600">s_{i}:</span>
                <span className="font-bold text-stone-900">{scaled.toFixed(3)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 3 */}
        <div className="p-3.5 rounded-xl border border-orange-300 bg-orange-50/50">
          <div className="font-bold text-orange-950 text-[11px] uppercase tracking-wider mb-2">
            3. Softmax Attention Weights
          </div>
          <div className="space-y-1">
            {calculation.attnWeights.map((weight, i) => (
              <div key={i} className="flex justify-between p-1 rounded bg-white border border-orange-200">
                <span className="text-orange-900 font-semibold">{sampleTokens[i]}:</span>
                <span className="font-bold text-orange-600">{(weight * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 4 */}
        <div className="p-3.5 rounded-xl border border-stone-900 bg-stone-900 text-stone-100">
          <div className="font-bold text-stone-300 text-[11px] uppercase tracking-wider mb-2">
            4. Weighted Value Output
          </div>
          <p className="text-[11px] text-stone-400 mb-2">Combined context vector:</p>
          <div className="p-2 rounded bg-stone-800 text-orange-300 font-bold text-center">
            [{calculation.outputVector.map((v) => v.toFixed(2)).join(", ")}]
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * SIMULATOR 2: Causal Masking & Padding Grid Playground
 */
export function CausalAndPaddingMaskPlayground() {
  const [seqLen, setSeqLen] = useState(5);
  const [enableCausalMask, setEnableCausalMask] = useState(true);
  const [padCount, setPadCount] = useState(1);

  const tokens = useMemo(() => {
    const base = ["I", "study", "deep", "neural", "networks", "models", "data"];
    return base.slice(0, seqLen).map((t, idx) => (idx >= seqLen - padCount ? "<PAD>" : t));
  }, [seqLen, padCount]);

  // Compute boolean mask matrix
  const maskMatrix = useMemo(() => {
    const matrix = [];
    for (let r = 0; r < seqLen; r++) {
      const row = [];
      for (let c = 0; c < seqLen; c++) {
        const isTargetPad = r >= seqLen - padCount;
        const isSourcePad = c >= seqLen - padCount;
        const isFutureToken = enableCausalMask && c > r;

        const isAllowed = !isTargetPad && !isSourcePad && !isFutureToken;
        row.push(isAllowed);
      }
      matrix.push(row);
    }
    return matrix;
  }, [seqLen, enableCausalMask, padCount]);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-orange-100 text-orange-600">
            <Eye size={18} />
          </span>
          <div>
            <h3 className="text-base font-bold text-stone-900">
              Causal &amp; Padding Attention Mask Matrix Playground
            </h3>
            <p className="text-xs text-stone-500">
              Visualize how lower-triangular causal masks and padding masks replace disallowed scores with -inf.
            </p>
          </div>
        </div>
      </div>

      {/* Control Flags */}
      <div className="flex flex-wrap items-center gap-4 bg-stone-50 p-4 rounded-xl border border-stone-200">
        <label className="flex items-center gap-2 text-xs font-semibold text-stone-800 cursor-pointer">
          <input
            type="checkbox"
            checked={enableCausalMask}
            onChange={(e) => setEnableCausalMask(e.target.checked)}
            className="rounded text-orange-600 focus:ring-orange-500"
          />
          Enable Causal Lower-Triangular Mask (Decoder Next-Token)
        </label>

        <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
          <span>Sequence Length:</span>
          <select
            value={seqLen}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              setSeqLen(val);
              if (padCount >= val) setPadCount(val - 1);
            }}
            className="p-1 rounded border border-stone-300 bg-white text-xs font-mono"
          >
            {[4, 5, 6].map((l) => (
              <option key={l} value={l}>{l} tokens</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
          <span>Pad Tokens:</span>
          <select
            value={padCount}
            onChange={(e) => setPadCount(parseInt(e.target.value, 10))}
            className="p-1 rounded border border-stone-300 bg-white text-xs font-mono"
          >
            {[0, 1, 2].map((p) => (
              <option key={p} value={p}>{p} &lt;PAD&gt;</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid Display */}
      <div className="mt-5 overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="text-[11px] font-mono text-stone-500 mb-2">
            Keys (Columns / Input Positions) &rarr;
          </div>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-16 shrink-0" />
            {tokens.map((tok, cIdx) => (
              <div key={cIdx} className="w-14 text-center font-mono font-bold text-xs text-stone-700 truncate">
                {tok}
              </div>
            ))}
          </div>

          {maskMatrix.map((row, rIdx) => (
            <div key={rIdx} className="flex items-center gap-2 mb-1.5">
              <div className="w-16 shrink-0 text-right font-mono font-bold text-xs text-stone-700 truncate pr-1">
                {tokens[rIdx]}
              </div>
              {row.map((isAllowed, cIdx) => (
                <div
                  key={cIdx}
                  className={`w-14 h-10 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    isAllowed
                      ? "bg-green-100 text-green-900 border border-green-300 shadow-2xs"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                  title={isAllowed ? "Allowed (Score calculated)" : "Masked (-inf / 0.0 weight)"}
                >
                  {isAllowed ? "1" : "0 (-inf)"}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-4 text-xs font-mono text-stone-600">
        <span className="flex items-center gap-1.5">
          <span className="w-3.5 h-3.5 rounded bg-green-100 border border-green-300 inline-block" />
          1 = Allowed (Participates in Softmax)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3.5 h-3.5 rounded bg-red-50 border border-red-200 inline-block" />
          0 = Masked (-inf converted to 0.0 weight)
        </span>
      </div>
    </div>
  );
}

/**
 * SIMULATOR 3: Multi-Head Dimension Splitting Tool
 */
export function MultiHeadAttentionSplittingTool() {
  const [numHeads, setNumHeads] = useState(4);
  const dModel = 128;
  const dK = dModel / numHeads;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-orange-100 text-orange-600">
            <Layers size={18} />
          </span>
          <div>
            <h3 className="text-base font-bold text-stone-900">
              Multi-Head Representation Subspaces &amp; Dimension Splitting
            </h3>
            <p className="text-xs text-stone-500">
              See how the total model dimension d_model splits evenly into h independent heads of dimension d_k.
            </p>
          </div>
        </div>
      </div>

      {/* Head selector */}
      <div className="flex items-center gap-3 bg-stone-50 p-4 rounded-xl border border-stone-200">
        <span className="text-xs font-mono font-bold text-stone-700 uppercase">
          Number of Heads (h):
        </span>
        <div className="flex gap-2">
          {[1, 2, 4, 8].map((h) => (
            <button
              key={h}
              onClick={() => setNumHeads(h)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                numHeads === h
                  ? "bg-orange-600 text-white shadow-2xs"
                  : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-100"
              }`}
            >
              {h} {h === 1 ? "Head" : "Heads"}
            </button>
          ))}
        </div>
        <div className="ml-auto text-xs font-mono text-stone-600">
          d_model = {dModel} &rarr; <strong>d_k = {dK}</strong>
        </div>
      </div>

      {/* Visual Subspace Representation */}
      <div className="mt-5 space-y-4">
        <div className="text-xs font-mono font-bold text-stone-700 uppercase">
          Parallel Attention Subspaces:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: numHeads }).map((_, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-orange-200 bg-orange-50/60 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-bold text-orange-950 font-mono flex items-center justify-between">
                  <span>Head #{idx + 1}</span>
                  <span className="text-[10px] bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded font-bold">
                    dim={dK}
                  </span>
                </div>
                <p className="text-[11px] text-orange-900 mt-2 leading-relaxed">
                  {idx === 0
                    ? "Learns subject-verb dependencies"
                    : idx === 1
                    ? "Learns adjective-noun modifiers"
                    : idx === 2
                    ? "Learns long-distance coreferences"
                    : "Learns semantic topic clustering"}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-orange-200/80 font-mono text-[10px] text-orange-800">
                Q, K, V &isin; R^{`B x S x ${dK}`}
              </div>
            </div>
          ))}
        </div>

        {/* Output Concatenation Banner */}
        <div className="p-3 rounded-xl bg-stone-900 text-stone-200 font-mono text-xs flex items-center justify-between">
          <span>Concat(head_1, ..., head_{numHeads}) = {numHeads} &times; {dK} = {dModel}</span>
          <span className="text-orange-400 font-bold">&times; W_O &rarr; R^{`B x S x ${dModel}`}</span>
        </div>
      </div>
    </div>
  );
}

/**
 * SIMULATOR 4: Sinusoidal Positional Encoding Wave Explorer
 */
export function SinusoidalPositionalEncodingExplorer() {
  const [selectedPos, setSelectedPos] = useState(3);
  const dModel = 16;

  // Calculate PE values across positions 0 to 8
  const peTable = useMemo(() => {
    const table = [];
    for (let pos = 0; pos < 8; pos++) {
      const row = [];
      for (let i = 0; i < dModel / 2; i++) {
        const divTerm = Math.pow(10000, (2 * i) / dModel);
        row.push({
          sinVal: Math.sin(pos / divTerm),
          cosVal: Math.cos(pos / divTerm),
          dim2i: 2 * i,
          dim2i1: 2 * i + 1
        });
      }
      table.push(row);
    }
    return table;
  }, [dModel]);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-orange-100 text-orange-600">
            <Waves size={18} />
          </span>
          <div>
            <h3 className="text-base font-bold text-stone-900">
              Sinusoidal Positional Encoding Wave Explorer
            </h3>
            <p className="text-xs text-stone-500">
              Inspect harmonic frequency progression: low dimensions change rapidly with position, high dimensions change slowly.
            </p>
          </div>
        </div>
      </div>

      {/* Position selector */}
      <div className="flex items-center gap-2 bg-stone-50 p-3.5 rounded-xl border border-stone-200">
        <span className="text-xs font-mono font-bold text-stone-700 uppercase">
          Select Position (pos):
        </span>
        <div className="flex flex-wrap gap-1.5">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((p) => (
            <button
              key={p}
              onClick={() => setSelectedPos(p)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                selectedPos === p
                  ? "bg-orange-600 text-white shadow-2xs"
                  : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-100"
              }`}
            >
              pos={p}
            </button>
          ))}
        </div>
      </div>

      {/* Vector Preview */}
      <div className="mt-4 p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs">
        <div className="text-stone-400 font-bold uppercase tracking-wider mb-2 text-[11px]">
          PE(pos={selectedPos}) Vector Representation (d_model={dModel}):
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {peTable[selectedPos].map((pair, idx) => (
            <div key={idx} className="p-2 rounded bg-stone-900 border border-stone-800">
              <div className="text-[10px] text-orange-400 font-bold">
                dim {pair.dim2i}: sin({pair.sinVal.toFixed(3)})
              </div>
              <div className="text-[10px] text-stone-300 font-bold">
                dim {pair.dim2i1}: cos({pair.cosVal.toFixed(3)})
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * SIMULATOR 5: Autoregressive Greedy Generation Rollout Simulator
 */
export function AutoregressiveGenerationSimulator() {
  const fullSentence = ["[BOS]", "मैं", "सीख", "रहा", "हूँ", "[EOS]"];
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < fullSentence.length) {
      setCurrentStep((s) => s + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-orange-100 text-orange-600">
            <Code2 size={18} />
          </span>
          <div>
            <h3 className="text-base font-bold text-stone-900">
              Autoregressive Decoder Greedy Generation Rollout
            </h3>
            <p className="text-xs text-stone-500">
              Step through next-token prediction: target prefix is fed back iteratively until [EOS] is emitted.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleNextStep}
            disabled={currentStep >= fullSentence.length}
            className="px-3 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs disabled:opacity-40 transition-all"
          >
            <Play size={14} /> Generate Next Token
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs"
            title="Reset Rollout"
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs font-mono">
        {/* Source Context */}
        <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
          <div className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
            Source Sentence (Encoder Memory H)
          </div>
          <div className="p-2.5 rounded bg-white border border-stone-200 text-stone-900 font-bold">
            "I am learning artificial intelligence"
          </div>
          <p className="text-[11px] text-stone-500 mt-2">
            Encoder runs once. Keys and Values are reused at every decoder step.
          </p>
        </div>

        {/* Decoder Generated Stream */}
        <div className="p-4 rounded-xl border border-orange-300 bg-orange-50/50">
          <div className="text-xs font-mono font-bold text-orange-950 uppercase tracking-wider mb-2">
            Generated Target Prefix (Step {currentStep} of {fullSentence.length})
          </div>
          <div className="flex flex-wrap gap-1.5 p-2 rounded bg-white border border-orange-200">
            {fullSentence.slice(0, currentStep).map((tok, idx) => (
              <span
                key={idx}
                className={`px-2 py-1 rounded text-xs font-bold ${
                  idx === currentStep - 1
                    ? "bg-orange-600 text-white ring-2 ring-orange-300"
                    : "bg-stone-100 text-stone-800"
                }`}
              >
                {tok}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-orange-900 mt-2">
            {currentStep < fullSentence.length
              ? `Next prediction conditioned on tokens 0..${currentStep - 1}`
              : "[EOS] reached! Autoregressive generation complete."}
          </p>
        </div>
      </div>
    </div>
  );
}
