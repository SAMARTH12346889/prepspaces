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
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
  Sliders,
  AlertTriangle,
  Boxes,
  Copy,
  Activity,
  Award,
  HardDrive,
  BarChart3,
  Clock,
  Gauge,
  Lock,
  Key,
  Radio,
  Split,
  Eye,
  GitBranch,
  Cloud,
  Check,
  DollarSign,
  TrendingUp,
  Share2,
  FileCode,
  Compass,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";
import { SHOW_NOVA_AI } from "../config/features";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 10: MULTI-CLOUD ARCHITECTURE                        */
/* Week 20: Designing Systems that Span AWS, Azure, and Google Cloud          */
/* -------------------------------------------------------------------------- */

export default function CloudMultiCloud() {
  const { data: moduleData, loading, error, reload } = useModuleContent("cloud", "multicloud");
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Tool 1: Multi-Cloud Dependency & Common-Mode Failure Analyzer State
  const [selectedArchPattern, setSelectedArchPattern] = useState("active-passive");
  const [sharedIdp, setSharedIdp] = useState(true);
  const [sharedDns, setSharedDns] = useState(true);
  const [sharedRegistry, setSharedRegistry] = useState(false);
  const [dataSyncStrategy, setDataSyncStrategy] = useState("event-driven");
  const [observabilityStack, setObservabilityStack] = useState("opentelemetry");

  // Tool 2: Cross-Cloud Egress Cost & Failover RPO/RTO Calculator State
  const [crossCloudTransferGb, setCrossCloudTransferGb] = useState(15000); // 15,000 GB = 15 TB
  const [trafficCallPattern, setTrafficCallPattern] = useState("event-driven"); // "sync-api", "event-driven", "batch-nightly"
  const [trafficSteeringMethod, setTrafficSteeringMethod] = useState("dns-steered"); // "dns-steered", "anycast-proxy"
  const [dnsTtlSeconds, setDnsTtlSeconds] = useState(60);
  const [replicationLagSeconds, setReplicationLagSeconds] = useState(15);

  // Tool 3: Multi-Cloud GameDay Simulator State (10 Scenarios from Section 74)
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  // Tool 4: Mastery Test State
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Tool 1: Calculations for Common-Mode Failure & Dependency Analysis
  const dependencyAnalysis = useMemo(() => {
    let commonModeRisk = 20; // baseline
    let portabilityScore = 75;
    let complexityRating = "Moderate";
    let capClassification = "AP (Available / Partition Tolerant with Eventual Consistency)";
    let criticalWarnings = [];

    if (selectedArchPattern === "active-active") {
      commonModeRisk += 25;
      portabilityScore += 15;
      complexityRating = "Extremely High (Distributed Systems Research)";
      if (dataSyncStrategy === "sync-multimaster") {
        capClassification = "CP attempt (Split-brain hazard during cross-cloud network partitions)";
        criticalWarnings.push(
          "Synchronous multi-master across clouds violates the CAP theorem under network partitions. Latency spikes and split-brain conflicts will occur."
        );
      }
    } else if (selectedArchPattern === "active-passive") {
      complexityRating = "Manageable (Production-Grade)";
      portabilityScore = 80;
    } else if (selectedArchPattern === "best-of-breed") {
      complexityRating = "Moderate (Specialized services)";
      portabilityScore = 45;
      criticalWarnings.push(
        "Best-of-breed introduces deep proprietary service lock-in (e.g., BigQuery, Cosmos DB, DynamoDB), lowering workload portability."
      );
    } else if (selectedArchPattern === "naive-shared") {
      commonModeRisk += 50;
      complexityRating = "High Risk";
      criticalWarnings.push(
        "Single points of failure exist at the management plane. If the shared component dies, all 3 clouds fail simultaneously."
      );
    }

    if (sharedIdp) {
      commonModeRisk += 20;
      criticalWarnings.push(
        "Single IdP dependency: If Okta/Entra suffers a global outage, operators cannot access consoles and workloads cannot refresh cross-cloud tokens."
      );
    }

    if (sharedDns) {
      commonModeRisk += 15;
      criticalWarnings.push(
        "Single DNS provider: If the primary DNS control plane or Anycast edge fails, users cannot reach any of the three cloud endpoints."
      );
    }

    if (sharedRegistry) {
      commonModeRisk += 20;
      criticalWarnings.push(
        "Single container registry: If AWS ECR goes down, Azure AKS and GCP GKE auto-scalers cannot pull container images to handle failover."
      );
    }

    if (observabilityStack === "vendor-siloed") {
      portabilityScore -= 20;
    } else {
      portabilityScore += 10;
    }

    commonModeRisk = Math.min(100, commonModeRisk);
    portabilityScore = Math.min(100, Math.max(10, portabilityScore));

    return {
      commonModeRisk,
      portabilityScore,
      complexityRating,
      capClassification,
      criticalWarnings,
    };
  }, [selectedArchPattern, sharedIdp, sharedDns, sharedRegistry, dataSyncStrategy, observabilityStack]);

  // Tool 2: Cross-Cloud Egress & Failover RPO/RTO Calculations
  const egressCalculations = useMemo(() => {
    // Average internet / inter-cloud egress cost is ~$0.08 to $0.09 per GB
    const ratePerGb = 0.085;
    let monthlyEgressCost = crossCloudTransferGb * ratePerGb;

    if (trafficCallPattern === "sync-api") {
      // Synchronous API calls amplify payload by request/response chatty overhead (approx 2.5x)
      monthlyEgressCost *= 2.5;
    } else if (trafficCallPattern === "batch-nightly") {
      // Compressed columnar formats save ~60% bandwidth
      monthlyEgressCost *= 0.4;
    }

    let calculatedRtoSeconds = 0;
    let rtoDescription = "";

    if (trafficSteeringMethod === "dns-steered") {
      // DNS failover RTO = Health Check detect (30s) + TTL cache duration + resolver cache skew (~30s)
      calculatedRtoSeconds = 30 + dnsTtlSeconds + 30;
      rtoDescription = `DNS convergence (~${calculatedRtoSeconds}s): Subject to recursive resolver TTL caching, client browser DNS cache, and TCP connection persistence.`;
    } else {
      // Anycast Proxy / L7 Edge = sub-second to 5s failover
      calculatedRtoSeconds = 4;
      rtoDescription = "Global Anycast L7 Proxy failover (~4s): Immediate health check reroute. However, the proxy layer itself is a shared cross-cloud dependency.";
    }

    let calculatedRpoSeconds = 0;
    let rpoDescription = "";

    if (trafficCallPattern === "batch-nightly") {
      calculatedRpoSeconds = 86400; // 24 hours
      rpoDescription = "Daily snapshot export: RPO is up to 24 hours of lost transactions in the event of an unrecoverable disaster.";
    } else if (trafficCallPattern === "event-driven") {
      calculatedRpoSeconds = replicationLagSeconds;
      rpoDescription = `Event log stream: RPO bounded by average replication consumer lag (~${replicationLagSeconds} seconds).`;
    } else {
      calculatedRpoSeconds = Math.max(1, Math.round(replicationLagSeconds * 0.4));
      rpoDescription = `Synchronous / semi-sync replication: RPO is ~${calculatedRpoSeconds} seconds, but susceptible to cross-cloud WAN jitter.`;
    }

    return {
      monthlyEgressCost: Math.round(monthlyEgressCost),
      calculatedRtoSeconds,
      rtoDescription,
      calculatedRpoSeconds,
      rpoDescription,
    };
  }, [crossCloudTransferGb, trafficCallPattern, trafficSteeringMethod, dnsTtlSeconds, replicationLagSeconds]);

  // Tool 3: Multi-Cloud GameDay Simulator Scenarios (10 Scenarios from Section 74)
  const gameScenarios = moduleData?.scenarios || [];

  // Tool 4: Mastery Test Questions & Answers (Section 78)
  const masteryQuestions = moduleData?.quiz || [];

  // Syllabus Topics (12 Topics covering Week 20)
  const topics = moduleData?.topics || [];

  const currentTopic = topics[selectedTopic] || topics[0] || {};

    if (loading) {
    return <ModuleLoadingSkeleton track="cloud" currentModuleId="multicloud" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="cloud" currentModuleId="multicloud" error={error} onRetry={reload} />;
  }
return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans selection:bg-orange-500/20 selection:text-orange-900">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-orange-300/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* TOP HEADER */}
        <ModuleNav
          track="cloud"
          currentModuleId="multicloud"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Multi-Cloud AI"
        />

        {/* HERO HEADER */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl">
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-400 mb-4">
              <Globe size={13} />
              <span>Multi-Cloud Engineering</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white">
              Multi-Cloud Architecture
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-stone-300">
              Stop thinking in terms of <span className="text-orange-400 font-semibold">"Which cloud service should I use?"</span> and start thinking in terms of{" "}
              <span className="text-white font-semibold">"What must remain true even when the underlying cloud provider changes or disappears?"</span> Designing systems that span AWS, Azure, and Google Cloud with Workload Identity Federation, Non-Overlapping CIDRs, Global Traffic Steering, and Disaster Recovery.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-400">
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Level 1 to 4 Multi-Cloud
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> OIDC Workload Federation
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> OpenTelemetry Unified SRE
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Tested Disaster Recovery
              </span>
            </div>
          </div>
        </div>

        {/* EMBEDDED AI TUTOR */}
        {SHOW_NOVA_AI && showAiTutor && (
          <div className="mb-10 overflow-hidden rounded-3xl border border-orange-300 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#e7e3da]">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#18181b]">Nova Multi-Cloud Enterprise Architect</h3>
                  <p className="text-xs text-stone-500">Trained on NIST SP 500-332, CNCF OpenTelemetry, AWS, Azure & Google Cloud docs</p>
                </div>
              </div>
              <button
                onClick={() => setShowAiTutor(false)}
                className="text-xs font-mono text-stone-400 hover:text-stone-700"
              >
                ✕ Close
              </button>
            </div>
            <div className="mt-4">
              <LearningRo module="multicloud" />
            </div>
          </div>
        )}

        {/* MAIN LAYOUT: SYLLABUS TOPICS (LEFT) + DEEP CONTENT (RIGHT) */}
        <div className="grid gap-8 lg:grid-cols-12 mb-16">
          {/* TOPIC SELECTOR (COL-4) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-xs">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-4 px-2">
                Multi-Cloud Syllabus • 12 Topics
              </h3>
              <div className="space-y-1.5">
                {topics.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTopic(idx)}
                    className={`w-full text-left rounded-2xl px-4 py-3 text-xs transition flex flex-col gap-1 ${
                      selectedTopic === idx
                        ? "bg-[#18181b] text-white font-bold shadow-md shadow-black/10"
                        : "text-stone-700 hover:bg-[#f2efe9] font-medium"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-[10px] uppercase tracking-wider ${selectedTopic === idx ? "text-orange-400" : "text-stone-400"}`}>
                        Topic {t.id} • {t.week}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${selectedTopic === idx ? "bg-stone-800 text-orange-300" : "bg-stone-100 text-stone-600"}`}>
                        {t.badge}
                      </span>
                    </div>
                    <span className="font-bold leading-snug">{t.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CURRICULUM ROADMAP BADGE */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs text-center">
              <span className="inline-block rounded-full bg-orange-100 text-orange-700 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                Cloud Architecture Track
              </span>
              <h4 className="text-sm font-bold text-[#18181b]">Curriculum Milestone</h4>
              <p className="text-xs text-stone-500 mt-1 mb-4">
                Module 10 synthesizes Foundations, VPCs, Compute, Storage, Databases, Architecture, AWS, Azure, and GCP into high-resilience multi-cloud systems.
              </p>
              <button
                onClick={() => navigate("/learning")}
                className="w-full rounded-xl bg-orange-500 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-orange-600 transition"
              >
                Curriculum Overview
              </button>
            </div>
          </div>

          {/* MAIN TOPIC CONTENT (COL-8) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
              {/* TOPIC HEADER */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#e7e3da]">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    {currentTopic.week} • {currentTopic.badge}
                  </span>
                  <h2 className="text-2xl font-black text-[#18181b] mt-1">{currentTopic.title}</h2>
                  <p className="text-xs font-medium text-stone-500 mt-1">{currentTopic.focus}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    disabled={selectedTopic === 0}
                    onClick={() => setSelectedTopic((prev) => Math.max(0, prev - 1))}
                    className="p-2 rounded-xl border border-[#e7e3da] text-stone-600 hover:bg-[#f6f4ee] disabled:opacity-30 disabled:hover:bg-transparent"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <span className="font-mono text-xs font-bold text-stone-400">
                    {selectedTopic + 1} / {topics.length}
                  </span>
                  <button
                    disabled={selectedTopic === topics.length - 1}
                    onClick={() => setSelectedTopic((prev) => Math.min(topics.length - 1, prev + 1))}
                    className="p-2 rounded-xl border border-[#e7e3da] text-stone-600 hover:bg-[#f6f4ee] disabled:opacity-30 disabled:hover:bg-transparent"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* THEORY DESCRIPTION */}
              <div className="mt-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Theoretical Foundations & Architectural Rationale
                </h4>
                <p className="text-sm leading-relaxed text-stone-700 bg-stone-50/70 p-5 rounded-2xl border border-stone-200/60">
                  {currentTopic.theory}
                </p>
              </div>

              {/* ARCHITECTURE DIAGRAM */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                    Architectural Topologies & System Invariants
                  </h4>
                  <span className="font-mono text-[10px] text-stone-400">ASCII Architecture Blueprint</span>
                </div>
                <pre className="overflow-x-auto rounded-2xl bg-[#18181b] p-5 font-mono text-xs leading-relaxed text-stone-200 shadow-inner">
                  {currentTopic.diagram}
                </pre>
              </div>

              {/* KEY TAKEAWAYS */}
              <div className="mt-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-3">
                  Production Invariants & Core Takeaways
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {currentTopic.keyTakeaways.map((takeaway, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-2xl border border-[#e7e3da] bg-[#faf8f5] p-3.5 text-xs text-stone-700 font-medium leading-snug"
                    >
                      <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CODE / CONFIGURATION EXAMPLE */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                    Production Implementation Blueprint
                  </h4>
                  <button
                    onClick={() => copyCode(currentTopic.codeExample, currentTopic.id)}
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-orange-600 hover:text-orange-700"
                  >
                    <Copy size={13} />
                    <span>{copiedCodeId === currentTopic.id ? "Copied!" : "Copy Snippet"}</span>
                  </button>
                </div>
                <pre className="overflow-x-auto rounded-2xl bg-[#1c1c1f] p-4 font-mono text-xs text-orange-300/90 shadow-inner border border-stone-800">
                  {currentTopic.codeExample}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* INTERACTIVE LAB 1: MULTI-CLOUD DEPENDENCY & COMMON-MODE FAILURE ANALYZER    */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-orange-100 px-2.5 py-1 font-mono text-xs font-bold text-orange-700 uppercase">
              Interactive Lab 1
            </span>
            <span className="font-mono text-xs text-stone-400">Architecture Tradeoff Engine</span>
          </div>
          <h3 className="text-2xl font-black text-[#18181b]">
            Multi-Cloud Dependency & Common-Mode Failure Analyzer
          </h3>
          <p className="mt-2 text-sm text-stone-600 max-w-3xl">
            Configure your multi-cloud architecture topology and dependency graph. Analyze how shared components (central IdPs, single DNS providers, and container registries) introduce common-mode single points of failure that undermine multi-cloud resilience.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* CONTROLS (COL-5) */}
            <div className="lg:col-span-5 space-y-5 bg-[#faf8f5] p-6 rounded-2xl border border-[#e7e3da]">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-2">
                  1. Multi-Cloud Topology Pattern
                </label>
                <div className="space-y-2">
                  {[
                    { id: "active-passive", label: "Active-Passive (Primary AWS, Warm Azure DR, GCP Analytics)" },
                    { id: "active-active", label: "Active-Active Tri-Cloud (AWS + Azure + GCP all serving)" },
                    { id: "best-of-breed", label: "Best-of-Breed / Functional Multi-Cloud" },
                    { id: "naive-shared", label: "Naive Multi-Cloud (Shared single DNS, single IdP, single ECR)" },
                  ].map((pat) => (
                    <button
                      key={pat.id}
                      onClick={() => setSelectedArchPattern(pat.id)}
                      className={`w-full text-left rounded-xl p-3 text-xs font-bold transition flex items-center justify-between ${
                        selectedArchPattern === pat.id
                          ? "bg-stone-900 text-white shadow-sm"
                          : "bg-white text-stone-700 border border-stone-200 hover:border-orange-300"
                      }`}
                    >
                      <span>{pat.label}</span>
                      {selectedArchPattern === pat.id && <Check size={14} className="text-orange-400" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-2">
                  2. Dependency Graph Configuration
                </label>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 text-xs font-semibold cursor-pointer">
                    <span>Centralized Corporate IdP (Single Okta/Entra)</span>
                    <input
                      type="checkbox"
                      checked={sharedIdp}
                      onChange={(e) => setSharedIdp(e.target.checked)}
                      className="rounded accent-orange-500 h-4 w-4"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 text-xs font-semibold cursor-pointer">
                    <span>Single Global DNS Provider (Only Route 53 or Cloudflare)</span>
                    <input
                      type="checkbox"
                      checked={sharedDns}
                      onChange={(e) => setSharedDns(e.target.checked)}
                      className="rounded accent-orange-500 h-4 w-4"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 text-xs font-semibold cursor-pointer">
                    <span>Single Container Registry (Only AWS ECR)</span>
                    <input
                      type="checkbox"
                      checked={sharedRegistry}
                      onChange={(e) => setSharedRegistry(e.target.checked)}
                      className="rounded accent-orange-500 h-4 w-4"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-2">
                  3. State Synchronization Method
                </label>
                <select
                  value={dataSyncStrategy}
                  onChange={(e) => setDataSyncStrategy(e.target.value)}
                  className="w-full rounded-xl border border-stone-200 bg-white p-2.5 text-xs font-semibold text-stone-800"
                >
                  <option value="event-driven">Event-Driven Asynchronous (Kafka / Pub/Sub CDC Log)</option>
                  <option value="single-master-rep">Single Master Primary with Asynchronous Read Replicas</option>
                  <option value="sync-multimaster">Synchronous Multi-Master across WAN (Split-Brain Hazard)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-2">
                  4. Observability Integration
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setObservabilityStack("opentelemetry")}
                    className={`flex-1 rounded-xl py-2 text-xs font-bold border transition ${
                      observabilityStack === "opentelemetry"
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white text-stone-700 border-stone-200 hover:border-orange-300"
                    }`}
                  >
                    OpenTelemetry (CNCF)
                  </button>
                  <button
                    onClick={() => setObservabilityStack("vendor-siloed")}
                    className={`flex-1 rounded-xl py-2 text-xs font-bold border transition ${
                      observabilityStack === "vendor-siloed"
                        ? "bg-stone-900 text-white border-stone-900"
                        : "bg-white text-stone-700 border-stone-200 hover:border-orange-300"
                    }`}
                  >
                    Vendor Siloed
                  </button>
                </div>
              </div>
            </div>

            {/* RESULTS & AUDIT (COL-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Common-Mode Risk Score</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className={`text-4xl font-black ${
                      dependencyAnalysis.commonModeRisk > 60
                        ? "text-rose-400"
                        : dependencyAnalysis.commonModeRisk > 35
                        ? "text-amber-400"
                        : "text-emerald-400"
                    }`}>
                      {dependencyAnalysis.commonModeRisk}%
                    </span>
                    <span className="text-xs text-stone-400">
                      {dependencyAnalysis.commonModeRisk > 60 ? "Critical Hazard" : dependencyAnalysis.commonModeRisk > 35 ? "Elevated" : "Resilient"}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-stone-300">
                    Probability that a single external provider or control-plane outage collapses all clouds.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Portability Rating</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-4xl font-black text-orange-400">
                      {dependencyAnalysis.portabilityScore}%
                    </span>
                    <span className="text-xs text-stone-400">OCI & Kubernetes</span>
                  </div>
                  <p className="mt-2 text-xs text-stone-300">
                    Workload exit mobility without architectural re-engineering.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f5] p-5 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="font-mono text-xs font-bold text-stone-600 uppercase">Operational Complexity</span>
                  <span className="font-mono text-xs font-bold text-orange-600">{dependencyAnalysis.complexityRating}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="font-mono text-xs font-bold text-stone-600 uppercase">CAP Theorem Status</span>
                  <span className="font-mono text-xs font-bold text-stone-800">{dependencyAnalysis.capClassification}</span>
                </div>
              </div>

              {/* CRITICAL WARNINGS */}
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
                  <AlertTriangle size={15} className="text-amber-500" />
                  <span>Dependency Architecture Audit & Critical Findings</span>
                </h4>
                {dependencyAnalysis.criticalWarnings.length === 0 ? (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs font-bold text-emerald-800 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>Clean Architecture: All critical dependencies have independent multi-cloud mirrors and fallback paths.</span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {dependencyAnalysis.criticalWarnings.map((warn, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-amber-200 bg-amber-50/70 p-3.5 text-xs text-amber-900 leading-snug flex items-start gap-2.5"
                      >
                        <ShieldAlert size={16} className="text-amber-600 shrink-0 mt-0.5" />
                        <span>{warn}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* INTERACTIVE LAB 2: CROSS-CLOUD EGRESS & FAILOVER RPO/RTO CALCULATOR         */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-orange-100 px-2.5 py-1 font-mono text-xs font-bold text-orange-700 uppercase">
              Interactive Lab 2
            </span>
            <span className="font-mono text-xs text-stone-400">FinOps & Resilience Simulator</span>
          </div>
          <h3 className="text-2xl font-black text-[#18181b]">
            Cross-Cloud Egress Cost & Failover RPO/RTO Calculator
          </h3>
          <p className="mt-2 text-sm text-stone-600 max-w-3xl">
            Simulate the financial and operational impact of moving data between AWS, Azure, and Google Cloud. Compare how DNS TTL caching vs Global Anycast Proxies alters your real-world Recovery Time Objective (RTO) and Recovery Point Objective (RPO).
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* SLIDERS & CONTROLS (COL-6) */}
            <div className="lg:col-span-6 space-y-6 bg-[#faf8f5] p-6 rounded-2xl border border-[#e7e3da]">
              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                  <span>MONTHLY CROSS-CLOUD DATA TRANSFER:</span>
                  <span className="text-orange-600">{(crossCloudTransferGb / 1000).toFixed(1)} TB ({crossCloudTransferGb.toLocaleString()} GB)</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={100000}
                  step={1000}
                  value={crossCloudTransferGb}
                  onChange={(e) => setCrossCloudTransferGb(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-1">
                  <span>1 TB / mo</span>
                  <span>50 TB / mo</span>
                  <span>100 TB / mo</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-2">
                  Traffic Communication Pattern
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "sync-api", label: "Sync REST API (Chatty 2.5x)" },
                    { id: "event-driven", label: "Event Stream (Kafka / Pub/Sub)" },
                    { id: "batch-nightly", label: "Batch Parquet (Compressed 60%)" },
                  ].map((pat) => (
                    <button
                      key={pat.id}
                      onClick={() => setTrafficCallPattern(pat.id)}
                      className={`rounded-xl p-2.5 text-[11px] font-bold border transition text-center ${
                        trafficCallPattern === pat.id
                          ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                          : "bg-white text-stone-700 border-stone-200 hover:border-orange-300"
                      }`}
                    >
                      {pat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-2">
                  Global Traffic Steering Layer
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTrafficSteeringMethod("dns-steered")}
                    className={`rounded-xl p-3 text-xs font-bold border transition ${
                      trafficSteeringMethod === "dns-steered"
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white text-stone-700 border-stone-200 hover:border-orange-300"
                    }`}
                  >
                    DNS-Based (Route 53 / Traffic Mgr)
                  </button>
                  <button
                    onClick={() => setTrafficSteeringMethod("anycast-proxy")}
                    className={`rounded-xl p-3 text-xs font-bold border transition ${
                      trafficSteeringMethod === "anycast-proxy"
                        ? "bg-stone-900 text-white border-stone-900"
                        : "bg-white text-stone-700 border-stone-200 hover:border-orange-300"
                    }`}
                  >
                    Global Anycast Proxy (L7 Edge)
                  </button>
                </div>
              </div>

              {trafficSteeringMethod === "dns-steered" && (
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                    <span>DNS TIME-TO-LIVE (TTL):</span>
                    <span className="text-orange-600">{dnsTtlSeconds} SECONDS</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={300}
                    step={10}
                    value={dnsTtlSeconds}
                    onChange={(e) => setDnsTtlSeconds(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-1">
                    <span>10s (High DNS QPS Cost)</span>
                    <span>60s (Standard)</span>
                    <span>300s (5 Mins)</span>
                  </div>
                </div>
              )}

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                  <span>AVERAGE REPLICATION LAG:</span>
                  <span className="text-orange-600">{replicationLagSeconds} SECONDS</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={120}
                  step={1}
                  value={replicationLagSeconds}
                  onChange={(e) => setReplicationLagSeconds(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
              </div>
            </div>

            {/* LIVE TELEMETRY OUTPUT (COL-6) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Estimated Egress Cost</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-orange-400">
                      ${egressCalculations.monthlyEgressCost.toLocaleString()}
                    </span>
                    <span className="text-xs text-stone-400">/ month</span>
                  </div>
                  <span className="font-mono text-[11px] text-stone-400 block mt-1">
                    ~${(egressCalculations.monthlyEgressCost * 12).toLocaleString()} / year network transfer fee
                  </span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Calculated Failover RTO</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">
                      {egressCalculations.calculatedRtoSeconds}s
                    </span>
                    <span className="text-xs text-stone-400">to reroute</span>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-400 block mt-1">
                    Recovery Time Objective
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f5] p-5 space-y-4">
                <div>
                  <h4 className="font-mono text-xs font-bold text-stone-700 uppercase mb-1">
                    RTO Analysis (Traffic Convergence)
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {egressCalculations.rtoDescription}
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-200">
                  <h4 className="font-mono text-xs font-bold text-stone-700 uppercase mb-1">
                    RPO Analysis (Data Loss Window: ~{egressCalculations.calculatedRpoSeconds}s)
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {egressCalculations.rpoDescription}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5">
                <h4 className="font-mono text-xs font-bold text-orange-900 uppercase flex items-center gap-1.5 mb-2">
                  <Lightbulb size={16} className="text-orange-600" />
                  <span>FinOps & Latency Optimization Rule</span>
                </h4>
                <p className="text-xs text-orange-950 leading-relaxed">
                  Moving data across clouds is 10x more expensive than moving compute. To prevent egress cost explosion, always compress cross-cloud payloads with Snappy/Parquet, maintain localized read replicas, and never perform synchronous cross-cloud joins in critical transactional paths.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* INTERACTIVE LAB 3: MULTI-CLOUD GAMEDAY SIMULATOR (10 SCENARIOS)            */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#27272a] bg-[#18181b] p-6 md:p-10 text-white shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-orange-500/20 border border-orange-500/30 px-2.5 py-1 font-mono text-xs font-bold text-orange-400 uppercase">
                  Interactive Lab 3
                </span>
                <span className="font-mono text-xs text-stone-400">SRE Chaos Drills</span>
              </div>
              <h3 className="text-2xl font-black text-white mt-1">
                Multi-Cloud GameDay Simulator
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                10 Production Failure Scenarios testing common-mode outages, network partitions, and failover runbooks (Section 74).
              </p>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs text-stone-400">Current Score</span>
              <div className="text-2xl font-black text-orange-400">{gameScore} / 10</div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* SCENARIO SELECTOR (COL-4) */}
            <div className="lg:col-span-4 space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                GameDay Scenarios (A to J)
              </span>
              <div className="space-y-1.5">
                {gameScenarios.map((sc, idx) => (
                  <button
                    key={sc.id}
                    onClick={() => {
                      setGameScenarioIndex(idx);
                      setGameSelection(gameHistory[idx] ?? null);
                    }}
                    className={`w-full text-left rounded-xl px-3.5 py-2.5 text-xs font-bold transition flex items-center justify-between ${
                      gameScenarioIndex === idx
                        ? "bg-orange-500 text-white shadow-sm"
                        : "bg-stone-900/80 text-stone-300 hover:bg-stone-800"
                    }`}
                  >
                    <span className="truncate">{sc.title.split(":")[0]}</span>
                    {gameHistory[idx] !== undefined && (
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-stone-200">
                        {gameScenarios[idx].options[gameHistory[idx]].correct ? "PASS" : "FAIL"}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* SCENARIO DETAILS & CHOICES (COL-8) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6">
                <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
                  Incident {gameScenarioIndex + 1} of 10
                </span>
                <h4 className="text-xl font-black text-white mt-1">
                  {gameScenarios[gameScenarioIndex].title}
                </h4>
                <p className="mt-3 text-sm text-stone-300 leading-relaxed bg-stone-950 p-4 rounded-xl border border-stone-800">
                  {gameScenarios[gameScenarioIndex].context}
                </p>

                <div className="mt-6 space-y-3">
                  <span className="font-mono text-xs font-bold uppercase text-stone-400 block">
                    Choose Architectural Response:
                  </span>
                  {gameScenarios[gameScenarioIndex].options.map((opt, optIdx) => (
                    <button
                      key={optIdx}
                      onClick={() => {
                        setGameSelection(optIdx);
                        if (gameHistory[gameScenarioIndex] === undefined) {
                          setGameHistory((prev) => ({ ...prev, [gameScenarioIndex]: optIdx }));
                          if (opt.correct) setGameScore((prev) => prev + 1);
                        }
                      }}
                      className={`w-full text-left rounded-xl p-4 text-xs font-bold border transition ${
                        gameSelection === optIdx
                          ? opt.correct
                            ? "bg-emerald-950/80 border-emerald-500 text-emerald-200"
                            : "bg-rose-950/80 border-rose-500 text-rose-200"
                          : "bg-stone-950 border-stone-800 text-stone-300 hover:border-orange-500/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{opt.label}</span>
                        {gameSelection === optIdx && (
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/60">
                            {opt.correct ? "CORRECT" : "INCORRECT"}
                          </span>
                        )}
                      </div>
                      {gameSelection === optIdx && (
                        <p className="mt-2 text-xs font-normal text-stone-300 pt-2 border-t border-stone-800">
                          {opt.explanation}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* SECTION 4: WEEK 20 MASTERY TEST & ARCHITECTURAL SELF-ASSESSMENT             */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-orange-100 px-2.5 py-1 font-mono text-xs font-bold text-orange-700 uppercase">
              Mastery Verification
            </span>
            <span className="font-mono text-xs text-stone-400">Section 78 Questions</span>
          </div>
          <h3 className="text-2xl font-black text-[#18181b]">
            Multi-Cloud Mastery Test: Multi-Cloud Architect Interview Questions
          </h3>
          <p className="mt-2 text-sm text-stone-600 max-w-3xl">
            12 deep architectural questions designed to verify your understanding of multi-cloud tradeoffs, failure domains, workload identity, CAP theorem constraints, and disaster recovery.
          </p>

          <div className="mt-8 space-y-3">
            {masteryQuestions.map((mq, idx) => {
              const isOpen = openMasteryIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200 bg-[#faf8f5] overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenMasteryIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between text-xs sm:text-sm font-bold text-stone-800 hover:text-orange-600"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-orange-600">Q{idx + 1}.</span>
                      <span>{mq.q}</span>
                    </span>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 bg-white">
                      <span className="font-mono text-[10px] font-bold uppercase text-orange-600 block mb-1">
                        Architectural Answer & Deep Explanation:
                      </span>
                      {mq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CURRICULUM FOOTER */}
        <div className="rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
              Cloud Architecture Track
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Modules 1 through 10 Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              From Cloud Foundations, VPCs, and Compute to Distributed Storage, Databases, Large-Scale Architecture, Deep AWS, Deep Azure, Deep Google Cloud, and Multi-Cloud Engineering. Next: Zero Trust Cloud Security.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/cloud/security")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition"
            >
              Next: Module 11 Security →
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-300 hover:text-white hover:bg-stone-700 transition"
            >
              Curriculum Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
