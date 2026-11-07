import React, { useState, useMemo } from "react";
import {
  Brain,
  Sliders,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Eye,
  EyeOff
} from "lucide-react";

// Static constants for Self-Attention
const ATTENTION_TOKENS = ["Java", "is", "a", "language"];
const ATTENTION_RAW_SCORES = [
  [2.8, 1.4, 0.3, 0.9],
  [1.1, 3.2, 1.8, 0.4],
  [0.7, 2.1, 3.5, 2.2],
  [1.5, 0.8, 2.6, 3.9],
];
const ATTENTION_SCALE = 5.66;

/**
 * 1. Causal Self-Attention Matrix Visualizer
 * Step-by-step matrix multiplication showing Q, K, V projections,
 * causal lower-triangular masking (-inf), and softmax attention distribution.
 */
export const CausalSelfAttentionMatrixVisualizer = () => {
  const [selectedTokenIdx, setSelectedTokenIdx] = useState(2); // "a"
  const [causalMaskEnabled, setCausalMaskEnabled] = useState(true);

  // Compute scaled and masked probabilities for current selected token
  const currentTokenScores = useMemo(() => {
    const row = ATTENTION_RAW_SCORES[selectedTokenIdx];
    return row.map((score, colIdx) => {
      const scaled = score / (ATTENTION_SCALE / 4); // normalize for demonstration
      const isFuture = colIdx > selectedTokenIdx;
      const isMasked = causalMaskEnabled && isFuture;
      return {
        targetToken: ATTENTION_TOKENS[colIdx],
        rawScore: score,
        scaledScore: Number(scaled.toFixed(2)),
        isFuture,
        isMasked,
        effectiveScore: isMasked ? -9999 : Number(scaled.toFixed(2)),
      };
    });
  }, [selectedTokenIdx, causalMaskEnabled]);

  // Compute Softmax probabilities
  const softmaxProbabilities = useMemo(() => {
    const unmasked = currentTokenScores.map((s) =>
      s.isMasked ? 0 : Math.exp(s.effectiveScore)
    );
    const sum = unmasked.reduce((acc, v) => acc + v, 0);
    return currentTokenScores.map((s, idx) => {
      const prob = sum > 0 && !s.isMasked ? unmasked[idx] / sum : 0;
      return {
        ...s,
        probability: Number((prob * 100).toFixed(1)),
      };
    });
  }, [currentTokenScores]);

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 backdrop-blur-sm">
      <div className="flex flex-col justify-between gap-3 border-b border-stone-800 pb-4 md:flex-row md:items-center">
        <div>
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Self-Attention Mechanics
          </span>
          <h3 className="mt-2 text-xl font-bold text-stone-100">
            Causal Self-Attention Matrix & Masking Visualizer
          </h3>
          <p className="mt-1 text-sm text-stone-400">
            Inspect $Q K^T / \sqrt&#123;d_k&#125;$ dot products, lower-triangular causal masking ($-\infty$), and attention probability distributions.
          </p>
        </div>

        <button
          onClick={() => setCausalMaskEnabled(!causalMaskEnabled)}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
            causalMaskEnabled
              ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
              : "border border-amber-500/30 bg-amber-500/10 text-amber-300"
          }`}
        >
          {causalMaskEnabled ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          Causal Mask: {causalMaskEnabled ? "ACTIVE (No Future Peek)" : "DISABLED (Bidirectional Leak)"}
        </button>
      </div>

      {/* Token Selector Tabs */}
      <div className="mt-6">
        <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">
          Select Active Query Token Position ($i$):
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          {ATTENTION_TOKENS.map((tok, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTokenIdx(idx)}
              className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-all ${
                selectedTokenIdx === idx
                  ? "border-indigo-500 bg-indigo-600/20 text-indigo-300 shadow-lg shadow-indigo-950/50"
                  : "border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-700 hover:text-stone-200"
              }`}
            >
              <span className="font-mono text-xs text-stone-500">pos {idx}:</span>
              <span>"{tok}"</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Attention Computation */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
        {softmaxProbabilities.map((item, colIdx) => (
          <div
            key={colIdx}
            className={`relative flex flex-col justify-between rounded-xl border p-4 transition-all ${
              item.isMasked
                ? "border-red-950/40 bg-red-950/10 opacity-60"
                : "border-stone-800 bg-stone-950/80"
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-stone-400">Key pos {colIdx}</span>
                {item.isMasked ? (
                  <span className="rounded bg-red-500/20 px-2 py-0.5 text-[10px] font-bold text-red-400">
                    MASKED (-∞)
                  </span>
                ) : (
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                    ATTENDED
                  </span>
                )}
              </div>

              <div className="mt-2 text-lg font-bold text-stone-200">
                "{item.targetToken}"
              </div>

              <div className="mt-3 space-y-1 font-mono text-xs text-stone-400">
                <div className="flex justify-between">
                  <span>Raw $Q_i K_j$:</span>
                  <span className="text-stone-300">{item.rawScore.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Scaled $/ \sqrt&#123;d_k&#125;$:</span>
                  <span className="text-stone-300">{item.scaledScore.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 border-t border-stone-800 pt-3">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-stone-400">Softmax Weight:</span>
                <span className={item.isMasked ? "text-red-400" : "text-indigo-400"}>
                  {item.probability}%
                </span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-stone-800">
                <div
                  className={`h-full transition-all duration-300 ${
                    item.isMasked ? "bg-red-500/30" : "bg-indigo-500"
                  }`}
                  style={{ width: `${item.probability}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Analytical Callout */}
      <div className="mt-6 rounded-xl border border-stone-800 bg-stone-950 p-4 text-xs text-stone-400">
        <div className="flex items-start gap-2">
          <Brain className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
          <div>
            <span className="font-semibold text-stone-200">Mathematical Insight: </span>
            When predicting after token <code className="text-indigo-300">"{ATTENTION_TOKENS[selectedTokenIdx]}"</code> (position {selectedTokenIdx}),
            {causalMaskEnabled ? (
              <span>
                {" "}the causal lower-triangular mask ensures that positions strictly &gt; {selectedTokenIdx} receive a score of <code className="text-red-300">-infinity</code>. Because $e^&#123;-\infty&#125; = 0$, they receive exactly <strong className="text-emerald-400">0.00% probability</strong>, guaranteeing strictly autoregressive generation without future data leakage.
              </span>
            ) : (
              <span className="text-amber-400 font-semibold">
                {" "}the causal mask is disabled! Tokens at later positions leak their embeddings into token {selectedTokenIdx}, which destroys autoregressive training causality and causes catastrophic evaluation failure.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 2. Byte Pair Encoding (BPE) Tokenizer Merge Simulator
 * Interactive step-by-step BPE algorithm showing bigram counts and iterative merges.
 */
export const BpeMergeTokenizerVisualizer = () => {
  const initialText = "low lower lowest slow slower";
  const [corpus, setCorpus] = useState(initialText);
  const [merges, setMerges] = useState([]);

  // Compute token representation given current merges
  const tokenizedWords = useMemo(() => {
    const words = corpus.trim().split(/\s+/).filter(Boolean);
    return words.map((w) => {
      // Start with characters
      let tokens = w.split("");
      // Apply existing merges in order
      merges.forEach(([p1, p2, merged]) => {
        const next = [];
        let i = 0;
        while (i < tokens.length) {
          if (i < tokens.length - 1 && tokens[i] === p1 && tokens[i + 1] === p2) {
            next.push(merged);
            i += 2;
          } else {
            next.push(tokens[i]);
            i += 1;
          }
        }
        tokens = next;
      });
      return tokens;
    });
  }, [corpus, merges]);

  // Count bigram frequencies in current tokenized representation
  const bigramCounts = useMemo(() => {
    const counts = {};
    tokenizedWords.forEach((tokens) => {
      for (let i = 0; i < tokens.length - 1; i++) {
        const pair = `${tokens[i]} + ${tokens[i + 1]}`;
        counts[pair] = (counts[pair] || 0) + 1;
      }
    });
    // Sort descending
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [tokenizedWords]);

  const handleMergeNext = () => {
    if (bigramCounts.length === 0) return;
    const topPairStr = bigramCounts[0][0];
    const [p1, p2] = topPairStr.split(" + ");
    const merged = p1 + p2;
    setMerges([...merges, [p1, p2, merged]]);
  };

  const handleReset = () => {
    setMerges([]);
  };

  const totalTokens = tokenizedWords.reduce((acc, w) => acc + w.length, 0);

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 backdrop-blur-sm">
      <div className="flex flex-col justify-between gap-3 border-b border-stone-800 pb-4 md:flex-row md:items-center">
        <div>
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-400">
            Tokenization Engineering
          </span>
          <h3 className="mt-2 text-xl font-bold text-stone-100">
            Byte Pair Encoding (BPE) Iterative Merge Simulator
          </h3>
          <p className="mt-1 text-sm text-stone-400">
            Watch raw character sequences calculate bigram statistics and iteratively merge into compact subwords.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleMergeNext}
            disabled={bigramCounts.length === 0}
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-violet-950/50 hover:bg-violet-500 disabled:opacity-40"
          >
            <Play className="h-4 w-4" />
            Merge Top Bigram
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 rounded-xl border border-stone-800 bg-stone-950 px-3 py-2 text-xs font-semibold text-stone-400 hover:text-stone-200"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>
      </div>

      {/* Corpus Input */}
      <div className="mt-6">
        <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">
          Training Text Corpus:
        </label>
        <input
          type="text"
          value={corpus}
          onChange={(e) => {
            setCorpus(e.target.value);
            setMerges([]);
          }}
          className="mt-2 w-full rounded-xl border border-stone-800 bg-stone-950 px-4 py-2.5 font-mono text-sm text-stone-200 outline-none focus:border-violet-500"
        />
      </div>

      {/* Live Stats */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-stone-800 bg-stone-950/60 p-3">
          <div className="text-xs text-stone-400">Total Characters</div>
          <div className="mt-1 text-xl font-bold text-stone-200">
            {corpus.replace(/\s+/g, "").length}
          </div>
        </div>
        <div className="rounded-xl border border-stone-800 bg-stone-950/60 p-3">
          <div className="text-xs text-stone-400">Current Token Count</div>
          <div className="mt-1 text-xl font-bold text-violet-400">
            {totalTokens}
          </div>
        </div>
        <div className="rounded-xl border border-stone-800 bg-stone-950/60 p-3">
          <div className="text-xs text-stone-400">Merge Steps Applied</div>
          <div className="mt-1 text-xl font-bold text-emerald-400">
            {merges.length}
          </div>
        </div>
        <div className="rounded-xl border border-stone-800 bg-stone-950/60 p-3">
          <div className="text-xs text-stone-400">Compression Ratio</div>
          <div className="mt-1 text-xl font-bold text-amber-400">
            {totalTokens > 0
              ? `${(
                  (1 - totalTokens / corpus.replace(/\s+/g, "").length) *
                  100
                ).toFixed(0)}%`
              : "0%"}
          </div>
        </div>
      </div>

      {/* Token Representation Preview */}
      <div className="mt-6">
        <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">
          Current Tokenized Sequence:
        </label>
        <div className="mt-2 flex flex-wrap gap-2 rounded-xl border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {tokenizedWords.map((wordTokens, wIdx) => (
            <div key={wIdx} className="flex flex-wrap items-center gap-1.5 rounded-lg border border-stone-800/80 bg-stone-900/60 px-2.5 py-1.5">
              {wordTokens.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className={`rounded px-1.5 py-0.5 text-xs font-bold ${
                    t.length > 1
                      ? "border border-violet-500/40 bg-violet-500/20 text-violet-200"
                      : "border border-stone-700 bg-stone-800 text-stone-300"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bigram Frequency Ranking Table */}
      <div className="mt-6">
        <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">
          Ranked Bigram Pairs (Candidate Merges):
        </label>
        <div className="mt-2 max-h-48 overflow-y-auto rounded-xl border border-stone-800 bg-stone-950">
          {bigramCounts.length === 0 ? (
            <div className="p-4 text-center text-xs text-stone-500">
              No further adjacent bigrams found to merge in this corpus.
            </div>
          ) : (
            <table className="w-full text-left text-xs">
              <thead className="border-b border-stone-800 bg-stone-900/70 text-stone-400">
                <tr>
                  <th className="py-2 pl-4">Rank</th>
                  <th className="py-2">Bigram Pair</th>
                  <th className="py-2">Occurrences</th>
                  <th className="py-2 pr-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60 text-stone-300">
                {bigramCounts.slice(0, 5).map(([pair, count], idx) => (
                  <tr key={idx} className={idx === 0 ? "bg-violet-950/20 font-semibold text-violet-300" : ""}>
                    <td className="py-2 pl-4">#{idx + 1}</td>
                    <td className="py-2 font-mono">"{pair}"</td>
                    <td className="py-2 font-mono">{count}x</td>
                    <td className="py-2 pr-4 text-right">
                      {idx === 0 ? (
                        <span className="rounded bg-violet-500/20 px-2 py-0.5 text-[10px] text-violet-300">
                          Next to Merge
                        </span>
                      ) : (
                        <span className="text-[10px] text-stone-500">Queued</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * 3. Transformer Parameter & Memory Sizing Calculator
 * Calculates exact parameter count, weight tying reduction, and GPU VRAM footprint.
 */
export const TransformerParameterCalculator = () => {
  const [layers, setLayers] = useState(4);
  const [embeddingDim, setEmbeddingDim] = useState(128);
  const [numHeads, setNumHeads] = useState(4);
  const [contextLength, setContextLength] = useState(128);
  const [vocabSize, setVocabSize] = useState(65);
  const [tieWeights, setTieWeights] = useState(true);

  // Exact calculations
  const C = embeddingDim;
  const tokenEmbParams = vocabSize * C;
  const posEmbParams = contextLength * C;

  // Per block:
  // Attention: Q, K, V + Output = 4 * C^2
  const attnParamsPerBlock = 4 * C * C;
  // FFN: C -> 4C -> C = C*(4C) + (4C)*C + 5C biases = 8*C^2 + 5C
  const ffnParamsPerBlock = 8 * C * C + 5 * C;
  // LayerNorms: 2 per block, each has weight + bias = 4 * C
  const lnParamsPerBlock = 4 * C;
  const blockParamsTotal = attnParamsPerBlock + ffnParamsPerBlock + lnParamsPerBlock;

  const allBlocksParams = layers * blockParamsTotal;
  const finalLnParams = 2 * C;
  const headParams = tieWeights ? 0 : C * vocabSize;

  const totalParams =
    tokenEmbParams + posEmbParams + allBlocksParams + finalLnParams + headParams;

  // Memory estimation:
  // FP32: 4 bytes per param
  const modelBytesFP32 = totalParams * 4;
  // AdamW states: 2 states per param (first and second moments) in FP32 = 8 bytes per param
  const optimizerBytes = totalParams * 8;
  const totalTrainVramMB = Number(
    ((modelBytesFP32 + optimizerBytes) / (1024 * 1024)).toFixed(1)
  );

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 backdrop-blur-sm">
      <div className="flex flex-col justify-between gap-3 border-b border-stone-800 pb-4 md:flex-row md:items-center">
        <div>
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
            Parameter Accounting
          </span>
          <h3 className="mt-2 text-xl font-bold text-stone-100">
            Transformer Parameter & Memory Sizing Calculator
          </h3>
          <p className="mt-1 text-sm text-stone-400">
            Analytical breakdown of attention ($4C^2$), FFN ($8C^2$), and embedding tensors.
          </p>
        </div>

        <button
          onClick={() => setTieWeights(!tieWeights)}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
            tieWeights
              ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
              : "border border-stone-800 bg-stone-950 text-stone-400"
          }`}
        >
          <CheckCircle2 className="h-4 w-4" />
          Weight Tying: {tieWeights ? "ENABLED (Saves lm_head)" : "DISABLED"}
        </button>
      </div>

      {/* Sliders Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Layers ($L$):</span>
            <span className="font-mono text-stone-200">{layers}</span>
          </div>
          <input
            type="range"
            min="1"
            max="12"
            value={layers}
            onChange={(e) => setLayers(Number(e.target.value))}
            className="mt-2 w-full accent-amber-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Embedding Dim ($C$):</span>
            <span className="font-mono text-stone-200">{embeddingDim}</span>
          </div>
          <input
            type="range"
            min="64"
            max="768"
            step="64"
            value={embeddingDim}
            onChange={(e) => setEmbeddingDim(Number(e.target.value))}
            className="mt-2 w-full accent-amber-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Attention Heads ($h$):</span>
            <span className="font-mono text-stone-200">{numHeads}</span>
          </div>
          <input
            type="range"
            min="1"
            max="16"
            value={numHeads}
            onChange={(e) => setNumHeads(Number(e.target.value))}
            className="mt-2 w-full accent-amber-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Context Length ($T$):</span>
            <span className="font-mono text-stone-200">{contextLength}</span>
          </div>
          <input
            type="range"
            min="32"
            max="1024"
            step="32"
            value={contextLength}
            onChange={(e) => setContextLength(Number(e.target.value))}
            className="mt-2 w-full accent-amber-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Vocabulary Size ($V$):</span>
            <span className="font-mono text-stone-200">{vocabSize}</span>
          </div>
          <input
            type="range"
            min="65"
            max="32000"
            step="65"
            value={vocabSize}
            onChange={(e) => setVocabSize(Number(e.target.value))}
            className="mt-2 w-full accent-amber-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Head Dim ($d_k = C / h$):</span>
            <span className="font-mono text-stone-200">
              {embeddingDim % numHeads === 0
                ? embeddingDim / numHeads
                : `${(embeddingDim / numHeads).toFixed(1)} (Non-integer!)`}
            </span>
          </div>
          <div className="mt-3 text-xs text-stone-500">
            {embeddingDim % numHeads === 0 ? "✓ Dimension evenly divisible" : "⚠ Dimension must divide by heads!"}
          </div>
        </div>
      </div>

      {/* Results Dashboard */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Total Parameters
          </div>
          <div className="mt-1 text-2xl font-black text-amber-200">
            {(totalParams / 1_000_000).toFixed(3)}M
          </div>
          <div className="mt-1 text-xs text-stone-400 font-mono">
            {totalParams.toLocaleString()} parameters
          </div>
        </div>

        <div className="rounded-xl border border-stone-800 bg-stone-950 p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
            Transformer Blocks ($L={layers}$)
          </div>
          <div className="mt-1 text-2xl font-bold text-stone-200">
            {((allBlocksParams / totalParams) * 100).toFixed(1)}%
          </div>
          <div className="mt-1 text-xs text-stone-400 font-mono">
            {allBlocksParams.toLocaleString()} parameters
          </div>
        </div>

        <div className="rounded-xl border border-stone-800 bg-stone-950 p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
            Training VRAM Footprint
          </div>
          <div className="mt-1 text-2xl font-bold text-emerald-400">
            ~{totalTrainVramMB} MB
          </div>
          <div className="mt-1 text-xs text-stone-400 font-mono">
            FP32 weights + AdamW states
          </div>
        </div>
      </div>

      {/* Tensor Parameter Breakdown */}
      <div className="mt-6 space-y-2 rounded-xl border border-stone-800 bg-stone-950 p-4 text-xs font-mono">
        <div className="flex justify-between border-b border-stone-800/60 pb-2 text-stone-400">
          <span>Module Tensor</span>
          <span>Formula</span>
          <span>Count</span>
        </div>
        <div className="flex justify-between text-stone-300">
          <span>Token Embedding:</span>
          <span className="text-stone-500">V × C</span>
          <span>{tokenEmbParams.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-stone-300">
          <span>Positional Embedding:</span>
          <span className="text-stone-500">T × C</span>
          <span>{posEmbParams.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-stone-300">
          <span>Attention Layers ({layers}x):</span>
          <span className="text-stone-500">L × 4C²</span>
          <span>{(layers * attnParamsPerBlock).toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-stone-300">
          <span>FFN Layers ({layers}x):</span>
          <span className="text-stone-500">L × (8C² + 5C)</span>
          <span>{(layers * ffnParamsPerBlock).toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-stone-300">
          <span>Language Head (lm_head):</span>
          <span className="text-stone-500">{tieWeights ? "Tied (0)" : "C × V"}</span>
          <span>{headParams.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

const INITIAL_CANDIDATES = [
  { token: "main", rawLogit: 4.8 },
  { token: "run", rawLogit: 3.4 },
  { token: "start", rawLogit: 2.1 },
  { token: "execute", rawLogit: 1.5 },
  { token: "test", rawLogit: 0.6 },
  { token: "print", rawLogit: -0.4 },
  { token: "system", rawLogit: -1.8 },
];

/**
 * 4. Autoregressive Sampling & Decoding Visualizer
 * Interactive sampler showing temperature scaling, Top-K, and Top-P filtering.
 */
export const AutoregressiveGenerationSamplerVisualizer = () => {
  const promptContext = "public class Main { public static void ";
  const [temperature, setTemperature] = useState(0.8);
  const [topK, setTopK] = useState(3);
  const [topP, setTopP] = useState(0.85);

  // Apply temperature scaling
  const scaledCandidates = useMemo(() => {
    return INITIAL_CANDIDATES.map((c) => ({
      ...c,
      scaledLogit: Number((c.rawLogit / Math.max(temperature, 0.05)).toFixed(2)),
    }));
  }, [temperature]);

  // Apply Top-K filtering
  const topKFiltered = useMemo(() => {
    const sorted = [...scaledCandidates].sort((a, b) => b.scaledLogit - a.scaledLogit);
    return sorted.map((c, idx) => ({
      ...c,
      survivesTopK: idx < topK,
    }));
  }, [scaledCandidates, topK]);

  // Compute intermediate softmax probabilities to calculate Nucleus Top-P
  const finalProbabilities = useMemo(() => {
    // Softmax over all
    const expValues = topKFiltered.map((c) => Math.exp(c.scaledLogit));
    const sumExp = expValues.reduce((a, b) => a + b, 0);
    const withProbs = topKFiltered.map((c, i) => ({
      ...c,
      probBeforeFilter: expValues[i] / sumExp,
    }));

    // Cumulative sum for top-P without closure mutation
    const withTopP = [];
    let runningSum = 0;
    for (const c of withProbs) {
      if (!c.survivesTopK) {
        withTopP.push({ ...c, survivesTopP: false });
        continue;
      }
      runningSum += c.probBeforeFilter;
      const survives = runningSum - c.probBeforeFilter <= topP;
      withTopP.push({ ...c, survivesTopP: survives });
    }

    // Re-normalize final survivors
    const finalSurvivors = withTopP.filter((c) => c.survivesTopK && c.survivesTopP);
    const finalSum = finalSurvivors.reduce((a, b) => a + Math.exp(b.scaledLogit), 0);

    return withTopP.map((c) => {
      const active = c.survivesTopK && c.survivesTopP;
      const finalP = active ? (Math.exp(c.scaledLogit) / finalSum) * 100 : 0;
      return {
        ...c,
        active,
        finalProb: Number(finalP.toFixed(1)),
      };
    });
  }, [topKFiltered, topP]);

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 backdrop-blur-sm">
      <div className="flex flex-col justify-between gap-3 border-b border-stone-800 pb-4 md:flex-row md:items-center">
        <div>
          <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
            Decoding & Inference
          </span>
          <h3 className="mt-2 text-xl font-bold text-stone-100">
            Autoregressive Generation & Sampling Simulator
          </h3>
          <p className="mt-1 text-sm text-stone-400">
            Adjust Temperature $T$, Top-$K$, and Nucleus Top-$P$ to see candidate distributions reshape in real time.
          </p>
        </div>
      </div>

      {/* Input Prompt Box */}
      <div className="mt-6 rounded-xl border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
        <span className="text-stone-500">Current Context: </span>
        <span className="text-stone-200">{promptContext}</span>
        <span className="animate-pulse font-bold text-sky-400">_</span>
      </div>

      {/* Sliders */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Temperature ($T$):</span>
            <span className="font-mono text-sky-400">{temperature.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="2.0"
            step="0.05"
            value={temperature}
            onChange={(e) => setTemperature(Number(e.target.value))}
            className="mt-2 w-full accent-sky-500"
          />
          <div className="mt-1 text-[10px] text-stone-500">
            {temperature < 0.5 ? "Sharp & Deterministic" : temperature > 1.2 ? "Flattened & Creative" : "Balanced"}
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Top-$K$ Filter:</span>
            <span className="font-mono text-sky-400">{topK} tokens</span>
          </div>
          <input
            type="range"
            min="1"
            max="7"
            value={topK}
            onChange={(e) => setTopK(Number(e.target.value))}
            className="mt-2 w-full accent-sky-500"
          />
          <div className="mt-1 text-[10px] text-stone-500">
            Restricts sampling to the top {topK} candidates
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-stone-400">
            <span>Top-$P$ (Nucleus):</span>
            <span className="font-mono text-sky-400">{(topP * 100).toFixed(0)}%</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="1.0"
            step="0.05"
            value={topP}
            onChange={(e) => setTopP(Number(e.target.value))}
            className="mt-2 w-full accent-sky-500"
          />
          <div className="mt-1 text-[10px] text-stone-500">
            Dynamic cumulative probability threshold
          </div>
        </div>
      </div>

      {/* Candidate Bars */}
      <div className="mt-6 space-y-3">
        {finalProbabilities.map((c, idx) => (
          <div
            key={idx}
            className={`rounded-xl border p-3 transition-all ${
              c.active
                ? "border-sky-500/40 bg-sky-950/20"
                : "border-stone-800 bg-stone-950/40 opacity-40"
            }`}
          >
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-stone-200">"{c.token}"</span>
                <span className="text-stone-500 font-mono">
                  (logit: {c.rawLogit} → {c.scaledLogit})
                </span>
              </div>
              <div className="flex items-center gap-2">
                {c.active ? (
                  <span className="rounded bg-sky-500/20 px-2 py-0.5 text-[10px] font-bold text-sky-300">
                    ELIGIBLE: {c.finalProb}%
                  </span>
                ) : (
                  <span className="rounded bg-stone-800 px-2 py-0.5 text-[10px] text-stone-500">
                    {!c.survivesTopK ? "Filtered by Top-K" : "Filtered by Top-P"}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-stone-800">
              <div
                className={`h-full transition-all duration-300 ${
                  c.active ? "bg-sky-500" : "bg-stone-700"
                }`}
                style={{ width: `${c.finalProb}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 5. Training Loss & Perplexity Curve Simulator
 * Step through 2000 steps, tracking loss and perplexity with dynamic overfitting detection.
 */
export const TrainingLossPerplexitySimulator = () => {
  const [step, setStep] = useState(1200);
  const [enableDropout, setEnableDropout] = useState(true);

  // Analytical curve modeling based on training step
  const progressRatio = step / 2000;

  // Training loss starts at ~4.2 and decreases asymptotically
  const trainLoss = Number((1.2 + 3.0 * Math.exp(-progressRatio * 3.5)).toFixed(3));

  // Validation loss follows train loss then may rise if overfitted
  const valOverfitPenalty = enableDropout
    ? Math.max(0, (progressRatio - 0.7) * 0.4)
    : Math.max(0, (progressRatio - 0.5) * 1.2);
  const valLoss = Number((trainLoss + 0.15 + valOverfitPenalty).toFixed(3));

  const trainPpl = Number(Math.exp(trainLoss).toFixed(2));
  const valPpl = Number(Math.exp(valLoss).toFixed(2));

  const isOverfitting = valOverfitPenalty > 0.2;

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6 backdrop-blur-sm">
      <div className="flex flex-col justify-between gap-3 border-b border-stone-800 pb-4 md:flex-row md:items-center">
        <div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Training Dynamics
          </span>
          <h3 className="mt-2 text-xl font-bold text-stone-100">
            Training Loss & Perplexity Convergence Simulator
          </h3>
          <p className="mt-1 text-sm text-stone-400">
            Inspect the relationship between cross-entropy loss and Perplexity ($PPL = e^L$).
          </p>
        </div>

        <button
          onClick={() => setEnableDropout(!enableDropout)}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
            enableDropout
              ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
              : "border border-amber-500/30 bg-amber-500/10 text-amber-300"
          }`}
        >
          <Sliders className="h-4 w-4" />
          Dropout (0.1): {enableDropout ? "ACTIVE (Regularized)" : "DISABLED (High Overfitting)"}
        </button>
      </div>

      {/* Step Slider */}
      <div className="mt-6">
        <div className="flex justify-between text-xs font-medium text-stone-400">
          <span>Training Step:</span>
          <span className="font-mono text-emerald-400 font-bold">{step} / 2,000 steps</span>
        </div>
        <input
          type="range"
          min="0"
          max="2000"
          step="100"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="mt-2 w-full accent-emerald-500"
        />
      </div>

      {/* Metrics Row */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-stone-800 bg-stone-950 p-4">
          <div className="text-xs text-stone-400">Training Loss</div>
          <div className="mt-1 text-2xl font-bold text-stone-200">{trainLoss}</div>
          <div className="mt-1 text-[10px] text-stone-500 font-mono">Cross-entropy</div>
        </div>

        <div className="rounded-xl border border-stone-800 bg-stone-950 p-4">
          <div className="text-xs text-stone-400">Validation Loss</div>
          <div className={`mt-1 text-2xl font-bold ${isOverfitting ? "text-amber-400" : "text-emerald-400"}`}>
            {valLoss}
          </div>
          <div className="mt-1 text-[10px] text-stone-500 font-mono">Held-out tokens</div>
        </div>

        <div className="rounded-xl border border-stone-800 bg-stone-950 p-4">
          <div className="text-xs text-stone-400">Train Perplexity</div>
          <div className="mt-1 text-2xl font-bold text-stone-200">{trainPpl}</div>
          <div className="mt-1 text-[10px] text-stone-500 font-mono">PPL = e^Loss</div>
        </div>

        <div className="rounded-xl border border-stone-800 bg-stone-950 p-4">
          <div className="text-xs text-stone-400">Val Perplexity</div>
          <div className={`mt-1 text-2xl font-bold ${isOverfitting ? "text-amber-400" : "text-emerald-400"}`}>
            {valPpl}
          </div>
          <div className="mt-1 text-[10px] text-stone-500 font-mono">PPL = e^Loss</div>
        </div>
      </div>

      {/* Status Badge */}
      <div className="mt-6">
        {step < 300 ? (
          <div className="flex items-center gap-2 rounded-xl border border-sky-500/30 bg-sky-500/10 p-3 text-xs text-sky-300">
            <Flame className="h-4 w-4 shrink-0" />
            <span>
              <strong>Early Learning Phase:</strong> Parameters are moving rapidly from random Gaussian initialization. Gradients are high and next-token accuracy is learning basic vocabulary character frequencies.
            </span>
          </div>
        ) : isOverfitting ? (
          <div className="flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-300">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            <span>
              <strong>Overfitting Detected:</strong> Training loss continues decreasing while validation loss begins climbing! The model is memorizing training sentences rather than learning general Java syntax. Consider early stopping or increasing dropout.
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-300">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <span>
              <strong>Optimal Generalization Convergence:</strong> Both training and validation losses are tracking closely downward. The model is learning robust statistical representations.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
