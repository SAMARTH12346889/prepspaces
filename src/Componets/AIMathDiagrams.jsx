import React, { useState, useMemo } from "react";
import { Sliders, RotateCcw, Play, Check, Zap, Layers, Activity, TrendingUp, Info } from "lucide-react";

/**
 * 1. Vector Dot Product & Cosine Similarity Angle Simulator
 */
export function VectorCosineSimilarityTool() {
  const [vecA, setVecA] = useState({ x: 3, y: 4 });
  const [vecB, setVecB] = useState({ x: 4, y: 3 });

  const metrics = useMemo(() => {
    const dot = vecA.x * vecB.x + vecA.y * vecB.y;
    const magA = Math.sqrt(vecA.x ** 2 + vecA.y ** 2);
    const magB = Math.sqrt(vecB.x ** 2 + vecB.y ** 2);
    const cosSim = magA * magB > 0 ? dot / (magA * magB) : 0;
    const clampedCos = Math.max(-1, Math.min(1, cosSim));
    const angleRad = Math.acos(clampedCos);
    const angleDeg = (angleRad * 180) / Math.PI;

    return {
      dot: dot.toFixed(2),
      magA: magA.toFixed(2),
      magB: magB.toFixed(2),
      cosSim: cosSim.toFixed(4),
      angleDeg: angleDeg.toFixed(1),
    };
  }, [vecA, vecB]);

  // SVG coordinate transformation (origin at center 150, 150; scale 20px per unit)
  const cx = 150;
  const cy = 150;
  const scale = 22;

  const ax = cx + vecA.x * scale;
  const ay = cy - vecA.y * scale;
  const bx = cx + vecB.x * scale;
  const by = cy - vecB.y * scale;

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
            Linear Algebra Simulator 01
          </span>
          <h3 className="text-base font-bold text-stone-900">
            Vector Dot Product &amp; Cosine Similarity Explorer
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono bg-orange-50 text-orange-800 px-3 py-1 rounded-full border border-orange-200 font-bold">
            cos(&theta;) = {metrics.cosSim} ({metrics.angleDeg}&deg;)
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Vector SVG Canvas */}
        <div className="md:col-span-6 flex flex-col items-center justify-center bg-[#faf8f4] rounded-xl p-4 border border-[#e7e3da]">
          <svg width="300" height="300" className="overflow-visible">
            {/* Grid Lines */}
            <line x1="10" y1="150" x2="290" y2="150" stroke="#e2ded4" strokeWidth="1" />
            <line x1="150" y1="10" x2="150" y2="290" stroke="#e2ded4" strokeWidth="1" />

            {/* Vector A (Orange) */}
            <line x1={cx} y1={cy} x2={ax} y2={ay} stroke="#ea580c" strokeWidth="3" markerEnd="url(#arrow-orange)" />
            <circle cx={ax} cy={ay} r="4" fill="#ea580c" />
            <text x={ax + 8} y={ay - 6} fill="#ea580c" fontSize="11" fontFamily="monospace" fontWeight="bold">
              A ({vecA.x}, {vecA.y})
            </text>

            {/* Vector B (Blue) */}
            <line x1={cx} y1={cy} x2={bx} y2={by} stroke="#0284c7" strokeWidth="3" markerEnd="url(#arrow-blue)" />
            <circle cx={bx} cy={by} r="4" fill="#0284c7" />
            <text x={bx + 8} y={by + 14} fill="#0284c7" fontSize="11" fontFamily="monospace" fontWeight="bold">
              B ({vecB.x}, {vecB.y})
            </text>

            {/* Origin marker */}
            <circle cx={cx} cy={cy} r="3" fill="#78716c" />
            <text x={cx - 15} y={cy + 15} fill="#a8a29e" fontSize="10" fontFamily="monospace">
              (0,0)
            </text>

            <defs>
              <marker id="arrow-orange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#ea580c" />
              </marker>
              <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#0284c7" />
              </marker>
            </defs>
          </svg>
          <div className="flex items-center gap-4 text-xs font-mono mt-2">
            <span className="flex items-center gap-1.5 text-orange-600 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-600 inline-block" /> Vector A
            </span>
            <span className="flex items-center gap-1.5 text-sky-600 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-600 inline-block" /> Vector B
            </span>
          </div>
        </div>

        {/* Sliders & Math Calculations */}
        <div className="md:col-span-6 space-y-4">
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-orange-700 font-bold">Vector A: X = {vecA.x}, Y = {vecA.y}</span>
                <span className="text-stone-400">||A|| = {metrics.magA}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="range"
                  min="-5"
                  max="5"
                  step="1"
                  value={vecA.x}
                  onChange={(e) => setVecA((prev) => ({ ...prev, x: parseFloat(e.target.value) }))}
                  className="w-full accent-orange-600 cursor-pointer"
                />
                <input
                  type="range"
                  min="-5"
                  max="5"
                  step="1"
                  value={vecA.y}
                  onChange={(e) => setVecA((prev) => ({ ...prev, y: parseFloat(e.target.value) }))}
                  className="w-full accent-orange-600 cursor-pointer"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-sky-700 font-bold">Vector B: X = {vecB.x}, Y = {vecB.y}</span>
                <span className="text-stone-400">||B|| = {metrics.magB}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="range"
                  min="-5"
                  max="5"
                  step="1"
                  value={vecB.x}
                  onChange={(e) => setVecB((prev) => ({ ...prev, x: parseFloat(e.target.value) }))}
                  className="w-full accent-sky-600 cursor-pointer"
                />
                <input
                  type="range"
                  min="-5"
                  max="5"
                  step="1"
                  value={vecB.y}
                  onChange={(e) => setVecB((prev) => ({ ...prev, y: parseFloat(e.target.value) }))}
                  className="w-full accent-sky-600 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-[#faf8f4] border border-[#e7e3da]">
              <span className="text-[10px] text-stone-400 font-mono block">Dot Product</span>
              <strong className="text-sm font-mono text-stone-900">{metrics.dot}</strong>
            </div>
            <div className="p-2.5 rounded-xl bg-[#faf8f4] border border-[#e7e3da]">
              <span className="text-[10px] text-stone-400 font-mono block">Cosine Similarity</span>
              <strong className="text-sm font-mono text-emerald-600">{metrics.cosSim}</strong>
            </div>
            <div className="p-2.5 rounded-xl bg-[#faf8f4] border border-[#e7e3da]">
              <span className="text-[10px] text-stone-400 font-mono block">Enclosed Angle</span>
              <strong className="text-sm font-mono text-stone-900">{metrics.angleDeg}&deg;</strong>
            </div>
          </div>

          <p className="text-xs text-stone-600 leading-relaxed bg-amber-50/70 p-3 rounded-xl border border-amber-200">
            <strong>Key AI Insight:</strong> When embeddings have cosine similarity of 1.0, they point in identical directions (high semantic similarity). When orthogonal (&theta; = 90&deg;), dot product is 0.0 (uncorrelated).
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. Matrix Multiplication Dimension & Layer Output Tool
 */
