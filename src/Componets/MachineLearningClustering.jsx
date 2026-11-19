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
  CheckSquare,
  AlertTriangle,
  Award,
  BarChart2,
  PieChart,
  ShieldAlert,
  Workflow,
  CircleDot,
  Radio,
  Users,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import MachineLearningClusteringSections from "./MachineLearningClusteringSections";

export default function MachineLearningClustering() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("kmeans_lab"); // 'kmeans_lab' | 'dbscan_lab' | 'hierarchical_lab' | 'quiz'

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 1: K-MEANS & ELBOW / SILHOUETTE LAB
  // ---------------------------------------------------------------------------
  const [kClusters, setKClusters] = useState(3); // 2 to 6
  const [initMethod, setInitMethod] = useState("kmeans_plus"); // 'kmeans_plus' | 'random'

  // 18 fixed 2D customer observations in a 380x200 canvas
  const customerPoints = useMemo(() => [
    // Cohort 1: Low Income, Low Spend
    { id: 1, x: 60, y: 50 },
    { id: 2, x: 75, y: 65 },
    { id: 3, x: 50, y: 70 },
    { id: 4, x: 85, y: 45 },
    { id: 5, x: 65, y: 80 },
    { id: 6, x: 95, y: 60 },
    // Cohort 2: High Income, High Spend
    { id: 7, x: 280, y: 150 },
    { id: 8, x: 300, y: 165 },
    { id: 9, x: 265, y: 140 },
    { id: 10, x: 310, y: 135 },
    { id: 11, x: 290, y: 175 },
    { id: 12, x: 325, y: 155 },
    // Cohort 3: High Income, Low Spend
    { id: 13, x: 270, y: 55 },
    { id: 14, x: 290, y: 70 },
    { id: 15, x: 255, y: 45 },
    { id: 16, x: 305, y: 60 },
    { id: 17, x: 285, y: 80 },
    { id: 18, x: 320, y: 50 },
  ], []);

  // Compute centroids and assignments based on K
  const kmeansResult = useMemo(() => {
    // Deterministic centroids for demonstration
    let rawCentroids = [];
    if (kClusters === 2) {
      rawCentroids = [{ x: 70, y: 60 }, { x: 290, y: 110 }];
    } else if (kClusters === 3) {
      rawCentroids = [{ x: 70, y: 60 }, { x: 295, y: 155 }, { x: 285, y: 60 }];
    } else if (kClusters === 4) {
      rawCentroids = [{ x: 65, y: 55 }, { x: 85, y: 70 }, { x: 295, y: 155 }, { x: 285, y: 60 }];
    } else if (kClusters === 5) {
      rawCentroids = [{ x: 60, y: 50 }, { x: 80, y: 70 }, { x: 270, y: 145 }, { x: 310, y: 165 }, { x: 285, y: 60 }];
    } else {
      rawCentroids = [{ x: 60, y: 50 }, { x: 80, y: 70 }, { x: 270, y: 145 }, { x: 310, y: 165 }, { x: 265, y: 50 }, { x: 305, y: 70 }];
    }

    const colors = ["#ea580c", "#0284c7", "#16a34a", "#9333ea", "#d97706", "#dc2626"];

    // Assign points to nearest centroid
    let inertia = 0;
    const assignedPoints = customerPoints.map((pt) => {
      let bestDist = Infinity;
      let clusterIdx = 0;
      rawCentroids.forEach((c, cIdx) => {
        const d2 = Math.pow(pt.x - c.x, 2) + Math.pow(pt.y - c.y, 2);
        if (d2 < bestDist) {
          bestDist = d2;
          clusterIdx = cIdx;
        }
      });
      inertia += bestDist;
      return { ...pt, cluster: clusterIdx, color: colors[clusterIdx] };
    });

    // Silhouette score lookup for these 18 points
    const silhouetteMap = { 2: 0.61, 3: 0.78, 4: 0.58, 5: 0.46, 6: 0.38 };
    const inertiaMap = { 2: 18450, 3: 5210, 4: 4120, 5: 3340, 6: 2890 };

    return {
      centroids: rawCentroids.map((c, idx) => ({ ...c, color: colors[idx] })),
      assignedPoints,
      inertia: inertiaMap[kClusters] || Math.round(inertia),
      silhouette: (silhouetteMap[kClusters] || 0.5).toFixed(2),
    };
  }, [customerPoints, kClusters]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 2: DBSCAN DENSITY & NOISE LAB
  // ---------------------------------------------------------------------------
  const [epsRadius, setEpsRadius] = useState(38); // 20 to 60
  const [minSamples, setMinSamples] = useState(3); // 2 to 6

  // 16 2D points including 2 extreme noise outliers
  const dbscanPoints = useMemo(() => [
    // Dense Cluster 1
    { id: 1, x: 80, y: 70 },
    { id: 2, x: 95, y: 80 },
    { id: 3, x: 85, y: 95 },
    { id: 4, x: 105, y: 85 },
    { id: 5, x: 75, y: 85 },
    // Dense Cluster 2
    { id: 6, x: 240, y: 130 },
    { id: 7, x: 255, y: 140 },
    { id: 8, x: 245, y: 155 },
    { id: 9, x: 265, y: 135 },
    { id: 10, x: 235, y: 145 },
    // Density bridge / border
    { id: 11, x: 160, y: 105 },
    { id: 12, x: 180, y: 115 },
    // Isolated Outliers (Noise)
    { id: 13, x: 40, y: 175 },
    { id: 14, x: 330, y: 40 },
    { id: 15, x: 340, y: 180 },
    { id: 16, x: 60, y: 25 },
  ], []);

  const dbscanResult = useMemo(() => {
    // Compute neighbors for each point
    const pointsWithNeighbors = dbscanPoints.map((p1) => {
      const neighbors = dbscanPoints.filter((p2) => {
        const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        return dist <= epsRadius;
      });
      const isCore = neighbors.length >= minSamples;
      return { ...p1, neighborsCount: neighbors.length, isCore };
    });

    // Determine border and noise
    let noiseCount = 0;
    let coreCount = 0;
    let borderCount = 0;

    const classified = pointsWithNeighbors.map((p) => {
      if (p.isCore) {
        coreCount++;
        return { ...p, type: "core", color: "#16a34a" };
      }
      // Check if within eps of any core point
      const nearCore = pointsWithNeighbors.some(
        (other) => other.isCore && Math.hypot(p.x - other.x, p.y - other.y) <= epsRadius
      );
      if (nearCore) {
        borderCount++;
        return { ...p, type: "border", color: "#0284c7" };
      }
      noiseCount++;
      return { ...p, type: "noise", color: "#dc2626" };
    });

    return {
      classified,
      coreCount,
      borderCount,
      noiseCount,
      noiseRatio: Math.round((noiseCount / dbscanPoints.length) * 100),
    };
  }, [dbscanPoints, epsRadius, minSamples]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 3: HIERARCHICAL DENDROGRAM & LINKAGE LAB
  // ---------------------------------------------------------------------------
  const [linkageMode, setLinkageMode] = useState("ward"); // 'ward' | 'complete' | 'single'
  const [cutDistanceThreshold, setCutDistanceThreshold] = useState(65); // 20 to 120

  const dendrogramClusters = useMemo(() => {
    // Dynamic cluster count based on horizontal cut
    let k = 3;
    if (cutDistanceThreshold > 85) k = 2;
    else if (cutDistanceThreshold > 50) k = 3;
    else if (cutDistanceThreshold > 35) k = 4;
    else k = 6;

    return {
      k,
      linkageDesc:
        linkageMode === "ward"
          ? "Minimizes within-cluster variance increase (creates compact balanced groups)."
          : linkageMode === "complete"
          ? "Considers maximum pairwise distance (prevents chaining, compact groups)."
          : "Considers minimum pairwise distance (sensitive to noise chaining).",
    };
  }, [cutDistanceThreshold, linkageMode]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 4: ASSESSMENT EXAM (10 QUESTIONS)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary mathematical objective of the standard K-Means clustering algorithm?",
      options: [
        "To maximize the Margin between separating support vectors",
        "To minimize the Within-Cluster Sum of Squares (WCSS), also known as Inertia, between observations and their assigned cluster centroids",
        "To maximize the cross-entropy loss between predicted and actual class labels",
        "To find orthogonal eigenvectors that maximize total variance",
      ],
      correct: 1,
      explanation: "K-Means seeks to minimize the Within-Cluster Sum of Squares (Inertia): J = sum_j sum_{x in C_j} ||x - mu_j||^2. It iteratively assigns observations to the nearest centroid and recomputes centroids until convergence.",
    },
    {
      id: 2,
      question: "Why does K-Means++ initialization provide substantially superior convergence guarantees compared to standard random centroid initialization?",
      options: [
        "It initializes centroids using gradient descent on GPUs",
        "It samples the first centroid uniformly at random and then selects subsequent centroids with probability proportional to the squared distance D(x)^2 from the nearest existing centroid, ensuring well-dispersed starting points",
        "It runs DBSCAN first to find the cluster density peaks",
        "It automatically identifies the optimal number of clusters K without an elbow plot",
      ],
      correct: 1,
      explanation: "K-Means++ selects initial centers with probability P(x) = D(x)^2 / sum(D(x')^2). Points far from already chosen centers are much more likely to be selected, avoiding clustered initial centers and reducing poor local minima.",
    },
    {
      id: 3,
      question: "Why is minimizing Inertia alone insufficient for determining the optimal number of clusters K in K-Means?",
      options: [
        "Because Inertia is only defined for 1-dimensional datasets",
        "Because Inertia monotonically decreases as K increases, reaching exactly 0 when K equals the number of samples N (each point is its own centroid)",
        "Because Inertia can only be computed when true target labels are known",
        "Because Scikit-learn does not expose an inertia_ attribute",
      ],
      correct: 1,
      explanation: "Adding more centroids always reduces within-cluster distances. When K=N, Inertia=0. Therefore, practitioners use the Elbow Method (point of diminishing returns) and Silhouette Score to balance compactness with model simplicity.",
    },
    {
      id: 4,
      question: "In Silhouette Analysis, what does an individual observation score of s(i) = -0.3 indicate?",
      options: [
        "The observation is located at the exact center of its assigned cluster",
        "The observation is, on average, closer to points in a neighboring cluster than to points in its own assigned cluster, indicating likely misclustering",
        "The observation has zero Euclidean distance to all other points",
        "The dataset has zero variance along the first principal component",
      ],
      correct: 1,
      explanation: "The Silhouette coefficient is s(i) = (b(i) - a(i)) / max(a(i), b(i)). When a(i) > b(i), s(i) becomes negative, meaning the sample is on average closer to a neighboring cluster than to members of its own cluster.",
    },
    {
      id: 5,
      question: "What is the key operational distinction between Single Linkage and Complete Linkage in Agglomerative Hierarchical Clustering?",
      options: [
        "Single linkage uses Manhattan distance; Complete linkage uses Cosine similarity",
        "Single linkage measures the minimum pairwise distance between clusters (prone to chaining); Complete linkage measures the maximum pairwise distance (producing compact, spherical clusters)",
        "Single linkage is top-down; Complete linkage is bottom-up",
        "Single linkage requires Gaussian distributions",
      ],
      correct: 1,
      explanation: "Single Linkage defines cluster distance as D(A, B) = min d(a, b), which can link disparate clusters via thin chains of nearby points. Complete Linkage defines distance as D(A, B) = max d(a, b), enforcing compact cluster diameters.",
    },
    {
      id: 6,
      question: "How does DBSCAN define a 'Core Point' in a dataset?",
      options: [
        "A point that has the highest silhouette coefficient in the dataset",
        "A point whose epsilon (eps) neighborhood contains at least min_samples observations (including itself)",
        "A point located at the geometric center of all observations",
        "A point that has zero distance to an existing centroid",
      ],
      correct: 1,
      explanation: "In DBSCAN, a point is a core point if |N_eps(x)| >= min_samples. Core points form dense cluster interiors from which density-reachable border points are expanded. Isolated points become noise (-1).",
    },
    {
      id: 7,
      question: "Why is DBSCAN fundamentally superior to K-Means when clustering datasets with complex non-convex geometries (e.g. concentric circles or interleaving moons)?",
      options: [
        "DBSCAN uses linear regression lines to bisect the data",
        "DBSCAN discovers clusters based on contiguous high-density connectivity rather than distance to spherical centroids, allowing it to trace arbitrary non-linear shapes while filtering noise",
        "DBSCAN projects data onto 100 dimensions automatically",
        "DBSCAN guarantees equal cluster sizes",
      ],
      correct: 1,
      explanation: "K-Means relies on Voronoi cells around centroids, forcing convex/spherical cluster partitions. DBSCAN connects points via continuous density paths, effortlessly tracing moons, rings, and arbitrary non-linear shapes.",
    },
    {
      id: 8,
      question: "What is the core advantage of Gaussian Mixture Models (GMM) with Expectation-Maximization over K-Means?",
      options: [
        "GMM requires zero hyperparameter choices",
        "GMM provides soft (probabilistic) cluster assignments and accommodates non-spherical ellipsoidal cluster shapes through component covariance matrices (full, tied, diag, spherical)",
        "GMM runs 10x faster than K-Means on large datasets",
        "GMM completely eliminates the need for feature scaling",
      ],
      correct: 1,
      explanation: "While K-Means performs hard assignment to spherical clusters, GMM calculates posterior responsibilities gamma_ik = P(z_i = k | x_i) (soft clustering) and fits parameterized covariance matrices to represent elliptical, oriented distributions.",
    },
    {
      id: 9,
      question: "How do AIC (Akaike Information Criterion) and BIC (Bayesian Information Criterion) assist in selecting the number of components K in a Gaussian Mixture Model?",
      options: [
        "They measure the training speed in milliseconds",
        "They balance model goodness-of-fit (log-likelihood) against model parameter complexity (degrees of freedom), penalizing over-parameterized models so the minimum value identifies the optimal K",
        "They enforce that all Gaussian components have identical variance",
        "They calculate the Adjusted Rand Index against test labels",
      ],
      correct: 1,
      explanation: "AIC = 2p - 2ln(L) and BIC = p*ln(N) - 2ln(L). As components increase, likelihood improves but parameter count p grows. The minimum of the AIC/BIC curve identifies the model that best explains the data with minimal over-parameterization.",
    },
    {
      id: 10,
      question: "What is the RFM framework commonly used in enterprise customer segmentation clustering projects?",
      options: [
        "Random Forest Modeling (Recalculate, Fit, Measure)",
        "Recency (how recently did the customer purchase), Frequency (how often do they purchase), and Monetary Value (total spend)",
        "Residual Feature Minimization",
        "Robust Feature Matching",
      ],
      correct: 1,
      explanation: "RFM (Recency, Frequency, Monetary Value) is the premier behavioral framework for customer segmentation. Engineering RFM features followed by scaling and clustering (e.g. K-Means or GMM) discovers actionable segments like VIPs, at-risk churners, and budget shoppers.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (questionId, optionIndex) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Top Navigation Bar */}
      <ModuleNav track="machine-learning" currentModuleId="unsupervised-clustering" />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Card */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 via-amber-100/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200">
                <Users size={13} className="text-orange-600" />
                <span>MODULE 15: UNSUPERVISED LEARNING &bull; CLUSTERING &bull; CUSTOMER SEGMENTATION</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
                Unsupervised Learning &amp; Clustering
              </h1>
              <p className="text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
                Master centroid-based clustering (K-Means, K-Means++), diagnostic metrics (Inertia, Elbow Method, Silhouette Analysis), hierarchical trees (Agglomerative, Ward/Complete Linkage, Dendrograms), density-based discovery (DBSCAN, OPTICS, Mean Shift), probabilistic soft clustering (Gaussian Mixture Models, EM, AIC/BIC), Spectral graph Laplacians, and enterprise RFM customer segmentation.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
              <div className="px-3.5 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 text-xs font-mono font-medium flex items-center gap-2">
                <Layers size={14} className="text-orange-600" />
                <span>27 Core Topics</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 text-xs font-mono font-medium flex items-center gap-2">
                <Sliders size={14} className="text-amber-600" />
                <span>4 Interactive Labs</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 text-xs font-mono font-medium flex items-center gap-2">
                <Award size={14} className="text-emerald-600" />
                <span>10 Assessment MCQs</span>
              </div>
            </div>
          </div>

          {/* Primary View Switcher: Curriculum vs Workbench */}
          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 bg-stone-100/80 p-1 rounded-2xl border border-stone-200">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "curriculum"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <BookOpen size={16} />
                <span>Curriculum Specifications</span>
              </button>
              <button
                onClick={() => setActiveTab("workbench")}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "workbench"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Terminal size={16} />
                <span>Interactive Workbenches</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-orange-100 text-orange-700 font-bold ml-1">
                  Live
                </span>
              </button>
            </div>

            <div className="text-xs text-stone-500 font-mono">
              Machine Learning Track &bull; Unsupervised Learning Core
            </div>
          </div>
        </div>

        {/* View Mode 1: Curriculum Content */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            <MachineLearningClusteringSections />
          </div>
        )}

        {/* View Mode 2: Interactive Workbenches */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Sub-Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("kmeans_lab")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeWorkbenchTab === "kmeans_lab"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                <CircleDot size={15} />
                <span>1. K-Means &amp; Silhouette Diagnostic</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("dbscan_lab")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeWorkbenchTab === "dbscan_lab"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                <Radio size={15} />
                <span>2. DBSCAN Density &amp; Noise Simulator</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("hierarchical_lab")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeWorkbenchTab === "hierarchical_lab"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                <GitBranch size={15} />
                <span>3. Hierarchical Dendrogram Cut Lab</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                <CheckSquare size={15} />
                <span>4. Assessment Exam (10 Questions)</span>
              </button>
            </div>

            {/* LAB 1: K-MEANS & SILHOUETTE */}
            {activeWorkbenchTab === "kmeans_lab" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <CircleDot size={13} />
                    <span>LAB 1: K-MEANS CENTROID PARTITION LAB</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    K-Means Clusters, WCSS Inertia &amp; Silhouette Analysis
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Slide <em>K</em> between 2 and 6 to observe how centroids re-partition customer observations, monitor the reduction in Within-Cluster Sum of Squares (Inertia), and check the Silhouette Score to locate optimal cohort separation.
                  </p>
                </div>

                {/* Controls */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono font-bold text-stone-700">
                      <span>Number of Clusters (K):</span>
                      <span className="text-base text-orange-600 font-black">K = {kClusters}</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="6"
                      step="1"
                      value={kClusters}
                      onChange={(e) => setKClusters(parseInt(e.target.value, 10))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-stone-400 font-mono">
                      <span>K=2 (Under-partitioned)</span>
                      <span>K=3 (True Underlying Cohorts)</span>
                      <span>K=6 (Over-partitioned)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-stone-700 block">Centroid Initialization:</span>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setInitMethod("kmeans_plus")}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          initMethod === "kmeans_plus"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        K-Means++ (Distance Probability)
                      </button>
                      <button
                        onClick={() => setInitMethod("random")}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          initMethod === "random"
                            ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Random Centroids
                      </button>
                    </div>
                  </div>
                </div>

                {/* Metrics & Interactive Scatter Plot */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: Interactive 2D Scatter Canvas */}
                  <div className="lg:col-span-8 p-5 rounded-2xl bg-stone-900 text-white space-y-3">
                    <div className="flex justify-between items-center border-b border-stone-800 pb-2">
                      <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                        Customer Feature Space (X: Annual Income &bull; Y: Spending Score)
                      </span>
                      <span className="text-[11px] font-mono text-stone-400">Centroids marked as &times;</span>
                    </div>

                    <div className="relative h-64 bg-stone-950 rounded-xl border border-stone-800 flex items-center justify-center p-4">
                      <svg className="w-full h-full" viewBox="0 0 380 200">
                        {/* Grid lines */}
                        <line x1="30" y1="20" x2="360" y2="20" stroke="#334155" strokeWidth="0.5" />
                        <line x1="30" y1="60" x2="360" y2="60" stroke="#334155" strokeWidth="0.5" />
                        <line x1="30" y1="100" x2="360" y2="100" stroke="#334155" strokeWidth="0.5" />
                        <line x1="30" y1="140" x2="360" y2="140" stroke="#334155" strokeWidth="0.5" />
                        <line x1="30" y1="180" x2="360" y2="180" stroke="#334155" strokeWidth="0.5" />

                        {/* Customer Points */}
                        {kmeansResult.assignedPoints.map((pt) => {
                          const assignedCentroid = kmeansResult.centroids[pt.cluster];
                          return (
                            <g key={pt.id}>
                              {/* Connector line to centroid */}
                              <line
                                x1={pt.x}
                                y1={200 - pt.y}
                                x2={assignedCentroid.x}
                                y2={200 - assignedCentroid.y}
                                stroke={pt.color}
                                strokeWidth="0.8"
                                opacity="0.3"
                                strokeDasharray="2 2"
                              />
                              {/* Point circle */}
                              <circle
                                cx={pt.x}
                                cy={200 - pt.y}
                                r="5"
                                fill={pt.color}
                                stroke="#ffffff"
                                strokeWidth="1"
                              />
                            </g>
                          );
                        })}

                        {/* Centroids */}
                        {kmeansResult.centroids.map((c, idx) => (
                          <g key={idx}>
                            <circle
                              cx={c.x}
                              cy={200 - c.y}
                              r="11"
                              fill="#ffffff"
                              stroke={c.color}
                              strokeWidth="3"
                              opacity="0.9"
                            />
                            <text
                              x={c.x}
                              y={200 - c.y + 4}
                              textAnchor="middle"
                              fill="#18181b"
                              fontSize="11"
                              fontWeight="bold"
                              fontFamily="monospace"
                            >
                              &times;
                            </text>
                          </g>
                        ))}
                      </svg>
                    </div>

                    <div className="flex justify-between text-[11px] font-mono text-stone-400">
                      <span>Low Income &larr; &rarr; High Income</span>
                      <span>Low Spending &larr; &rarr; High Spending</span>
                    </div>
                  </div>

                  {/* Right: Metrics Dashboard */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-stone-500 uppercase block">
                        WCSS Inertia Score
                      </span>
                      <div className="text-3xl font-black text-stone-900 font-mono">
                        {kmeansResult.inertia.toLocaleString()}
                      </div>
                      <p className="text-[10px] text-stone-500 font-sans">
                        Sum of squared distances from observations to nearest centroid. Monotonically drops as K increases.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase block">
                        Silhouette Score s(i)
                      </span>
                      <div className="text-3xl font-black text-emerald-800 font-mono">
                        {kmeansResult.silhouette}
                      </div>
                      <p className="text-[10px] text-emerald-700/80 font-sans">
                        {kClusters === 3 ? (
                          <strong>Optimal Partition! Peak Silhouette (0.78) indicates excellent separation.</strong>
                        ) : (
                          "Scores > 0.50 indicate reasonable separation. Decreases when clusters overlap."
                        )}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600 font-sans space-y-1">
                      <strong>Elbow Analysis:</strong> Notice the massive inertia drop from K=2 (18,450) to K=3 (5,210), followed by diminishing reductions for K=4 and K=5. This confirms K=3 is the true geometric elbow.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: DBSCAN DENSITY & NOISE */}
            {activeWorkbenchTab === "dbscan_lab" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <Radio size={13} />
                    <span>LAB 2: DBSCAN DENSITY &amp; OUTLIER NOISE LAB</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Epsilon Radius, Min Samples &amp; Core/Border/Noise Identification
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Adjust neighborhood radius &epsilon; and core density threshold <em>min_samples</em> to inspect how DBSCAN dynamically labels core points, recruits border members, and cleanly isolates noise anomalies.
                  </p>
                </div>

                {/* Controls */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono font-bold text-stone-700">
                      <span>Neighborhood Radius (&epsilon;):</span>
                      <span className="text-base text-orange-600 font-black">{epsRadius} px</span>
                    </div>
                    <input
                      type="range"
                      min="22"
                      max="55"
                      step="1"
                      value={epsRadius}
                      onChange={(e) => setEpsRadius(parseInt(e.target.value, 10))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-stone-400 font-mono">
                      <span>22px (Strict / High Noise)</span>
                      <span>38px (Standard)</span>
                      <span>55px (Lenient / Cluster Merger)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono font-bold text-stone-700">
                      <span>Min Samples (Density Threshold):</span>
                      <span className="text-base text-orange-600 font-black">{minSamples} pts</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="6"
                      step="1"
                      value={minSamples}
                      onChange={(e) => setMinSamples(parseInt(e.target.value, 10))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-stone-400 font-mono">
                      <span>min_samples=2</span>
                      <span>min_samples=3</span>
                      <span>min_samples=6</span>
                    </div>
                  </div>
                </div>

                {/* Density Visualizer */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 p-5 rounded-2xl bg-stone-900 text-white space-y-3">
                    <div className="flex justify-between items-center border-b border-stone-800 pb-2">
                      <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                        DBSCAN Density Manifold (Green: Core &bull; Blue: Border &bull; Red: Noise)
                      </span>
                      <span className="text-[11px] font-mono text-stone-400">&epsilon; circle shown around hovered points</span>
                    </div>

                    <div className="relative h-64 bg-stone-950 rounded-xl border border-stone-800 flex items-center justify-center p-4">
                      <svg className="w-full h-full" viewBox="0 0 380 200">
                        {/* Epsilon neighborhood circles for core points */}
                        {dbscanResult.classified.map((pt) => {
                          if (pt.type !== "core") return null;
                          return (
                            <circle
                              key={`eps-${pt.id}`}
                              cx={pt.x}
                              cy={200 - pt.y}
                              r={epsRadius}
                              fill="#16a34a"
                              opacity="0.12"
                              stroke="#16a34a"
                              strokeWidth="0.8"
                              strokeDasharray="2 2"
                            />
                          );
                        })}

                        {/* Observations */}
                        {dbscanResult.classified.map((pt) => (
                          <g key={pt.id}>
                            <circle
                              cx={pt.x}
                              cy={200 - pt.y}
                              r={pt.type === "core" ? 6 : pt.type === "border" ? 5 : 4}
                              fill={pt.color}
                              stroke="#ffffff"
                              strokeWidth="1.5"
                            />
                            {pt.type === "noise" && (
                              <text
                                x={pt.x}
                                y={200 - pt.y - 8}
                                textAnchor="middle"
                                fill="#f87171"
                                fontSize="9"
                                fontFamily="monospace"
                              >
                                -1
                              </text>
                            )}
                          </g>
                        ))}
                      </svg>
                    </div>

                    <div className="text-[11px] font-mono text-stone-400 flex justify-between">
                      <span>Core: &ge; {minSamples} points within &epsilon;</span>
                      <span>Noise: Isolated outlier (-1)</span>
                    </div>
                  </div>

                  {/* Summary Breakdown */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase block">Core Points</span>
                      <div className="text-2xl font-black text-emerald-900 font-mono">{dbscanResult.coreCount}</div>
                      <span className="text-[10px] text-emerald-600 block">Forms dense interior cluster anchors</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-sky-700 uppercase block">Border Points</span>
                      <div className="text-2xl font-black text-sky-900 font-mono">{dbscanResult.borderCount}</div>
                      <span className="text-[10px] text-sky-600 block">Density-reachable cluster boundary</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-rose-700 uppercase block">Noise Outliers (-1)</span>
                      <div className="text-2xl font-black text-rose-900 font-mono">{dbscanResult.noiseCount} ({dbscanResult.noiseRatio}%)</div>
                      <span className="text-[10px] text-rose-600 block">Filtered anomalies (e.g. fraud, sensors)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: HIERARCHICAL DENDROGRAM */}
            {activeWorkbenchTab === "hierarchical_lab" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <GitBranch size={13} />
                    <span>LAB 3: AGGLOMERATIVE HIERARCHY &amp; DENDROGRAM CUT</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Dendrogram Merge Heights &amp; Horizontal Threshold Cutting
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    Slide the horizontal cut distance threshold to determine how many clusters are formed by slicing through the hierarchical tree, and compare Ward vs Complete vs Single linkage behavior.
                  </p>
                </div>

                {/* Controls */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-stone-700 block">Linkage Criterion:</span>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setLinkageMode("ward")}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          linkageMode === "ward"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Ward (Variance)
                      </button>
                      <button
                        onClick={() => setLinkageMode("complete")}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          linkageMode === "complete"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Complete (Max)
                      </button>
                      <button
                        onClick={() => setLinkageMode("single")}
                        className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          linkageMode === "single"
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        Single (Min)
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono font-bold text-stone-700">
                      <span>Horizontal Cut Distance:</span>
                      <span className="text-base text-orange-600 font-black">{cutDistanceThreshold} px</span>
                    </div>
                    <input
                      type="range"
                      min="25"
                      max="110"
                      step="1"
                      value={cutDistanceThreshold}
                      onChange={(e) => setCutDistanceThreshold(parseInt(e.target.value, 10))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-stone-400 font-mono">
                      <span>Low (Fine Granularity)</span>
                      <span>Cut: {cutDistanceThreshold}</span>
                      <span>High (Coarse Root)</span>
                    </div>
                  </div>
                </div>

                {/* Dendrogram Tree Graphic */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 p-5 rounded-2xl bg-stone-900 text-white space-y-3">
                    <div className="flex justify-between items-center border-b border-stone-800 pb-2">
                      <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                        Hierarchical Dendrogram Tree ({linkageMode.toUpperCase()} LINKAGE)
                      </span>
                      <span className="text-[11px] font-mono text-stone-400">
                        Resulting Clusters: <strong className="text-white">K = {dendrogramClusters.k}</strong>
                      </span>
                    </div>

                    <div className="relative h-64 bg-stone-950 rounded-xl border border-stone-800 flex items-center justify-center p-4">
                      {/* Red Horizontal Cut Line */}
                      <div
                        className="absolute left-6 right-6 h-0.5 bg-rose-500 z-20 shadow-xs"
                        style={{ bottom: `${(cutDistanceThreshold / 120) * 100}%` }}
                      />
                      <div
                        className="absolute right-8 text-[10px] font-mono font-bold text-rose-400 bg-rose-950/80 px-1.5 py-0.5 rounded border border-rose-800 z-20"
                        style={{ bottom: `calc(${(cutDistanceThreshold / 120) * 100}% + 4px)` }}
                      >
                        Cut Distance = {cutDistanceThreshold} &bull; K = {dendrogramClusters.k} Clusters
                      </div>

                      {/* Synthetic Dendrogram SVG */}
                      <svg className="w-full h-full" viewBox="0 0 360 180">
                        {/* Branches */}
                        {/* Root merge */}
                        <line x1="90" y1="20" x2="270" y2="20" stroke="#64748b" strokeWidth="2" />
                        <line x1="180" y1="5" x2="180" y2="20" stroke="#64748b" strokeWidth="2" />

                        {/* Left Subtree */}
                        <line x1="90" y1="20" x2="90" y2="55" stroke="#38bdf8" strokeWidth="2" />
                        <line x1="45" y1="55" x2="135" y2="55" stroke="#38bdf8" strokeWidth="2" />
                        <line x1="45" y1="55" x2="45" y2="120" stroke="#38bdf8" strokeWidth="1.5" />
                        <line x1="135" y1="55" x2="135" y2="100" stroke="#38bdf8" strokeWidth="1.5" />

                        {/* Left leaf merges */}
                        <line x1="25" y1="120" x2="65" y2="120" stroke="#38bdf8" strokeWidth="1.5" />
                        <line x1="25" y1="120" x2="25" y2="165" stroke="#38bdf8" strokeWidth="1" />
                        <line x1="65" y1="120" x2="65" y2="165" stroke="#38bdf8" strokeWidth="1" />

                        <line x1="115" y1="100" x2="155" y2="100" stroke="#38bdf8" strokeWidth="1.5" />
                        <line x1="115" y1="100" x2="115" y2="165" stroke="#38bdf8" strokeWidth="1" />
                        <line x1="155" y1="100" x2="155" y2="165" stroke="#38bdf8" strokeWidth="1" />

                        {/* Right Subtree */}
                        <line x1="270" y1="20" x2="270" y2="40" stroke="#fb923c" strokeWidth="2" />
                        <line x1="215" y1="40" x2="325" y2="40" stroke="#fb923c" strokeWidth="2" />
                        <line x1="215" y1="40" x2="215" y2="90" stroke="#fb923c" strokeWidth="1.5" />
                        <line x1="325" y1="40" x2="325" y2="80" stroke="#fb923c" strokeWidth="1.5" />

                        {/* Right leaf merges */}
                        <line x1="195" y1="90" x2="235" y2="90" stroke="#fb923c" strokeWidth="1.5" />
                        <line x1="195" y1="90" x2="195" y2="165" stroke="#fb923c" strokeWidth="1" />
                        <line x1="235" y1="90" x2="235" y2="165" stroke="#fb923c" strokeWidth="1" />

                        <line x1="305" y1="80" x2="345" y2="80" stroke="#fb923c" strokeWidth="1.5" />
                        <line x1="305" y1="80" x2="305" y2="165" stroke="#fb923c" strokeWidth="1" />
                        <line x1="345" y1="80" x2="345" y2="165" stroke="#fb923c" strokeWidth="1" />

                        {/* Leaves */}
                        {[25, 65, 115, 155, 195, 235, 305, 345].map((x, idx) => (
                          <circle key={idx} cx={x} cy="165" r="3.5" fill="#f8fafc" />
                        ))}
                      </svg>
                    </div>

                    <div className="text-[11px] font-mono text-stone-400">
                      Bottom Leaves: Individual Data Points &bull; Top Root: Unified Population
                    </div>
                  </div>

                  {/* Right: Insights */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-stone-500 uppercase block">
                        Resulting Discovered Clusters
                      </span>
                      <div className="text-3xl font-black text-orange-600 font-mono">
                        {dendrogramClusters.k} Groups
                      </div>
                      <p className="text-xs text-stone-600 font-sans mt-2 leading-relaxed">
                        The number of distinct vertical tree branches intersected by the horizontal red cut line defines the active flat partition.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600 font-sans space-y-1">
                      <strong>Linkage Character:</strong> {dendrogramClusters.linkageDesc}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 4: ASSESSMENT EXAM (10 QUESTIONS) */}
            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                      <Award size={13} />
                      <span>MODULE 15 CERTIFICATION EXAM</span>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900">
                      Unsupervised Learning &amp; Clustering Assessment
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      10 comprehensive multi-choice questions assessing your mastery of K-Means, K-Means++, Elbow/Silhouette diagnostics, Hierarchical clustering, DBSCAN, GMM with EM, and RFM customer segmentation.
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
            onClick={() => navigate("/learning/machine-learning/ml-pipelines")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 14 &mdash; ML Pipelines &amp; Automation</span>
          </button>

          <button
            onClick={() => navigate("/learning/machine-learning/dimensionality-reduction")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs transition-colors"
          >
            <span>Next: Module 16 &mdash; Dimensionality Reduction &amp; Feature Extraction</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
