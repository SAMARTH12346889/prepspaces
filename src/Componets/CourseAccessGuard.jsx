import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  getCourseAccess,
  getCachedCourseAccess,
  UNLOCK_UPDATED_EVENT,
} from "../services/unlockingService";
import Logo from "./Logo";
import { Lock, Sparkles, ArrowRight, ArrowLeft, ShieldCheck, User } from "lucide-react";

/**
 * CourseAccessGuard:
 * Single authoritative guard for module access.
 * Enforces sequential learning and compulsory authentication at Module 7+.
 */
export default function CourseAccessGuard({
  courseId,
  moduleId,
  children,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  // Instant initial check from cache if available
  const [accessState, setAccessState] = useState(() => getCachedCourseAccess(courseId));
  const [loading, setLoading] = useState(() => !getCachedCourseAccess(courseId));

  useEffect(() => {
    let isMounted = true;

    async function checkAccess() {
      const data = await getCourseAccess(courseId);
      if (isMounted) {
        setAccessState(data);
        setLoading(false);
      }
    }

    checkAccess();

    const handleUnlockUpdated = (e) => {
      if (!e.detail?.courseId || e.detail.courseId === courseId) {
        checkAccess();
      }
    };

    window.addEventListener(UNLOCK_UPDATED_EVENT, handleUnlockUpdated);
    return () => {
      isMounted = false;
      window.removeEventListener(UNLOCK_UPDATED_EVENT, handleUnlockUpdated);
    };
  }, [courseId, moduleId, isAuthenticated]);

  if (loading && !accessState) {
    return (
      <div className="min-h-screen bg-[#f6f4ee] flex items-center justify-center p-6 text-stone-900">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-orange-500/20 border-t-orange-600 rounded-full animate-spin" />
          <p className="text-xs font-mono font-semibold text-stone-500">Checking course access permissions...</p>
        </div>
      </div>
    );
  }

  // Find module in access state
  const moduleInfo = accessState?.modules?.find((m) => m.id === moduleId);

  // If module exists and is unlocked, allow viewing
  if (moduleInfo && moduleInfo.isUnlocked) {
    return children;
  }

  // If moduleInfo does not exist yet (initial hydration), fall back to children to avoid blocking during transient renders
  if (!moduleInfo) {
    return children;
  }

  // 1. BARRIER: Module 7+ requires compulsory account creation / login
  if (moduleInfo.requiresAuth && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex items-center justify-center p-4 sm:p-6 antialiased">
        <div className="relative z-10 max-w-lg w-full rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-9 text-center shadow-xl backdrop-blur-xl">
          <div className="mb-6 flex justify-center">
            <Logo size="md" />
          </div>

          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-[#ea580c] shadow-sm">
            <Lock size={26} />
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-200/80 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-3">
            <Sparkles size={13} className="text-[#f97316]" />
            <span>Compulsory Registration Required</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
            Unlock Module {moduleInfo.order}: {moduleInfo.name}
          </h2>

          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-stone-600">
            You have completed the first 6 modules as an anonymous guest! To unlock Module 7 and preserve your learning progress, please sign in or create your free PrepSpaces account.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/login"
              state={{ from: location.pathname }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f97316] py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-[#ea580c] active:scale-95 cursor-pointer"
            >
              <User size={16} />
              <span>Sign In to Unlock Module {moduleInfo.order}</span>
              <ArrowRight size={15} />
            </Link>

            <Link
              to="/register"
              state={{ from: location.pathname }}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white py-3 text-xs sm:text-sm font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs active:scale-95 cursor-pointer"
            >
              <span>Create Free Account</span>
            </Link>

            <button
              type="button"
              onClick={() => navigate("/learning")}
              className="mt-2 text-xs font-semibold text-stone-500 hover:text-stone-800 transition cursor-pointer"
            >
              Return to Curriculum Overview
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. BARRIER: Sequential Prerequisite Required
  const currentUnlocked = accessState?.modules?.find(
    (m) => m.id === accessState.currentUnlockedModule
  );

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex items-center justify-center p-4 sm:p-6 antialiased">
      <div className="relative z-10 max-w-md w-full rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-8 text-center shadow-xl backdrop-blur-xl">
        <div className="mb-6 flex justify-center">
          <Logo size="md" />
        </div>

        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 text-stone-500 shadow-sm">
          <Lock size={26} />
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-stone-600 mb-3">
          <span>Sequential Learning Required</span>
        </div>

        <h2 className="text-xl font-black text-[#18181b] tracking-tight">
          Module {moduleInfo.order} is Locked
        </h2>

        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-stone-600">
          PrepSpaces courses follow a strict, university-grade sequential curriculum. Please complete the previous module to unlock this content.
        </p>

        <div className="mt-6 flex flex-col gap-2.5">
          {currentUnlocked && currentUnlocked.route && (
            <Link
              to={currentUnlocked.route}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f97316] py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-[#ea580c] active:scale-95 cursor-pointer"
            >
              <span>Continue from Module {currentUnlocked.order}: {currentUnlocked.name}</span>
              <ArrowRight size={15} />
            </Link>
          )}

          <button
            type="button"
            onClick={() => navigate("/learning")}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white py-2.5 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Back to All Courses</span>
          </button>
        </div>
      </div>
    </div>
  );
}
