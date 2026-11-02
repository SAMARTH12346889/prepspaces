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
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
  Sliders,
  AlertTriangle,
  Boxes,
  Copy,
  Activity,
  Award,
  HardDrive,
  BarChart3,
  Clock,
  Gauge,
  Lock,
  Key,
  Radio,
  Split,
  Eye,
  GitBranch,
  Cloud,
  Check,
  DollarSign,
  TrendingUp,
  Share2,
  FileCode,
  Compass,
  FileCheck,
  Fingerprint,
  UserCheck,
  KeyRound,
  FileLock2,
  Binary,
  Calculator,
  PieChart,
  FileText,
  Percent,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";
import { SHOW_NOVA_AI } from "../config/features";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 12: CLOUD ECONOMICS & FINOPS                        */
/* Week 22: Designing for Value, Not Merely Minimizing the Bill               */
/* FinOps Framework (Inform -> Optimize -> Operate), Unit Economics,          */
/* Commitments (Savings Plans, CUDs), Spot Economics, Storage Lifecycle,      */
/* Network Egress Traps, FOCUS Open Standard, 5 Production Failure Games       */
/* -------------------------------------------------------------------------- */

export default function CloudEconomics() {
  const { data: moduleData, loading, error, reload } = useModuleContent("cloud", "economics");
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Tool 1: FinOps Unit Economics & Hybrid Fleet Portfolio Simulator State
  const [workloadShape, setWorkloadShape] = useState("steady"); // "steady", "bursty", "seasonal", "unpredictable"
  const [baselineVcpu, setBaselineVcpu] = useState(500); // 500 vCPUs
  const [peakVcpu, setPeakVcpu] = useState(1500); // 1500 vCPUs
  const [committedPercent, setCommittedPercent] = useState(60); // 60% of baseline committed
  const [spotPercent, setSpotPercent] = useState(20); // 20% on Spot
  const [monthlyOrders, setMonthlyOrders] = useState(2500000); // 2.5 Million Orders

  // Tool 2: Storage Lifecycle & Retrieval TCO Calculator State
  const [datasetSizeTb, setDatasetSizeTb] = useState(250); // 250 TB
  const [monthlyIngestionGb, setMonthlyIngestionGb] = useState(15000); // 15 TB/month
  const [retrievalPercent, setRetrievalPercent] = useState(5); // 5% accessed per month
  const [storageStrategy, setStorageStrategy] = useState("lifecycle-automated"); // "hot-only", "lifecycle-automated"

  // Tool 3: Cloud Economics GameDay Simulator State (5 Failure Games from Section 101)
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  // Tool 4: Mastery Test State
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Tool 1: Hybrid Fleet Portfolio & Unit Economics Calculations
  const fleetCalculations = useMemo(() => {
    // Pricing baseline benchmarks:
    // On-Demand vCPU: ~$0.045 / hour
    // 3-Year Commitment vCPU (Savings Plan / CUD): ~$0.021 / hour (approx 53% discount)
    // Spot vCPU: ~$0.009 / hour (approx 80% discount)
    const onDemandRate = 0.045;
    const committedRate = 0.021;
    const spotRate = 0.009;

    const onDemandPercent = Math.max(0, 100 - committedPercent - spotPercent);

    // Active average vCPU demand based on workload shape
    let averageActiveVcpu = baselineVcpu;
    if (workloadShape === "bursty") {
      averageActiveVcpu = baselineVcpu + (peakVcpu - baselineVcpu) * 0.35;
    } else if (workloadShape === "seasonal") {
      averageActiveVcpu = baselineVcpu + (peakVcpu - baselineVcpu) * 0.6;
    } else if (workloadShape === "unpredictable") {
      averageActiveVcpu = baselineVcpu + (peakVcpu - baselineVcpu) * 0.45;
    } else {
      averageActiveVcpu = baselineVcpu + (peakVcpu - baselineVcpu) * 0.15;
    }

    // Capacity provisioned by tier
    const committedVcpuCount = (baselineVcpu * committedPercent) / 100;
    const spotVcpuCount = (averageActiveVcpu * spotPercent) / 100;
    const onDemandVcpuCount = Math.max(0, averageActiveVcpu - committedVcpuCount - spotVcpuCount);

    // Costs
    const hourlyCommittedCost = committedVcpuCount * committedRate;
    const hourlySpotCost = spotVcpuCount * spotRate;
    const hourlyOnDemandCost = onDemandVcpuCount * onDemandRate;
    const totalHourlyCost = hourlyCommittedCost + hourlySpotCost + hourlyOnDemandCost;
    const totalMonthlyCost = totalHourlyCost * 730;

    // Unit Economics: Cost per business order
    const costPerOrder = monthlyOrders > 0 ? totalMonthlyCost / monthlyOrders : 0;

    // Commitment Utilization Rate
    const commitmentUtilization = Math.min(100, Math.round((averageActiveVcpu / (committedVcpuCount || 1)) * 100));

    // Underutilization Risk / Waste Penalty
    const unutilizedCommitmentVcpu = Math.max(0, committedVcpuCount - averageActiveVcpu);
    const monthlyWastedCommitment = unutilizedCommitmentVcpu * committedRate * 730;

    // Resilience rating
    let resilienceRating = "High";
    if (spotPercent > 40) resilienceRating = "At Risk (Excessive Spot Preemption Exposure)";
    else if (spotPercent > 25) resilienceRating = "Moderate (Requires Checkpointing)";

    return {
      onDemandPercent,
      averageActiveVcpu: Math.round(averageActiveVcpu),
      totalMonthlyCost: Math.round(totalMonthlyCost),
      costPerOrder: costPerOrder.toFixed(4),
      commitmentUtilization,
      monthlyWastedCommitment: Math.round(monthlyWastedCommitment),
      resilienceRating,
    };
  }, [workloadShape, baselineVcpu, peakVcpu, committedPercent, spotPercent, monthlyOrders]);

  // Tool 2: Storage Lifecycle & Retrieval TCO Calculations
  const storageCalculations = useMemo(() => {
    // Benchmark Rates:
    // Hot / Standard: $0.023 / GB / month ($23 / TB) | Retrieval: $0.00
    // Cool / Nearline: $0.0125 / GB / month ($12.50 / TB) | Retrieval: $0.01 / GB
    // Cold / Archive: $0.004 / GB / month ($4.00 / TB) | Retrieval: $0.02 / GB + request fee
    const hotRatePerTb = 23.0;

    let monthlyAtRestCost = 0;
    let monthlyRetrievalCost = 0;
    let strategyNote = "";
    let retrievalWarning = false;

    if (storageStrategy === "hot-only") {
      monthlyAtRestCost = datasetSizeTb * hotRatePerTb;
      monthlyRetrievalCost = 0; // Zero retrieval fees on standard tier
      strategyNote = "Hot / Standard Tier: Highest storage cost, but zero retrieval penalties. Ideal for high-frequency access datasets.";
    } else {
      // Automated Lifecycle: 20% in Hot ($23/TB), 30% in Cool ($12.50/TB), 50% in Archive ($4/TB)
      const hotCost = datasetSizeTb * 0.2 * 23.0;
      const coolCost = datasetSizeTb * 0.3 * 12.5;
      const archiveCost = datasetSizeTb * 0.5 * 4.0;
      monthlyAtRestCost = hotCost + coolCost + archiveCost;

      // Retrieval fees if accessing data stored in cool/archive
      const dataRetrievedTb = (datasetSizeTb * (retrievalPercent / 100));
      // Assume 70% of retrieved data is from cool/archive
      const coolArchiveRetrievedGb = dataRetrievedTb * 0.7 * 1000;
      monthlyRetrievalCost = coolArchiveRetrievedGb * 0.015; // Average $0.015/GB retrieval fee

      if (retrievalPercent > 15) {
        retrievalWarning = true;
        strategyNote = "WARNING: High retrieval rate (>15%) on archived data! Retrieval fees and minimum storage durations exceed cold-tier storage savings.";
      } else {
        strategyNote = "Optimized Lifecycle: Tiered across Hot, Cool, and Archive based on age. Massive at-rest savings with predictable low retrieval access.";
      }
    }

    const totalMonthlyStorageCost = monthlyAtRestCost + monthlyRetrievalCost;
    const annualStorageCost = totalMonthlyStorageCost * 12;
    const hotOnlyAnnualCost = datasetSizeTb * hotRatePerTb * 12;
    const netAnnualSavings = Math.max(0, hotOnlyAnnualCost - annualStorageCost);
    const savingsPercent = hotOnlyAnnualCost > 0 ? Math.round((netAnnualSavings / hotOnlyAnnualCost) * 100) : 0;

    return {
      monthlyAtRestCost: Math.round(monthlyAtRestCost),
      monthlyRetrievalCost: Math.round(monthlyRetrievalCost),
      totalMonthlyStorageCost: Math.round(totalMonthlyStorageCost),
      annualStorageCost: Math.round(annualStorageCost),
      netAnnualSavings: Math.round(netAnnualSavings),
      savingsPercent,
      strategyNote,
      retrievalWarning,
    };
  }, [datasetSizeTb, monthlyIngestionGb, retrievalPercent, storageStrategy]);

  // Tool 3: Cloud Economics GameDay Scenarios (5 Failure Games from Section 101)
  const economicsGameScenarios = moduleData?.scenarios || [];

  // Tool 4: Week 22 Mastery Test Questions & Answers (Section 102)
  const masteryQuestions = moduleData?.quiz || [];

  // Syllabus Topics (12 Topics covering Week 22)
  const topics = moduleData?.topics || [];

  const currentTopic = topics[selectedTopic] || topics[0] || {};

    if (loading) {
    return <ModuleLoadingSkeleton track="cloud" currentModuleId="economics" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="cloud" currentModuleId="economics" error={error} onRetry={reload} />;
  }
return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans selection:bg-orange-500/20 selection:text-orange-900">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-orange-300/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* TOP HEADER */}
        <ModuleNav
          track="cloud"
          currentModuleId="economics"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova FinOps AI"
        />

        {/* HERO HEADER */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl">
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-400 mb-4">
              <DollarSign size={13} />
              <span>Cloud Economics & FinOps</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white">
              Cloud Economics & FinOps
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-stone-300">
              Cloud architecture becomes a business system. Stop asking <span className="text-stone-400 line-through">"How do I minimize the monthly bill?"</span> and start asking:{" "}
              <span className="text-orange-400 font-semibold">
                "What does each unit of capability cost, and is the business getting enough value from it?"
              </span>{" "}
              Grounded in the FinOps Foundation Framework, Hybrid Compute Portfolios, Commitment Management, Spot Economics, Storage Lifecycles, and Unit Economics.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-400">
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> FinOps Inform-Optimize-Operate
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Savings Plans & CUDs
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Unit Economics ($/Order)
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> FOCUS Open Billing Schema
              </span>
            </div>
          </div>
        </div>

        {/* EMBEDDED AI TUTOR */}
        {SHOW_NOVA_AI && showAiTutor && (
          <div className="mb-10 overflow-hidden rounded-3xl border border-orange-300 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#e7e3da]">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#18181b]">Nova Cloud Economics & FinOps Architect</h3>
                  <p className="text-xs text-stone-500">Trained on FinOps Foundation Framework, FOCUS Specification & Cloud Pricing APIs</p>
                </div>
              </div>
              <button
                onClick={() => setShowAiTutor(false)}
                className="text-xs font-mono text-stone-400 hover:text-stone-700"
              >
                ✕ Close
              </button>
            </div>
            <div className="mt-4">
              <LearningRo module="economics" />
            </div>
          </div>
        )}

        {/* MAIN LAYOUT: SYLLABUS TOPICS (LEFT) + DEEP CONTENT (RIGHT) */}
        <div className="grid gap-8 lg:grid-cols-12 mb-16">
          {/* TOPIC SELECTOR (COL-4) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-xs">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-4 px-2">
                FinOps Syllabus • 12 Topics
              </h3>
              <div className="space-y-1.5">
                {topics.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTopic(idx)}
                    className={`w-full text-left rounded-2xl px-4 py-3 text-xs transition flex flex-col gap-1 ${
                      selectedTopic === idx
                        ? "bg-[#18181b] text-white font-bold shadow-md shadow-black/10"
                        : "text-stone-700 hover:bg-[#f2efe9] font-medium"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-[10px] uppercase tracking-wider ${selectedTopic === idx ? "text-orange-400" : "text-stone-400"}`}>
                        Topic {t.id} • {t.week}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${selectedTopic === idx ? "bg-stone-800 text-orange-300" : "bg-stone-100 text-stone-600"}`}>
                        {t.badge}
                      </span>
                    </div>
                    <span className="font-bold leading-snug">{t.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CURRICULUM ROADMAP BADGE */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs text-center">
              <span className="inline-block rounded-full bg-orange-100 text-orange-700 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                Cloud Architecture Track
              </span>
              <h4 className="text-sm font-bold text-[#18181b]">Curriculum Milestone</h4>
              <p className="text-xs text-stone-500 mt-1 mb-4">
                Module 12 connects technical design to business unit economics, completing the architectural triad of scalability, security, and profitability.
              </p>
              <button
                onClick={() => navigate("/learning")}
                className="w-full rounded-xl bg-orange-500 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-orange-600 transition"
              >
                Curriculum Overview
              </button>
            </div>
          </div>

          {/* MAIN TOPIC CONTENT (COL-8) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
              {/* TOPIC HEADER */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#e7e3da]">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    {currentTopic.week} • {currentTopic.badge}
                  </span>
                  <h2 className="text-2xl font-black text-[#18181b] mt-1">{currentTopic.title}</h2>
                  <p className="text-xs font-medium text-stone-500 mt-1">{currentTopic.focus}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    disabled={selectedTopic === 0}
                    onClick={() => setSelectedTopic((prev) => Math.max(0, prev - 1))}
                    className="p-2 rounded-xl border border-[#e7e3da] text-stone-600 hover:bg-[#f6f4ee] disabled:opacity-30 disabled:hover:bg-transparent"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <span className="font-mono text-xs font-bold text-stone-400">
                    {selectedTopic + 1} / {topics.length}
                  </span>
                  <button
                    disabled={selectedTopic === topics.length - 1}
                    onClick={() => setSelectedTopic((prev) => Math.min(topics.length - 1, prev + 1))}
                    className="p-2 rounded-xl border border-[#e7e3da] text-stone-600 hover:bg-[#f6f4ee] disabled:opacity-30 disabled:hover:bg-transparent"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* THEORY DESCRIPTION */}
              <div className="mt-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Theoretical Foundations & Financial Engineering Rationale
                </h4>
                <p className="text-sm leading-relaxed text-stone-700 bg-stone-50/70 p-5 rounded-2xl border border-stone-200/60">
                  {currentTopic.theory}
                </p>
              </div>

              {/* ARCHITECTURE DIAGRAM */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                    Financial Topologies & Optimization Systems
                  </h4>
                  <span className="font-mono text-[10px] text-stone-400">ASCII Economics Blueprint</span>
                </div>
                <pre className="overflow-x-auto rounded-2xl bg-[#18181b] p-5 font-mono text-xs leading-relaxed text-stone-200 shadow-inner">
                  {currentTopic.diagram}
                </pre>
              </div>

              {/* KEY TAKEAWAYS */}
              <div className="mt-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-3">
                  Production Invariants & Core FinOps Takeaways
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {currentTopic.keyTakeaways.map((takeaway, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-2xl border border-[#e7e3da] bg-[#faf8f5] p-3.5 text-xs text-stone-700 font-medium leading-snug"
                    >
                      <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CODE / CONFIGURATION EXAMPLE */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
                    Production Implementation Blueprint & FinOps Telemetry
                  </h4>
                  <button
                    onClick={() => copyCode(currentTopic.codeExample, currentTopic.id)}
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-orange-600 hover:text-orange-700"
                  >
                    <Copy size={13} />
                    <span>{copiedCodeId === currentTopic.id ? "Copied!" : "Copy Snippet"}</span>
                  </button>
                </div>
                <pre className="overflow-x-auto rounded-2xl bg-[#1c1c1f] p-4 font-mono text-xs text-orange-300/90 shadow-inner border border-stone-800">
                  {currentTopic.codeExample}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* INTERACTIVE LAB 1: FINOPS UNIT ECONOMICS & HYBRID FLEET PORTFOLIO SIMULATOR */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-orange-100 px-2.5 py-1 font-mono text-xs font-bold text-orange-700 uppercase">
              Interactive Lab 1
            </span>
            <span className="font-mono text-xs text-stone-400">Hybrid Fleet & Unit Economics Simulator</span>
          </div>
          <h3 className="text-2xl font-black text-[#18181b]">
            FinOps Unit Economics & Hybrid Fleet Portfolio Simulator
          </h3>
          <p className="mt-2 text-sm text-stone-600 max-w-3xl">
            Model your compute purchasing strategy across Savings Plans (Commitments), Elastic On-Demand, and Spot Fleets. Analyze your real-world blended cost per order, commitment utilization, and financial waste risk.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* CONTROLS (COL-5) */}
            <div className="lg:col-span-5 space-y-5 bg-[#faf8f5] p-6 rounded-2xl border border-[#e7e3da]">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                  1. Workload Traffic Profile
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "steady", label: "Steady 24x7" },
                    { id: "bursty", label: "Bursty Traffic" },
                    { id: "seasonal", label: "Seasonal Peaks" },
                    { id: "unpredictable", label: "Unpredictable" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setWorkloadShape(item.id)}
                      className={`rounded-xl py-2 text-xs font-bold border transition text-center ${
                        workloadShape === item.id
                          ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                          : "bg-white text-stone-700 border-stone-200 hover:border-orange-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-1.5">
                  <span>BASELINE VCPU:</span>
                  <span className="text-orange-600">{baselineVcpu} vCPUs</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={2000}
                  step={50}
                  value={baselineVcpu}
                  onChange={(e) => setBaselineVcpu(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-1.5">
                  <span>PEAK TRAFFIC VCPU:</span>
                  <span className="text-orange-600">{peakVcpu} vCPUs</span>
                </div>
                <input
                  type="range"
                  min={baselineVcpu}
                  max={5000}
                  step={100}
                  value={peakVcpu}
                  onChange={(e) => setPeakVcpu(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-1.5">
                  <span>SAVINGS PLAN COMMITMENT:</span>
                  <span className="text-emerald-700">{committedPercent}% of Baseline</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={committedPercent}
                  onChange={(e) => setCommittedPercent(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <span className="text-[10px] text-stone-400 font-mono">53% Discount rate ($0.021/hr vs $0.045/hr)</span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-1.5">
                  <span>SPOT FLEET ALLOCATION:</span>
                  <span className="text-amber-700">{spotPercent}% of Workload</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={50}
                  step={5}
                  value={spotPercent}
                  onChange={(e) => setSpotPercent(Number(e.target.value))}
                  className="w-full accent-amber-600"
                />
                <span className="text-[10px] text-stone-400 font-mono">80% Discount rate ($0.009/hr) with preemption risk</span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-1.5">
                  <span>MONTHLY BUSINESS VOLUME:</span>
                  <span className="text-orange-600">{(monthlyOrders / 1000000).toFixed(1)}M Orders</span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={10000000}
                  step={250000}
                  value={monthlyOrders}
                  onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
              </div>
            </div>

            {/* RESULTS & UNIT METRICS (COL-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Unit Cost Per Order</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-orange-400">
                      ${fleetCalculations.costPerOrder}
                    </span>
                    <span className="text-xs text-stone-400">/ order</span>
                  </div>
                  <span className="font-mono text-[11px] text-stone-400 block mt-1">
                    Primary Business Unit Metric
                  </span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Total Monthly Spend</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">
                      ${fleetCalculations.totalMonthlyCost.toLocaleString()}
                    </span>
                    <span className="text-xs text-stone-400">/ mo</span>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-400 block mt-1">
                    Avg Active: ~{fleetCalculations.averageActiveVcpu} vCPUs
                  </span>
                </div>
              </div>

              {/* FLEET ALLOCATION VISUAL BAR */}
              <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f5] p-5 space-y-3">
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700">
                  <span>HYBRID FLEET PORTFOLIO MIX:</span>
                  <span className="text-stone-500">
                    Commitment {committedPercent}% • Spot {spotPercent}% • On-Demand {fleetCalculations.onDemandPercent}%
                  </span>
                </div>
                <div className="h-4 w-full rounded-full overflow-hidden flex bg-stone-200">
                  <div style={{ width: `${committedPercent}%` }} className="bg-emerald-600 h-full" title="Savings Plans" />
                  <div style={{ width: `${spotPercent}%` }} className="bg-amber-500 h-full" title="Spot Instances" />
                  <div style={{ width: `${fleetCalculations.onDemandPercent}%` }} className="bg-stone-700 h-full" title="On-Demand Elastic" />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-stone-500 pt-1">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-600" /> Committed (53% off)</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> Spot (80% off)</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-stone-700" /> On-Demand (Elastic)</span>
                </div>
              </div>

              {/* RISK & EFFICIENCY AUDIT */}
              <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f5] p-5 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="font-mono text-xs font-bold text-stone-600 uppercase">Commitment Utilization</span>
                  <span className={`font-mono text-xs font-bold ${
                    fleetCalculations.commitmentUtilization >= 95
                      ? "text-emerald-700"
                      : fleetCalculations.commitmentUtilization >= 80
                      ? "text-amber-700"
                      : "text-rose-700"
                  }`}>
                    {fleetCalculations.commitmentUtilization}%
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="font-mono text-xs font-bold text-stone-600 uppercase">Wasted / Idle Commitment</span>
                  <span className="font-mono text-xs font-bold text-stone-800">
                    ${fleetCalculations.monthlyWastedCommitment.toLocaleString()} / mo
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-stone-600 uppercase">Fleet Resilience Rating</span>
                  <span className="font-mono text-xs font-bold text-orange-600">{fleetCalculations.resilienceRating}</span>
                </div>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5">
                <h4 className="font-mono text-xs font-bold text-orange-900 uppercase flex items-center gap-1.5 mb-1">
                  <Lightbulb size={16} className="text-orange-600" />
                  <span>FinOps Golden Rule for Commitments</span>
                </h4>
                <p className="text-xs text-orange-950 leading-relaxed">
                  Notice how sizing commitments to 60% of baseline keeps commitment utilization near 100% with zero wasted spend. The volatile peak demand is safely absorbed by elastic On-Demand autoscaling and interruptible Spot batches.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* INTERACTIVE LAB 2: STORAGE LIFECYCLE & RETRIEVAL TCO CALCULATOR             */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-orange-100 px-2.5 py-1 font-mono text-xs font-bold text-orange-700 uppercase">
              Interactive Lab 2
            </span>
            <span className="font-mono text-xs text-stone-400">Storage TCO & Retrieval Penalty Simulator</span>
          </div>
          <h3 className="text-2xl font-black text-[#18181b]">
            Storage Lifecycle & Retrieval TCO Calculator
          </h3>
          <p className="mt-2 text-sm text-stone-600 max-w-3xl">
            Compare flat Standard/Hot storage against automated lifecycle tiering (Hot $\to$ Cool $\to$ Archive $\to$ Delete). Discover how high retrieval frequencies on cold data can inadvertently wipe out predicted storage savings.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* CONTROLS (COL-5) */}
            <div className="lg:col-span-5 space-y-5 bg-[#faf8f5] p-6 rounded-2xl border border-[#e7e3da]">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-stone-600 mb-1.5">
                  Storage Management Strategy
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setStorageStrategy("hot-only")}
                    className={`rounded-xl py-2 text-xs font-bold border transition ${
                      storageStrategy === "hot-only"
                        ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                        : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    Hot / Standard Only
                  </button>
                  <button
                    onClick={() => setStorageStrategy("lifecycle-automated")}
                    className={`rounded-xl py-2 text-xs font-bold border transition ${
                      storageStrategy === "lifecycle-automated"
                        ? "bg-emerald-700 text-white border-emerald-700 shadow-xs"
                        : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    Automated Lifecycle
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-1.5">
                  <span>TOTAL DATASET SIZE:</span>
                  <span className="text-orange-600">{datasetSizeTb} TB</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={1000}
                  step={10}
                  value={datasetSizeTb}
                  onChange={(e) => setDatasetSizeTb(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
                <span className="text-[10px] text-stone-400 font-mono">10 TB to 1,000 TB (1 Petabyte)</span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-1.5">
                  <span>MONTHLY RETRIEVAL FREQUENCY:</span>
                  <span className={retrievalPercent > 15 ? "text-rose-600 font-black" : "text-orange-600"}>
                    {retrievalPercent}% of Data
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={40}
                  step={1}
                  value={retrievalPercent}
                  onChange={(e) => setRetrievalPercent(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
                <span className="text-[10px] text-stone-400 font-mono">Simulates active queries against historical data</span>
              </div>
            </div>

            {/* FINANCIAL TELEMETRY (COL-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Monthly Storage Spend</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-orange-400">
                      ${storageCalculations.totalMonthlyStorageCost.toLocaleString()}
                    </span>
                    <span className="text-xs text-stone-400">/ mo</span>
                  </div>
                  <span className="font-mono text-[11px] text-stone-400 block mt-1">
                    At-Rest: ${storageCalculations.monthlyAtRestCost.toLocaleString()} | Retrieval: ${storageCalculations.monthlyRetrievalCost.toLocaleString()}
                  </span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-[#18181b] p-5 text-white">
                  <span className="font-mono text-xs text-stone-400 uppercase">Annual Net Savings</span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-emerald-400">
                      ${storageCalculations.netAnnualSavings.toLocaleString()}
                    </span>
                    <span className="text-xs text-stone-400">/ year</span>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-400 block mt-1">
                    {storageCalculations.savingsPercent}% Net TCO Reduction
                  </span>
                </div>
              </div>

              {/* STRATEGY NOTE & RETRIEVAL TRAP ALERT */}
              <div className={`rounded-2xl border p-5 ${
                storageCalculations.retrievalWarning
                  ? "border-rose-300 bg-rose-50/80 text-rose-950"
                  : "border-[#e7e3da] bg-[#faf8f5] text-stone-800"
              }`}>
                <h4 className="font-mono text-xs font-bold uppercase flex items-center gap-1.5 mb-2">
                  {storageCalculations.retrievalWarning ? (
                    <AlertTriangle size={16} className="text-rose-600" />
                  ) : (
                    <CheckCircle2 size={16} className="text-emerald-600" />
                  )}
                  <span>Storage Class Economic Analysis</span>
                </h4>
                <p className="text-xs leading-relaxed">{storageCalculations.strategyNote}</p>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5">
                <h4 className="font-mono text-xs font-bold text-orange-900 uppercase flex items-center gap-1.5 mb-1">
                  <Lightbulb size={16} className="text-orange-600" />
                  <span>The Retrieval Fee Invariant</span>
                </h4>
                <p className="text-xs text-orange-950 leading-relaxed">
                  Notice that as retrieval frequency climbs above 15%, cold retrieval fees ($0.01–$0.02/GB) rapidly eat away at at-rest savings. Archive tiers belong exclusively to true compliance data that is almost never read.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* INTERACTIVE LAB 3: CLOUD ECONOMICS GAMEDAY SIMULATOR (5 FAILURE GAMES)     */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#27272a] bg-[#18181b] p-6 md:p-10 text-white shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-orange-500/20 border border-orange-500/30 px-2.5 py-1 font-mono text-xs font-bold text-orange-400 uppercase">
                  Interactive Lab 3
                </span>
                <span className="font-mono text-xs text-stone-400">FinOps Crisis Drills</span>
              </div>
              <h3 className="text-2xl font-black text-white mt-1">
                Cloud Economics GameDay Simulator
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                5 Classic Cost Optimization Failure Games testing overcommitting, Spot failures, and retrieval shocks (Section 101).
              </p>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs text-stone-400">Current Score</span>
              <div className="text-2xl font-black text-orange-400">{gameScore} / 5</div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* SCENARIO SELECTOR (COL-4) */}
            <div className="lg:col-span-4 space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                Failure Games (A to E)
              </span>
              <div className="space-y-1.5">
                {economicsGameScenarios.map((sc, idx) => (
                  <button
                    key={sc.id}
                    onClick={() => {
                      setGameScenarioIndex(idx);
                      setGameSelection(gameHistory[idx] ?? null);
                    }}
                    className={`w-full text-left rounded-xl px-3.5 py-2.5 text-xs font-bold transition flex items-center justify-between ${
                      gameScenarioIndex === idx
                        ? "bg-orange-500 text-white shadow-sm"
                        : "bg-stone-900/80 text-stone-300 hover:bg-stone-800"
                    }`}
                  >
                    <span className="truncate">{sc.title.split(":")[0]}</span>
                    {gameHistory[idx] !== undefined && (
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-stone-200">
                        {economicsGameScenarios[idx].options[gameHistory[idx]].correct ? "PASS" : "FAIL"}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* SCENARIO DETAILS & CHOICES (COL-8) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-6">
                <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
                  Scenario {gameScenarioIndex + 1} of 5
                </span>
                <h4 className="text-xl font-black text-white mt-1">
                  {economicsGameScenarios[gameScenarioIndex].title}
                </h4>
                <p className="mt-3 text-sm text-stone-300 leading-relaxed bg-stone-950 p-4 rounded-xl border border-stone-800">
                  {economicsGameScenarios[gameScenarioIndex].context}
                </p>

                <div className="mt-6 space-y-3">
                  <span className="font-mono text-xs font-bold uppercase text-stone-400 block">
                    Choose FinOps Action:
                  </span>
                  {economicsGameScenarios[gameScenarioIndex].options.map((opt, optIdx) => (
                    <button
                      key={optIdx}
                      onClick={() => {
                        setGameSelection(optIdx);
                        if (gameHistory[gameScenarioIndex] === undefined) {
                          setGameHistory((prev) => ({ ...prev, [gameScenarioIndex]: optIdx }));
                          if (opt.correct) setGameScore((prev) => prev + 1);
                        }
                      }}
                      className={`w-full text-left rounded-xl p-4 text-xs font-bold border transition ${
                        gameSelection === optIdx
                          ? opt.correct
                            ? "bg-emerald-950/80 border-emerald-500 text-emerald-200"
                            : "bg-rose-950/80 border-rose-500 text-rose-200"
                          : "bg-stone-950 border-stone-800 text-stone-300 hover:border-orange-500/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{opt.label}</span>
                        {gameSelection === optIdx && (
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/60">
                            {opt.correct ? "OPTIMAL ACTION" : "FINOPS FAILURE"}
                          </span>
                        )}
                      </div>
                      {gameSelection === optIdx && (
                        <p className="mt-2 text-xs font-normal text-stone-300 pt-2 border-t border-stone-800">
                          {opt.explanation}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* SECTION 4: WEEK 22 MASTERY TEST & ARCHITECTURAL SELF-ASSESSMENT             */}
        {/* -------------------------------------------------------------------------- */}
        <div className="mb-16 rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-orange-100 px-2.5 py-1 font-mono text-xs font-bold text-orange-700 uppercase">
              Mastery Verification
            </span>
            <span className="font-mono text-xs text-stone-400">Section 102 Questions</span>
          </div>
          <h3 className="text-2xl font-black text-[#18181b]">
            Cloud Economics & FinOps Mastery Test: Cloud Economics & FinOps Interview Questions
          </h3>
          <p className="mt-2 text-sm text-stone-600 max-w-3xl">
            16 rigorous questions evaluating your ability to balance unit economics, commitments, spot preemption, storage lifecycles, and architectural value.
          </p>

          <div className="mt-8 space-y-3">
            {masteryQuestions.map((mq, idx) => {
              const isOpen = openMasteryIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200 bg-[#faf8f5] overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenMasteryIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between text-xs sm:text-sm font-bold text-stone-800 hover:text-orange-600"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-orange-600">Q{idx + 1}.</span>
                      <span>{mq.q}</span>
                    </span>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 bg-white">
                      <span className="font-mono text-[10px] font-bold uppercase text-orange-600 block mb-1">
                        Architectural Answer & Deep Explanation:
                      </span>
                      {mq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CURRICULUM FOOTER */}
        <div className="rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
              Cloud Architecture Track
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Modules 1 through 12 Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              From Cloud Foundations, VPCs, Compute, Storage, Databases, Large-Scale Architecture, Deep AWS, Deep Azure, Deep Google Cloud, Multi-Cloud Engineering, and Cloud Security to Cloud Economics & FinOps.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/cloud/security")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-300 hover:text-white hover:bg-stone-700 transition"
            >
              ← Module 11: Security
            </button>
            <button
              onClick={() => navigate("/learning/cloud/advanced")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition"
            >
              Next: Module 13 — Advanced Cloud Systems →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
