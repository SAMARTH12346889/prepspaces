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
  Save,
  Radio,
  ZapOff,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 14                                 */
/* Storage Architecture, I/O Scheduling and Performance                       */
/* HDDs · Flash SSDs · NVMe · Little's Law · Schedulers · DMA · io_uring      */
/* -------------------------------------------------------------------------- */

export default function OSStorage() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(37);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-lab' | 'checklist' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // ---------------------------------------------------------------------------
  // Interactive Tool 1: Storage Medium Latency & Request Tracer
  // ---------------------------------------------------------------------------
  const [storageMedium, setStorageMedium] = useState("nvme"); // 'hdd' | 'sata' | 'nvme'
  const [accessPattern, setAccessPattern] = useState("random"); // 'random' | 'sequential'

  const storagePhysics = useMemo(() => {
    if (storageMedium === "hdd") {
      const isRand = accessPattern === "random";
      const seekTime = isRand ? 8.5 : 0.8; // ms
      const rotLatency = isRand ? 4.16 : 0.2; // 7200 RPM = 4.16ms avg
      const transferTime = 0.05; // ms for 4KB
      const controllerOverhead = 0.15; // ms
      const totalLatency = seekTime + rotLatency + transferTime + controllerOverhead;
      const iops = Math.round(1000 / totalLatency);
      const throughputMB = isRand ? ((iops * 4) / 1024).toFixed(1) : "210.0";

      return {
        name: "7200 RPM Enterprise HDD",
        interface: "SATA 6 Gbps (Mechanical Platter & Actuator)",
        seekTime: `${seekTime.toFixed(1)} ms`,
        rotLatency: `${rotLatency.toFixed(2)} ms`,
        transferTime: `${transferTime.toFixed(2)} ms`,
        totalLatencyMs: totalLatency.toFixed(2),
        totalLatencyUs: (totalLatency * 1000).toFixed(0),
        iops: iops.toLocaleString(),
        throughputMB: `${throughputMB} MB/s`,
        bottleneck: isRand ? "Mechanical Head Seek & Platter Rotation" : "Magnetic Density Bandwidth",
        badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      };
    } else if (storageMedium === "sata") {
      const isRand = accessPattern === "random";
      const controllerOverhead = 0.04; // ms
      const nandAccess = isRand ? 0.06 : 0.015; // ms (60 us)
      const busTransfer = 0.008; // ms
      const totalLatency = controllerOverhead + nandAccess + busTransfer;
      const iops = Math.round(1000 / totalLatency);
      const throughputMB = isRand ? ((iops * 4) / 1024).toFixed(1) : "540.0";

      return {
        name: "SATA III SSD (AHCI Controller)",
        interface: "SATA 6 Gbps (Single Queue, Depth 32)",
        seekTime: "0.0 ms (Solid-State Flash)",
        rotLatency: "0.0 ms (No Platters)",
        transferTime: `${(nandAccess + busTransfer).toFixed(3)} ms`,
        totalLatencyMs: totalLatency.toFixed(3),
        totalLatencyUs: (totalLatency * 1000).toFixed(0),
        iops: iops.toLocaleString(),
        throughputMB: `${throughputMB} MB/s`,
        bottleneck: "Legacy AHCI Controller & SATA 6 Gbps Bus Saturation",
        badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      };
    } else {
      // NVMe PCIe 4.0
      const isRand = accessPattern === "random";
      const controllerOverhead = 0.003; // 3 us
      const nandAccess = isRand ? 0.012 : 0.004; // 12 us
      const pcieTransfer = 0.001; // 1 us
      const totalLatency = controllerOverhead + nandAccess + pcieTransfer;
      const iops = Math.round(1000 / totalLatency);
      const throughputMB = isRand ? ((iops * 4) / 1024).toFixed(0) : "7450";

      return {
        name: "NVMe M.2 SSD (PCIe 4.0 x4)",
        interface: "PCIe 4.0 (Up to 64,000 Queues, Depth 64k each)",
        seekTime: "0.0 ms (Pure Flash)",
        rotLatency: "0.0 ms (Parallel Channels)",
        transferTime: `${(nandAccess + pcieTransfer).toFixed(3)} ms`,
        totalLatencyMs: totalLatency.toFixed(3),
        totalLatencyUs: (totalLatency * 1000).toFixed(0),
        iops: iops.toLocaleString(),
        throughputMB: `${throughputMB} MB/s`,
        bottleneck: "NAND Flash Cell Physics & Thermal Throttling",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      };
    }
  }, [storageMedium, accessPattern]);

  // ---------------------------------------------------------------------------
  // Interactive Tool 2: Little's Law & Queue Depth Latency Calculator
  // ---------------------------------------------------------------------------
  const [arrivalRateLambda, setArrivalRateLambda] = useState(20000); // IOPS
  const [configuredQueueDepth, setConfiguredQueueDepth] = useState(16); // L

  const littlesLawMetrics = useMemo(() => {
    // Little's Law: L = lambda * W  =>  W = L / lambda
    const L = configuredQueueDepth;
    const lambda = arrivalRateLambda;
    const avgTimeInSystemSec = L / lambda;
    const avgTimeInSystemMs = (avgTimeInSystemSec * 1000).toFixed(2);
    const avgTimeInSystemUs = (avgTimeInSystemSec * 1000000).toFixed(0);

    // Queueing delay estimate
    const deviceProcessingUs = 35; // base NVMe service time
    const totalLatencyUs = Math.max(deviceProcessingUs, parseFloat(avgTimeInSystemUs));
    const queueingDelayUs = Math.max(0, totalLatencyUs - deviceProcessingUs);

    return {
      L,
      lambda: lambda.toLocaleString(),
      avgTimeInSystemMs,
      avgTimeInSystemUs,
      totalLatencyUs,
      queueingDelayUs,
      isCongested: queueingDelayUs > 100,
    };
  }, [arrivalRateLambda, configuredQueueDepth]);

  // ---------------------------------------------------------------------------
  // Interactive Tool 3: Write Amplification & FTL Garbage Collection
  // ---------------------------------------------------------------------------
  const [overProvisioningPercent, setOverProvisioningPercent] = useState(14); // 7%, 14%, 28%
  const [randomWritePercent, setRandomWritePercent] = useState(70); // 0% (sequential) to 100% (pure random)

  const writeAmplificationMetrics = useMemo(() => {
    // Model: WAF is heavily increased by random small writes and alleviated by overprovisioning
    const opFactor = (100 - overProvisioningPercent) / 100;
    const randPenalty = (randomWritePercent / 100) * 1.8;
    const waf = Math.max(1.05, (1.0 + (1 / (2 * (overProvisioningPercent / 100))) * (randomWritePercent / 100) * 0.4)).toFixed(2);
    const hostGiB = 100;
    const physicalGiB = (hostGiB * parseFloat(waf)).toFixed(1);

    return {
      waf,
      hostGiB,
      physicalGiB,
      wastedFlashWear: ((parseFloat(waf) - 1.0) * 100).toFixed(0),
      ftlState: parseFloat(waf) > 2.0 ? "Heavy Garbage Collection Friction" : "Optimal Flash Compaction",
      badgeColor: parseFloat(waf) > 2.0 ? "bg-rose-100 text-rose-800 border-rose-300" : "bg-emerald-100 text-emerald-800 border-emerald-300",
    };
  }, [overProvisioningPercent, randomWritePercent]);

  // ---------------------------------------------------------------------------
  // Interactive Tool 4: I/O Programming Model Comparator (Blocking vs Async io_uring)
  // ---------------------------------------------------------------------------
  const [ioModel, setIoModel] = useState("io_uring"); // 'blocking' | 'epoll' | 'io_uring'

  // ---------------------------------------------------------------------------
  // Interactive Tool 5: Terminal Simulation Sandbox
  // ---------------------------------------------------------------------------
  const [terminalCommand, setTerminalCommand] = useState(
    "python3 io_benchmark.py --size-mib 64 --chunk-kib 256"
  );

  const terminalOutput = useMemo(() => {
    switch (terminalCommand) {
      case "python3 io_benchmark.py --size-mib 64 --chunk-kib 256":
        return `======================================================================
PREPSPACES STORAGE LAB: I/O THROUGHPUT & LATENCY BENCHMARK
Python 3.11.4 | Target: /tmp/storage_bench.bin | Size: 64 MiB
======================================================================

Benchmark: Sequential Write (Chunk: 256 KiB, Buffered, End fsync)
  Bytes Transferred: 67,108,864 bytes
  Elapsed Time     : 0.0812 s
  Throughput       : 788.18 MiB/s
  Operations       : 256 calls
  Mean Latency     : 0.142 ms
  p50 Latency      : 0.098 ms
  p95 Latency      : 0.284 ms
  p99 Latency      : 0.612 ms

Benchmark: Sequential Read (Chunk: 256 KiB, Page Cache Warm)
  Bytes Transferred: 67,108,864 bytes
  Elapsed Time     : 0.0142 s
  Throughput       : 4507.04 MiB/s  <-- SERVED DIRECTLY FROM RAM PAGE CACHE!
  Operations       : 256 calls
  Mean Latency     : 0.048 ms
  p50 Latency      : 0.038 ms
  p95 Latency      : 0.072 ms

Observation:
  - Buffered write throughput is high because writes target the Linux Page Cache.
  - Read throughput (4.5 GiB/s) demonstrates RAM speed rather than storage media speed!`;

      case "python3 io_benchmark.py --size-mib 16 --chunk-kib 256 --sync-each":
        return `======================================================================
Benchmark: Synchronous Write (Chunk: 256 KiB, fsync AFTER EVERY CHUNK)
======================================================================
  Bytes Transferred: 16,777,216 bytes
  Elapsed Time     : 1.4820 s
  Throughput       : 10.79 MiB/s  <-- MASSIVE THROUGHPUT COLLAPSE!
  Operations       : 64 calls
  Mean Latency     : 23.156 ms   <-- Each call blocks on physical NVMe flush!
  p50 Latency      : 21.410 ms
  p95 Latency      : 32.840 ms
  p99 Latency      : 38.102 ms

Key Takeaway:
  - Forcing durability per chunk via fsync() collapsed throughput from 788 MiB/s to 10.8 MiB/s.
  - Latency soared from 0.14 ms to 23.1 ms due to storage controller cache flushes and barriers!`;

      case "iostat -xz 1 3":
        return `Linux 6.8.0-45-generic (storage-node) 	10/15/2026 	_x86_64_	(16 CPU)

avg-cpu:  %user   %system   %iowait  %steal   %idle
           2.41      4.12      8.42    0.00   85.05

Device            r/s     w/s     rkB/s     wkB/s   rrqm/s   wrqm/s  %rrqm  %wrqm r_await w_await aqu-sz rareq-sz wareq-sz  %util
nvme0n1         842.0  4210.0   34210.0  172400.0      0.0    142.0   0.00   3.26    0.14    0.48   2.14    40.63    40.95  34.20
sda               4.0    12.0     128.0     240.0      0.0      2.0   0.00  14.28   12.40   24.80   0.40    32.00    20.00   6.80

Interpretation:
  - nvme0n1 handles 5052 IOPS with sub-millisecond wait (r_await: 0.14ms, w_await: 0.48ms).
  - sda (rotational HDD) wait time is 12-24ms per request due to mechanical head seek!`;

      case "lsblk -o NAME,TYPE,SIZE,ROTA,TRAN,MOUNTPOINTS":
        return `NAME        TYPE   SIZE ROTA TRAN   MOUNTPOINTS
sda         disk   2.0T    1 sata   /mnt/backup-hdd  <-- ROTA=1 (Rotational Platter HDD)
├─sda1      part   2.0T    1 sata   /mnt/backup-hdd
nvme0n1     disk 931.5G    0 nvme                    <-- ROTA=0 (Solid-State NVMe SSD)
├─nvme0n1p1 part   512M    0 nvme   /boot/efi
├─nvme0n1p2 part  32.0G    0 nvme   [SWAP]
└─nvme0n1p3 part   899G    0 nvme   /`;

      case "cat /sys/block/nvme0n1/queue/scheduler":
        return `[none] mq-deadline

Explanation:
  - '[none]' is selected: NVMe hardware handles multi-queue scheduling directly.
  - Bypass traditional OS block elevator to eliminate CPU lock contention across 16 cores.`;

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
      question: "What is the main reason random HDD access often has higher latency than sequential access?",
      options: [
        "HDDs do not use controllers",
        "Mechanical seek and rotational delays",
        "NVMe queue depth",
        "The page cache is disabled",
      ],
      correct: 1,
      explanation:
        "HDDs rely on mechanical parts. In random access, the actuator arm must physically reposition the head over different tracks (seek time, ~4-10ms) and wait for the platter to rotate the target sector under the head (rotational latency, ~4ms). Sequential access eliminates repeated mechanical repositioning.",
    },
    {
      id: "q2",
      question: "What does throughput measure?",
      options: [
        "Time for one request",
        "Amount of data transferred per unit time",
        "Number of inodes",
        "Only the p99 latency",
      ],
      correct: 1,
      explanation:
        "Throughput measures data transfer rate over time (typically MiB/s or GiB/s). Latency measures individual request completion time, and IOPS measures operations per second.",
    },
    {
      id: "q3",
      question: "What is a primary role of DMA (Direct Memory Access)?",
      options: [
        "Translate filenames to inodes",
        "Transfer data between a device and memory with less CPU copying",
        "Guarantee filesystem durability",
        "Replace all device drivers",
      ],
      correct: 1,
      explanation:
        "DMA allows hardware device controllers to transfer data blocks directly to and from host physical RAM via bus mastering without the CPU having to copy every byte through registers in a tight software loop.",
    },
    {
      id: "q4",
      question: "Why might increasing queue depth improve throughput but increase latency?",
      options: [
        "More outstanding work can keep a device busy but also add queueing delay",
        "It disables caching",
        "It forces all I/O to become sequential",
        "It removes controller overhead completely",
      ],
      correct: 0,
      explanation:
        "Keeping multiple requests queued allows parallel storage controllers (especially NVMe) to saturate hardware channels and maximize throughput. However, under Little's Law (L = lambda * W), a deeper queue means each individual request waits longer behind earlier requests in the queue, increasing average and tail latency.",
    },
    {
      id: "q5",
      question: "What does write amplification describe in solid-state flash storage?",
      options: [
        "The ratio of physical writes to host-requested writes",
        "The ratio of RAM to CPU cache",
        "The size of an inode",
        "The number of mount points",
      ],
      correct: 0,
      explanation:
        "Because NAND flash cannot overwrite existing pages without erasing an entire block (e.g. 2–4 MB), the Flash Translation Layer (FTL) must copy valid pages elsewhere before erasing. Write Amplification Factor (WAF = Physical Bytes Written / Host Bytes Written) quantifies this internal rewriting penalty.",
    },
    {
      id: "q6",
      question: "Why can repeated file reads give misleading storage benchmarks?",
      options: [
        "The filesystem cannot read a file twice",
        "The page cache may satisfy reads without accessing the storage device",
        "Read calls always bypass RAM",
        "The HDD becomes an NVMe device",
      ],
      correct: 1,
      explanation:
        "After the first read, the Linux kernel retains file data in the RAM Page Cache. Subsequent reads are satisfied directly from memory at ~5–10 GiB/s without touching the physical storage device or exercising controller queueing.",
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
    hdd_ssd_nvme: true,
    throughput_latency_iops: true,
    littles_law_queues: false,
    linux_io_schedulers: false,
    dma_interrupts_polling: false,
    async_io_uring: false,
    waf_ftl_trim: false,
    benchmark_analysis: false,
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
        currentModuleId="storage"
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
                Module 14 · Core OS Internals
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                <HardDrive size={12} className="text-stone-600" />
                Block Layer & Hardware
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                <Zap size={12} className="text-emerald-600" />
                NVMe, DMA & io_uring
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#18181b]">
              Storage Architecture, I/O Scheduling & Performance
            </h1>

            <p className="mt-3 text-base sm:text-lg text-stone-600 max-w-4xl leading-relaxed">
              Master the physical and kernel mechanics of storage: from magnetic rotating platters and NAND flash
              translation layers (FTL) to NVMe multi-queue hardware. Understand Little's Law, Linux block I/O schedulers,
              DMA, write amplification, and cutting-edge asynchronous interfaces like <code className="font-mono text-sm bg-stone-100 px-1.5 py-0.5 rounded text-orange-700">io_uring</code>.
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-6 pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Lessons Covered</div>
                <div className="text-base font-bold text-stone-900 mt-0.5">6 Comprehensive Topics</div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Storage Types</div>
                <div className="text-base font-bold text-orange-600 mt-0.5">HDD · SATA SSD · NVMe</div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Interactive Simulators</div>
                <div className="text-base font-bold text-stone-900 mt-0.5">4 Visual Engines</div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Hands-on Lab</div>
                <div className="text-base font-bold text-stone-900 mt-0.5">Python io_benchmark.py</div>
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
            {/* Lesson 1: HDDs, SSDs, Flash Storage & NVMe */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  01
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    HDDs, SSDs, Flash Storage & NVMe Fundamentals
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Platters & Actuators · Flash Translation Layer (FTL) · SATA vs NVMe · 6-Stage Request Lifecycle
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Storage media determine the baseline latency and throughput limits of any operating system.
                  Understanding the physical differences between rotating platters and non-volatile NAND flash is
                  fundamental to systems engineering:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-2">
                      <Clock size={16} className="text-amber-600" />
                      Hard Disk Drives (HDD)
                    </h3>
                    <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
                      <li>Magnetic platters spinning at 5400–7200 RPM.</li>
                      <li><strong>Seek time:</strong> Moving actuator arm over track (~4–10 ms).</li>
                      <li><strong>Rotational latency:</strong> Waiting for sector to spin under head (~4 ms).</li>
                      <li>Severe random I/O penalty (~75–150 IOPS).</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-2">
                      <HardDrive size={16} className="text-blue-600" />
                      SATA Solid-State Drives
                    </h3>
                    <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
                      <li>NAND flash pages (4KB) & erase blocks (2–4MB).</li>
                      <li>Flash Translation Layer (FTL) manages LBA mappings.</li>
                      <li>Bound by legacy SATA/AHCI: single queue, max depth 32.</li>
                      <li>Capped at ~550 MB/s bus bandwidth.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-2">
                      <Zap size={16} className="text-emerald-600" />
                      NVMe over PCIe
                    </h3>
                    <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
                      <li>Designed for modern multicore CPU parallelism.</li>
                      <li>Up to <strong>64,000 submission & completion queues</strong>.</li>
                      <li>Up to 64,000 commands per queue.</li>
                      <li>Sub-20µs latency and 7+ GB/s throughput over PCIe 4/5.</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6">
                  The 6-Stage Linux Storage Request Path
                </h3>
                <div className="p-5 rounded-2xl bg-[#1e1e24] text-stone-200 font-mono text-xs sm:text-sm space-y-2 border border-stone-800">
                  <div className="text-amber-300 font-bold">1. Application Layer:</div>
                  <div className="text-stone-400 pl-4">Issues <code className="text-stone-200">read()</code>, memory-mapped pointer dereference, or submits <code className="text-stone-200">io_uring</code> SQE.</div>
                  <div className="text-amber-300 font-bold">2. VFS & Filesystem:</div>
                  <div className="text-stone-400 pl-4">Resolves path dentry/inode and translates logical file offsets into block allocation addresses.</div>
                  <div className="text-amber-300 font-bold">3. Page Cache & Block Layer:</div>
                  <div className="text-stone-400 pl-4">Checks RAM cache; if missing, constructs <code className="text-stone-200">struct bio</code> and dispatches to block I/O scheduler.</div>
                  <div className="text-amber-300 font-bold">4. Device Driver:</div>
                  <div className="text-stone-400 pl-4">Programs hardware DMA descriptors and adds entry to submission queue.</div>
                  <div className="text-amber-300 font-bold">5. Storage Controller & Flash:</div>
                  <div className="text-stone-400 pl-4">FTL resolves physical flash die and executes NAND read via DMA directly into host RAM.</div>
                  <div className="text-amber-300 font-bold">6. Completion & Wakeup:</div>
                  <div className="text-stone-400 pl-4">Device rings MSI-X interrupt or updates completion queue; kernel marks bio complete and wakes application.</div>
                </div>
              </div>
            </section>

            {/* Lesson 2: I/O Scheduling, Queues, Latency and Throughput */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  02
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    I/O Scheduling, Queues, Latency and Throughput
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Little's Law · Queue Depth Trade-offs · Linux Schedulers: none, mq-deadline, bfq, kyber
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Storage performance requires balancing throughput against latency. Under <strong>Little's Law</strong>:
                </p>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs sm:text-sm text-stone-800">
                  L = λ · W
                  <br />
                  <span className="text-xs text-stone-600 font-sans">
                    Where <strong>L</strong> is average queue depth, <strong>λ</strong> is throughput arrival rate (IOPS), and <strong>W</strong> is average request latency.
                  </span>
                </div>
                <p>
                  Increasing queue depth allows NVMe devices to parallelize across internal flash channels, driving throughput up.
                  However, once the device reaches saturation, further increasing queue depth only increases queueing delay—causing
                  tail latency (p95 / p99) to skyrocket!
                </p>

                <h3 className="text-lg font-bold text-stone-900 mt-6">
                  Linux Block I/O Schedulers
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-sm text-stone-900 font-mono">none</div>
                    <p className="text-xs text-stone-600 mt-1">
                      Direct passthrough. Bypasses OS software queueing entirely. The default and recommended scheduler for NVMe SSDs.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-sm text-stone-900 font-mono">mq-deadline</div>
                    <p className="text-xs text-stone-600 mt-1">
                      Sorts requests by LBA but enforces hard deadlines (e.g. 500ms read deadline) to prevent starvation.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-sm text-stone-900 font-mono">bfq (Budget Fair Queueing)</div>
                    <p className="text-xs text-stone-600 mt-1">
                      Emphasizes proportional fairness and desktop interactive responsiveness, especially on slow rotational drives.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-sm text-stone-900 font-mono">kyber</div>
                    <p className="text-xs text-stone-600 mt-1">
                      Self-tuning latency-target scheduler designed specifically for fast flash storage devices.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Lesson 3: Interrupts, Polling and DMA */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  03
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Interrupt-Driven I/O, Polling and Direct Memory Access (DMA)
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Hardware IRQ · Busy Polling · Bus Mastering · Driver Responsibilities
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  How the CPU and storage device coordinate completion fundamentally dictates execution efficiency:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-sm text-stone-900 mb-1">Interrupt-Driven I/O</div>
                    <p className="text-xs text-stone-600">
                      The device fires an electrical interrupt (MSI-X) upon completion. CPU saves context and runs kernel handler.
                      Frees CPU for other tasks, but incurs interrupt and context-switch latency (~2–5 µs).
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-sm text-stone-900 mb-1">Polling (Busy Waiting)</div>
                    <p className="text-xs text-stone-600">
                      CPU continuously loops checking the NVMe completion ring. Delivers lowest possible latency (sub-microsecond),
                      but consumes 100% of a CPU core while waiting.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-sm text-stone-900 mb-1">Direct Memory Access (DMA)</div>
                    <p className="text-xs text-stone-600">
                      Device transfers blocks directly to/from host RAM via PCIe bus mastering. CPU sets up scatter-gather lists
                      and never touches individual bytes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Lesson 4: Blocking, Non-Blocking and Async I/O */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  04
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Blocking, Non-Blocking and Asynchronous I/O (io_uring)
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    read() vs epoll vs io_uring Ring Buffers · Zero-Syscall Submissions
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full text-xs sm:text-sm border border-stone-200 rounded-xl overflow-hidden">
                    <thead className="bg-stone-100 text-stone-900 font-bold font-mono">
                      <tr>
                        <th className="py-2.5 px-3 text-left border-b border-stone-200">I/O Model</th>
                        <th className="py-2.5 px-3 text-left border-b border-stone-200">Thread State During I/O</th>
                        <th className="py-2.5 px-3 text-left border-b border-stone-200">Common Use Case</th>
                        <th className="py-2.5 px-3 text-left border-b border-stone-200">Limitation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700">
                      <tr className="hover:bg-stone-50">
                        <td className="py-2.5 px-3 font-bold text-stone-900 font-mono">Blocking (read/write)</td>
                        <td className="py-2.5 px-3">Sleeps in uninterruptible disk sleep (<code className="font-mono">D</code> state)</td>
                        <td className="py-2.5 px-3">Simple CLI tools, sequential file pipelines</td>
                        <td className="py-2.5 px-3 text-rose-600">Requires 1 OS thread per concurrent operation</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="py-2.5 px-3 font-bold text-stone-900 font-mono">Non-blocking (epoll)</td>
                        <td className="py-2.5 px-3">Returns immediately with EAGAIN if not ready</td>
                        <td className="py-2.5 px-3">Network servers (Nginx, Node.js)</td>
                        <td className="py-2.5 px-3 text-amber-700">Does not work reliably for disk files in Linux!</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="py-2.5 px-3 font-bold text-stone-900 font-mono">io_uring</td>
                        <td className="py-2.5 px-3 font-semibold text-emerald-700">Submits to ring buffer in shared memory</td>
                        <td className="py-2.5 px-3 font-semibold text-emerald-700">Modern databases, high-throughput storage engines</td>
                        <td className="py-2.5 px-3">Requires Linux kernel 5.1+ and careful memory safety</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900">
                  <div className="font-bold mb-1">The io_uring Revolution:</div>
                  Unlike legacy POSIX AIO, <code className="font-mono font-bold">io_uring</code> uses two lockless ring buffers
                  (Submission Queue SQ and Completion Queue CQ) mapped directly into user space memory. Applications can submit hundreds
                  of I/O requests without issuing a single system call!
                </div>
              </div>
            </section>

            {/* Lesson 5: Write Amplification and Flash Lifespan */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  05
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Write Amplification, Flash Garbage Collection and TRIM
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Pages vs Erase Blocks · Write Amplification Factor (WAF) · TRIM / Discard · Durability Flushes
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  In NAND flash memory, <strong>reads and writes happen in 4KB pages</strong>, but <strong>erasing can only be done in whole blocks (2–4MB)</strong>.
                  A page cannot be rewritten until its containing block is erased.
                </p>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm font-mono text-stone-800 space-y-1">
                  <div className="font-bold text-stone-900 font-sans">Write Amplification Factor (WAF) Formula:</div>
                  <div>WAF = Physical Bytes Written by Controller / Host Bytes Requested</div>
                  <div className="text-stone-500 text-[11px] font-sans mt-2">
                    A WAF of 2.0 means the SSD burns twice as much physical flash endurance as requested, cutting drive lifespan in half!
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900">
                    <div className="font-bold mb-1">Garbage Collection (GC) Overhead</div>
                    When free blocks run low, the FTL controller must read valid pages out of dirty blocks, copy them to a clean block,
                    and erase the old block. Random small writes trigger severe GC overhead.
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                    <div className="font-bold mb-1">The Role of TRIM / Discard</div>
                    When an OS deletes a file, it sends a <code className="font-mono">TRIM</code> command informing the SSD controller
                    that those LBAs are dead. The FTL skips copying them during GC, drastically lowering WAF.
                  </div>
                </div>
              </div>
            </section>

            {/* Lesson 6 & Lab: Practical Python io_benchmark */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                    06
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-stone-900">
                      Practical Lab: Benchmark File Operations (io_benchmark.py)
                    </h2>
                    <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                      Throughput vs Latency · Chunk Size Impact · The Cost of fsync() · iostat Analysis
                    </p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleCopyCode(
                      "python-bench-script",
                      `#!/usr/bin/env python3
import argparse
import os
import statistics
import tempfile
import time

MIB = 1024 * 1024

def percentile(values, p):
    ordered = sorted(values)
    if not ordered:
        return 0.0
    index = max(0, min(len(ordered) - 1, int((p / 100) * len(ordered) + 0.999999) - 1))
    return ordered[index]

def report(label, total_bytes, elapsed, latencies=None):
    elapsed = max(elapsed, 1e-12)
    mib_s = total_bytes / MIB / elapsed
    print(f"\\n{label}")
    print(f"  Bytes Transferred: {total_bytes:,} bytes")
    print(f"  Elapsed Time     : {elapsed:.4f} s")
    print(f"  Throughput       : {mib_s:.2f} MiB/s")
    if latencies:
        ms = [x * 1000 for x in latencies]
        print(f"  Operations       : {len(ms)} calls")
        print(f"  Mean Latency     : {statistics.mean(ms):.3f} ms")
        print(f"  p50 Latency      : {percentile(ms, 50):.3f} ms")
        print(f"  p95 Latency      : {percentile(ms, 95):.3f} ms")
        print(f"  p99 Latency      : {percentile(ms, 99):.3f} ms")

def run_benchmark(size_mib, chunk_kib, sync_each):
    total_bytes = size_mib * MIB
    chunk_bytes = chunk_kib * 1024
    payload = b"x" * chunk_bytes
    num_chunks = total_bytes // chunk_bytes

    with tempfile.NamedTemporaryFile(delete=False) as tf:
        filename = tf.name

    try:
        latencies = []
        fd = os.open(filename, os.O_WRONLY | os.O_CREAT | os.O_TRUNC)
        t_start = time.perf_counter()
        for _ in range(num_chunks):
            op_start = time.perf_counter()
            os.write(fd, payload)
            if sync_each:
                os.fsync(fd)
            latencies.append(time.perf_counter() - op_start)
        if not sync_each:
            os.fsync(fd)
        os.close(fd)
        t_elapsed = time.perf_counter() - t_start
        report("Benchmark: Sequential Write", total_bytes, t_elapsed, latencies)
    finally:
        if os.path.exists(filename):
            os.unlink(filename)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--size-mib", type=int, default=64)
    parser.add_argument("--chunk-kib", type=int, default=256)
    parser.add_argument("--sync-each", action="store_true")
    args = parser.parse_args()
    run_benchmark(args.size_mib, args.chunk_kib, args.sync_each)`
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors"
                >
                  {copiedCodeId === "python-bench-script" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedCodeId === "python-bench-script" ? "Copied" : "Copy Benchmark Code"}</span>
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-[#1e1e24] text-stone-200 font-mono text-xs overflow-x-auto border border-stone-800">
                <pre>{`# Run the 4 Experiments:
python3 io_benchmark.py --size-mib 64 --chunk-kib 4       # Exp A: Small chunks (high syscall overhead)
python3 io_benchmark.py --size-mib 64 --chunk-kib 64      # Exp B: Medium chunks
python3 io_benchmark.py --size-mib 64 --chunk-kib 256     # Exp C: Large chunks (optimal buffered throughput)
python3 io_benchmark.py --size-mib 16 --chunk-kib 256 --sync-each  # Exp D: Synchronous physical writeback`}</pre>
              </div>
            </section>
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 2: INTERACTIVE SIMULATORS                                         */}
        {/* ===================================================================== */}
        {activeTab === "interactive-lab" && (
          <div className="space-y-10">
            {/* Interactive Engine 1: Storage Medium Latency & Physics Simulator */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                    <HardDrive className="text-orange-600" size={24} />
                    Storage Medium Latency & Hardware Physics Simulator
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    Compare mechanical HDD head latency against SATA SSD and NVMe PCIe 4.0 flash across access patterns.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="grid grid-cols-2 gap-1 bg-stone-100 p-1 rounded-xl">
                    <button
                      onClick={() => setAccessPattern("random")}
                      className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
                        accessPattern === "random" ? "bg-white text-orange-600 shadow-2xs" : "text-stone-600"
                      }`}
                    >
                      Random 4KB
                    </button>
                    <button
                      onClick={() => setAccessPattern("sequential")}
                      className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
                        accessPattern === "sequential" ? "bg-white text-orange-600 shadow-2xs" : "text-stone-600"
                      }`}
                    >
                      Sequential 1MB
                    </button>
                  </div>
                </div>
              </div>

              {/* Media Selection Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {[
                  { id: "hdd", name: "Rotational HDD", sub: "Mechanical 7200 RPM" },
                  { id: "sata", name: "SATA III SSD", sub: "AHCI Single Queue" },
                  { id: "nvme", name: "NVMe PCIe 4.0", sub: "64k Parallel Queues" },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setStorageMedium(item.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      storageMedium === item.id
                        ? "bg-white border-orange-500 ring-2 ring-orange-200 shadow-xs"
                        : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                    }`}
                  >
                    <div className="font-bold text-sm text-stone-900">{item.name}</div>
                    <div className="text-xs text-stone-500 font-mono mt-0.5">{item.sub}</div>
                  </div>
                ))}
              </div>

              {/* Physics Breakdown */}
              <div className={`p-6 rounded-2xl border ${storagePhysics.badgeColor}`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-base font-bold font-mono">
                    {storagePhysics.name}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/80 border">
                    {storagePhysics.interface}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4 font-mono">
                  <div>
                    <div className="text-[10px] text-stone-500 uppercase">Mechanical Seek:</div>
                    <div className="text-lg font-black text-stone-900">{storagePhysics.seekTime}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-500 uppercase">Rotational Latency:</div>
                    <div className="text-lg font-black text-stone-900">{storagePhysics.rotLatency}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-500 uppercase">Total Access Latency:</div>
                    <div className="text-xl font-black text-orange-600">{storagePhysics.totalLatencyMs} ms ({storagePhysics.totalLatencyUs} µs)</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-500 uppercase">Throughput & IOPS:</div>
                    <div className="text-lg font-black text-stone-900">{storagePhysics.iops} IOPS</div>
                    <div className="text-xs text-stone-600">{storagePhysics.throughputMB}</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-black/10 text-xs sm:text-sm font-sans text-stone-800">
                  <strong>Primary Architectural Bottleneck: </strong>{storagePhysics.bottleneck}
                </div>
              </div>
            </section>

            {/* Interactive Engine 2: Little's Law & Queue Depth Latency Calculator */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-200">
                <Gauge className="text-orange-600" size={24} />
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Little's Law & Queue Depth Latency Calculator
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    Observe the fundamental trade-off: deeper queues saturate hardware throughput, but excessive queue depth causes queueing latency explosion.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                      <span>Request Throughput Arrival Rate (λ):</span>
                      <span className="text-orange-600">{littlesLawMetrics.lambda} IOPS</span>
                    </div>
                    <input
                      type="range"
                      min={1000}
                      max={100000}
                      step={5000}
                      value={arrivalRateLambda}
                      onChange={(e) => setArrivalRateLambda(parseInt(e.target.value, 10))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                      <span>Active Queue Depth (L):</span>
                      <span className="text-blue-600">{configuredQueueDepth} Outstanding Commands</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={128}
                      step={1}
                      value={configuredQueueDepth}
                      onChange={(e) => setConfiguredQueueDepth(parseInt(e.target.value, 10))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>

                <div className={`p-6 rounded-2xl border flex flex-col justify-between ${littlesLawMetrics.isCongested ? "bg-rose-50 border-rose-300" : "bg-emerald-50 border-emerald-300"}`}>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase text-stone-600 mb-1">
                      Little's Law Average Latency (W = L / λ)
                    </div>
                    <div className="text-3xl font-black font-mono text-stone-900 my-1">
                      {littlesLawMetrics.avgTimeInSystemMs} ms ({littlesLawMetrics.avgTimeInSystemUs} µs)
                    </div>
                    <div className="text-xs font-mono text-stone-600 mt-2 space-y-1">
                      <div>Device Hardware Processing: 35 µs</div>
                      <div>Queueing Wait Delay: <strong className={littlesLawMetrics.isCongested ? "text-rose-600" : "text-emerald-700"}>{littlesLawMetrics.queueingDelayUs} µs</strong></div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/10 text-xs sm:text-sm font-sans text-stone-800">
                    {littlesLawMetrics.isCongested
                      ? "⚠ Queue congestion warning: requests are spending more time waiting in the queue buffer than being processed by the storage controller!"
                      : "✓ Optimal queue depth: parallel channels are utilized with negligible queueing wait delay."}
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Engine 3: Write Amplification & FTL Garbage Collection */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-200">
                <Zap className="text-orange-600" size={24} />
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Flash Translation Layer (FTL) & Write Amplification Visualizer
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    See how random small writes and low over-provisioning trigger aggressive garbage collection and accelerate SSD cell wear.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                      <span>Random Small Write Mix:</span>
                      <span className="text-orange-600">{randomWritePercent}% Random (4KB)</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      step={5}
                      value={randomWritePercent}
                      onChange={(e) => setRandomWritePercent(parseInt(e.target.value, 10))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                      <span>SSD Factory Over-Provisioning:</span>
                      <span className="text-blue-600">{overProvisioningPercent}% Reserved Capacity</span>
                    </div>
                    <input
                      type="range"
                      min={7}
                      max={28}
                      step={7}
                      value={overProvisioningPercent}
                      onChange={(e) => setOverProvisioningPercent(parseInt(e.target.value, 10))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                    <div className="text-[11px] text-stone-500 mt-1">
                      7% (Consumer SSD) vs 28% (Enterprise Data Center SSD)
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-2xl border flex flex-col justify-between ${writeAmplificationMetrics.badgeColor}`}>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                      Write Amplification Factor (WAF)
                    </div>
                    <div className="text-3xl font-black font-mono text-stone-900 my-1">
                      {writeAmplificationMetrics.waf}x Multiplier
                    </div>
                    <p className="text-xs sm:text-sm text-stone-800 mt-2 leading-relaxed">
                      Writing <strong>{writeAmplificationMetrics.hostGiB} GiB</strong> of user data causes the SSD to physically write <strong>{writeAmplificationMetrics.physicalGiB} GiB</strong> into NAND cells (+{writeAmplificationMetrics.wastedFlashWear}% excess wear)!
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/10 text-xs font-mono">
                    FTL Status: <strong>{writeAmplificationMetrics.ftlState}</strong>
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
                    Linux Storage & I/O Terminal Shell Emulation
                  </h2>
                </div>
                <div className="text-xs font-mono text-stone-500">Live Emulated Output</div>
              </div>

              {/* Command Presets */}
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "python3 io_benchmark.py --size-mib 64 --chunk-kib 256",
                  "python3 io_benchmark.py --size-mib 16 --chunk-kib 256 --sync-each",
                  "iostat -xz 1 3",
                  "lsblk -o NAME,TYPE,SIZE,ROTA,TRAN,MOUNTPOINTS",
                  "cat /sys/block/nvme0n1/queue/scheduler",
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
                  <span className="ml-2 text-xs text-stone-300">bash — student@storage-node: ~</span>
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
                  Module 14 Storage Engineering Competency Checklist
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Track your mastery across block layers, NVMe parallel queues, I/O scheduling, and performance benchmarking.
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
                  id: "hdd_ssd_nvme",
                  title: "HDD vs SATA SSD vs NVMe Architectures",
                  desc: "Explain seek time and rotational latency on HDDs, FTL page/erase block mapping on SSDs, and NVMe 64k parallel PCIe queues.",
                },
                {
                  id: "throughput_latency_iops",
                  title: "Throughput, Latency, IOPS & Tail Metrics",
                  desc: "Differentiate aggregate bandwidth (MiB/s) from p95/p99 tail latency and understand why high throughput does not imply low latency.",
                },
                {
                  id: "littles_law_queues",
                  title: "Little's Law & Queue Depth Optimization",
                  desc: "Apply L = λ · W to calculate in-system wait time and identify the queue depth threshold where queueing delay degrades tail latency.",
                },
                {
                  id: "linux_io_schedulers",
                  title: "Linux Block Layer I/O Schedulers",
                  desc: "Evaluate none (NVMe passthrough), mq-deadline (starvation prevention), and bfq (fairness budget) on modern drives.",
                },
                {
                  id: "dma_interrupts_polling",
                  title: "Interrupts, Polling & Direct Memory Access (DMA)",
                  desc: "Explain PCIe bus mastering DMA data transfers, MSI-X interrupt handling costs, and zero-overhead busy polling.",
                },
                {
                  id: "async_io_uring",
                  title: "Blocking vs Non-Blocking vs io_uring",
                  desc: "Contrast TASK_UNINTERRUPTIBLE thread sleeps with lockless SQ/CQ ring buffers in shared memory for zero-syscall asynchronous I/O.",
                },
                {
                  id: "waf_ftl_trim",
                  title: "Write Amplification & TRIM/Discard",
                  desc: "Formulate physical-to-host write ratio (WAF), explain garbage collection block compaction, and justify TRIM commands.",
                },
                {
                  id: "benchmark_analysis",
                  title: "Controlled Storage Benchmarking with Python",
                  desc: "Implement io_benchmark.py to isolate cache effects, compare chunk sizes, and measure the catastrophic cost of per-write fsync().",
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
                  Module 14 Knowledge Check
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Evaluate your understanding of HDDs, SSDs, Little's Law, queue depth, DMA, and storage benchmarking.
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
            onClick={() => navigate("/learning/os/filesystems")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 font-medium text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 13 (Filesystems & Storage Architecture)</span>
          </button>

          <button
            onClick={() => navigate("/learning/os/ipc")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-sm transition-colors shadow-xs"
          >
            <span>Next: Module 15 (IPC, Pipes & Shared Memory)</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        title="Nova OS Intelligence: Storage & I/O Scheduling"
        defaultMessage="Hello! Ask me any question about HDDs, NAND flash SSDs, NVMe parallel queues, Little's Law, Linux I/O schedulers, or io_uring!"
      />
    </div>
  );
}
