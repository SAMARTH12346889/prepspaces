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
  Cpu,
  Power,
  SlidersHorizontal,
  Flame,
  AlertOctagon,
  Gauge,
  Activity,
  Server,
  RefreshCw,
  Terminal,
  Share2,
  AlertTriangle,
  Play,
  FolderTree,
  FileText,
  Binary,
  Compass,
  Database,
  Globe,
  HardDrive,
  Target,
  Send,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 24 (FINAL CAPSTONE)                */
/* Final Capstone — Operating Systems Engineering Lab                         */
/* Architecture · Bounded Concurrency · Benchmarking · Security · Portfolio   */
/* -------------------------------------------------------------------------- */

export default function OSFinalCapstone() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [activeTab, setActiveTab] = useState("tracks");
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  // Sync with global topic index
  useSyncedTopic(47);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: Capstone Project Track Selector                               */
  /* -------------------------------------------------------------------------- */
  const [selectedTrack, setSelectedTrack] = useState("projectC");

  const projectTracks = {
    projectA: {
      id: "projectA",
      title: "Project A — CPU Scheduling and Workload Simulator",
      difficulty: "Beginner-Friendly",
      modules: "Module 6 (Scheduling, fairness, Gantt modeling)",
      desc: "Implement FCFS, SJF, SRTF, Round Robin, Priority, and Multi-Level Feedback Queues (MLFQ). Measure turnaround time, waiting time, response time, and starvation avoidance under bursty workloads.",
      architecture: "Input Trace Parser -> Ready Queue Engine -> Dispatcher -> Metrics Collector -> Report Generator",
      deliverables: "Trace generator, scheduling engine in C/C++/Python, comparative ASCII Gantt charts, variance report.",
      starterSnippet: `// Process PCB definition for Scheduling Simulator
struct process {
    int pid;
    int arrival_time;
    int burst_time;
    int remaining_time;
    int priority;
    int finish_time;
    int waiting_time;
};`,
    },
    projectB: {
      id: "projectB",
      title: "Project B — Linux Performance Diagnostic Toolkit",
      difficulty: "Intermediate",
      modules: "Modules 17–18 (Linux internals, procfs, PSI stalls, perf)",
      desc: "Build an interactive CLI tool that parses /proc and /sys to identify CPU saturation, swap thrashing, I/O wait bottlenecks, and lock contention, generating an evidence-based diagnostic health summary.",
      architecture: "/proc/stat & /proc/pressure -> Sampler Daemon -> Threshold Engine -> Rich TUI Report",
      deliverables: "Standalone C/Go/Rust binary, /proc/pressure/io parser, mock workload stress test, automated triage engine.",
      starterSnippet: `// Parse Linux Pressure Stall Information (PSI)
FILE *f = fopen("/proc/pressure/memory", "r");
char line[256];
while (fgets(line, sizeof(line), f)) {
    // some avg10=0.00 avg60=0.00 avg300=0.00 total=1420
    printf("PSI Metric: %s", line);
}
fclose(f);`,
    },
    projectC: {
      id: "projectC",
      title: "Project C — Bounded Concurrent Worker Queue (Recommended)",
      difficulty: "Advanced & High Impact",
      modules: "Modules 7–8, 21 (Multithreading, atomics, futex, backpressure)",
      desc: "Build a high-performance bounded producer-consumer queue with synchronization, explicit backpressure rejection, graceful drain shutdown, and benchmark mutex vs atomic CAS vs per-thread batching.",
      architecture: "Producer Pool -> Circular Bounded Ring Buffer -> Consumer Worker Pool -> Metrics Accumulator",
      deliverables: "ThreadSanitizer-clean C11 code, backpressure tests, p99 latency benchmark, Amdahl's scaling comparison.",
      starterSnippet: `// Bounded Thread-Safe Ring Buffer
struct worker_queue {
    pthread_mutex_t lock;
    pthread_cond_t not_empty;
    pthread_cond_t not_full;
    int head, tail, count, capacity;
    int *buffer;
    bool shutdown;
};`,
    },
    projectD: {
      id: "projectD",
      title: "Project D — Virtual Memory & Page-Replacement Simulator",
      difficulty: "Intermediate",
      modules: "Modules 9–12 (Paging, page tables, TLB, page faults)",
      desc: "Simulate multi-level page tables, TLB hit/miss latency, and page replacement policies (FIFO, LRU, Optimal, Clock). Evaluate Belady's Anomaly and memory working-set locality curves.",
      architecture: "Virtual Address Stream -> TLB Translation -> Page Table Walk -> Page Fault Handler -> Eviction Clock",
      deliverables: "Trace analyzer (Valgrind lackey traces), Belady anomaly reproduction, fault rate vs physical frame curves.",
      starterSnippet: `// Page Table Entry with Dirty & Referenced bits
struct pte {
    uint32_t pfn : 20;
    uint32_t present : 1;
    uint32_t referenced : 1;
    uint32_t dirty : 1;
};`,
    },
    projectE: {
      id: "projectE",
      title: "Project E — Filesystem Durability & Crash Recovery Lab",
      difficulty: "Advanced",
      modules: "Modules 13–16 (Crash consistency, fsync, journaling, WAL)",
      desc: "Build a write-ahead log (WAL) or crash-resilient key-value storage engine using atomic rename, checksummed extents, and fsync ordering. Simulate power cuts using fault injection and prove clean recovery.",
      architecture: "Write Intent -> Checksummed Journal -> fsync() -> Main Extent -> Crash Invalidator",
      deliverables: "Crash injection harness, write-ordering validation, recovery audit report, zero-corruption proof.",
      starterSnippet: `// Atomic durable file write pattern
int fd = open("file.tmp", O_WRONLY | O_CREAT | O_TRUNC, 0644);
write(fd, payload, size);
fsync(fd);
close(fd);
rename("file.tmp", "file.dat"); // POSIX atomic directory metadata replacement`,
    },
    projectF: {
      id: "projectF",
      title: "Project F — Concurrent Event-Driven TCP Server",
      difficulty: "Advanced",
      modules: "Module 19 (epoll, non-blocking I/O, backpressure, socket buffers)",
      desc: "Implement a concurrent TCP server using Linux epoll event loops. Handle 10,000 idle connections, measure tail latency under bursts, and implement application-level backpressure.",
      architecture: "epoll_wait() Event Loop -> Non-blocking Socket Handlers -> Worker Pool -> Flow Controller",
      deliverables: "epoll server in C, wrk / bench client harness, p99 latency breakdown under socket buffer saturation.",
      starterSnippet: `// Edge-triggered epoll registration
struct epoll_event ev;
ev.events = EPOLLIN | EPOLLET;
ev.data.fd = client_fd;
epoll_ctl(epoll_fd, EPOLL_CTL_ADD, client_fd, &ev);`,
    },
    projectG: {
      id: "projectG",
      title: "Project G — xv6 Educational Kernel Extension",
      difficulty: "Systems Specialist",
      modules: "Modules 17, 22–23 (Kernel internals, RISC-V trap handling, xv6)",
      desc: "Extend the MIT xv6/RISC-V kernel with an approved subsystem extension: priority scheduler, shared memory page allocation (`mmap`), or system call tracing (`strace`), validated in QEMU.",
      architecture: "User Syscall -> RISC-V ecall Trap -> kernel/syscall.c Dispatch -> Kernel Subsystem -> QEMU",
      deliverables: "Clean git patch against xv6-riscv, user-space test suite, `make grade` validation output, technical report.",
      starterSnippet: `// Kernel subsystem implementation in xv6
uint64 sys_memstat(void) {
    struct proc *p = myproc();
    return p->sz; // Return virtual memory footprint in bytes
}`,
    },
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: Bounded Worker Queue & Backpressure Simulation (Project C)    */
  /* -------------------------------------------------------------------------- */
  const [queueCapacity, setQueueCapacity] = useState(8);
  const [numWorkers, setNumWorkers] = useState(4);
  const [producerBurstRate, setProducerBurstRate] = useState(6);
  const [currentQueueOccupancy, setCurrentQueueOccupancy] = useState(3);
  const [queueLog, setQueueLog] = useState([
    { id: 1, text: "System initialized. 4 worker threads idling in futex wait.", type: "ok" },
  ]);

  const queueMetrics = useMemo(() => {
    const isFull = currentQueueOccupancy >= queueCapacity;
    const isEmpty = currentQueueOccupancy <= 0;
    const backpressureStatus = isFull ? "ACTIVATED (Queue Full - Rejecting / Blocking)" : "NORMAL (Capacity Available)";
    return {
      isFull,
      isEmpty,
      occupancyPct: ((currentQueueOccupancy / queueCapacity) * 100).toFixed(0),
      backpressureStatus,
    };
  }, [currentQueueOccupancy, queueCapacity]);

  const handleQueueProduce = () => {
    if (currentQueueOccupancy >= queueCapacity) {
      setQueueLog((prev) => [
        { id: Date.now(), text: `BACKPRESSURE TRIGGERED: Queue full (${queueCapacity}/${queueCapacity})! Producer rejected/blocked.`, type: "alert" },
        ...prev.slice(0, 5),
      ]);
    } else {
      const added = Math.min(queueCapacity - currentQueueOccupancy, producerBurstRate);
      setCurrentQueueOccupancy((prev) => prev + added);
      setQueueLog((prev) => [
        { id: Date.now(), text: `Produced +${added} tasks into bounded buffer (Occupancy: ${currentQueueOccupancy + added}/${queueCapacity}).`, type: "ok" },
        ...prev.slice(0, 5),
      ]);
    }
  };

  const handleQueueConsume = () => {
    if (currentQueueOccupancy <= 0) {
      setQueueLog((prev) => [
        { id: Date.now(), text: "Buffer empty! Consumer threads blocked on pthread_cond_wait(&not_empty).", type: "idle" },
        ...prev.slice(0, 5),
      ]);
    } else {
      const processed = Math.min(currentQueueOccupancy, numWorkers);
      setCurrentQueueOccupancy((prev) => Math.max(0, prev - processed));
      setQueueLog((prev) => [
        { id: Date.now(), text: `${numWorkers} workers dispatched. Processed -${processed} tasks (Remaining: ${Math.max(0, currentQueueOccupancy - processed)}).`, type: "ok" },
        ...prev.slice(0, 5),
      ]);
    }
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: Benchmark & Tail Latency Distribution Visualizer               */
  /* -------------------------------------------------------------------------- */
  const [concurrencyConcurrency, setConcurrencyConcurrency] = useState(8);
  const [syncMechanism, setSyncMechanism] = useState("atomic"); // single, mutex, atomic

  const benchMetrics = useMemo(() => {
    if (syncMechanism === "single") {
      return {
        throughput: "125,000 ops/s",
        p50: "7.8 us",
        p95: "12.4 us",
        p99: "18.2 us",
        speedup: "1.0x (Baseline)",
        speedupColor: "text-stone-700",
      };
    } else if (syncMechanism === "mutex") {
      const scale = concurrencyConcurrency * 0.45;
      return {
        throughput: `${(180000 * scale).toFixed(0)} ops/s`,
        p50: "18.4 us",
        p95: "74.1 us",
        p99: "142.8 us",
        speedup: `${scale.toFixed(1)}x`,
        speedupColor: "text-amber-700",
      };
    } else {
      // Atomic Lock-Free
      const scale = concurrencyConcurrency * 0.92;
      return {
        throughput: `${(420000 * scale).toFixed(0)} ops/s`,
        p50: "1.9 us",
        p95: "3.4 us",
        p99: "6.1 us",
        speedup: `${scale.toFixed(1)}x`,
        speedupColor: "text-emerald-700",
      };
    }
  }, [syncMechanism, concurrencyConcurrency]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: Final Submission Checklist & Readiness Estimator             */
  /* -------------------------------------------------------------------------- */
  const [deliverables, setDeliverables] = useState({
    proposal: true,
    architecture: true,
    sourceCode: true,
    testSuite: true,
    failureNotes: false,
    benchmarkResults: false,
    threatModel: false,
    engineeringReport: false,
    liveDemo: false,
  });

  const toggleDeliverable = (k) => {
    setDeliverables((prev) => ({ ...prev, [k]: !prev[k] }));
  };

  const readinessScore = useMemo(() => {
    const total = Object.keys(deliverables).length;
    const completed = Object.values(deliverables).filter(Boolean).length;
    return {
      completed,
      total,
      pct: ((completed / total) * 100).toFixed(0),
    };
  }, [deliverables]);

  /* -------------------------------------------------------------------------- */
  /* QUIZ STATE                                                                 */
  /* -------------------------------------------------------------------------- */
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "1. Why must a project establish a baseline?",
      options: [
        "A. To make the report longer",
        "B. To compare the candidate against a known reference under equivalent conditions",
        "C. To guarantee the candidate is faster",
      ],
      correct: 1,
      explanation:
        "A baseline (such as a single-threaded version or standard mutex) provides a scientific point of comparison. Without a controlled baseline tested under equivalent conditions, performance claims are meaningless.",
    },
    {
      id: "q2",
      question: "2. Which statement about concurrency testing is correct?",
      options: [
        "A. One successful run proves race freedom",
        "B. ThreadSanitizer finds every possible concurrency bug",
        "C. Stress tests and race detectors provide useful evidence but cannot prove all behavior correct",
      ],
      correct: 2,
      explanation:
        "Concurrency bugs are non-deterministic. While ThreadSanitizer and stress tests provide strong empirical evidence, they explore only executed execution interleavings and cannot mathematically prove the absence of all races.",
    },
    {
      id: "q3",
      question: "3. What should a benchmark report include?",
      options: [
        "A. Only the best run",
        "B. The workload, environment, methodology, repeated measurements, and limitations",
        "C. Only a screenshot of a terminal",
      ],
      correct: 1,
      explanation:
        "Rigorous systems benchmarking requires recording hardware topology, kernel version, compiler flags, fixed workloads, warm-up runs, median results, tail latency (p95/p99), and measurement variances.",
    },
    {
      id: "q4",
      question: "4. A component fails when its queue reaches capacity. What should its design specify?",
      options: [
        "A. A documented full-queue policy and test cases",
        "B. Nothing if the queue is usually empty",
        "C. That the error can be ignored",
      ],
      correct: 0,
      explanation:
        "Failure handling is an explicit part of interface design. A bounded queue contract must document whether full queues block, drop oldest, reject with an error code (backpressure), or signal an event.",
    },
    {
      id: "q5",
      question: "5. What makes the capstone portfolio-ready?",
      options: [
        "A. A large codebase regardless of quality",
        "B. A working implementation supported by tests, benchmarks, documentation, and a reproducible demonstration",
        "C. A presentation without source code",
      ],
      correct: 1,
      explanation:
        "Distinguished engineering portfolios demonstrate verified correctness, comprehensive automated testing, reproducible benchmark results, documented design trade-offs, and clear technical communication.",
    },
  ];

  const handleSelectQuiz = (qId, optionIdx) => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-[#ea580c]/15">
      {/* Top Header & Navigation */}
      <header className="sticky top-0 z-40 bg-[#f6f4ee]/90 backdrop-blur-md border-b border-[#e7e3da] px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/learning")}
            className="p-2 rounded-xl hover:bg-stone-200/60 transition-colors text-stone-700 hover:text-stone-900"
            title="Back to Learning Center"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#ea580c] flex items-center justify-center text-white shadow-xs">
              <Award size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-wider uppercase text-[#ea580c]">
                  Operating Systems Master Course · Module 24
                </span>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange-100 text-[#ea580c] border border-orange-200/60">
                  Final Engineering Lab
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-stone-900 leading-tight">
                Final Capstone — Operating Systems Engineering Lab
              </h1>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
        </div>
      </header>

      {/* Course Sub-Navigation Bar */}
      <ModuleNav
        track="os"
        currentModuleId="final-capstone"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="Capstone Advisor"
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 space-y-10">
        {/* Module Hero Banner */}
        <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />
          <div className="space-y-4 max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 text-[#ea580c] text-xs font-bold border border-orange-200/80">
              <Target size={13} />
              <span>Final Course Project · Portfolio Engineering · Systems Verification</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Design, Implement, Benchmark, and Defend a Complete Systems Component
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              This is the final milestone of the PrepSpaces Operating Systems Engineering curriculum. You will
              synthesize CPU scheduling, virtual memory, concurrency, filesystems, networking, and performance
              diagnostics to build an end-to-end systems component supported by repeatable benchmarks, ThreadSanitizer
              verification, and a professional engineering report.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da]/80">
                <div className="text-xs text-stone-500 font-medium">Approved Tracks</div>
                <div className="text-sm font-bold text-stone-800 mt-0.5">7 Systems Projects</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da]/80">
                <div className="text-xs text-stone-500 font-medium">Methodology</div>
                <div className="text-sm font-bold text-stone-800 mt-0.5">Baseline vs Candidate</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da]/80">
                <div className="text-xs text-stone-500 font-medium">Quality Bar</div>
                <div className="text-sm font-bold text-stone-800 mt-0.5">ThreadSanitizer Clean</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da]/80">
                <div className="text-xs text-stone-500 font-medium">Deliverable</div>
                <div className="text-sm font-bold text-stone-800 mt-0.5">12-Section Tech Report</div>
              </div>
            </div>
          </div>
        </section>

        {/* Capstone Section Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#e7e3da]">
          {[
            { id: "tracks", label: "1. Approved Project Tracks (A–G)" },
            { id: "workflow", label: "2. 7-Phase Implementation Workflow" },
            { id: "worker-queue", label: "3. Bounded Queue & Backpressure Sim" },
            { id: "benchmarking", label: "4. Benchmarking & Tail Latency" },
            { id: "repo-structure", label: "5. Repository & Architecture" },
            { id: "deliverables", label: "6. Deliverables & Readiness Checklist" },
            { id: "report-template", label: "7. Engineering Report & Rubric" },
            { id: "quiz", label: "Final Knowledge Check" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-[#ea580c] text-white shadow-xs"
                  : "bg-white text-stone-600 hover:text-stone-900 border border-[#e7e3da] hover:border-stone-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ================================================================== */}
        {/* SECTION 1: Approved Project Tracks                                 */}
        {/* ================================================================== */}
        {activeTab === "tracks" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Section 1</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Select Your Approved Capstone Project Track
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Choose one project track matching your interests and hardware constraints. Project C (Concurrent
                Worker Queue) is the recommended default for multicore concurrency, while Project G is ideal for
                kernel-focused portfolios.
              </p>
            </div>

            {/* Track Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {Object.keys(projectTracks).map((k) => (
                <button
                  key={k}
                  onClick={() => setSelectedTrack(k)}
                  className={`p-2.5 rounded-xl text-xs font-bold text-center border transition-all ${
                    selectedTrack === k
                      ? "bg-[#ea580c] text-white border-[#ea580c] shadow-xs"
                      : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-white"
                  }`}
                >
                  {k.replace("project", "Track ")}
                </button>
              ))}
            </div>

            {/* Selected Track Details */}
            <div className="p-5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da] space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-bold text-stone-900">{projectTracks[selectedTrack].title}</h4>
                  <span className="text-xs text-stone-500 font-medium">
                    Demonstrates: {projectTracks[selectedTrack].modules}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-[#ea580c] border border-orange-200">
                  {projectTracks[selectedTrack].difficulty}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {projectTracks[selectedTrack].desc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-[#e7e3da] space-y-1">
                  <span className="font-bold text-stone-900">Component Architecture:</span>
                  <div className="font-mono text-[11px] text-stone-700">
                    {projectTracks[selectedTrack].architecture}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#e7e3da] space-y-1">
                  <span className="font-bold text-stone-900">Expected Deliverables:</span>
                  <div className="text-stone-600">{projectTracks[selectedTrack].deliverables}</div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold text-stone-700">
                  <span>Architecture Starter Blueprint</span>
                  <button
                    onClick={() => copyToClipboard(projectTracks[selectedTrack].starterSnippet, "starter_code")}
                    className="flex items-center gap-1 text-[#ea580c] hover:text-[#ea580c]/80"
                  >
                    {copiedSnippet === "starter_code" ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedSnippet === "starter_code" ? "Copied" : "Copy Blueprint"}</span>
                  </button>
                </div>
                <div className="bg-[#18181b] text-stone-200 p-3.5 rounded-xl font-mono text-xs overflow-x-auto">
                  {projectTracks[selectedTrack].starterSnippet}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* SECTION 2: 7-Phase Implementation Workflow                         */}
        {/* ================================================================== */}
        {activeTab === "workflow" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Section 2</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                The 7-Phase Systems Engineering Workflow
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Follow the structured lifecycle used in industrial systems development: from initial problem
                framing through correctness verification and benchmark defense.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  phase: "Phase 1: Scope & Requirements",
                  action: "Define functional behavior, quality goals, and explicit non-goals (what will NOT be implemented).",
                  deliverable: "docs/requirements.md & Problem Statement",
                },
                {
                  phase: "Phase 2: Architecture & Design Contracts",
                  action: "Draw component interactions, define opaque APIs, and document mathematical invariants (e.g. 0 <= size <= C).",
                  deliverable: "docs/architecture.md & Invariant Spec",
                },
                {
                  phase: "Phase 3: Minimum Correct Implementation",
                  action: "Implement the smallest working version first. Keep build reproducible with a clean Makefile / CMakeLists.",
                  deliverable: "Working baseline source code (v0.1.0)",
                },
                {
                  phase: "Phase 4: Correctness & Concurrency Testing",
                  action: "Execute deterministic unit tests, capacity boundaries, invalid inputs, and ThreadSanitizer (-fsanitize=thread).",
                  deliverable: "Automated test suite & zero data race report",
                },
                {
                  phase: "Phase 5: Benchmarking & Profiling",
                  action: "Compare candidate against baseline under identical workloads. Measure median throughput and tail latency (p99).",
                  deliverable: "benchmarks/results & Latency Curves",
                },
                {
                  phase: "Phase 6: Security & Reliability Review",
                  action: "Check buffer bounds, integer overflows, permissions, resource exhaustion, and graceful shutdown handling.",
                  deliverable: "docs/threat-model.md & STRIDE Analysis",
                },
                {
                  phase: "Phase 7: Final Report & Portfolio Presentation",
                  action: "Assemble repository, complete the 12-section technical report, and prepare a concise terminal demonstration.",
                  deliverable: "docs/engineering-report.md & Live Demo",
                },
              ].map((p, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-[#ea580c] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="space-y-1 text-xs">
                    <span className="font-bold text-sm text-stone-900">{p.phase}</span>
                    <p className="text-stone-600 leading-relaxed">{p.action}</p>
                    <div className="font-mono text-[11px] text-[#ea580c] font-semibold pt-1">
                      Deliverable: {p.deliverable}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* SECTION 3: Bounded Queue & Backpressure Simulation (Project C)     */}
        {/* ================================================================== */}
        {activeTab === "worker-queue" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Section 3 · Project C Spotlight</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Bounded Worker Queue &amp; Explicit Backpressure Engine
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Unbounded queues cause memory exhaustion and catastrophic latency spikes. A production systems
                queue enforces a rigid capacity bound \(C\) and defines deterministic behavior when full:
                blocking producers or rejecting with an error (backpressure).
              </p>
            </div>

            {/* Interactive Simulator: Bounded Queue Backpressure */}
            <div className="p-5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da] space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                    <Activity size={16} className="text-[#ea580c]" />
                    <span>Interactive Bounded Worker Queue Harness</span>
                  </h4>
                  <p className="text-xs text-stone-500">
                    Observe condition variable signaling and backpressure activation when capacity is exhausted.
                  </p>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 font-bold">
                    Occupancy: {currentQueueOccupancy} / {queueCapacity} ({queueMetrics.occupancyPct}%)
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-lg font-bold ${
                      queueMetrics.isFull ? "bg-red-100 text-red-800" : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {queueMetrics.isFull ? "FULL" : "OK"}
                  </span>
                </div>
              </div>

              {/* Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-stone-600 font-medium">Queue Capacity (C):</span>
                    <span className="font-mono font-bold text-stone-900">{queueCapacity} slots</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="16"
                    value={queueCapacity}
                    onChange={(e) => setQueueCapacity(parseInt(e.target.value, 10))}
                    className="w-full accent-[#ea580c] cursor-pointer"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-stone-600 font-medium">Consumer Workers:</span>
                    <span className="font-mono font-bold text-stone-900">{numWorkers} threads</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="8"
                    value={numWorkers}
                    onChange={(e) => setNumWorkers(parseInt(e.target.value, 10))}
                    className="w-full accent-[#ea580c] cursor-pointer"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-stone-600 font-medium">Producer Burst:</span>
                    <span className="font-mono font-bold text-stone-900">+{producerBurstRate} tasks</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="8"
                    value={producerBurstRate}
                    onChange={(e) => setProducerBurstRate(parseInt(e.target.value, 10))}
                    className="w-full accent-[#ea580c] cursor-pointer"
                  />
                </div>
              </div>

              {/* Visual Ring Buffer Slots */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                  Ring Buffer Slot Visualization
                </div>
                <div className="grid grid-cols-8 sm:grid-cols-16 gap-1.5">
                  {Array.from({ length: queueCapacity }).map((_, i) => {
                    const isOccupied = i < currentQueueOccupancy;
                    return (
                      <div
                        key={i}
                        className={`h-9 rounded-lg border flex items-center justify-center font-mono text-[10px] font-bold transition-all ${
                          isOccupied
                            ? "bg-[#ea580c] text-white border-[#ea580c] shadow-2xs"
                            : "bg-white text-stone-300 border-stone-200"
                        }`}
                      >
                        {isOccupied ? `T${i + 1}` : "empty"}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleQueueProduce}
                  className="px-4 py-2 rounded-xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-bold text-xs shadow-2xs inline-flex items-center gap-1.5"
                >
                  <Send size={14} />
                  <span>Produce Tasks (+{producerBurstRate})</span>
                </button>
                <button
                  onClick={handleQueueConsume}
                  className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-900 text-white font-bold text-xs shadow-2xs inline-flex items-center gap-1.5"
                >
                  <Cpu size={14} />
                  <span>Dispatch Workers (-{numWorkers})</span>
                </button>
                <button
                  onClick={() => {
                    setCurrentQueueOccupancy(0);
                    setQueueLog([{ id: Date.now(), text: "Buffer reset to empty.", type: "ok" }]);
                  }}
                  className="px-3 py-2 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold"
                >
                  Reset Buffer
                </button>
              </div>

              {/* Queue Log */}
              <div className="p-3.5 rounded-xl bg-white border border-[#e7e3da] font-mono text-xs space-y-1">
                <div className="text-[10px] uppercase font-bold text-stone-400">Backpressure Event Log:</div>
                {queueLog.map((log) => (
                  <div
                    key={log.id}
                    className={`${
                      log.type === "alert"
                        ? "text-red-600 font-bold"
                        : log.type === "idle"
                        ? "text-amber-700"
                        : "text-stone-700"
                    }`}
                  >
                    &gt; {log.text}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* SECTION 4: Benchmarking & Tail Latency                             */}
        {/* ================================================================== */}
        {activeTab === "benchmarking" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Section 4</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Performance Benchmarking &amp; Tail Latency Distributions
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Systems performance is not a single number. Engineers must report median throughput alongside
                tail latency percentiles (p50, p95, p99) to detect lock contention queuing cliffs.
              </p>
            </div>

            {/* Interactive Benchmark Simulator */}
            <div className="p-5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da] space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                    <BarChart2 size={16} className="text-[#ea580c]" />
                    <span>Synchronization Mechanism Benchmark Comparator</span>
                  </h4>
                  <p className="text-xs text-stone-500">
                    Compare Single-Threaded Baseline vs POSIX Mutex vs Lock-Free Atomic CAS across thread counts.
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  {[
                    { id: "single", label: "Baseline (1 Thread)" },
                    { id: "mutex", label: "POSIX Mutex" },
                    { id: "atomic", label: "Lock-Free Atomic" },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setSyncMechanism(btn.id)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                        syncMechanism === btn.id
                          ? "bg-[#ea580c] text-white shadow-2xs"
                          : "bg-white text-stone-600 border border-stone-300 hover:bg-stone-50"
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Concurrency Slider */}
              {syncMechanism !== "single" && (
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-stone-600 font-medium">Worker Thread Count:</span>
                    <span className="font-mono font-bold text-stone-900">{concurrencyConcurrency} threads</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="32"
                    step="2"
                    value={concurrencyConcurrency}
                    onChange={(e) => setConcurrencyConcurrency(parseInt(e.target.value, 10))}
                    className="w-full accent-[#ea580c] cursor-pointer"
                  />
                </div>
              )}

              {/* Metrics Output Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-[#e7e3da]">
                  <span className="text-stone-400">Throughput:</span>
                  <div className="text-base font-bold text-stone-900 mt-1">{benchMetrics.throughput}</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#e7e3da]">
                  <span className="text-stone-400">p50 Latency:</span>
                  <div className="text-base font-bold text-stone-900 mt-1">{benchMetrics.p50}</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#e7e3da]">
                  <span className="text-stone-400">p95 Latency:</span>
                  <div className="text-base font-bold text-stone-900 mt-1">{benchMetrics.p95}</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#e7e3da]">
                  <span className="text-stone-400">p99 Latency:</span>
                  <div className="text-base font-bold text-stone-900 mt-1">{benchMetrics.p99}</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#e7e3da]">
                  <span className="text-stone-400">Speedup:</span>
                  <div className={`text-base font-bold mt-1 ${benchMetrics.speedupColor}`}>
                    {benchMetrics.speedup}
                  </div>
                </div>
              </div>

              <div className="text-xs text-stone-600 p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                {syncMechanism === "mutex"
                  ? "Observation: While mutex throughput scales to a peak, p99 tail latency explodes (142us) due to futex syscall sleep overhead and lock convoying."
                  : syncMechanism === "atomic"
                  ? "Observation: Lock-free atomic fetch-and-add achieves 10x lower tail latency (6.1us) by eliminating context switches and operating entirely within CPU cache lines."
                  : "Baseline: Single-threaded reference provides stable latency with zero synchronization overhead, establishing the speedup benchmark."}
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* SECTION 5: Repository Structure & Architecture                     */}
        {/* ================================================================== */}
        {activeTab === "repo-structure" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Section 5</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Standard Systems Repository Layout &amp; Build Reproducibility
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                A professional systems submission must be clean, structured, and immediately reproducible
                by an independent evaluator on standard Linux environments.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-stone-700">
                <span>Directory Architecture Tree (os-engineering-capstone)</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `os-engineering-capstone/
├── README.md
├── LICENSE
├── Makefile
├── docs/
│   ├── requirements.md
│   ├── architecture.md
│   ├── design-decisions.md
│   ├── threat-model.md
│   └── engineering-report.md
├── src/
│   ├── queue.c
│   ├── queue.h
│   └── worker.c
├── tests/
│   ├── test_functional.c
│   ├── test_boundary.c
│   └── test_concurrency.c
├── benchmarks/
│   ├── baseline/
│   ├── workloads/
│   └── results/
└── evidence/
    ├── test-results/
    └── tsan-reports/`,
                      "repo_tree"
                    )
                  }
                  className="flex items-center gap-1 text-[#ea580c] hover:text-[#ea580c]/80"
                >
                  {copiedSnippet === "repo_tree" ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedSnippet === "repo_tree" ? "Copied" : "Copy Tree"}</span>
                </button>
              </div>

              <div className="bg-[#18181b] text-stone-200 p-4 rounded-2xl font-mono text-xs overflow-x-auto shadow-inner leading-relaxed">
                <div>os-engineering-capstone/</div>
                <div>├── <span className="text-purple-400">README.md</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// Prerequisites, build &amp; benchmark reproducibility commands</span></div>
                <div>├── <span className="text-purple-400">Makefile</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// Clean targets: make, make test, make tsan, make bench</span></div>
                <div>├── <span className="text-blue-400">docs/</span></div>
                <div>│ &nbsp;&nbsp;├── requirements.md &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// Functional &amp; non-functional specs, non-goals</span></div>
                <div>│ &nbsp;&nbsp;├── architecture.md &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// Component block diagram &amp; invariant definitions</span></div>
                <div>│ &nbsp;&nbsp;├── threat-model.md &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// STRIDE boundaries, permissions, exhaustion defenses</span></div>
                <div>│ &nbsp;&nbsp;└── <span className="text-yellow-300">engineering-report.md</span> &nbsp;&nbsp;<span className="text-stone-500">// Formal 12-section technical submission</span></div>
                <div>├── <span className="text-blue-400">src/</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// Core implementation (opaque headers, clean modularity)</span></div>
                <div>├── <span className="text-blue-400">tests/</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// Unit, boundary, and ThreadSanitizer stress harnesses</span></div>
                <div>├── <span className="text-blue-400">benchmarks/</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// Baseline comparisons, repeated trials, CSV outputs</span></div>
                <div>└── <span className="text-blue-400">evidence/</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-stone-500">// Saved test logs, terminal outputs, and live demonstration</span></div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* SECTION 6: Deliverables & Readiness Checklist                     */}
        {/* ================================================================== */}
        {activeTab === "deliverables" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Section 6</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Capstone Submission Deliverables &amp; Portfolio Readiness
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                The 9 mandatory portfolio deliverables. Track your completion progress before submitting.
              </p>
            </div>

            {/* Readiness Score Bar */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-stone-800">
                  Submission Readiness: {readinessScore.completed} of {readinessScore.total} Deliverables Complete
                </span>
                <span className="font-mono font-bold text-[#ea580c]">{readinessScore.pct}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-stone-200 overflow-hidden">
                <div
                  className="h-full bg-[#ea580c] transition-all duration-300"
                  style={{ width: `${readinessScore.pct}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {[
                { k: "proposal", label: "1. Approved project proposal and measurable acceptance criteria" },
                { k: "architecture", label: "2. Architecture diagram and documented design decisions" },
                { k: "sourceCode", label: "3. Working source code with reproducible setup instructions" },
                { k: "testSuite", label: "4. Automated test suite and saved test evidence" },
                { k: "failureNotes", label: "5. Failure-analysis notes, including investigated defects" },
                { k: "benchmarkResults", label: "6. Baseline and candidate benchmark results with analysis" },
                { k: "threatModel", label: "7. Security considerations, limitations, and trade-offs" },
                { k: "engineeringReport", label: "8. Complete 12-section engineering report with references" },
                { k: "liveDemo", label: "9. Short live terminal demonstration showing the project working" },
              ].map((item) => (
                <div
                  key={item.k}
                  onClick={() => toggleDeliverable(item.k)}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                    deliverables[item.k]
                      ? "bg-emerald-50/50 border-emerald-300 text-stone-900"
                      : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  <div
                    className={`mt-0.5 rounded-md p-0.5 ${
                      deliverables[item.k] ? "bg-emerald-600 text-white" : "border border-stone-300 bg-white"
                    }`}
                  >
                    <Check size={12} className={deliverables[item.k] ? "opacity-100" : "opacity-0"} />
                  </div>
                  <span className="font-medium leading-relaxed">{item.label}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* SECTION 7: Engineering Report Template & 100-Point Rubric          */}
        {/* ================================================================== */}
        {activeTab === "report-template" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Section 7</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Operating Systems Engineering Capstone Report &amp; Assessment Rubric
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Evaluators grade capstone submissions against a 100-point rubric focusing on engineering evidence,
                verified invariants, and rigorous failure analysis.
              </p>
            </div>

            {/* Rubric Breakdown */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-stone-900">100-Point Capstone Assessment Rubric</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-stone-500">Problem &amp; Reqs</div>
                  <div className="text-base font-bold text-stone-900 mt-0.5">10 pts</div>
                  <div className="text-[10px] text-stone-400">Scope &amp; acceptance criteria</div>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-stone-500">Architecture Quality</div>
                  <div className="text-base font-bold text-stone-900 mt-0.5">15 pts</div>
                  <div className="text-[10px] text-stone-400">Abstractions &amp; invariants</div>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-stone-500">Implementation</div>
                  <div className="text-base font-bold text-stone-900 mt-0.5">20 pts</div>
                  <div className="text-[10px] text-stone-400">Clean, structured code</div>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-stone-500">Testing &amp; Failure</div>
                  <div className="text-base font-bold text-stone-900 mt-0.5">20 pts</div>
                  <div className="text-[10px] text-stone-400">Automated tests &amp; TSAN</div>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-stone-500">Benchmarking</div>
                  <div className="text-base font-bold text-stone-900 mt-0.5">15 pts</div>
                  <div className="text-[10px] text-stone-400">Fair baseline &amp; p99 latency</div>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-stone-500">Security &amp; Threats</div>
                  <div className="text-base font-bold text-stone-900 mt-0.5">10 pts</div>
                  <div className="text-[10px] text-stone-400">STRIDE &amp; limits review</div>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-stone-500">Report &amp; Live Demo</div>
                  <div className="text-base font-bold text-stone-900 mt-0.5">10 pts</div>
                  <div className="text-[10px] text-stone-400">Clear reasoning &amp; demo</div>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300">
                  <div className="text-emerald-800 font-semibold">Passing Standard</div>
                  <div className="text-base font-bold text-emerald-950 mt-0.5">&ge; 70 / 100</div>
                  <div className="text-[10px] text-emerald-700">Zero critical defects</div>
                </div>
              </div>
            </div>

            {/* Template Copy Block */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-stone-700">
                <span>Final Engineering Report Template (engineering-report.md)</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `# Operating Systems Engineering Capstone Report

## 1. Executive Summary
- Project Title: Bounded High-Throughput Concurrent Worker Queue
- Problem Solved: Eliminated memory exhaustion and reduced tail latency under bursty producer loads.
- Main Result: 3.4x throughput scaling with lock-free atomic buffers while preserving FIFO ordering.
- Most Important Limitation: Bounded buffer size fixed at compile time.

## 2. Requirements & Scope
- Functional: Enqueue, Dequeue, Graceful Shutdown, Backpressure rejection.
- Invariants: 0 <= queue_size <= Capacity C at all times.
- Explicit Non-Goals: Dynamic heap resizing during concurrent execution.

## 3. Architecture & Design
- Components: Producer Pool -> Bounded Ring Buffer -> Consumer Pool -> Metrics Sink.
- Synchronization: Mutex vs Atomic CAS ring buffer comparison.

## 4. Implementation
- Language: C11 / POSIX Threads
- Build: gcc -O3 -pthread -Wall -Wextra

## 5. Testing & Failure Analysis
- Functional tests: FIFO ordering verified across 1M operations.
- Concurrency: Zero ThreadSanitizer data race warnings across 16 threads.
- Failure recovery: Backpressure rejection returns -1 EAGAIN safely.

## 6. Benchmarking & Results
- Hardware: 8-Core AMD Ryzen, Linux 6.8
- Throughput: 420k ops/sec (Atomic) vs 180k ops/sec (Contended Mutex)
- Tail Latency: p99 = 6.1 us (Atomic) vs 142.8 us (Mutex)

## 7. Security & Reliability
- Integer overflow checks on task counters; memory bounds validated.

## 8. Conclusion & References
- All acceptance criteria verified with automated test suites.`,
                      "final_report_template"
                    )
                  }
                  className="flex items-center gap-1 text-[#ea580c] hover:text-[#ea580c]/80"
                >
                  {copiedSnippet === "final_report_template" ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedSnippet === "final_report_template" ? "Copied" : "Copy Template"}</span>
                </button>
              </div>
              <div className="bg-[#18181b] text-stone-300 p-4 rounded-2xl font-mono text-xs leading-relaxed max-h-56 overflow-y-auto">
                <div className="text-purple-400 font-bold"># Operating Systems Engineering Capstone Report</div>
                <div>1. Executive Summary</div>
                <div>2. Requirements &amp; Scope</div>
                <div>3. Architecture &amp; Design (Invariants)</div>
                <div>4. Implementation Details</div>
                <div>5. Testing &amp; Concurrency Failure Analysis (TSAN)</div>
                <div>6. Benchmarking &amp; Tail Latency (p50/p95/p99)</div>
                <div>7. Security, Reliability &amp; Trade-offs</div>
                <div>8. Conclusion &amp; References</div>
                <div>/* ... see complete template via Copy Template ... */</div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* KNOWLEDGE CHECK QUIZ                                               */}
        {/* ================================================================== */}
        {activeTab === "quiz" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Assessment</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Module 24 Final Capstone Knowledge Check
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm">
                Validate your systems engineering methodology, baselining discipline, and portfolio readiness.
              </p>
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const userAns = quizAnswers[q.id];
                const isAnswered = userAns !== undefined;
                const isCorrect = userAns === q.correct;

                return (
                  <div key={q.id} className="p-5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da] space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-white border border-[#e7e3da] text-stone-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-sm font-semibold text-stone-900 leading-snug">{q.question}</p>
                    </div>

                    <div className="space-y-2 pl-9">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle =
                          "bg-white border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-stone-300";

                        if (isAnswered) {
                          if (optIdx === q.correct && showQuizResults) {
                            btnStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 font-bold";
                          } else if (userAns === optIdx) {
                            btnStyle =
                              showQuizResults && !isCorrect
                                ? "bg-red-50 border-red-400 text-red-900 font-bold"
                                : "bg-orange-50 border-[#ea580c] text-orange-950 font-bold";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => !showQuizResults && handleSelectQuiz(q.id, optIdx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${btnStyle}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {showQuizResults && (
                      <div
                        className={`p-3 rounded-xl text-xs space-y-1 ${
                          isCorrect ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-900"
                        }`}
                      >
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
          </section>
        )}

        {/* Footer Navigation Bar */}
        <div className="pt-6 border-t border-[#e7e3da] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/os/capstone")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 font-medium text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 23 (Capstone: xv6 RISC-V Component)</span>
          </button>

          <button
            onClick={() => navigate("/learning/os")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-sm transition-colors shadow-xs"
          >
            <span>Course Complete: Operating Systems Engineering Hub</span>
            <CheckCircle2 size={16} />
          </button>
        </div>
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        title="Nova OS Intelligence: Final Capstone Lab"
        defaultMessage="Hello! Ask me any question about selecting your capstone project track (A through G), designing bounded queues with backpressure, configuring ThreadSanitizer, measuring tail latency, or assembling your 12-section technical engineering report!"
      />
    </div>
  );
}
