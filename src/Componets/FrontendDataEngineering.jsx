import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Database,
  HelpCircle,
  Layers,
  ListChecks,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import FrontendDataEngineeringSections from "./FrontendDataEngineeringSections";

const DATA_PILLARS = [
  {
    id: "api-layers",
    title: "API Service Layers & State Unions",
    summary: "Shared HTTP clients, typed feature services, AbortController cancellation, and Loading/Success/Empty/Error states.",
    details: [
      "Check `response.ok` explicitly with Fetch — 4xx/5xx responses do not reject automatically.",
      "Keep UI state and alerts out of API services; let services validate responses and return typed data or throw `ApiError`.",
      "Model API lifecycles explicitly with discriminated unions (`loading`, `success`, `empty`, `error`).",
    ],
  },
  {
    id: "tanstack-query",
    title: "TanStack Query, Caching & Optimistic UI",
    summary: "Server vs client state ownership, query keys, staleTime vs gcTime, invalidation, and rollback.",
    details: [
      "Include all filter, search, and pagination variables in `queryKey` so each combination caches independently.",
      "Never mirror TanStack Query server data into React Context — let `useQuery` share the cache.",
      "Use `onMutate`, `onError` rollback, and `onSettled` invalidation for safe optimistic updates.",
    ],
  },
  {
    id: "forms-zod",
    title: "Zod & React Hook Form",
    summary: "Runtime schema validation, z.infer type derivation, register(), Controller, and recoverable submissions.",
    details: [
      "Validate untrusted API payloads and form inputs at runtime with `Zod` (`safeParse` / `parse`).",
      "Pair `React Hook Form` with `zodResolver` for multi-field forms, `defaultValues`, and `isSubmitting` states.",
      "Preserve user input when an API submission fails so users can fix or retry without retyping.",
    ],
  },
  {
    id: "auth-uploads-ws",
    title: "Auth, File Uploads & WebSockets",
    summary: "HttpOnly cookie sessions vs LocalStorage risks, XHR upload progress, and WebSocket reconnection.",
    details: [
      "Never store sensitive auth tokens in LocalStorage (XSS exposure); prefer HttpOnly Secure SameSite cookies or BFFs.",
      "Use `FormData` without manually setting `Content-Type`, and use `XMLHttpRequest.upload` when progress events are needed.",
      "Validate incoming WebSocket messages with Zod and reconnect using exponential backoff + jitter.",
    ],
  },
];

const COURSE_MGMT_CHECKLIST = [
  { id: "de1", label: "Reusable HTTP client (`apiClient.ts`) + feature `courseApi.ts` with `AbortSignal` & Zod `parseResponse`" },
  { id: "de2", label: "TanStack `QueryClient` (`staleTime`, `gcTime`) + `useCourses` hook with `keepPreviousData` pagination" },
  { id: "de3", label: "Debounced search input, level/category filters, sorting, and explicit Loading/Empty/Error/Retry UI" },
  { id: "de4", label: "Create & Edit forms powered by `React Hook Form`, `zodResolver`, `defaultValues`, and `isSubmitting`" },
  { id: "de5", label: "Optimistic updates with `onMutate` snapshot, `onError` rollback, and `invalidateQueries` on settle" },
  { id: "de6", label: "Image thumbnail validation, `URL.createObjectURL` preview, `XHR` upload progress, & WebSocket sync" },
];

