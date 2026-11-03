import useModuleContent from "../hooks/useModuleContent";
import ModuleLoadingSkeleton from "./ModuleLoadingSkeleton";
import ModuleErrorState from "./ModuleErrorState";
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Terminal,
  Boxes,
  Layers,
  HardDrive,
  Network,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Play,
  RotateCcw,
  Sliders,
  ChevronDown,
  ChevronUp,
  FileCode,
  Lock,
  Activity,
  Tag,
  BookOpen,
  Check,
  Eye,
  Server,
  Database,
  Cpu,
  RefreshCw,
  Zap,
  Globe,
  Radio,
  Flame,
  Cloud,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function DevOpsIaC() {
  const { data: moduleData, loading, error, reload } = useModuleContent("devops", "iac");
  const navigate = useNavigate();

  // Navigation & UI State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'plan-lab' | 'drift-lab' | 'sre-gameday' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);

  // =========================================================================
  // SIMULATOR 1: TERRAFORM PLAN & DEPENDENCY GRAPH VISUALIZER
  // =========================================================================
  const [simulatedChange, setSimulatedChange] = useState("tag_update"); // 'tag_update' | 'cidr_replacement' | 'add_security_rule'
  const [planOutput, setPlanOutput] = useState([
    "Terraform used the selected providers to generate the following execution plan.",
    "Resource actions are indicated with the following symbols:",
    "  ~ update in-place",
    "",
    "Terraform will perform the following actions:",
    "",
    "  # aws_vpc.main will be updated in-place",
    "  ~ resource \"aws_vpc\" \"main\" {",
    "        id                                   = \"vpc-0a8b9c1d2e3f4\"",
    "        cidr_block                           = \"10.20.0.0/16\"",
    "      ~ tags                                 = {",
    "            \"Environment\" = \"dev\"",
    "          + \"Owner\"       = \"sre-team\"",
    "            \"Project\"     = \"DevOpsLearning\"",
    "        }",
    "    }",
    "",
    "Plan: 0 to add, 1 to change, 0 to destroy.",
  ]);

  const handleRunPlan = (changeType) => {
    setSimulatedChange(changeType);
    if (changeType === "tag_update") {
      setPlanOutput([
        "Terraform used the selected providers to generate the following execution plan.",
        "Resource actions are indicated with the following symbols:",
        "  ~ update in-place",
        "",
        "Terraform will perform the following actions:",
        "",
        "  # aws_vpc.main will be updated in-place",
        "  ~ resource \"aws_vpc\" \"main\" {",
        "        id           = \"vpc-0a8b9c1d2e3f4\"",
        "        cidr_block   = \"10.20.0.0/16\"",
        "      ~ tags         = {",
        "          + \"CostCenter\" = \"CC-8820\"",
        "            \"ManagedBy\"  = \"Terraform\"",
        "        }",
        "    }",
        "",
        "Plan: 0 to add, 1 to change, 0 to destroy.",
      ]);
    } else if (changeType === "cidr_replacement") {
      setPlanOutput([
        "Terraform used the selected providers to generate the following execution plan.",
        "Resource actions are indicated with the following symbols:",
        "  -/+ destroy and then create replacement",
        "",
        "Terraform will perform the following actions:",
        "",
        "  # aws_subnet.app must be REPLACED (Forces new resource)",
        "-/+ resource \"aws_subnet\" \"app\" {",
        "      ~ cidr_block = \"10.20.1.0/24\" -> \"10.20.2.0/24\" (forces replacement)",
        "      ~ id         = \"subnet-09f1a2\" -> (known after apply)",
        "        vpc_id     = \"vpc-0a8b9c1d2e3f4\"",
        "    }",
        "",
        "Plan: 1 to add, 0 to change, 1 to destroy.",
      ]);
    } else if (changeType === "add_security_rule") {
      setPlanOutput([
        "Terraform used the selected providers to generate the following execution plan.",
        "Resource actions are indicated with the following symbols:",
        "  + create",
        "",
        "Terraform will perform the following actions:",
        "",
        "  # aws_security_group_rule.allow_tls will be created",
        "  + resource \"aws_security_group_rule\" \"allow_tls\" {",
        "      + from_port         = 443",
        "      + to_port           = 443",
        "      + protocol          = \"tcp\"",
        "      + cidr_blocks       = [\"0.0.0.0/0\"]",
        "      + security_group_id = \"sg-01ab8c9\"",
        "      + type              = \"ingress\"",
        "    }",
        "",
        "Plan: 1 to add, 0 to change, 0 to destroy.",
      ]);
    }
  };

  // =========================================================================
  // SIMULATOR 2: STATE DRIFT DETECTION & RECONCILIATION SANDBOX
  // =========================================================================
  const [driftStatus, setDriftStatus] = useState("drift_detected"); // 'drift_detected' | 'reconciled' | 'accepted_refresh'
  const [driftTerminalLog, setDriftTerminalLog] = useState([
    "Drift Scenario: An engineer logged into AWS Console at 2:00 AM and manually added an unauthorized ingress rule (Port 22 from 0.0.0.0/0).",
    "Declared HCL code allows ONLY port 443 (HTTPS).",
    "Run 'terraform plan' to inspect drift or 'terraform apply -refresh-only' to accept external changes into state.",
  ]);

  const handlePlanDrift = () => {
    setDriftTerminalLog([
      "$ terraform plan",
      "Refreshing Terraform state in-memory prior to plan...",
      "aws_security_group.web: Refreshing state... [id=sg-0a8b9c1]",
      "",
      "Note: Objects have changed outside of Terraform",
      "Terraform detected the following changes made outside of Terraform:",
      "  # aws_security_group.web has changed:",
      "  ~ ingress {",
      "      + from_port   = 22",
      "      + to_port     = 22",
      "      + protocol    = \"tcp\"",
      "      + cidr_blocks = [\"0.0.0.0/0\"]  <-- Out-of-band manual console change!",
      "    }",
      "",
      "Terraform will perform the following actions to restore declared state:",
      "  # aws_security_group.web will be updated in-place (reverting manual console edit)",
      "  ~ ingress {",
      "      - from_port   = 22",
      "      - to_port     = 22",
      "      - protocol    = \"tcp\"",
      "      - cidr_blocks = [\"0.0.0.0/0\"]",
      "    }",
      "",
      "Plan: 0 to add, 1 to change, 0 to destroy.",
    ]);
  };

  const handleApplyReconcile = () => {
    setDriftStatus("reconciled");
    setDriftTerminalLog([
      "$ terraform apply -auto-approve",
      "aws_security_group.web: Modifying... [id=sg-0a8b9c1]",
      "aws_security_group.web: Modifications complete after 2s [id=sg-0a8b9c1]",
      "",
      "Apply complete! Resources: 0 added, 1 changed, 0 destroyed.",
      "[SUCCESS] Out-of-band console change reverted! Infrastructure matches declared HCL code.",
    ]);
  };

  const handleRefreshOnlyApply = () => {
    setDriftStatus("accepted_refresh");
    setDriftTerminalLog([
      "$ terraform apply -refresh-only -auto-approve",
      "aws_security_group.web: Refreshing state... [id=sg-0a8b9c1]",
      "",
      "Apply complete! State refreshed to include manual console change without modifying cloud infrastructure.",
      "[WARNING] State now reflects manual changes, but HCL code will drift again on next plan unless HCL is updated.",
    ]);
  };

  // =========================================================================
  // SIMULATOR 3: SRE IAC SECURITY & PRODUCTION TRIAGE GAMEDAY
  // =========================================================================
  const incidentScenarios = moduleData?.scenarios || [];

  const [selectedIncidentIndex, setSelectedIncidentIndex] = useState(0);
  const [incidentAnswers, setIncidentAnswers] = useState({});

  const handleIncidentAnswer = (incId, optId) => {
    setIncidentAnswers((prev) => ({ ...prev, [incId]: optId }));
  };

  // =========================================================================
  // TOPIC CURRICULUM DATA (10 COMPREHENSIVE TOPICS)
  // =========================================================================
  const topics = moduleData?.topics || [];
  const currentTopic = topics[selectedTopic] || topics[0] || {};

  // =========================================================================
  // MASTERY ASSESSMENT QUESTIONS (15 IN-DEPTH QUESTIONS)
  // =========================================================================
  const masteryQuestions = moduleData?.quiz || [];

    if (loading) {
    return <ModuleLoadingSkeleton track="devops" currentModuleId="iac" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="devops" currentModuleId="iac" error={error} onRetry={reload} />;
  }
return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-orange-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="devops"
          currentModuleId="iac"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Nova Terraform AI"
        />

        {/* HERO SECTION */}
        <div className="rounded-3xl border border-stone-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-10 shadow-sm mb-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-3">
              <Cloud size={14} />
              <span>Multi-Cloud Infrastructure Automation & State Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-tight">
              Module 5 — Infrastructure as Code (IaC)
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Treat infrastructure changes like software releases: <strong className="text-stone-900 font-semibold">version them</strong>,{" "}
              <strong className="text-stone-900 font-semibold">preview them</strong>,{" "}
              <strong className="text-stone-900 font-semibold">review them</strong>, and{" "}
              <strong className="text-stone-900 font-semibold">detect drift</strong>. Grounded in systems foundations from{" "}
              <span className="font-semibold text-stone-900">MIT</span>, <span className="font-semibold text-stone-900">Stanford</span>,{" "}
              <span className="font-semibold text-stone-900">NUS</span>, and official AWS, Azure, and Google Cloud Terraform documentation.
            </p>
          </div>

          {/* TAB BAR NAVIGATION */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-stone-200 pb-3">
            {[
              { id: "theory", label: "Curriculum & Theory (10 Topics)", icon: BookOpen },
              { id: "plan-lab", label: "Lab 1: Plan & Dependency Graph", icon: Activity },
              { id: "drift-lab", label: "Lab 2: State Drift & Reconciliation", icon: RefreshCw },
              { id: "sre-gameday", label: "Lab 3: SRE IaC Security GameDay", icon: ShieldCheck },
              { id: "mastery", label: "Mastery Assessment (15 Questions)", icon: CheckCircle2 },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all shadow-sm ${
                    isActive
                      ? "bg-orange-500 text-white shadow-orange-500/20 shadow-md"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200/80 border border-stone-200"
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* AI TUTOR EMBED */}
        {showAiTutor && (
          <div className="mb-10 rounded-2xl border border-orange-200 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-orange-600" />
                <h3 className="text-base font-bold text-stone-900">Nova AI: Infrastructure as Code & Terraform Mentor</h3>
              </div>
              <button
                onClick={() => setShowAiTutor(false)}
                className="text-xs font-semibold text-stone-500 hover:text-stone-800"
              >
                Close
              </button>
            </div>
            <div className="pt-4">
              <LearningRo
                currentTopic="devops-iac-terraform"
                moduleName="Module 5 — Infrastructure as Code (IaC)"
              />
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 1: THEORY & CURRICULUM TOPICS (10 TOPICS)                       */}
        {/* =================================================================== */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* LEFT TOPIC SELECTOR */}
            <div className="lg:col-span-4 space-y-2.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 px-2 block">
                Syllabus Topics
              </span>
              {topics.map((t, idx) => {
                const isSelected = selectedTopic === idx;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTopic(idx)}
                    className={`w-full text-left p-4 rounded-2xl transition-all border ${
                      isSelected
                        ? "bg-[#18181b] text-white border-[#27272a] shadow-lg shadow-stone-900/10"
                        : "bg-white/80 text-stone-800 border-stone-200/80 hover:bg-white hover:border-orange-200"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isSelected ? "text-orange-400" : "text-stone-600"
                        }`}
                      >
                        Topic {t.number}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-white/10 text-stone-300"
                            : "bg-stone-100 text-stone-600 border border-stone-200"
                        }`}
                      >
                        {t.badge}
                      </span>
                    </div>
                    <div className="font-bold text-sm leading-snug">{t.title}</div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT DETAIL VIEW */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-stone-100">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase text-orange-600 tracking-wider">
                      Topic {currentTopic?.number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                      {currentTopic?.title}
                    </h2>
                  </div>
                  <span className="font-mono text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full">
                    {currentTopic?.badge}
                  </span>
                </div>

                <p className="mt-5 text-sm sm:text-base text-stone-700 leading-relaxed font-sans bg-stone-50 p-4 rounded-xl border border-stone-200">
                  {currentTopic?.summary}
                </p>

                {/* Subsections */}
                <div className="mt-8 space-y-6">
                  {currentTopic?.details?.map((detail, dIdx) => (
                    <div key={dIdx} className="border-l-2 border-orange-500 pl-4 py-1">
                      <h3 className="text-base font-bold text-stone-900">{detail.heading}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed whitespace-pre-line font-sans">
                        {detail.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CODE DEMONSTRATION SNIPPET */}
                <div className="mt-8">
                  <div className="flex items-center justify-between bg-[#18181b] text-stone-300 px-4 py-2 rounded-t-xl text-xs font-mono">
                    <span className="flex items-center gap-2">
                      <Terminal size={14} className="text-orange-400" />
                      Production Terraform HCL Reference
                    </span>
                    <span className="text-[10px] text-stone-400">hashicorp / hcl</span>
                  </div>
                  <pre className="p-4 bg-[#18181b] text-stone-100 text-xs font-mono rounded-b-xl overflow-x-auto border-t border-stone-800 leading-relaxed">
                    <code>{currentTopic?.codeSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* NEXT / PREV BUTTONS */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={selectedTopic === 0}
                  onClick={() => setSelectedTopic(selectedTopic - 1)}
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2 text-xs font-bold text-stone-700 hover:bg-stone-50 disabled:opacity-40 transition"
                >
                  <ArrowLeft size={14} /> Previous Topic
                </button>
                <button
                  disabled={selectedTopic === topics.length - 1}
                  onClick={() => setSelectedTopic(selectedTopic + 1)}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-xs font-bold text-white hover:bg-orange-600 disabled:opacity-40 transition"
                >
                  Next Topic <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: LAB 1 - PLAN & DEPENDENCY GRAPH VISUALIZER                   */}
        {/* =================================================================== */}
        {activeTab === "plan-lab" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <Activity size={14} />
                <span>Lab 1: The Dependency Directed Acyclic Graph (DAG)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Interactive Plan & Dependency Graph Visualizer
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                As taught in <strong className="text-stone-900 font-semibold">MIT Systems Engineering</strong>, Terraform
                constructs a mathematical DAG of resource dependencies to optimize parallel provisioning. Simulate
                code changes and observe the resulting execution plan symbols:{" "}
                <span className="font-mono text-emerald-600 font-bold">+ create</span>,{" "}
                <span className="font-mono text-amber-600 font-bold">~ update</span>, and{" "}
                <span className="font-mono text-rose-600 font-bold">-/+ destroy and re-create replacement</span>.
              </p>
            </div>

            {/* CONTROLS TOOLBAR */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
              <span className="text-xs font-mono font-bold text-stone-700 block">
                Simulate HCL Code Modification:
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleRunPlan("tag_update")}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                    simulatedChange === "tag_update"
                      ? "bg-amber-600 text-white shadow-sm"
                      : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                  }`}
                >
                  ~ In-Place Update (Add Tags to VPC)
                </button>
                <button
                  onClick={() => handleRunPlan("cidr_replacement")}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                    simulatedChange === "cidr_replacement"
                      ? "bg-rose-600 text-white shadow-sm"
                      : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                  }`}
                >
                  -/+ Destructive Replacement (Change Subnet CIDR)
                </button>
                <button
                  onClick={() => handleRunPlan("add_security_rule")}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                    simulatedChange === "add_security_rule"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                  }`}
                >
                  + Resource Creation (Add Security Group Rule)
                </button>
              </div>
            </div>

            {/* DEPENDENCY GRAPH TOPOLOGY & TERMINAL OUTPUT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* DAG Nodes */}
              <div className="lg:col-span-5 rounded-2xl border border-stone-200 bg-white p-5 space-y-3">
                <span className="font-bold text-xs text-stone-900 block border-b border-stone-100 pb-2">
                  Topological Resource Graph:
                </span>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-stone-100 text-stone-800 border border-stone-300 flex items-center justify-between">
                    <span>1. provider.aws (Root Provider)</span>
                    <span className="text-[10px] text-stone-500">v6.0</span>
                  </div>
                  <div className="text-center text-stone-400 font-bold select-none">↓</div>
                  <div
                    className={`p-3 rounded-xl border flex items-center justify-between transition ${
                      simulatedChange === "tag_update"
                        ? "bg-amber-50 border-amber-400 text-amber-950 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-700"
                    }`}
                  >
                    <span>2. aws_vpc.main</span>
                    <span>{simulatedChange === "tag_update" ? "~ in-place" : "no-op"}</span>
                  </div>
                  <div className="text-center text-stone-400 font-bold select-none">↓</div>
                  <div
                    className={`p-3 rounded-xl border flex items-center justify-between transition ${
                      simulatedChange === "cidr_replacement"
                        ? "bg-rose-50 border-rose-400 text-rose-950 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-700"
                    }`}
                  >
                    <span>3. aws_subnet.app</span>
                    <span>{simulatedChange === "cidr_replacement" ? "-/+ REPLACE" : "no-op"}</span>
                  </div>
                  <div className="text-center text-stone-400 font-bold select-none">↓</div>
                  <div
                    className={`p-3 rounded-xl border flex items-center justify-between transition ${
                      simulatedChange === "add_security_rule"
                        ? "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-700"
                    }`}
                  >
                    <span>4. aws_security_group_rule.allow_tls</span>
                    <span>{simulatedChange === "add_security_rule" ? "+ CREATE" : "no-op"}</span>
                  </div>
                </div>
              </div>

              {/* Speculative Plan Output */}
              <div className="lg:col-span-7 rounded-2xl border border-[#27272a] bg-[#18181b] p-5 text-white font-mono text-xs space-y-2">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-stone-400 text-[11px]">
                  <span>$ terraform plan execution preview</span>
                  <span className="text-orange-400 font-bold">HCL Execution Plan</span>
                </div>
                <div className="space-y-1 pt-1 max-h-80 overflow-y-auto leading-relaxed">
                  {planOutput.map((line, pIdx) => {
                    let colorClass = "text-stone-300";
                    if (line.startsWith("  +")) colorClass = "text-emerald-400 font-bold";
                    if (line.startsWith("  ~")) colorClass = "text-amber-400 font-bold";
                    if (line.startsWith("-/+")) colorClass = "text-rose-400 font-bold";
                    if (line.startsWith("Plan:")) colorClass = "text-white font-black bg-stone-800 p-1 rounded inline-block mt-2";

                    return (
                      <div key={pIdx} className={colorClass}>
                        {line}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: LAB 2 - STATE DRIFT DETECTION & RECONCILIATION SANDBOX       */}
        {/* =================================================================== */}
        {activeTab === "drift-lab" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <RefreshCw size={14} />
                <span>Lab 2: Detecting & Reconciling Out-of-Band Changes</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                State Drift Detection & Reconciliation Sandbox
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                When an engineer bypasses Terraform to manually change firewall rules in the cloud web console, drift
                occurs. Compare how <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">terraform plan</code>{" "}
                restores declared code vs. how{" "}
                <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">terraform apply -refresh-only</code>{" "}
                accepts external changes into state.
              </p>
            </div>

            {/* SCENARIO BRIEFING */}
            <div className="p-5 rounded-2xl border border-amber-300 bg-amber-50/60 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                <AlertTriangle size={16} className="text-amber-600" />
                <span>Out-of-Band Production Drift Event:</span>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                An on-call engineer logged into the AWS Console during an incident and opened SSH port 22 to 0.0.0.0/0.
                Your version-controlled Terraform code strictly allows port 443 (HTTPS) only.
              </p>
            </div>

            {/* TRIAGE ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handlePlanDrift}
                className="px-4 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-mono font-bold hover:bg-stone-800 transition shadow-sm flex items-center gap-1.5"
              >
                <Terminal size={14} className="text-orange-400" />
                <span>1. Run terraform plan (Detect Drift)</span>
              </button>
              <button
                onClick={handleApplyReconcile}
                className="px-4 py-2.5 rounded-xl bg-orange-500 text-white text-xs font-mono font-bold hover:bg-orange-600 transition shadow-sm flex items-center gap-1.5"
              >
                <ShieldCheck size={14} />
                <span>2. Run terraform apply (Revert Drift to Code)</span>
              </button>
              <button
                onClick={handleRefreshOnlyApply}
                className="px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-800 text-xs font-mono font-bold hover:bg-stone-100 transition shadow-sm flex items-center gap-1.5"
              >
                <RefreshCw size={14} className="text-stone-600" />
                <span>3. Run terraform apply -refresh-only (Accept Drift)</span>
              </button>
            </div>

            {/* TERMINAL LOG */}
            <div className="rounded-2xl border border-[#27272a] bg-[#18181b] p-5 text-white font-mono text-xs space-y-2">
              <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-stone-400 text-[11px]">
                <span>SRE Drift Resolution Terminal</span>
                <span className="text-emerald-400 font-bold">
                  Status: {driftStatus === "drift_detected" ? "DRIFT ACTIVE" : driftStatus === "reconciled" ? "RECONCILED TO CODE" : "REFRESH APPLIED"}
                </span>
              </div>
              <div className="space-y-1 pt-1 max-h-72 overflow-y-auto leading-relaxed">
                {driftTerminalLog.map((line, lIdx) => {
                  let colorClass = "text-stone-300";
                  if (line.startsWith("$")) colorClass = "text-orange-400 font-bold";
                  if (line.includes("[SUCCESS]")) colorClass = "text-emerald-400 font-bold";
                  if (line.includes("[WARNING]")) colorClass = "text-amber-400 font-bold";
                  if (line.includes("~")) colorClass = "text-amber-300 font-bold";
                  if (line.includes("-")) colorClass = "text-rose-400 font-bold";

                  return (
                    <div key={lIdx} className={colorClass}>
                      {line}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 4: LAB 3 - SRE IAC SECURITY & PRODUCTION GAMEDAY                */}
        {/* =================================================================== */}
        {activeTab === "sre-gameday" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <ShieldCheck size={14} />
                <span>Lab 3: SRE IaC Security & Production Triage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                SRE IaC Security & Production Triage GameDay
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Evaluate 5 high-stakes production scenarios: plaintext secrets in committed state, state locking
                race conditions, destructive RDS database replacements, backend bootstrapping paradoxes, and
                cross-platform lock file checksum failures.
              </p>
            </div>

            {/* INCIDENT SELECTOR */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {incidentScenarios.map((sc, sIdx) => {
                const isSelected = selectedIncidentIndex === sIdx;
                const isAnswered = incidentAnswers[sc.id] !== undefined;
                return (
                  <button
                    key={sc.id}
                    onClick={() => setSelectedIncidentIndex(sIdx)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "bg-[#18181b] text-white border-stone-800 shadow-md"
                        : "bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className={isSelected ? "text-orange-400 font-bold" : "text-stone-500 font-bold"}>
                        Case #{sIdx + 1}
                      </span>
                      {isAnswered && (
                        <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1 py-0.5 rounded font-bold">
                          ✓ Solved
                        </span>
                      )}
                    </div>
                    <div className="font-bold text-xs truncate">{sc.title.split(":")[1] || sc.title}</div>
                  </button>
                );
              })}
            </div>

            {/* ACTIVE INCIDENT CARD */}
            {(() => {
              const currentInc = incidentScenarios[selectedIncidentIndex];
              const answer = incidentAnswers[currentInc.id];

              return (
                <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-6 sm:p-8 space-y-6">
                  {/* Header */}
                  <div className="pb-4 border-b border-stone-200 space-y-1">
                    <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                      IaC Production Incident
                    </span>
                    <h3 className="text-xl font-bold text-stone-900">{currentInc.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 pt-1">
                      <strong className="text-stone-800">Symptom: </strong>
                      {currentInc.symptom}
                    </p>
                  </div>

                  {/* Code Snippet */}
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-stone-500 block mb-2">
                      Code / Log Inspection:
                    </span>
                    <pre className="p-4 rounded-xl bg-[#18181b] text-xs font-mono overflow-x-auto text-stone-200 border border-stone-800 leading-relaxed">
                      <code>{currentInc.codeSnippet}</code>
                    </pre>
                  </div>

                  {/* Question & Options */}
                  <div className="space-y-4 pt-2">
                    <span className="text-sm font-bold text-stone-900 block">{currentInc.question}</span>

                    <div className="space-y-2.5">
                      {currentInc.options.map((opt) => {
                        const isChosen = answer === opt.id;
                        return (
                          <button
                            key={opt.id}
                            onClick={() => handleIncidentAnswer(currentInc.id, opt.id)}
                            className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-sans transition-all ${
                              isChosen
                                ? opt.correct
                                  ? "bg-emerald-50 border-emerald-300 text-emerald-900 shadow-sm"
                                  : "bg-rose-50 border-rose-300 text-rose-900 shadow-sm"
                                : "bg-white border-stone-200 text-stone-800 hover:bg-stone-100"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <span
                                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono ${
                                  isChosen
                                    ? opt.correct
                                      ? "bg-emerald-600 text-white border-emerald-600"
                                      : "bg-rose-600 text-white border-rose-600"
                                    : "border-stone-300 text-stone-500 bg-stone-50"
                                }`}
                              >
                                {opt.id.slice(-1).toUpperCase()}
                              </span>
                              <div className="space-y-1">
                                <span className="font-semibold block">{opt.label}</span>
                                {isChosen && (
                                  <p
                                    className={`text-xs mt-2 pt-2 border-t leading-relaxed ${
                                      opt.correct
                                        ? "border-emerald-200 text-emerald-800 font-sans"
                                        : "border-rose-200 text-rose-800 font-sans"
                                    }`}
                                  >
                                    <strong className="font-bold">
                                      {opt.correct ? "✓ SRE Remediation Action: " : "✗ Root Cause Risk: "}
                                    </strong>
                                    {opt.explanation}
                                  </p>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 5: MASTERY ASSESSMENT (15 QUESTIONS)                            */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <CheckCircle2 size={14} />
                <span>Final Mastery Assessment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                15-Question Comprehensive Infrastructure as Code Assessment
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Before advancing to CI/CD automation pipelines, demonstrate complete mastery over Terraform internals,
                state management, multi-cloud networking, drift detection, and production review controls.
              </p>
            </div>

            <div className="space-y-4">
              {masteryQuestions.map((mq, idx) => {
                const isOpen = openMasteryIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-stone-200 bg-stone-50/40 overflow-hidden transition"
                  >
                    <button
                      onClick={() => setOpenMasteryIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between text-xs sm:text-sm font-bold text-stone-800 hover:text-orange-600"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-orange-600 font-bold">Q{idx + 1}.</span>
                        <span>{mq.q}</span>
                      </span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 bg-white space-y-3">
                        <div className="space-y-1.5 pt-2">
                          <span className="font-mono text-[10px] font-bold uppercase text-stone-400 block">
                            Key Options & Evaluation:
                          </span>
                          {mq.options.map((opt, oIdx) => (
                            <div
                              key={oIdx}
                              className={`p-2.5 rounded-lg text-xs font-mono flex items-start gap-2 ${
                                oIdx === mq.correctIndex
                                  ? "bg-emerald-50 text-emerald-900 border border-emerald-200 font-semibold"
                                  : "text-stone-500"
                              }`}
                            >
                              <span>{oIdx === mq.correctIndex ? "✓" : "•"}</span>
                              <span>{opt}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-stone-100">
                          <span className="font-mono text-[10px] font-bold uppercase text-orange-600 block mb-1">
                            Authoritative Infrastructure Engineering Answer:
                          </span>
                          <p className="text-stone-700 font-sans">{mq.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* BOTTOM CURRICULUM FOOTER */}
        <div className="rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
              DevOps & SRE Track • Module 5 Complete
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Infrastructure as Code (IaC) Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              You understand declarative HCL, resource dependency graphs, remote state locking, multi-cloud
              VPC/VNet provisioning across AWS, Azure, and GCP, drift detection, and secure review pipelines.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/devops/k8s")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              ← Module 4: Kubernetes
            </button>
            <button
              onClick={() => navigate("/learning/devops/cicd")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition"
            >
              Next: Module 6 — CI/CD →
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
