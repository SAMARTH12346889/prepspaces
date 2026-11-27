import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Code2,
  Globe,
  HelpCircle,
  Layers,
  ListChecks,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import FrontendWebArchitectureSections from "./FrontendWebArchitectureSections";

const RENDER_PIPELINE_STAGES = [
  {
    id: "network",
    title: "1. DNS, TCP/QUIC & TLS",
    summary: "Resolves domain name to IP, establishes transport connection, and completes TLS handshake for HTTPS.",
    details: [
      "Browser & OS DNS caches checked first; otherwise recursive resolver queries Root -> TLD -> Authoritative NS.",
      "HTTPS uses TLS to guarantee encryption, integrity, and server identity verification.",
      "HTTP/1.1 & HTTP/2 run over TCP; HTTP/3 runs over QUIC (UDP).",
    ],
  },
  {
    id: "dom-cssom",
    title: "2. HTML Parsing (DOM) & CSS Parsing (CSSOM)",
    summary: "Parses HTML tokens into the Document Object Model tree and CSS rules into the CSS Object Model.",
    details: [
      "DOM represents Document, Element, Text, and Comment nodes accessible via JavaScript.",
      "CSSOM applies selectors, specificity, inheritance, and the cascade.",
      "JavaScript can modify both the DOM and CSSOM dynamically.",
    ],
  },
  {
    id: "render-tree",
    title: "3. Render Tree Construction",
    summary: "Combines visible DOM nodes with computed CSSOM rules to determine what actually needs to be rendered.",
    details: [
      "Elements with `display: none` remain in the DOM, but do not generate visual boxes in the Render Tree.",
      "Connects document structure with computed visual styles.",
    ],
  },
  {
    id: "layout-paint",
    title: "4. Layout (Reflow), Paint & Compositing",
    summary: "Computes exact element geometry, draws pixels (text, borders, shadows), and composites layers to screen.",
    details: [
      "Reflow recalculates geometry when dimensions, positions, or DOM structure change.",
      "Repaint redraws visual properties like colors without changing geometry.",
      "Animating `transform` and `opacity` can often be handled efficiently in the compositor.",
    ],
  },
];

const DEVTOOLS_LAB_EXPERIMENTS = [
  { id: "exp1", label: "Experiment 1: Inspect HTML structure (head/body & semantic tags) in Elements panel" },
  { id: "exp2", label: "Experiment 2: Inspect CSS rules & Computed styles; temporarily edit a CSS value" },
  { id: "exp3", label: "Experiment 3: Record Network panel requests (URL, method, status, type, size, timing)" },
  { id: "exp4", label: "Experiment 4: Inspect Response Headers (Content-Type, Cache-Control, ETag, Last-Modified)" },
  { id: "exp5", label: "Experiment 5: Manipulate the DOM in Console with document.querySelector('h1')" },
  { id: "exp6", label: "Experiment 6: Test Desktop, Tablet, and Mobile layouts via Device Toolbar" },
  { id: "exp7", label: "Experiment 7: Record initial load in Performance panel & inspect main-thread tasks" },
  { id: "exp8", label: "Experiment 8: Inspect DNS, TCP/SSL & Waiting phases in Network Timing tab" },
];

