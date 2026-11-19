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
} from "lucide-react";

export default function MachineLearningRegressionSections() {
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
          Regression is the foundational cornerstone of supervised machine learning. It models mathematical mappings from input features to a continuous numerical target, enabling empirical forecasting on unseen data.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Formulate business questions into formal supervised regression tasks.",
            "Master Simple Linear Regression (slope b1, intercept b0) and manual calculation.",
            "Understand Multiple Linear Regression and conditional parameter interpretations.",
            "Derive Ordinary Least Squares (OLS) and the closed-form Normal Equation.",
            "Analyze cost functions: MAE, MSE, RMSE, R-squared, and Adjusted R-squared.",
            "Perform comprehensive residual diagnostics (funnel patterns, curves, Q-Q plots).",
            "Verify the 6 classical Gauss-Markov linear regression assumptions.",
            "Diagnose multicollinearity using Variance Inflation Factor (VIF).",
            "Build leakage-free Scikit-learn ColumnTransformer and Pipeline architectures.",
            "Benchmark predictive models against DummyRegressor mean baselines.",
            "Conduct inferential hypothesis testing using Statsmodels (p-values, confidence intervals).",
            "Serialize production-ready models using Joblib.",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
              <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-stone-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2 & 3: MATHEMATICAL PREREQUISITES & WHAT IS REGRESSION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 02 &amp; 03
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Foundations &amp; Scope</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          2 &amp; 3. Mathematical Foundations &amp; Regression vs Classification
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Linear regression maps continuous input vectors X ∈ ℝⁿˣᵖ to continuous target values y ∈ ℝⁿ using linear algebra and optimization principles:
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
            <h3 className="text-sm font-bold text-stone-900 mb-2">Linear Regression</h3>
            <p className="text-xs text-stone-600 mb-3">Predicts an open-ended continuous numerical magnitude.</p>
            <ul className="text-xs font-mono text-stone-700 space-y-1.5">
              <li>&bull; Property Price (₹85,40,000)</li>
              <li>&bull; Temperature (34.2 °C)</li>
              <li>&bull; Sales Revenue ($142,500)</li>
              <li>&bull; Server Latency (14.2 ms)</li>
            </ul>
          </div>

          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
            <h3 className="text-sm font-bold text-stone-900 mb-2">Classification</h3>
            <p className="text-xs text-stone-600 mb-3">Predicts discrete categorical labels or class probabilities.</p>
            <ul className="text-xs font-mono text-stone-700 space-y-1.5">
              <li>&bull; Loan Default (Yes / No)</li>
              <li>&bull; Email Spam (Spam / Ham)</li>
              <li>&bull; Customer Churn (True / False)</li>
              <li>&bull; Medical Diagnosis (Class 0, 1, 2)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-[#1c1917] p-4 rounded-2xl border border-stone-800 text-stone-100 font-mono text-xs space-y-1">
          <div className="text-orange-400 font-bold"># Vector Formulation of Linear Prediction:</div>
          <div className="text-emerald-300">ŷ = Xβ = β₀ + β₁x₁ + β₂x₂ + ··· + βₚxₚ</div>
          <div className="text-stone-400 mt-1"># Target: y ∈ R^n &nbsp;|&nbsp; Design Matrix: X ∈ R^(n x (p+1)) &nbsp;|&nbsp; Coefficients: β ∈ R^(p+1)</div>
        </div>
      </section>

      {/* SECTION 4: REGRESSION PROBLEM FORMULATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 04
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Problem Formulation</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          4. Regression Problem Formulation &amp; Leakage Prevention
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Formulating a regression task requires defining independent features X, the dependent target y, the observation grain, and strictly eliminating temporal or target leakage.
        </p>

        <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
          <AlertTriangle size={18} className="text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Strict Target Leakage Safeguard:</strong> Never include features created from or correlated with events occurring after the prediction point. For property valuation, including "negotiated closing rebate" or "final agreement timestamp" leaks future target information, creating an unrealistically high R² that collapses in production.
          </div>
        </div>
      </section>

      {/* SECTION 5: SIMPLE LINEAR REGRESSION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 05
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Univariate Modeling</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          5. Simple Linear Regression: Slope, Intercept, &amp; Manual Derivation
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Simple linear regression models the relationship between a single predictor x and target y via a straight line: ŷ = b₀ + b₁x.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-2">1. Closed-Form Mathematical Formulas</span>
            <div className="bg-white p-3 rounded-lg border border-stone-200 space-y-2 text-stone-800">
              <div><strong>Slope:</strong> b₁ = Σ(xᵢ - x̄)(yᵢ - ȳ) / Σ(xᵢ - x̄)² = Cov(x, y) / Var(x)</div>
              <div><strong>Intercept:</strong> b₀ = ȳ - b₁x̄</div>
            </div>
            <p className="text-stone-600 font-sans text-[11px] mt-2">
              b₁ represents the expected unit change in y for a one-unit change in x.
            </p>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-2">2. Worked Numerical Example</span>
            <div className="text-stone-700 space-y-1">
              <div>Points: (1, 2), (2, 3), (3, 5)</div>
              <div>x̄ = 2.0, ȳ = 10/3 ≈ 3.333</div>
              <div>Numerator = (1-2)(2-3.33) + (2-2)(3-3.33) + (3-2)(5-3.33) = 1.333 + 1.667 = 3.0</div>
              <div>Denominator = (1-2)² + (2-2)² + (3-2)² = 1 + 0 + 1 = 2.0</div>
              <div className="text-orange-700 font-bold">Slope b₁ = 3 / 2 = 1.5</div>
              <div className="text-orange-700 font-bold">Intercept b₀ = 3.333 - 1.5(2.0) = 0.333 = 1/3</div>
              <div className="text-emerald-700 font-bold">Equation: ŷ = 0.333 + 1.5x</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 & 7: MULTIPLE REGRESSION & OLS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 06 &amp; 07
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Matrix Formulation &amp; OLS</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          6 &amp; 7. Multiple Linear Regression &amp; Ordinary Least Squares (OLS)
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Multiple linear regression estimates conditional associations while holding other covariates constant. OLS minimizes the Residual Sum of Squares (RSS).
        </p>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-5 border border-stone-800 text-stone-100 font-mono text-xs space-y-3">
          <div>
            <span className="text-orange-400 font-bold"># Closed-Form Normal Equation:</span><br />
            β̂ = (XᵀX)⁻¹ Xᵀy
          </div>
          <div className="text-stone-300">
            <span className="text-stone-500"># Numerically Stable Least Squares via QR / SVD in NumPy:</span><br />
            import numpy as np<br />
            X_b = np.column_stack([np.ones(len(X)), X])  <span className="text-stone-500"># Bias column for intercept</span><br />
            beta, residuals, rank, s = np.linalg.lstsq(X_b, y, rcond=None)<br />
            print("Intercept:", beta[0])<br />
            print("Feature Slopes:", beta[1:])
          </div>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
          <strong>Numerical Caution:</strong> Never explicitly compute <code>np.linalg.inv(X.T @ X)</code> in production. If features exhibit near-collinearity, (XᵀX) is ill-conditioned, leading to catastrophic floating-point precision loss. Use <code>np.linalg.lstsq</code> or Scikit-learn's underlying LAPACK driver.
        </div>
      </section>

      {/* SECTION 8 & 9: RESIDUAL ANALYSIS & ASSUMPTIONS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 08 &amp; 09
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Diagnostics &amp; Gauss-Markov</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          8 &amp; 9. Residual Diagnostics &amp; The 6 Classical Assumptions
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Residuals eᵢ = yᵢ - ŷᵢ provide direct evidence of model specification health. Classical linear regression relies on 6 core Gauss-Markov assumptions:
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
            <thead className="bg-stone-100 text-stone-800 font-bold">
              <tr>
                <th className="p-3">Assumption</th>
                <th className="p-3">Theoretical Meaning</th>
                <th className="p-3">Diagnostic Inspection</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600">
              <tr>
                <td className="p-3 font-semibold text-stone-900">1. Linearity</td>
                <td className="p-3">E[y|X] is a linear combination of parameters β</td>
                <td className="p-3 font-mono">Scatter &amp; Residual vs Fitted plots</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">2. Independence</td>
                <td className="p-3">Errors εᵢ, εⱼ are uncorrelated (no autocorrelation)</td>
                <td className="p-3 font-mono">Durbin-Watson test (time series)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">3. Homoscedasticity</td>
                <td className="p-3">Constant error variance Var(εᵢ|X) = σ²</td>
                <td className="p-3 font-mono">Breusch-Pagan test; no funnel shape</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">4. Normality of Errors</td>
                <td className="p-3">ε ~ N(0, σ²) for exact hypothesis testing</td>
                <td className="p-3 font-mono">Q-Q plot &amp; Shapiro-Wilk test</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">5. No Collinearity</td>
                <td className="p-3">X has full column rank; no exact linear combinations</td>
                <td className="p-3 font-mono">VIF &lt; 5.0; matrix condition number</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">6. Exogeneity</td>
                <td className="p-3">E[ε|X] = 0 (No omitted confounding variables)</td>
                <td className="p-3 font-mono">Causal domain modeling &amp; study design</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 10: COST FUNCTIONS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Evaluation Metrics</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          10. Cost Functions &amp; Evaluation Metrics: MAE, MSE, RMSE, &amp; R²
        </h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">Mean Absolute Error</span>
            <div className="text-orange-700 font-bold mb-2">MAE = (1/n) Σ |yᵢ - ŷᵢ|</div>
            <p className="text-stone-600 font-sans text-[11px]">Robust against large outliers; direct interpretation in original target units.</p>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">Mean Squared Error</span>
            <div className="text-orange-700 font-bold mb-2">MSE = (1/n) Σ (yᵢ - ŷᵢ)²</div>
            <p className="text-stone-600 font-sans text-[11px]">Smooth differentiable loss; heavily penalizes large mistakes.</p>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">Root Mean Squared Error</span>
            <div className="text-orange-700 font-bold mb-2">RMSE = √(MSE)</div>
            <p className="text-stone-600 font-sans text-[11px]">Penalizes large errors while remaining in the original target currency/unit.</p>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">Adjusted R-squared</span>
            <div className="text-orange-700 font-bold mb-2">R²_adj = 1 - (1 - R²) · (n - 1) / (n - p - 1)</div>
            <p className="text-stone-600 font-sans text-[11px]">Penalizes adding uninformative features that artificially inflate raw R².</p>
          </div>
        </div>
      </section>

      {/* SECTION 12: REGRESSION DIAGNOSTICS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Model Health</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          12. Comprehensive Regression Diagnostics: VIF, Cook's D, &amp; Breusch-Pagan
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Diagnostics investigate whether residual distributions obey homoscedasticity and check for multi-collinearity or high-leverage influential observations:
        </p>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-4 border border-stone-800 text-stone-100 font-mono text-xs space-y-2">
          <div className="text-stone-400"># Variance Inflation Factor (VIF) Calculation</div>
          <div className="text-emerald-300">
            from statsmodels.stats.outliers_influence import variance_inflation_factor<br />
            vif_data = pd.DataFrame(&#123;<br />
            &nbsp;&nbsp;"Feature": X.columns,<br />
            &nbsp;&nbsp;"VIF": [variance_inflation_factor(X.values, i) for i in range(X.shape[1])]<br />
            &#125;)<br />
            <span className="text-stone-500"># VIF &gt; 5.0 indicates severe multicollinearity</span>
          </div>
        </div>
      </section>

      {/* SECTION 14: COMPLETE HOUSING PROJECT */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">End-to-End Pipeline</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          14. Complete Practical Project &mdash; 1,200 Property Prediction Pipeline
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Walk through the complete 17-step Scikit-learn pipeline: numerical median imputation, categorical one-hot encoding with <code>drop="first"</code>, OLS training, baseline benchmarking, and model serialization with Joblib:
        </p>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-5 border border-stone-800 text-stone-100 font-mono text-xs space-y-3 overflow-x-auto">
          <div className="text-orange-400 font-bold"># Complete Verified Scikit-Learn Regression Pipeline Script</div>
          <div className="text-stone-300">
            from sklearn.model_selection import train_test_split<br />
            from sklearn.impute import SimpleImputer<br />
            from sklearn.preprocessing import OneHotEncoder<br />
            from sklearn.compose import ColumnTransformer<br />
            from sklearn.pipeline import Pipeline<br />
            from sklearn.linear_model import LinearRegression<br />
            from sklearn.dummy import DummyRegressor<br />
            from sklearn.metrics import mean_absolute_error, r2_score<br />
            import joblib<br />
            <br />
            <span className="text-stone-500"># 1. Feature Preprocessing Pipeline</span><br />
            num_cols = ["Area", "Bedrooms", "Age", "Distance_to_Center"]<br />
            cat_cols = ["Location"]<br />
            <br />
            preprocessor = ColumnTransformer([<br />
            &nbsp;&nbsp;("num", SimpleImputer(strategy="median"), num_cols),<br />
            &nbsp;&nbsp;("cat", Pipeline([("imp", SimpleImputer(strategy="most_frequent")), ("ohe", OneHotEncoder(drop="first", handle_unknown="ignore"))]), cat_cols)<br />
            ])<br />
            <br />
            <span className="text-stone-500"># 2. End-to-End Regression Pipeline</span><br />
            model = Pipeline([<br />
            &nbsp;&nbsp;("preprocessor", preprocessor),<br />
            &nbsp;&nbsp;("regressor", LinearRegression())<br />
            ])<br />
            <br />
            <span className="text-stone-500"># 3. Fit on Training Data Only (Leakage-Free)</span><br />
            model.fit(X_train, y_train)<br />
            y_pred = model.predict(X_test)<br />
            <br />
            <span className="text-stone-500"># 4. Save Production Pipeline</span><br />
            joblib.dump(model, "housing_price_regression.pkl")
          </div>
        </div>
      </section>

      {/* SECTION 15: STATSMODELS OLS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Statistical Inference</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          15. Statistical Regression with Statsmodels: p-Values &amp; Confidence Intervals
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          While Scikit-learn focuses on prediction metrics (MAE, RMSE), Statsmodels provides full inferential summaries, standard errors, and hypothesis tests:
        </p>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-4 border border-stone-800 text-stone-100 font-mono text-xs space-y-2">
          <div className="text-stone-400"># Formula-based OLS in Statsmodels</div>
          <div className="text-emerald-300">
            import statsmodels.formula.api as smf<br />
            ols = smf.ols("Price ~ Area + Bedrooms + Age + Distance_to_Center + C(Location)", data=train_df).fit()<br />
            print(ols.summary())
          </div>
        </div>
      </section>

      {/* SECTION 21: CHECKLIST */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Verification Rubric</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          Module 5 Regression Mastery Checklist
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Verify your full comprehension of regression modeling principles:
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {[
            "Formulate regression problems and prevent target leakage",
            "Derive slope and intercept for Simple Linear Regression",
            "Solve the closed-form Normal Equation via np.linalg.lstsq",
            "Interpret conditional multiple regression coefficients",
            "Calculate MAE, MSE, and RMSE error metrics",
            "Evaluate model performance against a DummyRegressor baseline",
            "Audit the 6 Gauss-Markov assumptions",
            "Inspect residual vs fitted plots for funnel patterns",
            "Compute Variance Inflation Factors (VIF) to detect multicollinearity",
            "Build leakage-free ColumnTransformer and Pipeline objects",
            "Interpret Statsmodels p-values and confidence intervals",
            "Serialize and reload trained pipelines using Joblib",
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
