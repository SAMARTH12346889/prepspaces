import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Componets/Logo";
import { useAuth } from "../context/AuthContext";
import {
  ShieldCheck,
  Lock,
  Eye,
  Server,
  UserCheck,
  FileText,
  Mail,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Sparkles,
  Database,
  Globe,
} from "lucide-react";

export default function PrivacyPolicy() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1c1917] flex flex-col font-sans selection:bg-[#f97316] selection:text-white antialiased">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-orange-400/[0.03] rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-amber-400/[0.02] rounded-full blur-[160px]" />
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
              <Link to="/terms-of-service" className="hover:text-stone-900 transition">
                Terms of Service
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
          <span className="text-stone-800 font-semibold">Privacy Policy</span>
        </div>

        {/* Hero Header Card */}
        <header className="rounded-3xl border border-[#e7e3da] bg-white/85 p-6 sm:p-10 backdrop-blur-xl shadow-xs text-[#18181b]">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-4">
            <ShieldCheck size={14} className="text-[#f97316]" />
            <span>DATA PRIVACY & PROTECTION</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#18181b]">
            Privacy Policy
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
            At PrepSpaces, we believe engineering education should be accessible, empowering, and strictly respectful of student privacy. This Privacy Policy outlines what information we collect, how it is handled across our authentication and learning systems, and the rights you retain over your personal learning records.
          </p>
        </header>

        {/* Quick Highlights Box */}
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 sm:p-6 text-xs text-emerald-950 space-y-2">
          <div className="font-bold text-sm text-emerald-900 flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-600" />
            <span>Key Privacy Commitments</span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1 text-emerald-900 leading-relaxed">
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-emerald-600">✓</span>
              <span><strong>Google Login is Optional:</strong> Browse courses, read modules, and practice without mandatory registration.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-emerald-600">✓</span>
              <span><strong>No Sale of Student Data:</strong> We never sell, rent, or monetize your personal information or resume records.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-emerald-600">✓</span>
              <span><strong>Zero Plaintext Passwords:</strong> Passwords are cryptographically salted and hashed via Web Crypto SHA-256.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-emerald-600">✓</span>
              <span><strong>Right to Erasure:</strong> You can delete your account and all associated progress at any time.</span>
            </li>
          </ul>
        </section>

        {/* Detailed Sections Container */}
        <article className="rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-10 shadow-xs space-y-10 text-stone-700 text-sm leading-relaxed">
          {/* Section 1: Introduction */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">1.</span>
              <span>Introduction & Scope</span>
            </h2>
            <p>
              PrepSpaces (<strong>"PrepSpaces"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>) provides an online software engineering curriculum, interactive systems architecture labs, and simulated AI technical interview practice rooms accessible via <a href="https://prepspaces.com" className="text-[#ea580c] font-medium hover:underline">https://prepspaces.com</a>.
            </p>
            <p>
              This policy governs all users of PrepSpaces—including unauthenticated visitors exploring our public educational catalog as well as registered student scholars synchronizing course mastery records.
            </p>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="space-y-4 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">2.</span>
              <span>Information We Collect</span>
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Globe size={15} className="text-[#ea580c]" />
                  <span>A. Google Authentication Information</span>
                </h3>
                <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                  When you sign in using <strong>Google Identity Services ("Continue with Google")</strong>, Google verifies your identity and securely passes your basic public profile information to our authentication API:
                </p>
                <ul className="mt-2 list-disc list-inside text-xs text-stone-600 space-y-1 pl-1">
                  <li><strong>Full Name & Given Name:</strong> Used to personalize your student dashboard greeting and interview certificates.</li>
                  <li><strong>Email Address:</strong> Used as your unique student account identifier and for critical session recovery.</li>
                  <li><strong>Google Profile Picture URL:</strong> Displayed on your personalized student avatar in the dashboard.</li>
                  <li><strong>Google Unique Identifier (sub):</strong> An opaque token used to verify authentic Google sessions.</li>
                </ul>
                <p className="mt-2 text-[11px] font-medium text-stone-500 italic">
                  Note: PrepSpaces never receives, requests, or stores your Google account password.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Mail size={15} className="text-[#ea580c]" />
                  <span>B. Email & Password Registration Information</span>
                </h3>
                <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                  If you register using an email address and password, we store your full name, email address, and a cryptographically salted SHA-256 password hash. Plaintext passwords are never stored in our databases or logged in transit.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Database size={15} className="text-[#ea580c]" />
                  <span>C. Learning Progress & Quiz Records</span>
                </h3>
                <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                  To provide seamless multi-device continuation, we record your module completion status, quiz submissions, lab checklist states, and last-studied timestamps across our tracks (Operating Systems, Computer Networks, Cybersecurity, DevOps, System Design, and Cloud Computing).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Sparkles size={15} className="text-[#ea580c]" />
                  <span>D. AI Technical Interview Data</span>
                </h3>
                <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                  When practicing in the AI Interview Room:
                </p>
                <ul className="mt-2 list-disc list-inside text-xs text-stone-600 space-y-1 pl-1">
                  <li><strong>Voice & Speech Audio:</strong> Audio captured via your microphone is processed clientside using the Web Speech API / browser speech synthesis to transcribe responses. Voice data is not stored as persistent raw audio on PrepSpaces servers.</li>
                  <li><strong>Scorecards & Feedback:</strong> Transcribed answers are evaluated for conceptual clarity, systems trade-offs, and technical depth, generating a scorecard saved to your student profile.</li>
                  <li><strong>Resume Text (Optional):</strong> If you upload a resume for tailored interview drill generation, the text is processed solely to extract technical competencies and questions.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">3.</span>
              <span>How We Use Your Information</span>
            </h2>
            <p>We process collected student data strictly to fulfill educational and platform operations:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-1 text-stone-600 text-xs sm:text-sm">
              <li><strong>Session Management:</strong> Maintaining your authenticated session via secure cryptographic bearer tokens (<code className="font-mono text-stone-800">pps_...</code>).</li>
              <li><strong>Progress Synchronization:</strong> Synchronizing module completions across your desktop, laptop, and mobile devices via Cloudflare Workers KV.</li>
              <li><strong>Adaptive Interview Evaluations:</strong> Evaluating engineering responses and tailoring difficulty levels to your learning curve.</li>
              <li><strong>Platform Security:</strong> Detecting and mitigating malicious traffic, brute-force login attempts, SQL injections, or automated scrapers.</li>
            </ul>
          </section>

          {/* Section 4: Data Storage & Infrastructure */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">4.</span>
              <span>Infrastructure & Data Storage</span>
            </h2>
            <p>
              PrepSpaces runs on high-reliability, edge-native infrastructure powered by <strong>Cloudflare Workers</strong> and <strong>Cloudflare Workers KV</strong>.
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1 text-stone-600 text-xs sm:text-sm">
              <li><strong>Encryption in Transit:</strong> All communications between your browser, Google Identity Services, and our backend endpoints require TLS 1.3 encryption over HTTPS.</li>
              <li><strong>Edge Security:</strong> Distributed Denial of Service (DDoS) mitigation and strict Cross-Origin Resource Sharing (CORS) policies are enforced at the network edge.</li>
              <li><strong>No Data Monetization:</strong> We do not sell, rent, or lease student information to advertising networks, data brokers, or marketing third parties.</li>
            </ul>
          </section>

          {/* Section 5: Third-Party Service Providers */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">5.</span>
              <span>Third-Party Services</span>
            </h2>
            <p>We partner with trusted enterprise service providers essential to delivering PrepSpaces:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
              <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                <span className="font-bold text-stone-900">Google Identity Services</span>
                <p className="mt-1 text-stone-500">Provides one-tap and popup Google OAuth authentication. Governed by the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#ea580c] underline">Google Privacy Policy</a>.</p>
              </div>
              <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                <span className="font-bold text-stone-900">Cloudflare, Inc.</span>
                <p className="mt-1 text-stone-500">Provides edge compute (Workers), KV database storage, and CDN hosting. Governed by the <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-[#ea580c] underline">Cloudflare Privacy Policy</a>.</p>
              </div>
            </div>
          </section>

          {/* Section 6: Cookies & Local Storage */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">6.</span>
              <span>Cookies & Local Storage</span>
            </h2>
            <p>
              PrepSpaces utilizes standard web storage mechanisms solely for operational functionality:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1 text-stone-600 text-xs sm:text-sm">
              <li><strong>Authentication Tokens (<code className="font-mono text-stone-800">prepspaces_auth_token</code>):</strong> Stored locally to preserve your active login state between browser reloads.</li>
              <li><strong>Local Progress Cache (<code className="font-mono text-stone-800">prepspaces_student_progress_v2</code>):</strong> Allows instant, latency-free offline/online module browsing.</li>
              <li><strong>No Third-Party Tracking Cookies:</strong> We do not embed commercial advertising cookies or cross-site tracking pixels.</li>
            </ul>
          </section>

          {/* Section 7: Student Rights & Data Deletion */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">7.</span>
              <span>Student Privacy Rights & Account Deletion</span>
            </h2>
            <p>
              Regardless of your physical jurisdiction, PrepSpaces respects fundamental digital privacy rights:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1 text-stone-600 text-xs sm:text-sm">
              <li><strong>Right to Access & Inspection:</strong> You may inspect all personal account information, completion percentages, and mock interview reports directly in your Account Settings.</li>
              <li><strong>Right to Erasure (Account Deletion):</strong> You may request complete erasure of your account, authentication records, and learning histories by emailing <a href="mailto:privacy@prepspaces.com" className="text-[#ea580c] font-semibold underline">privacy@prepspaces.com</a>. Requests are fulfilled within 30 days.</li>
              <li><strong>Right to Opt-Out:</strong> Google authentication is completely optional. You can disconnect PrepSpaces access from your Google Account settings at any time via <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-[#ea580c] underline">Google Security Permissions</a>.</li>
            </ul>
          </section>

          {/* Section 8: Children's Privacy */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">8.</span>
              <span>Children's Privacy</span>
            </h2>
            <p>
              PrepSpaces is designed for university engineering students, software professionals, and adult learners preparing for technical interviews. We do not knowingly collect personal information from individuals under 13 years of age. If you believe a child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          {/* Section 9: Updates to this Policy */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">9.</span>
              <span>Updates to this Policy</span>
            </h2>
            <p>
              We may revise this Privacy Policy periodically to reflect enhancements in our architecture or legal compliance requirements. Material changes will be noted by updating the "Last Updated" timestamp at the top of this document. Continued use of PrepSpaces after updates constitutes acknowledgment of the revised policy.
            </p>
          </section>

          {/* Section 10: Contact Us */}
          <section className="space-y-3 pt-4 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-[#ea580c] font-mono text-base">10.</span>
              <span>Contact Us</span>
            </h2>
            <p>
              For privacy-related inquiries, data access requests, or questions regarding our Google OAuth integration:
            </p>
            <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200/80 text-xs sm:text-sm space-y-1.5">
              <p><strong>PrepSpaces Engineering & Privacy Team</strong></p>
              <p>Privacy Email: <a href="mailto:privacy@prepspaces.com" className="text-[#ea580c] font-semibold underline">privacy@prepspaces.com</a></p>
              <p>General Support: <a href="mailto:support@prepspaces.com" className="text-[#ea580c] font-semibold underline">support@prepspaces.com</a></p>
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
            <Link to="/privacy-policy" className="text-stone-800 font-semibold hover:text-[#ea580c] transition">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-of-service" className="hover:text-[#ea580c] transition">
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
