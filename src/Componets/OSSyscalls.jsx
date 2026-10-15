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
  Split,
  FolderTree,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 4                                   */
/* OS Interfaces, System Calls and Program Execution                          */
/* MIT 6.1810, CMU CS:APP 15-213, UC Berkeley CS162, TLPI Standards         */
/* -------------------------------------------------------------------------- */

export default function OSSyscalls() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(27);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-lab' | 'quiz' | 'checklist'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Interactive System Call Transition Explorer (Lesson 1)
  const [syscallStep, setSyscallStep] = useState(0);

  // Interactive Process Tree & Lifecycle Simulator (Lesson 3)
  const [processState, setProcessState] = useState("idle"); // 'idle' | 'forked' | 'execed' | 'reaped'

  // Interactive Pipe & Redirection Flow (Lesson 6)
  const [pipeActive, setPipeActive] = useState(false);

  // Terminal Simulator State (Capstone MiniShell Runner)
  const [terminalHistory, setTerminalHistory] = useState([
    {
      cmd: "./runner echo 'Hello from MiniShell'",
      out: "Hello from MiniShell\nChild exited with status: 0\n[Parent collected child PID 4912 via waitpid()]",
      type: "success",
    },
  ]);
  const [customCommand, setCustomCommand] = useState("");

  // Section 10: Capstone Lab Checklist State (7 items)
  const [checklist, setChecklist] = useState({
    compileWarnings: false,
    launchExecutable: false,
    handleErrors: false,
    reportExitSignals: false,
    straceEvidence: false,
    explainSequence: false,
    outputRedirection: false,
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
      question: "1. What is the primary purpose of a system call?",
      options: [
        "Compile source code",
        "Request a service from the operating system kernel",
        "Create a C header file",
        "Replace a linker",
      ],
      correctIndex: 1,
      explanation:
        "A system call is the programmatic interface that allows an unprivileged user-mode application to request services (such as file I/O, process creation, network transmission, or memory mapping) from the operating system kernel across the hardware privilege boundary.",
    },
    {
      id: 2,
      question: "2. What does fork() return in the child process when it succeeds?",
      options: [
        "-1",
        "The parent's PID",
        "0",
        "The child's exit status",
      ],
      correctIndex: 2,
      explanation:
        "fork() returns twice: in the newly created child process, it returns 0; in the parent process, it returns the child's positive Process ID (PID). If fork() fails, it returns -1 in the parent and no child is created.",
    },
    {
      id: 3,
      question: "3. What happens when execvp() succeeds?",
      options: [
        "The current process image is replaced",
        "A new child is always created",
        "The parent automatically exits",
        "The current process receives SIGTERM",
      ],
      correctIndex: 0,
      explanation:
        "The exec family of functions completely replaces the current process's virtual address space, machine instructions, stack, heap, and registers with a new executable program image. The process retains its PID, but never returns to the old code unless exec fails.",
    },
    {
      id: 4,
      question: "4. What does a read() return value of zero normally indicate for a regular file?",
      options: [
        "Permission denied",
        "End-of-file",
        "A successful write",
        "The descriptor is always invalid",
      ],
      correctIndex: 1,
      explanation:
        "For regular files, read() returning 0 indicates End-Of-File (EOF). No more bytes are currently available to read from the file offset.",
    },
    {
      id: 5,
      question: "5. Why does a parent call waitpid()?",
      options: [
        "To compile the child",
        "To collect child status and manage its termination",
        "To set the child's environment automatically",
        "To redirect the child's stdout",
      ],
      correctIndex: 1,
      explanation:
        "waitpid() suspends the parent (unless WNOHANG is passed) until the child process changes state or terminates, allowing the parent to collect its exit status code or terminating signal and preventing the child from lingering as a zombie in the kernel process table.",
    },
    {
      id: 6,
      question: "6. What is the standard descriptor number for stderr?",
      options: ["0", "1", "2", "3"],
      correctIndex: 2,
      explanation:
        "POSIX standard file descriptors are: 0 = STDIN_FILENO (standard input), 1 = STDOUT_FILENO (standard output), and 2 = STDERR_FILENO (standard error).",
    },
    {
      id: 7,
      question: "7. What is the main danger of using system() with an untrusted command string?",
      options: [
        "It always disables ASLR",
        "Shell injection can cause unintended command execution",
        "It automatically closes all files",
        "It prevents child processes",
      ],
      correctIndex: 1,
      explanation:
        "system() invokes `/bin/sh -c <string>`. If user input contains metacharacters (such as `;`, `&&`, `|`, `` ` ``), the shell interprets them as additional arbitrary commands, allowing severe shell injection vulnerabilities. Using `execve` with an explicit argument array prevents this.",
    },
    {
      id: 8,
      question: "8. Which statement about a system-call error is correct?",
      options: [
        "Every failure terminates the process",
        "errno is always zero on success",
        "The interface's return value should be checked before interpreting errno",
        "All errors can safely be retried",
      ],
      correctIndex: 2,
      explanation:
        "`errno` is only meaningful when a system call explicitly returns an error indicator (typically -1 or NULL). Successful system calls do not reset `errno` to 0, so examining `errno` without checking the return value first can read stale error codes from previous calls.",
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
  ./runner echo 'Hello from MiniShell'
  ./runner ls -l
  ./runner sh -c 'exit 7'
  ./runner command_that_does_not_exist
  strace -f -o trace.log ./runner echo 'Hello'
  ./runner-redir output.txt echo 'Hello from redirected process' && cat output.txt
  gcc copy.c -o copy && ./copy in.txt out.txt
  gcc pipe_demo.c -o pipe_demo && ./pipe_demo
  clear`;
    } else if (raw.includes("runner ls -l")) {
      output = `total 72
-rwxr-xr-x 1 engineer engineer 16736 Oct 15 11:20 runner
-rw-r--r-- 1 engineer engineer  1582 Oct 15 11:15 runner.c
-rw-r--r-- 1 engineer engineer  2104 Oct 15 11:10 copy.c
-rw-r--r-- 1 engineer engineer  1750 Oct 15 11:12 pipe_demo.c
Child exited with status: 0`;
      type = "success";
    } else if (raw.includes("runner sh -c 'exit 7'")) {
      output = `Child exited with status: 7
[Parent captured non-zero status code via WEXITSTATUS(status)]`;
      type = "warning";
    } else if (raw.includes("command_that_does_not_exist")) {
      output = `execvp: No such file or directory
Child exited with status: 127
[Child failed execvp() and called _exit(127)]`;
      type = "error";
    } else if (raw.includes("strace")) {
      output = `execve("./runner", ["./runner", "echo", "Hello"], 0x7ffd91a24080 /* 58 vars */) = 0
[pid 5010] clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, ...) = 5011
[pid 5010] wait4(5011,  <unfinished ...>
[pid 5011] execve("/usr/bin/echo", ["echo", "Hello"], 0x7ffd91a24080 /* 58 vars */) = 0
[pid 5011] write(1, "Hello\\n", 6Hello)              = 6
[pid 5011] exit_group(0)                = ?
[pid 5010] <... wait4 resumed> [{WIFEXITED(s) && WEXITSTATUS(s) == 0}], 0, NULL) = 5011
[pid 5010] --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=5011, si_status=0} ---
[pid 5010] write(1, "Child exited with status: 0\\n", 28) = 28
+++ exited with 0 +++`;
      type = "success";
    } else if (raw.includes("runner-redir")) {
      output = `Redirecting child stdout to 'output.txt' via dup2(out_fd, STDOUT_FILENO)...
