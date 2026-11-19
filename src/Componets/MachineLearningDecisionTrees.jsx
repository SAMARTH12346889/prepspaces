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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import MachineLearningDecisionTreesSections from "./MachineLearningDecisionTreesSections";

export default function MachineLearningDecisionTrees() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("impurity_lab"); // 'impurity_lab' | 'tree_types' | 'pruning_sim' | 'quiz'
  const [copiedCode, setCopiedCode] = useState(false);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 1: IMPURITY & INFORMATION GAIN LAB
  // ---------------------------------------------------------------------------
  const [posCount, setPosCount] = useState(6);
  const [negCount, setNegCount] = useState(4);
  const [leftPos, setLeftPos] = useState(4);
  const [leftNeg, setLeftNeg] = useState(0);

  const impurityMetrics = useMemo(() => {
    const parentTotal = posCount + negCount;
    if (parentTotal === 0) return { parentEntropy: 0, parentGini: 0, ig: 0, giniRed: 0 };

    const p1 = posCount / parentTotal;
    const p0 = negCount / parentTotal;
    const parentEntropy =
      (p1 > 0 ? -p1 * Math.log2(p1) : 0) + (p0 > 0 ? -p0 * Math.log2(p0) : 0);
    const parentGini = 1 - (p1 * p1 + p0 * p0);

    // Child counts
    const safeLeftPos = Math.min(leftPos, posCount);
    const safeLeftNeg = Math.min(leftNeg, negCount);
    const leftTotal = safeLeftPos + safeLeftNeg;

    const rightPos = posCount - safeLeftPos;
    const rightNeg = negCount - safeLeftNeg;
    const rightTotal = rightPos + rightNeg;

    let leftEntropy = 0;
    let leftGini = 0;
    if (leftTotal > 0) {
      const lp1 = safeLeftPos / leftTotal;
      const lp0 = safeLeftNeg / leftTotal;
      leftEntropy = (lp1 > 0 ? -lp1 * Math.log2(lp1) : 0) + (lp0 > 0 ? -lp0 * Math.log2(lp0) : 0);
      leftGini = 1 - (lp1 * lp1 + lp0 * lp0);
    }

    let rightEntropy = 0;
    let rightGini = 0;
    if (rightTotal > 0) {
      const rp1 = rightPos / rightTotal;
      const rp0 = rightNeg / rightTotal;
      rightEntropy = (rp1 > 0 ? -rp1 * Math.log2(rp1) : 0) + (rp0 > 0 ? -rp0 * Math.log2(rp0) : 0);
      rightGini = 1 - (rp1 * rp1 + rp0 * rp0);
    }

    const weightedChildEntropy =
      (leftTotal / parentTotal) * leftEntropy + (rightTotal / parentTotal) * rightEntropy;
    const weightedChildGini =
      (leftTotal / parentTotal) * leftGini + (rightTotal / parentTotal) * rightGini;

    const ig = Math.max(0, parentEntropy - weightedChildEntropy);
    const giniRed = Math.max(0, parentGini - weightedChildGini);

    return {
      parentTotal,
      p1: Number(p1.toFixed(3)),
      p0: Number(p0.toFixed(3)),
      parentEntropy: Number(parentEntropy.toFixed(3)),
      parentGini: Number(parentGini.toFixed(3)),
      leftTotal,
      leftEntropy: Number(leftEntropy.toFixed(3)),
      leftGini: Number(leftGini.toFixed(3)),
      rightTotal,
      rightEntropy: Number(rightEntropy.toFixed(3)),
      rightGini: Number(rightGini.toFixed(3)),
      ig: Number(ig.toFixed(3)),
      giniRed: Number(giniRed.toFixed(3)),
    };
  }, [posCount, negCount, leftPos, leftNeg]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 2: CLASSIFICATION VS REGRESSION LEAF SIMULATOR
  // ---------------------------------------------------------------------------
  const [treeMode, setTreeMode] = useState("classification"); // 'classification' | 'regression'
  const [clfA, setClfA] = useState(8); // Approved
  const [clfB, setClfB] = useState(2); // Rejected

  const [regSample1, setRegSample1] = useState(55);
  const [regSample2, setRegSample2] = useState(60);
  const [regSample3, setRegSample3] = useState(65);
  const [regSample4, setRegSample4] = useState(90);

  const treeTypeMetrics = useMemo(() => {
    if (treeMode === "classification") {
      const total = clfA + clfB;
      const probA = total > 0 ? ((clfA / total) * 100).toFixed(1) : 0;
      const probB = total > 0 ? ((clfB / total) * 100).toFixed(1) : 0;
      const majority = clfA >= clfB ? "Approved" : "Rejected";
      return { total, probA, probB, majority };
    } else {
      const samples = [regSample1, regSample2, regSample3, regSample4];
      const mean = samples.reduce((a, b) => a + b, 0) / samples.length;
      const mse = samples.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / samples.length;
      return {
        mean: Number(mean.toFixed(2)),
        mse: Number(mse.toFixed(2)),
        samples,
      };
    }
  }, [treeMode, clfA, clfB, regSample1, regSample2, regSample3, regSample4]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 3: PRE- & POST-PRUNING COMPLEXITY LAB
  // ---------------------------------------------------------------------------
  const [maxDepth, setMaxDepth] = useState(4);
  const [ccpAlpha, setCcpAlpha] = useState(0.005);

  const pruningMetrics = useMemo(() => {
    // Model relationship: higher depth increases capacity, higher alpha restricts tree
    const rawLeaves = Math.min(64, Math.pow(2, maxDepth));
    const alphaPenaltyFactor = 1 / (1 + ccpAlpha * 350);
    const effectiveLeaves = Math.max(2, Math.round(rawLeaves * alphaPenaltyFactor));
    const effectiveDepth = Math.min(maxDepth, Math.max(1, Math.round(Math.log2(effectiveLeaves) + 1)));

    // Train accuracy increases with depth, decreases with alpha
    const trainAcc = Math.min(100, Math.round(75 + effectiveDepth * 4.2 - ccpAlpha * 250));
    // Validation accuracy exhibits classic inverted-U tradeoff
    const complexityScore = effectiveDepth * 1.5 + effectiveLeaves * 0.4;
    let valAcc = 89.5 - Math.pow(complexityScore - 9.5, 2) * 0.35;
    valAcc = Math.max(68, Math.min(93.8, Number(valAcc.toFixed(1))));

    return {
      effectiveLeaves,
      effectiveDepth,
      trainAcc: Math.max(70, Math.min(100, trainAcc)),
      valAcc,
      status:
        effectiveDepth <= 2
          ? "Underfitting (High Bias - Insufficient Depth)"
          : effectiveDepth >= 8 && ccpAlpha < 0.002
          ? "Overfitting (High Variance - Memorizing Noise)"
          : "Optimal Regularization Balance",
    };
  }, [maxDepth, ccpAlpha]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 4: 10-QUESTION MODULE ASSESSMENT
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of recursive partitioning?",
      options: [
        "Scale all numerical features",
        "Repeatedly divide a dataset using feature-based conditions",
        "Convert regression into classification",
        "Remove every missing value",
      ],
      correct: 1,
      explanation: "Recursive partitioning repeatedly evaluates and selects candidate feature conditions to divide training observations into increasingly homogeneous child subsets.",
    },
    {
      id: 2,
      question: "Which node represents the starting point of a decision tree?",
      options: ["Leaf node", "Root node", "Terminal branch", "Prediction node"],
      correct: 1,
      explanation: "The root node is the topmost node containing the entire training dataset before any recursive splits are applied.",
    },
    {
      id: 3,
      question: "What does entropy measure in a classification tree?",
      options: [
        "Tree depth",
        "Class uncertainty or impurity",
        "Number of input features",
        "Regression error only",
      ],
      correct: 1,
      explanation: "Entropy measures the Shannon information uncertainty or impurity of categorical class labels in a node: H(S) = -Σ p_i log₂(p_i).",
    },
    {
      id: 4,
      question: "What is the entropy of a completely pure classification node?",
      options: ["1", "0.5", "0", "Infinity"],
      correct: 2,
      explanation: "When all observations in a node belong to a single class, there is zero uncertainty, yielding an entropy of exactly 0.0 bits.",
    },
    {
      id: 5,
      question: "What does information gain measure?",
      options: [
        "Increase in tree depth",
        "Reduction in entropy after splitting",
        "Number of observations removed",
        "Total prediction accuracy",
      ],
      correct: 1,
      explanation: "Information gain is the difference between the parent node's entropy and the weighted average entropy of its resulting child nodes: IG = H(parent) - H(children).",
    },
    {
      id: 6,
      question: "What is the maximum Gini impurity for a two-class node?",
      options: ["0.25", "0.5", "1", "2"],
      correct: 1,
      explanation: "For a balanced binary distribution where p₁ = p₀ = 0.5, Gini impurity reaches its theoretical maximum: 1 - (0.5² + 0.5²) = 1 - 0.5 = 0.5.",
    },
    {
      id: 7,
      question: "Which tree is designed to predict a numerical target?",
      options: [
        "Classification tree",
        "Regression tree",
        "Binary classifier",
        "One-vs-Rest classifier",
      ],
      correct: 1,
      explanation: "A regression tree predicts continuous numerical targets by partitioning the feature space into regions where each leaf outputs the mean or median target value.",
    },
    {
      id: 8,
      question: "Which parameter restricts the maximum depth of a Scikit-learn decision tree?",
      options: ["alpha", "max_depth", "n_features", "threshold"],
      correct: 1,
      explanation: "The max_depth parameter restricts how many split levels the tree can grow from the root node to its deepest terminal leaf.",
    },
    {
      id: 9,
      question: "What is the difference between pre-pruning and post-pruning?",
      options: [
        "Both only increase tree depth",
        "Pre-pruning restricts growth, while post-pruning removes branches after initial growth",
        "Pre-pruning removes data rows",
        "Post-pruning changes classification into regression",
      ],
      correct: 1,
      explanation: "Pre-pruning stops splitting early during training using rules like max_depth and min_samples_leaf; post-pruning grows a full tree first and trims unnecessary branches via cost-complexity pruning (ccp_alpha).",
    },
    {
      id: 10,
      question: "Which Scikit-learn parameter controls cost-complexity pruning?",
      options: ["max_features", "min_samples_split", "ccp_alpha", "random_state"],
      correct: 2,
      explanation: "The ccp_alpha parameter controls minimal cost-complexity pruning by penalizing tree size with a regularized cost R_α(T) = R(T) + α|T̃|.",
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
      <ModuleNav track="machine-learning" currentModuleId="decision-trees" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Badge & Title */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-orange-600" />
              Machine Learning Track &bull; Module 08
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              27 COMPLETE SECTIONS &middot; TREE-BASED LEARNING
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 8 &mdash; Decision Trees &amp; Rule-Based Learning
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Master non-parametric tree-based supervised learning. Understand recursive partitioning and greedy split search, calculate Shannon entropy, information gain, and Gini impurity, construct classification and regression trees, control overfitting via pre-pruning and minimal cost-complexity post-pruning (ccp_alpha), extract transparent white-box decision rules, and evaluate impurity versus permutation feature importance.
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
        {activeTab === "curriculum" && <MachineLearningDecisionTreesSections />}

        {/* TAB 2: INTERACTIVE WORKBENCHES & ASSESSMENT */}
        {activeTab === "workbench" && (
          <div className="space-y-8">
            {/* Workbench Navigation Pills */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-stone-200/70 rounded-2xl w-fit">
              <button
                onClick={() => setActiveWorkbenchTab("impurity_lab")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "impurity_lab"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Calculator size={15} />
                <span>1. Impurity &amp; Information Gain Lab</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("tree_types")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "tree_types"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <GitBranch size={15} />
                <span>2. Classification vs Regression Leaves</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("pruning_sim")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "pruning_sim"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Scissors size={15} />
                <span>3. Pre- &amp; Post-Pruning Explorer</span>
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

            {/* LAB 1: IMPURITY & INFORMATION GAIN LAB */}
            {activeWorkbenchTab === "impurity_lab" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
                    Interactive Workbench 01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight mt-2">
                    Shannon Entropy &amp; Gini Impurity Calculator
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Adjust the class counts in the parent node and test how candidate splits reduce entropy (Information Gain) and Gini impurity.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div>
                    <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                      Parent Positive Class (y=1): <span className="text-orange-700">{posCount}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="20"
                      value={posCount}
                      onChange={(e) => setPosCount(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                      Parent Negative Class (y=0): <span className="text-orange-700">{negCount}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="20"
                      value={negCount}
                      onChange={(e) => setNegCount(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                      Left Child Positives: <span className="text-orange-700">{Math.min(leftPos, posCount)}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max={posCount}
                      value={Math.min(leftPos, posCount)}
                      onChange={(e) => setLeftPos(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                      Left Child Negatives: <span className="text-orange-700">{Math.min(leftNeg, negCount)}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max={negCount}
                      value={Math.min(leftNeg, negCount)}
                      onChange={(e) => setLeftNeg(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>
                </div>

                {/* Impurity Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono text-stone-500 uppercase">Parent Entropy</span>
                    <div className="text-2xl font-black font-mono text-orange-700 mt-1">{impurityMetrics.parentEntropy} bits</div>
                    <div className="text-[11px] text-stone-500 mt-1">p₁={impurityMetrics.p1}, p₀={impurityMetrics.p0}</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono text-stone-500 uppercase">Parent Gini Impurity</span>
                    <div className="text-2xl font-black font-mono text-stone-900 mt-1">{impurityMetrics.parentGini}</div>
                    <div className="text-[11px] text-stone-500 mt-1">Max binary Gini = 0.500</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                    <span className="text-xs font-mono text-emerald-900 uppercase font-bold">Information Gain (IG)</span>
                    <div className="text-2xl font-black font-mono text-emerald-800 mt-1">{impurityMetrics.ig} bits</div>
                    <div className="text-[11px] text-emerald-700 mt-1">Entropy reduction</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                    <span className="text-xs font-mono text-emerald-900 uppercase font-bold">Gini Reduction</span>
                    <div className="text-2xl font-black font-mono text-emerald-800 mt-1">{impurityMetrics.giniRed}</div>
                    <div className="text-[11px] text-emerald-700 mt-1">CART criterion</div>
                  </div>
                </div>

                {/* Subtree Visualizer */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-mono text-stone-700 flex flex-col sm:flex-row justify-around gap-4">
                  <div className="p-3 bg-white rounded-xl border border-stone-200">
                    <div className="font-bold text-stone-900">Left Child Subset ({impurityMetrics.leftTotal} samples)</div>
                    <div className="mt-1">Entropy: {impurityMetrics.leftEntropy} bits | Gini: {impurityMetrics.leftGini}</div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-stone-200">
                    <div className="font-bold text-stone-900">Right Child Subset ({impurityMetrics.rightTotal} samples)</div>
                    <div className="mt-1">Entropy: {impurityMetrics.rightEntropy} bits | Gini: {impurityMetrics.rightGini}</div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: CLASSIFICATION VS REGRESSION LEAF SIMULATOR */}
            {activeWorkbenchTab === "tree_types" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
                      Interactive Workbench 02
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight mt-2">
                      Classification Mode vs. Regression Mode Leaves
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1">
                      Explore how classification leaves make predictions via majority class voting vs how regression leaves output regional means.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setTreeMode("classification")}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold cursor-pointer ${
                        treeMode === "classification"
                          ? "bg-orange-600 text-white"
                          : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                      }`}
                    >
                      Classification Mode
                    </button>
                    <button
                      onClick={() => setTreeMode("regression")}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold cursor-pointer ${
                        treeMode === "regression"
                          ? "bg-orange-600 text-white"
                          : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                      }`}
                    >
                      Regression Mode
                    </button>
                  </div>
                </div>

                {treeMode === "classification" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                      <h3 className="text-xs font-mono font-bold text-stone-700 uppercase">Leaf Class Counts</h3>
                      <div>
                        <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                          Approved Samples: <span className="text-emerald-700">{clfA}</span>
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={clfA}
                          onChange={(e) => setClfA(parseInt(e.target.value))}
                          className="w-full accent-emerald-600"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                          Rejected Samples: <span className="text-rose-700">{clfB}</span>
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={clfB}
                          onChange={(e) => setClfB(parseInt(e.target.value))}
                          className="w-full accent-rose-600"
                        />
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-orange-50 border border-orange-200 space-y-3">
                      <span className="text-xs font-mono font-bold text-orange-950 uppercase">Leaf Prediction Mechanism</span>
                      <div className="text-2xl font-black font-mono text-orange-900">
                        Predicted Class: {treeTypeMetrics.majority}
                      </div>
                      <div className="text-xs font-mono text-orange-800 space-y-1">
                        <div>P(Approved | Leaf): <strong>{treeTypeMetrics.probA}%</strong></div>
                        <div>P(Rejected | Leaf): <strong>{treeTypeMetrics.probB}%</strong></div>
                        <div>Total Observations: <strong>{treeTypeMetrics.total}</strong></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                      <h3 className="text-xs font-mono font-bold text-stone-700 uppercase">Input Property Prices in Node (₹ Lakh)</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="number"
                          value={regSample1}
                          onChange={(e) => setRegSample1(parseFloat(e.target.value) || 0)}
                          className="p-2 rounded-lg border border-stone-300 font-mono text-sm bg-white"
                        />
                        <input
                          type="number"
                          value={regSample2}
                          onChange={(e) => setRegSample2(parseFloat(e.target.value) || 0)}
                          className="p-2 rounded-lg border border-stone-300 font-mono text-sm bg-white"
                        />
                        <input
                          type="number"
                          value={regSample3}
                          onChange={(e) => setRegSample3(parseFloat(e.target.value) || 0)}
                          className="p-2 rounded-lg border border-stone-300 font-mono text-sm bg-white"
                        />
                        <input
                          type="number"
                          value={regSample4}
                          onChange={(e) => setRegSample4(parseFloat(e.target.value) || 0)}
                          className="p-2 rounded-lg border border-stone-300 font-mono text-sm bg-white"
                        />
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
                      <span className="text-xs font-mono font-bold text-emerald-950 uppercase">Regression Leaf Prediction</span>
                      <div className="text-2xl font-black font-mono text-emerald-900">
                        Predicted Value: ₹{treeTypeMetrics.mean} Lakh
                      </div>
                      <div className="text-xs font-mono text-emerald-800 space-y-1">
                        <div>Within-Node Variance (MSE): <strong>{treeTypeMetrics.mse}</strong></div>
                        <div>Decision Rule: <strong>Mean of terminal samples</strong></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* LAB 3: PRUNING COMPLEXITY EXPLORER */}
            {activeWorkbenchTab === "pruning_sim" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
                    Interactive Workbench 03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight mt-2">
                    Pre-Pruning (max_depth) vs Post-Pruning (ccp_alpha) Explorer
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Observe how tree depth and cost-complexity penalties alter tree size, training memorization, and validation generalization.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div>
                    <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                      Pre-Pruning: max_depth = <span className="text-orange-700">{maxDepth}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={maxDepth}
                      onChange={(e) => setMaxDepth(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                      Post-Pruning: ccp_alpha = <span className="text-orange-700">{ccpAlpha}</span>
                    </label>
                    <input
                      type="range"
                      min="0.000"
                      max="0.030"
                      step="0.002"
                      value={ccpAlpha}
                      onChange={(e) => setCcpAlpha(parseFloat(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono text-stone-500 uppercase">Effective Tree Depth</span>
                    <div className="text-2xl font-black font-mono text-stone-900 mt-1">{pruningMetrics.effectiveDepth} levels</div>
                    <div className="text-[11px] text-stone-500 mt-1">Root to deepest leaf</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono text-stone-500 uppercase">Terminal Leaves</span>
                    <div className="text-2xl font-black font-mono text-stone-900 mt-1">{pruningMetrics.effectiveLeaves} leaves</div>
                    <div className="text-[11px] text-stone-500 mt-1">Regions formed</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono text-stone-500 uppercase">Training Accuracy</span>
                    <div className="text-2xl font-black font-mono text-stone-900 mt-1">{pruningMetrics.trainAcc}%</div>
                    <div className="text-[11px] text-stone-500 mt-1">In-sample fit</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
                    <span className="text-xs font-mono text-orange-950 uppercase font-bold">Validation Accuracy</span>
                    <div className="text-2xl font-black font-mono text-orange-900 mt-1">{pruningMetrics.valAcc}%</div>
                    <div className="text-[11px] text-orange-800 mt-1">Generalization score</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-xs font-mono text-stone-800 flex items-center justify-between">
                  <span>Current Bias-Variance Regime:</span>
                  <span className="font-bold text-orange-700">{pruningMetrics.status}</span>
                </div>
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
                      Module 8 Knowledge Check &mdash; 10 Questions
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1">
                      Test your understanding of recursive partitioning, root/leaf roles, entropy, information gain, Gini impurity, regression trees, max_depth, and cost-complexity pruning.
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
            onClick={() => navigate("/learning/machine-learning/classification")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 7 &mdash; Classification &amp; Logistic Regression</span>
          </button>

          <button
            onClick={() => navigate("/learning/machine-learning/ensemble-learning")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs transition-colors"
          >
            <span>Next: Module 9 &mdash; Ensemble Learning &amp; Boosting Algorithms</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
