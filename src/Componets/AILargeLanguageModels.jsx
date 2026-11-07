import React, { useState } from "react";
import {
  Sliders,
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
  FileCode,
  RotateCcw,
  Target,
  Calculator,
  HelpCircle,
  Zap,
  Code2
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  LLM_MODULE_OVERVIEW,
  LLM_CURRICULUM_UNITS,
  LLM_PRACTICAL_LABS,
  LLM_CAPSTONE_PROJECT,
  LLM_ASSIGNMENTS,
  LLM_UNIVERSITY_RESOURCES,
  LLM_EXAMINATION_QUESTIONS,
  LLM_COMPETENCY_CHECKLIST
} from "./aiLlmCurriculumData";
import {
  AutoregressiveGenerationSimulator,
  KVCacheMemoryCalculator,
  ModelParameterAndMemoryExplorer,
  BpeTokenizerVisualizer,
  ContextBudgetExplorer
} from "./AILlmDiagrams";

export default function AILargeLanguageModels() {
  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'interactive-tools' | 'labs' | 'project' | 'exercises' | 'quiz' | 'tracker' | 'resources'

  // Unit explorer state
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0);
  const [copiedCodeIdx, setCopiedCodeIdx] = useState(null);

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Competency tracker state
  const [completedCompetencies, setCompletedCompetencies] = useState(new Set());

  const activeUnit = LLM_CURRICULUM_UNITS[selectedUnitIdx] || LLM_CURRICULUM_UNITS[0];

  const handleCopyCode = (codeText, idx) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  const handleSelectQuizOption = (qIdx, optIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const calculateQuizScore = () => {
    let score = 0;
    LLM_EXAMINATION_QUESTIONS.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const toggleCompetency = (idx) => {
    setCompletedCompetencies((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f6f0] text-stone-900 antialiased selection:bg-orange-500 selection:text-white">
      {/* Universal Course Navigation */}
      <ModuleNav
        currentModuleId="llms"
        track="ai"
        moduleTitle="Module 07: Large Language Models: GPT, Llama & Qwen"
      />

      {/* Hero Header */}
      <header className="border-b border-[#e7e3da] bg-white/70 backdrop-blur-md pt-8 pb-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-orange-100 text-orange-800 border border-orange-200">
              Module 07
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-stone-100 text-stone-600 border border-stone-200">
              {LLM_MODULE_OVERVIEW.difficulty} • {LLM_MODULE_OVERVIEW.recommendedDuration}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
              PyTorch + GPT + Llama + Qwen
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-stone-900 mb-2">
            Large Language Models: GPT, Llama & Qwen
          </h1>
          <p className="text-sm sm:text-base text-stone-600 max-w-4xl leading-relaxed">
            {LLM_MODULE_OVERVIEW.centralLearningObjective}
          </p>

          {/* Quick Stats Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            <div className="p-3 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
              <div className="text-[10px] text-stone-500 uppercase font-bold tracking-wider">Curriculum Scope</div>
              <div className="text-xl font-black text-stone-900 font-mono mt-0.5">10 Core Units</div>
              <div className="text-[11px] text-stone-500">24 Exhaustive Sections</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
              <div className="text-[10px] text-stone-500 uppercase font-bold tracking-wider">Interactive Simulators</div>
              <div className="text-xl font-black text-orange-600 font-mono mt-0.5">5 Simulators</div>
              <div className="text-[11px] text-stone-500">KV Cache, Decoding, BPE</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
              <div className="text-[10px] text-stone-500 uppercase font-bold tracking-wider">Hands-On Labs</div>
              <div className="text-xl font-black text-stone-900 font-mono mt-0.5">8 Practical Labs</div>
              <div className="text-[11px] text-stone-500">PyTorch + Tokenizers</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
              <div className="text-[10px] text-stone-500 uppercase font-bold tracking-wider">Capstone Project</div>
              <div className="text-xl font-black text-emerald-600 font-mono mt-0.5">MiniGPT AI</div>
              <div className="text-[11px] text-stone-500">Scratch Model + Pretrained</div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-1.5 border-b border-stone-200 mt-6 pt-2">
            {[
              { id: "curriculum", label: "Curriculum Units", icon: BookOpen },
              { id: "interactive-tools", label: "Interactive Simulators", icon: Sliders },
              { id: "labs", label: "Practical Labs (8)", icon: Terminal },
              { id: "project", label: "MiniGPT Capstone", icon: Award },
              { id: "exercises", label: "Assignments & Math", icon: Calculator },
              { id: "quiz", label: "Module Exam (10)", icon: HelpCircle },
              { id: "tracker", label: "Competency Tracker", icon: ShieldCheck },
              { id: "resources", label: "Academic Resources", icon: ExternalLink }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-t-xl text-xs font-bold transition border-b-2 cursor-pointer ${
                    isActive
                      ? "border-orange-600 text-orange-700 bg-white shadow-2xs"
                      : "border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-100/60"
                  }`}
                >
                  <Icon size={14} className={isActive ? "text-orange-600" : "text-stone-400"} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        {/* ========================================================
            TAB 1: CURRICULUM EXPLORER
        ======================================================== */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Unit Selector */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 p-4 shadow-sm space-y-2 sticky top-6">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Course Roadmap</span>
                <span className="text-xs font-mono font-semibold text-orange-600">Unit {selectedUnitIdx + 1} of 10</span>
              </div>

              <div className="space-y-1.5 max-h-[70vh] overflow-y-auto pr-1">
                {LLM_CURRICULUM_UNITS.map((unit, idx) => {
                  const isSelected = selectedUnitIdx === idx;
                  return (
                    <button
                      key={unit.id}
                      onClick={() => setSelectedUnitIdx(idx)}
                      className={`w-full text-left p-3 rounded-xl text-xs transition border cursor-pointer ${
                        isSelected
                          ? "bg-orange-50 border-orange-300 text-orange-950 font-bold shadow-2xs"
                          : "bg-white border-transparent text-stone-700 hover:bg-stone-50 hover:border-stone-200"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] text-stone-400 mb-1">
                        <span>Unit {unit.unitNumber.toString().padStart(2, "0")}</span>
                        <span>{unit.duration}</span>
                      </div>
                      <div className="font-semibold line-clamp-1">{unit.title}</div>
                    </button>
                  );
                })}
              </div>

              {/* Roadmap Overview Box */}
              <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-1">
                <div className="font-bold text-stone-700">Learning Trajectory:</div>
                <p>From decoder-only fundamentals and next-token prediction to multi-billion parameter scaling, local serving, and MiniGPT from scratch.</p>
              </div>
            </div>

            {/* Active Unit Deep-Dive Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4 mb-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                      Unit {activeUnit.unitNumber.toString().padStart(2, "0")} Deep Dive
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      {activeUnit.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200">
                      <Clock size={12} className="inline mr-1 text-stone-400" />
                      {activeUnit.duration}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">
                      {activeUnit.level}
                    </span>
                  </div>
                </div>

                {/* Core Concept Pills */}
                <div className="mb-6 p-4 rounded-xl bg-orange-50/60 border border-orange-200/70">
                  <div className="text-xs font-bold text-orange-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Target size={14} className="text-orange-600" />
                    Key Learning Objectives
                  </div>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {activeUnit.coreConcepts.map((concept, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-orange-600 shrink-0 mt-0.5" />
                        <span>{concept}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deep-Dive Text Content */}
                <div className="prose prose-stone max-w-none text-xs sm:text-sm text-stone-700 leading-relaxed space-y-4">
                  {activeUnit.deepDiveText.split("\n\n").map((para, pIdx) => {
                    if (para.startsWith("### ")) {
                      return (
                        <h3 key={pIdx} className="text-base sm:text-lg font-bold text-stone-900 pt-3 pb-1 border-b border-stone-100">
                          {para.replace("### ", "")}
                        </h3>
                      );
                    }
                    if (para.startsWith("#### ")) {
                      return (
                        <h4 key={pIdx} className="text-sm sm:text-base font-bold text-stone-800 pt-2">
                          {para.replace("#### ", "")}
                        </h4>
                      );
                    }
                    if (para.startsWith("> ")) {
                      return (
                        <div key={pIdx} className="p-3.5 rounded-xl bg-stone-100 border-l-4 border-orange-600 text-stone-800 italic text-xs leading-relaxed">
                          {para.replace("> ", "")}
                        </div>
                      );
                    }
                    if (para.startsWith("| ")) {
                      // Markdown table render
                      const lines = para.split("\n").filter((l) => l.trim() && !l.includes("---"));
                      if (lines.length > 0) {
                        const headers = lines[0].split("|").filter(Boolean).map((h) => h.trim());
                        const rows = lines.slice(1).map((r) => r.split("|").filter(Boolean).map((c) => c.trim()));
                        return (
                          <div key={pIdx} className="overflow-x-auto my-4 rounded-xl border border-stone-200">
                            <table className="min-w-full text-xs text-left">
                              <thead className="bg-stone-100 font-bold text-stone-800 border-b border-stone-200">
                                <tr>
                                  {headers.map((h, hIdx) => (
                                    <th key={hIdx} className="p-2.5">{h}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-stone-200 font-sans">
                                {rows.map((row, rIdx) => (
                                  <tr key={rIdx} className="hover:bg-stone-50">
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className="p-2.5 font-normal">{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                      }
                    }
                    return <p key={pIdx}>{para}</p>;
                  })}
                </div>

                {/* PyTorch Code Implementation */}
                {activeUnit.codeSnippet && (
                  <div className="mt-8 rounded-xl border border-stone-800 bg-stone-950 p-4 text-emerald-400 font-mono text-xs overflow-x-auto relative">
                    <div className="flex items-center justify-between border-b border-stone-800 pb-2 mb-3 text-stone-400">
                      <span className="flex items-center gap-1.5 text-[11px] font-bold">
                        <FileCode size={13} className="text-orange-400" />
                        PyTorch Architecture Implementation
                      </span>
                      <button
                        onClick={() => handleCopyCode(activeUnit.codeSnippet, selectedUnitIdx)}
                        className="flex items-center gap-1 px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 text-[10px] transition cursor-pointer"
                      >
                        {copiedCodeIdx === selectedUnitIdx ? (
                          <>
                            <Check size={12} className="text-emerald-400" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            Copy Code
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="text-emerald-400 leading-relaxed">{activeUnit.codeSnippet}</pre>
                  </div>
                )}

                {/* Challenges & Exercises */}
                {activeUnit.challenges && activeUnit.challenges.length > 0 && (
                  <div className="mt-6 p-4 rounded-xl bg-amber-50/50 border border-amber-200">
                    <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Zap size={14} className="text-amber-600" />
                      Engineering Challenges & Critical Thinking
                    </div>
                    <ul className="space-y-1.5 text-xs text-stone-700 list-disc pl-5">
                      {activeUnit.challenges.map((challenge, chIdx) => (
                        <li key={chIdx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Next / Previous Navigation */}
                <div className="flex justify-between items-center border-t border-stone-100 pt-6 mt-8">
                  <button
                    disabled={selectedUnitIdx === 0}
                    onClick={() => setSelectedUnitIdx((prev) => Math.max(0, prev - 1))}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border border-stone-200 bg-white hover:bg-stone-50 disabled:opacity-40 transition cursor-pointer"
                  >
                    <ArrowLeft size={14} />
                    Previous Unit
                  </button>
                  <button
                    disabled={selectedUnitIdx === LLM_CURRICULUM_UNITS.length - 1}
                    onClick={() => setSelectedUnitIdx((prev) => Math.min(LLM_CURRICULUM_UNITS.length - 1, prev + 1))}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-40 transition cursor-pointer"
                  >
                    Next Unit
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 2: INTERACTIVE SIMULATORS
        ======================================================== */}
        {activeTab === "interactive-tools" && (
          <div className="space-y-8">
            <AutoregressiveGenerationSimulator />
            <KVCacheMemoryCalculator />
            <ModelParameterAndMemoryExplorer />
            <BpeTokenizerVisualizer />
            <ContextBudgetExplorer />
          </div>
        )}

        {/* ========================================================
            TAB 3: PRACTICAL LABS
        ======================================================== */}
        {activeTab === "labs" && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-orange-950">8 University Laboratory Experiments:</span> From Pre-LN causal masking and BPE subwords to shifted sequence cross-entropy, MiniGPT training, and local open-weight inference profiling.
            </div>

            <div className="grid grid-cols-1 gap-6">
              {LLM_PRACTICAL_LABS.map((lab, lIdx) => (
                <div key={lab.id} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-orange-100 text-orange-700 font-mono font-bold flex items-center justify-center text-xs">
                        {lab.labNumber}
                      </span>
                      <h3 className="text-base font-bold text-stone-900">{lab.title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-stone-100 text-stone-600 border border-stone-200">
                        {lab.difficulty}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                        {lab.estimatedTime}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    <strong>Objective: </strong>{lab.objective}
                  </p>

                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wider">Required Tasks:</span>
                    <ul className="space-y-1 text-xs text-stone-600 list-disc pl-5">
                      {lab.tasks.map((task, tIdx) => (
                        <li key={tIdx}>{task}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Runnable PyTorch Code */}
                  <div className="rounded-xl border border-stone-800 bg-stone-950 p-4 text-emerald-400 font-mono text-xs overflow-x-auto relative">
                    <div className="flex items-center justify-between border-b border-stone-800 pb-2 mb-3 text-stone-400">
                      <span className="text-[10px] font-bold text-orange-400">Executable Laboratory Script</span>
                      <button
                        onClick={() => handleCopyCode(lab.code, `lab-${lIdx}`)}
                        className="flex items-center gap-1 px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 text-[10px] transition cursor-pointer"
                      >
                        {copiedCodeIdx === `lab-${lIdx}` ? (
                          <>
                            <Check size={12} className="text-emerald-400" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            Copy Lab Code
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="text-emerald-400 leading-relaxed">{lab.code}</pre>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                    <strong>Expected Laboratory Outcome: </strong>
                    <span className="text-emerald-700 font-semibold">{lab.expectedOutcome}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 4: CAPSTONE PROJECT
        ======================================================== */}
        {activeTab === "project" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
                <div>
                  <span className="text-xs font-bold font-mono text-orange-600 uppercase tracking-wider">
                    Section 19 • Mandatory Capstone Project
                  </span>
                  <h2 className="text-2xl font-extrabold text-stone-900 mt-1">
                    {LLM_CAPSTONE_PROJECT.title}
                  </h2>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800 border border-orange-200">
                  {LLM_CAPSTONE_PROJECT.duration}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {LLM_CAPSTONE_PROJECT.description}
              </p>

              {/* 6 Engineering Phases */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                  System Architecture & 6 Implementation Phases
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {LLM_CAPSTONE_PROJECT.phases.map((phase) => (
                    <div key={phase.phaseNumber} className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-orange-700">
                        <span className="w-5 h-5 rounded-full bg-orange-200 text-orange-900 flex items-center justify-center text-[10px]">
                          {phase.phaseNumber}
                        </span>
                        <span>Phase {phase.phaseNumber}: {phase.title}</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">{phase.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 100-Mark Rubric */}
              <div className="space-y-3 pt-4 border-t border-stone-100">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                  Capstone Evaluation Rubric (100 Marks Total)
                </h3>
                <div className="overflow-x-auto rounded-xl border border-stone-200">
                  <table className="min-w-full text-xs text-left">
                    <thead className="bg-stone-100 font-bold text-stone-800 border-b border-stone-200">
                      <tr>
                        <th className="p-3">Component</th>
                        <th className="p-3">Weight</th>
                        <th className="p-3">Evaluation Criteria</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {LLM_CAPSTONE_PROJECT.rubric.map((r, rIdx) => (
                        <tr key={rIdx} className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">{r.component}</td>
                          <td className="p-3 font-mono font-bold text-orange-600">{r.marks} Marks</td>
                          <td className="p-3 text-stone-600">{r.criteria}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 5: ASSIGNMENTS & MATHEMATICAL EXERCISES
        ======================================================== */}
        {activeTab === "exercises" && (
          <div className="space-y-8">
            {/* Assignment B: Mathematical Problems */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
              <div className="border-b border-stone-100 pb-3">
                <span className="text-xs font-mono font-bold text-orange-600 uppercase">Assignment B</span>
                <h3 className="text-lg font-bold text-stone-900 mt-0.5">Mathematical Problems with Worked Solutions</h3>
                <p className="text-xs text-stone-500">Derive parameter storage, Softmax probabilities, cross-entropy, context budgets, KV cache, and 6ND compute</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {LLM_ASSIGNMENTS.mathProblems.map((prob) => (
                  <div key={prob.problemNumber} className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-stone-800 border-b border-stone-200 pb-2">
                      <span>Problem {prob.problemNumber}: {prob.title}</span>
                      <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-mono text-[10px]">Mathematical</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">{prob.description}</p>
                    
                    <div className="p-3 rounded-lg bg-white border border-stone-200 space-y-1.5 text-xs font-mono">
                      <div className="text-[10px] uppercase font-bold text-stone-400">Step-by-step derivation:</div>
                      {prob.solutionSteps.map((step, sIdx) => (
                        <div key={sIdx} className="text-stone-700">{step}</div>
                      ))}
                      <div className="pt-2 border-t border-stone-100 text-orange-700 font-bold">
                        Result: {prob.finalAnswer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assignment A: 30 Conceptual Questions */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-4">
              <div className="border-b border-stone-100 pb-3">
                <span className="text-xs font-mono font-bold text-orange-600 uppercase">Assignment A</span>
                <h3 className="text-lg font-bold text-stone-900 mt-0.5">30 Core Conceptual Questions</h3>
                <p className="text-xs text-stone-500">Essential university-grade theoretical questions spanning LLM architecture and systems engineering</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-700">
                {LLM_ASSIGNMENTS.conceptualQuestions.map((q, qIdx) => (
                  <div key={qIdx} className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-700 font-mono text-[10px] flex items-center justify-center shrink-0 font-bold">
                      {qIdx + 1}
                    </span>
                    <span className="leading-relaxed">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Assignment C: 15 Programming Challenges */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-4">
              <div className="border-b border-stone-100 pb-3">
                <span className="text-xs font-mono font-bold text-orange-600 uppercase">Assignment C</span>
                <h3 className="text-lg font-bold text-stone-900 mt-0.5">15 Independent Programming Challenges</h3>
                <p className="text-xs text-stone-500">PyTorch, tokenization, inference engines, and benchmarking implementations</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-700">
                {LLM_ASSIGNMENTS.programmingChallenges.map((challenge, cIdx) => (
                  <div key={cIdx} className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2">
                    <Code2 size={14} className="text-orange-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 6: EXAMINATION (10 QUESTIONS)
        ======================================================== */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-orange-600 uppercase">Section 22</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-0.5">
                  Module 07 Examination: LLM Engineering Assessment
                </h2>
                <p className="text-xs text-stone-500">10 Comprehensive Multiple-Choice Questions Testing Core Competencies</p>
              </div>

              {quizSubmitted ? (
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold">
                    Score: <span className="font-mono text-orange-600 text-base">{calculateQuizScore()}</span> / 10
                  </span>
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setQuizAnswers({});
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 text-stone-700 hover:bg-stone-200 transition"
                  >
                    <RotateCcw size={12} />
                    Retake Exam
                  </button>
                </div>
              ) : (
                <button
                  disabled={Object.keys(quizAnswers).length < LLM_EXAMINATION_QUESTIONS.length}
                  onClick={() => setQuizSubmitted(true)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-40 transition cursor-pointer"
                >
                  Submit Examination ({Object.keys(quizAnswers).length}/10 answered)
                </button>
              )}
            </div>

            <div className="space-y-6">
              {LLM_EXAMINATION_QUESTIONS.map((q, qIdx) => {
                const selectedOpt = quizAnswers[qIdx];
                return (
                  <div key={qIdx} className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-800 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {qIdx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-stone-900 leading-snug">{q.question}</h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-8">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";
                        if (selectedOpt === optIdx) {
                          btnStyle = "bg-orange-100 border-orange-400 text-orange-950 font-bold";
                        }
                        if (quizSubmitted) {
                          if (optIdx === q.correctAnswer) {
                            btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                          } else if (selectedOpt === optIdx && optIdx !== q.correctAnswer) {
                            btnStyle = "bg-red-100 border-red-300 text-red-950";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => handleSelectQuizOption(qIdx, optIdx)}
                            className={`p-3 rounded-lg border text-left text-xs transition cursor-pointer ${btnStyle}`}
                          >
                            <span className="font-mono mr-2">{String.fromCharCode(65 + optIdx)}.</span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="pl-8 pt-2 text-xs text-stone-600 border-t border-stone-200/80">
                        <strong className="text-stone-800">Explanation: </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 7: COMPETENCY TRACKER
        ======================================================== */}
        {activeTab === "tracker" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-orange-600 uppercase">Section 23</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-0.5">
                  Module 07 Competency Tracker (19 Checkpoints)
                </h2>
                <p className="text-xs text-stone-500">Track your mastery across mathematical derivations, PyTorch coding, and LLM serving</p>
              </div>

              <div className="text-right">
                <div className="text-2xl font-black text-orange-600 font-mono">
                  {((completedCompetencies.size / LLM_COMPETENCY_CHECKLIST.length) * 100).toFixed(0)}%
                </div>
                <div className="text-[11px] text-stone-500">
                  {completedCompetencies.size} of {LLM_COMPETENCY_CHECKLIST.length} Mastered
                </div>
              </div>
            </div>

            <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden border border-stone-200">
              <div
                className="bg-gradient-to-r from-orange-500 to-amber-500 h-full transition-all duration-300"
                style={{ width: `${(completedCompetencies.size / LLM_COMPETENCY_CHECKLIST.length) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {LLM_COMPETENCY_CHECKLIST.map((comp, idx) => {
                const isChecked = completedCompetencies.has(idx);
                return (
                  <div
                    key={idx}
                    onClick={() => toggleCompetency(idx)}
                    className={`p-3.5 rounded-xl border text-xs flex items-start gap-3 cursor-pointer transition select-none ${
                      isChecked
                        ? "bg-emerald-50/70 border-emerald-300 text-emerald-950 font-semibold"
                        : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100/70"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 transition ${
                        isChecked ? "bg-emerald-600 text-white" : "border border-stone-300 bg-white"
                      }`}
                    >
                      {isChecked && <Check size={12} strokeWidth={3} />}
                    </div>
                    <span className="leading-snug">{comp}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 8: ACADEMIC RESOURCES
        ======================================================== */}
        {activeTab === "resources" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-3">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase">Section 21</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-0.5">
                University-Level Learning Resources & Academic Papers
              </h2>
              <p className="text-xs text-stone-500">Foundational research papers, documentation, and university courses</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {LLM_UNIVERSITY_RESOURCES.map((res, rIdx) => (
                <a
                  key={rIdx}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-orange-50/50 hover:border-orange-300 transition group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-stone-900 group-hover:text-orange-700 transition leading-snug">
                        {res.title}
                      </h4>
                      <ExternalLink size={14} className="text-stone-400 group-hover:text-orange-600 shrink-0 mt-0.5" />
                    </div>
                    <div className="text-[11px] font-mono text-stone-500 font-semibold">{res.authors}</div>
                    <p className="text-xs text-stone-600 leading-relaxed">{res.description}</p>
                  </div>
                  <span className="text-[11px] font-bold text-orange-600 mt-3 flex items-center gap-1">
                    Explore Research Paper / Guide &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
