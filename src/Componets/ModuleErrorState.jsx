import React from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import ModuleNav from "./ModuleNav";

/**
 * Error state display with retry mechanism for module loading failures.
 */
export default function ModuleErrorState({
  track = "os",
  currentModuleId = "intro",
  error = "Failed to load module content from backend",
  onRetry,
}) {
  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased">
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <ModuleNav track={track} currentModuleId={currentModuleId} />

        <div className="my-12 rounded-3xl border border-red-200 bg-red-50/60 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-xs">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600 mb-4">
            <AlertTriangle size={28} />
          </div>

          <h2 className="text-xl font-bold text-red-950 mb-2">
            Unable to Load Lesson Content
          </h2>

          <p className="text-sm text-red-800 leading-relaxed mb-6">
            {error || "An error occurred while retrieving educational data from api.prepspaces.com."}
          </p>

          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-red-700 transition cursor-pointer active:scale-95"
            >
              <RotateCcw size={15} />
              <span>Retry Loading Lesson</span>
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
