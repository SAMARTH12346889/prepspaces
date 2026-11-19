import React from "react";
import {
  TrendingUp,
  Activity,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  FileCode,
  Table,
  Cpu,
  Sliders,
  BarChart2,
  Target,
  Calculator,
  Compass,
  Check,
  Zap,
  ShieldCheck,
  GitBranch,
  Split,
  Binary,
  PieChart,
  Network,
  Scissors,
  HelpCircle,
  Shuffle,
  Vote,
  Boxes,
} from "lucide-react";

export default function MachineLearningEnsembleSections() {
  return (
    <div className="space-y-12">
      {/* SECTION 1: INTRODUCTION TO ENSEMBLE LEARNING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 01
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Core Philosophy</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          1. Introduction to Ensemble Learning &amp; Bias-Variance Tradeoff
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Ensemble learning is a supervised machine learning paradigm where multiple individual algorithms (known as <strong>base learners</strong> or <strong>weak learners</strong>) are combined to construct a superior predictive system. Instead of relying on a single estimator that might suffer from high variance, high bias, or sample instability, an ensemble aggregates diverse model decisions to optimize generalization on unseen data.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">High Bias (Underfitting)</span>
            <p className="mt-1 text-xs text-stone-600">Oversimplified models (e.g. shallow decision stumps) miss underlying data relationships. <strong>Boosting</strong> sequentially reduces bias.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">High Variance (Overfitting)</span>
            <p className="mt-1 text-xs text-stone-600">Overly complex models (e.g. unconstrained deep decision trees) memorize sample noise. <strong>Bagging</strong> aggregates parallel learners to reduce variance.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase">Model Diversity</span>
            <p className="mt-1 text-xs text-stone-600">Ensembles only succeed when individual models make <em>uncorrelated errors</em>. Identical models provide zero ensemble benefit.</p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
          <div className="text-stone-400 mb-2"># Mathematical Combination of M Base Models</div>
          <div>Regression (Uniform Average): &nbsp;&nbsp;&nbsp;ŷ = (1/M) Σ ŷᵢ</div>
          <div>Classification (Majority Vote): &nbsp;ŷ = mode(h₁(x), h₂(x), ..., h_M(x))</div>
          <div>Classification (Soft Voting): &nbsp;&nbsp;&nbsp;P(y=k|x) = (1/M) Σ P_i(y=k|x)</div>
        </div>
      </section>

      {/* SECTION 2: BAGGING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 02
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Parallel Ensembles</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          2. Bagging &mdash; Bootstrap Aggregating &amp; Out-of-Bag (OOB)
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          <strong>Bagging</strong> (Bootstrap Aggregating) trains multiple base models completely independently in parallel using randomly generated bootstrap samples of the original training dataset.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-2">
            <h3 className="font-bold text-stone-900 font-mono uppercase">2.3 The 63.2% Bootstrap Theorem</h3>
            <p>
              When sampling N observations with replacement from a dataset of size N, the probability of any given row <em>never</em> being selected is:
            </p>
            <div className="p-2 bg-white rounded-lg border border-stone-200 font-mono text-orange-700 font-bold text-center">
              P(not selected) = (1 - 1/N)ᴺ &asymp; e⁻¹ &asymp; 0.368 (36.8%)
            </div>
            <p>
              Consequently, approximately <strong>63.2% of unique rows</strong> appear in each bootstrap sample, while <strong>36.8% remain Out-of-Bag (OOB)</strong>.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-2">
            <h3 className="font-bold text-stone-900 font-mono uppercase">2.4 Out-of-Bag (OOB) Evaluation</h3>
            <p>
              Because each tree leaves out ~36.8% of the data during bootstrap sampling, those excluded samples serve as a built-in validation test set for that specific tree.
            </p>
            <p className="text-emerald-800">
              Aggregating predictions for each row using only the trees that never saw it generates an unbiased generalization estimate (<code>oob_score=True</code>) without reserving a separate validation split.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
          <code>
            from sklearn.ensemble import BaggingClassifier<br />
            from sklearn.tree import DecisionTreeClassifier<br /><br />
            bagging = BaggingClassifier(<br />
            &nbsp;&nbsp;estimator=DecisionTreeClassifier(random_state=42),<br />
            &nbsp;&nbsp;n_estimators=100,<br />
            &nbsp;&nbsp;bootstrap=True,<br />
            &nbsp;&nbsp;oob_score=True,<br />
            &nbsp;&nbsp;random_state=42,<br />
            &nbsp;&nbsp;n_jobs=-1<br />
            )<br />
            bagging.fit(X_train, y_train)<br />
            print("OOB Generalization Score:", bagging.oob_score_)
          </code>
        </div>
      </section>

      {/* SECTION 3: RANDOM FOREST */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 03
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Industry Standard</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          3. Random Forest &mdash; Decorrelating Decision Trees
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Standard bagging with decision trees has a limitation: if one or two features are overwhelmingly predictive, every tree picks those same features at the root split, making the ensemble's trees strongly correlated. Random Forest overcomes this by injecting <strong>random feature subsampling</strong> at every split node.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-2">
            <h3 className="font-bold text-stone-900 font-mono uppercase">Feature Subsampling Heuristics</h3>
            <p>At each candidate split, the tree considers only a random subset of m features from total p features:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 font-mono text-orange-700">
              <li>Classification: m = &radic;p &nbsp;(e.g. for p=100 features, test m=10)</li>
              <li>Regression: m = p / 3 &nbsp;(e.g. for p=90 features, test m=30)</li>
            </ul>
            <p className="text-stone-500 mt-2">Forces individual trees to learn secondary and tertiary predictive patterns, dramatically reducing ensemble variance.</p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-2">
            <h3 className="font-bold text-stone-900 font-mono uppercase">Key Hyperparameters to Tune</h3>
            <ul className="space-y-1.5 text-xs">
              <li><code>n_estimators</code>: Number of trees (typically 100&ndash;500; more trees never overfit).</li>
              <li><code>max_features</code>: Feature subset size ('sqrt', 'log2', or fraction).</li>
              <li><code>min_samples_leaf</code>: Minimum samples per leaf (1 for clf, 5 for regression).</li>
              <li><code>class_weight</code>: 'balanced' or 'balanced_subsample' for rare classes.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
          <code>
            from sklearn.ensemble import RandomForestClassifier<br />
            from sklearn.metrics import classification_report<br /><br />
            rf = RandomForestClassifier(<br />
            &nbsp;&nbsp;n_estimators=300,<br />
            &nbsp;&nbsp;max_features="sqrt",<br />
            &nbsp;&nbsp;min_samples_leaf=2,<br />
            &nbsp;&nbsp;class_weight="balanced",<br />
            &nbsp;&nbsp;oob_score=True,<br />
            &nbsp;&nbsp;random_state=42,<br />
            &nbsp;&nbsp;n_jobs=-1<br />
            )<br />
            rf.fit(X_train, y_train)<br />
            print("RF Test Accuracy:", rf.score(X_test, y_test))
          </code>
        </div>
      </section>

      {/* SECTION 4: EXTRA TREES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 04
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Extremely Randomized</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          4. Extra Trees (Extremely Randomized Trees)
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          <strong>Extra Trees</strong> (Extremely Randomized Trees) introduces an additional layer of randomization: instead of calculating the mathematically optimal split threshold for each candidate feature, it generates <em>random thresholds</em> and picks the best among them.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-700 font-bold font-mono">
                <th className="p-3">Algorithmic Attribute</th>
                <th className="p-3">Random Forest</th>
                <th className="p-3">Extra Trees</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Sampling Mechanism</td>
                <td className="p-3">Bootstrap sampling with replacement (default)</td>
                <td className="p-3">Uses complete training dataset (bootstrap=False default)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Split Threshold Selection</td>
                <td className="p-3">Exhaustively searches for optimal threshold</td>
                <td className="p-3 font-semibold text-orange-700">Draws random thresholds for candidate features</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Training Speed</td>
                <td className="p-3">Moderate (sorting &amp; testing midpoints)</td>
                <td className="p-3 font-semibold text-emerald-700">Significantly faster (skips threshold optimization)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Bias &amp; Variance Profile</td>
                <td className="p-3">Lower bias; low variance</td>
                <td className="p-3">Slightly higher bias; often even lower variance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 5: FEATURE IMPORTANCE */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 05
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Model Explainability</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          5. Feature Importance &mdash; Impurity vs. Permutation
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-2">
            <h3 className="font-bold text-stone-900 font-mono uppercase">1. Impurity-Based Importance (MDI)</h3>
            <p>Calculates the sum of weighted Gini/variance reductions across all trees in the forest where a feature is used for splitting.</p>
            <p className="text-rose-800">
              <strong>Major Limitation:</strong> Severely biased toward continuous numerical features and categorical variables with high cardinality (many categories).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-2">
            <h3 className="font-bold text-stone-900 font-mono uppercase">2. Permutation Feature Importance</h3>
            <p>Model-agnostic evaluation: randomly shuffles values in a feature column on <em>held-out validation data</em> and measures the drop in metric (e.g. ROC-AUC or R²).</p>
            <p className="text-emerald-800">
              <strong>Best Practice:</strong> True measure of generalization influence; free from high-cardinality bias.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6, 7 & 8: BOOSTING FUNDAMENTALS, ADABOOST & GRADIENT BOOSTING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 06 &ndash; 08
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Sequential Boosting</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          6, 7 &amp; 8. Boosting Fundamentals, AdaBoost &amp; Gradient Boosting
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Unlike Bagging (which builds independent trees in parallel), <strong>Boosting</strong> builds an additive sequence of weak learners where each new model is explicitly trained to correct the errors of the preceding ensemble.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h3 className="text-xs font-bold font-mono text-orange-700 uppercase">AdaBoost (Adaptive Sample Weighting)</h3>
            <ul className="text-xs text-stone-700 space-y-1.5">
              <li><strong>Base Learners:</strong> Decision stumps (trees of depth=1).</li>
              <li><strong>Mechanism:</strong> Increases sample weights for misclassified observations; decreases weights for correct ones.</li>
              <li><strong>Learner Weight:</strong> &alpha; = (1/2) ln((1 - &epsilon;) / &epsilon;), where &epsilon; is weighted error.</li>
              <li><strong>Ensemble Vote:</strong> H(x) = sign(Σ &alpha;ₘ hₘ(x)).</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h3 className="text-xs font-bold font-mono text-orange-700 uppercase">Gradient Tree Boosting (GBDT)</h3>
            <ul className="text-xs text-stone-700 space-y-1.5">
              <li><strong>Base Learners:</strong> Shallow decision trees (depth 2&ndash;6).</li>
              <li><strong>Mechanism:</strong> Fits subsequent trees to <em>pseudo-residuals</em> (negative gradient of loss function -∂L/∂ŷ).</li>
              <li><strong>Additive Update:</strong> Fₘ(x) = Fₘ₋₁(x) + &eta; &middot; &gamma;ₘ hₘ(x), where &eta; is learning rate.</li>
              <li><strong>Loss Flexibility:</strong> Supports MSE, Huber, Log-loss, Cross-entropy.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 9: XGBOOST */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 09
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Extreme Gradient Boosting</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          9. XGBoost &mdash; Regularized Second-Order Gradient Boosting
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          <strong>XGBoost</strong> (Extreme Gradient Boosting) introduced mathematical and systems engineering breakthroughs that dominated competitive tabular machine learning.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">1. Regularized Objective</span>
            <p className="mt-1 text-xs text-stone-600 font-mono">Obj = L + &gamma;T + (1/2)&lambda;Σwⱼ² + &alpha;Σ|wⱼ|</p>
            <p className="mt-1 text-[11px] text-stone-500">Penalizes tree leaf counts T and shrinks leaf weights w with L1 (&alpha;) and L2 (&lambda;).</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">2. Second-Order Taylor</span>
            <p className="mt-1 text-xs text-stone-600 font-mono">gᵢ = ∂L/∂ŷ, &nbsp; hᵢ = ∂²L/∂ŷ²</p>
            <p className="mt-1 text-[11px] text-stone-500">Uses curvature (Hessian hᵢ) alongside first-order gradients for fast, exact optimal leaf weight estimation.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">3. Sparsity Awareness</span>
            <p className="mt-1 text-xs text-stone-600 font-mono">Default Direction Routing</p>
            <p className="mt-1 text-[11px] text-stone-500">Automatically learns the best direction (left vs right branch) for missing values during node splits.</p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
          <code>
            from xgboost import XGBClassifier<br /><br />
            xgb = XGBClassifier(<br />
            &nbsp;&nbsp;n_estimators=300,<br />
            &nbsp;&nbsp;learning_rate=0.05,<br />
            &nbsp;&nbsp;max_depth=5,<br />
            &nbsp;&nbsp;subsample=0.8,<br />
            &nbsp;&nbsp;colsample_bytree=0.8,<br />
            &nbsp;&nbsp;reg_lambda=1.5,<br />
            &nbsp;&nbsp;reg_alpha=0.1,<br />
            &nbsp;&nbsp;eval_metric="logloss",<br />
            &nbsp;&nbsp;random_state=42,<br />
            &nbsp;&nbsp;n_jobs=-1<br />
            )<br />
            xgb.fit(X_train, y_train)
          </code>
        </div>
      </section>

      {/* SECTION 10: LIGHTGBM */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Histogram Boosting</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          10. LightGBM &mdash; Fast Histogram &amp; Leaf-Wise Boosting
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Developed by Microsoft, <strong>LightGBM</strong> achieves 10x&ndash;20x speedups on massive tabular datasets through four architectural pillars:
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="font-bold font-mono text-orange-700 uppercase">1. Histogram Binning</span>
            <p className="mt-1 text-stone-600">Discretizes continuous float features into 256 discrete bins, reducing memory 8x and accelerating split evaluations.</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="font-bold font-mono text-orange-700 uppercase">2. Leaf-Wise Growth</span>
            <p className="mt-1 text-stone-600">Grows the leaf providing the maximum loss reduction rather than growing level-by-level, yielding faster convergence.</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="font-bold font-mono text-orange-700 uppercase">3. GOSS</span>
            <p className="mt-1 text-stone-600">Gradient-based One-Side Sampling: keeps samples with large gradients and subsamples small-gradient rows.</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="font-bold font-mono text-orange-700 uppercase">4. EFB</span>
            <p className="mt-1 text-stone-600">Exclusive Feature Bundling: merges mutually exclusive sparse columns (e.g. one-hot indicators) into dense features.</p>
          </div>
        </div>
      </section>

      {/* SECTION 11: CATBOOST */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Categorical Boosting</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          11. CatBoost &mdash; Native Categorical &amp; Ordered Boosting
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Developed by Yandex, <strong>CatBoost</strong> (Categorical Boosting) revolutionizes tabular workflows containing string categories:
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs sm:text-sm text-stone-700">
            <h3 className="font-bold text-stone-900 font-mono uppercase">Ordered Target Statistics</h3>
            <p>Converts high-cardinality categories (e.g. City, ZIP) into target statistics without target leakage by computing historical averages over randomized permutations.</p>
          </div>
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs sm:text-sm text-stone-700">
            <h3 className="font-bold text-stone-900 font-mono uppercase">Ordered Boosting</h3>
            <p>Solves prediction shift: standard GBDT uses the same data to calculate gradients and fit trees; CatBoost uses permutations to keep gradient calculations unbiased.</p>
          </div>
        </div>
      </section>

      {/* SECTION 12 & 13: VOTING & STACKING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 12 &amp; 13
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Meta-Ensembles</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          12 &amp; 13. Voting Classifiers, Stacking &amp; Out-of-Fold (OOF) Predictions
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h3 className="text-xs font-bold font-mono text-orange-700 uppercase">Voting Classifiers (Hard vs. Soft)</h3>
            <ul className="text-xs text-stone-700 space-y-1.5">
              <li><strong>Hard Voting:</strong> Selects majority class across independent base models.</li>
              <li><strong>Soft Voting:</strong> Averages predicted probability vectors (requires calibrated models; generally superior).</li>
              <li><strong>Weighted Voting:</strong> Scales model contributions based on validation performance.</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h3 className="text-xs font-bold font-mono text-orange-700 uppercase">Stacking (Stacked Generalization)</h3>
            <ul className="text-xs text-stone-700 space-y-1.5">
              <li><strong>Level 0 Base Models:</strong> Multiple diverse models (e.g. Random Forest, LightGBM, Logistic Regression).</li>
              <li><strong>Level 1 Meta-Learner:</strong> A second-stage model (e.g. Logistic Regression) trained to combine base model predictions.</li>
              <li><strong>Out-of-Fold (OOF):</strong> K-fold cross-validation is mandatory to generate meta-features without in-sample leakage.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
          <code>
            from sklearn.ensemble import StackingClassifier, RandomForestClassifier, GradientBoostingClassifier<br />
            from sklearn.linear_model import LogisticRegression<br />
            from sklearn.model_selection import StratifiedKFold<br /><br />
            base_learners = [<br />
            &nbsp;&nbsp;("rf", RandomForestClassifier(n_estimators=200, random_state=42)),<br />
            &nbsp;&nbsp;("gb", GradientBoostingClassifier(n_estimators=100, random_state=42))<br />
            ]<br />
            stack = StackingClassifier(<br />
            &nbsp;&nbsp;estimators=base_learners,<br />
            &nbsp;&nbsp;final_estimator=LogisticRegression(),<br />
            &nbsp;&nbsp;cv=StratifiedKFold(n_splits=5, shuffle=True, random_state=42),<br />
            &nbsp;&nbsp;stack_method="predict_proba"<br />
            )<br />
            stack.fit(X_train, y_train)
          </code>
        </div>
      </section>

      {/* SECTION 14: MASTER COMPARISON */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Master Comparison</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          14. Comprehensive Ensemble Algorithm Comparison
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-700 font-bold font-mono">
                <th className="p-3">Algorithm</th>
                <th className="p-3">Family</th>
                <th className="p-3">Training Paradigm</th>
                <th className="p-3">Primary Advantage</th>
                <th className="p-3">Best Dataset Fit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Bagging</td>
                <td className="p-3">Bootstrap Aggregating</td>
                <td className="p-3">Parallel</td>
                <td className="p-3">Reduces variance of any base estimator</td>
                <td className="p-3">Unstable models</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Random Forest</td>
                <td className="p-3">Bagging + Random Subspaces</td>
                <td className="p-3">Parallel</td>
                <td className="p-3">Robust general-purpose baseline; minimal tuning</td>
                <td className="p-3">Tabular data with moderate size</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Extra Trees</td>
                <td className="p-3">Extremely Randomized Trees</td>
                <td className="p-3">Parallel</td>
                <td className="p-3">Faster training; high tree decorrelation</td>
                <td className="p-3">Noisy feature datasets</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">AdaBoost</td>
                <td className="p-3">Adaptive Boosting</td>
                <td className="p-3">Sequential</td>
                <td className="p-3">Focuses on difficult misclassified rows</td>
                <td className="p-3">Clean data; simple baselines</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Gradient Boosting</td>
                <td className="p-3">Gradient Tree Boosting</td>
                <td className="p-3">Sequential</td>
                <td className="p-3">Optimizes arbitrary differentiable losses</td>
                <td className="p-3">Structured datasets</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-orange-700">XGBoost</td>
                <td className="p-3">Second-Order GBDT</td>
                <td className="p-3">Sequential + Parallel splits</td>
                <td className="p-3">L1/L2 regularization; missing value routing</td>
                <td className="p-3">Tabular competitions &amp; production</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-orange-700">LightGBM</td>
                <td className="p-3">Histogram-Based GBDT</td>
                <td className="p-3">Sequential + Fast bins</td>
                <td className="p-3">Blazing fast; leaf-wise; low RAM footprint</td>
                <td className="p-3">Large tabular datasets (&gt;100k rows)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-orange-700">CatBoost</td>
                <td className="p-3">Categorical GBDT</td>
                <td className="p-3">Sequential + Permutations</td>
                <td className="p-3">Native categorical target statistics</td>
                <td className="p-3">Datasets rich in categorical strings</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Stacking</td>
                <td className="p-3">Stacked Generalization</td>
                <td className="p-3">Two-tier meta-learning</td>
                <td className="p-3">Extracts non-linear synergies between algorithms</td>
                <td className="p-3">Ensemble competitions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 15 & 16: PRACTICAL WORKFLOW & PITFALLS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 15 &amp; 16
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Practical Engineering</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          15 &amp; 16. Practical Implementation &amp; Critical Pitfalls
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-950 space-y-2">
            <h3 className="font-bold font-mono uppercase">Common Ensemble Traps</h3>
            <p><strong>1. In-Sample Stacking Leakage:</strong> Training meta-learners on in-sample base predictions causes massive overfitting. Always use Out-of-Fold (OOF) cross-validation.</p>
            <p><strong>2. Noisy Data in Boosting:</strong> AdaBoost and Gradient Boosting relentlessly chase outliers, overfitting corrupt labels. Use Huber loss or Random Forest on noisy data.</p>
            <p><strong>3. Cardinality Bias in Feature Importance:</strong> Never rely exclusively on MDI (Gini importance); corroborate with Permutation Feature Importance.</p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
            <h3 className="font-bold font-mono uppercase">Production Engineering Guidelines</h3>
            <p><strong>1. Small/Medium Tabular:</strong> Start with Random Forest for a robust, zero-configuration benchmark.</p>
            <p><strong>2. Large Tabular (&gt;100K Rows):</strong> Use LightGBM with histogram binning and early stopping.</p>
            <p><strong>3. Heavy Categorical Columns:</strong> Use CatBoost with <code>cat_features</code> parameter.</p>
            <p><strong>4. Class Imbalance:</strong> Pass <code>class_weight='balanced'</code> or scale positive weight in XGBoost (<code>scale_pos_weight</code>).</p>
          </div>
        </div>
      </section>

      {/* SECTION 18 & 19: INTERVIEW PREP & FINAL ROADMAP */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 18 &ndash; 20
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Assessment &amp; Roadmap</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          18 &ndash; 20. Machine Learning Engineering Interview Questions
        </h2>
        <div className="mt-6 space-y-4">
          {[
            { q: "Why does Random Forest reduce variance while Boosting reduces bias?", a: "Random Forest averages uncorrelated trees trained on independent bootstrap samples, which mathematically decreases prediction variance by 1/M. Boosting fits trees sequentially to residual errors or loss gradients, allowing subsequent learners to capture patterns missed by earlier models, directly decreasing bias." },
            { q: "What is the 63.2% rule in bootstrap sampling?", a: "When drawing N samples with replacement from N records, the probability of any given sample being excluded is (1 - 1/N)^N ≈ e^(-1) ≈ 36.8%. The remaining 63.2% of samples appear at least once, leaving 36.8% for Out-of-Bag (OOB) validation." },
            { q: "How do XGBoost, LightGBM, and CatBoost fundamentally differ?", a: "XGBoost uses exact or approximate second-order Taylor gradients with L1/L2 leaf regularization. LightGBM uses histogram binning, leaf-wise growth, GOSS, and EFB for blazing speed. CatBoost uses ordered target statistics and ordered boosting over permutations to natively model categorical features without leakage." },
            { q: "Why are Out-of-Fold (OOF) predictions mandatory in Stacking?", a: "If meta-features are generated using training data that base models have already seen, base models will output overly optimistic predictions. The meta-learner will overfit to this in-sample certainty, causing generalization failure on genuine test data." },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm">
              <div className="font-bold text-stone-900 font-mono">Q: {item.q}</div>
              <div className="text-stone-700 mt-1 leading-relaxed"><strong>A:</strong> {item.a}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-orange-950 font-medium">
          Ready for live practice? Switch to the <strong>Interactive Workbenches &amp; Assessment</strong> tab above to launch the Bagging vs Boosting Simulator, the Random Forest Hyperparameter Lab, the Modern Gradient Boosting Comparator, and the 10-Question Knowledge Exam!
        </div>
      </section>
    </div>
  );
}
