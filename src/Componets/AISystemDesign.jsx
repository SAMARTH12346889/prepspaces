import React, { useState } from "react";
import {
  ShieldCheck,
  Award,
  ExternalLink,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Clock,
  Copy,
  Check,
  RotateCcw,
  Target,
  HelpCircle,
  Code2,
  Wrench,
  Layers,
  Sparkles,
  Search,
  CheckCircle2
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  systemDesignMeta,
  curriculumUnits,
  guidedLabs,
  capstoneProject,
  codingAssignments,
  theoryQuestions,
  quizQuestions,
  competencies,
  recommendedResources
} from "./aiSystemDesignData";
import {
  AiSystemArchitectureExplorer,
  RagVsFineTuningDecisionMatrixTool,
  CircuitBreakerReliabilitySimulator,
  TokenCostAndCapacityCalculator,
  RealtimeVoiceTurnTakingVisualizer
} from "./AISystemDesignDiagrams";

export default function AISystemDesign() {
  const [activeTab, setActiveTab] = useState("curriculum");
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0);
  const [copiedCodeIdx, setCopiedCodeIdx] = useState(null);

  // Coding tasks state
  const [expandedTaskSol, setExpandedTaskSol] = useState({});

  // Theory search & filter state
  const [theorySearch, setTheorySearch] = useState("");
  const [theoryCategory, setTheoryCategory] = useState("All");

  // Quiz state
  const [userAnswers, setUserAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // Competency tracker state
  const [checkedCompetencies, setCheckedCompetencies] = useState({});

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIdx(id);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  const toggleTaskSolution = (taskId) => {
    setExpandedTaskSol((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const handleAnswerSelect = (qId, optionIdx) => {
    if (showQuizResults) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowQuizResults(false);
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const toggleCompetency = (id) => {
    setCheckedCompetencies((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCompetenciesCount = Object.values(checkedCompetencies).filter(Boolean).length;
  const competencyProgressPercent = Math.round(
    (completedCompetenciesCount / competencies.length) * 100
  );

  const categories = [
    "All",
    "Architecture",
    "Requirements & SLOs",
    "Data & RAG",
    "Reliability",
    "Real-Time Voice",
    "Observability",
    "Security",
    "Capacity Planning"
  ];

  const filteredTheory = theoryQuestions.filter((q) => {
    const matchesCat = theoryCategory === "All" || q.category === theoryCategory;
    const matchesSearch =
      q.question.toLowerCase().includes(theorySearch.toLowerCase()) ||
      q.answer.toLowerCase().includes(theorySearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Top Navigation */}
      <ModuleNav track="ai" currentModuleId="ai-system-design" />

      {/* Hero Header */}
      <header className="relative border-b border-[#e7e3da] bg-white/70 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3 py-0.5 text-xs font-mono font-bold uppercase text-orange-800">
              {systemDesignMeta.badge}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-stone-100 border border-stone-200 px-2.5 py-0.5 text-xs font-semibold text-stone-700">
              <Clock className="h-3 w-3 text-stone-500" />
              {systemDesignMeta.duration}
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-2.5 py-0.5 text-xs font-semibold text-stone-700">
              {systemDesignMeta.level}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Module {systemDesignMeta.moduleNumber}: {systemDesignMeta.title}
          </h1>
          <p className="mt-2 max-w-4xl text-sm sm:text-base text-stone-600 leading-relaxed">
            {systemDesignMeta.subtitle}
          </p>

          <p className="mt-3 max-w-4xl text-xs sm:text-sm text-stone-500 leading-relaxed">
            {systemDesignMeta.summary}
          </p>

          {/* Quick Stats Grid */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 text-xs font-medium">
            <div className="rounded-xl border border-[#e7e3da] bg-white p-3 shadow-2xs">
              <div className="text-stone-500 text-[11px]">Curriculum</div>
              <div className="mt-1 text-lg font-bold text-stone-900">12 Units</div>
            </div>
            <div className="rounded-xl border border-[#e7e3da] bg-white p-3 shadow-2xs">
              <div className="text-stone-500 text-[11px]">Interactive Tools</div>
              <div className="mt-1 text-lg font-bold text-[#f97316]">5 Simulators</div>
            </div>
            <div className="rounded-xl border border-[#e7e3da] bg-white p-3 shadow-2xs">
              <div className="text-stone-500 text-[11px]">Guided Labs</div>
              <div className="mt-1 text-lg font-bold text-stone-900">7 Practical Labs</div>
            </div>
            <div className="rounded-xl border border-[#e7e3da] bg-white p-3 shadow-2xs">
              <div className="text-stone-500 text-[11px]">Coding Tasks</div>
              <div className="mt-1 text-lg font-bold text-stone-900">18 Exercises</div>
            </div>
            <div className="rounded-xl border border-[#e7e3da] bg-white p-3 shadow-2xs">
              <div className="text-stone-500 text-[11px]">Interview Q&As</div>
              <div className="mt-1 text-lg font-bold text-stone-900">30 Q&As</div>
            </div>
            <div className="rounded-xl border border-[#e7e3da] bg-white p-3 shadow-2xs">
              <div className="text-stone-500 text-[11px]">Exam Questions</div>
              <div className="mt-1 text-lg font-bold text-[#f97316]">12 Evaluation Qs</div>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="sticky top-0 z-30 border-b border-[#e7e3da] bg-[#f6f4ee]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex space-x-1 sm:space-x-2">
            {[
              { id: "curriculum", label: "Curriculum", icon: BookOpen },
              { id: "interactive", label: "Interactive Tools", icon: Sparkles },
              { id: "labs", label: "Guided Labs", icon: Wrench },
              { id: "capstone", label: "Capstone", icon: Award },
              { id: "tasks", label: "Coding Tasks", icon: Code2 },
              { id: "theory", label: "Theory Q&A", icon: HelpCircle },
              { id: "quiz", label: "Examination", icon: ShieldCheck },
              { id: "matrix", label: "Competencies", icon: Target },
              { id: "specs", label: "Official Specs", icon: Layers }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 sm:px-3.5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#f97316] text-white shadow-xs shadow-orange-500/20"
                      : "bg-white/80 text-stone-700 hover:border-orange-300 hover:text-[#f97316] border border-[#e7e3da]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* 1. CURRICULUM TAB */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Sidebar Navigator */}
            <div className="lg:col-span-4">
              <div className="sticky top-20 rounded-2xl border border-[#e7e3da] bg-white p-4 shadow-xs">
                <div className="mb-3 text-xs font-bold uppercase tracking-wider text-stone-500 px-1">
                  Course Units (12 Modules)
                </div>
                <div className="space-y-1.5 max-h-[70vh] overflow-y-auto pr-1">
                  {curriculumUnits.map((unit, idx) => (
                    <button
                      key={unit.id}
                      onClick={() => setSelectedUnitIdx(idx)}
                      className={`w-full text-left rounded-xl p-3 text-xs font-semibold transition-all flex items-start gap-2.5 cursor-pointer ${
                        selectedUnitIdx === idx
                          ? "bg-orange-50 text-orange-950 border border-orange-200 shadow-2xs font-bold"
                          : "text-stone-700 hover:bg-stone-50 border border-transparent"
                      }`}
                    >
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${
                        selectedUnitIdx === idx ? "bg-[#f97316] text-white" : "bg-stone-100 text-stone-600"
                      }`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="truncate">{unit.title}</div>
                        <div className="text-[10px] text-stone-400 mt-0.5">{unit.duration}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Unit Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#f97316]">
                      UNIT {String(selectedUnitIdx + 1).padStart(2, "0")} OF 12
                    </span>
                    <h2 className="mt-1 text-xl sm:text-2xl font-bold text-stone-900">
                      {curriculumUnits[selectedUnitIdx].title}
                    </h2>
                  </div>
                  <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-medium text-stone-600">
                    {curriculumUnits[selectedUnitIdx].duration}
                  </span>
                </div>

                <div className="mt-4 rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {curriculumUnits[selectedUnitIdx].summary}
                </div>

                {/* Subsections */}
                <div className="mt-6 space-y-6">
                  {curriculumUnits[selectedUnitIdx].subsections.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-3">
                      <h3 className="text-base font-bold text-stone-900 border-l-3 border-[#f97316] pl-3">
                        {sub.heading}
                      </h3>
                      <div className="text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-line space-y-3">
                        {sub.paragraphs.map((p, pIdx) => {
                          if (p.startsWith("```")) {
                            const codeContent = p.replace(/```[a-z]*\n/, "").replace(/```$/, "");
                            return (
                              <div key={pIdx} className="relative my-4 rounded-xl border border-stone-800 bg-[#1c1917] p-4 font-mono text-xs sm:text-sm text-stone-100 overflow-x-auto">
                                <button
                                  onClick={() => handleCopyCode(codeContent, `${sIdx}-${pIdx}`)}
                                  className="absolute right-3 top-3 rounded-lg border border-stone-700 bg-stone-800 px-2 py-1 text-xs text-stone-300 hover:text-white cursor-pointer"
                                >
                                  {copiedCodeIdx === `${sIdx}-${pIdx}` ? (
                                    <span className="flex items-center gap-1 text-emerald-400">
                                      <Check className="h-3 w-3" /> Copied
                                    </span>
                                  ) : (
                                    <span className="flex items-center gap-1">
                                      <Copy className="h-3 w-3" /> Copy
                                    </span>
                                  )}
                                </button>
                                <pre className="text-emerald-400">{codeContent}</pre>
                              </div>
                            );
                          }
                          return <p key={pIdx}>{p}</p>;
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Navigation */}
                <div className="mt-8 flex justify-between border-t border-[#e7e3da] pt-4">
                  <button
                    disabled={selectedUnitIdx === 0}
                    onClick={() => setSelectedUnitIdx((p) => Math.max(0, p - 1))}
                    className="flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-white px-4 py-2.5 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-30 cursor-pointer"
                  >
                    <ArrowLeft className="h-4 w-4" /> Previous Unit
                  </button>
                  <button
                    disabled={selectedUnitIdx === curriculumUnits.length - 1}
                    onClick={() => setSelectedUnitIdx((p) => Math.min(curriculumUnits.length - 1, p + 1))}
                    className="flex items-center gap-2 rounded-xl bg-[#f97316] px-4 py-2.5 text-xs font-bold text-white hover:bg-orange-600 disabled:opacity-30 cursor-pointer shadow-xs"
                  >
                    Next Unit <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. INTERACTIVE TOOLS TAB */}
        {activeTab === "interactive" && (
          <div className="space-y-8">
            <AiSystemArchitectureExplorer />
            <RagVsFineTuningDecisionMatrixTool />
            <CircuitBreakerReliabilitySimulator />
            <TokenCostAndCapacityCalculator />
            <RealtimeVoiceTurnTakingVisualizer />
          </div>
        )}

        {/* 3. GUIDED LABS TAB */}
        {activeTab === "labs" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-[#f97316]" />
                7 Production-Grade Architecture Labs
              </h2>
              <p className="mt-1 text-xs text-stone-500">
                Complete, copyable Python engineering implementations designed for production resilience.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {guidedLabs.map((lab) => (
                <div key={lab.id} className="rounded-2xl border border-[#e7e3da] bg-white p-6 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-orange-100 border border-orange-200 px-2.5 py-0.5 text-xs font-mono font-bold text-orange-800">
                        LAB 0{lab.id.replace("lab-", "")}
                      </span>
                      <span className="text-xs text-stone-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {lab.duration}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-bold text-stone-900">{lab.title}</h3>
                    <p className="mt-2 text-xs text-stone-600 leading-relaxed">{lab.objective}</p>

                    <div className="mt-4">
                      <div className="text-xs font-semibold text-stone-700">Implementation Steps:</div>
                      <ul className="mt-1.5 space-y-1 text-xs text-stone-600">
                        {lab.steps.map((st, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#f97316] font-bold mt-0.5">&bull;</span>
                            <span>{st}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="relative mt-5 rounded-xl border border-stone-800 bg-[#1c1917] p-4 font-mono text-xs text-emerald-400 overflow-x-auto">
                    <button
                      onClick={() => handleCopyCode(lab.code, lab.id)}
                      className="absolute right-3 top-3 rounded-lg border border-stone-700 bg-stone-800 px-2 py-1 text-xs text-stone-300 hover:text-white cursor-pointer"
                    >
                      {copiedCodeIdx === lab.id ? (
                        <span className="flex items-center gap-1 text-emerald-400">
                          <Check className="h-3 w-3" /> Copied
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Copy className="h-3 w-3" /> Copy Code
                        </span>
                      )}
                    </button>
                    <pre>{lab.code}</pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. CAPSTONE PROJECT TAB */}
        {activeTab === "capstone" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-4">
                <div>
                  <span className="rounded-full bg-orange-100 border border-orange-200 px-3 py-0.5 text-xs font-mono font-bold uppercase text-orange-800">
                    Capstone Architecture Blueprint
                  </span>
                  <h2 className="mt-2 text-2xl font-bold text-stone-900">{capstoneProject.title}</h2>
                </div>
                <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-semibold text-stone-700">
                  {capstoneProject.scale}
                </span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
                {capstoneProject.description}
              </p>

              {/* Requirements */}
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-5">
                  <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider text-orange-800">
                    Functional Requirements
                  </h3>
                  <ul className="mt-3 space-y-2 text-xs text-stone-700">
                    {capstoneProject.functionalRequirements.map((fr, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#f97316] shrink-0 mt-0.5" />
                        <span>{fr}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-5">
                  <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider text-stone-800">
                    Non-Functional Requirements & SLOs
                  </h3>
                  <ul className="mt-3 space-y-2 text-xs text-stone-700">
                    {capstoneProject.nonFunctionalRequirements.map((nfr, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-stone-600 shrink-0 mt-0.5" />
                        <span>{nfr}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Architecture Blueprint Code */}
              <div className="relative mt-6 rounded-xl border border-stone-800 bg-[#1c1917] p-5 font-mono text-xs text-emerald-400 overflow-x-auto">
                <button
                  onClick={() => handleCopyCode(capstoneProject.architectureBlueprintCode, "capstone-code")}
                  className="absolute right-3 top-3 rounded-lg border border-stone-700 bg-stone-800 px-2 py-1 text-xs text-stone-300 hover:text-white cursor-pointer"
                >
                  {copiedCodeIdx === "capstone-code" ? (
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Check className="h-3 w-3" /> Copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy className="h-3 w-3" /> Copy Blueprint
                    </span>
                  )}
                </button>
                <pre>{capstoneProject.architectureBlueprintCode}</pre>
              </div>
            </div>
          </div>
        )}

        {/* 5. CODING TASKS TAB */}
        {activeTab === "tasks" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-[#f97316]" />
                18 Production Architecture Tasks & Scenarios
              </h2>
              <p className="mt-1 text-xs text-stone-500">
                Practical engineering scenarios covering gateways, circuit breakers, RAG pipelines, and capacity equations.
              </p>
            </div>

            <div className="space-y-4">
              {codingAssignments.map((task) => (
                <div key={task.id} className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-[#f97316]">{task.title}</span>
                    <span className="rounded-md bg-stone-100 border border-stone-200 px-2 py-0.5 text-[11px] font-semibold text-stone-700">
                      {task.difficulty}
                    </span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-stone-700 leading-relaxed">{task.problem}</p>

                  <div className="mt-3 flex items-center justify-between">
                    <button
                      onClick={() => toggleTaskSolution(task.id)}
                      className="text-xs font-bold text-[#f97316] hover:text-orange-700 cursor-pointer"
                    >
                      {expandedTaskSol[task.id] ? "Hide Solution" : "View Production Solution"}
                    </button>
                  </div>

                  {expandedTaskSol[task.id] && (
                    <div className="relative mt-4 rounded-xl border border-stone-800 bg-[#1c1917] p-4 font-mono text-xs text-emerald-400 overflow-x-auto">
                      <button
                        onClick={() => handleCopyCode(task.solution, task.id)}
                        className="absolute right-3 top-3 rounded-lg border border-stone-700 bg-stone-800 px-2 py-1 text-xs text-stone-300 hover:text-white cursor-pointer"
                      >
                        {copiedCodeIdx === task.id ? (
                          <span className="flex items-center gap-1 text-emerald-400">
                            <Check className="h-3 w-3" /> Copied
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Copy className="h-3 w-3" /> Copy
                          </span>
                        )}
                      </button>
                      <pre>{task.solution}</pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. THEORY Q&A TAB */}
        {activeTab === "theory" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                <div>
                  <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-[#f97316]" />
                    30 Architectural Interview Q&As
                  </h2>
                  <p className="mt-1 text-xs text-stone-500">
                    Technical viva and architectural interview questions with in-depth answers.
                  </p>
                </div>
              </div>

              {/* Search & Category Filter */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="relative flex-1 min-w-[240px]">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-stone-400" />
                  <input
                    type="text"
                    value={theorySearch}
                    onChange={(e) => setTheorySearch(e.target.value)}
                    placeholder="Search architectural questions or answers..."
                    className="w-full rounded-xl border border-[#e7e3da] bg-[#faf8f4] pl-10 pr-4 py-2 text-xs text-stone-900 outline-none focus:border-orange-500"
                  />
                </div>
                <div className="flex items-center gap-1.5 overflow-x-auto">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setTheoryCategory(cat)}
                      className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                        theoryCategory === cat
                          ? "bg-[#f97316] text-white shadow-xs"
                          : "bg-white text-stone-600 hover:bg-stone-100 border border-[#e7e3da]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Questions List */}
              <div className="mt-6 space-y-4">
                {filteredTheory.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-mono font-bold text-[#f97316]">QUESTION {item.id}</span>
                      <span className="rounded-md bg-stone-100 border border-stone-200 px-2 py-0.5 text-[10px] font-bold text-stone-600 uppercase">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="mt-2 text-sm font-bold text-stone-900">{item.question}</h3>
                    <div className="mt-3 rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 7. EXAMINATION QUIZ TAB */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                <div>
                  <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[#f97316]" />
                    Module 23 Architectural Examination
                  </h2>
                  <p className="mt-1 text-xs text-stone-500">
                    12 comprehensive multiple-choice questions verifying your understanding of AI system design.
                  </p>
                </div>
                {showQuizResults && (
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-xs text-stone-500">Your Score</div>
                      <div className="text-xl font-extrabold text-[#f97316]">
                        {calculateScore()} / {quizQuestions.length}
                      </div>
                    </div>
                    <button
                      onClick={handleResetQuiz}
                      className="flex items-center gap-1.5 rounded-xl border border-[#e7e3da] bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50 cursor-pointer"
                    >
                      <RotateCcw className="h-3.5 w-3.5" /> Retake
                    </button>
                  </div>
                )}
              </div>

              {/* Questions */}
              <div className="mt-6 space-y-6">
                {quizQuestions.map((q, idx) => {
                  const userAns = userAnswers[q.id];
                  const isCorrect = userAns === q.correctIndex;

                  return (
                    <div key={q.id} className="rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
                      <div className="text-xs font-mono font-bold text-[#f97316]">
                        QUESTION {String(idx + 1).padStart(2, "0")} OF 12
                      </div>
                      <h3 className="mt-2 text-sm sm:text-base font-bold text-stone-900">{q.question}</h3>

                      <div className="mt-4 space-y-2">
                        {q.options.map((opt, optIdx) => {
                          let btnStyle = "border-[#e7e3da] bg-[#faf8f4] text-stone-700 hover:bg-stone-100";
                          if (userAns === optIdx) {
                            btnStyle = "border-orange-500 bg-orange-50 text-orange-950 font-bold";
                          }

                          if (showQuizResults) {
                            if (optIdx === q.correctIndex) {
                              btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                            } else if (userAns === optIdx && !isCorrect) {
                              btnStyle = "border-rose-500 bg-rose-50 text-rose-950";
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={showQuizResults}
                              onClick={() => handleAnswerSelect(q.id, optIdx)}
                              className={`w-full rounded-xl border p-3 text-left text-xs sm:text-sm transition-all cursor-pointer ${btnStyle}`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="font-mono text-xs opacity-60">
                                  {String.fromCharCode(65 + optIdx)}.
                                </span>
                                <span>{opt}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {showQuizResults && (
                        <div className="mt-4 rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-4 text-xs text-stone-700 leading-relaxed">
                          <span className="font-bold text-stone-900">Explanation: </span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!showQuizResults && (
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setShowQuizResults(true)}
                    className="flex items-center gap-2 rounded-xl bg-[#f97316] px-6 py-2.5 text-xs font-bold text-white hover:bg-orange-600 shadow-xs cursor-pointer"
                  >
                    <Check className="h-4 w-4" /> Submit Examination
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 8. COMPETENCY MATRIX TAB */}
        {activeTab === "matrix" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex justify-between items-center text-xs font-semibold mb-2">
                <span className="text-stone-700 font-bold">25 Production Architecture Competencies</span>
                <span className="text-[#f97316] font-mono font-bold">
                  {completedCompetenciesCount} / {competencies.length} ({competencyProgressPercent}%)
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-stone-200 overflow-hidden">
                <div
                  className="h-full bg-[#f97316] transition-all duration-300"
                  style={{ width: `${competencyProgressPercent}%` }}
                />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {competencies.map((comp) => {
                  const isChecked = checkedCompetencies[comp.id];
                  return (
                    <button
                      key={comp.id}
                      onClick={() => toggleCompetency(comp.id)}
                      className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all cursor-pointer ${
                        isChecked
                          ? "border-orange-300 bg-orange-50/60 text-stone-900"
                          : "border-[#e7e3da] bg-white text-stone-700 hover:border-stone-300"
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                          isChecked
                            ? "border-[#f97316] bg-[#f97316] text-white"
                            : "border-stone-300 bg-white"
                        }`}
                      >
                        {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="block text-[10px] font-mono font-bold text-[#f97316] uppercase">
                          {comp.category}
                        </span>
                        <span className="text-xs font-medium leading-relaxed">{comp.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 9. OFFICIAL SPECS & REFERENCES TAB */}
        {activeTab === "specs" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <Layers className="h-5 w-5 text-[#f97316]" />
                Authoritative Architectural Specifications
              </h2>
              <p className="mt-1 text-xs text-stone-500">
                Official standards, RFCs, and documentation referenced throughout Module 23.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {recommendedResources.map((res, i) => (
                  <a
                    key={i}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-[#e7e3da] bg-white p-5 hover:border-orange-400 hover:shadow-xs transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="rounded-md bg-orange-100 text-orange-800 font-mono font-bold px-2 py-0.5">
                          {res.category}
                        </span>
                        <ExternalLink className="h-4 w-4 text-stone-400" />
                      </div>
                      <h3 className="mt-3 text-sm font-bold text-stone-900">{res.title}</h3>
                      <p className="mt-2 text-xs text-stone-600 leading-relaxed">{res.description}</p>
                    </div>
                    <div className="mt-4 font-mono text-[11px] text-[#f97316] truncate">{res.url}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 sm:p-8 font-mono text-xs text-stone-700 space-y-4 shadow-xs">
              <h3 className="text-base font-bold text-stone-900 font-sans">
                Summary of Core Architectural Equations
              </h3>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-4 space-y-1">
                  <div className="text-stone-500 font-sans text-xs">Little's Law (Concurrent In-Flight Load)</div>
                  <div className="font-bold text-stone-900 text-sm">L = &lambda; &times; W</div>
                </div>
                <div className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-4 space-y-1">
                  <div className="text-stone-500 font-sans text-xs">Total Token Cost</div>
                  <div className="font-bold text-stone-900 text-sm">C = (T_in &times; P_in) + (T_out &times; P_out)</div>
                </div>
                <div className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-4 space-y-1">
                  <div className="text-stone-500 font-sans text-xs">Reciprocal Rank Fusion (RRF)</div>
                  <div className="font-bold text-stone-900 text-sm">RRF(d) = &sum; 1 / (60 + rank(d))</div>
                </div>
                <div className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-4 space-y-1">
                  <div className="text-stone-500 font-sans text-xs">Jittered Exponential Backoff</div>
                  <div className="font-bold text-stone-900 text-sm">t_wait = random(0, min(max_b, base &times; 2^attempt))</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