Child executed echo successfully.
[Parent collected child status 0]
--- Contents of output.txt ---
Hello from a redirected process`;
      type = "success";
    } else if (raw.includes("pipe_demo")) {
      output = `[Parent] Created pipe fds=[3, 4]
[Child]  Closed fds[0], written 19 bytes to fds[1], closed fds[1], exited 0
[Parent] Read from fds[0]: "Message from child\\n"
[Parent] Collected child status: exited 0 cleanly`;
      type = "success";
    } else if (raw.includes("copy")) {
      output = `[Copy] Opened in.txt (fd 3) and out.txt (fd 4, mode 0644)
[Copy] Transferred 4096 bytes via chunked read()/write() loop
[Copy] cmp in.txt out.txt passed: identical files.`;
      type = "success";
    } else if (raw.includes("echo")) {
      output = `Hello from MiniShell\nChild exited with status: 0`;
      type = "success";
    } else {
      output = `bash: ${raw}: simulated execution complete. Type 'help' to view all runnable commands.`;
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
        currentModuleId="syscalls"
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
                  Module 4 · Systems Programming
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-600">
                  PrepSpaces Operating Systems Master Course
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                  MIT 6.1810 · CMU 15-213 · The Linux Programming Interface
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                OS Interfaces, System Calls and Program Execution
              </h1>
              <p className="text-stone-600 max-w-3xl text-base sm:text-lg leading-relaxed">
                Understand how unprivileged applications cross the CPU privilege boundary to request protected operating system services. Trace process creation with <code className="font-mono text-stone-900">fork()</code>, image replacement with <code className="font-mono text-stone-900">execvp()</code>, status reaping with <code className="font-mono text-stone-900">waitpid()</code>, pipes, redirection, and <code className="font-mono text-stone-900">strace</code> diagnostics.
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
                  Lab Platform
                </div>
                <div className="text-sm font-medium text-stone-700">Linux / POSIX / strace</div>
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
              2. MiniShell Runner Sandbox
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
                Module Roadmap & Execution Architecture
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 1</span>
                  <h4 className="font-semibold text-white mt-1">ABI & Syscall Boundary</h4>
                  <p className="text-xs text-stone-400 mt-1">Calling conventions, syscall numbers, registers (rax, rdi), transitions.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 2</span>
                  <h4 className="font-semibold text-white mt-1">File System Calls</h4>
                  <p className="text-xs text-stone-400 mt-1">open, read, write, close, file descriptor tables, partial I/O loops.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 3</span>
                  <h4 className="font-semibold text-white mt-1">Process Creation</h4>
                  <p className="text-xs text-stone-400 mt-1">fork() copy-on-write, execvp() image replacement, waitpid(), zombies.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 4</span>
                  <h4 className="font-semibold text-white mt-1">Args, Env & Status</h4>
                  <p className="text-xs text-stone-400 mt-1">argc, argv, getenv, exit status macros (WIFEXITED, WEXITSTATUS).</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 5</span>
                  <h4 className="font-semibold text-white mt-1">Signals & Exceptions</h4>
                  <p className="text-xs text-stone-400 mt-1">SIGINT, SIGTERM, SIGKILL, sigaction, async-signal-safety, errno EINTR.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 6</span>
                  <h4 className="font-semibold text-white mt-1">Pipes & Redirection</h4>
                  <p className="text-xs text-stone-400 mt-1">Standard streams (0,1,2), dup2(), pipes (fds[2]), shell redirection.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 7</span>
                  <h4 className="font-semibold text-white mt-1">Security at OS Boundary</h4>
                  <p className="text-xs text-stone-400 mt-1">Least privilege, shell injection pitfalls (system vs execve), O_CLOEXEC.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Capstone</span>
                  <h4 className="font-semibold text-white mt-1">MiniShell Runner</h4>
                  <p className="text-xs text-stone-400 mt-1">Build runner.c, execute commands, trace with strace, output redirection.</p>
                </div>
              </div>
            </div>

            {/* LESSON 1: ABI AND THE SYSTEM-CALL BOUNDARY */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 1
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  ABI and the System-Call Boundary
                </h2>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-mono font-bold">1.1</span>
                  What Happens When a Program Requests an OS Service?
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  An unprivileged user program cannot directly write to NVMe controllers, manipulate hardware page tables, or bypass permissions. Instead, it must execute a <strong>system call</strong>—a hardware-gated doorway into the supervisor kernel:
                </p>

                {/* Interactive Syscall Transition Flow */}
                <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                      Interactive Syscall Privilege Transition Walkthrough
                    </span>
                    <span className="text-xs font-mono text-orange-700 font-bold">
                      Step {syscallStep + 1} of 5
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs text-center font-mono">
                    {[
                      { step: 0, title: "1. App Call", desc: "User invokes read(fd, buf, sz)" },
                      { step: 1, title: "2. C Wrapper", desc: "glibc loads rax, rdi, rsi, rdx" },
                      { step: 2, title: "3. CPU Trap", desc: "syscall instruction switches Ring 3->0" },
                      { step: 3, title: "4. Kernel Execution", desc: "VFS, page cache, permissions check" },
                      { step: 4, title: "5. Return", desc: "sysret returns to user mode with bytes" },
                    ].map((s) => (
                      <button
                        key={s.step}
                        onClick={() => setSyscallStep(s.step)}
                        className={`p-3 rounded-lg border text-left transition ${
                          syscallStep === s.step
                            ? "bg-orange-600 text-white border-orange-700 shadow-sm"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        <div className="font-bold">{s.title}</div>
                        <div className="text-[10px] mt-1 opacity-90">{s.desc}</div>
                      </button>
                    ))}
                  </div>

                  <div className="bg-stone-900 text-stone-100 p-4 rounded-lg font-mono text-xs">
                    {syscallStep === 0 && (
                      <div>
                        <span className="text-emerald-400 font-bold">[User Space — Ring 3]</span>
                        <p className="text-stone-300 mt-1">Application code calls POSIX API: <code className="text-amber-300">ssize_t n = read(fd, buffer, 4096);</code></p>
                      </div>
                    )}
                    {syscallStep === 1 && (
                      <div>
                        <span className="text-purple-400 font-bold">[C Library ABI Marshaling]</span>
                        <p className="text-stone-300 mt-1">glibc wrapper places Syscall #0 (sys_read) into <code className="text-amber-300">%rax</code>. Args: <code className="text-blue-300">%rdi=fd</code>, <code className="text-blue-300">%rsi=buffer</code>, <code className="text-blue-300">%rdx=4096</code>.</p>
                      </div>
                    )}
                    {syscallStep === 2 && (
                      <div>
                        <span className="text-red-400 font-bold">[Hardware Privilege Switch — Ring 3 &rarr; Ring 0]</span>
                        <p className="text-stone-300 mt-1">The CPU executes the <code className="text-amber-300">syscall</code> instruction. CPU saves user RIP/RFLAGS in RCX/R11, switches to the kernel stack (via TSS), and jumps to entry point <code className="text-blue-300">entry_SYSCALL_64</code>.</p>
                      </div>
                    )}
                    {syscallStep === 3 && (
                      <div>
                        <span className="text-blue-400 font-bold">[Kernel Space — Ring 0]</span>
                        <p className="text-stone-300 mt-1">Kernel indexes system call dispatch table: validates that pointer <code className="text-amber-300">buffer</code> is inside valid user memory (via access_ok), checks descriptor permissions, queries page cache, and reads file data.</p>
                      </div>
                    )}
                    {syscallStep === 4 && (
                      <div>
                        <span className="text-emerald-400 font-bold">[Return to User Mode — Ring 0 &rarr; Ring 3]</span>
                        <p className="text-stone-300 mt-1">Kernel puts return value (bytes read or negative error code) into <code className="text-amber-300">%rax</code> and executes <code className="text-blue-300">sysretq</code>. glibc extracts positive count or stores -errno in thread-local <code className="text-red-300">errno</code>.</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-2">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h5 className="font-bold text-stone-900 mb-1">API (Source Code)</h5>
                    <p className="text-stone-600 leading-relaxed">
                      The C function signature documented in headers (e.g., <code className="font-mono">read(int fd, void *buf, size_t count)</code>).
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h5 className="font-bold text-stone-900 mb-1">ABI (Binary Interface)</h5>
                    <p className="text-stone-600 leading-relaxed">
                      Register passing rules: on Linux x86-64, <code className="font-mono">rax</code> (syscall #), <code className="font-mono">rdi, rsi, rdx, r10, r8, r9</code>.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h5 className="font-bold text-stone-900 mb-1">Kernel Interface</h5>
                    <p className="text-stone-600 leading-relaxed">
                      The kernel entry point and dispatch table mapping syscall numbers to internal handler functions (<code className="font-mono">ksys_read</code>).
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* LESSON 2: FILE SYSTEM CALLS */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 2
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  File System Calls: Handles to Kernel Resources
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-stone-700 leading-relaxed">
                  A <strong>file descriptor (fd)</strong> is not a file pointer or data buffer; it is a small non-negative integer that indexes into the process's per-process file descriptor table. The four fundamental POSIX operations are:
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-left border border-stone-200 rounded-lg">
                    <thead className="bg-stone-100 text-stone-700 font-semibold">
                      <tr>
                        <th className="py-2.5 px-3 border-b">Interface</th>
                        <th className="py-2.5 px-3 border-b">Purpose</th>
                        <th className="py-2.5 px-3 border-b">Success Return</th>
                        <th className="py-2.5 px-3 border-b">Failure Return</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 font-mono">
                      <tr>
                        <td className="py-2 px-3 font-bold text-stone-900">open(path, flags, mode)</td>
                        <td className="py-2 px-3 text-stone-600 font-sans">Open resource, allocate descriptor</td>
                        <td className="py-2 px-3 text-emerald-700 font-bold">&gt;= 0 (lowest available fd)</td>
                        <td className="py-2 px-3 text-red-600 font-bold">-1 (errno set)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-bold text-stone-900">read(fd, buf, count)</td>
                        <td className="py-2 px-3 text-stone-600 font-sans">Read bytes from descriptor into buffer</td>
                        <td className="py-2 px-3 text-emerald-700 font-bold">&gt; 0 (bytes read); 0 = EOF</td>
                        <td className="py-2 px-3 text-red-600 font-bold">-1 (errno set)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-bold text-stone-900">write(fd, buf, count)</td>
                        <td className="py-2 px-3 text-stone-600 font-sans">Write bytes from buffer to descriptor</td>
                        <td className="py-2 px-3 text-emerald-700 font-bold">&gt; 0 (bytes written)</td>
                        <td className="py-2 px-3 text-red-600 font-bold">-1 (errno set)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-bold text-stone-900">close(fd)</td>
                        <td className="py-2 px-3 text-stone-600 font-sans">Release descriptor handle back to OS</td>
                        <td className="py-2 px-3 text-emerald-700 font-bold">0</td>
                        <td className="py-2 px-3 text-red-600 font-bold">-1 (errno set)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Practical Example: Copying a File with robust retry loops */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-800">
                      Production Pattern: Robust Chunked File Copy (<code className="font-mono">copy.c</code>)
                    </span>
                    <button
                      onClick={() => copyToClipboard(`#include <errno.h>\n#include <fcntl.h>\n#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n\nint main(int argc, char *argv[]) {\n    if (argc != 3) {\n        fprintf(stderr, "Usage: %s SOURCE DESTINATION\\n", argv[0]);\n        return EXIT_FAILURE;\n    }\n    int in_fd = open(argv[1], O_RDONLY);\n    if (in_fd == -1) { perror("open source"); return EXIT_FAILURE; }\n\n    int out_fd = open(argv[2], O_WRONLY | O_CREAT | O_TRUNC, 0644);\n    if (out_fd == -1) { perror("open dest"); close(in_fd); return EXIT_FAILURE; }\n\n    char buffer[4096];\n    for (;;) {\n        ssize_t n = read(in_fd, buffer, sizeof buffer);\n        if (n == 0) break; // EOF\n        if (n < 0) {\n            if (errno == EINTR) continue;\n            perror("read"); close(in_fd); close(out_fd); return EXIT_FAILURE;\n        }\n        ssize_t offset = 0;\n        while (offset < n) {\n            ssize_t written = write(out_fd, buffer + offset, (size_t)(n - offset));\n            if (written < 0) {\n                if (errno == EINTR) continue;\n                perror("write"); close(in_fd); close(out_fd); return EXIT_FAILURE;\n            }\n            offset += written;\n        }\n    }\n    close(in_fd);\n    close(out_fd);\n    return EXIT_SUCCESS;\n}`, "copy-c")}
                      className="flex items-center gap-1 text-xs text-stone-500 hover:text-stone-900 font-mono"
                    >
                      {copiedCodeId === "copy-c" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      Copy Code
                    </button>
                  </div>

                  <div className="relative bg-stone-950 text-stone-100 rounded-xl p-4 font-mono text-xs overflow-x-auto">
                    <pre>{`// Handles partial writes, signals (EINTR), and descriptor cleanup
int in_fd = open(argv[1], O_RDONLY);
int out_fd = open(argv[2], O_WRONLY | O_CREAT | O_TRUNC, 0644);

char buffer[4096];
for (;;) {
    ssize_t n = read(in_fd, buffer, sizeof buffer);
    if (n == 0) break; // EOF reached
    if (n < 0) {
        if (errno == EINTR) continue; // interrupted by signal; retry
        perror("read"); break;
    }
    ssize_t offset = 0;
    while (offset < n) {
        ssize_t written = write(out_fd, buffer + offset, (size_t)(n - offset));
        if (written < 0) {
            if (errno == EINTR) continue;
            perror("write"); break;
        }
        offset += written;
    }
}`}</pre>
                  </div>
                </div>
              </div>
            </article>

            {/* LESSON 3: PROCESS CREATION AND EXECUTION */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 3
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Process Creation and Execution: fork(), exec(), and wait()
                </h2>
              </div>

              <p className="text-stone-700 leading-relaxed">
                In Unix, creating a process and running a new executable are intentionally separated into two distinct system calls: <code className="font-mono font-bold text-stone-900">fork()</code> clones the calling process, while <code className="font-mono font-bold text-stone-900">exec()</code> replaces the address space with a new program.
              </p>

              {/* Interactive Process State Machine Visualizer */}
              <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                    Interactive Process Lifecycle Simulator
                  </span>
                  <button
                    onClick={() => setProcessState("idle")}
                    className="flex items-center gap-1 text-xs text-stone-500 hover:text-stone-900 font-mono"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                  <button
                    onClick={() => setProcessState("idle")}
                    className={`p-3 rounded-lg border text-left transition ${
                      processState === "idle" ? "bg-orange-600 text-white border-orange-700" : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    <div className="font-bold">1. Parent Running</div>
                    <div className="text-[11px] opacity-80 mt-1">PID 1000 · Single task</div>
                  </button>
                  <button
                    onClick={() => setProcessState("forked")}
                    className={`p-3 rounded-lg border text-left transition ${
                      processState === "forked" ? "bg-orange-600 text-white border-orange-700" : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    <div className="font-bold">2. fork() Called</div>
                    <div className="text-[11px] opacity-80 mt-1">Child PID 1001 (COW copy)</div>
                  </button>
                  <button
                    onClick={() => setProcessState("execed")}
                    className={`p-3 rounded-lg border text-left transition ${
                      processState === "execed" ? "bg-orange-600 text-white border-orange-700" : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    <div className="font-bold">3. execvp() Replaces</div>
                    <div className="text-[11px] opacity-80 mt-1">Child becomes /bin/echo</div>
                  </button>
                  <button
                    onClick={() => setProcessState("reaped")}
                    className={`p-3 rounded-lg border text-left transition ${
                      processState === "reaped" ? "bg-orange-600 text-white border-orange-700" : "bg-white text-stone-700 border-stone-200"
                    }`}
                  >
                    <div className="font-bold">4. waitpid() Reaps</div>
                    <div className="text-[11px] opacity-80 mt-1">Status collected, no zombie</div>
                  </button>
                </div>

                <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs space-y-2">
                  {processState === "idle" && (
                    <div>
                      <div className="text-emerald-400 font-bold">[Parent PID 1000]</div>
                      <p className="text-stone-300">Parent is executing <code className="text-amber-300">main()</code>. Open descriptors: 0 (stdin), 1 (stdout), 2 (stderr).</p>
                    </div>
                  )}
                  {processState === "forked" && (
                    <div>
                      <div className="text-purple-400 font-bold">[fork() Complete — 2 Processes]</div>
                      <p className="text-stone-300">
                        • <strong>Parent (PID 1000):</strong> receives return value <code className="text-amber-300">pid = 1001</code>.<br />
                        • <strong>Child (PID 1001):</strong> receives return value <code className="text-amber-300">pid = 0</code>.<br />
                        • Physical RAM pages are shared as <em>Copy-On-Write (COW)</em>. Descriptors 0, 1, 2 are cloned.
                      </p>
                    </div>
                  )}
                  {processState === "execed" && (
                    <div>
                      <div className="text-blue-400 font-bold">[execvp("echo", ["echo", "Hello"]) Complete]</div>
                      <p className="text-stone-300">
                        Child retains PID 1001, but its old code/stack/heap are completely replaced with <code className="text-amber-300">/bin/echo</code>. It executes and prints "Hello", then exits with code 0.
                      </p>
                    </div>
                  )}
                  {processState === "reaped" && (
                    <div>
                      <div className="text-emerald-400 font-bold">[waitpid(1001, &amp;status, 0) Complete]</div>
                      <p className="text-stone-300">
                        Parent reaps child PID 1001 exit status via <code className="text-amber-300">WEXITSTATUS(status) == 0</code>. Kernel frees child process table slot. No zombie created!
                      </p>
                    </div>
                  )}
                </div>

                {/* Zombies vs Orphans */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-lg bg-stone-100 border border-stone-200">
                    <span className="font-bold text-stone-900">Zombie Process</span>
                    <p className="text-stone-600 mt-1">
                      A child that has terminated, but whose parent has not yet called <code className="font-mono">wait()</code> or <code className="font-mono">waitpid()</code>. It consumes an entry in the kernel's process table.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-stone-100 border border-stone-200">
                    <span className="font-bold text-stone-900">Orphan Process</span>
                    <p className="text-stone-600 mt-1">
                      A child whose parent terminated before the child finished. On modern Linux, orphaned processes are adopted by <code className="font-mono">systemd</code> (PID 1), which automatically reaps them.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* LESSON 4: ARGUMENTS, ENVIRONMENT & EXIT STATUS */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 4
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Arguments, Environment Variables and Exit Status
                </h2>
              </div>

              <div className="space-y-4 text-sm text-stone-700">
                <p>
                  When the kernel executes a program, it constructs the initial stack frame with three arguments:
                </p>
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 font-mono text-xs">
                  <span className="text-purple-600 font-bold">int</span> main(<span className="text-purple-600 font-bold">int</span> argc, <span className="text-purple-600 font-bold">char</span> *argv[], <span className="text-purple-600 font-bold">char</span> *envp[])
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-stone-900">argc &amp; argv</div>
                    <p className="text-stone-600 mt-1">
                      <code className="font-mono">argc</code> is count of argument strings; <code className="font-mono">argv[0]</code> is program name; <code className="font-mono">argv[argc]</code> is guaranteed to be NULL.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-stone-900">Environment (getenv)</div>
                    <p className="text-stone-600 mt-1">
                      Key-value strings inherited from the parent. Access via <code className="font-mono">getenv("PATH")</code>. Not automatically secure against malicious injections.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-stone-900">Exit Status (0–255)</div>
                    <p className="text-stone-600 mt-1">
                      0 indicates success. Shell stores it in <code className="font-mono">$?</code>. Parent decodes it via <code className="font-mono">WEXITSTATUS(status)</code> or <code className="font-mono">WTERMSIG(status)</code>.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* LESSON 5: SIGNALS, EXCEPTIONS & ERROR PROPAGATION */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 5
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Signals, Exceptions and Error Propagation
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-stone-700 leading-relaxed">
                  It is essential to distinguish between CPU hardware exceptions, operating system signals, and system-call return errors:
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-left border border-stone-200 rounded-lg">
                    <thead className="bg-stone-100 text-stone-700 font-semibold">
                      <tr>
                        <th className="py-2.5 px-3 border-b">Mechanism</th>
                        <th className="py-2.5 px-3 border-b">Source</th>
                        <th className="py-2.5 px-3 border-b">Examples</th>
                        <th className="py-2.5 px-3 border-b">Handling</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-xs">
                      <tr>
                        <td className="py-2 px-3 font-bold text-stone-900">Hardware Exception</td>
                        <td className="py-2 px-3 text-stone-600">CPU execution unit</td>
                        <td className="py-2 px-3 font-mono text-stone-700">Divide-by-zero, Page Fault</td>
                        <td className="py-2 px-3 text-stone-600">Kernel catches, translates to signal (SIGFPE/SIGSEGV)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-bold text-stone-900">OS Signal</td>
                        <td className="py-2 px-3 text-stone-600">Kernel or another process</td>
                        <td className="py-2 px-3 font-mono text-stone-700">SIGINT (Ctrl+C), SIGTERM, SIGKILL</td>
                        <td className="py-2 px-3 text-stone-600">Custom sigaction handler or default termination</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-bold text-stone-900">System Call Error</td>
                        <td className="py-2 px-3 text-stone-600">Kernel subsystem</td>
                        <td className="py-2 px-3 font-mono text-stone-700">ENOENT, EACCES, EINTR</td>
                        <td className="py-2 px-3 text-stone-600">Returns -1; sets errno; handled by caller</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Safe Signal Handler */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                  <span className="font-bold text-stone-900">Async-Signal-Safe Programming Rule:</span>
                  <p className="text-stone-600">
                    Signal handlers run asynchronously, interrupting arbitrary code. They must <strong>never</strong> call non-async-signal-safe functions like <code className="font-mono">printf()</code>, <code className="font-mono">malloc()</code>, or <code className="font-mono">exit()</code>. Use a <code className="font-mono">volatile sig_atomic_t</code> flag or <code className="font-mono">write()</code>.
                  </p>
                </div>
              </div>
            </article>

            {/* LESSON 6: STREAMS, PIPES AND REDIRECTION */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 6
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Standard Streams, Pipes, and Redirection
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-stone-700 leading-relaxed">
                  Unix shells compose utilities by piping descriptors: <code className="font-mono font-bold text-stone-900">cat names.txt | sort | uniq</code>. The pipe creates a unidirectional byte channel in kernel memory:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-stone-900 text-sm mb-1 font-sans">pipe(fds)</div>
                    <p className="text-stone-600 font-sans mb-2">Allocates a kernel buffer and two file descriptors:</p>
                    <div><span className="text-orange-700 font-bold">fds[0]:</span> Read end (child/consumer)</div>
                    <div><span className="text-orange-700 font-bold">fds[1]:</span> Write end (parent/producer)</div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-stone-900 text-sm mb-1 font-sans">dup2(oldfd, newfd)</div>
                    <p className="text-stone-600 font-sans mb-2">Atomically duplicates oldfd onto newfd:</p>
                    <div><code className="text-purple-700">dup2(file_fd, STDOUT_FILENO);</code></div>
                    <div className="text-stone-500 text-[11px] font-sans mt-1">Redirects subsequent stdout writes directly into the file!</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs leading-relaxed">
                  <strong>Critical Systems Insight on Pipes:</strong> The reader will only see End-Of-File (EOF) when <em>all</em> write descriptors referencing the pipe are closed. If the reader inherits an unclosed write descriptor, it will block forever waiting for input!
                </div>
              </div>
            </article>

            {/* LESSON 7: SECURITY AT THE OS BOUNDARY */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 7
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Security at the OS Boundary: Shell Injection &amp; Hygiene
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-stone-700 leading-relaxed">
                  System calls define an adversarial boundary. When launching subprograms or handling user files, security flaws frequently arise from improper descriptor leaks and shell invocation:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
                    <div className="font-bold text-red-900 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      VULNERABLE: system() Shell Concatenation
                    </div>
                    <div className="bg-stone-900 text-stone-100 p-2.5 rounded font-mono">
                      char cmd[256];<br />
                      snprintf(cmd, sizeof cmd, "grep %s logs.txt", user_input);<br />
                      system(cmd); <span className="text-red-400">// ATTACK: user_input = "foo; rm -rf /"</span>
                    </div>
                    <p className="text-red-900 text-[11px]">
                      The shell interprets semicolons, pipes, and backticks, executing injected commands with the program's privileges.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      SECURE: Direct execve() Argument Vector
                    </div>
                    <div className="bg-stone-900 text-stone-100 p-2.5 rounded font-mono">
                      char *args[] = &#123;"/bin/grep", user_input, "logs.txt", NULL&#125;;<br />
                      execv("/bin/grep", args);
                    </div>
                    <p className="text-emerald-900 text-[11px]">
                      Arguments are passed directly to the kernel without invoking a shell parser. Metacharacters are treated as literal text.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                  <div className="font-bold text-stone-900">Descriptor Hygiene with O_CLOEXEC:</div>
                  <p className="text-stone-600">
                    Always open sensitive resources with the <code className="font-mono">O_CLOEXEC</code> flag (or use <code className="font-mono">fcntl(fd, F_SETFD, FD_CLOEXEC)</code>). This ensures file handles are automatically closed during <code className="font-mono">exec()</code>, preventing untrusted child processes from inheriting open database connections or security tokens.
                  </p>
                </div>
              </div>
            </article>

            {/* UNIVERSITY REFERENCES */}
            <section className="bg-stone-100 border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-600" />
                University &amp; Professional Reference Standards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h5 className="font-bold text-stone-900">MIT 6.1810 xv6 Operating System</h5>
                  <p className="text-stone-600 mt-1">Detailed study of UNIX system call table, trap handling, and process scheduling.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h5 className="font-bold text-stone-900">The Linux Programming Interface (TLPI)</h5>
                  <p className="text-stone-600 mt-1">Michael Kerrisk's authoritative reference for Linux system calls, processes, pipes, and signals.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h5 className="font-bold text-stone-900">CMU CS:APP (Bryant &amp; O'Hallaron)</h5>
                  <p className="text-stone-600 mt-1">Exceptional control flow, signal handling, and robust I/O wrapper functions (Rio).</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h5 className="font-bold text-stone-900">Linux Manual Pages (man-pages)</h5>
                  <p className="text-stone-600 mt-1">Official POSIX specifications for open(2), read(2), fork(2), execve(2), and waitpid(2).</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: INTERACTIVE LAB & MINISHELL RUNNER SANDBOX */}
        {activeTab === "interactive-lab" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-xl font-bold font-serif text-stone-900 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-orange-600" />
                    Capstone MiniShell Runner Sandbox
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Simulate compiling and running <code className="font-mono">runner.c</code>, diagnosing process operations with <code className="font-mono">strace</code>, and testing redirection.
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
                  Clickable Lab Exercises:
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    "./runner echo 'Hello from MiniShell'",
                    "./runner ls -l",
                    "./runner sh -c 'exit 7'",
                    "./runner command_that_does_not_exist",
                    "strace -f -o trace.log ./runner echo 'Hello'",
                    "./runner-redir output.txt echo 'Hello from redirected process'",
                    "gcc copy.c -o copy && ./copy in.txt out.txt",
                    "gcc pipe_demo.c -o pipe_demo && ./pipe_demo",
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
                  <span>engineer@prepspaces:~/module4-syscalls$</span>
                  <span>Linux x86-64 · POSIX.1-2017 · strace 6.5</span>
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
                    placeholder="Type command (e.g., './runner ls -l', 'strace ...', 'help')..."
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
                  Complete all 7 practical milestones to master Linux process execution and system call tracing.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-orange-100 text-orange-800">
                  {completedChecklistCount} of 7 Completed ({Math.round((completedChecklistCount / 7) * 100)}%)
                </span>
                <button
                  onClick={() => {
                    const report = `# PrepSpaces Module 4: OS Interfaces, System Calls & Execution
## Lab Completion Report
- [${checklist.compileWarnings ? "x" : " "}] Runner compiles with strict warnings (-std=c17 -Wall -Wextra -Wpedantic)
- [${checklist.launchExecutable ? "x" : " "}] Successfully launches an existing executable (fork + execvp)
- [${checklist.handleErrors ? "x" : " "}] Handles missing commands and fork failures (_exit(127))
- [${checklist.reportExitSignals ? "x" : " "}] Reports exit codes and signal termination correctly (WIFEXITED, WTERMSIG)
- [${checklist.straceEvidence ? "x" : " "}] Includes a saved strace trace or equivalent evidence
- [${checklist.explainSequence ? "x" : " "}] Explains observed process & system-call sequence (clone, execve, wait4)
- [${checklist.outputRedirection ? "x" : " "}] Implements and tests output redirection via dup2()

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
                  key: "compileWarnings",
                  title: "1. Runner compiles with strict compiler warnings",
                  desc: "Compile runner.c using `gcc -std=c17 -Wall -Wextra -Wpedantic -g -O0` with zero warnings.",
                },
                {
                  key: "launchExecutable",
                  title: "2. Successfully launches an existing executable",
                  desc: "Execute `./runner echo 'Hello from MiniShell'` and `./runner ls -l`, verifying child execution.",
                },
                {
                  key: "handleErrors",
                  title: "3. Handles missing commands and fork failures",
                  desc: "When execvp() fails, print error with perror(), call `_exit(127)`, and prevent parent corruption.",
                },
                {
                  key: "reportExitSignals",
                  title: "4. Reports exit codes and signal termination correctly",
                  desc: "Use `WIFEXITED(status)` to retrieve exit code, or `WIFSIGNALED(status)` for fatal signals.",
                },
                {
                  key: "straceEvidence",
                  title: "5. Includes saved strace trace evidence",
                  desc: "Record system-call trace with `strace -f -o trace.log ./runner echo 'Hello'` and inspect process events.",
                },
                {
                  key: "explainSequence",
                  title: "6. Explains observed process and system-call sequence",
                  desc: "Document why clone() appears in trace, how wait4() suspends parent, and when SIGCHLD is delivered.",
                },
                {
                  key: "outputRedirection",
                  title: "7. Implements and tests output redirection",
                  desc: "Extend the runner to open an output file and redirect child stdout using `dup2(fd, STDOUT_FILENO)`.",
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
                  Module 4 Knowledge Check (8 Questions)
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Validate your understanding of system call boundaries, fork/exec semantics, file descriptors, and shell injection.
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
            onClick={() => navigate("/learning/os/systems-programming")}
            className="flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-stone-900 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Module 3 (C &amp; Systems Programming)
          </button>

          <div className="text-xs text-stone-500 font-medium">
            Module 4 of 13 · PrepSpaces Operating Systems Master Course
          </div>

          <button
            onClick={() => navigate("/learning/os/scheduling")}
            className="flex items-center gap-2 text-xs font-semibold text-orange-600 hover:text-orange-700 transition"
          >
            Next: Module 5 (CPU Scheduling)
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
              moduleId="syscalls"
              moduleTitle="OS Interfaces, System Calls & Program Execution"
            />
          </div>
        </aside>
      )}
    </div>
  );
}
