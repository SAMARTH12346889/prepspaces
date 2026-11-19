import React from "react";
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Activity,
  Sliders,
  TrendingUp,
  Target,
  FileCode,
  Table,
  Zap,
  GitBranch,
  ShieldCheck,
  Compass,
  Cpu,
  BarChart2,
  Check,
  HelpCircle,
  Eye,
  Maximize2,
  Minimize2,
  Hash,
  Binary,
  Compass as CompassIcon,
  Search,
} from "lucide-react";

export default function MachineLearningKNNNaiveBayesSections() {
  return (
    <div className="space-y-12">
      {/* SECTION 1: INTRODUCTION TO INSTANCE-BASED LEARNING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 01
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Foundational Paradigms</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          1. Introduction to Instance-Based Learning
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Instance-Based Learning is a fundamentally distinct machine learning paradigm where the algorithm learns by storing training observations and comparing new query samples with previously observed instances. Rather than constructing an explicit, generalized parametric model during training, computation is deferred until inference time. Because training is virtually instantaneous while prediction requires active comparison, it is famously known as <strong>lazy learning</strong>.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
            <h3 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
              <CompassIcon size={16} className="text-orange-600" />
              Instance-Based Learning (Lazy Learning)
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              <strong>Core Mechanism:</strong> Stores the raw training dataset. When predicting a new instance, it evaluates pairwise distances or similarities to locate the closest historical points.<br />
              <strong>Primary Examples:</strong> K-Nearest Neighbors (KNN), Radius Neighbors, Locally Weighted Regression.
            </p>
          </div>

          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
            <h3 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
              <Cpu size={16} className="text-emerald-600" />
              Model-Based Learning (Eager Learning)
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              <strong>Core Mechanism:</strong> Optimizes an explicit mathematical function (e.g., hyperplane weights w, decision trees, or Gaussian distributions) during training. Raw data can be discarded after training.<br />
              <strong>Primary Examples:</strong> Linear Regression, Logistic Regression, Decision Trees, SVM, Naive Bayes.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50">
                <th className="p-3 font-mono font-bold text-stone-700">Characteristic</th>
                <th className="p-3 font-mono font-bold text-stone-700">Instance-Based (KNN)</th>
                <th className="p-3 font-mono font-bold text-stone-700">Model-Based (e.g., Logistic Regression / Naive Bayes)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-600">
              <tr>
                <td className="p-3 font-bold text-stone-900">Training Time</td>
                <td className="p-3 text-emerald-700 font-bold">O(1) &mdash; Instantaneous (memorizes data)</td>
                <td className="p-3 text-amber-700 font-bold">O(N &middot; D &middot; iterations) &mdash; Computes parameters</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Inference (Prediction) Time</td>
                <td className="p-3 text-rose-700 font-bold">O(N &middot; D) &mdash; Expensive distance search</td>
                <td className="p-3 text-emerald-700 font-bold">O(D) &mdash; Fast dot product / distribution evaluation</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Memory Footprint</td>
                <td className="p-3 text-rose-700">High &mdash; Must persist complete dataset in RAM</td>
                <td className="p-3 text-emerald-700">Low &mdash; Stores only fixed weights or parameters</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Decision Geometry</td>
                <td className="p-3">Locally non-linear Voronoi tessellations</td>
                <td className="p-3">Global parametric linear or probabilistic boundaries</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 2 & 3: KNN & DISTANCE METRICS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 02 &amp; 03
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Algorithm Architecture &amp; Similarity</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          2 &amp; 3. K-Nearest Neighbors (KNN) &amp; Distance Metrics
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          K-Nearest Neighbors is a non-parametric supervised algorithm. Given an unseen query instance <code>x<sub>q</sub></code>, KNN computes the distance to all training samples, sorts the distances, extracts the <strong>K</strong> smallest entries, and pools their targets via <strong>majority voting</strong> (classification) or <strong>averaging</strong> (regression).
        </p>

        {/* 7-Step Workflow */}
        <div className="mt-6 bg-[#1c1917] rounded-2xl p-6 text-stone-100 font-mono text-xs">
          <div className="text-orange-400 font-bold mb-3 uppercase tracking-wider text-[11px]">
            # KNN 7-Step Operational Pipeline
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-stone-300">
            <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
              <span className="text-orange-400 font-bold block mb-1">1. Scale Features</span>
              Mandatory standardization (&mu;=0, &sigma;=1)
            </div>
            <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
              <span className="text-orange-400 font-bold block mb-1">2. Compute Distance</span>
              Compute metric d(x<sub>q</sub>, x<sub>i</sub>) across all N
            </div>
            <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
              <span className="text-orange-400 font-bold block mb-1">3. Extract Top K</span>
              Sort and isolate the K smallest distances
            </div>
            <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
              <span className="text-orange-400 font-bold block mb-1">4. Aggregate Target</span>
              Vote mode (class) or average (regression)
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4, 5 & 6: EUCLIDEAN, MANHATTAN, MINKOWSKI */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 04 &ndash; 06
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Distance Formulations</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          4 &ndash; 6. Distance Metrics: Euclidean, Manhattan &amp; Minkowski
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          The geometric definition of "nearness" dictates which instances become neighbors. The Minkowski distance metric unifies Euclidean and Manhattan metrics through the parameter <strong>p</strong>.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs">
            <span className="text-stone-400 uppercase block mb-1">Manhattan (L1 / p = 1)</span>
            <span className="text-sm font-bold text-stone-900 font-sans block mb-2">d(x, z) = &Sigma; |xᵢ - zᵢ|</span>
            <p className="text-stone-600 font-sans text-[11px] leading-relaxed">
              Measures movement along orthogonal grid axes. More robust to extreme isolated outliers than Euclidean distance.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200 font-mono text-xs">
            <span className="text-orange-700 uppercase block mb-1">Euclidean (L2 / p = 2)</span>
            <span className="text-sm font-bold text-orange-950 font-sans block mb-2">d(x, z) = &radic;(&Sigma; (xᵢ - zᵢ)&sup2;)</span>
            <p className="text-stone-600 font-sans text-[11px] leading-relaxed">
              Standard straight-line geometric distance. Heavily penalizes large coordinate discrepancies due to squaring.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs">
            <span className="text-stone-400 uppercase block mb-1">Minkowski (Generalized L_p)</span>
            <span className="text-sm font-bold text-stone-900 font-sans block mb-2">d(x, z) = (&Sigma; |xᵢ - zᵢ|ᵖ)<sup>1/p</sup></span>
            <p className="text-stone-600 font-sans text-[11px] leading-relaxed">
              Flexible parameter: p=1 yields Manhattan; p=2 yields Euclidean; as p &rarr; &infin;, it approaches Chebyshev distance max|xᵢ - zᵢ|.
            </p>
          </div>
        </div>

        {/* Worked Numerical Example */}
        <div className="mt-6 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-2">
          <h4 className="font-bold text-stone-900">Concrete Calculation: A = (2, 3), B = (5, 7)</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-stone-800">
            <div className="bg-white p-3 rounded-lg border border-stone-200">
              <strong>Euclidean Distance (p=2):</strong><br />
              &radic;((5 - 2)&sup2; + (7 - 3)&sup2;) = &radic;(3&sup2; + 4&sup2;) = &radic;(9 + 16) = <strong>5.0</strong>
            </div>
            <div className="bg-white p-3 rounded-lg border border-stone-200">
              <strong>Manhattan Distance (p=1):</strong><br />
              |5 - 2| + |7 - 3| = 3 + 4 = <strong>7.0</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CHOOSING THE OPTIMAL K */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 07
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Hyperparameter Tuning</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          7. Optimal K Selection &amp; The Bias-Variance Trade-off
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          The parameter <strong>K</strong> is the principal complexity knob in KNN. Contrary to parametric models where complexity scales with parameter count, in KNN <strong>smaller K means higher model complexity</strong> (lower bias, higher variance).
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50">
                <th className="p-3 font-mono font-bold text-stone-700">K Setting</th>
                <th className="p-3 font-mono font-bold text-stone-700">Decision Boundary</th>
                <th className="p-3 font-mono font-bold text-stone-700">Bias &amp; Variance</th>
                <th className="p-3 font-mono font-bold text-stone-700">Failure Mode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-600">
              <tr>
                <td className="p-3 font-mono font-bold text-rose-700">K = 1</td>
                <td className="p-3">Highly complex, island-like Voronoi tessellations</td>
                <td className="p-3 font-semibold">Low Bias, Extreme Variance</td>
                <td className="p-3 text-rose-600">Overfitting &mdash; 100% train accuracy, memorizes noise</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-emerald-700">K = 5 &ndash; 15</td>
                <td className="p-3">Smooth, locally adaptive class contours</td>
                <td className="p-3 font-semibold text-emerald-700">Balanced Generalization</td>
                <td className="p-3 text-emerald-700">Optimal trade-off identified via cross-validation</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-amber-700">K = Large (e.g. 100)</td>
                <td className="p-3">Overly rigid, collapses toward global class priors</td>
                <td className="p-3 font-semibold">High Bias, Low Variance</td>
                <td className="p-3 text-amber-600">Underfitting &mdash; ignores local cluster nuances</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-700">
          <strong>Why Odd Values of K Are Preferred:</strong> In binary classification, choosing an odd K (e.g., K = 3, 5, 7) guarantees that unweighted majority voting cannot result in an exact 50/50 tie. In multiclass classification, ties must still be broken using distance weights or random tie-breaking.
        </div>
      </section>

      {/* SECTION 8 & 9: CLASSIFICATION VS REGRESSION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 08 &amp; 09
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Supervised Tasks</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          8 &amp; 9. KNN Classification &amp; Regression
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          KNN flexibly supports both classification (predicting discrete classes) and regression (predicting continuous quantities) using either uniform voting or distance-weighted aggregation.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-1">KNN Classification (KNeighborsClassifier)</h3>
            <span className="font-mono text-orange-700 text-xs block mb-2">Majority or Distance-Weighted Voting</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Under uniform voting, class prediction is the statistical mode: <code>&ycirc; = mode(y₁, ..., yₖ)</code>. Under distance-weighting, each neighbor receives weight <code>wᵢ = 1 / dᵢ</code>, scaling class evidence by spatial proximity.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-1">KNN Regression (KNeighborsRegressor)</h3>
            <span className="font-mono text-orange-700 text-xs block mb-2">Arithmetic Mean or Weighted Average</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Continuous prediction is the mean of neighbor targets: <code>&ycirc; = (1/K) &Sigma; yᵢ</code>. With distance weighting, closer points carry greater influence: <code>&ycirc; = &Sigma;(wᵢ yᵢ) / &Sigma; wᵢ</code>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10: CURSE OF DIMENSIONALITY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">High-Dimensional Bottleneck</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          10. The Curse of Dimensionality &amp; Distance Concentration
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          As feature dimensionality <strong>D</strong> grows, the volume of feature space expands exponentially (hypercube volume <code>V = s<sup>D</sup></code>). Training samples become extremely sparse, and Euclidean distance loses discriminatory power.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200">
            <h3 className="font-bold text-rose-950 text-sm mb-2 flex items-center gap-2">
              <AlertTriangle size={16} className="text-rose-600" />
              Distance Concentration Effect
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              In high dimensions, the relative difference between the nearest neighbor distance and the farthest neighbor distance approaches zero:
              <span className="font-mono block bg-white p-2 rounded-lg border border-rose-200 mt-2 text-rose-900">
                lim<sub>D&rarr;&infin;</sub> (d<sub>max</sub> - d<sub>min</sub>) / d<sub>min</sub> = 0
              </span>
              All points become roughly equidistant from the query sample, invalidating the premise of finding "close" neighbors.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200">
            <h3 className="font-bold text-emerald-950 text-sm mb-2 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              Engineering Mitigations
            </h3>
            <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4 mt-2">
              <li><strong>Dimensionality Reduction:</strong> Apply PCA or TruncatedSVD to capture &ge;95% variance in a compact subspace.</li>
              <li><strong>Feature Selection:</strong> Remove noisy, uninformative features with Mutual Information or RFE.</li>
              <li><strong>Alternative Models:</strong> Use Linear Models with L1 regularization or Tree Ensembles.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 11 & 12: BAYES THEOREM & NAIVE BAYES ASSUMPTION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 11 &amp; 12
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Probabilistic Foundations</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          11 &amp; 12. Bayes' Theorem &amp; The "Naive" Independence Assumption
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Bayesian classification models the conditional probability of class membership <code>P(C | X)</code> using Bayes' Theorem. Naive Bayes simplifies joint probability estimation by assuming all features are <strong>conditionally independent</strong> given the class.
        </p>

        {/* Bayes Formula Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-stone-400 uppercase text-[10px] block">Prior: P(C)</span>
            <span className="font-bold text-stone-900 text-sm font-sans block mt-1">Class Frequency</span>
            <p className="text-stone-600 font-sans text-[11px] mt-1">Base probability of class before observing any evidence.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200">
            <span className="text-orange-700 uppercase text-[10px] block">Likelihood: P(X | C)</span>
            <span className="font-bold text-orange-950 text-sm font-sans block mt-1">Feature Generator</span>
            <p className="text-stone-600 font-sans text-[11px] mt-1">Probability of observing features X given that class C is true.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-stone-400 uppercase text-[10px] block">Evidence: P(X)</span>
            <span className="font-bold text-stone-900 text-sm font-sans block mt-1">Total Probability</span>
            <p className="text-stone-600 font-sans text-[11px] mt-1">Marginal probability of features; normalizes posterior to sum to 1.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
            <span className="text-emerald-700 uppercase text-[10px] block">Posterior: P(C | X)</span>
            <span className="font-bold text-emerald-950 text-sm font-sans block mt-1">Updated Belief</span>
            <p className="text-stone-600 font-sans text-[11px] mt-1">Class probability after evaluating observed feature evidence.</p>
          </div>
        </div>

        {/* Log Probability Explanation */}
        <div className="mt-6 bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-2">
          <h4 className="font-bold text-stone-900">Why Log-Probabilities Prevent Floating-Point Underflow:</h4>
          <p className="text-stone-600 text-xs leading-relaxed">
            In text classification with 10,000 vocabulary words, multiplying ten thousand probabilities between 0 and 1 produces numbers like <code>10<sup>-400</sup></code>, collapsing to machine zero (underflow). By applying logarithms, products become sums:
          </p>
          <div className="font-mono bg-white p-2.5 rounded-lg border border-stone-200 text-stone-900 text-xs">
            log P(C | X) &prop; log P(C) + &Sigma; log P(xᵢ | C)
          </div>
        </div>
      </section>

      {/* SECTION 13, 14, 15 & 16: GAUSSIAN, MULTINOMIAL, BERNOULLI */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 13 &ndash; 16
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Naive Bayes Distribution Families</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          13 &ndash; 16. Gaussian, Multinomial &amp; Bernoulli Naive Bayes
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          The three canonical Naive Bayes implementations in Scikit-learn differ strictly in their underlying statistical assumptions regarding feature distributions.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-1">1. GaussianNB</h3>
            <span className="font-mono text-orange-700 text-xs block mb-2">Continuous Gaussian Measurements</span>
            <p className="text-xs text-stone-600 leading-relaxed mb-3">
              Assumes continuous features follow a normal bell curve conditionally within each class, parameterized by mean (&mu;) and variance (&sigma;&sup2;).
            </p>
            <div className="font-mono text-[11px] bg-white p-2 rounded-lg border border-stone-200 text-stone-800">
              P(x | C) = &frac12;&radic;(2&pi;&sigma;&sup2;) &middot; exp(-(x-&mu;)&sup2; / 2&sigma;&sup2;)
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-1">2. MultinomialNB</h3>
            <span className="font-mono text-orange-700 text-xs block mb-2">Discrete Word Counts &amp; Frequencies</span>
            <p className="text-xs text-stone-600 leading-relaxed mb-3">
              Models non-negative integer frequency vectors (CountVectorizer / TF-IDF). Incorporates <strong>Laplace smoothing (&alpha;=1)</strong> to prevent zero likelihoods.
            </p>
            <div className="font-mono text-[11px] bg-white p-2 rounded-lg border border-stone-200 text-stone-800">
              P(xᵢ | C) = (N<sub>Ci</sub> + &alpha;) / (N<sub>C</sub> + &alpha;V)
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-1">3. BernoulliNB</h3>
            <span className="font-mono text-orange-700 text-xs block mb-2">Binary Word Presence / Absence &#123;0, 1&#125;</span>
            <p className="text-xs text-stone-600 leading-relaxed mb-3">
              Models whether a word occurs or not. Crucially, explicitly penalizes the absence of a feature as well as its presence.
            </p>
            <div className="font-mono text-[11px] bg-white p-2 rounded-lg border border-stone-200 text-stone-800">
              P(X | C) = &prod; pᵢ<sup>xᵢ</sup> (1 - pᵢ)<sup>1 - xᵢ</sup>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 18: KNN SEARCH ALGORITHMS (KD-TREE & BALL TREE) */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Search Indexing</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          18. Nearest Neighbor Search Engines: Brute, KD-Tree &amp; Ball Tree
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Scikit-learn's <code>KNeighborsClassifier(algorithm='auto')</code> selects among three indexing backends based on sample count, feature dimensionality, and distance metric sparsity.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50">
                <th className="p-3 font-mono font-bold text-stone-700">Search Algorithm</th>
                <th className="p-3 font-mono font-bold text-stone-700">Index Build Cost</th>
                <th className="p-3 font-mono font-bold text-stone-700">Query Complexity</th>
                <th className="p-3 font-mono font-bold text-stone-700">Optimal Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-600">
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">brute</td>
                <td className="p-3 text-emerald-700 font-bold">O(0) &mdash; None</td>
                <td className="p-3">O(N &middot; D) linear scan</td>
                <td className="p-3">High-dimensional sparse text data (D &gt; 50)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">kd_tree</td>
                <td className="p-3">O(D &middot; N log N)</td>
                <td className="p-3 text-emerald-700 font-bold">O(D log N)</td>
                <td className="p-3">Low-dimensional Euclidean data (D &lt; 20)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">ball_tree</td>
                <td className="p-3">O(D &middot; N log N)</td>
                <td className="p-3 text-emerald-700 font-bold">O(D log N)</td>
                <td className="p-3">Arbitrary distance metrics &amp; clustered geometries</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 25: INTERVIEW PREPARATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 25
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Technical Interview Q&amp;A</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          25. High-Frequency Machine Learning Interview Questions
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Core theoretical and engineering questions frequently asked in Senior ML Engineer and Data Science interviews:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              q: "Q1: Why is feature scaling strictly mandatory in KNN but not in Naive Bayes?",
              a: "KNN relies on Euclidean or Manhattan distance metrics where coordinate scales directly govern neighbor proximity. If one feature spans 0 to 1,000,000 and another spans 0 to 1, the former will dominate distances. In contrast, GaussianNB standardizes feature variance naturally during Gaussian likelihood estimation, and Multinomial/BernoulliNB operate on discrete counts or presence.",
            },
            {
              q: "Q2: How does the choice of K affect the bias-variance tradeoff in KNN?",
              a: "Small K (e.g. K=1) creates complex, fragmented Voronoi boundaries that capture local training quirks and noise, producing low bias but high variance (overfitting). Large K averages over large neighborhoods, producing high bias but low variance (underfitting).",
            },
            {
              q: "Q3: What is Laplace Smoothing and why is it essential in text classification?",
              a: "If a test document contains a word that never appeared in class C training documents, raw maximum likelihood assigns P(word | C) = 0. Because Naive Bayes multiplies feature likelihoods, that single zero wipes out the entire posterior probability. Laplace smoothing adds α (typically α=1) to numerator counts to guarantee non-zero probabilities.",
            },
            {
              q: "Q4: Why does Naive Bayes often perform surprisingly well even when the independence assumption is violated?",
              a: "Classification only requires ranking the true class's posterior probability higher than competing classes (argmax), not producing perfectly calibrated probabilities. Even if correlated features skew the raw probability magnitudes, the correct class often retains the highest relative score.",
            },
            {
              q: "Q5: When does a KD-Tree fail to accelerate nearest neighbor search?",
              a: "In high dimensions (D > 20), the curse of dimensionality causes the search radius to intersect almost all partitioning hyperplanes, forcing the tree to inspect virtually all leaf nodes and degenerating performance to O(N). Brute force is faster in high dimensions.",
            },
            {
              q: "Q6: What is the fundamental difference between MultinomialNB and BernoulliNB?",
              a: "MultinomialNB models term frequencies (how many times word w appears in the document). BernoulliNB models binary indicators {0, 1} (whether word w appears at all) and explicitly multiplies the probability of absent words (1 - p_i) into the likelihood.",
            },
          ].map((item, idx) => (
            <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm mb-2">{item.q}</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 26: MASTERY CHECKLIST */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 26
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Core Competency Audit</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          26. Module 11 KNN &amp; Naive Bayes Mastery Checklist
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Confirm your mastery of instance-based and probabilistic machine learning before progressing to unsupervised clustering:
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {[
            "Distinguish Instance-Based (Lazy) vs Model-Based (Eager) learning",
            "Calculate Euclidean (L2), Manhattan (L1), and Minkowski (Lp) distances",
            "Diagnose KNN overfitting (small K) vs underfitting (large K)",
            "Apply distance-weighted voting w_i = 1 / d_i in classification and regression",
            "Explain the Curse of Dimensionality and distance concentration",
            "Select optimal indexing engines (Brute Force, KD-Tree, Ball Tree)",
            "Formulate Bayes' Theorem (Prior, Likelihood, Evidence, Posterior)",
            "Explain why Naive Bayes uses log-probabilities to prevent underflow",
            "Deploy GaussianNB for continuous numerical measurements",
            "Deploy MultinomialNB with Laplace smoothing for text frequency vectors",
            "Deploy BernoulliNB for binary indicator presence/absence features",
            "Build complete Scikit-learn pipelines with StandardScaler and PCA",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/60 text-emerald-950 font-medium">
              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
