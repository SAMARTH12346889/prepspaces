import useModuleContent from "../hooks/useModuleContent";
import ModuleLoadingSkeleton from "./ModuleLoadingSkeleton";
import ModuleErrorState from "./ModuleErrorState";
import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Database,
  Globe,
  HelpCircle,
  Layers,
  Lightbulb,
  MessageSquare,
  Network,
  Play,
  RefreshCw,
  Server,
  Shield,
  ShieldAlert,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
  Sliders,
  AlertTriangle,
  Building2,
  Boxes,
  Copy,
  Activity,
  Award,
  HardDrive,
  BarChart3,
  Clock,
  Gauge,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 3: COMPUTE                                          */
/* Week 5: How Cloud Computing Resources Actually Run Your Applications        */
/* Systems Theory: MIT 6.004 (Computation Structures), CMU 15-440 (Dist. Sys) */
/* -------------------------------------------------------------------------- */

export default function CloudCompute() {
  const { data: moduleData, loading, error, reload } = useModuleContent("cloud", "compute");
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Little's Law Calculator State
  const [arrivalRate, setArrivalRate] = useState(5000); // req/sec
  const [latencyMs, setLatencyMs] = useState(150); // ms
  const [headroomPct, setHeadroomPct] = useState(30); // %

  // Compute Game State
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Little's Law Math: L = lambda * W
  const concurrency = useMemo(() => {
    const lambda = parseFloat(arrivalRate) || 0;
    const wSec = (parseFloat(latencyMs) || 0) / 1000;
    const baseConcurrency = Math.ceil(lambda * wSec);
    const withHeadroom = Math.ceil(baseConcurrency * (1 + (parseFloat(headroomPct) || 0) / 100));
    // Assuming 1 standard container handles ~50 concurrent connections
    const containersNeeded = Math.ceil(withHeadroom / 50);
    // Multi-AZ N+1 (2 AZs) needs each AZ to handle total load on failure
    const multiAzContainers = containersNeeded * 2;
    return { baseConcurrency, withHeadroom, containersNeeded, multiAzContainers };
  }, [arrivalRate, latencyMs, headroomPct]);

  const computeTopics = moduleData?.topics || [];

  const currentTopic = computeTopics[selectedTopic];
  const topicNumber = String(selectedTopic + 1).padStart(2, "0");

  const nextTopic = () => {
    setSelectedTopic((prev) => (prev < computeTopics.length - 1 ? prev + 1 : 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousTopic = () => {
    setSelectedTopic((prev) => (prev > 0 ? prev - 1 : computeTopics.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 8 Compute Game Scenarios
  const computeGameScenarios = moduleData?.scenarios || [];

  const handleGameAnswer = (scenario, option) => {
    const isFirstTry = gameHistory[scenario.id] === undefined;
    setGameSelection(option.id);
    setGameHistory((prev) => ({
      ...prev,
      [scenario.id]: { optionId: option.id, isCorrect: option.isCorrect },
    }));

    if (isFirstTry && option.isCorrect) {
      setGameScore((prev) => prev + 15);
    }
  };

    if (loading) {
    return <ModuleLoadingSkeleton track="cloud" currentModuleId="compute" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="cloud" currentModuleId="compute" error={error} onRetry={reload} />;
  }
return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-amber-500/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="cloud"
          currentModuleId="compute"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Compute AI"
        />

        {/* AI TUTOR ACCORDION DRAWER */}
        {showAiTutor && (
          <section className="mb-8 overflow-hidden rounded-3xl border border-orange-200 bg-white/95 p-6 shadow-xl backdrop-blur-xl transition-all">
            <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f97316] text-white">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Nova AI Cloud Compute Architect Tutor
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    Ask questions about vCPU scheduling, Little's Law, GPU interconnects, Spot eviction handling, or EC2 vs GCE machine types.
                  </p>
                </div>
              </div>
            </div>

            <LearningRo currentTopic={`compute-${currentTopic.id}`} />
          </section>
        )}

        {/* HERO BANNER */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-2xl md:p-9 relative">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/30 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#f97316] mb-3">
                <Cpu size={13} />
                <span>How Compute Resources Actually Run Applications</span>
              </div>

              <h1 className="text-2xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
                Virtual Machines, Containers, GPUs & Autoscaling
              </h1>

              <p className="mt-3 text-xs md:text-sm leading-relaxed text-stone-300 max-w-2xl">
                Where does the code actually run? Master processor cores vs vCPUs, workload profiling (CPU vs Memory vs I/O bound), container scheduling, GPU matrix acceleration, Spot economics, Little's Law capacity planning, and deep cross-cloud architecture.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-[#f97316]">12</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Core Sections</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-emerald-400">L = λW</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Little's Law</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-amber-400">8</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Labs & Scenarios</div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN INTERACTIVE COURSE CONTAINER */}
        <div className="overflow-hidden rounded-3xl border border-[#e7e3da] bg-white/80 shadow-sm backdrop-blur-xl">
          {/* TOP CONTROLS & MODULE TITLE */}
          <div className="border-b border-[#e7e3da] bg-[#faf8f4]/70 px-6 py-5 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ea580c]">
                  Cloud Compute Masterclass
                </p>
                <h2 className="text-xl md:text-2xl font-black text-[#18181b]">
                  {currentTopic.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <span className="rounded-xl border border-[#e7e3da] bg-white px-3.5 py-1.5 font-mono text-xs font-bold text-stone-700 shadow-sm">
                  Topic {topicNumber} / {computeTopics.length}
                </span>

                <span className="rounded-xl border border-orange-200 bg-orange-50 px-3.5 py-1.5 font-mono text-xs font-bold text-[#ea580c] shadow-sm">
                  {currentTopic.category}
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
            {/* SIDEBAR NAVIGATION */}
            <aside className="border-b border-[#e7e3da] bg-[#faf8f4]/50 p-4 md:border-b-0 md:border-r">
              <div className="mb-3 px-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Compute Topics
                </h3>
              </div>

              <div className="space-y-1.5">
                {computeTopics.map((topic, index) => {
                  const Icon = topic.icon;
                  const active = selectedTopic === index;

                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopic(index)}
                      className={`group flex w-full items-start gap-3 rounded-2xl px-3.5 py-3 text-left transition-all ${
                        active
                          ? "bg-[#f97316] text-white font-bold shadow-[0_4px_16px_rgba(249,115,22,0.25)]"
                          : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl transition ${
                          active
                            ? "bg-white/20 text-white"
                            : "bg-white text-stone-600 border border-[#e7e3da] group-hover:border-orange-300 group-hover:text-[#ea580c]"
                        }`}
                      >
                        <Icon size={15} />
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`font-mono text-[10px] ${
                              active ? "text-white/80" : "text-stone-400"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-xs font-bold truncate">
                            {topic.shortTitle.replace(/^\d+\.\s*/, "")}
                          </span>
                        </div>
                        <span
                          className={`mt-0.5 block text-[10px] truncate ${
                            active ? "text-orange-100" : "text-stone-400"
                          }`}
                        >
                          {topic.category}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick links */}
              <div className="mt-6 border-t border-[#e7e3da] pt-4 px-2 space-y-2">
                <button
                  onClick={() => setSelectedTopic(11)} // Compute Failure Game
                  className="flex w-full items-center justify-between rounded-xl border border-red-200 bg-red-50/70 p-2.5 text-xs font-bold text-red-800 hover:bg-red-100 transition shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <ShieldAlert size={14} className="text-red-600" />
                    Play Crisis Game
                  </span>
                  <span className="rounded-full bg-red-200 px-2 py-0.5 text-[10px]">Game</span>
                </button>

                <button
                  onClick={() => setSelectedTopic(9)} // Capacity Planning & Little's Law
                  className="flex w-full items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/70 p-2.5 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Gauge size={14} className="text-emerald-600" />
                    Little's Law Tool
                  </span>
                  <span className="rounded-full bg-emerald-200 px-2 py-0.5 text-[10px]">Math</span>
                </button>
              </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main className="min-w-0 p-5 md:p-8">
              {/* SUMMARY CARD */}
              <div className="rounded-2xl border border-orange-200/80 bg-orange-50/50 p-5 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#f97316] text-white">
                    <Lightbulb size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-orange-800">
                      Core Compute Architecture Invariant
                    </h4>
                    <p className="mt-1 text-sm md:text-base leading-relaxed text-stone-800 font-medium">
                      {currentTopic.summary}
                    </p>
                  </div>
                </div>
              </div>

              {/* VISUAL DIAGRAM / CALCULATOR */}
              <div className="mt-6">
                <VisualComputeDiagram
                  type={currentTopic.diagramType}
                  topic={currentTopic}
                  arrivalRate={arrivalRate}
                  setArrivalRate={setArrivalRate}
                  latencyMs={latencyMs}
                  setLatencyMs={setLatencyMs}
                  headroomPct={headroomPct}
                  setHeadroomPct={setHeadroomPct}
                  concurrency={concurrency}
                  computeGameScenarios={computeGameScenarios}
                  gameScenarioIndex={gameScenarioIndex}
                  setGameScenarioIndex={setGameScenarioIndex}
                  gameSelection={gameSelection}
                  handleGameAnswer={handleGameAnswer}
                  gameScore={gameScore}
                  gameHistory={gameHistory}
                  copyCode={copyCode}
                  copiedCodeId={copiedCodeId}
                />
              </div>

              {/* IN-DEPTH THEORY SECTION */}
              <section className="mt-8 rounded-2xl border border-[#e7e3da] bg-white shadow-sm">
                <div className="border-b border-[#e7e3da] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} className="text-[#f97316]" />
                    <h3 className="font-bold text-stone-900">
                      In-Depth Systems & Compute Theory
                    </h3>
                  </div>

                  <span className="font-mono text-xs text-stone-400">MIT 6.004 & CMU 15-440</span>
                </div>

                <div className="space-y-4 px-6 py-6 text-sm md:text-[15px] leading-relaxed text-stone-700">
                  {currentTopic.theory.map((para, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f97316]" />
                      <p>{para}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* KEY PRINCIPLES */}
              <section className="mt-6 rounded-2xl border border-[#e7e3da] bg-white shadow-sm overflow-hidden">
                <div
                  onClick={() => setShowDetails((prev) => !prev)}
                  className="flex items-center justify-between border-b border-[#e7e3da] px-6 py-4 cursor-pointer hover:bg-stone-50 transition"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#f97316]" />
                    <h3 className="font-bold text-stone-900">
                      Compute Invariants & Key Architectural Rules
                    </h3>
                  </div>
                  {showDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>

                {showDetails && (
                  <div className="p-6 space-y-3 border-b border-[#e7e3da]">
                    {currentTopic.keyPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700">
                        <span className="font-mono text-xs font-bold text-[#ea580c]">{`0${i + 1}`}</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* SENIOR ARCHITECT DECISION */}
              {currentTopic.architectDecision && (
                <section className="mt-6 rounded-2xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-xl">
                  <div className="flex items-center gap-2 text-[#f97316] mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                    <Shield size={16} />
                    <span>Senior Architect Decision Rationale</span>
                  </div>
                  <p className="text-sm md:text-[15px] text-stone-300 leading-relaxed">
                    {currentTopic.architectDecision}
                  </p>
                </section>
              )}

              {/* TECHNICAL INTERVIEW QUESTIONS */}
              {currentTopic.interviewQuestions && currentTopic.interviewQuestions.length > 0 && (
                <section className="mt-6 rounded-2xl border border-[#e7e3da] bg-white shadow-sm p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare size={18} className="text-[#f97316]" />
                    <h3 className="font-bold text-stone-900">
                      Technical Interview & Systems Defense Questions
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {currentTopic.interviewQuestions.map((qa, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-[#e7e3da] bg-[#faf8f4]/60 p-4"
                      >
                        <div className="flex items-start gap-2 text-sm font-bold text-stone-900">
                          <span className="text-[#ea580c] font-mono">Q:</span>
                          <span>{qa.q}</span>
                        </div>
                        <div className="mt-2.5 flex items-start gap-2 text-xs md:text-sm leading-relaxed text-stone-600 pl-4 border-l-2 border-orange-300">
                          <span className="text-stone-400 font-mono">A:</span>
                          <span>{qa.a}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* BOTTOM NAVIGATION */}
              <div className="module-footer-nav mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e3da] pt-6">
                <button
                  type="button"
                  onClick={previousTopic}
                  className="flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-white px-5 py-2.5 text-xs md:text-sm font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-sm"
                >
                  <ArrowLeft size={16} />
                  <span>Previous: {selectedTopic === 0 ? "Last Topic" : computeTopics[selectedTopic - 1].shortTitle}</span>
                </button>

                <button
                  type="button"
                  onClick={nextTopic}
                  className="flex items-center gap-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-6 py-2.5 text-xs md:text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:scale-105 active:scale-95"
                >
                  <span>Next: {selectedTopic === computeTopics.length - 1 ? "Overview" : computeTopics[selectedTopic + 1].shortTitle}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* VISUAL COMPUTE DIAGRAM DISPATCHER                                          */
/* -------------------------------------------------------------------------- */

function VisualComputeDiagram({
  type,
  topic,
  arrivalRate,
  setArrivalRate,
  latencyMs,
  setLatencyMs,
  headroomPct,
  setHeadroomPct,
  concurrency,
  computeGameScenarios,
  gameScenarioIndex,
  setGameScenarioIndex,
  gameSelection,
  handleGameAnswer,
  gameScore,
  gameHistory,
  copyCode,
  copiedCodeId,
}) {
  switch (type) {
    case "compute-hierarchy":
      return <ComputeHierarchyDiagram />;

    case "cpu-core-thread-diagram":
      return <CpuCoreThreadDiagram />;

    case "bottleneck-diagnostic-tree":
      return <BottleneckDiagnosticTree />;

    case "machine-families-grid":
      return <MachineFamiliesGrid />;

    case "container-bin-packing":
      return <ContainerBinPackingDiagram />;

    case "cpu-vs-gpu-architecture":
      return <CpuVsGpuArchitectureDiagram />;

    case "autoscaling-engine":
      return <AutoscalingEngineDiagram />;

    case "compute-granularity-comparison":
      return <ComputeGranularityDiagram />;

    case "batch-spot-architecture":
      return <BatchSpotArchitectureDiagram />;

    case "littles-law-calculator":
      return (
        <LittlesLawCalculatorDiagram
          arrivalRate={arrivalRate}
          setArrivalRate={setArrivalRate}
          latencyMs={latencyMs}
          setLatencyMs={setLatencyMs}
          headroomPct={headroomPct}
          setHeadroomPct={setHeadroomPct}
          concurrency={concurrency}
        />
      );

    case "cross-cloud-compute-table":
      return <CrossCloudComputeTable />;

    case "compute-game-simulator":
    default:
      return (
        <ComputeGameSimulator
          computeGameScenarios={computeGameScenarios}
          gameScenarioIndex={gameScenarioIndex}
          setGameScenarioIndex={setGameScenarioIndex}
          gameSelection={gameSelection}
          handleGameAnswer={handleGameAnswer}
          gameScore={gameScore}
          gameHistory={gameHistory}
        />
      );
  }
}

/* -------------------------------------------------------------------------- */
/* INDIVIDUAL VISUAL DIAGRAMS                                                 */
/* -------------------------------------------------------------------------- */

function ComputeHierarchyDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Execution Stack
          </span>
          <h4 className="text-base font-bold text-stone-900">
            How Code Translates to Silicon Execution
          </h4>
        </div>
      </div>

      <div className="space-y-3 font-mono text-xs">
        <div className="rounded-xl border border-orange-300 bg-orange-50/70 p-3 flex items-center justify-between">
          <span className="font-bold text-[#ea580c]">1. Application Code (JavaScript / Go / Python)</span>
          <span className="text-[10px] text-stone-500">Node.js V8 / Go Runtime</span>
        </div>

        <div className="rounded-xl border border-blue-300 bg-blue-50/70 p-3 flex items-center justify-between">
          <span className="font-bold text-blue-800">2. OS Thread & Process Scheduler</span>
          <span className="text-[10px] text-stone-500">Linux CFS / systemd</span>
        </div>

        <div className="rounded-xl border border-purple-300 bg-purple-50/70 p-3 flex items-center justify-between">
          <span className="font-bold text-purple-800">3. Hypervisor Scheduling (vCPU Time-Slicing)</span>
          <span className="text-[10px] text-stone-500">KVM / AWS Nitro / Hyper-V</span>
        </div>

        <div className="rounded-xl border-2 border-stone-800 bg-[#18181b] p-3 text-white flex items-center justify-between">
          <span className="font-bold text-emerald-400">4. Physical CPU Execution Units (ALU, Registers, L1/L2 Cache)</span>
          <span className="text-[10px] text-stone-400">Intel Xeon / AMD EPYC / Graviton ARM</span>
        </div>
      </div>
    </div>
  );
}

function CpuCoreThreadDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Hardware Architecture
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Physical Core vs SMT Hardware Thread vs Cloud vCPU
          </h4>
        </div>
      </div>

      <div className="rounded-2xl border-2 border-stone-300 bg-stone-50 p-4">
        <span className="font-mono text-xs font-bold text-stone-700 block mb-2">
          Physical CPU Socket (e.g. 64 Physical Cores)
        </span>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Core 1 */}
          <div className="rounded-xl border-2 border-orange-300 bg-white p-4">
            <span className="font-mono text-xs font-bold text-[#ea580c] block mb-2">
              Physical Core 01 (Hardware ALU + L1/L2 Cache)
            </span>

            <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
              <div className="rounded-lg bg-orange-100 border border-orange-300 p-2">
                <span className="font-bold text-orange-950 block">vCPU 0</span>
                <span className="text-[10px] text-orange-700">Thread 1</span>
              </div>
              <div className="rounded-lg bg-orange-100 border border-orange-300 p-2">
                <span className="font-bold text-orange-950 block">vCPU 1</span>
                <span className="text-[10px] text-orange-700">Thread 2</span>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-stone-500">
              Shared execution pipeline and L2 cache. If Thread 1 stalls on RAM, Thread 2 runs.
            </p>
          </div>

          {/* Core 2 */}
          <div className="rounded-xl border border-stone-200 bg-white p-4">
            <span className="font-mono text-xs font-bold text-stone-800 block mb-2">
              Physical Core 02 (Hardware ALU + L1/L2 Cache)
            </span>

            <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
              <div className="rounded-lg bg-stone-100 border border-stone-200 p-2">
                <span className="font-bold text-stone-800 block">vCPU 2</span>
                <span className="text-[10px] text-stone-500">Thread 1</span>
              </div>
              <div className="rounded-lg bg-stone-100 border border-stone-200 p-2">
                <span className="font-bold text-stone-800 block">vCPU 3</span>
                <span className="text-[10px] text-stone-500">Thread 2</span>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-stone-500">
              Isolated from Core 01. No shared L1/L2 cache contention with Core 01.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottleneckDiagnosticTree() {
  const [activeCheck, setActiveCheck] = useState("cpu");

  const bottlenecks = {
    cpu: {
      metric: "CPU % > 90% (with low iowait)",
      type: "CPU-Bound",
      solution: "Upgrade to Compute-Optimized instances (AWS C7g / GCP C3). Profile application CPU flamegraphs to eliminate algorithmic bottlenecks.",
    },
    ram: {
      metric: "Memory % > 90% or Swapping (si/so in vmstat)",
      type: "Memory-Bound",
      solution: "Upgrade to Memory-Optimized instances (AWS R7g / Azure Edsv5). Investigate JVM heap leaks or Redis cache eviction policies.",
    },
    disk: {
      metric: "High %iowait in top, await > 15ms in iostat",
      type: "Storage I/O-Bound",
      solution: "Upgrade EBS volume to io2 Block Express with provisioned IOPS, or switch to Storage-Optimized instances (AWS I4i) with local NVMe SSDs.",
    },
    network: {
      metric: "High packet drops (ethtool), bandwidth capped",
      type: "Network-Bound",
      solution: "Upgrade instance to 25Gbps/100Gbps network bandwidth. Enable Enhanced Networking (SR-IOV) and AWS Elastic Fabric Adapter (EFA).",
    },
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Diagnostic Flowchart
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Systems Bottleneck Diagnostic Engine
          </h4>
        </div>

        <div className="flex gap-1.5 rounded-xl bg-stone-100 p-1 border border-stone-200">
          {["cpu", "ram", "disk", "network"].map((key) => (
            <button
              key={key}
              onClick={() => setActiveCheck(key)}
              className={`rounded-lg px-3 py-1 font-mono text-xs font-bold uppercase transition ${
                activeCheck === key ? "bg-[#f97316] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-orange-200 bg-orange-50/60 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-xs font-bold text-[#ea580c]">
            Diagnostic Signal: {bottlenecks[activeCheck].metric}
          </span>
          <span className="rounded-full bg-orange-200 px-2.5 py-0.5 font-mono text-[10px] font-bold text-orange-900">
            {bottlenecks[activeCheck].type}
          </span>
        </div>
        <p className="text-xs md:text-sm text-stone-800 leading-relaxed font-medium">
          <strong>Architectural Remedy:</strong> {bottlenecks[activeCheck].solution}
        </p>
      </div>
    </div>
  );
}

function MachineFamiliesGrid() {
  const families = [
    { name: "General Purpose", ratio: "1 vCPU : 4 GB RAM", aws: "m7g / m7i", azure: "Dsv5", gcp: "n4 / c3-standard", bestFor: "Web APIs, microservices, container worker pools" },
    { name: "Compute Optimized", ratio: "1 vCPU : 2 GB RAM", aws: "c7g / c7i", azure: "Fsv2", gcp: "c3-highcpu", bestFor: "Batch compute, media transcoding, scientific modeling" },
    { name: "Memory Optimized", ratio: "1 vCPU : 8 GB RAM", aws: "r7g / r7i", azure: "Edsv5", gcp: "m3-megamem", bestFor: "In-memory caches (Redis), relational DBs, Spark analytics" },
    { name: "Storage Optimized", ratio: "High NVMe SSD IOPS", aws: "i4i / i3en", azure: "Lsv3", gcp: "z3", bestFor: "Elasticsearch, Cassandra, Kafka brokers, data lakes" },
    { name: "Accelerated (GPU)", ratio: "Dedicated H100 / A100", aws: "p5 / g5", azure: "NDv5", gcp: "a3 (H100)", bestFor: "Deep learning training, LLM inference, 3D rendering" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Hardware Classification
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Cloud Machine Families Across AWS, Azure & GCP
          </h4>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 text-stone-500">
              <th className="py-2.5 px-3">Family Category</th>
              <th className="py-2.5 px-3">RAM : CPU Ratio</th>
              <th className="py-2.5 px-3 text-amber-700">AWS</th>
              <th className="py-2.5 px-3 text-blue-700">Azure</th>
              <th className="py-2.5 px-3 text-emerald-700">GCP</th>
              <th className="py-2.5 px-3 font-sans">Ideal Workload</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-stone-800">
            {families.map((f, idx) => (
              <tr key={idx} className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-sans font-bold text-stone-900">{f.name}</td>
                <td className="py-2.5 px-3 text-stone-600">{f.ratio}</td>
                <td className="py-2.5 px-3 font-bold text-amber-800">{f.aws}</td>
                <td className="py-2.5 px-3 font-bold text-blue-800">{f.azure}</td>
                <td className="py-2.5 px-3 font-bold text-emerald-800">{f.gcp}</td>
                <td className="py-2.5 px-3 font-sans text-stone-600">{f.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ContainerBinPackingDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Distributed Systems Bin-Packing
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Container Scheduling: Requests vs Limits & Density
          </h4>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Node 1 */}
        <div className="rounded-xl border-2 border-stone-300 bg-stone-50 p-4">
          <div className="flex items-center justify-between mb-2 font-mono text-xs font-bold text-stone-800">
            <span>Worker Node 01 (8 vCPU / 32 GB)</span>
            <span className="text-emerald-700">75% Utilized</span>
          </div>
          <div className="space-y-1.5 font-mono text-xs">
            <div className="p-2 rounded bg-orange-100 border border-orange-300 text-orange-900">
              Pod A (Checkout) • Req: 2 CPU / 4 GB
            </div>
            <div className="p-2 rounded bg-blue-100 border border-blue-300 text-blue-900">
              Pod B (Search API) • Req: 4 CPU / 16 GB
            </div>
            <div className="p-2 rounded bg-stone-200 text-stone-600 text-[10px]">
              Available Headroom: 2 CPU / 12 GB
            </div>
          </div>
        </div>

        {/* Node 2 */}
        <div className="rounded-xl border-2 border-stone-300 bg-stone-50 p-4">
          <div className="flex items-center justify-between mb-2 font-mono text-xs font-bold text-stone-800">
            <span>Worker Node 02 (8 vCPU / 32 GB)</span>
            <span className="text-emerald-700">65% Utilized</span>
          </div>
          <div className="space-y-1.5 font-mono text-xs">
            <div className="p-2 rounded bg-orange-100 border border-orange-300 text-orange-900">
              Pod A Replica (Checkout Anti-Affinity) • Req: 2 CPU / 4 GB
            </div>
            <div className="p-2 rounded bg-purple-100 border border-purple-300 text-purple-900">
              Pod C (Auth Service) • Req: 3 CPU / 8 GB
            </div>
            <div className="p-2 rounded bg-stone-200 text-stone-600 text-[10px]">
              Available Headroom: 3 CPU / 20 GB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CpuVsGpuArchitectureDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Silicon Execution Paradigms
          </span>
          <h4 className="text-base font-bold text-stone-900">
            CPU (Few Latency-Optimized Cores) vs. GPU (Thousands of Parallel ALUs)
          </h4>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-stone-300 bg-stone-50 p-4">
          <span className="font-mono text-xs font-bold text-stone-800 block mb-2">
            CPU (General Purpose Sequential Processor)
          </span>
          <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono mb-3">
            <div className="rounded bg-white border border-stone-300 p-3 font-bold text-stone-800">Heavy Core 1</div>
            <div className="rounded bg-white border border-stone-300 p-3 font-bold text-stone-800">Heavy Core 2</div>
          </div>
          <div className="p-2 rounded bg-stone-200 text-center font-mono text-xs text-stone-700">
            Large L3 Cache + Advanced Branch Predictor
          </div>
          <p className="mt-2 text-[11px] text-stone-600">
            Optimized for low-latency sequential logic, branching conditionals, and complex instruction sets.
          </p>
        </div>

        <div className="rounded-xl border-2 border-emerald-400 bg-emerald-50/50 p-4">
          <span className="font-mono text-xs font-bold text-emerald-900 block mb-2">
            GPU (Massively Parallel Matrix Accelerator)
          </span>
          <div className="grid grid-cols-6 gap-1 text-center text-[10px] font-mono mb-3">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="rounded bg-emerald-200 border border-emerald-300 py-1 font-bold text-emerald-900">
                ALU
              </div>
            ))}
          </div>
          <div className="p-2 rounded bg-emerald-200 text-center font-mono text-xs text-emerald-950 font-bold">
            High Bandwidth Memory (HBM3 • 3.35 TB/s)
          </div>
          <p className="mt-2 text-[11px] text-stone-600">
            Optimized for matrix multiplication ($C = A \times B$) in Deep Learning, Computer Vision, and LLM inference.
          </p>
        </div>
      </div>
    </div>
  );
}

function AutoscalingEngineDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Closed-Loop Feedback Controller
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Autoscaling Policy Engine (Thermostat Model)
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center text-xs font-mono">
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3">
          <span className="text-[10px] text-stone-400 block mb-1">Step 1</span>
          <span className="font-bold text-stone-800 block">Telemetry Signal</span>
          <span className="text-[10px] text-stone-500">CloudWatch / Prometheus (CPU, Queue Depth)</span>
        </div>

        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3">
          <span className="text-[10px] text-stone-400 block mb-1">Step 2</span>
          <span className="font-bold text-stone-800 block">Target Tracking Policy</span>
          <span className="text-[10px] text-stone-500">Target: 60% CPU (Current: 85%)</span>
        </div>

        <div className="rounded-xl border-2 border-orange-400 bg-orange-50 p-3">
          <span className="text-[10px] text-orange-600 block mb-1">Step 3</span>
          <span className="font-bold text-[#ea580c] block">Scaling Decision</span>
          <span className="text-[10px] text-stone-600">Scale Out: Desired Capacity + 3</span>
        </div>

        <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-3">
          <span className="text-[10px] text-emerald-600 block mb-1">Step 4</span>
          <span className="font-bold text-emerald-900 block">Health Check Target</span>
          <span className="text-[10px] text-stone-600">Register into ALB Target Group</span>
        </div>
      </div>
    </div>
  );
}

function ComputeGranularityDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Evolution of Compute
          </span>
          <h4 className="text-base font-bold text-stone-900">
            The Compute Granularity Spectrum
          </h4>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 text-xs">
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
          <span className="font-mono text-xs font-bold text-stone-900 block mb-1">Virtual Machine (VM)</span>
          <span className="font-mono text-[10px] text-stone-400 block mb-2">Unit: Machine</span>
          <p className="text-stone-600">You manage full OS kernel, patches, background daemons, security agents, and static capacity.</p>
        </div>

        <div className="rounded-xl border-2 border-orange-300 bg-orange-50/60 p-4">
          <span className="font-mono text-xs font-bold text-[#ea580c] block mb-1">Container (Kubernetes / ECS)</span>
          <span className="font-mono text-[10px] text-orange-700 block mb-2">Unit: Application Environment</span>
          <p className="text-stone-700">You package code and dependencies. Shared host kernel gives 10x density and fast startup.</p>
        </div>

        <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
          <span className="font-mono text-xs font-bold text-stone-900 block mb-1">Serverless Function (FaaS)</span>
          <span className="font-mono text-[10px] text-stone-400 block mb-2">Unit: Invocation</span>
          <p className="text-stone-600">Zero server management. Event-driven scale-to-zero, per-millisecond billing, cold start trade-offs.</p>
        </div>
      </div>
    </div>
  );
}

function BatchSpotArchitectureDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Cost-Optimized Scale
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Asynchronous Batch Processing with Spot Compute (80% Cost Savings)
          </h4>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 text-xs font-mono">
        <div className="rounded-xl border border-stone-300 bg-stone-100 px-4 py-2 font-bold text-stone-800">
          Job Ingestion (10 Million Nightly Records)
        </div>

        <div className="text-stone-400">↓ Enqueue Messages</div>

        <div className="rounded-xl border-2 border-orange-400 bg-orange-50 px-6 py-2.5 text-center">
          <span className="font-bold text-[#ea580c] block">Amazon SQS / Google Cloud Pub/Sub</span>
          <span className="text-[10px] text-stone-500">Decouples web tier from heavy processing</span>
        </div>

        <div className="text-stone-400">↓ Drained by dynamically scaled worker pool</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
          <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-center">
            <span className="font-bold text-emerald-900 block">Spot Worker 1</span>
            <span className="text-[10px] text-emerald-700">70–90% Discounted EC2</span>
          </div>

          <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-center">
            <span className="font-bold text-emerald-900 block">Spot Worker 2</span>
            <span className="text-[10px] text-emerald-700">Auto-retries on eviction</span>
          </div>

          <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-center">
            <span className="font-bold text-emerald-900 block">Spot Worker 3</span>
            <span className="text-[10px] text-emerald-700">Checkpoints progress to S3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LittlesLawCalculatorDiagram({
  arrivalRate,
  setArrivalRate,
  latencyMs,
  setLatencyMs,
  headroomPct,
  setHeadroomPct,
  concurrency,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Queuing Theory Sizing Engine
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Little's Law Concurrency & Capacity Sizing Calculator
          </h4>
        </div>
        <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
          Formula: L = λ × W
        </span>
      </div>

      {/* Input controls */}
      <div className="grid gap-3 md:grid-cols-3 mb-5">
        <div>
          <label className="font-mono text-[11px] text-stone-500 uppercase block mb-1">
            Arrival Rate λ (Req / Sec):
          </label>
          <input
            type="number"
            value={arrivalRate}
            onChange={(e) => setArrivalRate(e.target.value)}
            className="w-full rounded-lg border border-orange-300 bg-orange-50 px-3 py-1.5 font-mono text-xs font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          />
        </div>

        <div>
          <label className="font-mono text-[11px] text-stone-500 uppercase block mb-1">
            Avg Latency W (Milliseconds):
          </label>
          <input
            type="number"
            value={latencyMs}
            onChange={(e) => setLatencyMs(e.target.value)}
            className="w-full rounded-lg border border-orange-300 bg-orange-50 px-3 py-1.5 font-mono text-xs font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          />
        </div>

        <div>
          <label className="font-mono text-[11px] text-stone-500 uppercase block mb-1">
            Headroom Safety Margin (%):
          </label>
          <input
            type="number"
            value={headroomPct}
            onChange={(e) => setHeadroomPct(e.target.value)}
            className="w-full rounded-lg border border-orange-300 bg-orange-50 px-3 py-1.5 font-mono text-xs font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          />
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid gap-3 md:grid-cols-4">
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
          <span className="font-mono text-[10px] text-stone-500 uppercase block">Concurrency (L)</span>
          <div className="text-xl font-black text-stone-900 font-mono mt-1">
            {concurrency.baseConcurrency.toLocaleString()}
          </div>
          <span className="text-[10px] text-stone-400">In-flight requests</span>
        </div>

        <div className="rounded-xl border border-orange-300 bg-orange-50/70 p-3 text-center">
          <span className="font-mono text-[10px] text-orange-700 uppercase block font-bold">With Headroom</span>
          <div className="text-xl font-black text-[#ea580c] font-mono mt-1">
            {concurrency.withHeadroom.toLocaleString()}
          </div>
          <span className="text-[10px] text-orange-600">Peak buffer target</span>
        </div>

        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
          <span className="font-mono text-[10px] text-stone-500 uppercase block">Single-AZ Instances</span>
          <div className="text-xl font-black text-stone-900 font-mono mt-1">
            {concurrency.containersNeeded}
          </div>
          <span className="text-[10px] text-stone-400">At 50 conn/container</span>
        </div>

        <div className="rounded-xl border-2 border-emerald-400 bg-emerald-50/70 p-3 text-center">
          <span className="font-mono text-[10px] text-emerald-800 uppercase block font-bold">Multi-AZ (N+AZ)</span>
          <div className="text-xl font-black text-emerald-950 font-mono mt-1">
            {concurrency.multiAzContainers}
          </div>
          <span className="text-[10px] text-emerald-700">Survives 1 AZ Outage</span>
        </div>
      </div>
    </div>
  );
}

function CrossCloudComputeTable() {
  const matrix = [
    { primitive: "Virtual Machines", aws: "Amazon EC2", azure: "Azure Virtual Machines", gcp: "Google Compute Engine" },
    { primitive: "VM Scaling Group", aws: "EC2 Auto Scaling Groups", azure: "Virtual Machine Scale Sets (VMSS)", gcp: "Managed Instance Groups (MIG)" },
    { primitive: "Serverless Containers", aws: "AWS Fargate / App Runner", azure: "Azure Container Apps", gcp: "Google Cloud Run" },
    { primitive: "Serverless FaaS", aws: "AWS Lambda", azure: "Azure Functions", gcp: "Cloud Run Functions" },
    { primitive: "Managed Batch", aws: "AWS Batch", azure: "Azure Batch", gcp: "Google Cloud Batch" },
    { primitive: "Spare / Spot Compute", aws: "EC2 Spot Instances", azure: "Azure Spot Virtual Machines", gcp: "Compute Engine Spot VMs" },
    { primitive: "Custom Machine Shapes", aws: "Fixed Pre-packaged SKUs", azure: "Fixed Pre-packaged SKUs", gcp: "Custom vCPU/RAM Sizing" },
    { primitive: "AI / ML Hardware", aws: "Trainium / Inferentia / H100", azure: "Maia / NDv5 (H100)", gcp: "Google Cloud TPU / A3 (H100)" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Multi-Cloud Compute Mapping
          </span>
          <h4 className="text-base font-bold text-stone-900">
            AWS vs. Azure vs. Google Cloud Compute Matrix
          </h4>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 text-stone-500">
              <th className="py-2.5 px-3">Compute Primitive</th>
              <th className="py-2.5 px-3 text-amber-700">AWS</th>
              <th className="py-2.5 px-3 text-blue-700">Azure</th>
              <th className="py-2.5 px-3 text-emerald-700">Google Cloud (GCP)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-stone-800">
            {matrix.map((row, idx) => (
              <tr key={idx} className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-sans font-bold text-stone-900">{row.primitive}</td>
                <td className="py-2.5 px-3 font-bold text-amber-900">{row.aws}</td>
                <td className="py-2.5 px-3 font-bold text-blue-900">{row.azure}</td>
                <td className="py-2.5 px-3 font-bold text-emerald-900">{row.gcp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ComputeGameSimulator({
  computeGameScenarios,
  gameScenarioIndex,
  setGameScenarioIndex,
  gameSelection,
  handleGameAnswer,
  gameScore,
  gameHistory,
}) {
  const currentScenario = computeGameScenarios[gameScenarioIndex];
  const historyForCurrent = gameHistory[currentScenario.id];

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-orange-300 bg-white p-5 md:p-6 shadow-md">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c] flex items-center gap-1.5">
            <ShieldAlert size={14} className="text-red-500" />
            Live Compute Crisis Simulator
          </span>
          <h4 className="text-base font-bold text-stone-900">
            "You are the Compute Architect" Capacity Crisis Game
          </h4>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-mono font-bold text-[#ea580c]">
            Score: {gameScore} / 90
          </div>

          <div className="flex gap-1">
            {computeGameScenarios.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setGameScenarioIndex(idx)}
                className={`h-7 w-7 rounded-lg font-mono text-xs font-bold transition ${
                  gameScenarioIndex === idx
                    ? "bg-[#f97316] text-white"
                    : gameHistory[s.id]
                    ? gameHistory[s.id].isCorrect
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                      : "bg-red-100 text-red-800 border border-red-300"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4 rounded-xl border border-stone-200 bg-stone-50 p-4">
        <h5 className="font-bold text-stone-900 text-sm mb-1">{currentScenario.title}</h5>
        <p className="text-xs md:text-sm text-stone-600 leading-relaxed">{currentScenario.context}</p>
      </div>

      <div className="mb-4">
        <h6 className="font-bold text-stone-900 text-xs md:text-sm">{currentScenario.question}</h6>
      </div>

      <div className="space-y-2.5">
        {currentScenario.options.map((opt) => {
          const isSelected = historyForCurrent?.optionId === opt.id;
          let btnStyle = "border-stone-200 hover:border-orange-300 bg-white";

          if (isSelected) {
            btnStyle = opt.isCorrect
              ? "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold"
              : "border-red-500 bg-red-50 text-red-950 font-bold";
          }

          return (
            <div key={opt.id}>
              <button
                type="button"
                onClick={() => handleGameAnswer(currentScenario, opt)}
                className={`w-full text-left rounded-xl border-2 p-3.5 text-xs md:text-sm transition flex items-start gap-3 ${btnStyle}`}
              >
                <span className="font-mono font-bold text-stone-400">{opt.id}.</span>
                <span className="flex-1">{opt.text}</span>
              </button>

              {isSelected && (
                <div
                  className={`mt-2 rounded-lg p-3 text-xs leading-relaxed border ${
                    opt.isCorrect
                      ? "bg-emerald-100/70 border-emerald-300 text-emerald-900"
                      : "bg-red-100/70 border-red-300 text-red-900"
                  }`}
                >
                  <strong className="block mb-1 font-bold">{opt.verdict}</strong>
                  <span>{opt.explanation}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex justify-between items-center border-t border-stone-200 pt-4">
        <button
          disabled={gameScenarioIndex === 0}
          onClick={() => setGameScenarioIndex((prev) => prev - 1)}
          className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-bold text-stone-600 disabled:opacity-40"
        >
          Previous Scenario
        </button>

        <span className="font-mono text-xs text-stone-400">
          Scenario {gameScenarioIndex + 1} of {computeGameScenarios.length}
        </span>

        <button
          disabled={gameScenarioIndex === computeGameScenarios.length - 1}
          onClick={() => setGameScenarioIndex((prev) => prev + 1)}
          className="rounded-lg bg-[#f97316] px-4 py-1.5 text-xs font-bold text-white shadow-xs disabled:opacity-40"
        >
          Next Scenario
        </button>
      </div>
    </div>
  );
}
