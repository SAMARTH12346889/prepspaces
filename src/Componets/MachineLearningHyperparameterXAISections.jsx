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
  HelpCircle,
  Scale,
  Brain,
  ShieldAlert,
  Percent,
  FlaskConical,
  BookOpen,
  GitCompare,
  Binary,
  Microscope,
  Share2,
} from "lucide-react";

export default function MachineLearningHyperparameterXAISections() {
  return (
    <div className="space-y-8">
      {/* PART 1: MODEL SELECTION & HYPERPARAMETER OPTIMIZATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Target size={14} />
          <span>Part 1 &bull; Model Selection &amp; Cross-Validation</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          1. Model Selection Strategies &amp; Leak-Free Cross-Validation
        </h2>
        <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-orange-950 flex items-start gap-3">
          <Sparkles className="text-orange-600 shrink-0 mt-0.5" size={16} />
          <div>
            <strong>Core Insight:</strong> Model selection chooses the optimal model family (e.g. Random Forest vs. XGBoost), while hyperparameter optimization configures that family. Robust evaluation requires isolating data splits and nesting cross-validation to prevent data leakage.
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <h3 className="text-base font-bold text-stone-900">1.1 Model Parameters vs. Hyperparameters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-mono font-bold text-orange-700 text-xs uppercase">Model Parameters (Learned)</div>
              <p className="text-xs text-stone-600">
                Coefficients and weights estimated automatically from training data via loss minimization.
              </p>
              <ul className="list-disc list-inside text-xs text-stone-500 space-y-1">
                <li>Linear Regression coefficients (w) and intercept (b)</li>
                <li>Splitting rules and thresholds in trained Decision Trees</li>
                <li>Weight matrices and biases in deep neural networks</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-mono font-bold text-orange-700 text-xs uppercase">Hyperparameters (Tuned)</div>
              <p className="text-xs text-stone-600">
                Configuration knobs specified externally by the engineer to guide the training algorithm.
              </p>
              <ul className="list-disc list-inside text-xs text-stone-500 space-y-1">
                <li>Number of estimators (n_estimators) in Random Forest</li>
                <li>Maximum tree depth (max_depth) and minimum split samples</li>
                <li>Learning rate (&eta;), regularization strength (&lambda;, C), and batch size</li>
              </ul>
            </div>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">1.2 Five Critical Cross-Validation Strategies</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-xl overflow-hidden">
              <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                <tr>
                  <th className="p-3">Strategy</th>
                  <th className="p-3">Splitting Mechanism</th>
                  <th className="p-3">Primary Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="p-3 font-semibold">Holdout Train-Val-Test</td>
                  <td className="p-3">70% train, 15% validation, 15% independent test</td>
                  <td className="p-3">Very large datasets where K-Fold is computationally prohibitive</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">K-Fold Cross-Validation</td>
                  <td className="p-3 font-mono">CV_score = (1/K) &sum; Score_i across K equal folds</td>
                  <td className="p-3">Standard tabular regression and balanced classification</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Stratified K-Fold</td>
                  <td className="p-3">Preserves target class distribution in each fold</td>
                  <td className="p-3">Imbalanced classification (e.g. 2% fraud vs 98% legitimate)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">TimeSeriesSplit (Walk-Forward)</td>
                  <td className="p-3 font-mono">Train on [1..t], validate on [t+1]; no future lookahead</td>
                  <td className="p-3">Temporal forecasting, stock prices, demand prediction</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Nested Cross-Validation</td>
                  <td className="p-3">Inner loop tunes hyperparameters; outer loop evaluates generalization</td>
                  <td className="p-3">Unbiased model comparison on small/medium research datasets</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 2: HYPERPARAMETER OPTIMIZATION (GRID, RANDOM, BAYESIAN, OPTUNA) */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Sliders size={14} />
          <span>Section 02 &bull; Optimization Frameworks</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          2. Hyperparameter Optimization: Grid, Random, Bayesian &amp; Optuna
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Hyperparameter optimization searches for the optimal configuration &theta;<sup>*</sup> &isin; &Theta; maximizing validation performance:
          </p>
          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
            &theta;<sup>*</sup> = argmax<sub>&theta; &isin; &Theta;</sub> f(&theta;)
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">2.1 Grid Search vs. Randomized Search</h3>
          <p>
            Grid Search evaluates every combination on a Cartesian product grid. If 5 hyperparameters each have 5 values, the grid requires 5<sup>5</sup> = 3,125 fits.
            Randomized Search samples configurations from probability distributions, testing unique values across all dimensions on every trial.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-mono font-bold text-orange-700 text-xs">GridSearchCV</div>
              <pre className="bg-stone-900 text-stone-100 p-3 rounded-lg text-[11px] font-mono overflow-x-auto">
{`from sklearn.model_selection import GridSearchCV
param_grid = {
    "n_estimators": [100, 200, 300],
    "max_depth": [5, 10, 15],
    "min_samples_split": [2, 5]
}
grid = GridSearchCV(model, param_grid, scoring="f1", cv=5, n_jobs=-1)
grid.fit(X_train, y_train)`}
              </pre>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-mono font-bold text-orange-700 text-xs">RandomizedSearchCV</div>
              <pre className="bg-stone-900 text-stone-100 p-3 rounded-lg text-[11px] font-mono overflow-x-auto">
{`from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import randint
param_dist = {
    "n_estimators": randint(100, 500),
    "max_depth": [5, 10, 15, None],
    "min_samples_split": randint(2, 15)
}
rand = RandomizedSearchCV(model, param_dist, n_iter=30, scoring="f1", cv=5)
rand.fit(X_train, y_train)`}
              </pre>
            </div>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">2.2 Bayesian Optimization &amp; Optuna</h3>
          <p>
            Bayesian optimization replaces blind search with a probabilistic surrogate model (e.g. Gaussian Process or Tree-structured Parzen Estimator, TPE) that learns the relationship between hyperparameters &theta; and metric f(&theta;). An <strong>acquisition function</strong> (such as Expected Improvement, EI) balances exploration of uncertain regions and exploitation of known high-performing areas.
          </p>

          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto space-y-1">
            <div className="text-stone-400"># Production Optuna Objective with TPE &amp; Pruning:</div>
            <div>import optuna</div>
            <div>from sklearn.ensemble import RandomForestClassifier</div>
            <div>from sklearn.model_selection import cross_val_score</div>
            <br />
            <div>def objective(trial):</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;n_estimators = trial.suggest_int(&quot;n_estimators&quot;, 100, 500)</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;max_depth = trial.suggest_int(&quot;max_depth&quot;, 3, 20)</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;min_samples_split = trial.suggest_int(&quot;min_samples_split&quot;, 2, 15)</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;model = RandomForestClassifier(n_estimators=n_estimators, max_depth=max_depth, min_samples_split=min_samples_split, random_state=42)</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;scores = cross_val_score(model, X_train, y_train, cv=5, scoring=&quot;f1&quot;)</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;return scores.mean()</div>
            <br />
            <div>study = optuna.create_study(direction=&quot;maximize&quot;)</div>
            <div>study.optimize(objective, n_trials=50)</div>
            <div>print(&quot;Best Params:&quot;, study.best_params)</div>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">2.3 Successive Halving &amp; Early Stopping</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="font-bold text-orange-700 text-xs uppercase">Successive Halving (Tournament Search)</div>
              <p className="text-xs text-stone-600">
                Starts with many candidate configurations evaluated on minimal resources (e.g. 500 samples). Top 1/factor candidates advance to the next round with factor &times; more resources. Implemented via Scikit-learn&rsquo;s <code>HalvingRandomSearchCV</code>.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="font-bold text-orange-700 text-xs uppercase">Early Stopping (Overfitting Termination)</div>
              <p className="text-xs text-stone-600">
                Monitors validation loss across training epochs. Halts training when validation progress fails to improve for <code>patience</code> consecutive steps, restoring best weights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: MODEL CALIBRATION & DECISION OPTIMIZATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Activity size={14} />
          <span>Part 2 &bull; Reliability &amp; Thresholds</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          3, 4 &amp; 5. Probability Calibration &amp; Decision Threshold Optimization
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <h3 className="text-base font-bold text-stone-900">3 &amp; 4. What is Model Calibration?</h3>
          <p>
            Accuracy measures whether &ycirc; matches y. <strong>Calibration</strong> measures whether predicted probabilities P(Y=1|X) correspond to true empirical frequencies. If a loan model assigns 80% default probability to 1,000 applicants, exactly ~800 should default.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-bold text-orange-700 text-xs uppercase">Platt Scaling (Sigmoid)</div>
              <p className="text-xs text-stone-600 font-mono">P(Y=1|f) = 1 / (1 + exp(Af + B))</p>
              <p className="text-xs text-stone-600">
                Fits a 1D logistic regression over model decision values f. Parametric; ideal for small-to-medium calibration sets.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-bold text-orange-700 text-xs uppercase">Isotonic Regression</div>
              <p className="text-xs text-stone-600 font-mono">Non-parametric monotonic step mapping</p>
              <p className="text-xs text-stone-600">
                Fits a non-decreasing piecewise-constant function. Extremely flexible; requires &ge;1,000 samples to prevent overfitting.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-bold text-orange-700 text-xs uppercase">Temperature Scaling</div>
              <p className="text-xs text-stone-600 font-mono">Softmax(z<sub>k</sub> / T)</p>
              <p className="text-xs text-stone-600">
                Divides neural network logits by scalar T &gt; 0 before softmax. Softens overconfident deep neural network probabilities without altering top-1 ranking.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto space-y-1">
            <div className="text-stone-400"># Scikit-learn CalibratedClassifierCV Implementation:</div>
            <div>from sklearn.calibration import CalibratedClassifierCV, CalibrationDisplay</div>
            <div>calibrated_model = CalibratedClassifierCV(estimator=base_model, method=&quot;sigmoid&quot;, cv=5)</div>
            <div>calibrated_model.fit(X_train, y_train)</div>
            <div>CalibrationDisplay.from_estimator(calibrated_model, X_test, y_test, n_bins=10)</div>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">5. Decision Threshold Optimization</h3>
          <p>
            By default, binary classifiers predict class 1 if P &ge; 0.5. However, in fraud detection, a False Negative (missing $10,000 fraud) is 50&times; more expensive than a False Positive ($20 review cost). The decision threshold t must minimize total expected business loss:
          </p>
          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
            Expected Cost(t) = C<sub>FP</sub> &middot; FP(t) + C<sub>FN</sub> &middot; FN(t)
          </div>
          <p className="text-xs text-stone-600">
            Scikit-learn provides <code>TunedThresholdClassifierCV</code> to tune decision thresholds directly via cross-validation to maximize business F1 or minimize asymmetric operational costs.
          </p>
        </div>
      </section>

      {/* PART 3: EXPLAINABLE MACHINE LEARNING (XAI) */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Eye size={14} />
          <span>Part 3 &bull; Explainability (XAI)</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          6, 7 &amp; 8. Global vs. Local Interpretability &amp; Permutation Importance
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-mono font-bold text-orange-700 text-xs uppercase">Global Interpretability</div>
              <p className="text-xs text-stone-600">
                Explains model behavior across the entire population. Answers: Which features drive predictions on average? What global nonlinear relationships has the model synthesized?
              </p>
              <div className="text-[11px] text-stone-500 font-mono">Tools: Permutation Importance, PDP, SHAP summary plots</div>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-mono font-bold text-orange-700 text-xs uppercase">Local Interpretability</div>
              <p className="text-xs text-stone-600">
                Explains an individual prediction for a specific instance. Answers: Why was Jane Doe&rsquo;s loan application denied? Which specific features pushed the score past the rejection threshold?
              </p>
              <div className="text-[11px] text-stone-500 font-mono">Tools: SHAP Waterfall, LIME, ICE plots, Counterfactuals</div>
            </div>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">8. Permutation Feature Importance</h3>
          <p>
            Permutation importance randomly shuffles feature column j on the validation/test set, destroying its relationship with target y, and measures the decrease in score:
          </p>
          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
            Importance<sub>j</sub> = Score<sub>baseline</sub> &minus; Score<sub>permuted, j</sub>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950">
            <strong>Pitfall with Correlated Features:</strong> If two features are collinear (e.g. annual salary and monthly salary), shuffling one leaves the other intact, causing the model to preserve accuracy and artificially under-reporting the true importance of both features!
          </div>
        </div>
      </section>

      {/* SECTION 9 & 10: PDP, ICE, SHAP */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Brain size={14} />
          <span>Sections 9 &amp; 10 &bull; PDP, ICE &amp; SHAP</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          9 &amp; 10. Partial Dependence Plots (PDP), ICE &amp; SHAP Foundations
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <h3 className="text-base font-bold text-stone-900">9. Partial Dependence (PDP) vs. Individual Conditional Expectation (ICE)</h3>
          <p>
            PDP shows the marginal effect of feature X<sub>j</sub> on predicted outcome f(X) by averaging predictions across all instances:
          </p>
          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
            PD(X<sub>j</sub>) = &Eopf;<sub>X<sub>&minus;j</sub></sub>[f(X<sub>j</sub>, X<sub>&minus;j</sub>)]
          </div>
          <p>
            While PDP displays the aggregate population curve, <strong>ICE plots</strong> display individual curves for every single row in the dataset, exposing heterogeneous interactions that an average PDP curve would otherwise smooth out.
          </p>

          <h3 className="text-base font-bold text-stone-900 pt-2">10. SHAP (SHapley Additive exPlanations)</h3>
          <p>
            Rooted in Lloyd Shapley&rsquo;s 1953 cooperative game theory (Nobel Prize), SHAP distributes the payout (model prediction f(x) &minus; base rate &phi;<sub>0</sub>) among players (features) according to their average marginal contribution across all possible coalitions S &sube; F \ &#123;i&#125;:
          </p>
          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto space-y-1">
            <div>&phi;<sub>i</sub> = &sum;<sub>S &sube; F \ &#123;i&#125;</sub> [ |S|! (|F| &minus; |S| &minus; 1)! / |F|! ] &middot; [ f(S &cup; &#123;i&#125;) &minus; f(S) ]</div>
            <div className="text-stone-400 text-[11px]">Additive Property: f(x) = &phi;<sub>0</sub> + &sum;<sub>i=1..M</sub> &phi;<sub>i</sub></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">Beeswarm Plot</div>
              <p className="text-xs text-stone-600">Displays distribution of SHAP values across rows; points colored by feature value show directional impact.</p>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">Waterfall Plot</div>
              <p className="text-xs text-stone-600">Local explanation showing how each feature pushes a single prediction from baseline &phi;<sub>0</sub> to f(x).</p>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">Bar Plot</div>
              <p className="text-xs text-stone-600">Ranks global feature importance by mean absolute SHAP value: mean(|&phi;<sub>i</sub>|).</p>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">Dependence Plot</div>
              <p className="text-xs text-stone-600">Plots feature value vs SHAP value with automatic interaction color coding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PART 4: MODEL DEBUGGING & RESPONSIBLE ML */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <ShieldAlert size={14} />
          <span>Part 4 &bull; Responsible ML &amp; Auditing</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          12 &amp; 13. Systematic Error Analysis &amp; Fairness / Bias Evaluation
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <h3 className="text-base font-bold text-stone-900">12. Slice-Based Error Analysis</h3>
          <p>
            High aggregate accuracy (e.g. 94%) often conceals critical failure modes in underrepresented cohorts. Error analysis partitions mistakes into False Positives and False Negatives, slicing errors across demographics, loan amounts, and temporal slices to uncover systemic blindspots.
          </p>

          <h3 className="text-base font-bold text-stone-900 pt-2">13. Mathematical Fairness Metrics</h3>
          <p>
            Removing protected attributes (e.g. race, gender, age) does <em>not</em> prevent bias because proxy features (postal code, school, employment history) encode equivalent information. Machine learning audits evaluate four primary fairness criteria:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-xl overflow-hidden">
              <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                <tr>
                  <th className="p-3">Fairness Criterion</th>
                  <th className="p-3">Mathematical Definition</th>
                  <th className="p-3">Audit Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="p-3 font-semibold">Demographic Parity</td>
                  <td className="p-3 font-mono">P(&ycirc;=1 | A=a) &approx; P(&ycirc;=1 | A=b)</td>
                  <td className="p-3">Equal selection/approval rates across groups regardless of qualifications</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Equal Opportunity</td>
                  <td className="p-3 font-mono">TPR<sub>a</sub> &approx; TPR<sub>b</sub> &nbsp;(Recall match)</td>
                  <td className="p-3">Qualified applicants from both groups have equal probability of approval</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Equalized Odds</td>
                  <td className="p-3 font-mono">TPR<sub>a</sub> &approx; TPR<sub>b</sub> &amp; FPR<sub>a</sub> &approx; FPR<sub>b</sub></td>
                  <td className="p-3">Matches both true positive rate and false alarm rate across groups</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Predictive Parity</td>
                  <td className="p-3 font-mono">PPV<sub>a</sub> &approx; PPV<sub>b</sub> &nbsp;(Precision match)</td>
                  <td className="p-3">Among applicants predicted positive, actual success rates are equal</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto space-y-1">
            <div className="text-stone-400"># Fairlearn MetricFrame Audit:</div>
            <div>from fairlearn.metrics import MetricFrame, selection_rate, false_positive_rate</div>
            <div>from sklearn.metrics import accuracy_score</div>
            <div>metrics = &#123;&quot;accuracy&quot;: accuracy_score, &quot;selection_rate&quot;: selection_rate, &quot;fpr&quot;: false_positive_rate&#125;</div>
            <div>audit = MetricFrame(metrics=metrics, y_true=y_test, y_pred=y_pred, sensitive_features=sensitive_test)</div>
            <div>print(audit.by_group)</div>
            <div>print(&quot;Disparity difference:&quot;, audit.difference())</div>
          </div>
        </div>
      </section>

      {/* PART 5: COMPLETE END-TO-END PROJECT & SUMMARY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <FlaskConical size={14} />
          <span>Part 5 &bull; Capstone &amp; Track Synthesis</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          14, 15, 16 &amp; 20. Production Workflow, Best Practices &amp; Synthesis
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <h3 className="text-base font-bold text-stone-900">14. 12-Step Production ML Deployment Lifecycle</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>1. Data Cleaning:</strong> Imputation &amp; encoding inside ColumnTransformer pipelines.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>2. Split Isolation:</strong> 60% Train, 20% Validation, 20% Held-out Test.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>3. Model Selection:</strong> Benchmark Logistic Regression, Random Forest, XGBoost.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>4. Optuna HPO:</strong> TPE search over 50 trials with cross-validation.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>5. Calibration:</strong> CalibratedClassifierCV with Platt sigmoid scaling.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>6. Threshold Tuning:</strong> Cost-sensitive optimization for asymmetric losses.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>7. Global XAI:</strong> Permutation importance and PDP curve verification.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>8. Local XAI:</strong> SHAP waterfall plots for individual regulatory explanations.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>9. Error Analysis:</strong> Confusion matrix decomposition across feature segments.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>10. Fairness Audit:</strong> Fairlearn MetricFrame evaluation across sensitive groups.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>11. Artifact Versioning:</strong> Model weights, threshold metadata, calibration specs.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>12. Monitoring:</strong> Real-time drift detection, calibration decay, cohort error logs.
            </div>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">16. Common Pitfalls to Avoid</h3>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-stone-600 text-xs">
            <li><strong>Tuning on the test set:</strong> Leaks test information into hyperparameters; always tune inside CV or validation sets.</li>
            <li><strong>Calibrating on training data:</strong> Causes extreme probability overconfidence; use cross-fitting in <code>CalibratedClassifierCV</code>.</li>
            <li><strong>Default 0.5 threshold:</strong> Severely damages business ROI in imbalanced or cost-asymmetric settings.</li>
            <li><strong>Treating SHAP as causality:</strong> SHAP measures statistical model attribution, not real-world counterfactual causality.</li>
            <li><strong>Blinded fairness fallacy:</strong> Simply deleting protected columns leaves proxy features that preserve demographic bias.</li>
          </ul>

          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-stone-800 leading-relaxed mt-4">
            <strong>Module Summary:</strong> High accuracy alone does not guarantee a safe, reliable machine learning system. Production excellence requires hyperparameter optimization (Optuna, Bayesian search), reliable calibrated probabilities, cost-optimal decision thresholds, interpretability (SHAP, PDP, Permutation importance), rigorous slice error analysis, and fairness auditing.
          </div>
        </div>
      </section>
    </div>
  );
}
