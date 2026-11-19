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
} from "lucide-react";

export default function MachineLearningFeatureEngineeringSections() {
  const [copiedSnippet, setCopiedSnippet] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const toggleSection = (sec) => {
    setExpandedSection(expandedSection === sec ? null : sec);
  };

  return (
    <div className="space-y-10">
      {/* SECTION 1: INTRODUCTION TO FEATURE ENGINEERING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 01
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Core Foundations
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          1. Introduction to Feature Engineering &amp; Data Preprocessing
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          <strong>Feature Engineering</strong> is the process of creating, transforming, selecting, and modifying input variables to maximize the predictive signal delivered to machine learning models. A feature is an individual quantifiable property or characteristic of a phenomenon being observed.
        </p>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          While raw tabular data may contain elementary attributes such as <em>construction_year</em>, <em>house_area</em>, and <em>bathrooms</em>, algorithms frequently fail to uncover complex non-linear physics or economic realities without explicit domain transformations. For instance, calculating <strong>House Age = Current Year &minus; Construction Year</strong> or <strong>Price per Square Foot</strong> provides representations directly calibrated to property valuation.
        </p>

        {/* Comparison Table: Feature Engineering vs Preprocessing */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-800">
                <th className="p-3 font-bold font-mono">Dimension</th>
                <th className="p-3 font-bold font-mono">Feature Engineering</th>
                <th className="p-3 font-bold font-mono">Data Preprocessing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-sans text-stone-700">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Primary Objective</td>
                <td className="p-3 text-emerald-800 font-medium">Create informative, predictive representations</td>
                <td className="p-3 text-sky-800 font-medium">Prepare raw data for algorithmic ingestion and stability</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Feature Dimensions</td>
                <td className="p-3">Creates new columns (ratios, polynomials, cyclical terms)</td>
                <td className="p-3">Transforms existing columns (scaling, missing imputations)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Guiding Philosophy</td>
                <td className="p-3">Domain knowledge, causal intuitions, interaction hypotheses</td>
                <td className="p-3">Mathematical constraints (e.g. no nulls, normalized scales)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Concrete Examples</td>
                <td className="p-3">Customer Lifetime Value, Debt-to-Income ratio, Sin/Cos Month</td>
                <td className="p-3">Median imputation, OneHotEncoder, RobustScaler, Z-score clipping</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Workflow Diagram */}
        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 flex items-center gap-2">
            <GitBranch size={14} className="text-orange-600" />
            End-to-End Feature Engineering Pipeline Architecture
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
              <span className="font-mono font-bold text-orange-600 block">1. Inspection &amp; Hygiene</span>
              <p className="text-stone-600">Analyze skewness, null patterns (MCAR/MAR/MNAR), and cardinalities.</p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
              <span className="font-mono font-bold text-orange-600 block">2. Transformations</span>
              <p className="text-stone-600">Log/Yeo-Johnson transforms, robust scaling, categorical encodings.</p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
              <span className="font-mono font-bold text-orange-600 block">3. Feature Creation</span>
              <p className="text-stone-600">Cross-feature interactions, polynomial expansions, cyclical date parts.</p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
              <span className="font-mono font-bold text-orange-600 block">4. Leak-Free Selection</span>
              <p className="text-stone-600">Filter, wrapper (RFE), and L1 embedded selection inside CV folds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: NUMERICAL FEATURE TRANSFORMATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 02
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Distribution Conditioning
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          2. Numerical Feature Transformations: Log, Sqrt &amp; Power Transforms
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Many parametric machine learning estimators (linear regression, logistic regression with regularization, neural networks) assume features have approximately symmetric Gaussian distributions with stabilized variances. Skewed variables, such as household incomes or transaction volumes, compress 99% of samples into an infinitesimal range while a few massive values dominate the loss gradients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <Hash size={15} className="text-orange-600" />
              Log Transformation: np.log1p(x)
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Compresses heavy positive right-tails into standard bell curves. We utilize <code className="bg-stone-200 px-1 py-0.5 rounded text-xs font-mono">np.log1p(x) = ln(1 + x)</code> to safeguard against undefined <code className="bg-stone-200 px-1 py-0.5 rounded text-xs font-mono">-inf</code> values when observations equal zero.
            </p>
            <div className="p-2.5 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs">
              df["log_income"] = np.log1p(df["income"])
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <Zap size={15} className="text-amber-600" />
              PowerTransformer: Box-Cox vs Yeo-Johnson
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Parametric power transformations estimate optimal exponents (&lambda;) via maximum likelihood to minimize distribution skewness.
            </p>
            <ul className="text-xs text-stone-600 list-disc pl-5 space-y-1">
              <li><strong>Box-Cox:</strong> Strictly requires strictly positive values (x &gt; 0).</li>
              <li><strong>Yeo-Johnson:</strong> Seamlessly accommodates zero and negative values.</li>
            </ul>
            <div className="p-2.5 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs">
              pt = PowerTransformer(method="yeo-johnson", standardize=True)
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3, 4, 5, 6: CATEGORICAL ENCODING (ONE-HOT, ORDINAL, TARGET) */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 03 &ndash; 06
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Categorical Encoding Strategies
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          3. Categorical Encodings: One-Hot, Ordinal &amp; Smoothed Target Encoding
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Algorithms evaluate mathematical dot products, distances, and matrix inversions that require purely numerical matrices. Categorical variables must be systematically encoded without inadvertently fabricating non-existent ranking hierarchies.
        </p>

        {/* Deep Dive Cards */}
        <div className="space-y-4 pt-2">
          {/* Card A: One-Hot Encoding */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Binary size={16} className="text-orange-600" />
                One-Hot Encoding &amp; The Dummy Variable Trap
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-orange-100 text-orange-700 font-bold">
                Nominal Variables
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Converts each category into a binary column [0, 1]. In unregularized linear models with an intercept term, including all <em>k</em> categories introduces <strong>perfect multicollinearity</strong> because the sum of dummy columns strictly equals the intercept vector (&Sigma; X<sub>j</sub> = 1). We remedy this via <code className="bg-stone-200 px-1 py-0.5 rounded text-xs font-mono">drop="first"</code>.
            </p>
            <div className="p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs overflow-x-auto">
              from sklearn.preprocessing import OneHotEncoder<br />
              encoder = OneHotEncoder(drop="first", handle_unknown="ignore", sparse_output=False)
            </div>
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
              <strong>Caution on handle_unknown="ignore":</strong> When new unseen categories appear in test batches, Scikit-learn fills all dummy columns with zeros, preventing system crashes during production scoring.
            </div>
          </div>

          {/* Card B: Ordinal Encoding */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Layers size={16} className="text-sky-600" />
                Ordinal Encoding (Preserving Natural Rank)
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-100 text-sky-700 font-bold">
                Ordered Categories
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              When distinct categories have an unmistakable order (e.g. <em>Low &lt; Medium &lt; High &lt; Very High</em> or <em>Bronze &lt; Silver &lt; Gold &lt; Platinum</em>), we assign ascending integers. <strong>Crucial Warning:</strong> Ordinal encoding implies equal step intervals between categories (&Delta; = 1), which may distort distance-based models if the actual psychological or economic gap between Silver &rarr; Gold is vastly greater than Bronze &rarr; Silver.
            </p>
            <div className="p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs overflow-x-auto">
              encoder = OrdinalEncoder(categories=[["Low", "Medium", "High", "Very High"]], handle_unknown="use_encoded_value", unknown_value=-1)
            </div>
          </div>

          {/* Card C: Target Encoding */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Target size={16} className="text-emerald-600" />
                Smoothed Target Encoding &amp; Cross-Fitting
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold">
                High-Cardinality Features
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              When a categorical feature contains thousands of unique levels (e.g. 5,000 postal ZIP codes), One-Hot encoding blows up dimensionality. Target encoding replaces each category with the average target value observed for that category.
            </p>
            <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 space-y-1">
              <span className="text-stone-500 block">// Empirical Bayes Smoothed Target Formula:</span>
              <span className="font-bold text-orange-600">TE<sub>i</sub> = (n<sub>i</sub> &times; y&#772;<sub>i</sub> + m &times; y&#772;<sub>global</sub>) / (n<sub>i</sub> + m)</span>
              <p className="font-sans text-stone-600 pt-1">
                Where <em>n<sub>i</sub></em> is the category count, <em>y&#772;<sub>i</sub></em> is the category target mean, <em>y&#772;<sub>global</sub></em> is the overall target mean, and <em>m</em> is the smoothing weight. Rare categories are safely pulled toward the global prior.
              </p>
            </div>
            <div className="p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs overflow-x-auto">
              from sklearn.preprocessing import TargetEncoder<br />
              encoder = TargetEncoder(smooth="auto", cv=5, random_state=42)<br />
              X_train_encoded = encoder.fit_transform(X_train, y_train) # Uses internal cross-fitting!
            </div>
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900">
              <strong>Mandatory Rule:</strong> Never call <code className="font-mono bg-rose-100 px-1 rounded">fit(X_train, y_train).transform(X_train)</code> on training data! You must call <code className="font-mono bg-rose-100 px-1 rounded">fit_transform()</code>, which enforces out-of-fold cross-fitting to eliminate catastrophic target leakage.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7, 8, 9: FEATURE SCALING COMPARISON */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 07 &ndash; 09
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Scaling &amp; Normalization
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          4. Feature Scaling: StandardScaler vs MinMaxScaler vs RobustScaler vs Normalizer
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Distance-based and gradient-optimized algorithms (KNN, SVM, Logistic Regression, Neural Networks) are exceptionally vulnerable to unscaled features. If feature <em>A</em> ranges from 0 to 1, while feature <em>B</em> ranges from 10,000 to 1,000,000, feature <em>B</em> will account for 99.99% of Euclidean distance calculations, rendering feature <em>A</em> obsolete.
        </p>

        {/* Matrix Comparison Table */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-800 font-mono">
                <th className="p-3">Transformer</th>
                <th className="p-3">Mathematical Formulation</th>
                <th className="p-3">Outlier Resilience</th>
                <th className="p-3">Primary Use Cases</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-sans text-stone-700">
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">StandardScaler</td>
                <td className="p-3 font-mono text-xs">z = (x &minus; &mu;) / &sigma;</td>
                <td className="p-3 text-rose-700 font-medium">Low (Outliers distort &mu; and &sigma;)</td>
                <td className="p-3">Linear models, SVM, PCA, Gaussian assumptions</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">MinMaxScaler</td>
                <td className="p-3 font-mono text-xs">x_scaled = (x &minus; min) / (max &minus; min)</td>
                <td className="p-3 text-rose-700 font-medium">Very Low (Outliers compress normal data)</td>
                <td className="p-3">Bounded [0, 1] inputs, neural nets, image pixels</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">RobustScaler</td>
                <td className="p-3 font-mono text-xs">x_scaled = (x &minus; Median) / IQR</td>
                <td className="p-3 text-emerald-700 font-bold">High (Uses 50th percentile &amp; Q3 &minus; Q1)</td>
                <td className="p-3">Heavy-tailed financial transactions, salaries, prices</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900 font-mono">Normalizer</td>
                <td className="p-3 font-mono text-xs">x_row / ||x||<sub>2</sub></td>
                <td className="p-3 text-stone-600">Row-wise (independent of column stats)</td>
                <td className="p-3">Cosine similarity, text TF-IDF vectors, clustering</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 10: MISSING VALUE IMPUTATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 10
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Missing Data Engineering
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          5. Missing Value Imputation: Simple, KNN, Iterative &amp; Missingness Indicators
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Real-world datasets are plagued by missing entries due to sensor dropped frames, customer privacy choices, or schema migrations. Blindly dropping incomplete rows (<code className="bg-stone-200 px-1 py-0.5 rounded text-xs font-mono">dropna()</code>) eliminates valuable statistical power and introduces selection bias.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-stone-500 uppercase block">Mechanism 1</span>
            <h4 className="font-bold text-stone-900 text-sm">MCAR (Completely at Random)</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Missingness is completely independent of both observed and unobserved data (e.g., test tube broken randomly in a lab). Simple mean/median imputation causes minimal bias.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-stone-500 uppercase block">Mechanism 2</span>
            <h4 className="font-bold text-stone-900 text-sm">MAR (Missing at Random)</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Missingness systematically depends on other observed features (e.g., younger users rarely disclose income, but user age is recorded). Solved via KNN or Iterative imputation.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-stone-500 uppercase block">Mechanism 3</span>
            <h4 className="font-bold text-stone-900 text-sm">MNAR (Not at Random)</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Missingness depends on the unobserved value itself (e.g., ultra-high-net-worth individuals refuse to state wealth). Requires <strong>add_indicator=True</strong>.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2 overflow-x-auto">
          <div className="text-stone-400">// Advanced Imputation Techniques:</div>
          <div>from sklearn.impute import SimpleImputer, KNNImputer</div>
          <div>from sklearn.experimental import enable_iterative_imputer</div>
          <div>from sklearn.impute import IterativeImputer</div>
          <br />
          <div># 1. Simple Imputer with Missingness Indicator</div>
          <div>num_imputer = SimpleImputer(strategy="median", add_indicator=True)</div>
          <br />
          <div># 2. KNN Imputation (Multivariate Euclidean nearest neighbors)</div>
          <div>knn_imputer = KNNImputer(n_neighbors=5, weights="distance")</div>
          <br />
          <div># 3. Iterative Imputation (MICE - Chained Equations)</div>
          <div>iter_imputer = IterativeImputer(max_iter=10, random_state=42)</div>
        </div>
      </section>

      {/* SECTION 11, 12: OUTLIER TREATMENT & BINNING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 11 &ndash; 12
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Outliers &amp; Discretization
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          6. Outlier Treatment (IQR / Winsorization) &amp; Numerical Binning
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Outliers are extreme observations that deviate sharply from the bulk dataset. In fraud detection or rare cancer screening, extreme outliers <em>are the target signal</em> and must never be deleted. In measurement error scenarios, capping via <strong>Winsorization</strong> preserves sample size while restraining quadratic gradient explosions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Outlier Capping */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <ShieldAlert size={16} className="text-rose-600" />
              Tukey's IQR Outlier Capping (Winsorization)
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Computes lower and upper boundary fences using training quantiles:
              <br />
              <code className="font-mono text-stone-800">Lower = Q1 &minus; 1.5 &times; IQR</code> &bull;{" "}
              <code className="font-mono text-stone-800">Upper = Q3 + 1.5 &times; IQR</code>
            </p>
            <div className="p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs overflow-x-auto">
              lower = X_train["val"].quantile(0.01)<br />
              upper = X_train["val"].quantile(0.99)<br />
              X_train["val"] = X_train["val"].clip(lower, upper)<br />
              X_test["val"] = X_test["val"].clip(lower, upper) # Re-use train bounds!
            </div>
          </div>

          {/* Binning Discretization */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <Sliders size={16} className="text-orange-600" />
              Discretization via KBinsDiscretizer
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Splits continuous signals into discrete bins. Captures non-linear step functions and customer brackets.
            </p>
            <ul className="text-xs text-stone-600 list-disc pl-5 space-y-1">
              <li><strong>strategy="uniform":</strong> Equal numerical interval width.</li>
              <li><strong>strategy="quantile":</strong> Equal frequency (same sample count per bin).</li>
              <li><strong>strategy="kmeans":</strong> Clustered intervals in 1D space.</li>
            </ul>
            <div className="p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs overflow-x-auto">
              from sklearn.preprocessing import KBinsDiscretizer<br />
              discretizer = KBinsDiscretizer(n_bins=5, encode="ordinal", strategy="quantile")
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13, 14: INTERACTIONS & CYCLICAL DATE FEATURES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 13 &ndash; 14
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Interaction Terms &amp; Temporal Encoding
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          7. Polynomial Interactions &amp; Cyclical Date-Time Engineering
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Linear models cannot natively capture multiplicative synergies between features (e.g., <em>Income &times; Credit Score</em>). By constructing polynomial feature expansions and mapping temporal variables onto trigonometric circles, linear models gain the capacity to model non-linear dynamics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Interaction terms */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <Cpu size={16} className="text-orange-600" />
              PolynomialFeatures (Synergy Expansions)
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Given original features [X<sub>1</sub>, X<sub>2</sub>], a degree=2 polynomial generates:
              <br />
              <code className="font-mono text-stone-800">[X<sub>1</sub>, X<sub>2</sub>, X<sub>1</sub><sup>2</sup>, X<sub>1</sub>X<sub>2</sub>, X<sub>2</sub><sup>2</sup>]</code>
            </p>
            <div className="p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs overflow-x-auto">
              from sklearn.preprocessing import PolynomialFeatures<br />
              poly = PolynomialFeatures(degree=2, interaction_only=False, include_bias=False)<br />
              X_poly = poly.fit_transform(X)
            </div>
            <p className="text-xs text-stone-500 font-sans">
              <strong>Curse of Dimensionality Warning:</strong> Expanding 100 features with degree=2 creates ~5,150 terms, requiring L1 regularization.
            </p>
          </div>

          {/* Cyclical Date Features */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <Compass size={16} className="text-amber-600" />
              Cyclical Sine &amp; Cosine Date Encoding
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Months 12 (December) and 1 (January) are chronologically adjacent, yet standard integer encoding creates a distance of 11 units. Projecting onto a unit circle preserves rotational geometry.
            </p>
            <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 space-y-1">
              <div>month_sin = sin(2 &times; &pi; &times; month / 12)</div>
              <div>month_cos = cos(2 &times; &pi; &times; month / 12)</div>
              <div>hour_sin = sin(2 &times; &pi; &times; hour / 24)</div>
            </div>
            <div className="p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs overflow-x-auto">
              df["month_sin"] = np.sin(2 * np.pi * df["month"] / 12)<br />
              df["month_cos"] = np.cos(2 * np.pi * df["month"] / 12)
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15, 16, 17, 18: FEATURE SELECTION (FILTER, WRAPPER, EMBEDDED) */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 15 &ndash; 18
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Dimensionality &amp; Sparsity
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          8. Feature Selection: Filter vs Wrapper (RFE) vs Embedded (L1 Lasso)
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Feature selection eliminates uninformative noise, reduces storage and inference latency, and mitigates the curse of dimensionality. Unlike PCA (which projects features into uninterpretable linear combinations), feature selection retains the original semantic identity of input variables.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Method 1: Filter */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase">1. Filter Methods</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Fastest</span>
            </div>
            <h4 className="font-bold text-stone-900 text-sm">Model-Free Statistics</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Evaluates features purely on statistical correlations before training any estimator.
            </p>
            <ul className="text-xs text-stone-600 list-disc pl-4 space-y-1">
              <li><strong>VarianceThreshold:</strong> Drops constants or near-constant features.</li>
              <li><strong>Chi2:</strong> For non-negative frequency counts &amp; categorical targets.</li>
              <li><strong>f_classif / f_regression:</strong> ANOVA linear F-test.</li>
              <li><strong>Mutual Information:</strong> Captures non-linear dependencies via entropy.</li>
            </ul>
            <div className="p-2.5 bg-stone-900 text-stone-100 rounded-xl font-mono text-[11px] overflow-x-auto">
              selector = SelectKBest(score_func=mutual_info_classif, k=10)
            </div>
          </div>

          {/* Method 2: Wrapper */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-600 uppercase">2. Wrapper Methods</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">Iterative</span>
            </div>
            <h4 className="font-bold text-stone-900 text-sm">Model Performance Driven</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Iteratively fits an estimator, testing different combinations to evaluate interactions.
            </p>
            <ul className="text-xs text-stone-600 list-disc pl-4 space-y-1">
              <li><strong>Forward Selection:</strong> Greedily adds the best performing feature.</li>
              <li><strong>Backward Elimination:</strong> Greedily prunes the worst feature.</li>
              <li><strong>RFE:</strong> Recursive feature elimination via weights/importance.</li>
              <li><strong>RFECV:</strong> Auto-selects optimal feature count via cross-validation.</li>
            </ul>
            <div className="p-2.5 bg-stone-900 text-stone-100 rounded-xl font-mono text-[11px] overflow-x-auto">
              selector = RFECV(estimator=RandomForestClassifier(), cv=5)
            </div>
          </div>

          {/* Method 3: Embedded */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-sky-600 uppercase">3. Embedded Methods</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-bold">Built-In</span>
            </div>
            <h4 className="font-bold text-stone-900 text-sm">In-Training Regularization</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Feature selection occurs naturally as part of the objective function optimization.
            </p>
            <ul className="text-xs text-stone-600 list-disc pl-4 space-y-1">
              <li><strong>L1 Lasso Penalty:</strong> Shrinks uninformative coefficients exactly to zero.</li>
              <li><strong>L1 Logistic Regression:</strong> Produces sparse linear boundaries.</li>
              <li><strong>Tree Gini Importance:</strong> Prunes features with zero impurity decrease.</li>
              <li><strong>SelectFromModel:</strong> Extracts features exceeding an importance cutoff.</li>
            </ul>
            <div className="p-2.5 bg-stone-900 text-stone-100 rounded-xl font-mono text-[11px] overflow-x-auto">
              selector = SelectFromModel(estimator=Lasso(alpha=0.1))
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 20, 21: PREVENTING LEAKAGE VIA COLUMNTARNSFORMER & PIPELINES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 20 &ndash; 21
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Production Engineering
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          9. Complete Leak-Free Pipeline Architecture with ColumnTransformer
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Heterogeneous real-world datasets comprise continuous numbers, high-cardinality nominals, ordinal levels, and boolean flags. Applying a blanket transformer causes pipeline breakdown. <strong>ColumnTransformer</strong> routes each column to its specialized sub-pipeline and stitches the output into a single feature array without data leakage.
        </p>

        {/* Complete Python Pipeline Listing */}
        <div className="rounded-2xl bg-stone-900 border border-stone-800 p-5 space-y-3">
          <div className="flex justify-between items-center text-xs font-mono text-stone-400">
            <span>production_churn_pipeline.py</span>
            <button
              onClick={() =>
                copyToClipboard(
`import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression

# 1. Feature Partitioning
numeric_features = ["age", "monthly_income", "tenure", "monthly_charges"]
categorical_features = ["city", "contract_type", "payment_method"]

# 2. Sub-Pipelines
numeric_pipeline = Pipeline([
    ("imputer", SimpleImputer(strategy="median", add_indicator=True)),
    ("scaler", StandardScaler())
])

categorical_pipeline = Pipeline([
    ("imputer", SimpleImputer(strategy="most_frequent")),
    ("encoder", OneHotEncoder(handle_unknown="ignore", drop="first"))
])

# 3. Composite Preprocessor
preprocessor = ColumnTransformer(transformers=[
    ("num", numeric_pipeline, numeric_features),
    ("cat", categorical_pipeline, categorical_features)
])

# 4. Full End-to-End Leak-Free Estimator Pipeline
full_model = Pipeline([
    ("preprocessor", preprocessor),
    ("classifier", LogisticRegression(max_iter=2000, random_state=42))
])

# 5. Fit & Predict
full_model.fit(X_train, y_train)
y_pred = full_model.predict(X_test)`,
                  "pipeline_py"
                )
              }
              className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 font-mono text-xs flex items-center gap-1 cursor-pointer"
            >
              {copiedSnippet === "pipeline_py" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span>{copiedSnippet === "pipeline_py" ? "Copied" : "Copy Code"}</span>
            </button>
          </div>

          <pre className="text-xs font-mono text-stone-200 overflow-x-auto leading-relaxed">
{`import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression

# 1. Partition Features by Data Type
numeric_features = ["age", "monthly_income", "tenure", "monthly_charges"]
categorical_features = ["city", "contract_type", "payment_method"]

# 2. Specialized Sub-Pipelines
numeric_pipeline = Pipeline([
    ("imputer", SimpleImputer(strategy="median", add_indicator=True)),
    ("scaler", StandardScaler())
])

categorical_pipeline = Pipeline([
    ("imputer", SimpleImputer(strategy="most_frequent")),
    ("encoder", OneHotEncoder(handle_unknown="ignore", drop="first"))
])

# 3. Combine in ColumnTransformer
preprocessor = ColumnTransformer(transformers=[
    ("num", numeric_pipeline, numeric_features),
    ("cat", categorical_pipeline, categorical_features)
])

# 4. Attach Estimator into Single Pipeline
full_model = Pipeline([
    ("preprocessor", preprocessor),
    ("classifier", LogisticRegression(max_iter=2000, random_state=42))
])

# 5. Safe Execution within Cross-Validation
scores = cross_val_score(full_model, X_train, y_train, cv=5, scoring="accuracy")
print(f"5-Fold CV Accuracy: {scores.mean():.4f}")`}
          </pre>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 flex items-start gap-3">
          <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <strong>Why this architecture is mathematically immune to data leakage:</strong> In every cross-validation iteration or out-of-sample prediction, the imputer's median values, scaler's mean/variance, and encoder's category vocabularies are strictly derived from the <em>training fold</em>. No test-fold statistics ever leak into preprocessing.
          </div>
        </div>
      </section>

      {/* SECTION 26: INTERVIEW PREPARATION Q&A */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 26
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Career &amp; Technical Interviews
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          10. Machine Learning Engineer &amp; Data Scientist Interview Prep
        </h2>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Top tech companies routinely assess candidate fluency in preventing data leakage, addressing high-cardinality nominals, and choosing between parametric and non-parametric scaling.
        </p>

        <div className="space-y-3 pt-2">
          {[
            {
              q: "Why can Target Encoding cause catastrophic data leakage, and how does Scikit-learn prevent it?",
              a: "If an observation's own target value is used to calculate its categorical feature encoding, the model receives a direct leak of the answer and simply memorizes the target. Scikit-learn's TargetEncoder enforces cross-fitting: it splits training data into internal folds and encodes each sample using the target statistics of the remaining out-of-fold samples.",
            },
            {
              q: "Does StandardScaler remove outliers?",
              a: "No! StandardScaler calculates the sample mean (μ) and standard deviation (σ). Extreme outliers severely distort both statistics, compressing all non-outlier data into an extremely tight z-score cluster. To resist outliers, use RobustScaler (Median and IQR) or Winsorization.",
            },
            {
              q: "Why should cyclical time features (e.g. Hour 0..23) be converted to sin and cos pairs?",
              a: "On a linear number line, 23:00 and 00:00 have a distance of 23 units, even though they are consecutive hours. Projecting time onto a unit circle via sin(2πt/T) and cos(2πt/T) ensures 23:00 and 00:00 are continuous neighbors in Euclidean distance.",
            },
            {
              q: "What is the difference between RFE and SelectKBest?",
              a: "SelectKBest is a Filter method that computes univariate statistical scores (e.g. ANOVA F-statistic) independently of model training. RFE (Recursive Feature Elimination) is a Wrapper method that fits an estimator repeatedly, ranking features by model weights or importances and pruning the weakest iteratively, allowing it to capture multi-feature interaction synergies.",
            },
            {
              q: "Why must feature selection and scaling be encapsulated inside a Pipeline during cross-validation?",
              a: "Performing feature selection or scaling on the entire dataset before cross-validation allows validation fold samples to inform which features are selected or what the global mean/variance is. This creates selection bias and yields overly optimistic validation scores that fail to generalize to real-world production data.",
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
