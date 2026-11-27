import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Gauge,
  HelpCircle,
  Layers,
  ListChecks,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import FrontendPerfSecuritySeoSections from "./FrontendPerfSecuritySeoSections";

const PERF_SEC_SEO_PILLARS = [
  {
    id: "critical-path-bundles",
    title: "Critical Rendering Path & Bundles",
    summary: "DOM + CSSOM -> Render Tree -> Layout -> Paint, bundle visualization, tree shaking, and code splitting.",
    details: [
      "Avoid render-blocking scripts in `<head>`; use `defer` or ES modules and minimize layout thrashing.",
      "Inspect production bundles with `rollup-plugin-visualizer`, remove unused dependencies, and split heavy routes/widgets with `React.lazy` or `next/dynamic`.",
      "Do not lazy-load the primary above-the-fold hero image; prioritize LCP assets with `preload` or `fetchpriority=\"high\"`.",
    ],
  },
  {
    id: "cwv-rum-caching",
    title: "Core Web Vitals, Caching & RUM",
    summary: "LCP <= 2.5s, INP <= 200ms, CLS <= 0.1, Cache-Control directives, CDN edge caching, and web-vitals RUM.",
    details: [
      "Use fingerprinted filenames with `Cache-Control: public, max-age=31536000, immutable` for static assets, and `private`/`no-store` for user-specific responses.",
      "Combine synthetic Lighthouse/DevTools profiling with Real User Monitoring (`web-vitals` + `PerformanceObserver`) to catch real-device regressions.",
      "Profile with React DevTools before adding `React.memo`, `useMemo`, or `useCallback`.",
    ],
  },
  {
    id: "frontend-security",
    title: "XSS, CSRF, CSP, Auth & CORS",
    summary: "Browser security boundary, STRIDE threat model, DOMPurify, HttpOnly cookies, BFFs, and npm audit.",
    details: [
      "Never treat frontend UI checks or CORS as authorization; enforce auth and permissions on every backend endpoint.",
      "Store session credentials in `HttpOnly`, `Secure`, `SameSite` cookies (or BFFs) rather than `localStorage`, and sanitize any user HTML with `DOMPurify`.",
      "Roll out Content Security Policy with `Content-Security-Policy-Report-Only` first, use nonces, and never echo `Access-Control-Allow-Origin: *` with credentials.",
    ],
  },
  {
    id: "technical-seo",
    title: "Technical SEO & JavaScript SEO",
    summary: "Crawlability vs indexability, JSON-LD structured data, canonicals, dynamic sitemaps, Open Graph, and SSR/SSG.",
    details: [
      "Never block a page in `robots.txt` if crawlers need to fetch it to read a `noindex` meta directive.",
      "Use `JSON-LD` (`Course`, `Article`, `Organization`, `BreadcrumbList`), absolute canonical URLs, and dynamic XML sitemaps.",
      "Prefer SSR or SSG/ISR for SEO-critical public pages and always render standard crawlable `<a href=\"...\">` links.",
    ],
  },
];

const AUDIT_PROJECT_CHECKLIST = [
  { id: "ps1", label: "1. Record the initial performance baseline (Lighthouse, PageSpeed, initial metrics)" },
  { id: "ps2", label: "2. Analyze production JavaScript bundles for large, duplicate, or unused dependencies" },
  { id: "ps3", label: "3. Implement route-based code splitting and lazy loading for heavy widgets/below-fold images" },
  { id: "ps4", label: "4. Optimize images (WebP/AVIF, srcset/sizes, dimensions), fonts (WOFF2, swap), and assets" },
  { id: "ps5", label: "5. Configure browser caching (`Cache-Control`, fingerprinted assets) and private-response isolation" },
  { id: "ps6", label: "6. Profile and optimize React rendering bottlenecks with React DevTools Profiler" },
  { id: "ps7", label: "7. Measure and improve Core Web Vitals (LCP <= 2.5s, INP <= 200ms, CLS <= 0.1)" },
  { id: "ps8", label: "8. Create a frontend security threat model (STRIDE, assets, trust boundaries)" },
  { id: "ps9", label: "9. Audit and prevent XSS (safe escaping, URL validation, DOMPurify sanitization)" },
  { id: "ps10", label: "10. Review CSRF and session security (SameSite, CSRF tokens, HttpOnly cookies, server validation)" },
  { id: "ps11", label: "11. Configure and test Content Security Policy (Report-Only rollout -> enforced policy)" },
  { id: "ps12", label: "12. Audit CORS policies and scan repo/bundles for exposed secrets or credentials" },
  { id: "ps13", label: "13. Scan and secure dependencies (`npm audit`, committed lockfiles, `npm ci`)" },
  { id: "ps14", label: "14. Audit technical SEO (status codes, crawlability, indexability, canonical URLs)" },
  { id: "ps15", label: "15. Implement JSON-LD structured data, dynamic sitemaps, and `robots.txt`" },
  { id: "ps16", label: "16. Improve semantic HTML structure, heading hierarchy, breadcrumbs, and descriptive alt text" },
  { id: "ps17", label: "17. Run automated and manual accessibility audits (keyboard nav, contrast, labels, focus)" },
  { id: "ps18", label: "18. Prepare the final before-and-after technical audit report with remaining risks" },
];

