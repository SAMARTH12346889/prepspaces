// projectx/src/Componets/DataEngineeringSystemDesign.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  Zap,
  ShieldAlert,
  ShieldCheck,
  CheckCircle,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  RefreshCw,
  Terminal,
  BookOpen,
  Cpu,
  Layers,
  Database,
  Sliders,
  Check,
  Copy,
  ExternalLink,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Server,
  Cloud,
  FileSpreadsheet,
  AlertOctagon,
  Eye,
  SlidersHorizontal,
  Code2,
  HardDrive,
  Gauge,
  Clock,
  ArrowRight,
  ArrowLeft,
  Filter,
  Search,
  CheckSquare,
  Square,
  Award,
  Trophy,
  Rocket,
  GitBranch,
  Split,
  Play,
  TrendingUp,
  DollarSign,
  ShoppingCart
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import { SystemDesignSection, systemDesignSectionsMeta } from "./DataEngineeringSystemDesignSections";

export default function DataEngineeringSystemDesign() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("architecture_estimator_lab");
  // 'architecture_estimator_lab' | 'batch_vs_streaming_lab' | 'cdc_debezium_lab' | 'lakehouse_partitioning_lab' | 'shopsphere_capstone_dashboard' | 'technical_review_quiz'

  // Curriculum section state
  const [activeSectionId, setActiveSectionId] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // WORKBENCH 1: Architecture Estimator State
  const [dailyOrdersMillions, setDailyOrdersMillions] = useState(2.0);
  const [avgRecordSizeKb, setAvgRecordSizeKb] = useState(1.0);
  const [peakSurgeMultiplier, setPeakSurgeMultiplier] = useState(20);
  const [retentionYears, setRetentionYears] = useState(5);
  const [parquetCompressionPct, setParquetCompressionPct] = useState(75);

  const capacityEstimates = useMemo(() => {
    const totalDailyOrders = dailyOrdersMillions * 1000000;
    const avgOrdersPerSec = (totalDailyOrders / 86400).toFixed(1);
    const peakOrdersPerSec = Math.round((totalDailyOrders / 86400) * peakSurgeMultiplier);
    const dailyRawGb = (totalDailyOrders * avgRecordSizeKb) / (1024 * 1024);
    const annualRawTb = (dailyRawGb * 365) / 1024;
    const totalRetentionRawTb = (annualRawTb * retentionYears).toFixed(2);
    const dailyCompressedGb = dailyRawGb * (1 - parquetCompressionPct / 100);
    const totalCompressedStorageTb = ((dailyCompressedGb * 365 * retentionYears) / 1024).toFixed(2);

    // Medallion breakdown for total 5-year retention
    const bronzeTb = totalCompressedStorageTb;
    const silverTb = (totalCompressedStorageTb * 0.85).toFixed(2);
    const goldTb = (totalCompressedStorageTb * 0.35).toFixed(2);
    const totalPlatformTb = (parseFloat(bronzeTb) + parseFloat(silverTb) + parseFloat(goldTb) + parseFloat(silverTb)).toFixed(1);

    return {
      avgOrdersPerSec,
      peakOrdersPerSec,
      dailyRawGb: dailyRawGb.toFixed(2),
      dailyCompressedGb: dailyCompressedGb.toFixed(2),
      totalRetentionRawTb,
      totalCompressedStorageTb,
      bronzeTb,
      silverTb,
      goldTb,
      totalPlatformTb
    };
  }, [dailyOrdersMillions, avgRecordSizeKb, peakSurgeMultiplier, retentionYears, parquetCompressionPct]);

  // WORKBENCH 2: Batch vs Streaming Decision Engine
  const [selectedScenario, setSelectedScenario] = useState("real_time_fraud"); // 'daily_audit' | 'real_time_fraud' | 'flash_sale_inventory' | 'ml_backfill'
  const scenarioDecision = useMemo(() => {
    switch (selectedScenario) {
      case "daily_audit":
        return {
          title: "Daily Financial Revenue Audit & Tax Reporting",
          recommendedArchitecture: "Scheduled Batch (Apache Spark / dbt)",
          latencyTarget: "Hours (Nightly at 00:00 UTC)",
          complexity: "Low to Moderate",
          costRating: "Cost-Effective (Spot Compute)",
          engines: "Spark Batch + dbt + Snowflake/DuckDB",
          rationale: "Financial accounting requires complete closed billing cycles, idempotency, and multi-table reconciliations. Real-time streaming adds unnecessary operational cost with zero business value for daily tax filings."
        };
      case "flash_sale_inventory":
        return {
          title: "E-Commerce Flash-Sale Live Inventory Reservation",
          recommendedArchitecture: "Hybrid Kappa / Event Streaming",
          latencyTarget: "Sub-Second (< 500 ms)",
          complexity: "High (Stateful Stream Processing)",
          engines: "Apache Kafka + Apache Flink + Redis Cache",
          rationale: "During peak flash sales, overselling inventory causes severe business disruption. Stateful stream processing maintains real-time item counts with tumbling/sliding reservation windows."
        };
      case "ml_backfill":
        return {
          title: "Historical ML Feature Extraction (3-Year History)",
          recommendedArchitecture: "High-Throughput Batch Processing",
          latencyTarget: "Hours to Days (Offline Processing)",
          complexity: "Moderate",
          costRating: "Low (Cluster Right-Sizing / Spot EMR)",
          engines: "Apache Spark Distributed Cluster + Parquet",
          rationale: "Extracting features across historical terabytes is an offline training task. Batch partition pruning and distributed executors minimize network shuffle and compute costs."
        };
      case "real_time_fraud":
      default:
        return {
          title: "Real-Time Payment Fraud Detection",
          recommendedArchitecture: "Pure Event Streaming (Stream-First)",
          latencyTarget: "Sub-100 Milliseconds",
          complexity: "High (Stateful Sliding Windows)",
          engines: "Apache Kafka + Flink Stateful CEP + DynamoDB",
          rationale: "Fraud alerts must intercept payment transactions before gateway settlement. Event-driven architectures evaluate card velocity rules and anomaly scores in flight."
        };
    }
  }, [selectedScenario]);

  // WORKBENCH 3: CDC & Debezium Ingestion Lab
  const [cdcEvents, setCdcEvents] = useState([
    {
      id: "WAL_001",
      op: "c",
      table: "orders",
      timestamp: "2026-11-09 20:15:02",
      before: null,
      after: { order_id: "O101", customer_id: "C001", amount: 65000, status: "Pending" }
    }
  ]);

  const handleSimulateCdcAction = (actionType) => {
    const nextId = "WAL_" + String(cdcEvents.length + 1).padStart(3, "0");
    const now = new Date().toISOString().replace("T", " ").slice(0, 19);

    if (actionType === "insert") {
      const newOrder = {
        id: nextId,
        op: "c",
        table: "orders",
        timestamp: now,
        before: null,
        after: { order_id: "O" + (100 + cdcEvents.length + 1), customer_id: "C002", amount: 2500, status: "Pending" }
      };
      setCdcEvents((prev) => [newOrder, ...prev.slice(0, 5)]);
    } else if (actionType === "update") {
      const updated = {
        id: nextId,
        op: "u",
        table: "orders",
        timestamp: now,
        before: { order_id: "O101", status: "Pending", amount: 65000 },
        after: { order_id: "O101", status: "Completed", amount: 65000 }
      };
      setCdcEvents((prev) => [updated, ...prev.slice(0, 5)]);
    } else if (actionType === "delete") {
      const deleted = {
        id: nextId,
        op: "d",
        table: "orders",
        timestamp: now,
        before: { order_id: "O101", status: "Completed", amount: 65000 },
        after: null
      };
      setCdcEvents((prev) => [deleted, ...prev.slice(0, 5)]);
    }
  };

  // WORKBENCH 4: Lakehouse Partitioning Simulator
  const [partitionStrategy, setPartitionStrategy] = useState("date_pruned"); // 'unpartitioned' | 'date_pruned' | 'over_partitioned'
  const partitionMetrics = useMemo(() => {
    switch (partitionStrategy) {
      case "unpartitioned":
        return {
          name: "Unpartitioned Single-Directory Table",
          scannedFiles: 365,
          scannedBytes: "2.40 GB",
          scanTimeSeconds: 4.85,
          ioReductionPct: "0% (Full Table Scan)",
          metastoreOverhead: "Low (1 directory)",
          warning: "High query cost: Scans entire historical dataset regardless of date filters."
        };
      case "over_partitioned":
        return {
          name: "Over-Partitioned Table (year/month/day/hour/customer_id)",
          scannedFiles: 87600,
          scannedBytes: "1.20 GB",
          scanTimeSeconds: 9.40,
          ioReductionPct: "50% bytes scanned",
          metastoreOverhead: "CRITICAL (Metastore memory exhaustion)",
          warning: "Small-file crisis! Query spends 90% of time listing directories and reading metadata."
        };
      case "date_pruned":
      default:
        return {
          name: "Optimized Lakehouse Partitioning (year=2026/month=03/)",
          scannedFiles: 30,
          scannedBytes: "180 MB",
          scanTimeSeconds: 0.18,
          ioReductionPct: "92.5% I/O Reduction",
          metastoreOverhead: "Optimal (12 partitions / year)",
          warning: "Target performance: Partition pruning eliminates 335 unneeded files in under 200ms."
        };
    }
  }, [partitionStrategy]);

  // WORKBENCH 5: ShopSphere Capstone Production Monitor
  const [liveStreamEvents, setLiveStreamEvents] = useState(482);
  const [capstoneTab, setCapstoneTab] = useState("kpis"); // 'kpis' | 'medallion' | 'airflow'

  // WORKBENCH 6: 15-Question Final Capstone Mastery Quiz
  const quizQuestions = [
    {
      id: 1,
      question: "Why is 'technology-first thinking' (e.g., choosing Kafka and Spark before analyzing requirements) considered an anti-pattern in Data Engineering System Design?",
      options: [
        "Because optimal data platforms must be driven by business problems, data semantics, latency SLAs, access patterns, and cost constraints rather than tool hype",
        "Because Apache Kafka and Apache Spark are deprecated technologies that should never be used together",
        "Because cloud providers prohibit the use of open-source software in enterprise production contracts",
        "Because hardware servers can only run either batch or streaming software, but never both simultaneously"
      ],
      answer: 0,
      explanation: "Starting with tools leads to over-engineered architectures, bloated cloud bills, and systems that fail to deliver core business value. Professional data architects begin with business requirements, data sources, SLA expectations, query access patterns, and budget limits."
    },
    {
      id: 2,
      question: "Which of the following represents a Non-Functional Requirement (NFR) in an e-commerce data platform design?",
      options: [
        "The analytical dashboard must reflect newly placed orders within 5 minutes with 99.9% service availability",
        "The system must extract customer records from the PostgreSQL production database",
        "The analytics mart must calculate the average order value grouped by product category",
        "The application must send a welcome email when a user registers a new account"
      ],
      answer: 0,
      explanation: "Functional requirements describe what operations the system must perform (extracting orders, computing revenue). Non-functional requirements describe operational qualities and performance bounds: latency SLAs (5 mins), availability (99.9%), throughput, reliability, and security."
    },
    {
      id: 3,
      question: "What is the primary operational trade-off between the Lambda Architecture and the Kappa Architecture?",
      options: [
        "Lambda requires maintaining two separate codebases for batch and speed layers, whereas Kappa uses a single stream processing engine for both real-time and historical replay",
        "Lambda only supports relational databases, while Kappa only supports unstructured file storage",
        "Lambda eliminates the need for storage backends, whereas Kappa requires magnetic tape drives",
        "Kappa cannot run on cloud infrastructure and must always be hosted on bare-metal mainframes"
      ],
      answer: 0,
      explanation: "Lambda architecture combines a batch layer (e.g. Spark batch) and speed layer (e.g. Flink/Storm), creating duplicated business logic and synchronization complexity. Kappa architecture simplifies this by routing both real-time streams and historical reprocessing through the same streaming engine."
    },
    {
      id: 4,
      question: "If an e-commerce platform generates 2 million orders per day with an average record size of 1 KB, and experiences a 20x peak flash-sale multiplier, what is the required peak throughput capacity?",
      options: [
        "Approximately 463 orders per second",
        "Approximately 23 orders per second",
        "Approximately 5,000 orders per second",
        "Approximately 100 orders per second"
      ],
      answer: 0,
      explanation: "Average orders per second = 2,000,000 / 86,400 ≈ 23.15 orders/sec. Multiplying by the 20x peak flash-sale surge factor yields 23.15 × 20 ≈ 463 orders per second."
    },
    {
      id: 5,
      question: "Why does converting 2 GB/day of raw JSON order data into Apache Parquet typically reduce storage volume by 75% or more?",
      options: [
        "Parquet organizes data column-by-column, allowing homogenous data types to be compressed using dictionary, run-length, and Snappy/ZSTD encoding algorithms",
        "Parquet deletes half of the rows during every write operation",
        "Parquet removes all column headers and replaces text characters with whitespace",
        "JSON files contain secret encrypted operating system payloads that Parquet strips out"
      ],
      answer: 0,
      explanation: "Columnar storage clusters identical data types together (e.g., timestamps next to timestamps, integers next to integers). This high data locality allows efficient column-level compression techniques (Snappy, ZSTD, Bit-packing, Dictionary encoding) that drastically reduce storage footprints and I/O costs."
    },
    {
      id: 6,
      question: "In a modern Lakehouse ingestion pipeline, why is Change Data Capture (CDC) preferred over scheduled timestamp-based SQL polling (`SELECT * WHERE updated_at > last_sync`)?",
      options: [
        "CDC reads the database transaction log directly (WAL), capturing hard DELETEs and intermediate row states with zero query impact on the production database",
        "Timestamp polling is illegal under international data governance treaties",
        "CDC completely eliminates the need for Apache Kafka or streaming message brokers",
        "Timestamp queries lock the entire operating system kernel for 30 minutes"
      ],
      answer: 0,
      explanation: "Timestamp polling misses deleted rows, skips intermediate updates that occur between polling cycles, and puts heavy read query loads on primary transactional tables. CDC (e.g. Debezium) streams raw log changes from the WAL asynchronously without table locking."
    },
    {
      id: 7,
      question: "When designing the processing layer of a data platform, in which scenario is DuckDB or Pandas preferred over Apache Spark?",
      options: [
        "When processing single-node datasets that fit comfortably in local memory (under 50 GB) without distributed cluster overhead",
        "When transforming 100 terabytes of clickstream logs across a 500-node worker cluster",
        "When performing sub-millisecond real-time complex event processing across millions of sensors",
        "When building multi-region active-active distributed Cassandra ring topologies"
      ],
      answer: 0,
      explanation: "Using Spark for small datasets (e.g., hundreds of megabytes or a few gigabytes) introduces unnecessary cluster startup overhead, JVM memory bloat, and network shuffle latency. Single-node in-process tools like DuckDB and Polars/Pandas execute orders of magnitude faster with zero cluster management cost."
    },
    {
      id: 8,
      question: "What core technical capability does a Lakehouse table format (like Apache Iceberg or Delta Lake) provide that raw S3 object storage lacks?",
      options: [
        "ACID transactions, schema evolution, partition evolution, snapshot isolation, and time-travel query capabilities over open data files",
        "The ability to run Python scripts directly inside SSD flash memory controllers",
        "Automatic conversion of relational SQL tables into uncompressed Microsoft Word documents",
        "Free unlimited public cloud compute credits from the Apache Software Foundation"
      ],
      answer: 0,
      explanation: "Raw object stores (S3, GCS) only offer eventual consistency and lack transactional guarantees. Table formats maintain a transactional metadata tree (manifest lists and manifest files) that enables ACID atomic commits, snapshot isolation, and safe concurrent writes."
    },
    {
      id: 9,
      question: "What is the consequence of 'over-partitioning' a data lakehouse (e.g. partitioning by `year/month/day/hour/customer_id`)?",
      options: [
        "It causes the 'small-file problem', generating millions of tiny files that overwhelm metastore metadata operations and degrade query performance",
        "It causes the cloud provider to immediately delete the object storage bucket",
        "It converts all numeric columns into boolean flags",
        "It permanently locks the CPU clock frequency to 100 MHz"
      ],
      answer: 0,
      explanation: "Creating too many partitions results in millions of tiny files (few KB each). Query engines spend more time listing files and reading metadata than reading actual data, creating severe query latency spikes and garbage collection pressure in metastores."
    },
    {
      id: 10,
      question: "If a business specifies an RPO of 15 minutes and an RTO of 2 hours, what does this mathematically require of the data disaster recovery architecture?",
      options: [
        "Data loss must not exceed the last 15 minutes of transactions, and the system must be fully restored and operational within 2 hours of a failure",
        "Backups must only be performed once every 15 days, and restoration must take exactly 2 weeks",
        "The data pipeline must run 15 times faster than standard batch queries and use 2 CPU cores",
        "All data older than 15 minutes must be permanently purged to keep recovery time under 2 hours"
      ],
      answer: 0,
      explanation: "Recovery Point Objective (RPO) dictates the maximum acceptable data loss in time (15 mins of transactions). Recovery Time Objective (RTO) dictates the maximum allowable downtime before full operational restoration (2 hours)."
    },
    {
      id: 11,
      question: "In the Medallion Architecture, what is the explicit purpose of the Silver Layer?",
      options: [
        "To clean, deduplicate, validate, enrich, and standardize raw Bronze data into a trusted, query-ready enterprise baseline",
        "To store raw unaltered JSON payloads exactly as received from third-party APIs",
        "To store final aggregated executive dashboard charts with pre-rendered PNG graphics",
        "To store cold archival records scheduled for permanent deletion within 24 hours"
      ],
      answer: 0,
      explanation: "Bronze holds raw, append-only source records. Silver cleans, deduplicates, validates schemas, enforces nullability, and standardizes data formats. Gold consumes Silver tables to produce department-specific dimensional models and analytical marts."
    },
    {
      id: 12,
      question: "Why should Apache Airflow DAG tasks be designed to be completely 'idempotent'?",
      options: [
        "So that rerunning a failed task or performing a historical backfill produces the exact same state without creating duplicate records or corrupting aggregates",
        "So that DAGs can execute without needing an underlying metadata database",
        "So that Python code runs without requiring semicolons at the end of statements",
        "So that tasks automatically bypass all data quality tests during peak hours"
      ],
      answer: 0,
      explanation: "Pipelines inevitably fail and must be retried or backfilled. Idempotent tasks (using `INSERT OVERWRITE`, upserts, or staging tables with deduplication) ensure that executing a task multiple times with the same input yields the exact same clean dataset without duplicate rows."
    },
    {
      id: 13,
      question: "In a dbt project, what is the role of the `ref()` function (e.g. `FROM {{ ref('stg_orders') }}`)?",
      options: [
        "It resolves table dependencies, builds the automated Directed Acyclic Graph (DAG) for model execution order, and manages environment schema namespaces",
        "It encrypts the SQL code using AES-256 before compiling to machine code",
        "It connects the database directly to external public REST endpoints",
        "It automatically translates PostgreSQL dialect into Microsoft Excel formulas"
      ],
      answer: 0,
      explanation: "The `ref()` macro is dbt's core mechanism for model dependency resolution. It allows dbt to infer the exact DAG execution order, interpolate correct environment database/schema names, and generate comprehensive end-to-end data lineage."
    },
    {
      id: 14,
      question: "What is the primary role of an Architecture Decision Record (ADR) in a production data engineering team?",
      options: [
        "To document the context, alternatives considered, technical reasoning, and consequences of significant architectural decisions for future maintainability",
        "To bill external cloud vendors for pipeline compute downtime",
        "To enforce employee non-disclosure agreements during daily standup meetings",
        "To register copyright trademarks for internal SQL function names"
      ],
      answer: 0,
      explanation: "An ADR captures why a specific technology or design was chosen (e.g. choosing Apache Iceberg over Delta Lake, or Flink over Spark Streaming), what trade-offs were accepted, and what consequences follow, ensuring institutional memory across team changes."
    },
    {
      id: 15,
      question: "In the ShopSphere Capstone platform, how is data served to business users for real-time analytics without degrading operational database performance?",
      options: [
        "By streaming CDC changes through Kafka and Spark into an Iceberg lakehouse and analytical data marts queried through Metabase dashboards",
        "By allowing all business analysts to run unrestricted `SELECT *` queries directly on the production PostgreSQL OLTP instance",
        "By exporting the production database to a single shared CSV file on a desktop computer once a week",
        "By disabling all database indexes so analytical queries can scan raw disk sectors directly"
      ],
      answer: 0,
      explanation: "The capstone decouples transactional operations from analytical consumption. CDC captures PostgreSQL mutations without table locks, Kafka buffers events, Spark and Iceberg process Medallion layers, and dbt models populate curated star-schema marts queried via BI dashboards."
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectQuizAnswer = (qIdx, optIdx) => {
    if (showQuizResults) return;
    setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const quizScore = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.answer) correct++;
    });
    return correct;
  }, [quizAnswers, quizQuestions]);

  // Filtered syllabus sections
  const filteredSections = useMemo(() => {
    return systemDesignSectionsMeta.filter((sec) => {
      const matchesSearch = sec.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = selectedCategory === "All" || sec.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  const categories = useMemo(() => {
    const set = new Set(systemDesignSectionsMeta.map((s) => s.category));
    return ["All", ...Array.from(set)];
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 flex flex-col font-sans">
      {/* Universal Module Navigation Header */}
      <ModuleNav currentCourseId="data-engineering" currentModuleId="system-design-capstone" />

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Module Header Card */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                  Data Engineering · Module 23 (Final Capstone)
                </span>
                <span className="text-xs font-mono text-stone-500">
                  Parts A–F · 27 Blueprint Sections · 6 Interactive Workbenches
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Data Engineering System Design and Final Capstone
              </h1>
              <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
                Design, build, evaluate, and defend a complete enterprise production data platform. Master quantitative capacity sizing, batch vs streaming trade-offs, Change Data Capture (CDC), Medallion lakehouse architecture (Parquet + Apache Iceberg), Airflow orchestration, dbt modeling, and the ShopSphere production e-commerce capstone.
              </p>
            </div>

            {/* Back Button */}
            <button
              onClick={goBack}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium rounded-xl border border-stone-300 bg-stone-50 text-stone-700 hover:bg-stone-100 hover:border-stone-400 transition-colors shadow-sm"
            >
              <ArrowLeft size={14} /> Back to Catalog
            </button>
          </div>

          {/* Primary View Switcher: Curriculum vs Workbenches */}
          <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex p-1 rounded-xl bg-stone-100 border border-stone-200 text-xs font-mono">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === "curriculum"
                    ? "bg-white text-stone-900 shadow-sm border border-stone-200/60"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <BookOpen size={14} className="text-orange-600" />
                <span>Specification & Blueprints (27 Sections)</span>
              </button>
              <button
                onClick={() => setActiveTab("workbench")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === "workbench"
                    ? "bg-white text-stone-900 shadow-sm border border-stone-200/60"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Trophy size={14} className="text-orange-600" />
                <span>Interactive Workbenches (6)</span>
              </button>
            </div>

            <div className="text-xs text-stone-500 font-mono">
              Status: <span className="text-emerald-700 font-semibold">100% Textbook Depth Verbatim · Final Graduation Module</span>
            </div>
          </div>
        </div>

        {/* VIEW 1: SPECIFICATION & BLUEPRINTS (CURRICULUM) */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Sidebar Syllabus Navigator */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 p-4 shadow-sm space-y-4 sticky top-6 max-h-[85vh] flex flex-col">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-semibold text-stone-700">
                  <span className="flex items-center gap-1.5">
                    <Layers size={13} className="text-orange-600" />
                    <span>Curriculum Syllabus</span>
                  </span>
                  <span className="text-[11px] text-stone-600">27 Sections</span>
                </div>

                {/* Search in Syllabus */}
                <div className="relative">
                  <Search size={13} className="absolute left-2.5 top-2.5 text-stone-600" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search sections..."
                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-stone-200 focus:outline-none focus:border-orange-500 font-mono bg-stone-50"
                  />
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 [scrollbar-width:none]">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md whitespace-nowrap transition-colors ${
                        selectedCategory === cat
                          ? "bg-orange-600 text-white font-semibold"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scrollable Section Items */}
              <div className="flex-1 overflow-y-auto space-y-1 pr-1 [scrollbar-width:thin]">
                {filteredSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSectionId(sec.id)}
                    className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-start gap-2.5 ${
                      activeSectionId === sec.id
                        ? "bg-orange-50 border border-orange-200 text-orange-950 font-semibold shadow-xs"
                        : "hover:bg-stone-50 border border-transparent text-stone-700"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-mono mt-0.5 px-1.5 py-0.5 rounded ${
                        activeSectionId === sec.id
                          ? "bg-orange-200 text-orange-900 font-bold"
                          : "bg-stone-100 text-stone-500 font-medium"
                      }`}
                    >
                      {sec.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-stone-900 leading-tight">{sec.title}</p>
                      <span className="text-[10px] text-stone-500 block truncate font-mono mt-0.5">
                        {sec.category}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
              <SystemDesignSection sectionId={activeSectionId} />

              {/* Bottom Pagination Controls */}
              <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-between text-xs font-mono">
                <button
                  disabled={activeSectionId === 0}
                  onClick={() => setActiveSectionId((prev) => Math.max(0, prev - 1))}
                  className="px-3.5 py-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-100 transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft size={13} /> Previous Section
                </button>
                <span className="text-stone-500">
                  Section {activeSectionId + 1} of {systemDesignSectionsMeta.length}
                </span>
                <button
                  disabled={activeSectionId === systemDesignSectionsMeta.length - 1}
                  onClick={() => setActiveSectionId((prev) => Math.min(systemDesignSectionsMeta.length - 1, prev + 1))}
                  className="px-3.5 py-2 rounded-xl border border-stone-200 bg-orange-600 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-700 transition-colors flex items-center gap-1.5"
                >
                  Next Section <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: INTERACTIVE WORKBENCHES (6 APPS) */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Selector Tab Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]">
              <button
                onClick={() => setActiveWorkbench("architecture_estimator_lab")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeWorkbench === "architecture_estimator_lab"
                    ? "bg-orange-600 text-white shadow-sm font-semibold"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Gauge size={14} />
                <span>1. Architecture Sizing Calculator</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("batch_vs_streaming_lab")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeWorkbench === "batch_vs_streaming_lab"
                    ? "bg-orange-600 text-white shadow-sm font-semibold"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Split size={14} />
                <span>2. Batch vs Streaming Decision Engine</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("cdc_debezium_lab")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeWorkbench === "cdc_debezium_lab"
                    ? "bg-orange-600 text-white shadow-sm font-semibold"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Terminal size={14} />
                <span>3. Change Data Capture (CDC) Lab</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("lakehouse_partitioning_lab")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeWorkbench === "lakehouse_partitioning_lab"
                    ? "bg-orange-600 text-white shadow-sm font-semibold"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Database size={14} />
                <span>4. Lakehouse Partition Pruning Lab</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("shopsphere_capstone_dashboard")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeWorkbench === "shopsphere_capstone_dashboard"
                    ? "bg-orange-600 text-white shadow-sm font-semibold"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Rocket size={14} />
                <span>5. ShopSphere Capstone Monitor</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("technical_review_quiz")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeWorkbench === "technical_review_quiz"
                    ? "bg-orange-600 text-white shadow-sm font-semibold"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Trophy size={14} />
                <span>6. Architecture Review & 15Q Quiz</span>
              </button>
            </div>

            {/* ================================================================ */}
            {/* WORKBENCH 1: Architecture Sizing Calculator                      */}
            {/* ================================================================ */}
            {activeWorkbench === "architecture_estimator_lab" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                    <Gauge className="text-orange-600" size={18} />
                    Data Platform Throughput & Storage Sizing Calculator
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Calculate orders per second, peak flash-sale multipliers, daily storage volume, annual growth, and 5-year Medallion storage tier requirements based on quantitative system design principles.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  {/* Controls */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-stone-800 uppercase tracking-wider">
                      Workload Parameters
                    </h4>

                    <div>
                      <div className="flex justify-between text-xs text-stone-600 mb-1">
                        <span>Daily Orders</span>
                        <span className="font-mono font-bold">{dailyOrdersMillions} Million</span>
                      </div>
                      <input
                        type="range"
                        min="0.1"
                        max="20.0"
                        step="0.1"
                        value={dailyOrdersMillions}
                        onChange={(e) => setDailyOrdersMillions(Number(e.target.value))}
                        className="w-full accent-orange-600"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-stone-600 mb-1">
                        <span>Avg Record Size</span>
                        <span className="font-mono font-bold">{avgRecordSizeKb} KB</span>
                      </div>
                      <input
                        type="range"
                        min="0.2"
                        max="5.0"
                        step="0.1"
                        value={avgRecordSizeKb}
                        onChange={(e) => setAvgRecordSizeKb(Number(e.target.value))}
                        className="w-full accent-orange-600"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-stone-600 mb-1">
                        <span>Flash-Sale Surge Factor</span>
                        <span className="font-mono font-bold">{peakSurgeMultiplier}x Peak</span>
                      </div>
                      <input
                        type="range"
                        min="2"
                        max="50"
                        step="1"
                        value={peakSurgeMultiplier}
                        onChange={(e) => setPeakSurgeMultiplier(Number(e.target.value))}
                        className="w-full accent-orange-600"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-stone-600 mb-1">
                        <span>Retention Horizon</span>
                        <span className="font-mono font-bold">{retentionYears} Years</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={retentionYears}
                        onChange={(e) => setRetentionYears(Number(e.target.value))}
                        className="w-full accent-orange-600"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-stone-600 mb-1">
                        <span>Parquet Compression Ratio</span>
                        <span className="font-mono font-bold">{parquetCompressionPct}% Savings</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="90"
                        step="5"
                        value={parquetCompressionPct}
                        onChange={(e) => setParquetCompressionPct(Number(e.target.value))}
                        className="w-full accent-orange-600"
                      />
                    </div>
                  </div>

                  {/* Calculated Output Grid */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-[11px] text-stone-500 block">Avg Ingestion Rate</span>
                        <span className="text-xl font-bold text-stone-900 mt-1 block">
                          {capacityEstimates.avgOrdersPerSec} / sec
                        </span>
                        <span className="text-[10px] text-stone-500">24h average baseline</span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-[11px] text-stone-500 block">Peak Surge Rate</span>
                        <span className="text-xl font-bold text-orange-600 mt-1 block">
                          {capacityEstimates.peakOrdersPerSec.toLocaleString()} / sec
                        </span>
                        <span className="text-[10px] text-orange-700 font-bold">Kafka partition sizing</span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-[11px] text-stone-500 block">Daily Compressed Vol</span>
                        <span className="text-xl font-bold text-stone-900 mt-1 block">
                          {capacityEstimates.dailyCompressedGb} GB
                        </span>
                        <span className="text-[10px] text-emerald-700 font-bold">Parquet + Snappy</span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-[11px] text-stone-500 block">5-Yr Total Lakehouse</span>
                        <span className="text-xl font-bold text-stone-900 mt-1 block">
                          {capacityEstimates.totalPlatformTb} TB
                        </span>
                        <span className="text-[10px] text-stone-500">All Medallion layers</span>
                      </div>
                    </div>

                    {/* Medallion Storage Breakdown Card */}
                    <div className="p-4 rounded-xl bg-stone-900 text-stone-200 font-mono text-xs space-y-3 border border-stone-800">
                      <div className="text-[11px] font-semibold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Database size={13} /> {retentionYears}-Year Medallion Architecture Capacity Allocation
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]">
                        <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700">
                          <span className="text-stone-400 block text-[10px]">BRONZE (RAW)</span>
                          <span className="font-bold text-stone-100">{capacityEstimates.bronzeTb} TB</span>
                          <span className="text-[10px] text-stone-400 block mt-1">Append-only Parquet</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700">
                          <span className="text-stone-400 block text-[10px]">SILVER (CLEAN)</span>
                          <span className="font-bold text-stone-100">{capacityEstimates.silverTb} TB</span>
                          <span className="text-[10px] text-stone-400 block mt-1">Deduplicated baseline</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700">
                          <span className="text-stone-400 block text-[10px]">GOLD (MARTS)</span>
                          <span className="font-bold text-stone-100">{capacityEstimates.goldTb} TB</span>
                          <span className="text-[10px] text-stone-400 block mt-1">Star-schema marts</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700">
                          <span className="text-stone-400 block text-[10px]">DISASTER RECOVERY</span>
                          <span className="font-bold text-stone-100">{capacityEstimates.silverTb} TB</span>
                          <span className="text-[10px] text-stone-400 block mt-1">Cross-region replica</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================================================================ */}
            {/* WORKBENCH 2: Batch vs Streaming Decision Engine                  */}
            {/* ================================================================ */}
            {activeWorkbench === "batch_vs_streaming_lab" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                    <Split className="text-orange-600" size={18} />
                    Batch vs. Streaming Architecture Decision Engine
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Evaluate operational trade-offs between Batch processing, Real-Time Streaming, and Hybrid Lambda/Kappa architectures across four real-world production workload scenarios.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  {/* Scenario Selector */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 font-mono text-xs">
                    <h4 className="font-bold text-stone-800 uppercase tracking-wider text-[11px] mb-2">
                      Select Workload Scenario:
                    </h4>
                    {[
                      { id: "real_time_fraud", label: "Real-Time Payment Fraud" },
                      { id: "daily_audit", label: "Daily Revenue & Tax Audit" },
                      { id: "flash_sale_inventory", label: "Flash-Sale Inventory Reservation" },
                      { id: "ml_backfill", label: "3-Year ML Feature Backfill" }
                    ].map((sc) => (
                      <button
                        key={sc.id}
                        onClick={() => setSelectedScenario(sc.id)}
                        className={`w-full p-2.5 rounded-lg text-left border transition-all ${
                          selectedScenario === sc.id
                            ? "bg-orange-600 text-white border-orange-600 font-bold shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        {sc.label}
                      </button>
                    ))}
                  </div>

                  {/* Recommendation Card */}
                  <div className="md:col-span-2 p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold bg-orange-100 px-2 py-0.5 rounded">
                          ARCHITECTURAL RECOMMENDATION
                        </span>
                        <h4 className="text-base font-bold text-stone-900 mt-1">{scenarioDecision.title}</h4>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-white border border-stone-200">
                        <span className="text-[10px] text-stone-500 block">Architecture</span>
                        <span className="font-bold text-stone-900 mt-1 block">{scenarioDecision.recommendedArchitecture}</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white border border-stone-200">
                        <span className="text-[10px] text-stone-500 block">Required Latency</span>
                        <span className="font-bold text-orange-600 mt-1 block">{scenarioDecision.latencyTarget}</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white border border-stone-200">
                        <span className="text-[10px] text-stone-500 block">Primary Stack</span>
                        <span className="font-bold text-stone-900 mt-1 block truncate">{scenarioDecision.engines}</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-white border border-stone-200 text-xs text-stone-700 leading-relaxed font-sans">
                      <span className="font-bold font-mono text-stone-900 block mb-1">Architectural Rationale:</span>
                      {scenarioDecision.rationale}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================================================================ */}
            {/* WORKBENCH 3: CDC & Debezium Ingestion Lab                        */}
            {/* ================================================================ */}
            {activeWorkbench === "cdc_debezium_lab" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                    <Terminal className="text-orange-600" size={18} />
                    Change Data Capture (CDC) & Write-Ahead Log (WAL) Simulator
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Simulate transactional database operations (<code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>) on a PostgreSQL orders table. Observe how Debezium streams low-level WAL modifications into Kafka topic <code>ecommerce.orders</code> without impacting query performance.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  {/* Controls */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3 font-mono text-xs">
                    <h4 className="font-bold text-stone-800 uppercase tracking-wider text-[11px]">
                      Execute OLTP Transactions:
                    </h4>

                    <button
                      onClick={() => handleSimulateCdcAction("insert")}
                      className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-between"
                    >
                      <span>INSERT INTO orders</span>
                      <span className="text-[10px] opacity-80">(op: c)</span>
                    </button>

                    <button
                      onClick={() => handleSimulateCdcAction("update")}
                      className="w-full py-2.5 px-3 rounded-lg bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors flex items-center justify-between"
                    >
                      <span>UPDATE order status</span>
                      <span className="text-[10px] opacity-80">(op: u)</span>
                    </button>

                    <button
                      onClick={() => handleSimulateCdcAction("delete")}
                      className="w-full py-2.5 px-3 rounded-lg bg-rose-600 text-white font-semibold hover:bg-rose-700 transition-colors flex items-center justify-between"
                    >
                      <span>DELETE FROM orders</span>
                      <span className="text-[10px] opacity-80">(op: d)</span>
                    </button>

                    <div className="pt-2 text-[11px] text-stone-500 font-sans leading-relaxed">
                      Debezium reads the PostgreSQL WAL asynchronously, ensuring hard deletes and interim state transitions are captured with zero table locking.
                    </div>
                  </div>

                  {/* Kafka Stream Output */}
                  <div className="md:col-span-2 space-y-2">
                    <div className="flex items-center justify-between font-mono text-xs text-stone-700 font-semibold px-1">
                      <span>KAFKA TOPIC: ecommerce.orders (Debezium Change Stream)</span>
                      <span className="text-orange-600">Showing last {cdcEvents.length} events</span>
                    </div>

                    <div className="space-y-2">
                      {cdcEvents.map((evt) => (
                        <div
                          key={evt.id}
                          className="p-3 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-[11px] border border-neutral-800 overflow-x-auto"
                        >
                          <div className="flex items-center justify-between text-stone-400 border-b border-neutral-800 pb-1 mb-1.5">
                            <span className="text-orange-400 font-bold">{evt.id} · Table: {evt.table}</span>
                            <span>Operation: <strong className={evt.op === "c" ? "text-emerald-400" : evt.op === "u" ? "text-amber-400" : "text-rose-400"}>
                              {evt.op === "c" ? "CREATE" : evt.op === "u" ? "UPDATE" : "DELETE"}
                            </strong></span>
                          </div>
                          <pre>{JSON.stringify({ op: evt.op, ts_ms: evt.timestamp, before: evt.before, after: evt.after }, null, 2)}</pre>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================================================================ */}
            {/* WORKBENCH 4: Lakehouse Partition Pruning Lab                     */}
            {/* ================================================================ */}
            {activeWorkbench === "lakehouse_partitioning_lab" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                    <Database className="text-orange-600" size={18} />
                    Lakehouse Storage & Partition Pruning Simulator (Apache Iceberg)
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Simulate how SQL query engines interact with metadata manifests. Compare unpartitioned scans vs date-pruned Iceberg tables vs the notorious over-partitioning "small-file crisis".
                  </p>
                </div>

                {/* Strategy Buttons */}
                <div className="flex items-center gap-2 p-1.5 rounded-xl bg-stone-100 border border-stone-200 w-fit font-mono text-xs">
                  <button
                    onClick={() => setPartitionStrategy("date_pruned")}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                      partitionStrategy === "date_pruned" ? "bg-emerald-600 text-white shadow-sm" : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    Optimized Date Partitioning
                  </button>
                  <button
                    onClick={() => setPartitionStrategy("unpartitioned")}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                      partitionStrategy === "unpartitioned" ? "bg-amber-600 text-white shadow-sm" : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    Unpartitioned (Full Scan)
                  </button>
                  <button
                    onClick={() => setPartitionStrategy("over_partitioned")}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                      partitionStrategy === "over_partitioned" ? "bg-rose-600 text-white shadow-sm" : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    Over-Partitioned (Small Files)
                  </button>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-[11px] text-stone-500 block">Scanned Files</span>
                    <span className="text-xl font-bold text-stone-900 mt-1 block">
                      {partitionMetrics.scannedFiles.toLocaleString()} files
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-[11px] text-stone-500 block">Data Scanned (I/O)</span>
                    <span className="text-xl font-bold text-orange-600 mt-1 block">
                      {partitionMetrics.scannedBytes}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-bold">{partitionMetrics.ioReductionPct}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-[11px] text-stone-500 block">Query Execution Time</span>
                    <span className="text-xl font-bold text-stone-900 mt-1 block">
                      {partitionMetrics.scanTimeSeconds} sec
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-[11px] text-stone-500 block">Metastore Overhead</span>
                    <span className="text-xs font-bold text-stone-800 mt-1 block truncate">
                      {partitionMetrics.metastoreOverhead}
                    </span>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border text-xs font-sans ${
                  partitionStrategy === "date_pruned"
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : partitionStrategy === "unpartitioned"
                    ? "bg-amber-50 border-amber-300 text-amber-950"
                    : "bg-rose-50 border-rose-300 text-rose-950"
                }`}>
                  <p className="font-mono font-bold">{partitionMetrics.warning}</p>
                </div>
              </div>
            )}

            {/* ================================================================ */}
            {/* WORKBENCH 5: ShopSphere Capstone Production Monitor              */}
            {/* ================================================================ */}
            {activeWorkbench === "shopsphere_capstone_dashboard" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                      <Rocket className="text-orange-600" size={18} />
                      ShopSphere Production Platform Operations Dashboard
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Live telemetry across the end-to-end capstone platform: PostgreSQL OLTP → Kafka Stream → Spark Processing → MinIO Iceberg Lakehouse → dbt Models → Metabase BI.
                    </p>
                  </div>

                  <div className="inline-flex p-1 rounded-xl bg-stone-100 border border-stone-200 text-xs font-mono">
                    <button
                      onClick={() => setCapstoneTab("kpis")}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                        capstoneTab === "kpis" ? "bg-white text-stone-900 shadow-sm" : "text-stone-600"
                      }`}
                    >
                      Executive KPIs
                    </button>
                    <button
                      onClick={() => setCapstoneTab("medallion")}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                        capstoneTab === "medallion" ? "bg-white text-stone-900 shadow-sm" : "text-stone-600"
                      }`}
                    >
                      Medallion Health
                    </button>
                    <button
                      onClick={() => setCapstoneTab("airflow")}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                        capstoneTab === "airflow" ? "bg-white text-stone-900 shadow-sm" : "text-stone-600"
                      }`}
                    >
                      Airflow DAG Run
                    </button>
                  </div>
                </div>

                {capstoneTab === "kpis" && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-[11px] text-stone-500 block">Today's Total Revenue</span>
                      <span className="text-2xl font-bold text-stone-900 mt-1 block">$4,218,500</span>
                      <span className="text-[10px] text-emerald-700 font-bold">+14.2% YoY Growth</span>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-[11px] text-stone-500 block">Completed Orders</span>
                      <span className="text-2xl font-bold text-stone-900 mt-1 block">142,390</span>
                      <span className="text-[10px] text-stone-500">Live order stream</span>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-[11px] text-stone-500 block">Average Order Value</span>
                      <span className="text-2xl font-bold text-orange-600 mt-1 block">$29.63</span>
                      <span className="text-[10px] text-stone-500">dbt mart computed</span>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-[11px] text-stone-500 block">Live Ingestion Rate</span>
                      <span className="text-2xl font-bold text-emerald-700 mt-1 block">{liveStreamEvents} / sec</span>
                      <span className="text-[10px] text-emerald-700 font-bold">Kafka Lag: 0 ms</span>
                    </div>
                  </div>
                )}

                {capstoneTab === "medallion" && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                    <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-300 space-y-2">
                      <div className="flex items-center justify-between font-bold text-amber-950">
                        <span>BRONZE (RAW S3)</span>
                        <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-900 text-[10px]">HEALTHY</span>
                      </div>
                      <p className="text-xl font-bold text-stone-900">2,450,120 Records</p>
                      <p className="text-[11px] text-stone-600">Raw uncompressed events ingested from Debezium CDC and REST extractors.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 space-y-2">
                      <div className="flex items-center justify-between font-bold text-slate-900">
                        <span>SILVER (CLEAN ICEBERG)</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px]">VALIDATED</span>
                      </div>
                      <p className="text-xl font-bold text-stone-900">2,448,900 Records</p>
                      <p className="text-[11px] text-stone-600">Deduplicated and schema-validated. 1,220 invalid records routed to Dead-Letter Queue.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-yellow-50/60 border border-yellow-300 space-y-2">
                      <div className="flex items-center justify-between font-bold text-yellow-950">
                        <span>GOLD (ANALYTICAL MARTS)</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px]">ACTIVE</span>
                      </div>
                      <p className="text-xl font-bold text-stone-900">3 Star Schemas</p>
                      <p className="text-[11px] text-stone-600"><code>fact_orders</code>, <code>dim_customer</code>, and <code>dim_product</code> published for Metabase BI querying.</p>
                    </div>
                  </div>
                )}

                {capstoneTab === "airflow" && (
                  <div className="p-4 rounded-xl bg-stone-900 text-stone-200 font-mono text-xs space-y-3 border border-stone-800">
                    <div className="flex items-center justify-between text-orange-400 font-bold border-b border-stone-800 pb-2">
                      <span>AIRFLOW DAG: shopsphere_daily_lakehouse_pipeline</span>
                      <span className="text-emerald-400">EXECUTION: SUCCESS (00:03:42)</span>
                    </div>

                    <div className="space-y-1.5 text-[11px]">
                      {[
                        { task: "extract_source_cdc_events", duration: "18s", status: "success" },
                        { task: "validate_raw_bronze_records", duration: "12s", status: "success" },
                        { task: "spark_transform_silver_layer", duration: "1m 14s", status: "success" },
                        { task: "dbt_build_gold_marts", duration: "48s", status: "success" },
                        { task: "dbt_test_data_quality", duration: "25s", status: "success" },
                        { task: "refresh_metabase_bi_cache", duration: "45s", status: "success" }
                      ].map((t, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 rounded bg-stone-800/60 border border-stone-700">
                          <span className="flex items-center gap-2">
                            <CheckCircle2 size={13} className="text-emerald-400" />
                            <span>{t.task}</span>
                          </span>
                          <span className="text-stone-400">{t.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ================================================================ */}
            {/* WORKBENCH 6: Architecture Review & 15Q Quiz                      */}
            {/* ================================================================ */}
            {activeWorkbench === "technical_review_quiz" && (
              <div className="space-y-6">
                {/* 10-Point Technical Architecture Checklist */}
                <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                        <CheckSquare className="text-orange-600" size={18} />
                        Production Technical Architecture Review Checklist (10 Points)
                      </h3>
                      <p className="text-xs text-stone-600 mt-1">
                        Use this enterprise review framework to evaluate your capstone data platform before production deployment.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                    {[
                      "1. Business Requirement Alignment: Platform directly maps to stakeholder KPIs.",
                      "2. Quantitative Capacity Sizing: Peak flash-sale throughput (20x) accounted for.",
                      "3. Ingestion Reliability: CDC connector uses WAL streaming with offset checkpointing.",
                      "4. Idempotency Guarantees: All pipeline tasks can be safely re-run without duplication.",
                      "5. Lakehouse Partition Pruning: Pruning rules prevent the small-file crisis.",
                      "6. Automated Quality Gate: dbt schema tests enforce not-null and uniqueness.",
                      "7. RPO / RTO Disaster Recovery: Off-site backups support <= 15m RPO and <= 2h RTO.",
                      "8. Security & Zero Trust: Secrets managed via KMS/Vault; IAM roles follow least privilege.",
                      "9. FinOps Cost Governance: Cluster autoscaling and Spot compute policies enabled.",
                      "10. Architecture Decision Records: Major trade-offs (Iceberg vs Delta) documented in ADRs."
                    ].map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-stone-800 leading-relaxed font-sans">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 15-Question Final Certification Quiz */}
                <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                        <Trophy className="text-orange-600" size={18} />
                        Module 23 Comprehensive Certification Quiz (15 Questions)
                      </h3>
                      <p className="text-xs text-stone-600 mt-1">
                        Final graduation assessment for the Data Engineering Master Course. Evaluates system design, quantitative sizing, Lakehouse architecture, CDC mechanics, and the ShopSphere capstone.
                      </p>
                    </div>

                    {showQuizResults ? (
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono font-bold text-orange-600">
                          Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                        </span>
                        <button
                          onClick={() => {
                            setShowQuizResults(false);
                            setQuizAnswers({});
                          }}
                          className="px-3.5 py-1.5 rounded-lg border border-stone-300 bg-stone-50 text-stone-700 font-mono text-xs hover:bg-stone-100 transition-colors"
                        >
                          Retake Quiz
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setShowQuizResults(true)}
                        disabled={Object.keys(quizAnswers).length === 0}
                        className="px-4 py-2 rounded-xl bg-orange-600 text-white font-mono text-xs font-bold hover:bg-orange-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                      >
                        Submit Answers ({Object.keys(quizAnswers).length}/{quizQuestions.length})
                      </button>
                    )}
                  </div>

                  {/* Question List */}
                  <div className="space-y-6">
                    {quizQuestions.map((q, qIdx) => {
                      const selectedOpt = quizAnswers[qIdx];
                      const isSubmitted = showQuizResults;
                      const isCorrect = isSubmitted && selectedOpt === q.answer;

                      return (
                        <div
                          key={q.id}
                          className={`p-4 sm:p-5 rounded-xl border transition-all text-xs space-y-3 ${
                            isSubmitted
                              ? isCorrect
                                ? "bg-emerald-50/50 border-emerald-300"
                                : "bg-rose-50/50 border-rose-300"
                              : "bg-stone-50/60 border-stone-200"
                          }`}
                        >
                          <div className="flex items-start gap-2.5">
                            <span className="font-mono font-bold text-orange-600 text-sm mt-0.5">
                              {q.id}.
                            </span>
                            <div className="flex-1 font-semibold text-stone-900 leading-relaxed text-sm">
                              {q.question}
                            </div>
                          </div>

                          {/* Options */}
                          <div className="grid grid-cols-1 gap-2 pl-6">
                            {q.options.map((opt, optIdx) => {
                              const isThisSelected = selectedOpt === optIdx;
                              let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-50";

                              if (isSubmitted) {
                                if (optIdx === q.answer) {
                                  btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                                } else if (isThisSelected && !isCorrect) {
                                  btnStyle = "bg-rose-100 border-rose-400 text-rose-950";
                                } else {
                                  btnStyle = "bg-white border-stone-200 text-stone-400 opacity-60";
                                }
                              } else if (isThisSelected) {
                                btnStyle = "bg-orange-50 border-orange-500 text-orange-950 font-semibold shadow-xs";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  disabled={isSubmitted}
                                  onClick={() => handleSelectQuizAnswer(qIdx, optIdx)}
                                  className={`p-3 rounded-lg border text-left text-xs transition-all flex items-start gap-2.5 ${btnStyle}`}
                                >
                                  <span className="font-mono text-[11px] font-bold mt-0.5 text-stone-500">
                                    {String.fromCharCode(65 + optIdx)}.
                                  </span>
                                  <span className="flex-1 leading-relaxed">{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Answer Explanation */}
                          {isSubmitted && (
                            <div className="pl-6 pt-2 border-t border-stone-200/50 text-[11px] font-sans text-stone-600 leading-relaxed">
                              <span className="font-bold text-stone-800">Explanation: </span>
                              {q.explanation}
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
      </div>
    </div>
  );
}
