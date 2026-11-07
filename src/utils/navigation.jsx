import React, { createContext, useContext, useEffect, useRef, useCallback, useMemo } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const NavigationContext = createContext(null);

/**
 * Determine a logical hierarchy fallback when no in-app history entry exists
 * (e.g. direct URL visit, new tab, external referrer, or hard refresh).
 */
export function getContextualFallback(pathname) {
  if (!pathname || pathname === "/") return "/";

  // Normalize lower-case and strip trailing slash
  const p = pathname.toLowerCase().replace(/\/+$/, "");

  // AI & Generative AI Course (/learning/ai/..., /learn/ai/..., /learning/ai-engineering/...)
  if (
    p.startsWith("/learning/ai/") ||
    p.startsWith("/learning/ai-engineering/") ||
    p.startsWith("/learn/ai/") ||
    p.startsWith("/learn/ai-engineering/")
  ) {
    const isAiRoot =
      p === "/learning/ai/intro" ||
      p === "/learning/ai/foundations" ||
      p === "/learning/ai-engineering/intro" ||
      p === "/learning/ai-engineering/foundations" ||
      p === "/learn/ai/foundations";
    return isAiRoot ? "/learning" : "/learning/ai";
  }
  if (
    p === "/learning/ai" ||
    p === "/learning/ai-engineering" ||
    p === "/learn/ai" ||
    p === "/learn/ai-engineering"
  ) {
    return "/learning";
  }

  // Operating Systems Course (/learning/os/..., /learning/operating-systems/..., /learn/os/...)
  if (
    p.startsWith("/learning/os/") ||
    p.startsWith("/learning/operating-systems/") ||
    p.startsWith("/learn/os/")
  ) {
    const isOsRoot =
      p === "/learning/os/intro" ||
      p === "/learning/operating-systems/intro";
    return isOsRoot ? "/learning" : "/learning/os";
  }
  if (
    p === "/learning/os" ||
    p === "/learning/operating-systems" ||
    p === "/learn/os"
  ) {
    return "/learning";
  }

  // Computer Networks Course (/learning/networks/..., /learning/computer-networks/..., /learn/networks/...)
  if (
    p.startsWith("/learning/networks/") ||
    p.startsWith("/learning/computer-networks/") ||
    p.startsWith("/learn/networks/")
  ) {
    const isNetRoot = p === "/learning/networks/intro";
    return isNetRoot ? "/learning" : "/learning/networks";
  }
  if (
    p === "/learning/networks" ||
    p === "/learning/computer-networks" ||
    p === "/learn/networks"
  ) {
    return "/learning";
  }

  // Cybersecurity Course (/learning/cybersecurity/..., /learn/cybersecurity/...)
  if (
    p.startsWith("/learning/cybersecurity/") ||
    p.startsWith("/learn/cybersecurity/")
  ) {
    const isCyberRoot = p === "/learning/cybersecurity/intro";
    return isCyberRoot ? "/learning" : "/learning/cybersecurity";
  }
  if (p === "/learning/cybersecurity" || p === "/learn/cybersecurity") {
    return "/learning";
  }

  // System Design Course (/learning/system-design/..., /learn/system-design/...)
  if (
    p.startsWith("/learning/system-design/") ||
    p.startsWith("/learn/system-design/")
  ) {
    const isSdRoot = p === "/learning/system-design/intro";
    return isSdRoot ? "/learning" : "/learning/system-design";
  }
  if (p === "/learning/system-design" || p === "/learn/system-design") {
    return "/learning";
  }

  // DevOps Course (/learning/devops/..., /learn/devops/...)
  if (
    p.startsWith("/learning/devops/") ||
    p.startsWith("/learn/devops/")
  ) {
    const isDevOpsRoot =
      p === "/learning/devops/linux" ||
      p === "/learning/devops/intro" ||
      p === "/learning/devops";
    return isDevOpsRoot ? "/learning" : "/learning/devops/linux";
  }
  if (p === "/learning/devops" || p === "/learn/devops") {
    return "/learning";
  }

  // Cloud Computing Course (/learning/cloud/..., /learn/cloud/...)
  if (
    p.startsWith("/learning/cloud/") ||
    p.startsWith("/learn/cloud/")
  ) {
    const isCloudRoot =
      p === "/learning/cloud/intro" ||
      p === "/learning/cloud/foundations";
    return isCloudRoot ? "/learning" : "/learning/cloud";
  }
  if (p === "/learning/cloud" || p === "/learn/cloud") {
    return "/learning";
  }

  // Any other learning subroute -> course catalog (/learning)
  if (p.startsWith("/learning/") || p.startsWith("/learn/")) {
    return "/learning";
  }

  // Course catalog (/learning, /learn) -> Home (/)
  if (p === "/learning" || p === "/learn") {
    return "/";
  }

  // App routes -> Home (/)
  if (
    p === "/interview" ||
    p === "/dashboard" ||
    p === "/login" ||
    p === "/register" ||
    p === "/privacy-policy" ||
    p === "/terms-of-service"
  ) {
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
    const hasInAppStack = historyStackRef.current.length > 1;

    // If an in-app history entry exists before the current page
    if (hasInAppStack || (typeof historyIdx === "number" && historyIdx > 0)) {
      isBackActionRef.current = true;
      navigate(-1);
    } else {
      // Safe hierarchical fallback: module -> course root -> /learning -> /
      const fallback = explicitFallback || getContextualFallback(location.pathname);
      navigate(fallback);
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
export function useSyncedTopic(maxTopicsOrFallback = 100, defaultFallback) {
  const [searchParams, setSearchParams] = useSearchParams();
  const topicParam = searchParams.get("topic");

  const fallback = defaultFallback !== undefined
    ? defaultFallback
    : (maxTopicsOrFallback === 1
        ? 1
        : (Array.isArray(maxTopicsOrFallback)
            ? maxTopicsOrFallback[0]
            : (typeof maxTopicsOrFallback === "string" ? maxTopicsOrFallback : 0)));

  const max = typeof maxTopicsOrFallback === "number" && maxTopicsOrFallback > 1 ? maxTopicsOrFallback : 100;

  const selectedTopic = useMemo(() => {
    if (!topicParam) return fallback;
    // If topicParam is purely digits, parse it as integer
    if (/^\d+$/.test(topicParam)) {
      const n = parseInt(topicParam, 10);
      const min = typeof fallback === "number" ? Math.min(fallback, 0) : 0;
      return !isNaN(n) && n >= min && n <= max ? n : fallback;
    }
    // Otherwise it's a string identifier like 'what-is-system-design'
    return topicParam;
  }, [topicParam, max, fallback]);

  const setSelectedTopic = useCallback(
    (action) => {
      const nextValue = typeof action === "function" ? action(selectedTopic) : action;
      if (nextValue === selectedTopic) return;

      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          if (
            nextValue === fallback ||
            nextValue === 0 ||
            nextValue === "" ||
            nextValue === null ||
            nextValue === undefined
          ) {
            next.delete("topic");
          } else {
            next.set("topic", String(nextValue));
          }
          return next;
        },
        { replace: true }
      );
    },
    [selectedTopic, setSearchParams, fallback]
  );

  return [selectedTopic, setSelectedTopic];
}
