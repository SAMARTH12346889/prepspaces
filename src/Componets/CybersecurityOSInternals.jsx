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
  Key,
  Database,
  Search,
  AlertCircle,
  FileSpreadsheet,
  TerminalSquare,
  Binary,
  FolderGit2,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 3                            */
/* Linux Fundamentals, Windows Internals, and Command-Line Administration     */
/* Informed by Linux Foundation, Microsoft Internals, NIST SP 800-123         */
/* -------------------------------------------------------------------------- */

export default function CybersecurityOSInternals() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'perm-calc' | 'process-inspector' | 'token-explorer' | 'cli-sandbox' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 1: LINUX FILE PERMISSION & CHMOD CALCULATOR          */
  /* -------------------------------------------------------------------------- */
  const [permBits, setPermBits] = useState({
    ownerR: true,
    ownerW: true,
    ownerX: false,
    groupR: true,
    groupW: false,
    groupX: false,
    otherR: false,
    otherW: false,
    otherX: false,
    suid: false,
    sgid: false,
    sticky: false,
  });

  const togglePerm = (key) => {
    setPermBits((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const calculatedChmod = useMemo(() => {
    const special = (permBits.suid ? 4 : 0) + (permBits.sgid ? 2 : 0) + (permBits.sticky ? 1 : 0);
    const owner = (permBits.ownerR ? 4 : 0) + (permBits.ownerW ? 2 : 0) + (permBits.ownerX ? 1 : 0);
    const group = (permBits.groupR ? 4 : 0) + (permBits.groupW ? 2 : 0) + (permBits.groupX ? 1 : 0);
    const other = (permBits.otherR ? 4 : 0) + (permBits.otherW ? 2 : 0) + (permBits.otherX ? 1 : 0);

    const octal = `${special > 0 ? special : ""}${owner}${group}${other}`;

    // Symbolic string format: -rwxr-xr-x
    let sOwnerX = permBits.ownerX ? (permBits.suid ? "s" : "x") : permBits.suid ? "S" : "-";
    let sGroupX = permBits.groupX ? (permBits.sgid ? "s" : "x") : permBits.sgid ? "S" : "-";
    let sOtherX = permBits.otherX ? (permBits.sticky ? "t" : "x") : permBits.sticky ? "T" : "-";

    const symbolic = `-${permBits.ownerR ? "r" : "-"}${permBits.ownerW ? "w" : "-"}${sOwnerX}${
      permBits.groupR ? "r" : "-"
    }${permBits.groupW ? "w" : "-"}${sGroupX}${permBits.otherR ? "r" : "-"}${
      permBits.otherW ? "w" : "-"
    }${sOtherX}`;

    let securityVerdict = "Secure / Least Privilege";
    let verdictColor = "text-emerald-700 bg-emerald-50 border-emerald-300";

    if (other >= 2) {
      securityVerdict = "CRITICAL: World-Writable! Any local user can overwrite or delete.";
      verdictColor = "text-rose-700 bg-rose-50 border-rose-300 font-bold";
    } else if (permBits.suid) {
      securityVerdict = "HIGH RISK: SUID bit enabled! Runs with effective root privileges.";
      verdictColor = "text-amber-700 bg-amber-50 border-amber-300 font-bold";
    } else if (owner === 7 && group === 7 && other === 7) {
      securityVerdict = "CRITICAL RISK: chmod 777! Completely unrestricted.";
      verdictColor = "text-rose-700 bg-rose-50 border-rose-300 font-bold";
    }

    return { octal, symbolic, securityVerdict, verdictColor };
  }, [permBits]);

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 2: PROCESS INSPECTOR & SIGNAL CONTROLLER             */
  /* -------------------------------------------------------------------------- */
  const [activeProcesses, setActiveProcesses] = useState([
    { pid: 1, name: "systemd", user: "root", cpu: "0.1%", mem: "18MB", state: "Running (S)", parent: 0 },
    { pid: 842, name: "sshd", user: "root", cpu: "0.0%", mem: "9MB", state: "Listening (S)", parent: 1 },
    { pid: 1240, name: "bash", user: "analyst", cpu: "0.0%", mem: "5MB", state: "Active (S)", parent: 842 },
    { pid: 3104, name: "python3 (c2_beacon.py)", user: "analyst", cpu: "14.2%", mem: "42MB", state: "Running (R)", parent: 1240, suspicious: true },
    { pid: 4012, name: "nginx", user: "www-data", cpu: "0.3%", mem: "24MB", state: "Running (S)", parent: 1 },
  ]);

  const [selectedPid, setSelectedPid] = useState(3104);
  const [signalLog, setSignalLog] = useState("Process inspector initialized. Select a process to dispatch signals.");

  const sendSignal = (sigName, sigCode) => {
    const target = activeProcesses.find((p) => p.pid === selectedPid);
    if (!target) return;

    if (sigCode === 9) {
      // SIGKILL
      setActiveProcesses((prev) => prev.filter((p) => p.pid !== selectedPid));
      setSignalLog(`Dispatched SIGKILL (9) to PID ${selectedPid} (${target.name}). Kernel forcibly revoked memory and reclaimed PID.`);
      setSelectedPid(1);
    } else if (sigCode === 15) {
      // SIGTERM
      setActiveProcesses((prev) =>
        prev.map((p) => (p.pid === selectedPid ? { ...p, state: "Terminated (Graceful cleanup)" } : p))
      );
      setSignalLog(`Dispatched SIGTERM (15) to PID ${selectedPid} (${target.name}). Process received termination signal handler.`);
      setTimeout(() => {
        setActiveProcesses((prev) => prev.filter((p) => p.pid !== selectedPid));
        setSelectedPid(1);
      }, 1500);
    } else if (sigCode === 19) {
      // SIGSTOP
      setActiveProcesses((prev) =>
        prev.map((p) => (p.pid === selectedPid ? { ...p, state: "Stopped (T)" } : p))
      );
      setSignalLog(`Dispatched SIGSTOP (19) to PID ${selectedPid} (${target.name}). Process paused by kernel scheduler.`);
    } else if (sigCode === 18) {
      // SIGCONT
      setActiveProcesses((prev) =>
        prev.map((p) => (p.pid === selectedPid ? { ...p, state: "Running (R)" } : p))
      );
      setSignalLog(`Dispatched SIGCONT (18) to PID ${selectedPid} (${target.name}). Execution resumed.`);
    }
  };

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 3: WINDOWS ACCESS TOKEN & PRIVILEGE EXPLORER         */
  /* -------------------------------------------------------------------------- */
  const [tokenIntegrityLevel, setTokenIntegrityLevel] = useState("Medium (Standard User)");
  const [uacElevationActive, setUacElevationActive] = useState(false);

  const tokenDetails = useMemo(() => {
    if (tokenIntegrityLevel.startsWith("High") || uacElevationActive) {
      return {
        level: "High Mandatory Integrity Level (S-1-16-12288)",
        userSID: "S-1-5-21-39281-1001 (AdminUser)",
        groups: ["BUILTIN\\Administrators (Enabled)", "BUILTIN\\Users", "NT AUTHORITY\\Authenticated Users"],
        privileges: [
          "SeDebugPrivilege (Debug programs / Memory inspection)",
          "SeImpersonatePrivilege (Impersonate client after authentication)",
          "SeTakeOwnershipPrivilege (Take ownership of files/keys)",
          "SeSecurityPrivilege (Manage auditing and security log)",
          "SeBackupPrivilege / SeRestorePrivilege",
        ],
        canWriteSystem32: true,
      };
    }

    return {
      level: "Medium Mandatory Integrity Level (S-1-16-8192)",
      userSID: "S-1-5-21-39281-1001 (Standard Token)",
      groups: ["BUILTIN\\Administrators (Group-Use-Only / Filtered)", "BUILTIN\\Users", "NT AUTHORITY\\Authenticated Users"],
      privileges: [
        "SeChangeNotifyPrivilege (Bypass traverse checking)",
        "SeIncreaseWorkingSetPrivilege",
        "SeShutdownPrivilege (Disabled)",
      ],
      canWriteSystem32: false,
    };
  }, [tokenIntegrityLevel, uacElevationActive]);

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 4: CLI SANDBOX (DUAL-TAB: LINUX BASH & POWERSHELL)   */
  /* -------------------------------------------------------------------------- */
  const [cliEnvironment, setCliEnvironment] = useState("bash"); // 'bash' | 'powershell'
  const [selectedCommandKey, setSelectedCommandKey] = useState("ls");
  const [sandboxOutput, setSandboxOutput] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);

  const bashCommands = {
    ls: {
      label: "ls -lah /var/log",
      cmd: "ls -lah /var/log",
      output: `total 1.2M
drwxr-xr-x 12 root   root   4.0K Oct 15 14:00 .
drwxr-xr-x 14 root   root   4.0K Sep 28 10:12 ..
-rw-r-----  1 syslog adm    412K Oct 15 14:15 auth.log
-rw-r-----  1 syslog adm    620K Oct 15 14:15 syslog
-rw-rw-r--  1 root   utmp   288K Oct 15 14:10 wtmp
drwxr-x---  2 root   adm    4.0K Oct 15 00:00 nginx
drwxr-xr-x  2 root   root   4.0K Oct 12 11:20 journal`,
    },
    ps: {
      label: "ps aux | grep -E 'sshd|bash'",
      cmd: "ps aux | grep -E 'sshd|bash'",
      output: `root         842  0.0  0.1  15812  9124 ?        Ss   10:12   0:00 sshd: /usr/sbin/sshd -D [listener]
root        1190  0.0  0.1  18420 10240 ?        Ss   11:00   0:01 sshd: analyst [priv]
analyst     1240  0.0  0.0   9820  5120 pts/0    Ss   11:00   0:00 -bash
analyst     4120  0.0  0.0   6140  2048 pts/0    R+   14:20   0:00 grep -E sshd|bash`,
    },
    journal: {
      label: "journalctl -p warning -n 4",
      cmd: "journalctl -p warning -n 4 --no-pager",
      output: `Oct 15 13:42:01 security-box sshd[3810]: Invalid user guest from 192.168.10.95 port 49120
Oct 15 13:42:03 security-box sshd[3810]: Failed password for invalid user guest from 192.168.10.95 port 49120 ssh2
Oct 15 13:50:11 security-box sudo[4001]: pam_unix(sudo:auth): authentication failure; logname=analyst uid=1000 euid=0
Oct 15 14:02:15 security-box kernel: audit: type=1400 audit(1729000935.120:41): apparmor="DENIED" operation="open" profile="/usr/bin/python3" name="/etc/shadow" pid=3104 comm="python3" requested_mask="r" denied_mask="r"`,
    },
    suid: {
      label: "find / -perm -4000 -type f 2>/dev/null",
      cmd: "find / -perm -4000 -type f 2>/dev/null",
      output: `/usr/bin/sudo
/usr/bin/passwd
/usr/bin/newgrp
/usr/bin/chfn
/usr/bin/mount
/usr/bin/umount
/usr/lib/openssh/ssh-keysign
[AUDIT NOTE]: Verified standard SUID binaries. No rogue /bin/bash or /tmp SUID backdoors detected.`,
    },
  };

  const powershellCommands = {
    getProcess: {
      label: "Get-Process | Sort WorkingSet64 -Desc",
      cmd: "Get-Process | Sort-Object WorkingSet64 -Descending | Select-Object -First 5 Name, Id, @{N='Memory(MB)';E={[math]::Round($_.WorkingSet64/1MB,1)}}",
      output: `Name        Id Memory(MB)
----        -- ----------
MsMpEng   2840      184.2
explorer  4120       96.5
svchost   1140       64.1
powershell 5820      52.8
lsass      812       38.4`,
    },
    getService: {
      label: "Get-Service WinDefend, W32Time",
      cmd: "Get-Service WinDefend, W32Time | Select-Object Name, Status, StartType",
      output: `Name      Status  StartType
----      ------  ---------
WinDefend Running Automatic
W32Time   Running    Manual`,
    },
    whoamiPriv: {
      label: "whoami /priv",
      cmd: "whoami /priv",
      output: `PRIVILEGES INFORMATION
----------------------
Privilege Name                Description                          State   
============================= ==================================== ========
SeChangeNotifyPrivilege       Bypass traverse checking             Enabled 
SeIncreaseWorkingSetPrivilege Increase a process working set       Disabled
SeShutdownPrivilege           Shut down the system                 Disabled`,
    },
    connections: {
      label: "Get-NetTCPConnection -State Listen",
      cmd: "Get-NetTCPConnection -State Listen | Select-Object LocalAddress, LocalPort, OwningProcess",
      output: `LocalAddress LocalPort OwningProcess
------------ --------- -------------
0.0.0.0            135           924 (svchost)
0.0.0.0            445             4 (System - SMB)
0.0.0.0           3389          1480 (TermService - RDP)
127.0.0.1         5040          3820 (SearchHost)`,
    },
  };

  const executeCommand = (cmdKey) => {
    setIsExecuting(true);
    setSelectedCommandKey(cmdKey);
    const selected = cliEnvironment === "bash" ? bashCommands[cmdKey] : powershellCommands[cmdKey];
    setSandboxOutput(`$ ${selected.cmd}\n[Processing execution pipeline...]`);
    setTimeout(() => {
      setSandboxOutput(`$ ${selected.cmd}\n\n${selected.output}`);
      setIsExecuting(false);
    }, 450);
  };

  /* -------------------------------------------------------------------------- */
  /* PRACTICAL LAB CHECKLIST STATE                                              */
  /* -------------------------------------------------------------------------- */
  const [labTasks, setLabTasks] = useState({
    task1: false, // Establish system baseline (OS version, users, processes, sockets)
    task2: false, // Inspect Linux file permissions & Windows NTFS ACLs
    task3: false, // Inspect startup mechanisms (systemd units, Task Scheduler, registry)
    task4: false, // Review system and authentication logs for anomalous events
    task5: false, // Write an automated Bash or PowerShell inventory script
    task6: false, // Investigate a simulated persistence anomaly or rogue service
    task7: false, // Remediate finding and document technical verification
  });

  const toggleLabTask = (taskKey) => {
    setLabTasks((prev) => ({ ...prev, [taskKey]: !prev[taskKey] }));
  };

  const completedTasksCount = Object.values(labTasks).filter(Boolean).length;

  const resetChecklist = () => {
    setLabTasks({
      task1: false,
      task2: false,
      task3: false,
      task4: false,
      task5: false,
      task6: false,
      task7: false,
    });
  };

  /* -------------------------------------------------------------------------- */
  /* ASSESSMENT QUIZ (5 SCENARIO QUESTIONS)                                     */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "Which component executes privileged operating-system functions?",
      options: ["A regular text editor", "The kernel", "A user document", "A browser tab"],
      correct: 1,
      explanation:
        "The kernel is the core privileged component of the operating system that directly mediates CPU scheduling, physical memory translation, device drivers, and security policy enforcement.",
    },
    {
      id: 2,
      question: "What does Linux permission mode 640 mean?",
      options: [
        "Everyone can write",
        "Owner read/write, group read, others no permissions",
        "Owner execute only",
        "Group full control",
      ],
      correct: 1,
      explanation:
        "In octal notation, 6 = Read + Write (4+2), 4 = Read only (4), and 0 = No permissions. Thus, 640 gives the file owner rw-, group members r--, and all others ---.",
    },
    {
      id: 3,
      question: "Which PowerShell command retrieves running processes?",
      options: ["Get-Process", "Get-Route", "Get-Content", "Get-EventLogPath"],
      correct: 0,
      explanation:
        "Get-Process is the standard PowerShell cmdlet for enumerating active system processes, thread IDs, CPU time, and memory working sets.",
    },
    {
      id: 4,
      question: "Why should an unfamiliar scheduled task be investigated before removal?",
      options: [
        "All scheduled tasks are malicious",
        "It may be a legitimate application component",
        "Scheduled tasks cannot execute programs",
        "It always indicates kernel compromise",
      ],
      correct: 1,
      explanation:
        "Legitimate software (Windows Update, backup utilities, browser updaters) frequently uses Task Scheduler. Deleting an unknown task without checking its author, binary path, and digital signature can cause operational downtime.",
    },
    {
      id: 5,
      question: "What is the primary value of system logs during incident response?",
      options: [
        "They guarantee detection of every attack",
        "They provide evidence of recorded events for investigation",
        "They automatically remove malware",
        "They replace access controls",
      ],
      correct: 1,
      explanation:
        "System and authentication logs record historical timestamps, IP addresses, logon types, and process execution telemetry, providing the indispensable forensic evidence required to reconstruct an intrusion timeline.",
    },
  ];

  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  const handleSelectQuizAnswer = (qId, optionIdx) => {
    if (submittedQuiz) return;
    setSelectedQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedQuizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [selectedQuizAnswers]);

  /* -------------------------------------------------------------------------- */
  /* TOPICS NAVIGATION DEFINITIONS                                              */
  /* -------------------------------------------------------------------------- */
  const topics = [
    { id: 1, title: "3.1 OS Architecture & Core Concepts", badge: "Kernel vs User" },
    { id: 2, title: "3.2 Linux Fundamentals & Filesystem", badge: "FHS & Shell" },
    { id: 3, title: "3.3 Linux Permissions & Privileges", badge: "UIDs & Chmod" },
    { id: 4, title: "3.4 Linux Processes, Services & Boot", badge: "systemd & Signals" },
    { id: 5, title: "3.5 Linux Logging & Troubleshooting", badge: "journalctl & Logs" },
    { id: 6, title: "3.6 Windows Internals & Architecture", badge: "Executive & Tokens" },
    { id: 7, title: "3.7 Windows CLI & PowerShell", badge: ".NET Pipelines" },
    { id: 8, title: "3.8 Windows Processes, Services & Registry", badge: "Persistence" },
    { id: 9, title: "3.9 Windows Security, Auditing & Events", badge: "Event Logs" },
    { id: 10, title: "3.10 Cross-Platform Lab & Assessment", badge: "Hands-on Lab" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-stone-900 antialiased selection:bg-orange-500 selection:text-white">
      {/* Top Header & Navigation */}
      <div className="border-b border-[#eae6de] bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ModuleNav
            track="cybersecurity"
            currentModuleId="os-internals"
            showAiTutor={showAiTutor}
            onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
            aiTutorLabel="Cybersecurity AI Mentor"
          />
        </div>
      </div>

      {/* Hero Banner */}
      <div className="border-b border-[#eae6de] bg-gradient-to-b from-[#f9f7f2] to-[#f4f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-200">
                  Prepspaces Cybersecurity Master Course
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                  Module 3 · Beginner to Advanced
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  10 Learning Objectives
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">
                Linux Fundamentals, Windows Internals, and Command-Line Administration
              </h1>
              <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
                Master the architectural underpinnings of Linux and Windows: kernel boundaries, process lifecycles, memory protections, filesystem permissions, services, system logging, Bash and PowerShell automation, and live incident triage.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-stone-500 italic">
                <span>Informed by Linux Foundation standards, Windows Internals (Russinovich), and NIST SP 800-123.</span>
              </div>
            </div>

            {/* Quick Actions / Tab Navigation */}
            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab("theory")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === "theory"
                    ? "bg-stone-900 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                Comprehensive Curriculum
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("perm-calc")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === "perm-calc"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Lock className="w-3.5 h-3.5 text-orange-500" />
                chmod & SUID Calculator
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("process-inspector")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === "process-inspector"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Activity className="w-3.5 h-3.5 text-amber-500" />
                Process & Signal Inspector
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("token-explorer")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === "token-explorer"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                Windows Token & UAC
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("cli-sandbox")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === "cli-sandbox"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-stone-800" />
                Dual-CLI Sandbox (Bash / PS)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Learning Objectives Callout Banner */}
        <div className="mb-8 rounded-2xl border border-orange-200 bg-orange-50/70 p-5 md:p-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-orange-100 text-orange-700 shrink-0 mt-0.5">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-orange-900">
                Module 3 Learning Objectives
              </h2>
              <p className="mt-1 text-xs text-orange-800">
                By completing this module, you will master the operational and architectural foundations required to:
              </p>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-stone-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Explain kernel responsibilities, system calls, virtual memory, and user-space boundaries.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Navigate Linux and Windows filesystems using advanced command-line tools.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Manage users, groups, octal permissions, SUID/SGID bits, sudo policies, and NTFS ACLs.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Inspect processes, thread contexts, signals (SIGTERM/SIGKILL), and systemd services.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Analyze Windows architecture: Executive, Object Manager, Security Reference Monitor, and Access Tokens.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Automate administrative workflows using structured Bash pipelines and PowerShell .NET objects.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Audit system authentication events via Linux journalctl, /var/log/auth.log, and Windows Event Logs.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Investigate suspicious persistence mechanisms across scheduled tasks, cron jobs, and registry Run keys.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================== */}
        {/* TAB 1: FULL CURRICULUM THEORY & PRACTICAL SECTIONS                 */}
        {/* ================================================================== */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Syllabus Navigator */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 rounded-2xl border border-stone-200 bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <span className="text-xs font-bold text-stone-900 tracking-wide uppercase">
                    Module 3 Syllabus
                  </span>
                  <span className="text-[11px] font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">
                    10 Sections
                  </span>
                </div>
                <nav className="mt-3 space-y-1">
                  {topics.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTopic(t.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition flex flex-col gap-0.5 ${
                        (selectedTopic || 1) === t.id
                          ? "bg-orange-50 text-orange-950 font-semibold border border-orange-200 shadow-2xs"
                          : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                      }`}
                    >
                      <span>{t.title}</span>
                      <span className="text-[10px] text-stone-600 uppercase tracking-wider">
                        {t.badge}
                      </span>
                    </button>
                  ))}
                </nav>

                <div className="mt-6 pt-4 border-t border-stone-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-800 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                    Interactive Simulators
                  </div>
                  <div className="grid grid-cols-1 gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={() => setActiveTab("perm-calc")}
                      className="text-left px-2.5 py-1.5 rounded-lg text-stone-600 hover:bg-orange-50 hover:text-orange-900 transition flex items-center justify-between"
                    >
                      <span>chmod & SUID Matrix</span>
                      <Lock className="w-3 h-3 text-orange-400" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("process-inspector")}
                      className="text-left px-2.5 py-1.5 rounded-lg text-stone-600 hover:bg-orange-50 hover:text-orange-900 transition flex items-center justify-between"
                    >
                      <span>Process & Signal Tree</span>
                      <Activity className="w-3 h-3 text-amber-400" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("token-explorer")}
                      className="text-left px-2.5 py-1.5 rounded-lg text-stone-600 hover:bg-orange-50 hover:text-orange-900 transition flex items-center justify-between"
                    >
                      <span>Windows Token Explorer</span>
                      <ShieldCheck className="w-3 h-3 text-blue-400" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("cli-sandbox")}
                      className="text-left px-2.5 py-1.5 rounded-lg text-stone-600 hover:bg-orange-50 hover:text-orange-900 transition flex items-center justify-between"
                    >
                      <span>Dual CLI Sandbox</span>
                      <Terminal className="w-3 h-3 text-stone-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="lg:col-span-3 space-y-8">
              {/* TOPIC 3.1 */}
              {(selectedTopic === 1 || !selectedTopic || selectedTopic === 0) && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 3.1
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Operating-System Architecture and Core Concepts
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      The kernel, user space, system call boundaries, processes, threads, virtual memory, and hardware privilege rings.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">What is an Operating System?</h3>
                    <p>
                      An operating system (OS) is the fundamental system software that mediates between hardware and application code. It coordinates CPU time, physical memory allocation, storage I/O, device drivers, and security identity context.
                    </p>
                    <p>
                      In cybersecurity, the operating system is the <strong>primary enforcement boundary</strong>. It enforces which users can access confidential files, which processes can bind privileged network ports, and whether memory spaces remain isolated against unauthorized code injection.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Kernel Mode vs. User Mode (Privilege Rings)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                        <strong className="text-stone-900 block font-bold text-sm">
                          User Mode (Ring 3)
                        </strong>
                        <p className="text-stone-700">
                          Where ordinary user programs (browsers, shells, Node.js, Python) execute. Applications possess private virtual address spaces and cannot directly issue raw I/O instructions or access physical hardware registers.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/60 space-y-2">
                        <strong className="text-orange-950 block font-bold text-sm">
                          Kernel Mode (Ring 0)
                        </strong>
                        <p className="text-stone-700">
                          Where the core OS kernel and device drivers execute with unrestricted hardware access. A crash in kernel space triggers a system panic (Linux Kernel Panic / Windows BSOD).
                        </p>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">System Calls: Bridging the Boundary</h3>
                    <p className="text-xs text-stone-700">
                      When a user-space application requests a protected resource (e.g. reading <code>/etc/passwd</code> or sending a network packet), it invokes a <strong>system call (syscall)</strong>. The CPU executes a special hardware instruction (such as <code>syscall</code> on x86_64), switching from Ring 3 to Ring 0. The kernel validates caller permissions before fulfilling the request.
                    </p>
                    <div className="p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-center text-xs">
                      User Application -&gt; C Library (glibc/Win32) -&gt; System Call Interface -&gt; Kernel Subsystem -&gt; Hardware
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Processes, Threads, and Virtual Memory</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">Process:</strong>
                        An independent execution instance containing its own PID, virtual address space, file descriptor table, and security token.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">Thread:</strong>
                        The basic schedulable unit of CPU execution within a process. Multiple threads share the parent process's memory space.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">Virtual Memory:</strong>
                        Hardware MMU page tables isolate process memory. Process A cannot read or write Process B's memory addresses directly.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 3.2 */}
              {selectedTopic === 2 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 3.2
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Linux Fundamentals and Filesystem Navigation
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Linux distributions, Filesystem Hierarchy Standard (FHS), core CLI utilities, streams, pipes, and text processing.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">The Filesystem Hierarchy Standard (FHS)</h3>
                    <p>
                      Linux organizes all files, devices, processes, and sockets into a unified single hierarchical tree beginning at the root directory <code>/</code>:
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                        <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                          <tr>
                            <th className="px-3.5 py-2 border-b border-stone-200">Directory</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">Standard Purpose</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">Security Significance</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-700">
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">/etc</td>
                            <td className="px-3.5 py-2">System-wide configuration files</td>
                            <td className="px-3.5 py-2">Contains /etc/passwd, /etc/shadow, sudoers, sshd_config</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">/var/log</td>
                            <td className="px-3.5 py-2">Variable data, specifically persistent system logs</td>
                            <td className="px-3.5 py-2">Audit trail: auth.log, syslog, nginx/access.log</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">/tmp</td>
                            <td className="px-3.5 py-2">Temporary files; world-writable with sticky bit</td>
                            <td className="px-3.5 py-2">Frequent staging area for malicious dropped binaries</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">/proc</td>
                            <td className="px-3.5 py-2">Virtual filesystem exposing live kernel/process RAM state</td>
                            <td className="px-3.5 py-2">Live forensic analysis: /proc/[PID]/cmdline, /proc/[PID]/maps</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">/usr/bin</td>
                            <td className="px-3.5 py-2">Standard user-space executable binaries</td>
                            <td className="px-3.5 py-2">Integrity monitoring target (Tripwire/AIDE)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">/root</td>
                            <td className="px-3.5 py-2">Home directory for root superuser</td>
                            <td className="px-3.5 py-2">Permissions must strictly be 700 (drwx------)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Standard Input, Output, and Redirection</h3>
                    <p className="text-xs text-stone-700">
                      Every Linux process opens three default I/O streams:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs">
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">0: stdin (Standard Input)</div>
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">1: stdout (Standard Output)</div>
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">2: stderr (Standard Error)</div>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50 text-xs font-mono space-y-1">
                      <div># Overwrite stdout to file:</div>
                      <div>echo &quot;Baseline started&quot; &gt; baseline.log</div>
                      <div># Append stdout to file:</div>
                      <div>echo &quot;Second entry&quot; &gt;&gt; baseline.log</div>
                      <div># Redirect stderr to null (suppress permission errors):</div>
                      <div>find / -name id_rsa 2&gt;/dev/null</div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 3.3 */}
              {selectedTopic === 3 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 3.3
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Linux Users, Groups, Permissions, and Privileges
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      UIDs, GIDs, octal permissions, chmod/chown, SUID/SGID vulnerabilities, sticky bit, and sudo policies.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">User & Group Identities</h3>
                    <p>
                      Linux represents users with integer <strong>User IDs (UID)</strong> and groups with <strong>Group IDs (GID)</strong>. The root superuser always has UID 0. System daemons typically occupy UIDs 1–999, while regular human users begin at UID 1000.
                    </p>
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50 font-mono text-xs">
                      $ id<br />
                      uid=1000(analyst) gid=1000(analyst) groups=1000(analyst),27(sudo),4(adm)
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">The Linux 9-Bit Permission Model</h3>
                    <p>
                      Standard file permissions comprise 3 sets of 3 bits: <strong>User (Owner)</strong>, <strong>Group</strong>, and <strong>Other</strong>:
                    </p>
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2 text-xs font-mono">
                      <div>- r w x  r - x  r - -  (Binary: 111 101 100 -&gt; Octal: 754)</div>
                      <div>  [Owner] [Group] [Other]</div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Special Permissions: SUID, SGID, and Sticky Bit</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">SUID (Set User ID - 4000):</strong>
                        When executed, the binary runs with the effective privileges of the file owner (e.g. <code>/usr/bin/passwd</code> runs as root).
                        <div className="mt-1 text-rose-700 font-semibold">Misconfigured SUID binaries are a primary source of local privilege escalation!</div>
                      </div>
                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">SGID (Set Group ID - 2000):</strong>
                        Files created inside an SGID directory automatically inherit the directory's group ownership rather than the creator's primary group.
                      </div>
                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">Sticky Bit (1000):</strong>
                        Applied to shared writable directories (e.g. <code>/tmp</code>). Prevents users from deleting or renaming files owned by others.
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">sudo and Least Privilege Architecture</h3>
                    <p className="text-xs text-stone-700">
                      The <code>sudo</code> command allows trusted users to execute privileged operations without sharing the root password. Configured via <code>/etc/sudoers</code> (safely edited with <code>visudo</code>).
                    </p>
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50 font-mono text-xs">
                      # Inspect allowed privileges for current user:
                      <br />$ sudo -l
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 3.4 */}
              {selectedTopic === 4 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 3.4
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Linux Processes, Services, Boot, and Resource Management
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Process lifecycles, signals (SIGTERM/SIGKILL), systemd service management, boot flow, and diagnostic metrics.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">Linux Signals</h3>
                    <p>
                      Signals are asynchronous notifications dispatched by the kernel or users to request process state changes:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                        <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                          <tr>
                            <th className="px-3.5 py-2 border-b border-stone-200">Signal</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">Value</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">Behavior & Catchability</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-700">
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">SIGTERM</td>
                            <td className="px-3.5 py-2 font-mono">15</td>
                            <td className="px-3.5 py-2">Graceful termination request. The process can catch it to flush files.</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-rose-700">SIGKILL</td>
                            <td className="px-3.5 py-2 font-mono">9</td>
                            <td className="px-3.5 py-2">Forced termination by kernel. Cannot be caught, blocked, or ignored.</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">SIGSTOP</td>
                            <td className="px-3.5 py-2 font-mono">19</td>
                            <td className="px-3.5 py-2">Pauses execution. Cannot be caught or ignored.</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">SIGCONT</td>
                            <td className="px-3.5 py-2 font-mono">18</td>
                            <td className="px-3.5 py-2">Resumes a paused/stopped process.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">systemd Service Management</h3>
                    <p className="text-xs text-stone-700">
                      Modern distributions use <code>systemd</code> as PID 1 to manage system services and socket activation:
                    </p>
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50 font-mono text-xs space-y-1">
                      <div>sudo systemctl status sshd</div>
                      <div>sudo systemctl stop malicious-service</div>
                      <div>sudo systemctl disable malicious-service</div>
                      <div>systemctl list-unit-files --type=service --state=enabled</div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 3.5 */}
              {selectedTopic === 5 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 3.5
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Linux Logging, Networking, and System Troubleshooting
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      System logs, journalctl, authentication events, socket enumeration, SSH hardening, and diagnostic triage.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">Key Linux Log Files</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">/var/log/auth.log (/var/log/secure):</strong>
                        Records every SSH login, sudo command invocation, PAM failure, and user credential change.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">journalctl:</strong>
                        Binary systemd journal reader. Query logs across boots, services, and priority levels.
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Investigating Listening Sockets</h3>
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50 font-mono text-xs space-y-1">
                      <div># List listening TCP and UDP sockets with owning process names:</div>
                      <div>sudo ss -tulnp</div>
                      <div># Check open files and network sockets for a specific process:</div>
                      <div>sudo lsof -p 3104</div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 3.6 */}
              {selectedTopic === 6 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 3.6
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Windows Internals and System Architecture
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Windows kernel vs user mode, Executive subsystems, Access Tokens, Security Reference Monitor (SRM), and DEP/ASLR.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">Windows Executive Architecture</h3>
                    <p>
                      Windows architecture partitions system components cleanly between user mode and kernel mode:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">Security Reference Monitor (SRM):</strong>
                        The in-kernel security authority. Compares the caller's Access Token against the target object's Security Descriptor (DACL).
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-stone-900 block mb-1">Object Manager:</strong>
                        Provides uniform naming, handles, and reference-counting for files, registry keys, synchronization mutexes, and processes.
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Windows Access Tokens & Mandatory Integrity Control</h3>
                    <p className="text-xs text-stone-700">
                      Every process created in Windows inherits an <strong>Access Token</strong> describing its User SID, Group SIDs, Privileges (e.g. <code>SeDebugPrivilege</code>), and Mandatory Integrity Level (Low, Medium, High, System). Even if an administrator logs in, their primary interactive session runs with a <strong>Filtered Medium Integrity Token</strong> until elevated via User Account Control (UAC).
                    </p>
                  </div>
                </div>
              )}

              {/* TOPIC 3.7 */}
              {selectedTopic === 7 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 3.7
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Windows Command-Line Administration and PowerShell
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      PowerShell object-oriented pipelines, core cmdlets, CimInstances, pipeline filtering, and safe administrative scripting.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">PowerShell Object Pipelines</h3>
                    <p>
                      Unlike traditional shells (Bash/CMD) that pass unstructured text strings, PowerShell pipelines pass rich <strong>.NET objects</strong> with strongly-typed properties and methods:
                    </p>
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 font-mono text-xs space-y-2">
                      <div># Inspect top 5 memory-consuming processes:</div>
                      <div>Get-Process | Sort-Object WorkingSet64 -Descending | Select-Object -First 5 Name, Id, WorkingSet64</div>
                      <div className="pt-2 border-t border-stone-200"># Query active TCP listeners:</div>
                      <div>Get-NetTCPConnection -State Listen | Select-Object LocalAddress, LocalPort, OwningProcess</div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 3.8 */}
              {selectedTopic === 8 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 3.8
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Windows Processes, Services, Registry, and Startup Persistence
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Service Control Manager, Registry hives, Task Scheduler, startup Run keys, and hunting persistence artifacts.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">The Windows Registry Architecture</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                        <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                          <tr>
                            <th className="px-3.5 py-2 border-b border-stone-200">Registry Hive</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">Role & Security Relevance</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-700">
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">HKLM</td>
                            <td className="px-3.5 py-2">HKEY_LOCAL_MACHINE: System-wide configuration, SAM database, SYSTEM startup drivers</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">HKCU</td>
                            <td className="px-3.5 py-2">HKEY_CURRENT_USER: Settings and startup Run keys for currently logged-in interactive user</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">Common Adversary Persistence Locations</h3>
                    <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 pl-2">
                      <li><code>HKLM\Software\Microsoft\Windows\CurrentVersion\Run</code></li>
                      <li><code>HKCU\Software\Microsoft\Windows\CurrentVersion\Run</code></li>
                      <li><code>C:\Users\&lt;User&gt;\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup</code></li>
                      <li>Task Scheduler tasks executing encoded PowerShell commands (<code>-EncodedCommand</code>)</li>
                      <li>Malicious Windows Services installed with unquoted service paths</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* TOPIC 3.9 */}
              {selectedTopic === 9 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 3.9
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Windows Security, Permissions, Auditing, and Troubleshooting
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      NTFS access control lists, User Account Control, Windows Defender Firewall, and Windows Event Log analysis.
                    </p>
                  </div>

                  <div className="text-stone-700 text-sm leading-relaxed space-y-4">
                    <h3 className="text-base font-bold text-stone-900">Essential Windows Security Event IDs</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                        <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                          <tr>
                            <th className="px-3.5 py-2 border-b border-stone-200">Event ID</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">Log Name</th>
                            <th className="px-3.5 py-2 border-b border-stone-200">Significance for Incident Response</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-700">
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">4624</td>
                            <td className="px-3.5 py-2">Security</td>
                            <td className="px-3.5 py-2">Successful account logon (Logon Type 2: Interactive, Type 3: Network, Type 10: RDP)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-rose-700">4625</td>
                            <td className="px-3.5 py-2">Security</td>
                            <td className="px-3.5 py-2">Failed logon attempt (Critical for detecting password brute-forcing)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">4688</td>
                            <td className="px-3.5 py-2">Security</td>
                            <td className="px-3.5 py-2">A new process has been created (Requires command-line audit logging enabled)</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="px-3.5 py-2 font-mono font-bold text-stone-900">7045</td>
                            <td className="px-3.5 py-2">System</td>
                            <td className="px-3.5 py-2">A new service was installed in the system (Common persistence indicator)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 3.10 */}
              {selectedTopic === 10 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs space-y-8">
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Section 3.10
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                      Cross-Platform Administration, Automation, and Security Lab
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      Bash vs PowerShell comparison, practical investigation lab, inventory scripts, and module assessment quiz.
                    </p>
                  </div>

                  {/* Practical Lab Checklist */}
                  <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-5 md:p-6 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-orange-600 text-white">
                            Practical Lab
                          </span>
                          <h3 className="text-sm font-bold text-stone-900">
                            Investigate a Suspicious System Change (Cross-Platform)
                          </h3>
                        </div>
                        <p className="text-xs text-stone-600 mt-0.5">
                          Environment: An isolated Linux VM or Windows sandbox test workstation.
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-stone-700 bg-white px-3 py-1 rounded-full border border-stone-200">
                          {completedTasksCount} of 7 tasks completed
                        </span>
                        <button
                          type="button"
                          onClick={resetChecklist}
                          className="text-xs text-stone-500 hover:text-stone-900 underline cursor-pointer"
                        >
                          Reset checklist
                        </button>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-orange-600 h-full transition-all duration-300"
                        style={{ width: `${(completedTasksCount / 7) * 100}%` }}
                      />
                    </div>

                    {/* Tasks List */}
                    <div className="space-y-2">
                      {[
                        { key: "task1", title: "Task 1 — Establish a baseline: Record OS version, logged-in users, running processes, and active sockets." },
                        { key: "task2", title: "Task 2 — Inspect permissions: Examine ownership on Linux (chmod/chown) and NTFS ACLs on Windows." },
                        { key: "task3", title: "Task 3 — Inspect startup mechanisms: Review systemd units, cron directories, Task Scheduler, and Run keys." },
                        { key: "task4", title: "Task 4 — Review logs: Audit /var/log/auth.log or Windows Security Event 4624/4625 for login events." },
                        { key: "task5", title: "Task 5 — Automate inventory: Run an automated Bash or PowerShell system discovery script." },
                        { key: "task6", title: "Task 6 — Investigate an anomaly: Locate a simulated file with overly broad permissions (e.g. 777) or rogue service." },
                        { key: "task7", title: "Task 7 — Remediate and verify: Restore proper least-privilege permissions and verify normal operation." },
                      ].map((t) => (
                        <label
                          key={t.key}
                          className="flex items-center gap-3 p-3 rounded-xl border border-stone-200 bg-white hover:bg-orange-50/40 cursor-pointer transition text-xs"
                        >
                          <input
                            type="checkbox"
                            checked={labTasks[t.key]}
                            onChange={() => toggleLabTask(t.key)}
                            className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500 border-stone-300"
                          />
                          <span className={labTasks[t.key] ? "line-through text-stone-400" : "text-stone-800 font-medium"}>
                            {t.title}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Assessment Quiz */}
                  <div className="rounded-2xl border border-stone-200 bg-white p-5 md:p-6 space-y-6">
                    <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                      <div>
                        <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                          Module Assessment Quiz
                        </h3>
                        <p className="text-xs text-stone-500">
                          Verify your mastery of Linux administration and Windows internals.
                        </p>
                      </div>
                      {submittedQuiz && (
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 text-orange-900 border border-orange-200">
                          Score: {quizScore} / 5 ({Math.round((quizScore / 5) * 100)}%)
                        </span>
                      )}
                    </div>

                    <div className="space-y-6">
                      {quizQuestions.map((q, idx) => (
                        <div key={q.id} className="space-y-2.5">
                          <div className="text-xs font-semibold text-stone-900">
                            {idx + 1}. {q.question}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = selectedQuizAnswers[q.id] === optIdx;
                              const isCorrect = q.correct === optIdx;
                              let btnClass = "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100";

                              if (submittedQuiz) {
                                if (isCorrect) {
                                  btnClass = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold";
                                } else if (isSelected && !isCorrect) {
                                  btnClass = "border-rose-500 bg-rose-50 text-rose-900 line-through";
                                } else {
                                  btnClass = "border-stone-200 bg-stone-50 text-stone-400";
                                }
                              } else if (isSelected) {
                                btnClass = "border-orange-500 bg-orange-50 text-orange-950 font-semibold shadow-2xs";
                              }

                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                                  className={`text-left p-3 rounded-xl border text-xs transition flex items-center justify-between ${btnClass}`}
                                >
                                  <span>{opt}</span>
                                  {submittedQuiz && isCorrect && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                                </button>
                              );
                            })}
                          </div>

                          {submittedQuiz && (
                            <div className="text-[11px] p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-700">
                              <strong>Explanation:</strong> {q.explanation}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      {!submittedQuiz ? (
                        <button
                          type="button"
                          onClick={() => setSubmittedQuiz(true)}
                          disabled={Object.keys(selectedQuizAnswers).length < 5}
                          className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white text-xs font-bold transition shadow-xs cursor-pointer"
                        >
                          Submit Assessment
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setSubmittedQuiz(false);
                            setSelectedQuizAnswers({});
                          }}
                          className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition cursor-pointer"
                        >
                          Retake Quiz
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Copyable Automation Scripts Deliverables */}
                  <div className="rounded-2xl border border-stone-200 bg-stone-900 text-stone-100 p-5 md:p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                      <div>
                        <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                          Deliverable Artifact
                        </span>
                        <h3 className="text-sm font-bold text-white mt-0.5">
                          Automated Linux System Baseline Script (Bash)
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          copyCode(
                            `#!/usr/bin/env bash
# Prepspaces Linux Host Security Baseline Script
set -euo pipefail

echo "=========================================="
echo "      LINUX HOST SECURITY BASELINE       "
echo "=========================================="
echo "[*] Host: $(hostname) | Kernel: $(uname -r) | Date: $(date -u)"
echo

echo "=== 1. Logged-in Users & Sudoers ==="
who
echo "Current user id: $(id)"
echo

echo "=== 2. Memory & Storage Utilization ==="
free -h
echo
df -h --total | grep -E 'Filesystem|total'
echo

echo "=== 3. Listening Sockets (TCP/UDP) ==="
ss -tulnp 2>/dev/null || ss -tuln
echo

echo "=== 4. SUID Binaries Audit (Top 10) ==="
find / -perm -4000 -type f 2>/dev/null | head -n 10
echo

echo "=== 5. Recent Authentication Failures ==="
if [ -f /var/log/auth.log ]; then
  grep "Failed password" /var/log/auth.log | tail -n 5 || echo "No failed passwords recorded."
elif [ -f /var/log/secure ]; then
  grep "Failed password" /var/log/secure | tail -n 5 || echo "No failed passwords recorded."
else
  journalctl -u ssh -p warning -n 5 --no-pager 2>/dev/null || echo "Journal access required."
fi

echo "=========================================="
echo "          AUDIT COMPLETE                  "
echo "=========================================="`,
                            "bash-script"
                          )
                        }
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-200 transition"
                      >
                        {copiedCodeId === "bash-script" ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-stone-400" />
                            <span>Copy Bash Script</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="text-xs font-mono text-stone-300 overflow-x-auto max-h-64 p-3 rounded-xl bg-stone-950/80 border border-stone-800 leading-relaxed">
{`#!/usr/bin/env bash
# Prepspaces Linux Host Security Baseline Script
set -euo pipefail

echo "=========================================="
echo "      LINUX HOST SECURITY BASELINE       "
echo "=========================================="
echo "[*] Host: $(hostname) | Kernel: $(uname -r) | Date: $(date -u)"
echo

echo "=== 1. Logged-in Users & Sudoers ==="
who
echo "Current user id: $(id)"...`}
                    </pre>
                  </div>

                  {/* Recommended Learning Resources */}
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 md:p-6 space-y-4">
                    <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                      Recommended Learning Resources
                    </h3>
                    <p className="text-xs text-stone-600">
                      Authoritative documentation to deepen your operating systems engineering mastery:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                      <a
                        href="https://www.linuxfoundation.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>Linux Foundation</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          Linux ecosystem standards, kernel documentation, and open-source administration.
                        </p>
                      </a>

                      <a
                        href="https://help.ubuntu.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>Ubuntu Server Documentation</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          System configuration, package management, systemd, and server administration.
                        </p>
                      </a>

                      <a
                        href="https://learn.microsoft.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>Microsoft Learn</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          Official Windows architecture, security subsystems, and executive internals.
                        </p>
                      </a>

                      <a
                        href="https://learn.microsoft.com/en-us/powershell/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>PowerShell Documentation</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          Reference documentation for cmdlets, pipelines, CimInstances, and automation.
                        </p>
                      </a>

                      <a
                        href="https://csrc.nist.gov/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 group-hover:text-orange-600">
                          <span>NIST Cybersecurity Resources</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                        <p className="mt-1 text-[11px] text-stone-500">
                          NIST SP 800-123 guide to general server security and operating system hardening.
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 2: CHMOD & SUID PERMISSION CALCULATOR                          */}
        {/* ================================================================== */}
        {activeTab === "perm-calc" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                  Interactive Simulator 1
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                  Linux File Permission, chmod & SUID Matrix Calculator
                </h2>
                <p className="mt-1 text-xs text-stone-500">
                  Toggle individual read, write, execute, and special bits to evaluate octal values, symbolic strings, and security risk levels.
                </p>
              </div>

              {/* Permission Checkboxes Table */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-xs text-center border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                    <tr>
                      <th className="px-3.5 py-2.5 text-left border-b border-stone-200">Category</th>
                      <th className="px-3.5 py-2.5 border-b border-stone-200">Read (r / 4)</th>
                      <th className="px-3.5 py-2.5 border-b border-stone-200">Write (w / 2)</th>
                      <th className="px-3.5 py-2.5 border-b border-stone-200">Execute (x / 1)</th>
                      <th className="px-3.5 py-2.5 border-b border-stone-200">Special Bit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    <tr className="hover:bg-stone-50">
                      <td className="px-3.5 py-2.5 text-left font-bold text-stone-900">User / Owner</td>
                      <td className="px-3.5 py-2.5">
                        <input
                          type="checkbox"
                          checked={permBits.ownerR}
                          onChange={() => togglePerm("ownerR")}
                          className="w-4 h-4 rounded text-orange-600"
                        />
                      </td>
                      <td className="px-3.5 py-2.5">
                        <input
                          type="checkbox"
                          checked={permBits.ownerW}
                          onChange={() => togglePerm("ownerW")}
                          className="w-4 h-4 rounded text-orange-600"
                        />
                      </td>
                      <td className="px-3.5 py-2.5">
                        <input
                          type="checkbox"
                          checked={permBits.ownerX}
                          onChange={() => togglePerm("ownerX")}
                          className="w-4 h-4 rounded text-orange-600"
                        />
                      </td>
                      <td className="px-3.5 py-2.5">
                        <label className="flex items-center justify-center gap-1.5 text-[11px] font-semibold cursor-pointer">
                          <input
                            type="checkbox"
                            checked={permBits.suid}
                            onChange={() => togglePerm("suid")}
                            className="w-4 h-4 rounded text-orange-600"
                          />
                          SUID (4)
                        </label>
                      </td>
                    </tr>

                    <tr className="hover:bg-stone-50">
                      <td className="px-3.5 py-2.5 text-left font-bold text-stone-900">Group</td>
                      <td className="px-3.5 py-2.5">
                        <input
                          type="checkbox"
                          checked={permBits.groupR}
                          onChange={() => togglePerm("groupR")}
                          className="w-4 h-4 rounded text-orange-600"
                        />
                      </td>
                      <td className="px-3.5 py-2.5">
                        <input
                          type="checkbox"
                          checked={permBits.groupW}
                          onChange={() => togglePerm("groupW")}
                          className="w-4 h-4 rounded text-orange-600"
                        />
                      </td>
                      <td className="px-3.5 py-2.5">
                        <input
                          type="checkbox"
                          checked={permBits.groupX}
                          onChange={() => togglePerm("groupX")}
                          className="w-4 h-4 rounded text-orange-600"
                        />
                      </td>
                      <td className="px-3.5 py-2.5">
                        <label className="flex items-center justify-center gap-1.5 text-[11px] font-semibold cursor-pointer">
                          <input
                            type="checkbox"
                            checked={permBits.sgid}
                            onChange={() => togglePerm("sgid")}
                            className="w-4 h-4 rounded text-orange-600"
                          />
                          SGID (2)
                        </label>
                      </td>
                    </tr>

                    <tr className="hover:bg-stone-50">
                      <td className="px-3.5 py-2.5 text-left font-bold text-stone-900">Other (World)</td>
                      <td className="px-3.5 py-2.5">
                        <input
                          type="checkbox"
                          checked={permBits.otherR}
                          onChange={() => togglePerm("otherR")}
                          className="w-4 h-4 rounded text-orange-600"
                        />
                      </td>
                      <td className="px-3.5 py-2.5">
                        <input
                          type="checkbox"
                          checked={permBits.otherW}
                          onChange={() => togglePerm("otherW")}
                          className="w-4 h-4 rounded text-orange-600"
                        />
                      </td>
                      <td className="px-3.5 py-2.5">
                        <input
                          type="checkbox"
                          checked={permBits.otherX}
                          onChange={() => togglePerm("otherX")}
                          className="w-4 h-4 rounded text-orange-600"
                        />
                      </td>
                      <td className="px-3.5 py-2.5">
                        <label className="flex items-center justify-center gap-1.5 text-[11px] font-semibold cursor-pointer">
                          <input
                            type="checkbox"
                            checked={permBits.sticky}
                            onChange={() => togglePerm("sticky")}
                            className="w-4 h-4 rounded text-orange-600"
                          />
                          Sticky (1)
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Output Preview Card */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-stone-600">Octal Value:</span>
                    <span className="font-mono font-bold text-lg text-orange-600">
                      chmod {calculatedChmod.octal} file.txt
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-stone-600">ls -l Symbolic Representation:</span>
                    <span className="font-mono font-bold text-stone-900 bg-white px-2 py-1 rounded border border-stone-200">
                      {calculatedChmod.symbolic}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 flex flex-col justify-between space-y-2">
                  <span className="text-xs font-bold text-stone-600">Security Assessment Verdict:</span>
                  <div className={`p-2.5 rounded-lg border text-xs ${calculatedChmod.verdictColor}`}>
                    {calculatedChmod.securityVerdict}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 3: PROCESS INSPECTOR & SIGNAL CONTROLLER                       */}
        {/* ================================================================== */}
        {activeTab === "process-inspector" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                  Interactive Simulator 2
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                  Process Tree Inspector & UNIX Signal Controller
                </h2>
                <p className="mt-1 text-xs text-stone-500">
                  Select active processes and dispatch kernel signals (SIGTERM, SIGKILL, SIGSTOP, SIGCONT) to manage process lifecycles.
                </p>
              </div>

              {/* Process Table */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-800 uppercase font-semibold">
                    <tr>
                      <th className="px-3.5 py-2 border-b border-stone-200">PID</th>
                      <th className="px-3.5 py-2 border-b border-stone-200">Command / Binary</th>
                      <th className="px-3.5 py-2 border-b border-stone-200">User</th>
                      <th className="px-3.5 py-2 border-b border-stone-200">CPU</th>
                      <th className="px-3.5 py-2 border-b border-stone-200">Memory</th>
                      <th className="px-3.5 py-2 border-b border-stone-200">State</th>
                      <th className="px-3.5 py-2 border-b border-stone-200">Select</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    {activeProcesses.map((proc) => (
                      <tr
                        key={proc.pid}
                        className={`hover:bg-stone-50 cursor-pointer ${
                          selectedPid === proc.pid ? "bg-orange-50 font-semibold" : ""
                        }`}
                        onClick={() => setSelectedPid(proc.pid)}
                      >
                        <td className="px-3.5 py-2 font-mono font-bold text-stone-900">{proc.pid}</td>
                        <td className="px-3.5 py-2 font-mono flex items-center gap-1.5">
                          {proc.suspicious && <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />}
                          {proc.name}
                        </td>
                        <td className="px-3.5 py-2">{proc.user}</td>
                        <td className="px-3.5 py-2 font-mono">{proc.cpu}</td>
                        <td className="px-3.5 py-2 font-mono">{proc.mem}</td>
                        <td className="px-3.5 py-2">{proc.state}</td>
                        <td className="px-3.5 py-2">
                          <input
                            type="radio"
                            name="selectedProcess"
                            checked={selectedPid === proc.pid}
                            onChange={() => setSelectedPid(proc.pid)}
                            className="text-orange-600"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Signal Controls */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-stone-700 mr-2">
                  Dispatch Signal to PID {selectedPid}:
                </span>
                <button
                  type="button"
                  onClick={() => sendSignal("SIGTERM", 15)}
                  className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-900 text-white text-xs font-bold transition shadow-2xs"
                >
                  SIGTERM (15) - Graceful Exit
                </button>
                <button
                  type="button"
                  onClick={() => sendSignal("SIGKILL", 9)}
                  className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition shadow-2xs"
                >
                  SIGKILL (9) - Force Kill
                </button>
                <button
                  type="button"
                  onClick={() => sendSignal("SIGSTOP", 19)}
                  className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-2xs"
                >
                  SIGSTOP (19) - Pause
                </button>
                <button
                  type="button"
                  onClick={() => sendSignal("SIGCONT", 18)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-2xs"
                >
                  SIGCONT (18) - Resume
                </button>
              </div>

              {/* Signal Log Banner */}
              <div className="mt-4 p-3 rounded-xl bg-stone-900 text-stone-200 font-mono text-xs">
                {signalLog}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 4: WINDOWS ACCESS TOKEN & UAC EXPLORER                         */}
        {/* ================================================================== */}
        {activeTab === "token-explorer" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                  Interactive Simulator 3
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                  Windows Access Token & User Account Control (UAC) Explorer
                </h2>
                <p className="mt-1 text-xs text-stone-500">
                  Inspect how Windows Access Tokens, Security Identifiers (SIDs), and Mandatory Integrity Levels govern permissions.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-stone-700 block mb-1">
                    Select Token Execution Context:
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setTokenIntegrityLevel("Medium (Standard User)");
                        setUacElevationActive(false);
                      }}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                        !uacElevationActive
                          ? "bg-stone-900 text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200"
                      }`}
                    >
                      Filtered Token (Medium Integrity)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTokenIntegrityLevel("High (Elevated Admin)");
                        setUacElevationActive(true);
                      }}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                        uacElevationActive
                          ? "bg-orange-600 text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200"
                      }`}
                    >
                      Elevated Token (High Integrity / UAC Prompt)
                    </button>
                  </div>
                </div>
              </div>

              {/* Token Data Visualizer */}
              <div className="mt-6 p-6 rounded-2xl border border-stone-200 bg-stone-50/80 space-y-4 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-stone-200">
                  <span className="font-bold text-stone-600 font-sans">Mandatory Integrity Level:</span>
                  <span className="font-bold text-orange-600">{tokenDetails.level}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-200">
                  <span className="font-bold text-stone-600 font-sans">User SID:</span>
                  <span className="text-stone-900">{tokenDetails.userSID}</span>
                </div>

                <div className="py-2 border-b border-stone-200 space-y-1">
                  <span className="font-bold text-stone-600 font-sans block mb-1">Group SIDs:</span>
                  {tokenDetails.groups.map((grp) => (
                    <div key={grp} className="text-stone-700 pl-2">• {grp}</div>
                  ))}
                </div>

                <div className="py-2 space-y-1">
                  <span className="font-bold text-stone-600 font-sans block mb-1">Active Privileges:</span>
                  {tokenDetails.privileges.map((priv) => (
                    <div key={priv} className="text-stone-800 pl-2">✓ {priv}</div>
                  ))}
                </div>

                <div
                  className={`p-3 rounded-xl border font-sans font-medium ${
                    tokenDetails.canWriteSystem32
                      ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                      : "bg-rose-50 border-rose-300 text-rose-950"
                  }`}
                >
                  {tokenDetails.canWriteSystem32
                    ? "✓ Elevated Privileges: Process can modify C:\\Windows\\System32, install services, and read SAM database."
                    : "🔒 Restricted Token: Writing to protected system directories or installing kernel drivers is rejected (Access Denied)."}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 5: DUAL CLI SANDBOX (LINUX BASH & POWERSHELL)                  */}
        {/* ================================================================== */}
        {activeTab === "cli-sandbox" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Interactive Simulator 4
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-900 mt-1">
                    Dual Command-Line Sandbox: Linux Bash vs. Windows PowerShell
                  </h2>
                  <p className="mt-1 text-xs text-stone-500">
                    Switch between Linux Bash and Windows PowerShell to inspect system diagnostics, files, processes, and service states.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl border border-stone-200">
                  <button
                    type="button"
                    onClick={() => {
                      setCliEnvironment("bash");
                      setSelectedCommandKey("ls");
                      setSandboxOutput("");
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      cliEnvironment === "bash" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-600"
                    }`}
                  >
                    Linux Bash
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCliEnvironment("powershell");
                      setSelectedCommandKey("getProcess");
                      setSandboxOutput("");
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      cliEnvironment === "powershell" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-600"
                    }`}
                  >
                    Windows PowerShell
                  </button>
                </div>
              </div>

              {/* Commands Buttons */}
              <div className="mt-6 flex flex-wrap gap-2">
                {Object.entries(cliEnvironment === "bash" ? bashCommands : powershellCommands).map(
                  ([key, item]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => executeCommand(key)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                        selectedCommandKey === key
                          ? "bg-stone-900 text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200"
                      }`}
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      {item.label}
                    </button>
                  )
                )}
              </div>

              {/* Terminal Window */}
              <div className="mt-4 rounded-2xl border border-stone-800 bg-stone-950 text-stone-100 overflow-hidden shadow-md">
                <div className="bg-stone-900/90 px-4 py-2.5 border-b border-stone-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-stone-400 text-[11px]">
                      {cliEnvironment === "bash"
                        ? "analyst@ubuntu-security-lab: ~"
                        : "PS C:\\Users\\Analyst>"}
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-mono">
                    {cliEnvironment === "bash" ? "Bash 5.2.15" : "PowerShell 7.4.1"}
                  </span>
                </div>

                <div className="p-4 md:p-6 font-mono text-xs leading-relaxed overflow-x-auto min-h-[300px]">
                  {isExecuting ? (
                    <div className="flex items-center gap-2 text-orange-400">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>{sandboxOutput}</span>
                    </div>
                  ) : (
                    <pre className="text-stone-300 whitespace-pre-wrap">
                      {sandboxOutput ||
                        (cliEnvironment === "bash"
                          ? `$ ${bashCommands[selectedCommandKey]?.cmd || "ls -lah"}\n\n${bashCommands[selectedCommandKey]?.output || ""}`
                          : `PS> ${powershellCommands[selectedCommandKey]?.cmd || "Get-Process"}\n\n${powershellCommands[selectedCommandKey]?.output || ""}`)}
                    </pre>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Nova AI Mentor Sidecar Drawer */}
      {showAiTutor && (
        <LearningRo
          courseName="Cybersecurity Master Course"
          moduleName="Module 3: Linux Fundamentals, Windows Internals, and Command-Line Administration"
          currentTopic={topics.find((t) => t.id === (selectedTopic || 1))?.title || "Overview"}
          onClose={() => setShowAiTutor(false)}
        />
      )}
    </div>
  );
}
