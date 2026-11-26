import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../Componets/Logo";
import NotFound from "./NotFound";
import {
  getConceptByPath,
  getConceptCategory,
  resolveRelatedConcepts,
} from "../data/conceptsIndex";
import { BRAND_INFO } from "../data/seoContent";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Clock,
  Code2,
  Copy,
  Layers,
  Mic,
} from "lucide-react";

export default function ConceptDetail() {
  const { category, slug } = useParams();
  const cat = getConceptCategory(category);
  const concept = getConceptByPath(category, slug);

  const [copied, setCopied] = useState(false);
  const [openQaIndex, setOpenQaIndex] = useState(0);

  if (!cat || !concept) {
    return <NotFound />;
  }

  const relatedConcepts = resolveRelatedConcepts(concept);

  const handleCopyCode = () => {
    if (!concept.codeExample?.code || typeof navigator === "undefined" || !navigator.clipboard) return;
    navigator.clipboard.writeText(concept.codeExample.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1c1917] flex flex-col antialiased font-sans selection:bg-[#f97316] selection:text-white overflow-x-clip">
      <header className="sticky top-0 z-30 border-b border-[#e7e3da] bg-[#f6f4ee]/90 backdrop-blur-xl px-4 sm:px-6 md:px-10 py-3.5">
        <div className="mx-auto max-w-6xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              to={cat.route}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#e7e3da] bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition shadow-2xs shrink-0"
            >
              <ArrowLeft size={14} />
              <span>{cat.shortTitle}</span>
            </Link>
            <Link to="/concepts" aria-label="PrepSpaces Concepts Library" className="shrink-0">
              <Logo size="sm" suffix="Concept" />
            </Link>
          </div>

          <nav aria-label="Concept lesson navigation" className="flex items-center gap-2 sm:gap-3 text-xs font-semibold">
            <Link
              to={concept.relatedCourse.route}
              className="hidden md:inline-flex items-center gap-1 text-stone-600 hover:text-[#ea580c] px-2.5 py-1.5"
            >
              <BookOpen size={14} />
              <span>Course</span>
            </Link>
            <Link
              to={concept.practiceAction.to}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-3.5 py-2 font-bold text-white transition shrink-0"
            >
              <Mic size={14} />
              <span>Practice AI Interview</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10 py-8 sm:py-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-stone-500">
          <Link to="/" className="font-semibold text-[#ea580c] hover:underline">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/concepts" className="font-semibold text-[#ea580c] hover:underline">Concepts</Link>
          <span aria-hidden="true">/</span>
          <Link to={cat.route} className="font-semibold text-[#ea580c] hover:underline">{cat.shortTitle}</Link>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-stone-800">{concept.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Primary Concept Lesson Column */}
          <article className="lg:col-span-8 rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-9 shadow-2xs space-y-8">
            <header className="space-y-3 border-b border-stone-100 pb-6">
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                <Link
                  to={cat.route}
                  className="rounded-full bg-orange-50 border border-orange-200 px-3 py-0.5 font-mono font-bold uppercase tracking-wider text-[#ea580c] hover:bg-orange-100 transition"
                >
                  {cat.shortTitle}
                </Link>
                <span className="rounded-full bg-stone-100 px-2.5 py-0.5 font-mono font-semibold text-stone-700">
                  {concept.subcategory}
                </span>
                <span className="rounded-full bg-stone-100 px-2.5 py-0.5 font-semibold text-stone-600">
                  {concept.difficulty}
                </span>
                <span className="inline-flex items-center gap-1 text-stone-500">
                  <Clock size={12} />
                  <span>{concept.readTime}</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#18181b] leading-tight">
                {concept.title}
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                {concept.description}
              </p>

              <p className="text-[11px] font-mono text-stone-400">
                Published: {concept.publishedAt} • Last Updated: {concept.updatedAt}
              </p>
            </header>

            {/* Direct Concise Explanation */}
            <section aria-label="Direct concept explanation" className="rounded-2xl border-l-4 border-[#f97316] bg-[#fbf9f4] p-4 sm:p-5">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                Direct Definition
              </h2>
              <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-stone-800 font-medium">
                {concept.directAnswer}
              </p>
            </section>

            {/* Deep Educational Sections */}
            <div className="space-y-7">
              {concept.sections.map((sec) => (
                <section key={sec.heading} className="space-y-3">
                  <h2 className="text-xl font-extrabold text-[#18181b]">{sec.heading}</h2>
                  {sec.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-sm sm:text-[15px] leading-relaxed text-stone-700">
                      {p}
                    </p>
                  ))}
                  {sec.bullets?.length > 0 && (
                    <ul className="space-y-2 rounded-2xl border border-stone-200/80 bg-[#faf8f4] p-4 text-xs sm:text-sm text-stone-700">
                      {sec.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">
                          • {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Practical Code / CLI Demonstration */}
            {concept.codeExample && (
              <section aria-labelledby="code-example-heading" className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h2 id="code-example-heading" className="flex items-center gap-2 text-lg sm:text-xl font-extrabold text-[#18181b]">
                    <Code2 size={18} className="text-[#f97316]" />
                    <span>{concept.codeExample.title}</span>
                  </h2>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:border-orange-300 px-2.5 py-1 text-[11px] font-bold text-stone-700 cursor-pointer"
                  >
                    {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-4 sm:p-5 overflow-x-auto">
                  <div className="mb-2 text-[10px] font-mono uppercase tracking-wider text-stone-400">
                    {concept.codeExample.language}
                  </div>
                  <pre className="text-xs sm:text-[13px] font-mono text-stone-100 leading-relaxed">
                    <code>{concept.codeExample.code}</code>
                  </pre>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {concept.codeExample.explanation}
                </p>
              </section>
            )}

            {/* Common Mistakes */}
            {concept.commonMistakes?.length > 0 && (
              <section aria-labelledby="common-mistakes-heading" className="space-y-3">
                <h2 id="common-mistakes-heading" className="flex items-center gap-2 text-xl font-extrabold text-[#18181b]">
                  <AlertTriangle size={18} className="text-[#f97316]" />
                  <span>Common Mistakes to Avoid</span>
                </h2>
                <div className="space-y-3">
                  {concept.commonMistakes.map((item, idx) => (
                    <div key={idx} className="rounded-2xl border border-stone-200/90 bg-[#faf8f4] p-4 space-y-1.5">
                      <h3 className="text-xs sm:text-sm font-bold text-stone-900">
                        Pitfall {idx + 1}: {item.mistake}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        <strong>Fix:</strong> {item.correction}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Interview Questions & Answers */}
            {concept.interviewQuestions?.length > 0 && (
              <section aria-labelledby="interview-questions-heading" className="space-y-3">
                <h2 id="interview-questions-heading" className="text-xl font-extrabold text-[#18181b]">
                  Interview Questions &amp; Model Answers
                </h2>
                <div className="divide-y divide-stone-200/80 border-t border-b border-stone-200/80">
                  {concept.interviewQuestions.map((qa, idx) => {
                    const isOpen = openQaIndex === idx;
                    return (
                      <div key={qa.question} className="py-3.5">
                        <button
                          type="button"
                          onClick={() => setOpenQaIndex(isOpen ? -1 : idx)}
                          aria-expanded={isOpen}
                          className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                        >
                          <h3 className="text-sm sm:text-base font-bold text-[#18181b]">
                            {qa.question}
                          </h3>
                          <ChevronDown
                            size={17}
                            className={`shrink-0 text-stone-500 transition-transform ${isOpen ? "rotate-180 text-[#ea580c]" : ""}`}
                          />
                        </button>
                        {isOpen && (
                          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-600 pr-4">
                            {qa.answer}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </article>

          {/* Topic Cluster & 3-Layer Sidebar */}
          <aside className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
            {/* Related Course Layer */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-2xs space-y-3">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                <Layers size={13} />
                <span>Connected Curriculum</span>
              </div>
              <h2 className="text-base font-extrabold text-[#18181b]">
                {concept.relatedCourse.title}
              </h2>
              <p className="text-xs text-stone-600 leading-relaxed">
                {concept.relatedCourse.description}
              </p>
              <Link
                to={concept.relatedCourse.route}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#18181b] hover:bg-stone-800 px-4 py-2.5 text-xs font-bold text-white transition"
              >
                <BookOpen size={14} />
                <span>Open Full Course</span>
                <ArrowRight size={13} />
              </Link>

              <div className="pt-3 border-t border-stone-100 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Matching Curriculum Modules
                </h3>
                <ul className="space-y-1.5 text-xs">
                  {concept.relatedModules.map((mod) => (
                    <li key={mod.route}>
                      <Link
                        to={mod.route}
                        className="flex items-center justify-between gap-2 rounded-lg border border-stone-200/80 bg-[#faf8f4] hover:border-orange-300 px-3 py-2 font-semibold text-stone-800 transition"
                      >
                        <span>{mod.title}</span>
                        <ArrowRight size={12} className="shrink-0 text-[#ea580c]" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Practice AI Interview CTA */}
            <div className="rounded-3xl bg-[#18181b] border border-stone-800 p-5 text-white space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-300">
                Hands-On Oral Verification
              </span>
              <h2 className="text-base font-extrabold">{concept.practiceAction.label}</h2>
              <p className="text-xs text-stone-300 leading-relaxed">
                {concept.practiceAction.summary}
              </p>
              <Link
                to={concept.practiceAction.to}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-4 py-2.5 text-xs font-bold text-white transition"
              >
                <Mic size={14} />
                <span>Start Free Practice</span>
              </Link>
            </div>

            {/* Related Concepts Cluster */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-extrabold text-[#18181b]">Related Concepts</h2>
                <Link to={cat.route} className="text-xs font-bold text-[#ea580c] hover:underline">
                  All {cat.shortTitle} &rarr;
                </Link>
              </div>
              <ul className="space-y-2 text-xs">
                {relatedConcepts.map((rel) => (
                  <li key={rel.route}>
                    <Link
                      to={rel.route}
                      className="block rounded-xl border border-stone-200/80 bg-[#faf8f4] hover:border-orange-300 p-3 transition"
                    >
                      <span className="text-[10px] font-mono font-bold uppercase text-[#ea580c]">
                        {rel.category} • {rel.subcategory}
                      </span>
                      <div className="mt-0.5 font-bold text-stone-800 leading-snug">{rel.title}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <footer className="mt-auto border-t border-[#e7e3da] px-4 sm:px-6 md:px-10 py-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <span>© {new Date().getFullYear()} PrepSpaces • {BRAND_INFO.tagline}</span>
          <div className="flex flex-wrap items-center gap-3 font-medium">
            <Link to="/" className="hover:text-[#ea580c]">Home</Link>
            <Link to="/concepts" className="hover:text-[#ea580c]">Concept Library</Link>
            <Link to="/learning" className="hover:text-[#ea580c]">Courses</Link>
            <Link to="/ai-interview" className="hover:text-[#ea580c]">AI Interview</Link>
            <Link to="/guides" className="hover:text-[#ea580c]">Guides</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
