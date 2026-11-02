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
  FolderTree,
  Box,
  Archive,
  ShieldCheck,
  Lock,
  FileText,
  DollarSign,
  FileCode,
  Table,
  Radio,
  Split,
  Eye,
  GitBranch,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 6: CLOUD ARCHITECTURE                               */
/* Weeks 9–10: Designing Large-Scale Systems                                  */
/* Systems Theory: MIT 6.033, Amazon Builders' Library, Google SRE, Uber DOMA */
/* -------------------------------------------------------------------------- */

// Icon mapping for backend string identifiers to Lucide components
const ICON_MAP = {
  Cloud,
  Server,
  Network,
  Cpu,
  Layers,
  Workflow,
  Shield,
  Lock,
  Globe,
  Radio,
  HardDrive,
  FolderGit2,
  GitBranch,
  Boxes,
  Container,
  Terminal,
  Activity,
  Zap,
  CheckCircle2,
  FileCode,
  Sliders,
  Database,
  Building2,
  FolderTree,
  Table,
  Box,
  Archive,
  BarChart3,
  Gauge,
  TrendingUp,
  Search,
};

export default function CloudArchitecture() {
  const { data: moduleData, loading, error, reload } = useModuleContent("cloud", "architecture");
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Architecture Trade-Off Engine State
  const [archetypeStyle, setArchetypeStyle] = useState("modular-monolith"); // "modular-monolith", "three-tier", "microservices", "cell-based"
  const [resilienceTier, setResilienceTier] = useState("multi-az"); // "single-az", "multi-az", "multi-region-active-passive", "multi-region-active-active"
  const [peakTrafficQps, setPeakTrafficQps] = useState(50000); // 50,000 QPS

  // Circuit Breaker Live Simulator State
  const [dependencyLatencyMs, setDependencyLatencyMs] = useState(45); // Latency of downstream dependency
  const [dependencyFailureRate, setDependencyFailureRate] = useState(2); // % failures
  const [circuitBreakerEnabled, setCircuitBreakerEnabled] = useState(true);

  // Architecture GameDay State
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Trade-Off Engine Calculations
  const architectureTradeOffs = useMemo(() => {
    let blastRadiusPct = 100;
    let rpcOverheadMs = 0;
    let complexityScore = 20; // 1-100
    let monthlyCostEstimate = "$1,200 - $3,500";
    let adrSummary = "";

    // Style calculations
    if (archetypeStyle === "modular-monolith") {
      blastRadiusPct = 80;
      rpcOverheadMs = 1;
      complexityScore = 25;
      monthlyCostEstimate = "$800 - $2,200";
      adrSummary =
        "ADR: Modular Monolith. Single deployable unit with strictly enforced internal domain boundaries. Minimal RPC overhead and zero network serialization penalty. Ideal for teams under 50 engineers.";
    } else if (archetypeStyle === "three-tier") {
      blastRadiusPct = 60;
      rpcOverheadMs = 5;
      complexityScore = 40;
      monthlyCostEstimate = "$2,000 - $6,000";
      adrSummary =
        "ADR: Classic 3-Tier. Clear separation between Presentation, Application Logic, and Database tiers. Simple operational model with independent scaling per tier.";
    } else if (archetypeStyle === "microservices") {
      blastRadiusPct = 35;
      rpcOverheadMs = 35;
      complexityScore = 75;
      monthlyCostEstimate = "$8,000 - $25,000";
      adrSummary =
        "ADR: Microservices with Domain Boundaries. Independent team ownership and deployments. Requires distributed tracing, service discovery, and circuit breakers to handle RPC failure propagation.";
    } else if (archetypeStyle === "cell-based") {
      blastRadiusPct = 10;
      rpcOverheadMs = 25;
      complexityScore = 95;
      monthlyCostEstimate = "$20,000 - $70,000";
      adrSummary =
        "ADR: Cell-Based Architecture. Users partitioned into independent self-contained cells (e.g. 10% of users per cell). Complete blast radius isolation where a failure in Cell 3 never impacts other users.";
    }

    // Resilience Tier adjustments
    if (resilienceTier === "single-az") {
      complexityScore = Math.max(10, complexityScore - 15);
    } else if (resilienceTier === "multi-region-active-active") {
      complexityScore = Math.min(100, complexityScore + 20);
      rpcOverheadMs += 40; // cross-region synchronization
      blastRadiusPct = Math.max(5, Math.round(blastRadiusPct * 0.5));
    }

    return {
      blastRadiusPct,
      rpcOverheadMs,
      complexityScore,
      monthlyCostEstimate,
      adrSummary,
    };
  }, [archetypeStyle, resilienceTier, peakTrafficQps]);

  // Circuit Breaker Simulation State
  const circuitBreakerStatus = useMemo(() => {
    const lat = Number(dependencyLatencyMs) || 0;
    const failPct = Number(dependencyFailureRate) || 0;

    let state = "CLOSED (Healthy)";
    let stateColor = "text-emerald-400 border-emerald-500/40 bg-emerald-950/30";
    let upstreamThreadSaturation = Math.min(100, Math.round((lat / 100) * 8 + failPct * 0.5));
    let effectiveResponseTimeMs = lat;

    if (!circuitBreakerEnabled) {
      if (lat > 500 || failPct > 20) {
        state = "NO PROTECTION: Thread Pool Starvation!";
        stateColor = "text-red-400 border-red-500/50 bg-red-950/40";
        upstreamThreadSaturation = 100;
        effectiveResponseTimeMs = Math.max(lat, 3000);
      }
    } else {
      if (lat > 300 || failPct > 15) {
        state = "OPEN (Tripped - Fast Failing in 2ms)";
        stateColor = "text-orange-400 border-orange-500/50 bg-orange-950/40";
        upstreamThreadSaturation = 12; // protected!
        effectiveResponseTimeMs = 2; // immediate fast fail / cached fallback
      } else if (lat > 150 || failPct > 8) {
        state = "HALF-OPEN (Canary Testing)";
        stateColor = "text-amber-400 border-amber-500/40 bg-amber-950/30";
        upstreamThreadSaturation = 45;
      }
    }

    return {
      state,
      stateColor,
      upstreamThreadSaturation,
      effectiveResponseTimeMs,
    };
  }, [dependencyLatencyMs, dependencyFailureRate, circuitBreakerEnabled]);

  const architectureTopics = moduleData?.topics || [];

  const currentTopic = architectureTopics[selectedTopic] || architectureTopics[0] || {};
  const CurrentIcon = typeof currentTopic?.icon === "function" ? currentTopic.icon : (ICON_MAP[currentTopic?.icon] || Workflow);
  const topicNumber = String(selectedTopic + 1).padStart(2, "0");

  const nextTopic = () => {
    setSelectedTopic((prev) => (prev < architectureTopics.length - 1 ? prev + 1 : 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousTopic = () => {
    setSelectedTopic((prev) => (prev > 0 ? prev - 1 : architectureTopics.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 7 Real-World Architecture Incident Failures (Section 113 of Syllabus)
  const architectureGameScenarios = moduleData?.scenarios || [];

  const handleGameAnswer = (scenarioId, optionId) => {
    const scenario = architectureGameScenarios.find((s) => s.id === scenarioId);
    if (!scenario) return;

    const selectedOption = scenario.options.find((o) => o.id === optionId);
    const isCorrect = selectedOption?.isCorrect || false;

    setGameSelection(optionId);
    setGameHistory((prev) => {
      const alreadyAnswered = prev[scenarioId] !== undefined;
      if (!alreadyAnswered && isCorrect) {
        setGameScore((s) => s + 100);
      }
      return { ...prev, [scenarioId]: optionId };
    });
  };

  const nextGameScenario = () => {
    if (gameScenarioIndex < architectureGameScenarios.length - 1) {
      setGameScenarioIndex((prev) => prev + 1);
      setGameSelection(gameHistory[architectureGameScenarios[gameScenarioIndex + 1]?.id] || null);
    }
  };

  const prevGameScenario = () => {
    if (gameScenarioIndex > 0) {
      setGameScenarioIndex((prev) => prev - 1);
      setGameSelection(gameHistory[architectureGameScenarios[gameScenarioIndex - 1]?.id] || null);
    }
  };

    if (loading) {
    return <ModuleLoadingSkeleton track="cloud" currentModuleId="architecture" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="cloud" currentModuleId="architecture" error={error} onRetry={reload} />;
  }
return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-12 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-orange-500/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="cloud"
          currentModuleId="architecture"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Nova Architecture AI"
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
                    Nova AI Principal Cloud Architect Tutor
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    Ask questions about AWS Well-Architected Framework, Circuit Breakers, Exponential Backoff + Jitter, Transactional Outbox pattern, Cell-Based architecture, or Uber DOMA.
                  </p>
                </div>
              </div>
            </div>

            <LearningRo currentTopic={`architecture-${currentTopic.id}`} />
          </section>
        )}

        {/* HERO BANNER */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-2xl md:p-9 relative">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/30 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#f97316] mb-3">
                <Building2 size={13} />
                <span>Designing Large-Scale Distributed Cloud Systems</span>
              </div>

              <h1 className="text-2xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
                Cloud Architecture & System Design
              </h1>

              <p className="mt-3 text-xs md:text-sm leading-relaxed text-stone-300 max-w-2xl">
                Where all building blocks unite. Transform ambiguous business requirements into resilient engineering architectures: Modular Monoliths vs Microservices, Circuit Breakers, Exponential Backoff with Jitter, Transactional Outbox pattern, Cell-Based isolation, and Multi-Region disaster recovery.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-4 text-center">
                <div className="font-mono text-2xl font-extrabold text-[#f97316]">MIT 6.033</div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mt-0.5">
                  Systems Theory
                </div>
              </div>

              <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-4 text-center">
                <div className="font-mono text-2xl font-extrabold text-amber-400">12 Topics</div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mt-0.5">
                  Architecture Track
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TOPIC SELECTION PILLS */}
        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {architectureTopics.map((topic, index) => {
            const Icon = typeof topic.icon === "function" ? topic.icon : (ICON_MAP[topic.icon] || Workflow);
            const isSelected = selectedTopic === index;

            return (
              <button
                key={topic.id}
                onClick={() => {
                  setSelectedTopic(index);
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                className={`flex shrink-0 items-center gap-2 rounded-2xl border px-3.5 py-2 text-xs font-bold transition shadow-xs ${
                  isSelected
                    ? "border-[#f97316] bg-[#f97316] text-white shadow-md shadow-orange-500/20"
                    : "border-[#e7e3da] bg-white text-stone-700 hover:border-orange-300 hover:bg-orange-50/50"
                }`}
              >
                <Icon size={14} className={isSelected ? "text-white" : "text-stone-500"} />
                <span>{topic.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* MAIN TOPIC CONTENT SECTION */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* LEFT 8 COLS: DEEP DIVE CONTENT */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* TOPIC HEADER CARD */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#f97316]">
                    <CurrentIcon size={22} />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-orange-600">
                      Topic {topicNumber} • {currentTopic.category}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-[#18181b]">
                      {currentTopic.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={previousTopic}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-stone-50 text-stone-600 hover:border-orange-300 hover:text-[#f97316] transition"
                    title="Previous Topic"
                  >
                    <ArrowLeft size={14} />
                  </button>
                  <span className="font-mono text-xs font-bold text-stone-400 px-1">
                    {selectedTopic + 1} / {architectureTopics.length}
                  </span>
                  <button
                    onClick={nextTopic}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-stone-50 text-stone-600 hover:border-orange-300 hover:text-[#f97316] transition"
                    title="Next Topic"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* SUMMARY BOX */}
              <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-4 mb-6 text-xs md:text-sm leading-relaxed text-stone-800 font-medium">
                <span className="font-bold text-orange-900 block mb-1">Architecture Summary:</span>
                {currentTopic.summary}
              </div>

              {/* CORE THEORY PARAGRAPHS */}
              <div className="space-y-4 text-xs md:text-sm leading-relaxed text-stone-700">
                {currentTopic.theory.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* ARCHITECTURE DIAGRAM / VISUALIZATION CONTAINER */}
              <div className="mt-8 rounded-2xl border border-stone-200 bg-stone-900 p-5 text-white shadow-inner">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Workflow size={15} className="text-[#f97316]" />
                    <span className="font-mono text-xs font-bold text-stone-300">
                      System Diagram: {currentTopic.shortTitle}
                    </span>
                  </div>
                  <span className="rounded-full bg-orange-500/20 border border-orange-500/40 px-2.5 py-0.5 font-mono text-[10px] text-orange-300">
                    Production Architecture
                  </span>
                </div>

                {/* DIAGRAM RENDERER BASED ON TOPIC */}
                {currentTopic.diagramType === "architecture-six-questions" && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="text-orange-400 font-bold mb-1 text-[11px]">The Six Foundational Architecture Drivers:</div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[10px]">
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-emerald-400 font-bold">1. Functional:</span><br/>What must it do?
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-amber-400 font-bold">2. Performance:</span><br/>p95 latency & throughput
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-red-400 font-bold">3. Reliability:</span><br/>Faults, RPO & RTO
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-blue-400 font-bold">4. Security:</span><br/>Zero-Trust & KMS
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-purple-400 font-bold">5. Scalability:</span><br/>10x traffic expansion
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-orange-400 font-bold">6. Economics:</span><br/>FinOps budget limits
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "three-tier-vs-modular" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                      <div className="rounded-xl border border-stone-700 bg-stone-800 p-3">
                        <div className="text-orange-400 font-bold mb-1">Classic 3-Tier Layering</div>
                        <div className="text-stone-300">Presentation: Web / REST / GraphQL</div>
                        <div className="text-stone-300">Application: Business Workflows</div>
                        <div className="text-stone-300">Data: PostgreSQL / Redis</div>
                        <div className="text-stone-400 text-[10px] mt-1">Clear operational separation per tier.</div>
                      </div>
                      <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-3">
                        <div className="text-emerald-400 font-bold mb-1">Modular Monolith</div>
                        <div className="text-stone-300">[Users] ↔ [Orders] ↔ [Payments]</div>
                        <div className="text-stone-300">Zero network RPC overhead (in-memory)</div>
                        <div className="text-stone-400 text-[10px] mt-1">Single atomic database transactions.</div>
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "cascading-failure-death-spiral" && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="rounded-xl bg-red-950/40 border border-red-500/40 p-3 text-red-200 text-[11px]">
                      <div className="font-bold text-red-300">The Cascading Failure Death Spiral:</div>
                      Downstream Service C stalls (5s latency) → Service B blocks waiting → Service A blocks waiting → All HTTP connection pools saturate → Health checks fail → Global platform crashes!
                    </div>
                    <div className="text-stone-400 text-[10px] text-center">
                      Mitigation: Strict client timeouts (200ms) + Circuit Breakers + Bulkhead isolated thread pools.
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "backoff-jitter-timeline" && (
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-red-500/40 flex justify-between items-center">
                      <div>
                        <span className="text-red-400 font-bold">Without Jitter (Thundering Herd)</span>
                        <div className="text-stone-400 text-[10px]">All 10,000 clients retry at exactly +100ms, +200ms, +400ms</div>
                      </div>
                      <span className="text-xs text-red-300 font-bold">System Overload!</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-emerald-500/40 flex justify-between items-center">
                      <div>
                        <span className="text-emerald-400 font-bold">With Full Jitter (Amazon Builders' Library)</span>
                        <div className="text-stone-400 text-[10px]">Retries scattered uniformly across random intervals (23ms, 89ms, 174ms)</div>
                      </div>
                      <span className="text-xs text-emerald-300 font-bold">Smooth Traffic</span>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "circuit-breaker-state-machine" && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                      <div className="rounded-lg bg-emerald-950/40 border border-emerald-500/40 p-2 text-emerald-200">
                        <span className="font-bold">1. CLOSED</span><br/>
                        Requests pass through.<br/>Monitor error rate.
                      </div>
                      <div className="rounded-lg bg-red-950/40 border border-red-500/40 p-2 text-red-200">
                        <span className="font-bold">2. OPEN</span><br/>
                        Fail rate {'>'} 50%.<br/>Fast-fail in 1ms locally!
                      </div>
                      <div className="rounded-lg bg-amber-950/40 border border-amber-500/40 p-2 text-amber-200">
                        <span className="font-bold">3. HALF-OPEN</span><br/>
                        Probe with 5% traffic.<br/>Reset or re-trip.
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "queue-load-leveling-buffer" && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="rounded-xl bg-black/60 p-3 border border-stone-800 text-[11px] text-center">
                      <div className="text-orange-400 font-bold mb-1">Queue Load Leveling (Shock Absorber):</div>
                      <div className="text-stone-300">
                        [Elastic Traffic Surge: 500,000 req/s] → [SQS / PubSub Buffer] → [Worker Pool Throttled: 25,000 req/s] → [Database Capacity: 25,000 writes/s]
                      </div>
                      <div className="text-[10px] text-emerald-400 font-bold mt-1">
                        Zero dropped orders. Queue depth swells temporarily during peak and drains smoothly.
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "transactional-outbox-flow" && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="rounded-xl bg-stone-800 p-3 border border-orange-500/40 text-[11px]">
                      <div className="text-orange-400 font-bold mb-1">Single Local ACID Database Transaction:</div>
                      <div className="text-stone-300">
                        BEGIN;<br/>
                        &nbsp;&nbsp;INSERT INTO orders (id, total) VALUES (904, ₹1500);<br/>
                        &nbsp;&nbsp;INSERT INTO outbox_events (event_type, payload) VALUES ('OrderCreated', '{`{"orderId":904}`}');<br/>
                        COMMIT;
                      </div>
                    </div>
                    <div className="text-stone-400 text-[10px] text-center">
                      Change Data Capture (Debezium) reads outbox table and streams to Kafka with at-least-once guarantee. Zero dual-write risk!
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "netflix-data-movement-architecture" && (
                  <div className="space-y-2 font-mono text-[10px]">
                    <div className="rounded-lg bg-stone-800 p-2 border border-stone-700 flex justify-between items-center">
                      <span className="text-orange-400 font-bold">1. Operational Tier:</span>
                      <span className="text-stone-300">Apache Cassandra (Low-latency Member & Billing state)</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2 border border-stone-700 flex justify-between items-center">
                      <span className="text-blue-400 font-bold">2. Data Movement Fleet:</span>
                      <span className="text-stone-300">Automated CDC into Apache Iceberg table format</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2 border border-stone-700 flex justify-between items-center">
                      <span className="text-emerald-400 font-bold">3. Analytical Tier:</span>
                      <span className="text-stone-300">Amazon S3 Lakehouse queried via Spark & Trino</span>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "stateless-multi-az-architecture" && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="rounded-xl bg-black/60 p-3 border border-stone-800 text-center text-[11px]">
                      <div className="text-amber-400 font-bold mb-1">Stateless Compute + Externalized State:</div>
                      <div className="text-stone-300">
                        ALB → [App VM 1 (AZ-A)] [App VM 2 (AZ-B)] [App VM 3 (AZ-C)]
                      </div>
                      <div className="text-stone-400 text-[10px] mt-1">
                        State externalized to: Redis Cluster (Sessions) + Multi-AZ PostgreSQL (Entities) + S3 (Files)
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "multi-region-active-active-conflict" && (
                  <div className="space-y-2 font-mono text-[10px]">
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-stone-700 flex justify-between items-center">
                      <div>
                        <span className="text-orange-400 font-bold">Active-Passive (Warm Standby)</span>
                        <div className="text-stone-400 text-[10px]">US-East primary, US-West standby. RPO: &lt;1 min, RTO: &lt;15 min</div>
                      </div>
                      <span className="text-xs text-stone-300">Recommended for 95% of apps</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-amber-500/40 flex justify-between items-center">
                      <div>
                        <span className="text-amber-400 font-bold">Active-Active (Dual Region)</span>
                        <div className="text-stone-400 text-[10px]">Both serve traffic. Requires CRDTs or Last-Writer-Wins conflict resolution</div>
                      </div>
                      <span className="text-xs text-amber-300 font-bold">RTO ≈ 0</span>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "canary-deployment-pipeline" && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="rounded-xl bg-black/60 p-3 border border-emerald-500/40 text-center text-[11px]">
                      <div className="text-emerald-400 font-bold mb-1">Automated Canary Deployment Stages:</div>
                      <div className="text-stone-300">
                        [1% Traffic] → Metric Gate (5xx &lt; 0.1%) → [10% Traffic] → [50% Traffic] → [100% Traffic]
                      </div>
                      <div className="text-red-400 text-[10px] mt-1">
                        If 5xx errors breach threshold at ANY point: Automated instantaneous rollback in &lt;30 seconds!
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "globalnow-platform-blueprint" && (
                  <div className="space-y-2 font-mono text-[10px]">
                    <div className="rounded-lg bg-stone-800 p-2 border border-orange-500/40 flex justify-between items-center">
                      <span className="text-orange-400 font-bold">Edge & Routing:</span>
                      <span className="text-stone-300">Anycast DNS + Cloudflare CDN + Envoy API Gateways</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2 border border-blue-500/40 flex justify-between items-center">
                      <span className="text-blue-400 font-bold">Core Domains:</span>
                      <span className="text-stone-300">Identity, Orders (Bulkhead), Payments (Idempotent), Location (Streaming)</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2 border border-emerald-500/40 flex justify-between items-center">
                      <span className="text-emerald-400 font-bold">Data Tier:</span>
                      <span className="text-stone-300">Aurora PostgreSQL (Orders) + DynamoDB (Sessions) + S3 (Media)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* ARCHITECTURAL DECISION CALLOUT */}
              <div className="mt-6 rounded-2xl border border-stone-300 bg-stone-100 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <Lightbulb size={16} className="text-orange-600" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-800">
                    Principal Architect Invariant:
                  </span>
                </div>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {currentTopic.architectDecision}
                </p>
              </div>

              {/* INTERVIEW QUESTIONS ACCORDION */}
              <div className="mt-6 border-t border-[#e7e3da] pt-6">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
                  <HelpCircle size={14} className="text-orange-600" />
                  <span>Senior Cloud Systems Architecture Challenge:</span>
                </h3>

                {currentTopic.interviewQuestions.map((qa, idx) => (
                  <div key={idx} className="rounded-2xl border border-orange-200 bg-orange-50/40 p-4">
                    <div className="font-bold text-xs md:text-sm text-[#18181b] mb-2 flex items-start gap-2">
                      <span className="text-orange-600 font-mono font-black">Q:</span>
                      <span>{qa.q}</span>
                    </div>
                    <div className="text-xs md:text-sm leading-relaxed text-stone-700 pl-6 border-l-2 border-orange-400">
                      <span className="font-bold text-stone-900 block mb-1">Architectural Answer:</span>
                      {qa.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* INTERACTIVE ARCHITECTURE TRADE-OFF ENGINE */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Sliders size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#18181b]">
                    Interactive Architecture Trade-Off & ADR Engine
                  </h3>
                  <p className="text-xs text-stone-500">
                    Select your architectural style, resilience tier, and peak traffic to calculate blast radius, latency overhead, and generate an ADR.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3 mb-6">
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    1. Architecture Style:
                  </label>
                  <select
                    value={archetypeStyle}
                    onChange={(e) => setArchetypeStyle(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="modular-monolith">Modular Monolith (In-Memory)</option>
                    <option value="three-tier">Classic 3-Tier Layered</option>
                    <option value="microservices">Microservices (DOMA Domains)</option>
                    <option value="cell-based">Cell-Based Bulkhead Architecture</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    2. Resilience Tier:
                  </label>
                  <select
                    value={resilienceTier}
                    onChange={(e) => setResilienceTier(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="single-az">Single-AZ (Cost Minimalist)</option>
                    <option value="multi-az">Multi-AZ (Standard High Availability)</option>
                    <option value="multi-region-active-passive">Multi-Region (Warm Standby DR)</option>
                    <option value="multi-region-active-active">Multi-Region (Active-Active)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    3. Target Peak Traffic:
                  </label>
                  <select
                    value={peakTrafficQps}
                    onChange={(e) => setPeakTrafficQps(Number(e.target.value))}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="5000">5,000 QPS (Emerging Product)</option>
                    <option value="50000">50,000 QPS (Enterprise Scale)</option>
                    <option value="250000">250,000 QPS (Hyper-Growth)</option>
                    <option value="1000000">1,000,000 QPS (Global Peak)</option>
                  </select>
                </div>
              </div>

              {/* TRADE-OFF ENGINE OUTPUT CARD */}
              <div className="rounded-2xl border border-orange-300 bg-gradient-to-br from-orange-50/80 via-white to-amber-50/80 p-5 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-orange-600" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-800">
                      System Trade-Off Profile:
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-stone-600">
                    Est. Cost: {architectureTradeOffs.monthlyCostEstimate}
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-3 mb-4 text-xs font-mono">
                  <div className="rounded-xl bg-white/90 p-3 border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">FAILURE BLAST RADIUS:</span>
                    <span className={`text-lg font-black ${architectureTradeOffs.blastRadiusPct <= 20 ? "text-emerald-700" : "text-amber-700"}`}>
                      {architectureTradeOffs.blastRadiusPct}% of users
                    </span>
                    <span className="text-[9px] text-stone-400 block mt-0.5">Impact if 1 core service dies</span>
                  </div>

                  <div className="rounded-xl bg-white/90 p-3 border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">RPC LATENCY TAX:</span>
                    <span className="text-lg font-black text-stone-800">
                      +{architectureTradeOffs.rpcOverheadMs} ms
                    </span>
                    <span className="text-[9px] text-stone-400 block mt-0.5">Serialization & network hops</span>
                  </div>

                  <div className="rounded-xl bg-white/90 p-3 border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">OPERATIONAL COMPLEXITY:</span>
                    <span className={`text-lg font-black ${architectureTradeOffs.complexityScore > 70 ? "text-red-600" : "text-emerald-700"}`}>
                      {architectureTradeOffs.complexityScore} / 100
                    </span>
                    <span className="text-[9px] text-stone-400 block mt-0.5">DevOps & tracing overhead</span>
                  </div>
                </div>

                <div className="rounded-xl bg-white/95 p-3.5 border border-orange-200 text-xs text-stone-800 font-mono">
                  <span className="font-bold text-orange-900 block mb-1">Architectural Decision Record (ADR):</span>
                  {architectureTradeOffs.adrSummary}
                </div>
              </div>
            </div>

            {/* LIVE CIRCUIT BREAKER SIMULATOR */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center justify-between border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Interactive Circuit Breaker Simulator (Resilience Lab)
                    </h3>
                    <p className="text-xs text-stone-500">
                      Simulate a failing downstream dependency. Watch the Circuit Breaker trip and save calling thread pools.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setCircuitBreakerEnabled((prev) => !prev)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-mono font-bold transition ${
                    circuitBreakerEnabled
                      ? "bg-emerald-600 text-white"
                      : "bg-stone-200 text-stone-700"
                  }`}
                >
                  {circuitBreakerEnabled ? "Circuit Breaker: ON" : "Circuit Breaker: OFF"}
                </button>
              </div>

              {/* SIMULATOR SLIDERS */}
              <div className="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">Downstream Dependency Latency:</span>
                    <span className={`font-bold ${dependencyLatencyMs > 250 ? "text-red-600" : "text-emerald-600"}`}>
                      {dependencyLatencyMs} ms
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="20"
                    value={dependencyLatencyMs}
                    onChange={(e) => setDependencyLatencyMs(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-0.5">
                    <span>10ms (Healthy)</span>
                    <span>250ms (Slow)</span>
                    <span>1,000ms (Stalled)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">Downstream Error Rate:</span>
                    <span className={`font-bold ${dependencyFailureRate > 10 ? "text-red-600" : "text-emerald-600"}`}>
                      {dependencyFailureRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="2"
                    value={dependencyFailureRate}
                    onChange={(e) => setDependencyFailureRate(Number(e.target.value))}
                    className="w-full accent-red-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-0.5">
                    <span>0% (Clean)</span>
                    <span>15% (Threshold)</span>
                    <span>50% (Catastrophic)</span>
                  </div>
                </div>
              </div>

              {/* SIMULATOR STATUS READOUT */}
              <div className="grid gap-4 md:grid-cols-3">
                <div className={`rounded-2xl border p-4 ${circuitBreakerStatus.stateColor}`}>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider block mb-1 opacity-80">
                    Circuit State:
                  </span>
                  <div className="text-sm font-bold font-mono">
                    {circuitBreakerStatus.state}
                  </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider block mb-1">
                    Caller Thread Pool Load:
                  </span>
                  <div className={`text-2xl font-black font-mono ${circuitBreakerStatus.upstreamThreadSaturation > 70 ? "text-red-600" : "text-emerald-700"}`}>
                    {circuitBreakerStatus.upstreamThreadSaturation}%
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">
                    {circuitBreakerStatus.upstreamThreadSaturation > 70 ? "Thread starvation risk!" : "Threads protected"}
                  </span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider block mb-1">
                    Client Response Time:
                  </span>
                  <div className="text-2xl font-black text-stone-800 font-mono">
                    {circuitBreakerStatus.effectiveResponseTimeMs} ms
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">
                    {circuitBreakerStatus.effectiveResponseTimeMs <= 5 ? "Fast failback in 2ms" : "Synchronous wait"}
                  </span>
                </div>
              </div>
            </div>

            {/* ARCHITECTURE GAMEDAY INCIDENT SIMULATOR */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-white shadow-md">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Architecture GameDay: Production Incident Defense
                    </h3>
                    <p className="text-xs text-stone-500">
                      Triage 7 critical architectural disasters from Section 113 of the syllabus. Test your principal architect instincts.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-1 text-center font-mono text-xs">
                    <span className="text-stone-400 block text-[9px]">TOTAL SCORE</span>
                    <span className="font-bold text-[#f97316]">{gameScore} pts</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={prevGameScenario}
                      disabled={gameScenarioIndex === 0}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-white text-stone-600 hover:text-stone-900 disabled:opacity-40"
                    >
                      <ArrowLeft size={14} />
                    </button>
                    <span className="font-mono text-xs font-bold text-stone-500 px-2">
                      {gameScenarioIndex + 1} / {architectureGameScenarios.length}
                    </span>
                    <button
                      onClick={nextGameScenario}
                      disabled={gameScenarioIndex === architectureGameScenarios.length - 1}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-white text-stone-600 hover:text-stone-900 disabled:opacity-40"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* CURRENT SCENARIO CARD */}
              {(() => {
                const scenario = architectureGameScenarios[gameScenarioIndex];
                const answered = gameHistory[scenario.id];

                return (
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-red-200 bg-red-50/50 p-4">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-800 uppercase tracking-wider mb-1">
                        <AlertTriangle size={15} />
                        <span>{scenario.title}</span>
                      </div>
                      <p className="text-xs md:text-sm text-stone-800 leading-relaxed font-medium">
                        {scenario.context}
                      </p>
                    </div>

                    <div className="font-bold text-sm text-[#18181b]">
                      {scenario.question}
                    </div>

                    {/* OPTIONS */}
                    <div className="space-y-3">
                      {scenario.options.map((option) => {
                        const isSelected = answered === option.id;
                        let btnStyle = "border-stone-200 bg-white hover:border-orange-300 hover:bg-orange-50/30 text-stone-800";

                        if (answered) {
                          if (option.isCorrect) {
                            btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-400";
                          } else if (isSelected && !option.isCorrect) {
                            btnStyle = "border-red-500 bg-red-50 text-red-950 font-bold ring-2 ring-red-400";
                          } else {
                            btnStyle = "border-stone-200 bg-stone-50 text-stone-400 opacity-60";
                          }
                        }

                        return (
                          <button
                            key={option.id}
                            onClick={() => handleGameAnswer(scenario.id, option.id)}
                            className={`w-full text-left rounded-2xl border p-4 text-xs md:text-sm transition-all ${btnStyle}`}
                          >
                            <div className="flex items-start gap-3">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">
                                {option.id}
                              </span>
                              <div className="flex-1">
                                <div>{option.text}</div>
                                {answered && (
                                  <div className="mt-2 text-xs font-medium border-t border-stone-200/60 pt-2">
                                    <span className={option.isCorrect ? "text-emerald-700 font-bold" : "text-red-700 font-bold"}>
                                      {option.verdict} —{" "}
                                    </span>
                                    <span className="text-stone-600">{option.explanation}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* RIGHT 4 COLS: SYLLABUS OUTLINE, KEY INVARIANTS, ROADMAP */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* SYLLABUS DIRECTORY CARD */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 border-b border-[#e7e3da] pb-3 mb-4">
                <BookOpen size={16} className="text-orange-600" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-800">
                  Module 6 Topic Index
                </h3>
              </div>

              <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
                {architectureTopics.map((topic, index) => {
                  const isSelected = selectedTopic === index;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => {
                        setSelectedTopic(index);
                        window.scrollTo({ top: 300, behavior: "smooth" });
                      }}
                      className={`w-full text-left rounded-xl px-3 py-2 text-xs font-medium transition flex items-center justify-between ${
                        isSelected
                          ? "bg-orange-500 text-white font-bold shadow-xs"
                          : "text-stone-600 hover:bg-orange-50 hover:text-stone-900"
                      }`}
                    >
                      <span className="truncate">{topic.shortTitle}</span>
                      <span className="font-mono text-[10px] opacity-70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SYSTEMS ARCHITECTURE INVARIANTS CHEAT SHEET */}
            <div className="rounded-3xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-xl">
              <div className="flex items-center gap-2 border-b border-stone-800 pb-3 mb-4">
                <ShieldCheck size={18} className="text-[#f97316]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-orange-400">
                  Core Architecture Invariants
                </h3>
              </div>

              <div className="space-y-3 font-mono text-[11px] text-stone-300">
                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">Architecture ≠ Diagram</span>
                  Architecture is the management of complexity, failure propagation, scale, and trade-offs.
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">Jitter Prevents Herd Storms</span>
                  Never retry on fixed intervals. Always add pseudo-random full jitter to desynchronize clients.
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">Transactional Outbox Invariant</span>
                  Never execute network calls inside database transactions. Write events to an outbox table atomically.
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">Static Stability</span>
                  Ensure the data plane continues serving existing users even if the control plane goes dark.
                </div>
              </div>
            </div>

            {/* CURRICULUM ROADMAP BADGE */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm text-center">
              <span className="inline-block rounded-full bg-orange-100 text-orange-700 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                Cloud Architecture Track
              </span>
              <h4 className="text-sm font-bold text-[#18181b]">
                Next in the Program:
              </h4>
              <p className="text-xs text-stone-500 mt-1 mb-4">
                Module 7: Deep AWS Engineering (IAM, VPC, EC2, S3, Aurora, DynamoDB, Lambda, ECS/EKS, SQS/SNS, CloudWatch & KMS).
              </p>
              <button
                onClick={() => navigate("/learning/cloud/aws")}
                className="w-full rounded-xl bg-orange-500 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-orange-600 transition"
              >
                Launch Module 7: AWS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
