import React from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../Componets/Logo";
import NotFound from "./NotFound";
import { getGuideBySlug, INTERVIEW_GUIDES, BRAND_INFO } from "../data/seoContent";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, ExternalLink, Mic } from "lucide-react";

export default function GuideArticle() {
  const { slug } = useParams();
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return <NotFound />;
  }

  const relatedGuides = INTERVIEW_GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1c1917] flex flex-col antialiased font-sans selection:bg-[#f97316] selection:text-white overflow-x-clip">
      <header className="sticky top-0 z-30 border-b border-[#e7e3da] bg-[#f6f4ee]/90 backdrop-blur-xl px-4 sm:px-6 md:px-10 py-3.5">
        <div className="mx-auto max-w-4xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/guides"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#e7e3da] bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition shadow-2xs"
            >
              <ArrowLeft size={14} />
              <span>All Guides</span>
            </Link>
            <Link to="/" aria-label="PrepSpaces Home">
              <Logo size="sm" />
            </Link>
          </div>

          <Link
            to="/ai-interview"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-3.5 py-2 text-xs font-bold text-white transition"
          >
            <Mic size={14} />
            <span>AI Interview Practice</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-10 py-8 sm:py-12 space-y-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
          <Link to="/" className="font-semibold text-[#ea580c] hover:underline">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/guides" className="font-semibold text-[#ea580c] hover:underline">Guides</Link>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-stone-800">{guide.title}</span>
        </nav>

        <article className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-10 shadow-2xs space-y-7">
          <header className="space-y-3 border-b border-stone-100 pb-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                {guide.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-stone-500">
                <Clock size={13} />
                <span>{guide.readTime}</span>
              </span>
              <span className="text-xs font-mono text-stone-400">Updated {guide.publishedDate}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#18181b] leading-tight">
              {guide.title}
            </h1>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              {guide.description}
            </p>
          </header>

          {/* Direct AEO Answer Callout */}
          <section aria-label="Direct summary" className="rounded-2xl border-l-4 border-[#f97316] bg-[#fbf9f4] p-4 sm:p-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
              Quick Answer
            </h2>
            <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-stone-800 font-medium">
              {guide.directAnswer}
            </p>
          </section>

          {/* Key Takeaways */}
          <section className="rounded-2xl border border-stone-200/80 bg-stone-50/70 p-5">
            <h2 className="text-sm font-bold text-[#18181b] uppercase tracking-wider">
              Key Takeaways
            </h2>
            <ul className="mt-3 space-y-2">
              {guide.keyTakeaways.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
                  <CheckCircle2 size={16} className="text-[#f97316] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Main Article Sections */}
          <div className="space-y-6">
            {guide.sections.map((sec) => (
              <section key={sec.heading} className="space-y-2.5">
                <h2 className="text-xl font-extrabold text-[#18181b]">{sec.heading}</h2>
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm sm:text-[15px] leading-relaxed text-stone-700">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Authoritative References */}
          {guide.citations?.length > 0 && (
            <section className="pt-5 border-t border-stone-100">
              <h2 className="text-sm font-bold text-[#18181b] mb-2.5">
                References &amp; Authoritative Sources
              </h2>
              <ul className="space-y-1.5 text-xs">
                {guide.citations.map((c) => (
                  <li key={c.url}>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-[#ea580c] hover:underline"
                    >
                      <span>{c.label}</span>
                      <ExternalLink size={12} />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Action Banner */}
          <div className="rounded-2xl bg-[#18181b] p-5 sm:p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-base sm:text-lg font-extrabold">Put This Strategy Into Live Practice</h2>
              <p className="mt-1 text-xs text-stone-300">
                Run a 7-question spoken AI mock interview on PrepSpaces across 10 engineering courses.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 shrink-0">
              <Link
                to={guide.recommendedTrack.to}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-4 py-2.5 text-xs font-bold text-white transition"
              >
                <span>{guide.recommendedTrack.label}</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to={guide.recommendedTrack.secondaryTo}
                className="inline-flex items-center rounded-xl border border-stone-700 px-4 py-2.5 text-xs font-semibold text-stone-200 hover:bg-stone-800 transition"
              >
                {guide.recommendedTrack.secondaryLabel}
              </Link>
            </div>
          </div>
        </article>

        {/* Related Guides */}
        <section className="space-y-4">
          <h2 className="text-lg font-extrabold text-[#18181b]">More PrepSpaces Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedGuides.map((rel) => (
              <Link
                key={rel.slug}
                to={rel.route}
                className="rounded-2xl border border-[#e7e3da] bg-white p-4 hover:border-orange-300 transition block"
              >
                <span className="text-[10px] font-mono font-bold uppercase text-[#ea580c]">
                  {rel.category}
                </span>
                <h3 className="mt-1 text-sm font-bold text-[#18181b] leading-snug">
                  {rel.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-[#e7e3da] px-4 sm:px-6 md:px-10 py-6">
        <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <span>© {new Date().getFullYear()} PrepSpaces • {BRAND_INFO.tagline}</span>
          <div className="flex flex-wrap items-center gap-3 font-medium">
            <Link to="/" className="hover:text-[#ea580c]">Home</Link>
            <Link to="/ai-interview" className="hover:text-[#ea580c]">AI Interview</Link>
            <Link to="/guides" className="hover:text-[#ea580c]">Guides</Link>
            <Link to="/about" className="hover:text-[#ea580c]">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
