import React from "react";
import { Sparkles, Terminal, FileCode, CheckCircle2, AlertTriangle, Database, Layers, ArrowRight, ExternalLink } from "lucide-react";

export default function MachineLearningNumpySections() {
  return (
    <div className="space-y-10">
      {/* MODULE OVERVIEW & ROADMAP */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Phase 1 &mdash; Data Science &amp; Machine Learning Preparation
          </span>
          <span className="text-xs font-mono text-stone-500">Module 02</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 2: Numerical Computing with NumPy
        </h2>
        <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
          <div className="p-3 rounded-lg bg-orange-50/70 border border-orange-200/80 text-xs text-stone-800">
            <strong>Connection with previous modules:</strong> Module 1 introduced NumPy as part of the Python machine learning ecosystem. This module develops that foundation into practical numerical computing. Python fundamentals and general ML concepts can be reinforced through existing AI Engineering Module 1 and Module 3 lessons rather than repeated here.
          </div>
          <h3 className="text-lg font-bold text-stone-900 mt-4 mb-2">Module overview</h3>
          <p>
            NumPy (Numerical Python) is one of the most important libraries in the Python machine learning ecosystem. It provides the numerical computing foundation used by libraries such as Pandas, Scikit-learn, SciPy, PyTorch, and TensorFlow.
          </p>
          <p>
            Machine learning algorithms perform mathematical operations on data. They calculate averages, multiply matrices, calculate distances, normalize features, update model parameters, and perform statistical computations. NumPy solves the performance and memory limitations of plain Python lists through its multidimensional array structure called <strong>ndarray</strong>.
          </p>
          <h3 className="text-lg font-bold text-stone-900 mt-4 mb-2">Learning outcomes</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-700 font-medium text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Understand NumPy's ndarray architecture and memory representation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Create and manipulate 1D, 2D, and multidimensional arrays.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Master array indexing, slicing, and advanced Boolean/fancy indexing.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Apply broadcasting rules to arrays with different shapes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Use vectorization instead of unnecessary Python loops.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Perform matrix multiplication (@) and dot products.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Calculate statistical measurements and axis reductions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Generate random numbers with reproducible default_rng() generators.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Apply linear algebra (norms, determinants, inverses, SVD, solve).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">&bull;</span>
              <span>Implement ML mathematical foundations (MinMax, Z-score, MAE/MSE, Gradient Descent).</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 1: NDARRAY ARCHITECTURE */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 1
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            1. NumPy ndarray Architecture
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <h3 className="text-base sm:text-lg font-bold text-stone-900">1.2 Python lists versus NumPy arrays</h3>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Feature</th>
                  <th className="p-3">Python list</th>
                  <th className="p-3">NumPy ndarray</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Data types</td><td className="p-3">Mixed heterogeneous types allowed</td><td className="p-3">Single homogeneous dtype</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Numerical ops</td><td className="p-3">Requires loops or list comprehensions</td><td className="p-3">Native vectorized element-wise math</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Broadcasting</td><td className="p-3">Not supported natively</td><td className="p-3">Built-in shape alignment</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Memory buffer</td><td className="p-3">Pointers to fragmented Python objects</td><td className="p-3">Contiguous typed numerical block in C</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Performance</td><td className="p-3">Slow overhead per element</td><td className="p-3">Compiled C/Fortran SIMD performance</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">1.3 Internal properties of an ndarray</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
              <span className="font-bold text-stone-900 block">Shape &amp; ndim</span>
              <p className="text-stone-600 text-xs mt-1">Tuple describing dimension lengths (e.g. <code>(2, 3)</code>) and total dimensions count (<code>ndim</code>).</p>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
              <span className="font-bold text-stone-900 block">dtype &amp; Size</span>
              <p className="text-stone-600 text-xs mt-1">Precise memory representation (e.g. <code>float32</code>, <code>int64</code>) and total elements count (<code>size</code>).</p>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
              <span className="font-bold text-stone-900 block">Strides</span>
              <p className="text-stone-600 text-xs mt-1">Number of bytes to jump in memory to reach the next element in each dimension.</p>
            </div>
          </div>

          <h4 className="font-bold text-stone-900 pt-2">Data Types and Memory Footprint</h4>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-2.5">Data type</th>
                  <th className="p-2.5">Description</th>
                  <th className="p-2.5">Memory per element</th>
                  <th className="p-2.5">1 Million Elements Memory</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-mono text-xs">
                <tr><td className="p-2.5 font-bold text-orange-700">int8 / bool</td><td className="p-2.5 font-sans">8-bit integer / boolean</td><td className="p-2.5">1 byte</td><td className="p-2.5">~1 MB</td></tr>
                <tr><td className="p-2.5 font-bold text-orange-700">int32 / float32</td><td className="p-2.5 font-sans">32-bit single precision</td><td className="p-2.5">4 bytes</td><td className="p-2.5">~4 MB</td></tr>
                <tr><td className="p-2.5 font-bold text-orange-700">int64 / float64</td><td className="p-2.5 font-sans">64-bit double precision</td><td className="p-2.5">8 bytes</td><td className="p-2.5">~8 MB</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 2: ARRAY CREATION & MANIPULATION */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            2. Array Creation, Reshaping &amp; Manipulation
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>NumPy provides dedicated constructors and dimensional manipulation tools:</p>
          <pre className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`import numpy as np

# Initializers
zeros = np.zeros((3, 4), dtype=np.float32)   # 3 rows, 4 cols of 0.0
ones = np.ones((2, 3), dtype=np.int32)       # 2 rows, 3 cols of 1
identity = np.eye(4)                         # 4x4 Identity matrix
seq_step = np.arange(0, 10, 2)               # [0, 2, 4, 6, 8] (excludes stop)
seq_space = np.linspace(0, 1, 5)             # [0.0, 0.25, 0.5, 0.75, 1.0]

# Reshaping & Automatic Inferred Dimension (-1)
arr = np.arange(12)
reshaped = arr.reshape(3, -1)                 # Infers (3, 4) automatically

# Flattening: Copy vs View
flat_copy = reshaped.flatten()               # Always returns a copy
flat_view = reshaped.ravel()                 # Returns view when possible

# Transposition & Stacking
transposed = reshaped.T                      # Switches axes (4, 3)
stacked = np.vstack([seq_step, seq_step])    # Vertical stacking into 2D`}
          </pre>
        </div>
      </section>

      {/* SECTION 3 & 4: INDEXING & BROADCASTING */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 3 &amp; 4
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            3. Indexing &amp; 4. Broadcasting Mechanics
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <h3 className="text-base sm:text-lg font-bold text-stone-900">Broadcasting Rules</h3>
          <p>
            When performing operations between arrays of different dimensions, NumPy compares dimensions <strong>from right to left</strong>. Dimensions are compatible if:
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1">
            <li>They are strictly equal in length.</li>
            <li>One of them is 1 (the size 1 dimension is stretched virtually to match).</li>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
              <span className="font-bold text-emerald-900 block mb-1">Compatible: (3, 4) and (4,)</span>
              <p className="text-emerald-800">Trailing dimension matches (4 == 4). Operates across all 3 rows seamlessly.</p>
            </div>
            <div className="p-3 bg-rose-50 rounded-xl border border-rose-200">
              <span className="font-bold text-rose-900 block mb-1">Incompatible: (3, 4) and (3,)</span>
              <p className="text-rose-800">Trailing dimensions 4 and 3 disagree and neither is 1 &rarr; Raises <code>ValueError: operands could not be broadcast together</code>.</p>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">Boolean Masking &amp; Filtering</h3>
          <pre className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`# Multi-condition Boolean Masking (must use & and | with parentheses)
X = np.array([10, 25, 30, 45, 60, 75])
filtered = X[(X >= 25) & (X <= 60)]          # [25, 30, 45, 60]

# Conditional Replacement with np.where
labels = np.where(X >= 50, "Pass", "Fail")`}
          </pre>
        </div>
      </section>

      {/* SECTION 5 & 6: VECTORIZATION & MATRIX OPERATIONS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 5 &amp; 6
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            5. Vectorization &amp; 6. Matrix Operations
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Vectorization eliminates Python-level iteration by executing compiled C SIMD routines.
          </p>

          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
            <span className="font-bold text-stone-900 text-sm block">Matrix Multiplication: <code>@</code> vs <code>*</code></span>
            <ul className="text-xs text-stone-600 space-y-1">
              <li><code>A * B</code>: <strong>Element-wise multiplication</strong> (Hadamard product). Both matrices must have identical or broadcastable shapes.</li>
              <li><code>A @ B</code> (or <code>np.matmul(A, B)</code>): <strong>True matrix multiplication</strong>. Requires inner dimensions to align: <code>(m, n) @ (n, p) &rarr; (m, p)</code>.</li>
            </ul>
          </div>

          <pre className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`# Model Prediction via Matrix Multiplication: y_hat = Xw + b
X = np.array([[1200, 3], [1500, 3], [2200, 4]])  # 3 houses, 2 features
w = np.array([4500, 150000])                      # Weights vector (2,)
b = 50000                                         # Bias scalar

predictions = X @ w + b                           # Shape: (3,)`}
          </pre>
        </div>
      </section>

      {/* SECTION 7 & 8: STATISTICAL & RANDOM OPERATIONS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 7 &amp; 8
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            7. Statistics, Axis Reductions &amp; 8. Random Sampling
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
              <span className="font-bold text-stone-900 block mb-1">Axis 0 vs Axis 1</span>
              <p className="text-stone-600 text-xs"><code>axis=0</code> collapses across rows (computes statistics per column/feature). <code>axis=1</code> collapses across columns (computes statistics per row/sample).</p>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
              <span className="font-bold text-stone-900 block mb-1">Modern Random Generators</span>
              <p className="text-stone-600 text-xs">Always use <code>np.random.default_rng(seed)</code> rather than legacy <code>np.random.seed()</code> for independent state isolation.</p>
            </div>
          </div>

          <pre className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`rng = np.random.default_rng(42)

# Synthetic Normal Distribution (Gaussian Bell Curve)
features = rng.normal(loc=0.0, scale=1.0, size=(1000, 5))

# Robust NaN handling
mean_safe = np.nanmean(features, axis=0, keepdims=True)`}
          </pre>
        </div>
      </section>

      {/* SECTION 9 & 11: LINEAR ALGEBRA & ML MATHEMATICS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 9 &amp; 11
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            9. Linear Algebra &amp; 11. Machine Learning Mathematics in NumPy
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <h3 className="text-base sm:text-lg font-bold text-stone-900">Essential Machine Learning Formulas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-orange-700 block mb-1">1. Min-Max Normalization</span>
              <code className="block font-mono text-stone-800 mb-1">X_norm = (X - min) / (max - min)</code>
              <span className="text-stone-500">Compresses all feature values into range [0, 1].</span>
            </div>
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-orange-700 block mb-1">2. Standardization (Z-Score)</span>
              <code className="block font-mono text-stone-800 mb-1">Z = (X - mean) / std</code>
              <span className="text-stone-500">Centers mean at 0 with standard deviation of 1.</span>
            </div>
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-orange-700 block mb-1">3. Euclidean Distance (Norm)</span>
              <code className="block font-mono text-stone-800 mb-1">dist = np.linalg.norm(A - B, axis=1)</code>
              <span className="text-stone-500">Fundamental for KNN, K-Means clustering, and embeddings.</span>
            </div>
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-orange-700 block mb-1">4. Stable Softmax &amp; Cross-Entropy</span>
              <code className="block font-mono text-stone-800 mb-1">shifted = x - np.max(x, axis=-1, keepdims=True)</code>
              <span className="text-stone-500">Prevents exp() overflow when converting logits to probabilities.</span>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">Vectorized Gradient Descent from Scratch</h3>
          <pre className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`# Analytical Gradient Descent for Linear Regression: J(w) = 1/n * sum(Xw - y)^2
for epoch in range(epochs):
    predictions = X_b @ weights
    errors = predictions - y
    gradients = (2 / n) * (X_b.T @ errors)
    weights -= learning_rate * gradients`}
          </pre>
        </div>
      </section>

      {/* SECTION 12 & 13: PRACTICAL LAB & TROUBLESHOOTING */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 12 &amp; 13
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            12. Practical Engine Lab &amp; 13. Common NumPy Errors
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Problem</th>
                  <th className="p-3">Cause</th>
                  <th className="p-3">Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-rose-700 font-mono">Broadcasting error</td><td className="p-3">Dimensions do not match and neither is 1</td><td className="p-3">Inspect shapes with <code>.shape</code> and use <code>reshape()</code> or <code>np.newaxis</code></td></tr>
                <tr><td className="p-3 font-semibold text-rose-700 font-mono">Shape mismatch in @</td><td className="p-3">Inner dimensions do not align: (m, n) @ (k, p) where n != k</td><td className="p-3">Transpose matrix (<code>X.T</code>) so inner dimensions match</td></tr>
                <tr><td className="p-3 font-semibold text-rose-700 font-mono">Unexpected mutation</td><td className="p-3">Modified a slice (which is a view sharing memory)</td><td className="p-3">Use <code>arr[slice].copy()</code> when an independent array is required</td></tr>
                <tr><td className="p-3 font-semibold text-rose-700 font-mono">Floating precision quirks</td><td className="p-3">0.1 + 0.2 != 0.3 in IEEE-754 representation</td><td className="p-3">Use <code>np.allclose(a, b)</code> or <code>np.isclose()</code> for approximate comparisons</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 16: INTERVIEW PREPARATION */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 16
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            16. Machine Learning Interview Preparation
          </h2>
        </div>

        <div className="space-y-3 text-stone-700 text-xs sm:text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
              <span className="font-bold text-stone-900 block mb-1">Q: What are NumPy strides?</span>
              <p className="text-stone-600">The tuple of bytes to step in each dimension when traversing memory. Slicing modifies strides without copying data buffer memory.</p>
            </div>
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
              <span className="font-bold text-stone-900 block mb-1">Q: Why prefer np.linalg.solve() over inv()?</span>
              <p className="text-stone-600"><code>solve()</code> computes LU decomposition directly, being computationally faster and numerically far more stable than calculating the full inverse.</p>
            </div>
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
              <span className="font-bold text-stone-900 block mb-1">Q: Why subtract max(x) in Softmax?</span>
              <p className="text-stone-600">Prevents numerical overflow in <code>np.exp(x)</code> when input logits contain large numbers (e.g. <code>e^1000 = inf</code>).</p>
            </div>
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
              <span className="font-bold text-stone-900 block mb-1">Q: What is the difference between flatten() and ravel()?</span>
              <p className="text-stone-600"><code>flatten()</code> always allocates a new copy; <code>ravel()</code> returns a flattened view sharing memory whenever contiguous.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 17: MODULE SUMMARY */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 17
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            17. Module Summary &amp; Upcoming Roadmap
          </h2>
        </div>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          You have mastered NumPy's ndarray architecture, indexing, broadcasting, vectorization, matrix algebra, statistical reductions, and the translation of mathematical formulas into vectorized ML code.
        </p>
        <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-orange-900 block uppercase tracking-wider">Upcoming Module</span>
            <span className="text-sm sm:text-base font-bold text-stone-900">Module 3 &mdash; Data Manipulation and Analysis with Pandas</span>
          </div>
        </div>
      </section>
    </div>
  );
}
