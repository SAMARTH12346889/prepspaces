import React, { useState, useMemo } from "react";
import {
  Server,
  Database,
  Radio,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Layers,
  Clock,
  Zap,
  Cpu,
  ShieldCheck,
  ShieldAlert,
  Send,
  Workflow,
  Sparkles,
  Inbox,
  Filter,
  Lock,
  Unlock,
  Key,
  Flame,
  FileText,
  RefreshCw,
  Sliders,
  Activity,
  Network,
  Scale,
  TrendingUp,
  BarChart3,
  HardDrive,
} from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 1: REAL-TIME CAPACITY ESTIMATION & LITTLE'S LAW CALCULATOR
 * Interactive modeling of DAU, RPS, Bandwidth, Annual Storage, and Concurrency.
 * ---------------------------------------------------------------------------
 */
export function CapacityEstimationDiagram() {
  const [dau, setDau] = useState(100000); // 100k DAU
  const [reqsPerUser, setReqsPerUser] = useState(120);
  const [peakMultiplier, setPeakMultiplier] = useState(5);
  const [payloadKb, setPayloadKb] = useState(25);
  const [storagePerUserKb, setStoragePerUserKb] = useState(20);
  const [avgLatencySec, setAvgLatencySec] = useState(0.2); // 200ms

  const metrics = useMemo(() => {
    const totalDailyRequests = dau * reqsPerUser;
    const avgRps = Math.round(totalDailyRequests / 86400);
    const peakRps = Math.round(avgRps * peakMultiplier);

    // Bandwidth
    const bandwidthKbPerSec = peakRps * payloadKb;
    const bandwidthMbPerSec = (bandwidthKbPerSec / 1024).toFixed(2);
    const bandwidthMbps = ((bandwidthKbPerSec * 8) / 1000).toFixed(1);

    // Storage
    const dailyStorageMb = ((dau * storagePerUserKb) / 1024).toFixed(1);
    const annualStorageGb = (((dau * storagePerUserKb * 365) / 1024) / 1024).toFixed(1);

    // Little's Law: L = lambda * W
    const inFlightConcurrency = Math.round(peakRps * avgLatencySec);

    return {
      totalDailyRequests,
      avgRps,
      peakRps,
      bandwidthMbPerSec,
      bandwidthMbps,
      dailyStorageMb,
      annualStorageGb,
      inFlightConcurrency,
    };
  }, [dau, reqsPerUser, peakMultiplier, payloadKb, storagePerUserKb, avgLatencySec]);

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            System Design Math
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Capacity Estimation &amp; Little&apos;s Law Modeler
          </h4>
        </div>
        <span className="text-xs font-mono text-stone-500">Live Mathematical Projection</span>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <div className="flex justify-between text-xs font-bold mb-1">
            <span className="text-stone-700">Daily Active Users:</span>
            <span className="font-mono text-orange-600">{dau.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="10000"
            max="1000000"
            step="10000"
            value={dau}
            onChange={(e) => setDau(Number(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold mb-1">
            <span className="text-stone-700">Requests / User / Day:</span>
            <span className="font-mono text-orange-600">{reqsPerUser}</span>
          </div>
          <input
            type="range"
            min="20"
            max="300"
            step="10"
            value={reqsPerUser}
            onChange={(e) => setReqsPerUser(Number(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold mb-1">
            <span className="text-stone-700">Peak Multiplier:</span>
            <span className="font-mono text-orange-600">{peakMultiplier}x Peak</span>
          </div>
          <input
            type="range"
            min="2"
            max="10"
            step="1"
            value={peakMultiplier}
            onChange={(e) => setPeakMultiplier(Number(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>
      </div>

      {/* Computed Architecture Results */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
          <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Average / Peak RPS</span>
          <div className="flex items-baseline gap-1 mt-1 font-mono">
            <span className="text-lg font-extrabold text-stone-900">{metrics.avgRps}</span>
            <span className="text-xs text-stone-400">/</span>
            <span className="text-lg font-extrabold text-orange-600">{metrics.peakRps} RPS</span>
          </div>
          <span className="text-[10px] text-stone-500">{(metrics.totalDailyRequests / 1e6).toFixed(1)}M daily reqs</span>
        </div>

        <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
          <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Peak Bandwidth</span>
          <span className="text-lg font-extrabold text-stone-900 font-mono mt-1 block">
            {metrics.bandwidthMbPerSec} MB/s
          </span>
          <span className="text-[10px] text-stone-500 font-mono">({metrics.bandwidthMbps} Mbps wire rate)</span>
        </div>

        <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
          <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Annual Storage</span>
          <span className="text-lg font-extrabold text-stone-900 font-mono mt-1 block">
            {metrics.annualStorageGb} GB/yr
          </span>
          <span className="text-[10px] text-stone-500 font-mono">{metrics.dailyStorageMb} MB/day</span>
        </div>

        <div className="p-3.5 rounded-xl border border-orange-200 bg-orange-50/60">
          <span className="text-[10px] font-mono uppercase text-orange-800 font-bold block">In-Flight Concurrency</span>
          <span className="text-lg font-extrabold text-orange-950 font-mono mt-1 block">
            {metrics.inFlightConcurrency} reqs
          </span>
          <span className="text-[10px] text-orange-700 font-mono">Little&apos;s Law \(L = \lambda W\)</span>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 2: QUEUEING THEORY & THE UTILIZATION "HOCKEY STICK" CURVE
 * Demonstrates why latency increases exponentially as utilization approaches 100%
 * based on the M/M/1 queueing delay formula: W = 1 / (mu - lambda).
 * ---------------------------------------------------------------------------
 */
export function QueueingHockeyStickDiagram() {
  const [utilizationPercent, setUtilizationPercent] = useState(70);
  const baseServiceTimeMs = 50; // 50ms service time at 0 load

  const queueingMetrics = useMemo(() => {
    const rho = utilizationPercent / 100;
    // M/M/1 response time: W = S / (1 - rho)
    const expectedResponseTimeMs = Math.round(baseServiceTimeMs / Math.max(0.01, 1 - rho));
    const queueWaitTimeMs = Math.max(0, expectedResponseTimeMs - baseServiceTimeMs);

    let dangerLevel = "SAFE";
    if (utilizationPercent >= 75) dangerLevel = "WARNING";
    if (utilizationPercent >= 90) dangerLevel = "CRITICAL_COLLAPSE";

    return {
      rho,
      expectedResponseTimeMs,
      queueWaitTimeMs,
      dangerLevel,
    };
  }, [utilizationPercent]);

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Queueing Theory
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            The Utilization Knee: Why Latency Explodes Above 80% Load
          </h4>
        </div>
        <span className="text-xs font-mono font-bold text-stone-600">
          M/M/1 Model: W = S / (1 - ρ)
        </span>
      </div>

      {/* Utilization Slider */}
      <div className="mb-6">
        <div className="flex justify-between text-xs font-bold mb-1">
          <span className="text-stone-700">System Utilization (ρ = Arrival / Capacity):</span>
          <span className="font-mono text-orange-600 text-sm">{utilizationPercent}%</span>
        </div>
        <input
          type="range"
          min="10"
          max="98"
          value={utilizationPercent}
          onChange={(e) => setUtilizationPercent(Number(e.target.value))}
          className="w-full accent-orange-600 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-1">
          <span>0% (Idle)</span>
          <span>50% (Comfortable)</span>
          <span>75% (Target Operating Knee)</span>
          <span>90% (Latency Explosion)</span>
          <span>100% (Collapse)</span>
        </div>
      </div>

      {/* Latency Comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div className="p-4 rounded-xl border border-stone-200 bg-white">
          <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Base Service Time</span>
          <span className="text-2xl font-extrabold text-stone-900 font-mono mt-1 block">50 ms</span>
          <span className="text-[11px] text-stone-500">Pure CPU/DB execution time</span>
        </div>

        <div className="p-4 rounded-xl border border-stone-200 bg-white">
          <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Queue Waiting Time</span>
          <span className="text-2xl font-extrabold text-amber-600 font-mono mt-1 block">
            {queueingMetrics.queueWaitTimeMs} ms
          </span>
          <span className="text-[11px] text-stone-500">Time spent waiting in socket/OS queue</span>
        </div>

        <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/60">
          <span className="text-[10px] font-mono uppercase text-orange-800 font-bold block">Total End-to-End Latency</span>
          <span className="text-2xl font-extrabold text-orange-950 font-mono mt-1 block">
            {queueingMetrics.expectedResponseTimeMs} ms
          </span>
          <span className="text-[11px] text-orange-700 font-mono">
            {utilizationPercent > 70 ? `${(queueingMetrics.expectedResponseTimeMs / baseServiceTimeMs).toFixed(1)}x baseline!` : "Normal"}
          </span>
        </div>
      </div>

      {/* Danger Banner */}
      <div
        className={`p-3.5 rounded-xl border text-xs font-mono ${
          queueingMetrics.dangerLevel === "SAFE"
            ? "bg-emerald-50 border-emerald-300 text-emerald-900"
            : queueingMetrics.dangerLevel === "WARNING"
            ? "bg-amber-50 border-amber-300 text-amber-900"
            : "bg-red-50 border-red-300 text-red-900"
        }`}
      >
        {queueingMetrics.dangerLevel === "SAFE" && (
          <span>[HEADROOM SAFE] System has ample buffer for traffic spikes and micro-bursts without queue latency buildup.</span>
        )}
        {queueingMetrics.dangerLevel === "WARNING" && (
          <span>[OPERATIONAL KNEE] Queueing delay equals processing time. Small traffic variations will cause sudden latency spikes.</span>
        )}
        {queueingMetrics.dangerLevel === "CRITICAL_COLLAPSE" && (
          <span>[EXPONENTIAL SPIKE] At {utilizationPercent}% load, queueing delay is {queueingMetrics.queueWaitTimeMs}ms! Clients will timeout and fire retries, causing cascading collapse.</span>
        )}
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 3: SYSTEM BOTTLENECK DIAGNOSTIC DECISION TREE
 * Interactive decision tree allowing engineers to diagnose CPU, Memory, DB,
 * and Network/IO bottlenecks with concrete remediation steps.
 * ---------------------------------------------------------------------------
 */
export function BottleneckDiagnosticDiagram() {
  const [selectedSymptom, setSelectedSymptom] = useState("cpu"); // "cpu" | "memory" | "db" | "network"

  const diagnostics = {
    cpu: {
      title: "CPU Saturation (Utilization > 85%)",
      causes: "Complex regex parsing, JSON serialization of huge payloads, cryptographic hashing, or unindexed loops.",
      metrics: "Profile via Linux `perf`, flamegraphs, or Node.js CPU profiler.",
      remedy: "Optimize hot algorithms, introduce response caching, stream JSON, or scale compute horizontally.",
    },
    memory: {
      title: "Memory Saturation & GC Pressure",
      causes: "Memory leaks, uncollected event listeners, large in-memory arrays, or heap fragmentation.",
      metrics: "Inspect V8 heap usage, GC pause duration (`gctrace`), container OOMKill count.",
      remedy: "Stream large datasets from DB using cursors, fix detached DOM/closures, increase RAM or pod memory limits.",
    },
    db: {
      title: "Database Lock & Connection Contention",
      causes: "Missing B-Tree indexes, full sequential scans, connection pool exhaustion, or row lock contention.",
      metrics: "Analyze `pg_stat_activity`, slow query logs (>100ms), and pool wait time.",
      remedy: "Add composite indexes, implement PgBouncer connection pooling, offload reads to replicas, cache with Redis.",
    },
    network: {
      title: "Network & I/O Latency Bottleneck",
      causes: "Large uncompressed JSON responses (multi-MB), synchronous external API calls, cross-region latency.",
      metrics: "Track TTFB (Time to First Byte), network egress bandwidth, socket drop counts.",
      remedy: "Enable Gzip/Brotli compression, push static assets to CDN, switch to HTTP/2 multiplexing, set client deadlines.",
    },
  };

  const current = diagnostics[selectedSymptom];

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Performance Engineering
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Bottleneck Diagnostic Tree &amp; Remediation Playbook
          </h4>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {[
            { id: "cpu", label: "CPU", icon: Cpu },
            { id: "memory", label: "Memory", icon: Activity },
            { id: "db", label: "Database", icon: Database },
            { id: "network", label: "Network/IO", icon: Network },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedSymptom(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  selectedSymptom === tab.id
                    ? "bg-orange-600 text-white"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Icon size={13} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Diagnostic Card */}
      <div className="rounded-xl border border-stone-200 bg-white p-4 space-y-3">
        <h5 className="font-extrabold text-sm text-stone-900 flex items-center gap-2">
          <AlertTriangle size={15} className="text-orange-600" />
          <span>{current.title}</span>
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
            <strong className="text-stone-900 block mb-1">Common Root Causes:</strong>
            <span className="text-stone-600 leading-relaxed">{current.causes}</span>
          </div>

          <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
            <strong className="text-stone-900 block mb-1">Observable Metrics:</strong>
            <span className="text-stone-600 leading-relaxed font-mono text-[11px]">{current.metrics}</span>
          </div>

          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950">
            <strong className="text-emerald-900 block mb-1">Architectural Fix:</strong>
            <span className="leading-relaxed">{current.remedy}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DISPATCHER COMPONENT FOR MODULE 15 DIAGRAMS
 * ---------------------------------------------------------------------------
 */
export function VisualDiagramComponentModule15({ diagramId }) {
  switch (diagramId) {
    case "capacity":
      return <CapacityEstimationDiagram />;
    case "queueing":
      return <QueueingHockeyStickDiagram />;
    case "bottlenecks":
      return <BottleneckDiagnosticDiagram />;
    default:
      return <CapacityEstimationDiagram />;
  }
}
