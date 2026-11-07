import React, { useState, useId } from "react";
import {
  Workflow,
  Info,
  Layers,
  Scale,
  ShieldCheck,
  AlertTriangle,
  GitMerge
} from "lucide-react";

/**
 * 1. RAG Pipeline Flow Simulator
 * Interactive visualizer of the 8-stage RAG lifecycle with latency profiling and live data inspection.
 */
export function RagPipelineFlowSimulator() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      name: "1. Document Ingestion",
      tag: "Offline Phase",
      latency: "120s (Batch)",
      desc: "Crawls PDFs, Markdown tutorials, and DB records. Extracts text and attaches provenance metadata.",
      input: "Raw files: java_concurrency.pdf, jvm_memory.md",
      output: "Normalized Document Objects with page numbers & source IDs",
      failureMode: "Broken encoding (mojibake) or missing OCR on scanned PDF pages."
    },
    {
      name: "2. Cleaning & Chunking",
      tag: "Offline Phase",
      latency: "15s (Batch)",
      desc: "Sanitizes headers/footers, fixes hyphenations, and splits documents into 200-token passages with 40-token overlap.",
      input: "Normalized Document Text (50,000 words)",
      output: "350 Discrete Document Chunks with SHA-256 unique IDs",
      failureMode: "Cutting code blocks or syntax braces across arbitrary boundaries."
    },
    {
      name: "3. Embedding & Indexing",
      tag: "Offline Phase",
      latency: "45s (Batch GPU)",
      desc: "Generates 384-dimensional dense vectors using all-MiniLM-L6-v2; indexes in ChromaDB & builds BM25 inverted index.",
      input: "350 text chunks",
      output: "ChromaDB HNSW Vector Index + BM25Okapi Lexical Index",
      failureMode: "Mixing embedding models across document corpus and query generator."
    },
    {
      name: "4. Query Transformation",
      tag: "Online Phase",
      latency: "35ms",
      desc: "Resolves conversational anaphora (pronouns) and expands technical query keywords.",
      input: "Student: 'Does it support fairness?' (Context: ReentrantLock)",
      output: "Standalone Query: 'Does Java ReentrantLock support fair ordering policies?'",
      failureMode: "Over-aggressive rewriting that hallucinates unintended terms."
    },
    {
      name: "5. Hybrid Search & RRF",
      tag: "Online Phase",
      latency: "25ms",
      desc: "Executes concurrent dense vector search and sparse BM25 search; merges top 20 candidates via RRF (k=60).",
      input: "Standalone Query",
      output: "Top 20 Fused Candidates ranked by RRF score",
      failureMode: "Missing exact error codes when sparse BM25 index is omitted."
    },
    {
      name: "6. Cross-Encoder Reranker",
      tag: "Online Phase",
      latency: "75ms",
      desc: "Deep query-document cross-attention scoring using ms-marco-MiniLM-L-6-v2 to reorder top 20 candidates down to top 5.",
      input: "20 Candidate Pairs (Query, Chunk)",
      output: "Top 5 High-Precision Relevant Chunks",
      failureMode: "Exceeding compute latency budget if reranking more than 50 candidates."
    },
    {
      name: "7. Context Assembly",
      tag: "Online Phase",
      latency: "5ms",
      desc: "Deduplicates chunks via SHA-256 hashes, enforces 4,000-token budget, attaches [Source X] references.",
      input: "Top 5 Reranked Chunks",
      output: "Grounded System Prompt with verified reference blocks",
      failureMode: "'Lost in the Middle' attention degradation when context is bloated."
    },
    {
      name: "8. Grounded LLM Generation",
      tag: "Online Phase",
      latency: "1,200ms (Streaming)",
      desc: "LLM synthesizes response strictly from context, generating inline citations and anti-hallucination refusals.",
      input: "Grounded Prompt + Student Question",
      output: "Factual Explanation with verified citations [Source 1], [Source 2]",
      failureMode: "Indirect prompt injection if retrieved documents contain adversarial instructions."
    }
  ];

  const current = stages[activeStage];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Workflow className="text-orange-600" size={20} />
            RAG End-to-End Pipeline Simulator
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Step through the 8 stages of the production RAG lifecycle from offline document ingestion to real-time grounded generation.
          </p>
        </div>
        <span className="self-start sm:self-auto rounded-full bg-orange-100 px-3 py-1 text-xs font-mono font-bold text-orange-800">
          Stage {activeStage + 1} of 8
        </span>
      </div>

      {/* Progress Breadcrumbs */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 mb-6">
        {stages.map((stg, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStage(idx)}
            className={`px-2 py-2 text-xs font-medium rounded-lg text-center transition cursor-pointer border ${
              activeStage === idx
                ? "bg-orange-600 text-white border-orange-700 shadow-xs"
                : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
            }`}
          >
            <div className="text-[10px] opacity-80">S{idx + 1}</div>
            <div className="truncate font-semibold">{stg.name.split(". ")[1]}</div>
          </button>
        ))}
      </div>

      {/* Stage Detail Card */}
      <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3 mb-4">
          <div>
            <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-md mr-2 ${
              current.tag === "Offline Phase" ? "bg-stone-200 text-stone-800" : "bg-emerald-100 text-emerald-800"
            }`}>
              {current.tag}
            </span>
            <h4 className="inline-block text-base font-bold text-stone-900">{current.name}</h4>
          </div>
          <div className="text-xs font-mono font-semibold text-stone-600">
            Typical Latency: <span className="text-orange-700 font-bold">{current.latency}</span>
          </div>
        </div>

        <p className="text-sm text-stone-700 mb-4">{current.desc}</p>

        <div className="grid sm:grid-cols-2 gap-3 text-xs mb-4">
          <div className="p-3 rounded-lg bg-white border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">Incoming Input:</span>
            <span className="font-mono text-stone-600">{current.input}</span>
          </div>
          <div className="p-3 rounded-lg bg-white border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">Stage Output:</span>
            <span className="font-mono text-emerald-700">{current.output}</span>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
          <AlertTriangle size={15} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Primary Failure Mode: </span>
            {current.failureMode}
          </div>
        </div>

        <div className="flex items-center justify-between mt-5 pt-3 border-t border-stone-200/80">
          <button
            disabled={activeStage === 0}
            onClick={() => setActiveStage((p) => Math.max(0, p - 1))}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-stone-300 bg-white text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50"
          >
            ← Previous Stage
          </button>
          <button
            disabled={activeStage === stages.length - 1}
            onClick={() => setActiveStage((p) => Math.min(stages.length - 1, p + 1))}
            className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-orange-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-orange-700"
          >
            Next Stage →
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. Chunking Strategy & Sliding Overlap Visualizer
 * Simulates Fixed-Size, Sentence, Recursive, and Parent-Child chunking with step size calculation.
 */
export function ChunkingStrategyPlayground() {
  const chunkSizeId = useId();
  const overlapPctId = useId();

  const [chunkSize, setChunkSize] = useState(200);
  const [overlapPct, setOverlapPct] = useState(20);
  const [selectedStrategy, setSelectedStrategy] = useState("recursive");

  const overlapTokens = Math.round((chunkSize * overlapPct) / 100);
  const stepSize = Math.max(1, chunkSize - overlapTokens);

  // Sample mock technical document
  const sampleText =
    "Java handles memory allocation through two primary operational areas: stack memory and heap memory. " +
    "The stack stores method invocation call frames, primitive local variables, and object references created inside methods. " +
    "Heap memory is shared across all executing threads and stores dynamically instantiated objects. " +
    "When an object is no longer reachable from any live thread reference roots (e.g. static references, local stack variables), " +
    "the Java Virtual Machine marks the object as eligible for garbage collection. " +
    "The garbage collection subsystem periodically reclaims unreachable heap space using generational algorithms, " +
    "such as the G1, ZGC, or Shenandoah collectors, preventing OutOfMemoryError exceptions. " +
    "Explicit calls to System.gc() merely suggest garbage collection to the JVM runtime and offer zero execution timing guarantees.";

  const totalWords = sampleText.split(" ").length;
  // Estimate tokens (~1.3 tokens per word)
  const totalTokens = Math.round(totalWords * 1.3);

  const estimatedChunks = Math.max(1, Math.ceil((totalTokens - overlapTokens) / stepSize));

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Layers className="text-orange-600" size={20} />
            Document Chunking Strategy & Sliding Overlap Simulator
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Observe the impact of token size targets, sliding overlap, and structural boundary preservation.
          </p>
        </div>
        <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-mono font-bold text-stone-800">
          Step: {stepSize} tokens
        </span>
      </div>

      {/* Strategy Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {[
          { id: "fixed", name: "Fixed-Size Token", desc: "Rigid cuts; fast" },
          { id: "sentence", name: "Sentence-Based", desc: "Protects full sentences" },
          { id: "recursive", name: "Recursive Character", desc: "Paragraph -> Sentence" },
          { id: "parent_child", name: "Parent-Child", desc: "Small index + Big context" }
        ].map((strat) => (
          <button
            key={strat.id}
            onClick={() => setSelectedStrategy(strat.id)}
            className={`p-3 rounded-xl border text-left transition cursor-pointer ${
              selectedStrategy === strat.id
                ? "border-orange-500 bg-orange-50/50 shadow-xs ring-1 ring-orange-400"
                : "border-stone-200 bg-stone-50 hover:bg-stone-100"
            }`}
          >
            <div className="text-xs font-bold text-stone-900">{strat.name}</div>
            <div className="text-[11px] text-stone-500 mt-0.5">{strat.desc}</div>
          </button>
        ))}
      </div>

      {/* Sliders */}
      <div className="grid sm:grid-cols-2 gap-5 p-4 rounded-xl border border-stone-200 bg-stone-50 mb-6">
        <div>
          <div className="flex justify-between items-center text-xs mb-1.5">
            <label htmlFor={chunkSizeId} className="font-semibold text-stone-700">Chunk Size Target:</label>
            <span className="font-mono font-bold text-orange-700">{chunkSize} tokens</span>
          </div>
          <input
            id={chunkSizeId}
            type="range"
            min="60"
            max="600"
            step="20"
            value={chunkSize}
            onChange={(e) => setChunkSize(Number(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-stone-600 mt-1">
            <span>60 tokens (Fine)</span>
            <span>300 tokens (Balanced)</span>
            <span>600 tokens (Broad)</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center text-xs mb-1.5">
            <label htmlFor={overlapPctId} className="font-semibold text-stone-700">Sliding Overlap Percentage:</label>
            <span className="font-mono font-bold text-orange-700">
              {overlapPct}% ({overlapTokens} tokens)
            </span>
          </div>
          <input
            id={overlapPctId}
            type="range"
            min="0"
            max="40"
            step="5"
            value={overlapPct}
            onChange={(e) => setOverlapPct(Number(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-stone-600 mt-1">
            <span>0% (No overlap)</span>
            <span>20% (Standard)</span>
            <span>40% (Heavy redundancy)</span>
          </div>
        </div>
      </div>

      {/* Mathematical Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-center">
        <div className="p-3 rounded-lg border border-stone-200 bg-white">
          <span className="text-[11px] text-stone-600 block">Corpus Tokens</span>
          <span className="text-lg font-extrabold text-stone-900 font-mono">~{totalTokens}</span>
        </div>
        <div className="p-3 rounded-lg border border-stone-200 bg-white">
          <span className="text-[11px] text-stone-600 block">Generated Chunks</span>
          <span className="text-lg font-extrabold text-orange-700 font-mono">{estimatedChunks}</span>
        </div>
        <div className="p-3 rounded-lg border border-stone-200 bg-white">
          <span className="text-[11px] text-stone-600 block">Step Size (S = N - K)</span>
          <span className="text-lg font-extrabold text-stone-900 font-mono">{stepSize}</span>
        </div>
        <div className="p-3 rounded-lg border border-stone-200 bg-white">
          <span className="text-[11px] text-stone-600 block">Redundancy Overhead</span>
          <span className="text-lg font-extrabold text-stone-900 font-mono">
            {Math.round(((overlapTokens * (estimatedChunks - 1)) / totalTokens) * 100)}%
          </span>
        </div>
      </div>

      {/* Visual Chunk Slices */}
      <div className="space-y-2.5">
        <span className="text-xs font-bold text-stone-800 block">Simulated Chunk Boundaries:</span>
        {Array.from({ length: Math.min(3, estimatedChunks) }).map((_, idx) => (
          <div key={idx} className="p-3 rounded-lg border border-stone-200 bg-stone-50 text-xs">
            <div className="flex items-center justify-between border-b border-stone-200 pb-1 mb-1.5 font-mono text-[11px]">
              <span className="font-bold text-orange-800">Chunk #{idx + 1}</span>
              <span className="text-stone-600">Tokens: {idx * stepSize} → {idx * stepSize + chunkSize}</span>
            </div>
            <p className="text-stone-700 leading-relaxed font-mono text-[11px]">
              {idx > 0 && (
                <span className="bg-amber-200 text-amber-900 px-1 py-0.5 rounded font-semibold mr-1">
                  [Overlap: {overlapTokens} tok]
                </span>
              )}
              {sampleText.slice(idx * 70, idx * 70 + 180)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 3. Hybrid Search & Reciprocal Rank Fusion (RRF) Calculator
 * Interactive tool demonstrating dense vector + sparse BM25 fusion with customizable rank constant k.
 */
export function HybridSearchRrfCalculator() {
  const kConstantId = useId();
  const [kConstant, setKConstant] = useState(60);
  const [selectedQuery, setSelectedQuery] = useState("java_oom");

  const queryPresets = {
    java_oom: {
      query: "Java OutOfMemoryError in Metaspace",
      explanation: "Exact error terminology. BM25 recognizes exact tokens; vector retrieval matches memory concepts.",
      documents: [
        { id: "doc_01", title: "Metaspace Exhaustion & JVM Flag Tuning", denseRank: 4, sparseRank: 1 },
        { id: "doc_02", title: "Java Heap vs Stack Memory Allocation", denseRank: 1, sparseRank: 6 },
        { id: "doc_03", title: "Diagnosing OutOfMemoryError in Java", denseRank: 2, sparseRank: 2 },
        { id: "doc_04", title: "Garbage Collector Mark-and-Sweep Cycles", denseRank: 3, sparseRank: 7 },
        { id: "doc_05", title: "Classloader Leaks and Permanent Generation", denseRank: 5, sparseRank: 3 }
      ]
    },
    gc_concept: {
      query: "How does the JVM automatically reclaim memory from unused objects?",
      explanation: "Natural conceptual description. Dense semantic search performs exceptionally well.",
      documents: [
        { id: "doc_01", title: "Java Garbage Collection Fundamentals", denseRank: 1, sparseRank: 3 },
        { id: "doc_02", title: "Heap Memory Management in Java", denseRank: 2, sparseRank: 2 },
        { id: "doc_03", title: "Object Reachability & Weak References", denseRank: 3, sparseRank: 5 },
        { id: "doc_04", title: "Tuning JVM Heap Size Parameters", denseRank: 6, sparseRank: 1 },
        { id: "doc_05", title: "G1 Garbage Collector Internals", denseRank: 4, sparseRank: 4 }
      ]
    }
  };

  const activePreset = queryPresets[selectedQuery];

  // Calculate RRF scores: RRF(d) = 1/(k + rank_dense) + 1/(k + rank_sparse)
  const scoredDocs = activePreset.documents.map((doc) => {
    const denseComponent = 1.0 / (kConstant + doc.denseRank);
    const sparseComponent = 1.0 / (kConstant + doc.sparseRank);
    const rrfScore = denseComponent + sparseComponent;
    return { ...doc, denseComponent, sparseComponent, rrfScore };
  });

  scoredDocs.sort((a, b) => b.rrfScore - a.rrfScore);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <GitMerge className="text-orange-600" size={20} />
            Hybrid Search & Reciprocal Rank Fusion (RRF) Calculator
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Test how dense semantic ranking and sparse BM25 ranking combine via RRF formula:{" "}
            <span className="font-mono text-orange-700">RRF(d) = Σ [1 / (k + rank)]</span>
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedQuery("java_oom")}
            className={`px-3 py-1 text-xs font-semibold rounded-lg border ${
              selectedQuery === "java_oom"
                ? "bg-orange-600 text-white border-orange-700"
                : "bg-stone-50 text-stone-700 border-stone-200"
            }`}
          >
            Exact Alphanumeric Query
          </button>
          <button
            onClick={() => setSelectedQuery("gc_concept")}
            className={`px-3 py-1 text-xs font-semibold rounded-lg border ${
              selectedQuery === "gc_concept"
                ? "bg-orange-600 text-white border-orange-700"
                : "bg-stone-50 text-stone-700 border-stone-200"
            }`}
          >
            Conceptual Query
          </button>
        </div>
      </div>

      {/* Query Banner */}
      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 mb-5 text-xs">
        <div className="font-semibold text-stone-800">
          User Query: <span className="text-orange-800 font-mono font-bold">"{activePreset.query}"</span>
        </div>
        <div className="text-stone-500 mt-1">{activePreset.explanation}</div>
      </div>

      {/* Constant Slider */}
      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 mb-6">
        <div className="flex justify-between items-center text-xs mb-1.5">
          <label htmlFor={kConstantId} className="font-semibold text-stone-700">Rank Constant (k):</label>
          <span className="font-mono font-bold text-orange-700">{kConstant} (Standard: 60)</span>
        </div>
        <input
          id={kConstantId}
          type="range"
          min="1"
          max="100"
          value={kConstant}
          onChange={(e) => setKConstant(Number(e.target.value))}
          className="w-full accent-orange-600 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-stone-600 mt-1">
          <span>k = 1 (Extreme Rank 1 bias)</span>
          <span>k = 60 (Industry standard smooth decay)</span>
          <span>k = 100 (Flat score distribution)</span>
        </div>
      </div>

      {/* Fusion Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border border-stone-200 rounded-lg overflow-hidden">
          <thead className="bg-stone-100 text-stone-700 font-semibold uppercase text-[10px] tracking-wider">
            <tr>
              <th className="py-2.5 px-3">Fused Rank</th>
              <th className="py-2.5 px-3">Document Title</th>
              <th className="py-2.5 px-3 text-center">Dense Rank</th>
              <th className="py-2.5 px-3 text-center">BM25 Rank</th>
              <th className="py-2.5 px-3 text-right">RRF Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 bg-white">
            {scoredDocs.map((doc, idx) => (
              <tr key={doc.id} className={idx === 0 ? "bg-orange-50/50 font-semibold" : "hover:bg-stone-50"}>
                <td className="py-2.5 px-3 font-mono">
                  <span className={`inline-block w-5 h-5 rounded-full text-center leading-5 text-[11px] font-bold ${
                    idx === 0 ? "bg-orange-600 text-white" : "bg-stone-200 text-stone-700"
                  }`}>
                    {idx + 1}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-stone-900">{doc.title}</td>
                <td className="py-2.5 px-3 text-center font-mono text-stone-600">#{doc.denseRank}</td>
                <td className="py-2.5 px-3 text-center font-mono text-stone-600">#{doc.sparseRank}</td>
                <td className="py-2.5 px-3 text-right font-mono font-bold text-orange-700">
                  {doc.rrfScore.toFixed(5)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * 4. Cross-Encoder Reranker Comparison Simulator
 * Visualizes the two-stage retrieval pipeline: Bi-Encoder top 10 candidates -> Cross-Encoder deep attention scoring.
 */
export function CrossEncoderRerankerComparison() {
  const [cutoffTopN, setCutoffTopN] = useState(3);

  const initialCandidates = [
    {
      id: "doc_a",
      title: "Java Concurrency: ReentrantLock Fairness & Starvation",
      biEncoderScore: 0.81,
      biEncoderRank: 3,
      crossEncoderScore: 0.96,
      crossEncoderRank: 1,
      reason: "Directly explains fair ordering guarantees; cross-encoder self-attention detects exact match."
    },
    {
      id: "doc_b",
      title: "Introduction to Thread Synchronization and Locks",
      biEncoderScore: 0.88,
      biEncoderRank: 1,
      crossEncoderScore: 0.74,
      crossEncoderRank: 3,
      reason: "High broad semantic similarity to 'locks' but lacks specific fairness discussion."
    },
    {
      id: "doc_c",
      title: "Condition Variables and ReentrantLock Await/Signal",
      biEncoderScore: 0.84,
      biEncoderRank: 2,
      crossEncoderScore: 0.89,
      crossEncoderRank: 2,
      reason: "Covers ReentrantLock advanced methods; strong technical relevance."
    },
    {
      id: "doc_d",
      title: "Python Threading and GIL Locking Mechanisms",
      biEncoderScore: 0.79,
      biEncoderRank: 4,
      crossEncoderScore: 0.22,
      crossEncoderRank: 5,
      reason: "Semantic vector pulled in Python lock notes; cross-encoder penalizes wrong language."
    },
    {
      id: "doc_e",
      title: "JVM Memory Model & Volatile Semantics",
      biEncoderScore: 0.75,
      biEncoderRank: 5,
      crossEncoderScore: 0.45,
      crossEncoderRank: 4,
      reason: "Tangential hardware memory visibility concepts."
    }
  ];

  const rerankedList = [...initialCandidates].sort((a, b) => b.crossEncoderScore - a.crossEncoderScore);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Scale className="text-orange-600" size={20} />
            Bi-Encoder Candidate Retrieval vs Cross-Encoder Reranking
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Query: <span className="font-mono text-orange-800 font-semibold">"Does Java ReentrantLock support fair ordering policies?"</span>
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-stone-600 font-semibold">Final Context Cutoff:</span>
          <select
            value={cutoffTopN}
            onChange={(e) => setCutoffTopN(Number(e.target.value))}
            className="border border-stone-300 rounded-lg px-2.5 py-1 text-xs bg-stone-50 font-semibold text-stone-800"
          >
            <option value={2}>Top 2 Chunks</option>
            <option value={3}>Top 3 Chunks (Recommended)</option>
            <option value={4}>Top 4 Chunks</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        {/* Stage 1: Bi-Encoder List */}
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2 mb-3">
            <h4 className="text-xs font-bold uppercase text-stone-700 tracking-wider">
              Stage 1: Bi-Encoder Initial Candidates
            </h4>
            <span className="text-[11px] font-mono text-stone-500">Latency: ~15ms</span>
          </div>
          <div className="space-y-2">
            {initialCandidates.map((doc) => (
              <div key={doc.id} className="p-2.5 rounded-lg border border-stone-200 bg-white text-xs">
                <div className="flex justify-between items-start gap-2">
                  <span className="font-semibold text-stone-900">
                    <span className="font-mono text-stone-500 mr-1.5">#{doc.biEncoderRank}</span>
                    {doc.title}
                  </span>
                  <span className="font-mono text-stone-600 font-bold shrink-0">
                    {doc.biEncoderScore.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stage 2: Cross-Encoder Reranked List */}
        <div className="rounded-xl border border-orange-200 bg-orange-50/30 p-4">
          <div className="flex items-center justify-between border-b border-orange-200 pb-2 mb-3">
            <h4 className="text-xs font-bold uppercase text-orange-900 tracking-wider">
              Stage 2: Cross-Encoder Reranked Order
            </h4>
            <span className="text-[11px] font-mono text-orange-700">Latency: ~70ms</span>
          </div>
          <div className="space-y-2">
            {rerankedList.map((doc, idx) => {
              const isSelected = idx < cutoffTopN;
              return (
                <div
                  key={doc.id}
                  className={`p-2.5 rounded-lg border text-xs transition ${
                    isSelected
                      ? "border-emerald-300 bg-emerald-50/60 shadow-xs"
                      : "border-stone-200 bg-white opacity-60"
                  }`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <span className="font-semibold text-stone-900">
                      <span className="font-mono text-orange-700 font-bold mr-1.5">#{idx + 1}</span>
                      {doc.title}
                    </span>
                    <span className="font-mono font-bold text-emerald-700 shrink-0">
                      {doc.crossEncoderScore.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-[11px] text-stone-600 mt-1">{doc.reason}</div>
                  {isSelected && (
                    <span className="inline-block mt-1 text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      Included in Context Assembly
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 5. RAG Triad Evaluation & Grounding Benchmark
 * Interactive dashboard calculating Faithfulness, Answer Relevancy, Context Precision, and Context Recall.
 */
export function RagTriadEvaluationBenchmark() {
  const [selectedCase, setSelectedCase] = useState("hallucination");

  const cases = {
    hallucination: {
      name: "Case A: Hallucinated Claim",
      desc: "Retriever found valid context, but LLM made an unsupported claim about timing.",
      query: "How does Java garbage collection work?",
      context: "Java garbage collection reclaims heap memory allocated to objects that are no longer reachable.",
      response: "Java garbage collection reclaims unreachable objects. It runs strictly every 10 seconds on all operating systems.",
      faithfulness: 0.50,
      relevancy: 0.95,
      contextPrecision: 0.92,
      contextRecall: 0.88,
      verdict: "Generation Failure: Faithfulness failed due to unsupported claim ('every 10 seconds')."
    },
    irrelevant_context: {
      name: "Case B: Irrelevant Retrieval",
      desc: "Retriever fetched Python documentation for a Java question.",
      query: "Explain Java multiple inheritance.",
      context: "Python supports multiple inheritance using the C3 linearization algorithm (Method Resolution Order).",
      response: "The provided course materials do not contain sufficient evidence regarding Java multiple inheritance.",
      faithfulness: 1.0,
      relevancy: 0.90,
      contextPrecision: 0.15,
      contextRecall: 0.10,
      verdict: "Retrieval Failure: Context Precision failed. Grounded prompt successfully avoided hallucination."
    },
    perfect_grounding: {
      name: "Case C: Fully Grounded & Accurate",
      desc: "High precision retrieval paired with strictly grounded synthesis and source attribution.",
      query: "What is heap memory in Java?",
      context: "[Source 1]: Java heap memory is shared across all threads and stores runtime instantiated objects.",
      response: "Java heap memory is shared across all executing threads and stores dynamically created objects. [Source 1]",
      faithfulness: 1.0,
      relevancy: 1.0,
      contextPrecision: 0.98,
      contextRecall: 0.95,
      verdict: "Optimal Production Pipeline: High retrieval quality and 100% faithful response."
    }
  };

  const activeCase = cases[selectedCase];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <ShieldCheck className="text-orange-600" size={20} />
            Ragas Triad Evaluation & Error Diagnostics
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Test and isolate retrieval failures versus generation failures across Faithfulness, Relevancy, and Context Precision.
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {Object.keys(cases).map((k) => (
            <button
              key={k}
              onClick={() => setSelectedCase(k)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg border transition ${
                selectedCase === k
                  ? "bg-orange-600 text-white border-orange-700"
                  : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
              }`}
            >
              {cases[k].name.split(":")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Case Details */}
      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 mb-5 text-xs space-y-2">
        <div>
          <span className="font-bold text-stone-800">Scenario: </span>
          <span className="text-stone-700">{activeCase.desc}</span>
        </div>
        <div>
          <span className="font-bold text-stone-800">User Query: </span>
          <span className="font-mono text-orange-800 font-semibold">{activeCase.query}</span>
        </div>
        <div>
          <span className="font-bold text-stone-800">Retrieved Context: </span>
          <span className="font-mono text-stone-600">{activeCase.context}</span>
        </div>
        <div>
          <span className="font-bold text-stone-800">Generated Answer: </span>
          <span className="font-mono text-emerald-800">{activeCase.response}</span>
        </div>
      </div>

      {/* Gauges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5 text-center">
        <div className="p-3 rounded-lg border border-stone-200 bg-white">
          <span className="text-[11px] text-stone-600 block mb-1">Faithfulness</span>
          <span className={`text-xl font-extrabold font-mono ${
            activeCase.faithfulness >= 0.8 ? "text-emerald-600" : "text-red-600"
          }`}>
            {(activeCase.faithfulness * 100).toFixed(0)}%
          </span>
          <span className="text-[10px] text-stone-600 block mt-0.5">Claims backed by context</span>
        </div>

        <div className="p-3 rounded-lg border border-stone-200 bg-white">
          <span className="text-[11px] text-stone-600 block mb-1">Answer Relevancy</span>
          <span className="text-xl font-extrabold font-mono text-emerald-600">
            {(activeCase.relevancy * 100).toFixed(0)}%
          </span>
          <span className="text-[10px] text-stone-600 block mt-0.5">Answers user intent</span>
        </div>

        <div className="p-3 rounded-lg border border-stone-200 bg-white">
          <span className="text-[11px] text-stone-600 block mb-1">Context Precision</span>
          <span className={`text-xl font-extrabold font-mono ${
            activeCase.contextPrecision >= 0.8 ? "text-emerald-600" : "text-amber-600"
          }`}>
            {(activeCase.contextPrecision * 100).toFixed(0)}%
          </span>
          <span className="text-[10px] text-stone-600 block mt-0.5">Relevance of retrieved chunks</span>
        </div>

        <div className="p-3 rounded-lg border border-stone-200 bg-white">
          <span className="text-[11px] text-stone-600 block mb-1">Context Recall</span>
          <span className={`text-xl font-extrabold font-mono ${
            activeCase.contextRecall >= 0.8 ? "text-emerald-600" : "text-amber-600"
          }`}>
            {(activeCase.contextRecall * 100).toFixed(0)}%
          </span>
          <span className="text-[10px] text-stone-600 block mt-0.5">Coverage of needed facts</span>
        </div>
      </div>

      {/* Diagnostic Verdict */}
      <div className={`p-3.5 rounded-xl border text-xs font-semibold flex items-center gap-2 ${
        activeCase.faithfulness >= 0.8 && activeCase.contextPrecision >= 0.8
          ? "bg-emerald-50 text-emerald-900 border-emerald-200"
          : "bg-red-50 text-red-900 border-red-200"
      }`}>
        <Info size={16} className="shrink-0" />
        <span>{activeCase.verdict}</span>
      </div>
    </div>
  );
}