const CSP_AND_JSONLD_SNIPPET = `// 1. Illustrative Content Security Policy header
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-RANDOM_PER_RESPONSE';
  style-src 'self';
  img-src 'self' https://images.example.com;
  connect-src 'self' https://api.example.com;
  object-src 'none';
  base-uri 'self';
  frame-ancestors 'none';

// 2. Course JSON-LD Structured Data
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Modern React Development",
  "description": "Learn modern React engineering.",
  "provider": {
    "@type": "Organization",
    "name": "PrepSpaces"
  }
}
</script>`;

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What does the browser combine to construct the Render Tree during the Critical Rendering Path?",
    options: [
      "LocalStorage and Cookies",
      "DOM and CSSOM",
      "Service Workers and WebSockets",
      "Sitemap and robots.txt",
    ],
    correctIndex: 1,
    explanation: "The browser parses HTML into the DOM and CSS into the CSSOM, then combines them into the Render Tree before calculating layout and painting.",
  },
  {
    id: 2,
    question: "Why should you avoid adding loading=\"lazy\" to the main above-the-fold hero image?",
    options: [
      "Lazy loading disables image alt text",
      "It can delay the page's Largest Contentful Paint (LCP) element",
      "Browsers cannot decode lazy-loaded JPEG files",
      "It breaks CORS headers",
    ],
    correctIndex: 1,
    explanation: "Deferring the primary above-the-fold hero image delays its discovery and download, hurting Largest Contentful Paint (LCP).",
  },
  {
    id: 3,
    question: "What are the target 'Good' thresholds for Core Web Vitals (LCP, INP, CLS)?",
    options: [
      "LCP <= 5.0 s, INP <= 500 ms, CLS <= 0.5",
      "LCP <= 2.5 s, INP <= 200 ms, CLS <= 0.1",
      "LCP <= 1.0 s, INP <= 50 ms, CLS <= 0.01",
      "LCP <= 4.0 s, INP <= 300 ms, CLS <= 0.25",
    ],
    correctIndex: 1,
    explanation: "Google's Core Web Vitals 'Good' thresholds at the 75th percentile are LCP <= 2.5 s, INP <= 200 ms, and CLS <= 0.1.",
  },
  {
    id: 4,
    question: "What is the key difference between Cache-Control: no-cache and no-store?",
    options: [
      "no-cache deletes browser cookies",
      "no-cache allows storage but requires revalidation before reuse, while no-store forbids storing the response",
      "no-store is only for CSS files",
      "They behave identically",
    ],
    correctIndex: 1,
    explanation: "no-cache permits caching with mandatory server revalidation before reuse, whereas no-store instructs caches not to store the response at all.",
  },
  {
    id: 5,
    question: "When an application genuinely needs to render user-authored HTML via dangerouslySetInnerHTML, what should be used?",
    options: [
      "JSON.stringify()",
      "An updated HTML sanitizer such as DOMPurify",
      "localStorage.getItem()",
      "eval()",
    ],
    correctIndex: 1,
    explanation: "Raw untrusted HTML passed to dangerouslySetInnerHTML creates XSS risks; sanitize it first with an HTML sanitizer like DOMPurify.",
  },
  {
    id: 6,
    question: "What is the primary difference between XSS and CSRF?",
    options: [
      "XSS runs malicious script in the application's origin; CSRF tricks an authenticated browser into sending an unwanted request",
      "CSRF only affects CSS styling",
      "XSS is prevented by robots.txt",
      "They are two names for the same vulnerability",
    ],
    correctIndex: 0,
    explanation: "XSS executes attacker script inside the trusted origin, while CSRF exploits automatically attached credentials to trigger unwanted state-changing requests.",
  },
  {
    id: 7,
    question: "Why is Access-Control-Allow-Origin: * invalid when sending credentialed CORS requests (credentials: \"include\")?",
    options: [
      "Browsers require an explicit allowed origin when Access-Control-Allow-Credentials: true is used",
      "Wildcard origins disable HTTPS",
      "CORS only supports GET requests",
      "Fetch cannot send cookies",
    ],
    correctIndex: 0,
    explanation: "For security, browsers reject wildcard `*` in Access-Control-Allow-Origin when Access-Control-Allow-Credentials is true; the exact origin must be echoed.",
  },
  {
    id: 8,
    question: "Why should you NOT block a page in robots.txt if your goal is to have Google process its noindex directive?",
    options: [
      "robots.txt disables HTTPS",
      "If Googlebot is blocked from crawling the page, it cannot read the page's meta noindex directive",
      "noindex only works in CSS",
      "robots.txt deletes the sitemap",
    ],
    correctIndex: 1,
    explanation: "Crawlers must be allowed to fetch the page (or its HTTP headers) to observe a `noindex` directive; blocking in robots.txt prevents crawling, not necessarily indexing.",
  },
  {
    id: 9,
    question: "Which structured data format does Google generally recommend for describing entities like Course and Article?",
    options: [
      "YAML",
      "JSON-LD",
      "CSV",
      "INI",
    ],
    correctIndex: 1,
    explanation: "Google recommends JSON-LD (`<script type=\"application/ld+json\">`) because it separates Schema.org metadata cleanly from visible HTML.",
  },
  {
    id: 10,
    question: "Why can Pure Client-Side Rendering (CSR) create challenges for Technical SEO?",
    options: [
      "Browsers cannot execute JavaScript",
      "Initial HTML has minimal content, delaying content discovery until JavaScript renders (and some crawlers have limited JS support)",
      "CSR blocks canonical tags",
      "CSR disables HTTP status codes",
    ],
    correctIndex: 1,
    explanation: "With pure CSR, meaningful content depends on a later JS rendering stage; SSR or SSG delivers complete HTML immediately to both users and crawlers.",
  },
];

