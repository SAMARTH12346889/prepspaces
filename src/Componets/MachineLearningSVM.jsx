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
  Maximize2,
  Minimize2,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import MachineLearningSVMSections from "./MachineLearningSVMSections";

export default function MachineLearningSVM() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("hyperplane_sim"); // 'hyperplane_sim' | 'kernel_lab' | 'svr_tube' | 'quiz'

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 1: MAXIMUM-MARGIN & SOFT-MARGIN HYPERPLANE SIMULATOR
  // ---------------------------------------------------------------------------
  const [cValue, setCValue] = useState(1.0); // 0.01 to 100
  const [noiseLevel, setNoiseLevel] = useState("moderate"); // 'clean' | 'moderate' | 'heavy'

  const hyperplaneMetrics = useMemo(() => {
    // Model behavior as C changes
    const c = cValue;
    const marginWidth = Math.max(0.4, Math.min(3.6, (2.8 / Math.sqrt(c + 0.1)).toFixed(2)));
    const wNorm = (2 / marginWidth).toFixed(2);

    let svCount = Math.round(Math.max(6, Math.min(38, 42 - Math.log10(c + 0.01) * 9)));
    let slackViolations = Math.max(0, Math.round(18 / (c + 0.5)));
    if (noiseLevel === "clean") {
      svCount = Math.round(svCount * 0.5);
      slackViolations = Math.round(slackViolations * 0.2);
    } else if (noiseLevel === "heavy") {
      svCount = Math.round(svCount * 1.5);
      slackViolations = Math.round(slackViolations * 2.1);
    }

    const trainAcc = Math.min(100, Math.round(82 + Math.log10(c + 0.02) * 6));
    const testAcc = Math.round(
      c < 0.1 ? 84 : c <= 5 ? 95 : Math.max(76, 95 - (c - 5) * 0.2)
    );

    let status = "Balanced Soft-Margin";
    let statusColor = "text-emerald-700 bg-emerald-50 border-emerald-200";
    if (c < 0.1) {
      status = "High Regularization (Wide Margin, High Bias)";
      statusColor = "text-amber-700 bg-amber-50 border-amber-200";
    } else if (c > 20) {
      status = "Overfitting Risk (Narrow Margin, Low Bias / High Variance)";
      statusColor = "text-rose-700 bg-rose-50 border-rose-200";
    }

    return {
      marginWidth,
      wNorm,
      svCount,
      slackViolations,
      trainAcc,
      testAcc,
      status,
      statusColor,
    };
  }, [cValue, noiseLevel]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 2: KERNEL TRICK & NON-LINEAR PROJECTION LAB
  // ---------------------------------------------------------------------------
  const [selectedKernel, setSelectedKernel] = useState("rbf"); // 'linear' | 'poly' | 'rbf' | 'sigmoid'
  const [gamma, setGamma] = useState(0.5); // 0.01 to 5.0
  const [polyDegree, setPolyDegree] = useState(3); // 2 to 5

  const kernelDetails = useMemo(() => {
    switch (selectedKernel) {
      case "linear":
        return {
          formula: "K(x, z) = xᵀz",
          spaceDim: "Original Input Dimension (D)",
          boundaryType: "Flat (D - 1) Hyperplane",
          bestFor: "High-dimensional sparse text data (TF-IDF), genomics where D > N",
          compComplexity: "O(D) dot product; extremely fast with LinearSVC",
          svFraction: "12% - 25% of samples",
          pros: "Fastest training, simple parameter w interpretation, no overfitting risk from gamma",
          cons: "Cannot separate concentric rings or complex non-linear manifolds",
        };
      case "poly":
        return {
          formula: `K(x, z) = (γ xᵀz + 1.0)^${polyDegree}`,
          spaceDim: `Combinatorial feature expansion O(D^${polyDegree})`,
          boundaryType: `Degree-${polyDegree} Polynomial Curvature`,
          bestFor: "Feature interaction modeling, image pixel relationships",
          compComplexity: `Requires tuning degree (${polyDegree}), γ (${gamma}), and coef0`,
          svFraction: `${Math.round(20 + polyDegree * 8)}% of samples`,
          pros: "Models geometric polynomial curves and cross-term interactions",
          cons: "High degrees (d > 3) frequently lead to numerical explosion and severe overfitting",
        };
      case "rbf":
        return {
          formula: `K(x, z) = exp(-${gamma} ||x - z||²)`,
          spaceDim: "Infinite-Dimensional Reproducing Kernel Hilbert Space (RKHS)",
          boundaryType: gamma > 2 ? "Multi-peak localized Gaussian islands" : "Smooth continuous contours",
          bestFor: "General-purpose non-linear classification with continuous features",
          compComplexity: "O(N² · D) pairwise distance computation via LIBSVM",
          svFraction: `${Math.round(18 + gamma * 12)}% of samples`,
          pros: "Universal approximator; models arbitrary decision boundaries without manual feature engineering",
          cons: "Mandatory feature standardization; sensitive to joint C and γ tuning",
        };
      case "sigmoid":
        return {
          formula: `K(x, z) = tanh(${gamma} xᵀz + 1.0)`,
          spaceDim: "Neural Network Multi-Layer Perceptron (MLP) Analogue",
          boundaryType: "Hyperbolic Tangent Sigmoidal S-Curves",
          bestFor: "Historical neural network baseline comparisons",
          compComplexity: "Non-positive semi-definite for certain γ values (violates Mercer's condition)",
          svFraction: "35% - 60% of samples",
          pros: "Mimics a 2-layer perceptron architecture within an SVM framework",
          cons: "Often yields unstable optimization when Mercer conditions are not satisfied",
        };
      default:
        return {};
    }
  }, [selectedKernel, gamma, polyDegree]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 3: SUPPORT VECTOR REGRESSION (SVR) ε-TUBE EXPLORER
  // ---------------------------------------------------------------------------
  const [epsilonTube, setEpsilonTube] = useState(0.2); // 0.05 to 0.8
  const [svrC, setSvrC] = useState(10.0);

  const svrMetrics = useMemo(() => {
    // 20 simulated regression points
    const points = [
      { x: 1, y: 1.2, pred: 1.15 },
      { x: 2, y: 2.1, pred: 2.05 },
      { x: 3, y: 2.8, pred: 2.9 },
      { x: 4, y: 4.2, pred: 3.8 },
      { x: 5, y: 4.9, pred: 4.75 },
      { x: 6, y: 5.3, pred: 5.6 },
      { x: 7, y: 6.8, pred: 6.5 },
      { x: 8, y: 7.2, pred: 7.3 },
      { x: 9, y: 8.9, pred: 8.2 },
      { x: 10, y: 9.1, pred: 9.05 },
      { x: 11, y: 10.4, pred: 10.0 },
      { x: 12, y: 11.2, pred: 11.0 },
      { x: 13, y: 11.8, pred: 12.0 },
      { x: 14, y: 13.5, pred: 12.9 },
      { x: 15, y: 13.9, pred: 13.9 },
      { x: 16, y: 15.1, pred: 14.8 },
      { x: 17, y: 15.6, pred: 15.7 },
      { x: 18, y: 17.2, pred: 16.6 },
      { x: 19, y: 17.8, pred: 17.5 },
      { x: 20, y: 19.5, pred: 18.5 },
    ];

    let insideCount = 0;
    let outsideCount = 0;
    let totalEpsilonLoss = 0;

    const evaluatedPoints = points.map((p) => {
      const residual = Math.abs(p.y - p.pred);
      const isInside = residual <= epsilonTube;
      const slack = Math.max(0, residual - epsilonTube);
      if (isInside) {
        insideCount++;
      } else {
        outsideCount++;
        totalEpsilonLoss += slack;
      }
      return { ...p, residual: residual.toFixed(2), isInside, slack: slack.toFixed(2) };
    });

    const sparsity = Math.round((insideCount / points.length) * 100);
    const meanEpsLoss = (totalEpsilonLoss / points.length).toFixed(3);

    return {
      evaluatedPoints,
      insideCount,
      outsideCount,
      sparsity,
      meanEpsLoss,
    };
  }, [epsilonTube, svrC]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 4: ASSESSMENT EXAM (10 QUESTIONS)
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary geometric objective of Support Vector Machines (SVM) in classification?",
      options: [
        "Minimize the mean squared error across all training observations",
        "Find the optimal separating hyperplane that maximizes the margin to the nearest class samples",
        "Greedily partition features to maximize Shannon information gain",
        "Estimate posterior class probabilities using sigmoid logistic regression",
      ],
      correct: 1,
      explanation: "SVM is a maximum-margin classifier: it seeks the separating hyperplane that maximizes the perpendicular distance (margin) between the decision boundary and the nearest observations (support vectors) from opposing classes.",
    },
    {
      id: 2,
      question: "Why are support vectors uniquely critical in a trained SVM model?",
      options: [
        "They represent points that have zero dual Lagrange multipliers",
        "They are the only training observations with non-zero dual coefficients (α > 0) that directly define the boundary",
        "They represent extreme outliers that must be deleted before prediction",
        "They are synthetic centroids generated by k-means clustering",
      ],
      correct: 1,
      explanation: "Under the Karush-Kuhn-Tucker (KKT) conditions, only observations lying on or violating the margin have non-zero Lagrange multipliers (dual coefficients α_i > 0). Moving any other data point leaves the decision boundary unchanged.",
    },
    {
      id: 3,
      question: "For a hyperplane w^T x + b = 0, what is the total geometric margin width between the positive and negative margin boundaries?",
      options: ["2 / ||w||", "||w|| / 2", "1 / ||w||^2", "2 * ||w||^2"],
      correct: 0,
      explanation: "The distance between the positive margin (w^T x + b = +1) and negative margin (w^T x + b = -1) is 2 / ||w||. Maximizing 2 / ||w|| is mathematically equivalent to minimizing (1/2) ||w||^2.",
    },
    {
      id: 4,
      question: "What does a slack variable ξ_i > 1 indicate in a Soft-Margin SVM?",
      options: [
        "The observation lies strictly on the positive margin boundary",
        "The observation is correctly classified and situated inside the margin",
        "The observation is misclassified on the wrong side of the decision boundary",
        "The observation has been pruned by sequential minimal optimization",
      ],
      correct: 2,
      explanation: "When ξ_i = 0, the point is correctly classified outside or on the margin. When 0 < ξ_i ≤ 1, the point is inside the margin but still on the correct side of the boundary. When ξ_i > 1, the observation crosses the decision boundary and is misclassified.",
    },
    {
      id: 5,
      question: "How does Hinge Loss evaluate an observation with y · f(x) = 1.5?",
      options: ["Loss = 0", "Loss = 0.5", "Loss = 1.5", "Loss = -0.5"],
      correct: 0,
      explanation: "Hinge loss is defined as L(y, f(x)) = max(0, 1 - y · f(x)). For y · f(x) = 1.5, L = max(0, 1 - 1.5) = max(0, -0.5) = 0. The point is correctly classified with margin to spare, incurring zero penalty.",
    },
    {
      id: 6,
      question: "In Scikit-learn's SVC, what is the practical effect of setting a very large C (e.g., C = 1000)?",
      options: [
        "Heavy regularization, yielding a wider margin that tolerates many training misclassifications",
        "Strict penalty for margin violations, resulting in a narrower margin and higher risk of overfitting",
        "Automatic conversion of SVC into an unsupervised clustering algorithm",
        "Forcing all Lagrange multipliers α_i to equal zero",
      ],
      correct: 1,
      explanation: "C is the penalty multiplier for slack violations (C Σ ξ_i). A very high C penalizes margin violations severely, forcing the optimizer to fit a narrow margin that accommodates noisy training samples, risking overfitting.",
    },
    {
      id: 7,
      question: "What is the primary computational advantage of the 'Kernel Trick'?",
      options: [
        "It eliminates the need for calculating dot products between observations",
        "It computes inner products in high-dimensional feature space K(x, z) = ⟨φ(x), φ(z)⟩ without explicitly calculating transformed coordinates φ(x)",
        "It guarantees that decision boundaries will always be flat linear planes",
        "It converts continuous numerical features into binary one-hot encodings",
      ],
      correct: 1,
      explanation: "The Kernel Trick replaces explicit non-linear mappings φ(x) with a kernel function K(x, z) = φ(x)^T φ(z). This allows SVMs to learn complex non-linear boundaries in infinite-dimensional Hilbert spaces with O(n) dot products.",
    },
    {
      id: 8,
      question: "In the Radial Basis Function (RBF) kernel K(x, z) = exp(-γ ||x - z||^2), what occurs when gamma (γ) is set extremely high?",
      options: [
        "Each training point exerts wide regional influence, creating an overly smooth, underfitting boundary",
        "Each training point has a very narrow, localized radius of influence, creating isolated decision islands and overfitting",
        "The kernel degenerates into a linear dot product",
        "All support vectors are eliminated",
      ],
      correct: 1,
      explanation: "Gamma controls the inverse radius of influence. High gamma means the Gaussian bell curve drops off sharply with distance, causing support vectors to exert only hyper-localized influence, leading to island-like boundaries and severe overfitting.",
    },
    {
      id: 9,
      question: "How does Support Vector Regression (SVR) utilize the epsilon (ε) hyperparameter?",
      options: [
        "It sets the learning rate for stochastic gradient descent",
        "It defines the width of an ε-insensitive tube where residuals |y - ŷ| ≤ ε incur zero loss",
        "It specifies the maximum tree depth for base estimators",
        "It sets the L1 regularization penalty",
      ],
      correct: 1,
      explanation: "SVR uses an ε-insensitive loss function: errors smaller than ε are ignored (loss = 0). Only observations outside the tube |y - ŷ| > ε incur penalties proportional to their distance from the tube boundaries.",
    },
    {
      id: 10,
      question: "When should LinearSVC be preferred over SVC(kernel='linear')?",
      options: [
        "When dealing with small datasets requiring non-linear RBF boundaries",
        "When training on large-scale datasets (N > 50,000) because LinearSVC uses LIBLINEAR with O(N) scaling instead of LIBSVM's O(N² to N³)",
        "When the target variable is continuous and requires SVR",
        "When automatic probability calibration via Platt scaling is mandatory",
      ],
      correct: 1,
      explanation: "SVC is backed by LIBSVM, which scales quadratically to cubically with sample count O(N²–N³). LinearSVC uses LIBLINEAR with coordinate descent / trust region methods, scaling linearly O(N), making it drastically faster for large linear problems.",
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
      <ModuleNav track="machine-learning" currentModuleId="svm" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Badge & Title */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-orange-600" />
              Machine Learning Track &bull; Module 10
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              23 COMPREHENSIVE SECTIONS &middot; DUAL OPTIMIZATION &amp; KERNELS
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 10 &mdash; Support Vector Machines (SVM)
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Master maximum-margin hyperplane classification and Support Vector Regression (SVR). Understand support vectors with non-zero dual Lagrange multipliers, Hard vs Soft-Margin formulations with slack variables (&xi;), Hinge loss optimization, regularization trade-offs with C, the non-linear Kernel Trick (Linear, Polynomial, RBF, Sigmoid), &epsilon;-insensitive error tubes, and Scikit-learn LinearSVC vs SVC pipeline architectures.
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

        {/* TAB 1: CURRICULUM */}
        {activeTab === "curriculum" && <MachineLearningSVMSections />}

        {/* TAB 2: INTERACTIVE WORKBENCHES */}
        {activeTab === "workbench" && (
          <div className="space-y-8">
            {/* Sub-workbench selector */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-stone-200/60 rounded-2xl w-fit text-xs font-mono">
              <button
                onClick={() => setActiveWorkbenchTab("hyperplane_sim")}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeWorkbenchTab === "hyperplane_sim"
                    ? "bg-white text-stone-900 font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                1. Hyperplane &amp; Margin Simulator
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("kernel_lab")}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeWorkbenchTab === "kernel_lab"
                    ? "bg-white text-stone-900 font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                2. Kernel Trick &amp; Non-linear Lab
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("svr_tube")}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeWorkbenchTab === "svr_tube"
                    ? "bg-white text-stone-900 font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                3. SVR &Epsilon;-Insensitive Tube
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-white text-stone-900 font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                4. Module 10 Assessment Exam
              </button>
            </div>

            {/* BENCH 1: HYPERPLANE & MARGIN SIMULATOR */}
            {activeWorkbenchTab === "hyperplane_sim" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">
                      Maximum-Margin &amp; Soft-Margin Hyperplane Simulator
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Adjust regularization penalty C to observe the geometric trade-off between margin width 2/||w||, slack violations, and support vector density.
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${hyperplaneMetrics.statusColor}`}>
                    {hyperplaneMetrics.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="space-y-5 bg-stone-50 p-5 rounded-2xl border border-stone-200">
                    <div>
                      <div className="flex justify-between text-xs font-mono font-bold mb-1">
                        <span>Penalty Parameter C:</span>
                        <span className="text-orange-700">{cValue}</span>
                      </div>
                      <input
                        type="range"
                        min="0.01"
                        max="50"
                        step="0.5"
                        value={cValue}
                        onChange={(e) => setCValue(parseFloat(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                        <span>0.01 (Wider margin / High Bias)</span>
                        <span>50 (Narrow margin / Overfit)</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-stone-700 mb-2">
                        Dataset Boundary Noise:
                      </label>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {["clean", "moderate", "heavy"].map((mode) => (
                          <button
                            key={mode}
                            onClick={() => setNoiseLevel(mode)}
                            className={`py-2 rounded-xl font-bold capitalize cursor-pointer border ${
                              noiseLevel === mode
                                ? "bg-stone-900 text-white border-stone-900"
                                : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-200 space-y-2 text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Margin Width (2 / ||w||):</span>
                        <span className="font-bold text-stone-900">{hyperplaneMetrics.marginWidth} units</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Weight Vector Norm (||w||):</span>
                        <span className="font-bold text-stone-900">{hyperplaneMetrics.wNorm}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Support Vectors (α &gt; 0):</span>
                        <span className="font-bold text-orange-700">{hyperplaneMetrics.svCount} samples</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Slack Violations (Σ ξ):</span>
                        <span className="font-bold text-rose-700">{hyperplaneMetrics.slackViolations}</span>
                      </div>
                    </div>
                  </div>

                  {/* SVG Geometric Visualization */}
                  <div className="lg:col-span-2 bg-[#1c1917] p-5 rounded-2xl border border-stone-800 text-white flex flex-col justify-between">
                    <div className="flex justify-between items-center text-xs font-mono mb-2">
                      <span className="text-orange-400 font-bold"># SVM Decision Space &amp; Margin Geometry</span>
                      <span className="text-stone-400">wᵀx + b = 0 &bull; Margin = {hyperplaneMetrics.marginWidth}</span>
                    </div>

                    <div className="relative w-full h-64 bg-stone-900/60 rounded-xl border border-stone-800 overflow-hidden flex items-center justify-center">
                      <svg viewBox="0 0 400 240" className="w-full h-full">
                        {/* Shaded Margin Strip */}
                        <polygon
                          points={`0,${120 - hyperplaneMetrics.marginWidth * 18} 400,${40 - hyperplaneMetrics.marginWidth * 18} 400,${40 + hyperplaneMetrics.marginWidth * 18} 0,${120 + hyperplaneMetrics.marginWidth * 18}`}
                          fill="rgba(249, 115, 22, 0.12)"
                        />

                        {/* Positive Margin Line (w^T x + b = +1) */}
                        <line
                          x1="0"
                          y1={120 - hyperplaneMetrics.marginWidth * 18}
                          x2="400"
                          y2={40 - hyperplaneMetrics.marginWidth * 18}
                          stroke="#38bdf8"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                        />

                        {/* Decision Boundary Hyperplane (w^T x + b = 0) */}
                        <line
                          x1="0"
                          y1="120"
                          x2="400"
                          y2="40"
                          stroke="#f97316"
                          strokeWidth="2.5"
                        />

                        {/* Negative Margin Line (w^T x + b = -1) */}
                        <line
                          x1="0"
                          y1={120 + hyperplaneMetrics.marginWidth * 18}
                          x2="400"
                          y2={40 + hyperplaneMetrics.marginWidth * 18}
                          stroke="#fb923c"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                        />

                        {/* Data Points: Class A (Blue circles) */}
                        <circle cx="80" cy="50" r="5" fill="#38bdf8" />
                        <circle cx="120" cy="30" r="5" fill="#38bdf8" />
                        <circle cx="200" cy="35" r="5" fill="#38bdf8" />
                        <circle cx="280" cy="20" r="5" fill="#38bdf8" />
                        {/* Class A Support Vectors (Circled) */}
                        <circle cx="150" cy={120 - hyperplaneMetrics.marginWidth * 18} r="8" fill="none" stroke="#38bdf8" strokeWidth="2" />
                        <circle cx="150" cy={120 - hyperplaneMetrics.marginWidth * 18} r="4" fill="#38bdf8" />
                        <circle cx="310" cy={40 - hyperplaneMetrics.marginWidth * 18} r="8" fill="none" stroke="#38bdf8" strokeWidth="2" />
                        <circle cx="310" cy={40 - hyperplaneMetrics.marginWidth * 18} r="4" fill="#38bdf8" />

                        {/* Data Points: Class B (Orange squares) */}
                        <rect x="75" y="170" width="10" height="10" fill="#fb923c" />
                        <rect x="180" y="180" width="10" height="10" fill="#fb923c" />
                        <rect x="260" y="160" width="10" height="10" fill="#fb923c" />
                        <rect x="330" y="140" width="10" height="10" fill="#fb923c" />
                        {/* Class B Support Vectors (Circled) */}
                        <circle cx="110" cy={120 + hyperplaneMetrics.marginWidth * 18} r="8" fill="none" stroke="#fb923c" strokeWidth="2" />
                        <rect x="105" y={115 + hyperplaneMetrics.marginWidth * 18} width="10" height="10" fill="#fb923c" />
                        <circle cx="240" cy={40 + hyperplaneMetrics.marginWidth * 18} r="8" fill="none" stroke="#fb923c" strokeWidth="2" />
                        <rect x="235" y={35 + hyperplaneMetrics.marginWidth * 18} width="10" height="10" fill="#fb923c" />

                        {/* Labels */}
                        <text x="15" y="105" fill="#f97316" fontSize="11" fontFamily="monospace">Hyperplane: wᵀx+b=0</text>
                        <text x="15" y={105 - hyperplaneMetrics.marginWidth * 18} fill="#38bdf8" fontSize="10" fontFamily="monospace">Positive Margin (+1)</text>
                        <text x="15" y={140 + hyperplaneMetrics.marginWidth * 18} fill="#fb923c" fontSize="10" fontFamily="monospace">Negative Margin (-1)</text>
                      </svg>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-4 text-xs font-mono">
                      <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
                        <span className="text-stone-400 block">Training Accuracy:</span>
                        <span className="text-base font-bold text-emerald-400">{hyperplaneMetrics.trainAcc}%</span>
                      </div>
                      <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
                        <span className="text-stone-400 block">Generalization (Test Acc):</span>
                        <span className="text-base font-bold text-orange-400">{hyperplaneMetrics.testAcc}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* BENCH 2: KERNEL TRICK & NON-LINEAR LAB */}
            {activeWorkbenchTab === "kernel_lab" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    Kernel Trick &amp; Non-linear Projection Lab
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Compare inner product mappings across Linear, Polynomial, Radial Basis Function (RBF), and Sigmoid kernels.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "linear", label: "Linear Kernel" },
                    { id: "poly", label: "Polynomial Kernel" },
                    { id: "rbf", label: "RBF (Gaussian) Kernel" },
                    { id: "sigmoid", label: "Sigmoid Kernel" },
                  ].map((k) => (
                    <button
                      key={k.id}
                      onClick={() => setSelectedKernel(k.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold cursor-pointer transition-all border ${
                        selectedKernel === k.id
                          ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                          : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                      }`}
                    >
                      {k.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Parameter sliders */}
                  <div className="space-y-4 bg-stone-50 p-5 rounded-2xl border border-stone-200 text-xs font-mono">
                    <h4 className="font-bold text-stone-900 text-sm font-sans">Active Kernel Hyperparameters</h4>

                    {selectedKernel !== "linear" && (
                      <div>
                        <div className="flex justify-between font-bold mb-1">
                          <span>Gamma (&gamma;):</span>
                          <span className="text-orange-700">{gamma}</span>
                        </div>
                        <input
                          type="range"
                          min="0.01"
                          max="3.0"
                          step="0.05"
                          value={gamma}
                          onChange={(e) => setGamma(parseFloat(e.target.value))}
                          className="w-full accent-orange-600 cursor-pointer"
                        />
                        <span className="text-[10px] text-stone-500 block mt-1 font-sans">
                          {gamma < 0.2 ? "Wide influence radius (Smooth boundary)" : gamma > 1.5 ? "Localized Gaussian islands (High variance)" : "Optimal balanced influence radius"}
                        </span>
                      </div>
                    )}

                    {selectedKernel === "poly" && (
                      <div>
                        <div className="flex justify-between font-bold mb-1">
                          <span>Polynomial Degree (d):</span>
                          <span className="text-orange-700">{polyDegree}</span>
                        </div>
                        <input
                          type="range"
                          min="2"
                          max="5"
                          step="1"
                          value={polyDegree}
                          onChange={(e) => setPolyDegree(parseInt(e.target.value))}
                          className="w-full accent-orange-600 cursor-pointer"
                        />
                      </div>
                    )}

                    <div className="pt-3 border-t border-stone-200 space-y-1 text-stone-600 font-sans">
                      <div><strong>Active Kernel Formula:</strong></div>
                      <div className="font-mono bg-white p-2 rounded-lg border border-stone-200 text-orange-700">
                        {kernelDetails.formula}
                      </div>
                    </div>
                  </div>

                  {/* Mathematical & Architectural Card */}
                  <div className="md:col-span-2 space-y-3">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                      <span className="font-mono text-stone-400 uppercase text-[10px] block">Transformed Space Representation</span>
                      <span className="font-bold text-stone-900 text-sm block mt-0.5">{kernelDetails.spaceDim}</span>
                      <p className="text-stone-600 mt-1">
                        <strong>Decision Boundary Geometry:</strong> {kernelDetails.boundaryType}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200">
                        <span className="font-bold text-emerald-950 block mb-1">Core Strengths</span>
                        <p className="text-stone-600 leading-relaxed">{kernelDetails.pros}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200">
                        <span className="font-bold text-rose-950 block mb-1">Engineering Limitations</span>
                        <p className="text-stone-600 leading-relaxed">{kernelDetails.cons}</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 text-xs font-mono">
                      <div className="text-orange-400 font-bold mb-1">Recommended Production Usage:</div>
                      <div>{kernelDetails.bestFor}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* BENCH 3: SUPPORT VECTOR REGRESSION (SVR) ε-TUBE */}
            {activeWorkbenchTab === "svr_tube" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    Support Vector Regression (SVR) &Epsilon;-Insensitive Tube Explorer
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Observe how errors inside the &plusmn;&epsilon; tube incur zero penalty, while observations outside act as support vectors contributing to the dual prediction.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="space-y-4 bg-stone-50 p-5 rounded-2xl border border-stone-200 text-xs font-mono">
                    <div>
                      <div className="flex justify-between font-bold mb-1">
                        <span>Tube Width &Epsilon; (epsilon):</span>
                        <span className="text-orange-700">&plusmn;{epsilonTube}</span>
                      </div>
                      <input
                        type="range"
                        min="0.05"
                        max="0.8"
                        step="0.05"
                        value={epsilonTube}
                        onChange={(e) => setEpsilonTube(parseFloat(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                        <span>0.05 (Tight tube / Many SVs)</span>
                        <span>0.80 (Wide tube / High Sparsity)</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-200 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-stone-500">In-Tube Points (Zero Loss):</span>
                        <span className="font-bold text-emerald-700">{svrMetrics.insideCount} / 20</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Support Vectors (Slack &gt; 0):</span>
                        <span className="font-bold text-rose-700">{svrMetrics.outsideCount} / 20</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Dual Solution Sparsity:</span>
                        <span className="font-bold text-stone-900">{svrMetrics.sparsity}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Mean &Epsilon;-Insensitive Loss:</span>
                        <span className="font-bold text-orange-700">{svrMetrics.meanEpsLoss}</span>
                      </div>
                    </div>
                  </div>

                  {/* SVR SVG Visualization */}
                  <div className="lg:col-span-2 bg-[#1c1917] p-5 rounded-2xl border border-stone-800 text-white flex flex-col justify-between">
                    <div className="flex justify-between items-center text-xs font-mono mb-2">
                      <span className="text-orange-400 font-bold"># SVR Prediction Tube &amp; Slack Residuals</span>
                      <span className="text-stone-400">Loss = max(0, |y - &ycirc;| - {epsilonTube})</span>
                    </div>

                    <div className="relative w-full h-64 bg-stone-900/60 rounded-xl border border-stone-800 overflow-hidden flex items-center justify-center">
                      <svg viewBox="0 0 420 220" className="w-full h-full">
                        {/* Shaded Epsilon Tube */}
                        <polygon
                          points={`20,${200 - 15 - epsilonTube * 45} 400,${30 - epsilonTube * 45} 400,${30 + epsilonTube * 45} 20,${200 - 15 + epsilonTube * 45}`}
                          fill="rgba(34, 197, 94, 0.15)"
                        />

                        {/* Upper Tube Boundary: f(x) + epsilon */}
                        <line
                          x1="20"
                          y1={185 - epsilonTube * 45}
                          x2="400"
                          y2={30 - epsilonTube * 45}
                          stroke="#22c55e"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                        />

                        {/* Fitted Regression Line: f(x) */}
                        <line
                          x1="20"
                          y1="185"
                          x2="400"
                          y2="30"
                          stroke="#f97316"
                          strokeWidth="2.5"
                        />

                        {/* Lower Tube Boundary: f(x) - epsilon */}
                        <line
                          x1="20"
                          y1={185 + epsilonTube * 45}
                          x2="400"
                          y2={30 + epsilonTube * 45}
                          stroke="#22c55e"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                        />

                        {/* Points */}
                        {svrMetrics.evaluatedPoints.map((pt, i) => {
                          const cx = 20 + pt.x * 19;
                          const cy = 200 - pt.y * 9.5;
                          const predY = 200 - pt.pred * 9.5;

                          return (
                            <g key={i}>
                              {!pt.isInside && (
                                <line
                                  x1={cx}
                                  y1={cy}
                                  x2={cx}
                                  y2={predY + (pt.y > pt.pred ? -epsilonTube * 45 : epsilonTube * 45)}
                                  stroke="#f43f5e"
                                  strokeWidth="1.5"
                                  strokeDasharray="2 2"
                                />
                              )}
                              <circle
                                cx={cx}
                                cy={cy}
                                r={pt.isInside ? 4 : 5.5}
                                fill={pt.isInside ? "#22c55e" : "#f43f5e"}
                                stroke={pt.isInside ? "none" : "#ffffff"}
                                strokeWidth="1.5"
                              />
                            </g>
                          );
                        })}

                        <text x="30" y="30" fill="#22c55e" fontSize="10" fontFamily="monospace">Upper Tube (+&epsilon;)</text>
                        <text x="30" y="55" fill="#f97316" fontSize="11" fontFamily="monospace">f(x) SVR Predictor</text>
                        <text x="30" y="80" fill="#22c55e" fontSize="10" fontFamily="monospace">Lower Tube (-&epsilon;)</text>
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-stone-400 mt-2">
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> Green = Inside Tube (0 Loss)</span>
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span> Red = Support Vector (Slack Penalty &xi;)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* BENCH 4: ASSESSMENT EXAM */}
            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">
                      Module 10 Support Vector Machines Assessment
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Verify your mastery of SVM geometry, dual formulations, slack variables, and kernel tricks.
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
            onClick={() => navigate("/learning/machine-learning/ensemble-learning")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 9 &mdash; Ensemble Learning &amp; Boosting</span>
          </button>

          <button
            onClick={() => navigate("/learning/machine-learning/knn-naive-bayes")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs transition-colors"
          >
            <span>Next: Module 11 &mdash; KNN &amp; Naive Bayes</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