const URL_HTTP_SNIPPET = `https://www.example.com:443/courses/frontend?level=beginner#lessons
│     │   │           │   │                 │              └── Fragment (client-side only)
│     │   │           │   │                 └── Query string (?level=beginner)
│     │   │           │   └── Path (/courses/frontend)
│     │   │           └── Port (443 default for HTTPS)
│     │   └── Domain (example.com)
│     └── Subdomain (www)
└── Scheme (https)

GET /api/courses HTTP/1.1
Host: example.com
Accept: application/json
User-Agent: ExampleBrowser`;

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the key difference between the Internet and the World Wide Web?",
    options: [
      "They are two names for the exact same protocol",
      "The Internet is the global network infrastructure, while the World Wide Web is a service operating on top of it using browsers and HTTP/HTTPS",
      "The World Wide Web only handles email, while the Internet handles HTML",
      "The Internet requires HTML, whereas the Web does not",
    ],
    correctIndex: 1,
    explanation: "The Internet is the underlying global network infrastructure; the Web is one application-level service running over it via HTTP/HTTPS.",
  },
  {
    id: 2,
    question: "Which URL component is generally processed by the browser locally rather than sent in the HTTP request to the server?",
    options: [
      "Scheme (https)",
      "Path (/courses/frontend)",
      "Query string (?level=beginner)",
      "Fragment (#lessons)",
    ],
    correctIndex: 3,
    explanation: "URL fragments (#lessons) identify a section within the resource and are handled client-side by the browser.",
  },
  {
    id: 3,
    question: "Which DNS record type maps a hostname to an IPv6 address?",
    options: ["A Record", "AAAA Record", "CNAME Record", "MX Record"],
    correctIndex: 1,
    explanation: "A maps to IPv4, AAAA maps to 128-bit IPv6, CNAME aliases to another hostname, and MX identifies mail servers.",
  },
  {
    id: 4,
    question: "What is the difference between HTTP 401 Unauthorized and HTTP 403 Forbidden?",
    options: [
      "401 means authentication is required or has failed; 403 means the server refuses the requested operation even if authenticated",
      "401 is a server crash; 403 is a DNS timeout",
      "401 is for GET requests; 403 is for POST requests",
      "They are identical",
    ],
    correctIndex: 0,
    explanation: "401 indicates missing or invalid authentication credentials; 403 indicates insufficient permission to perform the action.",
  },
  {
    id: 5,
    question: "In Client-Side Rendering (CSR), how is the user interface primarily constructed?",
    options: [
      "The database sends pre-rendered PNG images to the browser",
      "The browser downloads JavaScript, executes it, and constructs/updates the interface dynamically",
      "The DNS server compiles CSS into HTML",
      "No JavaScript is ever executed in the browser",
    ],
    correctIndex: 1,
    explanation: "CSR ships an HTML entry point and JavaScript bundles that build and update the DOM in the browser.",
  },
  {
    id: 6,
    question: "What happens to an element styled with `display: none` in the DOM vs. the Render Tree?",
    options: [
      "It is deleted from the HTML file on the server",
      "It remains in the DOM, but does not generate a normal visual box in the Render Tree",
      "It is removed from the DOM and kept in the Render Tree",
      "It causes a 500 Internal Server Error",
    ],
    correctIndex: 1,
    explanation: "The DOM represents all document nodes, whereas the Render Tree only includes visual objects that need to be laid out and painted.",
  },
  {
    id: 7,
    question: "What is the difference between Reflow (Layout) and Repaint in browser rendering?",
    options: [
      "Reflow recalculates element geometry/positions; Repaint redraws visual pixels (like colors) without necessarily changing layout geometry",
      "Repaint recalculates element widths; Reflow only changes background color",
      "Reflow only runs on mobile devices",
      "They are identical operations",
    ],
    correctIndex: 0,
    explanation: "Changing dimensions or positions triggers layout/reflow, while color-only changes may only trigger repaint.",
  },
  {
    id: 8,
    question: "Which two CSS properties are often efficiently handled by the compositor without triggering expensive layout recalculations?",
    options: [
      "width and margin",
      "padding and font-size",
      "transform and opacity",
      "border-width and height",
    ],
    correctIndex: 2,
    explanation: "Animating transform and opacity can often be composited directly on the GPU without triggering reflow.",
  },
  {
    id: 9,
    question: "Which Browser DevTools panel is best suited for inspecting HTTP methods, status codes, headers, transfer sizes, and request timings?",
    options: ["Elements", "Console", "Network", "Application"],
    correctIndex: 2,
    explanation: "The Network panel records all HTTP requests, headers, status codes, payloads, and timing phases (DNS, TLS, TTFB).",
  },
  {
    id: 10,
    question: "When collaborating with Git across two computers, what should you do on Computer B before continuing work after pushing from Computer A?",
    options: [
      "Force-push main from Computer B",
      "Run `git fetch origin` and `git pull --rebase origin main` to integrate the latest remote changes",
      "Delete the .git folder",
      "Copy node_modules manually",
    ],
    correctIndex: 1,
    explanation: "Fetching and pulling remote updates keeps local history synchronized and prevents avoidable merge conflicts.",
  },
];

