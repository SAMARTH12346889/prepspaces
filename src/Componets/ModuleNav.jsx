import React, { useRef, useState, useEffect, useCallback } from "react";
import { getCourseModules } from "../services/courseContentService";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  LogOut,
  User,
  Lock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  X,
} from "lucide-react";
import { getLocalProgress, PROGRESS_UPDATED_EVENT } from "../services/progressService";
import {
  getCourseAccess,
  getCachedCourseAccess,
  completeModule,
  autoCompleteModule,
  UNLOCK_UPDATED_EVENT,
} from "../services/unlockingService";
import { useSafeBack } from "../utils/navigation";
import { SHOW_NOVA_AI } from "../config/features";
import { useAuth } from "../context/AuthContext";
import Logo from "./Logo";

export const CLOUD_MODULES = [
  { id: "cloud", name: "Foundations", route: "/learning/cloud" },
  { id: "networking", name: "Networking", route: "/learning/cloud/networking" },
  { id: "compute", name: "Compute", route: "/learning/cloud/compute" },
  { id: "storage", name: "Storage", route: "/learning/cloud/storage" },
  { id: "databases", name: "Databases", route: "/learning/cloud/databases" },
  { id: "architecture", name: "Architecture", route: "/learning/cloud/architecture" },
  { id: "aws", name: "AWS", route: "/learning/cloud/aws" },
  { id: "azure", name: "Azure", route: "/learning/cloud/azure" },
  { id: "gcp", name: "Google Cloud", route: "/learning/cloud/gcp" },
  { id: "multicloud", name: "Multi-Cloud", route: "/learning/cloud/multicloud" },
  { id: "security", name: "Security", route: "/learning/cloud/security" },
  { id: "economics", name: "Economics", route: "/learning/cloud/economics" },
  { id: "advanced", name: "Advanced Systems", route: "/learning/cloud/advanced" },
];

export const DEVOPS_MODULES = [
  { id: "linux", name: "Linux Administration", route: "/learning/devops/linux" },
  { id: "git", name: "Git & Workflows", route: "/learning/devops/git" },
  { id: "docker", name: "Docker & Containers", route: "/learning/devops/docker" },
  { id: "k8s", name: "Kubernetes", route: "/learning/devops/k8s" },
  { id: "iac", name: "Terraform IaC", route: "/learning/devops/iac" },
  { id: "cicd", name: "CI/CD & GitOps", route: "/learning/devops/cicd" },
  { id: "deployment", name: "Deployment Strategies", route: "/learning/devops/deployment" },
  { id: "sre", name: "Site Reliability (SRE)", route: "/learning/devops/sre" },
  { id: "reliability", name: "Production Reliability", route: "/learning/devops/reliability" },
  { id: "secops", name: "DevSecOps", route: "/learning/devops/secops" },
  { id: "platform", name: "Platform Engineering", route: "/learning/devops/platform" },
  { id: "capstone", name: "Capstone Project", route: "/learning/devops/capstone" },
];

