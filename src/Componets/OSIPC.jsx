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
  Radio,
  ZapOff,
  Share2,
  Bell,
  MessageSquare,
  Repeat,
  Power,
  Pause,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 15                                 */
/* IPC, Pipes, Shared Memory and Signals                                      */
/* Unix Sockets · FIFOs · shm_open · POSIX Semaphores · sigaction · Workers   */
/* -------------------------------------------------------------------------- */

export default function OSIPC() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [activeLesson, setActiveLesson] = useState("fundamentals");
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  // Sync with global topic index
  useSyncedTopic(38);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: Interactive Pipe & Buffer Dynamics Simulator                 */
  /* -------------------------------------------------------------------------- */
  const PIPE_CAPACITY = 65536; // 64 KB standard Linux pipe capacity
  const PIPE_BUF = 4096; // 4 KB atomic write limit

  const [pipeBuffer, setPipeBuffer] = useState(8192); // bytes currently in pipe
  const [writeEndOpen, setWriteEndOpen] = useState(true);
  const [readEndOpen, setReadEndOpen] = useState(true);
  const [lastOpStatus, setLastOpStatus] = useState("Ready. Kernel pipe buffer initialized to 8 KB.");
  const [writerBlocked, setWriterBlocked] = useState(false);
  const [readerBlocked, setReaderBlocked] = useState(false);
  const [lastWriteSize, setLastWriteSize] = useState(4096);

  const handlePipeWrite = (bytes) => {
    setLastWriteSize(bytes);
    if (!readEndOpen) {
      setLastOpStatus("CRASH / ERROR: Write to pipe with no readers! Kernel sent SIGPIPE and write() returned -1 (EPIPE).");
      return;
    }
    if (!writeEndOpen) {
      setLastOpStatus("ERROR: Cannot write to a closed write-end descriptor (EBADF).");
      return;
    }

    const available = PIPE_CAPACITY - pipeBuffer;
    if (bytes <= available) {
      setPipeBuffer((prev) => prev + bytes);
      setWriterBlocked(false);
      setReaderBlocked(false);
      const isAtomic = bytes <= PIPE_BUF ? "Atomic write (≤ PIPE_BUF 4096B)" : "Non-atomic write (> PIPE_BUF, may interleave with concurrent writers)";
      setLastOpStatus(`Wrote ${bytes.toLocaleString()} bytes. ${isAtomic}. Free space: ${(available - bytes).toLocaleString()} B.`);
    } else {
      // Partial write or blocking
      setPipeBuffer(PIPE_CAPACITY);
      setWriterBlocked(true);
      setLastOpStatus(`PIPE FULL: Attempted to write ${bytes.toLocaleString()} B, but only ${available.toLocaleString()} B fit. Writer BLOCKED waiting for reader consumption!`);
    }
  };

  const handlePipeRead = (bytes) => {
    if (!readEndOpen) {
      setLastOpStatus("ERROR: Cannot read from a closed read-end descriptor (EBADF).");
      return;
    }
    if (pipeBuffer === 0) {
      if (!writeEndOpen) {
        setLastOpStatus("EOF REACHED: All write ends closed and buffer empty. read() returns 0 immediately.");
      } else {
        setReaderBlocked(true);
        setLastOpStatus("READER BLOCKED: Buffer empty. read() blocks waiting for writer data or write-end closure.");
      }
      return;
    }

    const toRead = Math.min(bytes, pipeBuffer);
    const newBuf = pipeBuffer - toRead;
    setPipeBuffer(newBuf);
    setWriterBlocked(false);
    setReaderBlocked(false);

    if (newBuf === 0 && !writeEndOpen) {
      setLastOpStatus(`Read ${toRead.toLocaleString()} bytes. Buffer now empty. All write ends closed -> Future reads will return EOF (0).`);
    } else {
      setLastOpStatus(`Read ${toRead.toLocaleString()} bytes. Remaining in kernel buffer: ${newBuf.toLocaleString()} B.`);
    }
  };

  const handleResetPipe = () => {
    setPipeBuffer(8192);
    setWriteEndOpen(true);
    setReadEndOpen(true);
    setWriterBlocked(false);
    setReaderBlocked(false);
    setLastOpStatus("Pipe reset: Buffer restored to 8 KB, read/write ends reopened.");
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: IPC Mechanism Selector & Cost Estimator                      */
  /* -------------------------------------------------------------------------- */
  const [selectedIpc, setSelectedIpc] = useState("pipe");
  const [payloadSizeKb, setPayloadSizeKb] = useState(64); // KB
  const [processRelationship, setProcessRelationship] = useState("unrelated"); // "family" vs "unrelated"
  const [commPattern, setCommPattern] = useState("bidirectional"); // "unidirectional", "bidirectional", "broadcast"

  const ipcSpecs = useMemo(() => {
    switch (selectedIpc) {
      case "pipe":
        return {
          name: "Anonymous Pipe",
          model: "Unidirectional Byte Stream",
          framingRequired: "Yes (Byte stream; application must delimit messages)",
          copyCount: "2 Copies (User -> Kernel Buffer -> User)",
          kernelOverhead: "Medium (Context switch + 64KB kernel ring buffer)",
          processScope: "Parent-Child / Shared Ancestry only (fork-inherited FDs)",
          syncMethod: "Automatic via Kernel blocking on empty/full buffer",
          bestFor: "Simple UNIX shell pipelines (cmd1 | cmd2) and parent-child worker batching",
          drawback: "Unidirectional; separate pipe needed for return path; no named rendezvous",
          latencyEstUs: 1.8,
        };
      case "fifo":
        return {
          name: "Named Pipe (FIFO)",
          model: "Unidirectional Byte Stream (Filesystem Rendezvous)",
          framingRequired: "Yes (Application byte framing needed)",
          copyCount: "2 Copies (User -> Kernel -> User)",
          kernelOverhead: "Medium (VFS inode lookup + kernel pipe buffer)",
          processScope: "Any independent processes on same host with filesystem permissions",
          syncMethod: "Automatic blocking open() and read()/write()",
          bestFor: "Lightweight communication between separately launched daemons",
          drawback: "Still unidirectional stream; open() blocks until both ends open",
          latencyEstUs: 2.4,
        };
      case "mq":
        return {
          name: "POSIX Message Queue (mq_open)",
          model: "Discrete Priority Messages",
          framingRequired: "No (Message boundaries preserved automatically)",
          copyCount: "2 Copies (User -> Kernel MQ -> User)",
          kernelOverhead: "Medium-High (POSIX IPC subsystem + priority queue sorting)",
          processScope: "Any independent process on host with permission",
          syncMethod: "Automatic queue-empty/full blocking or async mq_notify",
          bestFor: "Decoupled job dispatch with explicit priorities and message boundaries",
          drawback: "Strict message size limits (`mq_msgsize`); non-trivial cleanup",
          latencyEstUs: 3.2,
        };
      case "socket":
        return {
          name: "Unix Domain Socket (AF_UNIX)",
          model: "Bidirectional Full-Duplex Stream or Datagram",
          framingRequired: "Yes for SOCK_STREAM; No for SOCK_DGRAM",
          copyCount: "2 Copies (Direct socket buffers, zero TCP/IP protocol stack)",
          kernelOverhead: "Low-Medium (Fast kernel socket layer + credential passing)",
          processScope: "Any independent process on host (filesystem or abstract namespace)",
          syncMethod: "Standard socket blocking, select(), poll(), or epoll",
          bestFor: "Production client-server microservices on single host (e.g. Docker, PostgreSQL)",
          drawback: "Requires socket file path management and client-server connection lifecycle",
          latencyEstUs: 2.1,
        };
      case "shm":
        return {
          name: "POSIX Shared Memory + Semaphore",
          model: "Direct Memory Mapping (mmap MAP_SHARED)",
          framingRequired: "Self-defined binary struct / circular ring buffer",
          copyCount: "0 Copies! (CPU directly accesses physical RAM page cache)",
          kernelOverhead: "Near Zero during data transfer (Syscalls only for sync/locks)",
          processScope: "Any independent process with /dev/shm access",
          syncMethod: "Explicit: POSIX semaphores or PTHREAD_PROCESS_SHARED mutexes",
          bestFor: "Ultra-high throughput, large data buffers (video, ML tensors, high-freq trading)",
          drawback: "Extreme developer discipline: manual synchronization, crash-recovery complexity",
          latencyEstUs: 0.15,
        };
      case "signal":
        return {
          name: "POSIX Signals (sigaction)",
          model: "Asynchronous Event Notification",
          framingRequired: "N/A (carries only signal number or 32-bit sigval)",
          copyCount: "0 Copies (Kernel directly modifies process task_struct signal mask)",
          kernelOverhead: "Low (Interrupts execution, switches to signal handler frame)",
          processScope: "Any process with kill() permissions (same UID or root)",
          syncMethod: "Interrupt-driven; handler sets volatile sig_atomic_t flag",
          bestFor: "Lifecycle notifications: graceful shutdown (SIGTERM), reloads (SIGHUP), child reap (SIGCHLD)",
          drawback: "Cannot transfer general payloads; signals coalesce; async-signal safety hazards",
          latencyEstUs: 4.5,
        };
      default:
        return {};
    }
  }, [selectedIpc]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: Shared Memory & Process-Shared Mutex Race Simulator          */
  /* -------------------------------------------------------------------------- */
  const [mutexEnabled, setMutexEnabled] = useState(false);
  const [shmCounter, setShmCounter] = useState(0);
  const [procAVal, setProcAVal] = useState(null);
  const [procBVal, setProcBVal] = useState(null);
  const [raceLog, setRaceLog] = useState([]);
  const [isSimulatingRace, setIsSimulatingRace] = useState(false);

  const runRaceSimulation = () => {
    setIsSimulatingRace(true);
    setShmCounter(0);
    setProcAVal(null);
    setProcBVal(null);
    setRaceLog([]);

    const log = [];
    log.push("1. Initial state: Shared Memory Counter = 0.");

    if (mutexEnabled) {
      log.push("2. Process A acquires PTHREAD_PROCESS_SHARED mutex.");
      log.push("3. Process A reads Counter (0), increments to 1, writes Counter = 1.");
      log.push("4. Process A unlocks mutex.");
      log.push("5. Process B acquires PTHREAD_PROCESS_SHARED mutex.");
      log.push("6. Process B reads Counter (1), increments to 2, writes Counter = 2.");
      log.push("7. Process B unlocks mutex.");
      log.push("SUCCESS: Counter = 2 (Correct serialized execution, 0 lost updates).");

      setTimeout(() => {
        setProcAVal(1);
        setProcBVal(2);
        setShmCounter(2);
        setRaceLog(log);
        setIsSimulatingRace(false);
      }, 600);
    } else {
      log.push("2. [NO MUTEX] Process A reads Counter into register (val = 0).");
      log.push("3. [NO MUTEX] CPU context switches! Process B also reads Counter into register (val = 0).");
      log.push("4. Process A increments register (0 -> 1) and writes back to SHM Counter = 1.");
      log.push("5. Process B increments its stale register (0 -> 1) and writes back to SHM Counter = 1!");
      log.push("CRITICAL RACE CONDITION: Lost update! Expected Counter = 2, Actual Counter = 1.");

      setTimeout(() => {
        setProcAVal(1);
        setProcBVal(1);
        setShmCounter(1);
        setRaceLog(log);
        setIsSimulatingRace(false);
      }, 600);
    }
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: Signal Delivery & Graceful Worker Shutdown Ladder            */
  /* -------------------------------------------------------------------------- */
  const [shutdownStep, setShutdownStep] = useState(0);
  const [workerStates, setWorkerStates] = useState([
    { id: 1, state: "RUNNING", currentJob: "Job #101 (square)" },
    { id: 2, state: "RUNNING", currentJob: "Job #102 (sum_to)" },
    { id: 3, state: "HUNG", currentJob: "Job #103 (deadlocked / infinite loop)" },
  ]);
  const [shutdownLog, setShutdownLog] = useState(["Supervisor running with 3 active worker processes."]);

  const advanceShutdownLadder = () => {
    if (shutdownStep === 0) {
      // Step 1: Stop accepting work
      setShutdownStep(1);
      setShutdownLog((prev) => [
        ...prev,
        "PHASE 1: Supervisor closed incoming job queue. No new tasks accepted. Entering drain state.",
      ]);
    } else if (shutdownStep === 1) {
      // Step 2: Send SIGTERM
      setShutdownStep(2);
      setWorkerStates([
        { id: 1, state: "TERMINATED_CLEAN", currentJob: "Finished #101 & exited cleanly" },
        { id: 2, state: "TERMINATED_CLEAN", currentJob: "Finished #102 & exited cleanly" },
        { id: 3, state: "HUNG", currentJob: "Stuck in deadlocked compute (ignoring SIGTERM)" },
      ]);
      setShutdownLog((prev) => [
        ...prev,
        "PHASE 2: Sent SIGTERM to all workers. Workers 1 & 2 handled signal, set stop flag, finished work & exited. Worker 3 is hung and unresponsive!",
      ]);
    } else if (shutdownStep === 2) {
      // Step 3: Timeout expired -> SIGKILL
      setShutdownStep(3);
      setWorkerStates([
        { id: 1, state: "REAPED", currentJob: "Reaped (exit code 0)" },
        { id: 2, state: "REAPED", currentJob: "Reaped (exit code 0)" },
        { id: 3, state: "KILLED_SIGKILL", currentJob: "Forcibly terminated by SIGKILL (uncatchable)" },
      ]);
      setShutdownLog((prev) => [
        ...prev,
        "PHASE 3: Grace period timeout expired (5.0s). Sent uncatchable SIGKILL (Signal 9) to hung Worker 3. Kernel immediately destroyed Worker 3.",
      ]);
    } else if (shutdownStep === 3) {
      // Step 4: Harvest zombies and unlink resources
      setShutdownStep(4);
      setWorkerStates([
        { id: 1, state: "REAPED", currentJob: "Reaped (exit code 0)" },
        { id: 2, state: "REAPED", currentJob: "Reaped (exit code 0)" },
        { id: 3, state: "REAPED", currentJob: "Reaped via waitpid(WNOHANG) -> Zero zombies remaining" },
      ]);
      setShutdownLog((prev) => [
        ...prev,
        "PHASE 4: Supervisor called waitpid() in a loop to reap all child termination statuses. Unlinked /tmp/sockets and shm objects. Clean shutdown complete!",
      ]);
    }
  };

  const resetShutdownSimulator = () => {
    setShutdownStep(0);
    setWorkerStates([
      { id: 1, state: "RUNNING", currentJob: "Job #101 (square)" },
      { id: 2, state: "RUNNING", currentJob: "Job #102 (sum_to)" },
      { id: 3, state: "HUNG", currentJob: "Job #103 (deadlocked / infinite loop)" },
    ]);
    setShutdownLog(["Supervisor running with 3 active worker processes."]);
  };

  /* -------------------------------------------------------------------------- */
  /* QUIZ STATE & DATA                                                          */
  /* -------------------------------------------------------------------------- */
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What does an anonymous pipe transfer between processes?",
      options: [
        "Only discrete, complete application messages",
        "An ordered, unidirectional byte stream without inherent message boundaries",
        "Directly mapped physical memory frames",
        "Signals carrying arbitrary 64-bit user payloads",
      ],
      correctIndex: 1,
      explanation:
        "A pipe is a unidirectional byte stream. The kernel manages an ordered stream of bytes; it does not preserve write boundaries. The reading process must define a framing protocol if discrete messages are required.",
    },
    {
      id: 2,
      question: "When does a process reading from a pipe receive EOF (read() returns 0)?",
      options: [
        "Whenever the writing process pauses or sleeps",
        "When the kernel pipe buffer becomes more than 50% full",
        "After all file descriptors referring to the write end have been closed AND buffered data is consumed",
        "Immediately after the child process forks",
      ],
      correctIndex: 2,
      explanation:
        "A pipe reader only receives EOF (read returns 0) when every copy of the write-end file descriptor across all processes has been closed and any remaining bytes in the kernel buffer have been read.",
    },
    {
      id: 3,
      question: "Which IPC mechanism is optimal for transferring massive bulk data (such as 4K video frames or ML tensors) between local processes?",
      options: [
        "Signals with sigqueue()",
        "POSIX Shared Memory (shm_open + mmap)",
        "SIGCHLD notifications",
        "A FIFO pathname without an application buffer",
      ],
      correctIndex: 1,
      explanation:
        "POSIX Shared Memory allows processes to map identical physical RAM frames into their respective address spaces, eliminating the double-copy overhead of kernel socket or pipe buffers.",
    },
    {
      id: 4,
      question: "Why must a stream-socket (SOCK_STREAM) receiver implement application-level message framing?",
      options: [
        "Stream reads are guaranteed to preserve individual send() boundaries",
        "A single recv() call may return a partial message, a full message, or fragments of multiple messages",
        "Unix domain sockets cannot transfer binary bytes",
        "Framing turns off kernel TCP/IP checksum calculation",
      ],
      correctIndex: 1,
      explanation:
        "SOCK_STREAM delivers an arbitrary byte stream. Network or kernel buffers can fragment or coalesce messages; the receiving application must use length prefixes, delimiters, or fixed sizes to reconstruct complete requests.",
    },
    {
      id: 5,
      question: "What is an async-signal-safe strategy for handling SIGINT or SIGTERM to request a graceful shutdown?",
      options: [
        "Call printf() and malloc() repeatedly inside the signal handler",
        "Invoke waitpid() in a blocking loop inside the handler",
        "Set a volatile sig_atomic_t flag in the handler and handle cleanup in the main event loop",
        "Close all database connections and flush disk buffers directly inside the signal handler",
      ],
      correctIndex: 2,
      explanation:
        "Signal handlers interrupt arbitrary execution and can cause deadlocks if they invoke non-reentrant functions (like printf or malloc). Setting a volatile sig_atomic_t flag allows the normal program loop to safely initiate cleanup.",
    },
    {
      id: 6,
      question: "What is backpressure in an IPC architecture?",
      options: [
        "An unbounded queue that grows infinitely to avoid slowing the producer",
        "A flow-control mechanism that throttles or blocks fast producers when slow consumers cannot keep up",
        "A specific Unix signal sent when disk space is exhausted",
        "A kernel method that terminates processes with broken pipes",
      ],
      correctIndex: 1,
      explanation:
        "Backpressure prevents fast producers from overwhelming slow consumers. By capping queue capacity and blocking writers (or returning 429/busy errors), it prevents memory exhaustion and unconstrained latency spikes.",
    },
  ];

  const handleSelectOption = (qId, optionIdx) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  /* -------------------------------------------------------------------------- */
  /* CHECKLIST STATE                                                            */
  /* -------------------------------------------------------------------------- */
  const [checklist, setChecklist] = useState({
    item1: true,
    item2: true,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false,
    item8: false,
  });

  const toggleChecklistItem = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const checklistCompletion = useMemo(() => {
    const total = Object.keys(checklist).length;
    const completed = Object.values(checklist).filter(Boolean).length;
    return Math.round((completed / total) * 100);
  }, [checklist]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans">
      {/* Top Navigation & Track Bar */}
      <ModuleNav
        track="os"
        currentModuleId="ipc"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="Nova OS Tutor"
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-500 mb-6">
          <span
            onClick={() => navigate("/learning")}
            className="cursor-pointer hover:text-stone-800 transition-colors"
          >
            Learning Center
          </span>
          <span>/</span>
          <span
            onClick={() => navigate("/learning/os")}
            className="cursor-pointer hover:text-stone-800 transition-colors"
          >
            Operating Systems
          </span>
          <span>/</span>
          <span className="text-stone-800 font-medium">Module 15: IPC, Pipes & Shared Memory</span>
        </div>

        {/* Module Header Hero */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#e7e3da] shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ea580c]/10 text-[#ea580c] font-semibold text-xs tracking-wide uppercase mb-3">
                <Share2 size={14} />
                <span>Operating Systems Engineering · Module 15</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
                IPC, Pipes, Shared Memory & Signals
              </h1>
              <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                Master how isolated processes communicate, synchronize, exchange bulk data, and safely handle lifecycle signals. From unidirectional byte-stream pipes to zero-copy shared memory, Unix domain sockets, and fault-tolerant multi-process worker pools.
              </p>
            </div>

            {/* Quick Metrics Badge Card */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[240px]">
              <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Core Primitives:</span>
                <span className="text-xs font-bold text-stone-800">Pipes · Sockets · SHM · Signals</span>
              </div>
              <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Zero-Copy Primitive:</span>
                <span className="text-xs font-bold text-[#ea580c]">mmap(MAP_SHARED)</span>
              </div>
              <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Lab Project:</span>
                <span className="text-xs font-bold text-stone-800">Multi-Process Job Runner</span>
              </div>
            </div>
          </div>

          {/* Lesson Selector Tabs */}
          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap gap-2">
            {[
              { id: "fundamentals", label: "1. IPC Fundamentals", icon: Boxes },
              { id: "pipes", label: "2. Anonymous & Named Pipes", icon: GitBranch },
              { id: "sockets", label: "3. Unix Sockets & Queues", icon: Network },
              { id: "shm", label: "4. Shared Memory & Mutexes", icon: Database },
              { id: "signals", label: "5. Signals & Coordination", icon: Bell },
              { id: "performance", label: "6. Performance & Backpressure", icon: Gauge },
              { id: "lab", label: "7. Practical Worker Lab", icon: Terminal },
              { id: "quiz", label: "Knowledge Check", icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeLesson === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveLesson(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#ea580c] text-white shadow-xs"
                      : "bg-stone-100 hover:bg-stone-200/70 text-stone-700"
                  }`}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 1: IPC FUNDAMENTALS                                         */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "fundamentals" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Boxes size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    1. Interprocess Communication Fundamentals
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Process isolation · Data exchange vs synchronization · Byte streams vs Message boundaries
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  By default, modern operating systems enforce strict <strong>virtual address space isolation</strong> via the hardware Memory Management Unit (MMU). A variable allocated in Process A’s memory cannot be accessed or corrupted by Process B, even if both processes are running on the exact same CPU core.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="font-semibold text-stone-900 flex items-center gap-2 mb-2">
                      <Repeat size={16} className="text-[#ea580c]" />
                      1. Data Exchange Problem
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600">
                      How does one process physically transfer task requests, payloads, or computation results to another? Involves choosing between byte streams, message packets, or shared physical memory regions.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h3 className="font-semibold text-stone-900 flex items-center gap-2 mb-2">
                      <Lock size={16} className="text-[#ea580c]" />
                      2. Synchronization Problem
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600">
                      How do processes coordinate order, signal readiness, protect mutual exclusion, and agree on shutdown? Shared memory transfers data with zero copies, but provides <em>zero</em> built-in synchronization.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6">Core Communication Models</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
                  <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
                    <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">Byte Streams</span>
                    <h4 className="font-bold text-stone-900 mt-1">Pipes & Stream Sockets</h4>
                    <p className="text-xs text-stone-600 mt-2">
                      Continuous sequence of bytes. No boundaries preserved. Two 100-byte writes can be read as a single 200-byte chunk. Applications must implement framing.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
                    <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">Message-Based</span>
                    <h4 className="font-bold text-stone-900 mt-1">POSIX MQ & Datagrams</h4>
                    <p className="text-xs text-stone-600 mt-2">
                      Preserves individual message packets. A 100-byte message written requires a 100-byte read. Can include message priorities and metadata.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
                    <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">Shared Memory</span>
                    <h4 className="font-bold text-stone-900 mt-1">POSIX shm_open + mmap</h4>
                    <p className="text-xs text-stone-600 mt-2">
                      Both processes map the same physical RAM frame. Zero kernel buffer copying. Highest throughput, but requires explicit POSIX semaphores or mutexes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Decision Matrix */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Sliders size={20} className="text-[#ea580c]" />
                Interactive IPC Mechanism Selector & Trade-Off Matrix
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Select an IPC mechanism to inspect its copying overhead, synchronization requirements, and optimal production scenarios.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
                {[
                  { id: "pipe", name: "Anonymous Pipe" },
                  { id: "fifo", name: "Named FIFO" },
                  { id: "mq", name: "POSIX MQ" },
                  { id: "socket", name: "Unix Socket" },
                  { id: "shm", name: "Shared Memory" },
                  { id: "signal", name: "Signals" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedIpc(item.id)}
                    className={`p-3 rounded-2xl text-xs font-semibold text-center transition-all ${
                      selectedIpc === item.id
                        ? "bg-[#ea580c] text-white shadow-xs"
                        : "bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
                  <div>
                    <h4 className="text-base font-bold text-stone-900">{ipcSpecs.name}</h4>
                    <span className="text-xs text-stone-500 font-mono">{ipcSpecs.model}</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white border border-stone-300 text-xs font-semibold text-stone-800">
                    Transfer Latency: ~{ipcSpecs.latencyEstUs} µs
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-stone-500 font-medium">Buffer Data Copies:</span>
                    <p className="font-semibold text-stone-800 mt-0.5">{ipcSpecs.copyCount}</p>
                  </div>
                  <div>
                    <span className="text-stone-500 font-medium">Application Framing Required:</span>
                    <p className="font-semibold text-stone-800 mt-0.5">{ipcSpecs.framingRequired}</p>
                  </div>
                  <div>
                    <span className="text-stone-500 font-medium">Process Relationship:</span>
                    <p className="font-semibold text-stone-800 mt-0.5">{ipcSpecs.processScope}</p>
                  </div>
                  <div>
                    <span className="text-stone-500 font-medium">Synchronization Mechanism:</span>
                    <p className="font-semibold text-stone-800 mt-0.5">{ipcSpecs.syncMethod}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-900">
                    <strong className="block font-semibold mb-1">Primary Advantage:</strong>
                    {ipcSpecs.bestFor}
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900">
                    <strong className="block font-semibold mb-1">Critical Limitation:</strong>
                    {ipcSpecs.drawback}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 2: ANONYMOUS & NAMED PIPES                                  */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "pipes" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <GitBranch size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    2. Anonymous Pipes and Named Pipes (FIFOs)
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Kernel ring buffer · Descriptor inheritance · EOF rules · SIGPIPE · PIPE_BUF atomicity
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  An <strong>anonymous pipe</strong> is created in Linux using the <code>pipe(int fd[2])</code> syscall. It returns two file descriptors:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><code>fd[0]</code>: The <strong>read end</strong> of the pipe.</li>
                  <li><code>fd[1]</code>: The <strong>write end</strong> of the pipe.</li>
                </ul>

                <p>
                  When a process calls <code>fork()</code>, the child inherits duplicate descriptors referring to the exact same open pipe description in the kernel. For reliable communication, each process must close the unused descriptor end.
                </p>

                <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto relative">
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n#include <string.h>\n#include <sys/wait.h>\n\nint main(void) {\n    int fd[2];\n    if (pipe(fd) == -1) { perror("pipe"); exit(1); }\n\n    pid_t pid = fork();\n    if (pid == 0) {\n        // Child reads only\n        close(fd[1]);\n        char buf[128];\n        ssize_t n = read(fd[0], buf, sizeof(buf));\n        if (n > 0) write(STDOUT_FILENO, buf, n);\n        close(fd[0]);\n        _exit(0);\n    }\n\n    // Parent writes only\n    close(fd[0]);\n    const char *msg = "Hello from parent!\\n";\n    write(fd[1], msg, strlen(msg));\n    close(fd[1]); // Triggers EOF for child\n    waitpid(pid, NULL, 0);\n    return 0;\n}`,
                        "pipe_c_code"
                      )
                    }
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                    title="Copy C Pipe Snippet"
                  >
                    {copiedSnippet === "pipe_c_code" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                  <pre>{`// Linux Anonymous Pipe Pattern in C
int fd[2];
pipe(fd); // fd[0]=read, fd[1]=write

if (fork() == 0) {
    close(fd[1]); // Crucial: close unused write end in child!
    read(fd[0], buf, sizeof(buf));
    close(fd[0]);
    _exit(0);
}

close(fd[0]); // Crucial: close unused read end in parent!
write(fd[1], msg, len);
close(fd[1]); // Close write end -> signals EOF to reader
waitpid(pid, NULL, 0);`}</pre>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 not-prose">
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                    <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-1">
                      <AlertTriangle size={16} />
                      Broken Pipe (SIGPIPE & EPIPE)
                    </h4>
                    <p className="text-xs text-amber-800">
                      If a process attempts to write to a pipe whose read ends have all been closed, the kernel raises a <code>SIGPIPE</code> signal. The default action is process termination! If caught or ignored, <code>write()</code> returns <code>-1</code> with <code>errno = EPIPE</code>.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                    <h4 className="font-bold text-blue-900 flex items-center gap-2 mb-1">
                      <Zap size={16} />
                      Atomic Writes (PIPE_BUF = 4096B)
                    </h4>
                    <p className="text-xs text-blue-800">
                      POSIX guarantees that writes of up to <code>PIPE_BUF</code> bytes (4 KB on Linux) are guaranteed to be atomic with respect to other concurrent writers. Writes exceeding 4096 bytes may be interleaved with other writers!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 1: Pipe & Buffer Dynamics Simulator */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Activity size={20} className="text-[#ea580c]" />
                Interactive Pipe & Kernel Buffer Dynamics Simulator
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Simulate a 64 KB Linux kernel ring buffer. Observe write backpressure when full, read blocking when empty, EOF delivery, and SIGPIPE crashes.
              </p>

              {/* Status Banner */}
              <div
                className={`p-4 rounded-2xl mb-6 text-xs sm:text-sm font-medium border transition-colors ${
                  lastOpStatus.includes("CRASH") || lastOpStatus.includes("PIPE FULL")
                    ? "bg-red-50 text-red-800 border-red-200"
                    : lastOpStatus.includes("EOF")
                    ? "bg-blue-50 text-blue-800 border-blue-200"
                    : "bg-stone-50 text-stone-800 border-stone-200"
                }`}
              >
                <strong>Kernel Status: </strong> {lastOpStatus}
              </div>

              {/* Buffer Visualization */}
              <div className="mb-6 p-5 rounded-2xl bg-stone-900 text-white">
                <div className="flex justify-between items-center text-xs text-stone-400 mb-2">
                  <span>Kernel Pipe Buffer Occupancy</span>
                  <span className="font-mono">
                    {pipeBuffer.toLocaleString()} / {PIPE_CAPACITY.toLocaleString()} Bytes ({Math.round((pipeBuffer / PIPE_CAPACITY) * 100)}%)
                  </span>
                </div>
                <div className="w-full bg-stone-800 h-6 rounded-xl overflow-hidden relative border border-stone-700">
                  <div
                    className={`h-full transition-all duration-300 ${
                      pipeBuffer === PIPE_CAPACITY ? "bg-red-500" : pipeBuffer > 32768 ? "bg-amber-500" : "bg-emerald-500"
                    }`}
                    style={{ width: `${(pipeBuffer / PIPE_CAPACITY) * 100}%` }}
                  />
                  {/* PIPE_BUF marker */}
                  <div
                    className="absolute top-0 bottom-0 border-r-2 border-white/40 border-dashed"
                    style={{ left: `${(PIPE_BUF / PIPE_CAPACITY) * 100}%` }}
                    title="PIPE_BUF (4096 B atomic boundary)"
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] text-stone-500 mt-2 font-mono">
                  <span>0 B (Empty)</span>
                  <span className="text-amber-400">PIPE_BUF (4096 B)</span>
                  <span>65,536 B (Full capacity)</span>
                </div>
              </div>

              {/* Interactive Controls Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Producer Controls */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-stone-800 text-sm flex items-center gap-1.5">
                      <Power size={14} className={writeEndOpen ? "text-emerald-500" : "text-stone-400"} />
                      Producer (fd[1] Write End)
                    </span>
                    <button
                      onClick={() => setWriteEndOpen(!writeEndOpen)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                        writeEndOpen ? "bg-red-100 text-red-700 hover:bg-red-200" : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                      }`}
                    >
                      {writeEndOpen ? "Close Write End (close(fd[1]))" : "Open Write End"}
                    </button>
                  </div>
                  <div className="text-xs text-stone-600 mb-3">
                    State: {writerBlocked ? <span className="text-red-600 font-bold">BLOCKED (Full Buffer)</span> : <span className="text-emerald-600 font-semibold">Active / Ready</span>}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handlePipeWrite(4096)}
                      className="px-3 py-2 bg-white hover:bg-stone-100 border border-stone-300 rounded-xl text-xs font-medium text-stone-800 transition-colors"
                    >
                      +4 KB Write (Atomic)
                    </button>
                    <button
                      onClick={() => handlePipeWrite(16384)}
                      className="px-3 py-2 bg-white hover:bg-stone-100 border border-stone-300 rounded-xl text-xs font-medium text-stone-800 transition-colors"
                    >
                      +16 KB Write
                    </button>
                    <button
                      onClick={() => handlePipeWrite(40960)}
                      className="px-3 py-2 bg-white hover:bg-stone-100 border border-stone-300 rounded-xl text-xs font-medium text-stone-800 transition-colors"
                    >
                      +40 KB Write (Overflow)
                    </button>
                  </div>
                </div>

                {/* Consumer Controls */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-stone-800 text-sm flex items-center gap-1.5">
                      <Power size={14} className={readEndOpen ? "text-emerald-500" : "text-stone-400"} />
                      Consumer (fd[0] Read End)
                    </span>
                    <button
                      onClick={() => setReadEndOpen(!readEndOpen)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                        readEndOpen ? "bg-red-100 text-red-700 hover:bg-red-200" : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                      }`}
                    >
                      {readEndOpen ? "Close Read End (Causes SIGPIPE!)" : "Open Read End"}
                    </button>
                  </div>
                  <div className="text-xs text-stone-600 mb-3">
                    State: {readerBlocked ? <span className="text-amber-600 font-bold">BLOCKED (Waiting for data)</span> : <span className="text-emerald-600 font-semibold">Active / Ready</span>}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handlePipeRead(4096)}
                      className="px-3 py-2 bg-white hover:bg-stone-100 border border-stone-300 rounded-xl text-xs font-medium text-stone-800 transition-colors"
                    >
                      Read 4 KB
                    </button>
                    <button
                      onClick={() => handlePipeRead(16384)}
                      className="px-3 py-2 bg-white hover:bg-stone-100 border border-stone-300 rounded-xl text-xs font-medium text-stone-800 transition-colors"
                    >
                      Read 16 KB
                    </button>
                    <button
                      onClick={() => handlePipeRead(65536)}
                      className="px-3 py-2 bg-white hover:bg-stone-100 border border-stone-300 rounded-xl text-xs font-medium text-stone-800 transition-colors"
                    >
                      Drain All
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleResetPipe}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-medium transition-colors"
                >
                  <RotateCcw size={14} />
                  Reset Pipe State
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 3: MESSAGE QUEUES & UNIX DOMAIN SOCKETS                     */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "sockets" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Network size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    3. Message Queues and Unix Domain Sockets
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    POSIX vs System V queues · AF_UNIX sockets · SCM_RIGHTS FD passing · Application message framing
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  While pipes are unidirectional and stream-oriented, production local services typically demand either <strong>explicit message boundaries</strong> (Message Queues) or <strong>bidirectional full-duplex client-server architectures</strong> (Unix Domain Sockets).
                </p>

                <h3 className="text-lg font-bold text-stone-900 mt-6">Unix Domain Sockets (AF_UNIX)</h3>
                <p>
                  Unix Domain Sockets run over the standard BSD socket API (<code>socket()</code>, <code>bind()</code>, <code>listen()</code>, <code>accept()</code>, <code>connect()</code>), but bypass network drivers, checksumming, and routing tables completely. Data moves directly through kernel socket buffers at microsecond latencies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 not-prose">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-bold text-stone-900 flex items-center gap-2 mb-1">
                      <ShieldCheck size={16} className="text-[#ea580c]" />
                      Superpower: Passing Open FDs (SCM_RIGHTS)
                    </h4>
                    <p className="text-xs text-stone-600">
                      Unix sockets can transfer open file descriptors between unrelated processes via <code>sendmsg()</code> with <code>SCM_RIGHTS</code>! A privileged master process can bind port 80/443 and hand open socket descriptors down to unprivileged worker processes.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-bold text-stone-900 flex items-center gap-2 mb-1">
                      <Lock size={16} className="text-[#ea580c]" />
                      Peer Credentials (SO_PEERCRED)
                    </h4>
                    <p className="text-xs text-stone-600">
                      Servers can inspect the connecting process’s real UID, GID, and PID automatically using <code>getsockopt(..., SO_PEERCRED)</code>, enabling zero-trust local authentication without plaintext passwords.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6">The Stream Framing Mandate</h3>
                <p>
                  Because <code>SOCK_STREAM</code> delivers an unformatted stream of bytes, calling <code>recv()</code> once does NOT mean you received exactly one application request. You must define a framing protocol:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c]">1. Length-Prefixed</span>
                    <p className="text-xs text-stone-700 mt-1">
                      First 4 bytes specify message length $N$. Receiver reads 4 bytes, then loops until exactly $N$ payload bytes arrive.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c]">2. Delimiter-Terminated</span>
                    <p className="text-xs text-stone-700 mt-1">
                      Messages end with <code>\n</code> or <code>\0</code> (e.g. JSON Lines). Receiver buffers incoming bytes until delimiter appears.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c]">3. Fixed-Size Headers</span>
                    <p className="text-xs text-stone-700 mt-1">
                      Every packet has a fixed struct header (e.g. 32 bytes) containing magic, opcode, and variable-length payload size.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 4: SHARED MEMORY & PROCESS SYNCHRONIZATION                 */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "shm" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Database size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    4. Shared Memory and Cross-Process Synchronization
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    shm_open · ftruncate · mmap MAP_SHARED · POSIX semaphores · Process-shared mutexes · Race hazards
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  Shared memory is the fastest IPC mechanism available. Unlike pipes or sockets that copy bytes from user memory to kernel buffer and back to user memory, shared memory creates a direct page-table mapping into identical physical RAM:
                </p>

                <ol className="list-decimal pl-5 space-y-1">
                  <li>Create or open POSIX shm object: <code>int fd = shm_open("/ps_shm", O_CREAT | O_RDWR, 0666);</code></li>
                  <li>Set segment size: <code>ftruncate(fd, sizeof(SharedData));</code></li>
                  <li>Map into address space: <code>SharedData *data = mmap(NULL, sizeof(SharedData), PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);</code></li>
                  <li>Synchronize access using <code>pthread_mutex_t</code> with <code>PTHREAD_PROCESS_SHARED</code> or POSIX named semaphores.</li>
                  <li>Clean up: <code>munmap()</code>, <code>close(fd)</code>, and <code>shm_unlink("/ps_shm")</code>.</li>
                </ol>

                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 not-prose my-4">
                  <h4 className="font-bold text-red-900 flex items-center gap-2 mb-1">
                    <AlertOctagon size={16} />
                    The Synchronization Trap: Default Mutexes Do NOT Work Across Processes!
                  </h4>
                  <p className="text-xs text-red-800 leading-relaxed">
                    A standard <code>pthread_mutex_t</code> is process-private (<code>PTHREAD_PROCESS_PRIVATE</code>). If placed in shared memory without initializing its attributes via <code>pthread_mutexattr_setpshared(&attr, PTHREAD_PROCESS_SHARED)</code>, concurrent processes will corrupt memory or cause undefined behavior!
                  </p>
                </div>
              </div>
            </div>

            {/* SIMULATOR 3: Shared Memory & Process-Shared Mutex Race Simulator */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Zap size={20} className="text-[#ea580c]" />
                Shared Memory & Process-Shared Mutex Race Simulator
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Process A and Process B concurrently increment a shared counter in POSIX shared memory. Toggle the <code>PTHREAD_PROCESS_SHARED</code> mutex to observe a race condition vs serialized atomicity.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-semibold text-stone-800">
                    POSIX Process-Shared Mutex:
                  </span>
                  <button
                    onClick={() => setMutexEnabled(!mutexEnabled)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      mutexEnabled ? "bg-emerald-600 text-white" : "bg-stone-300 text-stone-700"
                    }`}
                  >
                    {mutexEnabled ? "ENABLED (PTHREAD_PROCESS_SHARED)" : "DISABLED (Raw Concurrent Access)"}
                  </button>
                </div>

                <button
                  onClick={runRaceSimulation}
                  disabled={isSimulatingRace}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-xs sm:text-sm transition-colors shadow-xs disabled:opacity-50"
                >
                  <Play size={15} />
                  <span>Execute Concurrent Increments</span>
                </button>
              </div>

              {/* Memory State Visualizer */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 text-center">
                  <span className="text-xs font-semibold text-blue-700 uppercase">Process A (Worker 1)</span>
                  <div className="text-2xl font-mono font-bold text-blue-900 mt-2">
                    {procAVal !== null ? `Val = ${procAVal}` : "Idle"}
                  </div>
                  <span className="text-[11px] text-blue-600 mt-1 block">Executes: counter++</span>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 text-center">
                  <span className="text-xs font-semibold text-purple-700 uppercase">Process B (Worker 2)</span>
                  <div className="text-2xl font-mono font-bold text-purple-900 mt-2">
                    {procBVal !== null ? `Val = ${procBVal}` : "Idle"}
                  </div>
                  <span className="text-[11px] text-purple-600 mt-1 block">Executes: counter++</span>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 text-white text-center">
                  <span className="text-xs font-semibold text-stone-400 uppercase">Shared Memory Counter</span>
                  <div className="text-3xl font-mono font-bold text-amber-400 mt-1">
                    {shmCounter}
                  </div>
                  <span className="text-[11px] text-stone-400 mt-1 block">
                    Expected: 2 · Status: {shmCounter === 2 ? "✓ Correct" : shmCounter === 1 ? "✗ Lost Update!" : "Ready"}
                  </span>
                </div>
              </div>

              {/* Execution Trace Log */}
              {raceLog.length > 0 && (
                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-1.5 border border-stone-800">
                  <span className="text-stone-400 text-[11px] font-sans font-semibold uppercase tracking-wider block mb-2">
                    Interleaved Execution Trace:
                  </span>
                  {raceLog.map((line, idx) => (
                    <div
                      key={idx}
                      className={
                        line.includes("CRITICAL")
                          ? "text-red-400 font-bold"
                          : line.includes("SUCCESS")
                          ? "text-emerald-400 font-bold"
                          : "text-stone-300"
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 5: SIGNALS & SAFE PROCESS COORDINATION                      */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "signals" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Bell size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    5. Signals and Safe Process Coordination
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    SIGINT · SIGTERM · SIGCHLD · Async-signal safety · volatile sig_atomic_t · Graceful worker shutdown ladder
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  Signals are asynchronous kernel software interrupts delivered to a process. They notify processes of external events (Ctrl+C, termination request, child exit).
                </p>

                <div className="overflow-x-auto not-prose my-4">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50 text-stone-700">
                        <th className="py-2.5 px-3 font-semibold">Signal</th>
                        <th className="py-2.5 px-3 font-semibold">Default Action</th>
                        <th className="py-2.5 px-3 font-semibold">Standard Purpose</th>
                        <th className="py-2.5 px-3 font-semibold">Catchable?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-stone-900">SIGINT</td>
                        <td className="py-2.5 px-3">Terminate</td>
                        <td className="py-2.5 px-3">Terminal interrupt (Ctrl+C from user)</td>
                        <td className="py-2.5 px-3 text-emerald-600 font-semibold">Yes</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-stone-900">SIGTERM</td>
                        <td className="py-2.5 px-3">Terminate</td>
                        <td className="py-2.5 px-3">Graceful termination request (systemd, k8s)</td>
                        <td className="py-2.5 px-3 text-emerald-600 font-semibold">Yes</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-red-600">SIGKILL</td>
                        <td className="py-2.5 px-3">Terminate</td>
                        <td className="py-2.5 px-3">Forced immediate termination (Kernel OOM, unkillable)</td>
                        <td className="py-2.5 px-3 text-red-600 font-bold">NO (Uncatchable)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-stone-900">SIGCHLD</td>
                        <td className="py-2.5 px-3">Ignore</td>
                        <td className="py-2.5 px-3">Child process terminated or stopped</td>
                        <td className="py-2.5 px-3 text-emerald-600 font-semibold">Yes</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono font-bold text-stone-900">SIGPIPE</td>
                        <td className="py-2.5 px-3">Terminate</td>
                        <td className="py-2.5 px-3">Attempted write to pipe with no active readers</td>
                        <td className="py-2.5 px-3 text-emerald-600 font-semibold">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6">Async-Signal-Safe Design: The Flag Pattern</h3>
                <p>
                  Signal handlers can interrupt execution at any instruction. Calling non-reentrant functions like <code>printf()</code>, <code>malloc()</code>, or mutex lock inside a signal handler is dangerous and leads to immediate deadlocks. The canonical, safe pattern uses <code>volatile sig_atomic_t</code>:
                </p>

                <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto relative">
                  <pre>{`static volatile sig_atomic_t stop_requested = 0;

static void handle_shutdown(int signo) {
    (void)signo;
    stop_requested = 1; // Safe: atomic write, no locks or heap allocation!
}

int main(void) {
    struct sigaction sa = {0};
    sa.sa_handler = handle_shutdown;
    sigaction(SIGTERM, &sa, NULL);
    sigaction(SIGINT, &sa, NULL);

    while (!stop_requested) {
        // Normal event loop execution...
    }

    // Perform safe, synchronous cleanup outside the signal handler!
    cleanup_ipc_and_exit();
}`}</pre>
                </div>
              </div>
            </div>

            {/* SIMULATOR 4: Signal Delivery & Graceful Worker Shutdown Ladder */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Power size={20} className="text-[#ea580c]" />
                Signal Delivery & Graceful Worker Shutdown Ladder
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Step through the industry-standard supervisor shutdown ladder: Stop Ingestion $\rightarrow$ SIGTERM $\rightarrow$ Timeout $\rightarrow$ SIGKILL $\rightarrow$ Reap with waitpid().
              </p>

              {/* Ladder Step Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {[
                  { step: 1, label: "1. Stop Accepting Work" },
                  { step: 2, label: "2. Issue SIGTERM" },
                  { step: 3, label: "3. Timeout & SIGKILL" },
                  { step: 4, label: "4. Reap via waitpid()" },
                ].map((s) => (
                  <div
                    key={s.step}
                    className={`p-3 rounded-2xl text-center text-xs font-semibold border ${
                      shutdownStep >= s.step
                        ? "bg-[#ea580c] text-white border-[#ea580c]"
                        : "bg-stone-50 text-stone-500 border-stone-200"
                    }`}
                  >
                    {s.label}
                  </div>
                ))}
              </div>

              {/* Worker Pool Visualizer */}
              <div className="space-y-3 mb-6">
                {workerStates.map((w) => (
                  <div
                    key={w.id}
                    className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          w.state === "RUNNING"
                            ? "bg-emerald-500 animate-pulse"
                            : w.state === "HUNG"
                            ? "bg-red-500"
                            : w.state === "TERMINATED_CLEAN"
                            ? "bg-blue-500"
                            : w.state === "KILLED_SIGKILL"
                            ? "bg-purple-600"
                            : "bg-stone-400"
                        }`}
                      />
                      <span className="font-bold text-stone-900 text-xs sm:text-sm">
                        Worker Process #{w.id} (PID {1000 + w.id})
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-stone-600 font-mono">{w.currentJob}</span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          w.state === "RUNNING"
                            ? "bg-emerald-100 text-emerald-800"
                            : w.state === "HUNG"
                            ? "bg-red-100 text-red-800"
                            : w.state === "TERMINATED_CLEAN"
                            ? "bg-blue-100 text-blue-800"
                            : w.state === "KILLED_SIGKILL"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-stone-200 text-stone-700"
                        }`}
                      >
                        {w.state}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controls & Log */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
                <button
                  onClick={advanceShutdownLadder}
                  disabled={shutdownStep >= 4}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-xs sm:text-sm transition-colors shadow-xs disabled:opacity-40"
                >
                  <SkipForward size={16} />
                  <span>
                    {shutdownStep === 0
                      ? "Begin Shutdown (Stop Work)"
                      : shutdownStep === 1
                      ? "Escalate: Send SIGTERM"
                      : shutdownStep === 2
                      ? "Timeout Expired: Send SIGKILL"
                      : shutdownStep === 3
                      ? "Reap Children & Clean Sockets"
                      : "Shutdown Complete"}
                  </span>
                </button>

                <button
                  onClick={resetShutdownSimulator}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-medium transition-colors"
                >
                  <RotateCcw size={14} />
                  Reset Worker Pool
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900 text-stone-300 font-mono text-xs space-y-1 max-h-40 overflow-y-auto">
                {shutdownLog.map((log, i) => (
                  <div key={i}>{log}</div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 6: PERFORMANCE, BUFFERING & BACKPRESSURE                    */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "performance" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Gauge size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    6. IPC Performance, Buffering, and Backpressure
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Latency percentiles · Bounded queues · Backpressure policies · Bidirectional deadlock avoidance
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  Measuring IPC is about more than pure throughput. Systems engineers balance <strong>four distinct performance metrics</strong>:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 not-prose my-4">
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c]">1. Mean Latency</span>
                    <p className="text-xs text-stone-600 mt-1">Round-trip time from job submission to result arrival.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c]">2. Tail Latency (p99)</span>
                    <p className="text-xs text-stone-600 mt-1">99th percentile delays caused by queue backlog surges.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c]">3. Throughput (MB/s)</span>
                    <p className="text-xs text-stone-600 mt-1">Total volume of serialized payload moved per second.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-[#ea580c]">4. Message Rate (msg/s)</span>
                    <p className="text-xs text-stone-600 mt-1">Number of discrete job packets dispatched and processed per second.</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6">Why Unbounded Queues Cause System Outages</h3>
                <p>
                  If a producer generates 5,000 requests/sec while workers can only consume 3,000 requests/sec, an unbounded queue will consume all available host RAM until Linux invokes the Out-Of-Memory (OOM) Killer. <strong>Backpressure is a deliberate feature, not a bug</strong>:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-semibold text-stone-900 text-xs sm:text-sm">Block the Producer</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      Natural kernel pipe/socket behavior. When the 64 KB buffer fills, <code>write()</code> sleeps until consumer reads space.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-semibold text-stone-900 text-xs sm:text-sm">Reject Fast (Fail Fast)</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      Return <code>EAGAIN</code> or HTTP 429 Too Many Requests immediately, allowing client to retry with exponential backoff.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-semibold text-stone-900 text-xs sm:text-sm">Drop Low Priority</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      For streaming analytics or telemetry: discard oldest non-essential items to preserve real-time responsiveness.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 not-prose my-4">
                  <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-1">
                    <AlertTriangle size={16} />
                    Classic Deadlock: Full-Buffer Write/Write Race
                  </h4>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    If Process A writes 1 MB to Process B before reading B’s response, and Process B simultaneously writes 1 MB to Process A before reading A’s request, both kernel buffers fill up (64 KB). Both processes block on <code>write()</code>, and neither ever reaches its <code>read()</code>. <strong>Solution:</strong> Use non-blocking I/O with <code>epoll</code> or separate worker threads for reads and writes.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 7: PRACTICAL MULTI-PROCESS WORKER LAB                       */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "lab" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                  <Terminal size={22} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    7. Practical Lab: Build a Multi-Process Worker System
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Local job runner · multiprocessing.Pipe · Isolated worker execution · Failure recovery · Linux strace analysis
                  </p>
                </div>
              </div>

              <div className="prose max-w-none text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>
                  In this capstone lab, you will build and observe a multi-process job processing engine. A <strong>Supervisor</strong> process dispatches job batches over IPC pipes to independent <strong>Worker</strong> processes, aggregates results, and gracefully handles individual task errors without crashing the cluster.
                </p>

                <h3 className="text-lg font-bold text-stone-900 mt-6">Production Python Script: <code>worker_system.py</code></h3>
                <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto relative not-prose">
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `from multiprocessing import Pipe, Process
from time import perf_counter
import os

