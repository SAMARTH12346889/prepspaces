import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "../Componets/Logo";
import {
  AI_INTERVIEW_PAGE,
  AI_INTERVIEW_COURSE_LINKS,
  AUTHORITATIVE_CITATIONS,
  BRAND_INFO,
} from "../data/seoContent";
import {
  Mic,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  BarChart3,
  Volume2,
  Sparkles,
  User,
  Users,
  Layers,
  ExternalLink,
} from "lucide-react";

export default function AIInterviewLanding() {
  const { isAuthenticated, user } = useAuth();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1c1917] flex flex-col antialiased font-sans selection:bg-[#f97316] selection:text-white overflow-x-clip">
      {/* Subtle Ambient Accent Layer */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/5 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[130px]" />
      </div>

      {/* Top Header */}
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
            <Link to="/" className="flex items-center shrink-0" aria-label="PrepSpaces Home">
              <Logo size="sm" suffix="AI Interview" />
            </Link>
          </div>

          <nav aria-label="Primary sections" className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/learning"
              className="hidden md:inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold text-stone-600 hover:text-[#ea580c] transition"
            >
              <BookOpen size={14} />
              <span>10 Courses</span>
            </Link>
            <Link
              to="/guides"
              className="hidden md:inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold text-stone-600 hover:text-[#ea580c] transition"
            >
              <span>Prep Guides</span>
            </Link>
            <Link
              to="/about"
              className="hidden sm:inline-flex items-center rounded-xl px-3 py-1.5 text-xs font-semibold text-stone-600 hover:text-[#ea580c] transition"
            >
              <span>About</span>
            </Link>
            <Link
              to={isAuthenticated ? "/interview" : "/login"}
              state={isAuthenticated ? undefined : { from: "/interview" }}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-3.5 py-2 text-xs font-bold text-white shadow-xs transition shrink-0"
            >
              <Mic size={14} />
              <span>{isAuthenticated ? "Start Interview" : "Practice Free"}</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10 py-8 sm:py-12 space-y-10 sm:space-y-14">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500">
          <Link to="/" className="font-semibold text-[#ea580c] hover:underline">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-stone-800">AI Interview Practice</span>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-[#18181b] border border-stone-800 p-6 sm:p-10 md:p-12 text-white shadow-[0_14px_45px_rgba(0,0,0,0.1)]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-300 mb-5">
              <Sparkles size={13} className="text-[#f97316]" />
              <span>Live Voice AI Mock Interview Platform</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12] text-white">
              AI Interview Practice Across 10 Engineering Tracks
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-300 max-w-2xl">
              Practice realistic technical mock interviews online for free with PrepSpaces. Speak answers out loud to AI-voiced questions across 216 modules, get transcribed in real time, and receive automated 1–10 rubric ratings with ideal expected answer comparisons.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <Link
                to="/interview"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#f97316] hover:bg-[#ea580c] px-6 py-3.5 text-sm font-bold text-white shadow-[0_6px_22px_rgba(249,115,22,0.35)] transition active:scale-95"
              >
                <Mic size={17} />
                <span>Start Free AI Interview</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-2xl border border-stone-700 bg-stone-800/80 hover:bg-stone-800 px-5 py-3.5 text-sm font-semibold text-stone-100 transition"
              >
                <span>See How It Works</span>
              </a>
              <Link
                to="/learning"
                className="inline-flex items-center gap-2 rounded-2xl border border-stone-700/70 bg-transparent hover:bg-stone-800/60 px-5 py-3.5 text-sm font-semibold text-stone-300 transition"
              >
                <BookOpen size={16} />
                <span>Browse 216 Modules</span>
              </Link>
            </div>

            {isAuthenticated && user?.name && (
              <p className="mt-4 text-xs text-stone-400">
                Signed in as <strong className="text-stone-200">{user.name}</strong> — ready to launch a live 7-question mock interview immediately.
              </p>
            )}
          </div>
        </section>

        {/* Direct AEO Definition Block */}
        <section
          aria-labelledby="what-is-ai-interview"
          className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-2xs"
        >
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
            Platform Overview
          </span>
          <h2 id="what-is-ai-interview" className="mt-1.5 text-xl sm:text-2xl font-extrabold text-[#18181b]">
            What Is PrepSpaces AI Interview Practice?
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-700 border-l-4 border-[#f97316] bg-[#fbf9f4] px-4 py-3.5 rounded-r-xl">
            {AI_INTERVIEW_PAGE.directDefinition}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
              <div className="flex items-center gap-2 text-[#ea580c] font-bold text-xs mb-1.5">
                <Layers size={15} />
                <span>10 Unlocked Tracks</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Practice full-course comprehensive rounds or focus tightly on 1 of {BRAND_INFO.moduleCount} technical modules.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
              <div className="flex items-center gap-2 text-[#ea580c] font-bold text-xs mb-1.5">
                <Volume2 size={15} />
                <span>Spoken Voice + Text</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Questions play aloud on desktop and mobile while staying visible on screen with key focus areas.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
              <div className="flex items-center gap-2 text-[#ea580c] font-bold text-xs mb-1.5">
                <BarChart3 size={15} />
                <span>1–10 Rubric Scoring</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Each spoken answer is graded individually against technical correctness, clarity, and expected concepts.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
              <div className="flex items-center gap-2 text-[#ea580c] font-bold text-xs mb-1.5">
                <ShieldCheck size={15} />
                <span>Real Exam Proctoring</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Camera and mic hardware preflight plus fullscreen awareness build stamina for real hiring interviews.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" aria-labelledby="how-ai-works" className="space-y-5">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
              5-Step Workflow
            </span>
            <h2 id="how-ai-works" className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#18181b]">
              How Online AI Mock Interviews Work on PrepSpaces
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {AI_INTERVIEW_PAGE.howItWorksSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-2xs flex flex-col"
              >
                <span className="inline-flex w-fit rounded-lg bg-orange-50 border border-orange-200 px-2.5 py-0.5 font-mono text-xs font-bold text-[#ea580c]">
                  Step {item.step}
                </span>
                <h3 className="mt-3 text-base font-bold text-[#18181b]">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-stone-600 flex-1">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Who It Is For & Why PrepSpaces */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
              <Users size={15} />
              <span>Who Can Use It</span>
            </div>
            <h2 className="mt-1.5 text-xl sm:text-2xl font-extrabold text-[#18181b]">
              Built for Freshers, Students &amp; Engineers
            </h2>
            <div className="mt-5 space-y-4">
              {AI_INTERVIEW_PAGE.audiences.map((aud) => (
                <div key={aud.title} className="rounded-2xl border border-stone-200/80 bg-[#faf8f4] p-4">
                  <h3 className="text-sm font-bold text-[#18181b]">{aud.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-stone-600">{aud.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
              <CheckCircle2 size={15} />
              <span>Platform Capabilities</span>
            </div>
            <h2 className="mt-1.5 text-xl sm:text-2xl font-extrabold text-[#18181b]">
              What Makes PrepSpaces Different
            </h2>
            <div className="mt-5 space-y-4">
              {AI_INTERVIEW_PAGE.differentiators.map((diff) => (
                <div key={diff.title} className="rounded-2xl border border-stone-200/80 bg-[#faf8f4] p-4">
                  <h3 className="text-sm font-bold text-[#18181b]">{diff.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-stone-600">{diff.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All 10 Unlocked Interview Tracks */}
        <section aria-labelledby="supported-tracks" className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                Curriculum-Linked Practice
              </span>
              <h2 id="supported-tracks" className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#18181b]">
                10 Technical Interview Tracks Unlocked
              </h2>
            </div>
            <Link
              to="/interview"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ea580c] hover:underline"
            >
              <span>Open Interview Course Selector</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AI_INTERVIEW_COURSE_LINKS.map((course) => (
              <div
                key={course.id}
                className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="rounded-full bg-orange-50 border border-orange-200 px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#ea580c]">
                      {course.modules} Modules
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
                      Available
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#18181b]">{course.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-stone-600">{course.summary}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold">
                  <Link to={course.route} className="text-stone-700 hover:text-[#ea580c] transition">
                    Study Curriculum
                  </Link>
                  <Link
                    to="/interview"
                    className="inline-flex items-center gap-1 text-[#ea580c] hover:underline"
                  >
                    <span>Mock Interview</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Frequently Asked Questions (AEO Section) */}
        <section
          aria-labelledby="ai-interview-faq"
          className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-2xs"
        >
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
            Answers &amp; Guidance
          </span>
          <h2 id="ai-interview-faq" className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#18181b]">
            Frequently Asked Questions About AI Interviews
          </h2>

          <div className="mt-6 divide-y divide-stone-200/80 border-t border-stone-200/80">
            {AI_INTERVIEW_PAGE.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={faq.question} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-[#18181b]">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-stone-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#ea580c]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-stone-600 pr-6">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Citations & Related Prep Guides */}
        <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-2xs space-y-5">
          <div>
            <h2 className="text-xl font-extrabold text-[#18181b]">
              Interview Preparation Guides &amp; Technical References
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-stone-600">
              Combine live AI mock sessions with our original engineering preparation guides and public standards referenced across PrepSpaces tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              to="/guides/ai-interview-preparation-guide"
              className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 hover:border-orange-300 transition"
            >
              <h3 className="text-xs font-bold text-[#18181b]">AI Interview Prep Guide</h3>
              <p className="mt-1 text-[11px] text-stone-600">
                Structure spoken technical answers for voice capture and rubric grading.
              </p>
            </Link>
            <Link
              to="/guides/interview-questions-for-freshers"
              className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 hover:border-orange-300 transition"
            >
              <h3 className="text-xs font-bold text-[#18181b]">Questions for Freshers</h3>
              <p className="mt-1 text-[11px] text-stone-600">
                Essential OS, Networking, SQL, and project architecture basics for graduates.
              </p>
            </Link>
            <Link
              to="/guides/hr-and-behavioral-interview-questions"
              className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 hover:border-orange-300 transition"
            >
              <h3 className="text-xs font-bold text-[#18181b]">HR &amp; Behavioral STAR Guide</h3>
              <p className="mt-1 text-[11px] text-stone-600">
                Deliver high-trust behavioral answers within 90–120 seconds.
              </p>
            </Link>
          </div>

          <div className="pt-4 border-t border-stone-100">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-2.5">
              Referenced Public Standards
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {AUTHORITATIVE_CITATIONS.slice(0, 4).map((cite) => (
                <li key={cite.url}>
                  <a
                    href={cite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-[#ea580c] hover:underline"
                  >
                    <span>{cite.title}</span>
                    <ExternalLink size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#e7e3da] bg-[#f6f4ee] px-4 sm:px-6 md:px-10 py-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <Logo size="xs" />
            <span>— {BRAND_INFO.tagline}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 font-medium">
            <Link to="/" className="hover:text-[#ea580c]">Home</Link>
            <Link to="/learning" className="hover:text-[#ea580c]">Curriculum</Link>
            <Link to="/guides" className="hover:text-[#ea580c]">Guides</Link>
            <Link to="/about" className="hover:text-[#ea580c]">About</Link>
            <Link to="/privacy-policy" className="hover:text-[#ea580c]">Privacy</Link>
            <Link to="/terms-of-service" className="hover:text-[#ea580c]">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
