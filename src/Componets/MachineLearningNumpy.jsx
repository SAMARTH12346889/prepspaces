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
  Cpu,
  Database,
  Play,
  FileCode,
  CheckCircle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import MachineLearningNumpySections from "./MachineLearningNumpySections";

export default function MachineLearningNumpy() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("matrix"); // 'matrix' | 'mlops' | 'descent' | 'quiz'
  const [copiedCode, setCopiedCode] = useState(false);

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR: LIVE NUMPY GRADIENT DESCENT ENGINE
  // ---------------------------------------------------------------------------
  const [learningRate, setLearningRate] = useState(0.05);
  const [descentStep, setDescentStep] = useState(0);

  const initialPoints = [
    { x: 1, y: 3 },
    { x: 2, y: 5 },
    { x: 3, y: 7 },
    { x: 4, y: 9 },
    { x: 5, y: 11 },
  ];

  const descentData = useMemo(() => {
    // True equation: y = 2x + 1
    // Simulate steps of gradient descent
    let w = 0.0;
    let b = 0.0;
    const history = [];

    for (let i = 0; i <= 10; i++) {
      let loss = 0;
      let dw = 0;
      let db = 0;
      const n = initialPoints.length;

      initialPoints.forEach((p) => {
        const yPred = w * p.x + b;
        const err = yPred - p.y;
        loss += err * err;
        dw += (2 / n) * p.x * err;
        db += (2 / n) * err;
      });

      loss = loss / n;
      history.push({ step: i, w: Number(w.toFixed(3)), b: Number(b.toFixed(3)), loss: Number(loss.toFixed(3)) });

      w -= learningRate * dw;
      b -= learningRate * db;
    }

    return history;
  }, [learningRate]);

  // ---------------------------------------------------------------------------
  // KNOWLEDGE ASSESSMENT QUIZ (10 QUESTIONS)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "1. How does a NumPy ndarray differ in memory representation from a standard Python list?",
      options: [
        "ndarrays store heterogeneous data in linked nodes",
        "ndarrays store homogeneous typed data in a contiguous C-style memory buffer",
        "ndarrays can only store 1D data",
        "ndarrays compile Python into machine code",
      ],
      correct: 1,
      explanation:
        "An ndarray points to a contiguous block of homogeneous typed memory in C, eliminating Python object pointer overhead and cache misses.",
    },
    {
      id: 2,
      question: "2. What do NumPy 'strides' represent?",
      options: [
        "The number of CPU cycles per operation",
        "The step size in range loops",
        "The number of bytes the computer must step through in memory to reach the next element along each dimension",
        "The time delay during matrix inversion",
      ],
      correct: 2,
      explanation:
        "Strides are a tuple of bytes specifying how far to move in the linear memory buffer to advance by one index in each dimension.",
    },
    {
      id: 3,
      question: "3. What is the fundamental rule for NumPy broadcasting compatibility when comparing dimensions from right to left?",
      options: [
        "Dimensions must always be identical powers of 2",
        "Two dimensions are compatible if they are equal or if one of them is 1",
        "Both arrays must have ndim == 2",
        "The first dimension must be greater than the second",
      ],
      correct: 1,
      explanation:
        "Comparing trailing dimensions right to left, two dimensions are compatible if they are strictly equal or if either is 1.",
    },
    {
      id: 4,
      question: "4. What is the difference between the * operator and the @ operator between two 2D arrays?",
      options: [
        "* performs element-wise multiplication, while @ performs true matrix multiplication",
        "@ is element-wise multiplication, while * performs dot product",
        "Both perform identical matrix operations",
        "* is only for scalars",
      ],
      correct: 0,
      explanation:
        "In NumPy, * computes the element-wise Hadamard product, while @ (or np.matmul) executes true linear algebra matrix multiplication.",
    },
    {
      id: 5,
      question: "5. What is the difference between flatten() and ravel()?",
      options: [
        "flatten() only works on 3D arrays",
        "flatten() always allocates and returns a copy, while ravel() returns a memory-sharing view whenever possible",
        "ravel() is deprecated",
        "Neither modifies dimensions",
      ],
      correct: 1,
      explanation:
        "flatten() guarantees a newly allocated array copy; ravel() returns an uncopied view sharing the underlying buffer whenever data is contiguous.",
    },
    {
      id: 6,
      question: "6. Why should you prefer np.linalg.solve(A, b) over np.linalg.inv(A) @ b when solving linear equations?",
      options: [
        "inv() is unsupported in modern NumPy",
        "solve() uses direct decomposition, which is faster and avoids catastrophic loss of numerical precision",
        "solve() works on non-square matrices",
        "There is no performance difference",
      ],
      correct: 1,
      explanation:
        "Calculating explicit matrix inverses is numerically unstable and computationally inefficient; solve() employs LU or Cholesky decomposition.",
    },
    {
      id: 7,
      question: "7. In a 2D array representing (samples, features), which axis should you calculate mean across to get the average of each feature?",
      options: ["axis=0 (down columns across rows)", "axis=1 (across rows)", "axis=2", "axis=-2"],
      correct: 0,
      explanation:
        "axis=0 collapses the rows, returning a 1D vector with one average per feature column.",
    },
    {
      id: 8,
      question: "8. Why is np.random.default_rng() preferred over legacy np.random.seed()?",
      options: [
        "default_rng() encapsulates independent generator state rather than mutating global process state",
        "default_rng() produces true quantum randomness",
        "np.random.seed() is removed from Python 3.12",
        "default_rng() only works with integers",
      ],
      correct: 0,
      explanation:
        "default_rng() returns an isolated Generator object with modern PCG64 bit generators, avoiding shared global state issues in concurrent apps.",
    },
    {
      id: 9,
      question: "9. Why does numerically stable Softmax subtract max(x) before exponentiation?",
      options: [
        "To invert negative probabilities",
        "To prevent np.exp() floating-point overflow when logits have large values",
        "To ensure all logits sum to zero",
        "To remove missing values",
      ],
      correct: 1,
      explanation:
        "Large positive logits produce inf when exponentiated; shifting logits by subtracting max(x) preserves the ratio while preventing overflow.",
    },
    {
      id: 10,
      question: "10. What function should be used to test floating-point equality safely in NumPy?",
      options: ["a == b", "np.allclose(a, b)", "a is b", "np.equal(a, b)"],
      correct: 1,
      explanation:
        "Because floating-point representation has finite precision (e.g. 0.1 + 0.2 != 0.3), np.allclose() or np.isclose() tests within tolerance.",
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

  const handleCopyPythonCode = () => {
    const code = `import numpy as np

# 1. Synthetic Dataset Generation
rng = np.random.default_rng(42)
X = rng.uniform(500, 3000, size=(200, 1))
noise = rng.normal(0, 30, size=200)
y = 80 + 0.25 * X[:, 0] + noise

# 2. Train/Test Split
indices = rng.permutation(len(X))
split = int(0.8 * len(X))
X_train, X_test = X[indices[:split]], X[indices[split:]]
y_train, y_test = y[indices[:split]], y[indices[split:]]

# 3. Z-Score Standardization (Fit on train, apply to test)
mean = np.mean(X_train, axis=0)
std = np.std(X_train, axis=0)
X_train_scaled = (X_train - mean) / std
X_test_scaled = (X_test - mean) / std

# 4. Augment with Bias Column: [1, x]
X_b_train = np.column_stack([np.ones(len(X_train_scaled)), X_train_scaled])
X_b_test = np.column_stack([np.ones(len(X_test_scaled)), X_test_scaled])

# 5. Vectorized Gradient Descent
weights = np.zeros(X_b_train.shape[1])
learning_rate = 0.05
epochs = 1000
n = len(X_b_train)

for _ in range(epochs):
    preds = X_b_train @ weights
    errors = preds - y_train
    gradients = (2 / n) * (X_b_train.T @ errors)
    weights -= learning_rate * gradients

# 6. Evaluation Metrics
test_preds = X_b_test @ weights
mae = np.mean(np.abs(y_test - test_preds))
mse = np.mean((y_test - test_preds) ** 2)
print("Learned Weights (Bias, W1):", weights)
print("Test MAE:", mae)
print("Test MSE:", mse)`;

    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Top Module Navigation */}
      <ModuleNav track="machine-learning" currentModuleId="numpy" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Badge & Title */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-orange-600" />
              Machine Learning Track &bull; Module 02
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              17 COMPLETE SECTIONS &middot; VECTORIZED MATHEMATICS
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 2 &mdash; Numerical Computing with NumPy
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Master the mathematical engine behind modern machine learning. Explore the internal architecture of ndarray, strides, memory buffers, indexing, broadcasting rules, vectorization, matrix algebra, statistical reductions, linear algebra, and pure NumPy implementations of core ML mathematics.
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
          <MachineLearningNumpySections />
        ) : (
          <div className="space-y-8">
            {/* Workbench Subtabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("matrix")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "matrix"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Vectorized Gradient Descent
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("mlops")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "mlops"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. ML Mathematical Formulas
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("descent")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "descent"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Full Python Lab Script
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

            {/* Workbench 1: Live Gradient Descent */}
            {activeWorkbenchTab === "matrix" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Interactive Simulator &middot; Vectorized Optimization
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      NumPy Gradient Descent Simulator (Target: y = 2x + 1)
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Observe how parameters (Weight w, Bias b) update step-by-step using matrix gradient multiplication: <code>gradients = (2/n) * (X.T @ errors)</code>.
                    </p>
                  </div>

                  <button
                    onClick={() => setDescentStep(0)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-100 text-xs font-semibold cursor-pointer"
                  >
                    <RefreshCw size={12} />
                    <span>Reset Epochs</span>
                  </button>
                </div>

                <div className="flex items-center gap-4 text-xs">
                  <label className="font-bold text-stone-700">Learning Rate (α):</label>
                  <select
                    value={learningRate}
                    onChange={(e) => setLearningRate(Number(e.target.value))}
                    className="px-2 py-1 rounded border border-stone-300 bg-white font-mono"
                  >
                    <option value={0.01}>0.01 (Conservative)</option>
                    <option value={0.05}>0.05 (Balanced)</option>
                    <option value={0.1}>0.10 (Aggressive)</option>
                  </select>
                </div>

                {/* Step Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-stone-600">
                    <span>Iteration Step: {descentStep} / 10</span>
                    <span>Loss (MSE): {descentData[descentStep]?.loss}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    value={descentStep}
                    onChange={(e) => setDescentStep(Number(e.target.value))}
                    className="w-full accent-[#f97316] cursor-pointer"
                  />
                </div>

                {/* Values Card */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-[11px] font-bold text-stone-500 uppercase">Learned Weight (w)</span>
                    <div className="text-2xl font-black text-stone-900 font-mono mt-1">
                      {descentData[descentStep]?.w}
                    </div>
                    <span className="text-[10px] text-stone-400">Target: 2.000</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-[11px] font-bold text-stone-500 uppercase">Learned Bias (b)</span>
                    <div className="text-2xl font-black text-stone-900 font-mono mt-1">
                      {descentData[descentStep]?.b}
                    </div>
                    <span className="text-[10px] text-stone-400">Target: 1.000</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase">Mean Squared Error</span>
                    <div className="text-2xl font-black text-emerald-700 font-mono mt-1">
                      {descentData[descentStep]?.loss}
                    </div>
                    <span className="text-[10px] text-emerald-600">Convergence indicator</span>
                  </div>
                </div>
              </div>
            )}

            {/* Workbench 2: ML Math Formulas */}
            {activeWorkbenchTab === "mlops" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                    NumPy Mathematical Blueprints
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                    Core Machine Learning Operations in NumPy
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50 space-y-2">
                    <span className="text-xs font-bold text-stone-900 block">Min-Max Normalization</span>
                    <pre className="p-3 rounded bg-white font-mono text-xs text-stone-800 border border-stone-200 overflow-x-auto">
{`X_norm = (X - np.min(X, axis=0)) / (np.max(X, axis=0) - np.min(X, axis=0))`}
                    </pre>
                  </div>
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50 space-y-2">
                    <span className="text-xs font-bold text-stone-900 block">Z-Score Standardization</span>
                    <pre className="p-3 rounded bg-white font-mono text-xs text-stone-800 border border-stone-200 overflow-x-auto">
{`std = np.where(np.std(X, axis=0) == 0, 1, np.std(X, axis=0))
Z = (X - np.mean(X, axis=0)) / std`}
                    </pre>
                  </div>
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50 space-y-2">
                    <span className="text-xs font-bold text-stone-900 block">Euclidean Distance Norm</span>
                    <pre className="p-3 rounded bg-white font-mono text-xs text-stone-800 border border-stone-200 overflow-x-auto">
{`distances = np.linalg.norm(points - query_point, axis=1)`}
                    </pre>
                  </div>
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50 space-y-2">
                    <span className="text-xs font-bold text-stone-900 block">Numerically Stable Softmax</span>
                    <pre className="p-3 rounded bg-white font-mono text-xs text-stone-800 border border-stone-200 overflow-x-auto">
{`shifted = x - np.max(x, axis=-1, keepdims=True)
probs = np.exp(shifted) / np.sum(np.exp(shifted), axis=-1, keepdims=True)`}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* Workbench 3: Full Python Script */}
            {activeWorkbenchTab === "descent" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Module 2 Engine Script
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Complete NumPy ML Computation Engine
                    </h2>
                  </div>

                  <button
                    onClick={handleCopyPythonCode}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                  >
                    {copiedCode ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedCode ? "Copied!" : "Copy Python Script"}</span>
                  </button>
                </div>

                <pre className="p-5 rounded-2xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed border border-stone-800">
{`import numpy as np

# 1. Synthetic Dataset Generation
rng = np.random.default_rng(42)
X = rng.uniform(500, 3000, size=(200, 1))
noise = rng.normal(0, 30, size=200)
y = 80 + 0.25 * X[:, 0] + noise

# 2. Train/Test Split
indices = rng.permutation(len(X))
split = int(0.8 * len(X))
X_train, X_test = X[indices[:split]], X[indices[split:]]
y_train, y_test = y[indices[:split]], y[indices[split:]]

# 3. Z-Score Standardization (Fit on train, apply to test)
mean = np.mean(X_train, axis=0)
std = np.std(X_train, axis=0)
X_train_scaled = (X_train - mean) / std
X_test_scaled = (X_test - mean) / std

# 4. Augment with Bias Column: [1, x]
X_b_train = np.column_stack([np.ones(len(X_train_scaled)), X_train_scaled])
X_b_test = np.column_stack([np.ones(len(X_test_scaled)), X_test_scaled])

# 5. Vectorized Gradient Descent
weights = np.zeros(X_b_train.shape[1])
learning_rate = 0.05
epochs = 1000
n = len(X_b_train)

for _ in range(epochs):
    preds = X_b_train @ weights
    errors = preds - y_train
    gradients = (2 / n) * (X_b_train.T @ errors)
    weights -= learning_rate * gradients

# 6. Evaluation Metrics
test_preds = X_b_test @ weights
mae = np.mean(np.abs(y_test - test_preds))
mse = np.mean((y_test - test_preds) ** 2)
print("Learned Weights (Bias, W1):", weights)
print("Test MAE:", mae)
print("Test MSE:", mse)`}
                </pre>
              </div>
            )}

            {/* Workbench 4: Knowledge Assessment Quiz */}
            {activeWorkbenchTab === "quiz" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Module 2 Knowledge Assessment
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      NumPy Architecture &amp; Mathematical Examination
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      10 questions directly testing ndarray architecture, strides, broadcasting, vectorization, and linear algebra.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {showResults && (
                      <div className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold font-mono">
                        Score: {score} / {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
                      </div>
                    )}
                    <button
                      onClick={() => setShowResults(!showResults)}
                      className="px-4 py-2 rounded-xl bg-[#f97316] text-white hover:bg-orange-600 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                    >
                      {showResults ? "Hide Explanations" : "Check Answers"}
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q) => {
                    const selected = selectedAnswers[q.id];
                    const isCorrect = selected === q.correct;

                    return (
                      <div key={q.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/40 space-y-3">
                        <div className="font-bold text-stone-900 text-sm">{q.question}</div>
                        <div className="space-y-2">
                          {q.options.map((opt, oIdx) => {
                            const isChosen = selected === oIdx;
                            let btnStyle = "border-stone-200 bg-white text-stone-700 hover:bg-stone-50";

                            if (showResults) {
                              if (oIdx === q.correct) {
                                btnStyle = "border-emerald-300 bg-emerald-50 text-emerald-900 font-semibold";
                              } else if (isChosen && !isCorrect) {
                                btnStyle = "border-rose-300 bg-rose-50 text-rose-900";
                              }
                            } else if (isChosen) {
                              btnStyle = "border-[#f97316] bg-orange-50 text-orange-950 font-semibold";
                            }

                            return (
                              <button
                                key={oIdx}
                                onClick={() => handleSelectOption(q.id, oIdx)}
                                className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${btnStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {showResults && (
                          <div className={`p-3 rounded-xl text-xs ${isCorrect ? "bg-emerald-50 text-emerald-900 border border-emerald-200" : "bg-stone-100 text-stone-800 border border-stone-200"}`}>
                            <strong>Explanation:</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
