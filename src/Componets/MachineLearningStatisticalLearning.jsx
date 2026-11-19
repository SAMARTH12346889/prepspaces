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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import MachineLearningStatisticalLearningSections from "./MachineLearningStatisticalLearningSections";

export default function MachineLearningStatisticalLearning() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("erm_srm"); // 'erm_srm' | 'self_training' | 'active_learning' | 'quiz'

  // ---------------------------------------------------------------------------
  // LAB 1: EMPIRICAL VS STRUCTURAL RISK MINIMIZATION (ERM vs SRM)
  // ---------------------------------------------------------------------------
  const [degree, setDegree] = useState(4); // 1 to 10
  const [sampleSize, setSampleSize] = useState(100); // 20 to 500
  const [confidenceDelta, setConfidenceDelta] = useState(0.05); // 0.01 to 0.20

  const srmData = useMemo(() => {
    const points = [];
    for (let d = 1; d <= 10; d++) {
      // Training error decreases with degree
      const trainLoss = 0.5 * Math.exp(-0.45 * (d - 1)) + 0.03;

      // VC penalty term sqrt((d * (ln(2N/d) + 1) + ln(4/delta)) / N)
      const ratio = (2 * sampleSize) / d;
      const vcLog = ratio > 1 ? Math.log(ratio) : 0;
      const penalty = Math.sqrt(
        (d * (vcLog + 1) + Math.log(4 / confidenceDelta)) / sampleSize
      );

      // True risk (Bias^2 + Var + Irreducible noise)
      const biasSq = 0.85 / Math.pow(d, 1.4);
      const variance = (0.018 * Math.pow(d, 1.9) * 100) / sampleSize;
      const irreducible = 0.12;
      const trueRisk = biasSq + variance + irreducible;
      const srmBound = trainLoss + penalty;

      points.push({
        d,
        trainLoss: Math.min(1.2, trainLoss),
        trueRisk: Math.min(1.5, trueRisk),
        penalty: Math.min(1.2, penalty),
        srmBound: Math.min(1.8, srmBound),
      });
    }

    const current = points.find((p) => p.d === degree) || points[3];
    let regime = "Optimal SRM Complexity";
    let regimeColor = "text-emerald-700 bg-emerald-50 border-emerald-200";
    if (degree <= 2) {
      regime = "High Bias (Underfitting)";
      regimeColor = "text-amber-700 bg-amber-50 border-amber-200";
    } else if (degree >= 6) {
      regime = "High Variance (Overfitting / Capacity Explosion)";
      regimeColor = "text-red-700 bg-red-50 border-red-200";
    }

    return { points, current, regime, regimeColor };
  }, [degree, sampleSize, confidenceDelta]);

  // ---------------------------------------------------------------------------
  // LAB 2: SEMI-SUPERVISED SELF-TRAINING & PSEUDO-LABELING EXPLORER
  // ---------------------------------------------------------------------------
  const [labelRatio, setLabelRatio] = useState(0.15); // 0.10 to 0.40
  const [confThreshold, setConfThreshold] = useState(0.85); // 0.60 to 0.98
  const [stIteration, setStIteration] = useState(1); // 0 to 3

  // Fixed synthetic 2D points for Class 0 (left/bottom) and Class 1 (right/top)
  const basePoints = useMemo(() => {
    return [
      { id: 1, x: -2.2, y: -1.5, trueClass: 0 },
      { id: 2, x: -1.8, y: -2.1, trueClass: 0 },
      { id: 3, x: -1.5, y: -0.8, trueClass: 0 },
      { id: 4, x: -2.5, y: -0.5, trueClass: 0 },
      { id: 5, x: -1.0, y: -1.7, trueClass: 0 },
      { id: 6, x: -0.7, y: -0.9, trueClass: 0 },
      { id: 7, x: -0.4, y: -0.2, trueClass: 0 },
      { id: 8, x: -1.2, y: 0.3, trueClass: 0 }, // tricky boundary
      { id: 9, x: -2.0, y: -1.2, trueClass: 0 },
      { id: 10, x: -1.6, y: -1.6, trueClass: 0 },

      { id: 11, x: 2.1, y: 1.8, trueClass: 1 },
      { id: 12, x: 1.7, y: 2.3, trueClass: 1 },
      { id: 13, x: 1.4, y: 1.0, trueClass: 1 },
      { id: 14, x: 2.4, y: 0.8, trueClass: 1 },
      { id: 15, x: 0.9, y: 1.5, trueClass: 1 },
      { id: 16, x: 0.6, y: 0.7, trueClass: 1 },
      { id: 17, x: 0.3, y: 0.1, trueClass: 1 }, // tricky boundary
      { id: 18, x: 1.1, y: -0.2, trueClass: 1 },
      { id: 19, x: 1.9, y: 1.4, trueClass: 1 },
      { id: 20, x: 1.5, y: 1.9, trueClass: 1 },
    ];
  }, []);

  const selfTrainingState = useMemo(() => {
    const total = basePoints.length;
    const seedCount = Math.max(2, Math.round(total * labelRatio));

    // Seeds: first few from each class
    const seeds0 = [1, 2];
    const seeds1 = [11, 12];
    if (seedCount >= 4) {
      seeds0.push(3);
      seeds1.push(13);
    }
    if (seedCount >= 6) {
      seeds0.push(4);
      seeds1.push(14);
    }
    const seedIds = new Set([...seeds0, ...seeds1]);

    // Compute pseudo-labels iteratively
    const pointsWithStatus = basePoints.map((pt) => {
      const isSeed = seedIds.has(pt.id);
      // Distance to cluster centers
      // Class 0 center approx (-1.6, -1.2), Class 1 center approx (1.5, 1.2)
      const dist0 = Math.hypot(pt.x - (-1.6), pt.y - (-1.2));
      const dist1 = Math.hypot(pt.x - 1.5, pt.y - 1.2);
      // Softmax probability for class 1
      const p1 = 1 / (1 + Math.exp(1.5 * (dist1 - dist0)));
      const p0 = 1 - p1;
      const maxProb = Math.max(p0, p1);
      const predictedClass = p1 >= 0.5 ? 1 : 0;

      let status = "unlabeled";
      let assignedClass = null;

      if (isSeed) {
        status = "seed_labeled";
        assignedClass = pt.trueClass;
      } else if (stIteration >= 1 && maxProb >= confThreshold) {
        status = "pseudo_labeled";
        assignedClass = predictedClass;
      }

      const isError = assignedClass !== null && assignedClass !== pt.trueClass;

      return {
        ...pt,
        isSeed,
        p0,
        p1,
        maxProb,
        predictedClass,
        status,
        assignedClass,
        isError,
      };
    });

    const seedsTotal = pointsWithStatus.filter((p) => p.status === "seed_labeled").length;
    const pseudoTotal = pointsWithStatus.filter((p) => p.status === "pseudo_labeled").length;
    const unlabeledTotal = pointsWithStatus.filter((p) => p.status === "unlabeled").length;
    const errorTotal = pointsWithStatus.filter((p) => p.isError).length;

    return {
      points: pointsWithStatus,
      seedsTotal,
      pseudoTotal,
      unlabeledTotal,
      errorTotal,
    };
  }, [basePoints, labelRatio, confThreshold, stIteration]);

  // ---------------------------------------------------------------------------
  // LAB 3: ACTIVE LEARNING QUERY STRATEGY SIMULATOR
  // ---------------------------------------------------------------------------
  const [alStrategy, setAlStrategy] = useState("margin"); // 'least_conf' | 'margin' | 'entropy'
  const [alBudget, setAlBudget] = useState(3); // 1 to 5

  const alPool = useMemo(() => {
    // 8 candidate unlabeled instances with 3-class probabilities
    const candidates = [
      { id: "A", desc: "Border sample #1", p: [0.35, 0.33, 0.32] },
      { id: "B", desc: "Near-boundary sample #2", p: [0.49, 0.47, 0.04] },
      { id: "C", desc: "Ambiguous multi-class #3", p: [0.40, 0.35, 0.25] },
      { id: "D", desc: "Moderate confidence #4", p: [0.65, 0.25, 0.10] },
      { id: "E", desc: "Clean core sample #5", p: [0.91, 0.05, 0.04] },
      { id: "F", desc: "Sub-cluster edge #6", p: [0.48, 0.44, 0.08] },
      { id: "G", desc: "High confidence #7", p: [0.88, 0.08, 0.04] },
      { id: "H", desc: "Dense outlier #8", p: [0.52, 0.30, 0.18] },
    ];

    const scored = candidates.map((item) => {
      const sorted = [...item.p].sort((a, b) => b - a);
      const top1 = sorted[0];
      const top2 = sorted[1];

      // 1. Least confidence: 1 - P(y_hat|x)
      const leastConf = 1 - top1;

      // 2. Margin sampling: top1 - top2 (smaller margin = higher priority)
      const margin = top1 - top2;

      // 3. Shannon Entropy: -sum(p * log2(p))
      const entropy = -item.p.reduce(
        (sum, val) => (val > 0 ? sum + val * Math.log2(val) : sum),
        0
      );

      let score = 0;
      if (alStrategy === "least_conf") score = leastConf;
      if (alStrategy === "margin") score = 1 - margin; // invert so higher = more urgent query
      if (alStrategy === "entropy") score = entropy;

      return {
        ...item,
        top1,
        top2,
        leastConf,
        margin,
        entropy,
        score,
      };
    });

    // Sort by priority score descending
    scored.sort((a, b) => b.score - a.score);

    return scored.map((item, idx) => ({
      ...item,
      isQueried: idx < alBudget,
      rank: idx + 1,
    }));
  }, [alStrategy, alBudget]);

  // ---------------------------------------------------------------------------
  // LAB 4: 10-QUESTION CERTIFICATION ASSESSMENT (EXACT SECTION 21 QUESTIONS)
  // ---------------------------------------------------------------------------
  const quizQuestions = useMemo(
    () => [
      {
        id: 1,
        question: "What is the primary objective of Empirical Risk Minimization (ERM)?",
        options: [
          "Maximize model complexity",
          "Minimize average training loss",
          "Maximize the number of features",
          "Eliminate all training errors",
        ],
        correctIndex: 1,
        explanation:
          "Empirical Risk Minimization replaces the unknown population expected risk with the average loss on the observed finite training sample: R_emp(h) = (1/N) * sum(L(h(x_i), y_i)). Its core computational objective is to minimize this average training loss.",
      },
      {
        id: 2,
        question: "What does generalization error describe in statistical learning?",
        options: [
          "Training time",
          "Difference between population risk and empirical risk",
          "Number of model parameters",
          "Number of training examples",
        ],
        correctIndex: 1,
        explanation:
          "Generalization error (or the generalization gap) measures the difference between true expected risk over the data-generating distribution R(h) and the empirical risk observed on the training dataset R_emp(h): |R(h) - R_emp(h)|.",
      },
      {
        id: 3,
        question: "What does high variance usually indicate in a machine learning model?",
        options: [
          "The model is too simple",
          "The model is insensitive to data",
          "The model is sensitive to changes in training data",
          "The model has no parameters",
        ],
        correctIndex: 2,
        explanation:
          "High variance indicates that the model fits random noise in the training sample rather than the true underlying pattern, making it highly sensitive to variations in the specific training dataset (overfitting).",
      },
      {
        id: 4,
        question: "What does PAC stand for in computational learning theory?",
        options: [
          "Predictive Algorithm Classification",
          "Probably Approximately Correct",
          "Parameter Adjustment Calculation",
          "Probabilistic Accuracy Control",
        ],
        correctIndex: 1,
        explanation:
          "PAC stands for 'Probably Approximately Correct', introduced by Leslie Valiant in 1984. It establishes that with high probability (1 - delta, 'Probably'), the generalization error is bounded by epsilon ('Approximately Correct').",
      },
      {
        id: 5,
        question: "What does the Vapnik-Chervonenkis (VC) dimension measure?",
        options: [
          "Training speed",
          "Model memory usage",
          "Expressive capacity of a hypothesis class",
          "Number of output classes",
        ],
        correctIndex: 2,
        explanation:
          "The VC dimension measures the expressive capacity or complexity of a hypothesis class H. It is defined as the maximum cardinality of points that can be completely shattered (all 2^N labelings achieved) by hypotheses in H.",
      },
      {
        id: 6,
        question: "What is the primary purpose of regularization in statistical learning?",
        options: [
          "Increase training-set size",
          "Control model complexity",
          "Delete the target variable",
          "Increase prediction noise",
        ],
        correctIndex: 1,
        explanation:
          "Regularization introduces a complexity penalty (such as L1 or L2 norms) into the training loss: min R_emp(h) + lambda * Omega(h). This controls model capacity and prevents overfitting to sample noise.",
      },
      {
        id: 7,
        question: "What is self-training in semi-supervised learning?",
        options: [
          "Training without any model",
          "Using high-confidence model predictions as additional training labels",
          "Only using human-labeled data",
          "Removing all unlabeled examples",
        ],
        correctIndex: 1,
        explanation:
          "Self-training is an iterative semi-supervised wrapper: a model trains on labeled data, predicts labels for the unlabeled pool, converts predictions exceeding a confidence threshold into pseudo-labels, and retrains on the augmented dataset.",
      },
      {
        id: 8,
        question: "What distinguishes active learning from passive learning?",
        options: [
          "It selects informative examples for labeling",
          "It always labels every observation",
          "It never uses an annotator",
          "It only works for regression",
        ],
        correctIndex: 0,
        explanation:
          "In active learning, the algorithm actively queries an oracle (human domain expert) to label the most informative or uncertain samples from an unlabeled pool, maximizing sample efficiency while minimizing labeling costs.",
      },
      {
        id: 9,
        question: "What is the purpose of an ablation study in ML research?",
        options: [
          "Increase dataset size",
          "Remove or modify components to measure their contribution",
          "Change every hyperparameter simultaneously",
          "Hide model errors",
        ],
        correctIndex: 1,
        explanation:
          "An ablation study systematically disables, isolates, or removes individual components (e.g. attention heads, self-training, augmentations, loss terms) to quantify each component's individual causal contribution to overall performance.",
      },
      {
        id: 10,
        question: "What constitutes reproducible machine learning research?",
        options: [
          "Reporting only the highest accuracy",
          "Repeating the same experiment without documentation",
          "Providing enough information to repeat and verify an experiment",
          "Using only one random seed",
        ],
        correctIndex: 2,
        explanation:
          "Reproducible ML research provides open access to the dataset, preprocessing code, model architecture, deterministic random seeds, training environment specs, and hyperparameter logs so that independent researchers can replicate and verify the findings.",
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

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Top Navigation */}
      <ModuleNav track="ml" activeModuleId="advanced-statistical-learning" />

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8 flex-1">
        {/* Hero Card */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200">
              <Brain size={14} />
              <span>Module 21 &bull; Advanced Machine Learning &amp; Research</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Advanced Statistical Learning &amp; ML Research
            </h1>

            <p className="text-stone-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Dive deep into the mathematical theory and scientific research methodology behind modern machine learning. Master Empirical Risk Minimization (ERM), Generalization Bounds, Bias-Variance Decomposition, PAC Learning, VC Dimension, Structural Risk Minimization (SRM), Regularization Theory, Semi-Supervised Self-Training, Active Learning, and Reproducible ML Research.
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
                <span>Curriculum &amp; Theory</span>
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
                <span>Interactive Research Labs</span>
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: CURRICULUM SPECIFICATIONS */}
        {activeTab === "curriculum" && <MachineLearningStatisticalLearningSections />}

        {/* TAB 2: INTERACTIVE RESEARCH WORKBENCH */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Sub-navigation */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-2xl border border-[#e7e3da] shadow-xs">
              <button
                onClick={() => setActiveWorkbenchTab("erm_srm")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "erm_srm"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <Scale size={15} />
                <span>Lab 1: ERM vs SRM Complexity Bound</span>
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("self_training")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "self_training"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <Share2 size={15} />
                <span>Lab 2: Self-Training &amp; Pseudo-Labeling</span>
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("active_learning")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "active_learning"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <Eye size={15} />
                <span>Lab 3: Active Learning Query Engine</span>
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

            {/* LAB 1: ERM VS SRM SIMULATOR */}
            {activeWorkbenchTab === "erm_srm" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 1</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Empirical Risk vs Structural Risk Minimization (ERM vs SRM)
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Tune model polynomial complexity d, sample size N, and confidence tolerance &delta;. Observe how pure ERM pushes training loss to 0, while SRM minimizes the total generalization bound, exposing the classic U-shaped true risk curve.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 text-xs">
                    <span className="font-bold text-stone-800 uppercase tracking-wider block">
                      Hypothesis &amp; Sample Controls
                    </span>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Hypothesis Complexity (Degree d):</span>
                        <strong className="text-orange-600">{degree}</strong>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={degree}
                        onChange={(e) => setDegree(parseInt(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Training Sample Size (N):</span>
                        <strong>{sampleSize}</strong>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="500"
                        step="10"
                        value={sampleSize}
                        onChange={(e) => setSampleSize(parseInt(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Failure Probability Tolerance (&delta;):</span>
                        <strong>{confidenceDelta}</strong>
                      </div>
                      <input
                        type="range"
                        min="0.01"
                        max="0.20"
                        step="0.01"
                        value={confidenceDelta}
                        onChange={(e) => setConfidenceDelta(parseFloat(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div className="pt-2 border-t border-stone-200 space-y-2">
                      <div className="text-[11px] font-bold text-stone-700">Diagnostic Status:</div>
                      <div className={`p-2.5 rounded-xl border font-bold text-xs ${srmData.regimeColor}`}>
                        {srmData.regime}
                      </div>
                    </div>
                  </div>

                  {/* Curves Chart & Stats */}
                  <div className="lg:col-span-2 space-y-4">
                    {/* Metrics Banner */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-stone-500 block text-[10px] uppercase">Empirical Risk R_emp</span>
                        <span className="text-base font-bold text-emerald-700">{srmData.current.trainLoss.toFixed(3)}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-stone-500 block text-[10px] uppercase">VC Capacity Penalty</span>
                        <span className="text-base font-bold text-purple-700">{srmData.current.penalty.toFixed(3)}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-stone-500 block text-[10px] uppercase">SRM Bound R(h) &le;</span>
                        <span className="text-base font-bold text-orange-600">{srmData.current.srmBound.toFixed(3)}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-stone-500 block text-[10px] uppercase">True Risk R(h)</span>
                        <span className="text-base font-bold text-stone-900">{srmData.current.trueRisk.toFixed(3)}</span>
                      </div>
                    </div>

                    {/* SVG Chart */}
                    <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 text-white">
                      <div className="flex justify-between items-center text-xs text-stone-400 mb-2 font-mono">
                        <span>Risk Curves vs. Hypothesis Complexity (d = 1 .. 10)</span>
                        <div className="flex gap-4">
                          <span className="flex items-center gap-1.5"><span className="w-2.5 h-0.5 bg-emerald-400 inline-block"></span> Training Loss R_emp</span>
                          <span className="flex items-center gap-1.5"><span className="w-2.5 h-0.5 bg-blue-400 inline-block"></span> True Risk R(h)</span>
                          <span className="flex items-center gap-1.5"><span className="w-2.5 h-0.5 bg-purple-400 inline-block"></span> SRM Bound</span>
                        </div>
                      </div>

                      <svg className="w-full h-48" viewBox="0 0 500 160">
                        {/* Grid lines */}
                        <line x1="40" y1="20" x2="480" y2="20" stroke="#333" strokeDasharray="3,3" />
                        <line x1="40" y1="70" x2="480" y2="70" stroke="#333" strokeDasharray="3,3" />
                        <line x1="40" y1="120" x2="480" y2="120" stroke="#333" strokeDasharray="3,3" />
                        <line x1="40" y1="140" x2="480" y2="140" stroke="#555" />
                        <line x1="40" y1="10" x2="40" y2="140" stroke="#555" />

                        {/* Curves */}
                        {/* 1. Training error curve */}
                        <polyline
                          fill="none"
                          stroke="#34d399"
                          strokeWidth="2.5"
                          points={srmData.points
                            .map((p) => {
                              const x = 50 + (p.d - 1) * 45;
                              const y = 140 - (p.trainLoss / 1.5) * 120;
                              return `${x},${y}`;
                            })
                            .join(" ")}
                        />

                        {/* 2. True risk curve (U shape) */}
                        <polyline
                          fill="none"
                          stroke="#60a5fa"
                          strokeWidth="2.5"
                          points={srmData.points
                            .map((p) => {
                              const x = 50 + (p.d - 1) * 45;
                              const y = 140 - (p.trueRisk / 1.5) * 120;
                              return `${x},${y}`;
                            })
                            .join(" ")}
                        />

                        {/* 3. SRM upper bound curve */}
                        <polyline
                          fill="none"
                          stroke="#c084fc"
                          strokeWidth="2"
                          strokeDasharray="4,4"
                          points={srmData.points
                            .map((p) => {
                              const x = 50 + (p.d - 1) * 45;
                              const y = 140 - (p.srmBound / 1.8) * 120;
                              return `${x},${y}`;
                            })
                            .join(" ")}
                        />

                        {/* Active Degree Marker */}
                        {(() => {
                          const cx = 50 + (degree - 1) * 45;
                          const cyTrue = 140 - (srmData.current.trueRisk / 1.5) * 120;
                          return (
                            <g>
                              <line x1={cx} y1="10" x2={cx} y2="140" stroke="#f97316" strokeWidth="1.5" strokeDasharray="2,2" />
                              <circle cx={cx} cy={cyTrue} r="5" fill="#f97316" />
                            </g>
                          );
                        })()}

                        {/* X-axis ticks */}
                        {srmData.points.map((p) => (
                          <text
                            key={p.d}
                            x={50 + (p.d - 1) * 45}
                            y="155"
                            textAnchor="middle"
                            fill="#888"
                            fontSize="10"
                            fontFamily="monospace"
                          >
                            d={p.d}
                          </text>
                        ))}
                      </svg>
                    </div>

                    <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950">
                      <strong>Takeaway:</strong> Pure ERM blindly selects d=10 where training error is near 0. Structural Risk Minimization penalizes the hypothesis capacity term &Phi;(d, N, &delta;), guiding the model selection to the optimal minimum near d=3&ndash;4 where generalization is maximized.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: SELF-TRAINING & PSEUDO-LABELING EXPLORER */}
            {activeWorkbenchTab === "self_training" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 2</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Semi-Supervised Self-Training &amp; Confirmation Bias Simulator
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Simulate how an algorithm bootstraps from a tiny labeled seed dataset. Tune the confidence threshold &tau; and step through iterations to observe pseudo-label acceptance and confirmation bias.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 text-xs">
                    <span className="font-bold text-stone-800 uppercase tracking-wider block">
                      Self-Training Parameters
                    </span>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Initial Seed Labeled Ratio:</span>
                        <strong>{(labelRatio * 100).toFixed(0)}%</strong>
                      </div>
                      <input
                        type="range"
                        min="0.10"
                        max="0.40"
                        step="0.05"
                        value={labelRatio}
                        onChange={(e) => setLabelRatio(parseFloat(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Confidence Threshold (&tau;):</span>
                        <strong className="text-orange-600">{confThreshold.toFixed(2)}</strong>
                      </div>
                      <input
                        type="range"
                        min="0.60"
                        max="0.98"
                        step="0.02"
                        value={confThreshold}
                        onChange={(e) => setConfThreshold(parseFloat(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                      <span className="text-[10px] text-stone-500">Only points with P(Y|x) &ge; &tau; are accepted as pseudo-labels.</span>
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Self-Training Iteration:</span>
                        <strong className="text-orange-600">Step {stIteration} / 3</strong>
                      </div>
                      <div className="flex gap-2">
                        {[0, 1, 2, 3].map((step) => (
                          <button
                            key={step}
                            onClick={() => setStIteration(step)}
                            className={`flex-1 py-1.5 rounded-lg font-bold text-xs cursor-pointer border ${
                              stIteration === step
                                ? "bg-orange-600 text-white border-orange-600"
                                : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                            }`}
                          >
                            {step === 0 ? "Init" : `It ${step}`}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Warning if threshold is too low */}
                    {confThreshold < 0.75 && (
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2">
                        <AlertTriangle size={15} className="text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>Low Threshold Warning:</strong> &tau; &lt; 0.75 introduces mislabeled pseudo-labels (confirmation bias), permanently shifting the decision boundary in error.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2D Scatter Visualization & Counts */}
                  <div className="lg:col-span-2 space-y-4">
                    {/* Status Stats */}
                    <div className="grid grid-cols-4 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-stone-500 block text-[10px]">Seed Labeled</span>
                        <span className="text-base font-bold text-blue-700">{selfTrainingState.seedsTotal}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-stone-500 block text-[10px]">Pseudo-Labeled</span>
                        <span className="text-base font-bold text-emerald-700">{selfTrainingState.pseudoTotal}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-stone-500 block text-[10px]">Unlabeled Pool</span>
                        <span className="text-base font-bold text-stone-500">{selfTrainingState.unlabeledTotal}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-stone-500 block text-[10px]">Corrupt Labels</span>
                        <span className={`text-base font-bold ${selfTrainingState.errorTotal > 0 ? "text-red-600" : "text-emerald-700"}`}>
                          {selfTrainingState.errorTotal}
                        </span>
                      </div>
                    </div>

                    {/* 2D Scatter Plot Canvas */}
                    <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 text-white">
                      <div className="flex justify-between items-center text-xs text-stone-400 mb-2 font-mono">
                        <span>Feature Space (x1 vs x2)</span>
                        <div className="flex gap-3 text-[11px]">
                          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span> Class 0 Seed</span>
                          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block"></span> Class 1 Seed</span>
                          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full border border-emerald-400 inline-block"></span> Pseudo-label</span>
                          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full border border-stone-600 inline-block"></span> Unlabeled</span>
                        </div>
                      </div>

                      <svg className="w-full h-56" viewBox="-180 -140 360 280">
                        {/* Axes */}
                        <line x1="-160" y1="0" x2="160" y2="0" stroke="#333" />
                        <line x1="0" y1="-120" x2="0" y2="120" stroke="#333" />

                        {/* Estimated Decision Boundary line (perpendicular to center vector) */}
                        <line x1="-120" y1="120" x2="120" y2="-120" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3,3" />

                        {/* Data Points */}
                        {selfTrainingState.points.map((pt) => {
                          const px = pt.x * 55;
                          const py = -pt.y * 50;

                          if (pt.status === "seed_labeled") {
                            const fill = pt.assignedClass === 0 ? "#3b82f6" : "#f97316";
                            return (
                              <circle
                                key={pt.id}
                                cx={px}
                                cy={py}
                                r="6"
                                fill={fill}
                                stroke="#fff"
                                strokeWidth="2"
                              />
                            );
                          }

                          if (pt.status === "pseudo_labeled") {
                            const strokeColor = pt.isError ? "#ef4444" : "#10b981";
                            const fillColor = pt.assignedClass === 0 ? "rgba(59, 130, 246, 0.4)" : "rgba(249, 115, 22, 0.4)";
                            return (
                              <g key={pt.id}>
                                <circle
                                  cx={px}
                                  cy={py}
                                  r="6"
                                  fill={fillColor}
                                  stroke={strokeColor}
                                  strokeWidth="2"
                                  strokeDasharray="2,2"
                                />
                                {pt.isError && (
                                  <text x={px + 8} y={py - 4} fill="#ef4444" fontSize="10" fontWeight="bold">!</text>
                                )}
                              </g>
                            );
                          }

                          // Unlabeled
                          return (
                            <circle
                              key={pt.id}
                              cx={px}
                              cy={py}
                              r="4.5"
                              fill="none"
                              stroke="#666"
                              strokeWidth="1.5"
                            />
                          );
                        })}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: ACTIVE LEARNING QUERY STRATEGY SIMULATOR */}
            {activeWorkbenchTab === "active_learning" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 3</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Active Learning Query Strategies &amp; Oracle Labeling
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Compare Least Confidence, Margin Sampling, and Shannon Entropy query strategies over an unlabeled pool of candidates. Observe which instances are chosen for oracle annotation to maximize label value.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 text-xs">
                    <span className="font-bold text-stone-800 uppercase tracking-wider block">
                      Active Query Settings
                    </span>

                    <div>
                      <div className="text-stone-700 font-bold mb-2">Query Heuristic Strategy:</div>
                      <div className="space-y-1.5">
                        <button
                          onClick={() => setAlStrategy("margin")}
                          className={`w-full text-left p-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                            alStrategy === "margin"
                              ? "bg-orange-600 text-white border-orange-600"
                              : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                          }`}
                        >
                          Margin Sampling (P1 &minus; P2)
                        </button>
                        <button
                          onClick={() => setAlStrategy("least_conf")}
                          className={`w-full text-left p-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                            alStrategy === "least_conf"
                              ? "bg-orange-600 text-white border-orange-600"
                              : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                          }`}
                        >
                          Least Confidence (1 &minus; P_max)
                        </button>
                        <button
                          onClick={() => setAlStrategy("entropy")}
                          className={`w-full text-left p-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                            alStrategy === "entropy"
                              ? "bg-orange-600 text-white border-orange-600"
                              : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                          }`}
                        >
                          Shannon Entropy (&minus;&sum; p log p)
                        </button>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Labeling Budget per Batch (B):</span>
                        <strong className="text-orange-600">{alBudget} queries</strong>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={alBudget}
                        onChange={(e) => setAlBudget(parseInt(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950">
                      <strong>Strategy Formula:</strong>{" "}
                      {alStrategy === "margin" && "x* = argmin [ P(y1|x) - P(y2|x) ]. Queries instances near the decision boundary."}
                      {alStrategy === "least_conf" && "x* = argmax [ 1 - max P(y|x) ]. Queries samples where the model's top guess is least sure."}
                      {alStrategy === "entropy" && "x* = argmax [ -sum P(y|x) log P(y|x) ]. Queries samples with max global uncertainty across all classes."}
                    </div>
                  </div>

                  {/* Priority Ranked Candidates Table */}
                  <div className="lg:col-span-2 overflow-x-auto">
                    <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-xs">
                      <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                        <tr>
                          <th className="p-3">Rank</th>
                          <th className="p-3">Sample ID</th>
                          <th className="p-3 font-mono">Probabilities [C0, C1, C2]</th>
                          <th className="p-3 font-mono">Margin</th>
                          <th className="p-3 font-mono">Entropy</th>
                          <th className="p-3">Oracle Decision</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200">
                        {alPool.map((item) => (
                          <tr
                            key={item.id}
                            className={item.isQueried ? "bg-orange-50/60 font-semibold" : "hover:bg-stone-50"}
                          >
                            <td className="p-3 font-mono font-bold text-stone-600">#{item.rank}</td>
                            <td className="p-3">
                              <span className="font-bold text-stone-900">{item.id}</span>
                              <span className="text-stone-500 block text-[11px]">{item.desc}</span>
                            </td>
                            <td className="p-3 font-mono text-[11px]">
                              [{item.p.map((v) => v.toFixed(2)).join(", ")}]
                            </td>
                            <td className="p-3 font-mono">{item.margin.toFixed(2)}</td>
                            <td className="p-3 font-mono">{item.entropy.toFixed(2)}</td>
                            <td className="p-3">
                              {item.isQueried ? (
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-orange-600 text-white">
                                  <Eye size={12} /> Query Oracle
                                </span>
                              ) : (
                                <span className="text-stone-400 text-xs font-mono">Leave in pool</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
                      Module 21 Knowledge Assessment
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Test your theoretical and research mastery of Empirical Risk Minimization, PAC learning, VC dimension, and semi-supervised workflows.
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
            onClick={() => navigate("/learning/machine-learning/probabilistic-machine-learning")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 20 &mdash; Probabilistic Machine Learning &amp; Bayesian Methods</span>
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
