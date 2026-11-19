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
  Compass,
  Hash,
  Binary,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import MachineLearningKNNNaiveBayesSections from "./MachineLearningKNNNaiveBayesSections";

export default function MachineLearningKNNNaiveBayes() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("knn_sim"); // 'knn_sim' | 'curse_dim' | 'nb_explorer' | 'quiz'

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 1: KNN NEIGHBORHOOD & DISTANCE METRIC SIMULATOR
  // ---------------------------------------------------------------------------
  const [kNeighbors, setKNeighbors] = useState(5); // 1 to 15
  const [distanceMetric, setDistanceMetric] = useState("euclidean"); // 'euclidean' | 'manhattan' | 'minkowski'
  const [weightingScheme, setWeightingScheme] = useState("uniform"); // 'uniform' | 'distance'

  // 18 simulated 2D points in a 360x220 canvas
  const trainingPoints = useMemo(() => [
    { id: 1, x: 120, y: 90, label: "Class A", color: "#38bdf8" },
    { id: 2, x: 140, y: 80, label: "Class A", color: "#38bdf8" },
    { id: 3, x: 160, y: 75, label: "Class A", color: "#38bdf8" },
    { id: 4, x: 130, y: 130, label: "Class A", color: "#38bdf8" },
    { id: 5, x: 90, y: 110, label: "Class A", color: "#38bdf8" },
    { id: 6, x: 105, y: 65, label: "Class A", color: "#38bdf8" },
    { id: 7, x: 70, y: 140, label: "Class A", color: "#38bdf8" },
    { id: 8, x: 175, y: 95, label: "Class A", color: "#38bdf8" },
    { id: 9, x: 110, y: 155, label: "Class A", color: "#38bdf8" },
    { id: 10, x: 190, y: 125, label: "Class B", color: "#fb923c" },
    { id: 11, x: 210, y: 110, label: "Class B", color: "#fb923c" },
    { id: 12, x: 170, y: 145, label: "Class B", color: "#fb923c" },
    { id: 13, x: 230, y: 135, label: "Class B", color: "#fb923c" },
    { id: 14, x: 185, y: 170, label: "Class B", color: "#fb923c" },
    { id: 15, x: 240, y: 95, label: "Class B", color: "#fb923c" },
    { id: 16, x: 220, y: 165, label: "Class B", color: "#fb923c" },
    { id: 17, x: 260, y: 140, label: "Class B", color: "#fb923c" },
    { id: 18, x: 150, y: 160, label: "Class B", color: "#fb923c" },
  ], []);

  const queryPoint = { x: 155, y: 115 }; // Query observation Q

  const knnSimResults = useMemo(() => {
    const computed = trainingPoints.map((pt) => {
      let dist = 0;
      const dx = Math.abs(pt.x - queryPoint.x);
      const dy = Math.abs(pt.y - queryPoint.y);

      if (distanceMetric === "manhattan") {
        dist = dx + dy;
      } else if (distanceMetric === "minkowski") {
        dist = Math.pow(Math.pow(dx, 3) + Math.pow(dy, 3), 1 / 3);
      } else {
        // Euclidean
        dist = Math.sqrt(dx * dx + dy * dy);
      }

      return { ...pt, dist: Math.round(dist * 10) / 10 };
    });

    computed.sort((a, b) => a.dist - b.dist);
    const neighbors = computed.slice(0, kNeighbors);
    const maxRadius = neighbors[neighbors.length - 1].dist;

    let classAVotes = 0;
    let classBVotes = 0;

    neighbors.forEach((n) => {
      const weight = weightingScheme === "distance" ? 1 / Math.max(1, n.dist) : 1;
      if (n.label === "Class A") classAVotes += weight;
      else classBVotes += weight;
    });

    const totalVotes = classAVotes + classBVotes;
    const probA = Math.round((classAVotes / totalVotes) * 100);
    const probB = 100 - probA;
    const predictedClass = classAVotes >= classBVotes ? "Class A (Blue)" : "Class B (Orange)";

    return {
      neighbors,
      maxRadius,
      classAVotes: classAVotes.toFixed(2),
      classBVotes: classBVotes.toFixed(2),
      probA,
      probB,
      predictedClass,
    };
  }, [trainingPoints, kNeighbors, distanceMetric, weightingScheme]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 2: CURSE OF DIMENSIONALITY & DISTANCE CONCENTRATION
  // ---------------------------------------------------------------------------
  const [dimensions, setDimensions] = useState(10); // 2 to 100

  const dimMetrics = useMemo(() => {
    const d = dimensions;
    // Expected distance scaling in high dimensions
    const dMin = Math.round(Math.sqrt(d) * 8.2);
    const dMax = Math.round(dMin + Math.max(3, 45 / Math.sqrt(d)));
    const contrastRatio = (((dMax - dMin) / dMin) * 100).toFixed(1);

    const rawKnnAcc = Math.max(58, Math.round(95 - d * 0.35));
    const pcaKnnAcc = Math.min(94, Math.round(92 - Math.log2(d) * 1.5));

    return {
      dMin,
      dMax,
      contrastRatio,
      rawKnnAcc,
      pcaKnnAcc,
    };
  }, [dimensions]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 3: NAIVE BAYES PROBABILITY & LAPLACE SMOOTHING
  // ---------------------------------------------------------------------------
  const [selectedNbModel, setSelectedNbModel] = useState("multinomial"); // 'gaussian' | 'multinomial' | 'bernoulli'
  const [laplaceAlpha, setLaplaceAlpha] = useState(1.0); // 0.0 to 3.0

  const nbDetails = useMemo(() => {
    switch (selectedNbModel) {
      case "gaussian":
        return {
          title: "Gaussian Naive Bayes (GaussianNB)",
          inputData: "Continuous numerical measurements (e.g. Sepal & Petal lengths)",
          formula: "P(xᵢ | C) = 1 / √(2πσ²) · exp(-(xᵢ - μ)² / (2σ²))",
          parameters: "Class priors P(C), Feature means μ_C, Variances σ²_C",
          zeroIssue: "Mitigated via var_smoothing parameter (default 1e-9) to stabilize tiny variances.",
          bestUse: "Sensor measurements, biometric features, general continuous engineering metrics.",
        };
      case "multinomial":
        return {
          title: "Multinomial Naive Bayes (MultinomialNB)",
          inputData: "Discrete term frequency / count vectors (e.g. CountVectorizer word counts)",
          formula: "P(wᵢ | C) = (N_Ci + α) / (N_C + α · V)",
          parameters: "Feature counts per class N_Ci, Total class words N_C, Vocabulary size V",
          zeroIssue: laplaceAlpha === 0
            ? "CRITICAL: Unseen words have count 0, zeroing out the entire posterior probability!"
            : `Laplace smoothing (α=${laplaceAlpha}) assigns non-zero baseline likelihood to every vocabulary term.`,
          bestUse: "Text classification, spam detection, customer sentiment, document categorization.",
        };
      case "bernoulli":
        return {
          title: "Bernoulli Naive Bayes (BernoulliNB)",
          inputData: "Binary indicator vectors {0, 1} (whether word w is present or absent)",
          formula: "P(X | C) = ∏ p_i^x_i · (1 - p_i)^(1 - x_i)",
          parameters: "Presence probability p_i = P(x_i = 1 | C)",
          zeroIssue: `Laplace smoothing (α=${laplaceAlpha}) prevents zero probabilities for both present and absent words.`,
          bestUse: "Short text classification, keyword occurrence flags, Boolean medical checklists.",
        };
      default:
        return {};
    }
  }, [selectedNbModel, laplaceAlpha]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 4: ASSESSMENT EXAM (10 QUESTIONS)
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Why is K-Nearest Neighbors (KNN) classified as an 'Instance-Based' or 'Lazy Learning' algorithm?",
      options: [
        "It trains an explicit parametric linear model with gradient descent",
        "It stores training observations and defers nearly all computational effort until query/prediction time",
        "It builds shallow decision trees that prune automatically",
        "It computes posterior probabilities without needing training data",
      ],
      correct: 1,
      explanation: "KNN is a non-parametric lazy learner: it does not learn a fixed set of mathematical model parameters during training. Instead, it memorizes the training dataset and performs distance calculations dynamically whenever a new query sample needs prediction.",
    },
    {
      id: 2,
      question: "In the generalized Minkowski distance metric formula d(x, z) = (Σ |x_i - z_i|^p)^(1/p), what do p=1 and p=2 correspond to?",
      options: [
        "p=1 is Chebyshev distance; p=2 is Cosine similarity",
        "p=1 is Manhattan (City Block / L1) distance; p=2 is Euclidean (L2) straight-line distance",
        "p=1 is Euclidean distance; p=2 is Hamming distance",
        "p=1 is Mahalanobis distance; p=2 is Jaccard distance",
      ],
      correct: 1,
      explanation: "When p=1, Minkowski distance simplifies to Manhattan distance (sum of absolute coordinate differences). When p=2, it corresponds to Euclidean straight-line distance (square root of sum of squared differences).",
    },
    {
      id: 3,
      question: "What is the expected consequence of selecting an extremely small K (e.g., K = 1) in KNN classification?",
      options: [
        "High bias and underfitting, creating an excessively smooth boundary",
        "High variance and overfitting, making the decision boundary highly sensitive to noisy training points",
        "Automatic conversion of KNN into a Naive Bayes classifier",
        "Elimination of all distance computation requirements",
      ],
      correct: 1,
      explanation: "When K=1, the prediction depends entirely on the single nearest neighbor. Any noise, mislabeled outlier, or artifact in the training set will carve out isolated prediction islands, producing high variance and severe overfitting.",
    },
    {
      id: 4,
      question: "How does distance-weighted voting (weights='distance') modify the KNN voting mechanism compared to uniform voting?",
      options: [
        "It restricts voting to only the farthest neighbor",
        "It assigns each neighbor a voting weight inversely proportional to its distance (w_i = 1 / d_i), giving closer neighbors greater influence",
        "It normalizes feature values to zero mean before training",
        "It replaces class labels with continuous Gaussian probabilities",
      ],
      correct: 1,
      explanation: "Under distance weighting, each neighbor's vote is scaled by w_i = 1 / d_i (or 1 / d_i^2). Closer neighbors exert substantially higher voting leverage than distant border neighbors, which helps resolve ambiguous boundaries.",
    },
    {
      id: 5,
      question: "What primary phenomenon characterizes the 'Curse of Dimensionality' in distance-based algorithms like KNN?",
      options: [
        "Training time drops to zero as features increase",
        "Distances between observations concentrate and become nearly uniform, rendering nearest vs. farthest neighbors indistinguishable",
        "All features automatically convert into Gaussian distributions",
        "The model is mathematically guaranteed to achieve 100% test accuracy",
      ],
      correct: 1,
      explanation: "In high-dimensional spaces, volume grows exponentially and data becomes exceptionally sparse. As dimensionality D increases, the ratio (d_max - d_min) / d_min approaches zero, meaning all points become roughly equidistant from the query point.",
    },
    {
      id: 6,
      question: "When is a KD-Tree search structure generally preferred over a Brute-Force search in KNN?",
      options: [
        "When feature dimensionality is very high (D > 50) and sample count is tiny",
        "When feature dimensionality is low to moderate (D < 20) and sample count N is large, allowing O(log N) lookup",
        "When the target variable is continuous and requires SVR",
        "When training exclusively on text TF-IDF matrices",
      ],
      correct: 1,
      explanation: "KD-Trees hierarchically partition coordinate axes to achieve O(log N) nearest neighbor search. However, in high dimensions (D > 20), KD-Trees suffer from the curse of dimensionality and degenerate to O(N), where Brute Force is often faster.",
    },
    {
      id: 7,
      question: "What is the core 'Naive' assumption made by Naive Bayes classifiers?",
      options: [
        "All classes have identical prior probabilities P(C_k) = 1 / K",
        "All input features are conditionally independent of each other given the target class label",
        "The decision boundary is strictly linear in the original input space",
        "Features must follow a uniform distribution",
      ],
      correct: 1,
      explanation: "Naive Bayes assumes conditional independence: P(x_1, x_2, ..., x_n | C) = ∏ P(x_i | C). While this assumption is almost never strictly true in practice, Naive Bayes often performs remarkably well for classification.",
    },
    {
      id: 8,
      question: "Why do Naive Bayes implementations compute the sum of log-probabilities rather than the product of probabilities?",
      options: [
        "To satisfy the triangle inequality of distance metrics",
        "To prevent numerical floating-point underflow caused by multiplying dozens or hundreds of small probabilities",
        "To convert the classifier into a neural network",
        "Because logarithms eliminate the need for training labels",
      ],
      correct: 1,
      explanation: "Multiplying hundreds of probabilities between 0 and 1 leads to severe floating-point underflow (values smaller than 1e-300 rounded to 0.0). Taking logs converts multiplication into addition: log P(C) + Σ log P(x_i | C), ensuring numerical stability.",
    },
    {
      id: 9,
      question: "Which Naive Bayes variant is specifically formulated for binary word-presence features (whether a word appears or not)?",
      options: [
        "GaussianNB",
        "MultinomialNB",
        "BernoulliNB",
        "ComplementNB",
      ],
      correct: 2,
      explanation: "BernoulliNB explicitly models binary {0, 1} indicator features. It penalizes non-occurrence as well as rewarding occurrence: P(X | C) = ∏ p_i^x_i · (1 - p_i)^(1 - x_i). MultinomialNB models integer count vectors, and GaussianNB models continuous distributions.",
    },
    {
      id: 10,
      question: "What is the purpose of Laplace smoothing (additive smoothing with α = 1) in Multinomial and Bernoulli Naive Bayes?",
      options: [
        "To reduce model variance by pruning decision rules",
        "To prevent unseen vocabulary words in test documents from having a zero likelihood P(x_i | C) = 0 that zeroes out the entire posterior",
        "To normalize features so their standard deviation equals one",
        "To force equal class priors across all categories",
      ],
      correct: 1,
      explanation: "If a word never appears with class C in training data, raw maximum likelihood gives P(word | C) = 0. Because Naive Bayes multiplies feature likelihoods, a single zero wipes out the entire class probability. Laplace smoothing adds α to counts so P(x_i | C) > 0.",
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
      <ModuleNav track="machine-learning" currentModuleId="knn-naive-bayes" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Badge & Title */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-orange-600" />
              Machine Learning Track &bull; Module 11
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              26 COMPREHENSIVE SECTIONS &middot; LAZY &amp; PROBABILISTIC LEARNING
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 11 &mdash; KNN &amp; Naive Bayes Algorithms
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Master Instance-Based Lazy Learning and Probabilistic Classification. Understand K-Nearest Neighbors (KNN classification &amp; regression), distance metric geometries (Euclidean, Manhattan, Minkowski), optimal K selection, the Curse of Dimensionality and distance concentration, KD-Tree and Ball Tree indexing backends, Bayes' Theorem, conditional feature independence, GaussianNB, MultinomialNB, BernoulliNB, and Laplace smoothing.
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
        {activeTab === "curriculum" && <MachineLearningKNNNaiveBayesSections />}

        {/* TAB 2: INTERACTIVE WORKBENCHES */}
        {activeTab === "workbench" && (
          <div className="space-y-8">
            {/* Sub-workbench selector */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-stone-200/60 rounded-2xl w-fit text-xs font-mono">
              <button
                onClick={() => setActiveWorkbenchTab("knn_sim")}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeWorkbenchTab === "knn_sim"
                    ? "bg-white text-stone-900 font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                1. KNN Neighborhood Simulator
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("curse_dim")}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeWorkbenchTab === "curse_dim"
                    ? "bg-white text-stone-900 font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                2. Curse of Dimensionality Lab
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("nb_explorer")}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeWorkbenchTab === "nb_explorer"
                    ? "bg-white text-stone-900 font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                3. Naive Bayes Likelihood &amp; Laplace Lab
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-white text-stone-900 font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                4. Module 11 Assessment Exam
              </button>
            </div>

            {/* BENCH 1: KNN NEIGHBORHOOD SIMULATOR */}
            {activeWorkbenchTab === "knn_sim" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">
                      KNN Neighborhood &amp; Distance Metric Simulator
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Adjust K, switch distance metrics, and compare uniform vs distance-weighted voting around query sample Q.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-50 text-orange-700 border border-orange-200">
                    Predicted: {knnSimResults.predictedClass}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="space-y-5 bg-stone-50 p-5 rounded-2xl border border-stone-200 text-xs font-mono">
                    <div>
                      <div className="flex justify-between font-bold mb-1">
                        <span>Number of Neighbors (K):</span>
                        <span className="text-orange-700 text-sm font-sans">{kNeighbors}</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="15"
                        step="2"
                        value={kNeighbors}
                        onChange={(e) => setKNeighbors(parseInt(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                        <span>K=1 (High Variance / Overfit)</span>
                        <span>K=15 (High Bias / Underfit)</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-stone-700 mb-2">Distance Metric:</label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {[
                          { id: "euclidean", label: "Euclidean (p=2)" },
                          { id: "manhattan", label: "Manhattan (p=1)" },
                          { id: "minkowski", label: "Minkowski (p=3)" },
                        ].map((m) => (
                          <button
                            key={m.id}
                            onClick={() => setDistanceMetric(m.id)}
                            className={`py-2 px-1 rounded-xl text-center font-bold text-[11px] cursor-pointer border ${
                              distanceMetric === m.id
                                ? "bg-stone-900 text-white border-stone-900"
                                : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                            }`}
                          >
                            {m.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-stone-700 mb-2">Voting Scheme:</label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: "uniform", label: "Uniform (Equal)" },
                          { id: "distance", label: "Distance-Weighted (1/d)" },
                        ].map((w) => (
                          <button
                            key={w.id}
                            onClick={() => setWeightingScheme(w.id)}
                            className={`py-2 rounded-xl text-center font-bold text-[11px] cursor-pointer border ${
                              weightingScheme === w.id
                                ? "bg-orange-600 text-white border-orange-600"
                                : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                            }`}
                          >
                            {w.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-200 space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Max Neighborhood Radius:</span>
                        <span className="font-bold text-stone-900">{knnSimResults.maxRadius} px</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Class A (Blue) Score:</span>
                        <span className="font-bold text-sky-600">{knnSimResults.classAVotes} ({knnSimResults.probA}%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Class B (Orange) Score:</span>
                        <span className="font-bold text-orange-600">{knnSimResults.classBVotes} ({knnSimResults.probB}%)</span>
                      </div>
                    </div>
                  </div>

                  {/* SVG Canvas */}
                  <div className="lg:col-span-2 bg-[#1c1917] p-5 rounded-2xl border border-stone-800 text-white flex flex-col justify-between">
                    <div className="flex justify-between items-center text-xs font-mono mb-2">
                      <span className="text-orange-400 font-bold"># Feature Space &amp; Dynamic KNN Neighborhood</span>
                      <span className="text-stone-400">Metric: {distanceMetric} &bull; K={kNeighbors}</span>
                    </div>

                    <div className="relative w-full h-64 bg-stone-900/60 rounded-xl border border-stone-800 overflow-hidden flex items-center justify-center">
                      <svg viewBox="0 0 360 220" className="w-full h-full">
                        {/* Shaded Neighborhood Radius Circle around Query Point */}
                        <circle
                          cx={queryPoint.x}
                          cy={queryPoint.y}
                          r={knnSimResults.maxRadius}
                          fill="rgba(249, 115, 22, 0.12)"
                          stroke="#f97316"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                        />

                        {/* Connection lines from Query to K Neighbors */}
                        {knnSimResults.neighbors.map((n) => (
                          <line
                            key={n.id}
                            x1={queryPoint.x}
                            y1={queryPoint.y}
                            x2={n.x}
                            y2={n.y}
                            stroke={n.color}
                            strokeWidth="1.2"
                            strokeOpacity="0.7"
                          />
                        ))}

                        {/* All Training Points */}
                        {trainingPoints.map((pt) => {
                          const isSelectedNeighbor = knnSimResults.neighbors.some((n) => n.id === pt.id);

                          return (
                            <g key={pt.id}>
                              {isSelectedNeighbor && (
                                <circle cx={pt.x} cy={pt.y} r="9" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="2 2" />
                              )}
                              <circle
                                cx={pt.x}
                                cy={pt.y}
                                r={pt.label === "Class A" ? 5 : 5.5}
                                fill={pt.color}
                              />
                            </g>
                          );
                        })}

                        {/* Query Point Q */}
                        <circle cx={queryPoint.x} cy={queryPoint.y} r="8" fill="#e11d48" stroke="#ffffff" strokeWidth="2.5" />
                        <text x={queryPoint.x + 12} y={queryPoint.y + 4} fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace">
                          Q (Query)
                        </text>

                        {/* Legend */}
                        <text x="15" y="25" fill="#38bdf8" fontSize="10" fontFamily="monospace">&bull; Class A (Blue)</text>
                        <text x="15" y="40" fill="#fb923c" fontSize="10" fontFamily="monospace">&bull; Class B (Orange)</text>
                      </svg>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-4 text-xs font-mono">
                      <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
                        <span className="text-stone-400 block">Class A Posterior:</span>
                        <span className="text-base font-bold text-sky-400">{knnSimResults.probA}%</span>
                      </div>
                      <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
                        <span className="text-stone-400 block">Class B Posterior:</span>
                        <span className="text-base font-bold text-orange-400">{knnSimResults.probB}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* BENCH 2: CURSE OF DIMENSIONALITY LAB */}
            {activeWorkbenchTab === "curse_dim" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    Curse of Dimensionality &amp; Distance Concentration Lab
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Observe how increasing feature dimensionality causes Euclidean distances to concentrate, collapsing raw KNN accuracy unless PCA dimensionality reduction is applied.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="space-y-4 bg-stone-50 p-5 rounded-2xl border border-stone-200 text-xs font-mono">
                    <div>
                      <div className="flex justify-between font-bold mb-1">
                        <span>Feature Dimensionality (D):</span>
                        <span className="text-orange-700 text-sm font-sans">{dimensions} Dimensions</span>
                      </div>
                      <input
                        type="range"
                        min="2"
                        max="100"
                        step="2"
                        value={dimensions}
                        onChange={(e) => setDimensions(parseInt(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                        <span>2D (Dense / High Contrast)</span>
                        <span>100D (Extreme Sparsity)</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-200 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Min Distance (d_min):</span>
                        <span className="font-bold text-stone-900">{dimMetrics.dMin}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Max Distance (d_max):</span>
                        <span className="font-bold text-stone-900">{dimMetrics.dMax}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Distance Contrast Ratio:</span>
                        <span className="font-bold text-rose-700">{dimMetrics.contrastRatio}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Comparison Cards */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200 text-xs">
                        <span className="font-mono text-rose-700 uppercase font-bold block mb-1">Raw KNN Accuracy</span>
                        <span className="text-3xl font-black text-rose-950 block">{dimMetrics.rawKnnAcc}%</span>
                        <p className="text-stone-600 mt-2 leading-relaxed">
                          As D rises to {dimensions}, the ratio (d_max - d_min) / d_min drops to {dimMetrics.contrastRatio}%. All points become nearly equidistant, degrading neighbor selection quality.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 text-xs">
                        <span className="font-mono text-emerald-700 uppercase font-bold block mb-1">PCA + KNN Pipeline Accuracy</span>
                        <span className="text-3xl font-black text-emerald-950 block">{dimMetrics.pcaKnnAcc}%</span>
                        <p className="text-stone-600 mt-2 leading-relaxed">
                          Projecting features onto principal components explaining 95% variance eliminates noisy orthogonal dimensions and restores discriminative distance contrast.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 text-xs font-mono">
                      <div className="text-orange-400 font-bold mb-1"># High-Dimensional Scikit-Learn Pipeline Fix:</div>
                      <div>
                        from sklearn.decomposition import PCA<br />
                        pipeline = make_pipeline(StandardScaler(), PCA(n_components=0.95), KNeighborsClassifier(n_neighbors=5))
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* BENCH 3: NAIVE BAYES EXPLORER */}
            {activeWorkbenchTab === "nb_explorer" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    Naive Bayes Distribution &amp; Laplace Smoothing Lab
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Compare continuous Gaussian vs discrete count Multinomial vs binary indicator Bernoulli distributions and explore how Laplace smoothing prevents zero-frequency collapse.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "gaussian", label: "GaussianNB (Continuous)" },
                    { id: "multinomial", label: "MultinomialNB (Counts)" },
                    { id: "bernoulli", label: "BernoulliNB (Binary Presence)" },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedNbModel(m.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold cursor-pointer transition-all border ${
                        selectedNbModel === m.id
                          ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                          : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="space-y-4 bg-stone-50 p-5 rounded-2xl border border-stone-200 text-xs font-mono">
                    <h4 className="font-bold text-stone-900 text-sm font-sans">{nbDetails.title}</h4>

                    {selectedNbModel !== "gaussian" && (
                      <div>
                        <div className="flex justify-between font-bold mb-1">
                          <span>Laplace Smoothing (&alpha;):</span>
                          <span className="text-orange-700 font-sans">{laplaceAlpha}</span>
                        </div>
                        <input
                          type="range"
                          min="0.0"
                          max="3.0"
                          step="0.2"
                          value={laplaceAlpha}
                          onChange={(e) => setLaplaceAlpha(parseFloat(e.target.value))}
                          className="w-full accent-orange-600 cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                          <span>0.0 (Zero-Probability Risk)</span>
                          <span>1.0 (Standard Laplace)</span>
                        </div>
                      </div>
                    )}

                    <div className="pt-3 border-t border-stone-200 space-y-1 font-sans text-stone-600">
                      <div><strong>Mathematical Formulation:</strong></div>
                      <div className="font-mono bg-white p-2 rounded-lg border border-stone-200 text-orange-700 text-[11px]">
                        {nbDetails.formula}
                      </div>
                    </div>
                  </div>

                  {/* Architectural Analysis */}
                  <div className="md:col-span-2 space-y-3">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                      <span className="font-mono text-stone-400 uppercase text-[10px] block">Expected Input Representation</span>
                      <span className="font-bold text-stone-900 text-sm block mt-0.5">{nbDetails.inputData}</span>
                      <p className="text-stone-600 mt-2">
                        <strong>Learned Model Parameters:</strong> {nbDetails.parameters}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs">
                      <span className="font-bold text-amber-950 block mb-1">Zero-Frequency / Variance Handling</span>
                      <p className="text-stone-700 leading-relaxed">{nbDetails.zeroIssue}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 text-xs font-mono">
                      <div className="text-orange-400 font-bold mb-1">Recommended Production Use Case:</div>
                      <div>{nbDetails.bestUse}</div>
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
                      Module 11 KNN &amp; Naive Bayes Assessment Exam
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Verify your mastery of instance-based learning, distance metric geometries, Bayes' theorem, and probability smoothing.
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
            onClick={() => navigate("/learning/machine-learning/svm")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 10 &mdash; Support Vector Machines (SVM)</span>
          </button>

          <button
            onClick={() => navigate("/learning/machine-learning/model-evaluation")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs transition-colors"
          >
            <span>Next: Module 12 &mdash; Model Evaluation &amp; Cross-Validation</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
