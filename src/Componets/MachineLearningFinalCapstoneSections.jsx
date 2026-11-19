import React, { useState } from "react";
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  Layers,
  HelpCircle,
  TrendingDown,
  TrendingUp,
  RefreshCw,
  GitBranch,
  Cpu,
  BarChart2,
  Compass,
  AlertTriangle,
  Search,
  Filter,
  Scale,
  Brain,
  ShieldAlert,
  Percent,
  FlaskConical,
  Target,
  Eye,
  Binary,
  Share2,
  Building2,
  CreditCard,
  UserX,
  ShoppingBag,
  LineChart,
  Stethoscope,
  Briefcase,
  DollarSign,
  Calendar,
  Clock,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Terminal,
  Code2,
  Database,
  Server,
  FileText,
  Award,
  Zap,
} from "lucide-react";

export default function MachineLearningFinalCapstoneSections() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="space-y-10 text-stone-800">
      {/* SECTION 1: END-TO-END PROJECT PLANNING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-orange-100 text-orange-700 font-bold text-sm">
            01
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Part 1 &bull; End-to-End Capstone
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              End-to-End Machine Learning Project Planning
            </h2>
          </div>
        </div>

        <p className="text-stone-600 leading-relaxed text-sm sm:text-base mb-6">
          An end-to-end machine learning project is a complete process that starts with identifying a real-world problem and finishes with delivering a usable, reliable machine learning solution. It is not merely about importing an estimator and running <code>.fit()</code>. It requires understanding business constraints, finding quality data, rigorous cleaning, iterative modeling, error analysis, pipeline serialization, and deployment readiness.
        </p>

        {/* 9 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { step: "1", title: "Problem Definition", desc: "Identify business friction, define target variable, decision timestamp, and quantifiable success metrics." },
            { step: "2", title: "Dataset Research & Collection", desc: "Sourcing internal warehouses, Kaggle, UCI, or external APIs with license and quality verification." },
            { step: "3", title: "Data Preprocessing & EDA", desc: "Missing value imputation, outlier auditing, distribution analysis, and correlation screening." },
            { step: "4", title: "Feature Engineering", desc: "Extracting temporal velocity, behavioral interaction ratios, frequency encoding, and domain signals." },
            { step: "5", title: "Model Selection & Baselines", desc: "Establish simple reference benchmarks (Dummy/Logistic) before benchmarking tree ensembles." },
            { step: "6", title: "Optimization & Validation", desc: "Stratified K-Fold CV, hyperparameter tuning via RandomizedSearch or Optuna, test set isolation." },
            { step: "7", title: "Evaluation & Explainability", desc: "Cost-sensitive thresholding, PR-AUC, confusion matrices, and SHAP attribution analysis." },
            { step: "8", title: "Pipeline & Serialization", desc: "Encapsulate transformers into Scikit-learn Pipeline and serialize with joblib and schema checks." },
            { step: "9", title: "Deployment & Documentation", desc: "Define REST API schemas, error handling, Docker readiness, README documentation, and monitoring." },
          ].map((item) => (
            <div key={item.step} className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-600 text-white font-black text-xs flex items-center justify-center">
                {item.step}
              </span>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-stone-900 mb-1">{item.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
          <strong>The Running Example:</strong> Throughout this capstone, we follow a national telecommunications company predicting customer subscription churn. The goal is to accurately detect high-risk accounts 30 days prior to renewal so proactive retention campaigns can intervene.
        </div>
      </section>

      {/* SECTION 2 & 3: FORMULATION & DATASET RESEARCH */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-orange-100 text-orange-700 font-bold text-sm">
            02 &amp; 03
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Formulation &amp; Data Sourcing
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              Business Problem Formulation &amp; Dataset Selection
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-3">
            <h3 className="font-bold text-sm sm:text-base text-stone-900 flex items-center gap-2">
              <Target size={18} className="text-orange-600" />
              Problem Formulation Matrix
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Translate vague corporate goals (<em>&ldquo;Stop users from leaving&rdquo;</em>) into rigorous mathematical formulations:
            </p>
            <ul className="text-xs space-y-1.5 text-stone-700 list-disc list-inside">
              <li><strong>Task Type:</strong> Supervised Binary Classification (<code>1</code> = Churn within 30 days, <code>0</code> = Active).</li>
              <li><strong>Unit of Analysis:</strong> Unique customer account id (<code>customerID</code>) evaluated at monthly billing cycle.</li>
              <li><strong>Temporal Horizon:</strong> Predict cancellation event over subsequent 30-day window.</li>
              <li><strong>Zero Lookahead Rule:</strong> Features must strictly reflect observations available at decision timestamp <code>t<sub>0</sub></code>.</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-3">
            <h3 className="font-bold text-sm sm:text-base text-stone-900 flex items-center gap-2">
              <Search size={18} className="text-orange-600" />
              The 7 Dataset Evaluation Criteria
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-stone-700">
              <div className="p-2 rounded-xl bg-white border border-[#e7e3da]">
                <strong>1. Relevance:</strong> Matches real enterprise churn scenarios.
              </div>
              <div className="p-2 rounded-xl bg-white border border-[#e7e3da]">
                <strong>2. Volume:</strong> Sufficient rows (e.g. 7,000+ accounts).
              </div>
              <div className="p-2 rounded-xl bg-white border border-[#e7e3da]">
                <strong>3. Quality:</strong> Granular usage &amp; billing signals.
              </div>
              <div className="p-2 rounded-xl bg-white border border-[#e7e3da]">
                <strong>4. Completeness:</strong> Audit missing values in total charges.
              </div>
              <div className="p-2 rounded-xl bg-white border border-[#e7e3da]">
                <strong>5. Class Balance:</strong> Account for realistic ~26% churn rate.
              </div>
              <div className="p-2 rounded-xl bg-white border border-[#e7e3da]">
                <strong>6. Permissions:</strong> Permissive licensing for training/serving.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4, 5 & 6: PREPROCESSING, EDA & FEATURE ENGINEERING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-orange-100 text-orange-700 font-bold text-sm">
            04 &ndash; 06
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Data Foundations
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              Preprocessing, Exploratory Data Analysis &amp; Feature Engineering
            </h2>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-3">
          <h3 className="font-bold text-sm text-stone-900">1. Preprocessing Strategy &amp; Stratification</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Raw datasets often contain subtle format bugs. For instance, in the standard Telco churn dataset, <code>TotalCharges</code> contains 11 whitespace strings for new customers (tenure = 0), causing silent object-dtype conversions. These must be coerced to numeric and imputed with 0.0 or median.
          </p>
          <pre className="p-3 rounded-xl bg-stone-900 text-stone-200 text-xs font-mono overflow-x-auto">
{`# Stratified holdout split to preserve class proportions
from sklearn.model_selection import train_test_split

X = df.drop("Churn", axis=1)
y = (df["Churn"] == "Yes").astype(int)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.20, random_state=42, stratify=y
)`}
          </pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-[#e7e3da] space-y-2">
            <h4 className="font-bold text-xs sm:text-sm text-stone-900 flex items-center gap-2">
              <BarChart2 size={16} className="text-orange-600" />
              Key EDA Findings
            </h4>
            <ul className="text-xs space-y-1.5 text-stone-600 list-disc list-inside">
              <li><strong>Contract Type:</strong> Month-to-month contracts exhibit ~42% churn versus &lt;3% for two-year contracts.</li>
              <li><strong>Tenure Hazard:</strong> Churn hazard peaks heavily in months 1&ndash;6, leveling off dramatically after month 24.</li>
              <li><strong>Internet Tech:</strong> Fiber optic users churn at double the rate of DSL users due to early price jumps.</li>
              <li><strong>Payment Method:</strong> Electronic check users show disproportionately elevated churn risk.</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#e7e3da] space-y-2">
            <h4 className="font-bold text-xs sm:text-sm text-stone-900 flex items-center gap-2">
              <Zap size={16} className="text-orange-600" />
              High-Impact Engineered Features
            </h4>
            <div className="space-y-2 text-xs text-stone-700">
              <div className="p-2 rounded-xl bg-stone-50 border border-stone-200">
                <code>support_rate = SupportCalls / clip(Tenure, 1)</code>
                <p className="text-[11px] text-stone-500 mt-0.5">Captures frustration intensity per month of customer relationship.</p>
              </div>
              <div className="p-2 rounded-xl bg-stone-50 border border-stone-200">
                <code>avg_spending_ratio = TotalCharges / (Tenure * MonthlyCharges)</code>
                <p className="text-[11px] text-stone-500 mt-0.5">Detects recent unexpected bill shocks or unexpected price increases.</p>
              </div>
              <div className="p-2 rounded-xl bg-stone-50 border border-stone-200">
                <code>has_partner_dependents = (Partner == 'Yes') &amp; (Dependents == 'Yes')</code>
                <p className="text-[11px] text-stone-500 mt-0.5">Family households have much higher switching costs and lower churn.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7, 8, 9 & 10: ALGORITHM SELECTION, CV & HPO */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-orange-100 text-orange-700 font-bold text-sm">
            07 &ndash; 10
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Modeling &amp; Tuning
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              Algorithm Selection, Validation &amp; Hyperparameter Tuning
            </h2>
          </div>
        </div>

        {/* Algorithm Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-stone-100 text-stone-700 uppercase font-bold text-[11px] border-b border-stone-200">
                <th className="p-3">Algorithm</th>
                <th className="p-3">Interpretability</th>
                <th className="p-3">Training Speed</th>
                <th className="p-3">Non-linear Handling</th>
                <th className="p-3">Typical Churn AUC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600">
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-bold text-stone-900">Logistic Regression (Baseline)</td>
                <td className="p-3 text-emerald-700 font-bold">High (Odds Ratios)</td>
                <td className="p-3 font-mono">&lt; 100ms</td>
                <td className="p-3 text-stone-500">Requires interaction terms</td>
                <td className="p-3 font-mono">0.841</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-bold text-stone-900">Decision Tree</td>
                <td className="p-3 text-emerald-700 font-bold">High (Visual rules)</td>
                <td className="p-3 font-mono">&lt; 50ms</td>
                <td className="p-3 text-amber-700">Moderate (High variance)</td>
                <td className="p-3 font-mono">0.785</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-bold text-stone-900">Random Forest</td>
                <td className="p-3 text-amber-700 font-bold">Medium (Tree SHAP)</td>
                <td className="p-3 font-mono">~ 1.2s</td>
                <td className="p-3 text-emerald-700 font-bold">Excellent (Bagging)</td>
                <td className="p-3 font-mono">0.852</td>
              </tr>
              <tr className="hover:bg-stone-50 bg-orange-50/50">
                <td className="p-3 font-bold text-orange-900">XGBoost / LightGBM (Champion)</td>
                <td className="p-3 text-amber-700 font-bold">Medium (Fast TreeSHAP)</td>
                <td className="p-3 font-mono">~ 0.3s</td>
                <td className="p-3 text-emerald-700 font-bold">State of the Art</td>
                <td className="p-3 font-mono font-bold text-orange-700">0.864</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cross-Validation & Optimization Code */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-2">
            <h4 className="font-bold text-xs sm:text-sm text-stone-900">Stratified 5-Fold Cross-Validation</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Standard $K$-Fold cross-validation splits data into 5 folds where each serves as validation once. With Stratified $K$-Fold, the ratio of churners to non-churners is guaranteed equal across all 5 folds:
            </p>
            <div className="p-2.5 rounded-xl bg-white border border-[#e7e3da] font-mono text-center text-xs text-stone-800">
              Mean Score = (S<sub>1</sub> + S<sub>2</sub> + S<sub>3</sub> + S<sub>4</sub> + S<sub>5</sub>) / 5
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-2">
            <h4 className="font-bold text-xs sm:text-sm text-stone-900">Hyperparameter Optimization (RandomizedSearch)</h4>
            <pre className="p-2.5 rounded-xl bg-stone-900 text-stone-200 text-[11px] font-mono overflow-x-auto">
{`from sklearn.model_selection import RandomizedSearchCV

search = RandomizedSearchCV(
    estimator=pipeline,
    param_distributions=param_distributions,
    n_iter=25,
    cv=5,
    scoring="roc_auc",
    random_state=42
)
search.fit(X_train, y_train)`}
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 11, 12 & 13: EVALUATION, SHAP & ERROR ANALYSIS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-orange-100 text-orange-700 font-bold text-sm">
            11 &ndash; 13
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Validation &amp; Diagnostics
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              Evaluation Metrics, SHAP Explainability &amp; Error Analysis
            </h2>
          </div>
        </div>

        {/* Business Economics of Metric Choice */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 text-xs sm:text-sm text-amber-900">
          <h4 className="font-bold flex items-center gap-2">
            <DollarSign size={16} />
            Why Cost-Sensitive Recall Trumps Raw Accuracy
          </h4>
          <p className="leading-relaxed">
            In our telecom scenario, losing a churned customer costs <strong>$600</strong> in lost annual lifetime value. Sending a targeted retention discount code costs <strong>$15</strong>. Missing a churner (False Negative) is <strong>40 times more damaging</strong> than sending an unnecessary coupon to a customer who wasn&apos;t leaving (False Positive). Therefore, we intentionally lower our decision threshold from 0.50 to 0.32 to maximize <strong>Recall</strong> while keeping Precision acceptable.
          </p>
        </div>

        {/* SHAP & Error Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-2">
            <h4 className="font-bold text-xs sm:text-sm text-stone-900 flex items-center gap-2">
              <Brain size={16} className="text-orange-600" />
              SHAP Waterfall Attribution
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              TreeSHAP calculates the exact game-theoretic Shapley contribution of every feature toward the customer&apos;s predicted churn probability:
            </p>
            <ul className="text-xs space-y-1 text-stone-700">
              <li>&bull; <code>Contract = Month-to-month</code> &rarr; <strong>+0.28</strong> risk</li>
              <li>&bull; <code>Tenure = 4 months</code> &rarr; <strong>+0.16</strong> risk</li>
              <li>&bull; <code>TechSupport = No</code> &rarr; <strong>+0.11</strong> risk</li>
              <li>&bull; <code>PaymentMethod = Auto Credit Card</code> &rarr; <strong>&minus;0.14</strong> risk</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-2">
            <h4 className="font-bold text-xs sm:text-sm text-stone-900 flex items-center gap-2">
              <AlertTriangle size={16} className="text-orange-600" />
              Systematic Error Analysis Checklist
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              When models make errors, categorize them into systemic failure modes:
            </p>
            <ul className="text-xs space-y-1 text-stone-700">
              <li>&bull; <strong>High-Confidence False Negatives:</strong> Customers with 2-year contracts who suddenly churn due to poor network outages.</li>
              <li>&bull; <strong>High-Confidence False Positives:</strong> Month-to-month users who stay for 4 years despite high monthly charges.</li>
              <li>&bull; <strong>Subgroup Performance Discrepancies:</strong> Does the model underperform on senior citizens or rural DSL regions?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 14 & 15: COMPLETE PIPELINE & SERIALIZATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-orange-100 text-orange-700 font-bold text-sm">
            14 &amp; 15
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Production Engineering
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              Unified Scikit-Learn Pipeline &amp; Secure Serialization
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          In production, models must never depend on manual preprocessing scripts executed outside the estimator. We encapsulate numeric imputation, scaling, categorical one-hot encoding, and the final gradient booster into a single serialized Scikit-learn Pipeline object.
        </p>

        <pre className="p-4 rounded-2xl bg-stone-900 text-stone-200 text-xs font-mono overflow-x-auto leading-relaxed">
{`from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.ensemble import HistGradientBoostingClassifier
import joblib

num_cols = ["tenure", "MonthlyCharges", "TotalCharges", "support_rate"]
cat_cols = ["Contract", "PaymentMethod", "InternetService", "TechSupport"]

num_pipe = Pipeline([
    ("imputer", SimpleImputer(strategy="median")),
    ("scaler", StandardScaler())
])

cat_pipe = Pipeline([
    ("imputer", SimpleImputer(strategy="most_frequent")),
    ("ohe", OneHotEncoder(handle_unknown="ignore", sparse_output=False))
])

preprocessor = ColumnTransformer([
    ("num", num_pipe, num_cols),
    ("cat", cat_pipe, cat_cols)
])

full_pipeline = Pipeline([
    ("preprocess", preprocessor),
    ("model", HistGradientBoostingClassifier(random_state=42))
])

# Train on training partition strictly
full_pipeline.fit(X_train, y_train)

# Secure serialization with metadata bundle
joblib.dump(full_pipeline, "churn_pipeline_v1.0.joblib")`}
        </pre>

        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 text-xs sm:text-sm flex items-start gap-3">
          <ShieldAlert size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong>Serialization Security Advisory:</strong> Never load untrusted <code>.pickle</code> or <code>.joblib</code> files from external or unauthenticated sources. Python unpickling executes arbitrary bytecode via the object&apos;s <code>__reduce__</code> method. In production architectures, sign model artifacts cryptographically with SHA-256 and store them in secure internal object storage (S3/GCS) with strict IAM policies.
          </div>
        </div>
      </section>

      {/* SECTION 16, 17, 18 & 19: API, DEPLOYMENT, GITHUB & PRESENTATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-orange-100 text-orange-700 font-bold text-sm">
            16 &ndash; 19
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Delivery &amp; Communication
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              API Contracts, Production Readiness &amp; Project Presentation
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-2">
            <h4 className="font-bold text-xs sm:text-sm text-stone-900 flex items-center gap-2">
              <Server size={16} className="text-orange-600" />
              Inference API Request/Response Contract
            </h4>
            <pre className="p-2.5 rounded-xl bg-stone-900 text-stone-200 text-[11px] font-mono overflow-x-auto">
{`POST /api/v1/predict/churn
{
  "customer_id": "CUST-8910",
  "tenure": 3,
  "monthly_charges": 89.50,
  "total_charges": 268.50,
  "contract": "Month-to-month",
  "payment_method": "Electronic check",
  "support_calls": 4
}

Response (200 OK):
{
  "customer_id": "CUST-8910",
  "churn_probability": 0.784,
  "risk_tier": "HIGH_RISK",
  "recommended_action": "DISPATCH_VIP_RETENTION_CALL"
}`}
            </pre>
          </div>

          <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-2">
            <h4 className="font-bold text-xs sm:text-sm text-stone-900 flex items-center gap-2">
              <Code2 size={16} className="text-orange-600" />
              Professional GitHub Repo Architecture
            </h4>
            <div className="font-mono text-xs text-stone-700 bg-white p-3 rounded-xl border border-[#e7e3da] leading-relaxed">
              telecom-churn-system/<br />
              &boxur;&boxh;&boxh; data/ (raw &amp; processed schemas)<br />
              &boxur;&boxh;&boxh; notebooks/ (01_eda.ipynb, 02_shap.ipynb)<br />
              &boxur;&boxh;&boxh; src/ (features.py, pipeline.py, serve.py)<br />
              &boxur;&boxh;&boxh; models/ (churn_v1.joblib, metadata.json)<br />
              &boxur;&boxh;&boxh; tests/ (test_pipeline.py, test_api.py)<br />
              &boxur;&boxh;&boxh; Dockerfile, requirements.txt, README.md
            </div>
          </div>
        </div>

        {/* 12-Step Interview Presentation Script */}
        <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 space-y-3">
          <h4 className="font-bold text-xs sm:text-sm text-orange-950 flex items-center gap-2">
            <Award size={16} className="text-orange-700" />
            The 60-Second Senior ML Engineer Pitch
          </h4>
          <blockquote className="text-xs text-stone-700 italic leading-relaxed border-l-2 border-orange-500 pl-3">
            &ldquo;I designed and shipped an end-to-end customer churn prediction engine for 7,000+ accounts. Beginning with business scoping, we formulated a 30-day binary churn target. During EDA, I identified strong churn hazard in months 1&ndash;6 and engineered interaction ratios like support calls per tenure. I encapsulated preprocessing inside Scikit-learn Pipelines, benchmarked Logistic Regression against LightGBM using Stratified 5-Fold CV, and optimized hyperparameters via RandomizedSearch. Because False Negatives cost 40x more than False Positives, I adjusted the classification threshold to 0.32, boosting Recall to 82% at 75% Precision. Finally, I used TreeSHAP to deliver actionable explanations to customer success teams and packaged the pipeline into a containerized FastAPI service.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* PART 2: MACHINE LEARNING INTERVIEW MASTERY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-orange-100 text-orange-700 font-bold text-sm">
            20 &ndash; 24
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Part 2 &bull; Interview Mastery
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              Coding, Probability, Classical Algorithms, Case Studies &amp; System Design
            </h2>
          </div>
        </div>

        {/* 5 Interview Dimensions Accordion/Grid */}
        <div className="space-y-4">
          {/* Dimension 1: Python Coding */}
          <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-2">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2">
              <Terminal size={16} className="text-orange-600" />
              1. Python Coding &amp; Complexity Optimization
            </h3>
            <p className="text-xs text-stone-600">
              Interviewers evaluate whether you can optimize common problems from brute force <code>O(n log n)</code> to linear <code>O(n)</code> single-pass scans with <code>O(1)</code> auxiliary space.
            </p>
            <pre className="p-3 rounded-xl bg-stone-900 text-stone-200 text-xs font-mono overflow-x-auto">
{`# Find second-largest unique element in O(n) time and O(1) space
def find_second_largest(nums):
    first = second = float("-inf")
    for n in nums:
        if n > first:
            second, first = first, n
        elif first > n > second:
            second = n
    return second if second != float("-inf") else None`}
            </pre>
          </div>

          {/* Dimension 2: Statistics & Probability */}
          <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-2">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2">
              <Scale size={16} className="text-orange-600" />
              2. Statistics, Probability &amp; Bayes&apos; Theorem
            </h3>
            <p className="text-xs text-stone-600">
              Be prepared to write Bayes&apos; Theorem from scratch and explain why prior probabilities matter in rare-event detection:
            </p>
            <div className="p-3 rounded-xl bg-white border border-[#e7e3da] text-xs font-mono text-center text-stone-800">
              P(A | B) = [ P(B | A) &times; P(A) ] / P(B)
            </div>
            <p className="text-xs text-stone-500">
              Also understand: Central Limit Theorem (sample mean approaches normal regardless of population distribution), Type I (&alpha;, false positive) vs Type II (&beta;, false negative) errors, and the Bias-Variance tradeoff (high bias = underfitting, high variance = overfitting).
            </p>
          </div>

          {/* Dimension 3: Classical ML Algorithm Defense */}
          <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-2">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2">
              <Brain size={16} className="text-orange-600" />
              3. Classical ML Algorithm Deep-Dives
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-[#e7e3da]">
                <strong>Bagging vs Boosting:</strong> Bagging trains independent parallel trees on bootstrap samples to reduce variance (Random Forest). Boosting trains sequential trees on predecessor residuals to reduce bias (XGBoost).
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#e7e3da]">
                <strong>Ridge vs Lasso:</strong> Ridge adds L2 penalty (&lambda;&Sigma;&beta;<sup>2</sup>) shrinking coefficients smoothly; Lasso adds L1 penalty (&lambda;&Sigma;|&beta;|) driving uninformative coefficients strictly to 0 for feature selection.
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#e7e3da]">
                <strong>K-Means vs DBSCAN:</strong> K-Means requires pre-specifying $k$ and assumes spherical clusters; DBSCAN discovers arbitrary geometric shapes by density connectivity and natively flags noise outliers.
              </div>
            </div>
          </div>

          {/* Dimension 4: ML Case Study 8-Step Framework */}
          <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-2">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2">
              <Compass size={16} className="text-orange-600" />
              4. The 8-Step Universal ML Case Study Framework
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-stone-700">
              <div className="p-2 rounded-xl bg-white border border-[#e7e3da]"><strong>1. Clarify:</strong> Stakeholders &amp; scope</div>
              <div className="p-2 rounded-xl bg-white border border-[#e7e3da]"><strong>2. ML Task:</strong> Classification / Rank</div>
              <div className="p-2 rounded-xl bg-white border border-[#e7e3da]"><strong>3. Data:</strong> Sources &amp; leakage check</div>
              <div className="p-2 rounded-xl bg-white border border-[#e7e3da]"><strong>4. Validation:</strong> Stratified / Temporal</div>
              <div className="p-2 rounded-xl bg-white border border-[#e7e3da]"><strong>5. Baseline:</strong> Simple reference first</div>
              <div className="p-2 rounded-xl bg-white border border-[#e7e3da]"><strong>6. Iterate:</strong> Features &amp; models</div>
              <div className="p-2 rounded-xl bg-white border border-[#e7e3da]"><strong>7. Evaluate:</strong> Cost &amp; SHAP diagnostics</div>
              <div className="p-2 rounded-xl bg-white border border-[#e7e3da]"><strong>8. System:</strong> Latency &amp; drift monitor</div>
            </div>
          </div>

          {/* Dimension 5: ML System Design & Drift */}
          <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-[#e7e3da] space-y-2">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2">
              <Layers size={16} className="text-orange-600" />
              5. ML System Design &amp; Continuous Drift Monitoring
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-[#e7e3da] space-y-1">
                <span className="font-bold text-stone-900">Batch vs Real-Time Serving:</span>
                <p className="text-stone-600">
                  <strong>Batch:</strong> Offline nightly job, stores predictions in cache/DB. Low serving cost, high latency freshness.<br />
                  <strong>Real-Time:</strong> REST/gRPC microservice with sub-50ms SLA. Requires live online feature store (Redis/Feast).
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#e7e3da] space-y-1">
                <span className="font-bold text-stone-900">Data Drift vs Concept Drift:</span>
                <p className="text-stone-600">
                  <strong>Data Drift:</strong> P(X) changes (e.g. users get younger). Measured via Population Stability Index (PSI) or KS-Test.<br />
                  <strong>Concept Drift:</strong> P(y|X) changes (e.g. competitor price cut makes existing pricing cause churn).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART 3: FINAL DELIVERABLES SUMMARY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-orange-100 text-orange-700 font-bold text-sm">
            FINAL
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Part 3 &amp; 4 &bull; Completion
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              Final Capstone Deliverables &amp; Course Graduation
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          Graduating from the 24-module Machine Learning with Python curriculum means you possess end-to-end independence: from ambiguous business meetings to mathematical formulation, leak-free preprocessing, state-of-the-art modeling, explainable diagnostics, production serialization, and confident technical defense.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
            <span className="text-2xl font-black text-orange-700">24</span>
            <p className="text-xs text-stone-600 font-medium mt-1">Complete Modules</p>
          </div>
          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
            <span className="text-2xl font-black text-orange-700">100%</span>
            <p className="text-xs text-stone-600 font-medium mt-1">Interactive Workbenches</p>
          </div>
          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
            <span className="text-2xl font-black text-orange-700">10+</span>
            <p className="text-xs text-stone-600 font-medium mt-1">Core Algorithms</p>
          </div>
          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
            <span className="text-2xl font-black text-orange-700">Full</span>
            <p className="text-xs text-stone-600 font-medium mt-1">Production Readiness</p>
          </div>
        </div>
      </section>
    </div>
  );
}
