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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import MachineLearningFeatureEngineeringSections from "./MachineLearningFeatureEngineeringSections";

export default function MachineLearningFeatureEngineering() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("transform_lab"); // 'transform_lab' | 'encoding_lab' | 'selection_lab' | 'quiz'

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 1: TRANSFORMATION & SCALING EXPLORER
  // ---------------------------------------------------------------------------
  const [rawDatasetType, setRawDatasetType] = useState("skewed_income"); // 'skewed_income' | 'outliers' | 'uniform'
  const [activeScaler, setActiveScaler] = useState("raw"); // 'raw' | 'log' | 'standard' | 'minmax' | 'robust'

  // Synthetic 12 values
  const baseRawData = useMemo(() => {
    if (rawDatasetType === "skewed_income") {
      // Heavily right-skewed incomes in thousands: 20k to 500k
      return [20, 25, 28, 32, 35, 42, 50, 65, 80, 110, 180, 520];
    }
    if (rawDatasetType === "outliers") {
      // Moderate values with 2 extreme outliers
      return [45, 48, 50, 52, 53, 55, 56, 58, 60, 62, 195, 240];
    }
    // Uniform
    return [10, 18, 26, 35, 43, 51, 60, 68, 77, 85, 93, 102];
  }, [rawDatasetType]);

  const transformedStats = useMemo(() => {
    let vals = [...baseRawData];

    if (activeScaler === "log") {
      vals = vals.map((x) => Math.log1p(x));
    } else if (activeScaler === "standard") {
      const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
      const variance = vals.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / vals.length;
      const std = Math.sqrt(variance) || 1;
      vals = vals.map((x) => (x - mean) / std);
    } else if (activeScaler === "minmax") {
      const min = Math.min(...vals);
      const max = Math.max(...vals);
      const range = max - min || 1;
      vals = vals.map((x) => (x - min) / range);
    } else if (activeScaler === "robust") {
      const sorted = [...vals].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
      const q1 = sorted[Math.floor(sorted.length * 0.25)];
      const q3 = sorted[Math.floor(sorted.length * 0.75)];
      const iqr = q3 - q1 || 1;
      vals = vals.map((x) => (x - median) / iqr);
    }

    const n = vals.length;
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const mean = vals.reduce((a, b) => a + b, 0) / n;
    const sortedVals = [...vals].sort((a, b) => a - b);
    const mid = Math.floor(n / 2);
    const median = n % 2 !== 0 ? sortedVals[mid] : (sortedVals[mid - 1] + sortedVals[mid]) / 2;
    const variance = vals.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / n;
    const std = Math.sqrt(variance);

    return {
      transformedValues: vals.map((v) => Math.round(v * 100) / 100),
      min: min.toFixed(2),
      max: max.toFixed(2),
      mean: mean.toFixed(2),
      median: median.toFixed(2),
      std: std.toFixed(2),
    };
  }, [baseRawData, activeScaler]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 2: CATEGORICAL ENCODING & TARGET LEAKAGE LAB
  // ---------------------------------------------------------------------------
  const [encodingMethod, setEncodingMethod] = useState("target"); // 'onehot' | 'ordinal' | 'target'
  const [smoothingM, setSmoothingM] = useState(10); // Smoothing strength m
  const globalTargetMean = 0.35; // Global churn rate: 35%

  const categorySamples = useMemo(() => [
    { city: "Mumbai", count: 120, positiveCount: 48, rawRate: 0.40 },
    { city: "Delhi", count: 95, positiveCount: 28, rawRate: 0.29 },
    { city: "Bengaluru", count: 80, positiveCount: 40, rawRate: 0.50 },
    { city: "Pune", count: 45, positiveCount: 9, rawRate: 0.20 },
    { city: "Nagpur (Rare)", count: 2, positiveCount: 2, rawRate: 1.00 }, // Rare category
  ], []);

  const encodedResults = useMemo(() => {
    return categorySamples.map((cat, idx) => {
      // One-hot dummy representation
      const oneHotVector = [0, 0, 0, 0];
      if (idx > 0 && idx <= 4) oneHotVector[idx - 1] = 1; // drop first (Mumbai)

      // Ordinal integer
      const ordinalVal = idx + 1;

      // Smoothed target encoding formula: TE = (n * y_bar + m * y_global) / (n + m)
      const smoothedVal =
        (cat.count * cat.rawRate + smoothingM * globalTargetMean) / (cat.count + smoothingM);

      return {
        ...cat,
        oneHot: idx === 0 ? "Base (All 0s)" : `[${oneHotVector.join(", ")}]`,
        ordinal: ordinalVal,
        rawTargetEncoding: cat.rawRate.toFixed(2),
        smoothedTargetEncoding: smoothedVal.toFixed(3),
      };
    });
  }, [categorySamples, smoothingM]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 3: FEATURE SELECTION & RFE SIMULATOR
  // ---------------------------------------------------------------------------
  const [selectionStrategy, setSelectionStrategy] = useState("rfe"); // 'filter_anova' | 'rfe' | 'lasso'
  const [kFeaturesToKeep, setKFeaturesToKeep] = useState(4); // 2 to 7

  const candidateFeatures = useMemo(() => [
    { name: "MonthlyCharges", anovaF: 84.2, rfeRank: 1, lassoCoef: 0.48, isNoise: false },
    { name: "ContractType", anovaF: 78.5, rfeRank: 2, lassoCoef: 0.42, isNoise: false },
    { name: "TenureMonths", anovaF: 65.1, rfeRank: 3, lassoCoef: -0.38, isNoise: false },
    { name: "CustomerAge", anovaF: 42.0, rfeRank: 4, lassoCoef: 0.22, isNoise: false },
    { name: "SupportTickets", anovaF: 38.4, rfeRank: 5, lassoCoef: 0.19, isNoise: false },
    { name: "OnlineSecurity", anovaF: 29.1, rfeRank: 6, lassoCoef: -0.14, isNoise: false },
    { name: "PaymentMethod", anovaF: 18.3, rfeRank: 7, lassoCoef: 0.08, isNoise: false },
    { name: "RandomNoise_1", anovaF: 3.2, rfeRank: 8, lassoCoef: 0.00, isNoise: true },
    { name: "RandomNoise_2", anovaF: 1.8, rfeRank: 9, lassoCoef: 0.00, isNoise: true },
    { name: "ConstantColumn", anovaF: 0.0, rfeRank: 10, lassoCoef: 0.00, isNoise: true },
  ], []);

  const featureSelectionResults = useMemo(() => {
    let sorted = [...candidateFeatures];

    if (selectionStrategy === "filter_anova") {
      sorted.sort((a, b) => b.anovaF - a.anovaF);
    } else if (selectionStrategy === "rfe") {
      sorted.sort((a, b) => a.rfeRank - b.rfeRank);
    } else if (selectionStrategy === "lasso") {
      sorted.sort((a, b) => Math.abs(b.lassoCoef) - Math.abs(a.lassoCoef));
    }

    const selected = sorted.slice(0, kFeaturesToKeep);
    const dropped = sorted.slice(kFeaturesToKeep);

    // Simulated 5-fold CV accuracy curve based on K
    const accuracyMap = {
      2: 0.74,
      3: 0.79,
      4: 0.84,
      5: 0.86,
      6: 0.87,
      7: 0.87,
      8: 0.86, // drops slightly due to noise inclusion
      9: 0.85,
      10: 0.83,
    };

    return {
      selected,
      dropped,
      estimatedAccuracy: Math.round((accuracyMap[kFeaturesToKeep] || 0.85) * 100),
    };
  }, [candidateFeatures, selectionStrategy, kFeaturesToKeep]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 4: ASSESSMENT EXAM (10 QUESTIONS)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "What is the key functional distinction between Data Preprocessing and Feature Engineering?",
      options: [
        "Feature engineering converts data to integers, while preprocessing converts data to floats",
        "Data preprocessing focuses on data cleaning, scaling, and formatting for algorithmic compatibility; feature engineering creates new, domain-informative representations to boost predictive power",
        "Data preprocessing is only applied to neural networks, while feature engineering is strictly for linear regression",
        "There is no difference; the terms are entirely synonymous in machine learning",
      ],
      correct: 1,
      explanation: "Data preprocessing addresses data hygiene (imputation, scaling, categorical encoding) so algorithms can ingest the data. Feature engineering leverages domain knowledge to construct novel variables (ratios, date parts, interactions) that better expose the underlying pattern to the model.",
    },
    {
      id: 2,
      question: "Why is np.log1p(x) preferred over np.log(x) when applying a logarithmic transformation to right-skewed positive features?",
      options: [
        "np.log1p(x) automatically normalizes features to zero mean and unit variance",
        "np.log1p(x) computes log(1 + x), which safely handles zero-valued observations without causing undefined negative infinity (-inf) errors",
        "np.log1p(x) converts continuous variables into discrete ordinal integers",
        "np.log1p(x) eliminates the need for cross-validation",
      ],
      correct: 1,
      explanation: "Because log(0) is undefined (-infinity), raw log fails on datasets with zero counts or zero incomes. np.log1p(x) calculates log(1 + x), yielding log(1) = 0 for zeros while retaining numerical stability for small positive values.",
    },
    {
      id: 3,
      question: "What is the 'Dummy Variable Trap' in One-Hot Encoding, and how is it addressed in unregularized linear models?",
      options: [
        "It refers to high memory usage; solved by deleting all categorical columns",
        "It is perfect multicollinearity caused by the sum of all k binary dummy columns equaling 1 (the intercept); solved by dropping one category (drop='first')",
        "It happens when categories contain spelling mistakes; solved by fuzzy string matching",
        "It forces tree-based models to overfit; solved by increasing tree depth",
      ],
      correct: 1,
      explanation: "When all k indicator columns are included alongside an intercept term in ordinary least squares (OLS), the columns sum to 1, causing the feature matrix to have linearly dependent columns (singular matrix). Dropping one reference category removes this collinearity.",
    },
    {
      id: 4,
      question: "How does smoothing in Target Encoding prevent catastrophic data leakage and overfitting for rare categories?",
      options: [
        "It drops categories with fewer than 100 observations from the training dataset",
        "It blends the category's local target mean with the global target mean using a weight parameter m, pulling small-sample categories toward the dataset prior",
        "It converts continuous targets into binary 0/1 categories",
        "It applies min-max scaling to the predicted class probabilities",
      ],
      correct: 1,
      explanation: "Smoothed Target Encoding computes TE = (n * y_cat + m * y_global) / (n + m). For categories with tiny sample sizes (e.g. n=1), this pulls the encoding close to the overall global mean (y_global) rather than assigning the single observation's exact target value.",
    },
    {
      id: 5,
      question: "Why does RobustScaler provide superior scaling behavior compared to StandardScaler when datasets contain extreme outliers?",
      options: [
        "RobustScaler clips all feature values between -1 and +1",
        "RobustScaler uses the median and Interquartile Range (IQR = Q3 - Q1), which are non-parametric order statistics resistant to extreme levering by outliers",
        "RobustScaler converts all skewed distributions into exact Gaussian distributions",
        "RobustScaler eliminates missing values automatically",
      ],
      correct: 1,
      explanation: "StandardScaler depends on the sample mean (μ) and standard deviation (σ), both of which are severely distorted by extreme outliers. RobustScaler centers by the median and scales by the IQR, preserving the integrity of the bulk distribution.",
    },
    {
      id: 6,
      question: "What is the critical architectural distinction between MinMaxScaler and Normalizer in Scikit-learn?",
      options: [
        "MinMaxScaler scales columns across samples using training min/max; Normalizer rescales individual rows (samples) independently to unit vector norm (e.g. L2)",
        "MinMaxScaler is for text; Normalizer is for tabular data",
        "MinMaxScaler operates on test sets only; Normalizer operates on training sets only",
        "Normalizer guarantees all output values are strictly positive integers",
      ],
      correct: 0,
      explanation: "MinMaxScaler is a column-wise transformer that computes min and max across all training rows to map features into [0, 1]. Normalizer is row-wise: it rescales each observation vector to have unit norm (e.g., Euclidean length = 1) without learning column-wise parameters.",
    },
    {
      id: 7,
      question: "When imputing missing numerical values, why should SimpleImputer(add_indicator=True) frequently be employed?",
      options: [
        "Because it halves the memory consumption of the DataFrame",
        "Because missingness itself is often informative (e.g., missing income indicates high net worth or privacy sensitivity), allowing the model to leverage this signal",
        "Because Scikit-learn models crash if an indicator column is not present",
        "Because it automatically proves the missing data mechanism is MCAR",
      ],
      correct: 1,
      explanation: "When data is Missing at Random (MAR) or Missing Not at Random (MNAR), the fact that a field was omitted conveys predictive information. Missingness indicator columns preserve this signal for downstream estimators.",
    },
    {
      id: 8,
      question: "Why are cyclical features (such as hour of day 0..23 or month 1..12) transformed into paired sine and cosine coordinates?",
      options: [
        "To satisfy the linear regression assumption of homoscedasticity",
        "To preserve geometric proximity so that hour 23:00 and 00:00 (or December and January) are adjacent in Euclidean space rather than maximally distant",
        "To convert discrete integers into categorical strings",
        "To reduce feature dimensionality from 2 features to 1 feature",
      ],
      correct: 1,
      explanation: "On a linear scale, December (12) and January (1) are 11 units apart. Encoding circular time via sin(2πt/T) and cos(2πt/T) maps time points onto a unit circle, ensuring that 23:00 is smoothly continuous with 00:00.",
    },
    {
      id: 9,
      question: "How do Filter, Wrapper, and Embedded feature selection methods compare in mechanism and computational cost?",
      options: [
        "Filter methods train neural networks; Wrapper methods use decision trees; Embedded methods use logistic regression",
        "Filter methods use univariate statistical tests (fast, model-free); Wrapper methods evaluate feature subsets by iteratively training a model (slow, captures interactions); Embedded methods select features during model training (e.g., L1 Lasso, tree importance)",
        "Filter methods are the slowest because they evaluate every possible 2^p subset",
        "Wrapper methods are model-agnostic and do not require fitting any algorithms",
      ],
      correct: 1,
      explanation: "Filter methods (ANOVA, mutual information) evaluate features independently of models; Wrapper methods (RFE, forward selection) wrap an estimator to test combinations; Embedded methods (L1 penalty, Gini importance) integrate selection directly into objective optimization.",
    },
    {
      id: 10,
      question: "Why is it mandatory to encapsulate ColumnTransformer and estimators inside a Scikit-learn Pipeline when evaluating with Cross-Validation?",
      options: [
        "Because Python throws a syntax error if fit() is called on a ColumnTransformer",
        "To prevent data leakage by ensuring that all scalers, encoders, imputers, and selectors are fitted strictly on each training fold and only transformed on the validation fold",
        "To enforce that all features are transformed into NumPy arrays with float32 precision",
        "To allow linear models to run on GPU hardware",
      ],
      correct: 1,
      explanation: "If transformations are fit on the full dataset before cross-validation, validation statistics (mean, variance, target distribution) leak into training. A Pipeline ensures that transformers are fitted purely within training splits during each CV iteration.",
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
      <ModuleNav track="machine-learning" currentModuleId="feature-engineering" />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Card */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 via-amber-100/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200">
                <Sliders size={13} className="text-orange-600" />
                <span>MODULE 13: DATA PREPARATION &bull; FEATURE ENGINEERING &bull; FEATURE SELECTION</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
                Feature Engineering &amp; Data Preprocessing
              </h1>
              <p className="text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
                Master distribution transformations (Log, Sqrt, Yeo-Johnson), categorical encodings (One-Hot, Ordinal, Smoothed Target Encoding), feature scaling (Standard, MinMax, Robust), missing data imputation, outlier Winsorization, cyclical date encoding, feature selection (Filter, RFE, L1 Lasso), and leak-free ColumnTransformer pipelines.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
              <div className="px-3.5 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 text-xs font-mono font-medium flex items-center gap-2">
                <Layers size={14} className="text-orange-600" />
                <span>27 Core Topics</span>
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
              Machine Learning Track &bull; Data Preparation Core
            </div>
          </div>
        </div>

        {/* View Mode 1: Curriculum Content */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            <MachineLearningFeatureEngineeringSections />
          </div>
        )}

        {/* View Mode 2: Interactive Workbenches */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Sub-Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("transform_lab")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeWorkbenchTab === "transform_lab"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                <TrendingUp size={15} />
                <span>1. Scaling &amp; Distribution Lab</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("encoding_lab")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeWorkbenchTab === "encoding_lab"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                <Binary size={15} />
                <span>2. Categorical Encodings &amp; Smoothing</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("selection_lab")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeWorkbenchTab === "selection_lab"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                <Filter size={15} />
                <span>3. Feature Selection &amp; RFE</span>
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

            {/* LAB 1: SCALING & DISTRIBUTION EXPLORER */}
            {activeWorkbenchTab === "transform_lab" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <TrendingUp size={13} />
                    <span>LAB 1: NUMERICAL SCALING &amp; DISTRIBUTION LAB</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Standard vs MinMax vs RobustScaler vs Log Transformation
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Compare how various numerical scalers and mathematical transformations compress right-skewed distributions and manage extreme outlier leverage.
                  </p>
                </div>

                {/* Controls */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-stone-700 block">Input Distribution:</span>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setRawDatasetType("skewed_income")}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          rawDatasetType === "skewed_income"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Right-Skewed
                      </button>
                      <button
                        onClick={() => setRawDatasetType("outliers")}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          rawDatasetType === "outliers"
                            ? "bg-rose-600 text-white border-rose-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Heavy Outliers
                      </button>
                      <button
                        onClick={() => setRawDatasetType("uniform")}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          rawDatasetType === "uniform"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Uniform Range
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-stone-700 block">Transformation Method:</span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      <button
                        onClick={() => setActiveScaler("raw")}
                        className={`py-2 px-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          activeScaler === "raw"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Raw (Unscaled)
                      </button>
                      <button
                        onClick={() => setActiveScaler("log")}
                        className={`py-2 px-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          activeScaler === "log"
                            ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Log (log1p)
                      </button>
                      <button
                        onClick={() => setActiveScaler("standard")}
                        className={`py-2 px-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          activeScaler === "standard"
                            ? "bg-sky-600 text-white border-sky-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        StandardScaler
                      </button>
                      <button
                        onClick={() => setActiveScaler("minmax")}
                        className={`py-2 px-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          activeScaler === "minmax"
                            ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        MinMaxScaler
                      </button>
                      <button
                        onClick={() => setActiveScaler("robust")}
                        className={`py-2 px-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          activeScaler === "robust"
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        RobustScaler
                      </button>
                    </div>
                  </div>
                </div>

                {/* Summary Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <span className="text-[11px] font-mono font-bold text-stone-500 block">Min Value</span>
                    <span className="text-xl font-black text-stone-900">{transformedStats.min}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <span className="text-[11px] font-mono font-bold text-stone-500 block">Max Value</span>
                    <span className="text-xl font-black text-stone-900">{transformedStats.max}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 space-y-1">
                    <span className="text-[11px] font-mono font-bold text-orange-700 block">Mean (&mu;)</span>
                    <span className="text-xl font-black text-orange-700">{transformedStats.mean}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                    <span className="text-[11px] font-mono font-bold text-emerald-700 block">Median</span>
                    <span className="text-xl font-black text-emerald-700">{transformedStats.median}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-1">
                    <span className="text-[11px] font-mono font-bold text-sky-700 block">Std Dev (&sigma;)</span>
                    <span className="text-xl font-black text-sky-700">{transformedStats.std}</span>
                  </div>
                </div>

                {/* Visual Bar Distribution Chart */}
                <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-4">
                  <div className="flex justify-between items-center border-b border-stone-800 pb-3">
                    <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                      Transformed Observations Spectrum (N=12)
                    </span>
                    <span className="text-[11px] font-mono text-stone-400">
                      Method: <strong className="text-white uppercase">{activeScaler}</strong>
                    </span>
                  </div>

                  <div className="relative h-44 bg-stone-950 rounded-xl border border-stone-800 flex items-end justify-between px-6 pb-6 pt-4 gap-2">
                    {transformedStats.transformedValues.map((val, idx) => {
                      // Scale height between 10% and 90%
                      const minNum = parseFloat(transformedStats.min);
                      const maxNum = parseFloat(transformedStats.max);
                      const range = maxNum - minNum || 1;
                      const pctHeight = Math.max(12, Math.min(95, ((val - minNum) / range) * 85 + 10));

                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                          <span className="text-[9px] font-mono text-stone-400 group-hover:text-white transition-colors">
                            {val}
                          </span>
                          <div
                            className="w-full rounded-t transition-all bg-gradient-to-t from-orange-600 to-amber-500 group-hover:from-orange-500 group-hover:to-amber-400"
                            style={{ height: `${pctHeight}%` }}
                          />
                          <span className="text-[8px] font-mono text-stone-500">#{idx + 1}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-[11px] text-stone-400 font-sans leading-relaxed">
                    {activeScaler === "robust" && (
                      <span className="text-emerald-400">
                        <strong>RobustScaler Note:</strong> Median is centered near 0.00 while the Interquartile Range (IQR) normalizes the bulk 50% of points, preventing massive values from shrinking normal observations into a flat line.
                      </span>
                    )}
                    {activeScaler === "standard" && rawDatasetType === "outliers" && (
                      <span className="text-rose-400">
                        <strong>StandardScaler Distortion:</strong> Notice how the extreme outliers inflated the mean and standard deviation, pulling regular points into negative z-scores.
                      </span>
                    )}
                    {activeScaler === "log" && (
                      <span className="text-amber-400">
                        <strong>Log Transformation:</strong> Logarithm non-linearly compressed large values while gently expanding smaller values, turning right-skew into an approximate normal distribution.
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: CATEGORICAL ENCODING & SMOOTHING */}
            {activeWorkbenchTab === "encoding_lab" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <Binary size={13} />
                    <span>LAB 2: CATEGORICAL ENCODING &amp; TARGET LEAKAGE LAB</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    One-Hot vs Ordinal vs Smoothed Target Encoding
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Examine how rare categories (such as Nagpur with sample count <em>N=2</em>) cause severe target leakage when raw target means are used, and slide smoothing weight <em>m</em> to observe empirical Bayesian shrinkage.
                  </p>
                </div>

                {/* Controls */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-stone-700 block">Encoding Strategy:</span>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setEncodingMethod("onehot")}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          encodingMethod === "onehot"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        One-Hot (drop='first')
                      </button>
                      <button
                        onClick={() => setEncodingMethod("ordinal")}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          encodingMethod === "ordinal"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Ordinal
                      </button>
                      <button
                        onClick={() => setEncodingMethod("target")}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          encodingMethod === "target"
                            ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Smoothed Target
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono font-bold text-stone-700">
                      <span>Target Smoothing Weight (m):</span>
                      <span className="text-base text-orange-600 font-black">{smoothingM}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      step="1"
                      value={smoothingM}
                      onChange={(e) => setSmoothingM(parseInt(e.target.value, 10))}
                      className="w-full accent-orange-600 cursor-pointer"
                      disabled={encodingMethod !== "target"}
                    />
                    <div className="flex justify-between text-[11px] text-stone-400 font-mono">
                      <span>m=0 (Raw Target / Overfitting)</span>
                      <span>m=10 (Standard)</span>
                      <span>m=50 (High Shrinkage to Prior)</span>
                    </div>
                  </div>
                </div>

                {/* Table of Encodings */}
                <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50 text-stone-800 font-mono">
                        <th className="p-3">Category (City)</th>
                        <th className="p-3">Sample Count (n)</th>
                        <th className="p-3">Observed Churn Rate</th>
                        <th className="p-3">
                          {encodingMethod === "onehot" && "One-Hot Encoded Vector"}
                          {encodingMethod === "ordinal" && "Ordinal Coded Integer"}
                          {encodingMethod === "target" && `Smoothed Target Encoding (m=${smoothingM})`}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 font-sans text-stone-700">
                      {encodedResults.map((r, idx) => (
                        <tr key={idx} className={r.count < 5 ? "bg-amber-50/50" : ""}>
                          <td className="p-3 font-semibold text-stone-900 font-mono flex items-center gap-2">
                            <span>{r.city}</span>
                            {r.count < 5 && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold">
                                Tiny Sample
                              </span>
                            )}
                          </td>
                          <td className="p-3 font-mono">{r.count}</td>
                          <td className="p-3 font-mono">{(r.rawRate * 100).toFixed(0)}%</td>
                          <td className="p-3 font-mono font-bold text-orange-700">
                            {encodingMethod === "onehot" && r.oneHot}
                            {encodingMethod === "ordinal" && r.ordinal}
                            {encodingMethod === "target" && (
                              <div className="flex items-center gap-3">
                                <span>{r.smoothedTargetEncoding}</span>
                                {smoothingM === 0 && r.count < 5 && (
                                  <span className="text-[10px] font-sans text-rose-600 font-normal">
                                    (Leakage risk: 100% churn assigned directly!)
                                  </span>
                                )}
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600 leading-relaxed">
                  <strong>Global Target Prior Mean:</strong> 35.0% (0.35). Notice how increasing <em>m</em> pulls Nagpur's encoding down from 1.000 toward the population average (0.35), eliminating the catastrophic overfitting of small subgroups.
                </div>
              </div>
            )}

            {/* LAB 3: FEATURE SELECTION & RFE */}
            {activeWorkbenchTab === "selection_lab" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <Filter size={13} />
                    <span>LAB 3: FEATURE SELECTION &amp; RFE SIMULATOR</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Filter (ANOVA) vs Wrapper (RFE) vs Embedded (L1 Lasso)
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Compare how statistical filters, recursive feature elimination, and L1 sparse penalties rank 10 candidate features, filter out synthetic random noise, and optimize cross-validation accuracy.
                  </p>
                </div>

                {/* Selection Controls */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-stone-700 block">Selection Algorithm:</span>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setSelectionStrategy("rfe")}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          selectionStrategy === "rfe"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Wrapper: RFE
                      </button>
                      <button
                        onClick={() => setSelectionStrategy("filter_anova")}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          selectionStrategy === "filter_anova"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Filter: ANOVA F
                      </button>
                      <button
                        onClick={() => setSelectionStrategy("lasso")}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          selectionStrategy === "lasso"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Embedded: L1
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono font-bold text-stone-700">
                      <span>Features to Retain (K):</span>
                      <span className="text-base text-orange-600 font-black">{kFeaturesToKeep} / 10</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="8"
                      step="1"
                      value={kFeaturesToKeep}
                      onChange={(e) => setKFeaturesToKeep(parseInt(e.target.value, 10))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-stone-400 font-mono">
                      <span>K=2 (Sparse)</span>
                      <span>K=5 (Optimal Plateau)</span>
                      <span>K=8 (Admitting Noise)</span>
                    </div>
                  </div>
                </div>

                {/* Score & Selection Outcome */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Selected Features Pillbox */}
                  <div className="md:col-span-8 p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                    <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                      <span className="text-xs font-mono font-bold text-stone-700 uppercase">
                        Feature Ranking &amp; Retention Status
                      </span>
                      <span className="text-xs font-mono text-stone-500">
                        {featureSelectionResults.selected.length} Selected &bull; {featureSelectionResults.dropped.length} Pruned
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {featureSelectionResults.selected.map((feat, idx) => (
                        <div
                          key={feat.name}
                          className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] font-mono font-bold flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <span className="font-bold text-emerald-900 font-mono">{feat.name}</span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-700">
                            {selectionStrategy === "rfe" && `Rank #${feat.rfeRank}`}
                            {selectionStrategy === "filter_anova" && `F=${feat.anovaF}`}
                            {selectionStrategy === "lasso" && `&beta;=${feat.lassoCoef}`}
                          </span>
                        </div>
                      ))}

                      {featureSelectionResults.dropped.map((feat) => (
                        <div
                          key={feat.name}
                          className="p-3 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-between text-xs opacity-60 line-through"
                        >
                          <span className="font-mono text-stone-600">{feat.name}</span>
                          <span className="text-[10px] font-mono text-stone-400">Pruned</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Model Accuracy Gauge */}
                  <div className="md:col-span-4 p-5 rounded-2xl bg-stone-900 text-white flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider block">
                        Estimated 5-Fold CV Accuracy
                      </span>
                      <div className="text-4xl font-black text-white mt-2">
                        {featureSelectionResults.estimatedAccuracy}%
                      </div>
                      <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                        Notice how keeping 5 to 6 signal features maximizes validation performance without incorporating the random noise variables that cause overfitting.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-stone-800 text-[11px] font-mono text-stone-300">
                      Noise Columns: RandomNoise_1, RandomNoise_2, ConstantColumn
                    </div>
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
                      <span>MODULE 13 CERTIFICATION EXAM</span>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900">
                      Feature Engineering &amp; Preprocessing Assessment
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      10 comprehensive multi-choice questions testing your understanding of numerical transforms, categorical encodings, scaling resilience, imputation mechanisms, and leakage-safe pipelines.
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
            onClick={() => navigate("/learning/machine-learning/model-evaluation")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 12 &mdash; Model Evaluation &amp; Cross-Validation</span>
          </button>

          <button
            onClick={() => navigate("/learning/machine-learning/ml-pipelines")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs transition-colors"
          >
            <span>Next: Module 14 &mdash; ML Pipelines &amp; Automation</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
