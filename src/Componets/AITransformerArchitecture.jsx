import React, { useState, useMemo } from "react";
import {
  Brain,
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
  ListOrdered,
  FileCode,
  Sparkles,
  RotateCcw,
  Target,
  Activity,
  MessageSquare
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  TRANSFORMER_CURRICULUM_UNITS,
  TRANSFORMER_LABS,
  TRANSFORMER_CAPSTONE,
  TRANSFORMER_INTERVIEW_QUESTIONS,
  TRANSFORMER_QUIZ_QUESTIONS,
  TRANSFORMER_RESOURCES,
  TRANSFORMER_COMPETENCIES
} from "./aiTransformerCurriculumData";
import {
  ScaledDotProductAttentionVisualizer,
  CausalAndPaddingMaskPlayground,
  MultiHeadAttentionSplittingTool,
  SinusoidalPositionalEncodingExplorer,
  AutoregressiveGenerationSimulator
} from "./AITransformerDiagrams";

export default function AITransformerArchitecture() {
  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'interactive-tools' | 'labs' | 'project' | 'interview' | 'quiz' | 'tracker' | 'resources'

  // Section explorer state
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0);
  const [selectedPartFilter, setSelectedPartFilter] = useState("all");
  const [copiedCodeIdx, setCopiedCodeIdx] = useState(null);

  const activeUnit = TRANSFORMER_CURRICULUM_UNITS[selectedUnitIdx] || TRANSFORMER_CURRICULUM_UNITS[0];

  const filteredUnits = useMemo(() => {
    if (selectedPartFilter === "all") return TRANSFORMER_CURRICULUM_UNITS;
    const partNum = parseInt(selectedPartFilter, 10);
    return TRANSFORMER_CURRICULUM_UNITS.filter((u) => u.partNumber === partNum);
  }, [selectedPartFilter]);

  const handleCopyCode = (codeText, idx) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  const handleNextUnit = () => {
    if (selectedUnitIdx < TRANSFORMER_CURRICULUM_UNITS.length - 1) {
      setSelectedUnitIdx((prev) => prev + 1);
      window.scrollTo({ top: 350, behavior: "smooth" });
    }
  };

  const handlePrevUnit = () => {
    if (selectedUnitIdx > 0) {
      setSelectedUnitIdx((prev) => prev - 1);
      window.scrollTo({ top: 350, behavior: "smooth" });
    }
  };

  // ---------------------------------------------------------------------------
  // LABS STATE
  // ---------------------------------------------------------------------------
  const [activeLabId, setActiveLabId] = useState("lab-01");
  const [copiedLabCode, setCopiedLabCode] = useState(false);
  const activeLab = TRANSFORMER_LABS.find((l) => l.id === activeLabId) || TRANSFORMER_LABS[0];

  const handleCopyLabCode = () => {
    navigator.clipboard.writeText(activeLab.code);
    setCopiedLabCode(true);
    setTimeout(() => setCopiedLabCode(false), 2000);
  };

  // ---------------------------------------------------------------------------
  // CAPSTONE PROJECT STATE
  // ---------------------------------------------------------------------------
  const [copiedCapstoneCode, setCopiedCapstoneCode] = useState(false);

  const handleCopyCapstoneCode = () => {
    navigator.clipboard.writeText(TRANSFORMER_CAPSTONE.runnableScript);
    setCopiedCapstoneCode(true);
    setTimeout(() => setCopiedCapstoneCode(false), 2000);
  };

  // ---------------------------------------------------------------------------
  // QUIZ STATE
  // ---------------------------------------------------------------------------
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectQuizOption = (questionId, optionIdx) => {
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    TRANSFORMER_QUIZ_QUESTIONS.forEach((q) => {
      if (quizAnswers[q.id] === q.answer) {
        score++;
      }
    });
    return score;
  }, [quizAnswers]);

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setShowQuizResults(false);
  };

  // ---------------------------------------------------------------------------
  // COMPETENCY TRACKER STATE
  // ---------------------------------------------------------------------------
  const [checkedCompetencies, setCheckedCompetencies] = useState(new Set([0, 1, 2]));

  const toggleCompetency = (idx) => {
    setCheckedCompetencies((prev) => {
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
    <div className="min-h-screen bg-[#fbfaf8] text-stone-900 flex flex-col font-sans">
      <ModuleNav />

      {/* Header Banner */}
      <header className="border-b border-[#e7e3da] bg-[#f5f2eb]/70 px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-orange-200">
            <Brain size={14} /> AI Engineering &bull; Module 06
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
            Transformer Architecture from Scratch
          </h1>
          <p className="mt-2 text-stone-600 max-w-3xl text-sm sm:text-base leading-relaxed">
            Construct the architectural foundation of modern Artificial Intelligence from first principles in PyTorch: scaled dot-product attention, multi-head projection subspaces, sinusoidal positional encodings, causal masks, residual highways, cross-attention, and sequence-to-sequence translation.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#e7e3da] text-stone-700 font-semibold shadow-2xs">
              <Clock size={14} className="text-orange-600" /> 16-20 Guided Hours
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#e7e3da] text-stone-700 font-semibold shadow-2xs">
              <Activity size={14} className="text-orange-600" /> 10 University Units
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#e7e3da] text-stone-700 font-semibold shadow-2xs">
              <Terminal size={14} className="text-orange-600" /> 8 Practical Labs
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#e7e3da] text-stone-700 font-semibold shadow-2xs">
              <Award size={14} className="text-orange-600" /> Neural Machine Translation Capstone
            </span>
          </div>
        </div>
      </header>

      {/* Primary Tab Navigation */}
      <div className="border-b border-[#e7e3da] bg-white sticky top-0 z-30 px-4 sm:px-6 lg:px-8 shadow-2xs">
        <div className="max-w-6xl mx-auto flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 no-scrollbar">
          <button
            onClick={() => setActiveTab("curriculum")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "curriculum"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <BookOpen size={16} className={activeTab === "curriculum" ? "text-orange-400" : "text-stone-400"} />
            Curriculum Explorer
          </button>

          <button
            onClick={() => setActiveTab("interactive-tools")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "interactive-tools"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <Sliders size={16} className={activeTab === "interactive-tools" ? "text-orange-400" : "text-stone-400"} />
            5 Interactive Simulators
          </button>

          <button
            onClick={() => setActiveTab("labs")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "labs"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <Terminal size={16} className={activeTab === "labs" ? "text-orange-400" : "text-stone-400"} />
            8 Practical Labs
          </button>

          <button
            onClick={() => setActiveTab("project")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "project"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <Award size={16} className={activeTab === "project" ? "text-orange-400" : "text-stone-400"} />
            Capstone Project
          </button>

          <button
            onClick={() => setActiveTab("interview")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "interview"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <MessageSquare size={16} className={activeTab === "interview" ? "text-orange-400" : "text-stone-400"} />
            Interview Q&amp;A
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "quiz"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <ShieldCheck size={16} className={activeTab === "quiz" ? "text-orange-400" : "text-stone-400"} />
            Knowledge Assessment
          </button>

          <button
            onClick={() => setActiveTab("tracker")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "tracker"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <Target size={16} className={activeTab === "tracker" ? "text-orange-400" : "text-stone-400"} />
            Competencies ({checkedCompetencies.size}/18)
          </button>

          <button
            onClick={() => setActiveTab("resources")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "resources"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <ExternalLink size={16} className={activeTab === "resources" ? "text-orange-400" : "text-stone-400"} />
            University Resources
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ================================================================= */}
        {/* TAB 1: CURRICULUM EXPLORER (10 UNITS)                             */}
        {/* ================================================================= */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-[#e7e3da] p-4 shadow-xs sticky top-20 max-h-[82vh] flex flex-col">
              <div className="mb-3">
                <span className="text-[10px] font-mono uppercase font-bold text-stone-500 tracking-wider block">
                  Curriculum Navigator
                </span>
                <h3 className="text-sm font-bold text-stone-900">10 Transformer Units</h3>
              </div>

              {/* Part Filter */}
              <div className="mb-3">
                <select
                  value={selectedPartFilter}
                  onChange={(e) => setSelectedPartFilter(e.target.value)}
                  className="w-full text-xs font-mono font-medium bg-[#f5f2eb] border border-[#e7e3da] rounded-xl px-2.5 py-2 text-stone-800 focus:outline-none focus:ring-1 focus:ring-orange-500 cursor-pointer"
                >
                  <option value="all">All Parts (10 Units)</option>
                  <option value="1">Part I: Attention &amp; Multi-Head (Units 1-3)</option>
                  <option value="2">Part II: Building Blocks &amp; Encodings (Units 4-6)</option>
                  <option value="3">Part III: Encoder &amp; Decoder Stacks (Units 7-8)</option>
                  <option value="4">Part IV: Full Assembly &amp; Optimization (Units 9-10)</option>
                </select>
              </div>

              {/* Unit List */}
              <div className="overflow-y-auto space-y-1.5 pr-1 flex-1">
                {filteredUnits.map((unit) => {
                  const globalIdx = TRANSFORMER_CURRICULUM_UNITS.findIndex((u) => u.id === unit.id);
                  const isSelected = globalIdx === selectedUnitIdx;
                  return (
                    <button
                      key={unit.id}
                      onClick={() => {
                        setSelectedUnitIdx(globalIdx);
                        window.scrollTo({ top: 350, behavior: "smooth" });
                      }}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 ${
                        isSelected
                          ? "bg-orange-50 border border-orange-200 text-orange-950 font-bold shadow-2xs"
                          : "hover:bg-[#f5f2eb] text-stone-700 border border-transparent font-medium"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md shrink-0 mt-0.5 ${
                          isSelected
                            ? "bg-orange-600 text-white font-bold"
                            : "bg-[#eae6df] text-stone-600"
                        }`}
                      >
                        {unit.unitNumber.toString().padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs leading-snug line-clamp-1">{unit.title}</div>
                        <div className="text-[10px] text-stone-500 font-mono mt-0.5 flex items-center justify-between">
                          <span>{unit.level}</span>
                          <span>{unit.duration}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detailed Unit View */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                      Unit {activeUnit.unitNumber.toString().padStart(2, "0")}
                    </span>
                    <span className="text-xs font-mono text-stone-500">
                      {activeUnit.part}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-stone-500">
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {activeUnit.duration}
                    </span>
                    <span>&bull;</span>
                    <span>{activeUnit.level}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">
                  {activeUnit.title}
                </h2>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  {activeUnit.summary}
                </p>

                {/* Core Concepts */}
                <div className="mt-5 p-4 rounded-xl bg-orange-50/60 border border-orange-200/80">
                  <div className="text-xs font-mono uppercase font-bold text-orange-900 mb-2 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-orange-600" /> Core Concepts Explored:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeUnit.coreConcepts.map((concept, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-orange-950 font-medium">
                        <Check size={13} className="text-orange-600 mt-0.5 shrink-0" />
                        <span>{concept}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deep Dive Text */}
                <div className="mt-6 prose prose-stone max-w-none text-xs sm:text-sm leading-relaxed text-stone-700 whitespace-pre-line font-sans border-t border-[#e7e3da] pt-6">
                  {activeUnit.deepDiveText}
                </div>

                {/* Code Snippet Box */}
                {activeUnit.codeSnippet && (
                  <div className="mt-6 rounded-xl bg-stone-900 border border-stone-800 overflow-hidden shadow-sm">
                    <div className="flex items-center justify-between px-4 py-2.5 bg-stone-950 border-b border-stone-800">
                      <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                        <FileCode size={14} className="text-orange-400" />
                        <span>PyTorch From-Scratch Implementation</span>
                      </div>
                      <button
                        onClick={() => handleCopyCode(activeUnit.codeSnippet, activeUnit.unitNumber)}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 flex items-center gap-1.5 transition-all"
                      >
                        {copiedCodeIdx === activeUnit.unitNumber ? (
                          <>
                            <Check size={12} className="text-green-400" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy size={12} /> Copy Code
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 text-xs font-mono text-stone-200 overflow-x-auto leading-relaxed">
                      <code>{activeUnit.codeSnippet}</code>
                    </pre>
                  </div>
                )}

                {/* Critical Thinking Challenges */}
                {activeUnit.challenges && activeUnit.challenges.length > 0 && (
                  <div className="mt-6 p-4 rounded-xl bg-[#f5f2eb] border border-[#e7e3da]">
                    <div className="text-xs font-mono uppercase font-bold text-stone-800 mb-2 flex items-center gap-1.5">
                      <Target size={14} className="text-orange-600" /> University Engineering Challenges:
                    </div>
                    <ul className="space-y-1.5">
                      {activeUnit.challenges.map((ch, cIdx) => (
                        <li key={cIdx} className="text-xs text-stone-700 flex items-start gap-2">
                          <span className="font-mono text-orange-600 font-bold shrink-0">{cIdx + 1}.</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pagination footer */}
                <div className="mt-8 pt-4 border-t border-[#e7e3da] flex items-center justify-between">
                  <button
                    onClick={handlePrevUnit}
                    disabled={selectedUnitIdx === 0}
                    className="px-3.5 py-2 rounded-xl border border-[#e7e3da] text-xs font-bold text-stone-700 hover:bg-[#f5f2eb] disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5"
                  >
                    <ArrowLeft size={14} /> Previous Unit
                  </button>
                  <span className="text-xs font-mono text-stone-500">
                    {selectedUnitIdx + 1} of {TRANSFORMER_CURRICULUM_UNITS.length}
                  </span>
                  <button
                    onClick={handleNextUnit}
                    disabled={selectedUnitIdx === TRANSFORMER_CURRICULUM_UNITS.length - 1}
                    className="px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 shadow-2xs"
                  >
                    Next Unit <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 2: INTERACTIVE SIMULATORS                                     */}
        {/* ================================================================= */}
        {activeTab === "interactive-tools" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                Interactive Engineering Suite
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-2">
                5 Interactive Transformer Simulators
              </h2>
              <p className="text-sm text-stone-600 mt-1 max-w-3xl">
                Explore scaled dot-product attention mathematics, lower-triangular causal masks, multi-head tensor splitting, sinusoidal positional wave harmonics, and autoregressive generation step-by-step.
              </p>
            </div>

            <ScaledDotProductAttentionVisualizer />
            <CausalAndPaddingMaskPlayground />
            <MultiHeadAttentionSplittingTool />
            <SinusoidalPositionalEncodingExplorer />
            <AutoregressiveGenerationSimulator />
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 3: 8 PRACTICAL LABS                                           */}
        {/* ================================================================= */}
        {activeTab === "labs" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Labs list sidebar */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-[#e7e3da] p-4 shadow-xs sticky top-20">
              <div className="text-[10px] font-mono uppercase font-bold text-stone-500 tracking-wider mb-1">
                Practical Laboratories
              </div>
              <h3 className="text-sm font-bold text-stone-900 mb-3">8 Hands-On PyTorch Labs</h3>

              <div className="space-y-1.5">
                {TRANSFORMER_LABS.map((lab) => {
                  const isSelected = lab.id === activeLabId;
                  return (
                    <button
                      key={lab.id}
                      onClick={() => setActiveLabId(lab.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 ${
                        isSelected
                          ? "bg-orange-50 border border-orange-200 text-orange-950 font-bold shadow-2xs"
                          : "hover:bg-[#f5f2eb] text-stone-700 border border-transparent font-medium"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md shrink-0 mt-0.5 ${
                          isSelected ? "bg-orange-600 text-white font-bold" : "bg-[#eae6df] text-stone-600"
                        }`}
                      >
                        {lab.labNumber}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs leading-snug line-clamp-1">{lab.title}</div>
                        <div className="text-[10px] text-stone-500 font-mono mt-0.5 flex justify-between">
                          <span>{lab.difficulty}</span>
                          <span>{lab.duration}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Lab Details */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                    Lab {activeLab.labNumber}
                  </span>
                  <span className="text-xs font-mono text-stone-500">{activeLab.difficulty}</span>
                </div>
                <div className="text-xs font-mono text-stone-500 flex items-center gap-1">
                  <Clock size={13} /> {activeLab.duration}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-stone-900">{activeLab.title}</h2>
                <p className="text-xs font-mono text-orange-700 mt-1">Tools: {activeLab.tools}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#f5f2eb] border border-[#e7e3da]">
                <div className="text-xs font-mono font-bold text-stone-800 uppercase tracking-wider mb-1">
                  Learning Objective
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">{activeLab.objective}</p>
              </div>

              <div>
                <div className="text-xs font-mono font-bold text-stone-800 uppercase tracking-wider mb-1">
                  Problem Statement
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">{activeLab.problemStatement}</p>
              </div>

              {/* Lab Code Block */}
              <div className="rounded-xl bg-stone-900 border border-stone-800 overflow-hidden shadow-sm">
                <div className="flex items-center justify-between px-4 py-2.5 bg-stone-950 border-b border-stone-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                    <Terminal size={14} className="text-orange-400" />
                    <span>PyTorch Executable Script</span>
                  </div>
                  <button
                    onClick={handleCopyLabCode}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 flex items-center gap-1.5 transition-all"
                  >
                    {copiedLabCode ? (
                      <>
                        <Check size={12} className="text-green-400" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy size={12} /> Copy Script
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 text-xs font-mono text-stone-200 overflow-x-auto leading-relaxed">
                  <code>{activeLab.code}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 4: CAPSTONE PROJECT                                           */}
        {/* ================================================================= */}
        {activeTab === "project" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                Capstone Portfolio Project
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-2">
                {TRANSFORMER_CAPSTONE.title}
              </h2>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed max-w-4xl">
                {TRANSFORMER_CAPSTONE.overview}
              </p>

              <div className="mt-4 flex flex-wrap gap-3 text-xs font-mono">
                <span className="px-3 py-1 rounded-lg bg-stone-100 text-stone-700 font-semibold border border-stone-200">
                  Duration: {TRANSFORMER_CAPSTONE.duration}
                </span>
                <span className="px-3 py-1 rounded-lg bg-stone-100 text-stone-700 font-semibold border border-stone-200">
                  Level: {TRANSFORMER_CAPSTONE.difficulty}
                </span>
                <span className="px-3 py-1 rounded-lg bg-stone-100 text-stone-700 font-semibold border border-stone-200">
                  Stack: PyTorch 2.0+, NumPy
                </span>
              </div>
            </div>

            {/* 7 Implementation Phases */}
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs">
              <div className="text-xs font-mono uppercase font-bold text-stone-800 tracking-wider mb-4 flex items-center gap-1.5">
                <ListOrdered size={16} className="text-orange-600" /> 7-Phase Engineering Blueprint
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TRANSFORMER_CAPSTONE.phases.map((ph, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-stone-200 bg-[#fbfaf8] hover:border-orange-200 transition-all">
                    <div className="text-xs font-bold text-stone-900">{ph.name}</div>
                    <div className="text-xs text-stone-600 mt-1 leading-relaxed">{ph.details}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Runnable Script Box */}
            <div className="rounded-2xl bg-stone-900 border border-stone-800 overflow-hidden shadow-sm">
              <div className="flex items-center justify-between px-5 py-3 bg-stone-950 border-b border-stone-800">
                <div className="flex items-center gap-2 text-xs font-mono text-stone-300">
                  <Terminal size={15} className="text-orange-400" />
                  <span>transformer_from_scratch.py (Full Complete Model)</span>
                </div>
                <button
                  onClick={handleCopyCapstoneCode}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-stone-200 hover:text-white bg-stone-800 hover:bg-stone-700 flex items-center gap-1.5 transition-all"
                >
                  {copiedCapstoneCode ? (
                    <>
                      <Check size={13} className="text-green-400" /> Copied Script
                    </>
                  ) : (
                    <>
                      <Copy size={13} /> Copy Complete Script
                    </>
                  )}
                </button>
              </div>
              <pre className="p-5 text-xs font-mono text-stone-200 overflow-x-auto leading-relaxed max-h-[550px] overflow-y-auto">
                <code>{TRANSFORMER_CAPSTONE.runnableScript}</code>
              </pre>
            </div>

            {/* 100-Mark Rubric */}
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs">
              <div className="text-xs font-mono uppercase font-bold text-stone-800 tracking-wider mb-3 flex items-center gap-1.5">
                <Award size={16} className="text-orange-600" /> 100-Mark University Evaluation Rubric
              </div>
              <div className="divide-y divide-stone-100 text-xs">
                {TRANSFORMER_CAPSTONE.rubric.map((r, i) => (
                  <div key={i} className="py-2.5 flex items-start justify-between gap-4">
                    <div>
                      <div className="font-bold text-stone-900">{r.criterion}</div>
                      <div className="text-stone-500 mt-0.5">{r.description}</div>
                    </div>
                    <span className="font-mono font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 shrink-0">
                      {r.weight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 5: TECHNICAL INTERVIEW Q&A                                    */}
        {/* ================================================================= */}
        {activeTab === "interview" && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                Industry Assessment Prep
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-2">
                Senior Transformer &amp; LLM Engineer Interview Questions
              </h2>
              <p className="text-sm text-stone-600 mt-1 max-w-3xl">
                Technical questions focusing on attention mathematical proofs, KV cache mechanisms, FlashAttention IO-awareness, and Pre-LN vs Post-LN stability.
              </p>
            </div>

            {TRANSFORMER_INTERVIEW_QUESTIONS.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-[#e7e3da] p-5 shadow-xs">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-stone-900 text-white shrink-0 mt-0.5">
                    Q{idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-stone-900 leading-snug">{item.q}</h3>
                </div>
                <div className="mt-3 pl-8 text-xs sm:text-sm text-stone-700 leading-relaxed border-l-2 border-orange-500">
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 6: 10-QUESTION KNOWLEDGE ASSESSMENT                           */}
        {/* ================================================================= */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                  Curriculum Mastery
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                  Transformer Knowledge Assessment
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  10 comprehensive university-grade examination questions covering attention mechanics, masking, and architecture.
                </p>
              </div>

              {showQuizResults ? (
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-2xl font-black text-stone-900 font-mono">
                      {quizScore} / {TRANSFORMER_QUIZ_QUESTIONS.length}
                    </div>
                    <div className="text-[11px] font-bold text-orange-600">
                      {quizScore >= 8 ? "Mastery Achieved" : "Review Recommended"}
                    </div>
                  </div>
                  <button
                    onClick={handleResetQuiz}
                    className="px-3.5 py-2 rounded-xl border border-stone-300 text-xs font-bold hover:bg-stone-50 flex items-center gap-1.5"
                  >
                    <RotateCcw size={14} /> Retry
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowQuizResults(true)}
                  disabled={Object.keys(quizAnswers).length === 0}
                  className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-bold disabled:opacity-40 shadow-2xs transition-all"
                >
                  Submit Examination
                </button>
              )}
            </div>

            {/* Questions list */}
            <div className="space-y-4">
              {TRANSFORMER_QUIZ_QUESTIONS.map((q) => {
                const selectedOpt = quizAnswers[q.id];
                const isCorrect = selectedOpt === q.answer;

                return (
                  <div key={q.id} className="bg-white rounded-2xl border border-[#e7e3da] p-5 shadow-xs">
                    <div className="text-xs font-mono font-bold text-orange-600 mb-1">
                      Question {q.id} of {TRANSFORMER_QUIZ_QUESTIONS.length}
                    </div>
                    <h3 className="text-sm font-bold text-stone-900 leading-snug">{q.question}</h3>

                    <div className="mt-3 space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isChosen = selectedOpt === optIdx;
                        let optionClasses = "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100";

                        if (isChosen) {
                          optionClasses = "bg-orange-50 border-orange-400 text-orange-950 font-semibold";
                        }

                        if (showQuizResults) {
                          if (optIdx === q.answer) {
                            optionClasses = "bg-green-50 border-green-500 text-green-950 font-bold";
                          } else if (isChosen && !isCorrect) {
                            optionClasses = "bg-red-50 border-red-500 text-red-950 font-semibold";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={showQuizResults}
                            onClick={() => handleSelectQuizOption(q.id, optIdx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${optionClasses}`}
                          >
                            <span>{opt}</span>
                            {showQuizResults && optIdx === q.answer && (
                              <CheckCircle2 size={16} className="text-green-600 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {showQuizResults && (
                      <div className="mt-3 p-3 rounded-xl bg-[#f5f2eb] border border-[#e7e3da] text-xs text-stone-700">
                        <strong>Explanation:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 7: COMPETENCY TRACKER                                         */}
        {/* ================================================================= */}
        {activeTab === "tracker" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                Self-Assessment
              </span>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                    Module 06 Completion Tracker
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Track your engineering mastery across all 18 core competencies.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-stone-900 font-mono">
                    {Math.round((checkedCompetencies.size / TRANSFORMER_COMPETENCIES.length) * 100)}%
                  </div>
                  <div className="text-[11px] font-bold text-orange-600">
                    {checkedCompetencies.size} of {TRANSFORMER_COMPETENCIES.length} Completed
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden mt-4 border border-stone-200">
                <div
                  className="bg-orange-600 h-full transition-all duration-300"
                  style={{
                    width: `${(checkedCompetencies.size / TRANSFORMER_COMPETENCIES.length) * 100}%`
                  }}
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs">
              <div className="divide-y divide-stone-100">
                {TRANSFORMER_COMPETENCIES.map((comp, idx) => {
                  const isChecked = checkedCompetencies.has(idx);
                  return (
                    <label
                      key={idx}
                      className="py-3 flex items-start gap-3 cursor-pointer hover:bg-stone-50/50 px-2 rounded-lg transition-all"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleCompetency(idx)}
                        className="mt-0.5 rounded text-orange-600 focus:ring-orange-500 h-4 w-4"
                      />
                      <span className={`text-xs sm:text-sm ${isChecked ? "line-through text-stone-400" : "text-stone-800 font-medium"}`}>
                        {comp}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 8: UNIVERSITY RESOURCES                                       */}
        {/* ================================================================= */}
        {activeTab === "resources" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                Academic Bibliography
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-2">
                Authoritative Transformer Curricula &amp; Research Papers
              </h2>
              <p className="text-sm text-stone-600 mt-1 max-w-3xl">
                Fundamental papers, annotated implementations, and lecture series from Stanford, Harvard, and PyTorch Research.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TRANSFORMER_RESOURCES.map((res, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-[#e7e3da] p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-bold border border-stone-200">
                      {res.type}
                    </span>
                    <h3 className="text-sm font-bold text-stone-900 mt-2">{res.title}</h3>
                    <div className="text-xs text-orange-700 font-semibold font-mono mt-0.5">
                      {res.authors}
                    </div>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      {res.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100">
                    <a
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700"
                    >
                      Visit Official Resource <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
