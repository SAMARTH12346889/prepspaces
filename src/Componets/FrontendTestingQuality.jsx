import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Code2,
  FlaskConical,
  HelpCircle,
  Layers,
  ListChecks,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import FrontendTestingQualitySections from "./FrontendTestingQualitySections";

const TESTING_PILLARS = [
  {
    id: "unit-component",
    title: "Vitest, AAA & React Testing Library",
    summary: "Unit tests for pure logic, boundary conditions, accessible DOM queries, and user-event interactions.",
    details: [
      "Structure tests using Arrange, Act, Assert (AAA) and keep each test isolated from other tests.",
      "Prefer accessible queries (`getByRole`, `getByLabelText`) and `@testing-library/user-event` over fragile selectors.",
      "Test boundary cases (zero, negative, empty, malformed) instead of only happy-path inputs.",
    ],
  },
  {
    id: "hooks-mocking",
    title: "Hooks, Forms & Network Mocking (MSW)",
    summary: "renderHook + act(), Context wrappers, async form states, vi.mock, and MSW network interception.",
    details: [
      "Wrap hook state updates in `act()` and supply Context/QueryClient `wrapper` providers when hooks depend on them.",
      "Use Mock Service Worker (MSW) to intercept HTTP requests at the network layer while exercising real fetch code.",
      "Test 400, 401, 403, 404, 500, network failures, and race conditions alongside 200 OK responses.",
    ],
  },
  {
    id: "e2e-cross-browser",
    title: "Playwright E2E & Cross-Browser Matrix",
    summary: "Real-browser user journeys, web-first assertions, Trace Viewer, and Chromium/Firefox/WebKit testing.",
    details: [
      "Use Playwright's web-first auto-retrying assertions (`expect(locator).toBeVisible()`) instead of arbitrary sleeps.",
      "Run critical journeys across Chromium (Blink), Firefox (Gecko), and WebKit (Safari) plus mobile viewports.",
      "Use Trace Viewer (`trace: \"on-first-retry\"`) to inspect DOM snapshots and network timelines on CI failures.",
    ],
  },
  {
    id: "a11y-visual-ci",
    title: "Accessibility, Visual Regression, Coverage & CI",
    summary: "WCAG POUR + axe-core audits, screenshot baselines, V8 coverage thresholds, and GitHub Actions.",
    details: [
      "Combine automated `@axe-core/playwright` scans with manual keyboard navigation (`Tab`, `Enter`, `Escape`) checks.",
      "Review Playwright screenshot diffs carefully before running `--update-snapshots` so regressions are never hidden.",
      "Gate merges in GitHub Actions with lint, typecheck, unit/coverage thresholds, production build, and Playwright E2E.",
    ],
  },
];

const TESTING_PROJECT_CHECKLIST = [
  { id: "tq1", label: "1. Configure Vitest and React Testing Library (`jsdom`, `setup.ts`, `@testing-library/jest-dom`)" },
  { id: "tq2", label: "2. Create unit tests for calculations, utilities, validations, and boundary conditions" },
  { id: "tq3", label: "3. Create component tests verifying rendering, accessible roles, and conditional UI" },
  { id: "tq4", label: "4. Test custom hooks (`renderHook`, `act`, async `waitFor`, Context wrappers)" },
  { id: "tq5", label: "5. Test forms and user interactions (`userEvent`, validation errors, loading & duplicate submits)" },
  { id: "tq6", label: "6. Configure API mocking (MSW / Vitest `vi.mock` / Playwright `page.route`)" },
  { id: "tq7", label: "7. Create integration tests for search, filtering, API integration, and race conditions" },
  { id: "tq8", label: "8. Configure Playwright (`playwright.config.ts`, `webServer`, HTML & trace reporters)" },
  { id: "tq9", label: "9. Automate end-to-end user journeys (registration, login, courses, progress tracking)" },
  { id: "tq10", label: "10. Configure cross-browser testing across Chromium, Firefox, WebKit, and mobile viewports" },
  { id: "tq11", label: "11. Implement accessibility audits (`@axe-core/playwright`) and keyboard navigation checks" },
  { id: "tq12", label: "12. Implement visual regression tests (`toHaveScreenshot`) for desktop and mobile baselines" },
  { id: "tq13", label: "13. Generate V8 coverage reports (`statements`, `branches`, `functions`, `lines`) with thresholds" },
  { id: "tq14", label: "14. Configure GitHub Actions CI workflow (`.github/workflows/frontend-tests.yml`)" },
];