def run_job(job):
    job_id, operation, value = job
    if operation == "square":
        result = value * value
    elif operation == "double":
        result = value * 2
    elif operation == "sum_to":
        if value < 0:
            raise ValueError("sum_to requires a non-negative value")
        result = value * (value + 1) // 2
    else:
        raise ValueError(f"Unknown operation: {operation}")
    return {
        "job_id": job_id,
        "worker_pid": os.getpid(),
        "result": result,
        "status": "ok",
    }

def worker(connection):
    try:
        jobs = connection.recv()
        results = []
        for job in jobs:
            try:
                results.append(run_job(job))
            except Exception as e:
                results.append({
                    "job_id": job[0],
                    "worker_pid": os.getpid(),
                    "error": str(e),
                    "status": "error"
                })
        connection.send(results)
    finally:
        connection.close()

if __name__ == "__main__":
    jobs = [
        (1, "square", 12),
        (2, "double", 45),
        (3, "sum_to", 100),
        (4, "square", 9),
        (5, "sum_to", -10), # Designed to fail gracefully
        (6, "double", 200),
    ]

    num_workers = 2
    worker_batches = [[] for _ in range(num_workers)]
    for idx, job in enumerate(jobs):
        worker_batches[idx % num_workers].append(job)

    pipes = [Pipe() for _ in range(num_workers)]
    processes = []
    t_start = perf_counter()

    for i in range(num_workers):
        parent_conn, child_conn = pipes[i]
        p = Process(target=worker, args=(child_conn,))
        processes.append(p)
        p.start()
        child_conn.close() # Close child end in parent
        parent_conn.send(worker_batches[i])

    all_results = []
    for parent_conn, _ in pipes:
        all_results.extend(parent_conn.recv())
        parent_conn.close()

    for p in processes:
        p.join()

    duration = (perf_counter() - t_start) * 1000
    all_results.sort(key=lambda x: x["job_id"])

    print(f"=== Multi-Process Runner Finished in {duration:.2f} ms ===")
    for r in all_results:
        print(f"Job #{r['job_id']} [PID {r['worker_pid']}]: Status={r['status']} | Output={r.get('result', r.get('error'))}")
