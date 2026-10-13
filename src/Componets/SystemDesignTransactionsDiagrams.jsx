import React, { useState } from "react";
import {
  Server,
  Database,
  Radio,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Layers,
  Clock,
  Zap,
  Cpu,
  ShieldCheck,
  ShieldAlert,
  Send,
  Workflow,
  Sparkles,
  Inbox,
  Filter,
  Lock,
  Unlock,
  Key,
  Flame,
  FileText,
  RefreshCw,
} from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 1: TWO-PHASE COMMIT (2PC) PROTOCOL & COORDINATOR FAILURE HORIZON
 * Demonstrates Phase 1 (Prepare) and Phase 2 (Commit/Abort) across distributed
 * databases, showing the blocking dilemma when a coordinator crashes midway.
 * ---------------------------------------------------------------------------
 */
export function TwoPhaseCommitDiagram() {
  const [phase, setPhase] = useState(1); // 1: Prepare, 2: Commit, 3: Coordinator Crash
  const [db1Vote, setDb1Vote] = useState("YES");
  const [db2Vote, setDb2Vote] = useState("YES");

  const isAllYes = db1Vote === "YES" && db2Vote === "YES";

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Atomic Distributed Protocol
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Two-Phase Commit (2PC): Prepare, Commit &amp; Coordinator Dilemma
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPhase(1)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              phase === 1
                ? "bg-[#f97316] text-white shadow-xs"
                : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
            }`}
          >
            Phase 1: Prepare
          </button>
          <button
            type="button"
            onClick={() => setPhase(2)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              phase === 2
                ? "bg-emerald-600 text-white shadow-xs"
                : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
            }`}
          >
            Phase 2: Decision
          </button>
          <button
            type="button"
            onClick={() => setPhase(3)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              phase === 3
                ? "bg-red-600 text-white shadow-xs"
                : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
            }`}
          >
            Simulate Coordinator Crash
          </button>
        </div>
      </div>

      {/* Description Header */}
      <div className="mb-4 p-3 rounded-xl border border-stone-200 bg-white text-xs text-stone-600 leading-relaxed">
        {phase === 1 && (
          <p>
            <strong>Phase 1 (Prepare):</strong> Coordinator sends <code>PREPARE TRANSACTION</code> to Database A and B.
            Participants lock resources, record state to durable WAL, and return their vote (YES or NO).
          </p>
        )}
        {phase === 2 && (
          <p>
            <strong>Phase 2 (Commit or Abort):</strong> If all participants vote YES, Coordinator issues{" "}
            <code>COMMIT PREPARED</code>. If any participant votes NO, Coordinator broadcasts{" "}
            <code>ROLLBACK PREPARED</code> to release locks.
          </p>
        )}
        {phase === 3 && (
          <p className="text-red-700 font-semibold">
            <AlertTriangle size={14} className="inline mr-1" />
            <strong>The 2PC Blocking Dilemma:</strong> Both databases voted YES and entered PREPARED state, but the Coordinator
            crashed before broadcasting Phase 2! Both databases remain blocked with locked rows, unable to unilaterally abort or commit.
          </p>
        )}
      </div>

      {/* Visual Component Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        {/* Coordinator */}
        <div
          className={`p-4 rounded-xl border transition ${
            phase === 3
              ? "border-red-300 bg-red-50/50"
              : "border-orange-300 bg-orange-50/40"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-stone-900">Transaction Coordinator</span>
            <Workflow size={16} className={phase === 3 ? "text-red-600" : "text-orange-600"} />
          </div>
          <span className="text-[11px] text-stone-500 block">Status:</span>
          <span className="font-mono text-xs font-bold text-stone-800 block mb-2">
            {phase === 3 ? "CRASHED (Unreachable)" : phase === 1 ? "Awaiting Votes..." : isAllYes ? "DECISION: COMMIT" : "DECISION: ABORT"}
          </span>
          {phase === 1 && (
            <div className="text-[10px] text-stone-500">
              Broadcasting Prepare RPC to all participants.
            </div>
          )}
        </div>

        {/* Database A */}
        <div className="p-4 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-stone-900">Database A (Scheduling)</span>
            <Database size={16} className="text-stone-600" />
          </div>
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-stone-500">Local Vote:</span>
            <select
              value={db1Vote}
              onChange={(e) => setDb1Vote(e.target.value)}
              disabled={phase === 3}
              className="px-2 py-0.5 rounded border border-stone-300 text-xs font-bold"
            >
              <option value="YES">VOTE YES (Ready)</option>
              <option value="NO">VOTE NO (Conflict)</option>
            </select>
          </div>
          <div className="text-[11px] font-mono text-stone-600 pt-2 border-t border-stone-100">
            {phase === 3 ? (
              <span className="text-red-600 font-bold">LOCKED: In-Doubt (Waiting)</span>
            ) : phase === 1 ? (
              <span>State: PREPARED (Row Locked)</span>
            ) : (
              <span>State: {isAllYes ? "COMMITTED" : "ABORTED"}</span>
            )}
          </div>
        </div>

        {/* Database B */}
        <div className="p-4 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-stone-900">Database B (Interview)</span>
            <Database size={16} className="text-stone-600" />
          </div>
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-stone-500">Local Vote:</span>
            <select
              value={db2Vote}
              onChange={(e) => setDb2Vote(e.target.value)}
              disabled={phase === 3}
              className="px-2 py-0.5 rounded border border-stone-300 text-xs font-bold"
            >
              <option value="YES">VOTE YES (Ready)</option>
              <option value="NO">VOTE NO (Conflict)</option>
            </select>
          </div>
          <div className="text-[11px] font-mono text-stone-600 pt-2 border-t border-stone-100">
            {phase === 3 ? (
              <span className="text-red-600 font-bold">LOCKED: In-Doubt (Waiting)</span>
            ) : phase === 1 ? (
              <span>State: PREPARED (Row Locked)</span>
            ) : (
              <span>State: {isAllYes ? "COMMITTED" : "ABORTED"}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 2: SAGA PATTERN: ORCHESTRATION & COMPENSATING TRANSACTIONS
 * Visualizes the 4-step interview booking saga, showing forward local commits
 * and the automatic trigger of compensating rollback steps when Step 3 fails.
 * ---------------------------------------------------------------------------
 */
export function SagaWorkflowDiagram() {
  const [sagaState, setSagaState] = useState("running"); // "running" | "failed" | "compensated"
  const [currentStep, setCurrentStep] = useState(2); // 0: Booking, 1: Slot, 2: Session, 3: Confirmed

  const steps = [
    {
      name: "1. Create Pending Booking",
      service: "Booking Service",
      action: "INSERT booking (status='PENDING')",
      compensation: "UPDATE booking (status='CANCELLED')",
      status: "Committed",
    },
    {
      name: "2. Reserve Slot",
      service: "Calendar Service",
      action: "UPDATE slot (is_reserved=TRUE)",
      compensation: "UPDATE slot (is_reserved=FALSE)",
      status: "Committed",
    },
    {
      name: "3. Create Interview Session",
      service: "Interview Service",
      action: "INSERT session (int_4021)",
      compensation: "DELETE session / Mark void",
      status: sagaState === "running" ? "In Progress" : "FAILED (Quota Exceeded)",
      failed: sagaState !== "running",
    },
    {
      name: "4. Confirm Booking",
      service: "Booking Service",
      action: "UPDATE booking (status='CONFIRMED')",
      compensation: "N/A",
      status: sagaState === "running" ? "Pending" : "Skipped",
    },
  ];

  const handleSimulateFailure = () => {
    setSagaState("failed");
  };

  const handleRunCompensation = () => {
    setSagaState("compensated");
  };

  const handleReset = () => {
    setSagaState("running");
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Distributed Saga State Machine
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Orchestrated Saga &amp; Business Compensating Transactions
          </h4>
        </div>
        <div className="flex items-center gap-2">
          {sagaState === "running" ? (
            <button
              type="button"
              onClick={handleSimulateFailure}
              className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-bold transition hover:bg-red-700 cursor-pointer"
            >
              Inject Failure at Step 3
            </button>
          ) : sagaState === "failed" ? (
            <button
              type="button"
              onClick={handleRunCompensation}
              className="px-3 py-1.5 rounded-lg bg-orange-600 text-white text-xs font-bold transition hover:bg-orange-700 cursor-pointer animate-pulse"
            >
              Execute Compensations
            </button>
          ) : (
            <span className="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold">
              Compensated (Consistent)
            </span>
          )}
          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 rounded-lg border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 cursor-pointer"
            title="Reset saga"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Saga State Ribbon */}
      <div className="mb-4 p-3 rounded-xl border border-stone-200 bg-white flex items-center justify-between text-xs">
        <div>
          <span className="text-stone-500">Saga Status:</span>{" "}
          <strong
            className={`font-mono uppercase ${
              sagaState === "running"
                ? "text-orange-600"
                : sagaState === "failed"
                ? "text-red-600 font-black"
                : "text-emerald-700 font-bold"
            }`}
          >
            {sagaState === "running"
              ? "RUNNING (Step 3/4)"
              : sagaState === "failed"
              ? "COMPENSATING (Reversing Steps 2 & 1)"
              : "FAILED_AND_COMPENSATED (Safe Terminal State)"}
          </strong>
        </div>
        <span className="text-[11px] font-mono text-stone-400">saga_id: saga_9041</span>
      </div>

      {/* Steps Flow Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {steps.map((st, idx) => {
          const isCompensated = sagaState === "compensated" && idx < 2;
          return (
            <div
              key={idx}
              className={`p-3.5 rounded-xl border flex flex-col justify-between transition ${
                st.failed
                  ? "border-red-300 bg-red-50/60"
                  : isCompensated
                  ? "border-amber-300 bg-amber-50/60"
                  : "border-stone-200 bg-white"
              }`}
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-stone-400 block mb-1">
                  {st.service}
                </span>
                <h5 className="font-bold text-xs text-stone-900 mb-1.5">{st.name}</h5>
                <div className="p-2 rounded bg-[#faf8f4] border border-stone-200 font-mono text-[10px] text-stone-700 mb-2">
                  {st.action}
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 text-[10px]">
                {st.failed ? (
                  <span className="text-red-700 font-bold flex items-center gap-1">
                    <XCircle size={12} /> {st.status}
                  </span>
                ) : isCompensated ? (
                  <span className="text-amber-800 font-bold flex items-center gap-1">
                    <RefreshCw size={12} className="animate-spin" /> Compensated: {st.compensation}
                  </span>
                ) : (
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 size={12} /> {st.status}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 3: LOST-RESPONSE PROBLEM & IDEMPOTENCY KEY PROCESSING
 * Demonstrates why clients must send Idempotency-Key headers, how the server
 * deduplicates retried requests, and how responses are cached and replayed.
 * ---------------------------------------------------------------------------
 */
export function IdempotencyKeyLifecycleDiagram() {
  const [attempt, setAttempt] = useState(1);
  const [responseDropped, setResponseDropped] = useState(true);

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Client-Server Failure Boundary
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            The Lost-Response Problem &amp; Idempotency Key Replay
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setAttempt(1)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              attempt === 1
                ? "bg-[#f97316] text-white shadow-xs"
                : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
            }`}
          >
            Attempt 1 (Response Dropped)
          </button>
          <button
            type="button"
            onClick={() => setAttempt(2)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              attempt === 2
                ? "bg-emerald-600 text-white shadow-xs"
                : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
            }`}
          >
            Attempt 2 (Safe Replay)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        {/* Client */}
        <div className="p-4 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-stone-900">Candidate Browser / Client</span>
            <Send size={15} className="text-orange-600" />
          </div>
          <span className="text-[11px] text-stone-500 block mb-1">HTTP Request:</span>
          <pre className="p-2 rounded bg-[#faf8f4] border border-stone-200 font-mono text-[10px] text-stone-800 overflow-x-auto">
{`POST /api/interviews/2041/submit
Idempotency-Key: 4b3bca6e...
Attempt: #${attempt}`}
          </pre>
          <div className="mt-2 text-[11px] text-stone-600">
            {attempt === 1 ? (
              <span className="text-red-600 font-semibold">
                Client experiences HTTP 504 Gateway Timeout! Did the save succeed?
              </span>
            ) : (
              <span className="text-emerald-700 font-semibold">
                Client retries with SAME key. Receives instant 200 OK replay!
              </span>
            )}
          </div>
        </div>

        {/* Server & Logic */}
        <div className="p-4 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-stone-900">Interview API Gateway</span>
            <Server size={15} className="text-stone-600" />
          </div>
          <span className="text-[11px] text-stone-500 block mb-1">Idempotency Middleware:</span>
          <div className="text-xs text-stone-700 space-y-1.5">
            {attempt === 1 ? (
              <div className="p-2 rounded bg-amber-50 border border-amber-200 text-amber-900 text-[11px]">
                Key not found. Executes DB transaction. Commits score 94. Network drops 200 OK response on return path!
              </div>
            ) : (
              <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px]">
                Key 4b3bca6e FOUND in <code>idempotency_records</code>! Bypasses DB mutation, returns cached JSON response immediately.
              </div>
            )}
          </div>
        </div>

        {/* Database Record */}
        <div className="p-4 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-stone-900">Database Storage</span>
            <Database size={15} className="text-stone-600" />
          </div>
          <span className="text-[11px] text-stone-500 block mb-1">idempotency_records:</span>
          <pre className="p-2 rounded bg-stone-900 text-stone-100 font-mono text-[10px] overflow-x-auto">
{`{
  "key": "4b3bca6e...",
  "status": "COMPLETED",
  "response": {
    "score": 94,
    "status": "COMPLETED"
  }
}`}
          </pre>
          <div className="mt-2 text-[11px] text-stone-500">
            Total DB Finalization Rows: <strong>1 row (Zero duplicates)</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DISPATCHER COMPONENT FOR MODULE 13 DIAGRAMS
 * ---------------------------------------------------------------------------
 */
export function VisualDiagramComponentModule13({ diagramId }) {
  switch (diagramId) {
    case "2pc":
      return <TwoPhaseCommitDiagram />;
    case "saga":
      return <SagaWorkflowDiagram />;
    case "idempotency":
      return <IdempotencyKeyLifecycleDiagram />;
    default:
      return <TwoPhaseCommitDiagram />;
  }
}