export default function FrontendPerfSecuritySeo() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("pillars");
  const [selectedPillar, setSelectedPillar] = useState("critical-path-bundles");
  const [checkedItems, setCheckedItems] = useState({});
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = AUDIT_PROJECT_CHECKLIST.filter((c) => checkedItems[c.id]).length;

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
    PERF_SEC_SEO_PILLARS.find((p) => p.id === selectedPillar) || PERF_SEC_SEO_PILLARS[0];

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#18181b] font-sans">
      <ModuleNav track="frontend-engineering" currentModuleId="frontend-performance-security-seo" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-700">
              Module 13 &middot; Advanced Frontend Engineering
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              CORE WEB VITALS &middot; RUM &middot; XSS &amp; CSRF &middot; CSP &middot; CORS &middot; JSON-LD &amp; JS SEO
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 13 &mdash; Frontend Performance, Web Security and Technical SEO
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Master production frontend engineering across 24 lessons: Critical Rendering Path, bundle optimization, code splitting, Core Web Vitals (LCP, INP, CLS), Lighthouse &amp; RUM, STRIDE threat modeling, XSS, CSRF, CSP, HttpOnly sessions, CORS, dependency security, and Technical &amp; JavaScript SEO.
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
              <Gauge size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {activeTab === "curriculum" ? (
          <FrontendPerfSecuritySeoSections />
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
                1. Performance, Security &amp; SEO Explorer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("checklist")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "checklist"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Production Audit Checklist (0/18)
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("csp-seo")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "csp-seo"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. CSP Header &amp; JSON-LD Reference
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
                    Performance, Security &amp; Technical SEO Pillars
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {PERF_SEC_SEO_PILLARS.map((pillar) => (
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
                      Performance, Security &amp; SEO Audit Checklist
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-bold text-stone-700">
                      {completedCount} / {AUDIT_PROJECT_CHECKLIST.length} Completed
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
                  {AUDIT_PROJECT_CHECKLIST.map((item) => {
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

            {activeWorkbenchTab === "csp-seo" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    CSP Header &amp; Course JSON-LD Reference
                  </h2>
                </div>
                <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre leading-relaxed">{CSP_AND_JSONLD_SNIPPET}</pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Module 13 Knowledge Assessment
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
            onClick={() => navigate("/learning/frontend-engineering/frontend-testing-quality")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 12 &mdash; Frontend Testing and Quality Engineering</span>
          </button>

          <button
            onClick={() => navigate("/learning/frontend-engineering/frontend-production-capstone")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <span>Next: Module 14 &mdash; Production Engineering &amp; Capstone</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
