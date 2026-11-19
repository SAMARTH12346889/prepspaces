import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  BookOpen,
  Terminal,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Activity,
  Layers,
  HelpCircle,
  TrendingDown,
  TrendingUp,
  RefreshCw,
  GitBranch,
  Cpu,
  BarChart2,
  Maximize2,
  Minimize2,
  Compass,
  AlertTriangle,
  Search,
  Filter,
  Calendar,
  Clock,
  LineChart,
  Zap,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import MachineLearningTimeSeriesSections from "./MachineLearningTimeSeriesSections";

export default function MachineLearningTimeSeries() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'workbench'
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("decomposition_sim"); // 'decomposition_sim' | 'stationarity_lab' | 'forecasting_comparison' | 'quiz'

  // ---------------------------------------------------------------------------
  // LAB 1: TIME SERIES DECOMPOSITION & SEASONALITY SIMULATOR
  // ---------------------------------------------------------------------------
  const [modelType, setModelType] = useState("additive"); // 'additive' | 'multiplicative'
  const [trendSlope, setTrendSlope] = useState(1.5);
  const [seasonalAmp, setSeasonalAmp] = useState(25);
  const [seasonalPeriod, setSeasonalPeriod] = useState(12); // 7 (weekly) or 12 (monthly)
  const [noiseLevel, setNoiseLevel] = useState(6);

  // Generate 36 time points (e.g. 3 years of monthly data)
  const decompositionData = useMemo(() => {
    const points = [];
    const baseLevel = 100;

    for (let t = 0; t < 36; t++) {
      const trend = baseLevel + trendSlope * t;
      // Periodic seasonal oscillation
      const angle = (2 * Math.PI * (t % seasonalPeriod)) / seasonalPeriod;
      const seasonalNorm = Math.sin(angle); // between -1 and 1
      
      // Deterministic pseudo-noise
      const pseudoNoise = Math.sin(t * 7.3) * noiseLevel;

      let seasonalVal = 0;
      let observedVal = 0;

      if (modelType === "additive") {
        seasonalVal = seasonalNorm * seasonalAmp;
        observedVal = trend + seasonalVal + pseudoNoise;
      } else {
        // Multiplicative: seasonal factor oscillates between 0.7 and 1.3
        const factor = 1 + (seasonalNorm * seasonalAmp) / 100;
        seasonalVal = (factor - 1) * trend;
        const noiseFactor = 1 + pseudoNoise / 100;
        observedVal = trend * factor * noiseFactor;
      }

      points.push({
        t,
        trend,
        seasonal: seasonalVal,
        noise: pseudoNoise,
        observed: Math.max(10, observedVal),
      });
    }
    return points;
  }, [modelType, trendSlope, seasonalAmp, seasonalPeriod, noiseLevel]);

  // ---------------------------------------------------------------------------
  // LAB 2: STATIONARITY & ACF/PACF VISUALIZER
  // ---------------------------------------------------------------------------
  const [isDifferenced, setIsDifferenced] = useState(false);

  // Simulated 12-lag ACF and PACF values
  const lagDiagnostics = useMemo(() => {
    if (!isDifferenced) {
      // Non-stationary series: ACF decays slowly; PACF has a large spike at lag 1
      return {
        adfStat: -1.42,
        adfPValue: 0.573,
        isStationary: false,
        acf: [1.0, 0.88, 0.77, 0.66, 0.56, 0.47, 0.38, 0.30, 0.23, 0.17, 0.12, 0.08],
        pacf: [1.0, 0.88, 0.04, -0.02, 0.01, -0.03, 0.02, -0.01, 0.01, 0.00, -0.01, 0.01],
      };
    } else {
      // Stationary first-differenced series: ACF cuts off or decays rapidly; p < 0.01
      return {
        adfStat: -5.84,
        adfPValue: 0.0001,
        isStationary: true,
        acf: [1.0, 0.28, -0.12, -0.06, 0.04, -0.03, 0.02, 0.01, -0.02, 0.03, -0.01, 0.01],
        pacf: [1.0, 0.28, -0.19, 0.02, 0.03, -0.04, 0.01, 0.00, -0.02, 0.02, -0.01, 0.00],
      };
    }
  }, [isDifferenced]);

  // ---------------------------------------------------------------------------
  // LAB 3: FORECASTING MODELS COMPARISON LAB
  // ---------------------------------------------------------------------------
  const [forecastHorizon, setForecastHorizon] = useState(6); // 1 to 12 months ahead

  // Simulated monthly retail sales: 24 months historical + 12 months future ground truth
  const retailGroundTruth = useMemo(() => [
    // Month 1 to 24 (Historical)
    110, 115, 122, 130, 145, 160, 155, 140, 135, 150, 175, 210,
    125, 132, 140, 152, 168, 185, 178, 162, 158, 175, 205, 245,
    // Month 25 to 36 (Future Actual Ground Truth)
    142, 150, 160, 175, 192, 215, 204, 188, 182, 205, 238, 285,
  ], []);

  const modelForecasts = useMemo(() => {
    const historical = retailGroundTruth.slice(0, 24);
    const futureActual = retailGroundTruth.slice(24, 24 + forecastHorizon);

    // 1. Seasonal Naive: Uses sales from same month 12 months prior
    const seasonalNaive = [];
    for (let h = 0; h < forecastHorizon; h++) {
      const pastIdx = 24 - 12 + h;
      seasonalNaive.push(historical[pastIdx]);
    }

    // 2. Holt-Winters Exponential Smoothing (Level + Linear Trend + Seasonality)
    const holtWinters = [];
    for (let h = 0; h < forecastHorizon; h++) {
      const pastYearVal = historical[24 - 12 + h];
      const trendBoost = 18 + h * 1.5; // estimated secular growth
      holtWinters.push(Math.round(pastYearVal + trendBoost));
    }

    // 3. SARIMA(1,1,1)(1,1,1)12 (Stochastic Box-Jenkins projection)
    const sarima = [];
    for (let h = 0; h < forecastHorizon; h++) {
      const pastYearVal = historical[24 - 12 + h];
      const sarimaTrend = 16 + h * 1.8;
      sarima.push(Math.round(pastYearVal + sarimaTrend));
    }

    // 4. Gradient Boosting (LightGBM with Lag 1, Lag 12 & Rolling Mean 3)
    const gradientBoosting = [];
    for (let h = 0; h < forecastHorizon; h++) {
      const pastYearVal = historical[24 - 12 + h];
      const mlTrend = 17 + h * 1.9 + (h === 11 ? 12 : 0); // captures nonlinear holiday surge
      gradientBoosting.push(Math.round(pastYearVal + mlTrend));
    }

    // Calculate metrics for each model over the selected horizon
    const calcMetrics = (preds) => {
      let sumAbsErr = 0;
      let sumSqErr = 0;
      let sumActual = 0;
      for (let i = 0; i < forecastHorizon; i++) {
        const err = preds[i] - futureActual[i];
        sumAbsErr += Math.abs(err);
        sumSqErr += err * err;
        sumActual += futureActual[i];
      }
      const mae = sumAbsErr / forecastHorizon;
      const rmse = Math.sqrt(sumSqErr / forecastHorizon);
      const wape = (sumAbsErr / sumActual) * 100;
      return { mae, rmse, wape };
    };

    return {
      futureActual,
      models: [
        { name: "Seasonal Naive (Baseline)", preds: seasonalNaive, ...calcMetrics(seasonalNaive), color: "text-stone-500" },
        { name: "Holt-Winters Exp Smoothing", preds: holtWinters, ...calcMetrics(holtWinters), color: "text-blue-600" },
        { name: "SARIMA(1,1,1)(1,1,1)₁₂", preds: sarima, ...calcMetrics(sarima), color: "text-purple-600" },
        { name: "Gradient Boosting (LightGBM)", preds: gradientBoosting, ...calcMetrics(gradientBoosting), color: "text-orange-600 font-bold" },
      ].sort((a, b) => a.wape - b.wape),
    };
  }, [retailGroundTruth, forecastHorizon]);

  // ---------------------------------------------------------------------------
  // LAB 4: 10-QUESTION CERTIFICATION ASSESSMENT
  // ---------------------------------------------------------------------------
  const quizQuestions = useMemo(() => [
    {
      id: 1,
      question: "Why is random train-test splitting fundamentally invalid for evaluating time series forecasting models?",
      options: [
        "Because random splitting causes memory overflow in pandas",
        "Because random shuffling introduces temporal data leakage, allowing the model to train on future observations to predict past observations",
        "Because time series datasets cannot be divided into subsets",
        "Because random split only works with classification labels, not continuous values",
      ],
      correctIndex: 1,
      explanation: "Time series data exhibits chronological dependency. Random shuffling creates future-to-past data leakage where the algorithm learns from observations that would not exist at inference time. Chronological splitting or walk-forward validation must be used so models are evaluated strictly on future periods.",
    },
    {
      id: 2,
      question: "What is the primary difference between additive and multiplicative time series decomposition models?",
      options: [
        "Additive models only work on monthly data, whereas multiplicative models work on daily data",
        "In an additive model (Y = T + S + R), the magnitude of seasonal variations remains constant over time; in a multiplicative model (Y = T × S × R), seasonal swings grow or shrink proportionally with the overall trend level",
        "Multiplicative models do not include residuals",
        "Additive models require taking the exponential of the series first",
      ],
      correctIndex: 1,
      explanation: "If holiday demand peaks are consistently +5,000 units regardless of baseline growth, an additive model (Y_t = T_t + S_t + R_t) is appropriate. If holiday peaks scale proportionally (e.g. always +50% above trend, growing from +5,000 to +25,000 as the company expands), a multiplicative model (Y_t = T_t × S_t × R_t) is required.",
    },
    {
      id: 3,
      question: "What conditions define a weakly stationary time series?",
      options: [
        "The series contains no missing values and has zero outliers",
        "The mean and variance remain approximately constant over time, and the autocovariance between two periods depends solely on the lag length rather than absolute calendar time",
        "All observations follow a deterministic upward linear slope",
        "The dataset has a seasonal period equal to 1",
      ],
      correctIndex: 1,
      explanation: "Weak (covariance) stationarity requires three properties: constant mean over time, constant variance (homoscedasticity), and an autocovariance function Cov(Y_t, Y_{t-k}) that depends only on the separation lag k, not on the time index t. Statistical models like ARMA require stationarity to produce stable parameters.",
    },
    {
      id: 4,
      question: "How are the Augmented Dickey-Fuller (ADF) test results interpreted when assessing stationarity?",
      options: [
        "A p-value greater than 0.50 confirms stationarity",
        "A p-value below 0.05 rejects the null hypothesis of a unit root, providing statistical evidence that the series is stationary",
        "The test statistic must equal exactly zero for stationarity",
        "A negative test statistic always indicates strong yearly seasonality",
      ],
      correctIndex: 1,
      explanation: "The null hypothesis (H0) of the ADF test is that the series possesses a unit root (is non-stationary). A small p-value (typically < 0.05) allows rejection of H0 in favor of the alternative hypothesis (H1) that the series is stationary.",
    },
    {
      id: 5,
      question: "In ARIMA diagnostic analysis, what theoretical cutoff pattern in ACF and PACF plots identifies a stationary AutoRegressive AR(p) process?",
      options: [
        "ACF cuts off sharply after lag p, while PACF decays gradually",
        "PACF cuts off sharply after lag p, while ACF decays gradually or exponentially toward zero",
        "Both ACF and PACF cut off at lag 1",
        "Neither plot shows any significant spikes at any lag",
      ],
      correctIndex: 1,
      explanation: "For a pure AR(p) process, the partial autocorrelation function (PACF) isolates the direct lag correlation, cutting off sharply to zero after lag p. The autocorrelation function (ACF) includes compounding indirect correlations and decays geometrically or sinusoidally.",
    },
    {
      id: 6,
      question: "In Holt-Winters Exponential Smoothing, how does it extend Simple Exponential Smoothing (SES) and Holt's Linear Trend method?",
      options: [
        "By replacing gradient descent with tree partitioning",
        "By simultaneously modeling three components: smoothed level (alpha), trend slope (beta), and recurring seasonal cycles (gamma)",
        "By automatically differencing non-stationary data 3 times",
        "By requiring only a single observation to generate forecasts",
      ],
      correctIndex: 1,
      explanation: "Simple Exponential Smoothing models only level (alpha). Holt's method adds a trend component (beta) for trending series. Holt-Winters incorporates a third seasonal equation (gamma) with a specified seasonal period m (e.g., m=7 for daily weekly patterns, m=12 for monthly annual patterns).",
    },
    {
      id: 7,
      question: "What is the meaning of the parameters in a SARIMA(p, d, q)(P, D, Q, m) model?",
      options: [
        "p,d,q are hyperparameter seeds; P,D,Q are neural network layer counts; m is batch size",
        "(p, d, q) represent non-seasonal AR order, differencing order, and MA order; (P, D, Q) represent seasonal AR, seasonal differencing, and seasonal MA orders; and m is the seasonal period length",
        "m represents the number of minutes between measurements, while the other 6 letters are loss functions",
        "p and P are polynomial degrees, while d and D are decimal precisions",
      ],
      correctIndex: 1,
      explanation: "SARIMA models both local consecutive dependencies (p non-seasonal AR lags, d non-seasonal differences, q non-seasonal MA lags) and seasonal cycle dependencies (P seasonal AR lags separated by m periods, D seasonal differences Y_t - Y_{t-m}, and Q seasonal MA lags).",
    },
    {
      id: 8,
      question: "When engineering lag and rolling features for machine learning models (e.g. LightGBM, XGBoost), why must rolling windows be shifted by at least 1 step (e.g. shift(1).rolling(7).mean())?",
      options: [
        "To make the code run faster on GPU architectures",
        "To prevent target leakage; an unshifted rolling window on sales at timestamp t would include the target value y_t inside its own summary calculation",
        "Because scikit-learn rejects rolling calculations with 0 shift",
        "To convert the target into a classification label",
      ],
      correctIndex: 1,
      explanation: "If predicting sales at time t, the actual value y_t is unknown at inference time. An unshifted rolling mean calculated at index t uses y_t, causing direct target leakage. Shifting by 1 (or by the forecasting horizon) ensures only genuinely known historical observations are used.",
    },
    {
      id: 9,
      question: "What is the primary difference between recursive multi-step forecasting and direct multi-step forecasting when using gradient boosting?",
      options: [
        "Recursive forecasting requires deep learning, while direct forecasting uses linear regression",
        "Recursive forecasting uses a single one-step model and feeds its own previous predictions forward as future lag inputs (accumulating error), whereas direct forecasting trains a distinct independent model for each horizon step h",
        "Direct forecasting only predicts one day into the future",
        "Recursive forecasting cannot handle calendar features",
      ],
      correctIndex: 1,
      explanation: "In recursive multi-step forecasting, a single model trained on lag 1 predicts t+1, then that predicted value is fed into lag 1 to predict t+2; errors compound over long horizons. In direct forecasting, separate models f_1, f_2, ..., f_H are trained independently for each horizon step, avoiding error cascades at the cost of training H models.",
    },
    {
      id: 10,
      question: "Why is Weighted Absolute Percentage Error (WAPE) frequently preferred over Mean Absolute Percentage Error (MAPE) in commercial retail demand forecasting?",
      options: [
        "Because WAPE computes in O(1) time complexity",
        "Because MAPE becomes undefined (division by zero) when sales are 0, and distorts overall error on low-volume items, whereas WAPE divides total absolute error by total actual demand",
        "Because WAPE is measured in degrees Celsius",
        "Because MAPE is an unsupervised metric",
      ],
      correctIndex: 1,
      explanation: "MAPE computes |(y - y_hat)/y| for every individual record. In retail catalogs with intermittent or zero sales days, y=0 creates a fatal division by zero, and a 1-unit error on an item selling 1 unit yields a 100% error. WAPE (sum|y - y_hat| / sum(y)) aggregates errors across volume, preventing division by zero and weighting high-impact sales appropriately.",
    },
  ], []);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  }, [quizQuestions, selectedAnswers]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Top Navigation */}
      <ModuleNav
        currentModuleId="time-series-forecasting"
        trackId="machine-learning"
        course="machine-learning"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8 flex-1">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-stone-500 flex items-center gap-2">
          <button onClick={() => navigate("/")} className="hover:text-stone-900 transition-colors">
            Home
          </button>
          <span>/</span>
          <button onClick={() => navigate("/learning")} className="hover:text-stone-900 transition-colors">
            Curriculum
          </button>
          <span>/</span>
          <button onClick={() => navigate("/learning/machine-learning")} className="hover:text-stone-900 transition-colors">
            Machine Learning
          </button>
          <span>/</span>
          <span className="text-stone-900 font-bold">Module 19</span>
        </nav>

        {/* Hero Card */}
        <header className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800 border border-orange-200">
                MODULE 19
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-600">
                Advanced Machine Learning
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-600">
                Temporal Forecasting
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              Time Series Analysis &amp; Forecasting
            </h1>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Master the statistical mechanics and machine learning algorithms for modeling chronological sequences: trend and seasonal decomposition (classical &amp; STL), unit-root stationarity testing (ADF &amp; KPSS), differencing, ACF/PACF diagnostics, exponential smoothing (SES, Holt, Holt-Winters), ARIMA &amp; SARIMA, regression forecasting with lag &amp; rolling features, gradient boosting (LightGBM/XGBoost) multi-step strategies, and retail demand metrics (MAE, RMSE, MAPE, WAPE, MASE).
            </p>

            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-stone-500">
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">STL Decomposition</span>
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">ADF Stationarity</span>
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">ACF &amp; PACF</span>
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">SARIMA(p,d,q)(P,D,Q)</span>
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">LightGBM Forecasting</span>
              <span className="bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200">WAPE &amp; MASE</span>
            </div>
          </div>
        </header>

        {/* Primary View Toggle: Curriculum vs Interactive Workbench */}
        <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
          <div className="flex items-center gap-2 p-1 bg-stone-200/60 rounded-2xl">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "curriculum"
                  ? "bg-white text-stone-900 shadow-xs border border-stone-200/80"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <BookOpen size={16} />
              <span>Full Curriculum (20 Topics)</span>
            </button>
            <button
              onClick={() => setActiveTab("workbench")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "workbench"
                  ? "bg-white text-stone-900 shadow-xs border border-stone-200/80"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Terminal size={16} />
              <span>Interactive Forecasting Workbench (4 Labs)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CURRICULUM SPECIFICATION */}
        {activeTab === "curriculum" && (
          <MachineLearningTimeSeriesSections />
        )}

        {/* TAB 2: INTERACTIVE FORECASTING WORKBENCH */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Sub-Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-2xl border border-[#e7e3da] shadow-xs">
              <button
                onClick={() => setActiveWorkbenchTab("decomposition_sim")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "decomposition_sim"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <Layers size={15} />
                <span>Lab 1: Decomposition &amp; Seasonality</span>
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("stationarity_lab")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "stationarity_lab"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <Activity size={15} />
                <span>Lab 2: Stationarity &amp; ACF/PACF</span>
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("forecasting_comparison")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "forecasting_comparison"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <LineChart size={15} />
                <span>Lab 3: Model Comparison &amp; WAPE</span>
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100"
                }`}
              >
                <HelpCircle size={15} />
                <span>Lab 4: Certification Assessment</span>
              </button>
            </div>

            {/* LAB 1: TIME SERIES DECOMPOSITION & SEASONALITY */}
            {activeWorkbenchTab === "decomposition_sim" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 1</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Time Series Decomposition &amp; Seasonality Simulator
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Isolate Trend, Seasonality, and Residuals. Switch between Additive (<em>Y = T + S + R</em>) and Multiplicative (<em>Y = T &times; S &times; R</em>) models, modify trend slopes and seasonal amplitudes, and observe the resulting decomposition components.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 text-xs">
                    <span className="font-bold text-stone-800 uppercase tracking-wider block">
                      Decomposition Parameters
                    </span>

                    <div>
                      <label className="font-bold text-stone-700 block mb-1">Decomposition Mode:</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setModelType("additive")}
                          className={`p-2 rounded-xl border font-bold text-xs cursor-pointer ${
                            modelType === "additive"
                              ? "bg-orange-600 text-white border-orange-600"
                              : "bg-white border-stone-200 text-stone-700 hover:bg-stone-100"
                          }`}
                        >
                          Additive (T+S+R)
                        </button>
                        <button
                          onClick={() => setModelType("multiplicative")}
                          className={`p-2 rounded-xl border font-bold text-xs cursor-pointer ${
                            modelType === "multiplicative"
                              ? "bg-orange-600 text-white border-orange-600"
                              : "bg-white border-stone-200 text-stone-700 hover:bg-stone-100"
                          }`}
                        >
                          Multiplicative (T&times;S&times;R)
                        </button>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Trend Slope (&beta;):</span>
                        <strong>+{trendSlope.toFixed(1)} / month</strong>
                      </div>
                      <input
                        type="range"
                        min="0.0"
                        max="3.0"
                        step="0.2"
                        value={trendSlope}
                        onChange={(e) => setTrendSlope(parseFloat(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Seasonal Amplitude:</span>
                        <strong>{seasonalAmp} units</strong>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="50"
                        step="5"
                        value={seasonalAmp}
                        onChange={(e) => setSeasonalAmp(parseInt(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-stone-700 block mb-1">Seasonal Period (m):</label>
                      <select
                        value={seasonalPeriod}
                        onChange={(e) => setSeasonalPeriod(parseInt(e.target.value))}
                        className="w-full p-2 rounded-xl bg-white border border-stone-200 font-bold text-stone-800 cursor-pointer"
                      >
                        <option value={7}>m = 7 (Weekly Seasonality)</option>
                        <option value={12}>m = 12 (Yearly Monthly Seasonality)</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex justify-between font-mono mb-1">
                        <span>Residual Noise Variance:</span>
                        <strong>&plusmn;{noiseLevel}</strong>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="15"
                        step="1"
                        value={noiseLevel}
                        onChange={(e) => setNoiseLevel(parseInt(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Visual Plots */}
                  <div className="lg:col-span-2 space-y-3">
                    <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                      Signal Decomposition Visualizer (36 Time Steps)
                    </span>

                    {/* Subplot 1: Raw Observed */}
                    <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-2xl space-y-1">
                      <div className="flex justify-between text-xs font-bold text-stone-800">
                        <span>1. Observed Series (Y<sub>t</sub>)</span>
                        <span className="font-mono text-stone-500">Raw Composite Signal</span>
                      </div>
                      <div className="h-16 flex items-end gap-1 pt-2 border-b border-stone-200">
                        {decompositionData.map((d) => {
                          const heightPct = Math.min(100, Math.max(10, (d.observed / 240) * 100));
                          return (
                            <div
                              key={d.t}
                              className="flex-1 bg-orange-600 hover:bg-orange-700 rounded-t-xs transition-all relative group cursor-pointer"
                              style={{ height: `${heightPct}%` }}
                              title={`t=${d.t}: ${d.observed.toFixed(1)}`}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Subplot 2: Estimated Trend */}
                    <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-2xl space-y-1">
                      <div className="flex justify-between text-xs font-bold text-stone-800">
                        <span>2. Trend Component (T<sub>t</sub>)</span>
                        <span className="font-mono text-blue-600">Slope: +{trendSlope.toFixed(1)}/step</span>
                      </div>
                      <div className="h-12 flex items-end gap-1 pt-2 border-b border-stone-200">
                        {decompositionData.map((d) => {
                          const heightPct = Math.min(100, Math.max(10, (d.trend / 240) * 100));
                          return (
                            <div
                              key={d.t}
                              className="flex-1 bg-blue-500 rounded-t-xs"
                              style={{ height: `${heightPct}%` }}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Subplot 3: Seasonal Component */}
                    <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-2xl space-y-1">
                      <div className="flex justify-between text-xs font-bold text-stone-800">
                        <span>3. Seasonal Pattern (S<sub>t</sub>)</span>
                        <span className="font-mono text-purple-600">Period m = {seasonalPeriod}</span>
                      </div>
                      <div className="h-12 flex items-center gap-1 border-b border-stone-200">
                        {decompositionData.map((d) => {
                          const heightPx = Math.min(22, Math.abs(d.seasonal) * 0.7);
                          const isPositive = d.seasonal >= 0;
                          return (
                            <div key={d.t} className="flex-1 flex flex-col justify-center items-center h-full">
                              <div
                                className={`w-full ${isPositive ? "bg-purple-500 rounded-t-xs self-end" : "bg-purple-300 rounded-b-xs self-start"}`}
                                style={{ height: `${Math.max(2, heightPx)}px` }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Subplot 4: Residual Noise */}
                    <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-2xl space-y-1">
                      <div className="flex justify-between text-xs font-bold text-stone-800">
                        <span>4. Irregular Residuals (R<sub>t</sub>)</span>
                        <span className="font-mono text-stone-500">&plusmn;{noiseLevel} White Noise</span>
                      </div>
                      <div className="h-10 flex items-center gap-1 border-b border-stone-200">
                        {decompositionData.map((d) => (
                          <div key={d.t} className="flex-1 flex justify-center items-center h-full">
                            <div
                              className="w-1 bg-stone-400 rounded-full"
                              style={{ height: `${Math.max(2, Math.abs(d.noise) * 2)}px` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: STATIONARITY & ACF/PACF VISUALIZER */}
            {activeWorkbenchTab === "stationarity_lab" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 2</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Stationarity, Unit-Root Tests &amp; ACF/PACF Diagnostics
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Inspect how First-Order Differencing (<em>Y&prime;<sub>t</sub> = Y<sub>t</sub> &minus; Y<sub>t-1</sub></em>) stabilizes the mean, cures unit-root non-stationarity, and collapses slow ACF decay into stationary cutoff signatures.
                  </p>
                </div>

                {/* Toggle Controls */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-stone-800">Transformation State:</span>
                    <button
                      onClick={() => setIsDifferenced(false)}
                      className={`px-4 py-2 rounded-xl border font-bold cursor-pointer ${
                        !isDifferenced
                          ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                          : "bg-white border-stone-200 text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      Raw Series (Non-Stationary)
                    </button>
                    <button
                      onClick={() => setIsDifferenced(true)}
                      className={`px-4 py-2 rounded-xl border font-bold cursor-pointer ${
                        isDifferenced
                          ? "bg-orange-600 text-white border-orange-600 shadow-xs"
                          : "bg-white border-stone-200 text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      First Difference Y&prime;<sub>t</sub> (Stationary)
                    </button>
                  </div>

                  <div className="flex items-center gap-4 font-mono">
                    <div>
                      ADF Statistic: <strong>{lagDiagnostics.adfStat}</strong>
                    </div>
                    <div>
                      p-value: <strong>{lagDiagnostics.adfPValue}</strong>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                        lagDiagnostics.isStationary
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-red-100 text-red-800 border border-red-300"
                      }`}
                    >
                      {lagDiagnostics.isStationary ? "STATIONARY (p < 0.05)" : "NON-STATIONARY (p > 0.05)"}
                    </span>
                  </div>
                </div>

                {/* ACF & PACF Bar Plots */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* ACF Plot */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-stone-900 text-sm">Autocorrelation Function (ACF)</span>
                      <span className="text-[11px] font-mono text-stone-500">95% Conf: &plusmn;0.28</span>
                    </div>
                    <div className="h-44 border-b border-t border-stone-200 py-2 flex items-center justify-between gap-1 relative">
                      {/* Dashed Confidence Bands */}
                      <div className="absolute top-[28%] left-0 right-0 border-b border-dashed border-blue-400 pointer-events-none" />
                      <div className="absolute top-[72%] left-0 right-0 border-b border-dashed border-blue-400 pointer-events-none" />

                      {lagDiagnostics.acf.map((val, lag) => {
                        const isPositive = val >= 0;
                        const barHeight = Math.min(70, Math.abs(val) * 70);
                        const isSignificant = Math.abs(val) > 0.28;
                        return (
                          <div key={lag} className="flex-1 flex flex-col items-center justify-center h-full group relative">
                            <div className="h-[70px] flex items-end">
                              {isPositive && (
                                <div
                                  className={`w-3.5 rounded-t-xs ${isSignificant ? "bg-orange-600" : "bg-stone-300"}`}
                                  style={{ height: `${barHeight}px` }}
                                />
                              )}
                            </div>
                            <div className="h-[70px] flex items-start">
                              {!isPositive && (
                                <div
                                  className={`w-3.5 rounded-b-xs ${isSignificant ? "bg-orange-600" : "bg-stone-300"}`}
                                  style={{ height: `${barHeight}px` }}
                                />
                              )}
                            </div>
                            <span className="text-[10px] font-mono text-stone-500 mt-1">{lag}</span>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      {!isDifferenced
                        ? "Slow geometric decay across lags indicates strong persistence and non-stationarity requiring differencing."
                        : "ACF cuts off sharply after lag 1, confirming a stationary process with short-term memory (MA(1) candidate)."}
                    </p>
                  </div>

                  {/* PACF Plot */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-stone-900 text-sm">Partial Autocorrelation Function (PACF)</span>
                      <span className="text-[11px] font-mono text-stone-500">95% Conf: &plusmn;0.28</span>
                    </div>
                    <div className="h-44 border-b border-t border-stone-200 py-2 flex items-center justify-between gap-1 relative">
                      {/* Dashed Confidence Bands */}
                      <div className="absolute top-[28%] left-0 right-0 border-b border-dashed border-blue-400 pointer-events-none" />
                      <div className="absolute top-[72%] left-0 right-0 border-b border-dashed border-blue-400 pointer-events-none" />

                      {lagDiagnostics.pacf.map((val, lag) => {
                        const isPositive = val >= 0;
                        const barHeight = Math.min(70, Math.abs(val) * 70);
                        const isSignificant = Math.abs(val) > 0.28;
                        return (
                          <div key={lag} className="flex-1 flex flex-col items-center justify-center h-full group relative">
                            <div className="h-[70px] flex items-end">
                              {isPositive && (
                                <div
                                  className={`w-3.5 rounded-t-xs ${isSignificant ? "bg-purple-600" : "bg-stone-300"}`}
                                  style={{ height: `${barHeight}px` }}
                                />
                              )}
                            </div>
                            <div className="h-[70px] flex items-start">
                              {!isPositive && (
                                <div
                                  className={`w-3.5 rounded-b-xs ${isSignificant ? "bg-purple-600" : "bg-stone-300"}`}
                                  style={{ height: `${barHeight}px` }}
                                />
                              )}
                            </div>
                            <span className="text-[10px] font-mono text-stone-500 mt-1">{lag}</span>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      {!isDifferenced
                        ? "Single massive spike at lag 1 with zero subsequent direct partial correlations (AR(1) signature on raw data)."
                        : "PACF cuts off cleanly after lag 1, providing guidance for an ARIMA(1, 1, 0) specification."}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: FORECASTING MODELS COMPARISON LAB */}
            {activeWorkbenchTab === "forecasting_comparison" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-orange-600 uppercase">Interactive Lab 3</span>
                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                      Forecasting Models Comparison &amp; WAPE Evaluation
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Compare four production forecasting approaches on retail sales demand: Seasonal Naive baseline, Holt-Winters, SARIMA, and LightGBM with lag &amp; rolling features.
                    </p>
                  </div>

                  {/* Horizon Slider */}
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded-2xl text-xs space-y-1 min-w-[200px]">
                    <div className="flex justify-between font-mono">
                      <span>Forecast Horizon (h):</span>
                      <strong>{forecastHorizon} Months</strong>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="12"
                      value={forecastHorizon}
                      onChange={(e) => setForecastHorizon(parseInt(e.target.value))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Model Scorecards & Comparison Table */}
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-stone-100 text-stone-800 font-bold uppercase tracking-wider">
                      <tr>
                        <th className="p-3">Rank &amp; Forecasting Model</th>
                        <th className="p-3">MAE (Units)</th>
                        <th className="p-3">RMSE (Units)</th>
                        <th className="p-3 font-semibold text-orange-700">WAPE (%)</th>
                        <th className="p-3">Next Month Pred (t+1)</th>
                        <th className="p-3">End-of-Horizon Pred (t+{forecastHorizon})</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700">
                      {modelForecasts.models.map((m, idx) => (
                        <tr key={m.name} className={idx === 0 ? "bg-orange-50/70 font-semibold" : "hover:bg-stone-50"}>
                          <td className="p-3 flex items-center gap-2">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${
                              idx === 0 ? "bg-orange-600 text-white" : "bg-stone-200 text-stone-700"
                            }`}>
                              {idx + 1}
                            </span>
                            <span className={m.color}>{m.name}</span>
                            {idx === 0 && (
                              <span className="text-[10px] bg-orange-200 text-orange-950 px-1.5 py-0.5 rounded font-mono font-bold">
                                Winner
                              </span>
                            )}
                          </td>
                          <td className="p-3 font-mono">{m.mae.toFixed(1)}</td>
                          <td className="p-3 font-mono">{m.rmse.toFixed(1)}</td>
                          <td className="p-3 font-mono font-bold text-orange-600">{m.wape.toFixed(1)}%</td>
                          <td className="p-3 font-mono">{m.preds[0]}</td>
                          <td className="p-3 font-mono">{m.preds[forecastHorizon - 1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Prediction Trajectory Comparison Visualizer */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-stone-900">
                      Prediction Trajectory across Forecast Horizon (Months 25 to {24 + forecastHorizon})
                    </span>
                    <span className="font-mono text-stone-500">Actual vs Predicted Demand</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 pt-2">
                    {modelForecasts.futureActual.map((act, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white border border-stone-200 space-y-1 text-xs">
                        <div className="flex justify-between font-mono text-stone-400 text-[11px]">
                          <span>Month {25 + idx}</span>
                          <span className="text-stone-900 font-bold">Act: {act}</span>
                        </div>
                        <div className="pt-1 border-t border-stone-100 font-mono text-[11px] space-y-0.5">
                          <div className="text-orange-600 font-semibold">GBM: {modelForecasts.models.find(m => m.name.includes("Gradient"))?.preds[idx]}</div>
                          <div className="text-purple-600">SARIMA: {modelForecasts.models.find(m => m.name.includes("SARIMA"))?.preds[idx]}</div>
                          <div className="text-stone-400">Naive: {modelForecasts.models.find(m => m.name.includes("Naive"))?.preds[idx]}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* LAB 4: CERTIFICATION ASSESSMENT */}
            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-orange-600 uppercase">Assessment Lab 4</span>
                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                      Time Series &amp; Forecasting Mastery Certification
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Validate your understanding of decomposition, stationarity tests, ACF/PACF, ARIMA/SARIMA, lag engineering, and forecast evaluation.
                    </p>
                  </div>
                  {showResults && (
                    <div className="text-right">
                      <span className="text-xs font-mono text-stone-500 uppercase">Score</span>
                      <div className="text-2xl font-black font-mono text-orange-600">
                        {quizScore} / {quizQuestions.length}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q, idx) => (
                    <div key={q.id} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-800 font-mono text-xs flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <h3 className="font-bold text-stone-900 text-sm leading-snug">{q.question}</h3>
                      </div>

                      <div className="space-y-2 pt-1">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selectedAnswers[q.id] === optIdx;
                          const isCorrect = optIdx === q.correctIndex;
                          let btnStyle = "bg-white border-stone-200 hover:bg-stone-100 text-stone-800";

                          if (showResults) {
                            if (isCorrect) btnStyle = "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold";
                            else if (isSelected && !isCorrect) btnStyle = "bg-red-50 border-red-300 text-red-950";
                          } else if (isSelected) {
                            btnStyle = "bg-orange-50 border-orange-400 text-orange-950 font-bold";
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => {
                                if (!showResults) {
                                  setSelectedAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
                                }
                              }}
                              className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${btnStyle}`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="font-mono text-stone-400 font-bold">
                                  {String.fromCharCode(65 + optIdx)}.
                                </span>
                                <span>{opt}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {showResults && (
                        <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-700 leading-relaxed space-y-1">
                          <span className="font-bold text-stone-900 block">Explanation:</span>
                          <p>{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-stone-200">
                  <button
                    onClick={() => {
                      setSelectedAnswers({});
                      setShowResults(false);
                    }}
                    className="px-5 py-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-100 font-bold text-xs cursor-pointer"
                  >
                    Reset Answers
                  </button>
                  <button
                    onClick={() => setShowResults(true)}
                    className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                  >
                    Submit &amp; Evaluate Answers
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Navigation: Previous Module / Overview */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/machine-learning/recommendation-systems")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 18 &mdash; Recommendation Systems &amp; Personalization</span>
          </button>

          <button
            onClick={() => navigate("/learning/machine-learning/probabilistic-machine-learning")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs transition-colors"
          >
            <span>Next: Module 20 &mdash; Probabilistic Machine Learning &amp; Bayesian Methods</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
