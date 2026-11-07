import React, { useState } from "react";
import {
  Share2,
  Sliders,
  CheckCircle2,
  Search,
  Layers,
  ArrowRight,
  Database,
  Compass
} from "lucide-react";

/**
 * 1. Hybrid Search & Reciprocal Rank Fusion (RRF) Sandbox
 * Interactive Dense + BM25 ranking fusion with tunable k-constant and weights.
 */
export function HybridSearchRrfFusionSandbox() {
  const [kConstant, setKConstant] = useState(60);
  const [denseWeight, setDenseWeight] = useState(1.0);
  const [bm25Weight, setBm25Weight] = useState(1.0);
  const [selectedQueryIndex, setSelectedQueryIndex] = useState(0);

  const sampleScenarios = [
    {
      query: "Java synchronized deadlock context switch CPU spike",
      denseRankings: [
        { id: "doc-104", title: "JVM Monitor Contention & Kernel Futex Wait", score: 0.89 },
        { id: "doc-202", title: "High Context Switching in Linux Kernel Under Thread Contention", score: 0.86 },
        { id: "doc-310", title: "Java Virtual Threads vs Platform Thread Schedulers", score: 0.79 },
        { id: "doc-401", title: "Optimizing PostgreSQL Connection Pool Starvation", score: 0.74 },
        { id: "doc-512", title: "Distributed Consensus in Raft Leader Elections", score: 0.68 }
      ],
      bm25Rankings: [
        { id: "doc-202", title: "High Context Switching in Linux Kernel Under Thread Contention", score: 18.4 },
        { id: "doc-104", title: "JVM Monitor Contention & Kernel Futex Wait", score: 14.1 },
        { id: "doc-603", title: "Java synchronized Keyword Bytecode Specification", score: 12.8 },
        { id: "doc-705", title: "Diagnosing Java Thread Deadlock with jstack CLI", score: 9.3 },
        { id: "doc-310", title: "Java Virtual Threads vs Platform Thread Schedulers", score: 7.2 }
      ]
    },
    {
      query: "CVE-2024-38077 Windows Remote Desktop Licensing RCE vulnerability",
      denseRankings: [
        { id: "doc-801", title: "Remote Code Execution in Enterprise Network Protocols", score: 0.85 },
        { id: "doc-802", title: "Windows Server Memory Safety Mitigations and ASLR", score: 0.81 },
        { id: "doc-903", title: "Technical Analysis of CVE-2024-38077 RDL RCE Exploit", score: 0.78 },
        { id: "doc-104", title: "JVM Monitor Contention & Kernel Futex Wait", score: 0.62 }
      ],
      bm25Rankings: [
        { id: "doc-903", title: "Technical Analysis of CVE-2024-38077 RDL RCE Exploit", score: 26.5 },
        { id: "doc-801", title: "Remote Code Execution in Enterprise Network Protocols", score: 11.2 },
        { id: "doc-802", title: "Windows Server Memory Safety Mitigations and ASLR", score: 8.7 },
        { id: "doc-401", title: "Optimizing PostgreSQL Connection Pool Starvation", score: 3.1 }
      ]
    }
  ];

  const currentScenario = sampleScenarios[selectedQueryIndex];

  // Compute RRF for current scenario
  const allDocIds = Array.from(
    new Set([
      ...currentScenario.denseRankings.map((d) => d.id),
      ...currentScenario.bm25Rankings.map((d) => d.id)
    ])
  );

  const docTitleMap = {};
  [...currentScenario.denseRankings, ...currentScenario.bm25Rankings].forEach((d) => {
    docTitleMap[d.id] = d.title;
  });

  const rrfScores = allDocIds.map((docId) => {
    const denseIdx = currentScenario.denseRankings.findIndex((d) => d.id === docId);
    const denseRank = denseIdx !== -1 ? denseIdx + 1 : null;
    const denseScorePart = denseRank ? denseWeight / (kConstant + denseRank) : 0;

    const bm25Idx = currentScenario.bm25Rankings.findIndex((d) => d.id === docId);
    const bm25Rank = bm25Idx !== -1 ? bm25Idx + 1 : null;
    const bm25ScorePart = bm25Rank ? bm25Weight / (kConstant + bm25Rank) : 0;

    const totalRrf = denseScorePart + bm25ScorePart;

    return {
      docId,
      title: docTitleMap[docId],
      denseRank,
      bm25Rank,
      denseScorePart,
      bm25ScorePart,
      totalRrf
    };
  });

  rrfScores.sort((a, b) => b.totalRrf - a.totalRrf);

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Sliders className="w-5 h-5 text-amber-400" />
            Hybrid Search & Reciprocal Rank Fusion (RRF) Sandbox
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Simulate combining Dense Vector Semantics with Sparse Lexical Inverted Indexes (BM25).
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-400 font-mono">Test Query:</span>
          <select
            value={selectedQueryIndex}
            onChange={(e) => setSelectedQueryIndex(Number(e.target.value))}
            className="bg-stone-800 text-stone-200 text-xs px-2.5 py-1.5 rounded border border-stone-700"
          >
            <option value={0}>Query 1: Java Deadlock & Context Switch</option>
            <option value={1}>Query 2: CVE-2024-38077 Exact Keyword</option>
          </select>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 p-3.5 bg-stone-950/60 rounded-lg border border-stone-800/80">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-stone-300 font-medium">Smoothing Constant k</span>
            <span className="font-mono text-amber-400 font-bold">{kConstant}</span>
          </div>
          <input
            type="range"
            min={10}
            max={120}
            step={5}
            value={kConstant}
            onChange={(e) => setKConstant(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
          <div className="flex justify-between text-[10px] text-stone-500 font-mono mt-0.5">
            <span>k=10 (Favors #1)</span>
            <span>k=60 (Standard)</span>
            <span>k=120 (Smooth)</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-stone-300 font-medium">Dense Weight (w_dense)</span>
            <span className="font-mono text-emerald-400 font-bold">{denseWeight.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min={0.0}
            max={2.0}
            step={0.1}
            value={denseWeight}
            onChange={(e) => setDenseWeight(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="text-[10px] text-stone-500 font-mono mt-0.5">Semantic embeddings weight</div>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-stone-300 font-medium">BM25 Weight (w_bm25)</span>
            <span className="font-mono text-sky-400 font-bold">{bm25Weight.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min={0.0}
            max={2.0}
            step={0.1}
            value={bm25Weight}
            onChange={(e) => setBm25Weight(Number(e.target.value))}
            className="w-full accent-sky-500"
          />
          <div className="text-[10px] text-stone-500 font-mono mt-0.5">Exact keyword index weight</div>
        </div>
      </div>

      {/* Query Banner */}
      <div className="p-2.5 bg-stone-800/60 rounded border border-stone-700/60 text-xs mb-4 flex items-center gap-2">
        <Search className="w-4 h-4 text-amber-400 shrink-0" />
        <span className="text-stone-400 font-mono">Inquiry:</span>
        <span className="text-stone-100 font-semibold italic">"{currentScenario.query}"</span>
      </div>

      {/* 3-Column Rank Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Dense Rankings */}
        <div className="bg-stone-950 p-3 rounded-lg border border-stone-800">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800">
            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
              Dense Vector (Top-k)
            </span>
            <span className="text-[10px] font-mono text-stone-500">Cosine Sim</span>
          </div>
          <div className="space-y-2">
            {currentScenario.denseRankings.map((doc, idx) => (
              <div key={doc.id} className="p-2 bg-stone-900 rounded border border-stone-800/80 text-xs">
                <div className="flex items-center justify-between font-mono mb-1">
                  <span className="text-emerald-400 font-bold">#{idx + 1}</span>
                  <span className="text-[11px] text-stone-400">{doc.score.toFixed(2)}</span>
                </div>
                <div className="text-stone-200 line-clamp-1 text-[11px]">{doc.title}</div>
                <div className="text-[10px] text-stone-500 font-mono mt-0.5">{doc.id}</div>
              </div>
            ))}
          </div>
        </div>

        {/* BM25 Rankings */}
        <div className="bg-stone-950 p-3 rounded-lg border border-stone-800">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800">
            <span className="text-xs font-semibold text-sky-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400 inline-block"></span>
              Sparse BM25 (Top-k)
            </span>
            <span className="text-[10px] font-mono text-stone-500">BM25 Score</span>
          </div>
          <div className="space-y-2">
            {currentScenario.bm25Rankings.map((doc, idx) => (
              <div key={doc.id} className="p-2 bg-stone-900 rounded border border-stone-800/80 text-xs">
                <div className="flex items-center justify-between font-mono mb-1">
                  <span className="text-sky-400 font-bold">#{idx + 1}</span>
                  <span className="text-[11px] text-stone-400">{doc.score.toFixed(1)}</span>
                </div>
                <div className="text-stone-200 line-clamp-1 text-[11px]">{doc.title}</div>
                <div className="text-[10px] text-stone-500 font-mono mt-0.5">{doc.id}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Fused RRF Rankings */}
        <div className="bg-stone-950 p-3 rounded-lg border border-amber-800/50">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800">
            <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>
              Fused RRF Ranking
            </span>
            <span className="text-[10px] font-mono text-stone-400">Score Σ w/(k+r)</span>
          </div>
          <div className="space-y-2">
            {rrfScores.map((item, idx) => (
              <div
                key={item.docId}
                className={`p-2 rounded border text-xs ${
                  idx === 0
                    ? "bg-amber-950/30 border-amber-600/70 shadow-sm"
                    : "bg-stone-900 border-stone-800/80"
                }`}
              >
                <div className="flex items-center justify-between font-mono mb-1">
                  <span className={`font-bold ${idx === 0 ? "text-amber-300" : "text-stone-300"}`}>
                    #{idx + 1} Winner
                  </span>
                  <span className="text-[11px] font-bold text-amber-400">
                    {item.totalRrf.toFixed(4)}
                  </span>
                </div>
                <div className="text-stone-100 font-medium line-clamp-1 text-[11px]">{item.title}</div>
                <div className="flex items-center gap-2 text-[10px] text-stone-400 font-mono mt-1">
                  <span>Dense: {item.denseRank ? `#${item.denseRank}` : "N/A"}</span>
                  <span>•</span>
                  <span>BM25: {item.bm25Rank ? `#${item.bm25Rank}` : "N/A"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-stone-950/40 rounded border border-stone-800/60 text-xs text-stone-400 flex items-start gap-2">
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-stone-200">Key Takeaway:</strong> In Query 2, exact token{" "}
          <code className="text-amber-300 font-mono">CVE-2024-38077</code> was ranked #3 in dense
          vector space due to lack of lexical exact-match emphasis, but scored #1 in BM25. RRF
          seamlessly propelled the exact vulnerability report to the overall #1 spot without needing
          complex score calibration.
        </div>
      </div>
    </div>
  );
}

/**
 * 2. Interactive Knowledge Graph & Cypher Query Visualizer
 * Visual property graph with node selection and live Cypher query execution.
 */
export function KnowledgeGraphVisualizer() {
  const [selectedNode, setSelectedNode] = useState("Java_Lock");
  const [activeCypherPreset, setActiveCypherPreset] = useState("all_relations");

  const nodes = {
    Java_Lock: {
      id: "Java_Lock",
      label: "Concept",
      name: "Java Monitor Lock",
      desc: "JVM intrinsic monitor lock implemented in Object headers.",
      edges: [
        { target: "OS_Futex", rel: "ESCALATES_TO", weight: 0.95 },
        { target: "Virtual_Thread", rel: "PINNED_BY", weight: 0.88 }
      ]
    },
    OS_Futex: {
      id: "OS_Futex",
      label: "KernelMechanism",
      name: "Linux Futex Syscall",
      desc: "Fast userspace mutex transitioning to sys_futex kernel sleep under contention.",
      edges: [
        { target: "Context_Switch", rel: "TRIGGERS", weight: 0.98 }
      ]
    },
    Context_Switch: {
      id: "Context_Switch",
      label: "HardwareSymptom",
      name: "High CPU Context Switch",
      desc: "CPU core forced to save registers and flush TLB caches, degrading throughput.",
      edges: [
        { target: "Latency_Spike", rel: "LEADS_TO", weight: 0.91 }
      ]
    },
    Virtual_Thread: {
      id: "Virtual_Thread",
      label: "Architecture",
      name: "Java Virtual Thread",
      desc: "Lightweight user-mode thread mounted on underlying carrier platform threads.",
      edges: [
        { target: "Carrier_Thread", rel: "MOUNTS_ON", weight: 0.99 }
      ]
    },
    Carrier_Thread: {
      id: "Carrier_Thread",
      label: "Architecture",
      name: "OS Carrier Thread Pool",
      desc: "Fixed pool of ForkJoinPool worker threads executing virtual thread tasks.",
      edges: []
    },
    Latency_Spike: {
      id: "Latency_Spike",
      label: "ProductionImpact",
      name: "p99 Latency SLA Breach",
      desc: "Application p99 response times exceed 2000ms threshold.",
      edges: []
    }
  };

  const cypherPresets = {
    all_relations: {
      query: "MATCH (s:Concept)-[r]->(t) RETURN s.name, type(r), t.name",
      description: "Inspect full property graph topology and edge types."
    },
    path_to_symptom: {
      query: "MATCH p = (j:Concept {id: 'Java_Lock'})-[:ESCALATES_TO|TRIGGERS*1..3]->(s:HardwareSymptom)\nRETURN p, length(p) AS Hops",
      description: "Trace causal path from Java locking to Hardware context switches."
    },
    virtual_thread_risk: {
      query: "MATCH (vt:Architecture {id: 'Virtual_Thread'})<-[:PINNED_BY]-(l:Concept)\nRETURN vt.name, l.name",
      description: "Identify carrier thread pinning risks in modern Java 21+ architectures."
    }
  };

  const currentNode = nodes[selectedNode] || nodes.Java_Lock;

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-emerald-400" />
            Interactive Knowledge Graph & Cypher Visualizer
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Explore property graph nodes, relationships, and declarative Cypher path pattern matching.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-400 font-mono">Cypher Preset:</span>
          <select
            value={activeCypherPreset}
            onChange={(e) => setActiveCypherPreset(e.target.value)}
            className="bg-stone-800 text-stone-200 text-xs px-2.5 py-1.5 rounded border border-stone-700"
          >
            <option value="all_relations">Full Graph Topology</option>
            <option value="path_to_symptom">Causal Path to Hardware Symptom</option>
            <option value="virtual_thread_risk">Virtual Thread Pinning Risk</option>
          </select>
        </div>
      </div>

      {/* Cypher Code Box */}
      <div className="my-4 bg-stone-950 p-3 rounded-lg border border-stone-800 font-mono text-xs">
        <div className="flex items-center justify-between text-stone-500 pb-1 mb-1 border-b border-stone-800/80">
          <span className="text-emerald-400 font-semibold">// Cypher Execution Engine</span>
          <span className="text-[10px] text-stone-400">{cypherPresets[activeCypherPreset].description}</span>
        </div>
        <pre className="text-amber-300 overflow-x-auto whitespace-pre-wrap">
          {cypherPresets[activeCypherPreset].query}
        </pre>
      </div>

      {/* Visual Canvas & Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Graph Node Cloud */}
        <div className="lg:col-span-2 bg-stone-950 p-4 rounded-lg border border-stone-800 min-h-[300px] flex flex-col justify-between">
          <div className="text-[11px] font-mono text-stone-500 mb-2">
            Click any node below to inspect property attributes & 1-hop neighborhood:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-auto">
            {Object.values(nodes).map((node) => {
              const isSelected = selectedNode === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    isSelected
                      ? "bg-emerald-950/60 border-emerald-500 shadow-md shadow-emerald-950/50"
                      : "bg-stone-900 border-stone-800 hover:border-stone-700 hover:bg-stone-850"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-stone-800 text-stone-400 uppercase">
                      {node.label}
                    </span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>}
                  </div>
                  <div className="font-semibold text-xs text-white line-clamp-1">{node.name}</div>
                  <div className="text-[10px] text-stone-500 font-mono mt-1">
                    {node.edges.length} outgoing link{node.edges.length !== 1 ? "s" : ""}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Connected path summary */}
          <div className="mt-4 pt-3 border-t border-stone-800/80 text-xs text-stone-400 flex items-center gap-2">
            <span className="font-mono text-emerald-400 font-bold">1-Hop Path:</span>
            <span>
              ({currentNode.name})
              {currentNode.edges.length > 0 ? (
                currentNode.edges.map((e, idx) => (
                  <span key={idx} className="ml-1 text-amber-300 font-mono">
                    -[:{e.rel}]-&gt; ({nodes[e.target]?.name || e.target})
                  </span>
                ))
              ) : (
                <span className="text-stone-500 italic ml-1">Terminal leaf node (0 outgoing edges)</span>
              )}
            </span>
          </div>
        </div>

        {/* Node Property Inspector */}
        <div className="bg-stone-950 p-4 rounded-lg border border-stone-800">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-800">
            <span className="text-xs font-semibold text-white">Entity Inspector</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 border border-emerald-700/50">
              {currentNode.label}
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <div className="text-[10px] font-mono text-stone-500 uppercase">Canonical Name</div>
              <div className="text-stone-100 font-bold text-sm mt-0.5">{currentNode.name}</div>
            </div>

            <div>
              <div className="text-[10px] font-mono text-stone-500 uppercase">Entity Definition</div>
              <div className="text-stone-300 text-xs mt-0.5 leading-relaxed bg-stone-900 p-2 rounded border border-stone-800">
                {currentNode.desc}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono text-stone-500 uppercase mb-1">
                Outgoing Directed Relationships
              </div>
              {currentNode.edges.length > 0 ? (
                <div className="space-y-1.5">
                  {currentNode.edges.map((e, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded bg-stone-900 border border-stone-800 text-[11px] font-mono"
                    >
                      <div className="text-amber-400 font-semibold">-[:{e.rel}]-&gt;</div>
                      <div className="text-stone-200 mt-0.5">{nodes[e.target]?.name}</div>
                      <div className="text-[9px] text-stone-500 mt-0.5">Confidence: {e.weight}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-[11px] text-stone-500 italic p-2 bg-stone-900 rounded border border-stone-800">
                  No outgoing edges.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. Graph RAG Multi-Hop Reasoner
 * Traces 4-hop chain from Java code lock to Linux kernel futex and CPU throttling.
 */
export function GraphRagMultiHopReasoner() {
  const [activeHop, setActiveHop] = useState(0);

  const hops = [
    {
      step: 0,
      title: "Query Formulation & Seed Entity Discovery",
      entity: "Java_Synchronized",
      type: "LanguageFeature",
      description: "User asks: 'How can excessive Java synchronized blocks lead to OS-level CPU context-switching spikes?'",
      naiveRAG: "Retrieves 5 documents explaining Java synchronized syntax and mutex semantics. None mention Linux kernel futexes or TLB cache flushes.",
      graphRAG: "NER identifies 'Java synchronized' and maps to node (:LanguageFeature {name: 'Java_Synchronized'}). Initiates 4-hop neighborhood traversal."
    },
    {
      step: 1,
      title: "Hop 1: JVM Monitor Intrinsic Lock Acquisition",
      entity: "JVM_Object_Monitor",
      type: "JVMArchitecture",
      description: "Java synchronized blocks compile to monitorenter/monitorexit bytecode, acquiring an object header MarkWord monitor lock.",
      naiveRAG: "Chunk mentions monitorenter bytecode, but stops at the JVM boundary.",
      graphRAG: "Follows edge (:Java_Synchronized)-[:ACQUIRES]->(:JVM_Object_Monitor). Discovers contention policy."
    },
    {
      step: 2,
      title: "Hop 2: Lock Contention Escalation to Linux Futex",
      entity: "Linux_Futex_Syscall",
      type: "KernelSubsystem",
      description: "When thread contention exceeds spin-wait thresholds, HotSpot JVM escalates the monitor lock to a sys_futex kernel syscall.",
      naiveRAG: "Zero text chunks retrieved (the bridge between JVM and Linux Kernel is absent in standard application docs).",
      graphRAG: "Follows edge (:JVM_Object_Monitor)-[:ESCALATES_TO_WHEN_CONTENTED]->(:Linux_Futex_Syscall). The critical bridge is crossed!"
    },
    {
      step: 3,
      title: "Hop 3: OS Kernel Thread Sleep & CPU Yielding",
      entity: "Kernel_Scheduler_Yield",
      type: "OSKernel",
      description: "Linux scheduler puts blocked threads into TASK_UNINTERRUPTIBLE sleep and triggers preemptive context switches on CPU cores.",
      naiveRAG: "Fails to correlate JVM thread state with kernel scheduler yield events.",
      graphRAG: "Follows edge (:Linux_Futex_Syscall)-[:FORCES_SLEEP_OF]->(:Kernel_Scheduler_Yield). Identifies hardware core switching."
    },
    {
      step: 4,
      title: "Hop 4: Grounded Multi-Hop Synthesis Assembly",
      entity: "CPU_Context_Switch_Spike",
      type: "ProductionSymptom",
      description: "CPU core forced to save register state, reload process memory tables, and flush TLB caches, manifesting as elevated system CPU time.",
      naiveRAG: "Hallucinates or gives vague answer: 'Maybe check your CPU utilization.'",
      graphRAG: "Synthesizes exact 4-hop causal explanation with verifiable graph citations: [Path: Java_Synchronized -> JVM_Object_Monitor -> Linux_Futex -> Scheduler_Yield -> Context_Switch_Spike]."
    }
  ];

  const current = hops[activeHop];

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Compass className="w-5 h-5 text-sky-400" />
            Graph RAG Multi-Hop Reasoner: Causal Chain Discovery
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Step through a multi-hop traversal demonstrating why Knowledge Graphs solve the multi-hop inference gap.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveHop(Math.max(0, activeHop - 1))}
            disabled={activeHop === 0}
            className="px-2.5 py-1 text-xs rounded bg-stone-800 border border-stone-700 disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-xs font-mono text-amber-400 font-bold px-1">
            Hop {activeHop} of 4
          </span>
          <button
            onClick={() => setActiveHop(Math.min(4, activeHop + 1))}
            disabled={activeHop === 4}
            className="px-2.5 py-1 text-xs rounded bg-stone-800 border border-stone-700 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      {/* Stepper Dots */}
      <div className="flex items-center justify-between my-4 px-2">
        {hops.map((h, i) => (
          <button
            key={i}
            onClick={() => setActiveHop(i)}
            className={`flex flex-col items-center gap-1.5 transition-all ${
              i === activeHop ? "opacity-100" : "opacity-60 hover:opacity-90"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                i === activeHop
                  ? "bg-amber-500 text-stone-950 ring-2 ring-amber-400"
                  : i < activeHop
                  ? "bg-emerald-600 text-white"
                  : "bg-stone-800 text-stone-400"
              }`}
            >
              {i}
            </div>
            <span className="hidden sm:inline text-[10px] font-mono text-stone-400">
              {i === 0 ? "Query" : `Hop ${i}`}
            </span>
          </button>
        ))}
      </div>

      {/* Hop Detail Card */}
      <div className="p-4 bg-stone-950 rounded-lg border border-stone-800">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-800/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
              {current.type}
            </span>
            <span className="text-sm font-bold text-white">{current.title}</span>
          </div>
          <span className="text-xs font-mono text-amber-400 font-bold">Node: {current.entity}</span>
        </div>

        <p className="text-xs text-stone-300 leading-relaxed mb-4">{current.description}</p>

        {/* Head-to-Head Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div className="p-3 rounded bg-red-950/20 border border-red-900/40 text-xs">
            <div className="font-semibold text-red-400 flex items-center gap-1.5 mb-1.5">
              <span>✕</span> Naive Vector RAG (Isolated Chunks)
            </div>
            <p className="text-stone-400 leading-relaxed text-[11px]">{current.naiveRAG}</p>
          </div>

          <div className="p-3 rounded bg-emerald-950/20 border border-emerald-800/40 text-xs">
            <div className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Graph RAG (Multi-Hop Traversal)
            </div>
            <p className="text-stone-300 leading-relaxed text-[11px]">{current.graphRAG}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. Query Transformation Workbench
 * Demonstrates Rewriting, Multi-Query, Sub-Question Decomposition, and HyDE.
 */
export function QueryTransformationWorkbench() {
  const [activeStrategy, setActiveStrategy] = useState("hyde");

  const strategies = {
    rewrite: {
      name: "Conversational Query Rewriter",
      tagline: "Resolves anaphoric pronouns and conversational ellipses into standalone queries.",
      sampleInput: {
        history: [
          { role: "user", text: "How does Kafka handle consumer group rebalancing?" },
          { role: "assistant", text: "Kafka uses the Group Coordinator and Partition Assignor..." }
        ],
        currentQuery: "What are its main performance trade-offs compared to RabbitMQ?"
      },
      output: "What are the performance trade-offs of Apache Kafka consumer group rebalancing compared to RabbitMQ message brokers?"
    },
    decompose: {
      name: "Sub-Question Decomposition (DAG)",
      tagline: "Splits multi-faceted comparative queries into atomic parallel sub-inquiries.",
      sampleInput: {
        currentQuery: "Compare the latency and write throughput of Apache Cassandra vs AWS DynamoDB under multi-region replication."
      },
      outputList: [
        "Sub-Q 1: What is the write latency and throughput benchmark of Apache Cassandra with multi-datacenter replication?",
        "Sub-Q 2: What are the latency and throughput guarantees of AWS DynamoDB Global Tables under cross-region replication?",
        "Synthesis Task: Combine Sub-Q 1 and Sub-Q 2 results into a structured latency vs throughput comparative matrix."
      ]
    },
    hyde: {
      name: "HyDE (Hypothetical Document Embeddings)",
      tagline: "Generates speculative answer passages to bridge the semantic gap between questions and documents.",
      sampleInput: {
        currentQuery: "Why does JVM garbage collection pause cause socket timeout in microservices?"
      },
      output: "Hypothetical Document Generated for Embedding Vector:\n'During a JVM Stop-The-World (STW) garbage collection cycle (such as long G1 old generation pauses), all application worker threads are suspended at JVM safepoints. Because threads cannot service incoming TCP socket buffers, network connections exceed socket read timeouts (SO_TIMEOUT), leading downstream HTTP clients to drop connections and register 504 gateway timeout errors.'"
    },
    stepback: {
      name: "Step-Back Prompting",
      tagline: "Generates high-level foundational questions to retrieve architectural principles.",
      sampleInput: {
        currentQuery: "Why does my Redis cluster fail with CLUSTERDOWN when node-7 drops in availability zone us-east-1b?"
      },
      output: "Step-Back High-Level Principle Question:\n'What are the quorum, split-brain mitigation, and failover requirements for Redis Cluster master-slave topologies when a majority of master nodes become unreachable?'"
    }
  };

  const curr = strategies[activeStrategy];

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            Query Transformation Workbench
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Pre-retrieval query rewriting, sub-question decomposition, HyDE, and step-back transformations.
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {Object.entries(strategies).map(([k, v]) => (
            <button
              key={k}
              onClick={() => setActiveStrategy(k)}
              className={`px-2.5 py-1 text-xs rounded font-medium transition-all ${
                activeStrategy === k
                  ? "bg-amber-500 text-stone-950 font-semibold"
                  : "bg-stone-800 text-stone-400 hover:text-white"
              }`}
            >
              {v.name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 p-4 bg-stone-950 rounded-lg border border-stone-800">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-800/80">
          <span className="text-sm font-bold text-white">{curr.name}</span>
          <span className="text-[10px] text-amber-400 font-mono">Strategy: {activeStrategy.toUpperCase()}</span>
        </div>
        <p className="text-xs text-stone-400 mb-4">{curr.tagline}</p>

        {/* Input representation */}
        <div className="mb-3 p-3 bg-stone-900 rounded border border-stone-800 text-xs">
          <div className="text-[10px] font-mono text-stone-500 uppercase mb-1">Raw User Input</div>
          {curr.sampleInput.history && (
            <div className="text-stone-400 mb-2 pl-2 border-l border-stone-700 italic text-[11px]">
              Turn 1: "{curr.sampleInput.history[0].text}"
            </div>
          )}
          <div className="text-stone-200 font-semibold">
            "{curr.sampleInput.currentQuery}"
          </div>
        </div>

        {/* Output transformation */}
        <div className="p-3 bg-amber-950/20 border border-amber-800/50 rounded text-xs font-mono">
          <div className="text-[10px] text-amber-400 uppercase font-semibold mb-1 flex items-center gap-1.5">
            <ArrowRight className="w-3.5 h-3.5" />
            Transformed Retrieval Query Payload
          </div>
          {curr.outputList ? (
            <ul className="space-y-1.5 mt-2 text-stone-200 list-disc list-inside">
              {curr.outputList.map((item, idx) => (
                <li key={idx} className="text-stone-200">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-stone-200 whitespace-pre-wrap mt-1 leading-relaxed">
              {curr.output}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * 5. Microsoft GraphRAG Community Detection & Search Mode Explorer
 * Leiden hierarchy explorer comparing Local Search vs Global Search vs DRIFT.
 */
export function CommunityDetectionHierarchyExplorer() {
  const [searchMode, setSearchMode] = useState("global");
  const [activeCommunityLevel, setActiveCommunityLevel] = useState(1);

  const communityHierarchy = {
    level0: [
      { id: "C0-1", name: "JVM Concurrency & Monitors", size: 45, summary: "Focuses on Object monitors, synchronized blocks, carrier threads, and virtual thread pinning." },
      { id: "C0-2", name: "Linux Futex & Kernel Schedulers", size: 38, summary: "Covers sys_futex sleep queues, scheduler preemption, and hardware core context switching." },
      { id: "C0-3", name: "PostgreSQL ACID & MVCC", size: 52, summary: "Analyzes WAL logging, vacuum processes, and row-level locking contention." }
    ],
    level1: [
      { id: "C1-1", name: "Backend Execution & OS Kernel Interaction", size: 83, summary: "Synthesizes how runtime application memory, thread pools, and locks interact with low-level kernel context switching and CPU throttling." },
      { id: "C1-2", name: "Persistence & Distributed Storage Architecture", size: 95, summary: "Synthesizes transactional storage, distributed consensus, and replication latency trade-offs." }
    ],
    level2: [
      { id: "C2-1", name: "Enterprise High-Throughput System Architecture", size: 178, summary: "Holistic macro-community detailing systemic architectural bottlenecks, memory safety, and cross-tier latency degradation." }
    ]
  };

  const currentCommunities =
    activeCommunityLevel === 0
      ? communityHierarchy.level0
      : activeCommunityLevel === 1
      ? communityHierarchy.level1
      : communityHierarchy.level2;

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Share2 className="w-5 h-5 text-emerald-400" />
            Microsoft GraphRAG: Leiden Community Hierarchy & Search Modes
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Hierarchical community summarization enabling Global corpus-wide thematic synthesis.
          </p>
        </div>

        {/* Search Mode Toggles */}
        <div className="flex bg-stone-950 p-1 rounded-lg border border-stone-800">
          {["local", "global", "drift"].map((mode) => (
            <button
              key={mode}
              onClick={() => setSearchMode(mode)}
              className={`px-3 py-1 text-xs rounded font-medium transition-all uppercase ${
                searchMode === mode
                  ? "bg-emerald-600 text-white font-bold"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              {mode} Search
            </button>
          ))}
        </div>
      </div>

      {/* Mode Explanation Banner */}
      <div className="my-4 p-3 bg-stone-950 rounded-lg border border-stone-800 text-xs">
        <div className="flex items-center justify-between pb-1 mb-1 border-b border-stone-800/80">
          <span className="font-semibold text-emerald-400 uppercase font-mono">
            {searchMode} Search Architecture
          </span>
          <span className="text-[10px] text-stone-500 font-mono">GraphRAG Spec</span>
        </div>
        <p className="text-stone-300 leading-relaxed text-xs">
          {searchMode === "local" &&
            "Local Search begins with seed entities identified in the query, traverses adjacent 1-hop and 2-hop edges, and retrieves raw text chunks. Perfect for specific factual questions about named components."}
          {searchMode === "global" &&
            "Global Search sweeps across precomputed Community Summaries across the Leiden hierarchy using a Map-Reduce architecture. It completely bypasses chunk-level search to synthesize answers for holistic, corpus-level questions."}
          {searchMode === "drift" &&
            "DRIFT Search (Dynamic Reasoning and Information Fusion with Traversal) merges Global Search's high-level community overviews with Local Search's granular chunk exploration dynamically based on information gaps."}
        </p>
      </div>

      {/* Level Selector */}
      <div className="flex items-center justify-between mb-3 text-xs">
        <span className="text-stone-400 font-mono">Leiden Hierarchy Clustering Level:</span>
        <div className="flex gap-2">
          {[0, 1, 2].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setActiveCommunityLevel(lvl)}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
                activeCommunityLevel === lvl
                  ? "bg-amber-500 text-stone-950"
                  : "bg-stone-800 text-stone-400 hover:text-white"
              }`}
            >
              Level {lvl} {lvl === 0 ? "(Micro)" : lvl === 1 ? "(Meso)" : "(Macro)"}
            </button>
          ))}
        </div>
      </div>

      {/* Community Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {currentCommunities.map((c) => (
          <div key={c.id} className="p-3.5 bg-stone-950 rounded-lg border border-stone-800 text-xs">
            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-stone-800/80">
              <span className="font-bold text-white text-xs">{c.name}</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50">
                {c.id}
              </span>
            </div>
            <div className="text-[11px] text-stone-400 font-mono mb-2">
              Entity Cluster Size: <span className="text-stone-200 font-bold">{c.size} nodes</span>
            </div>
            <div className="text-[11px] text-stone-300 leading-relaxed bg-stone-900 p-2.5 rounded border border-stone-800">
              <span className="text-amber-400 font-mono text-[10px] block mb-1 uppercase font-bold">
                Precomputed LLM Summary Report:
              </span>
              {c.summary}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
