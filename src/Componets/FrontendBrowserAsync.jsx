import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Code2,
  HelpCircle,
  Layers,
  ListChecks,
  Radio,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import FrontendBrowserAsyncSections from "./FrontendBrowserAsyncSections";

const ASYNC_APIS_PILLARS = [
  {
    id: "promises-fetch",
    title: "Promises, Async/Await & Fetch",
    summary: "Promise.all / allSettled / race / any, `response.ok` checks, and REST/CORS integration.",
    details: [
      "Fetch does NOT reject on HTTP 404/500 — always check `response.ok` or `response.status`.",
      "Use `Promise.all()` for independent parallel requests; `Promise.allSettled()` for partial dashboard resilience.",
      "Never put private API keys or privileged credentials in browser-side JavaScript.",
    ],
  },
  {
    id: "storage",
    title: "LocalStorage, SessionStorage & IndexedDB",
    summary: "Choosing between synchronous string storage and asynchronous structured client databases.",
    details: [
      "LocalStorage persists across sessions (preferences); SessionStorage lives for the tab page session.",
      "IndexedDB handles large structured datasets asynchronously with object stores, indexes, and transactions.",
      "Browser storage is NOT an authoritative database or safe place for authentication secrets.",
    ],
  },
  {
    id: "realtime-device",
    title: "WebSockets, Files, Media & Geolocation",
    summary: "Bidirectional `wss://` streams, File/ObjectURL cleanup, Clipboard, Notification, and MediaDevices.",
    details: [
      "Always check `socket.readyState === WebSocket.OPEN` before calling `socket.send(...)`.",
      "Call `URL.revokeObjectURL(...)` after previews and `track.stop()` on `MediaStream` tracks on teardown.",
      "Request Geolocation, Notification, and Camera/Mic permissions only in response to clear user intent.",
    ],
  },
  {
    id: "resilience",
    title: "Timeouts, Retries & Error States",
    summary: "AbortController timeouts, exponential backoff with jitter, and Loading/Success/Error/Empty UI states.",
    details: [
      "Use `AbortController` + `setTimeout` (with `clearTimeout` in `finally`) to bound slow requests.",
      "Retry transient GET/network failures with backoff; avoid blindly retrying non-idempotent POST writes.",
      "Always render explicit Loading, Success, Error (with retry), and Empty states.",
    ],
  },
];

const DASHBOARD_CHECKLIST = [
  { id: "b1", label: "Parallel Fetch calls with Promise.all() / Promise.allSettled() & response.ok checks" },
  { id: "b2", label: "AbortController request timeout + exponential backoff retry for safe requests" },
  { id: "b3", label: "LocalStorage theme preferences, SessionStorage tab state & IndexedDB structured cache" },
  { id: "b4", label: "Explicit Loading, Success, Error (retry button) & Empty UI states" },
  { id: "b5", label: "Auto-refresh interval with overlap guard and clean teardown on unmount" },
  { id: "b6", label: "WebSocket real-time updates with readyState check & controlled reconnection" },
];

