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
  Bug,
  Binary,
  Microscope,
  Stethoscope,
  BookOpen,
  FileText,
  Search,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 22                                 */
/* OS Design, Testing and Failure Analysis                                    */
/* Invariants · Contracts · Fault Injection · TSAN · Panics · Regressions     */
/* -------------------------------------------------------------------------- */

export default function OSDesignTesting() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [activeLesson, setActiveLesson] = useState("requirements");
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  // Sync with global topic index
  useSyncedTopic(45);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: State Machine Model-Based Invariant Verifier                  */
  /* -------------------------------------------------------------------------- */
  const [procState, setProcState] = useState("Created"); // Created, Runnable, Running, Blocked, Terminated
  const [runQueueCount, setRunQueueCount] = useState(1);
  const maxCapacity = 4;
  const [simLog, setSimLog] = useState([
    { time: "0.00s", event: "Process initialized in Created state", status: "ok" },
  ]);

  const addLog = (event, status = "ok") => {
    const timestamp = (Math.random() * 2 + 0.1).toFixed(2) + "s";
    setSimLog((prev) => [{ time: timestamp, event, status }, ...prev.slice(0, 5)]);
  };

  const handleTransition = (action) => {
    if (action === "admit") {
      if (procState === "Created") {
        setProcState("Runnable");
        setRunQueueCount((prev) => Math.min(maxCapacity, prev + 1));
        addLog("Valid Transition: Created -> Runnable (Admitted to scheduler)", "ok");
      } else {
        addLog(`INVARIANT VIOLATION: Cannot admit process already in '${procState}' state!`, "error");
      }
    } else if (action === "schedule") {
      if (procState === "Runnable") {
        setProcState("Running");
        setRunQueueCount((prev) => Math.max(0, prev - 1));
        addLog("Valid Transition: Runnable -> Running (Dispatched to CPU Core 0)", "ok");
      } else {
        addLog(`INVARIANT VIOLATION: Cannot schedule task from '${procState}' (Must be Runnable)!`, "error");
      }
    } else if (action === "preempt") {
      if (procState === "Running") {
        setProcState("Runnable");
        setRunQueueCount((prev) => Math.min(maxCapacity, prev + 1));
        addLog("Valid Transition: Running -> Runnable (Time slice expired / preempted)", "ok");
      } else {
        addLog(`INVARIANT VIOLATION: Cannot preempt non-running task in '${procState}' state!`, "error");
      }
    } else if (action === "block") {
      if (procState === "Running") {
        setProcState("Blocked");
        addLog("Valid Transition: Running -> Blocked (I/O wait / lock acquisition)", "ok");
      } else {
        addLog(`INVARIANT VIOLATION: Only Running tasks can block on I/O!`, "error");
      }
    } else if (action === "unblock") {
      if (procState === "Blocked") {
        setProcState("Runnable");
        setRunQueueCount((prev) => Math.min(maxCapacity, prev + 1));
        addLog("Valid Transition: Blocked -> Runnable (I/O completed / awakened)", "ok");
      } else {
        addLog(`INVARIANT VIOLATION: Task is not Blocked; cannot unblock!`, "error");
      }
    } else if (action === "terminate") {
      if (procState === "Running") {
        setProcState("Terminated");
        addLog("Valid Transition: Running -> Terminated (Process exit / resources freed)", "ok");
      } else {
        addLog(`INVARIANT VIOLATION: Cannot terminate task in '${procState}' without running!`, "error");
      }
    } else if (action === "resurrect") {
      // Illegal transition test
      addLog("FATAL INVARIANT BREACH: SCH-01 Violated! Terminated task resurrected to Runnable!", "fatal");
    }
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: Controlled Fault Injection & Allocation Failure Harness       */
  /* -------------------------------------------------------------------------- */
  const [failAtStep, setFailAtStep] = useState(3); // 1, 2, 3, 4, or 0 (no failure)
  const [cleanupPolicy, setCleanupPolicy] = useState("defensive"); // defensive (proper unwind) vs sloppy (leaky)
  const [initResult, setInitResult] = useState(null);

  const runAllocationHarness = () => {
    const steps = [
      { step: 1, name: "malloc(sizeof(struct queue))", bytes: 64 },
      { step: 2, name: "malloc(capacity * sizeof(int))", bytes: 4096 },
      { step: 3, name: "pthread_mutex_init(&q->lock)", bytes: 40 },
      { step: 4, name: "pthread_cond_init(&q->not_empty)", bytes: 48 },
    ];

    let allocated = [];
    let failedAt = null;

    for (const s of steps) {
      if (s.step === failAtStep) {
        failedAt = s;
        break;
      }
      allocated.push(s);
    }

    if (failedAt) {
      if (cleanupPolicy === "defensive") {
        setInitResult({
          status: "handled",
          message: `Fault injected at Step ${failedAt.step} (${failedAt.name}). Defensive unwind freed ${allocated.reduce(
            (acc, x) => acc + x.bytes,
            0
          )} bytes. Return NULL, errno = ENOMEM. State preserved.`,
          leakedBytes: 0,
          allocatedSteps: allocated,
        });
      } else {
        const leaked = allocated.reduce((acc, x) => acc + x.bytes, 0);
        setInitResult({
          status: "leaked",
          message: `Fault injected at Step ${failedAt.step}. Sloppy exit skipped free()! Leaked ${leaked} bytes on heap and left dangling pointers!`,
          leakedBytes: leaked,
          allocatedSteps: allocated,
        });
      }
    } else {
      setInitResult({
        status: "success",
        message: "All 4 initialization allocations succeeded. Component is valid and ready.",
        leakedBytes: 0,
        allocatedSteps: allocated,
      });
    }
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: Concurrency Race & ThreadSanitizer Visualizer                 */
  /* -------------------------------------------------------------------------- */
  const [concurrencyMode, setConcurrencyMode] = useState("race"); // race, mutex, atomic
  const [simRunStats, setSimRunStats] = useState({
    expected: 8000000,
    actual: 5412940,
    lostUpdates: 2587060,
    timeSec: "0.142s",
    tsanReport: true,
  });

  const runConcurrencySim = (mode) => {
    setConcurrencyMode(mode);
    if (mode === "race") {
      setSimRunStats({
        expected: 8000000,
        actual: 5412940,
        lostUpdates: 2587060,
        timeSec: "0.142s",
        tsanReport: true,
      });
    } else if (mode === "mutex") {
      setSimRunStats({
        expected: 8000000,
        actual: 8000000,
        lostUpdates: 0,
        timeSec: "3.920s",
        tsanReport: false,
      });
    } else if (mode === "atomic") {
      setSimRunStats({
        expected: 8000000,
        actual: 8000000,
        lostUpdates: 0,
        timeSec: "0.038s",
        tsanReport: false,
      });
    }
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: Performance Regression CI Gate Calculator                     */
  /* -------------------------------------------------------------------------- */
  const [baseOps, setBaseOps] = useState(1250000); // 1.25M ops/s
  const [candidateOps, setCandidateOps] = useState(1120000); // candidate
  const [baseP99Us, setBaseP99Us] = useState(45); // microseconds
  const [candidateP99Us, setCandidateP99Us] = useState(62);

  const regressionAnalysis = useMemo(() => {
    const throughputDiffPct = ((candidateOps - baseOps) / baseOps) * 100;
    const p99DiffPct = ((candidateP99Us - baseP99Us) / baseP99Us) * 100;

    let verdict = "PASS";
    let verdictColor = "emerald";
    let rationale = "Both throughput and latency remain within acceptable +/-3% tolerance.";

    if (throughputDiffPct < -5 || p99DiffPct > 20) {
      verdict = "BLOCK COMMIT (REGRESSION)";
      verdictColor = "red";
      rationale = `Severe regression! Throughput altered by ${throughputDiffPct.toFixed(
        1
      )}% and p99 latency degraded by +${p99DiffPct.toFixed(1)}%.`;
    } else if (throughputDiffPct < -2 || p99DiffPct > 5) {
      verdict = "WARNING / REVIEW REQUIRED";
      verdictColor = "amber";
      rationale = "Minor slowdown detected beyond statistical noise threshold. Profiling recommended.";
    }

    return {
      throughputDiffPct: throughputDiffPct.toFixed(1),
      p99DiffPct: p99DiffPct.toFixed(1),
      verdict,
      verdictColor,
      rationale,
    };
  }, [baseOps, candidateOps, baseP99Us, candidateP99Us]);

  /* -------------------------------------------------------------------------- */
  /* QUIZ STATE                                                                 */
  /* -------------------------------------------------------------------------- */
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "1. Why is a successful single run insufficient to prove a concurrent component is correct?",
      options: [
        "A. All programs must run twice",
        "B. A race may depend on scheduling and the run may not expose it",
        "C. The compiler always caches output",
        "D. A test plan replaces execution",
      ],
      correct: 1,
      explanation:
        "Data races and concurrency bugs are timing-dependent. A single execution may interleave operations favorably and produce the expected output, but under different CPU load, core affinity, or thread scheduling, silent corruption or crashes can occur.",
    },
    {
      id: "q2",
      question: "2. What is the main purpose of an invariant?",
      options: [
        "A. To describe a property that must remain true in valid states",
        "B. To guarantee that code is fast",
        "C. To replace interface documentation",
        "D. To avoid all error handling",
      ],
      correct: 0,
      explanation:
        "An invariant is a foundational mathematical or state property (e.g. 0 <= queue_size <= capacity, or no task is both running and terminated) that must hold across all observable valid states of the component.",
    },
    {
      id: "q3",
      question:
        "3. Which testing strategy is particularly useful for checking many sequences of state transitions against a reference model?",
      options: [
        "A. Only manual inspection",
        "B. Model-based testing",
        "C. A single timing benchmark",
        "D. A reboot test",
      ],
      correct: 1,
      explanation:
        "Model-based testing formalizes legal states and transitions in an abstract reference model. It executes generated operation sequences against both the model and implementation, comparing outputs to discover elusive sequential bugs.",
    },
    {
      id: "q4",
      question: "4. What should be recorded when a randomized test finds a failure?",
      options: [
        "A. Only the final pass/fail result",
        "B. Only the machine name",
        "C. The seed, inputs or operation sequence, environment, and diagnostic evidence",
        "D. Nothing, if it passed once before",
      ],
      correct: 2,
      explanation:
        "To achieve reproducibility, engineers must record the exact pseudo-random seed, worker count, operation sequence, compiler flags, kernel version, and diagnostic logs/stack traces to recreate the minimal failing scenario.",
    },
    {
      id: "q5",
      question: "5. What is the strongest reason to add a regression test after fixing a bug?",
      options: [
        "A. It guarantees there will be no future bugs",
        "B. It preserves a check for the specific failure that was corrected",
        "C. It makes benchmarks unnecessary",
        "D. It replaces integration testing",
      ],
      correct: 1,
      explanation:
        "A regression test enshrines the exact test case that failed before the fix and passed after it, ensuring that subsequent code changes or refactors cannot silently reintroduce the same defect.",
    },
  ];

  const handleSelectQuiz = (qId, optionIdx) => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  /* -------------------------------------------------------------------------- */
  /* CHECKLIST STATE                                                            */
  /* -------------------------------------------------------------------------- */
  const [checklist, setChecklist] = useState({
    requirements: false,
    invariants: false,
    testingStrategy: false,
    modelBased: false,
    faultInjection: false,
    raceDetection: false,
    kernelPanics: false,
    regressions: false,
    paperReview: false,
    testPlanDeliverable: false,
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
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
              <Microscope size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-wider uppercase text-[#ea580c]">
                  Operating Systems Master Course · Module 22
                </span>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange-100 text-[#ea580c] border border-orange-200/60">
                  Reliability &amp; Verification
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-stone-900 leading-tight">
                OS Design, Testing and Failure Analysis
              </h1>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAiTutor(true)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#e7e3da] hover:border-orange-300 text-stone-800 text-xs font-semibold shadow-2xs transition-all hover:bg-orange-50/40"
          >
            <Sparkles size={14} className="text-[#ea580c]" />
            <span className="hidden sm:inline">Ask Nova AI</span>
          </button>
        </div>
      </header>

      {/* Course Sub-Navigation Bar */}
      <ModuleNav
        track="os"
        currentModuleId="testing"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="Verification AI Tutor"
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 space-y-10">
        {/* Module Hero Banner */}
        <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />
          <div className="space-y-4 max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 text-[#ea580c] text-xs font-bold border border-orange-200/80">
              <ShieldCheck size={13} />
              <span>Advanced Operating Systems · Reliability Engineering · Research Methods</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Proving Correctness, Robustness, and Performance in Systems Software
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Operating-system engineering goes far beyond implementing algorithms: engineers must define
              provable component guarantees, preserve strict invariants under concurrent pressure, test failure
              paths through controlled fault injection, diagnose kernel panics, and evaluate systems research
              papers using empirical evidence.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da]/80">
                <div className="text-xs text-stone-500 font-medium">Design &amp; Contracts</div>
                <div className="text-sm font-bold text-stone-800 mt-0.5">Invariants &amp; Pre/Post</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da]/80">
                <div className="text-xs text-stone-500 font-medium">Fault Testing</div>
                <div className="text-sm font-bold text-stone-800 mt-0.5">Injected Failures</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da]/80">
                <div className="text-xs text-stone-500 font-medium">Concurrency Sanitizer</div>
                <div className="text-sm font-bold text-stone-800 mt-0.5">ThreadSanitizer (TSAN)</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da]/80">
                <div className="text-xs text-stone-500 font-medium">Crash Investigation</div>
                <div className="text-sm font-bold text-stone-800 mt-0.5">kdump &amp; Kernel Panics</div>
              </div>
            </div>
          </div>
        </section>

        {/* Lesson Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#e7e3da]">
          {[
            { id: "requirements", label: "1. Requirements & Traceability" },
            { id: "invariants", label: "2. Invariants & Interfaces" },
            { id: "testing", label: "3. Layered Testing Strategies" },
            { id: "model-based", label: "4. Model-Based State Testing" },
            { id: "fault-injection", label: "5. Fault Injection & Seeds" },
            { id: "races", label: "6. Race Detection & Sanitizers" },
            { id: "panics", label: "7. Kernel Panics & kdump" },
            { id: "regressions", label: "8. Regressions & Trade-offs" },
            { id: "papers", label: "9. Research Paper Evaluation" },
            { id: "lab", label: "Lab 22.1: Verification Lab" },
            { id: "quiz", label: "Knowledge Check" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveLesson(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeLesson === tab.id
                  ? "bg-[#ea580c] text-white shadow-xs"
                  : "bg-white text-stone-600 hover:text-stone-900 border border-[#e7e3da] hover:border-stone-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ================================================================== */}
        {/* LESSON 1: Requirements and Design Constraints                      */}
        {/* ================================================================== */}
        {activeLesson === "requirements" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Lesson 1</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Functional &amp; Non-Functional Requirements, Constraints, and Traceability
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Systems engineering begins with testable, observable specifications. Vague goals like
                &quot;the scheduler should work correctly&quot; are untestable. Every requirement must directly link
                to a design decision and a verification method.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                <span className="font-bold text-sm text-stone-900">1.1 Functional Requirements</span>
                <p className="text-stone-600 leading-relaxed">
                  Describe what the component must explicitly do. For a process scheduler:
                </p>
                <ul className="list-disc pl-4 space-y-1 text-stone-700">
                  <li>Select a runnable task for CPU execution</li>
                  <li>Maintain valid task state transitions (Created, Runnable, Running, Blocked, Terminated)</li>
                  <li>Handle task state changes when I/O completes or quantum expires</li>
                  <li>Guarantee terminated tasks are never scheduled again</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                <span className="font-bold text-sm text-stone-900">1.2 Non-Functional Requirements</span>
                <p className="text-stone-600 leading-relaxed">
                  Describe constraints on operational behavior. Must be accompanied by verification methods:
                </p>
                <ul className="list-disc pl-4 space-y-1 text-stone-700">
                  <li><strong>Correctness:</strong> Zero resurrection of terminated tasks (state tests)</li>
                  <li><strong>Performance:</strong> Dispatch overhead within allocated budget (benchmark)</li>
                  <li><strong>Reliability:</strong> Memory allocation failure preserves state (fault injection)</li>
                  <li><strong>Security:</strong> Unprivileged tasks cannot modify scheduler run queues (isolation)</li>
                </ul>
              </div>
            </div>

            {/* Traceability Table */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <FileText size={16} className="text-[#ea580c]" />
                <span>Requirements Traceability Matrix (Scheduler Example)</span>
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs font-mono text-stone-800">
                  <thead>
                    <tr className="border-b border-[#e7e3da] text-stone-500 text-left">
                      <th className="py-2">Req ID</th>
                      <th className="py-2">Requirement</th>
                      <th className="py-2">Design Decision</th>
                      <th className="py-2">Verification Method</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7e3da]/60">
                    <tr>
                      <td className="py-2 font-bold text-[#ea580c]">SCH-01</td>
                      <td className="py-2">Never schedule terminated tasks</td>
                      <td className="py-2">Validate task state prior to selection</td>
                      <td className="py-2">State-transition tests</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-[#ea580c]">SCH-02</td>
                      <td className="py-2">Handle an empty run queue</td>
                      <td className="py-2">Explicit idle-task fallback path</td>
                      <td className="py-2">Empty-queue unit test</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-[#ea580c]">SCH-03</td>
                      <td className="py-2">Preserve state on memory alloc failure</td>
                      <td className="py-2">Defined rollback failure path</td>
                      <td className="py-2">Allocation-failure injection</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-[#ea580c]">SCH-04</td>
                      <td className="py-2">Maintain concurrent run queue integrity</td>
                      <td className="py-2">Fine-grained per-core spinlocks</td>
                      <td className="py-2">TSAN concurrent stress test</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 2: Invariants, Interfaces, and Modularity                   */}
        {/* ================================================================== */}
        {activeLesson === "invariants" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Lesson 2</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Invariants, Design Contracts, and Opaque Interfaces
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                An invariant is a condition that must remain true whenever a component is in a valid observable
                state. Preconditions, postconditions, and failure semantics form an enforceable contract.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="font-bold text-stone-900 text-sm">System Invariants</span>
                <p className="text-stone-600 leading-relaxed">
                  For a bounded queue with capacity \(C\):
                  <br />
                  <code className="font-mono text-[#ea580c] font-bold">0 &le; queue_size &le; C</code>
                  <br />
                  Even under concurrent producers and consumers, size must never exceed capacity or drop below 0.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="font-bold text-stone-900 text-sm">Pre / Post Contracts</span>
                <p className="text-stone-600 leading-relaxed">
                  <strong>Precondition:</strong> Pointer valid, queue initialized.
                  <br />
                  <strong>Success Postcondition:</strong> Item queued, size++.
                  <br />
                  <strong>Failure Postcondition:</strong> Queue unchanged; zero partial updates.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="font-bold text-stone-900 text-sm">Opaque Modularity</span>
                <p className="text-stone-600 leading-relaxed">
                  Expose only pointers to incomplete struct types (e.g. <code className="font-mono text-[#ea580c]">struct bounded_queue;</code>).
                  Callers cannot access internal mutexes or buffer arrays directly, preventing abstraction leaks.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-stone-700">Opaque C Interface (bounded_queue.h)</div>
              <div className="bg-[#18181b] text-stone-200 p-4 rounded-2xl font-mono text-xs overflow-x-auto shadow-inner leading-relaxed">
                <div className="text-stone-500">// Opaque definition hides internal storage and locks from caller</div>
                <div><span className="text-blue-400">struct</span> bounded_queue;</div>
                <br />
                <div><span className="text-blue-400">struct</span> bounded_queue *<span className="text-yellow-300">queue_create</span>(<span className="text-blue-400">size_t</span> capacity);</div>
                <div><span className="text-blue-400">int</span> <span className="text-yellow-300">queue_try_push</span>(<span className="text-blue-400">struct</span> bounded_queue *q, <span className="text-blue-400">int</span> item);</div>
                <div><span className="text-blue-400">int</span> <span className="text-yellow-300">queue_try_pop</span>(<span className="text-blue-400">struct</span> bounded_queue *q, <span className="text-blue-400">int</span> *item);</div>
                <div><span className="text-blue-400">void</span> <span className="text-yellow-300">queue_destroy</span>(<span className="text-blue-400">struct</span> bounded_queue *q);</div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 3: Layered Testing Strategies                               */}
        {/* ================================================================== */}
        {activeLesson === "testing" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Lesson 3</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Layered Testing: Unit, Integration, Property-Based, and Fuzzing
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                No single testing tool proves system correctness. Robust engineering requires layered testing
                from isolated unit tests up to automated fuzz testing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                {
                  layer: "Unit Tests",
                  scope: "Functions & Boundaries",
                  desc: "Test isolated modules: zero capacity rejection, push to full, pop to empty, FIFO order.",
                },
                {
                  layer: "Integration Tests",
                  scope: "Subsystem Boundaries",
                  desc: "Test interaction between scheduler, page allocator, locks, and process table under partial failure.",
                },
                {
                  layer: "Property-Based",
                  scope: "Hypothesis / Generative",
                  desc: "Generate random sequences (push, push, pop, push, pop) and compare against abstract reference model.",
                },
                {
                  layer: "Coverage Fuzzing",
                  scope: "AFL++ / LibFuzzer",
                  desc: "Guided mutation of inputs to trigger edge-case parser overflows and unexpected kernel crash paths.",
                },
              ].map((item) => (
                <div key={item.layer} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="font-bold text-sm text-stone-900">{item.layer}</div>
                  <span className="text-[10px] uppercase font-semibold text-[#ea580c] px-2 py-0.5 rounded-full bg-orange-100">
                    {item.scope}
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed pt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 text-xs text-stone-700 space-y-1">
              <span className="font-bold text-amber-950">User-Space Harnessing vs Hardware Testing:</span>
              <p className="leading-relaxed">
                Developing and unit-testing systems algorithms in user space allows rapid iteration with Valgrind
                and ASAN/TSAN. However, user-space tests cannot verify hardware interrupt context constraints,
                DMA coherency, or kernel-only spinlock rules.
              </p>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 4: Model-Based Testing and State Machines                   */}
        {/* ================================================================== */}
        {activeLesson === "model-based" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Lesson 4</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Model-Based Testing &amp; Formal State Invariant Verification
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Model-based testing executes operation sequences against an abstract state machine to discover
                bugs that only occur after complex sequences of individually valid operations.
              </p>
            </div>

            {/* Interactive Simulator: State Machine Invariant Verifier */}
            <div className="p-5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da] space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                    <Activity size={16} className="text-[#ea580c]" />
                    <span>Interactive Process State Machine &amp; Invariant Monitor</span>
                  </h4>
                  <p className="text-xs text-stone-500">
                    Test legal and illegal state transitions. The verification engine checks invariants in real time.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800">
                    Queue: {runQueueCount}/{maxCapacity}
                  </span>
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg ${
                      procState === "Terminated"
                        ? "bg-red-100 text-red-800"
                        : procState === "Running"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    State: {procState}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => handleTransition("admit")}
                  className="py-2 px-3 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-xs font-semibold text-stone-800 shadow-2xs"
                >
                  Admit (Created &rarr; Runnable)
                </button>
                <button
                  onClick={() => handleTransition("schedule")}
                  className="py-2 px-3 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-xs font-semibold text-stone-800 shadow-2xs"
                >
                  Dispatch (Runnable &rarr; Running)
                </button>
                <button
                  onClick={() => handleTransition("preempt")}
                  className="py-2 px-3 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-xs font-semibold text-stone-800 shadow-2xs"
                >
                  Preempt (Running &rarr; Runnable)
                </button>
                <button
                  onClick={() => handleTransition("block")}
                  className="py-2 px-3 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-xs font-semibold text-stone-800 shadow-2xs"
                >
                  I/O Block (Running &rarr; Blocked)
                </button>
                <button
                  onClick={() => handleTransition("unblock")}
                  className="py-2 px-3 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-xs font-semibold text-stone-800 shadow-2xs"
                >
                  I/O Done (Blocked &rarr; Runnable)
                </button>
                <button
                  onClick={() => handleTransition("terminate")}
                  className="py-2 px-3 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-xs font-semibold text-stone-800 shadow-2xs"
                >
                  Exit (Running &rarr; Terminated)
                </button>
                <button
                  onClick={() => handleTransition("resurrect")}
                  className="py-2 px-3 rounded-xl bg-red-100 border border-red-300 hover:bg-red-200 text-xs font-bold text-red-900 shadow-2xs"
                >
                  Illegal: Resurrect Terminated
                </button>
                <button
                  onClick={() => {
                    setProcState("Created");
                    setRunQueueCount(0);
                    setSimLog([{ time: "0.00s", event: "Reset to initial state", status: "ok" }]);
                  }}
                  className="py-2 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-700"
                >
                  Reset State
                </button>
              </div>

              {/* Transition Event Log */}
              <div className="p-3.5 rounded-xl bg-white border border-[#e7e3da] space-y-1.5 font-mono text-xs">
                <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                  Verification Event Log
                </div>
                {simLog.map((l, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 ${
                      l.status === "error"
                        ? "text-amber-700"
                        : l.status === "fatal"
                        ? "text-red-600 font-bold"
                        : "text-stone-700"
                    }`}
                  >
                    <span className="text-stone-400">[{l.time}]</span>
                    <span>{l.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 5: Fault Injection and Reproducibility                      */}
        {/* ================================================================== */}
        {activeLesson === "fault-injection" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Lesson 5</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Controlled Fault Injection, Memory Unwinding, and Test Reproducibility
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Reliable systems must handle rare error conditions gracefully. Controlled fault injection verifies
                that error handling routines release all previously acquired resources without leaks or partially
                initialized objects.
              </p>
            </div>

            {/* Interactive Simulator: Controlled Allocation Failure Harness */}
            <div className="p-5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da] space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                    <Bug size={16} className="text-[#ea580c]" />
                    <span>Controlled Allocation Fault Injection Harness</span>
                  </h4>
                  <p className="text-xs text-stone-500">
                    Simulate partial initialization failures across a 4-stage allocation sequence.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={failAtStep}
                    onChange={(e) => setFailAtStep(parseInt(e.target.value, 10))}
                    className="px-2.5 py-1.5 rounded-xl bg-white border border-stone-300 text-xs text-stone-800"
                  >
                    <option value={0}>No Fault (Success)</option>
                    <option value={1}>Inject Fault at Step 1 (Queue struct)</option>
                    <option value={2}>Inject Fault at Step 2 (Ring buffer)</option>
                    <option value={3}>Inject Fault at Step 3 (Mutex init)</option>
                    <option value={4}>Inject Fault at Step 4 (Cond var init)</option>
                  </select>

                  <button
                    onClick={() =>
                      setCleanupPolicy(cleanupPolicy === "defensive" ? "sloppy" : "defensive")
                    }
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      cleanupPolicy === "defensive"
                        ? "bg-emerald-600 text-white"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {cleanupPolicy === "defensive" ? "✓ Defensive Unwind" : "✗ Sloppy Cleanup"}
                  </button>

                  <button
                    onClick={runAllocationHarness}
                    className="px-3.5 py-1.5 rounded-xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white text-xs font-bold shadow-2xs"
                  >
                    Execute Harness
                  </button>
                </div>
              </div>

              {/* Execution Visualization */}
              <div className="p-4 rounded-xl bg-white border border-[#e7e3da] space-y-3 text-xs">
                {initResult ? (
                  <div
                    className={`p-3 rounded-xl border ${
                      initResult.status === "success"
                        ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                        : initResult.status === "handled"
                        ? "bg-amber-50 border-amber-300 text-amber-900"
                        : "bg-red-50 border-red-300 text-red-900"
                    }`}
                  >
                    <div className="font-bold mb-1">
                      {initResult.status === "success"
                        ? "✓ Component Initialized Successfully"
                        : initResult.status === "handled"
                        ? "✓ Error Handled Safely (Clean Rollback)"
                        : "✗ Resource Leak / Unhandled Fault"}
                    </div>
                    <p className="leading-relaxed">{initResult.message}</p>
                    {initResult.leakedBytes > 0 && (
                      <div className="font-mono font-bold text-red-700 mt-1">
                        Valgrind Alert: {initResult.leakedBytes} bytes definitely lost in heap!
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-stone-400 italic">Click &quot;Execute Harness&quot; to simulate allocation fault injection.</div>
                )}
              </div>
            </div>

            {/* Test Reproducibility Requirements */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
              <span className="font-bold text-stone-900 text-sm">Logging for Intermittent Concurrency Reproduction</span>
              <p className="text-stone-600 leading-relaxed">
                When randomized or stress tests trigger an intermittent failure, engineers must record the exact
                environmental conditions to reproduce it deterministically:
              </p>
              <div className="font-mono text-[11px] bg-white p-2.5 rounded-xl border border-stone-200 text-stone-800">
                test_seed=18421 workers=8 ops_per_worker=100000 failure=&quot;queue invariant violated&quot; artifact=seed_18421.json
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 6: Race Detection and Concurrency Testing                   */}
        {/* ================================================================== */}
        {activeLesson === "races" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Lesson 6</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Data Races, Shadow Memory, and Sanitizer Tooling
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Concurrency bugs are notorious for disappearing when debug print statements are added
                (heisenbugs). Learn how to detect unsynchronized memory accesses systematically with
                ThreadSanitizer (TSAN) and AddressSanitizer (ASAN).
              </p>
            </div>

            {/* Interactive Simulator: Concurrency Race & TSAN Diagnostic */}
            <div className="p-5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da] space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                    <Binary size={16} className="text-[#ea580c]" />
                    <span>Concurrent Counter Execution Simulator</span>
                  </h4>
                  <p className="text-xs text-stone-500">
                    Compare Unsynchronized Race vs POSIX Mutex vs C11 Atomic Fetch-Add across 8 threads.
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  {[
                    { id: "race", label: "Data Race (counter++)" },
                    { id: "mutex", label: "pthread_mutex" },
                    { id: "atomic", label: "C11 stdatomic" },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => runConcurrencySim(btn.id)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                        concurrencyMode === btn.id
                          ? "bg-[#ea580c] text-white shadow-2xs"
                          : "bg-white text-stone-600 border border-stone-300 hover:bg-stone-50"
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sim Results */}
              <div className="p-4 rounded-xl bg-white border border-[#e7e3da] space-y-3 text-xs">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono">
                  <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="text-stone-400">Expected:</span>
                    <div className="text-sm font-bold text-stone-800">{simRunStats.expected.toLocaleString()}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="text-stone-400">Actual:</span>
                    <div
                      className={`text-sm font-bold ${
                        simRunStats.lostUpdates > 0 ? "text-red-600" : "text-emerald-700"
                      }`}
                    >
                      {simRunStats.actual.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="text-stone-400">Lost Updates:</span>
                    <div className="text-sm font-bold text-red-600">{simRunStats.lostUpdates.toLocaleString()}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="text-stone-400">Execution Time:</span>
                    <div className="text-sm font-bold text-stone-800">{simRunStats.timeSec}</div>
                  </div>
                </div>

                {simRunStats.tsanReport && (
                  <div className="p-3.5 rounded-xl bg-[#18181b] text-red-300 font-mono text-[11px] space-y-1">
                    <div className="text-red-400 font-bold">==================</div>
                    <div className="text-red-400 font-bold">WARNING: ThreadSanitizer: data race (pid=4812)</div>
                    <div>Write of size 8 at 0x7ffe0044 by thread T2:</div>
                    <div className="text-stone-400 pl-4">#0 worker race_demo.c:13 (race_demo_tsan+0x1240)</div>
                    <div>Previous write of size 8 at 0x7ffe0044 by thread T1:</div>
                    <div className="text-stone-400 pl-4">#0 worker race_demo.c:13 (race_demo_tsan+0x1240)</div>
                    <div className="text-red-400 font-bold">SUMMARY: ThreadSanitizer: data race race_demo.c:13 in worker</div>
                    <div className="text-red-400 font-bold">==================</div>
                  </div>
                )}
              </div>
            </div>

            {/* Sanitizer Tool Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                <span className="font-bold text-stone-900">ThreadSanitizer (TSAN)</span>
                <p className="text-stone-600">
                  <code className="font-mono text-[#ea580c]">-fsanitize=thread</code>: Tracks shadow memory timestamps
                  to find concurrent unsynchronized reads/writes without false positives.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                <span className="font-bold text-stone-900">AddressSanitizer (ASAN)</span>
                <p className="text-stone-600">
                  <code className="font-mono text-[#ea580c]">-fsanitize=address</code>: Surrounds memory allocations with
                  poisoned redzones to trap buffer overflows and use-after-free instantly.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                <span className="font-bold text-stone-900">Valgrind Memcheck</span>
                <p className="text-stone-600">
                  Instruments compiled x86 binaries via CPU emulation to detect uninitialized memory reads and
                  dangling heap memory leaks.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 7: Kernel Panics, Crash Dumps, and Debugging                */}
        {/* ================================================================== */}
        {activeLesson === "panics" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Lesson 7</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Kernel Panics, kdump/kexec Crash Dumps, and Root-Cause Debugging
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                When the operating system kernel encounters state corruption or unrecoverable hardware faults, it
                halts execution to prevent data corruption. Master the structured crash diagnostic workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="font-bold text-stone-900 text-sm">Kernel Panic Triggers</span>
                <p className="text-stone-600 leading-relaxed">
                  Null pointer dereference in kernel space (<code className="font-mono text-[#ea580c]">CR2: 00000000</code>),
                  scheduling while atomic, spinlock recursion, or failed boot device mounting (VFS panic).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="font-bold text-stone-900 text-sm">kdump &amp; kexec Mechanism</span>
                <p className="text-stone-600 leading-relaxed">
                  When a panic occurs, kdump uses <code className="font-mono text-[#ea580c]">kexec</code> to boot into
                  a reserved capture kernel without resetting hardware, writing <code className="font-mono">vmcore</code>{" "}
                  safely to disk.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="font-bold text-stone-900 text-sm">Diagnostic Commands</span>
                <p className="text-stone-600 leading-relaxed font-mono text-[11px]">
                  journalctl -k -b -1<br />
                  dmesg --level=err,warn<br />
                  crash vmlinux vmcore
                </p>
              </div>
            </div>

            {/* Crash Analysis Workflow */}
            <div className="p-5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da] space-y-3 text-xs">
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <Stethoscope size={16} className="text-[#ea580c]" />
                <span>Disciplined 7-Step Crash Investigation Workflow</span>
              </h4>
              <ol className="list-decimal pl-4 space-y-1.5 text-stone-700 leading-relaxed">
                <li><strong>Confirm event type:</strong> Differentiate kernel panic from hardware power reset or watchdog timeout.</li>
                <li><strong>Collect logs &amp; vmcore:</strong> Match exact kernel release (`uname -r`) with unstripped debug symbols (`vmlinux`).</li>
                <li><strong>Locate initial fault:</strong> Find the <em>first</em> error in dmesg, not merely the last line before reboot.</li>
                <li><strong>Inspect instruction pointer (RIP):</strong> Decode the instruction and registers at the faulting address.</li>
                <li><strong>Trace call stack:</strong> Follow the stack backtrace to identify lock acquisitions and object lifetimes.</li>
                <li><strong>Reproduce in disposable VM:</strong> Replay the workload inside a QEMU virtual machine.</li>
                <li><strong>Validate fix with regression tests:</strong> Verify that the crash path is permanently eliminated.</li>
              </ol>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 8: Reliability, Regressions, and Trade-Offs                 */}
        {/* ================================================================== */}
        {activeLesson === "regressions" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Lesson 8</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Reliability Metrics, Performance Regressions, and Engineering Trade-Offs
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Reliability is more than uptime. A component that stays online while returning corrupted results
                is broken. Learn how to define regression acceptance criteria and balance architectural trade-offs.
              </p>
            </div>

            {/* Interactive Simulator: Regression Gate Calculator */}
            <div className="p-5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da] space-y-4">
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <Gauge size={16} className="text-[#ea580c]" />
                  <span>Continuous Integration Performance Regression Gate</span>
                </h4>
                <p className="text-xs text-stone-500">
                  Adjust baseline vs candidate benchmark results to verify CI pass/block thresholds.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e7e3da] space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-stone-700">Candidate Throughput:</span>
                      <span className="font-mono font-bold text-[#ea580c]">
                        {(candidateOps / 1000).toFixed(0)}k ops/sec
                      </span>
                    </div>
                    <input
                      type="range"
                      min="800000"
                      max="1500000"
                      step="10000"
                      value={candidateOps}
                      onChange={(e) => setCandidateOps(parseInt(e.target.value, 10))}
                      className="w-full accent-[#ea580c] cursor-pointer"
                    />
                    <div className="text-[10px] text-stone-400">Baseline: {(baseOps / 1000).toFixed(0)}k ops/sec</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-stone-700">Candidate p99 Latency:</span>
                      <span className="font-mono font-bold text-[#ea580c]">{candidateP99Us} &mu;s</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="120"
                      step="1"
                      value={candidateP99Us}
                      onChange={(e) => setCandidateP99Us(parseInt(e.target.value, 10))}
                      className="w-full accent-[#ea580c] cursor-pointer"
                    />
                    <div className="text-[10px] text-stone-400">Baseline: {baseP99Us} &mu;s</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-stone-100 text-xs">
                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                    <div className="text-stone-500">Throughput Delta</div>
                    <div
                      className={`text-base font-bold mt-0.5 ${
                        parseFloat(regressionAnalysis.throughputDiffPct) < 0 ? "text-red-600" : "text-emerald-700"
                      }`}
                    >
                      {regressionAnalysis.throughputDiffPct}%
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                    <div className="text-stone-500">p99 Latency Delta</div>
                    <div
                      className={`text-base font-bold mt-0.5 ${
                        parseFloat(regressionAnalysis.p99DiffPct) > 0 ? "text-red-600" : "text-emerald-700"
                      }`}
                    >
                      +{regressionAnalysis.p99DiffPct}%
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                    <div className="text-stone-500">Automated CI Decision</div>
                    <div className={`text-xs font-bold mt-1 text-${regressionAnalysis.verdictColor}-700`}>
                      {regressionAnalysis.verdict}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-stone-600 italic bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                  {regressionAnalysis.rationale}
                </p>
              </div>
            </div>

            {/* Trade-off Matrix */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-stone-900">Systems Engineering Trade-Off Matrix</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <span className="font-bold text-stone-900">Finer-Grained Locking</span>
                  <p className="text-stone-600">
                    <strong>Benefit:</strong> Higher multi-core throughput.<br />
                    <strong>Cost:</strong> Complex lock acquisition ordering hierarchies and deadlock risks.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <span className="font-bold text-stone-900">Lock-Free Algorithms</span>
                  <p className="text-stone-600">
                    <strong>Benefit:</strong> Immunity to thread preemption bottlenecks.<br />
                    <strong>Cost:</strong> Harder correctness proofs, memory reclamation complexities (ABA, hazard pointers).
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LESSON 9: Reading Technical Papers & Evaluating Design Decisions    */}
        {/* ================================================================== */}
        {activeLesson === "papers" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Lesson 9</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Evaluating Systems Research Papers (SOSP, OSDI, EuroSys)
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Operating systems engineering advances through published academic and industrial research.
                Engineers must read systems papers critically, distinguishing between genuine breakthroughs and
                narrow benchmark artifacts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="font-bold text-stone-900 text-sm">7-Point Paper Evaluation Framework</span>
                <ul className="list-disc pl-4 space-y-1 text-stone-700 leading-relaxed">
                  <li><strong>Problem:</strong> What fundamental limitation does the paper address?</li>
                  <li><strong>Contribution:</strong> What is novel (algorithm, architecture, hardware use)?</li>
                  <li><strong>Assumptions:</strong> What hardware topology and workload mix is assumed?</li>
                  <li><strong>Trade-offs:</strong> What did the authors sacrifice (fairness, memory, latency)?</li>
                  <li><strong>Baselines:</strong> Were existing baselines properly tuned and optimized?</li>
                  <li><strong>Variance:</strong> Were measurements repeated with standard deviation reported?</li>
                  <li><strong>Reproducibility:</strong> Is code, test harness, and artifact available?</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="font-bold text-stone-900 text-sm">Premier Systems Conferences</span>
                <div className="space-y-2 pt-1 text-stone-600">
                  <div>
                    <strong className="text-stone-900">SOSP / OSDI:</strong> The gold standard for operating systems,
                    distributed systems, and hypervisors.
                  </div>
                  <div>
                    <strong className="text-stone-900">EuroSys &amp; USENIX ATC:</strong> Practical implementations,
                    virtualization, storage engines, and container internals.
                  </div>
                  <div className="p-2.5 rounded-lg bg-orange-50 border border-orange-200 text-orange-950 font-medium">
                    Deliverable: Choose one paper relevant to synchronization or testing and prepare an
                    evidence-based evaluation review.
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* LAB 22.1: Systems Component Verification                           */}
        {/* ================================================================== */}
        {activeLesson === "lab" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Lab 22.1</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Practical Lab: Systems Component Verification &amp; Failure Analysis
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Scenario: You are responsible for a shared counter used by worker threads in a critical systems
                component. Under concurrent load, the counter produces incorrect totals. Reproduce the failure,
                diagnose the root cause with ThreadSanitizer, implement two fixes (atomic and mutex), and build
                a formal test plan.
              </p>
            </div>

            {/* Lab Source Snippet */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-stone-700">
                <span>race_demo.c (POSIX Threads Data Race)</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `#include <pthread.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

#define THREADS 8
#define ITERATIONS 1000000

static uint64_t counter = 0;

static void *worker(void *arg) {
    (void)arg;
    for (uint64_t i = 0; i < ITERATIONS; i++) {
        counter++; // DATA RACE: Unsynchronized read-modify-write!
    }
    return NULL;
}

int main(void) {
    pthread_t threads[THREADS];
    for (int i = 0; i < THREADS; i++) {
        int rc = pthread_create(&threads[i], NULL, worker, NULL);
        if (rc != 0) {
            fprintf(stderr, "pthread_create failed: %d\\n", rc);
            return EXIT_FAILURE;
        }
    }

    for (int i = 0; i < THREADS; i++) {
        int rc = pthread_join(threads[i], NULL);
        if (rc != 0) {
            fprintf(stderr, "pthread_join failed: %d\\n", rc);
            return EXIT_FAILURE;
        }
    }

    uint64_t expected = (uint64_t)THREADS * ITERATIONS;
    printf("Expected: %llu\\n", (unsigned long long)expected);
    printf("Actual:   %llu\\n", (unsigned long long)counter);
    return counter == expected ? EXIT_SUCCESS : EXIT_FAILURE;
}`,
                      "race_demo_code"
                    )
                  }
                  className="flex items-center gap-1 text-[#ea580c] hover:text-[#ea580c]/80"
                >
                  {copiedSnippet === "race_demo_code" ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedSnippet === "race_demo_code" ? "Copied" : "Copy Source"}</span>
                </button>
              </div>

              <div className="bg-[#18181b] text-stone-200 p-4 rounded-2xl font-mono text-xs overflow-x-auto shadow-inner leading-relaxed">
                <div className="text-stone-500">// Reproduction Command: gcc -O1 -g -fsanitize=thread -pthread race_demo.c -o race_demo_tsan</div>
                <div className="text-purple-400">#include &lt;pthread.h&gt;</div>
                <div className="text-purple-400">#include &lt;stdint.h&gt;</div>
                <div className="text-purple-400">#include &lt;stdio.h&gt;</div>
                <div className="text-purple-400">#include &lt;stdlib.h&gt;</div>
                <br />
                <div><span className="text-blue-400">#define</span> THREADS 8</div>
                <div><span className="text-blue-400">#define</span> ITERATIONS 1000000</div>
                <br />
                <div><span className="text-blue-400">static uint64_t</span> counter = 0;</div>
                <br />
                <div><span className="text-blue-400">static void</span> *<span className="text-yellow-300">worker</span>(<span className="text-blue-400">void</span> *arg) &#123;</div>
                <div>&nbsp;&nbsp;<span className="text-blue-400">for</span> (<span className="text-blue-400">uint64_t</span> i = 0; i &lt; ITERATIONS; i++) &#123;</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;counter++; <span className="text-red-400">// DATA RACE: Unsynchronized load/store</span></div>
                <div>&nbsp;&nbsp;&#125;</div>
                <div>&nbsp;&nbsp;<span className="text-blue-400">return</span> NULL;</div>
                <div>&#125;</div>
              </div>
            </div>

            {/* Benchmark Comparison Table */}
            <div className="p-5 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da] space-y-3">
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <BarChart2 size={16} className="text-[#ea580c]" />
                <span>Empirical Benchmark Results (8 Threads, 8,000,000 Total Ops)</span>
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs font-mono text-stone-800">
                  <thead>
                    <tr className="border-b border-[#e7e3da] text-stone-500 text-left">
                      <th className="py-2">Implementation</th>
                      <th className="py-2">Workers</th>
                      <th className="py-2">Expected Total</th>
                      <th className="py-2">Actual Result</th>
                      <th className="py-2">Time (s)</th>
                      <th className="py-2">Correctness</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7e3da]/60">
                    <tr>
                      <td className="py-2 font-bold text-red-600">Original (race_demo)</td>
                      <td className="py-2">8</td>
                      <td className="py-2">8,000,000</td>
                      <td className="py-2 text-red-600 font-bold">5,412,940</td>
                      <td className="py-2">0.142 s</td>
                      <td className="py-2 text-red-600 font-bold">FAIL (Lost Updates)</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-amber-700">POSIX Mutex</td>
                      <td className="py-2">8</td>
                      <td className="py-2">8,000,000</td>
                      <td className="py-2 font-bold text-emerald-700">8,000,000</td>
                      <td className="py-2">3.920 s</td>
                      <td className="py-2 text-emerald-700 font-bold">PASS (Futex lock)</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-emerald-700">C11 Atomic fetch_add</td>
                      <td className="py-2">8</td>
                      <td className="py-2">8,000,000</td>
                      <td className="py-2 font-bold text-emerald-700">8,000,000</td>
                      <td className="py-2 text-emerald-700 font-bold">0.038 s</td>
                      <td className="py-2 text-emerald-700 font-bold">PASS (103x faster)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Test Plan Template Deliverable */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-stone-700">
                <span>test_plan.md Deliverable Template</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `# Systems Component Test Plan

## 1. Component and Scope
- Component: Shared Concurrent Counter
- Version / Commit: v1.0.4-rc2
- OS & Architecture: Linux 6.8.0-x86_64
- Compiler & Flags: gcc -O1 -g -fsanitize=thread -pthread

## 2. Requirements & Invariants
- Functional: Final counter MUST equal T * N increments exactly.
- Non-Functional: Program terminates without deadlock under TSAN.
- Invariant: Counter value monotonically increases; no lost updates.

## 3. Test Cases
| ID | Scenario | Input | Expected Result | Evidence |
|---|---|---|---|---|
| TC-01 | Single Worker | 1 Worker | 1,000,000 | stdout |
| TC-02 | Concurrent 8 Workers | 8 Workers | 8,000,000 | stdout |
| TC-03 | TSAN Race Detection | 8 Workers (TSAN) | Zero race warnings | TSAN output |
| TC-04 | Performance Benchmark | 8 Workers | Median runtime recorded | benchmark logs |

## 4. Root Cause Analysis
- Violated Invariant: Counter equality invariant violated.
- Technical Cause: C data race on counter variable (unsynchronized RMW).
- Fix: atomic_fetch_add_explicit(&counter, 1, memory_order_relaxed).`,
                      "test_plan_template"
                    )
                  }
                  className="flex items-center gap-1 text-[#ea580c] hover:text-[#ea580c]/80"
                >
                  {copiedSnippet === "test_plan_template" ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedSnippet === "test_plan_template" ? "Copied" : "Copy Template"}</span>
                </button>
              </div>
              <div className="bg-[#18181b] text-stone-300 p-4 rounded-2xl font-mono text-xs leading-relaxed max-h-60 overflow-y-auto">
                <div className="text-purple-400 font-bold"># Systems Component Test Plan</div>
                <div>## 1. Component &amp; Scope</div>
                <div>- Component: Shared Concurrent Counter</div>
                <div>- OS &amp; Architecture: Linux 6.8 x86-64</div>
                <div>- Compiler &amp; Flags: gcc -O1 -g -fsanitize=thread -pthread</div>
                <br />
                <div>## 2. Requirements &amp; Invariants</div>
                <div>- Expected total = T * N operations</div>
                <div>- Monotonic increase without torn reads</div>
                <div>/* ... see complete template via Copy Template ... */</div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* KNOWLEDGE CHECK QUIZ                                               */}
        {/* ================================================================== */}
        {activeLesson === "quiz" && (
          <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#ea580c] tracking-wider uppercase">Assessment</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Module 22 OS Verification &amp; Failure Analysis Knowledge Check
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm">
                Validate your understanding of invariants, model testing, fault injection, and regression analysis.
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

        {/* ================================================================== */}
        {/* MASTERY CHECKLIST & SUMMARY                                        */}
        {/* ================================================================== */}
        <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
              <CheckSquare size={20} className="text-[#ea580c]" />
              <span>Module 22 Systems Verification Mastery Checklist</span>
            </h3>
            <p className="text-xs text-stone-500">
              Track your conceptual and practical comprehension of testing, fault injection, and failure diagnostics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { key: "requirements", label: "Translate functional and non-functional requirements into testable properties" },
              { key: "invariants", label: "Define explicit component invariants, preconditions, and opaque interfaces" },
              { key: "testingStrategy", label: "Build layered test suites combining unit, integration, and fuzz testing" },
              { key: "modelBased", label: "Verify state machines and legal state transitions using model-based testing" },
              { key: "faultInjection", label: "Inject controlled memory allocation faults and verify clean resource unwinding" },
              { key: "raceDetection", label: "Reproduce concurrency data races and verify fixes with ThreadSanitizer (-fsanitize=thread)" },
              { key: "kernelPanics", label: "Analyze kernel panics, kdump/kexec crash capture, and dmesg error stacks" },
              { key: "regressions", label: "Detect performance regressions using baselines and CI regression gate thresholds" },
              { key: "paperReview", label: "Evaluate systems research papers (SOSP/OSDI) for empirical rigor and reproducibility" },
              { key: "testPlanDeliverable", label: "Author comprehensive component test plans (test_plan.md) with traceability matrices" },
            ].map((item) => (
              <div
                key={item.key}
                onClick={() => toggleChecklist(item.key)}
                className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer select-none transition-all ${
                  checklist[item.key]
                    ? "bg-emerald-50/50 border-emerald-300 text-stone-900"
                    : "bg-stone-50/50 border-stone-200 text-stone-600 hover:bg-white"
                }`}
              >
                <div
                  className={`mt-0.5 rounded-md p-0.5 ${
                    checklist[item.key] ? "bg-emerald-600 text-white" : "border border-stone-300 bg-white"
                  }`}
                >
                  <Check size={12} className={checklist[item.key] ? "opacity-100" : "opacity-0"} />
                </div>
                <span className="text-xs leading-relaxed font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Navigation Bar */}
        <div className="pt-6 border-t border-[#e7e3da] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/os/advanced-sync")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 font-medium text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 21 (Advanced Synchronization &amp; Multiprocessor)</span>
          </button>

          <button
            onClick={() => navigate("/learning/os/capstone")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#ea580c] hover:bg-[#ea580c]/90 text-white font-medium text-sm transition-colors shadow-xs"
          >
            <span>Next: Module 23 (Capstone: xv6 RISC-V Component)</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        title="Nova OS Intelligence: OS Design, Testing & Failure Analysis"
        defaultMessage="Hello! Ask me any question about system invariants, pre/post conditions, model-based state machines, fault injection, ThreadSanitizer, AddressSanitizer, kernel panics, kdump, or evaluating systems research papers!"
      />
    </div>
  );
}
