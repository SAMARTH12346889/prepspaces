import { API_BASE_URL } from "../config/auth";
import { getStoredToken } from "./authService";
import { getCoursesCatalog } from "./courseContentService";

const GUEST_PROGRESS_KEY = "prepspaces_guest_progress";
export const PROGRESS_UPDATED_EVENT = "prepspaces_progress_updated";

const DEFAULT_CATALOG = [
  {
    id: "system-design",
    title: "System Design Masterclass",
    tagline: "Scalability, Distributed Systems & Trade-offs",
    description: "Master distributed systems, caching, replication, fault tolerance, and trade-offs for high-scale tech interviews.",
    icon: "Network",
    route: "/learning/system-design",
    tag: "Architecture",
    color: "from-zinc-900 to-orange-600",
    badgeColor: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    totalModules: 24,
  },
  {
    id: "operating-systems",
    title: "Operating Systems Master Course",
    tagline: "Kernel Internals, Memory & Low-Level Systems",
    description: "Deep dive into kernel architecture, virtual memory, process scheduling, synchronization, and POSIX system calls.",
    icon: "Cpu",
    route: "/learning/operating-systems/intro",
    tag: "Core Systems",
    color: "from-zinc-900 to-amber-600",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    totalModules: 24,
  },
  {
    id: "computer-networks",
    title: "Computer Networks & Internet",
    tagline: "Protocols, Architecture, Sockets & Performance",
    description: "TCP/IP stack internals, socket programming, HTTP/3, QUIC, routing algorithms, DNS, and modern network resilience.",
    icon: "Globe",
    route: "/learning/computer-networks",
    tag: "Networking",
    color: "from-zinc-900 to-emerald-600",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    totalModules: 24,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Defense",
    tagline: "Security Principles, Cryptography & Threat Modeling",
    description: "Practical security engineering: cryptographic primitives, authentication, zero trust architectures, and vulnerability defense.",
    icon: "Shield",
    route: "/learning/cybersecurity",
    tag: "Security",
    color: "from-zinc-900 to-rose-600",
    badgeColor: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    totalModules: 15,
  },
  {
    id: "devops",
    title: "DevOps & SRE Track",
    tagline: "Linux, Docker, Kubernetes & CI/CD",
    description: "Production infrastructure engineering: Linux administration, containerization, orchestration, observability, and automated pipelines.",
    icon: "Terminal",
    route: "/learning/devops/linux",
    tag: "Infrastructure",
    color: "from-zinc-900 to-orange-600",
    badgeColor: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    totalModules: 19,
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    tagline: "AWS, Azure, GCP & Multi-Cloud Architecture",
    description: "Cloud-native system design, compute abstraction, serverless patterns, managed storage, and multi-region resilience.",
    icon: "Cloud",
    route: "/learning/cloud",
    tag: "Cloud Systems",
    color: "from-zinc-900 to-amber-600",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    totalModules: 15,
  },
];

/**
 * Read local/guest progress from localStorage
 */
export function getLocalProgress() {
  try {
    const raw = localStorage.getItem(GUEST_PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Save local progress to localStorage
 */
function setLocalProgress(progressObj) {
  try {
    localStorage.setItem(GUEST_PROGRESS_KEY, JSON.stringify(progressObj));
  } catch (err) {
    console.error("[progressService] Failed to write local progress:", err);
  }
}

/**
 * Notify all UI components that progress changed
 */
function emitProgressUpdate() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(PROGRESS_UPDATED_EVENT));
  }
}

/**
 * Synchronous initial state for instant hydration & rendering
 */
export function getSynchronousInitialProgress() {
  const localProg = getLocalProgress();
  const catalog = DEFAULT_CATALOG;

  let totalCompletedModules = 0;
  let totalAvailableModules = 0;
  let enrolledCoursesCount = 0;
  let completedCoursesCount = 0;

  const courseCards = catalog.map((course) => {
    const lp = localProg[course.id] || {};
    const completedList = Array.isArray(lp.completedModuleIds) ? lp.completedModuleIds : [];
    const totalMods = course.totalModules || 24;
    const completedCount = completedList.length;
    const pct = Math.min(100, Math.round((completedCount / totalMods) * 100));

    totalCompletedModules += completedCount;
    totalAvailableModules += totalMods;

    let status = "not-started";
    if (pct === 100) {
      status = "completed";
      completedCoursesCount++;
      enrolledCoursesCount++;
    } else if (completedCount > 0 || lp.currentModuleId || lp.lastAccessedAt) {
      status = "in-progress";
      enrolledCoursesCount++;
    }

    return {
      courseId: course.id,
      title: course.title,
      tagline: course.tagline,
      description: course.description,
      icon: course.icon,
      route: course.route,
      tag: course.tag,
      color: course.color,
      badgeColor: course.badgeColor,
      totalModules: totalMods,
      completedModules: completedCount,
      completedModuleIds: completedList,
      progressPercentage: pct,
      currentModuleId: lp.currentModuleId || null,
      currentModuleName: lp.currentModuleName || null,
      currentModuleRoute: lp.currentModuleRoute || course.route,
      lastAccessedAt: lp.lastAccessedAt || null,
      status,
    };
  });

  const withActivity = courseCards
    .filter((c) => c.lastAccessedAt)
    .sort((a, b) => new Date(b.lastAccessedAt).getTime() - new Date(a.lastAccessedAt).getTime());

  const recentlyStudied = withActivity.length > 0 ? withActivity[0] : null;

  const overallPercentage =
    totalAvailableModules > 0
      ? Math.min(100, Math.round((totalCompletedModules / totalAvailableModules) * 100))
      : 0;

  return {
    success: true,
    isGuest: true,
    summary: {
      totalCourses: catalog.length,
      enrolledCourses: enrolledCoursesCount,
      completedCourses: completedCoursesCount,
      totalCompletedModules,
      totalAvailableModules,
      overallPercentage,
      recentlyStudied,
    },
    courses: courseCards,
  };
}

