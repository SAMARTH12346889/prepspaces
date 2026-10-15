import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Terminal,
  Shield,
  HardDrive,
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
  Globe,
  Lock,
  Workflow,
  Zap,
  Boxes,
  Compass,
  FileCode,
  ShieldCheck,
  RefreshCw,
  Binary,
  ExternalLink,
  FileText,
  FolderTree,
  GitBranch,
  Timer,
  Clock,
  Eye,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 5                                   */
/* Processes and Process Lifecycle                                            */
/* OSTEP, MIT 6.1810, CMU 15-213, Linux Kernel task_struct Standard          */
/* -------------------------------------------------------------------------- */

export default function OSProcessLifecycle() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(28);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-lab' | 'quiz' | 'checklist'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Interactive PCB Inspector State (Lesson 1.2)
  const [activePcbField, setActivePcbField] = useState("task_struct");

  // Interactive State Transition Machine (Lesson 2)
  const [activeProcessState, setActiveProcessState] = useState("running");

  // Terminal Simulator State (Capstone ProcTree & Zombie Demo)
  const [terminalHistory, setTerminalHistory] = useState([
    {
      cmd: "python3 proctree.py",
      out: `1 [S (sleeping)] systemd
 ├─ 410 [S (sleeping)] sshd
 │   └─ 525 [S (sleeping)] bash
 │       └─ 840 [R (running)] python3
 ├─ 492 [S (sleeping)] dbus-daemon
 └─ 512 [S (sleeping)] cron`,
      type: "success",
    },
  ]);
  const [customCommand, setCustomCommand] = useState("");

  // Section 10: Capstone Lab Checklist State (7 items)
  const [checklist, setChecklist] = useState({
    explorerRuns: false,
    displaysTree: false,
    handlesRaces: false,
    reproducesZombie: false,
    verifiesReaping: false,
    explainsIsolation: false,
    submitsReport: false,
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  // Section 11: Knowledge Assessment State (8 questions matching curriculum)
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "1. What is the primary role of a process control block or equivalent kernel structures?",
      options: [
        "Store the entire source code of the application",
        "Track process execution, identity, scheduling, and resource information",
        "Replace the CPU scheduler",
        "Store only the process's output",
      ],
      correctIndex: 1,
      explanation:
        "The Process Control Block (represented in Linux by `struct task_struct`) stores the complete architectural state and kernel metadata for a process: PID, credentials, CPU register state (for context switching), memory mappings (`mm_struct`), open file descriptor tables (`files_struct`), and scheduler priority (`sched_entity`).",
    },
    {
      id: 2,
      question: "2. What happens when a process moves from running to blocked?",
      options: [
        "It necessarily terminates",
        "It waits for an event or resource and is not currently runnable",
        "It becomes a zombie immediately",
        "Its PID is automatically reassigned",
      ],
      correctIndex: 1,
      explanation:
        "A running process transitions to blocked (sleeping) when it requests an event or resource that is not immediately available—such as waiting for disk I/O, a socket packet, a lock, or a child termination. The scheduler removes it from the CPU run-queue until the hardware interrupt or wake-up signal occurs.",
    },
    {
      id: 3,
      question: "3. What does a successful fork() return to the child?",
      options: ["0", "-1", "The parent's PID", "The child's exit code"],
      correctIndex: 0,
      explanation:
        "fork() returns 0 to the child process, allowing the child code to distinguish itself from the parent. The parent receives the child's positive Process ID (PID).",
    },
    {
      id: 4,
      question: "4. What is a zombie process?",
      options: [
        "A process that uses 100% CPU",
        "A child that has terminated but whose termination status has not been collected",
        "A process that has lost its parent but is still running",
        "A process waiting for disk I/O",
      ],
      correctIndex: 1,
      explanation:
        "A zombie process (`state Z`, `<defunct>`) is a process that has completed execution and released its memory space, but retains a small entry in the kernel's process table so its parent can collect its termination exit status or signal via `wait()` or `waitpid()`.",
    },
    {
      id: 5,
      question: "5. What is the main purpose of waitpid()?",
      options: [
        "Create a new process",
        "Replace the current process image",
        "Wait for a child and collect its status",
        "Allocate a new address space",
      ],
      correctIndex: 2,
      explanation:
        "waitpid() allows a parent process to suspend execution until a designated child process terminates or changes state, retrieve its exit code via status macros (`WEXITSTATUS`), and clean up the zombie entry from the OS process table.",
    },
    {
      id: 6,
      question: "6. Which statement about a context switch is correct?",
      options: [
        "Every system call causes a context switch",
        "It changes execution from one scheduled thread to another",
        "It always requires creating a new process",
        "It means the CPU switches from user mode to kernel mode only",
      ],
      correctIndex: 1,
      explanation:
        "A context switch saves the CPU architectural state (registers, stack pointer, program counter, and potentially address space / CR3 page table pointer) of the currently running thread and restores that of another runnable thread, switching which task is executing. A system call is a mode switch and only causes a context switch if the scheduler chooses another task.",
    },
    {
      id: 7,
      question: "7. What is the key difference between an orphan and a zombie?",
      options: [
        "An orphan is always terminated",
        "A zombie is always using the CPU",
        "An orphan's original parent has terminated; a zombie has terminated but is not yet reaped",
        "There is no difference",
      ],
      correctIndex: 2,
      explanation:
        "An orphan is an actively executing child process whose original parent has exited (it is reparented to `systemd` or an init subreaper). A zombie has already terminated its execution, but remains in the kernel process table waiting for its parent to collect its status.",
    },
    {
      id: 8,
      question: "8. What is a primary mechanism for process memory isolation?",
      options: [
        "Using different variable names",
        "Virtual address spaces and hardware-enforced memory permissions",
        "Assigning each process a different filename",
        "Calling printf()",
      ],
      correctIndex: 1,
      explanation:
        "The Memory Management Unit (MMU) and per-process virtual address spaces ensure that pointers with the same virtual address in two different processes map to distinct physical DRAM frames. Hardware page table permission bits (`PROT_READ`, `PROT_WRITE`, `PROT_EXEC`) prevent unauthorized access.",
    },
  ];

  const handleSelectQuizAnswer = (questionId, optionIndex) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const quizScore = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return correct;
  }, [quizAnswers]);

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2500);
  };

  // Run simulated commands in interactive terminal
  const executeTerminalCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    let output = "";
    let type = "info";

    if (raw === "clear") {
      setTerminalHistory([]);
      setCustomCommand("");
      return;
    }

    if (raw === "help") {
      output = `Available simulated commands:
  python3 proctree.py
  ps -eo pid,ppid,stat,comm --forest
  cat /proc/$$/status
  gcc -Wall -Wextra -Wpedantic zombie_demo.c -o zombie_demo && ./zombie_demo
  ps -o pid,ppid,stat,comm -p 5120
  gcc supervisor.c -o supervisor && ./supervisor
  pstree -p
  clear`;
    } else if (raw.includes("proctree.py")) {
      output = `1 [S (sleeping)] systemd
 ├─ 410 [S (sleeping)] sshd
 │   └─ 525 [S (sleeping)] bash
 │       └─ 840 [R (running)] python3
 ├─ 492 [S (sleeping)] dbus-daemon
 ├─ 512 [S (sleeping)] cron
 └─ 5200 [S (sleeping)] zombie_demo
     └─ 5201 [Z (zombie)] zombie_demo <defunct>`;
      type = "success";
    } else if (raw.includes("forest")) {
      output = `    PID    PPID STAT COMMAND
      1       0 Ss   /sbin/init
    410       1 Ss   sshd: /usr/sbin/sshd -D
    525     410 Ss    \\_ -bash
    840     525 R+        \\_ ps -eo pid,ppid,stat,comm --forest
   5200     525 S     \\_ ./zombie_demo
   5201    5200 Z         \\_ [zombie_demo] <defunct>`;
      type = "success";
    } else if (raw.includes("zombie_demo")) {
      output = `Parent PID: 5200
Child PID: 5201
Child has exited. Inspect it now; waiting 20 seconds.
[Child process 5201 is now in state Z (defunct) in kernel task table]
... (20 seconds elapsed) ...
Reaped child; exit code = 42
[Process table slot reclaimed via waitpid()]`;
      type = "warning";
    } else if (raw.includes("5120") || raw.includes("5201")) {
      output = `    PID    PPID STAT COMM
   5201    5200 Z    zombie_demo <defunct>
[State Z: zombie process, terminated but unreaped by parent PID 5200]`;
      type = "error";
    } else if (raw.includes("status")) {
      output = `Name:   bash
Umask:  0022
State:  S (sleeping)
Tgid:   525
Ngid:   0
Pid:    525
PPid:   410
TracerPid:      0
Uid:    1000    1000    1000    1000
Gid:    1000    1000    1000    1000
FDSize: 256
Groups: 1000 4 24 27 30 46 110
VmPeak:    11420 kB
VmSize:    11420 kB
VmLck:         0 kB
VmHWM:      4920 kB
VmRSS:      4920 kB
VmData:     2104 kB
VmStk:       132 kB
VmExe:      1028 kB
VmLib:      2252 kB
VmPTE:        56 kB
VmSwap:        0 kB
Threads:        1`;
      type = "info";
    } else if (raw.includes("supervisor")) {
      output = `Started child PID 5210
... waiting for child completion ...
Child exit code: 0
[Supervisor cleanly managed child lifecycle]`;
      type = "success";
    } else if (raw.includes("pstree")) {
      output = `systemd(1)─┬─cron(512)
           ├─dbus-daemon(492)
           └─sshd(410)───bash(525)───pstree(842)`;
      type = "info";
    } else {
      output = `bash: ${raw}: simulated command complete. Type 'help' to view all runnable commands.`;
      type = "info";
    }

    setTerminalHistory((prev) => [...prev, { cmd: raw, out: output, type }]);
    setCustomCommand("");
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Top Breadcrumb & Navigation */}
      <ModuleNav
        track="os"
        currentModuleId="processes"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="Nova Systems AI"
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Module Header Card */}
        <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 tracking-wide uppercase">
                  Module 5 · Core OS Internals
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-600">
                  PrepSpaces Operating Systems Master Course
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                  OSTEP · MIT 6.1810 · CMU CS:APP Standard
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                Processes and Process Lifecycle
              </h1>
              <p className="text-stone-600 max-w-3xl text-base sm:text-lg leading-relaxed">
                Master the fundamental operating system abstraction: how the kernel represents processes in memory via the Process Control Block (<code className="font-mono text-stone-900">task_struct</code>), schedules state transitions, enforces memory isolation, reaps terminated children, and navigates the process tree hierarchy.
              </p>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-stone-100">
              <div className="text-left md:text-right">
                <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                  Estimated Time
                </div>
                <div className="text-lg font-bold text-stone-800">2–3 Hours</div>
              </div>
              <div className="text-left md:text-right">
                <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                  Capstone Project
                </div>
                <div className="text-sm font-medium text-stone-700">ProcTree Explorer</div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-8 flex items-center gap-2 border-b border-stone-200 overflow-x-auto pb-px">
            <button
              onClick={() => setActiveTab("theory")}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-colors whitespace-nowrap ${
                activeTab === "theory"
                  ? "border-b-2 border-orange-600 text-orange-600 bg-orange-50/50"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              1. Curriculum & Theory
            </button>
            <button
              onClick={() => setActiveTab("interactive-lab")}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-colors whitespace-nowrap ${
                activeTab === "interactive-lab"
                  ? "border-b-2 border-orange-600 text-orange-600 bg-orange-50/50"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <Terminal className="w-4 h-4" />
              2. ProcTree Sandbox & Lab
            </button>
            <button
              onClick={() => setActiveTab("checklist")}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-colors whitespace-nowrap ${
                activeTab === "checklist"
                  ? "border-b-2 border-orange-600 text-orange-600 bg-orange-50/50"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              3. Capstone Checklist ({completedChecklistCount}/7)
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-colors whitespace-nowrap ${
                activeTab === "quiz"
                  ? "border-b-2 border-orange-600 text-orange-600 bg-orange-50/50"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <Award className="w-4 h-4" />
              4. Knowledge Assessment
            </button>
          </div>
        </section>

        {/* TAB 1: CURRICULUM & THEORY */}
        {activeTab === "theory" && (
          <div className="space-y-10">
            {/* Roadmap Overview */}
            <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold font-serif tracking-tight text-white mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-orange-400" />
                Module Roadmap: Process Internals & Lifecycle
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 1</span>
                  <h4 className="font-semibold text-white mt-1">Process & PCB</h4>
                  <p className="text-xs text-stone-400 mt-1">Program vs process vs thread, task_struct, saved registers, mm_struct.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 2</span>
                  <h4 className="font-semibold text-white mt-1">States & Transitions</h4>
                  <p className="text-xs text-stone-400 mt-1">5-state model, Linux states (R, S, D, T, Z), preemptive scheduling.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 3</span>
                  <h4 className="font-semibold text-white mt-1">Creation & Execution</h4>
                  <p className="text-xs text-stone-400 mt-1">fork() COW, execvp(), _exit(), robust supervisor patterns with waitpid().</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 4</span>
                  <h4 className="font-semibold text-white mt-1">Trees, Orphans & Zombies</h4>
                  <p className="text-xs text-stone-400 mt-1">pstree, parent-child hierarchy, systemd adoption, zombie_demo.c.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 5</span>
                  <h4 className="font-semibold text-white mt-1">Context Switching</h4>
                  <p className="text-xs text-stone-400 mt-1">Mode switch vs context switch, CPU register swap, cache and TLB costs.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 6</span>
                  <h4 className="font-semibold text-white mt-1">Lifecycle & Ownership</h4>
                  <p className="text-xs text-stone-400 mt-1">PID reuse hazards, descriptor reclamation, termination error handling.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 7</span>
                  <h4 className="font-semibold text-white mt-1">ProcTree Explorer</h4>
                  <p className="text-xs text-stone-400 mt-1">Parsing Linux /proc, building the hierarchy, race conditions, cleanup.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Capstone</span>
                  <h4 className="font-semibold text-white mt-1">ProcTree Lab</h4>
                  <p className="text-xs text-stone-400 mt-1">Build proctree.py, reproduce and reap zombies, generate verified report.</p>
                </div>
              </div>
            </div>

            {/* LESSON 1: PROCESS ABSTRACTION AND PCB */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 1
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Process Abstraction and the Process Control Block (PCB)
                </h2>
              </div>

              {/* 1.1 Program vs Process */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-mono font-bold">1.1</span>
                  Program versus Process
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  A <strong>program</strong> is a passive collection of machine instructions and static data stored on disk (e.g., an ELF executable like <code className="font-mono">/bin/bash</code>). A <strong>process</strong> is an active, executing instance of a program managed by the kernel, equipped with its own virtual address space, execution threads, credentials, and file descriptors.
                </p>

                {/* Process vs Thread Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-left border border-stone-200 rounded-lg">
                    <thead className="bg-stone-100 text-stone-700 font-semibold">
                      <tr>
                        <th className="py-2.5 px-3 border-b">Property</th>
                        <th className="py-2.5 px-3 border-b">Process</th>
                        <th className="py-2.5 px-3 border-b">Thread</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      <tr>
                        <td className="py-2 px-3 font-semibold text-stone-900">Address Space</td>
                        <td className="py-2 px-3 text-stone-600">Isolated virtual address space; separate page tables</td>
                        <td className="py-2 px-3 text-stone-600">Shared with all threads in the same process</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold text-stone-900">Stack</td>
                        <td className="py-2 px-3 text-stone-600">Has dedicated stacks for each of its threads</td>
                        <td className="py-2 px-3 text-stone-600">Dedicated private stack frame area</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold text-stone-900">Global Variables</td>
                        <td className="py-2 px-3 text-stone-600">Private to process (unless explicit shared memory)</td>
                        <td className="py-2 px-3 text-stone-600">Shared directly; requires synchronization locks</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold text-stone-900">Fault Isolation</td>
                        <td className="py-2 px-3 text-stone-600">A crash (SIGSEGV) in one process does not affect others</td>
                        <td className="py-2 px-3 text-stone-600">A fatal crash usually terminates the entire process</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 1.2 The Linux task_struct (PCB) */}
              <div className="space-y-4 pt-4 border-t border-stone-100">
                <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-mono font-bold">1.2</span>
                  Inside the Linux Process Control Block (<code className="font-mono text-base">struct task_struct</code>)
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  In Linux, the textbook "PCB" is implemented as <code className="font-mono font-bold text-stone-900">struct task_struct</code> in <code className="font-mono">include/linux/sched.h</code>. It tracks everything needed to pause and resume execution:
                </p>

                {/* Interactive PCB Inspector */}
                <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl space-y-4">
                  <div className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                    Interactive Kernel task_struct Field Inspector
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                    {[
                      { id: "identity", label: "Identity (pid, ppid)" },
                      { id: "state", label: "Execution State" },
                      { id: "context", label: "CPU thread_struct" },
                      { id: "memory", label: "Memory (mm_struct)" },
                      { id: "files", label: "Files (files_struct)" },
                      { id: "signals", label: "Signals (sighand)" },
                      { id: "sched", label: "Scheduler (sched_entity)" },
                      { id: "links", label: "Tree Pointers (parent, children)" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActivePcbField(tab.id)}
                        className={`p-2.5 rounded-lg border text-left transition ${
                          activePcbField === tab.id
                            ? "bg-orange-600 text-white border-orange-700 shadow-sm"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        <div className="font-bold text-[11px]">{tab.label}</div>
                      </button>
                    ))}
                  </div>

                  <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs">
                    {activePcbField === "identity" && (
                      <div>
                        <span className="text-emerald-400 font-bold">// Process Identity &amp; Credentials</span>
                        <pre className="text-stone-300 mt-1">{`pid_t pid;                // Process ID
pid_t tgid;               // Thread group ID (matches PID for main thread)
const struct cred *cred;  // Real UID/GID, effective UID/GID, capabilities`}</pre>
                      </div>
                    )}
                    {activePcbField === "state" && (
                      <div>
                        <span className="text-emerald-400 font-bold">// Execution State Flags</span>
                        <pre className="text-stone-300 mt-1">{`unsigned int __state;     // 0 = TASK_RUNNING (R)
                          // 1 = TASK_INTERRUPTIBLE (S)
                          // 2 = TASK_UNINTERRUPTIBLE (D)
int exit_state;           // EXIT_ZOMBIE (Z), EXIT_DEAD`}</pre>
                      </div>
                    )}
                    {activePcbField === "context" && (
                      <div>
                        <span className="text-emerald-400 font-bold">// Hardware Execution Context (saved during switch_to)</span>
                        <pre className="text-stone-300 mt-1">{`struct thread_struct thread; // Saved RSP (stack pointer)
                             // Saved RIP (instruction pointer)
                             // Callee-saved general registers
                             // Floating-point / AVX state`}</pre>
                      </div>
                    )}
                    {activePcbField === "memory" && (
                      <div>
                        <span className="text-emerald-400 font-bold">// Virtual Memory Descriptor</span>
                        <pre className="text-stone-300 mt-1">{`struct mm_struct *mm;     // Pointer to page table root (CR3 on x86)
                          // Memory areas (vm_area_struct: text, heap, stack)
                          // Start/end addresses of text, data, brk`}</pre>
                      </div>
                    )}
                    {activePcbField === "files" && (
                      <div>
                        <span className="text-emerald-400 font-bold">// Open File Descriptor Table</span>
                        <pre className="text-stone-300 mt-1">{`struct files_struct *files; // Array of struct file* indexed by fd (0,1,2..)
struct fs_struct *fs;       // Current working directory (pwd) and root (/)`}</pre>
                      </div>
                    )}
                    {activePcbField === "signals" && (
                      <div>
                        <span className="text-emerald-400 font-bold">// Signal Dispositions</span>
                        <pre className="text-stone-300 mt-1">{`struct sighand_struct *sighand; // Array of sigaction structs (handlers)
sigset_t blocked;               // Mask of currently blocked signals
struct sigpending pending;      // Signals queued for delivery`}</pre>
                      </div>
                    )}
                    {activePcbField === "sched" && (
                      <div>
                        <span className="text-emerald-400 font-bold">// Completely Fair Scheduler (CFS) Metadata</span>
                        <pre className="text-stone-300 mt-1">{`struct sched_entity se;     // Virtual runtime (vruntime)
int prio, static_prio;      // Dynamic and static nice values (-20 to +19)
struct rb_node run_node;    // Position in CFS red-black run-queue`}</pre>
                      </div>
                    )}
                    {activePcbField === "links" && (
                      <div>
                        <span className="text-emerald-400 font-bold">// Process Tree Hierarchy Links</span>
                        <pre className="text-stone-300 mt-1">{`struct task_struct *real_parent; // True creator parent
struct task_struct *parent;      // Recipient of SIGCHLD (subreaper/tracer)
struct list_head children;       // Linked list of child processes
struct list_head sibling;        // Linked list of sibling processes`}</pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>

            {/* LESSON 2: PROCESS STATES AND TRANSITIONS */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 2
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Process States and Preemptive Scheduling Transitions
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-stone-700 leading-relaxed">
                  During its lifecycle, a process transitions through distinct states managed by the kernel scheduler. The standard operating system model consists of 5 conceptual states:
                </p>

                {/* State Machine Visualizer */}
                <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                      Interactive 5-State Life Cycle Model
                    </span>
                    <span className="text-xs font-mono text-orange-700 font-bold">
                      Current State: {activeProcessState.toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-mono text-center">
                    {[
                      { id: "new", name: "1. NEW", desc: "fork() initializing task_struct" },
                      { id: "ready", name: "2. READY", desc: "Runnable; in scheduler run-queue" },
                      { id: "running", name: "3. RUNNING", desc: "Currently executing on a CPU core" },
                      { id: "blocked", name: "4. BLOCKED (S/D)", desc: "Waiting for I/O event or lock" },
                      { id: "terminated", name: "5. TERMINATED (Z)", desc: "Exited; waiting for waitpid()" },
                    ].map((st) => (
                      <button
                        key={st.id}
                        onClick={() => setActiveProcessState(st.id)}
                        className={`p-3 rounded-lg border text-left transition ${
                          activeProcessState === st.id
                            ? "bg-orange-600 text-white border-orange-700 shadow-sm"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        <div className="font-bold">{st.name}</div>
                        <div className="text-[10px] mt-1 opacity-90">{st.desc}</div>
                      </button>
                    ))}
                  </div>

                  <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs space-y-2">
                    {activeProcessState === "new" && (
                      <div>
                        <div className="text-orange-400 font-bold">[State: NEW]</div>
                        <p className="text-stone-300 mt-1">
                          The kernel allocates a new <code className="text-amber-300">task_struct</code> and allocates a unique PID. It copies the parent's memory layout with Copy-On-Write (COW) and sets up kernel stack pages. Once initialization completes, the process is moved to the <strong>READY</strong> run-queue.
                        </p>
                      </div>
                    )}
                    {activeProcessState === "ready" && (
                      <div>
                        <div className="text-emerald-400 font-bold">[State: READY / RUNNABLE — Linux State R]</div>
                        <p className="text-stone-300 mt-1">
                          The process is completely ready to execute instructions, waiting in the CFS run-queue. It consumes zero CPU cycles while waiting for the scheduler to allocate a timeslice.
                        </p>
                      </div>
                    )}
                    {activeProcessState === "running" && (
                      <div>
                        <div className="text-blue-400 font-bold">[State: RUNNING — Linux State R]</div>
                        <p className="text-stone-300 mt-1">
                          The CPU's program counter (RIP) is actively fetching and executing this process's instructions.
                          <br />
                          • <strong>Preemption:</strong> If its timeslice expires (timer interrupt), scheduler moves it back to <strong>READY</strong>.
                          <br />
                          • <strong>I/O Call:</strong> If it requests disk read or lock, it moves to <strong>BLOCKED</strong>.
                        </p>
                      </div>
                    )}
                    {activeProcessState === "blocked" && (
                      <div>
                        <div className="text-amber-400 font-bold">[State: BLOCKED / SLEEPING — Linux State S or D]</div>
                        <p className="text-stone-300 mt-1">
                          The process cannot run until an external hardware event occurs.
                          <br />
                          • <strong>State S (Interruptible Sleep):</strong> Wakes on hardware event OR signal (SIGINT).
                          <br />
                          • <strong>State D (Uninterruptible Sleep):</strong> Waiting for physical device I/O (cannot be killed with <code className="text-red-400">kill -9</code>!).
                        </p>
                      </div>
                    )}
                    {activeProcessState === "terminated" && (
                      <div>
                        <div className="text-red-400 font-bold">[State: TERMINATED / ZOMBIE — Linux State Z]</div>
                        <p className="text-stone-300 mt-1">
                          The process called <code className="text-amber-300">exit()</code> or was killed by a signal. Memory mappings, heap, stack, and open descriptors are immediately unmapped. Only the entry in the kernel's process table remains (<code className="text-red-300">&lt;defunct&gt;</code>) until the parent calls <code className="text-amber-300">waitpid()</code>.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>

            {/* LESSON 3: CREATION, EXECUTION AND TERMINATION */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 3
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Creation, Execution, and Robust Supervisor Patterns
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-stone-700 leading-relaxed">
                  A production process supervisor or shell must deliberately handle every possible failure point: fork exhaustion (`EAGAIN`), exec failure (`ENOENT`/`EACCES`), and interrupted wait system calls (`EINTR`).
                </p>

                <div className="relative bg-stone-950 text-stone-100 rounded-xl p-4 font-mono text-xs overflow-x-auto">
                  <div className="flex justify-between items-center text-stone-400 mb-2 font-sans text-xs">
                    <span>Robust Process Supervisor Pattern (supervisor.c)</span>
                    <button
                      onClick={() => copyToClipboard(`#include <errno.h>\n#include <stdio.h>\n#include <stdlib.h>\n#include <sys/types.h>\n#include <sys/wait.h>\n#include <unistd.h>\n\nint main(void) {\n    pid_t pid = fork();\n    if (pid == -1) {\n        perror("fork");\n        return EXIT_FAILURE;\n    }\n    if (pid == 0) {\n        execlp("sleep", "sleep", "2", (char *)NULL);\n        perror("exec");\n        _exit(127); // Crucial: avoid flushing parent's stdio buffers\n    }\n\n    printf("Started child PID %ld\\n", (long)pid);\n    int status;\n    pid_t result;\n    do {\n        result = waitpid(pid, &status, 0);\n    } while (result == -1 && errno == EINTR); // Handle signal interruptions\n\n    if (result == -1) {\n        perror("waitpid");\n        return EXIT_FAILURE;\n    }\n\n    if (WIFEXITED(status)) {\n        printf("Child exit code: %d\\n", WEXITSTATUS(status));\n    } else if (WIFSIGNALED(status)) {\n        printf("Child terminated by signal %d\\n", WTERMSIG(status));\n    }\n    return EXIT_SUCCESS;\n}`, "supervisor-c")}
                      className="flex items-center gap-1 hover:text-white"
                    >
                      {copiedCodeId === "supervisor-c" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      Copy Code
                    </button>
                  </div>
                  <pre>{`pid_t pid = fork();
if (pid == -1) { perror("fork"); return EXIT_FAILURE; }
if (pid == 0) {
    execlp("sleep", "sleep", "2", (char *)NULL);
    perror("exec");
    _exit(127); // Must use _exit() to avoid flushing shared stdio buffers!
}

int status;
pid_t result;
do {
    result = waitpid(pid, &status, 0);
} while (result == -1 && errno == EINTR); // Automatically restart if interrupted by signal`}</pre>
                </div>
              </div>
            </article>

            {/* LESSON 4: PROCESS TREES, ORPHANS AND ZOMBIES */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 4
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Process Trees, Orphans, and Zombie Mechanics
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-stone-700 leading-relaxed">
                  Every process on a Linux system (except PID 1) has a parent process (<code className="font-mono">PPID</code>), forming a strict tree hierarchy. Understanding how parent termination and child termination interact is fundamental:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                    <div className="font-bold text-amber-900 text-sm flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      Zombie Process (State Z / &lt;defunct&gt;)
                    </div>
                    <p className="text-amber-950">
                      <strong>Condition:</strong> Child has terminated, but parent is still running and has NOT called <code className="font-mono">wait()</code> or <code className="font-mono">waitpid()</code>.
                    </p>
                    <p className="text-amber-950">
                      <strong>Consequence:</strong> The child uses 0% CPU and zero RAM pages, but holds an entry in the kernel's process table. Unreaped zombies exhaust available PIDs (<code className="font-mono">/proc/sys/kernel/pid_max</code>).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-2">
                    <div className="font-bold text-blue-900 text-sm flex items-center gap-1.5">
                      <GitBranch className="w-4 h-4 text-blue-600" />
                      Orphan Process (Reparented to PID 1)
                    </div>
                    <p className="text-blue-950">
                      <strong>Condition:</strong> Parent process exits while the child is still actively running.
                    </p>
                    <p className="text-blue-950">
                      <strong>Resolution:</strong> The kernel reparents the orphan to <code className="font-mono">systemd</code> (or an init subreaper configured via <code className="font-mono">prctl(PR_SET_CHILD_SUBREAPER)</code>), which automatically reaps the child when it terminates.
                    </p>
                  </div>
                </div>

                {/* Reproducing Zombies Safely */}
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-3 text-xs">
                  <div className="font-bold text-stone-900">Controlled Zombie Demonstration Program (zombie_demo.c):</div>
                  <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono">
                    pid_t pid = fork();<br />
                    if (pid == 0) &#123; _exit(42); &#125; <span className="text-stone-400">// Child exits immediately with code 42</span><br />
                    printf("Child PID: %ld\\n", (long)pid);<br />
                    sleep(20); <span className="text-amber-400">// During this 20s window, inspect child with 'ps -p PID' &rarr; state Z!</span><br />
                    waitpid(pid, &amp;status, 0); <span className="text-emerald-400">// Reaped! Zombie entry vanishes immediately</span>
                  </div>
                </div>
              </div>
            </article>

            {/* LESSON 5: CONTEXT SWITCHING AND PROCESS ISOLATION */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 5
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Context Switching and Hardware-Enforced Process Isolation
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-stone-700 leading-relaxed">
                  A <strong>context switch</strong> is the core mechanism enabling multitasking. When the scheduler switches from Task A to Task B:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-stone-900 text-sm mb-2 font-sans">Context Switch Steps</div>
                    <ol className="list-decimal pl-4 space-y-1 text-stone-700 font-sans">
                      <li>Save general registers, RSP, RIP into Task A's PCB.</li>
                      <li>Switch CPU page table root register (CR3 on x86-64) to Task B's address space.</li>
                      <li>Restore Task B's registers and stack pointer.</li>
                      <li>Resume execution at Task B's saved RIP.</li>
                    </ol>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-stone-900 text-sm mb-2 font-sans">Performance Costs</div>
                    <ul className="list-disc pl-4 space-y-1 text-stone-700 font-sans">
                      <li><strong>Direct Cost:</strong> ~1–2 microseconds of kernel register copying.</li>
                      <li><strong>Indirect Cost:</strong> Cache pollution (L1/L2 data invalidated).</li>
                      <li><strong>TLB Flushes:</strong> Address space switch invalidates translation lookaside buffer (mitigated by PCID).</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs leading-relaxed">
                  <strong>Memory Isolation Guarantee:</strong> Because each process has its own page tables, a pointer value (e.g. <code className="font-mono font-bold">0x7ffd19a24000</code>) in Process A maps to a completely different physical DRAM page than the same address in Process B. One process cannot read or corrupt another process's data without explicit OS permission.
                </div>
              </div>
            </article>

            {/* LESSON 7: PROCTREE EXPLORER DESIGN */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 7
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Building the ProcTree Explorer: Traversing Linux /proc
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-stone-700 leading-relaxed">
                  On Linux, <code className="font-mono">/proc</code> is a pseudo-filesystem generated dynamically by the kernel. Each numeric directory corresponds to an active PID. The ProcTree explorer reads <code className="font-mono">/proc/[PID]/status</code>, extracts <code className="font-mono">Pid</code>, <code className="font-mono">PPid</code>, <code className="font-mono">Name</code>, and <code className="font-mono">State</code>, and constructs a tree.
                </p>

                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs space-y-2">
                  <span className="font-bold text-stone-900">Handling Concurrent Process Disappearance:</span>
                  <p className="text-stone-600">
                    Because processes terminate concurrently while your tool is traversing <code className="font-mono">os.listdir("/proc")</code>, opening <code className="font-mono">/proc/[PID]/status</code> may raise <code className="font-mono">FileNotFoundError</code> or <code className="font-mono">ProcessLookupError</code>. Robust code must catch these exceptions gracefully rather than crashing.
                  </p>
                </div>
              </div>
            </article>

            {/* UNIVERSITY REFERENCES */}
            <section className="bg-stone-100 border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-600" />
                University &amp; Kernel Engineering Standards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h5 className="font-bold text-stone-900">OSTEP (Remzi &amp; Andrea Arpaci-Dusseau)</h5>
                  <p className="text-stone-600 mt-1">Direct Execution, Limited Direct Execution, and Process Scheduling algorithms.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h5 className="font-bold text-stone-900">MIT 6.1810 Operating System Engineering</h5>
                  <p className="text-stone-600 mt-1">xv6 process tables (`struct proc`), context switching via `swtch.S`, and sleep/wakeup.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h5 className="font-bold text-stone-900">The Linux Programming Interface (TLPI)</h5>
                  <p className="text-stone-600 mt-1">Chapters 24–28: Process Creation, Process Termination, Monitoring Children, and Programs Execution.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h5 className="font-bold text-stone-900">Linux Kernel Documentation (docs.kernel.org)</h5>
                  <p className="text-stone-600 mt-1">Completely Fair Scheduler (CFS) design, vruntime calculation, and process namespaces.</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: PROCTREE SANDBOX & INTERACTIVE LAB */}
        {activeTab === "interactive-lab" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-xl font-bold font-serif text-stone-900 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-orange-600" />
                    ProcTree &amp; Process Lifecycle Sandbox
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Execute <code className="font-mono">proctree.py</code>, inspect the live process tree from <code className="font-mono">/proc</code>, and run the controlled zombie creation &amp; reaping experiment.
                  </p>
                </div>
                <button
                  onClick={() => executeTerminalCommand("clear")}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition"
                >
                  Clear Terminal
                </button>
              </div>

              {/* Command Suggestion Pills */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Clickable Commands:
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    "python3 proctree.py",
                    "ps -eo pid,ppid,stat,comm --forest",
                    "gcc -Wall -Wextra -Wpedantic zombie_demo.c -o zombie_demo && ./zombie_demo",
                    "ps -o pid,ppid,stat,comm -p 5120",
                    "cat /proc/$$/status",
                    "gcc supervisor.c -o supervisor && ./supervisor",
                    "pstree -p",
                  ].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => executeTerminalCommand(cmd)}
                      className="px-2.5 py-1 bg-stone-100 hover:bg-orange-100 hover:text-orange-900 border border-stone-300 rounded-md font-mono text-[11px] transition text-stone-800"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terminal Screen */}
              <div className="bg-stone-950 text-stone-100 rounded-xl p-4 sm:p-6 font-mono text-xs shadow-inner min-h-[420px] max-h-[600px] overflow-y-auto space-y-4">
                <div className="text-stone-400 text-[11px] pb-2 border-b border-stone-800 flex justify-between">
                  <span>engineer@prepspaces:~/module5-processes$</span>
                  <span>Linux 6.8 · /proc pseudo-fs · Python 3.12</span>
                </div>

                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-orange-400 font-bold">
                      <span className="text-emerald-400">user@prepspaces:~$</span>
                      <span>{item.cmd}</span>
                    </div>
                    <pre
                      className={`whitespace-pre-wrap text-[11px] leading-relaxed ${
                        item.type === "error"
                          ? "text-red-400 bg-red-950/30 p-2.5 rounded border border-red-900/50"
                          : item.type === "success"
                          ? "text-emerald-300"
                          : item.type === "warning"
                          ? "text-amber-300"
                          : "text-stone-300"
                      }`}
                    >
                      {item.out}
                    </pre>
                  </div>
                ))}

                {/* Live Command Input */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    executeTerminalCommand(customCommand);
                  }}
                  className="flex items-center gap-2 pt-2"
                >
                  <span className="text-emerald-400 font-bold">user@prepspaces:~$</span>
                  <input
                    type="text"
                    value={customCommand}
                    onChange={(e) => setCustomCommand(e.target.value)}
                    placeholder="Type command (e.g., 'python3 proctree.py', 'pstree -p', 'help')..."
                    className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0 placeholder:text-stone-600"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1 bg-orange-600 hover:bg-orange-500 text-white rounded text-[11px] font-sans font-semibold transition"
                  >
                    Run
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CAPSTONE CHECKLIST */}
        {activeTab === "checklist" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-100 pb-4">
              <div>
                <h3 className="text-xl font-bold font-serif text-stone-900">
                  Capstone Lab Completion Checklist
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Complete all 7 practical milestones to verify process tree exploration, zombie reproduction, and lifecycle management.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-orange-100 text-orange-800">
                  {completedChecklistCount} of 7 Completed ({Math.round((completedChecklistCount / 7) * 100)}%)
                </span>
                <button
                  onClick={() => {
                    const report = `# PrepSpaces Module 5: Processes & Process Lifecycle
## Lab Completion Report
- [${checklist.explorerRuns ? "x" : " "}] Process-tree explorer runs on Linux / WSL2
- [${checklist.displaysTree ? "x" : " "}] Displays PID, PPID, process name, and state
- [${checklist.handlesRaces ? "x" : " "}] Handles inaccessible or disappearing /proc entries safely
- [${checklist.reproducesZombie ? "x" : " "}] Demonstrates a zombie in a controlled experiment (zombie_demo.c)
- [${checklist.verifiesReaping ? "x" : " "}] Shows that waitpid() reaps the child process table entry
- [${checklist.explainsIsolation ? "x" : " "}] Explains process isolation, virtual address spaces & context switching
- [${checklist.submitsReport ? "x" : " "}] Includes short lab report with command output

Milestones: ${completedChecklistCount}/7 verified.
Timestamp: ${new Date().toISOString()}`;
                    navigator.clipboard.writeText(report);
                    alert("Lab completion report copied to clipboard!");
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Copy Report
                </button>
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-3">
              {[
                {
                  key: "explorerRuns",
                  title: "1. Process-tree explorer runs on Linux / WSL2",
                  desc: "Implement proctree.py, collect entries from /proc, and execute successfully without syntax errors.",
                },
                {
                  key: "displaysTree",
                  title: "2. Displays PID, PPID, process name, and state",
                  desc: "Parse Pid, PPid, Name, and State from /proc/<PID>/status and display an indented ASCII tree.",
                },
                {
                  key: "handlesRaces",
                  title: "3. Handles inaccessible or disappearing process entries",
                  desc: "Gracefully handle FileNotFoundError and ProcessLookupError when processes terminate mid-scan.",
                },
                {
                  key: "reproducesZombie",
                  title: "4. Demonstrates a zombie in a controlled experiment",
                  desc: "Compile and run zombie_demo.c; verify child state Z in ps output during parent's 20-second sleep.",
                },
                {
                  key: "verifiesReaping",
                  title: "5. Shows that waitpid() reaps the child",
                  desc: "Observe the child process table slot vanish as soon as the parent executes waitpid().",
                },
                {
                  key: "explainsIsolation",
                  title: "6. Explains process isolation and context switching",
                  desc: "Document how MMU page tables isolate address spaces and the difference between mode and context switches.",
                },
                {
                  key: "submitsReport",
                  title: "7. Includes short lab report with command output",
                  desc: "Submit process tree outputs, zombie state snapshots, and explanations for interview review.",
                },
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() => toggleChecklist(item.key)}
                  className={`p-4 rounded-xl border flex items-start gap-3 cursor-pointer transition ${
                    checklist[item.key]
                      ? "bg-emerald-50/60 border-emerald-200"
                      : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  <div className="pt-0.5">
                    <input
                      type="checkbox"
                      checked={checklist[item.key]}
                      onChange={() => {}}
                      className="rounded text-orange-600 focus:ring-orange-500 w-4 h-4 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${checklist[item.key] ? "text-emerald-950" : "text-stone-900"}`}>
                      {item.title}
                    </div>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: KNOWLEDGE ASSESSMENT */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-100 pb-4">
              <div>
                <h3 className="text-xl font-bold font-serif text-stone-900">
                  Module 5 Knowledge Check (8 Questions)
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Validate your understanding of process control blocks, states, fork/exec semantics, context switching, and zombie processes.
                </p>
              </div>
              {quizSubmitted && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold font-mono px-3 py-1.5 rounded-full bg-orange-100 text-orange-800">
                    Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                  </span>
                  <button
                    onClick={handleResetQuiz}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition"
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q) => {
                const selectedOpt = quizAnswers[q.id];
                const isAnswered = selectedOpt !== undefined;
                const isCorrect = isAnswered && selectedOpt === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-xl border transition-all ${
                      quizSubmitted
                        ? isCorrect
                          ? "bg-emerald-50/40 border-emerald-300"
                          : "bg-red-50/40 border-red-300"
                        : "bg-stone-50 border-stone-200"
                    }`}
                  >
                    <div className="font-bold text-sm text-stone-900 mb-3">
                      {q.question}
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";

                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                          } else if (selectedOpt === optIdx) {
                            btnStyle = "bg-red-100 border-red-400 text-red-950 line-through";
                          } else {
                            btnStyle = "bg-white border-stone-200 text-stone-400 opacity-60";
                          }
                        } else if (selectedOpt === optIdx) {
                          btnStyle = "bg-orange-100 border-orange-400 text-orange-950 font-bold";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                            className={`w-full text-left p-2.5 rounded-lg border text-xs transition flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-3 pt-3 border-t border-stone-200/60 text-xs text-stone-600 leading-relaxed">
                        <strong className="text-stone-800">Explanation: </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!quizSubmitted ? (
              <div className="pt-4 flex justify-end">
                <button
                  onClick={handleQuizSubmit}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-xs tracking-wide transition shadow-sm ${
                    Object.keys(quizAnswers).length === quizQuestions.length
                      ? "bg-orange-600 hover:bg-orange-500 text-white cursor-pointer"
                      : "bg-stone-300 text-stone-500 cursor-not-allowed"
                  }`}
                >
                  {Object.keys(quizAnswers).length === quizQuestions.length
                    ? "Check Answers (Submit Quiz)"
                    : `Answer all ${quizQuestions.length} questions to submit (${Object.keys(quizAnswers).length}/${quizQuestions.length})`}
                </button>
              </div>
            ) : null}
          </div>
        )}

        {/* Footer Navigation Bar */}
        <section className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/os/syscalls")}
            className="flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-stone-900 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Module 4 (OS Interfaces &amp; Syscalls)
          </button>

          <div className="text-xs text-stone-500 font-medium">
            Module 5 of 13 · PrepSpaces Operating Systems Master Course
          </div>

          <button
            onClick={() => navigate("/learning/os/scheduling")}
            className="flex items-center gap-2 text-xs font-semibold text-orange-600 hover:text-orange-700 transition"
          >
            Next: Module 6 (CPU Scheduling)
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </main>

      {/* Floating AI Tutor Drawer */}
      {showAiTutor && (
        <aside className="fixed bottom-4 right-4 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-stone-300 overflow-hidden flex flex-col h-[520px]">
          <div className="bg-stone-900 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="font-semibold text-xs tracking-wide">Nova Systems AI Tutor</span>
            </div>
            <button
              onClick={() => setShowAiTutor(false)}
              className="text-stone-400 hover:text-white text-xs font-bold"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-hidden p-2">
            <LearningRo
              courseId="os"
              moduleId="processes"
              moduleTitle="Processes and Process Lifecycle"
            />
          </div>
        </aside>
      )}
    </div>
  );
}
