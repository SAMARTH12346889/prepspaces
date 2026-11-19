import React from "react";
import {
  BarChart2,
  TrendingUp,
  PieChart,
  Activity,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Sparkles,
  Search,
  Eye,
  FileCode,
  Table,
  Cpu,
  GitMerge,
} from "lucide-react";

export default function MachineLearningEdaSections() {
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
          Before training any machine learning model, you must deeply understand the dataset's geometry, distribution shapes, feature relationships, correlations, and potential anomalies. Exploratory Data Analysis (EDA) prevents building models on flawed assumptions, undetected data leakage, or extreme skewness.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Follow a rigorous, hypothesis-driven 9-step EDA methodology.",
            "Conduct comprehensive univariate analysis across numerical and categorical variables.",
            "Evaluate distribution shapes, central tendency, variance, skewness, and excess kurtosis.",
            "Conduct bivariate and multivariate investigations using scatter plots, hue, and FacetGrids.",
            "Calculate and interpret Pearson (linear), Spearman (rank monotonic), and Kendall correlations.",
            "Detect and manage multicollinearity and identify feature redundancy.",
            "Construct high-impact visualizations with Matplotlib (Figure/Axes) and Seaborn.",
            "Investigate statistical uncertainty with confidence intervals and residual plots.",
            "Detect, diagnose, and handle outliers using IQR boundaries and Z-score thresholds.",
            "Analyze feature-versus-target relationships and non-linear interactions with LOWESS.",
            "Prevent subtle data leakage and prepare clean inputs for Scikit-learn pipelines.",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
              <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-stone-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: WHAT IS EDA? */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 02
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Foundation &amp; Role</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          2. What is Exploratory Data Analysis (EDA)?
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          EDA is the iterative process of investigating a dataset using summary statistics and graphical representations to discover underlying patterns, test hypotheses, spot anomalies, and check modeling assumptions.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <span className="text-xs font-bold text-orange-700 block mb-1">Problem 1: Skewed Data</span>
            <p className="text-xs text-stone-600">
              Mean price is inflated by luxury outliers. Reveals when median or log-transformation is mathematically necessary.
            </p>
          </div>
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <span className="text-xs font-bold text-orange-700 block mb-1">Problem 2: Non-Linearity</span>
            <p className="text-xs text-stone-600">
              Scatter plots expose diminishing returns where linear models fail without polynomial or spline features.
            </p>
          </div>
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <span className="text-xs font-bold text-orange-700 block mb-1">Problem 3: Outliers</span>
            <p className="text-xs text-stone-600">
              Separates genuine rare high-value transactions from data-entry errors (e.g. 500 sq.ft at ₹50 Cr).
            </p>
          </div>
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <span className="text-xs font-bold text-orange-700 block mb-1">Problem 4: Redundancy</span>
            <p className="text-xs text-stone-600">
              Identifies collinear features (sq.ft vs sq.m) that destabilize linear regression coefficients.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: SETTING UP THE ENVIRONMENT */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 03
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Libraries &amp; Architecture</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          3. Setting Up the EDA Environment: Matplotlib vs Seaborn
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          The Python statistical visualization stack combines Pandas for data manipulation, Matplotlib for low-level canvas layout control, and Seaborn for high-level statistical plotting.
        </p>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-4 border border-stone-800 text-stone-100 font-mono text-xs space-y-1">
          <div className="text-stone-400"># Canonical Data Science EDA Imports</div>
          <div className="text-orange-400">import pandas as pd</div>
          <div className="text-orange-400">import numpy as np</div>
          <div className="text-orange-400">import matplotlib.pyplot as plt</div>
          <div className="text-orange-400">import seaborn as sns</div>
          <div className="text-emerald-300 mt-2">sns.set_theme(style="whitegrid", palette="muted")</div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
            <thead className="bg-stone-100 text-stone-800 font-bold">
              <tr>
                <th className="p-3">Dimension</th>
                <th className="p-3">Matplotlib (plt)</th>
                <th className="p-3">Seaborn (sns)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Primary Purpose</td>
                <td className="p-3">General-purpose plotting engine &amp; figure layout</td>
                <td className="p-3">High-level statistical visualization &amp; distributions</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">DataFrame Integration</td>
                <td className="p-3">Works with raw vectors &amp; NumPy arrays</td>
                <td className="p-3">Directly maps column names from pd.DataFrame</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Statistical Aggregation</td>
                <td className="p-3">Manual calculation required before plotting</td>
                <td className="p-3">Automated bootstrapping, KDE, CI, &amp; regression fits</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Subplot &amp; Canvas Control</td>
                <td className="p-3">Granular Figure &amp; Axes hierarchy control</td>
                <td className="p-3">Built on Matplotlib; delegates fine-tuning to plt.Axes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4: EDA METHODOLOGY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 04
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Systematic Process</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          4. The 9-Step Systematic EDA Methodology
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Professional EDA is an investigative loop rather than random chart generation. Each step answers a concrete business or scientific question.
        </p>

        <div className="mt-6 space-y-3">
          {[
            { step: "Step 1", title: "Problem Definition & Target Identification", desc: "Identify whether task is regression, classification, or ranking, and isolate target variable y." },
            { step: "Step 2", title: "Dataset Architecture Inspection", desc: "Audit row counts, column types, sample head/tail, and memory footprints." },
            { step: "Step 3", title: "Data Hygiene & Quality Audit", desc: "Check missingness ratios, duplicated entity IDs, and impossible values." },
            { step: "Step 4", title: "Variable Taxonomy Categorization", desc: "Classify features into Continuous, Discrete, Nominal, Ordinal, Datetime, or Binary." },
            { step: "Step 5", title: "Univariate Analysis", desc: "Examine isolated distributions, central tendency, spread, and category frequency balance." },
            { step: "Step 6", title: "Bivariate Analysis", desc: "Investigate pairwise relationships between features and the target variable." },
            { step: "Step 7", title: "Multivariate & Interaction Analysis", desc: "Examine 3+ variables simultaneously using hue, FacetGrids, and bubble sizing." },
            { step: "Step 8", title: "Statistical & Outlier Synthesis", desc: "Measure Pearson/Spearman correlations, IQR fences, Z-scores, and multicollinearity." },
            { step: "Step 9", title: "Synthesis, Hypotheses & Preprocessing Spec", desc: "Formulate feature engineering plans, scaling requirements, and leakage safeguards." },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-4 p-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white font-mono font-bold shrink-0">{s.step}</span>
              <div>
                <span className="font-bold text-stone-900 text-sm block">{s.title}</span>
                <p className="text-stone-600 mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: UNIVARIATE ANALYSIS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 05
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Single-Variable Inspection</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          5. Univariate Analysis: Distributions, KDE, &amp; Box Plots
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Univariate analysis explores each variable in isolation to establish its shape, center, spread, and frequency.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-2">1. Histogram + KDE (Kernel Density)</span>
            <div className="bg-[#1c1917] p-3 rounded-lg text-stone-200 space-y-1">
              <div className="text-stone-400"># Seaborn histplot with density curve:</div>
              <div className="text-orange-300">sns.histplot(df["Price"], bins=30, kde=True, color="#ea580c")</div>
              <div className="text-stone-400 mt-1"># Standalone continuous density estimate:</div>
              <div className="text-orange-300">sns.kdeplot(df["Price"], fill=True, bw_adjust=0.8)</div>
            </div>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-2">2. Box Plot &amp; Categorical Counts</span>
            <div className="bg-[#1c1917] p-3 rounded-lg text-stone-200 space-y-1">
              <div className="text-stone-400"># Quartile spread with outlier markers:</div>
              <div className="text-emerald-300">sns.boxplot(x=df["Price"], color="#fed7aa")</div>
              <div className="text-stone-400 mt-1"># Balanced category frequencies:</div>
              <div className="text-emerald-300">sns.countplot(data=df, x="Location", order=df["Location"].value_counts().index)</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DISTRIBUTION ANALYSIS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 06
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Statistical Moments</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          6. Distribution Analysis: Skewness, Kurtosis, &amp; Transforms
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Many ML models (linear regression, logistic regression, neural networks) assume features are normally distributed. Measuring skewness and kurtosis guides necessary power transformations.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">Empirical 68-95-99.7 Rule</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              For a normal distribution \(N(\mu, \sigma^2)\):
              <br />&bull; \(\mu \pm 1\sigma\): ~68.27% of mass
              <br />&bull; \(\mu \pm 2\sigma\): ~95.45% of mass
              <br />&bull; \(\mu \pm 3\sigma\): ~99.73% of mass
            </p>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">Skewness Signatures</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              &bull; <strong>Positive (Right Skew):</strong> Long right tail; Mean &gt; Median. Common in prices and income.
              <br />&bull; <strong>Negative (Left Skew):</strong> Long left tail; Mean &lt; Median. Common in easy exam scores.
            </p>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">Log &amp; Power Transforms</span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Compresses heavy right tails toward symmetry:
              <br /><code className="text-orange-700 font-bold">np.log1p(x) = log(1 + x)</code>
              <br />Handles zeros safely and stabilizes variance.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: BIVARIATE ANALYSIS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 07
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Pairwise Relationships</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          7. Bivariate Analysis &amp; Trend Modeling
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Analyze how two variables interact across numerical-numerical, categorical-numerical, and categorical-categorical pairings:
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-2">Num vs Num (Scatter + Reg)</span>
            <div className="text-stone-700 space-y-1">
              <div>sns.scatterplot(data=df, x="Area", y="Price")</div>
              <div className="text-orange-700">sns.regplot(data=df, x="Area", y="Price", line_kws=&#123;"color": "red"&#125;)</div>
            </div>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-2">Cat vs Num (Box / Violin)</span>
            <div className="text-stone-700 space-y-1">
              <div>sns.boxplot(data=df, x="Location", y="Price")</div>
              <div className="text-emerald-700">sns.violinplot(data=df, x="Location", y="Price", inner="quart")</div>
            </div>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-2">Cat vs Cat (Crosstab + Heatmap)</span>
            <div className="text-stone-700 space-y-1">
              <div>ct = pd.crosstab(df["Location"], df["Property_Type"])</div>
              <div className="text-blue-700">sns.heatmap(ct, annot=True, fmt="d", cmap="Blues")</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CORRELATION ANALYSIS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 08
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Association &amp; Multicollinearity</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          8. Correlation Analysis: Pearson, Spearman, &amp; Multicollinearity
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Correlation quantifies the strength and direction of association between features, ranging strictly from \(-1.0\) to \(+1.0\).
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 font-mono">
            <h4 className="font-bold text-stone-900 mb-2">Pearson vs Spearman Correlation</h4>
            <div className="bg-white p-3 rounded-lg border border-stone-200 space-y-2 mb-2 text-stone-800">
              <div><strong>Pearson r:</strong> Measures linear relationship: Cov(X, Y) / (σ_X &middot; σ_Y)</div>
              <div><strong>Spearman &rho;:</strong> Measures monotonic relationship using ranked observations</div>
            </div>
            <p className="text-stone-600 font-sans text-[11px]">
              Use Spearman when relationships are non-linear or distributions contain influential outliers.
            </p>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs">
            <h4 className="font-bold text-stone-900 mb-2">Correlation Matrix &amp; Heatmap Code</h4>
            <div className="bg-[#1c1917] p-3 rounded-lg font-mono text-stone-100 text-[11px] space-y-1">
              <div className="text-stone-400"># Compute numeric-only pairwise matrix:</div>
              <div className="text-orange-300">corr = df.corr(numeric_only=True)</div>
              <div className="text-stone-400 mt-1"># Render diverging coolwarm heatmap:</div>
              <div className="text-emerald-300">sns.heatmap(corr, annot=True, cmap="coolwarm", center=0, fmt=".2f")</div>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
          <AlertTriangle size={18} className="text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Correlation vs Causation &amp; Multicollinearity:</strong> Correlation does not imply causal effect; confounding variables (e.g. ice cream sales &amp; swimming accidents driven by temperature) create spurious correlations. In regression, pairs with \(|r| &gt; 0.85\) introduce high variance and unstable coefficients (multicollinearity).
          </div>
        </div>
      </section>

      {/* SECTION 9: MULTIVARIATE ANALYSIS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 09
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Multi-Feature Interactions</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          9. Multivariate Analysis: Pair Plots, Hue, &amp; FacetGrids
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Uncover complex multidimensional structures and group-dependent slopes using pair plots, hue color mappings, and FacetGrid facets:
        </p>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-5 border border-stone-800 text-stone-100 font-mono text-xs space-y-3">
          <div>
            <span className="text-orange-400 font-bold"># 1. Pairplot with Hue Classification</span><br />
            sns.pairplot(df[["Area", "Bedrooms", "Age", "Price", "Location"]], hue="Location", corner=True)
          </div>
          <div>
            <span className="text-orange-400 font-bold"># 2. FacetGrid Partitioning Across Categories</span><br />
            g = sns.FacetGrid(df, col="Location", height=4, col_wrap=3)<br />
            g.map_dataframe(sns.scatterplot, x="Area", y="Price")
          </div>
          <div>
            <span className="text-orange-400 font-bold"># 3. Non-Linear Interaction Modeling (LOWESS &amp; OLS)</span><br />
            sns.lmplot(data=df, x="Area", y="Price", hue="Location", height=5)
          </div>
        </div>
      </section>

      {/* SECTION 10 & 11: MATPLOTLIB & SEABORN MASTERY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 10 &amp; 11
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Visualization Architecture</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          10 &amp; 11. Object-Oriented Matplotlib &amp; Seaborn Customization
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Master the professional Figure and Axes object-oriented interface for multi-panel dashboards and publication-quality exports:
        </p>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-4 border border-stone-800 text-stone-100 font-mono text-xs space-y-2">
          <div className="text-stone-400"># Publication-Ready 2x2 Subplot Grid</div>
          <div className="text-stone-200">fig, axes = plt.subplots(2, 2, figsize=(12, 8), dpi=300)</div>
          <div className="text-stone-300 ml-2">sns.histplot(df["Price"], kde=True, ax=axes[0, 0])</div>
          <div className="text-stone-300 ml-2">axes[0, 0].set_title("Price Distribution")</div>
          <div className="text-stone-300 ml-2">sns.scatterplot(data=df, x="Area", y="Price", ax=axes[0, 1])</div>
          <div className="text-stone-300 ml-2">axes[0, 1].set_title("Area vs Price")</div>
          <div className="text-stone-300 ml-2">sns.boxplot(data=df, x="Location", y="Price", ax=axes[1, 0])</div>
          <div className="text-stone-300 ml-2">axes[1, 0].tick_params(axis="x", rotation=30)</div>
          <div className="text-stone-300 ml-2">sns.heatmap(df.corr(numeric_only=True), annot=True, ax=axes[1, 1], cmap="coolwarm")</div>
          <div className="text-stone-200">plt.tight_layout()</div>
          <div className="text-orange-400">plt.savefig("eda_dashboard.png", dpi=300, bbox_inches="tight")</div>
        </div>
      </section>

      {/* SECTION 12 & 13: STATISTICAL VISUALIZATION & OUTLIERS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 12 &amp; 13
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Diagnostics &amp; Anomaly Detection</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          12 &amp; 13. Statistical Diagnostics &amp; Outlier Investigation (IQR vs Z-Score)
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Outliers disproportionately influence regression lines and distance-based estimators. Contrast quartile-based IQR fences against parametric Z-score cutoffs:
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-2">1. Interquartile Range (IQR) &mdash; Non-Parametric</span>
            <div className="text-stone-700 space-y-1">
              <div>IQR = Q3 - Q1</div>
              <div className="text-orange-700 font-bold">Lower Fence = Q1 - 1.5 * IQR</div>
              <div className="text-orange-700 font-bold">Upper Fence = Q3 + 1.5 * IQR</div>
              <div className="text-stone-500 mt-1"># Robust against skewed &amp; heavy-tailed distributions</div>
            </div>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-2">2. Z-Score Method &mdash; Parametric</span>
            <div className="text-stone-700 space-y-1">
              <div>z = (x - μ) / σ</div>
              <div className="text-emerald-700 font-bold">Outlier Flag: |z| &gt; 3.0</div>
              <div className="text-stone-500 mt-1"># Sensitive to severe outliers because μ and σ themselves distort</div>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
          <h4 className="font-bold text-stone-900 mb-1">Professional Outlier Decision Framework</h4>
          <p className="text-stone-600 leading-relaxed">
            Never delete outliers automatically. Follow: <strong>1. Confirm validity</strong> (data entry vs genuine rare event) &rarr; <strong>2. Contextual check</strong> (luxury penthouse vs regular apartment) &rarr; <strong>3. Transformation / Winsorization</strong> (apply <code>np.log1p</code> or clip between 1st and 99th percentiles) &rarr; <strong>4. Model consideration</strong> (Decision trees handle outliers naturally, whereas linear regression and KNN are heavily sensitive).
          </p>
        </div>
      </section>

      {/* SECTION 15: COMPLETE CASE STUDY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">End-to-End Case Study</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          15. Complete Real-Estate EDA Case Study (500 Records)
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Full worked example analyzing 500 property records with area, bedrooms, age, city premiums, deliberately introduced extreme outliers, and missing values.
        </p>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-5 border border-stone-800 text-stone-100 font-mono text-xs space-y-2 overflow-x-auto">
          <div className="text-orange-400 font-bold"># Reproducible Case Study Generator &amp; Audit Pipeline</div>
          <div className="text-stone-300">
            import numpy as np, pandas as pd, seaborn as sns, matplotlib.pyplot as plt<br />
            rng = np.random.default_rng(42)<br />
            n = 500<br />
            area = rng.normal(1450, 450, n).clip(450, 3500).round()<br />
            bedrooms = np.clip(np.round(area / 550 + rng.normal(0, 0.6, n)), 1, 6).astype(int)<br />
            age = rng.integers(0, 41, n).astype(float)<br />
            locations = rng.choice(["Mumbai", "Pune", "Nagpur", "Nashik"], size=n, p=[0.35, 0.30, 0.20, 0.15])<br />
            premium = np.array([&#123;"Mumbai": 2500000, "Pune": 1200000, "Nagpur": 300000, "Nashik": 0&#125;[c] for c in locations])<br />
            price = 1200000 + area * 6500 + bedrooms * 350000 + premium - age * 25000 + rng.normal(0, 2000000, n)<br />
            df = pd.DataFrame(&#123;"Area": area, "Bedrooms": bedrooms, "Age": age, "Location": locations, "Price": price.clip(800000)&#125;)<br />
            df.loc[[17, 203], "Price"] += 90000000  <span className="text-stone-500"># Deliberate luxury outliers</span><br />
            df.loc[rng.choice(df.index, 25, replace=False), "Age"] = np.nan<br />
            <br />
            <span className="text-stone-500"># Location-level analytical summary</span><br />
            report = df.groupby("Location").agg(Count=("Price", "count"), Median_Price=("Price", "median"), Avg_Area=("Area", "mean")).reset_index()<br />
            print(report)
          </div>
        </div>
      </section>

      {/* SECTION 18 & 21: FORMULAS, PITFALLS & CHECKLIST */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 18 &amp; 21
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Summary &amp; Verification</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          Module 4 EDA Mastery Checklist
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Verify your mastery of exploratory analysis before proceeding to Scikit-learn feature engineering:
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {[
            "Execute the complete 9-step EDA methodology",
            "Generate histograms, KDE plots, and ECDF distributions",
            "Calculate and interpret skewness and excess kurtosis",
            "Apply log1p transformations to right-skewed targets",
            "Build bivariate scatter plots with linear regression overlays",
            "Compute Pearson, Spearman, and Kendall correlation matrices",
            "Inspect correlation heatmaps for multicollinearity",
            "Construct multi-panel dashboards using Matplotlib plt.subplots",
            "Deploy Seaborn countplots, boxplots, and violinplots",
            "Detect outliers via IQR fences and Z-score cutoffs",
            "Identify non-linear trends using LOWESS regression curves",
            "Audit features against target leakage and data snooping",
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
