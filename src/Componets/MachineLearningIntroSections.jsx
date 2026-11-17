import React from "react";
import { Sparkles, Terminal, FileCode, CheckCircle2, AlertTriangle, Database, Layers, ArrowRight, ExternalLink } from "lucide-react";

export default function MachineLearningIntroSections() {
  return (
    <div className="space-y-10">
      {/* MODULE OVERVIEW & ROADMAP */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Phase 1 &mdash; Data Science &amp; Machine Learning Preparation
          </span>
          <span className="text-xs font-mono text-stone-500">Module 01</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 1: Machine Learning Environment &amp; Workflow
        </h2>
        <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
          <div className="p-3 rounded-lg bg-orange-50/70 border border-orange-200/80 text-xs text-stone-800">
            <strong>Connection with the AI Engineering course:</strong> Python fundamentals and general ML concepts are already covered in AI Engineering &mdash; Module 1 and Module 3. This module references those foundations rather than repeating them, centering directly on configuring, structuring, and operating an enterprise-grade, reproducible machine learning development environment.
          </div>
          <h3 className="text-lg font-bold text-stone-900 mt-4 mb-2">Module overview</h3>
          <p>
            Before building machine learning models, you need a reliable development environment and a repeatable workflow. A machine learning project involves much more than writing a Python script: you must organize datasets, manage dependencies, select development tools, prepare experiments, train models, evaluate results, and ensure that other people can reproduce your work.
          </p>
          <p>
            This module establishes the development foundation you will use throughout the Machine Learning course.
          </p>
          <h3 className="text-lg font-bold text-stone-900 mt-4 mb-2">Learning outcomes</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-700 font-medium">
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Configure a Python-based machine learning environment.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Choose between local development, Jupyter Notebook, and Google Colab.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Organize an ML project using a maintainable directory structure.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Work with CSV, JSON, and Parquet datasets.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Understand the roles of commonly used ML libraries.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Explain how Scikit-learn organizes model training and prediction.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Follow a complete, repeatable ML experiment workflow.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Control randomness and record experiment configurations for reproducibility.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 1: ML DEVELOPMENT ENVIRONMENT */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 1
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            1. Machine Learning Development Environment
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <h3 className="text-base sm:text-lg font-bold text-stone-900">1.1 What is a machine learning development environment?</h3>
          <p>
            A machine learning development environment is the collection of software, tools, libraries, configurations, and computing resources used to develop and execute machine learning projects.
          </p>
          <p>
            In a conventional Python application, you might write a program, execute it, and inspect its output. A machine learning application involves additional stages:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Loading and understanding a dataset.</li>
            <li>Cleaning and preparing the data.</li>
            <li>Selecting relevant features.</li>
            <li>Splitting data into training and testing sets.</li>
            <li>Choosing a machine learning algorithm.</li>
            <li>Training the model.</li>
            <li>Evaluating its performance.</li>
            <li>Saving the trained model.</li>
            <li>Reusing the model for predictions.</li>
          </ol>
          <p>
            Each stage depends on the environment being correctly configured. For example, suppose you are developing a system that predicts house prices. Your project may require Python to execute the code, Jupyter Notebook to explore data, Pandas &amp; NumPy for processing, Matplotlib/Seaborn for charts, Scikit-learn for modeling, Joblib for serialization, and Git for version control.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">1.2 Main components of an ML environment</h3>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Component</th>
                  <th className="p-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Operating system</td><td className="p-3">Provides the platform for executing applications (Windows, Linux, macOS)</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Python</td><td className="p-3">Runs ML programs and scripts</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Package manager</td><td className="p-3">Installs and manages Python libraries (pip, uv, conda)</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Virtual environment</td><td className="p-3">Isolates project dependencies (.venv)</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">IDE or editor</td><td className="p-3">Provides an interface for writing code (VS Code, Cursor, PyCharm)</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Notebook environment</td><td className="p-3">Supports interactive experimentation (Jupyter, Colab)</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">ML libraries</td><td className="p-3">Provide data processing and model-building functionality</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Dataset storage</td><td className="p-3">Stores training, validation, and testing data</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Version control</td><td className="p-3">Tracks changes to code and project files (Git)</td></tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-bold text-stone-900 pt-2">Hardware Requirements &amp; Traditional ML vs Deep Learning</h4>
          <p>
            Traditional machine learning algorithms such as linear regression, logistic regression, decision trees, and random forests can often run effectively on a <strong>CPU</strong>. Deep learning models may benefit substantially from <strong>GPU acceleration</strong>, particularly when training large neural networks.
          </p>
          <div className="p-3 bg-amber-50/80 border border-amber-200 text-amber-900 rounded-xl text-xs sm:text-sm">
            <strong>Important:</strong> A GPU is not mandatory for learning machine learning. You can complete a large portion of this course using a CPU, small datasets, and Google Colab when additional compute is required.
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">1.3 Local development versus cloud development</h3>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Factor</th>
                  <th className="p-3">Local environment</th>
                  <th className="p-3">Cloud environment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Execution</td><td className="p-3">Your computer</td><td className="p-3">Remote infrastructure</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Hardware</td><td className="p-3">Limited by your device</td><td className="p-3">Depends on selected service</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Internet</td><td className="p-3">Not always required</td><td className="p-3">Usually required</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">File access</td><td className="p-3">Direct local access</td><td className="p-3">Often requires uploading or mounting</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Cost</td><td className="p-3">Hardware and electricity</td><td className="p-3">May be free within limits or paid</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Reproducibility</td><td className="p-3">Depends on local configuration</td><td className="p-3">Depends on saved environment &amp; config</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 2: PYTHON ENVIRONMENT SETUP */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            2. Python Environment Setup
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <h3 className="text-base sm:text-lg font-bold text-stone-900">2.1 Why does Python environment management matter?</h3>
          <p>
            Different machine learning projects may require different library versions. Installing every dependency globally causes <strong>dependency conflicts</strong>. A Python virtual environment provides an isolated space for each project.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">2.2 Creating a virtual environment</h3>
          <div className="space-y-2">
            <p className="text-xs font-mono text-stone-500">1. Create project directory and virtual environment:</p>
            <pre className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`mkdir house-price-prediction
cd house-price-prediction
python -m venv .venv`}
            </pre>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-mono text-stone-500">2. Activate the environment:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                <span className="text-xs font-bold text-stone-700 block mb-1">Windows (Cmd)</span>
                <code className="text-xs font-mono text-orange-700">.venv\Scripts\activate</code>
              </div>
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                <span className="text-xs font-bold text-stone-700 block mb-1">Windows (PowerShell)</span>
                <code className="text-xs font-mono text-orange-700">.venv\Scripts\Activate.ps1</code>
              </div>
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                <span className="text-xs font-bold text-stone-700 block mb-1">Linux / macOS</span>
                <code className="text-xs font-mono text-orange-700">source .venv/bin/activate</code>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-mono text-stone-500">3. Install core dependencies:</p>
            <pre className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`python -m pip install --upgrade pip
python -m pip install numpy pandas matplotlib seaborn scikit-learn jupyter pyarrow joblib`}
            </pre>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">2.3 Understanding pip and package management</h3>
          <p>
            Freeze dependencies to create a reproducible record:
          </p>
          <pre className="p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
{`python -m pip freeze > requirements.txt
# Reinstall in a new environment:
python -m pip install -r requirements.txt`}
          </pre>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">2.4 Checking your environment</h3>
          <pre className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`import sys
import numpy
import pandas
import sklearn
import matplotlib

print("Python:", sys.version)
print("Python executable:", sys.executable)
print("NumPy:", numpy.__version__)
print("Pandas:", pandas.__version__)
print("Scikit-learn:", sklearn.__version__)
print("Matplotlib:", matplotlib.__version__)`}
          </pre>
        </div>
      </section>

      {/* SECTION 3: JUPYTER NOTEBOOK WORKFLOW */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            3. Jupyter Notebook Workflow
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <h3 className="text-base sm:text-lg font-bold text-stone-900">3.1 What is Jupyter Notebook?</h3>
          <p>
            Jupyter Notebook is an interactive development environment that allows developers to write code, execute individual sections, display results, and document their experiments in a single notebook. Unlike a script executed top-to-bottom, a notebook allows you to run individual cells independently.
          </p>
          <p>
            It accommodates Python code, explanations, LaTeX mathematical equations, data tables, plots, and evaluation notes.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">3.4 Why is Jupyter useful for machine learning?</h3>
          <div className="space-y-3">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wide block mb-1">Step 1 &amp; 2 &mdash; Import libraries &amp; Load data</span>
              <pre className="font-mono text-xs text-stone-800">
{`import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("data/raw/house_prices.csv")`}
              </pre>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wide block mb-1">Step 3 &amp; 4 &mdash; Inspect data &amp; Calculate statistics</span>
              <pre className="font-mono text-xs text-stone-800">
{`print(df.head())
print(df.shape)
print(df.describe())`}
              </pre>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wide block mb-1">Step 5 &mdash; Visualize relationships</span>
              <pre className="font-mono text-xs text-stone-800">
{`df.plot(x="area", y="price", kind="scatter")
plt.title("House Area vs Price")
plt.xlabel("Area (sq ft)")
plt.ylabel("Price (INR)")
plt.show()`}
              </pre>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">3.5 Notebook execution order &amp; Best Practices</h3>
          <p>
            Notebooks preserve kernel state across executions regardless of visual cell order. Periodically restart the kernel and run all cells from top to bottom (<code className="px-1.5 py-0.5 rounded bg-stone-100 font-mono text-xs">Kernel &rarr; Restart &amp; Run All</code>) to verify reproducibility.
          </p>
        </div>
      </section>

      {/* SECTION 4: GOOGLE COLAB */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            4. Google Colab
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <h3 className="text-base sm:text-lg font-bold text-stone-900">4.1 What is Google Colab?</h3>
          <p>
            Google Colab is a hosted notebook environment that allows users to execute Python code through a browser without installing a complete local development environment.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">4.5 Local Jupyter versus Google Colab</h3>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Feature</th>
                  <th className="p-3">Local Jupyter</th>
                  <th className="p-3">Google Colab</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Installation</td><td className="p-3">Usually required locally</td><td className="p-3">Zero install, browser-based</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Compute</td><td className="p-3">Your local CPU/GPU</td><td className="p-3">Hosted cloud runtime</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">GPU</td><td className="p-3">Local hardware</td><td className="p-3">Available based on service limits</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">File storage</td><td className="p-3">Local filesystem</td><td className="p-3">Ephemeral runtime or Google Drive</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Internet</td><td className="p-3">Not always necessary</td><td className="p-3">Required for normal use</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Best use</td><td className="p-3">Production pipelines &amp; long-term development</td><td className="p-3">Rapid experimentation, sharing &amp; free GPU</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: ML PROJECT DIRECTORY STRUCTURE */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 5
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            5. ML Project Directory Structure
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <h3 className="text-base sm:text-lg font-bold text-stone-900">5.2 Recommended ML project structure</h3>
          <p>
            Placing all files in one folder leads to confusion over which notebook is final, which dataset was used, and where the model was saved. Use this standard directory layout:
          </p>
          <pre className="p-4 rounded-xl bg-stone-900 text-emerald-400 font-mono text-xs overflow-x-auto leading-relaxed">
{`house-price-prediction/
│
├── .venv/
├── data/
│   ├── raw/
│   │   └── house_prices.csv
│   ├── processed/
│   │   └── cleaned_house_prices.parquet
│   └── external/
├── notebooks/
│   ├── 01_data_exploration.ipynb
│   ├── 02_data_preprocessing.ipynb
│   ├── 03_model_training.ipynb
│   └── 04_model_evaluation.ipynb
├── src/
│   ├── __init__.py
│   ├── data/
│   │   ├── __init__.py
│   │   └── load_data.py
│   ├── preprocessing/
│   │   ├── __init__.py
│   │   └── prepare_data.py
│   ├── models/
│   │   ├── __init__.py
│   │   ├── train.py
│   │   └── predict.py
│   └── evaluation/
│       ├── __init__.py
│       └── evaluate.py
├── models/
│   └── house_price_model.joblib
├── reports/
│   ├── figures/
│   └── evaluation_results.json
├── configs/
│   └── experiment_config.json
├── tests/
│   └── test_preprocessing.py
├── .gitignore
├── README.md
└── requirements.txt`}
          </pre>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">5.4 Separating notebooks from production code</h3>
          <p>
            Notebooks are excellent for experimenting, but reusable logic should live in Python modules (e.g. <code className="px-1.5 py-0.5 rounded bg-stone-100 font-mono text-xs">src/data/load_data.py</code>):
          </p>
          <pre className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`from pathlib import Path
import pandas as pd

def load_dataset(file_path: str | Path) -> pd.DataFrame:
    """Load a CSV dataset and return it as a DataFrame."""
    file_path = Path(file_path)
    if not file_path.exists():
        raise FileNotFoundError(f"Dataset not found: {file_path}")
    return pd.read_csv(file_path)`}
          </pre>
        </div>
      </section>

      {/* SECTION 6: DATASET FORMATS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 6
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            6. Dataset Formats: CSV, JSON, and Parquet
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <h3 className="text-base sm:text-lg font-bold text-stone-900">6.4 CSV vs JSON vs Parquet</h3>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Feature</th>
                  <th className="p-3">CSV</th>
                  <th className="p-3">JSON</th>
                  <th className="p-3">Parquet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Structure</td><td className="p-3">Tabular (Row-based)</td><td className="p-3">Hierarchical / Nested</td><td className="p-3">Columnar</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Human-readable</td><td className="p-3">Yes</td><td className="p-3">Yes</td><td className="p-3">Binary / Limited</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Nested data</td><td className="p-3">Poor support</td><td className="p-3">Native support</td><td className="p-3">Supports complex schemas</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Data types</td><td className="p-3">Inferred text</td><td className="p-3">Basic types</td><td className="p-3">Strict, rich typed schema</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Compression</td><td className="p-3">External gzip only</td><td className="p-3">External gzip only</td><td className="p-3">Built-in (Snappy, ZSTD)</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Analytics</td><td className="p-3">Reads entire rows</td><td className="p-3">High parsing overhead</td><td className="p-3">Reads only requested columns</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Common use</td><td className="p-3">Small datasets, sharing</td><td className="p-3">Web APIs, events</td><td className="p-3">Lakehouses, analytical ML pipelines</td></tr>
              </tbody>
            </table>
          </div>

          <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono space-y-1">
            <span className="font-bold text-stone-700 block">Typical Enterprise Progression:</span>
            <span>External API &rarr; JSON source data &rarr; Data processing &rarr; Cleaned tabular data &rarr; Parquet storage &rarr; Machine Learning training</span>
          </div>
        </div>
      </section>

      {/* SECTION 7: ML LIBRARIES AND ECOSYSTEM */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 7
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            7. Machine Learning Libraries and Ecosystem
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Instead of implementing mathematical optimization and linear algebra from scratch, developers use specialized libraries:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
              <span className="font-bold text-stone-900 block text-sm">NumPy</span>
              <span className="text-stone-600">Multidimensional arrays, vectorized operations, linear algebra, and random number generation.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
              <span className="font-bold text-stone-900 block text-sm">Pandas</span>
              <span className="text-stone-600">Series and DataFrames for data loading, filtering, grouping, merging, and missing-value handling.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
              <span className="font-bold text-stone-900 block text-sm">Matplotlib &amp; Seaborn</span>
              <span className="text-stone-600">Data visualization: scatter plots, histograms, box plots, and correlation matrices.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
              <span className="font-bold text-stone-900 block text-sm">Scikit-learn</span>
              <span className="text-stone-600">Traditional machine learning: classification, regression, clustering, preprocessing, and pipelines.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SCIKIT-LEARN ARCHITECTURE */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 8
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            8. Scikit-learn Architecture: Estimators, Transformers &amp; Pipelines
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Scikit-learn features a consistent unified API design around three core abstractions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
              <div className="font-bold text-stone-900 text-sm mb-1">1. Estimators</div>
              <p className="text-xs text-stone-600 mb-2">Learn parameters from data via <code className="text-orange-700 font-bold">fit(X, y)</code>.</p>
              <span className="text-[11px] font-mono text-stone-500">e.g. LinearRegression, RandomForest</span>
            </div>
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
              <div className="font-bold text-stone-900 text-sm mb-1">2. Transformers</div>
              <p className="text-xs text-stone-600 mb-2">Transform data via <code className="text-orange-700 font-bold">fit_transform(X)</code> &amp; <code className="text-orange-700 font-bold">transform(X)</code>.</p>
              <span className="text-[11px] font-mono text-stone-500">e.g. StandardScaler, OneHotEncoder</span>
            </div>
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
              <div className="font-bold text-stone-900 text-sm mb-1">3. Predictors</div>
              <p className="text-xs text-stone-600 mb-2">Generate target predictions using <code className="text-orange-700 font-bold">predict(X)</code>.</p>
              <span className="text-[11px] font-mono text-stone-500">e.g. predict_proba() for classifications</span>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">8.7 Scikit-learn Pipelines</h3>
          <p>
            A pipeline chains preprocessing transformers and a final estimator into a single atomic object, eliminating duplicate code and safeguarding against <strong>data leakage</strong>:
          </p>
          <pre className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression

pipeline = Pipeline([
    ("imputer", SimpleImputer(strategy="mean")),
    ("scaler", StandardScaler()),
    ("model", LinearRegression())
])

pipeline.fit(X_train, y_train)
predictions = pipeline.predict(X_test)`}
          </pre>
        </div>
      </section>

      {/* SECTION 9: ML EXPERIMENT WORKFLOW */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 9
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            9. The 10-Stage ML Experiment Workflow
          </h2>
        </div>

        <div className="space-y-3 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>A complete, repeatable machine learning experiment adheres to ten distinct stages:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-orange-700">Stage 1 &mdash; Define the Problem</span>: Specify input features, target output, problem type (Regression vs Classification), and business metric.
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-orange-700">Stage 2 &mdash; Collect &amp; Load Data</span>: Acquire source files, verify schema integrity, and load into memory.
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-orange-700">Stage 3 &mdash; Explore (EDA)</span>: Check shape, inspect distributions, detect missing values, and observe correlations.
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-orange-700">Stage 4 &mdash; Prepare Dataset</span>: Imputation, categorical encoding, and feature scaling learned exclusively from training sets.
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-orange-700">Stage 5 &mdash; Split Dataset</span>: Create separate training and testing subsets using reproducible seeds (e.g. 80/20 split).
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-orange-700">Stage 6 &mdash; Select Algorithm</span>: Choose appropriate estimators (Linear Models, Decision Trees, Random Forests).
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-orange-700">Stage 7 &mdash; Train Model</span>: Execute <code className="font-mono">model.fit(X_train, y_train)</code>.
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-orange-700">Stage 8 &mdash; Evaluate Model</span>: Calculate objective test metrics (MAE, MSE, R&sup2;, Precision/Recall).
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-orange-700">Stage 9 &mdash; Save Model</span>: Serialize trained estimator or full pipeline using Joblib (<code className="font-mono">joblib.dump</code>).
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-orange-700">Stage 10 &mdash; Record Experiment</span>: Document parameters, metrics, dataset version, and random state.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: REPRODUCIBILITY & RANDOM SEEDS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 10
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            10. Reproducibility and Random Seeds
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            A random seed initializes a pseudorandom number generator, making pseudorandom splits and stochastic training operations repeatable:
          </p>
          <pre className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`import random
import numpy as np

SEED = 42
random.seed(SEED)
np.random.seed(SEED)`}
          </pre>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">10.6 Why the same seed is not enough</h3>
          <p>
            Two engineers using <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded">random_state=42</code> will still get different numbers if their library versions, OS architecture, or datasets diverge. Maintain a structured experiment configuration:
          </p>
          <pre className="p-4 rounded-xl bg-stone-900 text-amber-300 font-mono text-xs overflow-x-auto leading-relaxed">
{`{
  "experiment_name": "house-price-baseline",
  "random_seed": 42,
  "test_size": 0.2,
  "model": {
    "name": "RandomForestRegressor",
    "n_estimators": 100,
    "max_depth": null
  },
  "metrics": ["mae", "mse", "r2"]
}`}
          </pre>
        </div>
      </section>

      {/* SECTION 11 & 12: PRACTICAL WORKFLOW & TROUBLESHOOTING */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 11 &amp; 12
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            11. End-to-End Demonstration &amp; 12. Troubleshooting
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <h3 className="text-base sm:text-lg font-bold text-stone-900">Common Problems &amp; Solutions</h3>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Problem</th>
                  <th className="p-3">Possible cause</th>
                  <th className="p-3">Recommended solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-rose-700 font-mono">ModuleNotFoundError</td><td className="p-3">Package missing in active interpreter</td><td className="p-3">Activate .venv and verify with <code className="font-mono text-xs">python -m pip list</code></td></tr>
                <tr><td className="p-3 font-semibold text-rose-700 font-mono">Wrong Python version</td><td className="p-3">Multiple Python installations on PATH</td><td className="p-3">Check <code className="font-mono text-xs">sys.executable</code></td></tr>
                <tr><td className="p-3 font-semibold text-rose-700 font-mono">Jupyter cannot find package</td><td className="p-3">Kernel pointing to system Python</td><td className="p-3">Run <code className="font-mono text-xs">%pip install</code> or select virtualenv kernel</td></tr>
                <tr><td className="p-3 font-semibold text-rose-700 font-mono">Dataset file not found</td><td className="p-3">Incorrect relative working directory</td><td className="p-3">Check <code className="font-mono text-xs">os.getcwd()</code> and use <code className="font-mono text-xs">pathlib.Path</code></td></tr>
                <tr><td className="p-3 font-semibold text-rose-700 font-mono">Memory error</td><td className="p-3">Dataset exceeds available RAM</td><td className="p-3">Use <code className="font-mono text-xs">chunksize</code> in read_csv or migrate to Parquet</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 15: INTERVIEW PREPARATION */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 15
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            15. Machine Learning Interview Preparation
          </h2>
        </div>

        <div className="space-y-3 text-stone-700 text-xs sm:text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
              <span className="font-bold text-stone-900 block mb-1">Q: What causes data leakage?</span>
              <p className="text-stone-600">Information from evaluation/test data influencing feature preprocessing or model training. Avoid by fitting transformers on train data only.</p>
            </div>
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
              <span className="font-bold text-stone-900 block mb-1">Q: What is the difference between fit() and transform()?</span>
              <p className="text-stone-600"><code className="font-mono text-xs">fit()</code> calculates transformation parameters (mean, variance) from training data; <code className="font-mono text-xs">transform()</code> applies those parameters to feature sets.</p>
            </div>
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
              <span className="font-bold text-stone-900 block mb-1">Q: Why is Parquet superior for large analytical datasets?</span>
              <p className="text-stone-600">Columnar storage enables projection pruning (reading only needed columns), dictionary encoding, and built-in compression (Snappy), dramatically cutting I/O costs.</p>
            </div>
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
              <span className="font-bold text-stone-900 block mb-1">Q: Why is random_state essential in model initialization?</span>
              <p className="text-stone-600">Algorithms with stochastic components (decision tree splitting, random forests) produce deterministic runs when initialized with the same random seed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 16: MODULE SUMMARY */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 16
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            16. Module Summary &amp; Next Steps
          </h2>
        </div>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          In this module, you established the foundational environment required for machine learning development: Python virtual environments, Jupyter Notebook vs Google Colab, project directory layout, dataset formats (CSV, JSON, Parquet), Scikit-learn architecture (Estimators, Transformers, Predictors, Pipelines), and experiment reproducibility.
        </p>
        <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-orange-900 block uppercase tracking-wider">Next Module</span>
            <span className="text-sm sm:text-base font-bold text-stone-900">Module 2 &mdash; Data Collection, Data Understanding &amp; Exploratory Data Analysis</span>
          </div>
        </div>
      </section>
    </div>
  );
}
