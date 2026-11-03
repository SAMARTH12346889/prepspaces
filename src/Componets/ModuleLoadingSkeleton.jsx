import React from "react";
import ModuleNav from "./ModuleNav";

/**
 * Loading skeleton matching PrepSpaces module layout and styling.
 */
export default function ModuleLoadingSkeleton({ track = "os", currentModuleId = "intro" }) {
  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#18181b] antialiased">
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Module Navigation Placeholder */}
        <ModuleNav track={track} currentModuleId={currentModuleId} />

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
