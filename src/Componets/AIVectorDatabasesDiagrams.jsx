import React, { useState, useId } from "react";
import {
  Compass,
  Sliders,
  Info,
  Layers,
  Search,
  Filter,
  BarChart3,
  GitMerge
} from "lucide-react";

/**
 * 1. Cosine Similarity & Vector Space Visualizer
 * Interactive 2D vector angle explorer with live dot product, magnitudes, and unit circle SVG.
 */
export function CosineSimilarityVisualizer() {
  const [angleDeg, setAngleDeg] = useState(30);
  const [magA, setMagA] = useState(1.5);
  const [magB, setMagB] = useState(1.2);

  const angleRad = (angleDeg * Math.PI) / 180;
  const cosSim = Math.cos(angleRad);

  // Vector A along positive X axis: [magA, 0]
  const ax = magA;
  const ay = 0;

  // Vector B at angleDeg: [magB * cos(theta), magB * sin(theta)]
  const bx = magB * Math.cos(angleRad);
  const by = magB * Math.sin(angleRad);

  const dotProduct = ax * bx + ay * by;
  const normA = Math.sqrt(ax * ax + ay * ay);
  const normB = Math.sqrt(bx * bx + by * by);

  let interpretation = "Strong Semantic Similarity";
  let badgeColor = "bg-emerald-50 text-emerald-800 border-emerald-200";
  if (cosSim >= 0.85) {
    interpretation = "Nearly Identical Semantics (θ ≈ 0°)";
    badgeColor = "bg-emerald-100 text-emerald-800 border-emerald-300";
  } else if (cosSim >= 0.4) {
    interpretation = "Moderately Related Semantics";
    badgeColor = "bg-blue-50 text-blue-800 border-blue-200";
  } else if (cosSim >= -0.2 && cosSim <= 0.2) {
    interpretation = "Orthogonal (Zero Semantic Correlation, θ ≈ 90°)";
    badgeColor = "bg-stone-100 text-stone-800 border-stone-300";
  } else {
    interpretation = "Opposite Directional Tendency";
    badgeColor = "bg-red-50 text-red-800 border-red-200";
  }

  // SVG dimensions
  const svgCenter = 120;
  const svgScale = 50; // pixels per unit
  const endAx = svgCenter + ax * svgScale;
  const endAy = svgCenter - ay * svgScale;
  const endBx = svgCenter + bx * svgScale;
  const endBy = svgCenter - by * svgScale;

  const angleId = useId();
  const magAId = useId();
  const magBId = useId();

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
            <Compass size={18} />
          </div>
          <div>
            <h3 className="font-bold text-stone-900 text-base sm:text-lg">
              Cosine Similarity & Vector Geometry Visualizer
            </h3>
            <p className="text-xs text-stone-500">
              {"CosSim(A, B) = (A · B) / (||A|| ||B||) = cos(θ)"}
            </p>
          </div>
        </div>
        <span className={`rounded-full px-3 py-1 font-mono text-xs font-bold border ${badgeColor}`}>
          cos(θ) = {cosSim.toFixed(4)}
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-12 mb-6">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <label htmlFor={angleId} className="block text-xs font-semibold text-stone-700 mb-1.5">
              Angle (θ): <span className="font-mono text-orange-700 font-bold">{angleDeg}°</span>
            </label>
            <input
              id={angleId}
              type="range"
              min={0}
              max={180}
              step={1}
              value={angleDeg}
              onChange={(e) => setAngleDeg(Number(e.target.value))}
              className="w-full accent-orange-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor={magAId} className="block text-xs font-semibold text-stone-700 mb-1.5">
                ||A|| Magnitude: <span className="font-mono text-orange-700 font-bold">{magA}</span>
              </label>
              <input
                id={magAId}
                type="range"
                min={0.5}
                max={2.0}
                step={0.1}
                value={magA}
                onChange={(e) => setMagA(Number(e.target.value))}
                className="w-full accent-orange-600"
              />
            </div>

            <div>
              <label htmlFor={magBId} className="block text-xs font-semibold text-stone-700 mb-1.5">
                ||B|| Magnitude: <span className="font-mono text-orange-700 font-bold">{magB}</span>
              </label>
              <input
                id={magBId}
                type="range"
                min={0.5}
                max={2.0}
                step={0.1}
                value={magB}
                onChange={(e) => setMagB(Number(e.target.value))}
                className="w-full accent-orange-600"
              />
            </div>
          </div>

          {/* Math breakdown */}
          <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-stone-50 border border-stone-200 font-mono text-xs">
            <div className="p-2 bg-white rounded border border-stone-200">
              <div className="text-[10px] text-stone-400">Dot Product (A·B)</div>
              <div className="font-bold text-stone-900 mt-0.5">{dotProduct.toFixed(3)}</div>
            </div>
            <div className="p-2 bg-white rounded border border-stone-200">
              <div className="text-[10px] text-stone-400">||A|| × ||B||</div>
              <div className="font-bold text-stone-900 mt-0.5">{(normA * normB).toFixed(3)}</div>
            </div>
            <div className="p-2 bg-white rounded border border-stone-200">
              <div className="text-[10px] text-stone-400">Cosine Similarity</div>
              <div className="font-bold text-orange-600 mt-0.5">{cosSim.toFixed(4)}</div>
            </div>
          </div>

          <div className="text-xs font-medium text-stone-700">
            <strong>Interpretation:</strong> <span className="font-semibold text-stone-900">{interpretation}</span>
          </div>
        </div>

        {/* 2D Unit Circle SVG */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-3 rounded-xl bg-stone-900 text-white">
          <svg width={240} height={240} viewBox="0 0 240 240" className="overflow-visible">
            {/* Grid Axes */}
            <line x1="20" y1="120" x2="220" y2="120" stroke="#44403c" strokeWidth="1" />
            <line x1="120" y1="20" x2="120" y2="220" stroke="#44403c" strokeWidth="1" />
            <circle cx="120" cy="120" r="50" fill="none" stroke="#292524" strokeWidth="1" strokeDasharray="3,3" />

            {/* Vector A (Blue) */}
            <line
              x1="120"
              y1="120"
              x2={endAx}
              y2={endAy}
              stroke="#38bdf8"
              strokeWidth="3"
              markerEnd="url(#arrow-blue)"
            />
            <text x={endAx + 6} y={endAy + 4} fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">
              A
            </text>

            {/* Vector B (Orange) */}
            <line
              x1="120"
              y1="120"
              x2={endBx}
              y2={endBy}
              stroke="#f97316"
              strokeWidth="3"
            />
            <text x={endBx + 6} y={endBy - 4} fill="#f97316" fontSize="11" fontWeight="bold" fontFamily="monospace">
              B
            </text>

            {/* Origin marker */}
            <circle cx="120" cy="120" r="3" fill="#ffffff" />
          </svg>
          <div className="flex gap-4 text-[11px] font-mono mt-2">
            <span className="flex items-center gap-1 text-sky-400">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span> Vector A [||A||={magA}]
            </span>
            <span className="flex items-center gap-1 text-orange-400">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span> Vector B [||B||={magB}]
            </span>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-orange-50/70 border border-orange-200/60 text-xs text-orange-950 flex items-start gap-2.5">
        <Info size={16} className="text-orange-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Key Insight:</strong> Notice that changing vector magnitudes ||A|| and ||B|| changes the dot product, but the Cosine Similarity {"cos(θ)"} remains completely unchanged. When vectors are L2-normalized, Dot Product is mathematically identical to Cosine Similarity!
        </p>
      </div>
    </div>
  );
}

