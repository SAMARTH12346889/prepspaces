import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Componets/Logo";
import {
  ABOUT_PAGE,
  AI_INTERVIEW_COURSE_LINKS,
  AUTHORITATIVE_CITATIONS,
  BRAND_INFO,
} from "../data/seoContent";
import { ArrowLeft, ArrowRight, BookOpen, ExternalLink, Mic, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1c1917] flex flex-col antialiased font-sans selection:bg-[#f97316] selection:text-white overflow-x-clip">
      <header className="sticky top-0 z-30 border-b border-[#e7e3da] bg-[#f6f4ee]/90 backdrop-blur-xl px-4 sm:px-6 md:px-10 py-3.5">
        <div className="mx-auto max-w-5xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#e7e3da] bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition shadow-2xs"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link to="/" aria-label="PrepSpaces Home">
              <Logo size="sm" />
            </Link>
          </div>

          <nav aria-label="About navigation" className="flex items-center gap-2 sm:gap-3 text-xs font-semibold">
            <Link to="/ai-interview" className="text-stone-600 hover:text-[#ea580c] px-2.5 py-1.5">
              AI Interview
            </Link>
            <Link to="/guides" className="text-stone-600 hover:text-[#ea580c] px-2.5 py-1.5 hidden sm:inline">
              Guides
            </Link>
            <Link
              to="/learning"
              className="rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-3.5 py-2 font-bold text-white transition"
            >
              Explore Tracks
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-10 py-8 sm:py-12 space-y-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500">
          <Link to="/" className="font-semibold text-[#ea580c] hover:underline">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-stone-800">About PrepSpaces</span>
        </nav>

        <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-10 shadow-2xs">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
            <ShieldCheck size={13} />
            <span>Authoritative Platform Overview</span>
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#18181b]">
            About PrepSpaces: AI Interview Practice &amp; Systems Engineering Education
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-700 border-l-4 border-[#f97316] bg-[#fbf9f4] px-4 py-3.5 rounded-r-xl">
            {ABOUT_PAGE.missionSummary}
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {ABOUT_PAGE.pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
                <h2 className="text-base font-bold text-[#18181b]">{pillar.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-stone-600">{pillar.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Verifiable Platform Profile */}
        <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-2xs">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#18181b]">
            Verified Platform Specifications
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-600">
            Consistent factual profile of the PrepSpaces platform for students, educators, search crawlers, and AI answer engines.
          </p>

          <dl className="mt-5 divide-y divide-stone-200/80 border-t border-b border-stone-200/80">
            {ABOUT_PAGE.platformFacts.map((fact) => (
              <div key={fact.label} className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 text-xs sm:text-sm">
                <dt className="font-bold text-stone-800">{fact.label}</dt>
                <dd className="sm:col-span-2 text-stone-600">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/ai-interview"
              className="inline-flex items-center gap-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-5 py-2.5 text-xs font-bold text-white transition"
            >
              <Mic size={15} />
              <span>AI Interview Practice</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/learning"
              className="inline-flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-white hover:border-orange-300 px-5 py-2.5 text-xs font-bold text-stone-800 transition"
            >
              <BookOpen size={15} />
              <span>View All 10 Engineering Tracks</span>
            </Link>
          </div>
        </section>

        {/* Academic & Technical Source Grounding */}
        <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-2xs">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#18181b]">
            Curriculum Standards &amp; Technical Citations
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-600">
            PrepSpaces lessons and mock interview focus criteria draw upon open university syllabi, internet protocol standards, and recognized security documentation:
          </p>

          <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {AUTHORITATIVE_CITATIONS.map((cite) => (
              <li key={cite.url} className="rounded-2xl border border-stone-200/80 bg-[#faf8f4] p-4">
                <a
                  href={cite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#ea580c] hover:underline"
                >
                  <span>{cite.title}</span>
                  <ExternalLink size={13} />
                </a>
                <p className="mt-1 text-[11px] font-semibold text-stone-500">{cite.publisher}</p>
                <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">{cite.context}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-5 border-t border-stone-100">
            <h3 className="text-sm font-bold text-[#18181b] mb-3">
              Complete List of Supported Tracks ({AI_INTERVIEW_COURSE_LINKS.length} Tracks / {BRAND_INFO.moduleCount} Modules)
            </h3>
            <div className="flex flex-wrap gap-2">
              {AI_INTERVIEW_COURSE_LINKS.map((track) => (
                <Link
                  key={track.id}
                  to={track.route}
                  className="rounded-lg border border-stone-200 bg-stone-50 hover:border-orange-300 px-3 py-1.5 text-xs font-semibold text-stone-700 transition"
                >
                  {track.title} ({track.modules})
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-[#e7e3da] px-4 sm:px-6 md:px-10 py-6">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <span>© {new Date().getFullYear()} PrepSpaces • {BRAND_INFO.email}</span>
          <div className="flex flex-wrap items-center gap-3 font-medium">
            <Link to="/" className="hover:text-[#ea580c]">Home</Link>
            <Link to="/ai-interview" className="hover:text-[#ea580c]">AI Interview</Link>
            <Link to="/guides" className="hover:text-[#ea580c]">Guides</Link>
            <Link to="/privacy-policy" className="hover:text-[#ea580c]">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[#ea580c]">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
