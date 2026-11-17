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
  Database,
  Play,
  FileCode,
  Table,
  Filter,
  GitMerge,
  Sliders,
  CheckCircle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import MachineLearningPandasSections from "./MachineLearningPandasSections";

export default function MachineLearningPandas() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("pipeline"); // 'pipeline' | 'joins' | 'iqr' | 'quiz'
  const [copiedCode, setCopiedCode] = useState(false);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 1: E-COMMERCE PIPELINE SIMULATOR
  // ---------------------------------------------------------------------------
  const [cleanedCities, setCleanedCities] = useState(false);
  const [dedupedOrders, setDedupedOrders] = useState(false);
  const [imputedAges, setImputedAges] = useState(false);
  const [computedRevenue, setComputedRevenue] = useState(false);
  const [cityFilter, setCityFilter] = useState("All");

  const rawRows = [
    { id: "O001", user: "Amit", city: "Mumbai", age: 25, prod: "Laptop", qty: 1, price: 60000 },
    { id: "O002", user: "Neha", city: "Pune", age: 30, prod: "Phone", qty: 2, price: 20000 },
    { id: "O003", user: "Rahul", city: "mumbai", age: 28, prod: "Tablet", qty: 3, price: 15000 },
    { id: "O004", user: "Priya", city: "Nagpur", age: null, prod: "Laptop", qty: 1, price: 60000 },
    { id: "O005", user: "Karan", city: "Pune", age: 35, prod: "Phone", qty: 2, price: 20000 },
    { id: "O006", user: "Sneha", city: "Mumbai", age: 26, prod: "Laptop", qty: 1, price: 60000 },
    { id: "O006", user: "Sneha", city: "Mumbai", age: 26, prod: "Laptop", qty: 1, price: 60000 }, // Duplicate
    { id: "O007", user: "Arjun", city: "Nagpur", age: 150, prod: "Tablet", qty: 4, price: 15000 }, // Invalid Age
  ];

  const processedData = useMemo(() => {
    let rows = rawRows.map((r) => ({ ...r }));

    // 1. Deduplication
    if (dedupedOrders) {
      const seen = new Set();
      rows = rows.filter((r) => {
        if (seen.has(r.id)) return false;
        seen.add(r.id);
        return true;
      });
    }

    // 2. City Standardization
    if (cleanedCities) {
      rows = rows.map((r) => ({
        ...r,
        city: r.city.trim().charAt(0).toUpperCase() + r.city.trim().slice(1).toLowerCase(),
      }));
    }

    // 3. Age Imputation (Median = 28)
    if (imputedAges) {
      rows = rows.map((r) => {
        let validAge = r.age;
        if (validAge === null || validAge > 120 || validAge < 0) {
          validAge = 28; // Imputed median
        }
        return { ...r, age: validAge };
      });
    }

    // 4. Computed Revenue
    if (computedRevenue) {
      rows = rows.map((r) => ({
        ...r,
        revenue: r.qty * r.price,
      }));
    }

    // Filter
    if (cityFilter !== "All") {
      rows = rows.filter((r) => r.city.toLowerCase() === cityFilter.toLowerCase());
    }

    return rows;
  }, [dedupedOrders, cleanedCities, imputedAges, computedRevenue, cityFilter]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 2: RELATIONAL MERGE SIMULATOR
  // ---------------------------------------------------------------------------
  const [joinType, setJoinType] = useState("inner");

  const ordersTable = [
    { orderId: "O001", custId: "C001", amount: 5000 },
    { orderId: "O002", custId: "C002", amount: 8000 },
    { orderId: "O003", custId: "C003", amount: 3000 },
  ];

  const customersTable = [
    { custId: "C001", name: "Amit", city: "Mumbai" },
    { custId: "C002", name: "Neha", city: "Pune" },
    { custId: "C004", name: "Priya", city: "Nagpur" },
  ];

  const mergedResults = useMemo(() => {
    if (joinType === "inner") {
      return [
        { orderId: "O001", custId: "C001", amount: "₹5,000", name: "Amit", city: "Mumbai", origin: "both" },
        { orderId: "O002", custId: "C002", amount: "₹8,000", name: "Neha", city: "Pune", origin: "both" },
      ];
    } else if (joinType === "left") {
      return [
        { orderId: "O001", custId: "C001", amount: "₹5,000", name: "Amit", city: "Mumbai", origin: "both" },
        { orderId: "O002", custId: "C002", amount: "₹8,000", name: "Neha", city: "Pune", origin: "both" },
        { orderId: "O003", custId: "C003", amount: "₹3,000", name: "NaN", city: "NaN", origin: "left_only" },
      ];
    } else if (joinType === "right") {
      return [
        { orderId: "O001", custId: "C001", amount: "₹5,000", name: "Amit", city: "Mumbai", origin: "both" },
        { orderId: "O002", custId: "C002", amount: "₹8,000", name: "Neha", city: "Pune", origin: "both" },
        { orderId: "NaN", custId: "C004", amount: "NaN", name: "Priya", city: "Nagpur", origin: "right_only" },
      ];
    } else {
      // outer
      return [
        { orderId: "O001", custId: "C001", amount: "₹5,000", name: "Amit", city: "Mumbai", origin: "both" },
        { orderId: "O002", custId: "C002", amount: "₹8,000", name: "Neha", city: "Pune", origin: "both" },
        { orderId: "O003", custId: "C003", amount: "₹3,000", name: "NaN", city: "NaN", origin: "left_only" },
        { orderId: "NaN", custId: "C004", amount: "NaN", name: "Priya", city: "Nagpur", origin: "right_only" },
      ];
    }
  }, [joinType]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE BENCH 3: IQR OUTLIER DETECTOR
  // ---------------------------------------------------------------------------
  const [iqrMultiplier, setIqrMultiplier] = useState(1.5);
  const houseData = [
    { id: "H1", area: 900, price: 3500000 },
    { id: "H2", area: 1100, price: 4200000 },
    { id: "H3", area: 1250, price: 5000000 },
    { id: "H4", area: 1400, price: 5800000 },
    { id: "H5", area: 1600, price: 7200000 },
    { id: "H6", area: 1850, price: 8500000 },
    { id: "H7", area: 2100, price: 9200000 },
    { id: "H8", area: 3800, price: 28000000 }, // Outlier
  ];

  const q1 = 4600000;
  const q3 = 8850000;
  const iqrVal = q3 - q1; // 4250000
  const lowerBound = q1 - iqrMultiplier * iqrVal;
  const upperBound = q3 + iqrMultiplier * iqrVal;

  // ---------------------------------------------------------------------------
  // KNOWLEDGE ASSESSMENT QUIZ (10 QUESTIONS)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "1. Which Pandas structure is one-dimensional and contains labeled values?",
      options: ["DataFrame", "Series", "Index only", "ndarray"],
      correct: 1,
      explanation:
        "A Series is a one-dimensional labeled array in Pandas that holds homogeneous data with an associated index.",
    },
    {
      id: 2,
      question: "2. Which method selects rows using integer positions?",
      options: ["loc[]", "query()", "iloc[]", "merge()"],
      correct: 2,
      explanation:
        ".iloc[] provides strictly integer position-based indexing (0 to length-1), while .loc[] is label-based.",
    },
    {
      id: 3,
      question: "3. Which method identifies missing values?",
      options: ["duplicated()", "isna()", "describe()", "sort_values()"],
      correct: 1,
      explanation:
        "isna() (and its alias isnull()) returns a boolean mask indicating where elements are missing (NaN/None).",
    },
    {
      id: 4,
      question: "4. Which aggregation is generally more resistant to extreme values (outliers)?",
      options: ["Mean", "Sum", "Median", "Maximum"],
      correct: 2,
      explanation:
        "The median is the middle value in an ordered series and is robust against extreme outliers compared to the arithmetic mean.",
    },
    {
      id: 5,
      question: "5. Which join keeps every row from the left DataFrame?",
      options: ["Inner", "Left", "Right", "Outer"],
      correct: 1,
      explanation:
        "A left join (how='left') preserves all rows from the left table and populates unmatched right columns with NaN.",
    },
    {
      id: 6,
      question: "6. Which method combines DataFrames using matching key columns?",
      options: ["concat()", "pivot()", "merge()", "apply()"],
      correct: 2,
      explanation:
        "pd.merge() combines DataFrames based on common key columns (similar to SQL relational joins).",
    },
    {
      id: 7,
      question: "7. Which method is suitable for aggregation across rows and columns?",
      options: ["pivot_table()", "astype()", "iloc[]", "drop_duplicates()"],
      correct: 0,
      explanation:
        "pd.pivot_table() summarizes multidimensional data by grouping intersecting row and column categories with aggregation functions.",
    },
    {
      id: 8,
      question: "8. What is the main benefit of reading CSV data with chunksize?",
      options: [
        "Automatically removes missing values",
        "Avoids loading the complete dataset into memory at once",
        "Automatically trains a model",
        "Converts all text into numbers",
      ],
      correct: 1,
      explanation:
        "chunksize returns an iterator yielding manageable batches, preventing Out-Of-Memory (OOM) errors on large files.",
    },
    {
      id: 9,
      question: "9. Which operation creates binary columns from categorical features?",
      options: ["dropna()", "groupby()", "get_dummies()", "duplicated()"],
      correct: 2,
      explanation:
        "pd.get_dummies() performs one-hot encoding, transforming categorical levels into separate binary indicator columns (0 or 1).",
    },
    {
      id: 10,
      question: "10. Why should imputation statistics be learned using training data only?",
      options: [
        "To increase the number of features",
        "To prevent information leakage",
        "To remove all outliers",
        "To sort the dataset",
      ],
      correct: 1,
      explanation:
        "Computing statistics across the whole dataset before splitting leaks test set distributions into training, causing overly optimistic evaluations.",
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
    const code = `import pandas as pd
import numpy as np

# 1. Ingestion with explicit dtypes
df = pd.read_csv("sales_data.csv", dtype={"City": "category"})

# 2. Text normalization & deduplication
df["City"] = df["City"].str.strip().str.title()
df = df.drop_duplicates(subset=["Order_ID"], keep="first")

# 3. Numeric sanitization & median imputation
df["Salary"] = pd.to_numeric(df["Salary"].str.replace(",", "", regex=False), errors="coerce")
median_sal = df["Salary"].median()
df["Salary"] = df["Salary"].fillna(median_sal)

# 4. Feature Engineering
df["Revenue"] = df["Quantity"] * df["Unit_Price"]
df["Revenue_Category"] = pd.cut(df["Revenue"], bins=[0, 30000, 70000, float("inf")], labels=["Low", "Med", "High"])

# 5. GroupBy Aggregation & Pivot Table
summary = df.groupby("Product").agg(Total_Rev=("Revenue", "sum"), Avg_Rev=("Revenue", "mean")).reset_index()
pivot = pd.pivot_table(df, values="Revenue", index="City", columns="Product", aggfunc="sum", fill_value=0, margins=True)

# 6. Handover to Scikit-learn
X = df[["Quantity", "Unit_Price", "Salary"]].to_numpy()
y = df["Revenue"].to_numpy()`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Top Module Navigation */}
      <ModuleNav track="machine-learning" currentModuleId="pandas" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header Badge & Title */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-orange-600" />
              Machine Learning Track &bull; Module 03
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              22 COMPLETE SECTIONS &middot; PRODUCTION DATA PREPARATION
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 3 &mdash; Data Analysis &amp; Manipulation with Pandas
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Master the tabular data manipulation powerhouse of Python data science. Explore Series and DataFrames, robust ingestion, conditional indexing, strategic missing-value imputation, deduplication, GroupBy transforms, relational joins, cross-tab pivot tables, chunk streaming for large datasets, and leak-free feature pipelines.
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
          <MachineLearningPandasSections />
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
                1. Data Cleaning Pipeline
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("joins")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "joins"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Relational Join Visualizer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("iqr")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "iqr"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. IQR Outlier Inspector
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

            {/* TAB 1: PIPELINE SIMULATOR */}
            {activeWorkbenchTab === "pipeline" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <Table size={20} className="text-orange-600" />
                      Live Interactive Pandas Data Cleaning Pipeline
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Toggle transformation steps to observe real-time row purging, casing standardization, median age imputation, and derived column calculations.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setCleanedCities(false);
                      setDedupedOrders(false);
                      setImputedAges(false);
                      setComputedRevenue(false);
                      setCityFilter("All");
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-semibold text-stone-600 hover:bg-stone-50 cursor-pointer self-start sm:self-auto"
                  >
                    <RefreshCw size={12} />
                    Reset Data
                  </button>
                </div>

                {/* Pipeline Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <button
                    onClick={() => setDedupedOrders(!dedupedOrders)}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                      dedupedOrders ? "bg-orange-50 border-orange-300 text-orange-950" : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    <div className="font-bold flex items-center justify-between mb-1">
                      <span>1. drop_duplicates()</span>
                      {dedupedOrders && <Check size={14} className="text-orange-600" />}
                    </div>
                    <span className="text-[11px] block font-normal">Purges redundant order O006</span>
                  </button>

                  <button
                    onClick={() => setCleanedCities(!cleanedCities)}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                      cleanedCities ? "bg-orange-50 border-orange-300 text-orange-950" : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    <div className="font-bold flex items-center justify-between mb-1">
                      <span>2. .str.title()</span>
                      {cleanedCities && <Check size={14} className="text-orange-600" />}
                    </div>
                    <span className="text-[11px] block font-normal">Standardizes 'mumbai' to 'Mumbai'</span>
                  </button>

                  <button
                    onClick={() => setImputedAges(!imputedAges)}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                      imputedAges ? "bg-orange-50 border-orange-300 text-orange-950" : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    <div className="font-bold flex items-center justify-between mb-1">
                      <span>3. fillna(median)</span>
                      {imputedAges && <Check size={14} className="text-orange-600" />}
                    </div>
                    <span className="text-[11px] block font-normal">Replaces null &amp; age 150 with 28</span>
                  </button>

                  <button
                    onClick={() => setComputedRevenue(!computedRevenue)}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                      computedRevenue ? "bg-orange-50 border-orange-300 text-orange-950" : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    <div className="font-bold flex items-center justify-between mb-1">
                      <span>4. Derive Revenue</span>
                      {computedRevenue && <Check size={14} className="text-orange-600" />}
                    </div>
                    <span className="text-[11px] block font-normal">Quantity * Unit_Price</span>
                  </button>
                </div>

                {/* Filter Selector */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-semibold text-stone-600">Location Filter:</span>
                  {["All", "Mumbai", "Pune", "Nagpur"].map((city) => (
                    <button
                      key={city}
                      onClick={() => setCityFilter(city)}
                      className={`px-3 py-1 rounded-lg border cursor-pointer font-medium ${
                        cityFilter === city
                          ? "bg-stone-900 text-white border-stone-900"
                          : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>

                {/* Live Table */}
                <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                      <tr>
                        <th className="p-3">Order ID</th>
                        <th className="p-3">Customer</th>
                        <th className="p-3">City</th>
                        <th className="p-3">Age</th>
                        <th className="p-3">Product</th>
                        <th className="p-3 text-right">Qty</th>
                        <th className="p-3 text-right">Unit Price</th>
                        {computedRevenue && <th className="p-3 text-right text-orange-700 font-black">Revenue</th>}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 font-mono text-stone-700">
                      {processedData.map((row, idx) => (
                        <tr key={idx} className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">{row.id}</td>
                          <td className="p-3">{row.user}</td>
                          <td className="p-3">
                            <span className={row.city === "mumbai" ? "text-rose-600 font-bold" : "text-emerald-700"}>
                              {row.city}
                            </span>
                          </td>
                          <td className="p-3">
                            {row.age === null ? (
                              <span className="px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 font-bold">NaN</span>
                            ) : row.age === 150 ? (
                              <span className="px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 font-bold">150 (Invalid)</span>
                            ) : (
                              <span>{row.age}</span>
                            )}
                          </td>
                          <td className="p-3">{row.prod}</td>
                          <td className="p-3 text-right">{row.qty}</td>
                          <td className="p-3 text-right">₹{row.price.toLocaleString()}</td>
                          {computedRevenue && (
                            <td className="p-3 text-right text-orange-700 font-bold">
                              ₹{(row.qty * row.price).toLocaleString()}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="text-xs text-stone-500 flex items-center justify-between font-mono">
                  <span>Active Rows: {processedData.length}</span>
                  <span>
                    Total Revenue: ₹
                    {processedData.reduce((acc, r) => acc + r.qty * r.price, 0).toLocaleString()}
                  </span>
                </div>
              </div>
            )}

            {/* TAB 2: RELATIONAL JOINS VISUALIZER */}
            {activeWorkbenchTab === "joins" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <GitMerge size={20} className="text-orange-600" />
                    Relational Merge &amp; Join Visualizer (pd.merge)
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Select a join type to inspect how key matching, null preservation, and indicator origins operate across tables.
                  </p>
                </div>

                {/* Join Selector */}
                <div className="flex flex-wrap gap-2">
                  {["inner", "left", "right", "outer"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setJoinType(type)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        joinType === type
                          ? "bg-orange-600 text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {type} Join
                    </button>
                  ))}
                </div>

                {/* Output Merged Table */}
                <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                      <tr>
                        <th className="p-3">Order_ID</th>
                        <th className="p-3">Customer_ID (Key)</th>
                        <th className="p-3">Amount</th>
                        <th className="p-3">Customer Name</th>
                        <th className="p-3">City</th>
                        <th className="p-3">_merge Indicator</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700">
                      {mergedResults.map((r, i) => (
                        <tr key={i} className="hover:bg-stone-50">
                          <td className="p-3">{r.orderId}</td>
                          <td className="p-3 font-bold text-orange-700">{r.custId}</td>
                          <td className="p-3">{r.amount}</td>
                          <td className="p-3">{r.name}</td>
                          <td className="p-3">{r.city}</td>
                          <td className="p-3">
                            <span
                              className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                                r.origin === "both"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : r.origin === "left_only"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-amber-100 text-amber-800"
                              }`}
                            >
                              {r.origin}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#1c1917] p-4 rounded-2xl text-stone-100 text-xs font-mono">
                  <span className="text-orange-400 font-bold block mb-1"># Equivalent Python Code:</span>
                  <div>result = pd.merge(orders, customers, on=<span className="text-emerald-300">"Customer_ID"</span>, how=<span className="text-emerald-300">"{joinType}"</span>, indicator=True)</div>
                </div>
              </div>
            )}

            {/* TAB 3: IQR OUTLIER INSPECTOR */}
            {activeWorkbenchTab === "iqr" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <Sliders size={20} className="text-orange-600" />
                    IQR Outlier Detection Workbench
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Adjust the IQR multiplier threshold to observe dynamic boundary calculation and outlier row filtering.
                  </p>
                </div>

                {/* Multiplier Slider */}
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">IQR Multiplier Factor (k)</span>
                    <span className="text-xs text-stone-500">Standard rule is 1.5x (moderate), 3.0x (extreme).</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {[1.0, 1.5, 2.0, 3.0].map((val) => (
                      <button
                        key={val}
                        onClick={() => setIqrMultiplier(val)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                          iqrMultiplier === val
                            ? "bg-orange-600 text-white"
                            : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        {val}x
                      </button>
                    ))}
                  </div>
                </div>

                {/* Boundary Metric Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="text-stone-500 block mb-1">Q1 (25th %)</span>
                    <span className="font-bold text-stone-900 text-sm">₹{q1.toLocaleString()}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="text-stone-500 block mb-1">Q3 (75th %)</span>
                    <span className="font-bold text-stone-900 text-sm">₹{q3.toLocaleString()}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="text-stone-500 block mb-1">Lower Fence</span>
                    <span className="font-bold text-rose-700 text-sm">₹{Math.max(0, lowerBound).toLocaleString()}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="text-stone-500 block mb-1">Upper Fence</span>
                    <span className="font-bold text-rose-700 text-sm">₹{upperBound.toLocaleString()}</span>
                  </div>
                </div>

                {/* Outlier Table */}
                <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                      <tr>
                        <th className="p-3">House ID</th>
                        <th className="p-3">Area (sq.ft)</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700">
                      {houseData.map((h, i) => {
                        const isOutlier = h.price < lowerBound || h.price > upperBound;
                        return (
                          <tr key={i} className={isOutlier ? "bg-rose-50" : "hover:bg-stone-50"}>
                            <td className="p-3 font-bold">{h.id}</td>
                            <td className="p-3">{h.area}</td>
                            <td className="p-3 font-bold">₹{h.price.toLocaleString()}</td>
                            <td className="p-3">
                              {isOutlier ? (
                                <span className="px-2 py-0.5 rounded bg-rose-200 text-rose-800 font-bold">
                                  Outlier (&gt; Fence)
                                </span>
                              ) : (
                                <span className="text-emerald-700 font-semibold">Normal</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
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
                      Module 3 Knowledge Assessment
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Validate your understanding of Series, DataFrames, indexing, joins, missing data, and leakage prevention.
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
            onClick={() => navigate("/learning/machine-learning/numpy")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 2 &mdash; Numerical Computing with NumPy</span>
          </button>

          <button
            onClick={() => navigate("/learning/machine-learning/eda")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <span>Next: Module 4 &mdash; Exploratory Data Analysis &amp; Visualization</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
