import useModuleContent from "../hooks/useModuleContent";
import ModuleLoadingSkeleton from "./ModuleLoadingSkeleton";
import ModuleErrorState from "./ModuleErrorState";
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
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 1                                   */
/* Introduction to Operating Systems and Systems Thinking                     */
/* MIT 6.1810, Stanford CS140, CMU 15-410, UC Berkeley CS162, OSTEP Standard */
/* -------------------------------------------------------------------------- */

export default function OSIntro() {
  const navigate = useNavigate();
  const { data: moduleData, loading, error, reload } = useModuleContent("operating-systems", "intro");


  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-lab' | 'quiz' | 'checklist'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Section 2.3 Quiz Scenario State
  const [section2QuizAnswer, setSection2QuizAnswer] = useState(null);

  // Section 9: Lab Completion Checklist State
  const [checklist, setChecklist] = useState({
    osKernel: false,
    cpuArch: false,
    memoryStats: false,
    processes: false,
    processState: false,
    userVsKernel: false,
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  // Section 10: Knowledge Assessment State (8 questions)
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  

  const handleSelectQuizOption = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateQuizScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  // Section 8: Interactive Terminal Simulator State
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([
    {
      cmd: "uname -a",
      output:
        "Linux prepspaces-kernel-lab 6.8.0-45-generic #45-Ubuntu SMP PREEMPT_DYNAMIC Wed Oct 08 14:02:10 UTC 2026 x86_64 x86_64 x86_64 GNU/Linux",
    },
    {
      cmd: "cat /proc/version",
      output:
        "Linux version 6.8.0-45-generic (buildd@lcy02-amd64-080) (x86_64-linux-gnu-gcc-13) #45-Ubuntu SMP PREEMPT_DYNAMIC",
    },
  ]);

  

  const handleExecuteCommand = (cmdText = terminalInput) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setTerminalHistory([]);
      setTerminalInput("");
      return;
    }

    let output = commandDatabase[trimmed];
    if (!output) {
      if (trimmed.startsWith("cat ")) {
        output = `cat: ${trimmed.split(" ")[1]}: No such file or directory`;
      } else {
        output = `bash: ${trimmed}: command not found. Type 'help' for supported kernel inspection commands.`;
      }
    }

    setTerminalHistory((prev) => [...prev, { cmd: trimmed, output }]);
    setTerminalInput("");
  };

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] px-4 py-6 sm:px-8 sm:py-10 md:px-12 antialiased selection:bg-[#f97316] selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Module Navigation Header */}
        <ModuleNav
          track="os"
          currentModuleId="intro"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
          aiTutorLabel="Systems Tutor"
        />

        {/* Hero Header */}
        <header className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#ea580c]">
              <Cpu size={13} />
              Operating Systems Master Course · Module 1
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono text-stone-600">
              MIT 6.1810 & CMU 15-410 Pedagogical Standard
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono text-stone-600">
              Self-Paced Deep Dive
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#18181b] tracking-tight">
            Introduction to Operating Systems and Systems Thinking
          </h1>

          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            This module establishes the foundational principles of how operating systems work internally, how hardware resources are mediated, and why operating systems are engineered differently for varying computing environments. Combining curricula from <strong>MIT, Stanford, CMU, UC Berkeley, and Cambridge</strong> with practical Linux inspection, architectural trade-offs, and low-level systems-level thinking.
          </p>

          {/* Module Learning Objectives Grid */}
          <div className="mt-6 pt-6 border-t border-stone-200/80">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#ea580c]" />
              Module Learning Objectives
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs text-stone-700">
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-2">
                <span className="font-mono font-bold text-[#ea580c]">1.</span>
                <span>Explain why an OS exists and the fundamental problems it solves.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-2">
                <span className="font-mono font-bold text-[#ea580c]">2.</span>
                <span>Understand the OS as abstraction layer, resource manager, and control program.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-2">
                <span className="font-mono font-bold text-[#ea580c]">3.</span>
                <span>Distinguish hardware, kernel space, user space, system calls, and processes.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-2">
                <span className="font-mono font-bold text-[#ea580c]">4.</span>
                <span>Compare batch, multiprogramming, time-sharing, real-time, and distributed OS.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-2">
                <span className="font-mono font-bold text-[#ea580c]">5.</span>
                <span>Evaluate monolithic, microkernel, modular, and hybrid kernel architectures.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-2">
                <span className="font-mono font-bold text-[#ea580c]">6.</span>
                <span>Compare Linux, Windows, macOS, Android, and embedded OS design models.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-2">
                <span className="font-mono font-bold text-[#ea580c]">7.</span>
                <span>Analyze multi-objective trade-offs: latency, isolation, throughput, reliability.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-50/80 border border-stone-200/70 flex items-start gap-2">
                <span className="font-mono font-bold text-[#ea580c]">8.</span>
                <span>Inspect live Linux systems: processes, CPU, memory, /proc, and /sys.</span>
              </div>
            </div>
            <p className="mt-3 text-[11px] font-mono text-stone-500">
              <strong>Prerequisites:</strong> Basic computer architecture, binary numbers, CPU, RAM, storage, and elementary programming.
            </p>
          </div>
        </header>

        {/* View Mode Navigation Tabs */}
        <div className="mb-6 flex flex-wrap items-center gap-2 border-b border-stone-200/80 pb-3">
          <button
            onClick={() => setActiveTab("theory")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "theory"
                ? "bg-[#18181b] text-white shadow-sm"
                : "bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <BookOpen size={16} className={activeTab === "theory" ? "text-orange-400" : "text-stone-400"} />
            <span>Curriculum & Deep Dive (§1–§7)</span>
          </button>

          <button
            onClick={() => setActiveTab("interactive-lab")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "interactive-lab"
                ? "bg-[#18181b] text-white shadow-sm"
                : "bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <Terminal size={16} className={activeTab === "interactive-lab" ? "text-orange-400" : "text-stone-400"} />
            <span>Interactive Linux Terminal Lab (§8)</span>
          </button>

          <button
            onClick={() => setActiveTab("checklist")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "checklist"
                ? "bg-[#18181b] text-white shadow-sm"
                : "bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <ShieldCheck size={16} className={activeTab === "checklist" ? "text-orange-400" : "text-stone-400"} />
            <span>Lab Report & Checklist ({completedChecklistCount}/6)</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "quiz"
                ? "bg-[#18181b] text-white shadow-sm"
                : "bg-white text-stone-600 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <Award size={16} className={activeTab === "quiz" ? "text-orange-400" : "text-stone-400"} />
            <span>Assessment Quiz (8 Questions)</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: CURRICULUM THEORY & SYSTEMS THINKING                               */}
        {/* ========================================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* 1. What is an Operating System, and Why Does It Exist? */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 1
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-medium">Foundational Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                1. What is an Operating System, and Why Does It Exist?
              </h2>

              <div className="mt-4 space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  An <strong>operating system (OS)</strong> is system software that manages a computer's physical hardware resources and provides controlled, convenient, and safe abstractions to application programs. Examples include Linux, Microsoft Windows, Apple's macOS, Android, and embedded operating systems.
                </p>
                <p>
                  Consider opening a browser, streaming music, downloading a file, and compiling code simultaneously. All these activities compete for the same physical CPU cycles, DRAM cells, SSD blocks, and network interfaces. Without an OS, every individual program would have to implement its own hardware drivers, directly arbitrate device conflicts, and risk overwriting other applications' memory.
                </p>
              </div>

              {/* Conceptual Model Diagram */}
              <div className="my-6 rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600 mb-4 text-center">
                  Figure 1.1 — Conceptual Architecture of a Computing System
                </h3>
                <div className="space-y-3 max-w-xl mx-auto">
                  <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3 text-center">
                    <p className="font-bold text-xs text-blue-900">User Applications & System Utilities</p>
                    <p className="text-[11px] text-blue-700 mt-0.5">Browser · Code Editor · Media Player · Database · Shell</p>
                  </div>

                  <div className="flex items-center justify-center gap-2 py-1 text-xs text-stone-400 font-mono">
                    <span>▼</span>
                    <span className="px-3 py-0.5 rounded-full bg-stone-200/80 text-[10px] text-stone-700 font-bold uppercase tracking-wider">
                      System Calls (open, read, write, clone, mmap)
                    </span>
                    <span>▼</span>
                  </div>

                  <div className="rounded-xl border border-orange-300 bg-orange-50/80 p-3.5 text-center shadow-xs">
                    <p className="font-extrabold text-xs text-orange-950">Operating System Kernel (Privileged Mode)</p>
                    <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px] font-mono text-orange-800">
                      <span className="p-1 rounded bg-orange-100/70">CPU Scheduler</span>
                      <span className="p-1 rounded bg-orange-100/70">Virtual Memory</span>
                      <span className="p-1 rounded bg-orange-100/70">VFS & Filesystems</span>
                      <span className="p-1 rounded bg-orange-100/70">Device Drivers</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 py-1 text-xs text-stone-400 font-mono">
                    <span>▼</span>
                    <span className="px-3 py-0.5 rounded-full bg-stone-200/80 text-[10px] text-stone-700 font-bold uppercase tracking-wider">
                      Memory-Mapped I/O, Interrupts & DMA
                    </span>
                    <span>▼</span>
                  </div>

                  <div className="rounded-xl border border-stone-300 bg-stone-200/70 p-3 text-center">
                    <p className="font-bold text-xs text-stone-900">Hardware Layer</p>
                    <p className="text-[11px] text-stone-600 mt-0.5">CPU Cores · MMU & TLB · DRAM · NVMe / SSD · NIC · GPU</p>
                  </div>
                </div>
              </div>

              {/* 1.2 Five Fundamental Reasons */}
              <div className="mt-6">
                <h3 className="text-base font-bold text-stone-900 mb-3">
                  1.2 Five Fundamental Reasons We Need an Operating System
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs text-stone-700">
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/60">
                    <h4 className="font-bold text-stone-900 flex items-center gap-2 text-sm">
                      <Layers size={16} className="text-[#ea580c]" />
                      A. Hardware Abstraction
                    </h4>
                    <p className="mt-2 leading-relaxed">
                      Hardware is heterogenous and complex. An application writing data should never need to know the electrical flash translation layer (FTL) commands of an NVMe SSD. The OS exposes a POSIX file descriptor:
                    </p>
                    <div className="mt-2 p-2 rounded-lg bg-[#18181b] text-orange-300 font-mono text-[11px]">
                      int fd = open("notes.txt", O_RDONLY);
                    </div>
                    <p className="mt-2 text-stone-500 text-[11px]">
                      The application interacts with an abstract byte-stream, while the kernel translates it into file blocks and storage commands.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/60">
                    <h4 className="font-bold text-stone-900 flex items-center gap-2 text-sm">
                      <Sliders size={16} className="text-[#ea580c]" />
                      B. Resource Management
                    </h4>
                    <p className="mt-2 leading-relaxed">
                      Computing machinery has finite physical capacity: CPU cycles, DRAM, disk bandwidth, and network packets. If 4 processes need the CPU at the same time, a single core cannot execute them all concurrently. The OS scheduler arbitrates who runs and for how long.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/60">
                    <h4 className="font-bold text-stone-900 flex items-center gap-2 text-sm">
                      <Shield size={16} className="text-[#ea580c]" />
                      C. Protection and Isolation
                    </h4>
                    <p className="mt-2 leading-relaxed">
                      If a media player encounters a null-pointer dereference or wild memory write, it must not corrupt the browser process or crash the kernel. Hardware privilege rings (Ring 0 vs Ring 3) and page table permissions enforce rigid boundaries.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/60">
                    <h4 className="font-bold text-stone-900 flex items-center gap-2 text-sm">
                      <Workflow size={16} className="text-[#ea580c]" />
                      D. Convenience & Standardization
                    </h4>
                    <p className="mt-2 leading-relaxed">
                      Standardized library wrappers (glibc, musl) allow developers to reuse complex functionalities (TCP/IP stacks, thread synchronization primitives, cryptographic access controls) across diverse hardware without reinventing low-level drivers.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/60 md:col-span-2">
                    <h4 className="font-bold text-stone-900 flex items-center gap-2 text-sm">
                      <Activity size={16} className="text-[#ea580c]" />
                      E. Fairness and Coordination
                    </h4>
                    <p className="mt-2 leading-relaxed">
                      Suppose a buggy or malicious application executes an infinite loop: <code className="font-mono bg-stone-200 px-1 py-0.5 rounded">while True: pass</code>. On a preemptive multitasking OS, hardware timer interrupts periodically transfer control back to the kernel scheduler, ensuring other tasks get their fair share of execution time regardless of rogue processes.
                    </p>
                  </div>
                </div>
              </div>

              {/* 1.4 The Three Classic Roles Table */}
              <div className="mt-6 pt-6 border-t border-stone-200/80">
                <h3 className="text-base font-bold text-stone-900 mb-3">
                  1.4 The Three Classic Roles of an Operating System
                </h3>
                <div className="overflow-x-auto rounded-xl border border-stone-200">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-stone-100 font-bold text-stone-700 border-b border-stone-200">
                      <tr>
                        <th className="p-3">Role</th>
                        <th className="p-3">Architectural Meaning</th>
                        <th className="p-3">Concrete Production Example</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr className="hover:bg-stone-50">
                        <td className="p-3 font-bold text-stone-900">Abstraction Layer</td>
                        <td className="p-3">Hides hardware complexity behind uniform interfaces</td>
                        <td className="p-3">Opening a file using a file descriptor without issuing PCIe NVMe doorbell registers</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="p-3 font-bold text-stone-900">Resource Manager</td>
                        <td className="p-3">Allocates, multiplexes, and accounts finite physical resources</td>
                        <td className="p-3">Linux Completely Fair Scheduler (CFS/EEVDF) dividing CPU runtime across threads</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="p-3 font-bold text-stone-900">Control Program</td>
                        <td className="p-3">Controls instruction execution and enforces security policies</td>
                        <td className="p-3">MMU throwing page fault exception when an unprivileged app attempts to write to kernel space</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-3 p-3.5 rounded-xl border border-orange-200 bg-orange-50/60 text-xs text-orange-950">
                  <p className="font-bold flex items-center gap-1.5">
                    <Sparkles size={14} className="text-[#ea580c]" />
                    University-Level Systems Insight:
                  </p>
                  <p className="mt-1 leading-relaxed">
                    An operating system is not merely a collection of utilities. Its central computer science challenge is: <em>How do we safely and efficiently share a complex, unreliable physical machine among competing, mutually distrustful programs while maintaining useful abstractions and performance guarantees?</em>
                  </p>
                </div>
              </div>
            </section>

            {/* 2. The OS as an Abstraction Layer, Resource Manager, and Control Program */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 2
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-medium">Core Mental Models</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                2. The Operating System as Abstraction, Resource Manager & Control Program
              </h2>

              <div className="mt-4 space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  These three perspectives explain almost every subsystem in modern computing:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                    <p className="font-bold text-stone-900 text-sm">2.1 Abstractions</p>
                    <ul className="mt-2 space-y-1 text-stone-600">
                      <li>• <strong>Process:</strong> Running program instance</li>
                      <li>• <strong>Virtual Address Space:</strong> Private 64-bit memory map</li>
                      <li>• <strong>File:</strong> Linear byte-array abstraction</li>
                      <li>• <strong>Socket:</strong> Bidirectional stream endpoint</li>
                      <li>• <strong>Thread:</strong> Schedulable instruction stream</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                    <p className="font-bold text-stone-900 text-sm">2.2 Resource Management</p>
                    <ul className="mt-2 space-y-1 text-stone-600">
                      <li>• <strong>CPU:</strong> Time slices & scheduling latency</li>
                      <li>• <strong>RAM:</strong> Page allocation & demand paging</li>
                      <li>• <strong>Storage:</strong> Block caching & journal writes</li>
                      <li>• <strong>Network:</strong> Buffer queues & packet flow</li>
                      <li>• <strong>cgroups:</strong> Resource accounting & limits</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                    <p className="font-bold text-stone-900 text-sm">2.3 Control Program</p>
                    <ul className="mt-2 space-y-1 text-stone-600">
                      <li>• <strong>Hardware Privileges:</strong> Ring 0 vs Ring 3</li>
                      <li>• <strong>Access Checks:</strong> UID/GID & capabilities</li>
                      <li>• <strong>Exception Routing:</strong> Traps, faults & aborts</li>
                      <li>• <strong>Mechanism vs Policy:</strong> Separation of execution from decision</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mechanism vs Policy Deep Dive */}
              <div className="mt-6 p-4 rounded-2xl border border-stone-200 bg-stone-50/80">
                <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <Compass size={16} className="text-[#ea580c]" />
                  Fundamental Systems Principle: Mechanism versus Policy
                </h3>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-700">
                  <div className="p-3 rounded-xl bg-white border border-stone-200/80">
                    <p className="font-bold text-stone-900">Mechanism (How something is done)</p>
                    <p className="mt-1 text-stone-600 leading-relaxed">
                      The low-level hardware or kernel facility that executes an operation. Example: <em>Context Switching</em> (saving register state to the process control block and reloading another process's state) or <em>Page Tables</em> (translating virtual addresses to physical frames).
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200/80">
                    <p className="font-bold text-stone-900">Policy (Which choice should be made)</p>
                    <p className="mt-1 text-stone-600 leading-relaxed">
                      The decision algorithm that chooses what to do. Example: <em>CFS Scheduler</em> deciding which ready thread runs next, or the <em>Page Replacement Algorithm</em> (LRU / Clock) choosing which memory page to evict under memory pressure.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Scenario Question */}
              <div className="mt-6 p-4 rounded-2xl border border-orange-200 bg-orange-50/40">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] flex items-center gap-1.5">
                  <HelpCircle size={15} />
                  Test Your Understanding · Section 2 Check
                </h3>
                <p className="mt-2 text-xs font-medium text-stone-800">
                  Scenario: A web browser cannot directly read or write to a protected memory region belonging to the operating system kernel. Which OS role is most directly responsible for this behavior?
                </p>

                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { id: "a", label: "Hardware abstraction only" },
                    { id: "b", label: "Resource accounting only" },
                    { id: "c", label: "Control and protection", isCorrect: true },
                    { id: "d", label: "File naming and path parsing" },
                  ].map((option) => {
                    const isSelected = section2QuizAnswer === option.id;
                    return (
                      <button
                        key={option.id}
                        onClick={() => setSection2QuizAnswer(option.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? option.isCorrect
                              ? "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold"
                              : "border-rose-400 bg-rose-50 text-rose-950 font-bold"
                            : "border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                        }`}
                      >
                        <span className="font-mono mr-2">{option.id.toUpperCase()}.</span>
                        {option.label}
                      </button>
                    );
                  })}
                </div>

                {section2QuizAnswer && (
                  <p className="mt-3 text-xs font-semibold text-stone-700">
                    {section2QuizAnswer === "c" ? (
                      <span className="text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 size={14} /> Correct! The Control and Protection role uses CPU privilege rings and page table access bits to prevent user-space applications from corrupting kernel space.
                      </span>
                    ) : (
                      <span className="text-rose-700 flex items-center gap-1">
                        <AlertTriangle size={14} /> Incorrect. Option C (Control and protection) is the primary role that enforces memory boundaries and hardware privilege levels.
                      </span>
                    )}
                  </p>
                )}
              </div>
            </section>

            {/* 3. Kernel, User Space, System Programs, and Applications */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 3
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-medium">Memory Isolation & Execution Rings</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                3. Kernel Space, User Space, System Calls & Processes
              </h2>

              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                The modern CPU hardware enforces a hardware-level division of privileges. On x86-64, this is mediated by protection rings (Ring 0 for Kernel, Ring 3 for User Space). On ARM architectures, Exception Levels (EL1 for Kernel, EL0 for Applications) serve the exact same purpose.
              </p>

              {/* Rings vs Exception Levels Visual Diagram */}
              <div className="my-6 p-5 rounded-2xl border border-stone-200 bg-stone-50">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600 mb-4 text-center">
                  Figure 3.1 — Hardware Privilege Boundaries & System Call Gate
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-stone-300 bg-white shadow-2xs">
                    <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                      <span className="font-bold text-stone-900">User Space (Ring 3 / EL0)</span>
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono text-[10px] font-bold">Unprivileged</span>
                    </div>
                    <ul className="mt-2.5 space-y-1.5 text-stone-600">
                      <li>• Executes ordinary application code (Node.js, Python, C++, Java)</li>
                      <li>• Cannot directly execute privileged CPU instructions (e.g. <code className="font-mono bg-stone-100 px-1 py-0.5 rounded">cli</code>, <code className="font-mono bg-stone-100 px-1 py-0.5 rounded">wrmsr</code>)</li>
                      <li>• Isolated in its own private virtual address space</li>
                      <li>• Crashes (e.g. SIGSEGV) terminate only that process</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-orange-300 bg-orange-50/60 shadow-2xs">
                    <div className="flex items-center justify-between pb-2 border-b border-orange-200">
                      <span className="font-bold text-orange-950">Kernel Space (Ring 0 / EL1)</span>
                      <span className="px-2 py-0.5 rounded bg-orange-200 text-orange-900 font-mono text-[10px] font-bold">Privileged Supervisor</span>
                    </div>
                    <ul className="mt-2.5 space-y-1.5 text-orange-900">
                      <li>• Executes privileged kernel scheduler, memory allocator, device drivers</li>
                      <li>• Full direct access to physical memory mapping & CPU control registers</li>
                      <li>• Handles hardware interrupts, page faults, and system traps</li>
                      <li>• Severe faults (Kernel Panic / BSOD) halt the entire machine</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-xl border border-stone-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="font-mono text-stone-700">
                    <span className="font-bold text-[#ea580c]">System Call Bridge:</span> User code places syscall number into <code className="bg-stone-100 px-1 rounded">RAX</code>, invokes <code className="bg-stone-100 px-1 rounded">syscall</code> instruction → CPU switches to Ring 0.
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-lg bg-orange-500 text-white font-mono text-[11px] font-bold">
                    Safe Kernel Gate
                  </span>
                </div>
              </div>

              {/* 3.3 Lifecycle of a System Call */}
              <div className="mt-6">
                <h3 className="text-base font-bold text-stone-900 mb-3">
                  3.3 What Happens During a System Call?
                </h3>
                <div className="space-y-2 text-xs text-stone-700">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white font-mono font-bold text-[11px]">1</span>
                    <div>
                      <p className="font-bold text-stone-900">Application Requests OS Service</p>
                      <p className="text-stone-600 mt-0.5">The application calls a C library wrapper (e.g. <code className="font-mono">write(1, buffer, len)</code> in glibc).</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white font-mono font-bold text-[11px]">2</span>
                    <div>
                      <p className="font-bold text-stone-900">Arguments Loaded into ABI Registers</p>
                      <p className="text-stone-600 mt-0.5">Under x86-64 Linux ABI, the syscall number (1 for sys_write) is placed in <code className="font-mono">rax</code>, arguments in <code className="font-mono">rdi, rsi, rdx, r10, r8, r9</code>.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white font-mono font-bold text-[11px]">3</span>
                    <div>
                      <p className="font-bold text-stone-900">Privilege Elevation via <code className="font-mono">syscall</code> / <code className="font-mono">svc</code></p>
                      <p className="text-stone-600 mt-0.5">The CPU transitions privilege level from Ring 3 to Ring 0, saves the instruction pointer, and jumps to the kernel's <code className="font-mono">system_call_entry</code> routine.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white font-mono font-bold text-[11px]">4</span>
                    <div>
                      <p className="font-bold text-stone-900">Kernel Validation, Dispatch & Execution</p>
                      <p className="text-stone-600 mt-0.5">The kernel validates pointer bounds, checks permissions, executes the requested filesystem/network operation, and writes return value to <code className="font-mono">rax</code>.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white font-mono font-bold text-[11px]">5</span>
                    <div>
                      <p className="font-bold text-stone-900">Return to User Space via <code className="font-mono">sysret</code> / <code className="font-mono">eret</code></p>
                      <p className="text-stone-600 mt-0.5">The CPU restores Ring 3 privilege and resumes user execution at the next application instruction.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
                  <strong>Critical Distinction:</strong> A system call is <em>not</em> automatically a context switch to another process. It is a privilege elevation of the currently running thread. The scheduler may or may not switch tasks depending on whether the system call blocked.
                </div>
              </div>
            </section>

            {/* 4. Operating System Types and Their Evolution */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 4
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-medium">Evolutionary Trajectory</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                4. Operating System Types and Evolution
              </h2>

              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                Operating systems have evolved through five distinct architectural paradigms to address changing hardware and workload demands.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
                  <span className="font-mono font-bold text-[#ea580c] text-[11px]">Type 1</span>
                  <h3 className="text-sm font-bold text-stone-900 mt-1">Batch Operating Systems</h3>
                  <p className="mt-2 text-stone-600 leading-relaxed">
                    Jobs with similar requirements are collected, queued, and executed in sequence with zero user interaction during execution. Still used in overnight payroll processing, bulk scientific computations, and large-scale data pipelines.
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-stone-500"><strong>Trade-off:</strong> High device utilization vs long turnaround time and zero interactive debugging.</p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
                  <span className="font-mono font-bold text-[#ea580c] text-[11px]">Type 2</span>
                  <h3 className="text-sm font-bold text-stone-900 mt-1">Multiprogramming Systems</h3>
                  <p className="mt-2 text-stone-600 leading-relaxed">
                    Keeps multiple programs resident in memory simultaneously. When Process A initiates an I/O read and blocks, the OS switches the CPU to Process B rather than letting the processor idle.
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-stone-500"><strong>Core Concept:</strong> Overlaps CPU computation with slow storage/network I/O waiting.</p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
                  <span className="font-mono font-bold text-[#ea580c] text-[11px]">Type 3</span>
                  <h3 className="text-sm font-bold text-stone-900 mt-1">Time-Sharing Systems</h3>
                  <p className="mt-2 text-stone-600 leading-relaxed">
                    Uses preemptive scheduling and time quantums (e.g. 5–50ms) to rapidly switch among interactive tasks, providing the illusion that many programs execute simultaneously for multiple human users.
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-stone-500"><strong>Trade-off:</strong> Immediate responsiveness vs context-switch overhead.</p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
                  <span className="font-mono font-bold text-[#ea580c] text-[11px]">Type 4</span>
                  <h3 className="text-sm font-bold text-stone-900 mt-1">Real-Time Operating Systems (RTOS)</h3>
                  <p className="mt-2 text-stone-600 leading-relaxed">
                    Engineered for workloads where timing correctness is as vital as computational correctness.
                  </p>
                  <div className="mt-2 space-y-1">
                    <p>• <strong>Hard Real-Time:</strong> Missing a deadline equals total system catastrophe (Airbag controller, pacemaker, flight avionics).</p>
                    <p>• <strong>Soft Real-Time:</strong> Missing a deadline degrades quality without catastrophic failure (Audio streaming, game video rendering).</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 md:col-span-2">
                  <span className="font-mono font-bold text-[#ea580c] text-[11px]">Type 5</span>
                  <h3 className="text-sm font-bold text-stone-900 mt-1">Distributed Operating Systems</h3>
                  <p className="mt-2 text-stone-600 leading-relaxed">
                    Coordinates autonomous, independent networked machines into a transparent unified computing substrate. Solves the complex realities of partial failure, clock synchronization skew, consensus protocols, and asynchronous network latency.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Operating System Kernel Architectures */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 5
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-medium">Internal Kernel Topologies</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                5. Operating System Kernel Architectures
              </h2>

              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                Kernel architecture describes how core operating system services are decomposed, where they execute in hardware privilege space, and how they communicate with each other.
              </p>

              {/* 4 Architecture Cards */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-stone-900 text-sm">Monolithic Kernel</h3>
                    <span className="px-2 py-0.5 rounded bg-stone-200 font-mono text-[10px]">Linux</span>
                  </div>
                  <p className="mt-2 text-stone-600 leading-relaxed">
                    Executes virtual memory, process scheduling, filesystems, network protocols, and device drivers in one shared, privileged supervisor space (Ring 0).
                  </p>
                  <p className="mt-2 text-emerald-800 font-medium">✓ High performance: direct function calls between kernel subsystems.</p>
                  <p className="mt-1 text-rose-800 font-medium">✗ Fault vulnerability: a single bug in a third-party driver can crash the entire system.</p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-stone-900 text-sm">Microkernel</h3>
                    <span className="px-2 py-0.5 rounded bg-stone-200 font-mono text-[10px]">seL4, MINIX 3</span>
                  </div>
                  <p className="mt-2 text-stone-600 leading-relaxed">
                    Shrinks the privileged kernel to the absolute minimum: IPC, basic scheduling, and address space mapping. Relocates filesystems, device drivers, and network stacks to isolated user-space processes.
                  </p>
                  <p className="mt-2 text-emerald-800 font-medium">✓ High fault isolation: a crashed filesystem driver can be restarted without kernel crash.</p>
                  <p className="mt-1 text-rose-800 font-medium">✗ Message-passing IPC overhead across user-kernel protection boundaries.</p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-stone-900 text-sm">Modular Kernel</h3>
                    <span className="px-2 py-0.5 rounded bg-stone-200 font-mono text-[10px]">Linux LKMs</span>
                  </div>
                  <p className="mt-2 text-stone-600 leading-relaxed">
                    A core kernel that dynamically loads and unloads modules (e.g. filesystem drivers, network device drivers) on-demand while executing them in kernel space.
                  </p>
                  <p className="mt-2 text-emerald-800 font-medium">✓ Extensibility without recompiling the core kernel.</p>
                  <p className="mt-1 text-stone-600">Note: Modularity is not a microkernel. Modules still run in Ring 0.</p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-stone-900 text-sm">Hybrid Kernel</h3>
                    <span className="px-2 py-0.5 rounded bg-stone-200 font-mono text-[10px]">Windows NT, macOS XNU</span>
                  </div>
                  <p className="mt-2 text-stone-600 leading-relaxed">
                    Combines microkernel modular abstraction with monolithic execution speed. Windows NT has an Executive layer and drivers in kernel mode, while macOS XNU combines Mach message-passing with BSD POSIX layers and I/O Kit.
                  </p>
                  <p className="mt-2 text-emerald-800 font-medium">✓ Balances performance, backward compatibility, and structured layers.</p>
                </div>
              </div>

              {/* Comprehensive Architecture Comparison Table */}
              <div className="mt-6 overflow-x-auto rounded-xl border border-stone-200 text-xs">
                <table className="w-full text-left">
                  <thead className="bg-stone-100 font-bold text-stone-700 border-b border-stone-200">
                    <tr>
                      <th className="p-3">Property</th>
                      <th className="p-3">Monolithic</th>
                      <th className="p-3">Microkernel</th>
                      <th className="p-3">Modular</th>
                      <th className="p-3">Hybrid</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Privileged Code</td>
                      <td className="p-3">All core services & drivers</td>
                      <td className="p-3">Minimal core (IPC, sched)</td>
                      <td className="p-3">Core + dynamic modules</td>
                      <td className="p-3">Varies (layered in Ring 0)</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Communication</td>
                      <td className="p-3">Direct C function calls</td>
                      <td className="p-3">IPC message passing</td>
                      <td className="p-3">Direct internal calls</td>
                      <td className="p-3">Mixed (IPC & direct)</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Fault Isolation</td>
                      <td className="p-3">Low inside kernel</td>
                      <td className="p-3">Very high between servers</td>
                      <td className="p-3">Low for loaded modules</td>
                      <td className="p-3">Moderate</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Primary Example</td>
                      <td className="p-3 font-mono font-bold">Linux</td>
                      <td className="p-3 font-mono font-bold">seL4, MINIX 3</td>
                      <td className="p-3 font-mono font-bold">Linux with LKMs</td>
                      <td className="p-3 font-mono font-bold">Windows NT, XNU</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. Comparing Linux, Windows, macOS, Android, and Embedded OS */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 6
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-medium">Industry Platforms</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                6. Comparing Linux, Windows, macOS, Android, and Embedded Systems
              </h2>

              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                An operating system's kernel is only one aspect of its identity. Its API surface, application sandbox, driver ecosystem, and operational workload define how it behaves in production.
              </p>

              <div className="mt-6 overflow-x-auto rounded-xl border border-stone-200 text-xs">
                <table className="w-full text-left">
                  <thead className="bg-stone-100 font-bold text-stone-700 border-b border-stone-200">
                    <tr>
                      <th className="p-3">Dimension</th>
                      <th className="p-3">Linux</th>
                      <th className="p-3">Windows</th>
                      <th className="p-3">macOS</th>
                      <th className="p-3">Android</th>
                      <th className="p-3">Embedded OS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Primary Domain</td>
                      <td className="p-3">Cloud, Servers, Supercomputers</td>
                      <td className="p-3">Enterprise Desktop & Servers</td>
                      <td className="p-3">Consumer Desktops & Laptops</td>
                      <td className="p-3">Mobile & Consumer Smart Devices</td>
                      <td className="p-3">Automotive, IoT, Industrial</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Kernel Family</td>
                      <td className="p-3">Monolithic (Modular)</td>
                      <td className="p-3">Windows NT (Hybrid)</td>
                      <td className="p-3">XNU (Mach + BSD)</td>
                      <td className="p-3">Modified Linux Kernel</td>
                      <td className="p-3">FreeRTOS, Zephyr, QNX</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Security Model</td>
                      <td className="p-3">POSIX UID/GID, AppArmor, SELinux</td>
                      <td className="p-3">ACLs, Security Tokens, Defender</td>
                      <td className="p-3">Sandboxing, SIP, Gatekeeper</td>
                      <td className="p-3">UID per App, ART, HAL, SELinux</td>
                      <td className="p-3">Static partitions, MPU bounds</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Customizability</td>
                      <td className="p-3">Total (Open source source-level)</td>
                      <td className="p-3">Group Policy & Registry config</td>
                      <td className="p-3">Curated Apple hardware stack</td>
                      <td className="p-3">AOSP vendor HAL layers</td>
                      <td className="p-3">Bespoke firmware builds</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 7. Operating System Design Trade-offs */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 7
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-medium">Architectural Decision-Making</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                7. Operating System Design Trade-offs & Systems Thinking
              </h2>

              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                Systems engineering is the science of evaluating multi-objective trade-offs. Improving one metric almost invariably degrades another.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
                  <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <Zap size={16} className="text-[#ea580c]" />
                    Throughput vs Latency
                  </h3>
                  <p className="mt-2 text-stone-600 leading-relaxed">
                    Batching storage or network writes amortizes syscall overhead and maximizes total throughput, but waiting to accumulate a batch increases latency for individual operations.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
                  <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <Lock size={16} className="text-[#ea580c]" />
                    Isolation vs Performance
                  </h3>
                  <p className="mt-2 text-stone-600 leading-relaxed">
                    Enforcing strict memory boundaries across separate address spaces requires TLB invalidation and context switches. Shared memory reduces IPC cost to zero, but eliminates protection.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
                  <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <Boxes size={16} className="text-[#ea580c]" />
                    Containers vs Virtual Machines
                  </h3>
                  <p className="mt-2 text-stone-600 leading-relaxed">
                    Containers share the host kernel via Linux namespaces and cgroups, providing sub-second startup and near-native performance. Virtual Machines virtualize entire hardware platforms, providing total hardware isolation at higher memory overhead.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
                  <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <Workflow size={16} className="text-[#ea580c]" />
                    The Systems-Thinking Framework
                  </h3>
                  <ul className="mt-2 space-y-1 text-stone-600">
                    <li>1. What are the dominant workloads? (I/O-bound vs CPU-bound)</li>
                    <li>2. Which resource is the bottleneck? (Memory, Bandwidth, IOPS)</li>
                    <li>3. What are the catastrophic failure modes?</li>
                    <li>4. What are the real-time deadline tolerances?</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: INTERACTIVE LINUX TERMINAL LAB (§8)                                */}
        {/* ========================================================================= */}
        {activeTab === "interactive-lab" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                    Section 8 · Lab 1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight mt-1">
                    Hands-On Linux Systems Exploration
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Execute real Linux diagnostic commands against our live simulated kernel environment. Inspect the kernel, hardware topology, virtual memory, process tables, and <code className="font-mono bg-stone-100 px-1 rounded">/proc</code> virtual filesystem.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleExecuteCommand("help")}
                    className="px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 text-xs font-bold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                  >
                    View Supported Commands
                  </button>
                  <button
                    onClick={() => setTerminalHistory([])}
                    className="px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-xs font-bold text-stone-600 hover:text-stone-900 transition cursor-pointer"
                  >
                    Clear Console
                  </button>
                </div>
              </div>

              {/* Quick Command Launcher Pills */}
              <div className="mb-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Quick Run Experiments:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "uname -a",
                    "cat /etc/os-release",
                    "lscpu",
                    "free -h",
                    "ps aux",
                    "top",
                    "pstree -p",
                    "cat /proc/meminfo",
                    "cat /proc/loadavg",
                    "cat /proc/uptime",
                    'python3 -c "while True: pass"',
                  ].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => handleExecuteCommand(cmd)}
                      className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-orange-100 hover:text-[#ea580c] border border-stone-200 text-stone-700 font-mono text-[11px] transition cursor-pointer"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulated Linux Terminal Screen */}
              <div className="rounded-2xl border border-stone-800 bg-[#121214] p-4 text-white font-mono text-xs shadow-xl">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 mb-3 text-[11px] text-stone-400">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-amber-500 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500 inline-block" />
                    <span className="ml-2 font-bold text-stone-300">prepspaces@ubuntu-kernel-node: ~</span>
                  </div>
                  <span>bash 5.2.21(1)-release</span>
                </div>

                {/* History Output Area */}
                <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                  {terminalHistory.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2 text-orange-400 font-bold">
                        <span className="text-emerald-400">prepspaces@kernel-lab:~$</span>
                        <span>{item.cmd}</span>
                      </div>
                      <pre className="text-stone-300 text-[11px] whitespace-pre-wrap leading-relaxed pl-2 border-l border-stone-800">
                        {item.output}
                      </pre>
                    </div>
                  ))}
                </div>

                {/* Command Input Prompt */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleExecuteCommand();
                  }}
                  className="mt-4 pt-3 border-t border-stone-800 flex items-center gap-2"
                >
                  <span className="text-emerald-400 font-bold shrink-0">prepspaces@kernel-lab:~$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Type Linux diagnostic command (e.g. uname -a, lscpu, free -h, ps aux)..."
                    className="flex-1 bg-transparent text-white focus:outline-hidden text-xs font-mono placeholder:text-stone-600"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1 rounded bg-[#ea580c] hover:bg-orange-600 text-white font-bold text-[11px] transition cursor-pointer"
                  >
                    Run
                  </button>
                </form>
              </div>

              {/* Lab Guided Experiments Breakdown */}
              <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-700">
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <p className="font-bold text-stone-900">Exp 1 & 2: Kernel & CPU</p>
                  <p className="mt-1 text-stone-600 leading-relaxed">
                    Run <code className="font-mono bg-stone-200 px-1 rounded">uname -a</code> and <code className="font-mono bg-stone-200 px-1 rounded">lscpu</code>. Note the CPU architecture (x86-64), logical core count (8), cache hierarchies (L1, L2, L3), and whether virtualization extensions are enabled.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <p className="font-bold text-stone-900">Exp 3: Memory & Caching</p>
                  <p className="mt-1 text-stone-600 leading-relaxed">
                    Run <code className="font-mono bg-stone-200 px-1 rounded">free -h</code>. Notice that Linux uses otherwise idle RAM for filesystem page buffers (<code className="font-mono">buff/cache</code>). Seeing high "used" RAM does not indicate a leak!
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <p className="font-bold text-stone-900">Exp 4 & 5: Process States & /proc</p>
                  <p className="mt-1 text-stone-600 leading-relaxed">
                    Inspect states in <code className="font-mono bg-stone-200 px-1 rounded">ps aux</code>: <strong>R</strong> (Running/Runnable), <strong>S</strong> (Interruptible sleep), <strong>D</strong> (Uninterruptible disk I/O sleep), <strong>Z</strong> (Zombie). Explore <code className="font-mono bg-stone-200 px-1 rounded">/proc/meminfo</code>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: LAB REPORT & COMPLETION CHECKLIST (§9)                             */}
        {/* ========================================================================= */}
        {activeTab === "checklist" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 9 · Laboratory Report
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight mt-1">
                  Lab 1 Completion Checklist & Report
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Track your laboratory observations and system inspections. Check each requirement as you confirm it on your machine or through the simulator.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-[11px] font-mono text-stone-400 uppercase tracking-wider">Progress</p>
                  <p className="text-lg font-black text-[#ea580c]">{completedChecklistCount} / 6 Complete</p>
                </div>
                <div className="w-16 h-2 rounded-full bg-stone-200 overflow-hidden">
                  <div
                    className="h-full bg-[#ea580c] transition-all duration-300"
                    style={{ width: `${(completedChecklistCount / 6) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Interactive Checklist Items */}
            <div className="mt-6 space-y-3">
              {[
                {
                  key: "osKernel",
                  title: "Recorded OS Name and Kernel Release Version",
                  desc: "Executed 'uname -a' and 'cat /etc/os-release'; confirmed Linux kernel release and distribution identification.",
                },
                {
                  key: "cpuArch",
                  title: "Identified CPU Architecture and Logical Processor Count",
                  desc: "Executed 'lscpu'; identified processor architecture (x86-64 or ARM), core count, and hyperthreading status.",
                },
                {
                  key: "memoryStats",
                  title: "Recorded Total, Available, and Cached Memory",
                  desc: "Executed 'free -h' and examined /proc/meminfo; identified MemTotal, MemAvailable, and page cache buffers.",
                },
                {
                  key: "processes",
                  title: "Identified Three Specific Processes and Their Purpose",
                  desc: "Examined 'ps aux' or 'top'; documented PID 1 (init/systemd), kernel threads (e.g. kthreadd), and user processes.",
                },
                {
                  key: "processState",
                  title: "Explained at Least One Observed Process State",
                  desc: "Documented the difference between R (Running/Runnable), S (Interruptible sleep), D (Uninterruptible sleep), or Z (Zombie).",
                },
                {
                  key: "userVsKernel",
                  title: "Articulated the Distinction Between User Space and Kernel Space",
                  desc: "Explained how hardware privilege rings (Ring 0 vs Ring 3) enforce memory isolation and system call gating.",
                },
              ].map((item) => {
                const isChecked = checklist[item.key];
                return (
                  <div
                    key={item.key}
                    onClick={() => toggleChecklist(item.key)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? "border-emerald-300 bg-emerald-50/50"
                        : "border-stone-200 bg-stone-50/50 hover:bg-stone-50"
                    }`}
                  >
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border mt-0.5 transition-colors ${
                        isChecked
                          ? "border-emerald-600 bg-emerald-600 text-white"
                          : "border-stone-300 bg-white"
                      }`}
                    >
                      {isChecked && <Check size={13} strokeWidth={3} />}
                    </div>
                    <div>
                      <h3 className={`text-xs sm:text-sm font-bold ${isChecked ? "text-emerald-950" : "text-stone-900"}`}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Copy Lab Template Report */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-stone-900">Formal Lab Report Markdown Template</h3>
                <button
                  onClick={() =>
                    copyCode(
                      `# Module 1 Systems Exploration Lab Report\n\n## 1. System Configuration\n- OS: Ubuntu 24.04 LTS\n- Kernel Version: 6.8.0-generic\n- CPU Architecture: x86-64 (8 logical cores)\n- Memory: 16 GB Total, 12 GB Available\n\n## 2. Key Observations\n- /proc and /sys are virtual filesystems exposing kernel state in real-time.\n- The idle loop task confirmed Linux scheduler preempts CPU-bound tasks.\n- Ring 0 and Ring 3 enforce hardware memory protection.\n\n## 3. Conclusion\nThe OS acts as an abstraction layer, resource manager, and control program.`,
                      "lab-template"
                    )
                  }
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 text-xs font-bold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                >
                  {copiedCodeId === "lab-template" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedCodeId === "lab-template" ? "Copied Report!" : "Copy Report Template"}</span>
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs text-stone-700 leading-relaxed">
                <p># Module 1 Systems Exploration Lab Report</p>
                <p className="mt-1">• System Configuration (Kernel, CPU, RAM, Storage)</p>
                <p>• Commands Executed (uname, lscpu, free, ps, /proc)</p>
                <p>• Answers to experiment questions (x86 vs ARM, process states)</p>
                <p>• Short conclusion explaining how the OS arbitrates resources.</p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: KNOWLEDGE ASSESSMENT QUIZ (§10)                                    */}
        {/* ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  Section 10 · University Knowledge Assessment
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight mt-1">
                  Module 1 Conceptual Mastery Quiz
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  8 in-depth questions testing your theoretical and practical systems architecture comprehension.
                </p>
              </div>

              <div className="flex items-center gap-3">
                {quizSubmitted ? (
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-orange-50 border border-orange-200">
                    <Award size={22} className="text-[#ea580c]" />
                    <div>
                      <p className="text-[11px] font-mono text-stone-500 uppercase">Final Score</p>
                      <p className="text-base font-extrabold text-[#ea580c]">
                        {calculateQuizScore()} / 8 Marks ({Math.round((calculateQuizScore() / 8) * 100)}%)
                      </p>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(quizAnswers).length < 8}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer ${
                      Object.keys(quizAnswers).length === 8
                        ? "bg-[#ea580c] text-white hover:bg-orange-600 shadow-orange-500/20"
                        : "bg-stone-200 text-stone-400 cursor-not-allowed"
                    }`}
                  >
                    Submit Answers ({Object.keys(quizAnswers).length}/8 Answered)
                  </button>
                )}
              </div>
            </div>

            {/* Quiz Questions List */}
            <div className="mt-6 space-y-6">
              {quizQuestions.map((q, idx) => {
                const selectedOption = quizAnswers[q.id];
                const isAnswered = selectedOption !== undefined;
                const isCorrect = selectedOption === q.correctIndex;

                return (
                  <div key={q.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                        <span className="font-mono text-[#ea580c] mr-2">Q{idx + 1}.</span>
                        {q.question}
                      </h3>
                      {quizSubmitted && (
                        <span
                          className={`shrink-0 px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider ${
                            isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                          }`}
                        >
                          {isCorrect ? "1 Mark (Correct)" : "0 Marks"}
                        </span>
                      )}
                    </div>

                    <div className="mt-3.5 space-y-2">
                      {q.options.map((option, optIdx) => {
                        const isThisSelected = selectedOption === optIdx;
                        let btnStyle = "border-stone-200 bg-white text-stone-700 hover:bg-stone-50";

                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                          } else if (isThisSelected && !isCorrect) {
                            btnStyle = "border-rose-400 bg-rose-50 text-rose-950 font-bold line-through";
                          } else {
                            btnStyle = "border-stone-200 bg-stone-100 text-stone-400 opacity-60";
                          }
                        } else if (isThisSelected) {
                          btnStyle = "border-orange-500 bg-orange-50 text-orange-950 font-bold";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => handleSelectQuizOption(q.id, optIdx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between gap-2 cursor-pointer ${btnStyle}`}
                          >
                            <span>
                              <span className="font-mono font-bold mr-2 text-stone-400">
                                {String.fromCharCode(65 + optIdx)}.
                              </span>
                              {option}
                            </span>
                            {quizSubmitted && optIdx === q.correctIndex && (
                              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-3 p-3 rounded-xl bg-stone-100 border border-stone-200/80 text-xs text-stone-700">
                        <p className="font-bold text-stone-900 mb-1">Architectural Explanation:</p>
                        <p className="leading-relaxed text-stone-600">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {quizSubmitted && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-stone-200 bg-white font-bold text-xs text-stone-700 hover:bg-stone-50 transition cursor-pointer"
                >
                  <RotateCcw size={15} />
                  <span>Retake Quiz</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 11: RECOMMENDED UNIVERSITY RESOURCES & NEXT MODULE PREVIEW        */}
        {/* ========================================================================= */}
        <section className="mt-8 rounded-3xl border border-[#e7e3da] bg-white/80 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
              Section 11
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-xs text-stone-500 font-medium">Curricular References</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
            Recommended University-Level Study Resources
          </h2>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700">
            <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
              <h3 className="font-bold text-stone-900 text-sm">MIT 6.1810 — Operating System Engineering</h3>
              <p className="mt-1 text-stone-600 leading-relaxed">
                Kernel implementation, system calls, interrupts, scheduling, and virtual memory. MIT utilizes xv6, a modern re-implementation of Dennis Ritchie's Unix Version 6 in ANSI C for RISC-V.
              </p>
              <a
                href="https://ocw.mit.edu/courses/6-1810-operating-system-engineering-fall-2023/"
                target="_blank"
                rel="noreferrer"
                className="mt-2.5 inline-flex items-center gap-1 font-bold text-[#ea580c] hover:underline"
              >
                <span>Explore MIT 6.1810 Course Materials</span>
                <ArrowRight size={13} />
              </a>
            </div>

            <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
              <h3 className="font-bold text-stone-900 text-sm">Operating Systems: Three Easy Pieces (OSTEP)</h3>
              <p className="mt-1 text-stone-600 leading-relaxed">
                By Remzi and Andrea Arpaci-Dusseau (University of Wisconsin–Madison). The seminal free computer science text covering the three core pillars: Virtualization, Concurrency, and Persistence.
              </p>
              <a
                href="https://pages.cs.wisc.edu/~remzi/OSTEP/"
                target="_blank"
                rel="noreferrer"
                className="mt-2.5 inline-flex items-center gap-1 font-bold text-[#ea580c] hover:underline"
              >
                <span>Read Free OSTEP Textbook</span>
                <ArrowRight size={13} />
              </a>
            </div>

            <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
              <h3 className="font-bold text-stone-900 text-sm">Official Linux Kernel Documentation</h3>
              <p className="mt-1 text-stone-600 leading-relaxed">
                In-depth technical guides for kernel subsystems, device drivers, locking mechanisms, memory models, and architecture-specific code maintained by kernel developers.
              </p>
              <a
                href="https://docs.kernel.org/"
                target="_blank"
                rel="noreferrer"
                className="mt-2.5 inline-flex items-center gap-1 font-bold text-[#ea580c] hover:underline"
              >
                <span>Explore Linux Kernel Docs</span>
                <ArrowRight size={13} />
              </a>
            </div>

            <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
              <h3 className="font-bold text-stone-900 text-sm">Android Open Source Project (AOSP)</h3>
              <p className="mt-1 text-stone-600 leading-relaxed">
                Examines how consumer mobile operating systems couple a modified Linux kernel with user-space Hardware Abstraction Layers (HALs), the Android Runtime (ART), and Binder IPC.
              </p>
              <a
                href="https://source.android.com/docs/core/architecture"
                target="_blank"
                rel="noreferrer"
                className="mt-2.5 inline-flex items-center gap-1 font-bold text-[#ea580c] hover:underline"
              >
                <span>Read Android Architecture</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Module 1 Completion Criteria Banner */}
          <div className="mt-6 p-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 text-xs text-emerald-950">
            <h4 className="font-bold flex items-center gap-1.5 text-sm text-emerald-900">
              <CheckCircle2 size={16} className="text-emerald-600" />
              Module 1 Completion Criteria
            </h4>
            <p className="mt-1 leading-relaxed">
              You are ready to advance to <strong>Module 2: Processes, Threads, and Concurrency</strong> when you can confidently explain the OS's three core roles, trace a system call lifecycle from user-space ABI registers to Ring 0, contrast monolithic vs microkernel architectures, explain why Linux is both monolithic and modular, and inspect live Linux systems using diagnostic utilities.
            </p>
          </div>
        </section>

        {/* Global Footer */}
        <footer className="mt-12 text-center text-xs text-stone-400 py-6">
          © {new Date().getFullYear()} PrepSpaces. Operating Systems Master Curriculum.
        </footer>
      </div>
    </div>
  );
}
