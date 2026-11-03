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
  Table,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 5: CLOUD DATABASES                                  */
/* Weeks 7–8: From SQL Tables to Globally Distributed Databases               */
/* Systems Theory: CMU 15-445 (Database Systems), MIT 6.5830, Berkeley CS186 */
/* -------------------------------------------------------------------------- */


export default function CloudDatabases() {
  const { data: moduleData, loading, error, reload } = useModuleContent("cloud", "databases");
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Buffer Pool & Cache Hit Ratio Simulator State
  const [dbDataSizeGb, setDbDataSizeGb] = useState(200); // 200 GB database
  const [bufferPoolRamGb, setBufferPoolRamGb] = useState(32); // 32 GB RAM buffer pool
  const [workingSetPct, setWorkingSetPct] = useState(25); // 25% of DB is active working set

  // Database Matcher Decision Engine State
  const [matcherModel, setMatcherModel] = useState("relational"); // "relational", "key-value", "document", "wide-column"
  const [matcherTxScope, setMatcherTxScope] = useState("acid-multi"); // "acid-multi", "single-row", "eventual"
  const [matcherQueryPattern, setMatcherQueryPattern] = useState("complex-sql"); // "complex-sql", "key-lookup", "range-scan"
  const [matcherScale, setMatcherScale] = useState("vertical-ha"); // "vertical-ha", "horizontal-sharded", "global-multi-region"

  // Database Failure Incident Game State
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Buffer Pool Simulator Calculations (CMU 15-445 Memory Hierarchy)
  const bufferPoolMetrics = useMemo(() => {
    const totalGb = parseFloat(dbDataSizeGb) || 1;
    const ramGb = parseFloat(bufferPoolRamGb) || 1;
    const activeWorkingSetGb = (totalGb * (parseFloat(workingSetPct) || 10)) / 100;

    // Cache hit ratio: how much of the working set fits into the buffer pool
    let hitRatio = 0;
    if (activeWorkingSetGb <= ramGb) {
      hitRatio = 98.5; // Working set entirely fits in RAM with minor cold misses
    } else {
      hitRatio = Math.max(15, ((ramGb / activeWorkingSetGb) * 95)).toFixed(1);
    }
    hitRatio = Math.min(99.9, parseFloat(hitRatio));

    // Disk read latency ~1ms (EBS gp3), RAM latency ~100ns (0.0001ms)
    // Average Latency = (HitRatio * 0.0001ms) + ((1 - HitRatio) * 1.2ms)
    const missFraction = (100 - hitRatio) / 100;
    const avgLatencyMs = (0.95 * 0.0001 + missFraction * 1.2).toFixed(3);
    const estimatedIopsNeeded = Math.ceil(missFraction * 5000);

    return {
      activeWorkingSetGb: activeWorkingSetGb.toFixed(1),
      hitRatio,
      avgLatencyMs,
      estimatedIopsNeeded,
      isMemoryConstrained: activeWorkingSetGb > ramGb,
    };
  }, [dbDataSizeGb, bufferPoolRamGb, workingSetPct]);

  // Database Matcher Decision Engine
  const recommendedDatabase = useMemo(() => {
    if (matcherModel === "relational" && matcherQueryPattern === "complex-sql") {
      if (matcherScale === "global-multi-region") {
        return {
          title: "Amazon Aurora Global Database / Azure SQL Geo-Replication",
          category: "Cloud-Native Relational",
          bestFor: "Complex relational queries, foreign keys, multi-table transactions, global read replicas",
          architecture:
            "Decoupled compute and storage. Storage replicates 6 copies across 3 AZs. Secondary regions maintain warm read replicas with <1s replication lag.",
          invariants: "Strict ACID transactions, declarative SQL optimizer, MVCC with row-level locking.",
        };
      }
      return {
        title: "PostgreSQL on AWS RDS / Azure Database for PostgreSQL / GCP Cloud SQL",
        category: "Enterprise Relational Database",
        bestFor: "Financial ledgers, transactional e-commerce, complex JOINs, rich extensions (PostGIS, pgvector)",
        architecture:
          "Multi-AZ synchronous primary/standby for zero-RPO failover, plus read replicas for read scaling.",
        invariants: "MVCC tuple versioning, WAL crash recovery, comprehensive B-tree and GiST indexing.",
      };
    }

    if (matcherModel === "key-value" || (matcherQueryPattern === "key-lookup" && matcherTxScope !== "acid-multi")) {
      return {
        title: "Amazon DynamoDB",
        category: "Serverless Managed Key-Value & Document",
        bestFor: "User sessions, shopping carts, game leaderboards, predictable single-digit millisecond scale",
        architecture:
          "Partition Key (PK) + Sort Key (SK) routing over distributed SSD nodes. Global Tables for multi-region active-active.",
        invariants: "Design schema around queries first! Single-table design, tunable eventual vs strong consistency.",
      };
    }

    if (matcherModel === "wide-column" || matcherQueryPattern === "range-scan") {
      return {
        title: "Google Cloud Bigtable",
        category: "Distributed Wide-Column Storage",
        bestFor: "IoT sensor telemetry, financial time-series, clickstreams, petabyte scale with millions of QPS",
        architecture:
          "SSTable storage on Colossus, indexed by lexicographically sorted row keys. Column families for schema agility.",
        invariants: "Atomic single-row mutations only; no multi-row joins; row-key design determines throughput.",
      };
    }

    if (matcherModel === "document" || matcherScale === "horizontal-sharded") {
      return {
        title: "MongoDB Atlas / Azure Cosmos DB",
        category: "Distributed Document Database",
        bestFor: "Flexible product catalogs, semi-structured mobile payloads, multi-document ACID transactions",
        architecture:
          "MongoDB Sharded Cluster (mongos routers + config servers + replica set shards) or Cosmos DB multi-model engine.",
        invariants: "Embedding vs referencing trade-offs, shard key cardinality determines cluster balance.",
      };
    }

    return {
      title: "Amazon Aurora / Azure SQL Database",
      category: "Managed Relational System",
      bestFor: "General enterprise transactional workloads",
      architecture: "Multi-AZ synchronous replication with automated failover and PITR.",
      invariants: "ACID transactions with MVCC.",
    };
  }, [matcherModel, matcherTxScope, matcherQueryPattern, matcherScale]);

  const databaseTopics = moduleData?.topics || [];

  const currentTopic = databaseTopics[selectedTopic] || databaseTopics[0] || {};
  const CurrentIcon = getLucideIcon(currentTopic?.icon, Database);
  const topicNumber = String(selectedTopic + 1).padStart(2, "0");

  const nextTopic = () => {
    setSelectedTopic((prev) => (prev < databaseTopics.length - 1 ? prev + 1 : 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousTopic = () => {
    setSelectedTopic((prev) => (prev > 0 ? prev - 1 : databaseTopics.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 8 Real-World Database Failure Scenarios (Section 127 of Syllabus)
  const databaseGameScenarios = moduleData?.scenarios || [];

  const handleGameAnswer = (scenarioId, optionId) => {
    const scenario = databaseGameScenarios.find((s) => s.id === scenarioId);
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
    if (gameScenarioIndex < databaseGameScenarios.length - 1) {
      setGameScenarioIndex((prev) => prev + 1);
      setGameSelection(gameHistory[databaseGameScenarios[gameScenarioIndex + 1]?.id] || null);
    }
  };

  const prevGameScenario = () => {
    if (gameScenarioIndex > 0) {
      setGameScenarioIndex((prev) => prev - 1);
      setGameSelection(gameHistory[databaseGameScenarios[gameScenarioIndex - 1]?.id] || null);
    }
  };

    if (loading) {
    return <ModuleLoadingSkeleton track="cloud" currentModuleId="databases" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="cloud" currentModuleId="databases" error={error} onRetry={reload} />;
  }
return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-12 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-orange-500/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-8 md:px-8">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="cloud"
          currentModuleId="databases"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Nova Database AI"
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
                    Nova AI Cloud Database Architect Tutor
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    Ask questions about CMU 15-445 Buffer Pools, Write-Ahead Logging (WAL), PostgreSQL MVCC, DynamoDB Single-Table Design, or Aurora 6-copy storage quorums.
                  </p>
                </div>
              </div>
            </div>

            <LearningRo currentTopic={`databases-${currentTopic.id}`} />
          </section>
        )}

        {/* HERO BANNER */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-2xl md:p-9 relative">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/30 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#f97316] mb-3">
                <Database size={13} />
                <span>From SQL Tables to Globally Distributed Databases</span>
              </div>

              <h1 className="text-2xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
                Relational, NoSQL & Distributed Databases
              </h1>

              <p className="mt-3 text-xs md:text-sm leading-relaxed text-stone-300 max-w-2xl">
                The stateful heart of cloud architecture. Master the Logical vs Physical view, B-trees, Buffer Pools, Write-Ahead Logging (WAL), MVCC, ACID isolation levels, Amazon Aurora, DynamoDB Single-Table design, Cosmos DB 5 consistency tiers, Sharding, and Point-in-Time Recovery.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-4 text-center">
                <div className="font-mono text-2xl font-extrabold text-[#f97316]">CMU 15-445</div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mt-0.5">
                  Systems Theory Core
                </div>
              </div>

              <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-4 text-center">
                <div className="font-mono text-2xl font-extrabold text-amber-400">12 Topics</div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mt-0.5">
                  Databases Track
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TOPIC SELECTION PILLS */}
        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {databaseTopics.map((topic, index) => {
            const Icon = getLucideIcon(topic.icon, Database);
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
                    {selectedTopic + 1} / {databaseTopics.length}
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
                      System Diagram: {currentTopic.shortTitle}
                    </span>
                  </div>
                  <span className="rounded-full bg-orange-500/20 border border-orange-500/40 px-2.5 py-0.5 font-mono text-[10px] text-orange-300">
                    CMU 15-445 Architecture
                  </span>
                </div>

                {/* DIAGRAM RENDERER BASED ON TOPIC */}
                {currentTopic.diagramType === "db-logical-physical-stack" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-3">
                      <div className="text-emerald-400 font-bold mb-1">LOGICAL VIEW (Application Developer)</div>
                      <div className="text-stone-300 text-[11px]">
                        SELECT u.name, o.total FROM users u JOIN orders o ON u.id = o.user_id WHERE u.country = 'IN';
                      </div>
                      <div className="text-[10px] text-emerald-300/80 mt-1">
                        Declarative: Entities, Relations, Columns, Foreign Keys, Transactions
                      </div>
                    </div>
                    <div className="text-center text-stone-500">↓↓ Query Optimizer & Storage Manager Translation ↓↓</div>
                    <div className="rounded-xl border border-orange-500/40 bg-orange-950/30 p-3">
                      <div className="text-orange-400 font-bold mb-1">PHYSICAL VIEW (DBMS Engine Underneath)</div>
                      <div className="text-stone-300 text-[11px]">
                        Hash Join (Cost 142.1) → Bitmap Index Scan (users_country_idx) → Buffer Pool (Hit Ratio 99.4%) → WAL fsync
                      </div>
                      <div className="text-[10px] text-orange-300/80 mt-1">
                        Physical: 8KB Pages, Dirty Eviction, ARIES Log Sequence Numbers, Row-Level Locks
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "query-optimizer-pipeline" && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-center text-[11px]">
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-orange-400 font-bold">1. SQL Parser</span>
                        <div className="text-[10px] text-stone-400">AST Tree & Syntax</div>
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-amber-400 font-bold">2. Rewriter</span>
                        <div className="text-[10px] text-stone-400">Views & Rules</div>
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-orange-500/40">
                        <span className="text-emerald-400 font-bold">3. Cost Optimizer</span>
                        <div className="text-[10px] text-stone-400">Stats & Join Orders</div>
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-blue-400 font-bold">4. Executor</span>
                        <div className="text-[10px] text-stone-400">Volcano Next() Engine</div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-black/60 p-3 border border-stone-800 text-[10px] text-stone-300">
                      <span className="text-orange-400 font-bold">EXPLAIN Output Sample:</span><br/>
                      Hash Join (cost=21.50..78.90 rows=45 width=32)<br/>
                      &nbsp;&nbsp;Hash Cond: (orders.user_id = users.id)<br/>
                      &nbsp;&nbsp;→ Index Scan using orders_created_idx on orders (cost=0.29..45.10)<br/>
                      &nbsp;&nbsp;→ Hash (cost=14.20..14.20 rows=560)<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ Bitmap Heap Scan on users (cost=4.20..14.20)
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "buffer-pool-wal-flow" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                      <div className="rounded-xl border border-stone-700 bg-stone-800 p-3">
                        <div className="text-emerald-400 font-bold mb-1">Buffer Pool (RAM):</div>
                        <div className="text-stone-300">Contains 8 KB Page Frames</div>
                        <div className="text-stone-400 text-[10px] mt-1">
                          Dirty pages kept in memory. LRU / CLOCK eviction frees clean or flushes dirty pages.
                        </div>
                      </div>
                      <div className="rounded-xl border border-stone-700 bg-stone-800 p-3">
                        <div className="text-orange-400 font-bold mb-1">WAL (Write-Ahead Log):</div>
                        <div className="text-stone-300">Sequential Append Stream</div>
                        <div className="text-stone-400 text-[10px] mt-1">
                          Log record fsynced to disk BEFORE transaction commit succeeds. Enables instant crash recovery.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-black/60 p-2 text-center text-[10px] text-stone-400">
                      Commit Invariant: [Transaction Update] → [Append to WAL Buffer] → [fsync WAL to Disk] → [Return Commit OK] → [Lazy Flush Pages to DB Disk]
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "btree-and-composite-structure" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-xl bg-black/60 p-3 border border-stone-800 text-center">
                      <div className="text-amber-400 font-bold mb-1">B-Tree Node Search Traversal (O(log N)):</div>
                      <div className="text-stone-300 text-xs">
                        [ Root: 50 ]<br/>
                        &nbsp;&nbsp;↙&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↘<br/>
                        [ 20 | 35 ]&nbsp;&nbsp;&nbsp;&nbsp;[ 65 | 80 ]<br/>
                        &nbsp;&nbsp;↙&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;↘&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↙&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;↘<br/>
                        Leaves: [10..19] ↔ [20..34] ↔ [35..49] ↔ [50..64] ↔ [65..79] ↔ [80..99]
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-orange-400 font-bold">Composite (customer_id, created_at):</span><br/>
                        Accelerates: WHERE customer_id = 123 AND created_at {'>'} '2026-01-01'
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-red-400 font-bold">Leftmost Prefix Failure:</span><br/>
                        CANNOT accelerate: WHERE created_at {'>'} '2026-01-01' alone!
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "isolation-anomalies-matrix" && (
                  <div className="overflow-x-auto text-[10px] font-mono">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-stone-700 text-stone-400">
                          <th className="py-1.5">Isolation Level</th>
                          <th className="py-1.5">Dirty Read</th>
                          <th className="py-1.5">Non-Repeatable Read</th>
                          <th className="py-1.5">Phantom Read</th>
                          <th className="py-1.5">Serialization Anomaly</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-800 text-stone-300">
                        <tr>
                          <td className="py-1.5 text-stone-400">Read Uncommitted</td>
                          <td className="text-red-400 font-bold">Allowed</td>
                          <td className="text-red-400 font-bold">Allowed</td>
                          <td className="text-red-400 font-bold">Allowed</td>
                          <td className="text-red-400 font-bold">Allowed</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 text-orange-400 font-bold">Read Committed (Default)</td>
                          <td className="text-emerald-400">Prevented</td>
                          <td className="text-red-400 font-bold">Allowed</td>
                          <td className="text-red-400 font-bold">Allowed</td>
                          <td className="text-red-400 font-bold">Allowed</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 text-amber-400 font-bold">Repeatable Read</td>
                          <td className="text-emerald-400">Prevented</td>
                          <td className="text-emerald-400">Prevented</td>
                          <td className="text-emerald-400">Prevented*</td>
                          <td className="text-red-400 font-bold">Allowed (Write-Skew)</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 text-emerald-400 font-bold">Serializable</td>
                          <td className="text-emerald-400">Prevented</td>
                          <td className="text-emerald-400">Prevented</td>
                          <td className="text-emerald-400">Prevented</td>
                          <td className="text-emerald-400 font-bold">Prevented (Abort on Conflict)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {currentTopic.diagramType === "mvcc-snapshot-tuples" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-xl bg-stone-800 p-3 border border-stone-700">
                      <div className="text-orange-400 font-bold mb-1">PostgreSQL Tuple Versioning:</div>
                      <div className="text-stone-300 text-[11px]">
                        Tuple 1: [xmin: 100, xmax: 105, balance: ₹100] → (expired/superseded)<br/>
                        Tuple 2: [xmin: 105, xmax: 0,   balance: ₹50]  → (currently visible)
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-emerald-400 font-bold">Readers Never Block Writers:</span> Readers view the snapshot matching their start timestamp.
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-amber-400 font-bold">Autovacuum Daemons:</span> Reclaim expired dead tuples and update free-space maps.
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "primary-replica-sync-async" && (
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-emerald-500/40 flex justify-between items-center">
                      <div>
                        <span className="text-emerald-400 font-bold">Synchronous Standby (Multi-AZ HA)</span>
                        <div className="text-stone-400 text-[10px]">Write waits for standby ACK before Commit OK</div>
                      </div>
                      <span className="text-xs text-emerald-300 font-bold">RPO = 0 (Zero Data Loss)</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-amber-500/40 flex justify-between items-center">
                      <div>
                        <span className="text-amber-400 font-bold">Asynchronous Read Replica (Read Scaling)</span>
                        <div className="text-stone-400 text-[10px]">WAL streams in background; primary commits instantly</div>
                      </div>
                      <span className="text-xs text-amber-300 font-bold">RPO = Replication Lag</span>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "aurora-storage-quorum" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="rounded-xl bg-black/60 p-3 border border-orange-500/40 text-center">
                      <div className="text-orange-400 font-bold mb-1">Amazon Aurora 6-Way Quorum Consensus:</div>
                      <div className="text-stone-300 text-[11px]">
                        AZ-A: [Copy 1] [Copy 2] &nbsp;|&nbsp; AZ-B: [Copy 3] [Copy 4] &nbsp;|&nbsp; AZ-C: [Copy 5] [Copy 6]
                      </div>
                      <div className="text-[10px] text-emerald-400 font-bold mt-1">
                        Write Quorum: 4 of 6 ACKs &nbsp;|&nbsp; Read Quorum: 3 of 6 ACKs
                      </div>
                    </div>
                    <div className="text-stone-400 text-[10px] text-center">
                      Survives loss of an entire AZ (2 copies down) plus an additional node crash (3 copies down) without any read interruption!
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "nosql-four-models-quadrant" && (
                  <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-orange-500/30">
                      <span className="text-orange-400 font-bold">KEY-VALUE:</span> DynamoDB / Redis<br/>
                      <span className="text-stone-400">Access: Key → Blob | O(1) Lookup</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-blue-500/30">
                      <span className="text-blue-400 font-bold">DOCUMENT:</span> MongoDB / Cosmos DB<br/>
                      <span className="text-stone-400">Access: Nested JSON/BSON Trees</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-emerald-500/30">
                      <span className="text-emerald-400 font-bold">WIDE-COLUMN:</span> Bigtable / Cassandra<br/>
                      <span className="text-stone-400">Access: Sorted Row Key + Column Families</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-purple-500/30">
                      <span className="text-purple-400 font-bold">GRAPH:</span> Neptune / Neo4j<br/>
                      <span className="text-stone-400">Access: Vertices, Edges, Traversal</span>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "cosmos-consistency-spectrum" && (
                  <div className="space-y-1.5 font-mono text-[10px]">
                    <div className="rounded-lg bg-emerald-950/40 border border-emerald-500/40 p-2 flex justify-between">
                      <span className="font-bold text-emerald-300">1. Strong:</span>
                      <span>Linearizable, zero stale reads, highest latency</span>
                    </div>
                    <div className="rounded-lg bg-blue-950/40 border border-blue-500/40 p-2 flex justify-between">
                      <span className="font-bold text-blue-300">2. Bounded Staleness:</span>
                      <span>Lags by at most K versions or T seconds</span>
                    </div>
                    <div className="rounded-lg bg-orange-950/40 border border-orange-500/40 p-2 flex justify-between">
                      <span className="font-bold text-orange-300">3. Session (Default):</span>
                      <span>Read-your-own-writes per user session token</span>
                    </div>
                    <div className="rounded-lg bg-amber-950/40 border border-amber-500/40 p-2 flex justify-between">
                      <span className="font-bold text-amber-300">4. Consistent Prefix:</span>
                      <span>Never see out-of-order updates, may lag</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 border border-stone-700 p-2 flex justify-between">
                      <span className="font-bold text-stone-300">5. Eventual:</span>
                      <span>Lowest latency, highest throughput, eventual convergence</span>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "sharding-scatter-gather" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                      <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-2.5">
                        <div className="text-emerald-400 font-bold mb-1">Targeted Shard Routing:</div>
                        <div className="text-stone-300">WHERE user_id = 101</div>
                        <div className="text-stone-400 text-[10px] mt-1">
                          Hash(101) → routes directly to Shard 3. Fast single-hop lookup.
                        </div>
                      </div>
                      <div className="rounded-xl border border-red-500/40 bg-red-950/20 p-2.5">
                        <div className="text-red-400 font-bold mb-1">Scatter-Gather Broadcast:</div>
                        <div className="text-stone-300">WHERE email = 'sam@...'</div>
                        <div className="text-stone-400 text-[10px] mt-1">
                          Coordinator broadcasts to ALL shards and merges results in RAM. Slow!
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "polyglot-persistence-stack" && (
                  <div className="space-y-2 font-mono text-[10px]">
                    <div className="rounded-lg bg-stone-800 p-2 border border-stone-700 flex justify-between items-center">
                      <span className="text-orange-400 font-bold">PostgreSQL / Aurora:</span>
                      <span className="text-stone-300">Orders, Payments, Ledgers (ACID & Constraints)</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2 border border-stone-700 flex justify-between items-center">
                      <span className="text-blue-400 font-bold">AWS DynamoDB:</span>
                      <span className="text-stone-300">Sessions, Shopping Carts, Tokens (Sub-10ms Scale)</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2 border border-stone-700 flex justify-between items-center">
                      <span className="text-emerald-400 font-bold">Google Cloud Bigtable:</span>
                      <span className="text-stone-300">Clickstream, IoT Telemetry, Time-Series Logs</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2 border border-stone-700 flex justify-between items-center">
                      <span className="text-purple-400 font-bold">Amazon S3 / Azure Blob:</span>
                      <span className="text-stone-300">Product Images, PDF Invoices, WAL PITR Backups</span>
                    </div>
                  </div>
                )}
              </div>

              {/* ARCHITECTURAL DECISION CALLOUT */}
              <div className="mt-6 rounded-2xl border border-stone-300 bg-stone-100 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <Lightbulb size={16} className="text-orange-600" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-800">
                    Lead Database Architect Invariant:
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
                  <span>Senior Database Systems Interview Challenge:</span>
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

            {/* INTERACTIVE DATABASE WORKLOAD MATCHER LAB */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Sliders size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#18181b]">
                    Interactive Database Workload Matcher
                  </h3>
                  <p className="text-xs text-stone-500">
                    Specify data model, transaction scope, query patterns, and scale to identify the optimal database engine.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    1. Data Model:
                  </label>
                  <select
                    value={matcherModel}
                    onChange={(e) => setMatcherModel(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="relational">Relational (Tables, SQL, Foreign Keys)</option>
                    <option value="key-value">Key-Value (Opaque items, ultra-fast lookup)</option>
                    <option value="document">Document (Nested JSON/BSON structures)</option>
                    <option value="wide-column">Wide-Column (Time-series, sparse matrix)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    2. Transaction Scope:
                  </label>
                  <select
                    value={matcherTxScope}
                    onChange={(e) => setMatcherTxScope(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="acid-multi">ACID across multiple tables/entities</option>
                    <option value="single-row">Atomic single-row mutations only</option>
                    <option value="eventual">Eventual consistency tolerated</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    3. Primary Access Pattern:
                  </label>
                  <select
                    value={matcherQueryPattern}
                    onChange={(e) => setMatcherQueryPattern(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="complex-sql">Complex JOINs, Aggregations, Ad-hoc SQL</option>
                    <option value="key-lookup">Exact Key / Partition Lookups</option>
                    <option value="range-scan">Sequential Time-Series Range Scans</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    4. Scale Horizon:
                  </label>
                  <select
                    value={matcherScale}
                    onChange={(e) => setMatcherScale(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="vertical-ha">Single-node primary with Multi-AZ Standby</option>
                    <option value="horizontal-sharded">Horizontally sharded petabyte cluster</option>
                    <option value="global-multi-region">Global Multi-Region Active-Active</option>
                  </select>
                </div>
              </div>

              {/* RECOMMENDED OUTCOME CARD */}
              <div className="rounded-2xl border border-orange-300 bg-gradient-to-br from-orange-50/80 via-white to-amber-50/80 p-5 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-orange-600" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-800">
                      Recommended Database Engine:
                    </span>
                    <span className="rounded-full bg-orange-600 px-3 py-0.5 text-xs font-bold text-white">
                      {recommendedDatabase.title}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-stone-500">
                    {recommendedDatabase.category}
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-2 mb-3 text-xs font-mono">
                  <div className="rounded-xl bg-white/90 p-2.5 border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">BEST FOR:</span>
                    <span className="font-bold text-stone-800">{recommendedDatabase.bestFor}</span>
                  </div>
                  <div className="rounded-xl bg-white/90 p-2.5 border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">SYSTEM INVARIANTS:</span>
                    <span className="font-bold text-stone-800">{recommendedDatabase.invariants}</span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {recommendedDatabase.architecture}
                </p>
              </div>
            </div>

            {/* INTERACTIVE BUFFER POOL & CACHE HIT SIMULATOR */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <Gauge size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#18181b]">
                    Interactive Buffer Pool & Cache Hit Ratio Simulator (CMU 15-445)
                  </h3>
                  <p className="text-xs text-stone-500">
                    Simulate how RAM buffer pool sizing impacts disk I/O, cache hit ratios, and average query latency.
                  </p>
                </div>
              </div>

              {/* SLIDERS */}
              <div className="grid gap-6 md:grid-cols-3 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">Total Database Size:</span>
                    <span className="font-bold text-orange-600">{dbDataSizeGb} GB</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="50"
                    value={dbDataSizeGb}
                    onChange={(e) => setDbDataSizeGb(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">Active Working Set:</span>
                    <span className="font-bold text-blue-600">{workingSetPct}% ({bufferPoolMetrics.activeWorkingSetGb} GB)</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="5"
                    value={workingSetPct}
                    onChange={(e) => setWorkingSetPct(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">Buffer Pool RAM:</span>
                    <span className="font-bold text-emerald-600">{bufferPoolRamGb} GB</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="256"
                    step="8"
                    value={bufferPoolRamGb}
                    onChange={(e) => setBufferPoolRamGb(Number(e.target.value))}
                    className="w-full accent-emerald-600"
                  />
                </div>
              </div>

              {/* SIMULATION RESULTS */}
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider block mb-1">
                    Cache Hit Ratio:
                  </span>
                  <div className={`text-2xl font-black font-mono ${bufferPoolMetrics.hitRatio > 95 ? "text-emerald-700" : "text-red-600"}`}>
                    {bufferPoolMetrics.hitRatio}%
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">
                    {bufferPoolMetrics.hitRatio > 95 ? "Healthy memory-resident set" : "High disk thrashing warning!"}
                  </span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider block mb-1">
                    Average Query Latency:
                  </span>
                  <div className="text-2xl font-black text-stone-800 font-mono">
                    {bufferPoolMetrics.avgLatencyMs} ms
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">RAM (100ns) vs Disk (1.2ms)</span>
                </div>

                <div className="rounded-2xl border border-orange-300 bg-orange-500 text-white p-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider block mb-1 text-orange-100">
                    Disk IOPS Required:
                  </span>
                  <div className="text-2xl font-black font-mono">
                    ~{bufferPoolMetrics.estimatedIopsNeeded} IOPS
                  </div>
                  <span className="text-[10px] font-mono text-orange-200">
                    {bufferPoolMetrics.isMemoryConstrained ? "Requires high provisioned EBS IOPS" : "Baseline disk I/O sufficient"}
                  </span>
                </div>
              </div>
            </div>

            {/* DATABASE CRISIS INCIDENT SIMULATOR GAME */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-white shadow-md">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Database Crisis Simulator: Production GameDay
                    </h3>
                    <p className="text-xs text-stone-500">
                      Triage 8 production database disasters. Test your understanding of failover, RPO, and PITR.
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
                      {gameScenarioIndex + 1} / {databaseGameScenarios.length}
                    </span>
                    <button
                      onClick={nextGameScenario}
                      disabled={gameScenarioIndex === databaseGameScenarios.length - 1}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-white text-stone-600 hover:text-stone-900 disabled:opacity-40"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* CURRENT SCENARIO CARD */}
              {(() => {
                const scenario = databaseGameScenarios[gameScenarioIndex];
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
                  Module 5 Topic Index
                </h3>
              </div>

              <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
                {databaseTopics.map((topic, index) => {
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
                  Core Database Invariants
                </h3>
              </div>

              <div className="space-y-3 font-mono text-[11px] text-stone-300">
                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">WAL Before Commit</span>
                  Log records must be fsynced to disk before transaction commit succeeds. Enables crash recovery.
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">MVCC Invariant</span>
                  Readers never block writers, and writers never block readers. Snapshots prevent read lock contention.
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">Replication ≠ Backup</span>
                  Replication duplicates drops and ransomware in 5ms. Always enable WAL Point-in-Time Recovery (PITR).
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">NoSQL Access Patterns</span>
                  Never design NoSQL around entities; design strictly around target read/write query patterns.
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
                Module 6: Cloud Security, Identity & Zero-Trust Architecture (IAM, KMS, OAuth2 & Network Isolation).
              </p>
              <button
                disabled
                className="w-full rounded-xl bg-stone-100 py-2.5 text-xs font-bold text-stone-400 cursor-not-allowed"
              >
                Module 6 Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
