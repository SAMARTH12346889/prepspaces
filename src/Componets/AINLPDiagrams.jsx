import React, { useState, useMemo } from "react";
import {
  Play,
  RotateCcw,
  Sliders,
  Compass,
  Layers,
  ArrowRight,
  Database,
  Code2
} from "lucide-react";

/**
 * SIMULATOR 1: Text Preprocessing & Negation Folding Playground
 */
export function TextPreprocessingPlayground() {
  const [inputText, setInputText] = useState(
    "<p>This cloud database is NOT reliable at all! However, the query engine is very fast: https://prepspaces.com</p>"
  );
  const [stripHtml, setStripHtml] = useState(true);
  const [stripUrls, setStripUrls] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [stripPunct, setStripPunct] = useState(false);
  const [negationFolding, setNegationFolding] = useState(true);

  const processed = useMemo(() => {
    let text = inputText;
    if (stripHtml) {
      text = text.replace(/<[^>]*>/g, " ");
    }
    if (stripUrls) {
      text = text.replace(/https?:\/\/\S+|www\.\S+/g, " ");
    }
    if (lowercase) {
      text = text.toLowerCase();
    }

    const negationWords = new Set(["not", "never", "no", "cannot", "hardly", "scarcely", "n't"]);
    const clauseBreakers = new Set([".", ",", ";", "!", "?", "but", "however"]);

    const tokens = text.split(/\s+/).filter(Boolean);
    const resultTokens = [];
    let isNegating = false;

    for (const rawTok of tokens) {
      let tok = rawTok;
      if (stripPunct) {
        tok = tok.replace(/[^a-zA-Z0-9]/g, "");
      }
      if (!tok) continue;

      const lowerTok = tok.toLowerCase();
      const hasBreaker = Array.from(clauseBreakers).some((b) => rawTok.includes(b));
      const isNeg = negationWords.has(lowerTok) || lowerTok.endsWith("n't");

      if (negationFolding) {
        if (isNeg) {
          isNegating = true;
          resultTokens.push(tok);
        } else if (hasBreaker) {
          resultTokens.push(isNegating ? `NOT_${tok}` : tok);
          isNegating = false;
        } else {
          resultTokens.push(isNegating ? `NOT_${tok}` : tok);
        }
      } else {
        resultTokens.push(tok);
      }
    }

    return {
      cleanedText: resultTokens.join(" "),
      tokens: resultTokens,
      count: resultTokens.length,
      negatedCount: resultTokens.filter((t) => t.startsWith("NOT_")).length
    };
  }, [inputText, stripHtml, stripUrls, lowercase, stripPunct, negationFolding]);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex items-center gap-2 mb-3">
        <span className="p-2 rounded-xl bg-orange-100 text-orange-600">
          <Sliders size={18} />
        </span>
        <div>
          <h3 className="text-base font-bold text-stone-900">
            Interactive Text Preprocessing & Negation Folding Playground
          </h3>
          <p className="text-xs text-stone-500">
            Test regular expressions, sanitization flags, and contextual negation windowing in real-time.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <label className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider block mb-1">
          Raw Input Document
        </label>
        <textarea
          rows={3}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-mono bg-stone-50"
        />
      </div>

      {/* Control Switches */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        <label className="flex items-center gap-2 text-xs font-semibold text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-200 cursor-pointer">
          <input
            type="checkbox"
            checked={stripHtml}
            onChange={(e) => setStripHtml(e.target.checked)}
            className="rounded text-orange-600 focus:ring-orange-500"
          />
          Strip HTML Tags
        </label>
        <label className="flex items-center gap-2 text-xs font-semibold text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-200 cursor-pointer">
          <input
            type="checkbox"
            checked={stripUrls}
            onChange={(e) => setStripUrls(e.target.checked)}
            className="rounded text-orange-600 focus:ring-orange-500"
          />
          Strip URLs & Links
        </label>
        <label className="flex items-center gap-2 text-xs font-semibold text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-200 cursor-pointer">
          <input
            type="checkbox"
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
            className="rounded text-orange-600 focus:ring-orange-500"
          />
          Lowercase String
        </label>
        <label className="flex items-center gap-2 text-xs font-semibold text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-200 cursor-pointer">
          <input
            type="checkbox"
            checked={stripPunct}
            onChange={(e) => setStripPunct(e.target.checked)}
            className="rounded text-orange-600 focus:ring-orange-500"
          />
          Strip Punctuation
        </label>
        <label className="flex items-center gap-2 text-xs font-semibold text-orange-800 bg-orange-50 p-2.5 rounded-xl border border-orange-200 cursor-pointer sm:col-span-2">
          <input
            type="checkbox"
            checked={negationFolding}
            onChange={(e) => setNegationFolding(e.target.checked)}
            className="rounded text-orange-600 focus:ring-orange-500"
          />
          Enable Negation Windowing (Prefix "NOT_")
        </label>
      </div>

      {/* Output Display */}
      <div className="mt-5 p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-stone-800 pb-2 mb-2 text-stone-400">
          <span>Engineered Token Stream ({processed.count} tokens)</span>
          {processed.negatedCount > 0 && (
            <span className="text-orange-400 font-bold">{processed.negatedCount} Negated Tokens</span>
          )}
        </div>
        <p className="leading-relaxed text-stone-200">{processed.cleanedText || "(Empty String)"}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {processed.tokens.map((tok, i) => (
          <span
            key={i}
            className={`px-2 py-0.5 rounded-md text-xs font-mono font-medium ${
              tok.startsWith("NOT_")
                ? "bg-red-100 text-red-700 border border-red-200"
                : "bg-stone-100 text-stone-700 border border-stone-200"
            }`}
          >
            {tok}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * SIMULATOR 2: Subword Tokenizer (BPE) Merge Visualizer
 */
export function BPEVisualizerTool() {
  const initialCorpus = [
    { word: "l o w </w>", freq: 5 },
    { word: "l o w e r </w>", freq: 2 },
    { word: "n e w e s t </w>", freq: 6 },
    { word: "w i d e s t </w>", freq: 3 }
  ];

  const [corpus, setCorpus] = useState(initialCorpus);
  const [merges, setMerges] = useState([]);
  const [stepCount, setStepCount] = useState(0);

  // Compute pair frequencies
  const pairStats = useMemo(() => {
    const stats = {};
    corpus.forEach(({ word, freq }) => {
      const symbols = word.split(" ");
      for (let i = 0; i < symbols.length - 1; i++) {
        const pair = `${symbols[i]} ${symbols[i + 1]}`;
        stats[pair] = (stats[pair] || 0) + freq;
      }
    });
    return Object.entries(stats).sort((a, b) => b[1] - a[1]);
  }, [corpus]);

  const handleMergeStep = () => {
    if (pairStats.length === 0) return;
    const [bestPair, bestFreq] = pairStats[0];
    const replacement = bestPair.replace(" ", "");

    const newCorpus = corpus.map(({ word, freq }) => {
      const updated = word.split(bestPair).join(replacement);
      return { word: updated, freq };
    });

    setCorpus(newCorpus);
    setMerges((prev) => [...prev, { pair: bestPair, replacement, freq: bestFreq }]);
    setStepCount((c) => c + 1);
  };

  const handleReset = () => {
    setCorpus(initialCorpus);
    setMerges([]);
    setStepCount(0);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-orange-100 text-orange-600">
            <Layers size={18} />
          </span>
          <div>
            <h3 className="text-base font-bold text-stone-900">
              Byte Pair Encoding (BPE) Subword Merge Visualizer
            </h3>
            <p className="text-xs text-stone-500">
              Step through iterative pair frequency extraction and vocabulary compression.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleMergeStep}
            disabled={pairStats.length === 0}
            className="px-3 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs disabled:opacity-40 transition-all"
          >
            <Play size={14} /> Merge Top Pair
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs"
            title="Reset Corpus"
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {/* Current Corpus Representation */}
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3.5">
          <div className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
            Segmented Training Corpus (Step {stepCount})
          </div>
          <div className="space-y-1.5 font-mono text-xs">
            {corpus.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between bg-white p-2 rounded-lg border border-stone-200">
                <span className="text-stone-900">{item.word}</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-orange-50 text-orange-700">
                  freq: {item.freq}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Candidate Pair Frequencies */}
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3.5">
          <div className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
            Adjacent Pair Co-Occurrence Stats
          </div>
          <div className="space-y-1.5 font-mono text-xs max-h-48 overflow-y-auto">
            {pairStats.slice(0, 6).map(([pair, freq], idx) => (
              <div
                key={pair}
                className={`flex items-center justify-between p-2 rounded-lg border ${
                  idx === 0
                    ? "bg-orange-100/70 border-orange-300 text-orange-950 font-bold"
                    : "bg-white border-stone-200 text-stone-700"
                }`}
              >
                <span>'{pair}'</span>
                <span className="text-xs">{freq} occurrences {idx === 0 && "(Next Merge)"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Merges History */}
      {merges.length > 0 && (
        <div className="mt-4 p-3 rounded-xl bg-stone-900 text-stone-200 text-xs font-mono">
          <div className="text-stone-400 font-bold uppercase tracking-wider mb-1 text-[11px]">
            Learned BPE Merge Operations:
          </div>
          <div className="flex flex-wrap gap-2">
            {merges.map((m, i) => (
              <span key={i} className="px-2 py-1 rounded bg-stone-800 border border-stone-700 text-orange-300">
                Step {i + 1}: '{m.pair}' &rarr; <strong>'{m.replacement}'</strong>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * SIMULATOR 3: TF-IDF Term Weight & Document Vector Space Explorer
 */
const DEFAULT_DOCUMENTS = [
  "distributed key value database with raft consensus",
  "relational database with ACID transactions and btree indexing",
  "distributed database with high availability and replication"
];

/**
 * SIMULATOR 3: TF-IDF Term Weight & Document Vector Space Explorer
 */
export function TFIDFExplorer() {
  const documents = DEFAULT_DOCUMENTS;
  const [selectedDocIdx, setSelectedDocIdx] = useState(0);

  // Vocabulary & DF calculation
  const { dfMap, tfidfTable } = useMemo(() => {
    const docTokens = documents.map((doc) => doc.toLowerCase().split(" "));
    const allWords = Array.from(new Set(docTokens.flat())).sort();

    const df = {};
    allWords.forEach((word) => {
      df[word] = docTokens.filter((tokens) => tokens.includes(word)).length;
    });

    const N = documents.length;
    // Smoothed IDF: log((1 + N) / (1 + df)) + 1
    const idf = {};
    allWords.forEach((word) => {
      idf[word] = Math.log((1 + N) / (1 + df[word])) + 1;
    });

    const table = documents.map((doc, dIdx) => {
      const tokens = docTokens[dIdx];
      const scores = {};
      allWords.forEach((word) => {
        const tf = tokens.filter((t) => t === word).length;
        scores[word] = tf > 0 ? (1 + Math.log(tf)) * idf[word] : 0;
      });
      return scores;
    });

    return { dfMap: df, tfidfTable: table };
  }, [documents]);

  const activeDocScores = Object.entries(tfidfTable[selectedDocIdx])
    .filter(([_term, score]) => score > 0)
    .sort((a, b) => b[1] - a[1]);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex items-center gap-2 mb-3">
        <span className="p-2 rounded-xl bg-orange-100 text-orange-600">
          <Database size={18} />
        </span>
        <div>
          <h3 className="text-base font-bold text-stone-900">
            TF-IDF Term Weight & Document Space Explorer
          </h3>
          <p className="text-xs text-stone-500">
            Understand how Term Frequency and Smoothed Inverse Document Frequency penalize ubiquitous words and elevate discriminative terms.
          </p>
        </div>
      </div>

      {/* Select Document */}
      <div className="mt-4 space-y-2">
        <label className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider block">
          Select Document from Corpus
        </label>
        {documents.map((doc, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedDocIdx(idx)}
            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-mono transition-all ${
              selectedDocIdx === idx
                ? "bg-orange-50 border-orange-300 text-orange-950 font-bold shadow-2xs"
                : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
            }`}
          >
            <strong>Doc {idx + 1}:</strong> "{doc}"
          </button>
        ))}
      </div>

      {/* TF-IDF Weights Table */}
      <div className="mt-5 rounded-xl border border-stone-200 overflow-hidden">
        <div className="bg-stone-100 px-4 py-2 text-xs font-mono font-bold text-stone-700 flex justify-between">
          <span>Term</span>
          <span>Doc Freq (DF)</span>
          <span>TF-IDF Weight</span>
        </div>
        <div className="divide-y divide-stone-100 text-xs font-mono">
          {activeDocScores.map(([word, score]) => (
            <div key={word} className="px-4 py-2 flex items-center justify-between hover:bg-orange-50/50">
              <span className="font-semibold text-stone-900">{word}</span>
              <span className="text-stone-500">{dfMap[word]} of 3 docs</span>
              <span className="font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                {score.toFixed(3)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * SIMULATOR 4: Word2Vec Semantic Vector Space & Cosine Similarity Tool
 */
const SAMPLE_WORDS = [
  { name: "king", x: 0.82, y: 0.74, category: "royalty" },
  { name: "queen", x: 0.85, y: 0.92, category: "royalty" },
  { name: "man", x: 0.25, y: 0.22, category: "gender" },
  { name: "woman", x: 0.28, y: 0.40, category: "gender" },
  { name: "paris", x: -0.65, y: 0.55, category: "capital" },
  { name: "france", x: -0.75, y: 0.45, category: "country" },
  { name: "berlin", x: -0.45, y: 0.80, category: "capital" },
  { name: "germany", x: -0.55, y: 0.70, category: "country" },
  { name: "database", x: 0.1, y: -0.7, category: "tech" },
  { name: "redis", x: 0.15, y: -0.85, category: "tech" }
];

/**
 * SIMULATOR 4: Word2Vec Semantic Vector Space & Cosine Similarity Tool
 */
export function Word2VecSemanticExplorer() {
  const words = SAMPLE_WORDS;

  const [wordA, setWordA] = useState("king");
  const [wordB, setWordB] = useState("queen");

  const cosineSim = useMemo(() => {
    const wa = words.find((w) => w.name === wordA);
    const wb = words.find((w) => w.name === wordB);
    if (!wa || !wb) return 0;
    const dot = wa.x * wb.x + wa.y * wb.y;
    const normA = Math.sqrt(wa.x * wa.x + wa.y * wa.y);
    const normB = Math.sqrt(wb.x * wb.x + wb.y * wb.y);
    return dot / (normA * normB);
  }, [wordA, wordB, words]);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex items-center gap-2 mb-3">
        <span className="p-2 rounded-xl bg-orange-100 text-orange-600">
          <Compass size={18} />
        </span>
        <div>
          <h3 className="text-base font-bold text-stone-900">
            Word2Vec Semantic Vector Space & Cosine Similarity Tool
          </h3>
          <p className="text-xs text-stone-500">
            Inspect 2D projections of dense word embeddings and verify vector arithmetic (King - Man + Woman = Queen).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {/* 2D Vector Chart */}
        <div className="relative h-64 rounded-xl bg-stone-950 p-4 border border-stone-800 flex items-center justify-center overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-stone-800" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-full w-px bg-stone-800" />
          </div>

          {words.map((w) => {
            const leftPercent = ((w.x + 1) / 2) * 85 + 7.5;
            const topPercent = ((-w.y + 1) / 2) * 85 + 7.5;
            const isSelected = w.name === wordA || w.name === wordB;

            return (
              <div
                key={w.name}
                style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all ${
                  isSelected ? "z-20 scale-110" : "z-10 opacity-75 hover:opacity-100"
                }`}
                onClick={() => setWordA(w.name)}
              >
                <div
                  className={`w-3.5 h-3.5 rounded-full border-2 ${
                    isSelected ? "bg-orange-500 border-white ring-4 ring-orange-500/30" : "bg-stone-500 border-stone-400"
                  }`}
                />
                <span className="text-[10px] font-mono font-bold text-stone-200 mt-0.5 block whitespace-nowrap bg-stone-900/80 px-1 rounded">
                  {w.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Cosine Similarity Controls */}
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
              Calculate Cosine Similarity
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              <div>
                <label className="text-[11px] font-bold text-stone-600 block mb-1">Vector A</label>
                <select
                  value={wordA}
                  onChange={(e) => setWordA(e.target.value)}
                  className="w-full text-xs font-mono p-2 rounded-lg border border-stone-300 bg-white"
                >
                  {words.map((w) => (
                    <option key={w.name} value={w.name}>{w.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[11px] font-bold text-stone-600 block mb-1">Vector B</label>
                <select
                  value={wordB}
                  onChange={(e) => setWordB(e.target.value)}
                  className="w-full text-xs font-mono p-2 rounded-lg border border-stone-300 bg-white"
                >
                  {words.map((w) => (
                    <option key={w.name} value={w.name}>{w.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-white border border-stone-200 text-center">
              <div className="text-xs text-stone-500 font-medium">Cosine Similarity Metric</div>
              <div className="text-2xl font-black text-stone-900 font-mono mt-1">
                {cosineSim.toFixed(4)}
              </div>
              <div className="text-[11px] font-semibold text-orange-600 mt-1">
                {cosineSim > 0.85
                  ? "Highly Related Semantic Context"
                  : cosineSim > 0.4
                  ? "Moderate Semantic Relationship"
                  : "Orthogonal / Weak Semantic Context"}
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-stone-500 mt-3 pt-2 border-t border-stone-200">
            Vector Analogy Proof: v(king) - v(man) + v(woman) ~= v(queen)
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * SIMULATOR 5: BiLSTM vs RNN Sequential Information Flow Simulator
 */
export function BiLSTMFlowSimulator() {
  const tokens = ["The", "cloud", "server", "crashed", "yesterday"];
  const [activeTokenIdx, setActiveTokenIdx] = useState(2);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex items-center gap-2 mb-3">
        <span className="p-2 rounded-xl bg-orange-100 text-orange-600">
          <Code2 size={18} />
        </span>
        <div>
          <h3 className="text-base font-bold text-stone-900">
            Bidirectional LSTM Sequential Context Flow Simulator
          </h3>
          <p className="text-xs text-stone-500">
            Step through tokens to witness how forward and backward hidden states are concatenated to form complete contextual representations.
          </p>
        </div>
      </div>

      {/* Token Sequence Step-Through */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {tokens.map((tok, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTokenIdx(idx)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
              activeTokenIdx === idx
                ? "bg-orange-600 text-white shadow-sm ring-4 ring-orange-200"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
          >
            t={idx}: "{tok}"
          </button>
        ))}
      </div>

      {/* Recurrence States Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
        {/* Forward Hidden State */}
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3.5">
          <div className="text-xs font-mono font-bold text-orange-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <ArrowRight size={14} /> Forward Pass [h_t^(f)]
          </div>
          <p className="text-xs text-stone-600">
            Encodes historical sequence from token <strong>0</strong> to <strong>{activeTokenIdx}</strong>:
          </p>
          <div className="mt-2 font-mono text-xs bg-white p-2 rounded border border-stone-200 text-stone-800">
            "{tokens.slice(0, activeTokenIdx + 1).join(" ")}"
          </div>
        </div>

        {/* Backward Hidden State */}
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3.5">
          <div className="text-xs font-mono font-bold text-stone-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <ArrowRight size={14} className="rotate-180" /> Backward Pass [h_t^(b)]
          </div>
          <p className="text-xs text-stone-600">
            Encodes future context from token <strong>{tokens.length - 1}</strong> down to <strong>{activeTokenIdx}</strong>:
          </p>
          <div className="mt-2 font-mono text-xs bg-white p-2 rounded border border-stone-200 text-stone-800">
            "{tokens.slice(activeTokenIdx).join(" ")}"
          </div>
        </div>

        {/* Concatenated Representation */}
        <div className="rounded-xl border border-orange-300 bg-orange-50/70 p-3.5">
          <div className="text-xs font-mono font-bold text-orange-950 uppercase tracking-wider mb-2">
            Fused Output [h_t^(f); h_t^(b)]
          </div>
          <p className="text-xs text-orange-900">
            Full bidirectional context vector representation at token <strong>"{tokens[activeTokenIdx]}"</strong>:
          </p>
          <div className="mt-2 font-mono text-xs bg-white p-2 rounded border border-orange-200 text-orange-950 font-bold">
            Dims: 2 x Hidden_Dim ({2 * 64} dimensions)
          </div>
        </div>
      </div>
    </div>
  );
}
