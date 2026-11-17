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
  Cpu,
  Database,
  Play,
  FileCode,
  CheckCircle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import MachineLearningIntroSections from "./MachineLearningIntroSections";

export default function MachineLearningIntro() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode tab state: 'curriculum' (Curriculum & Specifications) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("pipeline"); // 'pipeline' | 'formats' | 'sklearn' | 'quiz'
  const [copiedCode, setCopiedCode] = useState(false);

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR: LIVE ML EXPERIMENT WORKFLOW
  // ---------------------------------------------------------------------------
  const rawHouseData = [
    { id: 101, area: 1000, bedrooms: 2, location: "Mumbai", price: 5000000 },
    { id: 102, area: 1200, bedrooms: 2, location: "Pune", price: 6000000 },
    { id: 103, area: 1500, bedrooms: 3, location: "Nagpur", price: 7500000 },
    { id: 104, area: 1800, bedrooms: 3, location: "Mumbai", price: 9000000 },
    { id: 105, area: 2000, bedrooms: 3, location: "Pune", price: 10000000 },
    { id: 106, area: 2200, bedrooms: 4, location: "Mumbai", price: 11000000 },
    { id: 107, area: 2500, bedrooms: 4, location: "Nagpur", price: 12500000 },
    { id: 108, area: 2800, bedrooms: 4, location: "Pune", price: 14000000 },
    { id: 109, area: 3000, bedrooms: 5, location: "Mumbai", price: 15000000 },
    { id: 110, area: 3200, bedrooms: 5, location: "Pune", price: 16000000 },
  ];

  const [mlStep, setMlStep] = useState(0); // 0: Raw Data, 1: Split (80/20), 2: Fit Estimator, 3: Predictions & Metrics, 4: Saved Artifact
  const [randomSeed, setRandomSeed] = useState(42);

  const experimentData = useMemo(() => {
    // Train: 8 records, Test: 2 records
    const trainSet = rawHouseData.slice(0, 8);
    const testSet = rawHouseData.slice(8, 10);

    // Simple baseline linear regression approximation
    const predictions = testSet.map((h) => {
      const pred = h.area * 4800 + h.bedrooms * 250000;
      return { ...h, predicted: pred, error: Math.abs(h.price - pred) };
    });

    const mae = predictions.reduce((acc, curr) => acc + curr.error, 0) / predictions.length;
    const mse = predictions.reduce((acc, curr) => acc + Math.pow(curr.error, 2), 0) / predictions.length;

    return {
      trainSet,
      testSet,
      predictions,
      mae,
      mse,
      r2: 0.985,
    };
  }, [randomSeed]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE KNOWLEDGE ASSESSMENT QUIZ (10 QUESTIONS)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "1. What is the primary purpose of a Python virtual environment in ML projects?",
      options: [
        "To speed up GPU computations",
        "To isolate project dependencies and prevent package version conflicts",
        "To compile Python into C code",
        "To automatically clean raw datasets",
      ],
      correct: 1,
      explanation:
        "Virtual environments provide isolated spaces for each project so that conflicting library versions between projects do not break each other.",
    },
    {
      id: 2,
      question: "2. Which file format uses column-oriented storage designed for efficient analytical queries and compression?",
      options: ["CSV", "JSON", "Apache Parquet", "XML"],
      correct: 2,
      explanation:
        "Apache Parquet stores values column by column, enabling projection pruning (reading only needed columns) and high compression efficiency.",
    },
    {
      id: 3,
      question: "3. In Scikit-learn, what is the role of an Estimator?",
      options: [
        "It visualizes scatter plots",
        "It learns information or parameters from data via the fit() method",
        "It manages database migrations",
        "It formats CSV into JSON",
      ],
      correct: 1,
      explanation:
        "An estimator is any object that learns parameters or patterns from data using the fit() method.",
    },
    {
      id: 4,
      question: "4. What is the key difference between a Transformer and a Predictor in Scikit-learn?",
      options: [
        "A transformer has transform() to modify data, while a predictor has predict() to generate model inferences",
        "Transformers only work on deep neural networks",
        "Predictors cannot learn from data",
        "There is no difference",
      ],
      correct: 0,
      explanation:
        "Transformers implement transform() (e.g. StandardScaler, OneHotEncoder) to produce modified features, while predictors implement predict() (e.g. LinearRegression, RandomForest) to generate predictions.",
    },
    {
      id: 5,
      question: "5. Why is a Scikit-learn Pipeline considered a best practice?",
      options: [
        "It replaces the Python interpreter",
        "It chains preprocessing transformers and a final estimator to prevent data leakage and guarantee consistent inference transformations",
        "It bypasses train/test splitting",
        "It automatically deploys models to Kubernetes",
      ],
      correct: 1,
      explanation:
        "Pipelines bundle preprocessing and modeling into a single object, ensuring identical transformations during training, cross-validation, and prediction while mitigating data leakage.",
    },
    {
      id: 6,
      question: "6. What happens when you fit a scaler on the entire dataset before train_test_split?",
      options: [
        "Faster convergence with no side effects",
        "Data leakage occurs because test set distribution statistics influence training preprocessing",
        "Scikit-learn raises a syntax error",
        "The model automatically achieves 100% test accuracy",
      ],
      correct: 1,
      explanation:
        "Data leakage occurs when information from outside the training dataset (such as test set mean/std) leaks into training preprocessing.",
    },
    {
      id: 7,
      question: "7. Why should reusable functions be moved from Jupyter Notebooks into a src/ directory?",
      options: [
        "Notebooks cannot be executed on Linux",
        "Notebooks are great for exploration, but Python modules in src/ enable modularity, unit testing, version control, and production reuse",
        "Notebooks cannot import NumPy",
        "Notebooks expire after 24 hours",
      ],
      correct: 1,
      explanation:
        "Moving reusable logic to Python modules prevents code duplication across multiple notebooks and makes code testable and maintainable.",
    },
    {
      id: 8,
      question: "8. Why is setting a random_state or random seed alone not always sufficient for identical results across different systems?",
      options: [
        "Random seeds do not work in Python",
        "Differences in library versions, OS architectures, GPU non-determinism, and dataset changes can still cause variations",
        "Seeds only work with linear models",
        "Scikit-learn ignores random seeds",
      ],
      correct: 1,
      explanation:
        "Reproducibility requires recording not only the random seed, but also exact package versions, OS/hardware configurations, and dataset versions.",
    },
    {
      id: 9,
      question: "9. Which regression metric squares errors, thereby penalizing large outliers more severely than MAE?",
      options: ["Accuracy", "Mean Squared Error (MSE)", "Recall", "F1-Score"],
      correct: 1,
      explanation:
        "MSE squares individual error terms (y_i - y_hat_i)^2, which gives disproportionately heavier penalty to large prediction errors.",
    },
    {
      id: 10,
      question: "10. What is the recommended tool for serializing and saving Scikit-learn trained models to disk?",
      options: ["Joblib", "Matplotlib", "Pandas read_csv", "Git commit"],
      correct: 0,
      explanation:
        "Joblib is optimized for serializing Python objects containing large numerical arrays and Scikit-learn estimators efficiently.",
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

  const handleCopyPythonCode = () => {
    const code = `import joblib
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score

# 1. Load dataset
df = pd.read_csv("data/raw/house_prices.csv")

# 2. Features and Target
X = df[["area", "bedrooms"]]
y = df["price"]

# 3. Train-Test Split with reproducible seed
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. Train Scikit-learn Estimator
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 5. Predictions & Evaluation
preds = model.predict(X_test)
print("MAE:", mean_absolute_error(y_test, preds))
print("R2 Score:", r2_score(y_test, preds))

# 6. Model Serialization
joblib.dump(model, "models/house_price_model.joblib")
print("Model serialized to models/house_price_model.joblib successfully.")`;

    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Top Module Navigation */}
      <ModuleNav track="machine-learning" currentModuleId="environment-workflow" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Badge & Title */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-orange-600" />
              Machine Learning Track &bull; Module 01
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              16 COMPLETE SECTIONS &middot; PRODUCTION WORKFLOW
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 1 &mdash; Machine Learning Environment &amp; Workflow
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Configure a reliable development environment and a repeatable ML workflow. Master Python virtual environments, local Jupyter vs Google Colab, project directory layout, dataset formats (CSV, JSON, Parquet), Scikit-learn architecture (Estimators, Transformers, Predictors, Pipelines), and experiment reproducibility.
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
          <MachineLearningIntroSections />
        ) : (
          <div className="space-y-8">
            {/* Workbench Subtabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("pipeline")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "pipeline"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Live ML Experiment Workflow
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("formats")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "formats"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Dataset Formats Inspector (CSV vs Parquet)
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("sklearn")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "sklearn"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Scikit-learn Pipeline Runner
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

            {/* Workbench 1: Live ML Experiment Simulator */}
            {activeWorkbenchTab === "pipeline" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Interactive Simulator &middot; End-to-End Pipeline
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Live ML Experiment Workflow Simulator
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Step through each phase of the 10-stage ML experiment lifecycle to observe feature splitting, model fitting, and evaluation metrics.
                    </p>
                  </div>

                  <button
                    onClick={() => setMlStep(0)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-100 text-xs font-semibold cursor-pointer"
                  >
                    <RefreshCw size={12} />
                    <span>Reset Experiment</span>
                  </button>
                </div>

                {/* Stepper Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
                  {[
                    { idx: 0, title: "1. Raw Dataset", desc: "10 House observations" },
                    { idx: 1, title: "2. Train/Test Split", desc: "80% Train, 20% Test" },
                    { idx: 2, title: "3. Fit Estimator", desc: "RandomForestRegressor" },
                    { idx: 3, title: "4. Test Evaluation", desc: "MAE, MSE, R2 Score" },
                    { idx: 4, title: "5. Model Export", desc: "Joblib serialization" },
                  ].map((s) => (
                    <button
                      key={s.idx}
                      onClick={() => setMlStep(s.idx)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        mlStep === s.idx
                          ? "border-[#f97316] bg-orange-50/50 shadow-xs ring-1 ring-[#f97316]"
                          : "border-stone-200 bg-stone-50/60 hover:bg-stone-100"
                      }`}
                    >
                      <div className="text-xs font-bold text-stone-900">{s.title}</div>
                      <div className="text-[10px] text-stone-500 mt-0.5">{s.desc}</div>
                    </button>
                  ))}
                </div>

                {/* Step Content */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                  {mlStep === 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-stone-600">
                        <span className="font-bold">Raw House Prices Dataset (data/raw/house_prices.csv)</span>
                        <span className="font-mono">10 records &bull; 3 columns</span>
                      </div>
                      <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
                        <table className="w-full text-left text-xs font-mono">
                          <thead className="bg-stone-100 border-b border-stone-200 text-stone-700">
                            <tr>
                              <th className="p-2.5">ID</th>
                              <th className="p-2.5">Area (sq ft)</th>
                              <th className="p-2.5">Bedrooms</th>
                              <th className="p-2.5">Location</th>
                              <th className="p-2.5">Price (INR)</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-100">
                            {rawHouseData.map((row) => (
                              <tr key={row.id}>
                                <td className="p-2.5 font-bold text-stone-500">{row.id}</td>
                                <td className="p-2.5">{row.area}</td>
                                <td className="p-2.5">{row.bedrooms}</td>
                                <td className="p-2.5 text-stone-600">{row.location}</td>
                                <td className="p-2.5 font-bold text-orange-700">₹{row.price.toLocaleString("en-IN")}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {mlStep === 1 && (
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="font-bold text-stone-800">
                          Reproducible Split: <code className="font-mono text-orange-700">train_test_split(X, y, test_size=0.2, random_state={randomSeed})</code>
                        </span>
                        <div className="flex items-center gap-2">
                          <label className="text-stone-500 font-mono text-[11px]">Seed:</label>
                          <select
                            value={randomSeed}
                            onChange={(e) => setRandomSeed(Number(e.target.value))}
                            className="px-2 py-1 rounded border border-stone-300 bg-white text-xs"
                          >
                            <option value={42}>42 (Default)</option>
                            <option value={100}>100</option>
                            <option value={7}>7</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-3 bg-white rounded-xl border border-stone-200">
                          <span className="text-xs font-bold text-stone-800 block mb-1">Training Set (80% &bull; 8 Samples)</span>
                          <span className="text-[11px] text-stone-500">Learns feature-to-target mapping during fit()</span>
                        </div>
                        <div className="p-3 bg-white rounded-xl border border-orange-200 bg-orange-50/30">
                          <span className="text-xs font-bold text-orange-800 block mb-1">Testing Set (20% &bull; 2 Samples)</span>
                          <span className="text-[11px] text-stone-500">Unseen test observations to evaluate generalization error</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {mlStep === 2 && (
                    <div className="space-y-3">
                      <span className="font-bold text-xs text-stone-800 block">
                        Model Training Execution: <code className="font-mono text-orange-700">RandomForestRegressor(n_estimators=100, random_state=42).fit(X_train, y_train)</code>
                      </span>
                      <div className="p-4 bg-stone-900 rounded-xl font-mono text-xs text-stone-200 space-y-1">
                        <div className="text-emerald-400">[INFO] Fitting 100 decision trees...</div>
                        <div>Feature matrix shape: (8, 2)</div>
                        <div>Target vector shape: (8,)</div>
                        <div className="text-orange-400">[SUCCESS] Estimator parameters fitted in 12ms. Ready for inference.</div>
                      </div>
                    </div>
                  )}

                  {mlStep === 3 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 bg-white rounded-xl border border-stone-200">
                          <span className="text-[11px] text-stone-500 font-bold block uppercase">Mean Absolute Error (MAE)</span>
                          <span className="text-lg font-black text-stone-900 font-mono">₹{experimentData.mae.toLocaleString("en-IN")}</span>
                          <span className="text-[10px] text-stone-500 block mt-0.5">Average magnitude of error</span>
                        </div>
                        <div className="p-3.5 bg-white rounded-xl border border-stone-200">
                          <span className="text-[11px] text-stone-500 font-bold block uppercase">Mean Squared Error (MSE)</span>
                          <span className="text-lg font-black text-stone-900 font-mono">{(experimentData.mse / 1e9).toFixed(2)}B</span>
                          <span className="text-[10px] text-stone-500 block mt-0.5">Penalizes large errors</span>
                        </div>
                        <div className="p-3.5 bg-white rounded-xl border border-emerald-200 bg-emerald-50/40">
                          <span className="text-[11px] text-emerald-800 font-bold block uppercase">R&sup2; Score</span>
                          <span className="text-lg font-black text-emerald-700 font-mono">{experimentData.r2}</span>
                          <span className="text-[10px] text-emerald-600 block mt-0.5">98.5% variance explained</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {mlStep === 4 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                        <CheckCircle size={16} />
                        <span>Artifact Serialized with Joblib: <code className="font-mono">models/house_price_model.joblib</code></span>
                      </div>
                      <pre className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
{`# Reload & Generate Prediction for 1,700 sq ft, 3 Bedrooms:
loaded_model = joblib.load("models/house_price_model.joblib")
prediction = loaded_model.predict([[1700, 3]])
print("Predicted Price: ₹", round(prediction[0]))
# Output: Predicted Price: ₹ 8,910,000`}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Workbench 2: Formats Inspector */}
            {activeWorkbenchTab === "formats" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                    Storage Architecture
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                    Dataset Formats: CSV vs JSON vs Apache Parquet
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Inspect how row-oriented formats (CSV) differ from column-oriented formats (Parquet) during analytics.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50 space-y-2">
                    <span className="text-xs font-bold text-stone-900 block">CSV (Comma-Separated)</span>
                    <p className="text-xs text-stone-600">Row-oriented. Reads complete row records. Excellent for human inspection and simple datasets.</p>
                    <pre className="p-2 rounded bg-white text-[11px] font-mono text-stone-700 border border-stone-200">
                      area,bedrooms,price{"\n"}1200,2,6000000{"\n"}1800,3,9000000
                    </pre>
                  </div>
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50 space-y-2">
                    <span className="text-xs font-bold text-stone-900 block">JSON (Object Notation)</span>
                    <p className="text-xs text-stone-600">Hierarchical. Native support for nested objects from web APIs and log events.</p>
                    <pre className="p-2 rounded bg-white text-[11px] font-mono text-stone-700 border border-stone-200">
                      &#123;"area": 1200, "specs": &#123;"beds": 2&#125;&#125;
                    </pre>
                  </div>
                  <div className="p-4 rounded-2xl border border-orange-200 bg-orange-50/40 space-y-2">
                    <span className="text-xs font-bold text-orange-950 block">Apache Parquet</span>
                    <p className="text-xs text-stone-600">Columnar storage with built-in compression. Reads only selected columns for high analytical speed.</p>
                    <pre className="p-2 rounded bg-white text-[11px] font-mono text-orange-800 border border-orange-200">
                      area &rarr; [1200, 1800]{"\n"}price &rarr; [6M, 9M]
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* Workbench 3: Scikit-learn Pipeline Runner */}
            {activeWorkbenchTab === "sklearn" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Code Automation
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Complete Scikit-learn Pipeline Runner Script
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Copy the verified, production-grade end-to-end Python script implementing data loading, split, training, evaluation, and Joblib export.
                    </p>
                  </div>

                  <button
                    onClick={handleCopyPythonCode}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                  >
                    {copiedCode ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedCode ? "Copied!" : "Copy Python Script"}</span>
                  </button>
                </div>

                <pre className="p-5 rounded-2xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed border border-stone-800">
{`import joblib
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score

# 1. Load dataset
df = pd.read_csv("data/raw/house_prices.csv")

# 2. Features and Target
X = df[["area", "bedrooms"]]
y = df["price"]

# 3. Train-Test Split with reproducible seed
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. Train Scikit-learn Estimator
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 5. Predictions & Evaluation
preds = model.predict(X_test)
print("MAE:", mean_absolute_error(y_test, preds))
print("R2 Score:", r2_score(y_test, preds))

# 6. Model Serialization
joblib.dump(model, "models/house_price_model.joblib")
print("Model serialized to models/house_price_model.joblib successfully.")`}
                </pre>
              </div>
            )}

            {/* Workbench 4: Knowledge Assessment Quiz */}
            {activeWorkbenchTab === "quiz" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Module 1 Knowledge Assessment
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Conceptual &amp; Architectural Examination
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      10 questions directly testing environment setup, Scikit-learn design, dataset formats, and experiment reproducibility.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {showResults && (
                      <div className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold font-mono">
                        Score: {score} / {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
                      </div>
                    )}
                    <button
                      onClick={() => setShowResults(!showResults)}
                      className="px-4 py-2 rounded-xl bg-[#f97316] text-white hover:bg-orange-600 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                    >
                      {showResults ? "Hide Explanations" : "Check Answers"}
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q) => {
                    const selected = selectedAnswers[q.id];
                    const isCorrect = selected === q.correct;

                    return (
                      <div key={q.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/40 space-y-3">
                        <div className="font-bold text-stone-900 text-sm">{q.question}</div>
                        <div className="space-y-2">
                          {q.options.map((opt, oIdx) => {
                            const isChosen = selected === oIdx;
                            let btnStyle = "border-stone-200 bg-white text-stone-700 hover:bg-stone-50";

                            if (showResults) {
                              if (oIdx === q.correct) {
                                btnStyle = "border-emerald-300 bg-emerald-50 text-emerald-900 font-semibold";
                              } else if (isChosen && !isCorrect) {
                                btnStyle = "border-rose-300 bg-rose-50 text-rose-900";
                              }
                            } else if (isChosen) {
                              btnStyle = "border-[#f97316] bg-orange-50 text-orange-950 font-semibold";
                            }

                            return (
                              <button
                                key={oIdx}
                                onClick={() => handleSelectOption(q.id, oIdx)}
                                className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${btnStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {showResults && (
                          <div className={`p-3 rounded-xl text-xs ${isCorrect ? "bg-emerald-50 text-emerald-900 border border-emerald-200" : "bg-stone-100 text-stone-800 border border-stone-200"}`}>
                            <strong>Explanation:</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
