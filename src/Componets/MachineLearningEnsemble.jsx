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
  PieChart,
  Binary,
  Network,
  Scissors,
  Shuffle,
  Vote,
  Boxes,
  Cpu,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import MachineLearningEnsembleSections from "./MachineLearningEnsembleSections";

export default function MachineLearningEnsemble() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("bagging_boosting"); // 'bagging_boosting' | 'rf_vs_et' | 'modern_boosting' | 'quiz'

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 1: BAGGING VS BOOSTING SIMULATOR
  // ---------------------------------------------------------------------------
  const [ensembleType, setEnsembleType] = useState("bagging"); // 'bagging' | 'boosting'
  const [nEstimators, setNEstimators] = useState(5);
  const [learningRate, setLearningRate] = useState(0.1);

  const ensembleSimMetrics = useMemo(() => {
    if (ensembleType === "bagging") {
      const oobFraction = 36.8;
      const sampledFraction = 63.2;
      const varianceReduction = (1 - 1 / nEstimators) * 100;
      return {
        oobFraction,
        sampledFraction,
        varianceReduction: Number(varianceReduction.toFixed(1)),
        mode: "Parallel Independent Bootstrap Trees",
        desc: "Each tree trains independently on ~63.2% of data. Errors cancel out through averaging.",
      };
    } else {
      const residualDecay = Math.pow(1 - learningRate, nEstimators) * 100;
      const biasReduction = (100 - residualDecay).toFixed(1);
      return {
        residualDecay: Number(residualDecay.toFixed(1)),
        biasReduction,
        mode: "Sequential Residual Gradient Trees",
        desc: `Each tree sequentially fits the pseudo-residuals of earlier trees scaled by η = ${learningRate}.`,
      };
    }
  }, [ensembleType, nEstimators, learningRate]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 2: RANDOM FOREST VS EXTRA TREES HYPERPARAMETER LAB
  // ---------------------------------------------------------------------------
  const [rfTrees, setRfTrees] = useState(200);
  const [rfFeatures, setRfFeatures] = useState("sqrt"); // 'sqrt' | 'div3' | 'all'
  const [isExtraTrees, setIsExtraTrees] = useState(false);

  const rfMetrics = useMemo(() => {
    const totalP = 64; // hypothetical 64 features
    const m = rfFeatures === "sqrt" ? 8 : rfFeatures === "div3" ? 21 : 64;
    const decorrelation = isExtraTrees ? 92 : rfFeatures === "sqrt" ? 84 : 60;
    const trainingSpeed = isExtraTrees ? "3.2x Faster" : "1.0x Baseline";
    const expectedOOB = (94.2 + (rfTrees > 100 ? 1.5 : 0) - (rfFeatures === "all" ? 3.0 : 0)).toFixed(1);

    return {
      m,
      totalP,
      decorrelation,
      trainingSpeed,
      expectedOOB,
    };
  }, [rfTrees, rfFeatures, isExtraTrees]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 3: MODERN GRADIENT BOOSTING COMPARATOR
  // ---------------------------------------------------------------------------
  const [selectedFramework, setSelectedFramework] = useState("xgboost"); // 'xgboost' | 'lightgbm' | 'catboost'

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 4: 10-QUESTION MODULE ASSESSMENT
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the fundamental objective of ensemble learning?",
      options: [
        "Reduce data size",
        "Combine multiple base learners to reduce variance, bias, or prediction instability",
        "Convert classification problems into linear regressions",
        "Automatically eliminate all missing values",
      ],
      correct: 1,
      explanation: "Ensemble learning aggregates multiple models (weak learners) to build a superior predictor that balances the bias-variance tradeoff and stabilizes predictions.",
    },
    {
      id: 2,
      question: "What is the approximate proportion of unique observations captured in a standard bootstrap sample?",
      options: ["50.0%", "63.2%", "85.5%", "99.0%"],
      correct: 1,
      explanation: "Due to sampling with replacement from N items, the probability of an item being excluded is (1 - 1/N)^N ≈ e^(-1) ≈ 36.8%, meaning ~63.2% of samples appear at least once.",
    },
    {
      id: 3,
      question: "How does Random Forest reduce correlation between individual decision trees?",
      options: [
        "Normalizing feature scales",
        "Evaluating a random subset of features at each split alongside bootstrap sampling",
        "Training trees sequentially on residuals",
        "Removing leaves with high depth",
      ],
      correct: 1,
      explanation: "Random Forest injects two layers of randomness: bootstrap sampling across rows and random feature subsampling (e.g. sqrt(p)) at each split node to decorrelate trees.",
    },
    {
      id: 4,
      question: "What distinguishes Extra Trees from Random Forest?",
      options: [
        "Extra Trees uses neural networks",
        "Extra Trees draws random split thresholds for candidate features instead of finding optimal cutpoints",
        "Extra Trees only trains single stumps",
        "Extra Trees does not support classification",
      ],
      correct: 1,
      explanation: "Extremely Randomized Trees (Extra Trees) introduces additional randomness by picking random candidate split thresholds, often speeding up training and reducing variance.",
    },
    {
      id: 5,
      question: "How does AdaBoost adapt during training?",
      options: [
        "Adjusts learning rate randomly",
        "Increases sample weights for instances incorrectly predicted by earlier learners",
        "Replaces trees with linear models",
        "Discards 50% of the features",
      ],
      correct: 1,
      explanation: "AdaBoost adaptively raises weights of misclassified instances so that subsequent weak learners (often decision stumps) focus their capacity on difficult observations.",
    },
    {
      id: 6,
      question: "What do subsequent trees in Gradient Boosting fit?",
      options: [
        "The raw input features",
        "The negative gradients or residuals of the loss function from the existing ensemble",
        "Random noise",
        "Predictions from a logistic regression",
      ],
      correct: 1,
      explanation: "Gradient Boosting builds an additive model in stages where each new weak learner fits the pseudo-residuals (negative gradient of the loss) of the current ensemble.",
    },
    {
      id: 7,
      question: "What regularization does XGBoost incorporate into its tree optimization objective?",
      options: [
        "Dropout only",
        "Both L1 (alpha) and L2 (lambda) penalties on leaf weights alongside a penalty gamma on leaf counts",
        "Only early stopping",
        "None",
      ],
      correct: 1,
      explanation: "XGBoost's regularized objective Ω(f) = γT + (1/2)λ Σ w_j² + α Σ |w_j| explicitly penalizes the number of leaves and shrinks leaf weights to prevent overfitting.",
    },
    {
      id: 8,
      question: "How does LightGBM achieve exceptional training efficiency on massive tabular datasets?",
      options: [
        "Training a single deep tree",
        "Histogram-based feature binning, leaf-wise tree growth, GOSS, and EFB",
        "Ignoring numerical columns",
        "Restricting trees to depth 2",
      ],
      correct: 1,
      explanation: "LightGBM bins continuous values into discrete histograms, expands trees leaf-wise by best loss delta, and uses Gradient-based One-Side Sampling and Exclusive Feature Bundling.",
    },
    {
      id: 9,
      question: "What is CatBoost's primary architectural innovation?",
      options: [
        "Replaces trees with SVMs",
        "Native categorical feature handling using ordered target statistics and ordered boosting to prevent leakage",
        "Removing all non-numeric features",
        "Soft voting only",
      ],
      correct: 1,
      explanation: "CatBoost natively transforms high-cardinality categorical features using ordered target encoding on permutations, preventing target leakage and prediction shift.",
    },
    {
      id: 10,
      question: "Why are Out-of-Fold (OOF) predictions essential when training a Stacking meta-learner?",
      options: [
        "They prevent GPU memory overflows",
        "They prevent data leakage by ensuring meta-features are generated from held-out validation folds",
        "They make models run faster",
        "They guarantee zero loss",
      ],
      correct: 1,
      explanation: "In stacking, in-sample predictions are overly optimistic. OOF cross-validation ensures the meta-learner is trained on realistic, out-of-sample predictions, avoiding catastrophic data leakage.",
    },
  ];

  const handleSelectOption = (qId, optionIdx) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) score += 1;
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Top Module Navigation */}
      <ModuleNav track="machine-learning" currentModuleId="ensemble-learning" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Badge & Title */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-orange-600" />
              Machine Learning Track &bull; Module 09
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              20 COMPLETE SECTIONS &middot; ADVANCED ENSEMBLE ARCHITECTURES
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 9 &mdash; Ensemble Learning &amp; Boosting Algorithms
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Master state-of-the-art supervised ensemble learning. Understand the bias-variance tradeoff, master parallel bootstrap aggregation in Bagging and Random Forests, exploit randomized thresholds in Extra Trees, derive adaptive reweighting in AdaBoost, formulate gradient descent in function space with Gradient Boosting, conquer tabular data with regularized XGBoost, accelerate large-scale models with histogram leaf-wise LightGBM, handle native categories with CatBoost, and stack models via out-of-fold cross-validation.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="mt-8 flex items-center gap-3 border-t border-stone-200 pt-6">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "curriculum"
                  ? "bg-orange-600 text-white shadow-xs"
                  : "bg-stone-100 hover:bg-stone-200 text-stone-700"
              }`}
            >
              <BookOpen size={16} />
              <span>Full Curriculum Specification</span>
            </button>

            <button
              onClick={() => setActiveTab("workbench")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "workbench"
                  ? "bg-orange-600 text-white shadow-xs"
                  : "bg-stone-100 hover:bg-stone-200 text-stone-700"
              }`}
            >
              <Terminal size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
              <span className="rounded-full bg-orange-200 text-orange-900 px-2 py-0.5 text-[10px] font-mono font-bold">
                4 Live Labs
              </span>
            </button>
          </div>
        </div>

        {/* TAB 1: FULL CURRICULUM SPECIFICATION */}
        {activeTab === "curriculum" && <MachineLearningEnsembleSections />}

        {/* TAB 2: INTERACTIVE WORKBENCHES & ASSESSMENT */}
        {activeTab === "workbench" && (
          <div className="space-y-8">
            {/* Workbench Navigation Pills */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-stone-200/70 rounded-2xl w-fit">
              <button
                onClick={() => setActiveWorkbenchTab("bagging_boosting")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "bagging_boosting"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Boxes size={15} />
                <span>1. Bagging vs Boosting Simulator</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("rf_vs_et")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "rf_vs_et"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Shuffle size={15} />
                <span>2. Random Forest vs Extra Trees</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("modern_boosting")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "modern_boosting"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Zap size={15} />
                <span>3. Modern GBDT Comparator</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <HelpCircle size={15} />
                <span>4. Knowledge Exam (10 Questions)</span>
              </button>
            </div>

            {/* LAB 1: BAGGING VS BOOSTING SIMULATOR */}
            {activeWorkbenchTab === "bagging_boosting" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
                      Interactive Workbench 01
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight mt-2">
                      Parallel Bagging vs. Sequential Boosting Simulator
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1">
                      Compare how independent bootstrap averaging reduces variance against how sequential gradient learning shrinks residual errors.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setEnsembleType("bagging")}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold cursor-pointer ${
                        ensembleType === "bagging"
                          ? "bg-orange-600 text-white"
                          : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                      }`}
                    >
                      Bagging Mode
                    </button>
                    <button
                      onClick={() => setEnsembleType("boosting")}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold cursor-pointer ${
                        ensembleType === "boosting"
                          ? "bg-orange-600 text-white"
                          : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                      }`}
                    >
                      Boosting Mode
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div>
                    <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                      Number of Estimators (M): <span className="text-orange-700">{nEstimators}</span>
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="20"
                      value={nEstimators}
                      onChange={(e) => setNEstimators(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  {ensembleType === "boosting" && (
                    <div>
                      <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                        Learning Rate (&eta;): <span className="text-orange-700">{learningRate}</span>
                      </label>
                      <input
                        type="range"
                        min="0.02"
                        max="0.30"
                        step="0.02"
                        value={learningRate}
                        onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                        className="w-full accent-orange-600"
                      />
                    </div>
                  )}
                </div>

                {ensembleType === "bagging" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <span className="text-xs font-mono text-stone-500 uppercase">In-Sample Ratio</span>
                      <div className="text-2xl font-black font-mono text-stone-900 mt-1">63.2%</div>
                      <div className="text-[11px] text-stone-500 mt-1">Appears &ge;1 time per tree</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <span className="text-xs font-mono text-stone-500 uppercase">Out-of-Bag (OOB)</span>
                      <div className="text-2xl font-black font-mono text-orange-700 mt-1">36.8%</div>
                      <div className="text-[11px] text-stone-500 mt-1">Free internal test set</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                      <span className="text-xs font-mono text-emerald-900 uppercase font-bold">Variance Reduction</span>
                      <div className="text-2xl font-black font-mono text-emerald-800 mt-1">{ensembleSimMetrics.varianceReduction}%</div>
                      <div className="text-[11px] text-emerald-700 mt-1">Via averaging M={nEstimators} models</div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <span className="text-xs font-mono text-stone-500 uppercase">Boosting Rounds</span>
                      <div className="text-2xl font-black font-mono text-stone-900 mt-1">{nEstimators} Stages</div>
                      <div className="text-[11px] text-stone-500 mt-1">Additive tree updates</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <span className="text-xs font-mono text-stone-500 uppercase">Residual Error Decay</span>
                      <div className="text-2xl font-black font-mono text-orange-700 mt-1">{ensembleSimMetrics.residualDecay}%</div>
                      <div className="text-[11px] text-stone-500 mt-1">Remaining unexplained error</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                      <span className="text-xs font-mono text-emerald-900 uppercase font-bold">Bias Reduction</span>
                      <div className="text-2xl font-black font-mono text-emerald-800 mt-1">{ensembleSimMetrics.biasReduction}%</div>
                      <div className="text-[11px] text-emerald-700 mt-1">Sequential correction</div>
                    </div>
                  </div>
                )}

                <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-xs font-mono text-stone-800">
                  <strong>Mechanism:</strong> {ensembleSimMetrics.desc}
                </div>
              </div>
            )}

            {/* LAB 2: RANDOM FOREST VS EXTRA TREES */}
            {activeWorkbenchTab === "rf_vs_et" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
                    Interactive Workbench 02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight mt-2">
                    Random Forest vs. Extra Trees Hyperparameter Lab
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Explore how feature subsampling (max_features) and random thresholding in Extra Trees affect tree decorrelation and computational efficiency.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div>
                    <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                      Estimators (n_estimators): <span className="text-orange-700">{rfTrees}</span>
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="500"
                      step="50"
                      value={rfTrees}
                      onChange={(e) => setRfTrees(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                      Feature Subsampling (max_features):
                    </label>
                    <select
                      value={rfFeatures}
                      onChange={(e) => setRfFeatures(e.target.value)}
                      className="w-full p-2 rounded-xl border border-stone-300 font-mono text-xs bg-white"
                    >
                      <option value="sqrt">sqrt(p) = 8 features (Classification default)</option>
                      <option value="div3">p / 3 = 21 features (Regression heuristic)</option>
                      <option value="all">p = 64 features (No feature subsampling)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                      Algorithm Model:
                    </label>
                    <button
                      onClick={() => setIsExtraTrees(!isExtraTrees)}
                      className={`w-full p-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                        isExtraTrees
                          ? "bg-orange-600 text-white"
                          : "bg-white border border-stone-300 text-stone-800"
                      }`}
                    >
                      {isExtraTrees ? "ExtraTrees (Random Thresholds)" : "RandomForest (Optimal Thresholds)"}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono text-stone-500 uppercase">Features Evaluated / Split</span>
                    <div className="text-2xl font-black font-mono text-stone-900 mt-1">{rfMetrics.m} / {rfMetrics.totalP}</div>
                    <div className="text-[11px] text-stone-500 mt-1">m out of p features</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono text-stone-500 uppercase">Tree Decorrelation Score</span>
                    <div className="text-2xl font-black font-mono text-orange-700 mt-1">{rfMetrics.decorrelation}%</div>
                    <div className="text-[11px] text-stone-500 mt-1">Reduces ensemble variance</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono text-stone-500 uppercase">Relative Training Speed</span>
                    <div className="text-2xl font-black font-mono text-stone-900 mt-1">{rfMetrics.trainingSpeed}</div>
                    <div className="text-[11px] text-stone-500 mt-1">Skipping threshold sorts</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                    <span className="text-xs font-mono text-emerald-900 uppercase font-bold">Estimated OOB Score</span>
                    <div className="text-2xl font-black font-mono text-emerald-800 mt-1">{rfMetrics.expectedOOB}%</div>
                    <div className="text-[11px] text-emerald-700 mt-1">Cross-validation proxy</div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: MODERN GRADIENT BOOSTING COMPARATOR */}
            {activeWorkbenchTab === "modern_boosting" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
                    Interactive Workbench 03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight mt-2">
                    Modern Gradient Boosting Framework Comparator
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Select a modern boosting engine to inspect its core mathematical formulation, optimization mechanisms, and ideal dataset profiles.
                  </p>
                </div>

                <div className="flex gap-2">
                  {[
                    { id: "xgboost", name: "XGBoost (Extreme Gradient Boosting)" },
                    { id: "lightgbm", name: "LightGBM (Microsoft)" },
                    { id: "catboost", name: "CatBoost (Yandex)" },
                  ].map((fw) => (
                    <button
                      key={fw.id}
                      onClick={() => setSelectedFramework(fw.id)}
                      className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                        selectedFramework === fw.id
                          ? "bg-stone-900 text-white shadow-xs"
                          : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                      }`}
                    >
                      {fw.name}
                    </button>
                  ))}
                </div>

                {selectedFramework === "xgboost" && (
                  <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                      <h3 className="font-bold font-mono text-orange-700 uppercase">XGBoost Architecture</h3>
                      <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-mono font-bold">Competitive Standard</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700">
                      <div>
                        <strong>Regularized Objective:</strong>
                        <div className="p-2.5 bg-white rounded-xl border border-stone-200 font-mono text-xs text-orange-700 mt-1">
                          Obj = L + &gamma;T + (1/2)&lambda;Σwⱼ² + &alpha;Σ|wⱼ|
                        </div>
                        <p className="mt-1.5 text-stone-600">Explicitly controls tree complexity: &gamma; penalizes leaf count, while &lambda; (L2) and &alpha; (L1) shrink leaf weights.</p>
                      </div>
                      <div>
                        <strong>Second-Order Taylor Expansion:</strong>
                        <div className="p-2.5 bg-white rounded-xl border border-stone-200 font-mono text-xs text-stone-900 mt-1">
                          gᵢ = ∂L/∂ŷ, &nbsp;&nbsp; hᵢ = ∂²L/∂ŷ² (Hessian)
                        </div>
                        <p className="mt-1.5 text-stone-600">Calculates exact optimal leaf weights wⱼ* = -Gⱼ / (Hⱼ + &lambda;) and split gain analytically.</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedFramework === "lightgbm" && (
                  <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                      <h3 className="font-bold font-mono text-orange-700 uppercase">LightGBM Architecture</h3>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold">10x Speedup on Big Data</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700">
                      <div>
                        <strong>Histogram Discretization &amp; Leaf-Wise Growth:</strong>
                        <p className="mt-1 text-stone-600">Continuous float features are grouped into 256 discrete bins. Expands the single leaf with highest loss reduction rather than complete levels.</p>
                      </div>
                      <div>
                        <strong>GOSS &amp; EFB:</strong>
                        <p className="mt-1 text-stone-600">Gradient-based One-Side Sampling keeps large gradients and subsamples small ones; Exclusive Feature Bundling merges mutually exclusive sparse indicators.</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedFramework === "catboost" && (
                  <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                      <h3 className="font-bold font-mono text-orange-700 uppercase">CatBoost Architecture</h3>
                      <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold">Zero-Preprocessing Categoricals</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700">
                      <div>
                        <strong>Ordered Target Statistics:</strong>
                        <p className="mt-1 text-stone-600">Encodes string categories into target statistics using randomized historical permutations, entirely eliminating target leakage.</p>
                      </div>
                      <div>
                        <strong>Ordered Boosting:</strong>
                        <p className="mt-1 text-stone-600">Prevents prediction shift by computing gradients on separate data subsets than those used to fit the current tree.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* LAB 4: KNOWLEDGE EXAM */}
            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
                      Module Assessment
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight mt-2">
                      Module 9 Knowledge Check &mdash; 10 Questions
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1">
                      Test your understanding of bagging, bootstrap sampling, random feature decorrelation, AdaBoost, gradient pseudo-residuals, XGBoost regularization, LightGBM histograms, CatBoost ordered statistics, and stacking OOF protocols.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-stone-600">
                      Answered: {Object.keys(selectedAnswers).length} / {quizQuestions.length}
                    </span>
                    {quizSubmitted && (
                      <span className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 font-mono font-bold text-xs">
                        Score: {calculateScore()} / {quizQuestions.length} ({((calculateScore() / quizQuestions.length) * 100).toFixed(0)}%)
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q) => {
                    const isCorrect = selectedAnswers[q.id] === q.correct;

                    return (
                      <div
                        key={q.id}
                        className={`p-5 rounded-2xl border transition-all ${
                          quizSubmitted
                            ? isCorrect
                              ? "bg-emerald-50/50 border-emerald-200"
                              : "bg-rose-50/50 border-rose-200"
                            : "bg-stone-50 border-stone-200"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="font-mono text-xs font-bold text-orange-700 mt-0.5">
                            Q{q.id}.
                          </span>
                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-[#18181b]">{q.question}</h3>

                            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {q.options.map((opt, optIdx) => {
                                const selected = selectedAnswers[q.id] === optIdx;
                                return (
                                  <button
                                    key={optIdx}
                                    onClick={() => handleSelectOption(q.id, optIdx)}
                                    className={`p-3 rounded-xl text-left text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${
                                      selected
                                        ? "bg-stone-900 text-white font-bold"
                                        : "bg-white hover:bg-stone-100 text-stone-700 border border-stone-200"
                                    }`}
                                  >
                                    <span>{opt}</span>
                                    {quizSubmitted && optIdx === q.correct && (
                                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 ml-2" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>

                            {quizSubmitted && (
                              <div className="mt-3 p-3 rounded-xl bg-white/80 border border-stone-200 text-xs text-stone-700">
                                <strong>Explanation:</strong> {q.explanation}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs transition-colors"
                  >
                    Submit Assessment
                  </button>

                  <button
                    onClick={() => {
                      setSelectedAnswers({});
                      setQuizSubmitted(false);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs sm:text-sm cursor-pointer transition-colors"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Nav: Previous Module / Next Step */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/machine-learning/decision-trees")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 8 &mdash; Decision Trees &amp; Rule-Based Learning</span>
          </button>

          <button
            onClick={() => navigate("/learning/machine-learning")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs transition-colors"
          >
            <span>Return to Machine Learning Overview</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
