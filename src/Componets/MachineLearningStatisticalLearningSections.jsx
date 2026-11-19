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
  HelpCircle,
  Scale,
  Brain,
  ShieldAlert,
  Percent,
  FlaskConical,
  BookOpen,
  GitCompare,
  Binary,
  Microscope,
  Share2,
} from "lucide-react";

export default function MachineLearningStatisticalLearningSections() {
  return (
    <div className="space-y-8">
      {/* SECTION 1: STATISTICAL LEARNING THEORY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Brain size={14} />
          <span>Section 01 &bull; Foundations</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          1. Statistical Learning Theory: Foundations of Machine Learning
        </h2>
        <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-orange-950 flex items-start gap-3">
          <Sparkles className="text-orange-600 shrink-0 mt-0.5" size={16} />
          <div>
            <strong>Core Insight:</strong> Statistical Learning Theory provides the formal mathematical framework explaining <em>why</em> and <em>how</em> algorithms learn from finite samples, quantifying the conditions under which empirical training success guarantees real-world generalization.
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <h3 className="text-base font-bold text-stone-900">1.1 What is Statistical Learning Theory?</h3>
          <p>
            Statistical Learning Theory is the branch of computer science and statistics dedicated to understanding the mathematical principles behind predictive modeling. While practical machine learning often emphasizes writing code with libraries like Scikit-learn, statistical learning theory investigates the fundamental limits of learning:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-stone-600">
            <li>How many training samples are mathematically required to learn a target concept reliably?</li>
            <li>Why does minimizing training error not automatically ensure good test performance?</li>
            <li>How can we mathematically bound the difference between training error and real-world risk?</li>
            <li>What makes one hypothesis class intrinsically more complex or expressive than another?</li>
          </ul>

          <h3 className="text-base font-bold text-stone-900 pt-2">1.2 The Mathematical Framework</h3>
          <p>
            Statistical learning defines every machine learning problem through five core components:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-mono font-bold text-orange-700 text-xs">1. Input Space &chi; and Output Space &Ycy;</div>
              <p className="text-xs text-stone-600">
                &chi; denotes the space of all possible input feature vectors <strong>x</strong> &isin; &Ropf;<sup>d</sup>. &Ycy; denotes the set of possible targets (e.g. &Ycy; = &#123;0, 1&#125; for binary classification, or &Ycy; = &Ropf; for continuous regression).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-mono font-bold text-orange-700 text-xs">2. Data Distribution &Dcy; over &chi; &times; &Ycy;</div>
              <p className="text-xs text-stone-600">
                There exists an unknown, fixed joint probability distribution &Pcy;(X, Y) over &chi; &times; &Ycy;. Observations (x<sub>i</sub>, y<sub>i</sub>) are drawn independently and identically distributed (i.i.d.) from &Dcy;.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-mono font-bold text-orange-700 text-xs">3. Hypothesis Space &Hcy;</div>
              <p className="text-xs text-stone-600">
                The candidate set of predictive functions &Hcy; = &#123;h : &chi; &rarr; &Ycy;&#125; available to the algorithm (e.g., all linear decision hyperplanes, all decision trees of depth &le; 5, or neural networks of a specific topology).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-mono font-bold text-orange-700 text-xs">4. Loss Function L(h(x), y) &amp; True Risk R(h)</div>
              <p className="text-xs text-stone-600">
                L(h(x), y) measures penalty for predicting h(x) when true label is y (e.g. 0-1 loss, squared error). Expected Risk (Population Risk) is R(h) = &Eopf;<sub>(X,Y)~&Dcy;</sub>[L(h(X), Y)].
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto space-y-2">
            <div className="text-stone-400"># Core Statistical Learning Objective:</div>
            <div className="text-stone-300">Expected Risk (True Risk): &nbsp;R(h) = &int;<sub>&chi;&times;&Ycy;</sub> L(h(x), y) d&Pcy;(x, y)</div>
            <div className="text-stone-400"># Since &Pcy;(x, y) is unknown, we cannot directly compute R(h). Learning must proceed via finite sample S!</div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EMPIRICAL RISK MINIMIZATION (ERM) */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Target size={14} />
          <span>Section 02 &bull; Optimization Principle</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          2. Empirical Risk Minimization (ERM) &amp; The Overfitting Dilemma
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Because the true distribution &Dcy; is unknown, we cannot calculate R(h) directly. Instead, we observe a finite training sample S = &#123;(x<sub>1</sub>, y<sub>1</sub>), ..., (x<sub>N</sub>, y<sub>N</sub>)&#125;. The <strong>Empirical Risk</strong> is the average loss over this observed sample:
          </p>

          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
            R<sub>emp</sub>(h) = (1 / N) &sum;<sub>i=1..N</sub> L(h(x<sub>i</sub>), y<sub>i</sub>)
          </div>

          <h3 className="text-base font-bold text-stone-900">2.1 The ERM Principle</h3>
          <p>
            The <strong>Empirical Risk Minimization (ERM)</strong> principle states that an induction algorithm should select the hypothesis h<sup>*</sup><sub>ERM</sub> &isin; &Hcy; that minimizes this empirical loss:
          </p>
          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
            h<sup>*</sup><sub>ERM</sub> = argmin<sub>h &isin; &Hcy;</sub> R<sub>emp</sub>(h)
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">2.2 How Classical Algorithms Embody ERM</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-xl overflow-hidden">
              <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                <tr>
                  <th className="p-3">Algorithm</th>
                  <th className="p-3">Surrogate Loss Function L(h(x), y)</th>
                  <th className="p-3">ERM Optimization Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="p-3 font-semibold">Linear Regression (OLS)</td>
                  <td className="p-3 font-mono">Squared Error: (y &minus; &theta;<sup>T</sup>x)<sup>2</sup></td>
                  <td className="p-3">Minimizes Mean Squared Error over training rows</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Logistic Regression</td>
                  <td className="p-3 font-mono">Binary Cross-Entropy (Log-Loss)</td>
                  <td className="p-3">Minimizes negative log-likelihood of training classes</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Support Vector Machines</td>
                  <td className="p-3 font-mono">Hinge Loss: max(0, 1 &minus; y&middot;f(x))</td>
                  <td className="p-3">Minimizes margin violations + complexity penalty</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Deep Neural Networks</td>
                  <td className="p-3 font-mono">Cross-Entropy / MSE / Focal Loss</td>
                  <td className="p-3">Minimizes batch empirical loss via SGD / Adam</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">2.3 Why Pure ERM Fails: The Overfitting Trap</h3>
          <p>
            If the hypothesis class &Hcy; is sufficiently complex (e.g. high-degree polynomials, unconstrained decision trees, lookup tables), a hypothesis can achieve <strong>R<sub>emp</sub>(h) = 0</strong> simply by memorizing training instances. However, its true population risk R(h) may be catastrophic. Pure ERM is mathematically consistent only if the complexity of &Hcy; is bounded!
          </p>
        </div>
      </section>

      {/* SECTION 3: GENERALIZATION ERROR & BOUNDS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <TrendingUp size={14} />
          <span>Section 03 &bull; Theoretical Guarantees</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          3. Generalization Error &amp; Statistical Generalization Bounds
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <h3 className="text-base font-bold text-stone-900">3.1 The Generalization Gap</h3>
          <p>
            The <strong>Generalization Error</strong> (or Generalization Gap) is the difference between the true population risk and the empirical training risk:
          </p>
          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
            Generalization Gap = |R(h) &minus; R<sub>emp</sub>(h)|
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">3.2 Six Determinants of Generalization</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">1. Dataset Size (N)</div>
              <p className="text-xs text-stone-600">As N &rarr; &infin;, empirical risk converges to true risk by the Law of Large Numbers.</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">2. Hypothesis Complexity</div>
              <p className="text-xs text-stone-600">Higher capacity hypothesis spaces can shatter noise, widening the generalization gap.</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">3. Label Noise</div>
              <p className="text-xs text-stone-600">Stochastic corruptions in training targets force models into spurious decision boundaries.</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">4. Distribution Shift</div>
              <p className="text-xs text-stone-600">Covariate shift &Pcy;<sub>train</sub>(X) &ne; &Pcy;<sub>test</sub>(X) or concept drift invalidates i.i.d. guarantees.</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">5. Feature Informativeness</div>
              <p className="text-xs text-stone-600">High-dimensional redundant or uninformative features dilute true statistical signal.</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">6. Preprocessing Leakage</div>
              <p className="text-xs text-stone-600">Fitting imputers, scalers, or encoders on full data leaks test distribution info into training.</p>
            </div>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">3.3 Uniform Generalization Bounds</h3>
          <p>
            For a finite hypothesis class |&Hcy;|, Hoeffding&rsquo;s Inequality and the Union Bound guarantee that with probability at least 1 &minus; &delta;:
          </p>
          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
            R(h) &le; R<sub>emp</sub>(h) + &radic;[ (ln|&Hcy;| + ln(2/&delta;)) / (2N) ]
          </div>
          <p className="text-xs text-stone-600">
            This proves that true risk is strictly bounded by training error plus a complexity penalty term scaling inversely with &radic;N.
          </p>
        </div>
      </section>

      {/* SECTION 4: BIAS-VARIANCE DECOMPOSITION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Scale size={14} />
          <span>Section 04 &bull; Error Decomposition</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          4. Bias-Variance Decomposition: Mathematical Formulation &amp; Trade-off
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Assume the true data-generating process is y = f(x) + &epsilon;, where &epsilon; is zero-mean random noise with variance &sigma;<sup>2</sup>. When an estimator h<sub>D</sub>(x) is trained on random dataset D, the expected prediction error decomposes into three orthogonal components:
          </p>

          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto space-y-1">
            <div>&Eopf;<sub>D</sub>[(y &minus; h<sub>D</sub>(x))<sup>2</sup>] = Bias[h(x)]<sup>2</sup> + Var[h(x)] + &sigma;<sup>2</sup></div>
            <div className="text-stone-400 text-[11px]">
              where Bias[h(x)] = &Eopf;<sub>D</sub>[h<sub>D</sub>(x)] &minus; f(x) <br />
              and Var[h(x)] = &Eopf;<sub>D</sub>[(h<sub>D</sub>(x) &minus; &Eopf;<sub>D</sub>[h<sub>D</sub>(x)])<sup>2</sup>]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-bold text-orange-700 text-xs uppercase">Bias&sup2; (Underfitting)</div>
              <p className="text-xs text-stone-600">
                Error introduced by approximating complex reality with an overly simple model. High bias leads to systematic errors on both training and test data.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-bold text-orange-700 text-xs uppercase">Variance (Overfitting)</div>
              <p className="text-xs text-stone-600">
                Error introduced by model sensitivity to fluctuations in the training sample. High variance models fit idiosyncratic noise, showing great training error but poor generalization.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-bold text-orange-700 text-xs uppercase">Irreducible Error (&sigma;&sup2;)</div>
              <p className="text-xs text-stone-600">
                The intrinsic noise variance in the data generation process itself. Cannot be eliminated by any algorithm regardless of complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PAC LEARNING FUNDAMENTALS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Binary size={14} />
          <span>Section 05 &bull; Computational Learning Theory</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          5. PAC Learning Fundamentals: Probably Approximately Correct Framework
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Introduced by Leslie Valiant in 1984 (Turing Award 2010), <strong>Probably Approximately Correct (PAC)</strong> learning establishes formal mathematical criteria under which a concept class is efficiently learnable:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">Approximately Correct (&epsilon;)</div>
              <p className="text-xs text-stone-600">
                The error of the chosen hypothesis h with respect to the true concept c is bounded: R(h) &le; &epsilon;, where &epsilon; &gt; 0 is an error tolerance parameter.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">Probably (1 &minus; &delta;)</div>
              <p className="text-xs text-stone-600">
                Because the training sample is random, there is a small failure probability &delta;. The learning algorithm guarantees success with confidence at least 1 &minus; &delta;.
              </p>
            </div>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">5.1 Sample Complexity Formula</h3>
          <p>
            For a finite hypothesis class &Hcy; under the realizable assumption (where the true concept c<sup>*</sup> &isin; &Hcy;), any algorithm that outputs an empirical zero-error hypothesis requires a sample size N satisfying:
          </p>
          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
            N &ge; (1 / &epsilon;) &middot; [ ln|&Hcy;| + ln(1 / &delta;) ]
          </div>
          <p className="text-xs text-stone-600">
            <strong>Key Insight:</strong> Sample complexity scales logarithmically with hypothesis space size |&Hcy;|, but linearly with 1/&epsilon;. In agnostic PAC learning (where c<sup>*</sup> may not be in &Hcy;), sample complexity scales with (1/&epsilon;<sup>2</sup>).
          </p>
        </div>
      </section>

      {/* SECTION 6: VC DIMENSION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Box size={14} />
          <span>Section 06 &bull; Capacity Measurement</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          6. Vapnik-Chervonenkis (VC) Dimension: Measuring Infinite Hypothesis Classes
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Real-world model classes (such as linear classifiers in &Ropf;<sup>d</sup> or neural networks) contain an <em>infinite</em> number of hypotheses, rendering |&Hcy;| = &infin; and the basic PAC bound uninformative. Vladimir Vapnik and Alexey Chervonenkis solved this by introducing the <strong>VC Dimension</strong>.
          </p>

          <h3 className="text-base font-bold text-stone-900">6.1 Shattering Defined</h3>
          <p>
            A set of N points S = &#123;x<sub>1</sub>, ..., x<sub>N</sub>&#125; is said to be <strong>shattered</strong> by hypothesis class &Hcy; if for <em>every possible</em> binary labeling of the N points (all 2<sup>N</sup> combinations), there exists some hypothesis h &isin; &Hcy; that perfectly achieves that labeling.
          </p>

          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-orange-950">
            <strong>VC Dimension (VC(&Hcy;)):</strong> The maximum number of points N that can be shattered by &Hcy;. If &Hcy; can shatter arbitrarily large sets of points, VC(&Hcy;) = &infin;.
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">6.2 Canonical VC Dimensions</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-xl overflow-hidden">
              <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                <tr>
                  <th className="p-3">Hypothesis Class &Hcy;</th>
                  <th className="p-3">VC Dimension</th>
                  <th className="p-3">Geometric Proof / Explanation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="p-3 font-semibold">1D Thresholds: h(x) = sign(x &minus; &theta;)</td>
                  <td className="p-3 font-mono text-orange-700 font-bold">1</td>
                  <td className="p-3">Cannot classify 2 points labeled (+, &minus;) if point 1 &lt; point 2</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">1D Intervals: h(x) = 1 if a &le; x &le; b</td>
                  <td className="p-3 font-mono text-orange-700 font-bold">2</td>
                  <td className="p-3">Cannot shatter 3 points with labels (+, &minus;, +)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">2D Linear Classifiers: sign(w<sub>1</sub>x<sub>1</sub> + w<sub>2</sub>x<sub>2</sub> + b)</td>
                  <td className="p-3 font-mono text-orange-700 font-bold">3</td>
                  <td className="p-3">Can shatter 3 non-collinear points. Cannot shatter XOR configuration of 4 points.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">d-Dimensional Linear Hyperplanes in &Ropf;<sup>d</sup></td>
                  <td className="p-3 font-mono text-orange-700 font-bold">d + 1</td>
                  <td className="p-3">Can shatter d+1 points in general position (Radon&rsquo;s Theorem).</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">1D Sine Function: sign(sin(&omega;x))</td>
                  <td className="p-3 font-mono text-orange-700 font-bold">&infin;</td>
                  <td className="p-3">Can shatter an infinite number of points despite having only 1 parameter &omega;!</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">6.3 Generalization Bound via VC Dimension</h3>
          <p>
            Vapnik proved that with probability at least 1 &minus; &delta;, for all h &isin; &Hcy; with VC(&Hcy;) = d:
          </p>
          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
            R(h) &le; R<sub>emp</sub>(h) + &radic;[ (d &middot; [ln(2N / d) + 1] + ln(4 / &delta;)) / N ]
          </div>
        </div>
      </section>

      {/* SECTION 7: STRUCTURAL RISK MINIMIZATION (SRM) */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Layers size={14} />
          <span>Section 07 &bull; Inductive Principle</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          7. Structural Risk Minimization (SRM): Balancing Empirical Fit &amp; Capacity
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            While ERM minimizes only training error R<sub>emp</sub>(h), <strong>Structural Risk Minimization (SRM)</strong> directly minimizes the statistical generalization upper bound.
          </p>

          <h3 className="text-base font-bold text-stone-900">7.1 Nested Hypothesis Structure</h3>
          <p>
            Define a nested hierarchy of hypothesis spaces with increasing VC dimension:
          </p>
          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
            &Hcy;<sub>1</sub> &sub; &Hcy;<sub>2</sub> &sub; &Hcy;<sub>3</sub> &sub; ... &sub; &Hcy;<sub>k</sub>, &nbsp; where d<sub>1</sub> &lt; d<sub>2</sub> &lt; d<sub>3</sub> &lt; ... &lt; d<sub>k</sub>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">7.2 The SRM Objective Function</h3>
          <p>
            For each hypothesis class &Hcy;<sub>k</sub>, SRM computes the empirical minimizer h<sub>k</sub> and selects the index k<sup>*</sup> that minimizes the joint bound:
          </p>
          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
            min<sub>k</sub> [ R<sub>emp</sub>(h<sub>k</sub>) + &Phi;(d<sub>k</sub>, N, &delta;) ]
          </div>
          <p className="text-xs text-stone-600">
            As model complexity d increases, R<sub>emp</sub>(h) monotonically decreases, while the complexity penalty &Phi;(d) monotonically increases. SRM identifies the unique minimum of this U-shaped total risk curve.
          </p>
        </div>
      </section>

      {/* SECTION 8: REGULARIZATION THEORY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Sliders size={14} />
          <span>Section 08 &bull; Mathematical Regularization</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          8. Regularization Theory: L1, L2, Elastic Net &amp; Geometric Foundations
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Regularization is the practical realization of Structural Risk Minimization. By augmenting the empirical loss function with a norm penalty &Omega;(w), we constrain effective capacity:
          </p>
          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
            L<sub>reg</sub>(w) = R<sub>emp</sub>(w) + &lambda; &Omega;(w)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-bold text-orange-700 text-xs uppercase">L2 Regularization (Ridge)</div>
              <p className="text-xs text-stone-600 font-mono">&Omega;(w) = ||w||<sub>2</sub><sup>2</sup> = &sum; w<sub>j</sub><sup>2</sup></p>
              <p className="text-xs text-stone-600">
                Equivalent to a zero-mean Gaussian prior. Shrinks coefficients continuously toward zero; handles multicollinearity by distributing weight across correlated features.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-bold text-orange-700 text-xs uppercase">L1 Regularization (Lasso)</div>
              <p className="text-xs text-stone-600 font-mono">&Omega;(w) = ||w||<sub>1</sub> = &sum; |w<sub>j</sub>|</p>
              <p className="text-xs text-stone-600">
                Equivalent to a Laplacian prior. Non-differentiable sharp corners at w<sub>j</sub>=0 induce exact feature sparsity, performing automatic feature selection.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-bold text-orange-700 text-xs uppercase">Elastic Net</div>
              <p className="text-xs text-stone-600 font-mono">&Omega;(w) = &alpha;||w||<sub>1</sub> + ((1&minus;&alpha;)/2)||w||<sub>2</sub><sup>2</sup></p>
              <p className="text-xs text-stone-600">
                Convex combination of L1 and L2 penalties. Combines Lasso sparsity with Ridge stability when features exceed observations (p &gt; n) or features are collinear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: MODEL ASSUMPTIONS & VALIDATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <CheckCircle2 size={14} />
          <span>Section 09 &bull; Statistical Diagnostics</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          9. Model Assumptions: Theoretical Prerequisites &amp; Diagnostic Tests
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Every machine learning algorithm relies on underlying mathematical assumptions about data distributions. Violating these assumptions degrades parameter estimation and generalization.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-xl overflow-hidden">
              <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                <tr>
                  <th className="p-3">Core Assumption</th>
                  <th className="p-3">What it Means</th>
                  <th className="p-3">Diagnostic Tool / Test</th>
                  <th className="p-3">Remediation if Violated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="p-3 font-semibold">Linearity</td>
                  <td className="p-3">Conditional expectation E[Y|X] is a linear combination of features</td>
                  <td className="p-3 font-mono">Residual vs Fitted plot</td>
                  <td className="p-3">Polynomial terms, splines, tree models</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Homoscedasticity</td>
                  <td className="p-3">Residual variance Var(&epsilon;|X) is constant across all feature levels</td>
                  <td className="p-3 font-mono">Breusch-Pagan / White test</td>
                  <td className="p-3">Log / Box-Cox transform, Weighted Least Squares</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Residual Independence</td>
                  <td className="p-3">Errors are uncorrelated: Cov(&epsilon;<sub>i</sub>, &epsilon;<sub>j</sub>) = 0</td>
                  <td className="p-3 font-mono">Durbin-Watson test (autocorrelation)</td>
                  <td className="p-3">Time series lags, clustered standard errors</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">No Multicollinearity</td>
                  <td className="p-3">Features are not linear combinations of each other</td>
                  <td className="p-3 font-mono">Variance Inflation Factor (VIF &gt; 5)</td>
                  <td className="p-3">Ridge regularization, PCA, feature pruning</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">i.i.d. Sampling</td>
                  <td className="p-3">Training and testing data originate from the identical distribution</td>
                  <td className="p-3 font-mono">Adversarial validation, drift detection</td>
                  <td className="p-3">Domain adaptation, importance weighting</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 10: SEMI-SUPERVISED LEARNING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Share2 size={14} />
          <span>Section 10 &bull; Low-Resource Learning</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          10. Semi-Supervised Learning (SSL): Core Assumptions &amp; Taxonomy
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            In industry settings, unlabeled data is abundant and cheap, while labeled data requires expensive human domain expertise. <strong>Semi-Supervised Learning (SSL)</strong> learns from a small labeled set L = &#123;(x<sub>1</sub>, y<sub>1</sub>), ..., (x<sub>l</sub>, y<sub>l</sub>)&#125; and a large unlabeled pool U = &#123;x<sub>l+1</sub>, ..., x<sub>l+u</sub>&#125;.
          </p>

          <h3 className="text-base font-bold text-stone-900">10.1 The Three Fundamental SSL Assumptions</h3>
          <p>
            Unlabeled data only provides information about P(Y|X) if the marginal data distribution P(X) carries information about target boundaries. SSL algorithms depend on three structural assumptions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-bold text-orange-700 text-xs uppercase">1. Smoothness Assumption</div>
              <p className="text-xs text-stone-600">
                If two points x<sub>1</sub> and x<sub>2</sub> in high-density regions are close in input space, their labels y<sub>1</sub> and y<sub>2</sub> should be identical.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-bold text-orange-700 text-xs uppercase">2. Cluster Assumption</div>
              <p className="text-xs text-stone-600">
                Points belonging to the same cluster share the same label. Consequently, decision boundaries must traverse low-density regions between clusters.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-bold text-orange-700 text-xs uppercase">3. Manifold Assumption</div>
              <p className="text-xs text-stone-600">
                High-dimensional input data lies on or near a lower-dimensional manifold. Unlabeled data allows learning the intrinsic geometry of this manifold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 & 12: SELF-TRAINING & PSEUDO-LABELING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Code size={14} />
          <span>Sections 11 &amp; 12 &bull; Algorithms &amp; Implementation</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          11 &amp; 12. Self-Training &amp; Pseudo-Labeling with Scikit-learn
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            <strong>Self-Training</strong> is an iterative wrapper method that bootstraps from labeled data L by assigning <strong>pseudo-labels</strong> to high-confidence samples in unlabeled pool U:
          </p>

          <ol className="list-decimal list-inside space-y-1.5 pl-2 text-stone-600">
            <li>Train initial supervised base classifier f on labeled set L.</li>
            <li>Evaluate model predicted probability distributions P(y|x) for all x &isin; U.</li>
            <li>Select subset U<sup>*</sup> = &#123;x &isin; U : max<sub>c</sub> P(Y=c|x) &ge; &tau;&#125; where &tau; is confidence threshold (e.g. 0.85).</li>
            <li>Assign predicted argmax labels as pseudo-labels: &ycirc; = argmax<sub>c</sub> P(Y=c|x).</li>
            <li>Add (U<sup>*</sup>, &ycirc;) to labeled training pool: L &larr; L &cup; (U<sup>*</sup>, &ycirc;), and remove from U &larr; U \ U<sup>*</sup>.</li>
            <li>Retrain base model f on augmented dataset and iterate until convergence or max iterations.</li>
          </ol>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
            <strong>Pitfall &mdash; Confirmation Bias:</strong> If the model makes early high-confidence errors, it introduces corrupt pseudo-labels into L, progressively reinforcing its own mistakes in subsequent iterations.
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">Production Python Implementation</h3>
          <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto space-y-1">
            <div className="text-stone-400"># Scikit-learn SelfTrainingClassifier Implementation:</div>
            <div>import numpy as np</div>
            <div>from sklearn.datasets import make_classification</div>
            <div>from sklearn.model_selection import train_test_split</div>
            <div>from sklearn.preprocessing import StandardScaler</div>
            <div>from sklearn.pipeline import Pipeline</div>
            <div>from sklearn.linear_model import LogisticRegression</div>
            <div>from sklearn.semi_supervised import SelfTrainingClassifier</div>
            <div>from sklearn.metrics import accuracy_score, classification_report</div>
            <br />
            <div># 1. Generate synthetic dataset with 3,000 samples</div>
            <div>X, y = make_classification(n_samples=3000, n_features=10, n_informative=6, n_classes=2, random_state=42)</div>
            <div>X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)</div>
            <br />
            <div># 2. Simulate small labeled seed (150 observations); mark unlabeled with -1</div>
            <div>rng = np.random.default_rng(42)</div>
            <div>labeled_idx = rng.choice(len(X_train), size=150, replace=False)</div>
            <div>y_semi = np.full(len(y_train), -1)</div>
            <div>y_semi[labeled_idx] = y_train[labeled_idx]</div>
            <br />
            <div># 3. Base estimator &amp; SelfTrainingClassifier with confidence threshold 0.85</div>
            <div>base_model = Pipeline([(&quot;scaler&quot;, StandardScaler()), (&quot;clf&quot;, LogisticRegression(max_iter=1000))])</div>
            <div>st_clf = SelfTrainingClassifier(estimator=base_model, criterion=&quot;threshold&quot;, threshold=0.85, max_iter=10)</div>
            <div>st_clf.fit(X_train, y_semi)</div>
            <br />
            <div># 4. Evaluate generalization on unseen held-out test data</div>
            <div>y_pred = st_clf.predict(X_test)</div>
            <div>print(f&quot;Accuracy: &#123;accuracy_score(y_test, y_pred):.4f&#125;&quot;)</div>
            <div>print(f&quot;Self-Training Iterations: &#123;st_clf.n_iter_&#125;&quot;)</div>
          </div>
        </div>
      </section>

      {/* SECTION 13: ACTIVE LEARNING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Eye size={14} />
          <span>Section 13 &bull; Human-in-the-Loop</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          13. Active Learning: Query Strategies &amp; Label Efficiency
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Unlike passive learning where the training dataset is sampled randomly, <strong>Active Learning</strong> enables the algorithm to actively query an oracle (human domain expert) to label the most informative observations from an unlabeled pool.
          </p>

          <h3 className="text-base font-bold text-stone-900">13.1 Major Query Strategies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-bold text-orange-700 text-xs uppercase">1. Least Confidence</div>
              <p className="text-xs text-stone-600 font-mono">x<sup>*</sup> = argmax<sub>x</sub> [ 1 &minus; max<sub>c</sub> P(y=c|x) ]</p>
              <p className="text-xs text-stone-600">
                Selects the sample whose most likely class probability is smallest. Queries instances where the model is most doubtful about its top prediction.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-bold text-orange-700 text-xs uppercase">2. Margin Sampling</div>
              <p className="text-xs text-stone-600 font-mono">x<sup>*</sup> = argmin<sub>x</sub> [ P(&ycirc;<sub>1</sub>|x) &minus; P(&ycirc;<sub>2</sub>|x) ]</p>
              <p className="text-xs text-stone-600">
                Selects the instance with the smallest difference between the two highest class probabilities. Directly isolates points closest to the decision boundary.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-bold text-orange-700 text-xs uppercase">3. Entropy Uncertainty</div>
              <p className="text-xs text-stone-600 font-mono">x<sup>*</sup> = argmax<sub>x</sub> [ &minus;&sum; P(y|x) log P(y|x) ]</p>
              <p className="text-xs text-stone-600">
                Considers the entire class probability distribution, maximizing Shannon entropy. Captures overall predictive ambiguity in multiclass problems.
              </p>
            </div>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">13.2 Active Learning vs. Semi-Supervised Learning</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-xl overflow-hidden">
              <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                <tr>
                  <th className="p-3">Dimension</th>
                  <th className="p-3">Active Learning</th>
                  <th className="p-3">Semi-Supervised Learning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="p-3 font-semibold">Human Oracle</td>
                  <td className="p-3">Requires human-in-the-loop to label queried items</td>
                  <td className="p-3">Fully automated; model generates synthetic pseudo-labels</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Query Target</td>
                  <td className="p-3">Selects <strong>least confident</strong> / highest uncertainty samples</td>
                  <td className="p-3">Selects <strong>most confident</strong> / highest certainty samples</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Label Noise</td>
                  <td className="p-3">Ground-truth labels (high fidelity)</td>
                  <td className="p-3">Risk of error propagation and confirmation bias</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 14: TRANSFER LEARNING */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Sparkles size={14} />
          <span>Section 14 &bull; Cross-Domain Generalization</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          14. Transfer Learning Concepts &amp; Statistical Significance
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Transfer learning exploits knowledge learned in a source domain &Dcy;<sub>S</sub> with task T<sub>S</sub> to accelerate learning and improve generalization in a target domain &Dcy;<sub>T</sub> with task T<sub>T</sub>.
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-stone-600">
            <li><strong>Feature Extraction:</strong> Freezing pre-trained feature representation layers and fitting a lightweight linear head on target task data.</li>
            <li><strong>Fine-Tuning:</strong> Initializing model weights from source training and updating layers with a small learning rate on the target dataset.</li>
            <li><strong>Statistical Regularization:</strong> Pre-trained weights serve as an informed Bayesian inductive prior, effectively restricting the reachable hypothesis space and dramatically lowering the VC sample complexity needed on the target task.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 15, 16 & 17: RESEARCH METHODOLOGY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <FlaskConical size={14} />
          <span>Sections 15, 16 &amp; 17 &bull; Scientific Research Methodology</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          15, 16 &amp; 17. Experimental Design, Ablation Studies &amp; Reproducibility
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <h3 className="text-base font-bold text-stone-900">15. Controlled Experimental Design in ML</h3>
          <p>
            Rigorous machine learning research follows the scientific method rather than haphazard trial-and-error:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">1. Research Hypothesis</div>
              <p className="text-xs text-stone-600">State a clear, falsifiable scientific proposition (e.g. &quot;Self-training with &tau;=0.9 improves macro F1 over supervised baseline by &ge;3% on 10% labels&quot;).</p>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">2. Strong Baselines</div>
              <p className="text-xs text-stone-600">Always benchmark against well-tuned canonical baselines (e.g., Logistic Regression, Gradient Boosting), not undertuned defaults.</p>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">3. Controlled Variables</div>
              <p className="text-xs text-stone-600">Fix test sets, feature preprocessing pipelines, and evaluation splits across all compared models.</p>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-xs mb-1">4. Statistical Significance</div>
              <p className="text-xs text-stone-600">Report mean &plusmn; standard deviation across at least 5 different random seeds; perform paired t-tests or Wilcoxon signed-rank tests.</p>
            </div>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">16. Ablation Studies: Dissecting Model Architecture</h3>
          <p>
            An <strong>Ablation Study</strong> systematically removes, disables, or replaces individual model components to determine their exact causal contribution to overall performance.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-xl overflow-hidden">
              <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                <tr>
                  <th className="p-3">Variant Evaluated</th>
                  <th className="p-3">Component Removed / Altered</th>
                  <th className="p-3">Test Accuracy</th>
                  <th className="p-3">&Delta; Accuracy</th>
                  <th className="p-3">Research Finding</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 font-mono">
                <tr>
                  <td className="p-3 font-semibold font-sans">Full Proposed Model</td>
                  <td className="p-3">None (All components active)</td>
                  <td className="p-3 font-bold text-emerald-700">88.4%</td>
                  <td className="p-3">&mdash;</td>
                  <td className="p-3 font-sans">Baseline proposed performance</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold font-sans">w/o Self-Training</td>
                  <td className="p-3">Remove pseudo-labeling loop</td>
                  <td className="p-3 text-red-600">81.2%</td>
                  <td className="p-3 text-red-600">&minus;7.2%</td>
                  <td className="p-3 font-sans">Unlabeled pool provides huge statistical gain</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold font-sans">w/o Confidence Threshold</td>
                  <td className="p-3">Accept all pseudo-labels (&tau;=0)</td>
                  <td className="p-3 text-amber-700">76.8%</td>
                  <td className="p-3 text-red-600">&minus;11.6%</td>
                  <td className="p-3 font-sans">Confirmation bias severely corrupts model</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold font-sans">w/o Feature Scaler</td>
                  <td className="p-3">Remove StandardScaler</td>
                  <td className="p-3 text-stone-700">85.1%</td>
                  <td className="p-3 text-stone-600">&minus;3.3%</td>
                  <td className="p-3 font-sans">Standardization aids gradient stability</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">17. The Seven Pillars of Reproducible ML Research</h3>
          <p>
            To address the machine learning reproducibility crisis, research pipelines must adhere to seven rigor principles:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
              <strong>1. Deterministic Random Seeds:</strong> Explicitly fix random seeds across standard Python libraries:
              <pre className="bg-stone-900 text-stone-100 p-2 rounded mt-1 font-mono text-[11px]">
                import random, os, numpy as np{"\n"}
                random.seed(42){"\n"}
                np.random.seed(42){"\n"}
                os.environ[&apos;PYTHONHASHSEED&apos;] = &apos;42&apos;
              </pre>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
              <strong>2. Environment Pinning:</strong> Provide exact lockfiles (requirements.txt, Pipfile.lock, or Docker container) specifying exact CUDA, PyTorch/TensorFlow, and Scikit-learn versions.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
              <strong>3. Automated Experiment Tracking:</strong> Log all parameters, metric histories, artifacts, and confusion matrices to tools like MLflow or Weights &amp; Biases.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
              <strong>4. Honest Reporting:</strong> Report negative results, hyperparameter sweeps, computational budget consumed (GPU hours), and failure modes alongside peak test scores.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 18: READING & IMPLEMENTING RESEARCH PAPERS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <BookOpen size={14} />
          <span>Section 18 &bull; Literature Mastery</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          18. Reading &amp; Implementing Machine Learning Research Papers
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <h3 className="text-base font-bold text-stone-900">18.1 The Three-Pass Reading Methodology</h3>
          <p>
            Expert ML practitioners never read research papers sequentially from start to finish. Instead, follow S. Keshav&rsquo;s 3-pass methodology:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="font-bold text-orange-700 text-xs uppercase">Pass 1: Birds-Eye View (5&ndash;10 min)</div>
              <p className="text-xs text-stone-600">
                Read title, abstract, introduction, section headings, and conclusion. Skim figures and table captions. Goal: Determine the core claim, novelty, and relevance.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="font-bold text-orange-700 text-xs uppercase">Pass 2: Grasp Content (1 hour)</div>
              <p className="text-xs text-stone-600">
                Read the methodology and experimental sections with care. Understand main diagrams, algorithms, and metric comparisons. Mark uncomprehended proofs or terms.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="font-bold text-orange-700 text-xs uppercase">Pass 3: Virtual Re-Implementation (2&ndash;4 hours)</div>
              <p className="text-xs text-stone-600">
                Mentally recreate the paper: assume you are building the system from scratch. Verify every mathematical step, boundary condition, and experimental loophole.
              </p>
            </div>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">18.2 Essential Canonical Research Papers</h3>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-stone-600 text-xs">
            <li><strong>PAC Learning:</strong> Leslie Valiant (1984) &mdash; <em>&quot;A Theory of the Learnable&quot;</em> (CACM).</li>
            <li><strong>Statistical Learning Theory &amp; SRM:</strong> Vladimir Vapnik (1998) &mdash; <em>&quot;Statistical Learning Theory&quot;</em> (Wiley).</li>
            <li><strong>Lasso Regression:</strong> Robert Tibshirani (1996) &mdash; <em>&quot;Regression Shrinkage and Selection via the Lasso&quot;</em> (JRSS).</li>
            <li><strong>Semi-Supervised Learning Survey:</strong> Xiaojin Zhu (2005) &mdash; <em>&quot;Semi-Supervised Learning Literature Survey&quot;</em> (Univ. of Wisconsin).</li>
            <li><strong>Active Learning Survey:</strong> Burr Settles (2009) &mdash; <em>&quot;Active Learning Literature Survey&quot;</em> (Univ. of Wisconsin).</li>
          </ul>
        </div>
      </section>

      {/* SECTION 19: PRACTICAL CAPSTONE PROJECT */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <Microscope size={14} />
          <span>Section 19 &bull; Capstone Project</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          19. Practical Research Project: Semi-Supervised Learning with Limited Labels
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            In this capstone research exercise, you will investigate whether semi-supervised self-training improves classification performance across varying label budgets (10%, 25%, and 50% labels) on a controlled classification benchmark.
          </p>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="font-bold text-stone-900 text-xs mb-2">Experimental Design Matrix:</div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-lg overflow-hidden bg-white">
                <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                  <tr>
                    <th className="p-2.5">Experiment</th>
                    <th className="p-2.5">Labeled Training Ratio</th>
                    <th className="p-2.5">Unlabeled Pool Ratio</th>
                    <th className="p-2.5">Algorithm Method</th>
                    <th className="p-2.5">Primary Research Metric</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 font-mono">
                  <tr>
                    <td className="p-2.5 font-bold">Exp A (Baseline)</td>
                    <td className="p-2.5">10% (150 samples)</td>
                    <td className="p-2.5">0% (Discarded)</td>
                    <td className="p-2.5 font-sans">Supervised Logistic Regression</td>
                    <td className="p-2.5 font-sans">Test Accuracy, Macro F1</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">Exp B</td>
                    <td className="p-2.5">10% (150 samples)</td>
                    <td className="p-2.5">90% (1,350 samples)</td>
                    <td className="p-2.5 font-sans">Self-Training (threshold &tau;=0.85)</td>
                    <td className="p-2.5 font-sans">Accuracy &Delta; over Exp A</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">Exp C</td>
                    <td className="p-2.5">25% (375 samples)</td>
                    <td className="p-2.5">75% (1,125 samples)</td>
                    <td className="p-2.5 font-sans">Self-Training (threshold &tau;=0.85)</td>
                    <td className="p-2.5 font-sans">Marginal label value</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">Exp D</td>
                    <td className="p-2.5">50% (750 samples)</td>
                    <td className="p-2.5">50% (750 samples)</td>
                    <td className="p-2.5 font-sans">Self-Training (threshold &tau;=0.85)</td>
                    <td className="p-2.5 font-sans">Saturation analysis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 20 & 22 & 23: ASSIGNMENTS, TOOLS, SUMMARY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase">
          <CheckCircle2 size={14} />
          <span>Sections 20, 22 &amp; 23 &bull; Assignments &amp; Synthesis</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
          20, 22 &amp; 23. Module Assignments, Recommended Tools &amp; Final Summary
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <h3 className="text-base font-bold text-stone-900">20. Hands-on Research Assignments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="font-bold text-stone-900 text-xs">Assignment 1: Statistical Bounds Computation</div>
              <p className="text-xs text-stone-600">
                Implement a Python function computing Hoeffding uniform generalization bounds and VC bounds for varying sample sizes N &isin; [50, 10,000] and error tolerances &delta;.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="font-bold text-stone-900 text-xs">Assignment 2: Bias-Variance Simulation</div>
              <p className="text-xs text-stone-600">
                Simulate 100 independent training draws from y = sin(&pi;x) + &epsilon;. Fit polynomial degrees 1 through 10 and compute empirical bias, variance, and test error curves.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="font-bold text-stone-900 text-xs">Assignment 3: Active Learning Query Engine</div>
              <p className="text-xs text-stone-600">
                Build an uncertainty sampling query pipeline. Compare label efficiency of margin sampling against random passive labeling across 20 query iterations.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="font-bold text-stone-900 text-xs">Assignment 4: Paper Reproduction Report</div>
              <p className="text-xs text-stone-600">
                Select a foundational SSL paper from Papers With Code. Replicate its core experiment on a benchmark dataset and write a 2-page reproducibility report with ablation metrics.
              </p>
            </div>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">22. Recommended Engineering &amp; Research Tools</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-xl overflow-hidden">
              <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                <tr>
                  <th className="p-3">Tool / Platform</th>
                  <th className="p-3">Core Research Function</th>
                  <th className="p-3">Primary Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="p-3 font-semibold">Scikit-learn</td>
                  <td className="p-3">Machine learning algorithms, pipelines, cross-validation, and SSL modules</td>
                  <td className="p-3 font-mono text-[11px]">SelfTrainingClassifier, LabelPropagation</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">MLflow / Weights &amp; Biases</td>
                  <td className="p-3">Experiment tracking, metric logging, model registry</td>
                  <td className="p-3 font-mono text-[11px]">Tracking runs across multiple random seeds</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Papers With Code</td>
                  <td className="p-3">Open-source research papers, leaderboards, code implementations</td>
                  <td className="p-3 font-mono text-[11px]">Literature review and baseline discovery</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">modAL / ALiPy</td>
                  <td className="p-3">Active learning modular frameworks in Python</td>
                  <td className="p-3 font-mono text-[11px]">Uncertainty, margin, and entropy query loops</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-stone-900 pt-2">23. Final Track Synthesis</h3>
          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-stone-800 leading-relaxed">
            Congratulations! You have completed all 21 comprehensive modules of the Machine Learning Curriculum. From core Python numerical foundations (NumPy, Pandas, EDA) through classical supervised algorithms (Regression, Logistic Regression, Trees, Random Forests, Boosting, SVMs, KNN, Naive Bayes), evaluation &amp; pipelines, unsupervised clustering, dimensionality reduction, anomaly detection, recommendation systems, time-series forecasting, probabilistic Bayesian methods, and statistical learning research theory &mdash; you possess a world-class foundation spanning mathematical theory, algorithmic implementation, and production-grade engineering.
          </div>
        </div>
      </section>
    </div>
  );
}
