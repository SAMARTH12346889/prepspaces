import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Globe,
  Layers,
  Terminal,
  Shield,
  Activity,
  Play,
  RotateCcw,
  Sliders,
  Copy,
  Check,
  Server,
  Network,
  HelpCircle,
  Award,
  AlertTriangle,
  Sparkles,
  Lock,
  Workflow,
  Zap,
  Boxes,
  Compass,
  FileCode,
  ShieldCheck,
  RefreshCw,
  Cpu,
  Monitor,
  HardDrive,
  Clock,
  Gauge,
  SlidersHorizontal,
  ExternalLink,
  Eye,
  FileText,
  UserCheck,
  AlertOctagon,
  Key,
  Database,
  Search,
  Filter,
  CheckSquare,
  XCircle,
  Download,
  Info,
  Radio,
  Wifi,
  CornerDownRight,
  Split,
  Binary,
  FolderTree,
  KeyRound,
  FileSpreadsheet,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTERCLASS: MODULE 3                             */
/* Linux Fundamentals, Windows Internals, and Command-Line Administration     */
/* Academic Foundation: MIT 6.1810 OS Engineering & Microsoft Windows Internals*/
/* -------------------------------------------------------------------------- */

export default function CybersecuritySystems() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'permissions-studio' | 'process-explorer' | 'cli-terminal' | 'triage-lab' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* LAB 1 & 5: INTERACTIVE PERMISSIONS & ACCESS CONTROL STUDIO                 */
  /* -------------------------------------------------------------------------- */
  const [userRead, setUserRead] = useState(true);
  const [userWrite, setUserWrite] = useState(true);
  const [userExec, setUserExec] = useState(false);

  const [groupRead, setGroupRead] = useState(true);
  const [groupWrite, setGroupWrite] = useState(false);
  const [groupExec, setGroupExec] = useState(false);

  const [otherRead, setOtherRead] = useState(false);
  const [otherWrite, setOtherWrite] = useState(false);
  const [otherExec, setOtherExec] = useState(false);

  const [fileType, setFileType] = useState("-"); // '-' for file, 'd' for directory

  const permissionsCalculations = useMemo(() => {
    const uOct = (userRead ? 4 : 0) + (userWrite ? 2 : 0) + (userExec ? 1 : 0);
    const gOct = (groupRead ? 4 : 0) + (groupWrite ? 2 : 0) + (groupExec ? 1 : 0);
    const oOct = (otherRead ? 4 : 0) + (otherWrite ? 2 : 0) + (otherExec ? 1 : 0);

    const octalString = `${uOct}${gOct}${oOct}`;
    const symbolicString = `${fileType}${userRead ? "r" : "-"}${userWrite ? "w" : "-"}${userExec ? "x" : "-"}${
      groupRead ? "r" : "-"
    }${groupWrite ? "w" : "-"}${groupExec ? "x" : "-"}${otherRead ? "r" : "-"}${otherWrite ? "w" : "-"}${
      otherExec ? "x" : "-"
    }`;

    let securityAssessment = "Standard restricted configuration.";
    let riskLevel = "low";

    if (otherWrite) {
      securityAssessment = "CRITICAL RISK: World-writable permissions allow any unprivileged local user to tamper with or overwrite this file!";
      riskLevel = "critical";
    } else if (otherRead && (octalString === "644" || octalString === "755")) {
      securityAssessment = "Common public read configuration. Safe for public binaries/web assets, but DANGEROUS for private keys or config files containing database passwords!";
      riskLevel = "medium";
    } else if (octalString === "600") {
      securityAssessment = "HIGH SECURITY: Recommended for private SSH keys (~/.ssh/id_rsa), user credentials, and sensitive audit logs. Only file owner can read/write.";
      riskLevel = "safe";
    } else if (octalString === "700" && fileType === "d") {
      securityAssessment = "SECURE DIRECTORY: Only owner can enter, traverse, and list directory contents. Recommended for /root and private user folders.";
      riskLevel = "safe";
    }

    return {
      uOct,
      gOct,
      oOct,
      octalString,
      symbolicString,
      securityAssessment,
      riskLevel,
    };
  }, [userRead, userWrite, userExec, groupRead, groupWrite, groupExec, otherRead, otherWrite, otherExec, fileType]);

  /* -------------------------------------------------------------------------- */
  /* LAB 2 & 6: CROSS-PLATFORM PROCESS & SYSINTERNALS SIMULATOR                 */
  /* -------------------------------------------------------------------------- */
  const [processOsView, setProcessOsView] = useState("linux"); // 'linux' | 'windows'

  const linuxProcesses = [
    { pid: 1, ppid: 0, user: "root", name: "systemd", cpu: "0.1%", mem: "14 MB", path: "/sbin/init", status: "Legitimate", note: "Init system & parent of all daemon services." },
    { pid: 482, ppid: 1, user: "root", name: "systemd-journald", cpu: "0.2%", mem: "22 MB", path: "/lib/systemd/systemd-journald", status: "Legitimate", note: "System logging daemon collecting journal telemetry." },
    { pid: 812, ppid: 1, user: "root", name: "sshd", cpu: "0.0%", mem: "8 MB", path: "/usr/sbin/sshd", status: "Legitimate", note: "Listening on port 22 for secure remote administration." },
    { pid: 1042, ppid: 1, user: "www-data", name: "nginx: master", cpu: "0.0%", mem: "12 MB", path: "/usr/sbin/nginx", status: "Legitimate", note: "Web server master process bound to ports 80/443." },
    { pid: 1043, ppid: 1042, user: "www-data", name: "nginx: worker", cpu: "1.2%", mem: "18 MB", path: "/usr/sbin/nginx", status: "Legitimate", note: "Worker handling incoming web requests." },
    { pid: 3829, ppid: 1043, user: "www-data", name: "sh -c /tmp/.x/kdevtmpfsi", cpu: "98.4%", mem: "184 MB", path: "/tmp/.x/kdevtmpfsi", status: "SUSPICIOUS", note: "ALERT: Cryptominer spawned from compromised Nginx worker process inside world-writable /tmp directory!" },
  ];

  const windowsProcesses = [
    { pid: 4, ppid: 0, user: "NT AUTHORITY\\SYSTEM", name: "System", cpu: "0.5%", mem: "8 MB", path: "ntoskrnl.exe", status: "Legitimate", note: "Core Windows kernel execution process." },
    { pid: 648, ppid: 580, user: "NT AUTHORITY\\SYSTEM", name: "services.exe", cpu: "0.1%", mem: "18 MB", path: "C:\\Windows\\System32\\services.exe", status: "Legitimate", note: "Service Control Manager supervising Windows background services." },
    { pid: 724, ppid: 648, user: "NT AUTHORITY\\SYSTEM", name: "lsass.exe", cpu: "0.2%", mem: "28 MB", path: "C:\\Windows\\System32\\lsass.exe", status: "Legitimate", note: "Local Security Authority Subsystem Service (enforces domain authentication & Kerberos)." },
    { pid: 912, ppid: 648, user: "NT AUTHORITY\\SYSTEM", name: "svchost.exe", cpu: "0.4%", mem: "34 MB", path: "C:\\Windows\\System32\\svchost.exe", status: "Legitimate", note: "Generic service host container executing Windows Update & RPC." },
    { pid: 4104, ppid: 2012, user: "CORP\\Administrator", name: "powershell.exe", cpu: "0.3%", mem: "52 MB", path: "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe", status: "Legitimate", note: "Interactive PowerShell console." },
    { pid: 5892, ppid: 4104, user: "CORP\\Administrator", name: "svchost.exe", cpu: "14.2%", mem: "96 MB", path: "C:\\Users\\Admin\\AppData\\Local\\Temp\\svchost.exe", status: "SUSPICIOUS", note: "ALERT: Fake svchost binary executing out of user Temp directory spawned by PowerShell! Classic masquerading persistence." },
  ];

  const [selectedProcess, setSelectedProcess] = useState(linuxProcesses[5]);

  /* -------------------------------------------------------------------------- */
  /* LAB 4: DUAL-SHELL TERMINAL SIMULATOR (BASH VS POWERSHELL)                  */
  /* -------------------------------------------------------------------------- */
  const [terminalShell, setTerminalShell] = useState("bash"); // 'bash' | 'powershell'
  const [activeCommandIndex, setActiveCommandIndex] = useState(0);

  const bashCommands = [
    {
      cmd: "id && whoami",
      desc: "Inspect current effective user identity, UID, GID, and supplementary groups.",
      output: `uid=1000(student) gid=1000(student) groups=1000(student),4(adm),24(cdrom),27(sudo),110(lxd)
student`,
    },
    {
      cmd: "ls -la /etc/passwd /etc/shadow",
      desc: "Inspect critical user database file metadata and permission mode bits.",
      output: `-rw-r--r-- 1 root root 2642 Oct 16 09:12 /etc/passwd
-rw-r----- 1 root shadow 1480 Oct 16 09:12 /etc/shadow`,
    },
    {
      cmd: "ss -tulpn",
      desc: "Inspect active listening TCP and UDP sockets with associated process IDs.",
      output: `Netid  State   Recv-Q  Send-Q   Local Address:Port   Peer Address:Port  Process
tcp    LISTEN  0       128            0.0.0.0:22          0.0.0.0:*      users:(("sshd",pid=812,fd=3))
tcp    LISTEN  0       511            0.0.0.0:80          0.0.0.0:*      users:(("nginx",pid=1042,fd=6))
tcp    LISTEN  0       511            0.0.0.0:443         0.0.0.0:*      users:(("nginx",pid=1042,fd=7))`,
    },
    {
      cmd: "journalctl -u ssh -n 5 --no-pager",
      desc: "Query systemd journal for recent authentication and SSH service events.",
      output: `Oct 16 11:14:02 prepspaces-server sshd[3921]: Accepted publickey for student from 192.168.1.25 port 52140 ssh2: ED25519 SHA256:mQ8...
Oct 16 11:14:02 prepspaces-server sshd[3921]: pam_unix(sshd:session): session opened for user student(uid=1000) by (uid=0)
Oct 16 11:20:15 prepspaces-server sshd[4102]: Failed password for invalid user admin from 203.0.113.88 port 48122 ssh2
Oct 16 11:20:18 prepspaces-server sshd[4102]: Connection closed by authenticating user 203.0.113.88 port 48122 [preauth]`,
    },
  ];

  const powershellCommands = [
    {
      cmd: "whoami /groups /priv",
      desc: "Inspect current Windows access token, group SIDs, and enabled security privileges.",
      output: `USER INFORMATION
----------------
User Name: CORP\\Administrator   SID: S-1-5-21-382910-184920-1001

GROUP INFORMATION
-----------------
BUILTIN\\Administrators           Alias            S-1-5-32-544   Enabled
Mandatory Label\\High Mandatory Level Label        S-1-16-12288   Enabled

PRIVILEGES INFORMATION
----------------------
Privilege Name                Description                          State
============================= ==================================== ========
SeSecurityPrivilege           Manage auditing and security log     Disabled
SeShutdownPrivilege           Shut down the system                 Enabled
SeChangeNotifyPrivilege       Bypass traverse checking             Enabled`,
    },
    {
      cmd: "Get-Service | Where-Object Status -eq 'Running' | Select-Object -First 4 Name, DisplayName",
      desc: "Query Windows Service Control Manager via structured .NET object pipeline.",
      output: `Name       DisplayName
----       -----------
Appinfo    Application Information
EventLog   Windows Event Log
LanmanWorkstation Workstation
Spooler    Print Spooler`,
    },
    {
      cmd: "Get-NetTCPConnection -State Listen | Select-Object LocalAddress, LocalPort, OwningProcess",
      desc: "Inspect active listening sockets and mapping to Windows PIDs.",
      output: `LocalAddress LocalPort OwningProcess
------------ --------- -------------
0.0.0.0            135           840 (svchost.exe - RPC)
0.0.0.0            445             4 (System - SMB)
0.0.0.0           3389          1240 (svchost.exe - TermService RDP)`,
    },
    {
      cmd: "Get-WinEvent -LogName Security -MaxEvents 3 | Select-Object TimeCreated, Id, Message",
      desc: "Inspect Windows Security event log for authentication (4624) and privileged logon (4672).",
      output: `TimeCreated          Id Message
-----------          -- -------
10/16/2026 11:15:20 4672 Special privileges assigned to new logon (SeDebugPrivilege, SeSecurityPrivilege)...
10/16/2026 11:15:20 4624 An account was successfully logged on. Subject: CORP\\Administrator LogonType: 2
10/16/2026 11:12:04 4625 An account failed to log on. Failure Reason: Unknown user name or bad password...`,
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* QUIZ & ASSESSMENT (12 UNIVERSITY-INFORMED QUESTIONS DIRECTLY FROM SYLLABUS)*/
  /* -------------------------------------------------------------------------- */
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary role of an operating-system kernel?",
      options: [
        "Designing web pages",
        "Managing core system resources and privileged operations",
        "Replacing every application library",
        "Storing all files in one process",
      ],
      correctIndex: 1,
      explanation:
        "The kernel is the central privileged core of an operating system. It directly manages hardware resources, process scheduling, memory allocation, system calls, device drivers, and security isolation.",
    },
    {
      id: 2,
      question: "What is the main difference between a process and a thread?",
      options: [
        "A process is always a file",
        "A thread is the basic execution unit within a process; a process provides execution resources and an address space",
        "A thread is always an administrator",
        "A process cannot contain multiple threads",
      ],
      correctIndex: 1,
      explanation:
        "A process encapsulates a dedicated virtual address space, security token, handles, and memory. A thread is the basic scheduling unit that executes code inside that process address space.",
    },
    {
      id: 3,
      question: "Which Linux directory commonly contains system-wide configuration files?",
      options: ["/etc", "/home", "/tmp", "/proc"],
      correctIndex: 0,
      explanation:
        "/etc is the standard hierarchy location for system-wide configuration files in Linux (e.g. /etc/passwd, /etc/hosts, /etc/ssh/sshd_config).",
    },
    {
      id: 4,
      question: "What does Linux mode 600 conventionally mean for a regular file?",
      options: [
        "Everyone can read and write it",
        "The owner has read/write permissions, while group and others have no mode-bit permissions",
        "The owner can execute it only",
        "The file is automatically encrypted",
      ],
      correctIndex: 1,
      explanation:
        "Octal 600 translates to rw------- (Owner: 4+2=6, Group: 0, Others: 0). It strictly restricts read and write access to the file's owner.",
    },
    {
      id: 5,
      question: "What is the purpose of sudo on a system configured to use it?",
      options: [
        "Encrypt every command",
        "Allow authorized users to run permitted commands with elevated privileges",
        "Automatically install every software update",
        "Replace system logging",
      ],
      correctIndex: 1,
      explanation:
        "sudo allows approved users to execute designated commands with the security privileges of another user (typically root) based on rules defined in /etc/sudoers, providing accountability.",
    },
    {
      id: 6,
      question: "What does the Linux pipe operator | do?",
      options: [
        "Connects one command's standard output to another command's standard input",
        "Always writes a file to disk",
        "Restarts the shell",
        "Changes file ownership",
      ],
      correctIndex: 0,
      explanation:
        "The pipe operator (|) streams the stdout (file descriptor 1) of the preceding command directly into the stdin (file descriptor 0) of the subsequent command without requiring temporary disk files.",
    },
    {
      id: 7,
      question: "Which Windows concept represents a principal's security identity for access-control decisions?",
      options: [
        "A DNS record",
        "A Security Identifier (SID)",
        "A CPU working set",
        "A drive letter",
      ],
      correctIndex: 1,
      explanation:
        "A Security Identifier (SID) is a unique, immutable variable-length string used by the Windows security subsystem (e.g., S-1-5-21-...) to identify security principals such as users and groups.",
    },
    {
      id: 8,
      question: "What is the main purpose of Windows User Account Control?",
      options: [
        "Replace all file permissions",
        "Support the controlled use of administrative privileges",
        "Disable every background service",
        "Encrypt the Registry automatically",
      ],
      correctIndex: 1,
      explanation:
        "User Account Control (UAC) ensures administrators run with standard user tokens by default, prompting for explicit elevation and consent before high-privilege operations can execute.",
    },
    {
      id: 9,
      question: "Which PowerShell command is commonly used to list Windows services?",
      options: ["Get-Service", "Get-Route", "Read-Registry-All", "Start-Everything"],
      correctIndex: 0,
      explanation:
        "Get-Service queries the Windows Service Control Manager to retrieve the status, display name, and configuration of local or remote background services.",
    },
    {
      id: 10,
      question: "A process has high CPU usage. What should an analyst conclude?",
      options: [
        "It is definitely malware",
        "It must be deleted",
        "The observation needs context and further investigation",
        "The operating system is certainly compromised",
      ],
      correctIndex: 2,
      explanation:
        "High CPU consumption alone is an operational symptom, not proof of malice. Legitimate background tasks, video encoders, or compiling can utilize 100% CPU. Analysts must inspect parentage, binary path, and behavior.",
    },
    {
      id: 11,
      question: "Which tool is designed to inspect processes, handles and loaded DLLs on Windows?",
      options: ["Process Explorer", "Calculator", "Paint", "Disk Cleanup only"],
      correctIndex: 0,
      explanation:
        "Process Explorer (part of Microsoft Sysinternals) provides advanced real-time process monitoring, showing loaded DLLs, open system handles, thread stacks, and security tokens.",
    },
    {
      id: 12,
      question: "What is a safe first step when investigating an unfamiliar service?",
      options: [
        "Disable it immediately",
        "Delete its executable",
        "Inspect its identity, purpose, path, privileges and relevant logs",
        "Grant it administrator privileges",
      ],
      correctIndex: 2,
      explanation:
        "Disabling or deleting unknown services can crash critical operating system components. The first step is non-destructive reconnaissance: inspect binary path, publisher, service account, dependencies, and logs.",
    },
  ];

  const handleSelectOption = (questionId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-[#f97316] selection:text-white">
      {/* Top Global Navigation Bar */}
      <ModuleNav
        track="cybersecurity"
        currentModuleId="systems"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="OS Internals Mentor"
      />

      <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Module Header & University Alignment Badge */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 font-mono text-[11px] font-bold text-[#ea580c] uppercase tracking-wider">
              <Cpu size={12} className="text-[#f97316]" />
              Course: Cybersecurity Masterclass
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-stone-600">
              Module 3 of 24 · Host Architecture & Administration
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-stone-600">
              Academic Standards: MIT 6.1810 / Microsoft Windows Internals / Ubuntu Server
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
              Beginner → Intermediate · 14–18 Hours
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#18181b]">
            Linux Fundamentals, Windows Internals, and Command-Line Administration
          </h1>
          <p className="mt-2 text-sm md:text-base text-stone-600 max-w-4xl leading-relaxed">
            Master the internal mechanics of Linux and Windows operating systems. Learn how kernels mediate hardware, manage virtual memory, enforce access control lists (ACLs & octal permissions), schedule processes, supervise background services, and record security logs for first-line forensic investigation.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center gap-2 border-b border-[#e7e3da] pb-3 mb-6 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("theory")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "theory"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <BookOpen size={14} />
            <span>Curriculum & Deep Theory (Parts A–K)</span>
          </button>

          <button
            onClick={() => setActiveTab("permissions-studio")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "permissions-studio"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <KeyRound size={14} />
            <span>Linux Octal & Windows ACL Studio (Lab 1 & 5)</span>
          </button>

          <button
            onClick={() => setActiveTab("process-explorer")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "process-explorer"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Activity size={14} />
            <span>Process & Sysinternals Dissector (Lab 2 & 6)</span>
          </button>

          <button
            onClick={() => setActiveTab("cli-terminal")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "cli-terminal"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Terminal size={14} />
            <span>Dual Shell: Bash vs. PowerShell (Lab 4)</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "quiz"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Award size={14} />
            <span>Assessment & Quiz (12 Questions)</span>
          </button>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CURRICULUM & DEEP THEORY (PARTS A THROUGH K)                 */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Overview Card: 14 Core Objectives */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 font-mono text-[11px] font-bold text-[#ea580c]">
                  <Sparkles size={13} />
                  Host Administration Competencies
                </span>
                <span className="text-xs text-stone-500 font-mono">14 Learning Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Operating System Internals & Host Security Outcomes
              </h2>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                By completing this module, learners will understand how operating systems mediate access to hardware, enforce security boundaries, manage processes, and how security analysts inspect hosts:
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Explain kernel vs. user mode, virtual memory, system calls, and process isolation.",
                  "Navigate the Linux unified directory tree (/etc, /var, /proc, /sys, /tmp, /dev).",
                  "Master Linux file permissions: r/w/x mode bits, octal calculation, chmod, and chown.",
                  "Analyze user accounts (/etc/passwd, /etc/shadow), root privileges, and sudo rules.",
                  "Inspect Linux processes, signals (SIGTERM vs. SIGKILL), and systemd services.",
                  "Query Linux logs with journalctl and correlate timestamps with system failures.",
                  "Explain Windows architecture: Windows Executive, kernel mode, drivers, and HAL.",
                  "Analyze Windows processes, threads, handles, DLLs, and parent-child process trees.",
                  "Inspect Windows security tokens, SIDs, DACLs, SACLs, and NTFS permissions.",
                  "Understand User Account Control (UAC) and least privilege operational boundaries.",
                  "Audit the Windows Registry (HKLM, HKCU) and inspect persistence startup locations.",
                  "Administer Windows via PowerShell cmdlets and structured object pipelines.",
                  "Perform cross-platform forensic triage using Sysinternals (Process Explorer, Autoruns).",
                  "Execute safe change management without causing unintended host downtime.",
                ].map((obj, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 rounded-2xl border border-stone-200/70 bg-stone-50/70 p-3.5">
                    <CheckCircle2 size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700 leading-relaxed font-medium">{obj}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* PART A: Operating-System Fundamentals */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Cpu size={14} />
                <span>Part A — Operating-System Fundamentals</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 1.1–1.5: Kernels, Privilege Rings, Virtual Memory & The Shell
              </h2>

              {/* Privilege Rings Visual */}
              <div className="mt-6 rounded-2xl bg-stone-900 p-5 font-mono text-xs text-stone-200 overflow-x-auto">
                <div className="text-orange-400 font-bold mb-3">// HARDWARE PRIVILEGE RINGS & SYSTEM CALL INTERFACES</div>
                <pre className="text-stone-300 leading-relaxed">
{` [RING 3: USER MODE]      --> Web Browser, Bash Shell, PowerShell, Python, Text Editors
                                  |
                                  v  (Executes System Call e.g. open(), read(), fork(), NtCreateFile)
 [CONTROLLED TRANSITION]  --> Hardware Trap / Syscall Instruction (CPU switches privilege levels)
                                  |
                                  v
 [RING 0: KERNEL MODE]    --> Operating System Kernel (Linux vmlinuz / Windows ntoskrnl.exe)
                              - Memory Management (Paging, TLB, Page Tables)
                              - Process Scheduler (Context Switching, Thread Priorities)
                              - Filesystem Drivers & Network Protocol Stacks
                              - Hardware Drivers & Hardware Abstraction Layer (HAL)
                                  |
                                  v
 [HARDWARE LAYER]         --> Physical CPU Cores, RAM Sticks, NVMe SSDs, NIC Interfaces`}
                </pre>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3 text-xs">
                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <span className="font-bold text-[#18181b] block mb-1">Process vs. Thread</span>
                  <p className="text-stone-600 leading-relaxed">
                    A <strong>process</strong> provides resource containment: virtual address space, file handles, security credentials. A <strong>thread</strong> is the basic execution unit scheduled on a CPU core. Threads inside a process share memory.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <span className="font-bold text-[#18181b] block mb-1">Virtual Memory Isolation</span>
                  <p className="text-stone-600 leading-relaxed">
                    Each process receives a private virtual address space mapped to physical RAM via CPU page tables. Process A cannot read or write Process B's memory, preventing cross-application data corruption.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <span className="font-bold text-[#ea580c] block mb-1">Terminal vs. Shell vs. Utility</span>
                  <p className="text-stone-600 leading-relaxed">
                    <strong>Terminal:</strong> Text I/O window (Alacritty, Windows Terminal).<br />
                    <strong>Shell:</strong> Command interpreter (Bash, PowerShell).<br />
                    <strong>Utility:</strong> Standalone executable binary (grep, stat, curl).
                  </p>
                </div>
              </div>
            </section>

            {/* PART B & C: Linux Fundamentals & Administration */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Terminal size={14} />
                <span>Part B & C — Linux Fundamentals, Filesystem & Administration</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 2.1–3.8: Linux Filesystem, Octal Permissions, Sudo & Systemd
              </h2>

              {/* Linux Directory Map */}
              <div className="mt-6 grid gap-2 sm:grid-cols-4 text-xs font-mono">
                {[
                  { dir: "/etc", desc: "System-wide configuration files (passwd, shadow, hosts, sshd)" },
                  { dir: "/var/log", desc: "Persistent system and application log files (auth.log, syslog)" },
                  { dir: "/proc", desc: "Pseudo-filesystem exposing live kernel & process states (virtual)" },
                  { dir: "/sys", desc: "Kernel device and hardware driver abstractions (virtual)" },
                  { dir: "/tmp", desc: "Temporary world-writable storage (frequent malware staging target!)" },
                  { dir: "/dev", desc: "Special device nodes (e.g. /dev/sda disk, /dev/urandom)" },
                  { dir: "/home", desc: "User workspaces and personal profiles (~/)" },
                  { dir: "/root", desc: "Isolated home directory for the root superuser" },
                ].map((d, i) => (
                  <div key={i} className="p-3 rounded-xl border border-stone-200 bg-white">
                    <span className="font-bold text-[#ea580c]">{d.dir}</span>
                    <p className="text-[11px] text-stone-600 font-sans mt-0.5">{d.desc}</p>
                  </div>
                ))}
              </div>

              {/* Linux Permissions Table */}
              <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50/70 p-5">
                <h3 className="text-sm font-bold text-[#18181b] mb-2">
                  Traditional Linux Permissions & Octal Calculation
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  Mode bits represent Read (4), Write (2), and Execute (1) across Owner, Group, and Others:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse font-mono">
                    <thead>
                      <tr className="border-b border-stone-200 bg-white text-stone-700 font-bold font-sans">
                        <th className="p-2">Octal</th>
                        <th className="p-2">Symbolic</th>
                        <th className="p-2 font-sans">Security Meaning & Real-World Use Case</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-[11px]">
                      <tr>
                        <td className="p-2 font-bold text-[#ea580c]">600</td>
                        <td className="p-2">rw-------</td>
                        <td className="p-2 font-sans">Owner read/write only. Required for SSH private keys (<code className="bg-stone-100 px-1">~/.ssh/id_ed25519</code>).</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-[#ea580c]">644</td>
                        <td className="p-2">rw-r--r--</td>
                        <td className="p-2 font-sans">Owner read/write; group and others read. Standard for public files & <code className="bg-stone-100 px-1">/etc/passwd</code>.</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-[#ea580c]">700</td>
                        <td className="p-2">rwx------</td>
                        <td className="p-2 font-sans">Owner read/write/traverse. Standard for private folders (<code className="bg-stone-100 px-1">~/.ssh/</code> directory).</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-[#ea580c]">755</td>
                        <td className="p-2">rwxr-xr-x</td>
                        <td className="p-2 font-sans">Owner full; group and others read/execute. Standard for executables in <code className="bg-stone-100 px-1">/usr/bin</code>.</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-red-600">777</td>
                        <td className="p-2 text-red-600">rwxrwxrwx</td>
                        <td className="p-2 font-sans text-red-800 font-bold">CRITICAL DANGER: World-writable! Never use as a shortcut to fix permission errors.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* PART D & E: Windows Internals & PowerShell */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Monitor size={14} />
                <span>Part D & E — Windows Internals, Security Model & PowerShell</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 4.1–5.8: SIDs, Tokens, DACLs, The Registry & Sysinternals
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 text-xs">
                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <span className="font-bold text-[#18181b] block mb-1">Windows Security Identifiers (SIDs)</span>
                  <p className="text-stone-600 leading-relaxed">
                    Windows tracks users and groups by immutable SIDs rather than account names:
                  </p>
                  <div className="mt-2 font-mono text-[11px] space-y-1 text-stone-700">
                    <p>• <strong>S-1-5-18:</strong> Local System (NT AUTHORITY\SYSTEM)</p>
                    <p>• <strong>S-1-5-19:</strong> Local Service / <strong>S-1-5-20:</strong> Network Service</p>
                    <p>• <strong>S-1-5-32-544:</strong> Administrators local group alias</p>
                    <p>• <strong>S-1-5-21-...-500:</strong> Default local administrator account</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <span className="font-bold text-[#18181b] block mb-1">DACL vs. SACL & Access Tokens</span>
                  <p className="text-stone-600 leading-relaxed">
                    <strong>Access Token:</strong> Created at logon; contains user SID, group SIDs, and privileges.<br />
                    <strong>DACL (Discretionary ACL):</strong> Defines which trustees are permitted or denied access.<br />
                    <strong>SACL (System ACL):</strong> Generates audit logs when specified actions occur.
                  </p>
                </div>
              </div>

              {/* Windows Registry Architecture */}
              <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50/70 p-5">
                <h3 className="text-sm font-bold text-[#18181b] mb-2">
                  The Windows Registry Hives & Forensic Persistence Points
                </h3>
                <div className="grid gap-2 sm:grid-cols-2 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-stone-200">
                    <span className="font-mono font-bold text-[#ea580c]">HKEY_LOCAL_MACHINE (HKLM)</span>
                    <p className="text-stone-600 text-[11px] mt-1">
                      System-wide settings. Key persistence location: <code className="font-mono text-stone-800">HKLM\Software\Microsoft\Windows\CurrentVersion\Run</code>
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200">
                    <span className="font-mono font-bold text-[#ea580c]">HKEY_CURRENT_USER (HKCU)</span>
                    <p className="text-stone-600 text-[11px] mt-1">
                      Settings for currently signed-in user. Key persistence location: <code className="font-mono text-stone-800">HKCU\Software\Microsoft\Windows\CurrentVersion\Run</code>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* PART F & G: Cross-Platform Comparison & Structured Triage */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Workflow size={14} />
                <span>Part F & G — Cross-Platform Comparison & Forensic Triage</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 6.1–7.4: Comparative Administration & First-Line Investigation
              </h2>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700 font-bold">
                      <th className="p-3">Administrative Concept</th>
                      <th className="p-3">Linux Architecture</th>
                      <th className="p-3">Windows Architecture</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Primary Shell</td>
                      <td className="p-3 text-stone-600">Bash / Zsh (Text streams & byte pipelines)</td>
                      <td className="p-3 text-stone-600">PowerShell (Rich .NET object pipeline)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Security Principals</td>
                      <td className="p-3 text-stone-600">Numeric UID (0 = root) & GIDs</td>
                      <td className="p-3 text-stone-600">Security Identifiers (SIDs) & Access Tokens</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Privilege Elevation</td>
                      <td className="p-3 text-stone-600"><code className="font-mono">sudo</code> governed by <code className="font-mono">/etc/sudoers</code></td>
                      <td className="p-3 text-stone-600">User Account Control (UAC) token filtering</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Process Inspection</td>
                      <td className="p-3 text-stone-600"><code className="font-mono">ps aux</code>, <code className="font-mono">top</code>, <code className="font-mono">/proc/[pid]</code></td>
                      <td className="p-3 text-stone-600"><code className="font-mono">Get-Process</code>, Task Manager, Process Explorer</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Service Management</td>
                      <td className="p-3 text-stone-600"><code className="font-mono">systemctl status [unit]</code></td>
                      <td className="p-3 text-stone-600"><code className="font-mono">Get-Service</code> & Service Control Manager</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">System Telemetry</td>
                      <td className="p-3 text-stone-600"><code className="font-mono">journalctl</code> & <code className="font-mono">/var/log/</code></td>
                      <td className="p-3 text-stone-600">Windows Event Logs (<code className="font-mono">Get-WinEvent</code>)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 7-Step Investigation Workflow */}
              <div className="mt-8 pt-6 border-t border-stone-200">
                <h3 className="text-sm font-bold text-[#18181b] mb-3">
                  The Structured 7-Step Host Investigation Methodology
                </h3>
                <div className="grid gap-2 sm:grid-cols-7 text-center text-xs">
                  {[
                    { step: "01", name: "Scope", desc: "Bound affected host & window" },
                    { step: "02", name: "Record State", desc: "Capture volatile evidence" },
                    { step: "03", name: "Inspect", desc: "Process trees & open sockets" },
                    { step: "04", name: "Hypothesize", desc: "Form testable explanations" },
                    { step: "05", name: "Validate", desc: "Low-impact non-destructive tests" },
                    { step: "06", name: "Contain", desc: "Isolate network or revoke token" },
                    { step: "07", name: "Remediate", desc: "Patch, retest & document" },
                  ].map((s, i) => (
                    <div key={i} className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-mono font-black text-[#ea580c]">{s.step}</div>
                      <div className="font-bold text-[#18181b] mt-1 text-[11px]">{s.name}</div>
                      <p className="text-[10px] text-stone-500 mt-0.5">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: PERMISSIONS & ACCESS CONTROL STUDIO (LAB 1 & 5)             */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "permissions-studio" && (
          <div className="space-y-8">
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <KeyRound size={14} />
                <span>Lab 1 & 5: Permissions & Access Control Studio</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mb-4">
                Interactive Linux Octal & Symbolic Mode Bit Calculator
              </h2>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Interactive Toggles */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs font-bold text-stone-700">
                    <span>Target Type:</span>
                    <button
                      onClick={() => setFileType("-")}
                      className={`px-3 py-1 rounded-lg border transition ${fileType === "-" ? "bg-[#18181b] text-white" : "bg-white"}`}
                    >
                      Regular File (-)
                    </button>
                    <button
                      onClick={() => setFileType("d")}
                      className={`px-3 py-1 rounded-lg border transition ${fileType === "d" ? "bg-[#18181b] text-white" : "bg-white"}`}
                    >
                      Directory (d)
                    </button>
                  </div>

                  {/* Owner (User) */}
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-xs text-stone-800">Owner (User) Permissions:</span>
                      <span className="font-mono font-bold text-[#ea580c] text-xs">Octal: {permissionsCalculations.uOct}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <label className="flex items-center gap-2 p-2 rounded-xl bg-white border cursor-pointer">
                        <input type="checkbox" checked={userRead} onChange={(e) => setUserRead(e.target.checked)} className="accent-[#ea580c]" />
                        <span>Read (4)</span>
                      </label>
                      <label className="flex items-center gap-2 p-2 rounded-xl bg-white border cursor-pointer">
                        <input type="checkbox" checked={userWrite} onChange={(e) => setUserWrite(e.target.checked)} className="accent-[#ea580c]" />
                        <span>Write (2)</span>
                      </label>
                      <label className="flex items-center gap-2 p-2 rounded-xl bg-white border cursor-pointer">
                        <input type="checkbox" checked={userExec} onChange={(e) => setUserExec(e.target.checked)} className="accent-[#ea580c]" />
                        <span>Execute (1)</span>
                      </label>
                    </div>
                  </div>

                  {/* Group */}
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-xs text-stone-800">Group Permissions:</span>
                      <span className="font-mono font-bold text-[#ea580c] text-xs">Octal: {permissionsCalculations.gOct}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <label className="flex items-center gap-2 p-2 rounded-xl bg-white border cursor-pointer">
                        <input type="checkbox" checked={groupRead} onChange={(e) => setGroupRead(e.target.checked)} className="accent-[#ea580c]" />
                        <span>Read (4)</span>
                      </label>
                      <label className="flex items-center gap-2 p-2 rounded-xl bg-white border cursor-pointer">
                        <input type="checkbox" checked={groupWrite} onChange={(e) => setGroupWrite(e.target.checked)} className="accent-[#ea580c]" />
                        <span>Write (2)</span>
                      </label>
                      <label className="flex items-center gap-2 p-2 rounded-xl bg-white border cursor-pointer">
                        <input type="checkbox" checked={groupExec} onChange={(e) => setGroupExec(e.target.checked)} className="accent-[#ea580c]" />
                        <span>Execute (1)</span>
                      </label>
                    </div>
                  </div>

                  {/* Others */}
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-xs text-stone-800">Others (World) Permissions:</span>
                      <span className="font-mono font-bold text-[#ea580c] text-xs">Octal: {permissionsCalculations.oOct}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <label className="flex items-center gap-2 p-2 rounded-xl bg-white border cursor-pointer">
                        <input type="checkbox" checked={otherRead} onChange={(e) => setOtherRead(e.target.checked)} className="accent-[#ea580c]" />
                        <span>Read (4)</span>
                      </label>
                      <label className="flex items-center gap-2 p-2 rounded-xl bg-white border cursor-pointer">
                        <input type="checkbox" checked={otherWrite} onChange={(e) => setUserWrite ? setOtherWrite(e.target.checked) : null} className="accent-[#ea580c]" />
                        <span>Write (2)</span>
                      </label>
                      <label className="flex items-center gap-2 p-2 rounded-xl bg-white border cursor-pointer">
                        <input type="checkbox" checked={otherExec} onChange={(e) => setOtherExec(e.target.checked)} className="accent-[#ea580c]" />
                        <span>Execute (1)</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Scorecard Output */}
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-4">
                    <div className="flex justify-between border-b border-stone-800 pb-2">
                      <span className="text-orange-400 font-bold">CALCULATED MODE BITS</span>
                      <span className="text-stone-400">chmod syntax</span>
                    </div>

                    <div className="text-3xl font-black text-white">
                      chmod {permissionsCalculations.octalString} <span className="text-sm font-normal text-stone-400">target_file</span>
                    </div>

                    <div className="text-base text-emerald-400 font-bold">
                      Symbolic String: <span className="text-white">{permissionsCalculations.symbolicString}</span>
                    </div>

                    <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-800">
                      Owner: {userRead ? "r" : "-"}{userWrite ? "w" : "-"}{userExec ? "x" : "-"} | Group: {groupRead ? "r" : "-"}{groupWrite ? "w" : "-"}{groupExec ? "x" : "-"} | Others: {otherRead ? "r" : "-"}{otherWrite ? "w" : "-"}{otherExec ? "x" : "-"}
                    </div>
                  </div>

                  <div className={`p-5 rounded-2xl border text-xs leading-relaxed ${
                    permissionsCalculations.riskLevel === "critical"
                      ? "border-red-500 bg-red-50 text-red-950"
                      : permissionsCalculations.riskLevel === "medium"
                      ? "border-amber-500 bg-amber-50 text-amber-950"
                      : "border-emerald-500 bg-emerald-50 text-emerald-950"
                  }`}>
                    <span className="font-bold block mb-1 uppercase tracking-wider text-[11px]">
                      Security Risk Assessment:
                    </span>
                    <p>{permissionsCalculations.securityAssessment}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: PROCESS & SYSINTERNALS DISSECTOR (LAB 2 & 6)                */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "process-explorer" && (
          <div className="space-y-8">
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                    <Activity size={14} />
                    <span>Lab 2 & 6: Process Tree & Sysinternals Dissector</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                    Live Process Hierarchy & Anomalous Ancestry Analysis
                  </h2>
                </div>

                <div className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-stone-100 p-1 text-xs">
                  <button
                    onClick={() => {
                      setProcessOsView("linux");
                      setSelectedProcess(linuxProcesses[5]);
                    }}
                    className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                      processOsView === "linux" ? "bg-[#18181b] text-white shadow-2xs" : "text-stone-600"
                    }`}
                  >
                    Linux (ps aux / htop)
                  </button>
                  <button
                    onClick={() => {
                      setProcessOsView("windows");
                      setSelectedProcess(windowsProcesses[5]);
                    }}
                    className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                      processOsView === "windows" ? "bg-[#18181b] text-white shadow-2xs" : "text-stone-600"
                    }`}
                  >
                    Windows (Process Explorer)
                  </button>
                </div>
              </div>

              {/* Process Table */}
              <div className="rounded-2xl border border-stone-200 overflow-hidden mb-6">
                <div className="overflow-x-auto max-h-[300px]">
                  <table className="w-full text-left font-mono text-[11px] border-collapse">
                    <thead className="bg-stone-100/90 text-stone-700 sticky top-0 border-b border-stone-200">
                      <tr>
                        <th className="p-2.5">PID</th>
                        <th className="p-2.5">PPID</th>
                        <th className="p-2.5">User</th>
                        <th className="p-2.5">Process Name</th>
                        <th className="p-2.5">CPU</th>
                        <th className="p-2.5">Memory</th>
                        <th className="p-2.5">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 bg-white">
                      {(processOsView === "linux" ? linuxProcesses : windowsProcesses).map((p) => {
                        const isSelected = selectedProcess.pid === p.pid;
                        return (
                          <tr
                            key={p.pid}
                            onClick={() => setSelectedProcess(p)}
                            className={`cursor-pointer transition-all ${
                              isSelected
                                ? "bg-orange-100/80 font-semibold text-[#18181b]"
                                : "hover:bg-stone-50 text-stone-700"
                            }`}
                          >
                            <td className="p-2.5">{p.pid}</td>
                            <td className="p-2.5 text-stone-500">{p.ppid}</td>
                            <td className="p-2.5 text-stone-600">{p.user}</td>
                            <td className="p-2.5 font-bold text-[#18181b]">{p.name}</td>
                            <td className="p-2.5">{p.cpu}</td>
                            <td className="p-2.5">{p.mem}</td>
                            <td className="p-2.5">
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  p.status === "SUSPICIOUS" ? "bg-red-100 text-red-700 animate-pulse" : "bg-emerald-100 text-emerald-700"
                                }`}
                              >
                                {p.status}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Selected Process Forensic Detail */}
              <div className="rounded-2xl bg-stone-900 p-5 font-mono text-xs text-stone-200 space-y-3">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-[11px] text-stone-400">
                  <span className="font-bold text-orange-400">
                    FORENSIC INSPECTION: {selectedProcess.name} (PID: {selectedProcess.pid})
                  </span>
                  <span>PPID: {selectedProcess.ppid}</span>
                </div>

                <div className="grid gap-2 sm:grid-cols-2 text-[11px]">
                  <div><strong className="text-stone-400">Executable Binary Path:</strong> <span className="text-white">{selectedProcess.path}</span></div>
                  <div><strong className="text-stone-400">Security Principal:</strong> <span className="text-emerald-400">{selectedProcess.user}</span></div>
                </div>

                <div className="p-3 rounded-xl bg-stone-800/80 text-[11px] text-stone-300 leading-relaxed border border-stone-700">
                  <strong className="text-orange-300">Security Analyst Commentary:</strong> {selectedProcess.note}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: DUAL-SHELL TERMINAL (BASH VS. POWERSHELL) (LAB 4)           */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "cli-terminal" && (
          <div className="space-y-8">
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                    <Terminal size={14} />
                    <span>Lab 4: Dual-Shell Administration Simulator</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                    Cross-Platform CLI: Bash vs. Windows PowerShell
                  </h2>
                </div>

                <div className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-stone-100 p-1 text-xs">
                  <button
                    onClick={() => {
                      setTerminalShell("bash");
                      setActiveCommandIndex(0);
                    }}
                    className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                      terminalShell === "bash" ? "bg-[#18181b] text-white shadow-2xs" : "text-stone-600"
                    }`}
                  >
                    Linux Bash Shell
                  </button>
                  <button
                    onClick={() => {
                      setTerminalShell("powershell");
                      setActiveCommandIndex(0);
                    }}
                    className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                      terminalShell === "powershell" ? "bg-[#18181b] text-white shadow-2xs" : "text-stone-600"
                    }`}
                  >
                    Windows PowerShell
                  </button>
                </div>
              </div>

              {/* Command Selection Buttons */}
              <div className="flex gap-2 border-b border-stone-200 pb-3 mb-6 overflow-x-auto scrollbar-none">
                {(terminalShell === "bash" ? bashCommands : powershellCommands).map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCommandIndex(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap ${
                      activeCommandIndex === idx
                        ? "bg-[#ea580c] text-white"
                        : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                    }`}
                  >
                    {c.cmd.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Terminal Display */}
              <div className="rounded-2xl bg-stone-900 p-5 font-mono text-xs text-stone-200 space-y-4">
                <div className="flex items-center justify-between text-stone-400 pb-2 border-b border-stone-800 text-[11px]">
                  <span className="font-bold text-orange-400">
                    {terminalShell === "bash" ? "bash (Linux Ubuntu 24.04 LTS)" : "pwsh (Windows Server / PowerShell 7.4)"}
                  </span>
                  <span>Exit Code: 0</span>
                </div>

                <div className="text-stone-300">
                  <span className={terminalShell === "bash" ? "text-emerald-400 font-bold" : "text-blue-400 font-bold"}>
                    {terminalShell === "bash" ? "student@prepspaces:~$ " : "PS C:\\Users\\Administrator> "}
                  </span>
                  <span className="text-white font-bold">
                    {(terminalShell === "bash" ? bashCommands : powershellCommands)[activeCommandIndex].cmd}
                  </span>
                </div>

                <pre className="whitespace-pre-wrap leading-relaxed text-stone-300 text-[11px] bg-stone-950 p-4 rounded-xl border border-stone-800">
                  {(terminalShell === "bash" ? bashCommands : powershellCommands)[activeCommandIndex].output}
                </pre>

                <div className="pt-2 border-t border-stone-800 text-[11px] text-stone-400 font-sans">
                  <strong>Administrative Context:</strong> {(terminalShell === "bash" ? bashCommands : powershellCommands)[activeCommandIndex].desc}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: ASSESSMENT & QUIZ (12 QUESTIONS)                            */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "quiz" && (
          <div className="space-y-8">
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                    <Award size={14} />
                    <span>Part I — Module 3 Assessment Checkpoint</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                    Operating Systems & Administration Verification (12 Questions)
                  </h2>
                </div>

                {quizSubmitted && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-stone-600">Your Score:</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-black ${
                        calculateScore() >= 10
                          ? "bg-emerald-600 text-white"
                          : calculateScore() >= 7
                          ? "bg-amber-600 text-white"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {calculateScore()} / 12 ({((calculateScore() / 12) * 100).toFixed(0)}%)
                    </span>
                  </div>
                )}
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {quizQuestions.map((q) => {
                  const userAnswer = quizAnswers[q.id];

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        quizSubmitted
                          ? userAnswer === q.correctIndex
                            ? "border-emerald-200 bg-emerald-50/40"
                            : "border-red-200 bg-red-50/40"
                          : "border-stone-200 bg-stone-50/60"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xs sm:text-sm font-bold text-[#18181b] leading-snug">
                          {q.id}. {q.question}
                        </h3>
                        {quizSubmitted && (
                          <span className="shrink-0 mt-0.5">
                            {userAnswer === q.correctIndex ? (
                              <CheckCircle2 size={16} className="text-emerald-600" />
                            ) : (
                              <XCircle size={16} className="text-red-600" />
                            )}
                          </span>
                        )}
                      </div>

                      {/* Options */}
                      <div className="mt-3 space-y-2">
                        {q.options.map((opt, optIdx) => {
                          let optClasses =
                            "w-full text-left p-3 rounded-xl border text-xs font-medium transition cursor-pointer flex items-center justify-between ";

                          if (quizSubmitted) {
                            if (optIdx === q.correctIndex) {
                              optClasses += "border-emerald-500 bg-emerald-100 text-emerald-950 font-bold";
                            } else if (userAnswer === optIdx) {
                              optClasses += "border-red-500 bg-red-100 text-red-950 line-through";
                            } else {
                              optClasses += "border-stone-200 bg-white/70 text-stone-500";
                            }
                          } else {
                            if (userAnswer === optIdx) {
                              optClasses += "border-[#ea580c] bg-orange-100 text-[#ea580c] font-bold";
                            } else {
                              optClasses += "border-stone-200 bg-white hover:border-stone-300 text-stone-700";
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={quizSubmitted}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              className={optClasses}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && optIdx === q.correctIndex && (
                                <span className="text-[10px] font-bold text-emerald-700 uppercase ml-2">Correct</span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      {quizSubmitted && (
                        <div className="mt-3 pt-3 border-t border-stone-200/80 text-xs text-stone-700 leading-relaxed bg-white/60 p-3 rounded-xl">
                          <strong className="text-stone-900">Academic Explanation:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit & Retake */}
              <div className="mt-6 flex items-center justify-between border-t border-stone-200 pt-4">
                <div className="text-xs text-stone-500">
                  {Object.keys(quizAnswers).length} of {quizQuestions.length} answered
                </div>

                {!quizSubmitted ? (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(quizAnswers).length === 0}
                    className="px-6 py-2.5 rounded-xl bg-[#ea580c] text-white font-bold text-xs hover:bg-[#c2410c] transition cursor-pointer disabled:opacity-50"
                  >
                    Submit Assessment
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setQuizAnswers({});
                    }}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:border-orange-400 hover:text-[#ea580c] transition cursor-pointer"
                  >
                    <RotateCcw size={14} />
                    <span>Retake Quiz</span>
                  </button>
                )}
              </div>
            </section>
          </div>
        )}

        {/* Next Module Navigation Footer */}
        <div className="mt-12 flex items-center justify-between rounded-3xl border border-[#e7e3da] bg-white/80 p-6 backdrop-blur-md">
          <button
            onClick={() => navigate("/learning/cybersecurity/networking")}
            className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-xs font-bold text-stone-700 hover:border-orange-400 transition cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Previous: Module 2</span>
          </button>

          <div className="text-right">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400">
              Up Next · Module 4
            </span>
            <h4 className="text-sm sm:text-base font-extrabold text-[#18181b]">
              Cryptography & Public Key Infrastructure (PKI) Engineering
            </h4>
          </div>

          <button
            onClick={() => navigate("/learning/cybersecurity/cryptography")}
            className="flex items-center gap-2 rounded-xl bg-[#18181b] px-4 py-2.5 text-xs font-bold text-white hover:bg-stone-800 transition cursor-pointer"
          >
            <span>Proceed to Module 4</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
