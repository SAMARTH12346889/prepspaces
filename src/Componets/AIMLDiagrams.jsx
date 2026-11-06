import React, { useState, useMemo } from "react";
import { RotateCcw, Play } from "lucide-react";

/**
 * 1. Polynomial Regression & Overfitting Explorer (Bias-Variance Tradeoff)
 */
export function PolynomialOverfittingTool() {
  const [degree, setDegree] = useState(2);
  const [noiseLevel, setNoiseLevel] = useState(0.5);

  // 10 sample points generated from true function y = 0.5 * x^2 - x + 1 + noise
  const truePoints = useMemo(() => {
    const pts = [
      { x: -2.0, y: 0.5 * 4 + 2 + 1 },
      { x: -1.5, y: 0.5 * 2.25 + 1.5 + 1 },
      { x: -1.0, y: 0.5 * 1 + 1 + 1 },
      { x: -0.5, y: 0.5 * 0.25 + 0.5 + 1 },
      { x: 0.0, y: 1.0 },
      { x: 0.5, y: 0.5 * 0.25 - 0.5 + 1 },
      { x: 1.0, y: 0.5 * 1 - 1 + 1 },
      { x: 1.5, y: 0.5 * 2.25 - 1.5 + 1 },
      { x: 2.0, y: 0.5 * 4 - 2 + 1 },
      { x: 2.5, y: 0.5 * 6.25 - 2.5 + 1 }
    ];
    // deterministic pseudo-noise based on noiseLevel
    const noiseDeltas = [0.4, -0.6, 0.3, -0.5, 0.8, -0.4, 0.5, -0.3, 0.7, -0.5];
    return pts.map((p, i) => ({
      x: p.x,
      y: p.y + noiseDeltas[i] * noiseLevel
    }));
  }, [noiseLevel]);

  // Model fit calculations based on degree
  const fitMetrics = useMemo(() => {
    if (degree === 1) {
      return {
        label: "Degree 1 (Linear Underfitting)",
        trainMse: (0.95 + noiseLevel * 0.4).toFixed(3),
        testMse: (1.20 + noiseLevel * 0.5).toFixed(3),
        status: "High Bias (Underfit)",
        color: "text-amber-700 bg-amber-50 border-amber-200",
        pathFunc: (x) => 0.6 * x + 2.2
      };
    } else if (degree === 2) {
      return {
        label: "Degree 2 (Optimal Quadratic Fit)",
        trainMse: (0.18 + noiseLevel * 0.15).toFixed(3),
        testMse: (0.24 + noiseLevel * 0.2).toFixed(3),
        status: "Balanced (Optimal)",
        color: "text-emerald-700 bg-emerald-50 border-emerald-200",
        pathFunc: (x) => 0.52 * x * x - 0.95 * x + 1.05
      };
    } else if (degree === 3) {
      return {
        label: "Degree 3 (Cubic Polynomial)",
        trainMse: (0.15 + noiseLevel * 0.14).toFixed(3),
        testMse: (0.31 + noiseLevel * 0.25).toFixed(3),
        status: "Good Generalization",
        color: "text-blue-700 bg-blue-50 border-blue-200",
        pathFunc: (x) => 0.05 * x * x * x + 0.48 * x * x - 0.98 * x + 1.02
      };
    } else {
      // Degree 10 Overfit
      return {
        label: "Degree 9+ (Extreme Overfitting)",
        trainMse: "0.008",
        testMse: (3.85 + noiseLevel * 2.1).toFixed(3),
        status: "High Variance (Overfit)",
        color: "text-rose-700 bg-rose-50 border-rose-200",
        pathFunc: (x) =>
          0.5 * x * x - x + 1 + 1.8 * Math.sin(x * 4.5) * (x / 2)
      };
    }
  }, [degree, noiseLevel]);

  // Canvas bounds: x from -2.5 to 3.0, y from -1 to 7
  const mapSvgX = (x) => 150 + x * 50;
  const mapSvgY = (y) => 220 - y * 30;

  // Generate curve path
  const curvePoints = useMemo(() => {
    const pts = [];
    for (let x = -2.5; x <= 2.8; x += 0.1) {
      const y = fitMetrics.pathFunc(x);
      pts.push(`${mapSvgX(x).toFixed(1)},${mapSvgY(y).toFixed(1)}`);
    }
    return pts.join(" ");
  }, [fitMetrics]);

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
            Regression Simulator 01
          </span>
          <h3 className="text-base font-bold text-stone-900">
            Polynomial Regression &amp; Overfitting Explorer
          </h3>
        </div>
        <span className={`text-xs font-mono px-3 py-1 rounded-full border font-bold ${fitMetrics.color}`}>
          {fitMetrics.status}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* SVG Visualization */}
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-[#faf8f4] rounded-xl p-3 border border-[#e7e3da]">
          <svg width="320" height="250" className="overflow-visible">
            {/* Grid Lines */}
            <line x1="25" y1="220" x2="310" y2="220" stroke="#d5d0c5" strokeWidth="1" />
            <line x1="150" y1="10" x2="150" y2="240" stroke="#d5d0c5" strokeWidth="1" strokeDasharray="3 3" />

            {/* Fitted Polynomial Curve */}
            <polyline
              fill="none"
              stroke="#ea580c"
              strokeWidth="2.5"
              points={curvePoints}
            />

            {/* Scatter Points */}
            {truePoints.map((pt, i) => (
              <g key={i}>
                <circle
                  cx={mapSvgX(pt.x)}
                  cy={mapSvgY(pt.y)}
                  r="4.5"
                  fill="#1c1917"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
              </g>
            ))}
          </svg>

          <div className="flex items-center justify-between w-full text-[11px] font-mono text-stone-500 pt-2 px-2 border-t border-[#e7e3da] mt-2">
            <span>● Training Points</span>
            <span className="text-orange-600 font-bold">— Polynomial Hypothesis \(\hat&#123;y&#125;\)</span>
          </div>
        </div>

        {/* Controls and Metrics */}
        <div className="md:col-span-5 space-y-4">
          <div>
            <label className="text-xs font-bold text-stone-700 flex justify-between">
              <span>Polynomial Degree (Complexity):</span>
              <span className="font-mono text-orange-600">Degree {degree === 10 ? "9+ (High)" : degree}</span>
            </label>
            <div className="grid grid-cols-4 gap-2 mt-1.5">
              {[1, 2, 3, 10].map((d) => (
                <button
                  key={d}
                  onClick={() => setDegree(d)}
                  className={`py-1.5 text-xs font-mono font-bold rounded-lg border transition-all ${
                    degree === d
                      ? "bg-orange-600 text-white border-orange-600"
                      : "bg-[#f5f2eb] text-stone-700 border-[#e7e3da] hover:bg-white"
                  }`}
                >
                  {d === 10 ? "Deg 9+" : `d = ${d}`}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-stone-700 flex justify-between">
              <span>Observation Noise ($\sigma$):</span>
              <span className="font-mono text-stone-600">{noiseLevel.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min="0.1"
              max="1.5"
              step="0.2"
              value={noiseLevel}
              onChange={(e) => setNoiseLevel(parseFloat(e.target.value))}
              className="w-full accent-orange-600 mt-1 cursor-pointer"
            />
          </div>

          <div className="bg-[#f5f2eb] p-3 rounded-xl border border-[#e7e3da] space-y-2 text-xs font-mono">
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Active Architecture:</span>
              <span className="font-bold text-stone-900">{fitMetrics.label}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Training MSE:</span>
              <span className="font-bold text-emerald-700">{fitMetrics.trainMse}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Test (Generalization) MSE:</span>
              <span className={`font-bold ${degree >= 10 ? "text-rose-600" : "text-stone-900"}`}>
                {fitMetrics.testMse}
              </span>
            </div>
          </div>

          <p className="text-[11px] text-stone-500 leading-relaxed">
            {degree === 1 && "High bias: The straight line lacks capacity to capture the underlying non-linear curvature."}
            {degree === 2 && "Optimal trade-off: Captures genuine quadratic curvature without fitting random noise."}
            {degree === 3 && "Slight over-parameterization: Performs well on training and test samples."}
            {degree === 10 && "High variance: Perfectly memorizes training observations but explodes on test samples."}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. Logistic Regression Sigmoid & Decision Threshold Simulator
 */
export function SigmoidThresholdSimulator() {
  const [logitZ, setLogitZ] = useState(1.2);
  const [threshold, setThreshold] = useState(0.5);

  const sigmoidVal = useMemo(() => {
    return 1 / (1 + Math.exp(-logitZ));
  }, [logitZ]);

  const isPositive = sigmoidVal >= threshold;

  // SVG dimensions
  const svgWidth = 320;
  const svgHeight = 200;
  const mapZ = (z) => 160 + z * 24; // -6 to +6 maps to 16 to 304
  const mapP = (p) => 180 - p * 150; // 0 to 1 maps to 180 to 30

  // Points on sigmoid curve
  const curvePoints = useMemo(() => {
    const pts = [];
    for (let z = -6.0; z <= 6.0; z += 0.25) {
      const p = 1 / (1 + Math.exp(-z));
      pts.push(`${mapZ(z).toFixed(1)},${mapP(p).toFixed(1)}`);
    }
    return pts.join(" ");
  }, []);

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
            Classification Simulator 02
          </span>
          <h3 className="text-base font-bold text-stone-900">
            Sigmoid Probability &amp; Decision Threshold Tuner
          </h3>
        </div>
        <span
          className={`text-xs font-mono px-3 py-1 rounded-full border font-bold ${
            isPositive
              ? "bg-emerald-50 text-emerald-800 border-emerald-200"
              : "bg-stone-100 text-stone-700 border-stone-200"
          }`}
        >
          Predicted Class: {isPositive ? "1 (Positive)" : "0 (Negative)"}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Sigmoid Graph */}
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-[#faf8f4] rounded-xl p-3 border border-[#e7e3da]">
          <svg width={svgWidth} height={svgHeight} className="overflow-visible">
            {/* Axis */}
            <line x1="20" y1="180" x2="300" y2="180" stroke="#d5d0c5" strokeWidth="1" />
            <line x1="160" y1="20" x2="160" y2="180" stroke="#d5d0c5" strokeWidth="1" strokeDasharray="3 3" />

            {/* Threshold Line */}
            <line
              x1="20"
              y1={mapP(threshold)}
              x2="300"
              y2={mapP(threshold)}
              stroke="#0ea5e9"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <text x="25" y={mapP(threshold) - 6} fill="#0284c7" fontSize="10" fontFamily="monospace" fontWeight="bold">
              Threshold &tau; = {threshold.toFixed(2)}
            </text>

            {/* Sigmoid Curve */}
            <polyline fill="none" stroke="#ea580c" strokeWidth="2.5" points={curvePoints} />

            {/* Current point */}
            <circle
              cx={mapZ(logitZ)}
              cy={mapP(sigmoidVal)}
              r="6"
              fill={isPositive ? "#059669" : "#dc2626"}
              stroke="#ffffff"
              strokeWidth="2"
            />
            <line
              x1={mapZ(logitZ)}
              y1={mapP(sigmoidVal)}
              x2={mapZ(logitZ)}
              y2="180"
              stroke="#78716c"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
          </svg>

          <div className="flex justify-between w-full text-[11px] font-mono text-stone-500 pt-2 px-2 border-t border-[#e7e3da] mt-2">
            <span>z = w&middot;x + b ({logitZ.toFixed(2)})</span>
            <span className="font-bold text-stone-800">
              P(y=1|x) = &sigma;(z) = {sigmoidVal.toFixed(4)}
            </span>
          </div>
        </div>

        {/* Sliders and Interpretation */}
        <div className="md:col-span-5 space-y-4">
          <div>
            <label className="text-xs font-bold text-stone-700 flex justify-between">
              <span>Logit Input $z = \mathbf&#123;w&#125;^T \mathbf&#123;x&#125; + b$:</span>
              <span className="font-mono text-orange-600">{logitZ.toFixed(2)}</span>
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={logitZ}
              onChange={(e) => setLogitZ(parseFloat(e.target.value))}
              className="w-full accent-orange-600 mt-1 cursor-pointer"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-stone-700 flex justify-between">
              <span>Classification Threshold ($\tau$):</span>
              <span className="font-mono text-sky-600">{threshold.toFixed(2)}</span>
            </label>
            <input
              type="range"
              min="0.1"
              max="0.9"
              step="0.05"
              value={threshold}
              onChange={(e) => setThreshold(parseFloat(e.target.value))}
              className="w-full accent-sky-600 mt-1 cursor-pointer"
            />
          </div>

          <div className="bg-[#f5f2eb] p-3 rounded-xl border border-[#e7e3da] space-y-2 text-xs font-mono">
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Odds \(\frac&#123;p&#125;&#123;1-p&#125;\):</span>
              <span className="font-bold text-stone-900">
                {sigmoidVal >= 0.99 ? ">99" : (sigmoidVal / (1 - sigmoidVal)).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Decision Rule:</span>
              <span className="font-bold text-stone-900">
                &sigma;(z) {sigmoidVal >= threshold ? "\u2265" : "<"} &tau;
              </span>
            </div>
          </div>

          <p className="text-[11px] text-stone-500 leading-relaxed">
            Lowering the decision threshold (&tau; &lt; 0.5) increases <strong>Recall</strong> (catches more positive cases, useful in medical diagnosis). Raising &tau; (&tau; &gt; 0.5) increases <strong>Precision</strong> (fewer false alarms, useful in spam filtering).
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. Confusion Matrix, Precision/Recall & ROC-AUC Calculator
 */
export function ConfusionMatrixMetricCalculator() {
  const [tp, setTp] = useState(85);
  const [fp, setFp] = useState(15);
  const [fn, setFn] = useState(10);
  const [tn, setTn] = useState(90);

  const total = tp + fp + fn + tn;
  const accuracy = total > 0 ? (tp + tn) / total : 0;
  const precision = tp + fp > 0 ? tp / (tp + fp) : 0;
  const recall = tp + fn > 0 ? tp / (tp + fn) : 0;
  const specificity = tn + fp > 0 ? tn / (tn + fp) : 0;
  const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
            Evaluation Simulator 03
          </span>
          <h3 className="text-base font-bold text-stone-900">
            Confusion Matrix, Precision/Recall &amp; F1 Calculator
          </h3>
        </div>
        <span className="text-xs font-mono bg-orange-50 text-orange-800 px-3 py-1 rounded-full border border-orange-200 font-bold">
          F1-Score: {(f1 * 100).toFixed(1)}%
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Confusion Matrix Table */}
        <div className="md:col-span-6">
          <div className="text-center font-mono text-[11px] font-bold text-stone-600 mb-2">
            PREDICTED CLASS
          </div>
          <div className="grid grid-cols-2 gap-2 text-center font-mono">
            {/* TP */}
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-3 flex flex-col items-center">
              <span className="text-[10px] font-bold text-emerald-800 uppercase">True Positive (TP)</span>
              <input
                type="number"
                min="0"
                max="500"
                value={tp}
                onChange={(e) => setTp(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-16 text-center text-lg font-bold text-emerald-900 bg-white border border-emerald-200 rounded-md my-1"
              />
              <span className="text-[10px] text-emerald-700">Correctly positive</span>
            </div>

            {/* FP */}
            <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-3 flex flex-col items-center">
              <span className="text-[10px] font-bold text-rose-800 uppercase">False Positive (FP)</span>
              <input
                type="number"
                min="0"
                max="500"
                value={fp}
                onChange={(e) => setFp(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-16 text-center text-lg font-bold text-rose-900 bg-white border border-rose-200 rounded-md my-1"
              />
              <span className="text-[10px] text-rose-700">Type I Error</span>
            </div>

            {/* FN */}
            <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-3 flex flex-col items-center">
              <span className="text-[10px] font-bold text-rose-800 uppercase">False Negative (FN)</span>
              <input
                type="number"
                min="0"
                max="500"
                value={fn}
                onChange={(e) => setFn(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-16 text-center text-lg font-bold text-rose-900 bg-white border border-rose-200 rounded-md my-1"
              />
              <span className="text-[10px] text-rose-700">Type II Error</span>
            </div>

            {/* TN */}
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-3 flex flex-col items-center">
              <span className="text-[10px] font-bold text-emerald-800 uppercase">True Negative (TN)</span>
              <input
                type="number"
                min="0"
                max="500"
                value={tn}
                onChange={(e) => setTn(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-16 text-center text-lg font-bold text-emerald-900 bg-white border border-emerald-200 rounded-md my-1"
              />
              <span className="text-[10px] text-emerald-700">Correctly negative</span>
            </div>
          </div>
          <div className="text-right font-mono text-[10px] text-stone-500 mt-2">
            Total observations: {total}
          </div>
        </div>

        {/* Derived Metrics Grid */}
        <div className="md:col-span-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="bg-[#f5f2eb] p-3 rounded-xl border border-[#e7e3da]">
              <span className="text-stone-500 block text-[10px]">Accuracy</span>
              <span className="text-base font-bold text-stone-900">{(accuracy * 100).toFixed(1)}%</span>
              <span className="text-[10px] text-stone-500 block mt-0.5">(TP + TN) / Total</span>
            </div>

            <div className="bg-[#f5f2eb] p-3 rounded-xl border border-[#e7e3da]">
              <span className="text-stone-500 block text-[10px]">Precision</span>
              <span className="text-base font-bold text-orange-600">{(precision * 100).toFixed(1)}%</span>
              <span className="text-[10px] text-stone-500 block mt-0.5">TP / (TP + FP)</span>
            </div>

            <div className="bg-[#f5f2eb] p-3 rounded-xl border border-[#e7e3da]">
              <span className="text-stone-500 block text-[10px]">Recall (Sensitivity)</span>
              <span className="text-base font-bold text-blue-600">{(recall * 100).toFixed(1)}%</span>
              <span className="text-[10px] text-stone-500 block mt-0.5">TP / (TP + FN)</span>
            </div>

            <div className="bg-[#f5f2eb] p-3 rounded-xl border border-[#e7e3da]">
              <span className="text-stone-500 block text-[10px]">Specificity</span>
              <span className="text-base font-bold text-stone-700">{(specificity * 100).toFixed(1)}%</span>
              <span className="text-[10px] text-stone-500 block mt-0.5">TN / (TN + FP)</span>
            </div>
          </div>

          <div className="bg-orange-50/60 p-3 rounded-xl border border-orange-200 text-xs font-mono">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-orange-900">Harmonic Mean (F1-Score):</span>
              <span className="font-bold text-orange-700 text-sm">{(f1 * 100).toFixed(2)}%</span>
            </div>
            <p className="text-[10px] text-stone-600 font-sans leading-relaxed">
              F1 balances Precision and Recall, especially vital when class distribution is imbalanced (e.g., fraud or rare disease detection).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. K-Means 2D Cluster Centroid Convergence Simulator
 */
export function KMeansClusterSimulator() {
  const [step, setStep] = useState(0);

  // 15 fixed 2D points in 3 natural groups
  const points = useMemo(() => [
    // Cluster 1 (bottom left)
    { id: 1, x: 40, y: 150 },
    { id: 2, x: 60, y: 160 },
    { id: 3, x: 50, y: 130 },
    { id: 4, x: 75, y: 145 },
    { id: 5, x: 65, y: 180 },
    // Cluster 2 (top middle)
    { id: 6, x: 140, y: 50 },
    { id: 7, x: 160, y: 65 },
    { id: 8, x: 150, y: 40 },
    { id: 9, x: 175, y: 70 },
    { id: 10, x: 130, y: 75 },
    // Cluster 3 (bottom right)
    { id: 11, x: 230, y: 140 },
    { id: 12, x: 250, y: 160 },
    { id: 13, x: 260, y: 130 },
    { id: 14, x: 240, y: 170 },
    { id: 15, x: 270, y: 150 }
  ], []);

  // Centroid states across iterations
  const centroidHistory = [
    // Step 0: Random initialization
    [
      { cId: 1, x: 100, y: 100, color: "#ea580c" },
      { cId: 2, x: 150, y: 120, color: "#0284c7" },
      { cId: 3, x: 200, y: 90, color: "#16a34a" }
    ],
    // Step 1: Assigned to initial clusters and shifted partially
    [
      { cId: 1, x: 68, y: 135, color: "#ea580c" },
      { cId: 2, x: 148, y: 72, color: "#0284c7" },
      { cId: 3, x: 235, y: 138, color: "#16a34a" }
    ],
    // Step 2: Fully converged to true centers of mass
    [
      { cId: 1, x: 58, y: 153, color: "#ea580c" },
      { cId: 2, x: 151, y: 60, color: "#0284c7" },
      { cId: 3, x: 250, y: 150, color: "#16a34a" }
    ]
  ];

  const currentCentroids = centroidHistory[Math.min(step, centroidHistory.length - 1)];

  // Assign points to nearest centroid
  const pointAssignments = useMemo(() => {
    return points.map((p) => {
      let minDist = Infinity;
      let nearestColor = "#78716c";
      let clusterIdx = 0;
      currentCentroids.forEach((c, idx) => {
        const d = (p.x - c.x) ** 2 + (p.y - c.y) ** 2;
        if (d < minDist) {
          minDist = d;
          nearestColor = c.color;
          clusterIdx = idx;
        }
      });
      return { ...p, color: step === 0 ? "#78716c" : nearestColor, clusterIdx, dist: minDist };
    });
  }, [points, currentCentroids, step]);

  const inertia = useMemo(() => {
    return Math.round(pointAssignments.reduce((acc, p) => acc + p.dist, 0));
  }, [pointAssignments]);

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
            Unsupervised Simulator 04
          </span>
          <h3 className="text-base font-bold text-stone-900">
            K-Means 2D Centroid Convergence &amp; Inertia Simulator
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono bg-stone-100 text-stone-700 px-3 py-1 rounded-full border border-stone-200 font-bold">
            Iteration: {step}/2 {step === 2 && "(Converged)"}
          </span>
          <span className="text-xs font-mono bg-orange-50 text-orange-800 px-3 py-1 rounded-full border border-orange-200 font-bold">
            Inertia: {inertia}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* SVG Scatter Plot */}
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-[#faf8f4] rounded-xl p-3 border border-[#e7e3da]">
          <svg width="300" height="220" className="overflow-visible">
            {/* Grid Lines */}
            <line x1="20" y1="200" x2="280" y2="200" stroke="#d5d0c5" strokeWidth="1" />
            <line x1="20" y1="20" x2="20" y2="200" stroke="#d5d0c5" strokeWidth="1" />

            {/* Connecting lines from points to assigned centroids */}
            {step > 0 &&
              pointAssignments.map((p) => {
                const c = currentCentroids[p.clusterIdx];
                return (
                  <line
                    key={p.id}
                    x1={p.x}
                    y1={p.y}
                    x2={c.x}
                    y2={c.y}
                    stroke={p.color}
                    strokeWidth="0.8"
                    strokeOpacity="0.4"
                    strokeDasharray="2 2"
                  />
                );
              })}

            {/* Data Points */}
            {pointAssignments.map((p) => (
              <circle
                key={p.id}
                cx={p.x}
                cy={p.y}
                r="4.5"
                fill={p.color}
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            ))}

            {/* Centroids represented as Crosses with halos */}
            {currentCentroids.map((c) => (
              <g key={c.cId}>
                <circle cx={c.x} cy={c.y} r="9" fill="none" stroke={c.color} strokeWidth="2" strokeDasharray="3 3" />
                <line x1={c.x - 7} y1={c.y} x2={c.x + 7} y2={c.y} stroke={c.color} strokeWidth="3" />
                <line x1={c.x} y1={c.y - 7} x2={c.x} y2={c.y + 7} stroke={c.color} strokeWidth="3" />
                <text x={c.x + 10} y={c.y + 4} fill={c.color} fontSize="10" fontFamily="monospace" fontWeight="bold">
                  &mu;{c.cId}
                </text>
              </g>
            ))}
          </svg>

          <div className="flex justify-between w-full text-[11px] font-mono text-stone-500 pt-2 px-2 border-t border-[#e7e3da] mt-2">
            <span>● 15 Observations</span>
            <span className="text-stone-800 font-bold">&#10010; K=3 Centroids ($\mu_k$)</span>
          </div>
        </div>

        {/* Controls */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex gap-2">
            <button
              onClick={() => setStep((s) => Math.min(2, s + 1))}
              disabled={step >= 2}
              className="flex-1 py-2 px-3 bg-orange-600 hover:bg-orange-700 disabled:opacity-40 text-white font-mono text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-xs"
            >
              <Play size={14} /> Next Iteration
            </button>
            <button
              onClick={() => setStep(0)}
              className="py-2 px-3 bg-[#f5f2eb] hover:bg-white text-stone-700 font-mono text-xs font-bold rounded-xl border border-[#e7e3da] flex items-center justify-center gap-1.5 transition-all"
            >
              <RotateCcw size={14} /> Reset
            </button>
          </div>

          <div className="bg-[#f5f2eb] p-3 rounded-xl border border-[#e7e3da] space-y-2 text-xs font-mono">
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Phase:</span>
              <span className="font-bold text-stone-900">
                {step === 0 && "1. Random Initial Centroids"}
                {step === 1 && "2. Assign Points & Recompute Means"}
                {step === 2 && "3. Convergence Achieved (\u0394\u03bc \u2248 0)"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Inertia Reduction:</span>
              <span className="font-bold text-emerald-700">
                {step === 0 ? "Initial: 148,200" : step === 1 ? "-68% drop" : "-88% minimal WCSS"}
              </span>
            </div>
          </div>

          <p className="text-[11px] text-stone-500 leading-relaxed">
            K-Means alternates between two steps: <strong>Assignment</strong> (assign each observation to the nearest centroid) and <strong>Update</strong> (move centroids to the mean of their assigned cluster), minimizing Within-Cluster Sum of Squares (WCSS).
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * 5. PCA 2D to 1D Dimensionality Reduction & Variance Projection Tool
 */
const rawData = [
  { x: -2.0, y: -1.0 },
  { x: -1.5, y: -0.6 },
  { x: -1.0, y: -0.8 },
  { x: -0.5, y: -0.2 },
  { x: 0.0, y: 0.1 },
  { x: 0.2, y: -0.1 },
  { x: 0.6, y: 0.4 },
  { x: 1.0, y: 0.5 },
  { x: 1.4, y: 0.9 },
  { x: 1.8, y: 0.8 },
  { x: 2.2, y: 1.2 },
  { x: -0.2, y: 0.3 }
];

export function PCADimensionProjectionTool() {
  const [angleDeg, setAngleDeg] = useState(30);

  const angleRad = (angleDeg * Math.PI) / 180;
  const ux = Math.cos(angleRad);
  const uy = Math.sin(angleRad);

  // Projections along axis u
  const projectedData = useMemo(() => {
    const pts = rawData.map((pt) => {
      const projLength = pt.x * ux + pt.y * uy;
      return {
        ...pt,
        projX: projLength * ux,
        projY: projLength * uy,
        projLengthSq: projLength ** 2
      };
    });
    const variance = pts.reduce((acc, p) => acc + p.projLengthSq, 0) / pts.length;
    return { pts, variance };
  }, [ux, uy]);

  // Max variance is near 28-30 degrees (~1.98), min near 120 degrees (~0.12)
  const explainedRatio = useMemo(() => {
    const totalVar = 2.1;
    return Math.min(100, (projectedData.variance / totalVar) * 100);
  }, [projectedData.variance]);

  // SVG coordinates: origin at 150, 110; scale 40px/unit
  const mapSvgX = (x) => 150 + x * 45;
  const mapSvgY = (y) => 110 - y * 45;

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
            Dimensionality Reduction Simulator 05
          </span>
          <h3 className="text-base font-bold text-stone-900">
            PCA 2D to 1D Projection &amp; Variance Maximization
          </h3>
        </div>
        <span className="text-xs font-mono bg-orange-50 text-orange-800 px-3 py-1 rounded-full border border-orange-200 font-bold">
          Explained Variance: {explainedRatio.toFixed(1)}%
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* SVG Projection Canvas */}
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-[#faf8f4] rounded-xl p-3 border border-[#e7e3da]">
          <svg width="300" height="220" className="overflow-visible">
            {/* Axis */}
            <line x1="15" y1="110" x2="285" y2="110" stroke="#e2ded4" strokeWidth="1" />
            <line x1="150" y1="15" x2="150" y2="205" stroke="#e2ded4" strokeWidth="1" />

            {/* Projection Axis (Vector Line through origin) */}
            <line
              x1={mapSvgX(-3.0 * ux)}
              y1={mapSvgY(-3.0 * uy)}
              x2={mapSvgX(3.0 * ux)}
              y2={mapSvgY(3.0 * uy)}
              stroke="#ea580c"
              strokeWidth="2"
            />

            {/* Drop lines from original points to projected points */}
            {projectedData.pts.map((p, idx) => (
              <line
                key={idx}
                x1={mapSvgX(p.x)}
                y1={mapSvgY(p.y)}
                x2={mapSvgX(p.projX)}
                y2={mapSvgY(p.projY)}
                stroke="#a8a29e"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
            ))}

            {/* Projected Points along line */}
            {projectedData.pts.map((p, idx) => (
              <circle
                key={`proj-${idx}`}
                cx={mapSvgX(p.projX)}
                cy={mapSvgY(p.projY)}
                r="3.5"
                fill="#ea580c"
              />
            ))}

            {/* Original 2D Points */}
            {projectedData.pts.map((p, idx) => (
              <circle
                key={`orig-${idx}`}
                cx={mapSvgX(p.x)}
                cy={mapSvgY(p.y)}
                r="4.5"
                fill="#1c1917"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            ))}
          </svg>

          <div className="flex justify-between w-full text-[11px] font-mono text-stone-500 pt-2 px-2 border-t border-[#e7e3da] mt-2">
            <span>● 2D Observations</span>
            <span className="text-orange-600 font-bold">— 1D Projection Line (PC Axis)</span>
          </div>
        </div>

        {/* Controls */}
        <div className="md:col-span-5 space-y-4">
          <div>
            <label className="text-xs font-bold text-stone-700 flex justify-between">
              <span>Projection Vector Angle (&theta;):</span>
              <span className="font-mono text-orange-600">{angleDeg}&deg;</span>
            </label>
            <input
              type="range"
              min="0"
              max="180"
              step="5"
              value={angleDeg}
              onChange={(e) => setAngleDeg(parseInt(e.target.value))}
              className="w-full accent-orange-600 mt-1 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-0.5">
              <span>0&deg;</span>
              <span className="text-orange-600 font-bold">~28&deg; (PC1 Eigenvector)</span>
              <span>180&deg;</span>
            </div>
          </div>

          <div className="bg-[#f5f2eb] p-3 rounded-xl border border-[#e7e3da] space-y-2 text-xs font-mono">
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Projected 1D Variance:</span>
              <span className="font-bold text-stone-900">{projectedData.variance.toFixed(3)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Reconstruction Error:</span>
              <span className="font-bold text-stone-900">
                {(2.1 - projectedData.variance).toFixed(3)}
              </span>
            </div>
          </div>

          <p className="text-[11px] text-stone-500 leading-relaxed">
            PCA discovers the orthogonal axis that <strong>maximizes variance</strong> (or equivalently, minimizes squared reconstruction error). The first principal component aligns with the greatest spread of data points.
          </p>
        </div>
      </div>
    </div>
  );
}
