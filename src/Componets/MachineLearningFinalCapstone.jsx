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
  Award,
  Zap,
  Server,
  Code2,
  Play,
  RotateCcw,
  FileText,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import MachineLearningFinalCapstoneSections from "./MachineLearningFinalCapstoneSections";

export default function MachineLearningFinalCapstone() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("simulator"); // 'simulator' | 'interview_drills' | 'system_design' | 'readiness_quiz'

  // ---------------------------------------------------------------------------
  // LAB 1: END-TO-END TELECOM CHURN SIMULATOR & PIPELINE
  // ---------------------------------------------------------------------------
  const [customer, setCustomer] = useState({
    tenure: 4,
    monthlyCharges: 85,
    totalCharges: 340,
    contract: "Month-to-month", // 'Month-to-month' | 'One year' | 'Two year'
    paymentMethod: "Electronic check", // 'Electronic check' | 'Credit card' | 'Bank transfer'
    internetService: "Fiber optic", // 'Fiber optic' | 'DSL' | 'No'
    techSupport: "No", // 'Yes' | 'No'
    supportCalls: 4,
  });

  const [threshold, setThreshold] = useState(0.32); // Business-optimized threshold

  // Real-time engineered features and churn probability calculation
  const simulationResults = useMemo(() => {
    const tenureSafe = Math.max(1, customer.tenure);
    const supportRate = customer.supportCalls / tenureSafe;
    const avgSpending = customer.totalCharges / tenureSafe;
    const spendingRatio = avgSpending / Math.max(1, customer.monthlyCharges);

    // Logistic scoring approximation mirroring trained gradient boosted pipeline
    let logOdds = -1.2; // Baseline intercept (~23% churn baseline)

    // Contract impact
    if (customer.contract === "Month-to-month") logOdds += 1.45;
    else if (customer.contract === "One year") logOdds -= 0.65;
    else if (customer.contract === "Two year") logOdds -= 1.85;

    // Tenure hazard (higher in early months)
    if (customer.tenure <= 6) logOdds += 0.85;
    else if (customer.tenure > 24) logOdds -= 0.95;

    // Monthly Charges & Spending
    logOdds += (customer.monthlyCharges - 65) * 0.02;

    // Internet service & Tech Support
    if (customer.internetService === "Fiber optic") logOdds += 0.55;
    if (customer.techSupport === "No") logOdds += 0.45;
    else logOdds -= 0.5;

    // Payment method
    if (customer.paymentMethod === "Electronic check") logOdds += 0.4;
    else logOdds -= 0.3;

    // Support calls & Support rate
    logOdds += customer.supportCalls * 0.3 + supportRate * 0.4;

    const prob = 1 / (1 + Math.exp(-logOdds));
    const isChurnDefault = prob >= 0.5;
    const isChurnOptimized = prob >= threshold;

    // SHAP-like attribution breakdown
    const attributions = [
      {
        feature: `Contract = ${customer.contract}`,
        value: customer.contract === "Month-to-month" ? "+0.32" : customer.contract === "One year" ? "-0.15" : "-0.38",
        impact: customer.contract === "Month-to-month" ? "increase" : "decrease",
      },
      {
        feature: `Tenure = ${customer.tenure} mo (hazard)`,
        value: customer.tenure <= 6 ? "+0.21" : customer.tenure > 24 ? "-0.24" : "-0.05",
        impact: customer.tenure <= 6 ? "increase" : "decrease",
      },
      {
        feature: `Support Calls = ${customer.supportCalls} (${supportRate.toFixed(2)}/mo)`,
        value: customer.supportCalls >= 3 ? "+0.18" : "-0.12",
        impact: customer.supportCalls >= 3 ? "increase" : "decrease",
      },
      {
        feature: `Tech Support = ${customer.techSupport}`,
        value: customer.techSupport === "No" ? "+0.14" : "-0.16",
        impact: customer.techSupport === "No" ? "increase" : "decrease",
      },
      {
        feature: `Payment = ${customer.paymentMethod}`,
        value: customer.paymentMethod === "Electronic check" ? "+0.11" : "-0.08",
        impact: customer.paymentMethod === "Electronic check" ? "increase" : "decrease",
      },
    ];

    // Business Action Recommendation
    let recommendation = "Standard Engagement — Maintain high satisfaction";
    let actionPriority = "NORMAL";
    let expectedSavings = "$0";

    if (prob >= 0.7) {
      recommendation = "DISPATCH VIP RETENTION AGENT — Offer 15% discount on 1-year contract lock";
      actionPriority = "CRITICAL_ACTION_REQUIRED";
      expectedSavings = "$600 (Preserves Customer LTV)";
    } else if (prob >= threshold) {
      recommendation = "Automated Retention Email — Highlight Free Tech Support Upgrade & Loyalty Points";
      actionPriority = "ELEVATED_RISK";
      expectedSavings = "$380 (High Conversion Probability)";
    }

    return {
      supportRate,
      avgSpending,
      spendingRatio,
      prob,
      isChurnDefault,
      isChurnOptimized,
      attributions,
      recommendation,
      actionPriority,
      expectedSavings,
    };
  }, [customer, threshold]);

  // ---------------------------------------------------------------------------
  // LAB 2: INTERVIEW SIMULATOR & CASE STUDY DRILL ENGINE
  // ---------------------------------------------------------------------------
  const [interviewSubTab, setInterviewSubTab] = useState("python"); // 'python' | 'stats' | 'algorithms' | 'case_study'
  
  // Python array test state
  const [testArrayInput, setTestArrayInput] = useState("10, 20, 30, 20, 40");
  const parsedArray = useMemo(() => {
    return testArrayInput
      .split(",")
      .map((x) => parseFloat(x.trim()))
      .filter((x) => !isNaN(x));
  }, [testArrayInput]);

  const secondLargestResult = useMemo(() => {
    if (parsedArray.length < 2) return null;
    let first = -Infinity;
    let second = -Infinity;
    for (const n of parsedArray) {
      if (n > first) {
        second = first;
        first = n;
      } else if (n < first && n > second) {
        second = n;
      }
    }
    return second === -Infinity ? null : second;
  }, [parsedArray]);

  // Bayes Theorem Simulator
  const [priorA, setPriorA] = useState(0.2); // P(Churn) = 20%
  const [likelihoodBgivenA, setLikelihoodBgivenA] = useState(0.85); // P(High Drop | Churn) = 85%
  const [falseAlarmBgivenNotA, setFalseAlarmBgivenNotA] = useState(0.1); // P(High Drop | No Churn) = 10%

  const posteriorAgivenB = useMemo(() => {
    const pB = likelihoodBgivenA * priorA + falseAlarmBgivenNotA * (1 - priorA);
    if (pB === 0) return 0;
    return (likelihoodBgivenA * priorA) / pB;
  }, [priorA, likelihoodBgivenA, falseAlarmBgivenNotA]);

  // Selected Case Study
  const [selectedCaseStudy, setSelectedCaseStudy] = useState("churn"); // 'churn' | 'fraud' | 'recsys' | 'house' | 'segmentation'

  // ---------------------------------------------------------------------------
  // LAB 3: SYSTEM DESIGN & DRIFT EXPLORER
  // ---------------------------------------------------------------------------
  const [inferenceMode, setInferenceMode] = useState("realtime"); // 'batch' | 'realtime'
  const [qps, setQps] = useState(1500);
  const [cacheHitRate, setCacheHitRate] = useState(0.65);
  const [simulatedDrift, setSimulatedDrift] = useState("none"); // 'none' | 'data_drift' | 'concept_drift'

  const systemMetrics = useMemo(() => {
    const effectiveQps = qps * (1 - cacheHitRate);
    const p99Latency = inferenceMode === "realtime" ? 28 + Math.round(effectiveQps / 120) : 15;
    const computeReplicas = Math.max(2, Math.ceil(effectiveQps / 300));
    const monthlyCost = computeReplicas * 140 + (inferenceMode === "realtime" ? 220 : 80);

    let psi = 0.04; // Normal
    let driftStatus = "STABLE & ACCURATE";
    let driftAction = "Continuous monitoring active. Metrics within 99% confidence interval.";

    if (simulatedDrift === "data_drift") {
      psi = 0.28;
      driftStatus = "COVARIATE DATA DRIFT DETECTED (PSI > 0.25)";
      driftAction = "Input feature distribution shifted. Trigger automated validation on new demographic cohort.";
    } else if (simulatedDrift === "concept_drift") {
      psi = 0.08;
      driftStatus = "CONCEPT DRIFT DETECTED (Decoupled P(y|X))";
      driftAction = "Model accuracy degrading despite steady input distribution. Immediate model retraining required.";
    }

    return {
      effectiveQps,
      p99Latency,
      computeReplicas,
      monthlyCost,
      psi,
      driftStatus,
      driftAction,
    };
  }, [inferenceMode, qps, cacheHitRate, simulatedDrift]);

  // ---------------------------------------------------------------------------
  // LAB 4: 24-SKILL READINESS TRACKER & CERTIFICATION ASSESSMENT
  // ---------------------------------------------------------------------------
  const skillsList = [
    // End-to-End ML (8)
    { id: "e2e_1", cat: "End-to-End ML", name: "Formulate business problems as ML tasks" },
    { id: "e2e_2", cat: "End-to-End ML", name: "Research and select suitable datasets" },
    { id: "e2e_3", cat: "End-to-End ML", name: "Perform preprocessing and EDA" },
    { id: "e2e_4", cat: "End-to-End ML", name: "Engineer and select features" },
    { id: "e2e_5", cat: "End-to-End ML", name: "Choose and train suitable algorithms" },
    { id: "e2e_6", cat: "End-to-End ML", name: "Tune hyperparameters and use cross-validation" },
    { id: "e2e_7", cat: "End-to-End ML", name: "Evaluate models using appropriate metrics" },
    { id: "e2e_8", cat: "End-to-End ML", name: "Explain predictions and analyze errors" },
    // ML Engineering (6)
    { id: "eng_1", cat: "ML Engineering", name: "Build reusable preprocessing pipelines" },
    { id: "eng_2", cat: "ML Engineering", name: "Serialize and load trained models" },
    { id: "eng_3", cat: "ML Engineering", name: "Define model inputs and prediction outputs" },
    { id: "eng_4", cat: "ML Engineering", name: "Prepare models for API integration" },
    { id: "eng_5", cat: "ML Engineering", name: "Understand production deployment requirements" },
    { id: "eng_6", cat: "ML Engineering", name: "Document and version ML projects" },
    // Technical Interviews (6)
    { id: "int_1", cat: "Technical Interviews", name: "Solve Python coding problems" },
    { id: "int_2", cat: "Technical Interviews", name: "Explain statistics and probability" },
    { id: "int_3", cat: "Technical Interviews", name: "Explain classical ML algorithms" },
    { id: "int_4", cat: "Technical Interviews", name: "Compare algorithms and evaluation metrics" },
    { id: "int_5", cat: "Technical Interviews", name: "Solve ML business case studies" },
    { id: "int_6", cat: "Technical Interviews", name: "Discuss ML system design fundamentals" },
    // Capstone (4)
    { id: "cap_1", cat: "Capstone", name: "Complete a real-world ML project" },
    { id: "cap_2", cat: "Capstone", name: "Publish professional project documentation" },
    { id: "cap_3", cat: "Capstone", name: "Present model decisions and results" },
    { id: "cap_4", cat: "Capstone", name: "Explain limitations and future improvements" },
  ];

  const [checkedSkills, setCheckedSkills] = useState({});

  const toggleSkill = (id) => {
    setCheckedSkills((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedSkillCount = Object.values(checkedSkills).filter(Boolean).length;
  const readinessPercent = Math.round((completedSkillCount / skillsList.length) * 100);

  // 12-Question Quiz
  const quizData = [
    {
      id: 1,
      question: "Which of the following represents the correct logical sequence of an end-to-end machine learning project lifecycle?",
      options: [
        "Hyperparameter tuning → Model deployment → Exploratory data analysis → Problem definition",
        "Problem definition → Data collection & EDA → Feature engineering → Model selection & training → Validation & explainability → Pipeline serialization → Deployment readiness",
        "Algorithm selection → Model serialization → Feature engineering → Problem formulation → Evaluation",
        "Data collection → API integration → Deep learning → Baseline evaluation → Documentation"
      ],
      correctIndex: 1,
      explanation: "An end-to-end ML workflow must start with clear business problem formulation and data discovery before feature engineering, model training, validation, explainability, pipeline encapsulation, and deployment preparation."
    },
    {
      id: 2,
      question: "When formulating a customer churn prediction problem, why is defining a specific prediction timeframe (e.g., 'churn within 30 days') essential?",
      options: [
        "It reduces the size of the dataset by 50%",
        "Without a bounded time horizon, all customers eventually churn over infinite time, making the target non-stationary and uninformative",
        "It eliminates the need to perform cross-validation",
        "Scikit-learn algorithms require time horizons to initialize loss functions"
      ],
      correctIndex: 1,
      explanation: "Over an infinite horizon, every customer eventually cancels or leaves. A well-defined prediction horizon (such as churn within 30, 60, or 90 days) defines a stationary, actionable label that operations and retention marketing teams can act on proactively."
    },
    {
      id: 3,
      question: "What is the primary danger of using customer lifetime support calls in churn prediction if some support calls took place after account cancellation was requested?",
      options: [
        "Increased computational latency during inference",
        "Severe target leakage / lookahead bias that artificially inflates training metrics but causes failure in production",
        "Violation of logistic regression homoscedasticity assumptions",
        "Overfitting due to excessive numerical feature columns"
      ],
      correctIndex: 1,
      explanation: "Target/lookahead leakage occurs when features contain information that would not be available at the decision timestamp in production. If post-cancellation support calls are included, the model learns unrealistic future clues that vanish when scoring active customers."
    },
    {
      id: 4,
      question: "Why is 'stratify=y' strongly recommended when splitting an imbalanced dataset (e.g., 80% non-churn, 20% churn)?",
      options: [
        "It automatically synthesizes minority class samples using SMOTE",
        "It ensures that both training and testing sets retain approximately the identical class distribution as the original population",
        "It standardizes numerical features to zero mean and unit variance",
        "It enforces chronological ordering of rows"
      ],
      correctIndex: 1,
      explanation: "Stratified splitting ensures that each split (train, validation, and test) mirrors the population's exact class proportions. Pure random splitting risks creating unrepresentative splits with skewed positive-to-negative ratios, distorting evaluation metrics."
    },
    {
      id: 5,
      question: "In telecom churn modeling, why is an engineered ratio like 'Support Rate = Total Support Requests / Tenure' often more predictive than raw call count?",
      options: [
        "It eliminates the need for one-hot encoding",
        "It normalizes customer interaction velocity per unit time, distinguishing a new frustrated customer from a loyal long-term customer with infrequent calls",
        "It guarantees a Gaussian distribution across all features",
        "It transforms the problem from supervised to unsupervised clustering"
      ],
      correctIndex: 1,
      explanation: "5 support calls from a customer with 1 month tenure indicates critical frustration, whereas 5 calls across 50 months indicates high satisfaction. Feature ratios capture behavioral intensity and velocity per unit of exposure."
    },
    {
      id: 6,
      question: "How should the final held-out test set be treated during hyperparameter optimization (e.g., GridSearch, RandomizedSearch, or Optuna)?",
      options: [
        "Used as the validation fold in 5-fold cross-validation",
        "Kept completely untouched until the final candidate model is locked, preventing data snooping and optimistic bias",
        "Refitted after every trial to update tree split thresholds",
        "Combined with training data to calculate feature importance"
      ],
      correctIndex: 1,
      explanation: "The test set must remain quarantined and untouched throughout all experimentation, feature selection, and hyperparameter tuning. Evaluating hyperparameters on the test set causes subtle data snooping, resulting in over-optimistic generalization estimates."
    },
    {
      id: 7,
      question: "In customer churn prediction, why is high Recall often prioritized over high Precision when retention interventions (e.g., a personalized email offer) have very low marginal cost?",
      options: [
        "High recall eliminates all false positives",
        "Missing a customer who is about to churn (False Negative) loses high customer lifetime value, while sending an offer to a non-churner (False Positive) carries low business cost",
        "Accuracy cannot be calculated when precision is lower than recall",
        "Tree-based algorithms only optimize recall during tree splitting"
      ],
      correctIndex: 1,
      explanation: "Evaluation metrics must align with business economics: the cost of a False Negative (lost customer lifetime value, e.g. $600/yr) far exceeds the cost of a False Positive (a $5 retention discount coupon sent to a customer who wasn't leaving)."
    },
    {
      id: 8,
      question: "What does a positive SHAP value for a customer's 'ContractType == Month-to-month' feature indicate?",
      options: [
        "Month-to-month contracts definitely cause customers to cancel their subscriptions",
        "The feature increases this customer's predicted log-odds/probability of churn relative to the baseline dataset expectation",
        "The feature has zero correlation with the target variable",
        "The model must be retrained without categorical features"
      ],
      correctIndex: 1,
      explanation: "In SHAP (Shapley Additive exPlanations), a positive attribution indicates that the presence or value of that feature shifted the model's prediction higher than the expected baseline value. However, SHAP reflects model associations, not proven causal interventions."
    },
    {
      id: 9,
      question: "Why is wrapping ColumnTransformer and the classifier into a unified Scikit-learn Pipeline superior to transforming data prior to splitting?",
      options: [
        "It prevents data leakage by fitting imputers and scalers strictly on training folds and guarantees identical sequential transformations during inference",
        "It automatically parallelizes training across multiple cloud GPUs",
        "It converts gradient boosted trees into linear models",
        "It bypasses the need for test sets"
      ],
      correctIndex: 0,
      explanation: "A unified Pipeline encapsulates all transformation logic (imputation, scaling, encoding) and the estimator. When evaluated inside cross-validation, transformers fit only on training folds and never see validation folds, eliminating data leakage and ensuring seamless deployment."
    },
    {
      id: 10,
      question: "Why is loading untrusted pickle or joblib files from unknown third parties considered a severe cybersecurity vulnerability?",
      options: [
        "Pickle files corrupt GPU memory buffers",
        "The deserialization process can execute arbitrary malicious Python bytecode embedded within the payload (__reduce__ exploit)",
        "Joblib files cannot store Scikit-learn models",
        "Deserialization removes hyperparameter configurations"
      ],
      correctIndex: 1,
      explanation: "Python's pickle/joblib serialization format is an executable bytecode format. When unpickled, arbitrary code defined in the object's `__reduce__` method will execute with the privileges of the running Python process. Production models must come only from authenticated, trusted artifact registries."
    },
    {
      id: 11,
      question: "In an ML technical interview, how should you succinctly contrast Bagging (e.g., Random Forest) with Boosting (e.g., XGBoost, LightGBM)?",
      options: [
        "Bagging is for unsupervised learning; Boosting is for supervised regression",
        "Bagging trains independent parallel models on bootstrap samples to reduce variance; Boosting trains sequential models where each corrects predecessor errors to reduce bias",
        "Bagging only works on text; Boosting only works on images",
        "Bagging uses gradient descent; Boosting uses closed-form matrix inversion"
      ],
      correctIndex: 1,
      explanation: "Bagging aggregates parallel, low-bias deep trees trained on bootstrap samples to reduce model variance. Boosting fits shallow weak learners sequentially, with each subsequent learner focusing on the pseudo-residuals or misclassified weights of earlier models to systematically reduce bias."
    },
    {
      id: 12,
      question: "If customer demographics and website usage features remain identical over time, but competitor price reductions cause customer churn rates to spike, what form of drift has occurred?",
      options: [
        "Covariate Shift / Data Drift (P(X) changed)",
        "Concept Drift (P(y|X) changed while P(X) remained constant)",
        "Prior Probability Shift only",
        "Label Leakage"
      ],
      correctIndex: 1,
      explanation: "Concept drift occurs when the underlying mathematical mapping or relationship between input features and target labels P(y|X) changes over time (here driven by external market competition), even though the input distribution P(X) of customer features has not shifted."
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const score = useMemo(() => {
    let correct = 0;
    quizData.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) correct++;
    });
    return correct;
  }, [selectedAnswers]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Track & Course Navigation Header */}
      <ModuleNav currentTrack="machine-learning" track="machine-learning" />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8 flex-1">
        {/* HERO CARD */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-orange-100/60 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase text-orange-700 bg-orange-50 border border-orange-200 flex items-center gap-1.5">
                <Sparkles size={13} />
                Module 24 &bull; The Grand Finale Capstone
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-stone-600 bg-stone-100 border border-stone-200">
                Machine Learning Track Completion
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 size={13} />
                24 / 24 Modules
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              Final Machine Learning Capstone &amp; Interview Mastery
            </h1>

            <p className="text-stone-600 text-sm sm:text-base max-w-4xl leading-relaxed">
              Synthesize everything you have learned across the 24 modules: from data preprocessing, feature engineering, and ensemble boosting to time series, Bayesian inference, and explainable AI. Build a complete customer churn prediction platform, master technical interviews across coding, probability, and system design, and verify your graduation readiness.
            </p>

            {/* Top Navigation Tabs */}
            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "curriculum"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "bg-white text-stone-700 border border-[#e7e3da] hover:bg-stone-50"
                }`}
              >
                <BookOpen size={16} />
                <span>Capstone Curriculum (All 24 Topics)</span>
              </button>

              <button
                onClick={() => setActiveTab("workbench")}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "workbench"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "bg-white text-stone-700 border border-[#e7e3da] hover:bg-stone-50"
                }`}
              >
                <Terminal size={16} />
                <span>Interactive Workbench &amp; Labs</span>
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: CURRICULUM */}
        {activeTab === "curriculum" && (
          <MachineLearningFinalCapstoneSections />
        )}

        {/* TAB 2: INTERACTIVE WORKBENCH */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Bar */}
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-2 flex flex-wrap gap-2 shadow-xs">
              {[
                { id: "simulator", label: "Lab 1: End-to-End Churn Simulator", icon: Play },
                { id: "interview_drills", label: "Lab 2: Interview Question Bank", icon: Terminal },
                { id: "system_design", label: "Lab 3: System Design & Drift", icon: Layers },
                { id: "readiness_quiz", label: "Lab 4: Readiness Tracker & Quiz", icon: Award },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveWorkbenchTab(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer ${
                      activeWorkbenchTab === tab.id
                        ? "bg-orange-600 text-white shadow-xs"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* ============================================================= */}
            {/* LAB 1: CHURN SIMULATOR & PIPELINE */}
            {/* ============================================================= */}
            {activeWorkbenchTab === "simulator" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                      Live Pipeline &bull; HistGradientBoosting Model
                    </span>
                    <h3 className="text-xl font-black text-stone-900">
                      End-to-End Telecom Churn Prediction Engine
                    </h3>
                  </div>

                  <button
                    onClick={() => {
                      setCustomer({
                        tenure: 4,
                        monthlyCharges: 85,
                        totalCharges: 340,
                        contract: "Month-to-month",
                        paymentMethod: "Electronic check",
                        internetService: "Fiber optic",
                        techSupport: "No",
                        supportCalls: 4,
                      });
                      setThreshold(0.32);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 text-xs text-stone-600 hover:bg-stone-50 font-bold cursor-pointer"
                  >
                    <RotateCcw size={14} />
                    <span>Reset Parameters</span>
                  </button>
                </div>

                {/* Input Controls Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Column 1: Customer Tenure & Financials */}
                  <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-4">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-stone-800 flex items-center gap-2">
                      <Clock size={16} className="text-orange-600" />
                      Tenure &amp; Financials
                    </h4>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>Account Tenure:</span>
                        <span className="text-orange-600 font-mono">{customer.tenure} months</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="72"
                        value={customer.tenure}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          setCustomer((prev) => ({
                            ...prev,
                            tenure: val,
                            totalCharges: val * prev.monthlyCharges,
                          }));
                        }}
                        className="w-full accent-orange-600"
                      />
                      <div className="flex justify-between text-[10px] text-stone-400">
                        <span>1 mo (High risk)</span>
                        <span>72 mo (Loyal)</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>Monthly Charges:</span>
                        <span className="text-orange-600 font-mono">${customer.monthlyCharges}/mo</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="120"
                        step="5"
                        value={customer.monthlyCharges}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          setCustomer((prev) => ({
                            ...prev,
                            monthlyCharges: val,
                            totalCharges: prev.tenure * val,
                          }));
                        }}
                        className="w-full accent-orange-600"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>Support Requests:</span>
                        <span className="text-orange-600 font-mono">{customer.supportCalls} calls</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="10"
                        value={customer.supportCalls}
                        onChange={(e) =>
                          setCustomer((prev) => ({ ...prev, supportCalls: parseInt(e.target.value) }))
                        }
                        className="w-full accent-orange-600"
                      />
                    </div>
                  </div>

                  {/* Column 2: Subscription & Contract */}
                  <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-4">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-stone-800 flex items-center gap-2">
                      <FileText size={16} className="text-orange-600" />
                      Subscription Terms
                    </h4>

                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">Contract Duration</label>
                      <select
                        value={customer.contract}
                        onChange={(e) => setCustomer((prev) => ({ ...prev, contract: e.target.value }))}
                        className="w-full p-2 rounded-xl bg-white border border-[#e7e3da] text-xs font-semibold"
                      >
                        <option value="Month-to-month">Month-to-month (High flexibility)</option>
                        <option value="One year">One year commitment</option>
                        <option value="Two year">Two year commitment (Lowest churn)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">Payment Method</label>
                      <select
                        value={customer.paymentMethod}
                        onChange={(e) => setCustomer((prev) => ({ ...prev, paymentMethod: e.target.value }))}
                        className="w-full p-2 rounded-xl bg-white border border-[#e7e3da] text-xs font-semibold"
                      >
                        <option value="Electronic check">Electronic check (Elevated churn)</option>
                        <option value="Credit card">Credit card (Auto-renew)</option>
                        <option value="Bank transfer">Bank transfer (Auto-renew)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">Internet &amp; Tech Support</label>
                      <div className="grid grid-cols-2 gap-2">
                        <select
                          value={customer.internetService}
                          onChange={(e) => setCustomer((prev) => ({ ...prev, internetService: e.target.value }))}
                          className="p-2 rounded-xl bg-white border border-[#e7e3da] text-xs font-semibold"
                        >
                          <option value="Fiber optic">Fiber optic</option>
                          <option value="DSL">DSL</option>
                          <option value="No">No Internet</option>
                        </select>

                        <select
                          value={customer.techSupport}
                          onChange={(e) => setCustomer((prev) => ({ ...prev, techSupport: e.target.value }))}
                          className="p-2 rounded-xl bg-white border border-[#e7e3da] text-xs font-semibold"
                        >
                          <option value="Yes">Tech Support: Yes</option>
                          <option value="No">Tech Support: No</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Pipeline Transformations & Ratios */}
                  <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-3">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-stone-800 flex items-center gap-2">
                      <Cpu size={16} className="text-orange-600" />
                      Dynamic Pipeline Features
                    </h4>

                    <div className="space-y-2 text-xs">
                      <div className="p-2 rounded-xl bg-white border border-[#e7e3da] flex justify-between">
                        <span className="text-stone-600">Support Velocity:</span>
                        <span className="font-mono font-bold text-stone-900">
                          {simulationResults.supportRate.toFixed(2)} calls/mo
                        </span>
                      </div>
                      <div className="p-2 rounded-xl bg-white border border-[#e7e3da] flex justify-between">
                        <span className="text-stone-600">Average Spending:</span>
                        <span className="font-mono font-bold text-stone-900">
                          ${simulationResults.avgSpending.toFixed(1)}/mo
                        </span>
                      </div>
                      <div className="p-2 rounded-xl bg-white border border-[#e7e3da] flex justify-between">
                        <span className="text-stone-600">Bill Shock Ratio:</span>
                        <span className="font-mono font-bold text-stone-900">
                          {simulationResults.spendingRatio.toFixed(2)}x
                        </span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span>Decision Threshold:</span>
                        <span className="text-orange-600 font-mono">{(threshold * 100).toFixed(0)}%</span>
                      </div>
                      <input
                        type="range"
                        min="0.10"
                        max="0.80"
                        step="0.02"
                        value={threshold}
                        onChange={(e) => setThreshold(parseFloat(e.target.value))}
                        className="w-full accent-orange-600"
                      />
                      <p className="text-[10px] text-stone-500 mt-1">
                        Default: 50% &bull; Cost-Optimized: 32% (minimizes false negatives)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Inference Results Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                  {/* Probability Gauge & Classification */}
                  <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
                        Inference Output
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                          simulationResults.prob >= 0.7
                            ? "bg-red-500/20 text-red-400 border border-red-500/40"
                            : simulationResults.prob >= threshold
                            ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                            : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                        }`}
                      >
                        {simulationResults.actionPriority}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl sm:text-5xl font-black font-mono">
                        {(simulationResults.prob * 100).toFixed(1)}%
                      </span>
                      <span className="text-xs text-stone-400">
                        Predicted Probability of Churn within 30 Days
                      </span>
                    </div>

                    {/* Threshold Comparison Bars */}
                    <div className="space-y-2 text-xs">
                      <div>
                        <div className="flex justify-between mb-1 text-stone-300">
                          <span>Standard 0.50 Threshold:</span>
                          <span className={simulationResults.isChurnDefault ? "text-red-400 font-bold" : "text-emerald-400 font-bold"}>
                            {simulationResults.isChurnDefault ? "CHURN (Flagged)" : "ACTIVE (Not Flagged)"}
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-stone-800 overflow-hidden">
                          <div
                            className={`h-full transition-all duration-300 ${
                              simulationResults.prob >= 0.5 ? "bg-red-500" : "bg-emerald-500"
                            }`}
                            style={{ width: `${Math.min(100, simulationResults.prob * 100)}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1 text-stone-300">
                          <span>Cost-Optimized {(threshold * 100).toFixed(0)}% Threshold:</span>
                          <span className={simulationResults.isChurnOptimized ? "text-amber-400 font-bold" : "text-emerald-400 font-bold"}>
                            {simulationResults.isChurnOptimized ? "INTERVENE (Trigger Campaign)" : "ACTIVE"}
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-stone-800 overflow-hidden">
                          <div
                            className={`h-full transition-all duration-300 ${
                              simulationResults.isChurnOptimized ? "bg-amber-500" : "bg-emerald-500"
                            }`}
                            style={{ width: `${Math.min(100, simulationResults.prob * 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Prescriptive Action Box */}
                    <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700 text-xs space-y-1">
                      <div className="text-orange-400 font-bold flex items-center gap-1.5">
                        <Zap size={14} />
                        Recommended Business Intervention:
                      </div>
                      <p className="text-stone-300 leading-relaxed">{simulationResults.recommendation}</p>
                      <div className="pt-1 text-[11px] text-stone-400">
                        Estimated Customer Value Protected: <strong className="text-white">{simulationResults.expectedSavings}</strong>
                      </div>
                    </div>
                  </div>

                  {/* SHAP Feature Waterfall Attribution */}
                  <div className="p-5 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-stone-800 flex items-center gap-2">
                        <Brain size={16} className="text-orange-600" />
                        TreeSHAP Local Feature Attribution
                      </h4>
                      <span className="text-[10px] text-stone-500 font-mono">Additive Shapley Values</span>
                    </div>

                    <p className="text-xs text-stone-600">
                      Why did the model assign this score? Breakdown of individual drivers shifting risk relative to baseline:
                    </p>

                    <div className="space-y-2.5 pt-1">
                      {simulationResults.attributions.map((attr, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-white border border-[#e7e3da] flex items-center justify-between text-xs">
                          <span className="font-medium text-stone-800">{attr.feature}</span>
                          <span
                            className={`font-mono font-bold px-2 py-0.5 rounded-md text-[11px] ${
                              attr.impact === "increase"
                                ? "bg-red-50 text-red-700 border border-red-200"
                                : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            }`}
                          >
                            {attr.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-orange-50/70 border border-orange-200/60 text-[11px] text-orange-900">
                      <strong>Executive Summary:</strong> Customer risk is primarily driven by flexible Month-to-month terms combined with elevated support ticket velocity. Transitioning this customer to a discounted 1-year contract resolves the #1 risk driver.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ============================================================= */}
            {/* LAB 2: INTERVIEW QUESTION BANK & DRILLS */}
            {/* ============================================================= */}
            {activeWorkbenchTab === "interview_drills" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    Live Technical Drills
                  </span>
                  <h3 className="text-xl font-black text-stone-900">
                    Machine Learning Technical Interview Simulator
                  </h3>
                </div>

                {/* Sub-Tabs for Interview Dimensions */}
                <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-3">
                  {[
                    { id: "python", label: "1. Python Coding Drill" },
                    { id: "stats", label: "2. Bayes' Theorem Calculator" },
                    { id: "algorithms", label: "3. Algorithm Deep-Dives" },
                    { id: "case_study", label: "4. Universal Case Study Canvas" },
                  ].map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setInterviewSubTab(sub.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                        interviewSubTab === sub.id
                          ? "bg-stone-900 text-white"
                          : "text-stone-600 hover:bg-stone-100"
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>

                {/* SUB-DRILL 1: PYTHON CODING */}
                {interviewSubTab === "python" && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-3">
                      <h4 className="font-bold text-sm text-stone-900 flex items-center gap-2">
                        <Code2 size={16} className="text-orange-600" />
                        Problem: Find Second-Largest Unique Number in O(n) Time &amp; O(1) Space
                      </h4>
                      <p className="text-xs text-stone-600">
                        Interviewers test whether you can bypass naive <code>sorted(set(nums))</code> (which costs O(n log n) time and O(n) space) in favor of a clean single-pass two-pointer scan.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <input
                          type="text"
                          value={testArrayInput}
                          onChange={(e) => setTestArrayInput(e.target.value)}
                          placeholder="e.g. 10, 20, 30, 20, 40"
                          className="flex-1 p-2.5 rounded-xl bg-white border border-[#e7e3da] font-mono text-xs"
                        />
                        <button
                          onClick={() => setTestArrayInput("100, 45, 99, 100, 2, 78")}
                          className="px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold cursor-pointer"
                        >
                          Preset 1
                        </button>
                        <button
                          onClick={() => setTestArrayInput("5, 5, 5, 5")}
                          className="px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold cursor-pointer"
                        >
                          All Identical
                        </button>
                      </div>

                      <div className="p-4 rounded-xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                        <div className="text-stone-400">Parsed Input Array: [{parsedArray.join(", ")}]</div>
                        <div className="text-orange-400 font-bold text-sm">
                          Second Largest Unique: {secondLargestResult !== null ? secondLargestResult : "None (fewer than 2 unique values)"}
                        </div>
                        <div className="text-[11px] text-stone-400 border-t border-stone-800 pt-1.5">
                          Complexity: <strong>O(n) Time</strong> (single scan) &bull; <strong>O(1) Auxiliary Space</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SUB-DRILL 2: STATS & PROBABILITY */}
                {interviewSubTab === "stats" && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-4">
                      <h4 className="font-bold text-sm text-stone-900 flex items-center gap-2">
                        <Scale size={16} className="text-orange-600" />
                        Interactive Bayes&apos; Theorem Posterior Calculator
                      </h4>
                      <p className="text-xs text-stone-600">
                        Suppose an unusual activity drop occurs (Event B). What is the updated probability that the customer will churn (Event A)?
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                        <div>
                          <div className="flex justify-between font-bold mb-1">
                            <span>Prior P(A) Churn:</span>
                            <span className="font-mono text-orange-600">{(priorA * 100).toFixed(0)}%</span>
                          </div>
                          <input
                            type="range"
                            min="0.01"
                            max="0.50"
                            step="0.01"
                            value={priorA}
                            onChange={(e) => setPriorA(parseFloat(e.target.value))}
                            className="w-full accent-orange-600"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between font-bold mb-1">
                            <span>Likelihood P(B | A):</span>
                            <span className="font-mono text-orange-600">{(likelihoodBgivenA * 100).toFixed(0)}%</span>
                          </div>
                          <input
                            type="range"
                            min="0.50"
                            max="0.99"
                            step="0.01"
                            value={likelihoodBgivenA}
                            onChange={(e) => setLikelihoodBgivenA(parseFloat(e.target.value))}
                            className="w-full accent-orange-600"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between font-bold mb-1">
                            <span>False Alarm P(B | &not;A):</span>
                            <span className="font-mono text-orange-600">{(falseAlarmBgivenNotA * 100).toFixed(0)}%</span>
                          </div>
                          <input
                            type="range"
                            min="0.01"
                            max="0.30"
                            step="0.01"
                            value={falseAlarmBgivenNotA}
                            onChange={(e) => setFalseAlarmBgivenNotA(parseFloat(e.target.value))}
                            className="w-full accent-orange-600"
                          />
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2">
                        <div className="text-stone-400">
                          P(A|B) = [ P(B|A) &times; P(A) ] / [ P(B|A)P(A) + P(B|&not;A)P(&not;A) ]
                        </div>
                        <div className="text-emerald-400 font-bold text-base">
                          Posterior Probability P(Churn | Activity Drop) = {(posteriorAgivenB * 100).toFixed(1)}%
                        </div>
                        <div className="text-[11px] text-stone-400">
                          Prior Churn belief increased from <strong>{(priorA * 100).toFixed(0)}%</strong> to <strong>{(posteriorAgivenB * 100).toFixed(1)}%</strong> upon observing the drop.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SUB-DRILL 3: ALGORITHM DEEP-DIVES */}
                {interviewSubTab === "algorithms" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-2">
                      <h4 className="font-bold text-xs uppercase text-orange-700 tracking-wider">
                        Bagging vs. Boosting
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        <strong>Bagging (Random Forest):</strong> Trains deep, low-bias trees in parallel on bootstrap samples. Reduces <em>variance</em> by averaging uncorrelated predictions.<br /><br />
                        <strong>Boosting (XGBoost/LightGBM):</strong> Trains shallow trees sequentially, where each tree fits to the negative gradient (residuals) of previous trees. Reduces <em>bias</em>.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-2">
                      <h4 className="font-bold text-xs uppercase text-orange-700 tracking-wider">
                        Ridge (L2) vs. Lasso (L1)
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        <strong>Ridge:</strong> Adds squared penalty &lambda;&Sigma;&beta;<sup>2</sup>. Shrinks coefficients asymptotically toward zero but never drives them exactly to zero.<br /><br />
                        <strong>Lasso:</strong> Adds absolute penalty &lambda;&Sigma;|&beta;|. Because the L1 diamond constraint has sharp corners on axes, it drives uninformative coefficients strictly to 0 for sparse feature selection.
                      </p>
                    </div>
                  </div>
                )}

                {/* SUB-DRILL 4: CASE STUDY CANVAS */}
                {interviewSubTab === "case_study" && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: "churn", label: "1. Telecom Churn" },
                        { id: "fraud", label: "2. Financial Fraud" },
                        { id: "recsys", label: "3. Video Recommendation" },
                        { id: "house", label: "4. Real Estate Valuation" },
                        { id: "segmentation", label: "5. Customer Segmentation" },
                      ].map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setSelectedCaseStudy(c.id)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${
                            selectedCaseStudy === c.id
                              ? "bg-orange-600 text-white"
                              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                          }`}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>

                    <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-2 text-xs">
                      {selectedCaseStudy === "churn" && (
                        <div>
                          <strong className="text-stone-900 block mb-1">Telecom Churn Prediction Framework:</strong>
                          <p className="text-stone-600 leading-relaxed">
                            <strong>1. Formulation:</strong> Predict cancellation in next 30 days. Binary classification.<br />
                            <strong>2. Leakage Audit:</strong> Exclude support tickets or complaints submitted after the cancellation timestamp.<br />
                            <strong>3. Metric:</strong> Recall@K and Cost-sensitive Expected Loss (FN penalty &gt;&gt; FP coupon cost).<br />
                            <strong>4. Production:</strong> Batch monthly scoring + live webhook triggered upon account downgrade requests.
                          </p>
                        </div>
                      )}
                      {selectedCaseStudy === "fraud" && (
                        <div>
                          <strong className="text-stone-900 block mb-1">Financial Fraud Detection Framework:</strong>
                          <p className="text-stone-600 leading-relaxed">
                            <strong>1. Formulation:</strong> Extreme imbalance (0.1% positive). Anomaly scoring + LightGBM.<br />
                            <strong>2. Latency:</strong> Sub-50ms hard SLA during credit card authorization.<br />
                            <strong>3. Metric:</strong> Precision@Top 1% and Recall at fixed 0.05% False Positive Rate.<br />
                            <strong>4. Serving:</strong> Real-time streaming inference with Feast/Redis feature store.
                          </p>
                        </div>
                      )}
                      {selectedCaseStudy === "recsys" && (
                        <div>
                          <strong className="text-stone-900 block mb-1">Video Recommendation Architecture:</strong>
                          <p className="text-stone-600 leading-relaxed">
                            <strong>1. Architecture:</strong> Two-stage: Candidate Generation (Retrieval via Two-Tower Embeddings) &rarr; Heavy Ranking (LightGBM / DLRM).<br />
                            <strong>2. Cold Start:</strong> Fallback to trending popularity and content metadata for new accounts.<br />
                            <strong>3. Metric:</strong> NDCG@10 offline; Mean Watch Time and CTR in online A/B testing.
                          </p>
                        </div>
                      )}
                      {selectedCaseStudy === "house" && (
                        <div>
                          <strong className="text-stone-900 block mb-1">Real Estate Price Valuation:</strong>
                          <p className="text-stone-600 leading-relaxed">
                            <strong>1. Formulation:</strong> Continuous regression with Log-transformed sale price.<br />
                            <strong>2. Spatial Splits:</strong> GroupKFold by neighborhood/postal code to prevent spatial leakage.<br />
                            <strong>3. Metric:</strong> Root Mean Squared Logarithmic Error (RMSLE) and Median Absolute Error (MedAE).
                          </p>
                        </div>
                      )}
                      {selectedCaseStudy === "segmentation" && (
                        <div>
                          <strong className="text-stone-900 block mb-1">Customer Segmentation:</strong>
                          <p className="text-stone-600 leading-relaxed">
                            <strong>1. Formulation:</strong> Unsupervised RFM (Recency, Frequency, Monetary) clustering.<br />
                            <strong>2. Algorithms:</strong> $k$-Means with Silhouette analysis + UMAP visualization.<br />
                            <strong>3. Practicality:</strong> Label clusters into actionable business cohorts (&ldquo;VIP Whales&rdquo;, &ldquo;At-Risk Churners&rdquo;, &ldquo;Bargain Hunters&rdquo;).
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ============================================================= */}
            {/* LAB 3: SYSTEM DESIGN & DRIFT EXPLORER */}
            {/* ============================================================= */}
            {activeWorkbenchTab === "system_design" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                      Architecture &bull; Scale &amp; Reliability
                    </span>
                    <h3 className="text-xl font-black text-stone-900">
                      Machine Learning System Design &amp; Drift Simulator
                    </h3>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setInferenceMode("batch")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${
                        inferenceMode === "batch"
                          ? "bg-orange-600 text-white"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      Batch Inference
                    </button>
                    <button
                      onClick={() => setInferenceMode("realtime")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${
                        inferenceMode === "realtime"
                          ? "bg-orange-600 text-white"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      Real-Time Serving
                    </button>
                  </div>
                </div>

                {/* System Knobs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da]">
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>Throughput Demand:</span>
                      <span className="font-mono text-orange-600">{qps} QPS</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      value={qps}
                      onChange={(e) => setQps(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da]">
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>Cache Hit Ratio:</span>
                      <span className="font-mono text-orange-600">{(cacheHitRate * 100).toFixed(0)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.0"
                      max="0.95"
                      step="0.05"
                      value={cacheHitRate}
                      onChange={(e) => setCacheHitRate(parseFloat(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da]">
                    <span className="text-xs font-bold text-stone-700 block mb-1">Simulate Production Drift:</span>
                    <select
                      value={simulatedDrift}
                      onChange={(e) => setSimulatedDrift(e.target.value)}
                      className="w-full p-2 rounded-xl bg-white border border-[#e7e3da] text-xs font-semibold"
                    >
                      <option value="none">Normal Operation (No Drift)</option>
                      <option value="data_drift">Covariate Data Drift (P(X) shifted)</option>
                      <option value="concept_drift">Concept Drift (P(y|X) changed)</option>
                    </select>
                  </div>
                </div>

                {/* Architecture Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 font-bold block mb-1">P99 Latency SLA</span>
                    <span className="text-2xl font-black text-stone-900 font-mono">
                      {systemMetrics.p99Latency} ms
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 font-bold block mb-1">Compute Replicas</span>
                    <span className="text-2xl font-black text-stone-900 font-mono">
                      {systemMetrics.computeReplicas} Pods
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 font-bold block mb-1">Estimated Cost</span>
                    <span className="text-2xl font-black text-stone-900 font-mono">
                      ${systemMetrics.monthlyCost}/mo
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 font-bold block mb-1">Stability Index (PSI)</span>
                    <span className={`text-2xl font-black font-mono ${systemMetrics.psi > 0.2 ? "text-red-600" : "text-emerald-600"}`}>
                      {systemMetrics.psi.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Drift Alert Banner */}
                <div
                  className={`p-4 rounded-2xl border text-xs sm:text-sm space-y-1 ${
                    simulatedDrift !== "none"
                      ? "bg-red-50 border-red-200 text-red-900"
                      : "bg-emerald-50 border-emerald-200 text-emerald-900"
                  }`}
                >
                  <div className="font-bold flex items-center gap-2">
                    {simulatedDrift !== "none" ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
                    {systemMetrics.driftStatus}
                  </div>
                  <p>{systemMetrics.driftAction}</p>
                </div>
              </div>
            )}

            {/* ============================================================= */}
            {/* LAB 4: READINESS TRACKER & CERTIFICATION ASSESSMENT */}
            {/* ============================================================= */}
            {activeWorkbenchTab === "readiness_quiz" && (
              <div className="space-y-8">
                {/* 24-SKILL READINESS TRACKER */}
                <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                        Course Graduation Checklist
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-stone-900">
                        24-Skill Machine Learning Interview Readiness Tracker
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-black text-orange-600 font-mono">
                        {readinessPercent}%
                      </span>
                      <button
                        onClick={() => setCheckedSkills({})}
                        className="px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-600 hover:bg-stone-50 cursor-pointer"
                      >
                        Reset Checklist
                      </button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-3 rounded-full bg-stone-100 overflow-hidden border border-stone-200">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300"
                      style={{ width: `${readinessPercent}%` }}
                    />
                  </div>

                  {/* Skills Grid Grouped by Category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {["End-to-End ML", "ML Engineering", "Technical Interviews", "Capstone"].map((category) => (
                      <div key={category} className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-3">
                        <h4 className="font-bold text-xs uppercase tracking-wider text-stone-800 border-b border-stone-200 pb-1.5">
                          {category}
                        </h4>
                        <div className="space-y-2">
                          {skillsList
                            .filter((s) => s.cat === category)
                            .map((skill) => {
                              const isChecked = !!checkedSkills[skill.id];
                              return (
                                <label
                                  key={skill.id}
                                  onClick={() => toggleSkill(skill.id)}
                                  className="flex items-start gap-2.5 text-xs text-stone-700 cursor-pointer hover:text-stone-900 select-none"
                                >
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => {}}
                                    className="mt-0.5 accent-orange-600 rounded"
                                  />
                                  <span className={isChecked ? "line-through text-stone-400" : ""}>
                                    {skill.name}
                                  </span>
                                </label>
                              );
                            })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 12-QUESTION CERTIFICATION ASSESSMENT */}
                <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                        Final Track Assessment
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-stone-900">
                        Capstone Mastery Quiz (12 Advanced Scenarios)
                      </h3>
                    </div>

                    {showResults && (
                      <div className="px-4 py-2 rounded-2xl bg-orange-50 border border-orange-200 text-xs font-bold text-orange-800 flex items-center gap-2">
                        <Award size={16} />
                        Score: {score} / {quizData.length} (
                        {Math.round((score / quizData.length) * 100)}%)
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    {quizData.map((q, idx) => (
                      <div key={q.id} className="p-5 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-3">
                        <div className="flex items-baseline gap-2">
                          <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-800 text-xs font-black flex items-center justify-center flex-shrink-0">
                            {idx + 1}
                          </span>
                          <h4 className="font-bold text-sm text-stone-900">{q.question}</h4>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = selectedAnswers[q.id] === optIdx;
                            const isCorrect = q.correctIndex === optIdx;

                            let btnStyle = "bg-white border-[#e7e3da] text-stone-700 hover:bg-stone-50";
                            if (isSelected) {
                              btnStyle = "bg-orange-600 text-white border-orange-600";
                            }
                            if (showResults) {
                              if (isCorrect) {
                                btnStyle = "bg-emerald-600 text-white border-emerald-600";
                              } else if (isSelected && !isCorrect) {
                                btnStyle = "bg-red-600 text-white border-red-600";
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => {
                                  if (!showResults) {
                                    setSelectedAnswers((prev) => ({
                                      ...prev,
                                      [q.id]: optIdx,
                                    }));
                                  }
                                }}
                                className={`p-3 rounded-xl border text-xs font-medium text-left transition-colors cursor-pointer ${btnStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {showResults && (
                          <div className="p-3.5 rounded-xl bg-white border border-[#e7e3da] text-xs text-stone-600 leading-relaxed">
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
              </div>
            )}
          </div>
        )}

        {/* Bottom Navigation: Previous Module & Track Completion */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/machine-learning/real-world-ml-case-studies")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 23 &mdash; Real-World ML Engineering &amp; Case Studies</span>
          </button>

          <button
            onClick={() => navigate("/learning/machine-learning")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs transition-colors"
          >
            <span>Graduation: Complete Machine Learning Track</span>
            <CheckCircle2 size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
