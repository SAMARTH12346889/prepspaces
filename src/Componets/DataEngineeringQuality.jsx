// projectx/src/Componets/DataEngineeringQuality.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Workflow,
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
  Merge,
  Calendar,
  Database,
  Search,
  AlertOctagon,
  FileText,
  HelpCircle,
  ChevronRight,
  Eye,
  SlidersVertical,
  Hash,
  ShieldAlert
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import DataEngineeringQualitySections from "./DataEngineeringQualitySections";

export default function DataEngineeringQuality() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("profiler");
  // 'profiler' | 'sieve' | 'anomaly' | 'reconciliation' | 'lineage' | 'contracts_quiz'

  // ==========================================
  // WORKBENCH 1: PROFILER & HEALTH SCORER STATE
  // ==========================================
  const rawDataset = useMemo(() => [
    { id: 101, name: "Rahul Sharma", email: "rahul@example.com", age: 28, amount: 1500, status: "completed", city: "Mumbai" },
    { id: 102, name: "Priya Patel", email: null, age: 34, amount: 2500, status: "completed", city: "Delhi" },
    { id: 103, name: "Arjun Verma", email: "arjun@work.io", age: 0, amount: 1000, status: "pending", city: "Bengaluru" },
    { id: 104, name: "Neha Gupta", email: "neha.g@test.com", age: 31, amount: -500, status: "cancelled", city: "Pune" },
    { id: 105, name: "Amit Kumar", email: "amit@kumar.com", age: 45, amount: 950000, status: "completed", city: "Hyderabad" },
    { id: 106, name: "Sneha Rao", email: "sneha@rao.com", age: 29, amount: 3200, status: "unknown_status", city: null },
    { id: 107, name: "Vikram Singh", email: "vikram@singh.org", age: 142, amount: 4800, status: "completed", city: "Chennai" },
    { id: 108, name: "Pooja Mehta", email: "", age: 26, amount: 2100, status: "completed", city: "Kolkata" },
    { id: 101, name: "Rahul Sharma (Dup)", email: "rahul@example.com", age: 28, amount: 1500, status: "completed", city: "Mumbai" },
    { id: 109, name: "Karan Johar", email: "karan@bollywood.com", age: 51, amount: 12000, status: "completed", city: "Mumbai" }
  ], []);

  const [dimensionWeights, setDimensionWeights] = useState({
    accuracy: 20,
    completeness: 20,
    consistency: 15,
    uniqueness: 15,
    validity: 20,
    freshness: 10
  });

  const profileStats = useMemo(() => {
    const total = rawDataset.length;
    const nullEmails = rawDataset.filter(r => r.email === null || r.email === "").length;
    const nullCities = rawDataset.filter(r => r.city === null).length;
    const invalidAges = rawDataset.filter(r => r.age <= 0 || r.age > 120).length;
    const negativeAmounts = rawDataset.filter(r => r.amount < 0).length;
    const extremeOutliers = rawDataset.filter(r => r.amount > 50000).length;
    const invalidStatuses = rawDataset.filter(r => !["pending", "completed", "cancelled"].includes(r.status)).length;
    
    // Duplicates by ID
    const seenIds = new Set();
    let dupCount = 0;
    rawDataset.forEach(r => {
      if (seenIds.has(r.id)) dupCount++;
      else seenIds.add(r.id);
    });

    const completenessScore = Math.round(((total * 2 - (nullEmails + nullCities)) / (total * 2)) * 100);
    const uniquenessScore = Math.round(((total - dupCount) / total) * 100);
    const validityScore = Math.round(((total * 3 - (invalidAges + negativeAmounts + invalidStatuses)) / (total * 3)) * 100);
    const accuracyScore = Math.round(((total - extremeOutliers) / total) * 100);
    const consistencyScore = 95;
    const freshnessScore = 98;

    const totalWeight = Object.values(dimensionWeights).reduce((a, b) => a + b, 0);
    const weightedQualityScore = Math.round(
      (accuracyScore * dimensionWeights.accuracy +
       completenessScore * dimensionWeights.completeness +
       consistencyScore * dimensionWeights.consistency +
       uniquenessScore * dimensionWeights.uniqueness +
       validityScore * dimensionWeights.validity +
       freshnessScore * dimensionWeights.freshness) / (totalWeight || 1)
    );

    return {
      total,
      nullEmails,
      nullCities,
      invalidAges,
      negativeAmounts,
      extremeOutliers,
      invalidStatuses,
      dupCount,
      completenessScore,
      uniquenessScore,
      validityScore,
      accuracyScore,
      consistencyScore,
      freshnessScore,
      weightedQualityScore
    };
  }, [rawDataset, dimensionWeights]);

  // ==========================================
  // WORKBENCH 2: RULE-BASED VALIDATION & DLQ SIEVE
  // ==========================================
  const rawStreamRecords = useMemo(() => [
    { txId: "TX-501", customerId: 101, amount: 1500, currency: "INR", status: "completed", date: "2026-11-09", reason: null },
    { txId: "TX-502", customerId: 102, amount: -850, currency: "INR", status: "completed", date: "2026-11-09", reason: "RULE_FAIL: Amount cannot be negative (-850)" },
    { txId: "TX-503", customerId: null, amount: 2400, currency: "INR", status: "pending", date: "2026-11-09", reason: "RULE_FAIL: Missing customer_id" },
    { txId: "TX-504", customerId: 104, amount: 3100, currency: "USD", status: "disputed_chargeback", date: "2026-11-09", reason: "RULE_FAIL: Invalid status 'disputed_chargeback' not in enum" },
    { txId: "TX-505", customerId: 105, amount: 4900, currency: "INR", status: "completed", date: "2027-04-15", reason: "RULE_FAIL: Future transaction date (2027-04-15)" },
    { txId: "TX-506", customerId: 106, amount: 8200, currency: "EUR", status: "completed", date: "2026-11-09", reason: null },
    { txId: "TX-507", customerId: 107, amount: 120, currency: "INR", status: "cancelled", date: "2026-11-09", reason: null }
  ], []);

  const [streamFilter, setStreamFilter] = useState("all"); // 'all' | 'valid' | 'quarantine'

  const validatedStream = useMemo(() => {
    return rawStreamRecords.map(r => ({
      ...r,
      isValid: !r.reason,
      route: r.reason ? "DLQ Quarantine Table" : "Production Analytical Warehouse"
    }));
  }, [rawStreamRecords]);

  // ==========================================
  // WORKBENCH 3: STATISTICAL & ANOMALY DETECTOR
  // ==========================================
  const [zThreshold, setZThreshold] = useState(2.5);
  const sampleAmounts = useMemo(() => [120, 150, 135, 140, 160, 125, 130, 145, 155, 138, 980, 142, 128, 150, 132], []);

  const anomalyStats = useMemo(() => {
    const n = sampleAmounts.length;
    const mean = sampleAmounts.reduce((a, b) => a + b, 0) / n;
    const variance = sampleAmounts.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / n;
    const stdDev = Math.sqrt(variance);

    // IQR calculation
    const sorted = [...sampleAmounts].sort((a, b) => a - b);
    const q1 = sorted[Math.floor(n * 0.25)];
    const q3 = sorted[Math.floor(n * 0.75)];
    const iqr = q3 - q1;
    const lowerFence = Math.round(q1 - 1.5 * iqr);
    const upperFence = Math.round(q3 + 1.5 * iqr);

    const items = sampleAmounts.map(val => {
      const z = Number(((val - mean) / (stdDev || 1)).toFixed(2));
      const isZOutlier = Math.abs(z) >= zThreshold;
      const isIqrOutlier = val < lowerFence || val > upperFence;
      return { val, z, isZOutlier, isIqrOutlier };
    });

    return {
      mean: Math.round(mean),
      stdDev: Math.round(stdDev),
      q1,
      q3,
      iqr,
      lowerFence,
      upperFence,
      items
    };
  }, [sampleAmounts, zThreshold]);

  // Hourly volume anomaly
  const hourlyData = useMemo(() => [
    { hour: "09:00 AM", expected: 50000, actual: 49800, deviation: 0.4, status: "Normal" },
    { hour: "10:00 AM", expected: 50000, actual: 50200, deviation: 0.4, status: "Normal" },
    { hour: "11:00 AM", expected: 50000, actual: 7500, deviation: 85.0, status: "CRITICAL_ANOMALY" },
    { hour: "12:00 PM", expected: 50000, actual: 51000, deviation: 2.0, status: "Normal" }
  ], []);

  // ==========================================
  // WORKBENCH 4: RECONCILIATION & CHECKSUM AUDITOR
  // ==========================================
  const reconciliationData = useMemo(() => ({
    sourceCount: 10000,
    warehouseCount: 9800,
    countDiff: 200,
    sourceSum: 5000000,
    warehouseSum: 4950000,
    financialDiff: 50000,
    sourceChecksum: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    warehouseChecksum: "8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4",
    sampleDiscrepancies: [
      { orderId: 8042, sourceAmt: 25000, warehouseAmt: 0, reason: "Missing in warehouse (Dropped during staging)" },
      { orderId: 8043, sourceAmt: 15000, warehouseAmt: 10000, reason: "Amount mismatch (Double discount applied)" },
      { orderId: 8044, sourceAmt: 10000, warehouseAmt: 0, reason: "Failed referential integrity on customer_id 9999" }
    ]
  }), []);

  // ==========================================
  // WORKBENCH 5: LINEAGE & IMPACT ANALYSIS GRAPH
  // ==========================================
  const [selectedLineageColumn, setSelectedLineageColumn] = useState("raw_orders.amount");
  const [simulatedChange, setSimulatedChange] = useState("rename"); // 'rename' | 'drop' | 'type_change'

  const lineageNodes = useMemo(() => [
    { id: "CRM.customers", layer: "Source", desc: "PostgreSQL Production DB" },
    { id: "orders_db.raw_orders", layer: "Source", desc: "Kafka Order Events" },
    { id: "refunds_db.raw_refunds", layer: "Source", desc: "Payment Gateway Logs" },
    { id: "stg_customers", layer: "Staging", desc: "Deduplicated Customers" },
    { id: "stg_orders", layer: "Staging", desc: "Casted & Validated Orders" },
    { id: "stg_refunds", layer: "Staging", desc: "Cleaned Refunds" },
    { id: "dim_customers", layer: "Core Mart", desc: "Type 2 Customer Dimension" },
    { id: "fct_orders", layer: "Core Mart", desc: "Fact Orders with Line Items" },
    { id: "net_revenue", layer: "Metric", desc: "Gross - Discount - Refund" },
    { id: "Executive Dashboard", layer: "Consumer", desc: "Tableau / Looker Monthly KPI" },
    { id: "Finance Audit Report", layer: "Consumer", desc: "Automated Monthly Tax Filing" },
    { id: "Fraud ML Model", layer: "Consumer", desc: "Real-time Scoring Service" }
  ], []);

  const impactedDownstream = useMemo(() => {
    if (selectedLineageColumn === "raw_orders.amount") {
      return ["stg_orders", "fct_orders", "net_revenue", "Executive Dashboard", "Finance Audit Report"];
    } else if (selectedLineageColumn === "CRM.customers.id") {
      return ["stg_customers", "dim_customers", "fct_orders", "Executive Dashboard", "Fraud ML Model"];
    } else {
      return ["stg_refunds", "net_revenue", "Finance Audit Report"];
    }
  }, [selectedLineageColumn]);

  // ==========================================
  // WORKBENCH 6: DATA CONTRACTS & 15-Q QUIZ
  // ==========================================
  const sampleContractYaml = `# Production Data Contract v1.2
data_contract:
  name: payment_events
  version: 1.2
  domain: payments_engineering
  owner: payments_core_team@company.internal
  consumers:
    - analytics_engineering
    - fraud_detection_team
    - finance_audit_team
  schema:
    transaction_id:
      type: string
      required: true
      unique: true
    customer_id:
      type: integer
      required: true
    amount:
      type: decimal(18, 2)
      required: true
      minimum: 0.01
    currency:
      type: string
      required: true
      enum: [INR, USD, EUR, GBP]
    status:
      type: string
      required: true
      enum: [pending, completed, failed, refunded]
    event_timestamp:
      type: timestamp_tz
      required: true
  quality_slas:
    freshness_threshold: "5 minutes"
    uniqueness_target: "100%"
    maximum_null_rate: "0%"
  governance:
    classification: PII_CONFIDENTIAL
    change_policy: "Breaking changes require 30-day notice"`;

  const [copiedContract, setCopiedContract] = useState(false);
  const handleCopyContract = () => {
    navigator.clipboard.writeText(sampleContractYaml);
    setCopiedContract(true);
    setTimeout(() => setCopiedContract(false), 2000);
  };

  // 15 Comprehensive Curriculum Questions
  const quizQuestions = useMemo(() => [
    {
      id: 1,
      q: "What is the primary difference between Data Engineering and Data Quality Engineering?",
      options: [
        "Data engineering moves and transforms data, while data quality engineering verifies whether data is correct, dependable, and trustworthy",
        "Data engineering uses Python, while data quality engineering only uses Excel",
        "Data quality engineering replaces database administrators",
        "Data quality engineering only runs after data has reached the executive dashboard"
      ],
      correct: 0,
      expl: "Data engineering builds the pipelines to move and transform data; data quality engineering continuously verifies correctness, completeness, and dependability across the pipeline."
    },
    {
      id: 2,
      q: "Why is an age of 35 valid but potentially inaccurate in a customer profile?",
      options: [
        "Validity checks format/domain bounds (positive integer), whereas accuracy checks whether it reflects the actual real-world truth (the person might actually be 42)",
        "35 is an odd number, which databases reject",
        "Accuracy is only measured for financial amounts, never ages",
        "Validity only applies to JSON schemas"
      ],
      correct: 0,
      expl: "A value of 35 is valid because it conforms to the column type and logical range (0-120), but inaccurate if the person's real age is 42."
    },
    {
      id: 3,
      q: "In SQL, how does NULL differ from an empty string ('') or zero (0)?",
      options: [
        "NULL represents unknown or missing information, whereas zero is a valid numeric value and '' is a string containing zero characters",
        "SQL automatically converts NULL to zero in SUM() functions",
        "NULL and empty strings are identical in all relational databases",
        "Zero represents missing data in foreign keys"
      ],
      correct: 0,
      expl: "NULL means unknown or unavailable. Zero is a distinct numeric value, and an empty string is a present string with length 0."
    },
    {
      id: 4,
      q: "What is an 'orphan record' in referential integrity validation?",
      options: [
        "A child record (e.g. order) referencing a foreign key value that does not exist in the parent table (e.g. customers)",
        "A database table with no primary key",
        "A row that has been duplicated multiple times",
        "A query that runs without a WHERE clause"
      ],
      correct: 0,
      expl: "An orphan record occurs when a foreign key in a child table points to a non-existent primary key in the parent table."
    },
    {
      id: 5,
      q: "How does the ingestion delay formula determine pipeline freshness lag?",
      options: [
        "Freshness Delay = Ingestion Timestamp - Event Timestamp",
        "Freshness Delay = Total Records / Execution Time",
        "Freshness Delay = Primary Key - Foreign Key",
        "Freshness Delay = Upper Fence - Lower Fence"
      ],
      correct: 0,
      expl: "Freshness delay measures the elapsed time between when an event physically occurred at the source and when it was written to the data platform."
    },
    {
      id: 6,
      q: "Why is count reconciliation alone insufficient for verifying financial pipelines?",
      options: [
        "Record counts can match perfectly (e.g. 10,000 orders) while individual amounts differ, refunds are missed, or currencies are misinterpreted",
        "Count queries always lock production tables",
        "Financial data does not support COUNT() operations in SQL",
        "Only row hashes can be used in data warehouses"
      ],
      correct: 0,
      expl: "A pipeline can ingest 10,000 records on both sides, but if one side miscalculated currency or failed a discount subtraction, total revenue will diverge significantly."
    },
    {
      id: 7,
      q: "What is the Interquartile Range (IQR) fence formula for detecting numerical outliers?",
      options: [
        "Lower = Q1 - 1.5 * IQR, Upper = Q3 + 1.5 * IQR, where IQR = Q3 - Q1",
        "Upper = Mean + 3 * Standard Deviation",
        "Fence = Total Records / 100",
        "Fence = Max Value - Min Value"
      ],
      correct: 0,
      expl: "The standard Tukey IQR outlier fences place cutoffs at Q1 - 1.5(IQR) and Q3 + 1.5(IQR), making them robust against extreme skewed values."
    },
    {
      id: 8,
      q: "What is the purpose of a Quarantine / Dead-Letter Queue (DLQ) in data validation?",
      options: [
        "To isolate corrupt or invalid records into a separate table with error metadata for debugging and audit, preventing them from contaminating downstream tables",
        "To permanently delete invalid records without logging them",
        "To encrypt sensitive customer credit cards",
        "To speed up database indexing"
      ],
      correct: 0,
      expl: "Quarantine tables store rejected records along with the failure reason and timestamp, allowing engineers to audit, debug, or replay them after fixes."
    },
    {
      id: 9,
      q: "How does ROW_NUMBER() perform deterministic deduplication in SQL?",
      options: [
        "By partitioning by the business key and ordering by updated_at DESC (with a unique tie-breaker), filtering for row_num = 1",
        "By randomly dropping half of the duplicate rows",
        "By converting NULL values into empty strings",
        "By replacing the primary key with an MD5 hash"
      ],
      correct: 0,
      expl: "ROW_NUMBER() OVER (PARTITION BY business_key ORDER BY updated_at DESC, ingestion_id DESC) ranks records and enables filtering where row_num = 1."
    },
    {
      id: 10,
      q: "What is a Data Contract in modern data architecture?",
      options: [
        "A formal agreement between producers and consumers defining expected schema, semantics, quality SLAs, delivery frequency, and ownership",
        "A legal contract signed between AWS and Google Cloud",
        "A SQL constraint that prevents table creation",
        "A payment invoice sent to external data vendors"
      ],
      correct: 0,
      expl: "Data contracts create explicit agreements between upstream data producers and downstream consumers covering schema, SLAs, and change management."
    },
    {
      id: 11,
      q: "What is the difference between Technical Metadata and Business Metadata?",
      options: [
        "Technical metadata describes structure (data types, table names, partitions); business metadata defines meaning and governance (KPI formulas, domain ownership)",
        "Technical metadata is for managers; business metadata is for software engineers",
        "Technical metadata is stored in Git; business metadata is never documented",
        "Technical metadata only applies to NoSQL databases"
      ],
      correct: 0,
      expl: "Technical metadata covers table schema, columns, partitions, and storage formats; business metadata explains business definitions, metrics, and stewardship."
    },
    {
      id: 12,
      q: "What is Column-Level Lineage and why is it essential?",
      options: [
        "It tracks the exact source columns and transformation logic that derive an individual downstream metric (e.g. net_revenue = gross - discount - refund)",
        "It only lists the names of tables in an Airflow DAG",
        "It restricts who can execute SELECT queries",
        "It formats numbers into two decimal places"
      ],
      correct: 0,
      expl: "Column-level lineage provides fine-grained traceability showing how specific fields or calculated KPIs are constructed across multiple transformation stages."
    },
    {
      id: 13,
      q: "In data governance, how does a Data Owner differ from a Data Steward?",
      options: [
        "A Data Owner has business accountability and decision authority for a domain; a Data Steward manages day-to-day definitions, quality rules, and metadata",
        "A Data Owner is a software library; a Data Steward is an Airflow operator",
        "Data Owners write SQL scripts; Data Stewards only build dashboards",
        "There is no difference between the two roles"
      ],
      correct: 0,
      expl: "The Data Owner carries ultimate organizational accountability for the data asset, while the Data Steward handles operational quality, documentation, and compliance."
    },
    {
      id: 14,
      q: "What is Active Metadata compared to Passive Metadata?",
      options: [
        "Passive metadata merely displays catalog information; active metadata triggers automated actions (e.g. alert consumers, rerun quality tests, pause pipelines)",
        "Passive metadata is stored in memory; active metadata is stored in CSV files",
        "Passive metadata runs on Spark; active metadata runs on Postgres",
        "Active metadata refers to encrypted metadata"
      ],
      correct: 0,
      expl: "Active metadata actively listens to system events, automatically driving alerts, test triggers, optimization recommendations, and incident mitigation."
    },
    {
      id: 15,
      q: "Why is idempotency essential for pipeline failure recovery and data quality?",
      options: [
        "Because retrying a failed pipeline execution must produce the exact same outcome without inserting unintended duplicate records or double-counting metrics",
        "Because it makes SQL queries execute twice as fast",
        "Because it eliminates the need for schema validation",
        "Because it allows deleting foreign keys without breaking constraints"
      ],
      correct: 0,
      expl: "Idempotency ensures that running an operation multiple times (e.g. during automatic retries or manual backfills) produces the same consistent state as running it once."
    }
  ], []);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [selectedAnswers, quizQuestions]);

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setShowQuizResults(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans selection:bg-orange-500 selection:text-white pb-24">
      {/* Universal Module Navigation */}
      <ModuleNav currentModuleId="data-quality-lineage" />

      {/* Top Hero Section */}
      <header className="border-b border-[#e7e3da] bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
                  Module 14
                </span>
                <span className="text-stone-400 text-xs">•</span>
                <span className="text-stone-600 text-xs font-medium">Data Engineering Master Course</span>
                <span className="text-stone-400 text-xs">•</span>
                <span className="text-orange-600 text-xs font-bold">Advanced Level</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight flex items-center gap-3">
                <ShieldCheck className="text-[#f97316] w-8 h-8 sm:w-9 sm:h-9 shrink-0" />
                <span>Data Quality, Testing, Metadata & Lineage</span>
              </h1>
              <p className="text-stone-600 text-sm sm:text-base mt-1.5 max-w-4xl">
                The comprehensive handbook for production data trust: data profiling, rule-based validation, schema registries, referential integrity, automated testing, statistical anomaly detection, active metadata, data contracts, and column-level impact lineage.
              </p>
            </div>

            {/* Back button */}
            <div className="flex items-center gap-2">
              <button
                onClick={goBack}
                className="px-4 py-2 rounded-xl bg-white border border-[#e7e3da] text-stone-700 hover:bg-stone-50 font-semibold text-xs sm:text-sm shadow-sm transition flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
            </div>
          </div>

          {/* Master 2-Mode Switcher */}
          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#e7e3da] pt-4">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer ${
                activeTab === "curriculum"
                  ? "bg-orange-600 text-white shadow-sm"
                  : "bg-white text-stone-700 border border-[#e7e3da] hover:bg-stone-50"
              }`}
            >
              <BookOpen size={16} />
              <span>Specification & Blueprints (25 Sections)</span>
            </button>

            <button
              onClick={() => setActiveTab("workbench")}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer ${
                activeTab === "workbench"
                  ? "bg-orange-600 text-white shadow-sm"
                  : "bg-white text-stone-700 border border-[#e7e3da] hover:bg-stone-50"
              }`}
            >
              <Sparkles size={16} />
              <span>Interactive Workbenches (6)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ========================================================= */}
        {/* TAB 1: CURRICULUM MODE (100% VERBATIM TEXTBOOK BLUEPRINTS) */}
        {/* ========================================================= */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of contents sidebar */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-5 sticky top-32 shadow-sm space-y-4 max-h-[calc(100vh-160px)] overflow-y-auto [scrollbar-width:thin]">
                <div className="flex items-center gap-2 pb-2 border-b border-[#e7e3da]">
                  <FileText className="text-orange-600" size={18} />
                  <span className="font-bold text-sm text-stone-900 uppercase tracking-wide">
                    Module Index (25)
                  </span>
                </div>
                <nav className="space-y-1 text-xs">
                  <a href="#overview" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    0. Overview & Roadmap
                  </a>
                  <a href="#section-1" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    1. Introduction to Data Quality
                  </a>
                  <a href="#section-2" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    2. Dimensions of Data Quality
                  </a>
                  <a href="#section-3" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    3. Data Profiling
                  </a>
                  <a href="#section-4" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    4. Data Validation Techniques
                  </a>
                  <a href="#section-5" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    5. Schema Validation
                  </a>
                  <a href="#section-6" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    6. Null and Duplicate Detection
                  </a>
                  <a href="#section-7" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    7. Referential Integrity
                  </a>
                  <a href="#section-8" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    8. Data Freshness Checks
                  </a>
                  <a href="#section-9" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    9. Data Reconciliation
                  </a>
                  <a href="#section-10" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    10. Anomaly Detection
                  </a>
                  <a href="#section-11" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    11. Automated Quality Testing
                  </a>
                  <a href="#section-12" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    12. Unit and Integration Testing
                  </a>
                  <a href="#section-13" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    13. Pipeline Testing
                  </a>
                  <a href="#section-14" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    14. Data Contracts
                  </a>
                  <a href="#section-15" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    15. Metadata Management
                  </a>
                  <a href="#section-16" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    16. Data Catalog Architecture
                  </a>
                  <a href="#section-17" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    17. Lineage and Impact Analysis
                  </a>
                  <a href="#section-18" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    18. Ownership and Stewardship
                  </a>
                  <a href="#section-19" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    19. Quality Monitoring & Reporting
                  </a>
                  <a href="#section-20" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    20. Real-World Architecture
                  </a>
                  <a href="#section-21" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    21. Practical Laboratory
                  </a>
                  <a href="#section-22" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    22. Common Mistakes
                  </a>
                  <a href="#section-23" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    23. Interview Questions & Answers
                  </a>
                  <a href="#section-24" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    24. Final Revision Matrix
                  </a>
                  <a href="#section-25" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    25. Learning Resources
                  </a>
                </nav>
              </div>
            </aside>

            {/* Generated sections */}
            <div className="lg:col-span-3">
              <DataEngineeringQualitySections />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: INTERACTIVE WORKBENCHES (6 SPECIALIZED LABS)       */}
        {/* ========================================================= */}
        {activeTab === "workbench" && (
          <div className="space-y-8">
            {/* Workbench Navigation Pills */}
            <div className="flex flex-wrap items-center gap-2 bg-white p-3 rounded-2xl border border-[#e7e3da] shadow-sm">
              <button
                onClick={() => setActiveWorkbench("profiler")}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "profiler"
                    ? "bg-orange-600 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Activity size={16} />
                <span>1. Profiling & Health Scorer</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("sieve")}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "sieve"
                    ? "bg-orange-600 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Filter size={16} />
                <span>2. Rule Sieve & DLQ Quarantine</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("anomaly")}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "anomaly"
                    ? "bg-orange-600 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                <BarChart3 size={16} />
                <span>3. Anomaly & Time-Series Detector</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("reconciliation")}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "reconciliation"
                    ? "bg-orange-600 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Hash size={16} />
                <span>4. Source Reconciliation & Hashes</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("lineage")}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "lineage"
                    ? "bg-orange-600 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                <GitBranch size={16} />
                <span>5. Column Lineage & Impact Simulator</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("contracts_quiz")}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "contracts_quiz"
                    ? "bg-orange-600 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                <ShieldAlert size={16} />
                <span>6. Contracts & 15-Question Quiz</span>
              </button>
            </div>

            {/* ---------------------------------------------------- */}
            {/* WORKBENCH 1: DATA QUALITY PROFILER & HEALTH SCORER   */}
            {/* ---------------------------------------------------- */}
            {activeWorkbench === "profiler" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                        Workbench 1 · Dataset Health Profiling
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                        Data Quality Dimension Profiler & Health Scorer
                      </h2>
                      <p className="text-stone-600 text-xs sm:text-sm mt-1">
                        Inspect a realistic incoming dataset with real-world nulls, format violations, negative amounts, and duplicates. Adjust dimension weights to observe real-time health score changes.
                      </p>
                    </div>

                    {/* Overall Score Badge */}
                    <div className="flex items-center gap-3 bg-stone-50 border border-[#e7e3da] rounded-xl px-4 py-2.5">
                      <div className="text-right">
                        <div className="text-xs text-stone-500 font-semibold uppercase">Overall Quality</div>
                        <div className={`text-2xl font-black ${
                          profileStats.weightedQualityScore >= 90 ? "text-emerald-600" :
                          profileStats.weightedQualityScore >= 75 ? "text-amber-600" : "text-rose-600"
                        }`}>
                          {profileStats.weightedQualityScore}%
                        </div>
                      </div>
                      <div className={`w-3.5 h-3.5 rounded-full ${
                        profileStats.weightedQualityScore >= 90 ? "bg-emerald-500" :
                        profileStats.weightedQualityScore >= 75 ? "bg-amber-500" : "bg-rose-500"
                      }`} />
                    </div>
                  </div>

                  {/* 6 Dimension Score Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    <div className="p-3.5 rounded-xl bg-orange-50/50 border border-orange-200">
                      <div className="text-xs font-bold text-stone-600">Accuracy</div>
                      <div className="text-xl font-black text-stone-900 mt-1">{profileStats.accuracyScore}%</div>
                      <div className="text-[11px] text-stone-500 mt-1">Outliers: {profileStats.extremeOutliers}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-orange-50/50 border border-orange-200">
                      <div className="text-xs font-bold text-stone-600">Completeness</div>
                      <div className="text-xl font-black text-stone-900 mt-1">{profileStats.completenessScore}%</div>
                      <div className="text-[11px] text-stone-500 mt-1">Null emails: {profileStats.nullEmails}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-orange-50/50 border border-orange-200">
                      <div className="text-xs font-bold text-stone-600">Uniqueness</div>
                      <div className="text-xl font-black text-stone-900 mt-1">{profileStats.uniquenessScore}%</div>
                      <div className="text-[11px] text-stone-500 mt-1">Duplicate IDs: {profileStats.dupCount}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-orange-50/50 border border-orange-200">
                      <div className="text-xs font-bold text-stone-600">Validity</div>
                      <div className="text-xl font-black text-stone-900 mt-1">{profileStats.validityScore}%</div>
                      <div className="text-[11px] text-stone-500 mt-1">Range/Enum fails: {profileStats.invalidAges + profileStats.negativeAmounts}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-orange-50/50 border border-orange-200">
                      <div className="text-xs font-bold text-stone-600">Consistency</div>
                      <div className="text-xl font-black text-stone-900 mt-1">{profileStats.consistencyScore}%</div>
                      <div className="text-[11px] text-stone-500 mt-1">Standardized cities</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-orange-50/50 border border-orange-200">
                      <div className="text-xs font-bold text-stone-600">Freshness</div>
                      <div className="text-xl font-black text-stone-900 mt-1">{profileStats.freshnessScore}%</div>
                      <div className="text-[11px] text-stone-500 mt-1">Lag: 4.2 minutes</div>
                    </div>
                  </div>

                  {/* Weight Sliders */}
                  <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-800 uppercase tracking-wide flex items-center gap-1.5">
                        <SlidersVertical size={14} className="text-orange-600" />
                        Custom Dimension Weight Configuration
                      </span>
                      <button
                        onClick={() => setDimensionWeights({ accuracy: 20, completeness: 20, consistency: 15, uniqueness: 15, validity: 20, freshness: 10 })}
                        className="text-xs text-orange-600 hover:underline font-semibold cursor-pointer"
                      >
                        Reset Defaults
                      </button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                      {Object.keys(dimensionWeights).map(dim => (
                        <div key={dim} className="space-y-1">
                          <div className="flex justify-between text-xs text-stone-600 capitalize">
                            <span>{dim}</span>
                            <span className="font-bold">{dimensionWeights[dim]}%</span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="50"
                            value={dimensionWeights[dim]}
                            onChange={(e) => setDimensionWeights(prev => ({ ...prev, [dim]: Number(e.target.value) }))}
                            className="w-full accent-orange-600 cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sample Dataset Table */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-stone-700 flex items-center justify-between">
                      <span>Incoming Raw Customers & Orders Batch (10 Records)</span>
                      <span className="text-stone-500">Flags highlighted inline</span>
                    </div>
                    <div className="overflow-x-auto rounded-xl border border-[#e7e3da]">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                          <tr>
                            <th className="px-3 py-2.5">ID</th>
                            <th className="px-3 py-2.5">Customer Name</th>
                            <th className="px-3 py-2.5">Email</th>
                            <th className="px-3 py-2.5">Age</th>
                            <th className="px-3 py-2.5">Amount (₹)</th>
                            <th className="px-3 py-2.5">Status</th>
                            <th className="px-3 py-2.5">City</th>
                            <th className="px-3 py-2.5">Audit Note</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e7e3da]">
                          {rawDataset.map((row, idx) => {
                            const isDup = row.name.includes("Dup");
                            const isNullEmail = row.email === null || row.email === "";
                            const isBadAge = row.age <= 0 || row.age > 120;
                            const isNegAmount = row.amount < 0;
                            const isExtreme = row.amount > 100000;
                            const isBadStatus = !["pending", "completed", "cancelled"].includes(row.status);

                            return (
                              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#fcfbf9]"}>
                                <td className={`px-3 py-2 font-mono font-bold ${isDup ? "text-rose-600 bg-rose-50" : "text-stone-800"}`}>
                                  {row.id}
                                </td>
                                <td className="px-3 py-2 text-stone-800 font-medium">{row.name}</td>
                                <td className={`px-3 py-2 ${isNullEmail ? "text-rose-600 font-bold bg-rose-50/60" : "text-stone-600"}`}>
                                  {row.email === null ? "NULL" : row.email === "" ? "'' (Empty String)" : row.email}
                                </td>
                                <td className={`px-3 py-2 ${isBadAge ? "text-rose-600 font-bold bg-rose-50/60" : "text-stone-700"}`}>
                                  {row.age}
                                </td>
                                <td className={`px-3 py-2 font-mono ${isNegAmount || isExtreme ? "text-rose-600 font-bold bg-rose-50/60" : "text-stone-700"}`}>
                                  ₹{row.amount.toLocaleString()}
                                </td>
                                <td className={`px-3 py-2 ${isBadStatus ? "text-rose-600 font-bold bg-rose-50/60" : "text-stone-700"}`}>
                                  {row.status}
                                </td>
                                <td className="px-3 py-2 text-stone-600">{row.city || "NULL"}</td>
                                <td className="px-3 py-2 text-[11px]">
                                  {isDup && <span className="text-rose-600 font-semibold">[Duplicate ID] </span>}
                                  {isNullEmail && <span className="text-amber-600 font-semibold">[Missing Email] </span>}
                                  {isBadAge && <span className="text-rose-600 font-semibold">[Invalid Age Range] </span>}
                                  {isNegAmount && <span className="text-rose-600 font-semibold">[Negative Amount] </span>}
                                  {isExtreme && <span className="text-purple-600 font-semibold">[Statistical Outlier] </span>}
                                  {isBadStatus && <span className="text-rose-600 font-semibold">[Invalid Status Enum] </span>}
                                  {!isDup && !isNullEmail && !isBadAge && !isNegAmount && !isExtreme && !isBadStatus && (
                                    <span className="text-emerald-600 font-medium">Valid</span>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------- */}
            {/* WORKBENCH 2: RULE-BASED VALIDATION & QUARANTINE DLQ  */}
            {/* ---------------------------------------------------- */}
            {activeWorkbench === "sieve" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                        Workbench 2 · Stream Sieve
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                        Live Rule-Based Validation & Quarantine (DLQ) Sieve
                      </h2>
                      <p className="text-stone-600 text-xs sm:text-sm mt-1">
                        Demonstrates real-world stream processing: valid transactions move directly into warehouse fact tables, while rule-violating transactions are safely diverted into the Dead-Letter Queue (DLQ) for audit.
                      </p>
                    </div>

                    {/* Filter controls */}
                    <div className="flex items-center gap-1.5 bg-[#faf8f5] p-1 rounded-xl border border-[#e7e3da]">
                      <button
                        onClick={() => setStreamFilter("all")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                          streamFilter === "all" ? "bg-stone-900 text-white" : "text-stone-600 hover:bg-stone-200"
                        }`}
                      >
                        All (7)
                      </button>
                      <button
                        onClick={() => setStreamFilter("valid")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                          streamFilter === "valid" ? "bg-emerald-600 text-white" : "text-stone-600 hover:bg-stone-200"
                        }`}
                      >
                        Valid (3)
                      </button>
                      <button
                        onClick={() => setStreamFilter("quarantine")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                          streamFilter === "quarantine" ? "bg-rose-600 text-white" : "text-stone-600 hover:bg-stone-200"
                        }`}
                      >
                        Quarantined DLQ (4)
                      </button>
                    </div>
                  </div>

                  {/* 4 Active Validation Rules */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                      <div className="font-bold text-stone-800 flex items-center gap-1.5">
                        <CheckCircle size={14} className="text-emerald-600" />
                        Rule 1: Domain Check
                      </div>
                      <div className="font-mono text-stone-600">amount &gt; 0</div>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                      <div className="font-bold text-stone-800 flex items-center gap-1.5">
                        <CheckCircle size={14} className="text-emerald-600" />
                        Rule 2: Not-Null Check
                      </div>
                      <div className="font-mono text-stone-600">customer_id IS NOT NULL</div>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                      <div className="font-bold text-stone-800 flex items-center gap-1.5">
                        <CheckCircle size={14} className="text-emerald-600" />
                        Rule 3: Enum Constraint
                      </div>
                      <div className="font-mono text-stone-600">status IN ('pending', 'completed', 'cancelled')</div>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                      <div className="font-bold text-stone-800 flex items-center gap-1.5">
                        <CheckCircle size={14} className="text-emerald-600" />
                        Rule 4: Freshness Bounds
                      </div>
                      <div className="font-mono text-stone-600">order_date &lt;= CURRENT_DATE</div>
                    </div>
                  </div>

                  {/* Sieve Table */}
                  <div className="overflow-x-auto rounded-xl border border-[#e7e3da]">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                        <tr>
                          <th className="px-3 py-2.5">TX ID</th>
                          <th className="px-3 py-2.5">Customer ID</th>
                          <th className="px-3 py-2.5">Amount</th>
                          <th className="px-3 py-2.5">Currency</th>
                          <th className="px-3 py-2.5">Status</th>
                          <th className="px-3 py-2.5">Date</th>
                          <th className="px-3 py-2.5">Routing Destination</th>
                          <th className="px-3 py-2.5">Validation Reason</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#e7e3da]">
                        {validatedStream
                          .filter(r => {
                            if (streamFilter === "valid") return r.isValid;
                            if (streamFilter === "quarantine") return !r.isValid;
                            return true;
                          })
                          .map((row, idx) => (
                            <tr key={idx} className={row.isValid ? "bg-white hover:bg-emerald-50/20" : "bg-rose-50/30 hover:bg-rose-50/50"}>
                              <td className="px-3 py-2 font-mono font-bold text-stone-900">{row.txId}</td>
                              <td className="px-3 py-2 font-mono text-stone-700">{row.customerId || "NULL"}</td>
                              <td className={`px-3 py-2 font-mono ${row.amount < 0 ? "text-rose-600 font-bold" : "text-stone-700"}`}>
                                {row.amount}
                              </td>
                              <td className="px-3 py-2 text-stone-600">{row.currency}</td>
                              <td className="px-3 py-2">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  row.status === "completed" ? "bg-emerald-100 text-emerald-800" :
                                  row.status === "pending" ? "bg-amber-100 text-amber-800" :
                                  row.status === "cancelled" ? "bg-stone-200 text-stone-700" : "bg-rose-100 text-rose-800"
                                }`}>
                                  {row.status}
                                </span>
                              </td>
                              <td className="px-3 py-2 text-stone-600">{row.date}</td>
                              <td className="px-3 py-2">
                                <span className={`px-2 py-0.5 rounded font-bold text-[11px] flex items-center gap-1 w-fit ${
                                  row.isValid ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                                }`}>
                                  {row.isValid ? <CheckCircle size={12} /> : <AlertTriangle size={12} />}
                                  {row.route}
                                </span>
                              </td>
                              <td className="px-3 py-2 font-mono text-[11px] text-stone-600">
                                {row.reason || <span className="text-emerald-700">All 4 rules satisfied</span>}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------- */}
            {/* WORKBENCH 3: ANOMALY & TIME-SERIES DETECTOR          */}
            {/* ---------------------------------------------------- */}
            {activeWorkbench === "anomaly" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                      Workbench 3 · Statistical Outliers
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Statistical (Z-Score & IQR) & Time-Series Anomaly Detector
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1">
                      Discover both statistical outliers in continuous numerical fields and dramatic hourly volume drops in ingestion pipelines using mathematical formulas.
                    </p>
                  </div>

                  {/* Part A: Z-Score & IQR Outliers */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500" />
                        Part A: Mathematical Z-Score & Interquartile Range (IQR) Analysis
                      </h3>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-stone-600">Z-Score Cutoff:</span>
                        <input
                          type="range"
                          min="1.5"
                          max="4.0"
                          step="0.1"
                          value={zThreshold}
                          onChange={(e) => setZThreshold(Number(e.target.value))}
                          className="accent-orange-600 cursor-pointer"
                        />
                        <span className="font-mono font-bold text-orange-600">|Z| &ge; {zThreshold}</span>
                      </div>
                    </div>

                    {/* Stats Summary Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#e7e3da]">
                        <div className="text-stone-500">Sample Mean (&mu;)</div>
                        <div className="text-lg font-bold text-stone-900 mt-0.5">₹{anomalyStats.mean}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#e7e3da]">
                        <div className="text-stone-500">Std Deviation (&sigma;)</div>
                        <div className="text-lg font-bold text-stone-900 mt-0.5">&plusmn;₹{anomalyStats.stdDev}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#e7e3da]">
                        <div className="text-stone-500">IQR (Q3 - Q1)</div>
                        <div className="text-lg font-bold text-stone-900 mt-0.5">₹{anomalyStats.iqr}</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#e7e3da]">
                        <div className="text-stone-500">IQR Fences [Lower, Upper]</div>
                        <div className="text-lg font-bold text-stone-900 mt-0.5">[{anomalyStats.lowerFence}, {anomalyStats.upperFence}]</div>
                      </div>
                    </div>

                    {/* Numerical items pills */}
                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-2">
                      <div className="text-xs text-stone-600 font-semibold">Evaluated Transaction Amounts:</div>
                      <div className="flex flex-wrap gap-2">
                        {anomalyStats.items.map((item, idx) => (
                          <div
                            key={idx}
                            className={`px-3 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1.5 ${
                              item.isZOutlier
                                ? "bg-rose-100 border-rose-300 text-rose-800 font-bold"
                                : "bg-white border-[#e7e3da] text-stone-800"
                            }`}
                          >
                            <span>₹{item.val}</span>
                            <span className="text-[10px] opacity-70">(Z: {item.z})</span>
                            {item.isZOutlier && <AlertTriangle size={12} className="text-rose-600" />}
                          </div>
                        ))}
                      </div>
                      <p className="text-[11px] text-stone-500 mt-1">
                        Notice how ₹980 has a Z-score of +3.82 and lies far above the upper IQR fence (₹193), triggering both statistical alarms.
                      </p>
                    </div>
                  </div>

                  {/* Part B: Time-Series Ingestion Volume Anomaly */}
                  <div className="space-y-3 pt-4 border-t border-[#e7e3da]">
                    <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500" />
                      Part B: Time-Series Pipeline Ingestion Volume Monitoring
                    </h3>
                    <div className="overflow-x-auto rounded-xl border border-[#e7e3da]">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                          <tr>
                            <th className="px-3 py-2.5">Hour Window</th>
                            <th className="px-3 py-2.5">Expected Volume</th>
                            <th className="px-3 py-2.5">Actual Ingested Volume</th>
                            <th className="px-3 py-2.5">Volume Deviation Formula</th>
                            <th className="px-3 py-2.5">Deviation %</th>
                            <th className="px-3 py-2.5">Health State</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e7e3da]">
                          {hourlyData.map((row, idx) => (
                            <tr key={idx} className={row.status === "CRITICAL_ANOMALY" ? "bg-rose-50/70" : "bg-white"}>
                              <td className="px-3 py-2 font-mono font-bold text-stone-900">{row.hour}</td>
                              <td className="px-3 py-2 font-mono text-stone-700">{row.expected.toLocaleString()}</td>
                              <td className="px-3 py-2 font-mono font-bold text-stone-900">{row.actual.toLocaleString()}</td>
                              <td className="px-3 py-2 font-mono text-[11px] text-stone-500">
                                |{row.actual} - {row.expected}| / {row.expected} * 100
                              </td>
                              <td className={`px-3 py-2 font-mono font-bold ${row.deviation > 50 ? "text-rose-600" : "text-stone-700"}`}>
                                {row.deviation}%
                              </td>
                              <td className="px-3 py-2">
                                <span className={`px-2 py-0.5 rounded font-bold text-[11px] ${
                                  row.status === "CRITICAL_ANOMALY" ? "bg-rose-200 text-rose-900" : "bg-emerald-100 text-emerald-800"
                                }`}>
                                  {row.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------- */}
            {/* WORKBENCH 4: RECONCILIATION & CHECKSUM AUDITOR       */}
            {/* ---------------------------------------------------- */}
            {activeWorkbench === "reconciliation" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                      Workbench 4 · Source vs Warehouse
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Source-to-Warehouse Reconciliation & Checksum Auditor
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1">
                      Compare transactional production data with data warehouse storage. Detect missing rows, financial balance discrepancies, and payload hash mismatches.
                    </p>
                  </div>

                  {/* Summary Comparison Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Count Reconciliation */}
                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-2">
                      <div className="text-xs font-bold text-stone-600 uppercase tracking-wide">1. Record Count Reconciliation</div>
                      <div className="flex justify-between items-center text-sm pt-1">
                        <span className="text-stone-600">Source:</span>
                        <span className="font-mono font-bold text-stone-900">{reconciliationData.sourceCount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-stone-600">Warehouse:</span>
                        <span className="font-mono font-bold text-stone-900">{reconciliationData.warehouseCount.toLocaleString()}</span>
                      </div>
                      <div className="pt-2 border-t border-[#e7e3da] flex justify-between items-center text-xs font-bold">
                        <span className="text-rose-600">Discrepancy:</span>
                        <span className="text-rose-600 font-mono">-{reconciliationData.countDiff} records (2.0%)</span>
                      </div>
                    </div>

                    {/* Financial Reconciliation */}
                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-2">
                      <div className="text-xs font-bold text-stone-600 uppercase tracking-wide">2. Financial Revenue Audit</div>
                      <div className="flex justify-between items-center text-sm pt-1">
                        <span className="text-stone-600">Source Revenue:</span>
                        <span className="font-mono font-bold text-stone-900">₹{reconciliationData.sourceSum.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-stone-600">Warehouse Revenue:</span>
                        <span className="font-mono font-bold text-stone-900">₹{reconciliationData.warehouseSum.toLocaleString()}</span>
                      </div>
                      <div className="pt-2 border-t border-[#e7e3da] flex justify-between items-center text-xs font-bold">
                        <span className="text-rose-600">Financial Leakage:</span>
                        <span className="text-rose-600 font-mono">-₹{reconciliationData.financialDiff.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Checksum Hash Verification */}
                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-2">
                      <div className="text-xs font-bold text-stone-600 uppercase tracking-wide">3. SHA-256 Batch Fingerprint</div>
                      <div className="space-y-1 text-[11px] font-mono">
                        <div className="text-stone-500">Source Checksum:</div>
                        <div className="text-emerald-700 truncate">{reconciliationData.sourceChecksum}</div>
                        <div className="text-stone-500 mt-1">Warehouse Checksum:</div>
                        <div className="text-rose-700 truncate">{reconciliationData.warehouseChecksum}</div>
                      </div>
                      <div className="pt-2 border-t border-[#e7e3da] text-xs font-bold text-rose-600 flex items-center gap-1">
                        <AlertTriangle size={12} />
                        <span>Hash Mismatch: Data Corrupted in Transit</span>
                      </div>
                    </div>
                  </div>

                  {/* Sample Discrepancies Table */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                      Identified Record-Level Discrepancies
                    </h3>
                    <div className="overflow-x-auto rounded-xl border border-[#e7e3da]">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                          <tr>
                            <th className="px-3 py-2.5">Order ID</th>
                            <th className="px-3 py-2.5">Source Amount</th>
                            <th className="px-3 py-2.5">Warehouse Amount</th>
                            <th className="px-3 py-2.5">Root Cause Diagnostic</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e7e3da]">
                          {reconciliationData.sampleDiscrepancies.map((d, idx) => (
                            <tr key={idx} className="bg-white">
                              <td className="px-3 py-2 font-mono font-bold text-stone-900">#{d.orderId}</td>
                              <td className="px-3 py-2 font-mono text-emerald-700 font-semibold">₹{d.sourceAmt.toLocaleString()}</td>
                              <td className="px-3 py-2 font-mono text-rose-700 font-semibold">₹{d.warehouseAmt.toLocaleString()}</td>
                              <td className="px-3 py-2 text-stone-700">{d.reason}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------- */}
            {/* WORKBENCH 5: LINEAGE & IMPACT SIMULATOR              */}
            {/* ---------------------------------------------------- */}
            {activeWorkbench === "lineage" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                      Workbench 5 · Column-Level Lineage
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Data Lineage & Column-Level Blast Radius Simulator
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1">
                      Select an upstream column or table to simulate schema changes. The interactive graph computes the blast radius, showing every impacted downstream model, metric, and dashboard.
                    </p>
                  </div>

                  {/* Simulator Controls */}
                  <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-stone-700">Target Field:</span>
                      <select
                        value={selectedLineageColumn}
                        onChange={(e) => setSelectedLineageColumn(e.target.value)}
                        className="px-3 py-1.5 rounded-lg border border-[#e7e3da] bg-white text-xs font-mono font-bold text-stone-800 cursor-pointer"
                      >
                        <option value="raw_orders.amount">raw_orders.amount (Order Price)</option>
                        <option value="CRM.customers.id">CRM.customers.id (Customer Key)</option>
                        <option value="raw_refunds.amount">raw_refunds.amount (Refund Value)</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-stone-700">Simulate Mutation:</span>
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => setSimulatedChange("rename")}
                          className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                            simulatedChange === "rename" ? "bg-orange-600 text-white" : "bg-white border border-[#e7e3da] text-stone-700"
                          }`}
                        >
                          Rename Field
                        </button>
                        <button
                          onClick={() => setSimulatedChange("drop")}
                          className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                            simulatedChange === "drop" ? "bg-rose-600 text-white" : "bg-white border border-[#e7e3da] text-stone-700"
                          }`}
                        >
                          Drop Field
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Visual Lineage Nodes Grid */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-stone-800 flex items-center justify-between">
                      <span>End-to-End Lineage Flow</span>
                      <span className="text-xs text-rose-600 font-bold">
                        Impacted Nodes ({impactedDownstream.length}) Highlighted
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {lineageNodes.map((node) => {
                        const isImpacted = impactedDownstream.includes(node.id);
                        return (
                          <div
                            key={node.id}
                            className={`p-3.5 rounded-xl border transition ${
                              isImpacted
                                ? "bg-rose-50 border-rose-300 ring-2 ring-rose-400/40"
                                : "bg-white border-[#e7e3da]"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-700">
                                {node.layer}
                              </span>
                              {isImpacted && (
                                <span className="text-rose-600 text-[10px] font-black uppercase flex items-center gap-1">
                                  <AlertOctagon size={12} />
                                  Broken
                                </span>
                              )}
                            </div>
                            <div className="font-mono text-xs font-bold text-stone-900 mt-2">{node.id}</div>
                            <div className="text-[11px] text-stone-500 mt-0.5">{node.desc}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Impact Summary Diagnostic */}
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 space-y-1 text-xs">
                    <div className="font-bold flex items-center gap-1.5">
                      <AlertTriangle size={14} className="text-rose-600" />
                      Blast Radius Severity: CRITICAL BREAKING CHANGE
                    </div>
                    <p className="leading-relaxed">
                      Mutating <code>{selectedLineageColumn}</code> breaks <strong>{impactedDownstream.length} downstream components</strong>, directly invalidating the <em>Executive Revenue Dashboard</em> and corporate <em>Finance Audit Report</em>. A 30-day migration contract and semantic version bump are mandatory.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------- */}
            {/* WORKBENCH 6: DATA CONTRACTS & 15-QUESTION QUIZ       */}
            {/* ---------------------------------------------------- */}
            {activeWorkbench === "contracts_quiz" && (
              <div className="space-y-8">
                {/* Contract Spec Editor */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                        Workbench 6 · Contracts & Assessment
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                        Production Data Contract Specification Studio
                      </h2>
                      <p className="text-stone-600 text-xs sm:text-sm mt-1">
                        Review the formal data contract enforcing schema guarantees, semantic constraints, SLA freshness targets, and consumer registrations.
                      </p>
                    </div>

                    <button
                      onClick={handleCopyContract}
                      className="px-3.5 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-700 hover:bg-orange-100 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedContract ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedContract ? "Copied!" : "Copy YAML Contract"}</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800">
                    <pre className="overflow-x-auto [scrollbar-width:thin]">
                      <code>{sampleContractYaml}</code>
                    </pre>
                  </div>
                </div>

                {/* 15-Question Curriculum Mastery Quiz */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
                        Curriculum Assessment
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                        15-Question Data Quality & Governance Mastery Quiz
                      </h2>
                      <p className="text-stone-600 text-xs sm:text-sm mt-1">
                        Test your technical understanding across profiling, validation rules, schema evolution, referential integrity, anomaly detection, metadata, and contracts.
                      </p>
                    </div>

                    {showQuizResults ? (
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-xs text-stone-500 font-semibold">Your Score</div>
                          <div className={`text-xl font-black ${
                            quizScore >= 12 ? "text-emerald-600" :
                            quizScore >= 9 ? "text-amber-600" : "text-rose-600"
                          }`}>
                            {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                          </div>
                        </div>
                        <button
                          onClick={handleResetQuiz}
                          className="px-3.5 py-2 rounded-xl bg-stone-100 border border-stone-300 text-stone-700 hover:bg-stone-200 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <RotateCcw size={14} />
                          <span>Retake</span>
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setShowQuizResults(true)}
                        disabled={Object.keys(selectedAnswers).length === 0}
                        className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-sm transition disabled:opacity-50 cursor-pointer"
                      >
                        Submit Answers ({Object.keys(selectedAnswers).length}/{quizQuestions.length})
                      </button>
                    )}
                  </div>

                  {/* Questions List */}
                  <div className="space-y-6">
                    {quizQuestions.map((q, idx) => {
                      const isAnswered = selectedAnswers[q.id] !== undefined;
                      const selectedOpt = selectedAnswers[q.id];
                      const isCorrect = selectedOpt === q.correct;

                      return (
                        <div key={q.id} className="p-4 sm:p-5 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-3">
                          <div className="flex items-start gap-2.5">
                            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
                              {q.q}
                            </span>
                          </div>

                          {/* Options */}
                          <div className="space-y-2 pt-1 pl-8">
                            {q.options.map((opt, optIdx) => {
                              const isThisSelected = selectedOpt === optIdx;
                              let optClass = "bg-white border-[#e7e3da] text-stone-700 hover:bg-stone-50";

                              if (showQuizResults) {
                                if (optIdx === q.correct) {
                                  optClass = "bg-emerald-50 border-emerald-300 text-emerald-900 font-bold";
                                } else if (isThisSelected && !isCorrect) {
                                  optClass = "bg-rose-50 border-rose-300 text-rose-900";
                                } else {
                                  optClass = "bg-white border-[#e7e3da] text-stone-400 opacity-60";
                                }
                              } else if (isThisSelected) {
                                optClass = "bg-orange-50 border-orange-400 text-orange-950 font-semibold ring-1 ring-orange-300";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => !showQuizResults && handleSelectAnswer(q.id, optIdx)}
                                  disabled={showQuizResults}
                                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition flex items-center justify-between gap-3 cursor-pointer ${optClass}`}
                                >
                                  <span>{opt}</span>
                                  {showQuizResults && optIdx === q.correct && (
                                    <CheckCircle size={16} className="text-emerald-600 shrink-0" />
                                  )}
                                  {showQuizResults && isThisSelected && !isCorrect && (
                                    <AlertTriangle size={16} className="text-rose-600 shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {/* Explanation */}
                          {showQuizResults && (
                            <div className="mt-3 ml-8 p-3 rounded-lg bg-orange-50/70 border border-orange-200 text-stone-800 text-xs leading-relaxed">
                              <span className="font-bold text-orange-900">Explanation: </span>
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
      </main>
    </div>
  );
}
