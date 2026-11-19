import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  RefreshCw,
  Terminal,
  BookOpen,
  HelpCircle,
  Copy,
  Check,
  ChevronRight,
  Layers,
  TrendingUp,
  Activity,
  Sliders,
  Filter,
  Eye,
  FileCode,
  Table,
  Target,
  Calculator,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import MachineLearningRegressionSections from "./MachineLearningRegressionSections";

export default function MachineLearningRegression() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("live_regression"); // 'live_regression' | 'cost_metrics' | 'diagnostics' | 'quiz'
  const [copiedCode, setCopiedCode] = useState(false);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 1: LIVE OLS REGRESSION PLAYGROUND
  // ---------------------------------------------------------------------------
  const [slope, setSlope] = useState(1.5);
  const [intercept, setIntercept] = useState(0.3);

  const samplePoints = [
    { x: 1, y: 2.0 },
    { x: 2, y: 3.0 },
    { x: 3, y: 5.0 },
    { x: 4, y: 6.5 },
    { x: 5, y: 8.0 },
  ];

  const olsCalculations = useMemo(() => {
    let totalRss = 0;
    let totalAbsError = 0;
    const yMean = 4.9; // (2+3+5+6.5+8)/5 = 24.5 / 5 = 4.9
    let totalVariance = 0;

    const rows = samplePoints.map((pt) => {
      const yPred = intercept + slope * pt.x;
      const res = pt.y - yPred;
      totalRss += res * res;
      totalAbsError += Math.abs(res);
      totalVariance += (pt.y - yMean) * (pt.y - yMean);
      return { ...pt, yPred: Number(yPred.toFixed(2)), res: Number(res.toFixed(2)) };
    });

    const mse = totalRss / samplePoints.length;
    const mae = totalAbsError / samplePoints.length;
    const r2 = 1 - totalRss / totalVariance;

    return {
      rows,
      rss: Number(totalRss.toFixed(2)),
      mse: Number(mse.toFixed(2)),
      mae: Number(mae.toFixed(2)),
      r2: Number(r2.toFixed(3)),
    };
  }, [slope, intercept]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 2: COST METRICS COMPARATOR
  // ---------------------------------------------------------------------------
  const [errorScenario, setErrorScenario] = useState("standard"); // 'standard' | 'outlier'

  const costComparison = useMemo(() => {
    const errors = errorScenario === "standard" ? [-2, 1, -1, 2, 1] : [-2, 1, -1, 2, 15]; // Planted 15 outlier
    const n = errors.length;

    const mae = errors.reduce((acc, e) => acc + Math.abs(e), 0) / n;
    const mse = errors.reduce((acc, e) => acc + e * e, 0) / n;
    const rmse = Math.sqrt(mse);

    return {
      errors,
      mae: Number(mae.toFixed(2)),
      mse: Number(mse.toFixed(2)),
      rmse: Number(rmse.toFixed(2)),
    };
  }, [errorScenario]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 3: RESIDUAL DIAGNOSTICS INSPECTOR
  // ---------------------------------------------------------------------------
  const [residualPattern, setResidualPattern] = useState("homoscedastic"); // 'homoscedastic' | 'heteroscedastic' | 'curved'

  const diagnosticDetails = useMemo(() => {
    if (residualPattern === "homoscedastic") {
      return {
        title: "Random Patternless Scatter (Homoscedastic)",
        verdict: "Valid Gauss-Markov Condition",
        badge: "bg-emerald-100 text-emerald-800",
        desc: "Errors are symmetrically and uniformly distributed around 0 with constant variance across all fitted values.",
        action: "Model is well-specified. Proceed with standard inference and confidence intervals.",
      };
    } else if (residualPattern === "heteroscedastic") {
      return {
        title: "Funnel Shape (Heteroscedasticity)",
        verdict: "Violation: Non-Constant Error Variance",
        badge: "bg-amber-100 text-amber-800",
        desc: "Error spread increases systematically with fitted values. Common in income, housing prices, and financial volatility.",
        action: "Apply log-transform (np.log1p) on target, use Weighted Least Squares, or compute robust standard errors (HC3).",
      };
    } else {
      return {
        title: "U-Shaped / Inverted-U Curve",
        verdict: "Violation: Unmodeled Non-Linearity",
        badge: "bg-rose-100 text-rose-800",
        desc: "Systematic curvature indicates that the true relationship is non-linear and cannot be captured by a simple straight line.",
        action: "Add polynomial features (e.g. x^2, x^3), spline basis features, or switch to non-linear tree models.",
      };
    }
  }, [residualPattern]);

  // ---------------------------------------------------------------------------
  // KNOWLEDGE ASSESSMENT QUIZ (10 QUESTIONS)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "1. What type of problem does linear regression solve?",
      options: ["Image classification", "Continuous numerical prediction", "Clustering", "Dimensionality reduction"],
      correct: 1,
      explanation:
        "Linear regression is a supervised machine learning algorithm designed to predict continuous numerical targets from input features.",
    },
    {
      id: 2,
      question: "2. How many input features are used in simple linear regression?",
      options: ["Exactly one", "Two or more", "Zero", "Exactly five"],
      correct: 0,
      explanation:
        "Simple linear regression models the relationship between exactly one independent predictor feature (x) and one dependent target (y).",
    },
    {
      id: 3,
      question: "3. What does the slope coefficient represent in a linear regression model?",
      options: [
        "The total number of observations in the dataset",
        "The expected change in the predicted target for a one-unit increase in the feature",
        "The total prediction error",
        "The model training time in seconds",
      ],
      correct: 1,
      explanation:
        "The slope (b1) quantifies the rate of change: for every one-unit increase in the predictor, the target is expected to change by b1 units.",
    },
    {
      id: 4,
      question: "4. What is the primary mathematical objective of Ordinary Least Squares (OLS)?",
      options: [
        "Maximize every individual residual",
        "Minimize the sum of squared residuals (RSS)",
        "Minimize the number of observations",
        "Maximize the total feature count",
      ],
      correct: 1,
      explanation:
        "OLS seeks the unique parameter vector beta that minimizes the Residual Sum of Squares: RSS = sum((y_i - y_hat_i)^2).",
    },
    {
      id: 5,
      question: "5. How is a mathematical residual calculated for observation i?",
      options: ["Predicted - Mean", "Actual - Predicted (y_i - y_hat_i)", "Actual + Predicted", "Mean - Actual"],
      correct: 1,
      explanation:
        "A residual is defined as the signed difference between the true observed target and the model prediction: e_i = y_i - y_hat_i.",
    },
    {
      id: 6,
      question: "6. Which regression metric penalizes large prediction errors more severely?",
      options: ["Mean Absolute Error (MAE)", "Mean Squared Error (MSE)", "Median", "Pearson Correlation"],
      correct: 1,
      explanation:
        "Because MSE squares each deviation, an error of 10 receives a penalty of 100, whereas an error of 2 receives a penalty of 4, penalizing outliers heavily.",
    },
    {
      id: 7,
      question: "7. What does a negative regression coefficient indicate?",
      options: [
        "The model predicts a decrease in target as the feature increases, holding other features constant",
        "The feature must immediately be removed from the dataset",
        "The regression model is mathematically invalid",
        "The target variable is binary categorical",
      ],
      correct: 0,
      explanation:
        "A negative slope indicates an inverse conditional association: increasing the predictor leads to a lower predicted target value.",
    },
    {
      id: 8,
      question: "8. What does heteroscedasticity mean in regression diagnostics?",
      options: [
        "The independent features are completely identical",
        "Residual variance is non-constant across fitted values",
        "All model residuals equal exactly zero",
        "The model contains no intercept parameter",
      ],
      correct: 1,
      explanation:
        "Heteroscedasticity occurs when error dispersion changes systematically across predictor levels, typically forming a funnel-shaped pattern.",
    },
    {
      id: 9,
      question: "9. Which diagnostic plot is primarily used to inspect residual patterns and homoscedasticity?",
      options: ["Pie chart", "Residuals vs Fitted plot", "Word cloud", "Network graph"],
      correct: 1,
      explanation:
        "Plotting residuals against fitted predictions displays whether error dispersion is random and constant, or whether non-linear curves exist.",
    },
    {
      id: 10,
      question: "10. Why should a regression model be evaluated on a held-out test dataset?",
      options: [
        "To artificially increase the number of training samples",
        "To obtain an unbiased estimate of generalization performance on unseen observations",
        "To force the R-squared score to equal 1.0",
        "To eliminate all model coefficients",
      ],
      correct: 1,
      explanation:
        "Evaluating on unseen test data detects overfitting and ensures the model generalizes accurately to new real-world inputs.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (qId, optionIdx) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const score = useMemo(() => {
    let s = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) s++;
    });
    return s;
  }, [selectedAnswers]);

  const handleCopyCode = () => {
    const code = `import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LinearRegression
from sklearn.dummy import DummyRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import joblib

# 1. Dataset Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 2. Preprocessing Pipeline
num_features = ["Area", "Bedrooms", "Age", "Distance_to_Center"]
cat_features = ["Location"]

preprocessor = ColumnTransformer([
    ("num", SimpleImputer(strategy="median"), num_features),
    ("cat", Pipeline([
        ("imputer", SimpleImputer(strategy="most_frequent")),
        ("encoder", OneHotEncoder(drop="first", handle_unknown="ignore"))
    ]), cat_features)
])

# 3. Model Pipeline
model = Pipeline([
    ("preprocessor", preprocessor),
    ("regressor", LinearRegression())
])

# 4. Leakage-Free Training
model.fit(X_train, y_train)

# 5. Prediction & Evaluation
y_pred = model.predict(X_test)
mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
r2 = r2_score(y_test, y_pred)

print(f"MAE: ₹{mae:,.2f} | RMSE: ₹{rmse:,.2f} | R²: {r2:.4f}")

# 6. Save Pipeline
joblib.dump(model, "housing_price_model.pkl")`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Top Module Navigation */}
      <ModuleNav track="machine-learning" currentModuleId="regression" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Badge & Title */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-orange-600" />
              Machine Learning Track &bull; Module 05
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              22 COMPLETE SECTIONS &middot; SUPERVISED REGRESSION
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 5 &mdash; Regression Analysis &amp; Linear Models
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Master the mathematical core of supervised numerical estimation. Learn Ordinary Least Squares (OLS), the closed-form Normal Equation, simple and multiple linear models, conditional coefficient interpretation, cost functions (MAE, MSE, RMSE, R²), residual diagnostics, the 6 Gauss-Markov assumptions, Scikit-learn pipelines, and Statsmodels inference.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="mt-8 flex items-center gap-3 border-t border-stone-200 pt-6">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "curriculum"
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <BookOpen size={16} />
              <span>Full Curriculum Specification</span>
            </button>

            <button
              onClick={() => setActiveTab("workbench")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "workbench"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <Sparkles size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        {activeTab === "curriculum" ? (
          <MachineLearningRegressionSections />
        ) : (
          <div className="space-y-8">
            {/* Workbench Subtabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("live_regression")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "live_regression"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. OLS Parameter Playground
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("cost_metrics")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "cost_metrics"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Cost Function Comparator
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("diagnostics")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "diagnostics"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Residual Diagnostics
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                4. Knowledge Assessment (10 Qs)
              </button>
            </div>

            {/* TAB 1: OLS PLAYGROUND */}
            {activeWorkbenchTab === "live_regression" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <TrendingUp size={20} className="text-orange-600" />
                    Interactive OLS Parameter Tuning Playground
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Adjust the slope (b₁) and intercept (b₀) sliders to see how Ordinary Least Squares optimizes parameters to minimize the Residual Sum of Squares (RSS).
                  </p>
                </div>

                {/* Slider Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <div>
                    <div className="flex justify-between font-bold text-stone-900 mb-1">
                      <span>Slope (b₁):</span>
                      <span className="font-mono text-orange-700">{slope}</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="2.5"
                      step="0.05"
                      value={slope}
                      onChange={(e) => setSlope(parseFloat(e.target.value))}
                      className="w-full cursor-pointer accent-orange-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-stone-900 mb-1">
                      <span>Intercept (b₀):</span>
                      <span className="font-mono text-orange-700">{intercept}</span>
                    </div>
                    <input
                      type="range"
                      min="-1.0"
                      max="2.5"
                      step="0.05"
                      value={intercept}
                      onChange={(e) => setIntercept(parseFloat(e.target.value))}
                      className="w-full cursor-pointer accent-orange-600"
                    />
                  </div>
                </div>

                {/* Auto OLS Button */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-stone-500">Current Equation: ŷ = {intercept} + {slope}x</span>
                  <button
                    onClick={() => {
                      setSlope(1.52);
                      setIntercept(0.34);
                    }}
                    className="px-3 py-1.5 rounded-lg border border-orange-200 bg-orange-50 text-orange-800 text-xs font-bold hover:bg-orange-100 cursor-pointer"
                  >
                    Snap to Analytical OLS Minimum (b₁ = 1.52, b₀ = 0.34)
                  </button>
                </div>

                {/* Table of Points and Residuals */}
                <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                      <tr>
                        <th className="p-3">Observation (x)</th>
                        <th className="p-3">Actual (y)</th>
                        <th className="p-3">Predicted (ŷ)</th>
                        <th className="p-3">Residual (y - ŷ)</th>
                        <th className="p-3 text-right">Squared Residual (e²)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700">
                      {olsCalculations.rows.map((r, i) => (
                        <tr key={i} className="hover:bg-stone-50">
                          <td className="p-3 font-bold">{r.x}</td>
                          <td className="p-3">{r.y.toFixed(1)}</td>
                          <td className="p-3">{r.yPred.toFixed(2)}</td>
                          <td className="p-3">
                            <span className={r.res > 0 ? "text-emerald-700 font-bold" : "text-rose-700 font-bold"}>
                              {r.res > 0 ? `+${r.res.toFixed(2)}` : r.res.toFixed(2)}
                            </span>
                          </td>
                          <td className="p-3 text-right font-bold">{(r.res * r.res).toFixed(3)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                    <span className="text-stone-500 block mb-1">Residual Sum of Squares</span>
                    <span className="font-bold text-orange-700 text-sm">RSS: {olsCalculations.rss}</span>
                  </div>
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                    <span className="text-stone-500 block mb-1">Mean Squared Error</span>
                    <span className="font-bold text-stone-900 text-sm">MSE: {olsCalculations.mse}</span>
                  </div>
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                    <span className="text-stone-500 block mb-1">Mean Absolute Error</span>
                    <span className="font-bold text-stone-900 text-sm">MAE: {olsCalculations.mae}</span>
                  </div>
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                    <span className="text-stone-500 block mb-1">R-squared</span>
                    <span className="font-bold text-emerald-700 text-sm">R²: {olsCalculations.r2}</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: COST METRICS */}
            {activeWorkbenchTab === "cost_metrics" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <Calculator size={20} className="text-orange-600" />
                    Cost Function Behavior: MAE vs MSE vs RMSE
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Compare how squared losses (MSE, RMSE) react to single extreme outlier mistakes versus linear absolute losses (MAE).
                  </p>
                </div>

                {/* Error Scenario Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setErrorScenario("standard")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      errorScenario === "standard" ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    Scenario A: Balanced Errors [-2, 1, -1, 2, 1]
                  </button>
                  <button
                    onClick={() => setErrorScenario("outlier")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      errorScenario === "outlier" ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    Scenario B: Severe Outlier Error [-2, 1, -1, 2, 15]
                  </button>
                </div>

                {/* Metric Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-500 block mb-1">MAE (Linear Penalty)</span>
                    <span className="font-bold text-stone-900 text-xl">{costComparison.mae}</span>
                    <p className="text-[11px] font-sans text-stone-600 mt-2">
                      Averages absolute errors directly. Less sensitive to single massive deviations.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-500 block mb-1">MSE (Quadratic Penalty)</span>
                    <span className="font-bold text-orange-700 text-xl">{costComparison.mse}</span>
                    <p className="text-[11px] font-sans text-stone-600 mt-2">
                      Squares errors. The outlier of 15 contributes 225 to the total error sum!
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-500 block mb-1">RMSE (Target Units)</span>
                    <span className="font-bold text-stone-900 text-xl">{costComparison.rmse}</span>
                    <p className="text-[11px] font-sans text-stone-600 mt-2">
                      Preserves quadratic sensitivity while returning to original target units.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: RESIDUAL DIAGNOSTICS */}
            {activeWorkbenchTab === "diagnostics" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <Activity size={20} className="text-orange-600" />
                    Residual Diagnostic Pattern Inspector
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Select a residual pattern to diagnose whether regression assumptions hold or if corrective feature engineering is required.
                  </p>
                </div>

                {/* Pattern Buttons */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "homoscedastic", label: "1. Random Scatter (Homoscedastic)" },
                    { id: "heteroscedastic", label: "2. Funnel Pattern (Heteroscedastic)" },
                    { id: "curved", label: "3. U-Shaped Curve (Non-Linearity)" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setResidualPattern(p.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        residualPattern === p.id ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                {/* Pattern Visual Display Card */}
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-stone-900 text-base">{diagnosticDetails.title}</h4>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${diagnosticDetails.badge}`}>
                      {diagnosticDetails.verdict}
                    </span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">{diagnosticDetails.desc}</p>
                  <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs">
                    <strong className="text-orange-700 block mb-1">Prescribed Action:</strong>
                    <span className="text-stone-700">{diagnosticDetails.action}</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: QUIZ ASSESSMENT */}
            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                      <HelpCircle size={20} className="text-orange-600" />
                      Module 5 Knowledge Assessment
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Test your understanding of OLS, cost metrics (MAE/MSE/R²), Gauss-Markov assumptions, and residual diagnostics.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-stone-500">
                      Answered: {Object.keys(selectedAnswers).length} / {quizQuestions.length}
                    </span>
                    {showResults && (
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 font-mono text-xs font-bold rounded-lg">
                        Score: {score} / {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q) => {
                    const isAnswered = selectedAnswers[q.id] !== undefined;
                    const isCorrect = selectedAnswers[q.id] === q.correct;

                    return (
                      <div key={q.id} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                        <h4 className="text-sm font-bold text-stone-900">{q.question}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = selectedAnswers[q.id] === optIdx;
                            let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";

                            if (showResults) {
                              if (optIdx === q.correct) {
                                btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-900 font-bold";
                              } else if (isSelected) {
                                btnStyle = "bg-rose-100 border-rose-400 text-rose-900";
                              }
                            } else if (isSelected) {
                              btnStyle = "bg-stone-900 text-white border-stone-900";
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleSelectOption(q.id, optIdx)}
                                className={`p-3 rounded-xl border text-xs text-left transition-all cursor-pointer font-medium ${btnStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {showResults && (
                          <div className={`p-3 rounded-xl text-xs ${isCorrect ? "bg-emerald-50 text-emerald-900" : "bg-rose-50 text-rose-900"}`}>
                            <strong>{isCorrect ? "Correct!" : "Incorrect."}</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                  <button
                    onClick={() => setShowResults(!showResults)}
                    className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
                  >
                    {showResults ? "Hide Evaluation" : "Submit Assessment"}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedAnswers({});
                      setShowResults(false);
                    }}
                    className="text-xs font-semibold text-stone-500 hover:text-stone-800 cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Nav: Previous Module / Next Step */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/machine-learning/eda")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 4 &mdash; Exploratory Data Analysis</span>
          </button>

          <button
            onClick={() => navigate("/learning/machine-learning")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <span>Return to Machine Learning Overview</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
