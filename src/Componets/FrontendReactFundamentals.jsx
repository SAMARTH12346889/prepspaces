import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Atom,
  BookOpen,
  CheckCircle2,
  Code2,
  HelpCircle,
  Layers,
  ListChecks,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import FrontendReactFundamentalsSections from "./FrontendReactFundamentalsSections";

const REACT_PILLARS = [
  {
    id: "components-props",
    title: "Components, JSX & One-Way Props",
    summary: "Declarative UI functions, Fragments (<></>), `children`, lifting state up, and read-only props.",
    details: [
      "Component names start with capital letters; use `className` and `htmlFor` in JSX.",
      "Props flow downward from parent to child; children trigger parent actions via callbacks.",
      "Lift shared state to the nearest common parent when sibling components need to stay synchronized.",
    ],
  },
  {
    id: "state-events",
    title: "useState Snapshots & Immutability",
    summary: "Functional updaters (`prev => ...`), immutable array/object updates, derived values, and controlled forms.",
    details: [
      "State acts like a snapshot per render; use `setCount(prev => prev + 1)` when depending on previous state.",
      "Never mutate state arrays/objects directly — use spread, `map`, and `filter`.",
      "Derive computed values (e.g. `completedCount`) during render instead of duplicating state.",
    ],
  },
  {
    id: "effects-refs",
    title: "useEffect, useRef & Lifecycle",
    summary: "Synchronizing with external systems, AbortController cleanup, StrictMode checks, and DOM refs.",
    details: [
      "Call Hooks unconditionally at the top level of React components or custom Hooks.",
      "Return cleanup functions from `useEffect` for timers, listeners, and `AbortController.abort()`.",
      "Use `useRef` for DOM element focus or mutable IDs without triggering re-renders.",
    ],
  },
  {
    id: "custom-hooks",
    title: "Reusable UI & Custom Hooks",
    summary: "Extracting stateful logic (`useToggle`, `useLocalStorage`, `useFetch<T>`) + Zod runtime validation.",
    details: [
      "Custom Hooks reuse stateful logic; each component calling a Hook gets its own isolated state.",
      "Use stable `key` props on list items (avoid array indexes when items can reorder or delete).",
      "Validate LocalStorage or API JSON with `TasksSchema.safeParse(...)` at runtime.",
    ],
  },
];

const TASK_PROJECT_CHECKLIST = [
  { id: "rf1", label: "Vite + React + TypeScript project organized into components/, hooks/, schemas/, types/" },
  { id: "rf2", label: "Zod runtime schema (`TaskSchema`) validating stored LocalStorage JSON safely" },
  { id: "rf3", label: "Controlled `TaskForm` + inline-editable `TaskItem` with accessible `aria-label`" },
  { id: "rf4", label: "Immutable `useState` CRUD (add, toggle, update, delete) + derived statistics" },
  { id: "rf5", label: "Search + All/Active/Completed filters + stable `key={task.id}` list rendering" },
  { id: "rf6", label: "Custom Hooks (`useLocalStorage`, `useToggle`, `useFetch`) & keyboard-accessible UI" },
];

