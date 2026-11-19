import React from "react";
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Activity,
  Sliders,
  TrendingUp,
  Target,
  FileCode,
  Table,
  Zap,
  GitBranch,
  ShieldCheck,
  Compass,
  Cpu,
  BarChart2,
  Check,
  HelpCircle,
  Eye,
  Maximize2,
  Minimize2,
} from "lucide-react";

export default function MachineLearningSVMSections() {
  return (
    <div className="space-y-12">
      {/* SECTION 1: INTRODUCTION TO SVM */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 01
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Foundational Concepts</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          1. Introduction to Support Vector Machines
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Support Vector Machine (SVM) is a versatile, theoretically grounded supervised machine learning algorithm used primarily for classification and regression. Rather than simply fitting an arbitrary boundary between classes, SVM seeks the <strong>optimal decision boundary</strong> that maximizes the geometric distance (margin) to the nearest training observations from each class.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
            <h3 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
              <ShieldCheck size={16} className="text-orange-600" />
              Real-World Problem: Email Spam Filtering
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Suppose you extract features from incoming emails: frequency of promotional tokens, link count, header authenticity, and capitalization ratio. While logistic regression learns a probabilistic threshold, SVM identifies the precise boundary that maintains the widest possible buffer from borderline non-spam and borderline spam messages.
            </p>
          </div>

          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
            <h3 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
              <Cpu size={16} className="text-emerald-600" />
              Classification (SVC) vs Regression (SVR)
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              <strong>Support Vector Classification (SVC):</strong> Predicts discrete class labels (+1 vs -1 or multiclass) by constructing maximum-margin separating hyperplanes.<br />
              <strong>Support Vector Regression (SVR):</strong> Predicts continuous target values within a user-defined &epsilon;-insensitive error tube.
            </p>
          </div>
        </div>

        {/* Basic SVM Architecture Flow */}
        <div className="mt-6 bg-[#1c1917] rounded-2xl p-6 text-stone-100 font-mono text-xs">
          <div className="text-orange-400 font-bold mb-3 uppercase tracking-wider text-[11px]">
            # High-Level Support Vector Machine Learning Architecture
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-stone-300">
            <span className="bg-stone-800 px-3 py-1.5 rounded-lg border border-stone-700 text-white font-bold">1. Training Data (X, y)</span>
            <span className="text-orange-400">&rarr;</span>
            <span className="bg-stone-800 px-3 py-1.5 rounded-lg border border-stone-700 text-white font-bold">2. Standardize Features</span>
            <span className="text-orange-400">&rarr;</span>
            <span className="bg-stone-800 px-3 py-1.5 rounded-lg border border-stone-700 text-white font-bold">3. Identify Support Vectors</span>
            <span className="text-orange-400">&rarr;</span>
            <span className="bg-stone-800 px-3 py-1.5 rounded-lg border border-stone-700 text-white font-bold">4. Maximize Geometric Margin (2 / ||w||)</span>
            <span className="text-orange-400">&rarr;</span>
            <span className="bg-orange-500/20 text-orange-300 px-3 py-1.5 rounded-lg border border-orange-500/30 font-bold">5. Optimal Hyperplane Model</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: MAXIMUM MARGIN CLASSIFIERS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 02
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Geometric Optimization</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          2. Maximum Margin Classifiers &amp; Decision Geometry
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          In any linearly separable dataset, an infinite number of separating lines or hyperplanes can achieve 100% training accuracy. However, a boundary that passes razor-thinly next to an observation is unstable and overfits to noise. SVM resolves this ambiguity by selecting the unique hyperplane that maximizes the perpendicular distance to the closest training examples.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs">
            <span className="text-stone-400 uppercase block mb-1">Hyperplane Equation</span>
            <span className="text-base font-bold text-stone-900 font-sans block">w<sup>T</sup>x + b = 0</span>
            <p className="mt-2 text-stone-600 font-sans text-[11px] leading-relaxed">
              w is the weight vector normal (perpendicular) to the hyperplane; b is the scalar intercept offset from the origin.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200 font-mono text-xs">
            <span className="text-orange-700 uppercase block mb-1">Margin Width Formula</span>
            <span className="text-base font-bold text-orange-950 font-sans block">Margin = 2 / ||w||</span>
            <p className="mt-2 text-stone-600 font-sans text-[11px] leading-relaxed">
              Distance between positive margin (w<sup>T</sup>x + b = +1) and negative margin (w<sup>T</sup>x + b = -1).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs">
            <span className="text-stone-400 uppercase block mb-1">Point-to-Plane Distance</span>
            <span className="text-base font-bold text-stone-900 font-sans block">d = |w<sup>T</sup>x + b| / ||w||</span>
            <p className="mt-2 text-stone-600 font-sans text-[11px] leading-relaxed">
              Measures the exact perpendicular Euclidean distance from any sample point x to the separating surface.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-700">
          <strong>Why Minimizing &frac12; ||w||&sup2; Maximizes Margin:</strong> Maximizing the margin width <code>2 / ||w||</code> is mathematically equivalent to minimizing <code>||w|| / 2</code>. To make the function convex and continuously differentiable for quadratic programming solvers, we minimize <code>&frac12; ||w||&sup2;</code> subject to separation constraints.
        </div>
      </section>

      {/* SECTION 3: SUPPORT VECTORS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 03
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Critical Training Instances</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          3. Support Vectors &amp; Dual Sparsity
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Support vectors are the specific training observations that constrain the boundary. In the dual formulation, every training point has an associated Lagrange multiplier (&alpha;<sub>i</sub>). For all points safely beyond the margin, &alpha;<sub>i</sub> = 0. Only support vectors have &alpha;<sub>i</sub> &gt; 0, meaning the final model depends strictly on this sparse subset of data.
        </p>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-5 border border-stone-800 text-stone-100 font-mono text-xs space-y-2 overflow-x-auto">
          <div className="text-orange-400 font-bold"># Inspecting Support Vectors in Scikit-Learn</div>
          <div className="text-stone-300">
            from sklearn.svm import SVC<br />
            from sklearn.preprocessing import StandardScaler<br />
            from sklearn.pipeline import make_pipeline<br />
            <br />
            model = make_pipeline(StandardScaler(), SVC(kernel="linear", C=1.0))<br />
            model.fit(X_train, y_train)<br />
            <br />
            svm = model.named_steps["svc"]<br />
            print("Total support vectors per class:", svm.n_support_) &nbsp;&nbsp;<span className="text-stone-500"># e.g., [32, 33]</span><br />
            print("Support vector training row indices:", svm.support_) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500"># Indices of α_i &gt; 0</span><br />
            print("Support vector coordinates shape:", svm.support_vectors_.shape)<br />
            print("Dual coefficients (α_i · y_i):", svm.dual_coef_.shape)<br />
            print("Linear hyperplane weights (w):", svm.coef_)<br />
            print("Hyperplane intercept bias (b):", svm.intercept_)
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
            <span className="font-bold text-stone-900 block font-sans">Hard-Margin Support Vectors</span>
            <p className="text-stone-600 font-sans mt-1">
              Must lie strictly on the margin boundaries (y<sub>i</sub>(w<sup>T</sup>x<sub>i</sub> + b) = 1). Zero tolerance for margin penetration.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
            <span className="font-bold text-stone-900 block font-sans">Soft-Margin Support Vectors</span>
            <p className="text-stone-600 font-sans mt-1">
              Includes points on the margin boundaries, points inside the margin (&xi;<sub>i</sub> &le; 1), and misclassified points (&xi;<sub>i</sub> &gt; 1).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 & 5: HYPERPLANE & HARD-MARGIN SVM */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 04 &amp; 05
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Hyperplane Mechanics &amp; Hard Margin</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          4 &amp; 5. Hyperplane Construction &amp; Hard-Margin Formulation
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          A hyperplane is an affine subspace of dimension (D - 1) in a D-dimensional feature space. The decision function maps an input vector to a signed classification score: <code>f(x) = w<sup>T</sup>x + b</code>. The predicted class is <code>&ycirc; = sign(f(x))</code>.
        </p>

        {/* Hyperplane Dimensionality Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50">
                <th className="p-3 font-mono font-bold text-stone-700">Features (D)</th>
                <th className="p-3 font-mono font-bold text-stone-700">Geometry</th>
                <th className="p-3 font-mono font-bold text-stone-700">Hyperplane Dimension</th>
                <th className="p-3 font-mono font-bold text-stone-700">Explicit Equation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-600">
              <tr>
                <td className="p-3 font-mono font-bold text-stone-900">1 Feature</td>
                <td className="p-3">Single Point / Threshold</td>
                <td className="p-3 font-mono">0-Dimensional</td>
                <td className="p-3 font-mono text-orange-700">w₁x₁ + b = 0 &rarr; x₁ = -b/w₁</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-stone-900">2 Features</td>
                <td className="p-3">Straight Dividing Line</td>
                <td className="p-3 font-mono">1-Dimensional Line</td>
                <td className="p-3 font-mono text-orange-700">w₁x₁ + w₂x₂ + b = 0</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-stone-900">3 Features</td>
                <td className="p-3">2D Flat Plane in 3D Space</td>
                <td className="p-3 font-mono">2-Dimensional Plane</td>
                <td className="p-3 font-mono text-orange-700">w₁x₁ + w₂x₂ + w₃x₃ + b = 0</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-stone-900">D &gt; 3 Features</td>
                <td className="p-3">Hyperplane</td>
                <td className="p-3 font-mono">(D - 1)-Dimensional</td>
                <td className="p-3 font-mono text-orange-700">&Sigma; wᵢxᵢ + b = 0</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Hard Margin Constraints */}
        <div className="mt-6 p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs sm:text-sm">
          <h4 className="font-bold text-stone-900">Hard-Margin Quadratic Programming Problem:</h4>
          <p className="font-mono text-stone-800 bg-white p-3 rounded-lg border border-stone-200">
            min<sub>w, b</sub> &frac12; ||w||&sup2; &nbsp;&nbsp;subject to:&nbsp;&nbsp; yᵢ(w<sup>T</sup>xᵢ + b) &ge; 1, &nbsp;&forall; i &isin; &#123;1, ..., N&#125;
          </p>
          <p className="text-stone-600 text-xs">
            <strong>Limitation:</strong> If even a single outlier breaches the gap or if data is not linearly separable, no feasible solution exists. This necessitates Soft-Margin SVM.
          </p>
        </div>
      </section>

      {/* SECTION 6 & 7: SOFT-MARGIN & HINGE LOSS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 06 &amp; 07
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Slack Variables &amp; Loss Formulation</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          6 &amp; 7. Soft-Margin SVM &amp; Hinge Loss Optimization
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Real-world data contains noise, mislabeled examples, and overlapping feature distributions. Soft-Margin SVM introduces <strong>slack variables (&xi;<sub>i</sub> &ge; 0)</strong> to permit controlled margin violations, balanced by the penalty parameter <strong>C</strong>.
        </p>

        {/* Slack Variable Thresholds */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <span className="text-emerald-700 font-bold uppercase block">&xi;ᵢ = 0</span>
            <span className="text-emerald-950 font-bold font-sans text-sm block mt-1">Strict Margin Adherence</span>
            <p className="text-stone-600 font-sans mt-2">
              Observation is correctly classified and situated beyond or strictly on the margin boundary.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
            <span className="text-amber-700 font-bold uppercase block">0 &lt; &xi;ᵢ &le; 1</span>
            <span className="text-amber-950 font-bold font-sans text-sm block mt-1">Margin Penetration</span>
            <p className="text-stone-600 font-sans mt-2">
              Point is inside the margin buffer, but remains on the correct side of the decision boundary (&xi;ᵢ = 1 lies on the plane).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200">
            <span className="text-rose-700 font-bold uppercase block">&xi;ᵢ &gt; 1</span>
            <span className="text-rose-950 font-bold font-sans text-sm block mt-1">Misclassification</span>
            <p className="text-stone-600 font-sans mt-2">
              Observation crosses past the hyperplane onto the wrong side of the decision boundary.
            </p>
          </div>
        </div>

        {/* Hinge Loss Formula & Math */}
        <div className="mt-6 bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
          <h4 className="font-bold text-stone-900 text-sm">Hinge Loss Function: L(y, f(x)) = max(0, 1 - y &middot; f(x))</h4>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Unlike 0/1 accuracy loss which only penalizes incorrect predictions, Hinge Loss penalizes predictions that are correct but lack sufficient margin confidence (y &middot; f(x) &lt; 1).
          </p>
          <div className="bg-white p-3.5 rounded-xl border border-stone-200 font-mono text-xs space-y-1 text-stone-800">
            <div>&bull; If y &middot; f(x) = +2.0 &rarr; Loss = max(0, 1 - 2.0) = <strong>0.0</strong> (Safe beyond margin)</div>
            <div>&bull; If y &middot; f(x) = +0.6 &rarr; Loss = max(0, 1 - 0.6) = <strong>0.4</strong> (Correct, but margin violated)</div>
            <div>&bull; If y &middot; f(x) = -0.5 &rarr; Loss = max(0, 1 - (-0.5)) = <strong>1.5</strong> (Misclassified)</div>
          </div>
        </div>
      </section>

      {/* SECTION 8: REGULARIZATION PARAMETER C */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 08
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Hyperparameter Control</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          8. Regularization Parameter C &amp; Generalization Balance
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          In the objective function <code>min &frac12; ||w||&sup2; + C &Sigma; &xi;<sub>i</sub></code>, the hyperparameter <strong>C</strong> acts as the exchange rate between a wide margin and training violations. In Scikit-learn, <strong>C is inversely proportional to regularization</strong>.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50">
                <th className="p-3 font-mono font-bold text-stone-700">Characteristic</th>
                <th className="p-3 font-mono font-bold text-stone-700">Small C (e.g., C = 0.01)</th>
                <th className="p-3 font-mono font-bold text-stone-700">Large C (e.g., C = 100)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-600">
              <tr>
                <td className="p-3 font-bold text-stone-900">Slack Violation Penalty</td>
                <td className="p-3">Low &mdash; tolerates many margin penetrations</td>
                <td className="p-3">High &mdash; penalizes every margin violation strictly</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Margin Geometry</td>
                <td className="p-3 text-emerald-700 font-semibold">Wider margin (high tolerance)</td>
                <td className="p-3 text-rose-700 font-semibold">Narrower margin (tight fit)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Number of Support Vectors</td>
                <td className="p-3">Large number of support vectors</td>
                <td className="p-3">Fewer support vectors (only near margin)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Model Regularization</td>
                <td className="p-3">Strong regularization (simpler boundary)</td>
                <td className="p-3">Weak regularization (complex boundary)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Generalization Risk</td>
                <td className="p-3">Risk of underfitting (high bias)</td>
                <td className="p-3">Risk of overfitting (high variance)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 9 TO 13: THE KERNEL TRICK & KERNEL FAMILIES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 09 &ndash; 13
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Non-linear Projections</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          9 &ndash; 13. The Kernel Trick &amp; Non-Linear Transformations
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          When data cannot be separated by a linear plane (such as concentric circles or interleaved spirals), mapping inputs into a higher-dimensional space &phi;(x) makes them linearly separable. The <strong>Kernel Trick</strong> computes inner products directly via a kernel function <code>K(x, z) = &lang;&phi;(x), &phi;(z)&rang;</code> without ever explicitly constructing the high-dimensional coordinates.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-1">1. Linear Kernel</h3>
            <span className="font-mono text-orange-700 text-xs block mb-2">K(x, z) = x<sup>T</sup>z</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Fastest computation; best for high-dimensional sparse data like text classification (TF-IDF) or gene expression where feature count exceeds sample count (D &gt; N).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-1">2. Polynomial Kernel</h3>
            <span className="font-mono text-orange-700 text-xs block mb-2">K(x, z) = (&gamma; x<sup>T</sup>z + r)<sup>d</sup></span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Models feature interactions up to degree <code>d</code>. Parameter <code>r (coef0)</code> controls the influence of high-order versus low-order polynomial terms.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-1">3. Radial Basis Function (RBF) Kernel</h3>
            <span className="font-mono text-orange-700 text-xs block mb-2">K(x, z) = exp(-&gamma; ||x - z||&sup2;)</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              The Gaussian kernel maps inputs into an infinite-dimensional Hilbert space based on Euclidean distance. <strong>Gamma (&gamma;)</strong> defines the inverse radius of influence.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-1">4. Sigmoid Kernel</h3>
            <span className="font-mono text-orange-700 text-xs block mb-2">K(x, z) = tanh(&gamma; x<sup>T</sup>z + r)</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Originating from neural network multi-layer perceptron analogies. Non-positive semi-definite for certain parameters, requiring cautious validation.
            </p>
          </div>
        </div>

        {/* Gamma scaling explanation */}
        <div className="mt-6 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700">
          <strong>Scikit-Learn Default Gamma Scaling:</strong> When setting <code>gamma="scale"</code>, Scikit-learn automatically calculates &gamma; as:
          <div className="font-mono bg-white p-2 rounded-lg border border-stone-200 mt-2 text-stone-900">
            &gamma; = 1 / (n_features &times; Var(X))
          </div>
          This ensures distance metrics adapt automatically to feature dimensionality and variance.
        </div>
      </section>

      {/* SECTION 14: SUPPORT VECTOR REGRESSION (SVR) */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Continuous Target Estimation</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          14. Support Vector Regression (SVR) &amp; &Epsilon;-Insensitive Tube
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Support Vector Regression (SVR) flips the SVM classification goal upside-down: instead of finding a hyperplane that separates two classes with maximum margin, SVR fits a continuous regression line inside a tube of width <strong>2&epsilon;</strong> around the predictions, ignoring all errors within that buffer.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-2">&Epsilon;-Insensitive Loss Function</h3>
            <div className="font-mono bg-white p-3 rounded-xl border border-stone-200 text-xs text-stone-900">
              L<sub>&epsilon;</sub>(y, &ycirc;) = max(0, |y - &ycirc;| - &epsilon;)
            </div>
            <p className="text-xs text-stone-600 mt-3 leading-relaxed">
              If the actual value falls inside the tube (|y - &ycirc;| &le; &epsilon;), loss is exactly zero. Only observations falling outside the tube incur linear penalties proportional to slack variables &xi;<sub>i</sub> and &xi;<sub>i</sub><sup>*</sup>.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-2">SVR Dual Coefficients</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Points lying strictly inside the tube have dual multipliers (&alpha;<sub>i</sub> - &alpha;<sub>i</sub><sup>*</sup>) = 0. Only observations that sit on the boundary or violate the &epsilon;-tube act as support vectors contributing to the final regression prediction:
            </p>
            <div className="font-mono bg-white p-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 mt-2">
              f(x) = &Sigma; (&alpha;<sub>i</sub> - &alpha;<sub>i</sub><sup>*</sup>) K(x<sub>i</sub>, x) + b
            </div>
          </div>
        </div>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-5 border border-stone-800 text-stone-100 font-mono text-xs space-y-2 overflow-x-auto">
          <div className="text-orange-400 font-bold"># Non-Linear SVR with RBF Kernel in Scikit-Learn</div>
          <div className="text-stone-300">
            from sklearn.svm import SVR<br />
            from sklearn.preprocessing import StandardScaler<br />
            from sklearn.pipeline import make_pipeline<br />
            <br />
            svr_pipeline = make_pipeline(<br />
            &nbsp;&nbsp;StandardScaler(),<br />
            &nbsp;&nbsp;SVR(kernel="rbf", C=20.0, epsilon=0.15, gamma="scale")<br />
            )<br />
            svr_pipeline.fit(X_train, y_train)<br />
            y_pred = svr_pipeline.predict(X_test)
          </div>
        </div>
      </section>

      {/* SECTION 15 & 16: OPTIMIZATION & FEATURE SCALING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Sections 15 &amp; 16
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Dual Solvers &amp; Preprocessing</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          15 &amp; 16. SMO Optimization &amp; Mandatory Feature Scaling
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          SVM quadratic programming problems are efficiently solved using <strong>Sequential Minimal Optimization (SMO)</strong>, which decomposes the full optimization problem into analytical 2-variable subproblems. Because SVM relies on Euclidean distances and inner products, unscaled features will severely bias the model.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200">
            <h3 className="font-bold text-rose-950 text-sm mb-2 flex items-center gap-2">
              <AlertTriangle size={16} className="text-rose-600" />
              The Hazard of Unscaled Features
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              If feature 1 is Age (18&ndash;70) and feature 2 is Annual Income (₹300,000&ndash;₹5,000,000), the Euclidean distance will be 99.99% dominated by income. The algorithm will treat age as virtually zero variance, warping the hyperplane orientation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200">
            <h3 className="font-bold text-emerald-950 text-sm mb-2 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              Pipeline Encapsulation Prevents Leakage
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              StandardScaler must compute &mu; and &sigma; strictly on training folds and apply them to validation/test sets without recalculation. Scikit-learn Pipelines ensure zero data leakage across cross-validation splits.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 17: COMPLETE END-TO-END PROJECT */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">End-to-End Implementation</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          17. Complete End-to-End SVM Classification Pipeline
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Full production-ready implementation on the Wisconsin Diagnostic Breast Cancer dataset (569 samples, 30 features) demonstrating scaling, stratified splitting, GridSearchCV tuning, decision scores, and ROC-AUC evaluation.
        </p>

        <div className="mt-6 bg-[#1c1917] rounded-2xl p-5 border border-stone-800 text-stone-100 font-mono text-xs space-y-2 overflow-x-auto">
          <div className="text-orange-400 font-bold"># Complete 10-Step Scikit-Learn SVM Master Pipeline</div>
          <div className="text-stone-300">
            import numpy as np, pandas as pd<br />
            from sklearn.datasets import load_breast_cancer<br />
            from sklearn.model_selection import train_test_split, GridSearchCV, StratifiedKFold<br />
            from sklearn.preprocessing import StandardScaler<br />
            from sklearn.pipeline import Pipeline<br />
            from sklearn.svm import SVC<br />
            from sklearn.metrics import classification_report, roc_auc_score, confusion_matrix<br />
            <br />
            <span className="text-stone-500"># 1. Load Diagnostic Data</span><br />
            data = load_breast_cancer()<br />
            X, y = pd.DataFrame(data.data, columns=data.feature_names), data.target<br />
            <br />
            <span className="text-stone-500"># 2. Stratified Train/Test Split (Preserve Class Balance)</span><br />
            X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)<br />
            <br />
            <span className="text-stone-500"># 3. Encapsulate Scaler &amp; SVC into Pipeline</span><br />
            pipe = Pipeline([("scaler", StandardScaler()), ("svm", SVC(probability=False))])<br />
            <br />
            <span className="text-stone-500"># 4. Multi-Kernel Grid Search Parameter Space</span><br />
            param_grid = [<br />
            &nbsp;&nbsp;&#123;"svm__kernel": ["linear"], "svm__C": [0.01, 0.1, 1, 10, 100]&#125;,<br />
            &nbsp;&nbsp;&#123;"svm__kernel": ["rbf"], "svm__C": [0.1, 1, 10, 100], "svm__gamma": ["scale", 0.01, 0.001]&#125;,<br />
            &nbsp;&nbsp;&#123;"svm__kernel": ["poly"], "svm__degree": [2, 3], "svm__C": [0.1, 1, 10]&#125;<br />
            ]<br />
            <br />
            cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)<br />
            grid = GridSearchCV(pipe, param_grid=param_grid, cv=cv, scoring="roc_auc", n_jobs=-1)<br />
            grid.fit(X_train, y_train)<br />
            <br />
            print("Optimal Parameters:", grid.best_params_)<br />
            print("Cross-Validated Train ROC-AUC: &#123;:.4f&#125;".format(grid.best_score_))<br />
            <br />
            <span className="text-stone-500"># 5. Evaluate Best Model on Unseen Holdout Test Data</span><br />
            best_model = grid.best_estimator_<br />
            y_pred = best_model.predict(X_test)<br />
            scores = best_model.decision_function(X_test)<br />
            <br />
            print("Holdout ROC-AUC: &#123;:.4f&#125;".format(roc_auc_score(y_test, scores)))<br />
            print("\nClassification Report:\n", classification_report(y_test, y_pred, target_names=data.target_names))
          </div>
        </div>
      </section>

      {/* SECTION 18: LINEARSVC VS SVC */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Engine Benchmark</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          18. LinearSVC vs SVC (LIBLINEAR vs LIBSVM)
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Scikit-learn provides two distinct classes for linear support vector classification. Understanding their underlying C++ solver engines is essential for training models on enterprise datasets.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50">
                <th className="p-3 font-mono font-bold text-stone-700">Feature Dimension</th>
                <th className="p-3 font-mono font-bold text-stone-700">SVC(kernel='linear')</th>
                <th className="p-3 font-mono font-bold text-stone-700">LinearSVC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-600">
              <tr>
                <td className="p-3 font-bold text-stone-900">Underlying C++ Solver</td>
                <td className="p-3 font-mono">LIBSVM</td>
                <td className="p-3 font-mono text-orange-700 font-bold">LIBLINEAR</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Computational Scaling</td>
                <td className="p-3">O(N&sup2;) to O(N&sup3;) &mdash; intractable for N &gt; 50k</td>
                <td className="p-3 text-emerald-700 font-bold">O(N) &mdash; scales to millions of samples</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Default Loss Function</td>
                <td className="p-3 font-mono">Standard Hinge Loss</td>
                <td className="p-3 font-mono">Squared Hinge Loss</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Multiclass Strategy</td>
                <td className="p-3 font-mono">One-vs-One (OvO)</td>
                <td className="p-3 font-mono">One-vs-Rest (OvR)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Kernel Support</td>
                <td className="p-3">Linear, Poly, RBF, Sigmoid, Precomputed</td>
                <td className="p-3 font-mono">Linear only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 19: ALGORITHM COMPARISON MATRIX */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Architectural Comparison</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          19. Comprehensive Supervised Algorithm Comparison
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          How Support Vector Machines compare directly with Logistic Regression, Single Decision Trees, and Random Forests across core dimensions:
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50">
                <th className="p-3 font-mono font-bold text-stone-700">Algorithm</th>
                <th className="p-3 font-mono font-bold text-stone-700">Core Principle</th>
                <th className="p-3 font-mono font-bold text-stone-700">Non-linear Support</th>
                <th className="p-3 font-mono font-bold text-stone-700">Feature Scaling</th>
                <th className="p-3 font-mono font-bold text-stone-700">Scalability (N &gt; 100k)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-600">
              <tr>
                <td className="p-3 font-bold text-stone-900">SVM (Kernel)</td>
                <td className="p-3">Maximum-margin hyperplane</td>
                <td className="p-3 text-emerald-700 font-bold">Yes (via Kernels)</td>
                <td className="p-3 text-rose-700 font-bold">Mandatory</td>
                <td className="p-3 text-rose-700">Slow (O(N&sup2;))</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Logistic Regression</td>
                <td className="p-3">Log-odds maximum likelihood</td>
                <td className="p-3">Requires feature engineering</td>
                <td className="p-3 text-amber-700">Recommended</td>
                <td className="p-3 text-emerald-700 font-bold">Extremely Fast</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Decision Tree</td>
                <td className="p-3">Recursive impurity partitioning</td>
                <td className="p-3 text-emerald-700 font-bold">Yes (Step functions)</td>
                <td className="p-3 text-emerald-700 font-bold">Not Needed</td>
                <td className="p-3 text-emerald-700 font-bold">High</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-stone-900">Random Forest</td>
                <td className="p-3">Bagging diverse decision trees</td>
                <td className="p-3 text-emerald-700 font-bold">Yes (High flexibility)</td>
                <td className="p-3 text-emerald-700 font-bold">Not Needed</td>
                <td className="p-3 text-emerald-700 font-bold">High (Parallelizable)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 22: INTERVIEW PREPARATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Technical Interview Q&amp;A</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          22. High-Frequency Machine Learning Interview Questions
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Core theoretical and engineering questions frequently asked in Senior ML Engineer and Data Science interviews:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              q: "Q1: Why is SVM called a maximum-margin classifier and what is the margin formula?",
              a: "SVM finds the hyperplane that maximizes the perpendicular geometric distance to the closest training observations (support vectors). For separating hyperplanes w^T x + b = ±1, the total margin width is 2 / ||w||. Maximizing 2 / ||w|| is solved as minimizing (1/2) ||w||^2 subject to separation constraints.",
            },
            {
              q: "Q2: What is the Kernel Trick and why is Mercer's Theorem relevant?",
              a: "The Kernel Trick calculates dot products in a high-dimensional feature space K(x, z) = ⟨φ(x), φ(z)⟩ without explicitly computing φ(x). By Mercer's Theorem, any continuous, symmetric, positive semi-definite kernel function corresponds to an inner product in some reproducing kernel Hilbert space (RKHS), avoiding the curse of dimensionality.",
            },
            {
              q: "Q3: What are the differences between parameter C and parameter gamma (γ)?",
              a: "C is the regularization penalty for slack variable violations (margin penetrations). High C forces a narrow margin to fit training points strictly (overfitting risk). Gamma (γ) is specific to non-linear kernels like RBF, controlling the inverse radius of influence of each support vector. High gamma creates localized, sharp Gaussian peaks around individual points (overfitting risk).",
            },
            {
              q: "Q4: Why does standard SVC fail to scale on datasets with 100,000+ observations?",
              a: "SVC is implemented using LIBSVM, which relies on Sequential Minimal Optimization (SMO) storing kernel matrices. Training time complexity scales between O(N²) and O(N³), and memory scales as O(N²). For large datasets, LinearSVC (LIBLINEAR) or SGDClassifier(loss='hinge') with O(N) scaling must be used instead.",
            },
            {
              q: "Q5: How does Support Vector Regression (SVR) handle error compared to ordinary least squares (OLS)?",
              a: "OLS penalizes every non-zero residual quadratically (e²). SVR employs an ε-insensitive loss function where residuals |y - ŷ| ≤ ε incur zero loss. Errors outside the ε-tube are penalized linearly, providing superior robustness to outliers and sparse dual representation.",
            },
            {
              q: "Q6: Why are predicted probabilities from SVC(probability=True) computationally expensive?",
              a: "SVM decision functions output raw signed distances w^T x + b, not probabilities. To output calibrated probabilities, Scikit-learn runs Platt Scaling: a 5-fold cross-validated logistic regression fit on top of the SVM decision scores, which roughly quintuples the training time.",
            },
          ].map((item, idx) => (
            <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm mb-2">{item.q}</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 23: MASTERY CHECKLIST */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase">Core Competency Audit</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
          23. Module 10 SVM Mastery Checklist
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          Confirm your mastery of Support Vector Machines before proceeding to Unsupervised Learning:
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {[
            "Formulate maximum-margin hyperplane optimization min ½ ||w||²",
            "Identify support vectors using dual Lagrange multipliers α_i > 0",
            "Explain Hard-Margin vs Soft-Margin SVM with slack variables ξ_i",
            "Calculate Hinge Loss L = max(0, 1 - y · f(x)) across prediction states",
            "Balance the C regularization parameter against margin width",
            "Implement the Kernel Trick without explicit coordinate mappings",
            "Tune RBF kernel inverse radius gamma (γ) and evaluate variance",
            "Build Support Vector Regression (SVR) models with ε-insensitive tubes",
            "Implement leak-free StandardScaler + SVC Scikit-learn pipelines",
            "Benchmark LinearSVC (LIBLINEAR) vs SVC (LIBSVM) for large datasets",
            "Diagnose support vector coordinates using svm.support_vectors_",
            "Conduct StratifiedKFold GridSearchCV for joint C and gamma tuning",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/60 text-emerald-950 font-medium">
              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
