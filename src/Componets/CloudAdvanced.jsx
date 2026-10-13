import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Server,
  Database,
  Cpu,
  Layers,
  Workflow,
  Check,
  CheckCircle2,
  AlertTriangle,
  Clock,
  RefreshCw,
  Play,
  Terminal,
  Sliders,
  ChevronDown,
  ChevronUp,
  Zap,
  Boxes,
  FileCode,
  Share2,
  Compass,
  Lock,
  Scale,
  Activity,
  Network,
  RotateCcw,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";
import { SHOW_NOVA_AI } from "../config/features";

export default function CloudAdvanced() {
  const navigate = useNavigate();

  // Tab State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'raft-lab' | 'quorum-lab' | 'gameday' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);

  // =========================================================================
  // SIMULATOR 1: RAFT CONSENSUS CLUSTER SIMULATOR (5 NODES)
  // =========================================================================
  const [raftTerm, setRaftTerm] = useState(1);
  const [raftNodes, setRaftNodes] = useState([
    { id: 1, role: "Leader", votes: 3, alive: true, partitioned: false, log: ["init: term 1"] },
    { id: 2, role: "Follower", votes: 0, alive: true, partitioned: false, log: ["init: term 1"] },
    { id: 3, role: "Follower", votes: 0, alive: true, partitioned: false, log: ["init: term 1"] },
    { id: 4, role: "Follower", votes: 0, alive: true, partitioned: false, log: ["init: term 1"] },
    { id: 5, role: "Follower", votes: 0, alive: true, partitioned: false, log: ["init: term 1"] },
  ]);
  const [raftHistory, setRaftHistory] = useState([
    "Cluster initialized: Node 1 elected Leader for Term 1 (Quorum: 5/5 alive).",
  ]);
  const [isPartitioned, setIsPartitioned] = useState(false);

  const aliveNodes = raftNodes.filter((n) => n.alive);
  const majorityNeeded = 3; // Majority of 5 is 3

  const handleKillLeader = () => {
    const leader = raftNodes.find((n) => n.role === "Leader" && n.alive);
    if (!leader) {
      setRaftHistory((prev) => ["No active leader to kill. Elect a new leader first.", ...prev]);
      return;
    }

    const updated = raftNodes.map((n) =>
      n.id === leader.id ? { ...n, alive: false, role: "Follower" } : n
    );
    setRaftNodes(updated);
    setRaftHistory((prev) => [
      `[FAILOVER] Node ${leader.id} (Leader) crashed! Heartbeat lost. Followers initiate election timeout.`,
      ...prev,
    ]);
  };

  const handleTriggerElection = () => {
    // Find highest alive, unpartitioned node that can become candidate
    const eligible = raftNodes.filter((n) => n.alive && !n.partitioned);
    if (eligible.length < majorityNeeded) {
      setRaftHistory((prev) => [
        `[ELECTION REJECTED] Only ${eligible.length} eligible nodes. Quorum of ${majorityNeeded} required. Safety preserved: Split-brain prevented.`,
        ...prev,
      ]);
      return;
    }

    const newTerm = raftTerm + 1;
    setRaftTerm(newTerm);

    const newLeader = eligible[0];
    const updated = raftNodes.map((n) => {
      if (!n.alive) return n;
      if (n.id === newLeader.id) {
        return {
          ...n,
          role: "Leader",
          votes: eligible.length,
          log: [...n.log, `elected: term ${newTerm}`],
        };
      }
      return {
        ...n,
        role: "Follower",
        votes: 0,
        log: n.partitioned ? n.log : [...n.log, `voted -> Node ${newLeader.id} (Term ${newTerm})`],
      };
    });

    setRaftNodes(updated);
    setRaftHistory((prev) => [
      `[ELECTION] Term ${newTerm}: Node ${newLeader.id} received ${eligible.length} votes and became Leader!`,
      ...prev,
    ]);
  };

  const handleProposeLog = () => {
    const leader = raftNodes.find((n) => n.role === "Leader" && n.alive);
    if (!leader) {
      setRaftHistory((prev) => [
        "[WRITE REJECTED] No active leader exists. Client receives LEADER_NOT_AVAILABLE.",
        ...prev,
      ]);
      return;
    }

    const activeQuorumMembers = raftNodes.filter(
      (n) => n.alive && (!isPartitioned || n.partitioned === leader.partitioned)
    );

    if (activeQuorumMembers.length < majorityNeeded) {
      setRaftHistory((prev) => [
        `[SAFETY ABORT] Leader Node ${leader.id} in minority partition (${activeQuorumMembers.length}/${majorityNeeded}). Write rejected to prevent stale state!`,
        ...prev,
      ]);
      return;
    }

    const entryId = `SET x=${Math.floor(Math.random() * 900 + 100)}`;
    const updated = raftNodes.map((n) => {
      if (!n.alive) return n;
      if (activeQuorumMembers.some((m) => m.id === n.id)) {
        return { ...n, log: [...n.log, `${entryId} (T${raftTerm})`] };
      }
      return n;
    });

    setRaftNodes(updated);
    setRaftHistory((prev) => [
      `[COMMITTED] Entry "${entryId}" replicated to ${activeQuorumMembers.length}/5 nodes (Quorum satisfied). State machine applied entry.`,
      ...prev,
    ]);
  };

  const handleNetworkPartition = () => {
    setIsPartitioned(true);
    // Partition: {Node 1, Node 2} vs {Node 3, Node 4, Node 5}
    const updated = raftNodes.map((n) => {
      if (n.id <= 2) {
        return { ...n, partitioned: true };
      }
      return { ...n, partitioned: false };
    });
    setRaftNodes(updated);
    setRaftHistory((prev) => [
      `[NETWORK SPLIT] Network Partition injected! Group Alpha: {N1, N2} (Minority: 2/5). Group Beta: {N3, N4, N5} (Majority: 3/5).`,
      ...prev,
    ]);
  };

  const handleHealPartition = () => {
    setIsPartitioned(false);
    const updated = raftNodes.map((n) => ({ ...n, partitioned: false }));
    setRaftNodes(updated);
    setRaftHistory((prev) => [
      "[HEALED] Network partition resolved! Full bi-directional connectivity restored across all nodes.",
      ...prev,
    ]);
  };

  const handleResetRaft = () => {
    setRaftTerm(1);
    setIsPartitioned(false);
    setRaftNodes([
      { id: 1, role: "Leader", votes: 3, alive: true, partitioned: false, log: ["init: term 1"] },
      { id: 2, role: "Follower", votes: 0, alive: true, partitioned: false, log: ["init: term 1"] },
      { id: 3, role: "Follower", votes: 0, alive: true, partitioned: false, log: ["init: term 1"] },
      { id: 4, role: "Follower", votes: 0, alive: true, partitioned: false, log: ["init: term 1"] },
      { id: 5, role: "Follower", votes: 0, alive: true, partitioned: false, log: ["init: term 1"] },
    ]);
    setRaftHistory(["Cluster reset to Term 1 initial state."]);
  };

  // =========================================================================
  // SIMULATOR 2: QUORUM & CONSISTENCY ANALYZER (DYNAMO N, R, W)
  // =========================================================================
  const [quorumN, setQuorumN] = useState(5);
  const [quorumR, setQuorumR] = useState(3);
  const [quorumW, setQuorumW] = useState(3);

  const isQuorumOverlapping = quorumR + quorumW > quorumN;
  const writeFaultTolerance = quorumN - quorumW;
  const readFaultTolerance = quorumN - quorumR;

  // =========================================================================
  // SIMULATOR 3: MINICLOUD FAILURE GAMEDAY (SECTION 125)
  // =========================================================================
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [selectedGameChoice, setSelectedGameChoice] = useState(null);
  const [gameFeedback, setGameFeedback] = useState(null);

  const gameScenarios = [
    {
      id: "case-a",
      title: "Case A: Single Node Hardware Failure in 5-Node Cluster",
      description:
        "Node 4 suffers catastrophic DRAM failure and crashes permanently (Crash-Stop failure model). Client submits a critical balance update.",
      question: "What is the correct distributed consensus behavior?",
      options: [
        {
          id: "A",
          text: "Halt all read and write transactions immediately to avoid running in a degraded state.",
          isCorrect: false,
          rationale: "Incorrect. Requiring 100% node availability makes a distributed system less available than a single machine.",
        },
        {
          id: "B",
          text: "System continues seamlessly without data loss because 4/5 nodes remain alive, which exceeds the majority quorum threshold of 3.",
          isCorrect: true,
          rationale: "Correct! In an N=5 cluster, majority quorum is floor(N/2)+1 = 3. Four alive nodes satisfy quorum with zero downtime.",
        },
        {
          id: "C",
          text: "Initiate immediate 2PC commit across all 5 nodes and block until Node 4 reboots.",
          isCorrect: false,
          rationale: "Incorrect. 2PC is a blocking protocol; Raft/Paxos consensus is designed specifically to not block on single-node failure.",
        },
      ],
    },
    {
      id: "case-b",
      title: "Case B: Two Simultaneous Node Failures (Nodes 2 & 5 Die)",
      description:
        "A power supply unit fails across rack 2, causing both Node 2 and Node 5 to disconnect abruptly. Nodes 1, 3, and 4 remain operational.",
      question: "Can the 3 surviving nodes still safely commit write transactions?",
      options: [
        {
          id: "A",
          text: "Yes. 3 nodes out of 5 form an authoritative majority quorum (3 >= 3). Operations commit safely.",
          isCorrect: true,
          rationale: "Correct! A 5-node cluster tolerates floor((5-1)/2) = 2 crash failures while maintaining linearizable safety.",
        },
        {
          id: "B",
          text: "No. Losing more than 20% of cluster nodes triggers an automatic emergency cluster lockdown.",
          isCorrect: false,
          rationale: "Incorrect. Consensus safety depends strictly on majority quorum overlap (R + W > N), not percentage loss rules.",
        },
        {
          id: "C",
          text: "Yes, but only if the clients switch to eventual consistency and disable write verification.",
          isCorrect: false,
          rationale: "Incorrect. The surviving 3 nodes provide full strict consensus safety without relaxing consistency.",
        },
      ],
    },
    {
      id: "case-c",
      title: "Case C: Three Nodes Crash (Nodes 1, 2, and 3 Disappear)",
      description:
        "A flood knocks out power to 3 servers. Only Node 4 and Node 5 remain alive. A client issues: 'SET balance = $1,000'.",
      question: "How must the distributed consensus protocol respond according to FLP & Raft safety invariants?",
      options: [
        {
          id: "A",
          text: "Node 4 and Node 5 should elect Node 4 as leader and continue accepting writes since 2 > 0.",
          isCorrect: false,
          rationale: "Dangerous Anti-Pattern! If 2 nodes could decide, a network partition could create two independent leaders (split-brain catastrophe).",
        },
        {
          id: "B",
          text: "Preserve Safety by sacrificing Liveness: Refuse writes because 2/5 cannot form a majority quorum (3 required). Prevent split-brain.",
          isCorrect: true,
          rationale: "Correct! When majority quorum is lost, consensus systems must refuse writes. Safety (no dual commits) takes precedence over availability.",
        },
        {
          id: "C",
          text: "Automatically convert to a Byzantine fault model and fabricate the missing 3 votes.",
          isCorrect: false,
          rationale: "Incorrect. Quorum cannot be fabricated without violating correctness invariants.",
        },
      ],
    },
    {
      id: "case-d",
      title: "Case D: Leader Node Crashes Suddenly Mid-Stream",
      description:
        "The active cluster leader (Node 1) crashes while streaming log entries to followers. The client was awaiting confirmation.",
      question: "What sequence of events restores cluster operations?",
      options: [
        {
          id: "A",
          text: "Followers detect missing heartbeats after randomized election timeout, increment term counter, transition to Candidate, and request votes.",
          isCorrect: true,
          rationale: "Correct! Randomized election timeouts prevent split-vote livelock, allowing one follower to win majority and step up as new leader.",
        },
        {
          id: "B",
          text: "All followers immediately reboot their operating systems to clear volatile state.",
          isCorrect: false,
          rationale: "Incorrect. Replicated logs are stored on disk; restarting wipes in-flight buffers needlessly.",
        },
        {
          id: "C",
          text: "The client acts as the temporary leader and directly writes to database disks.",
          isCorrect: false,
          rationale: "Incorrect. Clients never directly dictate consensus ordering.",
        },
      ],
    },
    {
      id: "case-e",
      title: "Case E: Asymmetric Network Partition (2 vs 3 Split)",
      description:
        "A core router failure partitions the 5-node cluster into Partition Alpha {N1, N2} and Partition Beta {N3, N4, N5}. Node 1 was the prior leader.",
      question: "What happens when clients write to Partition Alpha vs Partition Beta?",
      options: [
        {
          id: "A",
          text: "Both partitions accept writes independently and merge later using Last-Write-Wins timestamps.",
          isCorrect: false,
          rationale: "Incorrect for consensus systems! That is Dynamo eventual consistency, which causes silent data loss under linearizable workloads.",
        },
        {
          id: "B",
          text: "Partition Beta (3 nodes) elects a new leader and commits writes. Partition Alpha (2 nodes) cannot reach quorum, rejects writes, and Node 1 steps down.",
          isCorrect: true,
          rationale: "Correct! Beta holds the majority quorum (3/5). Alpha cannot gather 3 acknowledgments, so writes stall or reject, preventing dual divergent histories.",
        },
        {
          id: "C",
          text: "The cluster hangs completely and cannot service reads or writes anywhere in the datacenter.",
          isCorrect: false,
          rationale: "Incorrect. The majority partition (Beta) continues to make forward progress.",
        },
      ],
    },
    {
      id: "case-f",
      title: "Case F: The Old Partitioned Leader Heals and Reconnects",
      description:
        "The network partition heals. Node 1 (who still believed it was Term 1 Leader) reconnects to the cluster where Node 3 is now Term 2 Leader.",
      question: "How does the consensus protocol safely resolve this stale leader dilemma?",
      options: [
        {
          id: "A",
          text: "Node 1 notices Node 3's higher term (Term 2 > Term 1) in incoming heartbeats, immediately steps down to Follower, and truncates uncommitted log entries.",
          isCorrect: true,
          rationale: "Correct! Term numbers act as logical epoch barriers. Higher terms always supersede lower terms; uncommitted logs on stale leaders are safely overwritten.",
        },
        {
          id: "B",
          text: "Node 1 executes a hard reset and wipes all cluster databases back to Term 0.",
          isCorrect: false,
          rationale: "Incorrect. Committed state is permanent.",
        },
        {
          id: "C",
          text: "Both leaders merge their logs using Git three-way merge.",
          isCorrect: false,
          rationale: "Incorrect. Distributed consensus logs are strictly linear; branch merging is not permitted.",
        },
      ],
    },
  ];

  const handleSelectGameOption = (option) => {
    setSelectedGameChoice(option.id);
    setGameFeedback(option);
    if (option.isCorrect) {
      setGameScore((prev) => prev + 100);
    }
  };

  const handleNextGameScenario = () => {
    setSelectedGameChoice(null);
    setGameFeedback(null);
    setGameScenarioIndex((prev) => (prev + 1) % gameScenarios.length);
  };

  // =========================================================================
  // 12 SYLLABUS TOPICS
  // =========================================================================
  const topics = useMemo(
    () => [
      {
        id: 1,
        title: "Distributed Systems Foundations & The Partial Failure Ambiguity",
        week: "Foundations",
        focus: "Network calls != Local calls, The Lost Response Problem & Idempotency",
        badge: "Distributed Foundations",
        theory:
          "In a single computer, the CPU inspects memory and registers deterministically. In a distributed system, state is spread across independent machines connected by an unreliable network with no shared memory or instantaneous global clock. The defining phenomenon is Partial Failure: some components or communication paths fail while others continue running. A client issuing a network call across an unreliable link experiences the fundamental ambiguity of timeouts: (1) Did the request get lost in flight? (2) Did the server crash before processing? (3) Did the server execute the operation but the response got dropped? Timeout does NOT mean failure! Retrying a non-idempotent operation causes catastrophic duplicate executions (e.g. charging a credit card twice). Therefore, distributed systems require idempotency keys, request deduplication, and replay-safe protocols.",
        diagram: `THE LOST RESPONSE AMBIGUITY & THE PARTIAL FAILURE DILEMMA:
=============================================================================
[ CLIENT ]                                           [ PAYMENT SERVICE ]
    |                                                         |
    |---- (1) POST /charge {"amount": $100} ----------------->|
    |                                                         |
    |                                              [ Processes Transaction ]
    |                                              [ DB Write: -$100 committed ]
    |                                                         |
    |                   XXXX NETWORK DROP XXXX                |
    |<--- (2) HTTP 200 {"status": "success"} -----------------| (Dropped!)
    |
[ TIMEOUT OCCURS ]
Question: Did the charge succeed or fail?
-----------------------------------------------------------------------------
IF CLIENT RETRIES BLINDLY:
    |---- (3) POST /charge {"amount": $100} ----------------->|
    |                                              [ Double Charge! -$200 ]
-----------------------------------------------------------------------------
ARCHITECTURAL SOLUTION: IDEMPOTENCY KEY
    |---- (4) POST /charge {"idempotency_key": "req_88a"} --->|
    |                                              [ Key Cache Hit: req_88a ]
    |<--- (5) Return Cached Result (Zero Double Charge) ------|
=============================================================================`,
        keyTakeaways: [
          "Network calls are fundamentally asynchronous and can fail in 4 distinct ways: packet lost, server dead, slow server, or response lost.",
          "Timeout does not mean failure: An unanswered request may have successfully modified state on the remote cluster.",
          "Availability Multiplication: If 4 microservices have 99% uptime each in a synchronous call chain, composite uptime drops to 0.99^4 = 96.05%.",
          "Idempotency keys and deduplication filters are non-optional primitives for any mutating distributed API.",
        ],
        codeExample: `# Python/FastAPI: Distributed Idempotency Filter with Redis Atomic SETNX
import redis

r = redis.Redis(host='redis.cluster.local', port=6379, db=0)

def execute_idempotent_transaction(idempotency_key: str, user_id: str, amount: float):
    # Atomically acquire lock / register idempotency key (Expires in 120s)
    lock_acquired = r.set(f"idemp:{idempotency_key}", "PROCESSING", nx=True, ex=120)
    
    if not lock_acquired:
        cached_result = r.get(f"idemp:{idempotency_key}")
        if cached_result == b"PROCESSING":
            raise Exception("409 Conflict: Concurrent identical request in progress.")
        return cached_result.decode() # Return previous execution result safely!

    try:
        # Perform actual mutating payment transaction
        tx_id = process_payment(user_id=user_id, amount=amount)
        result = f'{{"status": "SUCCESS", "tx_id": "{tx_id}"}}'
        r.set(f"idemp:{idempotency_key}", result, ex=86400) # Persist 24h
        return result
    except Exception as e:
        r.delete(f"idemp:{idempotency_key}") # Release lock on hard failure
        raise e`,
      },
      {
        id: 2,
        title: "Failure Models & Synchronous vs Asynchronous Systems",
        week: "Fault Theory",
        focus: "Crash-Stop, Crash-Recovery, Omission, Timing, Byzantine & Synchrony",
        badge: "Fault Models",
        theory:
          "Distributed algorithm design begins by declaring the Failure Model and the Timing Model. The classic failure models defined across MIT 6.5840 and Cambridge are: (1) Crash-Stop: A process halts and never recovers. (2) Crash-Recovery: A process crashes, loses volatile RAM, but eventually restarts with non-volatile disk state intact. (3) Omission Failures: Processes run correctly, but network links drop messages intermittently. (4) Timing Failures: Processes respond, but violate latency bounds. (5) Byzantine Failures: Nodes behave arbitrarily or maliciously (equivocation, lying to different nodes). The Timing Model determines if timeouts are definitive: Synchronous systems have known upper bounds on latency and drift; Asynchronous systems place no bounds on network delay, making it mathematically impossible to distinguish a crashed node from a slow node. Modern cloud datacenters operate under Partial Synchrony: asynchronous during network blips, synchronous enough during stable periods to achieve liveness.",
        diagram: `FORMAL CLASSIFICATION OF DISTRIBUTED FAILURE MODELS:
=============================================================================
MODEL             BEHAVIOR PATTERN                              RECOVERY MECHANISM
-----------------------------------------------------------------------------
Crash-Stop        Node A -> Node A -> [ CRASH X ]               Replace node
Crash-Recovery    Node A -> [ CRASH X ] -> [ REBOOT A ]         Write-Ahead Log (WAL)
Omission          Node A --- [ PACKET LOSS X ] ---> Node B      TCP Ack + Retries
Timing            Request -> [ 45 Seconds Late ] -> Response    Circuit Breakers
Byzantine         Node A says "X" to Node B; says "Y" to Node C PBFT / 3f + 1 Quorum
-----------------------------------------------------------------------------
TIMING ASSUMPTIONS:
- Synchronous:        Delay <= Delta (Known max bound. Timeout = Crash).
- Asynchronous:       Delay = Invariant unknown. (Cannot prove crash vs slow).
- Partially Synch:    Asynchronous initially -> Eventually Synchronous (Global Stabilization Time).`,
        keyTakeaways: [
          "Stop saying 'the server failed': Precise engineering requires specifying Crash-Stop vs Crash-Recovery vs Byzantine.",
          "In a pure asynchronous system, timeouts cannot prove a node has died; you can only suspect failure.",
          "Crash-Recovery systems require Write-Ahead Logging (WAL) and fsync before acknowledging state to prevent amnesia.",
          "Cloud enterprise infrastructure typically assumes crash-recovery with partial synchrony, while multi-tenant blockchains require Byzantine tolerance.",
        ],
        codeExample: `# Go: Heartbeat Failure Detector with Expire-Based Suspicion
package main

import (
	"sync"
	"time"
)

type FailureDetector struct {
	mu           sync.Mutex
	lastHeartbeat map[string]time.Time
	timeout      time.Duration
}

func (fd *FailureDetector) RecordHeartbeat(nodeID string) {
	fd.mu.Lock()
	defer fd.mu.Unlock()
	fd.lastHeartbeat[nodeID] = time.Now()
}

func (fd *FailureDetector) IsSuspected(nodeID string) bool {
	fd.mu.Lock()
	defer fd.mu.Unlock()
	last, exists := fd.lastHeartbeat[nodeID]
	if !exists {
		return true // Never seen
	}
	// Under Partial Synchrony: Suspect dead if timeout exceeded
	return time.Since(last) > fd.timeout
}`,
      },
      {
        id: 3,
        title: "Time, Causality & Logical Clocks (Lamport & Vector Clocks)",
        week: "Logical Time",
        focus: "Clock Drift, Lamport Clocks, Vector Clocks & The Happened-Before Relation",
        badge: "Logical Clocks",
        theory:
          "Physical clocks across machines drift due to quartz crystal thermal fluctuations; NTP synchronization over variable-latency networks cannot guarantee identical timestamps. If Machine A logs an event at 12:00:00.100 and Machine B logs an event at 12:00:00.090, you cannot determine which occurred first. Leslie Lamport introduced the Happened-Before relation (A -> B): an event causally precedes another if it is in the same thread of execution, or if A is sending a message and B is the receipt of that message. Lamport Logical Clocks assign a monotonically increasing integer counter to events: on local event, clock++; on message send, attach clock; on message receive, clock = max(local, received) + 1. While Lamport clocks establish a topological ordering, they cannot distinguish concurrent events from causal events. Vector Clocks maintain an array of clocks per node [v1, v2, ... vn], allowing systems to mathematically prove whether two updates are causally ordered or concurrent conflicts.",
        diagram: `LAMPORT LOGICAL CLOCKS VS VECTOR CLOCKS (CAUSAL ORDERING):
=============================================================================
PROCESS A:     (e1: C=1) -------- [ Send Msg ] --------> (e3: C=3)
                                          \\
                                           \\
PROCESS B:     (e2: C=1) ------------------ v (e4: C=max(1,2)+1 = 3)
-----------------------------------------------------------------------------
VECTOR CLOCKS FOR CONFLICT DETECTION:
Node A: [1, 0]  (Local update on A)
Node B: [0, 1]  (Local update on B)
Neither vector dominates!
  A[0] > B[0] (1 > 0), BUT A[1] < B[1] (0 < 1)
  RESULT: CONCURRENT CONFLICT! (Requires application merge / CRDT)

Node A sends to B:
Node B updates: [ max(1,0), max(0,1)+1 ] => [1, 2]
Now: [1, 0] <= [1, 2] => Causal Precedence: Event A Happened-Before Event B!
=============================================================================`,
        keyTakeaways: [
          "Physical wall clocks cannot be trusted to order distributed events across independent cloud servers.",
          "Happened-Before relation (->) defines causality: If A caused B, then Time(A) < Time(B).",
          "Lamport Clocks provide partial order: If A -> B then L(A) < L(B), but L(A) < L(B) does NOT imply A -> B.",
          "Vector Clocks detect concurrency: If neither vector dominates, updates occurred simultaneously and must be merged.",
        ],
        codeExample: `# Python: Vector Clock Implementation for Distributed Concurrency
class VectorClock:
    def __init__(self, node_id, num_nodes):
        self.node_id = node_id
        self.clock = [0] * num_nodes

    def local_event(self):
        self.clock[self.node_id] += 1
        return list(self.clock)

    def send_message(self):
        self.clock[self.node_id] += 1
        return list(self.clock)

    def receive_message(self, remote_vector):
        for i in range(len(self.clock)):
            self.clock[i] = max(self.clock[i], remote_vector[i])
        self.clock[self.node_id] += 1
        return list(self.clock)

    @staticmethod
    def compare(v1, v2):
        # Returns: "BEFORE", "AFTER", "CONCURRENT", or "EQUAL"
        greater = False
        lesser = False
        for a, b in zip(v1, v2):
            if a > b: greater = True
            if a < b: lesser = True
        if greater and not lesser: return "AFTER"
        if lesser and not greater: return "BEFORE"
        if not greater and not lesser: return "EQUAL"
        return "CONCURRENT" # Conflict detected!`,
      },
      {
        id: 4,
        title: "Replication, Quorums & The Consistency Spectrum",
        week: "Replication",
        focus: "Quorum Overlap (R + W > N), Linearizability, Session Consistency & CAP",
        badge: "Replication & Quorums",
        theory:
          "Replication maintains copies of data across multiple servers to survive hardware failures and scale reads. Primary-Backup replication routes all writes through a designated primary. Synchronous replication waits for replica acknowledgments, delivering durability at the expense of higher write latency; asynchronous replication acknowledges immediately, improving latency while introducing replication lag and data loss risks. Quorum systems parameterize replication: cluster size N, write quorum W, read quorum R. If R + W > N, the Pigeonhole Principle guarantees that at least one node in the read quorum witnessed the latest write quorum. Crucial insight: Quorum overlap alone does NOT provide Linearizability! Without versioned read repairs, tie-breaking timestamps, and read-phase synchronization, clients can observe stale reads. The Consistency Spectrum ranges from Linearizability (real-time atomic ordering) to Sequential Consistency, Causal Consistency, Read-Your-Writes, Session Consistency, and Eventual Consistency.",
        diagram: `QUORUM OVERLAP MATHEMATICS & THE PIGEONHOLE PRINCIPLE:
=============================================================================
Cluster Size: N = 5 Replicas {Node 1, Node 2, Node 3, Node 4, Node 5}
Write Quorum: W = 3
Read Quorum:  R = 3
Equation:     R + W = 3 + 3 = 6 > 5 (Overlapping Quorum Guaranteed!)

[ WRITE QUORUM: Nodes 1, 2, 3 ]
  Node 1: [ v2: x=99 ]
  Node 2: [ v2: x=99 ]
  Node 3: [ v2: x=99 ]

[ READ QUORUM: Nodes 3, 4, 5 ]
  Node 3: [ v2: x=99 ]  <--- OVERLAPPING INTERSECTION NODE!
  Node 4: [ v1: x=50 ]
  Node 5: [ v1: x=50 ]

Client reads: {Node 3 (v2), Node 4 (v1), Node 5 (v1)}
Client selects highest version v2 -> Value is 99!
-----------------------------------------------------------------------------
WHY QUORUM OVERLAP != LINEARIZABILITY:
If a concurrent read executes while Node 3 is being written, Reader A might
see v2 on Node 3, while Reader B reading {Node 1, 4, 5} moments later could see v1!
Linearizability requires Read-Repair or Raft/Paxos lease coordination.
=============================================================================`,
        keyTakeaways: [
          "Quorum overlap condition: R + W > N guarantees intersection, but linearizability requires ordering constraints.",
          "Write Fault Tolerance = N - W; Read Fault Tolerance = N - R.",
          "Linearizability is the gold standard: Every read reflects the latest write in wall-clock time globally.",
          "CAP Theorem under partition: In the presence of a network split, a system must choose between Consistency (refuse writes) or Availability (allow divergence).",
        ],
        codeExample: `# Python: Dynamo-Style Quorum Read with Version Resolution & Read-Repair
def quorum_read(key: str, nodes: list, R: int):
    responses = []
    for node in nodes:
        try:
            val, ver = node.get(key) # Returns (value, version)
            responses.append((node, val, ver))
            if len(responses) == R:
                break
        except Exception:
            continue # Node down, continue gathering quorum

    if len(responses) < R:
        raise Exception("Quorum read failed: Insufficient responsive nodes.")

    # Find highest version among read quorum
    highest_entry = max(responses, key=lambda item: item[2])
    latest_val, latest_ver = highest_entry[1], highest_entry[2]

    # Asynchronous Read-Repair: Heal stale nodes in the background!
    for node, val, ver in responses:
        if ver < latest_ver:
            node.async_repair(key, latest_val, latest_ver)

    return latest_val`,
      },
      {
        id: 5,
        title: "Distributed Consensus, FLP Impossibility & State-Machine Replication",
        week: "Consensus",
        focus: "The Consensus Problem, FLP Theorem, Failure Detectors & State-Machine Replication",
        badge: "Consensus Theory",
        theory:
          "Consensus is the fundamental problem of getting multiple independent nodes to agree on a single value or command sequence despite crash failures and packet losses. Consensus requires three properties: (1) Agreement: All non-faulty nodes decide the same value. (2) Validity: The decided value must have been proposed by a node. (3) Termination: All non-faulty nodes eventually decide. In 1985, Fischer, Lynch, and Paterson published the landmark FLP Impossibility Theorem: In a purely asynchronous system, no deterministic consensus protocol can guarantee termination in the presence of even a single unannounced crash failure. FLP does not mean consensus is impossible in production; it means production consensus protocols must introduce partial synchrony assumptions or randomized failure detectors (Chandra-Toueg). The bridge between consensus and real databases is State-Machine Replication (SMR): Consensus does NOT replicate application state directly; it agrees on an immutable, deterministically ordered sequence of commands in a shared log. Identical state machines executing identical ordered commands reach identical final states.",
        diagram: `STATE-MACHINE REPLICATION (SMR): CONSENSUS -> ORDERED LOG -> DETERMINISTIC STATE:
=============================================================================
[ CLIENTS ]
     |
     v
[ CONSENSUS ALGORITHM: Raft / Paxos Group ]
     |  (Ensures agreement on exact sequence of commands in replicated log)
     v
[ REPLICATED LOG ]
+-------+-------------------------+-------------------------+
| Index | Command                 | Term / Ballott          |
+-------+-------------------------+-------------------------+
|   1   | SET balance:alice = 100 | Term 1                  |
|   2   | SET balance:bob   = 50  | Term 1                  |
|   3   | TRANSFER alice->bob 20  | Term 2 (Committed)      |
+-------+-------------------------+-------------------------+
     |
     v  (Applied strictly in index order to local deterministic state machines)
+-----------------------+-----------------------+-----------------------+
| Replica 1 DB Engine   | Replica 2 DB Engine   | Replica 3 DB Engine   |
| alice=80, bob=70      | alice=80, bob=70      | alice=80, bob=70      |
+-----------------------+-----------------------+-----------------------+
RESULT: Bit-for-bit identical state across all surviving cluster replicas!
=============================================================================`,
        keyTakeaways: [
          "Consensus solves distributed agreement: All healthy nodes commit the exact same sequence of transitions.",
          "FLP Impossibility proves you cannot simultaneously have deterministic safety, asynchronous timing, and guaranteed termination with crashes.",
          "State-Machine Replication (SMR) is the foundation of etcd, ZooKeeper, Spanner, CockroachDB, and Apache Kafka.",
          "Safety (nothing bad happens) vs Liveness (something good eventually happens): Real systems prioritize safety over availability during partitions.",
        ],
        codeExample: `# Conceptual State-Machine Engine Applying Deterministic Ordered Commands
class DeterministicStateMachine:
    def __init__(self):
        self.state = {}
        self.last_applied_index = 0

    def apply_log_entry(self, log_index: int, command: str):
        if log_index != self.last_applied_index + 1:
            raise ValueError(f"Out of order execution! Expected {self.last_applied_index + 1}, got {log_index}")

        # Deterministic parsing: Op Key Value
        parts = command.split()
        op, key = parts[0], parts[1]

        if op == "SET":
            self.state[key] = parts[2]
        elif op == "DEL":
            self.state.pop(key, None)
        elif op == "INCR":
            self.state[key] = str(int(self.state.get(key, 0)) + int(parts[2]))

        self.last_applied_index = log_index
        return self.state.get(key)`,
      },
      {
        id: 6,
        title: "The Raft Consensus Protocol in Depth",
        week: "Raft Consensus",
        focus: "Leader Election, Log Replication, Safety Invariants & Terms",
        badge: "Raft Engineering",
        theory:
          "Designed by Ongaro and Ousterhout at Stanford, Raft decomposes consensus into three understandable, independent subproblems: (1) Leader Election: Exactly one leader is chosen per logical Term. If a follower misses heartbeats within a randomized timeout (e.g., 150-300ms), it increments its term, transitions to Candidate, and votes for itself. It wins if it gathers votes from a majority of the cluster. (2) Log Replication: The leader accepts client proposals, appends them to its local log, and sends AppendEntries RPCs to followers. When an entry is safely stored on a majority of nodes, the leader marks it Committed, applies it to its state machine, and returns success to the client. (3) Safety Invariants: Raft enforces the Election Restriction: A candidate can only win an election if its log is at least as up-to-date as any voter's log (higher term, or longer log in the same term). Stale leaders stepping down: Whenever a node encounters an incoming RPC with a higher Term, it immediately demotes itself to Follower.",
        diagram: `RAFT REPLICATED LOG & COMMIT INDEX QUORUM PIPELINE:
=============================================================================
LEADER (Term 2)
  Log Index:     1     2     3     4     5     6 (Uncommitted)
  Log Entry:   [x=1] [y=2] [z=3] [x=4] [w=5] [x=9]
  Commit Index: 5  (Safely replicated on majority)
       |
       |--- AppendEntries(Index 6, Term 2) ---> Node 2 [x=9] (Ack!)
       |--- AppendEntries(Index 6, Term 2) ---> Node 3 [x=9] (Ack!)
       |--- AppendEntries(Index 6, Term 2) ---> Node 4 (Offline)
       |--- AppendEntries(Index 6, Term 2) ---> Node 5 (Offline)
       |
Quorum Reached: Leader, Node 2, Node 3 (3/5 nodes acknowledged Index 6).
Leader advances Commit Index to 6 -> Applies to state machine -> Responds to client!
-----------------------------------------------------------------------------
RAFT LOG MATCHING PROPERTY:
If two logs contain an entry with the same index and term, they are guaranteed
to be identical in all entries up through that index!
=============================================================================`,
        keyTakeaways: [
          "Raft's strong leader model simplifies consensus by ensuring all data flows unidirectionally from leader to followers.",
          "Terms act as logical clocks: Every RPC contains the sender's term; stale leaders receiving higher terms immediately abdicate.",
          "Election Restriction invariant guarantees that the newly elected leader already contains all previously committed entries.",
          "Randomized election timeouts break election split-vote ties, ensuring rapid convergence under high cluster churn.",
        ],
        codeExample: `# Go: Raft AppendEntries RPC & Log Matching Verification Rule
type AppendEntriesArgs struct {
	Term         int
	LeaderID     int
	PrevLogIndex int
	PrevLogTerm  int
	Entries      []LogEntry
	LeaderCommit int
}

type AppendEntriesReply struct {
	Term    int
	Success bool
}

func (rf *Raft) AppendEntries(args *AppendEntriesArgs, reply *AppendEntriesReply) {
	rf.mu.Lock()
	defer rf.mu.Unlock()

	// Rule 1: Reply false if term < currentTerm
	if args.Term < rf.currentTerm {
		reply.Term = rf.currentTerm
		reply.Success = false
		return
	}

	// Rule 2: Step down if encountering a strictly higher term
	if args.Term > rf.currentTerm {
		rf.currentTerm = args.Term
		rf.state = Follower
		rf.votedFor = -1
	}
	rf.resetElectionTimer()

	// Rule 3: Log Matching Safety - Reject if log doesn't match PrevLogIndex/Term
	if len(rf.log) <= args.PrevLogIndex || rf.log[args.PrevLogIndex].Term != args.PrevLogTerm {
		reply.Term = rf.currentTerm
		reply.Success = false // Forces leader to decrement nextIndex and retry!
		return
	}

	// Append any new entries not already in the log
	rf.log = append(rf.log[:args.PrevLogIndex+1], args.Entries...)
	reply.Success = true
}`,
      },
      {
        id: 7,
        title: "Distributed Transactions: 2PC, Blocking & The Saga Pattern",
        week: "Transactions",
        focus: "Two-Phase Commit, The Coordinator Crash Flaw & Event-Driven Sagas",
        badge: "Distributed Transactions",
        theory:
          "When a transaction spans multiple physical database shards (e.g. Order DB, Inventory DB, Payment DB), the system must guarantee cross-shard atomicity: all shards commit, or all shards abort. Two-Phase Commit (2PC) achieves this through a Coordinator: In Phase 1 (Prepare), the coordinator asks all participants if they can commit; participants acquire locks, write changes to WAL, and reply YES or NO. In Phase 2 (Commit), if all replied YES, the coordinator logs COMMIT and notifies participants; if any voted NO, it sends ABORT. The fatal flaw of 2PC is that it is a BLOCKING protocol: If the coordinator crashes after participants vote YES but before issuing COMMIT, participants remain in an uncertain state holding locks indefinitely, blocking access to data. In microservice architectures, Sagas replace distributed ACID transactions with local transactions linked by compensating actions: Step 1 (Create Order) -> Step 2 (Reserve Stock) -> Step 3 (Charge Card). If step 3 fails, compensating transactions execute in reverse (Release Stock -> Cancel Order), exchanging global isolation for loose coupling and scalability.",
        diagram: `TWO-PHASE COMMIT (2PC) VS SAGA COMPENSATING TRANSACTIONS:
=============================================================================
TWO-PHASE COMMIT (ACID - Strictly Serialized, Synchronous, Blocking):
[ COORDINATOR ] ----------------- Prepare? -----------------> [ DB 1: Order ]
[ COORDINATOR ] ----------------- Prepare? -----------------> [ DB 2: Inventory ]
                <---------------- YES / YES ----------------
[ COORDINATOR CRASHES! ] <--- DISASTER OCCURS!
DB 1 and DB 2 are trapped in PREPARED state! Row locks held indefinitely!
-----------------------------------------------------------------------------
THE SAGA PATTERN (BASE - Eventually Consistent, Non-Blocking, Compensating):
Step 1: Order Service    -> Local DB Commit (Status: PENDING)
Step 2: Inventory Svc    -> Local DB Commit (Stock Reserved)
Step 3: Payment Service  -> Card Denied / Fails!
                             |
                             v (Trigger Compensating Actions in Reverse)
Compensate 2: Inventory  -> Release Stock
Compensate 1: Order Svc  -> Update Status: CANCELLED
=============================================================================`,
        keyTakeaways: [
          "2PC guarantees atomic commit across heterogeneous shards, but is vulnerable to coordinator crash blocking.",
          "Atomic commit is not the same thing as availability: 2PC prioritizes consistency over partition tolerance and latency.",
          "Sagas sacrifice isolation (dirty reads are possible during intermediate steps) to achieve high availability across microservices.",
          "Compensating actions must be idempotent and commutative to handle out-of-order event delivery.",
        ],
        codeExample: `# Python: Saga Orchestrator with Forward Steps & Backward Compensation
class OrderSagaOrchestrator:
    def __init__(self, order_svc, inventory_svc, payment_svc):
        self.order_svc = order_svc
        self.inventory_svc = inventory_svc
        self.payment_svc = payment_svc

    def execute_order(self, order_id, user_id, item_id, amount):
        executed_steps = []
        try:
            # Step 1: Create Draft Order
            self.order_svc.create_draft(order_id, user_id)
            executed_steps.append("ORDER")

            # Step 2: Reserve Inventory
            self.inventory_svc.reserve_stock(order_id, item_id)
            executed_steps.append("INVENTORY")

            # Step 3: Process Payment
            self.payment_svc.charge(order_id, user_id, amount)
            executed_steps.append("PAYMENT")

            # Step 4: Confirm Order
            self.order_svc.confirm(order_id)
            return {"status": "SUCCESS", "order_id": order_id}

        except Exception as error:
            # Rollback in reverse order using compensating actions!
            self.rollback(order_id, item_id, amount, executed_steps)
            return {"status": "FAILED", "reason": str(error)}

    def rollback(self, order_id, item_id, amount, executed_steps):
        if "PAYMENT" in executed_steps:
            self.payment_svc.refund(order_id, amount)
        if "INVENTORY" in executed_steps:
            self.inventory_svc.release_stock(order_id, item_id)
        if "ORDER" in executed_steps:
            self.order_svc.cancel(order_id)`,
      },
      {
        id: 8,
        title: "Distributed Databases, Sharding & Consistent Hashing",
        week: "Databases",
        focus: "Hash vs Range Partitioning, Consistent Hashing Rings & Rebalancing",
        badge: "Distributed Databases",
        theory:
          "When a dataset exceeds the disk, memory, or throughput capacity of a single server, it must be sharded (horizontally partitioned) across a fleet of machines. Two primary partitioning strategies exist: (1) Range-Based Partitioning (Bigtable, CockroachDB): Data is ordered lexicographically by primary key and split into ranges (tablets/splits). Range scans are fast, but sequential primary keys (e.g. timestamp-based) create severe write hotspots on the latest split. (2) Hash-Based Partitioning (Dynamo, Cassandra): Primary keys pass through a hash function (MD5/Murmur3), spreading records uniformly across nodes. Hash partitioning eliminates hotspots, but ruins range scans. Consistent Hashing maps both node identifiers and data keys onto a virtual ring (0 to 2^32 - 1). A key is owned by the first node encountered clockwise. When a new node is added, only K/N keys move on average (where K is total keys and N is nodes), avoiding the total cluster re-shuffling caused by naive hash(key) % N. Virtual nodes (vnodes) balance load across heterogeneous hardware.",
        diagram: `CONSISTENT HASHING RING WITH VIRTUAL NODES (VNODES):
=============================================================================
                          0 / 2^32
                       [ Node A-v1 ]
                    .        |        .
                .            |            .
        [ Node C-v2 ]        |        [ Node B-v1 ]
           .                 |                 .
         .                   |                   .
   [ Node B-v2 ]-------------+-------------[ Node A-v2 ]
         .                   |                   .
           .                 |                 .
        [ Node A-v3 ]        |        [ Node C-v1 ]
                .            |            .
                    .        |        .
                       [ Node B-v3 ]
-----------------------------------------------------------------------------
KEY PLACEMENT & DYNAMIC NODE ADDITION:
- Key "user_9012" hashes to position X.
- Traverses clockwise -> Stored on [ Node B-v1 ].
- If Node D is added between Node A-v1 and Node B-v1:
  ONLY keys between A-v1 and D move to Node D!
  Zero changes to keys residing on other quadrants of the ring!
=============================================================================`,
        keyTakeaways: [
          "Consistent hashing solves the live rebalancing problem: Adding or removing a node migrates only 1/N of total keys.",
          "Virtual nodes (vnodes) solve non-uniform key distribution, preventing statistical load clustering on specific servers.",
          "The Distributed Join Problem: Cross-shard joins require massive network serialization; schemas must be partitioned around primary access patterns.",
          "Rebalancing is a live distributed operation: Requires dual-writes, delta synchronization, and atomic routing cutover.",
        ],
        codeExample: `# Python: Production-Grade Consistent Hash Ring with Virtual Nodes
import hashlib
import bisect

class ConsistentHashRing:
    def __init__(self, replicas=100):
        self.replicas = replicas # Virtual nodes per physical server
        self.ring = []
        self.vnode_map = {}

    def _hash(self, key: str) -> int:
        return int(hashlib.md5(key.encode('utf-8')).hexdigest(), 16)

    def add_node(self, node: str):
        for i in range(self.replicas):
            vnode_key = f"{node}#vnode{i}"
            val = self._hash(vnode_key)
            bisect.insort(self.ring, val)
            self.vnode_map[val] = node

    def remove_node(self, node: str):
        for i in range(self.replicas):
            vnode_key = f"{node}#vnode{i}"
            val = self._hash(vnode_key)
            idx = bisect.bisect_left(self.ring, val)
            if idx < len(self.ring) and self.ring[idx] == val:
                del self.ring[idx]
                del self.vnode_map[val]

    def get_node(self, key: str) -> str:
        if not self.ring:
            return None
        val = self._hash(key)
        idx = bisect.bisect_right(self.ring, val)
        if idx == len(self.ring):
            idx = 0 # Wrap around ring clockwise
        return self.vnode_map[self.ring[idx]]`,
      },
      {
        id: 9,
        title: "Google Spanner, TrueTime & External Consistency",
        week: "Spanner & Time",
        focus: "TrueTime API, Bounded Clock Uncertainty & Externally Consistent Transactions",
        badge: "Spanner & TrueTime",
        theory:
          "Google Spanner is the world's first globally distributed database supporting multi-region ACID transactions, non-blocking snapshot reads, and external consistency (linearizable serializability). Prior to Spanner, it was assumed that global transactions required prohibitive 2PC coordination latency or gave up strong consistency. Spanner's breakthrough is the TrueTime API. TrueTime does not pretend physical clocks are perfectly synchronized; instead, it explicitly exposes physical clock uncertainty: TrueTime.now() returns an interval [earliest, latest] guaranteed to contain the absolute real physical time, with an uncertainty bound epsilon (typically < 7ms, synchronized via atomic clocks and GPS receivers in each datacenter). Spanner uses TrueTime to implement the Commit Wait Rule: A transaction picking commit timestamp t must wait until TrueTime.now().earliest > t before releasing its locks and acknowledging success. This guarantees that any subsequent transaction anywhere on Earth will receive a strictly higher timestamp, providing true external consistency without global cross-continent locking.",
        diagram: `GOOGLE SPANNER TRUETIME & THE COMMIT WAIT RULE:
=============================================================================
TrueTime.now() returns interval: [ earliest ---------- absolute ---------- latest ]
Uncertainty bound: epsilon (e.g. +/- 4 ms)

TRANSACTION T1 (New York):
1. Acquires Paxos row locks.
2. Picks commit timestamp: t1 = TrueTime.now().latest (e.g. 100).
3. Replicates write across Paxos group.
4. EXECUTES COMMIT WAIT:
   Pauses thread until TrueTime.now().earliest > 100! (Waits 2 * epsilon)
5. Releases locks & returns SUCCESS to client.
-----------------------------------------------------------------------------
TRANSACTION T2 (Tokyo):
Starts strictly after T1 completed in real time.
T2 asks TrueTime.now():
Because T1 waited out its uncertainty window, T2's earliest possible timestamp
is GUARANTEED to be > 100 (e.g. t2 = 108).

RESULT: Global External Consistency Guaranteed!
Any reader everywhere in the world observes T1 happened-before T2!
=============================================================================`,
        keyTakeaways: [
          "TrueTime explicitly bounds clock uncertainty (earliest, latest) using GPS antennas and atomic rubidium oscillators.",
          "The Commit Wait Rule: Waiting out the uncertainty window (2 * epsilon) guarantees global linearizable timestamp order.",
          "Read transactions require ZERO locks: Snapshot reads execute at timestamp t without blocking writers or paying 2PC overhead.",
          "Spanner proves that physical clocks do not have to be mathematically perfect to be useful, as long as their uncertainty is tightly bounded.",
        ],
        codeExample: `# Python Simulation: Spanner Commit-Wait External Consistency Engine
import time
import random

class TrueTimeSimulator:
    def __init__(self, max_drift_ms=7):
        self.max_drift_ms = max_drift_ms / 1000.0

    def now(self):
        real_now = time.time()
        drift = random.uniform(-self.max_drift_ms, self.max_drift_ms)
        measured = real_now + drift
        # Return bounded uncertainty interval: [earliest, latest]
        return (measured - self.max_drift_ms, measured + self.max_drift_ms)

class SpannerTransaction:
    def __init__(self, tt_engine: TrueTimeSimulator):
        self.tt = tt_engine

    def commit(self, write_payload: dict):
        # Step 1: Pick commit timestamp s = latest bound
        earliest, latest = self.tt.now()
        commit_timestamp = latest

        # Step 2: COMMIT WAIT RULE
        # Sleep until TrueTime.now().earliest > commit_timestamp
        while True:
            cur_earliest, _ = self.tt.now()
            if cur_earliest > commit_timestamp:
                break
            time.sleep(0.001) # Wait out the uncertainty window

        return {"status": "COMMITTED", "commit_ts": commit_timestamp}`,
      },
      {
        id: 10,
        title: "Distributed Storage: GFS, Erasure Coding & Repair Rates",
        week: "Storage Internals",
        focus: "GFS Chunk Architecture, 3x Replication vs Reed-Solomon Erasure Coding",
        badge: "Storage Internals",
        theory:
          "Distributed storage systems (AWS S3, Google Cloud Storage, Azure Blob, Ceph) must store exabytes of data reliably on cheap, unreliable commodity disks. Google File System (GFS) pioneered this paradigm: large files split into contiguous 64MB chunks, primary/secondary chunkservers, and a single centralized master managing metadata. GFS accepted that hardware failures are regular daily occurrences rather than rare exceptions. While 3x replication survives any two random disk crashes, it carries a 200% storage overhead (300TB raw disk needed to store 100TB data). Modern object stores use Reed-Solomon Erasure Coding (e.g. 10 data fragments + 4 parity fragments = 14 total fragments). Any 10 of the 14 fragments can reconstruct the original data. Erasure coding slashes storage overhead from 200% down to 40% (1.4x multiplier), saving hundreds of millions of dollars. However, erasure coding shifts cost to CPU computation and network repair bandwidth: when a disk dies, 10 other disks must be read over the network to reconstruct the missing fragment.",
        diagram: `REPLICATION (3X) VS REED-SOLOMON ERASURE CODING (10+4):
=============================================================================
TRADITIONAL 3X REPLICATION:
  Original 100 GB -> [ Copy 1: 100 GB ] + [ Copy 2: 100 GB ] + [ Copy 3: 100 GB ]
  Total Storage: 300 GB (Overhead: 200%)
  Tolerates: 2 Node/Disk Failures. Repair: Simple copy of 1 surviving replica.
-----------------------------------------------------------------------------
REED-SOLOMON ERASURE CODING (RS 10+4):
  Original 100 GB split into 10 data chunks (10 GB each) + 4 parity chunks
  Total Storage: 140 GB (Overhead: ONLY 40%!)
  Tolerates: 4 Concurrent Disk/Rack Failures!
  
  [ D1 ][ D2 ][ D3 ][ D4 ][ D5 ][ D6 ][ D7 ][ D8 ][ D9 ][ D10 ][ P1 ][ P2 ][ P3 ][ P4 ]
  Rack 1  Rack 2  Rack 3  Rack 4  Rack 5  Rack 6  Rack 7 ... (Spread across fault domains)
  
  REPAIR TRADEOFF:
  If Disk D3 fails, the system must stream 10 fragments over the network
  and execute Galois Field matrix inversion to rebuild D3!
=============================================================================`,
        keyTakeaways: [
          "GFS design philosophy: At hyperscale, component failures are constant; fault tolerance must be built into software.",
          "Erasure Coding (e.g. 10+4) slashes raw hardware costs by 60% compared to 3x replication while surviving 4 simultaneous failures.",
          "The Repair Rate Race: A storage cluster's true durability depends on Mean Time To Repair (MTTR) vs Mean Time To Failure (MTTF).",
          "Correlated failure domains: Fragments must be strictly separated across independent physical racks, power buses, and cooling loops.",
        ],
        codeExample: `# Python: Erasure Coding Mathematical Reconstruction Model
# Conceptual model demonstrating k of (k+m) data recovery
class ErasureCoder:
    def __init__(self, data_shards=10, parity_shards=4):
        self.k = data_shards
        self.m = parity_shards
        self.total = data_shards + parity_shards

    def can_recover(self, surviving_shards_count: int) -> bool:
        # Reed-Solomon invariant: Any k surviving fragments can reconstruct data
        return surviving_shards_count >= self.k

    def calculate_storage_efficiency(self) -> dict:
        overhead_percent = (self.m / self.k) * 100
        raw_storage_multiplier = self.total / self.k
        return {
            "overhead_pct": f"{overhead_percent:.1f}%",
            "multiplier": f"{raw_storage_multiplier:.2f}x",
            "fault_tolerance": f"Survives any {self.m} concurrent failures"
        }`,
      },
      {
        id: 11,
        title: "Hyperscale Resource Management: Borg, Omega & Schedulers",
        week: "Schedulers",
        focus: "Multi-Dimensional Bin Packing, Admission Control, Priority & Preemption",
        badge: "Cluster Schedulers",
        theory:
          "Hyperscale cloud clusters contain hundreds of thousands of CPU cores, petabytes of RAM, and thousands of GPUs. The cluster scheduler (Google Borg, Kubernetes, Apache Mesos) solves the complex Multi-Dimensional Bin Packing problem: assigning heterogeneous containers with distinct CPU, RAM, disk I/O, GPU, NUMA, and network constraints onto physical machines. Schedulers must manage: (1) Admission Control: Rejecting or queueing jobs when cluster capacity is exhausted to prevent cascading latency collapse. (2) Priority Tiers & Preemption: Production online services (P0) are guaranteed resources; when demand surges, the scheduler preempts (evicts) lower-priority batch/ML jobs (P2/P3). (3) Overcommitment: Allocating more capacity than physically exists based on actual historical utilization (p95 CPU is often far below requested CPU), paired with kernel cgroups to throttle noisy neighbors. Google Omega and modern decentralized schedulers introduced shared-state parallel scheduling with optimistic concurrency to eliminate the bottleneck of monolithic lock-based master schedulers.",
        diagram: `GOOGLE BORG / KUBERNETES SCHEDULER & ADMISSION ARCHITECTURE:
=============================================================================
[ INCOMING PODS / TASKS ]
  Job A: Priority 100 (Payment API - Latency Sensitive)
  Job B: Priority 10  (Video Transcoding - Best Effort Batch)
        |
        v
[ ADMISSION CONTROLLER & VALIDATING WEBHOOK ]
  - Enforce Quotas & Security Policies
        |
        v
[ MULTI-DIMENSIONAL BIN-PACKING ENGINE ]
  Evaluates: CPU Cores, Memory, GPU Locality, Anti-Affinity, Failure Domains
        |
        +---> Cluster Capacity Low: Evicts Job B to fit Job A! (Preemption)
        |
[ PHYSICAL HOST MACHINE ]
+---------------------------------------------------------------------------+
| cgroup 1: Job A (High Priority: Dedicated CPU pins, Burst Memory allowed)  |
| cgroup 2: Job B (Low Priority: CPU throttled to 10% during contention)    |
| Kernel OOM Killer: Kills Job B first if physical memory runs out!        |
+---------------------------------------------------------------------------+
=============================================================================`,
        keyTakeaways: [
          "Cluster scheduling is multi-dimensional bin packing constrained by affinity, fault domains, and NUMA memory topology.",
          "Admission control is critical: Without it, overload leads to thrashing and complete cluster-wide failure.",
          "Priority tiers and preemption allow cloud providers to achieve 70-80% physical server utilization safely.",
          "Omega shared-state scheduling replaces monolithic locks with optimistic concurrency control for parallel schedulers.",
        ],
        codeExample: `# Python: Multi-Dimensional Bin-Packing Scheduler with Priority Preemption
class HostMachine:
    def __init__(self, host_id, total_cpu, total_ram):
        self.host_id = host_id
        self.total_cpu = total_cpu
        self.total_ram = total_ram
        self.used_cpu = 0
        self.used_ram = 0
        self.running_tasks = []

class ClusterScheduler:
    def __init__(self, hosts: list):
        self.hosts = hosts

    def schedule_task(self, task_id: str, req_cpu: int, req_ram: int, priority: int) -> bool:
        # Step 1: Attempt direct fit on a host with sufficient capacity
        for host in self.hosts:
            if (host.total_cpu - host.used_cpu >= req_cpu) and (host.total_ram - host.used_ram >= req_ram):
                host.used_cpu += req_cpu
                host.used_ram += req_ram
                host.running_tasks.append({"id": task_id, "cpu": req_cpu, "ram": req_ram, "prio": priority})
                return True

        # Step 2: Capacity Exhausted -> Attempt Preemption of lower priority tasks!
        for host in self.hosts:
            low_prio_tasks = [t for t in host.running_tasks if t["prio"] < priority]
            freed_cpu = sum(t["cpu"] for t in low_prio_tasks)
            freed_ram = sum(t["ram"] for t in low_prio_tasks)
            if (host.total_cpu - host.used_cpu + freed_cpu >= req_cpu) and \
               (host.total_ram - host.used_ram + freed_ram >= req_ram):
                # Evict low-priority tasks!
                for t in low_prio_tasks:
                    host.running_tasks.remove(t)
                    host.used_cpu -= t["cpu"]
                    host.used_ram -= t["ram"]
                # Schedule new higher-priority task
                host.used_cpu += req_cpu
                host.used_ram += req_ram
                host.running_tasks.append({"id": task_id, "cpu": req_cpu, "ram": req_ram, "prio": priority})
                return True

        return False # Admission Rejected: Insufficient resources even after preemption!`,
      },
      {
        id: 12,
        title: "Cloud Internals: Control Planes, Serverless & Physical Datacenter Topologies",
        week: "The Machinery",
        focus: "Control vs Data Plane, MicroVMs, Clos/Fat-Tree Networks & Physical Limits",
        badge: "Cloud Internals",
        theory:
          "At the ultimate layer of cloud engineering lies the physical datacenter and the control plane machinery that animates it. The Data Plane executes user requests (forwarding packets, executing database queries, running containers); the Control Plane decides routing, schedules VMs, enforces IAM, and attaches storage. Hyperscale control planes are themselves distributed systems backed by consensus, sharding, and eventual consistency. Serverless (AWS Lambda, Google Cloud Run) is not the absence of servers, but a hyper-optimized distributed control plane managing microVMs (AWS Firecracker, Google gVisor) that boot in <5ms, attach virtual network interfaces (ENIs), pull runtime snapshots, and route requests across warm worker pools. At the hardware level, cloud datacenters abandon single central switches in favor of Clos / Fat-Tree network topologies with leaf-spine fabrics, guaranteeing high non-blocking bisection bandwidth for massive east-west microservice traffic. Physical constraints—power distribution limits, thermal heat rejection (PUE: Power Usage Effectiveness), and rack-level power circuits—ultimately dictate failure domains, zone boundaries, and cloud pricing.",
        diagram: `THE COMPLETE CLOUD MACHINERY: FROM USER CODE DOWN TO PHYSICAL DATACENTER:
=============================================================================
[ USER CODE / API INVOCATION ]
      |
      v
[ CLOUD CONTROL PLANE ] (Consensus Cluster + Distributed Scheduler)
      |
      v
[ SERVERLESS WORKER FLEET ]
+---------------------------------------------------------------------------+
| Physical Host Server (Dual Socket AMD EPYC / Intel Xeon - 128 Cores)      |
|  ├── KVM Hypervisor                                                       |
|  ├── Firecracker MicroVM 1 [ Tenant A - Isolation in 5ms ]               |
|  ├── Firecracker MicroVM 2 [ Tenant B - Isolation in 5ms ]               |
|  └── Offloaded Hardware Engine (AWS Nitro / Google Andromeda ASIC)        |
+---------------------------------------------------------------------------+
      |
      v
[ DATACENTER LEAF-SPINE CLOS FABRIC (Non-Blocking Fat-Tree Network) ]
    [ Spine Switch 1 ]       [ Spine Switch 2 ]       [ Spine Switch 3 ]
         /      \\                 /      \\                 /      \\
    [ Leaf 1 ]   [ Leaf 2 ]   [ Leaf 3 ]   [ Leaf 4 ]   [ Leaf 5 ]   [ Leaf 6 ]
        |            |            |            |            |            |
     Rack 1       Rack 2       Rack 3       Rack 4       Rack 5       Rack 6
      (Independent Top-of-Rack Switches, Dual Power Feeds, PUE = 1.15)
=============================================================================`,
        keyTakeaways: [
          "Serverless is an abstraction boundary: The provider operates fleet scheduling, hardware placement, and microVM isolation.",
          "Leaf-Spine / Clos network topologies eliminate single-switch bottlenecks, providing uniform low latency for east-west microservice traffic.",
          "Hardware offloading (AWS Nitro, Google Andromeda) shifts hypervisor network and storage overhead onto dedicated PCIe ASICs.",
          "Datacenter physics (PUE, cooling, power phases) directly shape cloud Availability Zones and regional resilience models.",
        ],
        codeExample: `# AWS Nitro / MicroVM Conceptual Model: Launching Ephemeral Firecracker Process
# Explaining how Serverless achieves sub-5ms cold-start isolation
def boot_microvm_instance(kernel_path: str, rootfs_path: str, vcpu_count: int, mem_mb: int):
    config = {
        "boot-source": {
            "kernel_image_path": kernel_path,
            "boot_args": "console=ttyS0 reboot=k panic=1 pci=off nomodules rw"
        },
        "drives": [
            {
                "drive_id": "rootfs",
                "path_on_host": rootfs_path,
                "is_root_device": True,
                "is_read_only": False
            }
        ],
        "machine-config": {
            "vcpu_count": vcpu_count,
            "mem_size_mib": mem_mb,
            "ht_enabled": False
        }
    }
    # MicroVM boots stripped Linux kernel in ~5ms without legacy BIOS/ACPI overhead!
    return config`,
      },
    ],
    []
  );

  const currentTopic = topics[selectedTopic] || topics[0];

  // =========================================================================
  // 21 MASTERY TEST QUESTIONS (SECTION 129)
  // =========================================================================
  const masteryQuestions = [
    {
      q: "Why is a timeout fundamentally ambiguous in a distributed system?",
      a: "A timeout provides zero information about the true state of the remote system. Across an unreliable network link, a timeout can mean: (1) The request packet was dropped before reaching the server, (2) The server crashed before executing, (3) The server received and successfully executed the transaction, but the acknowledgment packet was dropped on the return path, or (4) The server is running slowly and will execute the operation in 30 seconds. Because the client cannot distinguish between these states, treating a timeout as a failure without idempotency keys causes duplicate writes.",
    },
    {
      q: "Why can't a distributed system assume perfectly synchronized clocks?",
      a: "Physical quartz crystals in commodity hardware drift due to ambient temperature variations, voltage fluctuations, and component aging. While NTP (Network Time Protocol) attempts to synchronize clocks, network latency is non-deterministic, jittery, and asymmetric. NTP can only synchronize clocks within tens or hundreds of milliseconds across datacenters. Therefore, two independent servers can easily disagree on whether Event A occurred before Event B based on physical wall-clock timestamps.",
    },
    {
      q: "What does the happened-before relation (->) mean?",
      a: "Formulated by Leslie Lamport, happened-before (->) defines causal ordering without relying on physical clocks: (1) If events a and b occur within the same thread of execution and a comes before b, then a -> b. (2) If a is the sending of a message and b is the receipt of that same message, then a -> b. (3) If a -> b and b -> c, then a -> c (transitivity). If neither a -> b nor b -> a holds, the two events are concurrent (a || b).",
    },
    {
      q: "Why are Lamport clocks useful but insufficient to identify all concurrency?",
      a: "Lamport clocks assign a scalar integer to events such that if a -> b, then L(a) < L(b). However, the converse is FALSE: L(a) < L(b) does NOT imply that a happened-before b. Two completely independent events on separate machines could happen to have L(a)=1 and L(b)=2. Lamport clocks establish a total topological ordering for tie-breaking, but cannot distinguish causal events from concurrent events. Vector Clocks solve this by tracking an array of counters across all nodes.",
    },
    {
      q: "Why is replication easier than maintaining strong consistency?",
      a: "Replication simply means copying bytes from one machine to another. Asynchronous replication is trivial: write locally, acknowledge to client, and stream deltas to replicas in the background. Maintaining strong consistency (linearizability), however, requires cross-node coordination, consensus, quorums, lease management, atomic commit, and ordering guarantees that force the system to pay network latency penalties and sacrifice availability during network partitions.",
    },
    {
      q: "Why does R + W > N matter for quorum overlap, and why does quorum overlap alone not define linearizability?",
      a: "By the Pigeonhole Principle, if R + W > N, the read set and write set must share at least one overlapping node, guaranteeing that any read quorum will observe the latest version number. However, quorum overlap alone does not yield linearizability: If a read executes concurrently with a write that has only updated one node of the quorum, Reader 1 might observe the new value on Node 1, while Reader 2 reading moments later might read Nodes 2 and 3 and observe the old value! Linearizability requires read-repair or consensus leases to ensure no observer can travel backward in time.",
    },
    {
      q: "What exactly does consensus solve?",
      a: "Consensus solves the problem of getting a set of independent, potentially failing processes to agree on a single value or an ordered sequence of decisions over an unreliable network. It guarantees Safety (Agreement: no two processes decide different values; Validity: the decided value was proposed) and Liveness (Termination: all non-faulty processes eventually decide) despite node crashes and packet losses.",
    },
    {
      q: "Why does consensus not automatically mean 'the database is consistent'?",
      a: "Consensus only ensures that all replicas agree on the exact same sequence of log entries. It does not prevent application-level bugs, invalid business logic (e.g. withdrawing money without checking balance), race conditions outside the log, or stale reads from followers if the database allows asynchronous read replicas. Consensus is an agreement engine, not an application correctness validator.",
    },
    {
      q: "What are safety and liveness, and why can a system preserve safety by sacrificing availability?",
      a: "Safety guarantees that 'nothing bad ever happens' (e.g. no two leaders elected simultaneously; no conflicting transactions committed). Liveness guarantees that 'something good eventually happens' (e.g. a request eventually receives a response). During a network partition, a consensus cluster that cannot reach a majority quorum halts writes. By refusing writes, it sacrifices Liveness/Availability, but guarantees Safety: no split-brain divergence can ever occur.",
    },
    {
      q: "What does FLP actually say, and why doesn't it mean practical consensus is impossible?",
      a: "The Fischer-Lynch-Paterson (FLP) theorem proves that in a fully asynchronous system, no deterministic consensus algorithm can guarantee termination in the presence of even a single unannounced crash failure. It does not mean consensus is impossible in real systems; it means production protocols must abandon pure asynchrony. Real protocols use Partial Synchrony (assuming the network eventually stabilizes) or randomized failure detectors (Raft's randomized election timers) to guarantee progress in practice.",
    },
    {
      q: "Why do consensus algorithms need concepts such as terms, leaders, quorums, or failure detectors?",
      a: "Terms act as logical epoch clocks, allowing nodes to instantly recognize and depose stale leaders without physical time. Leaders centralize command sequencing to eliminate conflicting concurrent proposals. Quorums ensure that decisions cannot be made by isolated minority partitions. Failure detectors allow healthy nodes to suspect dead leaders and initiate timely elections without human intervention.",
    },
    {
      q: "Why is state-machine replication such a powerful abstraction?",
      a: "State-Machine Replication (SMR) decouples the complexity of distributed consensus from the complexity of application state. Instead of trying to synchronize complex, mutable in-memory data structures directly, consensus only agrees on an immutable, sequentially ordered log of operations. Because deterministic state machines fed identical inputs in identical order produce identical states, replication becomes foolproof.",
    },
    {
      q: "Why can 2PC provide atomic commit but still create blocking/availability problems?",
      a: "Two-Phase Commit guarantees atomicity (all commit or all abort), but it is a blocking protocol. If participants vote YES in Phase 1 and the coordinator crashes before sending Phase 2 COMMIT/ABORT, participants are trapped in an uncertain state. They cannot commit independently (the coordinator might have aborted) and cannot abort (the coordinator might have committed). They must hold row locks indefinitely, blocking other transactions and halting availability.",
    },
    {
      q: "Why might a saga be preferable to a distributed ACID transaction?",
      a: "In modern distributed microservices spanning multiple databases and cloud networks, holding distributed locks across 2PC creates massive latency and tight coupling. A saga breaks a distributed transaction into a series of local transactions linked by compensating actions. If a later step fails, compensations roll back earlier steps. Sagas sacrifice strict isolation to achieve horizontal scalability, high availability, and loose service coupling.",
    },
    {
      q: "Why is a good shard key about traffic as well as data distribution?",
      a: "A shard key that distributes data evenly by storage size can still cause catastrophic failure if query traffic is skewed. For example, partitioning an e-commerce platform by 'merchant_id' might balance disk space, but on Black Friday, 80% of all read and write traffic hits the single shard hosting Nike or Apple. A good shard key must distribute both data volume AND request throughput uniformly.",
    },
    {
      q: "Why is rebalancing one of the hardest hidden problems in distributed storage?",
      a: "Rebalancing occurs while the storage cluster is actively serving live production read and write traffic. The system must copy gigabytes or terabytes of data across the network, maintain dual-write buffers for in-flight mutations, track delta changes, execute an atomic routing cutover without dropping connections, clean up old disk blocks, and recover cleanly if either source or target node crashes mid-transfer.",
    },
    {
      q: "Why can three replicas still provide terrible fault tolerance if they share one failure domain?",
      a: "Replicating data across three separate physical servers provides zero fault tolerance if all three servers reside in the same physical rack, connected to the same Top-of-Rack (ToR) switch, or powered by the same Power Distribution Unit (PDU). A single blown breaker or switch firmware crash takes down all three replicas simultaneously. Replicas are only as reliable as their failure domain independence (separate racks, power buses, and Availability Zones).",
    },
    {
      q: "Why does a scheduler itself become a distributed-systems problem at hyperscale?",
      a: "When a cloud cluster grows to tens of thousands of physical machines running millions of tasks, a centralized monolithic scheduler becomes a massive CPU, memory, and lock contention bottleneck. Hyperscale architectures (Google Omega, Borg) turn the scheduler into a distributed system: multiple parallel schedulers operating over a shared state repository using optimistic concurrency control and transaction rollbacks to schedule jobs concurrently.",
    },
    {
      q: "Why does serverless hide distributed infrastructure rather than eliminate it?",
      a: "Serverless eliminates the customer's operational burden of managing VMs, but shifts that burden into an enormously complex distributed control plane operated by the cloud provider. Beneath the hood, the serverless platform must authenticate requests, allocate capacity, boot microVMs (Firecracker) in <5ms, attach virtual network interfaces, fetch runtime layers, enforce quotas, and route requests across thousands of servers with automated fault recovery.",
    },
    {
      q: "Why do physical datacenter topology, network latency, power, and cooling affect the semantics and cost of cloud services?",
      a: "The speed of light in fiber creates a physical lower bound of ~1ms round-trip latency per 100km. Cross-zone and cross-region synchronous consensus transactions must pay this latency penalty for every write. Furthermore, datacenters are hard-constrained by electric power grid capacity and thermal dissipation (PUE). Running high-density AI accelerators demands liquid cooling and massive power feeds, dictating where capacity can physically exist and how cloud providers price compute.",
    },
    {
      q: "The Ultimate Question: If given 5 replicas, a network that can partition, crash failures, replication, transactions, and a requirement for high availability, which guarantees do you give up and why?",
      a: "By the PACELC and CAP theorems, you CANNOT have both strong linearizable consistency and 100% availability during a network partition. If high availability is a non-negotiable business requirement (e.g. social feed, shopping cart, telemetry), you must give up Linearizability and Global ACID transactions, choosing Eventual Consistency, CRDTs, or Sagas. If strict financial ledger correctness is non-negotiable, you must give up Availability during partitions, choosing a Raft/Paxos-backed system (like Spanner or CockroachDB) that halts writes to minority partitions to preserve linearizable safety.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-[130px]" />
        <div className="absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-amber-400/10 blur-[150px]" />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* TOP HEADER */}
        <ModuleNav
          track="cloud"
          currentModuleId="advanced"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Systems AI"
        />

        {/* HERO BANNER */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl">
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-400 mb-4">
              <Boxes size={13} />
              <span>Advanced Cloud & Distributed Systems</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white">
              Advanced Cloud Systems
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-stone-300">
              The shift from cloud consumer to systems architect. Grounded in the academic backbone of{" "}
              <span className="text-orange-400 font-semibold">MIT 6.5840 / 6.5830</span>,{" "}
              <span className="text-orange-400 font-semibold">Harvard CS 2620</span>,{" "}
              <span className="text-orange-400 font-semibold">CMU 15-440</span>, and{" "}
              <span className="text-orange-400 font-semibold">Cambridge Concurrent & Distributed Systems</span>. Master
              the machinery beneath cloud services: Partial Failure, Lamport Clocks, Raft Consensus, State-Machine
              Replication, 2PC vs Sagas, Consistent Hashing, TrueTime, GFS & Erasure Coding, and Borg Schedulers.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-400">
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> FLP Impossibility & Consensus
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Raft Replicated Logs
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Spanner TrueTime API
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Borg Multi-Dimensional Bin Packing
              </span>
            </div>
          </div>
        </div>

        {/* EMBEDDED AI TUTOR */}
        {SHOW_NOVA_AI && showAiTutor && (
          <div className="mb-10 overflow-hidden rounded-3xl border border-orange-300 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-600">
                  Nova AI • Principal Distributed Systems Architect Tutor
                </span>
              </div>
              <button
                onClick={() => setShowAiTutor(false)}
                className="text-xs font-mono text-stone-400 hover:text-stone-700"
              >
                ✕ Close
              </button>
            </div>
            <div className="mt-4">
              <LearningRo module="distributedsystems" />
            </div>
          </div>
        )}

        {/* WORKSPACE NAVIGATION TABS: THEORY, SIMULATORS & TESTS */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
          <button
            onClick={() => setActiveTab("theory")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "theory"
                ? "bg-[#18181b] text-white"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <Compass size={15} />
            <span>12 Core Syllabus Topics</span>
          </button>
          <button
            onClick={() => setActiveTab("raft-lab")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "raft-lab"
                ? "bg-[#f97316] text-white shadow-orange-500/20"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <Zap size={15} />
            <span>Lab 1: Raft Consensus Cluster Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab("quorum-lab")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "quorum-lab"
                ? "bg-[#f97316] text-white shadow-orange-500/20"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <Scale size={15} />
            <span>Lab 2: Quorum & Consistency Analyzer (N, R, W)</span>
          </button>
          <button
            onClick={() => setActiveTab("gameday")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "gameday"
                ? "bg-[#f97316] text-white shadow-orange-500/20"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <AlertTriangle size={15} />
            <span>Lab 3: MiniCloud Failure GameDay (6 Scenarios)</span>
          </button>
          <button
            onClick={() => setActiveTab("mastery")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "mastery"
                ? "bg-[#18181b] text-white"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <CheckCircle2 size={15} />
            <span>Advanced Systems Mastery Test (21 Questions)</span>
          </button>
        </div>

        {/* =================================================================== */}
        {/* VIEW 1: THEORY & 12 SYLLABUS TOPICS */}
        {/* =================================================================== */}
        {activeTab === "theory" && (
          <div className="grid gap-8 lg:grid-cols-12 mb-16">
            {/* TOPIC SELECTOR (COL-4) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-xs">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-4 px-2">
                  Advanced Systems Syllabus • 12 Topics
                </h3>
                <div className="space-y-1.5">
                  {topics.map((t, idx) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTopic(idx)}
                      className={`w-full text-left rounded-2xl px-4 py-3 text-xs transition flex flex-col gap-1 ${
                        selectedTopic === idx
                          ? "bg-[#18181b] text-white font-bold shadow-md shadow-black/10"
                          : "text-stone-700 hover:bg-[#f2efe9] font-medium"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono text-[10px] uppercase tracking-wider ${
                            selectedTopic === idx ? "text-orange-400" : "text-stone-400"
                          }`}
                        >
                          Topic {t.id} • {t.week}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                            selectedTopic === idx
                              ? "bg-stone-800 text-orange-300"
                              : "bg-stone-100 text-stone-600"
                          }`}
                        >
                          {t.badge}
                        </span>
                      </div>
                      <span className="font-bold leading-snug">{t.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CURRICULUM ROADMAP BADGE */}
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs text-center">
                <span className="inline-block rounded-full bg-orange-100 text-orange-700 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                  Cloud Architecture Track
                </span>
                <h4 className="text-sm font-bold text-[#18181b]">Curriculum Milestone</h4>
                <p className="text-xs text-stone-500 mt-1 mb-4">
                  Module 13 takes you behind the cloud console into the algorithms, protocols, and hardware
                  realities powering global hyperscale infrastructure.
                </p>
                <button
                  onClick={() => navigate("/learning")}
                  className="w-full rounded-xl bg-orange-500 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-orange-600 transition"
                >
                  Curriculum Overview
                </button>
              </div>
            </div>

            {/* MAIN TOPIC CONTENT (COL-8) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
                {/* TOPIC HEADER */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#e7e3da]">
                  <div>
                    <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                      {currentTopic.week} • {currentTopic.badge}
                    </span>
                    <h2 className="text-2xl font-black text-[#18181b] mt-1">{currentTopic.title}</h2>
                    <p className="text-xs font-medium text-stone-500 mt-1">{currentTopic.focus}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      disabled={selectedTopic === 0}
                      onClick={() => setSelectedTopic((prev) => Math.max(0, prev - 1))}
                      className="p-2 rounded-xl border border-[#e7e3da] text-stone-600 hover:bg-[#f6f4ee] disabled:opacity-30 disabled:hover:bg-transparent"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <span className="font-mono text-xs font-bold text-stone-400">
                      {selectedTopic + 1} / {topics.length}
                    </span>
                    <button
                      disabled={selectedTopic === topics.length - 1}
                      onClick={() => setSelectedTopic((prev) => Math.min(topics.length - 1, prev + 1))}
                      className="p-2 rounded-xl border border-[#e7e3da] text-stone-600 hover:bg-[#f6f4ee] disabled:opacity-30 disabled:hover:bg-transparent"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {/* THEORY DESCRIPTION */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-2">
                    Theoretical Foundations & Academic Rationale
                  </h4>
                  <p className="text-sm leading-relaxed text-stone-700">{currentTopic.theory}</p>
                </div>

                {/* DIAGRAM CONTAINER */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-2">
                    Distributed Protocol / Architectural Architecture Diagram
                  </h4>
                  <pre className="rounded-2xl bg-[#18181b] p-4 text-[11px] font-mono leading-relaxed text-stone-200 overflow-x-auto shadow-inner border border-stone-800">
                    {currentTopic.diagram}
                  </pre>
                </div>

                {/* KEY TAKEAWAYS */}
                <div className="mt-6 rounded-2xl bg-orange-50/60 border border-orange-200/80 p-5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-800 mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-orange-600" />
                    Key Architectural Invariants & Takeaways
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {currentTopic.keyTakeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold shrink-0">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CODE / IMPLEMENTATION EXAMPLE */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-2 flex items-center gap-2">
                    <FileCode size={14} />
                    Distributed Systems Code Implementation Pattern
                  </h4>
                  <pre className="rounded-2xl bg-stone-900 p-4 text-[11px] font-mono leading-relaxed text-emerald-400 overflow-x-auto shadow-inner border border-stone-800">
                    {currentTopic.codeExample}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 2: LAB 1 - RAFT CONSENSUS CLUSTER SIMULATOR */}
        {/* =================================================================== */}
        {activeTab === "raft-lab" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs mb-16">
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                Interactive Engineering Lab 1 • MIT 6.5840 / Stanford Raft
              </span>
              <h2 className="text-2xl font-black text-[#18181b] mt-1">
                5-Node Raft Consensus Cluster Simulator
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-2 leading-relaxed">
                Experience distributed state-machine replication live. Inject node crashes, force network
                partitions, test election timeouts, and observe why a 2-node minority partition cannot commit writes
                while a 3-node majority partition safely advances term and log history.
              </p>
            </div>

            {/* CLUSTER CONTROL TOOLBAR */}
            <div className="mb-8 flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-stone-100 border border-stone-200">
              <button
                onClick={handleProposeLog}
                className="flex items-center gap-2 rounded-xl bg-[#18181b] px-4 py-2.5 text-xs font-bold text-white hover:bg-stone-800 transition shadow-xs"
              >
                <Play size={14} className="text-orange-400" />
                <span>Propose Client Write (SET x=val)</span>
              </button>
              <button
                onClick={handleKillLeader}
                className="flex items-center gap-2 rounded-xl bg-rose-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-rose-700 transition shadow-xs"
              >
                <AlertTriangle size={14} />
                <span>Kill Current Leader</span>
              </button>
              <button
                onClick={handleTriggerElection}
                className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-xs font-bold text-white hover:bg-orange-600 transition shadow-xs"
              >
                <RefreshCw size={14} />
                <span>Trigger Election Timeout</span>
              </button>
              {!isPartitioned ? (
                <button
                  onClick={handleNetworkPartition}
                  className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-xs font-bold text-stone-700 hover:border-orange-400 transition shadow-xs"
                >
                  <Share2 size={14} className="text-rose-600" />
                  <span>Split Partition (2 vs 3)</span>
                </button>
              ) : (
                <button
                  onClick={handleHealPartition}
                  className="flex items-center gap-2 rounded-xl border border-emerald-400 bg-emerald-50 px-4 py-2.5 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition shadow-xs"
                >
                  <Check size={14} className="text-emerald-600" />
                  <span>Heal Network Partition</span>
                </button>
              )}
              <button
                onClick={handleResetRaft}
                className="flex items-center gap-1.5 rounded-xl border border-stone-300 bg-white px-3 py-2.5 text-xs font-bold text-stone-600 hover:bg-stone-50 transition ml-auto"
                title="Reset Cluster"
              >
                <RotateCcw size={14} />
                <span>Reset</span>
              </button>
            </div>

            {/* CLUSTER TELEMETRY METRICS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <span className="font-mono text-[10px] uppercase font-bold text-stone-500">Current Epoch Term</span>
                <div className="text-2xl font-black text-[#18181b] mt-1 font-mono">Term {raftTerm}</div>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <span className="font-mono text-[10px] uppercase font-bold text-stone-500">Cluster Quorum State</span>
                <div className="text-2xl font-black text-emerald-700 mt-1 font-mono">
                  {aliveNodes.length} / 5 Nodes Alive
                </div>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <span className="font-mono text-[10px] uppercase font-bold text-stone-500">Majority Threshold</span>
                <div className="text-2xl font-black text-orange-600 mt-1 font-mono">
                  {majorityNeeded} Votes Needed
                </div>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <span className="font-mono text-[10px] uppercase font-bold text-stone-500">Network Partition Status</span>
                <div className="text-sm font-bold mt-2 font-mono">
                  {isPartitioned ? (
                    <span className="text-rose-600 bg-rose-50 px-2 py-1 rounded-md">SPLIT: {`{N1,N2}`} vs {`{N3,N4,N5}`}</span>
                  ) : (
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">HEALTHY: Fully Meshed</span>
                  )}
                </div>
              </div>
            </div>

            {/* 5 NODES VISUAL GRID */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {raftNodes.map((node) => {
                const isLeader = node.role === "Leader" && node.alive;
                return (
                  <div
                    key={node.id}
                    className={`rounded-2xl border p-4 transition-all flex flex-col justify-between ${
                      !node.alive
                        ? "border-stone-200 bg-stone-100 opacity-60 text-stone-400"
                        : isLeader
                        ? "border-orange-500 bg-orange-50/50 shadow-md ring-2 ring-orange-400/30"
                        : "border-stone-200 bg-white"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-stone-200/60">
                        <span className="font-mono font-bold text-xs">Node {node.id}</span>
                        <span
                          className={`font-mono text-[10px] px-2 py-0.5 rounded-full font-bold ${
                            !node.alive
                              ? "bg-rose-100 text-rose-800"
                              : isLeader
                              ? "bg-orange-500 text-white shadow-xs"
                              : "bg-stone-100 text-stone-700"
                          }`}
                        >
                          {!node.alive ? "CRASHED" : node.role}
                        </span>
                      </div>

                      <div className="mt-3 space-y-1.5 text-xs font-mono">
                        <div className="flex justify-between text-stone-600">
                          <span>Status:</span>
                          <span className={node.alive ? "text-emerald-700 font-bold" : "text-rose-600 font-bold"}>
                            {node.alive ? "Online" : "Halted"}
                          </span>
                        </div>
                        {isPartitioned && (
                          <div className="flex justify-between text-stone-600">
                            <span>Partition:</span>
                            <span className="text-orange-700 font-bold">
                              {node.id <= 2 ? "Group Alpha (2)" : "Group Beta (3)"}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between text-stone-600">
                          <span>Log Size:</span>
                          <span className="font-bold text-stone-900">{node.log.length} entries</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-200/60">
                      <span className="font-mono text-[9px] uppercase font-bold text-stone-400 block mb-1">
                        Latest Log Entry:
                      </span>
                      <div className="text-[10px] font-mono text-stone-700 bg-stone-100/80 p-1.5 rounded truncate">
                        {node.log[node.log.length - 1] || "empty"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CLUSTER EVENT LOG / AUDIT STREAM */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-400 mb-2 flex items-center gap-2">
                <Terminal size={14} />
                Live Consensus Event Stream & State Machine Telemetry
              </h4>
              <div className="rounded-2xl bg-[#18181b] p-4 font-mono text-xs text-stone-300 space-y-1.5 max-h-48 overflow-y-auto border border-stone-800 shadow-inner">
                {raftHistory.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-orange-400 select-none">&gt;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 3: LAB 2 - QUORUM & CONSISTENCY ANALYZER (N, R, W) */}
        {/* =================================================================== */}
        {activeTab === "quorum-lab" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs mb-16">
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                Interactive Engineering Lab 2 • Amazon Dynamo & Apache Cassandra
              </span>
              <h2 className="text-2xl font-black text-[#18181b] mt-1">
                Quorum & Consistency Analyzer (N, R, W)
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-2 leading-relaxed">
                Explore the mathematical relationship between Cluster Size (N), Read Quorum (R), and Write Quorum
                (W). Test how adjusting R and W shifts your architecture between Strong Consistency, Read-Optimized,
                Write-Optimized, and Eventual Consistency configurations.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 mb-8">
              {/* SLIDERS CONTROLS (COL-6) */}
              <div className="lg:col-span-6 space-y-6 rounded-2xl border border-stone-200 bg-stone-50 p-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-stone-800 font-mono uppercase">
                      Total Cluster Replicas (N): {quorumN}
                    </label>
                    <span className="font-mono text-xs text-stone-500">Nodes in Replica Set</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="9"
                    step="2"
                    value={quorumN}
                    onChange={(e) => {
                      const n = parseInt(e.target.value);
                      setQuorumN(n);
                      setQuorumR(Math.min(quorumR, n));
                      setQuorumW(Math.min(quorumW, n));
                    }}
                    className="w-full accent-orange-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-1">
                    <span>3 Nodes</span>
                    <span>5 Nodes (Default)</span>
                    <span>7 Nodes</span>
                    <span>9 Nodes</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-stone-800 font-mono uppercase">
                      Write Quorum (W): {quorumW} Acks
                    </label>
                    <span className="font-mono text-xs text-stone-500">Required Write Responses</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={quorumN}
                    step="1"
                    value={quorumW}
                    onChange={(e) => setQuorumW(parseInt(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-1">
                    <span>W = 1 (Fast Async)</span>
                    <span>W = {Math.floor(quorumN / 2) + 1} (Majority)</span>
                    <span>W = {quorumN} (Full Sync)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-stone-800 font-mono uppercase">
                      Read Quorum (R): {quorumR} Nodes
                    </label>
                    <span className="font-mono text-xs text-stone-500">Required Read Responses</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={quorumN}
                    step="1"
                    value={quorumR}
                    onChange={(e) => setQuorumR(parseInt(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-1">
                    <span>R = 1 (Fast Read)</span>
                    <span>R = {Math.floor(quorumN / 2) + 1} (Majority)</span>
                    <span>R = {quorumN} (All Nodes)</span>
                  </div>
                </div>
              </div>

              {/* MATHEMATICAL EVALUATION CARD (COL-6) */}
              <div className="lg:col-span-6 space-y-4">
                <div
                  className={`rounded-2xl border p-6 ${
                    isQuorumOverlapping
                      ? "border-emerald-300 bg-emerald-50/40"
                      : "border-amber-300 bg-amber-50/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase text-stone-600">
                      Pigeonhole Overlap Check
                    </span>
                    <span
                      className={`font-mono text-xs px-3 py-1 rounded-full font-bold ${
                        isQuorumOverlapping
                          ? "bg-emerald-600 text-white"
                          : "bg-amber-600 text-white"
                      }`}
                    >
                      {isQuorumOverlapping ? "R + W > N SATISFIED" : "WEAK OVERLAP (R + W <= N)"}
                    </span>
                  </div>

                  <div className="mt-3 font-mono text-xl font-black text-stone-900">
                    R ({quorumR}) + W ({quorumW}) = {quorumR + quorumW}{" "}
                    {isQuorumOverlapping ? ">" : "<="} N ({quorumN})
                  </div>

                  <p className="mt-2 text-xs text-stone-700 leading-relaxed">
                    {isQuorumOverlapping
                      ? "Strict Quorum Overlap: The read quorum and write quorum are mathematically guaranteed to intersect at least 1 node. With versioned read-repair, clients will not observe stale writes."
                      : "Relaxed / Eventual Consistency: The read quorum and write quorum might NOT intersect. Clients can experience dirty reads or stale historical data until background anti-entropy syncs."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-stone-200 bg-white p-4">
                    <span className="font-mono text-[10px] uppercase font-bold text-stone-400">
                      Write Fault Tolerance
                    </span>
                    <div className="text-2xl font-black text-stone-900 mt-1 font-mono">
                      {writeFaultTolerance} Nodes
                    </div>
                    <span className="text-[11px] text-stone-500">
                      Cluster survives {writeFaultTolerance} crashed node(s) during writes.
                    </span>
                  </div>
                  <div className="rounded-2xl border border-stone-200 bg-white p-4">
                    <span className="font-mono text-[10px] uppercase font-bold text-stone-400">
                      Read Fault Tolerance
                    </span>
                    <div className="text-2xl font-black text-stone-900 mt-1 font-mono">
                      {readFaultTolerance} Nodes
                    </div>
                    <span className="text-[11px] text-stone-500">
                      Cluster survives {readFaultTolerance} crashed node(s) during reads.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 4: LAB 3 - MINICLOUD FAILURE GAMEDAY (SECTION 125) */}
        {/* =================================================================== */}
        {activeTab === "gameday" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs mb-16">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                  Interactive Engineering Lab 3 • Harvard CS 2620 Failure Testing
                </span>
                <h2 className="text-2xl font-black text-[#18181b] mt-1">
                  MiniCloud Distributed System Failure GameDay
                </h2>
                <p className="text-xs md:text-sm text-stone-600 mt-1">
                  Test your real-time architectural decision making across the 6 canonical distributed-systems failure cases.
                </p>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50 px-4 py-2 font-mono text-xs font-bold text-orange-700">
                Score: {gameScore} XP • Case {gameScenarioIndex + 1} / {gameScenarios.length}
              </div>
            </div>

            {/* SCENARIO CARD */}
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 md:p-8 mb-8">
              <span className="inline-block rounded-full bg-stone-200 text-stone-800 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider mb-3">
                {gameScenarios[gameScenarioIndex].title}
              </span>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                Incident Context & Failure Event:
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-4">
                {gameScenarios[gameScenarioIndex].description}
              </p>
              <h4 className="text-sm font-bold text-orange-950 font-mono uppercase tracking-wide">
                Question: {gameScenarios[gameScenarioIndex].question}
              </h4>
            </div>

            {/* MULTI-CHOICE OPTIONS */}
            <div className="space-y-3 mb-8">
              {gameScenarios[gameScenarioIndex].options.map((option) => (
                <button
                  key={option.id}
                  disabled={selectedGameChoice !== null}
                  onClick={() => handleSelectGameOption(option)}
                  className={`w-full text-left rounded-2xl border p-4 text-xs md:text-sm transition flex items-start gap-3 ${
                    selectedGameChoice === null
                      ? "border-stone-200 bg-white hover:border-orange-400 hover:bg-orange-50/30"
                      : option.isCorrect
                      ? "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold"
                      : selectedGameChoice === option.id
                      ? "border-rose-500 bg-rose-50 text-rose-950"
                      : "border-stone-200 bg-stone-50 opacity-50"
                  }`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border font-mono font-bold text-xs bg-white">
                    {option.id}
                  </span>
                  <span className="mt-0.5">{option.text}</span>
                </button>
              ))}
            </div>

            {/* FEEDBACK & NEXT BUTTON */}
            {gameFeedback && (
              <div
                className={`rounded-2xl border p-5 mb-8 ${
                  gameFeedback.isCorrect
                    ? "border-emerald-300 bg-emerald-50/60 text-emerald-900"
                    : "border-rose-300 bg-rose-50/60 text-rose-900"
                }`}
              >
                <div className="flex items-center gap-2 font-bold mb-1 font-mono text-sm">
                  {gameFeedback.isCorrect ? (
                    <>
                      <CheckCircle2 size={18} className="text-emerald-600" />
                      <span>Architectural Verdict: Correct Protocol Decision (+100 XP)</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle size={18} className="text-rose-600" />
                      <span>Architectural Verdict: Invariant Violation Detected</span>
                    </>
                  )}
                </div>
                <p className="text-xs md:text-sm leading-relaxed mt-2">{gameFeedback.rationale}</p>
                <button
                  onClick={handleNextGameScenario}
                  className="mt-4 rounded-xl bg-[#18181b] px-4 py-2 text-xs font-bold text-white hover:bg-stone-800 transition"
                >
                  Proceed to Next Failure Case →
                </button>
              </div>
            )}
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 5: MASTERY TEST ACCORDION (21 QUESTIONS - SECTION 129) */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs mb-16">
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                Advanced Systems Final Assessment • Section 129
              </span>
              <h2 className="text-2xl font-black text-[#18181b] mt-1">
                Advanced Distributed Systems Mastery Test
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-2 leading-relaxed">
                21 foundational questions derived from MIT 6.5840, MIT 6.5830, Harvard CS 2620, CMU 15-440, and
                Cambridge Concurrent & Distributed Systems. Click any question to reveal its authoritative architectural
                explanation.
              </p>
            </div>

            <div className="space-y-3">
              {masteryQuestions.map((mq, idx) => {
                const isOpen = openMasteryIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-stone-200 bg-[#faf8f5] overflow-hidden transition"
                  >
                    <button
                      onClick={() => setOpenMasteryIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between text-xs sm:text-sm font-bold text-stone-800 hover:text-orange-600"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-orange-600">Q{idx + 1}.</span>
                        <span>{mq.q}</span>
                      </span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 bg-white">
                        <span className="font-mono text-[10px] font-bold uppercase text-orange-600 block mb-1">
                          Architectural Answer & Deep Explanation:
                        </span>
                        {mq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* BOTTOM CURRICULUM FOOTER */}
        <div className="rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
              Cloud Architecture Track
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Modules 1 through 13 Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              From Cloud Foundations, VPCs, Compute, Storage, Databases, Large-Scale Architecture, Deep AWS, Deep Azure,
              Deep Google Cloud, Multi-Cloud Engineering, Cloud Security, and Cloud Economics to the Advanced Machinery
              Underneath (Raft, Spanner, Borg, and TrueTime).
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/cloud/economics")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-300 hover:text-white hover:bg-stone-700 transition"
            >
              ← Module 12: Economics
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition"
            >
              Curriculum Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
