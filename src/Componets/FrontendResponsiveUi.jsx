import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Accessibility,
  ArrowLeft,
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
import FrontendResponsiveUiSections from "./FrontendResponsiveUiSections";

const ENGINEERING_PILLARS = [
  {
    id: "responsive",
    title: "Mobile-First & Container Queries",
    summary: "Content-driven breakpoints, fluid clamp() spacing/type, and @container component adaptation.",
    details: [
      "Start with single-column mobile layout and enhance upward with `min-width` queries.",
      "Use `repeat(auto-fit, minmax(min(100%, 260px), 1fr))` and `width: min(100% - 32px, 1200px)`.",
      "Use `@container (min-width: 600px)` so reusable cards adapt to sidebars vs. main columns.",
    ],
  },
  {
    id: "wcag",
    title: "WCAG 2.2 (POUR) & Contrast",
    summary: "Perceivable, Operable, Understandable, Robust interfaces meeting Level AA & reflow.",
    details: [
      "4.5:1 contrast for normal text; 3:1 for large text (18pt / 14pt bold) and UI components.",
      "24x24 CSS px minimum target size (AA) and 44x44 CSS px enhanced target size (AAA).",
      "Support 320px reflow without horizontal scrolling and never use color as the only indicator.",
    ],
  },
  {
    id: "keyboard-aria",
    title: "Keyboard Focus & ARIA Patterns",
    summary: "Native HTML first, visible focus rings, logical Tab order, modal focus, and live regions.",
    details: [
      "Use native `<button>`, `<a href>`, and `<dialog>` before reaching for custom ARIA widgets.",
      "Preserve `:focus-visible` outlines, avoid positive `tabindex`, and restore focus when dialogs close.",
      "Use `aria-expanded`, `aria-controls`, `aria-describedby`, and `aria-live='polite'` cleanly.",
    ],
  },
  {
    id: "design-systems",
    title: "Design Tokens & Reusable Components",
    summary: "Primitive -> Semantic -> Component tokens, light/dark themes, and documented component contracts.",
    details: [
      "Separate raw palette values (`--orange-500`) from semantic intent (`--color-action-primary`).",
      "Enforce component states (`disabled`, `loading`, `error`) in logic and attributes, not CSS alone.",
      "Document variants, sizes, states, keyboard behavior, and accessibility guarantees.",
    ],
  },
];

const DESIGN_SYSTEM_CHECKLIST = [
  { id: "d1", label: "Tested across 320px, 375px, 430px, 768px, 1024px, 1440px & 1920px (zero overflow)" },
  { id: "d2", label: "WCAG 2.2 AA contrast verified (4.5:1 text, 3:1 large text & UI borders/focus)" },
  { id: "d3", label: "Full keyboard operability (Tab, Shift+Tab, Enter, Space, Escape, zero keyboard traps)" },
  { id: "d4", label: "Native <dialog> focus entry, Escape dismissal, and focus restoration verified" },
  { id: "d5", label: "Primitive, semantic & component design tokens supporting light + dark themes" },
  { id: "d6", label: "Reusable Button, Navbar, Card, Dialog, FormField, Alert & Accordion documented" },
];

