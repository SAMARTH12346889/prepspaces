import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Database,
  Layers,
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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  ConsistencyHierarchyDiagram,
  QuorumIntersectionDiagram,
  ReadRepairLifecycleDiagram,
  ConcurrentWritesCasDiagram,
  VisualDiagramComponentModule10,
} from "./SystemDesignConsistencyDiagrams";

export default function SystemDesignConsistency() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "calculators" | "qa" | "project" | "assessment" | "reading"
  const [activeWeek, setActiveWeek] = useState(1); // 1 | 2 | 3
  const [activeLesson, setActiveLesson] = useState("10.1");

  // Expanded Q&A accordion states
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 1: QUORUM OVERLAP & FAULT TOLERANCE CALCULATOR
  // ---------------------------------------------------------------------------
  const [calcN, setCalcN] = useState(3);
  const [calcW, setCalcW] = useState(2);
  const [calcR, setCalcR] = useState(2);

  const quorumSummary = useMemo(() => {
    const minIntersection = Math.max(0, calcR + calcW - calcN);
    const hasOverlap = calcR + calcW > calcN;
    const writeFailureTolerance = calcN - calcW;
    const readFailureTolerance = calcN - calcR;

    let consistencyClassification = "Eventual Consistency (Weak Quorum)";
    if (hasOverlap) {
      if (calcW === calcN) {
        consistencyClassification = "Pessimistic Writes (R=1, W=N Strong)";
      } else if (calcR === calcN) {
        consistencyClassification = "Fast Writes, Pessimistic Reads (R=N, W=1)";
      } else {
        consistencyClassification = "Balanced Strict Quorum (R + W > N)";
      }
    }

    return {
      minIntersection,
      hasOverlap,
      writeFailureTolerance,
      readFailureTolerance,
      consistencyClassification,
    };
  }, [calcN, calcW, calcR]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 2: PREPSPACES CONSISTENCY DECISION MATRIX FILTER
  // ---------------------------------------------------------------------------
  const [selectedWorkflow, setSelectedWorkflow] = useState("all");

  const workflowItems = [
    {
      id: "popularity",
      name: "Public Course Popularity Views",
      recommended: "Eventual Consistency (AP)",
      rationale:
        "Small temporary differences cause zero harm; write throughput must remain high without synchronous cross-replica locking.",
      category: "Catalog",
    },
    {
      id: "description",
      name: "Course Catalog Metadata",
      recommended: "Bounded Staleness / HTTP Caching",
      rationale:
        "Course titles and lesson lists change infrequently. Bounded staleness (e.g. 60 seconds) allows edge CDN caching while preventing stale descriptions after edits.",
      category: "Catalog",
    },
    {
      id: "progress",
      name: "Student Learning Progress",
      recommended: "Session Consistency (Read-Your-Writes)",
      rationale:
        "A student must immediately observe their own video progress checkpoints on subsequent page reloads, while other students do not need instant visibility.",
      category: "Learning",
    },
    {
      id: "grades",
      name: "Official Exam Grades",
      recommended: "Linearizability / Strict Serializable",
      rationale:
        "Conflicting grade submissions between instructors or stale GPA audits can result in incorrect degree certifications. Must use Optimistic CAS or 2PC.",
      category: "Assessment",
    },
    {
      id: "access",
      name: "User Access-Control & Role Changes",
      recommended: "Strong Consistency (CP)",
      rationale:
        "Revoking an instructor's permission must take effect immediately across all cluster nodes to prevent unauthorized access.",
      category: "Security",
    },
    {
      id: "analytics",
      name: "Analytics & Completion Reports",
      recommended: "Bounded Staleness (5 minutes)",
      rationale:
        "Aggregating millions of events can run against asynchronous read replicas or analytical projections without blocking transactional writes.",
      category: "Reporting",
    },
    {
      id: "ai-eval",
      name: "AI Evaluation Job State",
      recommended: "Idempotent Transactional Consistency",
      rationale:
        "Job transitions (QUEUED -> RUNNING -> COMPLETED) must be committed atomically to prevent duplicate evaluations.",
      category: "Learning",
    },
  ];

  const filteredWorkflows =
    selectedWorkflow === "all"
      ? workflowItems
      : workflowItems.filter((item) => item.category.toLowerCase() === selectedWorkflow.toLowerCase());

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 3: 3-REPLICA READ REPAIR SIMULATOR
  // ---------------------------------------------------------------------------
  const [replicasState, setReplicasState] = useState({
    A: { version: 8, title: "Advanced System Design", online: true },
    B: { version: 8, title: "Advanced System Design", online: true },
    C: { version: 7, title: "System Design", online: true },
  });
  const [simLog, setSimLog] = useState("Cluster initialized. Replica C holds stale version 7.");

  const toggleNodePower = (node) => {
    setReplicasState((prev) => ({
      ...prev,
      [node]: { ...prev[node], online: !prev[node].online },
    }));
  };

  const executeQuorumRead = () => {
    const onlineNodes = Object.entries(replicasState).filter(([_, s]) => s.online);
    if (onlineNodes.length < 2) {
      setSimLog("ERROR: Read Quorum (R=2) FAILED! Only " + onlineNodes.length + " node(s) available.");
      return;
    }

    // Pick 2 online nodes
    const sampled = onlineNodes.slice(0, 2);
    const highestVer = Math.max(...sampled.map(([_, s]) => s.version));
    const returnedRecord = sampled.find(([_, s]) => s.version === highestVer)[1];

    // Check if any sampled node is stale
    const staleNodes = sampled.filter(([_, s]) => s.version < highestVer);

    if (staleNodes.length > 0) {
      const repaired = { ...replicasState };
      staleNodes.forEach(([node]) => {
        repaired[node] = { ...repaired[node], version: highestVer, title: returnedRecord.title };
      });
      setReplicasState(repaired);
      setSimLog(
        `SUCCESS: Read Quorum queried [${sampled.map(([k]) => k).join(", ")}]. Highest version v${highestVer} returned to user. READ REPAIR triggered: Repaired Node ${staleNodes.map(([k]) => k).join(", ")} to v${highestVer}!`
      );
    } else {
      setSimLog(
        `SUCCESS: Read Quorum queried [${sampled.map(([k]) => k).join(", ")}]. All sampled nodes consistent at v${highestVer}. Returned "${returnedRecord.title}".`
      );
    }
  };

  // ---------------------------------------------------------------------------
  // 9-QUESTION ASSESSMENT QUIZ STATE
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "What does eventual consistency generally guarantee?",
      options: [
        "Every read immediately sees the latest global write",
        "Replicas eventually converge if updates stop and synchronization succeeds under the model's assumptions",
        "All concurrent writes are rejected",
      ],
      correct: 1,
      explanation:
        "Eventual consistency ensures that in the absence of new mutations, all replicas will eventually synchronize and return identical data. It does not provide a hard real-time upper bound on propagation delay.",
    },
    {
      id: 2,
      question: "What is the defining real-time property of linearizability?",
      options: [
        "Operations appear atomic in an order that respects real-time precedence for non-overlapping operations",
        "Every write must reach every physical server before returning",
        "Every operation has a globally synchronized wall-clock timestamp",
      ],
      correct: 0,
      explanation:
        "Linearizability requires that if operation A completes before operation B begins in absolute physical time, B must observe A's completed state (or a subsequent state). Operations appear to execute instantaneously on a single logical object.",
    },
    {
      id: 3,
      question:
        "For N=3, R=2, W=2, what is the minimum size of the intersection between any read and write quorums in the simple fixed-replica-set model?",
      options: ["0", "1", "2"],
      correct: 1,
      explanation:
        "By the pigeonhole formula: min_intersection = max(0, R + W - N) = max(0, 2 + 2 - 3) = 1. Every read quorum shares at least 1 node with every write quorum.",
    },
    {
      id: 4,
      question: "What does R + W > N establish in the simplified quorum model?",
      options: [
        "It proves complete linearizability for any database",
        "It guarantees that every read quorum intersects every write quorum for the same fixed replica set",
        "It guarantees that no replica can fail",
      ],
      correct: 1,
      explanation:
        "The condition R + W > N guarantees mathematical set intersection between the read and write replicas. However, achieving linearizability still requires correct version selection, conflict resolution, and synchronization protocols.",
    },
    {
      id: 5,
      question: "What is read-your-writes consistency?",
      options: [
        "A client can observe its own completed write in subsequent reads under the guarantee",
        "Every read must be executed on the same physical server",
        "Every replica must be updated simultaneously",
      ],
      correct: 0,
      explanation:
        "Read-your-writes guarantees that whenever an individual client commits a mutation, all subsequent reads executed by that same client within its session will reflect that mutation.",
    },
    {
      id: 6,
      question:
        "A quorum write succeeds while one replica remains stale. What may help the replicas converge?",
      options: [
        "Read repair or background anti-entropy repair",
        "Changing all application timestamps to local time",
        "Disabling every read request",
      ],
      correct: 0,
      explanation:
        "Read repair updates stale replicas when an inconsistent read is detected, while background anti-entropy repair (such as Cassandra Merkle tree synchronization) periodically compares and synchronizes drifted data.",
    },
    {
      id: 7,
      question: "What is a major risk of last-write-wins conflict resolution?",
      options: [
        "It always rejects concurrent writes",
        "The selected value may be undesirable if timestamp order does not reflect the intended business decision",
        "It makes quorum intersection impossible",
      ],
      correct: 1,
      explanation:
        "Last-Write-Wins (LWW) silently overwrites concurrent updates based solely on timestamps. If machine clocks drift or events happen concurrently, valid human business decisions can be permanently destroyed.",
    },
    {
      id: 8,
      question: "Which system documents session consistency using session tokens?",
      options: ["Azure Cosmos DB", "A bare HTTP connection", "A DNS A record"],
      correct: 0,
      explanation:
        "Microsoft Azure Cosmos DB exposes session consistency as its default model, passing session tokens back and forth between client SDKs and replicas to enforce monotonic reads and read-your-writes.",
    },
    {
      id: 9,
      question: "Why is RPO different from a quorum size?",
      options: [
        "RPO specifies an acceptable data-loss window for a defined recovery scenario; quorum size specifies response requirements in a replication protocol",
        "RPO always equals W",
        "Quorum size measures API latency",
      ],
      correct: 0,
      explanation:
        "Recovery Point Objective (RPO) is a disaster recovery business metric measuring tolerated data loss duration (e.g. at most 5 seconds of writes). Quorum size (W) is a protocol setting specifying how many replicas must acknowledge a mutation.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let count = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) count += 1;
    });
    return count;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  // ---------------------------------------------------------------------------
  // PRACTICAL PROJECT PROGRESS TRACKING (8 DELIVERABLES)
  // ---------------------------------------------------------------------------
  const [projectChecklist, setProjectChecklist] = useState({
    deliv1: false,
    deliv2: false,
    deliv3: false,
    deliv4: false,
    deliv5: false,
    deliv6: false,
    deliv7: false,
    deliv8: false,
  });

  const toggleChecklist = (key) => {
    setProjectChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(projectChecklist).filter(Boolean).length;

  // ---------------------------------------------------------------------------
  // SENIOR SYSTEMS ENGINEERING Q&A (6 DEEP PRODUCTION SCENARIOS)
  // ---------------------------------------------------------------------------
  const qaScenarios = [
    {
      id: "qa-1",
      title: "Why does the mathematical condition R + W > N NOT automatically guarantee Linearizability?",
      context:
        "An architect assumes that configuring N=3, R=2, W=2 in a leaderless datastore produces strong linearizability.",
      answer:
        "R + W > N guarantees that the read set and write set intersect on at least one replica. However, linearizability requires real-time global ordering: if client 1 finishes a write before client 2 begins a read, client 2 must see client 1's write. In leaderless quorum systems without consensus, a concurrent read can observe an in-progress write on 1 node, and a subsequent read by another client can hit 2 replicas that haven't received the write yet, causing time to appear to move backward! True linearizability requires consensus (Raft/Paxos) or synchronous read-repair write-back before responding.",
    },
    {
      id: "qa-2",
      title: "Why is Last-Write-Wins (LWW) considered dangerous for banking and grading, and how does CAS solve it?",
      context:
        "Apache Cassandra uses client-side timestamps to resolve concurrent writes by default.",
      answer:
        "LWW compares timestamps. If Instructor A grades an exam at 12:00:00.100 and Instructor B grades at 12:00:00.105 (due to clock skew), B's write silently overwrites A's write without warning. For financial ledgers or exam grades, Compare-and-Set (CAS) / Optimistic Concurrency Control must be used: `UPDATE grades SET score = 92, version = 2 WHERE id = 10 AND version = 1`. If version has advanced, the update aborts, forcing the application to handle the conflict explicitly.",
    },
    {
      id: "qa-3",
      title: "How do Session Tokens in Azure Cosmos DB implement Read-Your-Writes consistency efficiently?",
      context:
        "A user updates their avatar or password and refreshes their browser.",
      answer:
        "Cosmos DB passes a lightweight Session Token in the HTTP response header of every write. This token encodes the partition key and the Log Sequence Number (LSN) of the committed mutation. When the client makes subsequent reads, the SDK passes the session token to the replica. If the replica's local LSN is behind the token, the replica pauses until it catches up with the WAL stream before returning data, guaranteeing read-your-writes without routing all traffic to the primary.",
    },
    {
      id: "qa-4",
      title: "How does Google Cloud Spanner achieve external consistency without high-latency 2PC read locks?",
      context:
        "Executing distributed read-only queries across multiple geographical datacenters.",
      answer:
        "Spanner uses TrueTime (atomic clocks and GPS receivers) which exposes a bounded uncertainty window $\\epsilon \\le 7\\text{ms}$. When a read-write transaction commits, Spanner waits out the uncertainty interval before releasing locks ('commit wait'). Because timestamps are strictly aligned with physical real-world time, read-only transactions can execute at a past timestamp without taking any database locks or communicating with Paxos leaders, guaranteeing linearizable historical snapshots with zero lock contention.",
    },
    {
      id: "qa-5",
      title: "Why does the Redis WAIT command NOT make Redis a strongly consistent database?",
      context:
        "An engineer executes `SET key val` followed by `WAIT 2 1000` to wait for 2 replica acknowledgements.",
      answer:
        "The official Redis documentation explicitly states that WAIT increases write durability confidence, but does not provide strong consistency. Redis replication is asynchronous. If a master crashes right after acknowledging a write to the client, but before replicas persist the write to disk (or if an asynchronous failover promotes an out-of-sync replica), the acknowledged write can be permanently lost. Redis lacks quorum consensus and synchronous multi-replica commit protocols.",
    },
    {
      id: "qa-6",
      title: "What is the difference between Read Repair and Anti-Entropy Repair in Cassandra?",
      context:
        "Maintaining consistency across replicas that drift apart due to network drops or node maintenance.",
      answer:
        "Read Repair is opportunistic and reactive: it only occurs when an application reads a key with a quorum level (e.g. QUORUM) and detects divergent versions between the queried replicas. If a key is written once and never read again, it will remain permanently out of sync. Anti-Entropy Repair (nodetool repair) is proactive: background processes build Merkle trees (cryptographic hash trees of partition ranges) and compare them between replicas to synchronize all drifted data.",
    },
  ];

  // ---------------------------------------------------------------------------
  // 13 LESSONS CURRICULUM DATA
  // ---------------------------------------------------------------------------
  const lessons = [
    // WEEK 1
    {
      id: "10.1",
      week: 1,
      title: "What Does Consistency Mean?",
      summary:
        "Consistency in replicated data vs. transaction isolation vs. durability. The course version 7 to 8 replication lag example.",
      diagram: "consistency-hierarchy",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            In distributed databases, <strong>Consistency</strong> defines the formal rules governing what values a read operation may return and how concurrent operations appear to be ordered across multiple copies of data.
          </p>
          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs font-mono space-y-1">
            <span className="text-stone-500 font-bold block">The Fundamental Distinctions:</span>
            <div>1. <strong>Replication Consistency:</strong> What can a client observe across multiple physical replicas?</div>
            <div>2. <strong>Transaction Isolation (ACID &apos;I&apos;):</strong> What can concurrent transactions observe while executing?</div>
            <div>3. <strong>Durability (ACID &apos;D&apos;):</strong> Are committed writes preserved across node power failures?</div>
          </div>
          <h4 className="font-bold text-stone-900 text-base mt-3">The Course Version 7 &rarr; 8 Example</h4>
          <p className="text-xs text-stone-600">
            An instructor updates a course title to &quot;Advanced System Design&quot; (version 8). Replica A applies the update immediately. Replica B and C still hold version 7 due to network latency. The write was committed and successful. The system is online. Yet a subsequent reader may observe version 7. Consistency models define whether that stale read is legally permitted by the database contract.
          </p>
        </div>
      ),
    },
    {
      id: "10.2",
      week: 1,
      title: "The Hierarchy of Consistency Models",
      summary:
        "Eventual, Causal, Sequential, Linearizability, Serializability, Session Guarantees, and Bounded Staleness.",
      diagram: "consistency-hierarchy",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Consistency models are not a single binary toggle. They represent a spectrum of guarantees with distinct latency, availability, and ordering semantics:
          </p>
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">1. Linearizability (Strong Consistency)</strong>
              <p className="text-stone-600 mt-1">
                Every read returns the most recent globally committed write in real physical time. Operations appear instantaneous on a single global object. Highest coordination cost.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">2. Sequential Consistency</strong>
              <p className="text-stone-600 mt-1">
                Operations execute in some single total order that preserves the program order of each individual process, but may not respect real-world wall-clock precedence.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">3. Causal Consistency</strong>
              <p className="text-stone-600 mt-1">
                Causally related operations are observed in the same order by all nodes. Independent concurrent operations can be observed in different orders.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">4. Session Consistency &amp; Bounded Staleness</strong>
              <p className="text-stone-600 mt-1">
                Session guarantees enforce Read-Your-Writes and Monotonic Reads for a single user. Bounded Staleness places a hard ceiling on lag (e.g. max 5 seconds or 100 versions).
              </p>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">5. Eventual Consistency</strong>
              <p className="text-stone-600 mt-1">
                Replicas converge after updates cease, but readers may observe stale data for an unbounded period. Maximum availability and lowest latency.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "10.3",
      week: 1,
      title: "Consistency Models in Real Applications",
      summary:
        "Analyzing real-world scenarios: course popularity counters, progress tracking, conflicting grades, and comment trees.",
      diagram: "consistency-hierarchy",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Consistency should be chosen <strong>per business operation</strong>, not globally per database:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600">
            <li><strong>Public Popularity Counters:</strong> Eventual consistency is ideal. An approximate count of 1,002 vs 1,001 views causes zero harm.</li>
            <li><strong>Student Progress Tracking:</strong> Requires Read-Your-Writes session consistency. A student who saves progress at 80% must never see 65% on page refresh.</li>
            <li><strong>Instructor Grading:</strong> Requires Strong Consistency / Optimistic Locking. Two instructors updating grades concurrently must not silently overwrite each other.</li>
            <li><strong>Discussion Forum Threads:</strong> Requires Causal Consistency. Replies must never appear before the question they reference.</li>
          </ul>
        </div>
      ),
    },

    // WEEK 2
    {
      id: "10.4",
      week: 2,
      title: "Replication Topologies & Consistency",
      summary:
        "Leader-based primary/standby architectures vs. Leaderless multi-writer replication and replication factor N.",
      diagram: "quorum-intersection",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            The physical replication topology determines how writes are coordinated across nodes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Leader-Based Replication</strong>
              <p className="text-stone-600 mt-1">
                All writes go to one authoritative Primary node (e.g. PostgreSQL, MySQL). Primary determines global transaction order. Read replicas lag asynchronously.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Leaderless (Multi-Writer) Replication</strong>
              <p className="text-stone-600 mt-1">
                Clients write to any coordinator node, which broadcasts to $N$ replicas (e.g. Cassandra, Dynamo). Writes require $W$ acknowledgements; reads require $R$ responses.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "10.5",
      week: 2,
      title: "Understanding N, R, and W",
      summary:
        "Deriving the quorum intersection condition R + W > N, pigeonhole math, and majority quorum configurations.",
      diagram: "quorum-intersection",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            In quorum replication, let $N$ be the replication factor, $W$ be write acknowledgements, and $R$ be read responses:
          </p>
          <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs font-mono">
            <code>Minimum Intersection = max(0, R + W - N)</code><br />
            <code>Guaranteed Overlap Condition: R + W &gt; N</code>
          </div>
          <p className="text-xs text-stone-600">
            For $N=3, R=2, W=2$, we have $2 + 2 = 4 &gt; 3$. By the pigeonhole principle, every read quorum is guaranteed to include at least 1 replica that acknowledged the latest write!
          </p>
        </div>
      ),
    },
    {
      id: "10.6",
      week: 2,
      title: "How Quorum Writes Work",
      summary:
        "Coordinator write path, acknowledgement semantics, write availability trade-offs, and concurrent write conflicts.",
      diagram: "read-repair",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            During a quorum write, the coordinator broadcasts the mutation to all $N$ replicas in parallel. As soon as $W$ replicas respond with successful disk commits, the coordinator returns success to the client.
          </p>
          <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/70 text-xs text-amber-900">
            <strong>Important Reality:</strong> A write confirmed at $W=2$ does not mean all 3 nodes have the data. The third replica may be partitioned or slow. The system depends on Quorum Reads ($R=2$) and Read Repair to ensure clients observe the latest data.
          </div>
        </div>
      ),
    },
    {
      id: "10.7",
      week: 2,
      title: "How Quorum Reads Work",
      summary:
        "Read path, comparing version metadata, opportunistic read repair, and background anti-entropy synchronization.",
      diagram: "read-repair",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            When a client issues a quorum read ($R=2$), the coordinator queries 2 replicas. If Node B returns version 8 and Node C returns version 7, the coordinator returns version 8 to the user.
          </p>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded border border-stone-200 bg-white">
              <strong>Read Repair:</strong> The coordinator asynchronously sends version 8 to Node C in the background to bring it up to date.
            </div>
            <div className="p-2.5 rounded border border-stone-200 bg-white">
              <strong>Anti-Entropy Repair:</strong> Background workers build Merkle trees across all replicas to fix stale records that are never read.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "10.8",
      week: 2,
      title: "Tunable Consistency with Apache Cassandra",
      summary:
        "ONE, TWO, QUORUM, ALL, LOCAL_QUORUM, and Paxos-based lightweight transactions (LWT).",
      diagram: "quorum-intersection",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Apache Cassandra allows developers to configure consistency per query in CQL:
          </p>
          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs font-mono">
            CONSISTENCY QUORUM;<br />
            INSERT INTO grades (student_id, course_id, score) VALUES (101, 55, 92);
          </div>
          <p className="text-xs text-stone-600">
            For conditional mutations like <code>IF score = 85</code>, Cassandra uses Paxos-based Lightweight Transactions (LWT) which execute 4 network round trips across replicas to guarantee linearizable serial execution.
          </p>
        </div>
      ),
    },
    {
      id: "10.9",
      week: 2,
      title: "Product-Specific Consistency Models",
      summary:
        "Amazon DynamoDB, Azure Cosmos DB (5 levels), Redis WAIT limitations, and Google Cloud Spanner TrueTime.",
      diagram: "consistency-hierarchy",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Major cloud database engines implement consistency differently:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600">
            <li><strong>Amazon DynamoDB:</strong> Supports Eventually Consistent Reads (default) and Strongly Consistent Reads ($2\times$ read units).</li>
            <li><strong>Azure Cosmos DB:</strong> Offers 5 well-defined levels: Strong, Bounded Staleness, Session, Consistent Prefix, and Eventual.</li>
            <li><strong>Google Cloud Spanner:</strong> Uses TrueTime atomic clocks (ε ≤ 7ms) to guarantee externally consistent strict serializability across regions without read locks.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "10.10",
      week: 2,
      title: "Failure Scenarios & Quorum Availability",
      summary:
        "Calculating availability when replicas fail, network partition split-brain isolation, and W=1 trade-offs.",
      diagram: "quorum-intersection",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            In a cluster with $N=3, R=2, W=2$, operations can proceed if at least 2 nodes are online:
          </p>
          <div className="grid grid-cols-3 gap-2 text-xs font-mono text-center">
            <div className="p-2 rounded bg-emerald-50 border border-emerald-300">3 Online: OK</div>
            <div className="p-2 rounded bg-emerald-50 border border-emerald-300">2 Online: OK (1 dead tolerated)</div>
            <div className="p-2 rounded bg-red-50 border border-red-300 text-red-700">1 Online: Read &amp; Write FAILS</div>
          </div>
          <p className="text-xs text-stone-600 mt-2">
            During a network split (Group A: 2 nodes, Group B: 1 node), Group A satisfies the quorum requirement ($W=2$) while Group B rejects writes, strictly preventing split-brain divergence.
          </p>
        </div>
      ),
    },
    {
      id: "10.11",
      week: 2,
      title: "Concurrent Writes, Version Conflicts & Repair",
      summary:
        "Last-Write-Wins (LWW) clock skew hazards vs. Compare-and-Set (CAS) and Conflict-Free Replicated Data Types (CRDTs).",
      diagram: "concurrent-writes",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            When two clients write to the same key simultaneously without coordination:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Last-Write-Wins (LWW)</strong>
              <p className="text-stone-600 mt-1">
                Highest physical timestamp wins. Subject to clock drift; can silently delete valid updates without error notification.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Compare-and-Set (CAS)</strong>
              <p className="text-stone-600 mt-1">
                Requires <code>WHERE version = expected</code>. Rejects concurrent writes with conflict exceptions, preserving human intent.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // WEEK 3
    {
      id: "10.12",
      week: 3,
      title: "Matching Consistency to PrepSpaces Requirements",
      summary:
        "Production decision matrix across course catalog, lesson progress, exam grading, access control, and analytics.",
      diagram: "consistency-hierarchy",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Production architectures never apply a single consistency model across the entire platform. The optimal engineering strategy is to choose the <strong>weakest consistency guarantee that safely preserves business invariants</strong>.
          </p>
          <p className="text-xs text-stone-600">
            Explore the filterable PrepSpaces Consistency Decision Matrix in Tab 2 to inspect the exact requirements and rationales for every core platform workflow.
          </p>
        </div>
      ),
    },
    {
      id: "10.13",
      week: 3,
      title: "Common Quorum & Consistency Design Mistakes",
      summary:
        "The 10 critical anti-patterns: assuming R+W>N guarantees linearizability, treating replicas as backups, and ignoring clock drift.",
      diagram: "concurrent-writes",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Avoid these common architectural mistakes in distributed database engineering:
          </p>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded border border-red-200 bg-red-50/50 text-red-900">
              <strong>Mistake 1:</strong> Assuming $R + W &gt; N$ guarantees linearizability. (Intersection does not guarantee real-time ordering).
            </div>
            <div className="p-2.5 rounded border border-red-200 bg-red-50/50 text-red-900">
              <strong>Mistake 2:</strong> Assuming a successful write reached all replicas. (Acknowledgement thresholds vary by consistency level).
            </div>
            <div className="p-2.5 rounded border border-red-200 bg-red-50/50 text-red-900">
              <strong>Mistake 3:</strong> Treating a replica as a backup. (Accidental table drops replicate instantly).
            </div>
            <div className="p-2.5 rounded border border-red-200 bg-red-50/50 text-red-900">
              <strong>Mistake 4:</strong> Relying on physical timestamps to determine causality. (Clock skew makes timestamp ordering inaccurate).
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentLessonData = lessons.find((l) => l.id === activeLesson) || lessons[0];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] px-4 py-8 sm:px-8 md:px-12 antialiased selection:bg-[#f97316] selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Navigation Bar */}
        <ModuleNav
          track="system-design"
          currentModuleId="consistency"
          aiTutorLabel="Ask Consistency AI"
        />

        {/* Hero Section */}
        <div className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-0.5 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-700">
              <Scale size={12} className="text-[#f97316]" />
              System Design Masterclass · Module 10
            </span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-0.5 text-[11px] font-mono text-stone-600">
              Distributed Databases · Correctness, Coordination &amp; Data Visibility
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 leading-tight">
            Consistency Models, Replication, Quorum Reads, and Writes
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            Master distributed correctness: linearizability, sequential consistency, causal ordering, session guarantees,
            quorum intersection mathematics (\(R + W &gt; N\)), read repair, anti-entropy Merkle trees, and compare-and-set concurrency.
          </p>

          {/* Metadata Grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#e7e3da] pt-5">
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Duration</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">3 weeks</span>
              <span className="text-[10px] text-stone-500 block">40–50 study hours</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Prerequisites</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Modules 7 &amp; 9</span>
              <span className="text-[10px] text-stone-500 block">Replication &amp; Failures</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Core Engines</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Cassandra, DynamoDB</span>
              <span className="text-[10px] text-stone-500 block">Cosmos DB &amp; Spanner</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Final Project</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Replicated Store</span>
              <span className="text-[10px] text-orange-600 font-bold block">Simulate Reads, Writes &amp; Failures</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#e7e3da] mb-8 overflow-x-auto no-scrollbar gap-2">
          {[
            { id: "curriculum", label: "Curriculum & Lessons", count: "13 Lessons", icon: BookOpen },
            { id: "calculators", label: "Quorum & Decision Tools", count: "3 Simulators", icon: Sliders },
            { id: "qa", label: "Production Q&A", count: "6 Scenarios", icon: HelpCircle },
            { id: "project", label: "Capstone Project", count: "5 Phases", icon: FolderTree },
            { id: "assessment", label: "Module 10 Quiz", count: "9 Questions", icon: ShieldCheck },
            { id: "reading", label: "Reading & Research", count: "9 Citations", icon: ExternalLink },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "border-[#f97316] text-[#ea580c] bg-orange-50/50 rounded-t-xl"
                    : "border-transparent text-stone-500 hover:text-stone-900 hover:border-stone-300"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
                <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-mono text-stone-600">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CURRICULUM & 13 LESSONS                                     */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Lesson Selector */}
            <div className="lg:col-span-4 space-y-4">
              {/* Week Selector */}
              <div className="flex rounded-xl border border-stone-200 bg-white p-1 shadow-xs">
                {[
                  { num: 1, label: "Week 1: Models & Semantics" },
                  { num: 2, label: "Week 2: Quorums & Repair" },
                  { num: 3, label: "Week 3: Production Design" },
                ].map((wk) => (
                  <button
                    key={wk.num}
                    type="button"
                    onClick={() => {
                      setActiveWeek(wk.num);
                      const firstLessonOfWeek = lessons.find((l) => l.week === wk.num);
                      if (firstLessonOfWeek) setActiveLesson(firstLessonOfWeek.id);
                    }}
                    className={`flex-1 py-1.5 px-2 text-center text-[11px] font-bold rounded-lg transition cursor-pointer ${
                      activeWeek === wk.num
                        ? "bg-[#f97316] text-white shadow-xs"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    W{wk.num}
                  </button>
                ))}
              </div>

              {/* Lesson List */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block px-1">
                  Week {activeWeek} Lessons
                </span>
                {lessons
                  .filter((l) => l.week === activeWeek)
                  .map((l) => {
                    const isSelected = activeLesson === l.id;
                    return (
                      <button
                        key={l.id}
                        type="button"
                        onClick={() => setActiveLesson(l.id)}
                        className={`w-full text-left p-3 rounded-2xl border transition cursor-pointer flex items-start justify-between gap-3 ${
                          isSelected
                            ? "border-orange-300 bg-white shadow-xs ring-1 ring-orange-400"
                            : "border-stone-200/80 bg-white/70 hover:bg-white hover:border-stone-300"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold text-orange-600">
                              Lesson {l.id}
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-stone-900 mt-0.5">{l.title}</h4>
                          <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
                            {l.summary}
                          </p>
                        </div>
                        <ArrowRight
                          size={14}
                          className={`mt-1 shrink-0 ${
                            isSelected ? "text-orange-600" : "text-stone-300"
                          }`}
                        />
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Right Column: Detailed Lesson Viewer */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-4 mb-6">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-orange-600">
                      Module 10 · Week {currentLessonData.week} · Lesson {currentLessonData.id}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-0.5">
                      {currentLessonData.title}
                    </h3>
                  </div>
                </div>

                {/* Lesson Body Content */}
                {currentLessonData.content}

                {/* Interactive Architectural Diagram for this Lesson */}
                <div className="mt-8 pt-6 border-t border-[#e7e3da]">
                  <VisualDiagramComponentModule10 diagramType={currentLessonData.diagram} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE QUORUM & DECISION MATRIX TOOLS                  */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "calculators" && (
          <div className="space-y-8">
            {/* Tool 1: Quorum Overlap & Failure Calculator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Interactive Consistency Tool 1
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Quorum Intersection &amp; Fault Tolerance Calculator
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Calculate guaranteed intersection \(\max(0, R + W - N)\) and determine whether the cluster guarantees strong consistency under node failures.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Replication Factor (N)</span>
                    <span className="text-orange-600 font-mono">{calcN} Nodes</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="7"
                    step="2"
                    value={calcN}
                    onChange={(e) => {
                      const newN = Number(e.target.value);
                      setCalcN(newN);
                      setCalcW(Math.min(calcW, newN));
                      setCalcR(Math.min(calcR, newN));
                    }}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Total data replicas</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Write Quorum (W)</span>
                    <span className="text-orange-600 font-mono">{calcW} ACKs</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={calcN}
                    value={calcW}
                    onChange={(e) => setCalcW(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Replicas acknowledging write</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Read Quorum (R)</span>
                    <span className="text-orange-600 font-mono">{calcR} Responses</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={calcN}
                    value={calcR}
                    onChange={(e) => setCalcR(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Replicas queried on read</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div
                  className={`p-4 rounded-xl border ${
                    quorumSummary.hasOverlap ? "border-emerald-300 bg-emerald-50/50" : "border-red-300 bg-red-50/50"
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold uppercase block text-stone-600">
                    Overlap Status
                  </span>
                  <span
                    className={`text-sm font-extrabold mt-1 block ${
                      quorumSummary.hasOverlap ? "text-emerald-700" : "text-red-700"
                    }`}
                  >
                    {quorumSummary.hasOverlap
                      ? `${quorumSummary.minIntersection} Node Guaranteed Intersection`
                      : "Zero Overlap (Stale Read Risk!)"}
                  </span>
                  <span className="text-[10px] text-stone-500 mt-1 block font-mono">
                    R ({calcR}) + W ({calcW}) = {calcR + calcW} {quorumSummary.hasOverlap ? ">" : "<="} N ({calcN})
                  </span>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-white">
                  <span className="text-[10px] font-mono font-bold uppercase block text-stone-500">
                    Write Fault Tolerance
                  </span>
                  <span className="text-lg font-bold text-stone-900 mt-1 block">
                    Can survive {quorumSummary.writeFailureTolerance} dead node(s)
                  </span>
                  <span className="text-[10px] text-stone-400">
                    Requires {calcW} healthy node(s) to accept writes
                  </span>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-white">
                  <span className="text-[10px] font-mono font-bold uppercase block text-stone-500">
                    Read Fault Tolerance
                  </span>
                  <span className="text-lg font-bold text-stone-900 mt-1 block">
                    Can survive {quorumSummary.readFailureTolerance} dead node(s)
                  </span>
                  <span className="text-[10px] text-stone-400">
                    Requires {calcR} healthy node(s) to respond to reads
                  </span>
                </div>
              </div>
            </div>

            {/* Tool 2: PrepSpaces Consistency Decision Matrix */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                    Interactive Consistency Tool 2
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">
                    PrepSpaces Consistency Decision Matrix
                  </h3>
                </div>
                <div className="flex gap-1 bg-stone-100 p-0.5 rounded-lg text-xs font-semibold">
                  {["all", "catalog", "learning", "assessment", "security", "reporting"].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedWorkflow(cat)}
                      className={`px-2.5 py-1 rounded-md transition cursor-pointer capitalize ${
                        selectedWorkflow === cat
                          ? "bg-white text-orange-600 shadow-xs font-bold"
                          : "text-stone-600 hover:text-stone-900"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-stone-200 rounded-xl">
                  <thead className="bg-[#faf8f4] text-stone-700 font-bold border-b border-stone-200">
                    <tr>
                      <th className="p-3">Platform Capability</th>
                      <th className="p-3">Recommended Consistency</th>
                      <th className="p-3">Engineering Rationale</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {filteredWorkflows.map((item) => (
                      <tr key={item.id} className="hover:bg-orange-50/20">
                        <td className="p-3 font-bold text-stone-900">{item.name}</td>
                        <td className="p-3 font-mono font-bold text-orange-600">{item.recommended}</td>
                        <td className="p-3 text-stone-600 leading-relaxed">{item.rationale}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tool 3: 3-Replica Read Repair Simulator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                    Interactive Consistency Tool 3
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">
                    Three-Replica Read Repair Simulator (Phase 2 &amp; 3 Lab)
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Toggle replica power states, execute quorum reads, and observe automatic version reconciliation and read repair.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={executeQuorumRead}
                  className="px-4 py-2 bg-orange-600 text-white rounded-xl text-xs font-bold hover:bg-orange-700 transition cursor-pointer flex items-center gap-1.5"
                >
                  <RefreshCw size={13} />
                  <span>Execute Quorum Read (R=2)</span>
                </button>
              </div>

              {/* Replica Nodes Status Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                {Object.entries(replicasState).map(([nodeKey, nodeData]) => (
                  <div
                    key={nodeKey}
                    className={`p-4 rounded-xl border transition ${
                      nodeData.online
                        ? nodeData.version === 8
                          ? "border-emerald-300 bg-white"
                          : "border-amber-300 bg-amber-50/40"
                        : "border-red-300 bg-red-50/40 opacity-50"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-xs text-stone-900">Replica {nodeKey}</span>
                      <button
                        type="button"
                        onClick={() => toggleNodePower(nodeKey)}
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded cursor-pointer ${
                          nodeData.online ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {nodeData.online ? "ONLINE" : "OFFLINE"}
                      </button>
                    </div>
                    <div className="space-y-1 font-mono text-[11px]">
                      <div>Version: <strong className="text-stone-900">v{nodeData.version}</strong></div>
                      <div className="truncate text-stone-600">Title: &quot;{nodeData.title}&quot;</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Simulation Log */}
              <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs font-mono text-stone-800">
                <span className="text-stone-400 font-bold block mb-1">Coordinator Telemetry Log:</span>
                {simLog}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: PRODUCTION SYSTEMS ENGINEERING Q&A                          */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "qa" && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 mb-4 shadow-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                Engineering Interview Scenarios
              </span>
              <h3 className="text-lg font-bold text-stone-900">
                Senior Systems Engineering Q&amp;A: Consistency &amp; Quorums
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Deep architectural trade-offs between linearizability, quorum intersection, Cassandra LWW hazards, and Spanner TrueTime discussed in staff-level interviews.
              </p>
            </div>

            {qaScenarios.map((qa) => {
              const isExpanded = expandedQA[qa.id];
              return (
                <div
                  key={qa.id}
                  className="rounded-2xl border border-stone-200 bg-white shadow-xs overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => toggleQA(qa.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 hover:bg-stone-50/50 transition cursor-pointer"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider">
                        Scenario {qa.id.replace("qa-", "")}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-0.5">
                        {qa.title}
                      </h4>
                      <p className="text-xs text-stone-500 mt-1">{qa.context}</p>
                    </div>
                    {isExpanded ? (
                      <ChevronUp size={18} className="text-stone-400 shrink-0 mt-1" />
                    ) : (
                      <ChevronDown size={18} className="text-stone-400 shrink-0 mt-1" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-5 sm:px-5 border-t border-stone-100 bg-[#faf8f4] text-xs sm:text-sm text-stone-700 leading-relaxed pt-3">
                      <div className="font-semibold text-stone-900 mb-1 flex items-center gap-1.5">
                        <CheckCircle2 size={14} className="text-emerald-600" />
                        <span>Production Solution &amp; Architectural Rationale</span>
                      </div>
                      <p className="mt-1">{qa.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: PRACTICAL CAPSTONE PROJECT                                  */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "project" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                    Capstone Project Specification
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Build a Replicated Key-Value Consistency Simulator
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Simulate quorum reads, writes, version conflicts, node failures, and read repair across 5 rigorous phases.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-stone-500 block">Deliverables Completed</span>
                  <span className="text-xl font-black text-orange-600">
                    {completedCount} / 8
                  </span>
                </div>
              </div>

              {/* 5 Implementation Phases */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 1</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Implement Quorum Calculation</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Write automated tests for minimum intersection formula \(\max(0, R + W - N)\). Verify configurations: \(N=3, R=2, W=2\) (overlap 1) and \(N=3, R=1, W=2\) (overlap 0).
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 2</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Simulate Reads &amp; Writes</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Start with v1 on all 3 replicas. Write v2 to A and B (\(W=2\)). Leave C at v1. Execute read with \(R=2\) against B and C. Verify correct version resolution.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 3</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Simulate Node Failures</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Mark 1 replica unavailable and verify quorum succeeds. Mark 2 replicas unavailable and verify that reads and writes throw quorum failure exceptions rather than returning stale data.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 4</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Compare LWW vs. CAS</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Simulate two concurrent writers. Compare Last-Write-Wins (which silently overwrites updates) with Compare-and-Set optimistic locking (which detects conflicts and aborts).
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] md:col-span-2">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 5</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Validate Against Cassandra / DynamoDB</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Author an Architecture Decision Record (ADR) comparing your simulator&apos;s mathematical abstraction against production documentation: Cassandra Paxos LWT and DynamoDB Strong Consistency.
                  </p>
                </div>
              </div>

              {/* 8 Deliverables Checklist */}
              <div className="border-t border-[#e7e3da] pt-6">
                <h4 className="font-bold text-stone-900 text-sm mb-3">
                  Consistency Engineering Portfolio Checklist (8 Deliverables)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { key: "deliv1", label: "Formal written definitions and examples for all 5 consistency models" },
                    { key: "deliv2", label: "Quorum intersection calculator with automated test assertions" },
                    { key: "deliv3", label: "Three-replica read and write simulator implementation" },
                    { key: "deliv4", label: "Failure injection and stale-read test scenarios documented" },
                    { key: "deliv5", label: "Concurrent-write and conflict-resolution comparison (LWW vs CAS)" },
                    { key: "deliv6", label: "Consistency requirements matrix for 7 PrepSpaces platform workflows" },
                    { key: "deliv7", label: "Documented comparison against Apache Cassandra and Amazon DynamoDB" },
                    { key: "deliv8", label: "Architecture decision record explaining trade-offs and known limitations" },
                  ].map((item) => (
                    <label
                      key={item.key}
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 cursor-pointer transition select-none"
                    >
                      <input
                        type="checkbox"
                        checked={projectChecklist[item.key]}
                        onChange={() => toggleChecklist(item.key)}
                        className="accent-orange-600 h-4 w-4 rounded"
                      />
                      <span className={projectChecklist[item.key] ? "line-through text-stone-400" : "text-stone-800"}>
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
        {/* TAB 5: MODULE 10 ASSESSMENT QUIZ                                   */}
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
                    Module 10 Assessment: Consistency Models &amp; Quorums
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    9 questions verifying linearizability, quorum intersection math, session tokens, read repair, and conflict resolution.
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
                  Primary References &amp; Academic Papers
                </span>
                <h3 className="text-xl font-extrabold text-stone-900">
                  Module 10: Research and Reading List
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Foundational research papers and official cloud database documentation exploring consistency guarantees, quorum arithmetic, and repair mechanisms.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    id: 1,
                    title: "Carnegie Mellon University — Database Systems",
                    focus:
                      "Transactions, concurrency control, distributed databases, replication, and the relationship between database implementation and observable behavior.",
                    url: "https://15445.courses.cs.cmu.edu/",
                    linkText: "CMU Database Systems Courses",
                  },
                  {
                    id: 2,
                    title: "Jepsen — Consistency Models Reference",
                    focus:
                      "A comprehensive reference covering linearizability, sequential consistency, causal consistency, and relationships among formal models.",
                    url: "https://jepsen.io/consistency/models",
                    linkText: "Jepsen Consistency Reference",
                  },
                  {
                    id: 3,
                    title: "Amazon Dynamo — Highly Available Key-Value Store (2007)",
                    focus:
                      "The original paper exploring tunable quorums, vector clocks, hinted handoff, and anti-entropy repair with Merkle trees.",
                    url: "https://www.amazon.science/publications/dynamo-amazons-highly-available-key-value-store",
                    linkText: "Original Amazon Dynamo Paper",
                  },
                  {
                    id: 4,
                    title: "Apache Cassandra — Replication & Tunable Consistency",
                    focus:
                      "Token-ring partitioning, replica placement, consistency levels (ONE, QUORUM, LOCAL_QUORUM), and lightweight transactions.",
                    url: "https://cassandra.apache.org/doc/latest/cassandra/architecture/dynamo.html",
                    linkText: "Cassandra Architecture Guide",
                  },
                  {
                    id: 5,
                    title: "Amazon DynamoDB — Read Consistency",
                    focus:
                      "Strongly consistent vs. eventually consistent reads, read capacity unit costs, and multi-region global table consistency modes.",
                    url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html",
                    linkText: "AWS DynamoDB Consistency Docs",
                  },
                  {
                    id: 6,
                    title: "Azure Cosmos DB — Five Consistency Levels",
                    focus:
                      "Strong, Bounded Staleness, Session (Read-Your-Writes), Consistent Prefix, and Eventual consistency trade-offs.",
                    url: "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
                    linkText: "Microsoft Azure Cosmos DB Docs",
                  },
                  {
                    id: 7,
                    title: "Google Cloud Spanner — Transactions and External Consistency",
                    focus:
                      "Strict serializability, Paxos replication, TrueTime atomic clocks, and lock-free historical snapshot reads.",
                    url: "https://docs.cloud.google.com/spanner/docs/transactions",
                    linkText: "Google Cloud Spanner Docs",
                  },
                  {
                    id: 8,
                    title: "etcd — API Guarantees & Linearizability",
                    focus:
                      "Linearizable reads and writes, strict serializability, Raft consensus-backed state, and lease management.",
                    url: "https://etcd.io/docs/v3.4/learning/api_guarantees/",
                    linkText: "etcd API Guarantees Documentation",
                  },
                  {
                    id: 9,
                    title: "Redis — Replication Consistency & WAIT Command",
                    focus:
                      "Asynchronous replication, replica acknowledgement caveats, and why WAIT does not create a strongly consistent database.",
                    url: "https://redis.io/docs/latest/operate/oss_and_stack/management/replication/",
                    linkText: "Official Redis Replication Docs",
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
                    What You Mastered in Module 10
                  </span>
                  <span className="text-sm font-bold text-stone-900 block mt-0.5">
                    Distributed Consistency Models, Replication Quorums &amp; Data Correctness
                  </span>
                  <span className="text-xs text-stone-600 block mt-0.5">
                    You can now engineer distributed storage systems with strict quorum intersection (\(R + W &gt; N\)), optimistic CAS concurrency, read repair, and session guarantees.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => navigate("/learning/system-design/distributed-systems")}
                    className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                  >
                    <span>Back to Module 9</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/learning/system-design/consensus")}
                    className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                  >
                    <span>Start Module 11 (Consensus &amp; Coordination)</span>
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
