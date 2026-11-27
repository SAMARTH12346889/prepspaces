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
  Rocket,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import FrontendProductionCapstoneSections from "./FrontendProductionCapstoneSections";

const PRODUCTION_PILLARS = [
  {
    id: "builds-quality",
    title: "Bundlers, Vite, Config & Code Quality",
    summary: "Dependency graphs, tree shaking, VITE_ public vs secret env vars, ESLint, Prettier, and Storybook.",
    details: [
      "Vite prefixes (`VITE_`) expose values to browser bundles; never put database passwords or private API keys in frontend config.",
      "Prettier enforces consistent code formatting, while ESLint detects bugs, hook dependency errors, and unused declarations.",
      "Organize large codebases by feature (`features/courses`, `features/auth`, `shared/`) and document shared UI in Storybook.",
    ],
  },
  {
    id: "deploy-cdn-cicd",
    title: "Cloudflare Pages, Vercel, CDN & CI/CD",
    summary: "SPA fallback rewrites, hashed immutable assets, GitHub Actions CI/CD, Sentry monitoring, and rollbacks.",
    details: [
      "Configure SPA fallback/rewrite rules so direct navigation or refresh on nested routes serves `index.html` instead of 404.",
      "Use long-lived immutable caching for content-hashed JS/CSS assets and short/revalidated caching for HTML entry files.",
      "Automate lint, tests, and production builds in CI/CD, monitor errors with source maps, and keep rollback procedures ready.",
    ],
  },
  {
    id: "advanced-arch",
    title: "PWAs, Service Workers, Micro-Frontends & i18n",
    summary: "Web App Manifest, Cache Storage strategies, module boundaries, Intl APIs, RTL, and safe refactoring.",
    details: [
      "Choose Service Worker strategies (Cache First, Network First, Stale-While-Revalidate, Network Only) per resource freshness.",
      "Use modular monoliths by default; adopt Micro-Frontends only when large autonomous teams justify the operational trade-offs.",
      "Format dates, numbers, and currencies with `Intl.DateTimeFormat` / `Intl.NumberFormat` and record team choices in ADRs.",
    ],
  },
  {
    id: "industry-capstone",
    title: "Industry Capstone: Production LMS",
    summary: "End-to-end Planning, Design System, API Sync, A11y, Testing, Performance, SEO, and Live Deployment.",
    details: [
      "Follow the 8-phase workflow from Requirements & Wireframes through Core UI, API Integration, A11y, Testing, and Deployment.",
      "Enforce real authorization on the backend; frontend route guards only improve UX and never secure private data.",
      "Deliver the deployed production app, GitHub repo, architecture/UI/API docs, test/perf/a11y reports, and technical presentation.",
    ],
  },
];

const CAPSTONE_CHECKLIST = [
  { id: "pc1", label: "Phase 1: Requirements, user journeys, wireframes, folder structure, and API contract plan" },
  { id: "pc2", label: "Phase 2: Vite + React + TypeScript setup, routing, design tokens, and environment config" },
  { id: "pc3", label: "Phase 3: Landing page, auth screens, course catalogue, course/module pages, and student dashboard" },
  { id: "pc4", label: "Phase 4: Reusable API service layer, auth session handling, TanStack Query sync, and error states" },
  { id: "pc5", label: "Phase 5: Mobile-first responsive layouts, keyboard navigation, semantic HTML, and WCAG compliance" },
  { id: "pc6", label: "Phase 6: Vitest unit/integration tests, Playwright E2E, Core Web Vitals, and Technical SEO" },
  { id: "pc7", label: "Phase 7: Production deployment (Cloudflare Pages / Vercel), SPA routing, CDN, and error monitoring" },
  { id: "pc8", label: "Phase 8: Final architecture/test/perf/a11y documentation and live technical presentation" },
];

const VITE_PROD_CONFIG_SNIPPET = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    sourcemap: true,
  },
});

