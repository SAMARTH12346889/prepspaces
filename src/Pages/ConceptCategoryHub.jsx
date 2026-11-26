import React from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../Componets/Logo";
import NotFound from "./NotFound";
import {
  CONCEPT_CATEGORIES,
  getConceptCategory,
  getConceptsByCategory,
} from "../data/conceptsIndex";
import { BRAND_INFO } from "../data/seoContent";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Layers, Mic } from "lucide-react";

export default function ConceptCategoryHub() {
  const { category } = useParams();
  const cat = getConceptCategory(category);

  if (!cat) {
    return <NotFound />;
  }

  const concepts = getConceptsByCategory(cat.id);
  const otherCategories = CONCEPT_CATEGORIES.filter((c) => c.id !== cat.id);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1c1917] flex flex-col antialiased font-sans selection:bg-[#f97316] selection:text-white overflow-x-clip">
      <header className="sticky top-0 z-30 border-b border-[#e7e3da] bg-[#f6f4ee]/90 backdrop-blur-xl px-3 sm:px-6 md:px-10 py-3">
        <div className="mx-auto max-w-6xl flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Link
              to="/concepts"
              aria-label="Back to All Concepts"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#e7e3da] bg-white px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition shadow-2xs shrink-0 whitespace-nowrap"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">All Concepts</span>
            </Link>
            <Link to="/" aria-label="PrepSpaces Home" className="shrink-0">
              <Logo size="sm" suffix={cat.shortTitle} />
            </Link>
          </div>

          <nav aria-label="Topic hub navigation" className="flex items-center gap-2 sm:gap-3 text-xs font-semibold shrink-0">
            <Link to={cat.companionCourse.route} className="hidden md:inline text-stone-600 hover:text-[#ea580c] px-2.5 py-1.5">
              Full Course
            </Link>
            <Link
              to="/ai-interview"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-3 sm:px-3.5 py-1.5 sm:py-2 font-bold text-white transition shrink-0 whitespace-nowrap"
            >
              <Mic size={14} className="shrink-0" />
              <span className="sm:hidden">Interview</span>
              <span className="hidden sm:inline">AI Interview</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10 py-8 sm:py-12 space-y-10">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
          <Link to="/" className="font-semibold text-[#ea580c] hover:underline">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/concepts" className="font-semibold text-[#ea580c] hover:underline">Concepts</Link>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-stone-800">{cat.shortTitle}</span>
        </nav>

        <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-10 shadow-2xs space-y-5">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
            <Layers size={13} />
            <span>Topic Hub • {concepts.length} Published Concepts</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#18181b]">
            {cat.title}
          </h1>

          <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-stone-600">
            {cat.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to={cat.companionCourse.route}
              className="inline-flex items-center gap-2 rounded-xl bg-[#18181b] hover:bg-stone-800 px-5 py-2.5 text-xs font-bold text-white transition"
            >
              <BookOpen size={15} />
              <span>Explore {cat.companionCourse.title}</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/ai-interview"
              className="inline-flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-[#faf8f4] hover:border-orange-300 px-5 py-2.5 text-xs font-bold text-stone-800 transition"
            >
              <Mic size={15} className="text-[#ea580c]" />
              <span>Practice {cat.shortTitle} Mock Interview</span>
            </Link>
          </div>
        </section>

        {/* Concept Cluster Cards */}
        <section aria-labelledby="category-concepts-list" className="space-y-4">
          <h2 id="category-concepts-list" className="text-xl sm:text-2xl font-extrabold text-[#18181b]">
            Concepts in {cat.shortTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {concepts.map((c, idx) => (
              <article
                key={c.route}
                className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-2xs flex flex-col justify-between hover:border-orange-300 transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded-full bg-orange-50 border border-orange-200 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase text-[#ea580c]">
                      Concept {String(idx + 1).padStart(2, "0")} • {c.subcategory}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-stone-500">
                      <Clock size={12} />
                      <span>{c.readTime}</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#18181b] leading-snug">
                    <Link to={c.route} className="hover:text-[#ea580c] transition">
                      {c.title}
                    </Link>
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-stone-400 font-mono">{c.difficulty}</span>
                  <Link to={c.route} className="inline-flex items-center gap-1 text-[#ea580c] hover:underline">
                    <span>Open Lesson</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Other Topic Hubs */}
        <section className="space-y-3">
          <h2 className="text-lg font-extrabold text-[#18181b]">Browse Other Engineering Topics</h2>
          <div className="flex flex-wrap gap-2.5">
            {otherCategories.map((other) => (
              <Link
                key={other.id}
                to={other.route}
                className="rounded-xl border border-[#e7e3da] bg-white hover:border-orange-300 px-4 py-2 text-xs font-bold text-stone-700 transition"
              >
                {other.shortTitle}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-[#e7e3da] px-4 sm:px-6 md:px-10 py-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <span>© {new Date().getFullYear()} PrepSpaces • {BRAND_INFO.tagline}</span>
          <div className="flex flex-wrap items-center gap-3 font-medium">
            <Link to="/" className="hover:text-[#ea580c]">Home</Link>
            <Link to="/concepts" className="hover:text-[#ea580c]">Concepts</Link>
            <Link to="/learning" className="hover:text-[#ea580c]">Courses</Link>
            <Link to="/ai-interview" className="hover:text-[#ea580c]">AI Interview</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
