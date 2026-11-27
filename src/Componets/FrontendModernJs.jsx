import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Cpu,
  HelpCircle,
  Layers,
  ListChecks,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import FrontendModernJsSections from "./FrontendModernJsSections";

const JS_RUNTIME_PILLARS = [
  {
    id: "event-loop",
    title: "Execution Contexts & Event Loop",
    summary: "Call stack (LIFO), microtasks (Promises, queueMicrotask), tasks (setTimeout, UI events), and Web Workers.",
    details: [
      "Synchronous code runs on the call stack until completion before microtasks drain.",
      "Promise reactions run in the microtask queue before the next timer/macrotask.",
      "Offload CPU-heavy work to Web Workers so the main thread remains responsive.",
    ],
  },
  {
    id: "scope-closures",
    title: "Lexical Scope, TDZ & Closures",
    summary: "Block-scoped let/const, temporal dead zone, private closure state, and `this` binding rules.",
    details: [
      "Prefer `const` by default and `let` only when reassignment is required.",
      "Closures retain access to surrounding lexical bindings for private state & factories.",
      "Arrow functions inherit lexical `this` rather than creating their own.",
    ],
  },
  {
    id: "dom-events",
    title: "DOM, Delegation & AbortController",
    summary: "Safe `textContent` updates, capturing/bubbling phases, `closest()` delegation, and listener cleanup.",
    details: [
      "Prefer `textContent` over `innerHTML` for user-supplied text to prevent XSS.",
      "Use event delegation on persistent parent containers with `event.target.closest(...)`.",
      "Clean up listeners with `AbortController` or `removeEventListener` to prevent memory leaks.",
    ],
  },
  {
    id: "patterns-perf",
    title: "OOP, FP, Memory & Performance",
    summary: "Classes with `#private` fields, pure functions, WeakMap/WeakSet, Big O, debouncing & throttling.",
    details: [
      "Use pure transformations (`map`, `filter`, `toSorted`, spread) to keep state predictable.",
      "Use `WeakMap`/`WeakSet` for object metadata without blocking garbage collection.",
      "Debounce rapid search inputs and throttle scroll/resize handlers.",
    ],
  },
];

const TASKFLOW_CHECKLIST = [
  { id: "t1", label: "Modular ES architecture (storageService, task, taskFilters, validation, renderer, controller)" },
  { id: "t2", label: "Create, edit (preserving ID), delete, and toggle task completion without mutating state" },
  { id: "t3", label: "Filter (All/Active/Completed/Priority), debounced search, and non-mutating sort" },
  { id: "t4", label: "Derived Task Statistics (Total, Completed, Active, Overdue) from single source of truth" },
  { id: "t5", label: "Resilient localStorage persistence with try...catch + Array.isArray validation" },
  { id: "t6", label: "XSS-safe textContent rendering, event delegation, keyboard access & ARIA feedback" },
];