export const SYSTEM_DESIGN_MODULES = [
  { id: "intro", name: "1. Architectural Thinking", route: "/learning/system-design" },
  { id: "requirements", name: "2. Requirements & Capacity", route: "/learning/system-design/requirements" },
  { id: "networking", name: "3. APIs & Networking", route: "/learning/system-design/networking" },
  { id: "architecture", name: "4. Monoliths & Services", route: "/learning/system-design/architecture" },
  { id: "databases", name: "5. Databases & Indexing", route: "/learning/system-design/databases" },
  { id: "caching", name: "6. Caching & Invalidation", route: "/learning/system-design/caching" },
  { id: "replication", name: "7. Replication & Sharding", route: "/learning/system-design/replication" },
  { id: "storage", name: "8. Object Storage & Data Pipelines", route: "/learning/system-design/storage" },
  { id: "distributed-systems", name: "9. Distributed Systems & Time", route: "/learning/system-design/distributed-systems" },
  { id: "consistency", name: "10. Consistency & Quorums", route: "/learning/system-design/consistency" },
  { id: "consensus", name: "11. Consensus & Coordination", route: "/learning/system-design/consensus" },
  { id: "messaging", name: "12. Message Queues & Streaming", route: "/learning/system-design/messaging" },
  { id: "transactions", name: "13. Distributed Transactions & Sagas", route: "/learning/system-design/transactions" },
  { id: "traffic", name: "14. Load Balancing & Traffic Control", route: "/learning/system-design/traffic" },
  { id: "scalability", name: "15. Scalability & Performance Modeling", route: "/learning/system-design/scalability" },
  { id: "multi-region", name: "16. Multi-Region & Disaster Recovery", route: "/learning/system-design/multi-region" },
  { id: "reliability", name: "17. Reliability & Observability", route: "/learning/system-design/reliability" },
  { id: "security", name: "18. Security & Multi-Tenancy", route: "/learning/system-design/security" },
  { id: "realtime", name: "19. Real-Time Systems & WebSockets", route: "/learning/system-design/realtime" },
  { id: "search", name: "20. Search, Feeds & Recommendations", route: "/learning/system-design/search" },
  { id: "ai-systems", name: "21. AI Systems & Inference Serving", route: "/learning/system-design/ai-systems" },
  { id: "case-studies", name: "22. System Design Case Studies", route: "/learning/system-design/case-studies" },
  { id: "advanced-case-studies", name: "23. Advanced Case Studies", route: "/learning/system-design/advanced-case-studies" },
  { id: "capstone", name: "24. Final Capstone Project", route: "/learning/system-design/capstone" },
];

export const OS_MODULES = [
  { id: "intro", name: "1. Intro & Systems Thinking", route: "/learning/os" },
  { id: "architecture", name: "2. Computer Architecture", route: "/learning/os/architecture" },
  { id: "systems-programming", name: "3. C & Systems Programming", route: "/learning/os/systems-programming" },
  { id: "syscalls", name: "4. Syscalls & Program Execution", route: "/learning/os/syscalls" },
  { id: "processes", name: "5. Processes & Lifecycle", route: "/learning/os/processes" },
  { id: "scheduling", name: "6. CPU Scheduling", route: "/learning/os/scheduling" },
  { id: "threads", name: "7. Threads & Multithreading", route: "/learning/os/threads" },
  { id: "concurrency", name: "8. Synchronization & Deadlocks", route: "/learning/os/concurrency" },
  { id: "memory", name: "9. Memory Hierarchy & Allocation", route: "/learning/os/memory" },
  { id: "virtual-memory", name: "10. Virtual Memory & Paging", route: "/learning/os/virtual-memory" },
  { id: "demand-paging", name: "11. Demand Paging & Replacement", route: "/learning/os/demand-paging" },
  { id: "virtualization", name: "12. Advanced Memory, VMs & Containers", route: "/learning/os/virtualization" },
  { id: "filesystems", name: "13. Filesystems & Storage Architecture", route: "/learning/os/filesystems" },
  { id: "storage", name: "14. Storage Architecture & I/O", route: "/learning/os/storage" },
  { id: "ipc", name: "15. IPC, Pipes & Shared Memory", route: "/learning/os/ipc" },
  { id: "crash-consistency", name: "16. Crash Consistency & Durability", route: "/learning/os/crash-consistency" },
  { id: "kernel-architecture", name: "17. Kernel Architecture & xv6", route: "/learning/os/kernel-architecture" },
  { id: "diagnostics", name: "18. Linux Internals & Diagnostics", route: "/learning/os/diagnostics" },
  { id: "networking", name: "19. OS Networking & Network I/O", route: "/learning/os/networking" },
  { id: "security", name: "20. OS Security, Isolation & Reliability", route: "/learning/os/security" },
  { id: "advanced-sync", name: "21. Advanced Synchronization & Multiprocessor", route: "/learning/os/advanced-sync" },
  { id: "testing", name: "22. OS Design, Testing & Failure Analysis", route: "/learning/os/testing" },
  { id: "capstone", name: "23. Capstone: Build an OS Component (xv6)", route: "/learning/os/capstone" },
  { id: "final-capstone", name: "24. Final Capstone: OS Engineering Lab", route: "/learning/os/final-capstone" },
];

