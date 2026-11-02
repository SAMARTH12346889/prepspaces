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
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";
import { SHOW_NOVA_AI } from "../config/features";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 9: GOOGLE CLOUD ARCHITECTURE                        */
/* Weeks 17–19: Primitives to Distributed Data Architecture                   */
/* GCP 6 Pillars, Global VPC, Regional Subnets, Workload Identity Fed,       */
/* Compute Engine MIGs, Cloud Storage, Cloud SQL, BigQuery Slots & Cost,      */
/* Pub/Sub Decoupling & Replay, Cloud Run Concurrency, GKE Autopilot,         */
/* Global External Load Balancing, Cloud Monitoring SLOs, Secret Manager,     */
/* 3-Cloud Translation Matrix & Production GlobalCommerce GCP Blueprint       */
/* -------------------------------------------------------------------------- */

export default function CloudGCP() {
  const { data: moduleData, loading, error, reload } = useModuleContent("cloud", "gcp");
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Tool 1: GCP Service Matcher State
  const [selectedWorkloadCategory, setSelectedWorkloadCategory] = useState("compute");
  const [selectedRequirement, setSelectedRequirement] = useState("container-serverless");

  // Tool 2: BigQuery Slot & Partition Scan Cost Simulator State
  const [tableSizeTb, setTableSizeTb] = useState(50); // 50 TB Table
  const [queryStrategy, setQueryStrategy] = useState("partitioned-clustered"); // "unpartitioned-full", "partitioned-only", "partitioned-clustered"
  const [queriesPerDay, setQueriesPerDay] = useState(120);
  const [pricingModel, setPricingModel] = useState("on-demand"); // "on-demand", "edition-reservation"

  // Tool 3: GCP GameDay Failure Simulator State (8 Scenarios from Sections 59–66)
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Tool 2: BigQuery Math & Cost Calculations
  const bigqueryCalculations = useMemo(() => {
    let scanFraction = 1.0;
    let strategyNote = "";
    let riskLevel = "safe";

    if (queryStrategy === "unpartitioned-full") {
      scanFraction = 1.0; // Scans 100% of bytes
      strategyNote =
        "DANGER: Full table scan! Every single query reads every byte on disk. Classic BigQuery Cost Explosion failure mode (Section 63).";
      riskLevel = "critical";
    } else if (queryStrategy === "partitioned-only") {
      scanFraction = 0.033; // Scans roughly 1 day out of 30 days = ~3.3%
      strategyNote =
        "Good: Date partitioning prunes 96.7% of table bytes. Query engine reads only the targeted daily partition.";
      riskLevel = "moderate";
    } else if (queryStrategy === "partitioned-clustered") {
      scanFraction = 0.005; // Scans 0.5% due to clustering on customer_id/product_id
      strategyNote =
        "Optimal: Partition pruning + Clustering skips 99.5% of columnar blocks. Sub-second response time and minimal billing footprint.";
      riskLevel = "safe";
    }

    const bytesScannedPerQueryTb = Number((tableSizeTb * scanFraction).toFixed(3));
    const totalDailyScannedTb = Number((bytesScannedPerQueryTb * queriesPerDay).toFixed(2));
    const totalMonthlyScannedTb = Number((totalDailyScannedTb * 30).toFixed(2));

    // Pricing models: On-demand is $6.25 per TB scanned
    let monthlyCostEstimate = 0;
    let costSummary = "";

    if (pricingModel === "on-demand") {
      monthlyCostEstimate = Math.round(totalMonthlyScannedTb * 6.25);
      costSummary = `$6.25 / TB scanned × ${totalMonthlyScannedTb.toLocaleString()} TB = $${monthlyCostEstimate.toLocaleString()}/mo`;
    } else {
      // Standard / Enterprise Slot Reservation (e.g. 100 Baseline Slots ~$2,000/mo flat)
      monthlyCostEstimate = 2000;
      costSummary = "Flat Edition Slot Reservation: Predictable $2,000/mo regardless of query scan volume.";
    }

    return {
      scanFraction,
      strategyNote,
      riskLevel,
      bytesScannedPerQueryTb,
      totalDailyScannedTb,
      totalMonthlyScannedTb,
      monthlyCostEstimate,
      costSummary,
    };
  }, [tableSizeTb, queryStrategy, queriesPerDay, pricingModel]);

  // Decision Tree Matcher Data
  const gcpDecisionOptions = {
    compute: [
      {
        id: "container-serverless",
        title: "Containerized Microservices & Web APIs with Direct VPC Egress",
        service: "Cloud Run (Fully Managed)",
        why: "Runs any Docker container, scales down to zero, supports per-instance concurrency up to 1,000, and uses Direct VPC egress.",
        tradeoff: "Cold start latencies on scale-out; rapid scaling can saturate backend Cloud SQL database connection pools.",
        antiPattern: "Using Serverless VPC Access connectors when Direct VPC egress provides better throughput and lower cost.",
      },
      {
        id: "k8s-managed-enterprise",
        title: "Production Kubernetes Clusters with Automated Node Operations",
        service: "Google Kubernetes Engine (GKE Autopilot)",
        why: "Google-managed node provisioning, security hardening, automated OS upgrades, and Workload Identity Federation.",
        tradeoff: "Opinionated defaults; cannot modify underlying worker node OS kernels or install custom host daemons.",
        antiPattern: "Creating GKE Standard clusters solely to run stateless web APIs without custom host requirements.",
      },
      {
        id: "resilient-vm-fleet",
        title: "Stateful Virtual Machine Fleets, Custom Kernels & Legacy Linux Apps",
        service: "Compute Engine Regional Managed Instance Groups (MIG)",
        why: "Distributes VMs across 3 zones with autohealing, predictive autoscaling, and rolling instance template upgrades.",
        tradeoff: "Requires 50% capacity overprovisioning to maintain full serving throughput after losing an entire zone.",
        antiPattern: "Deploying standalone single-zone Compute Engine VMs for mission-critical production workloads.",
      },
    ],
    storage: [
      {
        id: "object-storage-media",
        title: "Unstructured Media, Data Lake Files & Strong Read-After-Write Consistency",
        service: "Cloud Storage (GCS - Standard / Nearline / Coldline / Archive)",
        why: "Global bucket namespace, immediate strong consistency for object mutations and listings, lifecycle management.",
        tradeoff: "Object storage does not support POSIX file byte append locking.",
        antiPattern: "Treating Cloud Storage replication as a replacement for Object Versioning and Soft Delete against overwrites.",
      },
      {
        id: "transactional-oltp",
        title: "Enterprise Relational Database (PostgreSQL / MySQL ACID Transactions)",
        service: "Cloud SQL (Regional HA with Cross-Region Read Replica)",
        why: "Managed relational database engine with automated synchronous zonal failover and continuous point-in-time recovery (PITR).",
        tradeoff: "Cloud SQL is fundamentally regional; it is NOT an active-active globally distributed multi-master database.",
        antiPattern: "Assuming global VPC networking automatically provides active-active multi-region transactional writes.",
      },
    ],
    analytics: [
      {
        id: "serverless-data-warehouse",
        title: "Massive Petabyte-Scale SQL Analytics, BI & Ad-Hoc Data Exploration",
        service: "BigQuery (Columnar Storage + Slot Query Engine)",
        why: "Decoupled storage and compute, distributed slot allocation, date partitioning, clustering, and BI Engine acceleration.",
        tradeoff: "Not an OLTP database (unsuitable for high-concurrency single-record updates or row-by-row transactions).",
        antiPattern: "Executing 'SELECT * FROM giant_table' without partition filters, triggering massive on-demand scan bills.",
      },
      {
        id: "async-pubsub-decoupling",
        title: "High-Throughput Global Asynchronous Messaging & Stream Decoupling",
        service: "Cloud Pub/Sub (Topics & Subscriptions)",
        why: "Decouples producer/consumer rate and time, built-in message retention up to 31 days with historical replay, DLQ redrive.",
        tradeoff: "At-least-once delivery by default; consumers must implement deduplication and idempotent business logic.",
        antiPattern: "Assuming exactly-once messaging delivery automatically guarantees distributed business transactions.",
      },
    ],
    network: [
      {
        id: "global-http-ingress",
        title: "Global HTTP/HTTPS Anycast Edge Ingress, SSL Termination & Cloud Armor WAF",
        service: "Global External Application Load Balancer",
        why: "Single global Anycast IP address, intelligent backend health selection across regions, and Cloud Armor DDoS mitigation.",
        tradeoff: "Directs HTTP traffic globally; does not resolve backend database replication or transactional failover state.",
        antiPattern: "Relying on client-side DNS round-robin routing instead of Google's global Anycast load balancing frontend.",
      },
      {
        id: "private-outbound-egress",
        title: "Secure Outbound Internet Access for Private Compute Engine / GKE Nodes",
        service: "Cloud NAT (Software-Defined)",
        why: "Software-defined outbound address translation with zero single-point-of-failure VM appliances; denies unsolicited inbound.",
        tradeoff: "Regional resource; requires configuring independent NAT gateways per region.",
        antiPattern: "Assigning public IP addresses directly to private GKE worker nodes or database VMs.",
      },
    ],
    security: [
      {
        id: "workload-identity-fed",
        title: "Zero-Trust Pod & Workload Authentication without Static Secret Keys",
        service: "GKE Workload Identity Federation",
        why: "Binds Kubernetes ServiceAccounts to Google Service Accounts via OIDC; eliminates long-lived JSON private key files.",
        tradeoff: "Requires configuring GKE metadata server on all node pools.",
        antiPattern: "Downloading service account JSON private keys and mounting them into Kubernetes secrets.",
      },
      {
        id: "secret-versioning-rotation",
        title: "Centralized Secret Management with Staged Version Rollouts",
        service: "Secret Manager + Pub/Sub Rotation Notifications",
        why: "Encrypted, auditable versioning (v1, v2) with Pub/Sub event hooks to coordinate gradual consumer migration.",
        tradeoff: "Application code must handle dual-version validation during rotation to prevent downtime.",
        antiPattern: "Blindly using the 'latest' alias in production, causing instant outages if a new version is not backwards-compatible.",
      },
    ],
  };

  // 8 GameDay Failure Scenarios from Sections 59–66 of brief
  const gcpGameDayScenarios = moduleData?.scenarios || [];

  const handleGameAnswer = (option) => {
    setGameSelection(option.id);
    if (!gameHistory[gameScenarioIndex]) {
      if (option.isCorrect) {
        setGameScore((prev) => prev + 10);
      }
      setGameHistory((prev) => ({
        ...prev,
        [gameScenarioIndex]: option.isCorrect ? "correct" : "incorrect",
      }));
    }
  };

  // 12 Rigorous GCP Topics
  const topics = moduleData?.topics || [];

  const currentTopic = topics[selectedTopic];

    if (loading) {
    return <ModuleLoadingSkeleton track="cloud" currentModuleId="gcp" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="cloud" currentModuleId="gcp" error={error} onRetry={reload} />;
  }
return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-orange-500 selection:text-white">
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-[120px]" />
        <div className="absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-amber-400/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* TOP HEADER */}
        <ModuleNav
          track="cloud"
          currentModuleId="gcp"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Google Cloud AI"
        />

        {/* HERO BANNER */}
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-[#18181b] p-8 md:p-12 text-white shadow-2xl mb-10">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3.5 py-1 text-xs font-mono font-bold text-orange-400 mb-4">
              <Cloud size={14} />
              <span>Google Cloud Architecture</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
              From GCP Primitives to Distributed Data Architecture
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-300">
              Google Cloud exposes distributed systems in a distinctive, powerful way: Global VPC networks with regional subnets,
              Compute Engine Regional MIGs with 50% overprovisioning, Cloud Run container serverless with concurrency tuning,
              GKE Autopilot managed operations, Pub/Sub large-scale decoupling and historical replay, BigQuery decoupled analytical slots,
              and Global External Application Load Balancing with Anycast IPs.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="rounded-lg bg-white/10 px-3 py-1.5 text-stone-300">
                Foundations: Global VPC • Regional Subnets • MIGs • GCS • Cloud SQL HA
              </span>
              <span className="rounded-lg bg-white/10 px-3 py-1.5 text-stone-300">
                Analytics & Scale: BigQuery Slots • Pub/Sub Replay • Cloud Run • GKE Autopilot
              </span>
              <span className="rounded-lg bg-orange-500/20 text-orange-300 border border-orange-500/30 px-3 py-1.5">
                Capstone: GlobalCommerce GCP & 3-Cloud Translation Matrix
              </span>
            </div>
          </div>
        </div>

        {/* INTERACTIVE LAB 1 & 2: TWO-COLUMN LAB DECK */}
        <div className="grid gap-8 lg:grid-cols-12 mb-12">
          {/* TOOL 1: GCP SERVICE SELECTOR & ARCHITECTURAL MATCHER (COL-7) */}
          <div className="lg:col-span-7 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Workflow size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Interactive GCP Service Selector & Matcher
                    </h3>
                    <p className="text-xs text-stone-500">
                      Map workload constraints to exact architectural recommendations (Section 68)
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-stone-100 px-3 py-1 font-mono text-[10px] font-bold text-stone-600 uppercase">
                  Decision Matrix
                </span>
              </div>

              {/* Workload Category Tabs */}
              <div className="grid grid-cols-5 gap-1.5 mb-6">
                {[
                  { id: "compute", label: "Compute" },
                  { id: "storage", label: "Storage/DB" },
                  { id: "analytics", label: "Data/Msg" },
                  { id: "network", label: "Network" },
                  { id: "security", label: "Security" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedWorkloadCategory(cat.id);
                      setSelectedRequirement(gcpDecisionOptions[cat.id][0].id);
                    }}
                    className={`rounded-xl py-2 px-1 text-center font-mono text-xs font-bold transition ${
                      selectedWorkloadCategory === cat.id
                        ? "bg-[#18181b] text-white shadow-xs"
                        : "bg-stone-50 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Requirement Selection Radios */}
              <div className="space-y-2.5 mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-400">
                  Select Architectural Requirement:
                </label>
                {gcpDecisionOptions[selectedWorkloadCategory].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedRequirement(opt.id)}
                    className={`w-full text-left rounded-2xl border p-3.5 text-xs transition flex items-center justify-between ${
                      selectedRequirement === opt.id
                        ? "border-orange-500 bg-orange-50/60 font-bold text-orange-950 shadow-xs"
                        : "border-[#e7e3da] bg-stone-50/50 text-stone-700 hover:border-stone-300"
                    }`}
                  >
                    <span>{opt.title}</span>
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        selectedRequirement === opt.id ? "bg-orange-500" : "bg-stone-300"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Active Recommendation Card */}
              {(() => {
                const match = gcpDecisionOptions[selectedWorkloadCategory].find(
                  (o) => o.id === selectedRequirement
                );
                if (!match) return null;
                return (
                  <div className="rounded-2xl border border-orange-200 bg-orange-50/30 p-5">
                    <div className="flex items-center justify-between pb-3 border-b border-orange-200/60">
                      <span className="font-mono text-[11px] font-bold text-stone-500 uppercase">
                        Recommended GCP Primitive
                      </span>
                      <span className="rounded-lg bg-orange-600 text-white px-3 py-1 font-mono text-xs font-bold shadow-xs">
                        {match.service}
                      </span>
                    </div>

                    <div className="mt-3.5 space-y-2 text-xs">
                      <div>
                        <span className="font-bold text-stone-900">Why this service: </span>
                        <span className="text-stone-700">{match.why}</span>
                      </div>
                      <div>
                        <span className="font-bold text-amber-800">Architectural Trade-Off: </span>
                        <span className="text-stone-600">{match.tradeoff}</span>
                      </div>
                      <div className="pt-2 border-t border-orange-200/40 text-rose-800 font-mono text-[11px]">
                        <strong>Avoid Anti-Pattern: </strong>
                        {match.antiPattern}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* TOOL 2: BIGQUERY SLOT & PARTITION SCAN COST SIMULATOR (COL-5) */}
          <div className="lg:col-span-5 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                    <Sliders size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      BigQuery Slot & Partition Scan Simulator
                    </h3>
                    <p className="text-xs text-stone-500">
                      Simulate Bytes Scanned & The BigQuery Cost Explosion (Sections 26–29)
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-stone-100 px-3 py-1 font-mono text-[10px] font-bold text-stone-600 uppercase">
                  Data Sizer
                </span>
              </div>

              {/* Sliders & Controls */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Total Analytics Table Size:</span>
                    <span className="font-mono text-orange-600">{tableSizeTb} TB</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="200"
                    step="5"
                    value={tableSizeTb}
                    onChange={(e) => setTableSizeTb(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Query Optimization Strategy:</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { id: "unpartitioned-full", label: "Full Scan (0%)" },
                      { id: "partitioned-only", label: "Date Part (96%)" },
                      { id: "partitioned-clustered", label: "Part+Cluster (99.5%)" },
                    ].map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setQueryStrategy(s.id)}
                        className={`rounded-xl py-2 px-1 text-center text-[11px] font-bold transition ${
                          queryStrategy === s.id
                            ? "border border-orange-500 bg-orange-50 text-orange-950 font-mono shadow-xs"
                            : "border border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100"
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Queries Per Day:</span>
                    <span className="font-mono text-stone-700">{queriesPerDay.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={queriesPerDay}
                    onChange={(e) => setQueriesPerDay(Number(e.target.value))}
                    className="w-full accent-stone-700"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Pricing Model:</span>
                    <span className="font-mono text-stone-700">{pricingModel}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "on-demand", label: "On-Demand ($6.25/TB)" },
                      { id: "edition-reservation", label: "Edition Slot Reservation" },
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setPricingModel(m.id)}
                        className={`rounded-xl py-1.5 px-2 text-center text-xs font-bold transition ${
                          pricingModel === m.id
                            ? "bg-[#18181b] text-white shadow-xs"
                            : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Real-time Math Output */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 space-y-2.5 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-stone-600">Bytes Scanned per Query:</span>
                  <span className="font-mono font-bold text-[#18181b]">
                    {bigqueryCalculations.bytesScannedPerQueryTb} TB ({(bigqueryCalculations.scanFraction * 100).toFixed(1)}% of table)
                  </span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-stone-600">Total Monthly Scanned:</span>
                  <span className="font-mono font-bold text-stone-800">
                    {bigqueryCalculations.totalMonthlyScannedTb.toLocaleString()} TB / mo
                  </span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-stone-600">Estimated Monthly Billing:</span>
                  <span
                    className={`font-mono font-bold text-sm ${
                      bigqueryCalculations.monthlyCostEstimate > 10000
                        ? "text-rose-600"
                        : "text-emerald-700"
                    }`}
                  >
                    ${bigqueryCalculations.monthlyCostEstimate.toLocaleString()} / mo
                  </span>
                </div>

                <div className="pt-1">
                  <div className="text-[11px] font-bold text-stone-500 uppercase">Billing Summary:</div>
                  <p className="text-xs text-stone-700 mt-0.5 leading-snug font-mono">
                    {bigqueryCalculations.costSummary}
                  </p>
                </div>
              </div>

              {/* Status Alert Banner */}
              <div
                className={`mt-4 rounded-xl p-3 text-xs leading-relaxed ${
                  bigqueryCalculations.riskLevel === "critical"
                    ? "bg-rose-50 text-rose-800 border border-rose-200 font-bold"
                    : bigqueryCalculations.riskLevel === "moderate"
                    ? "bg-amber-50 text-amber-800 border border-amber-200"
                    : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                }`}
              >
                {bigqueryCalculations.strategyNote}
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE LAB 3: GCP GAMEDAY FAILURE SIMULATOR (8 SCENARIOS FROM SECTIONS 59–66) */}
        <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e7e3da]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 font-mono text-[10px] font-bold text-rose-700 uppercase mb-2">
                <AlertTriangle size={12} />
                <span>Sections 59–66 Failure Game</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#18181b]">
                Google Cloud GameDay: 8 Production Incident Simulations
              </h2>
              <p className="text-xs md:text-sm text-stone-500 mt-1">
                Test your architectural recovery across VM crashes, zonal outages, Cloud Run DB storms, Pub/Sub redeliveries, BigQuery cost leaks, object overwrites, leaked keys, and regional DR.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-2 text-right">
                <div className="text-[10px] font-mono uppercase text-stone-400 font-bold">GameDay Score</div>
                <div className="text-lg font-mono font-bold text-orange-600">{gameScore} / 80 Pts</div>
              </div>
            </div>
          </div>

          {/* Scenario Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto py-4">
            {gcpGameDayScenarios.map((sc, idx) => {
              const status = gameHistory[idx];
              return (
                <button
                  key={sc.id}
                  onClick={() => {
                    setGameScenarioIndex(idx);
                    setGameSelection(null);
                  }}
                  className={`flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 font-mono text-xs font-bold transition ${
                    gameScenarioIndex === idx
                      ? "bg-[#18181b] text-white shadow-xs"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  <span>Failure {sc.id}</span>
                  {status === "correct" && <span className="h-2 w-2 rounded-full bg-emerald-500" />}
                  {status === "incorrect" && <span className="h-2 w-2 rounded-full bg-rose-500" />}
                </button>
              );
            })}
          </div>

          {/* Active Scenario Card */}
          {(() => {
            const currentScenario = gcpGameDayScenarios[gameScenarioIndex];

            return (
              <div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50/70 p-6">
                <h3 className="text-base font-bold text-[#18181b] mb-2">{currentScenario.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">{currentScenario.context}</p>

                <div className="rounded-xl bg-orange-50/80 border border-orange-200 p-3.5 mb-6 text-xs font-bold text-orange-950">
                  Question: {currentScenario.question}
                </div>

                <div className="space-y-3">
                  {currentScenario.options.map((opt) => {
                    const isSelected = gameSelection === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleGameAnswer(opt)}
                        className={`w-full text-left rounded-2xl border p-4 text-xs transition ${
                          isSelected
                            ? opt.isCorrect
                              ? "border-emerald-500 bg-emerald-50/80 text-emerald-950"
                              : "border-rose-500 bg-rose-50/80 text-rose-950"
                            : "border-stone-200 bg-white text-stone-700 hover:border-stone-400"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${
                              isSelected
                                ? opt.isCorrect
                                  ? "bg-emerald-600 text-white"
                                  : "bg-rose-600 text-white"
                                : "bg-stone-100 text-stone-700"
                            }`}
                          >
                            {opt.id}
                          </span>
                          <div className="flex-1">
                            <p className="font-semibold">{opt.text}</p>
                            {isSelected && (
                              <div className="mt-3 pt-3 border-t border-stone-200/60">
                                <span
                                  className={`inline-block font-bold text-[11px] uppercase tracking-wider mb-1 ${
                                    opt.isCorrect ? "text-emerald-700" : "text-rose-700"
                                  }`}
                                >
                                  {opt.verdict}
                                </span>
                                <p className="text-xs text-stone-600 leading-relaxed">
                                  {opt.explanation}
                                </p>
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

        {/* CURRICULUM TOPIC EXPLORER (12 TOPICS) */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* SIDEBAR NAVIGATION (COL-4) */}
          <div className="lg:col-span-4 space-y-2">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#e7e3da] mb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500">
                  Module 9 Topic Index
                </span>
                <span className="rounded-full bg-orange-100 px-2.5 py-0.5 font-mono text-[10px] font-bold text-orange-700">
                  12 Topics
                </span>
              </div>

              <div className="space-y-1.5 max-h-[720px] overflow-y-auto pr-1">
                {topics.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTopic(idx)}
                    className={`w-full text-left rounded-2xl p-3.5 text-xs transition flex flex-col gap-1 ${
                      selectedTopic === idx
                        ? "bg-[#18181b] text-white shadow-md"
                        : "bg-stone-50/80 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-[10px] font-bold ${
                          selectedTopic === idx ? "text-orange-400" : "text-orange-600"
                        }`}
                      >
                        {t.week}
                      </span>
                      <span
                        className={`rounded-md px-2 py-0.5 font-mono text-[9px] font-bold ${
                          selectedTopic === idx ? "bg-white/10 text-stone-300" : "bg-stone-200 text-stone-600"
                        }`}
                      >
                        {t.badge}
                      </span>
                    </div>
                    <span className="font-bold leading-snug">{t.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CURRICULUM ROADMAP BADGE */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm text-center">
              <span className="inline-block rounded-full bg-orange-100 text-orange-700 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                Cloud Architecture Track
              </span>
              <h4 className="text-sm font-bold text-[#18181b]">Curriculum Milestone</h4>
              <p className="text-xs text-stone-500 mt-1 mb-4">
                Modules 1 through 9 master foundational cloud systems across AWS, Azure, and Google Cloud. Next: Design systems spanning all three clouds.
              </p>
              <button
                onClick={() => navigate("/learning/cloud/multicloud")}
                className="w-full rounded-xl bg-orange-500 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-orange-600 transition"
              >
                Next: Module 10 Multi-Cloud →
              </button>
            </div>
          </div>

          {/* MAIN TOPIC CONTENT (COL-8) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-sm">
              {/* TOPIC HEADER */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#e7e3da]">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    {currentTopic.week} • {currentTopic.badge}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#18181b] mt-1">
                    {currentTopic.title}
                  </h2>
                  <p className="text-xs md:text-sm text-stone-500 mt-1 font-mono">
                    Focus: {currentTopic.focus}
                  </p>
                </div>
              </div>

              {/* THEORY BODY */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Systems Theory & Architectural Analysis
                </h4>
                <p className="text-sm leading-relaxed text-stone-700 font-normal">
                  {currentTopic.theory}
                </p>
              </div>

              {/* ASCII / TECHNICAL TOPOLOGY DIAGRAM */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Architectural Blueprint & Data Plane Flow
                  </h4>
                  <span className="font-mono text-[10px] text-stone-400">GCP Topology</span>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-stone-800 bg-[#18181b] p-5 font-mono text-xs leading-relaxed text-emerald-400 shadow-inner">
                  <pre>{currentTopic.diagram}</pre>
                </div>
              </div>

              {/* KEY TAKEAWAYS */}
              <div className="mt-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                  Core Invariants & Well-Architected Takeaways
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {currentTopic.keyTakeaways.map((point, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-xs leading-relaxed text-stone-700 flex items-start gap-2.5"
                    >
                      <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CODE / CONFIGURATION EXAMPLE */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Production Implementation Artifact
                  </h4>
                  <button
                    onClick={() => copyCode(currentTopic.codeExample, currentTopic.id)}
                    className="flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-2.5 py-1 text-[11px] font-mono text-stone-600 hover:bg-stone-50 transition"
                  >
                    {copiedCodeId === currentTopic.id ? (
                      <>
                        <Check size={12} className="text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy Artifact</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-stone-800 bg-[#18181b] p-5 font-mono text-xs leading-relaxed text-stone-200 shadow-inner">
                  <pre>{currentTopic.codeExample}</pre>
                </div>
              </div>

              {/* TOPIC NAVIGATION FOOTER */}
              <div className="module-footer-nav mt-10 flex items-center justify-between pt-6 border-t border-[#e7e3da]">
                <button
                  disabled={selectedTopic === 0}
                  onClick={() => setSelectedTopic((prev) => Math.max(0, prev - 1))}
                  className="flex items-center gap-2 rounded-xl border border-stone-200 px-4 py-2 text-xs font-bold text-stone-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-50 transition"
                >
                  <ArrowLeft size={14} />
                  <span>Previous Topic</span>
                </button>
                <span className="font-mono text-xs text-stone-400 font-bold">
                  {selectedTopic + 1} of {topics.length}
                </span>
                <button
                  disabled={selectedTopic === topics.length - 1}
                  onClick={() => setSelectedTopic((prev) => Math.min(topics.length - 1, prev + 1))}
                  className="flex items-center gap-2 rounded-xl bg-[#18181b] px-4 py-2 text-xs font-bold text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-800 transition shadow-xs"
                >
                  <span>Next Topic</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* EMBEDDED NOVA AI TUTOR DRAWER */}
        {SHOW_NOVA_AI && showAiTutor && (
          <div className="fixed bottom-6 right-6 z-50 w-full max-w-md shadow-2xl rounded-3xl overflow-hidden border border-orange-500/40 bg-white">
            <div className="bg-[#18181b] px-4 py-3 text-white flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-xs">
                <Sparkles size={16} className="text-orange-400" />
                <span>Nova AI GCP Architect Tutor</span>
              </div>
              <button
                onClick={() => setShowAiTutor(false)}
                className="text-stone-400 hover:text-white text-xs font-mono"
              >
                ✕
              </button>
            </div>
            <div className="h-[480px]">
              <LearningRo
                module="gcp"
                currentTopic={`gcp-${currentTopic.id}`}
                subtopic={currentTopic.title}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
