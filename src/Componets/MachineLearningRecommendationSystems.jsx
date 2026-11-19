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
  Film,
  Star,
  UserCheck,
  Grid,
  Zap,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import MachineLearningRecommendationSystemsSections from "./MachineLearningRecommendationSystemsSections";

export default function MachineLearningRecommendationSystems() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("content_sim"); // 'content_sim' | 'collaborative_lab' | 'matrix_factorization' | 'quiz'

  // ---------------------------------------------------------------------------
  // LAB 1: CONTENT-BASED TF-IDF & COSINE SIMILARITY SIMULATOR
  // ---------------------------------------------------------------------------
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);

  // 6 sample movies with normalized feature weights [SciFi, Action, Drama, Romance, Animation]
  const contentCatalog = useMemo(() => [
    { id: 0, title: "Inception", genre: "Sci-Fi Action", vector: [0.85, 0.75, 0.30, 0.05, 0.00], year: 2010 },
    { id: 1, title: "Interstellar", genre: "Sci-Fi Drama", vector: [0.90, 0.25, 0.80, 0.20, 0.00], year: 2014 },
    { id: 2, title: "The Dark Knight", genre: "Action Crime", vector: [0.30, 0.95, 0.70, 0.10, 0.00], year: 2008 },
    { id: 3, title: "The Matrix", genre: "Sci-Fi Cyberpunk", vector: [0.90, 0.85, 0.20, 0.10, 0.00], year: 1999 },
    { id: 4, title: "Toy Story", genre: "Animation Family", vector: [0.10, 0.20, 0.15, 0.05, 0.95], year: 1995 },
    { id: 5, title: "Titanic", genre: "Romance Drama", vector: [0.00, 0.10, 0.85, 0.90, 0.00], year: 1997 },
    { id: 6, title: "The Notebook", genre: "Romance Drama", vector: [0.00, 0.00, 0.75, 0.95, 0.00], year: 2004 },
  ], []);

  const contentSimilarities = useMemo(() => {
    const target = contentCatalog[selectedMovieIndex];
    const targetNorm = Math.sqrt(target.vector.reduce((sum, v) => sum + v * v, 0));

    return contentCatalog.map((movie) => {
      if (movie.id === target.id) {
        return { ...movie, similarity: 1.0, isSelf: true };
      }
      const dotProduct = target.vector.reduce((sum, v, idx) => sum + v * movie.vector[idx], 0);
      const movieNorm = Math.sqrt(movie.vector.reduce((sum, v) => sum + v * v, 0));
      const sim = targetNorm * movieNorm === 0 ? 0 : dotProduct / (targetNorm * movieNorm);
      return { ...movie, similarity: Math.max(0, sim), isSelf: false };
    }).sort((a, b) => b.similarity - a.similarity);
  }, [contentCatalog, selectedMovieIndex]);

  // ---------------------------------------------------------------------------
  // LAB 2: COLLABORATIVE FILTERING & NEIGHBORHOOD EXPLORER
  // ---------------------------------------------------------------------------
  const [cfMode, setCfMode] = useState("user_based"); // 'user_based' | 'item_based'
  const [targetUserId, setTargetUserId] = useState(0); // User 0 (Alice)
  const [neighborK, setNeighborK] = useState(2); // K nearest neighbors

  const initialRatings = useMemo(() => [
    // Users: Alice, Bob, Charlie, Diana
    // Items: Inception, Interstellar, Dark Knight, Titanic, Toy Story
    // null represents unrated '?'
    [5, 5, 4, null, 1], // Alice
    [4, 5, null, 1, 2], // Bob
    [null, 4, 5, 2, 1], // Charlie
    [1, null, 2, 5, 4], // Diana (likes Romance/Animation, dislikes Action)
  ], []);

  const usersList = ["Alice", "Bob", "Charlie", "Diana"];
  const itemsList = ["Inception", "Interstellar", "Dark Knight", "Titanic", "Toy Story"];

  const cfPredictions = useMemo(() => {
    const activeRatings = initialRatings[targetUserId];
    const targetAvg = activeRatings.filter((r) => r !== null).reduce((a, b) => a + b, 0) /
      activeRatings.filter((r) => r !== null).length;

    // Calculate user-user similarity to targetUser
    const userSims = initialRatings.map((otherRatings, uIdx) => {
      if (uIdx === targetUserId) return { uIdx, sim: 1.0, name: usersList[uIdx] };

      // Find co-rated items
      let dot = 0, normA = 0, normB = 0, count = 0;
      for (let i = 0; i < 5; i++) {
        if (activeRatings[i] !== null && otherRatings[i] !== null) {
          dot += activeRatings[i] * otherRatings[i];
          normA += activeRatings[i] * activeRatings[i];
          normB += otherRatings[i] * otherRatings[i];
          count++;
        }
      }
      const sim = (count > 0 && normA > 0 && normB > 0) ? dot / (Math.sqrt(normA) * Math.sqrt(normB)) : 0;
      return { uIdx, sim, name: usersList[uIdx] };
    }).filter((u) => u.uIdx !== targetUserId).sort((a, b) => b.sim - a.sim);

    // Predict for unrated items of target user
    const predictions = itemsList.map((item, itemIdx) => {
      const currentRating = activeRatings[itemIdx];
      if (currentRating !== null) {
        return { item, itemIdx, currentRating, predicted: currentRating, isKnown: true };
      }

      // Aggregate top K neighbors who rated this item
      const candidateNeighbors = userSims.filter((n) => initialRatings[n.uIdx][itemIdx] !== null).slice(0, neighborK);
      if (candidateNeighbors.length === 0) {
        return { item, itemIdx, currentRating: null, predicted: targetAvg, isKnown: false };
      }

      const weightedSum = candidateNeighbors.reduce((acc, n) => acc + n.sim * initialRatings[n.uIdx][itemIdx], 0);
      const simSum = candidateNeighbors.reduce((acc, n) => acc + Math.abs(n.sim), 0);
      const pred = simSum > 0 ? weightedSum / simSum : targetAvg;

      return {
        item,
        itemIdx,
        currentRating: null,
        predicted: Math.min(5, Math.max(1, pred)),
        isKnown: false,
        neighborsUsed: candidateNeighbors,
      };
    });

    return { userSims, predictions, targetAvg };
  }, [initialRatings, targetUserId, neighborK, usersList, itemsList]);

  // ---------------------------------------------------------------------------
  // LAB 3: MATRIX FACTORIZATION & LATENT FACTOR SVD PREDICTOR
  // ---------------------------------------------------------------------------
  const [latentFactor1, setLatentFactor1] = useState(1.4); // User affinity: Action/SciFi factor
  const [latentFactor2, setLatentFactor2] = useState(-0.8); // User affinity: Romance/Drama factor
  const [userBias, setUserBias] = useState(0.2); // User rating leniency

  const mfItems = useMemo(() => [
    { name: "Inception", q1: 1.6, q2: -0.4, bi: 0.35, trueR: 4.8 },
    { name: "Interstellar", q1: 1.5, q2: 0.6, bi: 0.40, trueR: 4.6 },
    { name: "The Notebook", q1: -1.4, q2: 1.7, bi: 0.10, trueR: 2.1 },
    { name: "Toy Story", q1: -0.2, q2: -0.5, bi: 0.20, trueR: 3.5 },
    { name: "Titanic", q1: -0.8, q2: 1.8, bi: 0.45, trueR: 2.8 },
  ], []);

  const globalMean = 3.6;

  const mfPredictions = useMemo(() => {
    return mfItems.map((item) => {
      // r_hat = mu + b_u + b_i + (p1*q1 + p2*q2)
      const dot = latentFactor1 * item.q1 + latentFactor2 * item.q2;
      const rawPred = globalMean + userBias + item.bi + dot;
      const pred = Math.min(5.0, Math.max(1.0, rawPred));
      const error = Math.abs(pred - item.trueR);
      return { ...item, dot, pred, error };
    });
  }, [latentFactor1, latentFactor2, userBias, mfItems]);

  const mfRmse = useMemo(() => {
    const mse = mfPredictions.reduce((acc, it) => acc + Math.pow(it.pred - it.trueR, 2), 0) / mfPredictions.length;
    return Math.sqrt(mse);
  }, [mfPredictions]);

  // ---------------------------------------------------------------------------
  // LAB 4: 10-QUESTION CERTIFICATION ASSESSMENT
  // ---------------------------------------------------------------------------
  const quizQuestions = useMemo(() => [
    {
      id: 1,
      question: "What is the key difference between explicit and implicit feedback in recommendation systems?",
      options: [
        "Explicit feedback is collected via sensors, whereas implicit feedback is typed manually",
        "Explicit feedback directly records user sentiment (e.g. 1–5 star ratings, reviews), whereas implicit feedback infers preferences indirectly from behavioral signals (e.g. clicks, watch duration, purchase history)",
        "Implicit feedback is always 100% accurate, whereas explicit feedback is noisy",
        "Explicit feedback can only be processed using deep neural networks",
      ],
      correctIndex: 1,
      explanation: "Explicit feedback represents deliberate, quantified expressions of user preference (such as numerical ratings or thumbs up/down). Implicit feedback tracks natural interactions (clicks, dwell time, stream completions) which are far more abundant and non-intrusive, but lack explicit negative signals.",
    },
    {
      id: 2,
      question: "Why is Pearson correlation often preferred over raw Cosine similarity in user-based collaborative filtering?",
      options: [
        "Pearson correlation normalizes for user rating biases (strict raters whose average is 2.5 vs generous raters whose average is 4.5) by mean-centering ratings",
        "Pearson correlation runs in O(1) time complexity while Cosine is O(N^3)",
        "Cosine similarity cannot handle positive numbers",
        "Pearson correlation automatically imputes missing values with zero",
      ],
      correctIndex: 0,
      explanation: "Different users have distinct rating tendencies: a critical user might award 4 stars only to masterpieces, whereas an enthusiastic user routinely awards 5 stars. Pearson correlation subtracts each user's mean rating, comparing relative preference deviations rather than absolute values.",
    },
    {
      id: 3,
      question: "Why is Item-Based Collaborative Filtering generally more scalable and stable in commercial platforms (e.g. Amazon) than User-Based Collaborative Filtering?",
      options: [
        "Items never have any missing data",
        "The number of users typically far exceeds the number of items, and item-to-item similarity patterns change much more slowly than dynamic user taste profiles, allowing precomputation",
        "Item-based filtering does not require any similarity metrics",
        "User-based filtering cannot recommend movies",
      ],
      correctIndex: 1,
      explanation: "In production systems with hundreds of millions of users and tens of thousands of items, computing user-user similarities is computationally prohibitive (O(N_users^2)). Furthermore, an item's identity and genre characteristics remain stable over time, enabling offline precomputation and caching of item similarity matrices.",
    },
    {
      id: 4,
      question: "How does Content-Based Filtering effectively alleviate the new-item cold-start problem?",
      options: [
        "By waiting until at least 1,000 users have rated the item",
        "By representing the new item using its static metadata and attributes (e.g. genre, director, keywords, text description) and matching it with user profile preference vectors without needing historical user interactions",
        "By randomly assigning ratings to new items",
        "By converting the collaborative filtering matrix into a dense tensor",
      ],
      correctIndex: 1,
      explanation: "Collaborative filtering fails completely on brand-new items because no interaction records exist (zero ratings). Content-based filtering relies strictly on item attributes and feature representations, allowing immediate recommendations to users whose profile vectors align with those attributes.",
    },
    {
      id: 5,
      question: "What is the primary objective of Matrix Factorization (such as Funk SVD) in collaborative filtering?",
      options: [
        "To invert the user-item interaction matrix",
        "To decompose the large, sparse user-item interaction matrix R into the product of two lower-rank matrices: user latent factor matrix P and item latent factor matrix Q",
        "To delete all unrated entries and replace them with mean values",
        "To cluster users using hierarchical dendrograms",
      ],
      correctIndex: 1,
      explanation: "Matrix factorization maps both users and items to a joint latent factor space of dimensionality k << min(m, n). The interaction between user u and item i is modeled by the inner product of their latent vectors: r_ui ≈ p_u · q_i^T, capturing hidden semantic dimensions.",
    },
    {
      id: 6,
      question: "In regularized matrix factorization rating prediction r_hat(u,i) = μ + b_u + b_i + p_u · q_i^T, what purpose do the bias terms b_u and b_i serve?",
      options: [
        "They prevent the gradient descent learning rate from decaying",
        "They capture systematic baseline tendencies: μ is the global average rating, b_u reflects user leniency/strictness, and b_i reflects item popularity/quality, isolating genuine interaction signals into the latent factors",
        "They ensure that the prediction is always an integer from 1 to 5",
        "They replace the need for regularization penalties",
      ],
      correctIndex: 1,
      explanation: "Much of the variance in ratings is explained by simple baseline effects: popular masterpieces generally receive higher ratings (item bias b_i), and critical users systematically rate lower than average (user bias b_u). Factoring out these baseline biases ensures that latent vectors capture true personal preference affinities.",
    },
    {
      id: 7,
      question: "Why cannot classical truncated Singular Value Decomposition (SVD) from linear algebra be applied directly to real-world recommendation interaction matrices without modification?",
      options: [
        "Because classical SVD is undefined for sparse matrices where 99%+ of entries are missing; naive imputation (filling with 0 or mean) drastically distorts the data and is computationally infeasible",
        "Because SVD only works on square symmetric matrices",
        "Because singular values are always negative in recommender systems",
        "Because SVD does not support floating-point numbers",
      ],
      correctIndex: 0,
      explanation: "Standard mathematical SVD requires a complete, dense matrix. In real-world recommendation datasets where sparsity exceeds 99%, filling missing values with zeros introduces massive noise and misinterprets unobserved items as disliked. Simon Funk's formulation solves this by training latent factors using gradient descent exclusively over observed ratings.",
    },
    {
      id: 8,
      question: "Why are top-N ranking metrics like NDCG (Normalized Discounted Cumulative Gain) and Precision@K preferred over RMSE for modern recommendation platforms?",
      options: [
        "RMSE is mathematically invalid on numbers greater than 1",
        "Users only experience the top K items on their screen, and NDCG penalizes errors near the top of the list much more heavily than errors down at position 50, reflecting real user engagement",
        "Precision@K computes faster because it ignores user IDs",
        "NDCG is only used for sorting text documents alphabetically",
      ],
      correctIndex: 1,
      explanation: "A model can achieve an outstanding (low) RMSE by accurately predicting that a user will rate 10,000 mediocre movies as 2.1 instead of 2.3, yet fail completely at placing the user's top 5 favorite movies at positions 1–5. Top-N metrics and NDCG evaluate the quality and ordering of recommendations where users actually interact.",
    },
    {
      id: 9,
      question: "What is popularity bias in recommendation systems, and what is its negative consequence?",
      options: [
        "The system only recommends items that cost more than $100",
        "Algorithms favor blockbuster/trending items with high interaction volume, starving niche long-tail items and trapping users in repetitive feedback loops with low diversity",
        "Users get logged out if they click on popular videos",
        "The server CPU runs out of memory when processing popular items",
      ],
      correctIndex: 1,
      explanation: "Standard collaborative filtering algorithms optimize for aggregate interaction volume, which disproportionately reinforces viral or blockbuster items. This leads to a rich-get-richer cycle that ignores personalized long-tail catalog discovery and degrades user satisfaction over time.",
    },
    {
      id: 10,
      question: "In modern production recommendation architectures (e.g. YouTube, Netflix), why is a two-stage pipeline consisting of Candidate Generation followed by Ranking utilized?",
      options: [
        "Because one model is written in Python and the other in Java",
        "To balance scalability and precision: candidate generation filters millions of items down to hundreds in milliseconds using lightweight models/vector search, allowing heavy multi-feature deep ranking models to score only the top candidates within strict latency budgets",
        "Because candidate generation only works on weekends",
        "To allow users to manually vote on candidate items before they are displayed",
      ],
      correctIndex: 1,
      explanation: "Evaluating complex ranking models with hundreds of real-time features and cross-attentions across a catalog of 100 million videos in under 50ms is computationally impossible. The retrieval stage rapidly narrows the space from millions to hundreds using Approximate Nearest Neighbors (ANN) vector indices, whereupon the ranking model performs granular scoring.",
    },
  ], []);

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
        currentModuleId="recommendation-systems"
        trackId="machine-learning"
        course="machine-learning"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8 flex-1">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-stone-500 flex items-center gap-2">
          <button onClick={() => navigate("/")} className="hover:text-stone-900 transition-colors">
            Home
          </button>
          <span>/</span>
          <button onClick={() => navigate("/learning")} className="hover:text-stone-900 transition-colors">
            Curriculum
          </button>
          <span>/</span>
          <button onClick={() => navigate("/learning/machine-learning")} className="hover:text-stone-900 transition-colors">
            Machine Learning
          </button>
          <span>/</span>
          <span className="text-stone-900 font-bold">Module 18</span>
        </nav>

        {/* Hero Card */}
        <header className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800 border border-orange-200">
                MODULE 18
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-600">
                Supervised &amp; Unsupervised Fusion
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-600">
                Production Personalization
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              Recommendation Systems &amp; Personalization
            </h1>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Master the mathematics, algorithms, and industrial systems powering modern discovery engines at Netflix, YouTube, Spotify, and Amazon. Formulate interaction matrices, implement Content-Based TF-IDF matching, User-Based &amp; Item-Based Collaborative Filtering, regularized Funk Matrix Factorization (SVD) with bias modeling, cold-start remediation, and Top-N ranking metrics (Precision@K, NDCG).
            </p>

            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-stone-500">
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">User-Item Matrix</span>
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">TF-IDF &amp; Cosine</span>
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">Funk SVD Latent Factors</span>
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">Top-N NDCG Ranking</span>
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">Two-Tower Architecture</span>
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
              <span>Full Curriculum (20 Topics)</span>
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
              <span>Interactive Recommendation Workbench (4 Labs)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CURRICULUM SPECIFICATION */}
        {activeTab === "curriculum" && (
          <MachineLearningRecommendationSystemsSections />
        )}

        {/* TAB 2: INTERACTIVE WORKBENCH */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Sub-Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-2xl border border-[#e7e3da] shadow-xs">
              <button
                onClick={() => setActiveWorkbenchTab("content_sim")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "content_sim"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <Film size={15} />
                <span>Lab 1: Content-Based TF-IDF Simulator</span>
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("collaborative_lab")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "collaborative_lab"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <UserCheck size={15} />
                <span>Lab 2: Collaborative Filtering Explorer</span>
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("matrix_factorization")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "matrix_factorization"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <Grid size={15} />
                <span>Lab 3: Latent Factor SVD Predictor</span>
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

            {/* LAB 1: CONTENT-BASED TF-IDF & COSINE SIMILARITY */}
            {activeWorkbenchTab === "content_sim" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 1</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Content-Based TF-IDF &amp; Cosine Similarity Simulator
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Select a movie from the catalog to see its multi-dimensional genre vector, inspect vector dot products against all catalog items, and view real-time ranked recommendations based on Cosine Similarity: <em>cos(&theta;) = (u &middot; v) / (||u|| &times; ||v||)</em>.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Movie Selection Panel */}
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                      Select Target Movie
                    </span>
                    <div className="space-y-2">
                      {contentCatalog.map((movie) => (
                        <button
                          key={movie.id}
                          onClick={() => setSelectedMovieIndex(movie.id)}
                          className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                            selectedMovieIndex === movie.id
                              ? "bg-orange-50/80 border-orange-300 ring-2 ring-orange-400/20"
                              : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                          }`}
                        >
                          <div>
                            <span className="font-bold text-stone-900 text-sm block">{movie.title}</span>
                            <span className="text-xs text-stone-500 font-mono">{movie.genre} ({movie.year})</span>
                          </div>
                          <span className="text-xs font-mono bg-white px-2 py-1 rounded-lg border border-stone-200 text-stone-600">
                            ID: {movie.id}
                          </span>
                        </button>
                      ))}
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                      <span className="font-bold text-stone-800">Target Feature Vector</span>
                      <div className="flex flex-wrap gap-1 font-mono">
                        {["SciFi", "Action", "Drama", "Romance", "Animation"].map((feat, idx) => (
                          <div key={feat} className="bg-white px-2 py-1 rounded border border-stone-200 text-stone-700">
                            {feat}: <strong>{contentCatalog[selectedMovieIndex].vector[idx].toFixed(2)}</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Similarity Results Table */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                        Ranked Content Recommendations for "{contentCatalog[selectedMovieIndex].title}"
                      </span>
                      <span className="text-xs font-mono text-stone-500">Cosine Similarity Metric</span>
                    </div>

                    <div className="space-y-2">
                      {contentSimilarities.map((item, rank) => (
                        <div
                          key={item.id}
                          className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
                            item.isSelf
                              ? "bg-stone-100/70 border-dashed border-stone-300 opacity-60"
                              : rank === 1
                              ? "bg-emerald-50/70 border-emerald-300 shadow-xs"
                              : "bg-white border-stone-200"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                              item.isSelf
                                ? "bg-stone-200 text-stone-600"
                                : rank === 1
                                ? "bg-emerald-600 text-white"
                                : "bg-stone-100 text-stone-700"
                            }`}>
                              {item.isSelf ? "&minus;" : rank}
                            </span>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-stone-900 text-sm">{item.title}</span>
                                {item.isSelf && (
                                  <span className="text-[10px] bg-stone-200 text-stone-700 px-1.5 py-0.5 rounded font-mono">
                                    Current Seed
                                  </span>
                                )}
                                {rank === 1 && !item.isSelf && (
                                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">
                                    Top Match
                                  </span>
                                )}
                              </div>
                              <span className="text-xs text-stone-500 font-mono">{item.genre}</span>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-sm font-black font-mono text-stone-900">
                              {(item.similarity * 100).toFixed(1)}%
                            </div>
                            <div className="w-24 bg-stone-100 h-2 rounded-full overflow-hidden mt-1 border border-stone-200">
                              <div
                                className={`h-full ${rank === 1 && !item.isSelf ? "bg-emerald-500" : "bg-orange-500"}`}
                                style={{ width: `${Math.round(item.similarity * 100)}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200 text-orange-950 text-xs space-y-1">
                      <span className="font-bold flex items-center gap-1 text-orange-800">
                        <Sparkles size={14} /> Content-Based Inference Insight
                      </span>
                      <p className="leading-relaxed">
                        Notice how selecting <em>Inception</em> surfaces <em>The Matrix</em> and <em>Interstellar</em> as top matches due to high Sci-Fi/Action vector overlap, while completely depressing <em>Titanic</em> and <em>Toy Story</em>. This requires zero historical user logs, solving new-item cold start.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: COLLABORATIVE FILTERING & NEIGHBORHOOD EXPLORER */}
            {activeWorkbenchTab === "collaborative_lab" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 2</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Collaborative Filtering &amp; Neighborhood Explorer
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Explore User-Based Collaborative Filtering (UBCF) on a sparse 4&times;5 rating matrix. Change the active target user and neighbor count <em>K</em> to see neighbor similarity weighting and unrated item rating imputation.
                  </p>
                </div>

                {/* Controls */}
                <div className="flex flex-wrap items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Target Active User:</label>
                    <select
                      value={targetUserId}
                      onChange={(e) => setTargetUserId(Number(e.targetUserId || e.target.value))}
                      className="px-3 py-1.5 rounded-xl bg-white border border-stone-200 font-bold text-stone-800 cursor-pointer"
                    >
                      {usersList.map((name, idx) => (
                        <option key={name} value={idx}>{name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Top Neighbors K: ({neighborK})</label>
                    <input
                      type="range"
                      min="1"
                      max="3"
                      value={neighborK}
                      onChange={(e) => setNeighborK(Number(e.target.value))}
                      className="w-32 accent-orange-600 cursor-pointer"
                    />
                  </div>

                  <div className="ml-auto font-mono text-stone-600">
                    Target Average: <strong>{cfPredictions.targetAvg.toFixed(2)} &#9733;</strong>
                  </div>
                </div>

                {/* Rating Matrix Grid */}
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-stone-100 text-stone-800 font-bold uppercase tracking-wider">
                      <tr>
                        <th className="p-3">User</th>
                        {itemsList.map((item) => (
                          <th key={item} className="p-3 text-center">{item}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700">
                      {initialRatings.map((row, uIdx) => (
                        <tr
                          key={usersList[uIdx]}
                          className={uIdx === targetUserId ? "bg-orange-50/80 font-bold text-stone-900" : "hover:bg-stone-50"}
                        >
                          <td className="p-3 flex items-center gap-2">
                            <span>{usersList[uIdx]}</span>
                            {uIdx === targetUserId && (
                              <span className="text-[10px] bg-orange-600 text-white px-1.5 py-0.5 rounded font-mono">
                                Target
                              </span>
                            )}
                          </td>
                          {row.map((val, itIdx) => (
                            <td key={itIdx} className="p-3 text-center font-mono">
                              {val !== null ? (
                                <span className="inline-block px-2 py-1 rounded bg-stone-100 border border-stone-200">
                                  {val}.0 &#9733;
                                </span>
                              ) : uIdx === targetUserId ? (
                                <span className="inline-block px-2 py-1 rounded bg-orange-200 text-orange-950 font-black border border-orange-300">
                                  ? &rarr; {cfPredictions.predictions[itIdx].predicted.toFixed(1)} &#9733;
                                </span>
                              ) : (
                                <span className="text-stone-400">&minus;</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Neighbor Weights & Predictions Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                      Neighbor Similarity Weights to {usersList[targetUserId]}
                    </span>
                    <div className="space-y-1.5 text-xs font-mono">
                      {cfPredictions.userSims.map((n, idx) => (
                        <div key={n.name} className="flex items-center justify-between p-2 rounded-xl bg-white border border-stone-200">
                          <span>{n.name} {idx < neighborK ? "(Selected K-Neighbor)" : "(Excluded)"}</span>
                          <span className={`font-bold ${idx < neighborK ? "text-orange-600" : "text-stone-400"}`}>
                            Sim: {n.sim.toFixed(3)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                      Generated Recommendations for Unrated Items
                    </span>
                    <div className="space-y-1.5 text-xs">
                      {cfPredictions.predictions.filter((p) => !p.isKnown).map((p) => (
                        <div key={p.item} className="p-2.5 rounded-xl bg-white border border-orange-200 flex items-center justify-between">
                          <div>
                            <span className="font-bold text-stone-900 block">{p.item}</span>
                            <span className="text-[11px] text-stone-500 font-mono">
                              Weighted from {p.neighborsUsed?.length || 0} neighbors
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-black font-mono text-orange-600">
                              {p.predicted.toFixed(2)} &#9733;
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: MATRIX FACTORIZATION & SVD PREDICTOR */}
            {activeWorkbenchTab === "matrix_factorization" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 3</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Latent Factor Matrix Factorization &amp; Bias Predictor
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Tune the user's hidden 2D latent factor vector <em>p&#8407;<sub>u</sub> = [Factor 1, Factor 2]</em> and user rating bias <em>b<sub>u</sub></em> to observe how the Funk SVD rating formula predicts scores across items in real time:
                  </p>
                  <div className="mt-2 p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs">
                    r&#770;<sub>u,i</sub> = &mu; (3.60) + b<sub>u</sub> + b<sub>i</sub> + ( p<sub>u,1</sub> &times; q<sub>i,1</sub> + p<sub>u,2</sub> &times; q<sub>i,2</sub> )
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 text-xs">
                    <span className="font-bold text-stone-800 uppercase tracking-wider block">
                      User Latent Parameters
                    </span>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Factor 1 (Sci-Fi / Action Affinity):</span>
                        <strong>{latentFactor1.toFixed(2)}</strong>
                      </div>
                      <input
                        type="range"
                        min="-2.0"
                        max="2.0"
                        step="0.1"
                        value={latentFactor1}
                        onChange={(e) => setLatentFactor1(parseFloat(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Factor 2 (Romance / Drama Affinity):</span>
                        <strong>{latentFactor2.toFixed(2)}</strong>
                      </div>
                      <input
                        type="range"
                        min="-2.0"
                        max="2.0"
                        step="0.1"
                        value={latentFactor2}
                        onChange={(e) => setLatentFactor2(parseFloat(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>User Leniency Bias (b<sub>u</sub>):</span>
                        <strong>{userBias.toFixed(2)}</strong>
                      </div>
                      <input
                        type="range"
                        min="-1.0"
                        max="1.0"
                        step="0.05"
                        value={userBias}
                        onChange={(e) => setUserBias(parseFloat(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div className="pt-3 border-t border-stone-200 space-y-1">
                      <span className="font-bold text-stone-700 block">Model Performance</span>
                      <div className="font-mono text-xs flex justify-between">
                        <span>Validation RMSE:</span>
                        <strong className={mfRmse < 0.6 ? "text-emerald-600" : "text-amber-600"}>
                          {mfRmse.toFixed(3)}
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* Prediction Results */}
                  <div className="lg:col-span-2 space-y-3">
                    <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                      Live Rating Predictions &amp; Latent Dot Products
                    </span>

                    <div className="space-y-2">
                      {mfPredictions.map((item) => (
                        <div
                          key={item.name}
                          className="p-4 rounded-2xl bg-white border border-stone-200 flex items-center justify-between text-xs"
                        >
                          <div>
                            <span className="font-bold text-stone-900 text-sm block">{item.name}</span>
                            <span className="font-mono text-[11px] text-stone-500">
                              q = [{item.q1.toFixed(1)}, {item.q2.toFixed(1)}] | Bias b_i: {item.bi.toFixed(2)}
                            </span>
                          </div>

                          <div className="flex items-center gap-6 text-right font-mono">
                            <div>
                              <span className="text-stone-400 block text-[10px]">Dot Product</span>
                              <span className="text-stone-700">{item.dot.toFixed(2)}</span>
                            </div>

                            <div>
                              <span className="text-stone-400 block text-[10px]">Predicted r&#770;</span>
                              <span className="text-base font-black text-orange-600">{item.pred.toFixed(2)} &#9733;</span>
                            </div>

                            <div>
                              <span className="text-stone-400 block text-[10px]">Ground Truth</span>
                              <span className="text-stone-800 font-bold">{item.trueR.toFixed(1)} &#9733;</span>
                            </div>
                          </div>
                        </div>
                      ))}
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
                      Recommendation Systems Mastery Certification
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Test your conceptual and mathematical understanding of collaborative filtering, matrix factorization, evaluation metrics, and system design.
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
            onClick={() => navigate("/learning/machine-learning/anomaly-detection")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 17 &mdash; Anomaly Detection &amp; Imbalanced Learning</span>
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
