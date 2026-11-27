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
  Palette,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import FrontendCssEngineeringSections from "./FrontendCssEngineeringSections";

const LAYOUT_SYSTEMS = [
  {
    id: "box-model",
    title: "Box Model & Cascade Layers",
    summary: "Predictable sizing with border-box, cascade layers (@layer), and low-specificity selectors.",
    details: [
      "`html { box-sizing: border-box; }` inherited by `*, *::before, *::after` keeps widths predictable.",
      "`@layer reset, base, layout, components, utilities;` establishes explicit cascade precedence.",
      "Use `:where(...)` for zero-specificity base defaults and `min-width: 0` on flex/grid children.",
    ],
  },
  {
    id: "flexbox",
    title: "Flexbox (1D Alignment & Distribution)",
    summary: "One-dimensional layout along Main Axis (justify-content) and Cross Axis (align-items).",
    details: [
      "Use Flexbox for navbars, button groups, card rows, toolbars, and vertical centering.",
      "`flex: 1 1 250px` combines `flex-grow`, `flex-shrink`, and `flex-basis`.",
      "`gap` spaces items cleanly without fragile margin hacks.",
    ],
  },
  {
    id: "grid",
    title: "CSS Grid (2D Tracks & Named Areas)",
    summary: "Coordinated rows and columns with fr units, repeat(auto-fit, minmax(...)), and grid-template-areas.",
    details: [
      "Use Grid for dashboards, course catalogues, and application shells.",
      "`repeat(auto-fit, minmax(260px, 1fr))` creates responsive card grids without media-query boilerplate.",
      "`grid-template-areas` makes page regions self-documenting while preserving DOM order.",
    ],
  },
  {
    id: "architecture",
    title: "Tokens, Container Queries & CSS Modules",
    summary: "Scalable design systems combining custom properties, @container, BEM, and local CSS Modules.",
    details: [
      "Centralize colors, spacing, radii, and fluid `clamp()` typography in `:root` custom properties.",
      "Use `@container (min-width: 600px)` so reusable cards adapt to their parent container.",
      "Pair `.module.css` local class scoping with `@media (prefers-reduced-motion: reduce)`.",
    ],
  },
];

const RESPONSIVE_CHECKLIST = [
  { id: "r1", label: "Global border-box reset & @layer reset, base, layout, components, utilities" },
  { id: "r2", label: "Design tokens (:root custom properties) for colors, spacing, radii & fluid clamp() type" },
  { id: "r3", label: "Flexbox navbar & card internals + CSS Grid dashboard / course catalogue" },
  { id: "r4", label: "Sticky sidebar & modal stacking context verified without z-index traps" },
  { id: "r5", label: "Tested across 320px, 375px, 430px, 768px, 1024px, 1440px & 1920px (zero overflow)" },
  { id: "r6", label: "Focus-visible outlines, prefers-reduced-motion & CSS Modules isolation verified" },
];

const DESIGN_TOKENS_SNIPPET = `@layer reset, base, layout, components, utilities;

:root {
  --color-primary: #171717;
  --color-accent: #d97706;
  --surface: #ffffff;
  --text-display: clamp(2.25rem, 5vw, 4rem);
  --space-md: 16px;
  --space-lg: 24px;
  --radius-md: 12px;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-lg);
}

@container (min-width: 600px) {
  .course-card {
    display: grid;
    grid-template-columns: 180px 1fr;
  }
}`;

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Under `box-sizing: content-box`, what is the border-box width of an element with `width: 300px; padding: 20px; border: 5px solid black;`?",
    options: ["300px", "325px", "350px", "380px"],
    correctIndex: 2,
    explanation: "With content-box, left+right padding (40px) and left+right border (10px) are added outside the 300px content width, totaling 350px.",
  },
  {
    id: 2,
    question: "Why can a child element with `z-index: 9999` still appear behind another element with `z-index: 2`?",
    options: [
      "CSS ignores z-index values above 1000",
      "The child is trapped inside a parent's stacking context (e.g., `position: relative; z-index: 1; transform: translateZ(0)`) which sits below the other element's stacking context",
      "z-index only works on inline elements",
      "border-box disables z-index",
    ],
    correctIndex: 1,
    explanation: "Stacking contexts are self-contained; a child cannot escape its parent's stacking context to compete against an outside stacking context.",
  },
  {
    id: 3,
    question: "In Flexbox, what is a common fix when a flex item with long text or wide children refuses to shrink below its content width?",
    options: [
      "Set `min-width: 0` on the flex item",
      "Set `flex-shrink: 999`",
      "Remove `display: flex` from the parent",
      "Set `position: sticky`",
    ],
    correctIndex: 0,
    explanation: "Flex items have `min-width: auto` by default; setting `min-width: 0` allows them to shrink below their intrinsic content size.",
  },
  {
    id: 4,
    question: "In CSS Grid, what is the difference between `auto-fit` and `auto-fill` inside `repeat(..., minmax(250px, 1fr))`?",
    options: [
      "auto-fit collapses empty tracks when possible so items can expand, whereas auto-fill retains the empty repeated tracks",
      "auto-fill is only for rows; auto-fit is only for columns",
      "auto-fit disables `gap`",
      "They are identical aliases",
    ],
    correctIndex: 0,
    explanation: "Both create repeating tracks, but auto-fit collapses empty tracks so existing items stretch to fill the row.",
  },
  {
    id: 5,
    question: "Why is `:where(h1, h2, h3)` useful for reusable base styles compared to `:is(h1, h2, h3)`?",
    options: [
      "`:where()` always has zero specificity, making it easy to override later",
      "`:where()` has higher specificity than IDs",
      "`:is()` does not support headings",
      "`:where()` disables inheritance",
    ],
    correctIndex: 0,
    explanation: "`:is()` takes the highest specificity of its selector list, whereas `:where()` always contributes 0 specificity.",
  },
  {
    id: 6,
    question: "How do container queries (`@container`) differ from viewport media queries (`@media`)?",
    options: [
      "Container queries adapt a component based on the size of its containing element rather than the full browser viewport",
      "Container queries only work in HTML tables",
      "Media queries cannot check `min-width`",
      "Container queries replace CSS Grid",
    ],
    correctIndex: 0,
    explanation: "Container queries let reusable components respond to the space allocated to their parent container.",
  },
  {
    id: 7,
    question: "Which CSS function cleanly expresses fluid typography with a minimum, preferred viewport-based size, and maximum?",
    options: ["calc()", "clamp(min, preferred, max)", "repeat()", "minmax()"],
    correctIndex: 1,
    explanation: "`clamp(2rem, 5vw, 4rem)` scales fluidly between a floor and ceiling.",
  },
  {
    id: 8,
    question: "What is the key difference between `rem` and `em` units?",
    options: [
      "`rem` is relative to the root (`html`) element's font size and does not compound in nested elements, while `em` is relative to the element/parent font size",
      "`em` is an absolute physical unit; `rem` is not",
      "`rem` only works for `margin`",
      "They are identical",
    ],
    correctIndex: 0,
    explanation: "`rem` provides a predictable global scale without compounding across nested containers.",
  },
  {
    id: 9,
    question: "Why are CSS Modules (`.module.css`) used in component-based applications like React?",
    options: [
      "They are a native browser CSS feature that replaces HTML",
      "Build tools generate locally scoped class names, preventing global class-name collisions across unrelated components",
      "They automatically generate backend REST APIs",
      "They disable CSS custom properties",
    ],
    correctIndex: 1,
    explanation: "CSS Modules scope class names at build time while still supporting global CSS custom properties for shared design tokens.",
  },
  {
    id: 10,
    question: "Which two CSS properties are generally preferred for performant animations because browsers can often composite them without triggering layout?",
    options: ["width and height", "top and left", "transform and opacity", "margin and padding"],
    correctIndex: 2,
    explanation: "Animating `transform` and `opacity` avoids expensive reflow/layout recalculations.",
  },
];

