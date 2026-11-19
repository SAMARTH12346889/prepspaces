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
  BarChart2,
  TrendingUp,
  PieChart,
  Activity,
  Sliders,
  Filter,
  Eye,
  FileCode,
  Table,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import MachineLearningEdaSections from "./MachineLearningEdaSections";

export default function MachineLearningEda() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("distributions"); // 'distributions' | 'correlation' | 'outliers' | 'quiz'
  const [copiedCode, setCopiedCode] = useState(false);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 1: DISTRIBUTION & SKEWNESS SIMULATOR
  // ---------------------------------------------------------------------------
  const [distType, setDistType] = useState("positive"); // 'normal' | 'positive' | 'negative' | 'log'

  const distStats = useMemo(() => {
    if (distType === "normal") {
      return {
        name: "Symmetric / Normal Distribution",
        mean: "₹65.0 L",
        median: "₹65.0 L",
        mode: "₹65.0 L",
        skew: "0.02 (Symmetric)",
        bins: [10, 25, 45, 70, 95, 70, 45, 25, 10],
        desc: "Mean ≈ Median ≈ Mode. Bell-shaped curve with empirical 68-95-99.7% density concentration.",
      };
    } else if (distType === "positive") {
      return {
        name: "Positive (Right-Skewed) Distribution",
        mean: "₹82.5 L",
        median: "₹58.0 L",
        mode: "₹45.0 L",
        skew: "+1.65 (High Right Skew)",
        bins: [90, 85, 60, 35, 20, 12, 6, 3, 1],
        desc: "Mean > Median. Long right tail pulled upward by luxury real-estate outliers. Candidate for np.log1p.",
      };
    } else if (distType === "negative") {
      return {
        name: "Negative (Left-Skewed) Distribution",
        mean: "₹52.0 L",
        median: "₹72.0 L",
        mode: "₹85.0 L",
        skew: "-1.42 (High Left Skew)",
        bins: [2, 5, 10, 18, 30, 55, 75, 90, 80],
        desc: "Mean < Median. Long left tail pulled downward by severe budget or distressed sales.",
      };
    } else {
      // log-transformed
      return {
        name: "Log-Transformed (np.log1p)",
        mean: "15.82",
        median: "15.80",
        mode: "15.75",
        skew: "+0.11 (Normalized)",
        bins: [15, 35, 65, 90, 85, 60, 30, 15, 5],
        desc: "np.log1p compresses the right tail, stabilizing variance and transforming skewed targets into Gaussian form.",
      };
    }
  }, [distType]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 2: CORRELATION MATRIX & MULTICOLLINEARITY
  // ---------------------------------------------------------------------------
  const [selectedCorrPair, setSelectedCorrPair] = useState("Area_Price");

  const corrData = {
    features: ["Area", "Bedrooms", "Age", "Distance", "Price"],
    matrix: [
      [1.00, 0.78, -0.15, -0.42, 0.84],
      [0.78, 1.00, -0.12, -0.35, 0.72],
      [-0.15, -0.12, 1.00, 0.08, -0.32],
      [-0.42, -0.35, 0.08, 1.00, -0.55],
      [0.84, 0.72, -0.32, -0.55, 1.00],
    ],
  };

  const getHeatmapColor = (val) => {
    if (val === 1.0) return "bg-orange-600 text-white font-bold";
    if (val > 0.7) return "bg-orange-500 text-white font-bold";
    if (val > 0.4) return "bg-orange-200 text-orange-950 font-semibold";
    if (val > 0) return "bg-stone-100 text-stone-700";
    if (val > -0.3) return "bg-blue-50 text-blue-900";
    if (val > -0.6) return "bg-blue-200 text-blue-950 font-semibold";
    return "bg-blue-600 text-white font-bold";
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 3: DUAL OUTLIER DETECTOR (IQR VS Z-SCORE)
  // ---------------------------------------------------------------------------
  const [outlierMethod, setOutlierMethod] = useState("iqr"); // 'iqr' | 'zscore'

  const sampleProperties = [
    { id: "P1", area: 850, price: 3800000, z: -0.92 },
    { id: "P2", area: 1200, price: 5400000, z: -0.48 },
    { id: "P3", area: 1450, price: 6800000, z: -0.10 },
    { id: "P4", area: 1800, price: 8200000, z: +0.28 },
    { id: "P5", area: 2100, price: 9500000, z: +0.64 },
    { id: "P6", area: 2400, price: 11000000, z: +1.05 },
    { id: "P7", area: 2800, price: 13500000, z: +1.73 },
    { id: "P8", area: 3600, price: 98000000, z: +4.85 }, // Luxury Outlier
  ];

  // IQR stats
  const iqrQ1 = 5400000;
  const iqrQ3 = 11000000;
  const iqrVal = iqrQ3 - iqrQ1; // 5,600,000
  const iqrLower = Math.max(0, iqrQ1 - 1.5 * iqrVal); // 0
  const iqrUpper = iqrQ3 + 1.5 * iqrVal; // 19,400,000

  // ---------------------------------------------------------------------------
  // KNOWLEDGE ASSESSMENT QUIZ (10 QUESTIONS)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "1. What is the primary purpose of Exploratory Data Analysis (EDA)?",
      options: [
        "Train a deep neural network immediately",
        "Understand distributions, patterns, and relationships in data",
        "Deploy a machine learning model to production",
        "Automatically remove all outliers from the dataset",
      ],
      correct: 1,
      explanation:
        "EDA investigates dataset structure, distributions, anomalies, correlations, and relationships to validate assumptions before machine learning.",
    },
    {
      id: 2,
      question: "2. Which chart is most appropriate for examining the distribution of a continuous numerical variable?",
      options: ["Pie chart", "Histogram", "Heatmap", "Line chart"],
      correct: 1,
      explanation:
        "A histogram bins continuous values into discrete intervals, showing the frequency distribution and shape.",
    },
    {
      id: 3,
      question: "3. Which analysis investigates one variable at a time?",
      options: ["Bivariate analysis", "Multivariate analysis", "Univariate analysis", "Correlation analysis"],
      correct: 2,
      explanation:
        "Univariate analysis (Uni = one, variate = variable) studies individual features in isolation.",
    },
    {
      id: 4,
      question: "4. What does positive skewness usually indicate?",
      options: [
        "A longer left tail",
        "A longer right tail with Mean > Median",
        "A perfectly symmetric distribution",
        "Zero variance in the dataset",
      ],
      correct: 1,
      explanation:
        "Positive (right) skewness features an elongated right tail where a few extreme large observations pull the mean above the median.",
    },
    {
      id: 5,
      question: "5. Which plot is commonly used to investigate relationships between two numerical variables?",
      options: ["Scatter plot", "Pie chart", "Count plot", "Stacked bar chart"],
      correct: 0,
      explanation:
        "A scatter plot plots individual observations on Cartesian (X, Y) coordinates, exposing linear, non-linear, or clustered associations.",
    },
    {
      id: 6,
      question: "6. What is the mathematical range of Pearson's correlation coefficient (r)?",
      options: ["0 to 100", "-10 to +10", "-1.0 to +1.0", "0 to infinity"],
      correct: 2,
      explanation:
        "Pearson's r strictly ranges from -1.0 (perfect negative linear correlation) to +1.0 (perfect positive linear correlation).",
    },
    {
      id: 7,
      question: "7. Which correlation method is rank-based and suitable for investigating monotonic non-linear relationships?",
      options: ["Pearson", "Spearman", "Covariance only", "Min-Max"],
      correct: 1,
      explanation:
        "Spearman rank correlation evaluates monotonic relationships using ranks, making it robust against non-linear scaling and outliers.",
    },
    {
      id: 8,
      question: "8. What does a heatmap commonly represent in feature analysis?",
      options: [
        "Only the dataset size",
        "A 2D color-coded matrix of numerical values such as pairwise correlations",
        "Only missing-value records",
        "The model's training duration",
      ],
      correct: 1,
      explanation:
        "Heatmaps display correlation matrices and cross-tabulations using color intensity to instantly identify strong relationships and multicollinearity.",
    },
    {
      id: 9,
      question: "9. What is the standard upper outlier boundary under the IQR method?",
      options: ["Q3 + 1.5 × IQR", "Q1 - 1.5 × IQR", "Mean + 1 standard deviation", "Median × 2"],
      correct: 0,
      explanation:
        "Tukey's standard upper fence is Q3 + 1.5 * IQR. Values above this threshold are flagged as potential outliers.",
    },
    {
      id: 10,
      question: "10. Why should correlation not automatically be interpreted as causation?",
      options: [
        "Correlation always equals zero in practice",
        "A third confounding variable or alternative mechanism may explain the association",
        "Correlation only works with text strings",
        "It always indicates a measurement error",
      ],
      correct: 1,
      explanation:
        "Correlation proves association, not causality. Confounding variables, reverse causality, or coincidence can produce high correlation without direct cause.",
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

  const handleCopyCode = () => {
    const code = `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# 1. Canvas Theme Configuration
sns.set_theme(style="whitegrid", palette="muted")

# 2. Synthetic Real-Estate Generation (500 Records)
rng = np.random.default_rng(42)
n = 500
area = rng.normal(1450, 450, n).clip(450, 3500).round()
bedrooms = np.clip(np.round(area / 550 + rng.normal(0, 0.6, n)), 1, 6).astype(int)
age = rng.integers(0, 41, n).astype(float)
locations = rng.choice(["Mumbai", "Pune", "Nagpur", "Nashik"], size=n, p=[0.35, 0.30, 0.20, 0.15])
premium = np.array([{"Mumbai": 2500000, "Pune": 1200000, "Nagpur": 300000, "Nashik": 0}[c] for c in locations])
price = 1200000 + area * 6500 + bedrooms * 350000 + premium - age * 25000 + rng.normal(0, 2000000, n)
df = pd.DataFrame({"Area": area, "Bedrooms": bedrooms, "Age": age, "Location": locations, "Price": price.clip(800000)})

# Deliberate luxury outliers for diagnostic testing
df.loc[[17, 203], "Price"] += 90000000

# 3. Comprehensive 2x2 Subplot Dashboard
fig, axes = plt.subplots(2, 2, figsize=(14, 9), dpi=300)

# (0, 0) Univariate: Price Distribution & KDE
sns.histplot(df["Price"], kde=True, ax=axes[0, 0], color="#ea580c")
axes[0, 0].set_title("House Price Distribution (Skewed)")

# (0, 1) Bivariate: Area vs Price Scatter with Regression
sns.regplot(data=df, x="Area", y="Price", ax=axes[0, 1], scatter_kws={"alpha": 0.5}, line_kws={"color": "red"})
axes[0, 1].set_title("Area vs Price (Linear Fit)")

# (1, 0) Categorical vs Numerical: Location Price Spread
sns.boxplot(data=df, x="Location", y="Price", ax=axes[1, 0], palette="Set2")
axes[1, 0].set_title("Price Distribution Across Locations")

# (1, 1) Multivariate: Correlation Matrix Heatmap
corr = df.corr(numeric_only=True)
sns.heatmap(corr, annot=True, cmap="coolwarm", center=0, fmt=".2f", ax=axes[1, 1])
axes[1, 1].set_title("Feature Correlation Matrix")

plt.tight_layout()
plt.savefig("eda_complete_analysis.png", dpi=300, bbox_inches="tight")
plt.show()`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Top Module Navigation */}
      <ModuleNav track="machine-learning" currentModuleId="eda" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Badge & Title */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-orange-600" />
              Machine Learning Track &bull; Module 04
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              22 COMPLETE SECTIONS &middot; STATISTICAL VISUALIZATION
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 4 &mdash; Exploratory Data Analysis &amp; Visualization
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Master the scientific art of investigating datasets before modeling. Explore the 9-step EDA methodology, univariate distribution shapes, skewness and kurtosis, bivariate scatter regressions, Pearson vs Spearman correlation matrices, FacetGrids, Matplotlib object-oriented canvases, Seaborn statistical plots, IQR vs Z-score outlier detection, and leakage prevention.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="mt-8 flex items-center gap-3 border-t border-stone-200 pt-6">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "curriculum"
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <BookOpen size={16} />
              <span>Full Curriculum Specification</span>
            </button>

            <button
              onClick={() => setActiveTab("workbench")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "workbench"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <Sparkles size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        {activeTab === "curriculum" ? (
          <MachineLearningEdaSections />
        ) : (
          <div className="space-y-8">
            {/* Workbench Subtabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("distributions")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "distributions"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Distribution &amp; Skewness
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("correlation")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "correlation"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Correlation Matrix Heatmap
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("outliers")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "outliers"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. IQR vs Z-Score Outlier Detector
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

            {/* TAB 1: DISTRIBUTION & SKEWNESS EXPLORER */}
            {activeWorkbenchTab === "distributions" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <BarChart2 size={20} className="text-orange-600" />
                    Live Distribution &amp; Skewness Simulator
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Select different distribution modes to observe how tail behavior shifts central tendency metrics (Mean vs Median vs Mode) and triggers mathematical transformations.
                  </p>
                </div>

                {/* Distribution Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "normal", label: "Normal (Symmetric)" },
                    { id: "positive", label: "Positive (Right Skewed)" },
                    { id: "negative", label: "Negative (Left Skewed)" },
                    { id: "log", label: "Log-Transformed (log1p)" },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setDistType(mode.id)}
                      className={`p-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        distType === mode.id
                          ? "bg-orange-600 text-white shadow-xs"
                          : "bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>

                {/* Simulated Histogram Visualization */}
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                  <div className="flex items-end justify-between gap-2 h-44 border-b border-stone-300 pb-2">
                    {distStats.bins.map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                        <div
                          className="w-full rounded-t-md transition-all duration-300 bg-orange-500 hover:bg-orange-600"
                          style={{ height: `${(val / 95) * 100}%` }}
                        />
                        <span className="text-[10px] font-mono text-stone-500">B{idx + 1}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-600">
                    <span className="font-semibold text-stone-900">{distStats.name}</span>
                    <span className="italic">{distStats.desc}</span>
                  </div>
                </div>

                {/* Live Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="text-stone-500 block mb-1">Mean</span>
                    <span className="font-bold text-stone-900 text-sm">{distStats.mean}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="text-stone-500 block mb-1">Median (50th %)</span>
                    <span className="font-bold text-stone-900 text-sm">{distStats.median}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="text-stone-500 block mb-1">Mode</span>
                    <span className="font-bold text-stone-900 text-sm">{distStats.mode}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="text-stone-500 block mb-1">Skewness Metric</span>
                    <span className="font-bold text-orange-700 text-sm">{distStats.skew}</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CORRELATION MATRIX & HEATMAP */}
            {activeWorkbenchTab === "correlation" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <TrendingUp size={20} className="text-orange-600" />
                    Interactive Feature Correlation Heatmap (df.corr)
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Examine pairwise Pearson linear correlation coefficients. Highlighted high-correlation pairs (r &gt; 0.75) warn of multicollinearity.
                  </p>
                </div>

                {/* Interactive Matrix Grid */}
                <div className="overflow-x-auto border border-stone-200 rounded-2xl p-4 bg-stone-50">
                  <table className="w-full text-center text-xs font-mono">
                    <thead>
                      <tr>
                        <th className="p-2 text-left font-bold text-stone-700">Features</th>
                        {corrData.features.map((f, i) => (
                          <th key={i} className="p-2 font-bold text-stone-700">{f}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {corrData.features.map((rowName, rowIdx) => (
                        <tr key={rowIdx}>
                          <td className="p-2 text-left font-bold text-stone-900">{rowName}</td>
                          {corrData.matrix[rowIdx].map((val, colIdx) => (
                            <td key={colIdx} className="p-1">
                              <div className={`p-2 rounded-lg text-xs transition-all ${getHeatmapColor(val)}`}>
                                {val.toFixed(2)}
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Diagnostic Findings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950">
                    <span className="font-bold block mb-1">Strong Predictor: Area &amp; Price (r = 0.84)</span>
                    <p className="text-[11px] leading-relaxed">
                      High positive correlation demonstrates that property area is the dominant linear predictor for price.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950">
                    <span className="font-bold block mb-1">Multicollinearity Warning: Area &amp; Bedrooms (r = 0.78)</span>
                    <p className="text-[11px] leading-relaxed">
                      Area and bedrooms share substantial mutual information. Check Variance Inflation Factor (VIF) during regression modeling.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: DUAL OUTLIER DETECTOR */}
            {activeWorkbenchTab === "outliers" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <Activity size={20} className="text-orange-600" />
                    Outlier Detection Workbench: IQR vs Z-Score
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Compare non-parametric quartile fences against parametric standard deviation cutoffs across real-estate sales.
                  </p>
                </div>

                {/* Method Switcher */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setOutlierMethod("iqr")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      outlierMethod === "iqr" ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    1. IQR Method (Q3 + 1.5 * IQR)
                  </button>
                  <button
                    onClick={() => setOutlierMethod("zscore")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      outlierMethod === "zscore" ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    2. Z-Score Method (|z| &gt; 3.0)
                  </button>
                </div>

                {/* Boundaries Summary */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs flex flex-wrap items-center justify-between gap-4">
                  {outlierMethod === "iqr" ? (
                    <>
                      <div><span className="text-stone-500">Q1:</span> ₹54.0 L</div>
                      <div><span className="text-stone-500">Q3:</span> ₹110.0 L</div>
                      <div><span className="text-stone-500">IQR:</span> ₹56.0 L</div>
                      <div className="text-rose-700 font-bold">Upper Fence: ₹1.94 Cr</div>
                    </>
                  ) : (
                    <>
                      <div><span className="text-stone-500">Mean (μ):</span> ₹82.5 L</div>
                      <div><span className="text-stone-500">Std (σ):</span> ₹18.5 L</div>
                      <div><span className="text-stone-500">Threshold:</span> |z| &gt; 3.0</div>
                      <div className="text-rose-700 font-bold">Flag Boundary: &gt; ₹1.38 Cr</div>
                    </>
                  )}
                </div>

                {/* Sample Table */}
                <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                      <tr>
                        <th className="p-3">Property ID</th>
                        <th className="p-3">Area (sq.ft)</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">{outlierMethod === "iqr" ? "Fence Check" : "Z-Score (z)"}</th>
                        <th className="p-3">Diagnostic Classification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700">
                      {sampleProperties.map((p, idx) => {
                        const isOutlier =
                          outlierMethod === "iqr" ? p.price > iqrUpper : Math.abs(p.z) > 3.0;

                        return (
                          <tr key={idx} className={isOutlier ? "bg-rose-50" : "hover:bg-stone-50"}>
                            <td className="p-3 font-bold">{p.id}</td>
                            <td className="p-3">{p.area}</td>
                            <td className="p-3 font-bold">₹{p.price.toLocaleString()}</td>
                            <td className="p-3">{outlierMethod === "iqr" ? (p.price > iqrUpper ? "> Fence" : "< Fence") : p.z.toFixed(2)}</td>
                            <td className="p-3">
                              {isOutlier ? (
                                <span className="px-2 py-0.5 rounded bg-rose-200 text-rose-800 font-bold">
                                  Outlier Flagged
                                </span>
                              ) : (
                                <span className="text-emerald-700 font-semibold">Inlier (Normal)</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 4: QUIZ ASSESSMENT */}
            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                      <HelpCircle size={20} className="text-orange-600" />
                      Module 4 Knowledge Assessment
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Validate your understanding of EDA methodology, skewness, Pearson/Spearman correlation, and IQR outlier boundaries.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-stone-500">
                      Answered: {Object.keys(selectedAnswers).length} / {quizQuestions.length}
                    </span>
                    {showResults && (
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 font-mono text-xs font-bold rounded-lg">
                        Score: {score} / {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q) => {
                    const isAnswered = selectedAnswers[q.id] !== undefined;
                    const isCorrect = selectedAnswers[q.id] === q.correct;

                    return (
                      <div key={q.id} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                        <h4 className="text-sm font-bold text-stone-900">{q.question}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = selectedAnswers[q.id] === optIdx;
                            let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";

                            if (showResults) {
                              if (optIdx === q.correct) {
                                btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-900 font-bold";
                              } else if (isSelected) {
                                btnStyle = "bg-rose-100 border-rose-400 text-rose-900";
                              }
                            } else if (isSelected) {
                              btnStyle = "bg-stone-900 text-white border-stone-900";
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleSelectOption(q.id, optIdx)}
                                className={`p-3 rounded-xl border text-xs text-left transition-all cursor-pointer font-medium ${btnStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {showResults && (
                          <div className={`p-3 rounded-xl text-xs ${isCorrect ? "bg-emerald-50 text-emerald-900" : "bg-rose-50 text-rose-900"}`}>
                            <strong>{isCorrect ? "Correct!" : "Incorrect."}</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                  <button
                    onClick={() => setShowResults(!showResults)}
                    className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
                  >
                    {showResults ? "Hide Evaluation" : "Submit Assessment"}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedAnswers({});
                      setShowResults(false);
                    }}
                    className="text-xs font-semibold text-stone-500 hover:text-stone-800 cursor-pointer"
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
            onClick={() => navigate("/learning/machine-learning/pandas")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 3 &mdash; Data Analysis with Pandas</span>
          </button>

          <button
            onClick={() => navigate("/learning/machine-learning/regression")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <span>Next: Module 5 &mdash; Regression Analysis &amp; Linear Models</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