/**
 * Fetch progress for all courses:
 * - If logged in, fetches from Cloudflare Workers backend and updates local cache.
 * - If guest, generates full course cards using local progress and catalog.
 */
export async function getStudentDashboardProgress(token = getStoredToken()) {
  // If user is authenticated, retrieve from server
  if (token) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/progress`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success && data.courses) {
          // Cache to local for instant offline display
          const localCache = {};
          data.courses.forEach((c) => {
            localCache[c.courseId] = c;
          });
          setLocalProgress(localCache);
          return data;
        }
      }
    } catch (err) {
      console.warn("[progressService] Server progress fetch failed, falling back to local:", err);
    }
  }

  // Guest / Offline fallback: Compute from catalog + local storage
  let catalog = (await getCoursesCatalog());
  if (!Array.isArray(catalog) || catalog.length === 0) {
    catalog = DEFAULT_CATALOG;
  }
  const localProg = getLocalProgress();

  let totalCompletedModules = 0;
  let totalAvailableModules = 0;
  let enrolledCoursesCount = 0;
  let completedCoursesCount = 0;

  const courseCards = catalog.map((course) => {
    const lp = localProg[course.id] || {};
    const completedList = Array.isArray(lp.completedModuleIds) ? lp.completedModuleIds : [];
    const totalMods = course.totalModules || 24;
    const completedCount = completedList.length;
    const pct = Math.min(100, Math.round((completedCount / totalMods) * 100));

    totalCompletedModules += completedCount;
    totalAvailableModules += totalMods;

    let status = "not-started";
    if (pct === 100) {
      status = "completed";
      completedCoursesCount++;
      enrolledCoursesCount++;
    } else if (completedCount > 0 || lp.currentModuleId || lp.lastAccessedAt) {
      status = "in-progress";
      enrolledCoursesCount++;
    }

    return {
      courseId: course.id,
      title: course.title,
      tagline: course.tagline,
      description: course.description,
      icon: course.icon,
      route: course.route,
      tag: course.tag,
      color: course.color,
      badgeColor: course.badgeColor,
      totalModules: totalMods,
      completedModules: completedCount,
      completedModuleIds: completedList,
      progressPercentage: pct,
      currentModuleId: lp.currentModuleId || null,
      currentModuleName: lp.currentModuleName || null,
      currentModuleRoute: lp.currentModuleRoute || course.route,
      lastAccessedAt: lp.lastAccessedAt || null,
      status,
    };
  });

  const withActivity = courseCards
    .filter((c) => c.lastAccessedAt)
    .sort((a, b) => new Date(b.lastAccessedAt).getTime() - new Date(a.lastAccessedAt).getTime());

  const recentlyStudied = withActivity.length > 0 ? withActivity[0] : null;

  const overallPercentage =
    totalAvailableModules > 0
      ? Math.min(100, Math.round((totalCompletedModules / totalAvailableModules) * 100))
      : 0;

  return {
    success: true,
    isGuest: !token,
    summary: {
      totalCourses: catalog.length,
      enrolledCourses: enrolledCoursesCount,
      completedCourses: completedCoursesCount,
      totalCompletedModules,
      totalAvailableModules,
      overallPercentage,
      recentlyStudied,
    },
    courses: courseCards,
  };
}

/**
 * Record module visit or completion:
 * - Updates local storage immediately
 * - If user is logged in, syncs to backend
 * - Emits event to instantly refresh UI
 */
export async function recordModuleProgress(
  courseId,
  { moduleId, moduleName, moduleRoute, completed = undefined },
  token = getStoredToken()
) {
  if (!courseId) return;

  // 1. Update local progress immediately
  const local = getLocalProgress();
  const currentCourse = local[courseId] || {
    courseId,
    completedModuleIds: [],
  };

  const completedSet = new Set(currentCourse.completedModuleIds || []);
  if (completed === true && moduleId) {
    completedSet.add(moduleId);
  } else if (completed === false && moduleId) {
    completedSet.delete(moduleId);
  }

  const completedList = Array.from(completedSet);
  currentCourse.completedModuleIds = completedList;
  if (moduleId) currentCourse.currentModuleId = moduleId;
  if (moduleName) currentCourse.currentModuleName = moduleName;
  if (moduleRoute) currentCourse.currentModuleRoute = moduleRoute;
  currentCourse.lastAccessedAt = new Date().toISOString();

  local[courseId] = currentCourse;
  setLocalProgress(local);
  emitProgressUpdate();

  // 2. If authenticated, update server
  if (token) {
    try {
      fetch(`${API_BASE_URL}/api/progress/${courseId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          moduleId,
          moduleName,
          moduleRoute,
          completed,
        }),
      }).catch((err) => console.warn("[progressService] Async server update failed:", err));
    } catch (err) {
      console.warn("[progressService] Network error updating progress:", err);
    }
  }
}

/**
 * Synchronize local progress into the student account on login
 */
export async function syncLocalProgressToServer(token) {
  if (!token) return;
  const local = getLocalProgress();
  if (Object.keys(local).length === 0) return;

  try {
    const res = await fetch(`${API_BASE_URL}/api/progress/sync`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ localProgress: local }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.synced) {
        // Merge synced results back
        const updated = { ...local, ...data.synced };
        setLocalProgress(updated);
        emitProgressUpdate();
      }
    }
  } catch (err) {
    console.error("[progressService] Progress synchronization failed:", err);
  }
}