const FETCH_TIMEOUT_SNIPPET = `async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(\`HTTP Error: \${response.status}\`);
    }
    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}`;

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the primary responsibility of the JavaScript Event Loop?",
    options: [
      "To execute CSS animations",
      "To coordinate the execution of queued callbacks when the call stack is available",
      "To store application data",
      "To send HTTP requests",
    ],
    correctIndex: 1,
    explanation: "The Event Loop coordinates when pending microtasks and tasks execute once the Call Stack is clear.",
  },
  {
    id: 2,
    question: "Which callback normally runs first after the current synchronous code finishes?",
    options: [
      "A setTimeout callback",
      "A Promise .then() callback",
      "A network request callback regardless of state",
      "An arbitrary DOM event",
    ],
    correctIndex: 1,
    explanation: "Promise reactions run in the microtask queue, which drains before the next macrotask such as setTimeout.",
  },
  {
    id: 3,
    question: "What does an async function always return?",
    options: ["A string", "An array", "A Promise", "A callback"],
    correctIndex: 2,
    explanation: "Any value returned from an `async` function is automatically wrapped in a fulfilled Promise.",
  },
  {
    id: 4,
    question: "What happens when Fetch receives an HTTP 404 response?",
    options: [
      "The Fetch Promise always rejects",
      "The browser automatically retries",
      "Fetch normally fulfills with a Response object",
      "The browser closes the page",
    ],
    correctIndex: 2,
    explanation: "Fetch only rejects on network failures or aborts; always check `response.ok` or `response.status`.",
  },
  {
    id: 5,
    question: "Which Promise method waits for every supplied Promise to settle?",
    options: ["Promise.race()", "Promise.allSettled()", "Promise.resolve()", "Promise.any()"],
    correctIndex: 1,
    explanation: "`Promise.allSettled()` waits for all input Promises to either fulfill or reject and returns each outcome.",
  },
  {
    id: 6,
    question: "Which browser storage mechanism is designed for asynchronous structured data storage?",
    options: ["LocalStorage", "SessionStorage", "IndexedDB", "Cookies only"],
    correctIndex: 2,
    explanation: "IndexedDB provides asynchronous, indexed, transactional storage for larger structured client-side datasets.",
  },
  {
    id: 7,
    question: "What is the main advantage of WebSockets?",
    options: [
      "They replace HTML",
      "They provide persistent bidirectional communication",
      "They store data permanently",
      "They automatically validate user input",
    ],
    correctIndex: 1,
    explanation: "WebSockets establish a persistent, full-duplex channel so both client and server can push messages anytime.",
  },
  {
    id: 8,
    question: "Which API is used to request camera or microphone access?",
    options: ["localStorage", "Notification", "navigator.mediaDevices.getUserMedia()", "JSON.parse()"],
    correctIndex: 2,
    explanation: "`navigator.mediaDevices.getUserMedia()` prompts for camera/audio access and returns a `MediaStream`.",
  },
  {
    id: 9,
    question: "Why should developers be careful when implementing automatic retries?",
    options: [
      "Retries always reduce server load",
      "Every HTTP error is temporary",
      "Retries can duplicate non-idempotent operations",
      "Retries disable CORS",
    ],
    correctIndex: 2,
    explanation: "Retrying POST or payment requests without idempotency keys can create duplicate operations.",
  },
  {
    id: 10,
    question: "Which mechanism can abort an ongoing Fetch request?",
    options: ["Promise.all()", "AbortController", "JSON.stringify()", "SessionStorage"],
    correctIndex: 1,
    explanation: "Passing `controller.signal` to `fetch()` and calling `controller.abort()` cancels an in-flight request.",
  },
];

export default function FrontendBrowserAsync() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("apis");
  const [selectedPillar, setSelectedPillar] = useState("promises-fetch");
  const [checkedItems, setCheckedItems] = useState({});
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = DASHBOARD_CHECKLIST.filter((c) => checkedItems[c.id]).length;

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
  const activePillar = ASYNC_APIS_PILLARS.find((p) => p.id === selectedPillar) || ASYNC_APIS_PILLARS[0];

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#18181b] font-sans">
      <ModuleNav track="frontend-engineering" currentModuleId="browser-apis-async" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-700">
              Module 06 &middot; Core Module
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              FETCH API &middot; PROMISES &middot; INDEXEDDB &middot; WEBSOCKETS &middot; ABORTCONTROLLER
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 06 &mdash; Browser APIs, Asynchronous Programming and Web Integration
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Connect frontend applications to external services and browser capabilities: Call Stack &amp; Event Loop, Promises &amp; Async/Await, Fetch &amp; REST/CORS integration, JSON validation, LocalStorage/SessionStorage/IndexedDB, WebSockets, File/Clipboard/Media APIs, and timeouts/retries.
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
              <Radio size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {activeTab === "curriculum" ? (
          <FrontendBrowserAsyncSections />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("apis")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "apis"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Async &amp; Browser APIs Explorer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("checklist")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "checklist"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Live Data Dashboard Checklist
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("timeout")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "timeout"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Fetch Timeout Pattern
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

            {activeWorkbenchTab === "apis" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center gap-2">
                  <Layers className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    Asynchronous &amp; Browser Integration Pillars
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {ASYNC_APIS_PILLARS.map((pillar) => (
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
                    {activePillar.title} &mdash; Engineering Practices
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
                      Live Data Dashboard Project Checklist
                    </h2>
                  </div>
                  <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-bold text-stone-700">
                    {completedCount} / {DASHBOARD_CHECKLIST.length} Completed
                  </span>
                </div>

                <div className="space-y-3">
                  {DASHBOARD_CHECKLIST.map((item) => {
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

            {activeWorkbenchTab === "timeout" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    Fetch with AbortController Timeout
                  </h2>
                </div>
                <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre leading-relaxed">{FETCH_TIMEOUT_SNIPPET}</pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Module 06 Knowledge Assessment
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
            onClick={() => navigate("/learning/frontend-engineering/modern-javascript")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 5 &mdash; Modern JavaScript for Web Applications</span>
          </button>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-600">
            <ShieldCheck size={16} className="text-emerald-600" />
            <span>Next Module: Component Architecture &amp; React Engineering</span>
          </div>
        </div>
      </main>
    </div>
  );
}