const ACCESSIBLE_PATTERN_SNIPPET = `function FormField({ id, label, type = "text", error, ...props }) {
  const errorId = \`\${id}-error\`;
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <p id={errorId} className="form-field__error">
          {error}
        </p>
      )}
    </div>
  );
}`;

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "How should responsive breakpoints be chosen in a modern frontend interface?",
    options: [
      "Only using fixed device widths like 320px and 768px regardless of content",
      "Based on where the actual content and layout stop working comfortably (content-driven breakpoints)",
      "By hiding navigation links on mobile without an accessible alternative",
      "By setting fixed pixel widths on every container",
    ],
    correctIndex: 1,
    explanation: "Content-driven breakpoints adapt the layout whenever the actual content requires more or less room.",
  },
  {
    id: 2,
    question: "What is the WCAG 2.2 Level AA minimum contrast ratio for normal text vs. large text and non-text UI components?",
    options: [
      "2:1 for normal text; 1.5:1 for large text",
      "4.5:1 for normal text; 3:1 for large text and relevant UI components/graphical objects",
      "7:1 for all elements",
      "Contrast ratios only apply to dark mode",
    ],
    correctIndex: 1,
    explanation: "WCAG 2.2 Level AA requires 4.5:1 for normal text and 3:1 for large text and relevant non-text UI components.",
  },
  {
    id: 3,
    question: "Under WCAG 2.2, what are the Target Size minimums for Level AA vs. Level AAA?",
    options: [
      "12x12px for AA; 24x24px for AAA",
      "24x24 CSS pixels for Level AA (with defined exceptions); 44x44 CSS pixels for enhanced Level AAA",
      "44x44px is forbidden in Level AA",
      "Target size only applies to desktop mouse pointers",
    ],
    correctIndex: 1,
    explanation: "WCAG 2.2 Level AA specifies 24x24 CSS px minimum target size (with exceptions), while 44x44 CSS px is the enhanced Level AAA criterion.",
  },
  {
    id: 4,
    question: "Why is `@media (hover: hover) and (pointer: fine)` useful, and why should hover never be the ONLY way to reveal an action?",
    options: [
      "Because touch devices may lack hover and keyboard users need explicit interactive controls such as buttons",
      "Because CSS animations disable hover on desktop",
      "Because hover disables `aria-expanded`",
      "Because fine pointers cannot click buttons",
    ],
    correctIndex: 0,
    explanation: "Hover is an enhancement for fine-pointer devices; essential actions must remain reachable via explicit touch and keyboard controls.",
  },
  {
    id: 5,
    question: "How does a CSS Container Query (`@container`) solve a problem that a viewport `@media` query cannot?",
    options: [
      "It lets a reusable component adapt to the size of its own parent container (e.g., narrow sidebar vs. wide main column) regardless of viewport width",
      "It replaces the need for HTML semantic tags",
      "It forces `100vh` on mobile",
      "It bypasses WCAG reflow rules",
    ],
    correctIndex: 0,
    explanation: "Container queries respond to the inline size of a component's query container rather than the entire browser viewport.",
  },
  {
    id: 6,
    question: "What is the difference between `tabindex=\"0\"`, `tabindex=\"-1\"`, and positive `tabindex` values?",
    options: [
      "`0` puts an element in sequential Tab order; `-1` allows programmatic focus only; positive values create an artificial order and should be avoided",
      "`-1` makes an element permanently invisible",
      "Positive `tabindex` is required on every `<button>`",
      "`0` disables keyboard focus",
    ],
    correctIndex: 0,
    explanation: "Sequential Tab order should follow logical DOM order (`0` when needed on custom widgets, `-1` for programmatic focus targets like headings/dialogs).",
  },
  {
    id: 7,
    question: "What should happen when a modal `<dialog>` opens and then closes?",
    options: [
      "Focus stays on the background page while the dialog is open",
      "Focus moves into the dialog, background content is inert/non-interactable, Escape dismisses where appropriate, and focus returns to the triggering control on close",
      "The page reloads automatically",
      "All buttons inside the dialog get `aria-hidden=\"true\"`",
    ],
    correctIndex: 1,
    explanation: "Accessible modals manage focus entry, prevent background interaction, support Escape, and restore focus to the opener.",
  },
  {
    id: 8,
    question: "What is the difference between primitive, semantic, and component design tokens?",
    options: [
      "Primitive tokens hold raw values (`--orange-500`), semantic tokens express purpose (`--color-action-primary`), and component tokens bind to specific UI parts (`--button-primary-background`)",
      "Semantic tokens are only for JavaScript",
      "Primitive tokens cannot use CSS custom properties",
      "Component tokens disable dark mode",
    ],
    correctIndex: 0,
    explanation: "Layering primitive -> semantic -> component tokens keeps themes and design updates centralized and maintainable.",
  },
  {
    id: 9,
    question: "Why should a disabled button use the native `disabled` attribute rather than only changing its CSS opacity?",
    options: [
      "Changing CSS opacity alone does not prevent keyboard or click activation; the native `disabled` attribute enforces the disabled state in logic and semantics",
      "CSS opacity is unsupported in modern browsers",
      "Native `disabled` turns a button into an `<a>` link",
      "Opacity triggers `aria-live=\"polite\"`",
    ],
    correctIndex: 0,
    explanation: "Component state must be enforced in markup/logic, not visually faked with CSS alone.",
  },
  {
    id: 10,
    question: "Why should `aria-hidden=\"true\"` NEVER be placed on an element that contains focusable interactive controls?",
    options: [
      "It hides the element from the accessibility tree while keyboard users can still focus it, creating a confusing silent focus state",
      "It deletes the element from the DOM",
      "It forces `display: grid`",
      "It breaks `clamp()` typography",
    ],
    correctIndex: 0,
    explanation: "`aria-hidden=\"true\"` should only hide purely decorative content (such as decorative SVG icons), never focusable controls.",
  },
];

export default function FrontendResponsiveUi() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("pillars");
  const [selectedPillar, setSelectedPillar] = useState("responsive");
  const [checkedItems, setCheckedItems] = useState({});
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = DESIGN_SYSTEM_CHECKLIST.filter((c) => checkedItems[c.id]).length;

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
  const activePillar = ENGINEERING_PILLARS.find((p) => p.id === selectedPillar) || ENGINEERING_PILLARS[0];

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#18181b] font-sans">
      <ModuleNav track="frontend-engineering" currentModuleId="responsive-accessibility-ui" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-700">
              Module 04 &middot; Core Module
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              RESPONSIVE ENGINEERING &middot; WCAG 2.2 &middot; KEYBOARD &amp; ARIA &middot; DESIGN SYSTEMS
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 04 &mdash; Responsive Design, Accessibility and UI Engineering
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Engineer production UI systems across devices and interaction methods: mobile-first &amp; adaptive design, media &amp; container queries, WCAG 2.2 accessibility, keyboard focus management, screen readers &amp; ARIA, design tokens, and reusable UI components.
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
              <Accessibility size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {activeTab === "curriculum" ? (
          <FrontendResponsiveUiSections />
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
                1. UI &amp; WCAG 2.2 Explorer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("checklist")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "checklist"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Design System Audit Checklist
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("pattern")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "pattern"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Accessible FormField Pattern
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
                    Responsive, Accessibility &amp; UI System Pillars
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {ENGINEERING_PILLARS.map((pillar) => (
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
                    {activePillar.title} &mdash; Engineering Standards
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
                      Responsive Design System &amp; WCAG 2.2 Checklist
                    </h2>
                  </div>
                  <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-bold text-stone-700">
                    {completedCount} / {DESIGN_SYSTEM_CHECKLIST.length} Completed
                  </span>
                </div>

                <div className="space-y-3">
                  {DESIGN_SYSTEM_CHECKLIST.map((item) => {
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

            {activeWorkbenchTab === "pattern" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    Reusable Accessible FormField Component
                  </h2>
                </div>
                <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre leading-relaxed">{ACCESSIBLE_PATTERN_SNIPPET}</pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Module 04 Knowledge Assessment
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
            onClick={() => navigate("/learning/frontend-engineering/css-engineering-layout")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 3 &mdash; CSS Engineering &amp; Modern Layout Systems</span>
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
