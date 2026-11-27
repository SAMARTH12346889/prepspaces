import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
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
import FrontendAdvancedReactSections from "./FrontendAdvancedReactSections";

const ARCHITECTURE_PILLARS = [
  {
    id: "rendering-reconciliation",
    title: "Rendering, Identity & State Lifting",
    summary: "Trigger -> Render -> Commit stages, stable keys, pure render functions, and single source of truth.",
    details: [
      "Keep rendering pure: never fire network requests, timers, or mutate objects directly during render.",
      "Use stable IDs as `key` props so React preserves or resets component identity predictably.",
      "Lift shared state to the closest common parent when sibling components need coordinated updates.",
    ],
  },
  {
    id: "context-reducer",
    title: "Context API, useReducer & Custom Hooks",
    summary: "Global auth/theme providers, split State/Dispatch contexts, immutable reducers, and reusable Hooks.",
    details: [
      "Split `StateContext` and `DispatchContext` so dispatch-only consumers avoid unnecessary re-renders.",
      "Use `useReducer` with discriminated-union actions for complex, multi-step state transitions.",
      "Custom Hooks share stateful logic, not automatically shared state — pair with Context or lifted state when sharing data.",
    ],
  },
  {
    id: "routing-auth",
    title: "React Router, Layouts & Protected Routes",
    summary: "Nested routes with Outlet, dynamic `:courseId` params, pathless auth wrappers, and backend authorization.",
    details: [
      "Use `Outlet` inside layout routes (`StudentLayout`, `AdminLayout`) to keep shared navigation mounted.",
      "Route parameters from `useParams()` are always strings — validate and convert before numeric lookups.",
      "Protected React routes only control UI visibility; backend APIs must independently enforce authorization.",
    ],
  },
  {
    id: "performance-architecture",
    title: "Code Splitting, Fallbacks & Feature Architecture",
    summary: "React.lazy + Suspense, Error Boundaries, profiling, debouncing, and feature-based folders.",
    details: [
      "Pair `React.lazy()` with `Suspense` for route-level chunks, and isolate rendering failures with `ErrorBoundary`.",
      "Measure with React DevTools Profiler before adding `useMemo`, `useCallback`, or `React.memo`.",
      "Organize large apps by feature (`features/courses`, `features/auth`, `shared/`) with clear dependency direction.",
    ],
  },
];

const DASHBOARD_PROJECT_CHECKLIST = [
  { id: "ar1", label: "Feature-based folder architecture (`app/`, `features/`, `layouts/`, `shared/`, `services/`)" },
  { id: "ar2", label: "Typed `DashboardState`, `DashboardAction` discriminated union, and `dashboardReducer`" },
  { id: "ar3", label: "Split `DashboardStateContext` & `DashboardDispatchContext` + `AuthProvider` session state" },
  { id: "ar4", label: "Nested `StudentLayout` with `Outlet`, `NavLink` active states, and `/dashboard/courses/:courseId`" },
  { id: "ar5", label: "Pathless `ProtectedRoute` & role-aware `AdminRoute` + backend authorization checks" },
  { id: "ar6", label: "Route-level `React.lazy` + `Suspense` fallbacks, `ErrorBoundary`, and debounced search" },
];

