import React, { useState, useMemo } from "react";
import {
  Brain,
  Bot,
  Sparkles,
  Cpu,
  Layers,
  Database,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Sliders,
  Play,
  Activity,
  Terminal,
  Zap,
  Boxes,
  Code,
  FileText,
  Filter,
} from "lucide-react";

/**
 * Diagram 1: AI Taxonomy & Venn Hierarchy (AI -> ML -> Deep Learning -> Generative AI)
 */
export function AITaxonomyDiagram() {
  const [selectedCategory, setSelectedCategory] = useState("genai");

  const categories = {
    ai: {
      title: "Artificial Intelligence (AI)",
      subtitle: "Broad Computer Science Discipline",
      color: "border-purple-300 bg-purple-50 text-purple-900",
      accent: "bg-purple-600",
      badge: "Discipline Origin: 1956",
      desc: "Creating computational systems that perform tasks associated with intelligent behaviour: reasoning, problem solving, planning, knowledge representation, perception, and decision making.",
      mathOrLogic: "Rule-based expert systems, heuristic search algorithms (A*, minimax), constraint satisfaction.",
      examples: ["Deep Blue chess engine", "Medical diagnostic decision trees", "Route optimization planners"],
      keyConcept: "Traditional software requires explicitly written rules; AI systems emulate intelligent behaviour through logic, search, or learned data patterns.",
    },
    ml: {
      title: "Machine Learning (ML)",
      subtitle: "Data-Driven Statistical Pattern Recognition",
      color: "border-blue-300 bg-blue-50 text-blue-900",
      accent: "bg-blue-600",
      badge: "Supervised · Unsupervised · Reinforcement",
      desc: "Algorithms that learn patterns, decision boundaries, and representations from empirical data rather than relying entirely on explicitly hand-crafted programming rules.",
      mathOrLogic: "Loss optimization: min \u2211 L(y_true, f(x; \u03B8)), gradient descent, decision trees, support vector machines.",
      examples: ["Email spam classifier", "Housing price regression (y = wx + b)", "Customer segmentation clustering"],
      keyConcept: "Extracts features (x) and maps them to target labels (y). Divided into Supervised, Unsupervised, and Reinforcement Learning.",
    },
    dl: {
      title: "Deep Learning (DL)",
      subtitle: "Hierarchical Multilayer Neural Networks",
      color: "border-emerald-300 bg-emerald-50 text-emerald-900",
      accent: "bg-emerald-600",
      badge: "Artificial Neural Networks (ANNs)",
      desc: "A subfield of ML utilizing deep multi-layered neural networks capable of automatically discovering hierarchical feature representations directly from raw unstructured data.",
      mathOrLogic: "Neuron activation: a = \u03C3(W \u00B7 x + b); Backpropagation via chain rule: \u2202L/\u2202W = (\u2202L/\u2202a)(\u2202a/\u2202z)(\u2202z/\u2202W).",
      examples: ["ResNet convolutional image classifier", "Speech-to-text acoustic models (Whisper)", "Autonomous vehicle sensor perception"],
      keyConcept: "Eliminates manual feature engineering. Lower layers learn low-level edges/tones; higher layers compose abstract semantic concepts.",
    },
    genai: {
      title: "Generative AI & Foundation Models",
      subtitle: "New Content Synthesis via Transformers & Diffusion",
      color: "border-orange-300 bg-orange-50 text-orange-900",
      accent: "bg-orange-600",
      badge: "Next-Token Prediction & Diffusion",
      desc: "Models trained on massive internet-scale corpora that generate novel, coherent, and contextually rich outputs across text, code, audio, images, and video.",
      mathOrLogic: "Autoregressive token probability: P(x_1, ..., x_T) = \u220F P(x_t | x_<t); Multi-Head Self-Attention: Softmax(QK^T / \u221Ad_k)V.",
      examples: ["Large Language Models (GPT-4, Claude, Gemini)", "AI coding assistants", "Stable Diffusion image synthesizers"],
      keyConcept: "Not a strictly nested layer after DL, but a modeling capability. Foundation models adapt to hundreds of downstream tasks via prompting.",
    },
  };

  const active = categories[selectedCategory];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 1
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            The AI Taxonomy: Artificial Intelligence, ML, Deep Learning &amp; Generative AI
          </h4>
        </div>
        <div className="flex flex-wrap gap-1 text-xs">
          {Object.keys(categories).map((catKey) => (
            <button
              key={catKey}
              type="button"
              onClick={() => setSelectedCategory(catKey)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold font-mono transition cursor-pointer uppercase ${
                selectedCategory === catKey
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {catKey === "genai" ? "GEN-AI" : catKey}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Nested Visual Rings */}
        <div className="md:col-span-5 flex flex-col items-center justify-center p-3">
          <div
            onClick={() => setSelectedCategory("ai")}
            className={`w-full max-w-[280px] p-2.5 rounded-2xl border-2 transition cursor-pointer text-center ${
              selectedCategory === "ai"
                ? "border-purple-600 bg-purple-100 shadow-md scale-102"
                : "border-purple-300 bg-purple-50/70 hover:bg-purple-100/60"
            }`}
          >
            <span className="font-bold text-[11px] text-purple-950 block">Artificial Intelligence (AI)</span>
            <div
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCategory("ml");
              }}
              className={`mt-2 p-2 rounded-xl border-2 transition text-center ${
                selectedCategory === "ml"
                  ? "border-blue-600 bg-blue-100 shadow-md"
                  : "border-blue-300 bg-blue-50/70 hover:bg-blue-100/60"
              }`}
            >
              <span className="font-bold text-[10px] text-blue-950 block">Machine Learning (ML)</span>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCategory("dl");
                }}
                className={`mt-2 p-2 rounded-lg border-2 transition text-center ${
                  selectedCategory === "dl"
                    ? "border-emerald-600 bg-emerald-100 shadow-md"
                    : "border-emerald-300 bg-emerald-50/70 hover:bg-emerald-100/60"
                }`}
              >
                <span className="font-bold text-[10px] text-emerald-950 block">Deep Learning (DL)</span>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCategory("genai");
                  }}
                  className={`mt-1.5 p-1.5 rounded-md border-2 transition text-center ${
                    selectedCategory === "genai"
                      ? "border-orange-600 bg-orange-100 shadow-sm"
                      : "border-orange-300 bg-orange-50/80 hover:bg-orange-100"
                  }`}
                >
                  <span className="font-extrabold text-[9px] text-orange-950 block">Generative AI</span>
                </div>
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-stone-400 mt-2">Click any ring to inspect layer</span>
        </div>

        {/* Detail Panel */}
        <div className="md:col-span-7 rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs space-y-3">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${active.accent}`} />
              <strong className="text-stone-900 text-sm">{active.title}</strong>
            </div>
            <span className="font-mono text-[10px] text-stone-600 bg-white px-2 py-0.5 rounded border border-stone-200 font-bold">
              {active.badge}
            </span>
          </div>

          <p className="text-stone-700 leading-relaxed text-xs">{active.desc}</p>

          <div className="p-2.5 rounded-lg bg-white border border-stone-200 font-mono text-[11px] text-stone-800">
            <span className="text-[9px] uppercase font-bold text-stone-400 block mb-0.5">Computational Mechanism</span>
            <code>{active.mathOrLogic}</code>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 rounded-lg bg-white border border-stone-200">
              <span className="text-[9px] uppercase font-bold text-stone-400 block mb-1">Production Examples</span>
              <ul className="space-y-0.5 text-stone-600 text-[10px]">
                {active.examples.map((ex, i) => (
                  <li key={i}>&bull; {ex}</li>
                ))}
              </ul>
            </div>
            <div className="p-2 rounded-lg bg-white border border-stone-200">
              <span className="text-[9px] uppercase font-bold text-stone-400 block mb-1">Key Architectural Insight</span>
              <p className="text-stone-600 text-[10px] leading-snug">{active.keyConcept}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Diagram 2: Intelligent Agent Interaction Loop
 * Perception -> Reasoning -> Decision / Action -> Environment Feedback
 */
export function IntelligentAgentDiagram() {
  const [currentStage, setCurrentStage] = useState(1);

  const stages = [
    {
      id: 1,
      title: "1. Perception (Sensors & Inputs)",
      role: "Collects raw external environmental observations",
      systemExample: "Cameras, LiDAR, API webhooks, HTTP requests, user text prompts",
      codeSnippet: "observation = environment.get_state()  # Sensor readings or user input",
    },
    {
      id: 2,
      title: "2. Reasoning & Internal State Modeling",
      role: "Updates beliefs, evaluates constraints, projects future outcomes",
      systemExample: "Token embedding, scene reconstruction, world model simulation, path feasibility",
      codeSnippet: "beliefs = agent_state.update(observation, historical_context)",
    },
    {
      id: 3,
      title: "3. Action Selection & Policy Execution",
      role: "Selects optimal next step according to utility objective",
      systemExample: "Steering torque, database write, API tool invocation, generated token emission",
      codeSnippet: "action = policy.select_action(beliefs, objective='minimize_risk')",
    },
    {
      id: 4,
      title: "4. Environmental Response & Reward Feedback",
      role: "Environment mutates state; emits new observation and reward signal",
      systemExample: "Vehicle travels 2 meters; user reads response and asks follow-up question",
      codeSnippet: "new_state, reward, done = environment.step(action)",
    },
  ];

  const active = stages[currentStage - 1];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 2
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Intelligent Agent Architecture: Perception, Reasoning &amp; Action Loop
          </h4>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-xs">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setCurrentStage(num)}
              className={`w-7 h-7 rounded-lg font-bold transition cursor-pointer ${
                currentStage === num
                  ? "bg-orange-600 text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
          <div
            onClick={() => setCurrentStage(1)}
            className={`p-3 rounded-xl border transition cursor-pointer ${
              currentStage === 1 ? "border-blue-500 bg-blue-50 font-bold text-blue-900" : "border-stone-200 bg-white text-stone-600"
            }`}
          >
            <span className="block text-[11px]">1. Perception</span>
            <span className="text-[9px] text-stone-400">Sensory Inputs</span>
          </div>
          <div
            onClick={() => setCurrentStage(2)}
            className={`p-3 rounded-xl border transition cursor-pointer ${
              currentStage === 2 ? "border-purple-500 bg-purple-50 font-bold text-purple-900" : "border-stone-200 bg-white text-stone-600"
            }`}
          >
            <span className="block text-[11px]">2. Reasoning</span>
            <span className="text-[9px] text-stone-400">Belief &amp; Memory</span>
          </div>
          <div
            onClick={() => setCurrentStage(3)}
            className={`p-3 rounded-xl border transition cursor-pointer ${
              currentStage === 3 ? "border-emerald-500 bg-emerald-50 font-bold text-emerald-900" : "border-stone-200 bg-white text-stone-600"
            }`}
          >
            <span className="block text-[11px]">3. Decision</span>
            <span className="text-[9px] text-stone-400">Action Execution</span>
          </div>
          <div
            onClick={() => setCurrentStage(4)}
            className={`p-3 rounded-xl border transition cursor-pointer ${
              currentStage === 4 ? "border-amber-500 bg-amber-50 font-bold text-amber-900" : "border-stone-200 bg-white text-stone-600"
            }`}
          >
            <span className="block text-[11px]">4. Environment</span>
            <span className="text-[9px] text-stone-400">State &amp; Reward</span>
          </div>
        </div>

        <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs space-y-2">
          <div className="flex items-center justify-between">
            <h5 className="font-bold text-stone-900 text-sm">{active.title}</h5>
            <span className="text-[10px] font-mono text-stone-500 bg-white px-2 py-0.5 rounded border border-stone-200">
              {active.role}
            </span>
          </div>
          <p className="text-stone-700 text-xs">
            <strong>Real-World Implementations:</strong> {active.systemExample}
          </p>
          <div className="bg-stone-900 text-emerald-400 p-2.5 rounded-lg font-mono text-[11px] overflow-x-auto">
            {active.codeSnippet}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Interactive Tool 1: NumPy Vectorization vs Python Loop Speedup Simulator
 */
export function VectorizationBenchmarkTool() {
  const [arraySize, setArraySize] = useState(100000); // 100k elements

  const benchmarkStats = useMemo(() => {
    // Estimated operations:
    // Pure Python for loop: ~0.8 microseconds per element (interpreting bytecode, object allocation, type checks)
    // NumPy vectorized SIMD C-kernel: ~0.005 microseconds per element (contiguous memory, AVX-512 vector registers)
    const pythonTimeMs = (arraySize * 0.0008).toFixed(2);
    const numpyTimeMs = (arraySize * 0.000008).toFixed(3);
    const speedup = Math.round(Number(pythonTimeMs) / Math.max(0.001, Number(numpyTimeMs)));

    return {
      pythonTimeMs,
      numpyTimeMs,
      speedup,
      memoryMB: ((arraySize * 8) / (1024 * 1024)).toFixed(2), // 64-bit float = 8 bytes
    };
  }, [arraySize]);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
      <div className="border-b border-stone-200 pb-3 mb-5">
        <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
          Interactive Systems Tool 1
        </span>
        <h3 className="text-lg font-bold text-stone-900">
          NumPy SIMD Vectorization vs. Python Loops Speedup Simulator
        </h3>
        <p className="text-xs text-stone-500 mt-1">
          Observe how contiguous memory layout, CPU cache locality, and compiled C-loops outperform interpreted Python pointer dereferencing by orders of magnitude.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-xs font-bold text-stone-700 block mb-1">
            Array Size (n elements): <span className="text-orange-600 font-mono">{arraySize.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="10000"
            max="1000000"
            step="10000"
            value={arraySize}
            onChange={(e) => setArraySize(Number(e.target.value))}
            className="w-full accent-orange-600"
          />
          <span className="text-[10px] text-stone-400 font-mono block mt-1">
            10,000 to 1,000,000 elements ({benchmarkStats.memoryMB} MB raw float64 array)
          </span>

          <div className="mt-4 p-3 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs font-mono space-y-1.5 text-stone-700">
            <span className="text-stone-400 uppercase text-[9px] font-bold block">Code Comparison:</span>
            <div className="text-red-700">
              # Python: [x**2 for x in data] &rarr; {benchmarkStats.pythonTimeMs} ms
            </div>
            <div className="text-emerald-700 font-bold">
              # NumPy: data ** 2 &rarr; {benchmarkStats.numpyTimeMs} ms
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase font-bold text-emerald-800 block">
              Vectorization Acceleration Ratio
            </span>
            <div className="text-3xl font-extrabold text-emerald-950 font-mono mt-1">
              {benchmarkStats.speedup}x Faster
            </div>
            <p className="text-stone-600 text-xs mt-2 leading-relaxed">
              Why? A Python list stores pointers to dynamic heap objects (PyObject). NumPy stores raw 64-bit numbers in a contiguous memory block, enabling the CPU to load 512-bit cache lines directly into SIMD hardware registers.
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-emerald-200/60 font-mono text-[11px] text-emerald-900 flex justify-between">
            <span>NumPy Latency: {benchmarkStats.numpyTimeMs} ms</span>
            <span>Python Loop: {benchmarkStats.pythonTimeMs} ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Interactive Tool 2: Feature Normalization & Scaling Simulator (Min-Max vs Z-Score)
 */
export function NormalizationSimulatorTool() {
  const [val1, setVal1] = useState(50);
  const [val2, setVal2] = useState(65);
  const [val3, setVal3] = useState(70);
  const [val4, setVal4] = useState(85);
  const [val5, setVal5] = useState(95);

  const calculations = useMemo(() => {
    const raw = [val1, val2, val3, val4, val5];
    const min = Math.min(...raw);
    const max = Math.max(...raw);
    const range = max - min || 1;

    const mean = raw.reduce((a, b) => a + b, 0) / raw.length;
    const variance = raw.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / raw.length;
    const std = Math.sqrt(variance) || 1;

    const minMax = raw.map((x) => ((x - min) / range).toFixed(3));
    const zScores = raw.map((x) => ((x - mean) / std).toFixed(3));

    return { raw, min, max, mean: mean.toFixed(1), std: std.toFixed(1), minMax, zScores };
  }, [val1, val2, val3, val4, val5]);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
      <div className="border-b border-stone-200 pb-3 mb-5">
        <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
          Interactive Systems Tool 2
        </span>
        <h3 className="text-lg font-bold text-stone-900">
          Feature Scaling: Min-Max Normalization vs. Z-Score Standardization
        </h3>
        <p className="text-xs text-stone-500 mt-1">
          Place numeric features on uniform scales to stabilize neural network gradient descent and distance-based ML algorithms.
        </p>
      </div>

      <div className="space-y-4">
        {/* Sliders for 5 sample points */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[
            { val: val1, set: setVal1, label: "x_1" },
            { val: val2, set: setVal2, label: "x_2" },
            { val: val3, set: setVal3, label: "x_3" },
            { val: val4, set: setVal4, label: "x_4" },
            { val: val5, set: setVal5, label: "x_5" },
          ].map((item, idx) => (
            <div key={idx} className="p-2.5 rounded-lg border border-stone-200 bg-[#faf8f4]">
              <span className="font-mono text-[10px] text-stone-400 block uppercase">{item.label} Value</span>
              <strong className="text-orange-600 font-mono text-sm block">{item.val}</strong>
              <input
                type="range"
                min="0"
                max="100"
                value={item.val}
                onChange={(e) => item.set(Number(e.target.value))}
                className="w-full accent-orange-600 mt-1"
              />
            </div>
          ))}
        </div>

        {/* Results Table */}
        <div className="rounded-xl border border-stone-200 overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-stone-50 text-stone-500 uppercase text-[9px] border-b border-stone-200">
              <tr>
                <th className="p-2.5">Scaling Formula</th>
                <th className="p-2.5">Parameters</th>
                <th className="p-2.5">Scaled Values [x_1 .. x_5]</th>
                <th className="p-2.5">Target Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-800">
              <tr>
                <td className="p-2.5 font-bold text-blue-900">
                  Min-Max: (x - x_min) / (x_max - x_min)
                </td>
                <td className="p-2.5 text-[11px] text-stone-500">
                  min={calculations.min}, max={calculations.max}
                </td>
                <td className="p-2.5 text-blue-700 font-bold">
                  [{calculations.minMax.join(", ")}]
                </td>
                <td className="p-2.5 text-stone-600">[0.0, 1.0]</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-purple-900">
                  Z-Score: (x - \u03BC) / \u03C3
                </td>
                <td className="p-2.5 text-[11px] text-stone-500">
                  \u03BC={calculations.mean}, \u03C3={calculations.std}
                </td>
                <td className="p-2.5 text-purple-700 font-bold">
                  [{calculations.zScores.join(", ")}]
                </td>
                <td className="p-2.5 text-stone-600">\u03BC=0, \u03C3=1 (unbounded)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/**
 * Diagram 3: 11-Stage End-to-End AI Engineering Pipeline
 */
export function AIEngineeringPipelineDiagram() {
  const [pipelineMode, setPipelineMode] = useState("predictive"); // "predictive" | "genai"

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
            Interactive Architecture Diagram 3
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            End-to-End Workflow: Traditional Predictive ML vs. Generative AI Application Lifecycle
          </h4>
        </div>
        <div className="flex rounded-lg border border-stone-200 bg-stone-50 p-0.5 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setPipelineMode("predictive")}
            className={`px-3 py-1 rounded-md transition cursor-pointer ${
              pipelineMode === "predictive"
                ? "bg-white text-orange-600 shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Predictive ML Pipeline (11 Steps)
          </button>
          <button
            type="button"
            onClick={() => setPipelineMode("genai")}
            className={`px-3 py-1 rounded-md transition cursor-pointer ${
              pipelineMode === "genai"
                ? "bg-white text-orange-600 shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Generative AI / RAG Pipeline
          </button>
        </div>
      </div>

      {pipelineMode === "predictive" ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs font-mono">
          {[
            { step: "01", title: "Problem Definition", detail: "Define business goal & metrics" },
            { step: "02", title: "Data Collection", detail: "APIs, databases, telemetry" },
            { step: "03", title: "Data Preprocessing", detail: "Clean, impute, deduplicate" },
            { step: "04", title: "Exploratory EDA", detail: "Distributions, correlations" },
            { step: "05", title: "Feature Engineering", detail: "Domain derivations & scaling" },
            { step: "06", title: "Train/Val/Test Split", detail: "70% / 15% / 15% isolation" },
            { step: "07", title: "Model Selection", detail: "Regression / Classification" },
            { step: "08", title: "Model Training", detail: "Loss minimization & weights" },
            { step: "09", title: "Model Evaluation", detail: "Precision, Recall, F1, RMSE" },
            { step: "10", title: "Model Deployment", detail: "FastAPI, Docker, microservice" },
            { step: "11", title: "Continuous Monitoring", detail: "Data drift & model drift" },
          ].map((s) => (
            <div key={s.step} className="p-2.5 rounded-xl border border-stone-200 bg-[#faf8f4] hover:border-orange-300 transition">
              <span className="font-bold text-orange-600 text-[10px] block">PHASE {s.step}</span>
              <strong className="text-stone-900 text-xs block mt-0.5">{s.title}</strong>
              <span className="text-[10px] text-stone-500 block mt-1">{s.detail}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs font-mono">
          {[
            { step: "01", title: "User Prompt & Context", detail: "User query & intent parsing" },
            { step: "02", title: "Prompt Engineering", detail: "System instructions & templates" },
            { step: "03", title: "Vector Retrieval (RAG)", detail: "Embedding similarity search" },
            { step: "04", title: "External Tool Invocation", detail: "Calculator, database, API call" },
            { step: "05", title: "LLM Inference", detail: "Next-token autoregressive generation" },
            { step: "06", title: "Output Validation", detail: "Schema checking & JSON parsing" },
            { step: "07", title: "Guardrails & Safety", detail: "Prompt injection & toxicity scan" },
            { step: "08", title: "LLMOps & Tracing", detail: "Token latency, cost & feedback" },
          ].map((s) => (
            <div key={s.step} className="p-2.5 rounded-xl border border-orange-200 bg-orange-50/50 hover:border-orange-400 transition">
              <span className="font-bold text-orange-700 text-[10px] block">GEN-AI STAGE {s.step}</span>
              <strong className="text-stone-900 text-xs block mt-0.5">{s.title}</strong>
              <span className="text-[10px] text-stone-600 block mt-1">{s.detail}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