const OPTIMISTIC_MUTATION_SNIPPET = `function useCompleteLesson() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: completeLesson,
    onMutate: async ({ courseId, completed }) => {
      await queryClient.cancelQueries({ queryKey: ["course", courseId] });
      const previousCourse = queryClient.getQueryData<Course>(["course", courseId]);

      queryClient.setQueryData<Course>(["course", courseId], (old) =>
        old ? { ...old, completed } : old
      );

      return { previousCourse };
    },
    onError: (_error, variables, context) => {
      if (context?.previousCourse) {
        queryClient.setQueryData(
          ["course", variables.courseId],
          context.previousCourse
        );
      }
    },
    onSettled: async (_data, _error, variables) => {
      await queryClient.invalidateQueries({
        queryKey: ["course", variables.courseId],
      });
    },
  });
}`;

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the primary responsibility of a frontend API service layer?",
    options: [
      "Design database tables",
      "Centralize reusable HTTP communication and response handling",
      "Replace the backend",
      "Control server infrastructure",
    ],
    correctIndex: 1,
    explanation: "A frontend API service layer centralizes request configuration, status checks, JSON parsing, and typed error handling so components stay clean.",
  },
  {
    id: 2,
    question: "What does TanStack Query primarily manage?",
    options: [
      "CSS styling",
      "Server state, caching and asynchronous data synchronization",
      "Database transactions",
      "HTML forms only",
    ],
    correctIndex: 1,
    explanation: "TanStack Query manages asynchronous server state, caching, request deduplication, background refetching, and mutations.",
  },
  {
    id: 3,
    question: "What is the difference between server state and client state?",
    options: [
      "They are identical",
      "Server state originates from external services; client state is managed by the frontend",
      "Client state must always be stored in a database",
      "Server state only contains strings",
    ],
    correctIndex: 1,
    explanation: "Server state is owned by external backend services and synced asynchronously, whereas client state (modals, tabs, local UI inputs) lives in the frontend.",
  },
  {
    id: 4,
    question: "What does staleTime control in TanStack Query?",
    options: [
      "How long an inactive cache remains in memory",
      "How long query data is considered fresh",
      "How long a form remains open",
      "How many HTTP requests can run",
    ],
    correctIndex: 1,
    explanation: "staleTime defines how long cached query data is treated as fresh before becoming eligible for staleness-based background refetching.",
  },
  {
    id: 5,
    question: "What does invalidateQueries() do?",
    options: [
      "Deletes the React application",
      "Marks matching queries as stale and can trigger refetching",
      "Clears all browser cookies",
      "Automatically creates a backend record",
    ],
    correctIndex: 1,
    explanation: "invalidateQueries() marks matching cached queries as stale and triggers active queries to refetch fresh server data.",
  },
  {
    id: 6,
    question: "What is an optimistic update?",
    options: [
      "An update applied only after a page reload",
      "Updating the interface before the server confirms the operation",
      "Disabling all API requests",
      "Replacing server validation",
    ],
    correctIndex: 1,
    explanation: "Optimistic updates immediately reflect the expected outcome in the UI while the mutation runs, rolling back if the server rejects it.",
  },
  {
    id: 7,
    question: "What is the main purpose of Zod?",
    options: [
      "Manage React routes",
      "Validate runtime data using schemas and infer TypeScript types",
      "Store API responses permanently",
      "Generate database indexes",
    ],
    correctIndex: 1,
    explanation: "Zod validates untrusted runtime values (forms, API responses, WebSocket messages) and infers matching TypeScript types via `z.infer`.",
  },
  {
    id: 8,
    question: "What is the purpose of React Hook Form's register()?",
    options: [
      "Create API endpoints",
      "Connect input elements to form management and validation",
      "Load React routes",
      "Create WebSocket connections",
    ],
    correctIndex: 1,
    explanation: "register() attaches refs, field names, and event handlers so React Hook Form can track values, validation, and errors.",
  },
  {
    id: 9,
    question: "Why should authentication tokens generally not be stored in LocalStorage?",
    options: [
      "LocalStorage cannot store strings",
      "JavaScript-accessible storage can expose credentials through XSS vulnerabilities",
      "LocalStorage automatically deletes every token",
      "React cannot read LocalStorage",
    ],
    correctIndex: 1,
    explanation: "Because any JavaScript on the same origin can read LocalStorage, XSS vulnerabilities can exfiltrate tokens stored there.",
  },
  {
    id: 10,
    question: "Which browser API is useful for monitoring upload progress?",
    options: [
      "localStorage",
      "XMLHttpRequest.upload",
      "JSON.parse",
      "useMemo",
    ],
    correctIndex: 1,
    explanation: "XMLHttpRequest.upload emits `progress` events with `loaded` and `total` byte counts, which Fetch does not natively expose for uploads.",
  },
];

export default function FrontendDataEngineering() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("pillars");
  const [selectedPillar, setSelectedPillar] = useState("api-layers");
  const [checkedItems, setCheckedItems] = useState({});
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = COURSE_MGMT_CHECKLIST.filter((c) => checkedItems[c.id]).length;

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
    DATA_PILLARS.find((p) => p.id === selectedPillar) || DATA_PILLARS[0];

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#18181b] font-sans">
      <ModuleNav track="frontend-engineering" currentModuleId="frontend-data-engineering" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-700">
              Module 10 &middot; Advanced Core Module
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              REST APIS &middot; TANSTACK QUERY &middot; ZOD &middot; REACT HOOK FORM &middot; AUTH &middot; UPLOADS &middot; WEBSOCKETS
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 10 &mdash; Frontend Data Engineering, Forms and API Integration
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Build frontend applications that communicate reliably with backend services: reusable REST API layers, TanStack Query server-state caching &amp; optimistic updates, pagination &amp; debounced search, Zod + React Hook Form validation, authentication-aware clients, upload progress, and WebSockets.
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
              <Database size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {activeTab === "curriculum" ? (
          <FrontendDataEngineeringSections />
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
                1. Data Integration Explorer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("checklist")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "checklist"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Course Management Project Checklist
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("optimistic")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "optimistic"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Optimistic Update + Rollback Pattern
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
                    Frontend Data Engineering Pillars
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {DATA_PILLARS.map((pillar) => (
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
                      API-Driven Course Management Project Checklist
                    </h2>
                  </div>
                  <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-bold text-stone-700">
                    {completedCount} / {COURSE_MGMT_CHECKLIST.length} Completed
                  </span>
                </div>

                <div className="space-y-3">
                  {COURSE_MGMT_CHECKLIST.map((item) => {
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

            {activeWorkbenchTab === "optimistic" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    TanStack Query Optimistic Update &amp; Rollback Pattern
                  </h2>
                </div>
                <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre leading-relaxed">{OPTIMISTIC_MUTATION_SNIPPET}</pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Module 10 Knowledge Assessment
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
            onClick={() => navigate("/learning/frontend-engineering/advanced-react")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 9 &mdash; Advanced React, Application Architecture &amp; State</span>
          </button>

          <button
            onClick={() => navigate("/learning/frontend-engineering/nextjs-architecture")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <span>Next: Module 11 &mdash; Next.js &amp; Modern Web Architecture</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
