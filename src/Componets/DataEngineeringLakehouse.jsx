// projectx/src/Componets/DataEngineeringLakehouse.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Database,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Terminal,
  FileCode,
  BookOpen,
  Sparkles,
  ExternalLink,
  Layers,
  Cpu,
  Server,
  Activity,
  Workflow,
  BarChart3,
  HardDrive,
  GitBranch,
  Filter,
  CheckCircle,
  Play,
  Copy,
  Check,
  Table,
  Sliders,
  Boxes,
  Clock,
  Zap,
  ShieldCheck,
  RotateCcw,
  Globe,
  Key,
  Binary,
  FileSpreadsheet,
  Code2,
  Eye,
  EyeOff
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import DataEngineeringLakehouseSections from "./DataEngineeringLakehouseSections";

export default function DataEngineeringLakehouse() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("medallion_pipeline"); // 'medallion_pipeline' | 'table_formats' | 'occ_transactions' | 'time_travel' | 'compaction' | 'governance_quiz'

  // =========================================================================
  // WORKBENCH 1: Medallion Architecture Pipeline Simulator (Bronze -> Silver -> Gold)
  // =========================================================================
  const [pipelineStage, setPipelineStage] = useState("all"); // 'all' | 'bronze' | 'silver' | 'gold' | 'dlq'
  
  // Raw incoming source records (including dirty amounts, duplicates, missing IDs)
  const rawStreamPayloads = [
    { event_id: "EVT-101", customer_id: "C101", name: "  Rahul  ", email: "RAHUL@EXAMPLE.COM", amount: "5000", status: "SUCCESS", timestamp: "2026-11-09T10:00:00Z" },
    { event_id: "EVT-102", customer_id: "C102", name: "Amit", email: "amit@example.com", amount: "invalid_num", status: "SUCCESS", timestamp: "2026-11-09T10:05:00Z" },
    { event_id: "EVT-103", customer_id: "C103", name: "Priya", email: "priya@example.com", amount: "2500", status: "PENDING", timestamp: "2026-11-09T10:10:00Z" },
    { event_id: "EVT-104", customer_id: null, name: "Unknown", email: null, amount: "1200", status: "UNKNOWN", timestamp: "2026-11-09T10:12:00Z" },
    { event_id: "EVT-101", customer_id: "C101", name: "Rahul", email: "rahul@example.com", amount: "5000", status: "SUCCESS", timestamp: "2026-11-09T10:15:00Z" }, // Duplicate!
    { event_id: "EVT-105", customer_id: "C104", name: "Ananya", email: "ananya@example.com", amount: "8900", status: "SUCCESS", timestamp: "2026-11-09T10:20:00Z" },
    { event_id: "EVT-106", customer_id: "C101", name: "Rahul", email: "rahul@example.com", amount: "3200", status: "SUCCESS", timestamp: "2026-11-09T10:25:00Z" },
  ];

  // Silver Pipeline Transformation & DLQ
  const { silverValid, deadLetterQueue } = useMemo(() => {
    const valid = [];
    const dlq = [];
    const seenEventIds = new Set();

    rawStreamPayloads.forEach(record => {
      // Check duplicate
      if (seenEventIds.has(record.event_id)) {
        dlq.push({ ...record, dlq_reason: "Duplicate event_id detected" });
        return;
      }
      seenEventIds.add(record.event_id);

      // Check required fields
      if (!record.customer_id || !record.amount) {
        dlq.push({ ...record, dlq_reason: "Missing mandatory fields (customer_id or amount)" });
        return;
      }

      // Check amount numeric & positive
      const numAmount = parseFloat(record.amount);
      if (isNaN(numAmount) || numAmount < 0) {
        dlq.push({ ...record, dlq_reason: `Invalid numeric amount: '${record.amount}'` });
        return;
      }

      // Check valid status
      const validStatuses = ["SUCCESS", "PENDING", "FAILED"];
      if (!validStatuses.includes(record.status.toUpperCase())) {
        dlq.push({ ...record, dlq_reason: `Invalid status code: '${record.status}'` });
        return;
      }

      // Cleaned Silver Record
      valid.push({
        event_id: record.event_id,
        customer_id: record.customer_id.trim(),
        name: record.name.trim(),
        email: record.email.toLowerCase().trim(),
        amount: numAmount,
        status: record.status.toUpperCase(),
        order_date: record.timestamp.split("T")[0]
      });
    });

    return { silverValid: valid, deadLetterQueue: dlq };
  }, []);

  // Gold Analytical Aggregation
  const goldMetrics = useMemo(() => {
    const successful = silverValid.filter(r => r.status === "SUCCESS");
    const totalRevenue = successful.reduce((acc, curr) => acc + curr.amount, 0);
    const totalTransactions = successful.length;
    const uniqueCustomers = new Set(successful.map(r => r.customer_id)).size;
    const avgOrderValue = totalTransactions > 0 ? (totalRevenue / totalTransactions).toFixed(2) : 0;

    return {
      totalRevenue,
      totalTransactions,
      uniqueCustomers,
      avgOrderValue
    };
  }, [silverValid]);

  // =========================================================================
  // WORKBENCH 2: Open Table Formats Triad Comparison (Delta vs Iceberg vs Hudi)
  // =========================================================================
  const [selectedFormat, setSelectedFormat] = useState("delta"); // 'delta' | 'iceberg' | 'hudi'
  const [hudiStorageMode, setHudiStorageMode] = useState("mor"); // 'cow' | 'mor'

  const FORMAT_SPECIFICATIONS = {
    delta: {
      name: "Delta Lake",
      tagline: "Transactional Lakehouse Table Protocol",
      metadataArchitecture: "_delta_log/ Single Source of Truth with ordered JSON commits & Checkpoint Parquet files",
      commitModel: "Optimistic Concurrency Control (OCC) with atomic multi-part commits",
      readMechanics: "Reads the latest checkpoint + subsequent JSON commits to compute valid Parquet file set",
      writeMechanics: "Appends Parquet files, writes commit JSON into _delta_log; Deletion vectors for selective row updates",
      bestFor: "Unified Spark/Databricks streaming & batch pipelines, ACID reliability, fast time travel",
      sampleStructure: `transactions/
├── _delta_log/
│   ├── 00000000000000000000.json      # Initial schema & file additions
│   ├── 00000000000000000001.json      # Batch append
│   ├── 00000000000000000002.checkpoint.parquet # Compacted state
│   └── 00000000000000000002.json
├── part-00001-c000.snappy.parquet
└── part-00002-c000.snappy.parquet`
    },
    iceberg: {
      name: "Apache Iceberg",
      tagline: "High-Performance Analytical Open Table Format",
      metadataArchitecture: "Hierarchical Tree: Metadata JSON -> Manifest List -> Manifest Files -> Parquet Data Files",
      commitModel: "Atomic pointer swap on metadata file via Catalog (Glue, REST, Nessie, Hive)",
      readMechanics: "Engine reads manifest list to filter relevant manifest files via partition pruning & column stats",
      writeMechanics: "Writes new data files, creates manifest file, generates manifest list, swaps table pointer atomically",
      bestFor: "Multi-engine lakehouses (Trino, Athena, Spark, Flink, DuckDB, Snowflake), partition evolution",
      sampleStructure: `metadata/
├── v1.metadata.json                  # Schema, partition spec & snapshot pointer
├── snap-10293847-1-UUID.avro         # Manifest list (tracks manifests & stats)
└── manifest-UUID.avro                # Manifest file (tracks Parquet files & min/max bounds)
data/
└── year=2026/month=11/data-001.parquet`
    },
    hudi: {
      name: "Apache Hudi",
      tagline: "Streaming Ingestion & Incremental Processing Platform",
      metadataArchitecture: ".hoodie/ Timeline recording Instants (requested, inflight, completed) & File Groups",
      commitModel: "Timeline instants with pluggable indexing (Bloom filter, HBase, Simple, Record-level)",
      readMechanics: "Snapshot queries, Read-Optimized queries, and Incremental Change-Stream queries",
      writeMechanics: "Copy-on-Write (rewrites base files) OR Merge-on-Read (appends to delta log files + background compaction)",
      bestFor: "CDC pipelines from OLTP databases, real-time record upserts, and streaming consumption",
      sampleStructure: `.hoodie/
├── 20261109100000.commit             # Completed table commit
├── 20261109100500.deltacommit        # Fast delta append (MoR)
└── 20261109101000.compaction.inflight# Background compaction process
data/
├── base-file-group-1.parquet         # Main columnar dataset
└── .log-file-group-1_1.log           # Delta updates pending compaction`
    }
  };

  // =========================================================================
  // WORKBENCH 3: ACID Transactions & Optimistic Concurrency Control (OCC)
  // =========================================================================
  const [occStep, setOccStep] = useState(1); // 1: Read, 2: Write, 3: Commit
  const [simulateConflict, setSimulateConflict] = useState(false);
  const [occLog, setOccLog] = useState([]);

  const handleRunOccSimulation = () => {
    const logs = [];
    logs.push("Actor 1 (ETL Job) begins transaction: reads Table Snapshot Version 10.");
    logs.push("Actor 2 (CDC Pipeline) begins transaction: reads Table Snapshot Version 10.");
    logs.push("Actor 1 writes new Parquet batch for partition '2026-11-09'.");
    
    if (simulateConflict) {
      logs.push("Actor 2 commits first! Updates Table Snapshot to Version 11.");
      logs.push("Actor 1 attempts to commit to Version 11: CONFLICT DETECTED on overlapping partition!");
      logs.push("Actor 1 executes Optimistic Retry: re-reads Version 11, re-evaluates delta, and commits as Version 12.");
      logs.push("Result: Atomic integrity preserved. Zero corrupted rows or silent overwrites.");
    } else {
      logs.push("Actor 2 writes changes to separate partition '2026-11-08'.");
      logs.push("Actor 1 commits Version 11 atomically. Zero conflicts detected.");
      logs.push("Actor 2 commits Version 12 atomically. Both transactions committed successfully.");
    }
    setOccLog(logs);
  };

  // =========================================================================
  // WORKBENCH 4: Time Travel & Table History Inspector
  // =========================================================================
  const [selectedVersion, setSelectedVersion] = useState(3); // 0, 1, 2, 3

  const TABLE_VERSIONS = [
    {
      version: 0,
      timestamp: "2026-11-07 09:00:00",
      operation: "CREATE TABLE",
      description: "Initial table creation with 3 seed customers",
      rows: [
        { id: 101, name: "Rahul", city: "Pune", balance: 5000 },
        { id: 102, name: "Amit", city: "Mumbai", balance: 2500 },
        { id: 103, name: "Priya", city: "Delhi", balance: 3200 }
      ]
    },
    {
      version: 1,
      timestamp: "2026-11-08 14:30:00",
      operation: "APPEND",
      description: "Appended new customers from mobile sign-ups",
      rows: [
        { id: 101, name: "Rahul", city: "Pune", balance: 5000 },
        { id: 102, name: "Amit", city: "Mumbai", balance: 2500 },
        { id: 103, name: "Priya", city: "Delhi", balance: 3200 },
        { id: 104, name: "Ananya", city: "Bengaluru", balance: 8900 }
      ]
    },
    {
      version: 2,
      timestamp: "2026-11-09 02:00:00",
      operation: "UPDATE (Corrupted Run)",
      description: "Buggy batch job accidentally reset cities to 'UNKNOWN'",
      rows: [
        { id: 101, name: "Rahul", city: "UNKNOWN", balance: 5000 },
        { id: 102, name: "Amit", city: "UNKNOWN", balance: 2500 },
        { id: 103, name: "Priya", city: "UNKNOWN", balance: 3200 },
        { id: 104, name: "Ananya", city: "UNKNOWN", balance: 8900 }
      ]
    },
    {
      version: 3,
      timestamp: "2026-11-09 04:15:00",
      operation: "RESTORE TABLE",
      description: "Data engineer executed RESTORE TABLE TO VERSION AS OF 1",
      rows: [
        { id: 101, name: "Rahul", city: "Pune", balance: 5000 },
        { id: 102, name: "Amit", city: "Mumbai", balance: 2500 },
        { id: 103, name: "Priya", city: "Delhi", balance: 3200 },
        { id: 104, name: "Ananya", city: "Bengaluru", balance: 8900 }
      ]
    }
  ];

  // =========================================================================
  // WORKBENCH 5: Small File Problem & Compaction (OPTIMIZE)
  // =========================================================================
  const [isCompacted, setIsCompacted] = useState(false);

  const fileMetrics = useMemo(() => {
    if (!isCompacted) {
      return {
        fileCount: 1000,
        avgFileSize: "200 KB",
        totalSize: "200 MB",
        s3GetRequests: 1000,
        queryPlanningTimeMs: 420,
        queryExecutionLatencyMs: 2450,
        sparkTasksSpawned: 1000,
        statusLabel: "Fragmented (Small File Bottleneck)",
        statusColor: "text-rose-700 bg-rose-50 border-rose-200"
      };
    } else {
      return {
        fileCount: 4,
        avgFileSize: "50 MB",
        totalSize: "182 MB (snappy compressed)",
        s3GetRequests: 4,
        queryPlanningTimeMs: 14,
        queryExecutionLatencyMs: 180,
        sparkTasksSpawned: 4,
        statusLabel: "Optimized (Compacted Columnar Layout)",
        statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200"
      };
    }
  }, [isCompacted]);

  // =========================================================================
  // WORKBENCH 6: Data Lake Governance & 10-Question Assessment
  // =========================================================================
  const [isPiiMasked, setIsPiiMasked] = useState(true);
  const [activeRole, setActiveRole] = useState("analyst"); // 'engineer' | 'analyst' | 'scientist'

  const sampleCustomerData = [
    { id: "C101", name: "Rahul Sharma", email: "rahul@example.com", phone: "+91 98765 43210", ssn: "XXXX-1290", total_orders: 14, revenue: 65000 },
    { id: "C102", name: "Priya Patel", email: "priya@example.com", phone: "+91 98111 22334", ssn: "XXXX-8821", total_orders: 8, revenue: 32000 },
    { id: "C103", name: "Amit Verma", email: "amit@example.com", phone: "+91 97222 33445", ssn: "XXXX-4411", total_orders: 22, revenue: 112000 },
  ];

  const maskedCustomerData = useMemo(() => {
    return sampleCustomerData.map(c => {
      if (!isPiiMasked && activeRole === "engineer") return c;

      const [namePrefix, nameDomain] = c.email.split("@");
      const maskedEmail = `${namePrefix[0]}****@${nameDomain}`;
      const maskedPhone = c.phone.slice(0, 7) + " *****";
      
      return {
        ...c,
        email: maskedEmail,
        phone: maskedPhone,
        ssn: "REDACTED"
      };
    });
  }, [isPiiMasked, activeRole]);

  // Quiz state (10 Questions from User Prompt)
  const QUIZ_QUESTIONS = [
    {
      id: 1,
      q: "What is the main purpose of a data lake?",
      options: [
        "To store only relational tables",
        "To store diverse data in flexible formats",
        "To replace all application databases",
        "To store only machine learning models"
      ],
      correct: 1,
      explanation: "A data lake provides a centralized repository that stores enormous quantities of structured, semi-structured, and unstructured data in its original format."
    },
    {
      id: 2,
      q: "Which format is columnar?",
      options: [
        "CSV",
        "JSON",
        "Apache Parquet",
        "Apache Avro"
      ],
      correct: 2,
      explanation: "Apache Parquet is a columnar storage format designed for efficient analytical processing, allowing query engines to skip unread columns."
    },
    {
      id: 3,
      q: "What does the Bronze layer contain in the Medallion Architecture?",
      options: [
        "Business dashboards",
        "Highly aggregated data",
        "Raw ingested data",
        "Only machine learning predictions"
      ],
      correct: 2,
      explanation: "The Bronze layer acts as the raw landing zone that preserves original source records with minimal or no transformations."
    },
    {
      id: 4,
      q: "What does the Delta transaction log (_delta_log) manage?",
      options: [
        "User passwords",
        "Committed table changes and snapshots",
        "Only CSV schemas",
        "Network routing"
      ],
      correct: 1,
      explanation: "The Delta transaction log is an ordered record of every committed action, tracking file additions, removals, schema changes, and metadata snapshots."
    },
    {
      id: 5,
      q: "Which Apache Hudi table type uses both base columnar files and row-based log files?",
      options: [
        "Copy-on-Write",
        "Merge-on-Read",
        "Read-only",
        "Append-only"
      ],
      correct: 1,
      explanation: "Merge-on-Read (MoR) writes updates directly into compact log files to reduce write latency, deferring merging until read time or background compaction."
    },
    {
      id: 6,
      q: "What is Iceberg partition evolution?",
      options: [
        "Deleting every old partition",
        "Changing partition specifications over time",
        "Changing the cloud provider",
        "Converting Parquet to CSV"
      ],
      correct: 1,
      explanation: "Iceberg partition evolution enables modifying table partition specifications without requiring a costly full rewrite of historical data files."
    },
    {
      id: 7,
      q: "What is the primary purpose of file compaction?",
      options: [
        "Increase duplicate records",
        "Combine small files into larger files",
        "Delete the table catalog",
        "Encrypt all records"
      ],
      correct: 1,
      explanation: "Compaction merges numerous small files (e.g. from streaming) into optimal larger files, reducing storage request costs and query planning overhead."
    },
    {
      id: 8,
      q: "What does a metadata catalog provide?",
      options: [
        "Physical GPU memory",
        "Dataset names, schemas and locations",
        "Only raw records",
        "Network security certificates"
      ],
      correct: 1,
      explanation: "A metadata catalog (like AWS Glue or Unity Catalog) stores table definitions, schemas, data types, locations, and partitions for cross-engine discovery."
    },
    {
      id: 9,
      q: "What is Time Travel in transactional table formats?",
      options: [
        "Real-time streaming ingestion",
        "Reading historical table versions",
        "Changing the system clock",
        "Partitioning by time"
      ],
      correct: 1,
      explanation: "Time travel enables querying historical snapshots using commit versions or timestamps (e.g. VERSION AS OF) for auditing and error recovery."
    },
    {
      id: 10,
      q: "What does a lakehouse combine?",
      options: [
        "Only HDFS and MapReduce",
        "Only SQL and Python",
        "Flexible lake storage and warehouse-style data management",
        "Only CSV and JSON"
      ],
      correct: 2,
      explanation: "A lakehouse combines the low-cost, scalable object storage of a data lake with the transactional ACID reliability, schema enforcement, and SQL performance of a data warehouse."
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const quizScore = useMemo(() => {
    return Object.entries(selectedAnswers).reduce((acc, [qId, ansIdx]) => {
      const q = QUIZ_QUESTIONS.find(item => item.id === parseInt(qId, 10));
      return q && q.correct === ansIdx ? acc + 1 : acc;
    }, 0);
  }, [selectedAnswers]);

  const handleSelectAnswer = (qId, optionIdx) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Sticky Course Navigation */}
      <ModuleNav track="data-engineering" currentModuleId="lakehouse" />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Module Header Card */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/50 via-amber-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                <Database size={13} className="text-[#f97316]" />
                <span>Data Engineering Master Course · Module 8</span>
              </div>
              <div className="text-xs font-mono text-stone-500">
                Core Lakehouse Architecture · Intermediate to Advanced
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Data Lakes and Lakehouse Architecture
            </h1>

            <p className="text-stone-600 text-base sm:text-lg max-w-4xl leading-relaxed">
              Master modern lakehouse engineering from storage fundamentals to transactional table protocols: cloud object stores (S3, ADLS, GCS), HDFS, Medallion Architecture (Bronze, Silver, Gold), columnar formats (Parquet, Avro, ORC), open table formats (Apache Iceberg, Delta Lake, Apache Hudi), ACID transactions, snapshot isolation, time travel, schema and partition evolution, catalogs, small file compaction, and enterprise governance.
            </p>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-2 pt-4 border-t border-stone-100">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === "curriculum"
                    ? "bg-[#f97316] text-white shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                <BookOpen size={16} />
                <span>Specification & Blueprints</span>
              </button>

              <button
                onClick={() => setActiveTab("workbench")}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === "workbench"
                    ? "bg-[#f97316] text-white shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                <Sparkles size={16} />
                <span>Interactive Workbenches (6)</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* MODE 1: CURRICULUM SPECIFICATION & BLUEPRINTS (100% Depth)       */}
        {/* ================================================================= */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            <DataEngineeringLakehouseSections />
          </div>
        )}

        {/* ================================================================= */}
        {/* MODE 2: INTERACTIVE WORKBENCHES (6 Deep Simulation Tools)          */}
        {/* ================================================================= */}
        {activeTab === "workbench" && (
          <div className="space-y-8">
            {/* Workbench Navigation Sub-Pills */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-stone-200/60 rounded-2xl border border-stone-200">
              <button
                onClick={() => setActiveWorkbench("medallion_pipeline")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "medallion_pipeline"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Layers size={15} className="text-[#f97316]" />
                <span>1. Medallion Pipeline</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("table_formats")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "table_formats"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Table size={15} className="text-[#f97316]" />
                <span>2. Open Table Formats</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("occ_transactions")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "occ_transactions"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Zap size={15} className="text-[#f97316]" />
                <span>3. ACID & Concurrency</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("time_travel")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "time_travel"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Clock size={15} className="text-[#f97316]" />
                <span>4. Time Travel & Rollback</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("compaction")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "compaction"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Boxes size={15} className="text-[#f97316]" />
                <span>5. Small File Compaction</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("governance_quiz")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "governance_quiz"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <CheckCircle2 size={15} className="text-[#f97316]" />
                <span>6. Governance & Quiz</span>
              </button>
            </div>

            {/* WORKBENCH 1: MEDALLION PIPELINE SIMULATOR */}
            {activeWorkbench === "medallion_pipeline" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Workbench 1 · Progressive Data Refinement
                    </span>
                    <h2 className="text-2xl font-bold text-stone-900 mt-1">
                      Medallion Architecture Pipeline Simulator (Bronze $\rightarrow$ Silver $\rightarrow$ Gold)
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm">
                      Trace the progression of dirty raw source records through Bronze (raw preservation), Silver (cleaning, deduplication & DLQ quarantine), and Gold (KPI business aggregates).
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-stone-500">Filter View:</span>
                    <select
                      value={pipelineStage}
                      onChange={(e) => setPipelineStage(e.target.value)}
                      className="px-3 py-1.5 text-xs font-bold rounded-xl border border-stone-300 bg-stone-50"
                    >
                      <option value="all">Full Medallion Pipeline</option>
                      <option value="bronze">Bronze Layer (Raw)</option>
                      <option value="silver">Silver Layer (Cleansed)</option>
                      <option value="dlq">Dead-Letter Queue (Quarantine)</option>
                      <option value="gold">Gold Layer (KPIs)</option>
                    </select>
                  </div>
                </div>

                {/* Pipeline Progression Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                    <span className="text-[11px] font-mono text-amber-800 font-bold uppercase block">Bronze Raw Events</span>
                    <span className="text-xl sm:text-2xl font-black text-amber-950 font-mono">
                      {rawStreamPayloads.length} events
                    </span>
                    <span className="text-[10px] text-amber-700 block mt-0.5">100% source fidelity</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200">
                    <span className="text-[11px] font-mono text-rose-800 font-bold uppercase block">Quarantined (DLQ)</span>
                    <span className="text-xl sm:text-2xl font-black text-rose-950 font-mono">
                      {deadLetterQueue.length} records
                    </span>
                    <span className="text-[10px] text-rose-700 block mt-0.5">Malformed / duplicate</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Silver Clean Records</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      {silverValid.length} records
                    </span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">Deduplicated & validated</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200">
                    <span className="text-[11px] font-mono text-orange-700 font-bold uppercase block">Gold Total Revenue</span>
                    <span className="text-xl sm:text-2xl font-black text-orange-950 font-mono">
                      ₹{goldMetrics.totalRevenue.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-orange-700 block mt-0.5">Across {goldMetrics.uniqueCustomers} active customers</span>
                  </div>
                </div>

                {/* Detailed Stage Views */}
                {(pipelineStage === "all" || pipelineStage === "bronze") && (
                  <div className="border border-amber-200 rounded-xl overflow-hidden">
                    <div className="p-3 bg-amber-50 border-b border-amber-200 font-bold text-xs uppercase text-amber-900 flex justify-between items-center font-mono">
                      <span>Bronze Storage: s3://company-lake/bronze/transactions/</span>
                      <span className="text-[11px] bg-amber-200/80 px-2 py-0.5 rounded text-amber-900">Raw JSON Stream</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono">
                        <thead className="bg-amber-100/50 text-amber-900">
                          <tr>
                            <th className="p-2.5">event_id</th>
                            <th className="p-2.5">customer_id</th>
                            <th className="p-2.5">name</th>
                            <th className="p-2.5">amount</th>
                            <th className="p-2.5">status</th>
                            <th className="p-2.5">timestamp</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-amber-100">
                          {rawStreamPayloads.map((r, i) => (
                            <tr key={i} className="hover:bg-amber-50/80 transition">
                              <td className="p-2.5 font-bold">{r.event_id}</td>
                              <td className="p-2.5">{r.customer_id || <span className="text-rose-500">NULL</span>}</td>
                              <td className="p-2.5">"{r.name}"</td>
                              <td className="p-2.5">{r.amount}</td>
                              <td className="p-2.5">{r.status}</td>
                              <td className="p-2.5 text-stone-500">{r.timestamp}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {(pipelineStage === "all" || pipelineStage === "dlq") && deadLetterQueue.length > 0 && (
                  <div className="border border-rose-200 rounded-xl overflow-hidden">
                    <div className="p-3 bg-rose-50 border-b border-rose-200 font-bold text-xs uppercase text-rose-900 flex justify-between items-center font-mono">
                      <span>Dead-Letter Queue (DLQ): Quarantine / Isolation Layer</span>
                      <span className="text-[11px] bg-rose-200/80 px-2 py-0.5 rounded text-rose-900">Failed Quality Checks</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono">
                        <thead className="bg-rose-100/50 text-rose-900">
                          <tr>
                            <th className="p-2.5">event_id</th>
                            <th className="p-2.5">Raw Payload</th>
                            <th className="p-2.5 text-rose-800">Quarantine Reason</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-rose-100">
                          {deadLetterQueue.map((r, i) => (
                            <tr key={i} className="hover:bg-rose-50/80 transition">
                              <td className="p-2.5 font-bold text-rose-900">{r.event_id}</td>
                              <td className="p-2.5 text-stone-600 truncate max-w-xs">{JSON.stringify(r)}</td>
                              <td className="p-2.5 font-bold text-rose-700">{r.dlq_reason}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {(pipelineStage === "all" || pipelineStage === "silver") && (
                  <div className="border border-stone-200 rounded-xl overflow-hidden">
                    <div className="p-3 bg-stone-100 border-b border-stone-200 font-bold text-xs uppercase text-stone-800 flex justify-between items-center font-mono">
                      <span>Silver Storage: s3://company-lake/silver/transactions/</span>
                      <span className="text-[11px] bg-stone-200 px-2 py-0.5 rounded text-stone-800">Validated Delta Table</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono">
                        <thead className="bg-stone-50 text-stone-700">
                          <tr>
                            <th className="p-2.5">event_id</th>
                            <th className="p-2.5">customer_id</th>
                            <th className="p-2.5">name</th>
                            <th className="p-2.5">email</th>
                            <th className="p-2.5 text-right">amount (DECIMAL)</th>
                            <th className="p-2.5">status</th>
                            <th className="p-2.5">order_date</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                          {silverValid.map((r, i) => (
                            <tr key={i} className="hover:bg-orange-50/40 transition">
                              <td className="p-2.5 font-bold text-stone-800">{r.event_id}</td>
                              <td className="p-2.5 text-stone-700">{r.customer_id}</td>
                              <td className="p-2.5">{r.name}</td>
                              <td className="p-2.5 text-stone-600">{r.email}</td>
                              <td className="p-2.5 text-right font-bold text-stone-900">₹{r.amount.toLocaleString()}</td>
                              <td className="p-2.5">
                                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-800 font-bold">
                                  {r.status}
                                </span>
                              </td>
                              <td className="p-2.5 text-stone-500">{r.order_date}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {(pipelineStage === "all" || pipelineStage === "gold") && (
                  <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-950 font-mono">
                        Gold Aggregate KPI View: daily_sales_summary
                      </span>
                      <span className="text-[10px] font-mono bg-orange-200 text-orange-900 px-2 py-0.5 rounded font-bold">
                        Business Intelligence Ready
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                      <div className="p-3 rounded-lg bg-white border border-orange-200">
                        <span className="text-[10px] font-mono text-stone-500 block">Total Revenue</span>
                        <span className="text-lg font-black text-orange-950 font-mono">₹{goldMetrics.totalRevenue.toLocaleString()}</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white border border-orange-200">
                        <span className="text-[10px] font-mono text-stone-500 block">Total Orders</span>
                        <span className="text-lg font-black text-stone-900 font-mono">{goldMetrics.totalTransactions}</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white border border-orange-200">
                        <span className="text-[10px] font-mono text-stone-500 block">Active Customers</span>
                        <span className="text-lg font-black text-stone-900 font-mono">{goldMetrics.uniqueCustomers}</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white border border-orange-200">
                        <span className="text-[10px] font-mono text-stone-500 block">Avg Order Value</span>
                        <span className="text-lg font-black text-stone-900 font-mono">₹{goldMetrics.avgOrderValue}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* WORKBENCH 2: OPEN TABLE FORMATS TRIAD COMPARISON */}
            {activeWorkbench === "table_formats" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                    Workbench 2 · Table Format Mechanics
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-1">
                    Open Table Formats Triad Explorer (Delta Lake vs Apache Iceberg vs Apache Hudi)
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    Inspect the underlying metadata trees, transaction logs, and write/read characteristics that allow cloud object files to behave like database tables.
                  </p>
                </div>

                {/* Format Switcher */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {Object.entries(FORMAT_SPECIFICATIONS).map(([k, fmt]) => (
                    <button
                      key={k}
                      onClick={() => setSelectedFormat(k)}
                      className={`p-4 rounded-xl border text-left transition cursor-pointer ${
                        selectedFormat === k
                          ? "bg-orange-50 border-orange-500 shadow-xs"
                          : "bg-stone-50 border-stone-200 hover:border-orange-300"
                      }`}
                    >
                      <h4 className="font-extrabold text-stone-900 text-base">{fmt.name}</h4>
                      <p className="text-stone-500 text-xs mt-1">{fmt.tagline}</p>
                    </button>
                  ))}
                </div>

                {/* Selected Format Deep Dive */}
                {(() => {
                  const fmt = FORMAT_SPECIFICATIONS[selectedFormat];
                  return (
                    <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                        <h3 className="text-xl font-bold text-stone-900">{fmt.name} Internal Anatomy</h3>
                        <span className="text-xs font-mono text-orange-700 font-bold bg-orange-100 px-2.5 py-1 rounded-full">
                          {fmt.bestFor}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                        <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
                          <strong className="text-stone-800 font-bold block font-mono uppercase text-[11px] text-orange-600">Metadata Model</strong>
                          <p className="text-stone-700 leading-relaxed">{fmt.metadataArchitecture}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
                          <strong className="text-stone-800 font-bold block font-mono uppercase text-[11px] text-orange-600">Commit & Concurrency</strong>
                          <p className="text-stone-700 leading-relaxed">{fmt.commitModel}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
                          <strong className="text-stone-800 font-bold block font-mono uppercase text-[11px] text-orange-600">Read Path</strong>
                          <p className="text-stone-700 leading-relaxed">{fmt.readMechanics}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
                          <strong className="text-stone-800 font-bold block font-mono uppercase text-[11px] text-orange-600">Write Path</strong>
                          <p className="text-stone-700 leading-relaxed">{fmt.writeMechanics}</p>
                        </div>
                      </div>

                      {/* File Directory Structure Preview */}
                      <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto space-y-2">
                        <div className="flex justify-between items-center text-neutral-400 border-b border-neutral-800 pb-1.5">
                          <span>Physical Storage Directory Layout</span>
                          <span className="text-[10px] text-orange-400">Object Storage Tree</span>
                        </div>
                        <pre className="text-emerald-300">{fmt.sampleStructure}</pre>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* WORKBENCH 3: ACID & CONCURRENCY CONTROL */}
            {activeWorkbench === "occ_transactions" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Workbench 3 · Transaction Management
                    </span>
                    <h2 className="text-2xl font-bold text-stone-900 mt-1">
                      ACID Transactions & Optimistic Concurrency Control (OCC)
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm">
                      Simulate concurrent writers and readers accessing the same table without locking physical storage.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSimulateConflict(!simulateConflict)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition cursor-pointer ${
                        simulateConflict
                          ? "bg-rose-100 text-rose-800 border-rose-300"
                          : "bg-stone-100 text-stone-700 border-stone-300"
                      }`}
                    >
                      {simulateConflict ? "Conflict Mode: ACTIVE" : "Conflict Mode: OFF"}
                    </button>
                    <button
                      onClick={handleRunOccSimulation}
                      className="px-4 py-1.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-lg transition shadow-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Play size={14} />
                      <span>Run OCC Commit Simulation</span>
                    </button>
                  </div>
                </div>

                {/* OCC 3-Phase Stepper */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                    <span className="text-[10px] font-mono text-orange-600 font-bold uppercase">Phase 1</span>
                    <h4 className="font-bold text-stone-900 text-sm">Read Snapshot</h4>
                    <p className="text-stone-600 text-xs">
                      Writer identifies current table version (e.g. Version 10) and notes target files/partitions.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                    <span className="text-[10px] font-mono text-orange-600 font-bold uppercase">Phase 2</span>
                    <h4 className="font-bold text-stone-900 text-sm">Speculative Write</h4>
                    <p className="text-stone-600 text-xs">
                      Writes new Parquet files to object storage with unique UUIDs. Files remain invisible to readers.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                    <span className="text-[10px] font-mono text-orange-600 font-bold uppercase">Phase 3</span>
                    <h4 className="font-bold text-stone-900 text-sm">Validate & Commit</h4>
                    <p className="text-stone-600 text-xs">
                      Checks if another commit occurred. If no conflicting partitions exist, atomically commits Version 11.
                    </p>
                  </div>
                </div>

                {/* Simulation Output Log */}
                {occLog.length > 0 && (
                  <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs space-y-2">
                    <div className="flex justify-between items-center text-neutral-400 border-b border-neutral-800 pb-2">
                      <span className="font-bold flex items-center gap-1.5">
                        <Terminal size={14} className="text-orange-400" />
                        OCC Execution Trace
                      </span>
                      <span className="text-[10px] text-stone-400">Atomic Lock-Free Pipeline</span>
                    </div>
                    <div className="space-y-1">
                      {occLog.map((line, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-stone-500 select-none">[{idx + 1}]</span>
                          <span className={line.includes("CONFLICT") ? "text-rose-400 font-bold" : line.includes("Result") ? "text-emerald-400 font-bold" : "text-stone-200"}>
                            {line}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* WORKBENCH 4: TIME TRAVEL & ROLLBACK STUDIO */}
            {activeWorkbench === "time_travel" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Workbench 4 · Historical Versioning
                    </span>
                    <h2 className="text-2xl font-bold text-stone-900 mt-1">
                      Time Travel & Table History Inspector
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm">
                      Query historical snapshots, examine transaction commit history, and simulate instantaneous rollback after faulty pipeline runs.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-stone-500">Query Version:</span>
                    <div className="flex gap-1">
                      {TABLE_VERSIONS.map((v) => (
                        <button
                          key={v.version}
                          onClick={() => setSelectedVersion(v.version)}
                          className={`px-3 py-1 text-xs font-bold rounded-lg border transition cursor-pointer font-mono ${
                            selectedVersion === v.version
                              ? "bg-orange-600 text-white border-orange-600"
                              : "bg-white text-stone-700 border-stone-300 hover:border-orange-400"
                          }`}
                        >
                          v{v.version}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Selected Version Meta */}
                {(() => {
                  const curr = TABLE_VERSIONS[selectedVersion];
                  return (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <div>
                          <span className="font-mono text-stone-500 uppercase block text-[10px]">Active Snapshot</span>
                          <strong className="text-base text-stone-900 font-bold">Version {curr.version} &mdash; {curr.operation}</strong>
                          <span className="text-stone-600 block mt-0.5">{curr.description}</span>
                        </div>
                        <div className="text-right font-mono">
                          <span className="text-stone-400 block text-[10px]">Commit Timestamp</span>
                          <span className="text-stone-800 font-bold">{curr.timestamp}</span>
                        </div>
                      </div>

                      {/* Historical Snapshot Table */}
                      <div className="border border-stone-200 rounded-xl overflow-hidden">
                        <div className="p-3 bg-stone-100 border-b border-stone-200 font-bold text-xs uppercase text-stone-800 flex justify-between items-center font-mono">
                          <span>Result of: SELECT * FROM customers VERSION AS OF {curr.version}</span>
                          <span className="text-[11px] text-stone-500">{curr.rows.length} rows returned</span>
                        </div>
                        <table className="w-full text-left text-xs sm:text-sm font-mono">
                          <thead className="bg-stone-50 border-b border-stone-200 text-stone-600">
                            <tr>
                              <th className="p-3">customer_id</th>
                              <th className="p-3">name</th>
                              <th className="p-3">city</th>
                              <th className="p-3 text-right">account_balance</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-100">
                            {curr.rows.map((row) => (
                              <tr key={row.id} className="hover:bg-orange-50/50 transition">
                                <td className="p-3 font-bold text-stone-800">{row.id}</td>
                                <td className="p-3">{row.name}</td>
                                <td className="p-3">
                                  <span className={`px-2 py-0.5 rounded ${
                                    row.city === "UNKNOWN"
                                      ? "bg-rose-100 text-rose-800 font-bold"
                                      : "bg-stone-100 text-stone-700"
                                  }`}>
                                    {row.city}
                                  </span>
                                </td>
                                <td className="p-3 text-right font-bold text-stone-900">₹{row.balance.toLocaleString()}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* SQL Equivalent Box */}
                      <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs space-y-1">
                        <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Production Time Travel & Rollback Commands</span>
                        <code className="text-amber-200 block">-- Query historical snapshot</code>
                        <code className="text-emerald-300 block">SELECT * FROM customers TIMESTAMP AS OF '{curr.timestamp}';</code>
                        <code className="text-amber-200 block mt-2">-- Rollback table state to Version {curr.version}</code>
                        <code className="text-emerald-300 block">RESTORE TABLE customers TO VERSION AS OF {curr.version};</code>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* WORKBENCH 5: SMALL FILE PROBLEM & COMPACTION */}
            {activeWorkbench === "compaction" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Workbench 5 · Storage Optimization
                    </span>
                    <h2 className="text-2xl font-bold text-stone-900 mt-1">
                      Small File Problem & Compaction (OPTIMIZE / Rewrite Files)
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm">
                      Experience how continuous streaming micro-batches create thousands of tiny files and observe how file compaction restores analytical query performance.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsCompacted(!isCompacted)}
                      className={`px-4 py-2 text-xs font-bold rounded-xl border transition cursor-pointer flex items-center gap-1.5 ${
                        isCompacted
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-stone-100 text-stone-700 border-stone-300 hover:border-orange-400"
                      }`}
                    >
                      <Boxes size={14} />
                      <span>{isCompacted ? "Compacted: ACTIVE (4 Files)" : "Fragmented: 1,000 Small Files"}</span>
                    </button>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200">
                    <span className="text-[11px] font-mono text-orange-700 font-bold uppercase block">File Count</span>
                    <span className="text-xl sm:text-2xl font-black text-orange-950 font-mono">
                      {fileMetrics.fileCount} files
                    </span>
                    <span className="text-[10px] text-orange-700 block mt-0.5">Avg: {fileMetrics.avgFileSize}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Query Planning Time</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      {fileMetrics.queryPlanningTimeMs} ms
                    </span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">Metadata listing overhead</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Storage GET Requests</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      {fileMetrics.s3GetRequests} requests
                    </span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">Amazon S3 API costs</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Execution Latency</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      {fileMetrics.queryExecutionLatencyMs} ms
                    </span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">Spark tasks: {fileMetrics.sparkTasksSpawned}</span>
                  </div>
                </div>

                {/* Visual File Distribution Grid */}
                <div className="border border-stone-200 rounded-xl p-4 bg-stone-50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-800 font-mono">
                      Physical File Layout on Object Storage
                    </span>
                    <span className={`px-2.5 py-1 rounded text-xs font-bold font-mono border ${fileMetrics.statusColor}`}>
                      {fileMetrics.statusLabel}
                    </span>
                  </div>

                  {!isCompacted ? (
                    <div className="grid grid-cols-12 sm:grid-cols-24 gap-1">
                      {Array.from({ length: 96 }).map((_, i) => (
                        <div
                          key={i}
                          title={`File #${i+1} [200 KB]`}
                          className="h-4 rounded-xs bg-rose-400 opacity-70 hover:opacity-100 transition"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-4 gap-3">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-emerald-600 text-white font-mono text-xs font-bold flex flex-col items-center justify-center shadow-xs"
                        >
                          <span>part-0000{i+1}.parquet</span>
                          <span className="text-[10px] text-emerald-200 font-normal">50 MB · 2,500,000 rows</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Compaction Commands Box */}
                <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs space-y-2">
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Production Compaction Commands</span>
                  <div className="space-y-1 text-emerald-300">
                    <div>-- Delta Lake Compaction:</div>
                    <code>OPTIMIZE transactions;</code>
                    <div className="pt-2">-- Apache Iceberg Rewrite Maintenance:</div>
                    <code>CALL system.rewrite_data_files(table =&gt; 'transactions');</code>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 6: GOVERNANCE & 10-QUESTION ASSESSMENT */}
            {activeWorkbench === "governance_quiz" && (
              <div className="space-y-8">
                {/* Part A: Data Lake Governance & PII Masking */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                        Part A · Enterprise Governance
                      </div>
                      <h2 className="text-2xl font-bold text-stone-900">Data Lake Governance & PII Masking</h2>
                      <p className="text-stone-600 text-sm mt-1">
                        Test Role-Based Access Control (RBAC) and dynamic PII field masking across customer datasets.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsPiiMasked(!isPiiMasked)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition cursor-pointer flex items-center gap-1.5 ${
                          isPiiMasked
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "bg-rose-100 text-rose-800 border-rose-300"
                        }`}
                      >
                        {isPiiMasked ? <EyeOff size={14} /> : <Eye size={14} />}
                        <span>{isPiiMasked ? "PII Masking: ACTIVE" : "PII Masking: UNMASKED"}</span>
                      </button>

                      <select
                        value={activeRole}
                        onChange={(e) => setActiveRole(e.target.value)}
                        className="px-3 py-1.5 text-xs font-bold rounded-lg border border-stone-300 bg-white"
                      >
                        <option value="analyst">Role: Data Analyst (Masked)</option>
                        <option value="engineer">Role: Data Engineer (Full Admin)</option>
                        <option value="scientist">Role: Data Scientist (Features Only)</option>
                      </select>
                    </div>
                  </div>

                  {/* Masked Customer Table */}
                  <div className="border border-stone-200 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs sm:text-sm font-mono">
                      <thead className="bg-stone-50 border-b border-stone-200 text-stone-700">
                        <tr>
                          <th className="p-3">customer_id</th>
                          <th className="p-3">name</th>
                          <th className="p-3">email (PII)</th>
                          <th className="p-3">phone (PII)</th>
                          <th className="p-3">government_id (PII)</th>
                          <th className="p-3 text-right">revenue</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {maskedCustomerData.map((c) => (
                          <tr key={c.id} className="hover:bg-orange-50/40 transition">
                            <td className="p-3 font-bold text-stone-800">{c.id}</td>
                            <td className="p-3">{c.name}</td>
                            <td className="p-3 text-stone-600">{c.email}</td>
                            <td className="p-3 text-stone-600">{c.phone}</td>
                            <td className="p-3 font-bold text-rose-800">{c.ssn}</td>
                            <td className="p-3 text-right font-bold text-stone-900">₹{c.revenue.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Part B: 10-Question Knowledge Assessment */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                        Part B · Module Assessment
                      </div>
                      <h2 className="text-2xl font-bold text-stone-900">Module 8 Knowledge Test (10 Questions)</h2>
                      <p className="text-stone-600 text-sm mt-1">
                        Verify your understanding of data lakes, Medallion Architecture, Iceberg, Delta Lake, Hudi, transactions, and lakehouse governance.
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-stone-400 uppercase">Score Progress</span>
                      <div className="text-2xl font-black text-stone-900 font-mono">
                        {quizScore} / {QUIZ_QUESTIONS.length}
                      </div>
                    </div>
                  </div>

                  {/* Questions List */}
                  <div className="space-y-6">
                    {QUIZ_QUESTIONS.map((q, idx) => {
                      const userChoice = selectedAnswers[q.id];
                      const isAnswered = userChoice !== undefined;
                      const isCorrect = userChoice === q.correct;

                      return (
                        <div key={q.id} className="p-5 rounded-xl border border-stone-200 bg-stone-50/60 space-y-3">
                          <div className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center text-xs font-bold shrink-0">
                              {idx + 1}
                            </span>
                            <h4 className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
                              {q.q}
                            </h4>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = userChoice === optIdx;
                              let btnClass = "border-stone-200 bg-white text-stone-800 hover:border-orange-300";

                              if (isAnswered) {
                                if (optIdx === q.correct) {
                                  btnClass = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                                } else if (isSelected) {
                                  btnClass = "border-rose-500 bg-rose-50 text-rose-950";
                                } else {
                                  btnClass = "border-stone-200 bg-stone-100 text-stone-400";
                                }
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectAnswer(q.id, optIdx)}
                                  className={`p-3 rounded-xl border text-left text-xs transition flex items-center gap-2 cursor-pointer ${btnClass}`}
                                >
                                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-bold shrink-0">
                                    {String.fromCharCode(65 + optIdx)}
                                  </span>
                                  <span>{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {isAnswered && (
                            <div className={`p-3 rounded-lg text-xs ${
                              isCorrect ? "bg-emerald-100/70 text-emerald-900" : "bg-rose-100/70 text-rose-900"
                            }`}>
                              <strong>{isCorrect ? "Correct! " : "Incorrect. "}</strong>
                              <span>{q.explanation}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
