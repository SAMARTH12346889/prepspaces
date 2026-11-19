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
} from "lucide-react";

export default function MachineLearningAdvancedRegressionSections() {
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
          In Module 5, linear regression estimated numerical values using straight-line relationships. However, real-world datasets exhibit curved trends, multicollinear features, and severe overfitting risks. Advanced Regression &amp; Regularization introduces mathematical tools to model nonlinear patterns, control complexity, stabilize coefficients, and ensure high test-set generalization.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Build polynomial regression models to represent curved feature relationships.",
            "Distinguish parameter-linear polynomial models from SciPy nonlinear regression.",
            "Derive L1 (Lasso), L2 (Ridge), and combined L1+L2 (Elastic Net) penalties.",
            "Understand why feature scaling (StandardScaler) is mandatory for regularization.",
            "Explain the geometric intuition of L1 diamond corners producing sparse models.",
            "Diagnose and mitigate multicollinearity using correlation heatmaps and VIF.",
            "Implement Filter, Wrapper (RFE), and Embedded feature selection algorithms.",
            "Execute leak-free K-Fold cross-validation and hyperparameter tuning with GridSearchCV.",
            "Deconstruct the Bias-Variance tradeoff: Expected Error = Bias² + Variance + Irreducible Noise.",
            "Construct a complete 16-step production housing price regression pipeline with Joblib export.",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
              <CheckCircle2 size={18} className="text-orange-600 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-medium text-stone-800 leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2 & 3: MATHEMATICAL PREREQUISITES & MOTIVATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 02 &amp; 03
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Foundations &amp; Motivation</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          2 &amp; 3. Why Advanced Regression? Ordinary OLS Limitations
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Ordinary Least Squares minimizes training RSS without penalizing parameter magnitude. When features are correlated or high-degree terms are added, OLS parameters fluctuate wildly, leading to severe overfitting.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
            <h3 className="text-sm font-bold text-stone-900 mb-1">1. Nonlinear Curvature</h3>
            <p className="text-xs text-stone-600">House prices rise rapidly for initial square footage but taper off for massive estates. Straight lines systematically underfit both tails.</p>
          </div>
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
            <h3 className="text-sm font-bold text-stone-900 mb-1">2. Multicollinearity</h3>
            <p className="text-xs text-stone-600">Features like Area_sqft and Area_sqm contain identical rank information, causing singular (XᵀX) matrices and explosive coefficient standard errors.</p>
          </div>
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
            <h3 className="text-sm font-bold text-stone-900 mb-1">3. Generalization Collapse</h3>
            <p className="text-xs text-stone-600">High-dimensional models fit random noise in the training sample, yielding near-zero training loss but catastrophic errors on held-out test data.</p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-orange-50/70 border border-orange-200 text-xs text-orange-950 font-medium">
          <strong>The Advanced Solution:</strong> Combine feature power expansions (PolynomialFeatures) with shrinkage penalties (Ridge, Lasso, Elastic Net) and rigorous cross-validation to discover the optimal bias-variance equilibrium.
        </div>
      </section>

      {/* SECTION 4: POLYNOMIAL REGRESSION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 04
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Nonlinear Feature Expansions</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          4. Polynomial Regression: Mathematical Formulation &amp; Feature Explosion
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Polynomial regression models curved relationships by creating powers of existing features. Although the mapping from x to y is nonlinear, the model remains <strong>linear in its parameters β</strong>:
        </p>

        <div className="mt-6 bg-[#1c1917] p-5 rounded-2xl border border-stone-800 text-stone-100 font-mono text-xs space-y-2">
          <div className="text-stone-400"># Degree 2 Quadratic Model:</div>
          <div className="text-emerald-300">ŷ = β₀ + β₁X + β₂X²</div>
          <div className="text-stone-400 mt-2"># Degree 3 Cubic Model:</div>
          <div className="text-emerald-300">ŷ = β₀ + β₁X + β₂X² + β₃X³</div>
          <div className="text-stone-400 mt-2"># Multiple Features with Interactions (Area, Bedrooms):</div>
          <div className="text-amber-300">ŷ = β₀ + β₁·Area + β₂·Bedrooms + β₃·Area² + β₄·Bedrooms² + β₅·(Area × Bedrooms)</div>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
          <strong>Combinatorial Warning:</strong> Generating polynomial features causes exponential dimensionality growth: (n + d)! / (n! d!). For 20 features at degree 3, the design matrix balloons to 1,771 columns, necessitating regularization.
        </div>
      </section>

      {/* SECTION 5: NONLINEAR REGRESSION (SCIPY) */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 05
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">SciPy Optimization</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          5. Parameter-Nonlinear Regression with SciPy `curve_fit`
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          When physical phenomena follow known laws—such as exponential decay y = a·e^(bx) or logistic growth y = L / (1 + e^(-k(x - x₀)))—the model is nonlinear in its parameters and cannot be solved with linear least squares. SciPy uses the iterative Levenberg-Marquardt algorithm:
        </p>

        <div className="mt-6 bg-[#1c1917] p-5 rounded-2xl border border-stone-800 text-stone-100 font-mono text-xs space-y-2">
          <div className="text-stone-400"># Nonlinear Exponential Curve Fitting in SciPy</div>
          <div className="text-emerald-300">
            import numpy as np<br />
            from scipy.optimize import curve_fit<br /><br />
            def exponential_model(x, a, b):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return a * np.exp(b * x)<br /><br />
            # Initial parameter estimates (p0) are critical for gradient convergence<br />
            params, covariance = curve_fit(exponential_model, X_train, y_train, p0=[2.0, 0.5])<br />
            a_hat, b_hat = params<br />
            print(f"Fitted Equation: y = &#123;a_hat:.3f&#125; * exp(&#123;b_hat:.3f&#125; * x)")
          </div>
        </div>
      </section>

      {/* SECTION 6, 7, 8, 9: REGULARIZATION (RIDGE, LASSO, ELASTIC NET) */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 06 - 09
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Shrinkage &amp; Sparsity</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          6 - 9. Regularization Foundations: Ridge, Lasso, &amp; Elastic Net
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Regularization augments the least-squares objective with a coefficient penalty term: <strong>Total Loss = RSS + Penalty</strong>. Because penalties act directly on parameter magnitudes, <strong>all features must be standardized using StandardScaler</strong>.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
            <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 font-mono text-[10px] font-bold uppercase">L2 Penalty</span>
            <h3 className="text-sm font-bold text-stone-900 mt-2 mb-1">Ridge Regression</h3>
            <div className="font-mono text-xs text-blue-900 bg-white p-2 rounded-lg border border-stone-200 mb-2">
              Loss = RSS + α Σ β_j²
            </div>
            <p className="text-xs text-stone-600">Shrinks coefficients smoothly toward zero. Excellent for multicollinear features. Retains all features (no sparsity).</p>
          </div>

          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
            <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold uppercase">L1 Penalty</span>
            <h3 className="text-sm font-bold text-stone-900 mt-2 mb-1">Lasso Regression</h3>
            <div className="font-mono text-xs text-emerald-900 bg-white p-2 rounded-lg border border-stone-200 mb-2">
              Loss = RSS + α Σ |β_j|
            </div>
            <p className="text-xs text-stone-600">Forces uninformative coefficients to exact zero. Performs automated embedded feature selection and creates sparse models.</p>
          </div>

          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
            <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 font-mono text-[10px] font-bold uppercase">L1 + L2 Combo</span>
            <h3 className="text-sm font-bold text-stone-900 mt-2 mb-1">Elastic Net</h3>
            <div className="font-mono text-xs text-purple-900 bg-white p-2 rounded-lg border border-stone-200 mb-2">
              Loss = RSS + α·r Σ|β| + (α(1-r)/2) Σβ²
            </div>
            <p className="text-xs text-stone-600">Combines Lasso sparsity with Ridge stability. Uses `l1_ratio` (r) to balance L1 feature selection and L2 correlated feature grouping.</p>
          </div>
        </div>
      </section>

      {/* SECTION 10: GEOMETRY OF REGULARIZATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Constrained Optimization</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          10. Geometric Intuition: Why Lasso Yields Exact Zero Coefficients
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Regularization can be viewed as minimizing the elliptical contours of the RSS error subject to a budget constraint on parameter space:
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
            <h3 className="font-bold text-stone-900 mb-2">L1 Constraint (Diamond Geometry)</h3>
            <p className="text-stone-600 mb-3">
              The L1 boundary |β₁| + |β₂| ≤ t forms a diamond with sharp corners located directly on the coordinate axes. As the elliptical RSS contours expand from the unconstrained OLS minimum, they almost always touch a sharp corner first, forcing β₁ or β₂ to <strong>exactly zero</strong>.
            </p>
            <div className="p-3 bg-emerald-50 text-emerald-950 rounded-xl border border-emerald-200 font-mono">
              Corner contact point → Sparse feature selection
            </div>
          </div>

          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
            <h3 className="font-bold text-stone-900 mb-2">L2 Constraint (Circular Geometry)</h3>
            <p className="text-stone-600 mb-3">
              The L2 boundary β₁² + β₂² ≤ t forms a smooth circle without corners. The expanding RSS ellipse touches the smooth circular boundary tangentially at off-axis points, shrinking all coefficients proportionally without driving them to exact zero.
            </p>
            <div className="p-3 bg-blue-50 text-blue-950 rounded-xl border border-blue-200 font-mono">
              Tangential contact point → Smooth weight shrinkage
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 & 12: MULTICOLLINEARITY & FEATURE SELECTION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 11 &amp; 12
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Feature Engineering</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          11 &amp; 12. Multicollinearity Diagnostics (VIF) &amp; Feature Selection
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Multicollinearity inflates coefficient variance: VIF_j = 1 / (1 - R²_j). A VIF &gt; 5.0 signals severe redundancy where feature j is linearly predicted by other predictors.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
            <thead className="bg-stone-100 text-stone-800 font-bold">
              <tr>
                <th className="p-3">Selection Category</th>
                <th className="p-3">Methodology</th>
                <th className="p-3">Scikit-learn Implementation</th>
                <th className="p-3">Key Tradeoff</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Filter</td>
                <td className="p-3">Pearson/Spearman correlation thresholding</td>
                <td className="p-3 font-mono">SelectKBest, mutual_info_regression</td>
                <td className="p-3">Fast but ignores feature interactions</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Wrapper</td>
                <td className="p-3">Repeated model fitting and greedy pruning</td>
                <td className="p-3 font-mono">RFE(estimator=LinearRegression(), n_features_to_select=5)</td>
                <td className="p-3">High accuracy but computationally expensive</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Embedded</td>
                <td className="p-3">L1 regularization embedded into loss minimization</td>
                <td className="p-3 font-mono">Lasso(alpha=0.1), ElasticNet(alpha=0.1, l1_ratio=0.5)</td>
                <td className="p-3">Optimizes prediction and sparsity simultaneously</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 13 & 14: MODEL COMPARISON & BIAS-VARIANCE */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 13 &amp; 14
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Generalization Theory</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          13 &amp; 14. The Bias-Variance Tradeoff &amp; Leak-Free Cross-Validation
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          The expected test error decomposes into three mathematical terms: <strong>Expected Error = Bias² + Variance + Irreducible Noise (σ²)</strong>.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">Underfitting (High Bias)</span>
            <div className="text-rose-700 font-bold mb-2">High Train Loss, High Val Loss</div>
            <p className="text-stone-600 font-sans text-[11px]">Model is too simple (e.g. fitting a straight line to a quadratic curve). Solution: Increase polynomial degree or reduce alpha.</p>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">Optimal Equilibrium</span>
            <div className="text-emerald-700 font-bold mb-2">Balanced Validation Minimum</div>
            <p className="text-stone-600 font-sans text-[11px]">Minimum of the validation error curve. Captures underlying signal without fitting noise.</p>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">Overfitting (High Variance)</span>
            <div className="text-amber-700 font-bold mb-2">Low Train Loss, Exploding Val Loss</div>
            <p className="text-stone-600 font-sans text-[11px]">Model is overly sensitive to training sample fluctuations (e.g. Degree 12 polynomial). Solution: Apply Ridge or Lasso regularization.</p>
          </div>
        </div>

        <div className="mt-6 bg-[#1c1917] p-5 rounded-2xl border border-stone-800 text-stone-100 font-mono text-xs space-y-2">
          <div className="text-stone-400"># Leak-Free Cross-Validation Pipeline with GridSearchCV:</div>
          <div className="text-emerald-300">
            from sklearn.model_selection import GridSearchCV, KFold<br />
            from sklearn.pipeline import Pipeline<br />
            from sklearn.preprocessing import StandardScaler<br />
            from sklearn.linear_model import Ridge<br /><br />
            pipeline = Pipeline([<br />
            &nbsp;&nbsp;&nbsp;&nbsp;("scaler", StandardScaler()),  # Scaler fitted ONLY on train folds<br />
            &nbsp;&nbsp;&nbsp;&nbsp;("model", Ridge())<br />
            ])<br />
            grid = GridSearchCV(pipeline, &#123;"model__alpha": [0.01, 0.1, 1.0, 10.0, 100.0]&#125;, cv=5, scoring="neg_root_mean_squared_error")<br />
            grid.fit(X_train, y_train)<br />
            print("Optimal Alpha:", grid.best_params_)
          </div>
        </div>
      </section>

      {/* SECTION 16: COMPLETE HOUSING PROJECT */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Capstone Implementation</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          16. Complete Practical Project: Advanced Housing Regression
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Comparing baseline OLS against degree-2 Polynomial Regression, Ridge, Lasso, and Elastic Net on the 1,200-property dataset:
        </p>

        <div className="mt-6 bg-[#1c1917] p-5 rounded-2xl border border-stone-800 text-stone-100 font-mono text-xs space-y-3">
          <div className="text-stone-400"># Production ColumnTransformer with Polynomials &amp; Categorical One-Hot Encoding:</div>
          <div className="text-emerald-300">
            from sklearn.compose import ColumnTransformer<br />
            from sklearn.impute import SimpleImputer<br />
            from sklearn.preprocessing import PolynomialFeatures, StandardScaler, OneHotEncoder<br /><br />
            num_pipe = Pipeline([<br />
            &nbsp;&nbsp;&nbsp;&nbsp;("imputer", SimpleImputer(strategy="median")),<br />
            &nbsp;&nbsp;&nbsp;&nbsp;("poly", PolynomialFeatures(degree=2, include_bias=False)),<br />
            &nbsp;&nbsp;&nbsp;&nbsp;("scaler", StandardScaler())<br />
            ])<br />
            cat_pipe = Pipeline([<br />
            &nbsp;&nbsp;&nbsp;&nbsp;("imputer", SimpleImputer(strategy="most_frequent")),<br />
            &nbsp;&nbsp;&nbsp;&nbsp;("encoder", OneHotEncoder(drop="first", handle_unknown="ignore"))<br />
            ])<br />
            preprocessor = ColumnTransformer([<br />
            &nbsp;&nbsp;&nbsp;&nbsp;("num", num_pipe, ["Area", "Bedrooms", "Age", "Distance_to_Center"]),<br />
            &nbsp;&nbsp;&nbsp;&nbsp;("cat", cat_pipe, ["Location"])<br />
            ])
          </div>
        </div>
      </section>

      {/* SECTION 22: MASTER CHECKLIST */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Verification Rubric</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          Module 6 Advanced Regression Mastery Checklist
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Verify your full comprehension of model optimization, regularization penalties, and generalization control:
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {[
            "Generate polynomial and cross-feature interaction terms",
            "Differentiate parameter-linear from SciPy nonlinear regression",
            "Explain why feature standardization is required before regularization",
            "Apply Ridge L2 penalty to resolve coefficient multicollinearity",
            "Apply Lasso L1 penalty to execute automated sparse feature selection",
            "Tune Elastic Net alpha and l1_ratio mixtures",
            "Illustrate the geometric diamond vs circular constraint boundaries",
            "Calculate Variance Inflation Factor (VIF) to detect redundancy",
            "Implement Recursive Feature Elimination (RFE) wrapper selection",
            "Tune regularization hyperparameters with leak-free GridSearchCV",
            "Decompose expected prediction error into Bias, Variance, and Noise",
            "Serialize the complete fitted polynomial-regularized pipeline with Joblib",
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
