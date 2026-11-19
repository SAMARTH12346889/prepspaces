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
} from "lucide-react";

export default function MachineLearningProbabilisticMLSections() {
  return (
    <div className="space-y-8">
      {/* SECTION 1: PROBABILISTIC MODELING FUNDAMENTALS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 01
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Foundations of Uncertainty
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          1. Probabilistic Modeling Fundamentals &amp; Random Variables
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Traditional deterministic machine learning trains a functional mapping <em>y&#770; = f(x)</em> that predicts a single, fixed numerical value or class label with no expression of confidence. In contrast, <strong>Probabilistic Machine Learning</strong> models the complete conditional probability distribution:
        </p>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs sm:text-sm space-y-3">
          <div className="text-orange-400 font-sans font-bold text-sm">Deterministic Point Estimate vs Conditional Distribution</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-stone-800 rounded-xl space-y-1">
              <span className="text-stone-400 font-sans font-bold block">Deterministic Model</span>
              <div className="text-white font-mono">y&#770; = ₹75,00,000</div>
              <span className="text-[11px] text-stone-400 font-sans">Zero indication of variance, noise, or error bounds.</span>
            </div>
            <div className="p-3 bg-stone-800 rounded-xl space-y-1">
              <span className="text-orange-300 font-sans font-bold block">Probabilistic Model</span>
              <div className="text-white font-mono">P(y | x) &sim; N(&mu;(x), &sigma;&sup2;(x))</div>
              <span className="text-[11px] text-stone-300 font-sans">Mean ₹75L with 90% predictive interval [₹68L, ₹82L].</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Discrete Variables</span>
            <h3 className="font-bold text-stone-900 text-sm">PMF (Mass Function)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Countable outcomes: spam classification, defective product counts, customer conversion status: <em>P(Y = Spam) = 0.85</em>.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Continuous Variables</span>
            <h3 className="font-bold text-stone-900 text-sm">PDF (Density Function)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Real-valued measurements: patient blood pressure, delivery arrival times, stock returns, building temperature.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Generative Models</span>
            <h3 className="font-bold text-stone-900 text-sm">Joint P(X, Y)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Models how data was generated: Naive Bayes, Gaussian Mixture Models, Hidden Markov Models, Variational Autoencoders.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Discriminative Models</span>
            <h3 className="font-bold text-stone-900 text-sm">Conditional P(Y | X)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Directly learns decision boundaries: Logistic Regression, Conditional Random Fields, calibrated neural network softmax outputs.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: CONDITIONAL PROBABILITY & BAYESIAN INFERENCE */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTIONS 02 &ndash; 03
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Belief Updating
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          2&ndash;3. Conditional Probability &amp; Bayesian Inference
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          <strong>Bayesian Inference</strong> is the principled mathematical calculus for updating our beliefs about unknown model parameters &theta; upon observing empirical training evidence <em>D</em>:
        </p>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
          <h3 className="font-bold text-stone-900 text-sm">Bayes&rsquo; Theorem for Machine Learning Parameters</h3>
          <div className="p-4 rounded-xl bg-white border border-stone-200 font-mono text-xs sm:text-sm text-stone-900 text-center">
            P(&theta; | D) = [ P(D | &theta;) &times; P(&theta;) ] / P(D) &emsp;&prop;&emsp; Likelihood &times; Prior
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-stone-600">
            <div className="p-3 rounded-xl bg-stone-100/70 space-y-1">
              <strong className="text-stone-900 block font-mono">P(&theta;): Prior</strong>
              Belief about parameters before seeing current training data (domain knowledge, sparsity expectations).
            </div>
            <div className="p-3 rounded-xl bg-stone-100/70 space-y-1">
              <strong className="text-stone-900 block font-mono">P(D | &theta;): Likelihood</strong>
              How probable the observed dataset is under a specific candidate parameter configuration &theta;.
            </div>
            <div className="p-3 rounded-xl bg-stone-100/70 space-y-1">
              <strong className="text-stone-900 block font-mono">P(&theta; | D): Posterior</strong>
              Updated probability distribution over parameter space combining prior conviction with observed data.
            </div>
            <div className="p-3 rounded-xl bg-stone-100/70 space-y-1">
              <strong className="text-stone-900 block font-mono">P(D): Evidence</strong>
              Marginal likelihood normalizing constant: &int; P(D | &theta;)P(&theta;) d&theta;.
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200 text-orange-950 text-xs sm:text-sm space-y-1">
          <span className="font-bold flex items-center gap-1.5 text-orange-800">
            <Sparkles size={15} /> The Beta-Binomial Conjugate Updating Example
          </span>
          <p className="leading-relaxed">
            Suppose an unknown coin has heads probability &theta;. We assume a weakly informative prior &theta; &sim; Beta(&alpha;=2, &beta;=2) (centered at 0.5). We toss 10 times and observe 7 heads and 3 tails. The posterior distribution updates analytically to Beta(2+7, 2+3) = Beta(9, 5), shifting the expected mean to 9/14 &asymp; 64.3%. The posterior retains a complete distribution reflecting our residual uncertainty.
          </p>
        </div>
      </section>

      {/* SECTION 4: PRIOR AND POSTERIOR DISTRIBUTIONS */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 04
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Distribution Families
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          4. Prior Distributions, Likelihoods &amp; Conjugate Families
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          A prior is <strong>conjugate</strong> to a likelihood function if the resulting posterior distribution belongs to the exact same probability family as the prior. Conjugacy enables closed-form algebraic posterior updates without intractable numerical integration:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-stone-200">
          <table className="w-full text-xs text-left">
            <thead className="bg-stone-100 text-stone-800 font-bold uppercase tracking-wider">
              <tr>
                <th className="p-3">Likelihood Model</th>
                <th className="p-3">Conjugate Prior</th>
                <th className="p-3">Posterior Family</th>
                <th className="p-3">Common ML Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Bernoulli / Binomial</td>
                <td className="p-3 font-mono">Beta(&alpha;, &beta;)</td>
                <td className="p-3 font-mono font-bold text-orange-700">Beta(&alpha; + k, &beta; + n &minus; k)</td>
                <td className="p-3">Binary click-through rate (CTR) modeling, A/B testing</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Categorical / Multinomial</td>
                <td className="p-3 font-mono">Dirichlet(&alpha;&#8407;)</td>
                <td className="p-3 font-mono font-bold text-orange-700">Dirichlet(&alpha;&#8407; + c&#8407;)</td>
                <td className="p-3">Topic modeling (Latent Dirichlet Allocation), NLP vocabulary</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Gaussian (Known Variance)</td>
                <td className="p-3 font-mono">Gaussian N(&mu;<sub>0</sub>, &sigma;<sub>0</sub>&sup2;)</td>
                <td className="p-3 font-mono font-bold text-orange-700">Gaussian N(&mu;<sub>N</sub>, &sigma;<sub>N</sub>&sup2;)</td>
                <td className="p-3">Bayesian linear regression weights, sensor calibration</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Poisson (Event Counts)</td>
                <td className="p-3 font-mono">Gamma(&alpha;, &beta;)</td>
                <td className="p-3 font-mono font-bold text-orange-700">Gamma(&alpha; + &Sigma;y, &beta; + n)</td>
                <td className="p-3">Server failure frequency, customer arrival rates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 5 & 6: MLE VS MAP & REGULARIZATION CONNECTION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTIONS 05 &ndash; 06
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Parameter Estimation Paradigms
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          5&ndash;6. Maximum Likelihood (MLE) vs. MAP &amp; The Regularization Bridge
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Parameter estimation can be approached through three ascending tiers of sophistication:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-stone-600 uppercase">1. MLE (Frequentist)</span>
            <h3 className="font-bold text-stone-900 text-sm">&theta;&#770;<sub>MLE</sub> = argmax P(D | &theta;)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Finds parameters that make observed data most probable. Ignores prior knowledge; highly prone to severe overfitting on small datasets.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-orange-50/70 border border-orange-200 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">2. MAP (Bayesian Point)</span>
            <h3 className="font-bold text-stone-900 text-sm">&theta;&#770;<sub>MAP</sub> = argmax P(D | &theta;)P(&theta;)</h3>
            <p className="text-xs text-stone-700 leading-relaxed">
              Finds the mode of the posterior distribution. Pulls parameters toward prior constraints, mathematically equivalent to regularization.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="text-xs font-mono font-bold text-purple-600 uppercase">3. Full Bayesian Inference</span>
            <h3 className="font-bold text-stone-900 text-sm">P(&theta; | D) Distribution</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Refuses to collapse beliefs to a single point. Integrates over all plausible parameters to generate predictive distributions: <em>&int; P(y | x, &theta;)P(&theta; | D)d&theta;</em>.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
          <div className="text-orange-400 font-sans font-bold text-sm">
            The Fundamental Regularization Duality
          </div>
          <p className="text-stone-300 font-sans text-xs leading-relaxed">
            Taking the negative logarithm of the MAP objective reveals that classical regularization penalties are simply explicit prior distributions on weights:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-stone-800 rounded-xl space-y-1">
              <span className="text-white font-bold font-sans">Gaussian Prior &harr; L2 Regularization (Ridge)</span>
              <div>w &sim; N(0, &tau;&sup2;I) &rarr; Loss = NLL + &lambda; ||w||&sup2;<sub>2</sub></div>
              <p className="text-[11px] text-stone-400 font-sans">Shrinks weights smoothly toward zero without zeroing them out.</p>
            </div>
            <div className="p-3 bg-stone-800 rounded-xl space-y-1">
              <span className="text-white font-bold font-sans">Laplace Prior &harr; L1 Regularization (Lasso)</span>
              <div>w &sim; Laplace(0, b) &rarr; Loss = NLL + &lambda; ||w||<sub>1</sub></div>
              <p className="text-[11px] text-stone-400 font-sans">Sharp peak at zero forces coefficients to exact zero (feature sparsity).</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: BAYESIAN DECISION THEORY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 07
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Optimal Action Selection
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          7. Bayesian Decision Theory &amp; Expected Loss Minimization
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          A machine learning model should not always choose the outcome with the highest raw probability. When mistakes have asymmetric real-world consequences, <strong>Bayesian Decision Theory</strong> selects the action <em>a<sup>*</sup></em> that minimizes the expected operational loss:
        </p>

        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 font-mono text-xs sm:text-sm text-stone-900 text-center">
          a<sup>*</sup> = argmin<sub>a</sub> &Sigma;<sub>y</sub> L(a, y) &times; P(y | x)
        </div>

        <div className="overflow-x-auto rounded-2xl border border-stone-200">
          <table className="w-full text-xs text-left">
            <thead className="bg-stone-100 text-stone-800 font-bold uppercase tracking-wider">
              <tr>
                <th className="p-3">True State</th>
                <th className="p-3">Action: Approve Transaction</th>
                <th className="p-3">Action: Block / Challenge Transaction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Legitimate (90% prob)</td>
                <td className="p-3 font-mono text-emerald-700">Loss = 0 (Smooth user checkout)</td>
                <td className="p-3 font-mono text-amber-700">Loss = ₹50 (Customer friction / SMS cost)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Fraudulent (10% prob)</td>
                <td className="p-3 font-mono text-red-700 font-bold">Loss = ₹10,000 (Chargeback &amp; stolen funds)</td>
                <td className="p-3 font-mono text-emerald-700">Loss = ₹100 (Investigation overhead)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 text-red-950 space-y-1">
            <strong>Expected Loss of Approving:</strong>
            <div className="font-mono text-sm font-bold">0.90 &times; ₹0 + 0.10 &times; ₹10,000 = ₹1,000</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 space-y-1">
            <strong>Expected Loss of Blocking:</strong>
            <div className="font-mono text-sm font-bold">0.90 &times; ₹50 + 0.10 &times; ₹100 = ₹55</div>
          </div>
        </div>

        <p className="text-xs text-stone-600 leading-relaxed">
          <strong>Decision Insight:</strong> Even though the predicted probability of fraud is only 10%, blocking the transaction reduces expected operational loss by <strong>18&times;</strong>. Decision rules must marry calibrated probabilities with asymmetric loss matrices.
        </p>
      </section>

      {/* SECTION 8 & 9: BAYESIAN REGRESSION & CLASSIFICATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTIONS 08 &amp; 09
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Bayesian Linear Models
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          8&ndash;9. Bayesian Regression &amp; Bayesian Classification
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          In <strong>Bayesian Linear Regression</strong>, weights <em>w</em> are probability distributions rather than fixed scalars. Given prior <em>w &sim; N(m<sub>0</sub>, S<sub>0</sub>)</em> and Gaussian noise &sigma;&sup2;, the posterior weights follow <em>w | D &sim; N(m<sub>N</sub>, S<sub>N</sub>)</em>, generating an analytical predictive distribution for any new query point <em>x<sub>*</sub></em>:
        </p>

        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 font-mono text-xs sm:text-sm text-stone-900 text-center">
          y<sub>*</sub> | x<sub>*</sub>, D &sim; N( x<sub>*</sub><sup>T</sup> m<sub>N</sub> , &sigma;&sup2; + x<sub>*</sub><sup>T</sup> S<sub>N</sub> x<sub>*</sub> )
        </div>

        <p className="text-xs text-stone-600 leading-relaxed">
          Notice the predictive variance: <strong>&sigma;&sup2;</strong> is aleatoric observation noise, while <strong>x<sub>*</sub><sup>T</sup> S<sub>N</sub> x<sub>*</sub></strong> is epistemic parameter uncertainty that expands automatically as <em>x<sub>*</sub></em> moves away from training data clusters.
        </p>
      </section>

      {/* SECTION 10: GAUSSIAN PROCESSES */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 10
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Non-Parametric Function Priors
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          10. Gaussian Processes (GPs) &amp; Covariance Kernels
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          A <strong>Gaussian Process (GP)</strong> elevates Bayesian inference from parameter vectors to infinite-dimensional function spaces: <em>f(x) &sim; GP(m(x), k(x, x&prime;))</em>. Instead of constraining the hypothesis space to linear polynomials, a GP places a prior distribution over all possible continuous functions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-sm">Radial Basis Function (RBF) Kernel</span>
            <div className="p-3 bg-white rounded-xl border border-stone-200 font-mono text-xs text-stone-900">
              k(x, x&prime;) = &sigma;<sub>f</sub>&sup2; exp( &minus; ||x &minus; x&prime;||&sup2; / 2l&sup2; )
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Points close in feature space exhibit near-perfect correlation (1.0). Length scale <em>l</em> governs function smoothness, while &sigma;<sub>f</sub>&sup2; scales output amplitude.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-sm">Closed-Form GP Predictive Equations</span>
            <div className="p-2.5 bg-white rounded-xl border border-stone-200 font-mono text-[11px] text-stone-900 space-y-1">
              <div>&mu;<sub>*</sub> = k<sub>*</sub><sup>T</sup> ( K + &sigma;<sub>n</sub>&sup2;I )<sup>&minus;1</sup> y</div>
              <div>&sigma;<sub>*</sub>&sup2; = k(x<sub>*</sub>, x<sub>*</sub>) &minus; k<sub>*</sub><sup>T</sup> ( K + &sigma;<sub>n</sub>&sup2;I )<sup>&minus;1</sup> k<sub>*</sub></div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Provides exact mean predictions alongside analytical 95% confidence bounds (<em>&mu;<sub>*</sub> &plusmn; 1.96 &sigma;<sub>*</sub></em>).
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs space-y-1">
          <span className="font-bold text-amber-800 flex items-center gap-1.5">
            <AlertTriangle size={15} /> The GP Computational Complexity Bottleneck: O(n&sup3;)
          </span>
          <p className="leading-relaxed">
            Inverting the <em>n &times; n</em> kernel matrix <em>(K + &sigma;<sub>n</sub>&sup2;I)</em> scales as <strong>O(n&sup3;)</strong> in runtime and <strong>O(n&sup2;)</strong> in memory. For datasets exceeding ~10,000 points, sparse inducing-point approximations (e.g. FITC, SVGP) are required.
          </p>
        </div>
      </section>

      {/* SECTION 11: ALEATORIC VS EPISTEMIC UNCERTAINTY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 11
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Uncertainty Decomposition
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          11. Uncertainty Taxonomy: Aleatoric vs. Epistemic Uncertainty
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <span className="text-xs font-mono font-bold text-stone-600 uppercase">A. Aleatoric Uncertainty</span>
            <h3 className="font-bold text-stone-900 text-base">Inherent Stochastic Noise (Irreducible)</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Randomness intrinsic to the physical data-generation mechanism: thermal sensor vibration, inconsistent patient biological reactions, or random human shopper impulsivity.
            </p>
            <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-700 font-medium">
              <strong>Property:</strong> Cannot be reduced by gathering more training observations. It represents the irreducible floor &sigma;&sup2; of the system.
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-orange-50/70 border border-orange-200 space-y-3">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">B. Epistemic Uncertainty</span>
            <h3 className="font-bold text-stone-900 text-base">Model Knowledge Deficit (Reducible)</h3>
            <p className="text-xs text-stone-700 leading-relaxed">
              Ignorance resulting from limited or missing training samples in specific regions of feature space (e.g., predicting autonomous driving actions in snowy blizzard conditions after training only in sunny California).
            </p>
            <div className="p-3 bg-white border border-orange-200 rounded-xl text-xs text-orange-950 font-bold">
              <strong>Property:</strong> Can be systematically driven toward zero by collecting targeted training data in sparse regions (Active Learning).
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 & 13: PREDICTIVE DISTRIBUTIONS & CALIBRATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTIONS 12 &ndash; 13
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Calibration &amp; Reliability
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          12&ndash;13. Predictive Distributions &amp; Probability Calibration
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          A classification model is <strong>well-calibrated</strong> if its predicted confidence matches empirical ground-truth frequency: when it predicts 80% confidence across 1,000 observations, exactly ~800 of those predictions must be correct.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-sm">Overconfident Model</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Predicts 95% confidence for outcomes that occur only 65% of the time. Common in deep neural networks with uncalibrated softmax logits.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <span className="font-bold text-emerald-900 text-sm">Well-Calibrated Model</span>
            <p className="text-xs text-stone-700 leading-relaxed">
              Confidence levels mirror empirical frequencies across all bins: Reliability diagram traces the ideal 45&deg; diagonal.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 text-sm">Underconfident Model</span>
            <p className="text-xs text-stone-600 leading-relaxed">
              Predicts 55% confidence for outcomes that actually occur 85% of the time; overly conservative.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 14: MODEL UNCERTAINTY EVALUATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTION 14
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Uncertainty Verification
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          14. Evaluating Probabilistic Models: Log Loss, Brier Score &amp; ECE
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-200">
          <table className="w-full text-xs text-left">
            <thead className="bg-stone-100 text-stone-800 font-bold uppercase tracking-wider">
              <tr>
                <th className="p-3">Evaluation Metric</th>
                <th className="p-3">Mathematical Formulation</th>
                <th className="p-3">Diagnostic Significance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="p-3 font-semibold text-stone-900">Log Loss (Negative Log-Likelihood)</td>
                <td className="p-3 font-mono">&minus;1/N &Sigma; [ y<sub>i</sub> ln(p<sub>i</sub>) + (1&minus;y<sub>i</sub>) ln(1&minus;p<sub>i</sub>) ]</td>
                <td className="p-3">Severely penalizes confident incorrect predictions (e.g. predicting 0.99 for label 0 explodes loss).</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Brier Score</td>
                <td className="p-3 font-mono">1/N &Sigma; ( p<sub>i</sub> &minus; y<sub>i</sub> )&sup2;</td>
                <td className="p-3">Mean squared probability error &isin; [0, 1]. Decomposable into calibration, refinement, and uncertainty.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-orange-700">Expected Calibration Error (ECE)</td>
                <td className="p-3 font-mono">&Sigma; (|B<sub>m</sub>|/N) | acc(B<sub>m</sub>) &minus; conf(B<sub>m</sub>) |</td>
                <td className="p-3 font-semibold text-stone-900">Directly measures the average gap between confidence and empirical accuracy across probability bins.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">Continuous Ranked Probability Score (CRPS)</td>
                <td className="p-3 font-mono">&int; [ F(y) &minus; 1(y &ge; y<sub>true</sub>) ]&sup2; dy</td>
                <td className="p-3">Generalization of MAE to entire continuous predictive cumulative distribution functions (CDFs).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 15 & 16: WORKFLOW & PYTHON IMPLEMENTATION */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTIONS 15 &ndash; 16
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Executable Python Workflow
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          15&ndash;16. Complete Python Bayesian Inference Workflow
        </h2>
        <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
          Below is an executable script performing conjugate Beta-Binomial updating, computing analytical MLE, MAP, and Posterior Mean estimators, and comparing their behavior:
        </p>

        <pre className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`import numpy as np
from scipy.stats import beta

# 1. Define Prior Distribution (e.g. Beta(2, 2) centered at 0.5)
alpha_prior = 2
beta_prior = 2

# 2. Ingest Observed Evidence (e.g. 7 heads, 3 tails from 10 coin tosses)
heads = 7
tails = 3
total_trials = heads + tails

# 3. Analytical Conjugate Posterior Update
alpha_post = alpha_prior + heads    # 2 + 7 = 9
beta_post = beta_prior + tails      # 2 + 3 = 5

# 4. Point Estimators Comparison
mle = heads / total_trials                                # 0.7000 (Purely empirical)
map_est = (alpha_post - 1) / (alpha_post + beta_post - 2) # 0.6667 (Posterior mode with prior pull)
post_mean = alpha_post / (alpha_post + beta_post)         # 0.6429 (Expected value of posterior)
post_var = (alpha_post * beta_post) / ((alpha_post + beta_post)**2 * (alpha_post + beta_post + 1))

print(f"MLE Estimate:     {mle:.4f}")
print(f"MAP Estimate:     {map_est:.4f}")
print(f"Posterior Mean:   {post_mean:.4f}")
print(f"Posterior StdDev: {np.sqrt(post_var):.4f}")`}
        </pre>
      </section>

      {/* SECTION 17, 18, 19: SUMMARY & INTERVIEW MASTERY */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 font-mono">
            SECTIONS 17 &ndash; 19
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Synthesis &amp; Mastery
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          17&ndash;19. Conceptual Traps, Interview Questions &amp; Module Summary
        </h2>
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">
              Interview Q: "Why doesn't MAP estimation qualify as full Bayesian inference?"
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Answer:</strong> MAP produces only a single point estimate &theta;&#770;<sub>MAP</sub> by finding the peak (mode) of the posterior distribution, discarding all information regarding parameter spread, correlation, and uncertainty. Full Bayesian inference retains the entire posterior distribution P(&theta;|D) and integrates across all plausible hypotheses to form predictive distributions.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm">
              Interview Q: "How does Bayesian Linear Regression handle query points far from the training data?"
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Answer:</strong> The predictive variance is <em>&sigma;<sub>*</sub>&sup2; = &sigma;&sup2; + x<sub>*</sub><sup>T</sup> S<sub>N</sub> x<sub>*</sub></em>. For queries clustered near training points, <em>x<sub>*</sub><sup>T</sup> S<sub>N</sub> x<sub>*</sub></em> is small and the model is confident. As <em>x<sub>*</sub></em> extrapolates into unobserved feature space, this epistemic quadratic term expands outward, naturally widening prediction intervals to flag high uncertainty.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <h3 className="font-bold text-stone-900 text-base">Key Module Competencies Mastered</h3>
          <ul className="text-xs sm:text-sm text-stone-700 space-y-2 list-disc list-inside leading-relaxed">
            <li><strong>Probabilistic vs Deterministic:</strong> Modeling complete conditional distributions <em>P(y|x)</em> to quantify confidence and risk.</li>
            <li><strong>Bayesian Parameter Calculus:</strong> Updating prior beliefs <em>P(&theta;)</em> via likelihood <em>P(D|&theta;)</em> into posterior distributions <em>P(&theta;|D)</em>.</li>
            <li><strong>Conjugate Priors:</strong> Analytical closed-form updates for Beta-Binomial, Dirichlet-Multinomial, and Gaussian-Gaussian models.</li>
            <li><strong>Regularization Equivalence:</strong> Interpreting L2 Ridge penalties as Gaussian priors and L1 Lasso penalties as Laplace priors.</li>
            <li><strong>Bayesian Decision Theory:</strong> Choosing actions by minimizing expected operational loss under asymmetric cost matrices.</li>
            <li><strong>Gaussian Processes:</strong> Defining non-parametric priors over continuous functions with RBF kernels.</li>
            <li><strong>Uncertainty Separation:</strong> Distinguishing irreducible aleatoric data noise from reducible epistemic model ignorance.</li>
            <li><strong>Calibration Verification:</strong> Diagnosing overconfidence via reliability diagrams, Expected Calibration Error (ECE), and Brier scores.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
