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
  Eye,
  Key,
  ShieldAlert,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 8                                   */
/* Concurrency, Synchronization and Deadlocks                                 */
/* POSIX Synchronization · Mutexes · Atomics · Memory Ordering · Coffman     */
/* -------------------------------------------------------------------------- */

export default function OSConcurrency() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(31);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-lab' | 'checklist' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // ---------------------------------------------------------------------------
  // Interactive Tool 1: Deadlock & Lock-Ordering Simulator
  // ---------------------------------------------------------------------------
  const [lockOrderStrategy, setLockOrderStrategy] = useState("unordered"); // 'unordered' (deadlock risk) | 'ordered' (safe)
  const [deadlockStep, setDeadlockStep] = useState(0); // 0: Start, 1: T1 holds A / T2 holds B, 2: T1 wants B / T2 wants A (DEADLOCK)

  const handleNextDeadlockStep = () => {
    if (deadlockStep < 2) {
      setDeadlockStep((prev) => prev + 1);
    } else {
      setDeadlockStep(0);
    }
  };

  const handleResetDeadlock = () => {
    setDeadlockStep(0);
  };

  // ---------------------------------------------------------------------------
  // Interactive Tool 2: Race Condition vs Mutex vs Atomic Simulator
  // ---------------------------------------------------------------------------
  const [syncMode, setSyncMode] = useState("race"); // 'race' | 'mutex' | 'atomic'
  const [simCounter, setSimCounter] = useState(0);
  const [simRunning, setSimRunning] = useState(false);
  const [threadAProgress, setThreadAProgress] = useState(0);
  const [threadBProgress, setThreadBProgress] = useState(0);

  const runContentionSimulation = () => {
    if (simRunning) return;
    setSimRunning(true);
    setSimCounter(0);
    setThreadAProgress(0);
    setThreadBProgress(0);

    let count = 0;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setThreadAProgress(Math.min(100, step * 10));
      setThreadBProgress(Math.min(100, step * 10));

      if (syncMode === "race") {
        // Due to interleaving and lost updates, counter only increments occasionally
        count += Math.random() > 0.4 ? 1 : 0;
      } else {
        // Mutex or Atomic: exact increments
        count += 2;
      }
      setSimCounter(count);

      if (step >= 10) {
        clearInterval(interval);
        setSimRunning(false);
        if (syncMode === "race") {
          // Final lost updates outcome: ~12-14 instead of expected 20
          setSimCounter(12 + Math.floor(Math.random() * 3));
        } else {
          setSimCounter(20);
        }
      }
    }, 150);
  };

  // ---------------------------------------------------------------------------
  // Interactive Tool 3: Terminal Sandbox State
  // ---------------------------------------------------------------------------
  const [terminalHistory, setTerminalHistory] = useState([
    {
      command: "gcc -O1 -g -fsanitize=thread -pthread race.c -o race_tsan",
      output: "[Compilation succeeded: ThreadSanitizer instrumentation enabled]",
      type: "info",
    },
    {
      command: "./race_tsan",
      output: `==================
WARNING: ThreadSanitizer: data race (pid=41920)
  Write of size 8 at 0x0000004040a0 by thread T2:
    #0 increment race.c:13 (race_tsan+0x1254)
    #1 <null> (libpthread.so.0+0x8608)

  Previous write of size 8 at 0x0000004040a0 by thread T1:
    #0 increment race.c:13 (race_tsan+0x1254)
    #1 <null> (libpthread.so.0+0x8608)

  Location is global 'counter' of size 8 at 0x0000004040a0
SUMMARY: ThreadSanitizer: data race race.c:13 in increment
==================
Expected: 4000000
Actual:   2841932 (LOST 1,158,068 UPDATES DUE TO DATA RACE)`,
      type: "error",
    },
  ]);
  const [customCommand, setCustomCommand] = useState("");

  // ---------------------------------------------------------------------------
  // Section: Capstone Lab Checklist State (8 items matching curriculum criteria)
  // ---------------------------------------------------------------------------
  const [checklist, setChecklist] = useState({
    reproduceRace: false,
    fixWithMutex: false,
    fixWithAtomics: false,
    primitiveSelection: false,
    classicalProblems: false,
    memoryOrderingHappensBefore: false,
    deadlockCoffmanConditions: false,
    progressFailuresReport: false,
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
      question: "1. What makes `counter++` unsafe when multiple threads modify an ordinary shared integer?",
      options: [
        "It always creates a deadlock",
        "It is not guaranteed to be an atomic read-modify-write operation",
        "It automatically acquires a mutex",
        "It forces an immediate OS context switch",
      ],
      correctIndex: 1,
      explanation:
        "`counter++` decomposes in assembly into three distinct CPU instructions: read memory into a register (load), increment the register value (add), and store the register back into memory. Without synchronization, concurrent interleaved executions cause lost updates, violating atomicity.",
    },
    {
      id: 2,
      question: "2. Why should a condition-variable wait normally be inside a while loop?",
      options: [
        "To increase CPU utilization through busy spinning",
        "To reacquire the mutex repeatedly without blocking",
        "To recheck the condition after wake-up (guarding against spurious wakeups and state invalidations)",
        "To guarantee that a particular thread is selected next by the scheduler",
      ],
      correctIndex: 2,
      explanation:
        "A condition variable wake-up does not guarantee that the condition is still true when the thread reacquires the mutex. Another thread may have stolen the item in the meantime, or the kernel may produce a spurious wake-up. Therefore, the predicate must always be rechecked in a `while` loop.",
    },
    {
      id: 3,
      question: "3. Which is one of the four necessary conditions for classical deadlock (Coffman conditions)?",
      options: [
        "Circular wait",
        "Equal thread priorities",
        "Multiple CPU cores",
        "Atomic variables",
      ],
      correctIndex: 0,
      explanation:
        "The four Coffman conditions are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. All four must hold simultaneously for a deadlock to exist. Eliminating even one condition (such as breaking Circular Wait via strict lock hierarchy) prevents deadlocks.",
    },
    {
      id: 4,
      question: "4. What does release/acquire synchronization help establish?",
      options: [
        "A guaranteed increase in thread count",
        "Ordering and visibility for appropriately synchronized operations across threads (happens-before)",
        "Automatic deadlock recovery by the operating system kernel",
        "A guarantee that every atomic operation is lock-free in hardware",
      ],
      correctIndex: 1,
      explanation:
        "A store-release operation guarantees that all prior memory writes are made visible to any thread that performs a matching load-acquire that observes that store. This establishes a cross-thread happens-before relationship without requiring expensive full sequential consistency barriers.",
    },
    {
      id: 5,
      question: "5. What is livelock?",
      options: [
        "A thread is permanently blocked without taking action",
        "Threads remain active and consume CPU cycles, but fail to make useful progress",
        "A task uses all available memory pages",
        "A mutex is destroyed immediately after joining",
      ],
      correctIndex: 1,
      explanation:
        "In a livelock, threads continuously execute instructions and change their state in response to one another (e.g., repeatedly acquiring, backing off, and retrying locks in lockstep), yet the collective system makes zero forward computational progress.",
    },
    {
      id: 6,
      question: "6. What does linearizability require?",
      options: [
        "Every operation must be protected by a coarse-grained mutex",
        "Every thread must run on a separate CPU core",
        "Concurrent operations must appear to take effect instantaneously at a linearization point between invocation and response, consistent with real-time order",
        "All threads must complete their execution simultaneously",
      ],
      correctIndex: 2,
      explanation:
        "Linearizability is a strict concurrent correctness condition. It requires that every operation appear to take effect at a single indivisible instant in time between its start and completion, and that non-overlapping operations respect their real-time sequential ordering.",
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
  gcc -O2 -pthread race.c -o race && ./race
  gcc -O2 -pthread mutex_counter.c -o mutex_counter && ./mutex_counter
  gcc -std=c11 -O2 -pthread atomic_counter.c -o atomic_counter && ./atomic_counter
  gcc -O1 -g -fsanitize=thread -pthread race.c -o race_tsan && ./race_tsan
  clear`;
    } else if (raw.includes("race.c") && raw.includes("-fsanitize=thread")) {
      output = `==================
WARNING: ThreadSanitizer: data race (pid=51294)
  Write of size 8 at 0x0000004040a0 by thread T2:
    #0 increment race.c:13 (race_tsan+0x1254)
    #1 <null> (libpthread.so.0+0x8608)

  Previous write of size 8 at 0x0000004040a0 by thread T1:
    #0 increment race.c:13 (race_tsan+0x1254)
    #1 <null> (libpthread.so.0+0x8608)

SUMMARY: ThreadSanitizer: data race race.c:13 in increment
==================
Expected: 4000000
Actual:   2918402 (Data race reproduced!)`;
      type = "error";
    } else if (raw.includes("race.c")) {
      output = `gcc -O2 -Wall -Wextra -pthread race.c -o race
./race
Expected: 4000000
Actual:   2791408
[Alert]: Unsynchronized increments caused lost updates! (Actual != Expected)`;
      type = "error";
    } else if (raw.includes("mutex_counter.c")) {
      output = `gcc -O2 -Wall -Wextra -pthread mutex_counter.c -o mutex_counter
./mutex_counter
Expected: 4000000
Actual:   4000000
[Success]: POSIX Mutex guaranteed mutual exclusion for all 4 threads.`;
      type = "success";
    } else if (raw.includes("atomic_counter.c")) {
      output = `gcc -std=c11 -O2 -Wall -Wextra -pthread atomic_counter.c -o atomic_counter
./atomic_counter
Counter:  4000000
[Success]: C11 atomic_fetch_add executed indivisibly at hardware bus level.`;
      type = "success";
    } else {
      output = `bash: ${raw}: command not found. Type 'help' for available commands.`;
      type = "error";
    }

    setTerminalHistory((prev) => [...prev, { command: raw, output, type }]);
    setCustomCommand("");
  };

  // C code snippets from Curriculum
  const raceSourceCode = `/* race.c - Demonstrates unsynchronized data race */
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define THREADS 4
#define ITERATIONS 1000000L

static long counter = 0;

static void *increment(void *unused) {
    (void)unused;
    for (long i = 0; i < ITERATIONS; ++i) {
        counter++; // DATA RACE: Load -> Increment -> Store is not atomic!
    }
    return NULL;
}

int main(void) {
    pthread_t threads[THREADS];
    for (int i = 0; i < THREADS; ++i) {
        int rc = pthread_create(&threads[i], NULL, increment, NULL);
        if (rc != 0) {
            fprintf(stderr, "pthread_create: %s\\n", strerror(rc));
            return EXIT_FAILURE;
        }
    }
    for (int i = 0; i < THREADS; ++i) {
        int rc = pthread_join(threads[i], NULL);
        if (rc != 0) {
            fprintf(stderr, "pthread_join: %s\\n", strerror(rc));
            return EXIT_FAILURE;
        }
    }
    printf("Expected: %ld\\n", THREADS * ITERATIONS);
    printf("Actual:   %ld\\n", counter);
    return EXIT_SUCCESS;
}`;

  const mutexSourceCode = `/* mutex_counter.c - Repaired with POSIX Mutex */
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define THREADS 4
#define ITERATIONS 1000000L

static long counter = 0;
static pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

static void *increment(void *unused) {
    (void)unused;
    for (long i = 0; i < ITERATIONS; ++i) {
        int rc = pthread_mutex_lock(&mutex);
        if (rc != 0) {
            fprintf(stderr, "lock: %s\\n", strerror(rc));
            return (void *)1;
        }
        counter++; // Protected inside Critical Section
        rc = pthread_mutex_unlock(&mutex);
        if (rc != 0) {
            fprintf(stderr, "unlock: %s\\n", strerror(rc));
            return (void *)1;
        }
    }
    return NULL;
}

int main(void) {
    pthread_t threads[THREADS];
    for (int i = 0; i < THREADS; ++i) {
        int rc = pthread_create(&threads[i], NULL, increment, NULL);
        if (rc != 0) {
            fprintf(stderr, "create: %s\\n", strerror(rc));
            return EXIT_FAILURE;
        }
    }
    int failed = 0;
    for (int i = 0; i < THREADS; ++i) {
        void *result = NULL;
        int rc = pthread_join(threads[i], &result);
        if (rc != 0 || result != NULL) failed = 1;
    }
    pthread_mutex_destroy(&mutex);
    if (failed) return EXIT_FAILURE;

    printf("Expected: %ld\\n", THREADS * ITERATIONS);
    printf("Actual:   %ld\\n", counter);
    return EXIT_SUCCESS;
}`;

  const atomicSourceCode = `/* atomic_counter.c - Repaired with C11 Atomics */
#include <pthread.h>
#include <stdatomic.h>
#include <stdio.h>
#include <stdlib.h>

#define THREADS 4
#define ITERATIONS 1000000L

static atomic_long counter = 0;

static void *increment(void *unused) {
    (void)unused;
    for (long i = 0; i < ITERATIONS; ++i) {
        atomic_fetch_add(&counter, 1); // Hardware atomic read-modify-write
    }
    return NULL;
}

int main(void) {
    pthread_t threads[THREADS];
    for (int i = 0; i < THREADS; ++i) {
        int rc = pthread_create(&threads[i], NULL, increment, NULL);
        if (rc != 0) return EXIT_FAILURE;
    }
    for (int i = 0; i < THREADS; ++i) {
        pthread_join(threads[i], NULL);
    }
    printf("Counter: %ld\\n", atomic_load(&counter));
    return EXIT_SUCCESS;
}`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 flex flex-col font-sans selection:bg-orange-500/20 selection:text-orange-900">
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Module Navigation Header */}
        <ModuleNav
          track="os"
          currentModuleId="concurrency"
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
                  <Lock className="w-3.5 h-3.5" />
                  Module 8 of 15
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-600">
                  PrepSpaces Operating Systems Master Course
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700">
                  POSIX Mutexes · Condition Variables · Coffman Conditions · Linearizability
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                Concurrency, Synchronization and Deadlocks
              </h1>
              <p className="text-stone-600 max-w-3xl text-base sm:text-lg leading-relaxed">
                A concurrent program must be correct under every execution order permitted by its synchronization rules—not just the execution order observed during one test. Master critical sections, mutual exclusion, condition variables, C11 memory ordering, happens-before, the four Coffman deadlock conditions, and linearizability.
              </p>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-stone-100">
              <div className="text-left md:text-right">
                <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                  Estimated Time
                </div>
                <div className="text-lg font-bold text-stone-800">2.5–3.5 Hours</div>
              </div>
              <div className="text-left md:text-right">
                <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                  Capstone Lab
                </div>
                <div className="text-sm font-medium text-stone-700">Race Reproduction & ThreadSanitizer</div>
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
              <ShieldAlert className="w-4 h-4" />
              2. Deadlock, Race & Terminal Lab
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
              3. Capstone Checklist ({completedChecklistCount}/8)
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
            <LearningRo currentTopic="os-concurrency" />
          </div>
        )}

        {/* TAB 1: CURRICULUM & THEORY */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Learning Outcomes Box */}
            <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-orange-200 rounded-2xl p-6 sm:p-7">
              <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-orange-600" />
                Module 8 Learning Outcomes
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                By completing this module, you will master the engineering discipline required to build correct, race-free, and deadlock-free concurrent software:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Identify race conditions, critical sections, atomicity violations, and data races.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Use pthread mutexes, condition variables, semaphores, and spinlocks appropriately.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Implement and reason about Producer–Consumer, Readers–Writers, and Dining Philosophers.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Explain atomic read-modify-write operations, memory ordering, and happens-before.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Analyze deadlocks using the four Coffman necessary conditions.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Apply lock ordering hierarchy and distinguish deadlock, livelock, starvation, and priority inversion.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Explain linearizability, operation contracts, and concurrent history invariants.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Reproduce a synchronization bug, fix it with mutexes and atomics, and test with ThreadSanitizer.</span>
                </div>
              </div>
            </div>

            {/* LESSON 1: RACE CONDITIONS & CRITICAL SECTIONS */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 1
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Race Conditions, Critical Sections, and Atomicity
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  A <strong>race condition</strong> occurs when the output or correctness of a system depends on the timing or ordering of concurrent operations in a manner that violates intended invariant contracts.
                </p>

                <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 my-4">
                  <h4 className="font-bold text-stone-900 text-sm mb-2">The Classic Bank Account Withdrawal Invariant</h4>
                  <p className="text-sm text-stone-700 mb-2">
                    Suppose an account holds a balance of $100, and two threads simultaneously attempt to withdraw $80. The required invariant is:
                  </p>
                  <div className="bg-white border border-stone-300 rounded p-2 text-center font-mono text-sm font-bold text-stone-900">
                    balance ≥ 0
                  </div>
                  <p className="text-xs text-stone-600 mt-2">
                    If Thread A reads 100, passes the check (<code className="font-mono">100 ≥ 80</code>), but is descheduled before writing, Thread B also reads 100 and approves its withdrawal. Both threads subtract 80, writing back $20 and then -$60. The invariant is shattered because the check and update were not indivisible.
                  </p>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
                  Three Classical Critical Section Properties
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                  <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/50">
                    <div className="font-bold text-blue-900 text-sm mb-1">1. Mutual Exclusion</div>
                    <div className="text-xs text-stone-600">
                      At most one thread executes inside the critical section at any instant in time.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/50">
                    <div className="font-bold text-emerald-900 text-sm mb-1">2. Progress</div>
                    <div className="text-xs text-stone-600">
                      If the critical section is vacant, threads waiting to enter cannot be blocked indefinitely by non-competing threads.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/50">
                    <div className="font-bold text-amber-900 text-sm mb-1">3. Bounded Waiting</div>
                    <div className="text-xs text-stone-600">
                      A bound exists on the number of times other threads can enter the critical section after a thread has requested admission.
                    </div>
                  </div>
                </div>

                <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg my-4 text-sm text-rose-950">
                  <div className="font-bold flex items-center gap-1.5 mb-1 text-rose-900">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Data Race vs Race Condition: Undefined Behavior in C
                  </div>
                  <p>
                    A <strong>data race</strong> occurs when two memory accesses in different threads address the same location without synchronization, and at least one is a write. In ISO C, <strong>a data race causes Undefined Behavior</strong>. The compiler is free to assume races never happen, leading to dead-code elimination, instruction reordering, or register caching of stale values.
                  </p>
                </div>

                {/* race.c Code Block */}
                <div className="relative rounded-xl overflow-hidden border border-stone-800 bg-stone-900 text-stone-200 font-mono text-xs my-4">
                  <div className="flex items-center justify-between px-4 py-2 bg-stone-950 border-b border-stone-800 text-stone-400">
                    <span className="flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-orange-500" />
                      race.c — Reproducing Lost Updates
                    </span>
                    <button
                      onClick={() => copyToClipboard(raceSourceCode, "race-c")}
                      className="flex items-center gap-1 hover:text-white transition cursor-pointer"
                    >
                      {copiedCodeId === "race-c" ? (
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
                  <pre className="p-4 overflow-x-auto leading-relaxed max-h-72">
                    <code>{raceSourceCode}</code>
                  </pre>
                </div>
              </div>
            </article>

            {/* LESSON 2: SYNCHRONIZATION PRIMITIVES */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 2
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Synchronization Primitives: Mutexes, Semaphores, Condition Variables & Spinlocks
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  No single synchronization primitive is optimal for all scenarios. The engineer must choose based on ownership rules, blocking semantics, and event coordination requirements.
                </p>

                {/* Primitive Matrix Table */}
                <div className="overflow-x-auto my-6 border border-stone-200 rounded-xl shadow-xs">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-stone-50 border-b border-stone-200 text-stone-900 font-semibold">
                      <tr>
                        <th className="px-4 py-3">Primitive</th>
                        <th className="px-4 py-3">Main Purpose</th>
                        <th className="px-4 py-3">Ownership Semantics</th>
                        <th className="px-4 py-3">Common Mistake</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 font-mono text-xs">
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-3 font-bold font-sans text-stone-900">Mutex</td>
                        <td className="px-4 py-3 text-stone-600">Exclusive access to shared state</td>
                        <td className="px-4 py-3 text-emerald-700 font-semibold">Strict (Lock holder must unlock)</td>
                        <td className="px-4 py-3 text-rose-700">Holding too long or forgetting to unlock on error paths</td>
                      </tr>
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-3 font-bold font-sans text-stone-900">Semaphore</td>
                        <td className="px-4 py-3 text-stone-600">Count available resources or signal events</td>
                        <td className="px-4 py-3 text-blue-700">None (Any thread can call sem_post)</td>
                        <td className="px-4 py-3 text-rose-700">Using as a mutex or releasing wrong permit count</td>
                      </tr>
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-3 font-bold font-sans text-stone-900">Condition Variable</td>
                        <td className="px-4 py-3 text-stone-600">Wait until a protected predicate changes</td>
                        <td className="px-4 py-3 text-purple-700">Coupled with associated mutex</td>
                        <td className="px-4 py-3 text-rose-700 font-bold">Using 'if' instead of 'while' (spurious wakeups)</td>
                      </tr>
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-3 font-bold font-sans text-stone-900">Spinlock</td>
                        <td className="px-4 py-3 text-stone-600">Busy-wait for microsecond critical sections</td>
                        <td className="px-4 py-3 text-amber-700">Strict ownership</td>
                        <td className="px-4 py-3 text-rose-700">Spinning while the lock holder is descheduled</td>
                      </tr>
                      <tr className="hover:bg-stone-50/50">
                        <td className="px-4 py-3 font-bold font-sans text-stone-900">Atomic Operations</td>
                        <td className="px-4 py-3 text-stone-600">Hardware lock-free indivisible state transitions</td>
                        <td className="px-4 py-3 text-stone-500">None</td>
                        <td className="px-4 py-3 text-rose-700">Assuming multi-step compound operations become atomic</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Condition Variable Deep Dive */}
                <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
                  The Canonical Condition Variable Pattern: Why While, Not If?
                </h3>
                <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs my-2">
                  <pre>{`pthread_mutex_lock(&mutex);
while (queue_is_empty()) { // MUST BE WHILE! NEVER IF!
    pthread_cond_wait(&condition, &mutex);
}
// Condition is verified true, mutex is locked: consume item safely
void *item = dequeue_item();
pthread_mutex_unlock(&mutex);`}</pre>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  When <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">pthread_cond_wait()</code> returns, it has reacquired the mutex, but the predicate might no longer be true: another consumer may have woken up first and emptied the queue, or the OS may have issued a <em>spurious wake-up</em>. Rechecking in a <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">while</code> loop is mathematically required for correctness.
                </p>
              </div>
            </article>

            {/* LESSON 3: CLASSICAL CONCURRENCY PROBLEMS */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 3
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Classical Concurrency Problems: Producer–Consumer, Readers–Writers & Dining Philosophers
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <h4 className="font-bold text-stone-900 text-sm mb-1.5 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-blue-600" />
                      Producer–Consumer
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Coordinates producers generating items into a bounded buffer of capacity <code className="font-mono">C</code> with consumers processing items. Uses two counting semaphores (<code className="font-mono">empty</code> initialized to <code className="font-mono">C</code>, <code className="font-mono">full</code> initialized to <code className="font-mono">0</code>) and a mutex for buffer insertion.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <h4 className="font-bold text-stone-900 text-sm mb-1.5 flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-purple-600" />
                      Readers–Writers
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Allows unlimited concurrent readers when no writer is active, but requires strictly exclusive access for writers. Reader-preference designs cause writer starvation; writer-preference designs cause reader starvation. Solved cleanly with fair <code className="font-mono">pthread_rwlock_t</code>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <h4 className="font-bold text-stone-900 text-sm mb-1.5 flex items-center gap-1.5">
                      <RotateCcw className="w-4 h-4 text-rose-600" />
                      Dining Philosophers
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Five philosophers sit around a table with 5 forks. Each needs left and right forks to eat. If every philosopher picks up their left fork simultaneously, all wait forever for the right fork—a classic circular-wait deadlock!
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 space-y-2">
                  <div className="font-bold text-sm text-amber-950">Resolving the Dining Philosophers Deadlock:</div>
                  <ul className="list-disc pl-4 space-y-1">
                    <li><strong>Global Lock Ordering (Dijkstra):</strong> Number forks 0 to 4. Each philosopher must acquire the lower-numbered fork first. The last philosopher picks up fork 0 then 4, breaking the circular dependency!</li>
                    <li><strong>Arbitrator / Waiter:</strong> A central lock or ticket system only grants fork acquisition rights to 4 philosophers at a time.</li>
                    <li><strong>Asymmetric Philosophers:</strong> Odd philosophers pick left-then-right; even philosophers pick right-then-left.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* LESSON 4: ATOMICS & MEMORY ORDERING */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 4
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Atomics, Memory Ordering, and Happens-Before
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  C11 introduced standard atomic primitives in <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-sm">&lt;stdatomic.h&gt;</code>. An atomic operation executes indivisibly without locks via CPU hardware bus-locking or cache-coherence reservation mechanisms (e.g., x86 <code className="font-mono text-xs">LOCK XADD</code> or ARM <code className="font-mono text-xs">LDREX/STREX</code>).
                </p>

                <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
                  The C11 Memory Ordering Hierarchy
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                  <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                    <div className="font-mono font-bold text-xs text-stone-800">memory_order_relaxed</div>
                    <div className="text-xs text-stone-600 mt-1">
                      Guarantees indivisible atomicity of the target variable only, but imposes zero synchronization or ordering guarantees on neighboring memory accesses.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/50">
                    <div className="font-mono font-bold text-xs text-blue-900">memory_order_release</div>
                    <div className="text-xs text-stone-600 mt-1">
                      Ensures that all prior memory stores (ordinary or atomic) become visible to any consumer thread that synchronizes with a matching acquire load.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/50">
                    <div className="font-mono font-bold text-xs text-emerald-900">memory_order_acquire</div>
                    <div className="text-xs text-stone-600 mt-1">
                      Ensures that all subsequent memory reads cannot be reordered before this operation, observing all writes published prior to the release store.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-purple-200 bg-purple-50/50">
                    <div className="font-mono font-bold text-xs text-purple-900">memory_order_seq_cst</div>
                    <div className="text-xs text-stone-600 mt-1">
                      Default mode. Enforces a single globally consistent total order across all threads in the system. Highest overhead, but simplest to reason about.
                    </div>
                  </div>
                </div>

                <div className="bg-stone-100 border border-stone-200 rounded-xl p-4 font-mono text-xs">
                  <div className="font-sans font-bold text-stone-900 mb-2">Safe Data Publication Pattern (Acquire-Release):</div>
                  <pre>{`/* Publisher Thread */
payload = 42; // Regular unsynchronized memory write
atomic_store_explicit(&ready, 1, memory_order_release); // Establishes release fence

/* Consumer Thread */
while (atomic_load_explicit(&ready, memory_order_acquire) == 0) {
    // Wait for publication
}
printf("Payload: %d\\n", payload); // GUARANTEED to read 42 without a race!`}</pre>
                </div>

                <div className="text-xs text-stone-500 italic">
                  * Note: Declaring a variable <code className="font-mono">volatile</code> in C does NOT prevent data races, does NOT emit memory fences, and does NOT guarantee cross-core visibility. It only prevents the compiler from optimizing away memory accesses to hardware memory-mapped I/O addresses.
                </div>
              </div>
            </article>

            {/* LESSON 5: DEADLOCKS & PROGRESS FAILURES */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 5
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Deadlocks, Livelocks, Starvation & Priority Inversion
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  A deadlock occurs when a set of concurrent processes are permanently blocked because each process holds a resource and waits for another resource held by another process in the set.
                </p>

                <h3 className="text-lg font-bold text-stone-900 mt-4 mb-2">
                  The Four Coffman Conditions (Must ALL Hold for Deadlock)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                  <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/40">
                    <div className="font-bold text-rose-900 text-sm">1. Mutual Exclusion</div>
                    <div className="text-xs text-stone-600 mt-1">
                      Resources cannot be shared simultaneously; only one thread holds a resource at a time.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/40">
                    <div className="font-bold text-rose-900 text-sm">2. Hold and Wait</div>
                    <div className="text-xs text-stone-600 mt-1">
                      Threads hold already-allocated resources while actively waiting for additional resources.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/40">
                    <div className="font-bold text-rose-900 text-sm">3. No Preemption</div>
                    <div className="text-xs text-stone-600 mt-1">
                      Resources cannot be forcibly revoked from a thread; they can only be released voluntarily.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/40">
                    <div className="font-bold text-rose-900 text-sm">4. Circular Wait</div>
                    <div className="text-xs text-stone-600 mt-1">
                      A closed cycle exists: Thread 1 waits for Thread 2, Thread 2 waits for Thread 3 ... Thread N waits for Thread 1.
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 my-4">
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Deadlock Prevention: Lock Ordering Hierarchy</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    The industry-standard prevention technique is to impose a global total ordering on all locks (e.g. <code className="font-mono">Rank(Lock A) &lt; Rank(Lock B)</code>). Every thread in the entire codebase must acquire lower-ranked locks before higher-ranked locks. Because no thread can acquire Lock A while holding Lock B, circular wait is mathematically impossible!
                  </p>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
                  Other Progress Failures: Livelock, Starvation & Priority Inversion
                </h3>
                <div className="space-y-3 text-xs text-stone-700">
                  <div className="p-3 rounded-lg border border-stone-200 bg-white">
                    <strong className="text-stone-900">Livelock:</strong> Threads stay running and consume 100% CPU, but repeatedly release and retry locks in lockstep without doing useful work (like two polite people stepping back and forth in a doorway).
                  </div>
                  <div className="p-3 rounded-lg border border-stone-200 bg-white">
                    <strong className="text-stone-900">Starvation:</strong> A ready thread is indefinitely denied a resource or CPU time because higher-priority or faster threads continuously bypass it.
                  </div>
                  <div className="p-3 rounded-lg border border-stone-200 bg-white">
                    <strong className="text-stone-900">Priority Inversion & Priority Inheritance:</strong> A low-priority thread holds a mutex needed by a high-priority thread, but a medium-priority thread keeps preempting the low-priority thread. Solved with <strong>Priority Inheritance</strong>: the kernel temporarily raises the low-priority thread's priority to match the high-priority thread until it releases the lock.
                  </div>
                </div>
              </div>
            </article>

            {/* LESSON 6: LINEARIZABILITY & CORRECTNESS */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Lesson 6
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Linearizability and Concurrent Correctness
              </h2>
              <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
                <p>
                  Linearizability (formalized by Herlihy and Wing) provides the gold standard for defining whether a concurrent data structure is correct.
                </p>
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 my-2 text-xs text-stone-700 leading-relaxed">
                  <strong>Definition:</strong> A concurrent execution history is linearizable if every operation appears to take effect instantaneously at a specific <em>linearization point</em> between its invocation and its return, and the sequential order matches a valid single-threaded execution history.
                </div>
                <p className="text-sm text-stone-700">
                  A program cannot be proven linearizable by running it once or even 10,000 times without errors. Stress testing under massive contention and running with <strong>ThreadSanitizer (<code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded">-fsanitize=thread</code>)</strong> are mandatory practices in professional systems engineering.
                </p>
              </div>
            </article>
          </div>
        )}

        {/* TAB 2: INTERACTIVE LAB (DEADLOCK SIMULATOR, RACE SIMULATOR, TERMINAL) */}
        {activeTab === "interactive-lab" && (
          <div className="space-y-8">
            {/* TOOL 1: DEADLOCK & LOCK ORDERING SIMULATOR */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-rose-600" />
                    Interactive Deadlock & Lock-Ordering Simulator
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">
                    Visualize how circular wait triggers classical deadlocks, and how strict lock hierarchy prevents them.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setLockOrderStrategy("unordered");
                      setDeadlockStep(0);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      lockOrderStrategy === "unordered"
                        ? "bg-rose-600 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    Unordered (Deadlock Hazard)
                  </button>
                  <button
                    onClick={() => {
                      setLockOrderStrategy("ordered");
                      setDeadlockStep(0);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      lockOrderStrategy === "ordered"
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    Ordered (Strict Lock Hierarchy)
                  </button>
                </div>
              </div>

              {/* Step Navigation */}
              <div className="flex items-center justify-between bg-stone-50 border border-stone-200 rounded-xl p-3 mb-6">
                <span className="text-xs font-bold text-stone-700">
                  Simulation Step: {deadlockStep} of 2
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleResetDeadlock}
                    className="px-3 py-1 rounded bg-white border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-100 transition cursor-pointer"
                  >
                    Reset
                  </button>
                  <button
                    onClick={handleNextDeadlockStep}
                    className="px-4 py-1 rounded bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer"
                  >
                    {deadlockStep === 2 ? "Start Over" : "Next Step →"}
                  </button>
                </div>
              </div>

              {/* Graphic Resource Allocation Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-xl bg-stone-50 border border-stone-200">
                {/* Thread 1 Box */}
                <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
                  <div className="font-bold text-stone-900 text-sm flex items-center justify-between mb-2">
                    <span>Thread 1</span>
                    <span className="text-[11px] font-mono text-stone-500">
                      {lockOrderStrategy === "unordered" ? "Acquires Lock A → then Lock B" : "Acquires Lock A → then Lock B"}
                    </span>
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div
                      className={`p-2 rounded border ${
                        deadlockStep >= 1
                          ? "bg-emerald-100 border-emerald-300 text-emerald-900 font-bold"
                          : "bg-stone-100 border-stone-200 text-stone-500"
                      }`}
                    >
                      Lock A: {deadlockStep >= 1 ? "HELD BY THREAD 1" : "Available"}
                    </div>
                    <div
                      className={`p-2 rounded border ${
                        deadlockStep >= 2
                          ? lockOrderStrategy === "unordered"
                            ? "bg-rose-100 border-rose-400 text-rose-900 font-bold animate-pulse"
                            : "bg-emerald-100 border-emerald-300 text-emerald-900 font-bold"
                          : "bg-stone-100 border-stone-200 text-stone-500"
                      }`}
                    >
                      Lock B:{" "}
                      {deadlockStep >= 2
                        ? lockOrderStrategy === "unordered"
                          ? "BLOCKED WAITING FOR THREAD 2"
                          : "ACQUIRED SAFELY"
                        : "Unacquired"}
                    </div>
                  </div>
                </div>

                {/* Thread 2 Box */}
                <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
                  <div className="font-bold text-stone-900 text-sm flex items-center justify-between mb-2">
                    <span>Thread 2</span>
                    <span className="text-[11px] font-mono text-stone-500">
                      {lockOrderStrategy === "unordered" ? "Acquires Lock B → then Lock A" : "Acquires Lock A → then Lock B"}
                    </span>
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div
                      className={`p-2 rounded border ${
                        lockOrderStrategy === "unordered"
                          ? deadlockStep >= 1
                            ? "bg-emerald-100 border-emerald-300 text-emerald-900 font-bold"
                            : "bg-stone-100 border-stone-200 text-stone-500"
                          : deadlockStep >= 1
                          ? "bg-amber-100 border-amber-300 text-amber-900 font-bold"
                          : "bg-stone-100 border-stone-200 text-stone-500"
                      }`}
                    >
                      {lockOrderStrategy === "unordered"
                        ? `Lock B: ${deadlockStep >= 1 ? "HELD BY THREAD 2" : "Available"}`
                        : `Lock A: ${deadlockStep >= 1 ? "BLOCKED WAITING (Thread 1 holds it)" : "Available"}`}
                    </div>
                    <div
                      className={`p-2 rounded border ${
                        lockOrderStrategy === "unordered"
                          ? deadlockStep >= 2
                            ? "bg-rose-100 border-rose-400 text-rose-900 font-bold animate-pulse"
                            : "bg-stone-100 border-stone-200 text-stone-500"
                          : deadlockStep >= 2
                          ? "bg-emerald-100 border-emerald-300 text-emerald-900 font-bold"
                          : "bg-stone-100 border-stone-200 text-stone-500"
                      }`}
                    >
                      {lockOrderStrategy === "unordered"
                        ? `Lock A: ${deadlockStep >= 2 ? "BLOCKED WAITING FOR THREAD 1" : "Unacquired"}`
                        : `Lock B: ${deadlockStep >= 2 ? "Acquired after Thread 1 completes" : "Available"}`}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Outcome Banner */}
              {deadlockStep === 2 && (
                <div
                  className={`mt-4 p-4 rounded-xl border ${
                    lockOrderStrategy === "unordered"
                      ? "bg-rose-50 border-rose-300 text-rose-950"
                      : "bg-emerald-50 border-emerald-300 text-emerald-950"
                  }`}
                >
                  <div className="font-bold flex items-center gap-2 text-sm">
                    {lockOrderStrategy === "unordered" ? (
                      <>
                        <AlertTriangle className="w-5 h-5 text-rose-600" />
                        CIRCULAR WAIT DEADLOCK DETECTED!
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        DEADLOCK PREVENTED VIA STRICT LOCK HIERARCHY
                      </>
                    )}
                  </div>
                  <p className="text-xs mt-1 leading-relaxed">
                    {lockOrderStrategy === "unordered"
                      ? "Thread 1 holds Lock A and waits for Lock B. Thread 2 holds Lock B and waits for Lock A. Neither thread can proceed. Both sleep indefinitely in the kernel run-queue until the process is killed."
                      : "Because Thread 2 must acquire Lock A before Lock B, it blocks immediately at step 1 without acquiring Lock B. Thread 1 finishes, releases Lock A, and Thread 2 proceeds smoothly. Circular wait is eliminated."}
                  </p>
                </div>
              )}
            </div>

            {/* TOOL 2: RACE CONDITION VS MUTEX VS ATOMICS SIMULATOR */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-orange-600" />
                    Contention & Lost-Update Live Visualizer
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">
                    Watch how unsynchronized shared memory causes lost updates compared to Mutexes and C11 Atomics.
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setSyncMode("race")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      syncMode === "race"
                        ? "bg-rose-600 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    Unsynchronized (Race)
                  </button>
                  <button
                    onClick={() => setSyncMode("mutex")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      syncMode === "mutex"
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    POSIX Mutex
                  </button>
                  <button
                    onClick={() => setSyncMode("atomic")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      syncMode === "atomic"
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    C11 Atomics
                  </button>
                </div>
              </div>

              {/* Progress & Counter Displays */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 text-center">
                  <div className="text-xs text-stone-500 font-semibold uppercase">Expected Total</div>
                  <div className="text-3xl font-bold text-stone-800 font-mono mt-1">20</div>
                  <div className="text-[11px] text-stone-500 mt-1">10 updates × 2 threads</div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 text-center">
                  <div className="text-xs text-stone-500 font-semibold uppercase">Actual Shared Counter</div>
                  <div
                    className={`text-3xl font-bold font-mono mt-1 ${
                      simCounter === 20 || simCounter === 0
                        ? "text-emerald-600"
                        : "text-rose-600"
                    }`}
                  >
                    {simCounter}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">
                    {simCounter === 20
                      ? "100% Correct / Preserved"
                      : simCounter > 0
                      ? "Lost Updates Detected!"
                      : "Ready to run"}
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 flex flex-col justify-center items-center">
                  <button
                    disabled={simRunning}
                    onClick={runContentionSimulation}
                    className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    {simRunning ? "Simulating..." : "Run Contention Test"}
                  </button>
                </div>
              </div>

              {/* Worker Threads Progress Bars */}
              <div className="space-y-3 p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-stone-700 mb-1">
                    <span>Thread 1 (10 increments)</span>
                    <span className="font-mono">{threadAProgress}%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${threadAProgress}%` }}
                      className="h-full bg-blue-600 transition-all duration-150"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-stone-700 mb-1">
                    <span>Thread 2 (10 increments)</span>
                    <span className="font-mono">{threadBProgress}%</span>
                  </div>
                  <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${threadBProgress}%` }}
                      className="h-full bg-purple-600 transition-all duration-150"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* TOOL 3: INTERACTIVE TERMINAL SANDBOX */}
            <div className="bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden shadow-xl text-stone-200 font-mono text-xs">
              <div className="flex items-center justify-between px-4 py-3 bg-stone-950 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-orange-500" />
                  <span className="font-bold text-stone-300">Linux ThreadSanitizer & Synchronization Sandbox</span>
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
                    placeholder="Type command (e.g. ./race, ./mutex_counter, ./race_tsan, help)..."
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
                    onClick={() => executeTerminalCommand("gcc -O2 -pthread race.c -o race && ./race")}
                    className="px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
                  >
                    ./race
                  </button>
                  <button
                    onClick={() => executeTerminalCommand("gcc -O2 -pthread mutex_counter.c -o mutex_counter && ./mutex_counter")}
                    className="px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
                  >
                    ./mutex_counter
                  </button>
                  <button
                    onClick={() => executeTerminalCommand("gcc -std=c11 -O2 -pthread atomic_counter.c -o atomic_counter && ./atomic_counter")}
                    className="px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
                  >
                    ./atomic_counter
                  </button>
                  <button
                    onClick={() => executeTerminalCommand("gcc -O1 -g -fsanitize=thread -pthread race.c -o race_tsan && ./race_tsan")}
                    className="px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
                  >
                    ThreadSanitizer
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
                  Module 8 Completion Criteria Checklist
                </h3>
                <p className="text-stone-600 text-sm mt-1">
                  Track your deliverables: reproduce data races, implement POSIX mutex and C11 atomic repairs, analyze deadlocks, and verify with ThreadSanitizer.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-stone-700">
                  Progress: {completedChecklistCount} / 8 Completed
                </span>
                <button
                  onClick={() => {
                    const report = `PREPSPACES OS MODULE 8 COMPLETION REPORT:
- Reproduce & Explain Data Race: ${checklist.reproduceRace ? "PASS" : "PENDING"}
- Fix Counter with POSIX Mutex: ${checklist.fixWithMutex ? "PASS" : "PENDING"}
- Fix Counter with C11 Atomics: ${checklist.fixWithAtomics ? "PASS" : "PENDING"}
- Primitive Selection Matrix: ${checklist.primitiveSelection ? "PASS" : "PENDING"}
- Classical Problems Analysis: ${checklist.classicalProblems ? "PASS" : "PENDING"}
- Memory Ordering & Happens-Before: ${checklist.memoryOrderingHappensBefore ? "PASS" : "PENDING"}
- Four Coffman Deadlock Conditions: ${checklist.deadlockCoffmanConditions ? "PASS" : "PENDING"}
- Progress Failures & Linearizability: ${checklist.progressFailuresReport ? "PASS" : "PENDING"}
Completion Score: ${Math.round((completedChecklistCount / 8) * 100)}%`;
                    copyToClipboard(report, "checklist-rep8");
                  }}
                  className="px-3.5 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {copiedCodeId === "checklist-rep8" ? (
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
                  key: "reproduceRace",
                  title: "1. Reproduce and explain an unsynchronized data race",
                  desc: "Compile race.c and demonstrate how unsynchronized concurrent loads and stores cause lost counter updates.",
                },
                {
                  key: "fixWithMutex",
                  title: "2. Fix the counter using a POSIX Mutex (pthread_mutex_t)",
                  desc: "Implement mutex_counter.c, ensuring all critical section entries and exits are strictly balanced across all execution paths.",
                },
                {
                  key: "fixWithAtomics",
                  title: "3. Fix the counter using C11 atomic operations (atomic_fetch_add)",
                  desc: "Replace ordinary variables with atomic_long and verify lock-free hardware read-modify-write correctness.",
                },
                {
                  key: "primitiveSelection",
                  title: "4. Explain when to use Mutexes, Semaphores, Condition Variables, and Spinlocks",
                  desc: "Evaluate ownership models, event signaling, and why condition variables require while loops for spurious wakeup protection.",
                },
                {
                  key: "classicalProblems",
                  title: "5. Analyze Producer–Consumer, Readers–Writers, and Dining Philosophers",
                  desc: "Define state invariants, buffer bounds, reader/writer fairness policies, and fork allocation strategies.",
                },
                {
                  key: "memoryOrderingHappensBefore",
                  title: "6. Explain memory ordering (acquire/release) and happens-before relationships",
                  desc: "Demonstrate safe data publication without sequential consistency penalties and explain why volatile fails to fix data races.",
                },
                {
                  key: "deadlockCoffmanConditions",
                  title: "7. Identify the four Coffman deadlock conditions and apply lock ordering",
                  desc: "Enforce strict global lock ranking (Rank(A) < Rank(B)) to mathematically eliminate the circular-wait condition.",
                },
                {
                  key: "progressFailuresReport",
                  title: "8. Distinguish Deadlock, Livelock, Starvation, and Priority Inversion",
                  desc: "Explain Priority Inheritance protocol in real-time kernels and submit reproducible ThreadSanitizer contention findings.",
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
                  Module 8 Knowledge Assessment
                </h3>
                <p className="text-stone-600 text-sm mt-1">
                  Evaluate your understanding of critical sections, condition variables, Coffman conditions, and memory ordering.
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
            onClick={() => navigate("/learning/os/threads")}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-stone-700 hover:text-stone-900 hover:bg-white rounded-xl transition border border-stone-200/80 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Module 7 (Threads & Multithreading)
          </button>
          <button
            onClick={() => navigate("/learning/os/memory")}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition shadow-xs cursor-pointer"
          >
            Next: Module 9 (Memory Hierarchy & Allocation)
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
