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
  FileCode,
  RotateCcw,
  Target,
  Calculator,
  HelpCircle,
  Code2
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  VECTOR_DB_MODULE_OVERVIEW,
  VECTOR_DB_CURRICULUM_UNITS,
  VECTOR_DB_PRACTICAL_LABS,
  VECTOR_DB_CAPSTONE_PROJECT,
  VECTOR_DB_ASSIGNMENTS,
  VECTOR_DB_UNIVERSITY_RESOURCES,
  VECTOR_DB_EXAMINATION_QUESTIONS,
  VECTOR_DB_COMPETENCY_CHECKLIST
} from "./aiVectorDatabasesData";
import {
  CosineSimilarityVisualizer,
  FaissIndexComparisonExplorer,
  DocumentChunkingInteractivePlayground,
  HybridSearchRrfSimulator,
  ChromaMetadataFilterSandbox
} from "./AIVectorDatabasesDiagrams";

export default function AIVectorDatabases() {
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

  const handleAnswerSelect = (questionId, optionIdx) => {
    if (showQuizResults) return;
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    VECTOR_DB_EXAMINATION_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  const toggleCompetency = (idx) => {
    setCheckedCompetencies((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const completedCompetenciesCount = Object.values(checkedCompetencies).filter(Boolean).length;
  const progressPercent = Math.round(
    (completedCompetenciesCount / VECTOR_DB_COMPETENCY_CHECKLIST.length) * 100
  );

  const activeUnit = VECTOR_DB_CURRICULUM_UNITS[selectedUnitIdx];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Top Navigation */}
      <ModuleNav />

      {/* Hero Header */}
      <header className="relative border-b border-stone-200/80 bg-white/70 backdrop-blur-md px-4 sm:px-6 py-8 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3 py-0.5 text-xs font-mono font-bold uppercase text-orange-800">
              Module {VECTOR_DB_MODULE_OVERVIEW.moduleNumber}
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-0.5 text-xs font-mono font-bold text-stone-600">
              {VECTOR_DB_MODULE_OVERVIEW.difficulty}
            </span>
            <span className="rounded-full bg-emerald-100 border border-emerald-200 px-3 py-0.5 text-xs font-mono font-bold text-emerald-800 flex items-center gap-1">
              <Clock size={12} /> {VECTOR_DB_MODULE_OVERVIEW.recommendedDuration}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight">
            {VECTOR_DB_MODULE_OVERVIEW.title}
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-stone-600 max-w-4xl leading-relaxed">
            {VECTOR_DB_MODULE_OVERVIEW.centralLearningObjective}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500">
            <div>
              <span className="font-semibold text-stone-700">Libraries:</span> {VECTOR_DB_MODULE_OVERVIEW.mainLibraries}
            </div>
            <div>
              <span className="font-semibold text-stone-700">Tools:</span> {VECTOR_DB_MODULE_OVERVIEW.supportingTools}
            </div>
            <div>
              <span className="font-semibold text-stone-700">Outcome:</span> {VECTOR_DB_MODULE_OVERVIEW.finalOutcome}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="sticky top-0 z-30 border-b border-stone-200/90 bg-white/90 backdrop-blur-md px-4 sm:px-6 overflow-x-auto">
        <div className="mx-auto max-w-6xl flex gap-1 sm:gap-2 py-2">
          {[
            { id: "curriculum", label: "Curriculum Units", icon: BookOpen },
            { id: "interactive-tools", label: "Interactive Simulators (5)", icon: Sliders },
            { id: "labs", label: "Practical Labs (6)", icon: Terminal },
            { id: "project", label: "Capstone Project", icon: Award },
            { id: "exercises", label: "Assignments & Math", icon: Calculator },
            { id: "quiz", label: "Module Examination", icon: ShieldCheck },
            { id: "tracker", label: "Competency Tracker", icon: Target },
            { id: "resources", label: "Academic Resources", icon: ExternalLink }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Container */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        {/* TAB 1: CURRICULUM UNITS */}
        {activeTab === "curriculum" && (
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Units Sidebar */}
            <aside className="lg:col-span-4 space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-2">
                10 Core Curriculum Units
              </div>
              <div className="space-y-1.5">
                {VECTOR_DB_CURRICULUM_UNITS.map((unit, idx) => {
                  const isSelected = selectedUnitIdx === idx;
                  return (
                    <button
                      key={unit.id}
                      onClick={() => setSelectedUnitIdx(idx)}
                      className={`w-full text-left rounded-xl p-3 text-xs transition border cursor-pointer ${
                        isSelected
                          ? "bg-white border-orange-400 shadow-xs text-stone-900"
                          : "bg-white/60 border-stone-200/70 hover:bg-white text-stone-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[10px] font-bold uppercase text-orange-600">
                          Unit {unit.unitNumber}
                        </span>
                        <span className="font-mono text-[10px] text-stone-400">{unit.readTime}</span>
                      </div>
                      <div className="font-bold line-clamp-1">{unit.title}</div>
                      <div className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">{unit.tagline}</div>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Selected Unit Content */}
            <article className="lg:col-span-8 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-6">
                <div>
                  <span className="rounded-full bg-orange-100 border border-orange-200 px-3 py-0.5 text-xs font-mono font-bold text-orange-800">
                    Unit {activeUnit.unitNumber}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-2">
                    {activeUnit.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-orange-700 font-semibold mt-1">
                    {activeUnit.tagline}
                  </p>
                </div>
                <span className="text-xs font-mono text-stone-500">{activeUnit.readTime}</span>
              </div>

              {/* Key Concept Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {activeUnit.keyConcepts.map((kc, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-stone-100 border border-stone-200/80 px-2 py-0.5 text-[11px] font-mono font-medium text-stone-700"
                  >
                    {kc}
                  </span>
                ))}
              </div>

              {/* Content Sections */}
              <div className="space-y-6 text-sm text-stone-700 leading-relaxed">
                {activeUnit.content.map((sec, idx) => (
                  <section key={idx} className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 border-b border-stone-100 pb-1">
                      {sec.heading}
                    </h3>
                    <p>{sec.text}</p>

                    {sec.bullets && (
                      <ul className="space-y-1.5 pl-4 list-disc text-stone-600 text-xs sm:text-sm">
                        {sec.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    )}

                    {sec.table && (
                      <div className="overflow-x-auto my-4 rounded-xl border border-stone-200">
                        <table className="min-w-full divide-y divide-stone-200 font-sans text-xs">
                          <thead className="bg-stone-50 font-bold text-stone-800">
                            <tr>
                              {sec.table.headers.map((h, hIdx) => (
                                <th key={hIdx} className="px-3 py-2 text-left">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-100 bg-white">
                            {sec.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-stone-50/50">
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className={`px-3 py-2 ${
                                      cIdx === 0 ? "font-semibold text-stone-900" : "text-stone-600"
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </section>
                ))}

                {/* Code Snippet Box */}
                {activeUnit.codeSnippet && (
                  <div className="mt-6 rounded-xl border border-stone-800 bg-stone-900 overflow-hidden shadow-md">
                    <div className="flex items-center justify-between bg-stone-950 px-4 py-2 text-xs font-mono text-stone-400 border-b border-stone-800">
                      <div className="flex items-center gap-2">
                        <FileCode size={14} className="text-orange-400" />
                        <span>{activeUnit.codeSnippet.filename}</span>
                      </div>
                      <button
                        onClick={() =>
                          handleCopyCode(activeUnit.codeSnippet.code, `code-${selectedUnitIdx}`)
                        }
                        className="flex items-center gap-1 text-stone-400 hover:text-white transition cursor-pointer"
                      >
                        {copiedCodeIdx === `code-${selectedUnitIdx}` ? (
                          <>
                            <Check size={12} className="text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 text-xs font-mono text-stone-200 overflow-x-auto leading-relaxed">
                      <code>{activeUnit.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Bottom Pagination */}
              <div className="flex items-center justify-between border-t border-stone-200/80 pt-6 mt-8">
                <button
                  disabled={selectedUnitIdx === 0}
                  onClick={() => setSelectedUnitIdx((prev) => Math.max(0, prev - 1))}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    selectedUnitIdx === 0
                      ? "text-stone-300 cursor-not-allowed"
                      : "text-stone-700 hover:bg-stone-100 cursor-pointer"
                  }`}
                >
                  <ArrowLeft size={14} /> Previous Unit
                </button>

                <button
                  disabled={selectedUnitIdx === VECTOR_DB_CURRICULUM_UNITS.length - 1}
                  onClick={() =>
                    setSelectedUnitIdx((prev) =>
                      Math.min(VECTOR_DB_CURRICULUM_UNITS.length - 1, prev + 1)
                    )
                  }
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    selectedUnitIdx === VECTOR_DB_CURRICULUM_UNITS.length - 1
                      ? "text-stone-300 cursor-not-allowed"
                      : "bg-orange-600 text-white hover:bg-orange-700 cursor-pointer"
                  }`}
                >
                  Next Unit <ArrowRight size={14} />
                </button>
              </div>
            </article>
          </div>
        )}

        {/* TAB 2: INTERACTIVE SIMULATORS */}
        {activeTab === "interactive-tools" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-stone-200 bg-white/80 p-5 backdrop-blur-sm">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-1">
                Interactive Embeddings & Vector Indexing Simulators
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Explore cosine similarity angles, FAISS index latency vs recall tradeoffs, sliding-window chunking, Reciprocal Rank Fusion, and ChromaDB metadata filtering.
              </p>
            </div>

            <CosineSimilarityVisualizer />
            <FaissIndexComparisonExplorer />
            <DocumentChunkingInteractivePlayground />
            <HybridSearchRrfSimulator />
            <ChromaMetadataFilterSandbox />
          </div>
        )}

        {/* TAB 3: PRACTICAL LABS */}
        {activeTab === "labs" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white/80 p-5 backdrop-blur-sm">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-1">
                6 Hands-On Vector Retrieval Laboratories
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Implement manual vector cosine math, build high-speed FAISS IndexFlatIP engines, train IVF clusters, configure persistent ChromaDB stores, and fuse hybrid rankings.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {VECTOR_DB_PRACTICAL_LABS.map((lab) => (
                <div
                  key={lab.id}
                  className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="rounded-full bg-orange-100 border border-orange-200 px-2.5 py-0.5 text-[11px] font-mono font-bold text-orange-800">
                        {lab.difficulty}
                      </span>
                      <span className="text-xs font-mono text-stone-400 flex items-center gap-1">
                        <Clock size={12} /> {lab.estimatedTime}
                      </span>
                    </div>

                    <h3 className="font-bold text-stone-900 text-base mb-2">{lab.title}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">{lab.objective}</p>

                    <div className="mb-4">
                      <div className="text-[11px] font-mono font-bold uppercase text-stone-500 mb-1.5">
                        Key Tasks:
                      </div>
                      <ul className="space-y-1 pl-4 list-disc text-xs text-stone-600">
                        {lab.tasks.map((task, tIdx) => (
                          <li key={tIdx}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {lab.starterCode && (
                    <div className="rounded-xl border border-stone-800 bg-stone-900 p-3 font-mono text-[11px] text-stone-200 overflow-x-auto">
                      <code>{lab.starterCode}</code>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CAPSTONE PROJECT */}
        {activeTab === "project" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-white shadow-md">
                  <Award size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-orange-600">
                    Capstone Engineering Project
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                    {VECTOR_DB_CAPSTONE_PROJECT.title}
                  </h2>
                </div>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed mb-6">
                {VECTOR_DB_CAPSTONE_PROJECT.objective}
              </p>

              {/* 7 Phases */}
              <div className="space-y-4 mb-8">
                <h3 className="text-base font-bold text-stone-900 border-b border-stone-200 pb-2">
                  Project Execution Plan (7 Engineering Phases)
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {VECTOR_DB_CAPSTONE_PROJECT.phases.map((phase) => (
                    <div
                      key={phase.phaseNumber}
                      className="p-4 rounded-xl border border-stone-200 bg-stone-50/60"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-200 text-orange-800 text-xs font-mono font-bold">
                          {phase.phaseNumber}
                        </span>
                        <h4 className="font-bold text-stone-900 text-xs sm:text-sm">{phase.name}</h4>
                      </div>
                      <ul className="space-y-1 pl-4 list-disc text-xs text-stone-600">
                        {phase.tasks.map((task, tIdx) => (
                          <li key={tIdx}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 100-Mark Evaluation Rubric */}
              <div>
                <h3 className="text-base font-bold text-stone-900 border-b border-stone-200 pb-2 mb-3">
                  Formal 100-Mark University Evaluation Rubric
                </h3>
                <div className="overflow-x-auto rounded-xl border border-stone-200">
                  <table className="min-w-full divide-y divide-stone-200 font-sans text-xs">
                    <thead className="bg-stone-50 font-bold text-stone-800">
                      <tr>
                        <th className="px-4 py-2.5 text-left">Evaluation Component</th>
                        <th className="px-4 py-2.5 text-right">Maximum Marks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 bg-white">
                      {VECTOR_DB_CAPSTONE_PROJECT.rubric.map((item, idx) => (
                        <tr key={idx} className="hover:bg-stone-50/50">
                          <td className="px-4 py-2 font-medium text-stone-800">{item.component}</td>
                          <td className="px-4 py-2 text-right font-mono font-bold text-orange-600">
                            {item.marks}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-stone-50 font-bold text-stone-900">
                        <td className="px-4 py-2.5">Total Cumulative Marks</td>
                        <td className="px-4 py-2.5 text-right font-mono text-orange-700">100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: ASSIGNMENTS & MATHEMATICAL EXERCISES */}
        {activeTab === "exercises" && (
          <div className="space-y-8">
            {/* Math Problems */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-1 flex items-center gap-2">
                <Calculator size={20} className="text-orange-600" />
                Mathematical Problems with Worked Solutions
              </h2>
              <p className="text-xs text-stone-600 mb-6">
                Step-by-step vector calculations for dot products, cosine similarities, Precision@K, Recall@K, MRR, and Reciprocal Rank Fusion.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {VECTOR_DB_ASSIGNMENTS.mathProblems.map((item) => (
                  <div key={item.id} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50">
                    <h3 className="font-bold text-stone-900 text-xs sm:text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-stone-700 mb-3 font-sans leading-relaxed">
                      <strong>Problem:</strong> {item.problem}
                    </p>
                    <div className="p-2.5 rounded-lg bg-orange-50 border border-orange-200/70 text-xs font-mono text-orange-950">
                      <strong>Worked Solution:</strong> {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conceptual Questions */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-1 flex items-center gap-2">
                <HelpCircle size={20} className="text-indigo-600" />
                15 Conceptual Questions
              </h2>
              <p className="text-xs text-stone-600 mb-4">
                Students should answer each of these questions in their own words in their engineering journals.
              </p>
              <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-700">
                {VECTOR_DB_ASSIGNMENTS.conceptualQuestions.map((q, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg border border-stone-100 bg-stone-50/50 flex gap-2">
                    <span className="font-mono font-bold text-orange-600 shrink-0">{idx + 1}.</span>
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Programming Challenges */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-1 flex items-center gap-2">
                <Code2 size={20} className="text-emerald-600" />
                10 Practical Programming Challenges
              </h2>
              <p className="text-xs text-stone-600 mb-4">
                Hands-on code tasks covering FAISS IndexFlatIP, IVF clustering, ChromaDB persistent collections, BM25, and Cross-Encoder rerankers.
              </p>
              <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-700">
                {VECTOR_DB_ASSIGNMENTS.programmingChallenges.map((ch, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg border border-stone-100 bg-stone-50/50 flex gap-2">
                    <span className="font-mono font-bold text-emerald-600 shrink-0">#{idx + 1}</span>
                    <span>{ch}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: MODULE EXAMINATION */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-stone-900">
                    Module 10 Knowledge Assessment
                  </h2>
                  <p className="text-xs text-stone-500 mt-0.5">
                    10 University-Grade Questions on Embeddings, Vector Databases, FAISS, ChromaDB & Semantic Search
                  </p>
                </div>
                {showQuizResults ? (
                  <button
                    onClick={() => {
                      setUserAnswers({});
                      setShowQuizResults(false);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 hover:bg-stone-200 text-xs font-bold cursor-pointer"
                  >
                    <RotateCcw size={14} /> Retake Assessment
                  </button>
                ) : (
                  <button
                    disabled={Object.keys(userAnswers).length === 0}
                    onClick={() => setShowQuizResults(true)}
                    className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition shadow-xs disabled:opacity-50 cursor-pointer"
                  >
                    Submit Examination
                  </button>
                )}
              </div>

              {showQuizResults && (
                <div className="mb-6 p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-orange-900 uppercase">Assessment Score</div>
                    <div className="text-2xl font-black text-orange-700 font-mono">
                      {calculateScore()} / {VECTOR_DB_EXAMINATION_QUESTIONS.length} (
                      {Math.round((calculateScore() / VECTOR_DB_EXAMINATION_QUESTIONS.length) * 100)}%)
                    </div>
                  </div>
                  <div className="text-xs text-stone-600 max-w-xs text-right">
                    {calculateScore() >= 8
                      ? "Outstanding! You demonstrate deep university-level comprehension of vector databases and semantic search."
                      : "Review the curriculum units on FAISS indexing and cosine similarity before deploying RAG systems."}
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {VECTOR_DB_EXAMINATION_QUESTIONS.map((q, idx) => {
                  const userAnswer = userAnswers[q.id];
                  const isCorrect = userAnswer === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className="p-5 rounded-xl border border-stone-200 bg-white space-y-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="font-mono text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                          Q{idx + 1}
                        </span>
                        <div className="font-bold text-sm text-stone-900 leading-snug">
                          {q.question}
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = userAnswer === optIdx;
                          let optStyle = "border-stone-200 bg-stone-50/50 hover:bg-stone-100 text-stone-700";

                          if (showQuizResults) {
                            if (optIdx === q.correctAnswer) {
                              optStyle = "border-emerald-400 bg-emerald-50 text-emerald-950 font-bold";
                            } else if (isSelected && !isCorrect) {
                              optStyle = "border-red-400 bg-red-50 text-red-950";
                            } else {
                              optStyle = "border-stone-100 text-stone-400 opacity-60";
                            }
                          } else if (isSelected) {
                            optStyle = "border-orange-500 bg-orange-50/80 text-orange-950 font-semibold";
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleAnswerSelect(q.id, optIdx)}
                              className={`w-full text-left p-3 rounded-lg border text-xs transition cursor-pointer flex items-center justify-between ${optStyle}`}
                            >
                              <span>{opt}</span>
                              {showQuizResults && optIdx === q.correctAnswer && (
                                <Check size={14} className="text-emerald-600 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {showQuizResults && (
                        <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-700 leading-relaxed">
                          <strong>Explanation:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: COMPETENCY TRACKER */}
        {activeTab === "tracker" && (
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <h2 className="text-xl font-bold text-stone-900">
                  Module 10 Competency Mastery Tracker
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  Track your mastery across all 19 vector database & semantic search competencies
                </p>
              </div>
              <div className="text-right">
                <span className="font-mono text-xl font-bold text-orange-600">
                  {completedCompetenciesCount} / {VECTOR_DB_COMPETENCY_CHECKLIST.length}
                </span>
                <span className="block text-[11px] text-stone-400">({progressPercent}% Complete)</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-orange-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {VECTOR_DB_COMPETENCY_CHECKLIST.map((comp, idx) => {
                const isChecked = Boolean(checkedCompetencies[idx]);
                return (
                  <button
                    key={idx}
                    onClick={() => toggleCompetency(idx)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition flex items-start gap-2.5 cursor-pointer ${
                      isChecked
                        ? "bg-emerald-50/80 border-emerald-300 text-emerald-950 font-medium"
                        : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    <div
                      className={`h-4 w-4 rounded mt-0.5 shrink-0 flex items-center justify-center border ${
                        isChecked
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "border-stone-300 bg-white"
                      }`}
                    >
                      {isChecked && <Check size={12} />}
                    </div>
                    <span>{comp}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 8: UNIVERSITY RESOURCES */}
        {activeTab === "resources" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white/80 p-5 backdrop-blur-sm">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-1">
                Academic & Primary Research Bibliography
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Foundational research papers, documentation, and university lectures on Sentence-BERT, FAISS, ChromaDB, HNSW, and BM25.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {VECTOR_DB_UNIVERSITY_RESOURCES.map((res, idx) => (
                <a
                  key={idx}
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-2xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-sm transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
                      <span className="font-bold text-orange-600">Reference #{idx + 1}</span>
                      <ExternalLink size={14} className="group-hover:text-orange-600 transition" />
                    </div>
                    <h3 className="font-bold text-stone-900 text-sm mb-1 group-hover:text-orange-600 transition">
                      {res.title}
                    </h3>
                    <p className="text-xs text-stone-500 font-mono mb-2">{res.authors}</p>
                    <p className="text-xs text-stone-600 leading-relaxed">{res.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-mono text-orange-600 font-semibold">
                    Access Research Paper / Documentation &rarr;
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