export default function FrontendWebArchitecture() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("pipeline");
  const [selectedStage, setSelectedStage] = useState("network");
  const [checkedExperiments, setCheckedExperiments] = useState({});
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleExperiment = (id) => {
    setCheckedExperiments((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedExperiments = DEVTOOLS_LAB_EXPERIMENTS.filter((e) => checkedExperiments[e.id]).length;

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
  const activeStage = RENDER_PIPELINE_STAGES.find((s) => s.id === selectedStage) || RENDER_PIPELINE_STAGES[0];

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#18181b] font-sans">
      <ModuleNav track="frontend-engineering" currentModuleId="web-architecture-foundations" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-700">
              Module 01 &middot; Foundation Module
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              WEB ARCHITECTURE &middot; HTTP/HTTPS &middot; DNS &middot; DOM &amp; CSSOM &middot; DEVTOOLS &middot; GIT
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 01 &mdash; Web Architecture and Frontend Engineering Foundations
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Understand the complete journey from a user&apos;s browser request to the webpage appearing on the screen: internet protocols, client-server architecture, HTTP/HTTPS, DNS &amp; CDNs, DOM/CSSOM/Render Tree, browser DevTools, and Git/GitHub team workflows.
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
              <Globe size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {activeTab === "curriculum" ? (
          <FrontendWebArchitectureSections />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("pipeline")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "pipeline"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Browser Rendering Pipeline
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("lab")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "lab"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. DevTools Inspection Lab
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("url")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "url"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. URL &amp; HTTP Request Anatomy
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

            {activeWorkbenchTab === "pipeline" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center gap-2">
                  <Layers className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    Browser Loading &amp; Rendering Stages
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {RENDER_PIPELINE_STAGES.map((stage) => (
                    <button
                      key={stage.id}
                      onClick={() => setSelectedStage(stage.id)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedStage === stage.id
                          ? "border-[#f97316] bg-orange-50/70 shadow-xs"
                          : "border-stone-200 bg-stone-50 hover:bg-stone-100"
                      }`}
                    >
                      <div className="font-bold text-sm text-stone-900">{stage.title}</div>
                      <div className="text-xs text-stone-600 mt-1">{stage.summary}</div>
                    </button>
                  ))}
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-3">
                  <div className="font-bold text-stone-900 text-sm sm:text-base">
                    {activeStage.title} &mdash; Key Mechanics
                  </div>
                  <ul className="space-y-2">
                    {activeStage.details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "lab" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <ListChecks className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Practical Lab &mdash; Website Inspection Experiments
                    </h2>
                  </div>
                  <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-bold text-stone-700">
                    {completedExperiments} / {DEVTOOLS_LAB_EXPERIMENTS.length} Completed
                  </span>
                </div>

                <div className="space-y-3">
                  {DEVTOOLS_LAB_EXPERIMENTS.map((item) => {
                    const checked = Boolean(checkedExperiments[item.id]);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleExperiment(item.id)}
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

            {activeWorkbenchTab === "url" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    URL Breakdown &amp; HTTP Request Structure
                  </h2>
                </div>
                <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre leading-relaxed">{URL_HTTP_SNIPPET}</pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Module 01 Knowledge Assessment
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
            onClick={() => navigate("/learning")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Back to Curriculum Hub</span>
          </button>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-600">
            <ShieldCheck size={16} className="text-emerald-600" />
            <span>Next Module: HTML5 &mdash; Semantic Structure, Forms &amp; Modern Web Document Engineering</span>
          </div>
        </div>
      </main>
    </div>
  );
}
