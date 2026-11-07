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
  CheckCircle2,
  ListOrdered
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  capstoneMeta,
  curriculumUnits,
  capstoneTracks,
  practicalAssignments,
  vivaQuestions,
  quizQuestions,
  competencies,
  recommendedResources
} from "./aiFinalCapstoneData";
import {
  CapstoneArchitectureExplorer,
  InterviewStateMachineSimulator,
  GoldenDatasetEvaluatorTool,
  CapstoneRubricEvaluationCalculator,
  LiveVoiceTurnTakingSimulator
} from "./AIFinalCapstoneDiagrams";

export default function AIFinalCapstone() {
  const [activeTab, setActiveTab] = useState("curriculum");
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0);
  const [copiedCodeIdx, setCopiedCodeIdx] = useState(null);

  // Viva search & filter state
  const [vivaSearch, setVivaSearch] = useState("");
  const [vivaCategory, setVivaCategory] = useState("All");

  // Track selection state
  const [selectedTrackId, setSelectedTrackId] = useState("track-1");

  // Submission checklist state (16 mandatory artifacts)
  const [checklist, setChecklist] = useState({
    repo: true,
    arch_diag: true,
    er_diag: true,
    api_spec: true,
    deployed_app: true,
    golden_dataset: true,
    eval_results: true,
    unit_tests: true,
    e2e_tests: true,
    security_audit: true,
    load_test: true,
    cost_model: true,
    deploy_guide: true,
    readme: true,
    demo_video: false,
    final_report: false
  });

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

  const toggleChecklistItem = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAnswerSelect = (qId, optionIdx) => {
    if (showQuizResults) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateQuizScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowQuizResults(false);
  };

  const toggleCompetency = (id) => {
    setCheckedCompetencies((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCompetenciesCount = Object.values(checkedCompetencies).filter(Boolean).length;
  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  // Filter viva questions
  const filteredViva = vivaQuestions.filter((item) => {
    const matchesCategory = vivaCategory === "All" || item.category === vivaCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(vivaSearch.toLowerCase()) ||
      item.answer.toLowerCase().includes(vivaSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentUnit = curriculumUnits[selectedUnitIdx];
  const selectedTrack = capstoneTracks.find((t) => t.id === selectedTrackId) || capstoneTracks[0];

  const submissionItems = [
    { key: "repo", label: "Source-Code Repository with Modular Separation" },
    { key: "arch_diag", label: "C4 System Architecture & Data Flow Diagrams" },
    { key: "er_diag", label: "Database Entity-Relationship (ER) Schema DDL" },
    { key: "api_spec", label: "Documented OpenAPI 3.0 / REST API Specification" },
    { key: "deployed_app", label: "Working Publicly Deployed Application / Demo" },
    { key: "golden_dataset", label: "Curated 200-Question Golden Evaluation Dataset" },
    { key: "eval_results", label: "Automated AI Model Evaluation & Benchmarking Report" },
    { key: "unit_tests", label: "Unit & Integration Test Suite (>80% Code Coverage)" },
    { key: "e2e_tests", label: "Playwright Automated End-to-End Test Suite" },
    { key: "security_audit", label: "OWASP GenAI Top 10 Security Assessment" },
    { key: "load_test", label: "Load Testing Report (500 Concurrent Workloads)" },
    { key: "cost_model", label: "Token Pricing & Capacity Sizing Calculations" },
    { key: "deploy_guide", label: "Deployment & Disaster Recovery (RPO/RTO) Guide" },
    { key: "readme", label: "Comprehensive Technical README with Setup Steps" },
    { key: "demo_video", label: "3-5 Minute Technical Architecture Walkthrough Video" },
    { key: "final_report", label: "Final Technical Engineering Viva Report" }
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white pb-24">
      <ModuleNav track="ai" currentModuleId="final-capstone" />

      {/* Header Banner */}
      <header className="relative border-b border-[#e7e3da] bg-white/70 backdrop-blur-md px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ea580c]">
              {capstoneMeta.badge}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-stone-400">
              <Clock className="h-3.5 w-3.5 text-stone-500" />
              {capstoneMeta.duration}
            </span>
            <span className="rounded-full border border-[#e7e3da] bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600">
              {capstoneMeta.level}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Module {capstoneMeta.moduleNumber}: {capstoneMeta.title}
          </h1>
          <p className="mt-3 max-w-4xl text-base text-stone-600 sm:text-lg">
            {capstoneMeta.subtitle}
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-stone-600">
            {capstoneMeta.summary}
          </p>

          {/* Quick Stats Grid */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            <div className="rounded-xl border border-[#e7e3da] bg-white shadow-xs p-3">
              <div className="text-xs font-medium text-stone-500">Curriculum</div>
              <div className="mt-1 text-xl font-bold text-emerald-400">12 Units</div>
            </div>
            <div className="rounded-xl border border-[#e7e3da] bg-white shadow-xs p-3">
              <div className="text-xs font-medium text-stone-500">Interactive Tools</div>
              <div className="mt-1 text-xl font-bold text-indigo-400">5 Simulators</div>
            </div>
            <div className="rounded-xl border border-[#e7e3da] bg-white shadow-xs p-3">
              <div className="text-xs font-medium text-stone-500">Project Tracks</div>
              <div className="mt-1 text-xl font-bold text-amber-400">3 Tracks</div>
            </div>
            <div className="rounded-xl border border-[#e7e3da] bg-white shadow-xs p-3">
              <div className="text-xs font-medium text-stone-500">Assignments</div>
              <div className="mt-1 text-xl font-bold text-sky-400">7 Milestones</div>
            </div>
            <div className="rounded-xl border border-[#e7e3da] bg-white shadow-xs p-3">
              <div className="text-xs font-medium text-stone-500">Viva Questions</div>
              <div className="mt-1 text-xl font-bold text-violet-400">20 Q&As</div>
            </div>
            <div className="rounded-xl border border-[#e7e3da] bg-white shadow-xs p-3">
              <div className="text-xs font-medium text-stone-500">Artifacts Checklist</div>
              <div className="mt-1 text-xl font-bold text-rose-400">{completedChecklistCount}/16 Ready</div>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="sticky top-0 z-30 border-b border-[#e7e3da] bg-[#f6f4ee]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex space-x-1 sm:space-x-2">
            {[
              { id: "curriculum", label: "Curriculum Units", icon: BookOpen },
              { id: "interactive", label: "Interactive Tools", icon: Sparkles },
              { id: "tracks", label: "Capstone Tracks", icon: Wrench },
              { id: "assignments", label: "7 Assignments", icon: Code2 },
              { id: "viva", label: "Viva Defense Q&A", icon: HelpCircle },
              { id: "rubric", label: "100-Mark Rubric", icon: Award },
              { id: "quiz", label: "Final Exam", icon: ShieldCheck },
              { id: "competencies", label: "25 Competencies", icon: Target },
              { id: "specs", label: "Production Specs", icon: Layers }
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
        {/* 1. CURRICULUM UNITS TAB */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Sidebar Unit Selector */}
            <div className="lg:col-span-4">
              <div className="sticky top-20 rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 px-2">
                  12 Capstone Lifecycle Units
                </div>
                <div className="space-y-1.5 max-h-[70vh] overflow-y-auto pr-1">
                  {curriculumUnits.map((unit, idx) => {
                    const isSelected = selectedUnitIdx === idx;
                    return (
                      <button
                        key={unit.id}
                        onClick={() => setSelectedUnitIdx(idx)}
                        className={`w-full rounded-xl p-3 text-left transition-all ${
                          isSelected
                            ? "bg-orange-50 text-orange-950 border border-orange-200 shadow-2xs font-bold"
                            : "text-stone-700 hover:bg-stone-50 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono text-orange-700 font-bold">Unit {idx + 1}</span>
                          <span className="text-[10px] text-stone-500">{unit.duration}</span>
                        </div>
                        <div className="mt-1 text-xs font-semibold text-stone-900 line-clamp-1">
                          {unit.title.replace(/^\d+\.\s*/, "")}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Content Display */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-700">
                      Unit {selectedUnitIdx + 1} of 12
                    </span>
                    <h2 className="mt-1 text-2xl font-bold text-stone-900">{currentUnit.title}</h2>
                  </div>
                  <span className="rounded-lg bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-medium text-stone-600">
                    {currentUnit.duration}
                  </span>
                </div>

                {/* Core Concepts Badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {currentUnit.coreConcepts.map((concept, i) => (
                    <span
                      key={i}
                      className="rounded-lg border border-[#e7e3da] bg-[#faf8f4] px-2.5 py-1 text-xs font-medium text-stone-700"
                    >
                      {concept}
                    </span>
                  ))}
                </div>

                {/* Theoretical Foundation */}
                <div className="mt-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400">
                    Engineering Theory & Concepts
                  </h3>
                  <div className="mt-3 text-sm leading-relaxed text-stone-700 whitespace-pre-line space-y-3 font-sans">
                    {currentUnit.theory}
                  </div>
                </div>

                {/* Architecture Snippet */}
                {currentUnit.architectureSnippet && (
                  <div className="mt-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400">
                      System Topology / Data Flow
                    </h3>
                    <div className="mt-2 rounded-xl border border-[#e7e3da] bg-[#1c1917] p-4 font-mono text-xs text-indigo-300 overflow-x-auto">
                      <pre>{currentUnit.architectureSnippet}</pre>
                    </div>
                  </div>
                )}

                {/* Production Code Example */}
                {currentUnit.codeExample && (
                  <div className="mt-6">
                    <div className="flex items-center justify-between pb-2">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400">
                        Production Implementation
                      </h3>
                      <button
                        onClick={() => handleCopyCode(currentUnit.codeExample, currentUnit.id)}
                        className="flex items-center gap-1.5 rounded-lg border border-stone-700 bg-stone-800 px-2.5 py-1 text-xs text-stone-300 hover:bg-stone-700 cursor-pointer"
                      >
                        {copiedCodeIdx === currentUnit.id ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy Code</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="rounded-xl border border-[#e7e3da] bg-[#1c1917] p-4 font-mono text-xs text-emerald-400 overflow-x-auto">
                      <pre>{currentUnit.codeExample}</pre>
                    </div>
                  </div>
                )}

                {/* Key Takeaways */}
                <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Unit Key Takeaways
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-xs text-emerald-950">
                    {currentUnit.takeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Next / Previous Unit Navigation */}
                <div className="mt-8 flex items-center justify-between border-t border-[#e7e3da] pt-4">
                  <button
                    disabled={selectedUnitIdx === 0}
                    onClick={() => setSelectedUnitIdx((prev) => prev - 1)}
                    className="flex items-center gap-1.5 rounded-xl border border-[#e7e3da] bg-white px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-[#faf8f4] disabled:opacity-30 shadow-xs cursor-pointer"
                  >
                    <ArrowLeft className="h-4 w-4" /> Previous Unit
                  </button>
                  <button
                    disabled={selectedUnitIdx === curriculumUnits.length - 1}
                    onClick={() => setSelectedUnitIdx((prev) => prev + 1)}
                    className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-orange-600 disabled:opacity-30 cursor-pointer"
                  >
                    Next Unit <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. INTERACTIVE SIMULATORS TAB */}
        {activeTab === "interactive" && (
          <div className="space-y-8">
            <CapstoneArchitectureExplorer />
            <InterviewStateMachineSimulator />
            <GoldenDatasetEvaluatorTool />
            <LiveVoiceTurnTakingSimulator />
            <CapstoneRubricEvaluationCalculator />
          </div>
        )}

        {/* 3. CAPSTONE TRACKS TAB */}
        {activeTab === "tracks" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-6">
              <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-amber-400" />
                Selectable Capstone Project Tracks
              </h2>
              <p className="mt-1 text-xs text-stone-600">
                Choose from 3 specialized engineering tracks. Track 1 matches the live PrepSpaces technical interview architecture.
              </p>

              {/* Track Selector Cards */}
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                {capstoneTracks.map((track) => {
                  const isSelected = selectedTrackId === track.id;
                  return (
                    <button
                      key={track.id}
                      onClick={() => setSelectedTrackId(track.id)}
                      className={`rounded-xl border p-5 text-left transition-all ${
                        isSelected
                          ? "border-orange-500 bg-orange-50 text-orange-950 shadow-xs ring-1 ring-[#f97316]"
                          : "border-[#e7e3da] bg-[#faf8f4] text-stone-700 hover:border-orange-300 hover:bg-white"
                      }`}
                    >
                      <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange-800">
                        {track.badge}
                      </span>
                      <h3 className="mt-3 text-base font-bold text-stone-900">{track.name}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-stone-600">{track.description}</p>
                      <div className="mt-4 text-[11px] font-mono text-emerald-800 bg-emerald-50/70 p-2 rounded-lg border border-emerald-200">
                        {track.stack}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Track Deep Dive */}
              <div className="mt-8 rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
                  <div>
                    <span className="text-xs font-mono text-orange-700 font-bold">TRACK SPECIFICATION</span>
                    <h3 className="text-lg font-bold text-stone-900">{selectedTrack.name}</h3>
                  </div>
                  <span className="rounded-lg bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-semibold text-orange-700">
                    {selectedTrack.difficulty}
                  </span>
                </div>

                <div className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Required Production Deliverables
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs text-stone-700">
                    {selectedTrack.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. PRACTICAL ASSIGNMENTS TAB */}
        {activeTab === "assignments" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Code2 className="h-5 w-5 text-sky-400" />
                7 Capstone Engineering Milestones & Assignments
              </h2>
              <p className="mt-1 text-xs text-stone-400">
                Execute each milestone sequentially to assemble the complete production platform.
              </p>

              <div className="mt-6 space-y-4">
                {practicalAssignments.map((task, idx) => (
                  <div key={task.id} className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono text-sky-400">MILESTONE 0{idx + 1}</span>
                      <span className="rounded-md bg-stone-100 border border-stone-200 px-2 py-0.5 text-[11px] font-semibold text-stone-700">
                        {task.type}
                      </span>
                    </div>
                    <h3 className="mt-2 text-base font-bold text-white">{task.title}</h3>
                    <p className="mt-2 text-xs text-stone-300 leading-relaxed">{task.description}</p>
                    <div className="mt-3 rounded-lg bg-white p-3 border border-[#e7e3da] text-xs">
                      <span className="font-semibold text-stone-400">Expected Deliverables: </span>
                      <span className="text-emerald-300">{task.deliverables}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 5. VIVA DEFENSE Q&A TAB */}
        {activeTab === "viva" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-violet-400" />
                    20 Technical Viva & Architecture Defense Questions
                  </h2>
                  <p className="mt-1 text-xs text-stone-400">
                    Comprehensive preparation for defending your capstone architecture in technical interviews.
                  </p>
                </div>
              </div>

              {/* Filter & Search Bar */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="relative flex-1 min-w-[240px]">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-stone-500" />
                  <input
                    type="text"
                    value={vivaSearch}
                    onChange={(e) => setVivaSearch(e.target.value)}
                    placeholder="Search viva questions or keywords..."
                    className="w-full rounded-xl border border-[#e7e3da] bg-white pl-9 pr-4 py-2 text-xs text-stone-900 placeholder-stone-500 focus:border-[#f97316]"
                  />
                </div>
                <div className="flex items-center gap-1.5 overflow-x-auto">
                  {["All", "Architecture", "Reliability", "AI Engineering", "Security", "Performance", "Scalability", "Responsible AI"].map(
                    (cat) => (
                      <button
                        key={cat}
                        onClick={() => setVivaCategory(cat)}
                        className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all ${
                          vivaCategory === cat
                            ? "bg-[#f97316] text-white font-bold shadow-xs"
                            : "bg-white text-stone-600 border border-[#e7e3da] hover:border-orange-300 hover:text-stone-900"
                        }`}
                      >
                        {cat}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Questions List */}
              <div className="mt-6 space-y-4">
                {filteredViva.map((item, idx) => (
                  <div key={item.id} className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-orange-700 font-bold">QUESTION 0{idx + 1}</span>
                      <span className="rounded-md bg-stone-800 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="mt-2 text-sm font-bold text-white">{item.question}</h3>
                    <div className="mt-3 rounded-lg bg-white p-3.5 border border-[#e7e3da] text-xs leading-relaxed text-stone-700">
                      <strong className="text-emerald-400">Recommended Defense Answer: </strong>
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 6. 100-MARK RUBRIC & CHECKLIST TAB */}
        {activeTab === "rubric" && (
          <div className="space-y-8">
            <CapstoneRubricEvaluationCalculator />

            {/* 16 Mandatory Submission Artifacts Checklist */}
            <div className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <ListOrdered className="h-5 w-5 text-rose-400" />
                    16 Mandatory Submission Artifacts Checklist
                  </h3>
                  <p className="text-xs text-stone-400">
                    Track your completion readiness across all 16 portfolio items required for final capstone submission.
                  </p>
                </div>
                <div className="rounded-xl border border-[#e7e3da] bg-white px-3 py-1.5 text-center shadow-xs">
                  <div className="text-[10px] text-stone-400">Submission Readiness</div>
                  <div className="text-sm font-bold text-emerald-400">
                    {completedChecklistCount} / 16 ({Math.round((completedChecklistCount / 16) * 100)}%)
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {submissionItems.map((item, idx) => {
                  const isChecked = checklist[item.key];
                  return (
                    <button
                      key={item.key}
                      onClick={() => toggleChecklistItem(item.key)}
                      className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-all ${
                        isChecked
                          ? "border-emerald-300 bg-emerald-50/70 text-emerald-950 shadow-2xs"
                          : "border-[#e7e3da] bg-[#faf8f4] text-stone-700 hover:border-orange-300 hover:bg-white"
                      }`}
                    >
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                          isChecked ? "border-emerald-500 bg-emerald-500 text-stone-950" : "border-stone-700"
                        }`}
                      >
                        {isChecked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-semibold">
                        {idx + 1}. {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 7. FINAL EXAMINATION TAB */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-emerald-400" />
                    Final AI Engineering Capstone Examination
                  </h2>
                  <p className="mt-1 text-xs text-stone-400">
                    10 comprehensive questions covering the entire AI engineering lifecycle.
                  </p>
                </div>
                {showQuizResults && (
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-xs text-stone-400">Your Score</div>
                      <div className="text-xl font-extrabold text-emerald-400">
                        {calculateQuizScore()} / {quizQuestions.length}
                      </div>
                    </div>
                    <button
                      onClick={handleResetQuiz}
                      className="flex items-center gap-1.5 rounded-lg border border-[#e7e3da] bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-[#faf8f4] shadow-xs cursor-pointer"
                    >
                      <RotateCcw className="h-3.5 w-3.5" /> Retake
                    </button>
                  </div>
                )}
              </div>

              {/* Questions List */}
              <div className="mt-6 space-y-6">
                {quizQuestions.map((q, qIdx) => {
                  const selectedOpt = userAnswers[q.id];
                  const isAnswered = selectedOpt !== undefined;
                  const isCorrect = isAnswered && selectedOpt === q.correctIndex;

                  return (
                    <div key={q.id} className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-emerald-400">QUESTION 0{qIdx + 1}</span>
                        {showQuizResults && (
                          <span
                            className={`text-xs font-bold ${
                              isCorrect ? "text-emerald-400" : "text-rose-400"
                            }`}
                          >
                            {isCorrect ? "✓ Correct" : "✗ Incorrect"}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 text-sm font-bold text-white">{q.question}</h3>

                      <div className="mt-4 space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selectedOpt === optIdx;
                          let btnStyle = "border-[#e7e3da] bg-white shadow-xs text-stone-300 hover:bg-stone-800";

                          if (isOptionSelected) {
                            btnStyle = "border-emerald-500 bg-emerald-500/20 text-white";
                          }

                          if (showQuizResults) {
                            if (optIdx === q.correctIndex) {
                              btnStyle = "border-emerald-500 bg-emerald-500/30 text-emerald-300 font-bold";
                            } else if (isOptionSelected && !isCorrect) {
                              btnStyle = "border-rose-500 bg-rose-500/30 text-rose-300";
                            } else {
                              btnStyle = "border-[#e7e3da] bg-[#faf8f4]/30 text-stone-500 opacity-60";
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={showQuizResults}
                              onClick={() => handleAnswerSelect(q.id, optIdx)}
                              className={`w-full rounded-lg border p-3 text-left text-xs transition-all ${btnStyle}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {showQuizResults && (
                        <div className="mt-3 rounded-lg bg-white p-3 border border-[#e7e3da] text-xs text-stone-400">
                          <strong className="text-emerald-400">Explanation: </strong>
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
                    className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 shadow-lg shadow-emerald-950/50"
                  >
                    <CheckCircle2 className="h-4 w-4" /> Submit Examination
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 8. 25 COMPETENCY MATRIX TAB */}
        {activeTab === "competencies" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Target className="h-5 w-5 text-indigo-400" />
                    25 Capstone Mastery Competencies Checklist
                  </h2>
                  <p className="mt-1 text-xs text-stone-400">
                    Verify and check off your mastery across requirements, architecture, data, models, testing, security, and DevOps.
                  </p>
                </div>
                <div className="rounded-xl border border-stone-700 bg-stone-800 px-3 py-1.5 text-center">
                  <div className="text-[10px] text-stone-400">Mastery Progress</div>
                  <div className="text-sm font-bold text-emerald-400">
                    {completedCompetenciesCount} / 25 ({Math.round((completedCompetenciesCount / 25) * 100)}%)
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {competencies.map((comp) => {
                  const isChecked = checkedCompetencies[comp.id];
                  return (
                    <button
                      key={comp.id}
                      onClick={() => toggleCompetency(comp.id)}
                      className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all ${
                        isChecked
                          ? "border-emerald-300 bg-emerald-50/80 text-emerald-950 shadow-2xs"
                          : "border-[#e7e3da] bg-[#faf8f4] text-stone-700 hover:border-orange-300 hover:bg-white hover:text-stone-300"
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                          isChecked ? "border-emerald-500 bg-emerald-500 text-stone-950" : "border-stone-700"
                        }`}
                      >
                        {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block">
                          {comp.category}
                        </span>
                        <span className="text-xs font-semibold text-stone-200">{comp.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 9. PRODUCTION SPECS & REFERENCES TAB */}
        {activeTab === "specs" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs p-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="h-5 w-5 text-emerald-400" />
                Authoritative Specifications & Technical References
              </h2>
              <p className="mt-1 text-xs text-stone-400">
                Official standards, documentation, and references cited across the 24-module AI Engineering curriculum.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {recommendedResources.map((res, i) => (
                  <a
                    key={i}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col justify-between rounded-xl border border-[#e7e3da] bg-white p-4 transition-all hover:border-emerald-500 hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">{res.title}</span>
                        <ExternalLink className="h-4 w-4 text-stone-500" />
                      </div>
                      <p className="mt-2 text-xs text-stone-400 leading-relaxed">{res.description}</p>
                    </div>
                    <div className="mt-3 text-[11px] font-mono text-emerald-400 truncate">
                      {res.url}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
