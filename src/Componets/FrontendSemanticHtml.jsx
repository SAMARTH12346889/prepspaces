import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  FileCode2,
  HelpCircle,
  Layers,
  ListChecks,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import FrontendSemanticHtmlSections from "./FrontendSemanticHtmlSections";

const SEMANTIC_LANDMARKS = [
  {
    id: "header",
    title: "<header> & <nav>",
    summary: "Introductory content, branding, and primary navigation landmarks.",
    details: [
      "`<header>` introduces its nearest sectioning context (page or article).",
      "`<nav aria-label='Main navigation'>` marks major navigation link groups, not every minor link list.",
      "Breadcrumb trails use `<nav aria-label='Breadcrumb'>` with an `<ol>` and `aria-current='page'`.",
    ],
  },
  {
    id: "main",
    title: "<main>, <section> & <article>",
    summary: "Core document landmarks and self-contained compositions.",
    details: [
      "`<main>` identifies the dominant content of the document (one main landmark per page).",
      "`<section>` groups thematically related content, typically with a heading.",
      "`<article>` represents an independent, self-contained composition (blog post, course card, announcement).",
    ],
  },
  {
    id: "aside-footer",
    title: "<aside> & <footer>",
    summary: "Supplementary content and closing metadata/copyright regions.",
    details: [
      "`<aside>` holds indirectly related content such as sidebars, callouts, or related courses.",
      "`<footer>` holds copyright, legal, contact, or author metadata for its sectioning context.",
    ],
  },
  {
    id: "media-forms",
    title: "<figure>, <table> & <form>",
    summary: "Accessible multimedia captions, structured data, and validated user input.",
    details: [
      "`<figure>` + `<figcaption>` pairs diagrams/code with explanatory captions; informative `<img>` requires meaningful `alt`, decorative `<img>` uses `alt=''`.",
      "`<table>` uses `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, and `<th scope='col'|'row'>`.",
      "`<form>` pairs explicit `<label for='...'>` with `id`, uses `fieldset`/`legend`, and leverages native + Constraint Validation API.",
    ],
  },
];

const PROJECT_CHECKLIST = [
  { id: "c1", label: "HTML5 <!DOCTYPE html>, <html lang='en'>, charset UTF-8 & responsive viewport" },
  { id: "c2", label: "Logical h1 -> h2 -> h3 heading hierarchy (no skipped levels for visual sizing)" },
  { id: "c3", label: "6 connected semantic pages (index, courses, course details, about, contact, register)" },
  { id: "c4", label: "Accessible forms with explicit <label>, <fieldset>/<legend>, and Constraint Validation API" },
  { id: "c5", label: "Responsive images (srcset/sizes/<picture>), captioned <video> with <track>, and sandboxed <iframe>" },
  { id: "c6", label: "Unique <title>, meta description, canonical link, Open Graph tags & keyboard/ARIA audit" },
];