export const NETWORKS_MODULES = [
  { id: "intro", name: "1. Intro & Fundamentals", route: "/learning/networks" },
  { id: "models", name: "2. Network Models (OSI & TCP/IP)", route: "/learning/networks/models" },
  { id: "physical", name: "3. Physical Layer & Transmission", route: "/learning/networks/physical" },
  { id: "datalink", name: "4. Data Link Layer & Ethernet", route: "/learning/networks/datalink" },
  { id: "ipv4", name: "5. IPv4 Addressing & Subnetting", route: "/learning/networks/ipv4" },
  { id: "ipv6", name: "6. IPv6 & Modern Addressing", route: "/learning/networks/ipv6" },
  { id: "routing", name: "7. Routing & Router Architecture", route: "/learning/networks/routing" },
  { id: "config", name: "8. ICMP, ARP, DHCP & Host Config", route: "/learning/networks/config" },
  { id: "tcp", name: "9. TCP — Reliable Transport", route: "/learning/networks/tcp" },
  { id: "udp", name: "10. UDP, QUIC & Modern Transport", route: "/learning/networks/udp" },
  { id: "dns", name: "11. DNS & Internet Naming", route: "/learning/networks/dns" },
  { id: "applayer", name: "12. Application Protocols & Web", route: "/learning/networks/application-layer" },
  { id: "wireless", name: "13. Wireless, Wi-Fi & Mobile", route: "/learning/networks/wireless" },
  { id: "switching", name: "14. Switching, VLANs & LAN Design", route: "/learning/networks/switching" },
  { id: "firewalls", name: "15. Firewalls & Access Control", route: "/learning/networks/firewalls" },
  { id: "enterprise-cloud", name: "16. Enterprise, Data Center & Cloud", route: "/learning/networks/enterprise-cloud" },
  { id: "threat-modeling", name: "17. Security & Threat Modeling", route: "/learning/networks/threat-modeling" },
  { id: "packet-analysis", name: "18. Packet Analysis & Recon", route: "/learning/networks/packet-analysis" },
  { id: "attacks", name: "19. Attacks & Countermeasures", route: "/learning/networks/attacks-defenses" },
  { id: "ids-ips-soc", name: "20. IDS/IPS & SOC Monitoring", route: "/learning/networks/ids-ips-soc" },
  { id: "network-automation", name: "21. Network Programming & Automation", route: "/learning/networks/network-automation" },
  { id: "advanced-routing", name: "22. Advanced Routing & Troubleshooting", route: "/learning/networks/advanced-routing" },
  { id: "security-architecture", name: "23. Modern Network Security Architecture", route: "/learning/networks/security-architecture" },
  { id: "final-capstone", name: "24. Final Capstone: Network Engineering Lab", route: "/learning/networks/final-capstone" },
];

