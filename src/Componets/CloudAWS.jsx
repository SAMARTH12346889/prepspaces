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
/* CLOUD COMPUTING MODULE 7: DEEP AWS ENGINEERING                             */
/* Weeks 11–13: The AWS Operating Environment & Well-Architected Framework    */
/* AWS 6 Pillars, IAM, VPC, EC2, S3, Aurora, DynamoDB, Lambda, ECS/EKS,       */
/* SQS/SNS/EventBridge, CloudWatch, KMS & Production 10M-User E-Commerce Plan */
/* -------------------------------------------------------------------------- */

export default function CloudAWS() {
  const { data: moduleData, loading, error, reload } = useModuleContent("cloud", "aws");
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Tool 1: AWS Service Selector & Decision Tree State
  const [selectedWorkloadCategory, setSelectedWorkloadCategory] = useState("compute");
  const [selectedRequirement, setSelectedRequirement] = useState("serverless-api");

  // Tool 2: Lambda Concurrency & RDS Connection Pool Calculator State
  const [incomingRps, setIncomingRps] = useState(15000);
  const [functionDurationMs, setFunctionDurationMs] = useState(120);
  const [rdsMaxConnections, setRdsMaxConnections] = useState(2000);
  const [reservedConcurrencyCap, setReservedConcurrencyCap] = useState(1500);

  // Tool 3: AWS GameDay Failure Simulator State (9 Scenarios from brief)
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Lambda Concurrency & DB Capacity Math
  const lambdaDbCalculations = useMemo(() => {
    // Concurrent Executions = (RPS * DurationMs) / 1000
    const rawConcurrency = Math.ceil((incomingRps * functionDurationMs) / 1000);
    const activeInstances =
      reservedConcurrencyCap > 0
        ? Math.min(rawConcurrency, reservedConcurrencyCap)
        : rawConcurrency;
    const isThrottled = reservedConcurrencyCap > 0 && rawConcurrency > reservedConcurrencyCap;
    const throttledRps = isThrottled
      ? Math.round(incomingRps * (1 - reservedConcurrencyCap / rawConcurrency))
      : 0;

    // Direct DB connections demand (assuming 1 direct connection per Lambda container without RDS Proxy)
    const directDbConnections = activeInstances;
    const directSaturationPct = Math.round((directDbConnections / rdsMaxConnections) * 100);

    // With RDS Proxy connection pooling (typical 10:1 multiplexing efficiency)
    const proxyDbConnections = Math.ceil(activeInstances * 0.1);
    const proxySaturationPct = Math.round((proxyDbConnections / rdsMaxConnections) * 100);

    let status = "safe";
    let message = "Database connections are within healthy operating thresholds.";
    if (directSaturationPct > 100) {
      status = "critical";
      message =
        "CRITICAL: Lambda concurrent instances exceed RDS max connections! Direct DB connections will be rejected, resulting in HTTP 500 crashes and database thrashing.";
    } else if (directSaturationPct > 75) {
      status = "warning";
      message =
        "WARNING: Database connection pool is near exhaustion (>75% capacity). Traffic spikes will cause connection timeouts.";
    }

    return {
      rawConcurrency,
      activeInstances,
      isThrottled,
      throttledRps,
      directDbConnections,
      directSaturationPct,
      proxyDbConnections,
      proxySaturationPct,
      status,
      message,
    };
  }, [incomingRps, functionDurationMs, rdsMaxConnections, reservedConcurrencyCap]);

  // Decision Tree Matcher Data
  const decisionTreeOptions = {
    compute: [
      {
        id: "serverless-api",
        title: "Short-lived HTTP API or Event-Driven Function (<15 min)",
        service: "AWS Lambda",
        why: "Zero idle server costs, sub-second auto-scaling, tight integration with EventBridge, SQS, and API Gateway.",
        tradeoff: "Cold start latencies, 15-minute execution hard cap, potential downstream database connection starvation.",
        antiPattern: "Running persistent long-running background websocket listeners on Lambda.",
      },
      {
        id: "aws-native-containers",
        title: "Microservices & Docker Containers with AWS-Native Simplicity",
        service: "Amazon ECS with AWS Fargate",
        why: "Serverless container execution without managing underlying EC2 hosts or complex Kubernetes control planes.",
        tradeoff: "Less portable than raw Kubernetes; slightly higher compute cost per vCPU than reserved EC2 instances.",
        antiPattern: "Provisioning a full EKS cluster for simple 2-container CRUD applications.",
      },
      {
        id: "kubernetes-ecosystem",
        title: "Multi-Cloud Kubernetes Workloads & Cloud-Native Ecosystem (Helm, Istio)",
        service: "Amazon EKS with EKS Auto Mode",
        why: "Industry-standard Kubernetes API, automated node provisioning, deep Karpenter scaling, and EKS access entries.",
        tradeoff: "$0.10/hour cluster control plane charge; operational complexity of K8s ingress, CRDs, and service meshes.",
        antiPattern: "Managing raw EC2 worker node AMIs manually without Karpenter or EKS Auto Mode.",
      },
      {
        id: "legacy-os-specialized",
        title: "Specialized Kernels, Monolithic Windows Apps, or High-Perf NVMe IOPS",
        service: "Amazon EC2 with Nitro Enclaves",
        why: "Full bare-metal/hypervisor OS control, custom kernel modules, local ephemeral NVMe Instance Stores.",
        tradeoff: "Undifferentiated heavy lifting: OS patching, security hardening, manual AMI updates, Auto Scaling setup.",
        antiPattern: "Placing unmonitored standalone EC2 instances in public subnets with SSH port 22 open to 0.0.0.0/0.",
      },
    ],
    storage: [
      {
        id: "unstructured-media",
        title: "Images, Videos, Data Lake Parquet Files & Long-Term Backups",
        service: "Amazon S3 (Simple Storage Service)",
        why: "11 9s (99.999999999%) durability, strong read-after-write consistency, S3 Object Lock, and Intelligent-Tiering.",
        tradeoff: "Object storage is not a POSIX filesystem (no partial file byte writes or fast atomic renames).",
        antiPattern: "Using S3 like a block storage disk for relational database transaction logs.",
      },
      {
        id: "ec2-root-disk",
        title: "Low-Latency OS Boot Disk & Persistent Database Volumes",
        service: "Amazon EBS (Elastic Block Store gp3 / io2 Block Express)",
        why: "Sub-millisecond persistent block-level storage, independent volume snapshotting to S3, provisioned IOPS.",
        tradeoff: "Single AZ bound (cannot be natively mounted simultaneously across multiple Availability Zones).",
        antiPattern: "Storing shared multi-server web uploads on an EBS volume mounted to a single EC2 instance.",
      },
      {
        id: "shared-posix-file",
        title: "Shared Network Filesystem for Multi-AZ Containers & Linux Fleets",
        service: "Amazon EFS (Elastic File System)",
        why: "POSIX-compliant distributed NFS filesystem automatically replicated across 3 Availability Zones.",
        tradeoff: "Higher latency (1-3ms) compared to direct local NVMe or provisioned EBS gp3.",
        antiPattern: "Running high-transaction relational databases (like PostgreSQL) on top of standard EFS.",
      },
    ],
    database: [
      {
        id: "transactional-acid",
        title: "High-Throughput Relational SQL (ACID, Complex Joins, Foreign Keys)",
        service: "Amazon Aurora (PostgreSQL / MySQL)",
        why: "Decoupled compute and 6-way distributed 3-AZ log-structured storage; fast reader endpoints; 30s automated failover.",
        tradeoff: "Higher base cost than standard RDS; vendor-differentiated storage engine architecture.",
        antiPattern: "Hardcoding the IP address of an individual Aurora writer node in application config.",
      },
      {
        id: "massive-kv-nosql",
        title: "Ultra-High Scale Key-Value / Document Store (Single-Digit Millisecond)",
        service: "Amazon DynamoDB (Single-Table Design)",
        why: "Predictable single-digit millisecond latency at any scale; automatic horizontal sharding; DynamoDB Streams.",
        tradeoff: "Requires designing schema around access patterns upfront; expensive full table scans; 400KB item size limit.",
        antiPattern: "Using a low-cardinality status field like 'PENDING' as the partition key, causing hot partition throttling.",
      },
      {
        id: "in-memory-caching",
        title: "Sub-Millisecond Read Accelerator & Session State Store",
        service: "Amazon ElastiCache (Valkey / Redis OSS)",
        why: "Microsecond read/write latencies, in-memory data structures (hashes, sorted sets), automated cluster sharding.",
        tradeoff: "Volatile in-memory storage; cache stampede vulnerability when node restarts or keys expire simultaneously.",
        antiPattern: "Treating ElastiCache as the sole persistent system-of-record without backing up to Aurora or DynamoDB.",
      },
    ],
    messaging: [
      {
        id: "async-worker-queue",
        title: "Decoupled Point-to-Point Task Queue with Retry DLQ",
        service: "Amazon SQS (Simple Queue Service)",
        why: "Pull-based elasticity, automatic buffering of spikes, Visibility Timeout protection, and Dead-Letter Queues.",
        tradeoff: "Consumers must poll or use long-polling; Standard SQS delivers at-least-once (consumers must be idempotent).",
        antiPattern: "Using SNS pub/sub when you need worker backpressure and message persistence.",
      },
      {
        id: "fanout-pubsub",
        title: "1-to-Many Event Broadcast to Multiple Disparate Subscribers",
        service: "Amazon SNS (Simple Notification Service)",
        why: "Push-based fanout to multiple SQS queues, webhooks, SMS, and Lambda functions with subscription message filtering.",
        tradeoff: "No message persistence or queuing buffer on its own (messages are dropped if subscriber is unreachable without SQS).",
        antiPattern: "Subscribing HTTP endpoints directly to high-volume SNS topics without SQS buffer queues in front of them.",
      },
      {
        id: "enterprise-event-bus",
        title: "SaaS Integrations & Content-Based Event Routing Across AWS Accounts",
        service: "Amazon EventBridge (Event Buses & Pipes)",
        why: "Declarative JSON schema pattern matching, integration with 40+ SaaS partners, and EventBridge Pipes for point-to-point flows.",
        tradeoff: "Slightly higher latency (10-30ms) than raw SNS; subject to regional event payload limits (256KB).",
        antiPattern: "Writing custom polling scripts in EC2 cron jobs to detect AWS resource state changes.",
      },
    ],
  };

  // 9 GameDay Failure Scenarios from Section 114 of brief
  const gameDayScenarios = moduleData?.scenarios || [];

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

  // 12 Rigorous Topics
  const topics = moduleData?.topics || [];

  const currentTopic = topics[selectedTopic] || topics[0] || {};

    if (loading) {
    return <ModuleLoadingSkeleton track="cloud" currentModuleId="aws" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="cloud" currentModuleId="aws" error={error} onRetry={reload} />;
  }
return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-orange-500 selection:text-white">
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-[120px]" />
        <div className="absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-amber-400/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* TOP HEADER */}
        <ModuleNav
          track="cloud"
          currentModuleId="aws"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova AWS AI"
        />

        {/* HERO BANNER */}
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-[#18181b] p-8 md:p-12 text-white shadow-2xl mb-10">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3.5 py-1 text-xs font-mono font-bold text-orange-400 mb-4">
              <Cloud size={14} />
              <span>Deep AWS Engineering</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
              The AWS Operating Environment: Well-Architected Systems
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-300">
              No longer memorizing isolated product names. We master AWS as a unified cloud operating environment:
              IAM identity boundaries, Multi-AZ VPC networking, EC2 Nitro compute, S3 consistency, Aurora log-structured
              storage quorum, DynamoDB single-table design, ECS/EKS Auto Mode containers, Lambda concurrency traps, SQS/SNS
              asynchronous fanout, CloudWatch SRE observability, and KMS envelope encryption.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="rounded-lg bg-white/10 px-3 py-1.5 text-stone-300">
                Foundations: IAM • VPC • EC2 • S3 • RDS • Aurora
              </span>
              <span className="rounded-lg bg-white/10 px-3 py-1.5 text-stone-300">
                Services: DynamoDB • ElastiCache • Route 53 • CloudFront • ALB • Lambda • ECS • EKS
              </span>
              <span className="rounded-lg bg-orange-500/20 text-orange-300 border border-orange-500/30 px-3 py-1.5">
                Capstone: 10M-User E-Commerce & 9-Event GameDay Defense
              </span>
            </div>
          </div>
        </div>

        {/* INTERACTIVE LAB 1 & 2: TWO-COLUMN LAB DECK */}
        <div className="grid gap-8 lg:grid-cols-12 mb-12">
          {/* TOOL 1: AWS SERVICE SELECTOR & DECISION TREE (COL-7) */}
          <div className="lg:col-span-7 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Workflow size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Interactive AWS Service Selector & Decision Tree
                    </h3>
                    <p className="text-xs text-stone-500">
                      Map workload constraints to exact architectural recommendations (Section 121)
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-stone-100 px-3 py-1 font-mono text-[10px] font-bold text-stone-600 uppercase">
                  Architecture Matcher
                </span>
              </div>

              {/* Workload Category Tabs */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {[
                  { id: "compute", label: "Compute" },
                  { id: "storage", label: "Storage" },
                  { id: "database", label: "Databases" },
                  { id: "messaging", label: "Messaging" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedWorkloadCategory(cat.id);
                      setSelectedRequirement(decisionTreeOptions[cat.id][0].id);
                    }}
                    className={`rounded-xl py-2 px-2 text-center font-mono text-xs font-bold transition ${
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
                  Select Workload Requirement:
                </label>
                {decisionTreeOptions[selectedWorkloadCategory].map((opt) => (
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
                const match = decisionTreeOptions[selectedWorkloadCategory].find(
                  (o) => o.id === selectedRequirement
                );
                if (!match) return null;
                return (
                  <div className="rounded-2xl border border-orange-200 bg-orange-50/30 p-5">
                    <div className="flex items-center justify-between pb-3 border-b border-orange-200/60">
                      <span className="font-mono text-[11px] font-bold text-stone-500 uppercase">
                        Recommended AWS Service
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
                        <strong>Avoid Mistake: </strong>
                        {match.antiPattern}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* TOOL 2: LAMBDA CONCURRENCY & RDS CONNECTION POOL CALCULATOR (COL-5) */}
          <div className="lg:col-span-5 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                    <Sliders size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Lambda Concurrency & RDS Pool Simulator
                    </h3>
                    <p className="text-xs text-stone-500">
                      Simulate the Serverless DB Connection Starvation Trap (Section 70)
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-stone-100 px-3 py-1 font-mono text-[10px] font-bold text-stone-600 uppercase">
                  Capacity Sizer
                </span>
              </div>

              {/* Sliders */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Peak Ingress Traffic:</span>
                    <span className="font-mono text-orange-600">{incomingRps.toLocaleString()} RPS</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="60000"
                    step="1000"
                    value={incomingRps}
                    onChange={(e) => setIncomingRps(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Lambda Execution Duration:</span>
                    <span className="font-mono text-orange-600">{functionDurationMs} ms</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="1000"
                    step="20"
                    value={functionDurationMs}
                    onChange={(e) => setFunctionDurationMs(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Aurora Max Connections (Instance RAM limit):</span>
                    <span className="font-mono text-stone-700">{rdsMaxConnections.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="100"
                    value={rdsMaxConnections}
                    onChange={(e) => setRdsMaxConnections(Number(e.target.value))}
                    className="w-full accent-stone-700"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Reserved Concurrency Cap (0 = Unlimited):</span>
                    <span className="font-mono text-stone-700">
                      {reservedConcurrencyCap === 0 ? "Unlimited" : reservedConcurrencyCap.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="250"
                    value={reservedConcurrencyCap}
                    onChange={(e) => setReservedConcurrencyCap(Number(e.target.value))}
                    className="w-full accent-stone-700"
                  />
                </div>
              </div>

              {/* Real-time Math Output */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 space-y-2.5 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-stone-600">Calculated Active Concurrent Lambdas:</span>
                  <span className="font-mono font-bold text-[#18181b]">
                    {lambdaDbCalculations.activeInstances.toLocaleString()} containers
                  </span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-stone-600">Direct DB Connections Demand:</span>
                  <span
                    className={`font-mono font-bold ${
                      lambdaDbCalculations.directSaturationPct > 100
                        ? "text-rose-600"
                        : lambdaDbCalculations.directSaturationPct > 75
                        ? "text-amber-600"
                        : "text-emerald-700"
                    }`}
                  >
                    {lambdaDbCalculations.directDbConnections.toLocaleString()} ({lambdaDbCalculations.directSaturationPct}% pool)
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-stone-600">With AWS RDS Proxy (Multiplexed):</span>
                  <span className="font-mono font-bold text-emerald-700">
                    {lambdaDbCalculations.proxyDbConnections.toLocaleString()} conns ({lambdaDbCalculations.proxySaturationPct}% pool)
                  </span>
                </div>
              </div>

              {/* Status Alert Banner */}
              <div
                className={`mt-4 rounded-xl p-3 text-xs leading-relaxed ${
                  lambdaDbCalculations.status === "critical"
                    ? "bg-rose-50 text-rose-800 border border-rose-200 font-bold"
                    : lambdaDbCalculations.status === "warning"
                    ? "bg-amber-50 text-amber-800 border border-amber-200"
                    : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                }`}
              >
                {lambdaDbCalculations.message}
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE LAB 3: AWS GAMEDAY FAILURE SIMULATOR (9 SCENARIOS FROM SECTION 114) */}
        <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e7e3da]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 font-mono text-[10px] font-bold text-rose-700 uppercase mb-2">
                <AlertTriangle size={12} />
                <span>Section 114 Benchmark</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#18181b]">
                AWS GameDay: 9 Real-World Failure Scenarios
              </h2>
              <p className="text-xs md:text-sm text-stone-500 mt-1">
                Test your architectural defense across task crashes, AZ severance, Aurora failovers, hot partitions, and KMS locks.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-2 text-right">
                <div className="text-[10px] font-mono uppercase text-stone-400 font-bold">GameDay Score</div>
                <div className="text-lg font-mono font-bold text-orange-600">{gameScore} / 90 Pts</div>
              </div>
            </div>
          </div>

          {/* Scenario Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto py-4">
            {gameDayScenarios.map((sc, idx) => {
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
                  <span>Scenario {sc.id}</span>
                  {status === "correct" && <span className="h-2 w-2 rounded-full bg-emerald-500" />}
                  {status === "incorrect" && <span className="h-2 w-2 rounded-full bg-rose-500" />}
                </button>
              );
            })}
          </div>

          {/* Active Scenario Card */}
          {(() => {
            const currentScenario = gameDayScenarios[gameScenarioIndex];
            const answerHistory = gameHistory[gameScenarioIndex];

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
                  Module 7 Topic Index
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
                Module 8: Azure Architecture (Entra ID, Cosmos DB, Managed Redis, Front Door, AKS Automatic, Service Bus & AzureShop Blueprint).
              </p>
              <button
                onClick={() => navigate("/learning/cloud/azure")}
                className="w-full rounded-xl bg-orange-500 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-orange-600 transition"
              >
                Launch Module 8: Azure
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

              {/* ASCII / MERMAID ARCHITECTURAL DIAGRAM */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Architectural Blueprint & Data Plane Flow
                  </h4>
                  <span className="font-mono text-[10px] text-stone-400">Technical Topology</span>
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
                  {currentTopic?.keyTakeaways?.map((point, idx) => (
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
                <span>Nova AI AWS Architect Tutor</span>
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
                module="aws"
                currentTopic={`aws-${currentTopic.id}`}
                subtopic={currentTopic.title}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