// Centralized public configuration (src/config.ts)
export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  environment: import.meta.env.VITE_APP_ENV,
};`;

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Why must private API keys and database secrets never be placed in Vite variables prefixed with VITE_?",
    options: [
      "Vite ignores variables starting with VITE_",
      "VITE_ variables are embedded into client-side JavaScript bundles and can be inspected by any browser user",
      "VITE_ variables only work in CSS files",
      "They disable tree shaking",
    ],
    correctIndex: 1,
    explanation: "In Vite, variables prefixed with `VITE_` are exposed to browser-delivered bundles; private secrets must stay on the backend or protected server environment.",
  },
  {
    id: 2,
    question: "How do ESLint and Prettier differ in a frontend code-quality workflow?",
    options: [
      "Prettier compiles TypeScript, while ESLint deploys to Vercel",
      "ESLint identifies code-quality issues and bugs, while Prettier enforces consistent code formatting",
      "ESLint only formats CSS, while Prettier runs unit tests",
      "They perform the exact same task",
    ],
    correctIndex: 1,
    explanation: "Prettier handles presentation and formatting (indentation, spacing, quotes), whereas ESLint analyzes code for potential bugs, hook rules, and unused declarations.",
  },
  {
    id: 3,
    question: "Why does an SPA hosted on Cloudflare Pages or Vercel require fallback/rewrite routing for nested URLs?",
    options: [
      "To disable HTTPS certificates",
      "So direct browser navigation or refresh on nested client routes serves the SPA entry point instead of a server 404",
      "To prevent JavaScript from loading",
      "To bypass CORS",
    ],
    correctIndex: 1,
    explanation: "Without an SPA fallback rewrite to `index.html`, directly opening `/courses/frontend/react` makes the static host look for a physical file and return 404.",
  },
  {
    id: 4,
    question: "Which caching strategy is best suited for content-hashed JavaScript and CSS bundles (e.g., app.a83f21.js)?",
    options: [
      "no-store on every request",
      "Long-lived immutable caching",
      "Disabling CDN edge caching",
      "Serving only from LocalStorage",
    ],
    correctIndex: 1,
    explanation: "Because content hashes change whenever file contents change, hashed assets can safely use long-lived immutable caching while HTML entries revalidate.",
  },
  {
    id: 5,
    question: "What is the key difference between Continuous Delivery and Continuous Deployment?",
    options: [
      "Continuous Delivery prepares validated releases for manual approval; Continuous Deployment releases validated changes to production automatically",
      "Continuous Deployment skips all automated tests",
      "Continuous Delivery does not use Git",
      "There is no difference",
    ],
    correctIndex: 0,
    explanation: "Continuous Delivery keeps every validated build ready to release with an approval gate, while Continuous Deployment pushes passing builds to production automatically.",
  },
  {
    id: 6,
    question: "In Service Worker caching strategies, how does Stale-While-Revalidate work?",
    options: [
      "It blocks all network requests permanently",
      "It returns cached content immediately while requesting an updated version in the background",
      "It deletes the cache before every fetch",
      "It only works over plain HTTP",
    ],
    correctIndex: 1,
    explanation: "Stale-While-Revalidate serves the cached response immediately for speed while fetching a fresh copy in the background to update the cache.",
  },
  {
    id: 7,
    question: "When is Micro-Frontend architecture typically justified over a modular monolithic frontend?",
    options: [
      "For every small 5-page React project",
      "When large independent teams need separate ownership and deployment lifecycles for distinct frontend domains",
      "To remove the need for shared design tokens",
      "To avoid writing TypeScript",
    ],
    correctIndex: 1,
    explanation: "Micro-frontends add operational and dependency complexity; they are justified mainly when large, independent teams need autonomous release cycles.",
  },
  {
    id: 8,
    question: "Which browser APIs support locale-aware date and number/currency formatting in internationalization (i18n)?",
    options: [
      "localStorage and sessionStorage",
      "Intl.DateTimeFormat and Intl.NumberFormat",
      "XMLHttpRequest and FormData",
      "PerformanceObserver and IntersectionObserver",
    ],
    correctIndex: 1,
    explanation: "The standard `Intl.DateTimeFormat` and `Intl.NumberFormat` browser APIs format dates, numbers, and currencies according to user locale.",
  },
  {
    id: 9,
    question: "What is an Architecture Decision Record (ADR) used for in large frontend teams?",
    options: [
      "Storing database passwords in Git",
      "Documenting the problem, options considered, chosen solution, rationale, and consequences of key technical decisions",
      "Replacing ESLint and Prettier",
      "Generating CSS grid layouts",
    ],
    correctIndex: 1,
    explanation: "ADRs preserve the context and trade-offs behind important architectural choices so growing teams understand why decisions were made.",
  },
  {
    id: 10,
    question: "What is the safest workflow before refactoring an area with high technical debt?",
    options: [
      "Rewrite the entire application from scratch without tests",
      "Verify existing behavior with tests, refactor a small scoped area, re-run tests, and verify behavior",
      "Delete package-lock.json",
      "Disable TypeScript and linting",
    ],
    correctIndex: 1,
    explanation: "Safe refactoring improves internal structure without changing external behavior by establishing tests first and refactoring incrementally.",
  },
];

export default function FrontendProductionCapstone() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("pillars");
  const [selectedPillar, setSelectedPillar] = useState("builds-quality");
  const [checkedItems, setCheckedItems] = useState({});
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = CAPSTONE_CHECKLIST.filter((c) => checkedItems[c.id]).length;

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
    PRODUCTION_PILLARS.find((p) => p.id === selectedPillar) || PRODUCTION_PILLARS[0];

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#18181b] font-sans">
      <ModuleNav track="frontend-engineering" currentModuleId="frontend-production-capstone" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-700">
              Module 14 &middot; Production &amp; Industry Capstone
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              VITE &middot; CI/CD &middot; CLOUDFLARE &amp; VERCEL &middot; PWA &middot; I18N &middot; MONITORING &middot; CAPSTONE LMS
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 14 &mdash; Frontend Production Engineering and Industry Capstone
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Transform frontend applications from development projects into reliable production systems: build pipelines, Vite configuration, environment security, ESLint &amp; Prettier, Storybook, Cloudflare Pages &amp; Vercel deployment, CDN caching, CI/CD, Sentry monitoring, PWAs, Service Workers, Micro-Frontends, i18n, and the Industry Capstone Learning Management Platform.
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
              <Rocket size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {activeTab === "curriculum" ? (
          <FrontendProductionCapstoneSections />
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
                1. Production Engineering Explorer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("checklist")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "checklist"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Industry Capstone 8-Phase Checklist (0/8)
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("vite-config")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "vite-config"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Vite &amp; Env Config Reference
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
                    Production Engineering &amp; Capstone Pillars
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {PRODUCTION_PILLARS.map((pillar) => (
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
                      Industry Capstone 8-Phase Execution Checklist
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-bold text-stone-700">
                      {completedCount} / {CAPSTONE_CHECKLIST.length} Completed
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
                  {CAPSTONE_CHECKLIST.map((item) => {
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

            {activeWorkbenchTab === "vite-config" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    Vite Production Config &amp; Centralized Env Layer
                  </h2>
                </div>
                <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre leading-relaxed">{VITE_PROD_CONFIG_SNIPPET}</pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Module 14 Knowledge Assessment
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
            onClick={() => navigate("/learning/frontend-engineering/frontend-performance-security-seo")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 13 &mdash; Performance, Security &amp; Technical SEO</span>
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
