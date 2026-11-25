import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Componets/Logo";
import { INTERVIEW_GUIDES, BRAND_INFO } from "../data/seoContent";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Mic } from "lucide-react";

export default function GuidesHub() {
  const categories = ["All", ...new Set(INTERVIEW_GUIDES.map((g) => g.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleGuides =
    selectedCategory === "All"
      ? INTERVIEW_GUIDES
      : INTERVIEW_GUIDES.filter((g) => g.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1c1917] flex flex-col antialiased font-sans selection:bg-[#f97316] selection:text-white overflow-x-clip">
      <header className="sticky top-0 z-30 border-b border-[#e7e3da] bg-[#f6f4ee]/90 backdrop-blur-xl px-4 sm:px-6 md:px-10 py-3.5">
        <div className="mx-auto max-w-6xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#e7e3da] bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition shadow-2xs"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link to="/" aria-label="PrepSpaces Home">
              <Logo size="sm" suffix="Guides" />
            </Link>
          </div>

          <nav aria-label="Guides navigation" className="flex items-center gap-2 sm:gap-3 text-xs font-semibold">
            <Link to="/learning" className="hidden sm:inline text-stone-600 hover:text-[#ea580c] px-2.5 py-1.5">
              10 Courses
            </Link>
            <Link to="/about" className="hidden sm:inline text-stone-600 hover:text-[#ea580c] px-2.5 py-1.5">
              About
            </Link>
            <Link
              to="/ai-interview"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-3.5 py-2 font-bold text-white transition"
            >
              <Mic size={14} />
              <span>AI Interview Practice</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10 py-8 sm:py-12 space-y-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500">
          <Link to="/" className="font-semibold text-[#ea580c] hover:underline">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-stone-800">Interview Preparation Guides</span>
        </nav>

        <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-10 shadow-2xs">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
            <BookOpen size={13} />
            <span>Topical Playbooks &amp; Interview Frameworks</span>
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#18181b]">
            AI Interview &amp; Technical Preparation Guides
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-stone-600 leading-relaxed">
            Practical, engineering-focused playbooks covering AI mock interview technique, core CS questions for freshers, STAR behavioral structuring, and multi-domain technical interview roadmaps.
          </p>

          <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter guide categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#18181b] text-white"
                    : "border border-stone-200 bg-[#faf8f4] text-stone-700 hover:border-orange-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section aria-label="Published interview guides" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleGuides.map((guide) => (
            <article
              key={guide.slug}
              className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-2xs flex flex-col justify-between hover:border-orange-300 transition"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-orange-50 border border-orange-200 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    {guide.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-stone-500 font-medium">
                    <Clock size={12} />
                    <span>{guide.readTime}</span>
                  </span>
                </div>
                <h2 className="text-lg font-extrabold text-[#18181b] leading-snug">
                  <Link to={guide.route} className="hover:text-[#ea580c] transition">
                    {guide.title}
                  </Link>
                </h2>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-stone-600">
                  {guide.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-400">{guide.publishedDate}</span>
                <Link
                  to={guide.route}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#ea580c] hover:underline"
                >
                  <span>Read Guide</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="mt-auto border-t border-[#e7e3da] px-4 sm:px-6 md:px-10 py-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <span>© {new Date().getFullYear()} PrepSpaces • {BRAND_INFO.tagline}</span>
          <div className="flex flex-wrap items-center gap-3 font-medium">
            <Link to="/" className="hover:text-[#ea580c]">Home</Link>
            <Link to="/ai-interview" className="hover:text-[#ea580c]">AI Interview</Link>
            <Link to="/learning" className="hover:text-[#ea580c]">Curriculum</Link>
            <Link to="/about" className="hover:text-[#ea580c]">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