/**
 * 2. FAISS Index Comparison & Performance Explorer
 * Interactive index algorithm comparator (FlatL2, FlatIP, IVF, HNSW, PQ) on 1,000,000 vectors.
 */
export function FaissIndexComparisonExplorer() {
  const [selectedIndex, setSelectedIndex] = useState("hnsw"); // 'flat-ip' | 'ivf' | 'hnsw' | 'pq'
  const [nprobe, setNprobe] = useState(10); // for IVF
  const [efSearch, setEfSearch] = useState(64); // for HNSW

  const indexStats = {
    "flat-ip": {
      name: "IndexFlatIP (Exact Inner Product)",
      type: "Exact Brute-Force",
      queryLatency: "28.5 ms",
      memoryUsage: "1,536 MB (1.5 GB)",
      recallAt10: "100.0%",
      trainingTime: "0.0s (No training needed)",
      tradeoff: "Perfect ground truth baseline, but O(N*d) brute force becomes too slow for millions of vectors."
    },
    ivf: {
      name: `IndexIVFFlat (Inverted File, nprobe=${nprobe})`,
      type: "Approximate (Voronoi Clusters)",
      queryLatency: `${(1.2 + (nprobe / 50) * 4.5).toFixed(1)} ms`,
      memoryUsage: "1,542 MB (1.5 GB)",
      recallAt10: `${(78 + Math.min(nprobe * 0.42, 20)).toFixed(1)}%`,
      trainingTime: "4.8s (k-means clustering)",
      tradeoff: "Partitions vectors into 100 clusters. Searching selected nprobe clusters yields up to 10x speedup."
    },
    hnsw: {
      name: `HNSW (Hierarchical Graph, efSearch=${efSearch})`,
      type: "Approximate (Multi-Layer Graphs)",
      queryLatency: `${(0.8 + (efSearch / 128) * 1.4).toFixed(1)} ms`,
      memoryUsage: "2,200 MB (2.2 GB)",
      recallAt10: `${(92 + Math.min(efSearch * 0.11, 7.8)).toFixed(1)}%`,
      trainingTime: "32.0s (Graph construction)",
      tradeoff: "Fastest query latency with state-of-the-art recall (>98%), but requires extra RAM for graph edges."
    },
    pq: {
      name: "IndexPQ (Product Quantization, 64 bytes/vector)",
      type: "Compressed Approximate",
      queryLatency: "2.1 ms",
      memoryUsage: "64 MB (95.8% Memory Reduction!)",
      recallAt10: "82.4%",
      trainingTime: "12.5s (Codebook quantization)",
      tradeoff: "Compresses 384-dim FP32 vectors into 64 bytes. Massive memory savings with modest recall loss."
    }
  };

  const curr = indexStats[selectedIndex];

  const nprobeId = useId();
  const efSearchId = useId();

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
            <Sliders size={18} />
          </div>
          <div>
            <h3 className="font-bold text-stone-900 text-base sm:text-lg">
              FAISS Index Architecture & Tradeoff Explorer
            </h3>
            <p className="text-xs text-stone-500">
              Compare Flat, IVF Clustering, HNSW Graphs, and Product Quantization on 1,000,000 vectors (384-dim)
            </p>
          </div>
        </div>
        <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 font-mono text-xs font-bold text-blue-700">
          Latency: {curr.queryLatency}
        </span>
      </div>

      <div className="grid gap-2 sm:grid-cols-4 mb-5">
        {[
          { id: "flat-ip", label: "IndexFlatIP (Exact)" },
          { id: "ivf", label: "IndexIVFFlat (Clusters)" },
          { id: "hnsw", label: "HNSW (Graph)" },
          { id: "pq", label: "IndexPQ (Compressed)" }
        ].map((idxBtn) => (
          <button
            key={idxBtn.id}
            onClick={() => setSelectedIndex(idxBtn.id)}
            className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
              selectedIndex === idxBtn.id
                ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50"
            }`}
          >
            {idxBtn.label}
          </button>
        ))}
      </div>

      {selectedIndex === "ivf" && (
        <div className="mb-5 p-3 rounded-xl bg-blue-50/50 border border-blue-200">
          <label htmlFor={nprobeId} className="block text-xs font-semibold text-blue-900 mb-1.5">
            IVF Cluster Search Depth (nprobe): <span className="font-mono font-bold">{nprobe} clusters</span>
          </label>
          <input
            id={nprobeId}
            type="range"
            min={1}
            max={50}
            step={1}
            value={nprobe}
            onChange={(e) => setNprobe(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-[10px] text-blue-700 mt-1">
            <span>nprobe=1 (Fastest, Lower Recall)</span>
            <span>nprobe=50 (High Recall, Slower)</span>
          </div>
        </div>
      )}

      {selectedIndex === "hnsw" && (
        <div className="mb-5 p-3 rounded-xl bg-blue-50/50 border border-blue-200">
          <label htmlFor={efSearchId} className="block text-xs font-semibold text-blue-900 mb-1.5">
            HNSW Search Horizon (efSearch): <span className="font-mono font-bold">{efSearch}</span>
          </label>
          <input
            id={efSearchId}
            type="range"
            min={16}
            max={128}
            step={16}
            value={efSearch}
            onChange={(e) => setEfSearch(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-[10px] text-blue-700 mt-1">
            <span>efSearch=16 (Sub-millisecond)</span>
            <span>efSearch=128 (Maximum Graph Accuracy)</span>
          </div>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-4 font-mono text-xs mb-4">
        <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
          <div className="text-stone-500 text-[11px]">Query Latency</div>
          <div className="text-base font-bold text-blue-600 mt-0.5">{curr.queryLatency}</div>
          <div className="text-[10px] text-stone-400 mt-1">Per search request</div>
        </div>

        <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
          <div className="text-stone-500 text-[11px]">Memory Footprint</div>
          <div className="text-base font-bold text-stone-900 mt-0.5">{curr.memoryUsage}</div>
          <div className="text-[10px] text-stone-400 mt-1">RAM / VRAM requirement</div>
        </div>

        <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
          <div className="text-stone-500 text-[11px]">Recall@10 Accuracy</div>
          <div className="text-base font-bold text-emerald-600 mt-0.5">{curr.recallAt10}</div>
          <div className="text-[10px] text-stone-400 mt-1">vs Exact Ground Truth</div>
        </div>

        <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
          <div className="text-stone-500 text-[11px]">Index Build Time</div>
          <div className="text-base font-bold text-orange-600 mt-0.5">{curr.trainingTime}</div>
          <div className="text-[10px] text-stone-400 mt-1">Offline preprocessing</div>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-700 leading-relaxed">
        <strong>Architectural Assessment:</strong> {curr.tradeoff}
      </div>
    </div>
  );
}

/**
 * 3. Document Chunking & Overlap Playground
 * Simulates fixed-size sliding window chunking with highlighted boundary overlap tokens.
 */
export function DocumentChunkingInteractivePlayground() {
  const [chunkSize, setChunkSize] = useState(40);
  const [overlap, setOverlap] = useState(10);

  const rawArticle =
    "Java garbage collection is an automated memory management process that scans the JVM heap to identify unreachable objects and reclaim memory. The JVM heap is partitioned into Young Generation and Old Generation spaces. Young generation is further divided into Eden and Survivor spaces. When Eden fills up, a minor garbage collection cycle executes. Objects surviving multiple cycles are promoted to Old Generation. Major GC collects the Old Generation and can introduce Stop-The-World pauses.";

  const words = rawArticle.split(" ");
  const chunks = [];
  let start = 0;
  while (start < words.length) {
    const end = Math.min(start + chunkSize, words.length);
    const chunkWords = words.slice(start, end);
    const overlapWords = start > 0 ? words.slice(start, Math.min(start + overlap, end)) : [];
    const coreWords = start > 0 ? words.slice(start + overlap, end) : chunkWords;

    chunks.push({
      index: chunks.length + 1,
      start,
      end,
      overlapText: overlapWords.join(" "),
      coreText: coreWords.join(" ")
    });

    if (end === words.length) break;
    start += chunkSize - overlap;
  }

  const chunkSizeId = useId();
  const overlapId = useId();

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
            <Layers size={18} />
          </div>
          <div>
            <h3 className="font-bold text-stone-900 text-base sm:text-lg">
              Document Chunking & Boundary Overlap Playground
            </h3>
            <p className="text-xs text-stone-500">
              Sliding-window chunking preserves semantic continuity across document splits
            </p>
          </div>
        </div>
        <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 font-mono text-xs font-bold text-amber-800">
          Total Chunks: {chunks.length}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 mb-5">
        <div>
          <label htmlFor={chunkSizeId} className="block text-xs font-semibold text-stone-700 mb-1.5">
            Chunk Size: <span className="font-mono text-orange-700 font-bold">{chunkSize} words</span>
          </label>
          <input
            id={chunkSizeId}
            type="range"
            min={20}
            max={60}
            step={5}
            value={chunkSize}
            onChange={(e) => setChunkSize(Number(e.target.value))}
            className="w-full accent-orange-600"
          />
        </div>

        <div>
          <label htmlFor={overlapId} className="block text-xs font-semibold text-stone-700 mb-1.5">
            Boundary Overlap: <span className="font-mono text-orange-700 font-bold">{overlap} words</span>
          </label>
          <input
            id={overlapId}
            type="range"
            min={0}
            max={Math.floor(chunkSize / 2)}
            step={2}
            value={overlap}
            onChange={(e) => setOverlap(Number(e.target.value))}
            className="w-full accent-orange-600"
          />
        </div>
      </div>

      <div className="space-y-3 font-mono text-xs">
        {chunks.map((c) => (
          <div key={c.index} className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
            <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1.5 border-b border-stone-200/80 pb-1">
              <span className="font-bold text-orange-700">Chunk #{c.index} (Words {c.start}–{c.end})</span>
              <span>{c.overlapText ? `${overlap} Overlap Words` : "Initial Boundary"}</span>
            </div>
            <div className="leading-relaxed text-stone-800 font-sans text-xs">
              {c.overlapText && (
                <span className="bg-amber-200 text-amber-900 px-1 py-0.5 rounded font-mono text-[11px] font-semibold mr-1">
                  {c.overlapText}
                </span>
              )}
              <span>{c.coreText}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 4. Hybrid Search & Reciprocal Rank Fusion (RRF) Simulator
 * Combines dense semantic rankings and sparse BM25 keyword rankings with interactive smoothing constant k.
 */
export function HybridSearchRrfSimulator() {
  const [queryType, setQueryType] = useState("concept"); // 'concept' | 'symbol'
  const [kConstant, setKConstant] = useState(60);

  const testScenarios = {
    concept: {
      query: "How does Java automatically clean up unreachable objects?",
      denseList: ["java_gc", "java_heap", "java_stack", "python_gc"],
      sparseList: ["java_gc", "unreachable_objects", "java_heap", "jvm_memory"]
    },
    symbol: {
      query: "ConcurrentHashMap.computeIfAbsent() thread safety",
      denseList: ["java_collections", "java_concurrency", "concurrent_hashmap", "thread_pools"],
      sparseList: ["concurrent_hashmap", "compute_if_absent", "java_concurrency", "hashmap"]
    }
  };

  const currentScenario = testScenarios[queryType];

  // Compute RRF scores
  const rrfScores = {};
  currentScenario.denseList.forEach((doc, rank) => {
    rrfScores[doc] = (rrfScores[doc] || 0) + 1 / (kConstant + (rank + 1));
  });
  currentScenario.sparseList.forEach((doc, rank) => {
    rrfScores[doc] = (rrfScores[doc] || 0) + 1 / (kConstant + (rank + 1));
  });

  const sortedResults = Object.entries(rrfScores).sort((a, b) => b[1] - a[1]);

  const kConstantId = useId();

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
            <GitMerge size={18} />
          </div>
          <div>
            <h3 className="font-bold text-stone-900 text-base sm:text-lg">
              Hybrid Search & Reciprocal Rank Fusion (RRF)
            </h3>
            <p className="text-xs text-stone-500">
              Combine Dense Semantic Retrieval and Sparse BM25 via {"RRF(d) = Σ [ 1 / (k + rank) ]"}
            </p>
          </div>
        </div>
        <span className="rounded-full bg-purple-50 border border-purple-200 px-3 py-1 font-mono text-xs font-bold text-purple-700">
          Smoothing k = {kConstant}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 mb-5">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1.5">
            Test Query Type:
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setQueryType("concept")}
              className={`flex-1 p-2 rounded-lg text-xs font-bold border transition cursor-pointer ${
                queryType === "concept"
                  ? "bg-purple-50 border-purple-400 text-purple-900"
                  : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50"
              }`}
            >
              Conceptual Natural Language
            </button>
            <button
              onClick={() => setQueryType("symbol")}
              className={`flex-1 p-2 rounded-lg text-xs font-bold border transition cursor-pointer ${
                queryType === "symbol"
                  ? "bg-purple-50 border-purple-400 text-purple-900"
                  : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50"
              }`}
            >
              Exact Function / Code Symbol
            </button>
          </div>
        </div>

        <div>
          <label htmlFor={kConstantId} className="block text-xs font-semibold text-stone-700 mb-1.5">
            RRF Smoothing Constant (k): <span className="font-mono text-orange-700 font-bold">{kConstant}</span>
          </label>
          <input
            id={kConstantId}
            type="range"
            min={10}
            max={100}
            step={5}
            value={kConstant}
            onChange={(e) => setKConstant(Number(e.target.value))}
            className="w-full accent-purple-600"
          />
        </div>
      </div>

      <div className="p-3 rounded-lg bg-stone-900 text-white font-mono text-xs mb-4">
        <span className="text-stone-400">Query: </span>"{currentScenario.query}"
      </div>

      <div className="grid gap-4 md:grid-cols-3 font-mono text-xs">
        {/* Dense Rankings */}
        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
          <div className="font-bold text-sky-900 mb-2 flex items-center gap-1.5">
            <Compass size={14} className="text-sky-600" /> Dense Embeddings
          </div>
          <div className="space-y-1.5">
            {currentScenario.denseList.map((doc, idx) => (
              <div key={idx} className="p-1.5 bg-white rounded border border-stone-200 flex justify-between">
                <span>#{idx + 1} {doc}</span>
                <span className="text-stone-400 text-[10px]">Rank {idx + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sparse BM25 Rankings */}
        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
          <div className="font-bold text-amber-900 mb-2 flex items-center gap-1.5">
            <Search size={14} className="text-amber-600" /> Sparse BM25 Keyword
          </div>
          <div className="space-y-1.5">
            {currentScenario.sparseList.map((doc, idx) => (
              <div key={idx} className="p-1.5 bg-white rounded border border-stone-200 flex justify-between">
                <span>#{idx + 1} {doc}</span>
                <span className="text-stone-400 text-[10px]">Rank {idx + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fused RRF Ranking */}
        <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
          <div className="font-bold text-purple-900 mb-2 flex items-center gap-1.5">
            <BarChart3 size={14} className="text-purple-600" /> RRF Combined Ranking
          </div>
          <div className="space-y-1.5">
            {sortedResults.slice(0, 4).map(([doc, score], idx) => (
              <div key={idx} className="p-1.5 bg-white rounded border border-purple-300 flex justify-between font-bold text-purple-950">
                <span>#{idx + 1} {doc}</span>
                <span className="text-purple-700 text-[10px]">{score.toFixed(4)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 5. ChromaDB Metadata Filter Sandbox
 * Interactive multi-course query sandbox simulating scoped where={} filtering.
 */
export function ChromaMetadataFilterSandbox() {
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const databaseDocs = [
    { id: "java_01", text: "Java garbage collection reclaims unreachable heap memory.", course: "Java", difficulty: "Intermediate", distance: 0.12 },
    { id: "java_02", text: "JVM Survivor spaces prevent premature object promotion to tenured generation.", course: "Java", difficulty: "Advanced", distance: 0.18 },
    { id: "os_01", text: "Virtual memory uses translation lookaside buffers (TLB) to cache page table translations.", course: "Operating Systems", difficulty: "Advanced", distance: 0.24 },
    { id: "os_02", text: "Process scheduler assigns CPU time slices using Completely Fair Scheduler (CFS).", course: "Operating Systems", difficulty: "Intermediate", distance: 0.31 },
    { id: "net_01", text: "TCP three-way handshake synchronizes sequence numbers between client and server.", course: "Computer Networks", difficulty: "Beginner", distance: 0.42 },
    { id: "net_02", text: "BGP inter-domain routing uses path-vector protocol to exchange reachability information.", course: "Computer Networks", difficulty: "Advanced", distance: 0.49 },
    { id: "ai_01", text: "LoRA decomposes weight updates into low-rank factorization matrices B and A.", course: "AI Engineering", difficulty: "Advanced", distance: 0.15 },
    { id: "sec_01", text: "SQL injection attacks inject malicious SQL clauses through unsanitized user inputs.", course: "Cybersecurity", difficulty: "Beginner", distance: 0.52 }
  ];

  const filteredDocs = databaseDocs.filter((doc) => {
    if (selectedCourse !== "All" && doc.course !== selectedCourse) return false;
    if (selectedDifficulty !== "All" && doc.difficulty !== selectedDifficulty) return false;
    return true;
  });

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
            <Filter size={18} />
          </div>
          <div>
            <h3 className="font-bold text-stone-900 text-base sm:text-lg">
              ChromaDB Metadata Filtering & Namespace Sandbox
            </h3>
            <p className="text-xs text-stone-500">
              Execute scoped vector search: collection.query(..., where={"{"}"course": "{selectedCourse}"{"}"})
            </p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 font-mono text-xs font-bold text-emerald-800">
          Matches: {filteredDocs.length}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 mb-5">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1.5">
            Filter by Course Namespace:
          </label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="w-full rounded-lg border border-stone-300 p-2 text-xs font-semibold bg-white"
          >
            <option value="All">All Courses (Cross-Curriculum Search)</option>
            <option value="Java">Java Masterclass</option>
            <option value="Operating Systems">Operating Systems</option>
            <option value="Computer Networks">Computer Networks</option>
            <option value="AI Engineering">AI Engineering</option>
            <option value="Cybersecurity">Cybersecurity Masterclass</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1.5">
            Filter by Difficulty Tier:
          </label>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="w-full rounded-lg border border-stone-300 p-2 text-xs font-semibold bg-white"
          >
            <option value="All">All Difficulties</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div className="space-y-2.5 font-mono text-xs">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="p-3 rounded-xl border border-stone-200 bg-stone-50/70 hover:bg-stone-50 transition flex flex-col sm:flex-row sm:items-center justify-between gap-2"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-orange-700 font-bold text-[11px]">{doc.id}</span>
                <span className="rounded bg-stone-200/80 px-2 py-0.5 text-[10px] text-stone-700 font-bold">
                  {doc.course}
                </span>
                <span className="rounded bg-orange-100 text-orange-800 px-2 py-0.5 text-[10px] font-bold">
                  {doc.difficulty}
                </span>
              </div>
              <div className="font-sans text-xs text-stone-800">{doc.text}</div>
            </div>
            <div className="shrink-0 font-mono text-xs font-bold text-stone-500 bg-white px-2.5 py-1 rounded border border-stone-200">
              Cosine Dist: {doc.distance.toFixed(2)}
            </div>
          </div>
        ))}

        {filteredDocs.length === 0 && (
          <div className="p-6 text-center text-xs text-stone-500 font-sans">
            No document chunks match the specified metadata filter criteria.
          </div>
        )}
      </div>
    </div>
  );
}
