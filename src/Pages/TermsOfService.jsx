import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Componets/Logo";
import { useAuth } from "../context/AuthContext";
import {
  FileText,
  ShieldAlert,
  BookOpen,
  Award,
  Sparkles,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  HelpCircle,
  Scale,
} from "lucide-react";

export default function TermsOfService() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1c1917] flex flex-col font-sans selection:bg-[#f97316] selection:text-white antialiased">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-amber-400/[0.03] rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-orange-400/[0.02] rounded-full blur-[160px]" />
      </div>

      {/* Global Navigation Header */}
      <header className="sticky top-0 z-30 border-b border-[#e7e3da] bg-[#f6f4ee]/85 backdrop-blur-xl px-4 sm:px-8 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link to="/" className="cursor-pointer" title="PrepSpaces Home">
              <Logo size="sm" />
            </Link>
            <nav className="hidden md:flex items-center gap-5 text-xs font-semibold text-stone-600">
              <Link to="/learning" className="hover:text-stone-900 transition">
                Curriculum
              </Link>
              <Link to="/privacy-policy" className="hover:text-stone-900 transition">
                Privacy Policy
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-[#18181b] hover:bg-stone-800 text-white px-4 py-2 text-xs font-bold transition shadow-xs cursor-pointer"
              >
                <span>Dashboard</span>
                <ArrowRight size={13} />
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-xl border border-stone-200 bg-white/80 hover:bg-white text-stone-700 px-3.5 py-1.5 text-xs font-bold transition shadow-2xs cursor-pointer"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white px-4 py-1.5 text-xs font-bold transition shadow-xs cursor-pointer"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
          <Link to="/" className="hover:text-[#ea580c] transition flex items-center gap-1">
            <ArrowLeft size={12} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-stone-800 font-semibold">Terms of Service</span>
        </div>

        {/* Hero Header Card */}
        <header className="rounded-3xl border border-[#e7e3da] bg-white/85 p-6 sm:p-10 backdrop-blur-xl shadow-xs text-[#18181b]">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-4">
            <Scale size={14} className="text-[#f97316]" />
            <span>LEGAL TERMS & USER AGREEMENT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#18181b]">
            Terms of Service
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-stone-500">
            <span className="flex items-center gap-1">
              <Clock size={13} className="text-stone-400" />
              <span>Effective Date: November 3, 2026</span>
            </span>
            <span>•</span>
            <span>Last Updated: November 3, 2026</span>
            <span>•</span>
            <span>Applies to https://prepspaces.com</span>
          </div>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600 max-w-3xl">
            Please read these Terms of Service carefully before utilizing the PrepSpaces platform, educational courses, systems diagrams, or simulated AI interview rooms. By accessing or using our services, you agree to comply with and be bound by these Terms.
          </p>
        </header>

        {/* Summary Callout Box */}
        <section className="rounded-2xl border border-orange-200 bg-orange-50/70 p-5 sm:p-6 text-xs text-orange-950 space-y-2">
          <div className="font-bold text-sm text-[#ea580c] flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#f97316]" />
            <span>Core Principles at a Glance</span>
          </div>
          <p className="text-stone-700 leading-relaxed">
            PrepSpaces is dedicated to educational self-study and technical interview preparation. Our curriculum is provided for personal, non-commercial learning. While our AI interview simulators provide instant feedback and evaluation metrics, they are educational aids and do not constitute hiring guarantees.
          </p>
        </section>

        {/* Detailed Sections Article */}
        <article className="rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-10 shadow-xs space-y-10 text-stone-700 text-sm leading-relaxed">
          {/* Section 1: Agreement to Terms */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">1.</span>
              <span>Agreement to Terms</span>
            </h2>
            <p>
              By accessing, browsing, or creating an account on <strong>PrepSpaces</strong> (located at <a href="https://prepspaces.com" className="text-[#ea580c] font-medium hover:underline">https://prepspaces.com</a>), you agree to be bound by these Terms of Service, our <Link to="/privacy-policy" className="text-[#ea580c] underline">Privacy Policy</Link>, and any additional guidelines posted on the site. If you do not agree to these terms, you must discontinue use immediately.
            </p>
          </section>

          {/* Section 2: Student Accounts & Responsibilities */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">2.</span>
              <span>Student Accounts & Security</span>
            </h2>
            <p>
              To access personalized progress synchronization and technical interview tracking, you may optionally create a student account via email or Google Sign-In.
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1 text-stone-600 text-xs sm:text-sm">
              <li><strong>Account Accuracy:</strong> You agree to provide accurate and current registration details.</li>
              <li><strong>Credential Security:</strong> You are responsible for safeguarding your session tokens and credentials. You must notify us immediately of any unauthorized access to your account.</li>
              <li><strong>One Individual per Account:</strong> Accounts are granted for individual student use and may not be shared, rented, or transferred to third parties.</li>
            </ul>
          </section>

          {/* Section 3: Educational Content & License */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">3.</span>
              <span>Educational Content & Permitted Use</span>
            </h2>
            <p>
              PrepSpaces grants you a limited, non-exclusive, non-transferable, revocable license to access and complete our educational modules (covering Operating Systems, Computer Networks, Cybersecurity, DevOps, System Design, and Cloud Computing) solely for your personal, non-commercial learning and interview preparation.
            </p>
            <p>
              All curriculum text, illustrations, terminal simulations, interactive calculators, and quizzes are proprietary intellectual property of PrepSpaces or referenced under fair educational academic standards.
            </p>
          </section>

          {/* Section 4: AI Technical Interview Simulator Limitations */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">4.</span>
              <span>AI Interview Practice & Feedback Limitations</span>
            </h2>
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-950 space-y-2">
              <div className="font-bold flex items-center gap-2 text-amber-900">
                <AlertTriangle size={16} className="text-amber-600" />
                <span>Important Educational Disclaimer</span>
              </div>
              <p className="leading-relaxed">
                The PrepSpaces AI Technical Interview Room, verbal feedback, scoring matrices (Clarity, Depth, Systems Architecture), and performance scorecards are <strong>automated educational tools designed for self-assessment only</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1 pl-1 text-amber-900">
                <li>Scores do not guarantee passing grades in real-world software engineering interviews.</li>
                <li>PrepSpaces does not promise or guarantee job offers, employment opportunities, or hiring outcomes.</li>
                <li>AI evaluations may occasionally misinterpret specific verbal accents or novel architectural nuances.</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Prohibited Conduct */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">5.</span>
              <span>Prohibited Activities</span>
            </h2>
            <p>You agree not to engage in any of the following unauthorized activities:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-1 text-stone-600 text-xs sm:text-sm">
              <li><strong>Automated Scraping:</strong> Using bots, spiders, crawlers, or automated scripts to scrape, harvest, or extract our course modules or quiz databases.</li>
              <li><strong>Reverse Engineering:</strong> Decompiling, reverse engineering, or disassembling any software, algorithm, or AI prompting pipelines powering PrepSpaces.</li>
              <li><strong>Infrastructure Tampering:</strong> Attempting to probe, scan, or breach our Cloudflare edge network, inject SQL or malicious payloads, or disrupt platform availability for other students.</li>
              <li><strong>Content Redistribution:</strong> Publishing, reselling, or commercially exploiting PrepSpaces course curricula or assessments without prior written permission.</li>
            </ul>
          </section>

          {/* Section 6: Intellectual Property */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">6.</span>
              <span>Intellectual Property</span>
            </h2>
            <p>
              The PrepSpaces name, logo, custom interactive widgets, source code, and educational content are protected by copyright, trademark, and intellectual property laws. You retain ownership of any original resumes or project materials you upload; by submitting them, you grant PrepSpaces a limited license solely to process and evaluate your interview simulations.
            </p>
          </section>

          {/* Section 7: Service Availability & Modifications */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">7.</span>
              <span>Service Availability & Modifications</span>
            </h2>
            <p>
              We continuously improve our platform and may update course content, add new engineering tracks, or modify system tools at any time. While we aim for 99.9% uptime via Cloudflare's global edge network, PrepSpaces is provided on an <strong>"as-is"</strong> and <strong>"as-available"</strong> basis without warranty of uninterrupted service.
            </p>
          </section>

          {/* Section 8: Termination & Suspension */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">8.</span>
              <span>Termination & Suspension</span>
            </h2>
            <p>
              You may terminate your account at any time by stopping platform usage or submitting an erasure request to <a href="mailto:support@prepspaces.com" className="text-[#ea580c] underline">support@prepspaces.com</a>. PrepSpaces reserves the right to suspend or terminate accounts that breach these Terms or engage in abusive or unauthorized behavior.
            </p>
          </section>

          {/* Section 9: Limitation of Liability */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">9.</span>
              <span>Limitation of Liability</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              To the fullest extent permitted by applicable law, PrepSpaces, its founders, and contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, loss of career opportunities, or interruption of service arising out of or related to your use of PrepSpaces.
            </p>
          </section>

          {/* Section 10: Contact Information */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">10.</span>
              <span>Contact Information</span>
            </h2>
            <p>
              If you have any questions or feedback regarding these Terms of Service:
            </p>
            <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200/80 text-xs sm:text-sm space-y-1.5">
              <p><strong>PrepSpaces Legal & Support Team</strong></p>
              <p>Email: <a href="mailto:support@prepspaces.com" className="text-[#ea580c] font-semibold underline">support@prepspaces.com</a></p>
              <p>Website: <a href="https://prepspaces.com" className="text-[#ea580c] font-semibold underline">https://prepspaces.com</a></p>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-[#e7e3da] bg-white/50 py-8 px-4 sm:px-8 text-xs text-stone-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Logo size="xs" />
            <span>© {new Date().getFullYear()} PrepSpaces. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-5 font-medium">
            <Link to="/privacy-policy" className="hover:text-[#ea580c] transition">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-of-service" className="text-stone-800 font-semibold hover:text-[#ea580c] transition">
              Terms of Service
            </Link>
            <span>•</span>
            <a href="mailto:support@prepspaces.com" className="hover:text-[#ea580c] transition">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