const CI_WORKFLOW_SNIPPET = `name: Frontend Quality Checks

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v6

      - name: Setup Node.js
        uses: actions/setup-node@v7
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Run lint & unit coverage
        run: |
          npm run lint
          npm run test:coverage

      - name: Build application
        run: npm run build

      - name: Install Playwright browsers & run E2E
        run: |
          npx playwright install --with-deps
          npx playwright test`;

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What does the AAA pattern stand for in structured unit testing?",
    options: [
      "Analyze, Assemble, Archive",
      "Arrange, Act, Assert",
      "Authenticate, Authorize, Audit",
      "Async, Await, Abort",
    ],
    correctIndex: 1,
    explanation: "AAA structures tests into three clear phases: Arrange (setup inputs), Act (execute the code), and Assert (verify the expected result).",
  },
  {
    id: 2,
    question: "What is the key difference between Vitest's toBe() and toEqual() assertions?",
    options: [
      "toBe() is only for async functions",
      "toBe() checks primitive/reference identity, while toEqual() checks deep object equality",
      "toEqual() only works with numbers",
      "There is no difference",
    ],
    correctIndex: 1,
    explanation: "toBe() uses strict identity/primitive equality, whereas toEqual() recursively compares object and array structures.",
  },
  {
    id: 3,
    question: "Which React Testing Library query should generally be preferred first when locating interactive elements?",
    options: [
      "getByTestId()",
      "getByRole() or getByLabelText()",
      "document.querySelector()",
      "getByClassName()",
    ],
    correctIndex: 1,
    explanation: "Accessible queries like getByRole() and getByLabelText() test the UI the same way users and assistive technologies interact with it.",
  },
  {
    id: 4,
    question: "Why is @testing-library/user-event preferred over low-level event dispatch for form interaction tests?",
    options: [
      "It skips React state updates",
      "It simulates realistic browser interaction sequences like typing, focus, and clicks",
      "It automatically deploys to production",
      "It replaces Vitest",
    ],
    correctIndex: 1,
    explanation: "user-event reproduces realistic multi-event browser interactions (focus, keydown, input, keyup, click) rather than firing a single synthetic event.",
  },
  {
    id: 5,
    question: "How does Mock Service Worker (MSW) differ from mocking an imported API module with vi.mock()?",
    options: [
      "MSW intercepts requests at the network level while keeping application fetch logic intact",
      "MSW only works in CSS files",
      "vi.mock() starts a real PostgreSQL database",
      "MSW cannot return error status codes",
    ],
    correctIndex: 0,
    explanation: "MSW intercepts HTTP requests at the network layer so your real fetch/client code, headers, and error handling are exercised during tests.",
  },
  {
    id: 6,
    question: "What does Playwright's Trace Viewer help debug?",
    options: [
      "SQL schema migrations",
      "Test timelines, DOM snapshots, browser state, and network activity for CI failures",
      "CSS minification",
      "NPM package versions",
    ],
    correctIndex: 1,
    explanation: "Playwright Trace Viewer records step-by-step DOM snapshots, console logs, and network requests so you can diagnose flaky or failing E2E tests.",
  },
  {
    id: 7,
    question: "What do the four WCAG POUR principles stand for?",
    options: [
      "Portable, Open, Unified, Reactive",
      "Perceivable, Operable, Understandable, Robust",
      "Private, Optimized, Usable, Responsive",
      "Parsed, Ordered, Updated, Rendered",
    ],
    correctIndex: 1,
    explanation: "WCAG is built on Perceivable, Operable, Understandable, and Robust (POUR) principles.",
  },
  {
    id: 8,
    question: "When should you run `npx playwright test --update-snapshots`?",
    options: [
      "Automatically on every CI failure",
      "Only after reviewing screenshot diffs and confirming the visual change is intentional",
      "To disable accessibility checks",
      "Before installing Playwright",
    ],
    correctIndex: 1,
    explanation: "Blindly updating snapshots hides real visual regressions; only update baselines after verifying an intentional UI change.",
  },
  {
    id: 9,
    question: "Why is 100% line coverage not a guarantee of bug-free code?",
    options: [
      "Coverage tools cannot run on TypeScript",
      "Line coverage shows code was executed, not that edge cases, branches, or assertions were thoroughly verified",
      "100% coverage disables Vitest",
      "Coverage only measures HTML files",
    ],
    correctIndex: 1,
    explanation: "Executing a line does not prove boundary values, error paths, or business requirements were properly asserted.",
  },
  {
    id: 10,
    question: "What is a current limitation when testing Next.js App Router components with Vitest?",
    options: [
      "Vitest cannot test Client Components",
      "Vitest does not yet support testing asynchronous Server Components directly; E2E testing is recommended for them",
      "Vitest cannot run in GitHub Actions",
      "Vitest does not support TypeScript",
    ],
    correctIndex: 1,
    explanation: "Next.js recommends E2E testing (e.g. Playwright) for async Server Components, while synchronous Server Components and Client Components can be unit tested.",
  },
];

