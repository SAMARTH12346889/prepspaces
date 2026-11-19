import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  BookOpen,
  Terminal,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Activity,
  Layers,
  HelpCircle,
  TrendingDown,
  TrendingUp,
  RefreshCw,
  GitBranch,
  Cpu,
  BarChart2,
  Maximize2,
  Minimize2,
  Compass,
  AlertTriangle,
  Search,
  Filter,
  Scale,
  Brain,
  ShieldAlert,
  Percent,
  FlaskConical,
  Target,
  Eye,
  Binary,
  Share2,
  Building2,
  CreditCard,
  UserX,
  ShoppingBag,
  LineChart,
  Stethoscope,
  Briefcase,
  DollarSign,
  Calendar,
  Clock,
  ShieldCheck,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import MachineLearningRealWorldCaseStudiesSections from "./MachineLearningRealWorldCaseStudiesSections";

export default function MachineLearningRealWorldCaseStudies() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("canvas"); // 'canvas' | 'credit_risk' | 'walk_forward' | 'quiz'

  // ---------------------------------------------------------------------------
  // LAB 1: BUSINESS-TO-ML ARCHITECTURE CANVAS
  // ---------------------------------------------------------------------------
  const [selectedCase, setSelectedCase] = useState("credit"); // 'credit' | 'fraud' | 'churn' | 'recsys' | 'sales' | 'medical'

  const caseSpecs = useMemo(() => {
    const specs = {
      credit: {
        title: "Credit Risk & Default Prediction",
        industry: "Retail & Commercial Banking",
        icon: CreditCard,
        businessGoal: "Reduce portfolio default rate below 2.5% while preventing unnecessary rejections of creditworthy applicants ($4.2M expected annual savings).",
        mlTask: "Binary Classification with calibrated probability estimates P(Default=1 | X)",
        target: "1 if borrower is ≥90 days delinquent within 12 months of origination; 0 otherwise",
        unit: "One individual credit application submitted by a primary borrower",
        timestamp: "Exact instant of application submission prior to underwriting & fund disbursement",
        horizon: "12 months following loan disbursement",
        features: "Bureau FICO score, verified debt-to-income (DTI), loan-to-income (LTI), historical revolving credit utilization, inquiry velocity (strictly no post-approval repayment fields).",
        leakageCheck: "Reject features generated post-disbursement (e.g. late fees paid, collections notes, payment status in month 3).",
        baselines: "Majority class (predict all non-default) and linear logistic scorecard.",
        metrics: "PR-AUC, ROC-AUC, Brier Calibration Score, and Basel Expected Loss (PD * LGD * EAD).",
        governance: "Fairness audit across protected demographics (Demographic Parity / Equal Opportunity); adverse action explanatory reason codes required by banking regulations.",
      },
      fraud: {
        title: "Real-Time Transaction Fraud Detection",
        industry: "Digital Payments & Fintech",
        icon: ShieldAlert,
        businessGoal: "Block unauthorized fraudulent card transactions in real-time (<50ms latency) while keeping false alarm customer friction below 0.5%.",
        mlTask: "Cost-sensitive imbalanced binary classification + anomaly detection",
        target: "1 if transaction is confirmed unauthorized/fraudulent by chargeback or audit; 0 if legitimate",
        unit: "One payment authorization request",
        timestamp: "At time of transaction gateway authorization before clearing",
        horizon: "Instantaneous classification decision per transaction",
        features: "Amount ratio (Current / Customer 30-day mean), transaction velocity (count in last 10m / 1h), geographic travel speed jump, merchant category risk code.",
        leakageCheck: "Exclude chargeback flags or customer dispute tickets filed days after the transaction.",
        baselines: "Static rule-based filter: 'Amount > $5,000 or country ≠ card home country'.",
        metrics: "Precision@K (top K reviewed alerts), PR-AUC, Recall at 0.1% False Alarm Rate.",
        governance: "Human fraud analyst escalation queue; encrypted PII tokenization under PCI-DSS compliance.",
      },
      churn: {
        title: "Customer Churn Prediction",
        industry: "SaaS & Telecom Subscriptions",
        icon: UserX,
        businessGoal: "Proactively identify at-risk enterprise accounts to deploy customer success interventions and reduce MRR churn by 18%.",
        mlTask: "Binary classification & top-decile propensity ranking",
        target: "1 if account cancels subscription or fails to renew within 30 days; 0 if retained",
        unit: "One active subscription organization account",
        timestamp: "Calculated on the 1st of every calendar month",
        horizon: "30 days forward into the renewal cycle",
        features: "Account tenure, 30-day usage velocity decline ratio, support ticket complaint count, key user seat activity, billing plan tier.",
        leakageCheck: "Exclude cancellation request date, offboarding survey logs, or post-cancellation refund events.",
        baselines: "Predict churn if usage dropped >50% in the last 14 days.",
        metrics: "Top-decile lift, Precision@500 (weekly campaign outreach capacity), F1-Score.",
        governance: "Prevent automated destructive interventions; ensure customer outreach offers respect contractual privacy clauses.",
      },
      recsys: {
        title: "Personalized Product Recommendation",
        industry: "E-Commerce & Digital Media",
        icon: ShoppingBag,
        businessGoal: "Increase average order value (AOV) by 12% and click-through conversion by serving personalized product feeds.",
        mlTask: "Candidate retrieval + Learning-to-Rank (LTR)",
        target: "Implicit feedback: click, cart add, or completed purchase within 24h",
        unit: "User-Item interaction candidate pair (u, i)",
        timestamp: "At time of page render / feed refresh",
        horizon: "Session browsing window (0–24 hours)",
        features: "User interaction history, item embedding vectors, category affinities, price tier, popularity recency dampening.",
        leakageCheck: "Never use future session items or same-cart co-purchased items as input features.",
        baselines: "Most popular items in user's top browsed category.",
        metrics: "NDCG@10, Mean Reciprocal Rank (MRR), Precision@K, Catalog Coverage & Diversity.",
        governance: "Mitigate popularity echo chambers; enforce diversity constraints to prevent repetitive product spamming.",
      },
      sales: {
        title: "Retail Supply Chain Demand Forecasting",
        industry: "Multi-Store Retail & Logistics",
        icon: LineChart,
        businessGoal: "Minimize inventory stockouts by 25% and reduce overstock warehouse carrying costs across 500 store locations.",
        mlTask: "Time-series multi-horizon regression",
        target: "Total units sold per SKU per store over the next 14 to 30 days",
        unit: "One SKU-Store combination per calendar day",
        timestamp: "End of trading day t",
        horizon: "Daily steps t+1 through t+30",
        features: "Sales lags (Lag 1, 7, 14, 30), rolling 7-day mean/std, promotional discount percentage, holiday flags, local weather index.",
        leakageCheck: "Never include future sales in rolling aggregations; adjust zero-sales periods for out-of-stock censorship.",
        baselines: "Seasonal naive forecast: y_hat(t) = y(t - 7).",
        metrics: "WAPE (Weighted Absolute Percentage Error), MAE, RMSE, and Forecast Bias.",
        governance: "Audit supply chain inventory allocations to ensure rural/low-volume stores are not systematically starved of staple goods.",
      },
      medical: {
        title: "30-Day Hospital Readmission Risk",
        industry: "Healthcare & Clinical Research",
        icon: Stethoscope,
        businessGoal: "Support clinical discharge teams in identifying high-risk patients needing post-discharge follow-up care to reduce avoidable readmissions.",
        mlTask: "Clinical risk prediction with high-sensitivity calibration",
        target: "1 if patient experiences unplanned hospital readmission within 30 days of discharge; 0 otherwise",
        unit: "One inpatient hospitalization discharge encounter",
        timestamp: "Time of clinical discharge summary sign-off",
        horizon: "30 days post-discharge",
        features: "Length of stay, prior 12-month admission count, comorbidity index, discharge medications count, lab test abnormalities.",
        leakageCheck: "Strictly exclude post-discharge outpatient notes, subsequent emergency visits, or post-discharge prescription refills.",
        baselines: "Hospital standard LACE clinical index scorecard.",
        metrics: "Sensitivity (Recall) at high threshold, ROC-AUC, PR-AUC, Calibration curve slope.",
        governance: "Decision support only—cannot override physician clinical judgment; audit across racial/age groups under HIPAA regulations.",
      },
    };
    return specs[selectedCase];
  }, [selectedCase]);

  // ---------------------------------------------------------------------------
  // LAB 2: BASEL EXPECTED LOSS SIMULATOR (BANKING RISK)
  // ---------------------------------------------------------------------------
  const [eadAmount, setEadAmount] = useState(150000); // Exposure at default ($150k)
  const [lgdRate, setLgdRate] = useState(0.45); // Loss Given Default (45%)
  const [modelType, setModelType] = useState("calibrated_ml"); // 'naive_flat' | 'calibrated_ml'

  const creditRiskStats = useMemo(() => {
    // 1,000 loans portfolio
    const totalLoans = 1000;
    // True default rate: 4.0%
    const trueDefaulters = 40;

    let avgPd = 0.04;
    let brierScore = 0.038;
    if (modelType === "naive_flat") {
      avgPd = 0.085; // Uncalibrated overestimation
      brierScore = 0.142;
    }

    // Expected Loss: EL = PD * LGD * EAD
    const elPerLoan = avgPd * lgdRate * eadAmount;
    const portfolioTotalEL = elPerLoan * totalLoans;

    // Actual realistic portfolio loss (ground truth 4%)
    const realisticLoss = 0.04 * lgdRate * eadAmount * totalLoans;
    const capitalDisparity = portfolioTotalEL - realisticLoss;

    return {
      avgPd,
      brierScore,
      elPerLoan,
      portfolioTotalEL,
      realisticLoss,
      capitalDisparity,
    };
  }, [eadAmount, lgdRate, modelType]);

  // ---------------------------------------------------------------------------
  // LAB 3: TEMPORAL WALK-FORWARD VALIDATION SIMULATOR
  // ---------------------------------------------------------------------------
  const [valMethod, setValMethod] = useState("walk_forward"); // 'random_kfold' | 'walk_forward'
  const [horizonMonths, setHorizonMonths] = useState(1); // 1 to 3

  // ---------------------------------------------------------------------------
  // LAB 4: 12-QUESTION CERTIFICATION ASSESSMENT (EXACT SECTION 22 QUESTIONS)
  // ---------------------------------------------------------------------------
  const quizQuestions = useMemo(
    () => [
      {
        id: 1,
        question: "What should be the first step in a real-world machine learning project?",
        options: [
          "Select XGBoost",
          "Deploy an API",
          "Understand and formulate the business problem",
          "Tune hyperparameters",
        ],
        correctIndex: 2,
        explanation:
          "Before writing code or choosing algorithms, an ML engineer must translate the business goal into a formal prediction task (target, unit of prediction, decision timestamp, horizon, and success criteria).",
      },
      {
        id: 2,
        question: "What is the primary purpose of a baseline model?",
        options: [
          "Replace data validation",
          "Provide a reference for measuring improvement",
          "Guarantee maximum accuracy",
          "Avoid comparing algorithms",
        ],
        correctIndex: 1,
        explanation:
          "A simple, transparent baseline (e.g. majority class, historical average, simple logistic regression) establishes a reference benchmark to prove whether complex models deliver genuine incremental business value.",
      },
      {
        id: 3,
        question: "What is data leakage in real-world ML systems?",
        options: [
          "Removing missing values",
          "Using information unavailable at prediction time or contaminating evaluation",
          "Converting categorical features",
          "Collecting additional observations",
        ],
        correctIndex: 1,
        explanation:
          "Data leakage occurs when information that would not legitimately be available at the moment a prediction is required enters training, or when test data contaminates preprocessing pipelines.",
      },
      {
        id: 4,
        question: "Why can raw accuracy be extremely misleading in fraud detection?",
        options: [
          "Fraud models cannot use probabilities",
          "Fraud data may be highly imbalanced",
          "Accuracy measures regression error",
          "Fraud detection does not use labels",
        ],
        correctIndex: 1,
        explanation:
          "In fraud detection, 99.5% of transactions are legitimate. A naive model that predicts every single transaction as legitimate achieves 99.5% accuracy while catching zero fraudulent transactions. Metrics like PR-AUC and Precision@K are essential.",
      },
      {
        id: 5,
        question: "Which metric measures how many actual positive cases a classifier successfully identifies?",
        options: ["Precision", "Recall", "R-squared", "MAE"],
        correctIndex: 1,
        explanation:
          "Recall (or Sensitivity) = TP / (TP + FN). It measures the proportion of actual positive events (e.g. fraudulent transactions, defaults, or disease cases) that the model successfully detects.",
      },
      {
        id: 6,
        question: "Which evaluation strategy is required for forecasting future sales?",
        options: [
          "Random splitting regardless of time",
          "Chronological or walk-forward validation",
          "Training on the final test period",
          "Using future sales as lag features",
        ],
        correctIndex: 1,
        explanation:
          "Time-series data violates the exchangeability assumption of random cross-validation. Random splitting leaks future trends and seasonal patterns into training. Chronological or walk-forward validation trains on past intervals and evaluates strictly on subsequent future windows.",
      },
      {
        id: 7,
        question: "What is an important recommendation-system metric?",
        options: [
          "NDCG@K",
          "Mean Squared Error only",
          "Specificity only",
          "Forecast bias",
        ],
        correctIndex: 0,
        explanation:
          "Normalized Discounted Cumulative Gain (NDCG@K) evaluates recommendation quality by rewarding systems that place highly relevant items at the top of the ranked recommendation list.",
      },
      {
        id: 8,
        question: "What is the main purpose of model interpretation (XAI)?",
        options: [
          "Prove that features cause outcomes",
          "Understand how predictions are influenced by model inputs",
          "Guarantee fairness",
          "Eliminate the need for validation",
        ],
        correctIndex: 1,
        explanation:
          "Model interpretation investigates which features drive predictions, verifies whether the model relies on sensible patterns rather than spurious correlations, and explains individual high-stakes decisions.",
      },
      {
        id: 9,
        question: "Why is probability calibration especially relevant to credit-risk models?",
        options: [
          "It makes every prediction correct",
          "It checks whether predicted risks align with observed outcome frequencies",
          "It removes the need for training data",
          "It measures only training speed",
        ],
        correctIndex: 1,
        explanation:
          "Financial risk calculations depend on exact probability estimates: Expected Loss = PD * LGD * EAD. If an uncalibrated model outputs an 80% default probability when the true rate is 40%, the bank's capital reserves will be severely distorted.",
      },
      {
        id: 10,
        question: "What is the purpose of a Responsible ML assessment?",
        options: [
          "Only improve accuracy",
          "Evaluate risks involving fairness, privacy, transparency and appropriate use",
          "Remove all human involvement",
          "Guarantee that the model never fails",
        ],
        correctIndex: 1,
        explanation:
          "A Responsible ML assessment evaluates whether the model treats demographic groups fairly, respects data privacy and security regulations, maintains operational transparency, provides human oversight, and defines appropriate versus excluded scopes.",
      },
      {
        id: 11,
        question: "What essential information belongs in an experiment tracking record?",
        options: [
          "Only the final accuracy",
          "Dataset version, model configuration, metrics and code version",
          "Only a model screenshot",
          "Only the number of training samples",
        ],
        correctIndex: 1,
        explanation:
          "A comprehensive experiment record (e.g. in MLflow or W&B) logs the exact dataset version and split, feature transformations, model architecture, hyperparameters, random seeds, software dependencies, and full evaluation metrics to enable exact replication.",
      },
      {
        id: 12,
        question: "Where should full production deployment, serving APIs, MLOps, and real-time monitoring infrastructure be studied in this curriculum?",
        options: [
          "Repeat them in every case study",
          "AI Engineering M18–M20",
          "Remove them from the curriculum",
          "Only in the statistics module",
        ],
        correctIndex: 1,
        explanation:
          "Module 23 focuses on ML problem formulation, data quality, modeling, and evaluation. Production model serving APIs (FastAPI/Docker), MLOps pipelines, scalability, and production drift monitoring are systematically covered in AI Engineering Modules 18–20 without duplicate content.",
      },
    ],
    []
  );

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  }, [quizQuestions, selectedAnswers]);

  const SelectedIcon = caseSpecs.icon;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Top Navigation */}
      <ModuleNav track="ml" activeModuleId="real-world-ml-case-studies" />

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8 flex-1">
        {/* Hero Card */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200">
              <Building2 size={14} />
              <span>Module 23 &bull; Industry ML Engineering &amp; Case Studies</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Real-World Machine Learning Engineering &amp; Case Studies
            </h1>

            <p className="text-stone-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Transition from algorithmic theory to solving end-to-end production challenges. Master business problem formulation, data quality and leakage audits, baseline establishment, algorithm benchmarking, experiment tracking, and six comprehensive industry case studies: Credit Risk, Fraud Detection, Churn, Recommender Systems, Sales Forecasting, and Clinical Risk Modeling.
            </p>

            {/* Dual Tabs: Curriculum vs Interactive Workbench */}
            <div className="flex items-center gap-2 pt-4 border-t border-stone-200">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeTab === "curriculum"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <BookOpen size={16} />
                <span>Curriculum &amp; Specifications</span>
              </button>
              <button
                onClick={() => setActiveTab("workbench")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeTab === "workbench"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <Terminal size={16} />
                <span>Interactive Engineering Labs</span>
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: CURRICULUM SPECIFICATIONS */}
        {activeTab === "curriculum" && <MachineLearningRealWorldCaseStudiesSections />}

        {/* TAB 2: INTERACTIVE RESEARCH WORKBENCH */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Sub-navigation */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-2xl border border-[#e7e3da] shadow-xs">
              <button
                onClick={() => setActiveWorkbenchTab("canvas")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "canvas"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <Target size={15} />
                <span>Lab 1: Problem Formulation Canvas</span>
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("credit_risk")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "credit_risk"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <DollarSign size={15} />
                <span>Lab 2: Basel Expected Loss Simulator</span>
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("walk_forward")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "walk_forward"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <Calendar size={15} />
                <span>Lab 3: Walk-Forward Leakage Diagnostic</span>
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <HelpCircle size={15} />
                <span>Lab 4: Certification Assessment</span>
              </button>
            </div>

            {/* LAB 1: PROBLEM FORMULATION CANVAS */}
            {activeWorkbenchTab === "canvas" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 1</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Industry ML Problem Formulation &amp; Architecture Canvas
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Select one of the six production domains. Explore the formal engineering mapping from business objectives to prediction units, timestamps, horizons, leakage boundaries, and primary evaluation metrics.
                  </p>
                </div>

                {/* Domain Selector Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    { id: "credit", name: "1. Credit Risk", icon: CreditCard },
                    { id: "fraud", name: "2. Fraud Detection", icon: ShieldAlert },
                    { id: "churn", name: "3. Customer Churn", icon: UserX },
                    { id: "recsys", name: "4. Recommender Systems", icon: ShoppingBag },
                    { id: "sales", name: "5. Sales Forecasting", icon: LineChart },
                    { id: "medical", name: "6. Clinical Risk", icon: Stethoscope },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setSelectedCase(item.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                          selectedCase === item.id
                            ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                            : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        <Icon size={14} />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Architecture Canvas Cards */}
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-5">
                  <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
                    <div className="p-2.5 rounded-xl bg-orange-600 text-white">
                      <SelectedIcon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-stone-900">{caseSpecs.title}</h3>
                      <span className="text-xs text-orange-700 font-mono font-bold uppercase">{caseSpecs.industry}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5">
                      <span className="font-bold text-stone-900 uppercase font-mono text-[11px] block text-orange-700">
                        1. Business Objective &amp; Impact
                      </span>
                      <p className="text-stone-600 leading-relaxed">{caseSpecs.businessGoal}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5">
                      <span className="font-bold text-stone-900 uppercase font-mono text-[11px] block text-orange-700">
                        2. Formal ML Task &amp; Target (y)
                      </span>
                      <p className="text-stone-900 font-bold">{caseSpecs.mlTask}</p>
                      <p className="text-stone-600 font-mono text-[11px]">{caseSpecs.target}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5">
                      <span className="font-bold text-stone-900 uppercase font-mono text-[11px] block text-orange-700">
                        3. Prediction Unit, Timestamp &amp; Horizon
                      </span>
                      <p className="text-stone-600"><strong>Unit:</strong> {caseSpecs.unit}</p>
                      <p className="text-stone-600"><strong>Timestamp:</strong> {caseSpecs.timestamp}</p>
                      <p className="text-stone-600"><strong>Horizon:</strong> {caseSpecs.horizon}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5">
                      <span className="font-bold text-stone-900 uppercase font-mono text-[11px] block text-red-600">
                        4. Data Leakage Prevention Check
                      </span>
                      <p className="text-stone-600 leading-relaxed">{caseSpecs.leakageCheck}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5">
                      <span className="font-bold text-stone-900 uppercase font-mono text-[11px] block text-orange-700">
                        5. Feature Engineering &amp; Available Signals
                      </span>
                      <p className="text-stone-600 leading-relaxed">{caseSpecs.features}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1.5">
                      <span className="font-bold text-stone-900 uppercase font-mono text-[11px] block text-orange-700">
                        6. Baseline &amp; Evaluation Metrics
                      </span>
                      <p className="text-stone-600"><strong>Baseline:</strong> {caseSpecs.baselines}</p>
                      <p className="text-stone-600"><strong>Primary Metrics:</strong> {caseSpecs.metrics}</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-orange-100/70 border border-orange-200 text-xs text-orange-950 flex items-start gap-2.5">
                    <ShieldCheck size={16} className="text-orange-700 shrink-0 mt-0.5" />
                    <div>
                      <strong>Governance &amp; Responsible ML:</strong> {caseSpecs.governance}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: BASEL EXPECTED LOSS SIMULATOR */}
            {activeWorkbenchTab === "credit_risk" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 2</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Banking Credit Risk &amp; Basel Expected Loss Simulator
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Calculate regulatory Expected Loss (EL = PD &times; LGD &times; EAD) across a 1,000-loan portfolio. Contrast a naive uncalibrated model against calibrated machine learning to observe the financial impact on mandatory capital reserves.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 text-xs">
                    <span className="font-bold text-stone-800 uppercase tracking-wider block">
                      Portfolio Credit Risk Parameters
                    </span>

                    <div className="space-y-2">
                      <span className="text-stone-700 font-bold block">Credit Risk Model Formulation:</span>
                      <button
                        onClick={() => setModelType("calibrated_ml")}
                        className={`w-full text-left p-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                          modelType === "calibrated_ml"
                            ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Calibrated ML Model (Platt Scaling)
                      </button>
                      <button
                        onClick={() => setModelType("naive_flat")}
                        className={`w-full text-left p-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                          modelType === "naive_flat"
                            ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Uncalibrated / Naive Scorecard
                      </button>
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Average Loan Exposure (EAD):</span>
                        <strong>${(eadAmount / 1000).toFixed(0)}k</strong>
                      </div>
                      <input
                        type="range"
                        min="50000"
                        max="500000"
                        step="25000"
                        value={eadAmount}
                        onChange={(e) => setEadAmount(parseInt(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Loss Given Default (LGD):</span>
                        <strong>{(lgdRate * 100).toFixed(0)}%</strong>
                      </div>
                      <input
                        type="range"
                        min="0.20"
                        max="0.70"
                        step="0.05"
                        value={lgdRate}
                        onChange={(e) => setLgdRate(parseFloat(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div className="pt-2 border-t border-stone-200 space-y-1.5 font-mono text-xs">
                      <div className="flex justify-between">
                        <span>Model Brier Score:</span>
                        <strong className="text-orange-600">{creditRiskStats.brierScore.toFixed(3)}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Avg Predicted PD:</span>
                        <strong className="text-stone-800">{(creditRiskStats.avgPd * 100).toFixed(1)}%</strong>
                      </div>
                    </div>
                  </div>

                  {/* Portfolio Cards & Visualizer */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-stone-500 block text-[10px] uppercase font-bold">Expected Loss / Loan</span>
                        <span className="text-xl font-bold text-stone-900">${creditRiskStats.elPerLoan.toFixed(0)}</span>
                        <span className="text-[10px] text-stone-500 block font-sans mt-0.5">EL = PD &times; LGD &times; EAD</span>
                      </div>
                      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-stone-500 block text-[10px] uppercase font-bold">1,000-Loan Portfolio EL</span>
                        <span className="text-xl font-bold text-orange-600">${(creditRiskStats.portfolioTotalEL / 1000000).toFixed(2)}M</span>
                        <span className="text-[10px] text-stone-500 block font-sans mt-0.5">Required Capital Reserve</span>
                      </div>
                      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                        <span className="text-emerald-800 block text-[10px] uppercase font-bold">True Empirical Loss</span>
                        <span className="text-xl font-bold text-emerald-900">${(creditRiskStats.realisticLoss / 1000000).toFixed(2)}M</span>
                        <span className="text-[10px] text-emerald-700 block font-sans mt-0.5">Ground-truth 4% baseline</span>
                      </div>
                    </div>

                    {/* Capital Disparity Banner */}
                    <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-2">
                      <div className="text-xs text-stone-400 font-mono flex justify-between">
                        <span>Regulatory Capital Allocation Analysis</span>
                        <span className="text-orange-400 font-bold">Basel Banking Accord Compliance</span>
                      </div>
                      <p className="text-xs text-stone-300 leading-relaxed">
                        {modelType === "naive_flat" ? (
                          <>
                            Because the uncalibrated model artificially inflates predicted default probability to 8.5% (Brier: 0.142), the bank is forced to lock up <strong>${(creditRiskStats.capitalDisparity / 1000000).toFixed(2)}M in excess idle capital reserves</strong> that cannot be deployed for lending or generating interest revenue!
                          </>
                        ) : (
                          <>
                            With calibrated machine learning (Platt scaling), predicted probability aligns precisely with the true 4.0% default rate (Brier: 0.038). The bank avoids capital misallocation while maintaining 100% solvency compliance.
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: WALK-FORWARD VALIDATION SIMULATOR */}
            {activeWorkbenchTab === "walk_forward" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 3</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Temporal Walk-Forward Validation &amp; Lookahead Leakage Simulator
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Contrast naive random K-Fold cross-validation against chronological walk-forward validation on time-series sales forecasting data. Discover how random splitting creates lookahead leakage that causes models to collapse in live production.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 text-xs">
                    <span className="font-bold text-stone-800 uppercase tracking-wider block">
                      Validation Strategy
                    </span>

                    <div className="space-y-2">
                      <button
                        onClick={() => setValMethod("walk_forward")}
                        className={`w-full text-left p-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                          valMethod === "walk_forward"
                            ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Chronological Walk-Forward (Expanding Window)
                      </button>
                      <button
                        onClick={() => setValMethod("random_kfold")}
                        className={`w-full text-left p-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                          valMethod === "random_kfold"
                            ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Naive Random K-Fold (Contaminated)
                      </button>
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Forecast Horizon:</span>
                        <strong>{horizonMonths} Month(s)</strong>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="3"
                        value={horizonMonths}
                        onChange={(e) => setHorizonMonths(parseInt(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    {valMethod === "random_kfold" ? (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-950 flex items-start gap-2">
                        <AlertTriangle size={15} className="text-red-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>Lookahead Leakage Detected:</strong> Future data points from month 8 inform predictions for month 2. Offline R&sup2; is artificially inflated to 0.94, but the model will fail in production.
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-emerald-700 shrink-0 mt-0.5" />
                        <div>
                          <strong>Zero Temporal Leakage:</strong> Training strictly precedes validation horizon. Realistic offline R&sup2; of 0.81 accurately reflects true production performance.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Timeline Visualization */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-3 font-mono text-xs">
                      <div className="flex justify-between items-center text-stone-400">
                        <span>Temporal Split Windows (Jan &rarr; Dec 2026)</span>
                        <div className="flex gap-3 text-[11px]">
                          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-blue-500 inline-block"></span> Training Data</span>
                          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-orange-500 inline-block"></span> Validation Window</span>
                        </div>
                      </div>

                      {valMethod === "walk_forward" ? (
                        <div className="space-y-3 pt-2">
                          <div className="space-y-1">
                            <span className="text-[11px] text-stone-400">Fold 1: Train Jan&ndash;Jun &rarr; Test Jul</span>
                            <div className="flex h-5 rounded overflow-hidden">
                              <div className="w-6/12 bg-blue-600 flex items-center justify-center text-[10px]">Train (6m)</div>
                              <div className="w-1/12 bg-orange-600 flex items-center justify-center text-[10px]">Test</div>
                              <div className="w-5/12 bg-stone-800"></div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <span className="text-[11px] text-stone-400">Fold 2: Train Jan&ndash;Jul &rarr; Test Aug</span>
                            <div className="flex h-5 rounded overflow-hidden">
                              <div className="w-7/12 bg-blue-600 flex items-center justify-center text-[10px]">Train (7m)</div>
                              <div className="w-1/12 bg-orange-600 flex items-center justify-center text-[10px]">Test</div>
                              <div className="w-4/12 bg-stone-800"></div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <span className="text-[11px] text-stone-400">Fold 3: Train Jan&ndash;Aug &rarr; Test Sep</span>
                            <div className="flex h-5 rounded overflow-hidden">
                              <div className="w-8/12 bg-blue-600 flex items-center justify-center text-[10px]">Train (8m)</div>
                              <div className="w-1/12 bg-orange-600 flex items-center justify-center text-[10px]">Test</div>
                              <div className="w-3/12 bg-stone-800"></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3 pt-2">
                          <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/60 text-red-200 text-xs">
                            Random 5-fold cross-validation randomly scatters train and test dots across the entire calendar year:
                          </div>
                          <div className="flex h-7 rounded overflow-hidden border border-red-500/50">
                            {[1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1].map((isTrain, idx) => (
                              <div
                                key={idx}
                                className={`flex-1 flex items-center justify-center text-[10px] font-bold ${
                                  isTrain ? "bg-blue-600" : "bg-red-600"
                                }`}
                              >
                                {isTrain ? "Tr" : "Te"}
                              </div>
                            ))}
                          </div>
                          <span className="text-[10px] text-stone-400 block text-center">
                            (Notice test samples &apos;Te&apos; intermingled between training samples &apos;Tr&apos; across months!)
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 4: CERTIFICATION ASSESSMENT */}
            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
                  <div>
                    <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 4</span>
                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                      Module 23 Comprehensive Knowledge Assessment
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Validate your real-world ML engineering competencies covering problem formulation, leakage prevention, Basel credit risk, and responsible AI.
                    </p>
                  </div>
                  {showResults && (
                    <div className="px-5 py-2.5 rounded-2xl bg-orange-50 border border-orange-200 text-orange-950 font-bold text-sm">
                      Score: {quizScore} / {quizQuestions.length} ({((quizScore / quizQuestions.length) * 100).toFixed(0)}%)
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q, idx) => (
                    <div key={q.id} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <h3 className="font-bold text-stone-900 text-sm">{q.question}</h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 pl-9">
                        {q.options.map((opt, oIdx) => {
                          const isSelected = selectedAnswers[q.id] === oIdx;
                          let btnClass = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";
                          if (isSelected) {
                            btnClass = "bg-orange-600 text-white border-orange-600 shadow-xs";
                          }
                          if (showResults) {
                            if (oIdx === q.correctIndex) {
                              btnClass = "bg-emerald-600 text-white border-emerald-600";
                            } else if (isSelected && oIdx !== q.correctIndex) {
                              btnClass = "bg-red-600 text-white border-red-600";
                            }
                          }

                          return (
                            <button
                              key={oIdx}
                              onClick={() => {
                                if (!showResults) {
                                  setSelectedAnswers((prev) => ({ ...prev, [q.id]: oIdx }));
                                }
                              }}
                              className={`text-left p-3 rounded-xl border text-xs font-medium transition-all cursor-pointer ${btnClass}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {showResults && (
                        <div className="mt-3 ml-9 p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950">
                          <strong>Explanation:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-stone-200">
                  <button
                    onClick={() => {
                      setSelectedAnswers({});
                      setShowResults(false);
                    }}
                    className="px-5 py-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-100 font-bold text-xs cursor-pointer"
                  >
                    Reset Answers
                  </button>
                  <button
                    onClick={() => setShowResults(true)}
                    className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                  >
                    Submit &amp; Evaluate Answers
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Navigation: Previous Module / Overview */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/machine-learning/hyperparameter-optimization-xai")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 22 &mdash; Hyperparameter Optimization &amp; Explainable ML</span>
          </button>

          <button
            onClick={() => navigate("/learning/machine-learning")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs transition-colors"
          >
            <span>Complete Track: Return to Machine Learning Overview</span>
            <CheckCircle2 size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
