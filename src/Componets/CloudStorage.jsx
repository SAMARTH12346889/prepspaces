import { getLucideIcon } from "../utils/iconMap";
import useModuleContent from "../hooks/useModuleContent";
import ModuleLoadingSkeleton from "./ModuleLoadingSkeleton";
import ModuleErrorState from "./ModuleErrorState";
import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Database,
  Globe,
  HelpCircle,
  Layers,
  Lightbulb,
  MessageSquare,
  Network,
  Play,
  RefreshCw,
  Server,
  Shield,
  ShieldAlert,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
  Sliders,
  AlertTriangle,
  Building2,
  Boxes,
  Copy,
  Activity,
  Award,
  HardDrive,
  BarChart3,
  Clock,
  Gauge,
  TrendingUp,
  FolderTree,
  Box,
  Archive,
  ShieldCheck,
  Lock,
  FileText,
  DollarSign,
  FileCode,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 4: CLOUD STORAGE                                    */
/* Week 6: Block, File, Object, Distributed Storage, Durability & Lifecycle   */
/* Systems Theory: Google Colossus, AWS Dynamo/S3, Reed-Solomon Erasure Codes */
/* -------------------------------------------------------------------------- */


export default function CloudStorage() {
  const { data: moduleData, loading, error, reload } = useModuleContent("cloud", "storage");
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Storage Cost & TCO Calculator State
  const [storageDataTb, setStorageDataTb] = useState(50); // Total TBs
  const [hotPct, setHotPct] = useState(40); // % in Hot/Standard
  const [coolPct, setCoolPct] = useState(40); // % in Cool/IA
  const [archivePct, setArchivePct] = useState(20); // % in Cold/Glacier
  const [monthlyRetrievalTb, setMonthlyRetrievalTb] = useState(5); // TB retrieved/month

  // Storage Selector Interactive Tool State
  const [selectorAccessPattern, setSelectorAccessPattern] = useState("multi-vm"); // "single-vm", "multi-vm", "web-clients", "database"
  const [selectorProtocol, setSelectorProtocol] = useState("nfs-posix"); // "block", "nfs-posix", "rest-http"
  const [selectorLatency, setSelectorLatency] = useState("sub-millisecond"); // "sub-millisecond", "low-millisecond", "minutes-hours"

  // Storage Crisis Game State
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Cost Calculator Math
  const costBreakdown = useMemo(() => {
    const totalTb = parseFloat(storageDataTb) || 0;
    const hotTb = (totalTb * (parseFloat(hotPct) || 0)) / 100;
    const coolTb = (totalTb * (parseFloat(coolPct) || 0)) / 100;
    const archiveTb = (totalTb * (parseFloat(archivePct) || 0)) / 100;
    const retrieved = parseFloat(monthlyRetrievalTb) || 0;

    // Standard Pricing Assumptions (AWS S3 baseline)
    // Hot: $0.023 / GB / month = $23.55 / TB
    // Cool (Standard-IA): $0.0125 / GB / month = $12.80 / TB + $0.01/GB retrieval ($10.24/TB)
    // Archive (Glacier Flexible): $0.0036 / GB / month = $3.68 / TB + $0.03/GB retrieval ($30.72/TB)
    const hotStorageCost = hotTb * 23.55;
    const coolStorageCost = coolTb * 12.8;
    const archiveStorageCost = archiveTb * 3.68;

    // Retrieval costs apportioned mostly to cool & archive if fetched
    const coolRetrievalCost = Math.min(retrieved, coolTb) * 10.24;
    const archiveRetrievalCost = Math.max(0, retrieved - coolTb) * 30.72;

    const totalTieredMonthly =
      hotStorageCost + coolStorageCost + archiveStorageCost + coolRetrievalCost + archiveRetrievalCost;
    const allHotBaselineCost = totalTb * 23.55;
    const monthlySavings = Math.max(0, allHotBaselineCost - totalTieredMonthly);
    const savingsPercent = allHotBaselineCost > 0 ? ((monthlySavings / allHotBaselineCost) * 100).toFixed(1) : 0;

    return {
      hotTb,
      coolTb,
      archiveTb,
      hotStorageCost,
      coolStorageCost,
      archiveStorageCost,
      retrievalCost: coolRetrievalCost + archiveRetrievalCost,
      totalTieredMonthly,
      allHotBaselineCost,
      monthlySavings,
      savingsPercent,
    };
  }, [storageDataTb, hotPct, coolPct, archivePct, monthlyRetrievalTb]);

  // Recommended Storage Decision Engine logic
  const storageRecommendation = useMemo(() => {
    if (selectorAccessPattern === "database" || selectorProtocol === "block" || selectorLatency === "sub-millisecond") {
      return {
        type: "Block Storage",
        badge: "AWS EBS / Azure Managed Disk / GCP Persistent Disk",
        latency: "Sub-millisecond to ~2ms",
        protocol: "Raw block device over network (NVMe / iSCSI)",
        concurrency: "Dedicated single-VM attachment (or clustered multi-attach for RAC/GFS2)",
        reason:
          "Relational databases (PostgreSQL, MySQL, Oracle) and transactional state engines require low latency, small random 4KB/8KB reads and writes, and atomic block mutations. Block storage is non-negotiable here.",
        pricing: "Billed for provisioned capacity & IOPS whether filled with bytes or not.",
      };
    }

    if (selectorAccessPattern === "multi-vm" || selectorProtocol === "nfs-posix") {
      return {
        type: "Managed File Storage",
        badge: "AWS EFS / Azure Files / GCP Cloud Filestore",
        latency: "Low single-digit milliseconds (~3-10ms)",
        protocol: "NFSv4 (Linux) or SMB 3.0 (Windows)",
        concurrency: "Hundreds or thousands of VMs/containers mounted simultaneously (ReadWriteMany)",
        reason:
          "Traditional applications, CMS shared media directories (WordPress), legacy enterprise jobs, and Kubernetes pods needing shared ReadWriteMany volumes rely on POSIX filesystem tree semantics and file locking.",
        pricing: "Elastic pay-for-stored bytes or provisioned throughput tiers.",
      };
    }

    return {
      type: "Object Storage",
      badge: "AWS S3 / Azure Blob Storage / Google Cloud Storage",
      latency: "Tens to hundreds of milliseconds (10-100ms)",
      protocol: "REST API over HTTPS (GET, PUT, DELETE, LIST, Byte-Range)",
      concurrency: "Unlimited concurrent HTTP clients globally via CDNs or direct presigned URLs",
      reason:
        "Modern cloud-native systems store user uploads, images, backups, data lake parquet files, audio/video streams, and logs in object storage. It offers virtually infinite scalability, 11 nines durability, and built-in lifecycle tiering.",
      pricing: "Extremely cost-effective: pay only for exact gigabytes stored + API calls + data transfer.",
    };
  }, [selectorAccessPattern, selectorProtocol, selectorLatency]);

  const storageTopics = moduleData?.topics || [];

  const currentTopic = storageTopics[selectedTopic] || storageTopics[0] || {};
  const CurrentIcon = getLucideIcon(currentTopic?.icon, HardDrive);
  const topicNumber = String(selectedTopic + 1).padStart(2, "0");

  const nextTopic = () => {
    setSelectedTopic((prev) => (prev < storageTopics.length - 1 ? prev + 1 : 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousTopic = () => {
    setSelectedTopic((prev) => (prev > 0 ? prev - 1 : storageTopics.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 7 Storage Incident Game Scenarios
  const storageGameScenarios = moduleData?.scenarios || [];

  const handleGameAnswer = (scenarioId, optionId) => {
    const scenario = storageGameScenarios.find((s) => s.id === scenarioId);
    if (!scenario) return;

    const selectedOption = scenario.options.find((o) => o.id === optionId);
    const isCorrect = selectedOption?.isCorrect || false;

    setGameSelection(optionId);
    setGameHistory((prev) => {
      const alreadyAnswered = prev[scenarioId] !== undefined;
      if (!alreadyAnswered && isCorrect) {
        setGameScore((s) => s + 100);
      }
      return { ...prev, [scenarioId]: optionId };
    });
  };

  const nextGameScenario = () => {
    if (gameScenarioIndex < storageGameScenarios.length - 1) {
      setGameScenarioIndex((prev) => prev + 1);
      setGameSelection(gameHistory[storageGameScenarios[gameScenarioIndex + 1]?.id] || null);
    }
  };

  const prevGameScenario = () => {
    if (gameScenarioIndex > 0) {
      setGameScenarioIndex((prev) => prev - 1);
      setGameSelection(gameHistory[storageGameScenarios[gameScenarioIndex - 1]?.id] || null);
    }
  };

    if (loading) {
    return <ModuleLoadingSkeleton track="cloud" currentModuleId="storage" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="cloud" currentModuleId="storage" error={error} onRetry={reload} />;
  }
return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-12 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-orange-500/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="cloud"
          currentModuleId="storage"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Storage AI"
        />

            

        {/* AI TUTOR ACCORDION DRAWER */}
        {showAiTutor && (
          <section className="mb-8 overflow-hidden rounded-3xl border border-orange-200 bg-white/95 p-6 shadow-xl backdrop-blur-xl transition-all">
            <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f97316] text-white">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Nova AI Cloud Storage Architect Tutor
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    Ask questions about Block vs File vs Object, Reed-Solomon Erasure Coding, S3 Object Lock, 11 Nines Durability, or Glacier FinOps traps.
                  </p>
                </div>
              </div>
            </div>

            <LearningRo currentTopic={`storage-${currentTopic.id}`} />
          </section>
        )}

        {/* HERO BANNER */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-2xl md:p-9 relative">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/30 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#f97316] mb-3">
                <Database size={13} />
                <span>Cloud Storage Architecture & Distributed Systems</span>
              </div>

              <h1 className="text-2xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
                Block, File, Object & Distributed Storage
              </h1>

              <p className="mt-3 text-xs md:text-sm leading-relaxed text-stone-300 max-w-2xl">
                Compute is temporary; data is what you cannot afford to lose. Master the 4 levels of storage, Block vs File vs Object, Reed-Solomon Erasure Coding, 11 Nines durability, Replication vs Backup, and automated lifecycle cost optimization.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-4 text-center">
                <div className="font-mono text-2xl font-extrabold text-[#f97316]">99.999999999%</div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mt-0.5">
                  11 Nines Durability
                </div>
              </div>

              <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-4 text-center">
                <div className="font-mono text-2xl font-extrabold text-amber-400">12 Modules</div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mt-0.5">
                  Complete Syllabus
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TOPIC SELECTION PILLS */}
        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {storageTopics.map((topic, index) => {
            const Icon = getLucideIcon(topic.icon, HardDrive);
            const isSelected = selectedTopic === index;

            return (
              <button
                key={topic.id}
                onClick={() => {
                  setSelectedTopic(index);
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                className={`flex shrink-0 items-center gap-2 rounded-2xl border px-3.5 py-2 text-xs font-bold transition shadow-xs ${
                  isSelected
                    ? "border-[#f97316] bg-[#f97316] text-white shadow-md shadow-orange-500/20"
                    : "border-[#e7e3da] bg-white text-stone-700 hover:border-orange-300 hover:bg-orange-50/50"
                }`}
              >
                <Icon size={14} className={isSelected ? "text-white" : "text-stone-500"} />
                <span>{topic.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* MAIN TOPIC CONTENT SECTION */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* LEFT 8 COLS: DEEP DIVE CONTENT */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* TOPIC HEADER CARD */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#f97316]">
                    <CurrentIcon size={22} />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-orange-600">
                      Topic {topicNumber} • {currentTopic.category}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-[#18181b]">
                      {currentTopic.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={previousTopic}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-stone-50 text-stone-600 hover:border-orange-300 hover:text-[#f97316] transition"
                    title="Previous Topic"
                  >
                    <ArrowLeft size={14} />
                  </button>
                  <span className="font-mono text-xs font-bold text-stone-400 px-1">
                    {selectedTopic + 1} / {storageTopics.length}
                  </span>
                  <button
                    onClick={nextTopic}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-stone-50 text-stone-600 hover:border-orange-300 hover:text-[#f97316] transition"
                    title="Next Topic"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* SUMMARY BOX */}
              <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-4 mb-6 text-xs md:text-sm leading-relaxed text-stone-800 font-medium">
                <span className="font-bold text-orange-900 block mb-1">Architecture Summary:</span>
                {currentTopic.summary}
              </div>

              {/* CORE THEORY PARAGRAPHS */}
              <div className="space-y-4 text-xs md:text-sm leading-relaxed text-stone-700">
                {currentTopic.theory.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* ARCHITECTURE DIAGRAM / VISUALIZATION CONTAINER */}
              <div className="mt-8 rounded-2xl border border-stone-200 bg-stone-900 p-5 text-white shadow-inner">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Workflow size={15} className="text-[#f97316]" />
                    <span className="font-mono text-xs font-bold text-stone-300">
                      Architectural Blueprint: {currentTopic.shortTitle}
                    </span>
                  </div>
                  <span className="rounded-full bg-orange-500/20 border border-orange-500/40 px-2.5 py-0.5 font-mono text-[10px] text-orange-300">
                    Live System Visual
                  </span>
                </div>

                {/* DIAGRAM RENDERER BASED ON TOPIC */}
                {currentTopic.diagramType === "storage-four-levels" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-xl border border-stone-700 bg-stone-800/90 p-3 text-stone-200">
                      <div className="text-orange-400 font-bold mb-1">LEVEL 1: Application View</div>
                      <div className="text-stone-300 text-[11px]">
                        "I need a database disk" ↔ "I need a shared media volume" ↔ "I need a petabyte object repository"
                      </div>
                    </div>
                    <div className="text-center text-stone-500">↓ mapped to storage interfaces ↓</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <div className="rounded-xl border border-amber-500/30 bg-amber-950/30 p-2.5 text-center">
                        <div className="font-bold text-amber-300 text-xs">BLOCK STORAGE</div>
                        <div className="text-[10px] text-stone-400 mt-1">Raw 4KB sectors • Sub-ms • Single VM</div>
                        <div className="text-[9px] text-orange-400 font-mono mt-1">AWS EBS • Azure Disk • GCE PD</div>
                      </div>
                      <div className="rounded-xl border border-blue-500/30 bg-blue-950/30 p-2.5 text-center">
                        <div className="font-bold text-blue-300 text-xs">FILE STORAGE</div>
                        <div className="text-[10px] text-stone-400 mt-1">POSIX tree • 3-10ms • Multi-VM mount</div>
                        <div className="text-[9px] text-blue-400 font-mono mt-1">AWS EFS • Azure Files • Filestore</div>
                      </div>
                      <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-2.5 text-center">
                        <div className="font-bold text-emerald-300 text-xs">OBJECT STORAGE</div>
                        <div className="text-[10px] text-stone-400 mt-1">Flat Key-Value • REST API • Global</div>
                        <div className="text-[9px] text-emerald-400 font-mono mt-1">AWS S3 • Azure Blob • GCS</div>
                      </div>
                    </div>
                    <div className="text-center text-stone-500">↓ powered by distributed storage engines ↓</div>
                    <div className="rounded-xl border border-stone-700 bg-stone-800/90 p-3 text-stone-200">
                      <div className="text-orange-400 font-bold mb-1">LEVEL 3: Distributed Storage Internals</div>
                      <div className="text-stone-300 text-[11px]">
                        Reed-Solomon Erasure Coding (RS 8+4) • 3-Way Synchronous Replication • SHA-256 Checksums • Bit-Rot Scrubbing
                      </div>
                    </div>
                    <div className="text-center text-stone-500">↓ deployed across physical infrastructure ↓</div>
                    <div className="rounded-xl border border-stone-700 bg-stone-800/90 p-3 text-stone-200">
                      <div className="text-orange-400 font-bold mb-1">LEVEL 4: Physical Hardware & Geography</div>
                      <div className="text-stone-300 text-[11px]">
                        NVMe SSDs • High-density HDDs • Terabit Leaf-Spine Fabric • 3 Availability Zones • Cross-Region Backbone
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "block-iops-throughput" && (
                  <div className="space-y-4 font-mono text-xs">
                    <div className="rounded-xl bg-black/60 p-4 border border-stone-800">
                      <div className="text-orange-400 font-bold mb-2">Throughput vs IOPS Invariant Formula:</div>
                      <div className="text-stone-200 text-sm">
                        Throughput (MB/s) = (IOPS × I/O Block Size in KB) / 1024
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                      <div className="rounded-xl border border-stone-700 bg-stone-800 p-3">
                        <div className="font-bold text-amber-300 mb-1">Scenario A: Transactional OLTP Database</div>
                        <div className="text-stone-400">Random 8 KB reads/writes</div>
                        <div className="text-stone-300 mt-1">10,000 IOPS × 8 KB = <span className="text-orange-400 font-bold">78.1 MB/s</span></div>
                        <div className="text-[10px] text-stone-400 mt-1">Bottleneck is IOPS limits, not throughput.</div>
                      </div>
                      <div className="rounded-xl border border-stone-700 bg-stone-800 p-3">
                        <div className="font-bold text-blue-300 mb-1">Scenario B: Large Sequential Analytics/Backup</div>
                        <div className="text-stone-400">Sequential 256 KB block streams</div>
                        <div className="text-stone-300 mt-1">1,000 IOPS × 256 KB = <span className="text-blue-400 font-bold">250 MB/s</span></div>
                        <div className="text-[10px] text-stone-400 mt-1">Bottleneck is Throughput bandwidth, not IOPS.</div>
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "file-storage-nfs" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="text-stone-300 text-center text-[11px] mb-2">
                      Multi-AZ Shared Network Filesystem (ReadWriteMany)
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                      <div className="rounded-lg bg-stone-800 border border-stone-700 p-2 text-stone-300">
                        VM 1 (AZ-A)<br/><span className="text-orange-400">/mnt/data</span>
                      </div>
                      <div className="rounded-lg bg-stone-800 border border-stone-700 p-2 text-stone-300">
                        VM 2 (AZ-B)<br/><span className="text-orange-400">/mnt/data</span>
                      </div>
                      <div className="rounded-lg bg-stone-800 border border-stone-700 p-2 text-stone-300">
                        VM 3 (AZ-C)<br/><span className="text-orange-400">/mnt/data</span>
                      </div>
                    </div>
                    <div className="text-center text-stone-500">↓↓ NFSv4.1 / SMB 3.0 RPCs with distributed byte-range locks ↓↓</div>
                    <div className="rounded-xl border border-blue-500/40 bg-blue-950/40 p-3 text-center text-blue-200">
                      <div className="font-bold text-xs">AWS EFS / Azure Files / GCP Filestore</div>
                      <div className="text-[10px] text-stone-300 mt-1">
                        POSIX Hierarchical Tree: Atomic rename(), flock(), chmod, hard links
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "object-rest-api" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-xl bg-black/60 p-3 border border-stone-800 text-[11px]">
                      <div className="text-emerald-400 font-bold mb-1">REST API Operations (No Mount Points!):</div>
                      <div className="text-stone-300">GET /bucket/key (Fetch payload + byte-ranges)</div>
                      <div className="text-stone-300">PUT /bucket/key (Upload entire object; immutable replace)</div>
                      <div className="text-stone-300">DELETE /bucket/key (Create Delete Marker or erase)</div>
                      <div className="text-stone-300">HEAD /bucket/key (Fetch metadata headers only without body)</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-orange-400 font-bold">Multipart Upload:</span> Parallel 5MB-5GB chunk uploads with independent retries.
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-orange-400 font-bold">Byte-Range Stream:</span> Fetch specific byte offsets (ideal for streaming video & Parquet).
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "erasure-coding-math" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                      <div className="rounded-xl border border-red-500/30 bg-red-950/20 p-3">
                        <div className="font-bold text-red-300 mb-1">3-Way Replication</div>
                        <div className="text-stone-300">Original Object: 1 TB</div>
                        <div className="text-stone-300">Stored on Disk: 3 TB (200% overhead)</div>
                        <div className="text-stone-400 mt-1">Survives: Max 2 drive failures</div>
                      </div>
                      <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3">
                        <div className="font-bold text-emerald-300 mb-1">Reed-Solomon Erasure Coding (RS 8+4)</div>
                        <div className="text-stone-300">Original: 8 Data Chunks</div>
                        <div className="text-stone-300">Parity: 4 Parity Chunks (50% overhead)</div>
                        <div className="text-emerald-400 font-bold mt-1">Survives: Up to 4 simultaneous drive failures!</div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 text-stone-300 text-[10px]">
                      Continuous Background Scrubbing: Recalculates CRC32C/SHA-256 hashes against catalog and self-heals corrupted sectors from surviving parity.
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "redundancy-tiers" && (
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-stone-700 flex justify-between items-center">
                      <div>
                        <span className="text-amber-400 font-bold">LRS (Locally Redundant)</span>
                        <div className="text-stone-400 text-[10px]">3 copies inside a single datacenter</div>
                      </div>
                      <span className="text-xs text-stone-300">Survives disk failure; dies in DC flood</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-orange-500/40 flex justify-between items-center">
                      <div>
                        <span className="text-orange-400 font-bold">ZRS / S3 Standard (Zone Redundant)</span>
                        <div className="text-stone-400 text-[10px]">Synchronous replication across 3 separate AZs</div>
                      </div>
                      <span className="text-xs text-emerald-300 font-bold">Survives entire datacenter destruction</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-blue-500/40 flex justify-between items-center">
                      <div>
                        <span className="text-blue-400 font-bold">GRS (Geo-Redundant)</span>
                        <div className="text-stone-400 text-[10px]">Primary region + async replication to secondary region (500+ miles)</div>
                      </div>
                      <span className="text-xs text-stone-300">Survives continental catastrophe</span>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "replication-vs-backup" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-xl bg-red-950/40 border border-red-500/40 p-3 text-red-200 text-[11px]">
                      <div className="font-bold text-red-300">Why Replication ≠ Backup:</div>
                      Accidental `DROP TABLE users;` or Ransomware write → immediately replicated to secondary region in 5 milliseconds! Both regions now destroyed.
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-orange-400 font-bold">RPO (Data Loss Window):</span> Maximum allowable lost transactions measured in time (e.g., 15 mins).
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-orange-400 font-bold">RTO (Restore Downtime):</span> Maximum allowable clock time to bring service back online (e.g., 60 mins).
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "lifecycle-tiering-funnel" && (
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="rounded-lg bg-orange-950/40 border border-orange-500/40 p-2 text-orange-200 flex justify-between">
                      <span>Day 0-30: S3 Standard / Blob Hot</span>
                      <span className="font-bold">~$23.00 / TB / mo</span>
                    </div>
                    <div className="text-center text-stone-500 text-[10px]">↓ 30 days of inactivity ↓</div>
                    <div className="rounded-lg bg-amber-950/40 border border-amber-500/40 p-2 text-amber-200 flex justify-between">
                      <span>Day 31-90: Standard-IA / Blob Cool</span>
                      <span className="font-bold">~$12.50 / TB / mo (50% saved)</span>
                    </div>
                    <div className="text-center text-stone-500 text-[10px]">↓ 90 days of inactivity ↓</div>
                    <div className="rounded-lg bg-blue-950/40 border border-blue-500/40 p-2 text-blue-200 flex justify-between">
                      <span>Day 91-365: S3 Glacier Flexible</span>
                      <span className="font-bold">~$3.60 / TB / mo (84% saved)</span>
                    </div>
                    <div className="text-center text-stone-500 text-[10px]">↓ 365+ days compliance archival ↓</div>
                    <div className="rounded-lg bg-purple-950/40 border border-purple-500/40 p-2 text-purple-200 flex justify-between">
                      <span>Year 1-7: S3 Glacier Deep Archive</span>
                      <span className="font-bold text-emerald-400">~$0.99 / TB / mo (95% saved!)</span>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "storage-cost-traps" && (
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-red-500/40">
                      <div className="text-red-300 font-bold">128 KB Minimum Billable Size Trap:</div>
                      <div className="text-stone-400 text-[10px]">
                        A 2 KB file moved to S3-IA is billed as 128 KB (64x inflation!). Never move small files to IA.
                      </div>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-amber-500/40">
                      <div className="text-amber-300 font-bold">Minimum Retention Penalty:</div>
                      <div className="text-stone-400 text-[10px]">
                        Glacier requires 90 days, Deep Archive requires 180 days. Deleting early still charges the full period.
                      </div>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-blue-500/40">
                      <div className="text-blue-300 font-bold">Transition API Costs:</div>
                      <div className="text-stone-400 text-[10px]">
                        $0.05 per 1,000 PUT/COPY calls. 100M files = $5,000 upfront API fee. Always bundle into Tar/Parquet!
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "cross-cloud-matrix-table" && (
                  <div className="overflow-x-auto text-[10px] font-mono">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-stone-700 text-stone-400">
                          <th className="py-2">Category</th>
                          <th className="py-2 text-orange-400">AWS</th>
                          <th className="py-2 text-blue-400">Azure</th>
                          <th className="py-2 text-emerald-400">Google Cloud</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-800 text-stone-300">
                        <tr>
                          <td className="py-2 font-bold text-white">Object Storage</td>
                          <td>Amazon S3</td>
                          <td>Azure Blob Storage</td>
                          <td>Cloud Storage</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-bold text-white">Block Storage</td>
                          <td>EBS (gp3 / io2)</td>
                          <td>Managed Disks (Premium v2 / Ultra)</td>
                          <td>Persistent Disk / Hyperdisk</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-bold text-white">Managed File</td>
                          <td>Amazon EFS / FSx</td>
                          <td>Azure Files / NetApp Files</td>
                          <td>Cloud Filestore</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-bold text-white">Deep Archive</td>
                          <td>Glacier Deep Archive</td>
                          <td>Archive Tier</td>
                          <td>Archive Storage</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-bold text-white">AI/HPC Parallel</td>
                          <td>FSx for Lustre</td>
                          <td>Azure Managed Lustre</td>
                          <td>Cloud Parallelstore</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {currentTopic.diagramType === "interactive-storage-calculator" && (
                  <div className="space-y-4">
                    <div className="rounded-xl bg-stone-800 p-4 border border-stone-700">
                      <div className="text-orange-400 font-mono text-xs font-bold mb-2">
                        Simulated Storage Workload: {storageDataTb} TB Total
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        <div>
                          <div className="text-stone-400">100% Hot Baseline:</div>
                          <div className="text-white font-bold">${costBreakdown.allHotBaselineCost.toFixed(2)}/mo</div>
                        </div>
                        <div>
                          <div className="text-stone-400">Tiered Lifecycle Cost:</div>
                          <div className="text-emerald-400 font-bold">${costBreakdown.totalTieredMonthly.toFixed(2)}/mo</div>
                        </div>
                      </div>
                      <div className="mt-2 text-xs font-mono text-stone-300">
                        Estimated Savings: <span className="text-[#f97316] font-bold">${costBreakdown.monthlySavings.toFixed(2)}/mo ({costBreakdown.savingsPercent}%)</span>
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "storage-crisis-simulator" && (
                  <div className="rounded-xl bg-stone-800 p-4 border border-orange-500/40 text-center">
                    <div className="text-orange-400 font-mono text-xs font-bold mb-1">
                      Production Incident Simulator Active
                    </div>
                    <div className="text-stone-300 text-xs font-mono">
                      Scroll to the Interactive Incident Game section below to resolve all 7 scenarios!
                    </div>
                  </div>
                )}
              </div>

              {/* ARCHITECTURAL DECISION CALLOUT */}
              <div className="mt-6 rounded-2xl border border-stone-300 bg-stone-100 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <Lightbulb size={16} className="text-orange-600" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-800">
                    Lead Architect Invariant:
                  </span>
                </div>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {currentTopic.architectDecision}
                </p>
              </div>

              {/* INTERVIEW QUESTIONS ACCORDION */}
              <div className="mt-6 border-t border-[#e7e3da] pt-6">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
                  <HelpCircle size={14} className="text-orange-600" />
                  <span>Senior Cloud Systems Interview Challenge:</span>
                </h3>

                {currentTopic.interviewQuestions.map((qa, idx) => (
                  <div key={idx} className="rounded-2xl border border-orange-200 bg-orange-50/40 p-4">
                    <div className="font-bold text-xs md:text-sm text-[#18181b] mb-2 flex items-start gap-2">
                      <span className="text-orange-600 font-mono font-black">Q:</span>
                      <span>{qa.q}</span>
                    </div>
                    <div className="text-xs md:text-sm leading-relaxed text-stone-700 pl-6 border-l-2 border-orange-400">
                      <span className="font-bold text-stone-900 block mb-1">Architectural Answer:</span>
                      {qa.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* INTERACTIVE STORAGE SELECTOR ENGINE LAB */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Sliders size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#18181b]">
                    Interactive Cloud Storage Decision Engine
                  </h3>
                  <p className="text-xs text-stone-500">
                    Input your workload characteristics to determine the mathematically optimal storage model.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3 mb-6">
                {/* Selector 1: Access Pattern */}
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    1. Workload Access Pattern:
                  </label>
                  <select
                    value={selectorAccessPattern}
                    onChange={(e) => setSelectorAccessPattern(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="database">Single VM Transactional Database (OLTP)</option>
                    <option value="single-vm">Single VM OS Boot / Dedicated Volume</option>
                    <option value="multi-vm">Multiple Concurrent VMs / Container Pods</option>
                    <option value="web-clients">Massive Web Clients / Data Lake / Assets</option>
                  </select>
                </div>

                {/* Selector 2: Protocol */}
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    2. Required Interface Protocol:
                  </label>
                  <select
                    value={selectorProtocol}
                    onChange={(e) => setSelectorProtocol(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="block">Raw Block Device (NVMe / iSCSI)</option>
                    <option value="nfs-posix">POSIX Hierarchical File Share (NFS / SMB)</option>
                    <option value="rest-http">REST API over HTTPS (GET / PUT / DELETE)</option>
                  </select>
                </div>

                {/* Selector 3: Latency */}
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    3. Latency Tolerance:
                  </label>
                  <select
                    value={selectorLatency}
                    onChange={(e) => setSelectorLatency(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="sub-millisecond">Sub-millisecond to ~2ms (Ultra Low)</option>
                    <option value="low-millisecond">3ms - 10ms (Low Network Latency)</option>
                    <option value="minutes-hours">20ms - 100ms+ (Batch / Streaming)</option>
                  </select>
                </div>
              </div>

              {/* RECOMMENDED OUTCOME CARD */}
              <div className="rounded-2xl border border-orange-300 bg-gradient-to-br from-orange-50/80 via-white to-amber-50/80 p-5 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-orange-600" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-800">
                      Architect Recommendation:
                    </span>
                    <span className="rounded-full bg-orange-600 px-3 py-0.5 text-xs font-bold text-white">
                      {storageRecommendation.type}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-stone-500">
                    {storageRecommendation.badge}
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-3 mb-3 text-xs font-mono">
                  <div className="rounded-xl bg-white/90 p-2.5 border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">LATENCY:</span>
                    <span className="font-bold text-stone-800">{storageRecommendation.latency}</span>
                  </div>
                  <div className="rounded-xl bg-white/90 p-2.5 border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">CONCURRENCY:</span>
                    <span className="font-bold text-stone-800">{storageRecommendation.concurrency}</span>
                  </div>
                  <div className="rounded-xl bg-white/90 p-2.5 border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">PROTOCOL:</span>
                    <span className="font-bold text-stone-800">{storageRecommendation.protocol}</span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {storageRecommendation.reason}
                </p>

                <div className="mt-3 text-[11px] font-mono text-stone-500 border-t border-orange-200/60 pt-2">
                  <span className="font-bold text-orange-900">Cost Profile:</span> {storageRecommendation.pricing}
                </div>
              </div>
            </div>

            {/* INTERACTIVE STORAGE LIFECYCLE & TCO CALCULATOR */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <DollarSign size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#18181b]">
                    Interactive Lifecycle TCO & Savings Simulator
                  </h3>
                  <p className="text-xs text-stone-500">
                    Model a real enterprise dataset aging across Hot, Cool, and Glacier tiers. Calculate net monthly savings.
                  </p>
                </div>
              </div>

              {/* SLIDERS */}
              <div className="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">Total Stored Data:</span>
                    <span className="font-bold text-orange-600">{storageDataTb} Terabytes</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="500"
                    step="5"
                    value={storageDataTb}
                    onChange={(e) => setStorageDataTb(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">Monthly Retrieval Volume:</span>
                    <span className="font-bold text-blue-600">{monthlyRetrievalTb} TB / month</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={storageDataTb}
                    step="1"
                    value={monthlyRetrievalTb}
                    onChange={(e) => setMonthlyRetrievalTb(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">% in Hot Standard Tier:</span>
                    <span className="font-bold text-orange-600">{hotPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={hotPct}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setHotPct(val);
                      if (val + coolPct > 100) setCoolPct(100 - val);
                      setArchivePct(Math.max(0, 100 - val - coolPct));
                    }}
                    className="w-full accent-orange-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">% in Glacier Archive:</span>
                    <span className="font-bold text-purple-600">{archivePct}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={archivePct}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setArchivePct(val);
                      if (val + hotPct > 100) setHotPct(100 - val);
                      setCoolPct(Math.max(0, 100 - val - hotPct));
                    }}
                    className="w-full accent-purple-600"
                  />
                </div>
              </div>

              {/* TCO COMPARISON RESULTS */}
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider block mb-1">
                    All-Hot Baseline Cost:
                  </span>
                  <div className="text-2xl font-black text-stone-800 font-mono">
                    ${costBreakdown.allHotBaselineCost.toFixed(2)}
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">If 100% kept in S3 Standard</span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider block mb-1">
                    Lifecycle Tiered Cost:
                  </span>
                  <div className="text-2xl font-black text-emerald-700 font-mono">
                    ${costBreakdown.totalTieredMonthly.toFixed(2)}
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">Storage + Retrieval fees</span>
                </div>

                <div className="rounded-2xl border border-orange-300 bg-orange-500 text-white p-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider block mb-1 text-orange-100">
                    Net Monthly Savings:
                  </span>
                  <div className="text-2xl font-black font-mono">
                    ${costBreakdown.monthlySavings.toFixed(2)}
                  </div>
                  <span className="text-[10px] font-mono text-orange-200">
                    {costBreakdown.savingsPercent}% reduction on storage bill!
                  </span>
                </div>
              </div>
            </div>

            {/* STORAGE INCIDENT CRISIS SIMULATOR GAME */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-white shadow-md">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Storage Crisis Simulator: GameDay Triage
                    </h3>
                    <p className="text-xs text-stone-500">
                      Triage 7 production storage incidents. Test your real-world disaster recovery reflexes.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-1 text-center font-mono text-xs">
                    <span className="text-stone-400 block text-[9px]">TOTAL SCORE</span>
                    <span className="font-bold text-[#f97316]">{gameScore} pts</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={prevGameScenario}
                      disabled={gameScenarioIndex === 0}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-white text-stone-600 hover:text-stone-900 disabled:opacity-40"
                    >
                      <ArrowLeft size={14} />
                    </button>
                    <span className="font-mono text-xs font-bold text-stone-500 px-2">
                      {gameScenarioIndex + 1} / {storageGameScenarios.length}
                    </span>
                    <button
                      onClick={nextGameScenario}
                      disabled={gameScenarioIndex === storageGameScenarios.length - 1}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-white text-stone-600 hover:text-stone-900 disabled:opacity-40"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* CURRENT SCENARIO CARD */}
              {(() => {
                const scenario = storageGameScenarios[gameScenarioIndex];
                const answered = gameHistory[scenario.id];

                return (
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-red-200 bg-red-50/50 p-4">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-800 uppercase tracking-wider mb-1">
                        <AlertTriangle size={15} />
                        <span>{scenario.title}</span>
                      </div>
                      <p className="text-xs md:text-sm text-stone-800 leading-relaxed font-medium">
                        {scenario.context}
                      </p>
                    </div>

                    <div className="font-bold text-sm text-[#18181b]">
                      {scenario.question}
                    </div>

                    {/* OPTIONS */}
                    <div className="space-y-3">
                      {scenario.options.map((option) => {
                        const isSelected = answered === option.id;
                        let btnStyle = "border-stone-200 bg-white hover:border-orange-300 hover:bg-orange-50/30 text-stone-800";

                        if (answered) {
                          if (option.isCorrect) {
                            btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-400";
                          } else if (isSelected && !option.isCorrect) {
                            btnStyle = "border-red-500 bg-red-50 text-red-950 font-bold ring-2 ring-red-400";
                          } else {
                            btnStyle = "border-stone-200 bg-stone-50 text-stone-400 opacity-60";
                          }
                        }

                        return (
                          <button
                            key={option.id}
                            onClick={() => handleGameAnswer(scenario.id, option.id)}
                            className={`w-full text-left rounded-2xl border p-4 text-xs md:text-sm transition-all ${btnStyle}`}
                          >
                            <div className="flex items-start gap-3">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">
                                {option.id}
                              </span>
                              <div className="flex-1">
                                <div>{option.text}</div>
                                {answered && (
                                  <div className="mt-2 text-xs font-medium border-t border-stone-200/60 pt-2">
                                    <span className={option.isCorrect ? "text-emerald-700 font-bold" : "text-red-700 font-bold"}>
                                      {option.verdict} —{" "}
                                    </span>
                                    <span className="text-stone-600">{option.explanation}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* RIGHT 4 COLS: SYLLABUS OUTLINE, KEY INVARIANTS, QUICK JUMP */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* SYLLABUS DIRECTORY CARD */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 border-b border-[#e7e3da] pb-3 mb-4">
                <BookOpen size={16} className="text-orange-600" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-800">
                  Module 4 Topic Index
                </h3>
              </div>

              <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
                {storageTopics.map((topic, index) => {
                  const isSelected = selectedTopic === index;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => {
                        setSelectedTopic(index);
                        window.scrollTo({ top: 300, behavior: "smooth" });
                      }}
                      className={`w-full text-left rounded-xl px-3 py-2 text-xs font-medium transition flex items-center justify-between ${
                        isSelected
                          ? "bg-orange-500 text-white font-bold shadow-xs"
                          : "text-stone-600 hover:bg-orange-50 hover:text-stone-900"
                      }`}
                    >
                      <span className="truncate">{topic.shortTitle}</span>
                      <span className="font-mono text-[10px] opacity-70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SYSTEMS ARCHITECTURE INVARIANTS CHEAT SHEET */}
            <div className="rounded-3xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-xl">
              <div className="flex items-center gap-2 border-b border-stone-800 pb-3 mb-4">
                <ShieldCheck size={18} className="text-[#f97316]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-orange-400">
                  Core Storage Invariants
                </h3>
              </div>

              <div className="space-y-3 font-mono text-[11px] text-stone-300">
                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">Replication ≠ Backup</span>
                  Replication duplicates corruption, rogue drops, and ransomware instantly. Use Versioning + Object Lock.
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">Durability ≠ Availability</span>
                  11 Nines durability means data will never be destroyed; availability means you can reach the API right now.
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">128 KB FinOps Rule</span>
                  Never archive objects smaller than 128 KB to IA or Glacier without bundling them into Parquet/Tar archives first.
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">Compliance Lock is Forever</span>
                  S3 Object Lock in Compliance Mode cannot be bypassed by ANY user, including the AWS root account!
                </div>
              </div>
            </div>

            {/* CURRICULUM ROADMAP BADGE */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm text-center">
              <span className="inline-block rounded-full bg-orange-100 text-orange-700 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                Cloud Architecture Track
              </span>
              <h4 className="text-sm font-bold text-[#18181b]">
                Next in the Program:
              </h4>
              <p className="text-xs text-stone-500 mt-1 mb-4">
                Module 5: Cloud Databases & Distributed Consensus (CAP Theorem, DynamoDB, Aurora & Spanner).
              </p>
              <button
                disabled
                className="w-full rounded-xl bg-stone-100 py-2.5 text-xs font-bold text-stone-400 cursor-not-allowed"
              >
                Module 5 Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
