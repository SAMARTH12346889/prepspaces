// projectx/src/Componets/DataEngineeringIngestion.jsx
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
  Radio,
  Send,
  SlidersHorizontal,
  RotateCw
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import DataEngineeringIngestionSections from "./DataEngineeringIngestionSections";

export default function DataEngineeringIngestion() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("cdc_stream"); // 'cdc_stream' | 'extraction_modes' | 'api_rate_limits' | 'idempotent_merge' | 'dlq_manager' | 'kafka_quiz'

  // =========================================================================
  // WORKBENCH 1: Real-Time Log-Based CDC Stream Simulator (MySQL Binlog / Debezium)
  // =========================================================================
  const [cdcAction, setCdcAction] = useState("insert"); // 'insert' | 'update' | 'delete'
  const [cdcCustomerTarget, setCdcCustomerTarget] = useState("101");
  const [cdcEvents, setCdcEvents] = useState([
    {
      offset: "binlog-001:1042",
      ts_ms: Date.now() - 3600000,
      op: "r",
      table: "customers",
      before: null,
      after: { customer_id: 101, name: "Rahul", email: "rahul@example.com", city: "Pune", balance: 10000 }
    },
    {
      offset: "binlog-001:1280",
      ts_ms: Date.now() - 1800000,
      op: "r",
      table: "customers",
      before: null,
      after: { customer_id: 102, name: "Amit", email: "amit@example.com", city: "Mumbai", balance: 20000 }
    }
  ]);

  const handleExecuteCdcAction = () => {
    const timestamp = Date.now();
    let newEvent = null;
    const targetId = parseInt(cdcCustomerTarget, 10);

    if (cdcAction === "insert") {
      const nextId = targetId || 103;
      newEvent = {
        offset: `binlog-001:${timestamp.toString().slice(-4)}`,
        ts_ms: timestamp,
        op: "c",
        table: "customers",
        before: null,
        after: { customer_id: nextId, name: "Priya", email: "priya@example.com", city: "Delhi", balance: 15000 }
      };
    } else if (cdcAction === "update") {
      newEvent = {
        offset: `binlog-001:${timestamp.toString().slice(-4)}`,
        ts_ms: timestamp,
        op: "u",
        table: "customers",
        before: { customer_id: targetId, balance: 10000, city: "Pune" },
        after: { customer_id: targetId, balance: 8000, city: "Hyderabad" }
      };
    } else if (cdcAction === "delete") {
      newEvent = {
        offset: `binlog-001:${timestamp.toString().slice(-4)}`,
        ts_ms: timestamp,
        op: "d",
        table: "customers",
        before: { customer_id: targetId, name: "Rahul", city: "Pune", balance: 10000 },
        after: null
      };
    }

    if (newEvent) {
      setCdcEvents(prev => [newEvent, ...prev.slice(0, 9)]);
    }
  };

  // =========================================================================
  // WORKBENCH 2: Full Load vs Incremental Extraction (Watermarks & Compound Cursors)
  // =========================================================================
  const [extractionMode, setExtractionMode] = useState("compound_cursor"); // 'full' | 'timestamp_watermark' | 'compound_cursor'
  const [simulatedOverlap, setSimulatedOverlap] = useState(true);

  const extractionMetrics = useMemo(() => {
    if (extractionMode === "full") {
      return {
        modeName: "Full-Table Extraction",
        rowsScanned: "10,000,000 rows",
        dataTransferredMb: "1,520 MB",
        databaseCpuLoad: "85% (Table-wide seq scan)",
        queryLatencyMs: 12400,
        risk: "Severe source database I/O contention & locking",
        queryExample: "SELECT * FROM orders;"
      };
    } else if (extractionMode === "timestamp_watermark") {
      return {
        modeName: "Timestamp Watermark (> :last_watermark)",
        rowsScanned: "1,250 rows",
        dataTransferredMb: "0.19 MB",
        databaseCpuLoad: "12% (Index range scan)",
        queryLatencyMs: 145,
        risk: simulatedOverlap ? "Boundary data loss: Misses records sharing identical millisecond timestamp!" : "Requires unique high-precision timestamps",
        queryExample: "SELECT * FROM orders WHERE updated_at > :last_watermark ORDER BY updated_at;"
      };
    } else {
      return {
        modeName: "Compound Cursor (Watermark + Order ID)",
        rowsScanned: "1,255 rows",
        dataTransferredMb: "0.20 MB",
        databaseCpuLoad: "12% (Covering compound index scan)",
        queryLatencyMs: 150,
        risk: "None: 100% deterministic boundary extraction with zero lost records",
        queryExample: "SELECT * FROM orders WHERE updated_at > :last_ts OR (updated_at = :last_ts AND order_id > :last_id) ORDER BY updated_at, order_id;"
      };
    }
  }, [extractionMode, simulatedOverlap]);

  // =========================================================================
  // WORKBENCH 3: REST API Ingestion & Rate Limit Handling (HTTP 429 & Backoff)
  // =========================================================================
  const [apiRequests, setApiRequests] = useState([
    { id: 1, url: "/v1/orders?limit=100", status: 200, cursor: "cur_01", message: "Fetched 100 orders successfully" },
    { id: 2, url: "/v1/orders?limit=100&cursor=cur_01", status: 200, cursor: "cur_02", message: "Fetched 100 orders successfully" },
  ]);
  const [isSimulatingRateLimit, setIsSimulatingRateLimit] = useState(false);

  const handleSimulateApiCall = () => {
    const nextReqId = apiRequests.length + 1;
    if (nextReqId % 3 === 0) {
      // Rate limit triggered!
      setIsSimulatingRateLimit(true);
      setApiRequests(prev => [
        {
          id: nextReqId,
          url: `/v1/orders?limit=100&cursor=cur_0${nextReqId - 1}`,
          status: 429,
          cursor: `cur_0${nextReqId - 1}`,
          message: "HTTP 429 Too Many Requests (Retry-After: 4s) -> Executing Exponential Backoff (4.2s jitter)..."
        },
        ...prev
      ]);
    } else {
      setIsSimulatingRateLimit(false);
      setApiRequests(prev => [
        {
          id: nextReqId,
          url: `/v1/orders?limit=100&cursor=cur_0${nextReqId - 1}`,
          status: 200,
          cursor: `cur_0${nextReqId}`,
          message: `Fetched 100 orders (Total: ${nextReqId * 100})`
        },
        ...prev
      ]);
    }
  };

  // =========================================================================
  // WORKBENCH 4: Idempotent Merge & Deduplication Studio (MERGE INTO)
  // =========================================================================
  const [useIdempotentMerge, setUseIdempotentMerge] = useState(true);
  const [replayAttempts, setReplayAttempts] = useState(0);

  const idempotentMetrics = useMemo(() => {
    const baseOrders = 1000;
    const baseRevenue = 500000;
    const duplicatedBatches = replayAttempts;

    if (!useIdempotentMerge) {
      // Blind append -> duplicates accumulate!
      const totalRows = baseOrders + (duplicatedBatches * 10);
      const totalRevenue = baseRevenue + (duplicatedBatches * 50000);
      return {
        tableRows: totalRows,
        calculatedRevenue: totalRevenue,
        duplicateCount: duplicatedBatches * 10,
        integrityStatus: "Corrupted: Financial discrepancy due to double-counted replayed events!",
        statusColor: "text-rose-700 bg-rose-50 border-rose-200"
      };
    } else {
      return {
        tableRows: baseOrders,
        calculatedRevenue: baseRevenue,
        duplicateCount: 0,
        integrityStatus: "Perfect: Idempotent MERGE INTO prevents duplicate insertions on replay",
        statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200"
      };
    }
  }, [useIdempotentMerge, replayAttempts]);

  // =========================================================================
  // WORKBENCH 5: Dead-Letter Queue (DLQ) & Error Quarantine Manager
  // =========================================================================
  const [dlqItems, setDlqItems] = useState([
    {
      id: "DLQ-1001",
      event_id: "EVT-8821",
      source: "stripe_webhook",
      payload: { transaction_id: "T109", amount: "INVALID_AMOUNT", currency: "INR" },
      error_type: "TYPE_CAST_ERROR",
      error_message: "Cannot cast string 'INVALID_AMOUNT' to DECIMAL(18,2)",
      retries: 3,
      failed_at: "2026-11-09 11:15:22"
    },
    {
      id: "DLQ-1002",
      event_id: "EVT-8822",
      source: "orders_api",
      payload: { order_id: "ORD-901", customer_id: null, amount: 2400 },
      error_type: "CONSTRAINT_VIOLATION",
      error_message: "Mandatory field 'customer_id' cannot be NULL",
      retries: 3,
      failed_at: "2026-11-09 11:18:40"
    }
  ]);

  const handleResolveDlq = (dlqId) => {
    setDlqItems(prev => prev.filter(item => item.id !== dlqId));
  };

  // =========================================================================
  // WORKBENCH 6: Kafka Partitioning & 12-Question Mastery Assessment
  // =========================================================================
  const [producerThroughput, setProducerThroughput] = useState(15000); // 5000 to 50000 events/sec
  const [topicPartitions, setTopicPartitions] = useState(4); // 2, 4, 8, 12
  const [consumerWorkers, setConsumerWorkers] = useState(4); // 1 to 8 workers

  const kafkaMetrics = useMemo(() => {
    const maxCapacityPerWorker = 3500; // events/sec
    const totalProcessingCapacity = consumerWorkers * maxCapacityPerWorker;
    const isBackpressure = producerThroughput > totalProcessingCapacity;
    const consumerLag = isBackpressure ? Math.round((producerThroughput - totalProcessingCapacity) * 4.2) : 0;
    const effectiveParallelism = Math.min(topicPartitions, consumerWorkers);

    return {
      totalProcessingCapacity,
      isBackpressure,
      consumerLag,
      effectiveParallelism,
      unassignedWorkers: Math.max(0, consumerWorkers - topicPartitions)
    };
  }, [producerThroughput, topicPartitions, consumerWorkers]);

  // Quiz state (12 Questions from User Prompt)
  const QUIZ_QUESTIONS = [
    {
      id: 1,
      q: "What is data ingestion?",
      options: [
        "Only cleaning and validating data",
        "Moving data from source systems to destinations",
        "Only training machine learning models",
        "Creating database indexes"
      ],
      correct: 1,
      explanation: "Data ingestion is the process of collecting data from various source systems and transferring it into storage and processing destinations."
    },
    {
      id: 2,
      q: "What is the main advantage of incremental ingestion?",
      options: [
        "It always reads the entire table",
        "It transfers only new or changed records",
        "It removes the need for data validation",
        "It cannot capture updates"
      ],
      correct: 1,
      explanation: "Incremental ingestion extracts only records modified or added since the previous checkpoint, avoiding expensive full-table scans."
    },
    {
      id: 3,
      q: "Which approach reads database transaction logs directly?",
      options: [
        "File scanning",
        "Full table extraction",
        "Log-based CDC",
        "Static CSV import"
      ],
      correct: 2,
      explanation: "Log-based CDC reads the internal database transaction log (MySQL Binlog, PostgreSQL WAL) to capture row-level changes without querying tables."
    },
    {
      id: 4,
      q: "Which technology commonly captures MySQL Binlog events and emits change streams?",
      options: [
        "Debezium",
        "Power BI",
        "Tableau",
        "NumPy"
      ],
      correct: 0,
      explanation: "Debezium is a distributed platform that taps into database transaction logs and converts modifications into event streams in Kafka."
    },
    {
      id: 5,
      q: "What is a Kafka offset?",
      options: [
        "A database column type",
        "The position of a record in a topic partition",
        "An API authentication token",
        "A data compression algorithm"
      ],
      correct: 1,
      explanation: "In Apache Kafka, an offset is a sequential numeric identifier assigned to each record within a specific partition."
    },
    {
      id: 6,
      q: "When should a pipeline advance its extraction watermark?",
      options: [
        "Before starting extraction",
        "Before destination writes",
        "After successful destination processing and commit",
        "Whenever a request starts"
      ],
      correct: 2,
      explanation: "A watermark should only be advanced after the target dataset has safely committed the records, preventing permanent data loss on crash."
    },
    {
      id: 7,
      q: "What is checkpointing in data pipelines?",
      options: [
        "Deleting old records",
        "Saving processing progress and state for recovery",
        "Changing the table schema",
        "Creating API credentials"
      ],
      correct: 1,
      explanation: "Checkpointing saves the current processing position, stream offsets, and operator state so a pipeline can recover after failure."
    },
    {
      id: 8,
      q: "What is idempotent ingestion?",
      options: [
        "Every retry creates a new record",
        "Repeated processing produces the same intended final state",
        "Records must always be deleted",
        "Every message is compressed"
      ],
      correct: 1,
      explanation: "An operation is idempotent if executing it multiple times has the exact same net effect as executing it once (e.g. key-based upserts)."
    },
    {
      id: 9,
      q: "What is a Dead-Letter Queue (DLQ) used for?",
      options: [
        "Storing all successful records",
        "Storing messages that cannot be processed successfully",
        "Saving database passwords",
        "Increasing API rate limits"
      ],
      correct: 1,
      explanation: "A DLQ isolates malformed or permanently unprocessable messages without interrupting the rest of the ingestion pipeline."
    },
    {
      id: 10,
      q: "What does backpressure indicate in a streaming ingestion pipeline?",
      options: [
        "The source has stopped generating data",
        "Incoming data exceeds downstream processing capacity",
        "A schema has been deleted",
        "The database has no primary key"
      ],
      correct: 1,
      explanation: "Backpressure occurs when data arrives faster than downstream stages can process it, leading to queue growth and consumer lag."
    },
    {
      id: 11,
      q: "Which PostgreSQL mechanism exposes logical database changes from WAL?",
      options: [
        "Logical decoding",
        "CSV export",
        "SQL views",
        "Database triggers only"
      ],
      correct: 0,
      explanation: "PostgreSQL logical decoding extracts row-level changes from the Write-Ahead Log (WAL) and outputs them to replication slots for CDC."
    },
    {
      id: 12,
      q: "What is the purpose of initial snapshotting in CDC?",
      options: [
        "Delete historical records",
        "Capture the existing database state before ongoing change processing",
        "Replace the Kafka broker",
        "Disable transaction logging"
      ],
      correct: 1,
      explanation: "An initial snapshot captures the full existing table records to establish a baseline before switching to real-time log streaming."
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
      {/* Sticky Universal Course Navigation */}
      <ModuleNav track="data-engineering" currentModuleId="ingestion-cdc" />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Module Header Card */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/50 via-amber-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                <Database size={13} className="text-[#f97316]" />
                <span>Data Engineering Master Course · Module 9</span>
              </div>
              <div className="text-xs font-mono text-stone-500">
                Core Data Pipelines · Intermediate to Advanced
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Data Ingestion & Change Data Capture (CDC)
            </h1>

            <p className="text-stone-600 text-base sm:text-lg max-w-4xl leading-relaxed">
              Master end-to-end data ingestion architectures from batch pulls to real-time log-based CDC: MySQL Binlog & Postgres WAL decoding, Debezium, Apache Kafka transport, incremental watermarks, cursor pagination with exponential backoff, checkpointing, deduplication, idempotent upserts, Dead-Letter Queues (DLQ), and scalable backpressure management.
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
            <DataEngineeringIngestionSections />
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
                onClick={() => setActiveWorkbench("cdc_stream")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "cdc_stream"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Zap size={15} className="text-[#f97316]" />
                <span>1. Log-Based CDC Stream</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("extraction_modes")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "extraction_modes"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Filter size={15} className="text-[#f97316]" />
                <span>2. Watermarks & Extraction</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("api_rate_limits")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "api_rate_limits"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Globe size={15} className="text-[#f97316]" />
                <span>3. REST API & Backoff</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("idempotent_merge")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "idempotent_merge"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <RotateCw size={15} className="text-[#f97316]" />
                <span>4. Idempotent Upsert</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("dlq_manager")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "dlq_manager"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <AlertTriangle size={15} className="text-[#f97316]" />
                <span>5. Dead-Letter Queue</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("kafka_quiz")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "kafka_quiz"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <CheckCircle2 size={15} className="text-[#f97316]" />
                <span>6. Kafka & Quiz</span>
              </button>
            </div>

            {/* WORKBENCH 1: REAL-TIME LOG-BASED CDC STREAM */}
            {activeWorkbench === "cdc_stream" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Workbench 1 · Change Data Capture
                    </span>
                    <h2 className="text-2xl font-bold text-stone-900 mt-1">
                      Log-Based CDC Stream Simulator (MySQL Binlog $\rightarrow$ Debezium $\rightarrow$ Kafka)
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm">
                      Execute database DML transactions and observe real-time row-level change event emissions containing before/after states and metadata.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={cdcAction}
                      onChange={(e) => setCdcAction(e.target.value)}
                      className="px-3 py-1.5 text-xs font-bold rounded-lg border border-stone-300 bg-stone-50"
                    >
                      <option value="insert">INSERT (Create Customer #103)</option>
                      <option value="update">UPDATE (Customer #101 Balance & City)</option>
                      <option value="delete">DELETE (Delete Customer #101)</option>
                    </select>
                    <button
                      onClick={handleExecuteCdcAction}
                      className="px-4 py-1.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-lg transition shadow-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Play size={14} />
                      <span>Execute SQL & Emit CDC</span>
                    </button>
                  </div>
                </div>

                {/* Live CDC Stream Feed */}
                <div className="border border-stone-200 rounded-xl overflow-hidden">
                  <div className="p-3 bg-stone-100 border-b border-stone-200 font-bold text-xs uppercase text-stone-800 flex justify-between items-center font-mono">
                    <span>Kafka Topic: ecommerce.ecommerce.customers (Live Debezium Feed)</span>
                    <span className="text-[11px] text-stone-500">Showing last {cdcEvents.length} events</span>
                  </div>
                  <div className="divide-y divide-stone-100 font-mono text-xs max-h-96 overflow-y-auto">
                    {cdcEvents.map((evt, idx) => (
                      <div key={idx} className="p-3.5 hover:bg-stone-50 transition space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              evt.op === "c" ? "bg-emerald-100 text-emerald-800" :
                              evt.op === "u" ? "bg-amber-100 text-amber-800" :
                              evt.op === "d" ? "bg-rose-100 text-rose-800" :
                              "bg-blue-100 text-blue-800"
                            }`}>
                              OP: {evt.op === "c" ? "INSERT (c)" : evt.op === "u" ? "UPDATE (u)" : evt.op === "d" ? "DELETE (d)" : "SNAPSHOT (r)"}
                            </span>
                            <span className="text-stone-500">{evt.offset}</span>
                          </div>
                          <span className="text-stone-400 text-[10px]">{new Date(evt.ts_ms).toLocaleTimeString()}</span>
                        </div>
                        <div className="p-2.5 rounded bg-neutral-900 text-neutral-200 overflow-x-auto text-[11px]">
                          <pre>{JSON.stringify({ op: evt.op, before: evt.before, after: evt.after, ts_ms: evt.ts_ms }, null, 2)}</pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 2: EXTRACTION MODES & WATERMARKS */}
            {activeWorkbench === "extraction_modes" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Workbench 2 · Extraction Engine
                    </span>
                    <h2 className="text-2xl font-bold text-stone-900 mt-1">
                      Full Load vs Incremental Extraction (Watermarks & Compound Cursors)
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm">
                      Compare query execution latency, database CPU load, and network transfer volume across full loads, timestamp watermarks, and compound cursors.
                    </p>
                  </div>
                </div>

                {/* Extraction Mode Switcher */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "full", label: "Full-Table Extraction", desc: "Extracts all 10M rows" },
                    { id: "timestamp_watermark", label: "Timestamp Watermark", desc: "WHERE updated_at > :ts" },
                    { id: "compound_cursor", label: "Compound Cursor", desc: "WHERE (ts, id) > (:last_ts, :last_id)" }
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setExtractionMode(m.id)}
                      className={`p-4 rounded-xl border text-left transition cursor-pointer ${
                        extractionMode === m.id
                          ? "bg-orange-50 border-orange-500 shadow-xs"
                          : "bg-stone-50 border-stone-200 hover:border-orange-300"
                      }`}
                    >
                      <h4 className="font-bold text-stone-900 text-sm">{m.label}</h4>
                      <p className="text-stone-500 text-xs mt-1 font-mono">{m.desc}</p>
                    </button>
                  ))}
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200">
                    <span className="text-[11px] font-mono text-orange-700 font-bold uppercase block">Rows Extracted</span>
                    <span className="text-xl sm:text-2xl font-black text-orange-950 font-mono">
                      {extractionMetrics.rowsScanned}
                    </span>
                    <span className="text-[10px] text-orange-700 block mt-0.5">{extractionMetrics.dataTransferredMb}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Source Database Load</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      {extractionMetrics.databaseCpuLoad}
                    </span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">CPU & Memory</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Execution Latency</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      {extractionMetrics.queryLatencyMs} ms
                    </span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">End-to-end pull</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Boundary Safety</span>
                    <span className="text-xs font-bold text-stone-900 font-mono block mt-1">
                      {extractionMetrics.risk}
                    </span>
                  </div>
                </div>

                {/* SQL Query Box */}
                <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs space-y-1">
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Executed SQL Extraction Query</span>
                  <code className="text-emerald-300 block">{extractionMetrics.queryExample}</code>
                </div>
              </div>
            )}

            {/* WORKBENCH 3: REST API INGESTION & RATE LIMITS */}
            {activeWorkbench === "api_rate_limits" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Workbench 3 · API Reliability
                    </span>
                    <h2 className="text-2xl font-bold text-stone-900 mt-1">
                      REST API Ingestion & Rate Limit Handling (HTTP 429 & Backoff)
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm">
                      Simulate cursor-based API extraction, observe HTTP 429 rate limit triggers, and watch automatic exponential backoff with jitter restore throughput.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleSimulateApiCall}
                      className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl transition shadow-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send size={14} />
                      <span>Fetch Next API Page</span>
                    </button>
                  </div>
                </div>

                {/* HTTP Request Log Stream */}
                <div className="border border-stone-200 rounded-xl overflow-hidden font-mono text-xs">
                  <div className="p-3 bg-stone-100 border-b border-stone-200 font-bold text-xs uppercase text-stone-800 flex justify-between items-center">
                    <span>HTTP Request & Response Trace</span>
                    <span className="text-[11px] text-stone-500">Target: api.example.com/v1/orders</span>
                  </div>
                  <div className="divide-y divide-stone-100 max-h-80 overflow-y-auto">
                    {apiRequests.map((req) => (
                      <div key={req.id} className="p-3 hover:bg-stone-50 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            req.status === 200 ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                          }`}>
                            HTTP {req.status}
                          </span>
                          <span className="text-stone-800 font-semibold">{req.url}</span>
                        </div>
                        <span className="text-stone-500 text-[11px]">{req.message}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 4: IDEMPOTENT UPSERT & DEDUPLICATION */}
            {activeWorkbench === "idempotent_merge" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                      Workbench 4 · Fault Tolerance
                    </span>
                    <h2 className="text-2xl font-bold text-stone-900 mt-1">
                      Idempotent Ingestion & Deduplication Studio (MERGE INTO)
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm">
                      Simulate network crashes and repeated event re-delivery. See how blind appending corrupts business revenue while idempotent MERGE guarantees exactly-once logical correctness.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setUseIdempotentMerge(!useIdempotentMerge)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition cursor-pointer ${
                        useIdempotentMerge
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-rose-100 text-rose-800 border-rose-300"
                      }`}
                    >
                      {useIdempotentMerge ? "Idempotent MERGE: ACTIVE" : "Blind Append (Non-Idempotent)"}
                    </button>
                    <button
                      onClick={() => setReplayAttempts(prev => prev + 1)}
                      className="px-4 py-1.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-lg transition shadow-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw size={14} />
                      <span>Replay Ingestion Batch (Simulate Retry)</span>
                    </button>
                  </div>
                </div>

                {/* Integrity Comparison Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200">
                    <span className="text-[11px] font-mono text-orange-700 font-bold uppercase block">Destination Table Rows</span>
                    <span className="text-xl sm:text-2xl font-black text-orange-950 font-mono">
                      {idempotentMetrics.tableRows.toLocaleString()} rows
                    </span>
                    <span className="text-[10px] text-orange-700 block mt-0.5">Duplicates: {idempotentMetrics.duplicateCount}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Calculated Revenue</span>
                    <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">
                      ₹{idempotentMetrics.calculatedRevenue.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">True revenue: ₹500,000</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 col-span-2">
                    <span className="text-[11px] font-mono text-stone-600 font-bold uppercase block">Data Integrity Status</span>
                    <span className="text-xs font-bold text-stone-900 font-mono block mt-1">
                      {idempotentMetrics.integrityStatus}
                    </span>
                  </div>
                </div>

                {/* SQL Merge Syntax */}
                <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs space-y-1">
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Production Idempotent Upsert (Delta / Iceberg)</span>
                  <pre className="text-emerald-300 overflow-x-auto">
{`MERGE INTO target_orders AS target
USING incoming_orders AS source
ON target.order_id = source.order_id
WHEN MATCHED THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *;`}
                  </pre>
                </div>
              </div>
            )}

            {/* WORKBENCH 5: DEAD-LETTER QUEUE (DLQ) MANAGER */}
            {activeWorkbench === "dlq_manager" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
                    Workbench 5 · Error Isolation
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-1">
                    Dead-Letter Queue (DLQ) & Quarantine Inspector
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    Isolate invalid, unparseable, or schema-violating events into quarantine without stopping the pipeline. Inspect errors, fix schemas, and safely replay.
                  </p>
                </div>

                {/* DLQ List */}
                <div className="space-y-3">
                  {dlqItems.length === 0 ? (
                    <div className="p-8 text-center rounded-xl bg-stone-50 border border-stone-200 text-stone-500 font-mono text-xs">
                      All DLQ records resolved and successfully replayed into production.
                    </div>
                  ) : (
                    dlqItems.map((item) => (
                      <div key={item.id} className="p-4 rounded-xl bg-rose-50/50 border border-rose-200 space-y-3 font-mono text-xs">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-rose-200 text-rose-900 font-bold">{item.id}</span>
                            <span className="text-stone-800 font-bold">{item.error_type}</span>
                            <span className="text-stone-500">Source: {item.source}</span>
                          </div>
                          <span className="text-stone-400 text-[10px]">{item.failed_at}</span>
                        </div>
                        <p className="text-rose-900 font-sans text-xs">{item.error_message}</p>
                        <div className="p-2.5 rounded bg-neutral-900 text-neutral-200 text-[11px] overflow-x-auto">
                          <pre>{JSON.stringify(item.payload, null, 2)}</pre>
                        </div>
                        <div className="flex justify-end">
                          <button
                            onClick={() => handleResolveDlq(item.id)}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition shadow-xs cursor-pointer flex items-center gap-1.5 text-xs"
                          >
                            <CheckCircle size={14} />
                            <span>Fix Payload & Replay Event</span>
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* WORKBENCH 6: KAFKA PARTITIONING & 12-QUESTION ASSESSMENT */}
            {activeWorkbench === "kafka_quiz" && (
              <div className="space-y-8">
                {/* Part A: Kafka Partitioning & Backpressure Tuner */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="border-b border-stone-200 pb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                      Part A · Scalability Engine
                    </div>
                    <h2 className="text-2xl font-bold text-stone-900">Kafka Partitioning & Backpressure Tuner</h2>
                    <p className="text-stone-600 text-sm mt-1">
                      Configure producer rates, topic partitions, and consumer workers to observe consumer lag and backpressure.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div>
                      <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                        <span>Producer Throughput</span>
                        <span className="text-orange-600">{producerThroughput.toLocaleString()} evt/sec</span>
                      </div>
                      <input
                        type="range"
                        min={5000}
                        max={50000}
                        step={2500}
                        value={producerThroughput}
                        onChange={(e) => setProducerThroughput(Number(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                        <span>Topic Partitions</span>
                        <span className="text-orange-600">{topicPartitions} partitions</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={12}
                        value={topicPartitions}
                        onChange={(e) => setTopicPartitions(Number(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                        <span>Consumer Workers</span>
                        <span className="text-orange-600">{consumerWorkers} workers</span>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={12}
                        value={consumerWorkers}
                        onChange={(e) => setConsumerWorkers(Number(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Status Banner */}
                  <div className={`p-4 rounded-xl border text-xs sm:text-sm font-mono flex items-center justify-between ${
                    kafkaMetrics.isBackpressure
                      ? "bg-rose-50 border-rose-300 text-rose-950"
                      : "bg-emerald-50 border-emerald-300 text-emerald-950"
                  }`}>
                    <div>
                      <strong className="block font-bold">
                        {kafkaMetrics.isBackpressure ? "BACKPRESSURE DETECTED: Consumer capacity exceeded!" : "Healthy Ingestion Pipeline: Consumer throughput matches producer."}
                      </strong>
                      <span className="text-xs">
                        Capacity: {kafkaMetrics.totalProcessingCapacity.toLocaleString()} evt/sec | Consumer Lag: {kafkaMetrics.consumerLag.toLocaleString()} messages
                      </span>
                    </div>
                    {kafkaMetrics.unassignedWorkers > 0 && (
                      <span className="px-2 py-1 rounded bg-amber-100 text-amber-900 text-[10px] font-bold">
                        {kafkaMetrics.unassignedWorkers} Idle Worker(s) (Constrained by {topicPartitions} partitions)
                      </span>
                    )}
                  </div>
                </div>

                {/* Part B: 12-Question Mastery Assessment */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                        Part B · Mastery Assessment
                      </div>
                      <h2 className="text-2xl font-bold text-stone-900">Module 9 Knowledge Test (12 Questions)</h2>
                      <p className="text-stone-600 text-sm mt-1">
                        Verify your deep understanding of data ingestion, log-based CDC, watermarks, offsets, idempotency, and error handling.
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
