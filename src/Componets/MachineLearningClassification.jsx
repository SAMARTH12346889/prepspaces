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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import MachineLearningClassificationSections from "./MachineLearningClassificationSections";

export default function MachineLearningClassification() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("sigmoid_simulator"); // 'sigmoid_simulator' | 'softmax_calc' | 'confusion_matrix' | 'quiz'
  const [copiedCode, setCopiedCode] = useState(false);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 1: SIGMOID & THRESHOLD SIMULATOR
  // ---------------------------------------------------------------------------
  const [beta0, setBeta0] = useState(-1.5);
  const [beta1, setBeta1] = useState(0.8);
  const [featureX, setFeatureX] = useState(3.0);
  const [threshold, setThreshold] = useState(0.5);

  const sigmoidMetrics = useMemo(() => {
    const z = beta0 + beta1 * featureX;
    const prob = 1 / (1 + Math.exp(-z));
    const odds = prob >= 0.999 ? 999 : prob <= 0.001 ? 0.001 : prob / (1 - prob);
    const logOdds = z;
    const isPositive = prob >= threshold;
    return {
      z: Number(z.toFixed(3)),
      prob: Number(prob.toFixed(4)),
      probPercent: Number((prob * 100).toFixed(2)),
      odds: Number(odds.toFixed(2)),
      logOdds: Number(logOdds.toFixed(3)),
      prediction: isPositive ? 1 : 0,
      label: isPositive ? "Positive Class (Class 1)" : "Negative Class (Class 0)",
    };
  }, [beta0, beta1, featureX, threshold]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 2: SOFTMAX MULTICLASS CALCULATOR
  // ---------------------------------------------------------------------------
  const [logitCat, setLogitCat] = useState(2.0);
  const [logitDog, setLogitDog] = useState(1.0);
  const [logitBird, setLogitBird] = useState(0.5);

  const softmaxMetrics = useMemo(() => {
    const logits = [logitCat, logitDog, logitBird];
    const maxLogit = Math.max(...logits);
    const expScores = logits.map((l) => Math.exp(l - maxLogit));
    const sumExp = expScores.reduce((a, b) => a + b, 0);
    const probs = expScores.map((e) => e / sumExp);
    return {
      catProb: Number((probs[0] * 100).toFixed(1)),
      dogProb: Number((probs[1] * 100).toFixed(1)),
      birdProb: Number((probs[2] * 100).toFixed(1)),
      catExp: Number(Math.exp(logitCat).toFixed(3)),
      dogExp: Number(Math.exp(logitDog).toFixed(3)),
      birdExp: Number(Math.exp(logitBird).toFixed(3)),
      totalExp: Number((Math.exp(logitCat) + Math.exp(logitDog) + Math.exp(logitBird)).toFixed(3)),
      predictedClass:
        probs[0] >= probs[1] && probs[0] >= probs[2]
          ? "Cat"
          : probs[1] >= probs[2]
          ? "Dog"
          : "Bird",
    };
  }, [logitCat, logitDog, logitBird]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 3: CONFUSION MATRIX & METRICS EXPLORER
  // ---------------------------------------------------------------------------
  const [tp, setTp] = useState(85);
  const [fp, setFp] = useState(15);
  const [fn, setFn] = useState(25);
  const [tn, setTn] = useState(875);

  const confMetrics = useMemo(() => {
    const total = tp + fp + fn + tn;
    const accuracy = total > 0 ? (tp + tn) / total : 0;
    const precision = tp + fp > 0 ? tp / (tp + fp) : 0;
    const recall = tp + fn > 0 ? tp / (tp + fn) : 0;
    const specificity = tn + fp > 0 ? tn / (tn + fp) : 0;
    const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;
    const balancedAcc = (recall + specificity) / 2;

    return {
      total,
      accuracy: (accuracy * 100).toFixed(2),
      precision: (precision * 100).toFixed(2),
      recall: (recall * 100).toFixed(2),
      specificity: (specificity * 100).toFixed(2),
      f1: (f1 * 100).toFixed(2),
      balancedAcc: (balancedAcc * 100).toFixed(2),
    };
  }, [tp, fp, fn, tn]);

  const loadPreset = (type) => {
    if (type === "balanced") {
      setTp(420);
      setFp(80);
      setFn(70);
      setTn(430);
    } else if (type === "churn") {
      setTp(75);
      setFp(35);
      setFn(25);
      setTn(865);
    } else if (type === "fraud_paradox") {
      // 99% non-fraud, model predicts all negative
      setTp(0);
      setFp(0);
      setFn(100);
      setTn(9900);
    }
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 4: 10-QUESTION MODULE ASSESSMENT
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of classification?",
      options: [
        "Predict continuous numerical values",
        "Predict discrete class labels",
        "Reduce the number of features",
        "Calculate numerical averages",
      ],
      correct: 1,
      explanation: "Classification is a supervised machine learning task where a model learns from labeled observations to predict categorical or discrete class labels.",
    },
    {
      id: 2,
      question: "Which function converts a binary logistic regression score into a probability?",
      options: ["Softmax", "ReLU", "Sigmoid", "Mean"],
      correct: 2,
      explanation: "The sigmoid function σ(z) = 1 / (1 + e^(-z)) maps any real-valued number from -∞ to +∞ to a valid probability in the range (0, 1).",
    },
    {
      id: 3,
      question: "What does logistic regression model linearly?",
      options: [
        "Raw class probabilities directly",
        "Log-odds of the positive class",
        "The number of classes",
        "The confusion matrix",
      ],
      correct: 1,
      explanation: "Logistic regression establishes a linear relationship between input features and the log-odds (logit): log(p / (1 - p)) = β₀ + βᵀX.",
    },
    {
      id: 4,
      question: "What does the default binary threshold of 0.5 mean?",
      options: [
        "Predict positive when probability is at least 0.5",
        "Every prediction is 50% accurate",
        "Always predict the majority class",
        "Remove observations below 0.5",
      ],
      correct: 0,
      explanation: "Under the standard 0.5 decision threshold, any observation with predicted positive probability p >= 0.5 is assigned to class 1, otherwise class 0.",
    },
    {
      id: 5,
      question: "Which loss function evaluates classification probability predictions?",
      options: ["RMSE only", "R-squared", "Log-loss", "MAE only"],
      correct: 2,
      explanation: "Log-loss (cross-entropy) evaluates the quality of predicted probabilities by computing the negative log-likelihood of the true classes, heavily penalizing confident wrong predictions.",
    },
    {
      id: 6,
      question: "What does softmax do?",
      options: [
        "Removes all input features",
        "Converts multiple class scores into probabilities that sum to one",
        "Calculates regression residuals",
        "Balances the training dataset",
      ],
      correct: 1,
      explanation: "The softmax function exponentiates logits across K classes and divides by their sum, generating a normalized multiclass probability distribution summing to 1.",
    },
    {
      id: 7,
      question: "How many classifiers are required for One-vs-Rest with five classes?",
      options: ["5", "10", "15", "25"],
      correct: 0,
      explanation: "One-vs-Rest (OvR) trains one binary classifier per class against all other remaining classes combined, requiring exactly K = 5 binary models.",
    },
    {
      id: 8,
      question: "How many pairwise classifiers are required for One-vs-One with four classes?",
      options: ["4", "6", "8", "12"],
      correct: 1,
      explanation: "One-vs-One (OvO) trains a separate classifier for every pairwise combination of classes: K(K - 1) / 2 = 4(3) / 2 = 6 classifiers.",
    },
    {
      id: 9,
      question: "Why can accuracy be misleading in imbalanced classification?",
      options: [
        "Accuracy cannot be calculated",
        "A model may predict only the majority class and still achieve high accuracy",
        "Accuracy always equals recall",
        "Accuracy only works for multiclass problems",
      ],
      correct: 1,
      explanation: "In an imbalanced dataset (e.g. 99% non-fraud, 1% fraud), a trivial model predicting 100% non-fraud achieves 99% accuracy while detecting 0% of fraudulent transactions.",
    },
    {
      id: 10,
      question: "Where should SMOTE be applied in a standard train-test workflow?",
      options: [
        "Before splitting the complete dataset",
        "Only on the untouched test set",
        "Within training data or training folds",
        "On validation and test data together",
      ],
      correct: 2,
      explanation: "Applying resampling before splitting creates data leakage from validation/test sets into training. Resampling or SMOTE must strictly happen inside training data or cross-validation folds.",
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
      <ModuleNav track="machine-learning" currentModuleId="classification" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Badge & Title */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-orange-600" />
              Machine Learning Track &bull; Module 07
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              24 COMPLETE SECTIONS &middot; SUPERVISED CLASSIFICATION
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 7 &mdash; Classification &amp; Logistic Regression
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Master discrete category prediction in machine learning. Derive logistic regression and the sigmoid function, interpret odds ratios and log-odds, establish linear decision boundaries, evaluate probability quality using log-loss and cross-entropy, deploy Softmax, One-vs-Rest, and One-vs-One multiclass architectures, calibrate decision thresholds, conquer the accuracy paradox with class weighting and leak-free SMOTE pipelines, and execute end-to-end classification projects.
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
        {activeTab === "curriculum" && <MachineLearningClassificationSections />}

        {/* TAB 2: INTERACTIVE WORKBENCHES & ASSESSMENT */}
        {activeTab === "workbench" && (
          <div className="space-y-8">
            {/* Workbench Navigation Pills */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-stone-200/70 rounded-2xl w-fit">
              <button
                onClick={() => setActiveWorkbenchTab("sigmoid_simulator")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "sigmoid_simulator"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Sliders size={15} />
                <span>1. Sigmoid &amp; Threshold Simulator</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("softmax_calc")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "softmax_calc"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <PieChart size={15} />
                <span>2. 3-Class Softmax Calculator</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("confusion_matrix")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "confusion_matrix"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Table size={15} />
                <span>3. Confusion Matrix &amp; Metrics</span>
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

            {/* LAB 1: SIGMOID & THRESHOLD SIMULATOR */}
            {activeWorkbenchTab === "sigmoid_simulator" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
                    Interactive Workbench 01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight mt-2">
                    Sigmoid Function &amp; Classification Threshold Simulator
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Adjust intercept β₀, feature weight β₁, input feature x, and the decision threshold to observe the linear score z, sigmoid probability σ(z), log-odds, and final class prediction.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div>
                    <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                      Intercept (β₀): <span className="text-orange-700">{beta0}</span>
                    </label>
                    <input
                      type="range"
                      min="-5.0"
                      max="5.0"
                      step="0.1"
                      value={beta0}
                      onChange={(e) => setBeta0(parseFloat(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                      Weight (β₁): <span className="text-orange-700">{beta1}</span>
                    </label>
                    <input
                      type="range"
                      min="-3.0"
                      max="3.0"
                      step="0.1"
                      value={beta1}
                      onChange={(e) => setBeta1(parseFloat(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                      Input Feature (x): <span className="text-orange-700">{featureX}</span>
                    </label>
                    <input
                      type="range"
                      min="-5.0"
                      max="10.0"
                      step="0.2"
                      value={featureX}
                      onChange={(e) => setFeatureX(parseFloat(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-600 font-bold block mb-1">
                      Decision Threshold: <span className="text-orange-700">{threshold}</span>
                    </label>
                    <input
                      type="range"
                      min="0.10"
                      max="0.90"
                      step="0.05"
                      value={threshold}
                      onChange={(e) => setThreshold(parseFloat(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono text-stone-500 uppercase">Linear Score (z)</span>
                    <div className="text-2xl font-black font-mono text-stone-900 mt-1">{sigmoidMetrics.z}</div>
                    <div className="text-[11px] text-stone-500 mt-1">z = {beta0} + ({beta1} &middot; {featureX})</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono text-stone-500 uppercase">Probability P(y=1)</span>
                    <div className="text-2xl font-black font-mono text-orange-700 mt-1">{sigmoidMetrics.prob}</div>
                    <div className="text-[11px] text-stone-500 mt-1">σ(z) = {sigmoidMetrics.probPercent}%</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono text-stone-500 uppercase">Odds &amp; Log-Odds</span>
                    <div className="text-2xl font-black font-mono text-stone-900 mt-1">{sigmoidMetrics.odds} : 1</div>
                    <div className="text-[11px] text-stone-500 mt-1">Logit = {sigmoidMetrics.logOdds}</div>
                  </div>

                  <div className={`p-4 rounded-2xl border ${sigmoidMetrics.prediction === 1 ? "bg-emerald-50 border-emerald-200 text-emerald-950" : "bg-stone-50 border-stone-200 text-stone-950"}`}>
                    <span className="text-xs font-mono uppercase font-bold">Predicted Class</span>
                    <div className="text-xl font-black font-mono mt-1">{sigmoidMetrics.label}</div>
                    <div className="text-[11px] mt-1">Cutoff: {sigmoidMetrics.prob} {sigmoidMetrics.prediction === 1 ? "≥" : "<"} {threshold}</div>
                  </div>
                </div>

                {/* Visual Probability Bar */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex justify-between text-xs font-mono text-stone-600 mb-1.5">
                    <span>Negative Region (Class 0)</span>
                    <span>Threshold: {threshold}</span>
                    <span>Positive Region (Class 1)</span>
                  </div>
                  <div className="w-full h-6 bg-stone-200 rounded-full relative overflow-hidden">
                    <div
                      className="h-full bg-orange-600 transition-all duration-300"
                      style={{ width: `${sigmoidMetrics.probPercent}%` }}
                    />
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-black z-10"
                      style={{ left: `${threshold * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: 3-CLASS SOFTMAX CALCULATOR */}
            {activeWorkbenchTab === "softmax_calc" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
                    Interactive Workbench 02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight mt-2">
                    3-Class Softmax Probability Normalizer
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1">
                    Input raw class scores (logits) to observe exponentiation e^z, the normalization denominator, and the final normalized multiclass probability distribution.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <label className="text-xs font-mono font-bold text-stone-700 block mb-2">Class 1: Cat Score (z₁)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={logitCat}
                      onChange={(e) => setLogitCat(parseFloat(e.target.value) || 0)}
                      className="w-full p-2.5 rounded-xl border border-stone-300 font-mono text-sm bg-white"
                    />
                    <div className="mt-2 text-xs font-mono text-stone-500">e^(z₁) = {softmaxMetrics.catExp}</div>
                    <div className="mt-2 text-lg font-black font-mono text-orange-700">{softmaxMetrics.catProb}%</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <label className="text-xs font-mono font-bold text-stone-700 block mb-2">Class 2: Dog Score (z₂)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={logitDog}
                      onChange={(e) => setLogitDog(parseFloat(e.target.value) || 0)}
                      className="w-full p-2.5 rounded-xl border border-stone-300 font-mono text-sm bg-white"
                    />
                    <div className="mt-2 text-xs font-mono text-stone-500">e^(z₂) = {softmaxMetrics.dogExp}</div>
                    <div className="mt-2 text-lg font-black font-mono text-orange-700">{softmaxMetrics.dogProb}%</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <label className="text-xs font-mono font-bold text-stone-700 block mb-2">Class 3: Bird Score (z₃)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={logitBird}
                      onChange={(e) => setLogitBird(parseFloat(e.target.value) || 0)}
                      className="w-full p-2.5 rounded-xl border border-stone-300 font-mono text-sm bg-white"
                    />
                    <div className="mt-2 text-xs font-mono text-stone-500">e^(z₃) = {softmaxMetrics.birdExp}</div>
                    <div className="mt-2 text-lg font-black font-mono text-orange-700">{softmaxMetrics.birdProb}%</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-orange-950 uppercase">Argmax Prediction</span>
                    <div className="text-xl font-black text-orange-900 mt-0.5">Most Likely Class: {softmaxMetrics.predictedClass}</div>
                  </div>
                  <div className="text-right text-xs font-mono text-orange-800">
                    <div>Denominator Σ e^(z): <strong>{softmaxMetrics.totalExp}</strong></div>
                    <div>Sum of Probabilities: <strong>100.0%</strong></div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: CONFUSION MATRIX & METRICS */}
            {activeWorkbenchTab === "confusion_matrix" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
                      Interactive Workbench 03
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight mt-2">
                      Confusion Matrix &amp; Evaluation Metrics Studio
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1">
                      Enter raw counts or choose a scenario preset to explore how Precision, Recall, Specificity, F1, and Balanced Accuracy react.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => loadPreset("balanced")}
                      className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-mono text-xs font-bold cursor-pointer"
                    >
                      50/50 Balanced
                    </button>
                    <button
                      onClick={() => loadPreset("churn")}
                      className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-mono text-xs font-bold cursor-pointer"
                    >
                      Churn (90/10)
                    </button>
                    <button
                      onClick={() => loadPreset("fraud_paradox")}
                      className="px-3 py-1.5 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-800 font-mono text-xs font-bold cursor-pointer"
                    >
                      Fraud Paradox (99/1)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Confusion Matrix Interactive Grid */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                    <h3 className="text-xs font-mono font-bold text-stone-700 uppercase">Input Confusion Matrix Counts</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                        <label className="text-[11px] font-mono text-emerald-900 font-bold block mb-1">True Negative (TN)</label>
                        <input
                          type="number"
                          value={tn}
                          onChange={(e) => setTn(Math.max(0, parseInt(e.target.value) || 0))}
                          className="w-full p-2 rounded-lg border border-emerald-300 font-mono text-sm bg-white"
                        />
                      </div>
                      <div className="p-3 bg-rose-50/70 border border-rose-200 rounded-xl">
                        <label className="text-[11px] font-mono text-rose-900 font-bold block mb-1">False Positive (FP - Type I)</label>
                        <input
                          type="number"
                          value={fp}
                          onChange={(e) => setFp(Math.max(0, parseInt(e.target.value) || 0))}
                          className="w-full p-2 rounded-lg border border-rose-300 font-mono text-sm bg-white"
                        />
                      </div>
                      <div className="p-3 bg-rose-50/70 border border-rose-200 rounded-xl">
                        <label className="text-[11px] font-mono text-rose-900 font-bold block mb-1">False Negative (FN - Type II)</label>
                        <input
                          type="number"
                          value={fn}
                          onChange={(e) => setFn(Math.max(0, parseInt(e.target.value) || 0))}
                          className="w-full p-2 rounded-lg border border-rose-300 font-mono text-sm bg-white"
                        />
                      </div>
                      <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                        <label className="text-[11px] font-mono text-emerald-900 font-bold block mb-1">True Positive (TP)</label>
                        <input
                          type="number"
                          value={tp}
                          onChange={(e) => setTp(Math.max(0, parseInt(e.target.value) || 0))}
                          className="w-full p-2 rounded-lg border border-emerald-300 font-mono text-sm bg-white"
                        />
                      </div>
                    </div>
                    <div className="text-xs font-mono text-stone-500 text-right">
                      Total Evaluated Samples: <strong>{confMetrics.total.toLocaleString()}</strong>
                    </div>
                  </div>

                  {/* Computed Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-[11px] font-mono text-stone-500 uppercase font-bold">Accuracy</span>
                      <div className="text-xl font-black font-mono text-stone-900 mt-1">{confMetrics.accuracy}%</div>
                      <div className="text-[10px] text-stone-500 mt-0.5">(TP + TN) / Total</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-[11px] font-mono text-stone-500 uppercase font-bold">Precision</span>
                      <div className="text-xl font-black font-mono text-orange-700 mt-1">{confMetrics.precision}%</div>
                      <div className="text-[10px] text-stone-500 mt-0.5">TP / (TP + FP)</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-[11px] font-mono text-stone-500 uppercase font-bold">Recall / Sensitivity</span>
                      <div className="text-xl font-black font-mono text-orange-700 mt-1">{confMetrics.recall}%</div>
                      <div className="text-[10px] text-stone-500 mt-0.5">TP / (TP + FN)</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-[11px] font-mono text-stone-500 uppercase font-bold">Specificity</span>
                      <div className="text-xl font-black font-mono text-stone-900 mt-1">{confMetrics.specificity}%</div>
                      <div className="text-[10px] text-stone-500 mt-0.5">TN / (TN + FP)</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200">
                      <span className="text-[11px] font-mono text-orange-900 uppercase font-bold">F1-Score</span>
                      <div className="text-xl font-black font-mono text-orange-950 mt-1">{confMetrics.f1}%</div>
                      <div className="text-[10px] text-orange-800 mt-0.5">Harmonic Mean</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-[11px] font-mono text-stone-500 uppercase font-bold">Balanced Accuracy</span>
                      <div className="text-xl font-black font-mono text-stone-900 mt-1">{confMetrics.balancedAcc}%</div>
                      <div className="text-[10px] text-stone-500 mt-0.5">(Sensitivity + Specificity) / 2</div>
                    </div>
                  </div>
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
                      Module 7 Knowledge Check &mdash; 10 Questions
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1">
                      Test your understanding of classification taxonomy, sigmoid mechanics, odds ratios, log-loss, softmax, OvR/OvO, threshold tuning, and imbalanced learning.
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
                    const isAnswered = selectedAnswers[q.id] !== undefined;
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
            onClick={() => navigate("/learning/machine-learning/advanced-regression")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 6 &mdash; Advanced Regression &amp; Regularization</span>
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
