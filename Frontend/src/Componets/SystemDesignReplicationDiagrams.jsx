import React, { useState } from "react";
import {
  Database,
  Server,
  Network,
  Split,
  Layers,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Cpu,
  ShieldAlert,
  GitBranch,
  Activity,
  Zap,
  Globe,
  Lock,
} from "lucide-react";

/**
 * Diagram 1: Replication Topology, Quorum & Failover
 * Shows Primary with Synchronous Standby, Asynchronous Read Replicas, and Failover Fencing
 */
export function ReplicationTopologyDiagram() {
  const [replicationMode, setReplicationMode] = useState("async"); // "async" | "sync"
  const [primaryStatus, setPrimaryStatus] = useState("healthy"); // "healthy" | "failed"
  const [failoverStep, setFailoverStep] = useState(0);

  const triggerFailover = () => {
    setPrimaryStatus("failed");
    setFailoverStep(1);
    setTimeout(() => setFailoverStep(2), 700);
    setTimeout(() => setFailoverStep(3), 1400);
  };

  const resetTopology = () => {
    setPrimaryStatus("healthy");
    setFailoverStep(0);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 1
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Primary-Replica Replication &amp; Safe Failover Fencing
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-stone-200 bg-stone-50 p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => {
                setReplicationMode("async");
                resetTopology();
              }}
              className={`px-2.5 py-1 rounded-md transition cursor-pointer ${
                replicationMode === "async"
                  ? "bg-white text-orange-600 shadow-xs font-bold"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Asynchronous (Streaming)
            </button>
            <button
              type="button"
              onClick={() => {
                setReplicationMode("sync");
                resetTopology();
              }}
              className={`px-2.5 py-1 rounded-md transition cursor-pointer ${
                replicationMode === "sync"
                  ? "bg-white text-orange-600 shadow-xs font-bold"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Synchronous (Quorum Commit)
            </button>
          </div>
          {primaryStatus === "healthy" ? (
            <button
              type="button"
              onClick={triggerFailover}
              className="px-3 py-1 bg-red-50 text-red-700 border border-red-200 rounded-lg text-xs font-bold hover:bg-red-100 transition cursor-pointer flex items-center gap-1.5"
            >
              <ShieldAlert size={13} />
              Simulate Primary Crash
            </button>
          ) : (
            <button
              type="button"
              onClick={resetTopology}
              className="px-3 py-1 bg-stone-100 text-stone-700 border border-stone-300 rounded-lg text-xs font-bold hover:bg-stone-200 transition cursor-pointer flex items-center gap-1.5"
            >
              <RefreshCw size={13} />
              Restore Cluster
            </button>
          )}
        </div>
      </div>

      {/* Cluster Map */}
      <div className="relative rounded-xl border border-stone-200 bg-[#faf8f4] p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Node 1: Primary Database */}
          <div
            className={`rounded-xl border p-4 transition-all duration-300 ${
              primaryStatus === "healthy"
                ? "border-emerald-300 bg-white shadow-xs"
                : "border-red-300 bg-red-50/50 opacity-60"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold uppercase text-stone-500">
                Host: db-primary-01
              </span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  primaryStatus === "healthy"
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-red-100 text-red-800 line-through"
                }`}
              >
                {primaryStatus === "healthy" ? "AUTHORITATIVE WRITER" : "OFFLINE / FENCED"}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`p-2.5 rounded-lg ${
                  primaryStatus === "healthy" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                }`}
              >
                <Database size={24} />
              </div>
              <div>
                <h5 className="text-xs font-bold text-stone-900">
                  PostgreSQL 16 Primary
                </h5>
                <p className="text-[11px] text-stone-500">
                  {primaryStatus === "healthy"
                    ? "Accepts INSERT, UPDATE, DELETE & Transactions"
                    : "Network unreachable. Node fenced by STONITH."}
                </p>
              </div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-stone-200/60 flex justify-between text-[11px] font-mono">
              <span className="text-stone-500">WAL Location:</span>
              <span className="font-bold text-stone-700">0/1A4D890</span>
            </div>
          </div>

          {/* Replication Link */}
          <div className="flex flex-col items-center justify-center text-center px-2 py-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-orange-600 mb-1">
              <Zap size={14} className="animate-pulse" />
              <span>
                {replicationMode === "sync" ? "WAL Streaming (Sync Commit)" : "Asynchronous WAL Stream"}
              </span>
            </div>
            <p className="text-[10px] text-stone-500 max-w-[200px] leading-tight">
              {replicationMode === "sync"
                ? "Commit waits for standby durable disk flush before ACK"
                : "Primary commits immediately. Standby replays with 5–40ms lag."}
            </p>
            <div className="w-full flex items-center my-2">
              <div className="flex-1 h-0.5 bg-orange-300 border-dashed border-t border-orange-400" />
              <ArrowRight size={16} className="text-orange-600 -ml-1" />
            </div>
            {primaryStatus === "failed" && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full animate-bounce">
                <AlertTriangle size={11} /> Heartbeat Lost!
              </span>
            )}
          </div>

          {/* Node 2: Standby / Candidate */}
          <div
            className={`rounded-xl border p-4 transition-all duration-300 ${
              failoverStep >= 2
                ? "border-emerald-400 bg-emerald-50/50 shadow-md ring-2 ring-emerald-500/20"
                : "border-blue-300 bg-white shadow-xs"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold uppercase text-stone-500">
                Host: db-standby-01
              </span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  failoverStep >= 2
                    ? "bg-emerald-600 text-white animate-pulse"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {failoverStep >= 2 ? "PROMOTED NEW PRIMARY" : "SYNCHRONOUS STANDBY"}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`p-2.5 rounded-lg ${
                  failoverStep >= 2 ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"
                }`}
              >
                <Server size={24} />
              </div>
              <div>
                <h5 className="text-xs font-bold text-stone-900">
                  {failoverStep >= 2 ? "Active Write Leader" : "Hot Standby Candidate"}
                </h5>
                <p className="text-[11px] text-stone-500">
                  {failoverStep >= 2
                    ? "Now receiving write traffic via Virtual IP / Route 53"
                    : "Zero replay lag under sync replication; ready for instant promotion"}
                </p>
              </div>
            </div>
            <div className="mt-3 pt-2.5 border-t border-stone-200/60 flex justify-between text-[11px] font-mono">
              <span className="text-stone-500">Replay Position:</span>
              <span className="font-bold text-stone-700">0/1A4D890 (0 lag)</span>
            </div>
          </div>
        </div>

        {/* Read Replicas Tier */}
        <div className="mt-4 pt-4 border-t border-stone-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase text-stone-700 tracking-wide">
              Read-Only Horizontal Scaling Pool (Asynchronous)
            </span>
            <span className="text-[10px] font-mono text-stone-500">
              Query Load Balancer: Round-Robin with Replica-Lag Health Checks
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-lg border border-stone-200 bg-white p-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Database size={16} className="text-stone-500" />
                <div>
                  <span className="font-bold text-stone-800 block">db-read-replica-01 (AZ-1b)</span>
                  <span className="text-[10px] text-stone-500">Serving course listings &amp; catalog reads</span>
                </div>
              </div>
              <div className="text-right font-mono text-[10px]">
                <span className="text-emerald-600 font-bold block">Lag: 12 ms</span>
                <span className="text-stone-400">1,850 QPS</span>
              </div>
            </div>

            <div className="rounded-lg border border-stone-200 bg-white p-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Database size={16} className="text-stone-500" />
                <div>
                  <span className="font-bold text-stone-800 block">db-read-replica-02 (AZ-1c)</span>
                  <span className="text-[10px] text-stone-500">Serving student analytics &amp; lesson history</span>
                </div>
              </div>
              <div className="text-right font-mono text-[10px]">
                <span className="text-emerald-600 font-bold block">Lag: 18 ms</span>
                <span className="text-stone-400">1,920 QPS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explanatory callout */}
      <div className="mt-3 flex items-start gap-2 rounded-xl bg-orange-50/70 border border-orange-200/60 p-3 text-xs text-orange-900">
        <Activity size={14} className="text-orange-600 mt-0.5 shrink-0" />
        <p className="leading-relaxed">
          <strong>Production Engineering Rule:</strong> When failover occurs, the orchestrator (e.g. Patroni or AWS RDS Multi-AZ) enforces <em>Split-Brain Prevention</em> by isolating the dead primary via STONITH (Shoot The Other Node In The Head) before issuing <code>pg_promote()</code>. This guarantees only one authoritative write leader exists at any instant.
        </p>
      </div>
    </div>
  );
}

/**
 * Diagram 2: Partitioning vs. Sharding vs. Replication Matrix
 * Visually distinguishes logical table partitioning vs. horizontal node sharding vs. node replication
 */
export function PartitioningShardingReplicationDiagram() {
  const [selectedConcept, setSelectedConcept] = useState("all"); // "partitioning" | "sharding" | "replication" | "all"

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 2
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Conceptual Matrix: Partitioning vs. Sharding vs. Replication
          </h4>
        </div>
        <div className="flex rounded-lg border border-stone-200 bg-stone-50 p-0.5 text-xs font-semibold">
          {[
            { id: "all", label: "Combined Production Architecture" },
            { id: "partitioning", label: "Partitioning Only" },
            { id: "sharding", label: "Sharding Only" },
            { id: "replication", label: "Replication Only" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedConcept(tab.id)}
              className={`px-2.5 py-1 rounded-md transition cursor-pointer ${
                selectedConcept === tab.id
                  ? "bg-white text-orange-600 shadow-xs font-bold"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Column 1: Partitioning */}
        <div
          className={`rounded-xl border p-4 transition ${
            selectedConcept === "partitioning" || selectedConcept === "all"
              ? "border-amber-300 bg-amber-50/30"
              : "border-stone-200 bg-stone-50/50 opacity-40"
          }`}
        >
          <div className="flex items-center gap-2 text-amber-700 font-bold text-xs mb-2">
            <Split size={16} />
            <span>Table Partitioning (1 Engine)</span>
          </div>
          <p className="text-[11px] text-stone-600 mb-3">
            Splits <strong>one logical table</strong> on a single PostgreSQL server into physical sub-tables (by Range, List, or Hash) for pruning and retention.
          </p>

          <div className="space-y-1.5 font-mono text-[10px]">
            <div className="p-2 rounded border border-amber-200 bg-white text-stone-800 flex justify-between">
              <span>activity_2026_10 (Oct)</span>
              <span className="text-amber-700 font-bold">4.2M rows</span>
            </div>
            <div className="p-2 rounded border border-amber-200 bg-white text-stone-800 flex justify-between">
              <span>activity_2026_11 (Nov)</span>
              <span className="text-amber-700 font-bold">5.1M rows</span>
            </div>
            <div className="p-2 rounded border border-amber-200 bg-white text-stone-800 flex justify-between">
              <span>activity_2026_12 (Dec)</span>
              <span className="text-amber-700 font-bold">6.8M rows</span>
            </div>
          </div>
          <span className="block mt-2 text-[10px] text-stone-500 italic">
            *Runs on 1 CPU/storage node. No network RPCs.
          </span>
        </div>

        {/* Column 2: Sharding */}
        <div
          className={`rounded-xl border p-4 transition ${
            selectedConcept === "sharding" || selectedConcept === "all"
              ? "border-orange-300 bg-orange-50/30"
              : "border-stone-200 bg-stone-50/50 opacity-40"
          }`}
        >
          <div className="flex items-center gap-2 text-orange-700 font-bold text-xs mb-2">
            <Network size={16} />
            <span>Horizontal Sharding (N Servers)</span>
          </div>
          <p className="text-[11px] text-stone-600 mb-3">
            Distributes dataset subsets across <strong>independent database nodes</strong> via Shard Key: <code>shard = hash(user_id) % N</code>.
          </p>

          <div className="space-y-1.5 font-mono text-[10px]">
            <div className="p-2 rounded border border-orange-200 bg-white text-stone-800 flex justify-between">
              <span>Shard 1 (Users 0–2.5M)</span>
              <span className="text-orange-700 font-bold">Host: db-sh1</span>
            </div>
            <div className="p-2 rounded border border-orange-200 bg-white text-stone-800 flex justify-between">
              <span>Shard 2 (Users 2.5–5.0M)</span>
              <span className="text-orange-700 font-bold">Host: db-sh2</span>
            </div>
            <div className="p-2 rounded border border-orange-200 bg-white text-stone-800 flex justify-between">
              <span>Shard 3 (Users 5.0–7.5M)</span>
              <span className="text-orange-700 font-bold">Host: db-sh3</span>
            </div>
          </div>
          <span className="block mt-2 text-[10px] text-stone-500 italic">
            *Multiplies CPU &amp; RAM capacity. Cross-shard joins require scatter-gather.
          </span>
        </div>

        {/* Column 3: Replication */}
        <div
          className={`rounded-xl border p-4 transition ${
            selectedConcept === "replication" || selectedConcept === "all"
              ? "border-emerald-300 bg-emerald-50/30"
              : "border-stone-200 bg-stone-50/50 opacity-40"
          }`}
        >
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs mb-2">
            <Layers size={16} />
            <span>Node Replication (High Availability)</span>
          </div>
          <p className="text-[11px] text-stone-600 mb-3">
            Maintains <strong>exact identical copies</strong> of data across multiple servers for failover, disaster recovery, and read throughput.
          </p>

          <div className="space-y-1.5 font-mono text-[10px]">
            <div className="p-2 rounded border border-emerald-200 bg-white text-stone-800 flex justify-between">
              <span>Primary Writer (AZ-1a)</span>
              <span className="text-emerald-700 font-bold">Read / Write</span>
            </div>
            <div className="p-2 rounded border border-emerald-200 bg-white text-stone-800 flex justify-between">
              <span>Sync Standby (AZ-1b)</span>
              <span className="text-emerald-700 font-bold">Durable Commit</span>
            </div>
            <div className="p-2 rounded border border-emerald-200 bg-white text-stone-800 flex justify-between">
              <span>Async Replica (AZ-1c)</span>
              <span className="text-emerald-700 font-bold">Read-Only Pool</span>
            </div>
          </div>
          <span className="block mt-2 text-[10px] text-stone-500 italic">
            *Increases availability &amp; read scale. Does not increase write scaling limits.
          </span>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs text-stone-700 flex items-center justify-between">
        <span className="font-semibold">
          Can you combine all three?
        </span>
        <span className="text-stone-600 text-[11px]">
          <strong>Yes.</strong> Shard users across 8 database clusters &rarr; partition each cluster&apos;s activity table by month &rarr; replicate each shard across 3 Availability Zones.
        </span>
      </div>
    </div>
  );
}

