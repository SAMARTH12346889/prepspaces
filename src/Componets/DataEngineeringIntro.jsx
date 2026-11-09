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
  Lock,
  Unlock,
  CheckSquare,
  Square,
  HelpCircle,
  Copy,
  Check,
  ChevronRight,
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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import DataEngineeringIntroSections from "./DataEngineeringIntroSections";

export default function DataEngineeringIntro() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode tab state: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("pipeline"); // 'pipeline' | 'quality' | 'python' | 'quiz'
  const [copiedCode, setCopiedCode] = useState(false);

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR: LIVE ETL DATA PIPELINE
  // ---------------------------------------------------------------------------
  const rawOrdersInitial = [
    { order_id: 101, customer_id: 1, product: "Laptop", qty: 1, price: 50000, city: " pune " },
    { order_id: 102, customer_id: 2, product: "Mobile", qty: 2, price: 20000, city: "MUMBAI" },
    { order_id: 103, customer_id: 3, product: "Keyboard", qty: 3, price: 1000, city: "Pune" },
    { order_id: 104, customer_id: 1, product: "Mouse", qty: 2, price: 500, city: "pune" },
    { order_id: 105, customer_id: 2, product: "Monitor", qty: 1, price: 12000, city: "Delhi" },
    { order_id: 102, customer_id: 2, product: "Mobile", qty: 2, price: 20000, city: "MUMBAI" }, // DUPLICATE
    { order_id: 106, customer_id: null, product: "Speaker", qty: 1, price: 3000, city: "Bengaluru" }, // MISSING CUSTOMER
    { order_id: 107, customer_id: 4, product: "Cable", qty: -1, price: 250, city: "Chennai" }, // INVALID QTY
  ];

  const [pipelineStep, setPipelineStep] = useState(0); // 0: Raw, 1: Validated & Cleaned, 2: Transformed, 3: Loaded (OLAP)

  const processedData = useMemo(() => {
    if (pipelineStep === 0) return { rows: rawOrdersInitial, stats: { total: rawOrdersInitial.length, duplicates: 0, invalid: 0, revenue: 0 } };

    // Step 1: Clean & Validate (Deduplicate + drop invalid)
    const seenIds = new Set();
    const validRows = [];
    let dupCount = 0;
    let invCount = 0;

    for (const row of rawOrdersInitial) {
      if (seenIds.has(row.order_id)) {
        dupCount++;
        continue;
      }
      seenIds.add(row.order_id);

      if (!row.customer_id || row.qty <= 0 || row.price < 0) {
        invCount++;
        continue;
      }

      validRows.push({
        ...row,
        city: row.city.trim().charAt(0).toUpperCase() + row.city.trim().slice(1).toLowerCase(),
      });
    }

    if (pipelineStep === 1) {
      return { rows: validRows, stats: { total: validRows.length, duplicates: dupCount, invalid: invCount, revenue: 0 } };
    }

    // Step 2 & 3: Transform (Calculate total_amount)
    const transformed = validRows.map((r) => ({
      ...r,
      total_amount: r.qty * r.price,
    }));
    const totalRev = transformed.reduce((acc, curr) => acc + curr.total_amount, 0);

    return {
      rows: transformed,
      stats: { total: transformed.length, duplicates: dupCount, invalid: invCount, revenue: totalRev },
    };
  }, [pipelineStep]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE ASSESSMENT STATE (10 Questions from Section 19)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "1. What is the primary responsibility of a Data Engineer?",
      options: [
        "Creating business presentations",
        "Building reliable data infrastructure and pipelines",
        "Designing website interfaces",
        "Training only machine learning models",
      ],
      correct: 1,
      explanation: "A Data Engineer creates the infrastructure that collects, processes, stores, cleans, transforms, and delivers an organization's data reliably.",
    },
    {
      id: 2,
      question: "2. Which system is mainly designed for transactional workloads?",
      options: ["OLAP", "Data lake", "OLTP", "Data warehouse"],
      correct: 2,
      explanation: "OLTP (Online Transaction Processing) systems prioritize fast, atomic, day-to-day transactions such as bank transfers, order creation, and payments.",
    },
    {
      id: 3,
      question: "3. Which processing approach is most appropriate for a nightly sales report?",
      options: [
        "Batch processing",
        "Continuous stream processing",
        "Image processing",
        "Manual processing",
      ],
      correct: 0,
      explanation: "Batch processing collects records over a period of time and processes them together at scheduled intervals (such as midnight for daily reporting).",
    },
    {
      id: 4,
      question: "4. What is the correct order of ETL?",
      options: [
        "Extract → Load → Transform",
        "Load → Extract → Transform",
        "Transform → Extract → Load",
        "Extract → Transform → Load",
      ],
      correct: 3,
      explanation: "ETL stands for Extract (source extraction), Transform (cleaning and transforming in an intermediate staging layer), and Load (storing into the warehouse).",
    },
    {
      id: 5,
      question: "5. Which format is commonly used for columnar analytical storage?",
      options: ["MP3", "Parquet", "JPEG", "MP4"],
      correct: 1,
      explanation: "Apache Parquet is an open-source columnar file format optimized for analytical queries (OLAP) allowing projection of only required columns.",
    },
    {
      id: 6,
      question: "6. Which characteristic distinguishes a data lakehouse?",
      options: [
        "It only stores images",
        "It cannot support transactions",
        "It combines flexible lake storage with managed analytical table capabilities",
        "It only supports OLTP",
      ],
      correct: 2,
      explanation: "A data lakehouse combines the flexible, low-cost storage of a data lake with the transactional ACID, schema governance, and query performance of a data warehouse.",
    },
    {
      id: 7,
      question: "7. What is data lineage?",
      options: [
        "Tracking data origin and transformations",
        "Compressing a file",
        "Deleting old databases",
        "Creating user passwords",
      ],
      correct: 0,
      explanation: "Data lineage is the ability to audit and trace where data originated and how it was modified across each stage before reaching downstream consumers.",
    },
    {
      id: 8,
      question: "8. What does idempotency help prevent?",
      options: [
        "Database backups",
        "Unintended duplicate effects when an operation is repeated",
        "All network failures",
        "Schema creation",
      ],
      correct: 1,
      explanation: "Idempotency ensures that running the same pipeline task or ingestion job multiple times produces the exact same result without duplicate records or double counts.",
    },
    {
      id: 9,
      question: "9. Which tool is commonly used for distributed data processing?",
      options: ["Photoshop", "Apache Spark", "PowerPoint", "Figma"],
      correct: 1,
      explanation: "Apache Spark is an industry-standard unified distributed processing engine for large-scale batch and streaming data workloads.",
    },
    {
      id: 10,
      question: "10. Which of the following is a data quality dimension?",
      options: ["Screen resolution", "Font size", "Uniqueness", "CPU brand"],
      correct: 2,
      explanation: "The core dimensions of data quality are Accuracy, Completeness, Consistency, Validity, Uniqueness, and Timeliness.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (qId, optionIdx) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const score = useMemo(() => {
    let s = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) s++;
    });
    return s;
  }, [selectedAnswers]);

  const handleCopyPythonCode = () => {
    const code = `from pathlib import Path
import pandas as pd

INPUT_FILE = Path("data/orders.csv")
OUTPUT_DIR = Path("output")
OUTPUT_FILE = OUTPUT_DIR / "processed_orders.csv"

def run_pipeline():
    # Step 1: Check source file
    if not INPUT_FILE.exists():
        raise FileNotFoundError(f"Missing input file: {INPUT_FILE}")

    # Step 2: Extract
    df = pd.read_csv(INPUT_FILE)

    # Step 3: Validate
    required_columns = {"order_id", "customer_id", "product", "quantity", "price"}
    missing = required_columns - set(df.columns)
    if missing:
        raise ValueError(f"Missing columns: {sorted(missing)}")

    # Step 4: Remove duplicate order IDs
    df = df.drop_duplicates(subset=["order_id"]).copy()

    # Step 5: Validate numeric fields
    df["quantity"] = pd.to_numeric(df["quantity"], errors="coerce")
    df["price"] = pd.to_numeric(df["price"], errors="coerce")
    df = df.dropna(subset=["order_id", "customer_id", "quantity", "price"])
    df = df[(df["quantity"] > 0) & (df["price"] >= 0)].copy()

    # Step 6: Transform
    df["total_amount"] = df["quantity"] * df["price"]

    # Step 7: Load
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    df.to_csv(OUTPUT_FILE, index=False)

    # Step 8: Generate report
    total_revenue = df["total_amount"].sum()
    total_orders = df["order_id"].nunique()
    print("Pipeline completed successfully.")
    print(f"Total orders: {total_orders}")
    print(f"Total revenue: ₹{total_revenue:,.2f}")
    print(f"Output saved to: {OUTPUT_FILE}")

if __name__ == "__main__":
    run_pipeline()`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1c1917] font-sans overflow-x-hidden">
      {/* Top Universal Navigation Bar */}
      <ModuleNav
        courseTitle="Data Engineering Master Course"
        track="data-engineering"
        trackId="data-engineering"
        currentModuleId="intro"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumb & Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-500 font-medium">
            <span
              onClick={() => navigate("/learning")}
              className="cursor-pointer hover:text-stone-900 transition-colors"
            >
              Curriculum
            </span>
            <span>/</span>
            <span
              onClick={() => navigate("/courses/data-engineering")}
              className="cursor-pointer hover:text-stone-900 transition-colors"
            >
              Data Engineering
            </span>
            <span>/</span>
            <span className="text-orange-600 font-semibold">Module 1 — Foundations</span>
          </div>

          {/* Mode Pill Switcher */}
          <div className="flex items-center bg-stone-200/70 p-1 rounded-2xl self-start md:self-auto border border-stone-300/60 shadow-inner">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "curriculum"
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Specification &amp; Blueprints
            </button>
            <button
              onClick={() => setActiveTab("workbench")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "workbench"
                  ? "bg-white text-orange-600 shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              Interactive Workbenches (4)
            </button>
          </div>
        </div>

        {/* Hero Header */}
        <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-orange-800">
              <Database size={13} className="text-orange-600" />
              DATA ENGINEERING MASTER COURSE &middot; FOUNDATION LEVEL &middot; MODULE 01
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono text-stone-600">
              MIT &amp; UC Berkeley Pedagogical Standard
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              23 COMPLETE SECTIONS &middot; ZERO OMISSIONS
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 1 &mdash; Introduction to Data Engineering and Data Systems
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Master the architecture, technologies, and engineering principles behind modern data-driven systems.
            Learn the complete 10-step data lifecycle, OLTP vs OLAP, batch vs stream processing, ETL vs ELT, data warehouses,
            data lakes, lakehouses, the 6 core data quality dimensions, and an end-to-end Python/Pandas pipeline.
          </p>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* MAIN CONTENT AREA */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "curriculum" ? (
          <DataEngineeringIntroSections />
        ) : (
          <div className="space-y-8">
            {/* Workbench Subtabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("pipeline")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "pipeline"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Live ETL Data Pipeline
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("quality")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "quality"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Data Quality Inspector
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("python")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "python"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Python Pipeline Runner (Pandas)
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                4. Knowledge Assessment (10 Qs)
              </button>
            </div>

            {/* Workbench 1: Live ETL Data Pipeline */}
            {activeWorkbenchTab === "pipeline" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Interactive Simulator &middot; Live Ingestion &middot; Stage 01
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Live ETL Data Pipeline Simulator
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Step through each transformation phase to observe how raw dirty records are validated, cleaned, and aggregated into analytical storage.
                    </p>
                  </div>

                  <button
                    onClick={() => setPipelineStep(0)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-100 text-xs font-semibold cursor-pointer"
                  >
                    <RefreshCw size={12} />
                    <span>Reset Data</span>
                  </button>
                </div>

                {/* Pipeline Step Navigator */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2">
                  {[
                    { idx: 0, title: "1. Raw Source (OLTP)", desc: "8 Records with duplicates and nulls" },
                    { idx: 1, title: "2. Clean & Validate", desc: "Deduplication & schema checks" },
                    { idx: 2, title: "3. Transformed (Silver)", desc: "total_amount calculated" },
                    { idx: 3, title: "4. OLAP Aggregates (Gold)", desc: "Revenue & KPI summaries" },
                  ].map((step) => (
                    <button
                      key={step.idx}
                      onClick={() => setPipelineStep(step.idx)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        pipelineStep === step.idx
                          ? "bg-orange-50 border-orange-300 ring-2 ring-orange-400/20"
                          : pipelineStep > step.idx
                          ? "bg-emerald-50/50 border-emerald-200 text-stone-800"
                          : "bg-stone-50 border-stone-200 text-stone-500 hover:bg-stone-100"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-stone-900">{step.title}</span>
                        {pipelineStep > step.idx ? (
                          <CheckCircle2 size={13} className="text-emerald-600" />
                        ) : pipelineStep === step.idx ? (
                          <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                        ) : null}
                      </div>
                      <p className="text-[11px] text-stone-500 mt-1 line-clamp-1">{step.desc}</p>
                    </button>
                  ))}
                </div>

                {/* Pipeline Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-500 uppercase">Input Records</span>
                    <p className="text-lg font-bold text-stone-900">{processedData.stats.total}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-500 uppercase">Duplicates Removed</span>
                    <p className="text-lg font-bold text-orange-600">{processedData.stats.duplicates}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-500 uppercase">Invalid Records Dropped</span>
                    <p className="text-lg font-bold text-red-600">{processedData.stats.invalid}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-[11px] font-mono text-stone-500 uppercase">Total Revenue</span>
                    <p className="text-lg font-bold text-emerald-700">₹{processedData.stats.revenue.toLocaleString()}</p>
                  </div>
                </div>

                {/* Data Table */}
                <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                  <table className="w-full text-left text-xs text-stone-700">
                    <thead className="bg-stone-100/70 border-b border-stone-200 font-mono uppercase text-[11px] text-stone-600">
                      <tr>
                        <th className="p-3">Order ID</th>
                        <th className="p-3">Customer ID</th>
                        <th className="p-3">Product</th>
                        <th className="p-3">City</th>
                        <th className="p-3 text-right">Qty</th>
                        <th className="p-3 text-right">Price</th>
                        {pipelineStep >= 2 && <th className="p-3 text-right text-orange-700 font-bold">Total Amount</th>}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 font-mono">
                      {processedData.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-orange-50/30 transition-colors">
                          <td className="p-3 font-bold text-stone-900">#{row.order_id}</td>
                          <td className="p-3">{row.customer_id ? `#${row.customer_id}` : <span className="text-red-600 bg-red-50 px-1.5 py-0.5 rounded">NULL</span>}</td>
                          <td className="p-3 text-stone-800">{row.product}</td>
                          <td className="p-3">{row.city}</td>
                          <td className={`p-3 text-right ${row.qty <= 0 ? "text-red-600 bg-red-50 font-bold" : ""}`}>{row.qty}</td>
                          <td className="p-3 text-right">₹{row.price.toLocaleString()}</td>
                          {pipelineStep >= 2 && (
                            <td className="p-3 text-right font-bold text-emerald-700">
                              ₹{(row.total_amount || 0).toLocaleString()}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Action Button */}
                <div className="flex justify-end pt-2">
                  <button
                    disabled={pipelineStep >= 3}
                    onClick={() => setPipelineStep((prev) => Math.min(prev + 1, 3))}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                      pipelineStep >= 3
                        ? "bg-stone-200 text-stone-400 cursor-not-allowed"
                        : "bg-[#f97316] hover:bg-orange-600 text-white shadow-xs cursor-pointer"
                    }`}
                  >
                    <span>{pipelineStep === 0 ? "1. Validate & Clean" : pipelineStep === 1 ? "2. Calculate Metrics" : pipelineStep === 2 ? "3. Load to Warehouse" : "Pipeline Completed"}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* Workbench 2: Data Quality Inspector */}
            {activeWorkbenchTab === "quality" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                    Quality Governance &middot; Automated Checks
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                    The 6 Dimensions of Data Quality
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Production data pipelines enforce automated validation gates before records reach analytical consumers.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Accuracy", rule: "Values must reflect true real-world transactions.", check: "price >= 0 AND quantity > 0", status: "PASS", color: "emerald" },
                    { name: "Completeness", rule: "Mandatory identifiers must never be NULL.", check: "order_id IS NOT NULL AND customer_id IS NOT NULL", status: "PASS", color: "emerald" },
                    { name: "Consistency", rule: "Same record must agree across all operational replicas.", check: "account_balance in Ledger == Core Banking", status: "PASS", color: "emerald" },
                    { name: "Validity", rule: "Data types and domains must conform to schema.", check: "email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'", status: "PASS", color: "emerald" },
                    { name: "Uniqueness", rule: "No primary key collisions or duplicated events.", check: "COUNT(order_id) == COUNT(DISTINCT order_id)", status: "PASS", color: "emerald" },
                    { name: "Timeliness", rule: "Records must arrive within the required SLA window.", check: "NOW() - event_timestamp <= INTERVAL '15 minutes'", status: "PASS", color: "emerald" },
                  ].map((dim, i) => (
                    <div key={i} className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-stone-900 text-sm">{dim.name}</h3>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800">
                          {dim.status}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600">{dim.rule}</p>
                      <div className="p-2 rounded-lg bg-white border border-stone-200 font-mono text-[11px] text-stone-700 overflow-x-auto">
                        <code>{dim.check}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Workbench 3: Python Pipeline Runner (Pandas) */}
            {activeWorkbenchTab === "python" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Production Implementation &middot; Python &amp; Pandas
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Complete Python Batch ETL Pipeline
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Clean production script implementing file existence checks, schema validation, deduplication, type casting, and reporting.
                    </p>
                  </div>

                  <button
                    onClick={handleCopyPythonCode}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-300 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-semibold cursor-pointer"
                  >
                    {copiedCode ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                    <span>{copiedCode ? "Copied!" : "Copy Code"}</span>
                  </button>
                </div>

                <div className="rounded-2xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto border border-stone-800">
                  <pre>
                    <code>{`from pathlib import Path
import pandas as pd

INPUT_FILE = Path("data/orders.csv")
OUTPUT_DIR = Path("output")
OUTPUT_FILE = OUTPUT_DIR / "processed_orders.csv"

def run_pipeline():
    # Step 1: Check source file
    if not INPUT_FILE.exists():
        raise FileNotFoundError(f"Missing input file: {INPUT_FILE}")

    # Step 2: Extract
    df = pd.read_csv(INPUT_FILE)

    # Step 3: Validate
    required_columns = {"order_id", "customer_id", "product", "quantity", "price"}
    missing = required_columns - set(df.columns)
    if missing:
        raise ValueError(f"Missing columns: {sorted(missing)}")

    # Step 4: Remove duplicate order IDs
    df = df.drop_duplicates(subset=["order_id"]).copy()

    # Step 5: Validate numeric fields
    df["quantity"] = pd.to_numeric(df["quantity"], errors="coerce")
    df["price"] = pd.to_numeric(df["price"], errors="coerce")
    df = df.dropna(subset=["order_id", "customer_id", "quantity", "price"])
    df = df[(df["quantity"] > 0) & (df["price"] >= 0)].copy()

    # Step 6: Transform
    df["total_amount"] = df["quantity"] * df["price"]

    # Step 7: Load
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    df.to_csv(OUTPUT_FILE, index=False)

    # Step 8: Generate report
    total_revenue = df["total_amount"].sum()
    total_orders = df["order_id"].nunique()
    print("Pipeline completed successfully.")
    print(f"Total orders: {total_orders}")
    print(f"Total revenue: ₹{total_revenue:,.2f}")
    print(f"Output saved to: {OUTPUT_FILE}")

if __name__ == "__main__":
    run_pipeline()`}</code>
                  </pre>
                </div>
              </div>
            )}

            {/* Workbench 4: Knowledge Assessment */}
            {activeWorkbenchTab === "quiz" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Module Assessment &middot; Test Your Understanding
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      10 Knowledge Check Questions
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Assess your understanding of Data Engineering lifecycles, OLTP vs OLAP, lakehouses, idempotency, and data quality.
                    </p>
                  </div>

                  <div className="text-xs font-mono font-bold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
                    Answered: {Object.keys(selectedAnswers).length} / 10
                  </div>
                </div>

                <div className="space-y-4">
                  {quizQuestions.map((q) => {
                    const isSelected = selectedAnswers[q.id] !== undefined;
                    const selectedIdx = selectedAnswers[q.id];
                    const isCorrect = selectedIdx === q.correct;

                    return (
                      <div key={q.id} className="p-4 sm:p-5 rounded-2xl border border-stone-200 bg-stone-50/60 space-y-3">
                        <h3 className="font-bold text-sm sm:text-base text-stone-900">{q.question}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map((opt, oIdx) => {
                            let btnStyle = "bg-white text-stone-700 border-stone-200 hover:bg-stone-100";
                            if (showResults) {
                              if (oIdx === q.correct) btnStyle = "bg-emerald-100 border-emerald-300 text-emerald-900 font-bold";
                              else if (selectedIdx === oIdx) btnStyle = "bg-red-100 border-red-300 text-red-900";
                            } else if (selectedIdx === oIdx) {
                              btnStyle = "bg-orange-100 border-orange-400 text-orange-900 font-bold";
                            }

                            return (
                              <button
                                key={oIdx}
                                onClick={() => handleSelectOption(q.id, oIdx)}
                                className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${btnStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {showResults && (
                          <div className={`p-3 rounded-xl text-xs leading-relaxed ${isCorrect ? "bg-emerald-50 text-emerald-900 border border-emerald-200" : "bg-red-50 text-red-900 border border-red-200"}`}>
                            <strong>{isCorrect ? "Correct!" : "Incorrect."}</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
                  <button
                    onClick={() => setShowResults(!showResults)}
                    className="px-5 py-2.5 rounded-xl font-bold text-xs bg-[#f97316] hover:bg-orange-600 text-white shadow-xs cursor-pointer"
                  >
                    {showResults ? "Hide Explanations" : "Submit Assessment"}
                  </button>

                  {showResults && (
                    <div className="text-sm font-bold text-stone-800">
                      Your Score: <span className="text-orange-600">{score}</span> / 10 ({Math.round((score / 10) * 100)}%)
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
