import React, { useState, useMemo } from "react";
import { Play, RotateCcw } from "lucide-react";

/**
 * 1. Interactive Artificial Neuron & Activation Function Playground
 */
export function NeuronActivationPlayground() {
  const [x1, setX1] = useState(2.0);
  const [x2, setX2] = useState(3.0);
  const [x3, setX3] = useState(1.0);
  const [w1, setW1] = useState(0.5);
  const [w2, setW2] = useState(0.2);
  const [w3, setW3] = useState(0.8);
  const [b, setB] = useState(0.1);
  const [actFunc, setActFunc] = useState("relu");

  const { z, a } = useMemo(() => {
    const weightedSum = x1 * w1 + x2 * w2 + x3 * w3 + b;
    let activated = weightedSum;
    if (actFunc === "relu") {
      activated = Math.max(0, weightedSum);
    } else if (actFunc === "sigmoid") {
      activated = 1 / (1 + Math.exp(-weightedSum));
    } else if (actFunc === "tanh") {
      activated = Math.tanh(weightedSum);
    } else if (actFunc === "leaky") {
      activated = weightedSum > 0 ? weightedSum : 0.01 * weightedSum;
    } else if (actFunc === "gelu") {
      // Approximation of GELU: 0.5 * x * (1 + tanh(sqrt(2/pi) * (x + 0.044715 * x^3)))
      const x = weightedSum;
      activated = 0.5 * x * (1 + Math.tanh(Math.sqrt(2 / Math.PI) * (x + 0.044715 * Math.pow(x, 3))));
    }
    return { z: weightedSum, a: activated };
  }, [x1, x2, x3, w1, w2, w3, b, actFunc]);

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
            Deep Learning Simulator 01
          </span>
          <h3 className="text-base font-bold text-stone-900">
            Artificial Neuron &amp; Non-Linear Activation Playground
          </h3>
        </div>
        <span className="text-xs font-mono bg-orange-50 text-orange-800 px-3 py-1 rounded-full border border-orange-200 font-bold">
          Activation Output: a = {a.toFixed(4)}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* SVG Diagram of Neuron */}
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-[#faf8f4] rounded-xl p-4 border border-[#e7e3da]">
          <svg width="320" height="220" className="overflow-visible">
            {/* Input Nodes */}
            <circle cx="40" cy="50" r="16" fill="#f5f2eb" stroke="#d5d0c5" strokeWidth="2" />
            <text x="40" y="54" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">x1:{x1}</text>

            <circle cx="40" cy="110" r="16" fill="#f5f2eb" stroke="#d5d0c5" strokeWidth="2" />
            <text x="40" y="114" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">x2:{x2}</text>

            <circle cx="40" cy="170" r="16" fill="#f5f2eb" stroke="#d5d0c5" strokeWidth="2" />
            <text x="40" y="174" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="bold">x3:{x3}</text>

            {/* Connecting Synapses with Weights */}
            <line x1="56" y1="50" x2="140" y2="110" stroke="#ea580c" strokeWidth={Math.max(1, Math.abs(w1) * 3)} />
            <text x="90" y="70" fill="#ea580c" fontSize="10" fontFamily="monospace" fontWeight="bold">w1:{w1}</text>

            <line x1="56" y1="110" x2="140" y2="110" stroke="#ea580c" strokeWidth={Math.max(1, Math.abs(w2) * 3)} />
            <text x="90" y="105" fill="#ea580c" fontSize="10" fontFamily="monospace" fontWeight="bold">w2:{w2}</text>

            <line x1="56" y1="170" x2="140" y2="110" stroke="#ea580c" strokeWidth={Math.max(1, Math.abs(w3) * 3)} />
            <text x="90" y="150" fill="#ea580c" fontSize="10" fontFamily="monospace" fontWeight="bold">w3:{w3}</text>

            {/* Summation Node */}
            <circle cx="160" cy="110" r="22" fill="#fff7ed" stroke="#ea580c" strokeWidth="2.5" />
            <text x="160" y="108" textAnchor="middle" fill="#ea580c" fontSize="13" fontFamily="sans-serif" fontWeight="bold">&Sigma;</text>
            <text x="160" y="122" textAnchor="middle" fill="#78716c" fontSize="9" fontFamily="monospace">+b:{b}</text>

            {/* Activation Node */}
            <line x1="182" y1="110" x2="218" y2="110" stroke="#78716c" strokeWidth="2" />
            <circle cx="240" cy="110" r="22" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2.5" />
            <text x="240" y="108" textAnchor="middle" fill="#16a34a" fontSize="10" fontFamily="monospace" fontWeight="bold">f(z)</text>
            <text x="240" y="122" textAnchor="middle" fill="#15803d" fontSize="8" fontFamily="monospace" uppercase="true">{actFunc}</text>

            {/* Output Node */}
            <line x1="262" y1="110" x2="310" y2="110" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <circle cx="310" cy="110" r="4" fill="#16a34a" />
          </svg>

          <div className="flex justify-between w-full text-[11px] font-mono text-stone-600 pt-2 px-2 border-t border-[#e7e3da] mt-2">
            <span>Weighted Sum: z = {z.toFixed(2)}</span>
            <span className="font-bold text-emerald-700">Output: a = {a.toFixed(4)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="md:col-span-5 space-y-3.5">
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1">Activation Function f(z):</label>
            <div className="grid grid-cols-3 gap-1.5">
              {["relu", "sigmoid", "tanh", "leaky", "gelu", "linear"].map((fn) => (
                <button
                  key={fn}
                  onClick={() => setActFunc(fn)}
                  className={`py-1 text-[11px] font-mono font-bold rounded-lg border transition-all ${
                    actFunc === fn
                      ? "bg-orange-600 text-white border-orange-600"
                      : "bg-[#f5f2eb] text-stone-700 border-[#e7e3da] hover:bg-white"
                  }`}
                >
                  {fn.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5 text-xs font-mono">
            <div className="flex justify-between">
              <span>Inputs (x1, x2, x3):</span>
              <span className="text-stone-700 font-bold">{x1}, {x2}, {x3}</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <input type="range" min="0" max="5" step="0.5" value={x1} onChange={(e) => setX1(parseFloat(e.target.value))} className="accent-stone-700" />
              <input type="range" min="0" max="5" step="0.5" value={x2} onChange={(e) => setX2(parseFloat(e.target.value))} className="accent-stone-700" />
              <input type="range" min="0" max="5" step="0.5" value={x3} onChange={(e) => setX3(parseFloat(e.target.value))} className="accent-stone-700" />
            </div>

            <div className="flex justify-between pt-1">
              <span>Weights (w1, w2, w3):</span>
              <span className="text-orange-600 font-bold">{w1}, {w2}, {w3}</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <input type="range" min="-1" max="2" step="0.1" value={w1} onChange={(e) => setW1(parseFloat(e.target.value))} className="accent-orange-600" />
              <input type="range" min="-1" max="2" step="0.1" value={w2} onChange={(e) => setW2(parseFloat(e.target.value))} className="accent-orange-600" />
              <input type="range" min="-1" max="2" step="0.1" value={w3} onChange={(e) => setW3(parseFloat(e.target.value))} className="accent-orange-600" />
            </div>

            <div className="flex justify-between pt-1">
              <span>Bias (b):</span>
              <span className="text-stone-700 font-bold">{b}</span>
            </div>
            <input type="range" min="-2" max="2" step="0.1" value={b} onChange={(e) => setB(parseFloat(e.target.value))} className="w-full accent-stone-700" />
          </div>

          <p className="text-[11px] text-stone-500 leading-relaxed">
            Formula: \(a = f(w_1 x_1 + w_2 x_2 + w_3 x_3 + b)\). Without non-linear \(f(z)\), stacking layers collapses algebraically to a single linear map.
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. XOR Non-Linear Separability vs MLP Decision Boundary Tool
 */
export function XORDecisionBoundaryTool() {
  const [modelType, setModelType] = useState("mlp"); // 'perceptron' | 'mlp'

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
            Deep Learning Simulator 02
          </span>
          <h3 className="text-base font-bold text-stone-900">
            XOR Problem: Linear Perceptron vs Multilayer MLP
          </h3>
        </div>
        <span
          className={`text-xs font-mono px-3 py-1 rounded-full border font-bold ${
            modelType === "mlp"
              ? "bg-emerald-50 text-emerald-800 border-emerald-200"
              : "bg-rose-50 text-rose-800 border-rose-200"
          }`}
        >
          {modelType === "mlp" ? "XOR Solved (100% Accuracy)" : "Linear Failure (Max 75%)"}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* 2D XOR Coordinate Plane */}
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-[#faf8f4] rounded-xl p-3 border border-[#e7e3da]">
          <svg width="260" height="220" className="overflow-visible">
            {/* Grid */}
            <line x1="30" y1="180" x2="240" y2="180" stroke="#d5d0c5" strokeWidth="1" />
            <line x1="30" y1="20" x2="30" y2="180" stroke="#d5d0c5" strokeWidth="1" />

            {/* Decision Boundary */}
            {modelType === "perceptron" ? (
              // Single straight line failing to separate XOR
              <line x1="30" y1="40" x2="220" y2="180" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="4 4" />
            ) : (
              // Non-linear dual hyperplane / curved manifold
              <path
                d="M 30,120 Q 120,120 120,20 M 120,180 Q 160,100 240,100"
                fill="none"
                stroke="#16a34a"
                strokeWidth="2.5"
              />
            )}

            {/* Point (0,0) -> Class 0 */}
            <circle cx="50" cy="160" r="8" fill="#1c1917" stroke="#ffffff" strokeWidth="2" />
            <text x="50" y="180" textAnchor="middle" fontSize="10" fontFamily="monospace">(0,0):0</text>

            {/* Point (1,1) -> Class 0 */}
            <circle cx="210" cy="40" r="8" fill="#1c1917" stroke="#ffffff" strokeWidth="2" />
            <text x="210" y="25" textAnchor="middle" fontSize="10" fontFamily="monospace">(1,1):0</text>

            {/* Point (0,1) -> Class 1 */}
            <circle cx="50" cy="40" r="8" fill="#ea580c" stroke="#ffffff" strokeWidth="2" />
            <text x="50" y="25" textAnchor="middle" fill="#ea580c" fontSize="10" fontFamily="monospace" fontWeight="bold">(0,1):1</text>

            {/* Point (1,0) -> Class 1 */}
            <circle cx="210" cy="160" r="8" fill="#ea580c" stroke="#ffffff" strokeWidth="2" />
            <text x="210" y="180" textAnchor="middle" fill="#ea580c" fontSize="10" fontFamily="monospace" fontWeight="bold">(1,0):1</text>
          </svg>

          <div className="flex justify-between w-full text-[11px] font-mono text-stone-500 pt-2 px-2 border-t border-[#e7e3da] mt-2">
            <span>● Class 0: (0,0), (1,1)</span>
            <span className="text-orange-600 font-bold">● Class 1: (0,1), (1,0)</span>
          </div>
        </div>

        {/* Explanation & Toggle */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex gap-2">
            <button
              onClick={() => setModelType("perceptron")}
              className={`flex-1 py-2 text-xs font-mono font-bold rounded-xl border transition-all ${
                modelType === "perceptron"
                  ? "bg-rose-600 text-white border-rose-600"
                  : "bg-[#f5f2eb] text-stone-700 border-[#e7e3da]"
              }`}
            >
              Single Perceptron
            </button>
            <button
              onClick={() => setModelType("mlp")}
              className={`flex-1 py-2 text-xs font-mono font-bold rounded-xl border transition-all ${
                modelType === "mlp"
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-[#f5f2eb] text-stone-700 border-[#e7e3da]"
              }`}
            >
              2-Layer MLP
            </button>
          </div>

          <div className="bg-[#f5f2eb] p-3 rounded-xl border border-[#e7e3da] text-xs font-mono space-y-1.5">
            <div className="flex justify-between">
              <span className="text-stone-600">Decision Surface:</span>
              <span className="font-bold text-stone-900">
                {modelType === "perceptron" ? "Single Hyperplane (Linear)" : "Folded Non-linear Manifold"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600">Classification Accuracy:</span>
              <span className={`font-bold ${modelType === "mlp" ? "text-emerald-700" : "text-rose-600"}`}>
                {modelType === "mlp" ? "100% (4/4 Correct)" : "75% (3/4 Max)"}
              </span>
            </div>
          </div>

          <p className="text-[11px] text-stone-500 leading-relaxed">
            Minsky &amp; Papert (1969) famously proved a single perceptron cannot classify XOR because class 1 instances sit on opposite diagonals. An MLP introduces hidden neurons with non-linear activation that twist coordinate space so a linear boundary can separate the points.
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. Backpropagation Chain Rule & Gradient Flow Simulator
 */
export function BackpropagationGradientSimulator() {
  const [x, setX] = useState(2.0);
  const [w, setW] = useState(0.5);
  const [y, setY] = useState(1.0);
  const [lr, setLr] = useState(0.1);

  // Exact step-by-step calculus trace from section 9.3
  const calc = useMemo(() => {
    const b = 0.0;
    const z = w * x + b;
    const p = 1.0 / (1.0 + Math.exp(-z));
    // BCE Loss L = - [ y ln(p) + (1-y) ln(1-p) ]
    const loss = -(y * Math.log(Math.max(1e-7, p)) + (1 - y) * Math.log(Math.max(1e-7, 1 - p)));
    // Derivative of BCE w.r.t z for Sigmoid: dL/dz = p - y
    const dL_dz = p - y;
    // dz/dw = x
    const dL_dw = dL_dz * x;
    const dL_db = dL_dz;
    // Updated weights
    const w_new = w - lr * dL_dw;
    const b_new = b - lr * dL_db;

    return { z, p, loss, dL_dz, dL_dw, dL_db, w_new, b_new };
  }, [x, w, y, lr]);

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
            Deep Learning Simulator 03
          </span>
          <h3 className="text-base font-bold text-stone-900">
            Backpropagation Chain Rule &amp; Gradient Tracing
          </h3>
        </div>
        <span className="text-xs font-mono bg-orange-50 text-orange-800 px-3 py-1 rounded-full border border-orange-200 font-bold">
          Loss L = {calc.loss.toFixed(4)}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Forward & Backward Flow Diagram */}
        <div className="md:col-span-7 bg-[#faf8f4] rounded-xl p-4 border border-[#e7e3da] space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-[#e7e3da] pb-2">
            <span className="text-blue-700 font-bold">1. FORWARD PASS &rarr;</span>
            <span className="text-stone-500">Inputs &rarr; Predictions &rarr; Loss</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
            <div className="bg-white p-2 rounded-lg border border-[#e7e3da]">
              <span className="text-stone-500 block">Linear (z)</span>
              <span className="font-bold text-stone-900">z = {calc.z.toFixed(2)}</span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-[#e7e3da]">
              <span className="text-stone-500 block">Sigmoid (p)</span>
              <span className="font-bold text-blue-600">p = {calc.p.toFixed(4)}</span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-[#e7e3da]">
              <span className="text-stone-500 block">BCE Loss (L)</span>
              <span className="font-bold text-rose-600">{calc.loss.toFixed(4)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-[#e7e3da] pt-2 pb-2">
            <span className="text-orange-700 font-bold">&larr; 2. BACKWARD PASS (CHAIN RULE)</span>
            <span className="text-stone-500">dL/dw = (dL/dz) &times; (dz/dw)</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
            <div className="bg-orange-50 p-2 rounded-lg border border-orange-200">
              <span className="text-stone-500 block">&part;L/&part;z = p - y</span>
              <span className="font-bold text-orange-900">{calc.dL_dz.toFixed(4)}</span>
            </div>
            <div className="bg-orange-50 p-2 rounded-lg border border-orange-200">
              <span className="text-stone-500 block">&part;z/&part;w = x</span>
              <span className="font-bold text-orange-900">{x.toFixed(1)}</span>
            </div>
            <div className="bg-orange-50 p-2 rounded-lg border border-orange-200">
              <span className="text-stone-500 block">&part;L/&part;w (Gradient)</span>
              <span className="font-bold text-orange-700">{calc.dL_dw.toFixed(4)}</span>
            </div>
          </div>

          <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-200 flex justify-between items-center text-[11px]">
            <span className="font-bold text-emerald-950">Updated Weight (w_new):</span>
            <span className="font-bold text-emerald-700">
              {w.toFixed(2)} - ({lr} &times; {calc.dL_dw.toFixed(3)}) = {calc.w_new.toFixed(4)}
            </span>
          </div>
        </div>

        {/* Interactive Sliders */}
        <div className="md:col-span-5 space-y-3.5">
          <div>
            <label className="text-xs font-bold text-stone-700 flex justify-between">
              <span>Input Signal (x):</span>
              <span className="font-mono text-orange-600">{x.toFixed(1)}</span>
            </label>
            <input type="range" min="0.5" max="4.0" step="0.5" value={x} onChange={(e) => setX(parseFloat(e.target.value))} className="w-full accent-orange-600" />
          </div>

          <div>
            <label className="text-xs font-bold text-stone-700 flex justify-between">
              <span>Current Weight (w):</span>
              <span className="font-mono text-orange-600">{w.toFixed(2)}</span>
            </label>
            <input type="range" min="-1.0" max="2.0" step="0.1" value={w} onChange={(e) => setW(parseFloat(e.target.value))} className="w-full accent-orange-600" />
          </div>

          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1">Target Class (y):</label>
            <div className="grid grid-cols-2 gap-2">
              {[0, 1].map((val) => (
                <button
                  key={val}
                  onClick={() => setY(val)}
                  className={`py-1 text-xs font-mono font-bold rounded-lg border transition-all ${
                    y === val
                      ? "bg-stone-900 text-white border-stone-900"
                      : "bg-[#f5f2eb] text-stone-700 border-[#e7e3da]"
                  }`}
                >
                  y = {val}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-stone-700 flex justify-between">
              <span>Learning Rate (&eta;):</span>
              <span className="font-mono text-stone-600">{lr}</span>
            </label>
            <input type="range" min="0.01" max="0.5" step="0.05" value={lr} onChange={(e) => setLr(parseFloat(e.target.value))} className="w-full accent-stone-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. Neural Network Tensor Dimension & Parameter Calculator
 */
export function TensorDimensionArchitectureTool() {
  const [bSize, setBSize] = useState(32);
  const [dIn, setDIn] = useState(8);
  const [h1, setH1] = useState(64);
  const [h2, setH2] = useState(32);
  const [nOut, setNOut] = useState(3);

  const { p1, p2, p3, totalParams } = useMemo(() => {
    const layer1 = dIn * h1 + h1;
    const layer2 = h1 * h2 + h2;
    const layer3 = h2 * nOut + nOut;
    return {
      p1: layer1,
      p2: layer2,
      p3: layer3,
      totalParams: layer1 + layer2 + layer3
    };
  }, [dIn, h1, h2, nOut]);

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
            Deep Learning Simulator 04
          </span>
          <h3 className="text-base font-bold text-stone-900">
            Tensor Dimensions &amp; Parameter Calculation Engine
          </h3>
        </div>
        <span className="text-xs font-mono bg-orange-50 text-orange-800 px-3 py-1 rounded-full border border-orange-200 font-bold">
          Total Parameters: {totalParams.toLocaleString()}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Layer Dimension Cards */}
        <div className="md:col-span-7 space-y-2.5 font-mono text-xs">
          <div className="bg-[#faf8f4] p-3 rounded-xl border border-[#e7e3da]">
            <div className="flex justify-between items-center text-stone-500 text-[10px]">
              <span>INPUT TENSOR (X)</span>
              <span>BATCHED</span>
            </div>
            <div className="text-sm font-bold text-stone-900 mt-0.5">
              X &isin; &reals;<sup>{bSize} &times; {dIn}</sup>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-orange-200 shadow-2xs">
            <div className="flex justify-between items-center text-orange-600 text-[10px] font-bold">
              <span>LAYER 1 (Dense + ReLU)</span>
              <span>{p1.toLocaleString()} params</span>
            </div>
            <div className="text-xs font-bold text-stone-800 mt-1">
              W1 &isin; &reals;<sup>{dIn} &times; {h1}</sup> &nbsp;|&nbsp; b1 &isin; &reals;<sup>{h1}</sup> &rarr; Z1 &isin; &reals;<sup>{bSize} &times; {h1}</sup>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-orange-200 shadow-2xs">
            <div className="flex justify-between items-center text-orange-600 text-[10px] font-bold">
              <span>LAYER 2 (Dense + ReLU)</span>
              <span>{p2.toLocaleString()} params</span>
            </div>
            <div className="text-xs font-bold text-stone-800 mt-1">
              W2 &isin; &reals;<sup>{h1} &times; {h2}</sup> &nbsp;|&nbsp; b2 &isin; &reals;<sup>{h2}</sup> &rarr; Z2 &isin; &reals;<sup>{bSize} &times; {h2}</sup>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-emerald-200 shadow-2xs">
            <div className="flex justify-between items-center text-emerald-700 text-[10px] font-bold">
              <span>OUTPUT LAYER (Logits)</span>
              <span>{p3.toLocaleString()} params</span>
            </div>
            <div className="text-xs font-bold text-stone-800 mt-1">
              W3 &isin; &reals;<sup>{h2} &times; {nOut}</sup> &nbsp;|&nbsp; b3 &isin; &reals;<sup>{nOut}</sup> &rarr; Logits &isin; &reals;<sup>{bSize} &times; {nOut}</sup>
            </div>
          </div>
        </div>

        {/* Configuration Sliders */}
        <div className="md:col-span-5 space-y-3">
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div>
              <label className="font-bold text-stone-700 block">Batch (B): {bSize}</label>
              <input type="range" min="8" max="128" step="8" value={bSize} onChange={(e) => setBSize(parseInt(e.target.value))} className="w-full accent-orange-600" />
            </div>
            <div>
              <label className="font-bold text-stone-700 block">Inputs (d): {dIn}</label>
              <input type="range" min="2" max="32" step="2" value={dIn} onChange={(e) => setDIn(parseInt(e.target.value))} className="w-full accent-orange-600" />
            </div>
            <div>
              <label className="font-bold text-stone-700 block">Hidden 1: {h1}</label>
              <input type="range" min="16" max="256" step="16" value={h1} onChange={(e) => setH1(parseInt(e.target.value))} className="w-full accent-orange-600" />
            </div>
            <div>
              <label className="font-bold text-stone-700 block">Hidden 2: {h2}</label>
              <input type="range" min="8" max="128" step="8" value={h2} onChange={(e) => setH2(parseInt(e.target.value))} className="w-full accent-orange-600" />
            </div>
            <div>
              <label className="font-bold text-stone-700 block">Classes (C): {nOut}</label>
              <input type="range" min="2" max="10" step="1" value={nOut} onChange={(e) => setNOut(parseInt(e.target.value))} className="w-full accent-emerald-600" />
            </div>
          </div>

          <div className="bg-[#f5f2eb] p-3 rounded-xl border border-[#e7e3da] text-[11px] font-mono text-stone-600">
            Rule: Number of weights = d_in &times; d_out. Number of biases = d_out. GPU memory scales linearly with B &times; &Sigma; d_i.
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 5. Optimizer Trajectory Simulator (SGD vs Momentum vs RMSprop vs Adam)
 */
export function OptimizerConvergenceSimulator() {
  const [opt, setOpt] = useState("adam"); // 'sgd' | 'momentum' | 'rmsprop' | 'adam'
  const [step, setStep] = useState(0);

  // Pre-calculated trajectory points for an elongated loss ravine
  const trajectories = useMemo(() => ({
    sgd: [
      { x: 40, y: 30 },
      { x: 70, y: 170 },
      { x: 100, y: 40 },
      { x: 130, y: 160 },
      { x: 160, y: 55 },
      { x: 190, y: 140 }
    ],
    momentum: [
      { x: 40, y: 30 },
      { x: 80, y: 130 },
      { x: 120, y: 80 },
      { x: 160, y: 110 },
      { x: 200, y: 95 },
      { x: 240, y: 100 }
    ],
    rmsprop: [
      { x: 40, y: 30 },
      { x: 90, y: 90 },
      { x: 140, y: 95 },
      { x: 180, y: 98 },
      { x: 220, y: 100 },
      { x: 245, y: 100 }
    ],
    adam: [
      { x: 40, y: 30 },
      { x: 100, y: 85 },
      { x: 160, y: 98 },
      { x: 210, y: 100 },
      { x: 240, y: 100 },
      { x: 248, y: 100 }
    ]
  }), []);

  const currentPath = trajectories[opt].slice(0, step + 1);

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
            Deep Learning Simulator 05
          </span>
          <h3 className="text-base font-bold text-stone-900">
            Optimization Trajectory Dynamics in Loss Ravines
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono bg-stone-100 text-stone-700 px-3 py-1 rounded-full border border-stone-200 font-bold">
            Step: {step}/5
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Loss Contour Canvas */}
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-[#faf8f4] rounded-xl p-3 border border-[#e7e3da]">
          <svg width="280" height="200" className="overflow-visible">
            {/* Loss Contours (Ellipses simulating steep ravine) */}
            <ellipse cx="250" cy="100" rx="220" ry="85" fill="none" stroke="#e7e3da" strokeWidth="1.5" />
            <ellipse cx="250" cy="100" rx="160" ry="60" fill="none" stroke="#e7e3da" strokeWidth="1.5" />
            <ellipse cx="250" cy="100" rx="100" ry="38" fill="none" stroke="#e7e3da" strokeWidth="1.5" />
            <ellipse cx="250" cy="100" rx="40" ry="15" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />

            {/* Minimum Target */}
            <circle cx="250" cy="100" r="4" fill="#059669" />
            <text x="250" y="118" textAnchor="middle" fill="#059669" fontSize="9" fontFamily="monospace" fontWeight="bold">Minimum</text>

            {/* Trajectory Path */}
            <polyline
              fill="none"
              stroke="#ea580c"
              strokeWidth="2.5"
              points={currentPath.map((p) => `${p.x},${p.y}`).join(" ")}
            />

            {/* Trajectory Points */}
            {currentPath.map((p, idx) => (
              <circle
                key={idx}
                cx={p.x}
                cy={p.y}
                r={idx === step ? "5" : "3"}
                fill={idx === step ? "#ea580c" : "#1c1917"}
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            ))}
          </svg>

          <div className="flex justify-between w-full text-[11px] font-mono text-stone-500 pt-2 px-2 border-t border-[#e7e3da] mt-2">
            <span>Start: (w1, w2)</span>
            <span className="text-orange-600 font-bold">&rarr; Optimizer: {opt.toUpperCase()}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="md:col-span-5 space-y-4">
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1">Select Optimizer:</label>
            <div className="grid grid-cols-4 gap-1.5">
              {["sgd", "momentum", "rmsprop", "adam"].map((algo) => (
                <button
                  key={algo}
                  onClick={() => {
                    setOpt(algo);
                    setStep(5);
                  }}
                  className={`py-1.5 text-xs font-mono font-bold rounded-lg border transition-all ${
                    opt === algo
                      ? "bg-stone-900 text-white border-stone-900"
                      : "bg-[#f5f2eb] text-stone-700 border-[#e7e3da] hover:bg-white"
                  }`}
                >
                  {algo.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setStep((s) => Math.min(5, s + 1))}
              disabled={step >= 5}
              className="flex-1 py-2 bg-orange-600 hover:bg-orange-700 disabled:opacity-40 text-white font-mono text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-xs"
            >
              <Play size={14} /> Step Forward
            </button>
            <button
              onClick={() => setStep(0)}
              className="py-2 px-3 bg-[#f5f2eb] hover:bg-white text-stone-700 font-mono text-xs font-bold rounded-xl border border-[#e7e3da] flex items-center justify-center gap-1.5"
            >
              <RotateCcw size={14} />
            </button>
          </div>

          <div className="bg-[#f5f2eb] p-3 rounded-xl border border-[#e7e3da] text-xs font-mono space-y-1">
            <span className="font-bold text-stone-900 block">Behavior:</span>
            <p className="text-[11px] text-stone-600 leading-relaxed font-sans">
              {opt === "sgd" && "SGD oscillates aggressively back and forth across the steep ravine walls, making sluggish progress along the gentle axis."}
              {opt === "momentum" && "Momentum dampens transverse oscillations by averaging previous velocities, accelerating down the low-curvature floor."}
              {opt === "rmsprop" && "RMSprop divides by root mean squared gradients, automatically scaling steps in the flat direction."}
              {opt === "adam" && "Adam combines momentum and adaptive second moments with bias correction, yielding direct, optimal trajectory convergence."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
