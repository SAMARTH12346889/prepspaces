import React from "react";
import {
  Database,
  Table,
  Sparkles,
  Layers,
  FileCode,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Cpu,
  BarChart2,
  Sliders,
  Maximize2,
  Terminal,
  Activity,
  GitMerge,
  Filter,
  Search,
} from "lucide-react";

export default function MachineLearningPandasSections() {
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
          Pandas is one of the most critical libraries in the machine learning workflow. Before training any algorithm, you must load datasets, inspect structure, isolate errors, handle missing values, engineer informative features, merge heterogeneous sources, and verify data integrity.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Master Pandas Series (1D) and DataFrame (2D) labeled data structures.",
            "Load datasets reliably from CSV, Excel, JSON, and Apache Parquet formats.",
            "Select, slice, filter, and modify rows and columns using loc[], iloc[], and query().",
            "Detect, evaluate, and impute missing values (mean, median, mode, interpolation, indicators).",
            "Identify, audit, and deduplicate records across composite primary keys.",
            "Perform multi-axis aggregations using split-apply-combine and named agg().",
            "Combine multi-table relational datasets using inner, left, right, outer joins and concatenation.",
            "Construct multi-dimensional summary pivot tables with margins and custom aggregators.",
            "Process memory-intensive datasets exceeding RAM using chunksize, downcasting, and categories.",
            "Execute rigorous data-quality assessments across completeness, validity, accuracy, and IQR outliers.",
            "Construct leakage-free feature pipelines ready for Scikit-learn estimators.",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
              <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-stone-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: WHAT IS PANDAS? */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 02
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Architecture &amp; Role</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          2. What is Pandas?
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Pandas is Python's foundational tabular data manipulation engine. It provides high-performance, labeled, heterogeneous data structures designed to clean, transform, aggregate, and prepare data for statistical modeling and machine learning.
        </p>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-5 border border-stone-800 text-stone-100 font-mono text-xs overflow-x-auto">
          <div className="text-orange-400 font-bold mb-2"># Tabular Real Estate Example in Pandas</div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-700 text-stone-400">
                <th className="py-1 px-3">House ID</th>
                <th className="py-1 px-3">Area (sq.ft)</th>
                <th className="py-1 px-3">Bedrooms</th>
                <th className="py-1 px-3">Location</th>
                <th className="py-1 px-3">Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-800"><td className="py-1 px-3 text-stone-300">H001</td><td className="py-1 px-3 text-amber-300">1200</td><td className="py-1 px-3">2</td><td className="py-1 px-3 text-emerald-300">Mumbai</td><td className="py-1 px-3 text-orange-400">8,500,000</td></tr>
              <tr className="border-b border-stone-800"><td className="py-1 px-3 text-stone-300">H002</td><td className="py-1 px-3 text-amber-300">1800</td><td className="py-1 px-3">3</td><td className="py-1 px-3 text-emerald-300">Pune</td><td className="py-1 px-3 text-orange-400">7,200,000</td></tr>
              <tr className="border-b border-stone-800"><td className="py-1 px-3 text-stone-300">H003</td><td className="py-1 px-3 text-amber-300">950</td><td className="py-1 px-3">2</td><td className="py-1 px-3 text-emerald-300">Nagpur</td><td className="py-1 px-3 text-orange-400">4,200,000</td></tr>
              <tr><td className="py-1 px-3 text-stone-300">H004</td><td className="py-1 px-3 text-amber-300">2200</td><td className="py-1 px-3">4</td><td className="py-1 px-3 text-emerald-300">Mumbai</td><td className="py-1 px-3 text-orange-400">15,000,000</td></tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-stone-50 border border-stone-200 rounded-2xl p-5">
          <h3 className="text-sm font-bold text-stone-900 mb-2">Pandas in the Machine Learning Pipeline</h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-stone-200 text-stone-700">
              <span className="font-bold text-orange-700 block mb-1">1. Ingest Raw Data</span>
              CSV, Excel, SQL, JSON, or Apache Parquet files
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200 text-stone-700">
              <span className="font-bold text-orange-700 block mb-1">2. Inspect &amp; Clean</span>
              Data types, null imputation, duplicate purging, outlier bounding
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200 text-stone-700">
              <span className="font-bold text-orange-700 block mb-1">3. Transform &amp; Aggregate</span>
              Encoding, scaling, GroupBy metrics, pivot summarization
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200 text-stone-700">
              <span className="font-bold text-orange-700 block mb-1">4. Model Training</span>
              Export .to_numpy() feature matrix X and target y to Scikit-learn
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INSTALLING AND IMPORTING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 03
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Setup &amp; Conventions</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          3. Installing and Importing Pandas
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Install Pandas using pip alongside high-performance spreadsheet and columnar storage parsers:
        </p>

        <div className="mt-4 bg-[#1c1917] rounded-2xl p-4 border border-stone-800 text-stone-100 font-mono text-xs space-y-2">
          <div className="text-stone-400"># Core tabular libraries</div>
          <div className="text-emerald-400">pip install pandas openpyxl pyarrow fastparquet</div>
          <div className="text-stone-400 mt-2"># Canonical import alias used globally</div>
          <div className="text-orange-400">import pandas as pd</div>
          <div className="text-orange-400">import numpy as np</div>
          <div className="text-stone-400">print(pd.__version__)</div>
        </div>
        <div className="mt-3 text-xs text-stone-500 italic">
          Using <code>import pandas as pd</code> is the universal convention in the Python data-science ecosystem.
        </div>
      </section>

      {/* SECTION 4: SERIES AND DATAFRAMES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 04
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Core Data Structures</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          4. Series and DataFrames
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Pandas organizes data into two primary structures: <strong>pd.Series</strong> (one-dimensional labeled array) and <strong>pd.DataFrame</strong> (two-dimensional labeled tabular matrix).
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
            <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              4.1 pd.Series (1D Labeled Array)
            </h3>
            <p className="text-xs text-stone-600 mb-3">
              Combines a typed NumPy vector with an explicit index (numeric or string keys).
            </p>
            <div className="bg-[#1c1917] rounded-xl p-3 font-mono text-xs text-stone-100 space-y-1">
              <div><span className="text-orange-400">import</span> pandas <span className="text-orange-400">as</span> pd</div>
              <div className="text-stone-300">prices = pd.Series([8500000, 7200000, 4200000], index=[<span className="text-emerald-300">"Mumbai"</span>, <span className="text-emerald-300">"Pune"</span>, <span className="text-emerald-300">"Nagpur"</span>], name=<span className="text-emerald-300">"House Price"</span>)</div>
              <div className="text-stone-400 mt-2"># Label vs Position Access</div>
              <div>print(prices[<span className="text-emerald-300">"Mumbai"</span>])  <span className="text-stone-500"># 8500000 (Label)</span></div>
              <div>print(prices.iloc[0])        <span className="text-stone-500"># 8500000 (Position)</span></div>
              <div>print(prices.mean())         <span className="text-stone-500"># 6633333.33</span></div>
              <div>print(prices.value_counts()) <span className="text-stone-500"># Categorical frequency</span></div>
            </div>
          </div>

          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
            <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              4.3 pd.DataFrame (2D Tabular Matrix)
            </h3>
            <p className="text-xs text-stone-600 mb-3">
              A collection of aligned Series sharing an Index and column headers.
            </p>
            <div className="bg-[#1c1917] rounded-xl p-3 font-mono text-xs text-stone-100 space-y-1">
              <div className="text-stone-300">data = &#123;</div>
              <div className="text-stone-300 ml-2"><span className="text-emerald-300">"Area"</span>: [1200, 1800, 950, 2200],</div>
              <div className="text-stone-300 ml-2"><span className="text-emerald-300">"Price"</span>: [8500000, 7200000, 4200000, 15000000]</div>
              <div className="text-stone-300">&#125;</div>
              <div>df = pd.DataFrame(data)</div>
              <div className="text-stone-400 mt-2"># Series vs DataFrame Return</div>
              <div>df[<span className="text-emerald-300">"Price"</span>]    <span className="text-stone-500"># Returns pd.Series (1D)</span></div>
              <div>df[[<span className="text-emerald-300">"Price"</span>]]  <span className="text-stone-500"># Returns pd.DataFrame (2D)</span></div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white border border-stone-200 rounded-2xl p-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Essential DataFrame Attributes (Not Methods)</h4>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs font-mono">
            <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200"><span className="font-bold text-orange-700">df.shape</span><p className="text-[11px] text-stone-500 mt-0.5">(rows, cols)</p></div>
            <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200"><span className="font-bold text-orange-700">df.columns</span><p className="text-[11px] text-stone-500 mt-0.5">Index of headers</p></div>
            <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200"><span className="font-bold text-orange-700">df.dtypes</span><p className="text-[11px] text-stone-500 mt-0.5">Type per column</p></div>
            <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200"><span className="font-bold text-orange-700">df.index</span><p className="text-[11px] text-stone-500 mt-0.5">Row axis labels</p></div>
            <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200"><span className="font-bold text-orange-700">df.values</span><p className="text-[11px] text-stone-500 mt-0.5">Raw NumPy matrix</p></div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DATASET LOADING AND INSPECTION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 05
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">I/O &amp; Inspection</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          5. Dataset Loading and Systematic Inspection
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Real-world datasets arrive from CSVs, nested JSON endpoints, database dumps, and multi-tab spreadsheets. Using optimized parameters minimizes memory footprint upfront.
        </p>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-5 border border-stone-800 text-stone-100 font-mono text-xs space-y-3">
          <div className="text-orange-400 font-bold"># Robust CSV Ingestion</div>
          <div className="text-stone-300">
            df = pd.read_csv(<br />
            &nbsp;&nbsp;<span className="text-emerald-300">"house_prices.csv"</span>,<br />
            &nbsp;&nbsp;sep=<span className="text-emerald-300">","</span>,<br />
            &nbsp;&nbsp;usecols=[<span className="text-emerald-300">"Area"</span>, <span className="text-emerald-300">"Bedrooms"</span>, <span className="text-emerald-300">"Location"</span>, <span className="text-emerald-300">"Price"</span>],&nbsp;&nbsp;<span className="text-stone-500"># Projection pruning</span><br />
            &nbsp;&nbsp;dtype=&#123;<span className="text-emerald-300">"Bedrooms"</span>: <span className="text-emerald-300">"int16"</span>, <span className="text-emerald-300">"Location"</span>: <span className="text-emerald-300">"category"</span>&#125;,<br />
            &nbsp;&nbsp;na_values=[<span className="text-emerald-300">"NA"</span>, <span className="text-emerald-300">"?"</span>, <span className="text-emerald-300">"null"</span>, <span className="text-emerald-300">"-999"</span>]<br />
            )
          </div>

          <div className="text-orange-400 font-bold mt-4"># Normalized JSON Ingestion</div>
          <div className="text-stone-300">
            raw_json = [&#123;<span className="text-emerald-300">"user"</span>: <span className="text-emerald-300">"Amit"</span>, <span className="text-emerald-300">"geo"</span>: &#123;<span className="text-emerald-300">"city"</span>: <span className="text-emerald-300">"Mumbai"</span>&#125;&#125;]<br />
            df_flat = pd.json_normalize(raw_json)  <span className="text-stone-500"># Produces 'geo.city' column</span>
          </div>
        </div>

        <div className="mt-6 bg-stone-50 rounded-2xl p-5 border border-stone-200">
          <h3 className="text-sm font-bold text-stone-900 mb-3">Systematic 6-Point Inspection Workflow</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-stone-200 font-mono">
              <span className="font-bold text-orange-600 block mb-1">1. Structure</span>
              df.head(5)<br />
              df.shape<br />
              df.info()
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200 font-mono">
              <span className="font-bold text-orange-600 block mb-1">2. Statistics</span>
              df.describe(include="all")<br />
              df.nunique()
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200 font-mono">
              <span className="font-bold text-orange-600 block mb-1">3. Hygiene</span>
              df.isnull().sum()<br />
              df.duplicated().sum()
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DATA SELECTION AND FILTERING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 06
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Slicing &amp; Querying</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          6. Data Selection, Slicing, and Boolean Filtering
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Pandas provides distinct indexers for label-based selection (<code>.loc[]</code>), integer position selection (<code>.iloc[]</code>), and readable multi-condition expressions (<code>.query()</code>).
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
            <thead className="bg-stone-100 text-stone-700 font-bold">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">.loc[] (Label Indexer)</th>
                <th className="p-3">.iloc[] (Integer Position Indexer)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Selection Basis</td>
                <td className="p-3 font-mono">df.loc['row_label', 'col_name']</td>
                <td className="p-3 font-mono">df.iloc[0, 2]</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Endpoint Slicing</td>
                <td className="p-3 text-orange-700 font-semibold">Inclusive of ending label ('A':'C' includes C)</td>
                <td className="p-3 text-blue-700 font-semibold">Exclusive of end index (0:3 yields 0, 1, 2)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Conditional Masks</td>
                <td className="p-3 font-mono">df.loc[df['Area'] &gt; 1500, ['Price']]</td>
                <td className="p-3 font-mono">Requires boolean array conversion</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-5 border border-stone-800 text-stone-100 font-mono text-xs space-y-2">
          <div className="text-stone-400"># Boolean Composition: ALWAYS group with parentheses ()</div>
          <div className="text-emerald-300">
            mumbai_affordable = df[ (df[<span className="text-orange-300">"Location"</span>] == <span className="text-orange-300">"Mumbai"</span>) &amp; (df[<span className="text-orange-300">"Price"</span>] &lt; 10000000) ]
          </div>
          <div className="text-stone-400 mt-2"># Clean membership filtering with isin() and between()</div>
          <div>tier1_cities = df[ df[<span className="text-orange-300">"Location"</span>].isin([<span className="text-emerald-300">"Mumbai"</span>, <span className="text-emerald-300">"Pune"</span>, <span className="text-emerald-300">"Nagpur"</span>]) ]</div>
          <div>mid_sized = df[ df[<span className="text-orange-300">"Area"</span>].between(1000, 2000) ]  <span className="text-stone-500"># Inclusive of both bounds</span></div>
          <div className="text-stone-400 mt-2"># Expressive filtering with query() and variable injection @</div>
          <div>min_area = 1200</div>
          <div className="text-orange-300">result = df.query(<span className="text-emerald-300">"Area &gt;= @min_area and Price &lt; 15000000"</span>)</div>
        </div>
      </section>

      {/* SECTION 7: DATA CLEANING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 07
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Sanitization</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          7. Data Cleaning &amp; Format Normalization
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Raw tabular data contains corrupt formatting: commas inside numbers, leading/trailing whitespace, mixed letter casings, invalid negative quantities, and heterogeneous category labels.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-2">1. Coercing Corrupted Numbers</span>
            <div className="text-stone-600 space-y-1">
              <div># Strip commas &amp; convert:</div>
              <div className="text-orange-700">df["Salary"] = df["Salary"].str.replace(",", "", regex=False)</div>
              <div># Coerce non-numeric garbage to NaN:</div>
              <div className="text-orange-700">df["Salary"] = pd.to_numeric(df["Salary"], errors="coerce")</div>
            </div>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-2">2. Standardizing Text &amp; Categories</span>
            <div className="text-stone-600 space-y-1">
              <div># Strip padding &amp; enforce Title Case:</div>
              <div className="text-emerald-700">df["City"] = df["City"].str.strip().str.title()</div>
              <div># Canonical category mapping:</div>
              <div className="text-emerald-700">mapping = &#123;"cc": "Credit Card", "credit card": "Credit Card"&#125;</div>
              <div className="text-emerald-700">df["Payment"] = df["Payment"].str.lower().replace(mapping)</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: MISSING VALUE HANDLING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 08
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Imputation Mechanics</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          8. Missing Value Detection &amp; Strategic Imputation
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Missing data (<code>NaN</code>, <code>None</code>, <code>pd.NA</code>) arises from hardware dropout, optional fields, or merging failures. Deleting rows blindly shrinks datasets and injects severe selection bias.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
            <thead className="bg-stone-100 text-stone-700 font-bold">
              <tr>
                <th className="p-3">Strategy</th>
                <th className="p-3">Pandas Code</th>
                <th className="p-3">Optimal Use Case</th>
                <th className="p-3">Critical Limitation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Listwise Deletion</td>
                <td className="p-3 font-mono">df.dropna(subset=['Age'])</td>
                <td className="p-3">&lt;1% records missing completely at random (MCAR)</td>
                <td className="p-3 text-rose-600">Destroys sample size; distorts distributions</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Mean Imputation</td>
                <td className="p-3 font-mono">df['Sal'].fillna(df['Sal'].mean())</td>
                <td className="p-3">Normally distributed symmetric metrics</td>
                <td className="p-3 text-rose-600">Severe outlier sensitivity; underestimates variance</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Median Imputation</td>
                <td className="p-3 font-mono">df['Sal'].fillna(df['Sal'].median())</td>
                <td className="p-3">Skewed continuous features (income, price, latency)</td>
                <td className="p-3">Flattens multimodal distributions</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Mode Imputation</td>
                <td className="p-3 font-mono">df['City'].fillna(df['City'].mode()[0])</td>
                <td className="p-3">Categorical features (city, payment, department)</td>
                <td className="p-3">Artificially inflates dominant category share</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Forward / Backward Fill</td>
                <td className="p-3 font-mono">df['Temp'].ffill() / bfill()</td>
                <td className="p-3">Time-series and sequential sensor streams</td>
                <td className="p-3">Propagates stale values across regime changes</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Linear Interpolation</td>
                <td className="p-3 font-mono">df['Temp'].interpolate(method='linear')</td>
                <td className="p-3">Smooth continuous time-series</td>
                <td className="p-3">Fails on high-frequency stochastic noise</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Missingness Indicator</td>
                <td className="p-3 font-mono">df['Sal_NA'] = df['Sal'].isna().astype(int)</td>
                <td className="p-3">Data Missing Not At Random (MNAR) (e.g. loan risk)</td>
                <td className="p-3">Adds dimensionality; requires dual feature tracking</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 flex items-start gap-3">
          <AlertTriangle size={18} className="text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold">Machine Learning Data Leakage Rule:</strong>
            Never fit imputers (mean, median, mode) across the full dataset prior to train-test splitting. Calculating statistics on the combined dataset leaks test set distribution into the training pipeline. Always compute parameters on <code>train_df</code> only and apply those exact constants to <code>test_df</code>.
          </div>
        </div>
      </section>

      {/* SECTION 9: DUPLICATE DETECTION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 09
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Entity Resolution</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          9. Duplicate Detection &amp; Subsetting
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Duplicate observations corrupt statistics, bias clustering centroids, and cause data leakage if identical samples appear in both train and validation splits.
        </p>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-5 border border-stone-800 text-stone-100 font-mono text-xs space-y-2">
          <div className="text-stone-400"># Audit all duplicate rows (marking all occurrences)</div>
          <div>duplicates = df[ df.duplicated(keep=False) ]</div>
          <div className="text-stone-400 mt-2"># Purge duplicates while retaining the most recent timestamp</div>
          <div className="text-orange-400">df = df.sort_values("Timestamp").drop_duplicates(subset=["User_ID"], keep="last")</div>
        </div>
      </section>

      {/* SECTION 10: DATA TRANSFORMATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Feature Engineering</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          10. Data Transformation &amp; Feature Engineering
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Transform raw variables into machine learning features using vectorization, categorical one-hot encoding, date decomposition, and mathematical scaling.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs">
            <h4 className="font-bold text-stone-900 mb-2">1. Mathematical Scaling Formulas</h4>
            <div className="bg-white p-3 rounded-lg border border-stone-200 font-mono text-stone-800 space-y-2 mb-2">
              <div><strong>Min-Max Scaling:</strong> x' = (x - x_min) / (x_max - x_min)</div>
              <div><strong>Z-Score Standardization:</strong> z = (x - μ) / σ</div>
            </div>
            <p className="text-stone-600">Standardizing features prevents gradient updates from oscillating due to scale discrepancies (e.g. Income ₹5,000,000 vs Age 25).</p>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs">
            <h4 className="font-bold text-stone-900 mb-2">2. One-Hot Categorical Encoding</h4>
            <div className="bg-[#1c1917] p-3 rounded-lg font-mono text-stone-100 text-[11px] space-y-1">
              <div className="text-stone-400"># pd.get_dummies converts labels to binary columns</div>
              <div className="text-emerald-300">df_encoded = pd.get_dummies(df, columns=[<span className="text-orange-300">"City"</span>], dtype=int)</div>
              <div className="text-stone-500"># Result: City_Mumbai, City_Pune, City_Nagpur</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs font-mono">
          <span className="font-bold text-stone-900 block mb-2">3. Datetime Decomposition Accessor (.dt)</span>
          <div className="text-stone-700 space-y-1">
            <div>df[<span className="text-emerald-700">"Order_Date"</span>] = pd.to_datetime(df[<span className="text-emerald-700">"Order_Date"</span>], errors=<span className="text-emerald-700">"coerce"</span>)</div>
            <div>df[<span className="text-emerald-700">"Year"</span>] = df[<span className="text-emerald-700">"Order_Date"</span>].dt.year</div>
            <div>df[<span className="text-emerald-700">"DayOfWeek"</span>] = df[<span className="text-emerald-700">"Order_Date"</span>].dt.dayofweek</div>
            <div>df[<span className="text-emerald-700">"Is_Weekend"</span>] = df[<span className="text-emerald-700">"DayOfWeek"</span>].isin([5, 6]).astype(int)</div>
          </div>
        </div>
      </section>

      {/* SECTION 11: GROUPBY AND AGGREGATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Split-Apply-Combine</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          11. GroupBy Aggregation &amp; Window Transforms
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          The <code>groupby()</code> operator partitions tabular data into logical subsets, applies numerical reductions, and recombines the results. Understanding the difference between <code>agg()</code> and <code>transform()</code> is critical for ML feature engineering.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-2">1. Named Aggregation (.agg) &mdash; Collapses Rows</span>
            <div className="bg-[#1c1917] p-3 rounded-lg text-stone-200 space-y-1">
              <div className="text-orange-300">summary = df.groupby("Product").agg(</div>
              <div className="ml-2">Total_Revenue=("Revenue", "sum"),</div>
              <div className="ml-2">Avg_Revenue=("Revenue", "mean"),</div>
              <div className="ml-2">Order_Count=("Order_ID", "count")</div>
              <div className="text-orange-300">).reset_index()</div>
            </div>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-2">2. Group Transform (.transform) &mdash; Preserves Length</span>
            <div className="bg-[#1c1917] p-3 rounded-lg text-stone-200 space-y-1">
              <div className="text-stone-400"># Broadcasts group mean back to every original row:</div>
              <div className="text-emerald-300">df["Product_Avg_Rev"] = df.groupby("Product")["Revenue"].transform("mean")</div>
              <div className="text-stone-400 mt-1"># Group-relative normalized spending feature:</div>
              <div className="text-emerald-300">df["Diff_From_Product_Avg"] = df["Revenue"] - df["Product_Avg_Rev"]</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: MERGING AND JOINING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Relational Joins</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          12. Merging, Joining, and Cardinality Validation
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Combine disparate operational tables using <code>pd.merge()</code> for key-based relational joins and <code>pd.concat()</code> for vertical stacking and horizontal alignment.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
          <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
            <span className="font-bold text-orange-700 block mb-1">Inner Join</span>
            Only keys present in both DataFrames. Unmatched rows dropped.
          </div>
          <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
            <span className="font-bold text-orange-700 block mb-1">Left Join</span>
            All records from left DataFrame. Unmatched right keys become NaN.
          </div>
          <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
            <span className="font-bold text-orange-700 block mb-1">Right Join</span>
            All records from right DataFrame. Unmatched left keys become NaN.
          </div>
          <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
            <span className="font-bold text-orange-700 block mb-1">Outer Join</span>
            Full union of keys from both tables. Unmatched cells filled with NaN.
          </div>
        </div>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-4 border border-stone-800 text-stone-100 font-mono text-xs space-y-2">
          <div className="text-stone-400"># Defensive Merge with Cardinality Validation &amp; Origin Tracking</div>
          <div className="text-emerald-300">
            merged = pd.merge(<br />
            &nbsp;&nbsp;orders, customers,<br />
            &nbsp;&nbsp;on=<span className="text-orange-300">"Customer_ID"</span>,<br />
            &nbsp;&nbsp;how=<span className="text-orange-300">"left"</span>,<br />
            &nbsp;&nbsp;validate=<span className="text-orange-300">"many_to_one"</span>,&nbsp;&nbsp;<span className="text-stone-500"># Raises MergeError if Customer_ID is duplicate in right table</span><br />
            &nbsp;&nbsp;indicator=True&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500"># Adds '_merge': 'both', 'left_only', 'right_only'</span><br />
            )
          </div>
        </div>
      </section>

      {/* SECTION 13: PIVOT TABLES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Multi-Dimensional Summaries</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          13. Pivot Tables: pivot() vs pivot_table()
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          A pivot table aggregates records across intersecting row and column dimensions, producing business executive summaries and cross-tabulations.
        </p>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-5 border border-stone-800 text-stone-100 font-mono text-xs space-y-2">
          <div className="text-orange-400 font-bold"># Cross-Tabulation with Margins (Totals)</div>
          <div className="text-stone-300">
            sales_pivot = pd.pivot_table(<br />
            &nbsp;&nbsp;df,<br />
            &nbsp;&nbsp;values=<span className="text-emerald-300">"Revenue"</span>,<br />
            &nbsp;&nbsp;index=<span className="text-emerald-300">"City"</span>,<br />
            &nbsp;&nbsp;columns=<span className="text-emerald-300">"Product"</span>,<br />
            &nbsp;&nbsp;aggfunc=<span className="text-emerald-300">"sum"</span>,<br />
            &nbsp;&nbsp;fill_value=0,<br />
            &nbsp;&nbsp;margins=True,<br />
            &nbsp;&nbsp;margins_name=<span className="text-emerald-300">"Total"</span><br />
            )
          </div>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
          <strong>pivot() vs pivot_table():</strong> <code>df.pivot()</code> strictly reshapes unique keys without aggregating duplicate index-column combinations (raises <code>ValueError</code> on duplicate pairs). <code>pd.pivot_table()</code> safely aggregates duplicate observations using functions like <code>sum</code>, <code>mean</code>, or <code>count</code>.
        </div>
      </section>

      {/* SECTION 14: LARGE DATASET PROCESSING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Memory Optimization</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          14. Large Dataset Processing &amp; Memory Optimization
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          When datasets approach physical RAM limits, standard operations encounter Out-Of-Memory (OOM) crashes. Strategic downcasting, projection pruning, and chunk streaming eliminate memory exhaustion.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">1. Dtype Downcasting</span>
            <p className="text-stone-600 text-[11px] mb-2">Convert int64 (8 bytes) to int8/int16 and float64 to float32.</p>
            <div className="bg-white p-2 rounded font-mono text-[11px] border border-stone-200 text-stone-800">
              df['Age'] = df['Age'].astype('int8')<br />
              df['Price'] = df['Price'].astype('float32')
            </div>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">2. Categorical Memory Savings</span>
            <p className="text-stone-600 text-[11px] mb-2">Compresses high-cardinality string objects into integer lookup keys.</p>
            <div className="bg-white p-2 rounded font-mono text-[11px] border border-stone-200 text-stone-800">
              df['City'] = df['City'].astype('category')<br />
              # Cuts string RAM by up to 90%
            </div>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">3. Chunksize Streaming</span>
            <p className="text-stone-600 text-[11px] mb-2">Stream multi-gigabyte CSVs iteratively in memory-bounded batches.</p>
            <div className="bg-white p-2 rounded font-mono text-[11px] border border-stone-200 text-stone-800">
              for chunk in pd.read_csv('big.csv', chunksize=50000):<br />
              &nbsp;&nbsp;total += chunk['Rev'].sum()
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
            <thead className="bg-stone-100 text-stone-700 font-bold">
              <tr>
                <th className="p-3">Ecosystem Tool</th>
                <th className="p-3">Primary Computing Architecture</th>
                <th className="p-3">When to Transition from Pandas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Polars</td>
                <td className="p-3">Rust-based multi-threaded vectorization, lazy evaluation</td>
                <td className="p-3">Single-machine datasets (1M - 100M rows) needing 10-50x speed</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">DuckDB</td>
                <td className="p-3">In-process vectorized columnar SQL engine</td>
                <td className="p-3">Querying massive Parquet/CSV files directly without loading to RAM</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">PySpark / Dask</td>
                <td className="p-3">Distributed cluster computation across networked worker nodes</td>
                <td className="p-3">Multi-terabyte distributed data lakehouse pipelines</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 15: DATA QUALITY ASSESSMENT */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Auditing &amp; IQR Outliers</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          15. Data Quality Assessment &amp; IQR Outlier Bounding
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Data quality assessment systematically audits datasets across 5 fundamental dimensions: <strong>Completeness</strong>, <strong>Accuracy</strong>, <strong>Consistency</strong>, <strong>Validity</strong>, and <strong>Uniqueness</strong>.
        </p>

        <div className="mt-6 bg-stone-50 p-5 rounded-2xl border border-stone-200">
          <h3 className="text-sm font-bold text-stone-900 mb-2">Interquartile Range (IQR) Outlier Detection Formula</h3>
          <p className="text-xs text-stone-600 mb-3">
            Identifies extreme values resistant to distributional skew:
          </p>
          <div className="bg-white p-3 rounded-xl border border-stone-200 font-mono text-xs text-stone-800 space-y-1">
            <div>IQR = Q3 - Q1&nbsp;&nbsp;(where Q1 = 25th percentile, Q3 = 75th percentile)</div>
            <div className="text-orange-700 font-bold">Lower Bound = Q1 - 1.5 * IQR</div>
            <div className="text-orange-700 font-bold">Upper Bound = Q3 + 1.5 * IQR</div>
          </div>

          <div className="mt-4 bg-[#1c1917] p-3 rounded-xl font-mono text-xs text-stone-200 space-y-1">
            <div>Q1 = df[<span className="text-orange-300">"Price"</span>].quantile(0.25)</div>
            <div>Q3 = df[<span className="text-orange-300">"Price"</span>].quantile(0.75)</div>
            <div>IQR = Q3 - Q1</div>
            <div>outliers = df[ (df[<span className="text-orange-300">"Price"</span>] &lt; Q1 - 1.5*IQR) | (df[<span className="text-orange-300">"Price"</span>] &gt; Q3 + 1.5*IQR) ]</div>
          </div>
        </div>
      </section>

      {/* SECTION 16: COMPLETE PRACTICAL PROJECT */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">End-to-End Pipeline</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          16. Complete Practical Project &mdash; E-Commerce Pipeline
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Walk through all 11 production steps: raw ingestion, inspection, duplicate purge, title casing, median age imputation, revenue feature derivation, GroupBy metrics, cross-tab pivot, and CSV export.
        </p>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-5 border border-stone-800 text-stone-100 font-mono text-xs space-y-3 overflow-x-auto">
          <div className="text-orange-400 font-bold"># Complete 11-Step Clean Data Processing Script</div>
          <div className="text-stone-300">
            <span className="text-stone-500"># Step 1: Synthesize Raw Dataset</span><br />
            import pandas as pd<br />
            import numpy as np<br />
            <br />
            df = pd.DataFrame(&#123;<br />
            &nbsp;&nbsp;<span className="text-emerald-300">"Order_ID"</span>: [<span className="text-emerald-300">"O001"</span>, <span className="text-emerald-300">"O002"</span>, <span className="text-emerald-300">"O003"</span>, <span className="text-emerald-300">"O004"</span>, <span className="text-emerald-300">"O005"</span>, <span className="text-emerald-300">"O006"</span>, <span className="text-emerald-300">"O006"</span>, <span className="text-emerald-300">"O007"</span>],<br />
            &nbsp;&nbsp;<span className="text-emerald-300">"City"</span>: [<span className="text-emerald-300">"Mumbai"</span>, <span className="text-emerald-300">"Pune"</span>, <span className="text-emerald-300">"mumbai"</span>, <span className="text-emerald-300">"Nagpur"</span>, <span className="text-emerald-300">"Pune"</span>, <span className="text-emerald-300">"Mumbai"</span>, <span className="text-emerald-300">"Mumbai"</span>, <span className="text-emerald-300">"Nagpur"</span>],<br />
            &nbsp;&nbsp;<span className="text-emerald-300">"Age"</span>: [25, 30, 28, np.nan, 35, 26, 26, 150],<br />
            &nbsp;&nbsp;<span className="text-emerald-300">"Product"</span>: [<span className="text-emerald-300">"Laptop"</span>, <span className="text-emerald-300">"Phone"</span>, <span className="text-emerald-300">"Tablet"</span>, <span className="text-emerald-300">"Laptop"</span>, <span className="text-emerald-300">"Phone"</span>, <span className="text-emerald-300">"Laptop"</span>, <span className="text-emerald-300">"Laptop"</span>, <span className="text-emerald-300">"Tablet"</span>],<br />
            &nbsp;&nbsp;<span className="text-emerald-300">"Quantity"</span>: [1, 2, 3, 1, 2, 1, 1, 4],<br />
            &nbsp;&nbsp;<span className="text-emerald-300">"Unit_Price"</span>: [60000, 20000, 15000, 60000, 20000, 60000, 60000, 15000]<br />
            &#125;)<br />
            <br />
            <span className="text-stone-500"># Step 3: Purge duplicated order IDs</span><br />
            df = df.drop_duplicates(subset=[<span className="text-emerald-300">"Order_ID"</span>], keep=<span className="text-emerald-300">"first"</span>)<br />
            <br />
            <span className="text-stone-500"># Step 4: Standardize city casing</span><br />
            df[<span className="text-emerald-300">"City"</span>] = df[<span className="text-emerald-300">"City"</span>].str.strip().str.title()<br />
            <br />
            <span className="text-stone-500"># Step 5: Invalidate impossible ages and impute with median</span><br />
            df.loc[~df[<span className="text-emerald-300">"Age"</span>].between(0, 120), <span className="text-emerald-300">"Age"</span>] = np.nan<br />
            df[<span className="text-emerald-300">"Age"</span>] = df[<span className="text-emerald-300">"Age"</span>].fillna(df[<span className="text-emerald-300">"Age"</span>].median())<br />
            <br />
            <span className="text-stone-500"># Step 6: Derive total revenue</span><br />
            df[<span className="text-emerald-300">"Revenue"</span>] = df[<span className="text-emerald-300">"Quantity"</span>] * df[<span className="text-emerald-300">"Unit_Price"</span>]<br />
            <br />
            <span className="text-stone-500"># Step 9: Pivot Cross-Tabulation</span><br />
            pivot = pd.pivot_table(df, values=<span className="text-emerald-300">"Revenue"</span>, index=<span className="text-emerald-300">"City"</span>, columns=<span className="text-emerald-300">"Product"</span>, aggfunc=<span className="text-emerald-300">"sum"</span>, fill_value=0, margins=True)<br />
            <br />
            <span className="text-stone-500"># Step 11: Export Cleaned Artifact</span><br />
            df.to_csv(<span className="text-emerald-300">"cleaned_ecommerce_data.csv"</span>, index=False)
          </div>
        </div>
      </section>

      {/* SECTION 17: IMPORTANT PANDAS CONCEPTS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Core Distinctions</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          17. Important Concepts &amp; Traps to Avoid
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-rose-50 p-4 rounded-xl border border-rose-200 text-rose-900">
            <span className="font-bold block mb-1">Trap 1: SettingWithCopyWarning</span>
            <p className="mb-2">Chained indexing <code>df[df['Age'] &gt; 25]['Age'] = 30</code> operates on a temporary slice.</p>
            <span className="font-bold text-emerald-800">Correct:</span> <code>df.loc[df['Age'] &gt; 25, 'Age'] = 30</code> or <code>.copy()</code>
          </div>

          <div className="bg-rose-50 p-4 rounded-xl border border-rose-200 text-rose-900">
            <span className="font-bold block mb-1">Trap 2: Forgetting Assignment</span>
            <p className="mb-2">Operations return new objects by default: <code>df.drop_duplicates()</code> leaves original intact.</p>
            <span className="font-bold text-emerald-800">Correct:</span> <code>df = df.drop_duplicates()</code>
          </div>

          <div className="bg-rose-50 p-4 rounded-xl border border-rose-200 text-rose-900">
            <span className="font-bold block mb-1">Trap 3: Many-to-Many Merge Explosion</span>
            <p className="mb-2">If join keys are duplicated on both sides, row counts multiply exponentially.</p>
            <span className="font-bold text-emerald-800">Correct:</span> Always specify <code>validate='many_to_one'</code>
          </div>

          <div className="bg-rose-50 p-4 rounded-xl border border-rose-200 text-rose-900">
            <span className="font-bold block mb-1">Trap 4: Count vs Size Confusion</span>
            <p className="mb-2"><code>df.count()</code> excludes missing NaN entries; <code>df.size</code> counts total row slots.</p>
            <span className="font-bold text-emerald-800">Correct:</span> Use <code>count()</code> for validity, <code>size</code> for frequency.
          </div>
        </div>
      </section>

      {/* SECTION 18: CONNECTION BETWEEN NUMPY AND PANDAS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Ecosystem Bridge</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          18. Connecting NumPy Arrays to Pandas DataFrames
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Pandas acts as the labeled user-facing abstraction over NumPy's continuous typed memory buffers. Exporting cleaned DataFrames into raw 2D feature matrices is the standard handover point to Scikit-learn:
        </p>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-4 border border-stone-800 text-stone-100 font-mono text-xs space-y-1">
          <div className="text-stone-400"># Handover to Machine Learning Estimators</div>
          <div className="text-orange-300">X = df[[<span className="text-emerald-300">"Age"</span>, <span className="text-emerald-300">"Quantity"</span>, <span className="text-emerald-300">"Unit_Price"</span>]].to_numpy()</div>
          <div className="text-orange-300">y = df[<span className="text-emerald-300">"Revenue"</span>].to_numpy()</div>
          <div className="text-stone-400 mt-2"># Verification</div>
          <div>print(type(X), X.shape)  <span className="text-stone-500"># &lt;class 'numpy.ndarray'&gt;, (N, 3)</span></div>
          <div>print(type(y), y.shape)  <span className="text-stone-500"># &lt;class 'numpy.ndarray'&gt;, (N,)</span></div>
        </div>
      </section>

      {/* SECTION 19: PRACTICAL EXERCISES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Hands-On Labs</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          19. Practical Assignments &amp; Coding Exercises
        </h2>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Exercise 1: Student Academic Dataset Filtering & Ranking",
              desc: "Synthesize 15 student records with ID, Name, Department, Marks, and Attendance. Extract top 10% performers, students with marks > 80, and compute department average scores.",
            },
            {
              title: "Exercise 2: Multi-Column Cleaning & Missingness Strategy",
              desc: "Inject currency strings ($50,000), duplicate customer keys, and negative ages. Implement median imputation for salaries and mode imputation for cities.",
            },
            {
              title: "Exercise 3: E-Commerce GroupBy & Multi-Index Pivot Tables",
              desc: "Ingest 100 transaction records. Construct a cross-tab pivot table of City vs Product Category with row and column margin totals.",
            },
            {
              title: "Exercise 4: Relational Merging with Strict Key Validation",
              desc: "Join Customers, Orders, and Products tables. Validate many-to-one constraints and track missing customer records via indicator=True.",
            },
            {
              title: "Exercise 5: Memory Optimization & Chunk Streaming",
              desc: "Generate 500,000 synthetic rows. Stream through chunks of 25,000 rows, downcast numerical dtypes, and benchmark RAM consumption using memory_usage(deep=True).",
            },
          ].map((ex, i) => (
            <div key={i} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
              <span className="font-bold text-stone-900 text-sm block mb-1">{ex.title}</span>
              <p className="text-stone-600 leading-relaxed">{ex.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 21 & 22: RESOURCES & CHECKLIST */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Verification</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          Module 3 Completion Checklist
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Confirm your mastery of the complete Pandas data manipulation workflow before progressing to Exploratory Data Analysis (EDA) and Scikit-learn pipelines:
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {[
            "Create and manipulate 1D Series and 2D DataFrames",
            "Load CSV, Excel, and normalized JSON files efficiently",
            "Perform label (.loc) and position (.iloc) selections",
            "Sanitize corrupted strings and coerce non-numeric values",
            "Select imputation strategies: Mean, Median, Mode, Indicators",
            "Purge duplicates across composite entity keys",
            "Engineer new features and execute one-hot categorical encoding",
            "Apply multi-metric GroupBy summaries with named agg()",
            "Construct relational merges with cardinality validation",
            "Build analytical pivot tables with row/col margin totals",
            "Downcast numerical dtypes and stream large files with chunksize",
            "Detect statistical outliers using the IQR rule (Q1 - 1.5*IQR)",
            "Export clean NumPy feature matrices X and target vectors y",
          ].map((chk, i) => (
            <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/60 text-emerald-950 font-medium">
              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
              <span>{chk}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
