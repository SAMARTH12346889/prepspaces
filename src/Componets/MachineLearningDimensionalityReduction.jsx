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
  RefreshCw,
  GitBranch,
  Cpu,
  BarChart2,
  Maximize2,
  Minimize2,
  Compass,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import MachineLearningDimensionalityReductionSections from "./MachineLearningDimensionalityReductionSections";

export default function MachineLearningDimensionalityReduction() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("pca_scree"); // 'pca_scree' | 'kernel_pca' | 'tsne_umap' | 'quiz'

  // ---------------------------------------------------------------------------
  // LAB 1: PCA SCREE & CUMULATIVE VARIANCE SIMULATOR
  // ---------------------------------------------------------------------------
  const [pcaComponents, setPcaComponents] = useState(3);

  // Simulated 10-dimensional eigenvalue spectrum for Wine dataset
  const eigenvalues = useMemo(() => [4.71, 2.51, 1.45, 0.92, 0.85, 0.64, 0.52, 0.35, 0.28, 0.21], []);
  const totalVariance = useMemo(() => eigenvalues.reduce((a, b) => a + b, 0), [eigenvalues]);

  const pcaStats = useMemo(() => {
    const evrList = eigenvalues.map((ev) => (ev / totalVariance) * 100);
    const cumulativeList = [];
    let running = 0;
    evrList.forEach((evr) => {
      running += evr;
      cumulativeList.push(running);
    });

    const currentRetained = cumulativeList[pcaComponents - 1];
    const compressionRatio = Math.round((1 - pcaComponents / 10) * 100);

    return {
      evrList,
      cumulativeList,
      currentRetained: currentRetained.toFixed(1),
      compressionRatio,
      sufficient95: currentRetained >= 95,
    };
  }, [eigenvalues, totalVariance, pcaComponents]);

  // ---------------------------------------------------------------------------
  // LAB 2: LINEAR PCA VS KERNEL PCA (CONCENTRIC MANIFOLD)
  // ---------------------------------------------------------------------------
  const [manifoldType, setManifoldType] = useState("circles"); // 'circles' | 'moons'
  const [rbfGamma, setRbfGamma] = useState(1.5);

  const manifoldPoints = useMemo(() => {
    // Generate concentric circle points
    const pts = [];
    if (manifoldType === "circles") {
      // Inner circle (Class 0)
      for (let i = 0; i < 20; i++) {
        const theta = (i / 20) * 2 * Math.PI;
        const r = 25 + Math.sin(i * 3) * 3;
        const x = 150 + r * Math.cos(theta);
        const y = 100 + r * Math.sin(theta);
        pts.push({ x, y, cls: 0 });
      }
      // Outer circle (Class 1)
      for (let i = 0; i < 30; i++) {
        const theta = (i / 30) * 2 * Math.PI;
        const r = 65 + Math.cos(i * 2) * 4;
        const x = 150 + r * Math.cos(theta);
        const y = 100 + r * Math.sin(theta);
        pts.push({ x, y, cls: 1 });
      }
    } else {
      // Two interlocking moons
      for (let i = 0; i < 25; i++) {
        const theta = (i / 25) * Math.PI;
        const x = 110 + 45 * Math.cos(theta);
        const y = 90 - 45 * Math.sin(theta);
        pts.push({ x, y, cls: 0 });
      }
      for (let i = 0; i < 25; i++) {
        const theta = (i / 25) * Math.PI;
        const x = 155 - 45 * Math.cos(theta);
        const y = 110 + 45 * Math.sin(theta);
        pts.push({ x, y, cls: 1 });
      }
    }
    return pts;
  }, [manifoldType]);

  // Projected 1D / 2D coordinates under Linear vs Kernel PCA
  const projectedPoints = useMemo(() => {
    return manifoldPoints.map((pt) => {
      // Linear PCA collapses along X axis (cannot separate concentric rings)
      const linearX = pt.x;
      const linearY = 100 + (pt.y - 100) * 0.15; // heavily squashed

      // Kernel PCA uses radial distance from origin to unroll concentric circles
      const distFromCenter = Math.sqrt(Math.pow(pt.x - 150, 2) + Math.pow(pt.y - 100, 2));
      const kernelX = 80 + distFromCenter * 1.5 * (rbfGamma / 1.5);
      const kernelY = 60 + (pt.cls === 0 ? 30 : 90) + (Math.sin(pt.x) * 8);

      return {
        ...pt,
        linearX,
        linearY,
        kernelX: Math.min(270, Math.max(30, kernelX)),
        kernelY: Math.min(180, Math.max(20, kernelY)),
      };
    });
  }, [manifoldPoints, rbfGamma]);

  // ---------------------------------------------------------------------------
  // LAB 3: T-SNE VS UMAP NEIGHBORHOOD EMBEDDING SIMULATOR
  // ---------------------------------------------------------------------------
  const [embeddingMethod, setEmbeddingMethod] = useState("umap"); // 'tsne' | 'umap'
  const [neighborParam, setNeighborParam] = useState(30); // perplexity (t-SNE) or n_neighbors (UMAP)

  const embeddingClusters = useMemo(() => {
    // 3 clusters representing Digits (0, 1, 2)
    // t-SNE creates rounded isolated globules; UMAP creates connected continuous strands
    const isTsne = embeddingMethod === "tsne";
    const spread = isTsne ? 25 : 35;
    const clusterGap = isTsne ? 85 : 65;

    const clusters = [
      { id: 0, label: "Digit '0' (Loops)", color: "#f97316", cx: 90, cy: 90 },
      { id: 1, label: "Digit '1' (Verticals)", color: "#10b981", cx: 90 + clusterGap, cy: 60 },
      { id: 2, label: "Digit '2' (Curves)", color: "#6366f1", cx: 150, cy: 140 },
    ];

    const points = [];
    clusters.forEach((cl) => {
      for (let i = 0; i < 18; i++) {
        const angle = (i / 18) * 2 * Math.PI;
        const r = (i % 3 === 0 ? 10 : 20) + (neighborParam > 30 ? 5 : -4);
        const px = cl.cx + Math.cos(angle) * (r + (isTsne ? 0 : Math.sin(angle * 2) * 8));
        const py = cl.cy + Math.sin(angle) * (r + (isTsne ? 0 : Math.cos(angle * 3) * 6));
        points.push({ x: px, y: py, color: cl.color, clusterId: cl.id });
      }
    });

    return { clusters, points };
  }, [embeddingMethod, neighborParam]);

  // ---------------------------------------------------------------------------
  // LAB 4: CERTIFICATION ASSESSMENT
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the phenomenon of 'distance concentration' in high-dimensional spaces?",
      options: [
        "Data points compress towards the center origin coordinate",
        "The ratio of distance contrast (dist_max - dist_min) / dist_min approaches 0, making points nearly equidistant",
        "Points drift into isolated parallel linear dimensions",
        "The covariance matrix eigenvalues become purely imaginary",
      ],
      correct: 1,
      explanation: "As dimensionality increases, the relative difference between the nearest and farthest neighbors vanishes, degrading distance-based algorithms like KNN and K-Means.",
    },
    {
      id: 2,
      question: "What is the key architectural distinction between Feature Selection and Feature Extraction?",
      options: [
        "Selection is supervised, whereas extraction is unsupervised",
        "Feature selection retains original columns, while feature extraction constructs new composite projection dimensions",
        "Selection creates principal components while extraction drops low-variance variables",
        "Extraction is restricted exclusively to image data",
      ],
      correct: 1,
      explanation: "Feature selection (RFE, Lasso) preserves original variable names and units. Feature extraction (PCA, UMAP) transforms data into a new coordinate representation.",
    },
    {
      id: 3,
      question: "Why is feature standardization essential prior to calculating PCA?",
      options: [
        "To invert the covariance matrix",
        "Because features with large numerical magnitudes dominate variance calculations regardless of predictive relevance",
        "To ensure the target variable is balanced",
        "To prevent negative eigenvalues from occurring",
      ],
      correct: 1,
      explanation: "PCA seeks directions of maximum absolute variance. Unscaled features with huge units (e.g. income in dollars) would hijack PC1 over features with smaller numerical ranges (e.g. age).",
    },
    {
      id: 4,
      question: "In the PCA eigenvalue equation C*v = lambda*v, what do v and lambda represent?",
      options: [
        "v is the cluster center; lambda is the inertia",
        "v is an eigenvector specifying a principal axis direction; lambda is its eigenvalue quantifying the variance along that axis",
        "v is the regression weight vector; lambda is the L2 penalty",
        "v is the test sample; lambda is the p-value",
      ],
      correct: 1,
      explanation: "Eigenvectors of the sample covariance matrix point in the orthogonal directions of maximal variance; the corresponding eigenvalues represent the exact variance retained.",
    },
    {
      id: 5,
      question: "How is the Explained Variance Ratio (EVR) for principal component k defined?",
      options: [
        "EVR_k = lambda_k / sum(lambda_j) across all p components",
        "EVR_k = 1 - (lambda_k / N)",
        "EVR_k = lambda_k * trace(C)",
        "EVR_k = log(lambda_k) / sum(lambda_j)",
      ],
      correct: 0,
      explanation: "The total variance of the dataset equals the trace of the covariance matrix (sum of all eigenvalues). EVR divides component k's eigenvalue by this sum.",
    },
    {
      id: 6,
      question: "When is Kernel PCA preferred over traditional linear PCA?",
      options: [
        "When the dataset has fewer than 10 samples",
        "When data lies on a complex nonlinear manifold (e.g. concentric rings or swiss rolls) that linear hyperplanes cannot untangle",
        "When you need to extract more components than the original feature count",
        "When class labels are provided to guide the projection",
      ],
      correct: 1,
      explanation: "Standard PCA only projects onto flat linear hyperplanes. Kernel PCA uses the kernel trick (e.g. RBF) to map data into a reproducing Hilbert space where nonlinear structures become linearly separable.",
    },
    {
      id: 7,
      question: "What is the maximum number of components Linear Discriminant Analysis (LDA) can produce for C classes?",
      options: [
        "p components (number of features)",
        "C - 1 components",
        "C * (C - 1) / 2 components",
        "Always exactly 1 component",
      ],
      correct: 1,
      explanation: "The between-class scatter matrix S_B has rank at most C - 1 because the C centered class mean vectors sum to zero. Therefore, standard LDA can produce at most C - 1 discriminant directions.",
    },
    {
      id: 8,
      question: "What distinguishes Independent Component Analysis (ICA) from PCA?",
      options: [
        "PCA extracts statistically independent sources; ICA extracts orthogonal ones",
        "PCA only enforces mutual uncorrelatedness, while ICA seeks statistical independence and non-Gaussian source distributions",
        "ICA requires supervised target labels",
        "PCA is only used for audio processing",
      ],
      correct: 1,
      explanation: "Uncorrelatedness is merely a second-order linear property. ICA maximizes non-Gaussianity (kurtosis/negentropy) to separate mixed signals into truly statistically independent sources.",
    },
    {
      id: 9,
      question: "Why does t-SNE use a heavy-tailed Student's t-distribution in the low-dimensional embedding?",
      options: [
        "To speed up GPU matrix operations",
        "To prevent the 'crowding problem' by allowing moderately distant points to spread out in 2D space without infinite repulsive forces",
        "Because Gaussian distributions cannot be sampled in 2D",
        "To ensure the KL divergence is strictly negative",
      ],
      correct: 1,
      explanation: "High-dimensional spheres have vastly more volume than 2D disks. The heavy tails of the Student-t distribution prevent intermediate-distance points from crowding together into a dense blob.",
    },
    {
      id: 10,
      question: "What catastrophic error occurs if PCA is fit on the full dataset before train/test splitting?",
      options: [
        "Overfitting due to target leakage",
        "Data leakage: the principal axes and scaling statistics incorporate test set information, yielding invalid validation scores",
        "Singular value decomposition divergence",
        "PCA fails to produce orthogonal components",
      ],
      correct: 1,
      explanation: "Fitting scalers and PCA on the complete dataset leaks the distribution and variance of the test set into the training pipeline. All transformations must be fit strictly on the training partition only.",
    },
  ];

  const handleSelectOption = (qId, optIdx) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const score = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) correct++;
    });
    return correct;
  }, [selectedAnswers]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Top Module Navigation */}
      <ModuleNav track="machine-learning" currentModuleId="dimensionality-reduction" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Badge & Title */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-orange-600" />
              Machine Learning Track &bull; Module 16
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              19 IN-DEPTH SECTIONS &middot; FEATURE EXTRACTION &amp; MANIFOLDS
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 16 &mdash; Dimensionality Reduction &amp; Feature Extraction
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Overcome the curse of dimensionality and distance concentration. Master Principal Component Analysis (PCA) eigenvalue decomposition, Kernel PCA nonlinear manifold projection, Linear Discriminant Analysis (LDA), FastICA blind signal unmixing, t-SNE probability divergence, and UMAP topological embeddings.
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

        {/* TAB 1: CURRICULUM SPECIFICATION */}
        {activeTab === "curriculum" && <MachineLearningDimensionalityReductionSections />}

        {/* TAB 2: INTERACTIVE WORKBENCHES */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Subtabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-[#e7e3da] pb-3">
              <button
                onClick={() => setActiveWorkbenchTab("pca_scree")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                  activeWorkbenchTab === "pca_scree"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <BarChart2 size={15} />
                <span>Lab 1: PCA Scree &amp; EVR Simulator</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("kernel_pca")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                  activeWorkbenchTab === "kernel_pca"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Maximize2 size={15} />
                <span>Lab 2: Linear vs. Kernel PCA</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("tsne_umap")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                  activeWorkbenchTab === "tsne_umap"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Compass size={15} />
                <span>Lab 3: t-SNE vs. UMAP Embeddings</span>
              </button>

              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <HelpCircle size={15} />
                <span>Lab 4: Certification Quiz (10 Qs)</span>
              </button>
            </div>

            {/* LAB 1: PCA SCREE & CUMULATIVE VARIANCE */}
            {activeWorkbenchTab === "pca_scree" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <BarChart2 size={13} />
                    <span>Eigenvalue Spectrum &amp; Elbow Diagnostic</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    PCA Scree Plot &amp; Cumulative Explained Variance Simulator
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Adjust the number of retained principal components \(k\) for a simulated 10-dimensional chemical dataset to inspect the Scree elbow, cumulative variance ratio, and data compression.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Controls & Visual Canvas */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <label className="text-xs font-bold font-mono text-stone-700">
                          Retained Components (k): {pcaComponents}
                        </label>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={pcaComponents}
                          onChange={(e) => setPcaComponents(parseInt(e.target.value))}
                          className="w-36 accent-orange-600 cursor-pointer"
                        />
                      </div>
                      <span className="text-xs font-mono text-stone-500">
                        {pcaComponents} of 10 components selected
                      </span>
                    </div>

                    {/* Scree Chart SVG Canvas */}
                    <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800">
                      <div className="text-[11px] font-mono text-stone-400 mb-2 flex justify-between">
                        <span>Scree Plot: Individual EVR (%) Bars</span>
                        <span>Dotted Line: Cumulative Variance</span>
                      </div>
                      <svg viewBox="0 0 450 180" className="w-full h-48 select-none">
                        {/* 95% threshold line */}
                        <line x1="30" y1="35" x2="430" y2="35" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" />
                        <text x="432" y="38" fill="#ef4444" fontSize="9" fontFamily="monospace">95% Target</text>

                        {/* Bars for individual eigenvalues */}
                        {pcaStats.evrList.map((evr, idx) => {
                          const x = 45 + idx * 38;
                          const barH = (evr / 40) * 120;
                          const y = 160 - barH;
                          const isSelected = idx < pcaComponents;

                          return (
                            <g key={idx}>
                              <rect
                                x={x}
                                y={y}
                                width="22"
                                height={barH}
                                rx="4"
                                fill={isSelected ? "#ea580c" : "#334155"}
                                className="transition-all duration-300"
                              />
                              <text
                                x={x + 11}
                                y="172"
                                fill={isSelected ? "#fed7aa" : "#64748b"}
                                fontSize="9"
                                textAnchor="middle"
                                fontFamily="monospace"
                              >
                                PC{idx + 1}
                              </text>
                              <text
                                x={x + 11}
                                y={y - 4}
                                fill="#94a3b8"
                                fontSize="8"
                                textAnchor="middle"
                                fontFamily="monospace"
                              >
                                {evr.toFixed(0)}%
                              </text>
                            </g>
                          );
                        })}

                        {/* Cumulative line */}
                        <polyline
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="2"
                          points={pcaStats.cumulativeList
                            .map((cum, idx) => `${56 + idx * 38},${160 - (cum / 100) * 130}`)
                            .join(" ")}
                        />

                        {/* Cumulative points */}
                        {pcaStats.cumulativeList.map((cum, idx) => (
                          <circle
                            key={idx}
                            cx={56 + idx * 38}
                            cy={160 - (cum / 100) * 130}
                            r={idx === pcaComponents - 1 ? 5 : 3}
                            fill={idx < pcaComponents ? "#38bdf8" : "#64748b"}
                          />
                        ))}
                      </svg>
                    </div>

                    <div className="flex justify-between text-[11px] font-mono text-stone-500">
                      <span>PC1 captures 35% variance &bull; PC2 captures 19%</span>
                      <span>Elbow point occurs clearly at PC3</span>
                    </div>
                  </div>

                  {/* Right: Metrics Dashboard */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-stone-500 uppercase block">
                        Retained Variance
                      </span>
                      <div className="text-3xl font-black text-stone-900 font-mono">
                        {pcaStats.currentRetained}%
                      </div>
                      <p className="text-[10px] text-stone-500 font-sans">
                        Cumulative sum of selected eigenvalues relative to total dataset variance.
                      </p>
                    </div>

                    <div className={`p-5 rounded-2xl border space-y-1 ${
                      pcaStats.sufficient95 ? "bg-emerald-50 border-emerald-200" : "bg-amber-50 border-amber-200"
                    }`}>
                      <span className="text-[11px] font-mono font-bold uppercase block text-stone-700">
                        95% Information Threshold
                      </span>
                      <div className={`text-2xl font-black font-mono ${
                        pcaStats.sufficient95 ? "text-emerald-800" : "text-amber-800"
                      }`}>
                        {pcaStats.sufficient95 ? "Satisfied (Optimal)" : "Deficit (< 95%)"}
                      </div>
                      <p className="text-[10px] text-stone-600 font-sans">
                        {pcaStats.sufficient95
                          ? "Sufficient dimensions retained to reconstruct dataset with minimal loss."
                          : "More components needed to safely capture subtle predictive patterns."}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1 text-xs text-stone-600">
                      <strong>Storage &amp; Latency Reduction:</strong> By reducing 10 features to {pcaComponents}, downstream matrix multiplications run {pcaStats.compressionRatio}% faster with zero collinearity between orthogonal components.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: LINEAR VS KERNEL PCA */}
            {activeWorkbenchTab === "kernel_pca" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <Maximize2 size={13} />
                    <span>Nonlinear Manifold Projection</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Linear PCA vs. Kernel PCA Manifold Unwrapping
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Compare how standard linear PCA and RBF Kernel PCA handle intertwined concentric patterns. Notice how linear projection collapses points onto each other, while Kernel PCA cleanly unrolls the manifold.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Controls and Plots */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-stone-700">Manifold:</span>
                        <button
                          onClick={() => setManifoldType("circles")}
                          className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                            manifoldType === "circles" ? "bg-orange-600 text-white" : "bg-white border text-stone-600"
                          }`}
                        >
                          Concentric Circles
                        </button>
                        <button
                          onClick={() => setManifoldType("moons")}
                          className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                            manifoldType === "moons" ? "bg-orange-600 text-white" : "bg-white border text-stone-600"
                          }`}
                        >
                          Interlocking Moons
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <label className="text-xs font-mono font-bold text-stone-700">RBF &gamma;: {rbfGamma}</label>
                        <input
                          type="range"
                          min="0.5"
                          max="3.0"
                          step="0.1"
                          value={rbfGamma}
                          onChange={(e) => setRbfGamma(parseFloat(e.target.value))}
                          className="w-24 accent-orange-600 cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Dual Canvas: Left Linear PCA vs Right Kernel PCA */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                        <div className="text-[11px] font-mono text-rose-400 font-bold flex justify-between">
                          <span>Standard Linear PCA</span>
                          <span className="text-[10px] text-rose-300">Overlapped / Inseparable</span>
                        </div>
                        <svg viewBox="0 0 300 200" className="w-full h-44 select-none">
                          <rect width="300" height="200" fill="#09090b" rx="8" />
                          {/* Linear Projection axis */}
                          <line x1="20" y1="100" x2="280" y2="100" stroke="#3f3f46" strokeWidth="1" strokeDasharray="3 3" />
                          {projectedPoints.map((pt, idx) => (
                            <circle
                              key={idx}
                              cx={pt.linearX}
                              cy={pt.linearY}
                              r="3.5"
                              fill={pt.cls === 0 ? "#f97316" : "#38bdf8"}
                              opacity="0.85"
                            />
                          ))}
                        </svg>
                        <p className="text-[10px] text-stone-400 font-sans">
                          Linear projections collapse inner and outer classes onto the same axis, destroying separability.
                        </p>
                      </div>

                      <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2">
                        <div className="text-[11px] font-mono text-emerald-400 font-bold flex justify-between">
                          <span>RBF Kernel PCA</span>
                          <span className="text-[10px] text-emerald-300">Cleanly Separated</span>
                        </div>
                        <svg viewBox="0 0 300 200" className="w-full h-44 select-none">
                          <rect width="300" height="200" fill="#09090b" rx="8" />
                          {/* Separating Decision line */}
                          <line x1="30" y1="65" x2="270" y2="65" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" />
                          {projectedPoints.map((pt, idx) => (
                            <circle
                              key={idx}
                              cx={pt.kernelX}
                              cy={pt.kernelY}
                              r="3.5"
                              fill={pt.cls === 0 ? "#f97316" : "#38bdf8"}
                              opacity="0.85"
                            />
                          ))}
                        </svg>
                        <p className="text-[10px] text-stone-400 font-sans">
                          The RBF kernel projects data into a Hilbert space where concentric rings map to distinct parallel lines.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Insights */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-stone-500 uppercase block">
                        The Kernel Trick Advantage
                      </span>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Rather than computing explicit polynomial transformations \(\Phi(\mathbf{x})\), Kernel PCA computes inner-products via kernel matrices \(K_{ij} = k(\mathbf{x}_i, \mathbf{x}_j)\), capturing infinite-dimensional non-linear interactions at \(O(N^2)\) cost.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase block">
                        Linear Separability
                      </span>
                      <p className="text-xs text-emerald-900 leading-relaxed">
                        Notice how the green dashed boundary in Kernel PCA easily isolates the inner orange points from the blue points without requiring a complex neural network.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: T-SNE VS UMAP */}
            {activeWorkbenchTab === "tsne_umap" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200 mb-2">
                    <Compass size={13} />
                    <span>Nonlinear Manifold Visualizer</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    t-SNE vs. UMAP High-Dimensional Embedding Simulator
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Examine how t-SNE (probabilistic KL divergence with Student-t heavy tails) and UMAP (Riemannian fuzzy simplicial sets) partition simulated handwritten digit clusters.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Controls and Visualization Canvas */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEmbeddingMethod("umap")}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                            embeddingMethod === "umap" ? "bg-orange-600 text-white shadow-xs" : "bg-white border text-stone-600"
                          }`}
                        >
                          UMAP (Fuzzy Graph)
                        </button>
                        <button
                          onClick={() => setEmbeddingMethod("tsne")}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                            embeddingMethod === "tsne" ? "bg-stone-900 text-white shadow-xs" : "bg-white border text-stone-600"
                          }`}
                        >
                          t-SNE (Student-t)
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <label className="text-xs font-mono font-bold text-stone-700">
                          {embeddingMethod === "tsne" ? "Perplexity" : "n_neighbors"}: {neighborParam}
                        </label>
                        <input
                          type="range"
                          min="5"
                          max="50"
                          step="5"
                          value={neighborParam}
                          onChange={(e) => setNeighborParam(parseInt(e.target.value))}
                          className="w-28 accent-orange-600 cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Canvas */}
                    <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800">
                      <div className="text-[11px] font-mono text-stone-400 mb-2 flex justify-between">
                        <span>2D Manifold Embedding Space</span>
                        <span>{embeddingMethod === "tsne" ? "t-SNE Latent Space" : "UMAP Topological Map"}</span>
                      </div>
                      <svg viewBox="0 0 300 200" className="w-full h-52 select-none">
                        <rect width="300" height="200" fill="#09090b" rx="8" />

                        {/* Cluster connections (if UMAP) */}
                        {embeddingMethod === "umap" && (
                          <g opacity="0.25">
                            <line x1="90" y1="90" x2="155" y2="60" stroke="#f97316" strokeWidth="1" />
                            <line x1="155" y1="60" x2="150" y2="140" stroke="#10b981" strokeWidth="1" />
                          </g>
                        )}

                        {/* Embedded Points */}
                        {embeddingClusters.points.map((pt, idx) => (
                          <circle
                            key={idx}
                            cx={pt.x}
                            cy={pt.y}
                            r="3.5"
                            fill={pt.color}
                            opacity="0.85"
                          />
                        ))}

                        {/* Cluster Center Labels */}
                        {embeddingClusters.clusters.map((cl) => (
                          <text
                            key={cl.id}
                            x={cl.cx}
                            y={cl.cy - 26}
                            fill={cl.color}
                            fontSize="9"
                            fontFamily="monospace"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            {cl.label}
                          </text>
                        ))}
                      </svg>
                    </div>

                    <div className="text-[11px] font-mono text-stone-400 flex justify-between">
                      <span>{embeddingMethod === "umap" ? "Preserves continuous trajectory loops" : "Creates rounded isolated local islands"}</span>
                      <span>{embeddingMethod === "umap" ? "Fast O(N) runtime" : "Iterative O(N^2) optimization"}</span>
                    </div>
                  </div>

                  {/* Right: Comparison Panel */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-stone-500 uppercase block">
                        Global Distance Caution
                      </span>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Never measure Euclidean distances between distant clusters in t-SNE! Clusters separated by 5cm on screen may not be proportionally distant in high-dimensional space.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                      <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase block">
                        UMAP's Production Advantage
                      </span>
                      <p className="text-xs text-emerald-900 leading-relaxed">
                        Unlike t-SNE, UMAP exposes a valid <code>transform()</code> method, allowing you to project unseen test data in real-time inference pipelines without recalculating the entire embedding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 4: CERTIFICATION QUIZ */}
            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">
                      Module 16 Knowledge Assessment &amp; Certification
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600">
                      Test your understanding of high-dimensional geometry, PCA, Kernel PCA, LDA, ICA, t-SNE, and UMAP.
                    </p>
                  </div>
                  {showResults && (
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-2xl text-center">
                      <div className="text-2xl font-black text-orange-700 font-mono">{score} / 10</div>
                      <div className="text-[10px] text-stone-500 uppercase font-bold">
                        {score >= 8 ? "Certification Passed" : "Review Recommended"}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q, idx) => (
                    <div key={q.id} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                      <div className="flex items-start gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-stone-900 text-white text-xs flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">
                          {idx + 1}
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
            onClick={() => navigate("/learning/machine-learning/unsupervised-clustering")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 15 &mdash; Unsupervised Learning &amp; Clustering</span>
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
