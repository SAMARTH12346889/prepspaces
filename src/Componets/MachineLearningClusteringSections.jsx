import React, { useState } from "react";
import {
  Sparkles,
  Layers,
  Cpu,
  Zap,
  Target,
  Activity,
  CheckCircle2,
  Copy,
  Check,
  ChevronRight,
  ChevronDown,
  Table,
  Sliders,
  Filter,
  BarChart2,
  GitBranch,
  ShieldAlert,
  AlertTriangle,
  Lightbulb,
  FileCode,
  Hash,
  Binary,
  ArrowRight,
  TrendingUp,
  Clock,
  Calendar,
  Compass,
  PieChart,
  Users,
  Eye,
  CircleDot,
  Radio,
} from "lucide-react";

export default function MachineLearningClusteringSections() {
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="space-y-10">
      {/* SECTION 1: INTRODUCTION TO UNSUPERVISED LEARNING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 01
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Unsupervised Discovery
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          1. Introduction to Unsupervised Learning &amp; Clustering
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          <strong>Unsupervised Learning</strong> is the discipline of discovering latent patterns, mathematical geometry, and subgroup structures from input data without using predefined target labels. While supervised learning relies on ground-truth targets (e.g. predicting price or churn), unsupervised algorithms analyze feature coordinates directly to partition observations into natural cohorts.
        </p>

        {/* Supervised vs Unsupervised Table */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-800 font-mono">
                <th className="p-3">Dimension</th>
                <th className="p-3">Supervised Learning</th>
                <th className="p-3">Unsupervised Learning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-sans text-stone-700">
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">Training Data</td>
                <td className="p-3">Labeled features + target vectors (X, y)</td>
                <td className="p-3 text-emerald-800 font-medium">Unlabeled feature matrix only (X)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">Primary Objective</td>
                <td className="p-3">Predict known outcomes on unseen inputs</td>
                <td className="p-3 text-sky-800 font-medium">Discover hidden cohorts, manifolds, and density modes</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">Validation Metrics</td>
                <td className="p-3">Accuracy, MSE, RMSE, F1-Score, ROC-AUC</td>
                <td className="p-3">Inertia, Silhouette Score, Davies-Bouldin, AIC/BIC</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">Core Archetypes</td>
                <td className="p-3">Linear Regression, XGBoost, Neural Nets</td>
                <td className="p-3">K-Means, DBSCAN, GMM, Agglomerative Hierarchical, PCA</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Four Branches of Unsupervised Learning */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-xs">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
            <span className="font-bold font-mono text-orange-600 block">1. Clustering</span>
            <p className="text-stone-600">Partitions observations into cohesive, separated cohorts (K-Means, DBSCAN, GMM).</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
            <span className="font-bold font-mono text-sky-600 block">2. Dimensionality Reduction</span>
            <p className="text-stone-600">Compresses feature dimensions while preserving variance (PCA, t-SNE, UMAP).</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
            <span className="font-bold font-mono text-amber-600 block">3. Anomaly Detection</span>
            <p className="text-stone-600">Flags low-density outliers and extreme irregularities (Isolation Forest, LOF).</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
            <span className="font-bold font-mono text-emerald-600 block">4. Association Rules</span>
            <p className="text-stone-600">Discovers frequent itemset co-occurrences in transactions (Apriori, FP-Growth).</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: OBJECTIVES & DISTANCE METRICS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 02 &ndash; 03
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Geometric Formulations
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          2. Mathematical Objectives, Inertia &amp; Distance Metrics
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Clustering seeks to maximize <strong>within-cluster cohesion</strong> (samples in cluster <em>j</em> are tightly packed) while maximizing <strong>between-cluster separation</strong> (clusters are distinct and well-isolated). In centroid-based methods, cohesion is quantified by <strong>Inertia</strong>, also called the Within-Cluster Sum of Squares (WCSS):
        </p>

        {/* Inertia Mathematical Card */}
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs sm:text-sm text-stone-800 space-y-1">
          <span className="text-stone-500 block">// Within-Cluster Sum of Squares (Inertia Objective):</span>
          <div className="text-base sm:text-lg font-black text-orange-700">
            J = &Sigma;<sub>j=1</sub><sup>K</sup> &Sigma;<sub>x<sub>i</sub> &isin; C<sub>j</sub></sub> || x<sub>i</sub> &minus; &mu;<sub>j</sub> ||<sup>2</sup>
          </div>
          <p className="font-sans text-xs text-stone-600 pt-1">
            Where <em>K</em> is the number of clusters, <em>C<sub>j</sub></em> is the set of points assigned to cluster <em>j</em>, and <em>&mu;<sub>j</sub></em> is the geometric centroid vector.
          </p>
        </div>

        {/* Distance Metrics Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm font-mono">Euclidean Distance</h4>
            <div className="text-xs font-mono text-orange-600">d(x, z) = &radic;(&Sigma; (x<sub>i</sub> &minus; z<sub>i</sub>)<sup>2</sup>)</div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Straight-line geometric distance. Standard for K-Means and Ward linkage. Assumes isotropic (spherical) feature spaces.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm font-mono">Manhattan Distance</h4>
            <div className="text-xs font-mono text-orange-600">d(x, z) = &Sigma; |x<sub>i</sub> &minus; z<sub>i</sub>|</div>
            <p className="text-xs text-stone-600 leading-relaxed">
              L1 city-block distance. Highly robust to extreme outliers along individual coordinate axes.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm font-mono">Cosine Distance</h4>
            <div className="text-xs font-mono text-orange-600">1 &minus; (x &bull; z) / (||x|| ||z||)</div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Measures angular alignment independent of magnitude. Essential for high-dimensional TF-IDF and word embeddings.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
          <strong>Mandatory Feature Scaling Alert:</strong> If Annual Income ranges from $20,000 to $500,000 while Age ranges from 18 to 75, Euclidean distance will be 99.99% driven by income differences. You must apply <code className="font-mono bg-amber-100 px-1 rounded">StandardScaler()</code> before clustering!
        </div>
      </section>

      {/* SECTION 4 & 5: K-MEANS & K-MEANS++ */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 04 &ndash; 05
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Centroid Optimization
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          3. K-Means &amp; K-Means++ Probabilistic Initialization
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          K-Means partitions data through an iterative Expectation-Maximization-like heuristic known as <strong>Lloyd's Algorithm</strong>: assign each point to the nearest centroid, recompute centroids as the mean of assigned points, and repeat until centroids shift less than tolerance &epsilon;.
        </p>

        {/* K-Means++ Algorithm Card */}
        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Zap size={16} className="text-orange-600" />
              Why K-Means++ Initialization is the Production Standard
            </h4>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
              O(log K) Approximation Guarantee
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Standard uniform random initialization frequently picks initial centroids clustered together inside the same dense group, trapping K-Means in sub-optimal local minima. <strong>K-Means++</strong> resolves this via distance-squared probabilistic sampling:
          </p>
          <div className="p-3 bg-white rounded-xl border border-stone-200 font-mono text-xs text-stone-800 space-y-1">
            <div>1. Pick the 1st centroid &mu;<sub>1</sub> uniformly at random from dataset X.</div>
            <div>2. For each point x<sub>i</sub>, compute D(x<sub>i</sub>) = distance to nearest already chosen centroid.</div>
            <div>3. Sample next centroid with probability: <span className="font-bold text-orange-600">P(x<sub>i</sub>) = D(x<sub>i</sub>)<sup>2</sup> / &Sigma; D(x<sub>j</sub>)<sup>2</sup></span></div>
            <div>4. Repeat until K centroids are initialized; then commence standard Lloyd iterations.</div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2 overflow-x-auto">
          <div>from sklearn.cluster import KMeans</div>
          <div>from sklearn.preprocessing import StandardScaler</div>
          <br />
          <div>X_scaled = StandardScaler().fit_transform(X)</div>
          <div>kmeans = KMeans(n_clusters=4, init="k-means++", n_init=10, max_iter=300, random_state=42)</div>
          <div>cluster_labels = kmeans.fit_predict(X_scaled)</div>
          <div>centroids = kmeans.cluster_centers_</div>
          <div>{'print(f"Final WCSS Inertia: {kmeans.inertia_:.2f}")'}</div>
        </div>
      </section>

      {/* SECTION 6, 7, 8: ELBOW METHOD & SILHOUETTE SCORE */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 06 &ndash; 08
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Cluster Selection Diagnostics
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          4. Determining Optimal K: The Elbow Method &amp; Silhouette Analysis
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Because K-Means requires <em>K</em> to be specified in advance and Inertia strictly declines as <em>K &rarr; N</em>, picking <em>K</em> requires diagnostic curves comparing marginal compactness gains against cluster separation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Elbow Method */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <TrendingUp size={16} className="text-orange-600" />
              The Elbow Method (Point of Diminishing Returns)
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Plots Inertia against <em>K &isin; [1..10]</em>. The ideal cluster count corresponds to the bend ("elbow") where the sharp decline abruptly flattens into incremental marginal improvements.
            </p>
            <div className="p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs overflow-x-auto">
              inertias = [KMeans(n_clusters=k, n_init=10).fit(X_scaled).inertia_ for k in range(1, 11)]
            </div>
            <p className="text-xs text-stone-500 font-sans">
              <strong>Limitation:</strong> On smooth or overlapping datasets, the elbow curve is often ambiguous with no clear distinct kink.
            </p>
          </div>

          {/* Silhouette Score */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <PieChart size={16} className="text-sky-600" />
              Silhouette Analysis: s(i) &isin; [-1, +1]
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Quantifies both cohesion <em>a(i)</em> (mean distance to members of own cluster) and separation <em>b(i)</em> (mean distance to nearest neighboring cluster):
              <br />
              <code className="font-mono text-stone-800 font-bold">s(i) = (b(i) &minus; a(i)) / max(a(i), b(i))</code>
            </p>
            <div className="p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs overflow-x-auto">
              from sklearn.metrics import silhouette_score<br />
              score = silhouette_score(X_scaled, labels) # Values &gt; 0.5 indicate strong structure!
            </div>
            <p className="text-xs text-stone-500 font-sans">
              <strong>Interpretation:</strong> Near +1: well-separated. Near 0: sample sits on decision boundary. Negative: point is closer to another cluster than its own.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9, 10, 11: AGGLOMERATIVE HIERARCHICAL & DENDROGRAMS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 09 &ndash; 11
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Hierarchical Trees
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          5. Agglomerative Hierarchical Clustering &amp; Dendrograms
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Agglomerative clustering is a bottom-up hierarchical technique: every sample starts as an individual singleton cluster, and the algorithm sequentially merges the closest pair of clusters according to a chosen <strong>linkage criterion</strong> until a single root node remains.
        </p>

        {/* Linkage Matrix Table */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-800 font-mono">
                <th className="p-3">Linkage Criterion</th>
                <th className="p-3">Mathematical Distance Formulation</th>
                <th className="p-3">Cluster Geometry &amp; Behavior</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-sans text-stone-700">
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">Single Linkage</td>
                <td className="p-3 font-mono text-xs">D(A, B) = min &#123; d(a, b) : a &isin; A, b &isin; B &#125;</td>
                <td className="p-3 text-rose-700">Can follow non-linear filaments, but prone to "chaining effect"</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">Complete Linkage</td>
                <td className="p-3 font-mono text-xs">D(A, B) = max &#123; d(a, b) : a &isin; A, b &isin; B &#125;</td>
                <td className="p-3 text-stone-700">Forces compact spherical clusters with bounded maximum diameter</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">Average Linkage</td>
                <td className="p-3 font-mono text-xs">D(A, B) = (1 / |A||B|) &Sigma; &Sigma; d(a, b)</td>
                <td className="p-3 text-stone-700">Robust compromise between single and complete linkage</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">Ward Linkage</td>
                <td className="p-3 font-mono text-xs">Minimizes increase in total within-cluster variance</td>
                <td className="p-3 text-emerald-800 font-bold">Standard production choice (requires Euclidean metric)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* SciPy Dendrogram Snippet */}
        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2 overflow-x-auto">
          <div className="text-stone-400">// Visualizing Cluster Merges via SciPy Dendrogram:</div>
          <div>from scipy.cluster.hierarchy import linkage, dendrogram</div>
          <div>import matplotlib.pyplot as plt</div>
          <br />
          <div>Z = linkage(X_scaled, method="ward")</div>
          <div>plt.figure(figsize=(10, 5))</div>
          <div>dendrogram(Z, truncate_mode="lastp", p=30)</div>
          <div>plt.title("Agglomerative Dendrogram")</div>
          <div>plt.ylabel("Ward Merge Distance (Cut Horizontally for K Clusters)")</div>
        </div>
      </section>

      {/* SECTION 12 & 13: DBSCAN & OPTICS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 12 &ndash; 13
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Density-Based Exploration
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          6. DBSCAN &amp; OPTICS: Arbitrary Shapes &amp; Outlier Noise Filtering
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          While K-Means and Ward linkage impose spherical Voronoi partitions, real physical phenomena (e.g. GPS trajectory streams, biological manifolds, and financial fraud rings) exhibit serpentine, non-convex shapes. <strong>DBSCAN</strong> (Density-Based Spatial Clustering of Applications with Noise) groups contiguous high-density regions while classifying isolated sparse points as noise (<code className="font-mono bg-stone-200 px-1 py-0.5 rounded text-[11px]">-1</code>).
        </p>

        {/* 3 Point Classifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase block">1. Core Point</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Contains at least <code className="font-mono bg-white px-1 rounded">min_samples</code> within its &epsilon;-radius:
              <br />
              <code className="font-mono font-bold text-stone-800">|N<sub>&epsilon;</sub>(x)| &ge; min_samples</code>
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-2">
            <span className="text-xs font-mono font-bold text-sky-700 uppercase block">2. Border Point</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Contains fewer than <code className="font-mono bg-white px-1 rounded">min_samples</code>, but falls within the &epsilon;-neighborhood of an existing Core point.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2">
            <span className="text-xs font-mono font-bold text-rose-700 uppercase block">3. Noise Outlier (-1)</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Neither a core point nor density-reachable from any core point. Marked with cluster label <code className="font-mono font-bold text-rose-800">-1</code>.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2 overflow-x-auto">
          <div>from sklearn.cluster import DBSCAN, OPTICS</div>
          <br />
          <div># DBSCAN: Requires fixed eps radius</div>
          <div>dbscan = DBSCAN(eps=0.3, min_samples=5)</div>
          <div>labels = dbscan.fit_predict(X_scaled)</div>
          <div>n_noise = (labels == -1).sum()</div>
          <br />
          <div># OPTICS: Handles multi-density clusters via reachability ordering plots</div>
          <div>optics = OPTICS(min_samples=10, cluster_method="xi", xi=0.05)</div>
          <div>optics_labels = optics.fit_predict(X_scaled)</div>
        </div>
      </section>

      {/* SECTION 15 & 16: GAUSSIAN MIXTURE MODELS & EM */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 15 &ndash; 16
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Probabilistic Soft Clustering
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          7. Gaussian Mixture Models (GMM) &amp; Expectation-Maximization
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          K-Means forces hard binary assignments (customer <em>A</em> belongs 100% to Cluster 1). In contrast, <strong>Gaussian Mixture Models (GMM)</strong> perform soft probabilistic clustering, assuming the data is generated from <em>K</em> underlying Gaussian distributions parameterized by mean &mu;<sub>k</sub>, covariance matrix &Sigma;<sub>k</sub>, and mixture weight &pi;<sub>k</sub>.
        </p>

        {/* EM Cycle Breakdown */}
        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h4 className="font-bold text-stone-900 text-sm">The Expectation-Maximization (EM) Optimization Cycle:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
              <span className="font-mono font-bold text-orange-600 block">E-Step (Expectation)</span>
              <p className="text-stone-600">
                Calculates posterior responsibilities &gamma;<sub>ik</sub> = P(z<sub>i</sub> = k | x<sub>i</sub>) using current Gaussian parameters (soft cluster memberships).
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
              <span className="font-mono font-bold text-sky-600 block">M-Step (Maximization)</span>
              <p className="text-stone-600">
                Updates component means &mu;<sub>k</sub>, covariance matrices &Sigma;<sub>k</sub>, and weights &pi;<sub>k</sub> weighted by responsibilities &gamma;<sub>ik</sub>.
              </p>
            </div>
          </div>
        </div>

        {/* AIC/BIC Model Selection */}
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-2">
          <span className="font-bold font-mono text-stone-900 uppercase block">Model Selection: AIC &amp; BIC</span>
          <p className="leading-relaxed">
            Unlike K-Means (which lacks likelihood metrics), GMM computes exact log-likelihoods penalized by parameter complexity:
            <br />
            <code className="font-mono font-bold text-stone-800">AIC = 2p &minus; 2 ln(L)</code> &bull;{" "}
            <code className="font-mono font-bold text-stone-800">BIC = p &times; ln(N) &minus; 2 ln(L)</code>
            <br />
            The minimum point on the BIC curve determines the optimal component count <em>K</em> without subjective elbow guessing.
          </p>
        </div>
      </section>

      {/* SECTION 20 & 21: ENTERPRISE RFM CUSTOMER SEGMENTATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 20 &ndash; 21
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Enterprise Application
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          8. Production Customer Segmentation via RFM Analysis
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          The premier application of unsupervised clustering across retail, banking, and SaaS is behavioral customer segmentation via the <strong>RFM framework</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Recency (R)</span>
            <h4 className="text-sm font-bold text-stone-900">Days Since Last Order</h4>
            <p className="text-xs text-stone-600">Low values indicate active, engaged customers; high values flag churn risk.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
            <span className="text-xs font-mono font-bold text-sky-600 uppercase">Frequency (F)</span>
            <h4 className="text-sm font-bold text-stone-900">Total Purchase Count</h4>
            <p className="text-xs text-stone-600">High values represent loyal, habitual consumers; low values represent single-shot shoppers.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-600 uppercase">Monetary Value (M)</span>
            <h4 className="text-sm font-bold text-stone-900">Total Lifetime Spend</h4>
            <p className="text-xs text-stone-600">Identifies high-margin VIP enterprise accounts vs price-sensitive discount hunters.</p>
          </div>
        </div>

        {/* Production Pipeline Code */}
        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2 overflow-x-auto">
          <div className="text-stone-400">// End-to-End RFM Segmentation &amp; Profiling Pipeline:</div>
          <div>import pandas as pd, joblib</div>
          <div>from sklearn.pipeline import Pipeline</div>
          <div>from sklearn.preprocessing import StandardScaler</div>
          <div>from sklearn.cluster import KMeans</div>
          <br />
          <div>segmentation_pipeline = Pipeline([</div>
          <div>&nbsp;&nbsp;("scaler", StandardScaler()),</div>
          <div>&nbsp;&nbsp;("kmeans", KMeans(n_clusters=4, init="k-means++", n_init=10, random_state=42))</div>
          <div>])</div>
          <div>df["cluster"] = segmentation_pipeline.fit_predict(df[["recency", "frequency", "monetary"]])</div>
          <br />
          <div># Calculate Persona Centroid Profiles</div>
          <div>profile = df.groupby("cluster")[["recency", "frequency", "monetary"]].mean()</div>
          <div>joblib.dump(segmentation_pipeline, "rfm_segmentation.joblib")</div>
        </div>
      </section>

      {/* SECTION 26: INTERVIEW PREPARATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 26
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Interview Preparation
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          9. Unsupervised Learning &amp; Clustering Interview Q&amp;A
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Technical interview questions frequently asked by FAANG, quantitative trading desks, and growth engineering panels.
        </p>

        <div className="space-y-3 pt-2">
          {[
            {
              q: "Why can't we simply pick the K that minimizes Inertia in K-Means?",
              a: "Because Inertia strictly decreases as K increases, reaching exactly 0 when K equals the number of samples N (each point is its own centroid). Therefore, minimizing Inertia alone selects trivial memorization. Practitioners use the Elbow Method to locate diminishing marginal returns and Silhouette Scores to evaluate cluster separation.",
            },
            {
              q: "Why does K-Means fail on concentric circles or interleaving moons, and what algorithm should be used instead?",
              a: "K-Means relies on Euclidean distance to centroids, creating linear Voronoi partition boundaries that force spherical/convex clusters. For non-linear geometries, density-based algorithms like DBSCAN or graph-based Spectral Clustering must be used because they cluster along high-density manifolds regardless of shape.",
            },
            {
              q: "What is the difference between hard and soft clustering, and how does GMM implement soft clustering?",
              a: "Hard clustering (e.g. K-Means) assigns each sample strictly to one cluster index (0 or 1). Soft clustering assigns a continuous probability distribution across all clusters. Gaussian Mixture Models compute responsibilities γ_ik = P(z_i = k | x_i) using Gaussian probability density functions during the Expectation step.",
            },
            {
              q: "Why are cluster numerical labels (0, 1, 2) completely arbitrary?",
              a: "Unsupervised algorithms optimize mathematical distance without semantic awareness. Cluster 0 in one run with seed=42 could easily be assigned Cluster 2 in another run with seed=10. Business personas ('VIP', 'At-Risk') must always be derived by computing mean feature profiles (groupby('cluster').mean()) after clustering.",
            },
            {
              q: "Can Agglomerative Clustering or DBSCAN predict clusters for new out-of-sample observations?",
              a: "No! Standard implementations in Scikit-learn (AgglomerativeClustering, DBSCAN, OPTICS, SpectralClustering) are transductive: they only cluster the dataset provided at fit time and do not implement predict(). To assign new incoming samples, one must train an auxiliary nearest-neighbor classifier or use inductive models like K-Means and GMM.",
            },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <h4 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-orange-600 font-mono font-bold shrink-0">Q{idx + 1}.</span>
                <span>{item.q}</span>
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 pl-6 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
