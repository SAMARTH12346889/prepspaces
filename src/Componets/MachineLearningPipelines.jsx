import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  RefreshCw,
  Terminal,
  BookOpen,
  HelpCircle,
  Copy,
  Check,
  ChevronRight,
  Layers,
  TrendingUp,
  Activity,
  Sliders,
  Filter,
  Eye,
  FileCode,
  Table,
  Target,
  Calculator,
  GitBranch,
  ShieldCheck,
  Zap,
  Cpu,
  Compass,
  Hash,
  Binary,
  CheckSquare,
  AlertTriangle,
  Award,
  BarChart2,
  PieChart,
  ShieldAlert,
  Workflow,
  Server,
  Database,
  Lock,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import MachineLearningPipelinesSections from "./MachineLearningPipelinesSections";

export default function MachineLearningPipelines() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("dag_sim"); // 'dag_sim' | 'grid_lab' | 'leakage_diag' | 'quiz'

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 1: PIPELINE DAG ARCHITECTURE & DATA FLOW SIMULATOR
  // ---------------------------------------------------------------------------
  const [selectedCheckpoint, setSelectedCheckpoint] = useState("output"); // 'raw' | 'impute' | 'col_transform' | 'selection' | 'output'
  const [activeModelType, setActiveModelType] = useState("logistic"); // 'logistic' | 'rf'

  // Sample customer row
  const rawSampleRecord = {
    age: 38,
    monthly_charges: 89.5,
    tenure_months: 14,
    city: "Mumbai",
    contract: "Monthly",
  };

  const checkpointDetails = useMemo(() => {
    switch (selectedCheckpoint) {
      case "raw":
        return {
          title: "Stage 0: Raw Ingestion Input",
          desc: "Raw customer observation with mixed numerical types, string categoricals, and potential missing nulls.",
          shape: "(1 sample, 5 columns)",
          payload: rawSampleRecord,
          isTransformed: false,
        };
      case "impute":
        return {
          title: "Stage 1: Missing Imputation Sub-Pipelines",
          desc: "SimpleImputer(strategy='median') applied to numerical columns; SimpleImputer(strategy='most_frequent') applied to categorical columns.",
          shape: "(1 sample, 5 cleaned features)",
          payload: {
            ...rawSampleRecord,
            imputation_applied: "median age=36, median charge=70.0",
          },
          isTransformed: true,
        };
      case "col_transform":
        return {
          title: "Stage 2: ColumnTransformer (Parallel Branches)",
          desc: "StandardScaler applied to [age, monthly_charges, tenure]; OneHotEncoder(drop='first') applied to [city, contract].",
          shape: "(1 sample, 7 numerical features)",
          payload: {
            "num__age (z-score)": 0.42,
            "num__charges (z-score)": 0.98,
            "num__tenure (z-score)": -0.65,
            "cat__city_Delhi": 0,
            "cat__city_Mumbai": 1,
            "cat__city_Pune": 0,
            "cat__contract_Monthly": 1,
          },
          isTransformed: true,
        };
      case "selection":
        return {
          title: "Stage 3: Feature Selection (SelectKBest)",
          desc: "SelectKBest(score_func=f_classif, k=5) discards lowest F-statistic features to maximize model signal-to-noise ratio.",
          shape: "(1 sample, 5 selected features)",
          payload: {
            "num__charges": 0.98,
            "cat__contract_Monthly": 1,
            "num__tenure": -0.65,
            "cat__city_Mumbai": 1,
            "num__age": 0.42,
          },
          isTransformed: true,
        };
      case "output":
      default:
        return {
          title: "Stage 4: Estimator Inference Output",
          desc: activeModelType === "logistic"
            ? "LogisticRegression(C=1.0, max_iter=2000) dot product + Sigmoid probability."
            : "RandomForestClassifier(n_estimators=150) ensemble tree vote aggregation.",
          shape: "Prediction: Churn Risk = YES (Class 1)",
          payload: {
            predicted_class: 1,
            churn_probability: activeModelType === "logistic" ? "74.8%" : "78.2%",
            operational_action: "Flag customer for automated retention discount offer.",
          },
          isTransformed: true,
        };
    }
  }, [selectedCheckpoint, activeModelType]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 2: NESTED HYPERPARAMETER TUNING & GRID SEARCH
  // ---------------------------------------------------------------------------
  const [gridModel, setGridModel] = useState("logistic"); // 'logistic' | 'rf' | 'svm'
  const [gridC, setGridC] = useState(1.0);
  const [gridScaler, setGridScaler] = useState("standard"); // 'standard' | 'passthrough'
  const [gridTrees, setGridTrees] = useState(150);

  const gridSearchResult = useMemo(() => {
    let meanScore = 0.85;
    let paramPath = "";

    if (gridModel === "logistic") {
      meanScore = 0.82 + (gridC === 1.0 ? 0.05 : gridC === 10.0 ? 0.04 : 0.01);
      if (gridScaler === "passthrough") meanScore -= 0.08; // Logistic suffers without scaling
      paramPath = `classifier__C=${gridC}, preprocessor__numeric__scaler=${gridScaler === "standard" ? "StandardScaler()" : "'passthrough'"}`;
    } else if (gridModel === "rf") {
      meanScore = 0.89 + (gridTrees === 250 ? 0.02 : 0.01);
      // Trees are invariant to monotonic scaling
      paramPath = `classifier__n_estimators=${gridTrees}, classifier__max_depth=8`;
    } else {
      // SVM
      meanScore = 0.84 + (gridC === 1.0 ? 0.06 : 0.02);
      if (gridScaler === "passthrough") meanScore -= 0.15; // SVM fails catastrophically without scaling
      paramPath = `classifier__C=${gridC}, classifier__kernel='rbf'`;
    }

    const stdScore = 0.018;
    const folds = [
      (meanScore - 0.012).toFixed(3),
      (meanScore + 0.015).toFixed(3),
      (meanScore - 0.005).toFixed(3),
      (meanScore + 0.008).toFixed(3),
      (meanScore - 0.006).toFixed(3),
    ];

    return {
      meanScore: (meanScore * 100).toFixed(1),
      stdScore: (stdScore * 100).toFixed(1),
      paramPath,
      folds,
    };
  }, [gridModel, gridC, gridScaler, gridTrees]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 3: DATA LEAKAGE DIAGNOSTIC (PIPELINE VS NAIVE)
  // ---------------------------------------------------------------------------
  const [diagnosticMode, setDiagnosticMode] = useState("pipeline"); // 'pipeline' | 'naive'

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 4: ASSESSMENT EXAM (10 QUESTIONS)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary architectural advantage of using Scikit-learn's Pipeline over executing preprocessing and model training as discrete separate scripts?",
      options: [
        "It automatically compiles Python bytecode into C++ for 100x GPU speedup",
        "It encapsulates the entire sequence of transformers and final estimator into a single composite object, enforcing identical learned transformations at inference and preventing data leakage during cross-validation",
        "It eliminates the need to specify random_state across models",
        "It converts all tabular datasets into neural networks automatically",
      ],
      correct: 1,
      explanation: "A Pipeline combines transformers and estimators into a unified object. During cross-validation, transformers are fitted strictly on training folds; during inference, the exact learned parameters (means, scales, imputation statistics) are applied to new data without manual intervention.",
    },
    {
      id: 2,
      question: "How does Scikit-learn's double underscore notation (e.g., 'classifier__C' or 'preprocessor__numeric__scaler') function inside a nested Pipeline?",
      options: [
        "It denotes private Python variables that cannot be modified outside the class",
        "It traverses nested step hierarchies, allowing GridSearchCV to address parameters of nested transformers and estimators inside complex multi-branch pipelines",
        "It creates duplicate copies of the dataset in memory",
        "It forces the estimator to use L2 regularization exclusively",
      ],
      correct: 1,
      explanation: "The double underscore '__' syntax enables parameter routing through nested estimators (e.g. step_name__param_name). This enables grid search and set_params() to tune hyperparameters deep within ColumnTransformers and sub-pipelines.",
    },
    {
      id: 3,
      question: "What is the critical functional difference between Pipeline and ColumnTransformer in Scikit-learn?",
      options: [
        "Pipeline applies operations sequentially in series (output of step N becomes input to N+1); ColumnTransformer applies transformations in parallel to separate column subsets and concatenates their outputs",
        "Pipeline is only for regression; ColumnTransformer is only for classification",
        "Pipeline runs on CPU; ColumnTransformer runs on GPU",
        "ColumnTransformer cannot be nested inside a Pipeline",
      ],
      correct: 0,
      explanation: "Pipeline is a sequential workflow where each step transforms the data sequentially. ColumnTransformer is a parallel column-routing construct that splits data by column slices (e.g. numeric vs categorical), applies specialized sub-pipelines to each slice, and joins the results.",
    },
    {
      id: 4,
      question: "When creating a Custom Transformer by inheriting from BaseEstimator and TransformerMixin, why should data-dependent calculations NEVER be executed in __init__()?",
      options: [
        "Because Python will throw a RecursionError",
        "To adhere to Scikit-learn's estimator API conventions: __init__() must only store explicit hyperparameter arguments without modifying them, while all state and dataset learning must occur inside fit()",
        "Because __init__() is only executed when dumping to Joblib",
        "Because TransformerMixin overrides the __init__() signature",
      ],
      correct: 1,
      explanation: "In Scikit-learn, cloning (via clone()) inspects constructor parameters without positional args. Storing data-dependent state in __init__() breaks estimator cloning, grid search, and cross-validation. All statistical learning must be deferred strictly to fit().",
    },
    {
      id: 5,
      question: "What does setting remainder='passthrough' in ColumnTransformer accomplish?",
      options: [
        "It drops all columns that contain missing values",
        "It automatically standardizes all remaining columns to zero mean",
        "It preserves any columns not explicitly specified in the transformers list, passing them through untransformed into the final concatenated output",
        "It skips fitting the classifier during training",
      ],
      correct: 2,
      explanation: "By default, remainder='drop' discards all columns not listed in any transformer tuple. Setting remainder='passthrough' retains unselected columns in their raw state and concatenates them with the transformed outputs.",
    },
    {
      id: 6,
      question: "Why is performing cross_val_score() on a pre-scaled dataset (X_scaled = StandardScaler().fit_transform(X)) considered catastrophic data leakage?",
      options: [
        "Because StandardScaler doubles memory usage",
        "Because the scaler computed the global mean and variance across ALL observations (including the validation folds), allowing information about validation distributions to leak into model training",
        "Because cross_val_score requires unscaled integers",
        "Because it triggers a floating-point overflow in NumPy",
      ],
      correct: 1,
      explanation: "If scaling occurs before cross-validation splitting, the mean and variance of test/validation folds directly influence the standardized values of training folds. Encapsulating StandardScaler inside a Pipeline guarantees the scaler is re-fitted on training splits only.",
    },
    {
      id: 7,
      question: "Why should machine learning practitioners serialize the entire fitted Pipeline object rather than saving the final estimator alone?",
      options: [
        "Because standalone estimators take up 10x more disk space",
        "Because saving only the estimator discards the fitted preprocessing state (imputation medians, scaling factors, one-hot category dictionaries), causing deployment failures on raw incoming data",
        "Because Joblib cannot serialize standalone models",
        "Because Python packages require .pipeline extensions",
      ],
      correct: 1,
      explanation: "A trained estimator expects preprocessed numerical arrays. If you save only the estimator, you lose the fitted imputer and encoder parameters, requiring error-prone manual recreation during production inference.",
    },
    {
      id: 8,
      question: "What critical security risk exists when deserializing machine learning models using Python's pickle or Joblib?",
      options: [
        "They leak the user's IP address to the internet",
        "The pickle protocol can execute arbitrary Python bytecode and shell commands upon deserialization, making loading untrusted model files an arbitrary code execution vulnerability",
        "They permanently corrupt the Python virtual environment",
        "They disable SSL verification in HTTP requests",
      ],
      correct: 1,
      explanation: "Pickle serialization is inherently insecure because pickled streams can construct arbitrary callable objects, leading to arbitrary code execution. Models from unverified third parties should be inspected or loaded via secure alternatives like skops or ONNX.",
    },
    {
      id: 9,
      question: "How does the memory parameter in Scikit-learn's Pipeline improve execution speed during GridSearchCV?",
      options: [
        "It allocates extra GPU VRAM to the classification algorithm",
        "It caches the transformed outputs of intermediate preprocessing steps on disk (via joblib.Memory), avoiding repeated re-computation of identical transformers when tuning downstream model hyperparameters",
        "It compresses the training dataset using gzip",
        "It prevents Python garbage collection during cross-validation",
      ],
      correct: 1,
      explanation: "When testing 50 different classifier hyperparameters (e.g. C or max_depth) while keeping preprocessing fixed, setting memory=Memory('cache') caches the output of intermediate transformers on disk so they are computed once per fold rather than 50 times.",
    },
    {
      id: 10,
      question: "What is the primary operational purpose of tracking Data Drift, Concept Drift, and Schema Drift in deployed pipeline systems?",
      options: [
        "To satisfy legal tax audits for cloud compute usage",
        "To detect when real-world input distributions, target relationships, or incoming feature schemas diverge from the training baseline, signalling when automated retraining or pipeline fixes are required",
        "To ensure all network packets arrive in chronological order",
        "To convert offline batch models into real-time streaming engines",
      ],
      correct: 1,
      explanation: "Trained pipelines assume production data follows training distributions. Monitoring data drift (covariate shift), concept drift (P(Y|X) shift), and schema drift (unexpected columns/nulls) ensures teams catch decaying accuracy and trigger timely model retraining.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (questionId, optionIndex) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Top Navigation Bar */}
      <ModuleNav track="machine-learning" currentModuleId="ml-pipelines" />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Card */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 via-amber-100/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200">
                <Workflow size={13} className="text-orange-600" />
                <span>MODULE 14: SCIKIT-LEARN &bull; AUTOMATED ML WORKFLOWS &bull; MLOPS</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
                ML Pipelines &amp; Workflow Automation
              </h1>
              <p className="text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
                Master production machine learning pipelines and workflow automation: Scikit-learn Pipeline architecture, ColumnTransformer multi-branch preprocessing, Custom Transformers with BaseEstimator and TransformerMixin, FunctionTransformer, pipeline cross-validation, hyperparameter tuning with GridSearchCV and RandomizedSearchCV via double underscore syntax, preventing preprocessing leakage, model persistence (Joblib, Pickle, skops, ONNX), and automated end-to-end retraining scripts.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
              <div className="px-3.5 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 text-xs font-mono font-medium flex items-center gap-2">
                <Layers size={14} className="text-orange-600" />
                <span>26 Core Topics</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 text-xs font-mono font-medium flex items-center gap-2">
                <Sliders size={14} className="text-amber-600" />
                <span>4 Interactive Labs</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 text-xs font-mono font-medium flex items-center gap-2">
                <Award size={14} className="text-emerald-600" />
                <span>10 Assessment MCQs</span>
              </div>
            </div>
          </div>

          {/* Primary View Switcher: Curriculum vs Workbench */}
          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 bg-stone-100/80 p-1 rounded-2xl border border-stone-200">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "curriculum"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <BookOpen size={16} />
                <span>Curriculum Specifications</span>
              </button>
              <button
                onClick={() => setActiveTab("workbench")}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "workbench"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Terminal size={16} />
                <span>Interactive Workbenches</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-orange-100 text-orange-700 font-bold ml-1">
                  Live
                </span>
              </button>
            </div>

            <div className="text-xs text-stone-500 font-mono">
              Machine Learning Track &bull; MLOps Architecture Core
            </div>
          </div>
        </div>

        {/* View Mode 1: Curriculum Content */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            <MachineLearningPipelinesSections />
          </div>
        )}

        {/* View Mode 2: Interactive Workbenches */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Sub-Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("dag_sim")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeWorkbenchTab === "dag_sim"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                <Workflow size={15} />
                <span>1. Pipeline DAG Architecture &amp; Data Flow</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("grid_lab")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeWorkbenchTab === "grid_lab"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                <Sliders size={15} />
                <span>2. Nested Grid Search &amp; Parameter Matrix</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("leakage_diag")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeWorkbenchTab === "leakage_diag"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                <ShieldAlert size={15} />
                <span>3. Preprocessing Leakage Diagnostic</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                <CheckSquare size={15} />
                <span>4. Assessment Exam (10 Questions)</span>
              </button>
            </div>

            {/* LAB 1: PIPELINE DAG ARCHITECTURE */}
            {activeWorkbenchTab === "dag_sim" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <Workflow size={13} />
                    <span>LAB 1: DIRECTED ACYCLIC GRAPH (DAG) INSPECTOR</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Live Data Flow Through ColumnTransformer &amp; Estimator
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Click through each stage of the automated pipeline to trace how a raw incoming customer observation is split, imputed, standardized, encoded, filtered, and scored without manual intervention.
                  </p>
                </div>

                {/* Pipeline Flow Checkpoint Selector */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {[
                    { id: "raw", name: "0. Raw Ingest", icon: Database },
                    { id: "impute", name: "1. Imputation", icon: Activity },
                    { id: "col_transform", name: "2. ColumnTransform", icon: GitBranch },
                    { id: "selection", name: "3. SelectKBest", icon: Filter },
                    { id: "output", name: "4. Prediction", icon: Target },
                  ].map((step) => {
                    const Icon = step.icon;
                    return (
                      <button
                        key={step.id}
                        onClick={() => setSelectedCheckpoint(step.id)}
                        className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                          selectedCheckpoint === step.id
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        <Icon size={16} />
                        <span>{step.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Checkpoint Detail Card */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: Metadata & Architecture */}
                  <div className="lg:col-span-5 p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                    <div>
                      <span className="text-[11px] font-mono text-orange-600 uppercase font-bold block">
                        Pipeline Node Inspector
                      </span>
                      <h4 className="text-base font-bold text-stone-900 mt-1">{checkpointDetails.title}</h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">{checkpointDetails.desc}</p>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
                      <span className="text-[10px] font-mono uppercase text-stone-400 block">Output Tensor Shape</span>
                      <span className="text-xs font-mono font-bold text-stone-900">{checkpointDetails.shape}</span>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-stone-200">
                      <span className="text-xs font-mono font-bold text-stone-700 block">Switch Final Estimator:</span>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setActiveModelType("logistic")}
                          className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                            activeModelType === "logistic"
                              ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                              : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                          }`}
                        >
                          Logistic Regression
                        </button>
                        <button
                          onClick={() => setActiveModelType("rf")}
                          className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                            activeModelType === "rf"
                              ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                              : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                          }`}
                        >
                          Random Forest
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right: State JSON Payload */}
                  <div className="lg:col-span-7 p-5 rounded-2xl bg-stone-900 text-white space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center border-b border-stone-800 pb-2">
                      <span className="text-orange-400 font-bold uppercase text-[11px]">
                        Internal State Tensor ({selectedCheckpoint.toUpperCase()})
                      </span>
                      <span className="text-[10px] text-stone-400">JSON Serialization</span>
                    </div>

                    <pre className="text-emerald-300 text-xs overflow-x-auto leading-relaxed p-2 bg-stone-950 rounded-xl border border-stone-800">
                      {JSON.stringify(checkpointDetails.payload, null, 2)}
                    </pre>

                    <div className="text-[11px] text-stone-400 font-sans leading-relaxed">
                      Notice: Calling <code className="text-white font-mono">pipeline.predict(sample)</code> executes all upstream checkpoints instantaneously under the hood. No manual scaling or encoding required!
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: NESTED GRID SEARCH */}
            {activeWorkbenchTab === "grid_lab" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <Sliders size={13} />
                    <span>LAB 2: NESTED HYPERPARAMETER OPTIMIZATION</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    GridSearchCV with Double Underscore Routing
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Tune estimator parameters alongside preprocessing transformers in a single unified grid search. Observe how setting scaler to <em>passthrough</em> degrades linear/SVM models while leaving decision tree ensembles unhindered.
                  </p>
                </div>

                {/* Grid Controls */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-bold text-stone-700 block">Candidate Model:</span>
                    <div className="grid grid-cols-3 gap-1.5">
                      <button
                        onClick={() => setGridModel("logistic")}
                        className={`py-2 px-1 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          gridModel === "logistic"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Logistic
                      </button>
                      <button
                        onClick={() => setGridModel("rf")}
                        className={`py-2 px-1 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          gridModel === "rf"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        RandomForest
                      </button>
                      <button
                        onClick={() => setGridModel("svm")}
                        className={`py-2 px-1 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          gridModel === "svm"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        SVM (RBF)
                      </button>
                    </div>
                  </div>

                  {gridModel !== "rf" ? (
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono font-bold text-stone-700 block">classifier__C:</span>
                      <div className="grid grid-cols-3 gap-1.5">
                        {[0.1, 1.0, 10.0].map((c) => (
                          <button
                            key={c}
                            onClick={() => setGridC(c)}
                            className={`py-2 px-1 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              gridC === c
                                ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                                : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                            }`}
                          >
                            C={c}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono font-bold text-stone-700 block">classifier__n_estimators:</span>
                      <div className="grid grid-cols-2 gap-1.5">
                        {[150, 250].map((n) => (
                          <button
                            key={n}
                            onClick={() => setGridTrees(n)}
                            className={`py-2 px-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              gridTrees === n
                                ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                                : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                            }`}
                          >
                            {n} Trees
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-bold text-stone-700 block">preprocessor__numeric__scaler:</span>
                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        onClick={() => setGridScaler("standard")}
                        className={`py-2 px-1 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          gridScaler === "standard"
                            ? "bg-sky-600 text-white border-sky-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        StandardScaler()
                      </button>
                      <button
                        onClick={() => setGridScaler("passthrough")}
                        className={`py-2 px-1 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          gridScaler === "passthrough"
                            ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        "passthrough"
                      </button>
                    </div>
                  </div>
                </div>

                {/* Score Summary & 5-Fold Cross-Validation Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-5 p-5 rounded-2xl bg-stone-900 text-white space-y-3">
                    <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider block">
                      GridSearchCV Winning Configuration
                    </span>
                    <div className="text-4xl font-black text-white">
                      {gridSearchResult.meanScore}% <span className="text-xs text-stone-400 font-mono font-normal">ROC-AUC</span>
                    </div>
                    <div className="text-xs font-mono text-emerald-400">
                      &plusmn; {gridSearchResult.stdScore}% Standard Error across 5 Folds
                    </div>

                    <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-[11px] font-mono text-stone-300 break-all">
                      {gridSearchResult.paramPath}
                    </div>
                  </div>

                  <div className="md:col-span-7 p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <span className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider block">
                      5-Fold Stratified Validation Breakdown
                    </span>
                    <div className="grid grid-cols-5 gap-2">
                      {gridSearchResult.folds.map((fold, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-white border border-stone-200 text-center space-y-1">
                          <span className="text-[10px] font-mono text-stone-400 block">Fold {idx + 1}</span>
                          <span className="text-sm font-black text-stone-900 font-mono">{fold}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-stone-600 font-sans leading-relaxed pt-2">
                      When <code className="bg-stone-200 px-1 rounded text-[11px] font-mono">refit=True</code> is set, Scikit-learn automatically retrains the winning configuration on 100% of the training dataset, packing the complete pipeline into <code className="bg-stone-200 px-1 rounded text-[11px] font-mono">search.best_estimator_</code>.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: DATA LEAKAGE DIAGNOSTIC */}
            {activeWorkbenchTab === "leakage_diag" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <ShieldAlert size={13} />
                    <span>LAB 3: DATA LEAKAGE SIMULATION BENCH</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Pre-Split Transformation Leakage vs Encapsulated Pipeline
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Witness the danger of fitting scalers, imputers, or feature selectors prior to cross-validation splits. See how naive workflows generate deceptive validation scores that collapse in production.
                  </p>
                </div>

                {/* Mode Selector */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setDiagnosticMode("naive")}
                    className={`flex-1 py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      diagnosticMode === "naive"
                        ? "bg-rose-600 text-white border-rose-600 shadow-xs"
                        : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                    }`}
                  >
                    <AlertTriangle size={16} />
                    <span>Naive Workflow (Global Pre-Scaling &amp; Feature Leakage)</span>
                  </button>
                  <button
                    onClick={() => setDiagnosticMode("pipeline")}
                    className={`flex-1 py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      diagnosticMode === "pipeline"
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                        : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                    }`}
                  >
                    <CheckCircle2 size={16} />
                    <span>Pipeline Architecture (Strict In-Fold Fitting)</span>
                  </button>
                </div>

                {/* Score Comparison Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                    <span className="text-xs font-mono font-bold text-stone-700 uppercase block">
                      Cross-Validation Performance vs Production Reality
                    </span>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs font-mono text-stone-600 mb-1">
                          <span>Reported CV Validation Score:</span>
                          <span className={`font-black ${diagnosticMode === "naive" ? "text-rose-600" : "text-emerald-600"}`}>
                            {diagnosticMode === "naive" ? "95.4% (Deceptive Illusion!)" : "86.8% (Honest Estimate)"}
                          </span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-stone-200 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${
                              diagnosticMode === "naive" ? "bg-rose-500 w-[95%]" : "bg-emerald-500 w-[87%]"
                            }`}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono text-stone-600 mb-1">
                          <span>Actual Unseen Production Test Score:</span>
                          <span className={`font-black ${diagnosticMode === "naive" ? "text-rose-700" : "text-emerald-700"}`}>
                            {diagnosticMode === "naive" ? "79.1% (-16.3% Collapse!)" : "86.4% (Rock-solid Stability)"}
                          </span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-stone-200 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${
                              diagnosticMode === "naive" ? "bg-rose-700 w-[79%]" : "bg-emerald-700 w-[86%]"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-3 text-xs font-mono">
                    <span className="text-orange-400 uppercase font-bold block">
                      Code Execution Trace Analysis
                    </span>
                    {diagnosticMode === "naive" ? (
                      <div className="space-y-2 text-stone-300">
                        <div className="text-rose-400 font-bold">// CRITICAL LEAKAGE FLAW:</div>
                        <div>X_scaled = StandardScaler().fit_transform(X) # LETHAL</div>
                        <div># Validation fold samples were included in mean &amp; std!</div>
                        <div>scores = cross_val_score(model, X_scaled, y, cv=5)</div>
                        <p className="text-stone-400 font-sans pt-2">
                          Because test distributions contaminated training, the model cheated during validation, causing massive model failure upon deployment.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2 text-stone-300">
                        <div className="text-emerald-400 font-bold">// LEAK-FREE PIPELINE ENCAPSULATION:</div>
                        <div>pipe = Pipeline([("scaler", StandardScaler()), ("model", model)])</div>
                        <div>scores = cross_val_score(pipe, X, y, cv=5) # 100% SECURE</div>
                        <p className="text-stone-400 font-sans pt-2">
                          During every fold iteration, StandardScaler is fitted strictly on 80% training data, providing an authentic, deployable generalization guarantee.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* LAB 4: ASSESSMENT EXAM (10 QUESTIONS) */}
            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                      <Award size={13} />
                      <span>MODULE 14 CERTIFICATION EXAM</span>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900">
                      Machine Learning Pipelines &amp; Automation Assessment
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      10 comprehensive multi-choice questions assessing your mastery of Scikit-learn Pipeline architecture, ColumnTransformer design, Custom Transformers, leakage elimination, and model persistence.
                    </p>
                  </div>

                  {showResults && (
                    <div className="text-right">
                      <span className="text-xs font-mono text-stone-500 block">Exam Score</span>
                      <span className="text-xl font-black text-orange-600">
                        {calculateScore()} / {quizQuestions.length} ({calculateScore() * 10}%)
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q, idx) => (
                    <div key={q.id} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="rounded-lg bg-orange-100 text-orange-700 px-2.5 py-1 text-xs font-mono font-bold shrink-0">
                          Q{idx + 1}
                        </span>
                        <h4 className="text-sm font-bold text-stone-900 pt-0.5">{q.question}</h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selectedAnswers[q.id] === optIdx;
                          const isCorrect = q.correct === optIdx;

                          let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";
                          if (showResults) {
                            if (isCorrect) btnStyle = "bg-emerald-50 border-emerald-300 text-emerald-900 font-bold";
                            else if (isSelected) btnStyle = "bg-rose-50 border-rose-300 text-rose-900 line-through";
                          } else if (isSelected) {
                            btnStyle = "bg-stone-900 border-stone-900 text-white font-bold";
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition-all ${btnStyle}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {showResults && (
                        <div className="p-3 bg-stone-100 rounded-xl text-xs text-stone-700 font-sans border border-stone-200">
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

        {/* Bottom Nav: Previous Module / Return Overview */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/machine-learning/feature-engineering")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 13 &mdash; Feature Engineering &amp; Preprocessing</span>
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
