import React, { useState } from "react";
import {
  Server,
  Database,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Play,
  RotateCcw,
  ArrowRight,
  Lock,
  Unlock,
  Key,
  Flame,
  Radio,
  Vote,
  FileText,
  Clock,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 1: SPLIT-BRAIN & NETWORK PARTITION HAZARD
 * Visualizes Server A (old leader) separated from B & C (new majority),
 * demonstrating how dual-leader split brain corrupts shared state without fencing.
 * ---------------------------------------------------------------------------
 */
export function SplitBrainHazardDiagram() {
  const [partitionActive, setPartitionActive] = useState(true);
  const [fencingEnabled, setFencingEnabled] = useState(true);
  const [attemptedWriteA, setAttemptedWriteA] = useState(false);
  const [attemptedWriteB, setAttemptedWriteB] = useState(false);

  const handleReset = () => {
    setAttemptedWriteA(false);
    setAttemptedWriteB(false);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Architectural Hazard Visualizer
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Split-Brain Partition &amp; Dual-Leader Storage Hazard
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPartitionActive(!partitionActive)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition border cursor-pointer ${
              partitionActive
                ? "bg-red-50 border-red-300 text-red-700"
                : "bg-emerald-50 border-emerald-300 text-emerald-700"
            }`}
          >
            {partitionActive ? "Partition: ACTIVE (Cut)" : "Partition: HEALED"}
          </button>
          <button
            type="button"
            onClick={() => setFencingEnabled(!fencingEnabled)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition border cursor-pointer ${
              fencingEnabled
                ? "bg-orange-50 border-orange-300 text-orange-700"
                : "bg-stone-100 border-stone-300 text-stone-600"
            }`}
          >
            Fencing Token: {fencingEnabled ? "ENABLED (Safe)" : "DISABLED (Hazard)"}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 rounded-lg border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 cursor-pointer"
            title="Reset write attempts"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Cluster Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch mb-4">
        {/* Minority Partition: Server A */}
        <div
          className={`p-4 rounded-xl border flex flex-col justify-between transition ${
            partitionActive
              ? "border-red-300 bg-red-50/50 shadow-xs"
              : "border-stone-200 bg-white"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] font-bold text-stone-500">Node A</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-100 text-amber-800">
                Old Leader (Epoch 1)
              </span>
            </div>
            <p className="text-xs text-stone-600">
              Isolated on minority side. Heartbeat to B &amp; C timed out. Still has route to Database.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-200">
            <button
              type="button"
              onClick={() => setAttemptedWriteA(true)}
              className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition cursor-pointer"
            >
              Simulate Write from A (Token #41)
            </button>
            {attemptedWriteA && (
              <div className="mt-2 p-2 rounded bg-white border border-stone-200 text-[11px]">
                {fencingEnabled ? (
                  <span className="text-red-700 font-bold flex items-center gap-1">
                    <XCircle size={12} /> DB Rejected Token #41 (Stale)
                  </span>
                ) : (
                  <span className="text-red-600 font-bold flex items-center gap-1 animate-pulse">
                    <AlertTriangle size={12} /> Corrupted DB! Overwrote newer data.
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Partition Barrier / Network Status */}
        <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-dashed border-stone-300 bg-stone-50 text-center">
          <Radio
            size={24}
            className={partitionActive ? "text-red-500 animate-pulse" : "text-emerald-500"}
          />
          <span className="font-bold text-xs text-stone-800 mt-2">
            {partitionActive ? "Network Severed" : "Network Connected"}
          </span>
          <span className="text-[11px] text-stone-500 mt-1 max-w-[180px]">
            {partitionActive
              ? "A cannot reach B or C. B and C form majority (2/3) and elect B."
              : "Full mesh connectivity across all nodes."}
          </span>
        </div>

        {/* Majority Partition: Server B & C */}
        <div
          className={`p-4 rounded-xl border flex flex-col justify-between transition ${
            partitionActive
              ? "border-emerald-300 bg-emerald-50/40 shadow-xs"
              : "border-stone-200 bg-white"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] font-bold text-stone-500">Nodes B &amp; C</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800">
                New Leader (Epoch 2)
              </span>
            </div>
            <p className="text-xs text-stone-600">
              Formed valid 2-node majority quorum ($Q=2$). Elected B as leader with fresh Epoch #2.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-200">
            <button
              type="button"
              onClick={() => setAttemptedWriteB(true)}
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition cursor-pointer"
            >
              Simulate Write from B (Token #42)
            </button>
            {attemptedWriteB && (
              <div className="mt-2 p-2 rounded bg-white border border-stone-200 text-[11px]">
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> DB Accepted Token #42 (Committed)
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Shared Storage / Database Target */}
      <div className="rounded-xl border border-stone-200 bg-white p-4 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-orange-100 text-orange-700">
            <Database size={20} />
          </div>
          <div>
            <span className="text-xs font-bold text-stone-900 block">
              Shared PrepSpaces Database / Storage Layer
            </span>
            <span className="text-[11px] text-stone-500">
              Current Highest Token Accepted:{" "}
              <strong className="text-stone-800 font-mono">
                {attemptedWriteB ? "#42 (Epoch 2)" : "#41 (Epoch 1)"}
              </strong>
            </span>
          </div>
        </div>
        <div className="text-xs">
          {fencingEnabled ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
              <ShieldCheck size={14} /> Fencing Guard Active: Rejects Tokens &lt; Highest
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 font-semibold">
              <ShieldAlert size={14} /> Fencing Inactive: Blind Overwrite Permitted
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 2: RAFT FINITE STATE MACHINE & TERM EPOCH LIFECYCLE
 * Visualizes the 3 Raft roles: Follower, Candidate, Leader,
 * transitions triggered by election timeouts, votes, and heartbeat terms.
 * ---------------------------------------------------------------------------
 */
export function RaftStateLifecycleDiagram() {
  const [activeRole, setActiveRole] = useState("follower"); // "follower" | "candidate" | "leader"

  const roleDetails = {
    follower: {
      title: "Follower Role",
      badge: "Passive / Standby",
      desc: "All nodes start as followers. Listens for AppendEntries RPCs (heartbeats) from the leader. Resets election timer on each valid heartbeat.",
      triggers: [
        { label: "Election Timeout expires without heartbeat", next: "candidate" },
      ],
      rules: [
        "Monitors heartbeat timer (typically 150ms–300ms randomized).",
        "Grants vote if candidate term >= currentTerm and candidate log is at least as up-to-date.",
        "Cannot serve writes directly; redirects client requests to current leader.",
      ],
    },
    candidate: {
      title: "Candidate Role",
      badge: "Campaigning",
      desc: "Starts a new election term. Increments currentTerm, votes for itself, and broadcasts RequestVote RPCs to all peers in the cluster.",
      triggers: [
        { label: "Receives majority votes (Q >= ⌊N/2⌋ + 1)", next: "leader" },
        { label: "Discovers leader with term >= candidate term", next: "follower" },
        { label: "Election timeout expires without majority (split vote)", next: "candidate" },
      ],
      rules: [
        "Increments term: currentTerm += 1.",
        "Votes for itself immediately.",
        "Wins election only when receiving votes from a strict majority of nodes.",
        "Randomized timeout prevents repeated split-vote ties.",
      ],
    },
    leader: {
      title: "Leader Role",
      badge: "Coordinating",
      desc: "Handles all client requests, appends log entries, replicates entries to followers, and maintains leadership via periodic heartbeats.",
      triggers: [
        { label: "Discovers peer with higher term (term > currentTerm)", next: "follower" },
      ],
      rules: [
        "Sends periodic heartbeats (e.g., every 50ms) to prevent follower election timeouts.",
        "Appends entries to local log and sends AppendEntries to all followers.",
        "Commits an entry once replicated across a majority of replicas.",
        "Immediately steps down to follower upon observing a higher term.",
      ],
    },
  };

  const current = roleDetails[activeRole];

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="border-b border-stone-200 pb-3 mb-4">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
          Consensus Protocol State Machine
        </span>
        <h4 className="font-extrabold text-stone-900 text-sm">
          Raft 3-Role State Transitions &amp; Term Evolution
        </h4>
        <p className="text-xs text-stone-500 mt-0.5">
          Select any role to inspect its lifecycle triggers, invariants, and transitions.
        </p>
      </div>

      {/* Role State Selector Tabs */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { id: "follower", label: "Follower", icon: Clock },
          { id: "candidate", label: "Candidate", icon: Vote },
          { id: "leader", label: "Leader", icon: Flame },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = activeRole === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveRole(item.id)}
              className={`p-3 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                isActive
                  ? "border-[#f97316] bg-white shadow-xs text-stone-900"
                  : "border-stone-200 bg-white/70 text-stone-600 hover:bg-stone-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`p-1.5 rounded-lg ${
                    isActive ? "bg-orange-100 text-orange-700" : "bg-stone-100 text-stone-500"
                  }`}
                >
                  <Icon size={16} />
                </div>
                <span className="text-xs font-bold">{item.label}</span>
              </div>
              {isActive && <div className="h-2 w-2 rounded-full bg-[#f97316]" />}
            </button>
          );
        })}
      </div>

      {/* Role Deep Dive Card */}
      <div className="rounded-xl border border-stone-200 bg-white p-5">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <h5 className="font-bold text-stone-900 text-sm">{current.title}</h5>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-stone-100 text-stone-700">
              {current.badge}
            </span>
          </div>
          <span className="text-xs text-stone-400 font-mono">Role: {activeRole.toUpperCase()}</span>
        </div>

        <p className="text-xs text-stone-600 leading-relaxed mb-4">{current.desc}</p>

        {/* Transition Triggers */}
        <div className="mb-4">
          <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wide block mb-2">
            State Transitions &amp; Triggers
          </span>
          <div className="space-y-2">
            {current.triggers.map((trig, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-lg border border-stone-200 bg-[#faf8f4] text-xs"
              >
                <span className="text-stone-700">{trig.label}</span>
                <button
                  type="button"
                  onClick={() => setActiveRole(trig.next)}
                  className="inline-flex items-center gap-1 font-bold text-orange-600 hover:text-orange-700 cursor-pointer text-[11px]"
                >
                  <span>Transition to {trig.next}</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Key Invariants */}
        <div>
          <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wide block mb-2">
            Key Safety Invariants &amp; Rules
          </span>
          <ul className="space-y-1.5 text-xs text-stone-600">
            {current.rules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-orange-500 shrink-0 mt-0.5" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 3: RAFT QUORUM LOG REPLICATION & COMMIT SEQUENCE
 * Visualizes how client writes traverse:
 * Leader append -> follower broadcast -> quorum acks -> commit -> state machine
 * ---------------------------------------------------------------------------
 */
export function RaftLogReplicationDiagram() {
  const [step, setStep] = useState(0); // 0 to 4

  const steps = [
    {
      title: "Step 1: Client Submits Operation",
      desc: "Client submits write command 'SET interview_741_score = 94' to the elected Leader.",
      leaderLog: [{ term: 2, idx: 1, cmd: "SET score=94", status: "uncommitted" }],
      f1Log: [],
      f2Log: [],
      commitIndex: 0,
    },
    {
      title: "Step 2: Leader Appends to Local Log",
      desc: "Leader assigns Log Index #1, Term 2, and prepares AppendEntries RPCs for all followers.",
      leaderLog: [{ term: 2, idx: 1, cmd: "SET score=94", status: "uncommitted" }],
      f1Log: [],
      f2Log: [],
      commitIndex: 0,
    },
    {
      title: "Step 3: Replicates to Followers via RPC",
      desc: "Follower 1 receives and appends entry. Follower 2 is delayed or temporarily unresponsive.",
      leaderLog: [{ term: 2, idx: 1, cmd: "SET score=94", status: "uncommitted" }],
      f1Log: [{ term: 2, idx: 1, cmd: "SET score=94", status: "uncommitted" }],
      f2Log: [],
      commitIndex: 0,
    },
    {
      title: "Step 4: Quorum Acknowledged (Commit Rule Met)",
      desc: "Leader receives ack from Follower 1. Leader + Follower 1 = 2 out of 3 (Majority Quorum met!). Leader updates commitIndex = 1.",
      leaderLog: [{ term: 2, idx: 1, cmd: "SET score=94", status: "committed" }],
      f1Log: [{ term: 2, idx: 1, cmd: "SET score=94", status: "committed" }],
      f2Log: [],
      commitIndex: 1,
    },
    {
      title: "Step 5: Apply to State Machine & Return to Client",
      desc: "Leader applies entry to internal state machine and returns SUCCESS to client. Follower 2 catches up on next heartbeat.",
      leaderLog: [{ term: 2, idx: 1, cmd: "SET score=94", status: "committed" }],
      f1Log: [{ term: 2, idx: 1, cmd: "SET score=94", status: "committed" }],
      f2Log: [{ term: 2, idx: 1, cmd: "SET score=94", status: "committed" }],
      commitIndex: 1,
    },
  ];

  const current = steps[step];

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Raft Replicated State Machine
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Log Replication &amp; Majority Commitment Sequence
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setStep((prev) => Math.max(0, prev - 1))}
            disabled={step === 0}
            className="px-2.5 py-1 rounded-lg border border-stone-200 bg-white text-xs font-bold text-stone-700 disabled:opacity-40 cursor-pointer"
          >
            Prev
          </button>
          <span className="text-xs font-mono font-bold text-orange-600">
            Step {step + 1} of {steps.length}
          </span>
          <button
            type="button"
            onClick={() => setStep((prev) => Math.min(steps.length - 1, prev + 1))}
            disabled={step === steps.length - 1}
            className="px-2.5 py-1 rounded-lg bg-[#f97316] text-white text-xs font-bold disabled:opacity-40 cursor-pointer hover:bg-[#ea580c]"
          >
            Next
          </button>
          <button
            type="button"
            onClick={() => setStep(0)}
            className="p-1 rounded-lg border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 cursor-pointer"
            title="Reset to step 1"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      <div className="mb-4 p-3 rounded-xl border border-orange-200 bg-orange-50/60">
        <h5 className="font-bold text-stone-900 text-xs">{current.title}</h5>
        <p className="text-xs text-stone-600 mt-0.5">{current.desc}</p>
      </div>

      {/* Cluster Nodes & Log Inspection */}
      <div className="space-y-3">
        {/* Node 1: Leader */}
        <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-orange-100 text-orange-700 font-bold text-[10px]">
                LEADER
              </span>
              <span className="font-bold text-xs text-stone-900">Node A (Term 2)</span>
            </div>
            <span className="text-[11px] font-mono text-stone-500">
              CommitIndex: <strong>{current.commitIndex}</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            <span className="text-[10px] text-stone-400 font-mono">Log:</span>
            {current.leaderLog.length === 0 ? (
              <span className="text-xs text-stone-400 italic">Empty log</span>
            ) : (
              current.leaderLog.map((entry, idx) => (
                <div
                  key={idx}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-2 ${
                    entry.status === "committed"
                      ? "border-emerald-300 bg-emerald-50 text-emerald-900 font-bold"
                      : "border-amber-300 bg-amber-50 text-amber-900"
                  }`}
                >
                  <span>Idx:{entry.idx}</span>
                  <span className="opacity-70">T:{entry.term}</span>
                  <span>{entry.cmd}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider">
                    [{entry.status}]
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Node 2: Follower 1 */}
        <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-stone-100 text-stone-700 font-bold text-[10px]">
                FOLLOWER
              </span>
              <span className="font-bold text-xs text-stone-900">Node B (Follower 1)</span>
            </div>
            <span className="text-[11px] font-mono text-stone-500">
              Ack Status: {step >= 3 ? "Acknowledged" : step >= 2 ? "Received" : "Idle"}
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            <span className="text-[10px] text-stone-400 font-mono">Log:</span>
            {current.f1Log.length === 0 ? (
              <span className="text-xs text-stone-400 italic">Empty log</span>
            ) : (
              current.f1Log.map((entry, idx) => (
                <div
                  key={idx}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-2 ${
                    entry.status === "committed"
                      ? "border-emerald-300 bg-emerald-50 text-emerald-900 font-bold"
                      : "border-amber-300 bg-amber-50 text-amber-900"
                  }`}
                >
                  <span>Idx:{entry.idx}</span>
                  <span className="opacity-70">T:{entry.term}</span>
                  <span>{entry.cmd}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider">
                    [{entry.status}]
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Node 3: Follower 2 */}
        <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-stone-100 text-stone-700 font-bold text-[10px]">
                FOLLOWER
              </span>
              <span className="font-bold text-xs text-stone-900">Node C (Follower 2)</span>
            </div>
            <span className="text-[11px] font-mono text-stone-500">
              Ack Status: {step >= 4 ? "Caught Up" : "Delayed / Slow"}
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            <span className="text-[10px] text-stone-400 font-mono">Log:</span>
            {current.f2Log.length === 0 ? (
              <span className="text-xs text-stone-400 italic">Empty log (pending sync)</span>
            ) : (
              current.f2Log.map((entry, idx) => (
                <div
                  key={idx}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-2 ${
                    entry.status === "committed"
                      ? "border-emerald-300 bg-emerald-50 text-emerald-900 font-bold"
                      : "border-amber-300 bg-amber-50 text-amber-900"
                  }`}
                >
                  <span>Idx:{entry.idx}</span>
                  <span className="opacity-70">T:{entry.term}</span>
                  <span>{entry.cmd}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider">
                    [{entry.status}]
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 4: DISTRIBUTED LOCK, LEASE EXPIRY & FENCING TOKEN REJECTION
 * Visualizes Martin Kleppmann's classic distributed locking problem:
 * Process pause -> lease expiry -> worker B token 42 -> Worker A late write token 41 rejected.
 * ---------------------------------------------------------------------------
 */
export function FencingTokenSequenceDiagram() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: 1,
      title: "Worker A Acquires Lock",
      desc: "Worker A requests lock from coordination service (etcd / ZooKeeper). Receives Lease (10s expiry) and monotonically increasing Fencing Token 41.",
      token: 41,
      workerAState: "Active",
      workerBState: "Standby",
      storageToken: 40,
    },
    {
      num: 2,
      title: "Worker A Suffers Long Pause (GC / Network)",
      desc: "Worker A experiences a 15-second Stop-the-World garbage collection pause or hypervisor freeze. Worker A's lease expires without renewal.",
      token: 41,
      workerAState: "Paused / Frozen",
      workerBState: "Standby",
      storageToken: 40,
    },
    {
      num: 3,
      title: "Worker B Acquires Lock & Token 42",
      desc: "Lock service detects lease expiration and grants lock to Worker B with incremented Fencing Token 42. Worker B immediately begins job.",
      token: 42,
      workerAState: "Paused / Frozen",
      workerBState: "Active (Token 42)",
      storageToken: 40,
    },
    {
      num: 4,
      title: "Worker B Writes Result to Storage",
      desc: "Worker B finishes generating the report and commits write with Token 42. Storage verifies 42 > 40, updates its highestToken to 42.",
      token: 42,
      workerAState: "Paused / Frozen",
      workerBState: "Finished (Success)",
      storageToken: 42,
    },
    {
      num: 5,
      title: "Worker A Resumes & Writes with Stale Token 41 (Rejected!)",
      desc: "Worker A wakes up unaware that 15s elapsed. It sends write with Token 41. Storage checks 41 < 42, REJECTS stale write, protecting data integrity.",
      token: 41,
      workerAState: "Late Write Attempt (Token 41)",
      workerBState: "Finished",
      storageToken: 42,
      rejected: true,
    },
  ];

  const current = steps[activeStep - 1];

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Martin Kleppmann Fencing Protocol
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Process Pause, Lease Expiration &amp; Fencing Token Rejection
          </h4>
        </div>
        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setActiveStep(s)}
              className={`h-7 w-7 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeStep === s
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 p-3 rounded-xl border border-stone-200 bg-white">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold text-stone-900">{current.title}</span>
          <span className="text-[11px] font-mono text-orange-600 font-bold">
            Step {current.num} / 5
          </span>
        </div>
        <p className="text-xs text-stone-600 leading-relaxed">{current.desc}</p>
      </div>

      {/* Visual Sequence Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Worker A */}
        <div
          className={`p-4 rounded-xl border transition ${
            activeStep === 2 || activeStep === 3
              ? "border-amber-300 bg-amber-50/50"
              : activeStep === 5
              ? "border-red-300 bg-red-50/50"
              : "border-stone-200 bg-white"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-stone-900">Worker A (Old Owner)</span>
            <Lock size={14} className={activeStep === 1 ? "text-orange-600" : "text-stone-400"} />
          </div>
          <span className="text-[11px] text-stone-500 block">Status:</span>
          <span className="font-mono text-xs font-bold text-stone-800 block">
            {current.workerAState}
          </span>
          <div className="mt-3 pt-2 border-t border-stone-200 text-[11px] font-mono text-stone-600">
            Held Token: <strong>#41</strong>
          </div>
        </div>

        {/* Worker B */}
        <div
          className={`p-4 rounded-xl border transition ${
            activeStep === 3 || activeStep === 4
              ? "border-emerald-300 bg-emerald-50/50"
              : "border-stone-200 bg-white"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-stone-900">Worker B (New Owner)</span>
            <Key
              size={14}
              className={activeStep >= 3 ? "text-emerald-600" : "text-stone-400"}
            />
          </div>
          <span className="text-[11px] text-stone-500 block">Status:</span>
          <span className="font-mono text-xs font-bold text-stone-800 block">
            {current.workerBState}
          </span>
          <div className="mt-3 pt-2 border-t border-stone-200 text-[11px] font-mono text-stone-600">
            Acquired Token: <strong>#42</strong>
          </div>
        </div>

        {/* Storage Service */}
        <div className="p-4 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-stone-900">Storage Service (Enforcer)</span>
            <Database size={14} className="text-orange-600" />
          </div>
          <span className="text-[11px] text-stone-500 block">highestToken accepted:</span>
          <span className="font-mono text-xs font-bold text-stone-800 block">
            Token #{current.storageToken}
          </span>
          <div className="mt-3 pt-2 border-t border-stone-200 text-[11px]">
            {current.rejected ? (
              <span className="text-red-700 font-bold flex items-center gap-1">
                <XCircle size={12} /> Stale Token 41 REJECTED!
              </span>
            ) : (
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <CheckCircle2 size={12} /> Ready for writes &gt; {current.storageToken}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DISPATCHER COMPONENT FOR MODULE 11 DIAGRAMS
 * ---------------------------------------------------------------------------
 */
export function VisualDiagramComponentModule11({ diagramId }) {
  switch (diagramId) {
    case "split-brain":
      return <SplitBrainHazardDiagram />;
    case "raft-lifecycle":
      return <RaftStateLifecycleDiagram />;
    case "raft-replication":
      return <RaftLogReplicationDiagram />;
    case "fencing-token":
      return <FencingTokenSequenceDiagram />;
    default:
      return <SplitBrainHazardDiagram />;
  }
}
