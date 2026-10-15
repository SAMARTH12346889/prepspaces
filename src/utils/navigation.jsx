import React, { createContext, useContext, useEffect, useRef, useCallback, useMemo } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const NavigationContext = createContext(null);

/**
 * Determine a logical hierarchy fallback when no in-app history entry exists
 * (e.g. direct URL visit, new tab, or hard refresh).
 */
export function getContextualFallback(pathname) {
  if (!pathname || pathname === "/") return "/";

  // Nested cloud module (/learning/cloud/networking) -> parent course (/learning/cloud)
  if (pathname.startsWith("/learning/cloud/") && pathname !== "/learning/cloud") {
    return "/learning/cloud";
  }

  // Nested devops module (/learning/devops/git) -> devops course root (/learning/devops/linux)
  if (pathname.startsWith("/learning/devops/") && pathname !== "/learning/devops/linux" && pathname !== "/learning/devops") {
    return "/learning/devops/linux";
  }

  // Nested system design module (/learning/system-design/networking) -> course root (/learning/system-design)
  if (pathname.startsWith("/learning/system-design/") && pathname !== "/learning/system-design") {
    return "/learning/system-design";
  }

  // Course main page (/learning/cloud, /learning/devops/linux, /learning/system-design) -> course catalog (/learning)
  if (pathname.startsWith("/learning/") && pathname !== "/learning") {
    return "/learning";
  }

  // Curriculum listing (/learning) -> Home (/)
  if (pathname === "/learning") {
    return "/";
  }

  // Interview room -> Home (/)
  if (pathname === "/interview") {
    return "/";
  }

  return "/";
}

export function NavigationProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  // In-app history stack tracker
  const historyStackRef = useRef([]);
  const isBackActionRef = useRef(false);

  useEffect(() => {
    const currentEntry = location.pathname + location.search;
    const stack = historyStackRef.current;

    if (isBackActionRef.current) {
      isBackActionRef.current = false;
      if (stack.length > 1) {
        stack.pop();
      }
    } else {
      // Don't add duplicate entries if user stayed on same path
      if (stack.length === 0 || stack[stack.length - 1] !== currentEntry) {
        stack.push(currentEntry);
      }
    }
  }, [location.pathname, location.search]);

  const goBack = useCallback((explicitFallback) => {
    const historyIdx = window.history.state?.idx;

    // If an in-app history entry exists before the current page
    if (typeof historyIdx === "number" && historyIdx > 0) {
      isBackActionRef.current = true;
      navigate(-1);
    } else {
      // Safe hierarchical fallback: module -> course root -> /learning -> /
      const fallback = explicitFallback || getContextualFallback(location.pathname);
      navigate(fallback, { replace: true });
    }
  }, [navigate, location.pathname]);

  // Touch Swipe from Left Edge to Go Back (iOS & Android native feel)
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;
    let isEdgeSwipe = false;

    const handleTouchStart = (e) => {
      if (!e.touches || e.touches.length !== 1) return;
      const touch = e.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;

      // Only trigger if swipe starts within 36px of left edge of screen
      isEdgeSwipe = touchStartX <= 36;
    };

    const handleTouchEnd = (e) => {
      if (!isEdgeSwipe || !e.changedTouches || e.changedTouches.length === 0) return;
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = Math.abs(touch.clientY - touchStartY);

      // Must be a predominantly horizontal swipe rightwards by at least 60px with max 80px vertical movement
      if (deltaX >= 60 && deltaY < 80) {
        goBack();
      }
      isEdgeSwipe = false;
    };

    const handleTouchCancel = () => {
      isEdgeSwipe = false;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("touchcancel", handleTouchCancel, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchCancel);
    };
  }, [goBack]);

  return (
    <NavigationContext.Provider value={{ goBack, historyStack: historyStackRef.current }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useSafeBack(defaultFallback) {
  const context = useContext(NavigationContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (!context) {
    return {
      goBack: (customFallback) => {
        const historyIdx = window.history.state?.idx;
        const hasInAppHistory = typeof historyIdx === "number" && historyIdx > 0;
        if (hasInAppHistory) {
          navigate(-1);
        } else {
          const fallback = customFallback || defaultFallback || getContextualFallback(location.pathname);
          navigate(fallback, { replace: true });
        }
      }
    };
  }

  return {
    goBack: (customFallback) => context.goBack(customFallback || defaultFallback)
  };
}

/**
 * Hook to synchronize topic/lesson index with browser URL search parameters (?topic=X).
 * Uses { replace: true } when switching topics so clicking 10 lessons doesn't trap the user
 * with 10 intermediate back button states.
 * Enables:
 * - Direct shareable/bookmarkable URLs for specific topics
 * - Smooth Back button navigation escaping directly back to the curriculum overview and home
 */
export function useSyncedTopic(maxTopicsOrFallback = 100) {
  const [searchParams, setSearchParams] = useSearchParams();
  const topicParam = searchParams.get("topic");

  const selectedTopic = useMemo(() => {
    if (!topicParam) {
      return typeof maxTopicsOrFallback === "string" ? maxTopicsOrFallback : 0;
    }
    // If topicParam is purely digits, parse it as integer
    if (/^\d+$/.test(topicParam)) {
      const n = parseInt(topicParam, 10);
      const max = typeof maxTopicsOrFallback === "number" ? maxTopicsOrFallback : 100;
      return !isNaN(n) && n >= 0 && n < max ? n : 0;
    }
    // Otherwise it's a string identifier like 'what-is-system-design'
    return topicParam;
  }, [topicParam, maxTopicsOrFallback]);

  const setSelectedTopic = useCallback(
    (action) => {
      const nextValue = typeof action === "function" ? action(selectedTopic) : action;
      if (nextValue === selectedTopic) return;

      if (nextValue === 0 || nextValue === "" || nextValue === null || nextValue === undefined) {
        setSearchParams(
          (prev) => {
            const next = new URLSearchParams(prev);
            next.delete("topic");
            return next;
          },
          { replace: true }
        );
      } else {
        setSearchParams(
          (prev) => {
            const next = new URLSearchParams(prev);
            next.set("topic", String(nextValue));
            return next;
          },
          { replace: true }
        );
      }
    },
    [selectedTopic, setSearchParams]
  );

  return [selectedTopic, setSelectedTopic];
}
