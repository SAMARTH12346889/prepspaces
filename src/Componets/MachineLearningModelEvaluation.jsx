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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import MachineLearningModelEvaluationSections from "./MachineLearningModelEvaluationSections";

export default function MachineLearningModelEvaluation() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("threshold_lab"); // 'threshold_lab' | 'regression_lab' | 'cv_curves' | 'quiz'

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 1: CLASSIFICATION THRESHOLD & CONFUSION MATRIX LAB
  // ---------------------------------------------------------------------------
  const [threshold, setThreshold] = useState(0.50);
  const [presetScenario, setPresetScenario] = useState("standard"); // 'standard' | 'fraud' | 'medical'

  // Fixed 30 simulated validation samples with ground truth and predicted probability
  const classificationDataset = useMemo(() => {
    return [
      { id: 1, actual: 1, prob: 0.94 },
      { id: 2, actual: 1, prob: 0.89 },
      { id: 3, actual: 1, prob: 0.85 },
      { id: 4, actual: 1, prob: 0.81 },
      { id: 5, actual: 1, prob: 0.77 },
      { id: 6, actual: 1, prob: 0.72 },
      { id: 7, actual: 1, prob: 0.68 },
      { id: 8, actual: 1, prob: 0.63 },
      { id: 9, actual: 1, prob: 0.58 },
      { id: 10, actual: 1, prob: 0.52 },
      { id: 11, actual: 1, prob: 0.47 },
      { id: 12, actual: 1, prob: 0.42 },
      { id: 13, actual: 1, prob: 0.38 },
      { id: 14, actual: 1, prob: 0.29 },
      { id: 15, actual: 1, prob: 0.18 },
      { id: 16, actual: 0, prob: 0.82 },
      { id: 17, actual: 0, prob: 0.67 },
      { id: 18, actual: 0, prob: 0.55 },
      { id: 19, actual: 0, prob: 0.49 },
      { id: 20, actual: 0, prob: 0.44 },
      { id: 21, actual: 0, prob: 0.39 },
      { id: 22, actual: 0, prob: 0.35 },
      { id: 23, actual: 0, prob: 0.31 },
      { id: 24, actual: 0, prob: 0.27 },
      { id: 25, actual: 0, prob: 0.22 },
      { id: 26, actual: 0, prob: 0.19 },
      { id: 27, actual: 0, prob: 0.15 },
      { id: 28, actual: 0, prob: 0.11 },
      { id: 29, actual: 0, prob: 0.08 },
      { id: 30, actual: 0, prob: 0.04 },
    ];
  }, []);

  const matrixStats = useMemo(() => {
    let tp = 0;
    let fp = 0;
    let fn = 0;
    let tn = 0;

    classificationDataset.forEach((item) => {
      const pred = item.prob >= threshold ? 1 : 0;
      if (item.actual === 1 && pred === 1) tp++;
      else if (item.actual === 0 && pred === 1) fp++;
      else if (item.actual === 1 && pred === 0) fn++;
      else if (item.actual === 0 && pred === 0) tn++;
    });

    const total = tp + fp + fn + tn;
    const accuracy = total > 0 ? (tp + tn) / total : 0;
    const precision = tp + fp > 0 ? tp / (tp + fp) : 0;
    const recall = tp + fn > 0 ? tp / (tp + fn) : 0;
    const specificity = tn + fp > 0 ? tn / (tn + fp) : 0;
    const fpr = tn + fp > 0 ? fp / (tn + fp) : 0;
    const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;
    const f2 = (4 * precision + recall) > 0 ? (5 * precision * recall) / (4 * precision + recall) : 0;

    return {
      tp,
      fp,
      fn,
      tn,
      total,
      accuracy: Math.round(accuracy * 100),
      precision: Math.round(precision * 100),
      recall: Math.round(recall * 100),
      specificity: Math.round(specificity * 100),
      fpr: Math.round(fpr * 100),
      f1: (f1 * 100).toFixed(1),
      f2: (f2 * 100).toFixed(1),
    };
  }, [classificationDataset, threshold]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 2: REGRESSION METRICS & RESIDUALS EXPLORER
  // ---------------------------------------------------------------------------
  const [regressionScenario, setRegressionScenario] = useState("clean"); // 'clean' | 'noisy' | 'outliers' | 'nonlinear'
  const [numFeaturesP, setNumFeaturesP] = useState(3);

  const regressionData = useMemo(() => {
    const raw = [
      { x: 10, clean: 22, noisy: 24, outlier: 22, nonlinear: 15 },
      { x: 20, clean: 38, noisy: 34, outlier: 39, nonlinear: 28 },
      { x: 30, clean: 51, noisy: 58, outlier: 52, nonlinear: 46 },
      { x: 40, clean: 68, noisy: 62, outlier: 69, nonlinear: 70 },
      { x: 50, clean: 83, noisy: 89, outlier: 165, nonlinear: 98 }, // big outlier
      { x: 60, clean: 99, noisy: 94, outlier: 98, nonlinear: 130 },
      { x: 70, clean: 114, noisy: 124, outlier: 115, nonlinear: 172 },
      { x: 80, clean: 131, noisy: 125, outlier: 130, nonlinear: 220 },
      { x: 90, clean: 147, noisy: 155, outlier: 21, nonlinear: 275 }, // low outlier
      { x: 100, clean: 162, noisy: 159, outlier: 164, nonlinear: 338 },
    ];

    // Reference linear prediction y_hat = 1.6 * x + 5
    return raw.map((d) => {
      const pred = 1.6 * d.x + 5;
      let actual = d.clean;
      if (regressionScenario === "noisy") actual = d.noisy;
      if (regressionScenario === "outliers") actual = d.outlier;
      if (regressionScenario === "nonlinear") actual = d.nonlinear;
      const residual = actual - pred;
      return {
        x: d.x,
        actual,
        pred: Math.round(pred * 10) / 10,
        residual: Math.round(residual * 10) / 10,
      };
    });
  }, [regressionScenario]);

  const regressionMetrics = useMemo(() => {
    const n = regressionData.length;
    let sumAbsErr = 0;
    let sumSqErr = 0;
    let sumActual = 0;

    regressionData.forEach((d) => {
      const err = d.actual - d.pred;
      sumAbsErr += Math.abs(err);
      sumSqErr += err * err;
      sumActual += d.actual;
    });

    const meanActual = sumActual / n;
    let ssTot = 0;
    regressionData.forEach((d) => {
      ssTot += Math.pow(d.actual - meanActual, 2);
    });

    const mae = sumAbsErr / n;
    const mse = sumSqErr / n;
    const rmse = Math.sqrt(mse);
    const r2 = ssTot > 0 ? 1 - sumSqErr / ssTot : 0;
    const p = numFeaturesP;
    const adjR2 = n > p + 1 ? 1 - ((1 - r2) * (n - 1)) / (n - p - 1) : r2;

    return {
      mae: mae.toFixed(2),
      mse: mse.toFixed(2),
      rmse: rmse.toFixed(2),
      r2: r2.toFixed(3),
      adjR2: adjR2.toFixed(3),
      meanActual: meanActual.toFixed(1),
    };
  }, [regressionData, numFeaturesP]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 3: CROSS-VALIDATION & LEARNING CURVES SIMULATOR
  // ---------------------------------------------------------------------------
  const [modelComplexityScenario, setModelComplexityScenario] = useState("good_fit"); // 'good_fit' | 'overfitting' | 'underfitting'
  const [activeFoldView, setActiveFoldView] = useState(2); // fold 1 to 5

  const learningCurvePoints = useMemo(() => {
    // Points along sample size N = 20, 50, 100, 200, 400
    if (modelComplexityScenario === "underfitting") {
      return [
        { n: 20, train: 0.68, val: 0.40 },
        { n: 50, train: 0.65, val: 0.52 },
        { n: 100, train: 0.63, val: 0.59 },
        { n: 200, train: 0.62, val: 0.60 },
        { n: 400, train: 0.61, val: 0.60 },
      ];
    }
    if (modelComplexityScenario === "overfitting") {
      return [
        { n: 20, train: 1.00, val: 0.35 },
        { n: 50, train: 0.99, val: 0.48 },
        { n: 100, train: 0.98, val: 0.58 },
        { n: 200, train: 0.97, val: 0.68 },
        { n: 400, train: 0.96, val: 0.74 },
      ];
    }
    // good_fit
    return [
      { n: 20, train: 0.95, val: 0.58 },
      { n: 50, train: 0.92, val: 0.74 },
      { n: 100, train: 0.90, val: 0.83 },
      { n: 200, train: 0.89, val: 0.87 },
      { n: 400, train: 0.88, val: 0.87 },
    ];
  }, [modelComplexityScenario]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 4: ASSESSMENT EXAM (10 QUESTIONS)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "Why is it strictly necessary to separate the final Test dataset from all hyperparameter tuning and model selection decisions?",
      options: [
        "Because training algorithms crash if the test set is loaded into memory",
        "To prevent data leakage and selection bias, ensuring an unbiased estimate of generalization performance on unseen real-world data",
        "Because Scikit-learn models cannot compute predictions on training sets",
        "To ensure all target features automatically normalize to zero mean",
      ],
      correct: 1,
      explanation: "If the test dataset is repeatedly inspected to tune hyperparameters or choose between candidate algorithms, information indirectly leaks into model decisions. The test set must remain untouched until final evaluation to yield an unbiased estimate of generalization.",
    },
    {
      id: 2,
      question: "What is the primary danger of applying StandardScaler.fit_transform() across the entire dataset before splitting into train/test sets?",
      options: [
        "It doubles the memory footprint of the dataset",
        "It causes data leakage because the scaler uses the mean and variance of future test samples, producing overly optimistic test metrics",
        "It forces all negative target values to zero",
        "It turns linear models into non-linear kernel models",
      ],
      correct: 1,
      explanation: "Fitting preprocessing transformations (scalers, encoders, imputers) on the complete dataset leaks distributional statistics (mean and variance) from the test set into the training phase. Preprocessing parameters must be learned strictly from training folds.",
    },
    {
      id: 3,
      question: "Why is Root Mean Squared Error (RMSE) generally preferred over Mean Squared Error (MSE) when reporting regression performance to stakeholders?",
      options: [
        "RMSE is always equal to zero for linear models",
        "RMSE retains the quadratic penalty for large errors while restoring the original target units (e.g., dollars instead of dollars-squared)",
        "RMSE eliminates all residual sensitivity to outliers",
        "RMSE does not require computing differences between actual and predicted values",
      ],
      correct: 1,
      explanation: "MSE penalizes large errors quadratically but is expressed in squared units (e.g. ₹² or $²). RMSE takes the square root of MSE, retaining the severe penalty for large errors while bringing the error metric back to the original unit of the target.",
    },
    {
      id: 4,
      question: "Why can the coefficient of determination (R²) be negative when evaluated on an independent test dataset?",
      options: [
        "R² can never be negative under any mathematical circumstances",
        "A negative R² indicates that the trained model's predictions are worse than simply predicting the mean of the actual target values for all samples",
        "Because the model has zero bias and zero variance",
        "Because feature scaling was applied inside a Scikit-learn Pipeline",
      ],
      correct: 1,
      explanation: "R² = 1 - (SS_res / SS_tot). If the residual sum of squares of the model's predictions exceeds the total sum of squares from predicting the historical mean, the ratio exceeds 1, yielding a negative R².",
    },
    {
      id: 5,
      question: "In a medical cancer diagnosis system, what constitutes a False Negative (FN) and what is its operational consequence?",
      options: [
        "A healthy patient is diagnosed with cancer; causes emotional distress and unnecessary biopsy",
        "A patient who actually has cancer is diagnosed as healthy; causes delayed life-saving treatment",
        "A patient who has cancer is correctly identified; prompt treatment begins",
        "A healthy patient is correctly identified as healthy; no further action needed",
      ],
      correct: 1,
      explanation: "A False Negative (Type II error) occurs when the true condition is positive (cancer) but the model predicts negative (healthy). In medical screening, False Negatives carry catastrophic consequences, requiring high Recall.",
    },
    {
      id: 6,
      question: "Why is Accuracy an unreliable metric for evaluating models on severely imbalanced datasets (e.g., 99.5% legitimate transactions, 0.5% fraud)?",
      options: [
        "Accuracy cannot be computed when the sample count exceeds 1,000",
        "A trivial dummy model that predicts 'legitimate' for every single sample achieves 99.5% accuracy while detecting zero fraud",
        "Accuracy requires binary cross-entropy to be zero",
        "Accuracy is incompatible with Stratified K-Fold",
      ],
      correct: 1,
      explanation: "Under severe class imbalance, predicting the majority class for 100% of samples yields a deceptively high accuracy score despite completely failing to identify the minority class of interest.",
    },
    {
      id: 7,
      question: "Why is the Precision-Recall (PR) curve often superior to the ROC curve for evaluating rare positive events (fraud, rare disease)?",
      options: [
        "ROC curves cannot be plotted in Scikit-learn",
        "Because the False Positive Rate (FPR) in ROC has True Negatives (TN) in the denominator, massive TN counts keep FPR deceptively low even if false alarms explode",
        "PR curves do not require calculating precision",
        "Because ROC-AUC is only defined for regression models",
      ],
      correct: 1,
      explanation: "FPR = FP / (FP + TN). When TN is in the hundreds of thousands, a large number of false alarms (FP) barely registers in FPR. In contrast, Precision = TP / (TP + FP) directly exposes the surge in false alarms relative to true positive detections.",
    },
    {
      id: 8,
      question: "How does lowering the classification decision threshold (e.g., from t = 0.50 down to t = 0.20) affect model performance?",
      options: [
        "Decreases True Positives and increases False Negatives",
        "Increases positive predictions, increasing Recall (capturing more actual positives) while typically decreasing Precision (more false alarms)",
        "Has zero effect on the confusion matrix",
        "Guarantees a higher F1 score in every scenario",
      ],
      correct: 1,
      explanation: "Lowering the cutoff threshold makes the model more aggressive in predicting the positive class. This captures more true positives (higher Recall) at the expense of admitting more false positives (lower Precision).",
    },
    {
      id: 9,
      question: "When must GroupKFold be utilized instead of standard KFold or StratifiedKFold cross-validation?",
      options: [
        "When the target variable is continuous and requires linear regression",
        "When multiple non-independent records originate from the same subject/entity (e.g., multiple ECGs from the same patient) to prevent data leakage across folds",
        "When the dataset has fewer than 10 total samples",
        "When the number of features exceeds the number of observations",
      ],
      correct: 1,
      explanation: "If observations from the same subject (patient, customer, user) appear in both training and validation folds, the model can memorize subject-specific idiosyncrasies rather than learning general disease signatures. GroupKFold keeps entire groups strictly in train or validation.",
    },
    {
      id: 10,
      question: "What is the primary architectural purpose of Nested Cross-Validation?",
      options: [
        "To speed up model training by a factor of 10",
        "To separate hyperparameter tuning (inner cross-validation loop) from unbiased generalization performance estimation (outer cross-validation loop)",
        "To eliminate the need for feature scaling",
        "To train an ensemble of deep neural networks",
      ],
      correct: 1,
      explanation: "When hyperparameter search is performed using standard cross-validation, the winning validation score has optimistic selection bias. Nested CV uses an inner loop to tune hyperparameters and an outer loop to independently evaluate the entire model selection procedure.",
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
      <ModuleNav track="machine-learning" currentModuleId="model-evaluation" />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Card */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 via-amber-100/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200">
                <Target size={13} className="text-orange-600" />
                <span>MODULE 12: MODEL VALIDATION &amp; PERFORMANCE OPTIMIZATION</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
                Model Evaluation &amp; Cross-Validation
              </h1>
              <p className="text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
                Master rigorous validation pipelines, leak-free preprocessing, regression metrics (MAE, MSE, RMSE, R&sup2;), classification metrics (Precision, Recall, F1, ROC-AUC vs PR-AUC), decision threshold tuning, and advanced resampling (Stratified K-Fold, GroupKFold, Nested CV).
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
              <div className="px-3.5 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 text-xs font-mono font-medium flex items-center gap-2">
                <Layers size={14} className="text-orange-600" />
                <span>37 Core Concepts</span>
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
              Machine Learning Track &bull; Model Validation Core
            </div>
          </div>
        </div>

        {/* View Mode 1: Curriculum Content */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            <MachineLearningModelEvaluationSections />
          </div>
        )}

        {/* View Mode 2: Interactive Workbenches */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Sub-Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("threshold_lab")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeWorkbenchTab === "threshold_lab"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                <Target size={15} />
                <span>1. Threshold &amp; Confusion Matrix Lab</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("regression_lab")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeWorkbenchTab === "regression_lab"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                <TrendingUp size={15} />
                <span>2. Regression Residuals &amp; Metrics</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("cv_curves")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeWorkbenchTab === "cv_curves"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                <BarChart2 size={15} />
                <span>3. Cross-Validation &amp; Learning Curves</span>
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

            {/* LAB 1: THRESHOLD & CONFUSION MATRIX */}
            {activeWorkbenchTab === "threshold_lab" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <Target size={13} />
                    <span>LAB 1: CLASSIFICATION THRESHOLD SIMULATOR</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Decision Threshold, Trade-offs &amp; Confusion Matrix
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Slide the decision threshold <em>t</em> to observe how altering the probability cutoff dynamically trades off Precision against Recall, modifies True Positives vs False Alarms, and updates the F1/F2 scores.
                  </p>
                </div>

                {/* Controls */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono font-bold text-stone-700">
                      <span>Classification Threshold (t):</span>
                      <span className="text-base text-orange-600 font-black">{threshold.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="0.05"
                      max="0.95"
                      step="0.01"
                      value={threshold}
                      onChange={(e) => setThreshold(parseFloat(e.target.value))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-stone-400 font-mono">
                      <span>0.05 (High Recall / Aggressive)</span>
                      <span>0.50 (Default)</span>
                      <span>0.95 (High Precision / Conservative)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-stone-700 block">Quick Operational Presets:</span>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setThreshold(0.20)}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          Math.abs(threshold - 0.20) < 0.02
                            ? "bg-rose-600 text-white border-rose-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Medical Screening (t=0.20)
                      </button>
                      <button
                        onClick={() => setThreshold(0.50)}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          Math.abs(threshold - 0.50) < 0.02
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Balanced (t=0.50)
                      </button>
                      <button
                        onClick={() => setThreshold(0.80)}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          Math.abs(threshold - 0.80) < 0.02
                            ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Spam Filter (t=0.80)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Real-time 2x2 Matrix & Metrics Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* 2x2 Confusion Matrix Visual */}
                  <div className="lg:col-span-6 p-5 rounded-2xl bg-stone-900 text-white space-y-4">
                    <div className="flex justify-between items-center border-b border-stone-800 pb-3">
                      <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                        2&times;2 Confusion Matrix (N = {matrixStats.total})
                      </span>
                      <span className="text-[11px] font-mono text-stone-400">Cutoff: P(Y=1) &ge; {threshold.toFixed(2)}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {/* TP */}
                      <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-600/40 text-center space-y-1">
                        <div className="text-[11px] font-mono uppercase text-emerald-400 font-bold">
                          True Positive (TP)
                        </div>
                        <div className="text-3xl font-black text-emerald-300">{matrixStats.tp}</div>
                        <div className="text-[10px] text-stone-300">Actual: 1 &bull; Predicted: 1</div>
                      </div>

                      {/* FP */}
                      <div className="p-4 rounded-xl bg-rose-950/70 border border-rose-600/40 text-center space-y-1">
                        <div className="text-[11px] font-mono uppercase text-rose-400 font-bold">
                          False Positive (FP - Type I)
                        </div>
                        <div className="text-3xl font-black text-rose-300">{matrixStats.fp}</div>
                        <div className="text-[10px] text-stone-300">Actual: 0 &bull; Predicted: 1</div>
                      </div>

                      {/* FN */}
                      <div className="p-4 rounded-xl bg-amber-950/70 border border-amber-600/40 text-center space-y-1">
                        <div className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                          False Negative (FN - Type II)
                        </div>
                        <div className="text-3xl font-black text-amber-300">{matrixStats.fn}</div>
                        <div className="text-[10px] text-stone-300">Actual: 1 &bull; Predicted: 0</div>
                      </div>

                      {/* TN */}
                      <div className="p-4 rounded-xl bg-sky-950/70 border border-sky-600/40 text-center space-y-1">
                        <div className="text-[11px] font-mono uppercase text-sky-400 font-bold">
                          True Negative (TN)
                        </div>
                        <div className="text-3xl font-black text-sky-300">{matrixStats.tn}</div>
                        <div className="text-[10px] text-stone-300">Actual: 0 &bull; Predicted: 0</div>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-stone-400 text-center pt-2">
                      Total Actual Positives: {matrixStats.tp + matrixStats.fn} &bull; Total Actual Negatives: {matrixStats.tn + matrixStats.fp}
                    </div>
                  </div>

                  {/* Derived Metrics Board */}
                  <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-stone-500 block">Accuracy</span>
                      <span className="text-2xl font-black text-stone-900">{matrixStats.accuracy}%</span>
                      <span className="text-[10px] text-stone-400 block">(TP+TN) / Total</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-orange-700 block">Precision</span>
                      <span className="text-2xl font-black text-orange-700">{matrixStats.precision}%</span>
                      <span className="text-[10px] text-orange-600/70 block">TP / (TP + FP)</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-emerald-700 block">Recall / TPR</span>
                      <span className="text-2xl font-black text-emerald-700">{matrixStats.recall}%</span>
                      <span className="text-[10px] text-emerald-600/70 block">TP / (TP + FN)</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-stone-500 block">Specificity</span>
                      <span className="text-2xl font-black text-stone-900">{matrixStats.specificity}%</span>
                      <span className="text-[10px] text-stone-400 block">TN / (TN + FP)</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-amber-700 block">F1-Score</span>
                      <span className="text-2xl font-black text-amber-700">{matrixStats.f1}%</span>
                      <span className="text-[10px] text-amber-600/70 block">Harmonic Mean (P, R)</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-rose-700 block">F2-Score</span>
                      <span className="text-2xl font-black text-rose-700">{matrixStats.f2}%</span>
                      <span className="text-[10px] text-rose-600/70 block">2&times; Weight on Recall</span>
                    </div>
                  </div>
                </div>

                {/* Probability Distribution Strip */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono font-bold text-stone-700">
                    <span>Validation Observations Array (Blue = Actual 0, Orange = Actual 1)</span>
                    <span>Threshold Line: {threshold.toFixed(2)}</span>
                  </div>

                  <div className="relative h-12 bg-white rounded-xl border border-stone-200 px-3 flex items-center overflow-hidden">
                    {/* Threshold bar */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-20 shadow-xs"
                      style={{ left: `${threshold * 100}%` }}
                    />
                    <div
                      className="absolute top-1 text-[9px] font-mono font-bold text-red-600 bg-red-50 px-1 rounded z-20"
                      style={{ left: `calc(${threshold * 100}% - 22px)` }}
                    >
                      t={threshold.toFixed(2)}
                    </div>

                    {/* Points mapped by probability */}
                    {classificationDataset.map((pt) => {
                      const isPredictedPositive = pt.prob >= threshold;
                      const isCorrect = (pt.actual === 1 && isPredictedPositive) || (pt.actual === 0 && !isPredictedPositive);

                      return (
                        <div
                          key={pt.id}
                          className="absolute w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all cursor-pointer group"
                          style={{
                            left: `calc(${pt.prob * 96}% + 4px)`,
                            backgroundColor: pt.actual === 1 ? "#ea580c" : "#0284c7",
                            borderColor: isCorrect ? "#16a34a" : "#dc2626",
                            borderWidth: "1.5px",
                          }}
                        >
                          <div className="hidden group-hover:block absolute bottom-5 left-1/2 -translate-x-1/2 p-2 bg-stone-900 text-white rounded text-[10px] font-mono whitespace-nowrap z-30 shadow-lg">
                            Actual: {pt.actual} &bull; Prob: {pt.prob} &bull; Pred: {isPredictedPositive ? 1 : 0}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono">
                    <span>Predicted Negative Region (&lt; t)</span>
                    <span>Predicted Positive Region (&ge; t)</span>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: REGRESSION METRICS & RESIDUALS */}
            {activeWorkbenchTab === "regression_lab" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <TrendingUp size={13} />
                    <span>LAB 2: REGRESSION ERROR METRICS &amp; RESIDUALS</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    MAE, MSE, RMSE, R&sup2; &amp; Adjusted R&sup2; Diagnostics
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Switch between different regression data distributions to inspect how outliers distort MSE and RMSE relative to MAE, and adjust the predictor count <em>p</em> to see how Adjusted R&sup2; penalizes unnecessary parameters.
                  </p>
                </div>

                {/* Scenario Controls */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-stone-700 block">Dataset Error Distribution:</span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button
                        onClick={() => setRegressionScenario("clean")}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          regressionScenario === "clean"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Ideal Linear
                      </button>
                      <button
                        onClick={() => setRegressionScenario("noisy")}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          regressionScenario === "noisy"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Gaussian Noise
                      </button>
                      <button
                        onClick={() => setRegressionScenario("outliers")}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          regressionScenario === "outliers"
                            ? "bg-rose-600 text-white border-rose-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Heavy Outliers
                      </button>
                      <button
                        onClick={() => setRegressionScenario("nonlinear")}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          regressionScenario === "nonlinear"
                            ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Non-Linear Trend
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono font-bold text-stone-700">
                      <span>Number of Model Predictors (p):</span>
                      <span className="text-base text-orange-600 font-black">{numFeaturesP}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="7"
                      step="1"
                      value={numFeaturesP}
                      onChange={(e) => setNumFeaturesP(parseInt(e.target.value, 10))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-stone-400 font-mono">
                      <span>p=1 (Parsimonious)</span>
                      <span>p=3 (Moderate)</span>
                      <span>p=7 (High Complexity penalty)</span>
                    </div>
                  </div>
                </div>

                {/* Metrics Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <span className="text-[11px] font-mono font-bold text-stone-500 block">MAE</span>
                    <span className="text-2xl font-black text-stone-900">{regressionMetrics.mae}</span>
                    <span className="text-[10px] text-stone-400 block">Linear Error scale</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                    <span className="text-[11px] font-mono font-bold text-amber-700 block">MSE</span>
                    <span className="text-2xl font-black text-amber-700">{regressionMetrics.mse}</span>
                    <span className="text-[10px] text-amber-600/70 block">Squared Penalty (Units&sup2;)</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 space-y-1">
                    <span className="text-[11px] font-mono font-bold text-orange-700 block">RMSE</span>
                    <span className="text-2xl font-black text-orange-700">{regressionMetrics.rmse}</span>
                    <span className="text-[10px] text-orange-600/70 block">&radic;(MSE) Original Units</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                    <span className="text-[11px] font-mono font-bold text-emerald-700 block">R&sup2; Score</span>
                    <span className="text-2xl font-black text-emerald-700">{regressionMetrics.r2}</span>
                    <span className="text-[10px] text-emerald-600/70 block">Variance Explained</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-1">
                    <span className="text-[11px] font-mono font-bold text-sky-700 block">Adjusted R&sup2;</span>
                    <span className="text-2xl font-black text-sky-700">{regressionMetrics.adjR2}</span>
                    <span className="text-[10px] text-sky-600/70 block">Penalized for p={numFeaturesP}</span>
                  </div>
                </div>

                {/* Residual Plot Visualization */}
                <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-4">
                  <div className="flex justify-between items-center border-b border-stone-800 pb-3">
                    <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                      Residual Diagnostic Plot (e_i = y_i - y_hat vs y_hat)
                    </span>
                    <span className="text-[11px] font-mono text-stone-400">Target Mean: {regressionMetrics.meanActual}</span>
                  </div>

                  <div className="relative h-48 bg-stone-950 rounded-xl border border-stone-800 flex items-center justify-center p-4">
                    {/* Zero-residual center line */}
                    <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-0.5 bg-stone-700 dashed" />
                    <span className="absolute left-7 top-1/2 -translate-y-6 text-[10px] font-mono text-stone-400">
                      Zero Residual (e = 0)
                    </span>

                    {/* SVG plotting points */}
                    <svg className="w-full h-full" viewBox="0 0 400 160">
                      {regressionData.map((d, idx) => {
                        // Map x to 30..370, residual from -80..+80 to 140..20
                        const cx = 30 + idx * 36;
                        const cy = Math.max(15, Math.min(145, 80 - d.residual * 0.9));
                        const isBigError = Math.abs(d.residual) > 20;

                        return (
                          <g key={idx}>
                            {/* Stem line to zero */}
                            <line
                              x1={cx}
                              y1={80}
                              x2={cx}
                              y2={cy}
                              stroke={isBigError ? "#f43f5e" : "#38bdf8"}
                              strokeWidth="1.5"
                              strokeDasharray="2 2"
                            />
                            {/* Point */}
                            <circle
                              cx={cx}
                              cy={cy}
                              r={isBigError ? 6 : 4.5}
                              fill={isBigError ? "#e11d48" : "#0ea5e9"}
                              stroke="#ffffff"
                              strokeWidth="1.5"
                            />
                            {/* Label */}
                            <text
                              x={cx}
                              y={cy > 80 ? cy + 12 : cy - 8}
                              textAnchor="middle"
                              fill="#94a3b8"
                              fontSize="9"
                              fontFamily="monospace"
                            >
                              {d.residual > 0 ? `+${d.residual}` : d.residual}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  <div className="text-[11px] text-stone-400 font-mono flex justify-between">
                    <span>Clean model: residuals randomly scatter around e=0 without funneling.</span>
                    <span className="text-orange-400">
                      {regressionScenario === "outliers" && "Notice extreme outlier points driving RMSE drastically higher than MAE!"}
                      {regressionScenario === "nonlinear" && "Notice residual curvature indicating violation of linear assumptions!"}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: CROSS-VALIDATION & LEARNING CURVES */}
            {activeWorkbenchTab === "cv_curves" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <BarChart2 size={13} />
                    <span>LAB 3: RESAMPLING &amp; LEARNING CURVE DIAGNOSTICS</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    K-Fold Cross-Validation &amp; Bias-Variance Signatures
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Inspect how K-Fold partitions data into rotation validation folds, and analyze training vs validation learning curves to diagnose high bias (underfitting) versus high variance (overfitting).
                  </p>
                </div>

                {/* Scenario selector */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-stone-700 block">Model Regimes:</span>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setModelComplexityScenario("good_fit")}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          modelComplexityScenario === "good_fit"
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Ideal Fit
                      </button>
                      <button
                        onClick={() => setModelComplexityScenario("overfitting")}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          modelComplexityScenario === "overfitting"
                            ? "bg-rose-600 text-white border-rose-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        High Variance (Overfit)
                      </button>
                      <button
                        onClick={() => setModelComplexityScenario("underfitting")}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          modelComplexityScenario === "underfitting"
                            ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        High Bias (Underfit)
                      </button>
                    </div>
                  </div>

                  <div className="text-xs text-stone-600 leading-relaxed font-sans">
                    {modelComplexityScenario === "good_fit" && (
                      <p>
                        <strong>Balanced Model:</strong> As sample size scales, training error and validation error converge closely to a high performance plateau (&asymp; 87% accuracy) with a narrow generalization gap.
                      </p>
                    )}
                    {modelComplexityScenario === "overfitting" && (
                      <p>
                        <strong>High Variance Model:</strong> Training score stays near 100%, but validation score plateaus far below (&asymp; 74%), leaving a large generalization gap indicative of memorization.
                      </p>
                    )}
                    {modelComplexityScenario === "underfitting" && (
                      <p>
                        <strong>High Bias Model:</strong> Both training and validation scores quickly converge to an unacceptably low score (&asymp; 60%). Adding more training data will not resolve the defect.
                      </p>
                    )}
                  </div>
                </div>

                {/* 5-Fold Resampling Partition Visualizer */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono font-bold text-stone-700">
                    <span>5-Fold Cross-Validation Partitioning Scheme</span>
                    <span className="text-stone-500">Active View: Fold {activeFoldView}</span>
                  </div>

                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((foldNum) => (
                      <div
                        key={foldNum}
                        onClick={() => setActiveFoldView(foldNum)}
                        className={`p-2.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                          activeFoldView === foldNum
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        <span className="text-xs font-mono font-bold w-16 shrink-0">Fold {foldNum}:</span>
                        <div className="grid grid-cols-5 gap-1.5 flex-1 h-5">
                          {[1, 2, 3, 4, 5].map((slice) => {
                            const isVal = slice === foldNum;
                            return (
                              <div
                                key={slice}
                                className={`rounded flex items-center justify-center text-[10px] font-mono font-bold ${
                                  isVal
                                    ? activeFoldView === foldNum
                                      ? "bg-orange-500 text-white"
                                      : "bg-orange-600 text-white"
                                    : activeFoldView === foldNum
                                    ? "bg-stone-800 text-stone-300"
                                    : "bg-stone-200 text-stone-600"
                                }`}
                              >
                                {isVal ? "VAL (20%)" : "TRAIN"}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learning Curve Chart */}
                <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-4">
                  <div className="flex justify-between items-center border-b border-stone-800 pb-3">
                    <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                      Learning Curve Diagnostic Plot
                    </span>
                    <div className="flex items-center gap-4 text-[11px] font-mono">
                      <span className="flex items-center gap-1.5 text-sky-400">
                        <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block" /> Training Score
                      </span>
                      <span className="flex items-center gap-1.5 text-orange-400">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-400 inline-block" /> Validation Score
                      </span>
                    </div>
                  </div>

                  <div className="relative h-56 bg-stone-950 rounded-xl border border-stone-800 flex items-center justify-center p-4">
                    <svg className="w-full h-full" viewBox="0 0 450 180">
                      {/* Grid lines */}
                      <line x1="40" y1="20" x2="420" y2="20" stroke="#334155" strokeWidth="0.5" />
                      <line x1="40" y1="60" x2="420" y2="60" stroke="#334155" strokeWidth="0.5" />
                      <line x1="40" y1="100" x2="420" y2="100" stroke="#334155" strokeWidth="0.5" />
                      <line x1="40" y1="140" x2="420" y2="140" stroke="#334155" strokeWidth="0.5" />

                      {/* Y-axis labels */}
                      <text x="32" y="24" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">1.0</text>
                      <text x="32" y="64" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">0.8</text>
                      <text x="32" y="104" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">0.6</text>
                      <text x="32" y="144" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">0.4</text>

                      {/* Training line & points */}
                      {learningCurvePoints.map((pt, idx) => {
                        const cx = 50 + idx * 85;
                        const cyTrain = 180 - pt.train * 160;
                        const cyVal = 180 - pt.val * 160;

                        return (
                          <g key={idx}>
                            {/* Connector line to next */}
                            {idx < learningCurvePoints.length - 1 && (
                              <>
                                <line
                                  x1={cx}
                                  y1={cyTrain}
                                  x2={cx + 85}
                                  y2={180 - learningCurvePoints[idx + 1].train * 160}
                                  stroke="#38bdf8"
                                  strokeWidth="2.5"
                                />
                                <line
                                  x1={cx}
                                  y1={cyVal}
                                  x2={cx + 85}
                                  y2={180 - learningCurvePoints[idx + 1].val * 160}
                                  stroke="#fb923c"
                                  strokeWidth="2.5"
                                />
                              </>
                            )}

                            {/* Shading of gap */}
                            <line
                              x1={cx}
                              y1={cyTrain}
                              x2={cx}
                              y2={cyVal}
                              stroke="#64748b"
                              strokeWidth="1"
                              strokeDasharray="2 2"
                            />

                            {/* Train point */}
                            <circle cx={cx} cy={cyTrain} r="4.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
                            {/* Val point */}
                            <circle cx={cx} cy={cyVal} r="4.5" fill="#fb923c" stroke="#ffffff" strokeWidth="1" />

                            {/* X label */}
                            <text x={cx} y="165" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">
                              N={pt.n}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
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
                      <span>MODULE 12 CERTIFICATION EXAM</span>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900">
                      Model Validation &amp; Cross-Validation Knowledge Assessment
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      10 comprehensive multi-choice questions testing your mastery of data leakage prevention, regression and classification metrics, resampling architectures, and hyperparameter tuning.
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
            onClick={() => navigate("/learning/machine-learning/knn-naive-bayes")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 11 &mdash; KNN &amp; Naive Bayes</span>
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
