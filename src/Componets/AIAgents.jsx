import React, { useState } from "react";
import {
  Terminal,
  ShieldCheck,
  Award,
  ExternalLink,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Clock,
  Copy,
  Check,
  CheckCircle2,
  RotateCcw,
  Target,
  HelpCircle,
  Code2,
  Wrench
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  overview,
  curriculumUnits,
  practicalLabs,
  capstoneProject,
  codingAssignments,
  theoryQuestions,
  quizQuestions,
  competenciesChecklist,
  learningResources
} from "./aiAgentsData";
import {
  ReactLoopExecutionSimulator,
  FunctionCallingSchemaValidator,
  MultiAgentHandoffVisualizer,
  AgentStateMachineCheckpointExplorer,
  McpProtocolInspector
} from "./AIAgentsDiagrams";

export default function AIAgents() {
  const [activeTab, setActiveTab] = useState("curriculum");
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0);
  const [copiedCodeIdx, setCopiedCodeIdx] = useState(null);

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
    setCheckedCompetencies((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCompetenciesCount = Object.values(checkedCompetencies).filter(Boolean).length;
  const competencyProgressPercent = Math.round(
    (completedCompetenciesCount / competenciesChecklist.length) * 100
  );

  const activeUnit = curriculumUnits[selectedUnitIdx];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white pb-24">
      <ModuleNav track="ai" currentModuleId="ai-agents" />

      {/* Hero Header */}
      <header className="border-b border-stone-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3 py-0.5 text-xs font-mono font-bold text-orange-800">
              Module {overview.moduleNumber}
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-0.5 text-xs font-semibold text-stone-700">
              {overview.difficulty}
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-xs font-semibold text-emerald-800">
              {overview.recommendedDuration}
            </span>
            <span className="rounded-full bg-purple-50 border border-purple-200 px-3 py-0.5 text-xs font-semibold text-purple-800">
              Model Context Protocol (MCP)
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight break-words">
            {overview.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-4xl leading-relaxed">
            {overview.centralLearningObjective}
          </p>

          {/* Quick Stats Grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-medium">
            <div className="rounded-xl border border-stone-200 bg-stone-50/70 p-3">
              <span className="text-stone-500 block text-[11px] mb-0.5">Primary Languages</span>
              <span className="font-bold text-stone-900">{overview.primaryLanguage}</span>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50/70 p-3">
              <span className="text-stone-500 block text-[11px] mb-0.5">Core Libraries</span>
              <span className="font-bold text-stone-900">{overview.mainLibraries}</span>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50/70 p-3">
              <span className="text-stone-500 block text-[11px] mb-0.5">Control Paradigm</span>
              <span className="font-bold text-stone-900">ReAct & Plan-and-Execute</span>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50/70 p-3">
              <span className="text-stone-500 block text-[11px] mb-0.5">Security & State</span>
              <span className="font-bold text-stone-900">FSM + Zod + Checkpoints</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Tabbed Navigation */}
      <div className="sticky top-0 z-30 border-b border-stone-200 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2.5 scrollbar-none text-xs sm:text-sm font-semibold">
            {[
              { id: "curriculum", label: "Curriculum", icon: BookOpen },
              { id: "interactive-tools", label: "Interactive Tools", icon: Wrench },
              { id: "labs", label: "Hands-on Labs (6)", icon: Terminal },
              { id: "project", label: "Capstone Co-Pilot", icon: Target },
              { id: "exercises", label: "15 Coding Tasks", icon: Code2 },
              { id: "theory", label: "30 Theory Questions", icon: HelpCircle },
              { id: "quiz", label: "Examination Quiz", icon: Award },
              { id: "tracker", label: "Competency Matrix", icon: ShieldCheck },
              { id: "resources", label: "Official Specs", icon: ExternalLink }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-150 ${
                    activeTab === tab.id
                      ? "bg-[#f97316] text-white shadow-xs font-bold"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Container Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* TAB 1: CURRICULUM */}
        {activeTab === "curriculum" && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Syllabus Navigator */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-xs relative lg:sticky lg:top-20 max-h-72 sm:max-h-96 lg:max-h-[calc(100vh-6rem)] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
                <span className="font-bold text-xs uppercase tracking-wider text-stone-700">
                  Course Roadmap (12 Units)
                </span>
                <span className="text-[11px] font-mono text-orange-700 font-bold">
                  Unit {selectedUnitIdx + 1} of {curriculumUnits.length}
                </span>
              </div>
              <div className="space-y-1.5">
                {curriculumUnits.map((unit, idx) => (
                  <button
                    key={unit.id}
                    onClick={() => {
                      setSelectedUnitIdx(idx);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`w-full text-left p-2.5 rounded-xl transition-all duration-150 flex items-start gap-2.5 text-xs ${
                      idx === selectedUnitIdx
                        ? "bg-orange-50 border border-orange-200 text-orange-950 font-bold shadow-2xs"
                        : "hover:bg-stone-50 text-stone-700 border border-transparent"
                    }`}
                  >
                    <span
                      className={`rounded-md px-1.5 py-0.5 font-mono text-[10px] shrink-0 ${
                        idx === selectedUnitIdx
                          ? "bg-orange-600 text-white font-bold"
                          : "bg-stone-100 text-stone-600"
                      }`}
                    >
                      {unit.unitNumber}
                    </span>
                    <span className="line-clamp-2 leading-relaxed">{unit.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Unit Content Display */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200/80 pb-4 mb-6">
                  <div>
                    <span className="font-mono text-xs font-bold text-orange-700 block mb-1">
                      UNIT {activeUnit.unitNumber}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                      {activeUnit.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 italic font-medium">
                      "{activeUnit.tagline}"
                    </p>
                  </div>
                  <span className="flex items-center gap-1 rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs text-stone-600 font-mono">
                    <Clock size={12} />
                    {activeUnit.readTime}
                  </span>
                </div>

                {/* Key Concepts Pills */}
                <div className="mb-8">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-2">
                    Key Architectural Concepts Covered
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeUnit.keyConcepts.map((concept, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-stone-100 border border-stone-200/90 px-2.5 py-1 text-xs font-medium text-stone-800"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subsections */}
                <div className="space-y-8">
                  {activeUnit.content.map((sec, secIdx) => (
                    <section key={secIdx} className="space-y-3">
                      <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight border-l-3 border-orange-600 pl-3">
                        {sec.heading}
                      </h3>
                      <p className="text-stone-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                        {sec.text}
                      </p>

                      {sec.formula && (
                        <div className="my-3 rounded-xl border border-orange-200 bg-orange-50/60 p-4 font-mono text-xs sm:text-sm text-orange-950 overflow-x-auto text-center font-bold">
                          {sec.formula}
                        </div>
                      )}

                      {sec.bullets && (
                        <ul className="space-y-1.5 my-3 pl-2">
                          {sec.bullets.map((b, bIdx) => (
                            <li
                              key={bIdx}
                              className="text-xs sm:text-sm text-stone-700 flex items-start gap-2"
                            >
                              <span className="text-orange-600 font-bold shrink-0 mt-0.5">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {sec.table && (
                        <div className="my-4 overflow-x-auto rounded-xl border border-stone-200">
                          <table className="w-full text-left text-xs">
                            <thead className="bg-stone-100 border-b border-stone-200 font-bold text-stone-800">
                              <tr>
                                {sec.table.headers.map((h, hIdx) => (
                                  <th key={hIdx} className="p-3">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100 text-stone-700">
                              {sec.table.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-stone-50/80">
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className="p-3">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {sec.codeSnippet && (
                        <div className="relative my-4 rounded-xl border border-stone-800 bg-stone-900 p-4 text-stone-200 font-mono text-xs overflow-x-auto">
                          <button
                            onClick={() => handleCopyCode(sec.codeSnippet, `sec-${secIdx}`)}
                            className="absolute top-3 right-3 rounded-md bg-stone-800 p-1.5 text-stone-400 hover:text-white hover:bg-stone-700 transition"
                            title="Copy Code"
                          >
                            {copiedCodeIdx === `sec-${secIdx}` ? (
                              <Check size={14} className="text-emerald-400" />
                            ) : (
                              <Copy size={14} />
                            )}
                          </button>
                          <pre className="overflow-x-auto text-xs font-mono">{sec.codeSnippet}</pre>
                        </div>
                      )}
                    </section>
                  ))}
                </div>

                {/* Bottom Unit Pagination */}
                <div className="mt-10 pt-6 border-t border-stone-200 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (selectedUnitIdx > 0) {
                        setSelectedUnitIdx(selectedUnitIdx - 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    disabled={selectedUnitIdx === 0}
                    className="flex items-center gap-1.5 rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-40"
                  >
                    <ArrowLeft size={14} />
                    <span>Previous Unit</span>
                  </button>

                  <span className="text-xs text-stone-500 font-mono">
                    Unit {selectedUnitIdx + 1} of {curriculumUnits.length}
                  </span>

                  <button
                    onClick={() => {
                      if (selectedUnitIdx < curriculumUnits.length - 1) {
                        setSelectedUnitIdx(selectedUnitIdx + 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    disabled={selectedUnitIdx === curriculumUnits.length - 1}
                    className="flex items-center gap-1.5 rounded-lg bg-stone-900 px-4 py-1.5 text-xs font-semibold text-white hover:bg-stone-800 disabled:opacity-40"
                  >
                    <span>Next Unit</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE TOOLS */}
        {activeTab === "interactive-tools" && (
          <div className="space-y-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-1 flex items-center gap-2">
                <Wrench className="text-orange-600" size={24} />
                Agentic Engineering Interactive Visualizer Suite
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Interactive computational sandboxes demonstrating ReAct execution loops, strict JSON Schema validation, multi-agent coordination, FSM state checkpointing, and Model Context Protocol (MCP) wire communication.
              </p>
            </div>

            <ReactLoopExecutionSimulator />
            <FunctionCallingSchemaValidator />
            <MultiAgentHandoffVisualizer />
            <AgentStateMachineCheckpointExplorer />
            <McpProtocolInspector />
          </div>
        )}

        {/* TAB 3: HANDS-ON LABS */}
        {activeTab === "labs" && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                <Terminal className="text-orange-600" size={24} />
                6 Hands-On Practical Laboratories
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Step-by-step engineering laboratories moving from basic Python function-calling to full Model Context Protocol server construction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {practicalLabs.map((lab) => (
                <div
                  key={lab.id}
                  className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="rounded-full bg-orange-100 border border-orange-200 px-2.5 py-0.5 text-[11px] font-bold text-orange-800 font-mono">
                        {lab.difficulty}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-stone-500 font-mono">
                        <Clock size={12} />
                        {lab.duration}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 mb-2">{lab.title}</h3>
                    <p className="text-xs text-stone-600 mb-3 leading-relaxed">{lab.description}</p>

                    <div className="rounded-xl border border-stone-100 bg-stone-50 p-3 mb-4 text-xs">
                      <span className="font-bold text-stone-800 block mb-1">Target Objective:</span>
                      <p className="text-stone-700">{lab.objective}</p>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1.5">
                        Lab Deliverables:
                      </span>
                      <ul className="space-y-1">
                        {lab.deliverables.map((d, i) => (
                          <li key={i} className="text-xs text-stone-700 flex items-center gap-2">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-stone-500 font-mono">{lab.id}</span>
                    <button
                      onClick={() => setActiveTab("curriculum")}
                      className="font-semibold text-orange-700 hover:text-orange-800 flex items-center gap-1"
                    >
                      <span>Review Unit Theory</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CAPSTONE PROJECT */}
        {activeTab === "project" && (
          <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="rounded-full bg-purple-100 border border-purple-200 px-3 py-1 text-xs font-mono font-bold text-purple-900 inline-block mb-2">
                Major Capstone Project • {capstoneProject.estimatedHours}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                {capstoneProject.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-4xl leading-relaxed">
                {capstoneProject.overview}
              </p>
            </div>

            {/* Architecture Layers */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800 mb-3">
                System Architectural Layers
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                {capstoneProject.architectureLayers.map((layer, idx) => (
                  <div key={idx} className="rounded-xl border border-stone-200 bg-stone-50/80 p-3.5">
                    <span className="font-mono font-bold text-orange-700 block mb-1">
                      Layer 0{idx + 1}
                    </span>
                    <p className="text-stone-800 font-medium leading-relaxed">{layer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Functional Requirements */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800 mb-3">
                Functional Requirements Checklist
              </h3>
              <div className="space-y-2">
                {capstoneProject.functionalRequirements.map((fr, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-stone-200 bg-white p-3 text-xs text-stone-800 flex items-start gap-2.5"
                  >
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{fr}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Evaluation Rubric */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800 mb-3">
                100-Point Evaluation Rubric
              </h3>
              <div className="overflow-x-auto rounded-xl border border-stone-200 text-xs">
                <table className="w-full text-left">
                  <thead className="bg-stone-100 border-b border-stone-200 font-bold text-stone-800">
                    <tr>
                      <th className="p-3">Evaluation Criterion</th>
                      <th className="p-3 w-20 text-center">Marks</th>
                      <th className="p-3">Engineering Expectation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    {capstoneProject.evaluationRubric.map((r, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/80">
                        <td className="p-3 font-semibold text-stone-900">{r.criterion}</td>
                        <td className="p-3 text-center font-mono font-bold text-orange-700">
                          {r.marks}
                        </td>
                        <td className="p-3 leading-relaxed">{r.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: 15 CODING TASKS */}
        {activeTab === "exercises" && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                <Code2 className="text-orange-600" size={24} />
                15 Practical Coding Assignments
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Implement core algorithms across function calling, ReAct control loops, DAG validation, FSM state machines, and MCP servers.
              </p>
            </div>

            <div className="space-y-4">
              {codingAssignments.map((task) => (
                <div
                  key={task.id}
                  className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-stone-500">
                        {task.id.toUpperCase()}
                      </span>
                      <h3 className="font-bold text-stone-900 text-sm sm:text-base">{task.title}</h3>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold font-mono ${
                        task.difficulty === "Easy"
                          ? "bg-emerald-100 text-emerald-800"
                          : task.difficulty === "Medium"
                          ? "bg-amber-100 text-amber-800"
                          : task.difficulty === "Hard"
                          ? "bg-rose-100 text-rose-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {task.difficulty}
                    </span>
                  </div>

                  <p className="text-xs text-stone-700 mb-3 leading-relaxed">{task.description}</p>

                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 mb-3 text-xs">
                    <span className="font-bold text-stone-800 block mb-0.5">Verification Test Criteria:</span>
                    <p className="text-stone-600">{task.testCriteria}</p>
                  </div>

                  <div className="relative rounded-xl border border-stone-800 bg-stone-900 p-3 text-stone-200 font-mono text-xs overflow-x-auto">
                    <button
                      onClick={() => handleCopyCode(task.starterStub, task.id)}
                      className="absolute top-2.5 right-2.5 rounded-md bg-stone-800 p-1 text-stone-400 hover:text-white"
                      title="Copy Starter Stub"
                    >
                      {copiedCodeIdx === task.id ? (
                        <Check size={13} className="text-emerald-400" />
                      ) : (
                        <Copy size={13} />
                      )}
                    </button>
                    <pre className="overflow-x-auto text-xs font-mono">{task.starterStub}</pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: 30 THEORY QUESTIONS */}
        {activeTab === "theory" && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                <HelpCircle className="text-orange-600" size={24} />
                30 University Examination Theory Questions
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Rigorous interview and comprehensive examination questions with expert model engineering answers.
              </p>
            </div>

            <div className="space-y-4">
              {theoryQuestions.map((item, idx) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    <span className="rounded-lg bg-orange-100 text-orange-900 font-mono font-bold text-xs px-2 py-1 shrink-0">
                      Q{idx + 1}
                    </span>
                    <div className="space-y-2">
                      <h3 className="font-bold text-stone-900 text-sm">{item.question}</h3>
                      <div className="rounded-xl border border-stone-100 bg-stone-50/80 p-3 text-xs text-stone-700 leading-relaxed">
                        <span className="font-bold text-stone-900 block mb-1">Model Answer:</span>
                        <p>{item.modelAnswer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: QUIZ */}
        {activeTab === "quiz" && (
          <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-orange-700 block mb-0.5">
                  MODULE 13 KNOWLEDGE EXAMINATION
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-stone-900">
                  Interactive Knowledge Assessment
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-mono font-bold text-stone-800">
                  {Object.keys(userAnswers).length} / {quizQuestions.length} Answered
                </span>
                <button
                  onClick={handleResetQuiz}
                  className="rounded-lg border border-stone-300 p-1.5 text-stone-600 hover:bg-stone-50"
                  title="Reset Exam"
                >
                  <RotateCcw size={15} />
                </button>
              </div>
            </div>

            {/* Score Banner when Submitted */}
            {showQuizResults && (
              <div
                className={`rounded-xl p-4 border text-center ${
                  calculateScore() >= 8
                    ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                    : "bg-amber-50 border-amber-200 text-amber-950"
                }`}
              >
                <span className="text-2xl font-black font-mono block">
                  {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                </span>
                <span className="text-xs font-semibold mt-1 block">
                  {calculateScore() >= 8
                    ? "Distinction! You have demonstrated deep mastery of AI Agent architectures, function calling, state management, and MCP."
                    : "Good attempt! Review the curriculum units on control loops, state durability, and least-privilege security before retrying."}
                </span>
              </div>
            )}

            {/* Questions List */}
            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const selected = userAnswers[q.id];
                const isCorrect = selected === q.correctIndex;

                return (
                  <div key={q.id} className="rounded-xl border border-stone-200 bg-stone-50/50 p-4 sm:p-5">
                    <span className="text-xs font-mono font-bold text-orange-700 block mb-1">
                      Question {idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-3">
                      {q.question}
                    </h3>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = "border-stone-200 bg-white text-stone-800 hover:bg-stone-50";

                        if (selected === optIdx) {
                          btnStyle = "border-orange-500 bg-orange-50 text-orange-950 font-semibold ring-1 ring-orange-300";
                        }

                        if (showQuizResults) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-300";
                          } else if (selected === optIdx && !isCorrect) {
                            btnStyle = "border-rose-400 bg-rose-50 text-rose-950";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleAnswerSelect(q.id, optIdx)}
                            disabled={showQuizResults}
                            className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all duration-150 flex items-start gap-2.5 ${btnStyle}`}
                          >
                            <span className="font-mono font-bold text-[11px] text-stone-500 shrink-0 mt-0.5">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {showQuizResults && (
                      <div className="mt-3 rounded-lg border border-stone-200 bg-white p-3 text-xs text-stone-700 leading-relaxed">
                        <span className="font-bold text-stone-900 block mb-0.5">Explanation:</span>
                        <p>{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-stone-200 flex justify-end">
              {!showQuizResults ? (
                <button
                  onClick={() => setShowQuizResults(true)}
                  disabled={Object.keys(userAnswers).length === 0}
                  className="rounded-lg bg-orange-600 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-orange-700 disabled:opacity-40"
                >
                  Submit Examination
                </button>
              ) : (
                <button
                  onClick={handleResetQuiz}
                  className="rounded-lg bg-stone-900 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-stone-800"
                >
                  Retake Examination
                </button>
              )}
            </div>
          </div>
        )}

        {/* TAB 8: COMPETENCY MATRIX */}
        {activeTab === "tracker" && (
          <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs max-w-4xl mx-auto space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs font-bold text-orange-700 block mb-0.5">
                SELF-DIRECTED PROGRESS AUDIT
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-stone-900">
                20 Core Agent Engineering Competencies
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Track your real-world readiness to design, build, and deploy production-grade autonomous agent systems.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
              <div className="flex items-center justify-between text-xs font-semibold text-stone-800 mb-2">
                <span>Overall Mastery Progress</span>
                <span className="font-mono text-orange-700 font-bold">
                  {completedCompetenciesCount} / {competenciesChecklist.length} ({competencyProgressPercent}%)
                </span>
              </div>
              <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-orange-600 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${competencyProgressPercent}%` }}
                />
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-2.5">
              {competenciesChecklist.map((c) => {
                const isChecked = checkedCompetencies[c.id];
                return (
                  <button
                    key={c.id}
                    onClick={() => toggleCompetency(c.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-150 flex items-start gap-3 text-xs sm:text-sm ${
                      isChecked
                        ? "bg-emerald-50/80 border-emerald-300 text-emerald-950 font-medium"
                        : "bg-white border-stone-200 text-stone-800 hover:bg-stone-50"
                    }`}
                  >
                    <div
                      className={`h-4 w-4 rounded-md border mt-0.5 flex items-center justify-center shrink-0 transition-all ${
                        isChecked
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "border-stone-300 bg-white"
                      }`}
                    >
                      {isChecked && <Check size={12} strokeWidth={3} />}
                    </div>
                    <span className="leading-relaxed">{c.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 9: RESOURCES */}
        {activeTab === "resources" && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-stone-200 pb-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                <ExternalLink className="text-orange-600" size={24} />
                Recommended Official Specifications & Research
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Authoritative research papers, open protocol standards, and framework documentation for AI Agent systems.
              </p>
            </div>

            <div className="space-y-4">
              {learningResources.map((res, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="rounded-full bg-stone-100 border border-stone-200 px-2.5 py-0.5 text-[10px] font-bold font-mono text-stone-600 uppercase">
                      {res.type}
                    </span>
                    <h3 className="font-bold text-stone-900 text-base">{res.title}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed max-w-2xl">
                      {res.description}
                    </p>
                  </div>

                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-stone-300 bg-stone-50 px-4 py-2 text-xs font-semibold text-stone-800 hover:bg-stone-100 flex items-center gap-1.5 shrink-0"
                  >
                    <span>Read Official Docs</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
