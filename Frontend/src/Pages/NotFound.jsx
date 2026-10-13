import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Componets/Logo";
import { ArrowLeft, BookOpen, Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1c1917] flex flex-col justify-between p-6 sm:p-12 font-sans selection:bg-[#f97316] selection:text-white">
      <header className="flex items-center justify-between max-w-5xl w-full mx-auto">
        <Link to="/" className="inline-block">
          <Logo size="md" />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-stone-900 transition"
        >
          <Home size={14} />
          <span>Home</span>
        </Link>
      </header>

      <main className="max-w-xl w-full mx-auto text-center py-16">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-orange-100 text-[#ea580c] font-black text-2xl font-mono mb-6 shadow-sm">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#18181b] mb-3">
          Page not found
        </h1>
        <p className="text-sm sm:text-base text-stone-600 mb-8 leading-relaxed">
          The curriculum module, resource, or link you requested does not exist or may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f97316] to-[#ea580c] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-sm hover:scale-102 transition"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/learning"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-stone-700 hover:bg-stone-50 transition"
          >
            <BookOpen size={16} />
            <span>Browse Curriculum</span>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200/80 text-left">
          <h2 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
            Popular Learning Tracks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <Link
              to="/learning/system-design"
              className="p-3 rounded-lg bg-white border border-stone-200/60 hover:border-orange-300 font-semibold text-stone-800 transition flex items-center gap-2"
            >
              <Compass size={14} className="text-[#ea580c]" />
              <span>System Design Masterclass</span>
            </Link>
            <Link
              to="/learning/devops/linux"
              className="p-3 rounded-lg bg-white border border-stone-200/60 hover:border-orange-300 font-semibold text-stone-800 transition flex items-center gap-2"
            >
              <Compass size={14} className="text-[#ea580c]" />
              <span>DevOps & SRE Track</span>
            </Link>
            <Link
              to="/learning/cloud"
              className="p-3 rounded-lg bg-white border border-stone-200/60 hover:border-orange-300 font-semibold text-stone-800 transition flex items-center gap-2"
            >
              <Compass size={14} className="text-[#ea580c]" />
              <span>Cloud Computing</span>
            </Link>
            <Link
              to="/learning/oops"
              className="p-3 rounded-lg bg-white border border-stone-200/60 hover:border-orange-300 font-semibold text-stone-800 transition flex items-center gap-2"
            >
              <Compass size={14} className="text-[#ea580c]" />
              <span>OOPS Mastery</span>
            </Link>
          </div>
        </div>
      </main>

      <footer className="text-center text-xs text-stone-400 max-w-5xl w-full mx-auto py-4">
        © {new Date().getFullYear()} PrepSpaces. All rights reserved.
      </footer>
    </div>
  );
}
