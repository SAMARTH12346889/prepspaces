import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Lock,
  Unlock,
  Key,
  User,
  Users,
  Eye,
  EyeOff,
  AlertTriangle,
  Terminal,
  Activity,
  Server,
  Layers,
  FileCode,
  CheckCircle2,
  HelpCircle,
  Award,
  Sparkles,
  Workflow,
  Zap,
  Boxes,
  Clock,
  Timer,
  GitBranch,
  Copy,
  Check,
  CheckSquare,
  Sliders,
  RotateCcw,
  BarChart2,
  FolderTree,
  Folder,
  Globe,
  Radio,
  FileText,
  Search,
  HardDrive,
  Cpu,
  Power,
  PowerOff,
  SlidersHorizontal,
  Flame,
  AlertOctagon,
  Gauge,
  ZapOff,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 20                                 */
/* OS Security, Isolation and Reliability                                     */
/* Capabilities · Permissions · Namespaces · cgroups · seccomp · STRIDE       */
/* -------------------------------------------------------------------------- */

export default function OSSecurity() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [activeLesson, setActiveLesson] = useState("identities");
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  // Sync with global topic index
  useSyncedTopic(43);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: Linux Permissions, Capabilities & Privilege Escalation Engine */
  /* -------------------------------------------------------------------------- */
  const [procUid, setProcUid] = useState(1000); // 0 (root) or 1000 (user)
  const [filePerm, setFilePerm] = useState("640"); // 600, 640, 644, 755, 777
  const [setuidBit, setSetuidBit] = useState(false);
  const [selectedCaps, setSelectedCaps] = useState({
    CAP_NET_BIND_SERVICE: false,
    CAP_SYS_ADMIN: false,
    CAP_CHOWN: false,
    CAP_SETUID: false,
  });

  const toggleCap = (cap) => {
    setSelectedCaps((prev) => ({ ...prev, [cap]: !prev[cap] }));
  };

  const permMatrix = useMemo(() => {
    let effectiveUid = procUid;
    let riskLevel = "Low";
    let riskColor = "emerald";
    let warnings = [];

    if (procUid === 0) {
      riskLevel = "CRITICAL";
      riskColor = "red";
      warnings.push("Process runs as full root (UID 0). Compromise results in complete host takeover.");
    } else {
      if (setuidBit) {
        effectiveUid = 0; // setuid binary owned by root elevates to 0
        riskLevel = "HIGH";
        riskColor = "amber";
        warnings.push("setuid bit elevated effective UID from 1000 to 0 (root) upon execution!");
      }

      if (selectedCaps.CAP_SYS_ADMIN) {
        riskLevel = "HIGH";
        riskColor = "red";
        warnings.push("CAP_SYS_ADMIN grants near-root capabilities (mount, raw sockets, bpf, cgroup manipulation).");
      }

      if (selectedCaps.CAP_SETUID) {
        riskLevel = "HIGH";
        riskColor = "amber";
        warnings.push("CAP_SETUID allows process to switch arbitrarily to UID 0.");
      }

      if (filePerm === "777") {
        warnings.push("World-writable permissions (777) allow unprivileged local tampering.");
        if (riskLevel === "Low") {
          riskLevel = "MEDIUM";
          riskColor = "amber";
        }
      }
    }

    return {
      effectiveUid,
      riskLevel,
      riskColor,
      warnings,
    };
  }, [procUid, filePerm, setuidBit, selectedCaps]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: Process Isolation Sandbox Builder                             */
  /* -------------------------------------------------------------------------- */
  const [nsPid, setNsPid] = useState(true);
  const [nsNet, setNsNet] = useState(true);
  const [nsMount, setNsMount] = useState(true);
  const [cgroupMemLimit, setCgroupMemLimit] = useState(128); // MB
  const [cgroupPidLimit, setCgroupPidLimit] = useState(30); // max processes
  const [seccompFilter, setSeccompFilter] = useState("whitelist"); // none, whitelist, strict
  const [simulatedAttack, setSimulatedAttack] = useState("forkbomb"); // forkbomb, memleak, portscan, kexploit

  const sandboxOutcome = useMemo(() => {
    let contained = true;
    let failureReason = "";
    let defenseTrigger = "";

    if (simulatedAttack === "forkbomb") {
      if (cgroupPidLimit <= 50) {
        contained = true;
        defenseTrigger = `cgroup v2 pids.max (${cgroupPidLimit}) blocked fork() with EAGAIN. System remained responsive.`;
      } else {
        contained = false;
        failureReason = "Unbounded task allocation allowed fork bomb to exhaust kernel PID table (32,768 tasks).";
      }
    } else if (simulatedAttack === "memleak") {
      if (cgroupMemLimit <= 256) {
        contained = true;
        defenseTrigger = `cgroup v2 memory.max (${cgroupMemLimit} MB) triggered in-cgroup OOM killer. Host unaffected.`;
      } else {
        contained = false;
        failureReason = "High memory limit allowed rogue process to eat host RAM, causing system thrashing.";
      }
    } else if (simulatedAttack === "portscan") {
      if (nsNet) {
        contained = true;
        defenseTrigger = "Isolated network namespace has only loopback; host network interfaces are invisible.";
      } else {
        contained = false;
        failureReason = "Shared host network namespace allowed rogue container to sniff host interface eth0 traffic.";
      }
    } else if (simulatedAttack === "kexploit") {
      if (seccompFilter === "whitelist" || seccompFilter === "strict") {
        contained = true;
        defenseTrigger = "seccomp-bpf filter blocked unpermitted syscall (e.g. bpf() or ptrace()) with SIGSYS / EPERM.";
      } else {
        contained = false;
        failureReason = "Unrestricted seccomp filter allowed direct invocation of vulnerable kernel syscall interface.";
      }
    }

    return {
      contained,
      defenseTrigger,
      failureReason,
    };
  }, [simulatedAttack, nsPid, nsNet, nsMount, cgroupMemLimit, cgroupPidLimit, seccompFilter]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: DoS & Resource Exhaustion Defense Lab                         */
  /* -------------------------------------------------------------------------- */
  const [attackRps, setAttackRps] = useState(300); // 50 to 1000 req/s
  const [hasQueueLimit, setHasQueueLimit] = useState(true);
  const [hasRateLimiter, setHasRateLimiter] = useState(true);
  const [hasCpuQuota, setHasCpuQuota] = useState(true);

  const dosMetrics = useMemo(() => {
    const legitimateRps = 50;
    const serverCapacity = 120; // max sustainable req/s

    let effectiveAttackLoad = attackRps;
    if (hasRateLimiter) {
      effectiveAttackLoad = Math.min(attackRps, 30); // rate limiter sheds 90% of attack traffic
    }

    const totalArriving = legitimateRps + effectiveAttackLoad;
    let processedReqs = Math.min(totalArriving, serverCapacity);
    let queueLength = 0;
    let droppedReqs = 0;
    let serviceStatus = "Healthy & Responsive";
    let statusColor = "emerald";

    if (totalArriving > serverCapacity) {
      if (hasQueueLimit) {
        queueLength = 80; // max bounded queue
        droppedReqs = totalArriving - serverCapacity;
        serviceStatus = "Graceful Load Shedding (HTTP 429 / Backpressure)";
        statusColor = "amber";
      } else {
        queueLength = (totalArriving - serverCapacity) * 15;
        serviceStatus = "UNBOUNDED QUEUE COLLAPSE (OOM Crash / Tail Latency Explosion)";
        statusColor = "red";
      }
    }

    return {
      legitimateRps,
      effectiveAttackLoad,
      totalArriving,
      processedReqs,
      queueLength,
      droppedReqs,
      serviceStatus,
      statusColor,
    };
  }, [attackRps, hasQueueLimit, hasRateLimiter, hasCpuQuota]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: STRIDE Threat Modeling Engine                                 */
  /* -------------------------------------------------------------------------- */
  const [targetWorkload, setTargetWorkload] = useState("api"); // api, worker, devtool

  const strideModels = {
    api: {
      title: "Public Facing REST / gRPC API Service",
      asset: "Customer database, user credentials, API token secrets",
      threats: [
        {
          category: "Spoofing",
          risk: "Client impersonation using forged JWT headers or stolen bearer tokens.",
          defense: "Enforce cryptographic HMAC/RSA signature verification, short token expiry, and mTLS.",
        },
        {
          category: "Tampering",
          risk: "Man-in-the-middle packet tampering or parameter tampering in HTTP payload.",
          defense: "Mandate TLS 1.3, strict payload validation schemas, and database parameterized queries.",
        },
        {
          category: "Repudiation",
          risk: "Malicious user deletes financial records without audit trail.",
          defense: "Append-only structured audit logs sent to tamper-proof remote logging with cryptographic hashes.",
        },
        {
          category: "Information Disclosure",
          risk: "Stack trace and internal IP leakage in unhandled HTTP 500 error responses.",
          defense: "Sanitize production error handlers; store secrets in kernel keyrings, not environment variables.",
        },
        {
          category: "Denial of Service",
          risk: "Slowloris or connection exhaustion flood overwhelming socket accept queue.",
          defense: "Place behind reverse proxy (Nginx/Envoy), configure idle timeouts, and apply rate limiting.",
        },
        {
          category: "Elevation of Privilege",
          risk: "Remote Code Execution (RCE) via deserialization vulnerability running as root.",
          defense: "Run service as dedicated non-root UID (65534), drop all capabilities, and apply strict seccomp.",
        },
      ],
    },
    worker: {
      title: "Background Asynchronous Queue Worker",
      asset: "Message broker credentials, internal data pipelines, compute capacity",
      threats: [
        {
          category: "Spoofing",
          risk: "Rogue process publishes fraudulent tasks directly onto Redis/Kafka broker.",
          defense: "Enforce broker SASL/SCRAM authentication, TLS encryption, and ACLs on message topics.",
        },
        {
          category: "Tampering",
          risk: "Poison message payload containing arbitrary Python/PHP serialized objects.",
          defense: "Reject executable serialization formats (pickle/marshal); enforce JSON/Protobuf schemas.",
        },
        {
          category: "Repudiation",
          risk: "Worker skips task processing without registering an acknowledge receipt.",
          defense: "Two-phase commit message acknowledgment and dead-letter queue (DLQ) telemetry.",
        },
        {
          category: "Information Disclosure",
          risk: "Worker dumps entire decrypted customer payload into systemd journal logs.",
          defense: "Redact PII/credentials at logger level; restrict journal permissions with ACLs.",
        },
        {
          category: "Denial of Service",
          risk: "Zip bomb or memory bomb decompressed in memory causing OOM kill loop.",
          defense: "Enforce cgroup v2 memory.max, streaming decompression, and decompression ratio limits.",
        },
        {
          category: "Elevation of Privilege",
          risk: "Worker spawned with sudo permissions executes malicious binary from /tmp.",
          defense: "Mount /tmp with noexec,nosuid,nodev; run worker under dedicated unprivileged system account.",
        },
      ],
    },
    devtool: {
      title: "Local Developer Machine & Build Pipeline",
      asset: "Source code repository, developer SSH keys, cloud IAM credentials, host kernel",
      threats: [
        {
          category: "Spoofing",
          risk: "Typosquatting package on npm or PyPI posing as legitimate dependency.",
          defense: "Use lockfiles, checksum verification, and enterprise internal artifact proxies.",
        },
        {
          category: "Tampering",
          risk: "Post-install script modifies developer ~/.bashrc or injects backdoors into build artifacts.",
          defense: "Run builds in ephemeral container sandboxes with read-only root filesystems.",
        },
        {
          category: "Repudiation",
          risk: "Developer commits code using someone else's email address in Git config.",
          defense: "Enforce GPG or SSH commit signing across GitHub/GitLab repository branch protection rules.",
        },
        {
          category: "Information Disclosure",
          risk: "Accidental commit of .env file containing AWS secret access keys.",
          defense: "Install git pre-commit hooks (git-secrets, gitleaks); store keys in system credential keychain.",
        },
        {
          category: "Denial of Service",
          risk: "Test suite starts infinite loop or memory leak that freezes host desktop OS.",
          defense: "Run test runners inside systemd-run --user with CPUQuota=80% and MemoryMax=2G.",
        },
        {
          category: "Elevation of Privilege",
          risk: "Container build executes with docker.sock mounted, granting full host root access.",
          defense: "Use rootless Podman or Kaniko; never mount /var/run/docker.sock into untrusted containers.",
        },
      ],
    },
  };

  /* -------------------------------------------------------------------------- */
  /* ASSESSMENT QUIZ STATE                                                      */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "What is the main principle of least privilege?",
      options: [
        "Give every process root access",
        "Grant only the authority required for the task",
        "Disable all permissions",
        "Use one shared account for every service",
      ],
      correctAnswer: 1,
      explanation:
        "The Principle of Least Privilege (PoLP) dictates that any user, program, or process must possess only the minimum set of privileges, capabilities, and access rights essential to perform its intended function, minimizing damage in the event of compromise.",
    },
    {
      id: 2,
      question: "Which mechanism limits CPU or memory consumption by groups of processes?",
      options: [
        "Network namespaces alone",
        "cgroups",
        "File extensions",
        "Secure Boot alone",
      ],
      correctAnswer: 1,
      explanation:
        "Control Groups (cgroups, especially cgroup v2) provide resource accounting and hard/soft limits across CPU (cpu.max), memory (memory.max), process count (pids.max), and I/O bandwidth for collections of processes.",
    },
    {
      id: 3,
      question: "What does seccomp primarily help restrict?",
      options: [
        "System calls available to a process",
        "Every network packet on the entire network",
        "The firmware password",
        "All filesystem permissions automatically",
      ],
      correctAnswer: 0,
      explanation:
        "seccomp (Secure Computing Mode) uses BPF filters to intercept and restrict system calls at the kernel boundary, denying unneeded syscalls with EPERM, SIGSYS, or kill actions, dramatically reducing the exposed kernel attack surface.",
    },
    {
      id: 4,
      question: "What does Secure Boot help establish?",
      options: [
        "That all running applications are bug-free",
        "A configured chain of trust during boot",
        "That the machine can never be compromised",
        "That all backups are recoverable",
      ],
      correctAnswer: 1,
      explanation:
        "Secure Boot verifies cryptographic digital signatures on bootloaders, kernel images, and boot drivers against keys stored in firmware (UEFI db), ensuring only authorized and untampered code executes during the initial boot sequence.",
    },
    {
      id: 5,
      question: "Why should a security investigation preserve logs and timestamps?",
      options: [
        "To avoid documenting findings",
        "To support a reliable event timeline and investigation",
        "To prove every warning is malicious",
        "To eliminate the need for backups",
      ],
      correctAnswer: 1,
      explanation:
        "Preserving unmodified logs, metadata, and timestamps allows investigators to correlate events across authentication logs, system journals, and network connections, establishing a defensible chronological timeline of the incident.",
    },
    {
      id: 6,
      question: "What is the best approach to testing hardening changes?",
      options: [
        "Apply every change directly to a production host",
        "Disable all security controls first",
        "Use an authorized disposable environment, validate each change, and retain a recovery path",
        "Assume a successful reboot proves security",
      ],
      correctAnswer: 2,
      explanation:
        "Defensive engineering requires testing hardening controls in an isolated, disposable VM or staging environment with snapshot rollback capabilities, validating each change incrementally with evidence before production adoption.",
    },
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectQuiz = (qId, optionIdx) => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  }, [quizAnswers]);

  /* -------------------------------------------------------------------------- */
  /* MASTERY CHECKLIST STATE                                                    */
  /* -------------------------------------------------------------------------- */
  const [checklist, setChecklist] = useState({
    leastPrivilege: true,
    capabilities: true,
    filePerms: false,
    specialBits: false,
    namespacesCgroups: false,
    seccompFilters: false,
    secureBootIntegrity: false,
    dosAndStride: false,
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-[#ea580c]/15 selection:text-[#ea580c]">
      {/* Top Breadcrumb & Status Navigation */}
      <ModuleNav
        track="os"
        currentModuleId="security"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="Nova OS Tutor"
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* Hero Header Banner */}
        <div className="relative rounded-3xl bg-white border border-[#e7e3da] p-6 sm:p-10 shadow-xs overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#ea580c]/10 via-orange-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea580c]/10 text-[#ea580c] text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck size={14} />
                <span>Operating Systems Engineering · Module 20</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
                OS Security, Isolation and Reliability
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                Apply operating systems engineering to defense-in-depth: from Linux identities, capabilities, and POSIX ACLs to multi-layered process sandboxing (namespaces, cgroup v2, seccomp), UEFI Secure Boot integrity, denial-of-service mitigation, and systematic STRIDE threat modeling.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <button
                onClick={() => {
                  const el = document.getElementById("capstone-lab");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 font-medium text-sm transition-colors shadow-xs"
              >
                <Terminal size={16} />
                <span>Jump to Capstone Lab</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[#e7e3da]">
            <div className="space-y-1">
              <div className="text-xs uppercase font-medium text-stone-500">Privilege Model</div>
              <div className="text-lg font-bold text-stone-900 flex items-center gap-1.5">
                <Key size={16} className="text-[#ea580c]" />
                <span>PoLP & Capabilities</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs uppercase font-medium text-stone-500">Process Containment</div>
              <div className="text-lg font-bold text-stone-900 flex items-center gap-1.5">
                <Boxes size={16} className="text-[#ea580c]" />
                <span>cgroup v2 + seccomp</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs uppercase font-medium text-stone-500">Chain of Trust</div>
              <div className="text-lg font-bold text-stone-900 flex items-center gap-1.5">
                <Lock size={16} className="text-[#ea580c]" />
                <span>UEFI Secure Boot</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs uppercase font-medium text-stone-500">Threat Modeling</div>
              <div className="text-lg font-bold text-stone-900 flex items-center gap-1.5">
                <Shield size={16} className="text-[#ea580c]" />
                <span>STRIDE Framework</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#e7e3da] text-sm">
          {[
            { id: "identities", label: "1. Identities & Capabilities", icon: User },
            { id: "permissions", label: "2. Permissions, ACLs & Escalation", icon: Lock },
            { id: "isolation", label: "3. Namespaces, cgroups & seccomp", icon: Boxes },
            { id: "integrity", label: "4. Secure Boot & Integrity", icon: ShieldCheck },
            { id: "dos", label: "5. DoS & Overload Defense", icon: Sliders },
            { id: "auditing", label: "6. Auditing & Forensics", icon: FileText },
            { id: "threat_modeling", label: "7. STRIDE Threat Modeling", icon: ShieldAlert },
            { id: "capstone", label: "Capstone Lab", icon: Terminal },
            { id: "quiz", label: "Assessment (6Q)", icon: Award },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeLesson === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveLesson(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium whitespace-nowrap transition-all ${
                  active
                    ? "bg-[#ea580c] text-white shadow-xs"
                    : "bg-white hover:bg-stone-100 text-stone-600 border border-[#e7e3da]"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ================================================================== */}
        {/* LESSON 1: Identities, Capabilities, and Least Privilege           */}
        {/* ================================================================== */}
        {activeLesson === "identities" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Lesson 1</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  Users, Groups, Capabilities, and Least Privilege
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Linux security begins with identity. The kernel associates every process with a User ID (UID), Group ID (GID), supplementary groups, and a set of cryptographic capabilities that dictate what privileged system calls and kernel operations the process is permitted to perform.
                </p>
              </div>

              {/* SIMULATOR 1: Permissions, Capabilities & Privilege Escalation */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 sm:p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <Key size={18} className="text-[#ea580c]" />
                      <span>Interactive Simulator: Linux Privilege & Capabilities Matrix</span>
                    </h3>
                    <p className="text-xs text-stone-500">
                      Configure process credentials, file permission bits, and kernel capabilities to evaluate privilege boundaries and attack exposure.
                    </p>
                  </div>

                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    permMatrix.riskColor === "emerald"
                      ? "bg-emerald-100 text-emerald-800"
                      : permMatrix.riskColor === "amber"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    Assessed Threat Exposure: {permMatrix.riskLevel}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Controls Column 1: Identity */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-stone-700">Process Base Identity (Real UID):</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setProcUid(1000)}
                          className={`p-2.5 rounded-xl border text-xs font-medium transition-all ${
                            procUid === 1000
                              ? "bg-white border-[#ea580c] ring-1 ring-[#ea580c]/30 text-stone-900 font-bold"
                              : "bg-white/60 border-stone-200 text-stone-600 hover:bg-white"
                          }`}
                        >
                          UID 1000 (appuser)
                        </button>
                        <button
                          onClick={() => setProcUid(0)}
                          className={`p-2.5 rounded-xl border text-xs font-medium transition-all ${
                            procUid === 0
                              ? "bg-red-50 border-red-500 ring-1 ring-red-400 text-red-900 font-bold"
                              : "bg-white/60 border-stone-200 text-stone-600 hover:bg-white"
                          }`}
                        >
                          UID 0 (root)
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-stone-700">Executable Special Bit:</label>
                      <button
                        onClick={() => setSetuidBit(!setuidBit)}
                        className={`w-full p-2.5 rounded-xl border text-xs font-medium text-left transition-all ${
                          setuidBit
                            ? "bg-amber-50 border-amber-500 text-amber-950 font-bold"
                            : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>setuid bit enabled (chmod u+s)</span>
                          <span className="font-mono text-[10px]">{setuidBit ? "ACTIVE" : "OFF"}</span>
                        </div>
                        <div className="text-[10px] text-stone-500 font-normal mt-0.5">
                          Binary owned by root executes with effective root UID
                        </div>
                      </button>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-stone-700">Target Config File Permissions:</label>
                      <select
                        value={filePerm}
                        onChange={(e) => setFilePerm(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-stone-200 bg-white text-xs font-mono text-stone-800"
                      >
                        <option value="600">600 (-rw-------) Owner Read/Write only</option>
                        <option value="640">640 (-rw-r-----) Owner R/W, Group Read</option>
                        <option value="644">644 (-rw-r--r--) World Readable</option>
                        <option value="755">755 (-rwxr-xr-x) World Executable</option>
                        <option value="777">777 (-rwxrwxrwx) World Writable (Danger!)</option>
                      </select>
                    </div>
                  </div>

                  {/* Controls Column 2: Capabilities */}
                  <div className="space-y-3">
                    <label className="text-xs font-semibold text-stone-700">Granular Linux Capabilities:</label>
                    <div className="space-y-2">
                      {[
                        {
                          cap: "CAP_NET_BIND_SERVICE",
                          label: "Bind port < 1024",
                          desc: "Allows binding to privileged ports (80, 443) without full root.",
                        },
                        {
                          cap: "CAP_SYS_ADMIN",
                          label: "CAP_SYS_ADMIN (Near-Root)",
                          desc: "Broad administrative access (mounts, cgroups, raw sockets). High danger.",
                        },
                        {
                          cap: "CAP_CHOWN",
                          label: "CAP_CHOWN",
                          desc: "Arbitrary changes to file UID and GID ownership.",
                        },
                        {
                          cap: "CAP_SETUID",
                          label: "CAP_SETUID",
                          desc: "Arbitrary manipulation of process UIDs and effective IDs.",
                        },
                      ].map((item) => (
                        <div
                          key={item.cap}
                          onClick={() => toggleCap(item.cap)}
                          className={`p-2.5 rounded-xl border cursor-pointer text-xs transition-all ${
                            selectedCaps[item.cap]
                              ? "bg-white border-[#ea580c] ring-1 ring-[#ea580c]/30 text-stone-900 shadow-xs"
                              : "bg-white/60 border-stone-200 text-stone-600 hover:bg-white"
                          }`}
                        >
                          <div className="flex items-center justify-between font-mono font-bold">
                            <span>{item.cap}</span>
                            <span className="text-[10px] text-[#ea580c]">{selectedCaps[item.cap] ? "GRANTED" : "DROPPED"}</span>
                          </div>
                          <div className="text-[11px] text-stone-500 mt-0.5">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Live Privilege Status */}
                  <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-3">
                    <div className="text-xs font-bold text-stone-900 border-b border-stone-100 pb-2">
                      Effective Privilege Evaluation
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Real UID:</span>
                        <span className="font-mono font-bold">{procUid}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Effective UID (EUID):</span>
                        <span className={`font-mono font-bold ${permMatrix.effectiveUid === 0 ? "text-red-600" : "text-emerald-700"}`}>
                          {permMatrix.effectiveUid} ({permMatrix.effectiveUid === 0 ? "root" : "unprivileged"})
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Target File Access:</span>
                        <span className="font-mono text-stone-800">
                          {permMatrix.effectiveUid === 0 || filePerm === "777" ? "Full Read / Write" : filePerm === "640" ? "Read Only" : "Restricted"}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-stone-100">
                      <div className="text-[11px] font-bold text-stone-700">Security Audit Warnings:</div>
                      {permMatrix.warnings.length === 0 ? (
                        <div className="text-xs text-emerald-700 flex items-center gap-1.5">
                          <CheckCircle2 size={14} />
                          <span>Strict Least Privilege Maintained.</span>
                        </div>
                      ) : (
                        permMatrix.warnings.map((w, idx) => (
                          <div key={idx} className="text-[11px] text-red-700 flex items-start gap-1.5 leading-tight">
                            <AlertTriangle size={13} className="shrink-0 mt-0.5" />
                            <span>{w}</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 1.2 Inspection Commands */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-stone-900">1.2 Inspecting Linux Identities & Capabilities</h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "id\nwhoami\ngrep '^Cap' /proc/self/status\ncapsh --decode=$(grep '^CapEff' /proc/self/status | awk '{print $2}')\ngetcap -r /usr/bin 2>/dev/null",
                        "cmd-inspect-ids"
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                  >
                    {copiedSnippet === "cmd-inspect-ids" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedSnippet === "cmd-inspect-ids" ? "Copied!" : "Copy Commands"}</span>
                  </button>
                </div>

                <div className="rounded-2xl bg-[#1e1e2e] text-stone-200 p-5 font-mono text-xs overflow-x-auto space-y-3">
                  <div className="text-stone-400"># 1. Print current real, effective, and supplementary credentials</div>
                  <div className="text-emerald-400">$ id</div>
                  <div className="text-stone-300">
                    uid=1000(student) gid=1000(student) groups=1000(student),4(adm),24(cdrom),27(sudo)
                  </div>

                  <div className="text-stone-400 pt-2"># 2. Inspect capability bitmasks exposed in /proc/self/status</div>
                  <div className="text-emerald-400">$ grep '^Cap' /proc/self/status</div>
                  <div className="text-stone-300">
                    CapInh: 0000000000000000{"\n"}
                    CapPrm: 0000000000000000{"\n"}
                    CapEff: 0000000000000000{"\n"}
                    CapBnd: 000001ffffffffff{"\n"}
                    CapAmb: 0000000000000000
                  </div>

                  <div className="text-stone-400 pt-2"># 3. Find files on the system endowed with extended capabilities</div>
                  <div className="text-emerald-400">$ getcap -r /usr/bin 2&gt;/dev/null</div>
                  <div className="text-stone-300">
                    /usr/bin/ping cap_net_raw+ep{"\n"}
                    /usr/bin/mtr-packet cap_net_raw+ep
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 2: Permissions, ACLs & Privilege Escalation                */}
        {/* ================================================================== */}
        {activeLesson === "permissions" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Lesson 2</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  Permissions, ACLs, Privilege Escalation, and Attack Surfaces
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Discretionary Access Control (DAC) in Linux relies on 9 permission bits across owner, group, and others, augmented by special permission bits (setuid, setgid, sticky) and POSIX Access Control Lists (ACLs). Understanding where permission boundaries fail is the foundation of preventing privilege escalation.
                </p>
              </div>

              {/* 2.1 Special Permission Bits Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                  <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
                    <ShieldAlert size={18} className="text-[#ea580c]" />
                    <span>setuid (Bit 4000)</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    When executed, the process assumes the <em>effective user ID</em> of the file's owner rather than the caller.
                  </p>
                  <div className="p-2.5 rounded-xl bg-white border border-stone-200 font-mono text-[11px] text-stone-800">
                    -rwsr-xr-x 1 root root /usr/bin/passwd
                  </div>
                  <div className="text-xs text-red-600 font-medium">
                    ! Severe risk if applied to writable scripts or compilers.
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                  <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
                    <Users size={18} className="text-blue-600" />
                    <span>setgid (Bit 2000)</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    On directories, all newly created files inherit the parent directory's group ownership rather than the creator's primary GID.
                  </p>
                  <div className="p-2.5 rounded-xl bg-white border border-stone-200 font-mono text-[11px] text-stone-800">
                    drwxrws--- 2 root devs /srv/shared
                  </div>
                  <div className="text-xs text-emerald-700 font-medium">
                    ✓ Essential for team shared collaborative workspaces.
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                  <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
                    <Lock size={18} className="text-emerald-600" />
                    <span>Sticky Bit (Bit 1000)</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    On directories, users can only delete or rename files they own, even if the directory is world-writable (777).
                  </p>
                  <div className="p-2.5 rounded-xl bg-white border border-stone-200 font-mono text-[11px] text-stone-800">
                    drwxrwxrwt 15 root root /tmp
                  </div>
                  <div className="text-xs text-stone-500 font-medium">
                    Represented by trailing 't' on directory permissions.
                  </div>
                </div>
              </div>

              {/* 2.3 POSIX ACLs */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-stone-900">2.3 POSIX Access Control Lists (ACLs)</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Traditional Unix permissions only permit 1 owner and 1 group. POSIX ACLs allow granting explicit permissions to named users and groups without altering group memberships.
                </p>

                <div className="rounded-2xl bg-[#1e1e2e] text-stone-200 p-5 font-mono text-xs overflow-x-auto space-y-2">
                  <div className="text-stone-400"># 1. Grant named user 'auditor' read-only access to private log</div>
                  <div className="text-emerald-400">$ setfacl -m u:auditor:r-- /var/log/app.log</div>

                  <div className="text-stone-400 pt-2"># 2. Inspect ACL entries with getfacl</div>
                  <div className="text-emerald-400">$ getfacl /var/log/app.log</div>
                  <div className="text-stone-300">
                    # file: var/log/app.log{"\n"}
                    # owner: appuser{"\n"}
                    # group: appuser{"\n"}
                    user::rw-{"\n"}
                    user:auditor:r--{"\n"}
                    group::---{"\n"}
                    mask::r--{"\n"}
                    other::---
                  </div>
                </div>
              </div>

              {/* 2.4 Privilege Escalation Attack Surface Table */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-stone-900">2.4 Common Privilege Escalation Vectors & Mitigations</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700">
                        <th className="py-2.5 px-3 font-semibold">Vulnerability Vector</th>
                        <th className="py-2.5 px-3 font-semibold">How Attackers Exploit It</th>
                        <th className="py-2.5 px-3 font-semibold text-emerald-800">Hardening Mitigation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      <tr>
                        <td className="py-2.5 px-3 font-bold text-stone-900">Overly Permissive Sudo</td>
                        <td className="py-2.5 px-3 text-stone-600">sudo NOPASSWD on text editors (vim, less) with shell escapes</td>
                        <td className="py-2.5 px-3 text-stone-600">Audit sudoers with <code className="font-mono bg-stone-100 px-1">visudo</code>; restrict command arguments</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-bold text-stone-900">Writable Cron Scripts</td>
                        <td className="py-2.5 px-3 text-stone-600">Root crontab executes script located in world-writable directory</td>
                        <td className="py-2.5 px-3 text-stone-600">Ensure root scripts are owned by root:root and mode 750 or 700</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-bold text-stone-900">Wildcard Injection</td>
                        <td className="py-2.5 px-3 text-stone-600">tar * or chown * in root scripts exploited by filenames like --checkpoint=1</td>
                        <td className="py-2.5 px-3 text-stone-600">Avoid wildcards in privileged scripts; pass explicit file lists</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-bold text-stone-900">Shared /tmp Symlink Attacks</td>
                        <td className="py-2.5 px-3 text-stone-600">Attacker creates symlink in /tmp to /etc/shadow before root write</td>
                        <td className="py-2.5 px-3 text-stone-600">Enable kernel <code className="font-mono bg-stone-100 px-1">fs.protected_symlinks=1</code> and use <code className="font-mono bg-stone-100 px-1">mktemp</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 3: Process Isolation, Namespaces, cgroups & seccomp         */}
        {/* ================================================================== */}
        {activeLesson === "isolation" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Lesson 3</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  Process Isolation, Namespaces, cgroups, and seccomp
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Real container isolation is not a single feature; it is an orchestration of 4 independent kernel mechanisms: <strong>Namespaces</strong> (virtual views), <strong>cgroups</strong> (resource bounds), <strong>seccomp-bpf</strong> (system call filters), and <strong>LSMs</strong> (mandatory access control like AppArmor/SELinux).
                </p>
              </div>

              {/* SIMULATOR 2: Sandbox Builder Simulator */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 sm:p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <Boxes size={18} className="text-[#ea580c]" />
                      <span>Interactive Sandbox Builder: Namespaces + cgroup v2 + seccomp</span>
                    </h3>
                    <p className="text-xs text-stone-500">
                      Configure containment parameters and trigger malicious simulated payloads to verify sandbox defenses.
                    </p>
                  </div>

                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    sandboxOutcome.contained ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                  }`}>
                    {sandboxOutcome.contained ? "✓ Sandbox Contained Attack" : "✗ Container Breach / Host Escape"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Column 1: Namespaces & cgroups */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-stone-700">Linux Namespaces (Virtual Views):</label>
                      <div className="space-y-1.5">
                        {[
                          { label: "PID Namespace (Own PID 1)", state: nsPid, set: setNsPid },
                          { label: "Network Namespace (Isolated Net)", state: nsNet, set: setNsNet },
                          { label: "Mount Namespace (Isolated Chroot)", state: nsMount, set: setNsMount },
                        ].map((ns) => (
                          <button
                            key={ns.label}
                            onClick={() => ns.set(!ns.state)}
                            className={`w-full p-2 rounded-xl border text-xs font-medium text-left flex items-center justify-between ${
                              ns.state ? "bg-white border-[#ea580c] text-stone-900 shadow-xs" : "bg-white/60 border-stone-200 text-stone-500"
                            }`}
                          >
                            <span>{ns.label}</span>
                            <span className="font-mono text-[10px]">{ns.state ? "ENABLED" : "OFF"}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold text-stone-700">
                        <span>cgroup v2 memory.max:</span>
                        <span className="font-mono text-[#ea580c]">{cgroupMemLimit} MB</span>
                      </div>
                      <input
                        type="range"
                        min="64"
                        max="512"
                        step="64"
                        value={cgroupMemLimit}
                        onChange={(e) => setCgroupMemLimit(Number(e.target.value))}
                        className="w-full accent-[#ea580c] cursor-pointer"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold text-stone-700">
                        <span>cgroup v2 pids.max:</span>
                        <span className="font-mono text-blue-600">{cgroupPidLimit} tasks</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        step="5"
                        value={cgroupPidLimit}
                        onChange={(e) => setCgroupPidLimit(Number(e.target.value))}
                        className="w-full accent-blue-600 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Column 2: seccomp Profile & Payload */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-stone-700">seccomp-bpf Syscall Filter:</label>
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          { id: "none", label: "None (All 450+ syscalls allowed)", desc: "Exposes full kernel attack surface." },
                          { id: "whitelist", label: "Default Container Whitelist", desc: "Blocks bpf, ptrace, reboot, mount, kexec." },
                          { id: "strict", label: "Strict Mode (read, write, exit)", desc: "Allows only pure computational tasks." },
                        ].map((f) => (
                          <button
                            key={f.id}
                            onClick={() => setSeccompFilter(f.id)}
                            className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                              seccompFilter === f.id
                                ? "bg-white border-[#ea580c] ring-1 ring-[#ea580c]/30 text-stone-900 shadow-xs"
                                : "bg-white/60 border-stone-200 text-stone-600 hover:bg-white"
                            }`}
                          >
                            <div className="font-bold">{f.label}</div>
                            <div className="text-[10px] text-stone-500 mt-0.5">{f.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-stone-700">Trigger Simulated Attack Payload:</label>
                      <select
                        value={simulatedAttack}
                        onChange={(e) => setSimulatedAttack(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-stone-200 bg-white text-xs font-semibold text-stone-800"
                      >
                        <option value="forkbomb">{"Payload 1: Recursive Fork Bomb (:(){|:&};:)"}</option>
                        <option value="memleak">Payload 2: 1 GB Memory Allocator Leak</option>
                        <option value="portscan">Payload 3: Host Network Port Sniffing</option>
                        <option value="kexploit">Payload 4: Vulnerable bpf() System Call Exploit</option>
                      </select>
                    </div>
                  </div>

                  {/* Column 3: Live Containment Analysis */}
                  <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-3">
                    <div className="text-xs font-bold text-stone-900 border-b border-stone-100 pb-2">
                      Sandbox Defense Verification
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Active Test:</span>
                        <span className="font-mono font-bold text-stone-800">{simulatedAttack}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Defense Verdict:</span>
                        <span className={`font-mono font-bold ${sandboxOutcome.contained ? "text-emerald-700" : "text-red-600"}`}>
                          {sandboxOutcome.contained ? "PASSED" : "FAILED"}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                      <div className="font-bold text-stone-800">
                        {sandboxOutcome.contained ? "Defense Mechanism Engaged:" : "Root Cause of Breach:"}
                      </div>
                      <p className="text-stone-600 text-[11px] leading-relaxed">
                        {sandboxOutcome.contained ? sandboxOutcome.defenseTrigger : sandboxOutcome.failureReason}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 4: Secure Boot & Kernel Integrity                           */}
        {/* ================================================================== */}
        {activeLesson === "integrity" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Lesson 4</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  Secure Boot, Kernel Integrity, and Patch Management
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Security must be anchored in hardware. The Secure Boot trust chain guarantees that firmware, bootloaders, and kernel binaries have not been tampered with before execution begins.
                </p>
              </div>

              {/* Chain of Trust Diagram */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                <h3 className="text-base font-bold text-stone-900">The Cryptographic Chain of Trust</h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {[
                    {
                      step: "1. UEFI Firmware",
                      sub: "Hardware Root of Trust",
                      desc: "Stores public keys (PK, KEK, db). Verifies signature of Microsoft-signed Shim bootloader.",
                    },
                    {
                      step: "2. Shim / GRUB",
                      sub: "Verified Bootloader",
                      desc: "Validates digital signature of the Linux kernel binary (vmlinuz) using distribution keys or MOK.",
                    },
                    {
                      step: "3. Signed Kernel",
                      sub: "Kernel Integrity Mode",
                      desc: "Kernel enforces Lockdown mode. Restricts raw memory access (/dev/mem) and debug registers.",
                    },
                    {
                      step: "4. Kernel Modules",
                      sub: "Cryptographic Enforcement",
                      desc: "Kernel requires all dynamically loaded device driver modules (.ko) to be signed by trusted private key.",
                    },
                  ].map((s) => (
                    <div key={s.step} className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5">
                      <div className="text-xs font-bold text-stone-900">{s.step}</div>
                      <div className="text-[10px] font-semibold text-[#ea580c] uppercase">{s.sub}</div>
                      <p className="text-[11px] text-stone-600 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Patch Management Workflow */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xl font-bold text-stone-900">Safe Enterprise Patch Management Protocol</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                    <strong>1. Inventory & Advisory Review:</strong> Track active CVEs against kernel version with <code className="font-mono bg-stone-100 px-1">uname -r</code>.
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                    <strong>2. Staging Validation:</strong> Apply patches in disposable VM with identical workloads before production rollouts.
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                    <strong>3. Backup & Snapshot:</strong> Take hypervisor or LVM snapshot to ensure immediate single-command rollback.
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1">
                    <strong>4. Reboot Verification:</strong> A patched kernel package does NOT protect until system reboots into the new binary.
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 5: DoS & Resource Exhaustion Defenses                        */}
        {/* ================================================================== */}
        {activeLesson === "dos" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Lesson 5</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  Resource Exhaustion and Denial-of-Service Defenses
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Denial of Service (DoS) is not merely a network attack; it occurs whenever unbounded workloads exhaust CPU, RAM, file descriptors, process tables, or queue depth. Reliable operating systems implement explicit bounds and graceful load shedding.
                </p>
              </div>

              {/* SIMULATOR 3: DoS & Resource Exhaustion Defense Lab */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 sm:p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <Sliders size={18} className="text-[#ea580c]" />
                      <span>Interactive Simulator: DoS Defense & Graceful Degradation</span>
                    </h3>
                    <p className="text-xs text-stone-500">
                      Inject attack request traffic and observe how bounded queues, rate limiters, and CPU quotas protect availability.
                    </p>
                  </div>

                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    dosMetrics.statusColor === "emerald"
                      ? "bg-emerald-100 text-emerald-800"
                      : dosMetrics.statusColor === "amber"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {dosMetrics.serviceStatus}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold text-stone-700">
                        <span>Incoming Attack Traffic Load:</span>
                        <span className="font-mono text-red-600 font-bold">{attackRps} req/s</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="1000"
                        step="50"
                        value={attackRps}
                        onChange={(e) => setAttackRps(Number(e.target.value))}
                        className="w-full accent-red-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                        <span>50 req/s</span>
                        <span>Capacity: 120 req/s</span>
                        <span>1,000 req/s</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <label className="text-xs font-semibold text-stone-700">Active Defensive Controls:</label>
                      <button
                        onClick={() => setHasRateLimiter(!hasRateLimiter)}
                        className={`w-full p-2.5 rounded-xl border text-xs text-left font-medium flex items-center justify-between ${
                          hasRateLimiter ? "bg-white border-[#ea580c] text-stone-900 shadow-xs" : "bg-white/60 border-stone-200 text-stone-500"
                        }`}
                      >
                        <span>Token Bucket Rate Limiter</span>
                        <span className="font-mono text-[10px]">{hasRateLimiter ? "ACTIVE" : "OFF"}</span>
                      </button>
                      <button
                        onClick={() => setHasQueueLimit(!hasQueueLimit)}
                        className={`w-full p-2.5 rounded-xl border text-xs text-left font-medium flex items-center justify-between ${
                          hasQueueLimit ? "bg-white border-[#ea580c] text-stone-900 shadow-xs" : "bg-white/60 border-stone-200 text-stone-500"
                        }`}
                      >
                        <span>Bounded Queue (Backpressure)</span>
                        <span className="font-mono text-[10px]">{hasQueueLimit ? "ACTIVE" : "OFF"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Realtime Performance Telemetry */}
                  <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-3">
                    <div className="text-xs font-bold text-stone-900 border-b border-stone-100 pb-2">
                      Live Telemetry Dashboard
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Legitimate Users Served:</span>
                        <span className="font-mono font-bold text-emerald-700">{dosMetrics.legitimateRps} req/s (100%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Effective Processed Throughput:</span>
                        <span className="font-mono font-bold text-stone-900">{dosMetrics.processedReqs} req/s</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Active Queue Depth:</span>
                        <span className={`font-mono font-bold ${dosMetrics.queueLength > 70 ? "text-amber-600" : "text-stone-800"}`}>
                          {dosMetrics.queueLength} tasks
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Attack Traffic Shed / Dropped:</span>
                        <span className="font-mono font-bold text-red-600">{dosMetrics.droppedReqs} req/s</span>
                      </div>
                    </div>
                  </div>

                  {/* Defensive Philosophy */}
                  <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 text-xs">
                    <div className="font-bold text-stone-900">Engineering Principle: Graceful Degradation</div>
                    <p className="text-stone-600 leading-relaxed text-[11px]">
                      The goal of system reliability is not to achieve infinite throughput under malicious floods. It is to enforce hard bounds, reject excess work with HTTP 429 / 503 errors, and guarantee that legitimate users and health-check monitoring retain system resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 6: Auditing, Logs & Forensics                              */}
        {/* ================================================================== */}
        {activeLesson === "auditing" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Lesson 6</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  Auditing, Logs, Incident Investigation, and Recovery
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Security is incomplete without auditability and incident recovery. When an intrusion occurs, responders must stabilize the workload, preserve forensically sound evidence, establish an exact timeline, and execute verified restoration procedures.
                </p>
              </div>

              {/* 7-Step Incident Response Workflow */}
              <div className="grid grid-cols-1 sm:grid-cols-7 gap-2">
                {[
                  { n: 1, title: "1. Stabilize", sub: "Isolate network; preserve service health" },
                  { n: 2, title: "2. Preserve", sub: "Hash logs; save volatile RAM data" },
                  { n: 3, title: "3. Scope", sub: "Identify affected accounts & hosts" },
                  { n: 4, title: "4. Timeline", sub: "Correlate journal, auth & network logs" },
                  { n: 5, title: "5. Remediate", sub: "Revoke credentials; patch vulns" },
                  { n: 6, title: "6. Recover", sub: "Restore from verified air-gapped backup" },
                  { n: 7, title: "7. Post-Mortem", sub: "Document root causes; harden controls" },
                ].map((step) => (
                  <div key={step.n} className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                    <div className="font-bold text-[#ea580c]">{step.title}</div>
                    <div className="text-[10px] text-stone-500 leading-tight">{step.sub}</div>
                  </div>
                ))}
              </div>

              {/* Forensic Diagnostic Commands */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-stone-900">6.2 Forensic Log Investigation Commands</h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "journalctl -b --no-pager\njournalctl -p warning -b --no-pager\njournalctl -u ssh --since '2 hours ago'\nlast -F -n 10\nsha256sum /var/log/auth.log",
                        "cmd-forensic-logs"
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                  >
                    {copiedSnippet === "cmd-forensic-logs" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedSnippet === "cmd-forensic-logs" ? "Copied!" : "Copy Commands"}</span>
                  </button>
                </div>

                <div className="rounded-2xl bg-[#1e1e2e] text-stone-200 p-5 font-mono text-xs overflow-x-auto space-y-2">
                  <div className="text-stone-400"># 1. Inspect authentication failures in current boot session</div>
                  <div className="text-emerald-400">$ journalctl -u ssh -p err..warning --since "1 hour ago"</div>

                  <div className="text-stone-400 pt-2"># 2. Inspect kernel ring buffer for segfaults and OOM kill events</div>
                  <div className="text-emerald-400">$ journalctl -k -b | grep -E "Out of memory|segfault"</div>

                  <div className="text-stone-400 pt-2"># 3. Cryptographically hash log files for forensic chain of custody</div>
                  <div className="text-emerald-400">$ sha256sum /var/log/auth.log &gt; /mnt/evidence/auth.log.sha256</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 7: STRIDE Threat Modeling                                   */}
        {/* ================================================================== */}
        {activeLesson === "threat_modeling" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Lesson 7</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  Threat Modeling for Local and Server Workloads
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Threat modeling prevents security from being an arbitrary list of hardening commands. The STRIDE framework systematically identifies threats across Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege.
                </p>
              </div>

              {/* SIMULATOR 4: STRIDE Threat Modeling Engine */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 sm:p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <ShieldAlert size={18} className="text-[#ea580c]" />
                      <span>Interactive STRIDE Workload Threat Model</span>
                    </h3>
                    <p className="text-xs text-stone-500">
                      Select an application architecture to evaluate trust boundaries and defense-in-depth controls.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {[
                      { id: "api", label: "Public REST API" },
                      { id: "worker", label: "Queue Worker" },
                      { id: "devtool", label: "Developer Workstation" },
                    ].map((w) => (
                      <button
                        key={w.id}
                        onClick={() => setTargetWorkload(w.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                          targetWorkload === w.id
                            ? "bg-[#ea580c] text-white"
                            : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        {w.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs">
                    <div className="font-bold text-stone-900">{strideModels[targetWorkload].title}</div>
                    <div className="text-stone-500 mt-0.5">Critical Assets: {strideModels[targetWorkload].asset}</div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {strideModels[targetWorkload].threats.map((t) => (
                      <div key={t.category} className="p-4 rounded-xl bg-white border border-stone-200 space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#ea580c] uppercase">{t.category}</span>
                        </div>
                        <div className="text-stone-700 font-medium">
                          <span className="text-stone-400">Threat:</span> {t.risk}
                        </div>
                        <div className="text-emerald-800 bg-emerald-50/70 p-2 rounded-lg border border-emerald-200 text-[11px] leading-relaxed">
                          <strong>Defense:</strong> {t.defense}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* CAPSTONE LAB: Harden a Disposable Linux Environment               */}
        {/* ================================================================== */}
        {activeLesson === "capstone" && (
          <section id="capstone-lab" className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Defensive Security Lab</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  Harden a Disposable Linux Environment
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Execute an end-to-end security assessment across Phase A (Baseline Inventory), Phase B (Permissions Audit), Phase C (Controlled Hardening), Phase D (8-Point Checklist Validation), and Phase E (Assessment Report).
                </p>
              </div>

              {/* Hardening Script Template */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">Controlled Service Hardening Unit (systemd)</h3>
                    <p className="text-xs text-stone-500">
                      Production service sandbox with non-root UID, dropped capabilities, restricted syscalls, and resource ceilings.
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `[Unit]\nDescription=Hardened Secure Microservice\nAfter=network.target\n\n[Service]\n# 1. Identity & Least Privilege\nUser=appsvc\nGroup=appsvc\nDynamicUser=yes\n\n# 2. Filesystem Protection\nProtectSystem=strict\nProtectHome=yes\nReadOnlyPaths=/\nReadWritePaths=/var/log/appsvc\nPrivateTmp=yes\n\n# 3. Kernel & Device Sandboxing\nProtectKernelTunables=yes\nProtectKernelModules=yes\nProtectControlGroups=yes\nNoNewPrivileges=yes\n\n# 4. Capabilities (Drop ALL except port binding)\nCapabilityBoundingSet=CAP_NET_BIND_SERVICE\nAmbientCapabilities=CAP_NET_BIND_SERVICE\n\n# 5. System Call Filtering\nSystemCallFilter=@system-service\nSystemCallFilter=~@privileged @resources\n\n# 6. cgroup v2 Resource Bounds\nMemoryMax=128M\nTasksMax=30\nCPUQuota=50%\n\nExecStart=/usr/local/bin/appsvc\nRestart=on-failure\n\n[Install]\nWantedBy=multi-user.target\n`,
                        "hardened-service-unit"
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                  >
                    {copiedSnippet === "hardened-service-unit" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span>{copiedSnippet === "hardened-service-unit" ? "Copied!" : "Copy hardened.service"}</span>
                  </button>
                </div>

                <div className="rounded-2xl bg-[#1e1e2e] text-stone-200 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="text-stone-300">
{`# /etc/systemd/system/hardened.service
[Unit]
Description=Hardened Secure Microservice
After=network.target

[Service]
# Identity: Dedicated non-root account
User=appsvc
Group=appsvc

# Filesystem Sandboxing: Strict read-only rootfs
ProtectSystem=strict
ProtectHome=yes
ReadOnlyPaths=/
ReadWritePaths=/var/log/appsvc
PrivateTmp=yes

# Capabilities: Drop all superuser powers except port 80/443 binding
CapabilityBoundingSet=CAP_NET_BIND_SERVICE
AmbientCapabilities=CAP_NET_BIND_SERVICE
NoNewPrivileges=yes

# Syscall Filtering via seccomp-bpf
SystemCallFilter=@system-service
SystemCallFilter=~@privileged @resources

# cgroup v2 Resource Ceilings
MemoryMax=128M
TasksMax=30
CPUQuota=50%

ExecStart=/usr/local/bin/appsvc`}
                  </pre>
                </div>
              </div>

              {/* Phase D Validation Checklist */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-stone-900">Phase D — 8-Point Security Validation Plan</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {[
                    { title: "1. Identity Verification", desc: "Confirm service uses UID 1000+ and does not execute as root." },
                    { title: "2. File Permissions", desc: "Confirm unauthorized test users cannot read or modify protected configs." },
                    { title: "3. Network Exposure", desc: "Verify with ss -lntup that only designated ports (e.g. 9000) listen." },
                    { title: "4. Resource Limits", desc: "Verify fork-bomb payload is throttled by TasksMax=30." },
                    { title: "5. Isolation & Sandboxing", desc: "Inspect PrivateTmp=yes to ensure /tmp namespace isolation." },
                    { title: "6. Patch & Kernel Status", desc: "Verify kernel version with uname -r and check pending advisories." },
                    { title: "7. Logging Verification", desc: "Generate harmless test event; confirm recording in journalctl -u." },
                    { title: "8. Recovery Drill", desc: "Revert lab change or restore VM snapshot and verify service health." },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                      <div className="font-bold text-stone-900">{item.title}</div>
                      <p className="text-stone-600 text-[11px]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* KNOWLEDGE ASSESSMENT (6 QUESTIONS)                                 */}
        {/* ================================================================== */}
        {activeLesson === "quiz" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#ea580c]">Knowledge Assessment</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                    Module 20 Mastery Exam
                  </h2>
                  <p className="text-xs text-stone-500">
                    6 comprehensive engineering questions · 1 point each · Instant architectural verification
                  </p>
                </div>

                {showQuizResults && (
                  <div className="px-4 py-2 rounded-2xl bg-stone-900 text-white font-mono text-sm flex items-center gap-2">
                    <Award size={16} className="text-[#ea580c]" />
                    <span>Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)</span>
                  </div>
                )}
              </div>

              <div className="space-y-6 pt-2">
                {quizQuestions.map((q, idx) => {
                  const userAnswer = quizAnswers[q.id];
                  const hasAnswered = userAnswer !== undefined;
                  const isCorrect = userAnswer === q.correctAnswer;

                  return (
                    <div key={q.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-3">
                      <div className="font-bold text-sm text-stone-900">
                        {idx + 1}. {q.question}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map((opt, optIdx) => {
                          let optClasses = "p-3 rounded-xl border text-xs text-left transition-all ";
                          if (!showQuizResults) {
                            optClasses +=
                              userAnswer === optIdx
                                ? "bg-white border-[#ea580c] ring-1 ring-[#ea580c]/30 text-stone-900 font-semibold shadow-xs"
                                : "bg-white border-stone-200 hover:bg-stone-50 text-stone-700";
                          } else {
                            if (optIdx === q.correctAnswer) {
                              optClasses += "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold";
                            } else if (userAnswer === optIdx && !isCorrect) {
                              optClasses += "bg-red-50 border-red-500 text-red-950 font-semibold";
                            } else {
                              optClasses += "bg-white/60 border-stone-200 text-stone-500 opacity-60";
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => !showQuizResults && handleSelectQuiz(q.id, optIdx)}
                              className={optClasses}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {showQuizResults && (
                        <div className={`p-3 rounded-xl text-xs space-y-1 ${isCorrect ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-900"}`}>
                          <div className="font-bold">{isCorrect ? "✓ Correct!" : "✗ Incorrect"}</div>
                          <p className="leading-relaxed">{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#e7e3da]">
                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setShowQuizResults(false);
                  }}
                  className="px-4 py-2 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 text-xs font-medium"
                >
                  Reset Answers
                </button>

                <button
                  onClick={() => setShowQuizResults(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className="px-5 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#ea580c]/90 disabled:opacity-50 text-white font-medium text-xs shadow-xs"
                >
                  Check Answers
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* MASTERY CHECKLIST & SUMMARY                                        */}
        {/* ================================================================== */}
        <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
              <CheckSquare size={20} className="text-[#ea580c]" />
              <span>Module 20 Systems Engineering Mastery Checklist</span>
            </h3>
            <p className="text-xs text-stone-500">
              Track your conceptual and hands-on comprehension of Linux security and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { key: "leastPrivilege", label: "Apply the Principle of Least Privilege across UIDs, GIDs, and service accounts" },
              { key: "capabilities", label: "Inspect and drop Linux capabilities (CAP_SYS_ADMIN, CAP_NET_BIND_SERVICE)" },
              { key: "filePerms", label: "Audit file permissions, octal modes (640, 750), umask, and directory execute bits" },
              { key: "specialBits", label: "Identify privilege escalation risks from setuid, setgid, and sticky bits" },
              { key: "namespacesCgroups", label: "Enforce process resource ceilings using cgroup v2 (cpu.max, memory.max, pids.max)" },
              { key: "seccompFilters", label: "Restrict kernel attack surface with seccomp-bpf system call filters" },
              { key: "secureBootIntegrity", label: "Explain the UEFI Secure Boot chain of trust, signed kernels, and patch workflows" },
              { key: "dosAndStride", label: "Construct STRIDE threat models and design bounded queue DoS defenses" },
            ].map((item) => (
              <div
                key={item.key}
                onClick={() => toggleChecklist(item.key)}
                className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer select-none transition-all ${
                  checklist[item.key]
                    ? "bg-emerald-50/50 border-emerald-300 text-stone-900"
                    : "bg-stone-50/50 border-stone-200 text-stone-600 hover:bg-white"
                }`}
              >
                <div className={`mt-0.5 rounded-md p-0.5 ${checklist[item.key] ? "bg-emerald-600 text-white" : "border border-stone-300 bg-white"}`}>
                  <Check size={12} className={checklist[item.key] ? "opacity-100" : "opacity-0"} />
                </div>
                <span className="text-xs leading-relaxed font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Navigation Bar */}
        <div className="pt-6 border-t border-[#e7e3da] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/os/networking")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 font-medium text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 19 (OS Networking & Network I/O)</span>
          </button>

          <button
            onClick={() => navigate("/learning/os/advanced-sync")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-sm transition-colors shadow-xs"
          >
            <span>Next: Module 21 (Advanced Synchronization & Multiprocessor)</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        title="Nova OS Intelligence: Security, Isolation & Reliability"
        defaultMessage="Hello! Ask me any question about Linux capabilities, file permissions, setuid binaries, cgroup v2 limits, seccomp filters, Secure Boot, DoS overload controls, or STRIDE threat modeling!"
      />
    </div>
  );
}
