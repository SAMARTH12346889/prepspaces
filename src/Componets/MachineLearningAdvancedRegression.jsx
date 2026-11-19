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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import MachineLearningAdvancedRegressionSections from "./MachineLearningAdvancedRegressionSections";

export default function MachineLearningAdvancedRegression() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("poly_simulator"); // 'poly_simulator' | 'regularization' | 'bias_variance' | 'quiz'
  const [copiedCode, setCopiedCode] = useState(false);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 1: POLYNOMIAL DEGREE & OVERFITTING SIMULATOR
  // ---------------------------------------------------------------------------
  const [polyDegree, setPolyDegree] = useState(2);

  const polyData = useMemo(() => {
    const stats = {
      1: { trainRmse: 4.82, testRmse: 4.95, params: 2, status: "Underfitting (High Bias)", desc: "Straight line misses underlying quadratic curvature." },
      2: { trainRmse: 2.15, testRmse: 2.24, params: 3, status: "Optimal Balance", desc: "Captures true quadratic curve without memorizing sample noise." },
      3: { trainRmse: 2.08, testRmse: 2.31, params: 4, status: "Acceptable Fit", desc: "Slight cubic inflection with minimal generalization penalty." },
      5: { trainRmse: 1.62, testRmse: 3.45, params: 6, status: "Mild Overfitting", desc: "Begins fitting boundary noise; test error diverges." },
      8: { trainRmse: 0.94, testRmse: 7.82, params: 9, status: "Severe Overfitting", desc: "Wild oscillations between points; massive test failure." },
      12: { trainRmse: 0.22, testRmse: 24.15, params: 13, status: "Catastrophic Overfit (High Variance)", desc: "Near-zero train error; extreme Runge phenomenon oscillations." },
    };
    return stats[polyDegree] || stats[2];
  }, [polyDegree]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 2: REGULARIZATION EXPLORER (RIDGE VS LASSO VS ELASTIC NET)
  // ---------------------------------------------------------------------------
  const [regModel, setRegModel] = useState("lasso"); // 'ridge' | 'lasso' | 'elastic'
  const [alpha, setAlpha] = useState(1.0);
  const [l1Ratio, setL1Ratio] = useState(0.5);

  const regCoefficients = useMemo(() => {
    const baseFeatures = [
      { name: "Area (sqft)", trueWeight: 5200 },
      { name: "Bedrooms", trueWeight: 350000 },
      { name: "Age (years)", trueWeight: -28000 },
      { name: "Distance to Center", trueWeight: -110000 },
      { name: "Nearby Parks (Noise)", trueWeight: 150 },
      { name: "Decorative Score (Noise)", trueWeight: -80 },
    ];

    return baseFeatures.map((f) => {
      let weight = f.trueWeight;
      const isNoise = f.name.includes("Noise");

      if (regModel === "ridge") {
        const factor = 1 / (1 + alpha * (isNoise ? 0.8 : 0.15));
        weight = Math.round(weight * factor);
      } else if (regModel === "lasso") {
        const threshold = alpha * (isNoise ? 120 : 35000);
        if (Math.abs(weight) <= threshold) {
          weight = 0;
        } else {
          weight = Math.round(weight > 0 ? weight - threshold : weight + threshold);
        }
      } else {
        // Elastic Net
        const l1Shrink = alpha * l1Ratio * (isNoise ? 100 : 25000);
        const l2Factor = 1 / (1 + alpha * (1 - l1Ratio) * (isNoise ? 0.6 : 0.1));
        if (Math.abs(weight) <= l1Shrink) {
          weight = 0;
        } else {
          const afterL1 = weight > 0 ? weight - l1Shrink : weight + l1Shrink;
          weight = Math.round(afterL1 * l2Factor);
        }
      }
      return { ...f, currentWeight: weight };
    });
  }, [regModel, alpha, l1Ratio]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 3: BIAS-VARIANCE COMPLEXITY EXPLORER
  // ---------------------------------------------------------------------------
  const [complexitySlider, setComplexitySlider] = useState(45); // 0 to 100

  const biasVarianceMetrics = useMemo(() => {
    const c = complexitySlider / 100;
    // Bias drops with complexity, variance increases with complexity
    const biasSq = Math.round(Math.pow(1 - c, 2) * 50 * 10) / 10;
    const variance = Math.round(Math.pow(c, 2.5) * 60 * 10) / 10;
    const noise = 8.0;
    const expectedError = Math.round((biasSq + variance + noise) * 10) / 10;

    let regime = "Balanced Optimal Generalization";
    if (c < 0.3) regime = "High Bias Regime (Underfitting)";
    else if (c > 0.65) regime = "High Variance Regime (Overfitting)";

    return { biasSq, variance, noise, expectedError, regime };
  }, [complexitySlider]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 4: MODULE 6 ASSESSMENT QUIZ
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the main purpose of polynomial regression?",
      options: [
        "Convert regression into classification",
        "Represent curved relationships using transformed features",
        "Remove all numerical features",
        "Automatically normalize every feature",
      ],
      correct: 1,
      explanation: "Polynomial regression introduces powers and interaction terms of independent variables, allowing linear algorithms to model curved non-linear patterns.",
    },
    {
      id: 2,
      question: "Why is polynomial regression still considered linear in its parameters?",
      options: [
        "It has no coefficients",
        "It is linear in its coefficients even though features contain powers",
        "It only works with straight lines",
        "It uses only categorical variables",
      ],
      correct: 1,
      explanation: "Even though features are raised to non-linear powers (e.g. x²), the hypothesis function remains a linear combination of the unknown parameters β.",
    },
    {
      id: 3,
      question: "Which penalty does Ridge regression use?",
      options: ["L1", "L2", "No penalty", "Classification loss"],
      correct: 1,
      explanation: "Ridge regression penalizes the sum of squared coefficient magnitudes (L2 norm: α Σ β_j²), shrinking weights smoothly toward zero.",
    },
    {
      id: 4,
      question: "Which method can shrink coefficients exactly to zero?",
      options: ["Ordinary Linear Regression", "Ridge only", "Lasso", "StandardScaler"],
      correct: 2,
      explanation: "Lasso uses an L1 penalty (α Σ |β_j|) whose diamond geometry frequently forces corner solutions on axes, driving non-essential coefficients to exact zero.",
    },
    {
      id: 5,
      question: "What does Elastic Net combine?",
      options: ["MAE and RMSE", "L1 and L2 penalties", "Training and test datasets", "Pandas and NumPy"],
      correct: 1,
      explanation: "Elastic Net incorporates both L1 (Lasso) and L2 (Ridge) penalties, providing sparse feature selection while stably grouping correlated predictors.",
    },
    {
      id: 6,
      question: "Why should features generally be scaled before Ridge and Lasso?",
      options: [
        "To make all coefficients equal",
        "To ensure feature units do not unfairly determine coefficient penalties",
        "To remove missing rows automatically",
        "To increase the dataset size",
      ],
      correct: 1,
      explanation: "Regularization penalizes weight magnitudes regardless of feature units; without standardization, features with larger measurement scales are unfairly penalized.",
    },
    {
      id: 7,
      question: "What does multicollinearity describe?",
      options: [
        "Highly correlated or linearly dependent explanatory features",
        "Missing target values",
        "A categorical target",
        "An unusually large residual",
      ],
      correct: 0,
      explanation: "Multicollinearity occurs when two or more independent features contain redundant linear information, inflating coefficient standard errors and destabilizing estimates.",
    },
    {
      id: 8,
      question: "Which technique repeatedly removes less important features based on a fitted estimator?",
      options: ["RFE", "KDE", "Pandas GroupBy", "Min-Max Encoding"],
      correct: 0,
      explanation: "Recursive Feature Elimination (RFE) iteratively fits an estimator, ranks feature importances or coefficients, and prunes the weakest predictors.",
    },
    {
      id: 9,
      question: "What is a common symptom of overfitting?",
      options: [
        "High training error and high validation error only",
        "Low training error but substantially higher validation error",
        "No model coefficients",
        "All features becoming constant",
      ],
      correct: 1,
      explanation: "An overfitted model memorizes random noise in the training sample, yielding near-zero training error but high error on validation or test observations.",
    },
    {
      id: 10,
      question: "Why is cross-validation useful for regularization tuning?",
      options: [
        "It automatically removes every outlier",
        "It estimates model performance across multiple training-validation splits",
        "It guarantees zero prediction error",
        "It replaces feature engineering",
      ],
      correct: 1,
      explanation: "Cross-validation rotates data through K independent validation folds, providing an unbiased estimate of generalization error without leaking test data.",
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

  const copySnippet = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Top Module Navigation */}
      <ModuleNav track="machine-learning" currentModuleId="advanced-regression" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Badge & Title */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-orange-600" />
              Machine Learning Track &bull; Module 06
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              23 COMPLETE SECTIONS &middot; ADVANCED REGULARIZATION
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 6 &mdash; Advanced Regression &amp; Regularization
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Master nonlinear feature engineering and complexity control. Build polynomial regression models, implement Ridge (L2), Lasso (L1), and Elastic Net, investigate multicollinearity with VIF, execute leak-free cross-validation with GridSearchCV, and balance the bias-variance tradeoff.
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
        {activeTab === "curriculum" && <MachineLearningAdvancedRegressionSections />}

        {/* TAB 2: INTERACTIVE WORKBENCHES */}
        {activeTab === "workbench" && (
          <div className="space-y-8">
            {/* Sub-workbench selector */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-stone-200/60 rounded-2xl w-fit text-xs font-mono">
              <button
                onClick={() => setActiveWorkbenchTab("poly_simulator")}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeWorkbenchTab === "poly_simulator"
                    ? "bg-white text-stone-900 font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                1. Polynomial Flexibility
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("regularization")}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeWorkbenchTab === "regularization"
                    ? "bg-white text-stone-900 font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                2. Ridge vs Lasso vs Elastic Net
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("bias_variance")}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeWorkbenchTab === "bias_variance"
                    ? "bg-white text-stone-900 font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                3. Bias-Variance Curve
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-white text-stone-900 font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                4. Knowledge Assessment
              </button>
            </div>

            {/* BENCH 1: POLYNOMIAL SIMULATOR */}
            {activeWorkbenchTab === "poly_simulator" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    Polynomial Degree &amp; Overfitting Simulator
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Select a polynomial degree to observe how feature complexity impacts training error versus out-of-sample generalization error.
                  </p>
                </div>

                {/* Degree Selector Buttons */}
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 5, 8, 12].map((deg) => (
                    <button
                      key={deg}
                      onClick={() => setPolyDegree(deg)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                        polyDegree === deg
                          ? "bg-orange-600 text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      Degree {deg} {deg === 2 && "(Optimal)"}
                    </button>
                  ))}
                </div>

                {/* Metrics Card */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 font-mono uppercase">Training RMSE</span>
                    <div className="text-xl font-black text-stone-900 font-mono mt-1">
                      {polyData.trainRmse.toFixed(2)}
                    </div>
                    <span className="text-[11px] text-stone-500">In-sample fit</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 font-mono uppercase">Testing RMSE</span>
                    <div className={`text-xl font-black font-mono mt-1 ${polyData.testRmse > 5 ? "text-rose-600" : "text-emerald-700"}`}>
                      {polyData.testRmse.toFixed(2)}
                    </div>
                    <span className="text-[11px] text-stone-500">Generalization on unseen data</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs text-stone-500 font-mono uppercase">Model Parameters</span>
                    <div className="text-xl font-black text-orange-700 font-mono mt-1">
                      {polyData.params} weights
                    </div>
                    <span className="text-[11px] text-stone-500">β₀ + β₁x + ... + β_d x^d</span>
                  </div>
                </div>

                {/* Status Box */}
                <div className={`p-4 rounded-2xl border text-xs sm:text-sm ${
                  polyData.status.includes("Optimal")
                    ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                    : polyData.status.includes("Underfitting")
                    ? "bg-amber-50 border-amber-200 text-amber-950"
                    : "bg-rose-50 border-rose-200 text-rose-950"
                }`}>
                  <div className="font-bold flex items-center gap-2">
                    <Activity size={16} />
                    <span>Status: {polyData.status}</span>
                  </div>
                  <p className="mt-1 text-xs opacity-90">{polyData.desc}</p>
                </div>
              </div>
            )}

            {/* BENCH 2: REGULARIZATION EXPLORER */}
            {activeWorkbenchTab === "regularization" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    Regularization Penalty Explorer: Ridge vs Lasso vs Elastic Net
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Compare how L2 shrinkage (Ridge) keeps all coefficients smooth, whereas L1 shrinkage (Lasso) forces noise features to exact zero.
                  </p>
                </div>

                {/* Algorithm Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "ridge", name: "Ridge Regression (L2)", desc: "Shrinks weights smoothly; retains all features." },
                    { id: "lasso", name: "Lasso Regression (L1)", desc: "Drives uninformative weights to exact 0." },
                    { id: "elastic", name: "Elastic Net (L1 + L2)", desc: "Balances sparsity and correlated groups." },
                  ].map((alg) => (
                    <button
                      key={alg.id}
                      onClick={() => setRegModel(alg.id)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        regModel === alg.id
                          ? "border-orange-500 bg-orange-50/50 shadow-xs"
                          : "border-stone-200 hover:border-stone-300 bg-white"
                      }`}
                    >
                      <div className="font-bold text-xs text-stone-900">{alg.name}</div>
                      <div className="text-[11px] text-stone-500 mt-1 leading-snug">{alg.desc}</div>
                    </button>
                  ))}
                </div>

                {/* Alpha Slider */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                  <div className="flex justify-between font-bold text-stone-900">
                    <span>Regularization Strength (α / Lambda):</span>
                    <span className="font-mono text-orange-700">{alpha.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.05"
                    max="10.0"
                    step="0.05"
                    value={alpha}
                    onChange={(e) => setAlpha(parseFloat(e.target.value))}
                    className="w-full cursor-pointer accent-orange-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                    <span>0.05 (OLS-like)</span>
                    <span>5.0 (Moderate Shrinkage)</span>
                    <span>10.0 (Strong Penalty)</span>
                  </div>
                </div>

                {regModel === "elastic" && (
                  <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-2 text-xs">
                    <div className="flex justify-between font-bold text-purple-950">
                      <span>Elastic Net L1 Ratio (r):</span>
                      <span className="font-mono text-purple-700">{l1Ratio.toFixed(2)} ({l1Ratio * 100}% L1, {(1 - l1Ratio) * 100}% L2)</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="0.9"
                      step="0.05"
                      value={l1Ratio}
                      onChange={(e) => setL1Ratio(parseFloat(e.target.value))}
                      className="w-full cursor-pointer accent-purple-600"
                    />
                  </div>
                )}

                {/* Coefficients Table */}
                <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                      <tr>
                        <th className="p-3">Feature Name</th>
                        <th className="p-3">Unconstrained OLS</th>
                        <th className="p-3">Regularized Weight (β)</th>
                        <th className="p-3">Sparsity Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700">
                      {regCoefficients.map((f, i) => (
                        <tr key={i} className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">{f.name}</td>
                          <td className="p-3">{f.trueWeight.toLocaleString()}</td>
                          <td className="p-3 font-bold text-stone-900">{f.currentWeight.toLocaleString()}</td>
                          <td className="p-3">
                            {f.currentWeight === 0 ? (
                              <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-bold text-[10px]">
                                Eliminated (0.0)
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                                Active
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* BENCH 3: BIAS-VARIANCE COMPLEXITY */}
            {activeWorkbenchTab === "bias_variance" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    Bias-Variance Tradeoff Explorer
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Expected Error = Bias² + Variance + Irreducible Noise. Adjust model complexity to see the U-shaped expected error curve.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                  <div className="flex justify-between font-bold text-stone-900">
                    <span>Model Complexity / Degrees of Freedom:</span>
                    <span className="font-mono text-orange-700">{complexitySlider}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="95"
                    value={complexitySlider}
                    onChange={(e) => setComplexitySlider(parseInt(e.target.value))}
                    className="w-full cursor-pointer accent-orange-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                    <span>Low (High Bias / Straight Line)</span>
                    <span>Balanced</span>
                    <span>High (High Variance / Overfit)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-500 block mb-1">Bias²</span>
                    <span className="text-lg font-black text-rose-600">{biasVarianceMetrics.biasSq}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-500 block mb-1">Variance</span>
                    <span className="text-lg font-black text-amber-600">{biasVarianceMetrics.variance}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-500 block mb-1">Irreducible Noise (σ²)</span>
                    <span className="text-lg font-black text-stone-600">{biasVarianceMetrics.noise}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
                    <span className="text-orange-950 font-bold block mb-1">Total Expected Loss</span>
                    <span className="text-lg font-black text-orange-700">{biasVarianceMetrics.expectedError}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-800">
                  Current Regime: <span className="font-bold text-orange-700">{biasVarianceMetrics.regime}</span>
                </div>
              </div>
            )}

            {/* BENCH 4: ASSESSMENT QUIZ */}
            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">Module 6 Knowledge Assessment</h3>
                    <p className="text-xs text-stone-500 mt-1">10 questions covering polynomial modeling, regularization, and bias-variance tradeoff.</p>
                  </div>
                  {showResults && (
                    <div className="px-4 py-2 rounded-2xl bg-orange-50 border border-orange-200 text-orange-800 font-mono text-sm font-bold">
                      Score: {calculateScore()} / {quizQuestions.length}
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q, idx) => {
                    const selected = selectedAnswers[q.id];
                    const isCorrect = selected === q.correct;

                    return (
                      <div key={q.id} className="p-5 rounded-2xl border border-stone-200/80 space-y-3">
                        <div className="font-semibold text-sm text-stone-900">
                          {idx + 1}. {q.question}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {q.options.map((opt, optIdx) => {
                            const isChosen = selected === optIdx;
                            let btnStyle = "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100";

                            if (showResults) {
                              if (optIdx === q.correct) {
                                btnStyle = "bg-emerald-100 border-emerald-300 text-emerald-900 font-bold";
                              } else if (isChosen) {
                                btnStyle = "bg-rose-100 border-rose-300 text-rose-900 font-bold";
                              }
                            } else if (isChosen) {
                              btnStyle = "bg-orange-100 border-orange-300 text-orange-900 font-bold";
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleSelectOption(q.id, optIdx)}
                                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${btnStyle}`}
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
            onClick={() => navigate("/learning/machine-learning/regression")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 5 &mdash; Regression Analysis &amp; Linear Models</span>
          </button>

          <button
            onClick={() => navigate("/learning/machine-learning/classification")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs transition-colors"
          >
            <span>Next: Module 7 &mdash; Classification &amp; Logistic Regression</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
