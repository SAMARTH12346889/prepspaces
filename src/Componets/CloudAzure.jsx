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
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";
import { SHOW_NOVA_AI } from "../config/features";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 8: AZURE ARCHITECTURE                               */
/* Weeks 14–16: From Azure Primitives to Production Architecture               */
/* Azure 5 Pillars, Entra ID, Managed Identities, VNet, NSG, Private Link,    */
/* VMSS, Blob Storage, Azure SQL, Cosmos DB, Managed Redis, Front Door,       */
/* App Gateway v2, Functions Flex, AKS Automatic, Service Bus, Event Grid,     */
/* Azure Monitor, Key Vault & Production AzureShop 10M-User Blueprint         */
/* -------------------------------------------------------------------------- */

export default function CloudAzure() {
  const { data: moduleData, loading, error, reload } = useModuleContent("cloud", "azure");
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Tool 1: Azure Service Matcher State
  const [selectedWorkloadCategory, setSelectedWorkloadCategory] = useState("identity");
  const [selectedRequirement, setSelectedRequirement] = useState("workload-identity");

  // Tool 2: Cosmos DB Partitioning & Consistency Simulator State
  const [consistencyLevel, setConsistencyLevel] = useState("Session"); // "Strong", "BoundedStaleness", "Session", "ConsistentPrefix", "Eventual"
  const [partitionKeyStrategy, setPartitionKeyStrategy] = useState("userId"); // "userId", "country", "status"
  const [trafficVolumeRps, setTrafficVolumeRps] = useState(25000);

  // Tool 3: Azure GameDay Failure Simulator State (7 Scenarios from Sections 48–54)
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Tool 2: Cosmos DB Calculations
  const cosmosCalculations = useMemo(() => {
    let ruCostMultiplier = 1.0;
    let readLatencyMs = 2;
    let consistencyDescription = "";
    let dataAgreement = "Monotonically reads own writes within single client session.";

    if (consistencyLevel === "Strong") {
      ruCostMultiplier = 2.0; // Strong reads cost 2x RUs because replicas must be read synchronously
      readLatencyMs = 12;
      consistencyDescription =
        "Linearizable consistency. Reads are guaranteed to return the most recent committed version across all global replicas. High read latency & bounded to single-region write quorum.";
      dataAgreement = "100% synchronous quorum across all replicas before commit.";
    } else if (consistencyLevel === "BoundedStaleness") {
      ruCostMultiplier = 2.0;
      readLatencyMs = 6;
      consistencyDescription =
        "Reads lag behind writes by at most K versions or T time intervals (e.g., 5 seconds / 100,000 updates). Predictable lag boundary.";
      dataAgreement = "Replicas guaranteed within max lag window K or T.";
    } else if (consistencyLevel === "Session") {
      ruCostMultiplier = 1.0; // Baseline 1 RU
      readLatencyMs = 2;
      consistencyDescription =
        "Default Azure setting. Guarantees monotonic reads, monotonic writes, and Read-Your-Own-Writes within the writer's session token. Optimal balance of latency, cost, and availability.";
      dataAgreement = "Read-Your-Own-Writes for writer; eventual for other sessions.";
    } else if (consistencyLevel === "ConsistentPrefix") {
      ruCostMultiplier = 1.0;
      readLatencyMs = 2;
      consistencyDescription =
        "Updates are guaranteed to be seen in the exact order they were committed. Readers never observe out-of-order writes, but may read slightly stale state.";
      dataAgreement = "Order preserved without gaps; lag is unconstrained.";
    } else if (consistencyLevel === "Eventual") {
      ruCostMultiplier = 1.0;
      readLatencyMs = 1.5;
      consistencyDescription =
        "Weakest consistency. Lowest read latency and highest throughput. In the absence of new writes, replicas eventually converge to identical state.";
      dataAgreement = "No ordering or freshness guarantee immediately post-write.";
    }

    // Partition Key Analysis
    let partitionDistribution = "balanced";
    let hotPartitionRisk = "Low";
    let maxPartitionTrafficPct = 5;
    let partitionAnalysis = "";

    if (partitionKeyStrategy === "userId") {
      partitionDistribution = "balanced";
      hotPartitionRisk = "Very Low (Healthy Horizontal Sharding)";
      maxPartitionTrafficPct = 3;
      partitionAnalysis =
        "High cardinality key with millions of distinct values. Traffic distributes evenly across all physical partitions (10,000 RU/s limit per partition is respected).";
    } else if (partitionKeyStrategy === "country") {
      partitionDistribution = "skewed";
      hotPartitionRisk = "CRITICAL HOT PARTITION";
      maxPartitionTrafficPct = 72; // India/US taking 72%
      partitionAnalysis =
        "Severe key skew! 72% of all traffic hits the single partition for 'India'. That physical partition throttles with HTTP 429 (RequestRateTooLarge), while remaining partitions sit idle.";
    } else if (partitionKeyStrategy === "status") {
      partitionDistribution = "bottleneck";
      hotPartitionRisk = "CRITICAL BOTTLENECK";
      maxPartitionTrafficPct = 90;
      partitionAnalysis =
        "Extremely low cardinality ('PENDING', 'COMPLETED'). Over 90% of write traffic targets 'PENDING', causing devastating storage and throughput throttling.";
    }

    const estimatedRUs = Math.round(trafficVolumeRps * ruCostMultiplier);

    return {
      ruCostMultiplier,
      readLatencyMs,
      consistencyDescription,
      dataAgreement,
      partitionDistribution,
      hotPartitionRisk,
      maxPartitionTrafficPct,
      partitionAnalysis,
      estimatedRUs,
    };
  }, [consistencyLevel, partitionKeyStrategy, trafficVolumeRps]);

  // Decision Tree Matcher Data
  const azureDecisionOptions = {
    identity: [
      {
        id: "workload-identity",
        title: "Workload to Azure Service Authentication (VM, AKS, Function to Key Vault / Blob)",
        service: "Microsoft Entra Managed Identity (User-Assigned)",
        why: "Eliminates credentials in code; automated token generation via IMDS; decoupled lifecycle for multi-resource sharing.",
        tradeoff: "Scoped to Azure ecosystem; cross-cloud workloads require Entra Workload ID Federation via OIDC.",
        antiPattern: "Storing client secret strings in appsettings.json or Kubernetes ConfigMaps.",
      },
      {
        id: "human-sso-governance",
        title: "Enterprise Workforce Identity, MFA & Conditional Access",
        service: "Microsoft Entra ID (P1/P2) + Azure RBAC",
        why: "Centralized identity provider with adaptive risk policies, Privileged Identity Management (PIM), and granular scope RBAC.",
        tradeoff: "Requires proper tenant architecture (Management Groups) to prevent permission inheritance sprawl.",
        antiPattern: "Assigning 'Contributor' role at the Subscription root to developer accounts.",
      },
    ],
    compute: [
      {
        id: "k8s-managed-containers",
        title: "Microservices & Kubernetes Workloads with Zero Node Ops",
        service: "Azure Kubernetes Service (AKS Automatic)",
        why: "Automated workload-driven node provisioning, self-healing, automated K8s version upgrades, and built-in security baselines.",
        tradeoff: "Less low-level OS tuning than AKS Standard; opinionated networking and ingress defaults.",
        antiPattern: "Manually configuring unmanaged VM fleets with kubeadm when AKS Automatic eliminates control-plane maintenance.",
      },
      {
        id: "serverless-event-compute",
        title: "Event-Driven Compute & HTTP APIs with Independent Per-Function Scaling",
        service: "Azure Functions (Flex Consumption Plan)",
        why: "Pay-as-you-go serverless with fast cold-start mitigation, VNet integration, and individual function concurrency controls.",
        tradeoff: "Requires connection pooling / backpressure to prevent saturating downstream relational databases.",
        antiPattern: "Running persistent 24/7 TCP socket listeners on consumption serverless functions.",
      },
      {
        id: "vm-fleet-autoscale",
        title: "Stateful Virtual Server Fleets, Custom OS Kernels, or Windows Monoliths",
        service: "Azure Virtual Machine Scale Sets (VMSS)",
        why: "Horizontal fleet autoscaling across Availability Zones, automated OS rolling upgrades, and fault domain isolation.",
        tradeoff: "Undifferentiated heavy lifting: OS patching, antivirus agent management, and slower scale-out compared to containers.",
        antiPattern: "Running standalone single-instance VMs without zone redundancy for mission-critical APIs.",
      },
    ],
    storage: [
      {
        id: "object-datalake",
        title: "Images, Videos, Data Lake Parquet Files & Long-Term Cold Backups",
        service: "Azure Blob Storage (Data Lake Gen2)",
        why: "Hierarchical namespace for analytics, Hot/Cool/Cold/Archive access tiers, soft delete, and immutable WORM policies.",
        tradeoff: "Object storage does not provide POSIX random file byte locking.",
        antiPattern: "Relying solely on geo-replication as a backup while leaving Soft Delete disabled.",
      },
      {
        id: "relational-acid-sql",
        title: "Enterprise Relational OLTP (ACID, Complex Joins, Foreign Keys)",
        service: "Azure SQL Database (Business Critical / Hyperscale)",
        why: "Fully managed SQL engine with automated backups, zone-redundant HA, and Auto-Failover Groups with read-scale out.",
        tradeoff: "Vertical scaling boundaries on standard tiers; Hyperscale required for multi-terabyte datasets.",
        antiPattern: "Exposing the SQL Server public endpoint to the internet instead of using a Private Endpoint.",
      },
      {
        id: "distributed-nosql-global",
        title: "Globally Distributed Document Store with Single-Digit Millisecond Latency",
        service: "Azure Cosmos DB (NoSQL API)",
        why: "Turnkey multi-region replication, horizontal scaling through partition keys, and 5 tunable consistency levels.",
        tradeoff: "Schema design must follow query access patterns; cross-partition queries incur heavy RU penalties.",
        antiPattern: "Selecting a low-cardinality partition key (e.g., country code), creating hot partition bottlenecks.",
      },
      {
        id: "in-memory-caching",
        title: "Sub-Millisecond In-Memory Caching & Session Acceleration",
        service: "Azure Managed Redis (Enterprise)",
        why: "Microsecond read/write operations, multi-region active-active clustering, and automated persistence.",
        tradeoff: "In-memory storage is volatile and expensive per GB; requires cache stampede safeguards.",
        antiPattern: "Starting new architectures on deprecated Azure Cache for Redis Basic/Standard tiers.",
      },
    ],
    messaging: [
      {
        id: "durable-enterprise-queue",
        title: "Transactional Command Queuing, Work Decoupling & Dead-Letter Processing",
        service: "Azure Service Bus (Queues & Topics)",
        why: "Strict at-least-once or FIFO ordering, sessions, duplicate detection window, and built-in Dead-Letter Queue (DLQ).",
        tradeoff: "Pull-based consumer architecture; slightly lower raw throughput than event ingestion streams like Event Hubs.",
        antiPattern: "Using Event Grid when you need a reliable work queue with message locks and backpressure.",
      },
      {
        id: "reactive-event-routing",
        title: "High-Throughput Reactive Event Distribution ('Something Happened')",
        service: "Azure Event Grid (Event Subscriptions & Namespaces)",
        why: "Push-based serverless event routing, native Azure service integrations (Blob created, VM state change), sub-10ms delivery.",
        tradeoff: "No strict ordering guarantee; consumers must be idempotent and handle out-of-order deliveries.",
        antiPattern: "Using Event Grid as a heavy payload message bus (event payloads should ideally remain under 64KB).",
      },
    ],
    edge: [
      {
        id: "global-edge-cdn-waf",
        title: "Global HTTP Ingress, Anycast Edge Acceleration & Multi-Region Failover",
        service: "Azure Front Door (Standard / Premium)",
        why: "Microsoft global Anycast edge network, dynamic route optimization, integrated edge WAF, and Private Link origin security.",
        tradeoff: "Global Layer 7 traffic router; does not perform internal intra-VNet microservice load balancing.",
        antiPattern: "Deploying Front Door Classic (retiring March 2027) or bypassing Front Door to hit origins directly.",
      },
      {
        id: "regional-microservice-gateway",
        title: "Regional Layer-7 Path-Based Reverse Proxy & Internal Kubernetes Ingress",
        service: "Azure Application Gateway v2 (with WAF)",
        why: "Regional URL path routing (/api/orders vs /images), TLS termination, cookie affinity, and zone-redundant auto-scaling.",
        tradeoff: "Regional boundary only; cannot distribute global ingress across multiple geographic regions.",
        antiPattern: "Using deprecated Application Gateway v1 SKUs (retired April 2026).",
      },
    ],
  };

  // 7 GameDay Failure Scenarios from Sections 48–54 of brief
  const azureGameDayScenarios = moduleData?.scenarios || [];

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

  // 12 In-Depth Azure Architecture Topics
  const topics = moduleData?.topics || [];

  const currentTopic = topics[selectedTopic];

    if (loading) {
    return <ModuleLoadingSkeleton track="cloud" currentModuleId="azure" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="cloud" currentModuleId="azure" error={error} onRetry={reload} />;
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
          currentModuleId="azure"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Azure AI"
        />

        {/* HERO BANNER */}
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-[#18181b] p-8 md:p-12 text-white shadow-2xl mb-10">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3.5 py-1 text-xs font-mono font-bold text-orange-400 mb-4">
              <Cloud size={14} />
              <span>Azure Native Architecture</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
              From Azure Primitives to Production Architecture
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-300">
              Do not memorize Azure service names. Master the architectural problem first, then learn how Azure solves it.
              Explore Microsoft Entra ID boundaries, Managed Identities, VNet Private Endpoints, VMSS autoscaling feedback loops,
              Azure SQL Failover Groups, Cosmos DB consistency spectrums, Azure Managed Redis Enterprise, Front Door Anycast edge,
              AKS Automatic, Service Bus command queues, Event Grid reactive distribution, and Key Vault zero-trust secrets.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="rounded-lg bg-white/10 px-3 py-1.5 text-stone-300">
                Foundations: Entra ID • RBAC • VNet • Private Link • VMSS • Blob • Azure SQL
              </span>
              <span className="rounded-lg bg-white/10 px-3 py-1.5 text-stone-300">
                Services: Cosmos DB • Managed Redis • Front Door • App Gateway v2 • Functions • AKS Automatic
              </span>
              <span className="rounded-lg bg-orange-500/20 text-orange-300 border border-orange-500/30 px-3 py-1.5">
                Capstone: AzureShop 10M-User Global System & AWS Translation
              </span>
            </div>
          </div>
        </div>

        {/* INTERACTIVE LAB 1 & 2: TWO-COLUMN LAB DECK */}
        <div className="grid gap-8 lg:grid-cols-12 mb-12">
          {/* TOOL 1: AZURE SERVICE SELECTOR & ARCHITECTURAL MATCHER (COL-7) */}
          <div className="lg:col-span-7 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Workflow size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Interactive Azure Service Selector & Matcher
                    </h3>
                    <p className="text-xs text-stone-500">
                      Map workload constraints to exact architectural recommendations (Section 55)
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
                  { id: "identity", label: "Identity" },
                  { id: "compute", label: "Compute" },
                  { id: "storage", label: "Data" },
                  { id: "messaging", label: "Messaging" },
                  { id: "edge", label: "Edge" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedWorkloadCategory(cat.id);
                      setSelectedRequirement(azureDecisionOptions[cat.id][0].id);
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
                {azureDecisionOptions[selectedWorkloadCategory].map((opt) => (
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
                const match = azureDecisionOptions[selectedWorkloadCategory].find(
                  (o) => o.id === selectedRequirement
                );
                if (!match) return null;
                return (
                  <div className="rounded-2xl border border-orange-200 bg-orange-50/30 p-5">
                    <div className="flex items-center justify-between pb-3 border-b border-orange-200/60">
                      <span className="font-mono text-[11px] font-bold text-stone-500 uppercase">
                        Recommended Azure Primitive
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

          {/* TOOL 2: COSMOS DB PARTITIONING & CONSISTENCY SIMULATOR (COL-5) */}
          <div className="lg:col-span-5 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                    <Sliders size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Cosmos DB Consistency & Partitioning Lab
                    </h3>
                    <p className="text-xs text-stone-500">
                      Simulate RU Costs, Latency & Hot Partition Bottlenecks (Sections 18–22)
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-stone-100 px-3 py-1 font-mono text-[10px] font-bold text-stone-600 uppercase">
                  NoSQL Sizer
                </span>
              </div>

              {/* Sliders & Controls */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Consistency Level:</span>
                    <span className="font-mono text-orange-600 font-bold">{consistencyLevel}</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1">
                    {["Strong", "BoundedStaleness", "Session", "ConsistentPrefix", "Eventual"].map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setConsistencyLevel(lvl)}
                        className={`rounded-lg py-1.5 text-[10px] font-mono font-bold transition ${
                          consistencyLevel === lvl
                            ? "bg-[#18181b] text-white shadow-xs"
                            : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                        }`}
                      >
                        {lvl.slice(0, 7)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Partition Key Strategy:</span>
                    <span className="font-mono text-orange-600">/{partitionKeyStrategy}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "userId", label: "/userId (High-Card)" },
                      { id: "country", label: "/country (Skewed)" },
                      { id: "status", label: "/status (Hot Bottleneck)" },
                    ].map((k) => (
                      <button
                        key={k.id}
                        onClick={() => setPartitionKeyStrategy(k.id)}
                        className={`rounded-xl py-2 px-2 text-center text-xs font-bold transition ${
                          partitionKeyStrategy === k.id
                            ? "border border-orange-500 bg-orange-50 text-orange-950 font-mono shadow-xs"
                            : "border border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100"
                        }`}
                      >
                        {k.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Target Ingress Traffic:</span>
                    <span className="font-mono text-stone-700">{trafficVolumeRps.toLocaleString()} RPS</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    value={trafficVolumeRps}
                    onChange={(e) => setTrafficVolumeRps(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>
              </div>

              {/* Real-time Math Output */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 space-y-2.5 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-stone-600">RU Consumption (Est. Reads):</span>
                  <span className="font-mono font-bold text-[#18181b]">
                    {cosmosCalculations.estimatedRUs.toLocaleString()} RU/s ({cosmosCalculations.ruCostMultiplier}x factor)
                  </span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-stone-600">p99 Read Latency:</span>
                  <span className="font-mono font-bold text-stone-800">
                    ~{cosmosCalculations.readLatencyMs} ms
                  </span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-stone-600">Max Single Partition Load:</span>
                  <span
                    className={`font-mono font-bold ${
                      cosmosCalculations.maxPartitionTrafficPct > 50
                        ? "text-rose-600"
                        : "text-emerald-700"
                    }`}
                  >
                    {cosmosCalculations.maxPartitionTrafficPct}% of total RPS
                  </span>
                </div>

                <div className="pt-1">
                  <div className="text-[11px] font-bold text-stone-500 uppercase">Consistency Trade-Off:</div>
                  <p className="text-xs text-stone-700 mt-0.5 leading-snug">
                    {cosmosCalculations.consistencyDescription}
                  </p>
                </div>
              </div>

              {/* Status Alert Banner */}
              <div
                className={`mt-4 rounded-xl p-3 text-xs leading-relaxed ${
                  cosmosCalculations.partitionDistribution !== "balanced"
                    ? "bg-rose-50 text-rose-800 border border-rose-200 font-bold"
                    : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                }`}
              >
                {cosmosCalculations.partitionAnalysis}
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE LAB 3: AZURE GAMEDAY FAILURE SIMULATOR (7 SCENARIOS FROM SECTIONS 48–54) */}
        <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e7e3da]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 font-mono text-[10px] font-bold text-rose-700 uppercase mb-2">
                <AlertTriangle size={12} />
                <span>Sections 48–54 Failure Game</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#18181b]">
                Azure GameDay: 7 Production Incident Simulations
              </h2>
              <p className="text-xs md:text-sm text-stone-500 mt-1">
                Test your architectural recovery against gateway failures, pod crashes, Redis stampedes, regional SQL severance, hot partitions, and serverless DB starvation.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-2 text-right">
                <div className="text-[10px] font-mono uppercase text-stone-400 font-bold">GameDay Score</div>
                <div className="text-lg font-mono font-bold text-orange-600">{gameScore} / 70 Pts</div>
              </div>
            </div>
          </div>

          {/* Scenario Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto py-4">
            {azureGameDayScenarios.map((sc, idx) => {
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
                  <span>Incident {sc.id}</span>
                  {status === "correct" && <span className="h-2 w-2 rounded-full bg-emerald-500" />}
                  {status === "incorrect" && <span className="h-2 w-2 rounded-full bg-rose-500" />}
                </button>
              );
            })}
          </div>

          {/* Active Scenario Card */}
          {(() => {
            const currentScenario = azureGameDayScenarios[gameScenarioIndex];

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
                  Module 8 Topic Index
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
              <h4 className="text-sm font-bold text-[#18181b]">Next in the Program:</h4>
              <p className="text-xs text-stone-500 mt-1 mb-4">
                Module 9: Google Cloud Architecture (Global VPC, BigQuery Slots, Pub/Sub, Cloud Run, GKE Autopilot & GlobalCommerce GCP).
              </p>
              <button
                onClick={() => navigate("/learning/cloud/gcp")}
                className="w-full rounded-xl bg-orange-500 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-orange-600 transition"
              >
                Launch Module 9: Google Cloud
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
                  <span className="font-mono text-[10px] text-stone-400">Azure Topology</span>
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
                <span>Nova AI Azure Architect Tutor</span>
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
                module="azure"
                currentTopic={`azure-${currentTopic.id}`}
                subtopic={currentTopic.title}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
