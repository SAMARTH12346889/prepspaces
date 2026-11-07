import { useState, useEffect, useCallback, useRef } from "react";
import { getModuleContent, getSynchronousCachedModule } from "../services/courseContentService";
import { recordModuleProgress } from "../services/progressService";

/**
 * Custom React hook for loading module content dynamically from Cloudflare backend.
 * Provides instant synchronous cache hydration to eliminate skeleton flashing,
 * in-flight request deduplication, and non-blocking background synchronization.
 */
export function useModuleContent(courseId, moduleId) {
  // Synchronous cache hydration: If the module is already cached in memory or sessionStorage,
  // load it immediately on the initial render frame with loading: false
  const [data, setData] = useState(() => getSynchronousCachedModule(courseId, moduleId));
  const [loading, setLoading] = useState(() => !getSynchronousCachedModule(courseId, moduleId));
  const [error, setError] = useState(null);
  const recordedRef = useRef(null);

  const loadContent = useCallback(async (forceRefresh = false) => {
    if (!courseId || !moduleId) return;

    // Check synchronous cache first
    const cached = getSynchronousCachedModule(courseId, moduleId);
    if (cached && !forceRefresh) {
      setData(cached);
      setLoading(false);
      setError(null);

      // Record progress once per module without blocking
      const visitKey = `${courseId}:${moduleId}`;
      if (recordedRef.current !== visitKey) {
        recordedRef.current = visitKey;
        recordModuleProgress(courseId, {
          moduleId,
          moduleName: cached.name || moduleId,
          moduleRoute: cached.route || (typeof window !== "undefined" ? window.location.pathname : ""),
          completed: undefined,
        });
      }
      return;
    }

    if (!data) {
      setLoading(true);
    }
    setError(null);

    try {
      const payload = await getModuleContent(courseId, moduleId);
      if (!payload) {
        throw new Error(`Failed to load module content for ${courseId}/${moduleId}`);
      }
      setData(payload);

      // Record student module visit
      const visitKey = `${courseId}:${moduleId}`;
      if (recordedRef.current !== visitKey) {
        recordedRef.current = visitKey;
        recordModuleProgress(courseId, {
          moduleId,
          moduleName: payload.name || moduleId,
          moduleRoute: payload.route || (typeof window !== "undefined" ? window.location.pathname : ""),
          completed: undefined,
        });
      }
    } catch (err) {
      console.error(`[useModuleContent] Error loading ${courseId}/${moduleId}:`, err);
      // Fallback to cached data if network failed
      if (!data) {
        setError(err.message || "Failed to load module content. Please check your network connection.");
      }
    } finally {
      setLoading(false);
    }
  }, [courseId, moduleId, data]);

  useEffect(() => {
    loadContent();
  }, [courseId, moduleId]);

  return {
    data,
    loading,
    error,
    reload: () => loadContent(true),
  };
}

export default useModuleContent;
