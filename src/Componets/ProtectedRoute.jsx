import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * ProtectedRoute:
 * Requires the student to be authenticated.
 * If user is not logged in, redirects to /login and saves current route in location.state.
 */
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f6f4ee] flex flex-col items-center justify-center p-6 text-stone-600 antialiased font-sans">
        <div className="flex items-center gap-3 bg-white/90 px-5 py-3 rounded-2xl border border-stone-200/80 shadow-xs">
          <div className="w-4 h-4 rounded-full border-2 border-stone-300 border-t-[#f97316] animate-spin" />
          <span className="text-xs font-bold text-stone-700">Verifying secure session...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
}
