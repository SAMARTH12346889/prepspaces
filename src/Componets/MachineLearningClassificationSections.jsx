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
} from "lucide-react";

export default function MachineLearningClassificationSections() {
  return (
    <div className="space-y-12">
      {/* SECTION 1: LEARNING OBJECTIVES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 01
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Core Competencies</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          1. Learning Objectives
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          In previous modules, regression models predicted continuous numerical quantities such as housing prices or transaction volumes. However, many of the most vital machine learning applications require categorizing observations into discrete classes: detecting spam emails, predicting customer churn, approving credit applications, flagging fraudulent transactions, or triaging medical diagnoses. Classification is a supervised learning task where a model learns from labeled observations to assign new inputs to their correct category.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Formulate real-world business and scientific problems into structured classification tasks.",
            "Understand binary vs. multiclass, multilabel, and ordinal classification paradigms.",
            "Derive logistic regression, its linear score z = β₀ + βᵀX, and the sigmoid mapping σ(z).",
            "Interpret model coefficients geometrically and in terms of log-odds and odds ratios (e^β).",
            "Understand linear decision boundaries in feature space and their nonlinear extensions.",
            "Explain log-loss (binary cross-entropy) and its heavy penalty on confident wrong predictions.",
            "Implement softmax regression (multinomial logistic regression) for multi-category tasks.",
            "Master One-vs-Rest (OvR) and One-vs-One (OvO) multiclass decomposition strategies.",
            "Tune classification probability thresholds to balance precision, recall, and business costs.",
            "Diagnose the accuracy paradox in class-imbalanced datasets (e.g., fraud and disease detection).",
            "Apply class weighting (class_weight='balanced') and SMOTE resampling without data leakage.",
            "Build complete end-to-end binary customer churn and multiclass flower classification pipelines.",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-stone-700 text-xs sm:text-sm font-medium">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: MATHEMATICAL PREREQUISITES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 02
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Foundational Math</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          2. Mathematical Prerequisites &mdash; AI Engineering M2
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Classification builds upon the linear algebra, calculus, and probability principles established in AI Engineering Module 2. This module focuses on operationalizing these mathematical concepts in production code:
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-700 font-bold font-mono">
                <th className="p-3">Mathematical Concept</th>
                <th className="p-3">Application in Classification</th>
                <th className="p-3">Key Formula or Operational Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Functions</td>
                <td className="p-3">Maps multi-dimensional input feature vectors to classification predictions</td>
                <td className="p-3 font-mono text-orange-700">f: ℝᵖ → [0, 1]</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Exponents</td>
                <td className="p-3">Core operator in the sigmoid transformation and softmax normalization</td>
                <td className="p-3 font-mono text-orange-700">e⁻ᶻ, e^(z_k)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Logarithms</td>
                <td className="p-3">Measures information divergence in log-loss and log-odds transformations</td>
                <td className="p-3 font-mono text-orange-700">log(p / (1 - p)), -log(p)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Vectors &amp; Dot Products</td>
                <td className="p-3">Computes the linear decision score across p features and model weights</td>
                <td className="p-3 font-mono text-orange-700">z = β₀ + βᵀX = β₀ + Σ βⱼxⱼ</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Derivatives &amp; Gradients</td>
                <td className="p-3">Guides iterative parameter updates in gradient-based optimization solvers</td>
                <td className="p-3 font-mono text-orange-700">∇L(β) = (1/n) Xᵀ(p - y)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Probability Theory</td>
                <td className="p-3">Interprets continuous model outputs as class probabilities summing to 1.0</td>
                <td className="p-3 font-mono text-orange-700">P(y = 1 | X) + P(y = 0 | X) = 1.0</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Maximum Likelihood (MLE)</td>
                <td className="p-3">Estimates optimal model parameters by maximizing log-likelihood (minimizing log-loss)</td>
                <td className="p-3 font-mono text-orange-700">argmax_β Σ log P(yᵢ | Xᵢ; β)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3: WHAT IS CLASSIFICATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 03
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Foundations</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          3. What is Classification?
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Classification is a supervised machine learning methodology where an algorithm predicts a discrete categorical class label rather than a continuous number. The model learns mathematical patterns associating input feature vectors X with discrete target labels y.
        </p>

        {/* 3.1 Supervised Learning */}
        <div className="mt-6 p-4 rounded-2xl bg-stone-50 border border-stone-200">
          <h3 className="text-sm font-bold text-stone-900 uppercase font-mono">3.1 Classification as Supervised Learning</h3>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
            Every classification training observation consists of an input feature tuple <strong>X</strong> (e.g., transaction amount, account age, failed login count) paired with a ground-truth class label <strong>y</strong> (e.g., Fraud vs. Non-Fraud).
          </p>
          <div className="mt-3 bg-stone-900 text-stone-100 p-3 rounded-xl font-mono text-xs overflow-x-auto">
            <code>
              X = df[["Transaction_Amount", "Account_Age", "Login_Count"]]<br />
              y = df["Fraud"]  # Target vector containing discrete labels
            </code>
          </div>
        </div>

        {/* 3.2 Regression vs Classification */}
        <div className="mt-6">
          <h3 className="text-base font-bold text-stone-900">3.2 Regression versus Classification</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50 text-stone-700 font-bold font-mono">
                  <th className="p-3">Attribute</th>
                  <th className="p-3">Regression (Modules 5 &amp; 6)</th>
                  <th className="p-3">Classification (Module 7)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-600">
                <tr>
                  <td className="p-3 font-semibold text-stone-900">Target Type</td>
                  <td className="p-3">Continuous numerical value (ℝ)</td>
                  <td className="p-3">Discrete category / class label</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-stone-900">Example Question</td>
                  <td className="p-3">"What will the house price be?" (₹85 Lakh)</td>
                  <td className="p-3">"Will the loan be approved?" (Approved / Rejected)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-stone-900">Core Evaluation</td>
                  <td className="p-3">MAE, MSE, RMSE, R-squared</td>
                  <td className="p-3">Accuracy, Precision, Recall, F1, ROC-AUC, Log-Loss</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-stone-900">Output Mapping</td>
                  <td className="p-3">Unbounded real line (-∞ to +∞)</td>
                  <td className="p-3">Bounded probability distribution ([0, 1])</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3.3 Types of Classification */}
        <div className="mt-6">
          <h3 className="text-base font-bold text-stone-900">3.3 Classification Problem Taxonomy</h3>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { type: "Binary", count: "2 Classes", example: "Spam vs. Not Spam, Fraud vs. Genuine", desc: "Mutually exclusive dual-outcome categorization." },
              { type: "Multiclass", count: "3+ Classes", example: "Cat vs. Dog vs. Bird, Handwritten 0-9", desc: "Each sample belongs to exactly one of K categories." },
              { type: "Multilabel", count: "Multiple Labels", example: "Image tagging: [Car, Person, Tree]", desc: "Multiple categories can apply simultaneously." },
              { type: "Ordinal", count: "Ordered Classes", example: "Customer Rating: [Low, Medium, High]", desc: "Discrete classes have an inherent ranking or order." },
            ].map((c, i) => (
              <div key={i} className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="font-mono text-xs font-bold text-orange-700 uppercase">{c.type}</span>
                <div className="text-xs font-mono text-stone-500 mt-0.5">{c.count}</div>
                <div className="text-xs font-semibold text-stone-800 mt-2">{c.example}</div>
                <p className="text-[11px] text-stone-500 mt-1">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3.4 Classification Workflow */}
        <div className="mt-6 p-4 rounded-2xl bg-orange-50/50 border border-orange-200">
          <h3 className="text-sm font-bold text-orange-950 font-mono uppercase">3.4 The 5-Stage Classification Lifecycle</h3>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-white border border-orange-200 font-semibold text-stone-800">1. Labeled Dataset (X, y)</div>
            <div className="p-2.5 rounded-xl bg-white border border-orange-200 font-semibold text-stone-800">2. Preprocessing &amp; Scaling</div>
            <div className="p-2.5 rounded-xl bg-white border border-orange-200 font-semibold text-stone-800">3. Probability Model Fitting</div>
            <div className="p-2.5 rounded-xl bg-white border border-orange-200 font-semibold text-stone-800">4. Probability Estimation</div>
            <div className="p-2.5 rounded-xl bg-white border border-orange-200 font-semibold text-stone-800">5. Decision Thresholding</div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROBLEM FORMULATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 04
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Methodology</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          4. Classification Problem Formulation
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Formulating a classification problem requires converting business questions into structured machine learning specifications before fitting any algorithm.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="text-sm font-bold text-stone-900 font-mono uppercase">Customer Churn Case Study</h3>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-stone-600">
              <li><strong>Business Goal:</strong> Proactively identify customers likely to cancel subscriptions.</li>
              <li><strong>Positive Class:</strong> Customer Churns (y = 1).</li>
              <li><strong>Negative Class:</strong> Customer Retained (y = 0).</li>
              <li><strong>Key Predictors:</strong> Tenure (months), Monthly Charges, Support Tickets, Contract Type.</li>
              <li><strong>Primary Success Metrics:</strong> Recall on churners, Precision, ROC-AUC.</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="text-sm font-bold text-stone-900 font-mono uppercase">Target Leakage &amp; Prediction Point</h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
              <strong>The Temporal Prediction Point:</strong> Features must strictly be available at the exact moment inference occurs. If predicting customer churn at the start of Month M, using end-of-month support cancellation records introduces catastrophic target leakage.
            </p>
            <div className="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
              Rule: Never include post-event indicators (e.g. account closure date, final survey feedback) inside feature matrix X.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BINARY CLASSIFICATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 05
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Binary Setup</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          5. Binary Classification
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Binary classification maps inputs to two categorical states, typically encoded as y ∈ &#123;0, 1&#125;. Rather than directly producing a hard binary label, modern statistical classifiers estimate the posterior probability P(y = 1 | X).
        </p>

        <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
          <div className="text-stone-400 mb-2"># Production binary classification setup with stratification</div>
          <code>
            from sklearn.linear_model import LogisticRegression<br />
            from sklearn.model_selection import train_test_split<br />
            from sklearn.metrics import accuracy_score<br /><br />
            X = df[["Tenure", "Monthly_Charges", "Support_Tickets"]]<br />
            y = df["Churn"]  # 0: Retained, 1: Churned<br /><br />
            # Preserve class proportions across training and test splits<br />
            X_train, X_test, y_train, y_test = train_test_split(<br />
            &nbsp;&nbsp;X, y, test_size=0.20, random_state=42, stratify=y<br />
            )<br /><br />
            model = LogisticRegression(max_iter=1000)<br />
            model.fit(X_train, y_train)<br /><br />
            # Obtain probability matrix [P(y=0), P(y=1)]<br />
            probabilities = model.predict_proba(X_test)<br />
            print("Model Classes:", model.classes_)  # Output: [0, 1]<br />
            print("Positive Class Probabilities (First 3):", probabilities[:3, 1])
          </code>
        </div>
      </section>

      {/* SECTION 6: LOGISTIC REGRESSION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 06
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Core Algorithm</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          6. Logistic Regression
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Despite its historical name containing "regression", Logistic Regression is a supervised classification algorithm that estimates the conditional probability that an observation belongs to a specific class.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
            <h3 className="text-sm font-bold text-rose-950 font-mono uppercase">Why Linear Regression Fails for Classification</h3>
            <ul className="mt-2 space-y-2 text-xs text-rose-900">
              <li><strong>Unbounded Predictions:</strong> Linear regression ŷ = Xβ can output negative values (-0.45) or numbers greater than one (1.35), violating Kolmogorov probability axioms.</li>
              <li><strong>Sensitive to Outliers:</strong> Extreme positive values pull the regression line upward, distorting decision cutoffs and corrupting predictions.</li>
              <li><strong>Inappropriate Loss:</strong> Squared error (MSE) penalizes predictions that are "too correct" (e.g. ŷ = 1.8 for true class 1) and assumes homoscedastic Gaussian residuals.</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
            <h3 className="text-sm font-bold text-emerald-950 font-mono uppercase">The Two-Stage Logistic Solution</h3>
            <ol className="mt-2 space-y-2 text-xs text-emerald-900 list-decimal list-inside">
              <li><strong>Stage 1 &mdash; Linear Decision Score:</strong> Computes the inner product of weights and features: z = β₀ + β₁x₁ + β₂x₂ + ... + βₚxₚ.</li>
              <li><strong>Stage 2 &mdash; Sigmoid Squashing:</strong> Passes the unbounded score z into the nonlinear sigmoid function σ(z) to bound outputs strictly in (0, 1).</li>
              <li><strong>Stage 3 &mdash; Decision Rule:</strong> Compares the resulting probability p against a decision threshold (default 0.50).</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 7: SIGMOID FUNCTION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 07
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Sigmoid &amp; Odds</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          7. Sigmoid Function &amp; Odds Ratios
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          The sigmoid function transforms any real-valued number from -∞ to +∞ into a valid probability strictly between 0 and 1.
        </p>

        {/* Formula Box */}
        <div className="mt-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
          <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">Standard Logistic Sigmoid Formula</div>
          <div className="text-xl sm:text-2xl font-black font-mono text-orange-700">
            σ(z) = 1 / (1 + e⁻ᶻ)
          </div>
          <div className="mt-2 text-xs text-stone-600 font-mono">
            P(y = 1 | X) = σ(β₀ + βᵀX) = 1 / (1 + e^-(β₀ + β₁x₁ + ... + βₚxₚ))
          </div>
        </div>

        {/* Sigmoid Table & Odds Ratios */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50 text-stone-700 font-mono">
                  <th className="p-2">Score z</th>
                  <th className="p-2">σ(z) Output</th>
                  <th className="p-2">Interpretation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-600">
                <tr><td className="p-2 font-mono">-5.0</td><td className="p-2 font-mono text-orange-700">0.0067</td><td className="p-2">Virtually zero probability</td></tr>
                <tr><td className="p-2 font-mono">-2.0</td><td className="p-2 font-mono text-orange-700">0.1192</td><td className="p-2">Strong negative evidence</td></tr>
                <tr><td className="p-2 font-mono">0.0</td><td className="p-2 font-mono font-bold text-stone-900">0.5000</td><td className="p-2">Decision Boundary</td></tr>
                <tr><td className="p-2 font-mono">+2.0</td><td className="p-2 font-mono text-orange-700">0.8808</td><td className="p-2">Strong positive evidence</td></tr>
                <tr><td className="p-2 font-mono">+5.0</td><td className="p-2 font-mono text-orange-700">0.9933</td><td className="p-2">Near-certain positive</td></tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-2">
            <h3 className="font-bold text-stone-900 font-mono uppercase">Log-Odds &amp; Odds Ratios</h3>
            <p><strong>Odds:</strong> Odds = p / (1 - p). If p = 0.80, odds = 0.80 / 0.20 = 4 to 1.</p>
            <p><strong>Log-Odds (Logit):</strong> log(p / (1 - p)) = β₀ + βᵀX. Logistic regression is linear in the log-odds.</p>
            <p><strong>Odds Ratio (e^β):</strong> For a 1-unit increase in feature xⱼ, the odds multiply by e^(βⱼ). If βⱼ = 0.70, e^0.70 ≈ 2.01 (odds double; not probability doubles).</p>
          </div>
        </div>
      </section>

      {/* SECTION 8: DECISION BOUNDARIES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 08
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Geometry</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          8. Decision Boundaries
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          The decision boundary is the hyperplane or hypersurface in feature space where the model's predicted probability equals the classification threshold (by default, p = 0.50, where z = 0).
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-600">
            <h3 className="font-bold text-stone-900 font-mono uppercase">Mathematical Formulation</h3>
            <p className="mt-2">
              For a two-feature dataset (x₁, x₂), the decision boundary satisfies:
            </p>
            <div className="my-2 p-2 rounded-lg bg-white border border-stone-200 font-mono text-orange-700 font-bold text-center">
              β₀ + β₁x₁ + β₂x₂ = 0 &nbsp;⟹&nbsp; x₂ = -(β₁/β₂)x₁ - (β₀/β₂)
            </div>
            <p>
              In original feature space, standard logistic regression forms a linear separating line (2D), flat plane (3D), or hyperplane (p-dimensions).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-600">
            <h3 className="font-bold text-stone-900 font-mono uppercase">Nonlinear Boundaries via Polynomials</h3>
            <p className="mt-2">
              By augmenting the feature space with interaction and higher-order terms:
            </p>
            <div className="my-2 p-2 rounded-lg bg-white border border-stone-200 font-mono text-orange-700 font-bold text-center">
              z = β₀ + β₁x₁ + β₂x₂ + β₃x₁² + β₄x₂² = 0
            </div>
            <p>
              The linear decision hyperplane in polynomial space projects back as circles, parabolas, or complex curves in the original coordinates.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: LOG-LOSS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 09
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Loss Functions</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          9. Log-Loss (Binary Logistic Loss)
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Accuracy only measures whether a thresholded prediction matches the true label. Log-loss directly measures the quality and calibration of predicted probabilities by computing the negative log-likelihood.
        </p>

        <div className="mt-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
          <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">Average Binary Log-Loss</div>
          <div className="text-lg sm:text-xl font-black font-mono text-orange-700">
            LogLoss = - (1/n) Σ [ yᵢ log(pᵢ) + (1 - yᵢ) log(1 - pᵢ) ]
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="text-xs font-bold font-mono text-stone-900 uppercase">Penalty for Confident Errors (y = 1)</h3>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-stone-200 font-mono text-stone-700">
                    <th className="p-1.5">Predicted P(y=1)</th>
                    <th className="p-1.5">Log-Loss Penalty</th>
                    <th className="p-1.5">Severity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-600">
                  <tr><td className="p-1.5 font-mono">0.99</td><td className="p-1.5 font-mono text-emerald-700">0.010</td><td>Minimal error</td></tr>
                  <tr><td className="p-1.5 font-mono">0.90</td><td className="p-1.5 font-mono text-emerald-700">0.105</td><td>Low error</td></tr>
                  <tr><td className="p-1.5 font-mono">0.50</td><td className="p-1.5 font-mono text-amber-700">0.693</td><td>Uncertain</td></tr>
                  <tr><td className="p-1.5 font-mono">0.10</td><td className="p-1.5 font-mono text-rose-700">2.303</td><td>High error</td></tr>
                  <tr><td className="p-1.5 font-mono">0.01</td><td className="p-1.5 font-mono font-bold text-rose-700">4.605</td><td>Severe penalty</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-2">
            <h3 className="font-bold font-mono text-stone-900 uppercase">Log-Loss vs. Accuracy</h3>
            <p><strong>Accuracy</strong> counts discrete hits and misses; it treats p = 0.51 and p = 0.99 identically if both predict positive.</p>
            <p><strong>Log-Loss</strong> rewards high-confidence correct predictions and exponentially penalizes confident wrong predictions, ensuring well-calibrated probabilities.</p>
          </div>
        </div>
      </section>

      {/* SECTION 10: CROSS-ENTROPY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Information Theory</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          10. Cross-Entropy
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Cross-entropy measures the divergence between the true one-hot ground-truth probability distribution y and the model's predicted probability distribution p across K classes.
        </p>

        <div className="mt-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
          <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">Categorical Multiclass Cross-Entropy</div>
          <div className="text-lg sm:text-xl font-black font-mono text-orange-700">
            L = - Σ [ y_k · log(p_k) ] (from k=1 to K)
          </div>
          <p className="mt-2 text-xs text-stone-500">
            Because true target vector y is one-hot encoded (y_k = 1 for the true class, 0 for all others), loss simplifies to -log(p_true).
          </p>
        </div>
      </section>

      {/* SECTION 11: SOFTMAX REGRESSION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Multinomial</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          11. Softmax Regression (Multinomial Logistic Regression)
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          When a classification problem involves three or more mutually exclusive categories (K ≥ 3), softmax regression generalizes the binary sigmoid into a normalized multiclass probability vector.
        </p>

        <div className="mt-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
          <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">Softmax Formula</div>
          <div className="text-lg sm:text-xl font-black font-mono text-orange-700">
            P(y = k | X) = e^(z_k) / Σ e^(z_j) &nbsp;(summed across j=1 to K)
          </div>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
          <div className="text-stone-400 mb-2"># Numerically stable Softmax implementation (subtract max logit)</div>
          <code>
            import numpy as np<br /><br />
            def stable_softmax(logits):<br />
            &nbsp;&nbsp;# Subtract maximum score along axis 1 to prevent e^z floating-point overflow<br />
            &nbsp;&nbsp;shifted_logits = logits - np.max(logits, axis=1, keepdims=True)<br />
            &nbsp;&nbsp;exp_scores = np.exp(shifted_logits)<br />
            &nbsp;&nbsp;return exp_scores / np.sum(exp_scores, axis=1, keepdims=True)<br /><br />
            # Example: 3 sample logits for [Cat, Dog, Bird]<br />
            raw_scores = np.array([[2.0, 1.0, 0.5]])<br />
            probs = stable_softmax(raw_scores)<br />
            print("Probabilities:", probs)  # [0.629, 0.231, 0.140] &rarr; Sums to 1.000
          </code>
        </div>
      </section>

      {/* SECTION 12: MULTICLASS STRATEGIES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Multiclass Strategies</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          12. Multiclass Classification Strategies: OvR, OvO &amp; Softmax
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          When dealing with algorithms originally designed for binary outcomes, machine learning employs two architectural decomposition patterns: One-vs-Rest and One-vs-One.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-700 font-bold font-mono">
                <th className="p-3">Attribute</th>
                <th className="p-3">One-vs-Rest (OvR)</th>
                <th className="p-3">One-vs-One (OvO)</th>
                <th className="p-3">Softmax Regression</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Architecture</td>
                <td className="p-3">Train 1 model per class against all others combined</td>
                <td className="p-3">Train 1 model for every distinct pair of classes</td>
                <td className="p-3">Single joint multinomial probability estimator</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Total Models Required</td>
                <td className="p-3 font-mono font-bold text-orange-700">K models</td>
                <td className="p-3 font-mono font-bold text-orange-700">K(K - 1) / 2 models</td>
                <td className="p-3 font-mono font-bold text-emerald-700">1 single fitted estimator</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">For K = 10 Classes</td>
                <td className="p-3">10 models</td>
                <td className="p-3">45 models</td>
                <td className="p-3">1 model</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Decision Rule</td>
                <td className="p-3">Argmax of binary classifier scores</td>
                <td className="p-3">Majority pairwise voting tournament</td>
                <td className="p-3">Argmax of normalized class probabilities</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Probability Quality</td>
                <td className="p-3">Uncalibrated across independent models</td>
                <td className="p-3">No direct calibrated probability vector</td>
                <td className="p-3">Normalized distribution summing strictly to 1.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 13: CLASSIFICATION THRESHOLDS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Decision Rules</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          13. Classification Thresholds &amp; Tradeoffs
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          The classification threshold is the numerical probability cutoff used to convert continuous probabilities into discrete class decisions. While 0.50 is the default in Scikit-learn, it is rarely the optimal operational threshold in real-world systems.
        </p>

        {/* Confusion Matrix Table */}
        <div className="mt-6 p-4 rounded-2xl bg-stone-50 border border-stone-200">
          <h3 className="text-sm font-bold text-stone-900 font-mono uppercase mb-3">The Universal Confusion Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-center text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-100 text-stone-700 font-mono">
                  <th className="p-3 text-left">Ground Truth</th>
                  <th className="p-3">Predicted Negative (0)</th>
                  <th className="p-3">Predicted Positive (1)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr>
                  <td className="p-3 font-semibold text-left">Actual Negative (0)</td>
                  <td className="p-3 bg-emerald-50 text-emerald-800 font-bold">True Negative (TN)</td>
                  <td className="p-3 bg-rose-50 text-rose-800 font-bold">False Positive (FP) &mdash; Type I Error</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-left">Actual Positive (1)</td>
                  <td className="p-3 bg-rose-50 text-rose-800 font-bold">False Negative (FN) &mdash; Type II Error</td>
                  <td className="p-3 bg-emerald-50 text-emerald-800 font-bold">True Positive (TP)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Metric Formulas */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-mono text-stone-500 uppercase font-bold">Precision</div>
            <div className="text-sm font-mono text-orange-700 font-black mt-1">TP / (TP + FP)</div>
            <p className="text-[11px] text-stone-600 mt-1">Of all predicted positives, how many were genuine? High precision eliminates false alarms.</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-mono text-stone-500 uppercase font-bold">Recall (Sensitivity)</div>
            <div className="text-sm font-mono text-orange-700 font-black mt-1">TP / (TP + FN)</div>
            <p className="text-[11px] text-stone-600 mt-1">Of all actual positives, how many did we capture? High recall prevents missed threats.</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-mono text-stone-500 uppercase font-bold">F1-Score</div>
            <div className="text-sm font-mono text-orange-700 font-black mt-1">2 &middot; (P &middot; R) / (P + R)</div>
            <p className="text-[11px] text-stone-600 mt-1">Harmonic mean of precision and recall, balancing false alarms against misses.</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-mono text-stone-500 uppercase font-bold">Specificity</div>
            <div className="text-sm font-mono text-orange-700 font-black mt-1">TN / (TN + FP)</div>
            <p className="text-[11px] text-stone-600 mt-1">Proportion of actual negatives correctly identified. True Negative Rate.</p>
          </div>
        </div>
      </section>

      {/* SECTION 14: IMBALANCED CLASSIFICATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Imbalanced Learning</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          14. Imbalanced Classification &amp; The Accuracy Paradox
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          In fraud detection, rare disease screening, and cyber defense, positive cases comprise only 0.1% to 2% of observations. Evaluating these problems using naive accuracy produces dangerous results.
        </p>

        <div className="mt-6 p-4 rounded-2xl bg-rose-50 border border-rose-200">
          <h3 className="text-sm font-bold text-rose-950 font-mono uppercase">The 99% Accuracy Paradox</h3>
          <p className="mt-2 text-xs sm:text-sm text-rose-900 leading-relaxed">
            Consider 10,000 credit transactions containing 100 fraudulent charges (1%). A trivial "dumb" classifier that predicts "Legitimate" for every transaction achieves <strong>99.0% accuracy</strong>, yet detects <strong>0% of fraudulent attacks</strong> (Recall = 0.0, F1 = 0.0). Accuracy completely obscures the complete failure of the model.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700">
            <h3 className="font-bold text-stone-900 font-mono uppercase">Class Weighting (class_weight='balanced')</h3>
            <p className="mt-2">
              Automatically assigns higher loss penalties to minority samples during optimization:
            </p>
            <div className="my-2 p-2 rounded-lg bg-white border border-stone-200 font-mono text-orange-700 font-bold text-center">
              w_k = n_total / (K &middot; n_k)
            </div>
            <p>
              Allows minority mistakes to contribute proportionally to the loss gradient without synthetically altering dataset sizes.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700">
            <h3 className="font-bold text-stone-900 font-mono uppercase">CRITICAL: Avoid Resampling Leakage</h3>
            <p className="mt-2">
              Applying SMOTE or random oversampling before <code>train_test_split()</code> leaks information from validation and test sets into training, generating falsely inflated evaluation scores.
            </p>
            <p className="mt-2 font-mono text-rose-700 font-bold">
              Rule: Resample ONLY inside the training fold via imblearn.pipeline.Pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 15: EVALUATION METRICS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Diagnostics</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          15. Classification Evaluation Metrics: ROC-AUC vs. PR-AUC
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Threshold-free evaluation curves measure classifier discrimination across every possible operating threshold from 0.0 to 1.0.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700">
            <h3 className="font-bold text-stone-900 font-mono uppercase">ROC Curve &amp; ROC-AUC</h3>
            <p className="mt-2"><strong>X-Axis:</strong> False Positive Rate (FPR = FP / (FP + TN)).</p>
            <p><strong>Y-Axis:</strong> True Positive Rate (TPR = TP / (TP + FN) = Recall).</p>
            <p className="mt-2 text-stone-600">
              Measures the probability that the classifier ranks a randomly chosen positive observation higher than a randomly chosen negative observation. Baseline random guess = 0.50; perfect ranking = 1.00.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700">
            <h3 className="font-bold text-stone-900 font-mono uppercase">Precision-Recall Curve &amp; Average Precision (PR-AUC)</h3>
            <p className="mt-2"><strong>X-Axis:</strong> Recall (Coverage of true positives).</p>
            <p><strong>Y-Axis:</strong> Precision (Correctness of positive alarms).</p>
            <p className="mt-2 text-stone-600">
              Crucial for severely imbalanced datasets. Because PR curves exclude True Negatives (TN) from the denominator, they cannot be artificially inflated by an overwhelming majority class.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 16: COMPLETE PROJECT 1 - CHURN */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">End-to-End Binary Project</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          16. Complete Practical Project &mdash; Customer Churn Classification
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          This complete 18-step project demonstrates end-to-end production binary classification: generating synthetic churn records, imputing missing data, one-hot encoding categories, standardizing features inside a ColumnTransformer, optimizing probability thresholds via validation F1-scores, evaluating untouched test data, and persisting the pipeline with joblib.
        </p>

        <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
          <code>
            import pandas as pd<br />
            import numpy as np<br />
            from scipy.special import expit<br />
            from sklearn.model_selection import train_test_split<br />
            from sklearn.linear_model import LogisticRegression<br />
            from sklearn.pipeline import Pipeline<br />
            from sklearn.compose import ColumnTransformer<br />
            from sklearn.preprocessing import StandardScaler, OneHotEncoder<br />
            from sklearn.impute import SimpleImputer<br />
            from sklearn.metrics import classification_report, confusion_matrix, roc_auc_score, f1_score<br />
            import joblib<br /><br />
            # 1. Generate 2,000 synthetic customer records<br />
            rng = np.random.default_rng(42)<br />
            n = 2000<br />
            age = rng.integers(18, 75, n)<br />
            tenure = rng.integers(1, 73, n)<br />
            monthly_charges = rng.normal(1200, 300, n).clip(300, 2500)<br />
            support_tickets = rng.poisson(1.3, n)<br />
            contract = rng.choice(["Monthly", "Annual", "Two-Year"], n, p=[0.55, 0.30, 0.15])<br />
            payment = rng.choice(["AutoPay", "Manual"], n, p=[0.65, 0.35])<br /><br />
            contract_eff = np.select([contract == "Monthly", contract == "Annual"], [0.9, 0.1], default=-0.7)<br />
            manual_eff = (payment == "Manual") * 0.25<br />
            z = -2.0 - 0.035 * tenure + 0.0012 * (monthly_charges - 1200) + 0.42 * support_tickets + contract_eff + manual_eff<br />
            churn_prob = expit(z)<br />
            churn = rng.binomial(1, churn_prob)<br /><br />
            df = pd.DataFrame(&#123;<br />
            &nbsp;&nbsp;"Age": age, "Tenure": tenure, "Monthly_Charges": monthly_charges,<br />
            &nbsp;&nbsp;"Support_Tickets": support_tickets, "Contract": contract,<br />
            &nbsp;&nbsp;"Payment_Method": payment, "Churn": churn<br />
            &#125;)<br /><br />
            # 2. Split: 60% Train, 20% Validation, 20% Test (Preserving class balance)<br />
            X = df.drop(columns=["Churn"])<br />
            y = df["Churn"]<br />
            X_dev, X_test, y_dev, y_test = train_test_split(X, y, test_size=0.20, random_state=42, stratify=y)<br />
            X_train, X_val, y_train, y_val = train_test_split(X_dev, y_dev, test_size=0.25, random_state=42, stratify=y_dev)<br /><br />
            # 3. Leak-free Preprocessing Pipeline<br />
            num_cols = ["Age", "Tenure", "Monthly_Charges", "Support_Tickets"]<br />
            cat_cols = ["Contract", "Payment_Method"]<br /><br />
            preprocessor = ColumnTransformer([<br />
            &nbsp;&nbsp;("num", Pipeline([("imp", SimpleImputer(strategy="median")), ("scaler", StandardScaler())]), num_cols),<br />
            &nbsp;&nbsp;("cat", Pipeline([("imp", SimpleImputer(strategy="most_frequent")), ("enc", OneHotEncoder(handle_unknown="ignore"))]), cat_cols)<br />
            ])<br /><br />
            model = Pipeline([<br />
            &nbsp;&nbsp;("preprocessor", preprocessor),<br />
            &nbsp;&nbsp;("clf", LogisticRegression(C=1.0, max_iter=2000))<br />
            ])<br />
            model.fit(X_train, y_train)<br /><br />
            # 4. Validation Threshold Optimization for Maximum F1<br />
            val_probs = model.predict_proba(X_val)[:, 1]<br />
            thresholds = np.arange(0.10, 0.90, 0.02)<br />
            f1_scores = [f1_score(y_val, (val_probs &gt;= t).astype(int)) for t in thresholds]<br />
            best_threshold = thresholds[np.argmax(f1_scores)]<br />
            print(f"Optimal Threshold: &#123;best_threshold:.2f&#125; (Val F1: &#123;max(f1_scores):.4f&#125;)")<br /><br />
            # 5. Untouched Test Set Evaluation<br />
            test_probs = model.predict_proba(X_test)[:, 1]<br />
            test_preds = (test_probs &gt;= best_threshold).astype(int)<br />
            print("\nFinal Test Classification Report:")<br />
            print(classification_report(y_test, test_preds, target_names=["Retained", "Churned"]))<br />
            print("ROC-AUC Score:", roc_auc_score(y_test, test_probs))<br /><br />
            # 6. Save Artifact<br />
            joblib.dump(&#123;"model": model, "threshold": best_threshold&#125;, "churn_classifier.pkl")
          </code>
        </div>
      </section>

      {/* SECTION 17: COMPLETE PROJECT 2 - IRIS MULTICLASS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Multiclass Project</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          17. Complete Practical Project &mdash; Multiclass Flower Classification
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          This 10-step multiclass project uses the classic Fisher's Iris dataset to benchmark Softmax Regression, One-vs-Rest, and One-vs-One architectures.
        </p>

        <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
          <code>
            from sklearn.datasets import load_iris<br />
            from sklearn.model_selection import train_test_split<br />
            from sklearn.pipeline import make_pipeline<br />
            from sklearn.preprocessing import StandardScaler<br />
            from sklearn.linear_model import LogisticRegression<br />
            from sklearn.multiclass import OneVsRestClassifier, OneVsOneClassifier<br />
            from sklearn.metrics import classification_report, accuracy_score<br />
            import pandas as pd<br /><br />
            iris = load_iris()<br />
            X, y = iris.data, iris.target<br /><br />
            X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=42, stratify=y)<br /><br />
            # Train 3 Multiclass Approaches<br />
            softmax_model = make_pipeline(StandardScaler(), LogisticRegression(max_iter=2000))<br />
            ovr_model = make_pipeline(StandardScaler(), OneVsRestClassifier(LogisticRegression(max_iter=2000)))<br />
            ovo_model = make_pipeline(StandardScaler(), OneVsOneClassifier(LogisticRegression(max_iter=2000)))<br /><br />
            softmax_model.fit(X_train, y_train)<br />
            ovr_model.fit(X_train, y_train)<br />
            ovo_model.fit(X_train, y_train)<br /><br />
            print("Softmax Accuracy:", accuracy_score(y_test, softmax_model.predict(X_test)))<br />
            print("OvR Accuracy:&nbsp;&nbsp;&nbsp;&nbsp;", accuracy_score(y_test, ovr_model.predict(X_test)))<br />
            print("OvO Accuracy:&nbsp;&nbsp;&nbsp;&nbsp;", accuracy_score(y_test, ovo_model.predict(X_test)))<br /><br />
            print("\nSoftmax Detailed Report:")<br />
            print(classification_report(y_test, softmax_model.predict(X_test), target_names=iris.target_names))
          </code>
        </div>
      </section>

      {/* SECTION 18: COMMON MISTAKES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Troubleshooting</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          18. Common Classification Pitfalls &amp; Scikit-learn 1.9 Notes
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Avoiding these common engineering and statistical mistakes ensures reliable classification deployments.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-700 font-bold font-mono">
                <th className="p-3">Frequent Mistake</th>
                <th className="p-3">Why It Fails</th>
                <th className="p-3">Correct Engineering Practice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600">
              <tr>
                <td className="p-3 font-semibold text-rose-800">Using Linear Regression for Classification</td>
                <td className="p-3">Produces probabilities &lt; 0 or &gt; 1; sensitive to extreme values</td>
                <td className="p-3 font-semibold text-emerald-800">Use LogisticRegression with sigmoid/softmax mapping</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-rose-800">Blindly relying on 0.50 Threshold</td>
                <td className="p-3">Suboptimal when false positive and false negative costs are asymmetric</td>
                <td className="p-3 font-semibold text-emerald-800">Tune threshold using validation set or TunedThresholdClassifierCV</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-rose-800">Relying on Accuracy for Rare Events</td>
                <td className="p-3">99% accuracy can conceal 0% detection of critical fraud/diseases</td>
                <td className="p-3 font-semibold text-emerald-800">Evaluate Recall, Precision-Recall AUC, and F1-score</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-rose-800">Resampling (SMOTE) Before Splitting</td>
                <td className="p-3">Data leakage from test/validation distributions into training</td>
                <td className="p-3 font-semibold text-emerald-800">Embed SMOTE strictly inside training cross-validation folds</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-rose-800">Using Post-Event Features</td>
                <td className="p-3">Target leakage yields artificially high training scores that collapse in production</td>
                <td className="p-3 font-semibold text-emerald-800">Audit features to ensure 100% availability at inference timestamp</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm">
          <strong>Important Scikit-learn 1.9+ Note:</strong> In modern Scikit-learn versions, the legacy <code>penalty</code> string parameter is deprecated. Regularization strength is configured strictly via <code>C</code> (inverse regularization; smaller C = stronger penalty) and <code>l1_ratio</code> for Elastic Net solvers.
        </div>
      </section>

      {/* SECTION 19: PRACTICAL ASSIGNMENTS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Hands-On Practice</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          19. Practical Assignments
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Reinforce your mastery of classification and logistic regression through these five progressive hands-on projects:
        </p>

        <div className="mt-6 space-y-4">
          {[
            { title: "Assignment 1: Email Spam Detection & Coefficient Interpretation", desc: "Build a binary text-metadata classifier predicting spam. Calculate odds ratios (e^β) for suspicious word counts and attachment flags. Optimize thresholds to eliminate false positives on important emails." },
            { title: "Assignment 2: Credit Loan Approval & 2D Decision Boundary Visualization", desc: "Train a logistic regression classifier on applicant credit scores, debt-to-income ratios, and annual income. Plot the linear decision boundary using np.meshgrid() and contourf(). Analyze log-loss across iterations." },
            { title: "Assignment 3: Multiclass Benchmarking on Wine Recognition", desc: "Load the 3-class Scikit-learn Wine dataset. Train and benchmark Softmax, OvR, and OvO architectures. Compare confusion matrices, macro-averaged vs. weighted-averaged metrics, and inference latency." },
            { title: "Assignment 4: High-Imbalance Credit Card Fraud Detection", desc: "Simulate a 99.5% legitimate / 0.5% fraudulent dataset. Compare baseline logistic regression against class_weight='balanced', Random Undersampling, and SMOTE within an imblearn pipeline. Plot Precision-Recall curves." },
            { title: "Assignment 5: Real-World Kaggle Capstone Project", desc: "Select a real-world classification dataset from Kaggle (e.g. Telco Churn, Heart Disease, Employee Attrition). Execute the complete 18-step pipeline: EDA, ColumnTransformer, hyperparameter tuning via GridSearchCV, and deployment serialization." },
          ].map((a, i) => (
            <div key={i} className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <h3 className="text-sm font-bold text-stone-900 font-mono">{a.title}</h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 20: FORMULAS CHEAT SHEET */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 20
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Reference</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          20. Important Formulas &amp; Concepts Cheat Sheet
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-700 font-bold font-mono">
                <th className="p-3">Concept</th>
                <th className="p-3">Formula / Core Principle</th>
                <th className="p-3">Key Utility</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600 font-mono">
              <tr>
                <td className="p-3 font-semibold text-stone-900 font-sans">Linear Decision Score</td>
                <td className="p-3 text-orange-700">z = β₀ + βᵀX = β₀ + Σ βⱼxⱼ</td>
                <td className="p-3 font-sans text-xs">Weighted sum of features</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900 font-sans">Sigmoid Function</td>
                <td className="p-3 text-orange-700">σ(z) = 1 / (1 + e⁻ᶻ)</td>
                <td className="p-3 font-sans text-xs">Maps score from ℝ to probability (0, 1)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900 font-sans">Log-Odds (Logit)</td>
                <td className="p-3 text-orange-700">log(p / (1 - p)) = β₀ + βᵀX</td>
                <td className="p-3 font-sans text-xs">Linear relationship with features</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900 font-sans">Odds Ratio</td>
                <td className="p-3 text-orange-700">Odds Ratio = e^(βⱼ)</td>
                <td className="p-3 font-sans text-xs">Multiplicative change in odds per feature unit</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900 font-sans">Softmax Function</td>
                <td className="p-3 text-orange-700">P(y = k | X) = e^(z_k) / Σ e^(z_j)</td>
                <td className="p-3 font-sans text-xs">Multiclass probability distribution summing to 1.0</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900 font-sans">Binary Log-Loss</td>
                <td className="p-3 text-orange-700">- [y log(p) + (1 - y) log(1 - p)]</td>
                <td className="p-3 font-sans text-xs">Penalizes poor and confident wrong probabilities</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900 font-sans">F1-Score</td>
                <td className="p-3 text-orange-700">2 &middot; (Precision &middot; Recall) / (Precision + Recall)</td>
                <td className="p-3 font-sans text-xs">Harmonic balance of precision and coverage</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 21: ASSESSMENT PREVIEW */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Knowledge Verification</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          21. Module Assessment Overview
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          The interactive assessment verifies mastery across 10 core dimensions: classification taxonomy, the sigmoid mapping, linear log-odds modeling, decision thresholds, log-loss vs. accuracy, softmax regression mechanics, OvR vs. OvO decomposition formulas, the accuracy paradox on imbalanced data, and leak-free SMOTE pipelines.
        </p>
        <div className="mt-4 p-4 rounded-2xl bg-orange-50/60 border border-orange-200 text-xs sm:text-sm text-orange-950 font-medium">
          Tip: Switch to the <strong>Interactive Workbenches &amp; Assessment</strong> tab at the top of the page to launch the live 10-question evaluation simulator with instant grading and explanations.
        </div>
      </section>

      {/* SECTION 22: RESOURCES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Further Exploration</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          22. Recommended Learning Resources
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: "Scikit-learn Logistic Regression User Guide", desc: "Comprehensive documentation covering solvers (lbfgs, saga), C parameter regularization, and multinomial modeling.", url: "https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression" },
            { name: "Scikit-learn Decision Threshold Tuning", desc: "Detailed guide on TunedThresholdClassifierCV for cost-sensitive threshold selection.", url: "https://scikit-learn.org/stable/modules/classification_threshold.html" },
            { name: "Imbalanced-Learn Documentation", desc: "Official documentation for SMOTE, SMOTENC, random undersampling, and leak-free pipelines.", url: "https://imbalanced-learn.org/stable/" },
            { name: "Scikit-learn Model Evaluation Metrics", desc: "Mathematical derivations for ROC-AUC, Average Precision, Log-Loss, and balanced accuracy.", url: "https://scikit-learn.org/stable/modules/model_evaluation.html" },
          ].map((r, i) => (
            <a
              key={i}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-orange-300 transition-colors block"
            >
              <div className="text-xs sm:text-sm font-bold text-stone-900 flex items-center justify-between">
                <span>{r.name}</span>
                <span className="text-orange-600 font-mono text-xs">&rarr;</span>
              </div>
              <p className="text-xs text-stone-600 mt-1">{r.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 23: CHECKLIST */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Self-Evaluation</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          23. Module Completion Checklist
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Verify that you have achieved proficiency across all 28 core learning outcomes of Module 7:
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Formulate real-world business tasks into classification models",
            "Distinguish numerical regression from categorical classification",
            "Structure binary labels using y in {0, 1} encoding",
            "Differentiate multiclass, multilabel, and ordinal problems",
            "Separate features X from target vector y without data leakage",
            "Explicitly define and interpret the designated positive class",
            "Explain why ordinary linear regression fails for classification",
            "Calculate linear decision score z = β₀ + βᵀX",
            "Apply the sigmoid function σ(z) = 1 / (1 + e⁻ᶻ)",
            "Interpret model coefficients as log-odds and odds ratios (e^β)",
            "Derive linear decision boundaries where z = 0",
            "Generate nonlinear decision boundaries using polynomial features",
            "Calculate binary log-loss and understand penalty curves",
            "Derive categorical cross-entropy for multiclass distributions",
            "Implement softmax regression for K ≥ 3 categories",
            "Code numerically stable softmax using maximum subtraction",
            "Decompose multiclass tasks using One-vs-Rest (K models)",
            "Decompose multiclass tasks using One-vs-One (K(K-1)/2 models)",
            "Compare OvR, OvO, and Softmax computational tradeoffs",
            "Demonstrate why default 0.50 threshold is rarely optimal",
            "Construct and interpret a full 4-quadrant Confusion Matrix",
            "Calculate Precision, Recall (Sensitivity), and Specificity",
            "Compute F1-score and balanced accuracy metrics",
            "Plot and evaluate ROC curves and compute ROC-AUC score",
            "Plot Precision-Recall curves and compute Average Precision",
            "Diagnose the accuracy paradox in class-imbalanced datasets",
            "Implement class_weight='balanced' in LogisticRegression",
            "Execute complete leak-free churn and flower pipelines",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
              <Check size={14} className="text-emerald-600 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 24: NEXT STAGE */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 24
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Curriculum Roadmap</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          24. Connection to the Next Stage of Machine Learning
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          You have mastered the foundational supervised learning algorithms for both continuous numbers and discrete categories:
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono text-stone-500 uppercase font-bold">Module 5</span>
            <h3 className="text-sm font-bold text-stone-900 mt-1">Linear Regression &amp; OLS</h3>
            <p className="text-xs text-stone-600 mt-1">Learned continuous numerical predictions, normal equations, and Gauss-Markov residual diagnostics.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono text-stone-500 uppercase font-bold">Module 6</span>
            <h3 className="text-sm font-bold text-stone-900 mt-1">Advanced Regularization</h3>
            <p className="text-xs text-stone-600 mt-1">Mastered Ridge L2, Lasso L1, Elastic Net shrinkage, VIF diagnostics, and cross-validated complexity control.</p>
          </div>
          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
            <span className="text-xs font-mono text-orange-700 uppercase font-bold">Module 7 (Current)</span>
            <h3 className="text-sm font-bold text-orange-950 mt-1">Classification &amp; Logistic Regression</h3>
            <p className="text-xs text-orange-900 mt-1">Mastered discrete category prediction, sigmoid/softmax probabilities, log-loss, thresholds, and imbalanced data.</p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-stone-100 text-xs sm:text-sm">
          <strong>The Main Takeaway:</strong> Regression estimates "how much", while classification determines "which category". Logistic regression bridges linear modeling with probability theory, providing calibrated likelihood estimates that empower intelligent business decisions through custom probability thresholds.
        </div>
      </section>
    </div>
  );
}
