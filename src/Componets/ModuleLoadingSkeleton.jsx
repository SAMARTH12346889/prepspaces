import React from "react";
import { useLocation } from "react-router-dom";
import ModuleNav from "./ModuleNav";

/**
 * Loading skeleton matching PrepSpaces module layout and styling.
 * Dynamically detects the active track and module from the current URL to prevent flashing incorrect tracks.
 */
export default function ModuleLoadingSkeleton({ track, currentModuleId }) {
  const location = useLocation();

  const detectedTrack = React.useMemo(() => {
    if (track) return track;
    const path = (location?.pathname || "").toLowerCase();
    if (path.includes("/learning/machine-learning") || path.includes("/learning/ml") || path.includes("/courses/machine-learning") || path.includes("/courses/ml") || path.includes("/learn/machine-learning")) return "machine-learning";
    if (path.includes("/learning/data-engineering") || path.includes("/learn/data-engineering") || path.includes("/courses/data-engineering")) return "data-engineering";
    if (path.includes("/learning/ai") || path.includes("/learn/ai") || path.includes("/courses/artificial-intelligence") || path.includes("/courses/generative-ai")) return "ai";
    if (path.includes("/learning/computer-networks") || path.includes("/learning/networks") || path.includes("/learn/networks") || path.includes("/courses/computer-networks") || path.includes("/courses/networks")) return "networks";
    if (path.includes("/learning/cybersecurity") || path.includes("/learn/cybersecurity") || path.includes("/courses/cybersecurity")) return "cybersecurity";
    if (path.includes("/learning/system-design") || path.includes("/learn/system-design") || path.includes("/courses/system-design")) return "system-design";
    if (path.includes("/learning/devops") || path.includes("/learn/devops") || path.includes("/courses/devops")) return "devops";
    if (path.includes("/learning/blockchain") || path.includes("/learn/blockchain") || path.includes("/courses/blockchain")) return "blockchain";
    if (path.includes("/learning/cloud") || path.includes("/learn/cloud") || path.includes("/courses/cloud")) return "cloud";
    if (path.includes("/learning/operating-systems") || path.includes("/learning/os") || path.includes("/learn/os") || path.includes("/courses/operating-systems") || path.includes("/courses/os")) return "os";
    return null;
  }, [track, location?.pathname]);

  const detectedModuleId = React.useMemo(() => {
    if (currentModuleId) return currentModuleId;
    if (!detectedTrack) return null;
    const path = (location?.pathname || "").toLowerCase().replace(/\/+$/, "");
    if (path.includes("/final-capstone")) return "final-capstone";
    const segments = path.split("/").filter(Boolean);
    const lastSeg = segments[segments.length - 1] || "";
    const rootSegments = new Set(["ai", "os", "operating-systems", "networks", "computer-networks", "cybersecurity", "system-design", "cloud", "devops", "blockchain", "data-engineering", "machine-learning", "ml"]);
    if (rootSegments.has(lastSeg)) return null;
    return lastSeg || null;
  }, [currentModuleId, detectedTrack, location?.pathname]);

  // For non-module routes (/, /learning, /interview, /login, /register, /dashboard),
  // render a neutral background skeleton without flashing an unrelated course ModuleNav bar.
  if (!detectedTrack) {
    return (
      <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased">
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 space-y-6 animate-pulse">
          <div className="h-10 w-48 rounded-2xl bg-stone-200/70" />
          <div className="rounded-3xl border border-[#e7e3da] bg-white/80 p-6 sm:p-8 space-y-4">
            <div className="h-6 w-2/3 rounded-lg bg-stone-200/80" />
            <div className="h-4 w-full max-w-2xl rounded-md bg-stone-100" />
            <div className="h-4 w-5/6 max-w-xl rounded-md bg-stone-100" />
          </div>
          <div className="rounded-3xl border border-[#e7e3da] bg-white/80 p-6 sm:p-8 space-y-4">
            <div className="h-5 w-44 rounded-md bg-stone-200/70" />
            <div className="h-4 w-full rounded-md bg-stone-100" />
            <div className="h-4 w-3/4 rounded-md bg-stone-100" />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased">
      {/* Module Navigation rendered at root to match settled module pages cleanly */}
      <ModuleNav track={detectedTrack} currentModuleId={detectedModuleId} activeModuleId={detectedModuleId} />

      <main className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8 pb-8">
        {/* Header Skeleton Card */}
        <div className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/80 p-6 sm:p-8 backdrop-blur-md shadow-xs animate-pulse">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-orange-100" />
              <div className="space-y-1.5">
                <div className="h-3 w-28 rounded-md bg-stone-200" />
                <div className="h-4 w-40 rounded-md bg-stone-200" />
              </div>
            </div>
            <div className="h-6 w-32 rounded-full bg-stone-100" />
          </div>

          <div className="mt-6 space-y-3">
            <div className="h-7 w-3/4 rounded-lg bg-stone-200" />
            <div className="h-4 w-full max-w-2xl rounded-md bg-stone-100" />
          </div>
        </div>

        {/* Tab Navigation Skeleton */}
        <div className="mb-6 flex gap-2 border-b border-[#e7e3da] pb-3">
          <div className="h-9 w-28 rounded-xl bg-orange-50 border border-orange-200" />
          <div className="h-9 w-32 rounded-xl bg-white border border-[#e7e3da]" />
          <div className="h-9 w-28 rounded-xl bg-white border border-[#e7e3da]" />
          <div className="h-9 w-24 rounded-xl bg-white border border-[#e7e3da]" />
        </div>

        {/* Main Content Area Skeleton */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs animate-pulse space-y-4">
            <div className="h-5 w-48 rounded-md bg-stone-200" />
            <div className="h-4 w-full rounded-md bg-stone-100" />
            <div className="h-4 w-5/6 rounded-md bg-stone-100" />
            <div className="h-4 w-4/6 rounded-md bg-stone-100" />
          </div>
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs animate-pulse space-y-4">
            <div className="h-5 w-64 rounded-md bg-stone-200" />
            <div className="h-4 w-full rounded-md bg-stone-100" />
            <div className="h-4 w-3/4 rounded-md bg-stone-100" />
          </div>
        </div>
      </main>
    </div>
  );
}
