import { useState, useEffect, useCallback } from "react";
import { getModuleContent } from "../services/courseContentService";
import { recordModuleProgress } from "../services/progressService";

/**
 * Custom React hook for loading module content dynamically from Cloudflare backend.
 * Provides loading, error, and cached data states with retry capabilities,
 * and tracks student progress.
 */
export function useModuleContent(courseId, moduleId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadContent = useCallback(async () => {
    if (!courseId || !moduleId) return;

    setLoading(true);
    setError(null);

    try {
      const payload = await getModuleContent(courseId, moduleId);
      if (!payload) {
        throw new Error(`Failed to load module content for ${courseId}/${moduleId}`);
      }
      setData(payload);

      // Record student module visit (preserves completed state, updates last studied)
      recordModuleProgress(courseId, {
        moduleId,
        moduleName: payload.name || moduleId,
        moduleRoute: payload.route || (typeof window !== "undefined" ? window.location.pathname : ""),
        completed: undefined,
      });
    } catch (err) {
      console.error(`[useModuleContent] Error loading ${courseId}/${moduleId}:`, err);
      setError(err.message || "Failed to load module content. Please check your network connection.");
    } finally {
      setLoading(false);
    }
  }, [courseId, moduleId]);

  useEffect(() => {
    let isMounted = true;

    loadContent();

    return () => {
      isMounted = false;
    };
  }, [loadContent]);

  return {
    data,
    loading,
    error,
    reload: loadContent,
  };
}

export default useModuleContent;
