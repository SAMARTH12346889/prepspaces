import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  FileType2,
  HelpCircle,
  Layers,
  ListChecks,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import FrontendTypeScriptSections from "./FrontendTypeScriptSections";

const TS_PILLARS = [
  {
    id: "type-erasure",
    title: "Static Checking & Type Erasure",
    summary: "Compile-time type safety for .ts/.tsx files; types are stripped before browser JS execution.",
    details: [
      "TypeScript catches mismatched props, missing fields, and invalid function calls before runtime.",
      "Type annotations and interfaces do not exist at runtime — always validate external API payloads.",
      "Use `.tsx` for React JSX components and `.ts` for services, types, and utilities.",
    ],
  },
  {
    id: "primitives-unions",
    title: "unknown, Literal Unions & Interfaces",
    summary: "Safer alternatives to `any`, `as const`, extendable `interface` contracts, and `type` unions.",
    details: [
      "Prefer `unknown` over `any` for untrusted data, then narrow before accessing properties.",
      "Use `as const` to preserve exact literal types instead of widening to `string`.",
      "Use `interface` for extendable object contracts and `type` for unions, primitives, and mapped types.",
    ],
  },
  {
    id: "generics",
    title: "Generics & keyof Constraints",
    summary: "Reusable `ApiResponse<T>`, `TableProps<T>`, and `getProperty<T, K extends keyof T>` utilities.",
    details: [
      "Generics preserve caller type information across reusable functions, hooks, and components.",
      "Use `extends` constraints (e.g. `T extends { length: number }`) to require properties safely.",
      "Combine `keyof T` with `T[K]` for type-safe dynamic property access.",
    ],
  },
  {
    id: "narrowing",
    title: "Discriminated Unions & Narrowing",
    summary: "`typeof`, `Array.isArray`, `in`, type predicates (`value is Student`), and exhaustive `never` checks.",
    details: [
      "Model API states with a shared discriminant (`status: 'loading' | 'success' | 'error'`).",
      "Use `assertNever(state)` in `switch` default branches to catch unhandled states at compile time.",
      "Write user-defined type guards (`value is Student`) or schema validators for runtime boundaries.",
    ],
  },
];

const TS_CHECKLIST = [
  { id: "ts1", label: "Strict TypeScript config (`strict: true`, `strictNullChecks`) enabled" },
  { id: "ts2", label: "Zero `any` on public APIs & untrusted data typed as `unknown` + narrowed" },
  { id: "ts3", label: "Shared domain interfaces (Student, Course, ApiResponse<T>) in `types/`" },
  { id: "ts4", label: "Discriminated unions + exhaustive `never` checks for async UI states" },
  { id: "ts5", label: "Generic reusable utilities & typed React props, hooks, and DOM events (.tsx)" },
  { id: "ts6", label: "Runtime validation (e.g., structural guards / Zod) at API response boundaries" },
];

