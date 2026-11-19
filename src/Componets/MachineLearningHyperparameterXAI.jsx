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
import MachineLearningHyperparameterXAISections from "./MachineLearningHyperparameterXAISections";

export default function MachineLearningHyperparameterXAI() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("hpo_comparison"); // 'hpo_comparison' | 'calibration' | 'threshold' | 'quiz'

  // ---------------------------------------------------------------------------
  // LAB 1: HYPERPARAMETER OPTIMIZATION COMPARISON (GRID vs RANDOM vs BAYESIAN)
  // ---------------------------------------------------------------------------
  const [hpoMethod, setHpoMethod] = useState("bayesian"); // 'grid' | 'random' | 'bayesian'
  const [budgetTrials, setBudgetTrials] = useState(16); // 16 trials

  // Objective function: true peak at learning_rate = 0.08, depth = 6
  const evaluateObjective = (lr, depth) => {
    const peak = 0.92 * Math.exp(-60 * Math.pow(lr - 0.08, 2) - 0.09 * Math.pow(depth - 6, 2));
    return Math.max(0.5, Math.min(0.95, peak));
  };

  const hpoTrials = useMemo(() => {
    const trials = [];

    if (hpoMethod === "grid") {
      // 4x4 grid
      const lrs = [0.02, 0.07, 0.12, 0.17];
      const depths = [3, 5, 7, 9];
      let id = 1;
      for (const d of depths) {
        for (const lr of lrs) {
          const score = evaluateObjective(lr, d);
          trials.push({ id: id++, lr, depth: d, score });
        }
      }
    } else if (hpoMethod === "random") {
      // Fixed deterministic pseudo-random sequence for repeatability
      const randomSeeds = [
        [0.03, 9], [0.15, 4], [0.09, 8], [0.05, 3],
        [0.18, 7], [0.07, 5], [0.12, 10], [0.04, 6],
        [0.14, 2], [0.08, 7], [0.06, 4], [0.16, 8],
        [0.10, 6], [0.02, 5], [0.11, 3], [0.17, 9],
      ];
      randomSeeds.forEach(([lr, d], idx) => {
        const score = evaluateObjective(lr, d);
        trials.push({ id: idx + 1, lr, depth: d, score });
      });
    } else {
      // Bayesian Optuna (TPE): 4 initial explorations, then converges towards peak (0.08, 6)
      const bayesianPoints = [
        [0.02, 3], [0.18, 9], [0.14, 4], [0.04, 8], // Exploration
        [0.06, 5], [0.10, 7], [0.07, 6], [0.09, 6], // TPE learns surrogate
        [0.08, 6], [0.082, 6], [0.078, 6], [0.081, 5], // Exploitation near peak
        [0.08, 7], [0.085, 6], [0.079, 6], [0.08, 6],
      ];
      bayesianPoints.forEach(([lr, d], idx) => {
        const score = evaluateObjective(lr, d);
        trials.push({ id: idx + 1, lr, depth: d, score });
      });
    }

    // Cumulative best
    let currentBest = 0;
    const withHistory = trials.map((t) => {
      if (t.score > currentBest) {
        currentBest = t.score;
      }
      return { ...t, bestSoFar: currentBest };
    });

    const maxScore = Math.max(...trials.map((t) => t.score));
    const bestTrial = trials.find((t) => t.score === maxScore);

    return { trials: withHistory, maxScore, bestTrial };
  }, [hpoMethod]);

  // ---------------------------------------------------------------------------
  // LAB 2: PROBABILITY CALIBRATION & RELIABILITY CURVES
  // ---------------------------------------------------------------------------
  const [calibMethod, setCalibMethod] = useState("sigmoid"); // 'uncalibrated' | 'sigmoid' | 'isotonic'
  const [distortionLevel, setDistortionLevel] = useState(1.4); // 0.8 (underconfident) to 1.8 (overconfident)

  const calibrationData = useMemo(() => {
    // 10 probability bins from 0.05 to 0.95
    const bins = [];
    for (let b = 1; b <= 10; b++) {
      const predProb = (b - 0.5) / 10; // 0.05, 0.15, ..., 0.95

      let actualFreq = predProb;
      if (calibMethod === "uncalibrated") {
        // Typical uncalibrated boosted tree or SVM sigmoid distortion
        actualFreq = 1 / (1 + Math.exp(-distortionLevel * (predProb * 6 - 3)));
      } else if (calibMethod === "sigmoid") {
        // Platt scaling aligns closely to diagonal with slight residual variance
        actualFreq = predProb * 0.96 + 0.02;
      } else if (calibMethod === "isotonic") {
        // Monotonic piecewise step fit
        actualFreq = Math.round(predProb * 5) / 5;
      }

      bins.push({
        bin: b,
        predProb,
        actualFreq: Math.max(0.01, Math.min(0.99, actualFreq)),
      });
    }

    // Compute Brier Score & Expected Calibration Error (ECE)
    let totalError = 0;
    bins.forEach((item) => {
      totalError += Math.abs(item.predProb - item.actualFreq);
    });
    const ece = totalError / bins.length;
    const brier = calibMethod === "uncalibrated" ? 0.185 * distortionLevel : calibMethod === "sigmoid" ? 0.082 : 0.074;

    return { bins, ece, brier };
  }, [calibMethod, distortionLevel]);

  // ---------------------------------------------------------------------------
  // LAB 3: COST-SENSITIVE DECISION THRESHOLD OPTIMIZER
  // ---------------------------------------------------------------------------
  const [decisionThreshold, setDecisionThreshold] = useState(0.40); // 0.05 to 0.95
  const [costFP, setCostFP] = useState(25); // Cost of false positive (review cost)
  const [costFN, setCostFN] = useState(500); // Cost of false negative (missed fraud)

  const thresholdAnalysis = useMemo(() => {
    // 1,000 transactions: 50 fraud (y=1), 950 legitimate (y=0)
    const totalTransactions = 1000;
    const totalFraud = 50;
    const totalLegit = 950;

    // Simulate predicted probabilities distribution:
    // Fraud cases have probabilities centered around 0.65, legitimate around 0.15
    const thresholdPoints = [];
    let bestT = 0.5;
    let minLoss = Infinity;

    for (let t = 0.05; t <= 0.95; t += 0.05) {
      const roundedT = parseFloat(t.toFixed(2));
      // Fraud recall drops as threshold increases: Recall(t) = 1 / (1 + exp(8*(t - 0.55)))
      const recall = 1 / (1 + Math.exp(9 * (roundedT - 0.52)));
      const tp = Math.round(totalFraud * recall);
      const fn = totalFraud - tp;

      // False alarm rate: FPR(t) = 0.35 * exp(-5 * roundedT)
      const fpr = 0.35 * Math.exp(-5.2 * roundedT);
      const fp = Math.round(totalLegit * fpr);
      const tn = totalLegit - fp;

      const totalCost = fp * costFP + fn * costFN;
      const precision = tp + fp > 0 ? tp / (tp + fp) : 0;
      const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;

      if (totalCost < minLoss) {
        minLoss = totalCost;
        bestT = roundedT;
      }

      thresholdPoints.push({
        t: roundedT,
        tp,
        fp,
        tn,
        fn,
        precision,
        recall,
        f1,
        totalCost,
      });
    }

    const current = thresholdPoints.find(
      (p) => Math.abs(p.t - decisionThreshold) < 0.025
    ) || thresholdPoints[7];

    const defaultPoint = thresholdPoints.find((p) => Math.abs(p.t - 0.5) < 0.025) || thresholdPoints[9];
    const costSavings = defaultPoint.totalCost - current.totalCost;

    return {
      thresholdPoints,
      current,
      bestT,
      minLoss,
      defaultCost: defaultPoint.totalCost,
      costSavings,
    };
  }, [decisionThreshold, costFP, costFN]);

  // ---------------------------------------------------------------------------
  // LAB 4: 10-QUESTION CERTIFICATION ASSESSMENT
  // ---------------------------------------------------------------------------
  const quizQuestions = useMemo(
    () => [
      {
        id: 1,
        question: "What is the fundamental difference between model parameters and hyperparameters?",
        options: [
          "Parameters are chosen by the data scientist before training, while hyperparameters are learned during backpropagation",
          "Parameters are learned internally from data during training (e.g., weights w, tree split rules), whereas hyperparameters are configuration choices specified beforehand to control the learning algorithm (e.g., learning rate, max depth)",
          "Parameters only exist in neural networks, whereas hyperparameters only exist in tree algorithms",
          "There is no mathematical difference; both are tuned via cross-validation",
        ],
        correctIndex: 1,
        explanation:
          "Model parameters (such as regression weights w and intercept b) are estimated automatically from the training data by minimizing loss. Hyperparameters (such as max_depth, n_estimators, C, learning rate) are external knobs configured beforehand to guide the learning algorithm.",
      },
      {
        id: 2,
        question: "Why is Randomized Search often more sample-efficient than Grid Search in high-dimensional hyperparameter spaces?",
        options: [
          "Grid Search always converges to a suboptimal local minimum",
          "Randomized Search tests distinct values across every hyperparameter dimension on every single trial, preventing wasted evaluations along uninfluential parameter axes",
          "Randomized Search only works on continuous learning rates",
          "Grid Search requires GPU acceleration while Randomized Search runs on CPUs",
        ],
        correctIndex: 1,
        explanation:
          "Most ML models are heavily sensitive to only a small subset of hyperparameters. Grid Search wastes evaluations repeating identical values of important parameters across irrelevant parameter combinations, whereas Randomized Search explores unique values along all dimensions in every trial.",
      },
      {
        id: 3,
        question: "How does Bayesian Optimization (e.g. Optuna's TPE or Gaussian Processes) select the next hyperparameter trial?",
        options: [
          "It randomly flips a coin between previously evaluated configurations",
          "It builds a probabilistic surrogate model of the objective function and maximizes an acquisition function (such as Expected Improvement) to balance exploration and exploitation",
          "It computes the analytical gradient with respect to categorical parameters",
          "It evaluates every point on a pre-defined Cartesian grid",
        ],
        correctIndex: 1,
        explanation:
          "Bayesian optimization uses prior evaluation results to build a surrogate model estimating f(θ) and its uncertainty. It then uses an acquisition function (EI, UCB, or PI) to select the next configuration that balances exploration and exploitation.",
      },
      {
        id: 4,
        question: "What is the core tournament mechanism behind Successive Halving in hyperparameter search?",
        options: [
          "Training half of the dataset on 100% of the hyperparameters",
          "Evaluating many configurations on a small initial resource budget (e.g. few epochs or samples), then progressively pruning the bottom fraction and allocating exponentially more resources to top survivors",
          "Halving the learning rate whenever validation error increases",
          "Dropping half of the input features after each cross-validation fold",
        ],
        correctIndex: 1,
        explanation:
          "Successive Halving acts like an elimination tournament: it evaluates many candidates with minimal compute, discards the bottom fraction, and allocates factor × more resources to surviving candidates, avoiding wasted compute on hopeless configurations.",
      },
      {
        id: 5,
        question: "What is the primary goal of model probability calibration (e.g., Platt Scaling or Isotonic Regression)?",
        options: [
          "Increasing the classification accuracy on the training set to 100%",
          "Aligning predicted confidence probabilities P(Y=1|X) so they match the actual empirical frequency of observed positive outcomes",
          "Converting continuous regression targets into categorical buckets",
          "Ensuring the model weights sum to zero",
        ],
        correctIndex: 1,
        explanation:
          "Calibration ensures that when a model outputs a probability of 0.80, approximately 80% of those predictions are truly positive. Many models (e.g., SVMs, Naive Bayes, Boosted Trees) output distorted confidence scores that must be calibrated via Platt scaling (sigmoid) or isotonic regression.",
      },
      {
        id: 6,
        question: "Why should the binary classification decision threshold not always be fixed at 0.5?",
        options: [
          "Because 0.5 is mathematically undefined in logistic regression",
          "Because class distributions are often imbalanced and the business costs of false positives versus false negatives are asymmetric",
          "Because Scikit-learn models crash when threshold is set to 0.5",
          "Because decision thresholds only apply to multiclass problems",
        ],
        correctIndex: 1,
        explanation:
          "In real-world applications (like fraud detection or disease screening), a False Negative (missing fraud or a fatal disease) is vastly more costly than a False Positive (false alarm). Shifting the threshold to minimize expected business loss C_FP*FP + C_FN*FN yields far better outcomes than an arbitrary 0.5 cutoff.",
      },
      {
        id: 7,
        question: "What is the key difference between global interpretability and local interpretability?",
        options: [
          "Global interpretability works offline, while local interpretability works online",
          "Global interpretability explains the model's overall behavior across the entire dataset, whereas local interpretability explains the specific prediction generated for an individual observation",
          "Global interpretability only applies to linear models",
          "Local interpretability evaluates cross-validation scores",
        ],
        correctIndex: 1,
        explanation:
          "Global interpretability provides macro-level insights (e.g., which features are overall most important across all applicants), whereas local interpretability provides micro-level attribution (e.g., exactly which factors caused John Doe's loan application to be rejected).",
      },
      {
        id: 8,
        question: "What is a major limitation of Permutation Feature Importance when features are strongly correlated?",
        options: [
          "Permutation importance cannot run on test datasets",
          "Correlated features can split importance or create unrealistic synthetic feature combinations, underestimating individual feature necessity",
          "Permutation importance only works with decision trees",
          "It always outputs negative values",
        ],
        correctIndex: 1,
        explanation:
          "When two features are collinear, shuffling one feature leaves the other intact to provide the same predictive signal to the model, artificially dampening the measured importance of both. Shuffling can also create physically implausible instances.",
      },
      {
        id: 9,
        question: "What does a Partial Dependence Plot (PDP) visualize?",
        options: [
          "The training loss over epochs",
          "The marginal effect of one or two features on the predicted target outcome, averaging out the effects of all other features in the dataset",
          "The correlation matrix between input features",
          "The individual prediction waterfall for an outlier sample",
        ],
        correctIndex: 1,
        explanation:
          "PDP displays the expected marginal response E_{X_-j}[f(X_j, X_-j)] as feature X_j varies across its range, illustrating whether the model's relationship with the feature is linear, monotonic, or nonlinear.",
      },
      {
        id: 10,
        question: "How does SHAP (SHapley Additive exPlanations) attribute prediction contributions to features?",
        options: [
          "By computing Pearson correlation coefficients with the target label",
          "By calculating each feature's average marginal contribution across all possible feature coalitions using cooperative game theory (Shapley values)",
          "By setting all non-zero weights in the model to one",
          "By training a single decision tree on the test residuals",
        ],
        correctIndex: 1,
        explanation:
          "SHAP is rooted in cooperative game theory: it treats features as players in a coalition game and computes their Shapley values phi_i by averaging their marginal contributions across all possible subsets S. It satisfies desirable mathematical axioms: efficiency, symmetry, dummy player, and additivity.",
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
      <ModuleNav track="ml" activeModuleId="hyperparameter-optimization-xai" />

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8 flex-1">
        {/* Hero Card */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200">
              <Sliders size={14} />
              <span>Module 22 &bull; Optimization, Calibration &amp; Explainability</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Hyperparameter Optimization &amp; Explainable ML
            </h1>

            <p className="text-stone-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Master the dual pillars of production machine learning: building the highest-performing models through Grid Search, Randomized Search, Bayesian Optimization (Optuna), Successive Halving, and Probability Calibration &mdash; while ensuring complete model transparency via SHAP, Partial Dependence Plots, Cost-Sensitive Thresholds, Error Analysis, and Fairness Auditing.
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
                <span>Interactive Optimization Labs</span>
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: CURRICULUM SPECIFICATIONS */}
        {activeTab === "curriculum" && <MachineLearningHyperparameterXAISections />}

        {/* TAB 2: INTERACTIVE RESEARCH WORKBENCH */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Sub-navigation */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-2xl border border-[#e7e3da] shadow-xs">
              <button
                onClick={() => setActiveWorkbenchTab("hpo_comparison")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "hpo_comparison"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <Sliders size={15} />
                <span>Lab 1: Grid vs Random vs Bayesian HPO</span>
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("calibration")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "calibration"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <Activity size={15} />
                <span>Lab 2: Probability Calibration Curves</span>
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("threshold")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "threshold"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <Scale size={15} />
                <span>Lab 3: Cost-Sensitive Threshold Optimizer</span>
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

            {/* LAB 1: HPO COMPARISON */}
            {activeWorkbenchTab === "hpo_comparison" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 1</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Search Strategy Explorer: Grid vs. Random vs. Bayesian Optuna
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Compare how Grid Search, Randomized Search, and Bayesian Optimization (Tree-structured Parzen Estimator) explore a 2D parameter surface (Learning Rate vs. Tree Depth). Observe trial clustering and peak objective discovery.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 text-xs">
                    <span className="font-bold text-stone-800 uppercase tracking-wider block">
                      Search Strategy Selector
                    </span>

                    <div className="space-y-2">
                      <button
                        onClick={() => setHpoMethod("bayesian")}
                        className={`w-full text-left p-3 rounded-xl border font-bold transition-all cursor-pointer ${
                          hpoMethod === "bayesian"
                            ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>Bayesian / Optuna (TPE)</span>
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-orange-700 text-white">Recommended</span>
                        </div>
                        <span className="block text-[11px] font-normal opacity-90 mt-1">
                          Builds surrogate model to exploit promising regions while exploring uncertain space.
                        </span>
                      </button>

                      <button
                        onClick={() => setHpoMethod("random")}
                        className={`w-full text-left p-3 rounded-xl border font-bold transition-all cursor-pointer ${
                          hpoMethod === "random"
                            ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        <span>Randomized Search</span>
                        <span className="block text-[11px] font-normal text-stone-500 mt-1">
                          Uniformly samples points across continuous and discrete distributions.
                        </span>
                      </button>

                      <button
                        onClick={() => setHpoMethod("grid")}
                        className={`w-full text-left p-3 rounded-xl border font-bold transition-all cursor-pointer ${
                          hpoMethod === "grid"
                            ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        <span>Grid Search (Cartesian Grid)</span>
                        <span className="block text-[11px] font-normal text-stone-500 mt-1">
                          Rigidly tests predetermined coordinate intersections.
                        </span>
                      </button>
                    </div>

                    <div className="pt-2 border-t border-stone-200 space-y-2">
                      <div className="flex justify-between font-mono">
                        <span>Total Trial Budget:</span>
                        <strong>16 Evaluations</strong>
                      </div>
                      <div className="flex justify-between font-mono">
                        <span>Peak F1 Discovered:</span>
                        <strong className="text-orange-600">{hpoTrials.maxScore.toFixed(4)}</strong>
                      </div>
                      <div className="flex justify-between font-mono">
                        <span>Optimal Config:</span>
                        <strong className="text-stone-800">
                          &eta;={hpoTrials.bestTrial.lr.toFixed(3)}, d={hpoTrials.bestTrial.depth}
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* 2D Landscape Scatter & History */}
                  <div className="lg:col-span-2 space-y-4">
                    {/* SVG 2D Scatter Map */}
                    <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 text-white">
                      <div className="flex justify-between items-center text-xs text-stone-400 mb-2 font-mono">
                        <span>Search Landscape: Learning Rate (&eta;) vs. Tree Depth (d)</span>
                        <span className="text-[11px] text-orange-400 font-bold">&bull; Target Global Peak: &eta;=0.08, d=6</span>
                      </div>

                      <svg className="w-full h-52" viewBox="0 0 500 200">
                        {/* Target Optima zone highlight */}
                        <circle cx="210" cy="110" r="32" fill="rgba(249, 115, 22, 0.15)" stroke="rgba(249, 115, 22, 0.4)" strokeDasharray="3,3" />
                        <text x="210" y="114" fill="#f97316" fontSize="9" textAnchor="middle" fontFamily="monospace">Global Max (0.92)</text>

                        {/* Axes */}
                        <line x1="50" y1="180" x2="460" y2="180" stroke="#444" />
                        <line x1="50" y1="20" x2="50" y2="180" stroke="#444" />

                        {/* Axis Labels */}
                        <text x="255" y="195" fill="#888" fontSize="10" textAnchor="middle" fontFamily="monospace">Learning Rate &eta; (0.01 &rarr; 0.20)</text>
                        <text x="25" y="100" fill="#888" fontSize="10" textAnchor="middle" transform="rotate(-90 25 100)" fontFamily="monospace">Depth d (2 &rarr; 10)</text>

                        {/* Evaluation Points */}
                        {hpoTrials.trials.map((trial) => {
                          // Map lr [0.01, 0.20] to [60, 450]
                          const cx = 60 + ((trial.lr - 0.01) / 0.19) * 380;
                          // Map depth [2, 10] to [170, 30]
                          const cy = 170 - ((trial.depth - 2) / 8) * 140;

                          const isBest = trial.score === hpoTrials.maxScore;
                          const fillColor = isBest ? "#f97316" : trial.score > 0.85 ? "#34d399" : "#60a5fa";

                          return (
                            <g key={trial.id}>
                              <circle
                                cx={cx}
                                cy={cy}
                                r={isBest ? 6 : 4}
                                fill={fillColor}
                                stroke="#fff"
                                strokeWidth={isBest ? 2 : 1}
                              />
                              <text x={cx} y={cy - 7} fill="#ccc" fontSize="8" textAnchor="middle" fontFamily="monospace">
                                #{trial.id}
                              </text>
                            </g>
                          );
                        })}
                      </svg>
                    </div>

                    {/* Score Progression Line */}
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-bold text-stone-800 mb-2 flex justify-between font-mono">
                        <span>Best Score Progression across 16 Trials</span>
                        <span className="text-orange-700">Peak: {hpoTrials.maxScore.toFixed(4)}</span>
                      </div>
                      <div className="flex items-end gap-1.5 h-16 pt-2">
                        {hpoTrials.trials.map((t) => {
                          const heightPct = Math.max(15, ((t.bestSoFar - 0.5) / 0.45) * 100);
                          return (
                            <div key={t.id} className="flex-1 flex flex-col items-center gap-1">
                              <div
                                style={{ height: `${heightPct}%` }}
                                className="w-full rounded-t bg-orange-600 transition-all duration-300"
                              />
                              <span className="text-[9px] text-stone-400 font-mono">T{t.id}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: PROBABILITY CALIBRATION CURVES */}
            {activeWorkbenchTab === "calibration" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 2</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Probability Calibration &amp; Reliability Diagram Simulator
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Compare an uncalibrated overconfident classifier against Platt Sigmoid scaling and Isotonic Regression. Observe how close predicted confidence bins track true empirical positive event frequencies.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 text-xs">
                    <span className="font-bold text-stone-800 uppercase tracking-wider block">
                      Calibration Pipeline
                    </span>

                    <div className="space-y-2">
                      <button
                        onClick={() => setCalibMethod("sigmoid")}
                        className={`w-full text-left p-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                          calibMethod === "sigmoid"
                            ? "bg-orange-600 text-white border-orange-600"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Platt Scaling (Sigmoid CalibratedClassifierCV)
                      </button>
                      <button
                        onClick={() => setCalibMethod("isotonic")}
                        className={`w-full text-left p-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                          calibMethod === "isotonic"
                            ? "bg-orange-600 text-white border-orange-600"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Isotonic Regression (Non-parametric)
                      </button>
                      <button
                        onClick={() => setCalibMethod("uncalibrated")}
                        className={`w-full text-left p-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                          calibMethod === "uncalibrated"
                            ? "bg-orange-600 text-white border-orange-600"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Raw Uncalibrated Base Model (Overconfident)
                      </button>
                    </div>

                    {calibMethod === "uncalibrated" && (
                      <div>
                        <div className="flex justify-between font-mono mb-1">
                          <span>Distortion Severity:</span>
                          <strong>{distortionLevel.toFixed(1)}&times;</strong>
                        </div>
                        <input
                          type="range"
                          min="0.8"
                          max="2.0"
                          step="0.1"
                          value={distortionLevel}
                          onChange={(e) => setDistortionLevel(parseFloat(e.target.value))}
                          className="w-full accent-orange-600 cursor-pointer"
                        />
                      </div>
                    )}

                    <div className="pt-2 border-t border-stone-200 space-y-2 font-mono">
                      <div className="flex justify-between">
                        <span>Brier Score (MSE):</span>
                        <strong className="text-orange-600">{calibrationData.brier.toFixed(4)}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Expected Calibration Error (ECE):</span>
                        <strong className="text-stone-800">{(calibrationData.ece * 100).toFixed(2)}%</strong>
                      </div>
                    </div>
                  </div>

                  {/* Reliability Diagram SVG */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 text-white">
                      <div className="flex justify-between items-center text-xs text-stone-400 mb-2 font-mono">
                        <span>Reliability Diagram (Calibration Display)</span>
                        <div className="flex gap-4">
                          <span className="flex items-center gap-1.5"><span className="w-2.5 h-0.5 bg-stone-500 inline-block"></span> Perfectly Calibrated (y = x)</span>
                          <span className="flex items-center gap-1.5"><span className="w-2.5 h-0.5 bg-orange-400 inline-block"></span> Model Calibration Curve</span>
                        </div>
                      </div>

                      <svg className="w-full h-52" viewBox="0 0 500 200">
                        {/* Diagonal reference line (perfect calibration) */}
                        <line x1="50" y1="170" x2="450" y2="20" stroke="#666" strokeWidth="1.5" strokeDasharray="4,4" />

                        {/* Axes */}
                        <line x1="50" y1="170" x2="450" y2="170" stroke="#444" />
                        <line x1="50" y1="20" x2="50" y2="170" stroke="#444" />

                        <text x="250" y="190" fill="#888" fontSize="10" textAnchor="middle" fontFamily="monospace">Mean Predicted Probability</text>
                        <text x="25" y="95" fill="#888" fontSize="10" textAnchor="middle" transform="rotate(-90 25 95)" fontFamily="monospace">Fraction of Positives</text>

                        {/* Calibration Curve */}
                        <polyline
                          fill="none"
                          stroke="#f97316"
                          strokeWidth="2.5"
                          points={calibrationData.bins
                            .map((p) => {
                              const x = 50 + p.predProb * 400;
                              const y = 170 - p.actualFreq * 150;
                              return `${x},${y}`;
                            })
                            .join(" ")}
                        />

                        {/* Bin Markers */}
                        {calibrationData.bins.map((p) => {
                          const x = 50 + p.predProb * 400;
                          const y = 170 - p.actualFreq * 150;
                          return <circle key={p.bin} cx={x} cy={y} r="4" fill="#f97316" stroke="#fff" strokeWidth="1.5" />;
                        })}
                      </svg>
                    </div>

                    <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950">
                      <strong>Calibration Insight:</strong> Platt Sigmoid calibration fits a smooth parametric S-curve that brings the Brier score down to ~0.082 and eliminates systematic overconfidence, ensuring risk estimates in banking and healthcare reflect reality.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: COST-SENSITIVE DECISION THRESHOLD OPTIMIZER */}
            {activeWorkbenchTab === "threshold" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 3</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Cost-Sensitive Classification Decision Threshold Optimizer
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Tune the decision threshold t on an imbalanced fraud dataset (50 fraud, 950 legitimate). Contrast the default 0.5 cutoff with the cost-optimal threshold that minimizes asymmetric financial losses.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 text-xs">
                    <span className="font-bold text-stone-800 uppercase tracking-wider block">
                      Cost &amp; Threshold Controls
                    </span>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Decision Threshold (t):</span>
                        <strong className="text-orange-600">{decisionThreshold.toFixed(2)}</strong>
                      </div>
                      <input
                        type="range"
                        min="0.05"
                        max="0.95"
                        step="0.05"
                        value={decisionThreshold}
                        onChange={(e) => setDecisionThreshold(parseFloat(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                      <span className="text-[10px] text-stone-500">Flag as fraud if P(Fraud|x) &ge; t</span>
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>False Positive Cost (C_FP):</span>
                        <strong>${costFP}</strong>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        step="5"
                        value={costFP}
                        onChange={(e) => setCostFP(parseInt(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                      <span className="text-[10px] text-stone-500">Customer friction / manual investigation cost</span>
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>False Negative Cost (C_FN):</span>
                        <strong className="text-red-600">${costFN}</strong>
                      </div>
                      <input
                        type="range"
                        min="200"
                        max="1500"
                        step="50"
                        value={costFN}
                        onChange={(e) => setCostFN(parseInt(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                      <span className="text-[10px] text-stone-500">Direct financial loss from undetected fraudulent charge</span>
                    </div>

                    <div className="pt-2 border-t border-stone-200 space-y-2">
                      <div className="text-[11px] font-bold text-stone-700">Optimal Threshold Recommendation:</div>
                      <div className="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-950 font-mono text-xs">
                        Cost-Minimizing Threshold: <strong>t = {thresholdAnalysis.bestT.toFixed(2)}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Confusion Matrix & Business Cost Curve */}
                  <div className="lg:col-span-2 space-y-4">
                    {/* Confusion Matrix 2x2 Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                        <span className="text-emerald-800 block text-[10px] uppercase font-bold">True Positives (TP)</span>
                        <span className="text-lg font-bold text-emerald-900">{thresholdAnalysis.current.tp}</span>
                        <span className="text-[10px] text-emerald-700 block">Fraud caught</span>
                      </div>
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                        <span className="text-red-800 block text-[10px] uppercase font-bold">False Negatives (FN)</span>
                        <span className="text-lg font-bold text-red-900">{thresholdAnalysis.current.fn}</span>
                        <span className="text-[10px] text-red-700 block">Missed fraud (-${costFN}/ea)</span>
                      </div>
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                        <span className="text-amber-800 block text-[10px] uppercase font-bold">False Positives (FP)</span>
                        <span className="text-lg font-bold text-amber-900">{thresholdAnalysis.current.fp}</span>
                        <span className="text-[10px] text-amber-700 block">False alarms (-${costFP}/ea)</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="text-stone-500 block text-[10px] uppercase font-bold">Total Business Loss</span>
                        <span className="text-lg font-bold text-stone-900">${thresholdAnalysis.current.totalCost.toLocaleString()}</span>
                        <span className="text-[10px] text-emerald-700 block">
                          {thresholdAnalysis.costSavings > 0
                            ? `Saves $${thresholdAnalysis.costSavings.toLocaleString()} vs t=0.5`
                            : "Higher than optimal"}
                        </span>
                      </div>
                    </div>

                    {/* SVG Cost vs Threshold Curve */}
                    <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 text-white">
                      <div className="flex justify-between items-center text-xs text-stone-400 mb-2 font-mono">
                        <span>Expected Business Loss vs. Threshold t</span>
                        <span className="text-emerald-400 font-bold">&bull; Minimum Cost at t={thresholdAnalysis.bestT.toFixed(2)}</span>
                      </div>

                      <svg className="w-full h-44" viewBox="0 0 500 160">
                        {/* Axes */}
                        <line x1="50" y1="140" x2="460" y2="140" stroke="#444" />
                        <line x1="50" y1="15" x2="50" y2="140" stroke="#444" />

                        {/* Cost curve */}
                        <polyline
                          fill="none"
                          stroke="#f97316"
                          strokeWidth="2.5"
                          points={thresholdAnalysis.thresholdPoints
                            .map((p) => {
                              const x = 50 + (p.t / 1.0) * 400;
                              // Scale loss max around $25,000
                              const maxLoss = 28000;
                              const y = 140 - (p.totalCost / maxLoss) * 120;
                              return `${x},${y}`;
                            })
                            .join(" ")}
                        />

                        {/* Current selected threshold marker */}
                        {(() => {
                          const cx = 50 + (decisionThreshold / 1.0) * 400;
                          const cy = 140 - (thresholdAnalysis.current.totalCost / 28000) * 120;
                          return (
                            <g>
                              <line x1={cx} y1="15" x2={cx} y2="140" stroke="#fff" strokeDasharray="2,2" />
                              <circle cx={cx} cy={cy} r="5" fill="#f97316" stroke="#fff" strokeWidth="2" />
                            </g>
                          );
                        })()}

                        <text x="250" y="155" fill="#888" fontSize="10" textAnchor="middle" fontFamily="monospace">Decision Threshold t</text>
                      </svg>
                    </div>
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
                      Module 22 Knowledge Assessment
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Validate your expertise in hyperparameter optimization (HPO), Bayesian search, probability calibration, decision thresholds, SHAP, and fairness auditing.
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
            onClick={() => navigate("/learning/machine-learning/advanced-statistical-learning")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 21 &mdash; Advanced Statistical Learning &amp; ML Research</span>
          </button>

          <button
            onClick={() => navigate("/learning/machine-learning/real-world-ml-case-studies")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs transition-colors"
          >
            <span>Next: Module 23 &mdash; Real-World ML Engineering &amp; Case Studies</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
