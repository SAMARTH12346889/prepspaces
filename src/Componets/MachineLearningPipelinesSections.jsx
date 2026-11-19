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
  HardDrive,
  Workflow,
  Server,
  Database,
  Lock,
} from "lucide-react";

export default function MachineLearningPipelinesSections() {
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="space-y-10">
      {/* SECTION 1: INTRODUCTION TO ML PIPELINES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 01
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Pipeline Architecture
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          1. Introduction to Machine Learning Pipelines
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          A <strong>Machine Learning Pipeline</strong> is an automated, strictly ordered sequence of operations that ingests raw observations, sequentially applies necessary preprocessing transformations (imputation, encoding, scaling, custom feature engineering), and passes the refined feature matrix to an estimator for training or inference.
        </p>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          In typical legacy machine learning scripts, data cleaning, transformations, and model training are executed as ad-hoc disjoint operations. This creates severe maintenance vulnerabilities: code duplication across training and scoring scripts, mismatched transformer parameters, deployment failures on raw incoming data, and catastrophic <em>data leakage</em> during cross-validation.
        </p>

        {/* Workflow Comparison Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3">
            <span className="text-xs font-mono font-bold text-rose-700 uppercase flex items-center gap-1.5">
              <ShieldAlert size={14} /> Traditional Ad-Hoc Script (Error-Prone)
            </span>
            <div className="space-y-1 text-xs font-mono text-stone-700">
              <div className="p-2 bg-white rounded border border-rose-100">1. Global Imputation (Leaked validation statistics)</div>
              <div className="p-2 bg-white rounded border border-rose-100">2. Global Scaling (Computed on full dataset)</div>
              <div className="p-2 bg-white rounded border border-rose-100">3. Separate One-Hot Encoders</div>
              <div className="p-2 bg-white rounded border border-rose-100">4. Manual Array Reassembly &amp; Model Fit</div>
            </div>
            <p className="text-xs text-rose-800">
              High risk of data leakage, deployment friction, and broken production scoring schemas.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase flex items-center gap-1.5">
              <CheckCircle2 size={14} /> Production Pipeline Architecture (Leak-Free)
            </span>
            <div className="space-y-1 text-xs font-mono text-stone-700">
              <div className="p-2 bg-white rounded border border-emerald-100">1. Pipeline([ ("preprocessor", ColumnTransformer(...)) ])</div>
              <div className="p-2 bg-white rounded border border-emerald-100">2. Automated Cross-Validation with In-Fold Fitting</div>
              <div className="p-2 bg-white rounded border border-emerald-100">3. Single Atomic Artifact (.joblib / .skops)</div>
              <div className="p-2 bg-white rounded border border-emerald-100">4. pipeline.predict(raw_incoming_json)</div>
            </div>
            <p className="text-xs text-emerald-800">
              Zero leakage, deterministic reproducibility, and instantaneous single-call deployment.
            </p>
          </div>
        </div>

        {/* Core Components Table */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-800">
                <th className="p-3 font-bold font-mono">Component</th>
                <th className="p-3 font-bold font-mono">Responsibility</th>
                <th className="p-3 font-bold font-mono">Scikit-learn Class / Protocol</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-sans text-stone-700">
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">Pipeline</td>
                <td className="p-3">Sequentially combines transformers and a final estimator</td>
                <td className="p-3 font-mono text-xs">sklearn.pipeline.Pipeline</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">ColumnTransformer</td>
                <td className="p-3">Routes heterogeneous column groups to specialized sub-pipelines</td>
                <td className="p-3 font-mono text-xs">sklearn.compose.ColumnTransformer</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">Custom Transformer</td>
                <td className="p-3">Implements user-defined domain interactions and feature extraction</td>
                <td className="p-3 font-mono text-xs">BaseEstimator, TransformerMixin</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">Hyperparameter Tuner</td>
                <td className="p-3">Searches optimal configurations across preprocessing and models</td>
                <td className="p-3 font-mono text-xs">GridSearchCV, RandomizedSearchCV</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">Model Persistence</td>
                <td className="p-3">Serializes and restores the complete end-to-end workflow</td>
                <td className="p-3 font-mono text-xs">joblib, skops.io, ONNX runtime</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 2 & 3: SCIKIT-LEARN PIPELINE & PARAMETERS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 02 &ndash; 03
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Pipeline Mechanics
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          2. Pipeline Mechanics &amp; Nested Double Underscore (`__`) Notation
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          A Scikit-learn <code className="bg-stone-200 px-1 py-0.5 rounded text-xs font-mono">Pipeline</code> requires that every intermediate step implements both <code className="bg-stone-200 px-1 py-0.5 rounded text-xs font-mono">fit()</code> and <code className="bg-stone-200 px-1 py-0.5 rounded text-xs font-mono">transform()</code>, while the final step must implement <code className="bg-stone-200 px-1 py-0.5 rounded text-xs font-mono">fit()</code> (and optionally <code className="bg-stone-200 px-1 py-0.5 rounded text-xs font-mono">predict()</code> or <code className="bg-stone-200 px-1 py-0.5 rounded text-xs font-mono">predict_proba()</code>).
        </p>

        {/* Execution Flow Diagram */}
        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
            Execution Lifecycle: pipeline.fit() vs pipeline.predict()
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1.5">
              <span className="font-mono font-bold text-orange-600 block">pipeline.fit(X_train, y_train)</span>
              <p className="text-stone-600">
                1. Calls <em>fit_transform()</em> on Step 1 (learns mean &amp; imputes).<br />
                2. Passes transformed output to Step 2 (learns variance &amp; scales).<br />
                3. Calls <em>fit()</em> on the final estimator using fully transformed features.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1.5">
              <span className="font-mono font-bold text-sky-600 block">pipeline.predict(X_test)</span>
              <p className="text-stone-600">
                1. Calls <em>transform()</em> on Step 1 using already-learned parameters.<br />
                2. Calls <em>transform()</em> on Step 2 using already-learned parameters.<br />
                3. Calls <em>predict()</em> on the final estimator to generate predictions.
              </p>
            </div>
          </div>
        </div>

        {/* Double Underscore Access */}
        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3 overflow-x-auto">
          <div className="flex justify-between items-center text-stone-400">
            <span>// Nested Parameter Access &amp; Runtime Modifications</span>
            <span className="text-[10px] text-orange-400">Convention: step_name__parameter_name</span>
          </div>
          <div>from sklearn.pipeline import Pipeline</div>
          <div>from sklearn.preprocessing import StandardScaler</div>
          <div>from sklearn.linear_model import LogisticRegression</div>
          <br />
          <div>pipeline = Pipeline([</div>
          <div>&nbsp;&nbsp;("scaler", StandardScaler()),</div>
          <div>&nbsp;&nbsp;("classifier", LogisticRegression(max_iter=2000))</div>
          <div>])</div>
          <br />
          <div># 1. Inspect Learned Transformer Attributes</div>
          <div>scaler = pipeline.named_steps["scaler"]</div>
          <div>print("Learned Training Means:", scaler.mean_)</div>
          <br />
          <div># 2. Modify Hyperparameters Dynamically</div>
          <div>pipeline.set_params(classifier__C=10.0, scaler__with_mean=False)</div>
          <br />
          <div># 3. Disable Step Dynamically</div>
          <div>pipeline.set_params(scaler="passthrough") # Skips scaling without rebuilding!</div>
        </div>
      </section>

      {/* SECTION 4: COLUMNTRANSFORMER */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 04
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Multi-Branch Preprocessing
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          3. ColumnTransformer for Heterogeneous Tabular Datasets
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Real enterprise datasets combine continuous numerical features, high-cardinality nominals, ordinal ratings, and timestamps. Passing the entire table into a single transformer causes immediate type errors. <strong>ColumnTransformer</strong> partitions feature columns, applies independent transformation branches, and stitches the results into an engineered feature matrix.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">remainder="drop" (Default)</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Discards any column not explicitly mapped to a transformer. Ensures only vetted, transformed features reach the estimator.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">remainder="passthrough"</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Retains unselected columns in their raw state and appends them to the right side of the transformed feature matrix.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">get_feature_names_out()</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Tracks feature origins across transformations (e.g. <code className="font-mono bg-stone-200 px-1 py-0.5 rounded text-[11px]">cat__city_Mumbai</code>), essential for SHAP values and feature importance audits.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2 overflow-x-auto">
          <div>from sklearn.compose import ColumnTransformer</div>
          <div>from sklearn.pipeline import Pipeline</div>
          <div>from sklearn.impute import SimpleImputer</div>
          <div>from sklearn.preprocessing import StandardScaler, OneHotEncoder</div>
          <br />
          <div>num_pipe = Pipeline([("imp", SimpleImputer(strategy="median")), ("scale", StandardScaler())])</div>
          <div>cat_pipe = Pipeline([("imp", SimpleImputer(strategy="most_frequent")), ("ohe", OneHotEncoder(handle_unknown="ignore"))])</div>
          <br />
          <div>preprocessor = ColumnTransformer(transformers=[</div>
          <div>&nbsp;&nbsp;("num", num_pipe, ["age", "monthly_charges"]),</div>
          <div>&nbsp;&nbsp;("cat", cat_pipe, ["city", "contract_type"])</div>
          <div>], remainder="drop")</div>
        </div>
      </section>

      {/* SECTION 5: CUSTOM TRANSFORMERS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 05
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Domain Engineering
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          4. Custom Transformers via BaseEstimator &amp; TransformerMixin
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          When domain requirements call for specialized feature operations (e.g., computing debt-to-income ratios, calculating customer tenure, or parsing proprietary log tokens), custom transformers allow seamless integration into Scikit-learn pipelines.
        </p>

        {/* 4 Golden Rules */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 text-xs text-amber-900">
          <span className="font-bold font-mono uppercase block flex items-center gap-1.5">
            <AlertTriangle size={15} /> The 4 Golden Rules of Custom Transformers:
          </span>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>__init__() must only accept explicit hyperparameter arguments:</strong> Never accept data or perform statistical calculations in the constructor (breaks cloning and grid search).</li>
            <li><strong>fit() must learn and return self:</strong> All dataset-dependent statistics (means, percentiles, vocabularies) must be computed in <code className="font-mono bg-amber-100 px-1 rounded">fit()</code> and stored as trailing-underscore attributes (e.g. <code className="font-mono bg-amber-100 px-1 rounded">self.feature_names_in_</code>).</li>
            <li><strong>transform() must not mutate the original data:</strong> Always operate on a copy (<code className="font-mono bg-amber-100 px-1 rounded">X.copy()</code>) and maintain row count and order strictly.</li>
            <li><strong>Inherit from BaseEstimator &amp; TransformerMixin:</strong> Grants automatic <code className="font-mono bg-amber-100 px-1 rounded">fit_transform()</code>, <code className="font-mono bg-amber-100 px-1 rounded">get_params()</code>, and <code className="font-mono bg-amber-100 px-1 rounded">set_params()</code> support.</li>
          </ul>
        </div>

        {/* Complete Custom Transformer Listing */}
        <div className="rounded-2xl bg-stone-900 border border-stone-800 p-5 space-y-3">
          <div className="flex justify-between items-center text-xs font-mono text-stone-400">
            <span>custom_feature_engineering.py</span>
            <button
              onClick={() =>
                copyToClipboard(
`import numpy as np
import pandas as pd
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.utils.validation import check_is_fitted

class AddInteractionFeatures(TransformerMixin, BaseEstimator):
    def __init__(self, left_col="monthly_charges", right_col="support_tickets", output_name="charge_ticket_interaction"):
        self.left_col = left_col
        self.right_col = right_col
        self.output_name = output_name

    def fit(self, X, y=None):
        if not isinstance(X, pd.DataFrame):
            raise TypeError("Expected pandas DataFrame.")
        for col in [self.left_col, self.right_col]:
            if col not in X.columns:
                raise ValueError(f"Missing column: {col}")
        self.feature_names_in_ = np.asarray(X.columns, dtype=object)
        return self

    def transform(self, X):
        check_is_fitted(self, "feature_names_in_")
        X_out = X.copy()
        X_out[self.output_name] = (
            pd.to_numeric(X_out[self.left_col], errors="raise") *
            pd.to_numeric(X_out[self.right_col], errors="raise")
        )
        return X_out

    def get_feature_names_out(self, input_features=None):
        check_is_fitted(self, "feature_names_in_")
        if input_features is None:
            input_features = self.feature_names_in_
        return np.append(input_features, self.output_name)`,
                  "custom_tr_py"
                )
              }
              className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 font-mono text-xs flex items-center gap-1 cursor-pointer"
            >
              {copiedSnippet === "custom_tr_py" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span>{copiedSnippet === "custom_tr_py" ? "Copied" : "Copy Code"}</span>
            </button>
          </div>

          <pre className="text-xs font-mono text-stone-200 overflow-x-auto leading-relaxed">
{`import numpy as np
import pandas as pd
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.utils.validation import check_is_fitted

class AddInteractionFeatures(TransformerMixin, BaseEstimator):
    def __init__(self, left_col="monthly_charges", right_col="support_tickets", output_name="charge_ticket_interaction"):
        self.left_col = left_col
        self.right_col = right_col
        self.output_name = output_name

    def fit(self, X, y=None):
        if not isinstance(X, pd.DataFrame):
            raise TypeError("Expected pandas DataFrame.")
        for col in [self.left_col, self.right_col]:
            if col not in X.columns:
                raise ValueError(f"Missing column: {col}")
        self.feature_names_in_ = np.asarray(X.columns, dtype=object)
        return self

    def transform(self, X):
        check_is_fitted(self, "feature_names_in_")
        X_out = X.copy()
        X_out[self.output_name] = (
            pd.to_numeric(X_out[self.left_col], errors="raise") *
            pd.to_numeric(X_out[self.right_col], errors="raise")
        )
        return X_out

    def get_feature_names_out(self, input_features=None):
        check_is_fitted(self, "feature_names_in_")
        if input_features is None:
            input_features = self.feature_names_in_
        return np.append(input_features, self.output_name)`}
          </pre>
        </div>
      </section>

      {/* SECTION 8 & 9 & 10: HYPERPARAMETER SEARCH WITHIN PIPELINES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 08 &ndash; 10
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Pipeline Optimization
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          5. Hyperparameter Tuning &amp; Algorithm Swapping via GridSearchCV
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Because a pipeline is a valid Scikit-learn estimator, we can tune both preprocessing options and estimator hyperparameters simultaneously. We can even pass candidate model classes directly into the search grid to benchmark completely different algorithms (e.g. Logistic Regression vs Random Forest) within the exact same preprocessing architecture.
        </p>

        {/* Code Listing: Multi-Model Grid Search */}
        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2 overflow-x-auto">
          <div className="text-stone-400">// Multi-Algorithm Hyperparameter Grid Search:</div>
          <div>param_grid = [</div>
          <div>&nbsp;&nbsp;&#123;</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;"classifier": [LogisticRegression(max_iter=2000, class_weight="balanced")],</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;"classifier__C": [0.1, 1.0, 10.0],</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;"preprocessor__numeric__scaler": [StandardScaler(), "passthrough"]</div>
          <div>&nbsp;&nbsp;&#125;,</div>
          <div>&nbsp;&nbsp;&#123;</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;"classifier": [RandomForestClassifier(random_state=42)],</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;"classifier__n_estimators": [100, 250],</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;"classifier__max_depth": [5, 10, None],</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;"preprocessor__numeric__scaler": ["passthrough"] # Trees don't need scaling!</div>
          <div>&nbsp;&nbsp;&#125;</div>
          <div>]</div>
          <br />
          <div>search = GridSearchCV(pipeline, param_grid, cv=5, scoring="roc_auc", refit="roc_auc", n_jobs=-1)</div>
          <div>search.fit(X_train, y_train)</div>
          <div>best_pipeline = search.best_estimator_ # Entire fitted workflow ready for deployment!</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
            <span className="font-bold font-mono text-xs text-stone-800">Pipeline Disk Caching (memory=Memory)</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              When tuning 50 estimator hyperparameters with fixed expensive preprocessing (e.g. PCA, polynomial expansion), setting <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px] font-mono">memory="cache_dir"</code> caches intermediate transformer outputs to disk so they are computed only once per fold.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
            <span className="font-bold font-mono text-xs text-stone-800">RandomizedSearchCV for Large Budgets</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              When exploring continuous probability distributions (<code className="bg-stone-200 px-1 py-0.5 rounded text-[11px] font-mono">scipy.stats.loguniform</code>), RandomizedSearchCV samples <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px] font-mono">n_iter</code> configurations, achieving superior hyperparameter solutions in a fraction of compute time.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 13: MODEL PERSISTENCE & SERIALIZATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 13
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Production Serialization
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          6. Model Persistence: Joblib, Pickle, skops &amp; ONNX
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          In production, saving only the final model (e.g. <code className="bg-stone-200 px-1 py-0.5 rounded text-xs font-mono">model.joblib</code>) is a critical anti-pattern. If you discard the fitted imputer and scaler states, the deployment environment cannot replicate the exact mathematical transformations learned during training. <strong>You must serialize the entire fitted Pipeline object.</strong>
        </p>

        {/* Persistence Comparison Matrix */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-800 font-mono">
                <th className="p-3">Format</th>
                <th className="p-3">Serialization Engine</th>
                <th className="p-3">Security Level</th>
                <th className="p-3">Ideal Deployment Environment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-sans text-stone-700">
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">Joblib (.joblib)</td>
                <td className="p-3">Pickle optimized for large NumPy memory buffers</td>
                <td className="p-3 text-rose-700 font-bold">Insecure (Arbitrary code execution on untrusted files)</td>
                <td className="p-3">Internal trusted services, batch Python workers</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">skops (.skops)</td>
                <td className="p-3">Secure Scikit-learn serializer with type schema validation</td>
                <td className="p-3 text-emerald-700 font-bold">High (Validates untrusted types before loading)</td>
                <td className="p-3">Hub sharing, external client model delivery</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">ONNX (.onnx)</td>
                <td className="p-3">Language-agnostic graph computation representation</td>
                <td className="p-3 text-emerald-700 font-bold">High (Pure data graph, no arbitrary execution)</td>
                <td className="p-3">High-throughput C++, Go, Rust, mobile/edge serving</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2 overflow-x-auto">
          <div className="text-stone-400">// Atomic Serialization &amp; Metadata Logging:</div>
          <div>import joblib, json, platform, sklearn</div>
          <div>from pathlib import Path</div>
          <br />
          <div>Path("artifacts").mkdir(exist_ok=True)</div>
          <div>joblib.dump(best_pipeline, "artifacts/churn_pipeline_v1.joblib")</div>
          <br />
          <div>metadata = &#123;</div>
          <div>&nbsp;&nbsp;"pipeline_version": "v1.0.4",</div>
          <div>&nbsp;&nbsp;"python_version": platform.python_version(),</div>
          <div>&nbsp;&nbsp;"sklearn_version": sklearn.__version__,</div>
          <div>&nbsp;&nbsp;"test_roc_auc": 0.9421</div>
          <div>&#125;</div>
          <div>with open("artifacts/metadata.json", "w") as f: json.dump(metadata, f, indent=4)</div>
        </div>
      </section>

      {/* SECTION 20 & 25: INTERVIEW PREPARATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 25
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            MLOps &amp; Engineering Interviews
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          7. MLOps &amp; Machine Learning Engineering Interview Q&amp;A
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          High-frequency interview questions evaluated by tier-1 engineering panels covering pipeline design, leakage audits, and deployment monitoring.
        </p>

        <div className="space-y-3 pt-2">
          {[
            {
              q: "What is the primary difference between Pipeline and ColumnTransformer in Scikit-learn?",
              a: "Pipeline executes operations sequentially in series (output of step N feeds as input to step N+1). ColumnTransformer executes operations in parallel across distinct column subsets and concatenates their outputs along axis=1 into a single feature array.",
            },
            {
              q: "Why is it dangerous to run StandardScaler().fit_transform() across the entire dataset before calling cross_val_score()?",
              a: "Because the global mean and standard deviation will incorporate observations from the validation folds. This constitutes preprocessing data leakage, giving the model indirect information about validation distributions and producing artificially optimistic performance estimates that degrade in production.",
            },
            {
              q: "Why must custom transformers implement BaseEstimator and TransformerMixin rather than vanilla Python classes?",
              a: "BaseEstimator provides get_params() and set_params(), enabling double-underscore parameter access during GridSearchCV and cloning via sklearn.base.clone. TransformerMixin automatically provides fit_transform() when fit() and transform() are defined.",
            },
            {
              q: "Why should we save the entire Pipeline rather than saving the model and preprocessor separately?",
              a: "Saving separate artifacts invites schema mismatch, version drift, and manual preprocessing bugs during inference. An encapsulated Pipeline guarantees that incoming raw JSON or DataFrames pass through the exact same imputation values, scaling coefficients, and category indices learned during training.",
            },
            {
              q: "What post-deployment monitoring mechanisms are critical for production ML pipelines?",
              a: "Data Drift (covariate shift in incoming feature distributions), Concept Drift (shift in relationship between features and target P(Y|X)), Schema Drift (missing columns, unexpected category strings, null bursts), and Operational Latency (p99 inference response times).",
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