const DISCRIMINATED_UNION_SNIPPET = `type ApiState<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

function assertNever(value: never): never {
  throw new Error(\`Unexpected state: \${JSON.stringify(value)}\`);
}

function renderState(state: ApiState<string[]>) {
  switch (state.status) {
    case "loading":
      return "Loading...";
    case "success":
      return state.data.join(", ");
    case "error":
      return state.message;
    default:
      return assertNever(state);
  }
}`;

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What happens to ordinary TypeScript type annotations and interfaces when TypeScript is compiled/transpiled to JavaScript?",
    options: [
      "They are converted into automatic runtime API validators",
      "They are erased (type erasure) before browser execution, so runtime validation is still required for external API data",
      "They are stored in LocalStorage",
      "They run inside a Web Worker",
    ],
    correctIndex: 1,
    explanation: "Type annotations and interfaces are compile-time constructs that are stripped during transpilation.",
  },
  {
    id: 2,
    question: "Why should `unknown` be preferred over `any` when handling untrusted or external data?",
    options: [
      "`unknown` disables all type checking",
      "`unknown` requires explicit type checking or narrowing before you can access properties or methods on the value",
      "`unknown` automatically parses JSON",
      "`any` is forbidden in `.tsx` files",
    ],
    correctIndex: 1,
    explanation: "Unlike `any`, `unknown` preserves type safety by forcing you to narrow the value before using it.",
  },
  {
    id: 3,
    question: "What does the `as const` assertion do on an object literal like `const settings = { theme: 'dark', language: 'en' } as const;`?",
    options: [
      "It converts the object to JSON",
      "It preserves the exact literal types and marks properties as `readonly` instead of widening them to general `string`",
      "It deletes the object at runtime",
      "It makes all properties optional",
    ],
    correctIndex: 1,
    explanation: "`as const` creates deeply readonly literal types at compile time.",
  },
  {
    id: 4,
    question: "Which statement accurately compares `interface` and `type` aliases in TypeScript?",
    options: [
      "Interfaces can declare union types directly; type aliases cannot",
      "Interfaces support declaration merging and extending object contracts, while type aliases can also represent unions, intersections, primitives, and mapped/conditional types",
      "Type aliases cannot describe objects",
      "Interfaces exist at runtime in the browser",
    ],
    correctIndex: 1,
    explanation: "Both describe object shapes, with interfaces supporting declaration merging and type aliases supporting unions/primitives/advanced types.",
  },
  {
    id: 5,
    question: "What is the purpose of `readonly` on an interface or type property in TypeScript?",
    options: [
      "It enforces a compile-time restriction preventing reassignment of that property in TypeScript code",
      "It freezes the object deeply in V8 at runtime",
      "It encrypts the property in JSON",
      "It makes the property optional",
    ],
    correctIndex: 0,
    explanation: "`readonly` is checked at compile time; runtime immutability still requires `Object.freeze()` or immutable updates.",
  },
  {
    id: 6,
    question: "Why do TypeScript generics (`<T>`) improve reusable functions like `getFirstItem<T>(items: T[]): T | undefined`?",
    options: [
      "They erase all type information like `any`",
      "They preserve the caller's specific element type across reusable utilities and components",
      "They convert arrays into tuples automatically",
      "They disable `strictNullChecks`",
    ],
    correctIndex: 1,
    explanation: "Generics parameterize types so reusable functions, interfaces, and components keep full type safety.",
  },
  {
    id: 7,
    question: "What does `keyof Course` produce for `interface Course { id: number; title: string; duration: number; }`?",
    options: [
      '`"number" | "string"`',
      '`"id" | "title" | "duration"`',
      "`Course[]`",
      "`unknown`",
    ],
    correctIndex: 1,
    explanation: "`keyof` produces a union of an object type's property keys.",
  },
  {
    id: 8,
    question: "In a discriminated union (`status: 'loading' | 'success' | 'error'`), how does `assertNever(state)` with parameter type `never` help?",
    options: [
      "It suppresses all TypeScript errors",
      "It provides exhaustive checking so TypeScript reports a compile-time error if a new union variant is added without handling it in the `switch`",
      "It retries failed API calls",
      "It converts `null` to `undefined`",
    ],
    correctIndex: 1,
    explanation: "Exhaustive `never` checks catch unhandled union cases at compile time when states evolve.",
  },
  {
    id: 9,
    question: "What does a user-defined type guard return annotation `value is Student` tell TypeScript?",
    options: [
      "When the function returns `true`, TypeScript narrows the checked variable to `Student` inside that branch",
      "It automatically validates every backend API response without writing checks",
      "It converts a class into an interface",
      "It marks `value` as `any`",
    ],
    correctIndex: 0,
    explanation: "A type predicate (`value is Student`) informs the compiler that a truthy return value guarantees the narrowed type.",
  },
  {
    id: 10,
    question: "Which file extension is used for TypeScript files that contain React JSX syntax?",
    options: [".ts", ".tsx", ".jsx", ".json"],
    correctIndex: 1,
    explanation: "`.tsx` is used for TypeScript files containing JSX, whereas `.ts` is used for TypeScript without JSX.",
  },
];

export default function FrontendTypeScript() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("pillars");
  const [selectedPillar, setSelectedPillar] = useState("type-erasure");
  const [checkedItems, setCheckedItems] = useState({});
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = TS_CHECKLIST.filter((c) => checkedItems[c.id]).length;

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
  const activePillar = TS_PILLARS.find((p) => p.id === selectedPillar) || TS_PILLARS[0];

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#18181b] font-sans">
      <ModuleNav track="frontend-engineering" currentModuleId="typescript-scalable-frontend" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-700">
              Module 07 &middot; Core Module
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              TYPESCRIPT &middot; INTERFACES &middot; GENERICS &middot; DISCRIMINATED UNIONS &middot; REACT TSX
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 07 &mdash; TypeScript for Scalable Frontend Applications
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Add static type safety to large frontend applications: type inference &amp; erasure, `unknown` vs `any`, interfaces &amp; union/intersection types, typed functions &amp; overloads, generics &amp; `keyof`, discriminated unions with exhaustive `never` checks, and runtime API boundary validation.
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
              <FileType2 size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {activeTab === "curriculum" ? (
          <FrontendTypeScriptSections />
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
                1. TypeScript Architecture Explorer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("checklist")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "checklist"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Strict TypeScript Checklist
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("union")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "union"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Discriminated Union &amp; Exhaustiveness
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
                    TypeScript Type System Pillars
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {TS_PILLARS.map((pillar) => (
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
                    {activePillar.title} &mdash; Key Principles
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
                      Production TypeScript Readiness Checklist
                    </h2>
                  </div>
                  <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-bold text-stone-700">
                    {completedCount} / {TS_CHECKLIST.length} Completed
                  </span>
                </div>

                <div className="space-y-3">
                  {TS_CHECKLIST.map((item) => {
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

            {activeWorkbenchTab === "union" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    Discriminated Union + Exhaustive `never` Check
                  </h2>
                </div>
                <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre leading-relaxed">{DISCRIMINATED_UNION_SNIPPET}</pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Module 07 Knowledge Assessment
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
            onClick={() => navigate("/learning/frontend-engineering/browser-apis-async")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 6 &mdash; Browser APIs, Async &amp; Web Integration</span>
          </button>

          <button
            onClick={() => navigate("/learning/frontend-engineering/react-fundamentals")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <span>Next: Module 8 &mdash; React Fundamentals &amp; Component Engineering</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
