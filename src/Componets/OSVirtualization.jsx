import React, { useState, useMemo, useEffect } from "react";
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
  BarChart2,
  Clock,
  Timer,
  GitBranch,
  Split,
  Eye,
  Key,
  Grid,
  Database,
  Search,
  Maximize2,
  TrendingDown,
  TrendingUp,
  AlertOctagon,
  Gauge,
  FastForward,
  Pause,
  SkipForward,
  CornerDownRight,
  Container,
  Box,
  Monitor,
  Share2,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 12                                 */
/* Advanced Memory, Virtual Machines and Containers                           */
/* MMIO · Huge Pages · NUMA · Hypervisors · EPT · Namespaces · cgroup v2 · OOM */
/* -------------------------------------------------------------------------- */

export default function OSVirtualization() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(35);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-lab' | 'checklist' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // ---------------------------------------------------------------------------
  // Interactive Tool 1: Two-Stage Address Translation Simulator (GVA -> GPA -> HPA)
  // ---------------------------------------------------------------------------
  const [guestVirtualAddr, setGuestVirtualAddr] = useState(0x4010a0);
  const [guestPageSize, setGuestPageSize] = useState(4096); // 4096 (4KB) or 2097152 (2MB)
  const [eptEnabled, setEptEnabled] = useState(true);
  const [triggerVmExit, setTriggerVmExit] = useState(false);

  const translationMetrics = useMemo(() => {
    // Stage 1: Guest Virtual -> Guest Physical
    const gva = guestVirtualAddr;
    const gPageNum = Math.floor(gva / guestPageSize);
    const gOffset = gva % guestPageSize;
    // Emulated Guest PFN mapping
    const gPfn = (gPageNum * 3 + 7) % 1024;
    const gpa = gPfn * guestPageSize + gOffset;

    // Stage 2: Guest Physical -> Host Physical via EPT / NPT
    // Emulated Host PFN mapping
    const hPageSize = guestPageSize;
    const hPageNum = Math.floor(gpa / hPageSize);
    const hOffset = gpa % hPageSize;
    const hPfn = (hPageNum * 5 + 13) % 4096;
    const hpa = hPfn * hPageSize + hOffset;

    return {
      gvaHex: "0x" + gva.toString(16).padStart(8, "0"),
      gPageNum,
      gOffsetHex: "0x" + gOffset.toString(16),
      gPfn,
      gpaHex: "0x" + gpa.toString(16).padStart(8, "0"),
      hPfn,
      hpaHex: "0x" + hpa.toString(16).padStart(8, "0"),
      walkMemoryAccesses: eptEnabled ? 24 : 4, // 4-level guest * 4-level EPT = up to 24 DRAM references without TLB!
    };
  }, [guestVirtualAddr, guestPageSize, eptEnabled]);

  // ---------------------------------------------------------------------------
  // Interactive Tool 2: Container vs Host Memory & cgroup v2 OOM Visualizer
  // ---------------------------------------------------------------------------
  const [containerLimitMiB, setContainerLimitMiB] = useState(128); // memory.max
  const [containerUsageMiB, setContainerUsageMiB] = useState(96); // memory.current
  const hostTotalRAMGiB = 16;
  const hostUsedRAMGiB = 4.2;

  const containerCgroupState = useMemo(() => {
    const usage = containerUsageMiB;
    const max = containerLimitMiB;
    const high = Math.floor(max * 0.85); // memory.high throttling point
    const percentOfLimit = Math.min(100, Math.round((usage / max) * 100));

    let status = "NORMAL";
    let statusDesc = "Workload operating safely beneath cgroup limits.";
    let badgeColor = "bg-emerald-100 text-emerald-800 border-emerald-300";

    if (usage >= max) {
      status = "OOM_KILL";
      statusDesc = "CRITICAL: memory.max breached! Linux kernel cgroup OOM Killer terminates container process via SIGKILL.";
      badgeColor = "bg-rose-100 text-rose-800 border-rose-300 animate-pulse";
    } else if (usage >= high) {
      status = "HIGH_PRESSURE";
      statusDesc = "WARNING: memory.high exceeded! Kernel applies asynchronous reclaim and throttling delay to container threads.";
      badgeColor = "bg-amber-100 text-amber-800 border-amber-300";
    }

    // Host status: Host has plenty of RAM regardless of container state!
    const hostFreeRAMGiB = (hostTotalRAMGiB - hostUsedRAMGiB - (usage / 1024)).toFixed(2);

    return {
      usage,
      max,
      high,
      percentOfLimit,
      status,
      statusDesc,
      badgeColor,
      hostFreeRAMGiB,
      oomEvents: usage >= max ? 1 : 0,
    };
  }, [containerLimitMiB, containerUsageMiB]);

  // ---------------------------------------------------------------------------
  // Interactive Tool 3: Huge Pages & TLB Reach Calculator
  // ---------------------------------------------------------------------------
  const [workloadMemoryGiB, setWorkloadMemoryGiB] = useState(8); // in GiB
  const tlbEntryCapacity = 1024; // standard L2 TLB size

  const hugePageMetrics = useMemo(() => {
    const bytes = workloadMemoryGiB * 1024 * 1024 * 1024;

    // 4 KiB Pages
    const pages4K = bytes / 4096;
    const tlbReach4KMiB = (tlbEntryCapacity * 4096) / (1024 * 1024); // 4 MiB
    const tlbCoverage4KPercent = Math.min(100, ((tlbReach4KMiB * 1024 * 1024) / bytes) * 100).toFixed(2);

    // 2 MiB Huge Pages
    const pages2M = bytes / (2 * 1024 * 1024);
    const tlbReach2MMiB = (tlbEntryCapacity * 2 * 1024 * 1024) / (1024 * 1024); // 2048 MiB = 2 GiB
    const tlbCoverage2MPercent = Math.min(100, ((tlbReach2MMiB * 1024 * 1024) / bytes) * 100).toFixed(1);

    // 1 GiB Huge Pages
    const pages1G = bytes / (1024 * 1024 * 1024);
    const tlbReach1GGiB = (tlbEntryCapacity * 1024 * 1024 * 1024) / (1024 * 1024 * 1024); // 1024 GiB

    return {
      pages4K: pages4K.toLocaleString(),
      pages2M: pages2M.toLocaleString(),
      pages1G: pages1G.toLocaleString(),
      tlbReach4KMiB,
      tlbReach2MMiB,
      tlbReach1GGiB,
      tlbCoverage4KPercent,
      tlbCoverage2MPercent,
      pageTableOverhead4KMiB: ((pages4K * 8) / (1024 * 1024)).toFixed(1), // 8 bytes per PTE
      pageTableOverhead2MMiB: ((pages2M * 8) / (1024 * 1024)).toFixed(3),
    };
  }, [workloadMemoryGiB]);

  // ---------------------------------------------------------------------------
  // Interactive Tool 4: Linux Namespaces & Cgroups Sandbox
  // ---------------------------------------------------------------------------
  const [viewScope, setViewScope] = useState("container"); // 'host' | 'container'

  // ---------------------------------------------------------------------------
  // Interactive Tool 5: Terminal Simulation Sandbox
  // ---------------------------------------------------------------------------
  const [terminalCommand, setTerminalCommand] = useState(
    "docker run --rm -it --memory=128m python:3.12-slim python memory_pressure.py"
  );

  const terminalOutput = useMemo(() => {
    switch (terminalCommand) {
      case "docker run --rm -it --memory=128m python:3.12-slim python memory_pressure.py":
        return `Allocated approximately 4 MiB
Allocated approximately 8 MiB
Allocated approximately 12 MiB
Allocated approximately 16 MiB
Allocated approximately 20 MiB
Allocated approximately 24 MiB
Allocated approximately 28 MiB
Allocated approximately 32 MiB
Allocated approximately 36 MiB
Allocated approximately 40 MiB
Allocated approximately 44 MiB
Allocated approximately 48 MiB
Allocated approximately 52 MiB
Allocated approximately 56 MiB
Allocated approximately 60 MiB
Allocated approximately 64 MiB
Allocated approximately 68 MiB
Allocated approximately 72 MiB
Allocated approximately 76 MiB
Allocated approximately 80 MiB
Allocated approximately 84 MiB
Allocated approximately 88 MiB
Allocated approximately 92 MiB
Allocated approximately 96 MiB
Allocated approximately 100 MiB
Allocated approximately 104 MiB
Allocated approximately 108 MiB
Allocated approximately 112 MiB
Allocated approximately 116 MiB
Allocated approximately 120 MiB
Allocated approximately 124 MiB
Killed

Exit code: 137 (128 + 9 = SIGKILL by Linux kernel OOM Killer)
Note: Python did NOT catch MemoryError! The kernel abruptly sent SIGKILL to PID 1 inside the cgroup container.`;

      case "cat /sys/fs/cgroup/memory.events":
        return `low 0
high 14
max 8
oom 1
oom_kill 1
oom_group_kill 0

Analysis of cgroup v2 memory counters:
  - 'high': 14 events where memory.high caused throttling.
  - 'max': 8 events where hard allocation ceiling was reached.
  - 'oom': 1 invocation of cgroup out-of-memory handler.
  - 'oom_kill': 1 process in this cgroup terminated by SIGKILL.`;

      case "numactl --hardware && numastat":
        return `available: 2 nodes (0-1)
node 0 cpus: 0 1 2 3 4 5 6 7
node 0 size: 32080 MB
node 0 free: 14210 MB
node 1 cpus: 8 9 10 11 12 13 14 15
node 1 size: 32256 MB
node 1 free: 18450 MB
node distances:
node   0   1 
  0:  10  21 
  1:  21  10 

numastat:
                           node0           node1
numa_hit                89204120        91048120
numa_miss                      0               0
numa_foreign                   0               0
interleave_hit                 0               0
local_node              88421094        90841290
other_node                783026          206830

Note: Local node access cost = 10; Remote node access cost = 21 (over 2x latency penalty across UPI/QPI bus!).`;

      case "grep -E 'vmx|svm' /proc/cpuinfo && lscpu":
        return `flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf pni pclmulqdq dtes64 monitor ds_cpl vmx smx est tm2 ssse3 sdbg fma cx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm abm 3dnowprefetch cpuid_fault epb invpcid_single pti ssbd ibrs ibpb stibp tpr_shadow vnmi flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt intel_pt xsaveopt xsavec xgetbv1 xsaves dtherm ida arat pln pts md_clear flush_l1d

Hypervisor vendor: KVM
Virtualization type: full
Virtualization: VT-x
Hypervisor flag: vmx (Intel Hardware-Assisted Virtualization active)
Extended Page Tables (EPT): Supported & Active`;

      case "gcc -Wall -O2 mapped_file.c -o mapped_file && ./mapped_file":
        return `Operating Systems Lab

$ cat /proc/self/maps | grep sample.txt
7f9e8a200000-7f9e8a201000 r--p 00000000 08:01 1928410  /home/student/sample.txt

Mapping Analysis:
  - Address Range: 0x7f9e8a200000 - 0x7f9e8a201000 (Exactly 4096 bytes = 1 page)
  - Permissions: r--p (Read-only, Private Copy-On-Write)
  - Zero read() syscall overhead: File contents accessed directly in CPU registers via pointer dereference!`;

      default:
        return "Unknown command.";
    }
  }, [terminalCommand]);

  // Copy code helper
  const handleCopyCode = (id, codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // ---------------------------------------------------------------------------
  // Knowledge Check Quiz (6 Questions from Curriculum)
  // ---------------------------------------------------------------------------
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "What is the main architectural difference between a typical Linux container and a VM?",
      options: [
        "A container always has its own kernel",
        "A VM has a guest kernel; a container shares the host kernel",
        "A VM cannot have virtual memory",
        "Containers do not use RAM",
      ],
      correct: 1,
      explanation:
        "A virtual machine runs a complete guest operating system with its own private kernel over virtualized hardware. A container runs isolated processes that share the single host Linux kernel using namespaces and cgroups.",
    },
    {
      id: "q2",
      question: "What is the primary purpose of a Linux namespace?",
      options: [
        "Compress memory pages",
        "Isolate a process's view of system resources",
        "Replace the CPU scheduler",
        "Guarantee disk durability",
      ],
      correct: 1,
      explanation:
        "Namespaces restrict what a process can see and interact with (e.g. PID namespace isolates process trees, Mount isolates filesystems, Network isolates IP addresses and routing tables). Resource limits are handled separately by cgroups.",
    },
    {
      id: "q3",
      question: "Which cgroup v2 file reports the current memory charged to a cgroup?",
      options: ["memory.current", "memory.events", "cpu.max", "pids.max"],
      correct: 0,
      explanation:
        "In cgroup v2, 'memory.current' reports the total bytes of memory (anonymous, page cache, swap, kernel buffers) charged to that control group and its descendants. 'memory.max' defines the hard limit.",
    },
    {
      id: "q4",
      question: "Why can a container be OOM-killed while the host still has free memory?",
      options: [
        "Containers never use physical memory",
        "The container's effective memory limit can be reached",
        "The TLB is full",
        "A VM exit always kills a process",
      ],
      correct: 1,
      explanation:
        "A container is bound to its assigned cgroup resource limit (e.g. memory.max = 128MB). Even if the physical host has 16GB of unallocated RAM, reaching the cgroup limit triggers the kernel's cgroup-scoped OOM killer.",
    },
    {
      id: "q5",
      question: "What is one potential benefit of huge pages?",
      options: [
        "They eliminate all page faults",
        "They can increase TLB translation reach",
        "They eliminate NUMA",
        "They guarantee lower latency for every workload",
      ],
      correct: 1,
      explanation:
        "Using 2 MiB or 1 GiB huge pages allows a fixed-size hardware TLB (e.g., 1024 entries) to cover gigabytes of address space rather than only 4 MiB, drastically reducing expensive multi-level page table walks.",
    },
    {
      id: "q6",
      question: "What is the primary performance concern in NUMA systems?",
      options: [
        "Every memory access has identical latency",
        "Memory locality can affect access latency and bandwidth",
        "NUMA disables paging",
        "NUMA makes processes single-threaded",
      ],
      correct: 1,
      explanation:
        "In Non-Uniform Memory Access (NUMA) multi-socket systems, accessing memory attached to the local CPU socket is fast, whereas accessing remote node memory across the interconnect bus incurs 2x to 3x higher latency and reduced bandwidth.",
    },
  ];

  const handleSelectOption = (qId, optionIdx) => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  // ---------------------------------------------------------------------------
  // Engineering Mastery Checklist (8 items)
  // ---------------------------------------------------------------------------
  const [checklist, setChecklist] = useState({
    mmio_shared: true,
    hugepages_numa: true,
    hypervisor_ept: false,
    vm_vs_container: false,
    namespaces_cgroups: false,
    cgroup_oom_debug: false,
    virtualization_overhead: false,
    lab_reproduction: false,
  });

  const toggleChecklistItem = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Universal Module Navigation Bar */}
      <ModuleNav
        track="os"
        currentModuleId="virtualization"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="Nova OS Tutor"
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Module Header / Hero Banner */}
        <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-white border border-[#e7e3da] shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/60 via-amber-50/40 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-orange-100 text-orange-800 border border-orange-200">
                <BookOpen size={12} className="text-orange-600" />
                Module 12 · Advanced Systems Engineering
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                <Box size={12} className="text-stone-600" />
                Virtualization & Isolation
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                <Container size={12} className="text-emerald-600" />
                Linux cgroups & Namespaces
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#18181b]">
              Advanced Memory, Virtual Machines and Containers
            </h1>

            <p className="mt-3 text-base sm:text-lg text-stone-600 max-w-4xl leading-relaxed">
              Scale memory management from single operating systems to cloud virtualization and containerized workloads.
              Master memory-mapped I/O, huge pages, NUMA architectures, hypervisor two-stage address translation (EPT/NPT),
              Linux namespaces, cgroup v2 resource limits, and why containers OOM kill when physical host RAM is abundant.
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-6 pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Lessons Covered</div>
                <div className="text-base font-bold text-stone-900 mt-0.5">8 In-Depth Topics</div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Isolation Models</div>
                <div className="text-base font-bold text-orange-600 mt-0.5">VMs vs Containers</div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Interactive Engines</div>
                <div className="text-base font-bold text-stone-900 mt-0.5">5 Visual Simulators</div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Hands-on Lab</div>
                <div className="text-base font-bold text-stone-900 mt-0.5">Docker cgroup OOM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Switcher Navigation */}
        <div className="flex border-b border-[#e7e3da] mb-8 space-x-2 sm:space-x-4 overflow-x-auto">
          {[
            { id: "theory", label: "Curriculum & Lessons", icon: BookOpen },
            { id: "interactive-lab", label: "Interactive Simulators", icon: Sliders },
            { id: "checklist", label: "Mastery Checklist", icon: CheckCircle2, badge: `${completedChecklistCount}/8` },
            { id: "quiz", label: "Knowledge Check", icon: HelpCircle },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-3 px-4 font-medium text-sm border-b-2 transition-all whitespace-nowrap ${
                  isActive
                    ? "border-orange-600 text-orange-600 font-bold"
                    : "border-transparent text-stone-600 hover:text-stone-900 hover:border-stone-300"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`ml-1.5 px-2 py-0.5 text-xs rounded-full font-mono ${
                      isActive ? "bg-orange-100 text-orange-700" : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ===================================================================== */}
        {/* TAB 1: CURRICULUM & LESSONS                                           */}
        {/* ===================================================================== */}
        {activeTab === "theory" && (
          <div className="space-y-10">
            {/* Lesson 1: MMIO and Shared Memory */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  01
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Memory-Mapped I/O and Shared Memory
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    MMIO vs File Mappings · mmap Flags · Synchronization · SIGBUS Safety
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Memory-Mapped I/O (MMIO)</strong> allows the CPU to communicate with hardware device
                  registers using standard memory instructions (<code className="font-mono text-xs">MOV</code>, load,
                  store) rather than dedicated I/O port instructions (<code className="font-mono text-xs">IN</code>/
                  <code className="font-mono text-xs">OUT</code>). The OS and CPU configure these memory regions with
                  special caching attributes (e.g. <em>Uncacheable</em>) to ensure writes reach the device immediately
                  without CPU cache reordering.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-1.5">
                      <Share2 size={16} className="text-orange-600" />
                      MAP_SHARED
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Writes to memory are visible to other processes mapping the same object and are flushed back to the
                      underlying storage file. Requires process-shared mutexes or atomic operations for race-free updates.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-1.5">
                      <Lock size={16} className="text-blue-600" />
                      MAP_PRIVATE
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Creates a Copy-On-Write (COW) mapping. Reads access the underlying file directly; modifications
                      create a private anonymous frame invisible to other processes and never written back to disk.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-1.5">
                      <Binary size={16} className="text-emerald-600" />
                      MAP_ANONYMOUS
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Memory is not backed by any filesystem file (<code className="font-mono text-xs">fd = -1</code>).
                      Used by memory allocators (<code className="font-mono text-xs">malloc</code>) for heap regions and
                      zero-filled pages on demand.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#1e1e24] text-stone-200 font-mono text-xs border border-stone-800">
                  <div className="text-orange-400 font-bold mb-2">// C Program: Inspecting mmap() File Mapping</div>
                  <pre>{`#define _POSIX_C_SOURCE 200809L
#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/mman.h>
#include <sys/stat.h>
#include <unistd.h>

int main(void) {
    int fd = open("sample.txt", O_RDONLY);
    struct stat st;
    fstat(fd, &st);
    size_t length = (size_t)st.st_size;

    // Map file directly into process virtual address space
    void *mapping = mmap(NULL, length, PROT_READ, MAP_PRIVATE, fd, 0);
    write(STDOUT_FILENO, mapping, length); // Direct access without read() syscall!

    munmap(mapping, length);
    close(fd);
    return EXIT_SUCCESS;
}`}</pre>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900">
                  <strong>Engineering Caveat:</strong> If another process truncates a mapped file while your process is
                  accessing memory beyond the new end-of-file, the CPU hardware raises a <strong>SIGBUS (Bus Error)</strong> signal,
                  terminating the program unless trapped.
                </div>
              </div>
            </section>

            {/* Lesson 2: Huge Pages and NUMA */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  02
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Huge Pages, NUMA and Memory Locality
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    TLB Reach · 2MB / 1GB Pages · Non-Uniform Memory Access · First-Touch Allocation
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Modern x86-64 processors default to <strong>4 KiB pages</strong>. For massive in-memory databases
                  (PostgreSQL, Redis) and virtualization hypervisors, 4 KiB pages create a severe performance bottleneck:
                </p>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 my-4 text-xs sm:text-sm font-mono space-y-2">
                  <div className="font-bold text-stone-900 font-sans">The TLB Reach Mathematical Calculation:</div>
                  <div>• With 1,024 L2 TLB entries and 4 KiB pages: TLB Reach = 1,024 × 4 KiB = <strong>4 MiB</strong></div>
                  <div>• With 1,024 L2 TLB entries and 2 MiB pages: TLB Reach = 1,024 × 2 MiB = <strong>2 GiB (512x increase!)</strong></div>
                  <div>• With 1,024 L2 TLB entries and 1 GiB pages: TLB Reach = 1,024 × 1 GiB = <strong>1,024 GiB (1 TiB!)</strong></div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6">
                  NUMA Architecture & First-Touch Policy
                </h3>
                <p>
                  In multi-socket servers, memory is partitioned into <strong>NUMA (Non-Uniform Memory Access) nodes</strong>.
                  Each CPU socket has high-speed direct access to its local RAM channels, but accessing RAM attached to another
                  socket over the interconnect bus (Intel UPI / AMD Infinity Fabric) incurs a <strong>2x to 3x latency penalty</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm">
                    <div className="font-bold text-blue-900 mb-1">First-Touch Allocation Rule</div>
                    <p className="text-blue-800">
                      When <code className="font-mono">malloc()</code> is called, Linux allocates virtual address space only.
                      Physical memory is not mapped until the first thread touches (writes to) the page. By default, Linux allocates
                      the physical frame on the NUMA node where the faulting thread is currently scheduled!
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm">
                    <div className="font-bold text-stone-900 mb-1">NUMA Optimization Tools</div>
                    <p className="text-stone-700">
                      Use <code className="font-mono font-bold">numactl --cpunodebind=0 --membind=0 ./app</code> to pin threads and
                      memory allocations to the same socket, eliminating cross-socket interconnect thrashing.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Lesson 3: Hardware Virtualization and Hypervisors */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  03
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Hardware-Assisted Virtualization & Hypervisors
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Type 1 vs Type 2 · VM Exits · Extended Page Tables (EPT) · Nested Page Tables (NPT)
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Hardware virtualization (Intel VT-x / AMD-V) introduces new CPU operational modes:
                  <strong>VMX Root Operation</strong> (where the hypervisor executes with full hardware control) and
                  <strong>VMX Non-Root Operation</strong> (where the guest OS executes with sensitive instructions trapped).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-sm text-stone-900">Type 1 Hypervisor (Bare-Metal)</div>
                    <p className="text-xs text-stone-600 mt-1">
                      Runs directly on physical server hardware as the primary OS/kernel (e.g. VMware ESXi, KVM, Xen).
                      Provides lowest virtualization latency and enterprise multitenancy isolation.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-sm text-stone-900">Type 2 Hypervisor (Hosted)</div>
                    <p className="text-xs text-stone-600 mt-1">
                      Runs as an application inside a host operating system (e.g. VirtualBox, VMware Workstation).
                      Subject to host OS scheduling latency, buffer double-caching, and context-switch overhead.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6">
                  Two-Stage Address Translation (GVA → GPA → HPA)
                </h3>
                <p>
                  In a virtual machine, memory addresses must be translated twice:
                </p>
                <div className="p-5 rounded-2xl bg-[#1e1e24] text-stone-200 font-mono text-xs sm:text-sm space-y-2 border border-stone-800">
                  <div className="text-amber-300 font-bold">1. Guest Virtual Address (GVA) → Guest Physical Address (GPA)</div>
                  <div className="text-stone-400 pl-4">Managed by guest OS page tables referenced by Guest CR3 register.</div>
                  <div className="text-amber-300 font-bold">2. Guest Physical Address (GPA) → Host Physical Address (HPA)</div>
                  <div className="text-stone-400 pl-4">Managed by hardware Extended Page Tables (Intel EPT / AMD NPT) referenced by EPTP register.</div>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900">
                  <strong>The 2D Page Walk Overhead:</strong> Without hardware TLB caching, a single guest memory access can
                  require up to <strong>24 DRAM references</strong> ($4 \times 4$ intermediate page table lookups plus EPT steps)!
                  Hardware TLBs and EPT translation caches are critical for near-native VM performance.
                </div>
              </div>
            </section>

            {/* Lesson 4: Virtual Machines vs Containers */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  04
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Virtual Machines versus Containers
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Separate Kernel vs Shared Kernel · Isolation Boundaries · Overhead · Attack Surfaces
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  The fundamental architectural difference lies at the kernel boundary:
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="min-w-full text-xs sm:text-sm border border-stone-200 rounded-xl overflow-hidden">
                    <thead className="bg-stone-100 text-stone-900 font-bold font-mono">
                      <tr>
                        <th className="py-2.5 px-3 text-left border-b border-stone-200">Dimension</th>
                        <th className="py-2.5 px-3 text-left border-b border-stone-200">Virtual Machine (VM)</th>
                        <th className="py-2.5 px-3 text-left border-b border-stone-200">Container (Docker / OCI)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700">
                      <tr className="hover:bg-stone-50">
                        <td className="py-2.5 px-3 font-bold text-stone-900 font-mono">Kernel Model</td>
                        <td className="py-2.5 px-3">Separate guest OS kernel per instance</td>
                        <td className="py-2.5 px-3 font-semibold text-orange-600">Shared host Linux kernel</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="py-2.5 px-3 font-bold text-stone-900 font-mono">Isolation Mechanism</td>
                        <td className="py-2.5 px-3">Hardware virtualization (VT-x, EPT, hypervisor)</td>
                        <td className="py-2.5 px-3">Linux namespaces, cgroups v2, seccomp, AppArmor</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="py-2.5 px-3 font-bold text-stone-900 font-mono">Startup Time</td>
                        <td className="py-2.5 px-3">10–60 seconds (full OS boot)</td>
                        <td className="py-2.5 px-3 font-semibold text-emerald-600">50–500 milliseconds (direct process spawn)</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="py-2.5 px-3 font-bold text-stone-900 font-mono">Memory Overhead</td>
                        <td className="py-2.5 px-3">500MB – 2GB baseline for guest OS and buffers</td>
                        <td className="py-2.5 px-3">Few megabytes (only application processes)</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="py-2.5 px-3 font-bold text-stone-900 font-mono">Attack Surface</td>
                        <td className="py-2.5 px-3">Hypervisor trap interface (hard to escape)</td>
                        <td className="py-2.5 px-3 font-semibold text-rose-600">300+ Linux system calls on shared host kernel</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700">
                  <strong>Docker's Architectural Role:</strong> Docker is not a hypervisor. A container image is simply a
                  tarball of root filesystem layers with metadata. The Docker runtime uses standard Linux kernel primitives—
                  specifically <strong>namespaces</strong> and <strong>cgroups</strong>—to execute the process natively on
                  the host CPU.
                </div>
              </div>
            </section>

            {/* Lesson 5: Linux Namespaces and cgroups */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  05
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Linux Namespaces and Control Groups (cgroups v2)
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    7 Namespace Types · Resource Accounting · memory.max vs memory.high · cpu.max
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Containers rely on two completely independent Linux kernel subsystems:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-2">
                      <Eye size={16} className="text-orange-600" />
                      Namespaces: What a Process Can SEE
                    </h3>
                    <ul className="text-xs space-y-1 text-stone-600 list-disc list-inside">
                      <li><strong>PID:</strong> Container process thinks it is PID 1 (init); host sees real PID (e.g. 48212).</li>
                      <li><strong>Mount (mnt):</strong> Private root filesystem view isolated from host storage.</li>
                      <li><strong>Network (net):</strong> Dedicated virtual network interfaces (<code className="font-mono text-xs">eth0</code>), IP address, and iptables.</li>
                      <li><strong>UTS:</strong> Isolated hostname and domain name.</li>
                      <li><strong>IPC:</strong> Isolated System V IPC and POSIX message queues.</li>
                      <li><strong>User:</strong> Maps container root (UID 0) to unprivileged host user (UID 10001).</li>
                      <li><strong>Cgroup:</strong> Restricts view of cgroup hierarchy.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-2">
                      <Sliders size={16} className="text-blue-600" />
                      Cgroups v2: What a Process Can USE
                    </h3>
                    <ul className="text-xs space-y-1.5 text-stone-600 font-mono">
                      <li><strong className="text-stone-900 font-sans">memory.current:</strong> Current bytes charged to cgroup.</li>
                      <li><strong className="text-stone-900 font-sans">memory.max:</strong> Hard ceiling. Crossing triggers OOM kill!</li>
                      <li><strong className="text-stone-900 font-sans">memory.high:</strong> Throttle threshold for proactive reclaim.</li>
                      <li><strong className="text-stone-900 font-sans">memory.events:</strong> Counters for oom, oom_kill, max, high.</li>
                      <li><strong className="text-stone-900 font-sans">cpu.max:</strong> Bandwidth quota (e.g. 50000 100000 = 0.5 cores).</li>
                      <li><strong className="text-stone-900 font-sans">pids.max:</strong> Fork bomb protection (limits thread count).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Lesson 6: Memory Limits and OOM Observability */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  06
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Container Memory Limits, OOM Events & Observability
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    The Container OOM Mystery · Working Sets · PSI Metrics · Exit Code 137
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <h3 className="text-lg font-bold text-stone-900">
                  Why Does a Container OOM-Kill When the Host Has Free RAM?
                </h3>
                <p>
                  Consider a production server with <strong>64 GiB of physical RAM</strong> and 45 GiB free.
                  A container running a microservice is configured with <code className="font-mono text-xs">--memory=512m</code>.
                  If the application experiences a traffic spike and allocates 520 MiB:
                </p>
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-900 space-y-2">
                  <div>1. <strong>Cgroup Charging:</strong> Every 4KB physical page allocated by the container is charged to its cgroup counter (<code className="font-mono">memory.current</code>).</div>
                  <div>2. <strong>Hard Wall:</strong> When <code className="font-mono">memory.current &gt;= memory.max</code>, the kernel halts memory allocation inside that cgroup.</div>
                  <div>3. <strong>Immediate Reclaim Attempt:</strong> The kernel tries to reclaim clean page cache files inside the cgroup. If memory consists mostly of dirty heap (anonymous memory) and swap is full or disabled, reclaim yields 0 bytes.</div>
                  <div>4. <strong>Cgroup OOM Killer:</strong> The kernel invokes the OOM killer <em>strictly within the container's cgroup</em>, terminating the lead process with <code className="font-mono font-bold">SIGKILL (Exit Code 137)</code>! The physical host remains completely unaffected with 44+ GiB free RAM.</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-mono text-xs">
                  <div className="p-4 rounded-2xl bg-[#1e1e24] text-stone-200 border border-stone-800">
                    <div className="text-orange-400 font-bold mb-2">Diagnostic Command Matrix</div>
                    <div className="space-y-1">
                      <div><span className="text-emerald-400">$</span> docker stats <span className="text-stone-400"># Live CPU & memory %</span></div>
                      <div><span className="text-emerald-400">$</span> cat /sys/fs/cgroup/memory.events</div>
                      <div><span className="text-emerald-400">$</span> cat /proc/pressure/memory <span className="text-stone-400"># PSI stalls</span></div>
                      <div><span className="text-emerald-400">$</span> dmesg -T | grep -i oom <span className="text-stone-400"># Kernel logs</span></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-sans text-xs">
                    <div className="font-bold text-stone-900 mb-1">Crucial Accounting Distinction:</div>
                    <ul className="space-y-1 text-stone-600">
                      <li><strong>VSZ:</strong> Virtual address space reservation (can be 10+ GB with zero RAM impact).</li>
                      <li><strong>RSS:</strong> Resident Set Size (physical pages mapped in process page tables).</li>
                      <li><strong>memory.current:</strong> Includes RSS + Page Cache + Socket Buffers charged to cgroup!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Lesson 7: Overhead, Security and Trade-offs */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  07
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Overhead, Security Boundaries and Architectural Trade-offs
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Threat Models · VM Escapes vs Shared Kernel Exploits · Hardening Guidelines
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Security engineering requires understanding that containers and VMs have fundamentally different failure modes:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-2">
                      <Shield className="text-blue-600" size={16} />
                      VM Security Boundary
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      A compromised guest kernel still cannot directly execute host instructions. An attacker must exploit a
                      hypervisor bug (e.g. QEMU virtual device emulation flaw, rowhammer, or nested EPT vulnerability) to achieve
                      a <em>hypervisor escape</em>. Strongest isolation for untrusted multitenancy.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-2">
                      <ShieldCheck className="text-emerald-600" size={16} />
                      Container Security Hardening Checklist
                    </h3>
                    <ul className="text-xs space-y-1 text-stone-600 list-disc list-inside">
                      <li>Never run containers in <code className="font-mono text-xs">--privileged</code> mode.</li>
                      <li>Drop all capabilities and add only required: <code className="font-mono text-xs">--cap-drop=ALL</code>.</li>
                      <li>Run as non-root user via user namespaces (<code className="font-mono text-xs">USER 10001</code>).</li>
                      <li>Mount root filesystem read-only: <code className="font-mono text-xs">--read-only</code>.</li>
                      <li>Apply seccomp profiles to block unneeded system calls.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Lesson 8: Integrated Practical Lab */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                    08
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-stone-900">
                      Integrated Practical Lab: Memory Pressure & cgroup OOM
                    </h2>
                    <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                      memory_pressure.py · Constrained Container · OOM Kill Verification
                    </p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleCopyCode(
                      "python-lab-script",
                      `import time

# Allocate memory in 4 MiB increments and touch every page
chunks = []
chunk_size = 4 * 1024 * 1024  # 4 MiB

try:
    for i in range(64):  # Attempts up to 256 MiB
        chunks.append(bytearray(chunk_size))
        # Touch every 4 KiB page so physical memory is actually mapped
        for offset in range(0, chunk_size, 4096):
            chunks[-1][offset] = 1
        print(f"Allocated approximately {(i + 1) * 4} MiB")
        time.sleep(0.3)
    print("Allocation completed; holding memory for 20 seconds.")
    time.sleep(20)
except MemoryError:
    print("Python caught MemoryError.")
finally:
    print("Workload exiting.")`
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors"
                >
                  {copiedCodeId === "python-lab-script" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedCodeId === "python-lab-script" ? "Copied" : "Copy Lab Script"}</span>
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-[#1e1e24] text-stone-200 font-mono text-xs overflow-x-auto border border-stone-800">
                <pre>{`import time

chunks = []
chunk_size = 4 * 1024 * 1024  # 4 MiB

try:
    for i in range(64):  # Attempts to allocate up to 256 MiB
        chunks.append(bytearray(chunk_size))
        # Touch 4 KiB intervals so kernel maps physical pages
        for offset in range(0, chunk_size, 4096):
            chunks[-1][offset] = 1
        print(f"Allocated approximately {(i + 1) * 4} MiB")
        time.sleep(0.3)
    time.sleep(20)
except MemoryError:
    print("Python caught MemoryError.")
finally:
    print("Workload exiting.")`}</pre>
              </div>

              <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700">
                <div className="font-bold text-stone-900 mb-1">Execution Command:</div>
                <code className="font-mono text-xs block bg-stone-100 p-2 rounded-lg border border-stone-200 text-stone-900">
                  docker run --rm -it --memory=128m --memory-swap=192m -v "$PWD:/work" -w /work python:3.12-slim python memory_pressure.py
                </code>
              </div>
            </section>
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 2: INTERACTIVE SIMULATORS                                         */}
        {/* ===================================================================== */}
        {activeTab === "interactive-lab" && (
          <div className="space-y-10">
            {/* Interactive Engine 1: Two-Stage Address Translation (GVA -> GPA -> HPA) */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                    <Workflow className="text-orange-600" size={24} />
                    Two-Stage Hardware Address Translation (GVA → GPA → HPA)
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    Trace how guest virtual addresses are translated by guest page tables into guest physical addresses, then re-translated by Intel EPT / AMD NPT into host physical RAM.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setTriggerVmExit(!triggerVmExit)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-colors ${
                      triggerVmExit
                        ? "bg-rose-600 text-white border-rose-600"
                        : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                    }`}
                  >
                    {triggerVmExit ? "VM Exit Triggered!" : "Simulate VM Exit Trap"}
                  </button>
                </div>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-600 mb-1.5 uppercase">
                    Guest Virtual Address (GVA):
                  </label>
                  <input
                    type="number"
                    value={guestVirtualAddr}
                    onChange={(e) => setGuestVirtualAddr(Math.max(0, parseInt(e.target.value, 10) || 0))}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 font-mono text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <div className="text-[11px] font-mono text-stone-500 mt-1">
                    Hex: {translationMetrics.gvaHex}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-stone-600 mb-1.5 uppercase">
                    Page Size Mode:
                  </label>
                  <div className="grid grid-cols-2 gap-1 bg-stone-100 p-1 rounded-xl">
                    <button
                      onClick={() => setGuestPageSize(4096)}
                      className={`py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
                        guestPageSize === 4096 ? "bg-white text-orange-600 shadow-2xs" : "text-stone-600"
                      }`}
                    >
                      4 KiB Standard
                    </button>
                    <button
                      onClick={() => setGuestPageSize(2097152)}
                      className={`py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
                        guestPageSize === 2097152 ? "bg-white text-orange-600 shadow-2xs" : "text-stone-600"
                      }`}
                    >
                      2 MiB HugePage
                    </button>
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">
                    Huge page reduces nested EPT page walk depth.
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-stone-600 mb-1.5 uppercase">
                    Extended Page Tables (EPT):
                  </label>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="checkbox"
                      id="eptToggle"
                      checked={eptEnabled}
                      onChange={(e) => setEptEnabled(e.target.checked)}
                      className="w-4 h-4 accent-orange-600 rounded cursor-pointer"
                    />
                    <label htmlFor="eptToggle" className="text-xs font-medium text-stone-800 cursor-pointer">
                      Hardware-Assisted EPT / NPT Active
                    </label>
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1 font-mono">
                    Max DRAM refs: {translationMetrics.walkMemoryAccesses} per TLB miss
                  </div>
                </div>
              </div>

              {/* Translation Pipeline Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200">
                {/* Step 1: Guest Virtual */}
                <div className="p-4 rounded-xl bg-white border border-stone-200">
                  <div className="text-xs font-mono font-bold text-orange-600 uppercase mb-2">
                    Stage 1: Guest Address
                  </div>
                  <div className="space-y-1.5 text-xs font-mono text-stone-700">
                    <div>GVA: <strong className="text-stone-900">{translationMetrics.gvaHex}</strong></div>
                    <div>Page Number: {translationMetrics.gPageNum}</div>
                    <div>Page Offset: {translationMetrics.gOffsetHex}</div>
                    <div className="pt-2 border-t border-stone-100 text-[11px] text-stone-500 font-sans">
                      Translated by Guest OS CR3 Page Table
                    </div>
                  </div>
                </div>

                {/* Step 2: Guest Physical */}
                <div className="p-4 rounded-xl bg-white border border-orange-200 ring-1 ring-orange-100">
                  <div className="text-xs font-mono font-bold text-blue-600 uppercase mb-2">
                    Intermediate: Guest Physical (GPA)
                  </div>
                  <div className="space-y-1.5 text-xs font-mono text-stone-700">
                    <div>Guest PFN: {translationMetrics.gPfn}</div>
                    <div>GPA: <strong className="text-stone-900">{translationMetrics.gpaHex}</strong></div>
                    <div>Offset Preserved: {translationMetrics.gOffsetHex}</div>
                    <div className="pt-2 border-t border-stone-100 text-[11px] text-stone-500 font-sans">
                      Hardware intercepts via EPTP root pointer
                    </div>
                  </div>
                </div>

                {/* Step 3: Host Physical */}
                <div className="p-4 rounded-xl bg-white border border-stone-200">
                  <div className="text-xs font-mono font-bold text-emerald-600 uppercase mb-2">
                    Stage 2: Host Physical (HPA)
                  </div>
                  <div className="space-y-1.5 text-xs font-mono text-stone-700">
                    <div>Host PFN: {translationMetrics.hPfn}</div>
                    <div>HPA: <strong className="text-stone-900">{translationMetrics.hpaHex}</strong></div>
                    <div className="pt-2 border-t border-stone-100 text-[11px] text-emerald-700 font-sans font-medium">
                      ✓ Physical RAM frame accessed by CPU bus
                    </div>
                  </div>
                </div>
              </div>

              {triggerVmExit && (
                <div className="mt-4 p-4 rounded-2xl bg-rose-50 border border-rose-300 text-xs sm:text-sm text-rose-900 animate-pulse">
                  <strong>VM Exit Event Emulated:</strong> Guest executed a privileged instruction (<code className="font-mono">CPUID</code>, <code className="font-mono">INVD</code>, or accessed unmapped MMIO). CPU dropped from VMX Non-Root to VMX Root, saving guest state into the <strong>VMCS (Virtual Machine Control Structure)</strong>. Hypervisor handles the trap and executes <code className="font-mono">VMENTRY</code> to resume guest.
                </div>
              )}
            </section>

            {/* Interactive Engine 2: Container vs Host Memory & cgroup v2 OOM Visualizer */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-200">
                <Container className="text-orange-600" size={24} />
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Container vs Host Memory & cgroup v2 OOM Visualizer
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    Experience why a container triggers an OOM kill despite gigabytes of free RAM remaining on the physical host machine.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Sliders */}
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                      <span>Container Hard Limit (memory.max):</span>
                      <span className="text-orange-600">{containerLimitMiB} MiB</span>
                    </div>
                    <input
                      type="range"
                      min={64}
                      max={512}
                      step={32}
                      value={containerLimitMiB}
                      onChange={(e) => setContainerLimitMiB(parseInt(e.target.value, 10))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                    <div className="text-[11px] text-stone-500 mt-1">
                      Configured via Docker: <code className="font-mono">--memory={containerLimitMiB}m</code>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                      <span>Container Process Charged Memory (memory.current):</span>
                      <span className="text-blue-600">{containerUsageMiB} MiB</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={containerLimitMiB + 40}
                      step={4}
                      value={containerUsageMiB}
                      onChange={(e) => setContainerUsageMiB(parseInt(e.target.value, 10))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                    <div className="text-[11px] text-stone-500 mt-1">
                      Drag past {containerLimitMiB} MiB to trigger an Out-Of-Memory kill!
                    </div>
                  </div>

                  {/* Host Context Card */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono text-stone-700">
                    <div className="font-bold text-stone-900 font-sans mb-1">Physical Host Machine Status:</div>
                    <div>Total Physical RAM: 16.00 GiB</div>
                    <div>Host Other Allocations: {hostUsedRAMGiB} GiB</div>
                    <div className="text-emerald-700 font-bold">Host Free RAM Remaining: {containerCgroupState.hostFreeRAMGiB} GiB</div>
                  </div>
                </div>

                {/* Container Status Card */}
                <div className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${containerCgroupState.badgeColor}`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
                        Container cgroup v2 Status
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase">
                        {containerCgroupState.status}
                      </span>
                    </div>

                    <div className="text-3xl font-black font-mono text-stone-900">
                      {containerUsageMiB} / {containerLimitMiB} MiB
                    </div>
                    <div className="text-xs font-mono text-stone-600 mt-1">
                      {containerCgroupState.percentOfLimit}% of cgroup quota charged
                    </div>

                    <p className="text-xs sm:text-sm text-stone-800 mt-3 leading-relaxed">
                      {containerCgroupState.statusDesc}
                    </p>
                  </div>

                  {/* Memory Bar Visualizer */}
                  <div className="mt-4 pt-4 border-t border-black/10">
                    <div className="flex justify-between text-xs font-mono text-stone-700 mb-1">
                      <span>0 MiB</span>
                      <span>Throttling: {containerCgroupState.high} MiB</span>
                      <span>Cap: {containerLimitMiB} MiB</span>
                    </div>
                    <div className="w-full h-4 rounded-full bg-stone-200 overflow-hidden flex">
                      <div
                        style={{ width: `${Math.min(100, containerCgroupState.percentOfLimit)}%` }}
                        className={`transition-all duration-300 ${
                          containerCgroupState.status === "OOM_KILL"
                            ? "bg-rose-600"
                            : containerCgroupState.status === "HIGH_PRESSURE"
                            ? "bg-amber-500"
                            : "bg-blue-600"
                        }`}
                      />
                    </div>
                    <div className="text-[11px] font-mono text-stone-500 mt-2 flex justify-between">
                      <span>cgroup oom_kill counter: <strong>{containerCgroupState.oomEvents}</strong></span>
                      <span>Host free RAM: <strong>{containerCgroupState.hostFreeRAMGiB} GiB</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Engine 3: Huge Pages & TLB Reach Calculator */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-200">
                <Maximize2 className="text-orange-600" size={24} />
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Huge Pages & TLB Reach Calculator
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    Compare page table overhead and hardware TLB coverage for databases, hypervisors, and large memory workloads.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                    <span>Workload Memory Footprint:</span>
                    <span className="text-orange-600">{workloadMemoryGiB} GiB Working Set</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={64}
                    step={1}
                    value={workloadMemoryGiB}
                    onChange={(e) => setWorkloadMemoryGiB(parseInt(e.target.value, 10))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1">
                    <span>1 GiB</span>
                    <span>16 GiB</span>
                    <span>32 GiB</span>
                    <span>64 GiB (Production DB Buffer Pool)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* 4 KiB Card */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold text-stone-500 uppercase">
                        4 KiB Base Pages
                      </div>
                      <div className="text-2xl font-black font-mono text-stone-900 my-2">
                        {hugePageMetrics.pages4K} <span className="text-xs font-normal text-stone-500">pages</span>
                      </div>
                      <div className="text-xs text-stone-600 space-y-1">
                        <div>TLB Reach (1024 entries): <strong>{hugePageMetrics.tlbReach4KMiB} MiB</strong></div>
                        <div>TLB Coverage: <strong className="text-rose-600">{hugePageMetrics.tlbCoverage4KPercent}%</strong></div>
                        <div>Page Table Memory Cost: <strong>{hugePageMetrics.pageTableOverhead4KMiB} MiB</strong></div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] text-stone-500">
                      Severe TLB miss rate for large memory sets.
                    </div>
                  </div>

                  {/* 2 MiB Card */}
                  <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                        2 MiB Huge Pages (THP)
                      </div>
                      <div className="text-2xl font-black font-mono text-stone-900 my-2">
                        {hugePageMetrics.pages2M} <span className="text-xs font-normal text-stone-500">pages</span>
                      </div>
                      <div className="text-xs text-stone-700 space-y-1">
                        <div>TLB Reach: <strong>{hugePageMetrics.tlbReach2MMiB} MiB (2 GiB)</strong></div>
                        <div>TLB Coverage: <strong className="text-orange-700">{hugePageMetrics.tlbCoverage2MPercent}%</strong></div>
                        <div>Page Table Memory Cost: <strong>{hugePageMetrics.pageTableOverhead2MMiB} MiB</strong></div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-orange-200 text-[11px] text-orange-800 font-medium">
                      512x fewer page table entries! Sweet spot for VMs & DBs.
                    </div>
                  </div>

                  {/* 1 GiB Card */}
                  <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold text-emerald-600 uppercase">
                        1 GiB Gigantic Pages
                      </div>
                      <div className="text-2xl font-black font-mono text-stone-900 my-2">
                        {hugePageMetrics.pages1G} <span className="text-xs font-normal text-stone-500">pages</span>
                      </div>
                      <div className="text-xs text-stone-700 space-y-1">
                        <div>TLB Reach: <strong>{hugePageMetrics.tlbReach1GGiB} GiB (1 TiB)</strong></div>
                        <div>TLB Coverage: <strong className="text-emerald-700">100.0%</strong></div>
                        <div>Page Table Cost: <strong>&lt; 0.001 MiB</strong></div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-emerald-200 text-[11px] text-emerald-800 font-medium">
                      Zero TLB misses! Must be pre-allocated at boot time.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Engine 4: Terminal Simulation Sandbox */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <Terminal className="text-orange-600" size={22} />
                  <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                    Linux Virtualization & Container Shell Emulation
                  </h2>
                </div>
                <div className="text-xs font-mono text-stone-500">Interactive Execution</div>
              </div>

              {/* Command Presets */}
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "docker run --rm -it --memory=128m python:3.12-slim python memory_pressure.py",
                  "cat /sys/fs/cgroup/memory.events",
                  "numactl --hardware && numastat",
                  "grep -E 'vmx|svm' /proc/cpuinfo && lscpu",
                  "gcc -Wall -O2 mapped_file.c -o mapped_file && ./mapped_file",
                ].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => setTerminalCommand(cmd)}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-colors ${
                      terminalCommand === cmd
                        ? "bg-stone-900 text-orange-400 font-bold"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    $ {cmd.split(" ")[0]} {cmd.split(" ")[1] || ""}...
                  </button>
                ))}
              </div>

              <div className="rounded-2xl bg-[#1e1e24] text-stone-200 p-5 font-mono text-xs sm:text-sm overflow-x-auto border border-stone-800 shadow-inner">
                <div className="flex items-center gap-2 text-stone-400 pb-3 mb-3 border-b border-stone-800">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs text-stone-300">bash — root@production-node: ~</span>
                </div>
                <div className="text-emerald-400 font-bold mb-2">$ {terminalCommand}</div>
                <pre className="text-stone-300 leading-relaxed whitespace-pre-wrap">{terminalOutput}</pre>
              </div>
            </section>
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 3: MASTERY CHECKLIST                                              */}
        {/* ===================================================================== */}
        {activeTab === "checklist" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-600" size={24} />
                  Module 12 Competency & Mastery Checklist
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Verify your engineering skills across advanced memory, virtualization hypervisors, and container isolation.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-stone-700">
                  {completedChecklistCount} / 8 Completed
                </span>
                <div className="w-32 h-2.5 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
                  <div
                    className="h-full bg-emerald-500 transition-all duration-300"
                    style={{ width: `${(completedChecklistCount / 8) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: "mmio_shared",
                  title: "MMIO & Memory Mapping Semantics",
                  desc: "Explain the difference between device register MMIO, MAP_SHARED file writebacks, and MAP_PRIVATE copy-on-write mappings.",
                },
                {
                  id: "hugepages_numa",
                  title: "Huge Pages & NUMA Memory Locality",
                  desc: "Calculate hardware TLB reach for 4K vs 2M pages and explain first-touch allocation across multi-socket NUMA nodes.",
                },
                {
                  id: "hypervisor_ept",
                  title: "Two-Stage Address Translation (EPT/NPT)",
                  desc: "Trace Guest Virtual Address to Guest Physical Address to Host Physical Address and quantify nested page table walk overhead.",
                },
                {
                  id: "vm_vs_container",
                  title: "VM vs Container Architectural Boundaries",
                  desc: "Compare separate guest kernel overhead against shared-kernel Linux process isolation across startup, RAM, and attack surfaces.",
                },
                {
                  id: "namespaces_cgroups",
                  title: "Linux Namespaces vs cgroups v2",
                  desc: "Distinguish what a process can see (7 namespace types) from what a process can use (cgroup resource controllers).",
                },
                {
                  id: "cgroup_oom_debug",
                  title: "Container OOM Kill Diagnostics",
                  desc: "Explain why a container process is terminated by SIGKILL (Exit 137) when memory.max is reached despite abundant host RAM.",
                },
                {
                  id: "virtualization_overhead",
                  title: "Virtualization Overhead & Security Hardening",
                  desc: "Identify VM exit triggers, device emulation costs, and apply container hardening (non-root, read-only root, cap-drop).",
                },
                {
                  id: "lab_reproduction",
                  title: "Evidence-Based Memory Pressure Reproduction",
                  desc: "Run a constrained container workload, monitor memory.events, and correlate exit statuses with kernel dmesg logs.",
                },
              ].map((item) => {
                const isChecked = checklist[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleChecklistItem(item.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? "bg-emerald-50/60 border-emerald-300 ring-1 ring-emerald-200"
                        : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                    }`}
                  >
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                        isChecked ? "bg-emerald-600 text-white" : "border border-stone-300 bg-white"
                      }`}
                    >
                      {isChecked && <Check size={14} />}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-stone-900">{item.title}</div>
                      <div className="text-xs text-stone-600 mt-1 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ===================================================================== */}
        {/* TAB 4: KNOWLEDGE CHECK QUIZ                                           */}
        {/* ===================================================================== */}
        {activeTab === "quiz" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
                  <HelpCircle className="text-orange-600" size={24} />
                  Module 12 Knowledge Check
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Official evaluation covering virtualization, containers, cgroups, namespaces, and memory architecture.
                </p>
              </div>

              {showQuizResults ? (
                <div className="flex items-center gap-3">
                  <div className="text-sm font-mono font-bold text-stone-800">
                    Score:{" "}
                    <strong
                      className={
                        calculateScore() >= 5
                          ? "text-emerald-600"
                          : calculateScore() >= 3
                          ? "text-amber-600"
                          : "text-rose-600"
                      }
                    >
                      {calculateScore()} / {quizQuestions.length}
                    </strong>
                  </div>
                  <button
                    onClick={() => {
                      setQuizAnswers({});
                      setShowQuizResults(false);
                    }}
                    className="px-3.5 py-1.5 text-xs font-mono font-bold rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 transition-colors"
                  >
                    Retake Quiz
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowQuizResults(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className="px-4 py-2 rounded-xl bg-orange-600 text-white font-mono text-xs font-bold hover:bg-orange-700 disabled:opacity-40 transition-colors shadow-xs"
                >
                  Submit & Check Answers ({Object.keys(quizAnswers).length}/{quizQuestions.length})
                </button>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const selectedOption = quizAnswers[q.id];
                const isSubmitted = showQuizResults;
                const isCorrect = selectedOption === q.correct;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border transition-all ${
                      isSubmitted
                        ? isCorrect
                          ? "bg-emerald-50/50 border-emerald-200"
                          : "bg-rose-50/50 border-rose-200"
                        : "bg-stone-50 border-stone-200"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-sm sm:text-base font-bold text-stone-900">
                        {idx + 1}. {q.question}
                      </h3>
                      {isSubmitted && (
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase shrink-0 ${
                            isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                          }`}
                        >
                          {isCorrect ? "Correct ✓" : "Incorrect ✗"}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 mt-3">
                      {q.options.map((option, optIdx) => {
                        const isChosen = selectedOption === optIdx;
                        let optionStyle =
                          "bg-white border-stone-200 hover:border-stone-300 text-stone-800";

                        if (isSubmitted) {
                          if (optIdx === q.correct) {
                            optionStyle = "bg-emerald-100/80 border-emerald-400 font-bold text-emerald-900";
                          } else if (isChosen && !isCorrect) {
                            optionStyle = "bg-rose-100/80 border-rose-400 text-rose-900";
                          } else {
                            optionStyle = "bg-white/60 border-stone-200 text-stone-500 opacity-60";
                          }
                        } else if (isChosen) {
                          optionStyle = "bg-orange-50 border-orange-500 ring-2 ring-orange-200 text-orange-900 font-medium";
                        }

                        return (
                          <div
                            key={optIdx}
                            onClick={() => !isSubmitted && handleSelectOption(q.id, optIdx)}
                            className={`p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between ${optionStyle}`}
                          >
                            <span>{option}</span>
                            {isSubmitted && optIdx === q.correct && (
                              <CheckCircle2 size={16} className="text-emerald-700 shrink-0 ml-2" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {isSubmitted && (
                      <div className="mt-4 p-3 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed">
                        <strong className="text-stone-900">Explanation: </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-12 pt-6 border-t border-[#e7e3da] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/os/demand-paging")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 font-medium text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 11 (Demand Paging & Page Replacement)</span>
          </button>

          <button
            onClick={() => navigate("/learning/os/filesystems")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-sm transition-colors shadow-xs"
          >
            <span>Next: Module 13 (File Systems & I/O)</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        title="Nova OS Intelligence: Virtualization & Containers"
        defaultMessage="Hello! Ask me any question about MMIO, huge pages, NUMA, EPT two-stage translation, Linux namespaces, or cgroup v2 memory limits!"
      />
    </div>
  );
}
