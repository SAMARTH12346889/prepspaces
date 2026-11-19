import React from "react";
import {
  Sparkles,
  Layers,
  TrendingDown,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Zap,
  Code,
  CheckCircle2,
  AlertTriangle,
  Compass,
  Database,
  BarChart2,
  Box,
  Eye,
  Activity,
  Sliders,
  Maximize2,
  Target,
  FileCode,
  FolderGit2,
} from "lucide-react";

export default function MachineLearningDimensionalityReductionSections() {
  return (
    <div className="space-y-8">
      {/* SECTION 1: HIGH-DIMENSIONAL DATASETS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 01
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Geometric Foundations
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          1. High-Dimensional Datasets &amp; The Feature Space
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          In machine learning, a <strong>dimension</strong> represents an individual feature or measurable variable in a dataset. When an entity is represented by <em>p</em> measurements, it exists as a coordinate point in a <em>p</em>-dimensional Euclidean space: x = [x<sub>1</sub>, x<sub>2</sub>, &hellip;, x<sub>p</sub>]<sup>T</sup> &isin; &reals;<sup>p</sup>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <Box size={16} className="text-orange-600" />
              Low vs. High Dimensionality
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Standard tabular benchmarks may contain 10&ndash;30 attributes. However, real-world systems deal with massive dimensions: customer event clickstreams (100&ndash;1,000), genomics gene expression (10,000&ndash;40,000), TF-IDF or bag-of-words text vocabularies (50,000&ndash;500,000), and raw image pixel intensities.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <Activity size={16} className="text-orange-600" />
              Image Feature Vector Scale
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              A modest 100 &times; 100 grayscale photo represents a 10,000-dimensional vector. For full RGB color, 100 &times; 100 &times; 3 = 30,000 dimensions. Without representation compression, algorithms waste computational resources processing correlated and uninformative pixel noise.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
          <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>The Core Objective:</strong> Dimensionality reduction is not merely deleting columns. It transforms raw observation coordinates into a compact latent representation that preserves maximal statistical variance, topological neighborhood structures, or class separability.
          </div>
        </div>
      </section>

      {/* SECTION 2: CURSE OF DIMENSIONALITY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 02
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Geometric Pitfalls
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          2. The Curse of Dimensionality
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Coined by Richard Bellman in 1957, the <strong>Curse of Dimensionality</strong> describes the counter-intuitive geometric and statistical anomalies that emerge when the number of features <em>p</em> grows large relative to sample size <em>N</em>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">1. Exponential Sparsity</span>
            <h3 className="font-bold text-stone-900 text-sm">Empty Hypercubes</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              To partition a unit hypercube with 10 bins per dimension: <em>d</em>=1 requires 10 bins; <em>d</em>=2 needs 100; <em>d</em>=10 needs 10<sup>10</sup> = 10,000,000,000 bins. Observations become isolated islands in a vast vacuum.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">2. Distance Concentration</span>
            <h3 className="font-bold text-stone-900 text-sm">Equidistant Neighbors</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              As <em>d</em> &rarr; &infin;, the relative contrast (D<sub>max</sub> &minus; D<sub>min</sub>) / D<sub>min</sub> &rarr; 0. Every point becomes roughly equidistant from all others, rendering distance metrics in KNN, K-Means, and DBSCAN meaningless.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">3. Overfitting Explosion</span>
            <h3 className="font-bold text-stone-900 text-sm">Spurious Collinearity</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              When <em>p</em> &gt; <em>N</em>, models easily fit random sample noise. The parameter estimation space is ill-conditioned, leading to near-zero training loss but catastrophic generalization error on unseen test data.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-1">
          <div className="text-stone-400"># Mathematical proof of volume concentration in the hypersphere shell:</div>
          <div>{'Ratio = 1 - (1 - epsilon)**d'}</div>
          <div className="text-stone-400"># For epsilon = 0.05 (outer 5% crust) and d = 100:</div>
          <div className="text-emerald-400">{'Ratio = 1 - (0.95)**100 = 0.9941 (99.4% of total volume lies in the thin outer shell!)'}</div>
        </div>
      </section>

      {/* SECTION 3: FEATURE SELECTION VS FEATURE EXTRACTION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 03
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Architectural Paradigms
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          3. Feature Selection vs. Feature Extraction
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Dimensionality reduction algorithms operate via two distinct philosophies: selecting an informative subset of existing attributes, or projecting into an entirely new compressed feature subspace.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 text-stone-500 font-mono text-xs uppercase bg-stone-50">
                <th className="p-3">Dimension</th>
                <th className="p-3">Feature Selection</th>
                <th className="p-3">Feature Extraction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr>
                <td className="p-3 font-bold text-stone-900">Transformation</td>
                <td className="p-3 text-stone-600">Retains original subset of features X<sub>j</sub>, discards others</td>
                <td className="p-3 text-stone-600">Creates new synthetic features Z = f(X)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Interpretability</td>
                <td className="p-3 text-emerald-700 font-semibold">High &mdash; retains real-world column names and units</td>
                <td className="p-3 text-amber-700 font-semibold">Lower &mdash; components are composite linear/nonlinear blends</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Information Loss</td>
                <td className="p-3 text-stone-600">Discards 100% of information in dropped columns</td>
                <td className="p-3 text-stone-600">Preserves global variance or topology across all original columns</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Core Algorithms</td>
                <td className="p-3 text-stone-600">Filter (ANOVA, Chi2, Mutual Info), Wrapper (RFE), Embedded (Lasso)</td>
                <td className="p-3 text-stone-600">PCA, Kernel PCA, LDA, ICA, t-SNE, UMAP, Autoencoders</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4: VARIANCE & COVARIANCE MATRIX */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 04
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Statistical Mathematics
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          4. Variance, Covariance &amp; The Covariance Matrix
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Before performing matrix factorization, we quantify how individual features disperse and co-vary. For <em>N</em> samples and <em>p</em> features centered to mean zero:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">Sample Variance &amp; Covariance</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Variance measures single-variable spread: s<sub>X</sub><sup>2</sup> = (1 / (N &minus; 1)) &Sigma; (x<sub>i</sub> &minus; x&#772;)<sup>2</sup>. Covariance measures mutual linear association:
            </p>
            <div className="p-2.5 bg-white rounded-xl border border-stone-200 font-mono text-xs text-stone-800 text-center">
              Cov(X, Y) = (1 / (N &minus; 1)) &Sigma; (x<sub>i</sub> &minus; x&#772;)(y<sub>i</sub> &minus; y&#772;)
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">The <em>p &times; p</em> Covariance Matrix &Sigma;</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              For a centered data matrix X &isin; &reals;<sup>N &times; p</sup>, the sample covariance matrix is symmetric and positive semi-definite:
            </p>
            <div className="p-2.5 bg-white rounded-xl border border-stone-200 font-mono text-xs text-stone-800 text-center">
              &Sigma; = (1 / (N &minus; 1)) X<sup>T</sup> X
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRINCIPAL COMPONENT ANALYSIS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 05
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Core Algorithm
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          5. Principal Component Analysis (PCA) &mdash; Mathematical Derivation
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          PCA finds an orthogonal coordinate system where the first principal axis w<sub>1</sub> maximizes projected variance, the second axis w<sub>2</sub> maximizes remaining variance orthogonal to w<sub>1</sub>, and so on.
        </p>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h3 className="font-bold text-stone-900 text-sm">Lagrangian Constrained Optimization</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            The variance of the projected data z<sub>1</sub> = Xw<sub>1</sub> is w<sub>1</sub><sup>T</sup> &Sigma; w<sub>1</sub>. We enforce unit norm ||w<sub>1</sub>||<sup>2</sup> = w<sub>1</sub><sup>T</sup> w<sub>1</sub> = 1 using a Lagrange multiplier &lambda;:
          </p>
          <div className="p-3 bg-white rounded-xl border border-stone-200 font-mono text-xs text-center text-stone-900">
            L(w<sub>1</sub>, &lambda;<sub>1</sub>) = w<sub>1</sub><sup>T</sup> &Sigma; w<sub>1</sub> &minus; &lambda;<sub>1</sub>(w<sub>1</sub><sup>T</sup> w<sub>1</sub> &minus; 1)
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Differentiating with respect to w<sub>1</sub> and setting to zero yields the fundamental eigenvalue equation:
          </p>
          <div className="p-3 bg-stone-900 rounded-xl text-emerald-400 font-mono text-xs text-center">
            &Sigma; w<sub>1</sub> = &lambda;<sub>1</sub> w<sub>1</sub>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Hence, w<sub>1</sub> is an <strong>eigenvector</strong> of the covariance matrix &Sigma;, and &lambda;<sub>1</sub> = w<sub>1</sub><sup>T</sup> &Sigma; w<sub>1</sub> is its corresponding <strong>eigenvalue</strong>, representing the exact variance along that component.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Explained Variance Ratio (EVR)</span>
            <div className="font-mono text-xs text-stone-800">
              EVR<sub>k</sub> = &lambda;<sub>k</sub> / (&Sigma;<sub>j=1</sub><sup>p</sup> &lambda;<sub>j</sub>)
            </div>
            <p className="text-xs text-stone-600">
              Measures the proportion of total information retained by component <em>k</em>.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Projection into Subspace</span>
            <div className="font-mono text-xs text-stone-800">
              Z<sub>N &times; k</sub> = X<sub>centered</sub> W<sub>p &times; k</sub>
            </div>
            <p className="text-xs text-stone-600">
              Transforms original <em>p</em>-dimensional observations into a compressed <em>k</em>-dimensional matrix.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: SCIKIT-LEARN PCA & SVD */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 06
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Code Implementation
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          6. Scikit-learn PCA &amp; SVD Factorization
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Rather than computing the <em>p &times; p</em> covariance matrix explicitly (which is O(Np<sup>2</sup> + p<sup>3</sup>)), modern implementations perform <strong>Singular Value Decomposition (SVD)</strong> directly on centered data: X = U &Sigma; V<sup>T</sup>. The right singular vectors V are identical to the covariance eigenvectors.
        </p>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2 overflow-x-auto">
          <div>from sklearn.datasets import load_wine</div>
          <div>from sklearn.preprocessing import StandardScaler</div>
          <div>from sklearn.decomposition import PCA</div>
          <div>import numpy as np</div>
          <br />
          <div>X, y = load_wine(return_X_y=True)</div>
          <div>X_scaled = StandardScaler().fit_transform(X)</div>
          <br />
          <div className="text-stone-400"># Fit PCA retaining 95% cumulative variance</div>
          <div>pca = PCA(n_components=0.95, svd_solver="full")</div>
          <div>X_reduced = pca.fit_transform(X_scaled)</div>
          <br />
          <div>{'print(f"Original features: {X.shape[1]} -> Retained components: {pca.n_components_}")'}</div>
          <div>{'print(f"Individual EVR: {pca.explained_variance_ratio_.round(3)}")'}</div>
          <div>{'print(f"Cumulative Variance: {np.sum(pca.explained_variance_ratio_):.3f}")'}</div>
        </div>
      </section>

      {/* SECTION 7: KERNEL PCA */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 07
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Nonlinear Manifolds
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          7. Kernel PCA &amp; The Kernel Trick
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Standard PCA is limited to linear hyperplanes. If the data lies on a curved manifold (e.g. concentric circles or swiss rolls), linear projection collapses separate clusters. <strong>Kernel PCA</strong> uses Mercer kernels to map data implicitly into a high-dimensional reproducing kernel Hilbert space &Phi;(x) where linear PCA is performed without explicit coordinate calculation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="font-bold text-xs text-stone-900 block mb-1">RBF (Gaussian) Kernel</span>
            <div className="font-mono text-[11px] text-orange-600">
              K(x, z) = exp(&minus;&gamma; ||x &minus; z||<sup>2</sup>)
            </div>
            <p className="text-[11px] text-stone-600 mt-1">Excellent for concentric rings, complex topological clusters.</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="font-bold text-xs text-stone-900 block mb-1">Polynomial Kernel</span>
            <div className="font-mono text-[11px] text-orange-600">
              K(x, z) = (&gamma; x<sup>T</sup> z + c)<sup>d</sup>
            </div>
            <p className="text-[11px] text-stone-600 mt-1">Models degree-<em>d</em> polynomial interaction surfaces.</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="font-bold text-xs text-stone-900 block mb-1">Cosine Kernel</span>
            <div className="font-mono text-[11px] text-orange-600">
              K(x, z) = (x<sup>T</sup> z) / (||x|| ||z||)
            </div>
            <p className="text-[11px] text-stone-600 mt-1">Normalizes vector length; ideal for high-dimensional text.</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-1">
          <div>from sklearn.decomposition import KernelPCA</div>
          <div>from sklearn.datasets import make_circles</div>
          <br />
          <div>X_circ, y_circ = make_circles(n_samples=500, factor=0.3, noise=0.05, random_state=42)</div>
          <div>kpca = KernelPCA(n_components=2, kernel="rbf", gamma=10, fit_inverse_transform=True)</div>
          <div>X_kpca = kpca.fit_transform(X_circ)</div>
        </div>
      </section>

      {/* SECTION 8: LINEAR DISCRIMINANT ANALYSIS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 08
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Supervised Reduction
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          8. Linear Discriminant Analysis (LDA)
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          While PCA is completely unsupervised (maximizing variance regardless of class identities), <strong>LDA</strong> is a supervised dimensionality reduction technique designed specifically to maximize class separation using Fisher's criterion:
        </p>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <div className="font-mono text-xs text-center text-stone-900 font-bold">
            J(w) = (w<sup>T</sup> S<sub>B</sub> w) / (w<sup>T</sup> S<sub>W</sub> w)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
            <div>
              <strong>Between-Class Scatter S<sub>B</sub>:</strong> Measures dispersion between class centroids &mu;<sub>c</sub> and overall mean &mu;:
              <div className="font-mono mt-1 text-[11px]">S<sub>B</sub> = &Sigma;<sub>c=1</sub><sup>C</sup> N<sub>c</sub> (&mu;<sub>c</sub> &minus; &mu;)(&mu;<sub>c</sub> &minus; &mu;)<sup>T</sup></div>
            </div>
            <div>
              <strong>Within-Class Scatter S<sub>W</sub>:</strong> Measures internal spread within each class:
              <div className="font-mono mt-1 text-[11px]">S<sub>W</sub> = &Sigma;<sub>c=1</sub><sup>C</sup> &Sigma;<sub>x &isin; D<sub>c</sub></sub> (x &minus; &mu;<sub>c</sub>)(x &minus; &mu;<sub>c</sub>)<sup>T</sup></div>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-900">
          <strong>Fundamental Rank Limitation:</strong> Because the <em>C</em> centered class mean vectors satisfy &Sigma; N<sub>c</sub>(&mu;<sub>c</sub> &minus; &mu;) = 0, the rank of S<sub>B</sub> is at most <em>C &minus; 1</em>. Consequently, standard LDA can extract at most <em>C &minus; 1</em> discriminant components, regardless of how many original features exist (e.g., 3 classes can yield at most 2 LDA components).
        </div>
      </section>

      {/* SECTION 9: INDEPENDENT COMPONENT ANALYSIS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 09
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Blind Source Separation
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          9. Independent Component Analysis (ICA) &amp; FastICA
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          PCA creates <em>uncorrelated</em> components; <strong>ICA</strong> discovers <em>statistically independent</em> source signals. This is famously illustrated by the <strong>Cocktail Party Problem</strong>, where multiple microphones record linear mixtures of independent speakers:
        </p>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
          <div className="font-mono text-xs text-center text-stone-900">
            X = A S &rArr; S&#770; = W X
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Where <em>S</em> are true independent sources, <em>A</em> is the unknown mixing matrix, and <em>W</em> is the learned unmixing matrix. By the Central Limit Theorem, a sum of independent random variables is more Gaussian than the individual components. Therefore, FastICA recovers <em>S</em> by <strong>maximizing non-Gaussianity</strong> (via kurtosis or negentropy).
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-stone-100 border border-stone-300 text-xs text-stone-700">
          <strong>Identifiability Constraints:</strong> At most one source signal can be Gaussian; the original scale, amplitude, and exact ordering of components cannot be deterministically resolved (inherent sign/permutation ambiguity).
        </div>
      </section>

      {/* SECTION 10: T-SNE */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 10
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Neighborhood Embeddings
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          10. t-SNE (t-Distributed Stochastic Neighbor Embedding)
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          t-SNE (van der Maaten &amp; Hinton, 2008) converts Euclidean distances between data points into conditional probabilities that represent similarities. It optimizes the positions of points in 2D or 3D space by minimizing the <strong>Kullback&ndash;Leibler (KL) divergence</strong> between high-dimensional distribution <em>P</em> and low-dimensional distribution <em>Q</em>:
        </p>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
          <div className="font-mono text-xs text-center text-stone-900">
            KL(P || Q) = &Sigma;<sub>i &ne; j</sub> p<sub>ij</sub> log(p<sub>ij</sub> / q<sub>ij</sub>)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-700 pt-2">
            <div>
              <strong>High-Dim Similarity p<sub>ij</sub>:</strong> Gaussian distribution centered at x<sub>i</sub> with variance &sigma;<sub>i</sub> calibrated by target <strong>perplexity</strong>.
            </div>
            <div>
              <strong>Low-Dim Similarity q<sub>ij</sub>:</strong> Heavy-tailed Student&rsquo;s t-distribution (df=1): q<sub>ij</sub> &prop; (1 + ||y<sub>i</sub> &minus; y<sub>j</sub>||<sup>2</sup>)<sup>&minus;1</sup>.
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
          <strong>The Crowding Problem &amp; Global Distance Trap:</strong> The volume of a sphere in <em>d</em> dimensions scales exponentially, whereas 2D space runs out of room. The heavy tails of the Student-t distribution allow moderate high-dimensional distances to push apart in 2D without producing excessive repulsive forces. <em>Crucially:</em> Distances between separate clusters in a t-SNE plot have no quantitative meaning!
        </div>
      </section>

      {/* SECTION 11: UMAP */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 11
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Topological Manifolds
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          11. UMAP (Uniform Manifold Approximation and Projection)
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Introduced by McInnes et al. (2018), UMAP is grounded in Riemannian geometry and algebraic topology. It assumes data lies uniformly distributed on a local manifold and constructs a fuzzy simplicial set graph before optimizing a low-dimensional layout using cross-entropy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600 block">n_neighbors</span>
            <p className="text-xs text-stone-600 mt-1">Controls local vs. global focus (typical 5&ndash;50). Higher values preserve macro cluster arrangements.</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600 block">min_dist</span>
            <p className="text-xs text-stone-600 mt-1">Minimum distance between embedded points (typical 0.05&ndash;0.5). Lower values pack tight clusters.</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600 block">metric</span>
            <p className="text-xs text-stone-600 mt-1">Distance metric (Euclidean, Cosine, Manhattan, Correlation, Hamming).</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-emerald-600 block">transform()</span>
            <p className="text-xs text-stone-600 mt-1">Unlike standard t-SNE, fitted UMAP models can project new, previously unseen test points.</p>
          </div>
        </div>
      </section>

      {/* SECTION 12: VISUALIZATION PARADIGMS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 12
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Exploratory Data Analysis
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          12. High-Dimensional Visualization Paradigms
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Choosing the right visualization projection depends on what structural aspect you want to highlight:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">PCA (Global Variance)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Best for initial exploratory baselines. Axes represent interpretable linear feature loadings. Preserves global Euclidean distance between disparate observation clusters.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">t-SNE (Fine Local Substructures)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Superb at identifying isolated sub-populations and fine clusters in image embeddings (e.g. MNIST digits). Non-convex objective means runs with different random seeds look rotated.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">UMAP (Balanced Local + Global)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Significantly faster runtime on large datasets (<em>N</em> &gt; 50,000). Better preservation of inter-cluster trajectories and global continuum relationships than t-SNE.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 13: 6 PRACTICAL EMPIRICAL EXPERIMENTS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 13
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Empirical Labs
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          13. Six Practical Dimensionality Reduction Experiments
        </h2>

        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600">Experiment 1: Wine Dataset PCA</span>
            <p className="text-xs text-stone-700 mt-1">Standardize 13 chemical features, compute cumulative variance curve, and verify that 5 components preserve &gt; 95% total variance.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600">Experiment 2: Unsupervised PCA vs. Supervised LDA</span>
            <p className="text-xs text-stone-700 mt-1">Contrast 2D projection scatter plots. Observe how LDA utilizes wine cultivar target labels to maximize between-class margin.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600">Experiment 3: Kernel PCA on Concentric Rings</span>
            <p className="text-xs text-stone-700 mt-1">Synthesize nonlinearly intertwined circles with make_circles. Demonstrate that linear PCA fails while RBF Kernel PCA cleanly separates the classes.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600">Experiment 4: FastICA Blind Signal Separation</span>
            <p className="text-xs text-stone-700 mt-1">Mix sine waves, sawteeth, and random audio noise through a 3 &times; 3 matrix; unmix with FastICA and reconstruct original waveforms.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600">Experiment 5: MNIST Digits Embedding (t-SNE vs. UMAP)</span>
            <p className="text-xs text-stone-700 mt-1">Embed 1,797 64-dimensional handwritten digits into 2D; evaluate perplexity sensitivity and compare execution times.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600">Experiment 6: Leakage-Free Classification Pipeline</span>
            <p className="text-xs text-stone-700 mt-1">Embed PCA(n_components=5) inside a Scikit-learn Pipeline with LogisticRegression, demonstrating identical test-set accuracy with 60% fewer features.</p>
          </div>
        </div>
      </section>

      {/* SECTION 14: ALGORITHM DECISION MATRIX */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 14
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            System Design
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          14. The Dimensionality Reduction Decision Matrix
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-stone-200 font-mono uppercase bg-stone-50 text-stone-600">
                <th className="p-3">Algorithm</th>
                <th className="p-3">Type</th>
                <th className="p-3">Mathematical Goal</th>
                <th className="p-3">Best Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="p-3 font-bold text-stone-900">PCA</td>
                <td className="p-3">Unsupervised</td>
                <td className="p-3">Max variance (Orthogonal eigenvectors)</td>
                <td className="p-3">Multicollinear tabular data, feature compression, baseline model speedup</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Kernel PCA</td>
                <td className="p-3">Unsupervised</td>
                <td className="p-3">Nonlinear kernel trick projection</td>
                <td className="p-3">Complex non-linear manifold geometry in moderate sample sizes</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">LDA</td>
                <td className="p-3">Supervised</td>
                <td className="p-3">Maximize Fisher's Criterion (Between/Within scatter)</td>
                <td className="p-3">Classification preprocessing when target labels are available (&le; C &minus; 1 components)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">ICA</td>
                <td className="p-3">Unsupervised</td>
                <td className="p-3">Maximize statistical independence (Non-Gaussianity)</td>
                <td className="p-3">EEG biomedical signals, audio unmixing, telecommunications</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">t-SNE</td>
                <td className="p-3">Unsupervised</td>
                <td className="p-3">Minimize KL divergence of neighborhood probabilities</td>
                <td className="p-3">2D/3D visual exploratory analysis of image embeddings &amp; high-dim clusters</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">UMAP</td>
                <td className="p-3">Unsupervised</td>
                <td className="p-3">Fuzzy simplicial set cross-entropy</td>
                <td className="p-3">Large-scale 2D/3D visualization and fast non-linear feature preprocessing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 15: PRODUCTION CONSIDERATIONS & DATA LEAKAGE */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 15
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Production Best Practices
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          15. Production Engineering &amp; Preventing Preprocessing Leakage
        </h2>

        <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
          <h3 className="font-bold text-rose-900 text-sm flex items-center gap-2">
            <AlertTriangle size={16} className="text-rose-600" />
            The Fatal Data Leakage Bug
          </h3>
          <p className="text-xs text-rose-800 leading-relaxed">
            <strong>Wrong Workflow:</strong> Calling <code>StandardScaler().fit_transform(X)</code> and <code>PCA().fit_transform(X)</code> on the entire dataset prior to <code>train_test_split</code>. The computed means, variances, and principal component axes encode the test set observations, leaking information and invalidating validation performance.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-1">
          <div className="text-stone-400"># Correct, Leak-Free Scikit-learn Production Pipeline</div>
          <div>from sklearn.pipeline import make_pipeline</div>
          <div>from sklearn.impute import SimpleImputer</div>
          <div>from sklearn.preprocessing import StandardScaler</div>
          <div>from sklearn.decomposition import PCA</div>
          <div>from sklearn.linear_model import LogisticRegression</div>
          <br />
          <div>production_pipeline = make_pipeline(</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;SimpleImputer(strategy="median"),</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;StandardScaler(),</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;PCA(n_components=0.95),&nbsp;&nbsp;<span className="text-stone-400"># Fit strictly on X_train only</span></div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;LogisticRegression(max_iter=1000)</div>
          <div>)</div>
          <br />
          <div>production_pipeline.fit(X_train, y_train)</div>
          <div>test_score = production_pipeline.score(X_test, y_test)</div>
        </div>
      </section>

      {/* SECTION 16: REAL-WORLD APPLICATIONS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 16
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Industrial Case Studies
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          16. Real-World Applications in Modern AI Systems
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">Computer Vision &amp; Eigenfaces</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Early face recognition algorithms projected pixel arrays onto the top 100 eigenvectors (known as <em>Eigenfaces</em>). This enabled high-speed facial matching by comparing compact 100D coefficient vectors rather than 100,000 raw pixels.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">Genomics &amp; Single-Cell RNA Sequencing</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              scRNA-seq profiles 20,000+ genes across thousands of cells. Researchers use PCA to remove low-variance technical noise followed by UMAP to cluster and visualize developmental cellular lineages and rare cell types.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">Quantitative Finance &amp; Factor Models</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Asset managers decompose returns across 500 equities. PC1 typically captures broad market risk (beta), PC2 captures industry sector rotations, and PC3 captures interest rate sensitivity, drastically reducing risk covariance matrix instability.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">LLM Vector Search &amp; RAG Indexing</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Modern embedding models output 1536D or 3072D representations. PCA or Matryoshka representation learning trims embeddings to 512D or 256D with &lt; 1.5% retrieval degradation, cutting vector database memory and latency by up to 75%.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 17: ASSESSMENT QUESTIONS & MODEL ANSWERS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 17
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Technical Assessments
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          17. Module Assessment &amp; Advanced Interview Questions
        </h2>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">
              Q1: Can PCA remove critical predictive information even when retaining 95% of total variance?
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Answer:</strong> Absolutely. PCA is completely unsupervised; it only knows about feature variance, not target correlation. If the distinguishing signal between class A and class B happens to lie along a direction with low variance (e.g. accounting for only 2% of total variance), PCA will discard it as noise while preserving high-variance irrelevant features.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">
              Q2: Why can outliers heavily distort Principal Component axes?
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Answer:</strong> PCA relies on the covariance matrix, where deviations from the mean are squared: (x<sub>i</sub> &minus; x&#772;)<sup>2</sup>. A single distant extreme outlier exerts tremendous leverage on the sample covariance calculation, pulling the leading eigenvector toward the outlier rather than the true underlying data manifold.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">
              Q3: Why can't standard t-SNE be used directly in an inference pipeline with <code>transform()</code>?
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Answer:</strong> Standard t-SNE does not learn an explicit parametric projection matrix W or mathematical mapping function f(x). Instead, it runs gradient descent directly on the 2D coordinates of the training observations. Embedding a new single query point would require re-running the global optimization across all <em>N + 1</em> points.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 18: CAPSTONE PROJECT */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 18
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Module Capstone
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          18. Capstone Project: High-Dimensional Data Exploration System
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Execute an enterprise 6-phase comparative dimensionality reduction benchmark using a real-world multi-feature dataset (e.g. Scikit-learn Wine, Digits, or Breast Cancer):
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
            <span className="text-xs font-mono font-bold text-orange-600">Phase 1: EDA &amp; Sparsity</span>
            <p className="text-xs text-stone-600">Analyze feature distributions, pairwise correlation matrices, and verify feature scales.</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
            <span className="text-xs font-mono font-bold text-orange-600">Phase 2: Leak-Free Preprocessing</span>
            <p className="text-xs text-stone-600">Build Scikit-learn Pipeline with median imputation and StandardScaler fit strictly on training splits.</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
            <span className="text-xs font-mono font-bold text-orange-600">Phase 3: Multi-Algorithm Reduction</span>
            <p className="text-xs text-stone-600">Apply PCA, Kernel PCA, LDA, and UMAP. Generate scree plots and identify the 95% variance threshold.</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
            <span className="text-xs font-mono font-bold text-orange-600">Phase 4: Comparative 2D Visuals</span>
            <p className="text-xs text-stone-600">Plot 2D projections side-by-side with class color coding; evaluate cluster separability.</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
            <span className="text-xs font-mono font-bold text-orange-600">Phase 5: Downstream Model Benchmarks</span>
            <p className="text-xs text-stone-600">Compare Logistic Regression and Random Forest test accuracy and inference latency across representations.</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
            <span className="text-xs font-mono font-bold text-orange-600">Phase 6: Production Engineering Report</span>
            <p className="text-xs text-stone-600">Synthesize trade-offs between information preservation, speedup, and interpretability.</p>
          </div>
        </div>
      </section>

      {/* SECTION 19: MASTERY CHECKLIST */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 19
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Core Competencies
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          19. Module 16 Dimensionality Reduction Mastery Checklist
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-700">
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Curse of dimensionality &amp; distance concentration intuition</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Feature selection vs. feature extraction architectural trade-offs</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Variance, covariance, and covariance matrix mathematical properties</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>PCA Lagrangian derivation, eigenvectors, and eigenvalues</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Explained Variance Ratio (EVR) and Scree plot elbow selection</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Kernel PCA, RBF kernel trick, and nonlinear manifold unwrapping</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Linear Discriminant Analysis (LDA), Fisher criterion, and C &minus; 1 ceiling</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Independent Component Analysis (ICA) &amp; FastICA non-Gaussianity</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>t-SNE heavy-tailed Student-t divergence and perplexity tuning</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>UMAP Riemannian fuzzy graphs, min_dist, and transform inference</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Preventing data leakage via Scikit-learn Pipeline containment</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Real-world applications in Vision, Genomics, Finance, and Vector Search</span>
          </div>
        </div>
      </section>
    </div>
  );
}
