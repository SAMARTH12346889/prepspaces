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
  BarChart2,
  Clock,
  Timer,
  GitBranch,
  Split,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 7                                   */
/* Threads and Multithreaded Programming                                      */
/* POSIX Threads · Memory Model · Amdahl's Law · False Sharing · Benchmarking */
/* -------------------------------------------------------------------------- */

export default function OSThreads() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(30);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-lab' | 'checklist' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // ---------------------------------------------------------------------------
  // Interactive Tool 1: Amdahl's Law Speedup Simulator
  // ---------------------------------------------------------------------------
  const [parallelFraction, setParallelFraction] = useState(0.85); // 0.50 to 0.99
  const [numCores, setNumCores] = useState(4); // 1, 2, 4, 8, 16, 32, 64

  const amdahlCalculations = useMemo(() => {
    const P = parallelFraction;
    const S_serial = 1 - P;
    const N = numCores;
    const speedup = 1 / (S_serial + P / N);
    const maxTheoreticalSpeedup = 1 / S_serial;
    const efficiency = (speedup / N) * 100;

    // Precalculate speedup curve across standard core counts [1, 2, 4, 8, 16, 32, 64]
    const coreCounts = [1, 2, 4, 8, 16, 32, 64];
    const curve = coreCounts.map((c) => ({
      cores: c,
      speedup: Number((1 / (S_serial + P / c)).toFixed(2)),
      efficiency: Number(((1 / (S_serial + P / c) / c) * 100).toFixed(1)),
    }));

    return {
      P,
      S_serial,
      N,
      speedup: Number(speedup.toFixed(2)),
      maxTheoreticalSpeedup: Number(maxTheoreticalSpeedup.toFixed(2)),
      efficiency: Number(efficiency.toFixed(1)),
      curve,
    };
  }, [parallelFraction, numCores]);

  // ---------------------------------------------------------------------------
  // Interactive Tool 2: False Sharing Visualizer State
  // ---------------------------------------------------------------------------
  const [cacheLineMode, setCacheLineMode] = useState("unpadded"); // 'unpadded' | 'padded'
  const [simStep, setSimStep] = useState(0);

  // ---------------------------------------------------------------------------
  // Interactive Tool 3: POSIX Thread Lifecycle Simulator
  // ---------------------------------------------------------------------------
  const [threadSimState, setThreadSimState] = useState("IDLE"); // 'IDLE' | 'CREATED' | 'RUNNING' | 'JOINING' | 'REAPED'

  // ---------------------------------------------------------------------------
  // Interactive Tool 4: Terminal Sandbox State
  // ---------------------------------------------------------------------------
  const [terminalHistory, setTerminalHistory] = useState([
    {
      command: "gcc -O2 -pthread thread_bench.c -o thread_bench -lm",
      output: "[Compilation succeeded: 0 warnings, thread_bench binary ready]",
      type: "success",
    },
    {
      command: "./thread_bench 50000000",
      output: `[PrepSpaces Multi-Core Benchmark Suite]
Workload: 50,000,000 mathematical iterations
Host CPU: 8 logical cores detected via sysconf(_SC_NPROCESSORS_ONLN)

--- Single-Threaded Baseline ---
Threads: 1 | Time: 1240.50 ms | Result: 1250000025000000.00 | Speedup: 1.00x | Efficiency: 100.0%

--- Multithreaded Execution (2 Threads) ---
Threads: 2 | Time:  632.40 ms | Result: 1250000025000000.00 | Speedup: 1.96x | Efficiency:  98.1%

--- Multithreaded Execution (4 Threads) ---
Threads: 4 | Time:  328.10 ms | Result: 1250000025000000.00 | Speedup: 3.78x | Efficiency:  94.5%

--- Multithreaded Execution (8 Threads) ---
Threads: 8 | Time:  185.60 ms | Result: 1250000025000000.00 | Speedup: 6.68x | Efficiency:  83.6%`,
      type: "info",
    },
  ]);
  const [customCommand, setCustomCommand] = useState("");

  // ---------------------------------------------------------------------------
  // Section: Capstone Lab Checklist State (7 items matching curriculum)
  // ---------------------------------------------------------------------------
  const [checklist, setChecklist] = useState({
    gccCompilePthread: false,
    baselineVsMultithread: false,
    speedupEfficiencyMath: false,
    amdahlSerialAnalysis: false,
    falseSharingDiagnosis: false,
    cachePaddingVerification: false,
    comprehensiveReport: false,
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  // ---------------------------------------------------------------------------
  // Section: Knowledge Assessment State (6 questions matching curriculum)
  // ---------------------------------------------------------------------------
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "1. What state is typically private to each thread rather than shared among all threads in a process?",
      options: [
        "Global variables and open file descriptors",
        "Heap allocations and virtual address space mappings",
        "Private execution stack and CPU register set (PC, SP, general registers)",
        "Signal handlers and process credentials (UID/GID)",
      ],
      correctIndex: 2,
      explanation:
        "Every thread has its own private execution context: a dedicated stack (holding local variables, return frames, and stack pointer), program counter (PC), and CPU register set. In contrast, the heap, static/global variables, file descriptor table, and virtual address space are shared among all threads within the process.",
    },
    {
      id: 2,
      question: "2. What is the primary consequence of terminating a joinable thread without ever calling pthread_join()?",
      options: [
        "The entire operating system crashes immediately",
        "The thread's exit code, return values, and internal kernel bookkeeping structures remain allocated, causing a resource leak",
        "The child thread automatically reverts into an independent parent process",
        "All CPU caches are purged on every core",
      ],
      correctIndex: 1,
      explanation:
        "By default, POSIX threads are joinable. When a joinable thread terminates, its termination status and internal OS thread descriptors are retained until another thread calls `pthread_join()`. If `pthread_join()` is omitted (and the thread was not detached via `pthread_detach()`), the system leaks thread descriptors—analogous to zombie processes.",
    },
    {
      id: 3,
      question: "3. Can a multithreaded application running on a single-core CPU achieve true parallelism?",
      options: [
        "Yes, threads always execute in parallel regardless of physical core count",
        "No, it achieves concurrency via rapid OS time-slicing (interleaving), but true parallelism requires multiple physical CPU cores",
        "Yes, if compiled with gcc -O3 -pthread",
        "No, single-core CPUs do not allow threads to be created",
      ],
      correctIndex: 1,
      explanation:
        "Concurrency is about dealing with lots of things at once (structuring tasks so their execution can overlap or interleave via context switching). Parallelism is doing lots of things simultaneously at the physical hardware level. On a single-core machine, execution is interleaved through time-slicing; true parallelism requires multiple cores.",
    },
    {
      id: 4,
      question: "4. What happens when an application creates 1,000 CPU-bound threads on a 4-core CPU (thread oversubscription)?",
      options: [
        "The computation finishes 250 times faster because of parallel queueing",
        "Severe performance collapse caused by excessive context-switching overhead, scheduler contention, and L1/L2 cache pollution",
        "The kernel merges all 1,000 threads into a single hardware instruction",
        "Memory bandwidth drops to zero and locks the hardware bus",
      ],
      correctIndex: 1,
      explanation:
        "Creating far more runnable threads than physical cores (oversubscription) causes massive overhead. The OS scheduler must continually context switch between threads (~1–2 microseconds per switch), constantly flushing L1/L2 caches and trashing CPU instruction pipelines, yielding drastically worse throughput than running exactly 4 worker threads.",
    },
    {
      id: 5,
      question: "5. What causes 'false sharing' in a multithreaded application?",
      options: [
        "Threads sharing file descriptors over a Unix domain socket",
        "Two threads concurrently executing the exact same binary code",
        "Independent threads running on distinct CPU cores repeatedly modifying separate variables that happen to share the same 64-byte cache line",
        "Threads calling malloc() simultaneously from the same heap arena",
      ],
      correctIndex: 2,
      explanation:
        "False sharing occurs when two CPU cores modify independent variables that reside within the same 64-byte hardware cache line. The CPU cache coherency protocol (MESI/MOESI) forces the cache line to bounce between cores in an 'Invalidate / Modified' cycle ('cache ping-pong'), inflating memory access times from ~1ns to ~50ns per write.",
    },
    {
      id: 6,
      question: "6. According to Amdahl's Law, if 80% of an algorithm is parallelizable (P = 0.80) and 20% is strictly serial, what is the maximum theoretical speedup on a 4-core machine?",
      options: [
        "4.00x",
        "2.50x",
        "1.80x",
        "5.00x",
      ],
      correctIndex: 1,
      explanation:
        "By Amdahl's Law: S(N) = 1 / ((1 - P) + P / N). Here P = 0.80, so (1 - P) = 0.20 serial fraction. For N = 4 cores: S(4) = 1 / (0.20 + 0.80 / 4) = 1 / (0.20 + 0.20) = 1 / 0.40 = 2.50x. Even with infinite cores, the speedup can never exceed 1 / 0.20 = 5.00x.",
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
  gcc -O2 -pthread thread_bench.c -o thread_bench -lm
  ./thread_bench 50000000
  ./thread_bench --threads 4
  ./thread_bench --test-false-sharing
  nproc
  lscpu | grep "Model name\\|CPU(s):\\|L1d cache"
  clear`;
    } else if (raw.includes("gcc") && raw.includes("-pthread")) {
      output = `gcc -O2 -pthread thread_bench.c -o thread_bench -lm
[Build Info]: Linking POSIX Threads library libpthread.so
[Binary Built]: ./thread_bench (ELF 64-bit LSB pie executable, x86-64, dynamic symbols)`;
      type = "success";
    } else if (raw === "nproc") {
      output = "8";
      type = "info";
    } else if (raw.includes("lscpu")) {
      output = `Model name:          13th Gen Intel(R) Core(TM) i7-13700H
CPU(s):              8 (physical) / 16 (logical threads)
L1d cache:           48 KiB per core (64-byte line size)
L2 cache:            1.25 MiB per core
L3 cache:            24 MiB shared`;
      type = "info";
    } else if (raw.includes("./thread_bench --test-false-sharing")) {
      output = `[Cache Line Contention Experiment: 100,000,000 writes per thread]
Running 2 threads on 2 distinct physical cores...

Test A: Contended struct (Unpadded, sum0 & sum1 share same 64-byte cache line):
  Time: 1842.10 ms  (Severe MESI Invalidate storm / Cache Ping-Pong)

Test B: Cache-Aligned struct (alignas(64) padding):
  Time:  214.30 ms  (L1 hit locality, 0 coherency stalls)

===> PERFORMANCE DIFFERENCE: 8.60x FASTER by eliminating false sharing!`;
      type = "success";
    } else if (raw.includes("./thread_bench --threads 4")) {
      output = `[PrepSpaces Benchmark]: Fixed 4 worker threads
Core Affinity: Worker 0 -> Core 0, Worker 1 -> Core 1, Worker 2 -> Core 2, Worker 3 -> Core 3
Range split: [0..12.5M], [12.5M..25M], [25M..37.5M], [37.5M..50M]
Execution Time: 326.80 ms
Speedup over baseline (1240.50 ms): 3.80x (95.0% parallel efficiency)`;
      type = "success";
    } else if (raw.includes("./thread_bench")) {
      output = `[PrepSpaces Multi-Core Benchmark Suite]
Workload: 50,000,000 mathematical iterations
Host CPU: 8 logical cores detected via sysconf(_SC_NPROCESSORS_ONLN)

--- Single-Threaded Baseline ---
Threads: 1 | Time: 1240.50 ms | Result: 1250000025000000.00 | Speedup: 1.00x | Efficiency: 100.0%

--- Multithreaded Execution (2 Threads) ---
Threads: 2 | Time:  632.40 ms | Result: 1250000025000000.00 | Speedup: 1.96x | Efficiency:  98.1%

--- Multithreaded Execution (4 Threads) ---
Threads: 4 | Time:  328.10 ms | Result: 1250000025000000.00 | Speedup: 3.78x | Efficiency:  94.5%

--- Multithreaded Execution (8 Threads) ---
Threads: 8 | Time:  185.60 ms | Result: 1250000025000000.00 | Speedup: 6.68x | Efficiency:  83.6%`;
      type = "info";
    } else {
      output = `bash: ${raw}: command not found. Type 'help' for available benchmark commands.`;
      type = "error";
    }

    setTerminalHistory((prev) => [...prev, { command: raw, output, type }]);
    setCustomCommand("");
  };

  // C code snippet for Lesson 2
  const pthreadExampleCode = `#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>

#define NUM_THREADS 4

typedef struct {
    int thread_id;
    long start_val;
    long end_val;
    long long partial_sum;
} worker_arg_t;

// Thread start routine
void* compute_range_sum(void* arg) {
    worker_arg_t* data = (worker_arg_t*)arg;
    long long sum = 0;
    for (long i = data->start_val; i <= data->end_val; i++) {
        sum += i;
    }
    data->partial_sum = sum;
    
    // Return heap pointer or data struct (Never return local stack pointer!)
    pthread_exit((void*)&data->partial_sum);
}

int main(void) {
    pthread_t threads[NUM_THREADS];
    worker_arg_t args[NUM_THREADS];
    long range_size = 25000000;

    printf("[Main] Spawning %d POSIX threads...\\n", NUM_THREADS);

    // 1. Thread Creation
    for (int i = 0; i < NUM_THREADS; i++) {
        args[i].thread_id = i;
        args[i].start_val = i * range_size + 1;
        args[i].end_val = (i + 1) * range_size;
        args[i].partial_sum = 0;

        int rc = pthread_create(&threads[i], NULL, compute_range_sum, (void*)&args[i]);
        if (rc != 0) {
            perror("pthread_create failed");
            exit(EXIT_FAILURE);
        }
    }

    // 2. Thread Joining & Reaping
    long long grand_total = 0;
    for (int i = 0; i < NUM_THREADS; i++) {
        void* retval = NULL;
        pthread_join(threads[i], &retval);
        long long* thread_result = (long long*)retval;
        grand_total += *thread_result;
        printf("  -> Thread %d completed. Partial sum: %lld\\n", i, *thread_result);
    }

    printf("[Main] All threads joined. Grand Total: %lld\\n", grand_total);
    return 0;
}`;

  // Complete Capstone Lab C source code
  const capstoneBenchCode = `/* thread_bench.c - Complete Multi-Threaded Benchmark & Speedup Lab
 * Compile: gcc -O2 -pthread thread_bench.c -o thread_bench -lm
 * Usage:   ./thread_bench [iterations]
 */
#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <time.h>
#include <math.h>
#include <unistd.h>
#include <string.h>

typedef struct {
    long start_idx;
    long end_idx;
    double local_sum;
} WorkerTask;

// False sharing test structures
typedef struct {
    uint64_t counter; // Unpadded: multiple instances pack into 1 cache line
} ContendedCounter;

typedef struct {
    alignas(64) uint64_t counter; // Padded: isolated to dedicated 64-byte cache line
    char pad[56];
} AlignedCounter;

// Workload: Mathematical square root summation
void* worker_calc(void* arg) {
    WorkerTask* task = (WorkerTask*)arg;
    double sum = 0.0;
    for (long i = task->start_idx; i < task->end_idx; i++) {
        sum += sqrt((double)i);
    }
    task->local_sum = sum;
    pthread_exit(NULL);
}

// Precise monotonic timer
double get_time_sec(void) {
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    return ts.tv_sec + ts.tv_nsec * 1e-9;
}

int main(int argc, char* argv[]) {
    long total_iterations = 50000000;
    if (argc > 1) {
        total_iterations = atol(argv[1]);
    }

    int core_count = sysconf(_SC_NPROCESSORS_ONLN);
    printf("============================================================\\n");
    printf(" PREPSPACES MULTI-THREADED BENCHMARK SUITE (POSIX PTHREADS)\\n");
    printf(" Host System: %d Active Logical CPU Cores\\n", core_count);
    printf(" Workload:    %ld Mathematical Iterations\\n", total_iterations);
    printf("============================================================\\n\\n");

    // Step 1: Single-Threaded Baseline
    printf("--- Running Single-Threaded Baseline ---\\n");
    double t_start = get_time_sec();
    double baseline_sum = 0.0;
    for (long i = 0; i < total_iterations; i++) {
        baseline_sum += sqrt((double)i);
    }
    double t_baseline = get_time_sec() - t_start;
    printf("Baseline (1 Thread):  Time = %8.2f ms | Sum = %.2e\\n\\n", 
           t_baseline * 1000.0, baseline_sum);

    // Step 2: Multi-Threaded Scalability Runs
    int test_thread_counts[] = {2, 4, 8};
    int num_tests = sizeof(test_thread_counts) / sizeof(test_thread_counts[0]);

    for (int t = 0; t < num_tests; t++) {
        int threads_to_use = test_thread_counts[t];
        pthread_t* tid = malloc(threads_to_use * sizeof(pthread_t));
        WorkerTask* tasks = malloc(threads_to_use * sizeof(WorkerTask));

        long chunk_size = total_iterations / threads_to_use;
        t_start = get_time_sec();

        for (int i = 0; i < threads_to_use; i++) {
            tasks[i].start_idx = i * chunk_size;
            tasks[i].end_idx = (i == threads_to_use - 1) ? total_iterations : (i + 1) * chunk_size;
            tasks[i].local_sum = 0.0;
            pthread_create(&tid[i], NULL, worker_calc, &tasks[i]);
        }

        double parallel_sum = 0.0;
        for (int i = 0; i < threads_to_use; i++) {
            pthread_join(tid[i], NULL);
            parallel_sum += tasks[i].local_sum;
        }
        double t_parallel = get_time_sec() - t_start;
        double speedup = t_baseline / t_parallel;
        double efficiency = (speedup / threads_to_use) * 100.0;

        printf("Threads: %2d | Time: %8.2f ms | Speedup: %5.2fx | Efficiency: %5.1f%%\\n",
               threads_to_use, t_parallel * 1000.0, speedup, efficiency);

        free(tid);
        free(tasks);
    }

    printf("\\n[Lab Verification]: Notice parallel efficiency gradually drops as thread count\\n");
    printf("approaches core capacity due to synchronization, memory bus saturation, and Amdahl's Law.\\n");
    return 0;
}`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 flex flex-col font-sans selection:bg-orange-500/20 selection:text-orange-900">
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Module Navigation Header */}
        <ModuleNav
          track="os"
          currentModuleId="threads"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
          aiTutorLabel="Nova OS Tutor"
        />

        {/* Hero Section */}
        <section className="bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 shadow-xs mb-8 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800">
                  <Split className="w-3.5 h-3.5" />
                  Module 7 of 15
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-600">
                  PrepSpaces Operating Systems Master Course
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                  POSIX Threads · C11 · NPTL · Amdahl's Law
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                Threads and Multithreaded Programming
              </h1>
              <p className="text-stone-600 max-w-3xl text-base sm:text-lg leading-relaxed">
                Threads are the fundamental unit of execution in modern software. Master the architectural boundary between processes and threads, write production-grade POSIX thread C code, eliminate cache false sharing, evaluate Amdahl's Law, and benchmark parallel scalability on multicore processors.
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
                  Capstone Lab
                </div>
                <div className="text-sm font-medium text-stone-700">thread_bench.c Multi-Core Lab</div>
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
              <BarChart2 className="w-4 h-4" />
              2. Amdahl's Law, False Sharing & Lab
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

        {/* AI Assistant Drawer */}
        {showAiTutor && (
          <div className="mb-8">
            <LearningRo currentTopic="os-threads" />
          </div>
        )}

        {/* TAB 1: CURRICULUM & THEORY */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Learning Outcomes Box */}
            <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-orange-200 rounded-2xl p-6 sm:p-7">
              <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-orange-600" />
                Module 7 Learning Outcomes
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                By completing this module, you will master the foundational mechanics of concurrent and parallel software systems:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Differentiate processes, threads, shared address spaces, and private execution contexts.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Safely create, join, detach, and terminate POSIX threads using C pthread APIs.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Contrast User-Level (1:N), Kernel-Level (1:1), and Hybrid (M:N) threading architectures.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Inspect thread stack layouts, guard pages, and Thread-Local Storage (<code className="text-xs bg-stone-200/80 px-1 py-0.5 rounded">_Thread_local</code>).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Distinguish concurrency (interleaving) from hardware parallelism (multicore simultaneous execution).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Formulate and calculate theoretical speedups using Amdahl's Law (<code className="text-xs bg-stone-200/80 px-1 py-0.5 rounded">S = 1 / ((1-P) + P/N)</code>).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Diagnose and eliminate cache false sharing using 64-byte alignment and data padding.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Build, run, and benchmark multithreaded numerical programs measuring speedup and parallel efficiency.</span>
                </div>
              </div>
            </div>

            {/* LESSON 1: PROCESSES VERSUS THREADS */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 1
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Processes versus Threads: Shared Memory & Private State
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  In operating systems, a <strong>process</strong> represents an isolated execution environment with its own dedicated virtual address space, memory page tables, user credentials, and file descriptor table. In contrast, a <strong>thread</strong> (often called a <em>lightweight process</em>) represents an independent stream of instructions executing within that shared address space.
                </p>

                {/* Comparison Table */}
                <div className="overflow-x-auto my-6 border border-stone-200 rounded-xl shadow-xs">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-stone-50 border-b border-stone-200 text-stone-900 font-semibold">
                      <tr>
                        <th className="px-4 py-3">Resource Component</th>
                        <th className="px-4 py-3">Processes (Isolated)</th>
                        <th className="px-4 py-3">Threads within Same Process (Shared vs Private)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 font-mono text-xs">
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-2.5 font-bold font-sans text-stone-800">Virtual Address Space</td>
                        <td className="px-4 py-2.5 text-stone-600">Strictly isolated (separate page tables)</td>
                        <td className="px-4 py-2.5 text-emerald-700 font-semibold font-sans">Shared (identical page tables across all threads)</td>
                      </tr>
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-2.5 font-bold font-sans text-stone-800">Heap & Global Variables</td>
                        <td className="px-4 py-2.5 text-stone-600">Isolated per process</td>
                        <td className="px-4 py-2.5 text-emerald-700 font-semibold font-sans">Shared directly (pointers can be passed without IPC)</td>
                      </tr>
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-2.5 font-bold font-sans text-stone-800">File Descriptors & Sockets</td>
                        <td className="px-4 py-2.5 text-stone-600">Independent tables</td>
                        <td className="px-4 py-2.5 text-emerald-700 font-semibold font-sans">Shared (closing an FD closes it for all threads)</td>
                      </tr>
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-2.5 font-bold font-sans text-stone-800">Execution Stack & SP</td>
                        <td className="px-4 py-2.5 text-stone-600">Independent private stack</td>
                        <td className="px-4 py-2.5 text-amber-700 font-semibold font-sans">Private dedicated stack per thread (default ~2–8MB)</td>
                      </tr>
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-2.5 font-bold font-sans text-stone-800">CPU Registers & PC</td>
                        <td className="px-4 py-2.5 text-stone-600">Private hardware context</td>
                        <td className="px-4 py-2.5 text-amber-700 font-semibold font-sans">Private hardware context saved on context switch</td>
                      </tr>
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-2.5 font-bold font-sans text-stone-800">Creation & Switch Cost</td>
                        <td className="px-4 py-2.5 text-rose-700 font-semibold font-sans">High (allocating mm_struct, TLB flush)</td>
                        <td className="px-4 py-2.5 text-blue-700 font-semibold font-sans">Low (no TLB flush, shared address space)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-4 text-sm text-amber-900">
                  <div className="font-bold flex items-center gap-1.5 mb-1">
                    <AlertTriangle className="w-4 h-4 text-amber-700" />
                    The Concurrency Hazard: Unsynchronized Shared Memory
                  </div>
                  <p>
                    Because threads share the same virtual heap and global variables, concurrent writes cause catastrophic race conditions. A simple statement like <code className="bg-amber-100 text-amber-900 px-1 py-0.5 rounded font-mono">counter++</code> expands in assembly into three distinct instructions:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1 mt-2 font-mono text-xs text-amber-950">
                    <li><code className="font-bold">MOV eax, [counter]</code> — Read memory into CPU register</li>
                    <li><code className="font-bold">ADD eax, 1</code> — Increment CPU register value</li>
                    <li><code className="font-bold">MOV [counter], eax</code> — Write register value back to memory</li>
                  </ol>
                  <p className="mt-2 text-xs">
                    If an OS context switch occurs between instruction 1 and 3, two threads will overwrite each other's work, corrupting the final count.
                  </p>
                </div>
              </div>
            </article>

            {/* LESSON 2: THREAD LIFECYCLE & POSIX THREADS */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 2
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                POSIX Threads (pthreads) Lifecycle and API
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  The IEEE POSIX 1003.1c standard defines <code className="bg-stone-100 text-stone-800 px-1.5 py-0.5 rounded font-mono text-sm">pthreads</code>, the standard multithreading C API implemented on Linux via the Native POSIX Thread Library (NPTL).
                </p>

                {/* API Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="border border-stone-200 rounded-xl p-4 bg-stone-50/60">
                    <div className="flex items-center justify-between font-mono font-bold text-xs text-blue-800 mb-1">
                      <span>pthread_create()</span>
                      <span className="text-[10px] bg-blue-100 px-2 py-0.5 rounded text-blue-700">Creation</span>
                    </div>
                    <p className="text-xs text-stone-600 mb-2">
                      Creates a new thread and begins execution at <code className="text-stone-800">start_routine(arg)</code>.
                    </p>
                    <code className="block bg-stone-900 text-stone-100 p-2.5 rounded-lg text-xs font-mono">
                      int pthread_create(pthread_t *thread, const pthread_attr_t *attr, void *(*start_routine)(void *), void *arg);
                    </code>
                  </div>

                  <div className="border border-stone-200 rounded-xl p-4 bg-stone-50/60">
                    <div className="flex items-center justify-between font-mono font-bold text-xs text-emerald-800 mb-1">
                      <span>pthread_join()</span>
                      <span className="text-[10px] bg-emerald-100 px-2 py-0.5 rounded text-emerald-700">Reaping</span>
                    </div>
                    <p className="text-xs text-stone-600 mb-2">
                      Suspends calling thread until target thread terminates. Reclaims thread resources and retrieves return pointer.
                    </p>
                    <code className="block bg-stone-900 text-stone-100 p-2.5 rounded-lg text-xs font-mono">
                      int pthread_join(pthread_t thread, void **retval);
                    </code>
                  </div>

                  <div className="border border-stone-200 rounded-xl p-4 bg-stone-50/60">
                    <div className="flex items-center justify-between font-mono font-bold text-xs text-amber-800 mb-1">
                      <span>pthread_detach()</span>
                      <span className="text-[10px] bg-amber-100 px-2 py-0.5 rounded text-amber-700">Auto-Reap</span>
                    </div>
                    <p className="text-xs text-stone-600 mb-2">
                      Marks thread as detached. Internal resources are automatically reclaimed immediately when thread terminates without joining.
                    </p>
                    <code className="block bg-stone-900 text-stone-100 p-2.5 rounded-lg text-xs font-mono">
                      int pthread_detach(pthread_t thread);
                    </code>
                  </div>

                  <div className="border border-stone-200 rounded-xl p-4 bg-stone-50/60">
                    <div className="flex items-center justify-between font-mono font-bold text-xs text-rose-800 mb-1">
                      <span>pthread_exit()</span>
                      <span className="text-[10px] bg-rose-100 px-2 py-0.5 rounded text-rose-700">Termination</span>
                    </div>
                    <p className="text-xs text-stone-600 mb-2">
                      Terminates the calling thread cleanly and passes return pointer to any joining thread.
                    </p>
                    <code className="block bg-stone-900 text-stone-100 p-2.5 rounded-lg text-xs font-mono">
                      void pthread_exit(void *retval);
                    </code>
                  </div>
                </div>

                {/* Code Sample */}
                <div className="relative rounded-xl overflow-hidden border border-stone-800 bg-stone-900 text-stone-200 font-mono text-xs my-4">
                  <div className="flex items-center justify-between px-4 py-2 bg-stone-950 border-b border-stone-800 text-stone-400">
                    <span className="flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-orange-500" />
                      pthread_parallel_sum.c — Safe Thread Argument & Return Pattern
                    </span>
                    <button
                      onClick={() => copyToClipboard(pthreadExampleCode, "pthread-c")}
                      className="flex items-center gap-1 hover:text-white transition cursor-pointer"
                    >
                      {copiedCodeId === "pthread-c" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto leading-relaxed max-h-96">
                    <code>{pthreadExampleCode}</code>
                  </pre>
                </div>
              </div>
            </article>

            {/* LESSON 3: THREADING MODELS, STACKS & TLS */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 3
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Threading Models, Stack Allocation & Thread-Local Storage
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  How do user-space threads relate to hardware CPU execution units managed by the operating system kernel? Operating systems have historically explored three architectures:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="border border-stone-200 rounded-xl p-4 bg-stone-50">
                    <div className="font-bold text-stone-900 text-sm mb-1 flex items-center justify-between">
                      <span>Many-to-One (1:N)</span>
                      <span className="text-[10px] bg-stone-200 px-1.5 py-0.5 rounded text-stone-700">User-Level</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      All user threads run on a single kernel thread. Context switching is ultra-fast in user space without syscalls. However: <strong>one blocking I/O call halts the entire application</strong>, and it cannot leverage multiple CPU cores.
                    </p>
                  </div>

                  <div className="border border-blue-200 rounded-xl p-4 bg-blue-50/50">
                    <div className="font-bold text-blue-900 text-sm mb-1 flex items-center justify-between">
                      <span>One-to-One (1:1)</span>
                      <span className="text-[10px] bg-blue-200 px-1.5 py-0.5 rounded text-blue-800 font-semibold">Linux NPTL</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Every user thread maps directly to an OS kernel scheduling entity (<code className="text-xs bg-white px-1 py-0.5 rounded">task_struct</code> in Linux via <code className="text-xs bg-white px-1 py-0.5 rounded">clone()</code>). Yields true multicore hardware parallelism; blocking syscalls only suspend the calling thread.
                    </p>
                  </div>

                  <div className="border border-purple-200 rounded-xl p-4 bg-purple-50/50">
                    <div className="font-bold text-purple-900 text-sm mb-1 flex items-center justify-between">
                      <span>Many-to-Many (M:N)</span>
                      <span className="text-[10px] bg-purple-200 px-1.5 py-0.5 rounded text-purple-800">Hybrid / Go</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Multiplexes many user lightweight coroutines (such as Go goroutines or Erlang processes) onto a smaller pool of kernel threads. Highly scalable, but requires a complex runtime user scheduler and work-stealing logic.
                    </p>
                  </div>
                </div>

                {/* Stacks and Guard Pages */}
                <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
                  Thread Stacks and the Memory Guard Page
                </h3>
                <p>
                  When a new thread is created, <code className="font-mono text-sm bg-stone-100 px-1 py-0.5 rounded">pthread_create</code> allocates a fresh virtual memory region for the thread's execution stack using <code className="font-mono text-sm bg-stone-100 px-1 py-0.5 rounded">mmap()</code>. On Linux, the default thread stack size is typically 2MB or 8MB (controlled via <code className="font-mono text-sm bg-stone-100 px-1 py-0.5 rounded">pthread_attr_setstacksize</code>).
                </p>
                <div className="bg-stone-100 border border-stone-200 rounded-xl p-4 font-mono text-xs">
                  <div className="font-bold text-stone-800 mb-2 font-sans text-sm">Thread Virtual Stack Memory Layout:</div>
                  <div className="space-y-1">
                    <div className="bg-stone-300 text-stone-800 p-2 rounded text-center">[High Address: Thread Stack Top (Initial SP)]</div>
                    <div className="bg-stone-200 text-stone-700 p-3 rounded text-center">Stack Growth Direction ↓ (Local variables, function frames)</div>
                    <div className="bg-rose-200 text-rose-900 p-2 rounded text-center font-bold border border-rose-300">
                      [Guard Page: 4KB mprotect(PROT_NONE) — Triggers SIGSEGV immediately on Stack Overflow]
                    </div>
                  </div>
                </div>

                {/* Thread Local Storage */}
                <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
                  Thread-Local Storage (TLS)
                </h3>
                <p>
                  When each thread requires its own persistent instance of a variable across function calls without passing pointers everywhere, <strong>Thread-Local Storage (TLS)</strong> is used. C11 introduced the standardized <code className="font-mono text-sm bg-stone-100 px-1 py-0.5 rounded">_Thread_local</code> keyword (or <code className="font-mono text-sm bg-stone-100 px-1 py-0.5 rounded">__thread</code> in GCC):
                </p>
                <code className="block bg-stone-900 text-stone-100 p-3 rounded-lg text-xs font-mono my-2">
                  {`_Thread_local int thread_transaction_id = 0; // Each thread has its own independent copy`}
                </code>
              </div>
            </article>

            {/* LESSON 4: CONCURRENCY, PARALLELISM & THREAD POOLS */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 4
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Concurrency vs Parallelism & Thread Pool Architecture
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                  <div className="border-l-4 border-blue-500 pl-4 py-1">
                    <h4 className="font-bold text-stone-900 text-base mb-1">Concurrency (Interleaving)</h4>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      Structuring a system to handle multiple tasks by time-slicing execution on available CPUs. Even on a single CPU core, an OS can interleave 10 threads so all make progress over time. <em>"Concurrency is about dealing with lots of things at once."</em>
                    </p>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-4 py-1">
                    <h4 className="font-bold text-stone-900 text-base mb-1">Parallelism (Simultaneous)</h4>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      Executing multiple computational operations physically simultaneously at the exact same instant in time across distinct hardware CPU cores. <em>"Parallelism is doing lots of things at once."</em>
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
                  Why Production Systems Use Thread Pools
                </h3>
                <p>
                  Creating and destroying a thread per request (e.g. in a web server) is an antipattern because:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-stone-700">
                  <li><strong>Kernel creation overhead:</strong> Allocating page tables, virtual memory regions, and kernel structures takes ~10–50 microseconds per thread.</li>
                  <li><strong>Oversubscription:</strong> If 10,000 requests arrive, launching 10,000 threads consumes gigabytes of stack memory and collapses CPU throughput in context switching.</li>
                  <li><strong>Thread Pool Solution:</strong> A fixed pool of worker threads is created at startup (typically matching CPU core count or core count × 2). Tasks are submitted to a shared, thread-safe queue. Workers dequeue tasks, execute them, and wait for new work without thread creation churn.</li>
                </ul>
              </div>
            </article>

            {/* LESSON 5: AMDAHL'S LAW & FALSE SHARING */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 5
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Amdahl's Law and Cache False Sharing
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  Why don't 8 threads make a program run 8 times faster? Two primary hardware and mathematical laws govern multithreaded performance:
                </p>

                {/* Amdahl's Law Section */}
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 my-4">
                  <h4 className="font-bold text-stone-900 text-base mb-2">1. Amdahl's Law: The Serial Bottleneck</h4>
                  <p className="text-sm text-stone-700 mb-3">
                    Formulated by computer architect Gene Amdahl, this law states that the maximum speedup achievable by parallelizing a program is strictly limited by the <strong>serial fraction</strong> of the program that cannot be parallelized:
                  </p>
                  <div className="bg-white border border-stone-300 rounded-lg p-3 text-center font-mono font-bold text-stone-900 text-base my-2">
                    Speedup S(N) = 1 / ((1 - P) + P / N)
                  </div>
                  <p className="text-xs text-stone-600">
                    Where <code className="font-bold text-stone-800">P</code> is the parallelizable fraction (0.0 to 1.0), and <code className="font-bold text-stone-800">N</code> is the number of CPU cores.
                  </p>
                  <div className="mt-3 text-xs bg-amber-50 text-amber-900 border border-amber-200 rounded-lg p-3">
                    <strong>Critical Insight:</strong> If 10% of a program must run serially (<code className="font-mono">P = 0.90</code>), then even if you run it on an infinitely large supercomputer with 1,000,000 cores, the maximum possible speedup can <strong>never exceed 10x</strong> (since <code className="font-mono">1 / 0.10 = 10</code>).
                  </div>
                </div>

                {/* False Sharing Section */}
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 my-4">
                  <h4 className="font-bold text-stone-900 text-base mb-2">2. False Sharing: The Cache Coherency Trap</h4>
                  <p className="text-sm text-stone-700 mb-3">
                    Modern CPUs do not fetch individual bytes or 8-byte integers from RAM; they fetch memory in <strong>64-byte chunks known as Cache Lines</strong>.
                  </p>
                  <p className="text-sm text-stone-700">
                    When Core 0 updates variable <code className="font-mono text-xs bg-stone-200 px-1 py-0.5 rounded">A</code> and Core 1 updates variable <code className="font-mono text-xs bg-stone-200 px-1 py-0.5 rounded">B</code>, if <code className="font-mono text-xs bg-stone-200 px-1 py-0.5 rounded">A</code> and <code className="font-mono text-xs bg-stone-200 px-1 py-0.5 rounded">B</code> happen to live within the same 64-byte block, the hardware cache coherency protocol (MESI/MOESI) forces the cache line to invalidate back and forth between core L1 caches.
                  </p>
                  <div className="mt-3 text-xs bg-rose-50 text-rose-900 border border-rose-200 rounded-lg p-3">
                    <strong>The Solution: Cache Alignment & Padding</strong>
                    <pre className="mt-2 bg-stone-900 text-stone-100 p-2.5 rounded font-mono text-xs">
{`// Prevent false sharing by forcing 64-byte alignment
typedef struct {
    alignas(64) uint64_t counter; // Isolated to its own 64-byte cache line
} WorkerCounter;`}
                    </pre>
                  </div>
                </div>
              </div>
            </article>

            {/* LESSON 6: CAPSTONE BENCHMARKING LAB */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 6 & Capstone Lab
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Capstone Lab: Multi-Threaded Scalability Benchmark
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  In this hands-on capstone project, you implement and benchmark a complete multithreaded C program measuring the exact execution speedup ($S = T_1 / T_N$) and parallel efficiency ($E = S / N \times 100\%$) across multiple thread counts.
                </p>

                <div className="relative rounded-xl overflow-hidden border border-stone-800 bg-stone-900 text-stone-200 font-mono text-xs my-4">
                  <div className="flex items-center justify-between px-4 py-2 bg-stone-950 border-b border-stone-800 text-stone-400">
                    <span className="flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-orange-500" />
                      thread_bench.c — Complete Benchmark Suite
                    </span>
                    <button
                      onClick={() => copyToClipboard(capstoneBenchCode, "capstone-c")}
                      className="flex items-center gap-1 hover:text-white transition cursor-pointer"
                    >
                      {copiedCodeId === "capstone-c" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Source</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto leading-relaxed max-h-96">
                    <code>{capstoneBenchCode}</code>
                  </pre>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* TAB 2: INTERACTIVE LAB (AMDAHL SIMULATOR, FALSE SHARING, & TERMINAL) */}
        {activeTab === "interactive-lab" && (
          <div className="space-y-8">
            {/* TOOL 1: AMDAHL'S LAW SIMULATOR */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <Sliders className="w-5 h-5 text-orange-600" />
                    Interactive Amdahl's Law Speedup Simulator
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">
                    Explore how the serial fraction of code constrains parallel scalability as core count increases.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full font-mono">
                    Formula: S = 1 / ((1-P) + P/N)
                  </span>
                </div>
              </div>

              {/* Sliders & Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-xl bg-stone-50 border border-stone-200 mb-6">
                <div>
                  <div className="flex justify-between items-center mb-1 text-sm font-semibold text-stone-800">
                    <span>Parallel Fraction (P):</span>
                    <span className="text-orange-600 font-mono">{(parallelFraction * 100).toFixed(0)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.50"
                    max="0.99"
                    step="0.01"
                    value={parallelFraction}
                    onChange={(e) => setParallelFraction(parseFloat(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-stone-500 mt-1">
                    <span>50% Parallel (50% Serial)</span>
                    <span>99% Highly Parallel</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1 text-sm font-semibold text-stone-800">
                    <span>Active Cores (N):</span>
                    <span className="text-orange-600 font-mono">{numCores} Cores</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2">
                    {[1, 2, 4, 8, 16, 32, 64].map((c) => (
                      <button
                        key={c}
                        onClick={() => setNumCores(c)}
                        className={`flex-1 py-1.5 rounded text-xs font-bold transition cursor-pointer ${
                          numCores === c
                            ? "bg-orange-600 text-white shadow-xs"
                            : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-100"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Real-time Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl border border-stone-200 bg-white text-center">
                  <div className="text-xs text-stone-500 font-semibold uppercase">Computed Speedup</div>
                  <div className="text-3xl font-bold text-orange-600 font-mono mt-1">
                    {amdahlCalculations.speedup}x
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">Faster than single core</div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-white text-center">
                  <div className="text-xs text-stone-500 font-semibold uppercase">Parallel Efficiency</div>
                  <div className="text-3xl font-bold text-emerald-600 font-mono mt-1">
                    {amdahlCalculations.efficiency}%
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">Hardware utilization</div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-white text-center">
                  <div className="text-xs text-stone-500 font-semibold uppercase">Max Theoretical (N = ∞)</div>
                  <div className="text-3xl font-bold text-stone-800 font-mono mt-1">
                    {amdahlCalculations.maxTheoreticalSpeedup}x
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">Limited by {((1 - parallelFraction) * 100).toFixed(0)}% serial code</div>
                </div>
              </div>

              {/* Scalability Curve Visualization */}
              <div className="border border-stone-200 rounded-xl p-4 bg-stone-50">
                <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">
                  Speedup Scaling Across Core Counts (P = {(parallelFraction * 100).toFixed(0)}%)
                </div>
                <div className="grid grid-cols-7 gap-2 items-end h-40 pt-4 px-2">
                  {amdahlCalculations.curve.map((point) => {
                    const heightPercent = Math.min(100, Math.max(10, (point.speedup / amdahlCalculations.maxTheoreticalSpeedup) * 100));
                    const isCurrent = point.cores === numCores;
                    return (
                      <div key={point.cores} className="flex flex-col items-center h-full justify-end">
                        <span className="text-[10px] font-mono font-bold text-stone-600 mb-1">{point.speedup}x</span>
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className={`w-full rounded-t-md transition-all duration-300 ${
                            isCurrent
                              ? "bg-gradient-to-t from-orange-600 to-amber-500 shadow-md ring-2 ring-orange-400"
                              : "bg-stone-300 hover:bg-stone-400"
                          }`}
                        />
                        <span className={`text-[11px] font-semibold mt-2 ${isCurrent ? "text-orange-700 font-bold" : "text-stone-600"}`}>
                          {point.cores}c
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* TOOL 2: FALSE SHARING VISUALIZER */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-rose-600" />
                    Cache False Sharing & Invalidation Visualizer
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">
                    Simulate how adjacent memory allocations on the same 64-byte L1 cache line cause MESI coherency storms.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCacheLineMode("unpadded")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      cacheLineMode === "unpadded"
                        ? "bg-rose-600 text-white"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    Unpadded (False Sharing)
                  </button>
                  <button
                    onClick={() => setCacheLineMode("padded")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      cacheLineMode === "padded"
                        ? "bg-emerald-600 text-white"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    Padded (Cache Aligned)
                  </button>
                </div>
              </div>

              {cacheLineMode === "unpadded" ? (
                <div className="border border-rose-200 bg-rose-50/40 rounded-xl p-5">
                  <div className="flex items-center gap-2 font-bold text-rose-900 text-sm mb-3">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Contended State: Single 64-Byte Cache Line Shared Between Two Cores
                  </div>
                  <div className="border-2 border-dashed border-rose-400 bg-white rounded-lg p-4 font-mono text-xs">
                    <div className="text-center font-bold text-stone-500 mb-2">[64-Byte L1 Hardware Cache Line]</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-rose-100 border border-rose-300 p-3 rounded text-center">
                        <div className="font-bold text-rose-900">Core 0: sum0</div>
                        <div className="text-[10px] text-rose-700">Offset: 0 bytes (8 bytes)</div>
                        <div className="mt-2 text-[10px] bg-rose-200 px-1 py-0.5 rounded text-rose-800">State: INVALIDATED</div>
                      </div>
                      <div className="bg-rose-100 border border-rose-300 p-3 rounded text-center">
                        <div className="font-bold text-rose-900">Core 1: sum1</div>
                        <div className="text-[10px] text-rose-700">Offset: 8 bytes (8 bytes)</div>
                        <div className="mt-2 text-[10px] bg-rose-200 px-1 py-0.5 rounded text-rose-800">State: MODIFIED</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-rose-800 leading-relaxed space-y-1">
                    <p>• <strong>Coherency Action:</strong> Every write by Core 1 broadcasts an invalidate bus signal, forcing Core 0's L1 cache to purge its copy.</p>
                    <p>• <strong>Latency Penalty:</strong> Memory access spikes from <strong>~1.2ns (L1 hit)</strong> to <strong>~45ns (inter-core bus stall)</strong>.</p>
                  </div>
                </div>
              ) : (
                <div className="border border-emerald-200 bg-emerald-50/40 rounded-xl p-5">
                  <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm mb-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Optimal State: Each Variable Aligned to Dedicated 64-Byte Cache Line
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                    <div className="border border-emerald-300 bg-white rounded-lg p-3 text-center">
                      <div className="font-bold text-emerald-900">Cache Line 0x000 (Core 0)</div>
                      <div className="bg-emerald-100 p-2 rounded mt-2 text-emerald-950 font-bold">sum0 (8B) + 56B Padding</div>
                      <div className="mt-2 text-[10px] bg-emerald-200 px-1 py-0.5 rounded text-emerald-800">State: MODIFIED (Local L1 Hit)</div>
                    </div>
                    <div className="border border-emerald-300 bg-white rounded-lg p-3 text-center">
                      <div className="font-bold text-emerald-900">Cache Line 0x040 (Core 1)</div>
                      <div className="bg-emerald-100 p-2 rounded mt-2 text-emerald-950 font-bold">sum1 (8B) + 56B Padding</div>
                      <div className="mt-2 text-[10px] bg-emerald-200 px-1 py-0.5 rounded text-emerald-800">State: MODIFIED (Local L1 Hit)</div>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-emerald-800 leading-relaxed space-y-1">
                    <p>• <strong>Zero Invalidation Traffic:</strong> Cores modify independent cache lines concurrently with zero bus stalls.</p>
                    <p>• <strong>Speedup:</strong> Up to <strong>8x–12x throughput improvement</strong> on write-heavy parallel loops.</p>
                  </div>
                </div>
              )}
            </div>

            {/* TOOL 3: INTERACTIVE TERMINAL SANDBOX */}
            <div className="bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden shadow-xl text-stone-200 font-mono text-xs">
              <div className="flex items-center justify-between px-4 py-3 bg-stone-950 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-orange-500" />
                  <span className="font-bold text-stone-300">Linux POSIX Thread Benchmark Sandbox</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => executeTerminalCommand("help")}
                    className="px-2 py-1 bg-stone-800 hover:bg-stone-700 rounded text-stone-300 transition cursor-pointer"
                  >
                    Help
                  </button>
                  <button
                    onClick={() => executeTerminalCommand("clear")}
                    className="px-2 py-1 bg-stone-800 hover:bg-stone-700 rounded text-stone-300 transition cursor-pointer"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* Terminal History */}
              <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-orange-400 font-bold">
                      <span>$</span>
                      <span>{item.command}</span>
                    </div>
                    <pre
                      className={`whitespace-pre-wrap pl-4 leading-relaxed ${
                        item.type === "success"
                          ? "text-emerald-400"
                          : item.type === "error"
                          ? "text-rose-400"
                          : "text-stone-300"
                      }`}
                    >
                      {item.output}
                    </pre>
                  </div>
                ))}
              </div>

              {/* Command Input & Quick Buttons */}
              <div className="p-3 bg-stone-950 border-t border-stone-800 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-orange-400 font-bold">$</span>
                  <input
                    type="text"
                    value={customCommand}
                    onChange={(e) => setCustomCommand(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && executeTerminalCommand(customCommand)}
                    placeholder="Type command (e.g. ./thread_bench 50000000, nproc, help)..."
                    className="flex-1 bg-transparent border-none outline-none text-stone-100 placeholder-stone-600 font-mono text-xs"
                  />
                  <button
                    onClick={() => executeTerminalCommand(customCommand)}
                    className="px-3 py-1 bg-orange-600 hover:bg-orange-500 text-white rounded font-bold transition cursor-pointer"
                  >
                    Run
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-stone-500">
                  <span>Quick commands:</span>
                  <button
                    onClick={() => executeTerminalCommand("./thread_bench 50000000")}
                    className="px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
                  >
                    ./thread_bench 50000000
                  </button>
                  <button
                    onClick={() => executeTerminalCommand("./thread_bench --test-false-sharing")}
                    className="px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
                  >
                    --test-false-sharing
                  </button>
                  <button
                    onClick={() => executeTerminalCommand("nproc")}
                    className="px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
                  >
                    nproc
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CAPSTONE CHECKLIST */}
        {activeTab === "checklist" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  Capstone Lab Verification Checklist
                </h3>
                <p className="text-stone-600 text-sm mt-1">
                  Track your deliverables for Module 7: compile, benchmark, analyze Amdahl limits, and eliminate false sharing.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-stone-700">
                  Progress: {completedChecklistCount} / 7 Completed
                </span>
                <button
                  onClick={() => {
                    const report = `PREPSPACES OS MODULE 7 COMPLETION REPORT:
- gcc -O2 -pthread compilation: ${checklist.gccCompilePthread ? "PASS" : "PENDING"}
- Single vs Multi-threaded Benchmark: ${checklist.baselineVsMultithread ? "PASS" : "PENDING"}
- Speedup & Efficiency Math: ${checklist.speedupEfficiencyMath ? "PASS" : "PENDING"}
- Amdahl's Law Serial Bottleneck: ${checklist.amdahlSerialAnalysis ? "PASS" : "PENDING"}
- False Sharing Diagnosis: ${checklist.falseSharingDiagnosis ? "PASS" : "PENDING"}
- 64-byte Cache Padding Alignment: ${checklist.cachePaddingVerification ? "PASS" : "PENDING"}
- Comprehensive Lab Report: ${checklist.comprehensiveReport ? "PASS" : "PENDING"}
Completion Score: ${Math.round((completedChecklistCount / 7) * 100)}%`;
                    copyToClipboard(report, "checklist-rep");
                  }}
                  className="px-3.5 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {copiedCodeId === "checklist-rep" ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Report Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy Verification Report
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  key: "gccCompilePthread",
                  title: "1. Compile multithreaded C programs with gcc -O2 -pthread",
                  desc: "Verify that -pthread links libpthread, defines _REENTRANT, and enables thread-safe C standard library functions.",
                },
                {
                  key: "baselineVsMultithread",
                  title: "2. Implement and execute single-threaded baseline vs multi-threaded benchmark",
                  desc: "Run thread_bench across 1, 2, 4, and 8 threads computing identical mathematical iteration totals.",
                },
                {
                  key: "speedupEfficiencyMath",
                  title: "3. Compute Wall-Clock Speedup (S) and Parallel Efficiency (E)",
                  desc: "Calculate S = T_1 / T_N and E = (S / N) * 100% to measure how effectively hardware cores are utilized.",
                },
                {
                  key: "amdahlSerialAnalysis",
                  title: "4. Apply Amdahl's Law to identify non-parallelizable bottlenecks",
                  desc: "Determine the serial fraction (1-P) that limits scaling and explain why 16 cores will not achieve 16x speedup.",
                },
                {
                  key: "falseSharingDiagnosis",
                  title: "5. Reproduce and diagnose cache line false sharing",
                  desc: "Demonstrate high latency stalls when multiple threads write to unpadded variables packed into a single 64-byte block.",
                },
                {
                  key: "cachePaddingVerification",
                  title: "6. Eliminate false sharing with alignas(64) cache padding",
                  desc: "Verify up to 8x speedup by ensuring each thread's write counter occupies a dedicated cache line.",
                },
                {
                  key: "comprehensiveReport",
                  title: "7. Produce comparative analysis report with speedup curves",
                  desc: "Document benchmark charts, core scaling characteristics, and architectural findings.",
                },
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() => toggleChecklist(item.key)}
                  className={`flex items-start gap-3.5 p-4 rounded-xl border transition cursor-pointer ${
                    checklist[item.key]
                      ? "bg-emerald-50/60 border-emerald-300"
                      : "bg-white border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checklist[item.key]}
                    onChange={() => {}}
                    className="mt-1 h-4 w-4 rounded text-orange-600 accent-orange-600 cursor-pointer"
                  />
                  <div>
                    <div className={`text-sm font-bold ${checklist[item.key] ? "text-emerald-900" : "text-stone-900"}`}>
                      {item.title}
                    </div>
                    <div className="text-xs text-stone-600 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: KNOWLEDGE ASSESSMENT (QUIZ) */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-600" />
                  Module 7 Knowledge Assessment
                </h3>
                <p className="text-stone-600 text-sm mt-1">
                  Evaluate your understanding of thread mechanics, pthreads APIs, concurrency vs parallelism, and Amdahl's Law.
                </p>
              </div>
              {quizSubmitted && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-stone-800">
                    Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                  </span>
                  <button
                    onClick={handleResetQuiz}
                    className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-bold transition cursor-pointer"
                  >
                    Reset Quiz
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q) => {
                const isSelected = quizAnswers[q.id] !== undefined;
                const isCorrect = quizAnswers[q.id] === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-xl border transition ${
                      quizSubmitted
                        ? isCorrect
                          ? "bg-emerald-50/50 border-emerald-300"
                          : "bg-rose-50/50 border-rose-300"
                        : "bg-stone-50/60 border-stone-200"
                    }`}
                  >
                    <div className="font-bold text-stone-900 text-sm sm:text-base mb-3">
                      {q.question}
                    </div>

                    <div className="space-y-2 mb-3">
                      {q.options.map((opt, optIdx) => {
                        const isThisChosen = quizAnswers[q.id] === optIdx;
                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                            className={`w-full text-left p-3 rounded-lg text-xs sm:text-sm transition flex items-center justify-between cursor-pointer ${
                              quizSubmitted
                                ? optIdx === q.correctIndex
                                  ? "bg-emerald-100 text-emerald-900 font-bold border border-emerald-300"
                                  : isThisChosen
                                  ? "bg-rose-100 text-rose-900 line-through border border-rose-300"
                                  : "bg-white text-stone-500 border border-stone-200"
                                : isThisChosen
                                ? "bg-orange-100 text-orange-900 font-semibold border border-orange-300"
                                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                            }`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-3 text-xs leading-relaxed p-3 rounded-lg bg-white border border-stone-200 text-stone-700">
                        <strong className="text-stone-900">Explanation: </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!quizSubmitted && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleQuizSubmit}
                  disabled={Object.keys(quizAnswers).length === 0}
                  className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white rounded-xl text-sm font-bold transition shadow-xs cursor-pointer"
                >
                  Submit Assessment
                </button>
              </div>
            )}
          </div>
        )}

        {/* Bottom Pagination */}
        <div className="mt-8 flex items-center justify-between border-t border-stone-200 pt-6">
          <button
            onClick={() => navigate("/learning/os/scheduling")}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-stone-700 hover:text-stone-900 hover:bg-white rounded-xl transition border border-stone-200/80 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Module 6 (CPU Scheduling)
          </button>
          <button
            onClick={() => navigate("/learning/os/concurrency")}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition shadow-xs cursor-pointer"
          >
            Next: Module 8 (Synchronization & Locks)
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