const DELEGATION_DEBOUNCE_SNIPPET = `function debounce(callback, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
}

// Event delegation for dynamic task items
taskList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button || !taskList.contains(button)) return;

  const { action, taskId } = button.dataset;
  if (action === "toggle") toggleTask(taskId);
  if (action === "delete") deleteTask(taskId);
});`;

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "In the browser event loop, what order will `console.log('Start')`, `setTimeout(..., 0)`, `Promise.resolve().then(...)`, and `console.log('End')` log?",
    options: [
      "Start -> Timer -> Promise -> End",
      "Start -> End -> Promise -> Timer",
      "Start -> End -> Timer -> Promise",
      "Promise -> Start -> End -> Timer",
    ],
    correctIndex: 1,
    explanation: "Synchronous code runs first (Start, End), then pending microtasks (Promise) run before the next macrotask/timer callback.",
  },
  {
    id: 2,
    question: "Why does `const student = { name: 'Alex' }; student.name = 'Sam';` succeed, while `student = {}` throws an error?",
    options: [
      "`const` prevents reassigning the variable binding, not mutating properties of the referenced object",
      "`const` only applies to numbers and strings",
      "`const` makes all nested properties deeply frozen",
      "Objects cannot be reassigned in JavaScript",
    ],
    correctIndex: 0,
    explanation: "`const` locks the binding reference; object mutation requires `Object.freeze()` or immutable patterns.",
  },
  {
    id: 3,
    question: "What is the key difference between the nullish coalescing operator (`??`) and logical OR (`||`)?",
    options: [
      "`??` falls back only for `null` and `undefined`, whereas `||` falls back for all falsy values (`0`, `false`, `\"\"`, `NaN`, `null`, `undefined`)",
      "`||` only works with numbers",
      "`??` converts strings to numbers",
      "They are identical",
    ],
    correctIndex: 0,
    explanation: "Nullish coalescing preserves valid falsy values like `0`, `false`, and empty strings `\"\"`.",
  },
  {
    id: 4,
    question: "What is a JavaScript closure?",
    options: [
      "A syntax error caused by a missing brace",
      "A function that retains access to its surrounding lexical environment even after the outer function has finished executing",
      "A method for closing browser tabs",
      "A type of `for...in` loop",
    ],
    correctIndex: 1,
    explanation: "Closures enable private state, function factories, memoization, and event-handler encapsulation.",
  },
  {
    id: 5,
    question: "Why is `fetch('/api/courses')` followed by `if (!response.ok) throw new Error(...)` important?",
    options: [
      "`fetch()` rejects automatically on 404 and 500 responses",
      "`fetch()` only rejects on network/abort failures; HTTP 404 or 500 responses still resolve with `response.ok === false`",
      "`response.json()` throws before checking headers",
      "`async/await` disables `try...catch`",
    ],
    correctIndex: 1,
    explanation: "Always inspect `response.ok` or `response.status` because HTTP error status codes do not reject a `fetch()` Promise.",
  },
  {
    id: 6,
    question: "Why should you prefer `element.textContent` over `element.innerHTML` when rendering untrusted user input?",
    options: [
      "`textContent` treats the value as plain text rather than parsing HTML, preventing Cross-Site Scripting (XSS)",
      "`innerHTML` cannot render strings",
      "`textContent` automatically calls `JSON.parse()`",
      "`innerHTML` only works on `<button>` elements",
    ],
    correctIndex: 0,
    explanation: "Inserting untrusted strings into `innerHTML` can execute injected scripts (XSS); `textContent` safely escapes text.",
  },
  {
    id: 7,
    question: "In event delegation, what is the difference between `event.target` and `event.currentTarget`?",
    options: [
      "`event.target` is the element where the event originated, while `event.currentTarget` is the ancestor element whose listener is currently executing",
      "`event.currentTarget` is always `window`",
      "They are always identical",
      "`event.target` only works during the capturing phase",
    ],
    correctIndex: 0,
    explanation: "Using `event.target.closest(...)` inside a persistent ancestor's listener lets one handler manage dynamic child elements.",
  },
  {
    id: 8,
    question: "What is the difference between `Array.prototype.slice()` and `Array.prototype.splice()`?",
    options: [
      "`slice()` returns a shallow copy of a portion without mutating the original array; `splice()` mutates the original array in place",
      "`splice()` is immutable; `slice()` mutates",
      "`slice()` only works on strings",
      "Both mutate the original array",
    ],
    correctIndex: 0,
    explanation: "`slice()` is non-mutating, whereas `splice()` inserts, replaces, or removes elements directly in the original array.",
  },
  {
    id: 9,
    question: "How do `WeakMap` and `WeakSet` differ from `Map` and `Set` regarding garbage collection?",
    options: [
      "They hold weak references to object keys/values so those objects can still be garbage-collected when no other references remain",
      "They store data in `localStorage` automatically",
      "They are faster versions of `JSON.stringify`",
      "They prevent all garbage collection",
    ],
    correctIndex: 0,
    explanation: "Weak references allow metadata to be attached to DOM nodes or objects without causing memory leaks.",
  },
  {
    id: 10,
    question: "When should you use `debounce` vs. `throttle`?",
    options: [
      "Debounce runs after a period of inactivity (ideal for search inputs); throttle limits execution to at most once per interval (ideal for scroll/resize handlers)",
      "Throttle waits until the user stops scrolling completely; debounce fires on every pixel",
      "Both block the main thread synchronously",
      "Debounce is only for `Promise.all`",
    ],
    correctIndex: 0,
    explanation: "Debouncing groups rapid bursts into one trailing call; throttling caps execution frequency during continuous events.",
  },
];

export default function FrontendModernJs() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("runtime");
  const [selectedPillar, setSelectedPillar] = useState("event-loop");
  const [checkedItems, setCheckedItems] = useState({});
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = TASKFLOW_CHECKLIST.filter((c) => checkedItems[c.id]).length;

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
  const activePillar = JS_RUNTIME_PILLARS.find((p) => p.id === selectedPillar) || JS_RUNTIME_PILLARS[0];

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#18181b] font-sans">
      <ModuleNav track="frontend-engineering" currentModuleId="modern-javascript" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-700">
              Module 05 &middot; Core Module
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              ECMASCRIPT &middot; EVENT LOOP &middot; CLOSURES &middot; DOM &amp; EVENTS &middot; ES MODULES &middot; PERF
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 05 &mdash; Modern JavaScript for Web Applications
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Build interactive web applications from first principles: JavaScript engines &amp; the event loop, lexical scope &amp; closures, arrays/objects/ES modules, DOM manipulation &amp; event delegation, debugging, OOP &amp; functional patterns, memory management, and the TaskFlow Vanilla JS project.
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
              <Cpu size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {activeTab === "curriculum" ? (
          <FrontendModernJsSections />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("runtime")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "runtime"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. JS Architecture Explorer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("checklist")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "checklist"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. TaskFlow Project Checklist
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("patterns")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "patterns"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Delegation &amp; Debounce Pattern
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

            {activeWorkbenchTab === "runtime" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center gap-2">
                  <Layers className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    JavaScript Engine, Scope, DOM &amp; Performance Pillars
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {JS_RUNTIME_PILLARS.map((pillar) => (
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
                    {activePillar.title} &mdash; Core Mechanics
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
                      TaskFlow Vanilla JS Project Checklist
                    </h2>
                  </div>
                  <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-bold text-stone-700">
                    {completedCount} / {TASKFLOW_CHECKLIST.length} Completed
                  </span>
                </div>

                <div className="space-y-3">
                  {TASKFLOW_CHECKLIST.map((item) => {
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

            {activeWorkbenchTab === "patterns" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    Event Delegation &amp; Debounce Pattern
                  </h2>
                </div>
                <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre leading-relaxed">{DELEGATION_DEBOUNCE_SNIPPET}</pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Module 05 Knowledge Assessment
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
            onClick={() => navigate("/learning/frontend-engineering/responsive-accessibility-ui")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 4 &mdash; Responsive Design, Accessibility &amp; UI Engineering</span>
          </button>

          <button
            onClick={() => navigate("/learning/frontend-engineering/browser-apis-async")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <span>Next: Module 6 &mdash; Browser APIs, Async &amp; Web Integration</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