const USE_FETCH_SNIPPET = `function useFetch<T>(url: string) {
  const [state, setState] = useState<{
    data: T | null;
    loading: boolean;
    error: string | null;
  }>({ data: null, loading: true, error: null });

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      setState({ data: null, loading: true, error: null });
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(\`Request failed: \${res.status}\`);
        const json: unknown = await res.json();
        if (!controller.signal.aborted) {
          setState({ data: json as T, loading: false, error: null });
        }
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError" && !controller.signal.aborted) {
          setState({ data: null, loading: false, error: err.message });
        }
      }
    }
    load();
    return () => controller.abort();
  }, [url]);

  return state;
}`;

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the primary purpose of React components?",
    options: [
      "Store database information",
      "Build reusable and independent UI sections",
      "Replace JavaScript",
      "Manage server hardware",
    ],
    correctIndex: 1,
    explanation: "Components divide complex interfaces into reusable, self-contained UI pieces with clear responsibilities.",
  },
  {
    id: 2,
    question: "What is Vite primarily responsible for in a React project?",
    options: [
      "Managing React state",
      "Providing development and build tooling",
      "Replacing TypeScript",
      "Providing a database",
    ],
    correctIndex: 1,
    explanation: "Vite provides the fast development server (HMR), JSX/TS processing, and production build bundling.",
  },
  {
    id: 3,
    question: "What does JSX allow developers to do?",
    options: [
      "Write CSS inside JSON",
      "Describe UI using markup-like syntax inside JavaScript",
      "Create SQL queries",
      "Replace the browser DOM",
    ],
    correctIndex: 1,
    explanation: "JSX is a syntax extension that compiles into React element creation calls inside JS/TS.",
  },
  {
    id: 4,
    question: "Which direction does ordinary React props data flow?",
    options: [
      "Child to parent automatically",
      "Parent to child",
      "Database to CSS",
      "Bidirectionally without callbacks",
    ],
    correctIndex: 1,
    explanation: "React enforces one-way data flow: props flow downward from parent to child, while children notify parents via callbacks.",
  },
  {
    id: 5,
    question: "What happens when a React state setter is called?",
    options: [
      "The current variable changes immediately",
      "React is asked to schedule an update and re-render",
      "The entire browser reloads",
      "All components are unmounted",
    ],
    correctIndex: 1,
    explanation: "State behaves like a snapshot per render; calling a setter schedules a new render with the updated value.",
  },
  {
    id: 6,
    question: "Why should stable keys be used when rendering lists?",
    options: [
      "To create CSS classes",
      "To help React identify items across renders",
      "To encrypt item data",
      "To increase API speed",
    ],
    correctIndex: 1,
    explanation: "Stable keys let React match list items accurately across insertions, deletions, and reorders.",
  },
  {
    id: 7,
    question: "What is a controlled input?",
    options: [
      "An input managed through React state",
      "An input that cannot be changed",
      "An input without an event handler",
      "An HTML-only input",
    ],
    correctIndex: 0,
    explanation: "A controlled input binds its value (or `checked` for checkboxes) to React state and updates via `onChange`.",
  },
  {
    id: 8,
    question: "Where should ordinary React Hooks be called?",
    options: [
      "Inside conditions",
      "Inside loops",
      "At the top level of React components or custom Hooks",
      "Inside every event handler",
    ],
    correctIndex: 2,
    explanation: "Hooks rely on consistent call order across renders, so they must be called unconditionally at the top level.",
  },
  {
    id: 9,
    question: "What is the main purpose of useEffect?",
    options: [
      "Replace JSX",
      "Synchronize a component with external systems",
      "Store all application state",
      "Create HTML elements",
    ],
    correctIndex: 1,
    explanation: "`useEffect` synchronizes a component with external systems (network, timers, subscriptions, DOM APIs) and cleans up on teardown.",
  },
  {
    id: 10,
    question: "What is the main difference between useState and useRef?",
    options: [
      "Both always trigger renders",
      "Changing state schedules a render; changing ref.current does not",
      "Refs can only store strings",
      "State cannot store objects",
    ],
    correctIndex: 1,
    explanation: "`useRef` holds a persistent mutable `.current` reference across renders without triggering re-renders.",
  },
];