export const CYBERSECURITY_MODULES = [
  { id: "intro", name: "1. Intro & Ethical Hacking", route: "/learning/cybersecurity" },
  { id: "networking", name: "2. Networking for Cyber", route: "/learning/cybersecurity/networking" },
  { id: "systems", name: "3. OS Internals & Hardening", route: "/learning/cybersecurity/systems" },
  { id: "threat-modeling", name: "4. Threat Modeling & Risk", route: "/learning/cybersecurity/threat-modeling" },
  { id: "methodology", name: "5. Methodology, Scope & RoE", route: "/learning/cybersecurity/methodology" },
  { id: "osint", name: "6. OSINT & Passive Recon", route: "/learning/cybersecurity/osint" },
  { id: "recon", name: "7. Active Recon & Enumeration", route: "/learning/cybersecurity/recon" },
  { id: "vulnerability-assessment", name: "8. Vulnerability Assessment & CVSS", route: "/learning/cybersecurity/vulnerability-assessment" },
  { id: "network-security", name: "9. Network Security & Firewalls", route: "/learning/cybersecurity/network-security" },
  { id: "os-security", name: "10. OS Security & Hardening", route: "/learning/cybersecurity/os-security" },
  { id: "iam", name: "11. Identity & Access Management", route: "/learning/cybersecurity/iam" },
  { id: "cryptography", name: "12. Cryptography, PKI & TLS", route: "/learning/cybersecurity/cryptography" },
  { id: "web-security", name: "13. Web Architecture, Sessions & Browser Security", route: "/learning/cybersecurity/web-security" },
  { id: "owasp-top-10", name: "14. OWASP Top 10 & Injection Prevention", route: "/learning/cybersecurity/owasp-top-10" },
  { id: "auth-api-security", name: "15. Auth Flaws, Access Control & API Security", route: "/learning/cybersecurity/auth-api-security" },
  { id: "secure-code-review", name: "16. Secure Code Review & Testing", route: "/learning/cybersecurity/secure-code-review" },
  { id: "wireless-security", name: "17. Wireless Security & Wi-Fi Defense", route: "/learning/cybersecurity/wireless-security" },
  { id: "cloud-security", name: "18. Cloud Security, Containers & IAM", route: "/learning/cybersecurity/cloud-security" },
  { id: "malware-analysis", name: "19. Malware Analysis & Ransomware Defense", route: "/learning/cybersecurity/malware-analysis" },
  { id: "soc-siem", name: "20. Security Monitoring, SIEM & Forensics", route: "/learning/cybersecurity/soc-siem" },
  { id: "pentest-planning", name: "21. Pentest Planning, RoE & Evidence", route: "/learning/cybersecurity/pentest-planning" },
  { id: "red-blue-purple-teams", name: "22. Red, Blue & Purple Team Ops", route: "/learning/cybersecurity/red-blue-purple-teams" },
  { id: "pentest-reports", name: "23. Pentest Reports, CVSS v4 & Retesting", route: "/learning/cybersecurity/pentest-reports" },
  { id: "final-capstone", name: "24. Final Capstone: Security Assessment & Defense", route: "/learning/cybersecurity/final-capstone" },
];

