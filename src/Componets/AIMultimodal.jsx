import React, { useState } from "react";
import {
  Eye,
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
  HelpCircle,
  Code2
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  MULTIMODAL_MODULE_OVERVIEW,
  MULTIMODAL_CURRICULUM_UNITS,
  MULTIMODAL_PRACTICAL_LABS,
  MULTIMODAL_CAPSTONE_PROJECT,
  MULTIMODAL_ASSIGNMENTS,
  MULTIMODAL_UNIVERSITY_RESOURCES,
  MULTIMODAL_EXAMINATION_QUESTIONS,
  MULTIMODAL_COMPETENCY_CHECKLIST
} from "./aiMultimodalData";
import {
  VitPatchProjectionVisualizer,
  ClipZeroShotClassifierSandbox,
  AudioSpectrogramWerCalculator,
  NeuralTtsPipelineExplorer,
  RealtimeVoiceBargeInSimulator
} from "./AIMultimodalDiagrams";

export default function AIMultimodal() {
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

  const calculateScore = () => {
    let score = 0;
    MULTIMODAL_EXAMINATION_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  const handleRetakeQuiz = () => {
    setUserAnswers({});
    setShowQuizResults(false);
  };

  const toggleCompetency = (idx) => {
    setCheckedCompetencies((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const completedCompetenciesCount = Object.values(checkedCompetencies).filter(Boolean).length;
  const competencyPct = Math.round((completedCompetenciesCount / MULTIMODAL_COMPETENCY_CHECKLIST.length) * 100);

  const activeUnit = MULTIMODAL_CURRICULUM_UNITS[selectedUnitIdx];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans pb-16">
      <ModuleNav />

      {/* Hero Header */}
      <header className="border-b border-stone-200 bg-white pt-8 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="rounded-full bg-orange-100 border border-orange-200 px-3 py-0.5 text-xs font-semibold text-orange-800">
              Module {MULTIMODAL_MODULE_OVERVIEW.moduleNumber}
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-0.5 text-xs font-medium text-stone-700">
              {MULTIMODAL_MODULE_OVERVIEW.difficulty} Level
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-0.5 text-xs font-medium text-stone-700">
              {MULTIMODAL_MODULE_OVERVIEW.recommendedDuration}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
            {MULTIMODAL_MODULE_OVERVIEW.title}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-4xl leading-relaxed">
            {MULTIMODAL_MODULE_OVERVIEW.centralLearningObjective}
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-3">
              <span className="text-stone-600 block">Core Libraries:</span>
              <span className="font-semibold text-stone-900 mt-0.5 block">{MULTIMODAL_MODULE_OVERVIEW.mainLibraries}</span>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-3">
              <span className="text-stone-600 block">Supporting Models:</span>
              <span className="font-semibold text-stone-900 mt-0.5 block">{MULTIMODAL_MODULE_OVERVIEW.supportingTools}</span>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-3">
              <span className="text-stone-600 block">Prerequisites:</span>
              <span className="font-semibold text-stone-900 mt-0.5 block">{MULTIMODAL_MODULE_OVERVIEW.prerequisites}</span>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-3">
              <span className="text-stone-600 block">Capstone Outcome:</span>
              <span className="font-semibold text-orange-700 mt-0.5 block">{MULTIMODAL_MODULE_OVERVIEW.finalOutcome}</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav aria-label="Module Navigation Tabs" className="mt-8 flex flex-wrap gap-2 border-b border-stone-200 pb-px">
            {[
              { id: "curriculum", label: "Curriculum Units", icon: BookOpen },
              { id: "interactive-tools", label: "Interactive Tools", icon: Eye },
              { id: "labs", label: "Hands-on Labs", icon: Terminal },
              { id: "project", label: "Capstone Project", icon: Award },
              { id: "exercises", label: "Assignments", icon: Code2 },
              { id: "quiz", label: "Knowledge Check", icon: HelpCircle },
              { id: "tracker", label: "Competencies", icon: Target },
              { id: "resources", label: "Resources", icon: ExternalLink }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-t-lg transition cursor-pointer ${
                    activeTab === tab.id
                      ? "border-b-2 border-orange-600 text-orange-700 bg-orange-50/50"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* TAB 1: CURRICULUM */}
        {activeTab === "curriculum" && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Unit Selector */}
            <aside className="lg:col-span-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-600 px-2 mb-3">
                Curriculum Units (1–{MULTIMODAL_CURRICULUM_UNITS.length})
              </h3>
              <div className="space-y-1.5 max-h-[720px] overflow-y-auto pr-1">
                {MULTIMODAL_CURRICULUM_UNITS.map((unit, idx) => (
                  <button
                    key={unit.id}
                    onClick={() => setSelectedUnitIdx(idx)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer ${
                      selectedUnitIdx === idx
                        ? "border-orange-500 bg-orange-50/60 shadow-xs ring-1 ring-orange-400"
                        : "border-stone-200 bg-stone-50 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center justify-between text-stone-500 mb-1">
                      <span className="font-mono text-[11px] font-bold text-orange-700">
                        Unit {unit.unitNumber}
                      </span>
                      <span className="text-[10px] flex items-center gap-1">
                        <Clock size={11} /> {unit.readTime}
                      </span>
                    </div>
                    <div className="font-bold text-stone-900 leading-snug">{unit.title}</div>
                  </button>
                ))}
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
              </div>

              {/* Key Concepts Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {activeUnit.keyConcepts.map((kc, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-stone-100 border border-stone-200 px-2.5 py-1 text-[11px] font-medium text-stone-700"
                  >
                    #{kc}
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

                    {sec.formula && (
                      <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 font-mono text-center text-stone-900 font-bold my-3 text-xs sm:text-sm overflow-x-auto">
                        {sec.formula}
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
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-stone-300 bg-white text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50 cursor-pointer"
                >
                  <ArrowLeft size={14} /> Previous Unit
                </button>
                <span className="text-xs font-mono text-stone-500 font-medium">
                  {selectedUnitIdx + 1} of {MULTIMODAL_CURRICULUM_UNITS.length}
                </span>
                <button
                  disabled={selectedUnitIdx === MULTIMODAL_CURRICULUM_UNITS.length - 1}
                  onClick={() => setSelectedUnitIdx((prev) => Math.min(MULTIMODAL_CURRICULUM_UNITS.length - 1, prev + 1))}
                  className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-orange-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-orange-700 cursor-pointer"
                >
                  Next Unit <ArrowRight size={14} />
                </button>
              </div>
            </article>
          </div>
        )}

        {/* TAB 2: INTERACTIVE TOOLS */}
        {activeTab === "interactive-tools" && (
          <div className="space-y-8">
            <VitPatchProjectionVisualizer />
            <ClipZeroShotClassifierSandbox />
            <AudioSpectrogramWerCalculator />
            <NeuralTtsPipelineExplorer />
            <RealtimeVoiceBargeInSimulator />
          </div>
        )}

        {/* TAB 3: HANDS-ON LABS */}
        {activeTab === "labs" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <Terminal className="text-orange-600" size={22} />
                5 Practical Multimodal Engineering Laboratories
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Implement Vision-Language Models for screenshot debugging, speech-to-text with Faster-Whisper, neural speech synthesis, real-time voice assistants with barge-in, and Multimodal RAG.
              </p>
            </div>

            {MULTIMODAL_PRACTICAL_LABS.map((lab) => (
              <div key={lab.id} className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold px-3 py-0.5">
                        {lab.labNumber}
                      </span>
                      <span className="rounded-full bg-stone-100 text-stone-700 text-xs font-medium px-2.5 py-0.5">
                        {lab.difficulty}
                      </span>
                      <span className="text-xs text-stone-500 flex items-center gap-1">
                        <Clock size={12} /> {lab.duration}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-2">{lab.title}</h3>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">Learning Objectives:</h4>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-stone-700 space-y-1">
                    {lab.objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-stone-800 bg-stone-900 overflow-hidden shadow-md">
                  <div className="flex items-center justify-between bg-stone-950 px-4 py-2 text-xs font-mono text-stone-400 border-b border-stone-800">
                    <span className="text-orange-400 font-semibold">{lab.id}.py</span>
                    <button
                      onClick={() => handleCopyCode(lab.starterCode, lab.id)}
                      className="flex items-center gap-1 text-stone-400 hover:text-white transition cursor-pointer"
                    >
                      {copiedCodeIdx === lab.id ? (
                        <>
                          <Check size={12} className="text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono text-stone-200 overflow-x-auto leading-relaxed max-h-96">
                    <code>{lab.starterCode}</code>
                  </pre>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                  <span className="font-bold text-stone-900">Expected Outcome: </span>
                  {lab.expectedOutput}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: CAPSTONE PROJECT */}
        {activeTab === "project" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold px-3 py-0.5">
                  Major Production Project
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-stone-900">{MULTIMODAL_CAPSTONE_PROJECT.title}</h2>
              <p className="text-sm text-stone-700 leading-relaxed mt-2">{MULTIMODAL_CAPSTONE_PROJECT.overview}</p>
            </div>

            {/* Architecture Layers */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
              <h3 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Eye className="text-orange-600" size={18} />
                7-Layer Multimodal Architecture Breakdown
              </h3>
              <div className="space-y-3">
                {MULTIMODAL_CAPSTONE_PROJECT.architectureLayers.map((layer, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs font-mono text-stone-800 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-orange-600 text-white font-bold text-center leading-5 shrink-0 text-[11px]">
                      {idx + 1}
                    </span>
                    <span>{layer}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rubric */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
              <h3 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="text-orange-600" size={18} />
                Grading Rubric & Deliverables (100 Marks Total)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-stone-200 rounded-lg overflow-hidden">
                  <thead className="bg-stone-100 text-stone-700 font-semibold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="py-2.5 px-3">Evaluation Component</th>
                      <th className="py-2.5 px-3">Technical Criteria</th>
                      <th className="py-2.5 px-3 text-right">Marks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 bg-white">
                    {MULTIMODAL_CAPSTONE_PROJECT.rubric.map((r, i) => (
                      <tr key={i} className="hover:bg-stone-50">
                        <td className="py-2.5 px-3 font-semibold text-stone-900">{r.component}</td>
                        <td className="py-2.5 px-3 text-stone-600">{r.criteria}</td>
                        <td className="py-2.5 px-3 text-right font-mono font-bold text-orange-700">{r.marks} pts</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: ASSIGNMENTS */}
        {activeTab === "exercises" && (
          <div className="space-y-8">
            {/* Coding Challenges */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Code2 className="text-orange-600" size={20} />
                15 Practical Programming Assignments
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {MULTIMODAL_ASSIGNMENTS.codingAssignments.map((assign, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs text-stone-800">
                    <span className="font-bold text-orange-800 block mb-1">Assignment #{idx + 1}:</span>
                    <p>{assign}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Theory Questions */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                <BookOpen className="text-orange-600" size={20} />
                30 University Theory Questions
              </h3>
              <div className="space-y-2">
                {MULTIMODAL_ASSIGNMENTS.theoryQuestions.map((q, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-stone-200 bg-stone-50 text-xs text-stone-800 flex items-start gap-2">
                    <span className="font-mono font-bold text-orange-700 shrink-0">Q{idx + 1}.</span>
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: QUIZ */}
        {activeTab === "quiz" && (
          <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
              <div>
                <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <HelpCircle className="text-orange-600" size={22} />
                  Module 12 Examination & Knowledge Check
                </h2>
                <p className="text-xs text-stone-600 mt-0.5">
                  Answer 10 rigorous technical questions assessing Vision Transformers, CLIP, Whisper ASR, Neural TTS, and Multimodal RAG.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-stone-700">
                  {Object.keys(userAnswers).length} / {MULTIMODAL_EXAMINATION_QUESTIONS.length} Answered
                </span>
                {showQuizResults && (
                  <button
                    onClick={handleRetakeQuiz}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-stone-300 bg-white text-stone-700 hover:bg-stone-50"
                  >
                    <RotateCcw size={13} /> Retake
                  </button>
                )}
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {MULTIMODAL_EXAMINATION_QUESTIONS.map((q, qIdx) => {
                const isCorrect = userAnswers[q.id] === q.correctAnswer;
                return (
                  <div key={q.id} className="p-4 sm:p-5 rounded-xl border border-stone-200 bg-stone-50">
                    <div className="flex items-start gap-2 text-sm font-bold text-stone-900 mb-3">
                      <span className="font-mono text-orange-700">Q{qIdx + 1}.</span>
                      <span>{q.question}</span>
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = "border-stone-200 bg-white text-stone-700 hover:bg-stone-100";
                        if (userAnswers[q.id] === optIdx) {
                          btnStyle = "border-orange-500 bg-orange-50 text-orange-950 font-semibold ring-1 ring-orange-400";
                        }
                        if (showQuizResults) {
                          if (optIdx === q.correctAnswer) {
                            btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-400";
                          } else if (userAnswers[q.id] === optIdx) {
                            btnStyle = "border-red-500 bg-red-50 text-red-950 ring-1 ring-red-400";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleAnswerSelect(q.id, optIdx)}
                            className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition cursor-pointer flex items-center justify-between ${btnStyle}`}
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
                      <div className={`mt-3 p-3 rounded-lg text-xs leading-relaxed ${
                        isCorrect ? "bg-emerald-50 text-emerald-900 border border-emerald-200" : "bg-amber-50 text-amber-900 border border-amber-200"
                      }`}>
                        <span className="font-bold block mb-1">Explanation:</span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submit Bar */}
            {!showQuizResults ? (
              <div className="flex justify-end pt-4 border-t border-stone-200">
                <button
                  disabled={Object.keys(userAnswers).length < MULTIMODAL_EXAMINATION_QUESTIONS.length}
                  onClick={() => setShowQuizResults(true)}
                  className="px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-orange-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-orange-700 cursor-pointer"
                >
                  Submit Examination ({Object.keys(userAnswers).length}/{MULTIMODAL_EXAMINATION_QUESTIONS.length})
                </button>
              </div>
            ) : (
              <div className="p-5 rounded-xl border border-orange-200 bg-orange-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-orange-950">Examination Completed!</h4>
                  <p className="text-xs text-orange-800 mt-0.5">
                    You scored <span className="font-bold">{calculateScore()}</span> out of {MULTIMODAL_EXAMINATION_QUESTIONS.length} (
                    {Math.round((calculateScore() / MULTIMODAL_EXAMINATION_QUESTIONS.length) * 100)}%)
                  </p>
                </div>
                <button
                  onClick={handleRetakeQuiz}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-orange-600 text-white hover:bg-orange-700 cursor-pointer"
                >
                  Retake Exam
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 7: COMPETENCIES TRACKER */}
        {activeTab === "tracker" && (
          <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <Target className="text-orange-600" size={22} />
                  Module 12 Competency & Mastery Tracker
                </h2>
                <p className="text-xs text-stone-600 mt-0.5">
                  Track your mastery across the 20 fundamental learning outcomes of multimodal generative AI.
                </p>
              </div>
              <div className="text-right">
                <div className="text-xl font-extrabold font-mono text-orange-700">{competencyPct}%</div>
                <div className="text-[11px] text-stone-500">{completedCompetenciesCount} of {MULTIMODAL_COMPETENCY_CHECKLIST.length} Mastered</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-full rounded-full bg-stone-100 overflow-hidden">
              <div
                className="h-full bg-orange-600 transition-all duration-300 rounded-full"
                style={{ width: `${competencyPct}%` }}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-2.5">
              {MULTIMODAL_COMPETENCY_CHECKLIST.map((comp, idx) => {
                const isChecked = !!checkedCompetencies[idx];
                return (
                  <button
                    key={idx}
                    onClick={() => toggleCompetency(idx)}
                    className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? "border-emerald-300 bg-emerald-50/50 text-emerald-950 font-medium"
                        : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <span className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border shrink-0 ${
                      isChecked ? "bg-emerald-600 border-emerald-600 text-white" : "border-stone-300 bg-white"
                    }`}>
                      {isChecked && <Check size={12} />}
                    </span>
                    <span>{comp}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 8: RESOURCES */}
        {activeTab === "resources" && (
          <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <ExternalLink className="text-orange-600" size={22} />
                Official Documentation & Research Publications
              </h2>
              <p className="text-xs text-stone-600 mt-0.5">
                Primary model hubs, research papers, and technical APIs for vision, speech, and multimodal systems.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {MULTIMODAL_UNIVERSITY_RESOURCES.map((res, idx) => (
                <a
                  key={idx}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-orange-50/40 hover:border-orange-300 transition block group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-100 px-2 py-0.5 rounded">
                    {res.category}
                  </span>
                  <h4 className="text-sm font-bold text-stone-900 mt-2 group-hover:text-orange-700 transition flex items-center justify-between">
                    <span>{res.title}</span>
                    <ExternalLink size={13} className="text-stone-400 group-hover:text-orange-600" />
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">{res.description}</p>
                </a>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
