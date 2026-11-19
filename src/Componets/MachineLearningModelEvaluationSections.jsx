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
  PieChart,
  Split,
  RefreshCw,
  Search,
} from "lucide-react";

export default function MachineLearningModelEvaluationSections() {
  return (
    <div className="space-y-12">
      {/* SECTION 1: INTRODUCTION TO MODEL EVALUATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 01
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Validation Foundations</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          1. Introduction to Model Evaluation
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Model Evaluation is the systematic process of measuring how well a machine learning system performs on data and determining whether it can make accurate, reliable predictions on previously unseen observations. Training a model is straightforward; verifying that it learns generalizable real-world patterns rather than memorizing training artifacts is the core responsibility of machine learning engineering.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
            <h3 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
              <ShieldCheck size={16} className="text-orange-600" />
              The Production Dilemma: Fraud Detection
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Suppose a fraud model achieves <strong>99.4% training accuracy</strong>. In an imbalanced environment where 99.5% of transactions are legitimate, a useless dummy model that flags zero transactions as fraud achieves 99.5% accuracy. Without rigorous evaluation (Precision, Recall, PR-AUC), this defective model would cause millions in fraud losses if deployed.
            </p>
          </div>

          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
            <h3 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
              <Cpu size={16} className="text-emerald-600" />
              End-to-End Evaluation Workflow
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Raw Data &rarr; Stratified Split (Train, Validation, Holdout Test) &rarr; Pipeline-based Feature Preprocessing &rarr; Cross-Validation Model Comparison &rarr; Hyperparameter Optimization &rarr; Learning Curve Diagnosis &rarr; Final Holdout Verification.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: SPLITTING STRATEGY & DATA LEAKAGE */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 02 &amp; 03
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Data Hygiene &amp; Partitioning</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          2 &amp; 3. Dataset Splitting Strategy &amp; Preventing Data Leakage
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          To evaluate models objectively, data must be partitioned into three strictly independent sets. Evaluating models on data they have already learned from produces severe confirmation bias.
        </p>

        {/* 3 Split Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-stone-400 uppercase text-[10px] block">1. Training Set (70% &ndash; 80%)</span>
            <span className="font-bold text-stone-900 text-sm font-sans block mt-1">Parameter Learning</span>
            <p className="text-stone-600 font-sans text-[11px] mt-2 leading-relaxed">
              Used directly by the algorithm to learn internal parameters (weights w, biases b, tree splits, or class priors).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200">
            <span className="text-orange-700 uppercase text-[10px] block">2. Validation Set (10% &ndash; 15%)</span>
            <span className="font-bold text-orange-950 text-sm font-sans block mt-1">Hyperparameter Tuning</span>
            <p className="text-stone-600 font-sans text-[11px] mt-2 leading-relaxed">
              Used during active development to compare candidate algorithms, tune hyperparameters (C, max_depth), and pick feature subsets.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <span className="text-emerald-700 uppercase text-[10px] block">3. Test Set (10% &ndash; 15%)</span>
            <span className="font-bold text-emerald-950 text-sm font-sans block mt-1">Final Generalization Audit</span>
            <p className="text-stone-600 font-sans text-[11px] mt-2 leading-relaxed">
              Locked in a metaphorical vault. Evaluated exactly once after all engineering decisions are finalized to provide an unbiased generalization score.
            </p>
          </div>
        </div>

        {/* Data Leakage Warning */}
        <div className="mt-6 p-5 rounded-2xl bg-rose-50/50 border border-rose-200">
          <h3 className="font-bold text-rose-950 text-sm mb-2 flex items-center gap-2">
            <AlertTriangle size={16} className="text-rose-600" />
            The Silent Killer: Data Leakage in Preprocessing
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            Data leakage occurs when information from outside the training fold influences model estimation. The most common junior mistake is applying <code>StandardScaler().fit_transform(X)</code> on the entire dataset prior to splitting. This incorporates future test-set statistics (&mu;, &sigma;) into the training features.
          </p>
          <div className="mt-3 bg-[#1c1917] p-3.5 rounded-xl font-mono text-xs text-stone-200 space-y-1">
            <div className="text-rose-400"># FATAL LEAKAGE: Scaler computes statistics over entire dataset X</div>
            <div className="text-stone-400">X_scaled = StandardScaler().fit_transform(X) &nbsp;<span className="text-rose-500"># WRONG!</span></div>
            <div className="text-emerald-400 mt-2"># LEAK-FREE FIX: Encapsulate within a Scikit-Learn Pipeline</div>
            <div className="text-stone-300">
              model = Pipeline([("scaler", StandardScaler()), ("clf", LogisticRegression())])<br />
              model.fit(X_train, y_train) &nbsp;&nbsp;<span className="text-stone-500"># Fits scaler strictly on X_train</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 TO 10: REGRESSION EVALUATION METRICS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 04 &ndash; 10
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Continuous Error Formulations</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          4 &ndash; 10. Regression Metrics: MAE, MSE, RMSE, R&sup2; &amp; Adjusted R&sup2;
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          In regression tasks, residuals <code>eᵢ = yᵢ - &ycirc;ᵢ</code> represent prediction errors. Different mathematical metrics emphasize different aspects of residual behavior.
        </p>

        {/* Metric Cards Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-stone-400 uppercase text-[10px] block">Mean Absolute Error</span>
            <span className="font-bold text-stone-900 text-sm font-sans block mt-1">MAE = (1/N) &Sigma; |yᵢ - &ycirc;ᵢ|</span>
            <p className="text-stone-600 font-sans text-[11px] mt-2 leading-relaxed">
              Linear penalty. Directly interpretable in original units. Robust to extreme outliers.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-stone-400 uppercase text-[10px] block">Mean Squared Error</span>
            <span className="font-bold text-stone-900 text-sm font-sans block mt-1">MSE = (1/N) &Sigma; (yᵢ - &ycirc;ᵢ)&sup2;</span>
            <p className="text-stone-600 font-sans text-[11px] mt-2 leading-relaxed">
              Quadratic penalty. Highly sensitive to outliers. Expressed in squared units (e.g. ₹&sup2;).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200">
            <span className="text-orange-700 uppercase text-[10px] block">Root Mean Squared Error</span>
            <span className="font-bold text-orange-950 text-sm font-sans block mt-1">RMSE = &radic;MSE</span>
            <p className="text-stone-600 font-sans text-[11px] mt-2 leading-relaxed">
              Gold standard. Penalizes large errors heavily while restoring original target units.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-stone-400 uppercase text-[10px] block">Coeff. of Determination</span>
            <span className="font-bold text-stone-900 text-sm font-sans block mt-1">R&sup2; = 1 - (SS_res / SS_tot)</span>
            <p className="text-stone-600 font-sans text-[11px] mt-2 leading-relaxed">
              Proportion of variance explained relative to a mean-prediction baseline. Can be negative on test sets.
            </p>
          </div>
        </div>

        {/* Adjusted R2 Formula */}
        <div className="mt-6 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-2">
          <h4 className="font-bold text-stone-900">Adjusted R&sup2; (Penalizing Feature Bloat):</h4>
          <div className="font-mono bg-white p-2.5 rounded-lg border border-stone-200 text-stone-900 text-xs">
            R&sup2;<sub>adj</sub> = 1 - (1 - R&sup2;) &middot; [(N - 1) / (N - p - 1)]
          </div>
          <p className="text-stone-600 text-xs leading-relaxed">
            In Ordinary Least Squares (OLS), adding redundant features will never decrease ordinary R&sup2;. Adjusted R&sup2; introduces a penalty term for predictor count <code>p</code>, dropping if an added feature fails to provide genuine explanatory gain.
          </p>
        </div>
      </section>

      {/* SECTION 11 TO 17: CLASSIFICATION METRICS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 11 &ndash; 17
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Categorical Discrimination</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          11 &ndash; 17. Confusion Matrix, Precision, Recall &amp; F1-Score
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          In binary classification, predictions fall into four quadrant outcomes. Deciding which errors to minimize depends on the business domain.
        </p>

        {/* 2x2 Matrix Visual */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-center border-collapse text-xs sm:text-sm font-mono">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50">
                <th className="p-3 text-left font-bold text-stone-700">Actual \ Predicted</th>
                <th className="p-3 font-bold text-orange-700">Predicted Positive (Fraud)</th>
                <th className="p-3 font-bold text-stone-700">Predicted Negative (Legit)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-600">
              <tr>
                <td className="p-3 text-left font-bold text-stone-900">Actual Positive (Fraud)</td>
                <td className="p-3 bg-emerald-50/60 text-emerald-950 font-bold">
                  True Positive (TP)<br />
                  <span className="font-sans font-normal text-[11px] text-stone-600">Correctly detected fraud</span>
                </td>
                <td className="p-3 bg-rose-50/60 text-rose-950 font-bold">
                  False Negative (FN)<br />
                  <span className="font-sans font-normal text-[11px] text-rose-700">Type II Error &bull; Missed fraud</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 text-left font-bold text-stone-900">Actual Negative (Legit)</td>
                <td className="p-3 bg-amber-50/60 text-amber-950 font-bold">
                  False Positive (FP)<br />
                  <span className="font-sans font-normal text-[11px] text-amber-700">Type I Error &bull; False alarm</span>
                </td>
                <td className="p-3 bg-emerald-50/60 text-emerald-950 font-bold">
                  True Negative (TN)<br />
                  <span className="font-sans font-normal text-[11px] text-stone-600">Correctly identified legit</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Formulas Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-stone-500 uppercase block mb-1">Precision</span>
            <span className="text-base font-bold text-stone-900 font-sans block">TP / (TP + FP)</span>
            <p className="text-stone-600 font-sans text-[11px] mt-1">
              Out of all positive predictions, how many were correct? Prioritize when False Positives are expensive (Spam filter).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-stone-500 uppercase block mb-1">Recall (Sensitivity)</span>
            <span className="text-base font-bold text-stone-900 font-sans block">TP / (TP + FN)</span>
            <p className="text-stone-600 font-sans text-[11px] mt-1">
              Out of all actual positive cases, how many were detected? Prioritize when False Negatives are fatal (Cancer screening).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200">
            <span className="text-orange-700 uppercase block mb-1">F1-Score (Harmonic Mean)</span>
            <span className="text-base font-bold text-orange-950 font-sans block">2 &middot; (P &middot; R) / (P + R)</span>
            <p className="text-stone-600 font-sans text-[11px] mt-1">
              Harmonic mean heavily penalizes extreme imbalances between Precision and Recall.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 18 & 19: ROC-AUC VS PR-AUC */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 18 &amp; 19
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Ranking Curves</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          18 &amp; 19. ROC-AUC vs. Precision-Recall (PR) Curves
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          ROC curves evaluate ranking capability by plotting True Positive Rate (TPR) against False Positive Rate (FPR). However, when evaluating rare events, the Precision-Recall curve is dramatically more informative.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50">
                <th className="p-3 font-mono font-bold text-stone-700">Dimension</th>
                <th className="p-3 font-mono font-bold text-stone-700">ROC Curve (Receiver Operating Characteristic)</th>
                <th className="p-3 font-mono font-bold text-stone-700">Precision-Recall (PR) Curve</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-600">
              <tr>
                <td className="p-3 font-bold text-stone-900">Axes Plotted</td>
                <td className="p-3 font-mono">TPR vs. FPR (FP / (FP + TN))</td>
                <td className="p-3 font-mono">Precision vs. Recall</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Random Baseline AUC</td>
                <td className="p-3 font-mono">AUC = 0.50 (Diagonal straight line)</td>
                <td className="p-3 font-mono">AUC = Positive Class Prevalence (e.g. 0.01 for 1% fraud)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Sensitivity to Rare Classes</td>
                <td className="p-3 text-rose-700">Deceptively optimistic &mdash; huge TN count keeps FPR tiny</td>
                <td className="p-3 text-emerald-700 font-bold">Highly sensitive &mdash; directly exposes false alarm surges</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Optimal Use Case</td>
                <td className="p-3">Balanced classification &amp; overall discriminative ranking</td>
                <td className="p-3 font-semibold text-orange-700">Heavily imbalanced rare positive detection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 21 TO 26: CROSS-VALIDATION ARCHITECTURES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 21 &ndash; 26
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Resampling &amp; Nested CV</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          21 &ndash; 26. Cross-Validation Strategies &amp; Nested CV
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Cross-validation mitigates sampling variance by training and testing models over multiple rotating partitions. Choosing the correct splitter prevents catastrophic real-world failure.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="font-bold text-stone-900 block font-sans text-sm mb-1">1. Stratified K-Fold</span>
            <p className="text-stone-600 font-sans leading-relaxed">
              Maintains identical class proportions in every fold. Mandatory default for classification tasks with imbalanced target labels.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="font-bold text-stone-900 block font-sans text-sm mb-1">2. Group K-Fold</span>
            <p className="text-stone-600 font-sans leading-relaxed">
              Ensures multiple records from the same patient, device, or user never cross between training and validation folds, eliminating identity leakage.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="font-bold text-stone-900 block font-sans text-sm mb-1">3. TimeSeriesSplit</span>
            <p className="text-stone-600 font-sans leading-relaxed">
              Enforces strict temporal forward-chaining (train on past, validate on future). Random shuffling in time-series data is fatal data snooping.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="font-bold text-stone-900 block font-sans text-sm mb-1">4. Bootstrap Validation (.632 Rule)</span>
            <p className="text-stone-600 font-sans leading-relaxed">
              Samples with replacement. Approximately 63.2% of original samples appear in the training set; 36.8% act as Out-of-Bag (OOB) validation.
            </p>
          </div>
        </div>

        {/* Nested CV Explanation */}
        <div className="mt-6 bg-[#1c1917] p-5 rounded-2xl border border-stone-800 text-stone-100 font-mono text-xs space-y-2">
          <div className="text-orange-400 font-bold"># Nested Cross-Validation (Eliminating Hyperparameter Selection Bias)</div>
          <div className="text-stone-300">
            inner_cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42) &nbsp;&nbsp;<span className="text-stone-500"># Tunes hyperparameters</span><br />
            outer_cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=101) &nbsp;<span className="text-stone-500"># Evaluates generalization</span><br />
            <br />
            search = GridSearchCV(estimator=pipeline, param_grid=grid, cv=inner_cv)<br />
            nested_scores = cross_val_score(search, X, y, cv=outer_cv, scoring="roc_auc")<br />
            print("Unbiased Generalization ROC-AUC: &#123;:.4f&#125; &plusmn; &#123;:.4f&#125;".format(nested_scores.mean(), nested_scores.std()))
          </div>
        </div>
      </section>

      {/* SECTION 27: LEARNING CURVES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 27
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Empirical Diagnostics</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          27. Learning Curve Diagnostics: Bias vs. Variance
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Learning curves plot training score and cross-validation score against increasing sample sizes. They diagnose whether model bottlenecks stem from <strong>underfitting (high bias)</strong> or <strong>overfitting (high variance)</strong>.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-stone-500 font-bold uppercase block mb-1">High Bias (Underfitting)</span>
            <span className="text-sm font-bold text-stone-900 font-sans block mb-2">Both Curves Plateau Low</span>
            <p className="text-stone-600 font-sans text-[11px] leading-relaxed">
              Training and validation curves converge early at low performance. Collecting more data will NOT help. Increase model capacity or add interaction features.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-stone-500 font-bold uppercase block mb-1">High Variance (Overfitting)</span>
            <span className="text-sm font-bold text-stone-900 font-sans block mb-2">Massive Generalization Gap</span>
            <p className="text-stone-600 font-sans text-[11px] leading-relaxed">
              Training score near 100%, validation score substantially lower. Collecting additional training data or applying stronger regularization will close the gap.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <span className="text-emerald-700 font-bold uppercase block mb-1">Optimal Generalization</span>
            <span className="text-sm font-bold text-emerald-950 font-sans block mb-2">Tight High Convergence</span>
            <p className="text-stone-600 font-sans text-[11px] leading-relaxed">
              Both training and validation scores converge at a high performance plateau with minimal residual gap.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 36: INTERVIEW PREPARATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 36
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Technical Interview Q&amp;A</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          36. High-Frequency Machine Learning Interview Questions
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Core theoretical and engineering questions frequently asked in Senior ML Engineer and Data Science interviews:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              q: "Q1: Can R² be negative, and what does it indicate when evaluated on holdout test data?",
              a: "Yes. In Scikit-learn, R² = 1 - (SS_res / SS_tot). If the model's test predictions are worse than simply predicting the historical training mean (ȳ) for every test sample, SS_res > SS_tot, resulting in a negative R². It indicates severe overfitting or broken data distribution assumptions.",
            },
            {
              q: "Q2: In an imbalanced fraud dataset (0.2% positive), why does ROC-AUC look excellent while the model performs terribly in practice?",
              a: "FPR = FP / (FP + TN). When TN is 500,000 legitimate transactions, generating 5,000 false alarms produces an FPR of only 1%, yielding a deceptively high ROC-AUC. However, with only 1,000 actual frauds, those 5,000 false alarms drop Precision to 16%, swamping human investigators. Precision-Recall curves expose this flaw.",
            },
            {
              q: "Q3: What is selection bias in standard cross-validation and how does Nested CV resolve it?",
              a: "When tuning 100 hyperparameter combinations via 5-fold CV, the winning configuration is selected based on those validation folds, introducing optimistic selection bias. Nested Cross-Validation adds an outer loop: the inner loop selects the best hyperparameters, and the outer holdout folds evaluate the model-selection process without bias.",
            },
            {
              q: "Q4: What is the difference between Macro F1, Micro F1, and Weighted F1 in multiclass problems?",
              a: "Macro F1 calculates the unweighted mean of F1 scores across classes, giving equal weight to minority and majority classes. Micro F1 pools total TP, FP, and FN across all classes (identical to global accuracy). Weighted F1 averages class F1 scores weighted by class support (prevalence).",
            },
            {
              q: "Q5: When would you use GroupKFold vs TimeSeriesSplit?",
              a: "Use GroupKFold when samples are non-independent because they come from repeated observations of the same entity (e.g., multiple medical images per patient). Use TimeSeriesSplit when observations have chronological order, ensuring the training set strictly precedes the validation fold to avoid future leakage.",
            },
          ].map((item, idx) => (
            <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm mb-2">{item.q}</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 37: MASTERY CHECKLIST */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 37
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Core Competency Audit</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          37. Module 12 Evaluation Mastery Checklist
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Confirm your mastery of model validation and cross-validation architectures:
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {[
            "Formulate 70/15/15 train-validation-test partitioning protocols",
            "Prevent data leakage using Scikit-learn Pipeline encapsulation",
            "Calculate MAE, MSE, RMSE, R², and Adjusted R² for regression",
            "Construct confusion matrices and extract TP, TN, FP, and FN",
            "Analyze Precision, Recall, and F1-score trade-offs across thresholds",
            "Plot and interpret ROC-AUC vs. Precision-Recall curves",
            "Execute Stratified K-Fold, Group K-Fold, and TimeSeriesSplit",
            "Implement Bootstrap Validation with Out-of-Bag (OOB) .632 estimation",
            "Build two-tier Nested Cross-Validation to eliminate selection bias",
            "Diagnose High Bias vs. High Variance using Learning Curves",
            "Execute GridSearchCV and RandomizedSearchCV multi-metric searches",
            "Compute Macro, Micro, and Weighted multiclass F1 metrics",
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
