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
  Building2,
  CreditCard,
  UserX,
  ShoppingBag,
  LineChart,
  Stethoscope,
} from "lucide-react";

export default function MachineLearningRealWorldCaseStudiesSections() {
  return (
    <div className="space-y-8">
      {/* PART 1: REAL-WORLD ML WORKFLOW */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Target size={14} />
          <span>Part 1 &bull; Engineering Workflow</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          1, 2 &amp; 3. Problem Formulation, Data Acquisition &amp; Quality Assessment
        </h2>
        <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-orange-950 flex items-start gap-3">
          <Sparkles className="text-orange-600 shrink-0 mt-0.5" size={16} />
          <div>
            <strong>Core Principle:</strong> In industry, machine learning begins with a business decision, not an algorithm. Formulating the prediction unit, timestamp, and horizon precedes modeling. Data quality and leakage prevention dictate real-world success.
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <h3 className="text-base font-bold text-stone-900">1. Converting a Business Requirement into an ML Problem</h3>
          <p>
            Vague business goals like &quot;Reduce customer losses&quot; must be formally deconstructed into eight engineering specifications:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">1. Business Objective</div>
              <p className="text-xs text-stone-600">e.g., Lower default rate on personal loans below 2.5% to save $4M annually.</p>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">2. Prediction Target (y)</div>
              <p className="text-xs text-stone-600">Binary indicator: 1 if borrower defaults (&ge;90 days delinquent), else 0.</p>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">3. Unit of Prediction</div>
              <p className="text-xs text-stone-600">One individual credit application submitted by a primary borrower.</p>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">4. Prediction Timestamp</div>
              <p className="text-xs text-stone-600">At instant of submission, strictly prior to loan origination and underwriting.</p>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">5. Prediction Horizon</div>
              <p className="text-xs text-stone-600">Next 12 months following disbursement (defining target observation window).</p>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">6. Available Features</div>
              <p className="text-xs text-stone-600">Bureau score, income, verified liabilities, employment length (zero post-approval fields).</p>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">7. Business Action</div>
              <p className="text-xs text-stone-600">Automated instant approval, secondary human underwriter review, or denial.</p>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">8. Success Criteria</div>
              <p className="text-xs text-stone-600">Expected monetary loss minimization, ROC-AUC &ge; 0.82, calibration Brier &le; 0.08.</p>
            </div>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">3. Data Quality &amp; The Four Types of Data Leakage</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-xl overflow-hidden">
              <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                <tr>
                  <th className="p-3">Leakage Type</th>
                  <th className="p-3">Failure Mechanism</th>
                  <th className="p-3">Concrete Real-World Example</th>
                  <th className="p-3">Remediation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="p-3 font-semibold">Target Leakage</td>
                  <td className="p-3">A feature contains proxy information directly caused by or correlated with target outcome</td>
                  <td className="p-3 font-mono text-[11px]">&quot;Late_fee_collected&quot; included in loan default dataset</td>
                  <td className="p-3">Strict feature availability audits at timestamp t<sub>0</sub></td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Train-Test Contamination</td>
                  <td className="p-3">Preprocessing (scaling, imputation, target encoding) fitted on full dataset prior to splitting</td>
                  <td className="p-3 font-mono text-[11px]">StandardScaler.fit(X) before train_test_split(X, y)</td>
                  <td className="p-3">Encapsulate all preprocessing in Scikit-learn Pipelines</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Temporal Leakage</td>
                  <td className="p-3">Using future observations to predict historical records via random shuffling</td>
                  <td className="p-3 font-mono text-[11px]">Random K-Fold cross-validation on time-series sales data</td>
                  <td className="p-3">Enforce TimeSeriesSplit or chronological walk-forward</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Group Contamination</td>
                  <td className="p-3">Multiple records from the same entity/patient split across train and test sets</td>
                  <td className="p-3 font-mono text-[11px]">Same patient biopsies present in both training and test folds</td>
                  <td className="p-3">Use GroupKFold or GroupShuffleSplit on Entity ID</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4, 5 & 6: BASELINES, BENCHMARKING & METRICS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Scale size={14} />
          <span>Sections 4, 5 &amp; 6 &bull; Baselines &amp; Metrics</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          4, 5 &amp; 6. Baseline Development, Model Selection &amp; Evaluation Metrics
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Never train an ensemble or deep neural network without first measuring performance against a transparent baseline. A complex model delivering 90% accuracy is worthless if a simple heuristic (e.g. <code>DummyClassifier(strategy=&quot;most_frequent&quot;)</code>) achieves 91% due to class imbalance!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="font-bold text-orange-700 text-xs uppercase">1. Constant Baseline</div>
              <p className="text-xs text-stone-600">
                Predicts majority class in classification or sample mean in regression. Reveals baseline difficulty caused by class imbalance or variance.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="font-bold text-orange-700 text-xs uppercase">2. Linear / Heuristic Baseline</div>
              <p className="text-xs text-stone-600">
                Logistic Regression, Ridge Regression, or existing manual business rules (e.g., &quot;Flag transaction if amount &gt; $5,000&quot;).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="font-bold text-orange-700 text-xs uppercase">3. Temporal Naive Baseline</div>
              <p className="text-xs text-stone-600">
                Predicts &ycirc;<sub>t+1</sub> = y<sub>t</sub> (yesterday&rsquo;s sales). Critical for proving whether time-series models genuinely extract signal beyond lag persistence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 & 8: EXPERIMENT TRACKING & REPRODUCIBILITY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <FolderGit2 size={14} />
          <span>Sections 7 &amp; 8 &bull; Rigor &amp; Reproducibility</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          7 &amp; 8. Experiment Tracking &amp; Machine Learning Reproducibility
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            In industry teams, undocumented experiments lead to wasted computation and non-reproducible deployments. Production experiment tracking (via MLflow, Weights &amp; Biases) records nine essential dimensions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>Code Version:</strong> Exact Git commit SHA hash and repository state.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>Dataset Lineage:</strong> Data version hash, DVC pointer, and split indices.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>Hyperparameters:</strong> Full dictionary of estimator configuration parameters.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>Random Seeds:</strong> Deterministic seeds across Python, NumPy, PyTorch/TensorFlow.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>Evaluation Metrics:</strong> Train, validation, and test scores across multiple metrics.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <strong>Saved Artifacts:</strong> Serialized model pipeline, confusion matrix, calibration plots.
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: SIX REAL-WORLD INDUSTRY CASE STUDIES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Building2 size={14} />
          <span>Part 2 &bull; Industry Case Studies</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          11&ndash;16. Six Deep-Dive Production Machine Learning Case Studies
        </h2>

        <div className="space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
          {/* CASE 1: CREDIT RISK */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 text-orange-700 font-bold text-sm">
              <CreditCard size={16} />
              <span>Case Study 1: Banking &mdash; Credit Risk &amp; Default Prediction</span>
            </div>
            <p>
              Banks evaluate whether a retail or corporate borrower will fail to repay. Under Basel banking capital accords, risk is governed by:
            </p>
            <div className="p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs">
              Expected Loss (EL) = Probability of Default (PD) &times; Loss Given Default (LGD) &times; Exposure at Default (EAD)
            </div>
            <ul className="list-disc list-inside space-y-1 pl-2 text-stone-600 text-xs">
              <li><strong>Feature Engineering:</strong> Debt-to-Income (DTI = Monthly Debt / Gross Income), Loan-to-Income (LTI), historical revolving credit utilization, and delinquency count.</li>
              <li><strong>Modeling &amp; Calibration:</strong> Benchmark Logistic Regression against XGBoost. Probability calibration via Platt scaling is mandatory because downstream capital reserves depend on true risk percentages.</li>
            </ul>
          </div>

          {/* CASE 2: FRAUD DETECTION */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 text-orange-700 font-bold text-sm">
              <ShieldAlert size={16} />
              <span>Case Study 2: Fintech &mdash; Real-Time Financial Fraud Detection</span>
            </div>
            <p>
              Flagging unauthorized card transactions amidst extreme class imbalance (99.8% legitimate, 0.2% fraudulent).
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-stone-600 text-xs">
              <li><strong>Feature Engineering:</strong> Rolling velocity (transactions in last 10 min), amount ratio (Current Amount / Customer 30-day mean), geolocation jump speed (velocity exceeding physical travel limits).</li>
              <li><strong>Hybrid Strategy:</strong> Combine supervised gradient boosting with unsupervised anomaly detection (Isolation Forest) to flag zero-day unseen fraud patterns. Evaluation prioritizes PR-AUC and Precision@K.</li>
            </ul>
          </div>

          {/* CASE 3: CUSTOMER CHURN */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 text-orange-700 font-bold text-sm">
              <UserX size={16} />
              <span>Case Study 3: SaaS &amp; Telecom &mdash; Customer Churn Prediction</span>
            </div>
            <p>
              Identifying subscription accounts likely to cancel within a 30-day window to deploy proactive retention campaigns.
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-stone-600 text-xs">
              <li><strong>Feature Engineering:</strong> Tenure, usage decline ratio (Recent Sessions / Historical Mean), customer support complaint spikes, and billing disputes.</li>
              <li><strong>Business Alignment:</strong> Rank customers by churn probability. If the retention success budget covers only top 500 accounts/week, evaluate top-decile capture rate and Precision@500 rather than arbitrary 0.5 classification.</li>
            </ul>
          </div>

          {/* CASE 4: RECOMMENDATION SYSTEMS */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 text-orange-700 font-bold text-sm">
              <ShoppingBag size={16} />
              <span>Case Study 4: E-Commerce &amp; Media &mdash; Personalized Recommendations</span>
            </div>
            <p>
              Ranking candidate catalogs to maximize engagement and purchase conversion while balancing diversity and discovery.
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-stone-600 text-xs">
              <li><strong>Mathematical Formulation:</strong> Regularized Matrix Factorization: &rcirc;<sub>ui</sub> = &mu; + b<sub>u</sub> + b<sub>i</sub> + p<sub>u</sub><sup>T</sup>q<sub>i</sub>.</li>
              <li><strong>Cold-Start Architecture:</strong> Hybridize collaborative filtering with content-based embeddings (TF-IDF / category vectors) for new users and unrated items. Evaluate using NDCG@K and Recall@K on chronological splits.</li>
            </ul>
          </div>

          {/* CASE 5: SALES FORECASTING */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 text-orange-700 font-bold text-sm">
              <LineChart size={16} />
              <span>Case Study 5: Retail Supply Chain &mdash; Demand &amp; Sales Forecasting</span>
            </div>
            <p>
              Forecasting unit sales per store across a 30-day horizon for inventory procurement and logistics planning.
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-stone-600 text-xs">
              <li><strong>Feature Engineering:</strong> Lag variables (Lag 1, Lag 7, Lag 30), rolling window statistics (7-day mean, 30-day std), calendar cyclical signals (day-of-week, promotion flag, holiday indicator).</li>
              <li><strong>Pitfall &mdash; Censored Demand:</strong> Out-of-stock events record zero sales despite high customer demand. Models trained naively underestimate future demand; zero-stock dates must be adjusted or flagged.</li>
            </ul>
          </div>

          {/* CASE 6: MEDICAL RISK */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 text-orange-700 font-bold text-sm">
              <Stethoscope size={16} />
              <span>Case Study 6: Healthcare &mdash; Clinical Risk &amp; Readmission Prediction</span>
            </div>
            <p>
              Predicting 30-day hospital readmission risk at discharge to assist clinical staff with post-care planning.
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-stone-600 text-xs">
              <li><strong>Methodology:</strong> Strictly isolate records available at discharge timestamp. Prioritize sensitivity/recall to minimize missed high-risk patients.</li>
              <li><strong>Governance:</strong> Clinical AI provides decision support, never automated decisions. Audit across demographic subgroups to prevent disparities in hospital care access.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PART 3: RESPONSIBLE ML & DOCUMENTATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <BookOpen size={14} />
          <span>Part 3 &bull; Governance &amp; Artifacts</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          17, 18 &amp; 19. Responsible ML, Project Documentation &amp; AI Engineering Scope
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <h3 className="text-base font-bold text-stone-900">18. 12-Section Industry ML Project Report Structure</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs font-mono">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">01. Executive Summary</div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">02. Problem Definition</div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">03. Dataset Datasheet</div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">04. Data Quality Audit</div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">05. Exploratory Data Analysis</div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">06. Feature Engineering</div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">07. Model Selection &amp; CV</div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">08. Benchmark Results</div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">09. Model Interpretability</div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">10. Responsible ML Assessment</div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">11. Business Recommendations</div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">12. Reproducibility Appendix</div>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">19. Architecture Scope: Machine Learning vs. AI Engineering M18&ndash;M20</h3>
          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-stone-800 leading-relaxed">
            <strong>Clear Curriculum Boundary:</strong> This Machine Learning course governs problem formulation, data preparation, feature engineering, modeling, evaluation, and explanation. Full production serving APIs (FastAPI/Docker), automated MLOps pipelines, Kubernetes cluster scalability, and real-time production drift monitoring are systematically taught in <strong>AI Engineering Modules 18&ndash;20</strong>, ensuring zero duplicated content.
          </div>
        </div>
      </section>

      {/* PART 4: CAPSTONE PROJECT & FINAL TRACK SYNTHESIS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Microscope size={14} />
          <span>Part 4 &bull; Capstone &amp; Track Completion</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          20, 21 &amp; 24. Capstone Rubric &amp; Machine Learning Track Grand Finale
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <h3 className="text-base font-bold text-stone-900">Capstone Evaluation Rubric (100% Total)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-xl overflow-hidden">
              <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                <tr>
                  <th className="p-3">Assessment Pillar</th>
                  <th className="p-3">Weight</th>
                  <th className="p-3">Evaluation Criteria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 font-mono">
                <tr>
                  <td className="p-3 font-semibold font-sans">Business Problem Formulation</td>
                  <td className="p-3 font-bold text-orange-700">10%</td>
                  <td className="p-3 font-sans">Rigorous mapping of business objectives to prediction target, timestamp, and decision actions.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold font-sans">Dataset Selection &amp; Quality Audit</td>
                  <td className="p-3 font-bold text-orange-700">15%</td>
                  <td className="p-3 font-sans">Data documentation, missing value strategy, outlier handling, and leakage verification.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold font-sans">Feature Engineering</td>
                  <td className="p-3 font-bold text-orange-700">10%</td>
                  <td className="p-3 font-sans">Domain-specific transformations (DTI, velocity, lags) constructed inside leak-free pipelines.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold font-sans">Baseline &amp; Candidate Models</td>
                  <td className="p-3 font-bold text-orange-700">20%</td>
                  <td className="p-3 font-sans">Transparent baseline comparison against at least 3 distinct tuned algorithms.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold font-sans">Experimental Evaluation &amp; Metrics</td>
                  <td className="p-3 font-bold text-orange-700">15%</td>
                  <td className="p-3 font-sans">Business-aligned metrics (PR-AUC, NDCG, cost matrix) with cross-validation.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold font-sans">Model Interpretation &amp; Error Analysis</td>
                  <td className="p-3 font-bold text-orange-700">10%</td>
                  <td className="p-3 font-sans">SHAP feature attributions and systematic confusion matrix slice debugging.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold font-sans">Responsible ML &amp; Governance</td>
                  <td className="p-3 font-bold text-orange-700">10%</td>
                  <td className="p-3 font-sans">Fairness audit across sensitive groups, data privacy check, and documented limitations.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold font-sans">Documentation &amp; Reproducibility</td>
                  <td className="p-3 font-bold text-orange-700">10%</td>
                  <td className="p-3 font-sans">Full 12-section project report, Model Card, dependency lockfiles, and seed configuration.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-stone-900 leading-relaxed mt-4">
            <strong>Grand Track Synthesis:</strong> Congratulations! You have mastered the entire 23-module Machine Learning Masterclass on PrepSpaces. From Python numerical foundations (NumPy, Pandas, EDA) through core linear and non-linear algorithms, evaluation pipelines, unsupervised clustering, dimensionality reduction, anomaly detection, recommender systems, time-series forecasting, Bayesian methods, statistical research theory, hyperparameter optimization &amp; XAI, to complete industry engineering case studies &mdash; you are equipped to plan, build, validate, and document world-class machine learning systems.
          </div>
        </div>
      </section>
    </div>
  );
}
