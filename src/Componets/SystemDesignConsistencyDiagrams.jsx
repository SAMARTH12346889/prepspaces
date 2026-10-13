import React, { useState } from "react";
import {
  Database,
  Layers,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Zap,
  ShieldAlert,
  Activity,
  Cpu,
  Server,
  Network,
  Lock,
  ArrowRight,
  GitBranch,
  Timer,
  Scale,
  RefreshCw,
  Globe,
} from "lucide-react";

/**
 * Diagram 1: Consistency Models Spectrum & Hierarchy
 * Explores: Eventual -> Consistent Prefix -> Session -> Bounded Staleness -> Strong (Linearizable)
 */
export function ConsistencyHierarchyDiagram() {
  const [selectedModel, setSelectedModel] = useState("session");

  const models = {
    eventual: {
      name: "Eventual Consistency",
      latency: "Lowest (<2ms)",
      availability: "Highest (AP)",
      guarantee: "Replicas eventually converge after writes cease. No upper bound on read staleness.",
      prepspacesFit: "Course view counters, public discussion upvote totals.",
      risk: "Readers can observe stale data or out-of-order writes during network partitions.",
    },
    prefix: {
      name: "Consistent Prefix",
      latency: "Low (<5ms)",
      availability: "High",
      guarantee: "Readers never observe out-of-order writes. If writes happen in sequence A, B, C, readers may see [A], [A, B], but never [B] alone.",
      prepspacesFit: "Lesson comment threads, discussion question-and-reply sequences.",
      risk: "Data may be slightly behind real time, but causality and order are preserved.",
    },
    session: {
      name: "Session Consistency (Read-Your-Writes)",
      latency: "Moderate (~10ms)",
      availability: "High per session",
      guarantee: "Within a user's session, reads are guaranteed to observe the user's own previous writes. Monotonic reads & monotonic writes.",
      prepspacesFit: "Student learning progress checkpoints, personal profile updates.",
      risk: "Other students may briefly see a stale version until cross-session propagation completes.",
    },
    bounded: {
      name: "Bounded Staleness",
      latency: "Moderate (~15ms)",
      availability: "High within bound",
      guarantee: "Reads lag behind primary writes by at most K versions or T time window (e.g. at most 5 seconds).",
      prepspacesFit: "Instructor grading dashboard, platform analytics summaries.",
      risk: "Reads pause or throw errors if replication lag temporarily exceeds the configured bound.",
    },
    linearizable: {
      name: "Linearizability (Strong Consistency)",
      latency: "Highest (20–100ms)",
      availability: "Lowest (CP)",
      guarantee: "Every read observes the most recent globally completed write in real-world time. Total global order across all clients.",
      prepspacesFit: "Course enrollment payments, final exam submission grading, seat allocations.",
      risk: "Writes become unavailable if a network partition prevents quorum consensus.",
    },
  };

  const current = models[selectedModel];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 1
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            The Hierarchy of Consistency Models &amp; CAP Spectrum
          </h4>
        </div>
        <div className="flex rounded-lg border border-stone-200 bg-stone-50 p-0.5 text-xs font-semibold overflow-x-auto">
          {Object.keys(models).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedModel(key)}
              className={`px-2.5 py-1 rounded-md transition cursor-pointer whitespace-nowrap ${
                selectedModel === key
                  ? "bg-white text-orange-600 shadow-xs font-bold"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {key === "linearizable" ? "Linearizability" : key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-sm font-bold text-stone-900 flex items-center gap-1.5">
            <Scale size={16} className="text-orange-600" />
            {current.name}
          </span>
          <div className="flex gap-2 text-xs font-mono">
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
              Latency: {current.latency}
            </span>
            <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800">
              Availability: {current.availability}
            </span>
          </div>
        </div>

        <p className="text-xs text-stone-700 leading-relaxed mb-4">
          <strong>Formal Guarantee:</strong> {current.guarantee}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-lg border border-emerald-200 bg-white">
            <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase block mb-1">
              PrepSpaces Production Use Case
            </span>
            <p className="text-stone-700">{current.prepspacesFit}</p>
          </div>
          <div className="p-3 rounded-lg border border-amber-200 bg-white">
            <span className="text-[10px] font-mono font-bold text-amber-700 uppercase block mb-1">
              Architectural Trade-off &amp; Risk
            </span>
            <p className="text-stone-700">{current.risk}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Diagram 2: Quorum Read & Write Overlap Simulator (N, R, W)
 * Demonstrates the pigeonhole intersection: min_intersection = max(0, R + W - N)
 */
export function QuorumIntersectionDiagram() {
  const [rfN, setRfN] = useState(3);
  const [writeW, setWriteW] = useState(2);
  const [readR, setReadR] = useState(2);

  const minIntersection = Math.max(0, readR + writeW - rfN);
  const isStrictQuorum = readR + writeW > rfN;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 2
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Quorum Overlap Mathematics: \(R + W &gt; N\) Intersection
          </h4>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="font-mono text-stone-500">
            Formula: \(\max(0, R + W - N)\)
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs">
          <div className="flex justify-between font-bold mb-1">
            <span>Replication Factor (N)</span>
            <span className="text-orange-600 font-mono">{rfN} Replicas</span>
          </div>
          <div className="flex gap-2">
            {[3, 5].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => {
                  setRfN(val);
                  setWriteW(Math.ceil(val / 2));
                  setReadR(Math.ceil(val / 2));
                }}
                className={`flex-1 py-1 rounded border text-xs font-bold cursor-pointer transition ${
                  rfN === val ? "bg-orange-600 text-white border-orange-600" : "bg-white text-stone-700 border-stone-200"
                }`}
              >
                N = {val}
              </button>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs">
          <div className="flex justify-between font-bold mb-1">
            <span>Write Quorum (W)</span>
            <span className="text-orange-600 font-mono">{writeW} Nodes</span>
          </div>
          <input
            type="range"
            min="1"
            max={rfN}
            value={writeW}
            onChange={(e) => setWriteW(Number(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>

        <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs">
          <div className="flex justify-between font-bold mb-1">
            <span>Read Quorum (R)</span>
            <span className="text-orange-600 font-mono">{readR} Nodes</span>
          </div>
          <input
            type="range"
            min="1"
            max={rfN}
            value={readR}
            onChange={(e) => setReadR(Number(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>
      </div>

      {/* Visual Cluster Nodes */}
      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs font-mono">
        <div className="flex justify-between items-center mb-3 text-stone-700">
          <span>Replica Cluster Topology (\(N = {rfN}\))</span>
          <span
            className={`font-bold px-2 py-0.5 rounded ${
              isStrictQuorum ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
            }`}
          >
            {isStrictQuorum ? "Guaranteed Overlap (Fresh Read)" : "Weak Quorum (Stale Read Risk)"}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
          {Array.from({ length: rfN }).map((_, idx) => {
            const inWriteSet = idx < writeW;
            const inReadSet = idx >= rfN - readR;
            const isOverlap = inWriteSet && inReadSet;

            let badgeColor = "border-stone-200 bg-white text-stone-600";
            let roleLabel = "Not in Quorum";

            if (isOverlap) {
              badgeColor = "border-emerald-400 bg-emerald-50 text-emerald-900 font-bold ring-2 ring-emerald-500/20";
              roleLabel = "READ + WRITE OVERLAP";
            } else if (inWriteSet) {
              badgeColor = "border-orange-300 bg-orange-50 text-orange-900";
              roleLabel = "Write Quorum Only";
            } else if (inReadSet) {
              badgeColor = "border-blue-300 bg-blue-50 text-blue-900";
              roleLabel = "Read Quorum Only";
            }

            return (
              <div key={idx} className={`p-3 rounded-lg border transition text-center ${badgeColor}`}>
                <div className="font-bold text-xs">Node {String.fromCharCode(65 + idx)}</div>
                <div className="text-[10px] mt-1">{roleLabel}</div>
                <div className="mt-2 text-[10px] text-stone-400">
                  {isOverlap ? "Returns latest v8" : inWriteSet ? "Holds v8" : "Holds stale v7"}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 pt-3 border-t border-stone-200 flex flex-wrap justify-between items-center text-xs font-sans text-stone-600">
          <div>
            <strong>Calculation:</strong> \(R ({readR}) + W ({writeW}) = {readR + writeW}\) {isStrictQuorum ? ">" : "<="} \(N ({rfN})\)
          </div>
          <div>
            Guaranteed Overlapping Replicas:{" "}
            <strong className={isStrictQuorum ? "text-emerald-700" : "text-red-600"}>
              {minIntersection} Node(s)
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Diagram 3: Leaderless Quorum Write & Asynchronous Read Repair Flow
 * Visualizes: Coordinator sends write to A & B (C misses) -> Read from B & C -> Discovers v8 > v7 -> Repairs C in background
 */
export function ReadRepairLifecycleDiagram() {
  const [step, setStep] = useState(1);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 3
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Leaderless Quorum Write &amp; Read Repair Lifecycle
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setStep(step === 3 ? 1 : step + 1)}
            className="px-3 py-1 bg-orange-600 text-white rounded-lg text-xs font-bold hover:bg-orange-700 transition cursor-pointer flex items-center gap-1.5"
          >
            <span>Next Step ({step}/3)</span>
            <ArrowRight size={13} />
          </button>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="p-1 border border-stone-200 rounded-lg text-stone-500 hover:text-stone-900 cursor-pointer"
            title="Reset"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs font-mono">
        {step === 1 && (
          <div className="space-y-3 font-sans">
            <div className="p-3 rounded-lg border border-orange-200 bg-white">
              <span className="font-bold text-orange-600 text-xs block mb-1">
                Step 1: Quorum Write (\(W=2, N=3\))
              </span>
              <p className="text-xs text-stone-600">
                Client writes <code>title = &apos;Advanced System Design&apos; (v8)</code>. Coordinator sends writes to all 3 nodes. Node A and Node B acknowledge write. Node C encounters network packet drop and remains at stale <code>v7</code>.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2 rounded bg-emerald-50 border border-emerald-300">Node A: v8 (ACK)</div>
              <div className="p-2 rounded bg-emerald-50 border border-emerald-300">Node B: v8 (ACK)</div>
              <div className="p-2 rounded bg-red-50 border border-red-300 text-red-700">Node C: v7 (STALE)</div>
            </div>
            <div className="text-[11px] text-emerald-800 font-bold">
              Write confirmed! W=2 satisfied.
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3 font-sans">
            <div className="p-3 rounded-lg border border-blue-200 bg-white">
              <span className="font-bold text-blue-600 text-xs block mb-1">
                Step 2: Quorum Read (\(R=2, N=3\)) Discovers Inconsistency
              </span>
              <p className="text-xs text-stone-600">
                A reader queries Node B and Node C. Node B responds with <code>v8</code>; Node C responds with <code>v7</code>. The Coordinator compares version vectors, identifies <code>v8</code> as authoritative, and returns <code>v8</code> to client.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2 rounded bg-stone-100 border border-stone-200 opacity-40">Node A: Idle</div>
              <div className="p-2 rounded bg-blue-50 border border-blue-300">Node B: Returns v8</div>
              <div className="p-2 rounded bg-amber-50 border border-amber-300 text-amber-800">Node C: Returns v7</div>
            </div>
            <div className="text-[11px] text-blue-800 font-bold">
              Coordinator returns v8 to user (Zero stale read observed).
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3 font-sans">
            <div className="p-3 rounded-lg border border-emerald-200 bg-white">
              <span className="font-bold text-emerald-600 text-xs block mb-1">
                Step 3: Asynchronous Read Repair Dispatched to Node C
              </span>
              <p className="text-xs text-stone-600">
                The coordinator asynchronously dispatches a background write to Node C containing <code>v8</code>. Node C applies the mutation, bringing the entire cluster back to 100% convergence.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2 rounded bg-emerald-50 border border-emerald-300">Node A: v8</div>
              <div className="p-2 rounded bg-emerald-50 border border-emerald-300">Node B: v8</div>
              <div className="p-2 rounded bg-emerald-100 border border-emerald-400 font-bold text-emerald-900">
                Node C: Repaired &rarr; v8!
              </div>
            </div>
            <div className="text-[11px] text-emerald-800 font-bold">
              Read Repair complete. All 3 replicas synchronized!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Diagram 4: Concurrent Writes: Last-Write-Wins (LWW) vs. Compare-and-Set (CAS)
 * Demonstrates how LWW silently drops instructor updates, while CAS preserves business invariants
 */
export function ConcurrentWritesCasDiagram() {
  const [policy, setPolicy] = useState("cas"); // "lww" | "cas"

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 4
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Concurrent Writes: Last-Write-Wins (LWW) vs. Compare-and-Set (CAS)
          </h4>
        </div>
        <div className="flex rounded-lg border border-stone-200 bg-stone-50 p-0.5 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setPolicy("lww")}
            className={`px-3 py-1 rounded-md transition cursor-pointer ${
              policy === "lww"
                ? "bg-white text-orange-600 shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Last-Write-Wins (Timestamp Overwrite)
          </button>
          <button
            type="button"
            onClick={() => setPolicy("cas")}
            className={`px-3 py-1 rounded-md transition cursor-pointer ${
              policy === "cas"
                ? "bg-white text-orange-600 shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Compare-and-Set / Optimistic Locking
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs font-mono">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 font-sans">
          <div className="p-3 rounded-lg border border-stone-200 bg-white">
            <span className="font-bold text-stone-900 block mb-1">Instructor Alice</span>
            <p className="text-xs text-stone-600 mb-2">Reads grade <code>85 (v1)</code>. Updates grade to <code>92</code>.</p>
            <div className="text-[11px] text-stone-500 font-mono">
              Timestamp: 12:00:00.100 · Version expected: 1
            </div>
          </div>

          <div className="p-3 rounded-lg border border-stone-200 bg-white">
            <span className="font-bold text-stone-900 block mb-1">Instructor Bob</span>
            <p className="text-xs text-stone-600 mb-2">Reads grade <code>85 (v1)</code>. Updates grade to <code>88</code>.</p>
            <div className="text-[11px] text-stone-500 font-mono">
              Timestamp: 12:00:00.105 (Clock skew: +5ms) · Version expected: 1
            </div>
          </div>
        </div>

        {policy === "lww" ? (
          <div className="p-3 rounded-xl border border-red-200 bg-red-50/70 text-xs text-red-900 font-sans">
            <div className="font-bold mb-1 flex items-center gap-1.5">
              <AlertTriangle size={14} className="text-red-600" />
              <span>Silent Overwrite Hazard (Cassandra Default LWW):</span>
            </div>
            <p>
              Even though Alice submitted her grade first, Bob&apos;s machine had a clock skewed 5ms forward. The database compares timestamps: <code>105ms &gt; 100ms</code> and accepts Bob&apos;s <code>88</code>, silently obliterating Alice&apos;s update without an error. Alice is never notified that her input was deleted.
            </p>
          </div>
        ) : (
          <div className="p-3 rounded-xl border border-emerald-300 bg-emerald-50/70 text-xs text-emerald-900 font-sans">
            <div className="font-bold mb-1 flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-600" />
              <span>Optimistic Concurrency Control (CAS):</span>
            </div>
            <p>
              Alice commits first: <code>UPDATE grades SET val=92, v=2 WHERE id=10 AND v=1;</code> &rarr; Succeeded (1 row).<br />
              When Bob submits: <code>WHERE v=1</code> matches 0 rows! The database rejects Bob&apos;s write with <code>ConflictException</code>, prompting Bob: <em>&quot;Grade was modified by Alice to 92. Please review before overwriting.&quot;</em>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Main Visual Dispatcher for Module 10
 */
export function VisualDiagramComponentModule10({ diagramType }) {
  switch (diagramType) {
    case "consistency-hierarchy":
      return <ConsistencyHierarchyDiagram />;
    case "quorum-intersection":
      return <QuorumIntersectionDiagram />;
    case "read-repair":
      return <ReadRepairLifecycleDiagram />;
    case "concurrent-writes":
      return <ConcurrentWritesCasDiagram />;
    default:
      return <ConsistencyHierarchyDiagram />;
  }
}
