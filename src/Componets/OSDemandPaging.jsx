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
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 11                                 */
/* Demand Paging and Page Replacement                                         */
/* Virtual Memory · Working Sets · Thrashing · FIFO · Optimal · LRU · Clock   */
/* -------------------------------------------------------------------------- */

export default function OSDemandPaging() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(34);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-lab' | 'checklist' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // ---------------------------------------------------------------------------
  // Interactive Tool 1: Live Page-Replacement Stepper & Algorithm Comparator
  // ---------------------------------------------------------------------------
  const PRESET_WORKLOADS = {
    standard: {
      name: "Standard Mix",
      refs: [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5],
      desc: "Classic reference string testing repeated access and evictions.",
    },
    belady: {
      name: "Belady's Anomaly String",
      refs: [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5],
      desc: "Shows FIFO with 3 frames has 9 faults, while 4 frames has 10 faults!",
    },
    locality: {
      name: "High Locality (Working Set)",
      refs: [1, 2, 1, 3, 1, 2, 1, 4, 1, 2, 1],
      desc: "Frequent reuse of pages 1 and 2 simulates real program loops.",
    },
    sequential: {
      name: "Sequential Scan",
      refs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      desc: "Pure sequential stream touching new pages with zero reuse.",
    },
    cyclic: {
      name: "Cyclic Loop (Thrashing Hazard)",
      refs: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4],
      desc: "A loop iterating through 4 pages repeatedly.",
    },
  };

  const [selectedPreset, setSelectedPreset] = useState("standard");
  const [frameCapacity, setFrameCapacity] = useState(3);
  const [currentAlgo, setCurrentAlgo] = useState("lru"); // 'fifo' | 'optimal' | 'lru' | 'clock'
  const [stepIndex, setStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeRefs = useMemo(() => {
    return PRESET_WORKLOADS[selectedPreset]?.refs || [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5];
  }, [selectedPreset]);

  // Pure simulation generator for any algorithm
  const simulationTrace = useMemo(() => {
    const refs = activeRefs;
    const capacity = frameCapacity;
    const steps = [];

    let currentFrames = [];
    let faultsCount = 0;
    let hitsCount = 0;

    // Data structures for tracking
    let fifoQueue = []; // for FIFO
    let lruHistory = []; // for LRU: most recent at end
    let clockFrames = Array(capacity).fill(null); // for Clock
    let clockBits = Array(capacity).fill(0); // for Clock
    let clockHand = 0;

    for (let i = 0; i < refs.length; i++) {
      const page = refs[i];
      let isHit = false;
      let evictedPage = null;
      let handPosition = clockHand;

      if (currentAlgo === "fifo") {
        if (currentFrames.includes(page)) {
          isHit = true;
          hitsCount++;
        } else {
          faultsCount++;
          if (currentFrames.length < capacity) {
            currentFrames = [...currentFrames, page];
            fifoQueue.push(page);
          } else {
            evictedPage = fifoQueue.shift();
            const idx = currentFrames.indexOf(evictedPage);
            currentFrames[idx] = page;
            currentFrames = [...currentFrames];
            fifoQueue.push(page);
          }
        }
      } else if (currentAlgo === "optimal") {
        if (currentFrames.includes(page)) {
          isHit = true;
          hitsCount++;
        } else {
          faultsCount++;
          if (currentFrames.length < capacity) {
            currentFrames = [...currentFrames, page];
          } else {
            // Find resident page whose next occurrence is farthest in future
            let farthestDist = -1;
            let victimIdx = 0;

            for (let f = 0; f < currentFrames.length; f++) {
              const resident = currentFrames[f];
              let nextUse = Infinity;
              for (let k = i + 1; k < refs.length; k++) {
                if (refs[k] === resident) {
                  nextUse = k;
                  break;
                }
              }
              if (nextUse > farthestDist) {
                farthestDist = nextUse;
                victimIdx = f;
              }
            }
            evictedPage = currentFrames[victimIdx];
            currentFrames[victimIdx] = page;
            currentFrames = [...currentFrames];
          }
        }
      } else if (currentAlgo === "lru") {
        if (currentFrames.includes(page)) {
          isHit = true;
          hitsCount++;
          // Move to most recent
          lruHistory = lruHistory.filter((p) => p !== page);
          lruHistory.push(page);
        } else {
          faultsCount++;
          if (currentFrames.length < capacity) {
            currentFrames = [...currentFrames, page];
            lruHistory.push(page);
          } else {
            evictedPage = lruHistory.shift();
            const idx = currentFrames.indexOf(evictedPage);
            currentFrames[idx] = page;
            currentFrames = [...currentFrames];
            lruHistory.push(page);
          }
        }
      } else if (currentAlgo === "clock") {
        const existingIdx = clockFrames.indexOf(page);
        if (existingIdx !== -1) {
          isHit = true;
          hitsCount++;
          clockBits[existingIdx] = 1;
        } else {
          faultsCount++;
          // Check for empty slot first
          const emptyIdx = clockFrames.indexOf(null);
          if (emptyIdx !== -1) {
            clockFrames[emptyIdx] = page;
            clockBits[emptyIdx] = 1;
          } else {
            // Find victim using clock hand
            while (true) {
              if (clockBits[clockHand] === 0) {
                evictedPage = clockFrames[clockHand];
                clockFrames[clockHand] = page;
                clockBits[clockHand] = 1;
                clockHand = (clockHand + 1) % capacity;
                break;
              } else {
                clockBits[clockHand] = 0;
                clockHand = (clockHand + 1) % capacity;
              }
            }
          }
        }
        currentFrames = clockFrames.filter((p) => p !== null);
      }

      steps.push({
        step: i + 1,
        page,
        isHit,
        evictedPage,
        frames: currentAlgo === "clock" ? [...clockFrames] : [...currentFrames],
        clockBits: [...clockBits],
        clockHand: handPosition,
        faultsCount,
        hitsCount,
        faultRate: ((faultsCount / (i + 1)) * 100).toFixed(1),
      });
    }

    return steps;
  }, [activeRefs, frameCapacity, currentAlgo]);

  // Overall comparison across all 4 algorithms for the selected sequence
  const comparisonSummary = useMemo(() => {
    const algos = ["optimal", "lru", "clock", "fifo"];
    const results = {};

    algos.forEach((algo) => {
      let frames = [];
      let faults = 0;
      let queue = [];
      let lru = [];
      let cFrames = Array(frameCapacity).fill(null);
      let cBits = Array(frameCapacity).fill(0);
      let cHand = 0;

      for (let i = 0; i < activeRefs.length; i++) {
        const page = activeRefs[i];
        if (algo === "fifo") {
          if (!frames.includes(page)) {
            faults++;
            if (frames.length < frameCapacity) {
              frames.push(page);
              queue.push(page);
            } else {
              const v = queue.shift();
              frames[frames.indexOf(v)] = page;
              queue.push(page);
            }
          }
        } else if (algo === "optimal") {
          if (!frames.includes(page)) {
            faults++;
            if (frames.length < frameCapacity) {
              frames.push(page);
            } else {
              let farthest = -1;
              let vIdx = 0;
              for (let f = 0; f < frames.length; f++) {
                let next = Infinity;
                for (let k = i + 1; k < activeRefs.length; k++) {
                  if (activeRefs[k] === frames[f]) {
                    next = k;
                    break;
                  }
                }
                if (next > farthest) {
                  farthest = next;
                  vIdx = f;
                }
              }
              frames[vIdx] = page;
            }
          }
        } else if (algo === "lru") {
          if (frames.includes(page)) {
            lru = lru.filter((p) => p !== page);
            lru.push(page);
          } else {
            faults++;
            if (frames.length < frameCapacity) {
              frames.push(page);
              lru.push(page);
            } else {
              const v = lru.shift();
              frames[frames.indexOf(v)] = page;
              lru.push(page);
            }
          }
        } else if (algo === "clock") {
          const idx = cFrames.indexOf(page);
          if (idx !== -1) {
            cBits[idx] = 1;
          } else {
            faults++;
            const emptyIdx = cFrames.indexOf(null);
            if (emptyIdx !== -1) {
              cFrames[emptyIdx] = page;
              cBits[emptyIdx] = 1;
            } else {
              while (true) {
                if (cBits[cHand] === 0) {
                  cFrames[cHand] = page;
                  cBits[cHand] = 1;
                  cHand = (cHand + 1) % frameCapacity;
                  break;
                } else {
                  cBits[cHand] = 0;
                  cHand = (cHand + 1) % frameCapacity;
                }
              }
            }
          }
        }
      }

      results[algo] = {
        faults,
        hits: activeRefs.length - faults,
        faultRate: ((faults / activeRefs.length) * 100).toFixed(1),
      };
    });

    return results;
  }, [activeRefs, frameCapacity]);

  // Autoplay ticker for stepper
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setStepIndex((prev) => {
          if (prev >= activeRefs.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 750);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeRefs.length]);

  const currentStepData = simulationTrace[stepIndex] || simulationTrace[0] || {};

  // ---------------------------------------------------------------------------
  // Interactive Tool 2: Working Set & Thrashing Curve Visualizer
  // ---------------------------------------------------------------------------
  const [workingSetPages, setWorkingSetPages] = useState(5);
  const [allocatedFrames, setAllocatedFrames] = useState(3);
  const [cyclicIterations, setCyclicIterations] = useState(4);

  const thrashingMetrics = useMemo(() => {
    const W = workingSetPages;
    const M = allocatedFrames;
    const totalRefs = W * cyclicIterations;

    // Under cyclic access 1..W repeated:
    // If M >= W: only first cycle faults (cold start = W faults). Remaining = 0 faults.
    // If M < W: each page is evicted before reuse -> 100% fault rate!
    let totalFaults = 0;
    let isThrashing = false;

    if (M >= W) {
      totalFaults = W;
      isThrashing = false;
    } else {
      totalFaults = totalRefs; // 100% faults under pure cyclic loop
      isThrashing = true;
    }

    const faultRate = ((totalFaults / totalRefs) * 100).toFixed(1);
    const cpuEfficiency = isThrashing ? Math.max(3, 100 - parseFloat(faultRate) * 0.95).toFixed(0) : 96;
    const ioWaitTime = 100 - parseInt(cpuEfficiency, 10);

    return {
      totalRefs,
      totalFaults,
      faultRate,
      isThrashing,
      cpuEfficiency,
      ioWaitTime,
    };
  }, [workingSetPages, allocatedFrames, cyclicIterations]);

  // ---------------------------------------------------------------------------
  // Interactive Tool 3: Linux Memory Pressure & Reclamation Pipeline
  // ---------------------------------------------------------------------------
  const [pressureLevel, setPressureLevel] = useState(25); // 0% to 100%

  const memoryPressureState = useMemo(() => {
    if (pressureLevel < 40) {
      return {
        zone: "Zone High (Healthy)",
        watermark: "Above pages_high",
        kswapd: "Sleeping (Idle)",
        filePages: "Active cache retained without reclaim",
        anonPages: "Resident in RAM, zero swap activity",
        action: "Normal allocations succeed directly from free buddy lists.",
        psiStatus: "some=0.00% full=0.00%",
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      };
    } else if (pressureLevel < 70) {
      return {
        zone: "Zone Low (Background Reclaim)",
        watermark: "Between pages_min and pages_high",
        kswapd: "Active (Woken up to reclaim clean pages)",
        filePages: "Clean file-backed pages unmapped & dropped silently",
        anonPages: "Untouched if vm.swappiness allows file reclamation first",
        action: "kswapd scans inactive file list in background; zero app stalling.",
        psiStatus: "some=1.20% full=0.00%",
        badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      };
    } else if (pressureLevel < 90) {
      return {
        zone: "Zone Min (Direct Reclaim Hazard)",
        watermark: "Below pages_min",
        kswapd: "Urgent (Applications enter synchronous direct reclaim)",
        filePages: "Flusher threads trigger dirty page writeback to storage",
        anonPages: "Anonymous pages pushed to swap partitions via swap daemon",
        action: "Allocating processes stall while writing dirty pages. Latency spikes!",
        psiStatus: "some=24.50% full=12.80%",
        badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
      };
    } else {
      return {
        zone: "Critical Out-Of-Memory (OOM)",
        watermark: "Depleted (Zero allocatable frames)",
        kswapd: "Failed to reclaim sufficient memory",
        filePages: "All reclaimable pages dropped; dirty write queues full",
        anonPages: "Swap space completely exhausted or disabled",
        action: "Linux OOM Killer selects victim via oom_badness() and sends SIGKILL.",
        psiStatus: "some=92.40% full=78.10%",
        badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      };
    }
  }, [pressureLevel]);

  // ---------------------------------------------------------------------------
  // Interactive Tool 4: Terminal Simulation Sandbox
  // ---------------------------------------------------------------------------
  const [terminalCommand, setTerminalCommand] = useState("python3 page_replacement_lab.py");

  const terminalOutput = useMemo(() => {
    switch (terminalCommand) {
      case "python3 page_replacement_lab.py":
        return `======================================================================
PREPSPACES OS LAB: DEMAND PAGING & PAGE REPLACEMENT SIMULATOR
Python 3.11.4 | Fixed Capacity Benchmark Across Reference Workloads
======================================================================

[Workload 1] High Locality (Working Set: 3 pages in tight loop)
References (11): [1, 2, 1, 3, 1, 2, 1, 4, 1, 2, 1] | Capacity: 3 frames
  - Optimal : 4 faults  (Fault Rate: 36.4%)
  - LRU     : 4 faults  (Fault Rate: 36.4%) [Exploits temporal locality]
  - Clock   : 5 faults  (Fault Rate: 45.5%)
  - FIFO    : 6 faults  (Fault Rate: 54.5%)

[Workload 2] Belady's Anomaly Experiment
Ref Sequence (12): [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5]
  FIFO  @ 3 Frames: 9 faults (Fault Rate: 75.0%)
  FIFO  @ 4 Frames: 10 faults (Fault Rate: 83.3%)  <-- BELADY'S ANOMALY OBSERVED!
  LRU   @ 3 Frames: 10 faults (Fault Rate: 83.3%)
  LRU   @ 4 Frames: 8 faults  (Fault Rate: 66.7%)  <-- LRU is an anomaly-immune stack algorithm!
  Opt   @ 4 Frames: 6 faults  (Fault Rate: 50.0%)

[Workload 3] Cyclic Thrashing Hazard (N=5 pages, M=3 frames, 4 cycles)
References (20): [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
  - LRU     : 20 faults (Fault Rate: 100.0%) [THRASHING: M < N]
  - FIFO    : 20 faults (Fault Rate: 100.0%)
  - Clock   : 20 faults (Fault Rate: 100.0%)
  - Optimal : 14 faults (Fault Rate: 70.0%)

Verification Summary:
  [OK] FIFO Queue Eviction Verified
  [OK] Optimal Furthest-in-Future Benchmark Computed
  [OK] LRU Recency Tracking Confirmed
  [OK] Clock Second-Chance Circular Reference Bit Validated`;

      case "/usr/bin/time -v ./workload_app":
        return `Command being timed: "./workload_app"
User time (seconds): 0.08
System time (seconds): 0.12
Percent of CPU this job got: 76%
Elapsed (wall clock) time (h:mm:ss or m:ss): 0:00.26
Average shared text size (kbytes): 0
Average unshared data size (kbytes): 0
Average stack size (kbytes): 0
Average total size (kbytes): 0
Maximum resident set size (kbytes): 16428
Average resident set size (kbytes): 0
Major (requiring I/O) page faults: 1
Minor (reclaiming a frame) page faults: 3982
Voluntary context switches: 14
Involuntary context switches: 3
Swaps: 0
File system inputs: 24
File system outputs: 0
Socket messages sent: 0
Socket messages received: 0
Signals delivered: 0
Page size (bytes): 4096
Exit status: 0

Note: Minor faults (3982) correspond to zero-filled demand paging of the heap.
Major fault (1) corresponds to the initial loading of the ELF binary from disk.`;

      case "vmstat 1 5":
        return `procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 1  0      0 812492  48212 948120    0    0    12     4  104  212  4  2 94  0  0
 1  0      0 812480  48212 948120    0    0     0     0   98  190  3  1 96  0  0
 2  1   1024 124110  12400 110480  240 1024  1420  1820 1204 4210 12 42 14 32  0
 3  2   8420  48210   4100  42100  840 4120  4810  6100 2410 8920  8 58  4 30  0
 1  0   8420  94120   4100  42200    0    0     4    12  112  240  5  2 93  0  0

Observation:
  - Lines 3-4 show memory pressure spike:
    'so' (swap-out) and 'si' (swap-in) active.
    'wa' (I/O wait) spiked to 32% while CPU idle collapsed.`;

      case "cat /proc/pressure/memory":
        return `some avg10=2.45 avg60=1.12 avg300=0.45 total=18492041
full avg10=0.82 avg60=0.31 avg300=0.10 total=4819201

Explanation of Linux PSI (Pressure Stall Information):
  - 'some': At least one task is stalled waiting on memory allocation/reclaim.
  - 'full': ALL non-idle tasks are stalled simultaneously (critical memory thrashing!).
  - 10-second rolling average indicates current memory reclaim friction.`;

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
  // Interactive Assessment Quiz
  // ---------------------------------------------------------------------------
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "What is the primary difference between a minor and a major page fault on Linux?",
      options: [
        "A minor fault crashes the application with SIGSEGV; a major fault retries the instruction.",
        "A minor fault is resolved without reading from storage (e.g. zero-fill or already resident shared page); a major fault requires storage I/O.",
        "A minor fault occurs in user mode; a major fault occurs in kernel mode.",
        "A minor fault uses the TLB; a major fault bypasses the TLB completely.",
      ],
      correct: 1,
      explanation:
        "On Linux, a minor page fault is resolved entirely in RAM (such as mapping a zeroed page for anonymous heap allocation or mapping an existing shared page). A major page fault requires blocking on disk/SSD I/O to read the page data.",
    },
    {
      id: "q2",
      question: "Which page replacement algorithm is known to exhibit Belady's Anomaly?",
      options: [
        "Optimal (MIN) Algorithm",
        "Least Recently Used (LRU)",
        "First-In, First-Out (FIFO)",
        "Both LRU and Optimal",
      ],
      correct: 2,
      explanation:
        "FIFO can exhibit Belady's Anomaly, where increasing the number of physical frames paradoxically increases the total number of page faults. Stack algorithms like LRU and Optimal never exhibit Belady's anomaly because the set of resident pages with N frames is always a subset of resident pages with N+1 frames.",
    },
    {
      id: "q3",
      question: "Under what condition does memory thrashing occur in an operating system?",
      options: [
        "When the CPU utilization exceeds 99% for more than 5 minutes.",
        "When the combined working sets of active processes exceed the available physical RAM, causing continuous page faults and evictions.",
        "When dirty pages are unmapped without being written back to disk.",
        "When a process allocates more than 4GB of virtual memory on a 64-bit architecture.",
      ],
      correct: 1,
      explanation:
        "Thrashing occurs when total memory demand (the sum of active working sets) exceeds physical RAM capacity. The OS spends virtually all its CPU time servicing page faults and waiting on storage I/O rather than executing productive user code.",
    },
    {
      id: "q4",
      question: "How does the Clock (Second Chance) page replacement algorithm approximate LRU?",
      options: [
        "By sorting pages by 64-bit nanosecond access timestamps on every memory instruction.",
        "By tracking references in a circular buffer with a reference bit: clearing the bit on first inspection and evicting on the second pass.",
        "By consulting future memory references from compiler metadata.",
        "By evicting the newest page first.",
      ],
      correct: 1,
      explanation:
        "Clock uses a circular list of frames and a 1-bit reference flag set by hardware MMU on memory read/write. When seeking a victim, the hand inspects the bit: if 1, it resets it to 0 ('second chance') and advances; if 0, that frame is chosen for eviction.",
    },
    {
      id: "q5",
      question: "What happens during a Copy-on-Write (COW) write access after fork()?",
      options: [
        "The kernel immediately kills the child process to protect parent integrity.",
        "The CPU writes directly to the shared frame, updating both parent and child memory simultaneously.",
        "Hardware raises a write protection fault; the kernel intercepts it, allocates a new physical frame, copies the page contents, updates the PTE to writable, and retries the write.",
        "The page is immediately written to the Linux swap partition.",
      ],
      correct: 2,
      explanation:
        "After fork(), pages are marked read-only in both parent and child page tables. When either process attempts to write, a page protection fault is raised. The OS allocates a private frame, copies the 4KB data, marks the new PTE writable, and resumes execution transparently.",
    },
    {
      id: "q6",
      question: "What is the role of Linux overcommit (vm.overcommit_memory = 0) and the OOM Killer?",
      options: [
        "Overcommit guarantees that malloc() will never return a non-null pointer unless physical RAM is already reserved.",
        "The OS grants virtual memory reservations generously assuming programs touch only a fraction of allocated memory; if RAM is exhausted upon touching, the OOM Killer terminates a process selected by oom_badness().",
        "Overcommit disables virtual memory and enforces flat contiguous physical memory allocation.",
        "The OOM killer reboots the machine whenever free memory drops below 10%.",
      ],
      correct: 1,
      explanation:
        "Linux uses optimistic memory allocation (overcommit): malloc() allocates virtual address space without reserving physical RAM immediately. If total demand exceeds physical memory plus swap when pages are written, the Linux OOM Killer evaluates process memory footprints and badness scores to kill a victim process safely.",
    },
  ];

  const handleSelectOption = (qId, optionIdx) => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) correctCount++;
    });
    return correctCount;
  };

  // ---------------------------------------------------------------------------
  // Engineering Mastery Checklist
  // ---------------------------------------------------------------------------
  const [checklist, setChecklist] = useState({
    demand_steps: true,
    minor_major: true,
    locality_workingset: false,
    thrashing_cliff: false,
    fifo_optimal_lru: false,
    clock_algorithm: false,
    belady_anomaly: false,
    cow_swapping: false,
    linux_psi_oom: false,
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
        currentModuleId="demand-paging"
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
                Module 11 · Core OS Internals
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                <RefreshCw size={12} className="text-stone-600" />
                Virtual Memory & Reclamation
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                <Activity size={12} className="text-blue-600" />
                Performance Engineering
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#18181b]">
              Demand Paging and Page Replacement
            </h1>

            <p className="mt-3 text-base sm:text-lg text-stone-600 max-w-4xl leading-relaxed">
              Demand paging enables an operating system to lazily map physical memory frames only when instructions
              actively reference them. When physical RAM is constrained, page replacement algorithms—FIFO, Optimal,
              LRU, and Clock—determine which frames remain resident and which are evicted, balancing memory efficiency
              against devastating thrashing collapses.
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-6 pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Lesson Focus</div>
                <div className="text-base font-bold text-stone-900 mt-0.5">6 Core Topics</div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Algorithms Analyzed</div>
                <div className="text-base font-bold text-orange-600 mt-0.5">FIFO, Opt, LRU, Clock</div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Interactive Engines</div>
                <div className="text-base font-bold text-stone-900 mt-0.5">4 Visual Simulators</div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">Lab Implementation</div>
                <div className="text-base font-bold text-stone-900 mt-0.5">Python 3 Simulator</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Switcher Navigation */}
        <div className="flex border-b border-[#e7e3da] mb-8 space-x-2 sm:space-x-4 overflow-x-auto">
          {[
            { id: "theory", label: "Curriculum & Lessons", icon: BookOpen },
            { id: "interactive-lab", label: "Interactive Simulators", icon: Sliders },
            { id: "checklist", label: "Mastery Checklist", icon: CheckCircle2, badge: `${completedChecklistCount}/9` },
            { id: "quiz", label: "Assessment Quiz", icon: HelpCircle },
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
            {/* Topic 1: Demand Paging and Page Faults */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  01
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Demand Paging and Page Fault Handling
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Lazy Allocation · Exception Handling · Minor vs Major Faults · Resident Set
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  In a pure <strong>demand-paging</strong> architecture, an operating system never preloads a virtual
                  page into physical memory (RAM) until an executing CPU instruction explicitly references an address
                  within that page. The OS can establish a multi-gigabyte virtual address space for a process while
                  initially backing it with zero physical memory frames.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-2">
                      <FileCode size={16} className="text-orange-600" />
                      Memory Backing Types
                    </h3>
                    <ul className="text-xs sm:text-sm space-y-1.5 text-stone-600 list-disc list-inside">
                      <li><strong>File-backed:</strong> Code segments, shared libraries (<code className="font-mono text-xs">libc.so</code>), and <code className="font-mono text-xs">mmap()</code> file mappings.</li>
                      <li><strong>Anonymous:</strong> Heap, stack, zero-fill on demand, and BSS data without file association.</li>
                      <li><strong>Shared Memory:</strong> IPC shared regions mapped into multiple process address spaces.</li>
                      <li><strong>Swap Backed:</strong> Anonymous pages evicted under memory pressure to persistent swap storage.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-2">
                      <Zap size={16} className="text-blue-600" />
                      Demand Paging vs Complete Loading
                    </h3>
                    <ul className="text-xs sm:text-sm space-y-1.5 text-stone-600 list-disc list-inside">
                      <li><strong>Cold Start Speed:</strong> Binaries launch instantly without loading unused functions or help menus.</li>
                      <li><strong>Memory Efficiency:</strong> Multiplexes more concurrent processes than physical RAM capacity alone.</li>
                      <li><strong>First-Touch Cost:</strong> The first memory instruction to each page triggers a page fault exception.</li>
                      <li><strong>Locality Tradeoff:</strong> Random memory jumps cause repeated page fault latency spikes.</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6">
                  The Complete 4-Step Page Fault Lifecycle
                </h3>
                <div className="p-5 rounded-2xl bg-[#1e1e24] text-stone-200 font-mono text-xs sm:text-sm space-y-3 border border-stone-800">
                  <div className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold shrink-0">1. CPU Access:</span>
                    <span>Instruction accesses virtual address <code className="text-amber-300">0x7ffec000</code>. Hardware MMU checks PTE. Present bit = 0.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold shrink-0">2. Trap to Kernel:</span>
                    <span>CPU freezes user execution, pushes PC and flags to kernel stack, and triggers Page Fault Exception (<code className="text-amber-300">#PF, vector 14</code>). Faulting VA saved in CR2 register.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold shrink-0">3. Kernel Resolution:</span>
                    <span>Linux <code className="text-amber-300">do_page_fault()</code> checks VMAs:
                      <br />• If VA is outside any VMA or permissions violated → send <code className="text-rose-400">SIGSEGV</code>.
                      <br />• If valid: allocate physical frame from buddy allocator; zero-fill (anon) or issue disk I/O (file/swap); write PFN into PTE; set Present=1.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold shrink-0">4. Instruction Retry:</span>
                    <span>Kernel executes <code className="text-amber-300">iret</code>. Hardware retries the identical instruction that faulted. Address translation completes successfully in 1-2 clock cycles via TLB!</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 mt-4">
                  <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-1">
                    <AlertTriangle size={15} className="text-amber-600" />
                    Minor vs Major Page Faults (Performance Distinction)
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                    <strong>Minor Fault (Soft):</strong> The page is already resident in RAM or needs zero-filling (e.g. initial heap touch or shared library already cached in page cache). Latency: <strong>~1-5 microseconds</strong>.
                    <br />
                    <strong>Major Fault (Hard):</strong> Requires blocking storage I/O to read 4KB from disk or swap. Latency: <strong>~5-10 milliseconds (HDD) or ~50-200 microseconds (NVMe SSD)</strong>—a 1000x to 100,000x execution slowdown!
                  </p>
                </div>
              </div>
            </section>

            {/* Topic 2: Locality, Working Sets and Thrashing */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  02
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Locality, Working Sets and Thrashing
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Temporal/Spatial Locality · Peter Denning's Model · The Thrashing Cliff · Resource Collapse
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Programs do not access their address space uniformly. They exhibit strong <strong>locality of reference</strong>:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-sm text-stone-900">Temporal Locality</div>
                    <div className="text-xs text-stone-600 mt-1">Data or instructions accessed recently are very likely to be accessed again in the near future (e.g., tight loop indices, stack frames).</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-sm text-stone-900">Spatial Locality</div>
                    <div className="text-xs text-stone-600 mt-1">Accessing memory address <em>A</em> makes nearby addresses <em>A+1, A+2</em> likely to be accessed soon (e.g., sequential array iterations).</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-sm text-stone-900">Sequential Locality</div>
                    <div className="text-xs text-stone-600 mt-1">A predictable stride through memory, enabling hardware and OS readahead mechanisms to prefetch data before faulting.</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6">
                  What is a Working Set?
                </h3>
                <p>
                  Introduced by Peter Denning, the <strong>Working Set</strong> <code className="font-mono text-xs">W(t, Δ)</code> is the collection
                  of distinct virtual pages referenced by a process over a sliding time window of length <code className="font-mono text-xs">Δ</code>.
                </p>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm font-mono text-stone-800">
                  Total Memory Demand = Σ |W_i(t, Δ)| for all active processes i
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6">
                  What is Thrashing? (The Performance Collapse)
                </h3>
                <p>
                  <strong>Thrashing</strong> occurs when total working set demand exceeds available physical memory frames:
                  <code className="font-mono text-xs">Σ |W_i| &gt; Total RAM</code>.
                </p>
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
                  <h4 className="text-sm font-bold text-rose-900 flex items-center gap-2 mb-2">
                    <AlertOctagon size={16} className="text-rose-600" />
                    Thrashing Symptoms & Death Spiral:
                  </h4>
                  <ol className="text-xs sm:text-sm text-rose-800 space-y-1 list-decimal list-inside">
                    <li>Process A faults and blocks on disk I/O to read page <em>X</em>.</li>
                    <li>OS evicts page <em>Y</em> belonging to Process B to satisfy Process A.</li>
                    <li>Process B wakes up, immediately faults on <em>Y</em>, and evicts page <em>Z</em> from Process A.</li>
                    <li>All processes spend 98%+ of their time blocked waiting on storage I/O queues. Useful CPU throughput collapses to near zero!</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Topic 3: Page-Replacement Algorithms */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  03
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Page-Replacement Algorithms
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    FIFO · Optimal (MIN) · LRU · Clock (Second Chance) · Belady's Anomaly
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  When physical memory has no free frames, the OS page-replacement policy selects a resident frame to
                  evict. If the selected frame has been modified (dirty), its contents must be written to backing storage before
                  reallocation.
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="min-w-full text-xs sm:text-sm border border-stone-200 rounded-xl overflow-hidden">
                    <thead className="bg-stone-100 text-stone-900 font-bold font-mono">
                      <tr>
                        <th className="py-2.5 px-3 text-left border-b border-stone-200">Algorithm</th>
                        <th className="py-2.5 px-3 text-left border-b border-stone-200">Eviction Decision</th>
                        <th className="py-2.5 px-3 text-left border-b border-stone-200">Practical Limitations</th>
                        <th className="py-2.5 px-3 text-left border-b border-stone-200">Belady Anomaly?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700 font-sans">
                      <tr className="hover:bg-stone-50">
                        <td className="py-2 px-3 font-bold text-stone-900 font-mono">FIFO</td>
                        <td className="py-2 px-3">Evicts the oldest resident page in arrival order.</td>
                        <td className="py-2 px-3">Ignores recency and frequency; evicts hot loop pages.</td>
                        <td className="py-2 px-3 font-mono font-bold text-rose-600">YES (Vulnerable)</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="py-2 px-3 font-bold text-stone-900 font-mono">Optimal (MIN)</td>
                        <td className="py-2 px-3">Evicts the page whose next reference is farthest in future.</td>
                        <td className="py-2 px-3">Impossible in real OS (requires clairvoyant future knowledge). Benchmark only.</td>
                        <td className="py-2 px-3 font-mono font-bold text-emerald-600">NO (Immune)</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="py-2 px-3 font-bold text-stone-900 font-mono">LRU</td>
                        <td className="py-2 px-3">Evicts page that has gone longest time without access.</td>
                        <td className="py-2 px-3">Hardware overhead: tracking exact timestamp or moving linked list nodes on every instruction is too slow.</td>
                        <td className="py-2 px-3 font-mono font-bold text-emerald-600">NO (Stack Algo)</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="py-2 px-3 font-bold text-stone-900 font-mono">Clock (2nd Chance)</td>
                        <td className="py-2 px-3">Circular list of frames with 1-bit MMU reference flag. Evicts on bit=0; clears on bit=1.</td>
                        <td className="py-2 px-3">Approximation of LRU; performance depends on scan frequency and workload loops.</td>
                        <td className="py-2 px-3 font-mono font-bold text-stone-600">Rare / Variant-dependent</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                  <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-1">
                    <Sparkles size={16} className="text-amber-600" />
                    Belady's Anomaly Explained
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                    Under FIFO replacement with reference string <code className="font-mono font-bold">1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5</code>:
                    <br />• With <strong>3 frames:</strong> 9 page faults.
                    <br />• With <strong>4 frames:</strong> 10 page faults!
                    <br />
                    More frames caused MORE page faults! Why? Because FIFO is not a <em>stack algorithm</em>. In stack algorithms (LRU, Optimal), the set of pages resident in an <em>N</em>-frame memory is guaranteed to be a strict subset of the pages resident in an <em>(N+1)</em>-frame memory at all times.
                  </p>
                </div>
              </div>
            </section>

            {/* Topic 4: Copy-On-Write and Memory Backing */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  04
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Copy-On-Write, Anonymous Memory & Swapping
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    fork() Optimization · COW Protection Faults · Active/Inactive Lists · Writeback Throttling
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Modern operating systems avoid copying large address spaces eagerly. In Unix systems, <code className="font-mono text-xs">fork()</code> creates
                  a child process by duplicating the parent's page tables while pointing both tables to the <strong>identical physical frames</strong>.
                </p>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 my-4">
                  <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-2">
                    <Split size={16} className="text-orange-600" />
                    How Copy-On-Write (COW) Works
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-stone-700">
                    <div>1. <strong>Read-Only Remapping:</strong> During <code className="font-mono text-xs">fork()</code>, all writable pages in both parent and child PTEs are marked read-only (<code className="font-mono text-xs">R/W bit = 0</code>).</div>
                    <div>2. <strong>Read Sharing:</strong> Both processes read shared physical memory at native hardware speed with zero duplicate RAM overhead.</div>
                    <div>3. <strong>Protection Fault:</strong> When parent or child attempts a write instruction, hardware raises a page protection fault (<code className="font-mono text-xs">CR2</code> contains target VA, error code indicates write on read-only page).</div>
                    <div>4. <strong>Private Duplication:</strong> Kernel verifies VMA is marked writable. It allocates 1 new physical frame, copies the 4KB data into it, updates the faulting process's PTE to point to the new frame with <code className="font-mono text-xs">R/W = 1</code>, and resumes execution.</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6">
                  Page Reclamation & Swapping Architecture
                </h3>
                <p>
                  Linux maintains dual LRU lists for memory reclamation:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200">
                    <div className="font-bold text-sm text-blue-900">File-Backed Memory Reclamation</div>
                    <p className="text-xs text-blue-800 mt-1">
                      <strong>Clean Pages:</strong> Simply dropped from RAM (unmapped). If needed later, they are read back from the filesystem.
                      <br />
                      <strong>Dirty Pages:</strong> Must be written to disk storage by background flusher threads (<code className="font-mono text-xs">pdflush</code>) before frames can be reused.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
                    <div className="font-bold text-sm text-amber-900">Anonymous Memory & Swap</div>
                    <p className="text-xs text-amber-800 mt-1">
                      Anonymous pages (heap/stack) have no file on disk. To reclaim an anonymous frame, the kernel must write its 4KB contents into a <strong>swap partition or swap file</strong>. If swap is disabled, anonymous memory cannot be reclaimed until the process terminates!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Topic 5: Linux Memory Pressure & Measurement */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                  05
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Linux Memory Pressure & Production Observability
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    vmstat · /proc/pressure/memory (PSI) · Overcommit Modes · OOM Killer badness
                  </p>
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Monitoring virtual memory requires examining more than just <code className="font-mono text-xs">free -h</code>.
                  Production engineers correlate page fault counters, swap I/O, and CPU stall pressure:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-mono text-xs">
                  <div className="p-4 rounded-2xl bg-[#1e1e24] text-stone-200 border border-stone-800">
                    <div className="text-orange-400 font-bold mb-2">Essential Linux Inspection Commands</div>
                    <div className="space-y-1.5">
                      <div><span className="text-emerald-400">$</span> vmstat 1 5 <span className="text-stone-400"># si/so swap rates, bi/bo, wa</span></div>
                      <div><span className="text-emerald-400">$</span> /usr/bin/time -v ./app <span className="text-stone-400"># Minor/major faults</span></div>
                      <div><span className="text-emerald-400">$</span> cat /proc/meminfo <span className="text-stone-400"># MemAvailable, Active/Inactive</span></div>
                      <div><span className="text-emerald-400">$</span> cat /proc/pressure/memory <span className="text-stone-400"># PSI stall %</span></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-sans">
                    <div className="font-bold text-sm text-stone-900 mb-2">Linux Overcommit Policies</div>
                    <ul className="text-xs space-y-1 text-stone-700">
                      <li><code className="font-mono font-bold">vm.overcommit_memory = 0</code>: Heuristic overcommit (default). Rejects obvious over-allocations.</li>
                      <li><code className="font-mono font-bold">vm.overcommit_memory = 1</code>: Always overcommit. Optimistic allocation for sparse apps (e.g., Redis).</li>
                      <li><code className="font-mono font-bold">vm.overcommit_memory = 2</code>: Strict zero-overcommit. Total virtual allocation cannot exceed <code className="font-mono">Swap + (RAM * overcommit_ratio)</code>.</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
                  <h4 className="text-sm font-bold text-rose-900 flex items-center gap-2 mb-1">
                    <ShieldCheck size={16} className="text-rose-600" />
                    How the Linux OOM Killer Selects Victims
                  </h4>
                  <p className="text-xs sm:text-sm text-rose-800 leading-relaxed">
                    When all reclaimable pages are exhausted and allocation fails, the kernel invokes <code className="font-mono font-bold">out_of_memory()</code>.
                    It computes an <code className="font-mono font-bold">oom_badness()</code> score (0 to 1000) for every process based on resident RAM, swap usage, and <code className="font-mono font-bold">/proc/[pid]/oom_score_adj</code> (-1000 protects daemons from being killed; +1000 makes a process the first sacrifice). The highest scoring task is sent <code className="font-mono font-bold">SIGKILL</code>.
                  </p>
                </div>
              </div>
            </section>

            {/* Topic 6: Practical Simulator Lab Code */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold font-mono">
                    06
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-stone-900">
                      Practical Simulator Lab (Python 3)
                    </h2>
                    <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                      page_replacement_lab.py · FIFO · Optimal · LRU · Clock · Automated Benchmark
                    </p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleCopyCode(
                      "python-lab-code",
                      `from collections import deque

def simulate_fifo(refs, capacity):
    """First-In, First-Out page replacement."""
    frames = []
    queue = deque()
    faults = 0
    for page in refs:
        if page in frames:
            continue
        faults += 1
        if len(frames) < capacity:
            frames.append(page)
            queue.append(page)
        else:
            victim = queue.popleft()
            idx = frames.index(victim)
            frames[idx] = page
            queue.append(page)
    return faults

def simulate_optimal(refs, capacity):
    """Belady's Optimal (MIN) algorithm using future knowledge."""
    frames = []
    faults = 0
    for i, page in enumerate(refs):
        if page in frames:
            continue
        faults += 1
        if len(frames) < capacity:
            frames.append(page)
            continue
        
        # Evict page whose next reference is farthest in future
        farthest_idx = -1
        victim_frame_idx = 0
        for f_idx, resident in enumerate(frames):
            next_use = float('inf')
            for future_pos in range(i + 1, len(refs)):
                if refs[future_pos] == resident:
                    next_use = future_pos
                    break
            if next_use > farthest_idx:
                farthest_idx = next_use
                victim_frame_idx = f_idx
        frames[victim_frame_idx] = page
    return faults

def simulate_lru(refs, capacity):
    """Least Recently Used page replacement."""
    frames = []
    recency = []  # Least recent at index 0
    faults = 0
    for page in refs:
        if page in frames:
            recency.remove(page)
            recency.append(page)
            continue
        faults += 1
        if len(frames) < capacity:
            frames.append(page)
            recency.append(page)
        else:
            victim = recency.pop(0)
            idx = frames.index(victim)
            frames[idx] = page
            recency.append(page)
    return faults

def simulate_clock(refs, capacity):
    """Clock / Second-Chance page replacement."""
    frames = [None] * capacity
    bits = [0] * capacity
    hand = 0
    faults = 0
    for page in refs:
        if page in frames:
            bits[frames.index(page)] = 1
            continue
        faults += 1
        # Check for empty slot
        if None in frames:
            empty_idx = frames.index(None)
            frames[empty_idx] = page
            bits[empty_idx] = 1
            continue
        
        # Search for victim
        while True:
            if bits[hand] == 0:
                frames[hand] = page
                bits[hand] = 1
                hand = (hand + 1) % capacity
                break
            else:
                bits[hand] = 0
                hand = (hand + 1) % capacity
    return faults

if __name__ == "__main__":
    workloads = {
        "Locality Loop": ([1, 2, 1, 3, 1, 2, 1, 4, 1, 2, 1], 3),
        "Belady Anomaly @ 3 Frames": ([1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5], 3),
        "Belady Anomaly @ 4 Frames": ([1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5], 4),
        "Cyclic Thrashing (N=4, M=3)": ([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4], 3),
    }

    print("=" * 65)
    print("PAGE REPLACEMENT ALGORITHM BENCHMARK")
    print("=" * 65)
    for title, (refs, cap) in workloads.items():
        f_opt = simulate_optimal(refs, cap)
        f_lru = simulate_lru(refs, cap)
        f_clock = simulate_clock(refs, cap)
        f_fifo = simulate_fifo(refs, cap)
        print(f"\\nWorkload: {title} (Total Refs: {len(refs)}, Capacity: {cap})")
        print(f"  Optimal : {f_opt:2d} faults ({f_opt/len(refs)*100:5.1f}%)")
        print(f"  LRU     : {f_lru:2d} faults ({f_lru/len(refs)*100:5.1f}%)")
        print(f"  Clock   : {f_clock:2d} faults ({f_clock/len(refs)*100:5.1f}%)")
        print(f"  FIFO    : {f_fifo:2d} faults ({f_fifo/len(refs)*100:5.1f}%)")`
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors"
                >
                  {copiedCodeId === "python-lab-code" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedCodeId === "python-lab-code" ? "Copied" : "Copy Python Lab"}</span>
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-[#1e1e24] text-stone-200 font-mono text-xs overflow-x-auto border border-stone-800">
                <pre>{`from collections import deque

def simulate_fifo(refs, capacity):
    """First-In, First-Out page replacement."""
    frames, queue, faults = [], deque(), 0
    for page in refs:
        if page in frames: continue
        faults += 1
        if len(frames) < capacity:
            frames.append(page); queue.append(page)
        else:
            victim = queue.popleft()
            frames[frames.index(victim)] = page
            queue.append(page)
    return faults

def simulate_optimal(refs, capacity):
    """Belady's Optimal (MIN) algorithm using future knowledge."""
    frames, faults = [], 0
    for i, page in enumerate(refs):
        if page in frames: continue
        faults += 1
        if len(frames) < capacity:
            frames.append(page); continue
        
        farthest_idx, victim_frame_idx = -1, 0
        for f_idx, resident in enumerate(frames):
            next_use = float('inf')
            for future_pos in range(i + 1, len(refs)):
                if refs[future_pos] == resident:
                    next_use = future_pos
                    break
            if next_use > farthest_idx:
                farthest_idx, victim_frame_idx = next_use, f_idx
        frames[victim_frame_idx] = page
    return faults

def simulate_lru(refs, capacity):
    """Least Recently Used page replacement."""
    frames, recency, faults = [], [], 0
    for page in refs:
        if page in frames:
            recency.remove(page); recency.append(page)
            continue
        faults += 1
        if len(frames) < capacity:
            frames.append(page); recency.append(page)
        else:
            victim = recency.pop(0)
            frames[frames.index(victim)] = page
            recency.append(page)
    return faults

def simulate_clock(refs, capacity):
    """Clock / Second-Chance page replacement."""
    frames = [None] * capacity
    bits = [0] * capacity
    hand = 0
    faults = 0
    for page in refs:
        if page in frames:
            bits[frames.index(page)] = 1
            continue
        faults += 1
        if None in frames:
            empty_idx = frames.index(None)
            frames[empty_idx] = page
            bits[empty_idx] = 1
            continue
        while True:
            if bits[hand] == 0:
                frames[hand] = page
                bits[hand] = 1
                hand = (hand + 1) % capacity
                break
            else:
                bits[hand] = 0
                hand = (hand + 1) % capacity
    return faults`}</pre>
              </div>
            </section>
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 2: INTERACTIVE SIMULATORS                                         */}
        {/* ===================================================================== */}
        {activeTab === "interactive-lab" && (
          <div className="space-y-10">
            {/* Interactive Engine 1: Live Step-by-Step Replacement Engine */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                    <Sliders className="text-orange-600" size={24} />
                    Live Page-Replacement Stepper & Comparator
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">
                    Step through reference strings instruction-by-instruction and observe frame allocations, hits, faults, and evictions.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setStepIndex((prev) => Math.max(0, prev - 1))}
                    disabled={stepIndex === 0}
                    className="p-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100 disabled:opacity-40 transition-colors"
                    title="Step Backward"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-600 text-white font-mono text-xs font-bold hover:bg-orange-700 transition-colors shadow-xs"
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                    <span>{isPlaying ? "Pause" : "Play Trace"}</span>
                  </button>
                  <button
                    onClick={() => setStepIndex((prev) => Math.min(activeRefs.length - 1, prev + 1))}
                    disabled={stepIndex >= activeRefs.length - 1}
                    className="p-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100 disabled:opacity-40 transition-colors"
                    title="Step Forward"
                  >
                    <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={() => {
                      setStepIndex(0);
                      setIsPlaying(false);
                    }}
                    className="p-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100 transition-colors"
                    title="Reset to Step 1"
                  >
                    <RotateCcw size={16} />
                  </button>
                </div>
              </div>

              {/* Controls Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-600 mb-1.5 uppercase">
                    Workload Preset:
                  </label>
                  <select
                    value={selectedPreset}
                    onChange={(e) => {
                      setSelectedPreset(e.target.value);
                      setStepIndex(0);
                      setIsPlaying(false);
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 text-xs sm:text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {Object.entries(PRESET_WORKLOADS).map(([key, val]) => (
                      <option key={key} value={key}>
                        {val.name}
                      </option>
                    ))}
                  </select>
                  <div className="text-[11px] text-stone-500 mt-1 italic">
                    {PRESET_WORKLOADS[selectedPreset]?.desc}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-stone-600 mb-1.5 uppercase">
                    Algorithm:
                  </label>
                  <div className="grid grid-cols-4 gap-1 bg-stone-100 p-1 rounded-xl">
                    {[
                      { id: "optimal", label: "OPT" },
                      { id: "lru", label: "LRU" },
                      { id: "clock", label: "CLOCK" },
                      { id: "fifo", label: "FIFO" },
                    ].map((algo) => (
                      <button
                        key={algo.id}
                        onClick={() => {
                          setCurrentAlgo(algo.id);
                          setStepIndex(0);
                          setIsPlaying(false);
                        }}
                        className={`py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
                          currentAlgo === algo.id
                            ? "bg-white text-orange-600 shadow-2xs"
                            : "text-stone-600 hover:text-stone-900"
                        }`}
                      >
                        {algo.label}
                      </button>
                    ))}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1 font-mono">
                    Currently: {currentAlgo.toUpperCase()} replacement
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-stone-600 mb-1.5 uppercase">
                    Physical Frame Capacity: {frameCapacity} Frames
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={2}
                      max={5}
                      step={1}
                      value={frameCapacity}
                      onChange={(e) => {
                        setFrameCapacity(parseInt(e.target.value, 10));
                        setStepIndex(0);
                        setIsPlaying(false);
                      }}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                    <span className="font-mono font-bold text-sm text-stone-800 shrink-0 w-6 text-center">
                      {frameCapacity}
                    </span>
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">
                    Try Belady string at 3 vs 4 frames!
                  </div>
                </div>
              </div>

              {/* Memory Reference Sequence Ribbon */}
              <div className="mb-6">
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Reference Stream Timeline (Step {stepIndex + 1} of {activeRefs.length})</span>
                  <span className="font-semibold text-stone-800">
                    Target Page: <strong className="text-orange-600 font-mono text-sm">P{activeRefs[stepIndex]}</strong>
                  </span>
                </div>
                <div className="flex gap-1.5 overflow-x-auto pb-2">
                  {activeRefs.map((refPage, idx) => {
                    const isCurrent = idx === stepIndex;
                    const isPast = idx < stepIndex;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setStepIndex(idx);
                          setIsPlaying(false);
                        }}
                        className={`flex flex-col items-center justify-center min-w-[38px] h-14 rounded-xl border transition-all font-mono ${
                          isCurrent
                            ? "bg-orange-600 text-white border-orange-600 ring-2 ring-orange-300 scale-105 shadow-sm"
                            : isPast
                            ? "bg-stone-100 text-stone-700 border-stone-200"
                            : "bg-white text-stone-400 border-dashed border-stone-300 hover:border-stone-400"
                        }`}
                      >
                        <span className="text-[10px] opacity-75">#{idx + 1}</span>
                        <span className="text-sm font-bold">P{refPage}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Frame State Visualization Grid */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-stone-600 uppercase">
                      Physical RAM Frames
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase ${
                        currentStepData.isHit
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-rose-100 text-rose-800 border border-rose-300"
                      }`}
                    >
                      {currentStepData.isHit ? "✓ HIT (Resident)" : "✗ PAGE FAULT"}
                    </span>
                    {currentStepData.evictedPage && (
                      <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 border border-amber-300 text-xs font-mono">
                        Evicted P{currentStepData.evictedPage}
                      </span>
                    )}
                  </div>

                  <div className="text-xs font-mono text-stone-500">
                    Algorithm: <strong className="text-stone-900 uppercase">{currentAlgo}</strong>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {Array.from({ length: frameCapacity }).map((_, fIdx) => {
                    const resident = currentStepData.frames ? currentStepData.frames[fIdx] : null;
                    const isTargetResident = resident === currentStepData.page;
                    const clockBit = currentStepData.clockBits ? currentStepData.clockBits[fIdx] : 0;
                    const isClockHand = currentAlgo === "clock" && currentStepData.clockHand === fIdx;

                    return (
                      <div
                        key={fIdx}
                        className={`relative p-4 rounded-xl border flex flex-col justify-between items-center transition-all ${
                          isTargetResident
                            ? "bg-orange-50 border-orange-400 ring-2 ring-orange-200 shadow-xs"
                            : resident !== null && resident !== undefined
                            ? "bg-white border-stone-200"
                            : "bg-stone-100/60 border-dashed border-stone-300"
                        }`}
                      >
                        {isClockHand && (
                          <div className="absolute -top-2.5 px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-mono font-bold shadow-xs">
                            Hand ⏱
                          </div>
                        )}

                        <div className="w-full flex items-center justify-between text-[11px] font-mono text-stone-500">
                          <span>Frame {fIdx}</span>
                          {currentAlgo === "clock" && resident !== null && (
                            <span
                              className={`px-1.5 py-0.2 rounded font-bold ${
                                clockBit === 1 ? "bg-emerald-100 text-emerald-800" : "bg-stone-200 text-stone-700"
                              }`}
                            >
                              bit={clockBit}
                            </span>
                          )}
                        </div>

                        <div className="my-3 text-center">
                          {resident !== null && resident !== undefined ? (
                            <span className="text-2xl font-black font-mono text-stone-900">
                              Page {resident}
                            </span>
                          ) : (
                            <span className="text-sm font-mono text-stone-400 italic">
                              [Empty Frame]
                            </span>
                          )}
                        </div>

                        <div className="text-[10px] font-mono text-stone-500">
                          {isTargetResident ? "Active Target" : resident ? "Resident" : "Unmapped"}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Side-by-Side Algorithm Comparison Summary Table */}
              <div>
                <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <BarChart2 size={16} className="text-orange-600" />
                  Comparative Benchmark Across Entire Reference Stream (Capacity: {frameCapacity})
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: "optimal", name: "Optimal (MIN)", desc: "Furthest-in-future benchmark", tag: "Theoretical Bound" },
                    { id: "lru", name: "LRU", desc: "Least Recently Used recency", tag: "Temporal Locality" },
                    { id: "clock", name: "Clock (2nd Chance)", desc: "Circular bit approximation", tag: "Low Overhead" },
                    { id: "fifo", name: "FIFO", desc: "First-In First-Out queue", tag: "Belady Vulnerable" },
                  ].map((item) => {
                    const stats = comparisonSummary[item.id] || { faults: 0, hits: 0, faultRate: "0.0" };
                    const isSelected = currentAlgo === item.id;

                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          setCurrentAlgo(item.id);
                          setStepIndex(0);
                          setIsPlaying(false);
                        }}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-white border-orange-400 ring-2 ring-orange-200 shadow-xs"
                            : "bg-stone-50 border-stone-200 hover:bg-stone-100/70"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-mono font-bold mb-1">
                          <span className={isSelected ? "text-orange-600" : "text-stone-800"}>
                            {item.name}
                          </span>
                          <span className="text-[10px] text-stone-500 bg-stone-200/60 px-1.5 py-0.5 rounded">
                            {item.tag}
                          </span>
                        </div>
                        <div className="text-2xl font-black font-mono text-stone-900 my-1">
                          {stats.faults} <span className="text-xs font-normal text-stone-500">faults</span>
                        </div>
                        <div className="text-xs font-mono text-stone-600 flex items-center justify-between pt-2 border-t border-stone-200">
                          <span>Rate: <strong>{stats.faultRate}%</strong></span>
                          <span>Hits: {stats.hits}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Interactive Engine 2: Working Set & Thrashing Cliff Visualizer */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-200">
                <Activity className="text-orange-600" size={24} />
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Working Set & The Thrashing Cliff Visualizer
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    Demonstrates how memory demand exceeding allocated physical frames precipitates a catastrophic 100% page-fault rate.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Sliders */}
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                      <span>Process Working Set Size (W):</span>
                      <span className="text-orange-600">{workingSetPages} Unique Pages</span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={8}
                      value={workingSetPages}
                      onChange={(e) => setWorkingSetPages(parseInt(e.target.value, 10))}
                      className="w-full accent-orange-600 cursor-pointer"
                    />
                    <div className="text-[11px] text-stone-500 mt-1">
                      Pages iterated sequentially in a tight loop: P1 → P2 → ... → P{workingSetPages}.
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                      <span>Allocated Physical Frames (M):</span>
                      <span className="text-blue-600">{allocatedFrames} Frames</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={8}
                      value={allocatedFrames}
                      onChange={(e) => setAllocatedFrames(parseInt(e.target.value, 10))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                    <div className="text-[11px] text-stone-500 mt-1">
                      RAM capacity granted to this process by the OS.
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                      <span>Loop Iterations:</span>
                      <span className="text-stone-900">{cyclicIterations} Cycles</span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={6}
                      value={cyclicIterations}
                      onChange={(e) => setCyclicIterations(parseInt(e.target.value, 10))}
                      className="w-full accent-stone-700 cursor-pointer"
                    />
                    <div className="text-[11px] text-stone-500 mt-1">
                      Total memory references: {thrashingMetrics.totalRefs}.
                    </div>
                  </div>
                </div>

                {/* Real-time Status Card */}
                <div
                  className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                    thrashingMetrics.isThrashing
                      ? "bg-rose-50/70 border-rose-300 ring-2 ring-rose-200"
                      : "bg-emerald-50/70 border-emerald-300"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600">
                        Operating Regime
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase ${
                          thrashingMetrics.isThrashing
                            ? "bg-rose-600 text-white animate-pulse"
                            : "bg-emerald-600 text-white"
                        }`}
                      >
                        {thrashingMetrics.isThrashing ? "⚠ THRASHING COLLAPSE" : "✓ HEALTHY (FITS IN RAM)"}
                      </span>
                    </div>

                    <div className="text-2xl font-black font-mono text-stone-900">
                      {thrashingMetrics.faultRate}% Page Fault Rate
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                      {thrashingMetrics.isThrashing
                        ? `Capacity (M=${allocatedFrames}) is less than Working Set (W=${workingSetPages}). Every single reference to page 1 evicts page 2, which then immediately faults on the next cycle, triggering an endless 100% fault cascade!`
                        : `Capacity (M=${allocatedFrames}) accommodates Working Set (W=${workingSetPages}). After cold start (only ${workingSetPages} faults), the working set stays resident in RAM with 0% subsequent faults!`}
                    </p>
                  </div>

                  {/* CPU vs I/O Bar Visualization */}
                  <div className="mt-4 pt-4 border-t border-stone-200">
                    <div className="flex justify-between text-xs font-mono text-stone-700 mb-1.5">
                      <span>Useful CPU Instruction Time: <strong>{thrashingMetrics.cpuEfficiency}%</strong></span>
                      <span>Page Fault I/O Wait Time: <strong>{thrashingMetrics.ioWaitTime}%</strong></span>
                    </div>
                    <div className="w-full h-4 rounded-full bg-stone-200 overflow-hidden flex">
                      <div
                        style={{ width: `${thrashingMetrics.cpuEfficiency}%` }}
                        className="bg-emerald-500 transition-all duration-300"
                        title="Useful CPU Time"
                      />
                      <div
                        style={{ width: `${thrashingMetrics.ioWaitTime}%` }}
                        className="bg-rose-500 transition-all duration-300"
                        title="I/O Page Fault Stalling"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Engine 3: Linux Memory Pressure Pipeline */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-200">
                <Gauge className="text-orange-600" size={24} />
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Linux Memory Pressure & Reclamation Pipeline
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    Simulate how the kernel responds as free pages drop past watermarks: from kswapd lazy reclamation to the OOM Killer.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-stone-700 mb-2">
                    <span>Memory Pressure Level:</span>
                    <span className="text-orange-600">{pressureLevel}% Pressure</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={98}
                    value={pressureLevel}
                    onChange={(e) => setPressureLevel(parseInt(e.target.value, 10))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1">
                    <span>0% (Abundant Free Memory)</span>
                    <span>50% (pages_low)</span>
                    <span>85% (pages_min)</span>
                    <span>100% (Critical OOM)</span>
                  </div>
                </div>

                <div className={`p-6 rounded-2xl border ${memoryPressureState.badgeColor}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-sm font-bold font-mono">
                      {memoryPressureState.zone}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/80 border">
                      Watermark: {memoryPressureState.watermark}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/80 border">
                      PSI: {memoryPressureState.psiStatus}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm font-mono mt-4 pt-3 border-t border-black/10">
                    <div>
                      <div className="text-stone-500 uppercase text-[10px]">kswapd Daemon:</div>
                      <div className="font-bold text-stone-900 mt-0.5">{memoryPressureState.kswapd}</div>
                    </div>
                    <div>
                      <div className="text-stone-500 uppercase text-[10px]">File-Backed Cache:</div>
                      <div className="font-bold text-stone-900 mt-0.5">{memoryPressureState.filePages}</div>
                    </div>
                    <div>
                      <div className="text-stone-500 uppercase text-[10px]">Anonymous & Swap:</div>
                      <div className="font-bold text-stone-900 mt-0.5">{memoryPressureState.anonPages}</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/10 text-xs sm:text-sm font-sans text-stone-800 leading-relaxed">
                    <strong>Kernel Action:</strong> {memoryPressureState.action}
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
                    Linux Demand Paging Terminal Sandbox
                  </h2>
                </div>
                <div className="text-xs font-mono text-stone-500">Live Emulated Output</div>
              </div>

              {/* Command Presets */}
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "python3 page_replacement_lab.py",
                  "/usr/bin/time -v ./workload_app",
                  "vmstat 1 5",
                  "cat /proc/pressure/memory",
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
                    $ {cmd}
                  </button>
                ))}
              </div>

              <div className="rounded-2xl bg-[#1e1e24] text-stone-200 p-5 font-mono text-xs sm:text-sm overflow-x-auto border border-stone-800 shadow-inner">
                <div className="flex items-center gap-2 text-stone-400 pb-3 mb-3 border-b border-stone-800">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs text-stone-300">bash — 80x24</span>
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
                  Engineering Competency Checklist
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Track your mastery of demand paging mechanisms, replacement algorithms, and memory pressure metrics.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-stone-700">
                  Progress: {completedChecklistCount} / 9 Complete
                </span>
                <div className="w-32 h-2.5 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
                  <div
                    className="h-full bg-emerald-500 transition-all duration-300"
                    style={{ width: `${(completedChecklistCount / 9) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: "demand_steps",
                  title: "Demand Paging 4-Step Handling Sequence",
                  desc: "Explain address translation fault, trap vector 14, kernel do_page_fault resolution, and iret instruction retry.",
                },
                {
                  id: "minor_major",
                  title: "Minor vs Major Page Faults",
                  desc: "Distinguish microsecond soft faults (zero-fill, shared pages) from millisecond hard faults requiring disk I/O.",
                },
                {
                  id: "locality_workingset",
                  title: "Temporal Locality & Peter Denning's Working Set",
                  desc: "Formulate the working set window W(t, Δ) and quantify memory demand across concurrent workloads.",
                },
                {
                  id: "thrashing_cliff",
                  title: "Thrashing Performance Collapse",
                  desc: "Identify the root cause of thrashing when Σ|W_i| exceeds RAM and explain why useful CPU throughput drops to zero.",
                },
                {
                  id: "fifo_optimal_lru",
                  title: "FIFO, Optimal & LRU Implementation",
                  desc: "Implement queue-based FIFO, furthest-in-future Optimal, and timestamp/recency-ordered LRU in Python.",
                },
                {
                  id: "clock_algorithm",
                  title: "Clock (Second Chance) Approximation",
                  desc: "Explain circular frame buffer scanning, reference bit clearing, and second-chance eviction logic.",
                },
                {
                  id: "belady_anomaly",
                  title: "Belady's Anomaly & Stack Algorithms",
                  desc: "Prove why FIFO exhibits Belady's anomaly with 3 vs 4 frames and why LRU is mathematically immune.",
                },
                {
                  id: "cow_swapping",
                  title: "Copy-on-Write (COW) & Memory Backing",
                  desc: "Trace COW protection faults after fork(), anonymous zero-filling, and dirty page writeback throttling.",
                },
                {
                  id: "linux_psi_oom",
                  title: "Linux PSI & OOM Killer Badness",
                  desc: "Inspect memory pressure stall information (PSI) and explain how oom_score and oom_score_adj select sacrifice tasks.",
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
        {/* TAB 4: ASSESSMENT QUIZ                                                */}
        {/* ===================================================================== */}
        {activeTab === "quiz" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
                  <HelpCircle className="text-orange-600" size={24} />
                  Module 11 Assessment: Demand Paging & Algorithms
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Test your understanding of page faults, replacement policies, thrashing dynamics, and Linux memory pressure.
                </p>
              </div>

              {showQuizResults ? (
                <div className="flex items-center gap-3">
                  <div className="text-sm font-mono font-bold text-stone-800">
                    Final Score:{" "}
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
            onClick={() => navigate("/learning/os/virtual-memory")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 font-medium text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 10 (Virtual Memory & Paging)</span>
          </button>

          <button
            onClick={() => navigate("/learning/os/filesystems")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-sm transition-colors shadow-xs"
          >
            <span>Next: Module 12 (File Systems & I/O)</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        title="Nova OS Intelligence: Demand Paging & Algorithms"
        defaultMessage="Hello! Ask me any question about Demand Paging, minor vs major page faults, FIFO / Optimal / LRU / Clock algorithms, Belady's Anomaly, or memory thrashing!"
      />
    </div>
  );
}
