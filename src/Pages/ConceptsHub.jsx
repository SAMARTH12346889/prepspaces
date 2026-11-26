import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Componets/Logo";
import { CONCEPT_CATEGORIES, ALL_CONCEPTS, getConceptsByCategory } from "../data/conceptsIndex";
import { BRAND_INFO } from "../data/seoContent";
import { ArrowLeft, ArrowRight, BookOpen, Layers, Mic, Search } from "lucide-react";

export default function ConceptsHub() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [query, setQuery] = useState("");

  const filteredConcepts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_CONCEPTS.filter((c) => {
      const catMatch = selectedCategory === "all" || c.category === selectedCategory;
      if (!catMatch) return false;
      if (!q) return true;
      return (
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.subcategory.toLowerCase().includes(q) ||
        c.keywords.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, query]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1c1917] flex flex-col antialiased font-sans selection:bg-[#f97316] selection:text-white overflow-x-clip">
      <header className="sticky top-0 z-30 border-b border-[#e7e3da] bg-[#f6f4ee]/90 backdrop-blur-xl px-4 sm:px-6 md:px-10 py-3.5">
        <div className="mx-auto max-w-6xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#e7e3da] bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition shadow-2xs shrink-0"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link to="/" aria-label="PrepSpaces Home" className="shrink-0">
              <Logo size="sm" suffix="Concepts" />
            </Link>
          </div>

          <nav aria-label="Concepts header navigation" className="flex items-center gap-2 sm:gap-3 text-xs font-semibold">
            <Link to="/learning" className="hidden md:inline text-stone-600 hover:text-[#ea580c] px-2.5 py-1.5">
              10 Courses
            </Link>
            <Link to="/guides" className="hidden md:inline text-stone-600 hover:text-[#ea580c] px-2.5 py-1.5">
              Guides
            </Link>
            <Link
              to="/ai-interview"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-3.5 py-2 font-bold text-white transition shrink-0"
            >
              <Mic size={14} />
              <span>AI Interview</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10 py-8 sm:py-12 space-y-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500">
          <Link to="/" className="font-semibold text-[#ea580c] hover:underline">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-stone-800">Concept Knowledge Library</span>
        </nav>

        {/* Hero & 3-Layer Learning Explanation */}
        <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-10 shadow-2xs space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
              <Layers size={13} />
              <span>Layer 3 • Searchable Concept Reference ({ALL_CONCEPTS.length} Topics)</span>
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#18181b]">
              PrepSpaces Concept Knowledge Library
            </h1>
            <p className="mt-3 max-w-3xl text-sm sm:text-base text-stone-600 leading-relaxed">
              Direct, example-driven engineering lessons covering Java, Operating Systems, Computer Networks, Cybersecurity, AI Engineering, Cloud, DevOps &amp; SRE, and System Design—publicly accessible without login and linked directly to full courses, modules, and AI mock interviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
            <Link to="/learning" className="rounded-2xl border border-stone-200/80 bg-[#faf8f4] p-4 hover:border-orange-300 transition">
              <div className="font-mono font-bold text-[#ea580c] uppercase">1. Courses</div>
              <div className="mt-1 font-bold text-sm text-[#18181b]">Complete Learning Tracks</div>
              <p className="mt-1 text-stone-600">Structured university-informed masterclasses across core systems &amp; AI disciplines.</p>
            </Link>
            <Link to="/learning/system-design" className="rounded-2xl border border-stone-200/80 bg-[#faf8f4] p-4 hover:border-orange-300 transition">
              <div className="font-mono font-bold text-[#ea580c] uppercase">2. Modules</div>
              <div className="mt-1 font-bold text-sm text-[#18181b]">Deep Curriculum Units</div>
              <p className="mt-1 text-stone-600">Interactive labs, architecture blueprints, and end-to-end capstones inside every track.</p>
            </Link>
            <div className="rounded-2xl border border-orange-300 bg-orange-50/40 p-4">
              <div className="font-mono font-bold text-[#ea580c] uppercase">3. Concepts (Active)</div>
              <div className="mt-1 font-bold text-sm text-[#18181b]">Focused Technical Lessons</div>
              <p className="mt-1 text-stone-700">Direct explanations, code examples, common mistakes, and interview Q&amp;A per concept.</p>
            </div>
          </div>
        </section>

        {/* Topic Clusters Grid */}
        <section aria-labelledby="topic-clusters-heading" className="space-y-4">
          <h2 id="topic-clusters-heading" className="text-xl sm:text-2xl font-extrabold text-[#18181b]">
            Explore 8 Engineering Topic Hubs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONCEPT_CATEGORIES.map((cat) => {
              const count = getConceptsByCategory(cat.id).length;
              return (
                <Link
                  key={cat.id}
                  to={cat.route}
                  className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-2xs hover:border-orange-300 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="rounded-full bg-orange-50 border border-orange-200 px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#ea580c]">
                        {count} Concepts
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#18181b]">{cat.title}</h3>
                    <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">{cat.overview}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 inline-flex items-center gap-1 text-xs font-bold text-[#ea580c]">
                    <span>Open Topic Hub</span>
                    <ArrowRight size={13} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Search & Filter All Concepts */}
        <section aria-labelledby="browse-concepts-heading" className="space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 id="browse-concepts-heading" className="text-xl sm:text-2xl font-extrabold text-[#18181b]">
              All Published Concepts ({filteredConcepts.length})
            </h2>

            <div className="relative w-full md:w-80">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search JVM, RAG, TCP, SQLi, Raft..."
                aria-label="Search technical concepts"
                className="w-full rounded-xl border border-[#e7e3da] bg-white pl-9 pr-4 py-2 text-xs text-stone-900 placeholder:text-stone-400 focus:border-[#f97316] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter concepts by category">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#18181b] text-white"
                  : "border border-stone-200 bg-white text-stone-700 hover:border-orange-300"
              }`}
            >
              All ({ALL_CONCEPTS.length})
            </button>
            {CONCEPT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#18181b] text-white"
                    : "border border-stone-200 bg-white text-stone-700 hover:border-orange-300"
                }`}
              >
                {cat.shortTitle}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredConcepts.map((c) => (
              <article
                key={c.route}
                className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-2xs flex flex-col justify-between hover:border-orange-300 transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase text-stone-700">
                      {c.category} • {c.difficulty}
                    </span>
                    <span className="text-[11px] text-stone-400">{c.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#18181b] leading-snug">
                    <Link to={c.route} className="hover:text-[#ea580c] transition">
                      {c.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs text-stone-600 leading-relaxed">{c.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold">
                  <Link to={`/concepts/${c.category}`} className="text-stone-500 hover:text-stone-900">
                    {c.subcategory}
                  </Link>
                  <Link to={c.route} className="inline-flex items-center gap-1 text-[#ea580c] hover:underline">
                    <span>Read Concept</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-[#e7e3da] px-4 sm:px-6 md:px-10 py-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <span>© {new Date().getFullYear()} PrepSpaces • {BRAND_INFO.tagline}</span>
          <div className="flex flex-wrap items-center gap-3 font-medium">
            <Link to="/" className="hover:text-[#ea580c]">Home</Link>
            <Link to="/learning" className="hover:text-[#ea580c]">Courses</Link>
            <Link to="/ai-interview" className="hover:text-[#ea580c]">AI Interview</Link>
            <Link to="/guides" className="hover:text-[#ea580c]">Guides</Link>
            <Link to="/about" className="hover:text-[#ea580c]">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
