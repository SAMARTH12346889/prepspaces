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
import FrontendNextjsArchitectureSections from "./FrontendNextjsArchitectureSections";

const NEXTJS_PILLARS = [
  {
    id: "app-router-layouts",
    title: "App Router, Dynamic Params & Layouts",
    summary: "File-based routing, async params/searchParams, nested layouts vs templates, and route groups.",
    details: [
      "Await `params` and `searchParams` in modern App Router dynamic routes and search pages.",
      "Use `layout.tsx` for persistent shared UI (sidebars/navbars); use `template.tsx` when remounting state on navigation is needed.",
      "Organize sections with route groups like `(marketing)` and `(authentication)` without changing URL paths.",
    ],
  },
  {
    id: "rsc-boundary",
    title: "Server vs Client Components & Hydration",
    summary: "RSC Payload, minimizing \"use client\" boundaries, serializable props, and preventing hydration mismatches.",
    details: [
      "Keep pages and data-fetching components as Server Components by default; add `\"use client\"` only to interactive leaves.",
      "Never pass non-serializable values or server secrets across the Server-to-Client boundary.",
      "Avoid reading browser-only APIs (`window`, `localStorage`, live `Date`) during initial render to prevent hydration mismatches.",
    ],
  },
  {
    id: "rendering-caching",
    title: "SSR, SSG, ISR & Cache Components",
    summary: "Choosing request-time vs build-time rendering, generateStaticParams, revalidation, and \"use cache\".",
    details: [
      "Use SSG + `generateStaticParams` for stable public content, and SSR (`cookies()`) for personalized dashboards.",
      "Understand the distinction between the classic `revalidate` model and Next.js 16 `cacheComponents` (`\"use cache\"`, `cacheLife()`).",
      "Never store private user-specific responses inside shared public caches.",
    ],
  },
  {
    id: "seo-prod-ops",
    title: "Streaming, Metadata, Media & Deployment",
    summary: "Suspense + loading.tsx, generateMetadata, next/image & next/font, error.tsx, and production builds.",
    details: [
      "Wrap slow async Server Components in `<Suspense>` or `loading.tsx` so fast shells stream immediately.",
      "Use `generateMetadata()` on the server plus `app/sitemap.ts` and `app/robots.ts` for technical SEO.",
      "Verify `npm run build && npm run start` before deployment; static export disables SSR, ISR, and Server Actions.",
    ],
  },
];

const PLATFORM_PROJECT_CHECKLIST = [
  { id: "nx1", label: "1. Initialize a Next.js TypeScript application (App Router, dependencies, dev scripts)" },
  { id: "nx2", label: "2. Create the application folder architecture (`app/`, `components/`, `lib/`, `types/`, `public/`)" },
  { id: "nx3", label: "3. Build reusable root layout, nested layouts, and `<Link>` navigation" },
  { id: "nx4", label: "4. Implement dynamic routes (`/courses/[slug]`, `/articles/[slug]`, `/categories/[slug]`)" },
  { id: "nx5", label: "5. Connect the reusable data-access layer (`lib/courses.ts`, `lib/articles.ts`)" },
  { id: "nx6", label: "6. Implement static generation (`generateStaticParams`) and request-time rendering where needed" },
  { id: "nx7", label: "7. Configure caching and revalidation (`revalidatePath` / `revalidateTag` or `use cache`)" },
  { id: "nx8", label: "8. Implement streaming and `<Suspense>` boundaries for independently loading sections" },
  { id: "nx9", label: "9. Implement `generateMetadata()`, Open Graph previews, `sitemap.ts`, and `robots.ts`" },
  { id: "nx10", label: "10. Optimize images (`next/image`, `remotePatterns`) and fonts (`next/font`)" },
  { id: "nx11", label: "11. Add `loading.tsx`, `not-found.tsx` (`notFound()`), and Client `error.tsx` boundaries" },
  { id: "nx12", label: "12. Verify production build (`npm run build && npm run start`), env vars, and deployment target" },
];

