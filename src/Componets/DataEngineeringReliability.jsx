// projectx/src/Componets/DataEngineeringReliability.jsx
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
  Square
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import { ReliabilitySection, reliabilitySectionsMeta } from "./DataEngineeringReliabilitySections";

export default function DataEngineeringReliability() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("freshness_volume_engine");
  // 'freshness_volume_engine' | 'circuit_breaker_lab' | 'dr_rpo_rto_simulator' | 'query_optimizer_lab' | 'error_budget_calculator' | 'production_readiness_quiz'

  // Curriculum section state
  const [activeSectionId, setActiveSectionId] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtered sections for curriculum
  const categories = useMemo(() => {
    const set = new Set(reliabilitySectionsMeta.map((s) => s.category));
    return ["all", ...Array.from(set)];
  }, []);

  const filteredSections = useMemo(() => {
    return reliabilitySectionsMeta.filter((s) => {
      const matchCat =
        selectedCategory === "all" || s.category === selectedCategory;
      const matchQuery =
        !searchQuery ||
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  // --------------------------------------------------------------------------
  // WORKBENCH 1: Freshness & Volume Anomaly Detector
  // --------------------------------------------------------------------------
  const [selectedDataset, setSelectedDataset] = useState("sales_summary");
  const [elapsedMinutes, setElapsedMinutes] = useState(24);
  const [freshnessSloMinutes, setFreshnessSloMinutes] = useState(15);
  const [todayVolume, setTodayVolume] = useState(15000);
  const histMean = 100000;
  const histStdDev = 5000;

  const freshnessStatus = useMemo(() => {
    if (elapsedMinutes <= freshnessSloMinutes) {
      return { status: "HEALTHY", color: "text-emerald-700 bg-emerald-50 border-emerald-300", badge: "Within SLO" };
    }
    if (elapsedMinutes <= freshnessSloMinutes * 2) {
      return { status: "WARNING", color: "text-amber-800 bg-amber-50 border-amber-300", badge: "Degraded SLA" };
    }
    return { status: "CRITICAL BREACH", color: "text-red-800 bg-red-50 border-red-300", badge: "SLO Breached" };
  }, [elapsedMinutes, freshnessSloMinutes]);

  const volumeZScore = useMemo(() => {
    return ((todayVolume - histMean) / histStdDev).toFixed(2);
  }, [todayVolume]);

  const isVolumeAnomaly = useMemo(() => {
    return Math.abs(parseFloat(volumeZScore)) >= 3.0;
  }, [volumeZScore]);

  // --------------------------------------------------------------------------
  // WORKBENCH 2: Retry Policy & Circuit Breaker State Machine
  // --------------------------------------------------------------------------
  const [cbState, setCbState] = useState("CLOSED"); // 'CLOSED' | 'OPEN' | 'HALF_OPEN'
  const [consecutiveFailures, setConsecutiveFailures] = useState(0);
  const [cbLogs, setCbLogs] = useState([
    "[Circuit Breaker] Initialized in CLOSED state. Requests flow freely to Payment API."
  ]);
  const [retryAttempt, setRetryAttempt] = useState(0);

  const simulateApiCall = (success) => {
    if (cbState === "OPEN") {
      setCbLogs((prev) => [
        ...prev,
        "🛑 FAST-FAIL: Request rejected immediately by Circuit Breaker (State: OPEN). No downstream network calls made."
      ]);
      return;
    }

    if (success) {
      setConsecutiveFailures(0);
      setRetryAttempt(0);
      if (cbState === "HALF_OPEN") {
        setCbState("CLOSED");
        setCbLogs((prev) => [
          ...prev,
          "✅ Canary probe succeeded! Circuit Breaker reset to CLOSED state."
        ]);
      } else {
        setCbLogs((prev) => [...prev, "HTTP 200 OK: Processed transaction successfully."]);
      }
    } else {
      const nextFail = consecutiveFailures + 1;
      const nextRetry = retryAttempt + 1;
      setConsecutiveFailures(nextFail);
      setRetryAttempt(nextRetry);

      const delaySeconds = Math.min(32, Math.pow(2, nextRetry) * 2);
      setCbLogs((prev) => [
        ...prev,
        `❌ HTTP 503 Service Unavailable: Attempt ${nextRetry} failed. Exponential Backoff Delay: ${delaySeconds}s (with randomized jitter).`
      ]);

      if (nextFail >= 3) {
        setCbState("OPEN");
        setCbLogs((prev) => [
          ...prev,
          "⚡ THRESHOLD EXCEEDED: 3 consecutive failures. Circuit Breaker tripped to OPEN! Blocking traffic for 30s to prevent API meltdown."
        ]);
      }
    }
  };

  const probeCircuitBreaker = () => {
    setCbState("HALF_OPEN");
    setCbLogs((prev) => [
      ...prev,
      "🔍 Cooldown period elapsed. Transitioning to HALF-OPEN to send 1 test probe request..."
    ]);
  };

  // --------------------------------------------------------------------------
  // WORKBENCH 3: Disaster Recovery, RPO & RTO Simulator
  // --------------------------------------------------------------------------
  const [drTier, setDrTier] = useState("pilot_light"); // 'backup_restore' | 'pilot_light' | 'warm_standby' | 'multi_region'
  const [isSimulatingDisaster, setIsSimulatingDisaster] = useState(false);
  const [disasterSimulationResult, setDisasterSimulationResult] = useState(null);

  const drProfiles = {
    backup_restore: { name: "Backup & Restore", rpoMin: 1440, rtoMin: 720, costFactor: "1x Baseline" },
    pilot_light: { name: "Pilot Light", rpoMin: 15, rtoMin: 60, costFactor: "1.4x" },
    warm_standby: { name: "Warm Standby", rpoMin: 5, rtoMin: 15, costFactor: "2.1x" },
    multi_region: { name: "Multi-Region Active-Active", rpoMin: 0.1, rtoMin: 1, costFactor: "3.5x" }
  };

  const runDisasterSimulation = () => {
    setIsSimulatingDisaster(true);
    setDisasterSimulationResult(null);

    setTimeout(() => {
      const profile = drProfiles[drTier];
      const targetRpo = 15; // 15 mins target
      const targetRto = 30; // 30 mins target

      const rpoMet = profile.rpoMin <= targetRpo;
      const rtoMet = profile.rtoMin <= targetRto;

      setDisasterSimulationResult({
        profile,
        rpoAchieved: profile.rpoMin,
        rtoAchieved: profile.rtoMin,
        compliant: rpoMet && rtoMet,
        summary: rpoMet && rtoMet
          ? `Disaster Recovery Successful: Failover to Secondary Region achieved RPO of ${profile.rpoMin}m and RTO of ${profile.rtoMin}m, satisfying enterprise requirements.`
          : `Disaster Recovery Target Missed: Achieved RTO (${profile.rtoMin}m) or RPO (${profile.rpoMin}m) exceeded enterprise SLA limits (RPO: 15m, RTO: 30m).`
      });
      setIsSimulatingDisaster(false);
    }, 800);
  };

  // --------------------------------------------------------------------------
  // WORKBENCH 4: Query Execution Plan & Partition Pruning Visualizer
  // --------------------------------------------------------------------------
  const [queryMode, setQueryMode] = useState("optimized"); // 'naive' | 'optimized'

  // --------------------------------------------------------------------------
  // WORKBENCH 5: SLI, SLO & Error Budget Exhaustion Calculator
  // --------------------------------------------------------------------------
  const [targetSloPct, setTargetSloPct] = useState(99.9); // 99.9%, 99.5%, 99.0%
  const [consumedOutageMins, setConsumedOutageMins] = useState(18);
  const totalPeriodMins = 43200; // 30 days * 24 hours * 60 mins

  const totalErrorBudgetMins = useMemo(() => {
    const unreliabilityPct = (100 - targetSloPct) / 100;
    return parseFloat((totalPeriodMins * unreliabilityPct).toFixed(1));
  }, [targetSloPct]);

  const remainingBudgetMins = useMemo(() => {
    return parseFloat((totalErrorBudgetMins - consumedOutageMins).toFixed(1));
  }, [totalErrorBudgetMins, consumedOutageMins]);

  const budgetPctRemaining = useMemo(() => {
    return Math.max(0, Math.min(100, Math.round((remainingBudgetMins / totalErrorBudgetMins) * 100)));
  }, [remainingBudgetMins, totalErrorBudgetMins]);

  // --------------------------------------------------------------------------
  // WORKBENCH 6: Production Readiness Checklist & 15-Question Quiz
  // --------------------------------------------------------------------------
  const [prrChecklist, setPrrChecklist] = useState({
    pipelineTested: true,
    qualityImplemented: true,
    freshnessConfigured: true,
    volumeConfigured: true,
    schemaHandled: true,
    telemetryAvailable: true,
    slosDocumented: false,
    alertsTested: true,
    retriesImplemented: true,
    isIdempotent: true,
    backfillDocumented: false,
    drTested: false,
    rpoRtoDefined: true,
    computeOptimized: true,
    costsMonitored: false,
    securityReviewed: true,
    lineageDocumented: true,
    incidentPlaybook: false,
    deployTested: true
  });

  const prrCompletedCount = useMemo(() => {
    return Object.values(prrChecklist).filter(Boolean).length;
  }, [prrChecklist]);

  const togglePrrItem = (key) => {
    setPrrChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // 15-Question Curriculum Quiz State
  const quizQuestions = [
    {
      q: "What is the primary operational distinction between Software Reliability and Data Reliability Engineering (DRE)?",
      options: [
        "Software reliability focuses on service uptime and successful API execution (Exit Code 0); Data reliability focuses on whether the data delivered is accurate, complete, fresh, and trustworthy",
        "Software reliability only applies to mobile apps; Data reliability applies to desktop operating systems",
        "Data reliability completely eliminates the need for software testing or CI/CD pipelines",
        "Software reliability is measured in gigabytes, while data reliability is measured in milliseconds"
      ],
      answer: 0,
      exp: "A data pipeline can execute flawlessly from a software perspective (exit code 0, 100% service uptime), but if it silently dropped 40% of records, duplicated invoices, or loaded stale data from six hours ago, the data platform has failed. Data Reliability Engineering evaluates the correctness and integrity of data assets themselves."
    },
    {
      q: "In a linear series data pipeline consisting of 4 independent components (Source DB -> Kafka -> Spark -> Snowflake), each with 99.9% individual availability, what is the approximate end-to-end system availability without decoupling queues or retries?",
      options: [
        "99.9%",
        "99.6%",
        "96.0%",
        "100.0%"
      ],
      answer: 1,
      exp: "For a series system where all independent components must be functional simultaneously, total reliability is the product: R_system = 0.999^4 = 0.9960 (99.60%). This mathematical compounding demonstrates why uncoupled distributed architectures require retries, persistent buffering, and fault tolerance."
    },
    {
      q: "What are the Five Core Pillars of modern Data Observability?",
      options: [
        "CPU, Memory, Disk, Network, and Swap",
        "Freshness, Volume, Distribution, Schema, and Lineage",
        "Extract, Transform, Load, Validate, and Publish",
        "Confidentiality, Integrity, Availability, Non-Repudiation, and Authorization"
      ],
      answer: 1,
      exp: "The Five Pillars of Data Observability are: Freshness (how up-to-date is the data), Volume (row counts and completeness), Distribution (statistical spread and anomaly detection), Schema (structure and drift tracking), and Lineage (end-to-end dependency mapping from upstream sources to downstream dashboards)."
    },
    {
      q: "Why is a pipeline reporting 'SUCCESS' status insufficient to guarantee Data Freshness?",
      options: [
        "Cloud providers invert exit codes on weekends",
        "The pipeline may execute successfully on schedule but extract no new data if the upstream source database CDC replication lag or sync connector stalled hours earlier",
        "Freshness can only be monitored by manual visual inspection of CSV rows",
        "Database indexes automatically disable freshness calculations"
      ],
      answer: 1,
      exp: "Pipeline execution status only verifies that the compute job ran without an unhandled exception. If an upstream extraction source was frozen, network replication lagged, or an ingestion filter matched zero rows, the job finishes with 'Success' while destination tables remain dangerously stale."
    },
    {
      q: "When monitoring daily transaction volume, why is a statistical Z-Score threshold (Z = (x - μ) / σ) effective for anomaly detection?",
      options: [
        "It standardizes volume deviations relative to historical mean and variance, automatically flagging statistically improbable drops or spikes while allowing baseline variability",
        "It forces daily record volume to always equal exactly 1,000,000 rows",
        "It converts SQL queries into machine learning neural networks",
        "Z-scores prevent databases from using table partitioning"
      ],
      answer: 0,
      exp: "Hardcoded thresholds (e.g. 'fail if rows < 50,000') cause false alarms when business volume fluctuates. The Z-score measures how many standard deviations today's volume (x) diverges from historical mean (μ). A value of |Z| > 3 flags extreme outliers (p < 0.003) representing systemic ingestion drops or duplicate explosions."
    },
    {
      q: "Which of the following schema changes represents a breaking change that is most likely to cause silent failures or crashes in downstream analytics queries?",
      options: [
        "Adding a new nullable column 'phone_number VARCHAR(20)' to the end of the table",
        "Adding a new optional metadata tag to JSON logs",
        "Altering a column data type from 'INTEGER' to 'VARCHAR' or dropping the 'email' column",
        "Creating a secondary B-tree index on the customer table"
      ],
      answer: 2,
      exp: "Dropping columns or altering data types (e.g., from numeric integer to string) breaks binary data contracts, causing SQL JOIN failures, schema serialization exceptions in Spark/Avro, and broken dashboard visualizations."
    },
    {
      q: "What is the correct relationship between Service Level Indicators (SLIs), Service Level Objectives (SLOs), and Service Level Agreements (SLAs)?",
      options: [
        "SLIs are measurements; SLOs are internal engineering targets; SLAs are formal customer commitments with business consequences",
        "SLAs are technical metrics; SLOs are legal contracts; SLIs are internal goals",
        "SLIs, SLOs, and SLAs are interchangeable terms for database query timeouts",
        "SLOs are only used by marketing teams, while SLAs are only used by data engineers"
      ],
      answer: 0,
      exp: "An SLI is a quantifiable metric of service health (e.g. '98% of hourly deliveries completed within 15 mins'). An SLO is the internal target the team sets to achieve (e.g. '99.5% freshness compliance'). An SLA is the external legal or business commitment made to stakeholders with explicit consequences if violated."
    },
    {
      q: "For a data platform committing to a 99.9% monthly availability SLO, what is the total allowed Error Budget over a 30-day period (43,200 total minutes)?",
      options: [
        "43.2 minutes",
        "4.32 minutes",
        "432 minutes",
        "0 minutes (zero unreliability is allowed)"
      ],
      answer: 0,
      exp: "The allowed error budget is (100% - 99.9%) = 0.1%. For a 30-day period of 43,200 minutes (30 * 24 * 60), the permitted unavailability or missed delivery window is 43,200 * 0.001 = 43.2 minutes."
    },
    {
      q: "In distributed pipeline resilience, what is the primary benefit of a Circuit Breaker pattern over simple continuous retries?",
      options: [
        "Continuous retries hammer a degraded or failing external service with thousands of requests; a circuit breaker trips to 'Open' to fail fast, prevent cascading outages, and give the upstream system time to recover",
        "Circuit breakers permanently delete all corrupted data rows",
        "Circuit breakers convert REST APIs into GraphQL endpoints",
        "Retries are only used for hardware failures, while circuit breakers are for software bugs"
      ],
      answer: 0,
      exp: "Blind retries under high load create 'retry storms' that exacerbate outages on struggling dependencies. A circuit breaker tracks error rates and trips to 'Open', immediately rejecting calls without network latency, and periodically enters 'Half-Open' to probe for recovery before resuming traffic."
    },
    {
      q: "Why is pipeline idempotency (e.g., using SQL MERGE or upsert logic) essential when recovering from partial batch processing failures?",
      options: [
        "It prevents duplicate records and corrupted aggregates when re-executing failed batches or retrying tasks",
        "It speeds up Python code by compiling it to machine assembly",
        "It ensures that pipelines only run on Mondays",
        "It allows database passwords to be stored in plaintext"
      ],
      answer: 0,
      exp: "If a pipeline crashes after committing 50% of a batch, restarting it without idempotency will cause duplicate records for the first 50%. An idempotent pipeline using MERGE, upserts, or atomic partition swaps produces the exact same final state regardless of how many times it is retried."
    },
    {
      q: "What is the key difference between Recovery Point Objective (RPO) and Recovery Time Objective (RTO)?",
      options: [
        "RPO measures acceptable data loss in time (how much historical data can be lost); RTO measures acceptable downtime (how quickly systems must be restored)",
        "RPO measures network speed; RTO measures database storage capacity",
        "RTO is for hardware recovery; RPO is for software compilation",
        "RPO and RTO are identical metrics measured in gigabytes"
      ],
      answer: 0,
      exp: "RPO dictates data freshness and backup frequency (e.g., RPO = 15 mins means at most 15 minutes of transactional data may be lost). RTO dictates restoration speed and infrastructure failover (e.g., RTO = 2 hours means the operational data service must be restored within 2 hours of a disaster)."
    },
    {
      q: "In distributed engines like Apache Spark, what is 'Data Skew' and why does it cause severe pipeline performance bottlenecks?",
      options: [
        "Data skew occurs when one or a few partitions contain vastly more records than others, causing single worker nodes to become bottleneck stragglers while other workers sit idle",
        "Data skew means all column values are converted to uppercase text",
        "Data skew occurs when cloud storage buckets are stored in different countries",
        "Data skew happens only when databases run out of hard drive space"
      ],
      answer: 0,
      exp: "Distributed processing relies on uniform parallel task execution. When a join key or partition key is non-uniform (e.g., 90% of orders belonging to one default customer ID), the executor processing that partition is overwhelmed, leading to spill-to-disk, out-of-memory errors, and 10x longer job runtimes."
    },
    {
      q: "Why is the query 'SELECT * FROM sales WHERE YEAR(order_date) = 2026' considered an anti-pattern in high-performance cloud data warehouses?",
      options: [
        "Wrapping 'order_date' in the YEAR() function is non-sargable, preventing the query engine from using partition pruning or min/max metadata, forcing an expensive full table scan of all columns",
        "The YEAR() function is deprecated in modern SQL standards",
        "The query will automatically delete all sales records from 2026",
        "Cloud warehouses do not support queries with WHERE clauses"
      ],
      answer: 0,
      exp: "Applying functions to partition columns prevents the optimizer from evaluating column-range statistics at plan time. Rewriting the predicate as 'order_date >= \\'2026-01-01\\' AND order_date < \\'2027-01-01\\'' enables partition pruning, eliminating 90%+ of scanned data and dramatically reducing cost and latency."
    },
    {
      q: "In FinOps for data engineering, why is 'Cost per Million Records Processed' a superior metric compared to raw monthly cloud spend?",
      options: [
        "Raw spend increases naturally with business data growth; Cost per Million records normalizes expenditure against processed volume, proving true architectural and unit efficiency",
        "Cost per Million records is legally required by tax authorities",
        "Cloud providers only bill customers per million records, never for EC2 hours",
        "Raw spend cannot be calculated in US Dollars"
      ],
      answer: 0,
      exp: "If a platform's cloud bill doubles from $10k to $20k while processed transaction volume grew 5x from 10M to 50M records, the cost per million records actually plummeted by 60% ($1,000/M to $400/M), proving that optimizations and architectural scaling are successfully paying off."
    },
    {
      q: "What is the primary objective of conducting a Production Readiness Review (PRR) before launching a new data pipeline?",
      options: [
        "To verify that operational health, data quality tests, SLIs/SLOs, recovery procedures, and cost controls are validated before real business users depend on the data",
        "To manually inspect all 100 million production records in Microsoft Excel",
        "To permanently lock all source code to prevent future git commits",
        "To eliminate all monitoring and logging to reduce server load"
      ],
      answer: 0,
      exp: "A pipeline that executes in a development sandbox often fails under production data scale, concurrency, network timeouts, or schema drift. A PRR is a systematic operational assessment ensuring that testing, idempotency, alerting, recovery playbooks, and cost bounds are certified before production deployment."
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

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 flex flex-col font-sans">
      {/* Universal Module Navigation */}
      <ModuleNav currentModuleId="data-reliability-observability" />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Course Breadcrumbs & Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500 mb-2">
            <button
              onClick={goBack}
              className="hover:text-stone-900 transition-colors flex items-center gap-1"
            >
              <ArrowLeft size={12} />
              <span>Courses</span>
            </button>
            <span>/</span>
            <span className="hover:text-stone-900">Data Engineering Master Course</span>
            <span>/</span>
            <span className="text-orange-600 font-semibold">Module 21: Data Reliability, Observability & Performance</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-orange-100 text-orange-700 border border-orange-200">
                  MODULE 21 · ADVANCED SRE & OBSERVABILITY
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-stone-100 text-stone-700 border border-stone-300">
                  OBSERVABILITY · SLI/SLO · DISASTER RECOVERY · FINOPS
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Data Reliability, Observability and Performance Optimization
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl leading-relaxed">
                Apply Site Reliability Engineering (SRE) principles to data infrastructure. Master the 5 pillars of data observability, freshness & volume monitoring, SLIs/SLOs/error budgets, circuit breakers, disaster recovery (RPO vs RTO), query optimization, and FinOps cloud cost management.
              </p>
            </div>

            {/* Mode Switcher Pill Tabs */}
            <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-xl border border-stone-300 shadow-inner self-start md:self-auto">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "curriculum"
                    ? "bg-white text-stone-900 shadow-sm border border-stone-200 font-bold"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <BookOpen size={14} className={activeTab === "curriculum" ? "text-orange-600" : ""} />
                <span>Specification & Blueprints (29)</span>
              </button>
              <button
                onClick={() => setActiveTab("workbench")}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "workbench"
                    ? "bg-white text-stone-900 shadow-sm border border-stone-200 font-bold"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Cpu size={14} className={activeTab === "workbench" ? "text-orange-600" : ""} />
                <span>Interactive Workbenches (6)</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================================================================== */}
        {/* TAB 1: SPECIFICATION & BLUEPRINTS (FULL VERBATIM CURRICULUM)      */}
        {/* ================================================================== */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Sidebar: Syllabus Navigator */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 p-4 shadow-sm space-y-4 sticky top-6">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-orange-600" />
                  <span className="font-bold text-sm text-stone-800">Module 21 Syllabus</span>
                </div>
                <span className="text-[11px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                  {filteredSections.length} / {reliabilitySectionsMeta.length}
                </span>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search sections or reliability topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-stone-800 placeholder-stone-400"
                />
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[10px] font-mono px-2 py-1 rounded-md transition-colors ${
                      selectedCategory === cat
                        ? "bg-orange-600 text-white font-semibold"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {cat === "all" ? "All Categories" : cat.replace("Part ", "P")}
                  </button>
                ))}
              </div>

              {/* Scrollable Section List */}
              <div className="space-y-1 max-h-[calc(100vh-320px)] overflow-y-auto pr-1 [scrollbar-width:thin]">
                {filteredSections.map((sec) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => setActiveSectionId(sec.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 ${
                        isActive
                          ? "bg-orange-50/80 border border-orange-200 text-stone-900 shadow-sm"
                          : "hover:bg-stone-50 text-stone-600 border border-transparent"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded mt-0.5 shrink-0 ${
                          isActive
                            ? "bg-orange-600 text-white font-bold"
                            : "bg-stone-100 text-stone-500"
                        }`}
                      >
                        {sec.id}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div
                          className={`text-xs leading-snug line-clamp-2 ${
                            isActive ? "font-bold text-stone-900" : "font-medium"
                          }`}
                        >
                          {sec.title}
                        </div>
                        <div className="text-[10px] text-stone-400 truncate mt-0.5">
                          {sec.category}
                        </div>
                      </div>
                      {isActive && (
                        <ChevronRight size={14} className="text-orange-600 shrink-0 mt-1" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Main Panel: Render Selected Verbatim Section */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
              <ReliabilitySection sectionId={activeSectionId} />
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 2: INTERACTIVE WORKBENCHES (6 SPECIALIZED LABS)                */}
        {/* ================================================================== */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Pill Header */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbench("freshness_volume_engine")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeWorkbench === "freshness_volume_engine"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Activity size={14} />
                <span>1. Freshness & Volume Observability</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("circuit_breaker_lab")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeWorkbench === "circuit_breaker_lab"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Zap size={14} />
                <span>2. Circuit Breaker & Exponential Backoff</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("dr_rpo_rto_simulator")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeWorkbench === "dr_rpo_rto_simulator"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <HardDrive size={14} />
                <span>3. Disaster Recovery (RPO vs RTO)</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("query_optimizer_lab")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeWorkbench === "query_optimizer_lab"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Cpu size={14} />
                <span>4. Query Plan & Pruning Optimizer</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("error_budget_calculator")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeWorkbench === "error_budget_calculator"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Gauge size={14} />
                <span>5. SLI/SLO & Error Budget Lab</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("production_readiness_quiz")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeWorkbench === "production_readiness_quiz"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <ShieldCheck size={14} />
                <span>6. PRR Checklist & 15Q Quiz</span>
              </button>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* WORKBENCH 1: Freshness & Volume Anomaly Detector                 */}
            {/* ---------------------------------------------------------------- */}
            {activeWorkbench === "freshness_volume_engine" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <Activity size={18} className="text-orange-600" />
                    <span>Data Freshness SLA & Volume Anomaly Detector (Monte Carlo & Soda Simulator)</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Simulate real-time data observability: track pipeline lag against strict SLA thresholds and detect statistical row volume anomalies using Z-score deviations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column: Freshness SLA Monitor */}
                  <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                      <span className="font-bold text-stone-800 text-xs uppercase font-mono">
                        Pillar 1: Data Freshness Monitor
                      </span>
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded font-bold border ${freshnessStatus.color}`}>
                        {freshnessStatus.status}
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Monitored Destination Table:
                      </label>
                      <select
                        value={selectedDataset}
                        onChange={(e) => setSelectedDataset(e.target.value)}
                        className="w-full text-xs font-mono p-2 rounded-lg border border-stone-300 bg-white"
                      >
                        <option value="sales_summary">analytics.sales_summary (Hourly Batch)</option>
                        <option value="customer_events">lake.customer_events (Streaming CDC)</option>
                        <option value="inventory_feed">erp.inventory_snapshot (Daily Snapshot)</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-stone-700">Elapsed Time Since Last Commit:</span>
                        <span className="font-mono font-bold text-stone-900">{elapsedMinutes} minutes</span>
                      </div>
                      <input
                        type="range"
                        min="2"
                        max="90"
                        value={elapsedMinutes}
                        onChange={(e) => setElapsedMinutes(parseInt(e.target.value))}
                        className="w-full accent-orange-600"
                      />
                      <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                        <span>0m (Real-time)</span>
                        <span>15m (Target SLO)</span>
                        <span>30m (Warning)</span>
                        <span>90m (Critical)</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-white border border-stone-200 text-xs font-mono space-y-1">
                      <div className="text-stone-500 text-[11px]">Snowflake Freshness Query Metric:</div>
                      <div className="text-stone-800 text-[11px]">
                        DATEDIFF(minute, MAX(updated_at), CURRENT_TIMESTAMP) = <span className="font-bold text-orange-600">{elapsedMinutes}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Volume Anomaly Z-Score Engine */}
                  <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                      <span className="font-bold text-stone-800 text-xs uppercase font-mono">
                        Pillar 2: Volume Anomaly Detector
                      </span>
                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded font-bold border ${
                          isVolumeAnomaly
                            ? "bg-red-100 text-red-800 border-red-300"
                            : "bg-emerald-100 text-emerald-800 border-emerald-300"
                        }`}
                      >
                        {isVolumeAnomaly ? "ANOMALY DETECTED" : "VOLUME NORMAL"}
                      </span>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-stone-700">Today's Ingested Row Count:</span>
                        <span className="font-mono font-bold text-stone-900">{todayVolume.toLocaleString()} rows</span>
                      </div>
                      <input
                        type="range"
                        min="5000"
                        max="200000"
                        step="5000"
                        value={todayVolume}
                        onChange={(e) => setTodayVolume(parseInt(e.target.value))}
                        className="w-full accent-orange-600"
                      />
                      <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                        <span>5,000 (Drop)</span>
                        <span>100,000 (Historical μ)</span>
                        <span>200,000 (Spike)</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded bg-white border border-stone-200">
                        <span className="text-stone-400 text-[10px] block">HISTORICAL MEAN (μ):</span>
                        <span className="font-bold text-stone-800">100,000 rows</span>
                      </div>
                      <div className="p-2.5 rounded bg-white border border-stone-200">
                        <span className="text-stone-400 text-[10px] block">CALCULATED Z-SCORE:</span>
                        <span
                          className={`font-bold ${
                            isVolumeAnomaly ? "text-red-600 font-extrabold" : "text-emerald-700"
                          }`}
                        >
                          Z = {volumeZScore}
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      {isVolumeAnomaly
                        ? `⚠️ Alert: Volume deviation |Z| >= 3.0 represents a statistically critical anomaly (p < 0.003). Possible cause: upstream database CDC connector failure or unhandled null partition drop.`
                        : `Normal operation: Ingested record count falls within expected daily statistical bounds (within 3 standard deviations).`}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------------------- */}
            {/* WORKBENCH 2: Retry Policy & Circuit Breaker State Machine        */}
            {/* ---------------------------------------------------------------- */}
            {activeWorkbench === "circuit_breaker_lab" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <Zap size={18} className="text-orange-600" />
                    <span>Circuit Breaker State Machine & Exponential Backoff Simulator</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Compare unhandled retry storms against an active 3-state Circuit Breaker (Closed, Open, Half-Open) with exponential backoff and jitter.
                  </p>
                </div>

                {/* State Machine Visualizer */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      state: "CLOSED",
                      desc: "Normal operating mode: All requests pass through to downstream service. Failures are tracked.",
                      active: cbState === "CLOSED",
                      color: "border-emerald-500 bg-emerald-50 text-emerald-900"
                    },
                    {
                      state: "OPEN",
                      desc: "Tripped after 3 consecutive failures: All calls fail fast immediately. Zero network requests made to struggling service.",
                      active: cbState === "OPEN",
                      color: "border-red-500 bg-red-50 text-red-900"
                    },
                    {
                      state: "HALF_OPEN",
                      desc: "Trial probe state: A single canary request is permitted. If it succeeds, resets to Closed; if it fails, trips back to Open.",
                      active: cbState === "HALF_OPEN",
                      color: "border-amber-500 bg-amber-50 text-amber-900"
                    }
                  ].map((node) => (
                    <div
                      key={node.state}
                      className={`p-4 rounded-xl border transition-all ${
                        node.active
                          ? `${node.color} shadow-md ring-2 ring-orange-500/20 font-bold`
                          : "bg-stone-50 border-stone-200 opacity-60 text-stone-600"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs">{node.state}</span>
                        {node.active && <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white shadow-sm">ACTIVE STATE</span>}
                      </div>
                      <p className="text-[11px] font-normal leading-relaxed">{node.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Simulation Control Buttons */}
                <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-xs font-bold text-stone-800">Trigger Downstream Event:</span>
                  <button
                    onClick={() => simulateApiCall(true)}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                  >
                    Simulate Success (HTTP 200)
                  </button>
                  <button
                    onClick={() => simulateApiCall(false)}
                    className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                  >
                    Simulate External Failure (HTTP 503)
                  </button>
                  {cbState === "OPEN" && (
                    <button
                      onClick={probeCircuitBreaker}
                      className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                    >
                      Elapse 30s Cooldown (Enter Half-Open)
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setCbState("CLOSED");
                      setConsecutiveFailures(0);
                      setRetryAttempt(0);
                      setCbLogs(["[Circuit Breaker] Manually reset to CLOSED state."]);
                    }}
                    className="px-3 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-semibold rounded-lg transition-colors ml-auto"
                  >
                    Reset Engine
                  </button>
                </div>

                {/* Real-time Telemetry Terminal */}
                <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs space-y-1.5 border border-neutral-800 min-h-[160px]">
                  <div className="text-[11px] text-orange-400 font-bold uppercase flex items-center gap-1.5 mb-2">
                    <Terminal size={13} />
                    <span>Circuit Breaker Telemetry Console</span>
                  </div>
                  {cbLogs.map((log, idx) => (
                    <div key={idx} className="leading-relaxed">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ---------------------------------------------------------------- */}
            {/* WORKBENCH 3: Disaster Recovery, RPO & RTO Simulator              */}
            {/* ---------------------------------------------------------------- */}
            {activeWorkbench === "dr_rpo_rto_simulator" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <HardDrive size={18} className="text-orange-600" />
                    <span>Disaster Recovery Strategy Simulator: RPO vs RTO Trade-off Matrix</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Evaluate disaster recovery tiers against enterprise compliance targets (Target RPO: 15 mins, Target RTO: 30 mins) during catastrophic regional cloud outages.
                  </p>
                </div>

                {/* Tier Selector Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {Object.entries(drProfiles).map(([key, prof]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setDrTier(key);
                        setDisasterSimulationResult(null);
                      }}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        drTier === key
                          ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                          : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      <span className="font-bold text-xs block mb-1">{prof.name}</span>
                      <div className="text-[10px] space-y-0.5 opacity-80 font-mono">
                        <div>RPO: ~{prof.rpoMin >= 60 ? `${prof.rpoMin / 60}h` : `${prof.rpoMin}m`}</div>
                        <div>RTO: ~{prof.rtoMin >= 60 ? `${prof.rtoMin / 60}h` : `${prof.rtoMin}m`}</div>
                        <div>Cost: {prof.costFactor}</div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-orange-50/60 border border-orange-200">
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Simulate Catastrophic Region Outage:</span>
                    <span className="text-[11px] text-stone-600">Simulates AWS ap-south-1 total datacenter loss and failover to ap-southeast-1.</span>
                  </div>
                  <button
                    onClick={runDisasterSimulation}
                    disabled={isSimulatingDisaster}
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-sm transition-colors disabled:opacity-50"
                  >
                    <RefreshCw size={13} className={isSimulatingDisaster ? "animate-spin" : ""} />
                    <span>{isSimulatingDisaster ? "Executing Failover Protocol..." : "Trigger Region Outage Simulation"}</span>
                  </button>
                </div>

                {disasterSimulationResult && (
                  <div
                    className={`p-5 rounded-xl border space-y-3 animate-in fade-in duration-300 ${
                      disasterSimulationResult.compliant
                        ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                        : "bg-red-50 border-red-300 text-red-950"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {disasterSimulationResult.compliant ? (
                        <CheckCircle2 size={18} className="text-emerald-600" />
                      ) : (
                        <XCircle size={18} className="text-red-600" />
                      )}
                      <span className="font-bold text-sm">
                        {disasterSimulationResult.compliant ? "SLA COMPLIANT DR FAILOVER" : "CRITICAL SLA BREACH DETECTED"}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed">{disasterSimulationResult.summary}</p>
                    <div className="grid grid-cols-2 gap-4 text-xs font-mono pt-2 border-t border-stone-200/60">
                      <div>
                        <span className="text-stone-500 text-[10px] block">ACHIEVED RPO (DATA LOSS):</span>
                        <span className="font-bold">{disasterSimulationResult.rpoAchieved} minutes (Target: &le; 15m)</span>
                      </div>
                      <div>
                        <span className="text-stone-500 text-[10px] block">ACHIEVED RTO (DOWNTIME):</span>
                        <span className="font-bold">{disasterSimulationResult.rtoAchieved} minutes (Target: &le; 30m)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ---------------------------------------------------------------- */}
            {/* WORKBENCH 4: Query Execution Plan & Pruning Optimizer            */}
            {/* ---------------------------------------------------------------- */}
            {activeWorkbench === "query_optimizer_lab" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <Cpu size={18} className="text-orange-600" />
                    <span>Query Performance & Partition Pruning Optimizer</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Compare non-sargable full-table scans against partition-pruned analytical queries across execution time, memory spill, and cloud scan cost.
                  </p>
                </div>

                <div className="flex items-center gap-3 border-b border-stone-200 pb-3">
                  <span className="text-xs font-bold text-stone-700">Select Query Implementation:</span>
                  <button
                    onClick={() => setQueryMode("naive")}
                    className={`text-xs px-3.5 py-1.5 rounded-lg border font-mono ${
                      queryMode === "naive"
                        ? "bg-red-600 text-white border-red-600 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-700"
                    }`}
                  >
                    1. Inefficient Non-Sargable Query (Anti-pattern)
                  </button>
                  <button
                    onClick={() => setQueryMode("optimized")}
                    className={`text-xs px-3.5 py-1.5 rounded-lg border font-mono ${
                      queryMode === "optimized"
                        ? "bg-emerald-600 text-white border-emerald-600 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-700"
                    }`}
                  >
                    2. Optimized Sargable Range Query (Production Ready)
                  </button>
                </div>

                {/* SQL Code Preview */}
                <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs">
                  <span className="text-orange-400 font-bold">// Executed Analytical SQL:</span>
                  <pre className="mt-2 text-stone-300 overflow-x-auto">
{queryMode === "naive"
  ? `-- INCOMPLETE FILTER: Function on partition key prevents pruning
SELECT *
FROM analytics.orders
WHERE YEAR(order_date) = 2026;`
  : `-- OPTIMIZED: Explicit column list + range filter allows partition pruning
SELECT order_id, customer_id, amount, order_date
FROM analytics.orders
WHERE order_date >= '2026-01-01'
  AND order_date < '2027-01-01';`}
                  </pre>
                </div>

                {/* Execution Plan Metrics Comparison Table */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-400 text-[10px] block">TOTAL ROWS SCANNED</span>
                    <span className={`text-base font-bold ${queryMode === "naive" ? "text-red-600" : "text-emerald-600"}`}>
                      {queryMode === "naive" ? "10,000,000 (100%)" : "250,000 (2.5%)"}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-400 text-[10px] block">EXECUTION RUNTIME</span>
                    <span className={`text-base font-bold ${queryMode === "naive" ? "text-red-600" : "text-emerald-600"}`}>
                      {queryMode === "naive" ? "80 minutes" : "30 minutes (62.5% faster)"}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-400 text-[10px] block">MEMORY SPILL TO DISK</span>
                    <span className={`text-base font-bold ${queryMode === "naive" ? "text-red-600" : "text-emerald-600"}`}>
                      {queryMode === "naive" ? "14.2 GB (High I/O)" : "0 GB (In-Memory)"}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-400 text-[10px] block">ESTIMATED SCAN COST</span>
                    <span className={`text-base font-bold ${queryMode === "naive" ? "text-red-600" : "text-emerald-600"}`}>
                      {queryMode === "naive" ? "$45.00" : "$1.12 (-97.5%)"}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------------------- */}
            {/* WORKBENCH 5: SLI, SLO & Error Budget Exhaustion Calculator       */}
            {/* ---------------------------------------------------------------- */}
            {activeWorkbench === "error_budget_calculator" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <Gauge size={18} className="text-orange-600" />
                    <span>SLI, SLO & Error Budget Exhaustion Calculator</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Calculate monthly permitted unreliability budgets and observe how incident downtime triggers automatic deployment freezes under Google SRE practices.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left: Input parameters */}
                  <div className="space-y-4 p-5 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                    <span className="font-bold text-stone-800 uppercase tracking-wider text-[11px] block border-b border-stone-200 pb-2">
                      Target Service Level
                    </span>

                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 mb-1">Monthly Availability SLO:</label>
                      <select
                        value={targetSloPct}
                        onChange={(e) => setTargetSloPct(parseFloat(e.target.value))}
                        className="w-full text-xs font-mono p-2 rounded-lg border border-stone-300 bg-white"
                      >
                        <option value="99.9">99.9% (Three Nines - Enterprise Default)</option>
                        <option value="99.5">99.5% (High Reliability)</option>
                        <option value="99.0">99.0% (Two Nines - Batch Analytics)</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-stone-700">Recorded Outage / Stale Window:</span>
                        <span className="font-mono font-bold text-stone-900">{consumedOutageMins} minutes</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="120"
                        value={consumedOutageMins}
                        onChange={(e) => setConsumedOutageMins(parseInt(e.target.value))}
                        className="w-full accent-orange-600"
                      />
                    </div>
                  </div>

                  {/* Middle & Right: Budget Visualization */}
                  <div className="md:col-span-2 p-5 rounded-xl bg-stone-900 text-stone-200 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                      <span className="text-orange-400 font-mono text-xs font-bold uppercase flex items-center gap-1.5">
                        <Gauge size={14} />
                        <span>Monthly 30-Day Window (43,200 Total Minutes)</span>
                      </span>
                      <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded ${
                        remainingBudgetMins <= 0 ? "bg-red-600 text-white" : "bg-emerald-600 text-white"
                      }`}>
                        {remainingBudgetMins <= 0 ? "BUDGET EXHAUSTED" : `${budgetPctRemaining}% REMAINING`}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
                      <div className="p-3 rounded bg-stone-800 border border-stone-700">
                        <span className="text-stone-400 text-[10px] block">TOTAL BUDGET ALLOCATED:</span>
                        <span className="text-sm font-bold text-stone-100">{totalErrorBudgetMins} minutes</span>
                      </div>
                      <div className="p-3 rounded bg-stone-800 border border-stone-700">
                        <span className="text-stone-400 text-[10px] block">OUTAGE CONSUMED:</span>
                        <span className="text-sm font-bold text-orange-400">{consumedOutageMins} minutes</span>
                      </div>
                      <div className="p-3 rounded bg-stone-800 border border-stone-700">
                        <span className="text-stone-400 text-[10px] block">BUDGET REMAINING:</span>
                        <span className={`text-sm font-bold ${remainingBudgetMins <= 0 ? "text-red-400 font-extrabold" : "text-emerald-400"}`}>
                          {remainingBudgetMins} minutes
                        </span>
                      </div>
                    </div>

                    <div className="pt-2">
                      {remainingBudgetMins <= 0 ? (
                        <div className="p-3 rounded-lg bg-red-950/80 border border-red-700 text-red-200 text-xs space-y-1">
                          <span className="font-bold flex items-center gap-1">
                            <AlertOctagon size={14} />
                            <span>AUTOMATED POLICY ACTION: DEPLOYMENT FREEZE TRIGGERED</span>
                          </span>
                          <p className="text-[11px] leading-relaxed text-red-300">
                            The 30-day error budget is completely depleted. All non-essential feature deployments and speculative schema updates are frozen. Engineering focus is redirected to reliability engineering, pipeline idempotent retries, and data quality assertions.
                          </p>
                        </div>
                      ) : (
                        <p className="text-[11px] text-stone-400 leading-relaxed font-mono">
                          Healthy SRE posture: The team possesses sufficient error budget ({remainingBudgetMins} mins) to conduct planned infrastructure upgrades and continuous deployments without risking SLA violation penalties.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------------------- */}
            {/* WORKBENCH 6: PRR Checklist & 15-Question Quiz                    */}
            {/* ---------------------------------------------------------------- */}
            {activeWorkbench === "production_readiness_quiz" && (
              <div className="space-y-6">
                {/* 19-Point Production Readiness Review Checklist */}
                <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-orange-600" />
                        <span>Data Engineering Production Readiness Review (PRR) Checklist</span>
                      </h3>
                      <p className="text-xs text-stone-600 mt-1">
                        19-point certification checklist verifying correctness, observability, recovery, and performance before deploying to production.
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-orange-100 text-orange-800 border border-orange-200">
                      {prrCompletedCount} of 19 Completed ({Math.round((prrCompletedCount / 19) * 100)}%)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {[
                      { id: "pipelineTested", text: "Pipeline execution has been tested" },
                      { id: "qualityImplemented", text: "Data quality validations are implemented" },
                      { id: "freshnessConfigured", text: "Freshness monitoring is configured" },
                      { id: "volumeConfigured", text: "Volume and distribution monitoring are configured" },
                      { id: "schemaHandled", text: "Schema changes are handled safely" },
                      { id: "telemetryAvailable", text: "Logs, metrics, and traces are available" },
                      { id: "slosDocumented", text: "SLIs and SLOs are documented" },
                      { id: "alertsTested", text: "Alerts have been tested" },
                      { id: "retriesImplemented", text: "Retry and recovery mechanisms are implemented" },
                      { id: "isIdempotent", text: "Pipeline is idempotent (MERGE/Upsert)" },
                      { id: "backfillDocumented", text: "Backfill procedures are documented" },
                      { id: "drTested", text: "Backup and disaster recovery are tested" },
                      { id: "rpoRtoDefined", text: "RPO and RTO requirements are defined" },
                      { id: "computeOptimized", text: "Compute and query performance are optimized" },
                      { id: "costsMonitored", text: "Cloud costs are estimated and monitored" },
                      { id: "securityReviewed", text: "Security and access controls are reviewed" },
                      { id: "lineageDocumented", text: "Data lineage and dependencies are documented" },
                      { id: "incidentPlaybook", text: "Incident response procedures are documented" },
                      { id: "deployTested", text: "Production deployment and rollback procedures are tested" }
                    ].map((item) => {
                      const isChecked = prrChecklist[item.id];
                      return (
                        <button
                          key={item.id}
                          onClick={() => togglePrrItem(item.id)}
                          className={`text-left p-2.5 rounded-xl border text-xs flex items-center gap-2.5 transition-all ${
                            isChecked
                              ? "bg-emerald-50/70 border-emerald-300 text-emerald-950 font-medium"
                              : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                          }`}
                        >
                          {isChecked ? (
                            <CheckSquare size={16} className="text-emerald-600 shrink-0" />
                          ) : (
                            <Square size={16} className="text-stone-400 shrink-0" />
                          )}
                          <span className="leading-snug">{item.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 15-Question Quiz Card */}
                <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                        <Sparkles size={18} className="text-orange-600" />
                        <span>Module 21 Mastery Assessment: 15 Reliability Certification Questions</span>
                      </h3>
                      <p className="text-xs text-stone-600 mt-1">
                        Evaluate knowledge across DRE principles, 5 observability pillars, SLI/SLO/SLA, circuit breakers, RPO/RTO, data skew, and FinOps unit economics.
                      </p>
                    </div>
                    {showQuizResults ? (
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold bg-orange-100 text-orange-800 px-3 py-1.5 rounded-lg border border-orange-200">
                          Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                        </span>
                        <button
                          onClick={() => {
                            setShowQuizResults(false);
                            setQuizAnswers({});
                          }}
                          className="px-3 py-1.5 bg-stone-800 text-white rounded-lg text-xs font-semibold hover:bg-stone-900"
                        >
                          Retry Assessment
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setShowQuizResults(true)}
                        disabled={Object.keys(quizAnswers).length === 0}
                        className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold rounded-xl shadow-sm transition-colors disabled:opacity-50"
                      >
                        Submit Answers
                      </button>
                    )}
                  </div>

                  {/* Questions List */}
                  <div className="space-y-6">
                    {quizQuestions.map((q, qIdx) => {
                      const selectedOpt = quizAnswers[qIdx];
                      const isSubmitted = showQuizResults;
                      return (
                        <div
                          key={qIdx}
                          className="p-4 sm:p-5 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3"
                        >
                          <div className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-700 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {qIdx + 1}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                              {q.q}
                            </h4>
                          </div>

                          <div className="grid grid-cols-1 gap-2 pl-7">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = selectedOpt === optIdx;
                              let btnClass = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";

                              if (isSubmitted) {
                                if (optIdx === q.answer) {
                                  btnClass = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold";
                                } else if (isSelected && optIdx !== q.answer) {
                                  btnClass = "bg-red-50 border-red-500 text-red-900";
                                }
                              } else if (isSelected) {
                                btnClass = "bg-orange-50 border-orange-500 text-orange-900 font-semibold ring-1 ring-orange-500";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectQuizAnswer(qIdx, optIdx)}
                                  className={`w-full text-left p-3 rounded-lg border text-xs transition-all flex items-start gap-2 ${btnClass}`}
                                >
                                  <span className="font-mono text-[11px] text-stone-400 shrink-0 mt-0.5">
                                    {String.fromCharCode(65 + optIdx)}.
                                  </span>
                                  <span className="leading-relaxed flex-1">{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {isSubmitted && (
                            <div className="pl-7 pt-2">
                              <div className="p-3 rounded-lg bg-stone-100 border border-stone-200 text-[11px] text-stone-700 leading-relaxed font-mono">
                                <span className="font-bold text-stone-900 block mb-1">Technical Explanation:</span>
                                {q.exp}
                              </div>
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