export default function ModuleNav({
  track = "cloud",
  currentModuleId = "cloud",
  showAiTutor,
  onAiTutorToggle,
  aiTutorLabel,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  const scrollRef = useRef(null);

  const initialModules =
    track === "devops"
      ? DEVOPS_MODULES
      : track === "system-design"
      ? SYSTEM_DESIGN_MODULES
      : track === "os"
      ? OS_MODULES
      : track === "networks"
      ? NETWORKS_MODULES
      : track === "cybersecurity"
      ? CYBERSECURITY_MODULES
      : CLOUD_MODULES;

  const [modules, setModules] = useState(initialModules);

  const courseIdMap = {
    os: "operating-systems",
    networks: "computer-networks",
    cybersecurity: "cybersecurity",
    "system-design": "system-design",
    cloud: "cloud",
    devops: "devops",
  };
  const resolvedCourseId = courseIdMap[track] || track;

  const [accessState, setAccessState] = useState(() => getCachedCourseAccess(resolvedCourseId));
  const [completedModuleIds, setCompletedModuleIds] = useState(() => {
    const cached = getCachedCourseAccess(resolvedCourseId);
    return cached?.completedModuleIds || [];
  });
  const [advancing, setAdvancing] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Load authoritative access from backend
  const loadAccess = useCallback(async () => {
    const data = await getCourseAccess(resolvedCourseId);
    if (data) {
      setAccessState(data);
      if (Array.isArray(data.completedModuleIds)) {
        setCompletedModuleIds(data.completedModuleIds);
      }
    }
  }, [resolvedCourseId]);

  useEffect(() => {
    loadAccess();

    const handleUnlock = (e) => {
      if (!e.detail?.courseId || e.detail.courseId === resolvedCourseId) {
        loadAccess();
      }
    };

    window.addEventListener(UNLOCK_UPDATED_EVENT, handleUnlock);
    window.addEventListener(PROGRESS_UPDATED_EVENT, loadAccess);
    return () => {
      window.removeEventListener(UNLOCK_UPDATED_EVENT, handleUnlock);
      window.removeEventListener(PROGRESS_UPDATED_EVENT, loadAccess);
    };
  }, [resolvedCourseId, loadAccess]);

  useEffect(() => {
    let isMounted = true;
    getCourseModules(resolvedCourseId).then((data) => {
      if (isMounted && data && Array.isArray(data) && data.length > 0) {
        setModules(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [resolvedCourseId]);

  useEffect(() => {
    if (scrollRef.current) {
      const activeBtn = scrollRef.current.querySelector("[data-active='true']");
      if (activeBtn) {
        const timer = setTimeout(() => {
          activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }, 60);
        return () => clearTimeout(timer);
      }
    }
  }, [currentModuleId, modules]);

  // Automatic engagement completion:
  // When an authenticated student (or guest on free modules) visits an unlocked module,
  // automatically record completion as they explore lessons/content so the next module opens.
  useEffect(() => {
    if (!currentModuleId || !resolvedCourseId) return;

    // Only auto-complete if current module is unlocked
    const modIndex = modules.findIndex((m) => m.id === currentModuleId);
    const isUnlockedNow =
      modIndex < 6 ||
      (isAuthenticated &&
        (modIndex === 6 || (modIndex > 0 && completedModuleIds.includes(modules[modIndex - 1]?.id))));
    if (!isUnlockedNow) return;

    let completed = false;
    const triggerComplete = () => {
      if (completed) return;
      completed = true;
      autoCompleteModule(resolvedCourseId, currentModuleId);
    };

    // 1. Timer: after 2.5 seconds on the page
    const timer = setTimeout(triggerComplete, 2500);

    // 2. Interaction: scroll or click anywhere on the page
    const onInteraction = () => {
      triggerComplete();
      window.removeEventListener("scroll", onInteraction);
      window.removeEventListener("click", onInteraction);
    };

    window.addEventListener("scroll", onInteraction, { passive: true });
    window.addEventListener("click", onInteraction, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onInteraction);
      window.removeEventListener("click", onInteraction);
    };
  }, [currentModuleId, resolvedCourseId, modules, isAuthenticated, completedModuleIds]);

  const defaultFallback =
    currentModuleId === (track === "devops" ? "linux" : track === "system-design" ? "intro" : track === "os" ? "intro" : track === "networks" ? "intro" : track === "cybersecurity" ? "intro" : "cloud")
      ? "/learning"
      : track === "devops"
      ? "/learning/devops/linux"
      : track === "system-design"
      ? "/learning/system-design"
      : track === "os"
      ? "/learning/os"
      : track === "networks"
      ? "/learning/networks"
      : track === "cybersecurity"
      ? "/learning/cybersecurity"
      : "/learning/cloud";

  const { goBack } = useSafeBack(defaultFallback);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  // 1. Authoritative access check for current module
  const currentIdx = modules.findIndex((m) => m.id === currentModuleId);
  const isCurrentFirstSix = currentIdx >= 0 && currentIdx < 6;
  const isCurrentModuleSeven = currentIdx === 6;
  const currentPrevModId = currentIdx > 0 ? modules[currentIdx - 1]?.id : null;
  const currentPrevCompleted = currentPrevModId ? completedModuleIds.includes(currentPrevModId) : false;

  const currentModAccess = accessState?.modules?.find((m) => m.id === currentModuleId);
  const isCurrentUnlocked = currentModAccess
    ? currentModAccess.isUnlocked
    : (isCurrentFirstSix || (isAuthenticated && (isCurrentModuleSeven || currentPrevCompleted)));
  const isCurrentAuthRequired = currentModAccess
    ? Boolean(currentModAccess?.requiresAuth)
    : (!isCurrentFirstSix && !isAuthenticated);
  const currentIsCompleted = completedModuleIds.includes(currentModuleId);

  // Find next module in sequence
  const nextMod = currentIdx >= 0 && currentIdx + 1 < modules.length ? modules[currentIdx + 1] : null;
  const currentOrder = currentIdx >= 0 ? currentIdx + 1 : 1;

  // Handler to complete current module and advance
  const handleAdvance = async () => {
    if (advancing) return;
    setAdvancing(true);

    try {
      const res = await completeModule(resolvedCourseId, currentModuleId);

      if (res.promptAuthNow || res.requiresAuth) {
        setShowAuthModal(true);
      } else if (res.nextUnlockedModule) {
        const targetMod = modules.find((m) => m.id === res.nextUnlockedModule);
        if (targetMod && targetMod.route) {
          navigate(targetMod.route);
        } else if (nextMod && nextMod.route) {
          navigate(nextMod.route);
        }
      } else if (nextMod && nextMod.route) {
        navigate(nextMod.route);
      }
    } finally {
      setAdvancing(false);
    }
  };

  // =========================================================================
  // DIRECT URL BARRIER: If current module is locked (Module 7+ for guest), show barrier
  // =========================================================================
  if (!isCurrentUnlocked) {
    if (isCurrentAuthRequired && !isAuthenticated) {
      return (
        <div className="fixed inset-0 z-50 bg-[#f6f4ee] flex items-center justify-center p-4 sm:p-6 overflow-y-auto antialiased">
          <div className="relative z-10 max-w-lg w-full rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-9 text-center shadow-xl backdrop-blur-xl my-auto">
            <div className="mb-6 flex justify-center">
              <Logo size="md" />
            </div>

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-[#ea580c] shadow-sm">
              <Lock size={26} />
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-200/80 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-3">
              <Sparkles size={13} className="text-[#f97316]" />
              <span>Registration Required</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
              Unlock Module {currentOrder}: {currentModAccess?.name || "Advanced Module"}
            </h2>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-stone-600">
              You have completed the first 6 modules as an anonymous guest! To unlock Module 7 and preserve your learning progress, please sign in or create your free PrepSpaces account.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <Link
                to="/login"
                state={{ from: location.pathname }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f97316] py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-[#ea580c] active:scale-95 cursor-pointer"
              >
                <User size={16} />
                <span>Sign In to Unlock Module {currentOrder}</span>
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

    // Sequential Prerequisite Barrier
    const currentUnlockedMod = modules.find((m) => m.id === accessState.currentUnlockedModule);
    return (
      <div className="fixed inset-0 z-50 bg-[#f6f4ee] flex items-center justify-center p-4 sm:p-6 overflow-y-auto antialiased">
        <div className="relative z-10 max-w-md w-full rounded-3xl border border-[#e7e3da] bg-white/95 p-6 sm:p-8 text-center shadow-xl backdrop-blur-xl my-auto">
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
            Module {currentOrder} is Locked
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-stone-600">
            PrepSpaces courses follow a strict sequential curriculum. Please complete the previous module to unlock this content.
          </p>

          <div className="mt-6 flex flex-col gap-2.5">
            {currentUnlockedMod && currentUnlockedMod.route && (
              <button
                type="button"
                onClick={() => navigate(currentUnlockedMod.route)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f97316] py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-[#ea580c] active:scale-95 cursor-pointer"
              >
                <span>Continue from {currentUnlockedMod.name}</span>
                <ArrowRight size={15} />
              </button>
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

  // =========================================================================
  // NORMAL RENDER (CURRENT MODULE IS UNLOCKED)
  // =========================================================================
  return (
    <div className="w-full max-w-6xl mx-auto mb-4 sm:mb-8 flex flex-col gap-2.5 sm:gap-3">
      {/* Top Breadcrumb & User Actions */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 border-b border-[#e7e3da] pb-3 sm:pb-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goBack()}
            className="flex items-center gap-1.5 rounded-xl border border-[#e7e3da] bg-white/90 px-3.5 py-2 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs backdrop-blur-md active:scale-95 cursor-pointer"
            title="Go back to previous page"
            aria-label="Go back"
          >
            <ArrowLeft size={15} />
            <span>Back</span>
          </button>

          <button
            type="button"
            onClick={() => navigate("/learning")}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-xs font-semibold text-stone-500 hover:text-stone-900 transition cursor-pointer"
            title="Jump to Curriculum Overview"
          >
            <span>Curriculum Overview</span>
          </button>
        </div>

        {/* Right Header Status / Brand or User Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {isAuthenticated ? (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link
                to="/dashboard"
                className="flex items-center gap-1.5 rounded-xl border border-[#e7e3da] bg-white/90 px-2.5 py-1.5 sm:py-2 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-2xs backdrop-blur-md cursor-pointer"
                title="Go to Dashboard"
              >
                {user?.picture ? (
                  <img
                    src={user.picture}
                    alt=""
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover border border-orange-400"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#f97316] text-white flex items-center justify-center text-[10px] font-bold">
                    {user?.name?.charAt(0)?.toUpperCase() || "S"}
                  </div>
                )}
                <span className="hidden sm:inline font-bold">{user?.name?.split(" ")[0] || "Dashboard"}</span>
              </Link>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  logout();
                }}
                title="Log Out"
                aria-label="Log Out"
                className="flex items-center gap-1 rounded-xl border border-[#e7e3da] bg-white/90 px-2.5 py-1.5 sm:py-2 text-xs font-semibold text-stone-600 hover:text-red-600 hover:border-red-200 transition shadow-2xs backdrop-blur-md cursor-pointer active:scale-95"
              >
                <LogOut size={13} />
                <span className="hidden md:inline">Log Out</span>
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              state={{ from: location.pathname }}
              className="flex items-center gap-1.5 rounded-xl border border-[#e7e3da] bg-white/90 px-3 py-1.5 sm:py-2 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-2xs backdrop-blur-md cursor-pointer active:scale-95"
            >
              Sign In
            </Link>
          )}

          {SHOW_NOVA_AI && onAiTutorToggle ? (
            <button
              type="button"
              onClick={onAiTutorToggle}
              className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-bold transition shadow-xs backdrop-blur-md active:scale-95 ${
                showAiTutor
                  ? "border-[#f97316] bg-[#f97316] text-white shadow-orange-500/20"
                  : "border-[#e7e3da] bg-white/90 text-stone-700 hover:border-orange-300 hover:text-[#f97316]"
              }`}
            >
              <Sparkles size={14} className={showAiTutor ? "animate-pulse" : "text-[#f97316]"} />
              <span>{showAiTutor ? "Close Nova AI" : aiTutorLabel || "Ask Nova AI Tutor"}</span>
            </button>
          ) : (
            <Logo
              size="xs"
              suffix={
                track === "devops"
                  ? "DevOps"
                  : track === "system-design"
                  ? "System Design"
                  : track === "os"
                  ? "Operating Systems"
                  : track === "networks"
                  ? "Computer Networks"
                  : track === "cybersecurity"
                  ? "Cybersecurity"
                  : "Cloud"
              }
            />
          )}
        </div>
      </div>

      {/* Module Tabs Bar with Locks & Completed Badges */}
      <div className="relative flex items-center w-full min-w-0">
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll modules left"
          className="flex shrink-0 h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-white/90 text-stone-500 hover:text-stone-900 transition mr-1 sm:mr-1.5 shadow-2xs active:scale-95 cursor-pointer"
        >
          <ChevronLeft size={15} />
        </button>

        <div
          ref={scrollRef}
          className="flex-1 min-w-0 flex items-center gap-1.5 overflow-x-auto rounded-xl sm:rounded-2xl border border-[#e7e3da] bg-white/90 p-1 sm:p-1.5 shadow-2xs backdrop-blur-md scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {modules.map((mod, idx) => {
            const isActive = mod.id === currentModuleId;
            const isFirstSix = idx < 6;
            const isModuleSeven = idx === 6;
            const prevModId = idx > 0 ? modules[idx - 1]?.id : null;
            const prevCompleted = prevModId ? completedModuleIds.includes(prevModId) : false;

            const modAccess = accessState?.modules?.find((m) => m.id === mod.id);
            const isUnlocked = modAccess
              ? modAccess.isUnlocked
              : (isFirstSix || (isAuthenticated && (isModuleSeven || prevCompleted)));
            const isCompleted = completedModuleIds.includes(mod.id);
            const requiresAuth = modAccess ? Boolean(modAccess.requiresAuth) : (!isFirstSix && !isAuthenticated);

            return (
              <button
                key={mod.id}
                data-active={isActive ? "true" : undefined}
                onClick={async () => {
                  if (idx === currentIdx + 1 && !completedModuleIds.includes(currentModuleId)) {
                    await autoCompleteModule(resolvedCourseId, currentModuleId);
                  }
                  navigate(mod.route);
                }}
                className={`shrink-0 whitespace-nowrap rounded-lg sm:rounded-xl px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-xs font-bold transition-all duration-200 cursor-pointer min-h-[34px] sm:min-h-[38px] inline-flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#f97316] text-white shadow-sm shadow-orange-500/25"
                    : !isUnlocked
                    ? "text-stone-400 bg-stone-100/40 hover:bg-stone-100/80"
                    : "text-stone-600 hover:bg-stone-100/80 hover:text-stone-900"
                }`}
              >
                <span>{mod.name}</span>
                {isCompleted && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" title="Completed" />
                )}
                {!isUnlocked && (
                  <Lock size={11} className="opacity-60 shrink-0" title={requiresAuth ? "Registration Required" : "Prerequisite Required"} />
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => scroll("right")}
          aria-label="Scroll modules right"
          className="flex shrink-0 h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-white/90 text-stone-500 hover:text-stone-900 transition ml-1 sm:ml-1.5 shadow-2xs active:scale-95 cursor-pointer"
        >
          <ChevronRight size={15} />
        </button>
      </div>

      {/* COMPULSORY AUTH MODAL (POPS UP WHEN GUEST COMPLETES MODULE 6) */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 antialiased">
          <div className="relative max-w-md w-full rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 text-center shadow-2xl">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 p-1 rounded-lg text-stone-400 hover:text-stone-700 transition"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-[#ea580c]">
              <Sparkles size={26} />
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-200/80 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
              <span>Milestone: Modules 1–6 Completed!</span>
            </div>

            <h3 className="text-xl font-black text-stone-900 tracking-tight">
              Create Account to Unlock Module 7
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
              Congratulations! You've completed the first 6 modules as a guest. To unlock Module 7 and save your progress permanently, sign in or create your free account.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <Link
                to="/login"
                state={{ from: nextMod?.route || location.pathname }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f97316] py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-[#ea580c] cursor-pointer"
              >
                <User size={15} />
                <span>Continue to Sign In / Register</span>
                <ArrowRight size={14} />
              </Link>

              <button
                type="button"
                onClick={() => setShowAuthModal(false)}
                className="text-xs font-semibold text-stone-500 hover:text-stone-800 transition py-1 cursor-pointer"
              >
                Continue Reviewing Module 6
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