export function MatrixLayerDimensionTool() {
  const [batchSize, setBatchSize] = useState(32);
  const [inFeatures, setInFeatures] = useState(768);
  const [outFeatures, setOutFeatures] = useState(3072);

  const stats = useMemo(() => {
    const weightsCount = inFeatures * outFeatures;
    const biasesCount = outFeatures;
    const totalParams = weightsCount + biasesCount;
    const flopsPerSample = 2 * inFeatures * outFeatures;
    const totalFlops = flopsPerSample * batchSize;

    return {
      weightsCount: weightsCount.toLocaleString(),
      biasesCount: biasesCount.toLocaleString(),
      totalParams: (totalParams / 1e6).toFixed(2) + "M",
      gflops: (totalFlops / 1e9).toFixed(3) + " GFLOPs",
    };
  }, [batchSize, inFeatures, outFeatures]);

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
      <div className="border-b border-[#e7e3da] pb-3 mb-4">
        <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
          Linear Algebra Simulator 02
        </span>
        <h3 className="text-base font-bold text-stone-900">
          Neural Network Dense Layer Dimension &amp; FLOPs Calculator
        </h3>
        <p className="text-xs text-stone-600 mt-0.5">
          Calculates tensor shape transformations for <code>X @ W + b</code> across batch processing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
            Batch Size (M): {batchSize}
          </label>
          <input
            type="range"
            min="1"
            max="128"
            step="1"
            value={batchSize}
            onChange={(e) => setBatchSize(parseInt(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>
        <div>
          <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
            Input Dim (K): {inFeatures}
          </label>
          <input
            type="range"
            min="64"
            max="2048"
            step="64"
            value={inFeatures}
            onChange={(e) => setInFeatures(parseInt(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>
        <div>
          <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
            Output Dim (P): {outFeatures}
          </label>
          <input
            type="range"
            min="64"
            max="4096"
            step="64"
            value={outFeatures}
            onChange={(e) => setOutFeatures(parseInt(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>
      </div>

      {/* Tensor Formula Visualization */}
      <div className="flex flex-wrap items-center justify-center gap-3 p-4 rounded-xl bg-[#faf8f4] border border-[#e7e3da] text-xs font-mono mb-4 text-center">
        <div className="p-2 rounded bg-white border border-stone-200">
          <span className="text-stone-400 block text-[10px]">Input Tensor X</span>
          <strong className="text-stone-900 font-bold">({batchSize} &times; {inFeatures})</strong>
        </div>
        <span className="text-stone-400 font-bold">&times;</span>
        <div className="p-2 rounded bg-white border border-stone-200">
          <span className="text-stone-400 block text-[10px]">Weights W</span>
          <strong className="text-orange-600 font-bold">({inFeatures} &times; {outFeatures})</strong>
        </div>
        <span className="text-stone-400 font-bold">+</span>
        <div className="p-2 rounded bg-white border border-stone-200">
          <span className="text-stone-400 block text-[10px]">Bias b</span>
          <strong className="text-stone-900 font-bold">(1 &times; {outFeatures})</strong>
        </div>
        <span className="text-stone-400 font-bold">=</span>
        <div className="p-2 rounded bg-emerald-50 border border-emerald-300">
          <span className="text-emerald-700 block text-[10px]">Output Tensor Y</span>
          <strong className="text-emerald-900 font-bold">({batchSize} &times; {outFeatures})</strong>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
        <div className="p-2.5 rounded-xl bg-white border border-stone-200">
          <span className="text-[10px] text-stone-400 font-mono block">Weight Parameters</span>
          <strong className="text-sm font-mono text-stone-900">{stats.weightsCount}</strong>
        </div>
        <div className="p-2.5 rounded-xl bg-white border border-stone-200">
          <span className="text-[10px] text-stone-400 font-mono block">Biases</span>
          <strong className="text-sm font-mono text-stone-900">{stats.biasesCount}</strong>
        </div>
        <div className="p-2.5 rounded-xl bg-white border border-stone-200">
          <span className="text-[10px] text-stone-400 font-mono block">Total Parameters</span>
          <strong className="text-sm font-mono text-orange-600">{stats.totalParams}</strong>
        </div>
        <div className="p-2.5 rounded-xl bg-white border border-stone-200">
          <span className="text-[10px] text-stone-400 font-mono block">Compute Workload</span>
          <strong className="text-sm font-mono text-emerald-600">{stats.gflops}</strong>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. Calculus Derivative & Tangent Slope Visualizer
 */
export function DerivativeTangentVisualizer() {
  const [xVal, setXVal] = useState(1.5);
  const [hStep, setHStep] = useState(0.001);

  // f(x) = x^2
  const fx = xVal ** 2;
  const analyticalSlope = 2 * xVal;
  const numericalSlope = ((xVal + hStep) ** 2 - fx) / hStep;

  // SVG coordinate transformation
  const cx = 150;
  const cy = 200;
  const scaleX = 35;
  const scaleY = 15;

  const px = cx + xVal * scaleX;
  const py = cy - fx * scaleY;

  // Tangent line endpoints
  const tanX1 = xVal - 1.5;
  const tanY1 = fx - analyticalSlope * 1.5;
  const tanX2 = xVal + 1.5;
  const tanY2 = fx + analyticalSlope * 1.5;

  const svgX1 = cx + tanX1 * scaleX;
  const svgY1 = cy - tanY1 * scaleY;
  const svgX2 = cx + tanX2 * scaleX;
  const svgY2 = cy - tanY2 * scaleY;

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
      <div className="border-b border-[#e7e3da] pb-3 mb-4">
        <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
          Calculus Simulator 03
        </span>
        <h3 className="text-base font-bold text-stone-900">
          Instantaneous Rate of Change &amp; Tangent Slope (f(x) = x&sup2;)
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-6 flex flex-col items-center justify-center bg-[#faf8f4] rounded-xl p-4 border border-[#e7e3da]">
          <svg width="300" height="240" className="overflow-visible">
            {/* Axis */}
            <line x1="20" y1={cy} x2="280" y2={cy} stroke="#d6d3d1" strokeWidth="1" />
            <line x1={cx} y1="20" x2={cx} y2="230" stroke="#d6d3d1" strokeWidth="1" />

            {/* Parabola curve f(x) = x^2 */}
            <path
              d={Array.from({ length: 41 }, (_, i) => {
                const x = -3 + i * 0.15;
                const y = x ** 2;
                const sx = cx + x * scaleX;
                const sy = cy - y * scaleY;
                return `${i === 0 ? "M" : "L"} ${sx} ${sy}`;
              }).join(" ")}
              fill="none"
              stroke="#78716c"
              strokeWidth="2"
            />

            {/* Tangent line */}
            <line x1={svgX1} y1={svgY1} x2={svgX2} y2={svgY2} stroke="#ea580c" strokeWidth="2.5" strokeDasharray="3 3" />

            {/* Point of evaluation */}
            <circle cx={px} cy={py} r="5" fill="#ea580c" />
            <text x={px + 8} y={py - 8} fill="#ea580c" fontSize="11" fontFamily="monospace" fontWeight="bold">
              ({xVal.toFixed(1)}, {fx.toFixed(2)})
            </text>
          </svg>
        </div>

        <div className="md:col-span-6 space-y-4">
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-stone-700 font-bold">Input x: {xVal.toFixed(2)}</span>
              <span className="text-stone-400">f({xVal.toFixed(2)}) = {fx.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="-2.5"
              max="2.5"
              step="0.05"
              value={xVal}
              onChange={(e) => setXVal(parseFloat(e.target.value))}
              className="w-full accent-orange-600 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#faf8f4] border border-[#e7e3da]">
              <span className="text-[10px] text-stone-400 font-mono block">Analytical Derivative f&apos;(x) = 2x</span>
              <strong className="text-base font-mono text-orange-600">{analyticalSlope.toFixed(4)}</strong>
            </div>
            <div className="p-3 rounded-xl bg-[#faf8f4] border border-[#e7e3da]">
              <span className="text-[10px] text-stone-400 font-mono block">Numerical Secant (h = {hStep})</span>
              <strong className="text-base font-mono text-stone-900">{numericalSlope.toFixed(4)}</strong>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950">
            <strong>Calculus Rule:</strong> As step size <code>h &rarr; 0</code>, the secant line converges exactly to the tangent slope. When <code>x &gt; 0</code>, the slope is positive (increasing); at <code>x = 0</code>, slope is 0 (critical minimum point).
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. Gradient Descent Optimization on J(w) = (w - 3)^2
 */
export function GradientDescentSimulator() {
  const [lr, setLr] = useState(0.1);
  const [initialW, setInitialW] = useState(0.0);
  const [stepCount, setStepCount] = useState(15);

  const trajectory = useMemo(() => {
    let w = initialW;
    const path = [{ step: 0, w, loss: (w - 3) ** 2 }];
    for (let i = 1; i <= stepCount; i++) {
      const grad = 2 * (w - 3);
      w = w - lr * grad;
      const loss = (w - 3) ** 2;
      path.push({ step: i, w, loss });
      if (Math.abs(w) > 50) break; // diverged
    }
    return path;
  }, [lr, initialW, stepCount]);

  const finalState = trajectory[trajectory.length - 1];
  const isDiverged = Math.abs(finalState.w) > 20;

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
            Optimization Simulator 04
          </span>
          <h3 className="text-base font-bold text-stone-900">
            Gradient Descent Trajectory on Loss J(w) = (w - 3)&sup2;
          </h3>
        </div>
        <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
          isDiverged ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800"
        }`}>
          {isDiverged ? "⚠️ Diverging (Learning Rate Too High!)" : "✓ Converging to w = 3.00"}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <div className="flex justify-between text-xs font-mono mb-1">
            <span className="text-stone-700 font-bold">Learning Rate (&eta;): {lr.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.02"
            max="1.15"
            step="0.02"
            value={lr}
            onChange={(e) => setLr(parseFloat(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs font-mono mb-1">
            <span className="text-stone-700 font-bold">Initial Weight (w&₀): {initialW.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="-2"
            max="8"
            step="0.5"
            value={initialW}
            onChange={(e) => setInitialW(parseFloat(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs font-mono mb-1">
            <span className="text-stone-700 font-bold">Iterations: {stepCount}</span>
          </div>
          <input
            type="range"
            min="5"
            max="30"
            step="1"
            value={stepCount}
            onChange={(e) => setStepCount(parseInt(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>
      </div>

      {/* Trajectory Table / Progress */}
      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs font-mono max-h-48 overflow-y-auto">
        <div className="grid grid-cols-3 font-bold text-stone-400 border-b border-stone-200 pb-1 mb-2">
          <span>Iteration</span>
          <span>Parameter (w)</span>
          <span>Loss J(w)</span>
        </div>
        {trajectory.map((pt) => (
          <div key={pt.step} className="grid grid-cols-3 py-0.5 text-stone-700 border-b border-stone-100 last:border-0">
            <span>Step {pt.step}</span>
            <span className="font-bold text-stone-900">{pt.w.toFixed(4)}</span>
            <span className="text-orange-600">{pt.loss.toFixed(6)}</span>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-stone-500">
        Try setting &eta; &gt; 1.0 to witness numerical instability and divergence! When &eta; = 0.1, the parameter steadily slides down the negative gradient toward minimum 3.0.
      </p>
    </div>
  );
}

/**
 * 5. Normal Distribution & Central Limit Theorem Simulator
 */
export function CentralLimitTheoremSimulator() {
  const [sampleSize, setSampleSize] = useState(30);

  const means = useMemo(() => {
    // Generate 500 sample means from a heavily skewed exponential distribution
    const result = [];
    for (let i = 0; i < 500; i++) {
      let sum = 0;
      for (let j = 0; j < sampleSize; j++) {
        // Skewed exponential: -ln(U) * 10
        const val = -Math.log(Math.random() + 1e-9) * 10;
        sum += val;
      }
      result.push(sum / sampleSize);
    }
    return result;
  }, [sampleSize]);

  const meanOfMeans = (means.reduce((a, b) => a + b, 0) / means.length).toFixed(2);

  // Group into 12 histogram bins
  const bins = useMemo(() => {
    const min = 5;
    const max = 15;
    const counts = new Array(12).fill(0);
    means.forEach((m) => {
      const idx = Math.min(11, Math.max(0, Math.floor(((m - min) / (max - min)) * 12)));
      counts[idx] += 1;
    });
    return counts;
  }, [means]);

  const maxBin = Math.max(...bins, 1);

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
      <div className="border-b border-[#e7e3da] pb-3 mb-4">
        <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
          Probability &amp; Statistics Simulator 05
        </span>
        <h3 className="text-base font-bold text-stone-900">
          Central Limit Theorem (CLT) from a Skewed Population
        </h3>
        <p className="text-xs text-stone-600 mt-0.5">
          Draws 500 samples of size <strong>N = {sampleSize}</strong> from an asymmetrical exponential distribution.
        </p>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-xs font-mono mb-1">
          <span className="text-stone-700 font-bold">Sample Size (N): {sampleSize}</span>
          <span className="text-stone-400">Mean of Sample Means: {meanOfMeans} (True &mu; = 10.0)</span>
        </div>
        <input
          type="range"
          min="2"
          max="80"
          step="2"
          value={sampleSize}
          onChange={(e) => setSampleSize(parseInt(e.target.value))}
          className="w-full accent-orange-600 cursor-pointer"
        />
      </div>

      {/* Histogram Bins Visualizer */}
      <div className="p-4 rounded-xl bg-[#faf8f4] border border-[#e7e3da]">
        <div className="h-32 flex items-end gap-1.5 sm:gap-2">
          {bins.map((count, idx) => {
            const heightPct = (count / maxBin) * 100;
            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                <span className="text-[9px] font-mono text-stone-400">{count}</span>
                <div
                  style={{ height: `${heightPct}%` }}
                  className="w-full bg-orange-600/80 hover:bg-orange-600 transition-all rounded-t"
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-2">
          <span>&larr; Smaller Sample Means</span>
          <span>&mu; &approx; 10.0</span>
          <span>Larger Sample Means &rarr;</span>
        </div>
      </div>

      <p className="mt-3 text-xs text-stone-600 leading-relaxed">
        <strong>The Central Limit Theorem:</strong> Even though the underlying population is extremely right-skewed, the sampling distribution of the mean rapidly assumes a symmetrical, bell-shaped Gaussian distribution as sample size <code>N</code> increases.
      </p>
    </div>
  );
}
