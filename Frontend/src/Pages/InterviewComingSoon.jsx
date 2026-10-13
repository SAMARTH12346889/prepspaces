import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Mic,
  Clock,
  Sparkles,
  ArrowLeft,
  BookOpen,
  ShieldCheck,
  BarChart3,
  ChevronRight,
  MonitorCheck,
} from "lucide-react";
import { useSafeBack } from "../utils/navigation";
import Logo from "../Componets/Logo";

export default function InterviewComingSoon() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/");

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] px-6 py-8 md:px-12 flex flex-col justify-between antialiased selection:bg-[#f97316] selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl w-full flex-1 flex flex-col justify-center my-auto">
        {/* Top Header / Navigation - Perfectly aligned with card margins */}
        <div className="mb-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => goBack("/")}
            className="flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-white/80 px-4 py-2 text-xs font-semibold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs backdrop-blur-md active:scale-95 cursor-pointer"
            aria-label="Back to Overview"
          >
            <ArrowLeft size={16} />
            <span>Back to Overview</span>
          </button>

          <Logo size="sm" suffix="Interview" />
        </div>

        {/* Coming Soon Hero Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#e7e3da] bg-white/90 p-8 sm:p-12 md:p-14 shadow-sm backdrop-blur-xl text-center w-full">
          {/* Decorative ambient badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/90 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-6 backdrop-blur-sm">
            <Clock size={14} className="text-[#f97316] animate-pulse" />
            <span>Module Under Active Refinement • Coming Soon</span>
          </div>

          {/* Central Hero Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white shadow-[0_12px_32px_rgba(249,115,22,0.28)] ring-8 ring-orange-50/80">
            <Mic size={36} />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#18181b]">
            AI Technical Mock Interviews
          </h1>

          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-stone-600">
            We are currently upgrading the real-time spoken interview engine, anti-cheat proctoring defense, and instant rubric scoring system. This feature will launch in an upcoming release!
          </p>

          {/* Features in development preview */}
          <div className="mt-9 grid gap-4 sm:grid-cols-3 text-left">
            <div className="flex flex-col justify-start rounded-2xl border border-[#e7e3da] bg-[#faf8f4]/90 p-5 backdrop-blur-xs transition hover:border-orange-300 hover:bg-white shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#ea580c] mb-3">
                <Mic size={18} />
              </div>
              <h3 className="text-sm font-bold text-[#18181b]">Spoken Practice</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-stone-500">
                Natural back-and-forth verbal dialogue with low-latency Whisper speech capture.
              </p>
            </div>

            <div className="flex flex-col justify-start rounded-2xl border border-[#e7e3da] bg-[#faf8f4]/90 p-5 backdrop-blur-xs transition hover:border-orange-300 hover:bg-white shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#ea580c] mb-3">
                <ShieldCheck size={18} />
              </div>
              <h3 className="text-sm font-bold text-[#18181b]">Screen Defense</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-stone-500">
                Realistic proctoring with camera and entire-screen verification.
              </p>
            </div>

            <div className="flex flex-col justify-start rounded-2xl border border-[#e7e3da] bg-[#faf8f4]/90 p-5 backdrop-blur-xs transition hover:border-orange-300 hover:bg-white shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#ea580c] mb-3">
                <BarChart3 size={18} />
              </div>
              <h3 className="text-sm font-bold text-[#18181b]">Hiring Rubric</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-stone-500">
                Comprehensive evaluation covering technical depth, design, and communication.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => navigate("/learning")}
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#f97316] to-[#ea580c] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_4px_16px_rgba(249,115,22,0.3)] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <BookOpen size={16} />
              <span>Explore Study Modules</span>
              <ChevronRight size={16} />
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex items-center gap-2 rounded-2xl border border-[#e7e3da] bg-white px-6 py-3.5 text-xs sm:text-sm font-semibold text-stone-700 hover:border-orange-300 hover:text-[#f97316] hover:bg-stone-50 transition shadow-xs active:scale-95 cursor-pointer"
            >
              <span>Back to Dashboard</span>
            </button>
          </div>
        </div>

        {/* Footer info */}
        <p className="text-center font-mono text-[11px] text-stone-400 mt-6">
          Prepspaces Technical Mock System • Stay tuned for announcements
        </p>
      </div>
    </div>
  );
}
