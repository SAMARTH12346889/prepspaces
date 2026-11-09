// projectx/src/Componets/DataEngineeringEtlBatch.jsx
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
  RotateCw,
  Split,
  Merge
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import DataEngineeringEtlBatchSections from "./DataEngineeringEtlBatchSections";

export default function DataEngineeringEtlBatch() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("etl_vs_elt"); 
  // 'etl_vs_elt' | 'watermark_merge' | 'cleansing_dedup' | 'late_data_backfill' | 'airflow_dag' | 'reconciliation_quiz'

  // =========================================================================
  // WORKBENCH 1: ETL vs ELT Architecture Playground & Pipeline Cost Simulator
  // =========================================================================
  const [pipelineMode, setPipelineMode] = useState("elt"); // 'etl' | 'elt'
  const [dataVolumeGb, setDataVolumeGb] = useState(250);
  const [piiFilteringEnabled, setPiiFilteringEnabled] = useState(true);
  const [cloudWarehouse, setCloudWarehouse] = useState("Snowflake"); // 'Snowflake' | 'BigQuery' | 'Databricks'

  const etlVsEltMetrics = useMemo(() => {
    if (pipelineMode === "etl") {
      const transformCost = (dataVolumeGb * 0.18).toFixed(2);
      const stagingCost = (dataVolumeGb * 0.04).toFixed(2);
      const warehouseCost = (dataVolumeGb * 0.08).toFixed(2);
      const latencyMinutes = Math.max(12, Math.round(dataVolumeGb * 0.14));
      return {
        pipelineType: "Traditional ETL (Extract -> Transform -> Load)",
        transformEngine: "External Dedicated Cluster (Apache Spark / Glue)",
        stagingLocation: "Intermediate S3 Bucket & Ephemeral Staging DB",
        rawPreserved: "No (Discarded or Purged to reduce storage)",
        piiSafety: piiFilteringEnabled ? "High (Masked before warehouse ingestion)" : "Low (Unmasked)",
        computeCostTotal: `$${(parseFloat(transformCost) + parseFloat(stagingCost) + parseFloat(warehouseCost)).toFixed(2)}`,
        latencyMinutes: `${latencyMinutes} mins`,
        schemaFlexibility: "Low (Requires re-extracting source for new dimensions)"
      };
    } else {
      const storageCost = (dataVolumeGb * 0.02).toFixed(2);
      const warehouseCompute = (dataVolumeGb * 0.12).toFixed(2);
      const latencyMinutes = Math.max(4, Math.round(dataVolumeGb * 0.04));
      return {
        pipelineType: `Modern ELT (Extract -> Load -> Transform in ${cloudWarehouse})`,
        transformEngine: `${cloudWarehouse} In-Engine SQL / dbt Core`,
        stagingLocation: "Bronze Medallion Landing Layer",
        rawPreserved: "Yes (Full audit fidelity for machine learning & re-processing)",
        piiSafety: piiFilteringEnabled ? "High (Dynamic Column-Level Masking & RBAC)" : "Low (Raw PII Exposed)",
        computeCostTotal: `$${(parseFloat(storageCost) + parseFloat(warehouseCompute)).toFixed(2)}`,
        latencyMinutes: `${latencyMinutes} mins`,
        schemaFlexibility: "High (Re-transform historical raw data without touching operational DB)"
      };
    }
  }, [pipelineMode, dataVolumeGb, piiFilteringEnabled, cloudWarehouse]);

  // =========================================================================
  // WORKBENCH 2: Incremental Batch & Watermark MERGE (Upsert) Studio
  // =========================================================================
  const [currentWatermark, setCurrentWatermark] = useState("2026-11-09 10:00:00");
  const [loadStrategy, setLoadStrategy] = useState("merge"); // 'merge' | 'append'
  const [targetLakehouseOrders, setTargetLakehouseOrders] = useState([
    { order_id: 1001, customer_id: 101, amount: 55000, status: "SUCCESS", updated_at: "2026-11-09 09:30:00" },
    { order_id: 1002, customer_id: 102, amount: 50000, status: "PENDING", updated_at: "2026-11-09 09:45:00" },
    { order_id: 1003, customer_id: 103, amount: 5000, status: "PENDING", updated_at: "2026-11-09 09:55:00" }
  ]);
  const [batchLog, setBatchLog] = useState([]);

  const incomingSourceBatch = [
    { order_id: 1002, customer_id: 102, amount: 50000, status: "SUCCESS", updated_at: "2026-11-09 10:15:00" },
    { order_id: 1004, customer_id: 101, amount: 1500, status: "SUCCESS", updated_at: "2026-11-09 10:20:00" },
    { order_id: 1005, customer_id: 104, amount: 25000, status: "CANCELLED", updated_at: "2026-11-09 10:45:00" }
  ];

  const handleRunBatchExtraction = () => {
    const newLog = [];
    newLog.push(`[${new Date().toLocaleTimeString()}] Executing SQL: SELECT * FROM orders WHERE updated_at >= '${currentWatermark}';`);
    newLog.push(`[${new Date().toLocaleTimeString()}] Extracted ${incomingSourceBatch.length} changed/new rows.`);

    if (loadStrategy === "merge") {
      newLog.push(`[${new Date().toLocaleTimeString()}] Executing MERGE INTO target USING staging ON target.order_id = staging.order_id...`);
      setTargetLakehouseOrders(prev => {
        const updated = [...prev];
        incomingSourceBatch.forEach(inc => {
          const idx = updated.findIndex(o => o.order_id === inc.order_id);
          if (idx >= 0) {
            newLog.push(` -> MATCHED order_id ${inc.order_id}: updated status from ${updated[idx].status} to ${inc.status}`);
            updated[idx] = { ...inc };
          } else {
            newLog.push(` -> NOT MATCHED order_id ${inc.order_id}: inserted new row amount ₹${inc.amount}`);
            updated.push(inc);
          }
        });
        return updated;
      });
    } else {
      newLog.push(`[${new Date().toLocaleTimeString()}] Executing blind INSERT INTO target (Append-Only mode)...`);
      newLog.push(`[WARNING] Order 1002 already exists! Appending will generate duplicate order_id records.`);
      setTargetLakehouseOrders(prev => [...prev, ...incomingSourceBatch]);
    }

    const latestTimestamp = "2026-11-09 10:45:00";
    setCurrentWatermark(latestTimestamp);
    newLog.push(`[${new Date().toLocaleTimeString()}] Watermark updated to: ${latestTimestamp}`);
    setBatchLog(newLog);
  };

  const handleResetBatchState = () => {
    setCurrentWatermark("2026-11-09 10:00:00");
    setTargetLakehouseOrders([
      { order_id: 1001, customer_id: 101, amount: 55000, status: "SUCCESS", updated_at: "2026-11-09 09:30:00" },
      { order_id: 1002, customer_id: 102, amount: 50000, status: "PENDING", updated_at: "2026-11-09 09:45:00" },
      { order_id: 1003, customer_id: 103, amount: 5000, status: "PENDING", updated_at: "2026-11-09 09:55:00" }
    ]);
    setBatchLog([]);
  };

  // =========================================================================
  // WORKBENCH 3: Data Cleansing, Normalization & Deduplication Studio
  // =========================================================================
  const rawCustomerDirty = [
    { customer_id: 101, name: "  rahul sharma  ", email: "rahul@gmail.com", age: "23", city: "pune", updated_at: "2026-11-09 08:00:00" },
    { customer_id: 102, name: "Amit Verma", email: "amit@gmail.com", age: "NULL", city: "Mumbai", updated_at: "2026-11-09 08:30:00" },
    { customer_id: 101, name: "RAHUL SHARMA", email: "rahul@gmail.com", age: "24", city: "PUNE", updated_at: "2026-11-09 09:15:00" }, // duplicate key, newer
    { customer_id: 104, name: "Priya Singh", email: "invalid-email-address", age: "-5", city: "Delhi", updated_at: "2026-11-09 09:30:00" }, // corrupted
    { customer_id: 105, name: "Samarth Gupta", email: "samarth@example.com", age: "28", city: "Bengaluru", updated_at: "2026-11-09 09:40:00" }
  ];

  const [cleansingStep, setCleansingStep] = useState("raw"); // 'raw' | 'standardized' | 'deduped' | 'quarantined'

  const cleansedDataset = useMemo(() => {
    if (cleansingStep === "raw") return rawCustomerDirty;

    if (cleansingStep === "standardized") {
      return rawCustomerDirty.map(r => ({
        ...r,
        name: r.name.trim().toUpperCase(),
        city: r.city.trim().toUpperCase(),
        email: r.email.trim().toLowerCase(),
        age: r.age === "NULL" ? null : parseInt(r.age, 10)
      }));
    }

    if (cleansingStep === "deduped") {
      // Standardize first, then deduplicate by customer_id keeping newest updated_at
      const map = new Map();
      rawCustomerDirty.forEach(r => {
        const std = {
          ...r,
          name: r.name.trim().toUpperCase(),
          city: r.city.trim().toUpperCase(),
          email: r.email.trim().toLowerCase(),
          age: r.age === "NULL" ? null : parseInt(r.age, 10)
        };
        if (!map.has(std.customer_id) || new Date(std.updated_at) > new Date(map.get(std.customer_id).updated_at)) {
          map.set(std.customer_id, std);
        }
      });
      return Array.from(map.values());
    }

    if (cleansingStep === "quarantined") {
      // Keep only valid records: email has '@' and age >= 0
      const map = new Map();
      rawCustomerDirty.forEach(r => {
        const std = {
          ...r,
          name: r.name.trim().toUpperCase(),
          city: r.city.trim().toUpperCase(),
          email: r.email.trim().toLowerCase(),
          age: r.age === "NULL" ? null : parseInt(r.age, 10)
        };
        const isValid = std.email.includes("@") && (std.age === null || std.age > 0);
        if (isValid) {
          if (!map.has(std.customer_id) || new Date(std.updated_at) > new Date(map.get(std.customer_id).updated_at)) {
            map.set(std.customer_id, std);
          }
        }
      });
      return Array.from(map.values());
    }

    return rawCustomerDirty;
  }, [cleansingStep]);

  // =========================================================================
  // WORKBENCH 4: Late-Arriving Data & Historical Partition Backfill Simulator
  // =========================================================================
  const [dailyPartitions, setDailyPartitions] = useState({
    "2026-11-07": { revenue: 50000, orders: 10, status: "Finalized" },
    "2026-11-08": { revenue: 65000, orders: 14, status: "Finalized" },
    "2026-11-09": { revenue: 42000, orders: 8, status: "Processing" }
  });
  const [lateOrderHandled, setLateOrderHandled] = useState(false);
  const [backfillStrategy, setBackfillStrategy] = useState("partition_overwrite"); // 'naive_processing_time' | 'partition_overwrite'

  const handleInjectLateOrder = () => {
    // Late order: Created on Nov 7 for ₹10,000, received on Nov 9
    if (backfillStrategy === "naive_processing_time") {
      setDailyPartitions(prev => ({
        ...prev,
        "2026-11-09": {
          ...prev["2026-11-09"],
          revenue: prev["2026-11-09"].revenue + 10000,
          orders: prev["2026-11-09"].orders + 1,
          status: "CORRUPTED (Nov 7 revenue wrongly attributed to Nov 9)"
        }
      }));
    } else {
      setDailyPartitions(prev => ({
        ...prev,
        "2026-11-07": {
          revenue: prev["2026-11-07"].revenue + 10000,
          orders: prev["2026-11-07"].orders + 1,
          status: "Backfilled & Overwritten Correctly"
        }
      }));
    }
    setLateOrderHandled(true);
  };

  const handleResetBackfill = () => {
    setDailyPartitions({
      "2026-11-07": { revenue: 50000, orders: 10, status: "Finalized" },
      "2026-11-08": { revenue: 65000, orders: 14, status: "Finalized" },
      "2026-11-09": { revenue: 42000, orders: 8, status: "Processing" }
    });
    setLateOrderHandled(false);
  };

  // =========================================================================
  // WORKBENCH 5: Apache Airflow DAG Orchestration & Dependency Graph Simulator
  // =========================================================================
  const [dagTasks, setDagTasks] = useState([
    { id: "extract_customers", label: "Extract Customers", tier: 1, status: "success", retries: 0 },
    { id: "extract_products", label: "Extract Products", tier: 1, status: "success", retries: 0 },
    { id: "extract_orders", label: "Extract Orders", tier: 1, status: "running", retries: 0 },
    { id: "extract_payments", label: "Extract Payments", tier: 1, status: "success", retries: 0 },
    { id: "validate_inputs", label: "Validate Schema & Counts", tier: 2, status: "queued", retries: 0 },
    { id: "clean_data", label: "PySpark Silver Cleansing", tier: 3, status: "queued", retries: 0 },
    { id: "enrich_orders", label: "Enrich Multi-Table Grain", tier: 4, status: "queued", retries: 0 },
    { id: "build_gold_tables", label: "Build Gold Aggregates", tier: 5, status: "queued", retries: 0 },
    { id: "reconciliation", label: "Data Reconciliation & Checksum", tier: 6, status: "queued", retries: 0 },
    { id: "publish_bi", label: "Publish BI & Data Marts", tier: 7, status: "queued", retries: 0 }
  ]);
  const [dagSimulating, setDagSimulating] = useState(false);

  const handleRunDagStep = () => {
    setDagTasks(prev => {
      const next = prev.map(t => ({ ...t }));
      const runningIdx = next.findIndex(t => t.status === "running");
      if (runningIdx >= 0) {
        next[runningIdx].status = "success";
        // Next tier tasks queued become running if dependencies met
        const nextTier = next[runningIdx].tier + 1;
        const nextTasks = next.filter(t => t.tier === nextTier);
        nextTasks.forEach(t => {
          t.status = "running";
        });
      }
      return next;
    });
  };

  const handleFailActiveTask = () => {
    setDagTasks(prev => {
      const next = prev.map(t => ({ ...t }));
      const runningIdx = next.findIndex(t => t.status === "running");
      if (runningIdx >= 0) {
        next[runningIdx].status = "failed";
        next[runningIdx].retries += 1;
      }
      return next;
    });
  };

  const handleResetDag = () => {
    setDagTasks([
      { id: "extract_customers", label: "Extract Customers", tier: 1, status: "success", retries: 0 },
      { id: "extract_products", label: "Extract Products", tier: 1, status: "success", retries: 0 },
      { id: "extract_orders", label: "Extract Orders", tier: 1, status: "running", retries: 0 },
      { id: "extract_payments", label: "Extract Payments", tier: 1, status: "success", retries: 0 },
      { id: "validate_inputs", label: "Validate Schema & Counts", tier: 2, status: "queued", retries: 0 },
      { id: "clean_data", label: "PySpark Silver Cleansing", tier: 3, status: "queued", retries: 0 },
      { id: "enrich_orders", label: "Enrich Multi-Table Grain", tier: 4, status: "queued", retries: 0 },
      { id: "build_gold_tables", label: "Build Gold Aggregates", tier: 5, status: "queued", retries: 0 },
      { id: "reconciliation", label: "Data Reconciliation & Checksum", tier: 6, status: "queued", retries: 0 },
      { id: "publish_bi", label: "Publish BI & Data Marts", tier: 7, status: "queued", retries: 0 }
    ]);
  };

  // =========================================================================
  // WORKBENCH 6: Data Reconciliation, Hash Checksums & 15-Question Quiz
  // =========================================================================
  const reconciliationAudit = [
    { check: "Record Count Comparison", source: "100,000", destination: "100,000", match: true },
    { check: "Total Financial Revenue", source: "₹50,00,000.00", destination: "₹50,00,000.00", match: true },
    { check: "Null Primary Keys", source: "0", destination: "0", match: true },
    { check: "Duplicate Business Keys", source: "0", destination: "0", match: true },
    { check: "Cryptographic Row Hash (MD5)", source: "9a7f3b8901ce...", destination: "9a7f3b8901ce...", match: true }
  ];

  // 15 Module Assessment Questions
  const quizQuestions = [
    {
      id: 1,
      q: "1. What does ETL stand for?",
      options: ["Extract, Transform, Load", "Evaluate, Transfer, Link", "Extract, Test, Launch", "Execute, Transform, Log"],
      correct: 0,
      expl: "ETL stands for Extract, Transform, Load — extracting data from sources, transforming it into required structures, and loading it into analytical destinations."
    },
    {
      id: 2,
      q: "2. What is the main difference between ETL and ELT?",
      options: ["ETL uses only SQL", "ELT does not extract data", "The order and location of transformation", "ELT cannot use cloud storage"],
      correct: 2,
      expl: "In ETL, transformations occur externally before loading into storage. In ELT, raw data is loaded first and transformed directly inside the scalable analytical warehouse."
    },
    {
      id: 3,
      q: "3. Which loading method updates an existing record or inserts it when missing?",
      options: ["Full refresh", "Append", "Upsert / MERGE", "File discovery"],
      correct: 2,
      expl: "Upsert (MERGE INTO) updates the record when an existing primary key matches and inserts a new row when absent."
    },
    {
      id: 4,
      q: "4. What is data cleansing?",
      options: ["Increasing file sizes", "Identifying and handling invalid, incomplete or duplicated data", "Creating Kafka topics", "Adding more database servers"],
      correct: 1,
      expl: "Data cleansing identifies, remedies, or quarantines invalid, corrupted, duplicate, or missing data records."
    },
    {
      id: 5,
      q: "5. What does HAVING do in SQL?",
      options: ["Filters individual rows before grouping", "Filters groups after aggregation", "Creates database indexes", "Deletes duplicate files"],
      correct: 1,
      expl: "WHERE filters rows before aggregation; HAVING filters aggregated groups after the GROUP BY execution."
    },
    {
      id: 6,
      q: "6. What is the purpose of a LEFT JOIN?",
      options: ["Return only matching rows", "Return all rows from the left table and matching right-side rows", "Delete unmatched rows from both tables", "Create every possible combination"],
      correct: 1,
      expl: "A LEFT JOIN preserves every row from the left table while filling missing matches on the right side with NULL."
    },
    {
      id: 7,
      q: "7. What is incremental batch processing?",
      options: ["Processing the entire database every time", "Processing new or changed data in scheduled batches", "Processing only images", "Deleting historical records"],
      correct: 1,
      expl: "Incremental processing processes only new or modified delta rows between batch watermarks instead of reprocessing entire datasets."
    },
    {
      id: 8,
      q: "8. What is partition-based processing?",
      options: ["Dividing a dataset into logical subsets for processing", "Combining different databases into one table", "Removing every index", "Disabling distributed processing"],
      correct: 0,
      expl: "Partition-based processing slices datasets into logical segments (e.g. by date, region) to allow parallel computation and partition pruning."
    },
    {
      id: 9,
      q: "9. What is late-arriving data?",
      options: ["Data that is deleted before loading", "Data received after its relevant event or processing period", "Data with too many columns", "Data that cannot be encrypted"],
      correct: 1,
      expl: "Late-arriving data refers to records whose business event timestamp predates the current processing window (e.g. delayed network transmission)."
    },
    {
      id: 10,
      q: "10. What makes a pipeline idempotent?",
      options: ["Every retry adds new rows", "Repeated processing produces the same intended final state", "The pipeline never retries", "The pipeline processes only one record"],
      correct: 1,
      expl: "An idempotent pipeline guarantees that executing the exact same batch multiple times leaves the target storage in the same deterministic state."
    },
    {
      id: 11,
      q: "11. What is backfilling?",
      options: ["Processing historical data again", "Deleting current partitions", "Changing a source database password", "Stopping an Airflow scheduler"],
      correct: 0,
      expl: "Backfilling is the execution of a pipeline over historical time intervals to reconstruct or recalculate prior business data."
    },
    {
      id: 12,
      q: "12. What is data reconciliation?",
      options: ["Comparing source and destination data for correctness", "Creating new API endpoints", "Compressing Parquet files", "Changing the database schema"],
      correct: 0,
      expl: "Data reconciliation verifies that target datasets accurately reflect source transactions via record counts, financial totals, and hash audits."
    },
    {
      id: 13,
      q: "13. Why use an Airflow DAG?",
      options: ["For data compression", "For defining task dependencies and workflow execution", "For storing binary database logs", "For replacing SQL"],
      correct: 1,
      expl: "An Airflow Directed Acyclic Graph defines task dependencies, execution ordering, retry policies, and scheduling schedules without cycles."
    },
    {
      id: 14,
      q: "14. What is a Spark shuffle?",
      options: ["A backup of the driver", "Redistribution of data between partitions during certain operations", "A method of deleting records", "An API retry mechanism"],
      correct: 1,
      expl: "A Spark shuffle is the physical redistribution of partition data across worker nodes over the cluster network during wide transformations."
    },
    {
      id: 15,
      q: "15. What is the purpose of a staging area?",
      options: ["To store production passwords", "To temporarily hold extracted data before transformation or loading", "To replace the source database", "To execute only machine learning models"],
      correct: 1,
      expl: "A staging area temporarily stores raw extracted data before transformation or final loading, isolating upstream sources from analytical queries."
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    setQuizAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [quizAnswers]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 pb-20 selection:bg-orange-500 selection:text-white">
      {/* Universal Module Navigation */}
      <ModuleNav currentCourseId="data-engineering" currentModuleId="etl-batch" />

      {/* Hero Header */}
      <div className="border-b border-[#e7e3da] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <button
                onClick={goBack}
                className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors mb-2"
              >
                <ArrowLeft size={14} />
                <span>Back to Course Catalog</span>
              </button>
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
                  Module 10
                </span>
                <span className="text-xs font-mono text-stone-500">Pipeline Engineering</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                ETL, ELT and Batch Data Processing
              </h1>
              <p className="text-stone-600 max-w-3xl text-sm sm:text-base leading-relaxed">
                Design and execute production data pipelines: ETL vs. ELT architectures, SQL/API/CDC extraction,
                data cleansing, deduplication with window functions, idempotent upserts via <code className="text-orange-600 font-mono">MERGE INTO</code>,
                watermarking, partition pruning, late-arriving data backfills, hash reconciliation, Apache Airflow DAG orchestration,
                and scalable Apache Spark distributed processing.
              </p>
            </div>

            {/* Quick Action / Mode Switcher */}
            <div className="flex items-center gap-2 p-1 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === "curriculum"
                    ? "bg-white text-stone-900 shadow-sm"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <BookOpen size={14} className={activeTab === "curriculum" ? "text-orange-600" : ""} />
                <span>Specification & Blueprints</span>
              </button>
              <button
                onClick={() => setActiveTab("workbench")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === "workbench"
                    ? "bg-white text-orange-600 shadow-sm"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Sparkles size={14} />
                <span>Interactive Workbenches (6)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {activeTab === "curriculum" ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Column: Comprehensive Textbook Sections */}
            <div className="lg:col-span-3">
              <DataEngineeringEtlBatchSections />
            </div>

            {/* Right Column: Sticky Table of Contents */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-20 bg-white rounded-2xl border border-[#e7e3da] p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-stone-500 pb-2 border-b border-[#e7e3da]">
                  <Table size={14} className="text-orange-500" />
                  <span>Module Syllabus</span>
                </div>
                <div className="text-xs space-y-1.5 max-h-[75vh] overflow-y-auto pr-1">
                  {[
                    { id: "overview", label: "Module 10 Overview" },
                    { id: "section-1", label: "1. Introduction to ETL Architecture" },
                    { id: "section-2", label: "2. Introduction to ELT Architecture" },
                    { id: "section-3", label: "3. ETL vs ELT Design Decisions" },
                    { id: "section-4", label: "4. Data Extraction Techniques" },
                    { id: "section-5", label: "5. Data Transformation Strategies" },
                    { id: "section-6", label: "6. Data Loading Strategies" },
                    { id: "section-7", label: "7. Data Cleansing & Standardization" },
                    { id: "section-8", label: "8. Filtering and Aggregation" },
                    { id: "section-9", label: "9. Joins and Data Enrichment" },
                    { id: "section-10", label: "10. Incremental Batch Processing" },
                    { id: "section-11", label: "11. Partition-Based Processing" },
                    { id: "section-12", label: "12. Handling Late-Arriving Data" },
                    { id: "section-13", label: "13. Data Deduplication" },
                    { id: "section-14", label: "14. Idempotent Pipeline Design" },
                    { id: "section-15", label: "15. Retry & Recovery Mechanisms" },
                    { id: "section-16", label: "16. Backfilling Historical Data" },
                    { id: "section-17", label: "17. Data Reconciliation" },
                    { id: "section-18", label: "18. Pipeline Dependency Management" },
                    { id: "section-19", label: "19. Large-Scale Batch Architecture" },
                    { id: "section-20", label: "20. Building End-to-End ETL" },
                    { id: "section-21", label: "21. Practical Major E-commerce Project" },
                    { id: "section-22", label: "22. Important Industry ETL Tools" },
                    { id: "section-23", label: "23. Common Industry Mistakes" },
                    { id: "section-24", label: "24. Module Assessment (15 Qs)" },
                    { id: "section-25", label: "25. Recommended Resources" },
                    { id: "section-26", label: "26. Final Understanding & Synthesis" }
                  ].map(sec => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block py-1 px-2 rounded-lg text-stone-600 hover:text-orange-600 hover:bg-orange-50 font-medium transition-colors truncate"
                    >
                      {sec.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* WORKBENCH MODE */
          <div className="space-y-8">
            {/* Workbench Navigation Pills */}
            <div className="flex flex-wrap items-center gap-2 border-b border-[#e7e3da] pb-4">
              {[
                { id: "etl_vs_elt", label: "1. ETL vs ELT Architecture Playground", icon: Split },
                { id: "watermark_merge", label: "2. Watermark & MERGE Upsert Studio", icon: Merge },
                { id: "cleansing_dedup", label: "3. Cleansing & Deduplication Lab", icon: Filter },
                { id: "late_data_backfill", label: "4. Late Data & Partition Backfill", icon: Clock },
                { id: "airflow_dag", label: "5. Apache Airflow DAG Graph Simulator", icon: Workflow },
                { id: "reconciliation_quiz", label: "6. Data Reconciliation & 15-Q Quiz", icon: ShieldCheck }
              ].map(wb => {
                const Icon = wb.icon;
                const isActive = activeWorkbench === wb.id;
                return (
                  <button
                    key={wb.id}
                    onClick={() => setActiveWorkbench(wb.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isActive
                        ? "bg-orange-500 text-white shadow-sm"
                        : "bg-white text-stone-600 border border-[#e7e3da] hover:text-stone-900 hover:border-stone-400"
                    }`}
                  >
                    <Icon size={14} />
                    <span>{wb.label}</span>
                  </button>
                );
              })}
            </div>

            {/* WORKBENCH 1: ETL VS ELT */}
            {activeWorkbench === "etl_vs_elt" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">
                      ETL vs ELT Architecture Playground & Pipeline Cost Simulator
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 mt-1">
                      Simulate the computational, latency, security, and raw data preservation trade-offs between ETL and ELT.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPipelineMode("etl")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        pipelineMode === "etl" ? "bg-orange-500 text-white" : "bg-stone-100 text-stone-700"
                      }`}
                    >
                      Traditional ETL
                    </button>
                    <button
                      onClick={() => setPipelineMode("elt")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        pipelineMode === "elt" ? "bg-orange-500 text-white" : "bg-stone-100 text-stone-700"
                      }`}
                    >
                      Modern Cloud ELT
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Daily Data Volume</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="50"
                        max="2000"
                        step="50"
                        value={dataVolumeGb}
                        onChange={e => setDataVolumeGb(parseInt(e.target.value, 10))}
                        className="w-full accent-orange-500"
                      />
                      <span className="text-xs font-mono font-bold text-stone-800">{dataVolumeGb} GB</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Cloud Analytical Target</label>
                    <select
                      value={cloudWarehouse}
                      onChange={e => setCloudWarehouse(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-lg p-2 text-xs font-medium"
                    >
                      <option value="Snowflake">Snowflake Data Cloud</option>
                      <option value="BigQuery">Google BigQuery (Serverless)</option>
                      <option value="Databricks">Databricks Delta Lakehouse</option>
                      <option value="Redshift">Amazon Redshift RA3</option>
                    </select>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-stone-800">Sensitive PII Pre-Masking</div>
                      <div className="text-xs text-stone-500">Remove patient/financial fields before loading</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={piiFilteringEnabled}
                      onChange={e => setPiiFilteringEnabled(e.target.checked)}
                      className="w-4 h-4 accent-orange-500 rounded"
                    />
                  </div>
                </div>

                {/* Architecture Flow Diagram */}
                <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 font-mono text-xs overflow-x-auto">
                  <div className="text-orange-400 font-bold mb-2">Architectural Data Flow Pipeline:</div>
                  {pipelineMode === "etl" ? (
                    <div>
                      [Source Systems: MySQL / APIs / CSV] &rarr; (1. Extract Engine) &rarr; [Staging Area] &rarr; (2. Dedicated Spark Transform Node) &rarr; (3. Load Clean Data) &rarr; [Final Data Warehouse]
                    </div>
                  ) : (
                    <div>
                      [Source Systems: MySQL / APIs / CSV] &rarr; (1. Extract) &rarr; (2. Load Raw Directly) &rarr; [Bronze Lakehouse / {cloudWarehouse} Raw Tables] &rarr; (3. SQL/dbt Transform In-Warehouse) &rarr; [Gold Marts]
                    </div>
                  )}
                </div>

                {/* Metrics Table */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 block">Est. Daily Compute Cost</span>
                    <span className="text-lg font-bold text-stone-900">{etlVsEltMetrics.computeCostTotal}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 block">End-to-End Latency</span>
                    <span className="text-lg font-bold text-orange-600">{etlVsEltMetrics.latencyMinutes}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 block">Raw Data Retained?</span>
                    <span className="text-xs font-bold text-stone-800">{etlVsEltMetrics.rawPreserved}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 block">PII & Governance</span>
                    <span className="text-xs font-bold text-green-700">{etlVsEltMetrics.piiSafety}</span>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 2: WATERMARK & MERGE UPSERT */}
            {activeWorkbench === "watermark_merge" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">
                      Incremental Watermark & Delta Lake MERGE (Upsert) Studio
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 mt-1">
                      Compare idempotent SQL <code className="text-orange-600 font-mono">MERGE INTO</code> versus naive append operations during scheduled batch cycles.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleResetBatchState}
                      className="px-3 py-1.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold flex items-center gap-1"
                    >
                      <RotateCcw size={13} /> Reset
                    </button>
                    <button
                      onClick={handleRunBatchExtraction}
                      className="px-4 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      <Play size={13} /> Run Next Batch Extraction
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 block">Active Watermark (High-Water Mark)</span>
                    <span className="font-mono text-sm font-bold text-stone-800">{currentWatermark}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 block">Loading Strategy</span>
                    <select
                      value={loadStrategy}
                      onChange={e => setLoadStrategy(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-lg p-1.5 text-xs font-semibold mt-1"
                    >
                      <option value="merge">Idempotent Upsert (MERGE INTO)</option>
                      <option value="append">Naive Append (INSERT INTO)</option>
                    </select>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 block">Destination Lakehouse Records</span>
                    <span className="font-mono text-sm font-bold text-orange-600">{targetLakehouseOrders.length} rows</span>
                  </div>
                </div>

                {/* Target Lakehouse Table */}
                <div className="overflow-x-auto rounded-xl border border-[#e7e3da]">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                      <tr>
                        <th className="px-4 py-2.5">Order ID</th>
                        <th className="px-4 py-2.5">Customer ID</th>
                        <th className="px-4 py-2.5">Amount</th>
                        <th className="px-4 py-2.5">Status</th>
                        <th className="px-4 py-2.5">Updated At</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e7e3da]">
                      {targetLakehouseOrders.map((o, idx) => (
                        <tr key={idx} className={o.status === "CANCELLED" ? "bg-red-50/50" : "bg-white"}>
                          <td className="px-4 py-2 font-mono font-bold text-stone-900">{o.order_id}</td>
                          <td className="px-4 py-2 font-mono text-stone-600">{o.customer_id}</td>
                          <td className="px-4 py-2 font-mono font-bold text-stone-800">₹{o.amount.toLocaleString()}</td>
                          <td className="px-4 py-2">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              o.status === "SUCCESS" ? "bg-green-100 text-green-800" :
                              o.status === "PENDING" ? "bg-yellow-100 text-yellow-800" :
                              "bg-red-100 text-red-800"
                            }`}>
                              {o.status}
                            </span>
                          </td>
                          <td className="px-4 py-2 font-mono text-xs text-stone-500">{o.updated_at}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Batch Execution Console */}
                {batchLog.length > 0 && (
                  <div className="p-4 rounded-xl bg-stone-900 text-stone-200 font-mono text-xs space-y-1">
                    <div className="text-orange-400 font-bold mb-1">Batch Execution Log:</div>
                    {batchLog.map((log, i) => (
                      <div key={i} className={log.includes("WARNING") ? "text-red-400" : "text-stone-300"}>
                        {log}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* WORKBENCH 3: CLEANSING & DEDUPLICATION */}
            {activeWorkbench === "cleansing_dedup" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">
                      Data Cleansing, Normalization & Deduplication Studio
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 mt-1">
                      Execute string standardization, type validation via <code className="text-orange-600 font-mono">TRY_CAST</code>, and window deduplication via <code className="text-orange-600 font-mono">ROW_NUMBER()</code>.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {[
                      { id: "raw", label: "1. Raw Dirty Ingest" },
                      { id: "standardized", label: "2. Standardize & Cast" },
                      { id: "deduped", label: "3. ROW_NUMBER() Dedup" },
                      { id: "quarantined", label: "4. Quarantine Corrupt" }
                    ].map(st => (
                      <button
                        key={st.id}
                        onClick={() => setCleansingStep(st.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          cleansingStep === st.id ? "bg-orange-500 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-[#e7e3da]">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                      <tr>
                        <th className="px-4 py-2.5">Customer ID</th>
                        <th className="px-4 py-2.5">Customer Name</th>
                        <th className="px-4 py-2.5">Email</th>
                        <th className="px-4 py-2.5">Age</th>
                        <th className="px-4 py-2.5">City</th>
                        <th className="px-4 py-2.5">Timestamp</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e7e3da]">
                      {cleansedDataset.map((c, i) => (
                        <tr key={i} className={c.age === "-5" || c.email === "invalid-email-address" ? "bg-red-50" : "bg-white"}>
                          <td className="px-4 py-2 font-mono font-bold text-stone-900">{c.customer_id}</td>
                          <td className="px-4 py-2 font-medium text-stone-800 font-mono">"{c.name}"</td>
                          <td className="px-4 py-2 font-mono text-stone-600">{c.email}</td>
                          <td className="px-4 py-2 font-mono">{c.age === null ? <span className="text-stone-400">NULL</span> : c.age}</td>
                          <td className="px-4 py-2 text-stone-700">{c.city}</td>
                          <td className="px-4 py-2 font-mono text-xs text-stone-400">{c.updated_at}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-1">
                  <span className="font-bold text-stone-900 block">Applied Transformation Logic:</span>
                  {cleansingStep === "raw" && <div>Untouched landing ingestion: Contains whitespace padding, mixed case, invalid emails, negative ages, and duplicate rows.</div>}
                  {cleansingStep === "standardized" && <div>Applied <code className="font-mono text-orange-600">UPPER(TRIM(name))</code>, <code className="font-mono text-orange-600">LOWER(TRIM(email))</code>, and <code className="font-mono text-orange-600">TRY_CAST(age AS INT)</code>.</div>}
                  {cleansingStep === "deduped" && <div>Applied window ranking: <code className="font-mono text-orange-600">ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY updated_at DESC) = 1</code>. Retained Customer 101's latest record.</div>}
                  {cleansingStep === "quarantined" && <div>Applied quality assertion: Removed Customer 104 with invalid email format and negative age into Dead-Letter Quarantine.</div>}
                </div>
              </div>
            )}

            {/* WORKBENCH 4: LATE DATA & BACKFILL */}
            {activeWorkbench === "late_data_backfill" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">
                      Late-Arriving Data & Partition Backfill Simulator
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 mt-1">
                      Observe what happens when an event timestamped on Nov 7 arrives on Nov 9 due to a network delay.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleResetBackfill}
                      className="px-3 py-1.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold flex items-center gap-1"
                    >
                      <RotateCcw size={13} /> Reset
                    </button>
                    <button
                      disabled={lateOrderHandled}
                      onClick={handleInjectLateOrder}
                      className="px-4 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      <Zap size={13} /> Inject Late Order (₹10,000 from Nov 7)
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-2">Backfill Strategy Selection</label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                      <input
                        type="radio"
                        name="backfill"
                        checked={backfillStrategy === "partition_overwrite"}
                        onChange={() => setBackfillStrategy("partition_overwrite")}
                        className="accent-orange-500"
                      />
                      <span>Event-Time Partition Overwrite (Replace only date=2026-11-07)</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                      <input
                        type="radio"
                        name="backfill"
                        checked={backfillStrategy === "naive_processing_time"}
                        onChange={() => setBackfillStrategy("naive_processing_time")}
                        className="accent-orange-500"
                      />
                      <span>Naive Processing Time (Blindly add to today's date=2026-11-09)</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(dailyPartitions).map(([date, data]) => (
                    <div key={date} className="p-5 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-bold text-stone-800">Partition: {date}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          data.status.includes("CORRUPTED") ? "bg-red-100 text-red-800" :
                          data.status.includes("Backfilled") ? "bg-green-100 text-green-800" :
                          "bg-stone-200 text-stone-700"
                        }`}>
                          {data.status}
                        </span>
                      </div>
                      <div className="text-2xl font-black text-stone-900">₹{data.revenue.toLocaleString()}</div>
                      <div className="text-xs text-stone-500 font-medium">{data.orders} Completed Orders</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WORKBENCH 5: AIRFLOW DAG */}
            {activeWorkbench === "airflow_dag" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">
                      Apache Airflow DAG Graph & Dependency Simulator
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 mt-1">
                      Simulate DAG execution stages, parallel extraction fan-outs, upstream barrier synchronization, and retry backoff.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleResetDag}
                      className="px-3 py-1.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold flex items-center gap-1"
                    >
                      <RotateCcw size={13} /> Reset DAG
                    </button>
                    <button
                      onClick={handleFailActiveTask}
                      className="px-3 py-1.5 rounded-lg bg-red-100 hover:bg-red-200 text-red-800 text-xs font-bold flex items-center gap-1"
                    >
                      <AlertTriangle size={13} /> Simulate Task Failure
                    </button>
                    <button
                      onClick={handleRunDagStep}
                      className="px-4 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      <Play size={13} /> Step Forward
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {dagTasks.map(task => (
                    <div
                      key={task.id}
                      className={`p-3.5 rounded-xl border transition-all space-y-1.5 ${
                        task.status === "success" ? "bg-green-50/60 border-green-200" :
                        task.status === "running" ? "bg-blue-50/80 border-blue-300 ring-2 ring-blue-400/20" :
                        task.status === "failed" ? "bg-red-50/80 border-red-300" :
                        "bg-stone-50 border-stone-200 opacity-60"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-bold uppercase">
                        <span className="text-stone-500">Tier {task.tier}</span>
                        <span className={
                          task.status === "success" ? "text-green-700" :
                          task.status === "running" ? "text-blue-700" :
                          task.status === "failed" ? "text-red-700" :
                          "text-stone-400"
                        }>
                          {task.status}
                        </span>
                      </div>
                      <div className="font-bold text-xs text-stone-900 truncate">{task.label}</div>
                      {task.retries > 0 && (
                        <div className="text-[10px] text-red-600 font-mono">Retries: {task.retries}/3</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WORKBENCH 6: DATA RECONCILIATION & 15-QUESTION QUIZ */}
            {activeWorkbench === "reconciliation_quiz" && (
              <div className="space-y-8">
                {/* Reconciliation Audit Card */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
                  <div className="border-b border-[#e7e3da] pb-3">
                    <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                      <ShieldCheck size={20} className="text-orange-500" />
                      <span>Data Reconciliation & Financial Hash Checksum Audit</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 mt-1">
                      Automated comparison matrix verifying zero loss between source operational systems and target analytical lakehouses.
                    </p>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-[#e7e3da]">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                        <tr>
                          <th className="px-4 py-2.5">Verification Rule</th>
                          <th className="px-4 py-2.5">Source Value</th>
                          <th className="px-4 py-2.5">Destination Value</th>
                          <th className="px-4 py-2.5">Audit Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#e7e3da]">
                        {reconciliationAudit.map((r, i) => (
                          <tr key={i} className="bg-white">
                            <td className="px-4 py-2 font-medium text-stone-800">{r.check}</td>
                            <td className="px-4 py-2 font-mono text-stone-700">{r.source}</td>
                            <td className="px-4 py-2 font-mono text-stone-700">{r.destination}</td>
                            <td className="px-4 py-2">
                              <span className="inline-flex items-center gap-1 text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                                <CheckCircle size={12} /> Passed
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 15-Question Curriculum Assessment */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-stone-900">
                        Module 10 Assessment — Test Your Understanding
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500 mt-1">
                        15 comprehensive questions covering ETL/ELT architectures, loading strategies, joins, partitioning, watermarking, deduplication, and Airflow orchestration.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-orange-100 text-orange-800">
                        Score: {quizScore} / {quizQuestions.length}
                      </span>
                      <button
                        onClick={() => setShowQuizResults(true)}
                        className="px-4 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow-sm"
                      >
                        Submit Assessment
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {quizQuestions.map(q => {
                      const userChoice = quizAnswers[q.id];
                      return (
                        <div key={q.id} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3">
                          <div className="font-bold text-stone-900 text-sm sm:text-base">{q.q}</div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = userChoice === optIdx;
                              let btnClass = "border-stone-200 bg-white text-stone-700 hover:border-orange-300";
                              if (isSelected) {
                                btnClass = "border-orange-500 bg-orange-50 text-orange-900 font-bold";
                              }
                              if (showQuizResults) {
                                if (optIdx === q.correct) {
                                  btnClass = "border-green-500 bg-green-50 text-green-900 font-bold";
                                } else if (isSelected && optIdx !== q.correct) {
                                  btnClass = "border-red-500 bg-red-50 text-red-900 line-through";
                                }
                              }
                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectAnswer(q.id, optIdx)}
                                  className={`text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-2 ${btnClass}`}
                                >
                                  <span className="w-4 h-4 rounded-full border border-stone-300 flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                                    {String.fromCharCode(65 + optIdx)}
                                  </span>
                                  <span>{opt}</span>
                                </button>
                              );
                            })}
                          </div>
                          {showQuizResults && (
                            <div className="mt-2 p-2.5 rounded-lg bg-white border border-stone-200 text-xs text-stone-600">
                              <span className="font-bold text-stone-800">Explanation: </span>
                              {q.expl}
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
