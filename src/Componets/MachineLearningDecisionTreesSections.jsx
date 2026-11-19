import React from "react";
import {
  TrendingUp,
  Activity,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  FileCode,
  Table,
  Cpu,
  Sliders,
  BarChart2,
  Target,
  Calculator,
  Compass,
  Check,
  Zap,
  ShieldCheck,
  GitBranch,
  Split,
  Binary,
  PieChart,
  Network,
  Scissors,
  HelpCircle,
} from "lucide-react";

export default function MachineLearningDecisionTreesSections() {
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
          In Modules 5 through 7, you learned linear regression and logistic classification models that express predictions through continuous algebraic equations. However, many real-world operational decisions do not follow linear combinations: credit approval systems, medical triage workflows, and underwriting policies evaluate sequential logical conditions. Decision trees learn hierarchical rules directly from data, recursively partitioning feature space into homogeneous rectangular regions.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Master decision tree architecture: root nodes, decision nodes, branches, and terminal leaves.",
            "Understand recursive partitioning algorithms and greedy feature threshold selection.",
            "Calculate and interpret Shannon Entropy H(S) and Information Gain (IG).",
            "Calculate and interpret Gini Impurity and Gini impurity reduction.",
            "Distinguish Classification Trees (majority vote) from Regression Trees (mean target & MSE).",
            "Understand why decision trees produce piecewise-constant predictions and do not extrapolate.",
            "Control model complexity and combat overfitting using pre-pruning (max_depth, min_samples_leaf).",
            "Apply post-pruning using minimal cost-complexity pruning (ccp_alpha) along pruning paths.",
            "Extract inspectable human-readable decision rules using Scikit-learn's export_text().",
            "Evaluate feature importance using impurity reduction and compare with permutation importance.",
            "Understand why decision trees do not require feature scaling or normalization.",
            "Build complete end-to-end projects: Breast Cancer Classification and Housing Price Regression.",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-stone-700 text-xs sm:text-sm font-medium">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: MATHEMATICAL PREREQUISITES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 02
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Foundational Math</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          2. Mathematical Prerequisites &mdash; Concepts Reused
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Decision trees synthesize mathematical and computational concepts established across our earlier curriculum:
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-700 font-bold font-mono">
                <th className="p-3">Prior Module</th>
                <th className="p-3">Core Concept</th>
                <th className="p-3">Operational Application in Decision Trees</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600">
              <tr>
                <td className="p-3 font-semibold text-stone-900">AI Engineering M2</td>
                <td className="p-3">Probability, Base-2 Logarithms &amp; Summation</td>
                <td className="p-3 font-mono text-orange-700">Entropy H(S) = -Σ pᵢ log₂(pᵢ), Gini = 1 - Σ pᵢ²</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Machine Learning M3</td>
                <td className="p-3">Pandas DataFrames &amp; Filtering</td>
                <td className="p-3">Partitioning datasets into left and right subset child dataframes</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Machine Learning M4</td>
                <td className="p-3">Distribution Moments &amp; Class Proportions</td>
                <td className="p-3">Calculating class proportions pᵢ = count(class i) / total samples</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Machine Learning M5</td>
                <td className="p-3">Mean Squared Error &amp; Residuals</td>
                <td className="p-3 font-mono text-orange-700">Regression split impurity: MSE(S) = (1/N) Σ (yᵢ - ȳ)²</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Machine Learning M7</td>
                <td className="p-3">Discrete Categories &amp; Probabilities</td>
                <td className="p-3">Leaf prediction via majority class and leaf class proportion vector</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3: WHAT IS A DECISION TREE */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 03
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Conceptual Model</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          3. What is a Decision Tree?
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          A Decision Tree is a non-parametric supervised learning algorithm that represents learned knowledge as a hierarchical tree of conditional rules. Beginning at the root node, each decision evaluates a single feature against a learned threshold, routing the instance down corresponding branches until arriving at a terminal leaf node that provides the prediction.
        </p>

        {/* 3.1 & 3.2 Real-World Loan Example & Traversal */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="text-xs font-bold font-mono text-stone-900 uppercase">3.1 Real-World Loan Approval Example</h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
              Suppose a bank reviews loan applicants using annual income, credit score, and debt level. Instead of computing a weighted sum βᵀX, a tree tests conditions sequentially:
            </p>
            <div className="mt-3 p-3 bg-white rounded-xl border border-stone-200 font-mono text-xs text-stone-800 space-y-1">
              <div>1. Is Annual Income ≥ ₹6 Lakh?</div>
              <div className="pl-4 text-rose-700">├── No: Reject Loan</div>
              <div className="pl-4 text-stone-900">└── Yes: Check Credit Score</div>
              <div className="pl-8 text-rose-700">├── Score &lt; 700: Under Manual Review</div>
              <div className="pl-8 text-emerald-700">└── Score ≥ 700: Approve Loan</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="text-xs font-bold font-mono text-stone-900 uppercase">3.2 Rectangular Decision Regions</h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
              Because standard decision trees split one feature at a time perpendicular to coordinate axes (e.g. x₁ &le; 4.0), they carve the feature space into hyper-rectangles (boxes). Inside each box, the model assigns a single constant prediction (majority class or regional mean).
            </p>
            <div className="mt-3 p-3 bg-orange-50 border border-orange-200 rounded-xl text-xs text-orange-900 font-medium">
              Contrast: Linear regression draws a smooth diagonal line; a decision tree draws staircase-like horizontal and vertical boundaries.
            </div>
          </div>
        </div>

        {/* 3.4 Model Comparison Table */}
        <div className="mt-6">
          <h3 className="text-base font-bold text-stone-900 mb-2">3.4 Supervised Learning Architecture Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50 text-stone-700 font-bold font-mono">
                  <th className="p-3">Model</th>
                  <th className="p-3">Core Representation</th>
                  <th className="p-3">Decision Boundary / Output</th>
                  <th className="p-3">Interpretability</th>
                  <th className="p-3">Feature Scaling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-600">
                <tr>
                  <td className="p-3 font-semibold text-stone-900">Linear Regression</td>
                  <td className="p-3">ŷ = β₀ + βᵀX</td>
                  <td className="p-3">Continuous hyperplane</td>
                  <td className="p-3">Coefficients β</td>
                  <td className="p-3">Mandatory with regularization</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-stone-900">Logistic Regression</td>
                  <td className="p-3">P(y=1) = σ(β₀ + βᵀX)</td>
                  <td className="p-3">Linear decision boundary</td>
                  <td className="p-3">Odds ratios (e^β)</td>
                  <td className="p-3">Mandatory with regularization</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-stone-900">Polynomial Regression</td>
                  <td className="p-3">ŷ = β₀ + β₁x + β₂x²</td>
                  <td className="p-3">Curved polynomial boundary</td>
                  <td className="p-3">Higher-order weights</td>
                  <td className="p-3">Critical (powers explode)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-orange-700">Decision Tree</td>
                  <td className="p-3">Recursive If-Then-Else Rules</td>
                  <td className="p-3">Axis-aligned rectangular regions</td>
                  <td className="p-3 font-semibold text-emerald-800">White-Box Decision Paths</td>
                  <td className="p-3 font-bold text-emerald-700">Not Required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4: DECISION TREE ARCHITECTURE */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 04
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Tree Anatomy</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          4. Decision Tree Architecture
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          A decision tree is composed of four distinct topological primitives:
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">1. Root Node</span>
            <p className="mt-1 text-xs text-stone-600">The uppermost node containing 100% of the training dataset before any partitioning occurs. Selected to achieve the maximum immediate impurity reduction.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">2. Decision Nodes</span>
            <p className="mt-1 text-xs text-stone-600">Internal nodes testing a specific feature threshold (e.g. Credit Score &ge; 700). Evaluates incoming observations and routes them to left or right sub-trees.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">3. Branches</span>
            <p className="mt-1 text-xs text-stone-600">Directed edges connecting parent nodes to children, representing Boolean outcomes of the split condition (True vs. False).</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">4. Leaf Nodes (Terminal)</span>
            <p className="mt-1 text-xs text-stone-600">Terminal nodes that perform no further splits. They store the final prediction: majority class in classification, or target mean in regression.</p>
          </div>
        </div>

        {/* Tree Traversal Diagram */}
        <div className="mt-6 p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
          <div className="text-stone-400 mb-2"># Tree Traversal &amp; Root-to-Leaf Decision Path</div>
          <div>[Root: Annual Income &ge; ₹6,00,000]</div>
          <div>&nbsp;&nbsp;├── [False] ──&gt; (Leaf 1: REJECT LOAN) &mdash; Samples: 450, P(Reject): 100%</div>
          <div>&nbsp;&nbsp;└── [True] &nbsp;──&gt; [Decision Node: Credit Score &ge; 700]</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── [False] ──&gt; (Leaf 2: MANUAL REVIEW) &mdash; Samples: 150, Mean: ₹4.5 Lakh</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [True] &nbsp;──&gt; (Leaf 3: APPROVE LOAN)  &mdash; Samples: 600, P(Approve): 98%</div>
        </div>
      </section>

      {/* SECTION 5: RECURSIVE PARTITIONING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 05
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Core Algorithm</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          5. Recursive Partitioning &amp; Greedy Splitting
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Recursive partitioning is the core algorithmic mechanism behind tree induction. It is a <em>greedy top-down heuristic</em>: at each step, the algorithm selects the feature and threshold that maximizes immediate impurity reduction without planning future splits.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-2">
            <h3 className="font-bold text-stone-900 font-mono uppercase">5.4 Numerical Feature Splitting</h3>
            <p>
              For a continuous numerical feature (e.g. Income), the algorithm sorts the unique values: [₹2L, ₹3L, ₹4L, ₹5L, ₹6L...].
            </p>
            <p>
              It tests candidate midpoints between adjacent sorted values: [₹2.5L, ₹3.5L, ₹4.5L, ₹5.5L...]. For each candidate, it computes the weighted impurity of the resulting left and right child subsets and selects the threshold with maximum reduction.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-2">
            <h3 className="font-bold text-stone-900 font-mono uppercase">5.8 The Extrapolation Limitation</h3>
            <p>
              Because decision tree leaves store fixed regional constants, <strong>standard regression trees cannot extrapolate</strong> trends outside the range observed during training.
            </p>
            <p className="text-rose-800">
              Example: If the maximum house area in training was 3,500 sq.ft. (predicting ₹1.2 Cr), an input property of 10,000 sq.ft. will simply fall into the same rightmost leaf and predict ₹1.2 Cr rather than extrapolating upward.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: SPLITTING CRITERIA */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 06
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Mathematics</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          6. Splitting Criteria &amp; Impurity Reduction
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          A splitting criterion measures the homogeneity of observations in a node. A split is judged by the <em>impurity reduction</em> it achieves when dividing parent node S (size N) into left child L (size N_L) and right child R (size N_R):
        </p>

        <div className="mt-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
          <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">Universal Weighted Impurity Equation</div>
          <div className="text-lg sm:text-xl font-black font-mono text-orange-700">
            I_children = (N_L / N) &middot; I_L + (N_R / N) &middot; I_R
          </div>
          <div className="mt-2 text-sm font-mono text-stone-800 font-bold">
            Impurity Reduction = I_parent - I_children
          </div>
        </div>
      </section>

      {/* SECTION 7: ENTROPY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 07
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Information Theory</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          7. Shannon Entropy
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Shannon entropy measures the uncertainty or disorder in a distribution of categorical labels. If all observations in a node belong to one class, uncertainty is 0.0 bits. If classes are equally split 50/50, uncertainty reaches maximum disorder: 1.000 bits.
        </p>

        <div className="mt-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
          <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">Entropy Formula (Base 2)</div>
          <div className="text-lg sm:text-xl font-black font-mono text-orange-700">
            H(S) = - Σ [ pᵢ &middot; log₂(pᵢ) ] &nbsp;(summed across classes i=1 to K)
          </div>
          <p className="mt-2 text-xs text-stone-500">By convention, if pᵢ = 0, pᵢ log₂(pᵢ) = 0.</p>
        </div>

        {/* Step-by-Step Worked Example */}
        <div className="mt-6 p-5 rounded-2xl bg-stone-50 border border-stone-200">
          <h3 className="text-xs font-bold font-mono text-stone-900 uppercase">7.3 Worked Calculation &mdash; 6 Approved, 4 Rejected (Total = 10)</h3>
          <div className="mt-3 text-xs sm:text-sm font-mono text-stone-700 space-y-1.5">
            <div>p(Approved) = 6/10 = 0.60 &nbsp;|&nbsp; p(Rejected) = 4/10 = 0.40</div>
            <div>log₂(0.60) ≈ -0.7370 &nbsp;|&nbsp; log₂(0.40) ≈ -1.3219</div>
            <div>H(S) = - [ 0.60 &middot; (-0.7370) + 0.40 &middot; (-1.3219) ]</div>
            <div>H(S) = - [ -0.4422 - 0.5288 ] = <strong>0.971 bits</strong></div>
          </div>
        </div>
      </section>

      {/* SECTION 8: INFORMATION GAIN */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 08
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Splitting Metric</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          8. Information Gain
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Information Gain measures how many bits of uncertainty are eliminated by partitioning a parent node into child subsets:
        </p>

        <div className="mt-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
          <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">Information Gain Formula</div>
          <div className="text-lg sm:text-xl font-black font-mono text-orange-700">
            IG(S, feature) = H(S) - [ (|S_L| / |S|) &middot; H(S_L) + (|S_R| / |S|) &middot; H(S_R) ]
          </div>
        </div>

        <div className="mt-6 p-5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-2">
          <h3 className="font-bold text-stone-900 font-mono uppercase">8.3 Worked Numerical Example</h3>
          <p>Parent (10 samples, 6 Approved, 4 Rejected): H(Parent) = 0.971 bits.</p>
          <p>Split on <code>Income &ge; ₹6L</code> yields:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Left Child (4 samples, 4 Approved, 0 Rejected): Completely pure &rarr; H(Left) = <strong>0.000 bits</strong>.</li>
            <li>Right Child (6 samples, 2 Approved, 4 Rejected): H(Right) = <strong>0.918 bits</strong>.</li>
          </ul>
          <p className="font-mono text-stone-900">
            Weighted Child Entropy = (4/10)&middot;0.000 + (6/10)&middot;0.918 = 0.551 bits.<br />
            <strong>Information Gain = 0.971 - 0.551 = 0.420 bits.</strong>
          </p>
        </div>
      </section>

      {/* SECTION 9: GINI IMPURITY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 09
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Cart Metric</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          9. Gini Impurity
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Gini impurity measures the probability that a randomly chosen element from a node would be incorrectly labeled if randomly classified according to the distribution of labels in that node. It avoids expensive base-2 logarithm computations, making it the default criterion in CART and Scikit-learn.
        </p>

        <div className="mt-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
          <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">Gini Impurity Formula</div>
          <div className="text-lg sm:text-xl font-black font-mono text-orange-700">
            Gini(S) = 1 - Σ pᵢ² &nbsp;(summed across i=1 to K)
          </div>
          <p className="mt-2 text-xs text-stone-500">For two classes: Gini = 1 - (p₁² + p₀²) = 2 &middot; p₁ &middot; (1 - p₁). Maximum = 0.50.</p>
        </div>

        {/* 9.3 Worked Calculation */}
        <div className="mt-6 p-5 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs sm:text-sm text-stone-700 space-y-1.5">
          <div className="font-bold text-stone-900 font-sans uppercase">9.3 Worked Calculation (6 Approved, 4 Rejected)</div>
          <div>p₁ = 0.60 &nbsp;|&nbsp; p₀ = 0.40</div>
          <div>Gini = 1 - (0.60² + 0.40²) = 1 - (0.36 + 0.16) = 1 - 0.52 = <strong>0.480</strong></div>
        </div>
      </section>

      {/* SECTION 10: ENTROPY VS GINI */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Criterion Head-to-Head</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          10. Comparing Entropy and Gini Impurity
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-700 font-bold font-mono">
                <th className="p-3">Class Distribution (Pos / Neg)</th>
                <th className="p-3">Entropy H(S) [bits]</th>
                <th className="p-3">Gini Impurity</th>
                <th className="p-3">Node State</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600 font-mono">
              <tr>
                <td className="p-3 font-semibold text-stone-900">10 / 0 (Pure)</td>
                <td className="p-3 text-emerald-700 font-bold">0.000</td>
                <td className="p-3 text-emerald-700 font-bold">0.000</td>
                <td className="p-3 font-sans text-xs">Completely pure (terminal leaf)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">9 / 1</td>
                <td className="p-3">0.469</td>
                <td className="p-3">0.180</td>
                <td className="p-3 font-sans text-xs">High purity</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">8 / 2</td>
                <td className="p-3">0.722</td>
                <td className="p-3">0.320</td>
                <td className="p-3 font-sans text-xs">Moderate purity</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">6 / 4</td>
                <td className="p-3">0.971</td>
                <td className="p-3">0.480</td>
                <td className="p-3 font-sans text-xs">High disorder</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">5 / 5 (Balanced)</td>
                <td className="p-3 text-rose-700 font-bold">1.000</td>
                <td className="p-3 text-rose-700 font-bold">0.500</td>
                <td className="p-3 font-sans text-xs">Maximum impurity (coin flip)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 11 & 12: CLASSIFICATION VS REGRESSION TREES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 11 &amp; 12
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Tree Types</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          11 &amp; 12. Classification Trees vs. Regression Trees
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Decision trees natively support both discrete categorical targets (Classification) and continuous numerical values (Regression):
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">Classification Trees (DecisionTreeClassifier)</span>
            <ul className="text-xs sm:text-sm text-stone-700 space-y-2">
              <li><strong>Target:</strong> Discrete class labels (e.g. Malignant vs Benign).</li>
              <li><strong>Splitting Metric:</strong> Gini Impurity, Entropy, or Log-loss.</li>
              <li><strong>Leaf Prediction:</strong> The majority class (mode) of samples reaching the leaf.</li>
              <li><strong>Probability:</strong> <code>predict_proba()</code> returns class proportions in that leaf.</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">Regression Trees (DecisionTreeRegressor)</span>
            <ul className="text-xs sm:text-sm text-stone-700 space-y-2">
              <li><strong>Target:</strong> Continuous real numbers (e.g. Housing Prices).</li>
              <li><strong>Splitting Metric:</strong> Mean Squared Error (variance reduction) or MAE.</li>
              <li><strong>Leaf Prediction:</strong> The mean target value ȳ (under squared error) or median (under MAE).</li>
              <li><strong>Variance Equation:</strong> MSE(S) = (1/N) Σ (yᵢ - ȳ)².</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 13: TREE DEPTH & COMPLEXITY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Complexity Controls</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          13. Tree Depth, Model Complexity &amp; Overfitting
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          An unrestricted decision tree will continue partitioning until every single leaf is completely pure (samples = 1), memorizing sample noise and producing 100% training accuracy with disastrous test generalization.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-700 font-bold font-mono">
                <th className="p-3">Scikit-learn Hyperparameter</th>
                <th className="p-3">Default</th>
                <th className="p-3">Operational Role in Controlling Overfitting</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600">
              <tr>
                <td className="p-3 font-mono font-bold text-stone-900">max_depth</td>
                <td className="p-3 font-mono">None</td>
                <td className="p-3">Limits the maximum path length from root to any leaf; the strongest pre-pruning control.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-stone-900">min_samples_split</td>
                <td className="p-3 font-mono">2</td>
                <td className="p-3">Minimum samples required in an internal node before splitting is permitted.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-stone-900">min_samples_leaf</td>
                <td className="p-3 font-mono">1</td>
                <td className="p-3">Guarantees that every child leaf contains at least k observations, smoothing predictions.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-stone-900">max_leaf_nodes</td>
                <td className="p-3 font-mono">None</td>
                <td className="p-3">Grows the tree in a best-first search manner up to a maximum number of terminal leaves.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-stone-900">min_impurity_decrease</td>
                <td className="p-3 font-mono">0.0</td>
                <td className="p-3">Rejects any candidate split that does not improve weighted impurity by at least this delta.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-orange-700">ccp_alpha</td>
                <td className="p-3 font-mono">0.0</td>
                <td className="p-3">Cost-complexity penalty parameter for post-pruning subtrees.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 14 & 15: PRE-PRUNING VS POST-PRUNING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 14 &amp; 15
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Pruning Strategies</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          14 &amp; 15. Pre-Pruning versus Minimal Cost-Complexity Post-Pruning
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Tree regularization is achieved through two complementary paradigms: early stopping (pre-pruning) and retrospective branch trimming (post-pruning).
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs sm:text-sm text-stone-700">
            <h3 className="font-bold text-stone-900 font-mono uppercase">Pre-Pruning (Early Stopping)</h3>
            <p>Applied <strong>during tree construction</strong> by restricting expansion whenever stopping criteria (such as <code>max_depth=4</code> or <code>min_samples_leaf=10</code>) are met.</p>
            <p className="text-stone-500"><strong>Pros:</strong> Fast training; low memory footprint.<br /><strong>Cons:</strong> Greedy heuristic can stop prematurely before discovering valuable multi-feature combinations (the XOR problem).</p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs sm:text-sm text-stone-700">
            <h3 className="font-bold text-stone-900 font-mono uppercase">Post-Pruning (Cost-Complexity)</h3>
            <p>Allows the tree to grow fully, then prunes subtrees that minimize the regularized cost function:</p>
            <div className="p-2 bg-white rounded-lg border border-stone-200 font-mono text-orange-700 font-bold text-center">
              R_α(T) = R(T) + α &middot; |T̃|
            </div>
            <p className="text-stone-500">Where R(T) is total leaf impurity, |T̃| is the number of terminal leaves, and α (ccp_alpha) is the penalty on tree size.</p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
          <div className="text-stone-400 mb-2"># Post-pruning workflow in Scikit-learn with cost_complexity_pruning_path</div>
          <code>
            tree = DecisionTreeClassifier(random_state=42)<br />
            path = tree.cost_complexity_pruning_path(X_train, y_train)<br />
            ccp_alphas = path.ccp_alphas[:-1]  # Exclude maximum alpha which prunes entire tree<br /><br />
            # Find optimal alpha via cross-validation<br />
            cv_scores = [cross_val_score(DecisionTreeClassifier(ccp_alpha=a, random_state=42), X_train, y_train, cv=5).mean() for a in ccp_alphas]<br />
            best_alpha = ccp_alphas[np.argmax(cv_scores)]<br />
            pruned_model = DecisionTreeClassifier(ccp_alpha=best_alpha, random_state=42).fit(X_train, y_train)
          </code>
        </div>
      </section>

      {/* SECTION 16: INTERPRETABILITY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Explainable AI</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          16. Decision Tree Interpretability &amp; Feature Importance
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Decision trees are among the few supervised algorithms providing true <em>white-box interpretability</em>. Scikit-learn exposes two primary mechanisms for inspecting fitted decision structures:
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs sm:text-sm text-stone-700">
            <h3 className="font-bold text-stone-900 font-mono uppercase">Rule Extraction &amp; Decision Paths</h3>
            <p><code>export_text(model, feature_names=...)</code> translates the binary tree into nested if-then-else conditions.</p>
            <p><code>model.decision_path(sample)</code> returns the exact sequence of node IDs traversed by an individual test observation.</p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs sm:text-sm text-stone-700">
            <h3 className="font-bold text-stone-900 font-mono uppercase">Impurity vs. Permutation Importance</h3>
            <p><strong>Impurity Importance:</strong> Sums total weighted impurity reduction attributed to each feature across all splits. (Can over-favor continuous features with many candidate thresholds).</p>
            <p><strong>Permutation Importance:</strong> Evaluates performance degradation when a feature column is randomly shuffled on held-out test data.</p>
          </div>
        </div>
      </section>

      {/* SECTION 17: SCIKIT-LEARN IMPLEMENTATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">API Guide</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          17. Implementing Decision Trees in Scikit-learn
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Unlike linear and regularized estimators, decision trees are <strong>invariant to monotonic feature scaling</strong>. Dividing Income by ₹10,000 does not alter the relative order of split points. Therefore, StandardScaler and MinMaxScaler are unnecessary.
        </p>

        <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm">
          <strong>Categorical Encoding Requirement:</strong> Scikit-learn's standard <code>DecisionTreeClassifier</code> and <code>DecisionTreeRegressor</code> require numerical feature arrays. Categorical text columns (e.g. City = "Mumbai") must be encoded with <code>OneHotEncoder</code> or <code>OrdinalEncoder</code> before fitting.
        </div>
      </section>

      {/* SECTION 18: COMPLETE PROJECT 1 - BREAST CANCER */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Complete Classification Project</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          18. Complete Practical Project &mdash; Breast Cancer Classification
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          This 12-step practical project trains a pruned classification tree on the Wisconsin Diagnostic Breast Cancer dataset:
        </p>

        <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
          <code>
            from sklearn.datasets import load_breast_cancer<br />
            from sklearn.model_selection import train_test_split<br />
            from sklearn.tree import DecisionTreeClassifier, plot_tree, export_text<br />
            from sklearn.metrics import classification_report, confusion_matrix, accuracy_score<br />
            import pandas as pd<br /><br />
            # 1. Load data<br />
            data = load_breast_cancer()<br />
            X = pd.DataFrame(data.data, columns=data.feature_names)<br />
            y = data.target  # 0: Malignant, 1: Benign<br /><br />
            # 2. Stratified train-test split<br />
            X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=42, stratify=y)<br /><br />
            # 3. Fit pre-pruned classification tree<br />
            model = DecisionTreeClassifier(criterion="gini", max_depth=4, min_samples_split=10, min_samples_leaf=5, random_state=42)<br />
            model.fit(X_train, y_train)<br /><br />
            # 4. Evaluation<br />
            preds = model.predict(X_test)<br />
            print(f"Test Accuracy: &#123;accuracy_score(y_test, preds):.4f&#125;")<br />
            print("\nClassification Report:")<br />
            print(classification_report(y_test, preds, target_names=data.target_names))<br /><br />
            # 5. Extract rules &amp; feature importance<br />
            print("Extracted Decision Rules:\n", export_text(model, feature_names=list(X.columns))[:500])<br />
            importances = pd.Series(model.feature_importances_, index=X.columns).sort_values(ascending=False)<br />
            print("\nTop 5 Informative Features:\n", importances.head(5))
          </code>
        </div>
      </section>

      {/* SECTION 19: COMPLETE PROJECT 2 - HOUSING PRICE REGRESSION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Complete Regression Project</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          19. Complete Practical Project &mdash; Housing Price Regression Trees
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          This 14-step project predicts real-estate property valuations using a <code>DecisionTreeRegressor</code> pipeline with missing value imputation and one-hot encoding without scaling:
        </p>

        <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
          <code>
            import numpy as np<br />
            import pandas as pd<br />
            from sklearn.model_selection import train_test_split<br />
            from sklearn.tree import DecisionTreeRegressor<br />
            from sklearn.compose import ColumnTransformer<br />
            from sklearn.pipeline import Pipeline<br />
            from sklearn.impute import SimpleImputer<br />
            from sklearn.preprocessing import OneHotEncoder<br />
            from sklearn.metrics import mean_absolute_error, r2_score<br />
            import joblib<br /><br />
            # Pipeline with ColumnTransformer (No StandardScaler required for Trees)<br />
            num_cols = ["Area", "Bedrooms", "Age", "Distance"]<br />
            cat_cols = ["Location"]<br /><br />
            preprocessor = ColumnTransformer([<br />
            &nbsp;&nbsp;("num", SimpleImputer(strategy="median"), num_cols),<br />
            &nbsp;&nbsp;("cat", Pipeline([("imp", SimpleImputer(strategy="most_frequent")), ("enc", OneHotEncoder(handle_unknown="ignore"))]), cat_cols)<br />
            ])<br /><br />
            tree_pipeline = Pipeline([<br />
            &nbsp;&nbsp;("preprocessor", preprocessor),<br />
            &nbsp;&nbsp;("regressor", DecisionTreeRegressor(criterion="squared_error", max_depth=5, min_samples_split=10, min_samples_leaf=5, random_state=42))<br />
            ])<br /><br />
            tree_pipeline.fit(X_train, y_train)<br />
            preds = tree_pipeline.predict(X_test)<br />
            print(f"MAE: ₹&#123;mean_absolute_error(y_test, preds):,.2f&#125; | R²: &#123;r2_score(y_test, preds):.4f&#125;")<br />
            joblib.dump(tree_pipeline, "housing_tree_pipeline.pkl")
          </code>
        </div>
      </section>

      {/* SECTION 21: COMMON MISTAKES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Pitfalls &amp; Remedies</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          21. Common Decision Tree Mistakes to Avoid
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-700 font-bold font-mono">
                <th className="p-3">Frequent Mistake</th>
                <th className="p-3">Negative Impact</th>
                <th className="p-3">Correct Engineering Practice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600">
              <tr>
                <td className="p-3 font-semibold text-rose-800">Leaving max_depth=None</td>
                <td className="p-3">Creates hundreds of single-sample leaves; memorizes noise</td>
                <td className="p-3 font-semibold text-emerald-800">Set max_depth (e.g. 3&ndash;6) or tune via CV</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-rose-800">Assuming Trees Can Extrapolate</td>
                <td className="p-3">Produces flat constant predictions outside training ranges</td>
                <td className="p-3 font-semibold text-emerald-800">Use linear models or hybrid pipelines for trends</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-rose-800">Over-relying on Impurity Importance</td>
                <td className="p-3">Favors high-cardinality and continuous columns artificially</td>
                <td className="p-3 font-semibold text-emerald-800">Validate with Permutation Importance on test data</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-rose-800">Scaling features unnecessarily</td>
                <td className="p-3">Wastes compute without any algorithmic benefit</td>
                <td className="p-3 font-semibold text-emerald-800">Pass raw numeric features directly into trees</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 22: PRACTICAL ASSIGNMENTS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Hands-On Practice</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          22. Practical Assignments
        </h2>
        <div className="mt-6 space-y-4">
          {[
            { title: "Assignment 1: Bank Loan Underwriting Tree & Manual Rule Extraction", desc: "Build a binary classification tree on loan records. Manually calculate parent entropy and Gini reduction for the root split. Export the tree with export_text() and trace decision paths." },
            { title: "Assignment 2: Multiclass Student Exam Grade Classification", desc: "Train a 3-class decision tree (Poor, Average, Excellent) on study hours, attendance, and sleep metrics. Compare Gini vs. Entropy performance and plot the tree structure with plot_tree()." },
            { title: "Assignment 3: Real Estate Valuation Regression Tree vs. Linear Regression", desc: "Train a DecisionTreeRegressor on housing features. Plot actual vs. predicted values and residuals. Contrast the piecewise-constant step predictions against OLS linear regression." },
            { title: "Assignment 4: Minimal Cost-Complexity Post-Pruning Investigation", desc: "Fit an unpruned tree on at least 500 records. Extract cost_complexity_pruning_path(). Plot alpha vs total leaf impurity and tree depth, selecting the optimal alpha using 5-fold cross-validation." },
            { title: "Assignment 5: Real-World Kaggle Capstone Project", desc: "Select a real-world Kaggle tabular dataset (e.g. Heart Disease, Employee Attrition, or Bike Sharing Demand). Execute an end-to-end ColumnTransformer pipeline with pre-pruning and permutation importance." },
          ].map((a, i) => (
            <div key={i} className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <h3 className="text-sm font-bold text-stone-900 font-mono">{a.title}</h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 23: FORMULAS CHEAT SHEET */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Quick Reference</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          23. Important Formulas &amp; Concepts Cheat Sheet
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-700 font-bold font-mono">
                <th className="p-3">Concept</th>
                <th className="p-3">Formula / Core Definition</th>
                <th className="p-3">Key Property</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-600 font-mono">
              <tr>
                <td className="p-3 font-semibold text-stone-900 font-sans">Shannon Entropy</td>
                <td className="p-3 text-orange-700">H(S) = - Σ [ pᵢ &middot; log₂(pᵢ) ]</td>
                <td className="p-3 font-sans text-xs">0 bits for pure node; 1.000 bits for 50/50 split</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900 font-sans">Gini Impurity</td>
                <td className="p-3 text-orange-700">Gini(S) = 1 - Σ pᵢ²</td>
                <td className="p-3 font-sans text-xs">0 for pure node; max 0.50 for binary balanced</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900 font-sans">Information Gain</td>
                <td className="p-3 text-orange-700">IG = H(Parent) - Σ (N_j / N) H(Child_j)</td>
                <td className="p-3 font-sans text-xs">Reduction in Shannon uncertainty after split</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900 font-sans">Regression Node MSE</td>
                <td className="p-3 text-orange-700">MSE(S) = (1/N) Σ (yᵢ - ȳ)²</td>
                <td className="p-3 font-sans text-xs">Within-node variance of continuous target</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900 font-sans">Cost-Complexity Cost</td>
                <td className="p-3 text-orange-700">R_α(T) = R(T) + α &middot; |T̃|</td>
                <td className="p-3 font-sans text-xs">Penalizes number of leaves |T̃| with weight α</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 24: ASSESSMENT PREVIEW */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 24
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Assessment</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          24. Module Assessment Overview
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          The interactive assessment verifies mastery across 10 core dimensions: recursive partitioning, root vs. leaf nodes, entropy equations, pure node criteria, information gain, binary Gini maximums, regression tree target types, max_depth constraints, pre-pruning vs. post-pruning differences, and the Scikit-learn ccp_alpha parameter.
        </p>
        <div className="mt-4 p-4 rounded-2xl bg-orange-50/60 border border-orange-200 text-xs sm:text-sm text-orange-950 font-medium">
          Switch to the <strong>Interactive Workbenches &amp; Assessment</strong> tab above to complete the live 10-question exam with instant feedback and score tracking.
        </div>
      </section>

      {/* SECTION 25: RESOURCES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 25
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">References</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          25. Recommended Learning Resources
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: "Scikit-learn Decision Trees Guide", desc: "Mathematical formulations of CART algorithms, splitting criteria, and computational complexity.", url: "https://scikit-learn.org/stable/modules/tree.html" },
            { name: "DecisionTreeClassifier API Reference", desc: "Detailed API documentation for all parameters, methods, and attributes.", url: "https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html" },
            { name: "Cost-Complexity Pruning in Scikit-learn", desc: "Official tutorial on extracting pruning paths and cross-validating ccp_alpha.", url: "https://scikit-learn.org/stable/auto_examples/tree/plot_cost_complexity_pruning.html" },
            { name: "Permutation Feature Importance", desc: "Guide on computing model-agnostic feature importance without impurity bias.", url: "https://scikit-learn.org/stable/modules/permutation_importance.html" },
          ].map((r, i) => (
            <a
              key={i}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-orange-300 transition-colors block"
            >
              <div className="text-xs sm:text-sm font-bold text-stone-900 flex items-center justify-between">
                <span>{r.name}</span>
                <span className="text-orange-600 font-mono text-xs">&rarr;</span>
              </div>
              <p className="text-xs text-stone-600 mt-1">{r.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 26: CHECKLIST */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 26
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Self-Evaluation</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          26. Module Completion Checklist
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Understand decision tree architecture and components",
            "Identify root, decision, branch, and leaf nodes",
            "Explain recursive partitioning and greedy splitting",
            "Calculate Shannon Entropy manually: H(S) = -Σ pᵢ log₂(pᵢ)",
            "Calculate Information Gain manually across candidate splits",
            "Calculate Gini Impurity manually: 1 - Σ pᵢ²",
            "Explain why maximum binary Gini impurity is 0.50",
            "Compare Gini and Entropy computational differences",
            "Understand classification tree majority voting",
            "Understand regression tree target mean and within-node MSE",
            "Explain why regression trees do not extrapolate",
            "Implement DecisionTreeClassifier with Scikit-learn",
            "Implement DecisionTreeRegressor with Scikit-learn",
            "Visualize trees using plot_tree() with class names",
            "Extract human-readable if-then-else rules via export_text()",
            "Inspect decision paths with decision_path() and apply()",
            "Analyze impurity-based feature importance",
            "Evaluate permutation feature importance",
            "Understand overfitting in unrestricted deep trees",
            "Apply pre-pruning using max_depth and min_samples_leaf",
            "Extract pruning paths using cost_complexity_pruning_path()",
            "Tune post-pruning parameter ccp_alpha via cross-validation",
            "Understand why feature scaling is not required for trees",
            "Complete the Breast Cancer classification project",
            "Complete the Housing Price regression project",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
              <Check size={14} className="text-emerald-600 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 27: ROADMAP */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 27
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Curriculum Roadmap</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          27. Connection to the Next Stage of Machine Learning
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          You have mastered individual rule-based decision trees. While intuitive and interpretable, single decision trees suffer from high variance: small variations in training data can generate completely different tree structures.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono text-stone-500 uppercase font-bold">Module 5</span>
            <h3 className="text-sm font-bold text-stone-900 mt-1">Linear Regression</h3>
            <p className="text-xs text-stone-600 mt-1">Numerical predictions via Ordinary Least Squares.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono text-stone-500 uppercase font-bold">Module 6</span>
            <h3 className="text-sm font-bold text-stone-900 mt-1">Regularization</h3>
            <p className="text-xs text-stone-600 mt-1">Ridge, Lasso, Elastic Net complexity control.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-mono text-stone-500 uppercase font-bold">Module 7</span>
            <h3 className="text-sm font-bold text-stone-900 mt-1">Classification</h3>
            <p className="text-xs text-stone-600 mt-1">Logistic sigmoid, softmax, and probability thresholds.</p>
          </div>
          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
            <span className="text-xs font-mono text-orange-700 uppercase font-bold">Module 8 (Current)</span>
            <h3 className="text-sm font-bold text-orange-950 mt-1">Decision Trees</h3>
            <p className="text-xs text-orange-900 mt-1">Recursive partitioning, Gini, and cost-complexity pruning.</p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-stone-900 text-stone-100 text-xs sm:text-sm">
          <strong>The Main Takeaway:</strong> Decision trees serve as the fundamental atomic building block for modern ensemble learning. In upcoming modules, you will combine hundreds of individual decision trees into <strong>Random Forests</strong> and <strong>Gradient Boosted Trees (XGBoost, LightGBM)</strong>, achieving world-class predictive accuracy on tabular datasets.
        </div>
      </section>
    </div>
  );
}
