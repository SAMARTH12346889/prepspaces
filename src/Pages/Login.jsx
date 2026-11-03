import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "../Componets/Logo";
import { ArrowLeft, Lock, Mail, AlertCircle, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginWithEmail, renderGoogleButton, isAuthenticated, gsiLoaded } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const googleBtnContainerRef = useRef(null);

  // If already logged in, redirect to dashboard or intended route
  useEffect(() => {
    if (isAuthenticated) {
      const target = location.state?.from || "/dashboard";
      navigate(target, { replace: true });
    }
  }, [isAuthenticated, navigate, location.state]);

  // Render Google button once GSI is ready
  useEffect(() => {
    if (gsiLoaded && googleBtnContainerRef.current) {
      renderGoogleButton(googleBtnContainerRef.current, {
        width: 340,
        onSuccess: () => {
          const target = location.state?.from || "/dashboard";
          navigate(target, { replace: true });
        },
        onError: (err) => {
          setError(err.message || "Google sign in failed. Please try again.");
        },
      });
    }
  }, [gsiLoaded, renderGoogleButton, navigate, location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setSubmitting(true);
    try {
      await loginWithEmail(email, password);
      const target = location.state?.from || "/dashboard";
      navigate(target, { replace: true });
    } catch (err) {
      setError(err.message || "Failed to sign in. Please verify your credentials.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1c1917] flex flex-col justify-between antialiased font-sans selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-orange-400/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-amber-400/[0.03] rounded-full blur-[150px]" />
      </div>

      {/* Top Bar */}
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-8 py-4 border-b border-[#e7e3da] bg-[#f6f4ee]/80 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <Link to="/" className="cursor-pointer" title="PrepSpaces Home">
            <Logo size="sm" />
          </Link>
        </div>
        <Link
          to="/learning"
          className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#f97316] transition"
        >
          <span>Browse Courses as Guest</span>
          <ArrowRight size={14} />
        </Link>
      </header>

      {/* Main Card */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 my-auto">
        <div className="w-full max-w-md">
          {/* Card Surface */}
          <div className="rounded-3xl border border-[#e7e3da] bg-white/95 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200/80 px-3 py-1 text-[11px] font-bold text-[#ea580c] mb-3">
                <Sparkles size={13} className="text-[#f97316]" />
                <span>STUDENT PORTAL</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#18181b] tracking-tight">
                Welcome back
              </h1>
              <p className="text-xs sm:text-sm text-stone-500 mt-1.5 leading-relaxed">
                Sign in to save your course progress across devices and track your learning.
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-5 flex items-start gap-2.5 rounded-2xl bg-red-50 border border-red-200 p-3.5 text-xs text-red-700">
                <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{error}</span>
              </div>
            )}

            {/* Google Login Section */}
            <div className="space-y-3">
              <div className="flex justify-center min-h-[44px]">
                <div id="google-login-button" ref={googleBtnContainerRef} className="w-full flex justify-center" />
              </div>

              {/* Fallback button if GSI is still initializing */}
              {!gsiLoaded && (
                <button
                  type="button"
                  disabled
                  className="w-full flex items-center justify-center gap-2.5 rounded-full border border-stone-300 bg-white py-2.5 px-4 text-xs font-semibold text-stone-500 shadow-xs opacity-70"
                >
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  <span>Loading Google Sign-In...</span>
                </button>
              )}
            </div>

            {/* Divider */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stone-200" />
              </div>
              <span className="relative bg-white px-3 text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                or with email
              </span>
            </div>

            {/* Email / Password Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                    <Mail size={16} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="student@university.edu"
                    className="w-full rounded-2xl border border-stone-200 bg-stone-50/50 pl-10 pr-4 py-2.5 text-xs text-stone-900 placeholder:text-stone-400 focus:bg-white focus:border-[#f97316] focus:ring-2 focus:ring-orange-500/20 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                    Password
                  </label>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                    <Lock size={16} />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-stone-200 bg-stone-50/50 pl-10 pr-4 py-2.5 text-xs text-stone-900 placeholder:text-stone-400 focus:bg-white focus:border-[#f97316] focus:ring-2 focus:ring-orange-500/20 outline-none transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-2 rounded-2xl bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 text-xs tracking-wide shadow-[0_4px_16px_rgba(249,115,22,0.3)] transition active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                {submitting ? "Signing In..." : "Sign In with Email"}
              </button>
            </form>

            {/* Bottom Links */}
            <div className="mt-6 pt-5 border-t border-stone-100 text-center">
              <p className="text-xs text-stone-500">
                Don't have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-bold text-[#ea580c] hover:underline"
                >
                  Create Student Account
                </Link>
              </p>
            </div>
          </div>

          {/* Landing Page Link */}
          <div className="mt-4 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 transition"
            >
              <ArrowLeft size={13} />
              <span>Back to Landing Page</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-4 text-center text-[11px] text-stone-400 border-t border-[#e7e3da]">
        PrepSpaces — AI Technical Interview Preparation & Systems Learning
      </footer>
    </div>
  );
}
