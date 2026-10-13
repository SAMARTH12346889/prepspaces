import React, { useState } from "react";
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
  Globe,
  Compass,
} from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 1: RTO VS. RPO INCIDENT TIMELINE VISUALIZER
 * Demonstrates the exact data loss window (RPO) and downtime duration (RTO)
 * during a catastrophic regional outage.
 * ---------------------------------------------------------------------------
 */
export function RtoRpoTimelineDiagram() {
  const [rpoMinutes, setRpoMinutes] = useState(5);
  const [rtoMinutes, setRtoMinutes] = useState(30);

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Business Continuity Metrics
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            RPO (Data Loss Window) vs. RTO (Downtime Duration)
          </h4>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="px-2.5 py-1 rounded-lg bg-red-100 text-red-800 font-bold">
            RPO: {rpoMinutes} mins
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-orange-100 text-orange-800 font-bold">
            RTO: {rtoMinutes} mins
          </span>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <div className="flex justify-between text-xs font-bold mb-1">
            <span className="text-stone-700">Recovery Point Objective (RPO):</span>
            <span className="font-mono text-red-600">{rpoMinutes} minutes</span>
          </div>
          <input
            type="range"
            min="1"
            max="60"
            value={rpoMinutes}
            onChange={(e) => setRpoMinutes(Number(e.target.value))}
            className="w-full accent-red-600 cursor-pointer"
          />
          <span className="text-[10px] text-stone-400 block mt-1">
            Max acceptable data loss interval prior to disaster.
          </span>
        </div>

        <div>
          <div className="flex justify-between text-xs font-bold mb-1">
            <span className="text-stone-700">Recovery Time Objective (RTO):</span>
            <span className="font-mono text-orange-600">{rtoMinutes} minutes</span>
          </div>
          <input
            type="range"
            min="5"
            max="120"
            step="5"
            value={rtoMinutes}
            onChange={(e) => setRtoMinutes(Number(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
          <span className="text-[10px] text-stone-400 block mt-1">
            Max acceptable time to restore operational service.
          </span>
        </div>
      </div>

      {/* Visual Timeline Bar */}
      <div className="rounded-xl border border-stone-200 bg-white p-4 mb-4">
        <div className="relative pt-6 pb-2">
          {/* Timeline axis */}
          <div className="h-2 w-full bg-stone-100 rounded-full relative overflow-hidden flex">
            {/* Safe operational period */}
            <div className="w-1/4 bg-emerald-400" />
            {/* RPO Data Loss window */}
            <div className="w-1/6 bg-red-500 animate-pulse" />
            {/* RTO Downtime window */}
            <div className="w-1/2 bg-amber-400" />
            {/* Restored service */}
            <div className="flex-1 bg-emerald-500" />
          </div>

          {/* Timeline markers */}
          <div className="grid grid-cols-4 text-center mt-3 text-[11px] font-mono">
            <div>
              <span className="font-bold text-emerald-700 block">12:00 PM</span>
              <span className="text-stone-500 text-[10px]">Last Synced Backup</span>
            </div>
            <div>
              <span className="font-bold text-red-600 block">12:{rpoMinutes.toString().padStart(2, "0")} PM</span>
              <span className="text-red-700 text-[10px] font-bold">Failure Occurs!</span>
            </div>
            <div>
              <span className="font-bold text-amber-700 block">12:{rtoMinutes.toString().padStart(2, "0")} PM</span>
              <span className="text-stone-500 text-[10px]">Failover / Promotion</span>
            </div>
            <div>
              <span className="font-bold text-emerald-700 block">Restored</span>
              <span className="text-stone-500 text-[10px]">Service Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mathematical Breakdown Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="p-3 rounded-xl border border-red-200 bg-red-50/60">
          <strong className="text-red-950 block font-bold mb-1">RPO Analysis (Data Risk):</strong>
          <p className="text-red-800 leading-relaxed">
            Any transactions committed between the last replication sync and the failure ({rpoMinutes} minutes of writes)
            will be lost if asynchronous replication was behind.
          </p>
        </div>

        <div className="p-3 rounded-xl border border-orange-200 bg-orange-50/60">
          <strong className="text-orange-950 block font-bold mb-1">RTO Analysis (Downtime Impact):</strong>
          <p className="text-orange-800 leading-relaxed">
            The engineering team has exactly {rtoMinutes} minutes to detect failure, fence Region A, promote the Region B replica,
            repoint DNS / Anycast IPs, and validate API health.
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 2: 4 MULTI-REGION ARCHITECTURE TOPOLOGY PATTERNS
 * Interactive comparison between Backup & Restore, Pilot Light, Warm Standby,
 * and Active-Active Multi-Region.
 * ---------------------------------------------------------------------------
 */
export function MultiRegionPatternsDiagram() {
  const [pattern, setPattern] = useState("warm-standby"); // "backup" | "pilot" | "warm-standby" | "active-active"

  const patternData = {
    backup: {
      name: "Pattern A: Backup & Restore",
      rto: "Hours to Days",
      rpo: "Hours (Last backup)",
      cost: "$ (Lowest Infrastructure Cost)",
      desc: "Region B runs zero compute instances. Daily/hourly backups and Terraform definitions are copied off-region. Compute is provisioned from scratch during disaster.",
      regionA: "Full Production Stack (100% Traffic)",
      regionB: "Cold Storage (S3 / GCS Backups only)",
    },
    pilot: {
      name: "Pattern B: Pilot Light",
      rto: "30 – 60 Minutes",
      rpo: "Minutes (Continuous DB Replication)",
      cost: "$$ (Low to Moderate)",
      desc: "Critical core data and networking (VPC, IAM, DB replica) remain live in Region B. Compute instances are kept off or minimal, scaled up via autoscaling during failover.",
      regionA: "Full Production Stack (100% Traffic)",
      regionB: "Live DB Replica + 0 Compute Pods (Ready to Scale)",
    },
    "warm-standby": {
      name: "Pattern C: Warm Standby (Active-Passive)",
      rto: "5 – 15 Minutes",
      rpo: "Seconds to Minutes",
      cost: "$$$ (Moderate to High)",
      desc: "Region B maintains a running, functional application footprint with reduced compute capacity and a hot read replica. When Region A dies, Region B is promoted and scaled.",
      regionA: "Full Production Stack (100% Traffic, Primary DB)",
      regionB: "Scaled-Down Stack (20% Compute + Live DB Replica)",
    },
    "active-active": {
      name: "Pattern D: Active-Active Multi-Region",
      rto: "Near Zero (Sub-Second)",
      rpo: "Near Zero to Seconds",
      cost: "$$$$ (Highest Operational Cost)",
      desc: "Both Region A and Region B serve live production traffic simultaneously. Traffic is routed via GeoDNS / Anycast. If one region dies, remaining region absorbs traffic immediately.",
      regionA: "Active Writer / Reader (50% Global Traffic)",
      regionB: "Active Writer / Reader (50% Global Traffic)",
    },
  };

  const current = patternData[pattern];

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Architecture Matrix
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Multi-Region Disaster Recovery Patterns
          </h4>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {[
            { id: "backup", label: "Backup & Restore" },
            { id: "pilot", label: "Pilot Light" },
            { id: "warm-standby", label: "Warm Standby" },
            { id: "active-active", label: "Active-Active" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setPattern(item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                pattern === item.id
                  ? "bg-orange-600 text-white"
                  : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Pattern Banner */}
      <div className="rounded-xl border border-stone-200 bg-white p-4 mb-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2 mb-3">
          <h5 className="font-extrabold text-stone-900 text-sm">{current.name}</h5>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-stone-600">RTO: <strong className="text-orange-600">{current.rto}</strong></span>
            <span className="text-stone-600">RPO: <strong className="text-red-600">{current.rpo}</strong></span>
            <span className="text-stone-600">Cost: <strong className="text-emerald-700">{current.cost}</strong></span>
          </div>
        </div>
        <p className="text-xs text-stone-600 leading-relaxed">{current.desc}</p>
      </div>

      {/* Dual Region Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Region A */}
        <div className="p-4 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
              <Globe size={14} className="text-blue-600" />
              <span>Region A (US-East Primary)</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold">
              ACTIVE
            </span>
          </div>
          <div className="p-3 rounded-lg bg-[#faf8f4] border border-stone-200 text-xs text-stone-700 font-mono space-y-1">
            <div>Deployment: {current.regionA}</div>
            <div className="text-stone-500">Database: Primary Authoritative Writer</div>
          </div>
        </div>

        {/* Region B */}
        <div className="p-4 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
              <Globe size={14} className="text-orange-600" />
              <span>Region B (EU-West Standby / Secondary)</span>
            </span>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
              pattern === "active-active" ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"
            }`}>
              {pattern === "active-active" ? "ACTIVE" : "STANDBY"}
            </span>
          </div>
          <div className="p-3 rounded-lg bg-[#faf8f4] border border-stone-200 text-xs text-stone-700 font-mono space-y-1">
            <div>Deployment: {current.regionB}</div>
            <div className="text-stone-500">
              Database: {pattern === "active-active" ? "Multi-Leader / CRDT Writer" : "Cross-Region Streaming Replica"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 3: REGIONAL FAILOVER & SPLIT-BRAIN FENCING SEQUENCE
 * Step-by-step interactive runner showing how to safely promote a replica
 * while fencing the failed primary to prevent split-brain write corruption.
 * ---------------------------------------------------------------------------
 */
export function RegionalFailoverDiagram() {
  const [currentStep, setCurrentStep] = useState(0); // 0 to 5

  const steps = [
    {
      step: 1,
      title: "1. Detect & Diagnose Regional Outage",
      desc: "Synthetic probes from 3 distinct edge locations confirm Region A ALB is unresponsive for 60 seconds. Distinguish real failure from transient transit blip.",
      status: "INCIDENT_DECLARED",
    },
    {
      step: 2,
      title: "2. Fence Region A (Prevent Split-Brain)",
      desc: "Revoke Region A write lease via fencing token or cloud IAM security group isolation. Old primary MUST NOT continue writing if partially alive.",
      status: "REGION_A_FENCED",
    },
    {
      step: 3,
      title: "3. Assess Replication Lag & Choose Recovery Point",
      desc: "Query Region B replica pg_stat_replication. Confirmed replication lag is 8 seconds (well within the 5-minute RPO target).",
      status: "LAG_VERIFIED",
    },
    {
      step: 4,
      title: "4. Promote Region B Database to Primary Writer",
      desc: "Execute `pg_ctl promote`. PostgreSQL replica exits recovery mode and becomes the new authoritative read-write primary.",
      status: "REGION_B_PROMOTED",
    },
    {
      step: 5,
      title: "5. Scale Compute & Reroute Global DNS",
      desc: "Autoscale Region B API pods from 2 to 12 replicas. Update Route 53 / Cloudflare health checks to route 100% of global traffic to Region B.",
      status: "TRAFFIC_REDIRECTED",
    },
    {
      step: 6,
      title: "6. Recovery Complete & Verification",
      desc: "Synthetic test candidate completes mock interview. All user journeys restored within 12 minutes (beating the 15-minute RTO target).",
      status: "SERVICE_RESTORED",
    },
  ];

  const resetFailover = () => {
    setCurrentStep(0);
  };

  const advanceStep = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    } else {
      resetFailover();
    }
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Runbook Simulation
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Regional Failover &amp; Split-Brain Fencing Sequence
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={resetFailover}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 transition cursor-pointer"
          >
            <RotateCcw size={13} />
            <span>Reset Runbook</span>
          </button>
        </div>
      </div>

      {/* Progress Steps Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-6">
        {steps.map((s, idx) => (
          <div
            key={s.step}
            className={`p-2.5 rounded-xl border text-center transition ${
              idx === currentStep
                ? "bg-orange-50 border-orange-400 ring-2 ring-orange-500 shadow-xs"
                : idx < currentStep
                ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-bold"
                : "bg-white border-stone-200 opacity-50"
            }`}
          >
            <span className="text-[10px] font-mono font-bold block mb-1">Step {s.step}</span>
            <span className="text-[11px] leading-tight block truncate">{s.title.split(". ")[1]}</span>
          </div>
        ))}
      </div>

      {/* Active Step Detail Card */}
      <div className="rounded-xl border border-stone-200 bg-white p-5 mb-4 space-y-3">
        <div className="flex items-center justify-between">
          <h5 className="font-extrabold text-stone-900 text-sm">{steps[currentStep].title}</h5>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold">
            Status: {steps[currentStep].status}
          </span>
        </div>
        <p className="text-xs text-stone-600 leading-relaxed">{steps[currentStep].desc}</p>
      </div>

      {/* Advance Button */}
      <button
        type="button"
        onClick={advanceStep}
        className="w-full py-2.5 px-4 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition cursor-pointer"
      >
        {currentStep === 5 ? "Failover Completed! Click to Reset" : `Execute Step ${currentStep + 2} &rarr;`}
      </button>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DISPATCHER COMPONENT FOR MODULE 16 DIAGRAMS
 * ---------------------------------------------------------------------------
 */
export function VisualDiagramComponentModule16({ diagramId }) {
  switch (diagramId) {
    case "rto-rpo":
      return <RtoRpoTimelineDiagram />;
    case "patterns":
      return <MultiRegionPatternsDiagram />;
    case "failover":
      return <RegionalFailoverDiagram />;
    default:
      return <RtoRpoTimelineDiagram />;
  }
}
