import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Lock,
  Unlock,
  Server,
  Terminal,
  FileText,
  ExternalLink,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Filter,
  Eye,
  Zap,
  Layers,
  Cpu,
  Database,
  Network,
  Activity,
  Search,
  BookOpen,
  Sliders,
  Play,
  Check,
  X,
  Info,
  Target,
  GitBranch,
  ArrowUpRight,
  Copy,
  Globe,
  Radio,
  Clock,
  AlertOctagon,
  Laptop,
  Key,
  HardDrive,
  UserCheck,
  Users,
  Settings
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function CybersecurityOSSecurity() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(10);

  // Tab State
  const [activeTab, setActiveTab] = useState("theory"); // theory | labs | case-study | assessment | capstone
  const [selectedLesson, setSelectedLesson] = useState(1);

  // ==========================================
  // LAB 1: LINUX USER & GROUP AUDIT STATE
  // ==========================================
  const initialAccounts = [
    {
      id: "u1",
      user: "alice",
      uid: 1001,
      gid: 1001,
      groups: ["developers"],
      shell: "/bin/bash",
      sudo: false,
      status: "compliant",
      risk: "Low",
      issue: "Standard developer account with appropriate group membership."
    },
    {
      id: "u2",
      user: "dev_test",
      uid: 1002,
      gid: 1002,
      groups: ["developers", "sudo", "docker"],
      shell: "/bin/bash",
      sudo: true,
      status: "critical",
      risk: "Critical",
      issue: "Orphaned shared test account in sudo and docker groups without owner."
    },
    {
      id: "u3",
      user: "backup_svc",
      uid: 998,
      gid: 998,
      groups: ["backup", "wheel"],
      shell: "/bin/bash",
      sudo: true,
      status: "high",
      risk: "High",
      issue: "System service account has interactive login shell and wheel administrative rights."
    },
    {
      id: "u4",
      user: "charlie",
      uid: 1003,
      gid: 1003,
      groups: ["qa"],
      shell: "/bin/bash",
      sudo: false,
      status: "compliant",
      risk: "Low",
      issue: "Standard QA account with restricted permissions."
    }
  ];
  const [accounts, setAccounts] = useState(initialAccounts);

  const remediateAccount = (id, newShell, removeSudo) => {
    setAccounts((prev) =>
      prev.map((acc) =>
        acc.id === id
          ? {
              ...acc,
              shell: newShell,
              groups: removeSudo
                ? acc.groups.filter((g) => g !== "sudo" && g !== "wheel" && g !== "docker")
                : acc.groups,
              sudo: !removeSudo && acc.sudo,
              status: "remediated",
              risk: "Low",
              issue: "Remediated: Non-interactive shell set and administrative groups revoked."
            }
          : acc
      )
    );
  };

  // ==========================================
  // LAB 2: LINUX PERMISSION CALCULATOR & ACL
  // ==========================================
  const [octalMode, setOctalMode] = useState("640");
  const [labUmask, setLabUmask] = useState("027");

  const permissionMatrix = {
    "600": { owner: "rw-", group: "---", other: "---", desc: "Private file: Owner read/write only. Highly secure for secrets." },
    "640": { owner: "rw-", group: "r--", other: "---", desc: "Team file: Owner read/write, group read, others no access." },
    "644": { owner: "rw-", group: "r--", other: "r--", desc: "Public config: World-readable. Sensitive credentials should NOT use this." },
    "700": { owner: "rwx", group: "---", other: "---", desc: "Private directory/script: Owner full control only." },
    "750": { owner: "rwx", group: "r-x", other: "---", desc: "Restricted directory: Group members can traverse; strangers locked out." },
    "755": { owner: "rwx", group: "r-x", other: "r-x", desc: "Standard public binary/dir: World traversable and executable." },
    "777": { owner: "rwx", group: "rwx", other: "rwx", desc: "DANGEROUS: World-writable and executable. Extreme security risk!" }
  };

  // ==========================================
  // LAB 3: PRIVILEGE ESCALATION & SUID SCANNER
  // ==========================================
  const mockSuidFiles = [
    {
      path: "/usr/bin/passwd",
      perms: "-rwsr-xr-x",
      owner: "root:root",
      type: "Legitimate",
      risk: "Standard OS functionality for password modification.",
      status: "safe"
    },
    {
      path: "/usr/bin/find",
      perms: "-rwsr-xr-x",
      owner: "root:root",
      type: "CRITICAL MISCONFIGURATION",
      risk: "SUID set on 'find' allows arbitrary command execution as root via -exec parameter!",
      status: "vulnerable"
    },
    {
      path: "/usr/bin/sudo",
      perms: "-rwsr-xr-x",
      owner: "root:root",
      type: "Legitimate",
      risk: "Standard administrative privilege broker.",
      status: "safe"
    },
    {
      path: "/opt/custom_backup.sh",
      perms: "-rwsrwxrwx",
      owner: "root:root",
      type: "CRITICAL MISCONFIGURATION",
      risk: "World-writable script with SUID bit allows any local user to overwrite and execute root commands.",
      status: "vulnerable"
    }
  ];
  const [suidFiles, setSuidFiles] = useState(mockSuidFiles);

  const fixSuid = (path) => {
    setSuidFiles((prev) =>
      prev.map((f) =>
        f.path === path
          ? {
              ...f,
              perms: "-rwxr-xr-x",
              type: "Remediated",
              risk: "SUID bit removed via 'chmod u-s'. Executable restricted to owner.",
              status: "fixed"
            }
          : f
      )
    );
  };

  // ==========================================
  // LAB 4: WINDOWS PRIVILEGE & NTFS ACL AUDIT
  // ==========================================
  const [uacLevel, setUacLevel] = useState("AlwaysNotify");
  const [lapsEnabled, setLapsEnabled] = useState(false);
  const [aclInheritance, setAclInheritance] = useState(true);

  // ==========================================
  // LAB 5: CIS & MS BASELINE COMPLIANCE
  // ==========================================
  const baselineChecks = [
    { id: "CIS-1.1", title: "Disable direct root SSH login (PermitRootLogin no)", category: "Remote Access", status: "Compliant" },
    { id: "CIS-1.2", title: "Enforce SSH public-key authentication only", category: "Remote Access", status: "Compliant" },
    { id: "CIS-2.1", title: "Configure system default umask to 027", category: "File Integrity", status: "Noncompliant" },
    { id: "CIS-2.2", title: "Verify world-writable files have sticky bit set", category: "File Integrity", status: "Compliant" },
    { id: "CIS-3.1", title: "Enable and enforce AppArmor / SELinux profile", category: "Mandatory Access", status: "Compliant" },
    { id: "CIS-4.1", title: "Disable unneeded legacy services (telnet, rsh)", category: "Services", status: "Compliant" },
    { id: "CIS-4.2", title: "Unattended security updates enabled (Ubuntu)", category: "Patching", status: "Noncompliant" },
    { id: "CIS-5.1", title: "Host firewall active and default deny inbound", category: "Host Firewall", status: "Compliant" },
    { id: "CIS-5.2", title: "Ensure auditd / journalctl log retention configured", category: "Auditing", status: "Compliant" },
    { id: "CIS-6.1", title: "Windows LAPS active on local administrator accounts", category: "Windows Defense", status: "Noncompliant" }
  ];
  const [checks, setChecks] = useState(baselineChecks);

  const toggleCheckStatus = (id) => {
    setChecks((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "Compliant" ? "Noncompliant" : "Compliant" }
          : c
      )
    );
  };

  const compliantCount = checks.filter((c) => c.status === "Compliant").length;

  // ==========================================
  // LAB 6: LOGGING & POST-HARDENING AUDIT
  // ==========================================
  const [logFilter, setLogFilter] = useState("all");
  const mockAuditLogs = [
    { time: "14:10:02", host: "srv-prod-01", facility: "auth.log", event: "sudo: pam_unix(sudo:auth): authentication failure; logname=alice uid=1001" },
    { time: "14:12:44", host: "srv-prod-01", facility: "audit.log", event: "type=EXECVE a0=\"/usr/bin/chmod\" a1=\"600\" a2=\"/etc/shadow\" comm=\"chmod\"" },
    { time: "14:15:10", host: "srv-prod-01", facility: "ufw.log", event: "[UFW BLOCK] IN=eth0 OUT= MAC=... SRC=198.51.100.89 DST=10.0.1.15 PROTO=TCP DPT=23" },
    { time: "14:18:22", host: "srv-win-dc", facility: "Security Event 4672", event: "Special privileges assigned to new logon: Administrator (Logon ID: 0x3E7)" },
    { time: "14:20:05", host: "srv-win-dc", facility: "Security Event 4720", event: "A user account was created: Target Name: svc_temp_backup" }
  ];

  // ==========================================
  // LAB SUBMISSION CHECKLIST (8 ITEMS)
  // ==========================================
  const [checklist, setChecklist] = useState({
    scope: false,
    usersGroups: false,
    permissionsEvidence: false,
    privilegeValidation: false,
    baselineSelected: false,
    rollbackRecorded: false,
    securityValidation: false,
    residualRisks: false
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  // ==========================================
  // INTERACTIVE KNOWLEDGE ASSESSMENT (6 QUESTIONS)
  // ==========================================
  const quizQuestions = [
    {
      id: 1,
      question: "What is the main purpose of system hardening?",
      options: [
        "Disable as many operating system features as possible",
        "Reduce unnecessary exposure while preserving required functionality",
        "Grant all users administrative permissions",
        "Replace patching with firewall rules"
      ],
      correct: 1,
      explanation:
        "System hardening is the deliberate process of reducing unnecessary system capabilities, interfaces, services, and attack surfaces while aligning security settings with the system's required operational role. Blindly disabling features without considering functionality is poor engineering."
    },
    {
      id: 2,
      question: "On a typical Linux system, what does mode 640 mean?",
      options: [
        "Everyone can read and write",
        "Owner and group have full access",
        "Owner can read/write, group can read, other users have no access through these mode bits",
        "Only the group can execute the file"
      ],
      correct: 2,
      explanation:
        "In octal notation, 6 = Read (4) + Write (2); 4 = Read (4); 0 = No permissions (0). Thus, mode 640 grants read/write to the owner, read-only to the group, and zero access to other users."
    },
    {
      id: 3,
      question: "Why is least privilege important for service accounts?",
      options: [
        "It limits the damage a compromised service can cause",
        "It ensures every service runs as root",
        "It removes the need for audit logs",
        "It allows services to bypass file permissions"
      ],
      correct: 0,
      explanation:
        "If a service account runs with minimal permissions (e.g. read-only on static files, no shell access, no sudo), an attacker who compromises the application cannot easily tamper with OS binaries, pivot laterally, or escalate to root."
    },
    {
      id: 4,
      question: "What is an important role of Windows UAC?",
      options: [
        "Automatically encrypt every file",
        "Support standard-user operation and controlled elevation for privileged tasks",
        "Replace NTFS permissions",
        "Guarantee that all applications are safe"
      ],
      correct: 1,
      explanation:
        "User Account Control (UAC) ensures administrators and standard users run with filtered standard tokens by default, prompting for explicit elevation when an administrative task is required to prevent silent background system modifications."
    },
    {
      id: 5,
      question: "What is the purpose of a security baseline?",
      options: [
        "Guarantee that no vulnerability exists",
        "Remove all deviations without regard to the system's role",
        "Define a documented, approved configuration for assessing and maintaining security",
        "Replace all change-control procedures"
      ],
      correct: 2,
      explanation:
        "A security baseline (such as CIS Benchmarks or Microsoft Security Baselines) establishes an approved, documented configuration standard against which systems can be measured, audited, and protected from configuration drift."
    },
    {
      id: 6,
      question: "What should an administrator do if an application fails after a hardening change?",
      options: [
        "Investigate the evidence, validate the configuration, and apply a controlled correction or rollback",
        "Disable every security control permanently",
        "Ignore the failure and close the change ticket",
        "Grant the application unrestricted administrative privileges by default"
      ],
      correct: 0,
      explanation:
        "Hardening requires disciplined change control. When an unexpected regression occurs, the administrator should inspect error logs, audit records, and permissions, and either tune the specific rule or enact a documented rollback."
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qIndex, oIndex) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qIndex]: oIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased">
      {/* 1. TOP HEADER & METADATA */}
      <header className="border-b border-stone-200 bg-white/90 backdrop-blur-md sticky top-0 z-40 px-4 sm:px-8 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-orange-600/10 text-orange-600">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                  Prepspaces Cybersecurity Masterclass · Module 10
                </span>
                <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-medium">
                  Intermediate
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-medium">
                  Linux + Windows Hardening
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-extrabold tracking-tight text-[#18181b]">
                Operating System Security, Hardening, Permissions, and Privilege Management
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 text-xs font-mono">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              12–16 Hours
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-mono font-medium">
              <BookOpen className="w-3.5 h-3.5 text-orange-600" />
              NIST SP 800-123 · CIS Benchmarks
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 text-sky-700 text-xs font-mono font-medium">
              <HardDrive className="w-3.5 h-3.5 text-sky-600" />
              SELinux / AppArmor · Windows LAPS
            </span>
          </div>
        </div>
      </header>

      {/* 2. SUB-NAVIGATION & TOPIC CAROUSEL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4">
        <ModuleNav
          currentTopic={selectedTopic}
          onSelectTopic={(t) => {
            setSelectedTopic(t);
          }}
        />

        {/* Primary Tabs */}
        <div className="flex border-b border-stone-200 mt-4 overflow-x-auto gap-1">
          {[
            { id: "theory", label: "Theory & Frameworks", icon: BookOpen },
            { id: "labs", label: "Interactive Labs (1–6)", icon: Terminal },
            { id: "case-study", label: "Applied Case Study", icon: Target },
            { id: "assessment", label: "Knowledge Assessment", icon: HelpCircle },
            { id: "capstone", label: "Capstone & Rubric", icon: ShieldCheck }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "border-orange-600 text-orange-600 bg-orange-50/50"
                    : "border-transparent text-stone-500 hover:text-stone-800 hover:border-stone-300"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-orange-600" : "text-stone-400"}`} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. MAIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        {/* ========================================================================= */}
        {/* TAB 1: THEORY & LESSONS (Unabridged)                                      */}
        {/* ========================================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Quick jump pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-stone-200">
              <span className="text-xs font-mono text-stone-400 uppercase tracking-wider font-bold">
                Jump To:
              </span>
              {[
                { num: 1, title: "L1: OS Security Fundamentals" },
                { num: 2, title: "L2: Baselines & Hardening Lifecycle" },
                { num: 3, title: "L3: Linux Users & Permissions" },
                { num: 4, title: "L4: Linux ACLs & SUID/Privilege" },
                { num: 5, title: "L5: Windows NTFS & UAC/LAPS" },
                { num: 6, title: "L6: Hardening in Practice" },
                { num: 7, title: "L7: Logging, Auditing & Verification" }
              ].map((pill) => (
                <button
                  key={pill.num}
                  onClick={() => setSelectedLesson(pill.num)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap cursor-pointer ${
                    selectedLesson === pill.num
                      ? "bg-[#18181b] text-white"
                      : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                  }`}
                >
                  {pill.title}
                </button>
              ))}
            </div>

            {/* LESSON 1 */}
            {selectedLesson === 1 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 1 · Foundational Architecture
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Operating System Security Fundamentals
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    The operating system's role as a resource mediator, the OS attack surface, layered defense, and distinguishing vulnerabilities from misconfigurations.
                  </p>
                </div>

                {/* 1.1 What is OS security? */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      1.1
                    </span>
                    What is Operating System Security?
                  </h3>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    Operating system security is the practice of protecting the OS, its configuration, accounts, processes, files, system interfaces, and administrative functions against unauthorized access and misuse. The OS mediates access to CPU, memory, filesystem objects, network sockets, hardware peripherals, and security principals.
                  </p>
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs">
                    <strong>Critical Principle:</strong> A web application may validate user input flawlessly, but if its underlying service account can overwrite <code>/etc/passwd</code> or access raw disk blocks, the system remains catastrophically vulnerable.
                  </div>
                </div>

                {/* 1.2 The OS Attack Surface Table */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      1.2
                    </span>
                    The Operating System Attack Surface
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[11px]">
                        <tr>
                          <th className="p-3">Attack Surface</th>
                          <th className="p-3">Example Risk</th>
                          <th className="p-3">Defensive Engineering Response</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-700">
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">User Accounts</td>
                          <td className="p-3">Unauthorized sign-in, credential stuffing</td>
                          <td className="p-3">MFA, lockouts, centralized identity governance</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-red-600">Privileged Accounts</td>
                          <td className="p-3">Unrestricted root / Administrator abuse</td>
                          <td className="p-3">Least privilege, sudoers restriction, Windows LAPS</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Network Listeners</td>
                          <td className="p-3">Unnecessary daemons (RPC, SMB, legacy rsh)</td>
                          <td className="p-3">Service deactivation, loopback binding, host firewalls</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-amber-700">File Permissions</td>
                          <td className="p-3">World-writable configs, unhashed shadow files</td>
                          <td className="p-3">Strict DAC ownership, restrictive umask, ACL hardening</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Software Packages</td>
                          <td className="p-3">Outdated packages with public CVEs</td>
                          <td className="p-3">Automated patch management (unattended-upgrades, WSUS)</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Scheduled Tasks / Cron</td>
                          <td className="p-3">Root cron job running user-writable scripts</td>
                          <td className="p-3">Strict path protection, service account isolation</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 1.4 Vulnerability vs Misconfiguration */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      1.4–1.5
                    </span>
                    Vulnerability vs. Misconfiguration & True Hardening
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-1.5">
                      <div className="font-bold text-stone-900 font-mono text-sm">Software Vulnerability</div>
                      <p className="text-stone-600">
                        A flaw or bug in binary logic (e.g. heap buffer overflow or use-after-free). Requires vendor source patch or recompilation.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-1.5">
                      <div className="font-bold text-stone-900 font-mono text-sm">Security Misconfiguration</div>
                      <p className="text-stone-600">
                        An administrative setting or policy choice (e.g. leaving SSH root login permitted, mode 777 on sensitive logs, disabled host firewall).
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-stone-700 italic">
                    NIST SP 800-123 emphasizes: Hardening is not the act of disabling as many features as possible. It is the disciplined process of making the system's actual configuration match its documented security requirements.
                  </p>
                </div>
              </section>
            )}

            {/* LESSON 2 */}
            {selectedLesson === 2 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 2 · Governance & Lifecycle
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Security Baselines and the Hardening Lifecycle
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    CIS Benchmarks, Microsoft Security Baselines, avoiding blind hardening, baseline recordkeeping, and managing configuration drift.
                  </p>
                </div>

                {/* 2.1 What is a security baseline? */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      2.1
                    </span>
                    What is a Security Baseline?
                  </h3>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    A security baseline is an approved, tested set of configuration settings and requirements used to establish a known security posture. Two authoritative standards dominate the industry:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                      <div className="font-bold text-stone-900">1. Center for Internet Security (CIS) Benchmarks</div>
                      <div className="text-stone-600 font-sans">
                        Consensus-based configuration standards for Ubuntu, RHEL, Windows Server, macOS, and cloud virtual machines.
                      </div>
                    </div>
                    <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                      <div className="font-bold text-stone-900">2. Microsoft Security Compliance Toolkit (SCT)</div>
                      <div className="text-stone-600 font-sans">
                        Official Group Policy Objects (GPOs) and registry templates designed specifically for Windows Server and Windows Enterprise.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2.3 The 8-Step Hardening Lifecycle */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      2.3
                    </span>
                    The 8-Step Hardening Lifecycle
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    {[
                      { step: "01", title: "Inventory", desc: "OS version, packages, services, accounts, listeners." },
                      { step: "02", title: "Select Baseline", desc: "Choose CIS / MS standard matching specific OS release." },
                      { step: "03", title: "Assess Gaps", desc: "Scan current state vs baseline rules." },
                      { step: "04", title: "Plan Changes", desc: "Evaluate dependencies, backups, and rollback scripts." },
                      { step: "05", title: "Apply Hardening", desc: "Execute under formal change control." },
                      { step: "06", title: "Validate", desc: "Verify services still function; confirm attack surface reduced." },
                      { step: "07", title: "Document", desc: "Record evidence, approved deviations, and sign-offs." },
                      { step: "08", title: "Monitor Drift", desc: "Schedule continuous compliance audits." }
                    ].map((st) => (
                      <div key={st.step} className="p-3 rounded-xl border border-stone-200 bg-white space-y-1">
                        <span className="font-mono font-bold text-orange-600">{st.step}</span>
                        <div className="font-bold text-stone-900">{st.title}</div>
                        <p className="text-[11px] text-stone-500 leading-tight">{st.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2.5 Configuration Drift */}
                <div className="space-y-2 pt-4 border-t border-stone-100 text-xs">
                  <h4 className="font-bold text-stone-900 text-sm">Managing Configuration Drift</h4>
                  <p className="text-stone-700">
                    Configuration drift occurs when manual sysadmin troubleshooting, unmanaged updates, or developer shortcuts alter security parameters. Maintain continuous auditing via tools like OpenSCAP, Ansible, or Microsoft Intune to detect deviations immediately.
                  </p>
                </div>
              </section>
            )}

            {/* LESSON 3 */}
            {selectedLesson === 3 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 3 · Linux Access Control
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Linux Security: Users, Groups, Ownership, and Permissions
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    UIDs, GIDs, traditional discretionary access control (DAC), octal and symbolic modes, directory traversal, and umask calculation.
                  </p>
                </div>

                {/* 3.1 & 3.2 Linux Permissions */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      3.1–3.3
                    </span>
                    The Traditional Linux Discretionary Access Control (DAC) Model
                  </h3>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Linux represents identities via numeric UIDs and GIDs. Every filesystem object has three permission sets: User (owner), Group, and Other.
                  </p>
                  <div className="p-4 bg-stone-900 text-stone-200 rounded-xl font-mono text-xs space-y-2">
                    <div className="text-orange-400 font-bold">Dissecting 'ls -l report.txt':</div>
                    <div className="text-emerald-400 font-bold">-rw-r----- 1 alice developers 2048 Oct 16 14:00 report.txt</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-stone-300 pt-2 border-t border-stone-800 text-[11px]">
                      <div><code>-</code> = Regular file</div>
                      <div><code>rw-</code> = Owner (Alice: R/W)</div>
                      <div><code>r--</code> = Group (Devs: Read)</div>
                      <div><code>---</code> = Others (No access)</div>
                    </div>
                  </div>
                </div>

                {/* 3.4 Octal Notation */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      3.4
                    </span>
                    Octal Permission Mathematical Notation
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                    <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                      <strong>Read (r)</strong> = Value 4
                    </div>
                    <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                      <strong>Write (w)</strong> = Value 2
                    </div>
                    <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                      <strong>Execute (x)</strong> = Value 1
                    </div>
                  </div>
                  <p className="text-xs text-stone-600">
                    Calculated by summing bits: <code>6 (4+2)</code>, <code>4 (4)</code>, <code>0 (0)</code> $\to$ <code>chmod 640 report.txt</code>.
                  </p>
                </div>

                {/* 3.7 Umask */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      3.7
                    </span>
                    The Role of Umask
                  </h3>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    The <code>umask</code> determines which permission bits are automatically stripped when new files or directories are created. With a secure enterprise baseline umask of <code>027</code>:
                  </p>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 font-mono text-xs space-y-1">
                    <div>New file: Base <code>666</code> - Umask <code>027</code> = <code>640 (rw-r-----)</code></div>
                    <div>New directory: Base <code>777</code> - Umask <code>027</code> = <code>750 (rwxr-x---)</code></div>
                  </div>
                </div>
              </section>
            )}

            {/* LESSON 4 */}
            {selectedLesson === 4 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 4 · Linux Advanced Privilege
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Linux ACLs, Special Permission Bits, and Privilege Management
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    POSIX ACLs (getfacl/setfacl), SUID/SGID security risks, sticky bits, sudoers governance, and mandatory access control (SELinux & AppArmor).
                  </p>
                </div>

                {/* 4.2 Special Bits */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      4.2
                    </span>
                    Special Permission Bits: SUID, SGID, and Sticky Bit
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[11px]">
                        <tr>
                          <th className="p-3">Special Bit</th>
                          <th className="p-3">Octal Digit</th>
                          <th className="p-3">Security Significance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-700">
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-red-600 font-mono">Set-user-ID (SUID)</td>
                          <td className="p-3 font-mono font-bold">4</td>
                          <td className="p-3">Executes with the file owner's privileges (often root). Misconfigured binaries are prime privilege escalation targets.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-amber-700 font-mono">Set-group-ID (SGID)</td>
                          <td className="p-3 font-mono font-bold">2</td>
                          <td className="p-3">Executes with file group privileges; on directories, newly created files inherit the parent directory's group.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900 font-mono">Sticky Bit</td>
                          <td className="p-3 font-mono font-bold">1</td>
                          <td className="p-3">On shared directories (e.g. <code>/tmp</code>), prevents non-owners from deleting or renaming another user's files.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 4.3 & 4.4 Sudo & Sudoers Governance */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      4.3–4.4
                    </span>
                    Root and Sudoers Governance
                  </h3>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Ubuntu and enterprise distributions disable direct root password logins, routing administrative actions through <code>sudo</code>. When auditing sudoers:
                  </p>
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-950 font-mono space-y-1">
                    <strong>Dangerous Sudo Rule:</strong>
                    <div><code>alice ALL=(ALL) NOPASSWD: /usr/bin/find, /usr/bin/vim</code></div>
                    <div className="text-stone-700 font-sans text-[11px] pt-1">
                      Both <code>find</code> and <code>vim</code> can escape to a shell. Granting NOPASSWD on these executables is effectively equivalent to granting full unrestricted root access.
                    </div>
                  </div>
                </div>

                {/* 4.6 Mandatory Access Control */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      4.6
                    </span>
                    Linux Mandatory Access Control: SELinux and AppArmor
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                      <div className="font-bold text-stone-900 font-mono">SELinux (Red Hat / CentOS)</div>
                      <p className="text-stone-600">
                        Label-based security contexts (Type Enforcement). Processes cannot touch files outside their assigned label domain even if running as UID 0.
                      </p>
                    </div>
                    <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                      <div className="font-bold text-stone-900 font-mono">AppArmor (Ubuntu / Debian)</div>
                      <p className="text-stone-600">
                        Path-based profile enforcement confining programs to approved files, network sockets, and capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* LESSON 5 */}
            {selectedLesson === 5 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 5 · Windows Security Architecture
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Windows Security, Permissions, and Privilege Management
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Security Principals, SIDs, Access Tokens, NTFS Permissions, UAC token filtering, and Windows LAPS password rotation.
                  </p>
                </div>

                {/* 5.1 & 5.2 NTFS Permissions */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      5.1–5.2
                    </span>
                    NTFS Access Control & Inheritance
                  </h3>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Windows relies on Security Identifiers (SIDs) and Access Tokens. NTFS permissions govern objects, supporting Full Control, Modify, Read & Execute, Read, and Write.
                  </p>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 font-mono text-xs space-y-1">
                    <div className="font-bold text-stone-900">Auditing with icacls:</div>
                    <div className="text-stone-600"><code>icacls C:\OS-Security-Lab</code></div>
                    <div className="text-stone-500 text-[11px]">
                      Displays Discretionary Access Control List (DACL). Beware of inherited permissive grants from parent root folders!
                    </div>
                  </div>
                </div>

                {/* 5.4 UAC & 5.5 Windows LAPS */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      5.4–5.5
                    </span>
                    User Account Control (UAC) & Windows LAPS
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
                      <div className="font-bold text-stone-900 font-mono flex items-center gap-1.5 text-sm">
                        <Lock className="w-4 h-4 text-blue-600" />
                        User Account Control (UAC)
                      </div>
                      <p className="text-stone-600">
                        Splits administrative logins into a filtered standard token and an elevated token. Restricts silent execution of malware requiring admin rights.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
                      <div className="font-bold text-stone-900 font-mono flex items-center gap-1.5 text-sm">
                        <Key className="w-4 h-4 text-orange-600" />
                        Windows LAPS
                      </div>
                      <p className="text-stone-600">
                        Automatically randomizes and rotates the local Administrator account password on every machine, storing it securely in Active Directory / Azure AD to eliminate lateral password pass-the-hash attacks.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* LESSON 6 */}
            {selectedLesson === 6 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 6 · Operational Hardening
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Operating System Hardening in Practice
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Patch pipelines, disabling unneeded services, SSH & RDP hardening, host firewalls (UFW/Defender), and configuration integrity.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                    <strong className="text-stone-900 block font-mono">1. Automated Patching</strong>
                    <p className="text-stone-600">Configure <code>unattended-upgrades</code> for security updates; automate WSUS testing.</p>
                  </div>
                  <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                    <strong className="text-stone-900 block font-mono">2. Service Pruning</strong>
                    <p className="text-stone-600">Disable unused systemd services with <code>systemctl disable --now</code>.</p>
                  </div>
                  <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                    <strong className="text-stone-900 block font-mono">3. SSH Hardening</strong>
                    <p className="text-stone-600">Set <code>PermitRootLogin no</code>, disable password auth, restrict to admin subnet.</p>
                  </div>
                  <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                    <strong className="text-stone-900 block font-mono">4. Host Firewalls</strong>
                    <p className="text-stone-600">Enable UFW (<code>ufw default deny incoming</code>) or Windows Defender Firewall.</p>
                  </div>
                  <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                    <strong className="text-stone-900 block font-mono">5. Secure Boot & TPM</strong>
                    <p className="text-stone-600">Enforce UEFI Secure Boot, BitLocker / LUKS full-disk encryption.</p>
                  </div>
                  <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                    <strong className="text-stone-900 block font-mono">6. Endpoint Protections</strong>
                    <p className="text-stone-600">Validate EDR health, AppLocker / WDAC application execution policies.</p>
                  </div>
                </div>
              </section>
            )}

            {/* LESSON 7 */}
            {selectedLesson === 7 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 7 · Verification & Logging
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Logging, Auditing, and Security Verification
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Linux journalctl and auditd, Windows Event Viewer and PowerShell Get-WinEvent, evidence validation, and regression testing.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-900 text-stone-100 space-y-2">
                    <div className="text-orange-400 font-bold">Linux Telemetry Verification:</div>
                    <div className="text-stone-300"># Check recent authentication events:</div>
                    <div className="text-emerald-400">journalctl -u ssh -n 30</div>
                    <div className="text-stone-300"># Audit file modifications on /etc/passwd:</div>
                    <div className="text-emerald-400">ausearch -k passwd_changes -ts today</div>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-900 text-stone-100 space-y-2">
                    <div className="text-orange-400 font-bold">Windows Event Log Inspection:</div>
                    <div className="text-stone-300"># Query failed logons (Event ID 4625):</div>
                    <div className="text-emerald-400">Get-WinEvent -FilterHashtable @&#123;LogName='Security'; Id=4625&#125; -MaxEvents 10</div>
                    <div className="text-stone-300"># Query privilege assignment (Event ID 4672):</div>
                    <div className="text-emerald-400">Get-WinEvent -FilterHashtable @&#123;LogName='Security'; Id=4672&#125; -MaxEvents 5</div>
                  </div>
                </div>
              </section>
            )}

            {/* Official References Section */}
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-stone-600" />
                Authoritative Reading & Reference Documentation
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <a
                  href="https://www.nist.gov/publications/guide-general-server-security"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white rounded-xl border border-stone-200 hover:border-orange-500 transition block group"
                >
                  <div className="font-bold text-stone-900 group-hover:text-orange-600 flex items-center justify-between">
                    NIST SP 800-123
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">General Server Security Guide</div>
                </a>

                <a
                  href="https://www.cisecurity.org/cis-benchmarks"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white rounded-xl border border-stone-200 hover:border-orange-500 transition block group"
                >
                  <div className="font-bold text-stone-900 group-hover:text-orange-600 flex items-center justify-between">
                    CIS Benchmarks
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">Linux & Windows Configuration</div>
                </a>

                <a
                  href="https://learn.microsoft.com/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white rounded-xl border border-stone-200 hover:border-orange-500 transition block group"
                >
                  <div className="font-bold text-stone-900 group-hover:text-orange-600 flex items-center justify-between">
                    Microsoft Baselines
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">Security Compliance Toolkit</div>
                </a>

                <a
                  href="https://learn.microsoft.com/windows-server/identity/laps/laps-overview"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white rounded-xl border border-stone-200 hover:border-orange-500 transition block group"
                >
                  <div className="font-bold text-stone-900 group-hover:text-orange-600 flex items-center justify-between">
                    Windows LAPS Docs
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">Local Admin Password Solution</div>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: INTERACTIVE LABS (1–6)                                             */}
        {/* ========================================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-10">
            {/* Lab Intro Card */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                  Hands-On Hardening Laboratories · 6 Sandboxes
                </span>
                <h2 className="text-lg sm:text-xl font-black text-[#18181b]">
                  Operating System Hardening & Validation Labs
                </h2>
                <p className="text-xs text-stone-600 mt-0.5">
                  Audit Linux accounts, calculate octal/symbolic permissions, hunt for risky SUID binaries, configure Windows UAC & LAPS, evaluate CIS compliance, and verify telemetry.
                </p>
              </div>

              <div className="px-3 py-2 bg-stone-50 rounded-xl border border-stone-200 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Checklist: <strong>{completedChecklistCount}/8</strong> Complete</span>
              </div>
            </div>

            {/* LAB 1: LINUX USER & GROUP AUDIT */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-100 gap-2">
                <div>
                  <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                    Lab 1 · Foundation
                  </div>
                  <h3 className="text-base font-bold text-[#18181b]">
                    Linux Account & Group Audit
                  </h3>
                </div>
                <div className="text-xs font-mono text-stone-500">
                  Remediated Accounts: <strong className="text-emerald-600">{accounts.filter(a => a.status === 'remediated').length}</strong>
                </div>
              </div>

              <p className="text-xs text-stone-600">
                Inspect <code>/etc/passwd</code> and administrative group memberships. Click <strong>Enforce Least Privilege</strong> to revoke unnecessary sudo rights and lock service shells.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden font-mono">
                  <thead className="bg-stone-100 text-stone-700 uppercase text-[11px]">
                    <tr>
                      <th className="p-3">User</th>
                      <th className="p-3">UID/GID</th>
                      <th className="p-3">Groups</th>
                      <th className="p-3">Shell</th>
                      <th className="p-3">Risk Assessment</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    {accounts.map((acc) => (
                      <tr
                        key={acc.id}
                        className={`hover:bg-stone-50 ${
                          acc.status === "critical"
                            ? "bg-red-50/40"
                            : acc.status === "high"
                            ? "bg-amber-50/40"
                            : acc.status === "remediated"
                            ? "bg-emerald-50/40"
                            : ""
                        }`}
                      >
                        <td className="p-3 font-bold text-stone-900">{acc.user}</td>
                        <td className="p-3">{acc.uid}:{acc.gid}</td>
                        <td className="p-3">{acc.groups.join(", ")}</td>
                        <td className="p-3">{acc.shell}</td>
                        <td className="p-3 font-sans text-xs">{acc.issue}</td>
                        <td className="p-3 text-right font-sans">
                          {acc.status === "critical" && (
                            <button
                              onClick={() => remediateAccount(acc.id, "/usr/sbin/nologin", true)}
                              className="px-2.5 py-1 bg-red-600 text-white rounded text-xs font-bold hover:bg-red-700 cursor-pointer"
                            >
                              Lock & Revoke Sudo
                            </button>
                          )}
                          {acc.status === "high" && (
                            <button
                              onClick={() => remediateAccount(acc.id, "/usr/sbin/nologin", true)}
                              className="px-2.5 py-1 bg-amber-600 text-white rounded text-xs font-bold hover:bg-amber-700 cursor-pointer"
                            >
                              Set nologin Shell
                            </button>
                          )}
                          {acc.status === "remediated" && (
                            <span className="text-emerald-700 font-bold text-xs flex items-center justify-end gap-1">
                              <Check className="w-3.5 h-3.5" /> Hardened
                            </span>
                          )}
                          {acc.status === "compliant" && (
                            <span className="text-stone-400 text-xs">Compliant</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* LAB 2: FILE PERMISSIONS & OCTAL/UMASK CALCULATOR */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="pb-3 border-b border-stone-100">
                <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                  Lab 2 · Permissions
                </div>
                <h3 className="text-base font-bold text-[#18181b]">
                  Octal Notation, Symbolic Converter & Umask Simulator
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <span className="text-xs font-mono text-stone-500 font-bold">Select Octal Mode:</span>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.keys(permissionMatrix).map((m) => (
                      <button
                        key={m}
                        onClick={() => setOctalMode(m)}
                        className={`p-2.5 rounded-lg border font-mono text-xs font-bold transition cursor-pointer ${
                          octalMode === m
                            ? "bg-orange-600 text-white border-orange-600"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                        }`}
                      >
                        chmod {m}
                      </button>
                    ))}
                  </div>

                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs font-mono">
                    <div>Dissected String: <strong className="text-emerald-600">{permissionMatrix[octalMode].owner}{permissionMatrix[octalMode].group}{permissionMatrix[octalMode].other}</strong></div>
                    <div className="text-stone-600 font-sans">{permissionMatrix[octalMode].desc}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono text-stone-500 font-bold">Umask Calculator:</span>
                  <div className="flex gap-2">
                    {["022", "027", "077"].map((um) => (
                      <button
                        key={um}
                        onClick={() => setLabUmask(um)}
                        className={`px-3 py-1.5 rounded-lg border font-mono text-xs font-bold cursor-pointer transition ${
                          labUmask === um
                            ? "bg-[#18181b] text-white border-[#18181b]"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                        }`}
                      >
                        umask {um}
                      </button>
                    ))}
                  </div>

                  <div className="p-4 bg-stone-900 text-stone-200 rounded-xl font-mono text-xs space-y-2">
                    <div className="text-orange-400 font-bold">Default Created Perms (umask {labUmask}):</div>
                    <div>touch file.txt $\to$ Mode {labUmask === "027" ? "640 (rw-r-----)" : labUmask === "077" ? "600 (rw-------)" : "644 (rw-r--r--)"}</div>
                    <div>mkdir folder $\to$ Mode {labUmask === "027" ? "750 (rwxr-x---)" : labUmask === "077" ? "700 (rwx------)" : "755 (rwxr-xr-x)"}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 3: REVIEW PRIVILEGE ESCALATION & SUID */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="pb-3 border-b border-stone-100">
                <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                  Lab 3 · Access Control
                </div>
                <h3 className="text-base font-bold text-[#18181b]">
                  SUID / SGID Audit & Dangerous Binary Remediation
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Simulation of <code>find / -perm /6000 -type f 2&gt;/dev/null</code>. Spot dangerous GTFOBins and strip SUID bits.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-700 uppercase text-[11px]">
                    <tr>
                      <th className="p-3">File Path</th>
                      <th className="p-3">Permissions</th>
                      <th className="p-3">Owner</th>
                      <th className="p-3">Classification</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-800">
                    {suidFiles.map((f) => (
                      <tr
                        key={f.path}
                        className={f.status === "vulnerable" ? "bg-red-50/50" : f.status === "fixed" ? "bg-emerald-50/40" : ""}
                      >
                        <td className="p-3 font-bold">{f.path}</td>
                        <td className="p-3 text-red-600 font-bold">{f.perms}</td>
                        <td className="p-3">{f.owner}</td>
                        <td className="p-3 font-sans text-xs">{f.risk}</td>
                        <td className="p-3 text-right font-sans">
                          {f.status === "vulnerable" && (
                            <button
                              onClick={() => fixSuid(f.path)}
                              className="px-2.5 py-1 bg-red-600 text-white rounded text-xs font-bold hover:bg-red-700 cursor-pointer"
                            >
                              Strip SUID (chmod u-s)
                            </button>
                          )}
                          {f.status === "fixed" && (
                            <span className="text-emerald-700 font-bold text-xs">Remediated</span>
                          )}
                          {f.status === "safe" && (
                            <span className="text-stone-400 text-xs">Valid SUID</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* LAB 4: WINDOWS PRIVILEGE & ACL REVIEW */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="pb-3 border-b border-stone-100">
                <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                  Lab 4 · Windows
                </div>
                <h3 className="text-base font-bold text-[#18181b]">
                  Windows NTFS ACLs, UAC & LAPS Configuration
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {/* UAC Setting */}
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="font-bold text-stone-900 font-mono flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-blue-600" />
                    User Account Control (UAC)
                  </div>
                  <p className="text-stone-600">Current Level: <strong>{uacLevel}</strong></p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setUacLevel("AlwaysNotify")}
                      className={`px-2.5 py-1 rounded text-xs font-bold cursor-pointer ${
                        uacLevel === "AlwaysNotify" ? "bg-emerald-700 text-white" : "bg-white border border-stone-200"
                      }`}
                    >
                      Always Notify (CIS)
                    </button>
                    <button
                      onClick={() => setUacLevel("Disabled")}
                      className={`px-2.5 py-1 rounded text-xs font-bold cursor-pointer ${
                        uacLevel === "Disabled" ? "bg-red-700 text-white" : "bg-white border border-stone-200"
                      }`}
                    >
                      Disabled (Insecure)
                    </button>
                  </div>
                </div>

                {/* Windows LAPS */}
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="font-bold text-stone-900 font-mono flex items-center gap-1.5">
                    <Key className="w-4 h-4 text-orange-600" />
                    Windows LAPS Status
                  </div>
                  <p className="text-stone-600">
                    Local Admin Rotation: <strong>{lapsEnabled ? "Active (30-day rotation)" : "Disabled (Shared Passwords!)"}</strong>
                  </p>
                  <button
                    onClick={() => setLapsEnabled(!lapsEnabled)}
                    className="px-3 py-1.5 bg-[#18181b] text-white rounded text-xs font-bold cursor-pointer hover:bg-stone-800"
                  >
                    {lapsEnabled ? "Disable LAPS" : "Enable Windows LAPS"}
                  </button>
                </div>

                {/* NTFS Inheritance */}
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="font-bold text-stone-900 font-mono flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-purple-600" />
                    C:\OS-Security-Lab ACL
                  </div>
                  <p className="text-stone-600">
                    Inherited DACL: <strong>{aclInheritance ? "Permissive (Inherited from C:\\)" : "Explicit Least-Privilege"}</strong>
                  </p>
                  <button
                    onClick={() => setAclInheritance(!aclInheritance)}
                    className="px-3 py-1.5 bg-orange-600 text-white rounded text-xs font-bold cursor-pointer hover:bg-orange-700"
                  >
                    {aclInheritance ? "Break Inheritance & Lock" : "Restore Inheritance"}
                  </button>
                </div>
              </div>
            </div>

            {/* LAB 5: OS HARDENING BASELINE ASSESSMENT */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-100 gap-2">
                <div>
                  <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                    Lab 5 · Hardening Baseline
                  </div>
                  <h3 className="text-base font-bold text-[#18181b]">
                    CIS & Microsoft Baseline Compliance Evaluation
                  </h3>
                </div>
                <div className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Compliance: {compliantCount} / {checks.length} ({Math.round((compliantCount / checks.length) * 100)}%)
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {checks.map((chk) => (
                  <div
                    key={chk.id}
                    onClick={() => toggleCheckStatus(chk.id)}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition select-none ${
                      chk.status === "Compliant"
                        ? "bg-white border-stone-200 hover:border-emerald-500"
                        : "bg-red-50/50 border-red-200 hover:border-red-400"
                    }`}
                  >
                    <div>
                      <span className="font-mono text-[10px] font-bold text-stone-400 block">{chk.id} · {chk.category}</span>
                      <span className="font-bold text-stone-900">{chk.title}</span>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                        chk.status === "Compliant" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {chk.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* LAB 6: LOGGING & POST-HARDENING AUDIT */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="pb-3 border-b border-stone-100">
                <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                  Lab 6 · Validation
                </div>
                <h3 className="text-base font-bold text-[#18181b]">
                  Post-Hardening Telemetry & Regression Testing
                </h3>
              </div>

              <div className="p-4 bg-stone-900 text-stone-200 rounded-xl font-mono text-xs space-y-2 border border-stone-800">
                <div className="text-orange-400 font-bold uppercase tracking-wider">
                  Live Unified Audit Stream (Linux journalctl & Windows Event 4672/4720):
                </div>
                <div className="divide-y divide-stone-800 space-y-1">
                  {mockAuditLogs.map((log, idx) => (
                    <div key={idx} className="pt-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-stone-400 text-[11px]">{log.time} [{log.facility}]</span>
                      <span className="text-emerald-300 truncate">{log.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* LAB SUBMISSION CHECKLIST (8 Items) */}
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <div>
                  <h3 className="text-sm font-bold text-stone-900">
                    Lab Submission Readiness Checklist
                  </h3>
                  <span className="text-xs text-stone-500">
                    Ensure all OS security and baseline validation artifacts are complete before capstone submission.
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold">
                  {completedChecklistCount} / 8 Completed
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  { key: "scope", label: "1. OS version and lab scope documented" },
                  { key: "usersGroups", label: "2. Users and administrative groups reviewed" },
                  { key: "permissionsEvidence", label: "3. File ownership and permission evidence captured" },
                  { key: "privilegeValidation", label: "4. Privilege assignments validated" },
                  { key: "baselineSelected", label: "5. Version-appropriate baseline selected" },
                  { key: "rollbackRecorded", label: "6. Hardening changes and rollback plan recorded" },
                  { key: "securityValidation", label: "7. Security and functional verification completed" },
                  { key: "residualRisks", label: "8. Findings, exceptions, and residual risks documented" }
                ].map((item) => (
                  <label
                    key={item.key}
                    onClick={() => toggleChecklist(item.key)}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-stone-200 hover:border-stone-300 cursor-pointer transition select-none"
                  >
                    <input
                      type="checkbox"
                      checked={checklist[item.key]}
                      readOnly
                      className="rounded text-orange-600 focus:ring-orange-500"
                    />
                    <span className={checklist[item.key] ? "line-through text-stone-400" : "text-stone-800 font-medium"}>
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: APPLIED CASE STUDY                                                 */}
        {/* ========================================================================= */}
        {activeTab === "case-study" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                Applied Scenario & Root-Cause Autopsy
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                Case Study: ApexCorp Multi-OS Privilege Escalation Crisis
              </h2>
              <p className="text-stone-600 text-sm mt-1">
                How an unhardened developer utility and overly permissive sudoers policy compromised an enterprise jump server.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-bold text-stone-900">
                1. The Exploit Chain
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                ApexCorp deployed a shared Linux bastion server for 25 engineers. To facilitate troubleshooting, sysadmins added an entry in <code>/etc/sudoers</code> allowing the <code>devs</code> group to execute <code>/usr/bin/find</code> without a password.
              </p>

              <div className="p-4 bg-red-50 border border-red-200 rounded-xl space-y-2 text-xs font-mono text-red-950">
                <div className="font-bold uppercase tracking-wider">Attack Sequence:</div>
                <div>1. Attacker gained low-privilege SSH access using compromised dev credentials.</div>
                <div>2. Ran <code>sudo -l</code> and discovered: <code>(ALL) NOPASSWD: /usr/bin/find</code>.</div>
                <div>3. Executed GTFOBin escape: <code>sudo find . -exec /bin/sh \; -quit</code> $\to$ Spawned interactive root shell.</div>
                <div>4. Discovered identical local Administrator password on Windows domain member machines $\to$ Total domain takeover.</div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h3 className="text-base font-bold text-stone-900">
                2. The Hardened Defense Posture
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="font-bold text-stone-900 font-mono text-sm flex items-center gap-1.5">
                    <Terminal className="w-4 h-4 text-orange-600" />
                    1. Purged Sudo Escape Binaries
                  </div>
                  <p className="text-stone-600">
                    Eliminated wildcards in sudoers. Replaced arbitrary script execution with specific, non-interactive wrapper scripts.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="font-bold text-stone-900 font-mono text-sm flex items-center gap-1.5">
                    <Key className="w-4 h-4 text-blue-600" />
                    2. Enforced Windows LAPS
                  </div>
                  <p className="text-stone-600">
                    Deployed Windows LAPS to eliminate shared local administrator passwords across workstations and member servers.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="font-bold text-stone-900 font-mono text-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    3. CIS Baseline Compliance
                  </div>
                  <p className="text-stone-600">
                    Enforced automated CIS Level 1 hardening benchmarks, AppArmor profiles, and automated auditd alerting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: KNOWLEDGE ASSESSMENT (6 Questions)                                 */}
        {/* ========================================================================= */}
        {activeTab === "assessment" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-8 shadow-xs">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                Interactive Knowledge Assessment · 6 Questions
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                Module 10 Knowledge Validation
              </h2>
              <p className="text-stone-600 text-sm mt-1">
                Evaluate your mastery of system hardening, Linux permissions, Windows NTFS & UAC, and security baseline enforcement.
              </p>
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const selectedOpt = quizAnswers[idx];
                const isCorrect = selectedOpt === q.correct;
                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-xl border border-stone-200 bg-stone-50/50 space-y-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-stone-900">
                        <span className="font-mono text-orange-600 mr-2">Question {idx + 1} of 6:</span>
                        {q.question}
                      </h4>
                      {quizSubmitted && (
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-bold font-mono ${
                            isCorrect
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {isCorrect ? "Correct" : "Incorrect"}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, oIdx) => {
                        let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";
                        if (selectedOpt === oIdx) {
                          btnStyle = "bg-orange-50 border-orange-500 text-orange-950 font-semibold";
                        }
                        if (quizSubmitted) {
                          if (oIdx === q.correct) {
                            btnStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 font-bold";
                          } else if (selectedOpt === oIdx && !isCorrect) {
                            btnStyle = "bg-red-100 border-red-500 text-red-950 font-bold";
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleSelectAnswer(idx, oIdx)}
                            className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition cursor-pointer ${btnStyle}`}
                          >
                            <span className="font-mono mr-2 text-stone-400">
                              {String.fromCharCode(65 + oIdx)}.
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 leading-relaxed">
                        <strong className="text-stone-800 block mb-0.5">Pedagogical Explanation:</strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              {!quizSubmitted ? (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className="px-6 py-2.5 rounded-xl bg-orange-600 text-white font-bold text-xs sm:text-sm hover:bg-orange-700 transition cursor-pointer disabled:opacity-50"
                >
                  Submit Assessment ({Object.keys(quizAnswers).length}/6 Answered)
                </button>
              ) : (
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="text-sm font-bold text-stone-900 font-mono">
                    Score: {calculateScore()} / 6 ({Math.round((calculateScore() / 6) * 100)}%)
                  </div>
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setQuizAnswers({});
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-300 bg-white text-stone-700 text-xs font-bold hover:bg-stone-50 transition cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Reset & Retake
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: CAPSTONE PROJECT & EVALUATION RUBRIC                                */}
        {/* ========================================================================= */}
        {activeTab === "capstone" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-8 shadow-xs">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                Portfolio Deliverable · System Hardening
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                Final Capstone: Secure and Audit a Linux or Windows System
              </h2>
              <p className="text-stone-600 text-sm mt-1">
                Conduct a rigorous baseline assessment on a disposable VM, execute approved hardening changes, verify security with telemetry, and document rollback scripts.
              </p>
            </div>

            {/* Capstone Deliverables Parts A-G */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-stone-900">
                Capstone Deliverables (Parts A–G)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part A — Scope & System Inventory</strong>
                  <p className="text-stone-600">
                    Record exact OS release, installed packages, running services, network listeners, local accounts, and administrative boundaries.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part B — Initial Vulnerability & Configuration Assessment</strong>
                  <p className="text-stone-600">
                    Identify at least 8 verified findings across account security, file permissions, unnecessary services, and missing patches.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part C — Baseline Comparison Matrix</strong>
                  <p className="text-stone-600">
                    Select a CIS Benchmark or Microsoft Security Baseline; document compliance status across at least 10 specific checks.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part D — Risk-Ranked Remediation Plan</strong>
                  <p className="text-stone-600">
                    Prioritize fixes based on technical severity and operational impact. Include rollback scripts for every change.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part E — Safe Hardening Implementation</strong>
                  <p className="text-stone-600">
                    Execute a minimum of 5 justified hardening actions (e.g. umask hardening, SUID removal, SSH configuration, LAPS activation).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part F & G — Verification & Executive Report</strong>
                  <p className="text-stone-600">
                    Verify post-change status via journalctl / Event Viewer; confirm legitimate services remain online; produce final executive summary.
                  </p>
                </div>
              </div>
            </div>

            {/* Evaluation Rubric */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h3 className="text-base font-bold text-stone-900">
                Evaluation Rubric (100% Total · 70% Passing Threshold)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[11px]">
                    <tr>
                      <th className="p-3">Assessment Area</th>
                      <th className="p-3">Weight</th>
                      <th className="p-3">Passing Standard (Competent)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Scope and Asset Inventory</td>
                      <td className="p-3 font-mono font-bold text-orange-600">10%</td>
                      <td className="p-3">Complete OS inventory with release, services, listeners, and user accounts documented.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">User, Group & Permission Review</td>
                      <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-3">Accurate identification of overprivileged accounts, dangerous sudoers, and file mode flaws.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Baseline Selection & Gap Analysis</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">Version-appropriate CIS or MS baseline evaluated across at least 10 documented checks.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Risk-Ranked Remediation Plan</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">Clear technical rationale, assigned roles, testing protocols, and documented rollback plans.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Safe Hardening Implementation</td>
                      <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-3">At least 5 approved hardening actions executed safely without breaking business workflows.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Validation and Evidence</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">Empirical before-and-after command outputs and log records proving security improvement.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Reporting & Professional Judgment</td>
                      <td className="p-3 font-mono font-bold text-orange-600">5%</td>
                      <td className="p-3">Professional executive summary, documented exceptions, and ongoing drift prevention guidance.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 5. FOOTER NAVIGATION (PREVIOUS & NEXT MODULE) */}
        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/cybersecurity/network-security")}
            className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-xs font-bold text-stone-700 hover:border-orange-400 transition cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: Module 9 (Network Security & Firewalls)</span>
          </button>

          <div className="text-right">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400">
              Up Next · Module 11
            </span>
            <h4 className="text-sm sm:text-base font-extrabold text-[#18181b]">
              Identity & Access Management, Authentication, Authorization & MFA
            </h4>
          </div>

          <button
            onClick={() => navigate("/learning/cybersecurity/iam")}
            className="flex items-center gap-2 rounded-xl bg-[#18181b] px-4 py-2.5 text-xs font-bold text-white hover:bg-stone-800 transition cursor-pointer"
          >
            <span>Proceed to Module 11</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </main>
    </div>
  );
}