const DYNAMIC_METADATA_SNIPPET = `import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourse(slug);

  if (!course) {
    return { title: "Course Not Found" };
  }

  return {
    title: \`\${course.title} | PrepSpaces\`,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      type: "article",
    },
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await getCourse(slug);
  if (!course) notFound();

  return <h1>{course.title}</h1>;
}`;

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "In the Next.js App Router, what is the default component type for page.tsx and layout.tsx files?",
    options: [
      "Client Components",
      "Server Components",
      "Web Workers",
      "Static HTML templates only",
    ],
    correctIndex: 1,
    explanation: "Pages and layouts in the App Router are Server Components by default; you add \"use client\" only when browser interactivity or hooks are needed.",
  },
  {
    id: 2,
    question: "Why should you await params in modern Next.js App Router dynamic routes?",
    options: [
      "To convert JSX into CSS",
      "Because route params are asynchronous Promises in current App Router conventions",
      "To disable Server Components",
      "To store params in LocalStorage",
    ],
    correctIndex: 1,
    explanation: "In current Next.js App Router conventions, `params` and `searchParams` are passed as Promises that should be awaited.",
  },
  {
    id: 3,
    question: "What is the key behavioral difference between layout.tsx and template.tsx during navigation?",
    options: [
      "layout.tsx cannot render children",
      "layout.tsx preserves state across navigations, whereas template.tsx creates a new instance",
      "template.tsx runs only on the server",
      "layout.tsx deletes browser cookies",
    ],
    correctIndex: 1,
    explanation: "Layouts persist and preserve state across child route navigations, while templates remount a fresh component instance on navigation.",
  },
  {
    id: 4,
    question: "When is Server-Side Rendering (SSR) preferred over Static Site Generation (SSG)?",
    options: [
      "For company About pages that rarely change",
      "When page content depends on request-specific data such as authenticated cookies or live user state",
      "For static logos and fonts",
      "To eliminate the need for a server",
    ],
    correctIndex: 1,
    explanation: "SSR generates HTML at request time when output depends on cookies, headers, or live personalized data.",
  },
  {
    id: 5,
    question: "What does Incremental Static Regeneration (ISR) enable?",
    options: [
      "Running SQL queries directly inside browser CSS",
      "Updating previously generated static pages without rebuilding the entire application",
      "Replacing all Client Components with iframes",
      "Disabling HTTP caching headers",
    ],
    correctIndex: 1,
    explanation: "ISR refreshes cached static pages via time-based or on-demand revalidation (`revalidatePath` / `revalidateTag`) without a full rebuild.",
  },
  {
    id: 6,
    question: "What is hydration in Next.js?",
    options: [
      "Compressing PNG images into WebP",
      "Attaching React's client-side interactivity and event handlers to server-generated HTML",
      "Writing environment variables to .env.local",
      "Deploying Docker containers to AWS",
    ],
    correctIndex: 1,
    explanation: "Hydration attaches React event listeners and client state to the HTML preview already rendered by the server.",
  },
  {
    id: 7,
    question: "What is the main benefit of combining React Suspense with streaming in Next.js?",
    options: [
      "It automatically fixes SQL syntax errors",
      "It sends available page content progressively while slower async sections show fallbacks",
      "It removes the need for a backend server",
      "It disables Client Components",
    ],
    correctIndex: 1,
    explanation: "Streaming with Suspense or `loading.tsx` lets fast page shells and sections display immediately instead of blocking on the slowest data fetch.",
  },
  {
    id: 8,
    question: "Which Next.js convention generates dynamic SEO metadata per route on the server?",
    options: [
      "useEffect",
      "generateMetadata()",
      "localStorage.setItem()",
      "useState()",
    ],
    correctIndex: 1,
    explanation: "`generateMetadata()` runs on the server and returns a typed `Metadata` object based on route `params` and fetched data.",
  },
  {
    id: 9,
    question: "Why must Next.js error.tsx files include the \"use client\" directive?",
    options: [
      "Error boundaries rely on client-side React error boundary recovery and reset() handlers",
      "Server Components cannot throw errors",
      "error.tsx is only for CSS styling",
      "Next.js blocks TypeScript inside error.tsx",
    ],
    correctIndex: 0,
    explanation: "Route-segment `error.tsx` boundaries are Client Components so React can catch rendering errors and invoke the interactive `reset()` function.",
  },
  {
    id: 10,
    question: "Which Next.js features are NOT supported when using a static export instead of a full Next.js server?",
    options: [
      "HTML and CSS files",
      "Request-time SSR, ISR, and Server Actions",
      "Static pages and public/ assets",
      "TypeScript compilation",
    ],
    correctIndex: 1,
    explanation: "Static export only emits build-time static files, so request-time SSR, ISR, and Server Actions require a full Next.js server/runtime.",
  },
];

export default function FrontendNextjsArchitecture() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("pillars");
  const [selectedPillar, setSelectedPillar] = useState("app-router-layouts");
  const [checkedItems, setCheckedItems] = useState({});
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = PLATFORM_PROJECT_CHECKLIST.filter((c) => checkedItems[c.id]).length;

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
    NEXTJS_PILLARS.find((p) => p.id === selectedPillar) || NEXTJS_PILLARS[0];

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#18181b] font-sans">
      <ModuleNav track="frontend-engineering" currentModuleId="nextjs-architecture" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-700">
              Module 11 &middot; Advanced Frontend Engineering
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              APP ROUTER &middot; SERVER COMPONENTS &middot; SSR/SSG/ISR &middot; STREAMING &middot; METADATA &middot; DEPLOYMENT
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 11 &mdash; Next.js and Modern Web Application Architecture
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Architect production-grade Next.js applications with TypeScript and the App Router: Server vs Client Components, SSR, SSG, ISR, Cache Components, hydration, streaming &amp; Suspense, dynamic Metadata SEO, `next/image` &amp; `next/font`, error/not-found boundaries, and deployment architecture.
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
          <FrontendNextjsArchitectureSections />
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
                1. Next.js Architecture Explorer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("checklist")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "checklist"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Content Platform Project Checklist (0/12)
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("metadata")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "metadata"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Async Dynamic Metadata Pattern
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
                    Next.js App Router Architecture Pillars
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {NEXTJS_PILLARS.map((pillar) => (
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
                      Content-Driven Web Platform Checklist
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-bold text-stone-700">
                      {completedCount} / {PLATFORM_PROJECT_CHECKLIST.length} Completed
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
                  {PLATFORM_PROJECT_CHECKLIST.map((item) => {
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

            {activeWorkbenchTab === "metadata" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    Async Route Params, generateMetadata &amp; notFound()
                  </h2>
                </div>
                <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre leading-relaxed">{DYNAMIC_METADATA_SNIPPET}</pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Module 11 Knowledge Assessment
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
            onClick={() => navigate("/learning/frontend-engineering/frontend-data-engineering")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 10 &mdash; Frontend Data Engineering &amp; API Integration</span>
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
