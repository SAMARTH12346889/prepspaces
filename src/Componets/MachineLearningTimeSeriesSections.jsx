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
  Calendar,
  Clock,
  LineChart,
} from "lucide-react";

export default function MachineLearningTimeSeriesSections() {
  return (
    <div className="space-y-8">
      {/* SECTION 1: TIME SERIES FUNDAMENTALS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 01
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Chronological Foundations
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          1. Time Series Fundamentals &amp; Problem Formulation
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          A <strong>Time Series</strong> is an ordered sequence of observations recorded at successive, equally or unequally spaced intervals over time. In traditional machine learning, observations are assumed to be independent and identically distributed (i.i.d.). In time series, <strong>chronological ordering is paramount</strong>, and past values inherently dictate future trajectories.
        </p>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs sm:text-sm space-y-3">
          <div className="text-orange-400 font-sans font-bold text-sm">Mathematical Formulation</div>
          <div className="p-3 bg-stone-800 rounded-xl text-center text-white">
            Y = &lbrace; y<sub>1</sub>, y<sub>2</sub>, y<sub>3</sub>, &hellip;, y<sub>t</sub> &rbrace;
          </div>
          <p className="text-stone-300 font-sans text-xs leading-relaxed">
            Where <em>y<sub>t</sub></em> is the observation recorded at timestamp <em>t</em>. A forecasting model estimates future values over a forecasting horizon <em>h</em>:
          </p>
          <div className="p-2.5 bg-stone-800/80 rounded-xl text-center text-orange-300 font-mono text-xs">
            y&#770;<sub>t+1</sub>, y&#770;<sub>t+2</sub>, &hellip;, y&#770;<sub>t+h</sub> &emsp; (where h is the prediction horizon)
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Univariate</span>
            <h3 className="font-bold text-stone-900 text-sm">Single Metric Over Time</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Tracking a single variable: daily city temperature, server CPU utilization, or monthly company revenue: <em>Y<sub>t</sub> = f(t)</em>.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Multivariate</span>
            <h3 className="font-bold text-stone-900 text-sm">Interdependent Features</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Predicting sales while modeling concurrent dynamic regressors: product pricing, advertising spend, promotions, and web traffic.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Regular Series</span>
            <h3 className="font-bold text-stone-900 text-sm">Consistent Intervals</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Observations arrive at fixed time steps: every millisecond, every minute, hourly energy load, or monthly payroll.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Irregular Series</span>
            <h3 className="font-bold text-stone-900 text-sm">Event-Driven Timing</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Data occurs at random times: hospital emergency admissions, seismic vibrations, or credit card fraud events.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-1">
          <span className="font-bold flex items-center gap-1.5 text-amber-800">
            <AlertTriangle size={15} /> The Cardinal Law of Time Series Forecasting
          </span>
          <p className="leading-relaxed">
            <strong>Never randomly shuffle time series observations before modeling.</strong> Shuffling destroys temporal correlation, creates catastrophic future-to-past data leakage, and invalidates any subsequent statistical test or model validation.
          </p>
        </div>
      </section>

      {/* SECTION 2: TREND AND SEASONALITY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 02
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Decomposition Anatomy
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          2. Trend, Seasonality, Cycles &amp; Noise Patterns
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          A time series can be conceptually deconstructed into four distinct underlying temporal components:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-orange-600" size={18} />
              <h3 className="font-bold text-stone-900 text-sm">1. Trend (T<sub>t</sub>)</h3>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              The long-term smooth upward, downward, or horizontal trajectory of the series over years, representing fundamental secular growth or contraction.
            </p>
            <div className="p-2 bg-white rounded-lg border border-stone-200 font-mono text-[11px] text-stone-800">
              Linear Trend: Y<sub>t</sub> = &beta;<sub>0</sub> + &beta;<sub>1</sub>t + &epsilon;<sub>t</sub>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="text-blue-600" size={18} />
              <h3 className="font-bold text-stone-900 text-sm">2. Seasonality (S<sub>t</sub>)</h3>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Periodic fluctuations that repeat with fixed, known frequencies: lunch/dinner restaurant spikes (daily), weekend shopping (weekly), or Q4 holiday retail surge (annual).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2">
              <Activity className="text-purple-600" size={18} />
              <h3 className="font-bold text-stone-900 text-sm">3. Cyclical Patterns</h3>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Macroeconomic wave-like oscillations (e.g. boom and recession business cycles) that recur over multi-year periods without a fixed calendar frequency.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="text-amber-600" size={18} />
              <h3 className="font-bold text-stone-900 text-sm">4. Irregular Residual Noise (R<sub>t</sub>)</h3>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Unpredictable, white-noise stochastic shocks caused by sudden weather anomalies, geopolitical disruptions, or random consumer behavior.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-sm">Additive Model: Y<sub>t</sub> = T<sub>t</sub> + S<sub>t</sub> + R<sub>t</sub></span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Use when the seasonal oscillations remain roughly <strong>constant in absolute size</strong> as the baseline series trend grows over time.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-sm">Multiplicative Model: Y<sub>t</sub> = T<sub>t</sub> &times; S<sub>t</sub> &times; R<sub>t</sub></span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Use when seasonal variations <strong>widen proportionally</strong> with the growth of the overall series (e.g. holiday peaks double as revenue doubles).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: TIME SERIES DECOMPOSITION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 03
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Signal Separation
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          3. Time Series Decomposition: Classical vs. STL
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Decomposition mathematically isolates trend, seasonality, and residual noise from raw historical measurements, allowing practitioners to understand the primary drivers of demand before selecting predictive algorithms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <span className="text-xs font-mono font-bold text-stone-600 uppercase">Classical Decomposition</span>
            <h3 className="font-bold text-stone-900 text-sm">Moving Average Smoothing</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Estimates trend via centered rolling averages, computes seasonal averages across all matching periods, and calculates residuals via subtraction: <em>R<sub>t</sub> = Y<sub>t</sub> &minus; T<sub>t</sub> &minus; S<sub>t</sub></em>.
            </p>
            <div className="p-3 bg-white rounded-xl border border-stone-200 font-mono text-xs text-stone-800">
              seasonal_decompose(df["sales"], model="additive", period=12)
            </div>
            <p className="text-xs text-amber-800 font-medium">
              Drawback: Loses endpoint observations due to centered moving averages and assumes seasonal patterns never evolve over time.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-orange-50/70 border border-orange-200 space-y-3">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">STL Decomposition (Cleveland et al.)</span>
            <h3 className="font-bold text-stone-900 text-sm">Loess Locally Weighted Regression</h3>
            <p className="text-xs text-stone-700 leading-relaxed">
              Uses locally estimated scatterplot smoothing (Loess) to estimate changing trends and evolving seasonal patterns dynamically, with outlier-resistant weighting.
            </p>
            <div className="p-3 bg-white rounded-xl border border-orange-200 font-mono text-xs text-stone-900">
              STL(df["sales"], period=12, robust=True).fit()
            </div>
            <p className="text-xs text-emerald-800 font-bold">
              Key Advantage: Does not drop edge data and handles nonlinear drift and severe outliers gracefully.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: STATIONARITY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 04
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Statistical Stability
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          4. Stationarity: ADF Test, KPSS Test &amp; Differencing
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          A time series is <strong>weakly stationary</strong> when its statistical properties do not change with time. Specifically, it must satisfy three criteria:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
            <strong>1. Constant Mean:</strong> E[Y<sub>t</sub>] = &mu; for all timestamps <em>t</em> (no sustained upward/downward trend).
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
            <strong>2. Constant Variance:</strong> Var(Y<sub>t</sub>) = &sigma;&sup2; across all windows (homoscedasticity).
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
            <strong>3. Lagged Covariance:</strong> Cov(Y<sub>t</sub>, Y<sub>t-k</sub>) = &gamma;<sub>k</sub> depends only on lag <em>k</em>, not calendar time <em>t</em>.
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-stone-200">
          <table className="w-full text-xs text-left">
            <thead className="bg-stone-100 text-stone-800 font-bold uppercase tracking-wider">
              <tr>
                <th className="p-3">Statistical Test</th>
                <th className="p-3">Null Hypothesis (H<sub>0</sub>)</th>
                <th className="p-3">Stationarity Conclusion Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="p-3 font-semibold text-stone-900">ADF (Augmented Dickey-Fuller)</td>
                <td className="p-3">Series has a unit root (Non-Stationary)</td>
                <td className="p-3 font-semibold text-emerald-700">p-value &lt; 0.05 &rarr; Reject H<sub>0</sub> (Conclude Stationary)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">KPSS (Kwiatkowski-Phillips-Schmidt-Shin)</td>
                <td className="p-3">Series is Level or Trend Stationary</td>
                <td className="p-3 font-semibold text-emerald-700">p-value &gt; 0.05 &rarr; Fail to reject H<sub>0</sub> (Conclude Stationary)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-xs uppercase font-mono">First-Order Differencing</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Removes linear trends by subtracting consecutive observations:
            </p>
            <div className="p-2.5 bg-white rounded-xl border border-stone-200 font-mono text-xs text-stone-900">
              Y&prime;<sub>t</sub> = Y<sub>t</sub> &minus; Y<sub>t-1</sub> &emsp;&rarr;&emsp; <code>df["sales"].diff()</code>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-xs uppercase font-mono">Variance-Stabilizing Log Transform</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Stabilizes exponentially expanding variance over time:
            </p>
            <div className="p-2.5 bg-white rounded-xl border border-stone-200 font-mono text-xs text-stone-900">
              Y&prime;<sub>t</sub> = ln(Y<sub>t</sub>) &emsp;&rarr;&emsp; <code>np.log(df["sales"])</code>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 & 6 & 7: AUTOCORRELATION & PARTIAL AUTOCORRELATION (ACF & PACF) */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTIONS 05 &ndash; 07
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Lag Correlation Diagnostics
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          5&ndash;7. Autocorrelation (ACF) &amp; Partial Autocorrelation (PACF)
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Autocorrelation measures the linear association between a time series and lagged versions of itself. While the <strong>Autocorrelation Function (ACF)</strong> includes indirect compounding relationships (e.g. today's sales correlated with sales 2 days ago through yesterday), the <strong>Partial Autocorrelation Function (PACF)</strong> isolates the direct correlation after removing intermediate lag influences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-sm">Autocorrelation Function (ACF) Formula</span>
            <div className="p-3 bg-white rounded-xl border border-stone-200 font-mono text-xs text-stone-900">
              &rho;<sub>k</sub> = Cov(Y<sub>t</sub>, Y<sub>t-k</sub>) / Var(Y<sub>t</sub>) &isin; [&minus;1.0, 1.0]
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Identifies overall persistence, recurring seasonality (spikes at lag 7 or 12), and Moving Average order <em>q</em>.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-sm">Partial Autocorrelation Function (PACF)</span>
            <div className="p-3 bg-white rounded-xl border border-stone-200 font-mono text-xs text-stone-900">
              PACF(k) = Corr( Y<sub>t</sub>, Y<sub>t-k</sub> | Y<sub>t-1</sub>, &hellip;, Y<sub>t-k+1</sub> )
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Isolates direct incremental predictive power at lag <em>k</em> to determine AutoRegressive order <em>p</em>.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-stone-200">
          <table className="w-full text-xs text-left">
            <thead className="bg-stone-100 text-stone-800 font-bold uppercase tracking-wider">
              <tr>
                <th className="p-3">Theoretical Process</th>
                <th className="p-3">ACF Pattern</th>
                <th className="p-3">PACF Pattern</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="p-3 font-semibold text-stone-900">AutoRegressive AR(p)</td>
                <td className="p-3">Geometric or sinusoidal gradual decay</td>
                <td className="p-3 font-semibold text-orange-700">Cuts off abruptly after lag p</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Moving Average MA(q)</td>
                <td className="p-3 font-semibold text-orange-700">Cuts off abruptly after lag q</td>
                <td className="p-3">Geometric or sinusoidal gradual decay</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Mixed ARMA(p, q)</td>
                <td className="p-3">Gradual decay starting at lag q</td>
                <td className="p-3">Gradual decay starting at lag p</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 8 & 9: LAG FEATURES & ROLLING STATISTICS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTIONS 08 &amp; 09
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Feature Engineering
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          8&ndash;9. Lag Features, Rolling Statistics &amp; Preventing Leakage
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Tabular machine learning algorithms (Random Forest, LightGBM, XGBoost) lack innate awareness of temporal sequencing. We must engineer chronological features representing historical context, recent volatility, and cyclical anchors.
        </p>

        <pre className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`# 1. Historical Lag Features (Prior Days / Weeks / Months)
df['lag_1']  = df['sales'].shift(1)    # Yesterday's actual sales
df['lag_7']  = df['sales'].shift(7)    # Same day last week (weekly seasonality)
df['lag_30'] = df['sales'].shift(30)   # Same period last month

# 2. Shifted Rolling Window Statistics (CRITICAL: .shift(1) prevents target leakage!)
df['rolling_mean_7'] = df['sales'].shift(1).rolling(window=7).mean()
df['rolling_std_7']  = df['sales'].shift(1).rolling(window=7).std()
df['rolling_max_14'] = df['sales'].shift(1).rolling(window=14).max()

# 3. Expanding Window Statistics (All historical data up to t-1)
df['expanding_mean'] = df['sales'].shift(1).expanding().mean()

# 4. Calendar & Holiday Deterministic Regressors
df['day_of_week'] = df.index.dayofweek
df['month']       = df.index.month
df['is_weekend']  = df.index.dayofweek.isin([5, 6]).astype(int)`}
        </pre>

        <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 text-red-950 text-xs space-y-1">
          <span className="font-bold flex items-center gap-1.5 text-red-800">
            <AlertTriangle size={15} /> Dangerous Mistake: Unshifted Rolling Windows
          </span>
          <p className="leading-relaxed">
            Writing <code>df['sales'].rolling(7).mean()</code> computes the mean including the target observation at index <em>t</em>! When evaluated, the model will appear to achieve near-zero RMSE during development, but will fail completely in live production because <em>y<sub>t</sub></em> does not exist at forecast time. Always apply <code>.shift(1)</code>.
          </p>
        </div>
      </section>

      {/* SECTION 10 & 11: TIME-BASED & WALK-FORWARD VALIDATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTIONS 10 &amp; 11
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Validation Architectures
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          10&ndash;11. Chronological Splitting &amp; Walk-Forward Validation
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Standard k-fold cross-validation shuffles data across time, peeking into the future. Time series models must be validated using strictly forward-moving temporal splits:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-sm">TimeSeriesSplit (Expanding Window)</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Successive splits where the training set grows incrementally over time:
            </p>
            <ul className="text-xs font-mono text-stone-700 space-y-1 list-disc list-inside">
              <li>Fold 1: Train [Jan&ndash;Mar], Test [Apr]</li>
              <li>Fold 2: Train [Jan&ndash;Apr], Test [May]</li>
              <li>Fold 3: Train [Jan&ndash;May], Test [Jun]</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-sm">Walk-Forward Backtesting (Rolling Window)</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Maintains a fixed historical window (e.g. past 90 days), retraining or updating weights as time moves forward one step at a time:
            </p>
            <div className="p-2.5 bg-white rounded-xl border border-stone-200 font-mono text-[11px] text-stone-800">
              TimeSeriesSplit(n_splits=5, gap=7) # gap accounts for inference lag
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 & 13: MOVING AVERAGES & EXPONENTIAL SMOOTHING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTIONS 12 &amp; 13
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Statistical Smoothing
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          12&ndash;13. Moving Averages &amp; Exponential Smoothing (SES, Holt, Holt-Winters)
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Moving averages weight historical observations equally within a fixed window. In contrast, <strong>Exponential Smoothing</strong> assigns exponentially decaying weights to older observations, giving highest priority to recent demand signals:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-stone-600 uppercase">Simple Exp Smoothing (SES)</span>
            <h3 className="font-bold text-stone-900 text-sm">Level Only (&alpha;)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              For series with a stable average and no persistent trend or seasonality:
            </p>
            <div className="p-2 bg-white rounded-lg border border-stone-200 font-mono text-[11px] text-stone-900">
              L<sub>t</sub> = &alpha; Y<sub>t</sub> + (1 &minus; &alpha;) L<sub>t-1</sub>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-stone-600 uppercase">Holt's Linear Trend</span>
            <h3 className="font-bold text-stone-900 text-sm">Level (&alpha;) + Trend (&beta;)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Adds a trend slope equation to project continuous growth or contraction:
            </p>
            <div className="p-2 bg-white rounded-lg border border-stone-200 font-mono text-[11px] text-stone-900">
              y&#770;<sub>t+h</sub> = L<sub>t</sub> + h B<sub>t</sub>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-orange-50/70 border border-orange-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">Holt-Winters Triple Smoothing</span>
            <h3 className="font-bold text-stone-900 text-sm">Level (&alpha;) + Trend (&beta;) + Season (&gamma;)</h3>
            <p className="text-xs text-stone-700 leading-relaxed">
              Models recurring cycles with period <em>m</em> (e.g. 7 or 12) via additive or multiplicative factors.
            </p>
            <div className="p-2 bg-white rounded-lg border border-orange-200 font-mono text-[11px] text-orange-950">
              ExponentialSmoothing(..., trend="add", seasonal="add", seasonal_periods=12)
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14 & 15 & 16: ARIMA & SARIMA */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTIONS 14 &ndash; 16
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Classical Stochastic Models
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          14&ndash;16. AR, MA, ARMA, ARIMA &amp; Seasonal SARIMA
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          The Box-Jenkins methodology unites autoregression (AR), moving average shocks (MA), and differencing (I) into a cohesive mathematical framework:
        </p>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs sm:text-sm space-y-3">
          <div className="text-orange-400 font-sans font-bold text-sm">
            ARIMA(p, d, q) Structural Components
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-2.5 bg-stone-800 rounded-xl">
              <strong>p (AutoRegressive):</strong> Lags of the series used as direct regressors: &Sigma; &phi;<sub>i</sub> Y<sub>t-i</sub>.
            </div>
            <div className="p-2.5 bg-stone-800 rounded-xl">
              <strong>d (Differencing):</strong> Times the series must be differenced to achieve weak stationarity.
            </div>
            <div className="p-2.5 bg-stone-800 rounded-xl">
              <strong>q (Moving Average):</strong> Lags of past white-noise forecast errors: &Sigma; &theta;<sub>j</sub> &epsilon;<sub>t-j</sub>.
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-stone-900 text-sm">SARIMA(p, d, q)(P, D, Q, m) Multi-Seasonal Extension</h3>
            <span className="text-xs font-mono bg-orange-100 text-orange-800 px-2.5 py-0.5 rounded-full font-bold">
              Production Standard
            </span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            SARIMA captures recurring seasonal cycles by applying seasonal differencing <em>Y&prime;<sub>t</sub> = Y<sub>t</sub> &minus; Y<sub>t-m</sub></em> and modeling seasonal AR (P) and MA (Q) terms separated by seasonal period <em>m</em>:
          </p>
          <pre className="p-3.5 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
{`from statsmodels.tsa.statespace.sarimax import SARIMAX

# Monthly retail sales with yearly seasonality (m=12)
model = SARIMAX(train['sales'], order=(1, 1, 1), seasonal_order=(1, 1, 1, 12))
fitted = model.fit(disp=False)
forecast = fitted.forecast(steps=12)`}
          </pre>
        </div>
      </section>

      {/* SECTION 17 & 18: REGRESSION & GRADIENT BOOSTING FORECASTING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTIONS 17 &amp; 18
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Machine Learning Forecasting
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          17&ndash;18. Regression &amp; Gradient Boosting (LightGBM, XGBoost, CatBoost)
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Modern e-commerce and retail demand systems increasingly rely on gradient boosted decision trees because they seamlessly ingest hundreds of heterogeneous exogenous features (promotions, markdowns, holiday calendars, weather).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">1. Recursive Forecasting</span>
            <h3 className="font-bold text-stone-900 text-sm">One-Step Loop</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Predicts <em>t+1</em>, feeds that prediction into lag features to predict <em>t+2</em>, and repeats. Compact, but forecast errors compound rapidly over long horizons.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">2. Direct Forecasting</span>
            <h3 className="font-bold text-stone-900 text-sm">H Independent Models</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Trains a dedicated model for each horizon: Model 1 predicts <em>t+1</em>, Model 7 predicts <em>t+7</em>. Eliminates compounding error cascades at the expense of training <em>H</em> models.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">3. Multi-Output</span>
            <h3 className="font-bold text-stone-900 text-sm">Simultaneous Vector</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              A single multi-target model predicts the entire horizon vector <em>[y&#770;<sub>t+1</sub>, &hellip;, y&#770;<sub>t+H</sub>]</em> concurrently, capturing cross-horizon correlations.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 19: FORECAST EVALUATION METRICS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 19
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Validation &amp; Error Metrics
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          19. Forecast Evaluation Metrics: MAE, RMSE, MAPE, WAPE &amp; MASE
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-200">
          <table className="w-full text-xs text-left">
            <thead className="bg-stone-100 text-stone-800 font-bold uppercase tracking-wider">
              <tr>
                <th className="p-3">Metric</th>
                <th className="p-3">Mathematical Definition</th>
                <th className="p-3">Operational Purpose &amp; Trade-off</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="p-3 font-semibold text-stone-900">MAE</td>
                <td className="p-3 font-mono">1/n &Sigma; |y<sub>t</sub> &minus; y&#770;<sub>t</sub>|</td>
                <td className="p-3">Average linear magnitude of errors in original physical units (boxes, units).</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">RMSE</td>
                <td className="p-3 font-mono">&radic;[ 1/n &Sigma; (y<sub>t</sub> &minus; y&#770;<sub>t</sub>)&sup2; ]</td>
                <td className="p-3">Penalizes large, catastrophic forecasting failures more heavily than minor errors.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">MAPE</td>
                <td className="p-3 font-mono">100/n &Sigma; |(y<sub>t</sub> &minus; y&#770;<sub>t</sub>)/y<sub>t</sub>|</td>
                <td className="p-3">Intuitive business percentage. <strong>Fatal flaw:</strong> Undefined when actual demand is 0.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-orange-700">WAPE</td>
                <td className="p-3 font-mono">[ &Sigma; |y<sub>t</sub> &minus; y&#770;<sub>t</sub>| / &Sigma; y<sub>t</sub> ] &times; 100</td>
                <td className="p-3 font-semibold text-stone-900">Retail standard: Divides total error by total sales; handles zero sales days cleanly.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">MASE</td>
                <td className="p-3 font-mono">MAE / MAE<sub>naive</sub></td>
                <td className="p-3">Scale-free benchmark: MASE &lt; 1 proves the model outperforms a simple naive seasonal baseline.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 20: CAPSTONE SALES FORECASTING PROJECT & BEST PRACTICES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 20
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Capstone Engineering Project
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          20. End-to-End Enterprise Retail Sales Forecasting System
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Below is a production-grade 12-step architectural blueprint for deploying an end-to-end multi-model sales forecasting service in Python:
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-2">
            <span className="font-bold text-stone-900 text-sm block">12-Step Production Forecasting Pipeline:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 font-mono">
              <div className="p-2 bg-white rounded border border-stone-200">1. Ingest Raw Transactions</div>
              <div className="p-2 bg-white rounded border border-stone-200">2. Missing Date Imputation</div>
              <div className="p-2 bg-white rounded border border-stone-200">3. Daily/Weekly Aggregation</div>
              <div className="p-2 bg-white rounded border border-stone-200">4. STL Trend Decomposition</div>
              <div className="p-2 bg-white rounded border border-stone-200">5. ADF Stationarity Screening</div>
              <div className="p-2 bg-white rounded border border-stone-200">6. Lag &amp; Rolling Engineering</div>
              <div className="p-2 bg-white rounded border border-stone-200">7. Chronological Data Split</div>
              <div className="p-2 bg-white rounded border border-stone-200">8. Train Seasonal Naive Baseline</div>
              <div className="p-2 bg-white rounded border border-stone-200">9. Fit Holt-Winters &amp; SARIMA</div>
              <div className="p-2 bg-white rounded border border-stone-200">10. Train LightGBM / XGBoost</div>
              <div className="p-2 bg-white rounded border border-stone-200">11. Compute WAPE &amp; Residuals</div>
              <div className="p-2 bg-white rounded border border-stone-200">12. Deploy Streamlit Dashboard</div>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h3 className="font-bold text-stone-900 text-base">Key Engineering Takeaways &amp; Pitfalls to Avoid</h3>
          <ul className="text-xs sm:text-sm text-stone-700 space-y-2 list-disc list-inside leading-relaxed">
            <li><strong>Preserve Temporal Order:</strong> Never randomly partition data into train/test splits. Always validate using forward chronological splits or TimeSeriesSplit.</li>
            <li><strong>Shift Rolling Windows:</strong> Never compute rolling statistics on unshifted arrays; shifting by at least 1 step is required to prevent leaking the target.</li>
            <li><strong>Respect the Baseline:</strong> Never deploy complex deep learning or gradient boosting models without verifying they beat simple Seasonal Naive and Holt-Winters benchmarks.</li>
            <li><strong>Distinguish Multiplicative Patterns:</strong> Verify whether seasonal swings grow with series level before fitting additive models.</li>
            <li><strong>Prevent Error Accumulation:</strong> In multi-step gradient boosting, favor direct forecasting or multi-output models over long-horizon recursive loops.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
