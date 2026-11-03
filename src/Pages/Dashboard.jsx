import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  getStudentDashboardProgress,
  getSynchronousInitialProgress,
  PROGRESS_UPDATED_EVENT,
} from "../services/progressService";
import { getLucideIcon } from "../utils/iconMap";
import Logo from "../Componets/Logo";
import {
  Home,
  BookOpen,
  Mic,
  ArrowRight,
  Play,
  CheckCircle2,
  Clock,
  Sparkles,
  Trophy,
  Flame,
  Award,
  Layers,
  LogOut,
  User,
  Sliders,
  Menu,
  X,
  Compass,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, token, isAuthenticated, logout } = useAuth();

  const [dashboardData, setDashboardData] = useState(() => getSynchronousInitialProgress());
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all"); // 'all' | 'in-progress' | 'completed'
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Load progress data from service
  const loadProgress = async () => {
    try {
      const data = await getStudentDashboardProgress(token);
      setDashboardData(data);
    } catch (err) {
      console.error("[Dashboard] Failed to load progress:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProgress();

    // Listen for progress updates emitted anywhere in the app
    const handleUpdate = () => {
      loadProgress();
    };

    window.addEventListener(PROGRESS_UPDATED_EVENT, handleUpdate);
    return () => {
      window.removeEventListener(PROGRESS_UPDATED_EVENT, handleUpdate);
    };
  }, [token]);

  const summary = dashboardData?.summary || {
    totalCourses: 6,
    enrolledCourses: 0,
    completedCourses: 0,
    overallPercentage: 0,
    recentlyStudied: null,
  };

  const allCourses = dashboardData?.courses || [];

  const filteredCourses = allCourses.filter((course) => {
    if (filter === "in-progress") return course.status === "in-progress";
    if (filter === "completed") return course.status === "completed";
    return true;
  });

  const recentlyStudied = summary.recentlyStudied || (allCourses.length > 0 ? allCourses[0] : null);

  const studentDisplayName = user?.name || (isAuthenticated ? "Student" : "Guest Learner");
  const studentEmail = user?.email || "";
  const avatarUrl = user?.picture;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1c1917] flex antialiased font-sans selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-orange-400/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-amber-400/[0.03] rounded-full blur-[150px]" />
        <div className="absolute -bottom-20 left-1/3 w-[600px] h-80 bg-orange-500/[0.03] rounded-full blur-[160px]" />
      </div>

      {/* Mobile Drawer Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* ================= LEFT SIDEBAR ================= */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 flex flex-col justify-between border-r border-[#e7e3da] bg-white/80 backdrop-blur-2xl p-5 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] transition-transform duration-300 md:static md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Brand Logo */}
          <div className="flex items-center justify-between mb-8 px-3">
            <div
              className="flex items-center cursor-pointer py-1"
              onClick={() => navigate("/")}
              title="PrepSpaces Home"
            >
              <Logo size="md" />
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="rounded-lg p-1 text-stone-400 hover:text-stone-900 md:hidden cursor-pointer"
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mb-3 px-3 text-[11px] font-bold tracking-[0.16em] text-stone-400 uppercase">
            Workspace
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <Link
              to="/dashboard"
              onClick={() => setSidebarOpen(false)}
              className="flex w-full items-center gap-3 rounded-2xl bg-[#f97316] px-4 py-3 text-sm font-bold text-white shadow-[0_4px_16px_rgba(249,115,22,0.3)] transition-all hover:bg-[#ea580c] cursor-pointer"
            >
              <Sliders size={18} className="text-white" />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/"
              onClick={() => setSidebarOpen(false)}
              className="flex w-full items-center gap-3 rounded-2xl px-4 py-2.5 text-sm font-semibold text-stone-600 hover:bg-stone-200/50 hover:text-stone-900 transition-all cursor-pointer"
            >
              <Home size={18} className="text-stone-400" />
              <span>Overview</span>
            </Link>

            <Link
              to="/learning"
              onClick={() => setSidebarOpen(false)}
              className="flex w-full items-center gap-3 rounded-2xl px-4 py-2.5 text-sm font-semibold text-stone-600 hover:bg-stone-200/50 hover:text-stone-900 transition-all cursor-pointer"
            >
              <BookOpen size={18} className="text-stone-400" />
              <span>All Courses</span>
            </Link>

            <Link
              to="/interview"
              onClick={() => setSidebarOpen(false)}
              className="flex w-full items-center justify-between rounded-2xl px-4 py-2.5 text-sm font-semibold text-stone-600 hover:bg-stone-200/50 hover:text-stone-900 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <Mic size={18} className="text-stone-400 group-hover:text-stone-600 transition-colors" />
                <span>Interviews</span>
              </div>
              <span className="rounded-full bg-orange-100/80 border border-orange-200/80 px-2 py-0.5 text-[10px] font-bold text-[#ea580c]">
                Coming Soon
              </span>
            </Link>
          </nav>
        </div>

        {/* User Card at bottom of sidebar */}
        <div className="pt-4 border-t border-stone-200/80">
          {isAuthenticated ? (
            <div className="flex items-center justify-between gap-2 p-2 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="flex items-center gap-2.5 min-w-0">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={studentDisplayName}
                    className="w-9 h-9 rounded-full object-cover border border-orange-400 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-xs shrink-0">
                    {studentDisplayName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-xs font-bold text-stone-900 truncate">
                    {studentDisplayName}
                  </p>
                  <p className="text-[10px] text-stone-500 truncate">{studentEmail}</p>
                </div>
              </div>
              <button
                onClick={logout}
                title="Log out"
                className="p-1.5 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                aria-label="Log out"
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <Link
                to="/login"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white border border-stone-300 text-xs font-bold text-stone-700 hover:border-orange-400 hover:text-orange-600 transition shadow-xs"
              >
                <User size={14} />
                <span>Sign In / Register</span>
              </Link>
            </div>
          )}
        </div>
      </aside>

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="flex-1 flex flex-col min-w-0 z-10">
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#e7e3da] bg-[#f6f4ee]/80 px-4 sm:px-6 py-3.5 backdrop-blur-xl md:px-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl border border-[#e7e3da] bg-white/80 p-2 text-stone-600 hover:bg-stone-200/50 md:hidden shadow-2xs cursor-pointer"
              aria-label="Open sidebar"
            >
              <Menu size={20} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-2xl font-black tracking-tight text-[#18181b]">
                  Welcome back, {studentDisplayName}
                </h1>
                {isAuthenticated && (
                  <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                    <CheckCircle2 size={11} className="text-emerald-500" />
                    <span>Cloud Synced</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "short",
                  day: "numeric",
                })}{" "}
                • Track your course progress and technical mastery.
              </p>
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {!isAuthenticated ? (
              <Link
                to="/login"
                className="flex items-center gap-1.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-3.5 py-2 text-xs font-bold text-white shadow-xs transition active:scale-95 cursor-pointer"
              >
                <User size={14} />
                <span>Sign In to Sync</span>
              </Link>
            ) : (
              <button
                onClick={logout}
                className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-white/90 px-3 py-1.5 text-xs font-semibold text-stone-600 hover:text-red-600 hover:border-red-200 transition shadow-2xs cursor-pointer"
              >
                <LogOut size={13} />
                <span className="hidden sm:inline">Log Out</span>
              </button>
            )}
          </div>
        </header>

        {/* Dashboard Main Scrollable Area */}
        <main className="flex-1 px-4 py-5 sm:p-6 md:p-10 space-y-6 sm:space-y-8 max-w-7xl mx-auto w-full">
          {/* Guest Non-Intrusive Sync Banner */}
          {!isAuthenticated && (
            <div className="rounded-2xl border border-orange-200/90 bg-orange-50/70 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-orange-100 text-[#ea580c] shrink-0 mt-0.5">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-stone-900">
                    Studying in Guest Mode
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Your progress is saved locally in this browser. Sign in with Google to sync your course progress seamlessly across your phone, tablet, and laptop.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <Link
                  to="/login"
                  className="w-full sm:w-auto text-center rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-bold px-4 py-2 text-xs shadow-xs transition cursor-pointer"
                >
                  Continue with Google
                </Link>
              </div>
            </div>
          )}

          {/* ================= TOP SECTION: 4 KPI STATS CARDS ================= */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {/* 1. Total Courses Available */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#e7e3da] bg-white/90 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  Total Courses
                </span>
                <div className="p-2 rounded-xl bg-stone-100 text-stone-700">
                  <Layers size={16} />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-stone-900">
                {summary.totalCourses}
              </div>
              <p className="text-[11px] text-stone-500 mt-1">121 Total In-Depth Modules</p>
            </div>

            {/* 2. Courses Enrolled / Started */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#e7e3da] bg-white/90 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  Enrolled Tracks
                </span>
                <div className="p-2 rounded-xl bg-orange-100 text-[#ea580c]">
                  <Flame size={16} />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-stone-900">
                {summary.enrolledCourses}
              </div>
              <p className="text-[11px] text-stone-500 mt-1">Active learning curricula</p>
            </div>

            {/* 3. Courses Completed */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#e7e3da] bg-white/90 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  Completed
                </span>
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                  <Trophy size={16} />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-stone-900">
                {summary.completedCourses}
              </div>
              <p className="text-[11px] text-stone-500 mt-1">Mastered course tracks</p>
            </div>

            {/* 4. Overall Progress */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#e7e3da] bg-white/90 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  Overall Mastery
                </span>
                <div className="p-2 rounded-xl bg-blue-100 text-blue-700">
                  <TrendingUp size={16} />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-stone-900">
                {summary.overallPercentage}%
              </div>
              {/* Mini progress bar */}
              <div className="w-full bg-stone-100 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-[#f97316] h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${Math.max(summary.overallPercentage, 2)}%` }}
                />
              </div>
            </div>
          </section>

          {/* ================= CONTINUE LEARNING (HERO RESUME CARD) ================= */}
          {recentlyStudied && (
            <section className="relative overflow-hidden rounded-3xl bg-[#18181b] border border-stone-800 p-6 sm:p-8 text-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              {/* Background ambient accents */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full border border-orange-500/10 bg-orange-500/[0.04] blur-2xl" />
              <div className="pointer-events-none absolute right-12 top-6 h-60 w-60 rounded-full border border-white/10" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-400 mb-3">
                    <Clock size={12} />
                    <span>CONTINUE LEARNING</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                    {recentlyStudied.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                    {recentlyStudied.currentModuleName ? (
                      <>
                        Last studied:{" "}
                        <span className="text-orange-400 font-semibold">
                          {recentlyStudied.currentModuleName}
                        </span>
                      </>
                    ) : (
                      recentlyStudied.tagline
                    )}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <div className="w-48 sm:w-64 bg-stone-800 h-2.5 rounded-full overflow-hidden border border-stone-700">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-amber-500 h-full rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${Math.max(recentlyStudied.progressPercentage, 4)}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-stone-300">
                      {recentlyStudied.progressPercentage}% Complete • {recentlyStudied.completedModules} /{" "}
                      {recentlyStudied.totalModules} Modules
                    </span>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="shrink-0">
                  <button
                    onClick={() => navigate(recentlyStudied.currentModuleRoute || recentlyStudied.route)}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3.5 text-sm font-bold shadow-[0_4px_20px_rgba(249,115,22,0.4)] transition active:scale-95 cursor-pointer"
                  >
                    <Play size={16} fill="currentColor" />
                    <span>Resume Learning</span>
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* ================= YOUR LEARNING PROGRESS SECTION ================= */}
          <section className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-stone-200">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-stone-900 tracking-tight">
                  Your Learning Progress
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  Track your module completion and resume lessons directly.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="inline-flex items-center p-1 rounded-xl bg-stone-200/70 text-xs font-bold text-stone-600 self-start sm:self-auto">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                    filter === "all" ? "bg-white text-stone-900 shadow-xs" : "hover:text-stone-900"
                  }`}
                >
                  All Courses ({allCourses.length})
                </button>
                <button
                  onClick={() => setFilter("in-progress")}
                  className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                    filter === "in-progress" ? "bg-white text-stone-900 shadow-xs" : "hover:text-stone-900"
                  }`}
                >
                  In Progress ({allCourses.filter((c) => c.status === "in-progress").length})
                </button>
                <button
                  onClick={() => setFilter("completed")}
                  className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                    filter === "completed" ? "bg-white text-stone-900 shadow-xs" : "hover:text-stone-900"
                  }`}
                >
                  Completed ({allCourses.filter((c) => c.status === "completed").length})
                </button>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCourses.map((course) => {
                const IconComponent = getLucideIcon(course.icon, BookOpen);

                return (
                  <div
                    key={course.courseId}
                    className="flex flex-col justify-between rounded-3xl border border-[#e7e3da] bg-white/95 p-5 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:border-orange-300 transition-all duration-200 group"
                  >
                    <div>
                      {/* Card Header: Icon & Status Badge */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 text-orange-400 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                          <IconComponent size={22} />
                        </div>

                        {/* Status Badge */}
                        {course.status === "completed" ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                            <CheckCircle2 size={12} className="text-emerald-500" />
                            <span>Completed</span>
                          </span>
                        ) : course.status === "in-progress" ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 border border-orange-200 px-2.5 py-0.5 text-[11px] font-bold text-orange-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                            <span>In Progress</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 border border-stone-200 px-2.5 py-0.5 text-[11px] font-bold text-stone-500">
                            <span>Not Started</span>
                          </span>
                        )}
                      </div>

                      {/* Course Title & Category */}
                      <div className="mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                          {course.tag || "Systems Mastery"}
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-stone-900 tracking-tight mt-0.5 group-hover:text-[#ea580c] transition-colors">
                          {course.title}
                        </h3>
                      </div>

                      <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-4">
                        {course.description || course.tagline}
                      </p>

                      {/* Progress Statistics */}
                      <div className="space-y-1.5 pt-2 border-t border-stone-100">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-stone-700">
                            {course.completedModules} / {course.totalModules} Modules Completed
                          </span>
                          <span className="font-extrabold text-orange-600">
                            {course.progressPercentage}%
                          </span>
                        </div>

                        {/* Smooth Animated Progress Bar */}
                        <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ease-out ${
                              course.status === "completed"
                                ? "bg-emerald-500"
                                : "bg-gradient-to-r from-orange-500 to-amber-500"
                            }`}
                            style={{ width: `${Math.max(course.progressPercentage, course.completedModules > 0 ? 5 : 0)}%` }}
                          />
                        </div>
                      </div>

                      {/* Last Studied Module */}
                      <div className="mt-3.5 text-[11px] text-stone-500 flex items-center gap-1.5">
                        <Clock size={12} className="text-stone-400 shrink-0" />
                        <span className="truncate">
                          {course.currentModuleName ? (
                            <>
                              Last studied:{" "}
                              <span className="font-semibold text-stone-800">
                                {course.currentModuleName}
                              </span>
                            </>
                          ) : (
                            "Not started yet"
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Resume / Start Button */}
                    <div className="mt-5 pt-3 border-t border-stone-100">
                      <button
                        onClick={() => navigate(course.currentModuleRoute || course.route)}
                        className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition shadow-2xs active:scale-95 cursor-pointer ${
                          course.status === "completed"
                            ? "bg-stone-900 hover:bg-stone-800 text-white"
                            : course.status === "in-progress"
                            ? "bg-[#f97316] hover:bg-[#ea580c] text-white"
                            : "bg-stone-100 hover:bg-stone-200 text-stone-800"
                        }`}
                      >
                        {course.status === "completed" ? (
                          <>
                            <Trophy size={14} className="text-amber-400" />
                            <span>Review Track</span>
                          </>
                        ) : course.status === "in-progress" ? (
                          <>
                            <Play size={13} fill="currentColor" />
                            <span>Resume Learning</span>
                          </>
                        ) : (
                          <>
                            <span>Start Course</span>
                            <ArrowRight size={14} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