const VALIDATION_SNIPPET = `<form id="register-form">
  <label for="username">Username</label>
  <input
    type="text"
    id="username"
    name="username"
    minlength="3"
    aria-describedby="username-help"
    required
  >
  <p id="username-help">At least 3 characters, no spaces.</p>
  <button type="submit">Create Account</button>
</form>

<script>
  const username = document.querySelector("#username");
  username.addEventListener("input", () => {
    if (username.value.includes(" ")) {
      username.setCustomValidity("Username cannot contain spaces.");
    } else {
      username.setCustomValidity("");
    }
  });
</script>`;

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the primary purpose of `<!DOCTYPE html>` at the top of an HTML5 document?",
    options: [
      "It imports CSS stylesheets automatically",
      "It instructs the browser to parse the document in modern HTML standards mode rather than legacy quirks mode",
      "It registers the domain in DNS",
      "It enables JavaScript ES modules",
    ],
    correctIndex: 1,
    explanation: "The DOCTYPE declaration switches browsers into standards mode so layout and parsing follow modern HTML specifications.",
  },
  {
    id: 2,
    question: "Which set of HTML elements are all void elements (cannot contain child content and have no closing tags)?",
    options: [
      "div, span, section, article",
      "img, br, hr, input, meta, link",
      "form, table, label, button",
      "header, nav, main, footer",
    ],
    correctIndex: 1,
    explanation: "Void elements such as img, br, hr, input, meta, and link cannot have child nodes or closing tags.",
  },
  {
    id: 3,
    question: "When should you choose `<article>` instead of `<section>`?",
    options: [
      "Whenever you need a generic styling wrapper",
      "When the content is a self-contained composition (such as a blog post, news item, or course card) that makes sense independently",
      "Only for the page footer",
      "Instead of `<nav>` for primary links",
    ],
    correctIndex: 1,
    explanation: "`<article>` represents an independent, self-contained composition, whereas `<section>` groups thematically related content.",
  },
  {
    id: 4,
    question: "Why is a native `<button type=\"button\">` preferred over `<div onclick=\"...\">` for interactive actions?",
    options: [
      "Div elements cannot be styled with CSS",
      "A native button provides built-in keyboard activation (Enter/Space), focusability, and button semantics for assistive technologies",
      "Buttons automatically submit GET requests without JavaScript",
      "Div elements are invalid inside `<main>`",
    ],
    correctIndex: 1,
    explanation: "Native semantic controls deliver keyboard support, focus management, and accessibility semantics out of the box.",
  },
  {
    id: 5,
    question: "What is the recommended `alt` attribute value for a purely decorative image that adds no informational value?",
    options: [
      "Omit the alt attribute completely",
      "Set `alt=\"\"` (an empty string) so assistive technologies skip announcing it unnecessarily",
      "Set `alt=\"decorative-image.jpg\"`",
      "Use `title=\"image\"` instead of alt",
    ],
    correctIndex: 1,
    explanation: "An empty `alt=\"\"` tells screen readers the image is decorative; omitting `alt` entirely may cause them to read the filename.",
  },
  {
    id: 6,
    question: "In an HTML form, what is the difference between `method=\"get\"` and `method=\"post\"`?",
    options: [
      "POST encrypts data without needing HTTPS; GET does not",
      "GET appends form parameters to the URL query string (good for bookmarkable searches), while POST sends data in the request body (good for state-changing operations)",
      "GET is only for file uploads",
      "POST cannot be used with `<input type=\"email\">`",
    ],
    correctIndex: 1,
    explanation: "GET encodes parameters into the URL for idempotent retrieval; POST sends data in the HTTP body, though HTTPS is still required for encryption.",
  },
  {
    id: 7,
    question: "In the Constraint Validation API, how do you clear a custom validation error previously set with `input.setCustomValidity(\"...\")`?",
    options: [
      "Call `input.setCustomValidity(\"\")` (an empty string)",
      "Call `input.removeAttribute(\"required\")`",
      "Set `input.value = null`",
      "Add `novalidate` to the input",
    ],
    correctIndex: 0,
    explanation: "A control remains invalid until `setCustomValidity(\"\")` is called with an empty string.",
  },
  {
    id: 8,
    question: "Which HTML attributes improve accessibility in a data table by explicitly linking header cells to their row or column cells?",
    options: [
      "`<th>` with `scope=\"col\"` or `scope=\"row\"` (and `<caption>` for the table title)",
      "`<td>` with `placeholder`",
      "`<div role=\"table\">` without `<th>`",
      "`colspan=\"0\"` on every cell",
    ],
    correctIndex: 0,
    explanation: "Using `<th>` with `scope` and `<caption>` allows screen readers to announce column and row headers for each data cell.",
  },
  {
    id: 9,
    question: "What is the purpose of `<link rel=\"canonical\" href=\"...\">` in the `<head>`?",
    options: [
      "It redirects users automatically to another domain",
      "It indicates the preferred URL for a page when multiple URLs serve substantially identical content",
      "It blocks search engines from crawling the page",
      "It loads the page favicon",
    ],
    correctIndex: 1,
    explanation: "Canonical links help search engines consolidate duplicate or parameterized URLs onto one preferred URL.",
  },
  {
    id: 10,
    question: "What are the four core principles of WCAG (Web Content Accessibility Guidelines)?",
    options: [
      "Fast, Responsive, Animated, Styled",
      "Perceivable, Operable, Understandable, Robust",
      "Semantic, Validated, Cached, Indexed",
      "Public, Private, Partner, Internal",
    ],
    correctIndex: 1,
    explanation: "WCAG organizes accessibility around POUR: Perceivable, Operable, Understandable, and Robust.",
  },
];