export default function FrontendReactFundamentals() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("pillars");
  const [selectedPillar, setSelectedPillar] = useState("components-props");
  const [checkedItems, setCheckedItems] = useState({});
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = TASK_PROJECT_CHECKLIST.filter((c) => checkedItems[c.id]).length;

  const handleSelectAnswer = (qId, optionIdx) => {
    if (showResults) return;
    setAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const handleResetQuiz = () => {
    setAnswers({});
    setShowResults(false);
  };

  const scoreCount = QUIZ_QUESTIONS.filter((q) => answers[q.id] === q.correctIndex).length;
  const activePillar = REACT_PILLARS.find((p) => p.id === selectedPillar) || REACT_PILLARS[0];

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#18181b] font-sans">
      <ModuleNav track="frontend-engineering" currentModuleId="react-fundamentals" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-700">
              Module 08 &middot; Core Module
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              REACT &middot; VITE &middot; JSX &middot; PROPS &middot; USESTATE &middot; USEEFFECT &middot; CUSTOM HOOKS
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 08 &mdash; React Fundamentals and Component Engineering
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Build declarative, component-based interfaces with React, TypeScript, and Vite: JSX rendering, component composition, one-way props, immutable `useState`, events &amp; controlled forms, Rules of Hooks, `useEffect` synchronization &amp; cleanup, `useRef`, lifecycle, and custom Hooks.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-stone-200 pt-6">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "curriculum"
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <BookOpen size={16} />
              <span>Full Curriculum Specification</span>
            </button>

            <button
              onClick={() => setActiveTab("workbench")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "workbench"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <Atom size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {activeTab === "curriculum" ? (
          <FrontendReactFundamentalsSections />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("pillars")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "pillars"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. React Architecture Explorer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("checklist")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "checklist"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Task Manager Project Checklist
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("hooks")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "hooks"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Custom useFetch Hook Pattern
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                4. Knowledge Assessment (10 Questions)
              </button>
            </div>

            {activeWorkbenchTab === "pillars" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center gap-2">
                  <Layers className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    React Fundamentals &amp; Component Engineering Pillars
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {REACT_PILLARS.map((pillar) => (
                    <button
                      key={pillar.id}
                      onClick={() => setSelectedPillar(pillar.id)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedPillar === pillar.id
                          ? "border-[#f97316] bg-orange-50/70 shadow-xs"
                          : "border-stone-200 bg-stone-50 hover:bg-stone-100"
                      }`}
                    >
                      <div className="font-bold text-sm text-stone-900">{pillar.title}</div>
                      <div className="text-xs text-stone-600 mt-1">{pillar.summary}</div>
                    </button>
                  ))}
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-3">
                  <div className="font-bold text-stone-900 text-sm sm:text-base">
                    {activePillar.title} &mdash; Key Practices
                  </div>
                  <ul className="space-y-2">
                    {activePillar.details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "checklist" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <ListChecks className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      React + TypeScript Task Manager Checklist
                    </h2>
                  </div>
                  <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-bold text-stone-700">
                    {completedCount} / {TASK_PROJECT_CHECKLIST.length} Completed
                  </span>
                </div>

                <div className="space-y-3">
                  {TASK_PROJECT_CHECKLIST.map((item) => {
                    const checked = Boolean(checkedItems[item.id]);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className={`w-full flex items-center gap-3 p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                          checked
                            ? "border-emerald-300 bg-emerald-50/70"
                            : "border-stone-200 bg-stone-50 hover:bg-stone-100"
                        }`}
                      >
                        <CheckCircle2
                          size={18}
                          className={checked ? "text-emerald-600 shrink-0" : "text-stone-300 shrink-0"}
                        />
                        <span className={`text-xs sm:text-sm font-medium ${checked ? "text-emerald-950" : "text-stone-700"}`}>
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {activeWorkbenchTab === "hooks" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    Custom useFetch Hook with AbortController
                  </h2>
                </div>
                <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre leading-relaxed">{USE_FETCH_SNIPPET}</pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Module 08 Knowledge Assessment
                    </h2>
                  </div>

                  {showResults ? (
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                        Score: {scoreCount} / {QUIZ_QUESTIONS.length} ({Math.round((scoreCount / QUIZ_QUESTIONS.length) * 100)}%)
                      </span>
                      <button
                        onClick={handleResetQuiz}
                        className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold cursor-pointer"
                      >
                        Retry Quiz
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={handleSubmitQuiz}
                      disabled={Object.keys(answers).length < QUIZ_QUESTIONS.length}
                      className="px-5 py-2.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] disabled:opacity-50 text-white text-xs sm:text-sm font-bold cursor-pointer"
                    >
                      Submit Assessment ({Object.keys(answers).length}/{QUIZ_QUESTIONS.length})
                    </button>
                  )}
                </div>

                <div className="space-y-6">
                  {QUIZ_QUESTIONS.map((q, idx) => {
                    const userChoice = answers[q.id];
                    const isCorrect = userChoice === q.correctIndex;
                    return (
                      <div key={q.id} className="rounded-2xl border border-stone-200 p-5 space-y-3 bg-stone-50/50">
                        <div className="font-bold text-sm sm:text-base text-stone-900">
                          {idx + 1}. {q.question}
                        </div>

                        <div className="space-y-2">
                          {q.options.map((opt, optIdx) => {
                            const selected = userChoice === optIdx;
                            let btnStyle = "border-stone-200 bg-white text-stone-700 hover:bg-stone-50";
                            if (showResults) {
                              if (optIdx === q.correctIndex) {
                                btnStyle = "border-emerald-400 bg-emerald-50 text-emerald-900 font-semibold";
                              } else if (selected && optIdx !== q.correctIndex) {
                                btnStyle = "border-rose-300 bg-rose-50 text-rose-900";
                              }
                            } else if (selected) {
                              btnStyle = "border-[#f97316] bg-orange-50 text-stone-900 font-semibold";
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleSelectAnswer(q.id, optIdx)}
                                className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${btnStyle}`}
                              >
                                {showResults && optIdx === q.correctIndex && (
                                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                                )}
                                {showResults && selected && optIdx !== q.correctIndex && (
                                  <XCircle size={16} className="text-rose-500 shrink-0" />
                                )}
                                <span>{opt}</span>
                              </button>
                            );
                          })}
                        </div>

                        {showResults && (
                          <div
                            className={`p-3 rounded-xl text-xs ${
                              isCorrect
                                ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
                                : "bg-stone-100 text-stone-800 border border-stone-200"
                            }`}
                          >
                            <strong>Explanation:</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Nav */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/frontend-engineering/typescript-scalable-frontend")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 7 &mdash; TypeScript for Scalable Frontend Applications</span>
          </button>

          <button
            onClick={() => navigate("/learning/frontend-engineering/advanced-react")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <span>Next: Module 9 &mdash; Advanced React &amp; Architecture</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
