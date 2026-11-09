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

export default function DataEngineeringIntro() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Navigation tab state: 'theory' | 'interactive-lab' | 'python-code' | 'quiz' | 'assignments'
  const [activeTab, setActiveTab] = useState("theory");
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
      {/* Top Navigation */}
      <ModuleNav
        courseTitle="Data Engineering Master Course"
        track="data-engineering"
        trackId="data-engineering"
        currentModuleId="intro"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 space-y-8 sm:space-y-10">
        {/* Hero Header */}
        <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-orange-800">
              <Database size={13} className="text-orange-600" />
              DATA ENGINEERING MASTER COURSE &middot; FOUNDATION LEVEL &middot; MODULE 01
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono text-stone-600">
              MIT &amp; UC Berkeley Pedagogical Standard
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono text-stone-600">
              Theory + Practical (Python &amp; SQL) &middot; 8&ndash;10 Hours
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#18181b] tracking-tight">
            Module 1 &mdash; Introduction to Data Engineering and Data Systems
          </h1>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600 max-w-4xl">
            Master the architecture, technologies, and engineering principles behind modern data-driven systems.
            Learn the complete data lifecycle, OLTP vs OLAP, batch vs stream processing, ETL vs ELT, data warehouses,
            data lakes, lakehouses, data quality dimensions, and build an end-to-end Python pipeline from scratch.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#e7e3da] pt-4">
            <button
              onClick={() => setActiveTab("theory")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "theory"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <BookOpen size={14} />
              <span>1. Theory &amp; Curriculum (23 Parts)</span>
            </button>

            <button
              onClick={() => setActiveTab("interactive-lab")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "interactive-lab"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <Activity size={14} />
              <span>2. Interactive Data Pipeline Lab</span>
            </button>

            <button
              onClick={() => setActiveTab("python-code")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "python-code"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <FileCode size={14} />
              <span>3. Python Data Pipeline (Pandas)</span>
            </button>

            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "quiz"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <HelpCircle size={14} />
              <span>4. Knowledge Assessment (10 Qs)</span>
            </button>

            <button
              onClick={() => setActiveTab("assignments")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "assignments"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <Workflow size={14} />
              <span>5. Assignments &amp; Interview Questions (30)</span>
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: FULL CURRICULUM (23 SECTIONS)                                */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "theory" && (
          <div className="space-y-8 sm:space-y-10">
            {/* Module Overview & Learning Objectives */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Course Foundations</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">Module Overview &amp; Learning Objectives</h2>
              <p className="text-sm sm:text-base leading-relaxed text-stone-700 mb-4">
                Data Engineering is the foundation of modern data-driven organizations. Every time someone purchases a product,
                makes a payment, watches a video, searches Google, or uses a banking application, data is generated.
                However, raw data by itself is rarely useful. It must be collected, organized, cleaned, transformed, stored, secured,
                and delivered to systems that can use it.
              </p>
              <div className="bg-[#fbf9f4] border-l-4 border-orange-500 p-4 rounded-r-xl mb-6 text-sm text-stone-800">
                <p className="font-bold text-stone-900 mb-1">E-Commerce Example Problem:</p>
                Imagine an e-commerce company receiving millions of records every day from customer accounts, product searches,
                orders, payments, delivery partners, and mobile applications. The company wants to reliably answer:
                <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm text-stone-700">
                  <li>How much revenue did we generate today?</li>
                  <li>Which products are most popular?</li>
                  <li>Which customers are likely to purchase again?</li>
                  <li>How many orders are delayed?</li>
                  <li>Which products should we recommend to individual customers?</li>
                  <li>How should we forecast inventory for the next month?</li>
                </ul>
                To answer these questions reliably, the company needs a complete data infrastructure. A Data Engineer designs and maintains that infrastructure.
              </div>

              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-3">By the end of this module, you should be able to:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                {[
                  "Explain Data Engineering and its role in modern organizations.",
                  "Understand the evolution of data engineering architectures.",
                  "Differentiate Data Engineers, Data Analysts, and Data Scientists.",
                  "Understand the complete Data Engineering lifecycle.",
                  "Identify different data sources and data formats.",
                  "Understand OLTP and OLAP architectures.",
                  "Compare batch processing and stream processing.",
                  "Understand ETL and ELT pipelines.",
                  "Differentiate data warehouses, data lakes, and lakehouses.",
                  "Design the architecture of a basic data pipeline.",
                  "Understand data integration, transformation, and quality.",
                  "Identify the technology ecosystem used by modern Data Engineers.",
                ].map((obj, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl border border-stone-100 bg-stone-50/50">
                    <CheckCircle2 size={16} className="text-orange-600 shrink-0 mt-0.5" />
                    <span className="text-stone-700">{obj}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 1: Introduction to Data Engineering */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 1</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">1. Introduction to Data Engineering</h2>
              
              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2">1.1 What is Data Engineering?</h3>
              <p className="text-sm sm:text-base leading-relaxed text-stone-700 mb-4">
                Data Engineering is the discipline of designing, developing, deploying, and maintaining systems that collect,
                process, store, transform, and deliver data. The primary objective is to make data accessible, reliable, accurate,
                secure, and usable for other applications and teams.
              </p>

              <div className="bg-stone-900 text-stone-100 p-4 rounded-2xl mb-4 font-mono text-xs overflow-x-auto [scrollbar-width:thin]">
                <p className="text-stone-400 mb-1">// Raw order event generated by an online store:</p>
                {`{ "order_id": 10521, "customer_id": 204, "product_id": 501, "quantity": 2, "price": 1500, "payment_status": "SUCCESS", "order_timestamp": "2026-11-09T10:30:00" }`}
              </div>

              <p className="text-xs sm:text-sm text-stone-600 mb-4">
                This record is useful, but a company cannot efficiently operate its business by manually examining millions of such records.
                The company needs systems to: collect order information automatically, store the information securely, remove duplicate records,
                validate payment information, calculate total revenue, combine orders with customer and product information, and make the
                processed information available to dashboards and machine learning systems.
              </p>

              <div className="rounded-2xl border border-stone-200 overflow-hidden mb-6">
                <div className="bg-stone-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-700 border-b border-stone-200">
                  Raw Data vs Engineered Data
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200 text-xs sm:text-sm">
                  <div className="p-4 bg-white">
                    <span className="font-bold text-rose-700 uppercase tracking-wider text-[11px] block mb-2">Raw Input Records</span>
                    <pre className="bg-stone-50 p-2.5 rounded-lg font-mono text-[11px] text-stone-700 overflow-x-auto [scrollbar-width:thin]">
{`{"product":"Laptop","price":50000,"qty":2}
{"product":"Mobile","price":20000,"qty":1}
{"product":"Laptop","price":50000,"qty":1}`}
                    </pre>
                    <p className="text-stone-500 mt-2 text-[11px]">Unprocessed, isolated records from business applications with possible duplicates.</p>
                  </div>
                  <div className="p-4 bg-orange-50/20">
                    <span className="font-bold text-emerald-700 uppercase tracking-wider text-[11px] block mb-2">Processed Analytical Data</span>
                    <table className="w-full text-left border-collapse font-mono text-xs">
                      <thead>
                        <tr className="border-b border-stone-300 text-stone-600">
                          <th className="py-1">Product</th>
                          <th className="py-1 text-right">Revenue</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200">
                        <tr><td className="py-1">Laptop</td><td className="py-1 text-right">₹1,50,000</td></tr>
                        <tr><td className="py-1">Mobile</td><td className="py-1 text-right">₹20,000</td></tr>
                        <tr className="font-bold text-stone-900 border-t border-stone-300">
                          <td className="py-1">Total</td><td className="py-1 text-right">₹1,70,000</td></tr>
                      </tbody>
                    </table>
                    <p className="text-stone-500 mt-2 text-[11px]">Validated, deduplicated, and aggregated data ready for analytics and ML.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2">1.2 Why is Data Engineering important?</h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-3">
                Modern applications generate enormous amounts of data across E-commerce, Banking, Healthcare, and Social Media.
                Without a reliable data engineering infrastructure, organizations experience:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-stone-600 mb-6">
                <li>Inconsistent data across different departments.</li>
                <li>Duplicate or missing customer records.</li>
                <li>Incorrect business reports and delayed analytics.</li>
                <li>Unreliable machine learning predictions.</li>
                <li>Difficulties processing large volumes of information.</li>
              </ul>

              <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2">1.3 Evolution of Data Engineering</h3>
              <div className="space-y-4">
                {[
                  {
                    stage: "Stage 1: Traditional Databases",
                    desc: "Relational databases (MySQL, Oracle, SQL Server, PostgreSQL) stored customer info, inventory, and transactions in structured tables. Managed operational workloads well, but struggled with enterprise cross-application analysis.",
                  },
                  {
                    stage: "Stage 2: Data Warehouses",
                    desc: "Dedicated analytical repositories (Teradata, Oracle Exadata) combined data from separate customer, order, and payment databases for unified reporting.",
                  },
                  {
                    stage: "Stage 3: Big Data and Hadoop",
                    desc: "Internet scale caused massive data volume explosions. Distributed computing (Apache Hadoop, HDFS, MapReduce, Hive) divided computational workloads across clusters of machines.",
                  },
                  {
                    stage: "Stage 4: Cloud Data Engineering",
                    desc: "Eliminated physical server maintenance in favor of scalable cloud storage and managed compute (Amazon S3, BigQuery, Snowflake, Redshift, Azure ADLS).",
                  },
                  {
                    stage: "Stage 5: Modern Data Platforms & Lakehouses",
                    desc: "Combines cloud infrastructure, distributed processing (Apache Spark), streaming (Apache Kafka), orchestration (Airflow), SQL modeling (dbt), and lakehouse table formats (Apache Iceberg, Delta Lake).",
                  },
                ].map((st, i) => (
                  <div key={i} className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-orange-800 mb-1">{st.stage}</h4>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{st.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Role of a Data Engineer */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 2</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">2. What is the Role of a Data Engineer?</h2>

              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2">2.1 Data Engineer vs Data Analyst vs Data Scientist</h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-4">
                Suppose an e-commerce business experiences a 20% reduction in monthly sales. Here is how each professional approaches the problem:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl border border-orange-200 bg-orange-50/30">
                  <span className="font-bold text-xs uppercase tracking-wider text-orange-800 block mb-1">Data Engineer</span>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Collects customer, order, and payment records across databases. Builds pipelines to combine information, fixes missing/duplicate records, and creates reliable analytical tables.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/30">
                  <span className="font-bold text-xs uppercase tracking-wider text-blue-800 block mb-1">Data Analyst</span>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Analyzes monthly sales trends. Identifies products with declining sales, compares regional performance, and creates Power BI or Tableau dashboards for executives.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-purple-200 bg-purple-50/30">
                  <span className="font-bold text-xs uppercase tracking-wider text-purple-800 block mb-1">Data Scientist</span>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Builds machine learning models to predict customer purchasing behavior, investigates churn probability, and develops product recommendation algorithms to revive sales.
                  </p>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="overflow-x-auto [scrollbar-width:thin] rounded-2xl border border-stone-200 mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-stone-100 text-stone-800 border-b border-stone-200 font-bold">
                      <th className="p-3">Area</th>
                      <th className="p-3">Data Engineer</th>
                      <th className="p-3">Data Analyst</th>
                      <th className="p-3">Data Scientist</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    <tr><td className="p-3 font-semibold">Primary goal</td><td>Build data systems</td><td>Understand data</td><td>Predict and discover</td></tr>
                    <tr><td className="p-3 font-semibold">Main work</td><td>Data pipelines</td><td>Reports and analysis</td><td>ML and statistics</td></tr>
                    <tr><td className="p-3 font-semibold">SQL</td><td>Advanced</td><td>Advanced</td><td>Moderate&ndash;Advanced</td></tr>
                    <tr><td className="p-3 font-semibold">Python</td><td>Common</td><td>Useful</td><td>Common</td></tr>
                    <tr><td className="p-3 font-semibold">Spark</td><td>Common in large systems</td><td>Less common</td><td>Common in large workloads</td></tr>
                    <tr><td className="p-3 font-semibold">Visualization</td><td>Supporting skill</td><td>Core skill</td><td>Useful</td></tr>
                    <tr><td className="p-3 font-semibold">Machine learning</td><td>Infrastructure support</td><td>Occasional</td><td>Core skill</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-3">2.2 Core Responsibilities of a Data Engineer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-stone-900 block mb-1">A. Data Ingestion</span>
                  <p className="text-stone-600">Extracting data from relational DBs, REST APIs, event streams, files, and IoT sensors into a central platform.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-stone-900 block mb-1">B. Data Storage</span>
                  <p className="text-stone-600">Selecting and configuring PostgreSQL, Amazon S3, Snowflake, BigQuery, and Apache Iceberg tables based on latency and cost.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-stone-900 block mb-1">C. Data Processing</span>
                  <p className="text-stone-600">Cleaning, deduplicating, standardizing formats (e.g. converting duplicate case names &apos;SAM&apos; vs &apos;sam&apos;), and calculating business metrics.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-stone-900 block mb-1">D. Pipeline Development</span>
                  <p className="text-stone-600">Automating data movement: Source &rarr; Extraction &rarr; Validation &rarr; Transformation &rarr; Warehouse &rarr; Dashboards.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-stone-900 block mb-1">E. Pipeline Monitoring</span>
                  <p className="text-stone-600">Observing pipeline runtimes, failure rates, missing arrivals, duplicate spikes, and data freshness anomalies.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-stone-900 block mb-1">F. Performance Optimization</span>
                  <p className="text-stone-600">Optimizing SQL queries, database indexing, file partitioning, columnar storage, and cloud compute utilization.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50 md:col-span-2">
                  <span className="font-bold text-stone-900 block mb-1">G. Security and Governance</span>
                  <p className="text-stone-600">Role-based access controls, data encryption at rest/in transit, PII masking, retention policies, and data lineage auditing.</p>
                </div>
              </div>
            </section>

            {/* Section 3: Data Engineering Lifecycle */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 3</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">3. Data Engineering Lifecycle</h2>
              <p className="text-sm text-stone-700 leading-relaxed mb-4">
                The lifecycle describes how data moves from original source to consumption by analysts, APIs, and machine learning models:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { step: "3.1 Generation", text: "Produced by applications, IoT sensors, users clicking, transactions." },
                  { step: "3.2 Ingestion", text: "Full extraction, Incremental extraction, or Change Data Capture (CDC)." },
                  { step: "3.3 Storage", text: "PostgreSQL, S3, Snowflake, BigQuery, Redis, Lakehouse tables." },
                  { step: "3.4 Processing", text: "Removing invalid data, joins, aggregations (Revenue = Qty * Price)." },
                  { step: "3.5 Serving", text: "daily_sales_summary tables exposed to BI dashboards and ML APIs." },
                  { step: "3.6 Orchestration", text: "DAG dependency scheduling with Airflow, Dagster, or Prefect." },
                  { step: "3.7 Observability", text: "Alerting on runtime latency, rejected rows, and schema drift." },
                  { step: "3.8 Governance", text: "Field masking, access control, metadata catalogs, and lineage." },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/70">
                    <span className="font-bold text-xs text-orange-800 uppercase tracking-wider block mb-1">{item.step}</span>
                    <p className="text-xs text-stone-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Data Sources and Data Consumers */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 4</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">4. Data Sources and Data Consumers</h2>

              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2">4.1 What are data sources?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                  <span className="font-bold text-stone-900 block mb-1">1. Relational Databases</span>
                  <p className="text-stone-600 mb-2">Tables with schemas: MySQL, PostgreSQL, Oracle, SQL Server.</p>
                  <pre className="bg-stone-50 p-2 rounded text-[11px] font-mono text-stone-700">customer_id | name  | city
101         | Rahul | Pune</pre>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                  <span className="font-bold text-stone-900 block mb-1">2. NoSQL Databases</span>
                  <p className="text-stone-600 mb-2">Flexible schemas: MongoDB, Cassandra, DynamoDB, Redis.</p>
                  <pre className="bg-stone-50 p-2 rounded text-[11px] font-mono text-stone-700">&#123;&quot;customer_id&quot;: 101, &quot;preferences&quot;: &#123;&quot;lang&quot;: &quot;en&quot;&#125;&#125;</pre>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                  <span className="font-bold text-stone-900 block mb-1">3. REST APIs</span>
                  <p className="text-stone-600 mb-2">JSON payloads from external partner endpoints via HTTP requests.</p>
                  <pre className="bg-stone-50 p-2 rounded text-[11px] font-mono text-stone-700">&#123;&quot;currency&quot;: &quot;USD&quot;, &quot;rate&quot;: 83.25&#125;</pre>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                  <span className="font-bold text-stone-900 block mb-1">4. Files, Logs &amp; IoT</span>
                  <p className="text-stone-600 mb-2">CSV, Parquet, Avro, application log streams, and IoT sensor metrics.</p>
                  <pre className="bg-stone-50 p-2 rounded text-[11px] font-mono text-stone-700">2026-11-09 10:15:20 INFO User logged in</pre>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2">4.2 What are data consumers?</h3>
              <p className="text-sm text-stone-700 mb-4">
                Data consumers are the people and systems that rely on processed data: Data Analysts (BI analysis), Data Scientists (ML models),
                Business Executives (management KPIs), and User Applications (personalized product recommendations).
              </p>
            </section>

            {/* Section 5: Structured, Semi-Structured, and Unstructured Data */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 5</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">5. Structured, Semi-Structured, and Unstructured Data</h2>

              <div className="overflow-x-auto [scrollbar-width:thin] rounded-2xl border border-stone-200 mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-stone-100 text-stone-800 border-b border-stone-200 font-bold">
                      <th className="p-3">Feature</th>
                      <th className="p-3">Structured</th>
                      <th className="p-3">Semi-Structured</th>
                      <th className="p-3">Unstructured</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    <tr><td className="p-3 font-semibold">Fixed schema</td><td>Yes (Predefined)</td><td>Flexible / Self-describing</td><td>Usually no</td></tr>
                    <tr><td className="p-3 font-semibold">Main formats</td><td>Tables, Relational DBs</td><td>JSON, XML, YAML</td><td>Images, video, PDFs, audio</td></tr>
                    <tr><td className="p-3 font-semibold">Querying</td><td>Standard SQL</td><td>SQL with JSON operators / NoSQL</td><td>Specialized vector / ML processing</td></tr>
                    <tr><td className="p-3 font-semibold">Storage</td><td>Relational DB, Data Warehouse</td><td>Document DB, Object store</td><td>Cloud Object Storage (S3, GCS)</td></tr>
                    <tr><td className="p-3 font-semibold">Common use</td><td>Transactions, ERP, Finance</td><td>APIs, Event streams, Logs</td><td>Media, Medical scans, Documents</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-[#fbf9f4] p-4 rounded-2xl border border-stone-200 text-xs sm:text-sm text-stone-700">
                <span className="font-bold text-stone-900 block mb-1">Engineering Concept: Schema-on-Write vs Schema-on-Read</span>
                <p>
                  <strong>Schema-on-Write:</strong> Data must strictly match the table schema before being committed to disk (e.g. PostgreSQL CREATE TABLE).
                  <strong>Schema-on-Read:</strong> Data is saved in its original format (e.g. JSON in S3), and structure/parsing is applied at query time.
                </p>
              </div>
            </section>

            {/* Section 6: OLTP vs OLAP Systems */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 6</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">6. OLTP vs OLAP Systems</h2>

              <div className="overflow-x-auto [scrollbar-width:thin] rounded-2xl border border-stone-200 mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-stone-100 text-stone-800 border-b border-stone-200 font-bold">
                      <th className="p-3">Feature</th>
                      <th className="p-3">OLTP (Online Transaction Processing)</th>
                      <th className="p-3">OLAP (Online Analytical Processing)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    <tr><td className="p-3 font-semibold">Purpose</td><td>Daily operational transactions</td><td>Business intelligence &amp; historical analysis</td></tr>
                    <tr><td className="p-3 font-semibold">Operations</td><td>INSERT, UPDATE, DELETE</td><td>SELECT, JOIN, GROUP BY, aggregations</td></tr>
                    <tr><td className="p-3 font-semibold">Workload</td><td>Small, fast, high-concurrency writes</td><td>Large, read-heavy analytical scans</td></tr>
                    <tr><td className="p-3 font-semibold">Data Scope</td><td>Current operational snapshot</td><td>Years of historical consolidated data</td></tr>
                    <tr><td className="p-3 font-semibold">Storage Layout</td><td>Row-oriented storage (fast full row writes)</td><td>Column-oriented storage (fast aggregation)</td></tr>
                    <tr><td className="p-3 font-semibold">Common Engines</td><td>PostgreSQL, MySQL, Oracle</td><td>Snowflake, BigQuery, Redshift, ClickHouse</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-stone-900 text-stone-100 p-4 rounded-2xl text-xs font-mono overflow-x-auto [scrollbar-width:thin]">
                <p className="text-stone-400 mb-1">// Why separate OLTP and OLAP?</p>
                <p className="text-emerald-400">
                  Customer &rarr; OLTP (PostgreSQL) &rarr; CDC / Ingestion &rarr; Transformation &rarr; OLAP Warehouse &rarr; BI Dashboard
                </p>
                <p className="text-stone-400 mt-2">
                  A company never runs a 5-year complex aggregation scan on its live production checkout database,
                  which would lock tables and freeze customer purchases!
                </p>
              </div>
            </section>

            {/* Section 7: Batch Processing vs Stream Processing */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 7</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">7. Batch Processing vs Stream Processing</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-xs uppercase tracking-wider text-orange-800 block mb-2">7.1 Batch Processing</span>
                  <p className="text-xs sm:text-sm text-stone-700 mb-2">
                    Data accumulates over a scheduled interval (e.g. daily, hourly) and is processed in groups.
                  </p>
                  <ul className="list-disc pl-4 text-xs text-stone-600 space-y-1">
                    <li>Tools: Apache Spark, dbt, Airflow, SQL.</li>
                    <li>Use cases: Daily sales reports, monthly payroll, nightly database syncing.</li>
                    <li>Benefit: Highly cost-efficient for heavy data volumes.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-xs uppercase tracking-wider text-blue-800 block mb-2">7.2 Stream Processing</span>
                  <p className="text-xs sm:text-sm text-stone-700 mb-2">
                    Events are ingested and processed continuously within milliseconds to seconds of creation.
                  </p>
                  <ul className="list-disc pl-4 text-xs text-stone-600 space-y-1">
                    <li>Tools: Apache Kafka, Apache Flink, Spark Streaming.</li>
                    <li>Use cases: Fraud detection, live GPS fleet tracking, real-time alerting.</li>
                    <li>Benefit: Ultra-low latency for time-critical decisions.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-white text-xs sm:text-sm text-stone-700">
                <span className="font-bold text-stone-900 block mb-1">Engineering Rule: Real-Time Is Not Always Better</span>
                <p>
                  Processing everything in real-time adds massive architectural complexity and server cost.
                  Data engineers match the latency to the business requirement (e.g. daily revenue needs batch; banking fraud detection needs streaming).
                </p>
              </div>
            </section>

            {/* Section 8: ETL vs ELT Architecture */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 8</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">8. ETL vs ELT Architecture</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                  <span className="font-bold text-xs uppercase tracking-wider text-stone-800 block mb-2">ETL (Extract &rarr; Transform &rarr; Load)</span>
                  <p className="text-xs sm:text-sm text-stone-700 mb-2">
                    Data is extracted from source, transformed in an external compute engine (Python, Spark), and then loaded into storage.
                  </p>
                  <span className="text-[11px] font-mono text-stone-500">Best for: Strict privacy/PII masking before loading, or limited target warehouse compute.</span>
                </div>
                <div className="p-4 rounded-2xl border border-orange-200 bg-orange-50/20">
                  <span className="font-bold text-xs uppercase tracking-wider text-orange-800 block mb-2">ELT (Extract &rarr; Load &rarr; Transform)</span>
                  <p className="text-xs sm:text-sm text-stone-700 mb-2">
                    Raw data is loaded directly into the destination warehouse/lakehouse, then transformed in-place using cloud SQL (e.g. dbt on BigQuery/Snowflake).
                  </p>
                  <span className="text-[11px] font-mono text-orange-700">Best for: Modern cloud platforms where raw data is preserved and SQL transformations can be rerun flexibly.</span>
                </div>
              </div>
            </section>

            {/* Section 9: Data Warehouses and Data Lakes */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 9</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">9. Data Warehouses and Data Lakes</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-stone-900 block mb-1">9.1 Data Warehouse</span>
                  <p className="text-stone-600 mb-2">Centralized, structured repository optimized for reporting. Uses schema-on-write.</p>
                  <span className="font-mono text-[11px] text-stone-500">Examples: Snowflake, Google BigQuery, Amazon Redshift, Microsoft Fabric.</span>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-stone-900 block mb-1">9.2 Data Lake</span>
                  <p className="text-stone-600 mb-2">Stores raw files of all types (JSON, Parquet, images, audio) at low cost. Uses schema-on-read.</p>
                  <span className="font-mono text-[11px] text-stone-500">Examples: Amazon S3, Azure ADLS Gen2, Google Cloud Storage.</span>
                </div>
              </div>
              <p className="text-xs text-stone-500">
                Caution: An ungoverned data lake without metadata, schema tracking, and lifecycle rules quickly turns into an unusable <em>Data Swamp</em>.
              </p>
            </section>

            {/* Section 10: Modern Data Lakehouse Architecture */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 10</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">10. Modern Data Lakehouse Architecture</h2>
              <p className="text-sm text-stone-700 leading-relaxed mb-4">
                A Data Lakehouse combines the cost efficiency and scale of a data lake with the transactional ACID guarantees,
                schema enforcement, and indexing of a data warehouse:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6 text-xs sm:text-sm">
                <div className="p-3 rounded-xl border border-stone-200 bg-white">
                  <span className="font-bold text-stone-900 block mb-1">1. Object Storage</span>
                  <span className="text-stone-600">Amazon S3, Azure ADLS, Google Cloud Storage.</span>
                </div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white">
                  <span className="font-bold text-stone-900 block mb-1">2. Columnar Files</span>
                  <span className="text-stone-600">Apache Parquet, Apache ORC, Avro.</span>
                </div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white">
                  <span className="font-bold text-orange-700 block mb-1">3. Table Formats</span>
                  <span className="text-stone-600">Apache Iceberg, Delta Lake, Apache Hudi (ACID &amp; Time Travel).</span>
                </div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white">
                  <span className="font-bold text-stone-900 block mb-1">4. Metadata Catalogs</span>
                  <span className="text-stone-600">Unity Catalog, AWS Glue Data Catalog.</span>
                </div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white">
                  <span className="font-bold text-stone-900 block mb-1">5. Query Engines</span>
                  <span className="text-stone-600">Apache Spark, Trino, DuckDB, Flink.</span>
                </div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white">
                  <span className="font-bold text-stone-900 block mb-1">6. Consumers</span>
                  <span className="text-stone-600">BI dashboards, SQL endpoints, ML training jobs.</span>
                </div>
              </div>
            </section>

            {/* Section 11: Data Pipeline Architecture */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 11</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">11. Data Pipeline Architecture</h2>

              <div className="bg-stone-900 text-stone-100 p-4 rounded-2xl font-mono text-xs overflow-x-auto [scrollbar-width:thin] mb-4">
                <p className="text-stone-400 mb-1">// End-to-End Enterprise Data Pipeline Flow:</p>
                {`SOURCES: [PostgreSQL, MongoDB, Payment APIs, App Events]
   ↓
INGESTION: [Airbyte, Debezium CDC, Kafka Event Broker]
   ↓
STORAGE: [Cloud Data Lake (Amazon S3 / Parquet)]
   ↓
PROCESSING: [Apache Spark / dbt SQL Transformations]
   ↓
SERVING: [Data Warehouse / Lakehouse (Snowflake / BigQuery)]
   ↓
CONSUMERS: [Power BI, Tableau, ML Feature Store, API Endpoints]`}
              </div>

              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-2">What makes a pipeline production-ready?</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                A production-grade pipeline must gracefully handle failures with retries, prevent duplicate processing (idempotency),
                manage late-arriving records, run automated data quality validations, log execution state for observability,
                scale with volume, and secure credentials using secrets managers.
              </p>
            </section>

            {/* Section 12: Data Integration and Data Transformation */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 12</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">12. Data Integration and Data Transformation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-stone-900 block mb-1">Data Integration</span>
                  <p className="text-stone-600">Combines data from disparate source systems (PostgreSQL customer DB + MongoDB products + Stripe API) into a unified view.</p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-stone-900 block mb-1">Data Transformation</span>
                  <p className="text-stone-600">Modifies format and values: cleaning strings, filtering failed payments, joining foreign keys, and computing aggregates.</p>
                </div>
              </div>
            </section>

            {/* Section 13: Data Quality and Reliability Fundamentals */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 13</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">13. Data Quality and Reliability Fundamentals</h2>

              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2">13.1 The 6 Dimensions of Data Quality</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6 text-xs sm:text-sm">
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">1. Accuracy</span>Reflects real-world transaction truth.</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">2. Completeness</span>No missing mandatory keys (e.g. null customer_id).</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">3. Consistency</span>Matches across systems (e.g. address matches in CRM and ERP).</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">4. Validity</span>Conforms to domain rules (positive amounts, valid emails).</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">5. Uniqueness</span>Zero unwanted duplicate records skewing metrics.</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">6. Timeliness</span>Data is fresh and delivered within agreed SLAs.</div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2">13.2 Automated SQL Quality Checks</h3>
              <pre className="bg-stone-900 text-stone-100 p-4 rounded-2xl text-xs font-mono overflow-x-auto [scrollbar-width:thin] mb-4">
{`-- Check 1: Missing order IDs
SELECT * FROM orders WHERE order_id IS NULL;

-- Check 2: Invalid negative prices or quantities
SELECT * FROM orders WHERE amount < 0 OR quantity <= 0;

-- Check 3: Duplicate order primary keys
SELECT order_id, COUNT(*) AS duplicate_count
FROM orders GROUP BY order_id HAVING COUNT(*) > 1;

-- Check 4: Domain validity for status enum
SELECT * FROM orders WHERE payment_status NOT IN ('SUCCESS', 'FAILED', 'PENDING');`}
              </pre>
            </section>

            {/* Section 14: Data Engineering in Real-World Industries */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 14</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">14. Data Engineering in Real-World Industries</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-stone-900 block mb-1">E-Commerce</span>
                  <p className="text-stone-600">Cart events, recommendations, inventory demand forecasting, daily revenue reporting.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-stone-900 block mb-1">Banking &amp; Fintech</span>
                  <p className="text-stone-600">Sub-second transaction fraud detection, AML regulatory compliance, credit risk pipelines.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-stone-900 block mb-1">Healthcare</span>
                  <p className="text-stone-600">Electronic Health Records (EHR), PACS medical images, HIPAA compliance, ICU telemetry.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-stone-900 block mb-1">Social Media</span>
                  <p className="text-stone-600">Clickstream telemetry, real-time feed recommendations, advertising impressions, engagement logs.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-stone-900 block mb-1">Manufacturing</span>
                  <p className="text-stone-600">Industrial IoT temperature/vibration sensors, predictive maintenance, assembly QA monitoring.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <span className="font-bold text-stone-900 block mb-1">Logistics &amp; Fleet</span>
                  <p className="text-stone-600">Real-time GPS vehicle tracking, route ETA recalculation, fuel consumption analysis.</p>
                </div>
              </div>
            </section>

            {/* Section 15: Technology Ecosystem */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 15</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">15. Modern Data Engineering Technology Ecosystem</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs sm:text-sm">
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">Languages</span>Python, SQL, Java, Scala, Bash.</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">Storage</span>PostgreSQL, S3, ADLS, GCS, MongoDB, Redis.</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">Ingestion</span>Apache Kafka, Airbyte, Fivetran, Debezium CDC.</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">Processing</span>Apache Spark, Apache Flink, dbt, Pandas, Polars.</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">Orchestration</span>Apache Airflow, Dagster, Prefect.</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">Warehouses</span>Snowflake, BigQuery, Redshift, Databricks.</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">Lakehouse Formats</span>Apache Iceberg, Delta Lake, Apache Hudi.</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">BI &amp; Analytics</span>Power BI, Tableau, Looker, Metabase, Superset.</div>
              </div>
            </section>

            {/* Section 16: Complete Real-World Case Study (ShopSmart) */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 16</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">16. Complete Real-World Case Study: Building an E-commerce Data Platform</h2>
              <div className="bg-[#fbf9f4] border-l-4 border-orange-500 p-4 rounded-r-xl mb-4 text-xs sm:text-sm text-stone-700">
                <p className="font-bold text-stone-900 mb-1">Organization: ShopSmart (2 Million Customers, 500k Products)</p>
                Follow the 10-step enterprise engineering process:
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li><strong>Identify Data Sources:</strong> PostgreSQL (orders), MongoDB (catalog), Stripe API (payments), Kafka (clickstream).</li>
                  <li><strong>Identify Business Requirements:</strong> Daily revenue, real-time cart monitors, churn analysis, delivery SLAs.</li>
                  <li><strong>Choose Processing Methods:</strong> Batch for daily revenue; Streaming for payment fraud &amp; vehicle tracking.</li>
                  <li><strong>Design Ingestion:</strong> Debezium CDC for order database; Airbyte for third-party shipping APIs.</li>
                  <li><strong>Design Storage Layout:</strong> S3 data lake partitioned as raw/ &rarr; cleaned/ &rarr; curated/.</li>
                  <li><strong>Transform Data:</strong> SQL deduplication, foreign key resolution, and revenue aggregation.</li>
                  <li><strong>Load Analytical Datasets:</strong> Star schema dimensional tables in Snowflake / BigQuery.</li>
                  <li><strong>Orchestrate Workflows:</strong> Apache Airflow DAG managing execution dependencies and retries.</li>
                  <li><strong>Monitor Reliability:</strong> Alerting on rejected rows, data freshness, and processing duration.</li>
                  <li><strong>Deliver Business Value:</strong> Verified dashboards for executive finance and recommendation systems for ML.</li>
                </ol>
              </div>
            </section>

            {/* Section 17: Industry Concepts to Remember */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 17</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">17. Important Industry Concepts to Remember</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">Data Lineage</span>Traceability from source origin through every transformation.</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">Partitioning</span>Dividing tables by date/region (year=2026/month=11/day=09) to speed scans.</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">Idempotency</span>Safely re-running jobs without generating duplicate records.</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">Data Contracts</span>Formal agreements between producers and consumers on schemas &amp; SLAs.</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">Dead-Letter Queue</span>Isolating poisoned/unparseable messages for engineer inspection.</div>
                <div className="p-3 rounded-xl border border-stone-200 bg-white"><span className="font-bold text-stone-900 block">Backfilling</span>Reprocessing historical date partitions after fixing business logic.</div>
              </div>
            </section>

            {/* Section 22: Recommended Learning Resources */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 22</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">22. Recommended Learning Resources</h2>
              <ul className="divide-y divide-stone-200 text-xs sm:text-sm">
                <li className="py-2.5 flex items-center justify-between">
                  <span className="font-semibold text-stone-900">Designing Data-Intensive Applications &mdash; Martin Kleppmann</span>
                  <span className="text-stone-500 font-mono text-xs">O&apos;Reilly Media</span>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <span className="font-semibold text-stone-900">Fundamentals of Data Engineering &mdash; Joe Reis and Matt Housley</span>
                  <span className="text-stone-500 font-mono text-xs">O&apos;Reilly Media</span>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <span className="font-semibold text-stone-900">The Data Warehouse Toolkit &mdash; Ralph Kimball &amp; Margy Ross</span>
                  <span className="text-stone-500 font-mono text-xs">Wiley</span>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <span className="font-semibold text-stone-900">Apache Spark &amp; Kafka Official Documentation</span>
                  <a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline flex items-center gap-1">
                    spark.apache.org <ExternalLink size={12} />
                  </a>
                </li>
              </ul>
            </section>

            {/* Section 23: Final Revision & Next Module */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 23</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">23. Module 1 &mdash; Final Revision &amp; What Comes Next</h2>
              <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50 mb-6 text-xs sm:text-sm space-y-2 text-stone-700">
                <p><strong>1. Data Engineering:</strong> Builds infrastructure for collecting, processing, storing, and delivering trusted data.</p>
                <p><strong>2. Lifecycle:</strong> Generation &rarr; Ingestion &rarr; Storage &rarr; Processing &rarr; Serving (governed by orchestration, monitoring, and security).</p>
                <p><strong>3. Workloads:</strong> OLTP processes transactions; OLAP powers analytical intelligence.</p>
                <p><strong>4. Paradigms:</strong> Batch processes scheduled chunks; Streaming reacts immediately to real-time events.</p>
                <p><strong>5. Modern Architecture:</strong> Data Lakehouses (Iceberg/Delta Lake) unite the flexibility of object storage with warehouse ACID guarantees.</p>
              </div>

              {/* Next Module Callout */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-[#e7e3da] pt-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">What Comes Next?</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#18181b] mt-0.5">
                    Module 2 &mdash; SQL and Database Engineering for Data Engineers
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
                    Relational storage engines, B-tree indexes, execution plans, ACID transactions, window functions, and dimensional data modeling in PostgreSQL.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("python-code")}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#f97316] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-orange-600 transition-all cursor-pointer whitespace-nowrap self-start sm:self-auto"
                >
                  <span>Explore Practical Lab</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE DATA PIPELINE LAB                               */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "interactive-lab" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Interactive Workbench</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-2">Live Data Pipeline Execution Simulator</h2>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Step through a live end-to-end data pipeline. Ingest raw records with dirty formatting and duplicate keys,
                apply automated quality filters, run revenue transformations, and view the analytical results.
              </p>

              {/* Stepper Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-6">
                {[
                  { step: 0, label: "1. Raw Ingestion", desc: "Unfiltered event records" },
                  { step: 1, label: "2. Clean & Deduplicate", desc: "Drop duplicates & nulls" },
                  { step: 2, label: "3. Transform & Calculate", desc: "Compute total_amount" },
                  { step: 3, label: "4. OLAP Serving", desc: "Aggregated reporting view" },
                ].map((s) => (
                  <button
                    key={s.step}
                    onClick={() => setPipelineStep(s.step)}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                      pipelineStep === s.step
                        ? "bg-orange-50 border-orange-400 text-orange-950 shadow-xs"
                        : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <span className="block font-bold text-xs">{s.label}</span>
                    <span className="block text-[11px] text-stone-500 mt-0.5">{s.desc}</span>
                  </button>
                ))}
              </div>

              {/* Pipeline Metric Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 font-mono text-xs">
                <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                  <span className="text-stone-500 block text-[11px]">Valid Records</span>
                  <span className="text-base font-bold text-stone-900">{processedData.stats.total}</span>
                </div>
                <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                  <span className="text-stone-500 block text-[11px]">Duplicates Filtered</span>
                  <span className="text-base font-bold text-rose-600">{processedData.stats.duplicates}</span>
                </div>
                <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                  <span className="text-stone-500 block text-[11px]">Invalid Rows Dropped</span>
                  <span className="text-base font-bold text-amber-600">{processedData.stats.invalid}</span>
                </div>
                <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                  <span className="text-stone-500 block text-[11px]">Total Pipeline Revenue</span>
                  <span className="text-base font-bold text-emerald-600">₹{processedData.stats.revenue.toLocaleString()}</span>
                </div>
              </div>

              {/* Table Visualization */}
              <div className="overflow-x-auto [scrollbar-width:thin] rounded-2xl border border-stone-200">
                <table className="w-full text-left border-collapse font-mono text-xs">
                  <thead>
                    <tr className="bg-stone-100 text-stone-800 border-b border-stone-200">
                      <th className="p-3">order_id</th>
                      <th className="p-3">customer_id</th>
                      <th className="p-3">product</th>
                      <th className="p-3 text-right">quantity</th>
                      <th className="p-3 text-right">price</th>
                      <th className="p-3">city</th>
                      {pipelineStep >= 2 && <th className="p-3 text-right text-orange-700">total_amount</th>}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 bg-white">
                    {processedData.rows.map((row, i) => (
                      <tr key={i} className="hover:bg-stone-50/70">
                        <td className="p-3 font-semibold text-stone-900">{row.order_id}</td>
                        <td className="p-3 text-stone-600">{row.customer_id ?? "<null>"}</td>
                        <td className="p-3 text-stone-800">{row.product}</td>
                        <td className={`p-3 text-right ${row.qty <= 0 ? "text-rose-600 font-bold" : "text-stone-700"}`}>
                          {row.qty}
                        </td>
                        <td className="p-3 text-right text-stone-700">₹{row.price.toLocaleString()}</td>
                        <td className="p-3 text-stone-600">&quot;{row.city}&quot;</td>
                        {pipelineStep >= 2 && (
                          <td className="p-3 text-right font-bold text-emerald-700">
                            ₹{row.total_amount.toLocaleString()}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: PYTHON DATA PIPELINE (PANDAS SCRIPT)                       */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "python-code" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-4">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 18 &middot; Practical Lab</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">Production-Style Pandas Pipeline (`main.py`)</h2>
                </div>
                <button
                  onClick={handleCopyPythonCode}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-bold text-stone-800 transition-all cursor-pointer self-start sm:self-auto"
                >
                  {copiedCode ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedCode ? "Copied!" : "Copy Python Code"}</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 mb-4">
                This complete Python script implements the full batch pipeline: validates input existence, extracts CSV records,
                enforces required column schema, drops duplicates, cleans numeric types, calculates line-item revenue, and exports to CSV.
              </p>

              {/* Sample Input CSV */}
              <div className="mb-4">
                <span className="font-mono text-xs font-bold text-stone-700 block mb-1">Step 2: Sample Input `data/orders.csv`</span>
                <pre className="bg-stone-900 text-stone-200 p-3 rounded-xl font-mono text-xs overflow-x-auto [scrollbar-width:thin]">
{`order_id,customer_id,product,quantity,price
101,1,Laptop,1,50000
102,2,Mobile,2,20000
103,3,Keyboard,3,1000
104,1,Mouse,2,500
105,2,Monitor,1,12000`}
                </pre>
              </div>

              {/* Complete Python Script */}
              <div>
                <span className="font-mono text-xs font-bold text-stone-700 block mb-1">Step 3: Complete Pipeline `main.py`</span>
                <pre className="bg-stone-900 text-stone-100 p-4 rounded-2xl font-mono text-xs leading-relaxed overflow-x-auto [scrollbar-width:thin]">
{`from pathlib import Path
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
    run_pipeline()`}
                </pre>
              </div>

              {/* Execution Output */}
              <div className="mt-4 p-4 rounded-2xl bg-[#fbf9f4] border border-stone-200">
                <span className="font-mono text-xs font-bold text-stone-800 block mb-1">Expected Terminal Output (`python main.py`):</span>
                <pre className="text-emerald-700 font-mono text-xs">
{`Pipeline completed successfully.
Total orders: 5
Total revenue: ₹95,000.00
Output saved to: output/processed_orders.csv`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: KNOWLEDGE ASSESSMENT (10 QUESTIONS)                         */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 19 &middot; Module Assessment</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">Knowledge Check &mdash; Test Your Understanding</h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Answer all 10 questions derived directly from Module 1 foundations.
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-orange-50 border border-orange-200 text-center self-start sm:self-auto font-mono text-xs">
                  <span className="text-stone-500 block">Current Score</span>
                  <span className="text-base font-bold text-orange-800">{score} / {quizQuestions.length}</span>
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {quizQuestions.map((q) => {
                  const selected = selectedAnswers[q.id];
                  const hasAnswered = selected !== undefined;
                  const isCorrect = selected === q.correct;

                  return (
                    <div key={q.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50">
                      <h3 className="font-bold text-sm sm:text-base text-stone-900 mb-3">{q.question}</h3>
                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selected === optIdx;
                          let btnStyle = "border-stone-200 bg-white hover:bg-stone-100 text-stone-800";

                          if (hasAnswered && optIdx === q.correct) {
                            btnStyle = "border-emerald-300 bg-emerald-50 text-emerald-950 font-semibold";
                          } else if (hasAnswered && isOptionSelected && !isCorrect) {
                            btnStyle = "border-rose-300 bg-rose-50 text-rose-950 font-semibold";
                          } else if (isOptionSelected) {
                            btnStyle = "border-orange-400 bg-orange-50 text-orange-950 font-semibold";
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm flex items-center justify-between transition-all cursor-pointer ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {hasAnswered && optIdx === q.correct && (
                                <CheckCircle size={16} className="text-emerald-600 shrink-0 ml-2" />
                              )}
                              {hasAnswered && isOptionSelected && !isCorrect && (
                                <AlertTriangle size={16} className="text-rose-600 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {hasAnswered && (
                        <div className="mt-3 p-3 rounded-xl bg-stone-100/80 border border-stone-200 text-xs text-stone-700">
                          <span className="font-bold text-stone-900 block mb-0.5">Explanation:</span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit CTA */}
              <div className="mt-8 flex items-center justify-between border-t border-[#e7e3da] pt-6">
                <span className="text-xs text-stone-500 font-mono">
                  {Object.keys(selectedAnswers).length} of {quizQuestions.length} answered
                </span>
                <button
                  onClick={() => setShowResults(true)}
                  className="px-6 py-3 rounded-xl bg-[#f97316] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-orange-600 transition-all cursor-pointer"
                >
                  Complete Assessment
                </button>
              </div>

              {showResults && (
                <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs sm:text-sm">
                  <strong>Assessment Completed!</strong> You scored {score} out of {quizQuestions.length} ({((score / quizQuestions.length) * 100).toFixed(0)}%).
                </div>
              )}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: ASSIGNMENTS & INTERVIEW PREP                                */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "assignments" && (
          <div className="space-y-6">
            {/* Practical Assignments */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 20 &middot; Practical Work</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">Practical Assignments &amp; Research</h2>
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h3 className="font-bold text-stone-900 mb-1">Assignment 1 &mdash; Food Delivery Architecture Design</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Design the complete data engineering architecture for a food delivery app with customer accounts, restaurants, orders, payments,
                    and real-time delivery GPS tracking. Specify ingestion methods, storage tiers, batch vs stream components, and data quality monitors.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h3 className="font-bold text-stone-900 mb-1">Assignment 2 &mdash; Startup Technology Selection</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Select a modern, cost-efficient data stack for a startup processing 100,000 orders/month. Justify choices for database,
                    programming language, storage, transformation (dbt), orchestration (Airflow/Dagster), and BI visualization.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h3 className="font-bold text-stone-900 mb-1">Assignment 3 &mdash; Data Quality Investigation</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Given a dirty customer dataset, write SQL assertions to isolate missing emails, negative invoice totals, duplicate primary keys,
                    and inconsistent city casing.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h3 className="font-bold text-stone-900 mb-1">Assignment 4 &mdash; Architecture Research</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Research and write an architectural trade-off analysis comparing: (1) Traditional relational ETL with Oracle/SQL Server,
                    (2) Big Data Hadoop/Spark cluster, and (3) Cloud Lakehouse with S3 and Apache Iceberg/Delta Lake.
                  </p>
                </div>
              </div>
            </div>

            {/* 30 Core Interview Questions */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">Section 21 &middot; Placement Preparation</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1 mb-4">Important Interview Questions (30 Questions)</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider text-stone-800 mb-2 border-b border-stone-200 pb-1">
                    1. Fundamental Concepts (10 Questions)
                  </h3>
                  <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-stone-700">
                    <li>What is Data Engineering and how does it create business value?</li>
                    <li>What are the core daily responsibilities of a Data Engineer?</li>
                    <li>How does Data Engineering differ from Data Analytics and Data Science?</li>
                    <li>Explain the 5 stages in the historical evolution of Data Engineering.</li>
                    <li>What are the 8 key stages of the Data Engineering lifecycle?</li>
                    <li>Compare structured, semi-structured, and unstructured data with examples.</li>
                    <li>What is a data pipeline and what are its standard layers?</li>
                    <li>What is a database schema and why is schema evolution important?</li>
                    <li>What is metadata and why is a central metadata catalog necessary?</li>
                    <li>What is data lineage and how does it prevent pipeline breakages?</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider text-stone-800 mb-2 border-b border-stone-200 pb-1">
                    2. Architecture Questions (10 Questions)
                  </h3>
                  <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-stone-700" start={11}>
                    <li>Explain the difference between OLTP and OLAP workloads.</li>
                    <li>Why should an organization never run heavy analytical queries on an OLTP database?</li>
                    <li>What is a Data Warehouse and what are its key architectural characteristics?</li>
                    <li>What is a Data Lake and what causes a data lake to turn into a data swamp?</li>
                    <li>What is a Data Lakehouse and what unique capabilities does it introduce?</li>
                    <li>Compare Batch Processing and Stream Processing across latency and cost.</li>
                    <li>Explain the architectural differences between ETL and ELT.</li>
                    <li>What is Change Data Capture (CDC) and how does it optimize ingestion?</li>
                    <li>What is distributed computing and how does it solve large-scale volume bottlenecks?</li>
                    <li>What is data partitioning and how does it reduce query scan costs?</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wider text-stone-800 mb-2 border-b border-stone-200 pb-1">
                    3. Production &amp; Advanced Questions (10 Questions)
                  </h3>
                  <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-stone-700" start={21}>
                    <li>What are the 6 core dimensions of data quality?</li>
                    <li>What is idempotency and why is it essential for pipeline retries?</li>
                    <li>How do you prevent and resolve duplicate records in an automated pipeline?</li>
                    <li>What is workflow orchestration and why use Airflow over a crontab?</li>
                    <li>How does Apache Kafka fit into an enterprise event-driven architecture?</li>
                    <li>What is the role of Apache Spark in large-scale data processing?</li>
                    <li>What is a Data Contract and how does it govern producer-consumer relationships?</li>
                    <li>Explain Data Freshness, SLAs, and SLOs in a production context.</li>
                    <li>What happens when a pipeline fails halfway through execution, and how do you recover?</li>
                    <li>How would you design a scalable data pipeline for an e-commerce platform processing millions of daily orders?</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