export default function FrontendTestingQuality() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("pillars");
  const [selectedPillar, setSelectedPillar] = useState("unit-component");
  const [checkedItems, setCheckedItems] = useState({});
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = TESTING_PROJECT_CHECKLIST.filter((c) => checkedItems[c.id]).length;

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
    TESTING_PILLARS.find((p) => p.id === selectedPillar) || TESTING_PILLARS[0];

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#18181b] font-sans">
      <ModuleNav track="frontend-engineering" currentModuleId="frontend-testing-quality" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-700">
              Module 12 &middot; Advanced Frontend Engineering
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              VITEST &middot; TESTING LIBRARY &middot; MSW &middot; PLAYWRIGHT &middot; AXE-CORE &middot; VISUAL SNAPSHOTS &middot; CI
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 12 &mdash; Frontend Testing and Quality Engineering
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Prove that your frontend works reliably across browsers, devices, and releases: testing pyramid &amp; AAA pattern, Vitest unit tests, React Testing Library component &amp; hook tests, MSW API mocking, Playwright E2E &amp; cross-browser suites, axe-core accessibility audits, visual regression snapshots, coverage thresholds, and GitHub Actions CI.
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
              <FlaskConical size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {activeTab === "curriculum" ? (
          <FrontendTestingQualitySections />
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
                1. Quality Engineering Explorer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("checklist")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "checklist"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Testing Suite Project Checklist (0/14)
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("ci")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "ci"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. GitHub Actions CI Pipeline
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
                    Frontend Testing &amp; Quality Pillars
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {TESTING_PILLARS.map((pillar) => (
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
                      Automated Testing Suite Project Checklist
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-bold text-stone-700">
                      {completedCount} / {TESTING_PROJECT_CHECKLIST.length} Completed
                    </span>
                    <button
                      onClick={() => setCheckedItems({})}
                      className="px-3 py-1 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold cursor-pointer"
                    >
                      Reset checklist
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  {TESTING_PROJECT_CHECKLIST.map((item) => {
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

            {activeWorkbenchTab === "ci" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    .github/workflows/frontend-tests.yml
                  </h2>
                </div>
                <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre leading-relaxed">{CI_WORKFLOW_SNIPPET}</pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Module 12 Knowledge Assessment
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
            onClick={() => navigate("/learning/frontend-engineering/nextjs-architecture")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 11 &mdash; Next.js &amp; Modern Web Application Architecture</span>
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