`,
                        "worker_py_code"
                      )
                    }
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                    title="Copy Python Script"
                  >
                    {copiedSnippet === "worker_py_code" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                  <pre>{`# worker_system.py - Production Multi-Process Job Runner
from multiprocessing import Pipe, Process
from time import perf_counter
import os

def run_job(job):
    job_id, operation, value = job
    if operation == "square":
        result = value * value
    elif operation == "double":
        result = value * 2
    elif operation == "sum_to":
        if value < 0:
            raise ValueError("sum_to requires a non-negative value")
        result = value * (value + 1) // 2
    else:
        raise ValueError(f"Unknown operation: {operation}")
    return {
        "job_id": job_id,
        "worker_pid": os.getpid(),
        "result": result,
        "status": "ok",
    }

def worker(connection):
    try:
        jobs = connection.recv()
        results = []
        for job in jobs:
            try:
                results.append(run_job(job))
            except Exception as e:
                results.append({
                    "job_id": job[0],
                    "worker_pid": os.getpid(),
                    "error": str(e),
                    "status": "error"
                })
        connection.send(results)
    finally:
        connection.close()

if __name__ == "__main__":
    jobs = [
        (1, "square", 12),
        (2, "double", 45),
        (3, "sum_to", 100),
        (4, "square", 9),
        (5, "sum_to", -10), # Bad input test
        (6, "double", 200),
    ]

    num_workers = 2
    worker_batches = [[] for _ in range(num_workers)]
    for idx, job in enumerate(jobs):
        worker_batches[idx % num_workers].append(job)

    pipes = [Pipe() for _ in range(num_workers)]
    processes = []
    t_start = perf_counter()

    for i in range(num_workers):
        parent_conn, child_conn = pipes[i]
        p = Process(target=worker, args=(child_conn,))
        processes.append(p)
        p.start()
        child_conn.close() # Close child end in parent
        parent_conn.send(worker_batches[i])

    all_results = []
    for parent_conn, _ in pipes:
        all_results.extend(parent_conn.recv())
        parent_conn.close()

    for p in processes:
        p.join()

    all_results.sort(key=lambda x: x["job_id"])
    for r in all_results:
        print(f"Job #{r['job_id']} [PID {r['worker_pid']}]: Status={r['status']} | Output={r.get('result', r.get('error'))}")`}</pre>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6">Linux System Inspection Commands</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-[#ea580c]">ps --forest</span>
                    <h4 className="font-semibold text-stone-900 text-sm mt-1">Inspect Process Tree</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      <code>ps -eo pid,ppid,stat,comm --forest</code> reveals the supervisor-to-worker child hierarchy and detects any zombie (<code>Z</code>) states.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-[#ea580c]">strace -f -e trace=process,read,write,close</span>
                    <h4 className="font-semibold text-stone-900 text-sm mt-1">Trace IPC Syscalls</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      Watch pipe creation, descriptor duplication during fork, atomic byte writes, and socket closures in real time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* LESSON 8: KNOWLEDGE CHECK & QUIZ                                   */}
        {/* ------------------------------------------------------------------ */}
        {activeLesson === "quiz" && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ea580c]">
                    <Award size={22} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                      Module 15 Knowledge Check
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-500">
                      Validate your understanding of IPC models, descriptor lifecycles, shared memory, and signal safety
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {isSubmitted && (
                    <div className="px-4 py-2 rounded-2xl bg-orange-50 border border-orange-200 text-[#ea580c] font-bold text-sm">
                      Score: {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                    </div>
                  )}
                  <button
                    onClick={() => {
                      if (isSubmitted) {
                        setSelectedAnswers({});
                        setIsSubmitted(false);
                      } else {
                        setIsSubmitted(true);
                      }
                    }}
                    className="px-5 py-2.5 rounded-2xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-xs sm:text-sm transition-colors shadow-xs"
                  >
                    {isSubmitted ? "Retake Quiz" : "Submit Answers"}
                  </button>
                </div>
              </div>

              {/* Quiz Questions List */}
              <div className="space-y-6">
                {quizQuestions.map((q, idx) => {
                  const selectedIdx = selectedAnswers[q.id];
                  return (
                    <div
                      key={q.id}
                      className="p-5 rounded-2xl bg-stone-50 border border-stone-200"
                    >
                      <h3 className="font-semibold text-stone-900 text-sm sm:text-base mb-3">
                        {idx + 1}. {q.question}
                      </h3>

                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          let optionClass = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";
                          if (selectedIdx === optIdx) {
                            optionClass = "bg-orange-50 border-[#ea580c] text-[#ea580c] font-semibold";
                          }
                          if (isSubmitted) {
                            if (optIdx === q.correctIndex) {
                              optionClass = "bg-emerald-50 border-emerald-500 text-emerald-800 font-bold";
                            } else if (selectedIdx === optIdx && selectedIdx !== q.correctIndex) {
                              optionClass = "bg-red-50 border-red-500 text-red-800";
                            } else {
                              optionClass = "bg-white border-stone-200 text-stone-400 opacity-60";
                            }
                          }

                          return (
                            <div
                              key={optIdx}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              className={`p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all flex items-center justify-between ${optionClass}`}
                            >
                              <span>{opt}</span>
                              {isSubmitted && optIdx === q.correctIndex && (
                                <CheckCircle2 size={16} className="text-emerald-600" />
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
            </div>

            {/* Mastery Checklist */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-emerald-600" />
                    Module 15 Mastery Checklist
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Track your engineering competence across all IPC and concurrency outcomes
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-stone-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-600 h-full transition-all duration-300"
                      style={{ width: `${checklistCompletion}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-700">{checklistCompletion}%</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { key: "item1", label: "Differentiate IPC models: byte streams, message queues, and shared memory" },
                  { key: "item2", label: "Implement anonymous pipes with robust descriptor closing and EOF delivery" },
                  { key: "item3", label: "Explain named pipes (FIFOs) and filesystem rendezvous points" },
                  { key: "item4", label: "Design stream socket framing protocols (length-prefix, delimiters, JSONL)" },
                  { key: "item5", label: "Create POSIX shared memory segments and synchronize with PTHREAD_PROCESS_SHARED mutexes" },
                  { key: "item6", label: "Write async-signal-safe handlers with volatile sig_atomic_t flags" },
                  { key: "item7", label: "Reap terminated child processes with waitpid(WNOHANG) in a SIGCHLD loop" },
                  { key: "item8", label: "Model backpressure and prevent buffer-full deadlocks in bidirectional IPC" },
                ].map((item) => (
                  <div
                    key={item.key}
                    onClick={() => toggleChecklistItem(item.key)}
                    className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center gap-3 cursor-pointer hover:bg-stone-100 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={checklist[item.key]}
                      onChange={() => {}}
                      className="w-4 h-4 text-[#ea580c] rounded-md focus:ring-orange-500 cursor-pointer"
                    />
                    <span className={`text-xs sm:text-sm ${checklist[item.key] ? "text-stone-900 font-medium" : "text-stone-500 line-through"}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-12 pt-6 border-t border-[#e7e3da] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/os/storage")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 font-medium text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 14 (Storage Architecture & I/O)</span>
          </button>

          <button
            onClick={() => navigate("/learning/os/crash-consistency")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-sm transition-colors shadow-xs"
          >
            <span>Next: Module 16 (Crash Consistency & Durability)</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        title="Nova OS Intelligence: IPC & Shared Memory"
        defaultMessage="Hello! Ask me any question about anonymous pipes, FIFOs, Unix domain sockets, POSIX shared memory, PTHREAD_PROCESS_SHARED mutexes, or signal handling!"
      />
    </div>
  );
}
