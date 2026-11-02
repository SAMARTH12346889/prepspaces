import { getLucideIcon } from "../utils/iconMap";
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
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 1: CLOUD FOUNDATIONS                               */
/* Weeks 1–2: From Physical Datacenter to Cloud Architecture                  */
/* Systems Engineering principles: MIT 6.033, Stanford CS144, NIST SP 800-145 */
/* -------------------------------------------------------------------------- */


export default function CloudComputing() {
  const { data: moduleData, loading, error, reload } = useModuleContent("cloud", "cloud");
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive' | 'qa'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Failure Game State
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  // Availability Calculator State
  const [ninesInput, setNinesInput] = useState("99.99");

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const cloudTopics = moduleData?.topics || [];

  const currentTopic = cloudTopics[selectedTopic] || cloudTopics[0] || {};
  const CurrentIcon = getLucideIcon(currentTopic?.icon, Globe);
  const topicNumber = String(selectedTopic + 1).padStart(2, "0");

  const nextTopic = () => {
    setSelectedTopic((prev) => (prev < cloudTopics.length - 1 ? prev + 1 : 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousTopic = () => {
    setSelectedTopic((prev) => (prev > 0 ? prev - 1 : cloudTopics.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scenarios for the Failure Simulator Game
  const failureScenarios = moduleData?.scenarios || [];

  const handleGameAnswer = (scenario, option) => {
    const isFirstTry = gameHistory[scenario.id] === undefined;
    setGameSelection(option.id);
    setGameHistory((prev) => ({
      ...prev,
      [scenario.id]: { optionId: option.id, isCorrect: option.isCorrect },
    }));

    if (isFirstTry && option.isCorrect) {
      setGameScore((prev) => prev + 20);
    }
  };

  // Helper to calculate downtime from nines input
  const calculateDowntime = (nines) => {
    const val = parseFloat(nines);
    if (isNaN(val) || val <= 0 || val > 100) return null;
    const unavailabilityFraction = (100 - val) / 100;
    const minutesPerYear = 365.25 * 24 * 60;
    const totalDowntimeMinutes = unavailabilityFraction * minutesPerYear;

    if (totalDowntimeMinutes >= 1440) {
      const days = (totalDowntimeMinutes / 1440).toFixed(2);
      return `${days} days / year`;
    } else if (totalDowntimeMinutes >= 60) {
      const hours = (totalDowntimeMinutes / 60).toFixed(2);
      return `${hours} hours / year`;
    } else if (totalDowntimeMinutes >= 1) {
      const mins = totalDowntimeMinutes.toFixed(2);
      return `${mins} minutes / year`;
    } else {
      const secs = (totalDowntimeMinutes * 60).toFixed(1);
      return `${secs} seconds / year`;
    }
  };

    if (loading) {
    return <ModuleLoadingSkeleton track="cloud" currentModuleId="cloud" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="cloud" currentModuleId="cloud" error={error} onRetry={reload} />;
  }
return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-12 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* TOP HEADER */}
        <ModuleNav
          track="cloud"
          currentModuleId="cloud"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Cloud AI"
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
                    Nova AI Cloud Systems Architect Tutor
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    Ask doubts about hypervisors, failure domains, multi-AZ resilience, or NIST characteristics.
                  </p>
                </div>
              </div>
            </div>

            <LearningRo currentTopic={`cloud-${currentTopic.id}`} />
          </section>
        )}

        {/* HERO BANNER - High-end Prepspaces Aesthetic */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-2xl md:p-9 relative">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
          
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/30 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#f97316] mb-3">
                <Server size={13} />
                <span>Foundations of Systems & Architecture</span>
              </div>

              <h1 className="text-2xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
                From Physical Datacenter to Cloud Architecture
              </h1>

              <p className="mt-3 text-xs md:text-sm leading-relaxed text-stone-300 max-w-2xl">
                No rote memorization. Built on the systems engineering philosophy of MIT 6.033, Stanford CS144, and Berkeley: understand the abstractions, failure domains, trade-offs, and physical silicon beneath the virtual cloud.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-[#f97316]">12</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Core Sections</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-emerald-400">5</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Hands-on Labs</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-amber-400">8</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Failure Scenarios</div>
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
                  Cloud Foundations Masterclass
                </p>
                <h2 className="text-xl md:text-2xl font-black text-[#18181b]">
                  {currentTopic.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <span className="rounded-xl border border-[#e7e3da] bg-white px-3.5 py-1.5 font-mono text-xs font-bold text-stone-700 shadow-sm">
                  Topic {topicNumber} / {cloudTopics.length}
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
                  Course Modules
                </h3>
              </div>

              <div className="space-y-1.5">
                {cloudTopics.map((topic, index) => {
                  const Icon = getLucideIcon(topic.icon, Globe);
                  const active = selectedTopic === index;

                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => {
                        setSelectedTopic(index);
                        setActiveTab("theory");
                      }}
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

              {/* Quick Links to Interactive Tools */}
              <div className="mt-6 border-t border-[#e7e3da] pt-4 px-2 space-y-2">
                <button
                  onClick={() => setSelectedTopic(10)} // Failure Game
                  className="flex w-full items-center justify-between rounded-xl border border-red-200 bg-red-50/70 p-2.5 text-xs font-bold text-red-800 hover:bg-red-100 transition shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <ShieldAlert size={14} className="text-red-600" />
                    Play Failure Game
                  </span>
                  <span className="rounded-full bg-red-200 px-2 py-0.5 text-[10px]">Playable</span>
                </button>

                <button
                  onClick={() => setSelectedTopic(9)} // Labs
                  className="flex w-full items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/70 p-2.5 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Terminal size={14} className="text-emerald-600" />
                    Labs 1–5 Walkthrough
                  </span>
                  <span className="rounded-full bg-emerald-200 px-2 py-0.5 text-[10px]">Hands-on</span>
                </button>
              </div>
            </aside>

            {/* MAIN TOPIC CONTENT AREA */}
            <main className="min-w-0 p-5 md:p-8">
              {/* TOP SUMMARY CARD */}
              <div className="rounded-2xl border border-orange-200/80 bg-orange-50/50 p-5 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#f97316] text-white">
                    <Lightbulb size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-orange-800">
                      Core Concept Mental Model
                    </h4>
                    <p className="mt-1 text-sm md:text-base leading-relaxed text-stone-800 font-medium">
                      {currentTopic.summary}
                    </p>
                  </div>
                </div>
              </div>

              {/* INTERACTIVE DIAGRAM VIEWER */}
              <div className="mt-6">
                <VisualDiagramComponent
                  type={currentTopic.diagramType}
                  topic={currentTopic}
                  ninesInput={ninesInput}
                  setNinesInput={setNinesInput}
                  calculateDowntime={calculateDowntime}
                  failureScenarios={failureScenarios}
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
                      In-Depth Systems Engineering Theory
                    </h3>
                  </div>

                  <span className="font-mono text-xs text-stone-400">MIT 6.033 & NIST SP 800-145</span>
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

              {/* KEY ARCHITECTURAL TAKEAWAYS */}
              <section className="mt-6 rounded-2xl border border-[#e7e3da] bg-white shadow-sm overflow-hidden">
                <div
                  onClick={() => setShowDetails((prev) => !prev)}
                  className="flex items-center justify-between border-b border-[#e7e3da] px-6 py-4 cursor-pointer hover:bg-stone-50 transition"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#f97316]" />
                    <h3 className="font-bold text-stone-900">
                      Key Architectural Principles & Invariants
                    </h3>
                  </div>
                  {showDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>

                {showDetails && (
                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-b border-[#e7e3da]">
                    <div className="p-5 space-y-3">
                      {currentTopic.keyPoints.slice(0, 3).map((pt, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700">
                          <span className="font-mono text-xs font-bold text-[#ea580c]">{`0${i + 1}`}</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-5 space-y-3">
                      {currentTopic.keyPoints.slice(3).map((pt, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700">
                          <span className="font-mono text-xs font-bold text-[#ea580c]">{`0${i + 4}`}</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* REAL-WORLD ARCHITECTURAL DECISION */}
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

              {/* INTERVIEW QUESTIONS ACCORDION */}
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

              {/* BOTTOM NAVIGATION BUTTONS */}
              <div className="module-footer-nav mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e3da] pt-6">
                <button
                  type="button"
                  onClick={previousTopic}
                  className="flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-white px-5 py-2.5 text-xs md:text-sm font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-sm"
                >
                  <ArrowLeft size={16} />
                  <span>Previous: {selectedTopic === 0 ? "Last Topic" : cloudTopics[selectedTopic - 1].shortTitle}</span>
                </button>

                <button
                  type="button"
                  onClick={nextTopic}
                  className="flex items-center gap-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-6 py-2.5 text-xs md:text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:scale-105 active:scale-95"
                >
                  <span>Next: {selectedTopic === cloudTopics.length - 1 ? "Overview" : cloudTopics[selectedTopic + 1].shortTitle}</span>
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
/* VISUAL DIAGRAM COMPONENT DISPATCHER                                        */
/* Rich interactive visual components for every cloud systems topic           */
/* -------------------------------------------------------------------------- */

function VisualDiagramComponent({
  type,
  topic,
  ninesInput,
  setNinesInput,
  calculateDowntime,
  failureScenarios,
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
    case "abstraction-stack":
      return <AbstractionStackDiagram />;

    case "region-az-topology":
      return <RegionAzTopologyDiagram />;

    case "delivery-models-pyramid":
      return <DeliveryModelsDiagram />;

    case "hypervisor-internals":
      return <HypervisorInternalsDiagram />;

    case "container-vs-vm":
      return <ContainerVsVmDiagram />;

    case "serverless-lifecycle":
      return <ServerlessLifecycleDiagram />;

    case "nines-table":
      return (
        <NinesCalculatorDiagram
          ninesInput={ninesInput}
          setNinesInput={setNinesInput}
          calculateDowntime={calculateDowntime}
        />
      );

    case "shared-responsibility-matrix":
      return <SharedResponsibilityDiagram />;

    case "cross-cloud-matrix-diagram":
      return <CrossCloudMatrixDiagram />;

    case "lab-progression":
      return <LabsProgressionDiagram copyCode={copyCode} copiedCodeId={copiedCodeId} />;

    case "failure-simulator":
      return (
        <FailureSimulatorGame
          failureScenarios={failureScenarios}
          gameScenarioIndex={gameScenarioIndex}
          setGameScenarioIndex={setGameScenarioIndex}
          gameSelection={gameSelection}
          handleGameAnswer={handleGameAnswer}
          gameScore={gameScore}
          gameHistory={gameHistory}
        />
      );

    case "summary-matrix":
    default:
      return <FinalArchitectureDiagram />;
  }
}

/* -------------------------------------------------------------------------- */
/* INDIVIDUAL RICH DIAGRAMS                                                   */
/* -------------------------------------------------------------------------- */

function AbstractionStackDiagram() {
  const [activeLevel, setActiveLevel] = useState(1);

  const levels = [
    {
      lvl: 3,
      name: "Level 3: Application Runtime",
      color: "border-orange-300 bg-orange-50/70 text-orange-900",
      accent: "bg-[#ea580c]",
      items: ["Node.js / Go Web API", "Microservices", "Docker Containers", "PostgreSQL / Redis", "Serverless Lambdas"],
      description: "What end-users interact with and what software engineers write. Completely unaware of physical silicon.",
    },
    {
      lvl: 2,
      name: "Level 2: Infrastructure Abstraction (Cloud Control Plane)",
      color: "border-amber-300 bg-amber-50/70 text-amber-900",
      accent: "bg-amber-600",
      items: ["Virtual Machines (vCPUs)", "VPC Subnets & Route Tables", "Virtual Disks (EBS/NVMe)", "Load Balancers (ALB)", "Software-Defined Firewall Rules"],
      description: "Provisioned instantly via REST API. Emulated or scheduled by Type 1 hypervisors and Linux kernel network overlays.",
    },
    {
      lvl: 1,
      name: "Level 1: Physical Reality (Physical Datacenter)",
      color: "border-stone-400 bg-stone-100 text-stone-900",
      accent: "bg-stone-800",
      items: ["Multi-core Intel Xeon/AMD EPYC CPUs", "DDR5 ECC RAM Sticks", "NVMe SSD PCIe Disks", "Top-of-Rack (ToR) 100Gbps Switches", "UPS Batteries & Diesel Generators"],
      description: "Physical atoms subject to heat, thermodynamics, fiber cuts, power substation fires, and speed-of-light propagation delays.",
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Interactive Systems Model
          </span>
          <h4 className="text-base font-bold text-stone-900">
            The 3 Levels of Cloud Computing Abstraction
          </h4>
        </div>
        <span className="text-xs text-stone-500">Click a level to inspect</span>
      </div>

      <div className="space-y-3">
        {levels.map((l) => (
          <div
            key={l.lvl}
            onClick={() => setActiveLevel(l.lvl)}
            className={`cursor-pointer rounded-2xl border-2 p-4 transition-all ${
              activeLevel === l.lvl
                ? `${l.color} shadow-md scale-[1.01]`
                : "border-[#e7e3da] bg-stone-50/50 hover:bg-stone-50 opacity-80"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${l.accent}`} />
                {l.name}
              </span>
              <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/80 border border-stone-200">
                Layer {l.lvl}
              </span>
            </div>

            <p className="text-xs text-stone-600 mb-3">{l.description}</p>

            <div className="flex flex-wrap gap-2">
              {l.items.map((item, idx) => (
                <span
                  key={idx}
                  className="rounded-lg bg-white/90 border border-stone-200/80 px-2.5 py-1 font-mono text-[11px] font-semibold text-stone-800 shadow-2xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-orange-50 border border-orange-200 p-3 text-xs text-orange-950 flex items-center gap-2">
        <Sparkles size={16} className="text-[#f97316] shrink-0" />
        <span>
          <strong>MIT 6.033 Golden Principle:</strong> Cloud engineering is the art of navigating between these three levels when troubleshooting latency spikes, network partitions, and hardware crashes.
        </span>
      </div>
    </div>
  );
}

function RegionAzTopologyDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Geographic & Physical Isolation
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Region vs. Availability Zone Architecture
          </h4>
        </div>
        <span className="rounded-full bg-orange-100 px-2.5 py-0.5 font-mono text-[10px] font-bold text-orange-800">
          Independent Failure Domains
        </span>
      </div>

      {/* Cloud Region Outer Box */}
      <div className="rounded-2xl border-2 border-dashed border-orange-300 bg-orange-50/20 p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe size={18} className="text-[#ea580c]" />
            <span className="font-bold text-stone-800 text-sm">
              Cloud Region (e.g. us-east-1 • N. Virginia)
            </span>
          </div>
          <span className="font-mono text-[10px] text-stone-500">
            Isolated Geographic Territory
          </span>
        </div>

        {/* 3 AZs Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* AZ 1 */}
          <div className="rounded-xl border border-emerald-300 bg-emerald-50/50 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-emerald-800">
                AZ-1 (us-east-1a)
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="space-y-2 text-xs text-stone-600">
              <div className="p-2 rounded bg-white border border-emerald-200">
                <span className="font-bold text-stone-800 block">Datacenter Facility A</span>
                <span className="text-[10px] text-stone-500">Dedicated utility substation + UPS</span>
              </div>
              <div className="p-2 rounded bg-white border border-emerald-200">
                <span className="font-bold text-stone-800 block">Compute Rack Cluster</span>
                <span className="text-[10px] text-stone-500">App VM 1 & Primary Database</span>
              </div>
            </div>
          </div>

          {/* AZ 2 */}
          <div className="rounded-xl border border-emerald-300 bg-emerald-50/50 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-emerald-800">
                AZ-2 (us-east-1b)
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="space-y-2 text-xs text-stone-600">
              <div className="p-2 rounded bg-white border border-emerald-200">
                <span className="font-bold text-stone-800 block">Datacenter Facility B (15 miles apart)</span>
                <span className="text-[10px] text-stone-500">Independent power grid + Diesel gen</span>
              </div>
              <div className="p-2 rounded bg-white border border-emerald-200">
                <span className="font-bold text-stone-800 block">Compute Rack Cluster</span>
                <span className="text-[10px] text-stone-500">App VM 2 & Standby DB Replica</span>
              </div>
            </div>
          </div>

          {/* AZ 3 */}
          <div className="rounded-xl border border-emerald-300 bg-emerald-50/50 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-emerald-800">
                AZ-3 (us-east-1c)
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="space-y-2 text-xs text-stone-600">
              <div className="p-2 rounded bg-white border border-emerald-200">
                <span className="font-bold text-stone-800 block">Datacenter Facility C</span>
                <span className="text-[10px] text-stone-500">Independent flood zone & cooling</span>
              </div>
              <div className="p-2 rounded bg-white border border-emerald-200">
                <span className="font-bold text-stone-800 block">Compute Rack Cluster</span>
                <span className="text-[10px] text-stone-500">App VM 3 & DB Witness Quorum</span>
              </div>
            </div>
          </div>
        </div>

        {/* Low-latency Private Fiber Bus */}
        <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-white/90 border border-orange-200 py-2 text-xs font-mono text-stone-700">
          <Activity size={14} className="text-[#ea580c]" />
          <span>Inter-AZ Private Metro Dark Fiber Interconnect: <strong>&lt; 1.5ms Latency</strong></span>
        </div>
      </div>
    </div>
  );
}

function DeliveryModelsDiagram() {
  const [selectedModel, setSelectedModel] = useState("iaas");

  const models = {
    iaas: {
      title: "IaaS (Infrastructure as a Service)",
      examples: "AWS EC2, Google Compute Engine, Azure VMs",
      youManage: ["Application Code", "Database & Schema", "Language Runtime", "Operating System Patches", "Firewall & Security Groups"],
      providerManages: ["Physical Datacenter", "Electrical & Cooling", "Physical Servers & Racks", "Virtualization & Hypervisor", "Core Fiber Networking"],
      tradeoff: "Maximum operational freedom and kernel configuration; highest manual patching toil.",
    },
    paas: {
      title: "PaaS (Platform as a Service)",
      examples: "AWS Elastic Beanstalk, Google Cloud Run, Azure App Service, Heroku",
      youManage: ["Application Source Code", "Environment Config & Secrets", "Database Schema"],
      providerManages: ["Operating System & Security Patches", "Language Runtime (Node/Python)", "Auto-scaling Provisioning", "Physical Servers & Hypervisors", "Datacenter Facilities"],
      tradeoff: "High developer productivity and zero OS maintenance; opinionated runtime constraints.",
    },
    saas: {
      title: "SaaS (Software as a Service)",
      examples: "Gmail, Google Workspace, Salesforce, Microsoft 365, Slack",
      youManage: ["User Accounts & Permissions", "Access Control & MFA", "Company Data"],
      providerManages: ["Complete Application Code", "Database Backups & Scaling", "Operating Systems", "Runtime & Dependencies", "All Global Hardware"],
      tradeoff: "Turnkey immediate utility with zero infrastructure responsibility; limited customization.",
    },
  };

  const current = models[selectedModel];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            NIST SP 800-145 Service Models
          </span>
          <h4 className="text-base font-bold text-stone-900">
            IaaS vs. PaaS vs. SaaS Responsibility Split
          </h4>
        </div>

        {/* Model Selector Tabs */}
        <div className="flex gap-1.5 rounded-xl bg-stone-100 p-1 border border-stone-200">
          {["iaas", "paas", "saas"].map((m) => (
            <button
              key={m}
              onClick={() => setSelectedModel(m)}
              className={`rounded-lg px-3 py-1 font-mono text-xs font-bold uppercase transition ${
                selectedModel === m
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h5 className="font-bold text-stone-900 text-sm">{current.title}</h5>
        <p className="text-xs text-stone-500 font-mono mt-0.5">Examples: {current.examples}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Customer Responsibility */}
        <div className="rounded-xl border border-orange-200 bg-orange-50/60 p-4">
          <div className="flex items-center gap-2 mb-3 text-[#ea580c] font-bold text-xs uppercase tracking-wider font-mono">
            <CheckCircle2 size={16} />
            <span>YOU Manage (Customer)</span>
          </div>
          <ul className="space-y-2 text-xs text-stone-700">
            {current.youManage.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 bg-white/80 border border-orange-200/60 rounded-lg p-2 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ea580c]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Provider Responsibility */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
          <div className="flex items-center gap-2 mb-3 text-emerald-700 font-bold text-xs uppercase tracking-wider font-mono">
            <Shield size={16} />
            <span>PROVIDER Manages (AWS/Azure/GCP)</span>
          </div>
          <ul className="space-y-2 text-xs text-stone-700">
            {current.providerManages.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 bg-white/80 border border-emerald-200/60 rounded-lg p-2 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-stone-100 p-3 text-xs text-stone-700 border border-stone-200 font-medium">
        <strong>Architectural Trade-Off:</strong> {current.tradeoff}
      </div>
    </div>
  );
}

function HypervisorInternalsDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Virtualization Architecture
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Type 1 Bare-Metal Hypervisor vs. Type 2 Hosted
          </h4>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Type 1 */}
        <div className="rounded-2xl border-2 border-orange-300 bg-orange-50/40 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs font-bold text-[#ea580c]">
              Type 1: Bare-Metal (Cloud Standard)
            </span>
            <span className="rounded bg-orange-200 px-2 py-0.5 text-[10px] font-bold text-orange-900">
              KVM / ESXi / Hyper-V
            </span>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-orange-200 bg-white p-2 text-center text-xs">
                <span className="font-bold block text-stone-800">VM 1</span>
                <span className="text-[10px] text-stone-500">Guest OS + App</span>
              </div>
              <div className="rounded-lg border border-orange-200 bg-white p-2 text-center text-xs">
                <span className="font-bold block text-stone-800">VM 2</span>
                <span className="text-[10px] text-stone-500">Guest OS + App</span>
              </div>
            </div>

            <div className="rounded-lg bg-[#f97316] text-white p-2.5 text-center text-xs font-bold shadow-xs">
              Type 1 Hypervisor (Runs directly on Silicon)
            </div>

            <div className="rounded-lg bg-stone-800 text-white p-2 text-center text-xs font-mono">
              Physical Hardware (CPU, RAM, NIC with Intel VT-x)
            </div>
          </div>
          <p className="mt-3 text-[11px] text-stone-600">
            Direct bare-metal access. High throughput, low latency, near-zero CPU overhead. Used in AWS Nitro, Azure, and Google Compute Engine.
          </p>
        </div>

        {/* Type 2 */}
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs font-bold text-stone-700">
              Type 2: Hosted Hypervisor
            </span>
            <span className="rounded bg-stone-200 px-2 py-0.5 text-[10px] font-bold text-stone-800">
              VirtualBox / Workstation
            </span>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-stone-300 bg-white p-2 text-center text-xs">
                <span className="font-bold block text-stone-800">VM 1</span>
                <span className="text-[10px] text-stone-500">Guest OS</span>
              </div>
              <div className="rounded-lg border border-stone-300 bg-white p-2 text-center text-xs">
                <span className="font-bold block text-stone-800">VM 2</span>
                <span className="text-[10px] text-stone-500">Guest OS</span>
              </div>
            </div>

            <div className="rounded-lg bg-stone-300 text-stone-800 p-2 text-center text-xs font-bold">
              Type 2 Hypervisor Software
            </div>

            <div className="rounded-lg bg-stone-400 text-stone-900 p-2 text-center text-xs font-bold">
              Host Operating System (Windows / macOS)
            </div>

            <div className="rounded-lg bg-stone-800 text-white p-2 text-center text-xs font-mono">
              Physical Hardware (CPU, RAM)
            </div>
          </div>
          <p className="mt-3 text-[11px] text-stone-600">
            Double OS layer overhead. Slower I/O and scheduling jitter. Useful for local laptop testing, never for production cloud.
          </p>
        </div>
      </div>
    </div>
  );
}

function ContainerVsVmDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Isolation Mechanics
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Virtual Machine vs. Docker Container Architecture
          </h4>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* VM */}
        <div className="rounded-xl border border-stone-200 bg-stone-50/50 p-4">
          <div className="mb-2 font-mono text-xs font-bold text-stone-800 flex items-center justify-between">
            <span>Virtual Machine (Hardware Isolation)</span>
            <span className="text-[10px] font-bold text-stone-500">Boot: ~30-60s</span>
          </div>

          <div className="space-y-1.5">
            <div className="rounded-lg bg-orange-100 border border-orange-300 p-2 text-center text-xs font-bold text-orange-950">
              App A (Binaries & Libraries)
            </div>
            <div className="rounded-lg bg-amber-100 border border-amber-300 p-2 text-center text-xs font-semibold text-amber-900">
              Guest OS Kernel (Full Linux/Windows) • ~500MB+ RAM
            </div>
            <div className="rounded-lg bg-stone-200 p-2 text-center text-xs font-mono text-stone-700">
              Virtual Hardware (vCPU, vRAM, vNIC)
            </div>
            <div className="rounded-lg bg-[#f97316] text-white p-2 text-center text-xs font-bold">
              Hypervisor (Hardware Virtualization)
            </div>
            <div className="rounded-lg bg-stone-800 text-white p-2 text-center text-xs font-mono">
              Physical Host Server
            </div>
          </div>
        </div>

        {/* Container */}
        <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50/40 p-4">
          <div className="mb-2 font-mono text-xs font-bold text-emerald-800 flex items-center justify-between">
            <span>Container (Process Isolation)</span>
            <span className="text-[10px] font-bold text-emerald-600">Boot: ~150ms</span>
          </div>

          <div className="space-y-1.5">
            <div className="grid grid-cols-2 gap-1.5">
              <div className="rounded-lg bg-emerald-100 border border-emerald-300 p-2 text-center text-xs font-bold text-emerald-950">
                Container 1 (App A)
              </div>
              <div className="rounded-lg bg-emerald-100 border border-emerald-300 p-2 text-center text-xs font-bold text-emerald-950">
                Container 2 (App B)
              </div>
            </div>

            <div className="rounded-lg bg-emerald-200 border border-emerald-300 p-2 text-center text-xs font-semibold text-emerald-950">
              Docker / containerd Runtime
            </div>

            <div className="rounded-lg bg-stone-300 p-2 text-center text-xs font-bold text-stone-900">
              Shared Host Linux Kernel (Namespaces & cgroups)
            </div>

            <div className="rounded-lg bg-stone-800 text-white p-2 text-center text-xs font-mono">
              Physical Host Server / Bare-Metal VM
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2 text-xs">
        <div className="rounded-xl bg-stone-100 p-3 border border-stone-200">
          <strong className="text-stone-900 block mb-1">Namespaces (What process SEES):</strong>
          PID (process IDs), NET (IP & ports), MNT (filesystems), IPC, UTS (hostname).
        </div>
        <div className="rounded-xl bg-stone-100 p-3 border border-stone-200">
          <strong className="text-stone-900 block mb-1">cgroups (What process USES):</strong>
          CPU quota limits, Memory caps (OOM killer), Disk I/O IOPS limits.
        </div>
      </div>
    </div>
  );
}

function ServerlessLifecycleDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            FaaS Execution Model
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Cold Start vs. Warm Start Invocation Lifecycle
          </h4>
        </div>
      </div>

      <div className="space-y-4">
        {/* Cold Start Flow */}
        <div className="rounded-xl border border-red-200 bg-red-50/50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold text-red-800 flex items-center gap-1.5">
              <Zap size={14} className="text-red-600" />
              Cold Start (First Request or Scaled-from-Zero)
            </span>
            <span className="font-mono text-xs font-bold text-red-600">~200ms - 2,500ms</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs">
            <div className="rounded-lg bg-white border border-red-200 p-2">
              <span className="font-mono text-[10px] text-stone-400 block">Step 1</span>
              <span className="font-bold text-stone-800">Download Code</span>
            </div>
            <div className="rounded-lg bg-white border border-red-200 p-2">
              <span className="font-mono text-[10px] text-stone-400 block">Step 2</span>
              <span className="font-bold text-stone-800">Launch MicroVM</span>
            </div>
            <div className="rounded-lg bg-white border border-red-200 p-2">
              <span className="font-mono text-[10px] text-stone-400 block">Step 3</span>
              <span className="font-bold text-stone-800">Init Runtime & DB</span>
            </div>
            <div className="rounded-lg bg-red-100 border border-red-300 p-2">
              <span className="font-mono text-[10px] text-red-600 block">Step 4</span>
              <span className="font-bold text-red-900">Execute Handler</span>
            </div>
          </div>
        </div>

        {/* Warm Start Flow */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-600" />
              Warm Start (Subsequent Concurrent Requests)
            </span>
            <span className="font-mono text-xs font-bold text-emerald-600">&lt; 10ms Latency</span>
          </div>

          <div className="flex items-center justify-between gap-3 text-center text-xs">
            <div className="flex-1 rounded-lg bg-emerald-100 border border-emerald-300 p-3">
              <span className="font-mono text-[10px] text-emerald-700 block">Immediate Execution</span>
              <span className="font-bold text-emerald-950">Execute Handler on Pre-Warmed Sandbox</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NinesCalculatorDiagram({ ninesInput, setNinesInput, calculateDowntime }) {
  const tableData = [
    { nines: "99.0%", name: "Two Nines", maxDowntime: "3.65 days / year", commonIn: "Standard internal dev environments" },
    { nines: "99.9%", name: "Three Nines", maxDowntime: "8.76 hours / year", commonIn: "Single-AZ production applications" },
    { nines: "99.99%", name: "Four Nines", maxDowntime: "52.6 minutes / year", commonIn: "Multi-AZ web architectures with ALB" },
    { nines: "99.999%", name: "Five Nines", maxDowntime: "5.26 minutes / year", commonIn: "Multi-region active-active telecom & finance" },
  ];

  const calculated = calculateDowntime(ninesInput);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Reliability Engineering Calculator
          </span>
          <h4 className="text-base font-bold text-stone-900">
            The High Availability "Nines" & Permissible Downtime
          </h4>
        </div>

        {/* Interactive SLA Input */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-stone-700">Test SLA %:</span>
          <input
            type="number"
            step="0.01"
            min="90"
            max="99.9999"
            value={ninesInput}
            onChange={(e) => setNinesInput(e.target.value)}
            className="w-24 rounded-lg border border-orange-300 bg-orange-50 px-2 py-1 font-mono text-xs font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          />
        </div>
      </div>

      {calculated && (
        <div className="mb-5 rounded-xl bg-orange-500 text-white p-4 flex flex-wrap items-center justify-between gap-3 shadow-md">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-orange-200">
              Calculated Permissible Downtime
            </span>
            <div className="text-xl md:text-2xl font-black">{calculated}</div>
          </div>
          <span className="text-xs text-orange-100 max-w-sm">
            At {ninesInput}%, any outage longer than this breaches your legal SLA contract and triggers customer service credits.
          </span>
        </div>
      )}

      {/* Nines Reference Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 font-mono text-stone-500">
              <th className="py-2.5 px-3">Availability</th>
              <th className="py-2.5 px-3">Name</th>
              <th className="py-2.5 px-3">Allowed Downtime / Year</th>
              <th className="py-2.5 px-3">Typical Target Architecture</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-stone-700">
            {tableData.map((row, idx) => (
              <tr key={idx} className="hover:bg-orange-50/30 transition">
                <td className="py-3 px-3 font-mono font-bold text-[#ea580c]">{row.nines}</td>
                <td className="py-3 px-3 font-medium">{row.name}</td>
                <td className="py-3 px-3 font-mono font-bold text-stone-900">{row.maxDowntime}</td>
                <td className="py-3 px-3 text-stone-600">{row.commonIn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SharedResponsibilityDiagram() {
  const layers = [
    { name: "Customer Data & Encryption", iaas: "Customer", paas: "Customer", saas: "Customer" },
    { name: "IAM & Access Policies", iaas: "Customer", paas: "Customer", saas: "Customer" },
    { name: "Application Code", iaas: "Customer", paas: "Customer", saas: "Provider" },
    { name: "OS & Security Patches", iaas: "Customer", paas: "Provider", saas: "Provider" },
    { name: "Hypervisor & Virtual Network", iaas: "Provider", paas: "Provider", saas: "Provider" },
    { name: "Physical Servers & Storage", iaas: "Provider", paas: "Provider", saas: "Provider" },
    { name: "Datacenter Power & Facilities", iaas: "Provider", paas: "Provider", saas: "Provider" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Governance & Security Boundaries
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Shared Responsibility Model Matrix
          </h4>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 font-mono text-stone-500">
              <th className="py-2.5 px-3">Infrastructure Layer</th>
              <th className="py-2.5 px-3 text-center">IaaS (EC2/Azure VM)</th>
              <th className="py-2.5 px-3 text-center">PaaS (Cloud Run/Beanstalk)</th>
              <th className="py-2.5 px-3 text-center">SaaS (M365/Gmail)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-stone-700">
            {layers.map((l, idx) => (
              <tr key={idx} className="hover:bg-stone-50 transition">
                <td className="py-2.5 px-3 font-bold text-stone-800">{l.name}</td>
                <td className="py-2.5 px-3 text-center">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold ${
                      l.iaas === "Customer"
                        ? "bg-orange-100 text-orange-800 border border-orange-200"
                        : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                    }`}
                  >
                    {l.iaas}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-center">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold ${
                      l.paas === "Customer"
                        ? "bg-orange-100 text-orange-800 border border-orange-200"
                        : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                    }`}
                  >
                    {l.paas}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-center">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold ${
                      l.saas === "Customer"
                        ? "bg-orange-100 text-orange-800 border border-orange-200"
                        : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                    }`}
                  >
                    {l.saas}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CrossCloudMatrixDiagram() {
  const [filter, setFilter] = useState("all");

  const matrix = [
    { domain: "Compute (VM)", aws: "Amazon EC2", azure: "Azure Virtual Machines", gcp: "Google Compute Engine (GCE)" },
    { domain: "Serverless FaaS", aws: "AWS Lambda", azure: "Azure Functions", gcp: "Google Cloud Functions / Cloud Run" },
    { domain: "Object Storage", aws: "Amazon S3", azure: "Azure Blob Storage", gcp: "Google Cloud Storage (GCS)" },
    { domain: "Block Storage", aws: "Amazon EBS", azure: "Azure Managed Disks", gcp: "Google Persistent Disk" },
    { domain: "Virtual Networking", aws: "Amazon VPC", azure: "Azure Virtual Network (VNet)", gcp: "Google Cloud VPC (Global)" },
    { domain: "Relational DB", aws: "Amazon RDS / Aurora", azure: "Azure SQL Database", gcp: "Google Cloud SQL / Spanner" },
    { domain: "NoSQL Database", aws: "Amazon DynamoDB", azure: "Azure Cosmos DB", gcp: "Google Cloud Firestore / Bigtable" },
    { domain: "Managed Kubernetes", aws: "Amazon EKS", azure: "Azure Kubernetes Service (AKS)", gcp: "Google Kubernetes Engine (GKE)" },
    { domain: "Identity & Access", aws: "AWS IAM", azure: "Microsoft Entra ID (Azure AD)", gcp: "Google Cloud IAM" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Multi-Cloud Rosetta Stone
          </span>
          <h4 className="text-base font-bold text-stone-900">
            AWS vs. Azure vs. Google Cloud Service Mapping
          </h4>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 font-mono text-stone-500">
              <th className="py-2.5 px-3">System Primitive</th>
              <th className="py-2.5 px-3 font-bold text-amber-700">AWS</th>
              <th className="py-2.5 px-3 font-bold text-blue-700">Microsoft Azure</th>
              <th className="py-2.5 px-3 font-bold text-emerald-700">Google Cloud (GCP)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-stone-700 font-mono">
            {matrix.map((row, idx) => (
              <tr key={idx} className="hover:bg-stone-50 transition">
                <td className="py-3 px-3 font-sans font-bold text-stone-900">{row.domain}</td>
                <td className="py-3 px-3 text-amber-900 font-semibold">{row.aws}</td>
                <td className="py-3 px-3 text-blue-900 font-semibold">{row.azure}</td>
                <td className="py-3 px-3 text-emerald-900 font-semibold">{row.gcp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LabsProgressionDiagram({ copyCode, copiedCodeId }) {
  const [activeLab, setActiveLab] = useState(1);

  const labs = [
    {
      id: 1,
      title: "Lab 1: Single VM Deployment & OS Inspection",
      cli: `# Launch Ubuntu 22.04 VM & inspect OS isolation
curl -s http://169.254.169.254/latest/meta-data/public-ipv4
ps aux --forest # View Linux process hierarchy tree
sudo lsof -i :80 # Verify web server TCP port listener
ip addr show eth0 # View private VPC interface`,
      learnings: [
        "Inspect Linux PID 1 process tree and public vs private IP mapping.",
        "Verify security group firewall ingress rules on port 80/443.",
        "Observe single point of failure: terminating this VM yields 100% downtime.",
      ],
    },
    {
      id: 2,
      title: "Lab 2: Redundant VMs + Application Load Balancer",
      cli: `# Test ALB Round-Robin & Health Check Failover
for i in {1..10}; do
  curl -s http://my-alb-dns-name.amazonaws.com | grep "Server-ID"
  sleep 0.5
done
# Observe traffic alternating between VM 1 and VM 2`,
      learnings: [
        "Configure HTTP health checks (/healthz endpoint).",
        "Observe round-robin routing across healthy pool instances.",
        "Simulate failure by stopping Nginx on VM 1; verify zero downtime on VM 2.",
      ],
    },
    {
      id: 3,
      title: "Lab 3: Multi-Availability Zone Resilience",
      cli: `# Deploy VM 1 into AZ-1 (us-east-1a) and VM 2 into AZ-2 (us-east-1b)
aws ec2 run-instances --subnet-id subnet-az1a --image-id ami-xxxx ...
aws ec2 run-instances --subnet-id subnet-az1b --image-id ami-xxxx ...`,
      learnings: [
        "Isolate workloads into distinct physical failure domains.",
        "Verify inter-AZ network latency (< 1.5ms).",
        "Verify that blacking out AZ-1 maintains 100% regional availability through AZ-2.",
      ],
    },
    {
      id: 4,
      title: "Lab 4: Packaging Application into a Container",
      cli: `# Build lightweight container & inspect Linux cgroups
docker build -t cloud-app:v1 .
docker run -d --name app -p 8080:8080 --cpus="0.5" --memory="256m" cloud-app:v1
# Inspect cgroup memory limit
cat /sys/fs/cgroup/memory/memory.limit_in_bytes`,
      learnings: [
        "Understand that the container shares the host Linux kernel.",
        "Observe cgroup memory enforcement (exceeding 256MB triggers OOM kill).",
        "Compare boot times: 180ms container vs 45s virtual machine.",
      ],
    },
    {
      id: 5,
      title: "Lab 5: Serverless Event-Driven Function & Cold Start Benchmark",
      cli: `# Deploy AWS Lambda / Cloud Run and benchmark cold start
curl -w "Connect: %{time_connect}, StartTransfer: %{time_starttransfer}, Total: %{time_total}\\n" \\
     https://api.mycloud.com/order-checkout`,
      learnings: [
        "Observe scale-to-zero ($0 cost when idle).",
        "Measure cold start latency (initial 800ms) vs warm start latency (8ms).",
        "Identify best use cases: asynchronous webhooks and queue consumers.",
      ],
    },
  ];

  const current = labs[activeLab - 1];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Progressive Systems Curriculum
          </span>
          <h4 className="text-base font-bold text-stone-900">
            5 Hands-On Architecture Labs Walkthrough
          </h4>
        </div>

        {/* Lab selector pills */}
        <div className="flex flex-wrap gap-1.5">
          {labs.map((l) => (
            <button
              key={l.id}
              onClick={() => setActiveLab(l.id)}
              className={`rounded-lg px-3 py-1 font-mono text-xs font-bold transition ${
                activeLab === l.id
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              Lab {l.id}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <h5 className="font-bold text-stone-900 text-sm">{current.title}</h5>
      </div>

      {/* Code Block */}
      <div className="relative mb-4 overflow-hidden rounded-xl border border-[#27272a] bg-[#18181b] p-4 text-white">
        <div className="flex items-center justify-between mb-2 border-b border-stone-800 pb-2">
          <span className="font-mono text-[11px] text-stone-400 flex items-center gap-1.5">
            <Terminal size={13} className="text-[#f97316]" />
            Terminal Commands & Verification
          </span>
          <button
            onClick={() => copyCode(current.cli, `lab-${current.id}`)}
            className="flex items-center gap-1 text-[11px] font-mono text-[#f97316] hover:underline"
          >
            <Copy size={12} />
            {copiedCodeId === `lab-${current.id}` ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
          <code>{current.cli}</code>
        </pre>
      </div>

      {/* Core Architectural Takeaways */}
      <div className="rounded-xl bg-orange-50/60 border border-orange-200 p-4">
        <span className="font-mono text-xs font-bold text-orange-900 block mb-2">
          Key Engineering Objectives & Observations:
        </span>
        <ul className="space-y-1.5 text-xs text-stone-700">
          {current.learnings.map((pt, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#ea580c] font-bold">•</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FailureSimulatorGame({
  failureScenarios,
  gameScenarioIndex,
  setGameScenarioIndex,
  gameSelection,
  handleGameAnswer,
  gameScore,
  gameHistory,
}) {
  const currentScenario = failureScenarios[gameScenarioIndex];
  const historyForCurrent = gameHistory[currentScenario.id];

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-orange-300 bg-white p-5 md:p-6 shadow-md">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c] flex items-center gap-1.5">
            <ShieldAlert size={14} className="text-red-500" />
            Live Crisis Simulator
          </span>
          <h4 className="text-base font-bold text-stone-900">
            "You are the Cloud Architect" Failure Simulation Game
          </h4>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-mono font-bold text-[#ea580c]">
            Score: {gameScore} / 100
          </div>

          <div className="flex gap-1">
            {failureScenarios.map((s, idx) => (
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

      {/* Scenario Context Card */}
      <div className="mb-4 rounded-xl border border-stone-200 bg-stone-50 p-4">
        <h5 className="font-bold text-stone-900 text-sm mb-1">{currentScenario.title}</h5>
        <p className="text-xs md:text-sm text-stone-600 leading-relaxed">{currentScenario.context}</p>
      </div>

      <div className="mb-4">
        <h6 className="font-bold text-stone-900 text-xs md:text-sm">{currentScenario.question}</h6>
      </div>

      {/* Options */}
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

              {/* Feedback when selected */}
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

      {/* Navigation inside game */}
      <div className="mt-5 flex justify-between items-center border-t border-stone-200 pt-4">
        <button
          disabled={gameScenarioIndex === 0}
          onClick={() => setGameScenarioIndex((prev) => prev - 1)}
          className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-bold text-stone-600 disabled:opacity-40"
        >
          Previous Scenario
        </button>

        <span className="font-mono text-xs text-stone-400">
          Scenario {gameScenarioIndex + 1} of {failureScenarios.length}
        </span>

        <button
          disabled={gameScenarioIndex === failureScenarios.length - 1}
          onClick={() => setGameScenarioIndex((prev) => prev + 1)}
          className="rounded-lg bg-[#f97316] px-4 py-1.5 text-xs font-bold text-white shadow-xs disabled:opacity-40"
        >
          Next Scenario
        </button>
      </div>
    </div>
  );
}

function FinalArchitectureDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Module 1 Capstone Reference Architecture
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Resilient High-Availability Multi-AZ Cloud Stack
          </h4>
        </div>
        <span className="rounded-full bg-emerald-100 text-emerald-800 px-2.5 py-0.5 font-mono text-[10px] font-bold">
          99.99% Target SLA
        </span>
      </div>

      {/* Users -> DNS -> ALB */}
      <div className="flex flex-col items-center gap-3">
        <div className="rounded-xl border border-stone-300 bg-stone-100 px-4 py-2 font-mono text-xs font-bold text-stone-800">
          Users & Client Devices (Worldwide)
        </div>

        <div className="text-stone-400 font-mono text-xs">↓ HTTPS (Port 443) via Edge Anycast DNS</div>

        <div className="rounded-xl border-2 border-orange-400 bg-orange-50 px-6 py-2.5 text-center shadow-xs">
          <span className="font-mono text-xs font-black text-[#ea580c] block">
            Application Load Balancer (ALB)
          </span>
          <span className="text-[10px] text-stone-500">Cross-AZ TLS Termination & Health Probes</span>
        </div>

        <div className="text-stone-400 font-mono text-xs">↓ Low-latency internal routing</div>

        {/* Region with 2 AZs */}
        <div className="w-full rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50/60 p-4">
          <div className="font-mono text-xs font-bold text-stone-700 mb-3 text-center">
            Cloud Region (VPC with Multi-AZ Subnets)
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* AZ 1 Subnet */}
            <div className="rounded-xl border border-orange-200 bg-white p-4 shadow-sm">
              <span className="font-mono text-xs font-bold text-[#ea580c] block mb-2">
                AZ-1 Failure Domain (Subnet A)
              </span>
              <div className="space-y-2 text-xs">
                <div className="rounded-lg bg-orange-50 border border-orange-200 p-2 font-mono">
                  App VM 1 (Containerized Microservice)
                </div>
                <div className="rounded-lg bg-stone-100 p-2 font-mono text-stone-700">
                  Primary Relational Database (Read/Write)
                </div>
              </div>
            </div>

            {/* AZ 2 Subnet */}
            <div className="rounded-xl border border-orange-200 bg-white p-4 shadow-sm">
              <span className="font-mono text-xs font-bold text-[#ea580c] block mb-2">
                AZ-2 Failure Domain (Subnet B)
              </span>
              <div className="space-y-2 text-xs">
                <div className="rounded-lg bg-orange-50 border border-orange-200 p-2 font-mono">
                  App VM 2 (Containerized Microservice)
                </div>
                <div className="rounded-lg bg-stone-100 p-2 font-mono text-stone-700">
                  Synchronous Standby DB Replica (Auto-failover)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
