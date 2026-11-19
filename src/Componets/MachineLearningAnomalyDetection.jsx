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
  RefreshCw,
  GitBranch,
  Cpu,
  BarChart2,
  Maximize2,
  Minimize2,
  Compass,
  AlertTriangle,
  ShieldAlert,
  Search,
  Filter,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import MachineLearningAnomalyDetectionSections from "./MachineLearningAnomalyDetectionSections";

export default function MachineLearningAnomalyDetection() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("anomaly_sim"); // 'anomaly_sim' | 'resampling_lab' | 'threshold_opt' | 'quiz'

  // ---------------------------------------------------------------------------
  // LAB 1: ANOMALY SIMULATOR (Z-SCORE VS IQR VS ISOLATION FOREST)
  // ---------------------------------------------------------------------------
  const [detectionAlgo, setDetectionAlgo] = useState("iforest"); // 'zscore' | 'iqr' | 'iforest'
  const [contaminationRate, setContaminationRate] = useState(0.05);

  // Generate simulated 2D transaction data (Amount vs Frequency)
  const simulatedTransactions = useMemo(() => {
    const points = [];
    // 60 normal transactions centered around (100, 100)
    for (let i = 0; i < 60; i++) {
      const angle = (i / 60) * 2 * Math.PI;
      const r = 15 + Math.sin(i * 5) * 12 + ((i * 17) % 15);
      const x = 120 + r * Math.cos(angle);
      const y = 100 + r * Math.sin(angle);
      points.push({ id: i, x, y, isTrueAnomaly: false });
    }
    // 6 true anomalies (distant point anomalies and high-amount outliers)
    const trueAnomalies = [
      { id: 60, x: 260, y: 170, isTrueAnomaly: true },
      { id: 61, x: 240, y: 40, isTrueAnomaly: true },
      { id: 62, x: 45, y: 165, isTrueAnomaly: true },
      { id: 63, x: 35, y: 35, isTrueAnomaly: true },
      { id: 64, x: 275, y: 105, isTrueAnomaly: true },
      { id: 65, x: 130, y: 185, isTrueAnomaly: true },
    ];
    return [...points, ...trueAnomalies];
  }, []);

  const scoredTransactions = useMemo(() => {
    return simulatedTransactions.map((pt) => {
      let isFlagged = false;
      const distFromCenter = Math.sqrt(Math.pow(pt.x - 120, 2) + Math.pow(pt.y - 100, 2));

      if (detectionAlgo === "zscore") {
        // Univariate X projection test (threshold adjusted by contamination)
        const zThreshold = 75 - contaminationRate * 300;
        isFlagged = Math.abs(pt.x - 120) > zThreshold;
      } else if (detectionAlgo === "iqr") {
        // Boxplot Tukey Fences on radius
        const iqrFence = 65 - contaminationRate * 200;
        isFlagged = distFromCenter > iqrFence;
      } else {
        // Isolation Forest: multidimensional isolation path length
        const iForestThreshold = 55 - contaminationRate * 250;
        isFlagged = distFromCenter > iForestThreshold;
      }

      return { ...pt, isFlagged };
    });
  }, [simulatedTransactions, detectionAlgo, contaminationRate]);

  const anomalyMetrics = useMemo(() => {
    let tp = 0;
    let fp = 0;
    let fn = 0;
    let tn = 0;
    scoredTransactions.forEach((pt) => {
      if (pt.isTrueAnomaly && pt.isFlagged) tp++;
      else if (!pt.isTrueAnomaly && pt.isFlagged) fp++;
      else if (pt.isTrueAnomaly && !pt.isFlagged) fn++;
      else tn++;
    });
    const precision = tp + fp > 0 ? (tp / (tp + fp)) * 100 : 0;
    const recall = tp + fn > 0 ? (tp / (tp + fn)) * 100 : 0;
    const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;

    return { tp, fp, fn, tn, precision: precision.toFixed(1), recall: recall.toFixed(1), f1: f1.toFixed(1) };
  }, [scoredTransactions]);

  // ---------------------------------------------------------------------------
  // LAB 2: IMBALANCED LEARNING & RESAMPLING SANDBOX
  // ---------------------------------------------------------------------------
  const [resamplingMethod, setResamplingMethod] = useState("smote"); // 'original' | 'undersample' | 'oversample' | 'smote'

  const resamplingData = useMemo(() => {
    // 50 majority normal points
    const majority = [];
    for (let i = 0; i < 50; i++) {
      const angle = (i / 50) * 2 * Math.PI;
      const r = 20 + (i % 5) * 8;
      majority.push({ x: 95 + r * Math.cos(angle), y: 100 + r * Math.sin(angle), cls: 0, isSynthetic: false });
    }

    // 5 minority fraud points
    const minorityBase = [
      { x: 195, y: 65, cls: 1, isSynthetic: false },
      { x: 220, y: 75, cls: 1, isSynthetic: false },
      { x: 210, y: 95, cls: 1, isSynthetic: false },
      { x: 235, y: 110, cls: 1, isSynthetic: false },
      { x: 200, y: 125, cls: 1, isSynthetic: false },
    ];

    if (resamplingMethod === "original") {
      return { points: [...majority, ...minorityBase], lines: [], majCount: 50, minCount: 5, ir: "10:1" };
    }

    if (resamplingMethod === "undersample") {
      // Retain only 12 majority points
      const reducedMajority = majority.slice(0, 12);
      return { points: [...reducedMajority, ...minorityBase], lines: [], majCount: 12, minCount: 5, ir: "2.4:1" };
    }

    if (resamplingMethod === "oversample") {
      // Duplicate minority points with tiny offset
      const duplicated = [];
      for (let i = 0; i < 15; i++) {
        const base = minorityBase[i % 5];
        duplicated.push({ x: base.x + ((i * 3) % 4) - 2, y: base.y + ((i * 5) % 4) - 2, cls: 1, isSynthetic: false });
      }
      return { points: [...majority, ...minorityBase, ...duplicated], lines: [], majCount: 50, minCount: 20, ir: "2.5:1" };
    }

    // SMOTE: interpolate synthetic points between minority neighbors
    const synthetic = [];
    const lines = [];
    for (let i = 0; i < minorityBase.length; i++) {
      const p1 = minorityBase[i];
      const p2 = minorityBase[(i + 1) % minorityBase.length];
      lines.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });

      // Generate 3 synthetic points along connecting edge
      for (let step = 1; step <= 3; step++) {
        const lambda = step / 4;
        const synX = p1.x + lambda * (p2.x - p1.x);
        const synY = p1.y + lambda * (p2.y - p1.y);
        synthetic.push({ x: synX, y: synY, cls: 1, isSynthetic: true });
      }
    }

    return {
      points: [...majority, ...minorityBase, ...synthetic],
      lines,
      majCount: 50,
      minCount: minorityBase.length + synthetic.length,
      ir: "2.5:1",
    };
  }, [resamplingMethod]);

  // ---------------------------------------------------------------------------
  // LAB 3: THRESHOLD CALIBRATOR & COST-SENSITIVE TRADEOFF
  // ---------------------------------------------------------------------------
  const [decisionThreshold, setDecisionThreshold] = useState(0.25);
  const costPerMissedFraud = 2500; // $2,500 average chargeback
  const costPerFalseAlarm = 15; // $15 customer service investigation cost

  const thresholdMetrics = useMemo(() => {
    // Evaluation on a simulated 1,000 transaction cohort with 20 true frauds
    const totalActualFraud = 20;
    const totalActualNormal = 980;

    // As threshold drops, Recall increases and Precision decreases
    const recallVal = Math.min(1.0, Math.max(0.2, 1.05 - decisionThreshold * 1.1));
    const tp = Math.round(totalActualFraud * recallVal);
    const fn = totalActualFraud - tp;

    // False positives rise rapidly as threshold drops below 0.3
    const fpFactor = Math.pow(1 - decisionThreshold, 2.8);
    const fp = Math.round(totalActualNormal * fpFactor * 0.12);
    const tn = totalActualNormal - fp;

    const precision = tp + fp > 0 ? (tp / (tp + fp)) * 100 : 0;
    const recall = (tp / totalActualFraud) * 100;
    const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;

    const financialLoss = fn * costPerMissedFraud + fp * costPerFalseAlarm;

    return {
      tp,
      fp,
      fn,
      tn,
      precision: precision.toFixed(1),
      recall: recall.toFixed(1),
      f1: f1.toFixed(1),
      financialLoss: financialLoss.toLocaleString(),
    };
  }, [decisionThreshold]);

  // ---------------------------------------------------------------------------
  // LAB 4: CERTIFICATION ASSESSMENT
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What differentiates a statistical outlier from an operational anomaly?",
      options: [
        "Outliers only happen in text datasets",
        "An outlier is a mathematical distribution extreme; an anomaly is an unexpected pattern relative to operational or behavioral context",
        "Outliers cannot be removed",
        "Anomalies only occur in linear regression",
      ],
      correct: 1,
      explanation: "A transaction of $1,000 may be statistically common overall, but anomalous when originating at 3:00 AM from a foreign IP following three failed password attempts.",
    },
    {
      id: 2,
      question: "Why is the Median Absolute Deviation (MAD) superior to standard deviation for outlier screening?",
      options: [
        "Because MAD computes faster on GPUs",
        "The mean and standard deviation are non-robust and heavily distorted by the very outliers they aim to detect",
        "Standard deviation cannot be computed on negative numbers",
        "MAD makes data normal",
      ],
      correct: 1,
      explanation: "Extreme outliers inflate the mean and standard deviation, shrinking calculated Z-scores. The median and MAD possess a 50% breakdown point, resisting extreme contamination.",
    },
    {
      id: 3,
      question: "How does Isolation Forest identify anomalies with few recursive partitions?",
      options: [
        "By training gradient boosting on residuals",
        "Anomalies are rare and isolated in sparse peripheral feature space, requiring very few random splits to partition into leaf nodes",
        "By computing inverted covariance distances",
        "By grouping points into convex hulls",
      ],
      correct: 1,
      explanation: "Normal cluster points require many random splits to isolate into single leaves. Peripheral anomalies are isolated near the root in very few partitions (short average path length).",
    },
    {
      id: 4,
      question: "What does an LOF score significantly greater than 1 signify?",
      options: [
        "The point is in a dense cluster center",
        "The point has a substantially lower local reachability density than its neighbors, marking it as a local density anomaly",
        "The point has zero variance",
        "The point has high accuracy",
      ],
      correct: 1,
      explanation: "LOF compares a point's local reachability density with that of its neighbors. LOF >> 1 indicates that the point lives in a much sparser region than its surrounding neighborhood.",
    },
    {
      id: 5,
      question: "Why is Accuracy fundamentally flawed for fraud datasets with a 99.9% to 0.1% class split?",
      options: [
        "Accuracy values are rounded to integers in Python",
        "A naive dummy model predicting 'Normal' 100% of the time achieves 99.9% accuracy while catching 0% of fraud",
        "Accuracy is only valid for clustering",
        "Cross-validation breaks accuracy",
      ],
      correct: 1,
      explanation: "Under severe class imbalance, predicting the majority class yields near-perfect accuracy while completely failing the core business objective of detecting the rare positive fraud class.",
    },
    {
      id: 6,
      question: "How does SMOTE synthesize new minority training instances?",
      options: [
        "By duplicating existing minority rows with Gaussian noise",
        "By interpolating along the vector segment connecting a minority sample with one of its k nearest minority neighbors: x_new = x_i + lambda*(x_j - x_i)",
        "By training a GAN on normal points",
        "By downsampling the majority class",
      ],
      correct: 1,
      explanation: "SMOTE constructs new plausible points along line segments between neighboring minority points in feature space, creating a broader synthetic decision boundary.",
    },
    {
      id: 7,
      question: "What catastrophic error occurs if SMOTE is applied before train/test splitting?",
      options: [
        "Memory crashes immediately",
        "Data leakage: synthetic samples generated from future test observations enter the training set, causing artificial validation inflation",
        "Feature scaling becomes impossible",
        "Target labels are inverted",
      ],
      correct: 1,
      explanation: "Resampling before splitting causes synthetic points to interpolate between test instances and training instances, leaking test manifold coordinates into model training.",
    },
    {
      id: 8,
      question: "How does class_weight='balanced' handle imbalanced datasets without altering row counts?",
      options: [
        "By dropping rows with small gradients",
        "By scaling loss function penalties inversely proportional to class frequencies: w_c = N / (K * N_c), heavily penalizing minority errors during training",
        "By creating separate models for each class",
        "By converting labels to continuous numbers",
      ],
      correct: 1,
      explanation: "Class weighting leaves the dataset size unchanged but scales the loss gradient, so misclassifying a 1% fraud instance penalizes the optimizer 100x more than misclassifying a normal instance.",
    },
    {
      id: 9,
      question: "Why is the default probability threshold of 0.5 often wrong for fraud detection?",
      options: [
        "Scikit-learn probabilities are integers",
        "Missing a fraud (False Negative) has far higher financial risk than investigating a false alarm (False Positive), justifying lower thresholds (e.g. 0.15&ndash;0.25) to maximize recall",
        "Threshold 0.5 is mathematically prohibited on imbalanced data",
        "ROC-AUC requires thresholds between 0.8 and 1.0",
      ],
      correct: 1,
      explanation: "Threshold 0.5 assumes equal error costs. In financial fraud, an undetected $5,000 fraud is far more catastrophic than a $5 verification cost, making a lower threshold economically optimal.",
    },
    {
      id: 10,
      question: "Why is Precision-Recall AUC preferred over ROC-AUC for massive imbalanced datasets?",
      options: [
        "PR-AUC runs faster on CPU",
        "ROC-AUC's False Positive Rate denominator is dominated by the huge majority class (FP + TN), masking thousands of false alarms; PR-AUC directly balances Precision against Recall",
        "ROC-AUC cannot be plotted in Python",
        "PR-AUC is unsupervised while ROC-AUC is supervised",
      ],
      correct: 1,
      explanation: "With 1,000,000 normal records and 100 fraud cases, 5,000 false alarms produces an FPR of only 0.5% (yielding an illusory ROC-AUC of 0.98). However, the precision is only 1.5%, which PR-AUC accurately exposes.",
    },
  ];

  const handleSelectOption = (qId, optIdx) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const score = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) correct++;
    });
    return correct;
  }, [selectedAnswers]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Top Module Navigation */}
      <ModuleNav track="machine-learning" currentModuleId="anomaly-detection" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Badge & Title */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-orange-600" />
              Machine Learning Track &bull; Module 17
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              20 IN-DEPTH SECTIONS &middot; ANOMALY DETECTION &amp; FRAUD
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 17 &mdash; Anomaly Detection &amp; Imbalanced Learning
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Tackle severe class skew and discover rare, high-stakes events. Master Z-score, Tukey IQR fences, Median Absolute Deviation (MAD), Isolation Forest recursive partitioning, Local Outlier Factor (LOF), One-Class SVM, Random Resampling, SMOTE interpolation, cost-sensitive class weights, and probability threshold calibration.
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

        {/* TAB 1: CURRICULUM SPECIFICATION */}
        {activeTab === "curriculum" && <MachineLearningAnomalyDetectionSections />}

        {/* TAB 2: INTERACTIVE WORKBENCHES */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Subtabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-[#e7e3da] pb-3">
              <button
                onClick={() => setActiveWorkbenchTab("anomaly_sim")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                  activeWorkbenchTab === "anomaly_sim"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Search size={15} />
                <span>Lab 1: Anomaly Detector Simulator</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("resampling_lab")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                  activeWorkbenchTab === "resampling_lab"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Layers size={15} />
                <span>Lab 2: SMOTE &amp; Resampling Sandbox</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("threshold_opt")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                  activeWorkbenchTab === "threshold_opt"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Sliders size={15} />
                <span>Lab 3: Threshold &amp; Cost Optimizer</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <HelpCircle size={15} />
                <span>Lab 4: Certification Quiz (10 Qs)</span>
              </button>
            </div>

            {/* LAB 1: ANOMALY SIMULATOR */}
            {activeWorkbenchTab === "anomaly_sim" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <Search size={13} />
                    <span>Unsupervised Detection Comparison</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Statistical Screening vs. Isolation Forest Anomaly Simulator
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Compare how Z-Score (1D projection), Tukey IQR fences, and multidimensional Isolation Forest partition normal transactions from rare fraudulent outliers.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Controls & Canvas */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-stone-700">Algorithm:</span>
                        <button
                          onClick={() => setDetectionAlgo("iforest")}
                          className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                            detectionAlgo === "iforest" ? "bg-orange-600 text-white" : "bg-white border text-stone-600"
                          }`}
                        >
                          Isolation Forest
                        </button>
                        <button
                          onClick={() => setDetectionAlgo("iqr")}
                          className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                            detectionAlgo === "iqr" ? "bg-orange-600 text-white" : "bg-white border text-stone-600"
                          }`}
                        >
                          Tukey IQR
                        </button>
                        <button
                          onClick={() => setDetectionAlgo("zscore")}
                          className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                            detectionAlgo === "zscore" ? "bg-orange-600 text-white" : "bg-white border text-stone-600"
                          }`}
                        >
                          Z-Score
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <label className="text-xs font-mono font-bold text-stone-700">
                          Contamination: {(contaminationRate * 100).toFixed(0)}%
                        </label>
                        <input
                          type="range"
                          min="0.01"
                          max="0.15"
                          step="0.01"
                          value={contaminationRate}
                          onChange={(e) => setContaminationRate(parseFloat(e.target.value))}
                          className="w-24 accent-orange-600 cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* SVG Scatter Canvas */}
                    <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800">
                      <div className="text-[11px] font-mono text-stone-400 mb-2 flex justify-between">
                        <span>Transaction Feature Space (Amount vs. Frequency)</span>
                        <span>Red Cross: Flagged Anomaly &bull; Blue Circle: Normal</span>
                      </div>
                      <svg viewBox="0 0 300 200" className="w-full h-52 select-none">
                        <rect width="300" height="200" fill="#09090b" rx="8" />

                        {/* Normal Cluster Boundary Circle */}
                        <circle cx="120" cy="100" r="55" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />

                        {/* Data Points */}
                        {scoredTransactions.map((pt) => {
                          if (pt.isFlagged) {
                            return (
                              <g key={pt.id}>
                                <circle cx={pt.x} cy={pt.y} r="6" fill="#ef4444" opacity="0.3" />
                                <line x1={pt.x - 4} y1={pt.y - 4} x2={pt.x + 4} y2={pt.y + 4} stroke="#f87171" strokeWidth="2" />
                                <line x1={pt.x + 4} y1={pt.y - 4} x2={pt.x - 4} y2={pt.y + 4} stroke="#f87171" strokeWidth="2" />
                              </g>
                            );
                          }
                          return (
                            <circle
                              key={pt.id}
                              cx={pt.x}
                              cy={pt.y}
                              r="3.5"
                              fill="#38bdf8"
                              opacity="0.8"
                            />
                          );
                        })}
                      </svg>
                    </div>

                    <div className="flex justify-between text-[11px] font-mono text-stone-500">
                      <span>Center: Dense regular transactions</span>
                      <span>Outer perimeter: Rare high-risk anomalies</span>
                    </div>
                  </div>

                  {/* Right: Metrics Dashboard */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-stone-500 uppercase block">
                        True Positives (Caught Fraud)
                      </span>
                      <div className="text-2xl font-black text-emerald-700 font-mono">
                        {anomalyMetrics.tp} / 6 ({anomalyMetrics.recall}%)
                      </div>
                      <p className="text-[10px] text-stone-500 font-sans">
                        Number of true simulated anomalies correctly identified.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-stone-500 uppercase block">
                        False Positives (False Alarms)
                      </span>
                      <div className="text-2xl font-black text-amber-700 font-mono">
                        {anomalyMetrics.fp}
                      </div>
                      <p className="text-[10px] text-stone-500 font-sans">
                        Legitimate transactions incorrectly flagged for manual review.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-orange-800 uppercase block">
                        F1-Score
                      </span>
                      <div className="text-2xl font-black text-orange-900 font-mono">
                        {anomalyMetrics.f1}%
                      </div>
                      <p className="text-[10px] text-orange-700 font-sans">
                        Precision: {anomalyMetrics.precision}% &bull; Recall: {anomalyMetrics.recall}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: SMOTE & RESAMPLING SANDBOX */}
            {activeWorkbenchTab === "resampling_lab" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <Layers size={13} />
                    <span>Synthetic Oversampling vs. Undersampling</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    SMOTE Convex Line Interpolation &amp; Resampling Sandbox
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Examine how SMOTE synthesizes brand-new plausible minority instances along nearest-neighbor vectors without memorizing exact duplicates.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Controls and Canvas */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-stone-700">Strategy:</span>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setResamplingMethod("original")}
                          className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                            resamplingMethod === "original" ? "bg-stone-900 text-white" : "bg-white border text-stone-600"
                          }`}
                        >
                          Original Imbalanced (10:1)
                        </button>
                        <button
                          onClick={() => setResamplingMethod("undersample")}
                          className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                            resamplingMethod === "undersample" ? "bg-stone-900 text-white" : "bg-white border text-stone-600"
                          }`}
                        >
                          Random Undersample
                        </button>
                        <button
                          onClick={() => setResamplingMethod("oversample")}
                          className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                            resamplingMethod === "oversample" ? "bg-stone-900 text-white" : "bg-white border text-stone-600"
                          }`}
                        >
                          Random Oversample
                        </button>
                        <button
                          onClick={() => setResamplingMethod("smote")}
                          className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                            resamplingMethod === "smote" ? "bg-orange-600 text-white shadow-xs" : "bg-white border text-stone-600"
                          }`}
                        >
                          SMOTE Interpolation
                        </button>
                      </div>
                    </div>

                    {/* Canvas */}
                    <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800">
                      <div className="text-[11px] font-mono text-stone-400 mb-2 flex justify-between">
                        <span>Feature Space Representation</span>
                        <span>Blue: Majority (Normal) &bull; Orange: Minority Base &bull; Green: SMOTE Synthetic</span>
                      </div>
                      <svg viewBox="0 0 300 200" className="w-full h-52 select-none">
                        <rect width="300" height="200" fill="#09090b" rx="8" />

                        {/* SMOTE interpolation line segments */}
                        {resamplingData.lines.map((l, idx) => (
                          <line
                            key={idx}
                            x1={l.x1}
                            y1={l.y1}
                            x2={l.x2}
                            y2={l.y2}
                            stroke="#10b981"
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                            opacity="0.6"
                          />
                        ))}

                        {/* Points */}
                        {resamplingData.points.map((pt, idx) => {
                          if (pt.cls === 0) {
                            return <circle key={idx} cx={pt.x} cy={pt.y} r="3" fill="#38bdf8" opacity="0.65" />;
                          }
                          if (pt.isSynthetic) {
                            return <circle key={idx} cx={pt.x} cy={pt.y} r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="1" />;
                          }
                          return <circle key={idx} cx={pt.x} cy={pt.y} r="5" fill="#f97316" stroke="#ffffff" strokeWidth="1.5" />;
                        })}
                      </svg>
                    </div>

                    <div className="flex justify-between text-[11px] font-mono text-stone-400">
                      <span>Majority Count: {resamplingData.majCount}</span>
                      <span>Minority Count: {resamplingData.minCount}</span>
                      <span>Effective Ratio: {resamplingData.ir}</span>
                    </div>
                  </div>

                  {/* Right: Architectural Trade-Off */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-stone-500 uppercase block">
                        Mechanism Insight
                      </span>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {resamplingMethod === "smote" && (
                          <strong>SMOTE synthesizes new examples along the line segments connecting k=5 nearest minority neighbors. This expands the minority convex hull without memorizing exact duplicates.</strong>
                        )}
                        {resamplingMethod === "undersample" && (
                          "Majority points were truncated from 50 to 12. While training is 4x faster, 76% of majority boundary information is lost."
                        )}
                        {resamplingMethod === "oversample" && (
                          "Minority points were cloned. Deep decision trees will easily memorize these exact duplicates, leading to severe overfitting."
                        )}
                        {resamplingMethod === "original" && (
                          "10:1 class imbalance. Standard classifiers easily predict all points as Blue to achieve 91% accuracy while failing on Orange."
                        )}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-amber-800 uppercase block">
                        Pipeline Isolation Rule
                      </span>
                      <p className="text-xs text-amber-900 leading-relaxed">
                        Never resample test or validation data! Resampling must execute strictly on the training partition inside an <code>imblearn.pipeline.Pipeline</code>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: THRESHOLD & COST OPTIMIZER */}
            {activeWorkbenchTab === "threshold_opt" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <Sliders size={13} />
                    <span>Decision Engineering</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Classification Threshold &amp; Financial Cost Optimizer
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Adjust the fraud decision probability threshold from the default 0.50 cutoff to observe how Recall, Precision, and Total Net Financial Loss evolve on a 1,000-transaction portfolio.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Controls and Confusion Matrix */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-mono font-bold text-stone-800">
                          Classification Probability Cutoff: {decisionThreshold.toFixed(2)}
                        </label>
                        <span className="text-xs font-mono text-stone-500">
                          P(Fraud) &ge; {decisionThreshold.toFixed(2)} &rarr; Flag as Fraud
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0.05"
                        max="0.90"
                        step="0.05"
                        value={decisionThreshold}
                        onChange={(e) => setDecisionThreshold(parseFloat(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] font-mono text-stone-400">
                        <span>0.05 (High Recall &bull; Catch All Fraud)</span>
                        <span>0.50 (Default Cutoff)</span>
                        <span>0.90 (High Precision &bull; Zero False Alarms)</span>
                      </div>
                    </div>

                    {/* Confusion Matrix Display */}
                    <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
                      <span className="text-xs font-mono font-bold text-stone-700 uppercase block">
                        Resulting Confusion Matrix (1,000 Transactions)
                      </span>
                      <div className="grid grid-cols-2 gap-3 text-center font-mono">
                        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                          <span className="text-[10px] text-emerald-700 uppercase font-bold block">
                            True Positives (TP)
                          </span>
                          <div className="text-2xl font-black text-emerald-900">{thresholdMetrics.tp}</div>
                          <span className="text-[10px] text-emerald-600">Caught Fraud Cases</span>
                        </div>
                        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl">
                          <span className="text-[10px] text-rose-700 uppercase font-bold block">
                            False Negatives (FN)
                          </span>
                          <div className="text-2xl font-black text-rose-900">{thresholdMetrics.fn}</div>
                          <span className="text-[10px] text-rose-600">Missed Fraud ($2,500 each)</span>
                        </div>
                        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                          <span className="text-[10px] text-amber-700 uppercase font-bold block">
                            False Positives (FP)
                          </span>
                          <div className="text-2xl font-black text-amber-900">{thresholdMetrics.fp}</div>
                          <span className="text-[10px] text-amber-600">False Alerts ($15 review)</span>
                        </div>
                        <div className="p-4 bg-stone-100 border border-stone-200 rounded-xl">
                          <span className="text-[10px] text-stone-600 uppercase font-bold block">
                            True Negatives (TN)
                          </span>
                          <div className="text-2xl font-black text-stone-800">{thresholdMetrics.tn}</div>
                          <span className="text-[10px] text-stone-500">Normal Approved</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Business Loss Analytics */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-stone-400 uppercase block">
                        Total Net Business Loss
                      </span>
                      <div className="text-3xl font-black text-orange-400 font-mono">
                        ${thresholdMetrics.financialLoss}
                      </div>
                      <p className="text-[10px] text-stone-400 font-sans">
                        (FN &times; $2,500) + (FP &times; $15). Minimum loss occurs near threshold ~0.20.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                      <div className="flex justify-between font-mono">
                        <span className="text-stone-500">Recall (Fraud Catch):</span>
                        <strong className="text-stone-900">{thresholdMetrics.recall}%</strong>
                      </div>
                      <div className="flex justify-between font-mono">
                        <span className="text-stone-500">Precision (Alert Accuracy):</span>
                        <strong className="text-stone-900">{thresholdMetrics.precision}%</strong>
                      </div>
                      <div className="flex justify-between font-mono">
                        <span className="text-stone-500">F1-Score:</span>
                        <strong className="text-orange-700">{thresholdMetrics.f1}%</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 4: CERTIFICATION QUIZ */}
            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">
                      Module 17 Knowledge Assessment &amp; Certification
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600">
                      Test your understanding of statistical anomaly detection, Isolation Forest, LOF, SMOTE, class weighting, and threshold calibration.
                    </p>
                  </div>
                  {showResults && (
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-2xl text-center">
                      <div className="text-2xl font-black text-orange-700 font-mono">{score} / 10</div>
                      <div className="text-[10px] text-stone-500 uppercase font-bold">
                        {score >= 8 ? "Certification Passed" : "Review Recommended"}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q, idx) => (
                    <div key={q.id} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                      <div className="flex items-start gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-stone-900 text-white text-xs flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">
                          {idx + 1}
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
            onClick={() => navigate("/learning/machine-learning/dimensionality-reduction")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 16 &mdash; Dimensionality Reduction &amp; Feature Extraction</span>
          </button>

          <button
            onClick={() => navigate("/learning/machine-learning/recommendation-systems")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs transition-colors"
          >
            <span>Next: Module 18 &mdash; Recommendation Systems &amp; Personalization</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