/**
 * Diagram 3: Distributed Scatter-Gather & Slow-Shard Tail Latency
 * Simulates parallel shard queries and demonstrates how 1 lagging shard delays the entire aggregation
 */
export function ScatterGatherQueryDiagram() {
  const [slowShardActive, setSlowShardActive] = useState(false);
  const [isQuerying, setIsQuerying] = useState(false);
  const [queryProgress, setQueryProgress] = useState(0);

  const runSimulation = () => {
    setIsQuerying(true);
    setQueryProgress(20);
    setTimeout(() => setQueryProgress(50), 300);
    setTimeout(
      () => {
        setQueryProgress(100);
        setIsQuerying(false);
      },
      slowShardActive ? 1500 : 500
    );
  };

  const shardTimes = slowShardActive
    ? [22, 28, 195, 24] // Shard 3 is degraded
    : [22, 28, 25, 24]; // Uniform healthy performance

  const coordinatorOverhead = 8;
  const networkOverhead = 7;
  const mergeDuration = 10;
  const maxShardTime = Math.max(...shardTimes);
  const totalDuration = coordinatorOverhead + networkOverhead + maxShardTime + mergeDuration;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 3
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Distributed Scatter-Gather &amp; Tail Latency Physics
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-1.5 text-xs text-stone-700 font-semibold cursor-pointer">
            <input
              type="checkbox"
              checked={slowShardActive}
              onChange={(e) => setSlowShardActive(e.target.checked)}
              className="accent-orange-600 rounded"
            />
            <span>Inject 195ms Slow-Shard Outlier</span>
          </label>
          <button
            type="button"
            disabled={isQuerying}
            onClick={runSimulation}
            className="px-3 py-1 bg-orange-600 text-white rounded-lg text-xs font-bold hover:bg-orange-700 transition cursor-pointer disabled:opacity-50"
          >
            {isQuerying ? "Executing Fan-Out..." : "Run Aggregation Query"}
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs font-mono">
        <div className="flex items-center justify-between mb-3 text-stone-600 border-b border-stone-200/80 pb-2">
          <span>SQL: <code>SELECT COUNT(*) FROM submissions GROUP BY user_id;</code></span>
          <span className="font-bold text-stone-900">
            Total Query Latency:{" "}
            <span className={slowShardActive ? "text-red-600" : "text-emerald-600"}>
              {totalDuration} ms
            </span>
          </span>
        </div>

        {/* Coordinator Node */}
        <div className="p-3 rounded-lg border border-orange-200 bg-white mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-stone-900 flex items-center gap-1.5">
              <Cpu size={14} className="text-orange-600" />
              Distributed Query Coordinator
            </span>
            <span className="text-stone-500 text-[10px]">
              Planning: {coordinatorOverhead}ms · Merge: {mergeDuration}ms
            </span>
          </div>
          <p className="text-[11px] text-stone-500 font-sans">
            Parses SQL, fans out asynchronous parallel gRPC sub-queries to all 4 shards, waits for all partial responses, and computes aggregate sum.
          </p>
        </div>

        {/* Parallel Fan-Out Shards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          {shardTimes.map((duration, idx) => {
            const isSlow = slowShardActive && idx === 2;
            return (
              <div
                key={idx}
                className={`p-3 rounded-lg border transition-all ${
                  isSlow
                    ? "border-red-300 bg-red-50/70 ring-1 ring-red-400"
                    : "border-stone-200 bg-white"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-stone-800">Shard {idx + 1}</span>
                  <span
                    className={`font-bold ${
                      isSlow ? "text-red-600" : "text-emerald-600"
                    }`}
                  >
                    {duration} ms
                  </span>
                </div>
                <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden my-1.5">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isSlow ? "bg-red-500" : "bg-emerald-500"
                    }`}
                    style={{ width: `${Math.min(100, (duration / 200) * 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-stone-500 font-sans">
                  <span>Count: {(120000 + idx * 15000).toLocaleString()}</span>
                  <span>{isSlow ? "IO Wait / GC" : "Indexed Scan"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Formula calculation breakdown */}
        <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between text-[11px] font-sans text-stone-600">
          <div>
            <strong>Fan-out formula:</strong> T ≈ T_coord + T_net + max(T_shard) + T_merge
          </div>
          <div>
            8ms + 7ms + <strong>{maxShardTime}ms</strong> + 10ms ={" "}
            <strong className={slowShardActive ? "text-red-600" : "text-emerald-700"}>
              {totalDuration}ms
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Diagram 4: Two-Phase Commit (2PC) vs. Saga Workflow
 * Compares atomic 2PC with Saga compensating action workflow
 */
export function DistributedTransactionsDiagram() {
  const [transactionPattern, setTransactionPattern] = useState("2pc"); // "2pc" | "saga"
  const [sagaFailure, setSagaFailure] = useState(false);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 4
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Distributed Transactions: Two-Phase Commit (2PC) vs. Saga Orchestrator
          </h4>
        </div>
        <div className="flex rounded-lg border border-stone-200 bg-stone-50 p-0.5 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setTransactionPattern("2pc")}
            className={`px-3 py-1 rounded-md transition cursor-pointer ${
              transactionPattern === "2pc"
                ? "bg-white text-orange-600 shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Two-Phase Commit (2PC)
          </button>
          <button
            type="button"
            onClick={() => setTransactionPattern("saga")}
            className={`px-3 py-1 rounded-md transition cursor-pointer ${
              transactionPattern === "saga"
                ? "bg-white text-orange-600 shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Saga Pattern (Compensating Actions)
          </button>
        </div>
      </div>

      {transactionPattern === "2pc" ? (
        <div className="space-y-4">
          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs">
            <h5 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5">
              <Lock size={14} className="text-orange-600" />
              Two-Phase Commit Protocol Lifecycle (Atomic &amp; Synchronous)
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 rounded-lg border border-stone-200 bg-white">
                <span className="text-[10px] font-mono font-bold uppercase text-amber-700 block mb-1">
                  Phase 1: Prepare (Voting)
                </span>
                <p className="text-[11px] text-stone-600 mb-2">
                  Coordinator queries all shards: <em>&quot;Can you commit this transaction?&quot;</em>
                </p>
                <ul className="space-y-1 text-[11px] text-stone-700">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-600" />
                    <span>Shard 1 locks user row &amp; replies: <code>VOTE_COMMIT</code></span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-600" />
                    <span>Shard 2 reserves seat &amp; replies: <code>VOTE_COMMIT</code></span>
                  </li>
                </ul>
              </div>

              <div className="p-3 rounded-lg border border-stone-200 bg-white">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 block mb-1">
                  Phase 2: Commit (Durability)
                </span>
                <p className="text-[11px] text-stone-600 mb-2">
                  If 100% of participants vote yes, coordinator writes commit record to its log and sends <code>COMMIT</code>.
                </p>
                <ul className="space-y-1 text-[11px] text-stone-700">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-600" />
                    <span>Shard 1 applies write, releases lock, sends ACK</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-600" />
                    <span>Shard 2 applies write, releases lock, sends ACK</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-3 rounded-xl border border-red-200 bg-red-50/50 text-xs text-red-900 flex items-start gap-2">
            <AlertTriangle size={14} className="text-red-600 mt-0.5 shrink-0" />
            <p>
              <strong>2PC Major Vulnerability:</strong> Blocking Coordinator Failure. If the coordinator crashes between Phase 1 and Phase 2, Shards remain blocked holding database row locks indefinitely, unable to unilaterally abort or commit.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs text-stone-600">
              Orchestrated series of local transactions with forward execution and backward compensation:
            </span>
            <label className="flex items-center gap-1.5 text-xs text-stone-700 font-semibold cursor-pointer">
              <input
                type="checkbox"
                checked={sagaFailure}
                onChange={(e) => setSagaFailure(e.target.checked)}
                className="accent-orange-600 rounded"
              />
              <span>Simulate Payment Gateway Failure (Trigger Compensation)</span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <span className="text-[10px] text-stone-400 font-bold block">Step 1</span>
              <span className="font-bold text-stone-900 block mt-0.5">Reserve Course</span>
              <span className="text-[10px] text-emerald-600 block mt-1">Status: OK</span>
              {sagaFailure && (
                <div className="mt-2 pt-2 border-t border-stone-200 text-[10px] text-red-600 font-bold">
                  Compensate: Release Seat
                </div>
              )}
            </div>

            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <span className="text-[10px] text-stone-400 font-bold block">Step 2</span>
              <span className="font-bold text-stone-900 block mt-0.5">Charge Payment</span>
              <span
                className={`text-[10px] font-bold block mt-1 ${
                  sagaFailure ? "text-red-600" : "text-emerald-600"
                }`}
              >
                {sagaFailure ? "Failed (Card Declined)" : "Status: OK ($99)"}
              </span>
              {sagaFailure && (
                <div className="mt-2 pt-2 border-t border-stone-200 text-[10px] text-stone-500">
                  No charge to refund
                </div>
              )}
            </div>

            <div
              className={`p-3 rounded-lg border transition ${
                sagaFailure
                  ? "border-stone-200 bg-stone-100 opacity-50"
                  : "border-stone-200 bg-white"
              }`}
            >
              <span className="text-[10px] text-stone-400 font-bold block">Step 3</span>
              <span className="font-bold text-stone-900 block mt-0.5">Grant Access</span>
              <span className="text-[10px] text-stone-500 block mt-1">
                {sagaFailure ? "Skipped" : "Status: Active"}
              </span>
            </div>

            <div
              className={`p-3 rounded-lg border transition ${
                sagaFailure
                  ? "border-stone-200 bg-stone-100 opacity-50"
                  : "border-stone-200 bg-white"
              }`}
            >
              <span className="text-[10px] text-stone-400 font-bold block">Step 4</span>
              <span className="font-bold text-stone-900 block mt-0.5">Send Invoice</span>
              <span className="text-[10px] text-stone-500 block mt-1">
                {sagaFailure ? "Skipped" : "Email Sent"}
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs text-stone-700 flex items-center justify-between">
            <span className="font-semibold">Trade-off Comparison:</span>
            <span className="text-[11px] text-stone-600">
              Sagas avoid long-lived database locks and scale across microservices, but expose intermediate states (lack of global isolation).
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Diagram 5: Hot Partition & Key Skew Analyzer
 * Visualizes 4 shards sustaining 8,000 RPS aggregate, but Shard D saturates at 3,200 RPS
 */
export function HotPartitionSkewDiagram() {
  const [rebalanceKey, setRebalanceKey] = useState(false);

  const shards = rebalanceKey
    ? [
        { id: "A", rps: 2000, max: 2000, label: "Salted Tenant A-1" },
        { id: "B", rps: 1950, max: 2000, label: "Tenant B & C" },
        { id: "C", rps: 2020, max: 2000, label: "Tenant D & E" },
        { id: "D", rps: 2030, max: 2000, label: "Salted Tenant A-2" },
      ]
    : [
        { id: "A", rps: 1500, max: 2000, label: "Normal Accounts" },
        { id: "B", rps: 1700, max: 2000, label: "Normal Accounts" },
        { id: "C", rps: 1600, max: 2000, label: "Normal Accounts" },
        { id: "D", rps: 3200, max: 2000, label: "Enterprise Org (Hot Key)" },
      ];

  const totalRps = shards.reduce((acc, s) => acc + s.rps, 0);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 5
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Hot Partition &amp; Key Skew Bottleneck (Worked 8,000 RPS Example)
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setRebalanceKey(!rebalanceKey)}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer border ${
              rebalanceKey
                ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                : "bg-orange-600 text-white border-transparent hover:bg-orange-700"
            }`}
          >
            {rebalanceKey ? "Revert to Hot Shard" : "Apply Key Salting Fix"}
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs font-mono">
        <div className="flex justify-between items-center mb-3 pb-2 border-b border-stone-200 text-stone-700">
          <span>
            Combined Traffic: <strong>{totalRps.toLocaleString()} RPS</strong>
          </span>
          <span>
            Cluster Measured Limit: <strong>4 &times; 2,000 = 8,000 RPS</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          {shards.map((s) => {
            const isOverloaded = s.rps > s.max;
            const pct = Math.min(100, Math.round((s.rps / s.max) * 100));
            return (
              <div
                key={s.id}
                className={`p-3 rounded-lg border transition ${
                  isOverloaded
                    ? "border-red-300 bg-red-50/80 ring-2 ring-red-400"
                    : "border-stone-200 bg-white"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-stone-900">Shard {s.id}</span>
                  <span
                    className={`font-bold ${
                      isOverloaded ? "text-red-700" : "text-emerald-700"
                    }`}
                  >
                    {s.rps} / {s.max} RPS
                  </span>
                </div>
                <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden my-2">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isOverloaded ? "bg-red-600" : "bg-emerald-500"
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="text-[10px] text-stone-500 font-sans truncate">
                  {s.label}
                </div>
                {isOverloaded && (
                  <div className="mt-2 text-[10px] text-red-700 font-bold flex items-center gap-1">
                    <AlertTriangle size={11} />
                    <span>CPU 100% · Throttling!</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] font-sans text-stone-600">
          {rebalanceKey ? (
            <p className="text-emerald-800">
              <strong>Key Salting Active:</strong> The institutional account&apos;s events are salted across multiple virtual keys: <code>user_id + &apos;_&apos; + rand(0, 3)</code>, evenly spreading write IOPS across all 4 shards without saturation.
            </p>
          ) : (
            <p className="text-red-800">
              <strong>Bottleneck Detected:</strong> Even though total traffic (8,000 RPS) matches aggregate cluster capacity, Shard D receives 3,200 RPS (160% capacity) due to a hot enterprise account. The quiet shards cannot take over without repartitioning.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Main Visual Dispatcher for Module 7
 */
export function VisualDiagramComponentModule7({ diagramType }) {
  switch (diagramType) {
    case "replication-topology":
      return <ReplicationTopologyDiagram />;
    case "partitioning-matrix":
      return <PartitioningShardingReplicationDiagram />;
    case "scatter-gather":
      return <ScatterGatherQueryDiagram />;
    case "distributed-transactions":
      return <DistributedTransactionsDiagram />;
    case "hot-partition-skew":
      return <HotPartitionSkewDiagram />;
    default:
      return <ReplicationTopologyDiagram />;
  }
}
