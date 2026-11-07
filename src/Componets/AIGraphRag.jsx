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
} from "./aiGraphRagData";
import {
  HybridSearchRrfFusionSandbox,
  KnowledgeGraphVisualizer,
  GraphRagMultiHopReasoner,
  QueryTransformationWorkbench,
  CommunityDetectionHierarchyExplorer
} from "./AIGraphRagDiagrams";

export default function AIGraphRag() {
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
      <ModuleNav track="ai" currentModuleId="graph-rag" />

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
              Graph RAG & Ontological Engineering
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            {overview.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-4xl leading-relaxed">
            {overview.finalOutcome}
          </p>

          {/* Quick Stats Grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-medium">
            <div className="rounded-xl border border-stone-200 bg-stone-50/70 p-3">
              <span className="text-stone-500 block text-[11px] mb-0.5">Primary Stack</span>
              <span className="font-bold text-stone-900">{overview.primaryLanguage}</span>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50/70 p-3">
              <span className="text-stone-500 block text-[11px] mb-0.5">Core Libraries</span>
              <span className="font-bold text-stone-900">{overview.mainLibraries}</span>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50/70 p-3">
              <span className="text-stone-500 block text-[11px] mb-0.5">Graph Databases</span>
              <span className="font-bold text-stone-900">Neo4j (Cypher) & NetworkX</span>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50/70 p-3">
              <span className="text-stone-500 block text-[11px] mb-0.5">RAG Paradigm</span>
              <span className="font-bold text-stone-900">Hybrid (RRF) + Microsoft GraphRAG</span>
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
              { id: "interactive-tools", label: "Interactive Tools (5)", icon: Wrench },
              { id: "labs", label: "Hands-on Labs (6)", icon: Terminal },
              { id: "project", label: "Capstone Platform", icon: Target },
              { id: "exercises", label: "18 Coding Tasks", icon: Code2 },
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
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-150 ${
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
            <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-xs sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
                <span className="font-bold text-xs uppercase tracking-wider text-stone-700">
                  Course Roadmap (12 Units)
                </span>
                <span className="text-[11px] font-mono text-stone-500">
                  Unit {selectedUnitIdx + 1} of {curriculumUnits.length}
                </span>
              </div>
              <div className="space-y-1.5">
                {curriculumUnits.map((u, idx) => {
                  const isSelected = selectedUnitIdx === idx;
                  return (
                    <button
                      key={u.id}
                      onClick={() => setSelectedUnitIdx(idx)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all duration-150 flex items-start gap-2.5 ${
                        isSelected
                          ? "bg-orange-50 border border-orange-200/80 text-orange-950 font-semibold shadow-xs"
                          : "hover:bg-stone-50 border border-transparent text-stone-600"
                      }`}
                    >
                      <span
                        className={`font-mono text-xs px-1.5 py-0.5 rounded ${
                          isSelected
                            ? "bg-orange-200/70 text-orange-900 font-bold"
                            : "bg-stone-100 text-stone-500"
                        }`}
                      >
                        {u.number}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs leading-snug line-clamp-2">{u.title}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                    Unit {activeUnit.number}
                  </span>
                  <span className="text-xs text-stone-400">•</span>
                  <span className="text-xs text-stone-500 font-medium">{activeUnit.subtitle}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">
                  {activeUnit.title}
                </h2>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200/60">
                  {activeUnit.summary}
                </p>

                {/* Subsections */}
                <div className="mt-8 space-y-8">
                  {activeUnit.topics.map((sec) => (
                    <div
                      key={sec.id}
                      className="border-t border-stone-100 pt-6 first:border-0 first:pt-0"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
                        <span className="w-1.5 h-4 bg-orange-500 rounded-full inline-block"></span>
                        {sec.title}
                      </h3>
                      <div className="mt-3 text-sm text-stone-700 leading-relaxed whitespace-pre-line font-sans space-y-3">
                        {sec.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons between units */}
                <div className="mt-10 pt-6 border-t border-stone-200 flex items-center justify-between">
                  <button
                    disabled={selectedUnitIdx === 0}
                    onClick={() => setSelectedUnitIdx((prev) => Math.max(0, prev - 1))}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 disabled:opacity-40 transition-all"
                  >
                    <ArrowLeft size={14} />
                    Previous Unit
                  </button>
                  <span className="text-xs text-stone-400 font-mono">
                    {selectedUnitIdx + 1} / {curriculumUnits.length}
                  </span>
                  <button
                    disabled={selectedUnitIdx === curriculumUnits.length - 1}
                    onClick={() =>
                      setSelectedUnitIdx((prev) => Math.min(curriculumUnits.length - 1, prev + 1))
                    }
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 disabled:opacity-40 transition-all"
                  >
                    Next Unit
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
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 mb-1 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-orange-500" />
                Advanced RAG & Knowledge Engineering Interactive Visualizers
              </h2>
              <p className="text-xs text-stone-600">
                Explore real-time algorithmic simulators demonstrating Hybrid Search RRF Fusion, Cypher property graph traversal, multi-hop reasoning, query rewriting, and Microsoft GraphRAG community detection.
              </p>
            </div>

            {/* Visualizer 1 */}
            <div>
              <div className="mb-2 font-mono text-xs font-bold text-orange-700 uppercase tracking-wider">
                Tool 1: Hybrid Retrieval & Reciprocal Rank Fusion
              </div>
              <HybridSearchRrfFusionSandbox />
            </div>

            {/* Visualizer 2 */}
            <div>
              <div className="mb-2 font-mono text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Tool 2: Interactive Knowledge Graph & Cypher Traversal
              </div>
              <KnowledgeGraphVisualizer />
            </div>

            {/* Visualizer 3 */}
            <div>
              <div className="mb-2 font-mono text-xs font-bold text-sky-700 uppercase tracking-wider">
                Tool 3: Graph RAG Multi-Hop Causal Chain Reasoner
              </div>
              <GraphRagMultiHopReasoner />
            </div>

            {/* Visualizer 4 */}
            <div>
              <div className="mb-2 font-mono text-xs font-bold text-amber-700 uppercase tracking-wider">
                Tool 4: Query Transformation Workbench
              </div>
              <QueryTransformationWorkbench />
            </div>

            {/* Visualizer 5 */}
            <div>
              <div className="mb-2 font-mono text-xs font-bold text-purple-700 uppercase tracking-wider">
                Tool 5: Microsoft GraphRAG Leiden Community Hierarchy & Global Search
              </div>
              <CommunityDetectionHierarchyExplorer />
            </div>
          </div>
        )}

        {/* TAB 3: PRACTICAL LABS */}
        {activeTab === "labs" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 mb-1 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-orange-500" />
                6 Production Engineering Labs
              </h2>
              <p className="text-xs text-stone-600">
                End-to-end Python implementations of NetworkX knowledge graphs, production Neo4j with Cypher, BM25 + dense hybrid search, structured LLM extraction, and complete graph-enhanced hybrid RAG pipelines.
              </p>
            </div>

            <div className="grid gap-6">
              {practicalLabs.map((lab) => (
                <div
                  key={lab.id}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs"
                >
                  <div className="p-6 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                          Lab {lab.number}
                        </span>
                        <span className="text-xs font-medium text-stone-500 flex items-center gap-1">
                          <Clock size={12} /> {lab.duration}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                          {lab.difficulty}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-stone-900">{lab.title}</h3>
                      <p className="text-xs text-stone-600 mt-1 max-w-3xl leading-relaxed">
                        {lab.summary}
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopyCode(lab.code, lab.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 transition-all shrink-0 self-start sm:self-center"
                    >
                      {copiedCodeIdx === lab.id ? (
                        <>
                          <Check size={14} className="text-emerald-600" />
                          <span className="text-emerald-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy Script</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="bg-stone-950 p-4 sm:p-5 overflow-x-auto text-xs font-mono">
                    <pre className="text-stone-300 leading-relaxed">{lab.code}</pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CAPSTONE PLATFORM */}
        {activeTab === "project" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded border border-orange-200">
                  Capstone Project
                </span>
                <span className="text-xs text-stone-500 font-medium flex items-center gap-1">
                  <Clock size={12} /> {capstoneProject.duration}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight">
                {capstoneProject.title}
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200/60">
                {capstoneProject.overview}
              </p>

              {/* Architectural Milestones */}
              <div className="mt-8">
                <h3 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <Target className="w-4 h-4 text-orange-500" />
                  Engineering Milestones & Roadmap
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {capstoneProject.architectureMilestones.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col justify-between"
                    >
                      <div>
                        <div className="font-bold text-xs text-stone-900 mb-2">{m.phase}</div>
                        <ul className="space-y-1.5 text-xs text-stone-600">
                          {m.tasks.map((task, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-1.5">
                              <span className="text-orange-500 font-bold mt-0.5">•</span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mt-8">
                <h3 className="text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Final Production Deliverables
                </h3>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  {capstoneProject.deliverables.map((d, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-stone-200 bg-white flex items-start gap-2"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-stone-700">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: 18 CODING ASSIGNMENTS */}
        {activeTab === "exercises" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 mb-1 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-orange-500" />
                18 Hands-on Coding Tasks
              </h2>
              <p className="text-xs text-stone-600">
                Implementation assignments covering BM25Okapi, RRF, DBSF, NetworkX, Cypher queries, Pydantic schemas, entity deduplication, Leiden clustering, HyDE, and Ragas evaluation.
              </p>
            </div>

            <div className="grid gap-4">
              {codingAssignments.map((assign, idx) => (
                <div
                  key={assign.id}
                  className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-stone-100">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                        #{idx + 1}
                      </span>
                      <h3 className="text-sm font-bold text-stone-900">{assign.title}</h3>
                    </div>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase self-start sm:self-auto ${
                        assign.difficulty === "Easy"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : assign.difficulty === "Medium"
                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                    >
                      {assign.difficulty}
                    </span>
                  </div>

                  <p className="text-xs text-stone-700 leading-relaxed mb-3">
                    {assign.instructions}
                  </p>

                  <div className="relative bg-stone-950 p-3 rounded-lg border border-stone-800 text-xs font-mono">
                    <pre className="text-stone-300 overflow-x-auto">{assign.starterCode}</pre>
                    <button
                      onClick={() => handleCopyCode(assign.starterCode, assign.id)}
                      className="absolute top-2 right-2 p-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300"
                      title="Copy Starter Code"
                    >
                      {copiedCodeIdx === assign.id ? (
                        <Check size={12} className="text-emerald-400" />
                      ) : (
                        <Copy size={12} />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: 30 THEORY QUESTIONS */}
        {activeTab === "theory" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 mb-1 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500" />
                30 University-Level Theory Questions & Model Solutions
              </h2>
              <p className="text-xs text-stone-600">
                Deep theoretical and mathematical inquiries into BM25 saturation, Reciprocal Rank Fusion, Index-Free Adjacency, Leiden community detection, Cross-Encoders, HyDE, and Ragas metrics.
              </p>
            </div>

            <div className="space-y-4">
              {theoryQuestions.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200 shrink-0 mt-0.5">
                      Q{idx + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-stone-900">{item.question}</h3>
                      <div className="mt-3 p-3.5 bg-stone-50 rounded-lg border border-stone-200/80 text-xs text-stone-700 leading-relaxed font-sans">
                        <strong className="text-stone-900 block mb-1">Model Solution:</strong>
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: EXAMINATION QUIZ */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-stone-900 mb-1 flex items-center gap-2">
                    <Award className="w-5 h-5 text-orange-500" />
                    Advanced RAG & Knowledge Engineering Examination
                  </h2>
                  <p className="text-xs text-stone-600">
                    Test your mastery across 12 multiple-choice questions assessing graph theory, hybrid search, Cypher, and GraphRAG.
                  </p>
                </div>

                {showQuizResults ? (
                  <button
                    onClick={handleResetQuiz}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-all shrink-0"
                  >
                    <RotateCcw size={14} />
                    Reset Quiz
                  </button>
                ) : (
                  <button
                    onClick={() => setShowQuizResults(true)}
                    disabled={Object.keys(userAnswers).length < quizQuestions.length}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-orange-600 text-white hover:bg-orange-500 disabled:opacity-40 transition-all shrink-0"
                  >
                    Submit Answers ({Object.keys(userAnswers).length}/{quizQuestions.length})
                  </button>
                )}
              </div>

              {showQuizResults && (
                <div className="mt-6 p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-orange-950 uppercase tracking-wider">
                      Examination Score
                    </div>
                    <div className="text-2xl font-extrabold text-orange-700 mt-0.5">
                      {calculateScore()} / {quizQuestions.length} (
                      {Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                    </div>
                  </div>
                  <div className="text-xs text-orange-900 max-w-xs text-right">
                    {calculateScore() >= 10
                      ? "Outstanding! You demonstrate production-level mastery of Graph RAG and Knowledge Engineering."
                      : "Good effort. Review the explanations below to solidify your understanding."}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {quizQuestions.map((q, qIdx) => {
                const selectedOption = userAnswers[q.id];
                const isCorrect = selectedOption === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`bg-white rounded-xl border p-5 shadow-xs transition-all ${
                      showQuizResults
                        ? isCorrect
                          ? "border-emerald-300 bg-emerald-50/20"
                          : "border-red-300 bg-red-50/20"
                        : "border-stone-200"
                    }`}
                  >
                    <div className="flex items-start gap-2.5 mb-3">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                        Q{qIdx + 1}
                      </span>
                      <h3 className="text-sm font-bold text-stone-900 leading-snug">{q.question}</h3>
                    </div>

                    <div className="space-y-2 mt-3">
                      {q.options.map((opt, oIdx) => {
                        let btnStyle = "border-stone-200 hover:bg-stone-50 text-stone-700";
                        if (selectedOption === oIdx) {
                          btnStyle = "border-orange-500 bg-orange-50 text-orange-950 font-semibold";
                        }
                        if (showQuizResults) {
                          if (oIdx === q.correctIndex) {
                            btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                          } else if (selectedOption === oIdx) {
                            btnStyle = "border-red-500 bg-red-50 text-red-950 line-through";
                          } else {
                            btnStyle = "border-stone-200 opacity-50";
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={showQuizResults}
                            onClick={() => handleAnswerSelect(q.id, oIdx)}
                            className={`w-full text-left p-3 rounded-lg border text-xs transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {showQuizResults && oIdx === q.correctIndex && (
                              <CheckCircle2 size={14} className="text-emerald-600 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {showQuizResults && (
                      <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-700 leading-relaxed">
                        <strong className="text-stone-900">Explanation: </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 8: COMPETENCY MATRIX */}
        {activeTab === "tracker" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 mb-1 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-orange-500" />
                20-Point Knowledge Engineering Competency Checklist
              </h2>
              <p className="text-xs text-stone-600 mb-4">
                Track your practical mastery of hybrid retrieval, Neo4j, Cypher, Microsoft GraphRAG, and production Ragas evaluation.
              </p>

              {/* Progress Bar */}
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80">
                <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                  <span className="font-bold text-stone-800">
                    Progress: {completedCompetenciesCount} of {competenciesChecklist.length} Complete
                  </span>
                  <span className="font-bold text-orange-600">{competencyProgressPercent}%</span>
                </div>
                <div className="w-full h-2.5 bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 transition-all duration-300"
                    style={{ width: `${competencyProgressPercent}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {competenciesChecklist.map((comp) => {
                const isChecked = !!checkedCompetencies[comp.id];
                return (
                  <button
                    key={comp.id}
                    onClick={() => toggleCompetency(comp.id)}
                    className={`p-3.5 rounded-xl border text-left text-xs transition-all flex items-start gap-2.5 ${
                      isChecked
                        ? "bg-emerald-50/40 border-emerald-300 text-emerald-950 font-medium"
                        : "bg-white border-stone-200 hover:border-stone-300 text-stone-700"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                        isChecked
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "border-stone-300 bg-stone-50"
                      }`}
                    >
                      {isChecked && <Check size={12} />}
                    </div>
                    <span className="leading-snug">{comp.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 9: OFFICIAL SPECS & RESOURCES */}
        {activeTab === "resources" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 mb-1 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-orange-500" />
                Authoritative Specifications & Documentation
              </h2>
              <p className="text-xs text-stone-600">
                Official research papers, API manuals, and open-source repositories for Microsoft GraphRAG, Neo4j, Qdrant, Rank-BM25, and Ragas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {learningResources.map((res, idx) => (
                <a
                  key={idx}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-sm text-stone-900 group-hover:text-orange-600 transition-colors">
                        {res.title}
                      </h3>
                      <ExternalLink size={14} className="text-stone-400 group-hover:text-orange-500" />
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">{res.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-mono text-orange-600 font-medium">
                    Visit Official Documentation →
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
