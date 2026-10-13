import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layers,
  Database,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Zap,
  ShieldAlert,
  Activity,
  Cpu,
  Server,
  Network,
  Lock,
  ArrowRight,
  ArrowLeft,
  GitBranch,
  Timer,
  Scale,
  RefreshCw,
  Globe,
  Sliders,
  HelpCircle,
  FolderTree,
  ShieldCheck,
  ExternalLink,
  BookOpen,
  Vote,
  Radio,
  Clock,
  Workflow,
  Inbox,
  Filter,
  Flame,
  Send,
  Key,
  FileText,
  Unlock,
  XCircle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  TwoPhaseCommitDiagram,
  SagaWorkflowDiagram,
  IdempotencyKeyLifecycleDiagram,
  VisualDiagramComponentModule13,
} from "./SystemDesignTransactionsDiagrams";

export default function SystemDesignTransactions() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "simulators" | "qa" | "project" | "assessment" | "reading"
  const [activeWeek, setActiveWeek] = useState(1); // 1 | 2 | 3
  const [activeLesson, setActiveLesson] = useState("13.1");

  // Expanded Q&A accordion states
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 1: SAGA ORCHESTRATOR & COMPENSATION RUNNER
  // ---------------------------------------------------------------------------
  const [sagaFailAt, setSagaFailAt] = useState("none"); // "none" | "step2" | "step3" | "step4"
  const [sagaCurrentStep, setSagaCurrentStep] = useState(0); // 0: Idle, 1, 2, 3, 4, 5: Done
  const [sagaStatus, setSagaStatus] = useState("IDLE"); // "IDLE" | "RUNNING" | "COMPENSATING" | "SUCCESS" | "FAILED_COMPENSATED"
  const [sagaLogs, setSagaLogs] = useState([]);
  const [sagaStepsState, setSagaStepsState] = useState([
    { id: 1, name: "Reserve Interview Slot", service: "Scheduling Service", status: "READY", comp: "Release Slot" },
    { id: 2, name: "Allocate AI GPU Node", service: "Compute Service", status: "READY", comp: "Free GPU Node" },
    { id: 3, name: "Deduct Assessment Credit", service: "Billing Service", status: "READY", comp: "Refund Credit" },
    { id: 4, name: "Dispatch Confirmation Email", service: "Notification Service", status: "READY", comp: "Send Cancellation Notice" },
  ]);

  const resetSagaSim = () => {
    setSagaCurrentStep(0);
    setSagaStatus("IDLE");
    setSagaLogs([]);
    setSagaStepsState([
      { id: 1, name: "Reserve Interview Slot", service: "Scheduling Service", status: "READY", comp: "Release Slot" },
      { id: 2, name: "Allocate AI GPU Node", service: "Compute Service", status: "READY", comp: "Free GPU Node" },
      { id: 3, name: "Deduct Assessment Credit", service: "Billing Service", status: "READY", comp: "Refund Credit" },
      { id: 4, name: "Dispatch Confirmation Email", service: "Notification Service", status: "READY", comp: "Send Cancellation Notice" },
    ]);
  };

  const executeSagaStep = () => {
    if (sagaStatus === "SUCCESS" || sagaStatus === "FAILED_COMPENSATED") {
      resetSagaSim();
      return;
    }

    const nextStep = sagaCurrentStep + 1;
    if (nextStep > 4) return;

    setSagaCurrentStep(nextStep);
    setSagaStatus("RUNNING");

    // Check if failure injected at this step
    const shouldFail =
      (sagaFailAt === "step2" && nextStep === 2) ||
      (sagaFailAt === "step3" && nextStep === 3) ||
      (sagaFailAt === "step4" && nextStep === 4);

    if (shouldFail) {
      // Step fails -> Trigger compensations in reverse
      setSagaStepsState((prev) =>
        prev.map((s) => (s.id === nextStep ? { ...s, status: "FAILED" } : s))
      );
      setSagaLogs((prev) => [
        `[CRITICAL] Step ${nextStep} (${sagaStepsState[nextStep - 1].name}) FAILED. Initiating backward compensations!`,
        ...prev,
      ]);
      setSagaStatus("COMPENSATING");

      // Execute compensations for all steps prior to failure
      setTimeout(() => {
        setSagaStepsState((prev) =>
          prev.map((s) => {
            if (s.id < nextStep && s.status === "COMMITTED") {
              return { ...s, status: "COMPENSATED" };
            }
            return s;
          })
        );
        setSagaLogs((prev) => [
          `[COMPENSATION COMPLETE] All previous steps compensated. Saga state machine transitioned to COMPENSATED.`,
          `[COMPENSATING] Compensated ${nextStep - 1} prior committed transaction(s).`,
          ...prev,
        ]);
        setSagaStatus("FAILED_COMPENSATED");
      }, 700);
    } else {
      // Step succeeds
      setSagaStepsState((prev) =>
        prev.map((s) => (s.id === nextStep ? { ...s, status: "COMMITTED" } : s))
      );
      setSagaLogs((prev) => [
        `[SUCCESS] Step ${nextStep}: ${sagaStepsState[nextStep - 1].name} committed locally in ${sagaStepsState[nextStep - 1].service}.`,
        ...prev,
      ]);

      if (nextStep === 4) {
        setSagaStatus("SUCCESS");
        setSagaLogs((prev) => [
          `[SAGA COMPLETE] All 4 distributed transactions committed successfully. Workflow finalized!`,
          ...prev,
        ]);
      }
    }
  };

  const runFullSaga = () => {
    resetSagaSim();
    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current <= 4) {
        setSagaCurrentStep(current);
        const shouldFail =
          (sagaFailAt === "step2" && current === 2) ||
          (sagaFailAt === "step3" && current === 3) ||
          (sagaFailAt === "step4" && current === 4);

        if (shouldFail) {
          clearInterval(interval);
          setSagaStepsState((prev) =>
            prev.map((s) => (s.id === current ? { ...s, status: "FAILED" } : s))
          );
          setSagaStatus("COMPENSATING");
          setSagaLogs((prev) => [
            `[CRITICAL] Step ${current} failed. Running compensating rollbacks in reverse order...`,
            ...prev,
          ]);

          setTimeout(() => {
            setSagaStepsState((prev) =>
              prev.map((s) => {
                if (s.id < current && s.status === "COMMITTED") {
                  return { ...s, status: "COMPENSATED" };
                }
                return s;
              })
            );
            setSagaStatus("FAILED_COMPENSATED");
            setSagaLogs((prev) => [
              `[SAGA TERMINATED] Backward compensations executed. System returned to semantically consistent state.`,
              ...prev,
            ]);
          }, 800);
        } else {
          setSagaStepsState((prev) =>
            prev.map((s) => (s.id === current ? { ...s, status: "COMMITTED" } : s))
          );
          setSagaLogs((prev) => [
            `[STEP ${current}] ${sagaStepsState[current - 1].name} committed in ${sagaStepsState[current - 1].service}.`,
            ...prev,
          ]);
          if (current === 4) {
            clearInterval(interval);
            setSagaStatus("SUCCESS");
            setSagaLogs((prev) => [
              `[WORKFLOW COMPLETED] Saga reached terminal state SUCCESS with 0 compensations needed.`,
              ...prev,
            ]);
          }
        }
      } else {
        clearInterval(interval);
      }
    }, 600);
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 2: IDEMPOTENCY KEY & LOST-RESPONSE REPLAYER
  // ---------------------------------------------------------------------------
  const [idempKey, setIdempKey] = useState("ik_4b3bca6e91f");
  const [candidateScore, setCandidateScore] = useState(94);
  const [simulateLostAck, setSimulateLostAck] = useState(true);
  const [serverState, setServerState] = useState({
    attempts: 0,
    dbRows: 0,
    cachedResponse: null,
    storedHash: null,
    logs: [],
  });

  const currentPayloadHash = useMemo(() => {
    const raw = `${idempKey}:${candidateScore}`;
    let hash = 0;
    for (let i = 0; i < raw.length; i++) {
      hash = (hash << 5) - hash + raw.charCodeAt(i);
      hash |= 0;
    }
    return `sha256_${Math.abs(hash).toString(16)}`;
  }, [idempKey, candidateScore]);

  const handleSendIdempotentRequest = (tampered = false) => {
    const payloadHash = tampered ? "sha256_TAMPERED_HASH_999" : currentPayloadHash;

    setServerState((prev) => {
      const newAttempts = prev.attempts + 1;
      const logs = [...prev.logs];

      if (prev.storedHash) {
        // Key already exists in idempotency_records!
        if (prev.storedHash !== payloadHash) {
          logs.unshift(
            `[HTTP 422 UNPROCESSABLE] Key "${idempKey}" was already used with hash ${prev.storedHash}. Payload hash mismatch! Rejecting duplicate key reuse.`
          );
          return { ...prev, attempts: newAttempts, logs };
        }

        logs.unshift(
          `[HTTP 200 OK (CACHED REPLAY)] Key "${idempKey}" FOUND in idempotency_records (status: COMPLETED). Returning cached response without executing DB write! DB rows unchanged: ${prev.dbRows}.`
        );
        return { ...prev, attempts: newAttempts, logs };
      }

      // First time key is seen!
      const newDbRows = prev.dbRows + 1;
      const cached = {
        interviewId: "int_4091",
        score: candidateScore,
        status: "COMPLETED",
        finalizedAt: new Date().toISOString(),
      };

      if (simulateLostAck && newAttempts === 1) {
        logs.unshift(
          `[NETWORK DROP SIMULATED] DB Transaction committed (rows: ${newDbRows}) & idempotency record saved. Response dropped on network path. Client observes TIMEOUT!`
        );
        return {
          attempts: newAttempts,
          dbRows: newDbRows,
          cachedResponse: cached,
          storedHash: payloadHash,
          logs,
        };
      }

      logs.unshift(
        `[HTTP 200 OK (FRESH EXECUTION)] Key "${idempKey}" recorded in DB transaction. DB mutated (rows: ${newDbRows}). Client received response.`
      );
      return {
        attempts: newAttempts,
        dbRows: newDbRows,
        cachedResponse: cached,
        storedHash: payloadHash,
        logs,
      };
    });
  };

  const resetIdempSim = () => {
    setServerState({
      attempts: 0,
      dbRows: 0,
      cachedResponse: null,
      storedHash: null,
      logs: [],
    });
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 3: OCC VERSION CHECKER VS. PESSIMISTIC LOCKING
  // ---------------------------------------------------------------------------
  const [concurrencyMode, setConcurrencyMode] = useState("occ"); // "occ" | "pessimistic"
  const [recordVersion, setRecordVersion] = useState(1);
  const [interviewRecordStatus, setInterviewRecordStatus] = useState("IN_PROGRESS");
  const [occLogs, setOccLogs] = useState([]);

  const handleSimulateConcurrentWrites = () => {
    const currentVer = recordVersion;
    if (interviewRecordStatus === "COMPLETED") {
      setOccLogs((prev) => [
        `[BLOCKED] Interview already finalized with status COMPLETED. No further mutations permitted.`,
        ...prev,
      ]);
      return;
    }

    if (concurrencyMode === "occ") {
      // Simulate Worker A and Worker B both reading version V
      // Worker A commits first: version becomes V + 1
      // Worker B attempts commit with WHERE version = V -> Affected rows: 0
      setRecordVersion(currentVer + 1);
      setInterviewRecordStatus("COMPLETED");
      setOccLogs((prev) => [
        `[WORKER B CONFLICT] UPDATE interviews SET status='COMPLETED', version=${currentVer + 1} WHERE id=101 AND version=${currentVer}; -> Rows affected: 0. OCC Conflict Detected! Worker B rolls back or retries.`,
        `[WORKER A SUCCESS] UPDATE interviews SET status='COMPLETED', version=${currentVer + 1} WHERE id=101 AND version=${currentVer}; -> Rows affected: 1. Committed version ${currentVer + 1}.`,
        ...prev,
      ]);
    } else {
      // Pessimistic Locking: Worker A acquires lock first. Worker B waits until Worker A completes.
      setRecordVersion(currentVer + 1);
      setInterviewRecordStatus("COMPLETED");
      setOccLogs((prev) => [
        `[WORKER B ACQUIRED LOCK] Lock released by Worker A. Worker B reads fresh record: status='COMPLETED'. Aborts without modifying.`,
        `[WORKER A LOCK] SELECT * FROM interviews WHERE id=101 FOR UPDATE; Row locked. Mutated status to COMPLETED and committed.`,
        ...prev,
      ]);
    }
  };

  const resetOccSim = () => {
    setRecordVersion(1);
    setInterviewRecordStatus("IN_PROGRESS");
    setOccLogs([]);
  };

  // ---------------------------------------------------------------------------
  // PRACTICAL LAB CHECKLIST TRACKER (Phases A through E)
  // ---------------------------------------------------------------------------
  const [projectChecklist, setProjectChecklist] = useState({
    phaseA_occ: true,
    phaseA_conditional: true,
    phaseB_idemp_table: true,
    phaseB_middleware: false,
    phaseC_orchestrator: false,
    phaseC_compensations: false,
    phaseD_outbox_inbox: false,
    phaseE_chaos_tests: false,
    phaseE_metrics: false,
  });

  const toggleChecklist = (key) => {
    setProjectChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // ---------------------------------------------------------------------------
  // ASSESSMENT QUIZ STATE
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the fundamental difference between Two-Phase Commit (2PC) and a Saga?",
      options: [
        "A. 2PC uses JSON while Sagas use Protobuf.",
        "B. 2PC holds locks across all participants until global commit; a Saga commits each local transaction immediately and relies on compensating transactions if later steps fail.",
        "C. Sagas guarantee absolute global database isolation at all times.",
        "D. 2PC cannot be used across relational databases.",
      ],
      correct: 1, // B
      explanation:
        "2PC coordinates an all-or-nothing atomic commit by holding row/table locks across all distributed nodes until the coordinator gives the final commit signal. In contrast, a Saga commits each step locally in independent database engines, sacrificing global isolation while using compensating transactions to undo committed steps if a failure occurs.",
    },
    {
      id: 2,
      question:
        "In an Optimistic Concurrency Control (OCC) design, what happens when two concurrent transactions attempt to update the same row?",
      options: [
        "A. Both transactions silently overwrite each other's data.",
        "B. The database immediately crashes.",
        "C. The first transaction updates the row and increments the version; the second finds no row matching the old version (affected rows = 0) and must abort or retry.",
        "D. The second transaction is placed in an infinite sleep loop.",
      ],
      correct: 2, // C
      explanation:
        "OCC checks the row version during the atomic UPDATE statement: `WHERE id = :id AND version = :version`. The first transaction matches the version, increments it, and returns 1 row affected. The concurrent second transaction still checks for the old version, finds 0 matching rows, and aborts or reloads state.",
    },
    {
      id: 3,
      question: "Why does the Lost-Response problem make client retries unsafe without an idempotency key?",
      options: [
        "A. Because HTTP does not support POST requests.",
        "B. The server may have already committed the operation; retrying without idempotency causes duplicate execution (e.g. double charging or double finalization).",
        "C. The client's IP address changes during every retry.",
        "D. Distributed systems never experience network timeouts.",
      ],
      correct: 1, // B
      explanation:
        "When an HTTP 200 OK response is dropped by a network glitch on the return path, the client observes a timeout error even though the server successfully committed the mutation. A naive retry would cause the server to re-execute the business logic, creating duplicate records or charges.",
    },
    {
      id: 4,
      question: "What is a compensating transaction in a Saga?",
      options: [
        "A. A hardware-level roll back that reverts disk sectors to previous snapshots.",
        "B. An explicit semantic reverse action that undoes the business impact of a previously committed local transaction.",
        "C. A tool that deletes the database WAL files.",
        "D. An automatic retry mechanism for expired idempotency keys.",
      ],
      correct: 1, // B
      explanation:
        "Because Saga transactions commit locally, their changes are already visible to other users. A compensating transaction is an explicit business operation (e.g., refund credit, release reserved seat, cancel booking) designed to neutralize the side effects of an earlier committed step.",
    },
    {
      id: 5,
      question:
        "In an idempotency key design, what should the server do if a request arrives with an existing key but a different payload hash?",
      options: [
        "A. Automatically execute both requests concurrently.",
        "B. Silently overwrite the previous result with the new payload.",
        "C. Reject the request with an error (e.g., HTTP 422 or 409) because the client is attempting to reuse an idempotency key for a different logical operation.",
        "D. Delete the entire idempotency table.",
      ],
      correct: 2, // C
      explanation:
        "An idempotency key represents a single, specific intent. Reusing the exact same key with an altered payload indicates a client programming bug or race condition. Industry standard (e.g. Stripe API) mandates rejecting the request with an HTTP 422 Unprocessable Entity or 409 Conflict.",
    },
    {
      id: 6,
      question:
        "How does the Transactional Inbox pattern guarantee exactly-once processing semantics at the application level?",
      options: [
        "A. By disabling all message retries in Kafka.",
        "B. By checking and inserting the unique message ID in a processed_messages table within the exact same local ACID transaction that applies the business mutation.",
        "C. By running the database in memory without disk persistence.",
        "D. By requiring all microservices to share a single monolithic database.",
      ],
      correct: 1, // B
      explanation:
        "At-least-once message brokers inevitably deliver duplicate messages. The Transactional Inbox pattern binds the deduplication check (`INSERT INTO processed_messages`) and the business state change inside one atomic SQL `BEGIN ... COMMIT` block. If a duplicate message arrives, the unique constraint aborts the transaction cleanly.",
    },
  ];

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) score += 1;
    });
    return score;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Ambient background lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 md:px-8 pt-6">
        {/* Universal Module Navigation Bar */}
        <ModuleNav
          track="system-design"
          currentModuleId="transactions"
          aiTutorLabel="Ask Nova about Sagas & Transactions"
        />

        {/* Hero Section */}
        <div className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-700 mb-2">
                <Workflow size={13} className="text-[#f97316]" />
                <span>System Design Masterclass · Module 13</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">
                Transactions, Distributed Transactions, Sagas &amp; Idempotency
              </h1>
              <p className="mt-2 max-w-3xl text-xs sm:text-sm text-stone-600 leading-relaxed">
                How do we keep data correct when machines, networks, and services fail? Master ACID boundaries,
                concurrency anomalies, Two-Phase Commit (2PC) blocking hazards, Saga orchestration with compensating
                transactions, idempotency keys, and the dual-boundary Outbox + Inbox architecture.
              </p>
            </div>

            {/* Quick Metadata Pill */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-xl bg-[#faf8f4] border border-stone-200 font-bold text-stone-700">
                Duration: 3 Weeks (35–45 hrs)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200 font-bold text-orange-700">
                Core: ACID · 2PC · Sagas · Idempotency · Inbox
              </span>
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Local Atomicity
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">ACID Boundaries</span>
              <span className="text-[11px] text-stone-500">WAL &amp; MVCC Isolation</span>
            </div>
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Distributed Consensus
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">2PC vs. Sagas</span>
              <span className="text-[11px] text-stone-500">Blocking vs. Eventual Rollback</span>
            </div>
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Lost-Response Shield
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">Idempotency Keys</span>
              <span className="text-[11px] text-stone-500">Payload Hash &amp; Safe Retries</span>
            </div>
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Dual-Boundary Model
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">Outbox + Inbox</span>
              <span className="text-[11px] text-stone-500">Exactly-Once App Semantics</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="mb-8 flex items-center gap-1.5 overflow-x-auto rounded-2xl border border-[#e7e3da] bg-white/80 p-1.5 shadow-2xs backdrop-blur-md">
          {[
            { id: "curriculum", label: "Curriculum & Lessons", icon: BookOpen },
            { id: "simulators", label: "Interactive Simulators", icon: Zap },
            { id: "qa", label: "Senior Interview Q&A", icon: HelpCircle },
            { id: "project", label: "Practical Lab Tracker", icon: FolderTree },
            { id: "assessment", label: "Knowledge Check (Quiz)", icon: CheckCircle2 },
            { id: "reading", label: "Research & Reading", icon: ExternalLink },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* =====================================================================
            TAB 1: CURRICULUM & LESSONS (13.1 to 13.13)
        ====================================================================== */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            {/* Week Selector Bar */}
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200 pb-4">
              <div className="flex items-center gap-2">
                {[
                  { week: 1, title: "Week 1: Single-Node ACID, Concurrency & OCC" },
                  { week: 2, title: "Week 2: 2PC vs. Sagas & Compensating Workflows" },
                  { week: 3, title: "Week 3: Idempotency, Inbox & Dual Boundary" },
                ].map((w) => (
                  <button
                    key={w.week}
                    type="button"
                    onClick={() => {
                      setActiveWeek(w.week);
                      if (w.week === 1) setActiveLesson("13.1");
                      if (w.week === 2) setActiveLesson("13.5");
                      if (w.week === 3) setActiveLesson("13.10");
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      activeWeek === w.week
                        ? "bg-stone-900 text-white"
                        : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    {w.title}
                  </button>
                ))}
              </div>
              <span className="text-xs font-mono text-stone-500">
                13 Core Architectural Lessons
              </span>
            </div>

            {/* Lesson Navigation Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
              {activeWeek === 1 &&
                [
                  { id: "13.1", label: "13.1 ACID Limits" },
                  { id: "13.2", label: "13.2 Isolation Anomalies" },
                  { id: "13.3", label: "13.3 Locking vs. OCC" },
                  { id: "13.4", label: "13.4 Conditional Updates" },
                ].map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => setActiveLesson(l.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-bold transition cursor-pointer ${
                      activeLesson === l.id
                        ? "border-[#f97316] bg-orange-50 text-orange-900"
                        : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}

              {activeWeek === 2 &&
                [
                  { id: "13.5", label: "13.5 Local vs. Distributed" },
                  { id: "13.6", label: "13.6 Two-Phase Commit" },
                  { id: "13.7", label: "13.7 Saga Pattern Core" },
                  { id: "13.8", label: "13.8 Orchestration vs Choreography" },
                  { id: "13.9", label: "13.9 Lack of Isolation" },
                ].map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => setActiveLesson(l.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-bold transition cursor-pointer ${
                      activeLesson === l.id
                        ? "border-[#f97316] bg-orange-50 text-orange-900"
                        : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}

              {activeWeek === 3 &&
                [
                  { id: "13.10", label: "13.10 Lost-Response Problem" },
                  { id: "13.11", label: "13.11 Idempotency Keys" },
                  { id: "13.12", label: "13.12 Transactional Inbox" },
                  { id: "13.13", label: "13.13 Dual Boundary Pattern" },
                ].map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => setActiveLesson(l.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-bold transition cursor-pointer ${
                      activeLesson === l.id
                        ? "border-[#f97316] bg-orange-50 text-orange-900"
                        : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
            </div>

            {/* ACTIVE LESSON VIEWPORT */}
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
              {/* LESSON 13.1 */}
              {activeLesson === "13.1" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 13.1 · Foundational Theory
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Why Transactions Matter &amp; The Limits of Single-Database ACID
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Imagine a candidate completes an interview on PrepSpaces. Several operations must occur:
                    record the final status as <code>COMPLETED</code>, persist the AI score (e.g. 94), deduct an
                    assessment credit from their organization, generate a detailed feedback report, and dispatch an
                    email confirmation to their hiring manager.
                  </p>

                  <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed">
                    <div className="flex items-center gap-2 font-bold mb-1 text-amber-900">
                      <AlertTriangle size={15} />
                      <span>The Fundamental Boundary Problem</span>
                    </div>
                    If all data lived inside a single PostgreSQL table on one server, wrapping everything in a classic
                    <code>BEGIN ... COMMIT</code> transaction guarantees ACID properties. But in a modern system:
                    <ul className="list-disc list-inside mt-2 space-y-1 font-mono text-xs">
                      <li>The assessment credit resides in Stripe or an isolated Billing Service database.</li>
                      <li>The AI feedback report generation runs on an asynchronous GPU cluster.</li>
                      <li>The notification requires communicating with external email providers (e.g. SendGrid).</li>
                    </ul>
                    A single database transaction <strong>cannot span external networks, third-party APIs, or multiple database engines</strong>.
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <h4 className="font-bold text-xs text-stone-900 mb-2">What Single-Node ACID Guarantees</h4>
                      <ul className="text-xs text-stone-600 space-y-1.5">
                        <li><strong>Atomicity:</strong> All mutations or none commit via the Write-Ahead Log (WAL).</li>
                        <li><strong>Consistency:</strong> Schema constraints, unique keys, and foreign keys hold true.</li>
                        <li><strong>Isolation:</strong> Concurrent transactions run as if executed serially (per isolation level).</li>
                        <li><strong>Durability:</strong> Once committed, changes survive server reboots and crashes.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-red-200 bg-red-50/60">
                      <h4 className="font-bold text-xs text-red-900 mb-2">Where Single-Node ACID Breaks</h4>
                      <ul className="text-xs text-red-700 space-y-1.5">
                        <li>External HTTP calls cannot be rolled back by an SQL <code>ROLLBACK</code>.</li>
                        <li>Microservices hold independent connection pools and databases.</li>
                        <li>Long-running background tasks (e.g. 30-sec PDF generation) exhaust DB connection pools if held inside locks.</li>
                        <li>Network partitions between services make synchronous 2-phase locks fatal.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 13.2 */}
              {activeLesson === "13.2" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 13.2 · Database Isolation
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Transaction Isolation Levels &amp; Concurrency Anomalies
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    When hundreds of candidates complete interviews concurrently, multiple transactions read and mutate
                    the same records simultaneously. SQL standards define four classic isolation levels, each trading
                    performance against susceptibility to concurrency anomalies.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden font-mono">
                      <thead className="bg-stone-100 text-stone-700 uppercase font-bold text-[10px]">
                        <tr>
                          <th className="p-3 border-b">Isolation Level</th>
                          <th className="p-3 border-b">Dirty Read</th>
                          <th className="p-3 border-b">Non-Repeatable Read</th>
                          <th className="p-3 border-b">Phantom Read</th>
                          <th className="p-3 border-b">Serialization Anomaly</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-stone-800">
                        <tr className="bg-white">
                          <td className="p-3 font-bold text-stone-900">Read Uncommitted</td>
                          <td className="p-3 text-red-600 font-bold">Allowed</td>
                          <td className="p-3 text-red-600 font-bold">Allowed</td>
                          <td className="p-3 text-red-600 font-bold">Allowed</td>
                          <td className="p-3 text-red-600 font-bold">Allowed</td>
                        </tr>
                        <tr className="bg-stone-50/50">
                          <td className="p-3 font-bold text-stone-900">Read Committed (PG Default)</td>
                          <td className="p-3 text-emerald-600 font-bold">Prevented</td>
                          <td className="p-3 text-red-600 font-bold">Allowed</td>
                          <td className="p-3 text-red-600 font-bold">Allowed</td>
                          <td className="p-3 text-red-600 font-bold">Allowed</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 font-bold text-stone-900">Repeatable Read</td>
                          <td className="p-3 text-emerald-600 font-bold">Prevented</td>
                          <td className="p-3 text-emerald-600 font-bold">Prevented</td>
                          <td className="p-3 text-emerald-600 font-bold">Prevented (in PG MVCC)</td>
                          <td className="p-3 text-red-600 font-bold">Allowed (Write Skew)</td>
                        </tr>
                        <tr className="bg-emerald-50/60">
                          <td className="p-3 font-bold text-emerald-950">Serializable (SSI)</td>
                          <td className="p-3 text-emerald-600 font-bold">Prevented</td>
                          <td className="p-3 text-emerald-600 font-bold">Prevented</td>
                          <td className="p-3 text-emerald-600 font-bold">Prevented</td>
                          <td className="p-3 text-emerald-600 font-bold">Prevented</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h3 className="font-bold text-sm text-stone-900">Key Concurrency Anomalies Explained:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                        <span className="font-bold text-stone-900 block mb-1">Dirty Read:</span>
                        Transaction A modifies score to 98 but has not committed. Transaction B reads 98. Transaction A rolls back. Transaction B acted on data that never existed.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                        <span className="font-bold text-stone-900 block mb-1">Non-Repeatable Read:</span>
                        Transaction A reads interview status as <code>IN_PROGRESS</code>. Transaction B commits status <code>COMPLETED</code>. Transaction A reads again and sees <code>COMPLETED</code>.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                        <span className="font-bold text-stone-900 block mb-1">Phantom Read:</span>
                        Transaction A counts 3 active interviews for user X. Transaction B inserts a 4th interview. Transaction A repeats the query and receives 4 records.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                        <span className="font-bold text-stone-900 block mb-1">Write Skew:</span>
                        Two concurrent transactions enforce an invariant (e.g. at least one proctor on duty). Both check simultaneously, see 2 proctors, and both check out, leaving 0 on duty.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 13.3 */}
              {activeLesson === "13.3" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 13.3 · Concurrency Control
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Pessimistic Locking (`SELECT FOR UPDATE`) vs. Optimistic Concurrency Control (OCC)
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    When preventing concurrent writes to the same interview or user account, engineers choose between
                    two distinct operational philosophies: locking upfront (pessimistic) or detecting collisions at commit time (optimistic).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] space-y-3">
                      <div className="flex items-center gap-2">
                        <Lock size={16} className="text-orange-600" />
                        <h4 className="font-bold text-sm text-stone-900">Pessimistic Locking</h4>
                      </div>
                      <p className="text-xs text-stone-600">
                        Assumes conflicts will happen frequently. Locks the row immediately upon reading, preventing any
                        other transaction from reading for update or modifying it until commit.
                      </p>
                      <pre className="p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-[11px] overflow-x-auto">
{`-- Transaction 1
BEGIN;
SELECT * FROM interviews 
WHERE id = 101 
FOR UPDATE; -- Holds exclusive row lock

-- External work or processing...
UPDATE interviews 
SET status = 'COMPLETED' 
WHERE id = 101;
COMMIT; -- Releases lock`}
                      </pre>
                      <div className="text-[11px] text-amber-800 font-bold bg-amber-50 p-2 rounded-lg border border-amber-200">
                        Tradeoff: Heavy lock contention, reduced throughput, risks of deadlocks when acquiring multiple rows.
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] space-y-3">
                      <div className="flex items-center gap-2">
                        <Zap size={16} className="text-emerald-600" />
                        <h4 className="font-bold text-sm text-stone-900">Optimistic Concurrency Control (OCC)</h4>
                      </div>
                      <p className="text-xs text-stone-600">
                        Assumes conflicts are rare. Reads without locking. Relies on an integer <code>version</code> or timestamp
                        column to verify the record has not changed prior to committing.
                      </p>
                      <pre className="p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-[11px] overflow-x-auto">
{`-- Step 1: Read without locking
SELECT id, status, version 
FROM interviews WHERE id = 101;
-- Returns: version = 3

-- Step 2: Atomic update with version guard
UPDATE interviews 
SET status = 'COMPLETED', version = 4
WHERE id = 101 AND version = 3;

-- If rows_affected === 0:
-- Abort or reload fresh record and retry!`}
                      </pre>
                      <div className="text-[11px] text-emerald-800 font-bold bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                        Tradeoff: High throughput and zero lock blocking; however, high write contention causes frequent retries.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 13.4 */}
              {activeLesson === "13.4" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 13.4 · State Transitions
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Atomic State Transitions via Conditional Updates
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Often, a full OCC version counter is unnecessary if the business entity follows a strict, one-way
                    finite state machine (e.g. <code>SCHEDULED</code> &rarr; <code>IN_PROGRESS</code> &rarr; <code>COMPLETED</code>).
                    We can enforce atomic state transitions directly using conditional SQL updates.
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2">
                    <div className="text-stone-400">// Atomic State Transition Pattern:</div>
                    <div className="text-orange-400">
                      UPDATE interviews<br />
                      &nbsp;&nbsp;SET status = 'COMPLETED', score = 94, completed_at = NOW()<br />
                      &nbsp;&nbsp;WHERE id = $1 AND status = 'IN_PROGRESS';
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2 text-xs text-stone-700">
                    <h4 className="font-bold text-stone-900">Why this is atomic and safe:</h4>
                    <p>
                      In PostgreSQL and MySQL, the database engine obtains an exclusive row lock for the duration of the
                      single <code>UPDATE</code> statement. It evaluates the <code>WHERE status = 'IN_PROGRESS'</code> predicate
                      against the committed row state.
                    </p>
                    <p>
                      If two worker processes attempt to complete the same interview simultaneously, the first worker executes,
                      changes the status to <code>COMPLETED</code>, and returns <code>affected_rows = 1</code>.
                      The second worker evaluates the predicate, sees the status is now <code>COMPLETED</code>, and returns
                      <code>affected_rows = 0</code>. No dirty reads, no race condition, and no explicit distributed lock manager needed!
                    </p>
                  </div>
                </div>
              )}

              {/* LESSON 13.5 */}
              {activeLesson === "13.5" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 13.5 · Distributed Boundaries
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Local Transactions vs. Distributed Transactions
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    A local transaction operates against a single storage engine. Its atomicity relies on local memory and
                    a Write-Ahead Log (WAL) on disk. When microservices split databases into bounded contexts, an operation
                    spanning services becomes a distributed transaction.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <h4 className="font-bold text-xs text-stone-900 mb-2">Local Transaction Properties</h4>
                      <ul className="text-xs text-stone-600 space-y-1.5">
                        <li>Sub-millisecond commit latency (single disk fsync).</li>
                        <li>Deterministic rollback: WAL records can be cleanly unapplied.</li>
                        <li>Hardware failure on one machine stops only that node.</li>
                        <li>High isolation guarantees (Read Committed, Repeatable Read, SSI).</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/60">
                      <h4 className="font-bold text-xs text-amber-900 mb-2">Distributed Transaction Realities</h4>
                      <ul className="text-xs text-amber-800 space-y-1.5">
                        <li>Latency multiplies by number of network roundtrips between nodes.</li>
                        <li>Network partitions can leave nodes unaware of whether peers committed.</li>
                        <li>Locks held across network calls cripple system availability and throughput.</li>
                        <li>Requires specialized coordination: Two-Phase Commit (2PC) or Sagas.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 13.6 */}
              {activeLesson === "13.6" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 13.6 · Two-Phase Commit
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      The Two-Phase Commit (2PC) Protocol &amp; The Coordinator Crash Dilemma
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Two-Phase Commit (2PC) is a distributed consensus algorithm designed to achieve atomic commit
                    across multiple participating databases. It separates execution into two explicit phases:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <h4 className="font-bold text-xs text-stone-900 mb-1">Phase 1: Prepare Phase</h4>
                      <p className="text-xs text-stone-600 mb-2">
                        The coordinator asks each participant: "Can you commit this transaction?".
                      </p>
                      <ul className="text-xs text-stone-600 list-disc list-inside space-y-1">
                        <li>Participants acquire local row locks.</li>
                        <li>Write intention and undo/redo data to local WAL.</li>
                        <li>Reply <strong>YES</strong> (guaranteeing ability to commit) or <strong>NO</strong>.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <h4 className="font-bold text-xs text-stone-900 mb-1">Phase 2: Commit / Abort Phase</h4>
                      <p className="text-xs text-stone-600 mb-2">
                        The coordinator evaluates votes:
                      </p>
                      <ul className="text-xs text-stone-600 list-disc list-inside space-y-1">
                        <li>If <strong>ALL</strong> voted YES: Coordinator logs COMMIT to WAL and broadcasts COMMIT.</li>
                        <li>If <strong>ANY</strong> voted NO or timed out: Coordinator broadcasts ABORT.</li>
                        <li>Participants finalize and release local locks.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Interactive Diagram Embed */}
                  <div className="mt-4">
                    <TwoPhaseCommitDiagram />
                  </div>

                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 text-xs sm:text-sm leading-relaxed">
                    <div className="flex items-center gap-2 font-bold mb-1">
                      <ShieldAlert size={16} />
                      <span>The Fatal Flaw: The 2PC Coordinator Crash Blocking Dilemma</span>
                    </div>
                    If a participant votes YES in Phase 1, it enters a <strong>PREPARED</strong> state and holds row locks.
                    If the coordinator crashes <em>after</em> collecting YES votes but <em>before</em> broadcasting the decision,
                    participants are completely blocked! A participant cannot unilaterally abort (the coordinator might have committed),
                    nor can it unilaterally commit (another node might have voted NO). Locks remain held indefinitely until the coordinator recovers.
                    This is why 2PC is rarely used across microservices.
                  </div>
                </div>
              )}

              {/* LESSON 13.7 */}
              {activeLesson === "13.7" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 13.7 · The Saga Pattern
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      The Saga Pattern: Sequence of Local Commits &amp; Compensating Transactions
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    First introduced in 1987 by Hector Garcia-Molina and Kenneth Salem, a <strong>Saga</strong> decomposes a
                    distributed business operation into a sequence of local transactions: \(T_1, T_2, \dots, T_n\).
                    Each step commits its changes locally to its own database immediately.
                  </p>

                  <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2 text-xs text-stone-700">
                    <h4 className="font-bold text-stone-900">How Rollback Works in a Saga:</h4>
                    <p>
                      Because each step commits immediately, an SQL <code>ROLLBACK</code> cannot be used if step \(T_k\) fails.
                      Instead, each forward transaction \(T_i\) has an associated <strong>compensating transaction</strong> \(C_i\)
                      that semantically undoes its effects:
                    </p>
                    <div className="p-3 rounded-lg bg-stone-900 text-stone-100 font-mono text-center">
                      {"Forward: T1 → T2 → T3 (Fails!) | Compensation: C2 → C1"}
                    </div>
                  </div>

                  {/* Interactive Diagram Embed */}
                  <div className="mt-4">
                    <SagaWorkflowDiagram />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-xl border border-stone-200 bg-white">
                      <span className="font-bold text-stone-900 block mb-1">Compensable Transactions</span>
                      Steps that precede the pivot step. Must have defined compensating actions (e.g. unreserve slot, release hold).
                    </div>
                    <div className="p-3 rounded-xl border border-orange-200 bg-orange-50">
                      <span className="font-bold text-orange-950 block mb-1">Pivot Transaction</span>
                      The point of no return. Once the pivot transaction commits, the Saga cannot be rolled back; it must proceed forward.
                    </div>
                    <div className="p-3 rounded-xl border border-emerald-200 bg-emerald-50">
                      <span className="font-bold text-emerald-950 block mb-1">Retriable Transactions</span>
                      Steps occurring after the pivot. They must be idempotent and are guaranteed to eventually succeed with retries.
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 13.8 */}
              {activeLesson === "13.8" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 13.8 · Coordination Topologies
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Saga Coordination: Choreography (Event-Driven) vs. Orchestration (Central Coordinator)
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Sagas can be coordinated in two architectural ways: decentralized events (Choreography) or
                    a centralized state machine (Orchestration).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] space-y-3">
                      <div className="flex items-center gap-2">
                        <Radio size={16} className="text-orange-600" />
                        <h4 className="font-bold text-sm text-stone-900">Choreography (Event-Driven)</h4>
                      </div>
                      <p className="text-xs text-stone-600">
                        No central manager. Each service listens for events from other services, executes its local
                        transaction, and publishes a new event. If a failure occurs, services listen for failure events
                        and trigger their own compensations.
                      </p>
                      <div className="p-2.5 rounded-lg bg-white border border-stone-200 text-[11px] text-stone-700">
                        <strong>Pros:</strong> Simple for small workflows (2–3 steps); loose coupling.<br />
                        <strong>Cons:</strong> Difficult to track global state; high cognitive load; risk of circular event dependencies; hard to debug.
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] space-y-3">
                      <div className="flex items-center gap-2">
                        <Workflow size={16} className="text-emerald-600" />
                        <h4 className="font-bold text-sm text-stone-900">Orchestration (State Machine)</h4>
                      </div>
                      <p className="text-xs text-stone-600">
                        A dedicated orchestrator service (e.g. Temporal, AWS Step Functions, or custom engine)
                        maintains the Saga state machine in a persistent database. It commands participants to execute
                        steps and commands compensations if an error occurs.
                      </p>
                      <div className="p-2.5 rounded-lg bg-white border border-stone-200 text-[11px] text-stone-700">
                        <strong>Pros:</strong> Clear central audit trail; easy visualization of workflow state; handles complex branching and timeouts cleanly.<br />
                        <strong>Cons:</strong> Additional service dependency; risk of concentrating too much business logic in the orchestrator.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 13.9 */}
              {activeLesson === "13.9" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 13.9 · Consistency Anomalies
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Intermediate States &amp; The Lack of Global Isolation in Sagas
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    The fundamental architectural tradeoff of the Saga pattern is: <strong>Sagas sacrifice Isolation (the 'I' in ACID)</strong>.
                    Because each step commits immediately to its local database, other concurrent users and queries can observe intermediate states.
                  </p>

                  <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed space-y-2">
                    <h4 className="font-bold text-amber-900">Classic Saga Isolation Anomalies:</h4>
                    <ul className="list-disc list-inside space-y-1 font-mono text-xs">
                      <li><strong>Dirty Read:</strong> A candidate sees an interview marked "BOOKED" before payment has completed. If payment fails, the slot disappears.</li>
                      <li><strong>Lost Update:</strong> Step A reads credit balance 100 and updates to 90. Concurrent workflow B reads 100 and updates to 80, overwriting A.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-2 text-xs text-stone-700">
                    <h4 className="font-bold text-stone-900">How Production Systems Counteract Lack of Isolation:</h4>
                    <p>
                      <strong>1. Semantic State Flags:</strong> Never mark a record as <code>CONFIRMED</code> or <code>COMPLETED</code> in step 1. Use <code>PENDING_PAYMENT</code>, <code>HOLD</code>, or <code>RESERVED</code>.
                    </p>
                    <p>
                      <strong>2. Commutative Updates:</strong> Design operations to be order-independent when possible (e.g. delta increments rather than absolute sets).
                    </p>
                    <p>
                      <strong>3. Pessimistic View Filtering:</strong> Ensure customer-facing queries filter out intermediate states (e.g. <code>WHERE status = 'ACTIVE'</code>).
                    </p>
                  </div>
                </div>
              )}

              {/* LESSON 13.10 */}
              {activeLesson === "13.10" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 13.10 · Network Realities
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      The Lost-Response Problem: Network Timeouts vs. Execution State
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    In distributed systems, a network call has three possible outcomes, not two: <strong>Success</strong>,
                    <strong>Definite Failure</strong>, and <strong>Unknown (Timeout)</strong>.
                  </p>

                  <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-3">
                    <h4 className="font-bold text-xs text-stone-900">The Scenario:</h4>
                    <div className="p-3 rounded-lg bg-stone-900 text-stone-100 font-mono text-xs space-y-1">
                      <div>1. Client sends: POST /api/v1/interviews/101/complete</div>
                      <div>2. Server executes DB update: status = 'COMPLETED', score = 94 (COMMITTED)</div>
                      <div className="text-red-400">3. Network router fails: HTTP 200 OK dropped on return path!</div>
                      <div className="text-amber-300">4. Client HTTP client throws: "ETIMEDOUT after 5000ms"</div>
                    </div>
                    <p className="text-xs text-stone-600">
                      The client has no idea whether: (a) The request never reached the server, (b) The server crashed before executing,
                      or (c) The server executed perfectly and only the acknowledgement was lost.
                    </p>
                  </div>

                  {/* Interactive Diagram Embed */}
                  <div className="mt-4">
                    <IdempotencyKeyLifecycleDiagram />
                  </div>
                </div>
              )}

              {/* LESSON 13.11 */}
              {activeLesson === "13.11" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 13.11 · Robust API Design
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Designing Idempotent APIs with Idempotency Keys
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    An operation is <strong>idempotent</strong> if executing it multiple times produces the exact same side effects
                    as executing it once: \(f(f(x)) = f(x)\). HTTP <code>GET</code>, <code>PUT</code>, and <code>DELETE</code> are
                    naturally idempotent by specification; HTTP <code>POST</code> is not.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-bold text-xs text-stone-900">Industry-Standard Idempotency Key Architecture (e.g. Stripe):</h4>
                    <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2">
                      <div className="text-stone-400">// PostgreSQL Idempotency Records Table</div>
                      <div className="text-orange-300">
                        CREATE TABLE idempotency_records (<br />
                        &nbsp;&nbsp;idempotency_key VARCHAR(255) PRIMARY KEY,<br />
                        &nbsp;&nbsp;user_id VARCHAR(64) NOT NULL,<br />
                        &nbsp;&nbsp;payload_hash VARCHAR(64) NOT NULL,<br />
                        &nbsp;&nbsp;status VARCHAR(32) NOT NULL, -- PENDING, COMPLETED<br />
                        &nbsp;&nbsp;response_status INT,<br />
                        &nbsp;&nbsp;response_body JSONB,<br />
                        &nbsp;&nbsp;created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),<br />
                        &nbsp;&nbsp;expires_at TIMESTAMP WITH TIME ZONE NOT NULL<br />
                        );
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
                      <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                        <span className="font-bold text-stone-900 block mb-1">1. First Request</span>
                        Inserts record with <code>status = 'PENDING'</code> and <code>payload_hash</code>. Executes business logic.
                        Updates record to <code>status = 'COMPLETED'</code> with serialized response body.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                        <span className="font-bold text-stone-900 block mb-1">2. Retry with Same Key</span>
                        Middleware intercepts key. Sees <code>status = 'COMPLETED'</code>. Immediately returns stored <code>response_body</code>
                        without touching business logic or mutating the database.
                      </div>
                      <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                        <span className="font-bold text-stone-900 block mb-1">3. Payload Hash Guard</span>
                        If incoming payload hash does not match stored hash, the client is reusing a key with altered parameters.
                        Immediately reject with <code>HTTP 422 Unprocessable Entity</code>.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 13.12 */}
              {activeLesson === "13.12" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 13.12 · Consumer Deduplication
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      Idempotent Consumers &amp; The Transactional Inbox Pattern
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    Message brokers like Apache Kafka, RabbitMQ, and AWS SQS provide <strong>at-least-once delivery</strong>.
                    If a worker finishes its task but crashes before sending an acknowledgement (ACK), the broker redelivers
                    the message to another worker. Without deduplication, duplicate business actions occur.
                  </p>

                  <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] space-y-3">
                    <h4 className="font-bold text-xs text-stone-900">The Transactional Inbox Pattern:</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      To achieve exactly-once processing semantics at the application layer, the consumer wraps the message deduplication
                      check and the business mutation in the <strong>exact same local database transaction</strong>:
                    </p>
                    <pre className="p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-[11px] overflow-x-auto">
{`BEGIN;

-- 1. Try to record message in the consumer inbox
INSERT INTO processed_messages (message_id, consumer_name, processed_at)
VALUES ($1, 'report-worker', NOW());

-- 2. Execute business mutation
INSERT INTO candidate_reports (interview_id, score, summary)
VALUES ($2, $3, $4);

COMMIT;
-- 3. Acknowledge message to Kafka broker only AFTER commit succeeds!`}
                    </pre>
                    <div className="text-[11px] text-stone-700 bg-white p-2.5 rounded-lg border border-stone-200">
                      <strong>What happens during a redelivery?</strong> If Kafka redelivers message <code>$1</code>, the
                      <code>INSERT INTO processed_messages</code> violates the primary key unique constraint. The transaction aborts
                      cleanly, leaving business data untouched, and the worker ACKs the message to stop redelivery.
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 13.13 */}
              {activeLesson === "13.13" && (
                <div className="space-y-5">
                  <div className="border-b border-stone-200 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                      Lesson 13.13 · End-to-End Reliability
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                      The Dual-Boundary Pattern: Transactional Outbox + Transactional Inbox
                    </h2>
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    By combining the <strong>Transactional Outbox</strong> on the producer side with the
                    <strong>Transactional Inbox</strong> on the consumer side, we achieve unbreakable, resilient
                    event delivery across distributed microservices.
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
                    <div className="text-orange-400 font-bold">// Complete Dual-Boundary Workflow</div>
                    <div className="space-y-1.5 text-stone-300">
                      <div>1. [Interview API]: Atomically commits interview status + Outbox Event in PostgreSQL.</div>
                      <div>2. [Debezium CDC]: Captures Outbox WAL insertion and publishes event to Kafka topic.</div>
                      <div>3. [Kafka Broker]: Stores partitioned event with at-least-once durability guarantee.</div>
                      <div>4. [Report Worker]: Reads event, checks Transactional Inbox table, generates report.</div>
                      <div>5. [Notification Worker]: Reads event, deduplicates via Inbox, dispatches email.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/70 text-emerald-950 text-xs sm:text-sm">
                    <div className="font-bold flex items-center gap-1.5 mb-1 text-emerald-900">
                      <ShieldCheck size={16} />
                      <span>Why this pattern dominates modern enterprise microservices:</span>
                    </div>
                    Neither side relies on distributed 2-phase locks. If the broker is down, the outbox safely buffers messages on disk.
                    If the consumer crashes midway, the broker redelivers and the inbox deduplicates. The architecture provides
                    provable correctness under arbitrary network partitions and process crashes.
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 2: INTERACTIVE SIMULATORS (3 SIMULATORS)
        ====================================================================== */}
        {activeTab === "simulators" && (
          <div className="space-y-8">
            {/* SIMULATOR 1: SAGA ORCHESTRATOR */}
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                    Interactive Simulator 1
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-stone-900">
                    Saga Orchestrator &amp; Backward Compensation Runner
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Execute a 4-step interview booking saga. Inject a failure at Step 2, 3, or 4 and watch the orchestrator trigger compensating transactions in reverse order.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={resetSagaSim}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 text-xs font-bold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                  >
                    <RotateCcw size={13} />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Failure Injection Point:</label>
                  <select
                    value={sagaFailAt}
                    onChange={(e) => setSagaFailAt(e.target.value)}
                    className="w-full p-2 text-xs rounded-xl border border-stone-200 bg-stone-50 font-mono text-stone-800"
                  >
                    <option value="none">No Failure (Happy Path - 4 Steps)</option>
                    <option value="step2">Fail at Step 2 (GPU Compute Node)</option>
                    <option value="step3">Fail at Step 3 (Billing Assessment Credit)</option>
                    <option value="step4">Fail at Step 4 (Notification Email)</option>
                  </select>
                </div>

                <div className="flex items-end gap-2 sm:col-span-2">
                  <button
                    type="button"
                    onClick={executeSagaStep}
                    disabled={sagaStatus === "RUNNING"}
                    className="flex-1 py-2 px-3 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition cursor-pointer disabled:opacity-50"
                  >
                    {sagaStatus === "SUCCESS" || sagaStatus === "FAILED_COMPENSATED"
                      ? "Reset & Run Again"
                      : `Execute Step ${sagaCurrentStep + 1}`}
                  </button>
                  <button
                    type="button"
                    onClick={runFullSaga}
                    disabled={sagaStatus === "RUNNING"}
                    className="flex-1 py-2 px-3 rounded-xl bg-[#f97316] text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer disabled:opacity-50"
                  >
                    Auto-Run Full Saga
                  </button>
                </div>
              </div>

              {/* Saga Steps Visualizer */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {sagaStepsState.map((step) => {
                  let badgeBg = "bg-stone-100 text-stone-600 border-stone-200";
                  if (step.status === "COMMITTED") badgeBg = "bg-emerald-50 text-emerald-800 border-emerald-300";
                  if (step.status === "FAILED") badgeBg = "bg-red-50 text-red-800 border-red-300";
                  if (step.status === "COMPENSATED") badgeBg = "bg-amber-50 text-amber-800 border-amber-300";

                  return (
                    <div
                      key={step.id}
                      className={`p-3.5 rounded-2xl border transition-all ${
                        sagaCurrentStep === step.id ? "ring-2 ring-orange-500 shadow-xs" : "border-stone-200 bg-[#faf8f4]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold text-stone-500">Step {step.id}</span>
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${badgeBg}`}>
                          {step.status}
                        </span>
                      </div>
                      <h4 className="font-bold text-xs text-stone-900">{step.name}</h4>
                      <span className="text-[11px] text-stone-500 block mt-0.5">{step.service}</span>
                      <div className="mt-3 pt-2 border-t border-stone-200/60 text-[10px] text-stone-500">
                        Compensator: <strong>{step.comp}</strong>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Console Logs */}
              <div className="rounded-2xl border border-stone-200 bg-stone-900 p-4 font-mono text-xs text-stone-100">
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-stone-800">
                  <span className="text-stone-400 font-bold text-[11px]">Saga Orchestrator Audit Log</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-stone-800 text-orange-400 font-bold">
                    State: {sagaStatus}
                  </span>
                </div>
                <div className="space-y-1.5 max-h-40 overflow-y-auto">
                  {sagaLogs.length === 0 ? (
                    <span className="text-stone-500">Ready to execute. Click &quot;Execute Step 1&quot; or &quot;Auto-Run Full Saga&quot;.</span>
                  ) : (
                    sagaLogs.map((log, i) => (
                      <div
                        key={i}
                        className={`${
                          log.includes("[CRITICAL]")
                            ? "text-red-400 font-bold"
                            : log.includes("[SUCCESS]")
                            ? "text-emerald-400"
                            : log.includes("[COMPENSAT")
                            ? "text-amber-400"
                            : "text-stone-300"
                        }`}
                      >
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* SIMULATOR 2: IDEMPOTENCY KEY & LOST-RESPONSE REPLAYER */}
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                    Interactive Simulator 2
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-stone-900">
                    Idempotency Key &amp; Lost-Response Replay Simulator
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Test client retry behavior when an HTTP 200 is dropped on the return path. Observe how the idempotency middleware returns cached JSON without duplicate DB mutations.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetIdempSim}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 text-xs font-bold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                >
                  <RotateCcw size={13} />
                  <span>Reset</span>
                </button>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Idempotency-Key Header:</label>
                  <input
                    type="text"
                    value={idempKey}
                    onChange={(e) => setIdempKey(e.target.value)}
                    className="w-full p-2 text-xs rounded-xl border border-stone-200 bg-stone-50 font-mono text-stone-800"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Payload Score:</label>
                  <input
                    type="number"
                    value={candidateScore}
                    onChange={(e) => setCandidateScore(Number(e.target.value))}
                    className="w-full p-2 text-xs rounded-xl border border-stone-200 bg-stone-50 font-mono text-stone-800"
                  />
                </div>
                <div className="flex items-center gap-2 pt-6">
                  <input
                    type="checkbox"
                    id="lostAckCheck"
                    checked={simulateLostAck}
                    onChange={(e) => setSimulateLostAck(e.target.checked)}
                    className="rounded text-orange-600 focus:ring-orange-500 cursor-pointer"
                  />
                  <label htmlFor="lostAckCheck" className="text-xs font-bold text-stone-700 cursor-pointer">
                    Simulate Lost Response on Attempt 1
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  type="button"
                  onClick={() => handleSendIdempotentRequest(false)}
                  className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition cursor-pointer"
                >
                  Send POST /interviews/complete (Retry)
                </button>
                <button
                  type="button"
                  onClick={() => handleSendIdempotentRequest(true)}
                  className="px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition cursor-pointer"
                >
                  Simulate Payload Tamper (Hash Collision Check)
                </button>
              </div>

              {/* State Comparison Card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Client Requests Sent</span>
                  <span className="text-xl font-extrabold text-stone-900 mt-1 block">{serverState.attempts}</span>
                  <span className="text-[11px] text-stone-500">Total client HTTP attempts</span>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">DB Records Created</span>
                  <span className="text-xl font-extrabold text-stone-900 mt-1 block">{serverState.dbRows}</span>
                  <span className="text-[11px] text-emerald-600 font-bold">
                    {serverState.dbRows <= 1 ? "Zero duplicate records!" : "Duplicate detected!"}
                  </span>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Active Payload Hash</span>
                  <span className="text-xs font-mono font-bold text-stone-800 mt-1 block truncate">
                    {currentPayloadHash}
                  </span>
                  <span className="text-[11px] text-stone-500">SHA-256 payload fingerprint</span>
                </div>
              </div>

              {/* Logs */}
              <div className="rounded-2xl border border-stone-200 bg-stone-900 p-4 font-mono text-xs text-stone-100">
                <div className="font-bold text-[11px] text-stone-400 mb-2 pb-2 border-b border-stone-800">
                  Idempotency Middleware Traffic Stream
                </div>
                <div className="space-y-1.5 max-h-36 overflow-y-auto">
                  {serverState.logs.length === 0 ? (
                    <span className="text-stone-500">No requests sent yet. Click &quot;Send POST&quot; to test.</span>
                  ) : (
                    serverState.logs.map((log, i) => (
                      <div
                        key={i}
                        className={`${
                          log.includes("[HTTP 422")
                            ? "text-red-400 font-bold"
                            : log.includes("[HTTP 200 OK (CACHED")
                            ? "text-emerald-400 font-bold"
                            : log.includes("[NETWORK DROP")
                            ? "text-amber-400"
                            : "text-stone-300"
                        }`}
                      >
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* SIMULATOR 3: OCC VERSION CHECKER */}
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                    Interactive Simulator 3
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-stone-900">
                    Concurrency Guard: OCC Version Check vs. Pessimistic Locking
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Simulate Worker A and Worker B attempting to finalize the same interview simultaneously.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetOccSim}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 text-xs font-bold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                >
                  <RotateCcw size={13} />
                  <span>Reset</span>
                </button>
              </div>

              {/* Mode Selection */}
              <div className="flex items-center gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setConcurrencyMode("occ")}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    concurrencyMode === "occ"
                      ? "bg-orange-600 text-white"
                      : "bg-[#faf8f4] border border-stone-200 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  Optimistic Concurrency Control (OCC)
                </button>
                <button
                  type="button"
                  onClick={() => setConcurrencyMode("pessimistic")}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    concurrencyMode === "pessimistic"
                      ? "bg-stone-900 text-white"
                      : "bg-[#faf8f4] border border-stone-200 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  Pessimistic Locking (SELECT FOR UPDATE)
                </button>
              </div>

              {/* Record State Display */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Interview ID</span>
                  <span className="text-lg font-bold text-stone-900 mt-1 block">interview_101</span>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Status</span>
                  <span className="text-lg font-bold text-stone-900 mt-1 block font-mono">
                    {interviewRecordStatus}
                  </span>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Current Version</span>
                  <span className="text-lg font-bold text-orange-600 mt-1 block font-mono">
                    version = {recordVersion}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <button
                  type="button"
                  onClick={handleSimulateConcurrentWrites}
                  className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition cursor-pointer"
                >
                  Fire Concurrent Finalize Requests (Worker A &amp; Worker B)
                </button>
              </div>

              {/* OCC Logs */}
              <div className="rounded-2xl border border-stone-200 bg-stone-900 p-4 font-mono text-xs text-stone-100">
                <div className="font-bold text-[11px] text-stone-400 mb-2 pb-2 border-b border-stone-800">
                  Database Lock &amp; Mutation Execution Log
                </div>
                <div className="space-y-1.5 max-h-36 overflow-y-auto">
                  {occLogs.length === 0 ? (
                    <span className="text-stone-500">Ready to simulate. Click button above.</span>
                  ) : (
                    occLogs.map((log, i) => (
                      <div
                        key={i}
                        className={`${
                          log.includes("[WORKER B CONFLICT]")
                            ? "text-red-400 font-bold"
                            : log.includes("[WORKER A")
                            ? "text-emerald-400"
                            : "text-stone-300"
                        }`}
                      >
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 3: SENIOR INTERVIEW Q&A (6 SCENARIOS)
        ====================================================================== */}
        {activeTab === "qa" && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-4 mb-4">
              <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                Senior Staff &amp; Principal Questions
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                Distributed Transactions, Sagas &amp; Idempotency Interview Scenarios
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Real-world architectural trade-offs asked at Google, Meta, Stripe, and AWS system design interviews.
              </p>
            </div>

            {[
              {
                id: "qa-1",
                q: "Why can't we just use a distributed Two-Phase Commit (2PC) protocol across all our microservices?",
                answer:
                  "While 2PC provides strict ACID atomicity across compatible relational databases, it is considered an anti-pattern for internet-scale microservices for three core reasons:\n\n1. Latency & Lock Amplification: Phase 1 requires every participant to acquire exclusive row locks and persist prepare records to disk. As the number of services increases, total transaction time equals the slowest service's roundtrip. During this entire window, database rows remain locked, destroying throughput.\n\n2. The Blocking Coordinator Dilemma: If the coordinator node crashes after participants vote YES, participants are completely blocked. They cannot unilaterally commit (another node may have voted NO) nor unilaterally abort (the coordinator may have committed). They must hold row locks indefinitely until the coordinator recovers.\n\n3. Heterogeneous Services: Modern microservices interact with non-database participants (Stripe, Twilio, SendGrid, S3) that do not implement the XA/2PC protocol.",
              },
              {
                id: "qa-2",
                q: "How do Sagas handle isolation anomalies since each local transaction commits immediately?",
                answer:
                  "Because each step in a Saga commits to its local database immediately, intermediate states become visible to other concurrent users, meaning Sagas sacrifice global Isolation ('I' in ACID).\n\nTo mitigate this in production:\n• Semantic State Flags: Records are tagged with pending statuses (e.g. `PENDING_CONFIRMATION`, `HELD`, `RESERVED`) rather than final states. User-facing read queries filter out non-terminal states.\n• Commutative Updates: Operations are modeled such that execution order does not affect final correctness (e.g. balance increments/decrements rather than absolute sets).\n• Countermeasure Compensations: If a dirty read occurs and an earlier step is compensated, downstream systems must detect the compensation and fire cascading compensating alerts.",
              },
              {
                id: "qa-3",
                q: "What happens if a compensating transaction fails halfway through a Saga rollback?",
                answer:
                  "A compensating transaction MUST NOT fail permanently. By definition, compensations must be designed to be idempotent and retriable until success.\n\nIf a temporary failure occurs (e.g. database timeout or network partition), the orchestrator retries with exponential backoff and jitter.\n\nIf a compensation encounters an unrecoverable failure (e.g. schema bug, invalid state), the orchestrator:\n1. Logs the failure to a Dead Letter Queue (DLQ) and emits a P1 operational alert.\n2. Transitions the Saga state machine to `MANUAL_INTERVENTION_REQUIRED`.\n3. Provides an operator dashboard for customer support / SRE engineers to manually reconcile the business state.",
              },
              {
                id: "qa-4",
                q: "How should an API handle a retry when an idempotency key is currently in the `PENDING` state?",
                answer:
                  "When a client sends a request with an `Idempotency-Key` that exists in the database with status `PENDING`, it indicates that the initial request is still being processed by another worker or thread.\n\nThe server MUST NOT:\n• Execute the business logic a second time (risks race condition / double execution).\n• Silently ignore the request.\n\nThe correct industry standard (e.g. Stripe API) is to return an HTTP 409 Conflict with a `Retry-After: 2` header, or hold the incoming HTTP connection open for a bounded timeout (e.g. 5 seconds) waiting for the initial transaction to complete, then returning the committed result.",
              },
              {
                id: "qa-5",
                q: "Why is saving an event to Kafka and updating PostgreSQL in the same HTTP handler an anti-pattern (Dual-Write Problem)?",
                answer:
                  "Consider this code in an API handler:\n```javascript\nawait db.query('UPDATE interviews SET status = $1', ['COMPLETED']);\nawait kafkaProducer.send({ topic: 'interview.completed', message: payload });\n```\nThis constitutes the classic Dual-Write Problem:\n• If the database commits, but the server crashes or Kafka times out before publishing, the event is lost forever. Consumers never know the interview completed.\n• If you reverse the order (publish to Kafka first, then update DB), and the database transaction fails, downstream workers process an event that never actually occurred.\n\nThe only robust solution is the Transactional Outbox Pattern: the database update and the outbox record insertion occur in the exact same ACID SQL transaction. A Debezium CDC relay or background poller then reliably publishes the outbox record to Kafka.",
              },
              {
                id: "qa-6",
                q: "How does the Transactional Inbox pattern prevent duplicate processing in at-least-once message brokers?",
                answer:
                  "Message brokers like Kafka guarantee at-least-once delivery; duplicate messages are guaranteed to occur due to network retries and worker rebalances.\n\nThe Transactional Inbox pattern guarantees application-level exactly-once semantics by leveraging the consumer's local ACID transaction:\n```sql\nBEGIN;\nINSERT INTO processed_messages (message_id, consumer_name) VALUES ($1, 'report-worker');\n-- Business logic:\nINSERT INTO reports ...;\nCOMMIT;\n```\nIf Kafka redelivers the message, the `INSERT INTO processed_messages` triggers a primary key collision. The database transaction aborts cleanly, business records remain untouched, and the worker ACKs the message to acknowledge receipt.",
              },
            ].map((qa) => {
              const isExpanded = expandedQA[qa.id];
              return (
                <div
                  key={qa.id}
                  className="rounded-2xl border border-stone-200 bg-white p-5 shadow-2xs transition"
                >
                  <button
                    type="button"
                    onClick={() => toggleQA(qa.id)}
                    className="flex w-full items-start justify-between gap-4 text-left cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-orange-100 font-mono text-xs font-bold text-orange-700">
                        ?
                      </span>
                      <h3 className="font-bold text-stone-900 text-sm sm:text-base">{qa.q}</h3>
                    </div>
                    <span className="text-stone-400 font-mono text-xs font-bold">
                      {isExpanded ? "−" : "+"}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-stone-100 text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-line pl-9">
                      {qa.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* =====================================================================
            TAB 4: PRACTICAL LAB TRACKER (5 PHASES, 9 DELIVERABLES)
        ====================================================================== */}
        {activeTab === "project" && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-4 mb-4">
              <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                Production Engineering Milestone
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                Final Project: Resilient Distributed Workflow &amp; Idempotent API Gateway
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Build, simulate, and verify a complete fault-tolerant workflow implementing OCC, Sagas, Idempotency Keys, and the Dual-Boundary Outbox/Inbox architecture.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between text-xs font-bold mb-2">
                <span className="text-stone-700">Lab Deliverables Completion:</span>
                <span className="text-orange-600 font-mono">
                  {Math.round(
                    (Object.values(projectChecklist).filter(Boolean).length /
                      Object.keys(projectChecklist).length) *
                      100
                  )}
                  %
                </span>
              </div>
              <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#f97316] h-full transition-all duration-300"
                  style={{
                    width: `${
                      (Object.values(projectChecklist).filter(Boolean).length /
                        Object.keys(projectChecklist).length) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* Checklist items across 5 phases */}
            <div className="space-y-4">
              {[
                {
                  phase: "Phase A: Single-Node ACID & OCC Guard",
                  items: [
                    {
                      key: "phaseA_occ",
                      title: "1. OCC Version Column Implementation",
                      desc: "Implement `version INT NOT NULL DEFAULT 1` with atomic UPDATE conditional predicates.",
                    },
                    {
                      key: "phaseA_conditional",
                      title: "2. State Transition Finite State Machine",
                      desc: "Enforce one-way status progression (SCHEDULED -> IN_PROGRESS -> COMPLETED) with affected rows validation.",
                    },
                  ],
                },
                {
                  phase: "Phase B: Idempotency Key Gateway Middleware",
                  items: [
                    {
                      key: "phaseB_idemp_table",
                      title: "3. Idempotency Records Schema & Indexing",
                      desc: "Create `idempotency_records` table with primary key, SHA-256 payload hash, response payload, and TTL expiration.",
                    },
                    {
                      key: "phaseB_middleware",
                      title: "4. Express/Fastify Middleware Pipeline",
                      desc: "Intercept Idempotency-Key header, inspect status, return cached 200 OK on replay, or reject altered hash with HTTP 422.",
                    },
                  ],
                },
                {
                  phase: "Phase C: Saga Orchestrator Implementation",
                  items: [
                    {
                      key: "phaseC_orchestrator",
                      title: "5. Central State Machine Orchestrator",
                      desc: "Implement workflow orchestrator managing 4 services (Scheduling, Compute, Billing, Notification) with persistent saga log.",
                    },
                    {
                      key: "phaseC_compensations",
                      title: "6. Reversible Compensating Handlers",
                      desc: "Define idempotent backward compensation functions (Release Slot, Refund Credit, Free GPU) invoked upon step failures.",
                    },
                  ],
                },
                {
                  phase: "Phase D: Transactional Outbox + Inbox Dual Boundary",
                  items: [
                    {
                      key: "phaseD_outbox_inbox",
                      title: "7. Outbox Producer & Inbox Consumer Integration",
                      desc: "Write business state and outbox events in one SQL transaction; deduplicate at consumers using `processed_messages`.",
                    },
                  ],
                },
                {
                  phase: "Phase E: Chaos Failure Simulation & Metrics",
                  items: [
                    {
                      key: "phaseE_chaos_tests",
                      title: "8. Network Partition & Packet Drop Chaos Suite",
                      desc: "Drop HTTP 200 responses and inject worker crashes midway; verify 0 duplicate DB records and 100% consistency.",
                    },
                    {
                      key: "phaseE_metrics",
                      title: "9. Observability & DLQ Monitoring",
                      desc: "Emit Prometheus metrics for compensation rate, idempotency replay hits, and OCC retry frequency.",
                    },
                  ],
                },
              ].map((sec, idx) => (
                <div key={idx} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-2xs">
                  <h4 className="font-extrabold text-stone-900 text-sm mb-3 text-orange-600 font-mono">
                    {sec.phase}
                  </h4>
                  <div className="space-y-3">
                    {sec.items.map((item) => (
                      <div
                        key={item.key}
                        onClick={() => toggleChecklist(item.key)}
                        className="flex items-start gap-3 p-3 rounded-xl border border-stone-100 bg-[#faf8f4] hover:bg-stone-100 transition cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={projectChecklist[item.key]}
                          onChange={() => {}}
                          className="mt-0.5 rounded text-orange-600 focus:ring-orange-500 cursor-pointer"
                        />
                        <div>
                          <span className="font-bold text-xs text-stone-900 block">{item.title}</span>
                          <span className="text-xs text-stone-600 mt-0.5 block">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 5: ASSESSMENT QUIZ (6 QUESTIONS)
        ====================================================================== */}
        {activeTab === "assessment" && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-4 mb-4">
              <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                Verification &amp; Mastery
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                Module 13 Knowledge Check: Sagas, Transactions &amp; Idempotency
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Evaluate your architectural comprehension of distributed transaction boundaries and fault tolerance.
              </p>
            </div>

            {/* Questions List */}
            <div className="space-y-5">
              {quizQuestions.map((q) => {
                const isSelected = selectedAnswers[q.id] !== undefined;
                const selectedOption = selectedAnswers[q.id];
                const isCorrect = selectedOption === q.correct;

                return (
                  <div
                    key={q.id}
                    className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-stone-900 font-mono text-xs font-bold text-white">
                        {q.id}
                      </span>
                      <h3 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
                        {q.question}
                      </h3>
                    </div>

                    <div className="space-y-2 pl-9">
                      {q.options.map((opt, idx) => {
                        let optBg = "border-stone-200 bg-[#faf8f4] text-stone-700 hover:bg-stone-100";
                        if (quizSubmitted) {
                          if (idx === q.correct) {
                            optBg = "border-emerald-300 bg-emerald-50 text-emerald-950 font-bold";
                          } else if (selectedOption === idx) {
                            optBg = "border-red-300 bg-red-50 text-red-950 line-through";
                          }
                        } else if (selectedOption === idx) {
                          optBg = "border-orange-500 bg-orange-50 text-orange-950 font-bold";
                        }

                        return (
                          <div
                            key={idx}
                            onClick={() => handleSelectAnswer(q.id, idx)}
                            className={`p-3 rounded-xl border text-xs sm:text-sm transition cursor-pointer ${optBg}`}
                          >
                            {opt}
                          </div>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-4 pt-3 border-t border-stone-100 pl-9 text-xs text-stone-600 leading-relaxed">
                        <strong className={isCorrect ? "text-emerald-700" : "text-red-700"}>
                          {isCorrect ? "✓ Correct!" : "✗ Incorrect."}
                        </strong>{" "}
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submit / Reset Actions */}
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs flex items-center justify-between flex-wrap gap-4">
              <div>
                {quizSubmitted ? (
                  <div className="text-xs sm:text-sm font-bold text-stone-900">
                    Your Score:{" "}
                    <span className="text-orange-600 font-mono text-base">
                      {calculateScore()} / {quizQuestions.length}
                    </span>{" "}
                    ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                  </div>
                ) : (
                  <div className="text-xs text-stone-500">
                    Answer all 6 questions before submitting for feedback.
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                {quizSubmitted ? (
                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="px-4 py-2 rounded-xl border border-stone-200 bg-stone-50 text-xs font-bold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                  >
                    Retake Quiz
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                    className="px-5 py-2.5 rounded-xl bg-[#f97316] text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer disabled:opacity-50"
                  >
                    Submit Answers
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 6: RESEARCH & UNIVERSITY READING LIST (7 CITATIONS)
        ====================================================================== */}
        {activeTab === "reading" && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-4 mb-4">
              <span className="text-[11px] font-mono font-bold uppercase text-orange-600 tracking-wider block">
                Academic &amp; Industry Literature
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                Seminal Papers, RFCs &amp; Architecture Documentation
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                The authoritative foundations of distributed atomic commitments, compensating workflows, and reliable API design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: 1,
                  title: "Notes on Data Base Operating Systems (Jim Gray, 1978)",
                  focus:
                    "The seminal IBM paper that formalized the ACID concept, Write-Ahead Logging (WAL), and the foundational Two-Phase Commit (2PC) protocol.",
                  url: "https://www.microsoft.com/en-us/research/publication/notes-on-data-base-operating-systems/",
                  source: "IBM Research / Microsoft Research",
                },
                {
                  id: 2,
                  title: "Sagas (Hector Garcia-Molina & Kenneth Salem, 1987)",
                  focus:
                    "The original Princeton paper proposing Sagas as a mechanism to execute long-lived transactions without holding locks, using compensating transactions for rollback.",
                  url: "https://www.cs.cornell.edu/andru/cs711/2002fa/reading/sagas.pdf",
                  source: "ACM SIGMOD Conference",
                },
                {
                  id: 3,
                  title: "PostgreSQL Documentation: Transaction Isolation & MVCC",
                  focus:
                    "Comprehensive technical breakdown of PostgreSQL's implementation of Read Committed, Repeatable Read, and Serializable Snapshot Isolation (SSI).",
                  url: "https://www.postgresql.org/docs/current/transaction-iso.html",
                  source: "PostgreSQL Global Development Group",
                },
                {
                  id: 4,
                  title: "PostgreSQL Two-Phase Transactions (PREPARE TRANSACTION)",
                  focus:
                    "Reference guide to PREPARE TRANSACTION and COMMIT PREPARED, explaining how databases store prepared distributed state in pg_twophase.",
                  url: "https://www.postgresql.org/docs/current/sql-prepare-transaction.html",
                  source: "PostgreSQL Global Development Group",
                },
                {
                  id: 5,
                  title: "Designing Robust and Idempotent APIs with Idempotency Keys",
                  focus:
                    "Stripe's engineering architecture standard for building HTTP APIs with automatic retry deduplication, payload hashing, and response caching.",
                  url: "https://stripe.com/blog/idempotency",
                  source: "Stripe Engineering Blog",
                },
                {
                  id: 6,
                  title: "Saga Distributed Transactions Pattern",
                  focus:
                    "Microsoft Azure Architecture Center's enterprise guide on choreography vs. orchestration for managing state across distributed microservices.",
                  url: "https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga",
                  source: "Microsoft Azure Architecture Center",
                },
                {
                  id: 7,
                  title: "Managing Transactions Across Microservices Using AWS Step Functions",
                  focus:
                    "AWS architectural reference on building resilient orchestrator state machines, compensating actions, and Dead Letter Queues.",
                  url: "https://aws.amazon.com/blogs/compute/building-a-serverless-distributed-saga-orchestrator-with-aws-step-functions/",
                  source: "AWS Architecture Blog",
                },
              ].map((paper) => (
                <a
                  key={paper.id}
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 mb-2">
                      <span className="font-bold text-orange-600">Resource {paper.id}</span>
                      <span>{paper.source}</span>
                    </div>
                    <h4 className="font-bold text-sm text-stone-900 group-hover:text-orange-600 transition">
                      {paper.title}
                    </h4>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">{paper.focus}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-orange-600">
                    <span>Read Paper / Architecture Guide</span>
                    <ExternalLink size={13} />
                  </div>
                </a>
              ))}
            </div>

            {/* What Comes Next Banner */}
            <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50/70 p-5 flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
                  What You Mastered in Module 13
                </span>
                <span className="text-sm font-bold text-stone-900 block mt-0.5">
                  Transactions, Distributed Transactions, Sagas &amp; Idempotency
                </span>
                <span className="text-xs text-stone-600 block mt-0.5">
                  You now know how to architect distributed transactions using Sagas with compensating actions, enforce OCC concurrency guards, design idempotent APIs with payload hashes, and implement the dual-boundary Outbox + Inbox pattern.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigate("/learning/system-design/messaging")}
                  className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Module 12</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("assessment")}
                  className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                >
                  <span>Module 13 Quiz</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/learning/system-design/traffic")}
                  className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                >
                  <span>Start Module 14 (Load Balancing &amp; Traffic)</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
