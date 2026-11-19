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
  Search,
  Filter,
} from "lucide-react";

export default function MachineLearningAnomalyDetectionSections() {
  return (
    <div className="space-y-8">
      {/* SECTION 1: ANOMALY DETECTION FUNDAMENTALS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 01
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Core Foundations
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          1. Anomaly Detection Fundamentals &amp; Taxonomic Types
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          <strong>Anomaly detection</strong> is the machine learning task of discovering observations, events, or behaviors that diverge markedly from the baseline statistical distribution of normal data. Rather than learning to predict explicit class categories, anomaly models learn the geometry of normal operational states and flag deviations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">A. Point Anomalies</span>
            <h3 className="font-bold text-stone-900 text-sm">Individual Outliers</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              A single observation that differs drastically from the entire population. Example: A temperature sensor reporting 95&deg;C in a sequence of 28&ndash;30&deg;C readings, or a single $150,000 credit transaction on an account with average $25 purchases.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">B. Contextual Anomalies</span>
            <h3 className="font-bold text-stone-900 text-sm">Condition-Dependent</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              An observation that is numerically plausible in isolation, but anomalous within its contextual frame. Example: 35&deg;C is normal on a summer afternoon, but anomalous on a winter midnight; a $10,000 transfer is normal for a corporate payroll account but suspicious for a student debit card.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">C. Collective Anomalies</span>
            <h3 className="font-bold text-stone-900 text-sm">Coordinated Patterns</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              A collection of observations whose individual values appear entirely normal, but whose joint occurrence or temporal sequence signals an anomaly. Example: Hundreds of sub-$1 micro-transactions executed within seconds indicating automated carding attacks or distributed botnet probes.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUTLIER VS ANOMALY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 02
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Conceptual Precision
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          2. Outliers vs. Anomalies &mdash; Why the Distinction Matters
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          While frequently conflated in informal discourse, <strong>outliers</strong> and <strong>anomalies</strong> serve distinct roles in machine learning engineering:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 text-stone-500 font-mono text-xs uppercase bg-stone-50">
                <th className="p-3">Attribute</th>
                <th className="p-3">Statistical Outlier</th>
                <th className="p-3">Operational Anomaly</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr>
                <td className="p-3 font-bold text-stone-900">Definition</td>
                <td className="p-3 text-stone-600">Observation mathematically distant from central tendency</td>
                <td className="p-3 text-stone-600">Behavioral pattern inconsistent with domain expectations</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Typical Cause</td>
                <td className="p-3 text-stone-600">Sensor noise, data entry error, heavy-tailed distribution</td>
                <td className="p-3 text-stone-600">Financial fraud, system intrusion, equipment failure</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Feature Nature</td>
                <td className="p-3 text-stone-600">Univariate or high numerical magnitude</td>
                <td className="p-3 text-stone-600">Multivariate, contextual, or relational combination</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Engineering Action</td>
                <td className="p-3 text-stone-600">Winsorize, clip, or drop to stabilize model gradients</td>
                <td className="p-3 text-stone-600">Flag, isolate, prioritize for triage, trigger security alert</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3: STATISTICAL ANOMALY DETECTION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 03
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Statistical Methods
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          3. Statistical Anomaly Detection &mdash; Z-Score, IQR &amp; MAD
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Statistical screening establishes fast, interpretable baseline rules when the parametric distribution of features is reasonably stable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">1. Z-Score (Gaussian)</span>
            <div className="p-2 bg-white rounded-xl border border-stone-200 font-mono text-xs text-center">
              z = (x &minus; &mu;) / &sigma;
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Measures distance from mean in standard deviations. Standard screening flags |z| &gt; 3.0. <em>Flaw:</em> Non-robust &mdash; extreme outliers inflate both &mu; and &sigma;, masking their own severity.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">2. Tukey's IQR Fences</span>
            <div className="p-2 bg-white rounded-xl border border-stone-200 font-mono text-xs text-center">
              Fences = [Q1 &minus; 1.5&times;IQR, Q3 + 1.5&times;IQR]
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Based on quartiles (IQR = Q3 &minus; Q1). Completely unaffected by extreme tails up to 25% contamination. Best for skewed distributions (income, transaction sizes).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">3. Modified Z-Score (MAD)</span>
            <div className="p-2 bg-white rounded-xl border border-stone-200 font-mono text-xs text-center">
              M<sub>i</sub> = 0.6745 &times; (x<sub>i</sub> &minus; Median) / MAD
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Uses Median Absolute Deviation: MAD = Median(|x<sub>i</sub> &minus; Median|). Has a 50% breakdown point. Screen rule flags |M<sub>i</sub>| &gt; 3.5.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-1">
          <div>import numpy as np</div>
          <div>from scipy.stats import zscore</div>
          <br />
          <div>{'# Robust MAD implementation'}</div>
          <div>median = np.median(data)</div>
          <div>mad = np.median(np.abs(data - median))</div>
          <div>modified_z = 0.6745 * (data - median) / (mad if mad != 0 else 1e-9)</div>
          <div>anomalies = np.abs(modified_z) &gt; 3.5</div>
        </div>
      </section>

      {/* SECTION 4: ISOLATION FOREST */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 04
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Tree-Based Detection
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          4. Isolation Forest &mdash; Recursive Partitioning Architecture
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Introduced by Liu, Ting, and Zhou (2008), <strong>Isolation Forest</strong> departs from density or distance estimation. It exploits two quantitative properties of anomalies: they are <em>few</em> in number and have <em>attribute values distinct</em> from normal clusters.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">Path Length Mechanics h(x)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              An ensemble of <em>Isolation Trees (iTrees)</em> is constructed by randomly selecting an axis-aligned feature and a random split value between that feature's min and max. Normal points require many splits to isolate in dense leaf nodes. Anomalies reside in peripheral low-density regions and are isolated near the root in very few partitions (short average path length E(h(x))).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">The Anomaly Score s(x, n)</h3>
            <div className="p-2 bg-white rounded-xl border border-stone-200 font-mono text-xs text-center">
              s(x, n) = 2<sup>&minus;E(h(x)) / c(n)</sup>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Where c(n) = 2(ln(n &minus; 1) + 0.5772156649) &minus; (2(n &minus; 1)/n) is the average path length of unsuccessful search in a binary search tree. If s &rarr; 1, the point is definitely an anomaly; if s &lt; 0.5, it is regarded as normal.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2">
          <div>from sklearn.ensemble import IsolationForest</div>
          <br />
          <div>iso = IsolationForest(n_estimators=200, max_samples=256, contamination=0.01, random_state=42)</div>
          <div>iso.fit(X_train)</div>
          <div>preds = iso.predict(X_test)&nbsp;&nbsp;<span className="text-stone-400"># +1 = inlier, -1 = outlier</span></div>
          <div>scores = iso.decision_function(X_test)&nbsp;&nbsp;<span className="text-stone-400"># negative values indicate severe anomalies</span></div>
        </div>
      </section>

      {/* SECTION 5: LOCAL OUTLIER FACTOR */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 05
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Density-Based Detection
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          5. Local Outlier Factor (LOF) &mdash; Relative Density Estimation
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Global distance thresholds fail when a dataset features clusters of varying local densities (e.g. dense metropolitan spending vs. sparse rural spending). <strong>Local Outlier Factor (Breunig et al., 2000)</strong> assesses an observation relative to the density of its <em>k</em> nearest neighbors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="font-bold text-xs text-stone-900 block mb-1">1. Reachability Distance</span>
            <div className="font-mono text-[11px] text-orange-600">
              reach-dist<sub>k</sub>(p, o) = max(k-distance(o), d(p, o))
            </div>
            <p className="text-[11px] text-stone-600 mt-1">Prevents distance fluctuations inside dense clusters.</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="font-bold text-xs text-stone-900 block mb-1">2. Local Reachability Density</span>
            <div className="font-mono text-[11px] text-orange-600">
              LRD<sub>k</sub>(p) = |N<sub>k</sub>(p)| / &Sigma; reach-dist(p, o)
            </div>
            <p className="text-[11px] text-stone-600 mt-1">Inverse of average reachability distance to neighbors.</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="font-bold text-xs text-stone-900 block mb-1">3. The LOF Ratio</span>
            <div className="font-mono text-[11px] text-orange-600">
              LOF<sub>k</sub>(p) = [ &Sigma; LRD(o) / |N<sub>k</sub>(p)| ] / LRD(p)
            </div>
            <p className="text-[11px] text-stone-600 mt-1">LOF &asymp; 1: normal; LOF &gt;&gt; 1: lower density than neighbors (outlier).</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
          <strong>Scikit-learn Production Note:</strong> By default, <code>novelty=False</code> (transductive outlier detection on the training set via <code>fit_predict()</code>). To score brand-new incoming stream observations in a production service, instantiate with <code>novelty=True</code> and call <code>fit()</code> followed by <code>predict()</code>.
        </div>
      </section>

      {/* SECTION 6: ONE-CLASS SVM */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 06
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Kernel Support Vectors
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          6. One-Class Support Vector Machine (One-Class SVM)
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Proposed by Sch&ouml;lkopf et al., <strong>One-Class SVM</strong> learns a decision boundary encompassing normal observations in feature space while maximizing the margin to the coordinate origin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">Dual Regularization Parameters: &nu; and &gamma;</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Parameter &nu; (&nu; &isin; (0, 1]):</strong> Sets an upper bound on the fraction of training outliers and a lower bound on the fraction of support vectors.
              <br /><br />
              <strong>Parameter &gamma; (RBF Kernel):</strong> Controls the Gaussian radius. Excessively large &gamma; values cause severe overfitting, forming isolated support bubbles around individual normal training instances.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">Production Code Pattern</h3>
            <div className="p-3 bg-stone-900 rounded-xl text-stone-100 font-mono text-xs space-y-1">
              <div>from sklearn.svm import OneClassSVM</div>
              <div>from sklearn.preprocessing import StandardScaler</div>
              <div>from sklearn.pipeline import make_pipeline</div>
              <br />
              <div>oc_svm = make_pipeline(</div>
              <div>&nbsp;&nbsp;StandardScaler(),</div>
              <div>&nbsp;&nbsp;OneClassSVM(kernel="rbf", gamma="scale", nu=0.03)</div>
              <div>)</div>
              <div>oc_svm.fit(X_train_normal_only)</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: COMPARISON OF ANOMALY DETECTORS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 07
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Algorithm Trade-Offs
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          7. Anomaly Detection Algorithm Decision Framework
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-stone-200 font-mono uppercase bg-stone-50 text-stone-600">
                <th className="p-3">Algorithm</th>
                <th className="p-3">Paradigm</th>
                <th className="p-3">Complexity</th>
                <th className="p-3">Best Suited For</th>
                <th className="p-3">Primary Limitation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="p-3 font-bold text-stone-900">Z-Score / MAD</td>
                <td className="p-3">Statistical</td>
                <td className="p-3">O(N)</td>
                <td className="p-3">Single-feature real-time metrics, KPI thresholds</td>
                <td className="p-3">Fails to detect multivariate correlation anomalies</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Isolation Forest</td>
                <td className="p-3">Random Partition</td>
                <td className="p-3">O(n log n)</td>
                <td className="p-3">High-dimensional tabular datasets, massive streams</td>
                <td className="p-3">Axis-aligned splits struggle with complex curved manifolds</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Local Outlier Factor</td>
                <td className="p-3">Local Density</td>
                <td className="p-3">O(N<sup>2</sup>)</td>
                <td className="p-3">Multimodal datasets with varied cluster densities</td>
                <td className="p-3">Nearest-neighbor lookup is slow on large datasets</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">One-Class SVM</td>
                <td className="p-3">Boundary Support Vectors</td>
                <td className="p-3">O(N<sup>2</sup> &ndash; N<sup>3</sup>)</td>
                <td className="p-3">Clean normal-only training sets with complex geometries</td>
                <td className="p-3">Highly sensitive to scaling and kernel hyperparameters</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 8: EVALUATION METRICS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 08
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Validation Science
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          8. Evaluation Metrics for Severe Class Imbalance
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          When positive anomaly cases represent less than 1% of transactions, conventional evaluation protocols collapse. <strong>Accuracy is completely invalid.</strong>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600 block">Precision</span>
            <div className="font-mono text-xs my-1">TP / (TP + FP)</div>
            <p className="text-xs text-stone-600">Fraction of flagged transactions that are genuinely fraudulent. Prevents customer friction.</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600 block">Recall (Sensitivity)</span>
            <div className="font-mono text-xs my-1">TP / (TP + FN)</div>
            <p className="text-xs text-stone-600">Fraction of actual fraud successfully caught. Minimizes chargeback financial losses.</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600 block">PR-AUC / Average Precision</span>
            <div className="font-mono text-xs my-1">Area under PR Curve</div>
            <p className="text-xs text-stone-600">Gold standard for rare classes. Unlike ROC-AUC, it is uncorrupted by millions of True Negatives.</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600 block">Precision@K</span>
            <div className="font-mono text-xs my-1">Fraud in Top K / K</div>
            <p className="text-xs text-stone-600">Operational metric for human investigation teams with fixed daily audit bandwidth.</p>
          </div>
        </div>
      </section>

      {/* SECTION 9: CLASS IMBALANCE RATIO */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 09
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Problem Formulation
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          9. The Imbalance Ratio &amp; The Accuracy Paradox
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          The <strong>Imbalance Ratio (IR)</strong> measures the dominance of the majority class: IR = N<sub>majority</sub> / N<sub>minority</sub>.
        </p>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-stone-900 text-sm">The 99.9% Accuracy Trap</span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-rose-100 text-rose-800 font-bold">Failure Mode</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            In a transaction log of 1,000,000 credit transactions where 1,000 are fraudulent (IR = 1,000:1), a degenerate dummy model that predicts <em>Normal</em> for every single record achieves <strong>99.90% Accuracy</strong>. Yet its Recall is <strong>0.00%</strong>, allowing $5,000,000 in fraud losses to pass completely undetected.
          </p>
        </div>
      </section>

      {/* SECTION 10: RANDOM UNDERSAMPLING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 10
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Resampling Strategies
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          10. Random Undersampling of the Majority Class
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Random undersampling removes majority class instances at random until the desired minority-to-majority proportion is satisfied.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-800 uppercase">Advantages</span>
            <p className="text-xs text-emerald-900 leading-relaxed">
              Dramatically accelerates training on massive datasets (e.g. compressing 10,000,000 rows to 100,000). Highly effective when the majority class contains immense feature redundancy.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
            <span className="text-xs font-mono font-bold text-rose-800 uppercase">Disadvantages</span>
            <p className="text-xs text-rose-900 leading-relaxed">
              Irretrievably discards potentially valuable decision boundary observations from the majority class, increasing variance and vulnerability to false alarms.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11: RANDOM OVERSAMPLING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 11
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Resampling Strategies
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          11. Random Oversampling &amp; Duplication Hazards
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Random oversampling balances class frequencies by randomly sampling existing minority observations with replacement.
        </p>

        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1">
          <strong>The Memorization Hazard:</strong> Exact duplicates do not inject new statistical information into the feature space. Classifiers (particularly deep trees and nearest neighbor methods) easily memorize the duplicated points, constructing tight boundary islands around noise and severely degrading test generalization.
        </div>
      </section>

      {/* SECTION 12: SMOTE */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 12
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Synthetic Oversampling
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          12. SMOTE &mdash; Synthetic Minority Over-Sampling Technique
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Published by Chawla, Bowyer, Hall, and Kegelmeyer (2002), <strong>SMOTE</strong> synthesizes brand-new plausible instances along the line segments connecting existing minority observations:
        </p>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <div className="p-2.5 bg-white rounded-xl border border-stone-200 font-mono text-xs text-center text-stone-900">
            x<sub>new</sub> = x<sub>i</sub> + &lambda; &times; (x<sub>j</sub> &minus; x<sub>i</sub>), &nbsp;&nbsp; where &lambda; &isin; [0, 1]
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Where x<sub>i</sub> is a minority class observation and x<sub>j</sub> is randomly selected from its <em>k</em> nearest minority neighbors. By interpolating in convex feature space, SMOTE breaks exact replication and expands the minority decision boundary.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2">
          <div>from imblearn.pipeline import Pipeline as ImbPipeline</div>
          <div>from imblearn.over_sampling import SMOTE</div>
          <div>from sklearn.preprocessing import StandardScaler</div>
          <div>from sklearn.linear_model import LogisticRegression</div>
          <br />
          <div className="text-stone-400"># CRITICAL: Always embed SMOTE inside imblearn Pipeline</div>
          <div>pipeline = ImbPipeline([</div>
          <div>&nbsp;&nbsp;("scaler", StandardScaler()),</div>
          <div>&nbsp;&nbsp;("smote", SMOTE(sampling_strategy=0.2, k_neighbors=5, random_state=42)),</div>
          <div>&nbsp;&nbsp;("clf", LogisticRegression(max_iter=1000))</div>
          <div>])</div>
          <div>pipeline.fit(X_train, y_train)&nbsp;&nbsp;<span className="text-stone-400"># SMOTE executes strictly on train split</span></div>
        </div>
      </section>

      {/* SECTION 13: CLASS WEIGHTING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 13
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Cost-Sensitive Learning
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          13. Cost-Sensitive Learning via Class Weighting
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Rather than artificially modifying training row counts, <strong>class weighting</strong> modifies the objective loss function itself during gradient backpropagation:
        </p>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
          <div className="font-mono text-xs text-center text-stone-900">
            w<sub>c</sub> = N / (K &times; N<sub>c</sub>)
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Where <em>N</em> is total samples, <em>K</em> is number of classes, and <em>N<sub>c</sub></em> is the count of class <em>c</em>. In a dataset with 99,000 normal and 1,000 fraud records: w<sub>normal</sub> &asymp; 0.505, while w<sub>fraud</sub> = 50.0. Misclassifying a single fraud case incurs 100&times; greater gradient penalty than misclassifying a normal record.
          </p>
        </div>
      </section>

      {/* SECTION 14: COMPARATIVE FRAMEWORK */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 14
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Comparative Architecture
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          14. Resampling vs. Cost-Sensitive Class Weighting
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 text-stone-500 font-mono text-xs uppercase bg-stone-50">
                <th className="p-3">Criterion</th>
                <th className="p-3">SMOTE / Resampling</th>
                <th className="p-3">Class Weighting</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="p-3 font-bold text-stone-900">Dataset Size</td>
                <td className="p-3">Increases training rows and memory footprint</td>
                <td className="p-3">Leaves dataset dimensions completely unchanged</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Computation</td>
                <td className="p-3">Adds O(N &times; k) nearest-neighbor distance queries</td>
                <td className="p-3">Negligible overhead &mdash; simple scalar loss multiplier</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Synthetic Artifacts</td>
                <td className="p-3 text-rose-700">May interpolate across class overlap regions</td>
                <td className="p-3 text-emerald-700">Preserves true ground-truth empirical data manifold</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Categorical Columns</td>
                <td className="p-3">Requires SMOTENC; fails on one-hot encodings</td>
                <td className="p-3">Natively handles arbitrary heterogeneous feature types</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 15: THRESHOLD OPTIMIZATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 15
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Decision Engineering
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          15. Classification Probability Threshold Optimization
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Standard classifiers output a continuous probability score P(y=1|x) &isin; [0, 1] and default to a 0.5 decision cutoff. In asymmetric business domains (fraud, disease diagnosis), <strong>0.5 is almost always the wrong threshold</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">F1 &amp; F<sub>&beta;</sub> Maximization</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Using the held-out validation set, sweep thresholds from 0.01 to 0.99. Select the threshold that maximizes the F1-Score or F<sub>2</sub>-Score (which weights Recall twice as heavily as Precision).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">Asymmetric Business Cost Matrix</h3>
            <div className="p-2 bg-white rounded-xl border border-stone-200 font-mono text-xs text-center">
              Total Cost = (FN &times; C<sub>FN</sub>) + (FP &times; C<sub>FP</sub>)
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              If an uncaught fraud costs $5,000 (chargeback + fines) and investigating a false alert costs $5, the optimal threshold shifts down to ~0.08, drastically reducing total net corporate loss.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 16: CAPSTONE SYSTEM OVERVIEW */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 16
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            System Implementation
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          16. Credit Card Fraud Detection &mdash; End-to-End System Walkthrough
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Built on the European Credit Card benchmark (284,807 transactions, 492 fraud cases, IR = 578:1, 28 PCA features + Time + Amount):
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600">Step 1&ndash;4: Exploratory Analysis &amp; Amount Scaling</span>
            <p className="text-xs text-stone-600 mt-1">Examine extreme skew in Amount. Apply RobustScaler or Log1p transform to suppress long-tail influence.</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600">Step 5: 3-Way Stratified Partitioning</span>
            <p className="text-xs text-stone-600">Strictly partition into 60% Train, 20% Validation (for threshold selection), and 20% Test (for unbiased final audit).</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600">Step 6&ndash;8: Model Comparison</span>
            <p className="text-xs text-stone-600">Compare Baseline Logistic Regression vs. Balanced Class Weights vs. SMOTE vs. Isolation Forest unsupervised baseline.</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-600">Step 9&ndash;13: Threshold Tuning &amp; Final Evaluation</span>
            <p className="text-xs text-stone-600">Calibrate probability threshold to achieve 85%+ Recall with &gt; 75% Precision; plot confusion matrix and PR-AUC curve.</p>
          </div>
        </div>
      </section>

      {/* SECTION 17: PRODUCTION ENGINEERING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 17
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Production Engineering
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          17. Production Considerations: Concept Drift &amp; Human-in-the-Loop
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">Concept Drift in Adversarial Domains</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Fraudsters actively mutate attack vectors to evade static decision boundaries. Production systems must continuously monitor feature drift (Population Stability Index / KS-test) and degradation in 7-day rolling PR-AUC.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">Tiered Human-in-the-Loop Triage</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Low Risk (P &lt; 0.15):</strong> Auto-approve silently.
              <br />
              <strong>Medium Risk (0.15 &le; P &lt; 0.60):</strong> Trigger Step-Up MFA (SMS / Authenticator OTP).
              <br />
              <strong>High Risk (P &ge; 0.60):</strong> Temporary freeze &amp; route to Level 2 fraud investigator queue.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 18: TECHNICAL ASSESSMENT ANSWERS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 18
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Interview Assessments
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          18. Module Assessment &amp; Advanced Staff Engineer Q&amp;A
        </h2>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">
              Q: Why is oversampling before train/test splitting considered fatal data leakage?
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Answer:</strong> Resampling interpolates or duplicates observations based on the global distribution. If test instances are present during resampling, synthetic training points will be constructed along line segments directly connecting future test samples. The model memorizes test-specific manifold coordinates, creating massive overfitting and false confidence.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">
              Q: How do you mathematically differentiate an anomaly score from a fraud probability?
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Answer:</strong> An anomaly score (e.g. Isolation Forest path length E(h(x))) measures statistical rarity relative to training data geometry without knowing class identities. A fraud probability P(y=1|x) outputs a calibrated posterior probability of intentional malicious intent. A high-net-worth customer buying a yacht has a massive anomaly score, but near-zero fraud probability.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 19: CAPSTONE ARCHITECTURE */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 19
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Capstone Architecture
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          19. Final Capstone: Intelligent Hybrid Fraud Detection Engine
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
            <span className="text-xs font-mono font-bold text-orange-600">Phase 1&ndash;2</span>
            <h4 className="font-bold text-stone-900 text-xs">EDA &amp; Robust Stats</h4>
            <p className="text-[11px] text-stone-600">Z-score, IQR, and MAD screening on transaction features.</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
            <span className="text-xs font-mono font-bold text-orange-600">Phase 3&ndash;4</span>
            <h4 className="font-bold text-stone-900 text-xs">Unsupervised Baselines</h4>
            <p className="text-[11px] text-stone-600">Isolation Forest and LOF outlier scores calibrated without target labels.</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
            <span className="text-xs font-mono font-bold text-orange-600">Phase 5&ndash;6</span>
            <h4 className="font-bold text-stone-900 text-xs">Supervised + SMOTE</h4>
            <p className="text-[11px] text-stone-600">Cost-sensitive Gradient Boosting with SMOTE oversampling.</p>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
            <span className="text-xs font-mono font-bold text-orange-600">Phase 7&ndash;8</span>
            <h4 className="font-bold text-stone-900 text-xs">Threshold &amp; Triage</h4>
            <p className="text-[11px] text-stone-600">Cost-matrix threshold optimization and real-time inference routing.</p>
          </div>
        </div>
      </section>

      {/* SECTION 20: MASTERY CHECKLIST */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 20
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Core Competencies
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          20. Module 17 Anomaly Detection &amp; Imbalanced Learning Checklist
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-700">
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Point, contextual, and collective anomaly categorization</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Statistical Z-score, Tukey IQR, and Median Absolute Deviation (MAD)</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Isolation Forest path length derivation and contamination tuning</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Local Outlier Factor (LOF) reachability density and novelty scoring</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>One-Class SVM support vector boundary estimation with RBF kernel</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Understanding the 99.9% accuracy trap in imbalanced classification</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Random undersampling vs. oversampling vs. SMOTE interpolation</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Balanced class weighting loss function scaling</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Precision-Recall AUC (Average Precision) vs ROC-AUC trade-offs</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Cost-sensitive and F1-optimal probability threshold optimization</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Preventing data leakage via imblearn Pipeline integration</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
            <span>Production concept drift monitoring and tiered triage routing</span>
          </div>
        </div>
      </section>
    </div>
  );
}
