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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import MachineLearningProbabilisticMLSections from "./MachineLearningProbabilisticMLSections";

export default function MachineLearningProbabilisticML() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("conjugate_updating"); // 'conjugate_updating' | 'decision_theory' | 'gaussian_process' | 'quiz'

  // ---------------------------------------------------------------------------
  // LAB 1: BAYESIAN INFERENCE & BETA-BINOMIAL CONJUGATE UPDATING SIMULATOR
  // ---------------------------------------------------------------------------
  const [priorAlpha, setPriorAlpha] = useState(2);
  const [priorBeta, setPriorBeta] = useState(2);
  const [obsHeads, setObsHeads] = useState(7);
  const [obsTails, setObsTails] = useState(3);

  const betaBinomialStats = useMemo(() => {
    const totalObs = obsHeads + obsTails;
    const postAlpha = priorAlpha + obsHeads;
    const postBeta = priorBeta + obsTails;

    // MLE: observed proportion
    const mle = totalObs > 0 ? obsHeads / totalObs : 0.5;

    // MAP: mode of posterior Beta distribution
    let map = 0.5;
    if (postAlpha > 1 && postBeta > 1) {
      map = (postAlpha - 1) / (postAlpha + postBeta - 2);
    } else if (postAlpha === 1 && postBeta === 1) {
      map = 0.5;
    } else if (postAlpha < 1) {
      map = 0.0;
    } else {
      map = 1.0;
    }

    // Posterior Mean: E[theta | D]
    const postMean = postAlpha / (postAlpha + postBeta);

    // Posterior Variance
    const postVar =
      (postAlpha * postBeta) /
      (Math.pow(postAlpha + postBeta, 2) * (postAlpha + postBeta + 1));
    const postStd = Math.sqrt(postVar);

    // Generate curve points for theta in [0.05, 0.95]
    const thetaPoints = [];
    for (let i = 1; i <= 19; i++) {
      const th = i * 0.05;
      // Approximation of Beta PDF shape
      const priorDensity = Math.pow(th, priorAlpha - 1) * Math.pow(1 - th, priorBeta - 1);
      const postDensity = Math.pow(th, postAlpha - 1) * Math.pow(1 - th, postBeta - 1);
      thetaPoints.push({
        th,
        priorDensity: Math.max(0, priorDensity),
        postDensity: Math.max(0, postDensity),
      });
    }

    // Normalize curve points for SVG rendering
    const maxPost = Math.max(...thetaPoints.map((p) => p.postDensity), 0.001);
    const maxPrior = Math.max(...thetaPoints.map((p) => p.priorDensity), 0.001);

    return {
      postAlpha,
      postBeta,
      mle,
      map,
      postMean,
      postStd,
      thetaPoints: thetaPoints.map((p) => ({
        ...p,
        postNorm: (p.postDensity / maxPost) * 100,
        priorNorm: (p.priorDensity / maxPrior) * 100,
      })),
    };
  }, [priorAlpha, priorBeta, obsHeads, obsTails]);

  // ---------------------------------------------------------------------------
  // LAB 2: BAYESIAN DECISION THEORY & EXPECTED LOSS OPTIMIZER
  // ---------------------------------------------------------------------------
  const [predictedRiskProb, setPredictedRiskProb] = useState(0.12); // P(Adverse / Fraud)
  const [costApproveLegit, setCostApproveLegit] = useState(0); // Frictionless checkout
  const [costApproveFraud, setCostApproveFraud] = useState(1000); // Massive chargeback loss
  const [costBlockLegit, setCostBlockLegit] = useState(40); // Customer friction / insult
  const [costBlockFraud, setCostBlockFraud] = useState(10); // Verification fee

  const decisionAnalysis = useMemo(() => {
    const p = predictedRiskProb; // Probability of Fraud / Adverse Event
    const q = 1 - p; // Probability of Legitimate

    // Expected Loss for Action 0 (Approve / Do Nothing)
    const expLossApprove = q * costApproveLegit + p * costApproveFraud;

    // Expected Loss for Action 1 (Block / Challenge / Intervene)
    const expLossBlock = q * costBlockLegit + p * costBlockFraud;

    const recommendedAction =
      expLossBlock < expLossApprove ? "Block / Challenge" : "Approve Transaction";
    const costSaving = Math.abs(expLossApprove - expLossBlock);

    // Optimal threshold p* where expected losses are equal:
    // q*L_app_legit + p*L_app_fraud = q*L_blk_legit + p*L_blk_fraud
    const num = costBlockLegit - costApproveLegit;
    const denom = costApproveFraud - costBlockFraud + (costBlockLegit - costApproveLegit);
    const optimalThreshold = denom > 0 ? Math.max(0, Math.min(1, num / denom)) : 0.5;

    return {
      expLossApprove,
      expLossBlock,
      recommendedAction,
      costSaving,
      optimalThreshold,
    };
  }, [
    predictedRiskProb,
    costApproveLegit,
    costApproveFraud,
    costBlockLegit,
    costBlockFraud,
  ]);

  // ---------------------------------------------------------------------------
  // LAB 3: GAUSSIAN PROCESS REGRESSION & UNCERTAINTY VISUALIZER
  // ---------------------------------------------------------------------------
  const [gpLengthScale, setGpLengthScale] = useState(1.4);
  const [gpNoiseVariance, setGpNoiseVariance] = useState(0.1);

  // 5 sparse training points in [0, 10]
  const gpTrainingPoints = useMemo(
    () => [
      { x: 1.0, y: 1.8 },
      { x: 2.2, y: 3.4 },
      { x: 3.8, y: 3.1 },
      { x: 7.5, y: 1.2 },
      { x: 8.8, y: 2.9 },
    ],
    []
  );

  const gpGridPoints = useMemo(() => {
    const grid = [];
    for (let i = 0; i <= 20; i++) {
      const x = i * 0.5; // from 0.0 to 10.0

      // Compute simple analytical GP RBF kernel interpolation
      let num = 0;
      let denom = 0;
      let minDistSq = 999;

      gpTrainingPoints.forEach((pt) => {
        const distSq = Math.pow(x - pt.x, 2);
        if (distSq < minDistSq) minDistSq = distSq;
        const w = Math.exp(-distSq / (2 * Math.pow(gpLengthScale, 2)));
        num += w * pt.y;
        denom += w;
      });

      const mean = denom > 0 ? num / denom : 2.0;
      // Epistemic uncertainty flares where points are far from training data
      const epistemicVar = 1.0 - Math.exp(-minDistSq / (2 * Math.pow(gpLengthScale, 2)));
      const std = Math.sqrt(epistemicVar + gpNoiseVariance);

      grid.push({
        x,
        mean,
        lower: Math.max(0, mean - 1.96 * std),
        upper: Math.min(6, mean + 1.96 * std),
        std,
      });
    }
    return grid;
  }, [gpTrainingPoints, gpLengthScale, gpNoiseVariance]);

  // ---------------------------------------------------------------------------
  // LAB 4: 10-QUESTION CERTIFICATION ASSESSMENT
  // ---------------------------------------------------------------------------
  const quizQuestions = useMemo(
    () => [
      {
        id: 1,
        question:
          "What is the primary advantage of probabilistic modeling over deterministic machine learning?",
        options: [
          "Probabilistic models run in O(1) time complexity on GPUs",
          "Probabilistic models estimate the entire predictive distribution P(y|x), quantifying prediction uncertainty and confidence intervals rather than only outputting a single point estimate",
          "Deterministic models cannot process numerical features",
          "Probabilistic models guarantee 100% classification accuracy on unseen data",
        ],
        correctIndex: 1,
        explanation:
          "Deterministic models produce single fixed values (e.g. house price = $750k) with no indication of confidence. Probabilistic models estimate P(y|x) (e.g., mean $750k with 90% predictive interval [$680k, $820k]), which is critical for risk assessment in healthcare, autonomous driving, and finance.",
      },
      {
        id: 2,
        question:
          "What is the key difference between generative and discriminative probabilistic models?",
        options: [
          "Generative models only work on text, while discriminative models only work on tabular data",
          "Generative models learn the joint distribution P(X, Y) = P(X|Y)P(Y) modeling how data was produced, whereas discriminative models directly model the conditional distribution P(Y|X)",
          "Discriminative models always require prior distributions",
          "Generative models cannot perform classification",
        ],
        correctIndex: 1,
        explanation:
          "Generative models (e.g., Naive Bayes, Gaussian Mixture Models, VAEs) model the joint probability P(X, Y) and can generate synthetic samples. Discriminative models (e.g., Logistic Regression, probabilistic neural networks) focus solely on predicting the target conditional distribution P(Y|X).",
      },
      {
        id: 3,
        question:
          "In Bayesian inference P(θ|D) = [P(D|θ) P(θ)] / P(D), what does each component represent?",
        options: [
          "θ is learning rate, D is depth, P(θ) is momentum",
          "P(θ) is the prior belief; P(D|θ) is the likelihood of observed data given parameters; P(θ|D) is the updated posterior distribution; and P(D) is the marginal likelihood (evidence)",
          "P(θ|D) is the training error; P(D|θ) is the validation loss",
          "P(D) is always zero in continuous distributions",
        ],
        correctIndex: 1,
        explanation:
          "Bayesian inference formally updates prior parameter beliefs P(θ) upon observing dataset D by multiplying by the data likelihood P(D|θ) and normalizing by the evidence P(D) = ∫ P(D|θ)P(θ) dθ to obtain the updated posterior P(θ|D).",
      },
      {
        id: 4,
        question: "What defines a conjugate prior in Bayesian statistics?",
        options: [
          "A prior distribution that has a mean of zero and variance of one",
          "A prior distribution that, when multiplied by the likelihood, yields a posterior distribution belonging to the exact same algebraic probability family as the prior",
          "A prior that can only be evaluated using Monte Carlo Markov Chain (MCMC) sampling",
          "A prior that completely ignores observed training data",
        ],
        correctIndex: 1,
        explanation:
          "When the prior and posterior belong to the same distribution family (e.g., Beta prior + Binomial likelihood = Beta posterior; Normal prior + Normal likelihood with known variance = Normal posterior), the prior is conjugate. This enables exact closed-form analytical updates without numerical integration.",
      },
      {
        id: 5,
        question:
          "What is the fundamental difference between Maximum Likelihood Estimation (MLE) and Maximum A Posteriori (MAP) estimation?",
        options: [
          "MLE maximizes the likelihood P(D|θ) alone, while MAP maximizes the posterior P(θ|D) ∝ P(D|θ)P(θ) by incorporating a prior distribution over parameters",
          "MLE produces a full probability distribution, while MAP produces a single number",
          "MAP is only valid for discrete classification",
          "MLE incorporates prior domain knowledge, whereas MAP does not",
        ],
        correctIndex: 0,
        explanation:
          "MLE finds θ_hat = argmax P(D|θ), relying solely on observed training frequencies and being vulnerable to overfitting on small datasets. MAP finds θ_hat = argmax P(D|θ)P(θ), incorporating prior domain constraints that pull parameter estimates toward plausible baselines.",
      },
      {
        id: 6,
        question:
          "How is L2 regularization (Ridge) mathematically interpreted through Bayesian MAP estimation?",
        options: [
          "As MAP estimation under a Uniform prior distribution on weights",
          "As MAP estimation under an independent zero-mean Gaussian prior distribution w ~ N(0, τ²I) on the model weights",
          "As MAP estimation under a Laplace prior distribution",
          "As maximizing the marginal likelihood with infinite variance",
        ],
        correctIndex: 1,
        explanation:
          "Taking the negative logarithm of the posterior with a Gaussian prior w ~ N(0, τ²I) yields -log P(w|D) = Negative Log-Likelihood + (1 / 2τ²) ||w||₂². The Gaussian prior directly penalizes large squared weights, establishing that L2 regularization is equivalent to Gaussian MAP estimation.",
      },
      {
        id: 7,
        question:
          "In Bayesian Decision Theory, why should a decision system minimize expected loss rather than simply picking the outcome with highest predicted probability?",
        options: [
          "Because probabilities cannot be computed in real-time systems",
          "Because the real-world operational costs of different mistakes (e.g. False Negative vs False Positive) are asymmetric; a low-probability event with catastrophic cost may demand immediate action",
          "Because expected loss always equals zero in optimal classifiers",
          "Because Bayesian decision theory only applies when probabilities are exactly 50%",
        ],
        correctIndex: 1,
        explanation:
          "In medical screening, missing an aggressive disease (False Negative, cost = 1,000) is far worse than conducting a follow-up biopsy on a healthy patient (False Positive, cost = 10). Even if P(Disease) is only 8%, the expected loss of doing nothing far exceeds the cost of intervention.",
      },
      {
        id: 8,
        question:
          "What is a Gaussian Process (GP) in probabilistic machine learning?",
        options: [
          "A deep neural network with Gaussian activation functions",
          "A non-parametric Bayesian approach that defines a prior probability distribution over continuous functions, specified by a mean function m(x) and covariance kernel k(x, x')",
          "An algorithm for sorting numerical arrays in O(N log N) time",
          "A clustering method identical to K-Means",
        ],
        correctIndex: 1,
        explanation:
          "A Gaussian Process f(x) ~ GP(m(x), k(x, x')) generalizes multivariate Gaussian distributions to infinite-dimensional function spaces. Any finite collection of input points has a joint Gaussian distribution, producing exact analytic predictive distributions with grounded uncertainty bounds.",
      },
      {
        id: 9,
        question:
          "What is the critical distinction between aleatoric uncertainty and epistemic uncertainty?",
        options: [
          "Aleatoric uncertainty is measured in decibels, while epistemic is measured in percentages",
          "Aleatoric uncertainty represents inherent stochastic randomness or observation noise in the data (irreducible), whereas epistemic uncertainty represents lack of model knowledge in sparse data regions (reducible by gathering more training data)",
          "Epistemic uncertainty cannot be evaluated using probability",
          "Aleatoric uncertainty only occurs in deep neural networks",
        ],
        correctIndex: 1,
        explanation:
          "Aleatoric uncertainty is irreducible observation noise (e.g. sensor thermal noise, unpredictable human behavior). Epistemic uncertainty reflects the model's ignorance due to limited training data (e.g., predicting outside historical feature ranges); it shrinks toward zero as more representative data is collected.",
      },
      {
        id: 10,
        question:
          "Why is high classification accuracy insufficient to verify whether a probabilistic model is well-calibrated, and what does the Brier Score or Expected Calibration Error (ECE) measure?",
        options: [
          "Accuracy only measures discrete label match; a model can be 90% accurate while severely overconfident (predicting 99.9% probability when true confidence is 60%), which ECE and Brier score detect by measuring probability calibration",
          "Accuracy is undefined for binary classification",
          "ECE can only be computed when dataset size N < 100",
          "Brier Score only measures computational training latency",
        ],
        correctIndex: 0,
        explanation:
          "A model predicting 0.99 confidence for every correct prediction and 0.99 confidence for its errors will have high accuracy but disastrous overconfidence. Calibration metrics (reliability diagrams, ECE, Brier score) measure whether events predicted with probability p actually occur with frequency p across repeated trials.",
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
      <ModuleNav
        currentModuleId="probabilistic-machine-learning"
        trackId="machine-learning"
        course="machine-learning"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8 flex-1">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="text-xs font-mono text-stone-500 flex items-center gap-2"
        >
          <button
            onClick={() => navigate("/")}
            className="hover:text-stone-900 transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => navigate("/learning")}
            className="hover:text-stone-900 transition-colors"
          >
            Curriculum
          </button>
          <span>/</span>
          <button
            onClick={() => navigate("/learning/machine-learning")}
            className="hover:text-stone-900 transition-colors"
          >
            Machine Learning
          </button>
          <span>/</span>
          <span className="text-stone-900 font-bold">Module 20</span>
        </nav>

        {/* Hero Card */}
        <header className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800 border border-orange-200">
                MODULE 20
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-600">
                Advanced Statistical Learning
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-600">
                Uncertainty Quantification
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              Probabilistic Machine Learning &amp; Bayesian Methods
            </h1>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Transition from deterministic predictions to principled distributions. Formulate random variables, update prior convictions via Bayes&rsquo; theorem into conjugate posteriors, contrast Maximum Likelihood (MLE) with Maximum A Posteriori (MAP) and L2/L1 regularization, optimize decisions under asymmetric loss matrices, deploy Gaussian Processes (GPs), disentangle aleatoric from epistemic uncertainty, and verify probability calibration (Log Loss, Brier Score, ECE).
            </p>

            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-stone-500">
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">
                Beta-Binomial Conjugacy
              </span>
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">
                MLE vs MAP
              </span>
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">
                Bayesian Decision Theory
              </span>
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">
                Gaussian Processes (RBF)
              </span>
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">
                Aleatoric vs Epistemic
              </span>
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">
                Expected Calibration Error
              </span>
            </div>
          </div>
        </header>

        {/* Primary View Toggle: Curriculum vs Interactive Workbench */}
        <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
          <div className="flex items-center gap-2 p-1 bg-stone-200/60 rounded-2xl">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "curriculum"
                  ? "bg-white text-stone-900 shadow-xs border border-stone-200/80"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <BookOpen size={16} />
              <span>Full Curriculum (19 Topics)</span>
            </button>
            <button
              onClick={() => setActiveTab("workbench")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "workbench"
                  ? "bg-white text-stone-900 shadow-xs border border-stone-200/80"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Terminal size={16} />
              <span>Interactive Bayesian Workbench (4 Labs)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CURRICULUM SPECIFICATION */}
        {activeTab === "curriculum" && (
          <MachineLearningProbabilisticMLSections />
        )}

        {/* TAB 2: INTERACTIVE BAYESIAN WORKBENCH */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Sub-Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-2xl border border-[#e7e3da] shadow-xs">
              <button
                onClick={() => setActiveWorkbenchTab("conjugate_updating")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "conjugate_updating"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <Percent size={15} />
                <span>Lab 1: Conjugate Beta-Binomial Updating</span>
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("decision_theory")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "decision_theory"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <Scale size={15} />
                <span>Lab 2: Bayesian Decision Optimizer</span>
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("gaussian_process")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "gaussian_process"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <Brain size={15} />
                <span>Lab 3: Gaussian Process Explorer</span>
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

            {/* LAB 1: CONJUGATE BETA-BINOMIAL UPDATING */}
            {activeWorkbenchTab === "conjugate_updating" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 1</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Conjugate Beta-Binomial Updating &amp; Estimator Comparison
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Tune the prior Beta(&alpha;, &beta;) and observe coin toss evidence to observe how the posterior distribution shifts. Contrast Maximum Likelihood (MLE), Maximum A Posteriori (MAP), and the Posterior Mean in real time.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 text-xs">
                    <span className="font-bold text-stone-800 uppercase tracking-wider block">
                      Prior &amp; Evidence Parameters
                    </span>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Prior &alpha; (Pseudo-Heads):</span>
                        <strong>{priorAlpha}</strong>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={priorAlpha}
                        onChange={(e) => setPriorAlpha(parseInt(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Prior &beta; (Pseudo-Tails):</span>
                        <strong>{priorBeta}</strong>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={priorBeta}
                        onChange={(e) => setPriorBeta(parseInt(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div className="pt-2 border-t border-stone-200">
                      <div className="flex justify-between font-mono mb-1">
                        <span>Observed Heads (k):</span>
                        <strong className="text-orange-600">{obsHeads}</strong>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="20"
                        value={obsHeads}
                        onChange={(e) => setObsHeads(parseInt(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Observed Tails (n &minus; k):</span>
                        <strong className="text-stone-700">{obsTails}</strong>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="20"
                        value={obsTails}
                        onChange={(e) => setObsTails(parseInt(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div className="pt-2 border-t border-stone-200 font-mono text-[11px] text-stone-600 space-y-1">
                      <div>Prior Distribution: <strong>Beta({priorAlpha}, {priorBeta})</strong></div>
                      <div>Posterior Distribution: <strong className="text-orange-600">Beta({betaBinomialStats.postAlpha}, {betaBinomialStats.postBeta})</strong></div>
                    </div>
                  </div>

                  {/* PDF Curves & Estimators */}
                  <div className="lg:col-span-2 space-y-4">
                    {/* Visual Curves */}
                    <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-stone-900">
                          Prior vs Posterior Probability Density
                        </span>
                        <div className="flex items-center gap-3 font-mono text-[11px]">
                          <span className="text-stone-400">&bull; Prior Beta</span>
                          <span className="text-orange-600 font-bold">&bull; Updated Posterior</span>
                        </div>
                      </div>

                      <div className="h-44 border-b border-stone-200 flex items-end justify-between gap-1 pt-4">
                        {betaBinomialStats.thetaPoints.map((pt, idx) => (
                          <div key={idx} className="flex-1 flex flex-col justify-end items-center h-full relative group">
                            {/* Prior Bar (Ghosted) */}
                            <div
                              className="w-2.5 bg-stone-300 rounded-t-xs mb-0.5"
                              style={{ height: `${Math.max(2, pt.priorNorm * 0.7)}px` }}
                            />
                            {/* Posterior Bar (Active) */}
                            <div
                              className="w-2.5 bg-orange-600 rounded-t-xs"
                              style={{ height: `${Math.max(2, pt.postNorm * 1.2)}px` }}
                            />
                            <span className="text-[9px] font-mono text-stone-400 mt-1">
                              {idx % 4 === 0 ? pt.th.toFixed(1) : ""}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="text-[11px] text-stone-500 font-mono text-center">
                        Parameter Value &theta; &isin; [0.0, 1.0] (True Probability of Heads)
                      </div>
                    </div>

                    {/* Estimators Comparison Scorecards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
                        <span className="text-[11px] font-mono font-bold text-stone-500 uppercase block">
                          1. MLE (Frequentist)
                        </span>
                        <div className="text-xl font-black font-mono text-stone-900">
                          {betaBinomialStats.mle.toFixed(3)}
                        </div>
                        <span className="text-[10px] text-stone-400 block">k / n (Pure Data)</span>
                      </div>

                      <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 space-y-1">
                        <span className="text-[11px] font-mono font-bold text-orange-700 uppercase block">
                          2. MAP (Posterior Mode)
                        </span>
                        <div className="text-xl font-black font-mono text-orange-600">
                          {betaBinomialStats.map.toFixed(3)}
                        </div>
                        <span className="text-[10px] text-orange-800/80 block">(&alpha;<sub>post</sub>&minus;1) / (&alpha;+&beta;&minus;2)</span>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
                        <span className="text-[11px] font-mono font-bold text-stone-500 uppercase block">
                          3. Posterior Mean E[&theta;|D]
                        </span>
                        <div className="text-xl font-black font-mono text-stone-900">
                          {betaBinomialStats.postMean.toFixed(3)}
                        </div>
                        <span className="text-[10px] text-stone-400 block">&plusmn; {betaBinomialStats.postStd.toFixed(3)} StdDev</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: BAYESIAN DECISION OPTIMIZER */}
            {activeWorkbenchTab === "decision_theory" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 2</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Bayesian Decision Theory &amp; Asymmetric Cost Matrix Optimizer
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Calculate expected losses under asymmetric error consequences. Tune predicted fraud probability <em>p</em> and inspect the derived optimal decision threshold: <em>a<sup>*</sup> = argmin &Sigma; L(a, y) P(y|x)</em>.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 text-xs">
                    <span className="font-bold text-stone-800 uppercase tracking-wider block">
                      Model Predicted Probability
                    </span>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>P(Fraud / Adverse Event):</span>
                        <strong className="text-orange-600">{(predictedRiskProb * 100).toFixed(1)}%</strong>
                      </div>
                      <input
                        type="range"
                        min="0.01"
                        max="0.50"
                        step="0.01"
                        value={predictedRiskProb}
                        onChange={(e) => setPredictedRiskProb(parseFloat(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div className="pt-2 border-t border-stone-200 space-y-2">
                      <span className="font-bold text-stone-700 block uppercase tracking-wider text-[11px]">
                        Cost / Loss Matrix Setup
                      </span>

                      <div>
                        <div className="flex justify-between font-mono text-[11px]">
                          <span>False Negative (Approve Fraud):</span>
                          <strong>₹{costApproveFraud}</strong>
                        </div>
                        <input
                          type="range"
                          min="200"
                          max="2000"
                          step="100"
                          value={costApproveFraud}
                          onChange={(e) => setCostApproveFraud(parseInt(e.target.value))}
                          className="w-full accent-red-600 cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between font-mono text-[11px]">
                          <span>False Positive (Block Legit):</span>
                          <strong>₹{costBlockLegit}</strong>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="150"
                          step="10"
                          value={costBlockLegit}
                          onChange={(e) => setCostBlockLegit(parseInt(e.target.value))}
                          className="w-full accent-amber-600 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Decision Evaluation Output */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                      <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                        Expected Loss Comparison
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div
                          className={`p-4 rounded-xl border transition-all ${
                            decisionAnalysis.recommendedAction === "Approve Transaction"
                              ? "bg-emerald-50 border-emerald-300 shadow-xs"
                              : "bg-white border-stone-200 opacity-80"
                          }`}
                        >
                          <span className="text-[11px] font-mono text-stone-500 uppercase block">
                            Action 0: Approve Transaction
                          </span>
                          <div className="text-2xl font-black font-mono text-stone-900 mt-1">
                            ₹{decisionAnalysis.expLossApprove.toFixed(1)}
                          </div>
                          <span className="text-[11px] text-stone-500 font-mono block mt-1">
                            E[Loss] = {(1 - predictedRiskProb).toFixed(2)}&times;₹{costApproveLegit} +{" "}
                            {predictedRiskProb.toFixed(2)}&times;₹{costApproveFraud}
                          </span>
                        </div>

                        <div
                          className={`p-4 rounded-xl border transition-all ${
                            decisionAnalysis.recommendedAction === "Block / Challenge"
                              ? "bg-emerald-50 border-emerald-300 shadow-xs"
                              : "bg-white border-stone-200 opacity-80"
                          }`}
                        >
                          <span className="text-[11px] font-mono text-stone-500 uppercase block">
                            Action 1: Block / Challenge
                          </span>
                          <div className="text-2xl font-black font-mono text-stone-900 mt-1">
                            ₹{decisionAnalysis.expLossBlock.toFixed(1)}
                          </div>
                          <span className="text-[11px] text-stone-500 font-mono block mt-1">
                            E[Loss] = {(1 - predictedRiskProb).toFixed(2)}&times;₹{costBlockLegit} +{" "}
                            {predictedRiskProb.toFixed(2)}&times;₹{costBlockFraud}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <span className="text-xs font-bold text-stone-500 uppercase block">
                            Optimal Bayesian Action
                          </span>
                          <div className="text-lg font-black text-orange-600">
                            {decisionAnalysis.recommendedAction}
                          </div>
                        </div>

                        <div className="text-right font-mono text-xs">
                          <span className="text-stone-500 block">Critical Decision Threshold (p<sup>*</sup>):</span>
                          <span className="font-bold text-stone-900">
                            {(decisionAnalysis.optimalThreshold * 100).toFixed(2)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: GAUSSIAN PROCESS REGRESSION */}
            {activeWorkbenchTab === "gaussian_process" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 3</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Gaussian Process Regression &amp; Epistemic Uncertainty
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Explore non-parametric Bayesian function regression <em>f(x) &sim; GP(m(x), k(x, x&prime;))</em>. Tune the RBF kernel length scale <em>l</em> and observation noise &sigma;<sub>n</sub> to see analytical 95% predictive confidence intervals flare outward in sparse unobserved regions.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 text-xs">
                    <span className="font-bold text-stone-800 uppercase tracking-wider block">
                      RBF Kernel Hyperparameters
                    </span>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Length Scale (l):</span>
                        <strong>{gpLengthScale.toFixed(2)}</strong>
                      </div>
                      <input
                        type="range"
                        min="0.6"
                        max="3.0"
                        step="0.2"
                        value={gpLengthScale}
                        onChange={(e) => setGpLengthScale(parseFloat(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                      <span className="text-[10px] text-stone-500">Controls function smoothness and correlation range.</span>
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Observation Noise (&sigma;<sub>n</sub>):</span>
                        <strong>{gpNoiseVariance.toFixed(2)}</strong>
                      </div>
                      <input
                        type="range"
                        min="0.02"
                        max="0.40"
                        step="0.02"
                        value={gpNoiseVariance}
                        onChange={(e) => setGpNoiseVariance(parseFloat(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                      <span className="text-[10px] text-stone-500">Irreducible aleatoric measurement noise floor.</span>
                    </div>

                    <div className="pt-2 border-t border-stone-200 font-mono text-[11px] space-y-1">
                      <span className="font-bold text-stone-700 block">Training Observations: 5 Points</span>
                      <div className="flex flex-wrap gap-1 text-[10px] text-stone-600">
                        {gpTrainingPoints.map((pt, i) => (
                          <span key={i} className="bg-white px-2 py-0.5 rounded border border-stone-200">
                            ({pt.x}, {pt.y})
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Function & Uncertainty Band Visualizer */}
                  <div className="lg:col-span-2 space-y-3">
                    <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-stone-900">
                          GP Predictive Mean &amp; 95% Confidence Band (&plusmn;1.96&sigma;<sub>*</sub>)
                        </span>
                        <div className="flex items-center gap-3 font-mono text-[11px]">
                          <span className="text-orange-600 font-bold">&bull; Training Points</span>
                          <span className="text-blue-600">&bull; Mean &mu;<sub>*</sub></span>
                          <span className="text-blue-300 font-bold">&bull; 95% CI Band</span>
                        </div>
                      </div>

                      {/* Simulated Function Plot */}
                      <div className="h-44 border-b border-stone-200 flex items-center justify-between gap-1 pt-4 relative">
                        {gpGridPoints.map((pt, idx) => {
                          const meanHeightPct = Math.min(100, Math.max(10, (pt.mean / 5) * 100));
                          const bandSpanPct = Math.min(80, Math.max(15, ((pt.upper - pt.lower) / 5) * 100));

                          return (
                            <div key={idx} className="flex-1 flex flex-col justify-center items-center h-full relative group">
                              {/* Uncertainty Confidence Band */}
                              <div
                                className="w-full bg-blue-100/80 border-y border-blue-200 absolute"
                                style={{
                                  height: `${bandSpanPct}%`,
                                  top: `${Math.max(5, 50 - bandSpanPct / 2)}%`,
                                }}
                              />
                              {/* Predictive Mean Node */}
                              <div
                                className="w-1.5 h-1.5 bg-blue-600 rounded-full z-10"
                                style={{
                                  position: "absolute",
                                  bottom: `${meanHeightPct}%`,
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>

                      <p className="text-[11px] text-stone-600 leading-relaxed">
                        Notice how the confidence envelope pinches tight around <em>x &isin; [1, 4]</em> where training observations exist, but dramatically widens across the gap <em>x &isin; [4.5, 7.0]</em>. This cleanly illustrates <strong>epistemic uncertainty</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 4: CERTIFICATION ASSESSMENT */}
            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-orange-600 uppercase">Assessment Lab 4</span>
                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                      Probabilistic &amp; Bayesian Methods Certification
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Validate your understanding of prior/posterior calculus, conjugate distributions, MLE vs MAP, regularization equivalence, Bayesian decision theory, and Gaussian Processes.
                    </p>
                  </div>
                  {showResults && (
                    <div className="text-right">
                      <span className="text-xs font-mono text-stone-500 uppercase">Score</span>
                      <div className="text-2xl font-black font-mono text-orange-600">
                        {quizScore} / {quizQuestions.length}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q, idx) => (
                    <div key={q.id} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-800 font-mono text-xs flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <h3 className="font-bold text-stone-900 text-sm leading-snug">{q.question}</h3>
                      </div>

                      <div className="space-y-2 pt-1">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selectedAnswers[q.id] === optIdx;
                          const isCorrect = optIdx === q.correctIndex;
                          let btnStyle = "bg-white border-stone-200 hover:bg-stone-100 text-stone-800";

                          if (showResults) {
                            if (isCorrect) btnStyle = "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold";
                            else if (isSelected && !isCorrect) btnStyle = "bg-red-50 border-red-300 text-red-950";
                          } else if (isSelected) {
                            btnStyle = "bg-orange-50 border-orange-400 text-orange-950 font-bold";
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => {
                                if (!showResults) {
                                  setSelectedAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
                                }
                              }}
                              className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${btnStyle}`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="font-mono text-stone-400 font-bold">
                                  {String.fromCharCode(65 + optIdx)}.
                                </span>
                                <span>{opt}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {showResults && (
                        <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-700 leading-relaxed space-y-1">
                          <span className="font-bold text-stone-900 block">Explanation:</span>
                          <p>{q.explanation}</p>
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
            onClick={() => navigate("/learning/machine-learning/time-series-forecasting")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 19 &mdash; Time Series Analysis &amp; Forecasting</span>
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