export default function FrontendCssEngineering() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("layout");
  const [selectedSystem, setSelectedSystem] = useState("box-model");
  const [checkedItems, setCheckedItems] = useState({});
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = RESPONSIVE_CHECKLIST.filter((c) => checkedItems[c.id]).length;

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
  const activeSystem = LAYOUT_SYSTEMS.find((s) => s.id === selectedSystem) || LAYOUT_SYSTEMS[0];

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#18181b] font-sans">
      <ModuleNav track="frontend-engineering" currentModuleId="css-engineering-layout" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-700">
              Module 03 &middot; Core Module
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              CSS3 &middot; CASCADE &amp; BOX MODEL &middot; FLEXBOX &middot; GRID &middot; TOKENS &middot; CSS MODULES
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 03 &mdash; CSS Engineering and Modern Layout Systems
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Engineer scalable, responsive UI systems: cascade layers &amp; specificity, box model, positioning &amp; stacking contexts, Flexbox, CSS Grid, fluid clamp() typography, container queries, animations, BEM/ITCSS architecture, and CSS Modules.
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
              <Palette size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {activeTab === "curriculum" ? (
          <FrontendCssEngineeringSections />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("layout")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "layout"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Layout &amp; Architecture Explorer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("checklist")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "checklist"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Responsive CSS Checklist
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("tokens")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "tokens"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Design Tokens &amp; Container Query
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

            {activeWorkbenchTab === "layout" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center gap-2">
                  <Layers className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    Modern CSS Layout &amp; Styling Systems
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {LAYOUT_SYSTEMS.map((sys) => (
                    <button
                      key={sys.id}
                      onClick={() => setSelectedSystem(sys.id)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedSystem === sys.id
                          ? "border-[#f97316] bg-orange-50/70 shadow-xs"
                          : "border-stone-200 bg-stone-50 hover:bg-stone-100"
                      }`}
                    >
                      <div className="font-bold text-sm text-stone-900">{sys.title}</div>
                      <div className="text-xs text-stone-600 mt-1">{sys.summary}</div>
                    </button>
                  ))}
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-3">
                  <div className="font-bold text-stone-900 text-sm sm:text-base">
                    {activeSystem.title} &mdash; Engineering Practices
                  </div>
                  <ul className="space-y-2">
                    {activeSystem.details.map((item, idx) => (
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
                      Responsive CSS &amp; Architecture Checklist
                    </h2>
                  </div>
                  <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-bold text-stone-700">
                    {completedCount} / {RESPONSIVE_CHECKLIST.length} Completed
                  </span>
                </div>

                <div className="space-y-3">
                  {RESPONSIVE_CHECKLIST.map((item) => {
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

            {activeWorkbenchTab === "tokens" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    Cascade Layers, Design Tokens &amp; Container Queries
                  </h2>
                </div>
                <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre leading-relaxed">{DESIGN_TOKENS_SNIPPET}</pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Module 03 Knowledge Assessment
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
            onClick={() => navigate("/learning/frontend-engineering/semantic-html")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 2 &mdash; Semantic HTML &amp; Document Engineering</span>
          </button>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-600">
            <ShieldCheck size={16} className="text-emerald-600" />
            <span>Next Module: JavaScript Programming Foundations</span>
          </div>
        </div>
      </main>
    </div>
  );
}