const REDUCER_CONTEXT_SNIPPET = `export type DashboardAction =
  | { type: "COURSES_LOADED"; courses: Course[] }
  | { type: "COURSE_PROGRESS_UPDATED"; courseId: number; progress: number }
  | { type: "NOTIFICATION_READ"; notificationId: number };

export function dashboardReducer(
  state: DashboardState,
  action: DashboardAction
): DashboardState {
  switch (action.type) {
    case "COURSES_LOADED":
      return { ...state, courses: action.courses };
    case "COURSE_PROGRESS_UPDATED":
      return {
        ...state,
        courses: state.courses.map((course) =>
          course.id === action.courseId
            ? { ...course, progress: action.progress }
            : course
        ),
      };
    case "NOTIFICATION_READ":
      return {
        ...state,
        notifications: state.notifications.map((item) =>
          item.id === action.notificationId ? { ...item, read: true } : item
        ),
      };
    default: {
      const exhaustiveCheck: never = action;
      return exhaustiveCheck;
    }
  }
}`;

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What are the three main stages of React screen updates?",
    options: [
      "Compile, deploy, execute",
      "Trigger, render, commit",
      "Import, export, update",
      "Mount, compile, delete",
    ],
    correctIndex: 1,
    explanation: "React updates follow three stages: Triggering a render, Rendering the component tree, and Committing changes to the DOM.",
  },
  {
    id: 2,
    question: "What is reconciliation?",
    options: [
      "Sending API requests",
      "Determining how the new UI relates to the previous rendered UI",
      "Creating CSS styles",
      "Managing authentication tokens",
    ],
    correctIndex: 1,
    explanation: "Reconciliation compares the new rendered element tree against the previous one to determine which DOM parts can be preserved or updated.",
  },
  {
    id: 3,
    question: "When should state usually be lifted up?",
    options: [
      "Whenever a component has more than one property",
      "When multiple components need coordinated access to the same state",
      "Whenever an application has a Navbar",
      "Whenever a component uses TypeScript",
    ],
    correctIndex: 1,
    explanation: "Lifting state up moves shared state to the closest common parent so sibling or nearby components share a single source of truth.",
  },
  {
    id: 4,
    question: "What is the primary purpose of Context API?",
    options: [
      "Replace the browser DOM",
      "Share values through a component tree without passing props through every intermediate component",
      "Build CSS layouts",
      "Create database tables",
    ],
    correctIndex: 1,
    explanation: "Context lets ancestor providers share data (like auth user or theme) with any descendant without manual prop drilling.",
  },
  {
    id: 5,
    question: "What does useMemo cache?",
    options: [
      "A function definition",
      "A calculation result",
      "A browser session",
      "A React route",
    ],
    correctIndex: 1,
    explanation: "useMemo caches the computed return value of a function between renders as long as its dependencies remain unchanged.",
  },
  {
    id: 6,
    question: "What does useReducer receive?",
    options: [
      "Only a JSX element",
      "Current state and an action",
      "Only browser events",
      "A route and URL",
    ],
    correctIndex: 1,
    explanation: "A reducer function accepts `(state, action)` and returns the next state immutably based on the dispatched action.",
  },
  {
    id: 7,
    question: "What does a custom Hook share between components?",
    options: [
      "One automatically shared state instance",
      "Reusable stateful logic, but not automatically shared state",
      "A global database",
      "The DOM element tree",
    ],
    correctIndex: 1,
    explanation: "Custom Hooks share stateful logic; each component calling the Hook gets its own independent state instance unless paired with Context or lifted state.",
  },
  {
    id: 8,
    question: "What is the purpose of Outlet in nested React Router routes?",
    options: [
      "Display CSS files",
      "Render the currently matched child route inside its parent",
      "Authenticate API calls",
      "Load image files",
    ],
    correctIndex: 1,
    explanation: "Outlet acts as a placeholder inside a parent layout route where the active child route component is rendered.",
  },
  {
    id: 9,
    question: "Why are protected React routes insufficient for actual backend security?",
    options: [
      "React cannot render pages",
      "Frontend route checks can be bypassed; the backend must independently enforce authorization",
      "Route parameters are always encrypted",
      "React does not support authentication",
    ],
    correctIndex: 1,
    explanation: "Client-side route guards only control which UI is rendered; users can inspect client code or call APIs directly, so the backend must enforce authorization.",
  },
  {
    id: 10,
    question: "What is the main purpose of React.lazy and Suspense together?",
    options: [
      "Automatically create user accounts",
      "Load components on demand and display a fallback while they load",
      "Replace Context API",
      "Store application state permanently",
    ],
    correctIndex: 1,
    explanation: "React.lazy enables code splitting by loading component chunks on demand, while Suspense renders a fallback UI until the chunk resolves.",
  },
];

export default function FrontendAdvancedReact() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("pillars");
  const [selectedPillar, setSelectedPillar] = useState("rendering-reconciliation");
  const [checkedItems, setCheckedItems] = useState({});
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = DASHBOARD_PROJECT_CHECKLIST.filter((c) => checkedItems[c.id]).length;

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
  const activePillar =
    ARCHITECTURE_PILLARS.find((p) => p.id === selectedPillar) || ARCHITECTURE_PILLARS[0];

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#18181b] font-sans">
      <ModuleNav track="frontend-engineering" currentModuleId="advanced-react" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-700">
              Module 09 &middot; Advanced Core Module
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              RECONCILIATION &middot; CONTEXT &middot; USEREDUCER &middot; REACT ROUTER &middot; LAZY &amp; SUSPENSE &middot; FEATURE ARCHITECTURE
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 09 &mdash; Advanced React, Application Architecture and State Management
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Design, organize, optimize, and scale complete React applications: rendering &amp; reconciliation, component composition patterns, Context API, `useReducer`, `useMemo`/`useCallback`, React Router nested &amp; protected routes, code splitting, Error Boundaries, and feature-based architecture.
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
          <FrontendAdvancedReactSections />
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
                1. Architecture Explorer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("checklist")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "checklist"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Student Dashboard Project Checklist
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("reducer")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "reducer"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Typed Reducer + Context Pattern
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
                    Advanced React Architecture Pillars
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {ARCHITECTURE_PILLARS.map((pillar) => (
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
                      Multi-Page Student Dashboard Checklist
                    </h2>
                  </div>
                  <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-bold text-stone-700">
                    {completedCount} / {DASHBOARD_PROJECT_CHECKLIST.length} Completed
                  </span>
                </div>

                <div className="space-y-3">
                  {DASHBOARD_PROJECT_CHECKLIST.map((item) => {
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

            {activeWorkbenchTab === "reducer" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    Type-Safe Discriminated Union Reducer Pattern
                  </h2>
                </div>
                <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre leading-relaxed">{REDUCER_CONTEXT_SNIPPET}</pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Module 09 Knowledge Assessment
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
            onClick={() => navigate("/learning/frontend-engineering/react-fundamentals")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 8 &mdash; React Fundamentals and Component Engineering</span>
          </button>

          <button
            onClick={() => navigate("/learning")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <ShieldCheck size={16} />
            <span>Curriculum Hub</span>
          </button>
        </div>
      </main>
    </div>
  );
}
