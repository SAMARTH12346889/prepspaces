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
  Flame,
  Clock,
  Key,
  Unlock,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  SplitBrainHazardDiagram,
  RaftStateLifecycleDiagram,
  RaftLogReplicationDiagram,
  FencingTokenSequenceDiagram,
  VisualDiagramComponentModule11,
} from "./SystemDesignConsensusDiagrams";

export default function SystemDesignConsensus() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "simulators" | "qa" | "project" | "assessment" | "reading"
  const [activeWeek, setActiveWeek] = useState(1); // 1 | 2 | 3
  const [activeLesson, setActiveLesson] = useState("11.1");

  // Expanded Q&A accordion states
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 1: 5-NODE RAFT CLUSTER & PARTITION SIMULATOR
  // ---------------------------------------------------------------------------
  const [nodes, setNodes] = useState([
    { id: "A", role: "leader", term: 1, alive: true, partition: "main" },
    { id: "B", role: "follower", term: 1, alive: true, partition: "main" },
    { id: "C", role: "follower", term: 1, alive: true, partition: "main" },
    { id: "D", role: "follower", term: 1, alive: true, partition: "main" },
    { id: "E", role: "follower", term: 1, alive: true, partition: "main" },
  ]);
  const [currentClusterTerm, setCurrentClusterTerm] = useState(1);
  const [partitionScenario, setPartitionScenario] = useState("none"); // "none" | "split32" | "isolateA"

  const toggleNodeAlive = (nodeId) => {
    setNodes((prev) =>
      prev.map((n) => {
        if (n.id === nodeId) {
          const newAlive = !n.alive;
          return {
            ...n,
            alive: newAlive,
            role: newAlive ? (n.role === "leader" ? "follower" : n.role) : "dead",
          };
        }
        return n;
      })
    );
  };

  const handleApplyPartition = (scenario) => {
    setPartitionScenario(scenario);
    if (scenario === "none") {
      setNodes((prev) => prev.map((n) => ({ ...n, partition: "main" })));
    } else if (scenario === "split32") {
      // Group 1: A, B (minority 2), Group 2: C, D, E (majority 3)
      setNodes((prev) =>
        prev.map((n) => {
          if (n.id === "A" || n.id === "B") {
            return { ...n, partition: "minority" };
          }
          return { ...n, partition: "majority" };
        })
      );
    } else if (scenario === "isolateA") {
      // Isolate A alone, B, C, D, E together
      setNodes((prev) =>
        prev.map((n) => {
          if (n.id === "A") {
            return { ...n, partition: "isolated" };
          }
          return { ...n, partition: "main" };
        })
      );
    }
  };

  const triggerElection = (candidateId) => {
    const candidate = nodes.find((n) => n.id === candidateId);
    if (!candidate || !candidate.alive) return;

    const newTerm = currentClusterTerm + 1;
    setCurrentClusterTerm(newTerm);

    // Count alive voters in the same network partition
    const peerVoters = nodes.filter(
      (n) => n.alive && n.partition === candidate.partition
    );
    const votesCount = peerVoters.length;
    const majorityRequired = Math.floor(nodes.length / 2) + 1; // 3 out of 5
    const wonElection = votesCount >= majorityRequired;

    setNodes((prev) =>
      prev.map((n) => {
        if (!n.alive) return n;
        if (n.partition === candidate.partition) {
          if (n.id === candidateId) {
            return {
              ...n,
              role: wonElection ? "leader" : "candidate",
              term: newTerm,
            };
          }
          return {
            ...n,
            role: "follower",
            term: newTerm,
          };
        }
        return n;
      })
    );
  };

  const resetRaftCluster = () => {
    setPartitionScenario("none");
    setCurrentClusterTerm(1);
    setNodes([
      { id: "A", role: "leader", term: 1, alive: true, partition: "main" },
      { id: "B", role: "follower", term: 1, alive: true, partition: "main" },
      { id: "C", role: "follower", term: 1, alive: true, partition: "main" },
      { id: "D", role: "follower", term: 1, alive: true, partition: "main" },
      { id: "E", role: "follower", term: 1, alive: true, partition: "main" },
    ]);
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 2: FENCING TOKEN & LEASE RUNNER
  // ---------------------------------------------------------------------------
  const [fencingTokenCurrent, setFencingTokenCurrent] = useState(41);
  const [highestResourceToken, setHighestResourceToken] = useState(40);
  const [workerAStatus, setWorkerAStatus] = useState("active"); // "active" | "paused" | "expired"
  const [workerBStatus, setWorkerBStatus] = useState("standby"); // "standby" | "active"
  const [auditLog, setAuditLog] = useState([
    { token: 40, worker: "Worker 0", action: "Initial setup write", result: "Accepted" },
  ]);

  const handleWorkerAPause = () => {
    setWorkerAStatus("paused");
  };

  const handleLeaseExpireAndPromoteB = () => {
    const newToken = fencingTokenCurrent + 1;
    setFencingTokenCurrent(newToken);
    setWorkerAStatus("expired");
    setWorkerBStatus("active");
  };

  const handleWorkerBWrite = () => {
    const token = fencingTokenCurrent;
    if (token > highestResourceToken) {
      setHighestResourceToken(token);
      setAuditLog((prev) => [
        { token, worker: "Worker B", action: "Report write submitted", result: "Accepted (Safe)" },
        ...prev,
      ]);
    }
  };

  const handleWorkerALateWrite = () => {
    const token = 41; // Worker A's old token
    if (token < highestResourceToken) {
      setAuditLog((prev) => [
        {
          token,
          worker: "Worker A",
          action: "Late write attempt",
          result: `REJECTED (Stale token: ${token} < ${highestResourceToken})`,
        },
        ...prev,
      ]);
    } else {
      setAuditLog((prev) => [
        { token, worker: "Worker A", action: "Late write attempt", result: "Accepted (Hazard!)" },
        ...prev,
      ]);
    }
  };

  const resetFencingSimulator = () => {
    setFencingTokenCurrent(41);
    setHighestResourceToken(40);
    setWorkerAStatus("active");
    setWorkerBStatus("standby");
    setAuditLog([
      { token: 40, worker: "Worker 0", action: "Initial setup write", result: "Accepted" },
    ]);
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 3: PREPSPACES DECISION MATRIX FILTER
  // ---------------------------------------------------------------------------
  const [matrixFilter, setMatrixFilter] = useState("all");

  const matrixWorkloads = [
    {
      id: "cache",
      workload: "Regenerating Inexpensive Dashboard Cache",
      category: "cache",
      strength: "Idempotency & Duplicate Tolerance",
      rationale:
        "Duplicate concurrent computation is harmless and only wastes minor CPU. A global leader is an unnecessary bottleneck.",
      mechanism: "Redis key with SET NX EX + background recalculation",
      recommendedTool: "Redis Distributed Lock or In-Memory Debounce",
    },
    {
      id: "report",
      workload: "Scheduled Daily Report Generation",
      category: "jobs",
      strength: "Durable Ownership & Stale-Owner Protection",
      rationale:
        "A long-running report generator may freeze under GC pauses. Fencing tokens protect against zombie workers overwriting new reports.",
      mechanism: "Lease renewal heartbeat + Monotonic fencing token on DB storage row",
      recommendedTool: "etcd Lock Lease or Kubernetes Lease Object",
    },
    {
      id: "interview",
      workload: "Interview Score Finalization & Grading",
      category: "interview",
      strength: "Conditional State Transition & Deduplication",
      rationale:
        "Score finalization is resource-specific (one interview). Requires atomic transition: IN_PROGRESS -> FINALIZING -> COMPLETED.",
      mechanism: "Optimistic Concurrency Control (OCC) with version number + Idempotency-Key",
      recommendedTool: "PostgreSQL row-level lock or DynamoDB conditional write",
    },
    {
      id: "maintenance",
      workload: "Platform-Wide Database Schema Maintenance",
      category: "platform",
      strength: "Consensus-Backed Leader Election & Coordination",
      rationale:
        "Only one active coordinator may alter platform schema or dispatch rolling migrations across cluster replicas.",
      mechanism: "Strict Raft consensus leader election with session keep-alives",
      recommendedTool: "etcd / ZooKeeper leader election recipe",
    },
    {
      id: "config",
      workload: "Global Feature Flag & Runtime Config Updates",
      category: "platform",
      strength: "Versioned Authoritative Consensus Store",
      rationale:
        "All platform backend instances must agree on an ordered log of accepted configuration revisions to prevent split configurations.",
      mechanism: "Replicated log consensus with revision number watches",
      recommendedTool: "etcd / Consul Key-Value Store with revision watches",
    },
  ];

  const filteredWorkloads = useMemo(() => {
    if (matrixFilter === "all") return matrixWorkloads;
    return matrixWorkloads.filter((w) => w.category === matrixFilter);
  }, [matrixFilter]);

  // ---------------------------------------------------------------------------
  // LAB CHECKLIST TRACKER (Phase 1 through 5)
  // ---------------------------------------------------------------------------
  const [labChecklist, setLabChecklist] = useState({
    phase1_states: true,
    phase1_election: true,
    phase2_partitions: false,
    phase3_fencing: false,
    phase4_tests: false,
    phase5_report: false,
    phase5_observability: false,
  });

  const toggleChecklist = (key) => {
    setLabChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // ---------------------------------------------------------------------------
  // ASSESSMENT QUIZ STATE
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Why does a heartbeat timeout not prove that a server has crashed?",
      options: [
        "A. Because heartbeats are always encrypted.",
        "B. Because network delays and slow processing can also cause missing responses.",
        "C. Because a follower is always the leader.",
        "D. Because a quorum does not use messages.",
      ],
      correct: 1, // B
      explanation:
        "In asynchronous distributed networks, silence is inherently ambiguous. A missing heartbeat can mean the node crashed, the network dropped or delayed packets, the node is slow, or it is experiencing a Stop-the-World garbage collection freeze.",
    },
    {
      id: 2,
      question: "In a five-voter, majority-based cluster, what is the minimum quorum?",
      options: ["A. 1", "B. 2", "C. 3", "D. 5"],
      correct: 2, // C
      explanation:
        "The strict majority quorum formula is Q = ⌊N/2⌋ + 1. For N = 5 voting nodes, Q = ⌊5/2⌋ + 1 = 2 + 1 = 3 nodes.",
    },
    {
      id: 3,
      question: "What is the purpose of the term in Raft?",
      options: [
        "A. To compress the log.",
        "B. To identify an election epoch and help reject stale leadership information.",
        "C. To replace replication.",
        "D. To guarantee every client request succeeds immediately.",
      ],
      correct: 1, // B
      explanation:
        "Raft terms act as logical clocks (epochs). They allow nodes to detect obsolete information such as stale leaders or candidates from previous election rounds. Any node discovering a higher term immediately updates its currentTerm and steps down.",
    },
    {
      id: 4,
      question: "When should a replicated log entry be treated as committed?",
      options: [
        "A. As soon as any single node appends it locally.",
        "B. As soon as any client sends the request.",
        "C. When the applicable consensus protocol's commitment conditions have been satisfied.",
        "D. Only when all network messages in the cluster have permanently stopped.",
      ],
      correct: 2, // C
      explanation:
        "Merely appending a log entry locally does not guarantee it will survive leader crashes. In Raft, an entry is committed only when it has been replicated across a majority quorum of voting nodes under the current leader's term.",
    },
    {
      id: 5,
      question: "What is the main purpose of a fencing token?",
      options: [
        "A. To encrypt the network.",
        "B. To reject operations from older owners after a newer ownership epoch has been accepted.",
        "C. To make elections unnecessary.",
        "D. To guarantee that a process never pauses.",
      ],
      correct: 1, // B
      explanation:
        "A fencing token is a monotonically increasing counter issued with lock acquisition. The receiving storage service checks that the token on incoming writes is >= its highest accepted token, rejecting delayed writes from zombie or stalled former owners.",
    },
    {
      id: 6,
      question: "Why can a lease alone be insufficient for protecting a resource?",
      options: [
        "A. Because a process whose lease expired can resume and issue a delayed write.",
        "B. Because leases cannot be renewed.",
        "C. Because leases are database indexes.",
        "D. Because leaders cannot perform writes.",
      ],
      correct: 0, // A
      explanation:
        "A lease sets a time window for ownership, but cannot physically stop a stalled worker from continuing to run. If worker A pauses for 20 seconds, its lease expires and worker B takes over; when worker A wakes up, it may send an outdated write that corrupts worker B's state without fencing.",
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
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-12 left-1/3 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-12 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 md:px-8 pt-6">
        {/* Universal Module Navigation Bar */}
        <ModuleNav
          track="system-design"
          currentModuleId="consensus"
          aiTutorLabel="Ask Nova about Consensus"
        />

        {/* Hero Section */}
        <div className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-700 mb-2">
                <Vote size={13} className="text-[#f97316]" />
                <span>System Design Masterclass · Module 11</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">
                Consensus, Leader Election, and Coordination
              </h1>
              <p className="mt-2 max-w-3xl text-xs sm:text-sm text-stone-600 leading-relaxed">
                How distributed servers reach agreement under partial failures, network partitions, and clock drift.
                Explore Paxos, Raft, majority quorums (\(Q = \lfloor N/2 \rfloor + 1\)), term epochs, split-brain hazards,
                leases, and Martin Kleppmann fencing tokens.
              </p>
            </div>

            {/* Quick Metadata Pill */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-xl bg-[#faf8f4] border border-stone-200 font-bold text-stone-700">
                Duration: 3 Weeks (40–50 hrs)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200 font-bold text-orange-700">
                Core: Raft · Quorums · Fencing
              </span>
            </div>
          </div>

          {/* Quick Stats / Summary Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Majority Quorum
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">
                \(Q = \lfloor N/2 \rfloor + 1\)
              </span>
              <span className="text-[11px] text-stone-500">Overlapping majorities</span>
            </div>
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Consensus Protocols
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">Paxos &amp; Raft</span>
              <span className="text-[11px] text-stone-500">Replicated state machines</span>
            </div>
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Coordination Layers
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">4 Key Facets</span>
              <span className="text-[11px] text-stone-500">Agreement · Lock · Fence</span>
            </div>
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Production Engines
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">etcd · K8s · ZK</span>
              <span className="text-[11px] text-stone-500">ZooKeeper &amp; Consul</span>
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

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CURRICULUM & LESSONS                                        */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            {/* Week Selection Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wide">
                  Study Timeline:
                </span>
                {[
                  { week: 1, title: "Week 1: Coordination Challenges & Consensus Foundations" },
                  { week: 2, title: "Week 2: Leader Election, Paxos & Raft Deep Dive" },
                  { week: 3, title: "Week 3: Locks, Leases, Fencing & Production Systems" },
                ].map((w) => (
                  <button
                    key={w.week}
                    type="button"
                    onClick={() => setActiveWeek(w.week)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      activeWeek === w.week
                        ? "bg-stone-900 text-white"
                        : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    Week {w.week}
                  </button>
                ))}
              </div>
              <span className="text-xs font-mono text-orange-600 font-bold">
                {activeWeek === 1
                  ? "5 Lessons · Foundations & Quorums"
                  : activeWeek === 2
                  ? "7 Lessons · Raft Protocols & Elections"
                  : "6 Lessons · Fencing & PrepSpaces Design"}
              </span>
            </div>

            {/* WEEK 1 LESSONS */}
            {activeWeek === 1 && (
              <div className="space-y-6">
                {/* Lesson 11.1 */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 11.1 · Distributed Fault Models
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-stone-100 text-[11px] font-mono text-stone-600 font-semibold">
                      Foundations
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    The Unreliable Network Problem: Why Silence Is Not Dead
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    Suppose PrepSpaces runs on five servers. Server A currently owns a scheduled report job,
                    while B and C are standbys. Server B sends a heartbeat to A, but receives no response within
                    its timeout window. In an asynchronous network, Server B cannot determine what happened:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4 text-xs">
                    <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <strong className="text-stone-900 block mb-1">A Crashed:</strong>
                      <span className="text-stone-600">A has halted execution completely. Safe to promote B if verified.</span>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <strong className="text-stone-900 block mb-1">A Is Slow / Stalled:</strong>
                      <span className="text-stone-600">A is paused under a garbage collection freeze; may wake up and execute.</span>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <strong className="text-stone-900 block mb-1">Network Severed:</strong>
                      <span className="text-stone-600">A cannot reach B, but A can still talk to the shared database!</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <strong>Engineering Takeaway:</strong> In distributed systems, a missing response merely signals suspicion.
                    Treating a local heartbeat timeout alone as definitive proof that an old worker cannot act leads to dual-leader
                    data corruption.
                  </p>
                </div>

                {/* Lesson 11.2 */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 11.2 · Partition Hazards
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-red-100 text-[11px] font-mono text-red-700 font-semibold">
                      Split-Brain
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    The Split-Brain Problem &amp; Dual-Leader Storage Corruption
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    Split-brain occurs when a network partition divides a cluster into isolated groups, and multiple nodes
                    behave as though each has exclusive leadership authority. Both continue accepting writes and mutating
                    shared storage or triggering external side effects.
                  </p>

                  <div className="my-6">
                    <SplitBrainHazardDiagram />
                  </div>

                  <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/70 text-xs sm:text-sm text-stone-800 leading-relaxed">
                    <strong className="text-amber-900 block mb-1">AWS Engineering Principle:</strong>
                    A leader election mechanism alone is not enough to prevent two processes from interfering with one another.
                    A safe distributed architecture must enforce ownership at the resource being modified through fencing tokens
                    or conditional checks.
                  </div>
                </div>

                {/* Lesson 11.3 */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 11.3 · Taxonomy of Coordination
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-stone-100 text-[11px] font-mono text-stone-600 font-semibold">
                      Architecture
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    Coordination Involves Four Distinct Problems
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    Engineers often conflate consensus, leader election, locking, and fencing. They are connected, but each
                    addresses a distinct requirement:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-[#e7e3da] bg-[#faf8f4]">
                          <th className="p-3 font-bold text-stone-900">Coordination Problem</th>
                          <th className="p-3 font-bold text-stone-900">Core Question Answered</th>
                          <th className="p-3 font-bold text-stone-900">Primary Mechanism</th>
                          <th className="p-3 font-bold text-stone-900">Failure When Missing</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        <tr>
                          <td className="p-3 font-bold text-orange-600">1. Agreement</td>
                          <td className="p-3 text-stone-700">Which decision or value is accepted?</td>
                          <td className="p-3 font-mono text-stone-600">Consensus Protocol (Raft/Paxos)</td>
                          <td className="p-3 text-red-600">Divergent conflicting state</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">2. Leadership</td>
                          <td className="p-3 text-stone-700">Which node coordinates active work?</td>
                          <td className="p-3 font-mono text-stone-600">Leader Election (Epochs/Terms)</td>
                          <td className="p-3 text-red-600">Duplicate coordinators</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">3. Ownership</td>
                          <td className="p-3 text-stone-700">Which client currently owns a resource?</td>
                          <td className="p-3 font-mono text-stone-600">Distributed Lock / Lease</td>
                          <td className="p-3 text-red-600">Concurrent uncoordinated work</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">4. Enforcement</td>
                          <td className="p-3 text-stone-700">Can a stale owner still modify the resource?</td>
                          <td className="p-3 font-mono text-stone-600">Fencing Token / OCC Check</td>
                          <td className="p-3 text-red-600">Zombie overwrite of fresh data</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Lesson 11.4 & 11.5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Lesson 11.4 */}
                  <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-orange-600 block mb-2">
                        Lesson 11.4 · Theory
                      </span>
                      <h4 className="font-bold text-stone-900 text-base mb-2">
                        Consensus Core Invariants &amp; FLP Impossibility
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed mb-3">
                        A correct consensus protocol satisfies three core properties:
                      </p>
                      <ul className="space-y-1.5 text-xs text-stone-600 mb-4">
                        <li className="flex items-start gap-1.5">
                          <CheckCircle2 size={13} className="text-orange-600 shrink-0 mt-0.5" />
                          <span><strong>Agreement:</strong> Two correct nodes never decide conflicting values (Safety).</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <CheckCircle2 size={13} className="text-orange-600 shrink-0 mt-0.5" />
                          <span><strong>Validity:</strong> Decided value must have been proposed by a participant (Safety).</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <CheckCircle2 size={13} className="text-orange-600 shrink-0 mt-0.5" />
                          <span><strong>Termination:</strong> All non-faulty nodes eventually decide (Liveness).</span>
                        </li>
                      </ul>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        <strong>The FLP Impossibility Result (1985):</strong> Proves that in an asynchronous network, no deterministic
                        consensus protocol can guarantee termination if even a single process can crash. Raft sidesteps this using
                        randomized election timeouts.
                      </p>
                    </div>
                  </div>

                  {/* Lesson 11.5 */}
                  <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-orange-600 block mb-2">
                        Lesson 11.5 · Quorums Math
                      </span>
                      <h4 className="font-bold text-stone-900 text-base mb-2">
                        Majority Quorums: Why Overlapping Majorities Matter
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed mb-3">
                        For a cluster of \(N\) voting nodes, the strict majority quorum is:
                      </p>
                      <div className="p-3 rounded-xl bg-[#faf8f4] border border-stone-200 text-center font-mono text-sm font-bold text-stone-900 mb-3">
                        {"Q = ⌊N / 2⌋ + 1"}
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs mb-3">
                        <div className="p-2 rounded-lg bg-stone-100 font-mono">
                          <span className="text-stone-400 block text-[10px]">Nodes (N)</span>
                          <strong className="text-stone-900">3 | 5 | 7</strong>
                        </div>
                        <div className="p-2 rounded-lg bg-orange-100 font-mono">
                          <span className="text-orange-700 block text-[10px]">Quorum (Q)</span>
                          <strong className="text-orange-900">2 | 3 | 4</strong>
                        </div>
                        <div className="p-2 rounded-lg bg-emerald-100 font-mono">
                          <span className="text-emerald-700 block text-[10px]">Failures</span>
                          <strong className="text-emerald-900">1 | 2 | 3</strong>
                        </div>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Any two strict majorities of the same fixed group <strong>must overlap</strong> by at least one node.
                        This prevents competing majorities from committing divergent logs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WEEK 2 LESSONS */}
            {activeWeek === 2 && (
              <div className="space-y-6">
                {/* Lesson 11.6 */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 11.6 · Leader Lifecycle
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-stone-100 text-[11px] font-mono text-stone-600 font-semibold">
                      Heartbeats &amp; Epochs
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    Terms, Heartbeats, and Randomized Election Timeouts
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    In leader-based consensus, heartbeats maintain leadership authority, terms act as logical epoch clocks,
                    and election timeouts trigger replacements when leaders fail.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs mb-4">
                    <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <strong className="text-stone-900 block mb-0.5">Heartbeat</strong>
                      <span className="text-stone-600">Periodic message sent by leader (e.g. every 50ms) to reset follower election timers.</span>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <strong className="text-stone-900 block mb-0.5">Election Timeout</strong>
                      <span className="text-stone-600">Follower waits 150ms–300ms without heartbeat before becoming a candidate.</span>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <strong className="text-stone-900 block mb-0.5">Term Epoch</strong>
                      <span className="text-stone-600">Monotonically increasing number distinguishing election rounds and invalidating stale leaders.</span>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <strong className="text-stone-900 block mb-0.5">Randomization</strong>
                      <span className="text-stone-600">Randomized timer spreads out candidate campaigns, preventing endless split-vote ties.</span>
                    </div>
                  </div>
                </div>

                {/* Lesson 11.8 & Diagram 2 */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 11.8 · Raft State Machine
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-orange-100 text-[11px] font-mono text-orange-700 font-semibold">
                      Finite State Machine
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    The Three Raft Roles: Follower, Candidate, and Leader
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    Raft breaks consensus down into understandable subproblems: leader election, log replication, and safety.
                    Nodes transition between three distinct roles:
                  </p>

                  <div className="my-6">
                    <RaftStateLifecycleDiagram />
                  </div>
                </div>

                {/* Lesson 11.10 & Diagram 3 */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 11.10 · Replicated State Machines
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-[11px] font-mono text-emerald-800 font-semibold">
                      Commit Rules
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    Replicated Logs and the Meaning of a Committed Entry
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    Local presence in memory is not commitment. An entry is committed only when it has been replicated across
                    a majority of replicas under the current leader's term. Replicas apply committed entries in strict log order.
                  </p>

                  <div className="my-6">
                    <RaftLogReplicationDiagram />
                  </div>

                  <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] text-xs sm:text-sm text-stone-700">
                    <strong className="text-stone-900 block mb-1">Crucial Architectural Insight:</strong>
                    Consensus over a replicated log does not make external operations (e.g., Stripe charges, email notifications)
                    automatically idempotent. You still require idempotency keys, two-phase commits, or outbox queues.
                  </div>
                </div>

                {/* Lesson 11.12: Paxos vs Raft Table */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 11.12 · Comparative Analysis
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-stone-100 text-[11px] font-mono text-stone-600 font-semibold">
                      Paxos vs Raft
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    Paxos vs. Raft: Conceptual &amp; Operational Comparison
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-[#e7e3da] bg-[#faf8f4]">
                          <th className="p-3 font-bold text-stone-900">Dimension</th>
                          <th className="p-3 font-bold text-stone-900">Paxos</th>
                          <th className="p-3 font-bold text-stone-900">Raft</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        <tr>
                          <td className="p-3 font-bold text-stone-800">Main Framing</td>
                          <td className="p-3 text-stone-600">Agreement on individual proposed values</td>
                          <td className="p-3 text-stone-600">Replicated log managed by an explicit leader</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-800">Learning Structure</td>
                          <td className="p-3 text-stone-600">Proposer, promise, and acceptance rules</td>
                          <td className="p-3 text-stone-600">Separated: elections, terms, log replication, safety</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-800">Leadership</td>
                          <td className="p-3 text-stone-600">Variants use stable leader (Multi-Paxos)</td>
                          <td className="p-3 text-stone-600">Leader is an explicit, mandatory protocol role</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-800">Operational Focus</td>
                          <td className="p-3 text-stone-600">Extremely powerful; notoriously hard to implement</td>
                          <td className="p-3 text-stone-600">Explicit structure designed for understandable systems</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-800">Shared Fundamental</td>
                          <td className="p-3 text-stone-600" colSpan={2}>
                            Overlapping majorities constrain future terms from rewriting committed history.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* WEEK 3 LESSONS */}
            {activeWeek === 3 && (
              <div className="space-y-6">
                {/* Lesson 11.13 & 11.14 */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 11.13 &amp; 11.14 · Distributed Locking Pitfalls
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-red-100 text-[11px] font-mono text-red-700 font-semibold">
                      Lease Expiry
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    Leader Election Is Not the Same as Distributed Locking
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    <strong>Leader Election:</strong> Answers <em>which participant is currently the leader of this group</em>.
                    <br />
                    <strong>Distributed Locking:</strong> Answers <em>which worker currently owns an exclusive lock on a specific job</em>.
                  </p>

                  <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] text-xs sm:text-sm text-stone-700 space-y-2 mb-4">
                    <p>
                      <strong>The Report Generation Hazard:</strong> Worker A acquires a 10-second lease to generate a daily report.
                      Worker A is paused by a 15-second garbage collection freeze. The lease expires. Worker B acquires the lock
                      and starts generating the report. Worker A wakes up unaware of the pause and writes its old output.
                    </p>
                    <p className="text-red-700 font-bold">
                      A lease alone does not physically stop an old owner from executing delayed writes.
                    </p>
                  </div>
                </div>

                {/* Lesson 11.15 & Diagram 4 */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 11.15 · Martin Kleppmann Fencing
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-[11px] font-mono text-emerald-800 font-semibold">
                      Fencing Tokens
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    Fencing Tokens: Enforcing Ownership at the Storage Layer
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    A fencing token is a monotonically increasing ownership counter issued whenever a lock is granted.
                    The resource being modified checks incoming tokens: if an incoming write has a token lower than the
                    highest token it has accepted, the write is <strong>rejected</strong>.
                  </p>

                  <div className="my-6">
                    <FencingTokenSequenceDiagram />
                  </div>
                </div>

                {/* Lesson 11.16: Coordination Tools */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 11.16 · Practical Systems
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-stone-100 text-[11px] font-mono text-stone-600 font-semibold">
                      Production Tooling
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    Coordination Systems in Practice: etcd, ZooKeeper, Consul &amp; K8s Leases
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-[11px] font-bold text-orange-600 mb-1">etcd (Raft)</div>
                        <h4 className="font-bold text-stone-900 text-sm mb-1.5">Kubernetes State Store</h4>
                        <p className="text-stone-600">
                          Provides concurrency APIs, lease keep-alive heartbeats, and leader election campaigning recipes.
                        </p>
                      </div>
                      <span className="mt-3 text-[10px] text-stone-400 font-mono">Use: K8s control plane, config</span>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-[11px] font-bold text-orange-600 mb-1">Apache ZooKeeper (ZAB)</div>
                        <h4 className="font-bold text-stone-900 text-sm mb-1.5">Kafka / Hadoop Sync</h4>
                        <p className="text-stone-600">
                          Hierarchical node store with ephemeral nodes and sequence numbers to avoid herd effect election storms.
                        </p>
                      </div>
                      <span className="mt-3 text-[10px] text-stone-400 font-mono">Use: Kafka legacy, Hadoop, HBase</span>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-[11px] font-bold text-orange-600 mb-1">HashiCorp Consul (Raft)</div>
                        <h4 className="font-bold text-stone-900 text-sm mb-1.5">Service Mesh Discovery</h4>
                        <p className="text-stone-600">
                          Sessions, key-value lock acquire/release, and blocking watches across multi-datacenter topologies.
                        </p>
                      </div>
                      <span className="mt-3 text-[10px] text-stone-400 font-mono">Use: Service discovery, KV config</span>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-[11px] font-bold text-orange-600 mb-1">Kubernetes Leases</div>
                        <h4 className="font-bold text-stone-900 text-sm mb-1.5">Native Control Plane</h4>
                        <p className="text-stone-600">
                          Standardized coordination objects in <code>coordination.k8s.io</code> using optimistic concurrency control.
                        </p>
                      </div>
                      <span className="mt-3 text-[10px] text-stone-400 font-mono">Use: Controller manager leader election</span>
                    </div>
                  </div>
                </div>

                {/* Lesson 11.18: PrepSpaces Application */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 11.18 · PrepSpaces Application
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-stone-100 text-[11px] font-mono text-stone-600 font-semibold">
                      Production Architecture
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    Applying Consensus and Coordination to PrepSpaces
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                      <span className="font-mono text-[10px] font-bold text-orange-600 block mb-1">Use Case A</span>
                      <h4 className="font-bold text-stone-900 text-sm mb-1">Scheduled Report Generation</h4>
                      <p className="text-stone-600 mb-2">
                        Only one worker should own a daily analytics task at a time.
                      </p>
                      <ul className="space-y-1 text-stone-500">
                        <li>• Durable task record with unique <code>taskId</code></li>
                        <li>• Leased claim with heartbeat renewal</li>
                        <li>• Monotonic fencing token checked by database</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                      <span className="font-mono text-[10px] font-bold text-orange-600 block mb-1">Use Case B</span>
                      <h4 className="font-bold text-stone-900 text-sm mb-1">Interview Score Finalization</h4>
                      <p className="text-stone-600 mb-2">
                        Final score report must never be overwritten by stale retries.
                      </p>
                      <ul className="space-y-1 text-stone-500">
                        <li>• State machine: IN_PROGRESS → FINALIZING → COMPLETED</li>
                        <li>• Conditional update with version check</li>
                        <li>• Idempotency key deduplication</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE SIMULATORS                                      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "simulators" && (
          <div className="space-y-8">
            {/* Simulator 1: 5-Node Raft Cluster */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                    Interactive Lab 1
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    5-Node Raft Cluster &amp; Network Partition Simulator
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Simulate node crashes, trigger candidate elections, split network into 3v2 partitions, and observe quorum voting rules.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={resetRaftCluster}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer"
                  >
                    <RotateCcw size={13} />
                    <span>Reset Cluster</span>
                  </button>
                </div>
              </div>

              {/* Controls Toolbar */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs font-bold text-stone-700 mr-2">Network Partition:</span>
                <button
                  type="button"
                  onClick={() => handleApplyPartition("none")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    partitionScenario === "none"
                      ? "bg-emerald-600 text-white"
                      : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  Healthy (Full Mesh)
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyPartition("split32")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    partitionScenario === "split32"
                      ? "bg-red-600 text-white"
                      : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  Split: {`{A, B} vs {C, D, E}`} (3 vs 2)
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyPartition("isolateA")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    partitionScenario === "isolateA"
                      ? "bg-amber-600 text-white"
                      : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  Isolate Leader A
                </button>
              </div>

              {/* Nodes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-6">
                {nodes.map((node) => {
                  const isLeader = node.role === "leader";
                  const isDead = !node.alive;
                  return (
                    <div
                      key={node.id}
                      className={`p-4 rounded-2xl border text-center transition flex flex-col justify-between ${
                        isDead
                          ? "border-stone-200 bg-stone-100 opacity-60"
                          : isLeader
                          ? "border-orange-400 bg-orange-50 shadow-xs"
                          : "border-stone-200 bg-white"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono font-bold text-stone-900 text-sm">
                            Node {node.id}
                          </span>
                          <span
                            className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase font-mono ${
                              node.partition === "minority"
                                ? "bg-red-100 text-red-700"
                                : node.partition === "majority"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-stone-100 text-stone-600"
                            }`}
                          >
                            {node.partition}
                          </span>
                        </div>

                        <div className="my-2">
                          <span
                            className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                              isDead
                                ? "bg-stone-200 text-stone-600"
                                : isLeader
                                ? "bg-orange-600 text-white"
                                : node.role === "candidate"
                                ? "bg-amber-500 text-white"
                                : "bg-stone-100 text-stone-700"
                            }`}
                          >
                            {isDead ? "DEAD" : node.role}
                          </span>
                        </div>
                        <div className="text-[11px] font-mono text-stone-500">
                          Term: <strong>{node.term}</strong>
                        </div>
                      </div>

                      <div className="mt-4 pt-2 border-t border-stone-200/70 space-y-1.5">
                        <button
                          type="button"
                          onClick={() => toggleNodeAlive(node.id)}
                          className="w-full py-1 rounded text-[10px] font-bold border border-stone-200 bg-white hover:bg-stone-50 cursor-pointer"
                        >
                          {node.alive ? "Kill Node" : "Reboot Node"}
                        </button>
                        {node.alive && (
                          <button
                            type="button"
                            onClick={() => triggerElection(node.id)}
                            className="w-full py-1 rounded text-[10px] font-bold bg-[#f97316] text-white hover:bg-[#ea580c] cursor-pointer"
                          >
                            Campaign
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Status Banner */}
              <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] flex items-center justify-between flex-wrap gap-3 text-xs">
                <div>
                  <span className="font-bold text-stone-900 block">
                    Current Cluster State: Term #{currentClusterTerm}
                  </span>
                  <span className="text-stone-600">
                    Majority Quorum threshold: <strong>3 out of 5 voting nodes</strong>. Nodes in minority partition cannot elect a leader or commit entries.
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-orange-600">
                  {nodes.filter((n) => n.alive).length} / 5 nodes alive
                </span>
              </div>
            </div>

            {/* Simulator 2: Martin Kleppmann Fencing Simulator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                    Interactive Lab 2
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    Fencing Token &amp; Lease Pause Simulator
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Test the classic distributed locking hazard: pause Worker A, grant Worker B Token 42, and test Worker A's stale write rejection.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetFencingSimulator}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer"
                >
                  <RotateCcw size={13} />
                  <span>Reset Fencing Lab</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Worker A */}
                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-xs text-stone-900">Worker A</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-stone-200 text-stone-700">
                      Token #41
                    </span>
                  </div>
                  <span className="text-xs text-stone-600 block mb-3">Status: <strong>{workerAStatus}</strong></span>
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={handleWorkerAPause}
                      disabled={workerAStatus !== "active"}
                      className="w-full py-1.5 bg-amber-600 text-white rounded-lg text-xs font-bold disabled:opacity-40 cursor-pointer"
                    >
                      1. Trigger 15s GC Pause
                    </button>
                    <button
                      type="button"
                      onClick={handleWorkerALateWrite}
                      disabled={workerAStatus === "active"}
                      className="w-full py-1.5 bg-red-600 text-white rounded-lg text-xs font-bold disabled:opacity-40 cursor-pointer"
                    >
                      3. Resume &amp; Send Write (Token 41)
                    </button>
                  </div>
                </div>

                {/* Lock Service & Worker B */}
                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-xs text-stone-900">Worker B &amp; Lock Service</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-stone-200 text-stone-700">
                      Token #{fencingTokenCurrent}
                    </span>
                  </div>
                  <span className="text-xs text-stone-600 block mb-3">Status: <strong>{workerBStatus}</strong></span>
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={handleLeaseExpireAndPromoteB}
                      disabled={workerAStatus !== "paused"}
                      className="w-full py-1.5 bg-[#f97316] text-white rounded-lg text-xs font-bold disabled:opacity-40 cursor-pointer"
                    >
                      2. Expire Lease &amp; Grant Token 42 to B
                    </button>
                    <button
                      type="button"
                      onClick={handleWorkerBWrite}
                      disabled={workerBStatus !== "active"}
                      className="w-full py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold disabled:opacity-40 cursor-pointer"
                    >
                      Write Report from B (Token 42)
                    </button>
                  </div>
                </div>

                {/* Target Storage */}
                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-xs text-stone-900">Storage Service</span>
                    <Database size={16} className="text-orange-600" />
                  </div>
                  <span className="text-xs text-stone-600 block">Enforced Guard Token:</span>
                  <span className="text-xl font-mono font-black text-stone-900 block my-1">
                    Token #{highestResourceToken}
                  </span>
                  <span className="text-[11px] text-stone-500">
                    Rejects any incoming write with token &lt; {highestResourceToken}.
                  </span>
                </div>
              </div>

              {/* Audit Log */}
              <div className="border-t border-[#e7e3da] pt-4">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wide block mb-2">
                  Storage Fencing Audit Log
                </span>
                <div className="space-y-1.5 max-h-40 overflow-y-auto font-mono text-xs">
                  {auditLog.map((log, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-between"
                    >
                      <span className="text-stone-700">
                        [{log.worker}] {log.action} (Token #{log.token})
                      </span>
                      <span
                        className={
                          log.result.includes("REJECTED")
                            ? "text-red-700 font-bold"
                            : "text-emerald-700 font-bold"
                        }
                      >
                        {log.result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulator 3: PrepSpaces Workload Matrix */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                    Interactive Lab 3
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    PrepSpaces Coordination Decision Matrix
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Explore coordination strength requirements across platform operations.
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  {[
                    { id: "all", label: "All Workloads" },
                    { id: "jobs", label: "Scheduled Jobs" },
                    { id: "interview", label: "Interviews" },
                    { id: "platform", label: "Platform" },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      type="button"
                      onClick={() => setMatrixFilter(btn.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                        matrixFilter === btn.id
                          ? "bg-[#f97316] text-white"
                          : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredWorkloads.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl border border-stone-200 bg-[#faf8f4] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="font-bold text-stone-900 text-sm">{item.workload}</h4>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-orange-100 text-orange-700">
                          {item.category}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="text-[11px] font-bold text-stone-600 block">Coordination Strength:</span>
                        <span className="text-xs font-semibold text-orange-700">{item.strength}</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed mb-3">{item.rationale}</p>
                    </div>

                    <div className="pt-3 border-t border-stone-200 text-xs space-y-1">
                      <div>
                        <strong className="text-stone-800">Mechanism:</strong>{" "}
                        <span className="text-stone-600">{item.mechanism}</span>
                      </div>
                      <div>
                        <strong className="text-stone-800">Recommended Tool:</strong>{" "}
                        <span className="font-mono text-orange-700">{item.recommendedTool}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: SENIOR INTERVIEW Q&A                                        */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "qa" && (
          <div className="space-y-4">
            {[
              {
                id: "qa-1",
                q: "1. Why does leader election alone NOT guarantee single-execution safety in distributed systems?",
                a: "A leader election protocol (such as Raft or ZooKeeper) ensures that at any given term epoch, only one node is elected as the legitimate coordinator by a majority quorum. However, networks are asynchronous and process execution is non-deterministic. If Worker A (elected leader) experiences a 20-second GC freeze or network partition, its lease will expire and the cluster will elect Worker B. When Worker A resumes execution, it is completely unaware of the elapsed time and will proceed to submit writes or dispatch side effects. Without resource-level fencing tokens or conditional checks, Worker A will silently overwrite or duplicate Worker B's work.",
              },
              {
                id: "qa-2",
                q: "2. What is the fundamental difference between Raft and Paxos from an engineering perspective?",
                a: "Classic Paxos decomposes consensus into a consensus over a single chosen value using proposers, promises, acceptors, and learners. To order a log of operations (Multi-Paxos), complex ad-hoc mechanisms are required to amortize phase-1 promises. Raft was deliberately designed around understandable state machine replication: it makes leadership explicit and central, combines leader election with log replication, uses strict prefix consistency rules, and guarantees that any elected leader already holds all committed entries from previous terms.",
              },
              {
                id: "qa-3",
                q: "3. How does Martin Kleppmann's fencing token protocol solve the zombie worker problem?",
                a: "Instead of trusting client processes to obey lease timers, the fencing token protocol pushes enforcement to the storage layer receiving the write. Every time a lock or lease is granted, the coordination service generates a monotonically increasing integer token (e.g. 41, 42, 43). Whenever a worker writes to storage, it includes its token. The storage engine maintains highestAcceptedToken: if an incoming write has token < highestAcceptedToken, the storage rejects it with a StaleOwnerException.",
              },
              {
                id: "qa-4",
                q: "4. What is the difference between a fencing token and an idempotency key?",
                a: "They solve orthogonal problems. A fencing token rejects obsolete operations from an older ownership epoch when a lease has transferred to a newer owner. An idempotency key (e.g. Idempotency-Key: uuid) allows the same owner to safely retry the exact same logical operation across network timeouts without duplicating external side effects (such as charging a credit card twice). Production architectures typically use both.",
              },
              {
                id: "qa-5",
                q: "5. Why do majority quorums require an odd number of voting nodes (3, 5, 7)?",
                a: "A cluster with an even number of nodes (e.g., 4 nodes) requires a majority quorum of Q = ⌊4/2⌋ + 1 = 3. Notice that 4 nodes can only tolerate 4 - 3 = 1 node failure before losing a majority. A cluster of 3 nodes also has Q = 2 and tolerates 1 node failure. Adding the 4th node increases network overhead and doubles the probability of network splits resulting in a 2v2 tie without improving fault tolerance.",
              },
              {
                id: "qa-6",
                q: "6. How does Kubernetes manage control-plane leader election without ZooKeeper?",
                a: "Kubernetes uses Lease objects in the coordination.k8s.io API group stored directly in etcd. Control-plane components (such as kube-controller-manager and kube-scheduler) compete to update the Lease resource with their pod identity, renewal timestamp, and lease duration. Updates use Kubernetes resourceVersion optimistic concurrency control: if another candidate updated the Lease first, the API server rejects the update with a 409 Conflict.",
              },
            ].map((qa) => {
              const isOpen = expandedQA[qa.id];
              return (
                <div
                  key={qa.id}
                  className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs transition"
                >
                  <button
                    type="button"
                    onClick={() => toggleQA(qa.id)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="font-bold text-stone-900 text-sm sm:text-base">{qa.q}</span>
                    <span className="text-orange-600 font-bold text-xs shrink-0 font-mono">
                      {isOpen ? "COLLAPSE" : "EXPAND"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-4 pt-3 border-t border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {qa.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: PRACTICAL LAB TRACKER                                       */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "project" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-4 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Capstone Project
                </span>
                <h3 className="text-xl font-extrabold text-stone-900">
                  Build a 5-Node Raft Consensus &amp; Fencing Simulator
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Step-by-step engineering lab simulating term epochs, majority votes, network splits, and storage fencing tokens.
                </p>
              </div>

              {/* Lab Phases */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 1</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Implement Basic Raft Roles</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Model Follower, Candidate, and Leader states, randomized election timeouts (150–300ms), and term increments.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 2</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Introduce Network Partitions</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Simulate 3v2 split-brain scenarios. Verify that only the majority partition can elect a leader and commit log entries.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 3</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Implement Fencing Token Storage</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Build atomic <code>applyWrite(resource, token, value)</code> storage checks that reject stale tokens &lt; highestAcceptedToken.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 4</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Failure Injection &amp; Test Suite</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Execute automated tests for leader crash, minority partition isolation, dual campaigns, and stale zombie worker resumptions.
                  </p>
                </div>
              </div>

              {/* Lab Checklist */}
              <div className="border-t border-[#e7e3da] pt-6">
                <h4 className="font-bold text-stone-900 text-sm mb-3">
                  Consensus Lab Deliverables Checklist (7 Items)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { key: "phase1_states", label: "Node state model (id, role, currentTerm, votedFor, log)" },
                    { key: "phase1_election", label: "Randomized election timers & RequestVote RPCs" },
                    { key: "phase2_partitions", label: "Matrix-based network partition simulation (3 vs 2 split)" },
                    { key: "phase3_fencing", label: "Monotonic fencing token generation & storage check" },
                    { key: "phase4_tests", label: "Zombie worker resume test (stale write rejected)" },
                    { key: "phase5_report", label: "Architectural report answering 8 design constraints" },
                    { key: "phase5_observability", label: "Telemetry metrics for election frequency & lease expiry" },
                  ].map((item) => (
                    <label
                      key={item.key}
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 cursor-pointer transition select-none"
                    >
                      <input
                        type="checkbox"
                        checked={labChecklist[item.key]}
                        onChange={() => toggleChecklist(item.key)}
                        className="accent-orange-600 h-4 w-4 rounded"
                      />
                      <span className={labChecklist[item.key] ? "line-through text-stone-400" : "text-stone-800"}>
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: KNOWLEDGE CHECK (QUIZ)                                      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "assessment" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                    Knowledge Verification
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Module 11 Assessment: Consensus, Leader Election &amp; Coordination
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    6 questions testing heartbeats, majority quorums, terms, committed logs, and fencing tokens.
                  </p>
                </div>
                {quizSubmitted && (
                  <div className="text-right">
                    <span className="text-xs text-stone-500 block">Assessment Score</span>
                    <span className="text-2xl font-black text-orange-600">
                      {calculateScore()} / {quizQuestions.length}
                    </span>
                  </div>
                )}
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {quizQuestions.map((q, idx) => {
                  const userAnswer = selectedAnswers[q.id];
                  const isCorrect = userAnswer === q.correct;
                  return (
                    <div
                      key={q.id}
                      className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5 text-xs sm:text-sm"
                    >
                      <span className="text-[10px] font-mono font-bold text-orange-600 block mb-1">
                        Question {idx + 1} of {quizQuestions.length}
                      </span>
                      <h4 className="font-bold text-stone-900 mb-3">{q.question}</h4>

                      <div className="space-y-2">
                        {q.options.map((opt, oIdx) => {
                          let optStyle = "border-stone-200 bg-white hover:border-orange-300";
                          if (userAnswer === oIdx) {
                            optStyle = "border-orange-500 bg-orange-50/50 font-semibold";
                          }
                          if (quizSubmitted) {
                            if (oIdx === q.correct) {
                              optStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold";
                            } else if (userAnswer === oIdx && !isCorrect) {
                              optStyle = "border-red-400 bg-red-50 text-red-900";
                            }
                          }

                          return (
                            <button
                              key={oIdx}
                              type="button"
                              onClick={() => handleSelectAnswer(q.id, oIdx)}
                              className={`w-full text-left p-3 rounded-xl border transition cursor-pointer text-xs flex items-center justify-between ${optStyle}`}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && oIdx === q.correct && (
                                <CheckCircle2 size={14} className="text-emerald-600 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="mt-3 p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 leading-relaxed">
                          <strong className="text-stone-900 block mb-0.5">Explanation:</strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Quiz Submit & Reset buttons */}
              <div className="mt-8 pt-4 border-t border-[#e7e3da] flex items-center justify-between">
                {!quizSubmitted ? (
                  <button
                    type="button"
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                    className="px-5 py-2.5 bg-[#f97316] text-white rounded-xl text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer disabled:opacity-50"
                  >
                    Submit Assessment
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="flex items-center gap-2 px-4 py-2 border border-stone-300 bg-white rounded-xl text-xs font-bold text-stone-700 hover:bg-stone-50 transition cursor-pointer"
                  >
                    <RotateCcw size={14} />
                    <span>Reset Quiz</span>
                  </button>
                )}
                <span className="text-xs text-stone-400">
                  {Object.keys(selectedAnswers).length} of {quizQuestions.length} answered
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: RESEARCH & READING LIST                                     */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "reading" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-4 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Primary References &amp; Academic Syllabi
                </span>
                <h3 className="text-xl font-extrabold text-stone-900">
                  Module 11: Research and Reading List
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Seminal papers and production engineering guides covering Paxos, Raft, majority quorums, and distributed locks.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    id: 1,
                    title: "Raft Consensus Algorithm — Stanford Authors",
                    focus: "Sections on leader elections, log replication, safety invariants, and dynamic cluster membership.",
                    url: "https://raft.github.io/raft.pdf",
                    linkText: "Read Raft Paper (Extended)",
                  },
                  {
                    id: 2,
                    title: "MIT 6.5840 — Distributed Systems (Formerly 6.824)",
                    focus: "Graduate lectures, fault tolerance labs, and building a complete Raft consensus library in Go.",
                    url: "https://pdos.csail.mit.edu/6.5840/",
                    linkText: "MIT 6.5840 Course Portal",
                  },
                  {
                    id: 3,
                    title: "Paxos Made Simple — Leslie Lamport",
                    focus: "Foundational paper detailing proposal numbering, promises, and why later proposals respect earlier accepted values.",
                    url: "https://www.microsoft.com/en-us/research/people/lamport/publications/",
                    linkText: "Find Paxos Made Simple",
                  },
                  {
                    id: 4,
                    title: "Leader Election in Distributed Systems — AWS Builder Center",
                    focus: "Why elections alone do not guarantee exclusive execution, and how leases and application-level fencing fit together.",
                    url: "https://builder.aws.com/content/3Ev0vH0hfkcUizISUWYTvHibtcp",
                    linkText: "AWS Builder Center Article",
                  },
                  {
                    id: 5,
                    title: "How to do Distributed Locking — Martin Kleppmann",
                    focus: "Why distributed locks fail when processes pause, and how monotonic fencing tokens protect storage.",
                    url: "https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html",
                    linkText: "Read Martin Kleppmann's Blog",
                  },
                  {
                    id: 6,
                    title: "Apache ZooKeeper Recipes & Primitives",
                    focus: "Leader election, lock recipes, ephemeral sequential nodes, and avoiding thundering herd watch storms.",
                    url: "https://zookeeper.apache.org/doc/current/index.html",
                    linkText: "ZooKeeper Technical Docs",
                  },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-2xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition block group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-orange-600 mb-1">
                        <span>Resource {item.id}</span>
                      </div>
                      <h4 className="font-bold text-stone-900 text-xs sm:text-sm group-hover:text-orange-600 transition">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.focus}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs font-bold text-orange-600">
                      <span>{item.linkText}</span>
                      <ExternalLink size={13} />
                    </div>
                  </a>
                ))}
              </div>

              {/* What Comes Next Banner */}
              <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50/70 p-5 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
                    What You Mastered in Module 11
                  </span>
                  <span className="text-sm font-bold text-stone-900 block mt-0.5">
                    Consensus Protocols, Leader Election &amp; Distributed Coordination
                  </span>
                  <span className="text-xs text-stone-600 block mt-0.5">
                    You can now engineer fault-tolerant consensus clusters using Raft quorums, term epochs, and enforce safe locking with Martin Kleppmann fencing tokens.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => navigate("/learning/system-design/consistency")}
                    className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                  >
                    <span>Back to Module 10</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/learning/system-design/messaging")}
                    className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                  >
                    <span>Start Module 12 (Message Queues &amp; Streaming)</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
