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
  Filter
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  scratchLlmMeta,
  curriculumUnits,
  guidedLabs,
  capstoneProject,
  codingAssignments,
  theoryQuestions,
  quizQuestions,
  competencies,
  recommendedResources
} from "./aiScratchLlmData";
import {
  CausalSelfAttentionMatrixVisualizer,
  BpeMergeTokenizerVisualizer,
  TransformerParameterCalculator,
  AutoregressiveGenerationSamplerVisualizer,
  TrainingLossPerplexitySimulator
} from "./AIScratchLlmDiagrams";

export default function AIScratchLlm() {
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

  const competencyProgress = Math.round(
    (Object.values(checkedCompetencies).filter(Boolean).length /
      competencies.length) *
      100
  );

  const theoryCategories = [
    "All",
    ...Array.from(new Set(theoryQuestions.map((q) => q.category)))
  ];

  const filteredTheory = theoryQuestions.filter((q) => {
    const matchesCat = theoryCategory === "All" || q.category === theoryCategory;
    const matchesSearch =
      q.question.toLowerCase().includes(theorySearch.toLowerCase()) ||
      q.answer.toLowerCase().includes(theorySearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Top Navigation */}
      <ModuleNav track="ai" currentModuleId="scratch-slm" />

      {/* Hero Header */}
      <header className="relative border-b border-[#e7e3da] bg-white/70 backdrop-blur-md px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ea580c]">
              {scratchLlmMeta.badge}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-stone-400">
              <Clock className="h-3.5 w-3.5 text-stone-500" />
              {scratchLlmMeta.duration}
            </span>
            <span className="rounded-full border border-[#e7e3da] bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600">
              {scratchLlmMeta.level}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Module {scratchLlmMeta.moduleNumber}: {scratchLlmMeta.title}
          </h1>
          <p className="mt-3 max-w-4xl text-base text-stone-600 sm:text-lg">
            {scratchLlmMeta.subtitle}
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-stone-600">
            {scratchLlmMeta.summary}
          </p>

          {/* Quick Stats Grid */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            <div className="rounded-xl border border-[#e7e3da] bg-white shadow-xs p-3">
              <div className="text-xs font-medium text-stone-500">Curriculum</div>
              <div className="mt-1 text-xl font-bold text-orange-700">12 Units</div>
            </div>
            <div className="rounded-xl border border-[#e7e3da] bg-white shadow-xs p-3">
              <div className="text-xs font-medium text-stone-500">Interactive Tools</div>
              <div className="mt-1 text-xl font-bold text-violet-400">5 Simulators</div>
            </div>
            <div className="rounded-xl border border-[#e7e3da] bg-white shadow-xs p-3">
              <div className="text-xs font-medium text-stone-500">Guided Labs</div>
              <div className="mt-1 text-xl font-bold text-amber-400">6 Practical Labs</div>
            </div>
            <div className="rounded-xl border border-[#e7e3da] bg-white shadow-xs p-3">
              <div className="text-xs font-medium text-stone-500">Coding Tasks</div>
              <div className="mt-1 text-xl font-bold text-emerald-400">18 Exercises</div>
            </div>
            <div className="rounded-xl border border-[#e7e3da] bg-white shadow-xs p-3">
              <div className="text-xs font-medium text-stone-500">Theory Mastery</div>
              <div className="mt-1 text-xl font-bold text-sky-400">30 Q&As</div>
            </div>
            <div className="rounded-xl border border-[#e7e3da] bg-white shadow-xs p-3">
              <div className="text-xs font-medium text-stone-500">Exam Questions</div>
              <div className="mt-1 text-xl font-bold text-rose-400">12 Evaluation Qs</div>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="sticky top-0 z-30 border-b border-[#e7e3da] bg-[#f6f4ee]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl overflow-x-auto px-4 py-2 sm:px-6 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x min-w-0">
          <div className="flex space-x-1 sm:space-x-2 shrink-0">
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
                  className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#f97316] text-white shadow-xs font-bold"
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
              <div className="relative lg:sticky lg:top-20 rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-4">
                <div className="mb-3 text-xs font-bold uppercase tracking-wider text-stone-400">
                  Course Units (12 Modules)
                </div>
                <div className="space-y-1.5 max-h-72 sm:max-h-96 lg:max-h-[70vh] overflow-y-auto pr-1">
                  {curriculumUnits.map((unit, idx) => (
                    <button
                      key={unit.id}
                      onClick={() => setSelectedUnitIdx(idx)}
                      className={`w-full text-left rounded-xl p-3 text-xs font-semibold transition-all flex items-start gap-2.5 ${
                        selectedUnitIdx === idx
                          ? "bg-orange-50 text-orange-950 border border-orange-200 shadow-2xs font-bold"
                          : "text-stone-700 hover:bg-stone-50 border border-transparent"
                      }`}
                    >
                      <span className="font-mono text-stone-500 mt-0.5">{unit.number}</span>
                      <div className="flex-1">
                        <div className="line-clamp-1 text-stone-200">{unit.title}</div>
                        <div className="text-[10px] text-stone-500 mt-0.5">{unit.readTime} · {unit.tag}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Reading View */}
            <div className="lg:col-span-8">
              {curriculumUnits[selectedUnitIdx] && (
                <div className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-4">
                    <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-semibold text-[#ea580c]">
                      Unit {curriculumUnits[selectedUnitIdx].number} · {curriculumUnits[selectedUnitIdx].tag}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-stone-400">
                      <Clock className="h-3.5 w-3.5 text-stone-500" />
                      {curriculumUnits[selectedUnitIdx].readTime} read
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-bold text-stone-900 sm:text-3xl">
                    {curriculumUnits[selectedUnitIdx].title}
                  </h2>

                  <div className="mt-3 rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {curriculumUnits[selectedUnitIdx].summary}
                  </div>

                  {/* Unit Content Renderer */}
                  <div className="prose prose-stone mt-6 max-w-none text-stone-700 text-sm sm:text-base leading-relaxed space-y-4">
                    {curriculumUnits[selectedUnitIdx].content
                      .split("\n\n")
                      .map((paragraph, pIdx) => {
                        if (paragraph.startsWith("### ")) {
                          return (
                            <h3 key={pIdx} className="text-xl font-bold text-stone-900 mt-8 mb-2">
                              {paragraph.replace("### ", "")}
                            </h3>
                          );
                        }
                        if (paragraph.startsWith("#### ")) {
                          return (
                            <h4 key={pIdx} className="text-base font-semibold text-[#ea580c] mt-4 mb-1">
                              {paragraph.replace("#### ", "")}
                            </h4>
                          );
                        }
                        if (paragraph.startsWith("```python") || paragraph.startsWith("```")) {
                          const code = paragraph.replace(/```python|```/g, "").trim();
                          return (
                            <div key={pIdx} className="relative my-4 rounded-xl border border-[#e7e3da] bg-[#1c1917] p-4 font-mono text-xs sm:text-sm text-stone-100">
                              <button
                                onClick={() => handleCopyCode(code, `unit-${selectedUnitIdx}-${pIdx}`)}
                                className="absolute right-3 top-3 rounded-lg border border-stone-700 bg-stone-800 px-2 py-1 text-xs text-stone-300 hover:text-white cursor-pointer"
                              >
                                {copiedCodeIdx === `unit-${selectedUnitIdx}-${pIdx}` ? (
                                  <span className="flex items-center gap-1 text-emerald-400">
                                    <Check className="h-3.5 w-3.5" /> Copied
                                  </span>
                                ) : (
                                  <span className="flex items-center gap-1">
                                    <Copy className="h-3.5 w-3.5" /> Copy
                                  </span>
                                )}
                              </button>
                              <pre className="overflow-x-auto text-stone-300 pt-4">{code}</pre>
                            </div>
                          );
                        }
                        return <p key={pIdx}>{paragraph}</p>;
                      })}
                  </div>

                  {/* Prev / Next Pagination */}
                  <div className="mt-10 flex items-center justify-between border-t border-[#e7e3da] pt-6">
                    <button
                      onClick={() => setSelectedUnitIdx(Math.max(0, selectedUnitIdx - 1))}
                      disabled={selectedUnitIdx === 0}
                      className="flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-white px-4 py-2.5 text-xs font-semibold text-stone-700 hover:bg-[#faf8f4] disabled:opacity-30 shadow-xs cursor-pointer"
                    >
                      <ArrowLeft className="h-4 w-4" /> Previous Unit
                    </button>
                    <button
                      onClick={() =>
                        setSelectedUnitIdx(Math.min(curriculumUnits.length - 1, selectedUnitIdx + 1))
                      }
                      disabled={selectedUnitIdx === curriculumUnits.length - 1}
                      className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-950/50 hover:bg-indigo-500 disabled:opacity-30"
                    >
                      Next Unit <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 2. INTERACTIVE TOOLS TAB */}
        {activeTab === "interactive" && (
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                Interactive Architecture & Training Simulators
              </h2>
              <p className="mt-1 text-sm text-stone-600">
                Explore the mathematical foundations of decoder-only transformers with live zero-lag interactive visualizers.
              </p>
            </div>

            <CausalSelfAttentionMatrixVisualizer />
            <BpeMergeTokenizerVisualizer />
            <TransformerParameterCalculator />
            <AutoregressiveGenerationSamplerVisualizer />
            <TrainingLossPerplexitySimulator />
          </div>
        )}

        {/* 3. GUIDED LABS TAB */}
        {activeTab === "labs" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                Hands-On Guided Engineering Laboratories
              </h2>
              <p className="mt-1 text-sm text-stone-600">
                Six practical laboratories guiding you through building every layer of a small language model in pure PyTorch.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {guidedLabs.map((lab) => (
                <div key={lab.id} className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="rounded-full bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 text-amber-400 font-mono">
                        {lab.number}
                      </span>
                      <span className="text-stone-500">{lab.time}</span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-stone-900">{lab.title}</h3>
                    <p className="mt-2 text-xs text-stone-600 leading-relaxed">{lab.scenario}</p>

                    <div className="mt-4 space-y-2 border-t border-[#e7e3da] pt-3 text-xs">
                      <div>
                        <span className="font-semibold text-stone-700">Objective: </span>
                        <span className="text-stone-400">{lab.objective}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-stone-700">Deliverable: </span>
                        <code className="text-orange-700 font-mono text-[11px]">{lab.deliverable}</code>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="inline-block rounded-lg border border-[#e7e3da] bg-[#faf8f4] px-3 py-1.5 text-xs text-stone-600">
                      Difficulty: <strong className="text-stone-200">{lab.difficulty}</strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. CAPSTONE PROJECT TAB */}
        {activeTab === "capstone" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-6 sm:p-8">
              <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-semibold text-orange-700">
                {capstoneProject.tag}
              </span>
              <h2 className="mt-3 text-2xl font-bold text-stone-900 sm:text-3xl">
                {capstoneProject.title}
              </h2>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed max-w-4xl">
                {capstoneProject.summary}
              </p>

              {/* Specs Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 font-mono text-xs">
                {Object.entries(capstoneProject.specifications).map(([key, val], idx) => (
                  <div key={idx} className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-3">
                    <div className="text-stone-500 capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
                    <div className="mt-1 font-bold text-stone-200">{val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones Stepper */}
            <div className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-6 sm:p-8">
              <h3 className="text-xl font-bold text-stone-900">Project Implementation Milestones</h3>
              <div className="mt-6 space-y-4">
                {capstoneProject.milestones.map((m) => (
                  <div key={m.step} className="flex gap-4 rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f97316] font-mono text-xs font-bold text-white shadow-xs">
                      0{m.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">{m.name}</h4>
                      <p className="mt-1 text-xs text-stone-400 leading-relaxed">{m.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 5. CODING TASKS TAB */}
        {activeTab === "tasks" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                18 Production Coding Assignments
              </h2>
              <p className="mt-1 text-sm text-stone-600">
                Self-contained PyTorch exercises implementing tokenizers, attention heads, residual blocks, loss functions, and sampling algorithms.
              </p>
            </div>

            <div className="space-y-4">
              {codingAssignments.map((task) => (
                <div key={task.id} className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-orange-700">{task.id}</span>
                      <h3 className="text-base font-bold text-stone-900">{task.title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-stone-100 border border-stone-200 px-2.5 py-0.5 text-xs text-stone-600">
                        {task.category}
                      </span>
                      <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                        {task.difficulty}
                      </span>
                    </div>
                  </div>

                  <p className="mt-2 text-xs text-stone-300 leading-relaxed">{task.description}</p>
                  <div className="mt-2 text-[11px] text-stone-500 font-mono">
                    <strong>Test Verification: </strong>{task.testCases}
                  </div>

                  {/* Starter Code Block */}
                  <div className="relative mt-4 rounded-xl border border-[#e7e3da] bg-[#1c1917] p-4 font-mono text-xs text-stone-200">
                    <button
                      onClick={() => handleCopyCode(task.starterCode, `starter-${task.id}`)}
                      className="absolute right-3 top-3 rounded-lg border border-[#e7e3da] bg-stone-100 px-2 py-1 text-xs text-stone-400 hover:text-stone-200"
                    >
                      {copiedCodeIdx === `starter-${task.id}` ? "Copied" : "Copy Starter"}
                    </button>
                    <pre className="overflow-x-auto pt-2">{task.starterCode}</pre>
                  </div>

                  {/* Toggle Solution */}
                  <div className="mt-3">
                    <button
                      onClick={() => toggleTaskSolution(task.id)}
                      className="text-xs font-semibold text-orange-700 hover:text-indigo-300 flex items-center gap-1"
                    >
                      {expandedTaskSol[task.id] ? "Hide Solution" : "Reveal Solution"}
                    </button>

                    {expandedTaskSol[task.id] && (
                      <div className="relative mt-2 rounded-xl border border-emerald-800 bg-[#0f291e] p-4 font-mono text-xs text-emerald-300">
                        <button
                          onClick={() => handleCopyCode(task.solutionCode, `sol-${task.id}`)}
                          className="absolute right-3 top-3 rounded-lg border border-emerald-500/30 bg-emerald-900/40 px-2 py-1 text-xs text-emerald-300 hover:text-emerald-100"
                        >
                          {copiedCodeIdx === `sol-${task.id}` ? "Copied" : "Copy Solution"}
                        </button>
                        <pre className="overflow-x-auto pt-2">{task.solutionCode}</pre>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. THEORY QUESTIONS TAB */}
        {activeTab === "theory" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                30 Technical Theory & Architecture Questions
              </h2>
              <p className="mt-1 text-sm text-stone-600">
                Rigorous interview and architectural questions explaining attention mechanics, mathematical derivations, and training optimization.
              </p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-stone-500" />
                <input
                  type="text"
                  placeholder="Search theory questions..."
                  value={theorySearch}
                  onChange={(e) => setTheorySearch(e.target.value)}
                  className="w-full rounded-xl border border-[#e7e3da] bg-white pl-10 pr-4 py-2 text-xs text-stone-900 outline-none focus:border-[#f97316]"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <Filter className="h-4 w-4 text-stone-500 shrink-0" />
                {theoryCategories.slice(0, 5).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setTheoryCategory(cat)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold whitespace-nowrap transition-all ${
                      theoryCategory === cat
                        ? "bg-[#f97316] text-white shadow-xs font-bold"
                        : "bg-white text-stone-600 border border-[#e7e3da] hover:border-orange-300 hover:text-stone-900"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {filteredTheory.map((item, idx) => (
                <div key={item.id} className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-6">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-mono text-orange-700 font-bold">Q{idx + 1}</span>
                    <span className="rounded-full bg-stone-100 border border-stone-200 px-2.5 py-0.5 text-stone-600">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-stone-900">{item.question}</h3>
                  <div className="mt-3 rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. EXAMINATION QUIZ TAB */}
        {activeTab === "quiz" && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-[#e7e3da] pb-4">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                  Module 22 Knowledge Assessment
                </h2>
                <p className="mt-1 text-sm text-stone-600">
                  12 comprehensive examination questions validating your mastery of transformer construction from scratch.
                </p>
              </div>

              <div className="flex items-center gap-3">
                {showQuizResults ? (
                  <button
                    onClick={handleResetQuiz}
                    className="flex items-center gap-1.5 rounded-xl border border-[#e7e3da] bg-white px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-[#faf8f4] shadow-xs cursor-pointer"
                  >
                    <RotateCcw className="h-4 w-4" /> Retake Examination
                  </button>
                ) : (
                  <button
                    onClick={() => setShowQuizResults(true)}
                    className="rounded-xl bg-[#f97316] px-5 py-2 text-xs font-bold text-white shadow-xs hover:bg-orange-600 cursor-pointer"
                  >
                    Submit Examination
                  </button>
                )}
              </div>
            </div>

            {/* Score Banner if completed */}
            {showQuizResults && (
              <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-orange-700 font-bold">
                    Official Exam Results
                  </div>
                  <div className="mt-1 text-3xl font-black text-stone-900">
                    Score: {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                  </div>
                  <p className="mt-1 text-xs text-stone-400">
                    {calculateScore() >= 10
                      ? "Outstanding performance! You have thoroughly mastered Small Language Model architecture and PyTorch implementation."
                      : "Good effort! Review the detailed question explanations below to solidify your transformer foundations."}
                  </p>
                </div>
              </div>
            )}

            {/* Questions List */}
            <div className="space-y-6">
              {quizQuestions.map((q, qIdx) => (
                <div key={q.id} className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-6">
                  <div className="text-xs font-mono font-bold text-orange-700">
                    Question {qIdx + 1} of {quizQuestions.length}
                  </div>
                  <h3 className="mt-2 text-base font-bold text-stone-900">{q.question}</h3>

                  <div className="mt-4 space-y-2">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = userAnswers[q.id] === optIdx;
                      const isCorrect = q.correctIndex === optIdx;
                      let btnStyle = "border-[#e7e3da] bg-[#faf8f4] text-stone-700 hover:border-orange-300 hover:bg-orange-50/30";

                      if (showQuizResults) {
                        if (isCorrect) {
                          btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold shadow-xs";
                        } else if (isSelected && !isCorrect) {
                          btnStyle = "border-rose-500 bg-rose-50 text-rose-900";
                        }
                      } else if (isSelected) {
                        btnStyle = "border-[#f97316] bg-orange-50 text-orange-950 font-bold shadow-xs";
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleAnswerSelect(q.id, optIdx)}
                          className={`w-full text-left rounded-xl border p-3.5 text-xs sm:text-sm transition-all flex items-start gap-3 ${btnStyle}`}
                        >
                          <span className="font-mono text-stone-500 font-semibold mt-0.5">
                            {String.fromCharCode(65 + optIdx)}.
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation Card */}
                  {showQuizResults && (
                    <div className="mt-4 rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-4 text-xs text-stone-700 leading-relaxed">
                      <span className="font-bold text-orange-700">Pedagogical Explanation: </span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. COMPETENCY MATRIX TAB */}
        {activeTab === "matrix" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                25 Engineering Competencies Checklist
              </h2>
              <p className="mt-1 text-sm text-stone-600">
                Track your practical and mathematical mastery of decoder-only Small Language Models.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-6">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-stone-300">Competency Progress:</span>
                <span className="text-orange-700">{competencyProgress}% Completed</span>
              </div>
              <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-stone-200">
                <div
                  className="h-full bg-[#f97316] transition-all duration-300"
                  style={{ width: `${competencyProgress}%` }}
                />
              </div>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {competencies.map((comp) => {
                const isChecked = !!checkedCompetencies[comp.id];
                return (
                  <div
                    key={comp.id}
                    onClick={() => toggleCompetency(comp.id)}
                    className={`cursor-pointer rounded-2xl border p-4 transition-all flex items-start gap-3.5 ${
                      isChecked
                        ? "border-emerald-400 bg-emerald-50/80 text-emerald-950"
                        : "border-[#e7e3da] bg-white text-stone-700 hover:border-orange-300"
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border transition-all ${
                        isChecked
                          ? "border-emerald-500 bg-emerald-600 text-white"
                          : "border-[#e7e3da] bg-[#faf8f4]"
                      }`}
                    >
                      {isChecked && <Check className="h-3.5 w-3.5" />}
                    </div>
                    <div>
                      <div className="text-xs font-mono text-stone-500">{comp.category}</div>
                      <h4 className="text-sm font-bold text-white mt-0.5">{comp.title}</h4>
                      <p className="mt-1 text-xs text-stone-400 leading-relaxed">{comp.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 9. OFFICIAL SPECS & RESOURCES TAB */}
        {activeTab === "specs" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                Authoritative Specifications & Reading
              </h2>
              <p className="mt-1 text-sm text-stone-600">
                Foundational papers, open-source repositories, and mathematical references for transformer engineering.
              </p>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {recommendedResources.map((res) => (
                <a
                  key={res.id}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-5 hover:border-indigo-500/50 hover:bg-stone-100 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="rounded-full bg-stone-800 px-2.5 py-0.5 text-stone-400">
                        {res.type}
                      </span>
                      <ExternalLink className="h-3.5 w-3.5 text-stone-500 group-hover:text-orange-700" />
                    </div>
                    <h3 className="mt-3 text-base font-bold text-stone-900 group-hover:text-indigo-300">
                      {res.title}
                    </h3>
                    <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                      {res.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Mathematical Cheat Sheet */}
            <div className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-6 sm:p-8 font-mono text-xs text-stone-300 space-y-4">
              <h3 className="text-lg font-bold text-stone-900 font-sans">
                Transformer Mathematical Cheat Sheet
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-4 space-y-1">
                  <div className="text-stone-500">Scaled Attention</div>
                  <div className="text-indigo-300 font-bold">Attention(Q, K, V) = softmax(QK^T / √d_k + M) V</div>
                </div>
                <div className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-4 space-y-1">
                  <div className="text-stone-500">Feed-Forward Network (GELU)</div>
                  <div className="text-indigo-300 font-bold">FFN(x) = W_2 · GELU(W_1 x + b_1) + b_2</div>
                </div>
                <div className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-4 space-y-1">
                  <div className="text-stone-500">Pre-LayerNorm Block</div>
                  <div className="text-indigo-300 font-bold">x = x + Attn(LN1(x)); x = x + FFN(LN2(x))</div>
                </div>
                <div className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-4 space-y-1">
                  <div className="text-stone-500">Perplexity Formulation</div>
                  <div className="text-indigo-300 font-bold">PPL = exp(-1/N ∑ log P(y_i)) = e^Loss</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