export default function FrontendSemanticHtml() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("landmarks");
  const [selectedLandmark, setSelectedLandmark] = useState("header");
  const [checkedItems, setCheckedItems] = useState({});
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = PROJECT_CHECKLIST.filter((c) => checkedItems[c.id]).length;

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
  const activeLandmark = SEMANTIC_LANDMARKS.find((l) => l.id === selectedLandmark) || SEMANTIC_LANDMARKS[0];

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#18181b] font-sans">
      <ModuleNav track="frontend-engineering" currentModuleId="semantic-html" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-700">
              Module 02 &middot; Core Module
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              HTML5 &middot; SEMANTIC LANDMARKS &middot; FORMS &amp; VALIDATION &middot; TABLES &middot; SEO &middot; WCAG
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 02 &mdash; Semantic HTML and Modern Document Engineering
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Engineer structured, meaningful, accessible, and search-engine-friendly HTML5 documents: semantic landmarks, heading outlines, multimedia &amp; responsive images, forms &amp; Constraint Validation API, accessible tables, Open Graph/SEO metadata, and WCAG accessibility.
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
              <FileCode2 size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {activeTab === "curriculum" ? (
          <FrontendSemanticHtmlSections />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("landmarks")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "landmarks"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Semantic Landmarks Explorer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("checklist")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "checklist"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Multi-Page Project Checklist
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("validation")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "validation"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Constraint Validation API
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

            {activeWorkbenchTab === "landmarks" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center gap-2">
                  <Layers className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    Semantic HTML5 Document Landmarks
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {SEMANTIC_LANDMARKS.map((lm) => (
                    <button
                      key={lm.id}
                      onClick={() => setSelectedLandmark(lm.id)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedLandmark === lm.id
                          ? "border-[#f97316] bg-orange-50/70 shadow-xs"
                          : "border-stone-200 bg-stone-50 hover:bg-stone-100"
                      }`}
                    >
                      <div className="font-bold text-sm text-stone-900">{lm.title}</div>
                      <div className="text-xs text-stone-600 mt-1">{lm.summary}</div>
                    </button>
                  ))}
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-3">
                  <div className="font-bold text-stone-900 text-sm sm:text-base">
                    {activeLandmark.title} &mdash; Engineering Rules
                  </div>
                  <ul className="space-y-2">
                    {activeLandmark.details.map((item, idx) => (
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
                      Multi-Page Website Verification Checklist
                    </h2>
                  </div>
                  <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-bold text-stone-700">
                    {completedCount} / {PROJECT_CHECKLIST.length} Completed
                  </span>
                </div>

                <div className="space-y-3">
                  {PROJECT_CHECKLIST.map((item) => {
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

            {activeWorkbenchTab === "validation" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    Accessible Form &amp; Constraint Validation API Pattern
                  </h2>
                </div>
                <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre leading-relaxed">{VALIDATION_SNIPPET}</pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Module 02 Knowledge Assessment
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
            onClick={() => navigate("/learning/frontend-engineering")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 1 &mdash; Web Architecture &amp; Foundations</span>
          </button>

          <button
            onClick={() => navigate("/learning/frontend-engineering/css-engineering-layout")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <span>Next: Module 3 &mdash; CSS Engineering &amp; Modern Layout Systems</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
